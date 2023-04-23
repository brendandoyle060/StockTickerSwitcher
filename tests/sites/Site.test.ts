import { Site } from "../../src/sites/Site";
import { Robinhood } from "../../src/sites/Robinhood";
import { YahooFinance } from "../../src/sites/YahooFinance";

import { Crypto } from "../../src/tickers/Crypto";
import { Etf } from "../../src/tickers/Etf";
import { Stock } from "../../src/tickers/Stock";
import { Ticker } from "../../src/tickers/Ticker";

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
                } else if (site.is() === "Yahoo! Finance") {
                    expect(site.createUrlForTicker(ticker)).toEqual(yfUrl);
                }
            }
        )
    );
});
