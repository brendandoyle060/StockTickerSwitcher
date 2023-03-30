import { TickerType } from "./TickerType";

export class Ticker {
    symbol: string;
    name: string;
    tickerType: TickerType;

    constructor(symbol: string, name: string, tickerType: TickerType) {
        this.symbol = symbol;
        this.name = name;
        this.tickerType = tickerType;
    }

    toString(): string {
        return `Ticker - symbol: ${this.symbol}, name: ${this.name}, type: ${this.tickerType}`;
    }
}
