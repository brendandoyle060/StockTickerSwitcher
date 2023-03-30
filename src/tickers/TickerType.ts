export class TickerType {
    VALID_TYPES = ["stock", "etf", "mutualfund", "crypto", "future", "bond"];
    value: string;

    constructor(tickerType: string) {
        if (this.isValidType(tickerType)) {
            this.value = tickerType;
        } else {
            throw new Error("Invalid tickerType: " + tickerType);
        }
    }

    isValidType(tt: string) {
        let lowerCase = tt.toLowerCase().trim();
        if (this.VALID_TYPES.includes(lowerCase)) {
            return true;
        }
        return false;
    }

    toString() {
        return this.value;
    }
}
