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

class Stock extends Ticker {
    constructor(symbol: string, name: string) {
        super(symbol, name, TickerType.STOCK);
    }
}
