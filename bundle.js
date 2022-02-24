(()=>{"use strict";var n={340:(n,t,e)=>{e.d(t,{Z:()=>a});var A=e(537),o=e.n(A),r=e(645),i=e.n(r)()(o());i.push([n.id,"html {\n  height: 100%;\n}\np {\n  margin: 0;\n}\n.lotto-app-input {\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n.lotto-app-button {\n  background: #00bcd4;\n  border-radius: 4px;\n  border: none;\n  font-weight: bold;\n  font-size: 14px;\n  color: white;\n  line-height: 16px;\n  letter-spacing: 1.25px;\n}\nbody {\n  display: flex;\n  justify-content: center;\n  margin-top: 100px;\n}\n.app {\n  width: 414px;\n  padding: 52px 0;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n}\n.app-title {\n  text-align: center;\n  font-weight: 600;\n  font-size: 34px;\n  line-height: 36px;\n  margin-bottom: 16px;\n}\n.submit-form {\n  padding: 0 16px;\n}\n.submit-form label {\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  color: rgba(0, 0, 0, 0.87);\n}\n.input-wrap {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 4px;\n  height: 36px;\n}\n.input-wrap input {\n  width: calc(100% - 70px);\n  height: 100%;\n  padding-left: 10px;\n}\n.input-wrap button {\n  width: 52px;\n  height: 100%;\n  cursor: pointer;\n}\n.lotto-list {\n  margin-top: 28px;\n  width: 100%;\n}\n.lotto-list-header {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0 16px;\n  box-sizing: border-box;\n}\n.lotto-list-header p {\n  font-size: 15px;\n  line-height: 24px;\n  color: rgba(0, 0, 0, 0.87);\n}\n.lotto-list-body {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 8px;\n  padding: 0 16px 0 12px;\n}\n.lottos-container {\n  width: calc(100% - 70px);\n}\n.lottos-container .lottos.detail,\n.lottos-container.detail .lottos.default {\n  display: none;\n}\n.lottos-container.detail .lottos.detail {\n  display: block;\n}\n.lottos.default {\n  display: flex;\n  flex-wrap: wrap;\n}\n.lotto {\n  font-weight: 600;\n  font-size: 34px;\n  line-height: 36px;\n  color: rgba(0, 0, 0, 0.87);\n}\n.lottos .lotto {\n  margin: 0 4px;\n}\n.lotto-number {\n  margin-left: 8px;\n  vertical-align: middle;\n  font-size: 15px;\n  letter-spacing: 0.5px;\n  color: rgba(0, 0, 0, 0.87);\n}\n.toggle-wrap {\n  position: relative;\n  display: inline-block;\n  margin-top: 5px;\n  width: 34px;\n  height: 34px;\n}\n.toggle-wrap input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  height: 14px;\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(33, 33, 33, 0.08);\n  transition: 0.4s;\n}\n.slider:before {\n  position: absolute;\n  content: '';\n  width: 20px;\n  height: 20px;\n  left: -1px;\n  bottom: -2px;\n  background-color: #ededed;\n  transition: 0.4s;\n  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.3);\n}\ninput:checked + .slider {\n  background-color: #80deea;\n}\ninput:checked + .slider:before {\n  background-color: #00bcd4;\n}\ninput:checked + .slider:before {\n  transform: translateX(15px);\n}\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round:before {\n  border-radius: 50%;\n}\n.lotto-match {\n  margin-top: 32px;\n  padding: 0 16px;\n  box-sizing: border-box;\n}\n.lotto-match p {\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  color: rgba(0, 0, 0, 0.87);\n}\n.lotto-match-header {\n  display: flex;\n  justify-content: space-between;\n}\n.lotto-match-header p {\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  color: rgba(0, 0, 0, 0.87);\n}\n.number-container {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 8px;\n}\n.match-number-input {\n  width: 34px;\n  height: 36px;\n}\n.match-numbers .match-number-input {\n  margin-left: 8px;\n}\n.match-numbers .match-number-input:first-child {\n  margin-left: 0px;\n}\n.result-button {\n  margin-top: 24px;\n  width: 100%;\n  height: 36px;\n}\n","",{version:3,sources:["webpack://./src/css/index.css"],names:[],mappings:"AAAA;EACE,YAAY;AACd;AACA;EACE,SAAS;AACX;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,eAAe;EACf,qCAAqC;AACvC;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,0BAA0B;AAC5B;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,YAAY;AACd;AACA;EACE,wBAAwB;EACxB,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;EACX,eAAe;EACf,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,0BAA0B;AAC5B;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,sBAAsB;AACxB;AACA;EACE,wBAAwB;AAC1B;AACA;;EAEE,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,0BAA0B;AAC5B;AACA;EACE,aAAa;AACf;AACA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,eAAe;EACf,qBAAqB;EACrB,0BAA0B;AAC5B;AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;EACf,WAAW;EACX,YAAY;AACd;AACA;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,wCAAwC;EACxC,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,yBAAyB;EACzB,gBAAgB;EAChB,wCAAwC;AAC1C;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,0BAA0B;AAC5B;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,0BAA0B;AAC5B;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd",sourcesContent:["html {\n  height: 100%;\n}\np {\n  margin: 0;\n}\n.lotto-app-input {\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n.lotto-app-button {\n  background: #00bcd4;\n  border-radius: 4px;\n  border: none;\n  font-weight: bold;\n  font-size: 14px;\n  color: white;\n  line-height: 16px;\n  letter-spacing: 1.25px;\n}\nbody {\n  display: flex;\n  justify-content: center;\n  margin-top: 100px;\n}\n.app {\n  width: 414px;\n  padding: 52px 0;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n}\n.app-title {\n  text-align: center;\n  font-weight: 600;\n  font-size: 34px;\n  line-height: 36px;\n  margin-bottom: 16px;\n}\n.submit-form {\n  padding: 0 16px;\n}\n.submit-form label {\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  color: rgba(0, 0, 0, 0.87);\n}\n.input-wrap {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 4px;\n  height: 36px;\n}\n.input-wrap input {\n  width: calc(100% - 70px);\n  height: 100%;\n  padding-left: 10px;\n}\n.input-wrap button {\n  width: 52px;\n  height: 100%;\n  cursor: pointer;\n}\n.lotto-list {\n  margin-top: 28px;\n  width: 100%;\n}\n.lotto-list-header {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0 16px;\n  box-sizing: border-box;\n}\n.lotto-list-header p {\n  font-size: 15px;\n  line-height: 24px;\n  color: rgba(0, 0, 0, 0.87);\n}\n.lotto-list-body {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 8px;\n  padding: 0 16px 0 12px;\n}\n.lottos-container {\n  width: calc(100% - 70px);\n}\n.lottos-container .lottos.detail,\n.lottos-container.detail .lottos.default {\n  display: none;\n}\n.lottos-container.detail .lottos.detail {\n  display: block;\n}\n.lottos.default {\n  display: flex;\n  flex-wrap: wrap;\n}\n.lotto {\n  font-weight: 600;\n  font-size: 34px;\n  line-height: 36px;\n  color: rgba(0, 0, 0, 0.87);\n}\n.lottos .lotto {\n  margin: 0 4px;\n}\n.lotto-number {\n  margin-left: 8px;\n  vertical-align: middle;\n  font-size: 15px;\n  letter-spacing: 0.5px;\n  color: rgba(0, 0, 0, 0.87);\n}\n.toggle-wrap {\n  position: relative;\n  display: inline-block;\n  margin-top: 5px;\n  width: 34px;\n  height: 34px;\n}\n.toggle-wrap input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  height: 14px;\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(33, 33, 33, 0.08);\n  transition: 0.4s;\n}\n.slider:before {\n  position: absolute;\n  content: '';\n  width: 20px;\n  height: 20px;\n  left: -1px;\n  bottom: -2px;\n  background-color: #ededed;\n  transition: 0.4s;\n  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.3);\n}\ninput:checked + .slider {\n  background-color: #80deea;\n}\ninput:checked + .slider:before {\n  background-color: #00bcd4;\n}\ninput:checked + .slider:before {\n  transform: translateX(15px);\n}\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round:before {\n  border-radius: 50%;\n}\n.lotto-match {\n  margin-top: 32px;\n  padding: 0 16px;\n  box-sizing: border-box;\n}\n.lotto-match p {\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  color: rgba(0, 0, 0, 0.87);\n}\n.lotto-match-header {\n  display: flex;\n  justify-content: space-between;\n}\n.lotto-match-header p {\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  color: rgba(0, 0, 0, 0.87);\n}\n.number-container {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 8px;\n}\n.match-number-input {\n  width: 34px;\n  height: 36px;\n}\n.match-numbers .match-number-input {\n  margin-left: 8px;\n}\n.match-numbers .match-number-input:first-child {\n  margin-left: 0px;\n}\n.result-button {\n  margin-top: 24px;\n  width: 100%;\n  height: 36px;\n}\n"],sourceRoot:""}]);const a=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",A=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),A&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),A&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,A,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(A)for(var a=0;a<this.length;a++){var p=this[a][0];null!=p&&(i[p]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);A&&i[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},537:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),r="/*# ".concat(o," */"),i=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([r]).join("\n")}return[t].join("\n")}},379:n=>{var t=[];function e(n){for(var e=-1,A=0;A<t.length;A++)if(t[A].identifier===n){e=A;break}return e}function A(n,A){for(var r={},i=[],a=0;a<n.length;a++){var p=n[a],l=A.base?p[0]+A.base:p[0],s=r[l]||0,c="".concat(l," ").concat(s);r[l]=s+1;var d=e(c),u={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==d)t[d].references++,t[d].updater(u);else{var C=o(u,A);A.byIndex=a,t.splice(a,0,{identifier:c,updater:C,references:1})}i.push(c)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var r=A(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var a=e(r[i]);t[a].references--}for(var p=A(n,o),l=0;l<r.length;l++){var s=e(r[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}r=p}}},569:n=>{var t={};n.exports=function(n,e){var A=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!A)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");A.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var A="";e.supports&&(A+="@supports (".concat(e.supports,") {")),e.media&&(A+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(A+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),A+=e.css,o&&(A+="}"),e.media&&(A+="}"),e.supports&&(A+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(A+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(A,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(A){var o=t[A];if(void 0!==o)return o.exports;var r=t[A]={id:A,exports:{}};return n[A](r,r.exports,e),r.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var A in t)e.o(t,A)&&!e.o(n,A)&&Object.defineProperty(n,A,{enumerable:!0,get:t[A]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n=e(379),t=e.n(n),A=e(795),o=e.n(A),r=e(569),i=e.n(r),a=e(565),p=e.n(a),l=e(216),s=e.n(l),c=e(589),d=e.n(c),u=e(340),C={};C.styleTagTransform=d(),C.setAttributes=p(),C.insert=i().bind(null,"head"),C.domAPI=o(),C.insertStyleElement=s(),t()(u.Z,C),u.Z&&u.Z.locals&&u.Z.locals;var f=function(n){return document.querySelector(n)},h=function(n,t,e){var A=Array(t-n+1).fill().map((function(t,e){return e+n}));return Array(e).fill().map((function(){return A.splice(Math.floor(Math.random()*A.length),1)[0]}))},g=Object.freeze({LACK_OF_FARE:"요금은 1000원 이상 투입해주세요!"}),B=1e3;const x={lottos:[],createLottos:function(n){for(var t=0;t<n;t+=1)this.lottos.push(h(1,45,6));return this.lottos}},E=function(n){return'<p class="lotto">🎟️</p>'.repeat(n)},b=function(n){return n.map((function(n){return'<p class="lotto">\n          🎟️<span class="lotto-number">'.concat(n.join(", "),"</span>\n        </p>")})).join("")},m={renderLottoList:function(n){this.renderDefaultLottoArea(n.length),this.renderDetailLottoArea(n),f("#lotto-count").innerText=n.length},renderDefaultLottoArea:function(n){f("#lottos-container .lottos.default").innerHTML=E(n)},renderDetailLottoArea:function(n){f("#lottos-container .lottos.detail").innerHTML=b(n)},renderFare:function(n){f("#fare-input").value=n}};var y=function(n){n.preventDefault();try{var t=f("#fare-input").value;(function(n){if(!function(n){return n>=B}(n))throw new Error(g.LACK_OF_FARE)})(t),m.renderLottoList(x.createLottos((e=t,Math.floor(e/B)))),m.renderFare(function(n){return n%B}(t))}catch(n){alert(n.message)}var e},w=function(){return f("#lottos-container").classList.toggle("detail")};f("#fare-form").addEventListener("submit",y),f("#lotto-viewer-controller").addEventListener("change",w)})()})();
//# sourceMappingURL=bundle.js.map