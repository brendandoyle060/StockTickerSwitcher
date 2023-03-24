// background.js

// Called when the user clicks on the browser action.
chrome.action.onClicked.addListener(function inject(tab) {
    // Break if we're not on a stocks or crypto page
    if (!isSupportedPage(tab.url)) {
        return;
    }

    // var myCode = "console.log('Testing...this code will execute as a content script');";
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            files: ["content.js"],
        },
        function () {
            if (chrome.runtime.lastError) {
                console.error(
                    "Script injection failed: " +
                        chrome.runtime.lastError.message
                );
            }
        }
    );

    // Send a message to the active tab
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

function isSupportedPage(url) {
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
        chrome.tabs.create({
            url: request.url,
            index: request.index,
        });
    }
});
