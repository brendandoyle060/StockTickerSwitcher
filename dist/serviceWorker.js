(()=>{"use strict";var t={776:(t,e,r)=>{r.d(e,{G:()=>s});var o,n=r(199),i=r(219),c=(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),s=function(t){function e(){return t.call(this,"Robinhood","https://robinhood.com")||this}return c(e,t),e.prototype.createUrlForTicker=function(t){return"crypto"===t.tickerType.value?"".concat(this.baseUrl,"/").concat(t.tickerType.value,"/").concat(t.symbol):"".concat(this.baseUrl,"/stocks/").concat(t.symbol)},e.prototype.getTicker=function(t,e){return new i.v(this.getTickerFromUrl(t),this.getName(e),this.getTickerType(this,t,e))},e.prototype.getTickerFromUrl=function(t){var e=t.split("/"),r=e.length-1,o=e[r];return 0===o.trim().length&&(o=e[r-1]),o},e.prototype.getName=function(t){return t.querySelector("main h1").textContent.trim()},e.prototype.isCrypto=function(t){return t.includes("crypto")},e.prototype.isEtf=function(t){return!(null===t.querySelector("#etf-category"))},e}(n.T)},199:(t,e,r)=>{r.d(e,{T:()=>n});var o=r(110),n=function(){function t(t,e){this.name=t,this.baseUrl=e}return t.prototype.is=function(){return this.name},t.prototype.createUrlForTicker=function(t){},t.prototype.getTickerType=function(t,e,r){return t.isEtf(r)?new o.C("etf"):t.isCrypto(e)?new o.C("crypto"):new o.C("stock")},t.prototype.isCrypto=function(t){},t.prototype.isEtf=function(t){},t}()},455:(t,e,r)=>{r.d(e,{k:()=>s});var o,n=r(199),i=r(219),c=(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),s=function(t){function e(){return t.call(this,"YahooFinance","https://finance.yahoo.com")||this}return c(e,t),e.prototype.createUrlForTicker=function(t){var e=t.getHyphenatedTickerSymbol();return"crypto"===t.tickerType.value&&(e+="-USD"),"".concat(this.baseUrl,"/quote/").concat(e)},e.prototype.getTicker=function(t,e){return new i.v(this.getTickerFromPage(e,this.isCrypto(e)),this.getName(e),this.getTickerType(this,e,e))},e.prototype.getQuoteHeaderInfoId=function(){return"#quote-header-info"},e.prototype.getName=function(t){var e=this.getCompanyHeader(t).split(" (")[0];return this.removeExtraWhitespace(e)},e.prototype.getTickerFromPage=function(t,e){var r=this.getCompanyHeader(t).split(" (")[1];return r=r.split(")")[0],e&&(r=r.split("-")[0]),r},e.prototype.getCompanyHeader=function(t){return t.querySelector(this.getQuoteHeaderInfoId()+" h1").textContent.trim()},e.prototype.removeExtraWhitespace=function(t){var e=new RegExp("\\s+"),r=t.split(e),o="";return r.forEach((function(t){o=o+t.trim()+" "})),o.trim()},e.prototype.isCrypto=function(t){return t.querySelector(this.getQuoteHeaderInfoId()+"").textContent.includes("CoinMarketCap")},e.prototype.isEtf=function(t){var e=t.querySelector("#quote-summary");return this.removeExtraWhitespace(e.textContent).includes("Net Assets")},e}(n.T)},219:(t,e,r)=>{r.d(e,{v:()=>o});var o=function(){function t(t,e,r){this.symbol=this.convertHyphenInTickerSymbol(t),this.name=this.removeExtraWhitespace(e),this.tickerType=r}return t.prototype.convertHyphenInTickerSymbol=function(t){return t.replace("-",".")},t.prototype.getHyphenatedTickerSymbol=function(){return this.symbol.replace(".","-")},t.prototype.removeExtraWhitespace=function(t){var e=new RegExp("\\s+"),r=t.split(e),o="";return r.forEach((function(t){o=o+t.trim()+" "})),o.trim()},t.prototype.toString=function(){return"Ticker - symbol: ".concat(this.symbol,", name: ").concat(this.name,", type: ").concat(this.tickerType)},t.prototype.equals=function(t){return this.symbol===t.symbol&&this.nameEquals(t.name)&&this.tickerType.equals(t.tickerType)},t.prototype.nameEquals=function(t){var e=this.name.toLowerCase();return t=t.toLowerCase(),e.includes(t)||t.includes(e)},t}()},110:(t,e,r)=>{r.d(e,{C:()=>o});var o=function(){function t(t){if(this.VALID_TYPES=["stock","etf","mutualfund","crypto","future","bond"],t=t.toLowerCase().trim(),!this.isValidType(t))throw new Error("Invalid tickerType: "+t);this.value=t}return t.prototype.isValidType=function(t){return this.VALID_TYPES.includes(t)},t.prototype.toString=function(){return this.value},t.prototype.equals=function(t){return this.value===t.value},t}()}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=r(455),e=r(110),o=r(219),n=r(776);function i(e){return console.log("determineSite(site): "+e),(e=e.toLowerCase()).includes("robinhood")?new n.G:new t.k}chrome.action.onClicked.addListener((function(t){chrome.tabs.query({active:!0,lastFocusedWindow:!0},(function(e){var r=e[0],o=r.index;chrome.tabs.sendMessage(r.id,{message:"clicked_browser_action",url:t.url,index:o+1})}))})),chrome.runtime.onMessage.addListener((function(t,r,n){if("open_new_tab"===t.message){var c=i(t.toSite),s=new o.v(t.tickerSymbol,t.tickerName,new e.C(t.tickerType));console.log("serviceWorker ticker: "+s.toString());var a=c.createUrlForTicker(s);chrome.tabs.create({url:a,index:t.index})}})),chrome.runtime.onMessage.addListener((function(t,e,r){if("open_homepage"===t.message){var o=i(t.toSite).baseUrl;console.log("serviceWorker open_homepage url: "+o),chrome.tabs.create({url:o,index:t.index})}}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixrQkFBcEJGLEVBQVFILFFBQTZCLENBQ3JDLElBRUlyRixFQUZTcUUsRUFBY21CLEVBQVFHLFFBRWxCOUYsUUFDakJ5RSxRQUFRQyxJQUFJLG9DQUFzQ3ZFLEdBRWxEd0UsT0FBT0ssS0FBS2tCLE9BQU8sQ0FDZi9GLElBQUtBLEVBQ0xrRixNQUFPTSxFQUFRTixPLENBRzNCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2Jpbmhvb2R0b3lhaG9vZmluYW5jZS8uL3NyYy9zaXRlcy9Sb2Jpbmhvb2QudHMiLCJ3ZWJwYWNrOi8vcm9iaW5ob29kdG95YWhvb2ZpbmFuY2UvLi9zcmMvc2l0ZXMvU2l0ZS50cyIsIndlYnBhY2s6Ly9yb2Jpbmhvb2R0b3lhaG9vZmluYW5jZS8uL3NyYy9zaXRlcy9ZYWhvb0ZpbmFuY2UudHMiLCJ3ZWJwYWNrOi8vcm9iaW5ob29kdG95YWhvb2ZpbmFuY2UvLi9zcmMvdGlja2Vycy9UaWNrZXIudHMiLCJ3ZWJwYWNrOi8vcm9iaW5ob29kdG95YWhvb2ZpbmFuY2UvLi9zcmMvdGlja2Vycy9UaWNrZXJUeXBlLnRzIiwid2VicGFjazovL3JvYmluaG9vZHRveWFob29maW5hbmNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JvYmluaG9vZHRveWFob29maW5hbmNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yb2Jpbmhvb2R0b3lhaG9vZmluYW5jZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JvYmluaG9vZHRveWFob29maW5hbmNlLy4vc3JjL3NlcnZpY2VXb3JrZXJzL3NlcnZpY2VXb3JrZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2l0ZSB9IGZyb20gXCIuL1NpdGVcIjtcbmltcG9ydCB7IFRpY2tlclR5cGUgfSBmcm9tIFwiLi4vdGlja2Vycy9UaWNrZXJUeXBlXCI7XG5pbXBvcnQgeyBUaWNrZXIgfSBmcm9tIFwiLi4vdGlja2Vycy9UaWNrZXJcIjtcblxuZXhwb3J0IGNsYXNzIFJvYmluaG9vZCBleHRlbmRzIFNpdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcIlJvYmluaG9vZFwiLCBgaHR0cHM6Ly9yb2Jpbmhvb2QuY29tYCk7XG4gICAgfVxuXG4gICAgY3JlYXRlVXJsRm9yVGlja2VyKHRpY2tlcjogVGlja2VyKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRpY2tlci50aWNrZXJUeXBlLnZhbHVlID09PSBcImNyeXB0b1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5iYXNlVXJsfS8ke3RpY2tlci50aWNrZXJUeXBlLnZhbHVlfS8ke3RpY2tlci5zeW1ib2x9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEVURnMgYWxzbyBnZXQgdGhlICdzdG9ja3MnIHBhdGggaW4gdGhlIHVybCBvbiBSSFxuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuYmFzZVVybH0vc3RvY2tzLyR7dGlja2VyLnN5bWJvbH1gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGlja2VyKHVybDogc3RyaW5nLCBkb2N1bWVudDogRG9jdW1lbnQpOiBUaWNrZXIge1xuICAgICAgICByZXR1cm4gbmV3IFRpY2tlcihcbiAgICAgICAgICAgIHRoaXMuZ2V0VGlja2VyRnJvbVVybCh1cmwpLFxuICAgICAgICAgICAgdGhpcy5nZXROYW1lKGRvY3VtZW50KSxcbiAgICAgICAgICAgIHRoaXMuZ2V0VGlja2VyVHlwZSh0aGlzLCB1cmwsIGRvY3VtZW50KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldFRpY2tlckZyb21VcmwodXJsOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHNwbGl0QXJyYXkgPSB1cmwuc3BsaXQoXCIvXCIpO1xuXG4gICAgICAgIGxldCBsYXN0SW5kZXggPSBzcGxpdEFycmF5Lmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCB0aWNrZXIgPSBzcGxpdEFycmF5W2xhc3RJbmRleF07XG4gICAgICAgIGlmICh0aWNrZXIudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGlja2VyID0gc3BsaXRBcnJheVtsYXN0SW5kZXggLSAxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aWNrZXI7XG4gICAgfVxuXG4gICAgZ2V0TmFtZShkb2N1bWVudDogRG9jdW1lbnQpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW4gaDFcIikudGV4dENvbnRlbnQudHJpbSgpO1xuICAgIH1cblxuICAgIGlzQ3J5cHRvKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB1cmwuaW5jbHVkZXMoXCJjcnlwdG9cIik7XG4gICAgfVxuXG4gICAgaXNFdGYoZG9jdW1lbnQ6IERvY3VtZW50KTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBldGZDYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXRmLWNhdGVnb3J5XCIpO1xuICAgICAgICByZXR1cm4gIShldGZDYXRlZ29yeSA9PT0gbnVsbCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVGlja2VyIH0gZnJvbSBcIi4uL3RpY2tlcnMvVGlja2VyXCI7XG5pbXBvcnQgeyBUaWNrZXJUeXBlIH0gZnJvbSBcIi4uL3RpY2tlcnMvVGlja2VyVHlwZVwiO1xuXG5leHBvcnQgY2xhc3MgU2l0ZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGJhc2VVcmw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgYmFzZVVybDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw7XG4gICAgfVxuXG4gICAgaXMoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBjcmVhdGVVcmxGb3JUaWNrZXIodGlja2VyOiBUaWNrZXIpOiBhbnkge31cblxuICAgIGdldFRpY2tlclR5cGUoc2l0ZTogU2l0ZSwgY3J5cHRvQXJnOiBhbnksIGRvY3VtZW50OiBEb2N1bWVudCk6IFRpY2tlclR5cGUge1xuICAgICAgICBpZiAoc2l0ZS5pc0V0Zihkb2N1bWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGlja2VyVHlwZShcImV0ZlwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChzaXRlLmlzQ3J5cHRvKGNyeXB0b0FyZykpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGlja2VyVHlwZShcImNyeXB0b1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGlja2VyVHlwZShcInN0b2NrXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHR5cGUgaGVyZSBpcyBcImFueVwiLCBiZWNhdXNlIHdlIGRvbid0IHdhbnQgdG8gcmV0dXJuIGEgdmFsdWUgaW4gdGhlIHN1cGVyY2xhc3MsIHdoaWNoIHdlIHdvdWxkIGhhdmUgdG8gc2luY2Ugd2UncmUgdXNpbmcgdGhlbSBpbiBnZXRUaWNrZXJUeXBlIGFib3ZlLlxuICAgIC8vIEltcGxlbWVudGF0aW9ucyBvZiB0aGVzZSBtZXRob2RzIGluIHN1YmNsYXNzZXMgc2hvdWxkIHJldHVybiBhIGJvb2xlYW4uXG4gICAgaXNDcnlwdG8oeDogYW55KTogYW55IHt9XG4gICAgaXNFdGYoZG9jdW1lbnQ6IERvY3VtZW50KTogYW55IHt9XG59XG4iLCJpbXBvcnQgeyBTaXRlIH0gZnJvbSBcIi4vU2l0ZVwiO1xuaW1wb3J0IHsgVGlja2VyVHlwZSB9IGZyb20gXCIuLi90aWNrZXJzL1RpY2tlclR5cGVcIjtcbmltcG9ydCB7IFRpY2tlciB9IGZyb20gXCIuLi90aWNrZXJzL1RpY2tlclwiO1xuXG5leHBvcnQgY2xhc3MgWWFob29GaW5hbmNlIGV4dGVuZHMgU2l0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFwiWWFob29GaW5hbmNlXCIsIGBodHRwczovL2ZpbmFuY2UueWFob28uY29tYCk7XG4gICAgfVxuXG4gICAgY3JlYXRlVXJsRm9yVGlja2VyKHRpY2tlcjogVGlja2VyKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHM6IHN0cmluZyA9IHRpY2tlci5nZXRIeXBoZW5hdGVkVGlja2VyU3ltYm9sKCk7XG5cbiAgICAgICAgLy8gSWYgdGhlIHBhZ2UgdGhhdCB3ZSdyZSBvbiBpcyBmb3IgYSBzdG9jayBvciBFVEYsIHRoZW4gd2UgY2FuIGp1c3QgbGVhdmUgdGhlIHRpY2tlciBhcy1pcy5cbiAgICAgICAgLy8gSWYgdGhlIHBhZ2UgdGhhdCB3ZSdyZSBvbiBpcyBmb3IgYSBjcnlwdG9jdXJyZW5jeSwgdGhlbiB3ZSBuZWVkXG4gICAgICAgIC8vIHRvIGFkanVzdCB0aGUgdGlja2VyIHRvIGFkZCB0aGUgXCJxdW90ZSBjdXJyZW5jeVwiIC0tXG4gICAgICAgIC8vIHRoZSBjdXJyZW5jeSBmb3Igd2hpY2ggd2UncmUgZGlzcGxheWluZyB0aGUgZXhjaGFuZ2UgcmF0ZSB0byB0aGUgY3J5cHRvY3VycmVuY3kuXG4gICAgICAgIC8vIEJ5IGRlZmF1bHQsIHdlJ2xsIHVzZSB0aGUgVVMgRG9sbGFyIChcIlVTRFwiKS5cbiAgICAgICAgLy8gVE9ETzogQWxsb3cgdXNlciB0byBzZWxlY3QgdGhlaXIgcHJlZmVycmVkIHF1b3RlIGN1cnJlbmN5IGluIE9wdGlvbnMgbWVudS5cbiAgICAgICAgaWYgKHRpY2tlci50aWNrZXJUeXBlLnZhbHVlID09PSBcImNyeXB0b1wiKSB7XG4gICAgICAgICAgICBzID0gcyArIGAtVVNEYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7dGhpcy5iYXNlVXJsfS9xdW90ZS8ke3N9YDtcbiAgICB9XG5cbiAgICBnZXRUaWNrZXIodXJsOiBzdHJpbmcsIGRvY3VtZW50OiBEb2N1bWVudCk6IFRpY2tlciB7XG4gICAgICAgIHJldHVybiBuZXcgVGlja2VyKFxuICAgICAgICAgICAgdGhpcy5nZXRUaWNrZXJGcm9tUGFnZShkb2N1bWVudCwgdGhpcy5pc0NyeXB0byhkb2N1bWVudCkpLFxuICAgICAgICAgICAgdGhpcy5nZXROYW1lKGRvY3VtZW50KSxcbiAgICAgICAgICAgIHRoaXMuZ2V0VGlja2VyVHlwZSh0aGlzLCBkb2N1bWVudCwgZG9jdW1lbnQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0UXVvdGVIZWFkZXJJbmZvSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiI3F1b3RlLWhlYWRlci1pbmZvXCI7XG4gICAgfVxuXG4gICAgZ2V0TmFtZShkb2N1bWVudDogRG9jdW1lbnQpOiBzdHJpbmcge1xuICAgICAgICBsZXQgbmFtZSA9IHRoaXMuZ2V0Q29tcGFueUhlYWRlcihkb2N1bWVudCk7XG4gICAgICAgIGxldCBuYW1lV2l0aFRpY2tlclJlbW92ZWQgPSBuYW1lLnNwbGl0KFwiIChcIilbMF07XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZUV4dHJhV2hpdGVzcGFjZShuYW1lV2l0aFRpY2tlclJlbW92ZWQpO1xuICAgIH1cblxuICAgIGdldFRpY2tlckZyb21QYWdlKGRvY3VtZW50OiBEb2N1bWVudCwgaXNDcnlwdG86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgICAgICBsZXQgbmFtZSA9IHRoaXMuZ2V0Q29tcGFueUhlYWRlcihkb2N1bWVudCk7XG4gICAgICAgIGxldCBjbGVhbmVkVXBTeW1ib2wgPSBuYW1lLnNwbGl0KFwiIChcIilbMV07XG4gICAgICAgIGNsZWFuZWRVcFN5bWJvbCA9IGNsZWFuZWRVcFN5bWJvbC5zcGxpdChcIilcIilbMF07XG4gICAgICAgIGlmIChpc0NyeXB0bykge1xuICAgICAgICAgICAgY2xlYW5lZFVwU3ltYm9sID0gY2xlYW5lZFVwU3ltYm9sLnNwbGl0KFwiLVwiKVswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbGVhbmVkVXBTeW1ib2w7XG4gICAgfVxuXG4gICAgZ2V0Q29tcGFueUhlYWRlcihkb2N1bWVudDogRG9jdW1lbnQpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuZ2V0UXVvdGVIZWFkZXJJbmZvSWQoKSArIFwiIGgxXCIpXG4gICAgICAgICAgICAudGV4dENvbnRlbnQudHJpbSgpO1xuICAgIH1cblxuICAgIHJlbW92ZUV4dHJhV2hpdGVzcGFjZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoXCJcXFxccytcIik7XG4gICAgICAgIGxldCBzcGxpdCA9IHN0ci5zcGxpdChyZWdleCk7XG4gICAgICAgIGxldCBmdWxsID0gXCJcIjtcbiAgICAgICAgc3BsaXQuZm9yRWFjaChmdW5jdGlvbiAod29yZCkge1xuICAgICAgICAgICAgZnVsbCA9IGZ1bGwgKyB3b3JkLnRyaW0oKSArIFwiIFwiO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gR2V0IHJpZCBvZiB0aGUgb25lIGV4dHJhIHNwYWNlIGF0IHRoZSBlbmQgYmVmb3JlIHdlIHJldHVyblxuICAgICAgICByZXR1cm4gZnVsbC50cmltKCk7XG4gICAgfVxuXG4gICAgaXNDcnlwdG8oZG9jdW1lbnQ6IERvY3VtZW50KTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBxdW90ZUhlYWRlckluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgdGhpcy5nZXRRdW90ZUhlYWRlckluZm9JZCgpICsgXCJcIlxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcXVvdGVIZWFkZXJJbmZvLnRleHRDb250ZW50LmluY2x1ZGVzKFwiQ29pbk1hcmtldENhcFwiKTtcbiAgICB9XG5cbiAgICBpc0V0Zihkb2N1bWVudDogRG9jdW1lbnQpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHF1b3RlU3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVvdGUtc3VtbWFyeVwiKTtcbiAgICAgICAgbGV0IHRleHRDbGVhbmVkVXAgPSB0aGlzLnJlbW92ZUV4dHJhV2hpdGVzcGFjZShcbiAgICAgICAgICAgIHF1b3RlU3VtbWFyeS50ZXh0Q29udGVudFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGV4dENsZWFuZWRVcC5pbmNsdWRlcyhcIk5ldCBBc3NldHNcIik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVGlja2VyVHlwZSB9IGZyb20gXCIuL1RpY2tlclR5cGVcIjtcblxuZXhwb3J0IGNsYXNzIFRpY2tlciB7XG4gICAgc3ltYm9sOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRpY2tlclR5cGU6IFRpY2tlclR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihzeW1ib2w6IHN0cmluZywgbmFtZTogc3RyaW5nLCB0aWNrZXJUeXBlOiBUaWNrZXJUeXBlKSB7XG4gICAgICAgIHRoaXMuc3ltYm9sID0gdGhpcy5jb252ZXJ0SHlwaGVuSW5UaWNrZXJTeW1ib2woc3ltYm9sKTtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5yZW1vdmVFeHRyYVdoaXRlc3BhY2UobmFtZSk7XG4gICAgICAgIHRoaXMudGlja2VyVHlwZSA9IHRpY2tlclR5cGU7XG4gICAgfVxuXG4gICAgY29udmVydEh5cGhlbkluVGlja2VyU3ltYm9sKHN5bWJvbDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2wucmVwbGFjZShcIi1cIiwgXCIuXCIpO1xuICAgIH1cblxuICAgIGdldEh5cGhlbmF0ZWRUaWNrZXJTeW1ib2woKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5bWJvbC5yZXBsYWNlKFwiLlwiLCBcIi1cIik7XG4gICAgfVxuXG4gICAgcmVtb3ZlRXh0cmFXaGl0ZXNwYWNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcIlxcXFxzK1wiKTtcbiAgICAgICAgbGV0IHNwbGl0ID0gc3RyLnNwbGl0KHJlZ2V4KTtcbiAgICAgICAgbGV0IGZ1bGwgPSBcIlwiO1xuICAgICAgICBzcGxpdC5mb3JFYWNoKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAgICAgICBmdWxsID0gZnVsbCArIHdvcmQudHJpbSgpICsgXCIgXCI7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBHZXQgcmlkIG9mIHRoZSBvbmUgZXh0cmEgc3BhY2UgYXQgdGhlIGVuZCBiZWZvcmUgd2UgcmV0dXJuXG4gICAgICAgIHJldHVybiBmdWxsLnRyaW0oKTtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYFRpY2tlciAtIHN5bWJvbDogJHt0aGlzLnN5bWJvbH0sIG5hbWU6ICR7dGhpcy5uYW1lfSwgdHlwZTogJHt0aGlzLnRpY2tlclR5cGV9YDtcbiAgICB9XG5cbiAgICBlcXVhbHModGhhdDogVGlja2VyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnN5bWJvbCA9PT0gdGhhdC5zeW1ib2wgJiZcbiAgICAgICAgICAgIHRoaXMubmFtZUVxdWFscyh0aGF0Lm5hbWUpICYmXG4gICAgICAgICAgICB0aGlzLnRpY2tlclR5cGUuZXF1YWxzKHRoYXQudGlja2VyVHlwZSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayB0byBzZWUgaWYgYSBnaXZlbiBjb21wYW55J3MgbmFtZSBtYXRjaGVzIHRoaXMgY29tcGFueSdzIG5hbWUuXG4gICAgICogU2luY2UgdGhlc2UgdmFsdWVzIGFyZSBiZWluZyBwdWxsZWQgZnJvbSBlYWNoIHNpdGUgd2UncmUgdmlzaXRpbmcgKGFuZCB3ZSBjYW4ndCBjb250cm9sIHdoYXQgdGhleSBjYWxsIHRoZW0pLFxuICAgICAqIGFuZCBzaW5jZSB0aGVzZSBlcXVhbGl0eSBmdW5jdGlvbnMgYXJlIChhdCBsZWFzdCBzbyBmYXIpIG9ubHkgYmVpbmcgdXNlZCB0byBmYWNpbGl0YXRlIHVuaXQgdGVzdGluZyBhbnl3YXksXG4gICAgICogdGhpcyBmdW5jdGlvbiBpcyBiYXNpY2FsbHkganVzdCBjaGVja2luZyB0byBzZWUgaWYgdGhlIG5hbWVzIGFyZSBcImNsb3NlIGVub3VnaFwiIGJ5IGNoZWNraW5nIHRvIHNlZSBpZiBvbmUgc3RyaW5nIGluY2x1ZGVzIHRoZSBvdGhlci5cbiAgICAgKlxuICAgICAqIEZvciBleGFtcGxlLCB0aGUgUkggcGFnZSBmb3IgJFNQWSBjYWxscyBpdCBcIlNQRFIgUyZQIDUwMCBFVEZcIiwgd2hpbGUgWUYgY2FsbHMgaXQgXCJTUERSIFMmUCA1MDAgRVRGIFRydXN0XCIuXG4gICAgICogRXZlbiB0aG91Z2ggdGhlIHN0cmluZ3MgYXJlbid0IGlkZW50aWNhbCwgd2Ugc3RpbGwgd2FudCB0aGVzZSB0byBiZSBjb25zaWRlcmVkIGVxdWFsLCBzbyB3ZSBjYW4ganVzdCBjaGVjayBpZiBvbmUgY29udGFpbnMgdGhlIG90aGVyLCB3aGljaCBpdCBkb2VzLlxuICAgICAqXG4gICAgICogVE9ETyAtIHRoZXJlIHdpbGwgcHJvYmFibHkgYmUgc29tZSBlZGdlIGNhc2VzIGZvciB3aGljaCB0aGlzIHNvbHV0aW9uIHdpbGwgbm90IHdvcmssIHNvIHRoaXMgd2lsbCBsaWtlbHkgaGF2ZSB0byBiZSByZXZpc2VkIGluIHRoZSBmdXR1cmUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGhhdE5hbWUgLSBuYW1lIG9mIHRoZSBjb21wYW55IHRvIHdoaWNoIHdlJ3JlIGNvbXBhcmluZyB0aGlzIGNvbXBhbnlcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBjb21wYW5pZXMnIG5hbWVzIGFyZSB0aGUgc2FtZSAob3IgYXQgbGVhc3QsIGNsb3NlIGVub3VnaClcbiAgICAgKi9cbiAgICBuYW1lRXF1YWxzKHRoYXROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHRoaXNOYW1lID0gdGhpcy5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoYXROYW1lID0gdGhhdE5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICByZXR1cm4gdGhpc05hbWUuaW5jbHVkZXModGhhdE5hbWUpIHx8IHRoYXROYW1lLmluY2x1ZGVzKHRoaXNOYW1lKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGlja2VyVHlwZSB7XG4gICAgVkFMSURfVFlQRVMgPSBbXCJzdG9ja1wiLCBcImV0ZlwiLCBcIm11dHVhbGZ1bmRcIiwgXCJjcnlwdG9cIiwgXCJmdXR1cmVcIiwgXCJib25kXCJdO1xuICAgIHZhbHVlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aWNrZXJUeXBlOiBzdHJpbmcpIHtcbiAgICAgICAgdGlja2VyVHlwZSA9IHRpY2tlclR5cGUudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWRUeXBlKHRpY2tlclR5cGUpKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGlja2VyVHlwZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdGlja2VyVHlwZTogXCIgKyB0aWNrZXJUeXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzVmFsaWRUeXBlKHR0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuVkFMSURfVFlQRVMuaW5jbHVkZXModHQpO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIGVxdWFscyh0aGF0OiBUaWNrZXJUeXBlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSB0aGF0LnZhbHVlO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiaW1wb3J0IHsgWWFob29GaW5hbmNlIH0gZnJvbSBcIi4uL3NpdGVzL1lhaG9vRmluYW5jZVwiO1xuaW1wb3J0IHsgVGlja2VyVHlwZSB9IGZyb20gXCIuLi90aWNrZXJzL1RpY2tlclR5cGVcIjtcbmltcG9ydCB7IFRpY2tlciB9IGZyb20gXCIuLi90aWNrZXJzL1RpY2tlclwiO1xuaW1wb3J0IHsgUm9iaW5ob29kIH0gZnJvbSBcIi4uL3NpdGVzL1JvYmluaG9vZFwiO1xuaW1wb3J0IHsgU2l0ZSB9IGZyb20gXCIuLi9zaXRlcy9TaXRlXCI7XG5cbi8vIENhbGxlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgYnJvd3NlciBhY3Rpb24uXG5jaHJvbWUuYWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiBpbmplY3QodGFiKSB7XG4gICAgY2hyb21lLnRhYnMucXVlcnkoXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIGxhc3RGb2N1c2VkV2luZG93OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAodGFicykge1xuICAgICAgICAgICAgdmFyIGFjdGl2ZVRhYiA9IHRhYnNbMF07XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBhY3RpdmVUYWIuaW5kZXg7XG4gICAgICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShhY3RpdmVUYWIuaWQsIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcImNsaWNrZWRfYnJvd3Nlcl9hY3Rpb25cIixcbiAgICAgICAgICAgICAgICB1cmw6IHRhYi51cmwsXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4ICsgMSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgKTtcbn0pO1xuXG4vLyBPcGVuIG5ldyB0YWJcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiBvcGVuTmV3VGFiKFxuICAgIHJlcXVlc3QsXG4gICAgc2VuZGVyLFxuICAgIHNlbmRSZXNwb25zZVxuKSB7XG4gICAgaWYgKHJlcXVlc3QubWVzc2FnZSA9PT0gXCJvcGVuX25ld190YWJcIikge1xuICAgICAgICBsZXQgdG9TaXRlID0gZGV0ZXJtaW5lU2l0ZShyZXF1ZXN0LnRvU2l0ZSk7XG5cbiAgICAgICAgbGV0IG5ld1RpY2tlciA9IG5ldyBUaWNrZXIoXG4gICAgICAgICAgICByZXF1ZXN0LnRpY2tlclN5bWJvbCxcbiAgICAgICAgICAgIHJlcXVlc3QudGlja2VyTmFtZSxcbiAgICAgICAgICAgIG5ldyBUaWNrZXJUeXBlKHJlcXVlc3QudGlja2VyVHlwZSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXJ2aWNlV29ya2VyIHRpY2tlcjogXCIgKyBuZXdUaWNrZXIudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgbGV0IHVybCA9IHRvU2l0ZS5jcmVhdGVVcmxGb3JUaWNrZXIobmV3VGlja2VyKTtcbiAgICAgICAgY2hyb21lLnRhYnMuY3JlYXRlKHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgaW5kZXg6IHJlcXVlc3QuaW5kZXgsXG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gb3BlbkhvbWVwYWdlKFxuICAgIHJlcXVlc3QsXG4gICAgc2VuZGVyLFxuICAgIHNlbmRSZXNwb25zZVxuKSB7XG4gICAgaWYgKHJlcXVlc3QubWVzc2FnZSA9PT0gXCJvcGVuX2hvbWVwYWdlXCIpIHtcbiAgICAgICAgbGV0IHRvU2l0ZSA9IGRldGVybWluZVNpdGUocmVxdWVzdC50b1NpdGUpO1xuXG4gICAgICAgIGxldCB1cmwgPSB0b1NpdGUuYmFzZVVybDtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXJ2aWNlV29ya2VyIG9wZW5faG9tZXBhZ2UgdXJsOiBcIiArIHVybCk7XG5cbiAgICAgICAgY2hyb21lLnRhYnMuY3JlYXRlKHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgaW5kZXg6IHJlcXVlc3QuaW5kZXgsXG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBkZXRlcm1pbmVTaXRlKHNpdGU6IHN0cmluZyk6IFNpdGUge1xuICAgIGNvbnNvbGUubG9nKFwiZGV0ZXJtaW5lU2l0ZShzaXRlKTogXCIgKyBzaXRlKTtcbiAgICBzaXRlID0gc2l0ZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzaXRlLmluY2x1ZGVzKFwicm9iaW5ob29kXCIpKSB7XG4gICAgICAgIHJldHVybiBuZXcgUm9iaW5ob29kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBZYWhvb0ZpbmFuY2UoKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlVXJsRm9yVGlja2VyIiwidGlja2VyIiwidGlja2VyVHlwZSIsInZhbHVlIiwidGhpcyIsImJhc2VVcmwiLCJzeW1ib2wiLCJnZXRUaWNrZXIiLCJ1cmwiLCJkb2N1bWVudCIsImdldFRpY2tlckZyb21VcmwiLCJnZXROYW1lIiwiZ2V0VGlja2VyVHlwZSIsInNwbGl0QXJyYXkiLCJzcGxpdCIsImxhc3RJbmRleCIsImxlbmd0aCIsInRyaW0iLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJpc0NyeXB0byIsImluY2x1ZGVzIiwiaXNFdGYiLCJuYW1lIiwiaXMiLCJzaXRlIiwiY3J5cHRvQXJnIiwieCIsInMiLCJnZXRIeXBoZW5hdGVkVGlja2VyU3ltYm9sIiwiZ2V0VGlja2VyRnJvbVBhZ2UiLCJnZXRRdW90ZUhlYWRlckluZm9JZCIsIm5hbWVXaXRoVGlja2VyUmVtb3ZlZCIsImdldENvbXBhbnlIZWFkZXIiLCJyZW1vdmVFeHRyYVdoaXRlc3BhY2UiLCJjbGVhbmVkVXBTeW1ib2wiLCJzdHIiLCJyZWdleCIsIlJlZ0V4cCIsImZ1bGwiLCJmb3JFYWNoIiwid29yZCIsInF1b3RlU3VtbWFyeSIsImNvbnZlcnRIeXBoZW5JblRpY2tlclN5bWJvbCIsInJlcGxhY2UiLCJ0b1N0cmluZyIsImVxdWFscyIsInRoYXQiLCJuYW1lRXF1YWxzIiwidGhhdE5hbWUiLCJ0aGlzTmFtZSIsInRvTG93ZXJDYXNlIiwiVkFMSURfVFlQRVMiLCJpc1ZhbGlkVHlwZSIsIkVycm9yIiwidHQiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImQiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXRlcm1pbmVTaXRlIiwiY29uc29sZSIsImxvZyIsImNocm9tZSIsImFjdGlvbiIsIm9uQ2xpY2tlZCIsImFkZExpc3RlbmVyIiwidGFiIiwidGFicyIsInF1ZXJ5IiwiYWN0aXZlIiwibGFzdEZvY3VzZWRXaW5kb3ciLCJhY3RpdmVUYWIiLCJpbmRleCIsInNlbmRNZXNzYWdlIiwiaWQiLCJtZXNzYWdlIiwicnVudGltZSIsIm9uTWVzc2FnZSIsInJlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJ0b1NpdGUiLCJuZXdUaWNrZXIiLCJ0aWNrZXJTeW1ib2wiLCJ0aWNrZXJOYW1lIiwiY3JlYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==