import { Robinhood } from "../../src/sites/Robinhood";
import { Crypto } from "../../src/tickers/Crypto";
import { Etf } from "../../src/tickers/Etf";
import { Stock } from "../../src/tickers/Stock";
import { Ticker } from "../../src/tickers/Ticker";
import { JSDOM } from "jsdom";

import fs from "fs";
import path from "path";
import { TickerType } from "../../src/tickers/TickerType";

describe("Testing Robinhood", () => {
    var rh: Robinhood = new Robinhood();

    test.each([
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
            let html = fs.readFileSync(
                path.resolve(
                    __dirname,
                    `../resources/sites/Robinhood/${filename}.html`
                ),
                "utf8"
            );
            let dom = new JSDOM(html, { runScripts: "outside-only" });
            let doc = dom.window.document;

            expect(rh.getTicker(url, doc)).toEqual(ticker);
        }
    );
});
