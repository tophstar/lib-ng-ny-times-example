/*
 AngularJS v1.2.17
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(P,V,s){'use strict';function u(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.17/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function db(b){if(null==b||Da(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:C(b)||K(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(Q(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(db(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Wb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Sc(b,
a,c){for(var d=Wb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Xb(b){return function(a,c){b(c,a)}}function eb(){for(var b=ja.length,a;b;){b--;a=ja[b].charCodeAt(0);if(57==a)return ja[b]="A",ja.join("");if(90==a)ja[b]="0";else return ja[b]=String.fromCharCode(a+1),ja.join("")}ja.unshift("0");return ja.join("")}function Yb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function E(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});Yb(b,a);return b}function Y(b){return parseInt(b,
10)}function Zb(b,a){return E(new (E(function(){},{prototype:b})),a)}function w(){}function Ea(b){return b}function aa(b){return function(){return b}}function H(b){return"undefined"===typeof b}function z(b){return"undefined"!==typeof b}function U(b){return null!=b&&"object"===typeof b}function C(b){return"string"===typeof b}function zb(b){return"number"===typeof b}function Ma(b){return"[object Date]"===wa.call(b)}function K(b){return"[object Array]"===wa.call(b)}function Q(b){return"function"===typeof b}
function fb(b){return"[object RegExp]"===wa.call(b)}function Da(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Tc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Uc(b,a,c){var d=[];q(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Na(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Oa(b,a){var c=Na(b,a);0<=c&&b.splice(c,1);return a}function Fa(b,a,c,d){if(Da(b)||b&&b.$evalAsync&&b.$watch)throw Pa("cpws");
if(a){if(b===a)throw Pa("cpi");c=c||[];d=d||[];if(U(b)){var e=Na(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(K(b))for(var f=a.length=0;f<b.length;f++)e=Fa(b[f],null,c,d),U(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;q(a,function(b,c){delete a[c]});for(f in b)e=Fa(b[f],null,c,d),U(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e;Yb(a,g)}}else(a=b)&&(K(b)?a=Fa(b,[],c,d):Ma(b)?a=new Date(b.getTime()):fb(b)?a=RegExp(b.source):U(b)&&(a=Fa(b,{},c,d)));return a}function ka(b,a){if(K(b)){a=
a||[];for(var c=0;c<b.length;c++)a[c]=b[c]}else if(U(b))for(c in a=a||{},b)!Ab.call(b,c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a||b}function xa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(K(b)){if(!K(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!xa(b[d],a[d]))return!1;return!0}}else{if(Ma(b))return Ma(a)&&b.getTime()==a.getTime();if(fb(b)&&fb(a))return b.toString()==a.toString();if(b&&
b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Da(b)||Da(a)||K(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!Q(b[d])){if(!xa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!Q(a[d]))return!1;return!0}return!1}function $b(){return V.securityPolicy&&V.securityPolicy.isActive||V.querySelector&&!(!V.querySelector("[ng-csp]")&&!V.querySelector("[data-ng-csp]"))}function gb(b,a){var c=2<arguments.length?ya.call(arguments,2):[];return!Q(a)||a instanceof
RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(ya.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Vc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=s:Da(a)?c="$WINDOW":a&&V===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function qa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Vc,a?"  ":null)}function ac(b){return C(b)?JSON.parse(b):b}function Qa(b){"function"===typeof b?b=!0:
b&&0!==b.length?(b=J(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ha(b){b=y(b).clone();try{b.empty()}catch(a){}var c=y("<div>").append(b).html();try{return 3===b[0].nodeType?J(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+J(b)})}catch(d){return J(c)}}function bc(b){try{return decodeURIComponent(b)}catch(a){}}function cc(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=bc(c[0]),z(d)&&(b=z(c[1])?bc(c[1]):!0,
a[d]?K(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Bb(b){var a=[];q(b,function(b,d){K(b)?q(b,function(b){a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))}):a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))});return a.length?a.join("&"):""}function hb(b){return za(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function za(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Wc(b,
a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(g,function(a){g[a]=!0;c(V.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}
function dc(b,a){var c=function(){b=y(b);if(b.injector()){var c=b[0]===V?"document":ha(b);throw Pa("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=ec(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(P&&!d.test(P.name))return c();P.name=P.name.replace(d,"");Ra.resumeBootstrap=function(b){q(b,function(b){a.push(b)});
c()}}function ib(b,a){a=a||"_";return b.replace(Xc,function(b,d){return(d?a:"")+b.toLowerCase()})}function Cb(b,a,c){if(!b)throw Pa("areq",a||"?",c||"required");return b}function Sa(b,a,c){c&&K(b)&&(b=b[b.length-1]);Cb(Q(b),a,"not a function, got "+(b&&"object"==typeof b?b.constructor.name||"Object":typeof b));return b}function Aa(b,a){if("hasOwnProperty"===b)throw Pa("badname",a);}function fc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&
Q(b)?gb(e,b):b}function Db(b){var a=b[0];b=b[b.length-1];if(a===b)return y(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return y(c)}function Yc(b){var a=u("$injector"),c=u("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||u;return b.module||(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);
return n}}if(!f)throw a("nomod",e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);
return this}};g&&l(g);return n}())}}())}function Zc(b){E(b,{bootstrap:dc,copy:Fa,extend:E,equals:xa,element:y,forEach:q,injector:ec,noop:w,bind:gb,toJson:qa,fromJson:ac,identity:Ea,isUndefined:H,isDefined:z,isString:C,isFunction:Q,isObject:U,isNumber:zb,isElement:Tc,isArray:K,version:$c,isDate:Ma,lowercase:J,uppercase:Ga,callbacks:{counter:0},$$minErr:u,$$csp:$b});Ta=Yc(P);try{Ta("ngLocale")}catch(a){Ta("ngLocale",[]).provider("$locale",ad)}Ta("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:bd});
a.provider("$compile",gc).directive({a:cd,input:hc,textarea:hc,form:dd,script:ed,select:fd,style:gd,option:hd,ngBind:id,ngBindHtml:jd,ngBindTemplate:kd,ngClass:ld,ngClassEven:md,ngClassOdd:nd,ngCloak:od,ngController:pd,ngForm:qd,ngHide:rd,ngIf:sd,ngInclude:td,ngInit:ud,ngNonBindable:vd,ngPluralize:wd,ngRepeat:xd,ngShow:yd,ngStyle:zd,ngSwitch:Ad,ngSwitchWhen:Bd,ngSwitchDefault:Cd,ngOptions:Dd,ngTransclude:Ed,ngModel:Fd,ngList:Gd,ngChange:Hd,required:ic,ngRequired:ic,ngValue:Id}).directive({ngInclude:Jd}).directive(Eb).directive(jc);
a.provider({$anchorScroll:Kd,$animate:Ld,$browser:Md,$cacheFactory:Nd,$controller:Od,$document:Pd,$exceptionHandler:Qd,$filter:kc,$interpolate:Rd,$interval:Sd,$http:Td,$httpBackend:Ud,$location:Vd,$log:Wd,$parse:Xd,$rootScope:Yd,$q:Zd,$sce:$d,$sceDelegate:ae,$sniffer:be,$templateCache:ce,$timeout:de,$window:ee,$$rAF:fe,$$asyncCallback:ge})}])}function Ua(b){return b.replace(he,function(a,b,d,e){return e?d.toUpperCase():d}).replace(ie,"Moz$1")}function Fb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:
[this],m=a,k,l,n,p,r,A;if(!d||null!=b)for(;e.length;)for(k=e.shift(),l=0,n=k.length;l<n;l++)for(p=y(k[l]),m?p.triggerHandler("$destroy"):m=!m,r=0,p=(A=p.children()).length;r<p;r++)e.push(Ba(A[r]));return f.apply(this,arguments)}var f=Ba.fn[b],f=f.$original||f;e.$original=f;Ba.fn[b]=e}function M(b){if(b instanceof M)return b;C(b)&&(b=ba(b));if(!(this instanceof M)){if(C(b)&&"<"!=b.charAt(0))throw Gb("nosel");return new M(b)}if(C(b)){var a=b;b=V;var c;if(c=je.exec(a))b=[b.createElement(c[1])];else{var d=
b,e;b=d.createDocumentFragment();c=[];if(Hb.test(a)){d=b.appendChild(d.createElement("div"));e=(ke.exec(a)||["",""])[1].toLowerCase();e=da[e]||da._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(le,"<$1></$2>")+e[2];d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Ib(this,b);y(V.createDocumentFragment()).append(this)}else Ib(this,
b)}function Jb(b){return b.cloneNode(!0)}function Ha(b){lc(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ha(b[a])}function mc(b,a,c,d){if(z(d))throw Gb("offargs");var e=la(b,"events");la(b,"handle")&&(H(a)?q(e,function(a,c){Va(b,c,a);delete e[c]}):q(a.split(" "),function(a){H(c)?(Va(b,a,e[a]),delete e[a]):Oa(e[a]||[],c)}))}function lc(b,a){var c=b[jb],d=Wa[c];d&&(a?delete Wa[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),mc(b)),delete Wa[c],b[jb]=s))}function la(b,a,c){var d=
b[jb],d=Wa[d||-1];if(z(c))d||(b[jb]=d=++me,d=Wa[d]={}),d[a]=c;else return d&&d[a]}function nc(b,a,c){var d=la(b,"data"),e=z(c),f=!e&&z(a),g=f&&!U(a);d||g||la(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];E(d,a)}else return d}function Kb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function kb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",ba((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+ba(a)+" "," ")))})}function lb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=ba(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",ba(c))}}function Ib(b,a){if(a){a=a.nodeName||!z(a.length)||Da(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function oc(b,a){return mb(b,"$"+(a||"ngController")+"Controller")}function mb(b,a,c){b=y(b);9==b[0].nodeType&&(b=b.find("html"));for(a=K(a)?a:[a];b.length;){for(var d=
b[0],e=0,f=a.length;e<f;e++)if((c=b.data(a[e]))!==s)return c;b=y(d.parentNode||11===d.nodeType&&d.host)}}function pc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ha(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function qc(b,a){var c=nb[a.toLowerCase()];return c&&rc[b.nodeName]&&c}function ne(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||V);if(H(c.defaultPrevented)){var f=
c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=ka(a[e||c.type]||[]);q(g,function(a){a.call(b,c)});8>=S?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ia(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=
b.$$hashKey():c===s&&(c=b.$$hashKey=eb()):c=b;return a+":"+c}function Xa(b){q(b,this.put,this)}function sc(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(oe,""),c=c.match(pe),q(c[1].split(qe),function(b){b.replace(re,function(b,c,d){a.push(d)})})),b.$inject=a):K(b)?(c=b.length-1,Sa(b[c],"fn"),a=b.slice(0,c)):Sa(b,"fn",!0);return a}function ec(b){function a(a){return function(b,c){if(U(b))q(b,Xb(a));else return a(b,c)}}function c(a,b){Aa(a,"service");if(Q(b)||
K(b))b=n.instantiate(b);if(!b.$get)throw Ya("pget",a);return l[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,h;q(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(C(a))for(c=Ta(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,h=d.length;f<h;f++){var g=d[f],m=n.get(g[0]);m[g[1]].apply(m,g[2])}else Q(a)?b.push(n.invoke(a)):K(a)?b.push(n.invoke(a)):Sa(a,"module")}catch(l){throw K(a)&&(a=a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&
(l=l.message+"\n"+l.stack),Ya("modulerr",a,l.stack||l.message||l);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g)throw Ya("cdep",m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=g,a[d]=b(d)}catch(e){throw a[d]===g&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var f=[],h=sc(a),g,m,k;m=0;for(g=h.length;m<g;m++){k=h[m];if("string"!==typeof k)throw Ya("itkn",k);f.push(e&&e.hasOwnProperty(k)?e[k]:c(k))}a.$inject||(a=a[g]);return a.apply(b,f)}return{invoke:d,
instantiate:function(a,b){var c=function(){},e;c.prototype=(K(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return U(e)||Q(e)?e:c},get:c,annotate:sc,has:function(b){return l.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var g={},h="Provider",m=[],k=new Xa,l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,aa(b))}),constant:a(function(a,b){Aa(a,"constant");l[a]=b;p[a]=b}),decorator:function(a,
b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},n=l.$injector=f(l,function(){throw Ya("unpr",m.join(" <- "));}),p={},r=p.$injector=f(p,function(a){a=n.get(a+h);return r.invoke(a.$get,a)});q(e(b),function(a){r.invoke(a||w)});return r}function Kd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==J(a.nodeName)||(b=a)});return b}
function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function ge(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function se(b,a,c,d){function e(a){try{a.apply(null,ya.call(arguments,1))}finally{if(A--,0===A)for(;D.length;)try{D.pop()()}catch(b){c.error(b)}}}
function f(a,b){(function T(){q(x,function(a){a()});t=b(T,a)})()}function g(){v=null;N!=h.url()&&(N=h.url(),q(ma,function(a){a(h.url())}))}var h=this,m=a[0],k=b.location,l=b.history,n=b.setTimeout,p=b.clearTimeout,r={};h.isMock=!1;var A=0,D=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){A++};h.notifyWhenNoOutstandingRequests=function(a){q(x,function(a){a()});0===A?a():D.push(a)};var x=[],t;h.addPollFn=function(a){H(t)&&f(100,n);x.push(a);return a};var N=k.href,B=a.find("base"),
v=null;h.url=function(a,c){k!==b.location&&(k=b.location);l!==b.history&&(l=b.history);if(a){if(N!=a)return N=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),B.attr("href",B.attr("href"))):(v=a,c?k.replace(a):k.href=a),h}else return v||k.href.replace(/%27/g,"'")};var ma=[],L=!1;h.onUrlChange=function(a){if(!L){if(d.history)y(b).on("popstate",g);if(d.hashchange)y(b).on("hashchange",g);else h.addPollFn(g);L=!0}ma.push(a);return a};h.baseHref=function(){var a=B.attr("href");return a?
a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var O={},ca="",F=h.baseHref();h.cookies=function(a,b){var d,e,f,h;if(a)b===s?m.cookie=escape(a)+"=;path="+F+";expires=Thu, 01 Jan 1970 00:00:00 GMT":C(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+F).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==ca)for(ca=m.cookie,d=ca.split("; "),O={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,
h)),O[a]===s&&(O[a]=unescape(e.substring(h+1))));return O}};h.defer=function(a,b){var c;A++;c=n(function(){delete r[c];e(a)},b||0);r[c]=!0;return c};h.defer.cancel=function(a){return r[a]?(delete r[a],p(a),e(w),!0):!1}}function Md(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new se(b,d,a,c)}]}function Nd(){this.$get=function(){function b(b,d){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in
a)throw u("$cacheFactory")("iid",b);var g=0,h=E({},d,{id:b}),m={},k=d&&d.capacity||Number.MAX_VALUE,l={},n=null,p=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!H(b))return a in m||g++,m[a]=b,g>k&&this.remove(p.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete l[a]}delete m[a];g--},removeAll:function(){m=
{};g=0;l={};n=p=null},destroy:function(){l=h=m=null;delete a[b]},info:function(){return E({},h,{size:g})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function ce(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function gc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,g=/^(on[a-z]+|formaction)$/;this.directive=function m(a,e){Aa(a,"directive");C(a)?
(Cb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,f){try{var g=b.invoke(c);Q(g)?g={compile:aa(g)}:!g.compile&&g.link&&(g.compile=aa(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(m){d(m)}});return e}])),c[a].push(e)):q(a,Xb(m));return this};this.aHrefSanitizationWhitelist=function(b){return z(b)?(a.aHrefSanitizationWhitelist(b),
this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,n,p,r,A,D,x,t,N,B){function v(a,b,c,d,e){a instanceof y||(a=y(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=y(b).wrap("<span></span>").parent()[0])});
var f=L(a,b,a,c,d,e);ma(a,"ng-scope");return function(b,c,d){Cb(b,"scope");var e=c?Ja.clone.call(a):a;q(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var g=e.length;d<g;d++){var m=e[d].nodeType;1!==m&&9!==m||e.eq(d).data("$scope",b)}c&&c(e,b);f&&f(b,e,e);return e}}function ma(a,b){try{a.addClass(b)}catch(c){}}function L(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,r,n,p,A;f=c.length;var I=Array(f);for(n=0;n<f;n++)I[n]=c[n];A=n=0;for(p=m.length;n<p;A++)k=I[A],c=m[n++],f=m[n++],l=y(k),c?(c.scope?
(r=a.$new(),l.data("$scope",r)):r=a,(l=c.transclude)||!e&&b?c(f,r,k,d,O(a,l||b)):c(f,r,k,d,e)):f&&f(a,k.childNodes,s,e)}for(var m=[],k,l,r,n,p=0;p<a.length;p++)k=new Lb,l=ca(a[p],[],k,0===p?d:s,e),(f=l.length?ea(l,a[p],k,b,c,null,[],[],f):null)&&f.scope&&ma(y(a[p]),"ng-scope"),k=f&&f.terminal||!(r=a[p].childNodes)||!r.length?null:L(r,f?f.transclude:b),m.push(f,k),n=n||f||k,f=null;return n?g:null}function O(a,b){return function(c,d,e){var f=!1;c||(c=a.$new(),f=c.$$transcluded=!0);d=b(c,d,e);if(f)d.on("$destroy",
gb(c,c.$destroy));return d}}function ca(a,b,c,d,g){var m=c.$attr,k;switch(a.nodeType){case 1:T(b,na(Ka(a).toLowerCase()),"E",d,g);var l,r,n;k=a.attributes;for(var p=0,A=k&&k.length;p<A;p++){var x=!1,D=!1;l=k[p];if(!S||8<=S||l.specified){r=l.name;n=na(r);X.test(n)&&(r=ib(n.substr(6),"-"));var N=n.replace(/(Start|End)$/,"");n===N+"Start"&&(x=r,D=r.substr(0,r.length-5)+"end",r=r.substr(0,r.length-6));n=na(r.toLowerCase());m[n]=r;c[n]=l=ba(l.value);qc(a,n)&&(c[n]=!0);M(a,b,l,n);T(b,n,"A",d,g,x,D)}}a=
a.className;if(C(a)&&""!==a)for(;k=f.exec(a);)n=na(k[2]),T(b,n,"C",d,g)&&(c[n]=ba(k[3])),a=a.substr(k.index+k[0].length);break;case 3:u(b,a.nodeValue);break;case 8:try{if(k=e.exec(a.nodeValue))n=na(k[1]),T(b,n,"M",d,g)&&(c[n]=ba(k[2]))}catch(t){}}b.sort(H);return b}function F(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ia("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return y(d)}function R(a,
b,c){return function(d,e,f,g,k){e=F(e[0],b,c);return a(d,e,f,g,k)}}function ea(a,c,d,e,f,g,m,n,p){function x(a,b,c,d){if(a){c&&(a=R(a,c,d));a.require=G.require;a.directiveName=u;if(O===G||G.$$isolateScope)a=uc(a,{isolateScope:!0});m.push(a)}if(b){c&&(b=R(b,c,d));b.require=G.require;b.directiveName=u;if(O===G||G.$$isolateScope)b=uc(b,{isolateScope:!0});n.push(b)}}function D(a,b,c,d){var e,f="data",g=!1;if(C(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==
e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ia("ctreq",b,a);}else K(b)&&(e=[],q(b,function(b){e.push(D(a,b,c,d))}));return e}function N(a,e,f,g,p){function x(a,b){var c;2>arguments.length&&(b=a,a=s);E&&(c=ca);return p(a,b,c)}var t,I,v,B,R,F,ca={},ob;t=c===f?d:ka(d,new Lb(y(f),d.$attr));I=t.$$element;if(O){var T=/^\s*([@=&])(\??)\s*(\w*)\s*$/;g=y(f);F=e.$new(!0);!ea||ea!==O&&ea!==O.$$originalDirective?g.data("$isolateScopeNoTemplate",F):g.data("$isolateScope",F);
ma(g,"ng-isolate-scope");q(O.scope,function(a,c){var d=a.match(T)||[],f=d[3]||c,g="?"==d[2],d=d[1],m,l,n,p;F.$$isolateBindings[c]=d+f;switch(d){case "@":t.$observe(f,function(a){F[c]=a});t.$$observers[f].$$scope=e;t[f]&&(F[c]=b(t[f])(e));break;case "=":if(g&&!t[f])break;l=r(t[f]);p=l.literal?xa:function(a,b){return a===b};n=l.assign||function(){m=F[c]=l(e);throw ia("nonassign",t[f],O.name);};m=F[c]=l(e);F.$watch(function(){var a=l(e);p(a,F[c])||(p(a,m)?n(e,a=F[c]):F[c]=a);return m=a},null,l.literal);
break;case "&":l=r(t[f]);F[c]=function(a){return l(e,a)};break;default:throw ia("iscp",O.name,c,a);}})}ob=p&&x;L&&q(L,function(a){var b={$scope:a===O||a.$$isolateScope?F:e,$element:I,$attrs:t,$transclude:ob},c;R=a.controller;"@"==R&&(R=t[a.name]);c=A(R,b);ca[a.name]=c;E||I.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(v=m.length;g<v;g++)try{B=m[g],B(B.isolateScope?F:e,I,t,B.require&&D(B.directiveName,B.require,I,ca),ob)}catch(G){l(G,ha(I))}g=e;O&&(O.template||
null===O.templateUrl)&&(g=F);a&&a(g,f.childNodes,s,p);for(g=n.length-1;0<=g;g--)try{B=n[g],B(B.isolateScope?F:e,I,t,B.require&&D(B.directiveName,B.require,I,ca),ob)}catch(z){l(z,ha(I))}}p=p||{};for(var t=-Number.MAX_VALUE,B,L=p.controllerDirectives,O=p.newIsolateScopeDirective,ea=p.templateDirective,T=p.nonTlbTranscludeDirective,H=!1,E=p.hasElementTranscludeDirective,Z=d.$$element=y(c),G,u,W,Za=e,P,M=0,S=a.length;M<S;M++){G=a[M];var ra=G.$$start,X=G.$$end;ra&&(Z=F(c,ra,X));W=s;if(t>G.priority)break;
if(W=G.scope)B=B||G,G.templateUrl||(J("new/isolated scope",O,G,Z),U(W)&&(O=G));u=G.name;!G.templateUrl&&G.controller&&(W=G.controller,L=L||{},J("'"+u+"' controller",L[u],G,Z),L[u]=G);if(W=G.transclude)H=!0,G.$$tlb||(J("transclusion",T,G,Z),T=G),"element"==W?(E=!0,t=G.priority,W=F(c,ra,X),Z=d.$$element=y(V.createComment(" "+u+": "+d[u]+" ")),c=Z[0],pb(f,y(ya.call(W,0)),c),Za=v(W,e,t,g&&g.name,{nonTlbTranscludeDirective:T})):(W=y(Jb(c)).contents(),Z.empty(),Za=v(W,e));if(G.template)if(J("template",
ea,G,Z),ea=G,W=Q(G.template)?G.template(Z,d):G.template,W=Y(W),G.replace){g=G;W=Hb.test(W)?y(ba(W)):[];c=W[0];if(1!=W.length||1!==c.nodeType)throw ia("tplrt",u,"");pb(f,Z,c);S={$attr:{}};W=ca(c,[],S);var $=a.splice(M+1,a.length-(M+1));O&&tc(W);a=a.concat(W).concat($);z(d,S);S=a.length}else Z.html(W);if(G.templateUrl)J("template",ea,G,Z),ea=G,G.replace&&(g=G),N=w(a.splice(M,a.length-M),Z,d,f,Za,m,n,{controllerDirectives:L,newIsolateScopeDirective:O,templateDirective:ea,nonTlbTranscludeDirective:T}),
S=a.length;else if(G.compile)try{P=G.compile(Z,d,Za),Q(P)?x(null,P,ra,X):P&&x(P.pre,P.post,ra,X)}catch(aa){l(aa,ha(Z))}G.terminal&&(N.terminal=!0,t=Math.max(t,G.priority))}N.scope=B&&!0===B.scope;N.transclude=H&&Za;p.hasElementTranscludeDirective=E;return N}function tc(a){for(var b=0,c=a.length;b<c;b++)a[b]=Zb(a[b],{$$isolateScope:!0})}function T(b,e,f,g,k,r,n){if(e===k)return null;k=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var A=0,x=e.length;A<x;A++)try{p=e[A],(g===s||g>p.priority)&&-1!=
p.restrict.indexOf(f)&&(r&&(p=Zb(p,{$$start:r,$$end:n})),b.push(p),k=p)}catch(D){l(D)}}return k}function z(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(ma(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function w(a,b,
c,d,e,f,g,k){var m=[],l,r,A=b[0],x=a.shift(),D=E({},x,{templateUrl:null,transclude:null,replace:null,$$originalDirective:x}),N=Q(x.templateUrl)?x.templateUrl(b,c):x.templateUrl;b.empty();n.get(t.getTrustedResourceUrl(N),{cache:p}).success(function(n){var p,t;n=Y(n);if(x.replace){n=Hb.test(n)?y(ba(n)):[];p=n[0];if(1!=n.length||1!==p.nodeType)throw ia("tplrt",x.name,N);n={$attr:{}};pb(d,b,p);var v=ca(p,[],n);U(x.scope)&&tc(v);a=v.concat(a);z(c,n)}else p=A,b.html(n);a.unshift(D);l=ea(a,p,c,e,b,x,f,g,
k);q(d,function(a,c){a==p&&(d[c]=b[0])});for(r=L(b[0].childNodes,e);m.length;){n=m.shift();t=m.shift();var B=m.shift(),R=m.shift(),v=b[0];if(t!==A){var F=t.className;k.hasElementTranscludeDirective&&x.replace||(v=Jb(p));pb(B,y(t),v);ma(y(v),F)}t=l.transclude?O(n,l.transclude):R;l(r,n,v,d,t)}m=null}).error(function(a,b,c,d){throw ia("tpload",d.url);});return function(a,b,c,d,e){m?(m.push(b),m.push(c),m.push(d),m.push(e)):l(r,b,c,d,e)}}function H(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==
b.name?a.name<b.name?-1:1:a.index-b.index}function J(a,b,c,d){if(b)throw ia("multidir",b.name,c.name,a,ha(d));}function u(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:aa(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);ma(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function P(a,b){if("srcdoc"==b)return t.HTML;var c=Ka(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return t.RESOURCE_URL}function M(a,c,d,e){var f=
b(d,!0);if(f){if("multiple"===e&&"SELECT"===Ka(a))throw ia("selmulti",ha(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers={});if(g.test(e))throw ia("nodomevents");if(f=b(m[e],!0,P(a,e)))m[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,a)})}}}})}}function pb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,m;if(a)for(g=0,m=a.length;g<m;g++)if(a[g]==
d){a[g++]=c;m=g+e-1;for(var k=a.length;g<k;g++,m++)m<k?a[g]=a[m]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=V.createDocumentFragment();a.appendChild(d);c[y.expando]=d[y.expando];d=1;for(e=b.length;d<e;d++)f=b[d],y(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function uc(a,b){return E(function(){return a.apply(null,arguments)},a,b)}var Lb=function(a,b){this.$$element=a;this.$attr=b||{}};Lb.prototype={$normalize:na,$addClass:function(a){a&&0<a.length&&N.addClass(this.$$element,
a)},$removeClass:function(a){a&&0<a.length&&N.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=vc(a,b),d=vc(b,a);0===c.length?N.removeClass(this.$$element,d):0===d.length?N.addClass(this.$$element,c):N.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=qc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=ib(a,"-"));e=Ka(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=B(b,"src"===a);!1!==
c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);D.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var Z=b.startSymbol(),ra=b.endSymbol(),Y="{{"==Z||"}}"==ra?Ea:function(a){return a.replace(/\{\{/g,Z).replace(/}}/g,ra)},X=/^ngAttr[A-Z]/;return v}]}function na(b){return Ua(b.replace(te,""))}function vc(b,
a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Od(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Aa(a,"controller");U(a)?E(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,h,m;C(e)&&(g=e.match(a),h=g[1],m=g[3],e=b.hasOwnProperty(h)?b[h]:fc(f.$scope,h,!0)||fc(d,h,!0),Sa(e,h,!0));g=c.instantiate(e,f);if(m){if(!f||"object"!=
typeof f.$scope)throw u("$controller")("noscp",h||e.name,m);f.$scope[m]=g}return g}}]}function Pd(){this.$get=["$window",function(b){return y(b.document)}]}function Qd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function wc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=J(ba(b.substr(0,e)));d=ba(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function xc(b){var a=U(b)?b:s;return function(c){a||(a=wc(b));return c?a[J(c)]||
null:a}}function yc(b,a,c){if(Q(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function Td(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){C(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=ac(d)));return d}],transformRequest:[function(a){return U(a)&&"[object File]"!==wa.call(a)&&"[object Blob]"!==wa.call(a)?qa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ka(d),
put:ka(d),patch:ka(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function r(a){function c(a){var b=E({},a,{data:yc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?b:n.reject(b)}var d={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},f=function(a){function b(a){var c;
q(a,function(b,d){Q(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=E({},a.headers),f,g,c=E({},c.common,c[J(a.method)]);b(c);b(d);a:for(f in c){a=J(f);for(g in d)if(J(g)===a)continue a;d[f]=c[f]}return d}(a);E(d,a);d.headers=f;d.method=Ga(d.method);(a=Mb(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:s)&&(f[d.xsrfHeaderName||e.xsrfHeaderName]=a);var g=[function(a){f=a.headers;var b=yc(a.data,xc(f),a.transformRequest);H(a.data)&&q(f,function(a,b){"content-type"===J(b)&&delete f[b]});
H(a.withCredentials)&&!H(e.withCredentials)&&(a.withCredentials=e.withCredentials);return A(a,b,f).then(c,c)},s],h=n.when(d);for(q(t,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){a=g.shift();var k=g.shift(),h=h.then(a,k)}h.success=function(a){h.then(function(b){a(b.data,b.status,b.headers,d)});return h};h.error=function(a){h.then(null,function(b){a(b.data,b.status,b.headers,d)});return h};
return h}function A(b,c,f){function g(a,b,c,e){t&&(200<=a&&300>a?t.put(s,[a,b,wc(c),e]):t.remove(s));m(b,a,c,e);d.$$phase||d.$apply()}function m(a,c,d,e){c=Math.max(c,0);(200<=c&&300>c?p.resolve:p.reject)({data:a,status:c,headers:xc(d),config:b,statusText:e})}function k(){var a=Na(r.pendingRequests,b);-1!==a&&r.pendingRequests.splice(a,1)}var p=n.defer(),A=p.promise,t,q,s=D(b.url,b.params);r.pendingRequests.push(b);A.then(k,k);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(t=U(b.cache)?b.cache:
U(e.cache)?e.cache:x);if(t)if(q=t.get(s),z(q)){if(q.then)return q.then(k,k),q;K(q)?m(q[1],q[0],ka(q[2]),q[3]):m(q,200,{},"OK")}else t.put(s,A);H(q)&&a(b.method,s,c,g,f,b.timeout,b.withCredentials,b.responseType);return A}function D(a,b){if(!b)return a;var c=[];Sc(b,function(a,b){null===a||H(a)||(K(a)||(a=[a]),q(a,function(a){U(a)&&(a=qa(a));c.push(za(b)+"="+za(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var x=c("$http"),t=[];q(f,function(a){t.unshift(C(a)?p.get(a):
p.invoke(a))});q(g,function(a,b){var c=C(a)?p.get(a):p.invoke(a);t.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});r.pendingRequests=[];(function(a){q(arguments,function(a){r[a]=function(b,c){return r(E(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){r[a]=function(b,c,d){return r(E(d||{},{method:a,url:b,data:c}))}})})("post","put");r.defaults=e;return r}]}function ue(b){if(8>=S&&(!b.match(/^(get|post|head|put|delete|options)$/i)||
!P.XMLHttpRequest))return new P.ActiveXObject("Microsoft.XMLHTTP");if(P.XMLHttpRequest)return new P.XMLHttpRequest;throw u("$httpBackend")("noxhr");}function Ud(){this.$get=["$browser","$window","$document",function(b,a,c){return ve(b,ue,b.defer,a.angular.callbacks,c[0])}]}function ve(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),g=null;f.type="text/javascript";f.src=a;f.async=!0;g=function(a){Va(f,"load",g);Va(f,"error",g);e.body.removeChild(f);f=null;var h=-1,A="unknown";a&&("load"!==
a.type||d[b].called||(a={type:"error"}),A=a.type,h="error"===a.type?404:200);c&&c(h,A)};qb(f,"load",g);qb(f,"error",g);8>=S&&(f.onreadystatechange=function(){C(f.readyState)&&/loaded|complete/.test(f.readyState)&&(f.onreadystatechange=null,g({type:"load"}))});e.body.appendChild(f);return g}var g=-1;return function(e,m,k,l,n,p,r,A){function D(){t=g;B&&B();v&&v.abort()}function x(a,d,e,f,g){L&&c.cancel(L);B=v=null;0===d&&(d=e?200:"file"==sa(m).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(w)}
var t;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==J(e)){var N="_"+(d.counter++).toString(36);d[N]=function(a){d[N].data=a;d[N].called=!0};var B=f(m.replace("JSON_CALLBACK","angular.callbacks."+N),N,function(a,b){x(l,a,d[N].data,"",b);d[N]=w})}else{var v=a(e);v.open(e,m,!0);q(n,function(a,b){z(a)&&v.setRequestHeader(b,a)});v.onreadystatechange=function(){if(v&&4==v.readyState){var a=null,b=null;t!==g&&(a=v.getAllResponseHeaders(),b="response"in v?v.response:v.responseText);x(l,t||v.status,
b,a,v.statusText||"")}};r&&(v.withCredentials=!0);if(A)try{v.responseType=A}catch(s){if("json"!==A)throw s;}v.send(k||null)}if(0<p)var L=c(D,p);else p&&p.then&&p.then(D)}}function Rd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,k,l){for(var n,p,r=0,A=[],D=f.length,x=!1,t=[];r<D;)-1!=(n=f.indexOf(b,r))&&-1!=(p=f.indexOf(a,n+g))?(r!=n&&A.push(f.substring(r,
n)),A.push(r=c(x=f.substring(n+g,p))),r.exp=x,r=p+h,x=!0):(r!=D&&A.push(f.substring(r)),r=D);(D=A.length)||(A.push(""),D=1);if(l&&1<A.length)throw zc("noconcat",f);if(!k||x)return t.length=D,r=function(a){try{for(var b=0,c=D,g;b<c;b++){if("function"==typeof(g=A[b]))if(g=g(a),g=l?e.getTrusted(l,g):e.valueOf(g),null==g)g="";else switch(typeof g){case "string":break;case "number":g=""+g;break;default:g=qa(g)}t[b]=g}return t.join("")}catch(h){a=zc("interr",f,h.toString()),d(a)}},r.exp=f,r.parts=A,r}var g=
b.length,h=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Sd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,h,m){var k=a.setInterval,l=a.clearInterval,n=c.defer(),p=n.promise,r=0,A=z(m)&&!m;h=z(h)?h:0;p.then(null,null,d);p.$$intervalId=k(function(){n.notify(r++);0<h&&r>=h&&(n.resolve(r),l(p.$$intervalId),delete e[p.$$intervalId]);A||b.$apply()},g);e[p.$$intervalId]=n;return p}var e={};d.cancel=function(a){return a&&a.$$intervalId in
e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function ad(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Nb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=
hb(b[a]);return b.join("/")}function Ac(b,a,c){b=sa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=Y(b.port)||we[b.protocol]||null}function Bc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=sa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=cc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function oa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function $a(b){var a=
b.indexOf("#");return-1==a?b:b.substr(0,a)}function Ob(b){return b.substr(0,$a(b).lastIndexOf("/")+1)}function Cc(b,a){this.$$html5=!0;a=a||"";var c=Ob(b);Ac(b,this,b);this.$$parse=function(a){var e=oa(c,a);if(!C(e))throw Pb("ipthprfx",a,c);Bc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Bb(this.$$search),b=this.$$hash?"#"+hb(this.$$hash):"";this.$$url=Nb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;
if((e=oa(b,d))!==s)return d=e,(e=oa(a,e))!==s?c+(oa("/",e)||e):b+d;if((e=oa(c,d))!==s)return c+e;if(c==d+"/")return c}}function Qb(b,a){var c=Ob(b);Ac(b,this,b);this.$$parse=function(d){var e=oa(b,d)||oa(c,d),e="#"==e.charAt(0)?oa(a,e):this.$$html5?e:"";if(!C(e))throw Pb("ihshprfx",d,a);Bc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Bb(this.$$search),e=this.$$hash?
"#"+hb(this.$$hash):"";this.$$url=Nb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if($a(b)==$a(a))return a}}function Rb(b,a){this.$$html5=!0;Qb.apply(this,arguments);var c=Ob(b);this.$$rewrite=function(d){var e;if(b==$a(d))return d;if(e=oa(c,d))return b+a+e;if(c===d+"/")return c};this.$$compose=function(){var c=Bb(this.$$search),e=this.$$hash?"#"+hb(this.$$hash):"";this.$$url=Nb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function rb(b){return function(){return this[b]}}
function Dc(b,a){return function(c){if(H(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Vd(){var b="",a=!1;this.hashPrefix=function(a){return z(a)?(b=a,this):b};this.html5Mode=function(b){return z(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,m,k=d.baseHref(),l=d.url(),n;a?(n=l.substring(0,l.indexOf("/",l.indexOf("//")+2))+(k||"/"),m=e.history?Cc:Rb):(n=
$a(l),m=Qb);h=new m(n,"#"+b);h.$$parse(h.$$rewrite(l));f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var e=y(a.target);"a"!==J(e[0].nodeName);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href");U(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=sa(g.animVal).href);if(m===Rb){var k=e.attr("href")||e.attr("xlink:href");if(0>k.indexOf("://"))if(g="#"+b,"/"==k[0])g=n+g+k;else if("#"==k[0])g=n+g+(h.path()||"/")+k;else{for(var l=h.path().split("/"),k=k.split("/"),p=
0;p<k.length;p++)"."!=k[p]&&(".."==k[p]?l.pop():k[p].length&&l.push(k[p]));g=n+g+l.join("/")}}l=h.$$rewrite(g);g&&(!e.attr("target")&&l&&!a.isDefaultPrevented())&&(a.preventDefault(),l!=d.url()&&(h.$$parse(l),c.$apply(),P.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=l&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});
var p=0;c.$watch(function(){var a=d.url(),b=h.$$replace;p&&a==h.absUrl()||(p++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),g(a))}));h.$$replace=!1;return p});return h}]}function Wd(){var b=!0,a=this;this.debugEnabled=function(a){return z(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||w;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function fa(b,a){if("constructor"===b)throw Ca("isecfld",a);return b}function ab(b,a){if(b){if(b.constructor===
b)throw Ca("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw Ca("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw Ca("isecdom",a);}return b}function sb(b,a,c,d,e){e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=fa(a.shift(),d);var h=b[f];h||(h={},b[f]=h);b=h;b.then&&e.unwrapPromises&&(ta(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}f=fa(a.shift(),d);return b[f]=c}function Ec(b,a,c,d,e,f,g){fa(b,f);fa(a,f);
fa(c,f);fa(d,f);fa(e,f);return g.unwrapPromises?function(g,m){var k=m&&m.hasOwnProperty(b)?m:g,l;if(null==k)return k;(k=k[b])&&k.then&&(ta(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!a)return k;if(null==k)return s;(k=k[a])&&k.then&&(ta(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!c)return k;if(null==k)return s;(k=k[c])&&k.then&&(ta(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!d)return k;if(null==k)return s;(k=k[d])&&k.then&&
(ta(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!e)return k;if(null==k)return s;(k=k[e])&&k.then&&(ta(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);return k}:function(f,g){var k=g&&g.hasOwnProperty(b)?g:f;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return s;k=k[a];if(!c)return k;if(null==k)return s;k=k[c];if(!d)return k;if(null==k)return s;k=k[d];return e?null==k?s:k=k[e]:k}}function xe(b,a){fa(b,a);return function(a,d){return null==a?s:(d&&d.hasOwnProperty(b)?
d:a)[b]}}function ye(b,a,c){fa(b,c);fa(a,c);return function(c,e){if(null==c)return s;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==c?s:c[a]}}function Fc(b,a,c){if(Sb.hasOwnProperty(b))return Sb[b];var d=b.split("."),e=d.length,f;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)f=6>e?Ec(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var g=0,h;do h=Ec(d[g++],d[g++],d[g++],d[g++],d[g++],c,a)(b,f),f=s,b=h;while(g<e);return h};else{var g="var p;\n";q(d,function(b,d){fa(b,c);g+="if(s == null) return undefined;\ns="+
(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var g=g+"return s;",h=new Function("s","k","pw",g);h.toString=aa(g);f=a.unwrapPromises?function(a,b){return h(a,b,ta)}:h}else f=ye(d[0],d[1],c);else f=xe(d[0],c);"hasOwnProperty"!==b&&(Sb[b]=f);return f}function Xd(){var b={},a={csp:!1,unwrapPromises:!1,
logPromiseWarnings:!0};this.unwrapPromises=function(b){return z(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return z(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;ta=function(b){a.logPromiseWarnings&&!Gc.hasOwnProperty(b)&&(Gc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;
switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Tb(a);e=(new bb(e,c,a)).parse(d);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return w}}}]}function Zd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return ze(function(a){b.$evalAsync(a)},a)}]}function ze(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],k,l;return l={resolve:function(a){if(g){var c=g;g=s;k=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<
d;b++)a=c[b],k.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(h(a))},notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,h){var l=e(),D=function(d){try{l.resolve((Q(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},x=function(b){try{l.resolve((Q(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},t=function(b){try{l.notify((Q(h)?h:c)(b))}catch(d){a(d)}};g?g.push([D,x,t]):k.then(D,x,t);return l.promise},"catch":function(a){return this.then(null,
a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,!1)}return g&&Q(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&Q(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(f,
g){var h=e();b(function(){try{h.resolve((Q(g)?g:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:g,when:function(h,k,l,n){var p=e(),r,A=function(b){try{return(Q(k)?k:c)(b)}catch(d){return a(d),g(d)}},D=function(b){try{return(Q(l)?l:d)(b)}catch(c){return a(c),g(c)}},x=function(b){try{return(Q(n)?n:c)(b)}catch(d){a(d)}};b(function(){f(h).then(function(a){r||(r=!0,p.resolve(f(a).then(A,D,x)))},function(a){r||(r=!0,p.resolve(D(a)))},function(a){r||p.notify(x(a))})});return p.promise},
all:function(a){var b=e(),c=0,d=K(a)?[]:{};q(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function fe(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?
function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Yd(){var b=10,a=u("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function h(){this.$id=eb();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;
this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function k(a,b){var c=f(a);Sa(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=
this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=eb();this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,
b,d){var e=k(a,"watch"),f=this.$$watchers,g={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!Q(b)){var h=k(b||w,"listener");g.fn=function(a,b,c){h(c)}}if("string"==typeof a&&e.constant){var m=g.fn;g.fn=function(a,b,c){m.call(this,a,b,c);Oa(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Oa(f,g);c=null}},$watchCollection:function(a,b){var c=this,d,e,g,h=1<b.length,k=0,m=f(a),l=[],n={},p=!0,q=0;return this.$watch(function(){d=m(c);var a,b;if(U(d))if(db(d))for(e!==l&&(e=l,q=e.length=0,k++),
a=d.length,q!==a&&(k++,e.length=q=a),b=0;b<a;b++)e[b]!==e[b]&&d[b]!==d[b]||e[b]===d[b]||(k++,e[b]=d[b]);else{e!==n&&(e=n={},q=0,k++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?e[b]!==d[b]&&(k++,e[b]=d[b]):(q++,e[b]=d[b],k++));if(q>a)for(b in k++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(q--,delete e[b])}else e!==d&&(e=d,k++);return k},function(){p?(p=!1,b(d,d,c)):b(d,g,c);if(h)if(U(d))if(db(d)){g=Array(d.length);for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g={},d)Ab.call(d,
a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,f,g,h,k=this.$$asyncQueue,l=this.$$postDigestQueue,q,v,s=b,L,O=[],y,F,R;m("$digest");c=null;do{v=!1;for(L=this;k.length;){try{R=k.shift(),R.scope.$eval(R.expression)}catch(z){p.$$phase=null,e(z)}c=null}a:do{if(h=L.$$watchers)for(q=h.length;q--;)try{if(d=h[q])if((f=d.get(L))!==(g=d.last)&&!(d.eq?xa(f,g):"number"==typeof f&&"number"==typeof g&&isNaN(f)&&isNaN(g)))v=!0,c=d,d.last=d.eq?Fa(f,null):f,d.fn(f,g===n?f:g,L),5>s&&(y=4-s,O[y]||(O[y]=[]),F=
Q(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,F+="; newVal: "+qa(f)+"; oldVal: "+qa(g),O[y].push(F));else if(d===c){v=!1;break a}}catch(C){p.$$phase=null,e(C)}if(!(h=L.$$childHead||L!==this&&L.$$nextSibling))for(;L!==this&&!(h=L.$$nextSibling);)L=L.$parent}while(L=h);if((v||k.length)&&!s--)throw p.$$phase=null,a("infdig",b,qa(O));}while(v||k.length);for(p.$$phase=null;l.length;)try{l.shift()()}catch(T){e(T)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");
this.$$destroyed=!0;this!==p&&(q(this.$$listenerCount,gb(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=
[],this.$destroy=this.$digest=this.$apply=w,this.$on=this.$watch=function(){return w})}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){p.$$phase||p.$$asyncQueue.length||g.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,
b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[Na(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=[h].concat(ya.call(arguments,1)),m,l;do{d=f.$$listeners[a]||c;h.currentScope=f;m=0;for(l=d.length;m<l;m++)if(d[m])try{d[m].apply(null,
k)}catch(n){e(n)}else d.splice(m,1),m--,l--;if(g)break;f=f.$parent}while(f);return h},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(ya.call(arguments,1)),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(m){e(m)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=
c.$$nextSibling);)c=c.$parent}return f}};var p=new h;return p}]}function bd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return z(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!S||8<=S)if(f=sa(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Ae(b){if("self"===b)return b;if(C(b)){if(-1<b.indexOf("***"))throw ua("iwcard",
b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(fb(b))return RegExp("^"+b.source+"$");throw ua("imatcher");}function Hc(b){var a=[];z(b)&&q(b,function(b){a.push(Ae(b))});return a}function ae(){this.SCE_CONTEXTS=ga;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Hc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Hc(b));return a};this.$get=
["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ua("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[ga.HTML]=d(f);g[ga.CSS]=d(f);g[ga.URL]=d(f);g[ga.JS]=d(f);g[ga.RESOURCE_URL]=d(g[ga.URL]);return{trustAs:function(a,b){var c=
g.hasOwnProperty(a)?g[a]:null;if(!c)throw ua("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw ua("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===ga.RESOURCE_URL){var f=sa(d.toString()),l,n,p=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Mb(f):b[l].exec(f.href)){p=!0;break}if(p)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Mb(f):a[l].exec(f.href)){p=
!1;break}if(p)return d;throw ua("insecurl",d.toString());}if(c===ga.HTML)return e(d);throw ua("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function $d(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ua("iequirks");var e=ka(ga);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=
e.getTrusted=function(a,b){return b},e.valueOf=Ea);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;q(ga,function(a,b){var c=J(b);e[Ua("parse_as_"+c)]=function(b){return f(a,b)};e[Ua("get_trusted_"+c)]=function(b){return g(a,b)};e[Ua("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function be(){this.$get=["$window","$document",function(b,a){var c={},d=Y((/android (\d+)/.exec(J((b.navigator||
{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g=f.documentMode,h,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,n=!1;if(k){for(var p in k)if(l=m.exec(p)){h=l[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||h+"Transition"in k);n=!!("animation"in k||h+"Animation"in k);!d||l&&n||(l=C(f.body.style.webkitTransition),n=C(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||
4>d||e),hashchange:"onhashchange"in b&&(!g||7<g),hasEvent:function(a){if("input"==a&&9==S)return!1;if(H(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:$b(),vendorPrefix:h,transitions:l,animations:n,android:d,msie:S,msieDocumentMode:g}}]}function de(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,m){var k=c.defer(),l=k.promise,n=z(m)&&!m;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete f[l.$$timeoutId]}n||
b.$apply()},h);l.$$timeoutId=h;f[h]=k;return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function sa(b,a){var c=b;S&&(X.setAttribute("href",c),c=X.href);X.setAttribute("href",c);return{href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,port:X.port,
pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function Mb(b){b=C(b)?sa(b):b;return b.protocol===Ic.protocol&&b.host===Ic.host}function ee(){this.$get=aa(P)}function kc(b){function a(d,e){if(U(d)){var f={};q(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Jc);a("date",Kc);a("filter",Be);a("json",Ce);a("limitTo",De);a("lowercase",Ee);a("number",Lc);a("orderBy",
Mc);a("uppercase",Fe)}function Be(){return function(b,a,c){if(!K(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ra.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Ab.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&
"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!=typeof a[b]&&e.push(function(c){return f("$"==
b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=b[g];e.check(h)&&d.push(h)}return d}}function Jc(b){var a=b.NUMBER_FORMATS;return function(b,d){H(d)&&(d=a.CURRENCY_SYM);return Nc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Lc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Nc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Nc(b,a,c,d,e){if(null==b||!isFinite(b)||U(b))return"";var f=0>b;
b=Math.abs(b);var g=b+"",h="",m=[],k=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>e+1?g="0":(h=g,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{g=(g.split(Oc)[1]||"").length;H(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));g=Math.pow(10,e+1);b=Math.floor(b*g+5)/g;b=(""+b).split(Oc);g=b[0];b=b[1]||"";var l=0,n=a.lgSize,p=a.gSize;if(g.length>=n+p)for(l=g.length-n,k=0;k<l;k++)0===(l-k)%p&&0!==k&&(h+=c),h+=g.charAt(k);for(k=l;k<g.length;k++)0===(g.length-k)%
n&&0!==k&&(h+=c),h+=g.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}m.push(f?a.negPre:a.posPre);m.push(h);m.push(f?a.negSuf:a.posSuf);return m.join("")}function Ub(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Ub(e,a,d)}}function tb(b,a){return function(c,d){var e=c["get"+b](),f=Ga(a?"SHORT"+b:b);return d[f][e]}}
function Kc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Y(b[9]+b[10]),g=Y(b[9]+b[11]));h.call(a,Y(b[1]),Y(b[2])-1,Y(b[3]));f=Y(b[4]||0)-f;g=Y(b[5]||0)-g;h=Y(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],h,m;e=e||"mediumDate";
e=b.DATETIME_FORMATS[e]||e;C(c)&&(c=Ge.test(c)?Y(c):a(c));zb(c)&&(c=new Date(c));if(!Ma(c))return c;for(;e;)(m=He.exec(e))?(g=g.concat(ya.call(m,1)),e=g.pop()):(g.push(e),e=null);q(g,function(a){h=Ie[a];f+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function Ce(){return function(b){return qa(b,!0)}}function De(){return function(b,a){if(!K(b)&&!C(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):Y(a);if(C(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):
"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Mc(b){return function(a,c,d){function e(a,b){return Qa(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?("string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!K(a)||!c)return a;c=K(c)?c:[c];c=Uc(c,function(a){var c=!1,d=a||Ea;if(C(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),
a=a.substring(1);d=b(a);if(d.constant){var g=d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],h=0;h<a.length;h++)g.push(a[h]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function va(b){Q(b)&&(b={link:b});b.restrict=b.restrict||"AC";return aa(b)}function Pc(b,a,c,d){function e(a,c){c=c?"-"+ib(c,"-"):"";d.removeClass(b,(a?ub:vb)+c);d.addClass(b,(a?vb:ub)+c)}var f=this,g=b.parent().controller("form")||
wb,h=0,m=f.$error={},k=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(La);e(!0);f.$addControl=function(a){Aa(a.$name,"input");k.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(m,function(b,c){f.$setValidity(c,!0,a)});Oa(k,a)};f.$setValidity=function(a,b,c){var d=m[a];if(b)d&&(Oa(d,c),d.length||(h--,h||(e(b),f.$valid=!0,f.$invalid=!1),m[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{h||
e(b);if(d){if(-1!=Na(d,c))return}else m[a]=d=[],h++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,La);d.addClass(b,xb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,xb);d.addClass(b,La);f.$dirty=!1;f.$pristine=!0;q(k,function(a){a.$setPristine()})}}function pa(b,a,c,d){b.$setValidity(a,c);return c?d:s}function Je(b,a,c){var d=c.prop("validity");U(d)&&b.$parsers.push(function(c){if(b.$error[a]||!(d.badInput||
d.customError||d.typeMismatch)||d.valueMissing)return c;b.$setValidity(a,!1)})}function yb(b,a,c,d,e,f){var g=a.prop("validity"),h=a[0].placeholder,m={};if(!e.android){var k=!1;a.on("compositionstart",function(a){k=!0});a.on("compositionend",function(){k=!1;l()})}var l=function(e){if(!k){var f=a.val();if(S&&"input"===(e||m).type&&a[0].placeholder!==h)h=a[0].placeholder;else if(Qa(c.ngTrim||"T")&&(f=ba(f)),d.$viewValue!==f||g&&""===f&&!g.valueMissing)b.$$phase?d.$setViewValue(f):b.$apply(function(){d.$setViewValue(f)})}};
if(e.hasEvent("input"))a.on("input",l);else{var n,p=function(){n||(n=f.defer(function(){l();n=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||p()});if(e.hasEvent("paste"))a.on("paste cut",p)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var r=c.ngPattern;r&&((e=r.match(/^\/(.*)\/([gim]*)$/))?(r=RegExp(e[1],e[2]),e=function(a){return pa(d,"pattern",d.$isEmpty(a)||r.test(a),a)}):e=function(c){var e=b.$eval(r);if(!e||!e.test)throw u("ngPattern")("noregexp",
r,e,ha(a));return pa(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var q=Y(c.ngMinlength);e=function(a){return pa(d,"minlength",d.$isEmpty(a)||a.length>=q,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var D=Y(c.ngMaxlength);e=function(a){return pa(d,"maxlength",d.$isEmpty(a)||a.length<=D,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Vb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<
a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==b[l])continue a;c.push(e)}return c}function e(a){if(!K(a)){if(C(a))return a.split(" ");if(U(a)){var b=[];q(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function m(a,b){var c=g.data("$classCounts")||{},d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!l){var r=
m(k,1);h.$addClass(r)}else if(!xa(b,l)){var q=e(l),r=d(k,q),k=d(q,k),k=m(k,-1),r=m(r,1);0===r.length?c.removeClass(g,k):0===k.length?c.addClass(g,r):c.setClass(g,r,k)}}l=ka(b)}var l;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=m(k,1),h.$addClass(g)):(g=m(k,-1),h.$removeClass(g))}})}}}]}var J=function(b){return C(b)?b.toLowerCase():b},Ab=Object.prototype.hasOwnProperty,Ga=
function(b){return C(b)?b.toUpperCase():b},S,y,Ba,ya=[].slice,Ke=[].push,wa=Object.prototype.toString,Pa=u("ng"),Ra=P.angular||(P.angular={}),Ta,Ka,ja=["0","0","0"];S=Y((/msie (\d+)/.exec(J(navigator.userAgent))||[])[1]);isNaN(S)&&(S=Y((/trident\/.*; rv:(\d+)/.exec(J(navigator.userAgent))||[])[1]));w.$inject=[];Ea.$inject=[];var ba=function(){return String.prototype.trim?function(b){return C(b)?b.trim():b}:function(b){return C(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ka=9>S?function(b){b=
b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ga(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Xc=/[A-Z]/g,$c={full:"1.2.17",major:1,minor:2,dot:17,codeName:"quantum-disentanglement"},Wa=M.cache={},jb=M.expando="ng"+(new Date).getTime(),me=1,qb=P.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Va=P.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:
function(b,a,c){b.detachEvent("on"+a,c)};M._data=function(b){return this.cache[b[this.expando]]||{}};var he=/([\:\-\_]+(.))/g,ie=/^moz([A-Z])/,Gb=u("jqLite"),je=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Hb=/<|&#?\w+;/,ke=/<([\w:]+)/,le=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,da={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>",
"</tr></tbody></table>"],_default:[0,"",""]};da.optgroup=da.option;da.tbody=da.tfoot=da.colgroup=da.caption=da.thead;da.th=da.td;var Ja=M.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===V.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),M(P).on("load",a))},toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?y(this[b]):y(this[this.length+b])},length:0,push:Ke,sort:[].sort,splice:[].splice},nb={};
q("multiple selected checked disabled readOnly required open".split(" "),function(b){nb[J(b)]=b});var rc={};q("input select option textarea button form details".split(" "),function(b){rc[Ga(b)]=!0});q({data:nc,inheritedData:mb,scope:function(b){return y(b).data("$scope")||mb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return y(b).data("$isolateScope")||y(b).data("$isolateScopeNoTemplate")},controller:oc,injector:function(b){return mb(b,"$injector")},removeAttr:function(b,
a){b.removeAttribute(a)},hasClass:Kb,css:function(b,a,c){a=Ua(a);if(z(c))b.style[a]=c;else{var d;8>=S&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=S&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=J(a);if(nb[d])if(z(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||w).specified?d:s;else if(z(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,
a,c){if(z(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(H(d))return e?b[e]:"";b[e]=d}var a=[];9>S?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(H(a)){if("SELECT"===Ka(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(H(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ha(d[c]);b.innerHTML=
a},empty:pc},function(b,a){M.prototype[a]=function(a,d){var e,f;if(b!==pc&&(2==b.length&&b!==Kb&&b!==oc?a:d)===s){if(U(a)){for(e=0;e<this.length;e++)if(b===nc)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;f=e===s?Math.min(this.length,1):this.length;for(var g=0;g<f;g++){var h=b(this[g],a,d);e=e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});q({removeData:lc,dealoc:Ha,on:function a(c,d,e,f){if(z(f))throw Gb("onargs");var g=la(c,"events"),h=la(c,"handle");
g||la(c,"events",g={});h||la(c,"handle",h=ne(c,g));q(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var l=V.body.contains||V.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],
function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||h(a,d)})}else qb(c,d,h),g[d]=[];f=g[d]}f.push(e)})},off:mc,one:function(a,c,d){a=y(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ha(a);q(new M(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,
c){q(new M(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new M(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=y(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ha(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new M(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:lb,removeClass:kb,toggleClass:function(a,c,d){c&&
q(c.split(" "),function(c){var f=d;H(f)&&(f=!Kb(a,c));(f?lb:kb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Jb,triggerHandler:function(a,c,d){c=(la(a,"events")||{})[c];d=d||[];var e=[{preventDefault:w,stopPropagation:w}];q(c,function(c){c.apply(a,
e.concat(d))})}},function(a,c){M.prototype[c]=function(c,e,f){for(var g,h=0;h<this.length;h++)H(g)?(g=a(this[h],c,e,f),z(g)&&(g=y(g))):Ib(g,a(this[h],c,e,f));return z(g)?g:this};M.prototype.bind=M.prototype.on;M.prototype.unbind=M.prototype.off});Xa.prototype={put:function(a,c){this[Ia(a)]=c},get:function(a){return this[Ia(a)]},remove:function(a){var c=this[a=Ia(a)];delete this[a];return c}};var pe=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,qe=/,/,re=/^\s*(_?)(\S+?)\1\s*$/,oe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
Ya=u("$injector"),Le=u("$animate"),Ld=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Le("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,g,h){g?g.after(a):(c&&c[0]||(c=g.parent()),c.append(a));h&&
d(h)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,h){this.enter(a,c,d,h)},addClass:function(a,c,g){c=C(c)?c:K(c)?c.join(" "):"";q(a,function(a){lb(a,c)});g&&d(g)},removeClass:function(a,c,g){c=C(c)?c:K(c)?c.join(" "):"";q(a,function(a){kb(a,c)});g&&d(g)},setClass:function(a,c,g,h){q(a,function(a){lb(a,c);kb(a,g)});h&&d(h)},enabled:w}}]}],ia=u("$compile");gc.$inject=["$provide","$$sanitizeUriProvider"];var te=/^(x[\:\-_]|data[\:\-_])/i,zc=u("$interpolate"),Me=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
we={http:80,https:443,ftp:21},Pb=u("$location");Rb.prototype=Qb.prototype=Cc.prototype={$$html5:!1,$$replace:!1,absUrl:rb("$$absUrl"),url:function(a,c){if(H(a))return this.$$url;var d=Me.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:rb("$$protocol"),host:rb("$$host"),port:rb("$$port"),path:Dc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;
case 1:if(C(a))this.$$search=cc(a);else if(U(a))this.$$search=a;else throw Pb("isrcharg");break;default:H(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Dc("$$hash",Ea),replace:function(){this.$$replace=!0;return this}};var Ca=u("$parse"),Gc={},ta,cb={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:w,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return z(d)?z(e)?d+e:d:z(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=
e(a,c);return(z(d)?d:0)-(z(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":w,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,
c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Ne={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Tb=function(a){this.options=a};Tb.prototype={constructor:Tb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";for(this.tokens=[];this.index<
this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{a=this.ch+this.peek();var c=a+this.peek(2),d=cb[this.ch],e=cb[a],f=cb[c];f?(this.tokens.push({index:this.index,
text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=
a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=z(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw Ca("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=J(this.text.charAt(this.index));
if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,literal:!0,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);
if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;else break}d={index:d,text:c};if(cb.hasOwnProperty(c))d.fn=cb[c],d.literal=!0,d.constant=!0;else{var m=Fc(c,this.options,this.text);d.fn=E(function(a,c){return m(a,c)},{assign:function(d,e){return sb(d,c,e,a.text,a.options)}})}this.tokens.push(d);
g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(g=this.text.substring(this.index+1,this.index+5),g.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+g+"]"),this.index+=4,d+=String.fromCharCode(parseInt(g,16))):d=(f=Ne[g])?d+f:d+g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,
text:e,string:d,literal:!0,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var bb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};bb.ZERO=E(function(){return 0},{constant:!0});bb.prototype={constructor:bb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;
if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);a.literal=!!c.literal;a.constant=!!c.constant}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,
c){throw Ca("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw Ca("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},
unaryFn:function(a,c){return E(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return E(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return E(function(e,f){return c(e,f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=
0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=function(a,e,h){h=[h];for(var m=0;m<d.length;m++)h.push(d[m](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=
this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,
c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+",
"-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(bb.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Fc(d,this.options,this.text);return E(function(c,d,h){return e(h||
a(c,d))},{assign:function(e,g,h){return sb(a(e,h),d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return E(function(e,f){var g=a(e,f),h=d(e,f),m;if(!g)return s;(g=ab(g[h],c.text))&&(g.then&&c.options.unwrapPromises)&&(m=g,"$$v"in g||(m.$$v=s,m.then(function(a){m.$$v=a})),g=g.$$v);return g},{assign:function(e,f,g){var h=d(e,g);return ab(a(e,g),c.text)[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());
while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var h=[],m=c?c(f,g):f,k=0;k<d.length;k++)h.push(d[k](f,g));k=a(f,g,m)||w;ab(m,e.text);ab(k,e.text);h=k.apply?k.apply(m,h):k(h[0],h[1],h[2],h[3],h[4]);return ab(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return E(function(c,d){for(var g=[],h=0;h<a.length;h++)g.push(a[h](c,
d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return E(function(c,d){for(var e={},m=0;m<a.length;m++){var k=a[m];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Sb={},ua=u("$sce"),ga={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",
JS:"js"},X=V.createElement("a"),Ic=sa(P.location.href,!0);kc.$inject=["$provide"];Jc.$inject=["$locale"];Lc.$inject=["$locale"];var Oc=".",Ie={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:tb("Month"),MMM:tb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:tb("Day"),EEE:tb("Day",!0),
a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Ub(Math[0<a?"floor":"ceil"](a/60),2)+Ub(Math.abs(a%60),2))}},He=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Ge=/^\-?\d+$/;Kc.$inject=["$locale"];var Ee=aa(J),Fe=aa(Ga);Mc.$inject=["$parse"];var cd=aa({restrict:"E",compile:function(a,c){8>=S&&(c.href||c.name||c.$set("href",""),a.append(V.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&
!c.name)return function(a,c){var f="[object SVGAnimatedString]"===wa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),Eb={};q(nb,function(a,c){if("multiple"!=a){var d=na("ng-"+c);Eb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});q(["src","srcset","href"],function(a){var c=na("ng-"+a);Eb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===
wa.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(a){a&&(f.$set(h,a),S&&g&&e.prop(g,f[h]))})}}}});var wb={$addControl:w,$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w};Pc.$inject=["$element","$attrs","$scope","$animate"];var Qc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Pc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=
!1};qb(e[0],"submit",h);e.on("$destroy",function(){c(function(){Va(e[0],"submit",h)},0,!1)})}var m=e.parent().controller("form"),k=f.name||f.ngForm;k&&sb(a,k,g,k);if(m)e.on("$destroy",function(){m.$removeControl(g);k&&sb(a,k,s,k);E(g,wb)})}}}}}]},dd=Qc(),qd=Qc(!0),Oe=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Pe=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,Qe=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Rc={text:yb,number:function(a,c,d,e,f,g){yb(a,
c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Qe.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});Je(e,"number",c);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return pa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return pa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));
e.$formatters.push(function(a){return pa(e,"number",e.$isEmpty(a)||zb(a),a)})},url:function(a,c,d,e,f,g){yb(a,c,d,e,f,g);a=function(a){return pa(e,"url",e.$isEmpty(a)||Oe.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){yb(a,c,d,e,f,g);a=function(a){return pa(e,"email",e.$isEmpty(a)||Pe.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){H(d.name)&&c.attr("name",eb());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});
e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;C(f)||(f=!0);C(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:w,button:w,submit:w,reset:w,file:w},hc=["$browser","$sniffer",function(a,
c){return{restrict:"E",require:"?ngModel",link:function(d,e,f,g){g&&(Rc[J(f.type)]||Rc.text)(d,e,f,g,c,a)}}}],vb="ng-valid",ub="ng-invalid",La="ng-pristine",xb="ng-dirty",Re=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,g){function h(a,c){c=c?"-"+ib(c,"-"):"";g.removeClass(e,(a?ub:vb)+c);g.addClass(e,(a?vb:ub)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;
this.$valid=!0;this.$invalid=!1;this.$name=d.name;var m=f(d.ngModel),k=m.assign;if(!k)throw u("ngModel")("nonassign",d.ngModel,ha(e));this.$render=w;this.$isEmpty=function(a){return H(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||wb,n=0,p=this.$error={};e.addClass(La);h(!0);this.$setValidity=function(a,c){p[a]!==!c&&(c?(p[a]&&n--,n||(h(!0),this.$valid=!0,this.$invalid=!1)):(h(!1),this.$invalid=!0,this.$valid=!1,n++),p[a]=!c,h(c,a),l.$setValidity(a,c,this))};this.$setPristine=
function(){this.$dirty=!1;this.$pristine=!0;g.removeClass(e,xb);g.addClass(e,La)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,g.removeClass(e,La),g.addClass(e,xb),l.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,k(a,d),q(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var r=this;a.$watch(function(){var c=m(a);if(r.$modelValue!==c){var d=r.$formatters,e=d.length;for(r.$modelValue=c;e--;)c=
d[e](c);r.$viewValue!==c&&(r.$viewValue=c,r.$render())}return c})}],Fd=function(){return{require:["ngModel","^?form"],controller:Re,link:function(a,c,d,e){var f=e[0],g=e[1]||wb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},Hd=aa({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),ic=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",
!1);else return e.$setValidity("required",!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Gd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!H(a)){var c=[];a&&q(a.split(f),function(a){a&&c.push(ba(a))});return c}});e.$formatters.push(function(a){return K(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},Se=/^(true|false|\d+)$/,
Id=function(){return{priority:100,compile:function(a,c){return Se.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},id=va(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),kd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],
jd=["$sce","$parse",function(a,c){return function(d,e,f){e.addClass("ng-binding").data("$binding",f.ngBindHtml);var g=c(f.ngBindHtml);d.$watch(function(){return(g(d)||"").toString()},function(c){e.html(a.getTrustedHtml(g(d))||"")})}}],ld=Vb("",!0),nd=Vb("Odd",0),md=Vb("Even",1),od=va({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),pd=[function(){return{scope:!0,controller:"@",priority:500}}],jc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=na("ng-"+a);jc[c]=["$parse",function(d){return{compile:function(e,f){var g=d(f[c]);return function(c,d,e){d.on(J(a),function(a){c.$apply(function(){g(c,{$event:a})})})}}}}]});var sd=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,m,k;c.$watch(e.ngIf,function(f){Qa(f)?m||(m=c.$new(),g(m,function(c){c[c.length++]=V.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(k&&(k.remove(),
k=null),m&&(m.$destroy(),m=null),h&&(k=Db(h.clone),a.leave(k,function(){k=null}),h=null))})}}}],td=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ra.noop,compile:function(g,h){var m=h.ngInclude||h.src,k=h.onload||"",l=h.autoscroll;return function(g,h,q,s,D){var x=0,t,y,B,v=function(){y&&(y.remove(),y=null);t&&(t.$destroy(),t=null);B&&(e.leave(B,function(){y=null}),y=B,B=null)};g.$watch(f.parseAsResourceUrl(m),
function(f){var m=function(){!z(l)||l&&!g.$eval(l)||d()},q=++x;f?(a.get(f,{cache:c}).success(function(a){if(q===x){var c=g.$new();s.template=a;a=D(c,function(a){v();e.enter(a,null,h,m)});t=c;B=a;t.$emit("$includeContentLoaded");g.$eval(k)}}).error(function(){q===x&&v()}),g.$emit("$includeContentRequested")):(v(),s.template=null)})}}}}],Jd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],ud=va({priority:450,
compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),vd=va({terminal:!0,priority:1E3}),wd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,m=g.$attr.when&&f.attr(g.$attr.when),k=g.offset||0,l=e.$eval(m)||{},n={},p=c.startSymbol(),r=c.endSymbol(),s=/^when(Minus)?(.+)$/;q(g,function(a,c){s.test(c)&&(l[J(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});q(l,function(a,e){n[e]=c(a.replace(d,p+h+"-"+k+r))});e.$watch(function(){var c=
parseFloat(e.$eval(h));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-k));return n[c](e,f,!0)},function(a){f.text(a)})}}}],xd=["$parse","$animate",function(a,c){var d=u("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,h,m){var k=g.ngRepeat,l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,p,r,s,D,x,t={$id:Ia};if(!l)throw d("iexp",k);g=l[1];h=l[2];(l=l[3])?(n=a(l),p=function(a,c,d){x&&(t[x]=a);t[D]=c;t.$index=d;return n(e,
t)}):(r=function(a,c){return Ia(c)},s=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);D=l[3]||l[1];x=l[2];var z={};e.$watchCollection(h,function(a){var g,h,l=f[0],n,t={},F,R,C,w,T,u,E=[];if(db(a))T=a,n=p||r;else{n=p||s;T=[];for(C in a)a.hasOwnProperty(C)&&"$"!=C.charAt(0)&&T.push(C);T.sort()}F=T.length;h=E.length=T.length;for(g=0;g<h;g++)if(C=a===T?g:T[g],w=a[C],w=n(C,w,g),Aa(w,"`track by` id"),z.hasOwnProperty(w))u=z[w],delete z[w],t[w]=
u,E[g]=u;else{if(t.hasOwnProperty(w))throw q(E,function(a){a&&a.scope&&(z[a.id]=a)}),d("dupes",k,w);E[g]={id:w};t[w]=!1}for(C in z)z.hasOwnProperty(C)&&(u=z[C],g=Db(u.clone),c.leave(g),q(g,function(a){a.$$NG_REMOVED=!0}),u.scope.$destroy());g=0;for(h=T.length;g<h;g++){C=a===T?g:T[g];w=a[C];u=E[g];E[g-1]&&(l=E[g-1].clone[E[g-1].clone.length-1]);if(u.scope){R=u.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);u.clone[0]!=n&&c.move(Db(u.clone),null,y(l));l=u.clone[u.clone.length-1]}else R=e.$new();
R[D]=w;x&&(R[x]=C);R.$index=g;R.$first=0===g;R.$last=g===F-1;R.$middle=!(R.$first||R.$last);R.$odd=!(R.$even=0===(g&1));u.scope||m(R,function(a){a[a.length++]=V.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,y(l));l=a;u.scope=R;u.clone=a;t[u.id]=u})}z=t})}}}],yd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Qa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],rd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Qa(c)?"addClass":"removeClass"](d,
"ng-hide")})}}],zd=va(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ad=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],m=[],k=[];c.$watch(e.ngSwitch||e.on,function(d){var n,p;n=0;for(p=m.length;n<p;++n)m[n].remove();n=m.length=0;for(p=k.length;n<p;++n){var r=h[n];k[n].$destroy();m[n]=r;a.leave(r,function(){m.splice(n,1)})}h.length=0;k.length=
0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),q(g,function(d){var e=c.$new();k.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Bd=va({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Cd=va({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||
[];e.cases["?"].push({transclude:f,element:c})}}),Ed=va({link:function(a,c,d,e,f){if(!f)throw u("ngTransclude")("orphan",ha(c));f(function(a){c.empty();c.append(a)})}}),ed=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Te=u("ngOptions"),Dd=aa({terminal:!0}),fd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:w};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,k={},l=e,n;m.databound=d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){Aa(c,'"option value"');k[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};m.removeOption=function(a){this.hasOption(a)&&(delete k[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ia(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",
!0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=w})}],link:function(e,g,h,m){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(w.parent()&&w.remove(),c.val(a),""===a&&x.prop("selected",!0)):H(a)&&x?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){w.parent()&&w.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new Xa(d.$viewValue);q(c.find("option"),
function(c){c.selected=z(a.get(c.value))})};a.$watch(function(){xa(e,d.$viewValue)||(e=ka(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,s,u,v;u=g.$modelValue;v=y(e)||[];var A=n?Wb(v):v,E,I,B;I={};s=!1;var F,H;if(r)if(w&&K(u))for(s=new Xa([]),B=0;B<u.length;B++)I[m]=u[B],s.put(w(e,I),u[B]);else s=new Xa(u);for(B=0;E=A.length,
B<E;B++){k=B;if(n){k=A[B];if("$"===k.charAt(0))continue;I[n]=k}I[m]=v[k];d=p(e,I)||"";(k=a[d])||(k=a[d]=[],c.push(d));r?d=z(s.remove(w?w(e,I):q(e,I))):(w?(d={},d[m]=u,d=w(e,d)===w(e,I)):d=u===q(e,I),s=s||d);F=l(e,I);F=z(F)?F:"";k.push({id:w?w(e,I):n?A[B]:B,label:F,selected:d})}r||(D||null===u?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));I=0;for(A=c.length;I<A;I++){d=c[I];k=a[d];x.length<=I?(u={element:C.clone().attr("label",d),label:k.label},v=[u],x.push(v),
f.append(u.element)):(v=x[I],u=v[0],u.label!=d&&u.element.attr("label",u.label=d));F=null;B=0;for(E=k.length;B<E;B++)s=k[B],(d=v[B+1])?(F=d.element,d.label!==s.label&&F.text(d.label=s.label),d.id!==s.id&&F.val(d.id=s.id),d.selected!==s.selected&&F.prop("selected",d.selected=s.selected)):(""===s.id&&D?H=D:(H=t.clone()).val(s.id).attr("selected",s.selected).text(s.label),v.push({element:H,label:s.label,id:s.id,selected:s.selected}),F?F.after(H):u.element.append(H),F=H);for(B++;v.length>B;)v.pop().element.remove()}for(;x.length>
I;)x.pop()[0].element.remove()}var k;if(!(k=u.match(d)))throw Te("iexp",u,ha(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:m),y=c(k[7]),w=k[8]?c(k[8]):null,x=[[{element:f,label:""}]];D&&(a(D)(e),D.removeClass("ng-scope"),D.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=y(e)||[],d={},h,k,l,p,t,u,v;if(r)for(k=[],p=0,u=x.length;p<u;p++)for(a=x[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(w)for(v=0;v<c.length&&
(d[m]=c[v],w(e,d)!=h);v++);else d[m]=c[h];k.push(q(e,d))}}else{h=f.val();if("?"==h)k=s;else if(""===h)k=null;else if(w)for(v=0;v<c.length;v++){if(d[m]=c[v],w(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);1<x[0].length&&x[0][1].id!==h&&(x[0][1].selected=!1)}g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(m[1]){var p=m[0];m=m[1];var r=h.multiple,u=h.ngOptions,D=!1,x,t=y(V.createElement("option")),C=y(V.createElement("optgroup")),w=t.clone();h=0;for(var v=g.children(),E=v.length;h<E;h++)if(""===
v[h].value){x=D=v.eq(h);break}p.init(m,D,w);r&&(m.$isEmpty=function(a){return!a||0===a.length});u?n(e,g,m):r?l(e,g,m):k(e,g,m,p)}}}}],hd=["$interpolate",function(a){var c={addOption:w,removeOption:w};return{restrict:"E",priority:100,compile:function(d,e){if(H(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),l=k.data("$selectController")||k.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",
a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],gd=aa({restrict:"E",terminal:!0});P.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Ba=P.jQuery)&&Ba.fn.on?(y=Ba,E(Ba.fn,{scope:Ja.scope,isolateScope:Ja.isolateScope,controller:Ja.controller,injector:Ja.injector,inheritedData:Ja.inheritedData}),Fb("remove",!0,!0,!1),Fb("empty",!1,!1,!1),Fb("html",!1,!1,!0)):y=M,Ra.element=y,Zc(Ra),y(V).ready(function(){Wc(V,
dc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
//# sourceMappingURL=angular.min.js.map
;
define("angular", (function (global) {
    return function () {
        var ret, fn;
        return ret || global.angular;
    };
}(this)));

(function (global) {
  var Options = function (opts) {
    var MainContainer,
        angular = Options.angular;

    var self = {
      getMainElementSelector: function getMainElementSelector() {
        return opts.target;
      },

      getOnErrorCallback: function getOnErrorCallback() {
        return opts.onError || null;
      },

      setOnError: function setOnError(onError) {
        if (angular.isFunction(onError)) {
          opts.onError = onError;
        }
      },

      getOnSetUpError: function getOnSetUpError() {
        return opts.onSetUpError || null;
      },

      setOnSetUpError: function setOnSetUpError(onSetUpError) {
        if (angular.isFunction(onSetUpError)) {
          opts.onSetUpError = onSetUpError;
        }
      },

      setMainContainer: function setMainContainer(container) {
        MainContainer = MainContainer;
      },

      getMainContainer: function getMainContainer() {
        return MainContainer;
      },

      toString: function toString() {
        return "[object Options]";
      }
    };

    return self;
  };

  define('ny_times/options',["angular"], function (angular) {
    Options.angular = angular;
    return Options;
  });
}(window));

(function () {
  

  var Template = function (opts) {
    var template = "" +
      "<div class='ny-times-template'" +
        "ng-controller='MainCtrl'>" +
      //ng-mouseenter='onMouseEnter()'" +
      //" ng-mouseleave='onMouseLeave()'" +
      //" ng-click='terminalClick($event)'>" +

        "HELLOOOOOOOOOOOOOOOOOOOOOOOO" +
      "</div>";
    return template;
  };

  define('ny_times/src/template_renderer/main_template',[], function () {
    
    return Template;
  });
}());
/* global alert */
(function (global) {
  var device, onSetUpError, angular, mainTargetSelector, mainTarget;
  var TemplateRenderer = function (options) {
    angular = TemplateRenderer.angular;
    device = TemplateRenderer.device;
    onSetUpError = options.getOnSetUpError();

    function setUpError(fallback, message) {
      if (angular.isFunction(onSetUpError)) {
        onSetUpError(fallback, message);
      } else {
        throw new Error(message);
      }
    }

    mainTargetSelector = options.getMainElementSelector();
    mainTarget = TemplateRenderer.document.querySelector(mainTargetSelector);

    if (mainTarget) {
      options.setMainContainer(mainTarget);
      var template = TemplateRenderer.getMainTemplateMarkup(options);
      angular.element(mainTarget).html(template);
    } else {
      setUpError(false, "No target found. Please set the target property to a valid DOM element selector.");
    }
  };

  function getMainTemplateMarkup(options) {

    //Select template based on options
    var template = TemplateRenderer.DESKTOP_TEMPLATE(options);

    return template;
  }

  define(
      'ny_times/src/template_renderer',[
          "angular",
          "./template_renderer/main_template"
      ],
      function (
          angular,
          MainTemplate) {

          TemplateRenderer.DESKTOP_TEMPLATE       = MainTemplate;

          TemplateRenderer.angular = angular;
          TemplateRenderer.document = global.document;

          TemplateRenderer.getMainTemplateMarkup = getMainTemplateMarkup;

          return TemplateRenderer;
      }
  );
}(window));
(function () {
  var MainCtrl = function ($scope, $mainOptions) {
    var angular = MainCtrl.angular,
      mainContainer = $mainOptions.getMainContainer();

    $scope.options = $mainOptions;
    $scope.mainContainer = mainContainer;

    var self = {

      getApi: function getApi() {
        return {
          onError: function onError(callback) { $mainOptions.setOnError(callback); },
        };
      }
    };

    return self;
  };

  define('ny_times/src/controllers/main_ctrl',[
    "angular"
  ], function (angular) {
    MainCtrl.angular = angular;
    MainCtrl.NAME = "MainCtrl";
    MainCtrl.$inject = ["$scope", "$mainOptions"];
    return MainCtrl;
  });
}());
(function () {
  var Controllers = function (module) {
    Controllers.angular.forEach([Controllers.MainCTRL], function (Ctrl) {
      module.controller(Ctrl.NAME, Ctrl);
    });
  };

  define('ny_times/src/controllers',["angular", "./controllers/main_ctrl"], function (angular, mainCTRL) {
    Controllers.MainCTRL = mainCTRL;
    Controllers.angular = angular;
    return Controllers;
  });
}());
(function (global) {
    var Link = function (scope, element) {
    };

    define('ny_times/src/directives/scrubber-tooltip/link',["angular"],
        function (angular) {
        Link.angular = angular;
        Link.document = global.document;
        return Link;
    });
}(window));
(function () {
    define('ny_times/src/directives/scrubber-tooltip/template',[], function () {
        return "" +
            "<div>" +
            "</div>";
    });
}());


