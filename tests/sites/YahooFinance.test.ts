import { YahooFinance } from "../../src/sites/YahooFinance";
import { Crypto } from "../../src/tickers/Crypto";
import { Etf } from "../../src/tickers/Etf";
import { Stock } from "../../src/tickers/Stock";
import { Ticker } from "../../src/tickers/Ticker";
import { JSDOM } from "jsdom";

import { getDoc } from "../utils/helpers";
import { TestData } from "../utils/TestData";

describe("Testing YahooFinance", () => {
    var yf: YahooFinance = new YahooFinance();
    var TD: TestData = new TestData();

    // Tests for RH -> YF
    test.concurrent.each([
        [TD.gme.ticker, TD.gme.yfUrl],
        [TD.spy.ticker, TD.spy.yfUrl],
        [TD.eth.ticker, TD.eth.yfUrl],
        [TD.grt.ticker, TD.grt.yfUrl],
        [TD.brka.ticker, TD.brka.yfUrl],
        [TD.brkb.ticker, TD.brkb.yfUrl],
    ])(
        "createUrlForTicker on %s, expecting %s",
        (ticker: Ticker, url: string) => {
            expect(yf.createUrlForTicker(ticker)).toEqual(url);
        }
    );

    // Tests for YF -> RH
    test.concurrent.each([
        [TD.gme.filename, TD.gme.yfUrl, TD.gme.ticker],
        [TD.spy.filename, TD.spy.yfUrl, TD.spy.ticker],
        [TD.eth.filename, TD.eth.yfUrl, TD.eth.ticker],
        [TD.grt.filename, TD.grt.yfUrl, TD.grt.ticker],
        [TD.brka.filename, TD.brka.yfUrl, TD.brka.ticker],
        [TD.brkb.filename, TD.brkb.yfUrl, TD.brkb.ticker],
    ])(
        "getTicker on %s and %s, expecting %s",
        (filename: string, url: string, ticker: Ticker) => {
            let html = getDoc(yf.name, filename);
            let dom = new JSDOM(html, { runScripts: "outside-only" });
            let doc = dom.window.document;

            expect(yf.getTicker(url, doc).equals(ticker)).toBeTruthy();
        }
    );

    test.concurrent.each([
        [TD.gme.filename, TD.gme.yfUrl, TD.gme.isEtf, TD.gme.isCrypto],
        [TD.spy.filename, TD.spy.yfUrl, TD.spy.isEtf, TD.spy.isCrypto],
        [TD.eth.filename, TD.eth.yfUrl, TD.eth.isEtf, TD.eth.isCrypto],
        [TD.grt.filename, TD.grt.yfUrl, TD.grt.isEtf, TD.grt.isCrypto],
        [TD.brka.filename, TD.brka.yfUrl, TD.brka.isEtf, TD.brka.isCrypto],
        [TD.brkb.filename, TD.brkb.yfUrl, TD.brkb.isEtf, TD.brkb.isCrypto],
    ])(
        "isEtf and isCrypto on %s and %s, expecting %p and %p",
        (filename: string, url: string, isEtf: boolean, isCrypto: boolean) => {
            let html = getDoc(yf.name, filename);
            let dom = new JSDOM(html, { runScripts: "outside-only" });
            let doc = dom.window.document;

            expect(yf.isEtf(doc)).toEqual(isEtf);
            expect(yf.isCrypto(doc)).toEqual(isCrypto);
        }
    );

    test.concurrent.each([
        [TD.gme.yfUrl, TD.gme.isTickerUrl],
        [TD.spy.yfUrl, TD.spy.isTickerUrl],
        [TD.eth.yfUrl, TD.eth.isTickerUrl],
        [TD.grt.yfUrl, TD.grt.isTickerUrl],
        [TD.brka.yfUrl, TD.brka.isTickerUrl],
        [TD.brkb.yfUrl, TD.brkb.isTickerUrl],
    ])(
        "isTickerUrl on %s, expecting %s",
        (url: string, isTickerUrl: boolean) => {
            expect(yf.isTickerUrl(url)).toEqual(isTickerUrl);
        }
    );
});
