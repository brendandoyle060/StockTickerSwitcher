// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {

      var ticker = getTicker(request.url);
      console.log(ticker);
      var yahooBoi = "https://finance.yahoo.com/quote/" + ticker;
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": yahooBoi});
      
    }
  }
);

function getTicker(url) {
  var arr = url.split("/");
  var len = arr.length;
  return arr[len-1];
}