import { Ticker } from "../tickers/Ticker";
import { TickerType } from "../tickers/TickerType";

export class Site {
    name: string;
    baseUrl: string;

    constructor(name: string, baseUrl: string) {
        this.name = name;
        this.baseUrl = baseUrl;
    }

    is() {
        return this.name;
    }

    createUrlForTicker(ticker: Ticker) {}

    getTickerType(site: Site, cryptoArg: any, document: Document): TickerType {
        if (site.isEtf(document)) {
            return new TickerType("etf");
        } else if (site.isCrypto(cryptoArg)) {
            return new TickerType("crypto");
        } else {
            return new TickerType("stock");
        }
    }

    // Return type here is "any", because we don't want to return a value in the superclass, which we would have to since we're using them in getTickerType above.
    // Implementations of these methods in subclasses should return a boolean.
    isCrypto(x: any): any {}
    isEtf(document: Document): any {}
}
