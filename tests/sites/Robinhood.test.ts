import { Robinhood } from "../../src/sites/Robinhood";
import { Crypto } from "../../src/tickers/Crypto";
import { Etf } from "../../src/tickers/Etf";
import { Stock } from "../../src/tickers/Stock";
import { Ticker } from "../../src/tickers/Ticker";
import { JSDOM } from "jsdom";

import { getDoc } from "../utils/helpers";
import { TestData } from "../utils/TestData";

describe("Testing Robinhood", () => {
    var rh: Robinhood = new Robinhood();
    var TD: TestData = new TestData();

    ////////////////////////////////
    // Tests for RH -> YF
    ////////////////////////////////

    // getTicker
    test.concurrent.each([
        [TD.gme.filename, TD.gme.rhUrl, TD.gme.ticker],
        [
            TD.gmeLoggedOut.filename,
            TD.gmeLoggedOut.rhUrl,
            TD.gmeLoggedOut.ticker,
        ],
        [
            TD.ethLoggedOut.filename,
            TD.ethLoggedOut.rhUrl,
            TD.ethLoggedOut.ticker,
        ],
        [TD.spy.filename, TD.spy.rhUrl, TD.spy.ticker],
        [TD.spxs.filename, TD.spxs.rhUrl, TD.spxs.ticker],
        [TD.eth.filename, TD.eth.rhUrl, TD.eth.ticker],
        [TD.brka.filename, TD.brka.rhUrl, TD.brka.ticker],
        [TD.brkb.filename, TD.brkb.rhUrl, TD.brkb.ticker],
        [TD.cakeCrypto.filename, TD.cakeCrypto.rhUrl, TD.cakeCrypto.ticker],
        [TD.cakeStock.filename, TD.cakeStock.rhUrl, TD.cakeStock.ticker],
    ])(
        "getTicker on %s and %s, expecting %s",
        (filename: string, url: string, ticker: Ticker) => {
            let html = getDoc(rh.name, filename);
            let dom = new JSDOM(html, { runScripts: "outside-only" });
            let doc = dom.window.document;

            expect(rh.getTicker(url, doc)).toEqual(ticker);
        }
    );

    // isEtf / isCrypto
    test.concurrent.each([
        [TD.gme.filename, TD.gme.rhUrl, TD.gme.isEtf, TD.gme.isCrypto],
        [
            TD.gmeLoggedOut.filename,
            TD.gmeLoggedOut.rhUrl,
            TD.gmeLoggedOut.isEtf,
            TD.gmeLoggedOut.isCrypto,
        ],
        [
            TD.ethLoggedOut.filename,
            TD.ethLoggedOut.rhUrl,
            TD.ethLoggedOut.isEtf,
            TD.ethLoggedOut.isCrypto,
        ],
        [TD.spy.filename, TD.spy.rhUrl, TD.spy.isEtf, TD.spy.isCrypto],
        [TD.spxs.filename, TD.spxs.rhUrl, TD.spxs.isEtf, TD.spxs.isCrypto],
        [TD.eth.filename, TD.eth.rhUrl, TD.eth.isEtf, TD.eth.isCrypto],
        [TD.brka.filename, TD.brka.rhUrl, TD.brka.isEtf, TD.brka.isCrypto],
        [TD.brkb.filename, TD.brkb.rhUrl, TD.brkb.isEtf, TD.brkb.isCrypto],
        [
            TD.cakeCrypto.filename,
            TD.cakeCrypto.rhUrl,
            TD.cakeCrypto.isEtf,
            TD.cakeCrypto.isCrypto,
        ],
        [
            TD.cakeStock.filename,
            TD.cakeStock.rhUrl,
            TD.cakeStock.isEtf,
            TD.cakeStock.isCrypto,
        ],
    ])(
        "isEtf and isCrypto on %s and %s, expecting %p and %p",
        (filename: string, url: string, isEtf: boolean, isCrypto: boolean) => {
            let html = getDoc(rh.name, filename);
            let dom = new JSDOM(html, { runScripts: "outside-only" });
            let doc = dom.window.document;

            expect(rh.isEtf(doc)).toEqual(isEtf);
            expect(rh.isCrypto(url)).toEqual(isCrypto);
        }
    );

    // isTickerUrl
    test.concurrent.each([
        [TD.gme.rhUrl, TD.gme.isTickerUrl],
        [TD.gmeLoggedOut.rhUrl, TD.gmeLoggedOut.isTickerUrl],
        [TD.ethLoggedOut.rhUrl, TD.ethLoggedOut.isTickerUrl],
        [TD.spy.rhUrl, TD.spy.isTickerUrl],
        [TD.spxs.rhUrl, TD.spxs.isTickerUrl],
        [TD.eth.rhUrl, TD.eth.isTickerUrl],
        [TD.grt.rhUrl, TD.grt.isTickerUrl],
        [TD.brka.rhUrl, TD.brka.isTickerUrl],
        [TD.brkb.rhUrl, TD.brkb.isTickerUrl],
        [TD.homepage.rhUrl, TD.homepage.isTickerUrl],
        [TD.mostPopular.rhUrl, TD.mostPopular.isTickerUrl],
    ])(
        "isTickerUrl on %s, expecting %s",
        (url: string, isTickerUrl: boolean) => {
            expect(rh.isTickerUrl(url)).toEqual(isTickerUrl);
        }
    );

    ////////////////////////////////
    // Tests for YF -> RH
    ////////////////////////////////

    // createUrlForTicker
    test.concurrent.each([
        [TD.gme.ticker, TD.gme.rhUrl],
        // If the user is not logged into RH, we can still  give them the "logged in" url:
        // RH will redirect them to the appropriate page for their region.
        [TD.gmeLoggedOut.ticker, TD.gme.rhUrl],
        [TD.ethLoggedOut.ticker, TD.eth.rhUrl],
        [TD.spy.ticker, TD.spy.rhUrl],
        [TD.spxs.ticker, TD.spxs.rhUrl],
        [TD.eth.ticker, TD.eth.rhUrl],
        [TD.brka.ticker, TD.brka.rhUrl],
        [TD.brkb.ticker, TD.brkb.rhUrl],
        [TD.cakeCrypto.ticker, TD.cakeCrypto.rhUrl],
        [TD.cakeStock.ticker, TD.cakeStock.rhUrl],
    ])(
        "createUrlForTicker on %s, expecting %s",
        (ticker: Ticker, url: string) => {
            expect(rh.createUrlForTicker(ticker)).toEqual(url);
        }
    );
});
