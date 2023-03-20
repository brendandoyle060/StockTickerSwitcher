class Stock extends Ticker {
    constructor(symbol: string, name: string) {
        super(symbol, name, TickerType.STOCK);
    }
}
