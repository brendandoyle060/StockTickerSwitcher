import { Site } from "../../src/sites/Site";
import { Robinhood } from "../../src/sites/Robinhood";
import { YahooFinance } from "../../src/sites/YahooFinance";

import { Crypto } from "../../src/tickers/Crypto";
import { Etf } from "../../src/tickers/Etf";
import { Stock } from "../../src/tickers/Stock";
import { Ticker } from "../../src/tickers/Ticker";
import { JSDOM } from "jsdom";

import { getDoc } from "../utils/helpers";

describe("Testing All Sites", () => {
    var rh: Robinhood = new Robinhood();
    var yf: YahooFinance = new YahooFinance();
    var allSites = [rh, yf];

    allSites.forEach((site: Site) =>
        test.concurrent.each([
            [
                new Stock("WM", "Waste Management"),
                "https://robinhood.com/stocks/WM",
                "https://finance.yahoo.com/quote/WM",
            ],
            [
                new Etf("XSD", "SPDR S&P Semiconductor ETF"),
                "https://robinhood.com/stocks/XSD",
                "https://finance.yahoo.com/quote/XSD",
            ],
            [
                new Crypto("BTC", "Bitcoin"),
                "https://robinhood.com/crypto/BTC",
                "https://finance.yahoo.com/quote/BTC-USD",
            ],
        ])(
            "createUrlForTicker on %s",
            (ticker: Ticker, rhUrl: string, yfUrl: string) => {
                if (site.is() === "Robinhood") {
                    expect(site.createUrlForTicker(ticker)).toEqual(rhUrl);
                } else if (site.is() === "YahooFinance") {
                    expect(site.createUrlForTicker(ticker)).toEqual(yfUrl);
                }
            }
        )
    );

    allSites.forEach((site: Site) =>
        test.concurrent.each([
            ["no-results-page", true],
            ["stock-gme", false],
            ["etf-spy", false],
            ["crypto-eth", false],
        ])(
            "isNoResultsPage on %s",
            (filename: string, isNoResultsPage: boolean) => {
                let html = getDoc(site.name, filename);
                let dom = new JSDOM(html, { runScripts: "outside-only" });
                let doc = dom.window.document;

                if (site.is() === "Robinhood") {
                    expect(site.isNoResultsPage(doc)).toEqual(isNoResultsPage);
                } else if (site.is() === "YahooFinance") {
                    expect(site.isNoResultsPage(doc)).toEqual(isNoResultsPage);
                }
            }
        )
    );
});
