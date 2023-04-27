(()=>{"use strict";var t,e,o={776:(t,e,o)=>{o.d(e,{G:()=>s});var r,n=o(199),i=o(219),c=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),s=function(t){function e(){return t.call(this,"Robinhood","https://robinhood.com")||this}return c(e,t),e.prototype.createUrlForTicker=function(t){return"crypto"===t.tickerType.value?"".concat(this.baseUrl,"/").concat(t.tickerType.value,"/").concat(t.symbol):"".concat(this.baseUrl,"/stocks/").concat(t.symbol)},e.prototype.getTicker=function(t,e){var o=e.querySelector("title").textContent.split(" ")[0];return new i.v(o,this.getName(e),this.getTickerType(this,t,e))},e.prototype.getName=function(t){return t.querySelector("main header h1").textContent.trim()},e.prototype.isCrypto=function(t){return t.includes("crypto")},e.prototype.isEtf=function(t){return!(null===t.querySelector("#etf-category"))},e}(n.T)},199:(t,e,o)=>{o.d(e,{T:()=>n});var r=o(110),n=function(){function t(t,e){this.name=t,this.baseUrl=e}return t.prototype.is=function(){return this.name},t.prototype.createUrlForTicker=function(t){},t.prototype.getTickerType=function(t,e,o){return t.isEtf(o)?new r.C("etf"):t.isCrypto(e)?new r.C("crypto"):new r.C("stock")},t.prototype.isCrypto=function(t){},t.prototype.isEtf=function(t){},t}()},455:(t,e,o)=>{o.d(e,{k:()=>s});var r,n=o(199),i=o(219),c=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),s=function(t){function e(){return t.call(this,"YahooFinance","https://finance.yahoo.com")||this}return c(e,t),e.prototype.createUrlForTicker=function(t){var e=t.symbol;return"crypto"===t.tickerType.value&&(e+="-USD"),"".concat(this.baseUrl,"/quote/").concat(e)},e.prototype.getTicker=function(t,e){return new i.v(this.getTickerFromPage(e,this.isCrypto(e)),this.getName(e),this.getTickerType(this,e,e))},e.prototype.getQuoteHeaderInfoId=function(){return"#quote-header-info"},e.prototype.getName=function(t){var e=this.getCompanyHeader(t).split(" (")[0];return this.removeExtraWhitespace(e)},e.prototype.getTickerFromPage=function(t,e){var o=this.getCompanyHeader(t).split(" (")[1];return o=o.split(")")[0],e&&(o=o.split("-")[0]),o},e.prototype.getCompanyHeader=function(t){return t.querySelector(this.getQuoteHeaderInfoId()+" h1").textContent.trim()},e.prototype.removeExtraWhitespace=function(t){var e=new RegExp("\\s+"),o=t.split(e),r="";return o.forEach((function(t){r=r+t.trim()+" "})),r.trim()},e.prototype.isCrypto=function(t){return t.querySelector(this.getQuoteHeaderInfoId()+"").textContent.includes("CoinMarketCap")},e.prototype.isEtf=function(t){var e=t.querySelector("#quote-summary");return this.removeExtraWhitespace(e.textContent).includes("Net Assets")},e}(n.T)},219:(t,e,o)=>{o.d(e,{v:()=>r});var r=function(){function t(t,e,o){this.symbol=t,this.name=this.removeExtraWhitespace(e),this.tickerType=o}return t.prototype.removeExtraWhitespace=function(t){var e=new RegExp("\\s+"),o=t.split(e),r="";return o.forEach((function(t){r=r+t.trim()+" "})),r.trim()},t.prototype.toString=function(){return"Ticker - symbol: ".concat(this.symbol,", name: ").concat(this.name,", type: ").concat(this.tickerType)},t.prototype.equals=function(t){return this.symbol===t.symbol&&this.nameEquals(t.name)&&this.tickerType.equals(t.tickerType)},t.prototype.nameEquals=function(t){var e=this.name.toLowerCase();return t=t.toLowerCase(),e.includes(t)||t.includes(e)},t}()},110:(t,e,o)=>{o.d(e,{C:()=>r});var r=function(){function t(t){if(this.VALID_TYPES=["stock","etf","mutualfund","crypto","future","bond"],t=t.toLowerCase().trim(),!this.isValidType(t))throw new Error("Invalid tickerType: "+t);this.value=t}return t.prototype.isValidType=function(t){return this.VALID_TYPES.includes(t)},t.prototype.toString=function(){return this.value},t.prototype.equals=function(t){return this.value===t.value},t}()}},r={};function n(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={exports:{}};return o[t](i,i.exports,n),i.exports}n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t=n(776),e=n(455),chrome.runtime.onMessage.addListener((function(o,r,n){if("clicked_browser_action"===o.message){var i=void 0,c=void 0;if(o.url.toLowerCase().includes("robinhood")?(i=new t.G,c=new e.k):(i=new e.k,c=new t.G),(u=o.url).startsWith("https://robinhood.com/stocks/")||u.startsWith("https://robinhood.com/crypto/")||u.startsWith("https://finance.yahoo.com/quote/")){var s=i.getTicker(o.url,document);console.log(s.toString()),chrome.runtime.sendMessage({message:"open_new_tab",tickerSymbol:s.symbol,tickerName:s.name,tickerType:s.tickerType+"",index:o.index,fromSite:i.is(),toSite:c.is()})}else chrome.runtime.sendMessage({message:"open_homepage",index:o.index,fromSite:i.is(),toSite:c.is()})}var u}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUlDLE9BQVEsRUFDUkMsT0FBTSxFQVVWLEdBUklMLEVBQVFuRSxJQUFJcUMsY0FBYzNCLFNBQVMsY0FDbkM2RCxFQUFXLElBQUksSUFDZkMsRUFBUyxJQUFJLE1BRWJELEVBQVcsSUFBSSxJQUNmQyxFQUFTLElBQUksTUEyQkZ4RSxFQXhCR21FLEVBQVFuRSxLQTBCdEJ5RSxXQUFXLGtDQUNmekUsRUFBSXlFLFdBQVcsa0NBQ2Z6RSxFQUFJeUUsV0FBVyxvQ0E1QmlCLENBQzVCLElBQUloRixFQUFpQjhFLEVBQVN4RSxVQUFVb0UsRUFBUW5FLElBQUtDLFVBQ3JEeUUsUUFBUUMsSUFBSWxGLEVBQU9zQyxZQUVuQmdDLE9BQU9DLFFBQVFZLFlBQVksQ0FDdkJOLFFBQVMsZUFDVE8sYUFBY3BGLEVBQU9LLE9BQ3JCZ0YsV0FBWXJGLEVBQU9tQixLQUNuQmxCLFdBQVlELEVBQU9DLFdBQWEsR0FDaENxRixNQUFPWixFQUFRWSxNQUNmUixTQUFVQSxFQUFTMUQsS0FDbkIyRCxPQUFRQSxFQUFPM0QsTSxNQUduQmtELE9BQU9DLFFBQVFZLFlBQVksQ0FDdkJOLFFBQVMsZ0JBQ1RTLE1BQU9aLEVBQVFZLE1BQ2ZSLFNBQVVBLEVBQVMxRCxLQUNuQjJELE9BQVFBLEVBQU8zRCxNLENBTS9CLElBQXVCYixDQUZ2QixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9iaW5ob29kdG95YWhvb2ZpbmFuY2UvLi9zcmMvc2l0ZXMvUm9iaW5ob29kLnRzIiwid2VicGFjazovL3JvYmluaG9vZHRveWFob29maW5hbmNlLy4vc3JjL3NpdGVzL1NpdGUudHMiLCJ3ZWJwYWNrOi8vcm9iaW5ob29kdG95YWhvb2ZpbmFuY2UvLi9zcmMvc2l0ZXMvWWFob29GaW5hbmNlLnRzIiwid2VicGFjazovL3JvYmluaG9vZHRveWFob29maW5hbmNlLy4vc3JjL3RpY2tlcnMvVGlja2VyLnRzIiwid2VicGFjazovL3JvYmluaG9vZHRveWFob29maW5hbmNlLy4vc3JjL3RpY2tlcnMvVGlja2VyVHlwZS50cyIsIndlYnBhY2s6Ly9yb2Jpbmhvb2R0b3lhaG9vZmluYW5jZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yb2Jpbmhvb2R0b3lhaG9vZmluYW5jZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcm9iaW5ob29kdG95YWhvb2ZpbmFuY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yb2Jpbmhvb2R0b3lhaG9vZmluYW5jZS8uL3NyYy9jb250ZW50U2NyaXB0cy9jb250ZW50U2NyaXB0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpdGUgfSBmcm9tIFwiLi9TaXRlXCI7XG5pbXBvcnQgeyBUaWNrZXJUeXBlIH0gZnJvbSBcIi4uL3RpY2tlcnMvVGlja2VyVHlwZVwiO1xuaW1wb3J0IHsgVGlja2VyIH0gZnJvbSBcIi4uL3RpY2tlcnMvVGlja2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBSb2Jpbmhvb2QgZXh0ZW5kcyBTaXRlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXCJSb2Jpbmhvb2RcIiwgYGh0dHBzOi8vcm9iaW5ob29kLmNvbWApO1xuICAgIH1cblxuICAgIGNyZWF0ZVVybEZvclRpY2tlcih0aWNrZXI6IFRpY2tlcik6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aWNrZXIudGlja2VyVHlwZS52YWx1ZSA9PT0gXCJjcnlwdG9cIikge1xuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuYmFzZVVybH0vJHt0aWNrZXIudGlja2VyVHlwZS52YWx1ZX0vJHt0aWNrZXIuc3ltYm9sfWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBFVEZzIGFsc28gZ2V0IHRoZSAnc3RvY2tzJyBwYXRoIGluIHRoZSB1cmwgb24gUkhcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmJhc2VVcmx9L3N0b2Nrcy8ke3RpY2tlci5zeW1ib2x9YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRpY2tlcih1cmw6IHN0cmluZywgZG9jdW1lbnQ6IERvY3VtZW50KTogVGlja2VyIHtcbiAgICAgICAgdmFyIHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKTtcbiAgICAgICAgdmFyIHRpdGxlID0gdGl0bGVFbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICB2YXIgc3BsaXRUaXRsZSA9IHRpdGxlLnNwbGl0KFwiIFwiKTtcblxuICAgICAgICBsZXQgdGlja2VyU3RyaW5nID0gc3BsaXRUaXRsZVswXTtcbiAgICAgICAgcmV0dXJuIG5ldyBUaWNrZXIoXG4gICAgICAgICAgICB0aWNrZXJTdHJpbmcsXG4gICAgICAgICAgICB0aGlzLmdldE5hbWUoZG9jdW1lbnQpLFxuICAgICAgICAgICAgdGhpcy5nZXRUaWNrZXJUeXBlKHRoaXMsIHVybCwgZG9jdW1lbnQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0TmFtZShkb2N1bWVudDogRG9jdW1lbnQpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW4gaGVhZGVyIGgxXCIpLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICB9XG5cbiAgICBpc0NyeXB0byh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdXJsLmluY2x1ZGVzKFwiY3J5cHRvXCIpO1xuICAgIH1cblxuICAgIGlzRXRmKGRvY3VtZW50OiBEb2N1bWVudCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgZXRmQ2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V0Zi1jYXRlZ29yeVwiKTtcbiAgICAgICAgcmV0dXJuICEoZXRmQ2F0ZWdvcnkgPT09IG51bGwpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFRpY2tlciB9IGZyb20gXCIuLi90aWNrZXJzL1RpY2tlclwiO1xuaW1wb3J0IHsgVGlja2VyVHlwZSB9IGZyb20gXCIuLi90aWNrZXJzL1RpY2tlclR5cGVcIjtcblxuZXhwb3J0IGNsYXNzIFNpdGUge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBiYXNlVXJsOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGJhc2VVcmw6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsO1xuICAgIH1cblxuICAgIGlzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgY3JlYXRlVXJsRm9yVGlja2VyKHRpY2tlcjogVGlja2VyKTogYW55IHt9XG5cbiAgICBnZXRUaWNrZXJUeXBlKHNpdGU6IFNpdGUsIGNyeXB0b0FyZzogYW55LCBkb2N1bWVudDogRG9jdW1lbnQpOiBUaWNrZXJUeXBlIHtcbiAgICAgICAgaWYgKHNpdGUuaXNFdGYoZG9jdW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFRpY2tlclR5cGUoXCJldGZcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoc2l0ZS5pc0NyeXB0byhjcnlwdG9BcmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFRpY2tlclR5cGUoXCJjcnlwdG9cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFRpY2tlclR5cGUoXCJzdG9ja1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiB0eXBlIGhlcmUgaXMgXCJhbnlcIiwgYmVjYXVzZSB3ZSBkb24ndCB3YW50IHRvIHJldHVybiBhIHZhbHVlIGluIHRoZSBzdXBlcmNsYXNzLCB3aGljaCB3ZSB3b3VsZCBoYXZlIHRvIHNpbmNlIHdlJ3JlIHVzaW5nIHRoZW0gaW4gZ2V0VGlja2VyVHlwZSBhYm92ZS5cbiAgICAvLyBJbXBsZW1lbnRhdGlvbnMgb2YgdGhlc2UgbWV0aG9kcyBpbiBzdWJjbGFzc2VzIHNob3VsZCByZXR1cm4gYSBib29sZWFuLlxuICAgIGlzQ3J5cHRvKHg6IGFueSk6IGFueSB7fVxuICAgIGlzRXRmKGRvY3VtZW50OiBEb2N1bWVudCk6IGFueSB7fVxufVxuIiwiaW1wb3J0IHsgU2l0ZSB9IGZyb20gXCIuL1NpdGVcIjtcbmltcG9ydCB7IFRpY2tlclR5cGUgfSBmcm9tIFwiLi4vdGlja2Vycy9UaWNrZXJUeXBlXCI7XG5pbXBvcnQgeyBUaWNrZXIgfSBmcm9tIFwiLi4vdGlja2Vycy9UaWNrZXJcIjtcblxuZXhwb3J0IGNsYXNzIFlhaG9vRmluYW5jZSBleHRlbmRzIFNpdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcIllhaG9vRmluYW5jZVwiLCBgaHR0cHM6Ly9maW5hbmNlLnlhaG9vLmNvbWApO1xuICAgIH1cblxuICAgIGNyZWF0ZVVybEZvclRpY2tlcih0aWNrZXI6IFRpY2tlcik6IHN0cmluZyB7XG4gICAgICAgIGxldCBzOiBzdHJpbmcgPSB0aWNrZXIuc3ltYm9sO1xuXG4gICAgICAgIC8vIElmIHRoZSBwYWdlIHRoYXQgd2UncmUgb24gaXMgZm9yIGEgc3RvY2sgb3IgRVRGLCB0aGVuIHdlIGNhbiBqdXN0IGxlYXZlIHRoZSB0aWNrZXIgYXMtaXMuXG4gICAgICAgIC8vIElmIHRoZSBwYWdlIHRoYXQgd2UncmUgb24gaXMgZm9yIGEgY3J5cHRvY3VycmVuY3ksIHRoZW4gd2UgbmVlZFxuICAgICAgICAvLyB0byBhZGp1c3QgdGhlIHRpY2tlciB0byBhZGQgdGhlIFwicXVvdGUgY3VycmVuY3lcIiAtLVxuICAgICAgICAvLyB0aGUgY3VycmVuY3kgZm9yIHdoaWNoIHdlJ3JlIGRpc3BsYXlpbmcgdGhlIGV4Y2hhbmdlIHJhdGUgdG8gdGhlIGNyeXB0b2N1cnJlbmN5LlxuICAgICAgICAvLyBCeSBkZWZhdWx0LCB3ZSdsbCB1c2UgdGhlIFVTIERvbGxhciAoXCJVU0RcIikuXG4gICAgICAgIC8vIFRPRE86IEFsbG93IHVzZXIgdG8gc2VsZWN0IHRoZWlyIHByZWZlcnJlZCBxdW90ZSBjdXJyZW5jeSBpbiBPcHRpb25zIG1lbnUuXG4gICAgICAgIGlmICh0aWNrZXIudGlja2VyVHlwZS52YWx1ZSA9PT0gXCJjcnlwdG9cIikge1xuICAgICAgICAgICAgcyA9IHMgKyBgLVVTRGA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke3RoaXMuYmFzZVVybH0vcXVvdGUvJHtzfWA7XG4gICAgfVxuXG4gICAgZ2V0VGlja2VyKHVybDogc3RyaW5nLCBkb2N1bWVudDogRG9jdW1lbnQpOiBUaWNrZXIge1xuICAgICAgICByZXR1cm4gbmV3IFRpY2tlcihcbiAgICAgICAgICAgIHRoaXMuZ2V0VGlja2VyRnJvbVBhZ2UoZG9jdW1lbnQsIHRoaXMuaXNDcnlwdG8oZG9jdW1lbnQpKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0TmFtZShkb2N1bWVudCksXG4gICAgICAgICAgICB0aGlzLmdldFRpY2tlclR5cGUodGhpcywgZG9jdW1lbnQsIGRvY3VtZW50KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldFF1b3RlSGVhZGVySW5mb0lkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIiNxdW90ZS1oZWFkZXItaW5mb1wiO1xuICAgIH1cblxuICAgIGdldE5hbWUoZG9jdW1lbnQ6IERvY3VtZW50KTogc3RyaW5nIHtcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLmdldENvbXBhbnlIZWFkZXIoZG9jdW1lbnQpO1xuICAgICAgICBsZXQgbmFtZVdpdGhUaWNrZXJSZW1vdmVkID0gbmFtZS5zcGxpdChcIiAoXCIpWzBdO1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmVFeHRyYVdoaXRlc3BhY2UobmFtZVdpdGhUaWNrZXJSZW1vdmVkKTtcbiAgICB9XG5cbiAgICBnZXRUaWNrZXJGcm9tUGFnZShkb2N1bWVudDogRG9jdW1lbnQsIGlzQ3J5cHRvOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLmdldENvbXBhbnlIZWFkZXIoZG9jdW1lbnQpO1xuICAgICAgICBsZXQgY2xlYW5lZFVwU3ltYm9sID0gbmFtZS5zcGxpdChcIiAoXCIpWzFdO1xuICAgICAgICBjbGVhbmVkVXBTeW1ib2wgPSBjbGVhbmVkVXBTeW1ib2wuc3BsaXQoXCIpXCIpWzBdO1xuICAgICAgICBpZiAoaXNDcnlwdG8pIHtcbiAgICAgICAgICAgIGNsZWFuZWRVcFN5bWJvbCA9IGNsZWFuZWRVcFN5bWJvbC5zcGxpdChcIi1cIilbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsZWFuZWRVcFN5bWJvbDtcbiAgICB9XG5cbiAgICBnZXRDb21wYW55SGVhZGVyKGRvY3VtZW50OiBEb2N1bWVudCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRRdW90ZUhlYWRlckluZm9JZCgpICsgXCIgaDFcIilcbiAgICAgICAgICAgIC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRXh0cmFXaGl0ZXNwYWNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcIlxcXFxzK1wiKTtcbiAgICAgICAgbGV0IHNwbGl0ID0gc3RyLnNwbGl0KHJlZ2V4KTtcbiAgICAgICAgbGV0IGZ1bGwgPSBcIlwiO1xuICAgICAgICBzcGxpdC5mb3JFYWNoKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAgICAgICBmdWxsID0gZnVsbCArIHdvcmQudHJpbSgpICsgXCIgXCI7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBHZXQgcmlkIG9mIHRoZSBvbmUgZXh0cmEgc3BhY2UgYXQgdGhlIGVuZCBiZWZvcmUgd2UgcmV0dXJuXG4gICAgICAgIHJldHVybiBmdWxsLnRyaW0oKTtcbiAgICB9XG5cbiAgICBpc0NyeXB0byhkb2N1bWVudDogRG9jdW1lbnQpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHF1b3RlSGVhZGVySW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICB0aGlzLmdldFF1b3RlSGVhZGVySW5mb0lkKCkgKyBcIlwiXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBxdW90ZUhlYWRlckluZm8udGV4dENvbnRlbnQuaW5jbHVkZXMoXCJDb2luTWFya2V0Q2FwXCIpO1xuICAgIH1cblxuICAgIGlzRXRmKGRvY3VtZW50OiBEb2N1bWVudCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgcXVvdGVTdW1tYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNxdW90ZS1zdW1tYXJ5XCIpO1xuICAgICAgICBsZXQgdGV4dENsZWFuZWRVcCA9IHRoaXMucmVtb3ZlRXh0cmFXaGl0ZXNwYWNlKFxuICAgICAgICAgICAgcXVvdGVTdW1tYXJ5LnRleHRDb250ZW50XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0ZXh0Q2xlYW5lZFVwLmluY2x1ZGVzKFwiTmV0IEFzc2V0c1wiKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUaWNrZXJUeXBlIH0gZnJvbSBcIi4vVGlja2VyVHlwZVwiO1xuXG5leHBvcnQgY2xhc3MgVGlja2VyIHtcbiAgICBzeW1ib2w6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdGlja2VyVHlwZTogVGlja2VyVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKHN5bWJvbDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHRpY2tlclR5cGU6IFRpY2tlclR5cGUpIHtcbiAgICAgICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMucmVtb3ZlRXh0cmFXaGl0ZXNwYWNlKG5hbWUpO1xuICAgICAgICB0aGlzLnRpY2tlclR5cGUgPSB0aWNrZXJUeXBlO1xuICAgIH1cblxuICAgIHJlbW92ZUV4dHJhV2hpdGVzcGFjZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoXCJcXFxccytcIik7XG4gICAgICAgIGxldCBzcGxpdCA9IHN0ci5zcGxpdChyZWdleCk7XG4gICAgICAgIGxldCBmdWxsID0gXCJcIjtcbiAgICAgICAgc3BsaXQuZm9yRWFjaChmdW5jdGlvbiAod29yZCkge1xuICAgICAgICAgICAgZnVsbCA9IGZ1bGwgKyB3b3JkLnRyaW0oKSArIFwiIFwiO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gR2V0IHJpZCBvZiB0aGUgb25lIGV4dHJhIHNwYWNlIGF0IHRoZSBlbmQgYmVmb3JlIHdlIHJldHVyblxuICAgICAgICByZXR1cm4gZnVsbC50cmltKCk7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBUaWNrZXIgLSBzeW1ib2w6ICR7dGhpcy5zeW1ib2x9LCBuYW1lOiAke3RoaXMubmFtZX0sIHR5cGU6ICR7dGhpcy50aWNrZXJUeXBlfWA7XG4gICAgfVxuXG4gICAgZXF1YWxzKHRoYXQ6IFRpY2tlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5zeW1ib2wgPT09IHRoYXQuc3ltYm9sICYmXG4gICAgICAgICAgICB0aGlzLm5hbWVFcXVhbHModGhhdC5uYW1lKSAmJlxuICAgICAgICAgICAgdGhpcy50aWNrZXJUeXBlLmVxdWFscyh0aGF0LnRpY2tlclR5cGUpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgdG8gc2VlIGlmIGEgZ2l2ZW4gY29tcGFueSdzIG5hbWUgbWF0Y2hlcyB0aGlzIGNvbXBhbnkncyBuYW1lLlxuICAgICAqIFNpbmNlIHRoZXNlIHZhbHVlcyBhcmUgYmVpbmcgcHVsbGVkIGZyb20gZWFjaCBzaXRlIHdlJ3JlIHZpc2l0aW5nIChhbmQgd2UgY2FuJ3QgY29udHJvbCB3aGF0IHRoZXkgY2FsbCB0aGVtKSxcbiAgICAgKiBhbmQgc2luY2UgdGhlc2UgZXF1YWxpdHkgZnVuY3Rpb25zIGFyZSAoYXQgbGVhc3Qgc28gZmFyKSBvbmx5IGJlaW5nIHVzZWQgdG8gZmFjaWxpdGF0ZSB1bml0IHRlc3RpbmcgYW55d2F5LFxuICAgICAqIHRoaXMgZnVuY3Rpb24gaXMgYmFzaWNhbGx5IGp1c3QgY2hlY2tpbmcgdG8gc2VlIGlmIHRoZSBuYW1lcyBhcmUgXCJjbG9zZSBlbm91Z2hcIiBieSBjaGVja2luZyB0byBzZWUgaWYgb25lIHN0cmluZyBpbmNsdWRlcyB0aGUgb3RoZXIuXG4gICAgICpcbiAgICAgKiBGb3IgZXhhbXBsZSwgdGhlIFJIIHBhZ2UgZm9yICRTUFkgY2FsbHMgaXQgXCJTUERSIFMmUCA1MDAgRVRGXCIsIHdoaWxlIFlGIGNhbGxzIGl0IFwiU1BEUiBTJlAgNTAwIEVURiBUcnVzdFwiLlxuICAgICAqIEV2ZW4gdGhvdWdoIHRoZSBzdHJpbmdzIGFyZW4ndCBpZGVudGljYWwsIHdlIHN0aWxsIHdhbnQgdGhlc2UgdG8gYmUgY29uc2lkZXJlZCBlcXVhbCwgc28gd2UgY2FuIGp1c3QgY2hlY2sgaWYgb25lIGNvbnRhaW5zIHRoZSBvdGhlciwgd2hpY2ggaXQgZG9lcy5cbiAgICAgKlxuICAgICAqIFRPRE8gLSB0aGVyZSB3aWxsIHByb2JhYmx5IGJlIHNvbWUgZWRnZSBjYXNlcyBmb3Igd2hpY2ggdGhpcyBzb2x1dGlvbiB3aWxsIG5vdCB3b3JrLCBzbyB0aGlzIHdpbGwgbGlrZWx5IGhhdmUgdG8gYmUgcmV2aXNlZCBpbiB0aGUgZnV0dXJlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRoYXROYW1lIC0gbmFtZSBvZiB0aGUgY29tcGFueSB0byB3aGljaCB3ZSdyZSBjb21wYXJpbmcgdGhpcyBjb21wYW55XG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgY29tcGFuaWVzJyBuYW1lcyBhcmUgdGhlIHNhbWUgKG9yIGF0IGxlYXN0LCBjbG9zZSBlbm91Z2gpXG4gICAgICovXG4gICAgbmFtZUVxdWFscyh0aGF0TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCB0aGlzTmFtZSA9IHRoaXMubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGF0TmFtZSA9IHRoYXROYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXNOYW1lLmluY2x1ZGVzKHRoYXROYW1lKSB8fCB0aGF0TmFtZS5pbmNsdWRlcyh0aGlzTmFtZSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFRpY2tlclR5cGUge1xuICAgIFZBTElEX1RZUEVTID0gW1wic3RvY2tcIiwgXCJldGZcIiwgXCJtdXR1YWxmdW5kXCIsIFwiY3J5cHRvXCIsIFwiZnV0dXJlXCIsIFwiYm9uZFwiXTtcbiAgICB2YWx1ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IodGlja2VyVHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHRpY2tlclR5cGUgPSB0aWNrZXJUeXBlLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkVHlwZSh0aWNrZXJUeXBlKSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRpY2tlclR5cGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRpY2tlclR5cGU6IFwiICsgdGlja2VyVHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1ZhbGlkVHlwZSh0dDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLlZBTElEX1RZUEVTLmluY2x1ZGVzKHR0KTtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG5cbiAgICBlcXVhbHModGhhdDogVGlja2VyVHlwZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gdGhhdC52YWx1ZTtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCB7IFJvYmluaG9vZCB9IGZyb20gXCIuLi9zaXRlcy9Sb2Jpbmhvb2RcIjtcbmltcG9ydCB7IFlhaG9vRmluYW5jZSB9IGZyb20gXCIuLi9zaXRlcy9ZYWhvb0ZpbmFuY2VcIjtcbmltcG9ydCB7IFRpY2tlciB9IGZyb20gXCIuLi90aWNrZXJzL1RpY2tlclwiO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiBpY29uQ2xpY2tlZChcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgc2VuZGVyLFxuICAgICAgICBzZW5kUmVzcG9uc2VcbiAgICApIHtcbiAgICAgICAgaWYgKHJlcXVlc3QubWVzc2FnZSA9PT0gXCJjbGlja2VkX2Jyb3dzZXJfYWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGxldCBmcm9tU2l0ZTtcbiAgICAgICAgICAgIGxldCB0b1NpdGU7XG5cbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnVybC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwicm9iaW5ob29kXCIpKSB7XG4gICAgICAgICAgICAgICAgZnJvbVNpdGUgPSBuZXcgUm9iaW5ob29kKCk7XG4gICAgICAgICAgICAgICAgdG9TaXRlID0gbmV3IFlhaG9vRmluYW5jZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmcm9tU2l0ZSA9IG5ldyBZYWhvb0ZpbmFuY2UoKTtcbiAgICAgICAgICAgICAgICB0b1NpdGUgPSBuZXcgUm9iaW5ob29kKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYWdlSGFzVGlja2VyKHJlcXVlc3QudXJsKSkge1xuICAgICAgICAgICAgICAgIGxldCB0aWNrZXI6IFRpY2tlciA9IGZyb21TaXRlLmdldFRpY2tlcihyZXF1ZXN0LnVybCwgZG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRpY2tlci50b1N0cmluZygpKTtcblxuICAgICAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJvcGVuX25ld190YWJcIixcbiAgICAgICAgICAgICAgICAgICAgdGlja2VyU3ltYm9sOiB0aWNrZXIuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICB0aWNrZXJOYW1lOiB0aWNrZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdGlja2VyVHlwZTogdGlja2VyLnRpY2tlclR5cGUgKyBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogcmVxdWVzdC5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZnJvbVNpdGU6IGZyb21TaXRlLmlzKCksXG4gICAgICAgICAgICAgICAgICAgIHRvU2l0ZTogdG9TaXRlLmlzKCksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJvcGVuX2hvbWVwYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiByZXF1ZXN0LmluZGV4LFxuICAgICAgICAgICAgICAgICAgICBmcm9tU2l0ZTogZnJvbVNpdGUuaXMoKSxcbiAgICAgICAgICAgICAgICAgICAgdG9TaXRlOiB0b1NpdGUuaXMoKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gcGFnZUhhc1RpY2tlcih1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdXJsLnN0YXJ0c1dpdGgoXCJodHRwczovL3JvYmluaG9vZC5jb20vc3RvY2tzL1wiKSB8fFxuICAgICAgICAgICAgdXJsLnN0YXJ0c1dpdGgoXCJodHRwczovL3JvYmluaG9vZC5jb20vY3J5cHRvL1wiKSB8fFxuICAgICAgICAgICAgdXJsLnN0YXJ0c1dpdGgoXCJodHRwczovL2ZpbmFuY2UueWFob28uY29tL3F1b3RlL1wiKVxuICAgICAgICApO1xuICAgIH1cbn0pKCk7XG4iXSwibmFtZXMiOlsiY3JlYXRlVXJsRm9yVGlja2VyIiwidGlja2VyIiwidGlja2VyVHlwZSIsInZhbHVlIiwidGhpcyIsImJhc2VVcmwiLCJzeW1ib2wiLCJnZXRUaWNrZXIiLCJ1cmwiLCJkb2N1bWVudCIsInRpY2tlclN0cmluZyIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInNwbGl0IiwiZ2V0TmFtZSIsImdldFRpY2tlclR5cGUiLCJ0cmltIiwiaXNDcnlwdG8iLCJpbmNsdWRlcyIsImlzRXRmIiwibmFtZSIsImlzIiwic2l0ZSIsImNyeXB0b0FyZyIsIngiLCJzIiwiZ2V0VGlja2VyRnJvbVBhZ2UiLCJnZXRRdW90ZUhlYWRlckluZm9JZCIsIm5hbWVXaXRoVGlja2VyUmVtb3ZlZCIsImdldENvbXBhbnlIZWFkZXIiLCJyZW1vdmVFeHRyYVdoaXRlc3BhY2UiLCJjbGVhbmVkVXBTeW1ib2wiLCJzdHIiLCJyZWdleCIsIlJlZ0V4cCIsImZ1bGwiLCJmb3JFYWNoIiwid29yZCIsInF1b3RlU3VtbWFyeSIsInRvU3RyaW5nIiwiZXF1YWxzIiwidGhhdCIsIm5hbWVFcXVhbHMiLCJ0aGF0TmFtZSIsInRoaXNOYW1lIiwidG9Mb3dlckNhc2UiLCJWQUxJRF9UWVBFUyIsImlzVmFsaWRUeXBlIiwiRXJyb3IiLCJ0dCIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZCIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNocm9tZSIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInJlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJtZXNzYWdlIiwiZnJvbVNpdGUiLCJ0b1NpdGUiLCJzdGFydHNXaXRoIiwiY29uc29sZSIsImxvZyIsInNlbmRNZXNzYWdlIiwidGlja2VyU3ltYm9sIiwidGlja2VyTmFtZSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==