(function () {
    var ScrubberTooltip = function () {
        return {
            restrict: "E",
            replace: true,
            link: ScrubberTooltip.Link,
            template: ScrubberTooltip.Template
        };
    };

    define('ny_times/src/directives/scrubber-tooltip',[
        "./scrubber-tooltip/link",
        "./scrubber-tooltip/template"
    ], function (Link, Template) {
        ScrubberTooltip.Link = Link;
        ScrubberTooltip.Template = Template;
        ScrubberTooltip.NAME = "scrubberTooltip";
        return ScrubberTooltip;
    });
}());
(function (global) {
  var Directives = function (module) {
    global.angular.forEach(Directives.list, function (directive) {
      module.directive(directive['NAME'], directive);
    });
  };

  define('ny_times/src/directives',[
    "./directives/scrubber-tooltip"
  ], function (
    ScrubberTooltip
    ) {
    Directives.list = arguments;
    return Directives;
  });
}(window));
(function () {
  function defaultErrorCallback(message) {
    throw new Error(message);
  }


  var Services = function (module) {
    var angular = Services.angular;

    module.factory("$cbtErrors", ["$cbtOptions", function ($cbtOptions) {
      var onErrorCallback = $cbtOptions.getOnErrorCallback();
      onErrorCallback = (angular.isFunction(onErrorCallback)) ? onErrorCallback : defaultErrorCallback;

      function errorCallback(code, msg) {
        var info = "[Error " + code + "] " + msg;
        onErrorCallback(info, code);
      }

      var self = {
      };

      return self;
    }]);
  };

  define('ny_times/src/services',["angular"], function (angular) {
    Services.angular = angular;
    return Services;
  });
}());
(function () {
  var Values = function (module) {
  };

  define('ny_times/src/values',[], function () {
    return Values;
  });
}());
(function () {
  var Filters = function (module) {
    //module.filter(Filters.TotalTimeDisplay.NAME, Filters.TotalTimeDisplay);
  };

  define('ny_times/src/filters',[
//    "./filters/some_filter",
  ], function (
    //SomeFilter
    ) {
    //Filters.SomeFilter = SomeFilter;
    return Filters;
  });
}());
(function (global) {
  var NYTimes = function (options) {
    var angular = NYTimes.angular;

    NYTimes.TemplateRenderer(options);

    var module = angular.module(NYTimes.MODULE, NYTimes.MODULE_DEPENDENCIES);
    module.constant("$mainOptions", options);

    module.config([
      '$provide', function($provide) {
        return $provide.decorator('$rootScope', [
          '$delegate', function($delegate) {
            $delegate.safeApply = function (fn) {
              var phase = $delegate.$$phase;
              if (phase === "$apply" || phase === "$digest") {
                if (fn && typeof fn === 'function') {
                  fn();
                }
              } else {
                $delegate.$apply(fn);
              }
            };
            return $delegate;
          }
        ]);
      }
    ]);


    module.provider("$exceptionHandler", function () {
      return {
        $get: function () {
          return function (exception, cause) {
            try {
              if (typeof console !== "undefined") {
                if (console && console.log) {
                  console.log("[ERROR: angular.$exceptionHandler()]");
                  console.log("exception: ", exception);
                  console.log("exception.message: " + exception.message);
                  console.log("exception.stack: " + exception.stack);
                  console.log("cause: " + cause);
                  console.log("[ERROR: END]");
                }
              }
            } catch (e) {

            }
          };
        }
      };
    });


    NYTimes.Values(module);
    NYTimes.Services(module);
    NYTimes.Filters(module);
    NYTimes.Controllers(module);
    NYTimes.Directives(module);

    var element = NYTimes.document.querySelector(options.getMainElementSelector());
    var target = angular.element(element);
    angular.bootstrap(target, [NYTimes.MODULE]);


    //get the api defined in the main_ctrl controller object.
    var mainApi = angular.element(target[0].childNodes[0]).controller().getApi();

    return mainApi;
  };

  define(
    'ny_times/boot',[
      "angular",
      "./src/template_renderer",
      "./src/controllers",
      "./src/directives",
      "./src/services",
      "./src/values",
      "./src/filters",
      "./src/controllers/main_ctrl"
    ],

    function (angular,
              TemplateRenderer,
              Controllers,
              Directives,
              Services,
              Values,
              Filters,
              MainCtrl) {

      NYTimes.MODULE = "nytimes";
      NYTimes.MODULE_DEPENDENCIES = [];

      NYTimes.document = global.document;
      NYTimes.angular = angular;
      NYTimes.TemplateRenderer = TemplateRenderer;
      NYTimes.Controllers = Controllers;
      NYTimes.Directives = Directives;
      NYTimes.Services = Services;
      NYTimes.Values = Values;
      NYTimes.Filters = Filters;
      NYTimes.MainCtrl = MainCtrl;

      return NYTimes;
    }
  );
}(window));

(function () {
  var Boot = function (options) {
    var mainAPI = Boot.booter(options);
    
    var self = {
      getMainAPI: function getMainAPI() {
        return mainAPI;
      },

      toString: function toString() {
        return "[object Boot]";
      }
    };

    return self;
  };

  define('ny_times/boot_runner',["./boot"], function (booter) {
    Boot.booter = booter;
    return Boot;
  });
}());

/* global alert */
(function () {
  var NYTimes = function (options) {
    var NYTimesOptions = NYTimes.Options(options);
    var boot = NYTimes.Boot(NYTimesOptions);
    return boot.getMainAPI();
  };

  define('ny_times',["./ny_times/options", "./ny_times/boot_runner"], function (Options, Boot) {
    NYTimes.Options = Options;
    NYTimes.Boot = Boot;
    return NYTimes;
  });
}());

