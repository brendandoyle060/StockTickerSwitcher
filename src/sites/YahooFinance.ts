import { Site } from "./Site";
import { TickerType } from "../tickers/TickerType";
import { Ticker } from "../tickers/Ticker";

export class YahooFinance extends Site {
    constructor() {
        super("YahooFinance", `https://finance.yahoo.com`);

        this.EXCEPTION_TICKERS.set("GRT6719", {
            ticker: "GRT",
            type: "crypto",
        });
    }

    createUrlForTicker(ticker: Ticker): string {
        let s: string = ticker.getHyphenatedTickerSymbol();

        // If the page that we're on is for a stock or ETF, then we can just leave the ticker as-is.
        // If the page that we're on is for a cryptocurrency, then we need
        // to adjust the ticker to add the "quote currency" --
        // the currency for which we're displaying the exchange rate to the cryptocurrency.
        // By default, we'll use the US Dollar ("USD").
        // TODO: Allow user to select their preferred quote currency in Options menu.
        if (ticker.tickerType.value === "crypto") {
            s = s + `-USD`;
        }
        return `${this.baseUrl}/quote/${s}`;
    }

    getTicker(url: string, document: Document): Ticker {
        let tickerString: string = this.getTickerFromPage(
            document,
            this.isCrypto(document)
        );
        let tickerType: TickerType = this.getTickerType(
            this,
            document,
            document
        );

        return new Ticker(
            this.checkExceptionTickerList(tickerString, tickerType.toString()),
            this.getName(document),
            tickerType
        );
    }

    checkExceptionTickerList(tickerStr: string, ttStr: string): string {
        if (
            this.EXCEPTION_TICKERS.has(tickerStr) &&
            this.EXCEPTION_TICKERS.get(tickerStr).type === ttStr
        ) {
            tickerStr = this.EXCEPTION_TICKERS.get(tickerStr).ticker;
        }
        return tickerStr;
    }

    getQuoteHeaderInfoId(): string {
        return "#quote-header-info";
    }

    getName(document: Document): string {
        let name = this.getCompanyHeader(document);
        let nameWithTickerRemoved = name.split(" (")[0];
        return this.removeExtraWhitespace(nameWithTickerRemoved);
    }

    getTickerFromPage(document: Document, isCrypto: boolean): string {
        let name = this.getCompanyHeader(document);
        let cleanedUpSymbol = name.split(" (")[1];
        cleanedUpSymbol = cleanedUpSymbol.split(")")[0];
        if (isCrypto) {
            cleanedUpSymbol = cleanedUpSymbol.split("-")[0];
        }

        return cleanedUpSymbol;
    }

    getCompanyHeader(document: Document): string {
        return document
            .querySelector(this.getQuoteHeaderInfoId() + " h1")
            .textContent.trim();
    }

    removeExtraWhitespace(str: string): string {
        let regex = new RegExp("\\s+");
        let split = str.split(regex);
        let full = "";
        split.forEach(function (word) {
            full = full + word.trim() + " ";
        });
        // Get rid of the one extra space at the end before we return
        return full.trim();
    }

    isCrypto(document: Document): boolean {
        let quoteHeaderInfo = document.querySelector(
            this.getQuoteHeaderInfoId() + ""
        );
        return quoteHeaderInfo.textContent.includes("CoinMarketCap");
    }

    isEtf(document: Document): boolean {
        let quoteSummary = document.querySelector("#quote-summary");
        let textCleanedUp = this.removeExtraWhitespace(
            quoteSummary.textContent
        );
        return textCleanedUp.includes("Net Assets");
    }

    isNoResultsPage(document: Document): boolean {
        return !!document.getElementById("lookup-page");
    }
}
