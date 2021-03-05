// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {

      var ticker = getTicker();
      console.log(ticker);
      var yahooBoi = "https://finance.yahoo.com/quote/" + ticker;
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": yahooBoi});
      
    }
  }
);

function getTicker() {
	var titleElement = document.querySelector("title");
	var title = titleElement.textContent;
	var splitTitle = title.split(" ");
	return splitTitle[0];
}