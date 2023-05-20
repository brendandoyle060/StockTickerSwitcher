import { TickerType } from "../../src/tickers/TickerType";
import { Ticker } from "../../src/tickers/Ticker";

export class TestTicker {
    ticker: Ticker;
    filename: string;
    rhUrl: string;
    yfUrl: string;

    isEtf: boolean;
    isCrypto: boolean;
    isNoResultsPage: boolean;
    isTickerUrl: boolean;

    constructor(
        ticker: Ticker,
        filename: string,
        rhUrl: string,
        yfUrl: string,
        isEtf: boolean,
        isCrypto: boolean,
        isNoResultsPage: boolean,
        isTickerUrl: boolean
    ) {
        this.ticker = ticker;
        this.filename = filename;
        this.rhUrl = rhUrl;
        this.yfUrl = yfUrl;
        this.isEtf = isEtf;
        this.isCrypto = isCrypto;
        this.isNoResultsPage = isNoResultsPage;
        this.isTickerUrl = isTickerUrl;
    }
}
