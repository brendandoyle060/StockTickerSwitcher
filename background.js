// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function inject(tab) {

    // Break if we're not on a stocks page
    if (!tab.url || !tab.url.startsWith('https://robinhood.com/stocks/')){
        return;
    }

    console.log("created inject listener");

    chrome.tabs.executeScript(null,{file:"content.js"}, function(results){console.log(results);});
    console.log("chrome.tabs.executeScript content.js");

    // Send a message to the active tab
    chrome.tabs.query({
        active: true, 
        lastFocusedWindow: true
    }, 
    function(tabs) {
        console.log("chrome.tabs.query");
        console.log("tabs.length: " + tabs.length);

        var activeTab = tabs[0];

        chrome.tabs.sendMessage(activeTab.id, {
            "message": "clicked_browser_action", 
            "url": tab.url
        });

            console.log("sendMessage - tab url: " + tab.url);
            console.log("end chrome.tabs.query");
    });

});

// Open new tab
chrome.runtime.onMessage.addListener(
    function openNewTab(request, sender, sendResponse) {
        console.log("chrome.runtime.onMessage.addListener - open_new_tab");
        if( request.message === "open_new_tab" ) {
            chrome.tabs.create({
                "url": request.url
            });
            console.log("opened new tab");
        }

        console.log(request);
        console.log(sender);

    }
);
