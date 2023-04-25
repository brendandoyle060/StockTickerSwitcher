export class TickerType {
    VALID_TYPES = ["stock", "etf", "mutualfund", "crypto", "future", "bond"];
    value: string;

    constructor(tickerType: string) {
        tickerType = tickerType.toLowerCase().trim();
        if (this.isValidType(tickerType)) {
            this.value = tickerType;
        } else {
            throw new Error("Invalid tickerType: " + tickerType);
        }
    }

    isValidType(tt: string) {
        return this.VALID_TYPES.includes(tt);
    }

    toString() {
        return this.value;
    }
}
