(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{18:function(e,n,t){e.exports=t(28)},23:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(14),r=t.n(i),c=(t(23),t(15)),l=t(5),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var d=Object(o.lazy)(function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,87))}),f=Object(o.lazy)(function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,89))}),h=Object(o.lazy)(function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,88))});r.a.render(a.a.createElement(c.a,null,a.a.createElement(o.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement("div",null,a.a.createElement(l.c,null,a.a.createElement(l.a,{exact:!0,path:"/",component:d}),a.a.createElement(l.a,{exact:!0,path:"/login",component:f}),a.a.createElement(l.a,{exact:!0,path:"/students",component:h}))))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/3tocorp_frontend",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/3tocorp_frontend","/service-worker.js");s?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):u(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):u(n,e)})}}()}},[[18,2,3]]]);
//# sourceMappingURL=main.9af443d3.chunk.js.map