import { Site } from "./Site";
import { TickerType } from "../tickers/TickerType";
import { Ticker } from "../tickers/Ticker";

export class YahooFinance extends Site {
    constructor() {
        super("Yahoo! Finance", `https://finance.yahoo.com`);
    }

    createUrlForTicker(ticker: Ticker): string {
        let s: string = ticker.symbol;

        // If the page that we're on is for a stock or ETF, then we can just leave the ticker as-is.
        // If the page that we're on is for a cryptocurrency, then we need
        // to adjust the ticker to add the "quote currency" --
        // the currency for which we're displaying the exchange rate to the cryptocurrency.
        // By default, we'll use the US Dollar ("USD").
        // TODO: Allow user to select their preferred quote currency in Options menu.
        if (ticker.tickerType.value === "crypto") {
            s = s + `-USD`;
        }
        return `${this.baseUrl}/quote/${s}`;
    }
}
