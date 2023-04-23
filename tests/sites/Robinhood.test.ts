import { Robinhood } from "../../src/sites/Robinhood";
import { Crypto } from "../../src/tickers/Crypto";
import { Etf } from "../../src/tickers/Etf";
import { Stock } from "../../src/tickers/Stock";
import { Ticker } from "../../src/tickers/Ticker";
import { JSDOM } from "jsdom";

import { TickerType } from "../../src/tickers/TickerType";
import { getDoc } from "../utils/helpers";

describe("Testing Robinhood", () => {
    var rh: Robinhood = new Robinhood();
    // Tests for RH -> YF
    test.concurrent.each([
        [
            "stock-gme",
            "https://robinhood.com/stocks/GME",
            new Ticker("GME", "GameStop", new TickerType("stock")),
        ],
        [
            "etf-spy",
            "https://robinhood.com/stocks/SPY",
            new Ticker("SPY", "SPDR S&P 500 ETF", new TickerType("etf")),
        ],
        [
            "crypto-eth",
            "https://robinhood.com/crypto/ETH",
            new Ticker("ETH", "Ethereum", new TickerType("crypto")),
        ],
    ])(
        "getTicker on %s and %s, expecting %s",
        (filename: string, url: string, ticker: Ticker) => {
            let html = getDoc(rh.name, filename);
            let dom = new JSDOM(html, { runScripts: "outside-only" });
            let doc = dom.window.document;

            expect(rh.getTicker(url, doc)).toEqual(ticker);
        }
    );

    test.concurrent.each([
        ["stock-gme", "https://robinhood.com/stocks/GME", false, false],
        ["etf-spy", "https://robinhood.com/stocks/SPY", true, false],
        ["crypto-eth", "https://robinhood.com/crypto/ETH", false, true],
    ])(
        "isEtf and isCrypto on %s and %s, expecting %p and %p",
        (filename: string, url: string, isEtf: boolean, isCrypto: boolean) => {
            let html = getDoc(rh.name, filename);
            let dom = new JSDOM(html, { runScripts: "outside-only" });
            let doc = dom.window.document;

            expect(rh.isEtf(doc)).toEqual(isEtf);
            expect(rh.isCrypto(url)).toEqual(isCrypto);
        }
    );

    // Tests for YF -> RH
    test.concurrent.each([
        [new Stock("GME", "GameStop"), "https://robinhood.com/stocks/GME"],
        [
            new Etf("SPY", "SPDR S&P 500 ETF"),
            "https://robinhood.com/stocks/SPY",
        ],
        [new Crypto("ETH", "Ethereum"), "https://robinhood.com/crypto/ETH"],
    ])(
        "createUrlForTicker on %s, expecting %s",
        (ticker: Ticker, url: string) => {
            expect(rh.createUrlForTicker(ticker)).toEqual(url);
        }
    );
});
