class YahooFinance extends Site {
    constructor() {
        super("Yahoo! Finance", `https://finance.yahoo.com`);
    }

    getUrlForTicker(ticker: Ticker): string {
        return `${this.baseUrl}/${ticker.type}/${ticker.symbol}/`;
    }
}
