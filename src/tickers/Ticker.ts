class Ticker {
    symbol: string;
    name: string;
    type: TickerType;

    constructor(symbol: string, name: string, type: TickerType) {
        this.symbol = symbol;
        this.name = name;
        this.type = type;
    }
}
