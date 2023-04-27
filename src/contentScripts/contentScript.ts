import { Robinhood } from "../sites/Robinhood";
import { YahooFinance } from "../sites/YahooFinance";
import { Ticker } from "../tickers/Ticker";

(function () {
    chrome.runtime.onMessage.addListener(function iconClicked(
        request,
        sender,
        sendResponse
    ) {
        if (request.message === "clicked_browser_action") {
            let fromSite;
            let toSite;

            if (request.url.toLowerCase().includes("robinhood")) {
                fromSite = new Robinhood();
                toSite = new YahooFinance();
            } else {
                fromSite = new YahooFinance();
                toSite = new Robinhood();
            }

            if (pageHasTicker(request.url)) {
                let ticker: Ticker = fromSite.getTicker(request.url, document);
                console.log(ticker.toString());

                chrome.runtime.sendMessage({
                    message: "open_new_tab",
                    tickerSymbol: ticker.symbol,
                    tickerName: ticker.name,
                    tickerType: ticker.tickerType + "",
                    index: request.index,
                    fromSite: fromSite.is(),
                    toSite: toSite.is(),
                });
            } else {
                chrome.runtime.sendMessage({
                    message: "open_homepage",
                    index: request.index,
                    fromSite: fromSite.is(),
                    toSite: toSite.is(),
                });
            }
        }
    });

    function pageHasTicker(url: string): boolean {
        return (
            url.startsWith("https://robinhood.com/stocks/") ||
            url.startsWith("https://robinhood.com/crypto/") ||
            url.startsWith("https://finance.yahoo.com/quote/")
        );
    }
})();
