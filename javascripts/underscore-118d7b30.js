!function(){var n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this,t=n._,r=Array.prototype,e=Object.prototype,u=r.push,i=r.slice,o=e.toString,a=e.hasOwnProperty,c=Array.isArray,f=Object.keys,l=Object.create,s=function(){},p=function(n){return n instanceof p?n:this instanceof p?void(this._wrapped=n):new p(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=p),exports._=p):n._=p,p.VERSION="1.8.3";var h=function(n,t,r){if(void 0===t)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},v=function(n,t,r){return null==n?p.identity:p.isFunction(n)?h(n,t,r):p.isObject(n)?p.matcher(n):p.property(n)};p.iteratee=function(n,t){return v(n,t,1/0)};var y=function(n,t){return t=null==t?n.length-1:+t,function(){for(var r=Math.max(arguments.length-t,0),e=Array(r),u=0;r>u;u++)e[u]=arguments[u+t];switch(t){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var i=Array(t+1);for(u=0;t>u;u++)i[u]=arguments[u];return i[t]=e,n.apply(this,i)}},g=function(n){if(!p.isObject(n))return{};if(l)return l(n);s.prototype=n;var t=new s;return s.prototype=null,t},d=function(n){return function(t){return null==t?void 0:t[n]}},m=Math.pow(2,53)-1,b=d("length"),j=function(n){var t=b(n);return"number"==typeof t&&t>=0&&m>=t};p.each=p.forEach=function(n,t,r){t=h(t,r);var e,u;if(j(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=p.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},p.map=p.collect=function(n,t,r){t=v(t,r);for(var e=!j(n)&&p.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i};var x=function(n){var t=function(t,r,e,u){var i=!j(t)&&p.keys(t),o=(i||t).length,a=n>0?0:o-1;for(u||(e=t[i?i[a]:a],a+=n);a>=0&&o>a;a+=n){var c=i?i[a]:a;e=r(e,t[c],c,t)}return e};return function(n,r,e,u){var i=arguments.length>=3;return t(n,h(r,u,4),e,i)}};p.reduce=p.foldl=p.inject=x(1),p.reduceRight=p.foldr=x(-1),p.find=p.detect=function(n,t,r){var e;return e=j(n)?p.findIndex(n,t,r):p.findKey(n,t,r),void 0!==e&&-1!==e?n[e]:void 0},p.filter=p.select=function(n,t,r){var e=[];return t=v(t,r),p.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},p.reject=function(n,t,r){return p.filter(n,p.negate(v(t)),r)},p.every=p.all=function(n,t,r){t=v(t,r);for(var e=!j(n)&&p.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},p.some=p.any=function(n,t,r){t=v(t,r);for(var e=!j(n)&&p.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},p.contains=p.includes=p.include=function(n,t,r,e){return j(n)||(n=p.values(n)),("number"!=typeof r||e)&&(r=0),p.indexOf(n,t,r)>=0},p.invoke=y(function(n,t,r){var e=p.isFunction(t);return p.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})}),p.pluck=function(n,t){return p.map(n,p.property(t))},p.where=function(n,t){return p.filter(n,p.matcher(t))},p.findWhere=function(n,t){return p.find(n,p.matcher(t))},p.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n){n=j(n)?n:p.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=v(t,r),p.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},p.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n){n=j(n)?n:p.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=v(t,r),p.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},p.shuffle=function(n){return p.sample(n,1/0)},p.sample=function(n,t,r){if(null==t||r)return j(n)||(n=p.values(n)),n[p.random(n.length-1)];var e=j(n)?p.clone(n):p.values(n),u=b(e);t=Math.max(Math.min(t,u),0);for(var i=u-1,o=0;t>o;o++){var a=p.random(o,i),c=e[o];e[o]=e[a],e[a]=c}return e.slice(0,t)},p.sortBy=function(n,t,r){var e=0;return t=v(t,r),p.pluck(p.map(n,function(n,r,u){return{value:n,index:e++,criteria:t(n,r,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(e>r||void 0===e)return-1}return n.index-t.index}),"value")};var _=function(n,t){return function(r,e,u){var i=t?[[],[]]:{};return e=v(e,u),p.each(r,function(t,u){var o=e(t,u,r);n(i,t,o)}),i}};p.groupBy=_(function(n,t,r){p.has(n,r)?n[r].push(t):n[r]=[t]}),p.indexBy=_(function(n,t,r){n[r]=t}),p.countBy=_(function(n,t,r){p.has(n,r)?n[r]++:n[r]=1}),p.toArray=function(n){return n?p.isArray(n)?i.call(n):j(n)?p.map(n,p.identity):p.values(n):[]},p.size=function(n){return null==n?0:j(n)?n.length:p.keys(n).length},p.partition=_(function(n,t,r){n[r?0:1].push(t)},!0),p.first=p.head=p.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:p.initial(n,n.length-t)},p.initial=function(n,t,r){return i.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},p.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:p.rest(n,Math.max(0,n.length-t))},p.rest=p.tail=p.drop=function(n,t,r){return i.call(n,null==t||r?1:t)},p.compact=function(n){return p.filter(n,p.identity)};var w=function(n,t,r,e){e=e||[];for(var u=e.length,i=0,o=b(n);o>i;i++){var a=n[i];if(j(a)&&(p.isArray(a)||p.isArguments(a)))if(t)for(var c=0,f=a.length;f>c;)e[u++]=a[c++];else w(a,t,r,e),u=e.length;else r||(e[u++]=a)}return e};p.flatten=function(n,t){return w(n,t,!1)},p.without=y(function(n,t){return p.difference(n,t)}),p.uniq=p.unique=function(n,t,r,e){p.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=v(r,e));for(var u=[],i=[],o=0,a=b(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?p.contains(i,f)||(i.push(f),u.push(c)):p.contains(u,c)||u.push(c)}return u},p.union=y(function(n){return p.uniq(w(n,!0,!0))}),p.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=b(n);u>e;e++){var i=n[e];if(!p.contains(t,i)){var o;for(o=1;r>o&&p.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},p.difference=y(function(n,t){return t=w(t,!0,!0),p.filter(n,function(n){return!p.contains(t,n)})}),p.unzip=function(n){for(var t=n&&p.max(n,b).length||0,r=Array(t),e=0;t>e;e++)r[e]=p.pluck(n,e);return r},p.zip=y(p.unzip),p.object=function(n,t){for(var r={},e=0,u=b(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r};var A=function(n){return function(t,r,e){r=v(r,e);for(var u=b(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}};p.findIndex=A(1),p.findLastIndex=A(-1),p.sortedIndex=function(n,t,r,e){r=v(r,e,1);for(var u=r(t),i=0,o=b(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i};var O=function(n,t,r){return function(e,u,o){var a=0,c=b(e);if("number"==typeof o)n>0?a=o>=0?o:Math.max(o+c,a):c=o>=0?Math.min(o+1,c):o+c+1;else if(r&&o&&c)return o=r(e,u),e[o]===u?o:-1;if(u!==u)return o=t(i.call(e,a,c),p.isNaN),o>=0?o+a:-1;for(o=n>0?a:c-1;o>=0&&c>o;o+=n)if(e[o]===u)return o;return-1}};p.indexOf=O(1,p.findIndex,p.sortedIndex),p.lastIndexOf=O(-1,p.findLastIndex),p.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u},p.chunk=function(n,t){if(null==t||1>t)return[];for(var r=[],e=0,u=n.length;u>e;)r.push(i.call(n,e,e+=t));return r};var k=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=g(n.prototype),o=n.apply(i,u);return p.isObject(o)?o:i};p.bind=y(function(n,t,r){if(!p.isFunction(n))throw new TypeError("Bind must be called on a function");var e=y(function(u){return k(n,e,t,this,r.concat(u))});return e}),p.partial=y(function(n,t){var r=p.partial.placeholder,e=function(){for(var u=0,i=t.length,o=Array(i),a=0;i>a;a++)o[a]=t[a]===r?arguments[u++]:t[a];for(;u<arguments.length;)o.push(arguments[u++]);return k(n,e,this,this,o)};return e}),p.partial.placeholder=p,p.bindAll=y(function(n,t){t=w(t,!1,!1);var r=t.length;if(1>r)throw new Error("bindAll must be passed function names");for(;r--;){var e=t[r];n[e]=p.bind(n[e],n)}}),p.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return p.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},p.delay=y(function(n,t,r){return setTimeout(function(){return n.apply(null,r)},t)}),p.defer=p.partial(p.delay,p,1),p.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:p.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=p.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},p.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=p.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=p.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},p.wrap=function(n,t){return p.partial(t,n)},p.negate=function(n){return function(){return!n.apply(this,arguments)}},p.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},p.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},p.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},p.once=p.partial(p.before,2),p.restArgs=y;var S=!{toString:null}.propertyIsEnumerable("toString"),F=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],M=function(n,t){var r=F.length,u=n.constructor,i=p.isFunction(u)&&u.prototype||e,o="constructor";for(p.has(n,o)&&!p.contains(t,o)&&t.push(o);r--;)o=F[r],o in n&&n[o]!==i[o]&&!p.contains(t,o)&&t.push(o)};p.keys=function(n){if(!p.isObject(n))return[];if(f)return f(n);var t=[];for(var r in n)p.has(n,r)&&t.push(r);return S&&M(n,t),t},p.allKeys=function(n){if(!p.isObject(n))return[];var t=[];for(var r in n)t.push(r);return S&&M(n,t),t},p.values=function(n){for(var t=p.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},p.mapObject=function(n,t,r){t=v(t,r);for(var e=p.keys(n),u=e.length,i={},o=0;u>o;o++){var a=e[o];i[a]=t(n[a],a,n)}return i},p.pairs=function(n){for(var t=p.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},p.invert=function(n){for(var t={},r=p.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},p.functions=p.methods=function(n){var t=[];for(var r in n)p.isFunction(n[r])&&t.push(r);return t.sort()};var E=function(n,t){return function(r){var e=arguments.length;if(t&&(r=Object(r)),2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&void 0!==r[f]||(r[f]=i[f])}return r}};p.extend=E(p.allKeys),p.extendOwn=p.assign=E(p.keys),p.findKey=function(n,t,r){t=v(t,r);for(var e,u=p.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e};var I=function(n,t,r){return t in r};p.pick=y(function(n,t){var r={},e=t[0];if(null==n)return r;p.isFunction(e)?(t.length>1&&(e=h(e,t[1])),t=p.allKeys(n)):(e=I,t=w(t,!1,!1),n=Object(n));for(var u=0,i=t.length;i>u;u++){var o=t[u],a=n[o];e(a,o,n)&&(r[o]=a)}return r}),p.omit=y(function(n,t){var r,e=t[0];return p.isFunction(e)?(e=p.negate(e),t.length>1&&(r=t[1])):(t=p.map(w(t,!1,!1),String),e=function(n,r){return!p.contains(t,r)}),p.pick(n,e,r)}),p.defaults=E(p.allKeys,!0),p.create=function(n,t){var r=g(n);return t&&p.extendOwn(r,t),r},p.clone=function(n){return p.isObject(n)?p.isArray(n)?n.slice():p.extend({},n):n},p.tap=function(n,t){return t(n),n},p.isMatch=function(n,t){var r=p.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N,B;N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;if(n!==n)return t!==t;var u=typeof n;return"function"!==u&&"object"!==u&&"object"!=typeof t?!1:B(n,t,r,e)},B=function(n,t,r,e){n instanceof p&&(n=n._wrapped),t instanceof p&&(t=t._wrapped);var u=o.call(n);if(u!==o.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var a=n.constructor,c=t.constructor;if(a!==c&&!(p.isFunction(a)&&a instanceof a&&p.isFunction(c)&&c instanceof c)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var f=r.length;f--;)if(r[f]===n)return e[f]===t;if(r.push(n),e.push(t),i){if(f=n.length,f!==t.length)return!1;for(;f--;)if(!N(n[f],t[f],r,e))return!1}else{var l,s=p.keys(n);if(f=s.length,p.keys(t).length!==f)return!1;for(;f--;)if(l=s[f],!p.has(t,l)||!N(n[l],t[l],r,e))return!1}return r.pop(),e.pop(),!0},p.isEqual=function(n,t){return N(n,t)},p.isEmpty=function(n){return null==n?!0:j(n)&&(p.isArray(n)||p.isString(n)||p.isArguments(n))?0===n.length:0===p.keys(n).length},p.isElement=function(n){return!(!n||1!==n.nodeType)},p.isArray=c||function(n){return"[object Array]"===o.call(n)},p.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},p.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){p["is"+n]=function(t){return o.call(t)==="[object "+n+"]"}}),p.isArguments(arguments)||(p.isArguments=function(n){return p.has(n,"callee")});var T=n.document&&n.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof T&&(p.isFunction=function(n){return"function"==typeof n||!1}),p.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},p.isNaN=function(n){return p.isNumber(n)&&n!==+n},p.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===o.call(n)},p.isNull=function(n){return null===n},p.isUndefined=function(n){return void 0===n},p.has=function(n,t){return null!=n&&a.call(n,t)},p.noConflict=function(){return n._=t,this},p.identity=function(n){return n},p.constant=function(n){return function(){return n}},p.noop=function(){},p.property=d,p.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},p.matcher=p.matches=function(n){return n=p.extendOwn({},n),function(t){return p.isMatch(t,n)}},p.times=function(n,t,r){var e=Array(Math.max(0,n));t=h(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},p.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},p.now=Date.now||function(){return(new Date).getTime()};var R={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},q=p.invert(R),K=function(n){var t=function(t){return n[t]},r="(?:"+p.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};p.escape=K(R),p.unescape=K(q),p.result=function(n,t,r){var e=null==n?void 0:n[t];return void 0===e&&(e=r),p.isFunction(e)?e.call(n):e};var z=0;p.uniqueId=function(n){var t=++z+"";return n?n+t:t},p.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var D=/(.)^/,L={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},P=/\\|'|\r|\n|\u2028|\u2029/g,C=function(n){return"\\"+L[n]};p.template=function(n,t,r){!t&&r&&(t=r),t=p.defaults({},t,p.templateSettings);var e=RegExp([(t.escape||D).source,(t.interpolate||D).source,(t.evaluate||D).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(P,C),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";var o;try{o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,p)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},p.chain=function(n){var t=p(n);return t._chain=!0,t};var J=function(n,t){return n._chain?p(t).chain():t};p.mixin=function(n){p.each(p.functions(n),function(t){var r=p[t]=n[t];p.prototype[t]=function(){var n=[this._wrapped];return u.apply(n,arguments),J(this,r.apply(p,n))}})},p.mixin(p),p.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=r[n];p.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],J(this,r)}}),p.each(["concat","join","slice"],function(n){var t=r[n];p.prototype[n]=function(){return J(this,t.apply(this._wrapped,arguments))}}),p.prototype.value=function(){return this._wrapped},p.prototype.valueOf=p.prototype.toJSON=p.prototype.value,p.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return p})}();