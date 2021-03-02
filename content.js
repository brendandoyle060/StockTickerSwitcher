// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {

      // chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      //     var url = tabs[0].url;
      // });

      var url = request.url;

      console.log(url);
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": url});

      // var firstHref = $("a[href^='http']").eq(0).attr("href");
      // console.log(firstHref);
      // chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);