import { Site } from "./Site";
import { TickerType } from "../tickers/TickerType";
import { Ticker } from "../tickers/Ticker";

export class Robinhood extends Site {
    constructor() {
        super("Robinhood", `https://robinhood.com`);
    }

    createUrlForTicker(ticker: Ticker): string {
        if (ticker.tickerType.value === "crypto") {
            return `${this.baseUrl}/${ticker.tickerType.value}/${ticker.symbol}`;
        } else {
            // ETFs also get the 'stocks' path in the url on RH
            return `${this.baseUrl}/stocks/${ticker.symbol}`;
        }
    }

    getTicker(url: string, document: Document): Ticker {
        var titleElement = document.querySelector("title");
        var title = titleElement.textContent;
        var splitTitle = title.split(" ");

        let tickerString = splitTitle[0];
        return new Ticker(
            tickerString,
            this.getName(document),
            this.getTickerType(url, document)
        );
    }

    getTickerType(url: string, document: Document): TickerType {
        if (this.isEtf(document)) {
            return new TickerType("etf");
        } else if (this.isCrypto(url)) {
            return new TickerType("crypto");
        } else {
            return new TickerType("stock");
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
