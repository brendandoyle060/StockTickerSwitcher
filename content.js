// content.js

(function () {
    // Ensure that this content script will not run more than once per click
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;

    chrome.runtime.onMessage.addListener(function iconClicked(
        request,
        sender,
        sendResponse
    ) {
        if (request.message === "clicked_browser_action") {
            // console.log("message received: clicked_browser_action");
            // console.log(request);
            // console.log(sender);

            // Crypto tickers are a bit different on Yahoo Finance,
            // so we pass that to getTicker and handle it there.
            let isCrypto = request.url.includes("crypto");
            var ticker = getTicker(isCrypto);
            console.log(ticker);

            // Compile the url that we're visiting
            var yahooUrl = "https://finance.yahoo.com/quote/" + ticker;
            // Open a new tab to that url
            chrome.runtime.sendMessage({
                message: "open_new_tab",
                url: yahooUrl,
                index: request.index,
            });
        }
    });

    function getTicker(isCrypto) {
        var titleElement = document.querySelector("title");
        var title = titleElement.textContent;
        var splitTitle = title.split(" ");

        // If the page that we're on is for a stock or ETF, then we can just leave the ticker as-is.
        // If the page that we're on is for a cryptocurrency, then we need
        // to adjust the ticker to add the "quote currency" --
        // the currency for which we're displaying the exchange rate to the cryptocurrency.
        // By default, we'll use the US Dollar ("USD").
        let tickerString = splitTitle[0];
        let currencyString = "-USD";
        if (isCrypto) {
            tickerString = tickerString + currencyString;
        }
        console.log("tickerString: " + tickerString);
        return tickerString;
    }
})();
