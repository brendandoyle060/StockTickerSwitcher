import { Site } from "../../src/sites/Site";
import { Robinhood } from "../../src/sites/Robinhood";
import { YahooFinance } from "../../src/sites/YahooFinance";

import { Ticker } from "../../src/tickers/Ticker";
import { JSDOM } from "jsdom";

import { getDoc } from "../utils/helpers";
import { TestData } from "../utils/TestData";

describe("Testing All Sites", () => {
    let rh: Robinhood = new Robinhood();
    let yf: YahooFinance = new YahooFinance();
    let allSites = [rh, yf];
    let TD: TestData = new TestData();

    allSites.forEach((site: Site) =>
        test.concurrent.each([
            [TD.wm.ticker, TD.wm.rhUrl, TD.wm.yfUrl],
            [TD.xsd.ticker, TD.xsd.rhUrl, TD.xsd.yfUrl],
            [TD.btc.ticker, TD.btc.rhUrl, TD.btc.yfUrl],
        ])(
            "Site: " + site.name + " - testing createUrlForTicker on %s",
            (ticker: Ticker, rhUrl: string, yfUrl: string) => {
                if (site.is() === "Robinhood") {
                    expect(site.createUrlForTicker(ticker)).toEqual(rhUrl);
                } else if (site.is() === "YahooFinance") {
                    expect(site.createUrlForTicker(ticker)).toEqual(yfUrl);
                }
            }
        )
    );

    allSites.forEach((site: Site) =>
        test.concurrent.each([
            [TD.noResultsPage.filename, TD.noResultsPage.isNoResultsPage],
            [TD.gme.filename, TD.gme.isNoResultsPage],
            [TD.spy.filename, TD.spy.isNoResultsPage],
            [TD.eth.filename, TD.eth.isNoResultsPage],
        ])(
            "Site: " +
                site.name +
                " - testing isNoResultsPage on %s, expecting %p",
            (filename: string, isNoResultsPage: boolean) => {
                let html = getDoc(site.name, filename);
                let dom = new JSDOM(html, { runScripts: "outside-only" });
                let doc = dom.window.document;

                expect(site.isNoResultsPage(doc)).toEqual(isNoResultsPage);
            }
        )
    );
});
