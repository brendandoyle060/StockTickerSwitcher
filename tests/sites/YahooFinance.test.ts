import { YahooFinance } from "../../src/sites/YahooFinance";
import { Crypto } from "../../src/tickers/Crypto";
import { Etf } from "../../src/tickers/Etf";
import { Stock } from "../../src/tickers/Stock";

describe("Testing YahooFinance", () => {
    var yf: YahooFinance = new YahooFinance();
    test("createUrlForTicker - Stock", () => {
        let gme = new Stock("GME", "GameStop");

        expect(yf.createUrlForTicker(gme)).toBe(
            "https://finance.yahoo.com/quote/GME"
        );
    });
    test("createUrlForTicker - ETF", () => {
        let xsd = new Etf("XSD", "SPDR S&P Semiconductor ETF");

        expect(yf.createUrlForTicker(xsd)).toBe(
            "https://finance.yahoo.com/quote/XSD"
        );
    });
    test("createUrlForTicker - Crypto", () => {
        let btc = new Crypto("BTC", "Bitcoin");

        expect(yf.createUrlForTicker(btc)).toBe(
            "https://finance.yahoo.com/quote/BTC-USD"
        );
    });
});
