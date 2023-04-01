import { Robinhood } from "../../src/sites/Robinhood";
import { Crypto } from "../../src/tickers/Crypto";
import { Etf } from "../../src/tickers/Etf";
import { Stock } from "../../src/tickers/Stock";

describe("Testing Robinhood", () => {
    var rh: Robinhood = new Robinhood();
    test("createUrlForTicker - Stock", () => {
        let gme = new Stock("GME", "GameStop");

        expect(rh.createUrlForTicker(gme)).toBe(
            "https://robinhood.com/stocks/GME"
        );
    });
    test("createUrlForTicker - ETF", () => {
        let xsd = new Etf("XSD", "SPDR S&P Semiconductor ETF");

        expect(rh.createUrlForTicker(xsd)).toBe(
            "https://robinhood.com/stocks/XSD"
        );
    });
    test("createUrlForTicker - Crypto", () => {
        let btc = new Crypto("BTC", "Bitcoin");

        expect(rh.createUrlForTicker(btc)).toBe(
            "https://robinhood.com/crypto/BTC"
        );
    });
});
