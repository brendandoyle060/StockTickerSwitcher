import { Robinhood } from "../sites/Robinhood";
import { Ticker } from "../tickers/Ticker";

(function () {
    chrome.runtime.onMessage.addListener(function iconClicked(
        request,
        sender,
        sendResponse
    ) {
        if (request.message === "clicked_browser_action") {
            if (pageHasTicker(request.url)) {
                let rh: Robinhood = new Robinhood();
                let ticker: Ticker = rh.getTicker(request.url, document);
                console.log(ticker.toString());

                chrome.runtime.sendMessage({
                    message: "open_new_tab",
                    tickerSymbol: ticker.symbol,
                    tickerName: ticker.name,
                    tickerType: ticker.tickerType + "",
                    index: request.index,
                });
            } else {
                chrome.runtime.sendMessage({
                    message: "open_homepage",
                    index: request.index,
                });
            }
        }
    });

    function pageHasTicker(url: string): boolean {
        return (
            url.startsWith("https://robinhood.com/stocks/") ||
            url.startsWith("https://robinhood.com/crypto/")
        );
    }

    function getTicker(isCrypto: boolean) {
        var titleElement = document.querySelector("title");
        var title = titleElement.textContent;
        var splitTitle = title.split(" ");

        let tickerString = splitTitle[0];
        let currencyString = "-USD";
        if (isCrypto) {
            tickerString = tickerString + currencyString;
        }
        console.log("tickerString: " + tickerString);
        return tickerString;
    }
})();
