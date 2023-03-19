class Site {
    name: string;
    baseUrl: string;

    constructor(name: string, baseUrl: string) {
        this.name = name;
        this.baseUrl = baseUrl;
    }
}

class Robinhood extends Site {
    constructor() {
        super("Robinhood", `https://robinhood.com`);
    }

    getUrlForTicker(ticker: Ticker): string {
        return `${this.baseUrl}/${ticker.type}/${ticker.symbol}/`;
    }
}
