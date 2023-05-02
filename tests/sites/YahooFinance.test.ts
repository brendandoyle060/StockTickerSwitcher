import { YahooFinance } from "../../src/sites/YahooFinance";
import { Crypto } from "../../src/tickers/Crypto";
import { Etf } from "../../src/tickers/Etf";
import { Stock } from "../../src/tickers/Stock";
import { Ticker } from "../../src/tickers/Ticker";
import { JSDOM } from "jsdom";

import { getDoc } from "../utils/helpers";

describe("Testing YahooFinance", () => {
    var yf: YahooFinance = new YahooFinance();
    // Tests for RH -> YF
    test.concurrent.each([
        [
            new Stock("WM", "Waste Management"),
            "https://finance.yahoo.com/quote/WM",
        ],
        [
            new Etf("XSD", "SPDR S&P Semiconductor ETF"),
            "https://finance.yahoo.com/quote/XSD",
        ],
        [
            new Crypto("BTC", "Bitcoin"),
            "https://finance.yahoo.com/quote/BTC-USD",
        ],
        [
            new Stock("BRK.A", "Berkshire Hathaway"),
            "https://finance.yahoo.com/quote/BRK-A",
        ],
        [
            new Stock("BRK.B", "Berkshire Hathaway"),
            "https://finance.yahoo.com/quote/BRK-B",
        ],
    ])(
        "createUrlForTicker on %s, expecting %s",
        (ticker: Ticker, url: string) => {
            expect(yf.createUrlForTicker(ticker)).toEqual(url);
        }
    );

    // Tests for YF -> RH
    test.concurrent.each([
        [
            "stock-gme",
            "https://finance.yahoo.com/quote/GME",
            new Stock("GME", "GameStop"),
        ],
        [
            "etf-spy",
            "https://finance.yahoo.com/quote/SPY",
            new Etf("SPY", "SPDR S&P 500 ETF"),
        ],
        [
            "crypto-eth",
            "https://finance.yahoo.com/quote/ETH-USD",
            new Crypto("ETH", "Ethereum"),
        ],
        [
            "stock-brka",
            "https://finance.yahoo.com/quote/BRK-A",
            new Stock("BRK.A", "Berkshire Hathaway"),
        ],
        [
            "stock-brkb",
            "https://finance.yahoo.com/quote/BRK-B",
            new Stock("BRK.B", "Berkshire Hathaway"),
        ],
    ])(
        "getTicker on %s and %s, expecting %s",
        (filename: string, url: string, ticker: Ticker) => {
            let html = getDoc(yf.name, filename);
            let dom = new JSDOM(html, { runScripts: "outside-only" });
            let doc = dom.window.document;

            expect(yf.getTicker(url, doc).equals(ticker)).toBeTruthy();
        }
    );

    test.concurrent.each([
        ["stock-gme", "https://finance.yahoo.com/quote/GME", false, false],
        ["etf-spy", "https://finance.yahoo.com/quote/SPY", true, false],
        ["crypto-eth", "https://finance.yahoo.com/quote/ETH-USD", false, true],
        ["stock-brka", "https://finance.yahoo.com/quote/BRK-A", false, false],
        ["stock-brkb", "https://finance.yahoo.com/quote/BRK-B", false, false],
    ])(
        "isEtf and isCrypto on %s and %s, expecting %p and %p",
        (filename: string, url: string, isEtf: boolean, isCrypto: boolean) => {
            let html = getDoc(yf.name, filename);
            let dom = new JSDOM(html, { runScripts: "outside-only" });
            let doc = dom.window.document;

            expect(yf.isEtf(doc)).toEqual(isEtf);
            expect(yf.isCrypto(doc)).toEqual(isCrypto);
        }
    );
});
