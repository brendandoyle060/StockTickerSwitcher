import { Crypto } from "../../src/tickers/Crypto";
import { Etf } from "../../src/tickers/Etf";
import { Stock } from "../../src/tickers/Stock";
import { TestTicker } from "./TestTicker";

export class TestData {
    // Stocks
    brka: TestTicker;
    brkb: TestTicker;
    cakeStock: TestTicker;
    gme: TestTicker;
    wm: TestTicker;

    // Etfs
    spy: TestTicker;
    xsd: TestTicker;

    // Cryptos
    btc: TestTicker;
    cakeCrypto: TestTicker;
    eth: TestTicker;
    grt: TestTicker;

    // Special
    gmeLoggedOut: TestTicker;
    noResultsPage: TestTicker;

    constructor() {
        // Stocks
        this.brka = new TestTicker(
            new Stock("BRK.A", "Berkshire Hathaway"),
            "stock-brka",
            "https://robinhood.com/stocks/BRK.A",
            "https://finance.yahoo.com/quote/BRK-A",
            false,
            false,
            false
        );
        this.brkb = new TestTicker(
            new Stock("BRK.B", "Berkshire Hathaway"),
            "stock-brkb",
            "https://robinhood.com/stocks/BRK.B",
            "https://finance.yahoo.com/quote/BRK-B",
            false,
            false,
            false
        );
        this.cakeStock = new TestTicker(
            new Stock("CAKE", "Cheesecake Factory"),
            "stock-cake",
            "https://robinhood.com/stocks/CAKE",
            "https://finance.yahoo.com/quote/CAKE",
            false,
            false,
            false
        );
        this.gme = new TestTicker(
            new Stock("GME", "GameStop"),
            "stock-gme",
            "https://robinhood.com/stocks/GME",
            "https://finance.yahoo.com/quote/GME",
            false,
            false,
            false
        );
        this.wm = new TestTicker(
            new Stock("WM", "Waste Management"),
            "stock-wm",
            "https://robinhood.com/stocks/WM",
            "https://finance.yahoo.com/quote/WM",
            false,
            false,
            false
        );

        // Etfs
        this.spy = new TestTicker(
            new Etf("SPY", "SPDR S&P 500 ETF"),
            "etf-spy",
            "https://robinhood.com/stocks/SPY",
            "https://finance.yahoo.com/quote/SPY",
            true,
            false,
            false
        );
        this.xsd = new TestTicker(
            new Etf("XSD", "SPDR S&P Semiconductor ETF"),
            "etf-xsd",
            "https://robinhood.com/stocks/XSD",
            "https://finance.yahoo.com/quote/XSD",
            true,
            false,
            false
        );

        // Cryptos
        this.btc = new TestTicker(
            new Crypto("BTC", "Bitcoin"),
            "crypto-btc",
            "https://robinhood.com/crypto/BTC",
            "https://finance.yahoo.com/quote/BTC-USD",
            false,
            true,
            false
        );
        this.cakeCrypto = new TestTicker(
            new Crypto("CAKE", "Pancake Swap"),
            "crypto-cake",
            "https://robinhood.com/crypto/CAKE",
            "https://finance.yahoo.com/quote/CAKE-USD",
            false,
            true,
            false
        );
        this.eth = new TestTicker(
            new Crypto("ETH", "Ethereum"),
            "crypto-eth",
            "https://robinhood.com/crypto/ETH",
            "https://finance.yahoo.com/quote/ETH-USD",
            false,
            true,
            false
        );
        this.grt = new TestTicker(
            new Crypto("GRT", "The Graph"),
            "crypto-grt",
            "https://robinhood.com/crypto/GRT",
            "https://finance.yahoo.com/quote/GRT6719-USD",
            false,
            true,
            false
        );

        // Special
        this.gmeLoggedOut = new TestTicker(
            new Stock("GME", "GameStop"),
            "stock-gme-logged-out",
            "https://robinhood.com/stocks/GME",
            "https://finance.yahoo.com/quote/GME",
            false,
            false,
            false
        );
        this.noResultsPage = new TestTicker(
            new Stock("NORES", "No Results Page"),
            "no-results-page",
            "https://robinhood.com/stocks/NORES",
            "https://finance.yahoo.com/quote/NORES",
            false,
            false,
            true
        );
    }
}
