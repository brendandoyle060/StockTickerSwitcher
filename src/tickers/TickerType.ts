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

    /**
     * @param tt - TickerType as a string
     * @returns true if the given string is within
     * the VALID_TYPES list, false otherwise
     */
    isValidType(tt: string): boolean {
        return this.VALID_TYPES.includes(tt);
    }

    toString(): string {
        return this.value;
    }

    equals(that: TickerType): boolean {
        return this.value === that.value;
    }
}
