import { Ticker } from "../tickers/Ticker";
import { TickerType } from "../tickers/TickerType";

/**
 * Parent class for objects holding information
 * about a particular website.
 */
export class Site {
    name: string;
    baseUrl: string;
    EXCEPTION_TICKERS: Map<any, any> = new Map();

    constructor(name: string, baseUrl: string) {
        this.name = name;
        this.baseUrl = baseUrl;
    }

    /**
     * @returns a string representation of the name of the site
     */
    is(): string {
        return this.name;
    }

    /**
     * Given a Ticker, create the appropriate url for that Ticker
     * on this Site.
     * @param ticker - the Ticker for which we're creating a url
     */
    createUrlForTicker(ticker: Ticker): any {}

    /**
     * Pull all necessary information from the current url
     * and page to create a Ticker object to send to other Sites
     * @param url - url of the current page
     * @param document - DOM of the current page
     */
    getTicker(url: string, document: Document): any {}

    /**
     * Determine the type of ticker for the current page
     * (stock, crypto, etc)
     * @param site - the Site which the user is currently on
     * @param cryptoArg - some sites may need a separate way to identify whether or not the page is a crypto page (such as the url).
     * If that's the case, that arg goes here. Otherwise, the Document param is usually sent twice.
     * @param document - the DOM of the current page, as a Document object.
     * @returns TickerType of the current page
     */
    getTickerType(site: Site, cryptoArg: any, document: Document): TickerType {
        if (site.isEtf(document)) {
            return new TickerType("etf");
        } else if (site.isCrypto(cryptoArg)) {
            return new TickerType("crypto");
        } else {
            return new TickerType("stock");
        }
    }

    // Return type for the methods below is "any", because we don't want to return a value in the superclass, which we would have to since we're using them in getTickerType above.
    // Implementations of these methods in subclasses should return a boolean.

    /**
     * Get the company's full name
     * @param document - DOM content of the current page
     */
    getName(document: Document): any {}

    /**
     * Returns true if the current page is for a cryptocurrency,
     * false otherwise.
     * @param x - arg of any type which will help a partiular site
     * identify a cryptocurrency page.
     */
    isCrypto(x: any): any {}

    /**
     * Returns true if the current page is for an ETF,
     * false otherwise.
     * @param document - DOM of the current page.
     */
    isEtf(document: Document): any {}

    /**
     * Returns true if the current page is a No Results page,
     * false otherwise.
     * @param document - DOM of the current page.
     */
    isNoResultsPage(document: Document): any {}

    /**
     * @param url - the current page's url
     * @returns true if the url indicates that the page is for one specific Ticker,
     * false if it's any other kind of page.
     */
    isTickerUrl(url: string): any {}
}
