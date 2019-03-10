/*!
 * 
 *    ___ _             _                   
 *   / _ \ | __ _ _   _| |__  _   _ ________
 *  / /_)/ |/ _` | | | | '_ \| | | |_  /_  /
 * / ___/| | (_| | |_| | |_) | |_| |/ / / /
 * \/    |_|\__,_|\__, |_.__/ \__,_/___/___|
 *                |___/
 * 
 * Hello There!
 * Coding is your passion?
 * We constantly look for outstanding people to join our team.
 * Visit us at https://publishers.playbuzz.com/comeet-career/ to learn about our job openings.
 * 
 * Looking for help with a playbuzz embed?
 * Visit us at https://playbuzz.github.io/how-to/ for instructions and help.
 * 
 * Playbuzz Embed SDK
 * Copyright (c) 2017-present, Playbuzz. All rights reserved.
 * www.playbuzz.com
 * 
 */
!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=14)}([function(e,n,t){"use strict";(function(n){var t=setTimeout;function r(){}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],s(e,this)}function i(e,n){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,o._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null!==t){var r;try{r=t(e._value)}catch(e){return void u(n.promise,e)}a(n.promise,r)}else(1===e._state?a:u)(n.promise,e._value)})):e._deferreds.push(n)}function a(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var t=n.then;if(n instanceof o)return e._state=3,e._value=n,void c(e);if("function"==typeof t)return void s(function(e,n){return function(){e.apply(n,arguments)}}(t,n),e)}e._state=1,e._value=n,c(e)}catch(n){u(e,n)}}function u(e,n){e._state=2,e._value=n,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var n=0,t=e._deferreds.length;n<t;n++)i(e,e._deferreds[n]);e._deferreds=null}function s(e,n){var t=!1;try{e(function(e){t||(t=!0,a(n,e))},function(e){t||(t=!0,u(n,e))})}catch(e){if(t)return;t=!0,u(n,e)}}o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,n){var t=new this.constructor(r);return i(this,new function(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}(e,n,t)),t},o.prototype.finally=function(e){var n=this.constructor;return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){return n.reject(t)})})},o.all=function(e){return new o(function(n,t){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return n([]);var o=r.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var u=a.then;if("function"==typeof u)return void u.call(a,function(n){i(e,n)},t)}r[e]=a,0==--o&&n(r)}catch(e){t(e)}}for(var a=0;a<r.length;a++)i(a,r[a])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(n){n(e)})},o.reject=function(e){return new o(function(n,t){t(e)})},o.race=function(e){return new o(function(n,t){for(var r=0,o=e.length;r<o;r++)e[r].then(n,t)})},o._immediateFn="function"==typeof n&&function(e){n(e)}||function(e){t(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},e.exports=o}).call(this,t(15).setImmediate)},function(e,n,t){"use strict";(function(e){var t=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),r=function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.document;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this._doc=e,this.load=this.load.bind(this)}return t(n,[{key:"load",value:function(n){var t=this;return new e(function(e,r){var o=t._doc.createElement("script");o.type="text/javascript",n.src?(o.onload=function(n){e(n.target.src)},o.onerror=r,o.src=n.src,o.async=n.async,o.defer=n.defer,n.id&&(o.id=n.id)):o.textContent=n.innerText,t._doc.body.appendChild(o),n.parentNode.removeChild(n),n.src||e(o)})}}]),n}();n.a=r}).call(this,t(0))},function(e,n,t){"use strict";var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"toVersion3",value:function(e){return e.classList.contains("playbuzz")?e:(e.classList.remove("pb_feed"),e.classList.add("playbuzz"),e.dataset.id=e.dataset.item||e.dataset.game,e.dataset.showInfo=e.dataset.gameInfo,e.dataset.showShare=e.dataset.shares,e)}},{key:"toVersion2",value:function(e){return e.classList.contains("pb_feed")?e:(e.classList.remove("playbuzz"),e.classList.add("pb_feed"),e.dataset.item=e.dataset.id,e.dataset.gameInfo=e.dataset.showInfo,e.dataset.shares=e.dataset.showShare,e)}}]),e}();n.a=o},function(e,n,t){"use strict";t.d(n,"b",function(){return r}),t.d(n,"a",function(){return o});var r=function(){var e=document.createElement("style");return e.innerHTML=".story-skeleton .skeleton-section:not(:first-child) {\n                margin-top: 40px;\n            }\n            \n            .story-skeleton .skeleton-section-line {\n                height: 10px;\n                background: #efefef;\n                margin-top: 14px;\n                position: relative;\n                overflow: hidden;\n            }\n            \n            .story-skeleton .skeleton-section-line:nth-of-type(1) {\n                margin-left: 3%;\n                width: 92%;\n            }\n            \n            .story-skeleton .skeleton-section-line:nth-of-type(2) {\n                width: 95%;\n            }\n            \n            .story-skeleton .skeleton-section-line:nth-of-type(3) {\n                width: 95%;\n            }\n            \n            .story-skeleton .skeleton-section-line:nth-of-type(4) {\n                width: 75%;\n            }\n            \n            .story-skeleton .skeleton-section-line:nth-of-type(5) {\n                width: 95%;\n                margin-top: 40px;\n            }\n            \n            .story-skeleton .skeleton-section-line:nth-of-type(6) {\n                width: 95%;\n            }\n            \n            .story-skeleton .skeleton-section-line:nth-of-type(7) {\n                width: 95%;\n            }\n            \n            .story-skeleton .skeleton-section-line:nth-of-type(8) {\n                width: 75%;\n            }\n            \n            @media screen and (max-width: 480px) {\n            \n                .story-skeleton .skeleton-section:not(:first-child) {\n                    margin-top: 30px;\n                }\n            \n                .story-skeleton .skeleton-section-line:nth-of-type(5) {\n                    margin-top: 30px;\n                }\n            }\n            \n            /* Shining animation */\n            .skeleton-section-line:after {\n                content: '';\n                width: 100px;\n                height: 12px;\n            \n                background-image: linear-gradient(\n                        90deg,\n                        rgba(255, 255, 255, 0),\n                        rgba(255, 255, 255, 0.5) 50%,\n                        rgba(255, 255, 255, 0) 100%);\n            \n                position: absolute;\n                animation: shine 2s infinite;\n            }\n            \n            @keyframes shine {\n                from {\n                    left: calc(0% - 100px);\n                }\n                to {\n                    left: calc(100% + 100px);\n                }\n        }",e},o=function(){var e=document.createElement("div");e.classList.add("story-skeleton");var n=document.createElement("div"),t=document.createElement("div");n.classList.add("skeleton-section"),t.classList.add("skeleton-section");for(var r=0;r<8;r+=1){var o=document.createElement("div");o.classList.add("skeleton-section-line"),n.appendChild(o);var i=document.createElement("div");i.classList.add("skeleton-section-line"),t.appendChild(i)}return e.appendChild(n),e.appendChild(t),e}},function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,n,t){"use strict";t.r(n),function(e,t){var r="function"==typeof e?e.bind():function(e,n){return n=n||{},new t(function(r,o){var i=new XMLHttpRequest;for(var a in i.open(n.method||"get",e,!0),n.headers)i.setRequestHeader(a,n.headers[a]);function u(){var e,n=[],r=[],o={};return i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(t,i,a){n.push(i=i.toLowerCase()),r.push([i,a]),e=o[i],o[i]=e?e+","+a:a}),{ok:2==(i.status/100|0),status:i.status,statusText:i.statusText,url:i.responseURL,clone:u,text:function(){return t.resolve(i.responseText)},json:function(){return t.resolve(i.responseText).then(JSON.parse)},blob:function(){return t.resolve(new Blob([i.response]))},headers:{keys:function(){return n},entries:function(){return r},get:function(e){return o[e.toLowerCase()]},has:function(e){return e.toLowerCase()in o}}}}i.withCredentials="include"==n.credentials,i.onload=function(){r(u())},i.onerror=o,i.send(n.body||null)})};n.default=r}.call(this,t(5).default,t(0))},function(e,n,t){e.exports="function"==typeof Array.from?Array.from:t(20)},function(e,n,t){"use strict";(function(e){var t=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),r=function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.document;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this._doc=e,this.preload=this.preload.bind(this)}return t(n,[{key:"preload",value:function(n){var t=this;return new e(function(e,r){var o=t._doc.createElement("link");o.rel="preload",o.href=n.href,o.as=n.as,o.onload=function(n){e(n)},o.onerror=function(e){r(e)},t._doc.head.appendChild(o)})}}]),n}();n.a=r}).call(this,t(0))},function(e,n,t){"use strict";(function(e){var t=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),r=function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.document,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this._doc=e,this._pollingInterval=t,this.find=this.find.bind(this)}return t(n,[{key:"find",value:function(n){var t=this;return Array.isArray(n)&&(n=n.join(",")),new e(function(e,r){var o=t._doc.querySelectorAll(n);if(o.length>0)return e(o);var i=setInterval(function(){(o=t._doc.querySelectorAll(n)).length>0&&(clearInterval(i),e(o))},t._pollingInterval)})}}]),n}();n.a=r}).call(this,t(0))},function(e,n,t){"use strict";(function(e,r){var o=t(1),i=t(10),a=t(3),u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),c=function(){function n(e,t,r){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this._logger=e,this._analyticsUrl=t,this._sdkLoadId=r,this.render=this.render.bind(this),this._reportLoad=this._reportLoad.bind(this),this._injectPageToIframe=this._injectPageToIframe.bind(this),this._loadPage=this._loadPage.bind(this),this._loadIframe=this._loadIframe.bind(this),this._loadScripts=this._loadScripts.bind(this)}return u(n,[{key:"render",value:function(n){var t=n.dataset.id;this._logger.debug("found element with id "+String(t)),this._logger.debug("reporting load..."),this._reportLoad(t);var r=n.dataset.xPbReferer;return e.all([this._loadPage(t,r),this._loadIframe(n)]).then(this._injectPageToIframe).then(this._loadScripts)}},{key:"_reportLoad",value:function(e){var n={eventName:"sdk_render",deltaTime:(Object(i.a)()/1e3).toFixed(2),parentPageLoadUid:this._sdkLoadId,articleId:e,parentUrl:window.location.href,sessionParentHost:window.location.host};r(this._analyticsUrl,{method:"POST",headers:{"content-type":"text/plain;charset=UTF-8"},body:JSON.stringify(n)}).catch(this._logger.warn)}},{key:"_injectPageToIframe",value:function(e){var n=e[0],t=e[1];return this._logger.debug("injecting page to iframe...",t),t.open(),t.close(),t.head.innerHTML=n.head.innerHTML,t.body.innerHTML=n.body.innerHTML,t}},{key:"_loadPage",value:function(t,o){var i=this;this._logger.debug("loading page...");var a=n.createItemPageUrl(t),u={};return o&&(u["X-PB-Referer"]=o),r(a,{method:"GET",headers:u,credentials:"omit"}).then(function(n){return 218===n.status?e.reject(n):n.text()}).then(function(e){return i._logger.debug("page loaded..."),(new DOMParser).parseFromString(e,"text/html")})}},{key:"_loadIframe",value:function(n){var t=this;return this._logger.debug("loading iframe..."),new e(function(e,r){var o=void 0,i=document.createElement("iframe");for(i.style.width="1px",i.style.minWidth="100%",i.style.height="800px",i.style.border="0",i.setAttribute("allowfullscreen",!0),i.setAttribute("scrolling","no"),i.onload=function(r){var i=r.target.contentWindow;if(void 0!==o&&o!==i)return t._logger.warn("iframe reload detected. re-rendering element..."),void t.render(n).then(function(){t._logger.warn("element re-render done.")});t._logger.debug("iframe loaded."),o=i,t._useNewViewer&&(i.document.head.appendChild(Object(a.b)()),i.document.body.appendChild(Object(a.a)())),e(i.document)},i.onerror=function(e){r(e)},Object.keys(n.dataset).forEach(function(e){i.dataset[e]=n.dataset[e]}),i.dataset.sdkLoadId=t._sdkLoadId;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(i),n.dataset.rendered="true"})}},{key:"_loadScripts",value:function(n){var t=this;this._logger.debug("loading scripts...");var r=[].slice.call(n.scripts),i=new o.a(n);return e.all(r.map(function(e){return i.load(e).then(function(e){t._logger.debug("script loaded.",e)})})).then(function(){return t._logger.debug("all scripts loaded."),n})}}],[{key:"getCurrentScript",value:function(){var e=document.getElementById("playbuzz-sdk");if(null!==e)return e;var n=[].slice.call(document.scripts).filter(function(e){return e.src});return 1===n.length?n[0]:1===(n=n.filter(function(e){return-1!==e.src.indexOf("embed.playbuzz")})).length?n[0]:null}},{key:"createItemPageUrl",value:function(e){var n=this.getCurrentScript();if(null===n)return"https://embed.playbuzz.com/html?id="+String(e);var t=document.createElement("a");return t.href=n.src,String(t.protocol)+"//"+String(t.host)+"/html?id="+String(e)}}]),n}();n.a=c}).call(this,t(0),t(5).default)},function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=window.performance.timing.domLoading-window.performance.timing.navigationStart;function o(){return Math.round(window.performance.now()-r)}},function(e,n,t){"use strict";(function(e){function r(){for(var e=window;e.frameElement;)e=e.parent;return e}t.d(n,"a",function(){return r})}).call(this,t(0))},function(e,n,t){"use strict";function r(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,r)}function o(){return r(!1)}t.d(n,"a",function(){return o})},,function(e,n,t){"use strict";t.r(n),function(e){t(21);var n=t(23),r=t(12),o=t(22),i=t(7),a=t(8),u=t(2),c=t(9),s=t(1),l=['.playbuzz[data-id]:not([data-rendered="true"])','.pb_feed:not([render-status="rendered"])'],f="true"===Object(o.a)("pbdebug"),d=Object(r.a)(),h=new n.a({prefix:"Playbuzz SDK",isDebug:f}),p=new a.a,m=new i.a,v=new c.a(h,"https://prd-collector-anon.playbuzz.com/main/events",d);function y(){return h.debug("searching for elements..."),p.find(l).then(function(n){return e.all([].slice.call(n).map(u.a.toVersion3).map(g))})}function g(e){return v.render(e).catch(function(n){if(218===n.status)return function(e,n){return e.text().then(function(e){return(new DOMParser).parseFromString(e,"text/html").getElementById("feed")}).then(function(e){return(new s.a).load(e)}).then(function(){u.a.toVersion2(n),h.debug("feed.js loaded. calling render..."),PlayBuzz.Feed.renderFeed(n)})}(n,e);h.error("render element failed. error was:",n)}).then(function(){h.debug("element render done.")})}h.debug("starting..."),h.debug("preloading assets..."),e.all([{href:"https://pb-story.playbuzz.com/production/44a3d3c77ef0280446e258335e058fc7178b8866-2019-02-28-14-32-00/story-viewer.js",as:"script"}].map(m.preload)).then(function(){h.debug("all assets preloaded.")}).catch(function(e){h.warn("preloading assets failed. error was:",e)}),y(),window.Playbuzz=window.Playbuzz||{version:3,sdkLoadId:d,render:y}}.call(this,t(0))},function(e,n,t){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,n){this._id=e,this._clearFn=n}n.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},n.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},n.clearTimeout=n.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},n.enroll=function(e,n){clearTimeout(e._idleTimeoutId),e._idleTimeout=n},n.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},n._unrefActive=n.active=function(e){clearTimeout(e._idleTimeoutId);var n=e._idleTimeout;n>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},n))},t(16),n.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,n.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,t(4))},function(e,n,t){(function(e,n){!function(e,t){"use strict";if(!e.setImmediate){var r,o=1,i={},a=!1,u=e.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(e);c=c&&c.setTimeout?c:e,"[object process]"==={}.toString.call(e.process)?r=function(e){n.nextTick(function(){l(e)})}:function(){if(e.postMessage&&!e.importScripts){var n=!0,t=e.onmessage;return e.onmessage=function(){n=!1},e.postMessage("","*"),e.onmessage=t,n}}()?function(){var n="setImmediate$"+Math.random()+"$",t=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(n)&&l(+t.data.slice(n.length))};e.addEventListener?e.addEventListener("message",t,!1):e.attachEvent("onmessage",t),r=function(t){e.postMessage(n+t,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){l(e.data)},r=function(n){e.port2.postMessage(n)}}():u&&"onreadystatechange"in u.createElement("script")?function(){var e=u.documentElement;r=function(n){var t=u.createElement("script");t.onreadystatechange=function(){l(n),t.onreadystatechange=null,e.removeChild(t),t=null},e.appendChild(t)}}():r=function(e){setTimeout(l,0,e)},c.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var n=new Array(arguments.length-1),t=0;t<n.length;t++)n[t]=arguments[t+1];var a={callback:e,args:n};return i[o]=a,r(o),o++},c.clearImmediate=s}function s(e){delete i[e]}function l(e){if(a)setTimeout(l,0,e);else{var n=i[e];if(n){a=!0;try{!function(e){var n=e.callback,r=e.args;switch(r.length){case 0:n();break;case 1:n(r[0]);break;case 2:n(r[0],r[1]);break;case 3:n(r[0],r[1],r[2]);break;default:n.apply(t,r)}}(n)}finally{s(e),a=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,t(4),t(17))},function(e,n){var t,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,s=[],l=!1,f=-1;function d(){l&&c&&(l=!1,c.length?s=c.concat(s):f=-1,s.length&&h())}function h(){if(!l){var e=u(d);l=!0;for(var n=s.length;n;){for(c=s,s=[];++f<n;)c&&c[f].run();f=-1,n=s.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function p(e,n){this.fun=e,this.array=n}function m(){}o.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];s.push(new p(e,n)),1!==s.length||l||u(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,n,t){"use strict";t(19).polyfill()},function(e,n,t){"use strict";function r(e,n){if(null==e)throw new TypeError("Cannot convert first argument to object");for(var t=Object(e),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var i=Object.keys(Object(o)),a=0,u=i.length;a<u;a++){var c=i[a],s=Object.getOwnPropertyDescriptor(o,c);void 0!==s&&s.enumerable&&(t[c]=o[c])}}return t}e.exports={assign:r,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:r})}}},function(e,n){e.exports=function(){var e=function(e){return"function"==typeof e},n=Math.pow(2,53)-1,t=function(e){var t=function(e){var n=Number(e);return isNaN(n)?0:0!==n&&isFinite(n)?(n>0?1:-1)*Math.floor(Math.abs(n)):n}(e);return Math.min(Math.max(t,0),n)},r=function(e){var n=e.next();return!Boolean(n.done)&&n};return function(n){"use strict";var o,i,a,u=this,c=arguments.length>1?arguments[1]:void 0;if(void 0!==c){if(!e(c))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(o=arguments[2])}var s=function(n,t){if(null!=n&&null!=t){var r=n[t];if(null==r)return;if(!e(r))throw new TypeError(r+" is not a function");return r}}(n,function(e){if(null!=e){if(["string","number","boolean","symbol"].indexOf(typeof e)>-1)return Symbol.iterator;if("undefined"!=typeof Symbol&&"iterator"in Symbol&&Symbol.iterator in e)return Symbol.iterator;if("@@iterator"in e)return"@@iterator"}}(n));if(void 0!==s){i=e(u)?Object(new u):[];var l,f,d=s.call(n);if(null==d)throw new TypeError("Array.from requires an array-like or iterable object");for(a=0;;){if(!(l=r(d)))return i.length=a,i;f=l.value,i[a]=c?c.call(o,f,a):f,a++}}else{var h=Object(n);if(null==n)throw new TypeError("Array.from requires an array-like object - not null or undefined");var p,m=t(h.length);for(i=e(u)?Object(new u(m)):new Array(m),a=0;a<m;)p=h[a],i[a]=c?c.call(o,p,a):p,a++;i.length=m}return i}}()},function(e,n,t){"use strict";t(18);var r=t(6),o=t.n(r);Array.from||(Array.from=o.a),Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),t=n.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var r=arguments[1],o=0;o<t;){var i=n[o];if(e.call(r,i,o,n))return o;o++}return-1},configurable:!0,writable:!0})},function(e,n,t){"use strict";function r(e){var n=window.location.href,t=new RegExp("[?&]"+String(e)+"=([^&#]*)","i").exec(n);return t?t[1]:null}t.d(n,"a",function(){return r}),t(11)},function(e,n,t){"use strict";var r=t(11),o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"start",value:function(){this.startTime=window.performance.now()}},{key:"delta",value:function(){return window.performance.now()-this.startTime}}],[{key:"deltaFromDomLoaded",value:function(){var e=Object(r.a)(),n=e.performance.timing.domLoading-e.performance.timing.navigationStart;return e.performance.now()-n}},{key:"deltaFromDomLoadedInSeconds",value:function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).precision,t=void 0===n?2:n;return(e.deltaFromDomLoaded()/1e3).toFixed(t)}}]),e}();t.d(n,"a",function(){return u});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),u=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.prefix,r=void 0===t?"":t,o=n.isDebug,i=void 0!==o&&o;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._prefix=r,this.isDebug=i}return a(e,[{key:"debug",value:function(){if(this.isDebug){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];this._log.apply(this,["log"].concat(n))}}},{key:"info",value:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];this._log.apply(this,["info"].concat(n))}},{key:"warn",value:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];this._log.apply(this,["warn"].concat(n))}},{key:"error",value:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];this._log.apply(this,["error"].concat(n))}},{key:"_log",value:function(e){var n;if("undefined"!=typeof window){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];(n=console)[e].apply(n,function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(this._format.apply(this,r)))}}},{key:"_format",value:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=[].slice.call(n);return r.unshift("["+String(i.deltaFromDomLoadedInSeconds())+"s] ["+String(this._prefix)+"]:"),r}}]),e}()}]);