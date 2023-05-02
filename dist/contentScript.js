(()=>{"use strict";var t,e,r={776:(t,e,r)=>{r.d(e,{G:()=>s});var o,n=r(199),i=r(219),c=(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),s=function(t){function e(){return t.call(this,"Robinhood","https://robinhood.com")||this}return c(e,t),e.prototype.createUrlForTicker=function(t){return"crypto"===t.tickerType.value?"".concat(this.baseUrl,"/").concat(t.tickerType.value,"/").concat(t.symbol):"".concat(this.baseUrl,"/stocks/").concat(t.symbol)},e.prototype.getTicker=function(t,e){var r=e.querySelector("title").textContent.split(" ")[0];return new i.v(r,this.getName(e),this.getTickerType(this,t,e))},e.prototype.getName=function(t){return t.querySelector("main header h1").textContent.trim()},e.prototype.isCrypto=function(t){return t.includes("crypto")},e.prototype.isEtf=function(t){return!(null===t.querySelector("#etf-category"))},e}(n.T)},199:(t,e,r)=>{r.d(e,{T:()=>n});var o=r(110),n=function(){function t(t,e){this.name=t,this.baseUrl=e}return t.prototype.is=function(){return this.name},t.prototype.createUrlForTicker=function(t){},t.prototype.getTickerType=function(t,e,r){return t.isEtf(r)?new o.C("etf"):t.isCrypto(e)?new o.C("crypto"):new o.C("stock")},t.prototype.isCrypto=function(t){},t.prototype.isEtf=function(t){},t}()},455:(t,e,r)=>{r.d(e,{k:()=>s});var o,n=r(199),i=r(219),c=(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),s=function(t){function e(){return t.call(this,"YahooFinance","https://finance.yahoo.com")||this}return c(e,t),e.prototype.createUrlForTicker=function(t){var e=t.getHyphenatedTickerSymbol();return"crypto"===t.tickerType.value&&(e+="-USD"),"".concat(this.baseUrl,"/quote/").concat(e)},e.prototype.getTicker=function(t,e){return new i.v(this.getTickerFromPage(e,this.isCrypto(e)),this.getName(e),this.getTickerType(this,e,e))},e.prototype.getQuoteHeaderInfoId=function(){return"#quote-header-info"},e.prototype.getName=function(t){var e=this.getCompanyHeader(t).split(" (")[0];return this.removeExtraWhitespace(e)},e.prototype.getTickerFromPage=function(t,e){var r=this.getCompanyHeader(t).split(" (")[1];return r=r.split(")")[0],e&&(r=r.split("-")[0]),this.handleHyphenInTicker(r)},e.prototype.handleHyphenInTicker=function(t){return t.replace("-",".")},e.prototype.getCompanyHeader=function(t){return t.querySelector(this.getQuoteHeaderInfoId()+" h1").textContent.trim()},e.prototype.removeExtraWhitespace=function(t){var e=new RegExp("\\s+"),r=t.split(e),o="";return r.forEach((function(t){o=o+t.trim()+" "})),o.trim()},e.prototype.isCrypto=function(t){return t.querySelector(this.getQuoteHeaderInfoId()+"").textContent.includes("CoinMarketCap")},e.prototype.isEtf=function(t){var e=t.querySelector("#quote-summary");return this.removeExtraWhitespace(e.textContent).includes("Net Assets")},e}(n.T)},219:(t,e,r)=>{r.d(e,{v:()=>o});var o=function(){function t(t,e,r){this.symbol=t,this.name=this.removeExtraWhitespace(e),this.tickerType=r}return t.prototype.getHyphenatedTickerSymbol=function(){return this.symbol.replace(".","-")},t.prototype.removeExtraWhitespace=function(t){var e=new RegExp("\\s+"),r=t.split(e),o="";return r.forEach((function(t){o=o+t.trim()+" "})),o.trim()},t.prototype.toString=function(){return"Ticker - symbol: ".concat(this.symbol,", name: ").concat(this.name,", type: ").concat(this.tickerType)},t.prototype.equals=function(t){return this.symbol===t.symbol&&this.nameEquals(t.name)&&this.tickerType.equals(t.tickerType)},t.prototype.nameEquals=function(t){var e=this.name.toLowerCase();return t=t.toLowerCase(),e.includes(t)||t.includes(e)},t}()},110:(t,e,r)=>{r.d(e,{C:()=>o});var o=function(){function t(t){if(this.VALID_TYPES=["stock","etf","mutualfund","crypto","future","bond"],t=t.toLowerCase().trim(),!this.isValidType(t))throw new Error("Invalid tickerType: "+t);this.value=t}return t.prototype.isValidType=function(t){return this.VALID_TYPES.includes(t)},t.prototype.toString=function(){return this.value},t.prototype.equals=function(t){return this.value===t.value},t}()}},o={};function n(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={exports:{}};return r[t](i,i.exports,n),i.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t=n(776),e=n(455),chrome.runtime.onMessage.addListener((function(r,o,n){if("clicked_browser_action"===r.message){var i=void 0,c=void 0;if(r.url.toLowerCase().includes("robinhood")?(i=new t.G,c=new e.k):(i=new e.k,c=new t.G),(p=r.url).startsWith("https://robinhood.com/stocks/")||p.startsWith("https://robinhood.com/crypto/")||p.startsWith("https://finance.yahoo.com/quote/")){var s=i.getTicker(r.url,document);console.log(s.toString()),chrome.runtime.sendMessage({message:"open_new_tab",tickerSymbol:s.symbol,tickerName:s.name,tickerType:s.tickerType+"",index:r.index,fromSite:i.is(),toSite:c.is()})}else chrome.runtime.sendMessage({message:"open_homepage",index:r.index,fromSite:i.is(),toSite:c.is()})}var p}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDSyxFQUFLQyxJQUFVTCxPQUFPTSxVQUFVQyxlQUFlQyxLQUFLSixFQUFLQyxHLGtCQ0s5RUksT0FBT0MsUUFBUUMsVUFBVUMsYUFBWSxTQUNqQ0MsRUFDQUMsRUFDQUMsR0FFQSxHQUF3QiwyQkFBcEJGLEVBQVFHLFFBQXNDLENBQzlDLElBQUlDLE9BQVEsRUFDUkMsT0FBTSxFQVVWLEdBUklMLEVBQVF0RSxJQUFJd0MsY0FBYzlCLFNBQVMsY0FDbkNnRSxFQUFXLElBQUksSUFDZkMsRUFBUyxJQUFJLE1BRWJELEVBQVcsSUFBSSxJQUNmQyxFQUFTLElBQUksTUEyQkYzRSxFQXhCR3NFLEVBQVF0RSxLQTBCdEI0RSxXQUFXLGtDQUNmNUUsRUFBSTRFLFdBQVcsa0NBQ2Y1RSxFQUFJNEUsV0FBVyxvQ0E1QmlCLENBQzVCLElBQUluRixFQUFpQmlGLEVBQVMzRSxVQUFVdUUsRUFBUXRFLElBQUtDLFVBQ3JENEUsUUFBUUMsSUFBSXJGLEVBQU95QyxZQUVuQmdDLE9BQU9DLFFBQVFZLFlBQVksQ0FDdkJOLFFBQVMsZUFDVE8sYUFBY3ZGLEVBQU9LLE9BQ3JCbUYsV0FBWXhGLEVBQU9tQixLQUNuQmxCLFdBQVlELEVBQU9DLFdBQWEsR0FDaEN3RixNQUFPWixFQUFRWSxNQUNmUixTQUFVQSxFQUFTN0QsS0FDbkI4RCxPQUFRQSxFQUFPOUQsTSxNQUduQnFELE9BQU9DLFFBQVFZLFlBQVksQ0FDdkJOLFFBQVMsZ0JBQ1RTLE1BQU9aLEVBQVFZLE1BQ2ZSLFNBQVVBLEVBQVM3RCxLQUNuQjhELE9BQVFBLEVBQU85RCxNLENBTS9CLElBQXVCYixDQUZ2QixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9iaW5ob29kdG95YWhvb2ZpbmFuY2UvLi9zcmMvc2l0ZXMvUm9iaW5ob29kLnRzIiwid2VicGFjazovL3JvYmluaG9vZHRveWFob29maW5hbmNlLy4vc3JjL3NpdGVzL1NpdGUudHMiLCJ3ZWJwYWNrOi8vcm9iaW5ob29kdG95YWhvb2ZpbmFuY2UvLi9zcmMvc2l0ZXMvWWFob29GaW5hbmNlLnRzIiwid2VicGFjazovL3JvYmluaG9vZHRveWFob29maW5hbmNlLy4vc3JjL3RpY2tlcnMvVGlja2VyLnRzIiwid2VicGFjazovL3JvYmluaG9vZHRveWFob29maW5hbmNlLy4vc3JjL3RpY2tlcnMvVGlja2VyVHlwZS50cyIsIndlYnBhY2s6Ly9yb2Jpbmhvb2R0b3lhaG9vZmluYW5jZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yb2Jpbmhvb2R0b3lhaG9vZmluYW5jZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcm9iaW5ob29kdG95YWhvb2ZpbmFuY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yb2Jpbmhvb2R0b3lhaG9vZmluYW5jZS8uL3NyYy9jb250ZW50U2NyaXB0cy9jb250ZW50U2NyaXB0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpdGUgfSBmcm9tIFwiLi9TaXRlXCI7XG5pbXBvcnQgeyBUaWNrZXJUeXBlIH0gZnJvbSBcIi4uL3RpY2tlcnMvVGlja2VyVHlwZVwiO1xuaW1wb3J0IHsgVGlja2VyIH0gZnJvbSBcIi4uL3RpY2tlcnMvVGlja2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBSb2Jpbmhvb2QgZXh0ZW5kcyBTaXRlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXCJSb2Jpbmhvb2RcIiwgYGh0dHBzOi8vcm9iaW5ob29kLmNvbWApO1xuICAgIH1cblxuICAgIGNyZWF0ZVVybEZvclRpY2tlcih0aWNrZXI6IFRpY2tlcik6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aWNrZXIudGlja2VyVHlwZS52YWx1ZSA9PT0gXCJjcnlwdG9cIikge1xuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuYmFzZVVybH0vJHt0aWNrZXIudGlja2VyVHlwZS52YWx1ZX0vJHt0aWNrZXIuc3ltYm9sfWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBFVEZzIGFsc28gZ2V0IHRoZSAnc3RvY2tzJyBwYXRoIGluIHRoZSB1cmwgb24gUkhcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmJhc2VVcmx9L3N0b2Nrcy8ke3RpY2tlci5zeW1ib2x9YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRpY2tlcih1cmw6IHN0cmluZywgZG9jdW1lbnQ6IERvY3VtZW50KTogVGlja2VyIHtcbiAgICAgICAgdmFyIHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKTtcbiAgICAgICAgdmFyIHRpdGxlID0gdGl0bGVFbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICB2YXIgc3BsaXRUaXRsZSA9IHRpdGxlLnNwbGl0KFwiIFwiKTtcblxuICAgICAgICBsZXQgdGlja2VyU3RyaW5nID0gc3BsaXRUaXRsZVswXTtcbiAgICAgICAgcmV0dXJuIG5ldyBUaWNrZXIoXG4gICAgICAgICAgICB0aWNrZXJTdHJpbmcsXG4gICAgICAgICAgICB0aGlzLmdldE5hbWUoZG9jdW1lbnQpLFxuICAgICAgICAgICAgdGhpcy5nZXRUaWNrZXJUeXBlKHRoaXMsIHVybCwgZG9jdW1lbnQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0TmFtZShkb2N1bWVudDogRG9jdW1lbnQpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW4gaGVhZGVyIGgxXCIpLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICB9XG5cbiAgICBpc0NyeXB0byh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdXJsLmluY2x1ZGVzKFwiY3J5cHRvXCIpO1xuICAgIH1cblxuICAgIGlzRXRmKGRvY3VtZW50OiBEb2N1bWVudCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgZXRmQ2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V0Zi1jYXRlZ29yeVwiKTtcbiAgICAgICAgcmV0dXJuICEoZXRmQ2F0ZWdvcnkgPT09IG51bGwpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFRpY2tlciB9IGZyb20gXCIuLi90aWNrZXJzL1RpY2tlclwiO1xuaW1wb3J0IHsgVGlja2VyVHlwZSB9IGZyb20gXCIuLi90aWNrZXJzL1RpY2tlclR5cGVcIjtcblxuZXhwb3J0IGNsYXNzIFNpdGUge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBiYXNlVXJsOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGJhc2VVcmw6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsO1xuICAgIH1cblxuICAgIGlzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgY3JlYXRlVXJsRm9yVGlja2VyKHRpY2tlcjogVGlja2VyKTogYW55IHt9XG5cbiAgICBnZXRUaWNrZXJUeXBlKHNpdGU6IFNpdGUsIGNyeXB0b0FyZzogYW55LCBkb2N1bWVudDogRG9jdW1lbnQpOiBUaWNrZXJUeXBlIHtcbiAgICAgICAgaWYgKHNpdGUuaXNFdGYoZG9jdW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFRpY2tlclR5cGUoXCJldGZcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoc2l0ZS5pc0NyeXB0byhjcnlwdG9BcmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFRpY2tlclR5cGUoXCJjcnlwdG9cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFRpY2tlclR5cGUoXCJzdG9ja1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiB0eXBlIGhlcmUgaXMgXCJhbnlcIiwgYmVjYXVzZSB3ZSBkb24ndCB3YW50IHRvIHJldHVybiBhIHZhbHVlIGluIHRoZSBzdXBlcmNsYXNzLCB3aGljaCB3ZSB3b3VsZCBoYXZlIHRvIHNpbmNlIHdlJ3JlIHVzaW5nIHRoZW0gaW4gZ2V0VGlja2VyVHlwZSBhYm92ZS5cbiAgICAvLyBJbXBsZW1lbnRhdGlvbnMgb2YgdGhlc2UgbWV0aG9kcyBpbiBzdWJjbGFzc2VzIHNob3VsZCByZXR1cm4gYSBib29sZWFuLlxuICAgIGlzQ3J5cHRvKHg6IGFueSk6IGFueSB7fVxuICAgIGlzRXRmKGRvY3VtZW50OiBEb2N1bWVudCk6IGFueSB7fVxufVxuIiwiaW1wb3J0IHsgU2l0ZSB9IGZyb20gXCIuL1NpdGVcIjtcbmltcG9ydCB7IFRpY2tlclR5cGUgfSBmcm9tIFwiLi4vdGlja2Vycy9UaWNrZXJUeXBlXCI7XG5pbXBvcnQgeyBUaWNrZXIgfSBmcm9tIFwiLi4vdGlja2Vycy9UaWNrZXJcIjtcblxuZXhwb3J0IGNsYXNzIFlhaG9vRmluYW5jZSBleHRlbmRzIFNpdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcIllhaG9vRmluYW5jZVwiLCBgaHR0cHM6Ly9maW5hbmNlLnlhaG9vLmNvbWApO1xuICAgIH1cblxuICAgIGNyZWF0ZVVybEZvclRpY2tlcih0aWNrZXI6IFRpY2tlcik6IHN0cmluZyB7XG4gICAgICAgIGxldCBzOiBzdHJpbmcgPSB0aWNrZXIuZ2V0SHlwaGVuYXRlZFRpY2tlclN5bWJvbCgpO1xuXG4gICAgICAgIC8vIElmIHRoZSBwYWdlIHRoYXQgd2UncmUgb24gaXMgZm9yIGEgc3RvY2sgb3IgRVRGLCB0aGVuIHdlIGNhbiBqdXN0IGxlYXZlIHRoZSB0aWNrZXIgYXMtaXMuXG4gICAgICAgIC8vIElmIHRoZSBwYWdlIHRoYXQgd2UncmUgb24gaXMgZm9yIGEgY3J5cHRvY3VycmVuY3ksIHRoZW4gd2UgbmVlZFxuICAgICAgICAvLyB0byBhZGp1c3QgdGhlIHRpY2tlciB0byBhZGQgdGhlIFwicXVvdGUgY3VycmVuY3lcIiAtLVxuICAgICAgICAvLyB0aGUgY3VycmVuY3kgZm9yIHdoaWNoIHdlJ3JlIGRpc3BsYXlpbmcgdGhlIGV4Y2hhbmdlIHJhdGUgdG8gdGhlIGNyeXB0b2N1cnJlbmN5LlxuICAgICAgICAvLyBCeSBkZWZhdWx0LCB3ZSdsbCB1c2UgdGhlIFVTIERvbGxhciAoXCJVU0RcIikuXG4gICAgICAgIC8vIFRPRE86IEFsbG93IHVzZXIgdG8gc2VsZWN0IHRoZWlyIHByZWZlcnJlZCBxdW90ZSBjdXJyZW5jeSBpbiBPcHRpb25zIG1lbnUuXG4gICAgICAgIGlmICh0aWNrZXIudGlja2VyVHlwZS52YWx1ZSA9PT0gXCJjcnlwdG9cIikge1xuICAgICAgICAgICAgcyA9IHMgKyBgLVVTRGA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke3RoaXMuYmFzZVVybH0vcXVvdGUvJHtzfWA7XG4gICAgfVxuXG4gICAgZ2V0VGlja2VyKHVybDogc3RyaW5nLCBkb2N1bWVudDogRG9jdW1lbnQpOiBUaWNrZXIge1xuICAgICAgICByZXR1cm4gbmV3IFRpY2tlcihcbiAgICAgICAgICAgIHRoaXMuZ2V0VGlja2VyRnJvbVBhZ2UoZG9jdW1lbnQsIHRoaXMuaXNDcnlwdG8oZG9jdW1lbnQpKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0TmFtZShkb2N1bWVudCksXG4gICAgICAgICAgICB0aGlzLmdldFRpY2tlclR5cGUodGhpcywgZG9jdW1lbnQsIGRvY3VtZW50KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldFF1b3RlSGVhZGVySW5mb0lkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIiNxdW90ZS1oZWFkZXItaW5mb1wiO1xuICAgIH1cblxuICAgIGdldE5hbWUoZG9jdW1lbnQ6IERvY3VtZW50KTogc3RyaW5nIHtcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLmdldENvbXBhbnlIZWFkZXIoZG9jdW1lbnQpO1xuICAgICAgICBsZXQgbmFtZVdpdGhUaWNrZXJSZW1vdmVkID0gbmFtZS5zcGxpdChcIiAoXCIpWzBdO1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmVFeHRyYVdoaXRlc3BhY2UobmFtZVdpdGhUaWNrZXJSZW1vdmVkKTtcbiAgICB9XG5cbiAgICBnZXRUaWNrZXJGcm9tUGFnZShkb2N1bWVudDogRG9jdW1lbnQsIGlzQ3J5cHRvOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLmdldENvbXBhbnlIZWFkZXIoZG9jdW1lbnQpO1xuICAgICAgICBsZXQgY2xlYW5lZFVwU3ltYm9sID0gbmFtZS5zcGxpdChcIiAoXCIpWzFdO1xuICAgICAgICBjbGVhbmVkVXBTeW1ib2wgPSBjbGVhbmVkVXBTeW1ib2wuc3BsaXQoXCIpXCIpWzBdO1xuICAgICAgICBpZiAoaXNDcnlwdG8pIHtcbiAgICAgICAgICAgIGNsZWFuZWRVcFN5bWJvbCA9IGNsZWFuZWRVcFN5bWJvbC5zcGxpdChcIi1cIilbMF07XG4gICAgICAgIH1cbiAgICAgICAgY2xlYW5lZFVwU3ltYm9sID0gdGhpcy5oYW5kbGVIeXBoZW5JblRpY2tlcihjbGVhbmVkVXBTeW1ib2wpO1xuICAgICAgICByZXR1cm4gY2xlYW5lZFVwU3ltYm9sO1xuICAgIH1cblxuICAgIGhhbmRsZUh5cGhlbkluVGlja2VyKHRpY2tlcjogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aWNrZXIucmVwbGFjZShcIi1cIiwgXCIuXCIpO1xuICAgIH1cblxuICAgIGdldENvbXBhbnlIZWFkZXIoZG9jdW1lbnQ6IERvY3VtZW50KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLmdldFF1b3RlSGVhZGVySW5mb0lkKCkgKyBcIiBoMVwiKVxuICAgICAgICAgICAgLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICB9XG5cbiAgICByZW1vdmVFeHRyYVdoaXRlc3BhY2Uoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKFwiXFxcXHMrXCIpO1xuICAgICAgICBsZXQgc3BsaXQgPSBzdHIuc3BsaXQocmVnZXgpO1xuICAgICAgICBsZXQgZnVsbCA9IFwiXCI7XG4gICAgICAgIHNwbGl0LmZvckVhY2goZnVuY3Rpb24gKHdvcmQpIHtcbiAgICAgICAgICAgIGZ1bGwgPSBmdWxsICsgd29yZC50cmltKCkgKyBcIiBcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEdldCByaWQgb2YgdGhlIG9uZSBleHRyYSBzcGFjZSBhdCB0aGUgZW5kIGJlZm9yZSB3ZSByZXR1cm5cbiAgICAgICAgcmV0dXJuIGZ1bGwudHJpbSgpO1xuICAgIH1cblxuICAgIGlzQ3J5cHRvKGRvY3VtZW50OiBEb2N1bWVudCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgcXVvdGVIZWFkZXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIHRoaXMuZ2V0UXVvdGVIZWFkZXJJbmZvSWQoKSArIFwiXCJcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHF1b3RlSGVhZGVySW5mby50ZXh0Q29udGVudC5pbmNsdWRlcyhcIkNvaW5NYXJrZXRDYXBcIik7XG4gICAgfVxuXG4gICAgaXNFdGYoZG9jdW1lbnQ6IERvY3VtZW50KTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBxdW90ZVN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3F1b3RlLXN1bW1hcnlcIik7XG4gICAgICAgIGxldCB0ZXh0Q2xlYW5lZFVwID0gdGhpcy5yZW1vdmVFeHRyYVdoaXRlc3BhY2UoXG4gICAgICAgICAgICBxdW90ZVN1bW1hcnkudGV4dENvbnRlbnRcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRleHRDbGVhbmVkVXAuaW5jbHVkZXMoXCJOZXQgQXNzZXRzXCIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFRpY2tlclR5cGUgfSBmcm9tIFwiLi9UaWNrZXJUeXBlXCI7XG5cbmV4cG9ydCBjbGFzcyBUaWNrZXIge1xuICAgIHN5bWJvbDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0aWNrZXJUeXBlOiBUaWNrZXJUeXBlO1xuXG4gICAgY29uc3RydWN0b3Ioc3ltYm9sOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgdGlja2VyVHlwZTogVGlja2VyVHlwZSkge1xuICAgICAgICB0aGlzLnN5bWJvbCA9IHN5bWJvbDtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5yZW1vdmVFeHRyYVdoaXRlc3BhY2UobmFtZSk7XG4gICAgICAgIHRoaXMudGlja2VyVHlwZSA9IHRpY2tlclR5cGU7XG4gICAgfVxuXG4gICAgZ2V0SHlwaGVuYXRlZFRpY2tlclN5bWJvbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ltYm9sLnJlcGxhY2UoXCIuXCIsIFwiLVwiKTtcbiAgICB9XG5cbiAgICByZW1vdmVFeHRyYVdoaXRlc3BhY2Uoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKFwiXFxcXHMrXCIpO1xuICAgICAgICBsZXQgc3BsaXQgPSBzdHIuc3BsaXQocmVnZXgpO1xuICAgICAgICBsZXQgZnVsbCA9IFwiXCI7XG4gICAgICAgIHNwbGl0LmZvckVhY2goZnVuY3Rpb24gKHdvcmQpIHtcbiAgICAgICAgICAgIGZ1bGwgPSBmdWxsICsgd29yZC50cmltKCkgKyBcIiBcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEdldCByaWQgb2YgdGhlIG9uZSBleHRyYSBzcGFjZSBhdCB0aGUgZW5kIGJlZm9yZSB3ZSByZXR1cm5cbiAgICAgICAgcmV0dXJuIGZ1bGwudHJpbSgpO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgVGlja2VyIC0gc3ltYm9sOiAke3RoaXMuc3ltYm9sfSwgbmFtZTogJHt0aGlzLm5hbWV9LCB0eXBlOiAke3RoaXMudGlja2VyVHlwZX1gO1xuICAgIH1cblxuICAgIGVxdWFscyh0aGF0OiBUaWNrZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sID09PSB0aGF0LnN5bWJvbCAmJlxuICAgICAgICAgICAgdGhpcy5uYW1lRXF1YWxzKHRoYXQubmFtZSkgJiZcbiAgICAgICAgICAgIHRoaXMudGlja2VyVHlwZS5lcXVhbHModGhhdC50aWNrZXJUeXBlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIHRvIHNlZSBpZiBhIGdpdmVuIGNvbXBhbnkncyBuYW1lIG1hdGNoZXMgdGhpcyBjb21wYW55J3MgbmFtZS5cbiAgICAgKiBTaW5jZSB0aGVzZSB2YWx1ZXMgYXJlIGJlaW5nIHB1bGxlZCBmcm9tIGVhY2ggc2l0ZSB3ZSdyZSB2aXNpdGluZyAoYW5kIHdlIGNhbid0IGNvbnRyb2wgd2hhdCB0aGV5IGNhbGwgdGhlbSksXG4gICAgICogYW5kIHNpbmNlIHRoZXNlIGVxdWFsaXR5IGZ1bmN0aW9ucyBhcmUgKGF0IGxlYXN0IHNvIGZhcikgb25seSBiZWluZyB1c2VkIHRvIGZhY2lsaXRhdGUgdW5pdCB0ZXN0aW5nIGFueXdheSxcbiAgICAgKiB0aGlzIGZ1bmN0aW9uIGlzIGJhc2ljYWxseSBqdXN0IGNoZWNraW5nIHRvIHNlZSBpZiB0aGUgbmFtZXMgYXJlIFwiY2xvc2UgZW5vdWdoXCIgYnkgY2hlY2tpbmcgdG8gc2VlIGlmIG9uZSBzdHJpbmcgaW5jbHVkZXMgdGhlIG90aGVyLlxuICAgICAqXG4gICAgICogRm9yIGV4YW1wbGUsIHRoZSBSSCBwYWdlIGZvciAkU1BZIGNhbGxzIGl0IFwiU1BEUiBTJlAgNTAwIEVURlwiLCB3aGlsZSBZRiBjYWxscyBpdCBcIlNQRFIgUyZQIDUwMCBFVEYgVHJ1c3RcIi5cbiAgICAgKiBFdmVuIHRob3VnaCB0aGUgc3RyaW5ncyBhcmVuJ3QgaWRlbnRpY2FsLCB3ZSBzdGlsbCB3YW50IHRoZXNlIHRvIGJlIGNvbnNpZGVyZWQgZXF1YWwsIHNvIHdlIGNhbiBqdXN0IGNoZWNrIGlmIG9uZSBjb250YWlucyB0aGUgb3RoZXIsIHdoaWNoIGl0IGRvZXMuXG4gICAgICpcbiAgICAgKiBUT0RPIC0gdGhlcmUgd2lsbCBwcm9iYWJseSBiZSBzb21lIGVkZ2UgY2FzZXMgZm9yIHdoaWNoIHRoaXMgc29sdXRpb24gd2lsbCBub3Qgd29yaywgc28gdGhpcyB3aWxsIGxpa2VseSBoYXZlIHRvIGJlIHJldmlzZWQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0aGF0TmFtZSAtIG5hbWUgb2YgdGhlIGNvbXBhbnkgdG8gd2hpY2ggd2UncmUgY29tcGFyaW5nIHRoaXMgY29tcGFueVxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIGNvbXBhbmllcycgbmFtZXMgYXJlIHRoZSBzYW1lIChvciBhdCBsZWFzdCwgY2xvc2UgZW5vdWdoKVxuICAgICAqL1xuICAgIG5hbWVFcXVhbHModGhhdE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgdGhpc05hbWUgPSB0aGlzLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdGhhdE5hbWUgPSB0aGF0TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzTmFtZS5pbmNsdWRlcyh0aGF0TmFtZSkgfHwgdGhhdE5hbWUuaW5jbHVkZXModGhpc05hbWUpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUaWNrZXJUeXBlIHtcbiAgICBWQUxJRF9UWVBFUyA9IFtcInN0b2NrXCIsIFwiZXRmXCIsIFwibXV0dWFsZnVuZFwiLCBcImNyeXB0b1wiLCBcImZ1dHVyZVwiLCBcImJvbmRcIl07XG4gICAgdmFsdWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHRpY2tlclR5cGU6IHN0cmluZykge1xuICAgICAgICB0aWNrZXJUeXBlID0gdGlja2VyVHlwZS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZFR5cGUodGlja2VyVHlwZSkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aWNrZXJUeXBlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0aWNrZXJUeXBlOiBcIiArIHRpY2tlclR5cGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNWYWxpZFR5cGUodHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5WQUxJRF9UWVBFUy5pbmNsdWRlcyh0dCk7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgZXF1YWxzKHRoYXQ6IFRpY2tlclR5cGUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IHRoYXQudmFsdWU7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQgeyBSb2Jpbmhvb2QgfSBmcm9tIFwiLi4vc2l0ZXMvUm9iaW5ob29kXCI7XG5pbXBvcnQgeyBZYWhvb0ZpbmFuY2UgfSBmcm9tIFwiLi4vc2l0ZXMvWWFob29GaW5hbmNlXCI7XG5pbXBvcnQgeyBUaWNrZXIgfSBmcm9tIFwiLi4vdGlja2Vycy9UaWNrZXJcIjtcblxuKGZ1bmN0aW9uICgpIHtcbiAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gaWNvbkNsaWNrZWQoXG4gICAgICAgIHJlcXVlc3QsXG4gICAgICAgIHNlbmRlcixcbiAgICAgICAgc2VuZFJlc3BvbnNlXG4gICAgKSB7XG4gICAgICAgIGlmIChyZXF1ZXN0Lm1lc3NhZ2UgPT09IFwiY2xpY2tlZF9icm93c2VyX2FjdGlvblwiKSB7XG4gICAgICAgICAgICBsZXQgZnJvbVNpdGU7XG4gICAgICAgICAgICBsZXQgdG9TaXRlO1xuXG4gICAgICAgICAgICBpZiAocmVxdWVzdC51cmwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcInJvYmluaG9vZFwiKSkge1xuICAgICAgICAgICAgICAgIGZyb21TaXRlID0gbmV3IFJvYmluaG9vZCgpO1xuICAgICAgICAgICAgICAgIHRvU2l0ZSA9IG5ldyBZYWhvb0ZpbmFuY2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZnJvbVNpdGUgPSBuZXcgWWFob29GaW5hbmNlKCk7XG4gICAgICAgICAgICAgICAgdG9TaXRlID0gbmV3IFJvYmluaG9vZCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFnZUhhc1RpY2tlcihyZXF1ZXN0LnVybCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlja2VyOiBUaWNrZXIgPSBmcm9tU2l0ZS5nZXRUaWNrZXIocmVxdWVzdC51cmwsIGRvY3VtZW50KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aWNrZXIudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwib3Blbl9uZXdfdGFiXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpY2tlclN5bWJvbDogdGlja2VyLnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgdGlja2VyTmFtZTogdGlja2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHRpY2tlclR5cGU6IHRpY2tlci50aWNrZXJUeXBlICsgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHJlcXVlc3QuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGZyb21TaXRlOiBmcm9tU2l0ZS5pcygpLFxuICAgICAgICAgICAgICAgICAgICB0b1NpdGU6IHRvU2l0ZS5pcygpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwib3Blbl9ob21lcGFnZVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogcmVxdWVzdC5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZnJvbVNpdGU6IGZyb21TaXRlLmlzKCksXG4gICAgICAgICAgICAgICAgICAgIHRvU2l0ZTogdG9TaXRlLmlzKCksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHBhZ2VIYXNUaWNrZXIodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHVybC5zdGFydHNXaXRoKFwiaHR0cHM6Ly9yb2Jpbmhvb2QuY29tL3N0b2Nrcy9cIikgfHxcbiAgICAgICAgICAgIHVybC5zdGFydHNXaXRoKFwiaHR0cHM6Ly9yb2Jpbmhvb2QuY29tL2NyeXB0by9cIikgfHxcbiAgICAgICAgICAgIHVybC5zdGFydHNXaXRoKFwiaHR0cHM6Ly9maW5hbmNlLnlhaG9vLmNvbS9xdW90ZS9cIilcbiAgICAgICAgKTtcbiAgICB9XG59KSgpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVVybEZvclRpY2tlciIsInRpY2tlciIsInRpY2tlclR5cGUiLCJ2YWx1ZSIsInRoaXMiLCJiYXNlVXJsIiwic3ltYm9sIiwiZ2V0VGlja2VyIiwidXJsIiwiZG9jdW1lbnQiLCJ0aWNrZXJTdHJpbmciLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJzcGxpdCIsImdldE5hbWUiLCJnZXRUaWNrZXJUeXBlIiwidHJpbSIsImlzQ3J5cHRvIiwiaW5jbHVkZXMiLCJpc0V0ZiIsIm5hbWUiLCJpcyIsInNpdGUiLCJjcnlwdG9BcmciLCJ4IiwicyIsImdldEh5cGhlbmF0ZWRUaWNrZXJTeW1ib2wiLCJnZXRUaWNrZXJGcm9tUGFnZSIsImdldFF1b3RlSGVhZGVySW5mb0lkIiwibmFtZVdpdGhUaWNrZXJSZW1vdmVkIiwiZ2V0Q29tcGFueUhlYWRlciIsInJlbW92ZUV4dHJhV2hpdGVzcGFjZSIsImNsZWFuZWRVcFN5bWJvbCIsImhhbmRsZUh5cGhlbkluVGlja2VyIiwicmVwbGFjZSIsInN0ciIsInJlZ2V4IiwiUmVnRXhwIiwiZnVsbCIsImZvckVhY2giLCJ3b3JkIiwicXVvdGVTdW1tYXJ5IiwidG9TdHJpbmciLCJlcXVhbHMiLCJ0aGF0IiwibmFtZUVxdWFscyIsInRoYXROYW1lIiwidGhpc05hbWUiLCJ0b0xvd2VyQ2FzZSIsIlZBTElEX1RZUEVTIiwiaXNWYWxpZFR5cGUiLCJFcnJvciIsInR0IiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJkIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY2hyb21lIiwicnVudGltZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwicmVxdWVzdCIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsIm1lc3NhZ2UiLCJmcm9tU2l0ZSIsInRvU2l0ZSIsInN0YXJ0c1dpdGgiLCJjb25zb2xlIiwibG9nIiwic2VuZE1lc3NhZ2UiLCJ0aWNrZXJTeW1ib2wiLCJ0aWNrZXJOYW1lIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9