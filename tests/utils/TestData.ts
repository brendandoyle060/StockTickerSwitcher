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
    ethLoggedOut: TestTicker;
    noResultsPage: TestTicker;
    homepage: TestTicker;
    mostPopular: TestTicker;
    news: TestTicker;

    constructor() {
        // Stocks
        this.brka = new TestTicker(
            new Stock("BRK.A", "Berkshire Hathaway"),
            "stock-brka",
            "https://robinhood.com/stocks/BRK.A",
            "https://finance.yahoo.com/quote/BRK-A",
            false,
            false,
            false,
            true
        );
        this.brkb = new TestTicker(
            new Stock("BRK.B", "Berkshire Hathaway"),
            "stock-brkb",
            "https://robinhood.com/stocks/BRK.B",
            "https://finance.yahoo.com/quote/BRK-B",
            false,
            false,
            false,
            true
        );
        this.cakeStock = new TestTicker(
            new Stock("CAKE", "Cheesecake Factory"),
            "stock-cake",
            "https://robinhood.com/stocks/CAKE",
            "https://finance.yahoo.com/quote/CAKE",
            false,
            false,
            false,
            true
        );
        this.gme = new TestTicker(
            new Stock("GME", "GameStop"),
            "stock-gme",
            "https://robinhood.com/stocks/GME",
            "https://finance.yahoo.com/quote/GME",
            false,
            false,
            false,
            true
        );
        this.wm = new TestTicker(
            new Stock("WM", "Waste Management"),
            "stock-wm",
            "https://robinhood.com/stocks/WM",
            "https://finance.yahoo.com/quote/WM",
            false,
            false,
            false,
            true
        );

        // Etfs
        this.spy = new TestTicker(
            new Etf("SPY", "SPDR S&P 500 ETF"),
            "etf-spy",
            "https://robinhood.com/stocks/SPY",
            "https://finance.yahoo.com/quote/SPY",
            true,
            false,
            false,
            true
        );
        this.xsd = new TestTicker(
            new Etf("XSD", "SPDR S&P Semiconductor ETF"),
            "etf-xsd",
            "https://robinhood.com/stocks/XSD",
            "https://finance.yahoo.com/quote/XSD",
            true,
            false,
            false,
            true
        );

        // Cryptos
        this.btc = new TestTicker(
            new Crypto("BTC", "Bitcoin"),
            "crypto-btc",
            "https://robinhood.com/crypto/BTC",
            "https://finance.yahoo.com/quote/BTC-USD",
            false,
            true,
            false,
            true
        );
        this.cakeCrypto = new TestTicker(
            new Crypto("CAKE", "Pancake Swap"),
            "crypto-cake",
            "https://robinhood.com/crypto/CAKE",
            "https://finance.yahoo.com/quote/CAKE-USD",
            false,
            true,
            false,
            true
        );
        this.eth = new TestTicker(
            new Crypto("ETH", "Ethereum"),
            "crypto-eth",
            "https://robinhood.com/crypto/ETH",
            "https://finance.yahoo.com/quote/ETH-USD",
            false,
            true,
            false,
            true
        );
        this.grt = new TestTicker(
            new Crypto("GRT", "The Graph"),
            "crypto-grt",
            "https://robinhood.com/crypto/GRT",
            "https://finance.yahoo.com/quote/GRT6719-USD",
            false,
            true,
            false,
            true
        );

        // Special
        this.gmeLoggedOut = new TestTicker(
            new Stock("GME", "GameStop"),
            "loggedOut-stock-gme",
            "https://robinhood.com/us/en/stocks/GME/",
            "https://finance.yahoo.com/quote/GME",
            false,
            false,
            false,
            true
        );
        this.ethLoggedOut = new TestTicker(
            new Crypto("ETH", "Ethereum"),
            "loggedOut-crypto-eth",
            "https://robinhood.com/us/en/crypto/ETH/",
            "https://finance.yahoo.com/quote/ETH-USD",
            false,
            true,
            false,
            true
        );
        this.noResultsPage = new TestTicker(
            new Stock("NORES", "No Results Page"),
            "no-results-page",
            "https://robinhood.com/stocks/NORES",
            "https://finance.yahoo.com/quote/NORES",
            false,
            false,
            true,
            true
        );
        this.homepage = new TestTicker(
            null,
            "homepage",
            "https://robinhood.com/",
            "https://finance.yahoo.com/",
            false,
            false,
            false,
            false
        );
        this.mostPopular = new TestTicker(
            null,
            "most-popular",
            "https://robinhood.com/lists/robinhood/e8ef4c1f-244f-4db5-a582-c4c37f3c8e8e",
            "",
            false,
            false,
            false,
            false
        );
        this.news = new TestTicker(
            null,
            "news",
            "",
            "https://finance.yahoo.com/news/2-strong-buy-dividend-stocks-132619029.html",
            false,
            false,
            false,
            false
        );
    }
}
