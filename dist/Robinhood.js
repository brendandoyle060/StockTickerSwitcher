(()=>{"use strict";var t,e,r,o,n={199:(t,e,r)=>{r.d(e,{T:()=>n});var o=r(110),n=function(){function t(t,e){this.name=t,this.baseUrl=e}return t.prototype.is=function(){return this.name},t.prototype.createUrlForTicker=function(t){},t.prototype.getTickerType=function(t,e,r){return t.isEtf(r)?new o.C("etf"):t.isCrypto(e)?new o.C("crypto"):new o.C("stock")},t.prototype.isCrypto=function(t){},t.prototype.isEtf=function(t){},t}()},219:(t,e,r)=>{r.d(e,{v:()=>o});var o=function(){function t(t,e,r){this.symbol=t,this.name=this.removeExtraWhitespace(e),this.tickerType=r}return t.prototype.getHyphenatedTickerSymbol=function(){return this.symbol.replace(".","-")},t.prototype.removeExtraWhitespace=function(t){var e=new RegExp("\\s+"),r=t.split(e),o="";return r.forEach((function(t){o=o+t.trim()+" "})),o.trim()},t.prototype.toString=function(){return"Ticker - symbol: ".concat(this.symbol,", name: ").concat(this.name,", type: ").concat(this.tickerType)},t.prototype.equals=function(t){return this.symbol===t.symbol&&this.nameEquals(t.name)&&this.tickerType.equals(t.tickerType)},t.prototype.nameEquals=function(t){var e=this.name.toLowerCase();return t=t.toLowerCase(),e.includes(t)||t.includes(e)},t}()},110:(t,e,r)=>{r.d(e,{C:()=>o});var o=function(){function t(t){if(this.VALID_TYPES=["stock","etf","mutualfund","crypto","future","bond"],t=t.toLowerCase().trim(),!this.isValidType(t))throw new Error("Invalid tickerType: "+t);this.value=t}return t.prototype.isValidType=function(t){return this.VALID_TYPES.includes(t)},t.prototype.toString=function(){return this.value},t.prototype.equals=function(t){return this.value===t.value},t}()}},i={};function c(t){var e=i[t];if(void 0!==e)return e.exports;var r=i[t]={exports:{}};return n[t](r,r.exports,c),r.exports}c.d=(t,e)=>{for(var r in e)c.o(e,r)&&!c.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},c.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e=c(199),r=c(219),t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)},o=function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)},function(t){function e(){return t.call(this,"Robinhood","https://robinhood.com")||this}o(e,t),e.prototype.createUrlForTicker=function(t){return"crypto"===t.tickerType.value?"".concat(this.baseUrl,"/").concat(t.tickerType.value,"/").concat(t.symbol):"".concat(this.baseUrl,"/stocks/").concat(t.symbol)},e.prototype.getTicker=function(t,e){var o=e.querySelector("title").textContent.split(" ")[0];return new r.v(o,this.getName(e),this.getTickerType(this,t,e))},e.prototype.getName=function(t){return t.querySelector("main header h1").textContent.trim()},e.prototype.isCrypto=function(t){return t.includes("crypto")},e.prototype.isEtf=function(t){return!(null===t.querySelector("#etf-category"))}}(e.T)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW9CVSxFQUFJLENBQUNLLEVBQUtDLElBQVVMLE9BQU9NLFVBQVVDLGVBQWVDLEtBQUtKLEVBQUtDLEcsbWRDSWxGLFlBQ0ksYSxPQUNJLFlBQU0sWUFBYSwwQkFBd0IsSUFDL0MsQ0FIMkIsT0FLM0IsWUFBQXBELG1CQUFBLFNBQW1CQyxHQUNmLE1BQWdDLFdBQTVCQSxFQUFPUyxXQUFXdUIsTUFDWCxVQUFHbkMsS0FBS0QsUUFBTyxZQUFJSSxFQUFPUyxXQUFXdUIsTUFBSyxZQUFJaEMsRUFBT1EsUUFHckQsVUFBR1gsS0FBS0QsUUFBTyxtQkFBV0ksRUFBT1EsT0FFaEQsRUFFQSxZQUFBK0MsVUFBQSxTQUFVQyxFQUFhcEQsR0FDbkIsSUFJSXFELEVBSmVyRCxFQUFTc0QsY0FBYyxTQUNqQkMsWUFDRjNDLE1BQU0sS0FFQyxHQUM5QixPQUFPLElBQUksSUFDUHlDLEVBQ0E1RCxLQUFLK0QsUUFBUXhELEdBQ2JQLEtBQUtJLGNBQWNKLEtBQU0yRCxFQUFLcEQsR0FFdEMsRUFFQSxZQUFBd0QsUUFBQSxTQUFReEQsR0FDSixPQUFPQSxFQUFTc0QsY0FBYyxrQkFBa0JDLFlBQVl2QyxNQUNoRSxFQUVBLFlBQUFkLFNBQUEsU0FBU2tELEdBQ0wsT0FBT0EsRUFBSTVCLFNBQVMsU0FDeEIsRUFFQSxZQUFBdkIsTUFBQSxTQUFNRCxHQUVGLFFBQXlCLE9BRFBBLEVBQVNzRCxjQUFjLGlCQUU3QyxDQUNKLENBdkNBLENBQStCLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2Jpbmhvb2R0b3lhaG9vZmluYW5jZS8uL3NyYy9zaXRlcy9TaXRlLnRzIiwid2VicGFjazovL3JvYmluaG9vZHRveWFob29maW5hbmNlLy4vc3JjL3RpY2tlcnMvVGlja2VyLnRzIiwid2VicGFjazovL3JvYmluaG9vZHRveWFob29maW5hbmNlLy4vc3JjL3RpY2tlcnMvVGlja2VyVHlwZS50cyIsIndlYnBhY2s6Ly9yb2Jpbmhvb2R0b3lhaG9vZmluYW5jZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yb2Jpbmhvb2R0b3lhaG9vZmluYW5jZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcm9iaW5ob29kdG95YWhvb2ZpbmFuY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yb2Jpbmhvb2R0b3lhaG9vZmluYW5jZS8uL3NyYy9zaXRlcy9Sb2Jpbmhvb2QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGlja2VyIH0gZnJvbSBcIi4uL3RpY2tlcnMvVGlja2VyXCI7XG5pbXBvcnQgeyBUaWNrZXJUeXBlIH0gZnJvbSBcIi4uL3RpY2tlcnMvVGlja2VyVHlwZVwiO1xuXG5leHBvcnQgY2xhc3MgU2l0ZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGJhc2VVcmw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgYmFzZVVybDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw7XG4gICAgfVxuXG4gICAgaXMoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBjcmVhdGVVcmxGb3JUaWNrZXIodGlja2VyOiBUaWNrZXIpOiBhbnkge31cblxuICAgIGdldFRpY2tlclR5cGUoc2l0ZTogU2l0ZSwgY3J5cHRvQXJnOiBhbnksIGRvY3VtZW50OiBEb2N1bWVudCk6IFRpY2tlclR5cGUge1xuICAgICAgICBpZiAoc2l0ZS5pc0V0Zihkb2N1bWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGlja2VyVHlwZShcImV0ZlwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChzaXRlLmlzQ3J5cHRvKGNyeXB0b0FyZykpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGlja2VyVHlwZShcImNyeXB0b1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGlja2VyVHlwZShcInN0b2NrXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHR5cGUgaGVyZSBpcyBcImFueVwiLCBiZWNhdXNlIHdlIGRvbid0IHdhbnQgdG8gcmV0dXJuIGEgdmFsdWUgaW4gdGhlIHN1cGVyY2xhc3MsIHdoaWNoIHdlIHdvdWxkIGhhdmUgdG8gc2luY2Ugd2UncmUgdXNpbmcgdGhlbSBpbiBnZXRUaWNrZXJUeXBlIGFib3ZlLlxuICAgIC8vIEltcGxlbWVudGF0aW9ucyBvZiB0aGVzZSBtZXRob2RzIGluIHN1YmNsYXNzZXMgc2hvdWxkIHJldHVybiBhIGJvb2xlYW4uXG4gICAgaXNDcnlwdG8oeDogYW55KTogYW55IHt9XG4gICAgaXNFdGYoZG9jdW1lbnQ6IERvY3VtZW50KTogYW55IHt9XG59XG4iLCJpbXBvcnQgeyBUaWNrZXJUeXBlIH0gZnJvbSBcIi4vVGlja2VyVHlwZVwiO1xuXG5leHBvcnQgY2xhc3MgVGlja2VyIHtcbiAgICBzeW1ib2w6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdGlja2VyVHlwZTogVGlja2VyVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKHN5bWJvbDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHRpY2tlclR5cGU6IFRpY2tlclR5cGUpIHtcbiAgICAgICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMucmVtb3ZlRXh0cmFXaGl0ZXNwYWNlKG5hbWUpO1xuICAgICAgICB0aGlzLnRpY2tlclR5cGUgPSB0aWNrZXJUeXBlO1xuICAgIH1cblxuICAgIGdldEh5cGhlbmF0ZWRUaWNrZXJTeW1ib2woKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5bWJvbC5yZXBsYWNlKFwiLlwiLCBcIi1cIik7XG4gICAgfVxuXG4gICAgcmVtb3ZlRXh0cmFXaGl0ZXNwYWNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcIlxcXFxzK1wiKTtcbiAgICAgICAgbGV0IHNwbGl0ID0gc3RyLnNwbGl0KHJlZ2V4KTtcbiAgICAgICAgbGV0IGZ1bGwgPSBcIlwiO1xuICAgICAgICBzcGxpdC5mb3JFYWNoKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAgICAgICBmdWxsID0gZnVsbCArIHdvcmQudHJpbSgpICsgXCIgXCI7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBHZXQgcmlkIG9mIHRoZSBvbmUgZXh0cmEgc3BhY2UgYXQgdGhlIGVuZCBiZWZvcmUgd2UgcmV0dXJuXG4gICAgICAgIHJldHVybiBmdWxsLnRyaW0oKTtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYFRpY2tlciAtIHN5bWJvbDogJHt0aGlzLnN5bWJvbH0sIG5hbWU6ICR7dGhpcy5uYW1lfSwgdHlwZTogJHt0aGlzLnRpY2tlclR5cGV9YDtcbiAgICB9XG5cbiAgICBlcXVhbHModGhhdDogVGlja2VyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnN5bWJvbCA9PT0gdGhhdC5zeW1ib2wgJiZcbiAgICAgICAgICAgIHRoaXMubmFtZUVxdWFscyh0aGF0Lm5hbWUpICYmXG4gICAgICAgICAgICB0aGlzLnRpY2tlclR5cGUuZXF1YWxzKHRoYXQudGlja2VyVHlwZSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayB0byBzZWUgaWYgYSBnaXZlbiBjb21wYW55J3MgbmFtZSBtYXRjaGVzIHRoaXMgY29tcGFueSdzIG5hbWUuXG4gICAgICogU2luY2UgdGhlc2UgdmFsdWVzIGFyZSBiZWluZyBwdWxsZWQgZnJvbSBlYWNoIHNpdGUgd2UncmUgdmlzaXRpbmcgKGFuZCB3ZSBjYW4ndCBjb250cm9sIHdoYXQgdGhleSBjYWxsIHRoZW0pLFxuICAgICAqIGFuZCBzaW5jZSB0aGVzZSBlcXVhbGl0eSBmdW5jdGlvbnMgYXJlIChhdCBsZWFzdCBzbyBmYXIpIG9ubHkgYmVpbmcgdXNlZCB0byBmYWNpbGl0YXRlIHVuaXQgdGVzdGluZyBhbnl3YXksXG4gICAgICogdGhpcyBmdW5jdGlvbiBpcyBiYXNpY2FsbHkganVzdCBjaGVja2luZyB0byBzZWUgaWYgdGhlIG5hbWVzIGFyZSBcImNsb3NlIGVub3VnaFwiIGJ5IGNoZWNraW5nIHRvIHNlZSBpZiBvbmUgc3RyaW5nIGluY2x1ZGVzIHRoZSBvdGhlci5cbiAgICAgKlxuICAgICAqIEZvciBleGFtcGxlLCB0aGUgUkggcGFnZSBmb3IgJFNQWSBjYWxscyBpdCBcIlNQRFIgUyZQIDUwMCBFVEZcIiwgd2hpbGUgWUYgY2FsbHMgaXQgXCJTUERSIFMmUCA1MDAgRVRGIFRydXN0XCIuXG4gICAgICogRXZlbiB0aG91Z2ggdGhlIHN0cmluZ3MgYXJlbid0IGlkZW50aWNhbCwgd2Ugc3RpbGwgd2FudCB0aGVzZSB0byBiZSBjb25zaWRlcmVkIGVxdWFsLCBzbyB3ZSBjYW4ganVzdCBjaGVjayBpZiBvbmUgY29udGFpbnMgdGhlIG90aGVyLCB3aGljaCBpdCBkb2VzLlxuICAgICAqXG4gICAgICogVE9ETyAtIHRoZXJlIHdpbGwgcHJvYmFibHkgYmUgc29tZSBlZGdlIGNhc2VzIGZvciB3aGljaCB0aGlzIHNvbHV0aW9uIHdpbGwgbm90IHdvcmssIHNvIHRoaXMgd2lsbCBsaWtlbHkgaGF2ZSB0byBiZSByZXZpc2VkIGluIHRoZSBmdXR1cmUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGhhdE5hbWUgLSBuYW1lIG9mIHRoZSBjb21wYW55IHRvIHdoaWNoIHdlJ3JlIGNvbXBhcmluZyB0aGlzIGNvbXBhbnlcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBjb21wYW5pZXMnIG5hbWVzIGFyZSB0aGUgc2FtZSAob3IgYXQgbGVhc3QsIGNsb3NlIGVub3VnaClcbiAgICAgKi9cbiAgICBuYW1lRXF1YWxzKHRoYXROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHRoaXNOYW1lID0gdGhpcy5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoYXROYW1lID0gdGhhdE5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICByZXR1cm4gdGhpc05hbWUuaW5jbHVkZXModGhhdE5hbWUpIHx8IHRoYXROYW1lLmluY2x1ZGVzKHRoaXNOYW1lKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGlja2VyVHlwZSB7XG4gICAgVkFMSURfVFlQRVMgPSBbXCJzdG9ja1wiLCBcImV0ZlwiLCBcIm11dHVhbGZ1bmRcIiwgXCJjcnlwdG9cIiwgXCJmdXR1cmVcIiwgXCJib25kXCJdO1xuICAgIHZhbHVlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aWNrZXJUeXBlOiBzdHJpbmcpIHtcbiAgICAgICAgdGlja2VyVHlwZSA9IHRpY2tlclR5cGUudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWRUeXBlKHRpY2tlclR5cGUpKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGlja2VyVHlwZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdGlja2VyVHlwZTogXCIgKyB0aWNrZXJUeXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzVmFsaWRUeXBlKHR0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuVkFMSURfVFlQRVMuaW5jbHVkZXModHQpO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIGVxdWFscyh0aGF0OiBUaWNrZXJUeXBlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSB0aGF0LnZhbHVlO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiaW1wb3J0IHsgU2l0ZSB9IGZyb20gXCIuL1NpdGVcIjtcbmltcG9ydCB7IFRpY2tlclR5cGUgfSBmcm9tIFwiLi4vdGlja2Vycy9UaWNrZXJUeXBlXCI7XG5pbXBvcnQgeyBUaWNrZXIgfSBmcm9tIFwiLi4vdGlja2Vycy9UaWNrZXJcIjtcblxuZXhwb3J0IGNsYXNzIFJvYmluaG9vZCBleHRlbmRzIFNpdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcIlJvYmluaG9vZFwiLCBgaHR0cHM6Ly9yb2Jpbmhvb2QuY29tYCk7XG4gICAgfVxuXG4gICAgY3JlYXRlVXJsRm9yVGlja2VyKHRpY2tlcjogVGlja2VyKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRpY2tlci50aWNrZXJUeXBlLnZhbHVlID09PSBcImNyeXB0b1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5iYXNlVXJsfS8ke3RpY2tlci50aWNrZXJUeXBlLnZhbHVlfS8ke3RpY2tlci5zeW1ib2x9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEVURnMgYWxzbyBnZXQgdGhlICdzdG9ja3MnIHBhdGggaW4gdGhlIHVybCBvbiBSSFxuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuYmFzZVVybH0vc3RvY2tzLyR7dGlja2VyLnN5bWJvbH1gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGlja2VyKHVybDogc3RyaW5nLCBkb2N1bWVudDogRG9jdW1lbnQpOiBUaWNrZXIge1xuICAgICAgICB2YXIgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRpdGxlXCIpO1xuICAgICAgICB2YXIgdGl0bGUgPSB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgIHZhciBzcGxpdFRpdGxlID0gdGl0bGUuc3BsaXQoXCIgXCIpO1xuXG4gICAgICAgIGxldCB0aWNrZXJTdHJpbmcgPSBzcGxpdFRpdGxlWzBdO1xuICAgICAgICByZXR1cm4gbmV3IFRpY2tlcihcbiAgICAgICAgICAgIHRpY2tlclN0cmluZyxcbiAgICAgICAgICAgIHRoaXMuZ2V0TmFtZShkb2N1bWVudCksXG4gICAgICAgICAgICB0aGlzLmdldFRpY2tlclR5cGUodGhpcywgdXJsLCBkb2N1bWVudClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXROYW1lKGRvY3VtZW50OiBEb2N1bWVudCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpbiBoZWFkZXIgaDFcIikudGV4dENvbnRlbnQudHJpbSgpO1xuICAgIH1cblxuICAgIGlzQ3J5cHRvKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB1cmwuaW5jbHVkZXMoXCJjcnlwdG9cIik7XG4gICAgfVxuXG4gICAgaXNFdGYoZG9jdW1lbnQ6IERvY3VtZW50KTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBldGZDYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXRmLWNhdGVnb3J5XCIpO1xuICAgICAgICByZXR1cm4gIShldGZDYXRlZ29yeSA9PT0gbnVsbCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIm5hbWUiLCJiYXNlVXJsIiwidGhpcyIsImlzIiwiY3JlYXRlVXJsRm9yVGlja2VyIiwidGlja2VyIiwiZ2V0VGlja2VyVHlwZSIsInNpdGUiLCJjcnlwdG9BcmciLCJkb2N1bWVudCIsImlzRXRmIiwiaXNDcnlwdG8iLCJ4Iiwic3ltYm9sIiwidGlja2VyVHlwZSIsInJlbW92ZUV4dHJhV2hpdGVzcGFjZSIsImdldEh5cGhlbmF0ZWRUaWNrZXJTeW1ib2wiLCJyZXBsYWNlIiwic3RyIiwicmVnZXgiLCJSZWdFeHAiLCJzcGxpdCIsImZ1bGwiLCJmb3JFYWNoIiwid29yZCIsInRyaW0iLCJ0b1N0cmluZyIsImVxdWFscyIsInRoYXQiLCJuYW1lRXF1YWxzIiwidGhhdE5hbWUiLCJ0aGlzTmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJWQUxJRF9UWVBFUyIsImlzVmFsaWRUeXBlIiwiRXJyb3IiLCJ2YWx1ZSIsInR0IiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJkIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZ2V0VGlja2VyIiwidXJsIiwidGlja2VyU3RyaW5nIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiZ2V0TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=