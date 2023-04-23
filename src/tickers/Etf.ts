import { TickerType } from "./TickerType";
import { Ticker } from "./Ticker";

export class Etf extends Ticker {
    constructor(symbol: string, name: string) {
        super(symbol, name, new TickerType("etf"));
    }
}
