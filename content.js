// content.js

(function() {
    // Ensure that this content script will not run more than once per click
    if ( window.hasRun ) {
        return;
    }
    window.hasRun = true;

    chrome.runtime.onMessage.addListener(
        function iconClicked(request, sender, sendResponse) {

            if ( request.message === "clicked_browser_action" ) {

                console.log("message received: clicked_browser_action");
                console.log(request);
                console.log(sender);

                var ticker = getTicker();
                console.log(ticker);
                var yahooBoi = "https://finance.yahoo.com/quote/" + ticker;

                chrome.runtime.sendMessage({
                    "message": "open_new_tab",
                    "url": yahooBoi
                });

            }
        }
    );

    function getTicker() {
        var titleElement = document.querySelector("title");
        var title = titleElement.textContent;
        var splitTitle = title.split(" ");
        return splitTitle[0];
    }

})();