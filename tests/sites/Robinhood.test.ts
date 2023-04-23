import { Robinhood } from "../../src/sites/Robinhood";
import { Ticker } from "../../src/tickers/Ticker";
import { JSDOM } from "jsdom";

import { TickerType } from "../../src/tickers/TickerType";
import { getDoc } from "../utils/helpers";

describe("Testing Robinhood", () => {
    var rh: Robinhood = new Robinhood();

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
});
