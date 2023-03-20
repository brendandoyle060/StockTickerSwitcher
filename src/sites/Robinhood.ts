class Robinhood extends Site {
    constructor() {
        super("Robinhood", `https://robinhood.com`);
    }

    createUrlForTicker(ticker: Ticker): string {
        return `${this.baseUrl}/${ticker.type}/${ticker.symbol}/`;
    }

    getTicker(url: string, document: Document): Ticker {
        var titleElement = document.querySelector("title");
        var title = titleElement.textContent;
        var splitTitle = title.split(" ");

        let tickerString = splitTitle[0];
        console.log("tickerString: " + tickerString);
        return new Ticker(
            tickerString,
            this.getName(document),
            this.getTickerType(url, document)
        );
    }

    getTickerType(url: string, document: Document): TickerType {
        if (this.isEtf(document)) {
            return TickerType.ETF;
        } else if (this.isCrypto(url)) {
            return TickerType.CRYPTO;
        } else {
            return TickerType.STOCK;
        }
    }

    getName(document: Document): string {
        return document.querySelector("main header h1").textContent.trim();
    }

    isCrypto(url: string): boolean {
        return url.includes("crypto");
    }

    isEtf(document: Document): boolean {
        let etfCategory = document.querySelector("#etf-category");
        return !(etfCategory === null);
    }
}
