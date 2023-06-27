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
        return new Ticker(
            this.getTickerFromUrl(url),
            this.getName(document),
            this.getTickerType(this, url, document)
        );
    }

    /**
     * @param url - this page's url
     * @returns just the ticker section of the given url
     */
    getTickerFromUrl(url: string) {
        let splitArray = url.split("/");

        let lastIndex = splitArray.length - 1;
        let ticker = splitArray[lastIndex];
        if (ticker.trim().length === 0) {
            ticker = splitArray[lastIndex - 1];
        }

        return ticker;
    }

    getName(document: Document): string {
        return document.querySelector("main h1").textContent.trim();
    }

    isCrypto(url: string): boolean {
        return url.includes("crypto");
    }

    isEtf(document: Document): boolean {
        let etfCategory = document.querySelector("#etf-category");
        return !(etfCategory === null);
    }

    isNoResultsPage(document: Document): boolean {
        return document
            .querySelector("html title")
            .textContent.includes("Page not found");
    }

    isTickerUrl(url: string): boolean {
        return (
            url.includes("https://robinhood.com") &&
            (url.includes("stocks") || url.includes("crypto"))
        );
    }
}
