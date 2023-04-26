import { YahooFinance } from "../sites/YahooFinance";
import { TickerType } from "../tickers/TickerType";
import { Ticker } from "../tickers/Ticker";

// Called when the user clicks on the browser action.
chrome.action.onClicked.addListener(function inject(tab) {
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

chrome.runtime.onMessage.addListener(function openHomepage(
    request,
    sender,
    sendResponse
) {
    if (request.message === "open_homepage") {
        let yh = new YahooFinance();

        let url = yh.baseUrl;
        console.log("serviceWorker open_homepage url: " + url);

        chrome.tabs.create({
            url: url,
            index: request.index,
        });
    }
});
