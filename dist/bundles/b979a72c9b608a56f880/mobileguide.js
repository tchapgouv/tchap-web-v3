!function(e){var r={};function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(r){return e[r]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=47)}({17:function(e,r,t){var o,n,i;n=[],void 0===(i="function"==typeof(o=function(){var e=XMLHttpRequest;if(!e)throw new Error("missing XMLHttpRequest");function r(i,a){if("function"!=typeof a)throw new Error("Bad callback given: "+a);if(!i)throw new Error("No options given");var s=i.onResponse;if((i="string"==typeof i?{uri:i}:JSON.parse(JSON.stringify(i))).onResponse=s,i.verbose&&(r.log=function(){var e,r,t={},i=["trace","debug","info","warn","error"];for(r=0;r<i.length;r++)t[e=i[r]]=o,"undefined"!=typeof console&&console&&console[e]&&(t[e]=n(console,e));return t}()),i.url&&(i.uri=i.url,delete i.url),!i.uri&&""!==i.uri)throw new Error("options.uri is a required argument");if("string"!=typeof i.uri)throw new Error("options.uri must be a string");for(var u=["proxy","_redirectsFollowed","maxRedirects","followRedirect"],d=0;d<u.length;d++)if(i[u[d]])throw new Error("options."+u[d]+" is not supported");if(i.callback=a,i.method=i.method||"GET",i.headers=i.headers||{},i.body=i.body||null,i.timeout=i.timeout||r.DEFAULT_TIMEOUT,i.headers.host)throw new Error("Options.headers.host is not supported");i.json&&(i.headers.accept=i.headers.accept||"application/json","GET"!==i.method&&(i.headers["content-type"]="application/json"),"boolean"!=typeof i.json?i.body=JSON.stringify(i.json):"string"!=typeof i.body&&(i.body=JSON.stringify(i.body)));var c=function(e){var r=[];for(var t in e)e.hasOwnProperty(t)&&r.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return r.join("&")};if(i.qs){var f="string"==typeof i.qs?i.qs:c(i.qs);-1!==i.uri.indexOf("?")?i.uri=i.uri+"&"+f:i.uri=i.uri+"?"+f}if(i.form){if("string"==typeof i.form)throw"form name unsupported";if("POST"===i.method){var l=(i.encoding||"application/x-www-form-urlencoded").toLowerCase();switch(i.headers["content-type"]=l,l){case"application/x-www-form-urlencoded":i.body=c(i.form).replace(/%20/g,"+");break;case"multipart/form-data":var p=function(e){var r={};r.boundry="-------------------------------"+Math.floor(1e9*Math.random());var t=[];for(var o in e)e.hasOwnProperty(o)&&t.push("--"+r.boundry+'\nContent-Disposition: form-data; name="'+o+'"\n\n'+e[o]+"\n");return t.push("--"+r.boundry+"--"),r.body=t.join(""),r.length=r.body.length,r.type="multipart/form-data; boundary="+r.boundry,r}(i.form);i.body=p.body,i.headers["content-type"]=p.type;break;default:throw new Error("unsupported encoding:"+l)}}}return i.onResponse=i.onResponse||o,!0===i.onResponse&&(i.onResponse=a,i.callback=o),!i.headers.authorization&&i.auth&&(i.headers.authorization="Basic "+function(e){var r,t,o,n,i,a,s,u,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c=0,f=0,l="",p=[];if(!e)return e;do{r=e.charCodeAt(c++),t=e.charCodeAt(c++),o=e.charCodeAt(c++),n=(u=r<<16|t<<8|o)>>18&63,i=u>>12&63,a=u>>6&63,s=63&u,p[f++]=d.charAt(n)+d.charAt(i)+d.charAt(a)+d.charAt(s)}while(c<e.length);switch(l=p.join(""),e.length%3){case 1:l=l.slice(0,-2)+"==";break;case 2:l=l.slice(0,-1)+"="}return l}(i.auth.username+":"+i.auth.password)),function(o){var n=new e,i=!1,a=function(e){var r,t=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/;try{r=location.href}catch(e){(r=document.createElement("a")).href="",r=r.href}var o=t.exec(r.toLowerCase())||[],n=t.exec(e.toLowerCase());return!(!n||n[1]==o[1]&&n[2]==o[2]&&(n[3]||("http:"===n[1]?80:443))==(o[3]||("http:"===o[1]?80:443)))}(o.uri),s="withCredentials"in n;if(t+=1,n.seq_id=t,n.id=t+": "+o.method+" "+o.uri,n._id=n.id,a&&!s){var u=new Error("Browser does not support cross-origin request: "+o.uri);return u.cors="unsupported",o.callback(u,n)}n.timeoutTimer=setTimeout((function(){i=!0;var e=new Error("ETIMEDOUT");return e.code="ETIMEDOUT",e.duration=o.timeout,r.log.error("Timeout",{id:n._id,milliseconds:o.timeout}),o.callback(e,n)}),o.timeout);var d={response:!1,loading:!1,end:!1};return n.onreadystatechange=function(t){if(i)return r.log.debug("Ignoring timed out state change",{state:n.readyState,id:n.id});if(r.log.debug("State change",{state:n.readyState,id:n.id,timed_out:i}),n.readyState===e.OPENED)for(var a in r.log.debug("Request started",{id:n.id}),o.headers)n.setRequestHeader(a,o.headers[a]);else n.readyState===e.HEADERS_RECEIVED?c():n.readyState===e.LOADING?(c(),f()):n.readyState===e.DONE&&(c(),f(),function(){if(d.end)return;if(d.end=!0,r.log.debug("Request done",{id:n.id}),n.body=n.responseText,o.json)try{n.body=JSON.parse(n.responseText)}catch(e){return o.callback(e,n)}o.callback(null,n,n.body)}())},n.open(o.method,o.uri,!0),a&&(n.withCredentials=!!o.withCredentials),n.send(o.body),n;function c(){if(!d.response){if(d.response=!0,r.log.debug("Got response",{id:n.id,status:n.status}),clearTimeout(n.timeoutTimer),n.statusCode=n.status,a&&0==n.statusCode){var e=new Error("CORS request rejected: "+o.uri);return e.cors="rejected",d.loading=!0,d.end=!0,o.callback(e,n)}o.onResponse(null,n)}}function f(){d.loading||(d.loading=!0,r.log.debug("Response body loading",{id:n.id}))}}(i)}r.log={trace:o,debug:o,info:o,warn:o,error:o};var t=0;function o(){}function n(e,r){return function(t,o){return"object"==typeof o&&(t+=" "+JSON.stringify(o)),e[r].call(e,t)}}return r.withCredentials=!1,r.DEFAULT_TIMEOUT=18e4,r.defaults=function(e,t){var o=function(r){return function(t,o){for(var n in t="string"==typeof t?{uri:t}:JSON.parse(JSON.stringify(t)),e)void 0===t[n]&&(t[n]=e[n]);return r(t,o)}},n=o(r);return n.get=o(r.get),n.post=o(r.post),n.put=o(r.put),n.head=o(r.head),n},["get","put","post","head"].forEach((function(e){var t=e.toUpperCase();r[e.toLowerCase()]=function(e){"string"==typeof e?e={method:t,uri:e}:(e=JSON.parse(JSON.stringify(e))).method=t;var o=[e].concat(Array.prototype.slice.apply(arguments,[1]));return r.apply(this,o)}})),r.couch=function(e,t){return"string"==typeof e&&(e={uri:e}),e.json=!0,e.body&&(e.json=e.body),delete e.body,t=t||o,r(e,(function(e,r,o){if(e)return t(e,r,o);if((r.statusCode<200||r.statusCode>299)&&o.error){for(var n in e=new Error("CouchDB error: "+(o.error.reason||o.error.error)),o)e[n]=o[n];return t(e,r,o)}return t(e,r,o)}))},r})?o.apply(r,n):o)||(e.exports=i)},37:function(e,r,t){"use strict";t.d(r,"a",(function(){return i}));var o=t(17),n=t.n(o);async function i(e=""){""===e||e.endsWith("/")||(e+="/");const r=a(`${e}config.${document.domain}.json`),t=a(e+"config.json");try{const e=await r;if(0===Object.keys(e).length)throw new Error;return e}catch(e){return await t}}function a(e){return new Promise((function(r,t){n()({method:"GET",url:e,qs:{cachebuster:Date.now()}},(e,o,n)=>{try{if(e||o.status<200||o.status>=300)return o&&(404==o.status||0==o.status&&""==n)&&r({}),void t({err:e,response:o});r(JSON.parse(n))}catch(e){t({err:e})}})}))}},47:function(e,r,t){"use strict";t.r(r);t(37);function o(){document.cookie="element_mobile_redirect_to_guide=false;path=/;max-age=14400",window.location.href="../"}!async function(){document.getElementById("back_to_element_button").onclick=o}()}});
//# sourceMappingURL=mobileguide.js.map