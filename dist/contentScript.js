(()=>{"use strict";var t,e={776:(t,e,r)=>{r.d(e,{G:()=>u});var o,n=r(199),i=r(110),c=r(219),s=(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),u=function(t){function e(){return t.call(this,"Robinhood","https://robinhood.com")||this}return s(e,t),e.prototype.createUrlForTicker=function(t){return"".concat(this.baseUrl,"/").concat(t.tickerType.value,"/").concat(t.symbol,"/")},e.prototype.getTicker=function(t,e){var r=e.querySelector("title").textContent.split(" ")[0];return new c.v(r,this.getName(e),this.getTickerType(t,e))},e.prototype.getTickerType=function(t,e){return this.isEtf(e)?new i.C("etf"):this.isCrypto(t)?new i.C("crypto"):new i.C("stock")},e.prototype.getName=function(t){return t.querySelector("main header h1").textContent.trim()},e.prototype.isCrypto=function(t){return t.includes("crypto")},e.prototype.isEtf=function(t){return!(null===t.querySelector("#etf-category"))},e}(n.T)},199:(t,e,r)=>{r.d(e,{T:()=>o});var o=function(t,e){this.name=t,this.baseUrl=e}},219:(t,e,r)=>{r.d(e,{v:()=>o});var o=function(){function t(t,e,r){this.symbol=t,this.name=e,this.tickerType=r}return t.prototype.toString=function(){return"Ticker - symbol: ".concat(this.symbol,", name: ").concat(this.name,", type: ").concat(this.tickerType)},t}()},110:(t,e,r)=>{r.d(e,{C:()=>o});var o=function(){function t(t){if(this.VALID_TYPES=["stock","etf","mutualfund","crypto","future","bond"],!this.isValidType(t))throw new Error("Invalid tickerType: "+t);this.value=t}return t.prototype.isValidType=function(t){var e=t.toLowerCase().trim();return!!this.VALID_TYPES.includes(e)},t.prototype.toString=function(){return this.value},t}()}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t=o(776),chrome.runtime.onMessage.addListener((function(e,r,o){if("clicked_browser_action"===e.message){var n=(new t.G).getTicker(e.url,document);console.log(n.toString()),chrome.runtime.sendMessage({message:"open_new_tab",tickerSymbol:n.symbol,tickerName:n.name,tickerType:n.tickerType+"",index:e.index})}}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLQyxVQUMvQ2dELFFBQVFDLElBQUl6RCxFQUFPb0IsWUFFbkI0QixPQUFPQyxRQUFRUyxZQUFZLENBQ3ZCSCxRQUFTLGVBQ1RJLGFBQWMzRCxFQUFPSyxPQUNyQnVELFdBQVk1RCxFQUFPbUIsS0FDbkJoQixXQUFZSCxFQUFPRyxXQUFhLEdBQ2hDMEQsTUFBT1QsRUFBUVMsTyxDQUczQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9iaW5ob29kdG95YWhvb2ZpbmFuY2UvLi9zcmMvc2l0ZXMvUm9iaW5ob29kLnRzIiwid2VicGFjazovL3JvYmluaG9vZHRveWFob29maW5hbmNlLy4vc3JjL3NpdGVzL1NpdGUudHMiLCJ3ZWJwYWNrOi8vcm9iaW5ob29kdG95YWhvb2ZpbmFuY2UvLi9zcmMvdGlja2Vycy9UaWNrZXIudHMiLCJ3ZWJwYWNrOi8vcm9iaW5ob29kdG95YWhvb2ZpbmFuY2UvLi9zcmMvdGlja2Vycy9UaWNrZXJUeXBlLnRzIiwid2VicGFjazovL3JvYmluaG9vZHRveWFob29maW5hbmNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JvYmluaG9vZHRveWFob29maW5hbmNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yb2Jpbmhvb2R0b3lhaG9vZmluYW5jZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JvYmluaG9vZHRveWFob29maW5hbmNlLy4vc3JjL2NvbnRlbnRTY3JpcHRzL2NvbnRlbnRTY3JpcHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2l0ZSB9IGZyb20gXCIuL1NpdGVcIjtcbmltcG9ydCB7IFRpY2tlclR5cGUgfSBmcm9tIFwiLi4vdGlja2Vycy9UaWNrZXJUeXBlXCI7XG5pbXBvcnQgeyBUaWNrZXIgfSBmcm9tIFwiLi4vdGlja2Vycy9UaWNrZXJcIjtcblxuZXhwb3J0IGNsYXNzIFJvYmluaG9vZCBleHRlbmRzIFNpdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcIlJvYmluaG9vZFwiLCBgaHR0cHM6Ly9yb2Jpbmhvb2QuY29tYCk7XG4gICAgfVxuXG4gICAgY3JlYXRlVXJsRm9yVGlja2VyKHRpY2tlcjogVGlja2VyKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuYmFzZVVybH0vJHt0aWNrZXIudGlja2VyVHlwZS52YWx1ZX0vJHt0aWNrZXIuc3ltYm9sfS9gO1xuICAgIH1cblxuICAgIGdldFRpY2tlcih1cmw6IHN0cmluZywgZG9jdW1lbnQ6IERvY3VtZW50KTogVGlja2VyIHtcbiAgICAgICAgdmFyIHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKTtcbiAgICAgICAgdmFyIHRpdGxlID0gdGl0bGVFbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICB2YXIgc3BsaXRUaXRsZSA9IHRpdGxlLnNwbGl0KFwiIFwiKTtcblxuICAgICAgICBsZXQgdGlja2VyU3RyaW5nID0gc3BsaXRUaXRsZVswXTtcbiAgICAgICAgcmV0dXJuIG5ldyBUaWNrZXIoXG4gICAgICAgICAgICB0aWNrZXJTdHJpbmcsXG4gICAgICAgICAgICB0aGlzLmdldE5hbWUoZG9jdW1lbnQpLFxuICAgICAgICAgICAgdGhpcy5nZXRUaWNrZXJUeXBlKHVybCwgZG9jdW1lbnQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0VGlja2VyVHlwZSh1cmw6IHN0cmluZywgZG9jdW1lbnQ6IERvY3VtZW50KTogVGlja2VyVHlwZSB7XG4gICAgICAgIGlmICh0aGlzLmlzRXRmKGRvY3VtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBUaWNrZXJUeXBlKFwiZXRmXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNDcnlwdG8odXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBUaWNrZXJUeXBlKFwiY3J5cHRvXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBUaWNrZXJUeXBlKFwic3RvY2tcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXROYW1lKGRvY3VtZW50OiBEb2N1bWVudCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpbiBoZWFkZXIgaDFcIikudGV4dENvbnRlbnQudHJpbSgpO1xuICAgIH1cblxuICAgIGlzQ3J5cHRvKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB1cmwuaW5jbHVkZXMoXCJjcnlwdG9cIik7XG4gICAgfVxuXG4gICAgaXNFdGYoZG9jdW1lbnQ6IERvY3VtZW50KTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBldGZDYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXRmLWNhdGVnb3J5XCIpO1xuICAgICAgICByZXR1cm4gIShldGZDYXRlZ29yeSA9PT0gbnVsbCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNpdGUge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBiYXNlVXJsOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGJhc2VVcmw6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFRpY2tlclR5cGUgfSBmcm9tIFwiLi9UaWNrZXJUeXBlXCI7XG5cbmV4cG9ydCBjbGFzcyBUaWNrZXIge1xuICAgIHN5bWJvbDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0aWNrZXJUeXBlOiBUaWNrZXJUeXBlO1xuXG4gICAgY29uc3RydWN0b3Ioc3ltYm9sOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgdGlja2VyVHlwZTogVGlja2VyVHlwZSkge1xuICAgICAgICB0aGlzLnN5bWJvbCA9IHN5bWJvbDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50aWNrZXJUeXBlID0gdGlja2VyVHlwZTtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYFRpY2tlciAtIHN5bWJvbDogJHt0aGlzLnN5bWJvbH0sIG5hbWU6ICR7dGhpcy5uYW1lfSwgdHlwZTogJHt0aGlzLnRpY2tlclR5cGV9YDtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGlja2VyVHlwZSB7XG4gICAgVkFMSURfVFlQRVMgPSBbXCJzdG9ja1wiLCBcImV0ZlwiLCBcIm11dHVhbGZ1bmRcIiwgXCJjcnlwdG9cIiwgXCJmdXR1cmVcIiwgXCJib25kXCJdO1xuICAgIHZhbHVlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aWNrZXJUeXBlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZFR5cGUodGlja2VyVHlwZSkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aWNrZXJUeXBlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0aWNrZXJUeXBlOiBcIiArIHRpY2tlclR5cGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNWYWxpZFR5cGUodHQ6IHN0cmluZykge1xuICAgICAgICBsZXQgbG93ZXJDYXNlID0gdHQudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgICAgIGlmICh0aGlzLlZBTElEX1RZUEVTLmluY2x1ZGVzKGxvd2VyQ2FzZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQgeyBSb2Jpbmhvb2QgfSBmcm9tIFwiLi4vc2l0ZXMvUm9iaW5ob29kXCI7XG5pbXBvcnQgeyBUaWNrZXIgfSBmcm9tIFwiLi4vdGlja2Vycy9UaWNrZXJcIjtcblxuKGZ1bmN0aW9uICgpIHtcbiAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gaWNvbkNsaWNrZWQoXG4gICAgICAgIHJlcXVlc3QsXG4gICAgICAgIHNlbmRlcixcbiAgICAgICAgc2VuZFJlc3BvbnNlXG4gICAgKSB7XG4gICAgICAgIGlmIChyZXF1ZXN0Lm1lc3NhZ2UgPT09IFwiY2xpY2tlZF9icm93c2VyX2FjdGlvblwiKSB7XG4gICAgICAgICAgICBsZXQgcmg6IFJvYmluaG9vZCA9IG5ldyBSb2Jpbmhvb2QoKTtcbiAgICAgICAgICAgIGxldCB0aWNrZXI6IFRpY2tlciA9IHJoLmdldFRpY2tlcihyZXF1ZXN0LnVybCwgZG9jdW1lbnQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGlja2VyLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJvcGVuX25ld190YWJcIixcbiAgICAgICAgICAgICAgICB0aWNrZXJTeW1ib2w6IHRpY2tlci5zeW1ib2wsXG4gICAgICAgICAgICAgICAgdGlja2VyTmFtZTogdGlja2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgdGlja2VyVHlwZTogdGlja2VyLnRpY2tlclR5cGUgKyBcIlwiLFxuICAgICAgICAgICAgICAgIGluZGV4OiByZXF1ZXN0LmluZGV4LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGdldFRpY2tlcihpc0NyeXB0bzogYm9vbGVhbikge1xuICAgICAgICB2YXIgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRpdGxlXCIpO1xuICAgICAgICB2YXIgdGl0bGUgPSB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgIHZhciBzcGxpdFRpdGxlID0gdGl0bGUuc3BsaXQoXCIgXCIpO1xuXG4gICAgICAgIGxldCB0aWNrZXJTdHJpbmcgPSBzcGxpdFRpdGxlWzBdO1xuICAgICAgICBsZXQgY3VycmVuY3lTdHJpbmcgPSBcIi1VU0RcIjtcbiAgICAgICAgaWYgKGlzQ3J5cHRvKSB7XG4gICAgICAgICAgICB0aWNrZXJTdHJpbmcgPSB0aWNrZXJTdHJpbmcgKyBjdXJyZW5jeVN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcInRpY2tlclN0cmluZzogXCIgKyB0aWNrZXJTdHJpbmcpO1xuICAgICAgICByZXR1cm4gdGlja2VyU3RyaW5nO1xuICAgIH1cbn0pKCk7XG4iXSwibmFtZXMiOlsiY3JlYXRlVXJsRm9yVGlja2VyIiwidGlja2VyIiwidGhpcyIsImJhc2VVcmwiLCJ0aWNrZXJUeXBlIiwidmFsdWUiLCJzeW1ib2wiLCJnZXRUaWNrZXIiLCJ1cmwiLCJkb2N1bWVudCIsInRpY2tlclN0cmluZyIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInNwbGl0IiwiZ2V0TmFtZSIsImdldFRpY2tlclR5cGUiLCJpc0V0ZiIsImlzQ3J5cHRvIiwidHJpbSIsImluY2x1ZGVzIiwibmFtZSIsInRvU3RyaW5nIiwiVkFMSURfVFlQRVMiLCJpc1ZhbGlkVHlwZSIsIkVycm9yIiwidHQiLCJsb3dlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZCIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNocm9tZSIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInJlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInNlbmRNZXNzYWdlIiwidGlja2VyU3ltYm9sIiwidGlja2VyTmFtZSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==