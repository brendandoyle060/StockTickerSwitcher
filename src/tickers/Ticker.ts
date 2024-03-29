import { TickerType } from "./TickerType";
import { Utils } from "../utils/Utils";

export class Ticker {
    symbol: string;
    name: string;
    tickerType: TickerType;

    constructor(symbol: string, name: string, tickerType: TickerType) {
        this.symbol = this.convertHyphenToPeriod(symbol);
        let utils = new Utils();
        this.name = utils.removeExtraWhitespace(name);
        this.tickerType = tickerType;
    }

    convertHyphenToPeriod(symbol: string) {
        return symbol.replace("-", ".");
    }

    convertPeriodToHyphen(symbol: string) {
        return symbol.replace(".", "-");
    }

    toString(): string {
        return `Ticker - symbol: ${this.symbol}, name: ${this.name}, type: ${this.tickerType}`;
    }

    equals(that: Ticker): boolean {
        return (
            this.symbol === that.symbol &&
            this.nameEquals(that.name) &&
            this.tickerType.equals(that.tickerType)
        );
    }

    /**
     * Check to see if a given company's name matches this company's name.
     * Since these values are being pulled from each site we're visiting (and we can't control what they call them),
     * and since these equality functions are (at least so far) only being used to facilitate unit testing anyway,
     * this function is basically just checking to see if the names are "close enough" by checking to see if one string includes the other.
     *
     * For example, the RH page for $SPY calls it "SPDR S&P 500 ETF", while YF calls it "SPDR S&P 500 ETF Trust".
     * Even though the strings aren't identical, we still want these to be considered equal, so we can just check if one contains the other, which it does.
     *
     * TODO - there will probably be some edge cases for which this solution will not work, so this will likely have to be revised in the future.
     *
     * @param thatName - name of the company to which we're comparing this company
     * @returns true if the companies' names are the same (or at least, close enough)
     */
    nameEquals(thatName: string): boolean {
        let thisName = this.name.toLowerCase();
        thatName = thatName.toLowerCase();

        return thisName.includes(thatName) || thatName.includes(thisName);
    }
}
