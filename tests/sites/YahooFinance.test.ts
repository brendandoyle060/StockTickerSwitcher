import { YahooFinance } from "../../src/sites/YahooFinance";
import { Crypto } from "../../src/tickers/Crypto";
import { Etf } from "../../src/tickers/Etf";
import { Stock } from "../../src/tickers/Stock";
import { Ticker } from "../../src/tickers/Ticker";

describe("Testing YahooFinance", () => {
    var yf: YahooFinance = new YahooFinance();

    test.each([
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
    ])(
        "createUrlForTicker on %s, expecting %s",
        (ticker: Ticker, url: string) => {
            expect(yf.createUrlForTicker(ticker)).toEqual(url);
        }
    );
});
