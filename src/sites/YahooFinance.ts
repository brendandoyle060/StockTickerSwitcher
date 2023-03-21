class YahooFinance extends Site {
    constructor() {
        super("Yahoo! Finance", `https://finance.yahoo.com`);
    }

    createUrlForTicker(ticker: Ticker): string {
        let symbol = ticker.symbol;
        if (ticker.type === TickerType.CRYPTO) {
            symbol = symbol + "-USD";
        }
        return `${this.baseUrl}/quote/${symbol}`;
    }
}
