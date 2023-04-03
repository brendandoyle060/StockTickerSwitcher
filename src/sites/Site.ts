import { Ticker } from "../tickers/Ticker";

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
}
