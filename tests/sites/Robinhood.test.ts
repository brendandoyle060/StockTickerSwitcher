import { Robinhood } from "../../src/sites/Robinhood";
import { Crypto } from "../../src/tickers/Crypto";
import { Etf } from "../../src/tickers/Etf";
import { Stock } from "../../src/tickers/Stock";
import { Ticker } from "../../src/tickers/Ticker";
import { JSDOM } from "jsdom";

import { getDoc } from "../utils/helpers";

describe("Testing Robinhood", () => {
    var rh: Robinhood = new Robinhood();
    // Tests for RH -> YF
    test.concurrent.each([
        [
            "stock-gme",
            "https://robinhood.com/stocks/GME",
            new Stock("GME", "GameStop"),
        ],
        [
            "stock-gme-logged-out",
            "https://robinhood.com/stocks/GME",
            new Stock("GME", "GameStop"),
        ],
        [
            "etf-spy",
            "https://robinhood.com/stocks/SPY",
            new Etf("SPY", "SPDR S&P 500 ETF"),
        ],
        [
            "crypto-eth",
            "https://robinhood.com/crypto/ETH",
            new Crypto("ETH", "Ethereum"),
        ],
        [
            "stock-brka",
            "https://robinhood.com/stocks/BRK.A",
            new Stock("BRK.A", "Berkshire Hathaway"),
        ],
        [
            "stock-brkb",
            "https://robinhood.com/stocks/BRK.B",
            new Stock("BRK.B", "Berkshire Hathaway"),
        ],
        [
            "stock-cake",
            "https://robinhood.com/stocks/CAKE",
            new Stock("CAKE", "Cheesecake Factory"),
        ],
        [
            "crypto-cake",
            "https://robinhood.com/crypto/CAKE",
            new Crypto("CAKE", "Pancake Swap"),
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
        [
            "stock-gme-logged-out",
            "https://robinhood.com/stocks/GME",
            false,
            false,
        ],
        ["etf-spy", "https://robinhood.com/stocks/SPY", true, false],
        ["crypto-eth", "https://robinhood.com/crypto/ETH", false, true],
        ["stock-brka", "https://robinhood.com/stocks/BRK.A", false, false],
        ["stock-brkb", "https://robinhood.com/stocks/BRK.B", false, false],
        ["stock-cake", "https://robinhood.com/stocks/CAKE", false, false],
        ["crypto-cake", "https://robinhood.com/crypto/CAKE", false, true],
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
        [
            new Stock("BRK.A", "Berkshire Hathaway"),
            "https://robinhood.com/stocks/BRK.A",
        ],
        [
            new Stock("BRK.B", "Berkshire Hathaway"),
            "https://robinhood.com/stocks/BRK.B",
        ],
    ])(
        "createUrlForTicker on %s, expecting %s",
        (ticker: Ticker, url: string) => {
            expect(rh.createUrlForTicker(ticker)).toEqual(url);
        }
    );
});
