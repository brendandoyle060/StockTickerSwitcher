import { TickerType } from "../tickers/TickerType";
import { Ticker } from "../tickers/Ticker";

export class Stock extends Ticker {
    constructor(symbol: string, name: string) {
        super(symbol, name, new TickerType("stock"));
    }
}
