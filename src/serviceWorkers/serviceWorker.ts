import { YahooFinance } from "../sites/YahooFinance";
import { TickerType } from "../tickers/TickerType";
import { Ticker } from "../tickers/Ticker";

// Called when the user clicks on the browser action.
chrome.action.onClicked.addListener(function inject(tab) {
    // Break if we're not on a stocks or crypto page
    if (!isSupportedPage(tab.url)) {
        return;
    }

    chrome.tabs.query(
        {
            active: true,
            lastFocusedWindow: true,
        },
        function (tabs) {
            var activeTab = tabs[0];
            var index = activeTab.index;
            chrome.tabs.sendMessage(activeTab.id, {
                message: "clicked_browser_action",
                url: tab.url,
                index: index + 1,
            });
        }
    );
});

function isSupportedPage(url: string) {
    return (
        url.startsWith("https://robinhood.com/stocks/") ||
        url.startsWith("https://robinhood.com/crypto/")
    );
}

// Open new tab
chrome.runtime.onMessage.addListener(function openNewTab(
    request,
    sender,
    sendResponse
) {
    if (request.message === "open_new_tab") {
        let yh = new YahooFinance();

        let newTicker = new Ticker(
            request.tickerSymbol,
            request.tickerName,
            new TickerType(request.tickerType)
        );
        console.log("serviceWorker ticker: " + newTicker.toString());

        let url = yh.createUrlForTicker(newTicker);
        chrome.tabs.create({
            url: url,
            index: request.index,
        });
    }
});
