/*! For license information please see main.3c3b2500.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:l.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var x=y.prototype=new v;x.constructor=y,m(x,b.prototype),x.isPureReactComponent=!0;var k=Array.isArray,w=Object.prototype.hasOwnProperty,S={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var a,o={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,a)&&!C.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:l,props:o,_owner:S.current}}function _(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===o?"."+T(s,0):o,k(i)?(a="",null!=e&&(a=e.replace(P,"$&/")+"/"),j(i,t,a,"",(function(e){return e}))):null!=i&&(_(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(s=0,o=""===o?".":o+":",k(e))for(var u=0;u<e.length;u++){var c=o+T(l=e[u],u);s+=j(l,t,a,c,i)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=j(l=l.value,t,a,c=o+T(l,u++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function z(e,t,n){if(null==e)return e;var r=[],a=0;return j(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},$={transition:null},R={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:$,ReactCurrentOwner:S};function I(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:z,forEach:function(e,t,n){z(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return z(e,(function(){t++})),t},toArray:function(e){return z(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=a,t.Profiler=i,t.PureComponent=y,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.act=I,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),o=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=S.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)w.call(t,u)&&!C.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:o,ref:i,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=I,t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.3.1"},219:(e,t,n)=>{"use strict";var r=n(763),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function s(e){return r.isMemo(e)?i:l[e.$$typeof]||a}l[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[r.Memo]=i;var u=Object.defineProperty,c=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(h){var a=p(n);a&&a!==h&&e(t,a,r)}var i=c(n);d&&(i=i.concat(d(n)));for(var l=s(t),m=s(n),g=0;g<i.length;++g){var b=i[g];if(!o[b]&&(!r||!r[b])&&(!m||!m[b])&&(!l||!l[b])){var v=f(n,b);try{u(t,b,v)}catch(y){}}}}return t}},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>o(s,n))u<a&&0>o(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,b="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function k(e){if(g=!1,x(e),!m)if(null!==r(u))m=!0,$(w);else{var t=r(c);null!==t&&R(k,t.startTime-e)}}function w(e,n){m=!1,g&&(g=!1,v(_),_=-1),h=!0;var o=p;try{for(x(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!j());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(u)&&a(u),x(n)}else a(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&R(k,d.startTime-n),s=!1}return s}finally{f=null,p=o,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,C=!1,E=null,_=-1,P=5,T=-1;function j(){return!(t.unstable_now()-T<P)}function z(){if(null!==E){var e=t.unstable_now();T=e;var n=!0;try{n=E(!0,e)}finally{n?S():(C=!1,E=null)}}else C=!1}if("function"===typeof y)S=function(){y(z)};else if("undefined"!==typeof MessageChannel){var N=new MessageChannel,O=N.port2;N.port1.onmessage=z,S=function(){O.postMessage(null)}}else S=function(){b(z,0)};function $(e){E=e,C||(C=!0,S())}function R(e,n){_=b((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,$(w))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(g?(v(_),_=-1):g=!0,R(k,o-i))):(e.sortIndex=l,n(u,e),m||h||(m=!0,$(w))),e},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var u=o[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(a=n?n.call(r,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},528:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler");Symbol.for("react.provider");var l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.for("react.offscreen"),m=Symbol.for("react.client.reference");function g(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case a:case i:case o:case c:case d:return e;default:switch(e=e&&e.$$typeof){case s:case u:case p:case f:case l:return e;default:return t}}case r:return t}}}t.Hy=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===i||e===o||e===c||e===d||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===f||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===m||void 0!==e.getModuleId)},t.QP=g},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),a=n(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,a,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var b=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function y(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(b,v);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(b,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(b,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),w=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),P=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),O=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var $=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var R=Symbol.iterator;function I(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=R&&e[R]||e["@@iterator"])?e:null}var D,L=Object.assign;function A(e){if(void 0===D)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||""}return"\n"+D+e}var F=!1;function M(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var a=u.stack.split("\n"),o=r.stack.split("\n"),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(1!==i||1!==l)do{if(i--,0>--l||a[i]!==o[l]){var s="\n"+a[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?A(e):""}function U(e){switch(e.tag){case 5:return A(e.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return e=M(e.type,!1);case 11:return e=M(e.type.render,!1);case 1:return e=M(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case w:return"Portal";case E:return"Profiler";case C:return"StrictMode";case j:return"Suspense";case z:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case P:return(e.displayName||"Context")+".Consumer";case _:return(e._context.displayName||"Context")+".Provider";case T:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case N:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case O:t=e._payload,e=e._init;try{return B(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function q(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Q(e,t){var n=t.checked;return L({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function X(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function G(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function J(e,t){G(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Y(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return L({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function oe(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var be=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(be[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function ke(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var we=null,Se=null,Ce=null;function Ee(e){if(e=ya(e)){if("function"!==typeof we)throw Error(o(280));var t=e.stateNode;t&&(t=ka(t),we(e.stateNode,e.type,t))}}function _e(e){Se?Ce?Ce.push(e):Ce=[e]:Se=e}function Pe(){if(Se){var e=Se,t=Ce;if(Ce=Se=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Te(e,t){return e(t)}function je(){}var ze=!1;function Ne(e,t,n){if(ze)return e(t,n);ze=!0;try{return Te(e,t,n)}finally{ze=!1,(null!==Se||null!==Ce)&&(je(),Pe())}}function Oe(e,t){var n=e.stateNode;if(null===n)return null;var r=ka(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var $e=!1;if(c)try{var Re={};Object.defineProperty(Re,"passive",{get:function(){$e=!0}}),window.addEventListener("test",Re,Re),window.removeEventListener("test",Re,Re)}catch(ce){$e=!1}function Ie(e,t,n,r,a,o,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var De=!1,Le=null,Ae=!1,Fe=null,Me={onError:function(e){De=!0,Le=e}};function Ue(e,t,n,r,a,o,i,l,s){De=!1,Le=null,Ie.apply(Me,arguments)}function Be(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Be(e)!==e)throw Error(o(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Be(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return He(a),e;if(i===r)return He(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?qe(e):null}function qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=qe(e);if(null!==t)return t;e=e.sibling}return null}var Ke=a.unstable_scheduleCallback,Ye=a.unstable_cancelCallback,Qe=a.unstable_shouldYield,Xe=a.unstable_requestPaint,Ge=a.unstable_now,Je=a.unstable_getCurrentPriorityLevel,Ze=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,ot=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~a;0!==l?r=dt(l):0!==(o&=i)&&(r=dt(o))}else 0!==(i=n&~a)?r=dt(i):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(o=t&-t)||16===a&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-it(t)),r|=e[n],t&=~a;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var yt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var kt,wt,St,Ct,Et,_t=!1,Pt=[],Tt=null,jt=null,zt=null,Nt=new Map,Ot=new Map,$t=[],Rt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function It(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":Nt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ot.delete(t.pointerId)}}function Dt(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=ya(t))&&wt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Lt(e){var t=va(e.target);if(null!==t){var n=Be(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void Et(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function At(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ya(n))&&wt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function Ft(e,t,n){At(e)&&n.delete(t)}function Mt(){_t=!1,null!==Tt&&At(Tt)&&(Tt=null),null!==jt&&At(jt)&&(jt=null),null!==zt&&At(zt)&&(zt=null),Nt.forEach(Ft),Ot.forEach(Ft)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,_t||(_t=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Mt)))}function Bt(e){function t(t){return Ut(t,e)}if(0<Pt.length){Ut(Pt[0],e);for(var n=1;n<Pt.length;n++){var r=Pt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Tt&&Ut(Tt,e),null!==jt&&Ut(jt,e),null!==zt&&Ut(zt,e),Nt.forEach(t),Ot.forEach(t),n=0;n<$t.length;n++)(r=$t[n]).blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&null===(n=$t[0]).blockedOn;)Lt(n),null===n.blockedOn&&$t.shift()}var Wt=x.ReactCurrentBatchConfig,Ht=!0;function Vt(e,t,n,r){var a=yt,o=Wt.transition;Wt.transition=null;try{yt=1,Kt(e,t,n,r)}finally{yt=a,Wt.transition=o}}function qt(e,t,n,r){var a=yt,o=Wt.transition;Wt.transition=null;try{yt=4,Kt(e,t,n,r)}finally{yt=a,Wt.transition=o}}function Kt(e,t,n,r){if(Ht){var a=Qt(e,t,n,r);if(null===a)Hr(e,t,r,Yt,n),It(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Tt=Dt(Tt,e,t,n,r,a),!0;case"dragenter":return jt=Dt(jt,e,t,n,r,a),!0;case"mouseover":return zt=Dt(zt,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Nt.set(o,Dt(Nt.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Ot.set(o,Dt(Ot.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(It(e,r),4&t&&-1<Rt.indexOf(e)){for(;null!==a;){var o=ya(a);if(null!==o&&kt(o),null===(o=Qt(e,t,n,r))&&Hr(e,t,r,Yt,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Yt=null;function Qt(e,t,n,r){if(Yt=null,null!==(e=va(e=ke(r))))if(null===(t=Be(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function Xt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Gt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,a="value"in Gt?Gt.value:Gt.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return Zt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(un),dn=L({},un,{view:0,detail:0}),fn=an(dn),pn=L({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=an(pn),mn=an(L({},pn,{dataTransfer:0})),gn=an(L({},dn,{relatedTarget:0})),bn=an(L({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=L({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=an(vn),xn=an(L({},un,{data:0})),kn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function En(){return Cn}var _n=L({},dn,{key:function(e){if(e.key){var t=kn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?wn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Pn=an(_n),Tn=an(L({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),jn=an(L({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),zn=an(L({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Nn=L({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),On=an(Nn),$n=[9,13,27,32],Rn=c&&"CompositionEvent"in window,In=null;c&&"documentMode"in document&&(In=document.documentMode);var Dn=c&&"TextEvent"in window&&!In,Ln=c&&(!Rn||In&&8<In&&11>=In),An=String.fromCharCode(32),Fn=!1;function Mn(e,t){switch(e){case"keyup":return-1!==$n.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Bn=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Vn(e,t,n,r){_e(r),0<(t=qr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,Kn=null;function Yn(e){Ar(e,0)}function Qn(e){if(K(xa(e)))return e}function Xn(e,t){if("change"===e)return t}var Gn=!1;if(c){var Jn;if(c){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Gn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){qn&&(qn.detachEvent("onpropertychange",nr),Kn=qn=null)}function nr(e){if("value"===e.propertyName&&Qn(Kn)){var t=[];Vn(t,Kn,e,ke(e)),Ne(Yn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(qn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qn(Kn)}function or(e,t){if("click"===e)return Qn(t)}function ir(e,t){if("input"===e||"change"===e)return Qn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Y((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=void 0===r.end?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=cr(n,o);var i=cr(n,r);a&&i&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,br=null,vr=null,yr=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==gr||gr!==Y(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&sr(vr,r)||(vr=r,0<(r=qr(br,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wr={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Sr={},Cr={};function Er(e){if(Sr[e])return Sr[e];if(!wr[e])return e;var t,n=wr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Cr)return Sr[e]=n[t];return e}c&&(Cr=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);var _r=Er("animationend"),Pr=Er("animationiteration"),Tr=Er("animationstart"),jr=Er("transitionend"),zr=new Map,Nr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(e,t){zr.set(e,t),s(t,[e])}for(var $r=0;$r<Nr.length;$r++){var Rr=Nr[$r];Or(Rr.toLowerCase(),"on"+(Rr[0].toUpperCase()+Rr.slice(1)))}Or(_r,"onAnimationEnd"),Or(Pr,"onAnimationIteration"),Or(Tr,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(jr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function Lr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,i,l,s,u){if(Ue.apply(this,arguments),De){if(!De)throw Error(o(198));var c=Le;De=!1,Le=null,Ae||(Ae=!0,Fe=c)}}(r,t,void 0,e),e.currentTarget=null}function Ar(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;Lr(a,l,u),o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,u=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;Lr(a,l,u),o=s}}}if(Ae)throw e=Fe,Ae=!1,Fe=null,e}function Fr(e,t){var n=t[ma];void 0===n&&(n=t[ma]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function Mr(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Ur]){e[Ur]=!0,i.forEach((function(t){"selectionchange"!==t&&(Dr.has(t)||Mr(t,!1,e),Mr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,Mr("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(Xt(t)){case 1:var a=Vt;break;case 4:a=qt;break;default:a=Kt}n=a.bind(null,t,n,e),a=void 0,!$e||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;i=i.return}for(;null!==l;){if(null===(i=va(l)))return;if(5===(s=i.tag)||6===s){r=o=i;continue e}l=l.parentNode}}r=r.return}Ne((function(){var r=o,a=ke(n),i=[];e:{var l=zr.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Pn;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=jn;break;case _r:case Pr:case Tr:s=bn;break;case jr:s=zn;break;case"scroll":s=fn;break;case"wheel":s=On;break;case"copy":case"cut":case"paste":s=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Tn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Oe(h,f))&&c.push(Vr(h,m,p)))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,a),i.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===xe||!(u=n.relatedTarget||n.fromElement)||!va(u)&&!u[ha])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?va(u):null)&&(u!==(d=Be(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=Tn,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:xa(s),p=null==u?l:xa(u),(l=new c(m,h+"leave",s,n,a)).target=d,l.relatedTarget=p,m=null,va(a)===r&&((c=new c(f,h+"enter",u,n,a)).target=p,c.relatedTarget=d,m=c),d=m,s&&u)e:{for(f=u,h=0,p=c=s;p;p=Kr(p))h++;for(p=0,m=f;m;m=Kr(m))p++;for(;0<h-p;)c=Kr(c),h--;for(;0<p-h;)f=Kr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Kr(c),f=Kr(f)}c=null}else c=null;null!==s&&Yr(i,l,s,c,!1),null!==u&&null!==d&&Yr(i,d,u,c,!0)}if("select"===(s=(l=r?xa(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Xn;else if(Hn(l))if(Gn)g=ir;else{g=ar;var b=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=or);switch(g&&(g=g(e,r))?Vn(i,g,n,a):(b&&b(e,l,r),"focusout"===e&&(b=l._wrapperState)&&b.controlled&&"number"===l.type&&ee(l,"number",l.value)),b=r?xa(r):window,e){case"focusin":(Hn(b)||"true"===b.contentEditable)&&(gr=b,br=r,vr=null);break;case"focusout":vr=br=gr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,xr(i,n,a);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":xr(i,n,a)}var v;if(Rn)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Bn?Mn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Ln&&"ko"!==n.locale&&(Bn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Bn&&(v=en()):(Jt="value"in(Gt=a)?Gt.value:Gt.textContent,Bn=!0)),0<(b=qr(r,y)).length&&(y=new xn(y,e,null,n,a),i.push({event:y,listeners:b}),v?y.data=v:null!==(v=Un(n))&&(y.data=v))),(v=Dn?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(Fn=!0,An);case"textInput":return(e=t.data)===An&&Fn?null:e;default:return null}}(e,n):function(e,t){if(Bn)return"compositionend"===e||!Rn&&Mn(e,t)?(e=en(),Zt=Jt=Gt=null,Bn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ln&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=qr(r,"onBeforeInput")).length&&(a=new xn("onBeforeInput","beforeinput",null,n,a),i.push({event:a,listeners:r}),a.data=v))}Ar(i,t)}))}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;5===a.tag&&null!==o&&(a=o,null!=(o=Oe(e,n))&&r.unshift(Vr(e,o,a)),null!=(o=Oe(e,t))&&r.push(Vr(e,o,a))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yr(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,a?null!=(s=Oe(n,o))&&i.unshift(Vr(n,s,l)):a||null!=(s=Oe(n,o))&&i.push(Vr(n,s,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var Qr=/\r\n?/g,Xr=/\u0000|\uFFFD/g;function Gr(e){return("string"===typeof e?e:""+e).replace(Qr,"\n").replace(Xr,"")}function Jr(e,t,n){if(t=Gr(t),Gr(e)!==t&&n)throw Error(o(425))}function Zr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,oa="function"===typeof Promise?Promise:void 0,ia="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oa?function(e){return oa.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout((function(){throw e}))}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Bt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Bt(t)}function ua(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ca(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),fa="__reactFiber$"+da,pa="__reactProps$"+da,ha="__reactContainer$"+da,ma="__reactEvents$"+da,ga="__reactListeners$"+da,ba="__reactHandles$"+da;function va(e){var t=e[fa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ha]||n[fa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ca(e);null!==e;){if(n=e[fa])return n;e=ca(e)}return t}n=(e=n).parentNode}return null}function ya(e){return!(e=e[fa]||e[ha])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function ka(e){return e[pa]||null}var wa=[],Sa=-1;function Ca(e){return{current:e}}function Ea(e){0>Sa||(e.current=wa[Sa],wa[Sa]=null,Sa--)}function _a(e,t){Sa++,wa[Sa]=e.current,e.current=t}var Pa={},Ta=Ca(Pa),ja=Ca(!1),za=Pa;function Na(e,t){var n=e.type.contextTypes;if(!n)return Pa;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in n)o[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Oa(e){return null!==(e=e.childContextTypes)&&void 0!==e}function $a(){Ea(ja),Ea(Ta)}function Ra(e,t,n){if(Ta.current!==Pa)throw Error(o(168));_a(Ta,t),_a(ja,n)}function Ia(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(o(108,W(e)||"Unknown",a));return L({},n,r)}function Da(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pa,za=Ta.current,_a(Ta,e),_a(ja,ja.current),!0}function La(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Ia(e,t,za),r.__reactInternalMemoizedMergedChildContext=e,Ea(ja),Ea(Ta),_a(Ta,e)):Ea(ja),_a(ja,n)}var Aa=null,Fa=!1,Ma=!1;function Ua(e){null===Aa?Aa=[e]:Aa.push(e)}function Ba(){if(!Ma&&null!==Aa){Ma=!0;var e=0,t=yt;try{var n=Aa;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Aa=null,Fa=!1}catch(a){throw null!==Aa&&(Aa=Aa.slice(e+1)),Ke(Ze,Ba),a}finally{yt=t,Ma=!1}}return null}var Wa=[],Ha=0,Va=null,qa=0,Ka=[],Ya=0,Qa=null,Xa=1,Ga="";function Ja(e,t){Wa[Ha++]=qa,Wa[Ha++]=Va,Va=e,qa=t}function Za(e,t,n){Ka[Ya++]=Xa,Ka[Ya++]=Ga,Ka[Ya++]=Qa,Qa=e;var r=Xa;e=Ga;var a=32-it(r)-1;r&=~(1<<a),n+=1;var o=32-it(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Xa=1<<32-it(t)+a|n<<a|r,Ga=o+e}else Xa=1<<o|n<<a|r,Ga=e}function eo(e){null!==e.return&&(Ja(e,1),Za(e,1,0))}function to(e){for(;e===Va;)Va=Wa[--Ha],Wa[Ha]=null,qa=Wa[--Ha],Wa[Ha]=null;for(;e===Qa;)Qa=Ka[--Ya],Ka[Ya]=null,Ga=Ka[--Ya],Ka[Ya]=null,Xa=Ka[--Ya],Ka[Ya]=null}var no=null,ro=null,ao=!1,oo=null;function io(e,t){var n=Nu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function lo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ua(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Qa?{id:Xa,overflow:Ga}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Nu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function so(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function uo(e){if(ao){var t=ro;if(t){var n=t;if(!lo(e,t)){if(so(e))throw Error(o(418));t=ua(n.nextSibling);var r=no;t&&lo(e,t)?io(r,n):(e.flags=-4097&e.flags|2,ao=!1,no=e)}}else{if(so(e))throw Error(o(418));e.flags=-4097&e.flags|2,ao=!1,no=e}}}function co(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function fo(e){if(e!==no)return!1;if(!ao)return co(e),ao=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ro)){if(so(e))throw po(),Error(o(418));for(;t;)io(e,t),t=ua(t.nextSibling)}if(co(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ua(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ua(e.stateNode.nextSibling):null;return!0}function po(){for(var e=ro;e;)e=ua(e.nextSibling)}function ho(){ro=no=null,ao=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var go=x.ReactCurrentBatchConfig;function bo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var a=r,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=a.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function vo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yo(e){return(0,e._init)(e._payload)}function xo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=$u(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Lu(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===O&&yo(o)===t.type)?((r=a(t,n.props)).ref=bo(e,t,n),r.return=e,r):((r=Ru(n.type,n.key,n.props,null,e.mode,r)).ref=bo(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Au(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Iu(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Lu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case k:return(n=Ru(t.type,t.key,t.props,null,e.mode,n)).ref=bo(e,null,t),n.return=e,n;case w:return(t=Au(t,e.mode,n)).return=e,t;case O:return f(e,(0,t._init)(t._payload),n)}if(te(t)||I(t))return(t=Iu(t,e.mode,n,null)).return=e,t;vo(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case k:return n.key===a?u(e,t,n,r):null;case w:return n.key===a?c(e,t,n,r):null;case O:return p(e,t,(a=n._init)(n._payload),r)}if(te(n)||I(n))return null!==a?null:d(e,t,n,r,null);vo(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case O:return h(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||I(r))return d(t,e=e.get(n)||null,r,a,null);vo(t,r)}return null}function m(a,o,l,s){for(var u=null,c=null,d=o,m=o=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var b=p(a,d,l[m],s);if(null===b){null===d&&(d=g);break}e&&d&&null===b.alternate&&t(a,d),o=i(b,o,m),null===c?u=b:c.sibling=b,c=b,d=g}if(m===l.length)return n(a,d),ao&&Ja(a,m),u;if(null===d){for(;m<l.length;m++)null!==(d=f(a,l[m],s))&&(o=i(d,o,m),null===c?u=d:c.sibling=d,c=d);return ao&&Ja(a,m),u}for(d=r(a,d);m<l.length;m++)null!==(g=h(d,a,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=i(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(a,e)})),ao&&Ja(a,m),u}function g(a,l,s,u){var c=I(s);if("function"!==typeof c)throw Error(o(150));if(null==(s=c.call(s)))throw Error(o(151));for(var d=c=null,m=l,g=l=0,b=null,v=s.next();null!==m&&!v.done;g++,v=s.next()){m.index>g?(b=m,m=null):b=m.sibling;var y=p(a,m,v.value,u);if(null===y){null===m&&(m=b);break}e&&m&&null===y.alternate&&t(a,m),l=i(y,l,g),null===d?c=y:d.sibling=y,d=y,m=b}if(v.done)return n(a,m),ao&&Ja(a,g),c;if(null===m){for(;!v.done;g++,v=s.next())null!==(v=f(a,v.value,u))&&(l=i(v,l,g),null===d?c=v:d.sibling=v,d=v);return ao&&Ja(a,g),c}for(m=r(a,m);!v.done;g++,v=s.next())null!==(v=h(m,a,g,v.value,u))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),l=i(v,l,g),null===d?c=v:d.sibling=v,d=v);return e&&m.forEach((function(e){return t(a,e)})),ao&&Ja(a,g),c}return function e(r,o,i,s){if("object"===typeof i&&null!==i&&i.type===S&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case k:e:{for(var u=i.key,c=o;null!==c;){if(c.key===u){if((u=i.type)===S){if(7===c.tag){n(r,c.sibling),(o=a(c,i.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===O&&yo(u)===c.type){n(r,c.sibling),(o=a(c,i.props)).ref=bo(r,c,i),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}i.type===S?((o=Iu(i.props.children,r.mode,s,i.key)).return=r,r=o):((s=Ru(i.type,i.key,i.props,null,r.mode,s)).ref=bo(r,o,i),s.return=r,r=s)}return l(r);case w:e:{for(c=i.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===i.containerInfo&&o.stateNode.implementation===i.implementation){n(r,o.sibling),(o=a(o,i.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Au(i,r.mode,s)).return=r,r=o}return l(r);case O:return e(r,o,(c=i._init)(i._payload),s)}if(te(i))return m(r,o,i,s);if(I(i))return g(r,o,i,s);vo(r,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==o&&6===o.tag?(n(r,o.sibling),(o=a(o,i)).return=r,r=o):(n(r,o),(o=Lu(i,r.mode,s)).return=r,r=o),l(r)):n(r,o)}}var ko=xo(!0),wo=xo(!1),So=Ca(null),Co=null,Eo=null,_o=null;function Po(){_o=Eo=Co=null}function To(e){var t=So.current;Ea(So),e._currentValue=t}function jo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zo(e,t){Co=e,_o=Eo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(yl=!0),e.firstContext=null)}function No(e){var t=e._currentValue;if(_o!==e)if(e={context:e,memoizedValue:t,next:null},null===Eo){if(null===Co)throw Error(o(308));Eo=e,Co.dependencies={lanes:0,firstContext:e}}else Eo=Eo.next=e;return t}var Oo=null;function $o(e){null===Oo?Oo=[e]:Oo.push(e)}function Ro(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,$o(t)):(n.next=a.next,a.next=n),t.interleaved=n,Io(e,r)}function Io(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Do=!1;function Lo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ao(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ts)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Io(e,n)}return null===(a=r.interleaved)?(t.next=t,$o(r)):(t.next=a.next,a.next=t),r.interleaved=t,Io(e,n)}function Uo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Bo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wo(e,t,n,r){var a=e.updateQueue;Do=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===i?o=u:i.next=u,i=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,c=u=s=null,l=o;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=L({},d,f);break e;case 2:Do=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,i|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{i|=a.lane,a=a.next}while(a!==t)}else null===o&&(a.shared.lanes=0);Ds|=i,e.lanes=i,e.memoizedState=d}}function Ho(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(o(191,a));a.call(r)}}}var Vo={},qo=Ca(Vo),Ko=Ca(Vo),Yo=Ca(Vo);function Qo(e){if(e===Vo)throw Error(o(174));return e}function Xo(e,t){switch(_a(Yo,t),_a(Ko,e),_a(qo,Vo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ea(qo),_a(qo,t)}function Go(){Ea(qo),Ea(Ko),Ea(Yo)}function Jo(e){Qo(Yo.current);var t=Qo(qo.current),n=se(t,e.type);t!==n&&(_a(Ko,e),_a(qo,n))}function Zo(e){Ko.current===e&&(Ea(qo),Ea(Ko))}var ei=Ca(0);function ti(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ni=[];function ri(){for(var e=0;e<ni.length;e++)ni[e]._workInProgressVersionPrimary=null;ni.length=0}var ai=x.ReactCurrentDispatcher,oi=x.ReactCurrentBatchConfig,ii=0,li=null,si=null,ui=null,ci=!1,di=!1,fi=0,pi=0;function hi(){throw Error(o(321))}function mi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function gi(e,t,n,r,a,i){if(ii=i,li=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ai.current=null===e||null===e.memoizedState?Zi:el,e=n(r,a),di){i=0;do{if(di=!1,fi=0,25<=i)throw Error(o(301));i+=1,ui=si=null,t.updateQueue=null,ai.current=tl,e=n(r,a)}while(di)}if(ai.current=Ji,t=null!==si&&null!==si.next,ii=0,ui=si=li=null,ci=!1,t)throw Error(o(300));return e}function bi(){var e=0!==fi;return fi=0,e}function vi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ui?li.memoizedState=ui=e:ui=ui.next=e,ui}function yi(){if(null===si){var e=li.alternate;e=null!==e?e.memoizedState:null}else e=si.next;var t=null===ui?li.memoizedState:ui.next;if(null!==t)ui=t,si=e;else{if(null===e)throw Error(o(310));e={memoizedState:(si=e).memoizedState,baseState:si.baseState,baseQueue:si.baseQueue,queue:si.queue,next:null},null===ui?li.memoizedState=ui=e:ui=ui.next=e}return ui}function xi(e,t){return"function"===typeof t?t(e):t}function ki(e){var t=yi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=si,a=r.baseQueue,i=n.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(null!==a){i=a.next,r=r.baseState;var s=l=null,u=null,c=i;do{var d=c.lane;if((ii&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,li.lanes|=d,Ds|=d}c=c.next}while(null!==c&&c!==i);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(yl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{i=a.lane,li.lanes|=i,Ds|=i,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wi(e){var t=yi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);lr(i,t.memoizedState)||(yl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Si(){}function Ci(e,t){var n=li,r=yi(),a=t(),i=!lr(r.memoizedState,a);if(i&&(r.memoizedState=a,yl=!0),r=r.queue,Di(Pi.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==ui&&1&ui.memoizedState.tag){if(n.flags|=2048,Ni(9,_i.bind(null,n,r,a,t),void 0,null),null===js)throw Error(o(349));0!==(30&ii)||Ei(n,t,a)}return a}function Ei(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function _i(e,t,n,r){t.value=n,t.getSnapshot=r,Ti(t)&&ji(e)}function Pi(e,t,n){return n((function(){Ti(t)&&ji(e)}))}function Ti(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function ji(e){var t=Io(e,1);null!==t&&nu(t,e,1,-1)}function zi(e){var t=vi();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t.queue=e,e=e.dispatch=Yi.bind(null,li,e),[t.memoizedState,e]}function Ni(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Oi(){return yi().memoizedState}function $i(e,t,n,r){var a=vi();li.flags|=e,a.memoizedState=Ni(1|t,n,void 0,void 0===r?null:r)}function Ri(e,t,n,r){var a=yi();r=void 0===r?null:r;var o=void 0;if(null!==si){var i=si.memoizedState;if(o=i.destroy,null!==r&&mi(r,i.deps))return void(a.memoizedState=Ni(t,n,o,r))}li.flags|=e,a.memoizedState=Ni(1|t,n,o,r)}function Ii(e,t){return $i(8390656,8,e,t)}function Di(e,t){return Ri(2048,8,e,t)}function Li(e,t){return Ri(4,2,e,t)}function Ai(e,t){return Ri(4,4,e,t)}function Fi(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Mi(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ri(4,4,Fi.bind(null,t,e),n)}function Ui(){}function Bi(e,t){var n=yi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wi(e,t){var n=yi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hi(e,t,n){return 0===(21&ii)?(e.baseState&&(e.baseState=!1,yl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),li.lanes|=n,Ds|=n,e.baseState=!0),t)}function Vi(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=oi.transition;oi.transition={};try{e(!1),t()}finally{yt=n,oi.transition=r}}function qi(){return yi().memoizedState}function Ki(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qi(e))Xi(t,n);else if(null!==(n=Ro(e,t,n,r))){nu(n,e,r,eu()),Gi(n,t,r)}}function Yi(e,t,n){var r=tu(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qi(e))Xi(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,lr(l,i)){var s=t.interleaved;return null===s?(a.next=a,$o(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(u){}null!==(n=Ro(e,t,a,r))&&(nu(n,e,r,a=eu()),Gi(n,t,r))}}function Qi(e){var t=e.alternate;return e===li||null!==t&&t===li}function Xi(e,t){di=ci=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gi(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}var Ji={readContext:No,useCallback:hi,useContext:hi,useEffect:hi,useImperativeHandle:hi,useInsertionEffect:hi,useLayoutEffect:hi,useMemo:hi,useReducer:hi,useRef:hi,useState:hi,useDebugValue:hi,useDeferredValue:hi,useTransition:hi,useMutableSource:hi,useSyncExternalStore:hi,useId:hi,unstable_isNewReconciler:!1},Zi={readContext:No,useCallback:function(e,t){return vi().memoizedState=[e,void 0===t?null:t],e},useContext:No,useEffect:Ii,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,$i(4194308,4,Fi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $i(4194308,4,e,t)},useInsertionEffect:function(e,t){return $i(4,2,e,t)},useMemo:function(e,t){var n=vi();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vi();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ki.bind(null,li,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},vi().memoizedState=e},useState:zi,useDebugValue:Ui,useDeferredValue:function(e){return vi().memoizedState=e},useTransition:function(){var e=zi(!1),t=e[0];return e=Vi.bind(null,e[1]),vi().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=li,a=vi();if(ao){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===js)throw Error(o(349));0!==(30&ii)||Ei(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Ii(Pi.bind(null,r,i,e),[e]),r.flags|=2048,Ni(9,_i.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=vi(),t=js.identifierPrefix;if(ao){var n=Ga;t=":"+t+"R"+(n=(Xa&~(1<<32-it(Xa)-1)).toString(32)+n),0<(n=fi++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pi++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:No,useCallback:Bi,useContext:No,useEffect:Di,useImperativeHandle:Mi,useInsertionEffect:Li,useLayoutEffect:Ai,useMemo:Wi,useReducer:ki,useRef:Oi,useState:function(){return ki(xi)},useDebugValue:Ui,useDeferredValue:function(e){return Hi(yi(),si.memoizedState,e)},useTransition:function(){return[ki(xi)[0],yi().memoizedState]},useMutableSource:Si,useSyncExternalStore:Ci,useId:qi,unstable_isNewReconciler:!1},tl={readContext:No,useCallback:Bi,useContext:No,useEffect:Di,useImperativeHandle:Mi,useInsertionEffect:Li,useLayoutEffect:Ai,useMemo:Wi,useReducer:wi,useRef:Oi,useState:function(){return wi(xi)},useDebugValue:Ui,useDeferredValue:function(e){var t=yi();return null===si?t.memoizedState=e:Hi(t,si.memoizedState,e)},useTransition:function(){return[wi(xi)[0],yi().memoizedState]},useMutableSource:Si,useSyncExternalStore:Ci,useId:qi,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=L({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:L({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return!!(e=e._reactInternals)&&Be(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),o=Fo(r,a);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Mo(e,o,a))&&(nu(t,e,a,r),Uo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),o=Fo(r,a);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Mo(e,o,a))&&(nu(t,e,a,r),Uo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),a=Fo(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Mo(e,a,r))&&(nu(t,e,r,n),Uo(t,e,r))}};function ol(e,t,n,r,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,o))}function il(e,t,n){var r=!1,a=Pa,o=t.contextType;return"object"===typeof o&&null!==o?o=No(o):(a=Oa(t)?za:Ta.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Na(e,a):Pa),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Lo(e);var o=t.contextType;"object"===typeof o&&null!==o?a.context=No(o):(o=Oa(t)?za:Ta.current,a.context=Na(e,o)),a.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rl(e,t,o,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&al.enqueueReplaceState(a,a.state,null),Wo(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var a=n}catch(o){a="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:a,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Fo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hs||(Hs=!0,Vs=r),dl(0,t)},n}function hl(e,t,n){(n=Fo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){dl(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===qs?qs=new Set([this]):qs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Eu.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function bl(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Fo(-1,1)).tag=2,Mo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var vl=x.ReactCurrentOwner,yl=!1;function xl(e,t,n,r){t.child=null===e?wo(t,null,n,r):ko(t,e.child,n,r)}function kl(e,t,n,r,a){n=n.render;var o=t.ref;return zo(t,a),r=gi(e,t,n,r,o,a),n=bi(),null===e||yl?(ao&&n&&eo(t),t.flags|=1,xl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Hl(e,t,a))}function wl(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Ou(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ru(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Sl(e,t,o,r,a))}if(o=e.child,0===(e.lanes&a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(i,r)&&e.ref===t.ref)return Hl(e,t,a)}return t.flags|=1,(e=$u(o,r)).ref=t.ref,e.return=t,t.child=e}function Sl(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref){if(yl=!1,t.pendingProps=r=o,0===(e.lanes&a))return t.lanes=e.lanes,Hl(e,t,a);0!==(131072&e.flags)&&(yl=!0)}}return _l(e,t,n,r,a)}function Cl(e,t,n){var r=t.pendingProps,a=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_a($s,Os),Os|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_a($s,Os),Os|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,_a($s,Os),Os|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,_a($s,Os),Os|=r;return xl(e,t,a,n),t.child}function El(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _l(e,t,n,r,a){var o=Oa(n)?za:Ta.current;return o=Na(t,o),zo(t,a),n=gi(e,t,n,r,o,a),r=bi(),null===e||yl?(ao&&r&&eo(t),t.flags|=1,xl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Hl(e,t,a))}function Pl(e,t,n,r,a){if(Oa(n)){var o=!0;Da(t)}else o=!1;if(zo(t,a),null===t.stateNode)Wl(e,t),il(t,n,r),sl(t,n,r,a),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;"object"===typeof u&&null!==u?u=No(u):u=Na(t,u=Oa(n)?za:Ta.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==r||s!==u)&&ll(t,i,r,u),Do=!1;var f=t.memoizedState;i.state=f,Wo(t,r,i,a),s=t.memoizedState,l!==r||f!==s||ja.current||Do?("function"===typeof c&&(rl(t,n,c,r),s=t.memoizedState),(l=Do||ol(t,n,l,r,f,s,u))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Ao(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nl(t.type,l),i.props=u,d=t.pendingProps,f=i.context,"object"===typeof(s=n.contextType)&&null!==s?s=No(s):s=Na(t,s=Oa(n)?za:Ta.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,i,r,s),Do=!1,f=t.memoizedState,i.state=f,Wo(t,r,i,a);var h=t.memoizedState;l!==d||f!==h||ja.current||Do?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(u=Do||ol(t,n,u,r,f,h,s)||!1)?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=s,r=u):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Tl(e,t,n,r,o,a)}function Tl(e,t,n,r,a,o){El(e,t);var i=0!==(128&t.flags);if(!r&&!i)return a&&La(t,n,!1),Hl(e,t,o);r=t.stateNode,vl.current=t;var l=i&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=ko(t,e.child,null,o),t.child=ko(t,null,l,o)):xl(e,t,l,o),t.memoizedState=r.state,a&&La(t,n,!0),t.child}function jl(e){var t=e.stateNode;t.pendingContext?Ra(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ra(0,t.context,!1),Xo(e,t.containerInfo)}function zl(e,t,n,r,a){return ho(),mo(a),t.flags|=256,xl(e,t,n,r),t.child}var Nl,Ol,$l,Rl,Il={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ll(e,t,n){var r,a=t.pendingProps,i=ei.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&i)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),_a(ei,1&i),null===e)return uo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Du(s,a,0,null),e=Iu(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Dl(n),t.memoizedState=Il,e):Al(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,a,i,l){if(n)return 256&t.flags?(t.flags&=-257,Fl(e,t,l,r=cl(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Du({mode:"visible",children:r.children},a,0,null),(i=Iu(i,a,l,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!==(1&t.mode)&&ko(t,e.child,null,l),t.child.memoizedState=Dl(l),t.memoizedState=Il,i);if(0===(1&t.mode))return Fl(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Fl(e,t,l,r=cl(i=Error(o(419)),r,void 0))}if(s=0!==(l&e.childLanes),yl||s){if(null!==(r=js)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==i.retryLane&&(i.retryLane=a,Io(e,a),nu(r,e,a,-1))}return mu(),Fl(e,t,l,r=cl(Error(o(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Pu.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,ro=ua(a.nextSibling),no=t,ao=!0,oo=null,null!==e&&(Ka[Ya++]=Xa,Ka[Ya++]=Ga,Ka[Ya++]=Qa,Xa=e.id,Ga=e.overflow,Qa=t),t=Al(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,i,n);if(l){l=a.fallback,s=t.mode,r=(i=e.child).sibling;var u={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==i?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=$u(i,u)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=$u(r,l):(l=Iu(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Dl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Il,a}return e=(l=e.child).sibling,a=$u(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Al(e,t){return(t=Du({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fl(e,t,n,r){return null!==r&&mo(r),ko(t,e.child,null,n),(e=Al(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ml(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),jo(e.return,t,n)}function Ul(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Bl(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(xl(e,t,r.children,n),0!==(2&(r=ei.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ml(e,n,t);else if(19===e.tag)Ml(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_a(ei,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===ti(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ul(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===ti(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ul(t,!0,n,null,o);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ds|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=$u(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=$u(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!ao)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ql(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kl(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ql(t),null;case 1:case 17:return Oa(t.type)&&$a(),ql(t),null;case 3:return r=t.stateNode,Go(),Ea(ja),Ea(Ta),ri(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fo(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(iu(oo),oo=null))),Ol(e,t),ql(t),null;case 5:Zo(t);var a=Qo(Yo.current);if(n=t.type,null!==e&&null!=t.stateNode)$l(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return ql(t),null}if(e=Qo(qo.current),fo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[fa]=t,r[pa]=i,e=0!==(1&t.mode),n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(a=0;a<Ir.length;a++)Fr(Ir[a],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":X(r,i),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Fr("invalid",r);break;case"textarea":ae(r,i),Fr("invalid",r)}for(var s in ve(n,i),a=null,i)if(i.hasOwnProperty(s)){var u=i[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==i.suppressHydrationWarning&&Jr(r.textContent,u,e),a=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==i.suppressHydrationWarning&&Jr(r.textContent,u,e),a=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Fr("scroll",r)}switch(n){case"input":q(r),Z(r,i,!0);break;case"textarea":q(r),ie(r);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(r.onclick=Zr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fa]=t,e[pa]=r,Nl(e,t,!1,!1),t.stateNode=e;e:{switch(s=ye(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),a=r;break;case"iframe":case"object":case"embed":Fr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Ir.length;a++)Fr(Ir[a],e);a=r;break;case"source":Fr("error",e),a=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),a=r;break;case"details":Fr("toggle",e),a=r;break;case"input":X(e,r),a=Q(e,r),Fr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=L({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Fr("invalid",e)}for(i in ve(n,a),u=a)if(u.hasOwnProperty(i)){var c=u[i];"style"===i?ge(e,c):"dangerouslySetInnerHTML"===i?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===i?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=c&&"onScroll"===i&&Fr("scroll",e):null!=c&&y(e,i,c,s))}switch(n){case"input":q(e),Z(e,r,!1);break;case"textarea":q(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?ne(e,!!r.multiple,i,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return ql(t),null;case 6:if(e&&null!=t.stateNode)Rl(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Qo(Yo.current),Qo(qo.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[fa]=t,(i=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fa]=t,t.stateNode=r}return ql(t),null;case 13:if(Ea(ei),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ao&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))po(),ho(),t.flags|=98560,i=!1;else if(i=fo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[fa]=t}else ho(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ql(t),i=!1}else null!==oo&&(iu(oo),oo=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ei.current)?0===Rs&&(Rs=3):mu())),null!==t.updateQueue&&(t.flags|=4),ql(t),null);case 4:return Go(),Ol(e,t),null===e&&Br(t.stateNode.containerInfo),ql(t),null;case 10:return To(t.type._context),ql(t),null;case 19:if(Ea(ei),null===(i=t.memoizedState))return ql(t),null;if(r=0!==(128&t.flags),null===(s=i.rendering))if(r)Vl(i,!1);else{if(0!==Rs||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ti(e))){for(t.flags|=128,Vl(i,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _a(ei,1&ei.current|2),t.child}e=e.sibling}null!==i.tail&&Ge()>Bs&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ti(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!ao)return ql(t),null}else 2*Ge()-i.renderingStartTime>Bs&&1073741824!==n&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=i.last)?n.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ge(),t.sibling=null,n=ei.current,_a(ei,r?1&n|2:1&n),t):(ql(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Os)&&(ql(t),6&t.subtreeFlags&&(t.flags|=8192)):ql(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Yl(e,t){switch(to(t),t.tag){case 1:return Oa(t.type)&&$a(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Go(),Ea(ja),Ea(Ta),ri(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zo(t),null;case 13:if(Ea(ei),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ho()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ea(ei),null;case 4:return Go(),null;case 10:return To(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Nl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ol=function(){},$l=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Qo(qo.current);var o,i=null;switch(n){case"input":a=Q(e,a),r=Q(e,r),i=[];break;case"select":a=L({},a,{value:void 0}),r=L({},r,{value:void 0}),i=[];break;case"textarea":a=re(e,a),r=re(e,r),i=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(c in ve(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(i=i||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(i=i||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Fr("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}},Rl=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ql=!1,Xl=!1,Gl="function"===typeof WeakSet?WeakSet:Set,Jl=null;function Zl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Cu(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Cu(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,void 0!==o&&es(t,n,o)}a=a.next}while(a!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function os(e){var t=e.alternate;null!==t&&(e.alternate=null,os(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fa],delete t[pa],delete t[ma],delete t[ga],delete t[ba])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function is(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||is(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(at,n)}catch(l){}switch(n.tag){case 5:Xl||Zl(n,t);case 6:var r=cs,a=ds;cs=null,fs(e,t,n),ds=a,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),Bt(e)):sa(cs,n.stateNode));break;case 4:r=cs,a=ds,cs=n.stateNode.containerInfo,ds=!0,fs(e,t,n),cs=r,ds=a;break;case 0:case 11:case 14:case 15:if(!Xl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,void 0!==i&&(0!==(2&o)||0!==(4&o))&&es(n,t,i),a=a.next}while(a!==r)}fs(e,t,n);break;case 1:if(!Xl&&(Zl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Cu(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Xl=(r=Xl)||null!==n.memoizedState,fs(e,t,n),Xl=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Gl),t.forEach((function(t){var r=Tu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(o(160));ps(i,l,a),cs=null,ds=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(c){Cu(a,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),bs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){Cu(e,e.return,g)}try{ns(5,e,e.return)}catch(g){Cu(e,e.return,g)}}break;case 1:ms(t,e),bs(e),512&r&&null!==n&&Zl(n,n.return);break;case 5:if(ms(t,e),bs(e),512&r&&null!==n&&Zl(n,n.return),32&e.flags){var a=e.stateNode;try{fe(a,"")}catch(g){Cu(e,e.return,g)}}if(4&r&&null!=(a=e.stateNode)){var i=e.memoizedProps,l=null!==n?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===i.type&&null!=i.name&&G(a,i),ye(s,l);var c=ye(s,i);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?ge(a,f):"dangerouslySetInnerHTML"===d?de(a,f):"children"===d?fe(a,f):y(a,d,f,c)}switch(s){case"input":J(a,i);break;case"textarea":oe(a,i);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?ne(a,!!i.multiple,h,!1):p!==!!i.multiple&&(null!=i.defaultValue?ne(a,!!i.multiple,i.defaultValue,!0):ne(a,!!i.multiple,i.multiple?[]:"",!1))}a[pa]=i}catch(g){Cu(e,e.return,g)}}break;case 6:if(ms(t,e),bs(e),4&r){if(null===e.stateNode)throw Error(o(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(g){Cu(e,e.return,g)}}break;case 3:if(ms(t,e),bs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Bt(t.containerInfo)}catch(g){Cu(e,e.return,g)}break;case 4:default:ms(t,e),bs(e);break;case 13:ms(t,e),bs(e),8192&(a=e.child).flags&&(i=null!==a.memoizedState,a.stateNode.isHidden=i,!i||null!==a.alternate&&null!==a.alternate.memoizedState||(Us=Ge())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Xl=(c=Xl)||d,ms(t,e),Xl=c):ms(t,e),bs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Jl=e,d=e.child;null!==d;){for(f=Jl=d;null!==Jl;){switch(h=(p=Jl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Zl(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Cu(r,n,g)}}break;case 5:Zl(p,p.return);break;case 22:if(null!==p.memoizedState){ks(f);continue}}null!==h?(h.return=p,Jl=h):ks(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{a=f.stateNode,c?"function"===typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=f.stateNode,l=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=me("display",l))}catch(g){Cu(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Cu(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),bs(e),4&r&&hs(e);case 21:}}function bs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(is(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(fe(a,""),r.flags&=-33),us(e,ls(e),a);break;case 3:case 4:var i=r.stateNode.containerInfo;ss(e,ls(e),i);break;default:throw Error(o(161))}}catch(l){Cu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vs(e,t,n){Jl=e,ys(e,t,n)}function ys(e,t,n){for(var r=0!==(1&e.mode);null!==Jl;){var a=Jl,o=a.child;if(22===a.tag&&r){var i=null!==a.memoizedState||Ql;if(!i){var l=a.alternate,s=null!==l&&null!==l.memoizedState||Xl;l=Ql;var u=Xl;if(Ql=i,(Xl=s)&&!u)for(Jl=a;null!==Jl;)s=(i=Jl).child,22===i.tag&&null!==i.memoizedState?ws(a):null!==s?(s.return=i,Jl=s):ws(a);for(;null!==o;)Jl=o,ys(o,t,n),o=o.sibling;Jl=a,Ql=l,Xl=u}xs(e)}else 0!==(8772&a.subtreeFlags)&&null!==o?(o.return=a,Jl=o):xs(e)}}function xs(e){for(;null!==Jl;){var t=Jl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Xl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Xl)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Ho(t,i,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ho(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Bt(f)}}}break;default:throw Error(o(163))}Xl||512&t.flags&&as(t)}catch(p){Cu(t,t.return,p)}}if(t===e){Jl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Jl=n;break}Jl=t.return}}function ks(e){for(;null!==Jl;){var t=Jl;if(t===e){Jl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Jl=n;break}Jl=t.return}}function ws(e){for(;null!==Jl;){var t=Jl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Cu(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){Cu(t,a,s)}}var o=t.return;try{as(t)}catch(s){Cu(t,o,s)}break;case 5:var i=t.return;try{as(t)}catch(s){Cu(t,i,s)}}}catch(s){Cu(t,t.return,s)}if(t===e){Jl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Jl=l;break}Jl=t.return}}var Ss,Cs=Math.ceil,Es=x.ReactCurrentDispatcher,_s=x.ReactCurrentOwner,Ps=x.ReactCurrentBatchConfig,Ts=0,js=null,zs=null,Ns=0,Os=0,$s=Ca(0),Rs=0,Is=null,Ds=0,Ls=0,As=0,Fs=null,Ms=null,Us=0,Bs=1/0,Ws=null,Hs=!1,Vs=null,qs=null,Ks=!1,Ys=null,Qs=0,Xs=0,Gs=null,Js=-1,Zs=0;function eu(){return 0!==(6&Ts)?Ge():-1!==Js?Js:Js=Ge()}function tu(e){return 0===(1&e.mode)?1:0!==(2&Ts)&&0!==Ns?Ns&-Ns:null!==go.transition?(0===Zs&&(Zs=mt()),Zs):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Xt(e.type)}function nu(e,t,n,r){if(50<Xs)throw Xs=0,Gs=null,Error(o(185));bt(e,n,r),0!==(2&Ts)&&e===js||(e===js&&(0===(2&Ts)&&(Ls|=n),4===Rs&&lu(e,Ns)),ru(e,r),1===n&&0===Ts&&0===(1&t.mode)&&(Bs=Ge()+500,Fa&&Ba()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-it(o),l=1<<i,s=a[i];-1===s?0!==(l&n)&&0===(l&r)||(a[i]=pt(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}(e,t);var r=ft(e,e===js?Ns:0);if(0===r)null!==n&&Ye(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ye(n),1===t)0===e.tag?function(e){Fa=!0,Ua(e)}(su.bind(null,e)):Ua(su.bind(null,e)),ia((function(){0===(6&Ts)&&Ba()})),n=null;else{switch(xt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=ju(n,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function au(e,t){if(Js=-1,Zs=0,0!==(6&Ts))throw Error(o(327));var n=e.callbackNode;if(wu()&&e.callbackNode!==n)return null;var r=ft(e,e===js?Ns:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var a=Ts;Ts|=2;var i=hu();for(js===e&&Ns===t||(Ws=null,Bs=Ge()+500,fu(e,t));;)try{vu();break}catch(s){pu(e,s)}Po(),Es.current=i,Ts=a,null!==zs?t=0:(js=null,Ns=0,t=Rs)}if(0!==t){if(2===t&&(0!==(a=ht(e))&&(r=a,t=ou(e,a))),1===t)throw n=Is,fu(e,0),lu(e,r),ru(e,Ge()),n;if(6===t)lu(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!lr(o(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=gu(e,r))&&(0!==(i=ht(e))&&(r=i,t=ou(e,i))),1===t))throw n=Is,fu(e,0),lu(e,r),ru(e,Ge()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:ku(e,Ms,Ws);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=Us+500-Ge())){if(0!==ft(e,0))break;if(((a=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(ku.bind(null,e,Ms,Ws),t);break}ku(e,Ms,Ws);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-it(r);i=1<<l,(l=t[l])>a&&(a=l),r&=~i}if(r=a,10<(r=(120>(r=Ge()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cs(r/1960))-r)){e.timeoutHandle=ra(ku.bind(null,e,Ms,Ws),r);break}ku(e,Ms,Ws);break;default:throw Error(o(329))}}}return ru(e,Ge()),e.callbackNode===n?au.bind(null,e):null}function ou(e,t){var n=Fs;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=Ms,Ms=n,null!==t&&iu(t)),e}function iu(e){null===Ms?Ms=e:Ms.push.apply(Ms,e)}function lu(e,t){for(t&=~As,t&=~Ls,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&Ts))throw Error(o(327));wu();var t=ft(e,0);if(0===(1&t))return ru(e,Ge()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ou(e,r))}if(1===n)throw n=Is,fu(e,0),lu(e,t),ru(e,Ge()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ku(e,Ms,Ws),ru(e,Ge()),null}function uu(e,t){var n=Ts;Ts|=1;try{return e(t)}finally{0===(Ts=n)&&(Bs=Ge()+500,Fa&&Ba())}}function cu(e){null!==Ys&&0===Ys.tag&&0===(6&Ts)&&wu();var t=Ts;Ts|=1;var n=Ps.transition,r=yt;try{if(Ps.transition=null,yt=1,e)return e()}finally{yt=r,Ps.transition=n,0===(6&(Ts=t))&&Ba()}}function du(){Os=$s.current,Ea($s)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==zs)for(n=zs.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&$a();break;case 3:Go(),Ea(ja),Ea(Ta),ri();break;case 5:Zo(r);break;case 4:Go();break;case 13:case 19:Ea(ei);break;case 10:To(r.type._context);break;case 22:case 23:du()}n=n.return}if(js=e,zs=e=$u(e.current,null),Ns=Os=t,Rs=0,Is=null,As=Ls=Ds=0,Ms=Fs=null,null!==Oo){for(t=0;t<Oo.length;t++)if(null!==(r=(n=Oo[t]).interleaved)){n.interleaved=null;var a=r.next,o=n.pending;if(null!==o){var i=o.next;o.next=a,r.next=i}n.pending=r}Oo=null}return e}function pu(e,t){for(;;){var n=zs;try{if(Po(),ai.current=Ji,ci){for(var r=li.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}ci=!1}if(ii=0,ui=si=li=null,di=!1,fi=0,_s.current=null,null===n||null===n.return){Rs=1,Is=t,zs=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=Ns,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,bl(h,l,s,0,t),1&h.mode&&ml(i,c,t),u=c;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){ml(i,c,t),mu();break e}u=Error(o(426))}else if(ao&&1&s.mode){var b=gl(l);if(null!==b){0===(65536&b.flags)&&(b.flags|=256),bl(b,l,s,0,t),mo(ul(u,s));break e}}i=u=ul(u,s),4!==Rs&&(Rs=2),null===Fs?Fs=[i]:Fs.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Bo(i,pl(0,u,t));break e;case 1:s=u;var v=i.type,y=i.stateNode;if(0===(128&i.flags)&&("function"===typeof v.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===qs||!qs.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t,Bo(i,hl(i,s,t));break e}}i=i.return}while(null!==i)}xu(n)}catch(x){t=x,zs===n&&null!==n&&(zs=n=n.return);continue}break}}function hu(){var e=Es.current;return Es.current=Ji,null===e?Ji:e}function mu(){0!==Rs&&3!==Rs&&2!==Rs||(Rs=4),null===js||0===(268435455&Ds)&&0===(268435455&Ls)||lu(js,Ns)}function gu(e,t){var n=Ts;Ts|=2;var r=hu();for(js===e&&Ns===t||(Ws=null,fu(e,t));;)try{bu();break}catch(a){pu(e,a)}if(Po(),Ts=n,Es.current=r,null!==zs)throw Error(o(261));return js=null,Ns=0,Rs}function bu(){for(;null!==zs;)yu(zs)}function vu(){for(;null!==zs&&!Qe();)yu(zs)}function yu(e){var t=Ss(e.alternate,e,Os);e.memoizedProps=e.pendingProps,null===t?xu(e):zs=t,_s.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Kl(n,t,Os)))return void(zs=n)}else{if(null!==(n=Yl(n,t)))return n.flags&=32767,void(zs=n);if(null===e)return Rs=6,void(zs=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(zs=t);zs=t=e}while(null!==t);0===Rs&&(Rs=5)}function ku(e,t,n){var r=yt,a=Ps.transition;try{Ps.transition=null,yt=1,function(e,t,n,r){do{wu()}while(null!==Ys);if(0!==(6&Ts))throw Error(o(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-it(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}(e,i),e===js&&(zs=js=null,Ns=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Ks||(Ks=!0,ju(tt,(function(){return wu(),null}))),i=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||i){i=Ps.transition,Ps.transition=null;var l=yt;yt=1;var s=Ts;Ts|=4,_s.current=null,function(e,t){if(ea=Ht,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(k){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==i||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=l),p===i&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Ht=!1,Jl=t;null!==Jl;)if(e=(t=Jl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Jl=e;else for(;null!==Jl;){t=Jl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,b=m.memoizedState,v=t.stateNode,y=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),b);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(o(163))}}catch(k){Cu(t,t.return,k)}if(null!==(e=t.sibling)){e.return=t.return,Jl=e;break}Jl=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(ta),Ht=!!ea,ta=ea=null,e.current=n,vs(n,e,a),Xe(),Ts=s,yt=l,Ps.transition=i}else e.current=n;if(Ks&&(Ks=!1,Ys=e,Qs=a),i=e.pendingLanes,0===i&&(qs=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Ge()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Hs)throw Hs=!1,e=Vs,Vs=null,e;0!==(1&Qs)&&0!==e.tag&&wu(),i=e.pendingLanes,0!==(1&i)?e===Gs?Xs++:(Xs=0,Gs=e):Xs=0,Ba()}(e,t,n,r)}finally{Ps.transition=a,yt=r}return null}function wu(){if(null!==Ys){var e=xt(Qs),t=Ps.transition,n=yt;try{if(Ps.transition=null,yt=16>e?16:e,null===Ys)var r=!1;else{if(e=Ys,Ys=null,Qs=0,0!==(6&Ts))throw Error(o(331));var a=Ts;for(Ts|=4,Jl=e.current;null!==Jl;){var i=Jl,l=i.child;if(0!==(16&Jl.flags)){var s=i.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Jl=c;null!==Jl;){var d=Jl;switch(d.tag){case 0:case 11:case 15:ns(8,d,i)}var f=d.child;if(null!==f)f.return=d,Jl=f;else for(;null!==Jl;){var p=(d=Jl).sibling,h=d.return;if(os(d),d===c){Jl=null;break}if(null!==p){p.return=h,Jl=p;break}Jl=h}}}var m=i.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var b=g.sibling;g.sibling=null,g=b}while(null!==g)}}Jl=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,Jl=l;else e:for(;null!==Jl;){if(0!==(2048&(i=Jl).flags))switch(i.tag){case 0:case 11:case 15:ns(9,i,i.return)}var v=i.sibling;if(null!==v){v.return=i.return,Jl=v;break e}Jl=i.return}}var y=e.current;for(Jl=y;null!==Jl;){var x=(l=Jl).child;if(0!==(2064&l.subtreeFlags)&&null!==x)x.return=l,Jl=x;else e:for(l=y;null!==Jl;){if(0!==(2048&(s=Jl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(w){Cu(s,s.return,w)}if(s===l){Jl=null;break e}var k=s.sibling;if(null!==k){k.return=s.return,Jl=k;break e}Jl=s.return}}if(Ts=a,Ba(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(at,e)}catch(w){}r=!0}return r}finally{yt=n,Ps.transition=t}}return!1}function Su(e,t,n){e=Mo(e,t=pl(0,t=ul(n,t),1),1),t=eu(),null!==e&&(bt(e,1,t),ru(e,t))}function Cu(e,t,n){if(3===e.tag)Su(e,e,n);else for(;null!==t;){if(3===t.tag){Su(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===qs||!qs.has(r))){t=Mo(t,e=hl(t,e=ul(n,e),1),1),e=eu(),null!==t&&(bt(t,1,e),ru(t,e));break}}t=t.return}}function Eu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,js===e&&(Ns&n)===n&&(4===Rs||3===Rs&&(130023424&Ns)===Ns&&500>Ge()-Us?fu(e,0):As|=n),ru(e,t)}function _u(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Io(e,t))&&(bt(e,t,n),ru(e,n))}function Pu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),_u(e,n)}function Tu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),_u(e,n)}function ju(e,t){return Ke(e,t)}function zu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nu(e,t,n,r){return new zu(e,t,n,r)}function Ou(e){return!(!(e=e.prototype)||!e.isReactComponent)}function $u(e,t){var n=e.alternate;return null===n?((n=Nu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ru(e,t,n,r,a,i){var l=2;if(r=e,"function"===typeof e)Ou(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case S:return Iu(n.children,a,i,t);case C:l=8,a|=8;break;case E:return(e=Nu(12,n,t,2|a)).elementType=E,e.lanes=i,e;case j:return(e=Nu(13,n,t,a)).elementType=j,e.lanes=i,e;case z:return(e=Nu(19,n,t,a)).elementType=z,e.lanes=i,e;case $:return Du(n,a,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case _:l=10;break e;case P:l=9;break e;case T:l=11;break e;case N:l=14;break e;case O:l=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Nu(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Iu(e,t,n,r){return(e=Nu(7,e,r,t)).lanes=n,e}function Du(e,t,n,r){return(e=Nu(22,e,r,t)).elementType=$,e.lanes=n,e.stateNode={isHidden:!1},e}function Lu(e,t,n){return(e=Nu(6,e,null,t)).lanes=n,e}function Au(e,t,n){return(t=Nu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fu(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Mu(e,t,n,r,a,o,i,l,s){return e=new Fu(e,t,n,l,s),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Nu(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lo(o),e}function Uu(e){if(!e)return Pa;e:{if(Be(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oa(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Oa(n))return Ia(e,n,t)}return t}function Bu(e,t,n,r,a,o,i,l,s){return(e=Mu(n,r,!0,e,0,o,0,l,s)).context=Uu(null),n=e.current,(o=Fo(r=eu(),a=tu(n))).callback=void 0!==t&&null!==t?t:null,Mo(n,o,a),e.current.lanes=a,bt(e,a,r),ru(e,r),e}function Wu(e,t,n,r){var a=t.current,o=eu(),i=tu(a);return n=Uu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Fo(o,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Mo(a,t,i))&&(nu(e,a,i,o),Uo(e,a,i)),i}function Hu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function qu(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}Ss=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||ja.current)yl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return yl=!1,function(e,t,n){switch(t.tag){case 3:jl(t),ho();break;case 5:Jo(t);break;case 1:Oa(t.type)&&Da(t);break;case 4:Xo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;_a(So,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(_a(ei,1&ei.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ll(e,t,n):(_a(ei,1&ei.current),null!==(e=Hl(e,t,n))?e.sibling:null);_a(ei,1&ei.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Bl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),_a(ei,ei.current),r)break;return null;case 22:case 23:return t.lanes=0,Cl(e,t,n)}return Hl(e,t,n)}(e,t,n);yl=0!==(131072&e.flags)}else yl=!1,ao&&0!==(1048576&t.flags)&&Za(t,qa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wl(e,t),e=t.pendingProps;var a=Na(t,Ta.current);zo(t,n),a=gi(null,t,r,e,a,n);var i=bi();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oa(r)?(i=!0,Da(t)):i=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Lo(t),a.updater=al,t.stateNode=a,a._reactInternals=t,sl(t,r,e,n),t=Tl(null,t,r,!0,i,n)):(t.tag=0,ao&&i&&eo(t),xl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Ou(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===T)return 11;if(e===N)return 14}return 2}(r),e=nl(r,e),a){case 0:t=_l(null,t,r,e,n);break e;case 1:t=Pl(null,t,r,e,n);break e;case 11:t=kl(null,t,r,e,n);break e;case 14:t=wl(null,t,r,nl(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,_l(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 1:return r=t.type,a=t.pendingProps,Pl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 3:e:{if(jl(t),null===e)throw Error(o(387));r=t.pendingProps,a=(i=t.memoizedState).element,Ao(e,t),Wo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=zl(e,t,r,n,a=ul(Error(o(423)),t));break e}if(r!==a){t=zl(e,t,r,n,a=ul(Error(o(424)),t));break e}for(ro=ua(t.stateNode.containerInfo.firstChild),no=t,ao=!0,oo=null,n=wo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ho(),r===a){t=Hl(e,t,n);break e}xl(e,t,r,n)}t=t.child}return t;case 5:return Jo(t),null===e&&uo(t),r=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,l=a.children,na(r,a)?l=null:null!==i&&na(r,i)&&(t.flags|=32),El(e,t),xl(e,t,l,n),t.child;case 6:return null===e&&uo(t),null;case 13:return Ll(e,t,n);case 4:return Xo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ko(t,null,r,n):xl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,kl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 7:return xl(e,t,t.pendingProps,n),t.child;case 8:case 12:return xl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,_a(So,r._currentValue),r._currentValue=l,null!==i)if(lr(i.value,l)){if(i.children===a.children&&!ja.current){t=Hl(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===i.tag){(u=Fo(-1,n&-n)).tag=2;var c=i.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,null!==(u=i.alternate)&&(u.lanes|=n),jo(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(o(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),jo(l,n,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}xl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,zo(t,n),r=r(a=No(a)),t.flags|=1,xl(e,t,r,n),t.child;case 14:return a=nl(r=t.type,t.pendingProps),wl(e,t,r,a=nl(r.type,a),n);case 15:return Sl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nl(r,a),Wl(e,t),t.tag=1,Oa(r)?(e=!0,Da(t)):e=!1,zo(t,n),il(t,r,a),sl(t,r,a,n),Tl(null,t,r,!0,e,n);case 19:return Bl(e,t,n);case 22:return Cl(e,t,n)}throw Error(o(156,t.tag))};var Ku="function"===typeof reportError?reportError:function(e){console.error(e)};function Yu(e){this._internalRoot=e}function Qu(e){this._internalRoot=e}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Ju(){}function Zu(e,t,n,r,a){var o=n._reactRootContainer;if(o){var i=o;if("function"===typeof a){var l=a;a=function(){var e=Hu(i);l.call(e)}}Wu(t,i,e,a)}else i=function(e,t,n,r,a){if(a){if("function"===typeof r){var o=r;r=function(){var e=Hu(i);o.call(e)}}var i=Bu(t,r,e,0,null,!1,0,"",Ju);return e._reactRootContainer=i,e[ha]=i.current,Br(8===e.nodeType?e.parentNode:e),cu(),i}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=Hu(s);l.call(e)}}var s=Mu(e,0,!1,null,0,!1,0,"",Ju);return e._reactRootContainer=s,e[ha]=s.current,Br(8===e.nodeType?e.parentNode:e),cu((function(){Wu(t,s,n,r)})),s}(n,t,e,a,r);return Hu(i)}Qu.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Wu(e,t,null,null)},Qu.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){Wu(null,e,null,null)})),t[ha]=null}},Qu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&0!==t&&t<$t[n].priority;n++);$t.splice(n,0,e),0===n&&Lt(e)}},kt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(vt(t,1|n),ru(t,Ge()),0===(6&Ts)&&(Bs=Ge()+500,Ba()))}break;case 13:cu((function(){var t=Io(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),qu(e,1)}},wt=function(e){if(13===e.tag){var t=Io(e,134217728);if(null!==t)nu(t,e,134217728,eu());qu(e,134217728)}},St=function(e){if(13===e.tag){var t=tu(e),n=Io(e,t);if(null!==n)nu(n,e,t,eu());qu(e,t)}},Ct=function(){return yt},Et=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},we=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=ka(r);if(!a)throw Error(o(90));K(r),J(r,a)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Te=uu,je=cu;var ec={usingClientEntryPoint:!1,Events:[ya,xa,ka,_e,Pe,uu]},tc={findFiberByHostInstance:va,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{at=rc.inject(nc),ot=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Xu(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:w,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Xu(e))throw Error(o(299));var n=!1,r="",a=Ku;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Mu(e,1,!1,null,0,n,0,r,a),e[ha]=t.current,Br(8===e.nodeType?e.parentNode:e),new Yu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Gu(t))throw Error(o(200));return Zu(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Xu(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,a=!1,i="",l=Ku;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Bu(t,null,e,1,null!=n?n:null,a,0,i,l),e[ha]=t.current,Br(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Qu(t)},t.render=function(e,t,n){if(!Gu(t))throw Error(o(200));return Zu(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Gu(e))throw Error(o(40));return!!e._reactRootContainer&&(cu((function(){Zu(null,null,e,!1,(function(){e._reactRootContainer=null,e[ha]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gu(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Zu(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},763:(e,t,n)=>{"use strict";e.exports=n(983)},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},983:(e,t)=>{"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,y=n?Symbol.for("react.responder"):60118,x=n?Symbol.for("react.scope"):60119;function k(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case c:case d:case o:case l:case i:case p:return e;default:switch(e=e&&e.$$typeof){case u:case f:case g:case m:case s:return e;default:return t}}case a:return t}}}function w(e){return k(e)===d}t.AsyncMode=c,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=s,t.Element=r,t.ForwardRef=f,t.Fragment=o,t.Lazy=g,t.Memo=m,t.Portal=a,t.Profiler=l,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(e){return w(e)||k(e)===c},t.isConcurrentMode=w,t.isContextConsumer=function(e){return k(e)===u},t.isContextProvider=function(e){return k(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return k(e)===f},t.isFragment=function(e){return k(e)===o},t.isLazy=function(e){return k(e)===g},t.isMemo=function(e){return k(e)===m},t.isPortal=function(e){return k(e)===a},t.isProfiler=function(e){return k(e)===l},t.isStrictMode=function(e){return k(e)===i},t.isSuspense=function(e){return k(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===d||e===l||e===i||e===p||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===s||e.$$typeof===u||e.$$typeof===f||e.$$typeof===v||e.$$typeof===y||e.$$typeof===x||e.$$typeof===b)},t.typeOf=k}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,n.d(o,i),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".10b8070d.chunk.js",n.miniCssF=e=>{},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="missing-principal:";n.l=(r,a,o,i)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[a];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/DirectorNi/",(()=>{var e={792:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=o);var i=n.p+n.u(t),l=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,o,i=r[0],l=r[1],s=r[2],u=0;if(i.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)s(n)}for(t&&t(r);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkmissing_principal=self.webpackChunkmissing_principal||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e,t=n(43),r=n.t(t,2),a=n(391),o=n(950),i=n.t(o,2);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const s="popstate";function u(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function c(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function f(e,t,n,r){return void 0===n&&(n=null),l({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?h(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function p(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function h(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m(t,n,r,a){void 0===a&&(a={});let{window:o=document.defaultView,v5Compat:i=!1}=a,c=o.history,h=e.Pop,m=null,g=b();function b(){return(c.state||{idx:null}).idx}function v(){h=e.Pop;let t=b(),n=null==t?null:t-g;g=t,m&&m({action:h,location:x.location,delta:n})}function y(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"===typeof e?e:p(e);return n=n.replace(/ $/,"%20"),u(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,c.replaceState(l({},c.state,{idx:g}),""));let x={get action(){return h},get location(){return t(o,c)},listen(e){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(s,v),m=e,()=>{o.removeEventListener(s,v),m=null}},createHref:e=>n(o,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){h=e.Push;let a=f(x.location,t,n);r&&r(a,t),g=b()+1;let l=d(a,g),s=x.createHref(a);try{c.pushState(l,"",s)}catch(u){if(u instanceof DOMException&&"DataCloneError"===u.name)throw u;o.location.assign(s)}i&&m&&m({action:h,location:x.location,delta:1})},replace:function(t,n){h=e.Replace;let a=f(x.location,t,n);r&&r(a,t),g=b();let o=d(a,g),l=x.createHref(a);c.replaceState(o,"",l),i&&m&&m({action:h,location:x.location,delta:0})},go:e=>c.go(e)};return x}var g;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(g||(g={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function b(e,t,n){return void 0===n&&(n="/"),v(e,t,n,!1)}function v(e,t,n,r){let a=O(("string"===typeof t?h(t):t).pathname||"/",n);if(null==a)return null;let o=y(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let i=null;for(let l=0;null==i&&l<o.length;++l){let e=N(a);i=j(o[l],e,r)}return i}function y(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,o)=>{let i={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};i.relativePath.startsWith("/")&&(u(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(r.length));let l=L([r,i.relativePath]),s=n.concat(i);e.children&&e.children.length>0&&(u(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),y(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:T(l,e.index),routesMeta:s})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of x(e.path))a(e,t,r);else a(e,t)})),t}function x(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let i=x(r.join("/")),l=[];return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),a&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const k=/^:[\w-]+$/,w=3,S=2,C=1,E=10,_=-2,P=e=>"*"===e;function T(e,t){let n=e.split("/"),r=n.length;return n.some(P)&&(r+=_),t&&(r+=S),n.filter((e=>!P(e))).reduce(((e,t)=>e+(k.test(t)?w:""===t?C:E)),r)}function j(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,a={},o="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,u="/"===o?t:t.slice(o.length)||"/",c=z({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=z({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(a,c.params),i.push({params:a,pathname:L([o,c.pathname]),pathnameBase:A(L([o,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(o=L([o,c.pathnameBase]))}return i}function z(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);c("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let o=new RegExp(a,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function N(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return c(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function O(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function $(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function R(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function I(e,t){let n=R(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function D(e,t,n,r){let a;void 0===r&&(r=!1),"string"===typeof e?a=h(e):(a=l({},e),u(!a.pathname||!a.pathname.includes("?"),$("?","pathname","search",a)),u(!a.pathname||!a.pathname.includes("#"),$("#","pathname","hash",a)),u(!a.search||!a.search.includes("#"),$("#","search","hash",a)));let o,i=""===e||""===a.pathname,s=i?"/":a.pathname;if(null==s)o=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}o=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"===typeof e?h(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:F(r),hash:M(a)}}(a,o),d=s&&"/"!==s&&s.endsWith("/"),f=(i||"."===s)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!f||(c.pathname+="/"),c}const L=e=>e.join("/").replace(/\/\/+/g,"/"),A=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),F=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",M=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function U(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const B=["post","put","patch","delete"],W=(new Set(B),["get",...B]);new Set(W),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(this,arguments)}const V=t.createContext(null);const q=t.createContext(null);const K=t.createContext(null);const Y=t.createContext(null);const Q=t.createContext({outlet:null,matches:[],isDataRoute:!1});const X=t.createContext(null);function G(){return null!=t.useContext(Y)}function J(){return G()||u(!1),t.useContext(Y).location}function Z(e){t.useContext(K).static||t.useLayoutEffect(e)}function ee(){let{isDataRoute:e}=t.useContext(Q);return e?function(){let{router:e}=ue(le.UseNavigateStable),n=de(se.UseNavigateStable),r=t.useRef(!1);return Z((()=>{r.current=!0})),t.useCallback((function(t,a){void 0===a&&(a={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,H({fromRouteId:n},a)))}),[e,n])}():function(){G()||u(!1);let e=t.useContext(V),{basename:n,future:r,navigator:a}=t.useContext(K),{matches:o}=t.useContext(Q),{pathname:i}=J(),l=JSON.stringify(I(o,r.v7_relativeSplatPath)),s=t.useRef(!1);return Z((()=>{s.current=!0})),t.useCallback((function(t,r){if(void 0===r&&(r={}),!s.current)return;if("number"===typeof t)return void a.go(t);let o=D(t,JSON.parse(l),i,"path"===r.relative);null==e&&"/"!==n&&(o.pathname="/"===o.pathname?n:L([n,o.pathname])),(r.replace?a.replace:a.push)(o,r.state,r)}),[n,a,l,i,e])}()}function te(n,r,a,o){G()||u(!1);let{navigator:i,static:l}=t.useContext(K),{matches:s}=t.useContext(Q),c=s[s.length-1],d=c?c.params:{},f=(c&&c.pathname,c?c.pathnameBase:"/");c&&c.route;let p,m=J();if(r){var g;let e="string"===typeof r?h(r):r;"/"===f||(null==(g=e.pathname)?void 0:g.startsWith(f))||u(!1),p=e}else p=m;let v=p.pathname||"/",y=v;if("/"!==f){let e=f.replace(/^\//,"").split("/");y="/"+v.replace(/^\//,"").split("/").slice(e.length).join("/")}let x=!l&&a&&a.matches&&a.matches.length>0?a.matches:b(n,{pathname:y});let k=ie(x&&x.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:L([f,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?f:L([f,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,a,o);return r&&k?t.createElement(Y.Provider,{value:{location:H({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:e.Pop}},k):k}function ne(){let e=function(){var e;let n=t.useContext(X),r=ce(se.UseRouteError),a=de(se.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[a]}(),n=U(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:o},r):null,null)}const re=t.createElement(ne,null);class ae extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(Q.Provider,{value:this.props.routeContext},t.createElement(X.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oe(e){let{routeContext:n,match:r,children:a}=e,o=t.useContext(V);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(Q.Provider,{value:n},a)}function ie(e,n,r,a){var o;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===a&&(a=null),null==e){var i;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(i=a)&&i.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let l=e,s=null==(o=r)?void 0:o.errors;if(null!=s){let e=l.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||u(!1),l=l.slice(0,Math.min(l.length,e+1))}let c=!1,d=-1;if(r&&a&&a.v7_partialHydration)for(let t=0;t<l.length;t++){let e=l[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,a=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||a){c=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight(((e,a,o)=>{let i,u=!1,f=null,p=null;var h;r&&(i=s&&a.route.id?s[a.route.id]:void 0,f=a.route.errorElement||re,c&&(d<0&&0===o?(h="route-fallback",!1||fe[h]||(fe[h]=!0),u=!0,p=null):d===o&&(u=!0,p=a.route.hydrateFallbackElement||null)));let m=n.concat(l.slice(0,o+1)),g=()=>{let n;return n=i?f:u?p:a.route.Component?t.createElement(a.route.Component,null):a.route.element?a.route.element:e,t.createElement(oe,{match:a,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:n})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?t.createElement(ae,{location:r.location,revalidation:r.revalidation,component:f,error:i,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var le=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(le||{}),se=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(se||{});function ue(e){let n=t.useContext(V);return n||u(!1),n}function ce(e){let n=t.useContext(q);return n||u(!1),n}function de(e){let n=function(){let e=t.useContext(Q);return e||u(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||u(!1),r.route.id}const fe={};function pe(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}r.startTransition;function he(e){u(!1)}function me(n){let{basename:r="/",children:a=null,location:o,navigationType:i=e.Pop,navigator:l,static:s=!1,future:c}=n;G()&&u(!1);let d=r.replace(/^\/*/,"/"),f=t.useMemo((()=>({basename:d,navigator:l,static:s,future:H({v7_relativeSplatPath:!1},c)})),[d,c,l,s]);"string"===typeof o&&(o=h(o));let{pathname:p="/",search:m="",hash:g="",state:b=null,key:v="default"}=o,y=t.useMemo((()=>{let e=O(p,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:b,key:v},navigationType:i}}),[d,p,m,g,b,v,i]);return null==y?null:t.createElement(K.Provider,{value:f},t.createElement(Y.Provider,{children:a,value:y}))}function ge(e){let{children:t,location:n}=e;return te(be(t),n)}new Promise((()=>{}));t.Component;function be(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,((e,a)=>{if(!t.isValidElement(e))return;let o=[...n,a];if(e.type===t.Fragment)return void r.push.apply(r,be(e.props.children,o));e.type!==he&&u(!1),e.props.index&&e.props.children&&u(!1);let i={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=be(e.props.children,o)),r.push(i)})),r}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(Ya){}new Map;const ve=r.startTransition;i.flushSync,r.useId;function ye(e){let{basename:n,children:r,future:a,window:o}=e,i=t.useRef();var l;null==i.current&&(i.current=(void 0===(l={window:o,v5Compat:!0})&&(l={}),m((function(e,t){let{pathname:n="/",search:r="",hash:a=""}=h(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),f("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"===typeof t?t:p(t))}),(function(e,t){c("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),l)));let s=i.current,[u,d]=t.useState({action:s.action,location:s.location}),{v7_startTransition:g}=a||{},b=t.useCallback((e=>{g&&ve?ve((()=>d(e))):d(e)}),[d,g]);return t.useLayoutEffect((()=>s.listen(b)),[s,b]),t.useEffect((()=>pe(a)),[a]),t.createElement(me,{basename:n,children:r,location:u.location,navigationType:u.action,navigator:s,future:a})}"undefined"!==typeof window&&"undefined"!==typeof window.document&&window.document.createElement;var xe,ke;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(xe||(xe={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(ke||(ke={}));var we=n(528),Se=n(324),Ce=n.n(Se);const Ee=function(e){function t(e,r,s,u,f){for(var p,h,m,g,x,w=0,S=0,C=0,E=0,_=0,O=0,R=m=p=0,D=0,L=0,A=0,F=0,M=s.length,U=M-1,B="",W="",H="",V="";D<M;){if(h=s.charCodeAt(D),D===U&&0!==S+E+C+w&&(0!==S&&(h=47===S?10:47),E=C=w=0,M++,U++),0===S+E+C+w){if(D===U&&(0<L&&(B=B.replace(d,"")),0<B.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:B+=s.charAt(D)}h=59}switch(h){case 123:for(p=(B=B.trim()).charCodeAt(0),m=1,F=++D;D<M;){switch(h=s.charCodeAt(D)){case 123:m++;break;case 125:m--;break;case 47:switch(h=s.charCodeAt(D+1)){case 42:case 47:e:{for(R=D+1;R<U;++R)switch(s.charCodeAt(R)){case 47:if(42===h&&42===s.charCodeAt(R-1)&&D+2!==R){D=R+1;break e}break;case 10:if(47===h){D=R+1;break e}}D=R}}break;case 91:h++;case 40:h++;case 34:case 39:for(;D++<U&&s.charCodeAt(D)!==h;);}if(0===m)break;D++}if(m=s.substring(F,D),0===p&&(p=(B=B.replace(c,"").trim()).charCodeAt(0)),64===p){switch(0<L&&(B=B.replace(d,"")),h=B.charCodeAt(1)){case 100:case 109:case 115:case 45:L=r;break;default:L=N}if(F=(m=t(r,L,m,h,f+1)).length,0<$&&(x=l(3,m,L=n(N,B,A),r,T,P,F,h,f,u),B=L.join(""),void 0!==x&&0===(F=(m=x.trim()).length)&&(h=0,m="")),0<F)switch(h){case 115:B=B.replace(k,i);case 100:case 109:case 45:m=B+"{"+m+"}";break;case 107:m=(B=B.replace(b,"$1 $2"))+"{"+m+"}",m=1===z||2===z&&o("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=B+m,112===u&&(W+=m,m="")}else m=""}else m=t(r,n(r,B,A),m,u,f+1);H+=m,m=A=L=R=p=0,B="",h=s.charCodeAt(++D);break;case 125:case 59:if(1<(F=(B=(0<L?B.replace(d,""):B).trim()).length))switch(0===R&&(p=B.charCodeAt(0),45===p||96<p&&123>p)&&(F=(B=B.replace(" ",":")).length),0<$&&void 0!==(x=l(1,B,r,e,T,P,W.length,u,f,u))&&0===(F=(B=x.trim()).length)&&(B="\0\0"),p=B.charCodeAt(0),h=B.charCodeAt(1),p){case 0:break;case 64:if(105===h||99===h){V+=B+s.charAt(D);break}default:58!==B.charCodeAt(F-1)&&(W+=a(B,p,h,B.charCodeAt(2)))}A=L=R=p=0,B="",h=s.charCodeAt(++D)}}switch(h){case 13:case 10:47===S?S=0:0===1+p&&107!==u&&0<B.length&&(L=1,B+="\0"),0<$*I&&l(0,B,r,e,T,P,W.length,u,f,u),P=1,T++;break;case 59:case 125:if(0===S+E+C+w){P++;break}default:switch(P++,g=s.charAt(D),h){case 9:case 32:if(0===E+w+S)switch(_){case 44:case 58:case 9:case 32:g="";break;default:32!==h&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===E+S+w&&(L=A=1,g="\f"+g);break;case 108:if(0===E+S+w+j&&0<R)switch(D-R){case 2:112===_&&58===s.charCodeAt(D-3)&&(j=_);case 8:111===O&&(j=O)}break;case 58:0===E+S+w&&(R=D);break;case 44:0===S+C+E+w&&(L=1,g+="\r");break;case 34:case 39:0===S&&(E=E===h?0:0===E?h:E);break;case 91:0===E+S+C&&w++;break;case 93:0===E+S+C&&w--;break;case 41:0===E+S+w&&C--;break;case 40:if(0===E+S+w){if(0===p)if(2*_+3*O===533);else p=1;C++}break;case 64:0===S+C+E+w+R+m&&(m=1);break;case 42:case 47:if(!(0<E+w+C))switch(S){case 0:switch(2*h+3*s.charCodeAt(D+1)){case 235:S=47;break;case 220:F=D,S=42}break;case 42:47===h&&42===_&&F+2!==D&&(33===s.charCodeAt(F+2)&&(W+=s.substring(F,D+1)),g="",S=0)}}0===S&&(B+=g)}O=_,_=h,D++}if(0<(F=W.length)){if(L=r,0<$&&(void 0!==(x=l(2,W,L,e,T,P,F,u,f,u))&&0===(W=x).length))return V+W+H;if(W=L.join(",")+"{"+W+"}",0!==z*j){switch(2!==z||o(W,2)||(j=0),j){case 111:W=W.replace(y,":-moz-$1")+W;break;case 112:W=W.replace(v,"::-webkit-input-$1")+W.replace(v,"::-moz-$1")+W.replace(v,":-ms-input-$1")+W}j=0}}return V+W+H}function n(e,t,n){var a=t.trim().split(m);t=a;var o=a.length,i=e.length;switch(i){case 0:case 1:var l=0;for(e=0===i?"":e[0]+" ";l<o;++l)t[l]=r(e,t[l],n).trim();break;default:var s=l=0;for(t=[];l<o;++l)for(var u=0;u<i;++u)t[s++]=r(e[u]+" ",a[l],n).trim()}return t}function r(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function a(e,t,n,r){var i=e+";",l=2*t+3*n+4*r;if(944===l){e=i.indexOf(":",9)+1;var s=i.substring(e,i.length-1).trim();return s=i.substring(0,e).trim()+s+";",1===z||2===z&&o(s,1)?"-webkit-"+s+s:s}if(0===z||2===z&&!o(i,1))return i;switch(l){case 1015:return 97===i.charCodeAt(10)?"-webkit-"+i+i:i;case 951:return 116===i.charCodeAt(3)?"-webkit-"+i+i:i;case 963:return 110===i.charCodeAt(5)?"-webkit-"+i+i:i;case 1009:if(100!==i.charCodeAt(4))break;case 969:case 942:return"-webkit-"+i+i;case 978:return"-webkit-"+i+"-moz-"+i+i;case 1019:case 983:return"-webkit-"+i+"-moz-"+i+"-ms-"+i+i;case 883:if(45===i.charCodeAt(8))return"-webkit-"+i+i;if(0<i.indexOf("image-set(",11))return i.replace(_,"$1-webkit-$2")+i;break;case 932:if(45===i.charCodeAt(4))switch(i.charCodeAt(5)){case 103:return"-webkit-box-"+i.replace("-grow","")+"-webkit-"+i+"-ms-"+i.replace("grow","positive")+i;case 115:return"-webkit-"+i+"-ms-"+i.replace("shrink","negative")+i;case 98:return"-webkit-"+i+"-ms-"+i.replace("basis","preferred-size")+i}return"-webkit-"+i+"-ms-"+i+i;case 964:return"-webkit-"+i+"-ms-flex-"+i+i;case 1023:if(99!==i.charCodeAt(8))break;return"-webkit-box-pack"+(s=i.substring(i.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+i+"-ms-flex-pack"+s+i;case 1005:return p.test(i)?i.replace(f,":-webkit-")+i.replace(f,":-moz-")+i:i;case 1e3:switch(t=(s=i.substring(13).trim()).indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(t)){case 226:s=i.replace(x,"tb");break;case 232:s=i.replace(x,"tb-rl");break;case 220:s=i.replace(x,"lr");break;default:return i}return"-webkit-"+i+"-ms-"+s+i;case 1017:if(-1===i.indexOf("sticky",9))break;case 975:switch(t=(i=e).length-10,l=(s=(33===i.charCodeAt(t)?i.substring(0,t):i).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(111>s.charCodeAt(8))break;case 115:i=i.replace(s,"-webkit-"+s)+";"+i;break;case 207:case 102:i=i.replace(s,"-webkit-"+(102<l?"inline-":"")+"box")+";"+i.replace(s,"-webkit-"+s)+";"+i.replace(s,"-ms-"+s+"box")+";"+i}return i+";";case 938:if(45===i.charCodeAt(5))switch(i.charCodeAt(6)){case 105:return s=i.replace("-items",""),"-webkit-"+i+"-webkit-box-"+s+"-ms-flex-"+s+i;case 115:return"-webkit-"+i+"-ms-flex-item-"+i.replace(S,"")+i;default:return"-webkit-"+i+"-ms-flex-line-pack"+i.replace("align-content","").replace(S,"")+i}break;case 973:case 989:if(45!==i.charCodeAt(3)||122===i.charCodeAt(4))break;case 931:case 953:if(!0===E.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?a(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):i.replace(s,"-webkit-"+s)+i.replace(s,"-moz-"+s.replace("fill-",""))+i;break;case 962:if(i="-webkit-"+i+(102===i.charCodeAt(5)?"-ms-"+i:"")+i,211===n+r&&105===i.charCodeAt(13)&&0<i.indexOf("transform",10))return i.substring(0,i.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+i}return i}function o(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),R(2!==t?r:r.replace(C,"$1"),n,t)}function i(e,t){var n=a(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(w," or ($1)").substring(4):"("+t+")"}function l(e,t,n,r,a,o,i,l,s,c){for(var d,f=0,p=t;f<$;++f)switch(d=O[f].call(u,e,p,n,r,a,o,i,l,s,c)){case void 0:case!1:case!0:case null:break;default:p=d}if(p!==t)return p}function s(e){return void 0!==(e=e.prefix)&&(R=null,e?"function"!==typeof e?z=1:(z=2,R=e):z=0),s}function u(e,n){var r=e;if(33>r.charCodeAt(0)&&(r=r.trim()),r=[r],0<$){var a=l(-1,n,r,r,T,P,0,0,0,0);void 0!==a&&"string"===typeof a&&(n=a)}var o=t(N,r,n,0,0);return 0<$&&(void 0!==(a=l(-2,o,r,r,T,P,o.length,0,0,0))&&(o=a)),j=0,P=T=1,o}var c=/^\0+/g,d=/[\0\r\f]/g,f=/: */g,p=/zoo|gra/,h=/([,: ])(transform)/g,m=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,b=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,y=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,S=/-self|flex-/g,C=/[^]*?(:[rp][el]a[\w-]+)[^]*/,E=/stretch|:\s*\w+\-(?:conte|avail)/,_=/([^-])(image-set\()/,P=1,T=1,j=0,z=1,N=[],O=[],$=0,R=null,I=0;return u.use=function e(t){switch(t){case void 0:case null:$=O.length=0;break;default:if("function"===typeof t)O[$++]=t;else if("object"===typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else I=0|!!t}return e},u.set=s,void 0!==e&&s(e),u};const _e={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Pe(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var Te=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,je=Pe((function(e){return Te.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),ze=n(219),Ne=n.n(ze);function Oe(){return(Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var $e=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},Re=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,we.QP)(e)},Ie=Object.freeze([]),De=Object.freeze({});function Le(e){return"function"==typeof e}function Ae(e){return e.displayName||e.name||"Component"}function Fe(e){return e&&"string"==typeof e.styledComponentId}var Me="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/DirectorNi",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/DirectorNi",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/DirectorNi",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Ue="undefined"!=typeof window&&"HTMLElement"in window,Be=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/DirectorNi",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&(void 0!=={NODE_ENV:"production",PUBLIC_URL:"/DirectorNi",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/DirectorNi",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/DirectorNi",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/DirectorNi",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:void 0!=={NODE_ENV:"production",PUBLIC_URL:"/DirectorNi",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/DirectorNi",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/DirectorNi",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/DirectorNi",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY))),We={};function He(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Ve=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)(a<<=1)<0&&He(16,""+e);this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=0,s=t.length;l<s;l++)this.tag.insertRule(i,t[l])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+=this.tag.getRule(o)+"/*!sc*/\n";return t},e}(),qe=new Map,Ke=new Map,Ye=1,Qe=function(e){if(qe.has(e))return qe.get(e);for(;Ke.has(Ye);)Ye++;var t=Ye++;return qe.set(e,t),Ke.set(t,e),t},Xe=function(e){return Ke.get(e)},Ge=function(e,t){t>=Ye&&(Ye=t+1),qe.set(e,t),Ke.set(t,e)},Je="style["+Me+'][data-styled-version="5.3.11"]',Ze=new RegExp("^"+Me+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),et=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},tt=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],a=0,o=n.length;a<o;a++){var i=n[a].trim();if(i){var l=i.match(Ze);if(l){var s=0|parseInt(l[1],10),u=l[2];0!==s&&(Ge(u,s),et(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(i)}}},nt=function(){return n.nc},rt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(Me))return r}}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(Me,"active"),r.setAttribute("data-styled-version","5.3.11");var i=nt();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},at=function(){function e(e){var t=this.element=rt(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}He(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),ot=function(){function e(e){var t=this.element=rt(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),it=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),lt=Ue,st={isServer:!Ue,useCSSOMInjection:!Be},ut=function(){function e(e,t,n){void 0===e&&(e=De),void 0===t&&(t={}),this.options=Oe({},st,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ue&&lt&&(lt=!1,function(e){for(var t=document.querySelectorAll(Je),n=0,r=t.length;n<r;n++){var a=t[n];a&&"active"!==a.getAttribute(Me)&&(tt(e,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}e.registerId=function(e){return Qe(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Oe({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,a=t.target,e=n?new it(a):r?new at(a):new ot(a),new Ve(e)));var e,t,n,r,a},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(Qe(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Qe(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(Qe(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=0;a<n;a++){var o=Xe(a);if(void 0!==o){var i=e.names.get(o),l=t.getGroup(a);if(i&&l&&i.size){var s=Me+".g"+a+'[id="'+o+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+l+s+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),ct=/(a)(d)/gi,dt=function(e){return String.fromCharCode(e+(e>25?39:97))};function ft(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=dt(t%52)+n;return(dt(t%52)+n).replace(ct,"$1-$2")}var pt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ht=function(e){return pt(5381,e)};function mt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Le(n)&&!Fe(n))return!1}return!0}var gt=ht("5.3.11"),bt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&mt(e),this.componentId=t,this.baseHash=pt(gt,t),this.baseStyle=n,ut.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))a.push(this.staticRulesId);else{var o=It(this.rules,e,t,n).join(""),i=ft(pt(this.baseHash,o)>>>0);if(!t.hasNameForId(r,i)){var l=n(o,"."+i,void 0,r);t.insertRules(r,i,l)}a.push(i),this.staticRulesId=i}else{for(var s=this.rules.length,u=pt(this.baseHash,n.hash),c="",d=0;d<s;d++){var f=this.rules[d];if("string"==typeof f)c+=f;else if(f){var p=It(f,e,t,n),h=Array.isArray(p)?p.join(""):p;u=pt(u,h+d),c+=h}}if(c){var m=ft(u>>>0);if(!t.hasNameForId(r,m)){var g=n(c,"."+m,void 0,r);t.insertRules(r,m,g)}a.push(m)}}return a.join(" ")},e}(),vt=/^\s*\/\/.*$/gm,yt=[":","[",".","#"];function xt(e){var t,n,r,a,o=void 0===e?De:e,i=o.options,l=void 0===i?De:i,s=o.plugins,u=void 0===s?Ie:s,c=new Ee(l),d=[],f=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,a,o,i,l,s,u,c,d){switch(n){case 1:if(0===c&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(a[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),p=function(e,r,o){return 0===r&&-1!==yt.indexOf(o[n.length])||o.match(a)?e:"."+t};function h(e,o,i,l){void 0===l&&(l="&");var s=e.replace(vt,""),u=o&&i?i+" "+o+" { "+s+" }":s;return t=l,n=o,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),c(i||!o?"":o,u)}return c.use([].concat(u,[function(e,t,a){2===e&&a.length&&a[0].lastIndexOf(n)>0&&(a[0]=a[0].replace(r,p))},f,function(e){if(-2===e){var t=d;return d=[],t}}])),h.hash=u.length?u.reduce((function(e,t){return t.name||He(15),pt(e,t.name)}),5381).toString():"",h}var kt=t.createContext(),wt=(kt.Consumer,t.createContext()),St=(wt.Consumer,new ut),Ct=xt();function Et(){return(0,t.useContext)(kt)||St}function _t(){return(0,t.useContext)(wt)||Ct}function Pt(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],a=n[1],o=Et(),i=(0,t.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=(0,t.useMemo)((function(){return xt({options:{prefix:!e.disableVendorPrefixes},plugins:r})}),[e.disableVendorPrefixes,r]);return(0,t.useEffect)((function(){Ce()(r,e.stylisPlugins)||a(e.stylisPlugins)}),[e.stylisPlugins]),t.createElement(kt.Provider,{value:i},t.createElement(wt.Provider,{value:l},e.children))}var Tt=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Ct);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return He(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=Ct),this.name+e.hash},e}(),jt=/([A-Z])/,zt=/([A-Z])/g,Nt=/^ms-/,Ot=function(e){return"-"+e.toLowerCase()};function $t(e){return jt.test(e)?e.replace(zt,Ot).replace(Nt,"-ms-"):e}var Rt=function(e){return null==e||!1===e||""===e};function It(e,t,n,r){if(Array.isArray(e)){for(var a,o=[],i=0,l=e.length;i<l;i+=1)""!==(a=It(e[i],t,n,r))&&(Array.isArray(a)?o.push.apply(o,a):o.push(a));return o}return Rt(e)?"":Fe(e)?"."+e.styledComponentId:Le(e)?"function"!=typeof(s=e)||s.prototype&&s.prototype.isReactComponent||!t?e:It(e(t),t,n,r):e instanceof Tt?n?(e.inject(n,r),e.getName(r)):e:Re(e)?function e(t,n){var r,a,o=[];for(var i in t)t.hasOwnProperty(i)&&!Rt(t[i])&&(Array.isArray(t[i])&&t[i].isCss||Le(t[i])?o.push($t(i)+":",t[i],";"):Re(t[i])?o.push.apply(o,e(t[i],i)):o.push($t(i)+": "+(r=i,(null==(a=t[i])||"boolean"==typeof a||""===a?"":"number"!=typeof a||0===a||r in _e||r.startsWith("--")?String(a).trim():a+"px")+";")));return n?[n+" {"].concat(o,["}"]):o}(e):e.toString();var s}var Dt=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Lt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Le(e)||Re(e)?Dt(It($e(Ie,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Dt(It($e(e,n)))}new Set;var At=function(e,t,n){return void 0===n&&(n=De),e.theme!==n.theme&&e.theme||t||n.theme},Ft=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Mt=/(^-|-$)/g;function Ut(e){return e.replace(Ft,"-").replace(Mt,"")}var Bt=function(e){return ft(ht(e)>>>0)};function Wt(e){return"string"==typeof e&&!0}var Ht=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Vt=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function qt(e,t,n){var r=e[n];Ht(t)&&Ht(r)?Kt(r,t):e[n]=t}function Kt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,o=n;a<o.length;a++){var i=o[a];if(Ht(i))for(var l in i)Vt(l)&&qt(e,i[l],l)}return e}var Yt=t.createContext();Yt.Consumer;function Qt(e){var n=(0,t.useContext)(Yt),r=(0,t.useMemo)((function(){return function(e,t){return e?Le(e)?e(t):Array.isArray(e)||"object"!=typeof e?He(8):t?Oe({},t,{},e):e:He(14)}(e.theme,n)}),[e.theme,n]);return e.children?t.createElement(Yt.Provider,{value:r},e.children):null}var Xt={};function Gt(e,n,r){var a=Fe(e),o=!Wt(e),i=n.attrs,l=void 0===i?Ie:i,s=n.componentId,u=void 0===s?function(e,t){var n="string"!=typeof e?"sc":Ut(e);Xt[n]=(Xt[n]||0)+1;var r=n+"-"+Bt("5.3.11"+n+Xt[n]);return t?t+"-"+r:r}(n.displayName,n.parentComponentId):s,c=n.displayName,d=void 0===c?function(e){return Wt(e)?"styled."+e:"Styled("+Ae(e)+")"}(e):c,f=n.displayName&&n.componentId?Ut(n.displayName)+"-"+n.componentId:n.componentId||u,p=a&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,h=n.shouldForwardProp;a&&e.shouldForwardProp&&(h=n.shouldForwardProp?function(t,r,a){return e.shouldForwardProp(t,r,a)&&n.shouldForwardProp(t,r,a)}:e.shouldForwardProp);var m,g=new bt(r,f,a?e.componentStyle:void 0),b=g.isStatic&&0===l.length,v=function(e,n){return function(e,n,r,a){var o=e.attrs,i=e.componentStyle,l=e.defaultProps,s=e.foldedComponentIds,u=e.shouldForwardProp,c=e.styledComponentId,d=e.target,f=function(e,t,n){void 0===e&&(e=De);var r=Oe({},t,{theme:e}),a={};return n.forEach((function(e){var t,n,o,i=e;for(t in Le(i)&&(i=i(r)),i)r[t]=a[t]="className"===t?(n=a[t],o=i[t],n&&o?n+" "+o:n||o):i[t]})),[r,a]}(At(n,(0,t.useContext)(Yt),l)||De,n,o),p=f[0],h=f[1],m=function(e,t,n){var r=Et(),a=_t();return t?e.generateAndInjectStyles(De,r,a):e.generateAndInjectStyles(n,r,a)}(i,a,p),g=r,b=h.$as||n.$as||h.as||n.as||d,v=Wt(b),y=h!==n?Oe({},n,{},h):n,x={};for(var k in y)"$"!==k[0]&&"as"!==k&&("forwardedAs"===k?x.as=y[k]:(u?u(k,je,b):!v||je(k))&&(x[k]=y[k]));return n.style&&h.style!==n.style&&(x.style=Oe({},n.style,{},h.style)),x.className=Array.prototype.concat(s,c,m!==c?m:null,n.className,h.className).filter(Boolean).join(" "),x.ref=g,(0,t.createElement)(b,x)}(m,e,n,b)};return v.displayName=d,(m=t.forwardRef(v)).attrs=p,m.componentStyle=g,m.displayName=d,m.shouldForwardProp=h,m.foldedComponentIds=a?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ie,m.styledComponentId=f,m.target=a?e.target:e,m.withComponent=function(e){var t=n.componentId,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,["componentId"]),o=t&&t+"-"+(Wt(e)?e:Ut(Ae(e)));return Gt(e,Oe({},a,{attrs:p,componentId:o}),r)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=a?Kt({},e.defaultProps,t):t}}),Object.defineProperty(m,"toString",{value:function(){return"."+m.styledComponentId}}),o&&Ne()(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var Jt=function(e){return function e(t,n,r){if(void 0===r&&(r=De),!(0,we.Hy)(n))return He(1,String(n));var a=function(){return t(n,r,Lt.apply(void 0,arguments))};return a.withConfig=function(a){return e(t,n,Oe({},r,{},a))},a.attrs=function(a){return e(t,n,Oe({},r,{attrs:Array.prototype.concat(r.attrs,a).filter(Boolean)}))},a}(Gt,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){Jt[e]=Jt(e)}));var Zt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=mt(e),ut.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var a=r(It(this.rules,t,n,r).join(""),""),o=this.componentId+e;n.insertRules(o,o,a)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&ut.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function en(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];var o=Lt.apply(void 0,[e].concat(r)),i="sc-global-"+Bt(JSON.stringify(o)),l=new Zt(o,i);function s(e){var n=Et(),r=_t(),a=(0,t.useContext)(Yt),o=(0,t.useRef)(n.allocateGSInstance(i)).current;return n.server&&u(o,e,n,a,r),(0,t.useLayoutEffect)((function(){if(!n.server)return u(o,e,n,a,r),function(){return l.removeStyles(o,n)}}),[o,e,n,a,r]),null}function u(e,t,n,r,a){if(l.isStatic)l.renderStyles(e,We,n,a);else{var o=Oe({},t,{theme:At(t,r,s.defaultProps)});l.renderStyles(e,o,n,a)}}return t.memo(s)}function tn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Lt.apply(void 0,[e].concat(n)).join(""),o=Bt(a);return new Tt(o,a)}!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=nt();return"<style "+[n&&'nonce="'+n+'"',Me+'="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?He(2):e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)return He(2);var r=((n={})[Me]="",n["data-styled-version"]="5.3.11",n.dangerouslySetInnerHTML={__html:e.instance.toString()},n),a=nt();return a&&(r.nonce=a),[t.createElement("style",Oe({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new ut({isServer:!0}),this.sealed=!1}var n=e.prototype;n.collectStyles=function(e){return this.sealed?He(2):t.createElement(Pt,{sheet:this.instance},e)},n.interleaveWithNodeStream=function(e){return He(3)}}();const nn=Jt,rn={primary:"#1a1a1a",secondary:"#2c2420",accent:"#8b7355",rust:"#8b4513",darkGreen:"#2f4f4f",gold:"#b8860b",text:{primary:"#e0e0e0",secondary:"#cccccc",accent:"#d4af37"}},an=tn`
    0% { opacity: 0.95; }
    5% { opacity: 0.85; }
    10% { opacity: 0.9; }
    15% { opacity: 0.85; }
    20% { opacity: 0.95; }
    25% { opacity: 0.85; }
    30% { opacity: 0.9; }
    35% { opacity: 0.95; }
    40% { opacity: 0.85; }
    45% { opacity: 0.9; }
    50% { opacity: 0.95; }
    55% { opacity: 0.85; }
    60% { opacity: 0.9; }
    65% { opacity: 0.85; }
    70% { opacity: 0.95; }
    75% { opacity: 0.9; }
    80% { opacity: 0.85; }
    85% { opacity: 0.9; }
    90% { opacity: 0.95; }
    95% { opacity: 0.85; }
    100% { opacity: 0.9; }
  `,on=tn`
    from {
      opacity: 0;
      transform: translateY(20px);
      filter: blur(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
    }
  `,ln=Lt`
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E");
      opacity: 0.1;
      pointer-events: none;
      animation: ${tn`
    0%, 100% { opacity: 0.9; }
    10% { opacity: 0.8; }
    20% { opacity: 0.7; }
    30% { opacity: 0.85; }
    40% { opacity: 0.75; }
    50% { opacity: 0.9; }
    60% { opacity: 0.8; }
    70% { opacity: 0.7; }
    80% { opacity: 0.85; }
    90% { opacity: 0.75; }
  `} 8s steps(10) infinite;
    }
  `,sn=Lt`
    animation: ${an} 4s infinite;
  `,un=(Lt`
    animation: ${on} 0.8s ease-out forwards;
  `,Lt`
    background-image: 
      linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  `),cn="2px 2px 4px rgba(0, 0, 0, 0.5)",dn="0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)",fn="inset 0 2px 4px rgba(0, 0, 0, 0.2)",pn={primary:"'Noto Serif TC', serif",secondary:"'Playfair Display', serif"},hn=Lt`
  body {
    background-color: ${rn.primary};
    color: ${rn.text.primary};
    font-family: ${pn.primary};
    line-height: 1.6;
    ${ln}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${pn.secondary};
    color: ${rn.text.accent};
    text-shadow: ${cn};
  }

  button {
    font-family: ${pn.primary};
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;var mn=n(579);const gn=nn.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
  position: relative;
  ${ln}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent,
      ${rn.accent}33,
      ${rn.accent}66,
      ${rn.accent}33,
      transparent
    );
  }

  @media (max-width: ${e=>{var t;return(null===(t=e.theme.breakpoints)||void 0===t?void 0:t.mobile)||"320px"}}) {
    padding: 20px;
  }
`,bn=nn.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: ${rn.text.accent};
  text-shadow: ${cn};
  font-family: ${pn.secondary};
  position: relative;
  ${sn}

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(
      to right,
      transparent,
      ${rn.gold},
      transparent
    );
  }

  @media (max-width: ${e=>{var t;return(null===(t=e.theme.breakpoints)||void 0===t?void 0:t.mobile)||"320px"}}) {
    font-size: 2em;
  }
`,vn=nn.p`
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 40px;
  color: ${rn.text.secondary};
  text-align: justify;
  padding: 20px;
  background: ${rn.secondary}33;
  border-radius: 8px;
  box-shadow: ${fn};
  ${un}
  animation: ${on} 0.8s ease-out;

  @media (max-width: ${e=>{var t;return(null===(t=e.theme.breakpoints)||void 0===t?void 0:t.mobile)||"320px"}}) {
    font-size: 1em;
    padding: 15px;
    margin-bottom: 30px;
  }
`,yn=nn.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 40px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      ${rn.accent}33,
      transparent
    );
  }

  @media (max-width: ${e=>{var t;return(null===(t=e.theme.breakpoints)||void 0===t?void 0:t.mobile)||"320px"}}) {
    grid-template-columns: 1fr;
    gap: 15px;
    margin-top: 30px;
  }
`,xn=nn.button`
  background: ${rn.secondary}33;
  border: 1px solid ${rn.accent}33;
  color: ${rn.text.primary};
  padding: 20px;
  font-size: 1.1em;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: ${pn.primary};
  position: relative;
  overflow: hidden;
  ${un}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent,
      ${rn.accent}11,
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    background: ${rn.secondary}66;
    border-color: ${rn.gold};
    transform: translateY(-2px);
    box-shadow: ${dn};

    &::before {
      transform: translateX(100%);
    }
  }

  @media (max-width: ${e=>{var t;return(null===(t=e.theme.breakpoints)||void 0===t?void 0:t.mobile)||"320px"}}) {
    padding: 15px;
    font-size: 1em;
  }
`,kn=nn(xn)`
  background: ${e=>e.isUnlocked?`${rn.secondary}66`:`${rn.secondary}33`};
  opacity: ${e=>e.isUnlocked?"1":"0.5"};
  cursor: ${e=>e.isUnlocked?"pointer":"not-allowed"};
  
  &:hover {
    background: ${e=>e.isUnlocked?`${rn.secondary}99`:`${rn.secondary}33`};
  }
`,wn=nn.div`
  margin: 30px auto;
  padding: 20px;
  background: ${rn.secondary}33;
  border-radius: 12px;
  border: 1px solid ${rn.accent}33;
  max-width: 600px;
  ${un}
`,Sn=nn.h2`
  color: ${rn.text.accent};
  text-align: center;
  margin-bottom: 15px;
  font-size: 1.3em;
`,Cn=nn.div`
  width: 100%;
  height: 20px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin: 10px 0;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    width: ${e=>e.progress}%;
    height: 100%;
    background: linear-gradient(90deg, #88ff88, #ffff88);
    transition: width 0.5s ease;
  }
`,En=nn.div`
  text-align: center;
  color: ${rn.text.secondary};
  font-size: 1.1em;
`,_n=nn.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  margin-top: 15px;
`,Pn=nn.div`
  text-align: center;
  padding: 8px;
  background: ${e=>e.completed?"rgba(136, 255, 136, 0.2)":"rgba(0, 0, 0, 0.2)"};
  border-radius: 6px;
  font-size: 0.9em;
  color: ${e=>e.completed?"#88ff88":"#cccccc"};
  border: 1px solid ${e=>e.completed?"rgba(136, 255, 136, 0.3)":"rgba(224, 224, 224, 0.1)"};
`,Tn=nn.button`
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 25px;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;const jn=function(){const e=ee(),[n,r]=(0,t.useState)(!1),[a,o]=(0,t.useState)(0),[i,l]=(0,t.useState)([]),s=[{id:1,title:"\u7b2c\u4e00\u7ae0\uff1a\u6d88\u5931\u7684\u502a\u4e3b\u4efb"},{id:2,title:"\u7b2c\u4e8c\u7ae0\uff1a\u7b46\u8a18\u7684\u555f\u793a"},{id:3,title:"\u7b2c\u4e09\u7ae0\uff1a\u56f0\u5c40\u4e4b\u4e2d"},{id:4,title:"\u7b2c\u56db\u7ae0\uff1a\u88ab\u96b1\u85cf\u7684\u771f\u76f8"},{id:5,title:"\u7b2c\u4e94\u7ae0\uff1a\u5371\u6a5f\u8207\u8cea\u7591"},{id:6,title:"\u7b2c\u516d\u7ae0\uff1a\u7dec\u61f7\u8207\u8abf\u67e5"}];return(0,t.useEffect)((()=>{const e=[1,2,3,4,5,6].filter((e=>"true"===localStorage.getItem(`chapter${e}Complete`)));l(e),o(e.length/6*100),r(6===e.length)}),[]),(0,mn.jsxs)(gn,{children:[(0,mn.jsx)(bn,{children:"\u6d88\u5931\u7684\u502a\u4e3b\u4efb"}),(0,mn.jsx)(vn,{children:"\u5728\u9019\u5ea7\u884c\u653f\u5927\u6a13\u4e2d\uff0c\u502a\u4e3b\u4efb\u662f\u4e00\u500b\u5145\u6eff\u795e\u79d8\u8272\u5f69\u7684\u4eba\u7269\u3002 \u4ed6\u4ee5\u9ad8\u6548\u7387\u548c\u7cbe\u6e96\u7684\u5de5\u4f5c\u65b9\u5f0f\u8457\u7a31\uff0c\u537b\u5728\u67d0\u4e00\u5929\u7a81\u7136\u6d88\u5931\u7121\u8e64\u3002 \u4f5c\u70ba\u8abf\u67e5\u54e1\u7684\u4f60\uff0c\u5c07\u63ed\u958b\u9019\u500b\u5145\u6eff\u61f8\u7591\u7684\u6545\u4e8b\uff0c\u63a2\u7d22\u771f\u76f8\u80cc\u5f8c\u96b1\u85cf\u7684\u79d8\u5bc6\u3002 \u6bcf\u4e00\u500b\u9078\u64c7\u90fd\u53ef\u80fd\u5f71\u97ff\u6545\u4e8b\u7684\u8d70\u5411\uff0c\u6bcf\u4e00\u6bb5\u5c0d\u8a71\u90fd\u53ef\u80fd\u85cf\u6709\u91cd\u8981\u7dda\u7d22\u3002 \u4f60\u6e96\u5099\u597d\u9032\u5165\u9019\u500b\u5145\u6eff\u8b0e\u5718\u7684\u4e16\u754c\u4e86\u55ce\uff1f"}),(0,mn.jsxs)(wn,{children:[(0,mn.jsx)(Sn,{children:"\u6545\u4e8b\u9032\u5ea6"}),(0,mn.jsxs)(En,{children:["\u5b8c\u6210\u9032\u5ea6\uff1a",Math.round(a),"%"]}),(0,mn.jsx)(Cn,{progress:a}),(0,mn.jsx)(_n,{children:s.map((e=>(0,mn.jsx)(Pn,{completed:i.includes(e.id),children:e.title},e.id)))})]}),(0,mn.jsxs)(yn,{children:[s.map((t=>(0,mn.jsx)(xn,{onClick:()=>e(`/chapter/${t.id}`),children:t.title},t.id))),(0,mn.jsx)(kn,{isUnlocked:n,onClick:()=>{n&&e("/ending")},children:n?"\u771f\u76f8\u7684\u7d42\u9ede":"\u771f\u76f8\u7684\u7d42\u9ede (\u9396\u5b9a)"})]}),(0,mn.jsx)(Tn,{onClick:()=>{if(window.confirm("\u78ba\u5b9a\u8981\u91cd\u7f6e\u904a\u6232\u9032\u5ea6\u55ce\uff1f\u9019\u5c07\u6e05\u9664\u6240\u6709\u5df2\u5b8c\u6210\u7684\u7ae0\u7bc0\u3002")){for(let e=1;e<=6;e++)localStorage.removeItem(`chapter${e}Complete`);window.location.reload()}},children:"\u91cd\u7f6e\u904a\u6232\u9032\u5ea6"})]})},zn={1:{id:1,title:"\u7b2c\u4e00\u7ae0\uff1a\u6d88\u5931\u7684\u502a\u4e3b\u4efb",content:'\u884c\u653f\u5927\u6a13\u88e1\u7684\u6bcf\u500b\u4eba\u90fd\u8a8d\u8b58\u502a\u4e3b\u4efb\u3002\u4ed6\u662f\u6b0a\u529b\u904b\u4f5c\u7684\u5c08\u5bb6\uff0c\u4e5f\u662f\u898f\u5247\u4e4b\u9593\u7684\u821e\u8005\u3002\u4ed6\u5f9e\u4e0d\u9055\u898f\uff0c\u537b\u7e3d\u80fd\u7528\u5de7\u5999\u7684\u624b\u6bb5\u638c\u63a7\u5c40\u52e2\uff0c\u8b93\u90a3\u4e9b\u8a66\u5716\u6311\u6230\u4ed6\u7684\u4eba\u5fc3\u751f\u754f\u61fc\u3002\n\n\u4ed6\u7684\u8fa6\u516c\u5ba4\u7a97\u660e\u51e0\u6de8\uff0c\u684c\u4e0a\u7684\u7269\u54c1\u6c38\u9060\u6392\u5217\u6574\u9f4a\uff0c\u5982\u540c\u4ed6\u8655\u7406\u7684\u6848\u5b50\u4e00\u822c\u7121\u61c8\u53ef\u64ca\u3002\u7136\u800c\uff0c\u4efb\u4f55\u8207\u4ed6\u63a5\u89f8\u904e\u7684\u4e0b\u5c6c\uff0c\u90fd\u96e3\u4ee5\u5ffd\u8996\u4e00\u7a2e\u58d3\u8feb\u611f\uff0c\u5f77\u5f7f\u88ab\u770b\u4e0d\u898b\u7684\u7dda\u62c9\u626f\uff0c\u7a0d\u6709\u5dee\u6c60\u4fbf\u6703\u88ab\u7e43\u65b7\u3002\n\n\u67d0\u5929\uff0c\u4e00\u5c01\u533f\u540d\u4fe1\u5bc4\u5230\u4e86\u7d00\u5f8b\u59d4\u54e1\u6703\uff0c\u5167\u5bb9\u5beb\u5f97\u6709\u4e9b\u751f\u786c\uff0c\u8a9e\u6c23\u4e0d\u592a\u4e00\u81f4\uff1a\n"\u502a\u4e3b\u4efb\u8868\u9762\u770b\u8d77\u4f86\u633a\u80fd\u5e79\uff0c\u7d50\u679c\u5168\u662f\u4e82\u641e\u4e00\u901a\u3002\u4ed6\u7e3d\u662f\u5b89\u6392\u9805\u76ee\u7d66\u90a3\u4e9b\u548c\u4ed6\u6709\u5c0f\u79d8\u5bc6\u7684\u516c\u53f8\uff0c\u9322\u90fd\u6d41\u5230\u54ea\u53bb\u4e86\uff1f\u9084\u5a01\u8105\u4eba\u5bb6\uff0c\u4e0d\u807d\u8a71\u5c31\u9ebb\u7169\u5927\u4e86\u3002\u5f88\u591a\u4eba\u90fd\u88ab\u4ed6\u5687\u5f97\u4e0d\u6562\u542d\u8072\uff0c\u9023\u6211\u7684\u540c\u4e8b\u90fd\u8aaa\u4e0d\u6562\u60f9\u4ed6\uff01"\n\n\u4e09\u5929\u5f8c\uff0c\u502a\u4e3b\u4efb\u795e\u79d8\u6d88\u5931\uff0c\u50cf\u662f\u6191\u7a7a\u84b8\u767c\u4e00\u822c\u3002\u4ed6\u7684\u8fa6\u516c\u5ba4\u9580\u53cd\u9396\uff0c\u800c\u4ed6\u672c\u4eba\u4f3c\u4e4e\u672a\u66fe\u5230\u9054\u8fa6\u516c\u5ba4\uff0c\u4e5f\u7121\u4efb\u4f55\u8acb\u5047\u6216\u901a\u77e5\u3002\u9019\u4e00\u767c\u73fe\u8fc5\u901f\u5728\u5167\u90e8\u5f15\u8d77\u9a37\u52d5\u3002',questions:[{context:"\u7d00\u5f8b\u8abf\u67e5\u54e1\u5f35\u8861\u7ad9\u5728\u502a\u4e3b\u4efb\u7684\u8fa6\u516c\u5ba4\u88e1\uff0c\u6ce8\u610f\u5230\u8fa6\u516c\u684c\u4e0a\u6709\u4e00\u676f\u5c1a\u672a\u5b8c\u5168\u51b7\u537b\u7684\u8336\uff0c\u904e\u4e86\u5169\u4e09\u5929\u537b\u9084\u7559\u6709\u9918\u6eab\uff0c\u5f77\u5f7f\u502a\u4e3b\u4efb\u624d\u525b\u525b\u96e2\u958b\u3002",question:"\u9019\u676f\u6eab\u71b1\u7684\u8336\u6697\u793a\u4e86\u4ec0\u9ebc\uff1f",choices:[{text:"\u502a\u4e3b\u4efb\u53ef\u80fd\u525b\u96e2\u958b\u4e0d\u4e45",feedback:"\u9019\u500b\u89c0\u5bdf\u5f88\u654f\u92b3\uff0c\u4f46\u4f3c\u4e4e\u6709\u4e9b\u4e0d\u5408\u5e38\u7406...\u9019\u7a2e\u73fe\u8c61\u770b\u4f3c\u610f\u5473\u8457\u502a\u4e3b\u4efb\u525b\u525b\u96e2\u958b\uff0c\u4eff\u4f5b\u4ed6\u7684\u5b58\u5728\u4ecd\u7559\u5728\u9019\u500b\u7a7a\u9593\u4e2d\u3002\u4f46\u9019\u500b\u89e3\u91cb\u986f\u5f97\u904e\u65bc\u76f4\u63a5\uff0c\u6b63\u5982\u5c0f\u8aaa\u6240\u8a00\uff0c\u7d30\u7bc0\u4e4b\u4e2d\u5f80\u5f80\u96b1\u85cf\u8457\u66f4\u591a\u672a\u89e3\u7684\u8b0e\u5718\uff1b\u6bcf\u4e00\u500b\u770b\u4f3c\u5e73\u5e38\u7684\u73fe\u8c61\uff0c\u90fd\u53ef\u80fd\u662f\u4e00\u500b\u66f4\u5927\u5c40\u52e2\u7684\u4f0f\u7b46\u3002",hint:"\u601d\u8003\u4e00\u4e0b\uff0c\u70ba\u4ec0\u9ebc\u904e\u4e86\u5169\u4e09\u5929\u7684\u8336\u9084\u80fd\u4fdd\u6301\u6eab\u71b1\uff1f\u662f\u6642\u9593\u7684\u932f\u89ba\u55ce\uff1f"},{text:"\u9019\u53ef\u80fd\u662f\u67d0\u7a2e\u523b\u610f\u5b89\u6392\u7684\u7dda\u7d22",feedback:"\u5f88\u597d\u7684\u63a8\u6e2c\uff0c\u9019\u78ba\u5be6\u50cf\u662f\u4e00\u500b\u7cbe\u5fc3\u8a2d\u8a08\u7684\u7d30\u7bc0...\u5c31\u5982\u4ed6\u5728\u6703\u8b70\u4e2d\u90a3\u4e00\u7d72\u4e0d\u82df\u3001\u8a00\u7c21\u610f\u8cc5\u7684\u6307\u793a\uff0c\u9019\u676f\u8336\u7684\u9918\u6eab\u4e5f\u5728\u7121\u8072\u4e2d\u50b3\u905e\u8457\u4e00\u500b\u4e0d\u53ef\u6349\u6478\u7684\u8a0a\u606f\u2014\u2014\u6216\u8a31\u6bcf\u4e00\u500b\u7d30\u7bc0\u90fd\u5728\u63d0\u9192\u8457\u773e\u4eba\uff0c\u6b0a\u529b\u548c\u63a7\u5236\u5f9e\u4e0d\u53ea\u662f\u8868\u9762\u90a3\u9ebc\u55ae\u7d14\u3002",hint:"\u60f3\u60f3\u502a\u4e3b\u4efb\u4e00\u8cab\u7684\u884c\u4e8b\u98a8\u683c\uff0c\u4ed6\u7e3d\u80fd\u5728\u7121\u8072\u4e2d\u7559\u4e0b\u4e00\u500b\u53c8\u4e00\u500b\u7cbe\u5999\u7684\u4f0f\u7b46\u3002"},{text:"\u6216\u8a31\u662f\u67d0\u7a2e\u8d85\u81ea\u7136\u73fe\u8c61",feedback:"\u96d6\u7136\u9019\u500b\u89d2\u5ea6\u807d\u4f86\u4f3c\u4e4e\u5e36\u6709\u4e00\u7d72\u8d85\u812b\u73fe\u5be6\u7684\u610f\u5473\uff0c\u4f46\u5728\u9019\u500b\u5145\u6eff\u795e\u79d8\u8207\u6b0a\u8b00\u7684\u74b0\u5883\u4e2d\uff0c\u4e5f\u96e3\u4ee5\u5168\u7136\u6392\u9664\u3002",hint:"\u4fdd\u6301\u7406\u6027\u601d\u7dad\uff0c\u5c0b\u627e\u5408\u7406\u7684\u89e3\u91cb\u3002"}]},{context:"\u5f35\u8861\u5728\u502a\u4e3b\u4efb\u7684\u96fb\u8166\u4e0a\u767c\u73fe\u4e86\u4e00\u5c01\u672a\u5b8c\u6210\u7684\u90f5\u4ef6\u8349\u7a3f\uff0c\u5167\u5bb9\u662f\uff1a'\u4eba\u5f9e\u611b\u6b32\u751f\u6182\uff0c\u5f9e\u6182\u751f\u6016\u3002\u82e5\u96e2\u65bc\u611b\uff0c\u4f55\u6182\u4f55\u6016\uff1f\u611b\u662f\u4e00\u7a2e\u67b7\u9396\uff0c\u8b93\u4eba\u8ff7\u6200\uff0c\u4e5f\u8b93\u4eba\u6050\u61fc\u3002'",question:"\u9019\u6bb5\u6587\u5b57\u53cd\u6620\u4e86\u502a\u4e3b\u4efb\u4ec0\u9ebc\u6a23\u7684\u5fc3\u7406\u72c0\u614b\uff1f",choices:[{text:"\u5c0d\u6b0a\u529b\u7684\u53cd\u601d\u8207\u6399\u624e",feedback:"\u5f88\u597d\u7684\u89c0\u5bdf\uff0c\u9019\u6bb5\u6587\u5b57\u78ba\u5be6\u53cd\u6620\u4e86\u5c0d\u6b0a\u529b\u672c\u8cea\u7684\u601d\u8003\u3002\u6587\u5b57\u4e2d\u90a3\u7a2e\u51b7\u5cfb\u3001\u7cbe\u6e96\u7684\u8a9e\u8abf\u6b63\u5982\u502a\u4e3b\u4efb\u4e00\u8cab\u7684\u4f5c\u98a8\uff0c\u537b\u53c8\u6d41\u9732\u51fa\u5c0d\u6b0a\u529b\u675f\u7e1b\u4eba\u6027\u7684\u7591\u554f\uff0c\u5f77\u5f7f\u5728\u8cea\u7591\uff1a\u6211\u5011\u7a76\u7adf\u662f\u88ab\u6b0a\u529b\u64cd\u63a7\uff0c\u9084\u662f\u5728\u4e3b\u5bb0\u6b0a\u529b\u672c\u8eab\uff1f",hint:"\u7d30\u60f3\u300e\u611b\u662f\u4e00\u7a2e\u67b7\u9396\u300f\u9019\u53e5\u8a71\uff0c\u6b0a\u529b\u8207\u675f\u7e1b\u5f80\u5f80\u6b63\u76f8\u751f\u76f8\u4f34\u3002"},{text:"\u5c0d\u5de5\u4f5c\u7684\u5026\u6020\u8207\u9003\u907f",feedback:"\u96d6\u7136\u9019\u6bb5\u6587\u5b57\u4e2d\u4e5f\u53ef\u80fd\u96b1\u542b\u8457\u5c0d\u5de5\u4f5c\u58d3\u529b\u7684\u75b2\u618a\u611f\uff0c\u4f46\u5176\u6df1\u6c89\u7684\u8a9e\u8a00\u66f4\u4f3c\u5728\u63a2\u8a0e\u5167\u5fc3\u5c0d\u65bc\u6b0a\u529b\u8207\u8cac\u4efb\u7684\u77db\u76fe\uff0c\u9060\u4e0d\u50c5\u662f\u55ae\u7d14\u7684\u5026\u6020\u3002\u9019\u8b93\u4eba\u601d\u7d22\uff0c\u662f\u5426\u6b63\u662f\u9019\u7a2e\u7121\u5f62\u7684\u67b7\u9396\u8b93\u4ed6\u611f\u5230\u7121\u529b\u8207\u9003\u907f\u3002",hint:"\u4ed4\u7d30\u54c1\u5473\u6587\u5b57\u4e2d\u90a3\u4efd\u51b0\u51b7\u8207\u7591\u60d1\uff0c\u53ef\u80fd\u4e0d\u50c5\u50c5\u662f\u5de5\u4f5c\u75b2\u52de\uff0c\u800c\u662f\u4e00\u7a2e\u66f4\u6df1\u5c64\u6b21\u7684\u5167\u5fc3\u6399\u624e\u3002"},{text:"\u5c0d\u67d0\u7a2e\u95dc\u4fc2\u7684\u7cfe\u7d50",feedback:"\u9019\u500b\u89d2\u5ea6\u5f88\u654f\u92b3\uff0c\u6587\u5b57\u4e2d\u78ba\u5be6\u900f\u9732\u51fa\u67d0\u7a2e\u60c5\u611f\u7cfe\u845b\uff0c\u300e\u611b\u300f\u9019\u500b\u5b57\u5728\u9019\u88e1\u4e0d\u518d\u50c5\u4ee3\u8868\u6eab\u6696\uff0c\u800c\u8b8a\u6210\u4e86\u4e00\u7a2e\u65e2\u8ff7\u4eba\u53c8\u4ee4\u4eba\u6050\u61fc\u7684\u67b7\u9396\u3002\u9019\u7a2e\u5c0d\u95dc\u4fc2\u7684\u7cfe\u7e8f\u6b63\u53cd\u6620\u51fa\u502a\u4e3b\u4efb\u5167\u5fc3\u7684\u8907\u96dc\u77db\u76fe\uff0c\u65e2\u6e34\u671b\u81ea\u7531\uff0c\u53c8\u88ab\u675f\u7e1b\u65bc\u7121\u6cd5\u91cb\u61f7\u7684\u60c5\u611f\u4e4b\u4e2d\u3002",hint:"\u601d\u8003\u300e\u82e5\u96e2\u65bc\u611b\uff0c\u4f55\u6182\u4f55\u6016\uff1f\u300f\u9019\u4e00\u53e5\uff0c\u6216\u8a31\u6b63\u6697\u793a\u8457\u5c0d\u95dc\u4fc2\u4e2d\u90a3\u7a2e\u7121\u6cd5\u65b7\u6368\u7684\u7cfe\u7d50\u3002"}]},{context:"\u4fdd\u5168\u4eba\u54e1\u5728\u76e3\u63a7\u9304\u50cf\u4e2d\u770b\u5230\u4e86\u4e00\u500b\u6a21\u7cca\u7684\u5f71\u5b50\u5728\u8d70\u5eca\u5f98\u5f8a\uff0c\u4f46\u4e26\u672a\u89f8\u767c\u4efb\u4f55\u9580\u7981\u8b66\u5831\u3002",question:"\u9019\u500b\u7570\u5e38\u73fe\u8c61\u6700\u53ef\u80fd\u7684\u539f\u56e0\u662f\u4ec0\u9ebc\uff1f",choices:[{text:"\u76e3\u63a7\u7cfb\u7d71\u51fa\u73fe\u6545\u969c",feedback:"\u9019\u500b\u89e3\u91cb\u592a\u904e\u7c21\u55ae\uff0c\uff0c\u96e3\u4ee5\u89e3\u91cb\u90a3\u7a2e\u8a6d\u8b4e\u83ab\u6e2c\u7684\u6c1b\u570d\u3002\u6b63\u5982\u5c0f\u8aaa\u4e2d\u6bcf\u4e00\u500b\u7d30\u7bc0\u90fd\u860a\u542b\u6df1\u610f\uff0c\u55ae\u7d14\u7684\u96fb\u8def\u6545\u969c\u4f3c\u4e4e\u7121\u6cd5\u8aaa\u660e\u9019\u7a2e\u4ee4\u4eba\u5fc3\u751f\u4e0d\u5b89\u7684\u5f98\u5f8a\u3002",hint:"\u60f3\u60f3\u70ba\u4ec0\u9ebc\u504f\u504f\u5728\u9019\u500b\u6642\u5019\u51fa\u73fe\u7570\u5e38\uff1f"},{text:"\u502a\u4e3b\u4efb\u53ef\u80fd\u4f7f\u7528\u4e86\u67d0\u7a2e\u7279\u6b8a\u624b\u6bb5",feedback:"\u9019\u500b\u63a8\u6e2c\u8207\u502a\u4e3b\u4efb\u4e00\u5411\u7cbe\u5bc6\u4e14\u96e3\u4ee5\u6349\u6478\u7684\u884c\u4e8b\u98a8\u683c\u76f8\u5951\u5408\u3002\u4ed6\u7e3d\u80fd\u5728\u4e0d\u52d5\u8072\u8272\u4e2d\u5e03\u4e0b\u5c40\u9762\uff0c\u4f7f\u6240\u6709\u7570\u8c61\u90fd\u986f\u5f97\u5145\u6eff\u8a08\u5283\u3002\u90a3\u6a21\u7cca\u7684\u5f71\u5b50\uff0c\u4e5f\u8a31\u6b63\u662f\u4ed6\u523b\u610f\u5b89\u6392\u7684\u8b66\u793a\uff0c\u8b93\u4eba\u611f\u53d7\u5230\u6b0a\u529b\u904b\u4f5c\u4e2d\u7121\u6cd5\u9810\u77e5\u7684\u795e\u79d8\u3002",hint:"\u56de\u61b6\u502a\u4e3b\u4efb\u5728\u6703\u8b70\u4e2d\u7684\u6c89\u8457\u8207\u8a08\u5283\uff0c\u4ed6\u7559\u4e0b\u7684\u6bcf\u500b\u7dda\u7d22\u90fd\u5145\u6eff\u6df1\u610f\u3002"},{text:"\u53ef\u80fd\u662f\u67d0\u7a2e\u5fc3\u7406\u6697\u793a",feedback:"\u9019\u500b\u89d2\u5ea6\u5f88\u7279\u5225\uff0c\uff0c\u6216\u8a31\u90a3\u6a21\u7cca\u7684\u5f71\u5b50\u6b63\u5982\u540c\u4e00\u500b\u7121\u5f62\u7684\u4f4e\u8a9e\uff0c\u6697\u793a\u8457\u6bcf\u500b\u4eba\u5fc3\u4e2d\u6df1\u85cf\u7684\u6050\u61fc\u8207\u7591\u60d1\u3002\u9019\u4e0d\u50c5\u50c5\u662f\u6280\u8853\u4e0a\u7684\u5931\u8aa4\uff0c\u800c\u53ef\u80fd\u662f\u5167\u5fc3\u7121\u6cd5\u8a00\u8aaa\u7684\u6295\u5c04\uff0c\u8b93\u4eba\u5f9e\u5fc3\u7406\u5c64\u9762\u611f\u53d7\u5230\u90a3\u7a2e\u96e3\u4ee5\u64fa\u812b\u7684\u63a7\u5236\u8207\u8ff7\u60d8\u3002",hint:"\u8a66\u8457\u5f9e\u4eba\u5fc3\u7684\u89d2\u5ea6\u53bb\u63e3\u6469\u9019\u7570\u8c61\uff0c\u6216\u8a31\u4f60\u80fd\u770b\u5230\u6bd4\u8868\u9762\u73fe\u8c61\u66f4\u6df1\u7684\u79d8\u5bc6\u3002"}]},{context:"\u5f35\u8861\u5728\u8fa6\u516c\u5ba4\u5167\u5fb9\u591c\u5206\u6790\u76e3\u63a7\u9304\u50cf\u6642\uff0c\u611f\u5230\u80cc\u5f8c\u4f3c\u4e4e\u6709\u67d0\u7a2e\u5b58\u5728\u5728\u6ce8\u8996\u8457\u4ed6\u3002",question:"\u9019\u7a2e\u611f\u89ba\u6700\u53ef\u80fd\u4ee3\u8868\u4ec0\u9ebc\uff1f",choices:[{text:"\u502a\u4e3b\u4efb\u53ef\u80fd\u9084\u5728\u67d0\u8655\u89c0\u5bdf\u8457\u4e00\u5207",feedback:"\u9019\u500b\u60f3\u6cd5\u8b93\u4eba\u4e0d\u7981\u6bdb\u9aa8\u609a\u7136\uff0c\u6b63\u5982\u5c0f\u8aaa\u4e2d\u90a3\u8b93\u4eba\u96e3\u4ee5\u6349\u6478\u7684\u4f4e\u8a9e\uff0c\u5f77\u5f7f\u502a\u4e3b\u4efb\u5f9e\u672a\u771f\u6b63\u96e2\u958b\uff0c\u4ed6\u90a3\u51b7\u975c\u800c\u7cbe\u6e96\u7684\u773c\u795e\u4ecd\u5728\u7121\u5f62\u4e2d\u6ce8\u8996\u8457\u6bcf\u4e00\u500b\u7d30\u7bc0\u3002\u9019\u7a2e\u611f\u89ba\u6b63\u8207\u4ed6\u4e00\u8cab\u795e\u79d8\u7684\u64cd\u63a7\u98a8\u683c\u76f8\u547c\u61c9\uff0c\u6697\u793a\u8457\u5373\u4fbf\u8eab\u5f71\u6d88\u5931\uff0c\u4ed6\u7684\u5b58\u5728\u537b\u6c38\u9060\u7559\u5728\u90a3\u7121\u8072\u7684\u89d2\u843d\u3002",hint:"\u601d\u8003\u502a\u4e3b\u4efb\u70ba\u4ec0\u9ebc\u8981\u88fd\u9020\u9019\u7a2e\u6c1b\u570d\uff1f\u9019\u662f\u5426\u6b63\u662f\u4e00\u7a2e\u6c38\u6046\u7684\u76e3\u8996\u8207\u63a7\u5236\u3002"},{text:"\u53ef\u80fd\u662f\u8abf\u67e5\u58d3\u529b\u5c0e\u81f4\u7684\u932f\u89ba",feedback:"\u4f60\u8a8d\u70ba\u9019\u53ef\u80fd\u50c5\u662f\u56e0\u70ba\u5f35\u8861\u9577\u591c\u5b64\u71c8\u4e0b\u3001\u5fc3\u795e\u75b2\u618a\u800c\u7522\u751f\u7684\u5e7b\u89ba\u3002\u96d6\u7136\u9019\u662f\u5408\u7406\u7684\u89e3\u91cb\uff0c\u4f46\u5728\u9019\u5145\u6eff\u8b0e\u5718\u7684\u74b0\u5883\u4e2d\uff0c\u9019\u7a2e\u611f\u89ba\u4e5f\u53ef\u80fd\u662f\u73fe\u5be6\u8207\u5fc3\u7406\u4ea4\u7e54\u51fa\u7684\u5e7b\u5f71\uff0c\u4f7f\u4eba\u7121\u6cd5\u5206\u8fa8\u771f\u5be6\u8207\u865b\u5e7b\u3002",hint:"\u60f3\u60f3\u70ba\u4ec0\u9ebc\u504f\u504f\u5728\u9019\u500b\u6642\u5019\u6709\u9019\u7a2e\u611f\u89ba\uff1f\u662f\u55ae\u7d14\u7684\u75b2\u618a\uff0c\u9084\u662f\u53e6\u6709\u96b1\u60c5\uff1f"},{text:"\u6216\u8a31\u662f\u67d0\u7a2e\u7121\u5f62\u7684\u529b\u91cf\u5728\u5f71\u97ff\u8457\u8abf\u67e5",feedback:"\u4f60\u5f9e\u9019\u7a2e\u795e\u79d8\u7684\u6ce8\u8996\u4e2d\u770b\u5230\u4e86\u66f4\u6df1\u5c64\u6b21\u7684\u6697\u793a\uff0c\u6216\u8a31\u9019\u6b63\u662f\u90a3\u7121\u5f62\u4e4b\u529b\u5728\u5e72\u64fe\u8abf\u67e5\uff0c\u5c07\u6240\u6709\u7dda\u7d22\u7de8\u7e54\u6210\u4e00\u5f35\u96e3\u4ee5\u7834\u89e3\u7684\u7db2\u3002\u9019\u7a2e\u529b\u91cf\u65e2\u4e0d\u5c6c\u65bc\u6280\u8853\u6545\u969c\uff0c\u4e5f\u975e\u7d14\u7cb9\u7684\u5e7b\u89ba\uff0c\u800c\u662f\u4e00\u7a2e\u5b58\u5728\u65bc\u6b0a\u529b\u8207\u4eba\u6027\u908a\u7de3\u7684\u96b1\u79d8\u529b\u91cf\u3002",hint:"\u601d\u8003'\u7121\u5f62'\u9019\u500b\u8a5e\u5728\u7279\u5b9a\u8a9e\u5883\u4e0b\u7684\u542b\u7fa9\u3002"}]}],philosophicalReflection:{title:"\u6b0a\u529b\u7684\u8ff7\u601d",content:"\u502a\u4e3b\u4efb\u7684\u6d88\u5931\u63ed\u793a\u4e86\u4e00\u500b\u6df1\u5c64\u7684\u54f2\u5b78\u601d\u8003\uff1a\u6b0a\u529b\u8207\u675f\u7e1b\u7684\u6c38\u6046\u77db\u76fe\u3002\n\n\u5728\u9019\u500b\u5145\u6eff\u898f\u5247\u8207\u79e9\u5e8f\u7684\u884c\u653f\u5927\u6a13\u4e2d\uff0c\u502a\u4e3b\u4efb\u65e2\u662f\u6b0a\u529b\u7684\u57f7\u884c\u8005\uff0c\u53c8\u662f\u6b0a\u529b\u7684\u8cea\u7591\u8005\u3002\n\n\u4ed6\u7684\u6d88\u5931\uff0c\u5f77\u5f7f\u5728\u8a34\u8aaa\u8457\u4e00\u500b\u66f4\u6df1\u5c64\u7684\u771f\u7406\uff1a\u7576\u6211\u5011\u904e\u5206\u8ffd\u6c42\u63a7\u5236\u8207\u79e9\u5e8f\u6642\uff0c\u53cd\u800c\u53ef\u80fd\u6210\u70ba\u81ea\u5df1\u8a2d\u4e0b\u7684\u67b7\u9396\u7684\u56da\u5f92\u3002\n\n\u300a\u4f5b\u8aaa\u56db\u5341\u4e8c\u7ae0\u7d93\u300b\u4e2d\u7684\u300c\u4eba\u5f9e\u611b\u6b32\u751f\u6182\uff0c\u5f9e\u6182\u751f\u6016\u300d\uff0c\u5728\u502a\u4e3b\u4efb\u7684\u7b46\u8a18\u4e2d\u88ab\u91cd\u65b0\u8a6e\u91cb\u70ba\u73fe\u4ee3\u7d44\u7e54\u4e2d\u7684\u6b0a\u529b\u95dc\u4fc2\uff1a\n\n\u4eba\u5011\u56e0\u8ffd\u6c42\u6b0a\u529b\u800c\u7522\u751f\u4f9d\u9644\uff0c\u56e0\u4f9d\u9644\u800c\u7522\u751f\u6050\u61fc\uff0c\u6700\u7d42\u5728\u6b0a\u529b\u8207\u81ea\u7531\u7684\u62c9\u626f\u4e2d\u8ff7\u5931\u81ea\u6211\u3002\n\n\u4ed6\u7684\u6d88\u5931\uff0c\u6216\u8a31\u6b63\u662f\u5c0d\u9019\u7a2e\u675f\u7e1b\u7684\u4e00\u7a2e\u89e3\u812b\uff0c\u53c8\u6216\u8a31\u662f\u5c0d\u6b0a\u529b\u672c\u8cea\u7684\u4e00\u7a2e\u6df1\u523b\u53cd\u601d\u3002\n\n\u5728\u9019\u500b\u5145\u6eff\u898f\u5247\u7684\u4e16\u754c\u88e1\uff0c\u771f\u6b63\u7684\u81ea\u7531\uff0c\u6216\u8a31\u4e0d\u5728\u65bc\u638c\u63a7\uff0c\u800c\u5728\u65bc\u8d85\u8d8a\u3002"}},4:{id:4,title:"\u7b2c\u56db\u7ae0\uff1a\u88ab\u96b1\u85cf\u7684\u771f\u76f8",content:"\u5f35\u8861\u7ffb\u95b1\u502a\u4e3b\u4efb\u7684\u7b46\u8a18\u672c\u6642\uff0c\u767c\u73fe\u4e86\u4e00\u6bb5\u88ab\u96b1\u85cf\u7684\u5167\u5bb9\u3002\u5728\u7b46\u8a18\u672c\u7684\u6697\u888b\u4e2d\uff0c\n    \u6709\u5f35\u7d19\u689d\uff0c\u9019\u90e8\u5206\u4e26\u672a\u51fa\u73fe\u5728\u8abf\u67e5\u5831\u544a\u4e2d\u3002\u4ed6\u9072\u7591\u7247\u523b\uff0c\u6700\u7d42\u9078\u64c7\u5c07\u5176\u96b1\u779e\u3002",questions:[{context:"\u5728\u502a\u4e3b\u4efb\u7684\u7b46\u8a18\u672c\u6697\u888b\u4e2d\uff0c\u5f35\u8861\u767c\u73fe\u4e86\u4e00\u5f35\u7d19\u689d\uff0c\u8a18\u9304\u8457\u5c0d\u516c\u53f8\u9ad8\u5c64\u7684\u4e0d\u6eff\u3002\u502a\u4e3b\u4efb\u63d0\u5230\u533f\u540d\u4fe1\u53ef\u80fd\u662f\u67d0\u4e9b\u9ad8\u5c64\u70ba\u4e86\u9677\u5bb3\u4ed6\u800c\u7cbe\u5fc3\u8a2d\u8a08\u7684\u624b\u6bb5\u3002",question:"\u9762\u5c0d\u9019\u500b\u767c\u73fe\uff0c\u4f60\u8a8d\u70ba\u5f35\u8861\u61c9\u8a72\u5982\u4f55\u8655\u7406\uff1f",choices:[{text:"\u5c07\u9019\u500b\u767c\u73fe\u7d0d\u5165\u8abf\u67e5\u5831\u544a\uff0c\u8ffd\u67e5\u5230\u5e95\u3002",feedback:"\u4f60\u9078\u64c7\u4e86\u5805\u6301\u771f\u76f8\u7684\u9053\u8def\uff0c\u9019\u986f\u793a\u4e86\u4f60\u5c0d\u516c\u7fa9\u548c\u900f\u660e\u7684\u5f37\u70c8\u8ffd\u6c42\u3002\u96d6\u7136\u9019\u689d\u7d19\u689d\u770b\u4f3c\u5fae\u4e0d\u8db3\u9053\uff0c\u4f46\u5c07\u5b83\u7d0d\u5165\u5831\u544a\u53ef\u80fd\u6703\u66b4\u9732\u51fa\u6574\u500b\u516c\u53f8\u9ad8\u5c64\u6b0a\u529b\u9b25\u722d\u7684\u6df1\u5c64\u77db\u76fe\u3002\u7136\u800c\uff0c\u5fc5\u9808\u660e\u767d\uff0c\u5728\u9019\u7a2e\u8907\u96dc\u7684\u6b0a\u529b\u7d50\u69cb\u4e2d\uff0c\u771f\u76f8\u5f80\u5f80\u96b1\u85cf\u5728\u91cd\u91cd\u8ff7\u9727\u4e4b\u5f8c\uff0c\u4e0d\u6703\u8f15\u6613\u88ab\u63ed\u958b\uff0c\u4f60\u53ef\u80fd\u9762\u81e8\u4f86\u81ea\u4e0a\u5c64\u7684\u53cd\u64b2\u8207\u66f4\u591a\u5167\u90e8\u963b\u529b\u3002",hint:"\u6709\u6642\u5019\uff0c\u904e\u65e9\u63ed\u9732\u67d0\u4e9b\u771f\u76f8\uff0c\u53cd\u800c\u6703\u963b\u7919\u66f4\u6df1\u5c64\u771f\u76f8\u7684\u767c\u73fe\u3002"},{text:"\u66ab\u6642\u4fdd\u7559\u9019\u500b\u767c\u73fe\uff0c\u7b49\u5f85\u66f4\u591a\u8b49\u64da\u3002",feedback:"\u4f60\u9078\u64c7\u4e86\u4e00\u7a2e\u8b39\u614e\u800c\u52d9\u5be6\u7684\u7b56\u7565\uff0c\u9019\u8207\u502a\u4e3b\u4efb\u7b46\u8a18\u4e2d\u6240\u63d0\u300c\u9078\u64c7\u9069\u7576\u7684\u6642\u6a5f\u8207\u65b9\u5f0f\u300d\u76f8\u547c\u61c9\u3002\u901a\u904e\u5148\u5c07\u9019\u500b\u767c\u73fe\u4fdd\u7559\uff0c\u7b49\u5f85\u5176\u4ed6\u8b49\u64da\u6d6e\u73fe\uff0c\u4f60\u53ef\u4ee5\u5728\u78ba\u4fdd\u4fe1\u606f\u66f4\u5b8c\u6574\u3001\u8b49\u64da\u66f4\u5145\u5206\u5f8c\u518d\u505a\u6c7a\u5b9a\uff0c\u5f9e\u800c\u964d\u4f4e\u98a8\u96aa\u4e26\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u5167\u90e8\u885d\u7a81\u3002\u9019\u7a2e\u7b56\u7565\u6027\u7b49\u5f85\u6216\u8a31\u80fd\u70ba\u4f60\u63d0\u4f9b\u4e00\u500b\u66f4\u7a69\u56fa\u7684\u7acb\u5834\uff0c\u5f9e\u800c\u5728\u672a\u4f86\u63ed\u9732\u96b1\u85cf\u771f\u76f8\u6642\u66f4\u5177\u8aaa\u670d\u529b\u3002",hint:"\u5728\u8907\u96dc\u7684\u5c40\u52e2\u4e2d\uff0c\u6642\u6a5f\u7684\u9078\u64c7\u5f80\u5f80\u6bd4\u884c\u52d5\u672c\u8eab\u66f4\u52a0\u91cd\u8981\u3002"},{text:"\u92b7\u6bc0\u9019\u500b\u8b49\u64da\uff0c\u907f\u514d\u6372\u5165\u66f4\u5927\u7684\u6f29\u6e26\u3002",feedback:"\u4f60\u9078\u64c7\u4e86\u4ee5\u81ea\u6211\u4fdd\u8b77\u70ba\u512a\u5148\u7684\u7b56\u7565\uff0c\u9019\u53cd\u6620\u4e86\u4f60\u5c0d\u500b\u4eba\u5b89\u5168\u53ca\u5728\u6b0a\u529b\u6f29\u6e26\u4e2d\u751f\u5b58\u7684\u6df1\u523b\u7406\u89e3\u3002\u5118\u7ba1\u9019\u6a23\u53ef\u4ee5\u907f\u514d\u7acb\u5373\u7684\u98a8\u96aa\u548c\u53ef\u80fd\u5e36\u4f86\u7684\u9ebb\u7169\uff0c\u4f46\u540c\u6642\u4e5f\u610f\u5473\u8457\u4f60\u53ef\u80fd\u6c38\u9060\u7121\u6cd5\u63ed\u958b\u96b1\u85cf\u5728\u9019\u5c64\u8ff7\u9727\u4e4b\u5f8c\u7684\u771f\u76f8\u3002\u9019\u500b\u6c7a\u5b9a\u4e0d\u50c5\u6703\u8b93\u4f60\u5728\u672a\u4f86\u53ef\u80fd\u53d7\u5230\u826f\u5fc3\u8b74\u8cac\uff0c\u4e5f\u6703\u524a\u5f31\u5916\u754c\u5c0d\u4e8b\u4ef6\u771f\u76f8\u7684\u8ffd\u554f\u3002",hint:"\u4f46\u9019\u500b\u9078\u64c7\u53ef\u80fd\u6703\u8b93\u4f60\u6c38\u9060\u6d3b\u5728\u826f\u5fc3\u7684\u8b74\u8cac\u4e2d\u3002"}]},{context:"\u5f35\u8861\u6ce8\u610f\u5230\u7b46\u8a18\u672c\u908a\u89d2\u7684\u4e00\u4e9b\u7b26\u865f\uff1a\u4e00\u96bb\u98db\u9ce5\u3001\u4e00\u68f5\u5b64\u677e\uff0c\u9084\u6709\u88ab\u5283\u6389\u7684\u300c3.14\u300d\uff0c\u65c1\u908a\u7528\u529b\u5beb\u4e0a\u4e86\u300c3.16\u300d\u3002",question:"\u9019\u4e9b\u7b26\u865f\u53ef\u80fd\u4ee3\u8868\u4ec0\u9ebc\uff1f",choices:[{text:"\u9019\u662f\u502a\u4e3b\u4efb\u7559\u4e0b\u7684\u67d0\u7a2e\u6697\u865f\u6216\u7dda\u7d22\u3002",feedback:"\u4f60\u654f\u92b3\u5730\u5bdf\u89ba\u5230\u9019\u4e9b\u7b26\u865f\u53ef\u80fd\u4e0d\u662f\u96a8\u610f\u5857\u9d09\uff0c\u800c\u662f\u502a\u4e3b\u4efb\u523b\u610f\u7559\u4e0b\u7684\u4fe1\u606f\u3002\u9019\u4e9b\u5716\u6848\u8207\u6578\u5b57\u7684\u5fae\u5999\u8b8a\u5316\uff0c\u5c24\u5176\u5f9e\u300c3.14\u300d\u5230\u300c3.16\u300d\u7684\u6539\u52d5\uff0c\u4f3c\u4e4e\u6697\u793a\u8457\u67d0\u500b\u95dc\u9375\u6642\u523b\u6216\u5167\u90e8\u5bc6\u78bc\uff0c\u53ef\u80fd\u8207\u516c\u53f8\u5167\u90e8\u67d0\u9805\u91cd\u8981\u4e8b\u4ef6\u6216\u96b1\u79d8\u5354\u8b70\u6709\u95dc\u3002\u9019\u689d\u7dda\u7d22\u6216\u8a31\u5c07\u63ed\u793a\u66f4\u591a\u95dc\u65bc\u6b0a\u529b\u904b\u4f5c\u548c\u500b\u4eba\u52d5\u6a5f\u7684\u96b1\u79d8\u4fe1\u606f\u3002",hint:"\u6578\u5b57\u7684\u4fee\u6539\u7279\u5225\u503c\u5f97\u6ce8\u610f\uff0c\u53ef\u80fd\u6697\u793a\u8457\u67d0\u500b\u91cd\u8981\u7684\u6642\u9593\u9ede\u88ab\u6539\u8b8a\u3002"},{text:"\u9019\u4e9b\u53ea\u662f\u7121\u610f\u8b58\u7684\u5857\u9d09\uff0c\u4e0d\u5177\u7279\u5225\u542b\u7fa9\u3002",feedback:"\u4f60\u9078\u64c7\u4e86\u4e00\u500b\u8f03\u70ba\u4fdd\u5b88\u7684\u89e3\u8b80\u3002\u4f46\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u6bcf\u500b\u7d30\u7bc0\u90fd\u53ef\u80fd\u85cf\u6709\u91cd\u8981\u7dda\u7d22\u3002\u7136\u800c\uff0c\u5728\u9019\u6a23\u4e00\u500b\u5145\u6eff\u61f8\u7591\u8207\u7d30\u7bc0\u7684\u74b0\u5883\u4e2d\uff0c\u6bcf\u4e00\u500b\u7d30\u7bc0\u90fd\u6709\u53ef\u80fd\u85cf\u6709\u91cd\u8981\u7dda\u7d22\u3002\u770b\u4f3c\u96a8\u610f\u7684\u5857\u9d09\u5f80\u5f80\u6b63\u662f\u6700\u96e3\u4ee5\u5bdf\u89ba\u537b\u53c8\u81f3\u95dc\u91cd\u8981\u7684\u4fe1\u606f\u8f09\u9ad4\uff0c\u53ef\u80fd\u6620\u5c04\u51fa\u4ed6\u5167\u5fc3\u4e2d\u7121\u6cd5\u8a00\u55bb\u7684\u77db\u76fe\u548c\u79d8\u5bc6\u3002",hint:"\u6709\u6642\u5019\uff0c\u770b\u4f3c\u96a8\u610f\u7684\u5857\u9d09\uff0c\u53cd\u800c\u53ef\u80fd\u662f\u6700\u91cd\u8981\u7684\u4fe1\u606f\u8f09\u9ad4\u3002"},{text:"\u9019\u53ef\u80fd\u662f\u502a\u4e3b\u4efb\u7684\u67d0\u7a2e\u5fc3\u7406\u6295\u5c04\u3002",feedback:"\u4f60\u5f9e\u5fc3\u7406\u5c64\u9762\u89e3\u8b80\u9019\u4e9b\u7b26\u865f\uff0c\u8a8d\u70ba\u5b83\u5011\u53ef\u80fd\u53cd\u6620\u4e86\u502a\u4e3b\u4efb\u7576\u6642\u7684\u5fc3\u7406\u72c0\u614b\u3002\u98db\u9ce5\u901a\u5e38\u8c61\u5fb5\u8457\u81ea\u7531\u8207\u9003\u9038\uff0c\u800c\u5b64\u677e\u5247\u4ee3\u8868\u5805\u97cc\u8207\u5b64\u7368\uff0c\u9019\u4e9b\u610f\u8c61\u6216\u8a31\u6697\u793a\u8457\u4ed6\u5c0d\u65bc\u81ea\u6211\u3001\u81ea\u7531\u4ee5\u53ca\u5c0d\u516c\u53f8\u9ad8\u5c64\u7684\u4e0d\u6eff\u60c5\u7dd2\u3002\u6578\u5b57\u5f9e\u300c3.14\u300d\u8b8a\u70ba\u300c3.16\u300d\u4e5f\u8a31\u8c61\u5fb5\u8457\u4ed6\u5728\u5167\u5fc3\u8a66\u5716\u4fee\u6b63\u6216\u91cd\u65b0\u5b9a\u7fa9\u67d0\u7a2e\u8a8d\u77e5\uff0c\u900f\u9732\u51fa\u4ed6\u5c0d\u73fe\u72c0\u7684\u6297\u62d2\u8207\u6e34\u671b\u6539\u8b8a\u7684\u4fe1\u865f\u3002",hint:"\u98db\u9ce5\u548c\u5b64\u677e\u7684\u610f\u8c61\uff0c\u6216\u8a31\u6697\u793a\u8457\u67d0\u7a2e\u6e34\u671b\u6216\u9810\u611f\u3002"}]},{context:"\u6e05\u6f54\u54e1\u63d0\u4f9b\u7684\u8b49\u8a5e\u4e2d\u63d0\u5230\uff0c\u5728\u502a\u4e3b\u4efb\u5931\u8e64\u524d\u4e00\u5929\u665a\u4e0a\uff0c\u66fe\u649e\u898b\u4ed6\u8207\u4eba\u5728\u5ec1\u6240\u62c9\u626f\uff0c\u96a8\u5f8c\u53c8\u807d\u5230\u8fa6\u516c\u5ba4\u5167\u7684\u6fc0\u70c8\u722d\u5435\u3002\u7136\u800c\uff0c\u9019\u6bb5\u6642\u9593\u7684\u76e3\u8996\u5668\u756b\u9762\u537b\u88ab\u795e\u79d8\u6d88\u5931\u4e86\u3002",question:"\u5c0d\u65bc\u9019\u500b\u8b49\u8a5e\uff0c\u4f60\u6703\u5982\u4f55\u89e3\u8b80\uff1f",choices:[{text:"\u9019\u53ef\u80fd\u662f\u502a\u4e3b\u4efb\u5931\u8e64\u6848\u7684\u95dc\u9375\u8f49\u6298\u9ede\u3002",feedback:"\u9019\u6216\u8a31\u6b63\u662f\u6574\u500b\u4e8b\u4ef6\u7684\u8f49\u6298\u9ede\uff0c\u63ed\u793a\u51fa\u80cc\u5f8c\u66f4\u6df1\u5c64\u7684\u885d\u7a81\u8207\u9ed1\u5e55\u3002\u9019\u6bb5\u6642\u9593\u5167\u7684\u4e0d\u5c0b\u5e38\u73fe\u8c61\uff0c\u53ef\u80fd\u6b63\u662f\u67d0\u4e9b\u52e2\u529b\u523b\u610f\u63a9\u84cb\u771f\u76f8\u7684\u95dc\u9375\u74b0\u7bc0\uff0c\u70ba\u6574\u500b\u6848\u60c5\u8499\u4e0a\u4e00\u5c64\u795e\u79d8\u7684\u9762\u7d17\u3002",hint:"\u76e3\u8996\u5668\u756b\u9762\u7684\u6d88\u5931\uff0c\u66f4\u52a0\u5f37\u5316\u4e86\u9019\u500b\u6642\u9593\u9ede\u7684\u53ef\u7591\u6027\u3002"},{text:"\u6e05\u6f54\u54e1\u7684\u8b49\u8a5e\u53ef\u80fd\u4e26\u4e0d\u53ef\u9760\u3002",feedback:"\u7136\u800c\uff0c\u76e3\u8996\u5668\u756b\u9762\u7684\u78ba\u795e\u79d8\u6d88\u5931\uff0c\u9019\u4e00\u73fe\u8c61\u53c8\u8207\u8b49\u8a5e\u4e2d\u7684\u7d30\u7bc0\u6709\u6240\u547c\u61c9\uff0c\u4f7f\u5f97\u9019\u4efd\u8b49\u8a5e\u5728\u67d0\u4e9b\u65b9\u9762\u589e\u6dfb\u4e86\u53ef\u4fe1\u5ea6\u3002\u9019\u7a2e\u77db\u76fe\u7684\u60c5\u6cc1\u8981\u6c42\u4f60\u66f4\u8b39\u614e\u5730\u5c0d\u5f85\u6bcf\u4e00\u689d\u7dda\u7d22\uff0c\u4e0d\u80fd\u8f15\u6613\u6392\u9664\u4efb\u4f55\u53ef\u80fd\u6027\u3002",hint:"\u4f46\u76e3\u8996\u5668\u756b\u9762\u7684\u6d88\u5931\uff0c\u4f3c\u4e4e\u5370\u8b49\u4e86\u8b49\u8a5e\u7684\u67d0\u4e9b\u90e8\u5206\u3002"},{text:"\u9019\u4e9b\u7d30\u7bc0\u88ab\u523b\u610f\u96b1\u779e\u7684\u53ef\u80fd\u6027\u5f88\u5927\u3002",feedback:"\u76e3\u8996\u5668\u756b\u9762\u7684\u6d88\u5931\u3001\u62c9\u626f\u8072\u548c\u722d\u5435\u8072\u53ef\u80fd\u90fd\u4e26\u975e\u5076\u7136\uff0c\u800c\u662f\u7d93\u904e\u7cbe\u5fc3\u4f48\u5c40\u7684\u8868\u8c61\uff0c\u65e8\u5728\u6df7\u6dc6\u8996\u807d\uff0c\u96b1\u85cf\u771f\u76f8\u3002\u9019\u7a2e\u7b56\u7565\u5e38\u898b\u65bc\u6b0a\u529b\u9b25\u722d\u4e2d\uff0c\u8a0a\u606f\u7684\u64cd\u63a7\u5f80\u5f80\u662f\u7dad\u6301\u73fe\u72c0\u7684\u6700\u6709\u529b\u624b\u6bb5\u3002",hint:"\u5728\u6b0a\u529b\u7684\u8f03\u91cf\u4e2d\uff0c\u8a0a\u606f\u7684\u63a7\u5236\u5f80\u5f80\u662f\u6700\u95dc\u9375\u7684\u90e8\u5206\u3002"}]}],philosophicalReflection:{title:"\u771f\u76f8\u7684\u591a\u91cd\u9762\u5411",content:"\u5728\u8ffd\u5c0b\u771f\u76f8\u7684\u904e\u7a0b\u4e2d\uff0c\u6211\u5011\u5f80\u5f80\u6703\u767c\u73fe\uff0c\u771f\u76f8\u4e26\u975e\u55ae\u4e00\u7684\u5b58\u5728\u3002\u6b63\u5982\u90a3\u591a\u68f1\u93e1\u822c\u7684\u5149\u5f71\uff0c\u6bcf\u4e00\u500b\u89d2\u5ea6\u90fd\u5448\u73fe\u51fa\u4e0d\u540c\u7684\u6a23\u8c8c\u2014\u2014\u9019\u6b63\u662f\u502a\u4e3b\u4efb\u7b46\u8a18\u4e2d\u96b1\u542b\u7684\u610f\u6db5\u3002\u7576\u6211\u5011\u51dd\u8996\u9019\u4e9b\u788e\u7247\u6642\uff0c\u4e0d\u50c5\u50c5\u662f\u770b\u5230\u4e00\u500b\u4e8b\u5be6\uff0c\u800c\u662f\u770b\u5230\u4e86\u7121\u6578\u4ea4\u7e54\u7684\u7d30\u7bc0\u8207\u77db\u76fe\u3002\n\n\n\n\u502a\u4e3b\u4efb\u66fe\u5728\u7b46\u8a18\u4e2d\u5beb\u9053\uff1a\u300c\u4eba\u7e3d\u8981\u9078\u64c7\u9069\u7576\u7684\u6642\u6a5f\u8207\u65b9\u5f0f\uff0c\u904e\u65e9\u7684\u5c0d\u6297\u53ea\u6703\u4f7f\u67b7\u9396\u66f4\u52a0\u7dca\u5bc6\u3002\u300d\u9019\u53e5\u8a71\u4e0d\u50c5\u662f\u4e00\u500b\u7b56\u7565\u7684\u5fe0\u544a\uff0c\u66f4\u662f\u4e00\u500b\u6df1\u523b\u7684\u54f2\u5b78\u547d\u984c\u3002\u5b83\u63d0\u9192\u6211\u5011\uff0c\u7576\u9762\u5c0d\u90a3\u4f3c\u4e4e\u51b0\u51b7\u800c\u7121\u60c5\u7684\u73fe\u5be6\u6642\uff0c\u52c7\u6c23\u8207\u667a\u6167\u5fc5\u9808\u4e26\u884c\u3002\u904e\u65e9\u7684\u76f4\u63a5\u5c0d\u6297\uff0c\u53ef\u80fd\u6703\u4f7f\u5f97\u5c40\u52e2\u66f4\u52a0\u932f\u7d9c\u8907\u96dc\uff0c\u8b93\u6211\u5011\u9677\u5165\u66f4\u6df1\u7684\u56f0\u5883\uff0c\u800c\u9078\u64c7\u7b56\u7565\u6027\u7684\u8fc2\u8ff4\u5247\u53ef\u80fd\u4f7f\u6211\u5011\u5728\u6f38\u9032\u4e2d\u63ed\u958b\u90a3\u91cd\u91cd\u8ff7\u9727\u4e0b\u96b1\u85cf\u7684\u771f\u76f8\u3002\n\n\n\n\u7576\u6211\u5011\u7ad9\u5728\u771f\u76f8\u9762\u524d\uff0c\u662f\u8a72\u50cf\u502a\u4e3b\u4efb\u90a3\u822c\u4ee5\u51b7\u975c\u3001\u7cbe\u6e96\u7684\u614b\u5ea6\u8655\u7406\u6bcf\u4e00\u500b\u7d30\u7bc0\uff0c\u9084\u662f\u5982\u5f35\u8861\u90a3\u6a23\u5728\u7591\u96f2\u91cd\u91cd\u4e2d\u4e0d\u65b7\u8ffd\u554f\u3001\u6aa2\u8996\uff0c\u9019\u6b63\u662f\u5c0d\u6211\u5011\u4eba\u6027\u7684\u6700\u5927\u8003\u9a57\u3002\u300c\u771f\u76f8\u4e26\u975e\u55ae\u4e00\u7684\u5b58\u5728\u300d\uff0c\u5b83\u53ef\u80fd\u662f\u6b98\u9177\u7684\u3001\u662f\u591a\u9762\u5411\u7684\uff0c\u6b63\u5982\u90a3\u7b46\u8a18\u672c\u4e2d\u88ab\u96b1\u85cf\u8d77\u4f86\u7684\u7d19\u689d\u3001\u88ab\u5283\u6389\u53c8\u91cd\u5beb\u7684\u6578\u5b57\uff0c\u6bcf\u4e00\u500b\u7d30\u7bc0\u90fd\u662d\u793a\u8457\u4e0d\u540c\u7684\u53ef\u80fd\u6027\u3002\n\n\n\n\u5728\u9019\u500b\u5145\u6eff\u58d3\u8feb\u8207\u77db\u76fe\u7684\u6b0a\u529b\u7d50\u69cb\u4e2d\uff0c\u6bcf\u4e00\u6b21\u9078\u64c7\u90fd\u5982\u540c\u8d70\u5728\u61f8\u5d16\u908a\u7de3\u3002\u7a76\u7adf\u662f\u9078\u64c7\u76f4\u63a5\u63ed\u9732\uff0c\u9084\u662f\u66ab\u4e14\u96b1\u779e\u7b49\u5f85\u66f4\u5145\u5206\u7684\u8b49\u64da\uff1f\u6b63\u5982\u502a\u4e3b\u4efb\u5728\u7b46\u8a18\u4e2d\u6240\u6697\u793a\u7684\uff1a\u300c\u9078\u64c7\u9069\u7576\u7684\u6642\u6a5f\u8207\u65b9\u5f0f\u300d\uff0c\u6709\u6642\u5019\uff0c\u6211\u5011\u5fc5\u9808\u5148\u5b78\u6703\u7b49\u5f85\uff0c\u5b78\u6703\u5728\u6c89\u9ed8\u4e2d\u5c0b\u627e\u7b54\u6848\u3002\u9019\u4e0d\u50c5\u662f\u4e00\u7a2e\u7b56\u7565\uff0c\u66f4\u662f\u4e00\u7a2e\u5c0d\u5167\u5fc3\u6050\u61fc\u8207\u4e0d\u78ba\u5b9a\u6027\u7684\u667a\u6167\u8abf\u548c\u3002\n\n\n\n\u7576\u6211\u5011\u9762\u5c0d\u9019\u5c64\u5c64\u8ff7\u9727\u3001\u9762\u5c0d\u90a3\u770b\u4f3c\u5b8c\u7f8e\u537b\u53c8\u6b98\u9177\u7121\u60c5\u7684\u6548\u7387\u8207\u63a7\u5236\u6642\uff0c\u6211\u5011\u9700\u8981\u7684\u4e0d\u50c5\u50c5\u662f\u52c7\u6c23\uff0c\u800c\u662f\u8981\u61c2\u5f97\u5982\u4f55\u5f9e\u4e0d\u540c\u89d2\u5ea6\u5be9\u8996\u4e8b\u7269\u3002\u771f\u76f8\uff0c\u6700\u7d42\u5c07\u5728\u6211\u5011\u4e0d\u65b7\u7684\u601d\u7d22\u8207\u63a2\u7a76\u4e2d\u9010\u6f38\u986f\u73fe\uff0c\u800c\u9019\u904e\u7a0b\u672c\u8eab\uff0c\u4e5f\u6b63\u662f\u5c0d\u6211\u5011\u5fc3\u9748\u8207\u7406\u667a\u6700\u56b4\u5cfb\u7684\u8003\u9a57\u3002\n"}},5:{id:5,title:"\u7b2c\u4e94\u7ae0\uff1a\u5371\u6a5f\u8207\u8cea\u7591",content:"\u5f35\u8861\u7684\u4e16\u754c\u4f3c\u4e4e\u958b\u59cb\u5d29\u584c\u3002\u4ed6\u539f\u672c\u53ea\u662f\u62b1\u8457\u5b8c\u6210\u4efb\u52d9\u7684\u5fc3\u614b\uff0c\u8abf\u67e5\u4e00\u5c01\u533f\u540d\u4fe1\uff0c\n    \u5982\u4eca\u537b\u9677\u5165\u4e86\u7121\u6cd5\u62bd\u8eab\u7684\u6df1\u6df5\u3002\u4ed6\u958b\u59cb\u8a8d\u540c\u502a\u4e3b\u4efb\u7b46\u8a18\u4e2d\u63d0\u5230\u7684\u67d0\u4e9b\u7406\u60f3\uff0c\n    \u90a3\u4e9b\u770b\u4f3c\u62bd\u8c61\u7684\u54f2\u5b78\u601d\u7dad\uff0c\u6b63\u5728\u4ed6\u7684\u8166\u6d77\u4e2d\u751f\u6839\u767c\u82bd\u3002",questions:[{context:"\u5f35\u8861\u767c\u73fe\u81ea\u5df1\u9677\u5165\u4e86\u4e00\u500b\u9032\u9000\u5169\u96e3\u7684\u8655\u5883\u3002\u4e00\u65b9\u9762\uff0c\u4ed6\u9700\u8981\u5b8c\u6210\u8abf\u67e5\u4efb\u52d9\uff1b\u53e6\u4e00\u65b9\u9762\uff0c\u4ed6\u958b\u59cb\u8cea\u7591\u81ea\u5df1\u7684\u89d2\u8272\u5b9a\u4f4d\u3002",question:"\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u4f60\u8a8d\u70ba\u5f35\u8861\u61c9\u8a72\u5982\u4f55\u770b\u5f85\u81ea\u5df1\u7684\u89d2\u8272\uff1f",choices:[{text:"\u5805\u6301\u5c08\u696d\u8abf\u67e5\u54e1\u7684\u7acb\u5834\uff0c\u4fdd\u6301\u5ba2\u89c0\u4e2d\u7acb\u3002",feedback:"\u9019\u7a2e\u505a\u6cd5\u9ad4\u73fe\u4e86\u50b3\u7d71\u7684\u8077\u696d\u64cd\u5b88\uff0c\u6b63\u5982\u5f35\u8861\u5728\u8fa6\u516c\u5ba4\u88e1\u9ed8\u9ed8\u8a18\u9304\u6bcf\u4e00\u500b\u7d30\u7bc0\u822c\uff0c\u529b\u6c42\u4e0d\u53d7\u60c5\u611f\u727d\u52d5\u3002\u7136\u800c\uff0c\u5728\u90a3\u5145\u6eff\u77db\u76fe\u8207\u58d3\u8feb\u7684\u73fe\u5be6\u4e2d\uff0c\u7d14\u7cb9\u7684\u5ba2\u89c0\u4f3c\u4e4e\u4e5f\u96b1\u85cf\u8457\u81ea\u8eab\u7684\u5c40\u9650\uff0c\u771f\u76f8\u4e26\u975e\u55ae\u4e00\u7684\u5b58\u5728\uff0c\u50c5\u6191\u7406\u6027\u6709\u6642\u96e3\u4ee5\u7a7f\u900f\u91cd\u91cd\u8ff7\u9727\u3002",hint:"\u6709\u6642\u5019\uff0c\u904e\u5206\u5f37\u8abf\u5ba2\u89c0\u53cd\u800c\u6703\u5ffd\u7565\u4e86\u66f4\u6df1\u5c64\u7684\u771f\u76f8\u3002"},{text:"\u63a5\u53d7\u81ea\u5df1\u53ef\u80fd\u53ea\u662f\u66f4\u5927\u8a08\u5283\u4e2d\u7684\u4e00\u9846\u68cb\u5b50\u3002",feedback:"\u4f60\u9078\u64c7\u4e86\u4e00\u500b\u8f03\u70ba\u73fe\u5be6\u7684\u8a8d\u77e5\uff0c\u627f\u8a8d\u5728\u67d0\u4e9b\u529b\u91cf\u9762\u524d\uff0c\u500b\u4eba\u7684\u6e3a\u5c0f\u3002\u9019\u500b\u89c0\u9ede\u8b93\u4eba\u806f\u60f3\u5230\u5f35\u8861\u5728\u9762\u5c0d\u91cd\u91cd\u7591\u96f2\u6642\u90a3\u7a2e\u7121\u5948\u8207\u81ea\u7701\uff0c\u5728\u9019\u500b\u5145\u6eff\u58d3\u8feb\u8207\u77db\u76fe\u7684\u6b0a\u529b\u7d50\u69cb\u4e2d\uff0c\u6bcf\u4e00\u6b21\u9078\u64c7\u90fd\u5982\u540c\u8d70\u5728\u61f8\u5d16\u908a\u7de3\u3002\u627f\u8a8d\u81ea\u5df1\u7684\u5c40\u9650\uff0c\u6709\u6642\u6b63\u662f\u8a8d\u6e05\u771f\u76f8\u7684\u7b2c\u4e00\u6b65\uff0c\u5118\u7ba1\u9019\u610f\u5473\u8457\u6211\u5011\u4e0d\u5f97\u4e0d\u9762\u5c0d\u81ea\u8eab\u7684\u8106\u5f31\u8207\u7121\u529b\u611f\u3002",hint:"\u8a8d\u8b58\u5230\u81ea\u5df1\u7684\u5c40\u9650\uff0c\u53ef\u80fd\u662f\u7a81\u7834\u5c40\u9650\u7684\u7b2c\u4e00\u6b65\u3002"},{text:"\u5617\u8a66\u5728\u8077\u8cac\u548c\u826f\u77e5\u4e4b\u9593\u627e\u5230\u5e73\u8861\u3002",feedback:"\u4f60\u8a66\u5716\u5728\u8907\u96dc\u7684\u60c5\u5883\u4e2d\u5c0b\u627e\u4e00\u500b\u6298\u8877\u9ede\uff0c\u9019\u9700\u8981\u6975\u5927\u7684\u667a\u6167\u548c\u52c7\u6c23\u3002\u5f35\u8861\u65e2\u80a9\u8ca0\u8457\u63ed\u9732\u771f\u76f8\u7684\u8cac\u4efb\uff0c\u4e5f\u5728\u4e0d\u65b7\u8cea\u7591\u81ea\u5df1\u7684\u5b9a\u4f4d\uff0c\u7576\u6211\u5011\u9762\u5c0d\u771f\u76f8\u6642\uff0c\u662f\u9078\u64c7\u76f4\u63a5\u9762\u5c0d\uff0c\u9084\u662f\u7b56\u7565\u6027\u5730\u8fc2\u8ff4\uff1f\u9019\u7a2e\u6298\u8877\u4e4b\u9053\uff0c\u4e0d\u50c5\u9700\u8981\u5805\u6301\uff0c\u66f4\u9700\u8981\u5c0d\u5167\u5fc3\u6050\u61fc\u8207\u77db\u76fe\u7684\u6df1\u523b\u8a8d\u77e5\uff0c\u624d\u80fd\u5728\u6b98\u9177\u73fe\u5be6\u4e2d\u4fdd\u6301\u81ea\u6211\u3002",hint:"\u5e73\u8861\u4e26\u4e0d\u610f\u5473\u8457\u59a5\u5354\uff0c\u800c\u662f\u5728\u4e0d\u540c\u50f9\u503c\u4e4b\u9593\u505a\u51fa\u66f4\u660e\u667a\u7684\u9078\u64c7\u3002"}]},{context:"\u516c\u53f8\u5167\u90e8\u5c0d\u5f35\u8861\u7684\u8ca0\u9762\u50b3\u805e\u958b\u59cb\u8513\u5ef6\uff0c\u8cea\u7591\u4ed6\u5831\u544a\u7684\u53ef\u4fe1\u5ea6\u3002\u9019\u8b93\u4ed6\u4e0d\u5f97\u4e0d\u91cd\u65b0\u5be9\u8996\u81ea\u5df1\u7684\u8655\u5883\u3002",question:"\u9762\u5c0d\u9019\u7a2e\u8cea\u7591\uff0c\u4f60\u6703\u5982\u4f55\u61c9\u5c0d\uff1f",choices:[{text:"\u5805\u6301\u81ea\u5df1\u7684\u7acb\u5834\uff0c\u7e7c\u7e8c\u6df1\u5165\u8abf\u67e5\u3002",feedback:"\u4f60\u9078\u64c7\u4e86\u4e00\u689d\u8271\u96e3\u4f46\u6b63\u76f4\u7684\u9053\u8def\u3002\u9019\u9700\u8981\u6975\u5927\u7684\u52c7\u6c23\u548c\u6c7a\u5fc3\u3002\u5f35\u8861\u5728\u6df1\u591c\u5206\u6790\u76e3\u63a7\u9304\u50cf\u3001\u53cd\u8986\u601d\u7d22\u90a3\u4e00\u53e5\u300c\u4f60\u7a76\u7adf\u662f\u8ab0\uff0c\u60f3\u8981\u544a\u8a34\u6211\u4ec0\u9ebc\uff1f\u300d\u7684\u72c0\u614b\u76f8\u547c\u61c9\uff0c\u986f\u793a\u51fa\u4ed6\u5c0d\u63ed\u9732\u771f\u76f8\u7684\u7121\u6bd4\u57f7\u8457\u8207\u8cac\u4efb\u611f\u3002\u7136\u800c\uff0c\u9019\u7a2e\u5805\u6301\u5728\u73fe\u5be6\u7684\u6b0a\u529b\u9b25\u722d\u4e2d\u5f80\u5f80\u4f34\u96a8\u8457\u66f4\u5927\u7684\u98a8\u96aa\u8207\u6311\u6230\u3002",hint:"\u4f46\u8981\u5c0f\u5fc3\uff0c\u904e\u5206\u7684\u5805\u6301\u53ef\u80fd\u6703\u8b93\u81ea\u5df1\u9677\u5165\u66f4\u5371\u96aa\u7684\u5883\u5730\u3002"},{text:"\u66ab\u6642\u9000\u8b93\uff0c\u7b49\u5f85\u9069\u7576\u6642\u6a5f\u3002",feedback:"\u4f60\u63a1\u53d6\u4e86\u4e00\u500b\u7b56\u7565\u6027\u7684\u65b9\u5f0f\uff0c\u9019\u6216\u8a31\u80fd\u70ba\u5c07\u4f86\u7559\u4e0b\u66f4\u591a\u53ef\u80fd\u6027\u3002\u66ab\u6642\u96b1\u5fcd\u548c\u7b49\u5f85\uff0c\u6216\u8a31\u80fd\u8b93\u4f60\u5728\u8cc7\u8a0a\u66f4\u5b8c\u6574\u3001\u8b49\u64da\u66f4\u5145\u5206\u6642\u518d\u4f5c\u6c7a\u65b7\uff0c\u5f9e\u800c\u6e1b\u5c11\u76f4\u63a5\u5c0d\u6297\u6240\u5e36\u4f86\u7684\u98a8\u96aa\u3002\u9019\u7a2e\u9000\u8b93\u4e26\u975e\u61e6\u5f31\uff0c\u800c\u662f\u4e00\u7a2e\u5c0d\u5c40\u52e2\u6df1\u523b\u7406\u89e3\u5f8c\u7684\u660e\u667a\u9078\u64c7\uff0c\u6b63\u5982\u5f35\u8861\u5728\u591a\u91cd\u58d3\u529b\u4e0b\u4ecd\u7136\u4fdd\u6301\u51b7\u975c\u7684\u614b\u5ea6\u4e00\u822c\u3002",hint:"\u9000\u8b93\u4e0d\u7b49\u65bc\u653e\u68c4\uff0c\u6709\u6642\u5019\u662f\u70ba\u4e86\u66f4\u597d\u7684\u524d\u9032\u3002"},{text:"\u5c0b\u6c42\u5176\u4ed6\u540c\u4e8b\u7684\u652f\u6301\u548c\u7406\u89e3\u3002",feedback:"\u4f60\u8a66\u5716\u5efa\u7acb\u806f\u76df\uff0c\u9019\u5728\u8077\u5834\u4e2d\u662f\u5f88\u91cd\u8981\u7684\u751f\u5b58\u7b56\u7565\u3002\u7576\u516c\u53f8\u5167\u90e8\u5145\u6eff\u6d41\u8a00\u871a\u8a9e\u6642\uff0c\u5718\u7d50\u4e00\u81f4\u80fd\u5920\u70ba\u4f60\u63d0\u4f9b\u66f4\u5805\u5be6\u7684\u5f8c\u76fe\u3002\u7136\u800c\uff0c\u5728\u9019\u6a23\u4e00\u500b\u5145\u6eff\u6b0a\u529b\u89d2\u529b\u7684\u74b0\u5883\u4e2d\uff0c\u4f60\u5fc5\u9808\u975e\u5e38\u8b39\u614e\uff0c\u56e0\u70ba\u771f\u6b63\u53ef\u4ee5\u4fe1\u4efb\u7684\u4eba\u4e26\u4e0d\u591a\uff0c\u5c31\u5982\u540c\u90a3\u53e5\u8a71\u6240\u63d0\u9192\u7684\uff0c\u6bcf\u500b\u9078\u64c7\u90fd\u53ef\u80fd\u5f71\u97ff\u6574\u500b\u5c40\u52e2\u3002",hint:"\u4f46\u8981\u8b39\u8a18\uff0c\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u8ab0\u624d\u662f\u771f\u6b63\u53ef\u4ee5\u4fe1\u4efb\u7684\u4eba\uff1f"}]},{context:"\u5728\u502a\u4e3b\u4efb\u6d88\u5931\u5f8c\uff0c\u516c\u53f8\u7684\u904b\u4f5c\u51fa\u73fe\u660e\u986f\u505c\u6eef\uff0c\u5f88\u591a\u696d\u52d9\u63a8\u52d5\u8b8a\u5f97\u8209\u6b65\u7dad\u8271\u3002",question:"\u9019\u7a2e\u73fe\u8c61\u53cd\u6620\u4e86\u4ec0\u9ebc\u554f\u984c\uff1f",choices:[{text:"\u502a\u4e3b\u4efb\u7684\u7ba1\u7406\u80fd\u529b\u78ba\u5be6\u4e0d\u53ef\u6216\u7f3a\u3002",feedback:"\u4f60\u8a8d\u8b58\u5230\u4e86\u502a\u4e3b\u4efb\u5728\u516c\u53f8\u904b\u4f5c\u4e2d\u7684\u91cd\u8981\u6027\uff0c\uff0c\u4ed6\u90a3\u8fd1\u4e4e\u5b8c\u7f8e\u7684\u7ba1\u7406\u8207\u51b7\u5cfb\u57f7\u884c\u529b\u4f7f\u5f97\u6574\u500b\u7d44\u7e54\u9ad8\u6548\u904b\u8f49\u3002\u6b63\u5982\u540c\u4e8b\u5011\u5728\u7dec\u61f7\u6703\u4e0a\u6240\u63d0\u53ca\uff0c\u300c\u6c92\u6709\u4ed6\uff0c\u5f88\u591a\u8de8\u90e8\u9580\u7684\u5354\u4f5c\u90fd\u4e82\u6210\u4e86\u4e00\u5718\u300d\uff0c\u4ed6\u7684\u5b58\u5728\u8b93\u516c\u53f8\u904b\u4f5c\u4fdd\u6301\u8457\u4e00\u7a2e\u96e3\u4ee5\u8a00\u55bb\u7684\u7a69\u5b9a\u611f\u3002",hint:"\u4e00\u500b\u4eba\u7684\u50f9\u503c\uff0c\u6709\u6642\u8981\u5728\u5931\u53bb\u5f8c\u624d\u80fd\u771f\u6b63\u9ad4\u73fe\u3002"},{text:"\u516c\u53f8\u7684\u5236\u5ea6\u904e\u65bc\u4f9d\u8cf4\u500b\u4eba\u3002",feedback:"\u4f60\u5f9e\u5236\u5ea6\u5c64\u9762\u5206\u6790\u554f\u984c\uff0c\u9019\u53cd\u6620\u4e86\u5c0d\u7d44\u7e54\u904b\u4f5c\u6a5f\u5236\u7684\u6df1\u5165\u601d\u8003\u3002\u516c\u53f8\u904e\u65bc\u501a\u91cd\u502a\u4e3b\u4efb\u500b\u4eba\u7684\u7ba1\u7406\u8207\u63a7\u5236\uff0c\u9019\u6a23\u7684\u4f9d\u8cf4\u6027\u5728\u4ed6\u6d88\u5931\u5f8c\u66b4\u9732\u7121\u907a\u3002\u9019\u7a2e\u73fe\u8c61\u4e0d\u50c5\u524a\u5f31\u4e86\u7d44\u7e54\u7684\u81ea\u4e3b\u904b\u4f5c\u80fd\u529b\uff0c\u4e5f\u8b93\u6574\u500b\u516c\u53f8\u9677\u5165\u4e86\u7a7a\u524d\u7684\u6df7\u4e82\uff0c\u6b63\u5982\u5c0f\u8aaa\u4e2d\u6240\u63cf\u8ff0\u7684\uff0c\u696d\u52d9\u63a8\u52d5\u8b8a\u5f97\u8209\u6b65\u7dad\u8271\uff0c\u6574\u500b\u904b\u4f5c\u9ad4\u7cfb\u9813\u5931\u5e73\u8861\u3002",hint:"\u904e\u5ea6\u4f9d\u8cf4\u500b\u4eba\u7684\u5236\u5ea6\uff0c\u672c\u8eab\u5c31\u662f\u4e00\u7a2e\u6f5b\u5728\u7684\u5371\u6a5f\u3002"},{text:"\u9019\u53ef\u80fd\u662f\u67d0\u7a2e\u84c4\u610f\u7684\u6df7\u4e82\u3002",feedback:"\u4f60\u63d0\u51fa\u4e86\u4e00\u500b\u5927\u81bd\u7684\u5047\u8a2d\uff0c\u9019\u7a2e\u6df7\u4e82\u662f\u5426\u771f\u7684\u662f\u5076\u7136\u7684\uff1f\u53ef\u4ee5\u611f\u53d7\u5230\uff0c\u502a\u4e3b\u4efb\u6d88\u5931\u5f8c\uff0c\u6240\u6709\u7dda\u7d22\u90fd\u8b8a\u5f97\u66f4\u52a0\u8a6d\u8b4e\u591a\u8b8a\uff0c\u9019\u7a2e\u6df7\u4e82\u4f3c\u4e4e\u6b63\u662f\u67d0\u7a2e\u66f4\u5927\u9670\u8b00\u7684\u524d\u594f\uff0c\u6b63\u5982\u90a3\u795e\u79d8\u7684\u533f\u540d\u4fe1\u548c\u4e0d\u65b7\u6d6e\u73fe\u7684\u5404\u7a2e\u7570\u8c61\u6240\u6697\u793a\u7684\u3002",hint:"\u6709\u6642\u5019\uff0c\u8868\u9762\u7684\u6df7\u4e82\u80cc\u5f8c\u53ef\u80fd\u96b1\u85cf\u8457\u67d0\u7a2e\u8a08\u5283\u3002"}]}],philosophicalReflection:{title:"\u89d2\u8272\u8207\u81ea\u6211",content:"\u5728\u73fe\u4ee3\u793e\u6703\u4e2d\uff0c\u6bcf\u500b\u4eba\u90fd\u626e\u6f14\u8457\u4e0d\u540c\u7684\u89d2\u8272\uff0c\u6b63\u5982\u90a3\u5145\u6eff\u8b0e\u5718\u7684\u6b0a\u529b\u904a\u6232\u4e2d\uff0c\u6bcf\u500b\u89d2\u8272\u90fd\u53ef\u80fd\u53ea\u662f\u5927\u5c40\u4e2d\u7684\u4e00\u9846\u68cb\u5b50\u3002\n             \u5f35\u8861\u7684\u56f0\u5883\u6b63\u662f\u6e90\u65bc\u6b64\uff1a\u4ed6\u65e2\u662f\u5805\u5b88\u8abf\u67e5\u8077\u8cac\u7684\u5c08\u696d\u8abf\u67e5\u54e1\uff0c\u53c8\u662f\u90a3\u4e0d\u65b7\u8ffd\u5c0b\u771f\u76f8\u7684\u63a2\u6c42\u8005\uff1b\u540c\u6642\uff0c\u4ed6\u4e5f\u4e0d\u5f97\u4e0d\u9762\u5c0d\u4e00\u500b\u6b98\u9177\u7684\u73fe\u5be6\u2014\u2014\u4ed6\u53ef\u80fd\u53ea\u662f\u66f4\u5927\u8a08\u5283\u4e2d\u7684\u4e00\u500b\u74b0\u7bc0\uff0c\u4e00\u500b\u96b1\u85cf\u5728\u7121\u5f62\u67b7\u9396\u4e0b\u7684\u5c0f\u89d2\u8272\u3002\n             \u9019\u8b93\u6211\u5011\u4e0d\u7981\u601d\u8003\uff1a\u5728\u9019\u8907\u96dc\u800c\u5145\u6eff\u58d3\u8feb\u7684\u793e\u6703\u7d50\u69cb\u4e2d\uff0c\u6211\u5011\u662f\u5426\u771f\u7684\u80fd\u5920\u4fdd\u6301\u5b8c\u5168\u7684\u7368\u7acb\u6027\uff1f\n             \u7576\u771f\u76f8\u50cf\u591a\u68f1\u93e1\u822c\u6620\u5c04\u51fa\u7121\u6578\u9762\u5411\u6642\uff0c\u662f\u8a72\u5805\u5b88\u90a3\u4efd\u5c08\u696d\u8207\u5ba2\u89c0\uff0c\u9084\u662f\u8a72\u52c7\u6562\u5730\u627f\u8a8d\u81ea\u5df1\u5728\u5927\u5c40\u4e2d\u7684\u6e3a\u5c0f\u8207\u7121\u5948\uff1f \n             \u6216\u8a31\uff0c\u6b63\u5982\u502a\u4e3b\u4efb\u7b46\u8a18\u4e2d\u6240\u8a00\uff0c\u300c\u4eba\u7e3d\u8981\u9078\u64c7\u9069\u7576\u7684\u6642\u6a5f\u8207\u65b9\u5f0f\u300d\uff0c\u8a8d\u8b58\u5230\u81ea\u5df1\u7684\u5c40\u9650\uff0c\u4e26\u5728\u8077\u8cac\u8207\u826f\u77e5\u4e4b\u9593\u5c0b\u627e\u5fae\u5999\u7684\u5e73\u8861\uff0c\u624d\u662f\u8d70\u5411\u771f\u6b63\u667a\u6167\u7684\u9053\u8def\u3002\n             \u5728\u9019\u689d\u63a2\u7d22\u4e4b\u8def\u4e0a\uff0c\u6bcf\u4e00\u500b\u9078\u64c7\u90fd\u5982\u540c\u8d70\u5728\u61f8\u5d16\u908a\u7de3\uff0c\u65e2\u9700\u8981\u7121\u6bd4\u7684\u52c7\u6c23\uff0c\u4e5f\u9700\u8981\u6df1\u523b\u7684\u81ea\u6211\u53cd\u601d\uff1b\u800c\u6700\u7d42\uff0c\u7576\u6211\u5011\u9762\u5c0d\u90a3\u591a\u9762\u5411\u7684\u771f\u76f8\u6642\uff0c\u6216\u8a31\u6b63\u662f\u5728\u9019\u7121\u6578\u77db\u76fe\u8207\u6289\u64c7\u4e2d\uff0c\u6211\u5011\u624d\u80fd\u9010\u6b65\u9818\u609f\u5230\u300c\u89d2\u8272\u8207\u81ea\u6211\u300d\u771f\u6b63\u7684\u610f\u7fa9\u3002"}},6:{id:6,title:"\u7b2c\u516d\u7ae0\uff1a\u7dec\u61f7\u8207\u8abf\u67e5",content:"\u5169\u500b\u591a\u6708\u904e\u53bb\u4e86\uff0c\u8b66\u65b9\u6c92\u6709\u627e\u5230\u502a\u4e3b\u4efb\uff0c\u800c\u6709\u95dc\u502a\u4e3b\u4efb\u7684\u516c\u53f8\u5167\u90e8\u8abf\u67e5\u5831\u544a\uff0c\n    \u4e5f\u7d42\u65bc\u7d50\u6848\u3002\u516c\u53f8\u4ee5\u66e0\u8077\u7684\u65b9\u5f0f\u8655\u7406\u6b64\u4e8b\uff0c\u4e26\u672a\u5c31\u5931\u8e64\u539f\u56e0\u9032\u4e00\u6b65\u8ffd\u7a76\u3002\n    \u96d6\u7136\u516c\u53f8\u9ad8\u5c64\u614b\u5ea6\u51b7\u6de1\u4e14\u8a6d\u8b4e\uff0c\u4f46\u516c\u53f8\u5167\u90e8\u9084\u662f\u8209\u8fa6\u4e86\u4e00\u5834\u7dec\u61f7\u6703\uff0c\n    \u5f62\u5f0f\u4f4e\u8abf\u800c\u5c0f\u5de7\uff0c\u537b\u610f\u5916\u5438\u5f15\u4e86\u8a31\u591a\u54e1\u5de5\u53c3\u8207\u3002",questions:[{context:"\u5728\u7dec\u61f7\u6703\u4e0a\uff0c\u8a31\u591a\u54e1\u5de5\u958b\u59cb\u5206\u4eab\u95dc\u65bc\u502a\u4e3b\u4efb\u7684\u6545\u4e8b\u548c\u56de\u61b6\uff0c\u5c55\u73fe\u51fa\u4ed6\u4e0d\u70ba\u4eba\u77e5\u7684\u4e00\u9762\u3002",question:"\u9019\u4e9b\u56de\u61b6\u53cd\u6620\u4e86\u4ec0\u9ebc\uff1f",choices:[{text:"\u502a\u4e3b\u4efb\u7684\u5f62\u8c61\u6bd4\u8868\u9762\u66f4\u52a0\u8907\u96dc\u3002",feedback:"\u54e1\u5de5\u5011\u7684\u56de\u61b6\u4e0d\u50c5\u63cf\u7e6a\u4e86\u4ed6\u90a3\u9ad8\u6548\u51b7\u5cfb\u7684\u4e00\u9762\uff0c\u66f4\u900f\u9732\u51fa\u4ed6\u96b1\u85cf\u5728\u56b4\u82db\u7ba1\u7406\u4e4b\u4e0b\u7684\u67d4\u60c5\u8207\u77db\u76fe\u3002\u6b63\u5982\u5c0f\u8aaa\u6240\u63cf\u8ff0\uff0c\u300c\u4ed6\u65e2\u662f\u9ad8\u6548\u7387\u7684\u57f7\u884c\u8005\uff0c\u4e5f\u662f\u9ed8\u9ed8\u652f\u6490\u516c\u53f8\u904b\u4f5c\u7684\u91cd\u8981\u652f\u67f1\u300d\uff0c\u9019\u8aaa\u660e\u4ed6\u7684\u5f62\u8c61\u9060\u975e\u55ae\u4e00\uff0c\u800c\u662f\u5145\u6eff\u591a\u91cd\u9762\u5411\u8207\u5167\u5fc3\u6399\u624e\u3002",hint:"\u5728\u8077\u5834\u4e2d\uff0c\u4e00\u500b\u4eba\u7684\u771f\u5be6\u5f62\u8c61\u5f80\u5f80\u9700\u8981\u901a\u904e\u4e0d\u540c\u89d2\u5ea6\u7684\u89c0\u5bdf\u624d\u80fd\u5b8c\u6574\u5448\u73fe\u3002"},{text:"\u4eba\u5011\u5f80\u5f80\u5728\u5931\u53bb\u5f8c\u624d\u61c2\u5f97\u73cd\u60dc\u3002",feedback:"\u4f60\u89f8\u53ca\u4e86\u4eba\u6027\u7684\u666e\u904d\u771f\u8ae6\u2014\u2014\u53ea\u6709\u5728\u5931\u53bb\u5f8c\uff0c\u624d\u80fd\u771f\u6b63\u9ad4\u6703\u5230\u4e00\u500b\u4eba\u7684\u50f9\u503c\u3002\u6b63\u5982\u7dec\u61f7\u6703\u4e0a\u7684\u4f4e\u8abf\u5206\u4eab\u6240\u986f\u793a\uff0c\u502a\u4e3b\u4efb\u96d6\u6709\u56b4\u82db\u7684\u7ba1\u7406\u65b9\u5f0f\uff0c\u4f46\u5176\u5c0d\u516c\u53f8\u904b\u4f5c\u7684\u91cd\u8981\u6027\uff0c\u5728\u4ed6\u6d88\u5931\u4e4b\u5f8c\u6108\u767c\u51f8\u986f\uff0c\u4ee4\u4eba\u611f\u53d7\u5230\u6df1\u6df1\u7684\u5f8c\u77e5\u5f8c\u89ba\u3002",hint:"\u9019\u7a2e\u5f8c\u77e5\u5f8c\u89ba\u7684\u611f\u6168\uff0c\u6216\u8a31\u6b63\u662f\u4eba\u6027\u7684\u6c38\u6046\u4e3b\u984c\u4e4b\u4e00\u3002\u6b63\u5982\u5c0f\u8aaa\u4e2d\u90a3\u53e5\u300c\u6c92\u6709\u4ed6\uff0c\u5f88\u591a\u8de8\u90e8\u9580\u7684\u5354\u4f5c\u90fd\u4e82\u6210\u4e86\u4e00\u5718\u300d"},{text:"\u9019\u4e9b\u56de\u61b6\u53ef\u80fd\u7d93\u904e\u7f8e\u5316\u3002",feedback:"\u4f60\u4fdd\u6301\u4e86\u7406\u6027\u7684\u61f7\u7591\u614b\u5ea6\uff0c\u8a8d\u70ba\u5728\u60c5\u611f\u7684\u6e32\u67d3\u4e0b\uff0c\u56de\u61b6\u5f88\u53ef\u80fd\u88ab\u904e\u5ea6\u7f8e\u5316\u3002\u6b63\u5982\u5c0f\u8aaa\u4e2d\u54e1\u5de5\u6240\u8ff0\uff1a\u300c\u6709\u4eba\u5206\u4eab\u4e86\u4ed6\u5c0d\u502a\u4e3b\u4efb\u7684\u656c\u4f69\uff0c\u4e5f\u6709\u4eba\u9078\u64c7\u8ff4\u907f\u8ac7\u53ca\u4ed6\u7684\u79c1\u751f\u6d3b\u300d\uff0c\u9019\u4f7f\u5f97\u6211\u5011\u4e0d\u5f97\u4e0d\u61f7\u7591\uff1a\u90a3\u4e9b\u7f8e\u597d\u7684\u56de\u61b6\u662f\u5426\u53ea\u662f\u60c5\u611f\u904e\u6ffe\u5f8c\u7684\u7522\u7269\uff0c\u800c\u771f\u5be6\u7684\u4ed6\u53c8\u96b1\u85cf\u4e86\u591a\u5c11\u672a\u66fe\u63ed\u9732\u7684\u79d8\u5bc6\uff1f",hint:"\u4f46\u5373\u4f7f\u662f\u7d93\u904e\u7f8e\u5316\u7684\u56de\u61b6\uff0c\u4e5f\u53ef\u80fd\u53cd\u6620\u51fa\u67d0\u4e9b\u771f\u5be6\uff0c\u4ed4\u7d30\u7504\u5225\u60c5\u611f\u8207\u4e8b\u5be6\u7684\u754c\u9650\uff0c\u6216\u8a31\u80fd\u770b\u5230\u66f4\u5b8c\u6574\u7684\u756b\u9762\u3002"}]},{context:"\u65b0\u7684\u7d00\u5f8b\u8abf\u67e5\u54e1\u674e\u5065\u54f2\u51fa\u73fe\u4e86\uff0c\u4ed6\u770b\u4f3c\u6eab\u548c\uff0c\u537b\u5728\u8ac7\u8a71\u4e2d\u63d0\u5230\u4e86\u516c\u53f8\u5167\u90e8\u67d0\u7b46\u4e0d\u660e\u91d1\u6d41\u7684\u4e8b\u60c5\u3002",question:"\u674e\u5065\u54f2\u7684\u51fa\u73fe\u610f\u5473\u8457\u4ec0\u9ebc\uff1f",choices:[{text:"\u9019\u662f\u4e00\u500b\u65b0\u7684\u5a01\u8105\u3002",feedback:"\u4f60\u654f\u92b3\u5730\u5bdf\u89ba\u5230\u4e86\u5371\u96aa\u7684\u4fe1\u865f\uff0c\u674e\u5065\u54f2\u7684\u51fa\u73fe\u53ef\u80fd\u6697\u85cf\u8457\u5371\u96aa\u3002\u96d6\u7136\u4ed6\u7684\u614b\u5ea6\u8868\u9762\u6eab\u548c\uff0c\u4f46\u4ed6\u63d0\u53ca\u90a3\u7b46\u4e0d\u660e\u91d1\u6d41\u7684\u8a71\u8a9e\u4e2d\uff0c\u900f\u9732\u51fa\u4e00\u7a2e\u6697\u85cf\u7684\u51b0\u51b7\u8207\u6311\u91c1\uff0c\u6b63\u5982\u5c0f\u8aaa\u4e2d\u63cf\u8ff0\u7684\u300c\u9ad8\u5c64\u614b\u5ea6\u51b7\u6de1\u4e14\u8a6d\u8b4e\u300d\uff0c\u9019\u7121\u7591\u70ba\u6574\u500b\u5c40\u52e2\u589e\u6dfb\u4e86\u66f4\u6df1\u7684\u4e0d\u5b89\u8207\u96b1\u60a3\u3002",hint:"\u5728\u8077\u5834\u4e2d\uff0c\u6700\u5371\u96aa\u7684\u5f80\u5f80\u4e0d\u662f\u660e\u986f\u7684\u6575\u4eba\uff0c\u800c\u662f\u770b\u4f3c\u53cb\u5584\u7684\u5c0d\u624b\u3002"},{text:"\u9019\u53ef\u80fd\u662f\u4e00\u500b\u7a81\u7834\u53e3\u3002",feedback:"\u4f60\u9078\u64c7\u5f9e\u7a4d\u6975\u7684\u89d2\u5ea6\u770b\u5f85\u674e\u5065\u54f2\u7684\u51fa\u73fe\uff0c\u8a8d\u70ba\u4ed6\u63d0\u4f9b\u7684\u8a0a\u606f\u6216\u8a31\u80fd\u6253\u958b\u8abf\u67e5\u7684\u65b0\u5c40\u9762\u3002\u6b63\u5982\u5c0f\u8aaa\u4e2d\u6240\u6697\u793a\uff0c\u300c\u674e\u5065\u54f2\u770b\u4f3c\u6eab\u548c\u537b\u773c\u795e\u92b3\u5229\u300d\uff0c\u9019\u610f\u5473\u8457\u4ed6\u53ef\u80fd\u6b63\u5229\u7528\u81ea\u5df1\u7684\u4f4d\u7f6e\uff0c\u63ed\u9732\u51fa\u90a3\u4e9b\u88ab\u6545\u610f\u96b1\u85cf\u7684\u771f\u76f8\uff0c\u7d66\u5f35\u8861\u5e36\u4f86\u65b0\u7684\u555f\u793a\u3002",hint:"\u4f46\u8981\u5c0f\u5fc3\uff0c\u6709\u6642\u5019\u770b\u4f3c\u7684\u6a5f\u6703\u53ef\u80fd\u662f\u7cbe\u5fc3\u8a2d\u8a08\u7684\u9677\u9631\u3002"},{text:"\u4fdd\u6301\u89c0\u671b\uff0c\u5148\u4e0d\u505a\u5224\u65b7\u3002",feedback:"\u4f60\u63a1\u53d6\u4e86\u4e00\u500b\u8b39\u614e\u7684\u614b\u5ea6\uff0c\u5728\u4e0d\u78ba\u5b9a\u7684\u60c5\u6cc1\u4e0b\uff0c\u89c0\u5bdf\u53ef\u80fd\u662f\u6700\u597d\u7684\u9078\u64c7\u3002\u300c\u5728\u9019\u6a23\u7684\u74b0\u5883\u4e2d\uff0c\u8ab0\u624d\u662f\u771f\u6b63\u53ef\u4ee5\u4fe1\u4efb\u7684\u4eba\uff1f\u300d\u4fdd\u6301\u6c89\u9ed8\u8207\u89c0\u5bdf\uff0c\u6216\u8a31\u80fd\u8b93\u4f60\u5728\u6536\u96c6\u5230\u66f4\u591a\u8b49\u64da\u5f8c\uff0c\u518d\u4f5c\u51fa\u66f4\u6e96\u78ba\u7684\u5224\u65b7\u3002",hint:"\u5728\u8907\u96dc\u7684\u5c40\u52e2\u4e2d\uff0c\u904e\u65e9\u4e0b\u5b9a\u8ad6\u5f80\u5f80\u662f\u5371\u96aa\u7684\u3002"}]},{context:'\u674e\u5065\u54f2\u63d0\u9192\u5f35\u8861\uff1a"\u67d0\u4e9b\u8a0a\u606f\u53ef\u80fd\u4e26\u4e0d\u771f\u5be6"\uff0c\u9019\u756a\u8a71\u8b93\u5f35\u8861\u611f\u53d7\u5230\u6f5b\u85cf\u7684\u58d3\u529b\u3002',question:"\u9019\u500b\u63d0\u9192\u61c9\u8a72\u5982\u4f55\u7406\u89e3\uff1f",choices:[{text:"\u9019\u662f\u4e00\u500b\u5584\u610f\u7684\u8b66\u544a\u3002",feedback:"\u4f60\u9078\u64c7\u76f8\u4fe1\u9019\u53ef\u80fd\u662f\u51fa\u65bc\u5584\u610f\u7684\u63d0\u9192\uff0c\u8a66\u5716\u544a\u77e5\u5f35\u8861\u5728\u9019\u5145\u6eff\u6b0a\u8b00\u8207\u865b\u5be6\u4ea4\u7e54\u7684\u74b0\u5883\u4e2d\uff0c\u5fc5\u9808\u66f4\u52a0\u8b39\u614e\u5730\u7504\u5225\u8a0a\u606f\u7684\u771f\u507d\u3002\u6b63\u5982\u5c0f\u8aaa\u4e2d\u6240\u6697\u793a\uff0c\u300c\u6709\u4e9b\u8a0a\u606f\u53ef\u80fd\u4e26\u4e0d\u771f\u5be6\u300d\uff0c\u9019\u63d0\u9192\u6211\u5011\u8981\u4fdd\u6301\u61f7\u7591\uff0c\u9632\u6b62\u88ab\u8868\u9762\u7684\u5e73\u975c\u8ff7\u60d1\u3002",hint:"\u4f46\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u5584\u610f\u672c\u8eab\u4e5f\u53ef\u80fd\u5e36\u6709\u5176\u4ed6\u76ee\u7684\u3002"},{text:"\u9019\u662f\u4e00\u500b\u96b1\u6666\u7684\u5a01\u8105\u3002",feedback:"\u4f60\u8a8d\u8b58\u5230\u4e86\u8a71\u8a9e\u80cc\u5f8c\u7684\u5a01\u8105\u542b\u7fa9\uff0c\u674e\u5065\u54f2\u7528\u8f15\u63cf\u6de1\u5beb\u7684\u8a9e\u6c23\uff0c\u537b\u6697\u85cf\u6bba\u6a5f\uff0c\u9019\u7a2e\u59d4\u5a49\u7684\u8868\u9054\u65b9\u5f0f\u5f80\u5f80\u66f4\u5177\u6bba\u50b7\u529b\u3002",hint:"\u5728\u8077\u5834\u4e2d\uff0c\u5a01\u8105\u5f80\u5f80\u4ee5\u5efa\u8b70\u7684\u5f62\u5f0f\u51fa\u73fe\u3002"},{text:"\u9019\u6697\u793a\u8457\u66f4\u5927\u7684\u9670\u8b00\u3002",feedback:"\u4f60\u8a66\u5716\u5f9e\u66f4\u5b8f\u89c0\u7684\u89d2\u5ea6\u89e3\u8b80\u9019\u53e5\u8a71\uff0c\u8a8d\u70ba\u9019\u4e0d\u50c5\u50c5\u662f\u4e00\u500b\u8b66\u544a\uff0c\u800c\u662f\u6697\u793a\u8457\u6574\u500b\u4e8b\u4ef6\u80cc\u5f8c\u53ef\u80fd\u727d\u626f\u5230\u66f4\u8907\u96dc\u3001\u66f4\u6df1\u5c64\u7684\u9670\u8b00\u3002\u6b63\u5982\u5c0f\u8aaa\u4e2d\u4e0d\u65b7\u6d6e\u73fe\u7684\u7591\u96f2\uff0c\u300c\u771f\u76f8\u4e26\u975e\u55ae\u4e00\u7684\u5b58\u5728\u300d\uff0c\u9019\u7c21\u55ae\u7684\u4e00\u53e5\u8a71\u53ef\u80fd\u6b63\u662f\u6574\u500b\u5c40\u52e2\u7684\u51b0\u5c71\u4e00\u89d2\uff0c\u8b93\u4eba\u4e0d\u5f97\u4e0d\u91cd\u65b0\u5be9\u8996\u6240\u7372\u5f97\u7684\u6240\u6709\u8cc7\u8a0a\u3002",hint:"\u6709\u6642\u5019\uff0c\u4e00\u500b\u7c21\u55ae\u7684\u63d0\u9192\u80cc\u5f8c\uff0c\u53ef\u80fd\u96b1\u85cf\u8457\u6574\u500b\u4e8b\u4ef6\u7684\u95dc\u9375\u3002"}]}],philosophicalReflection:{title:"\u8a18\u61b6\u8207\u771f\u5be6",content:"\u5728\u7dec\u61f7\u6703\u4e0a\uff0c\u6bcf\u500b\u4eba\u90fd\u6709\u81ea\u5df1\u5c0d\u502a\u4e3b\u4efb\u7684\u8a18\u61b6\u548c\u7406\u89e3\uff0c\u9019\u4e9b\u8a18\u61b6\u65e2\u6709\u6eab\u60c5\u7684\u60bc\u5ff5\uff0c\u4e5f\u96b1\u85cf\u8457\u96e3\u4ee5\u8a00\u55bb\u7684\u77db\u76fe\u8207\u7591\u60d1\u3002\n      \u7576\u8b66\u65b9\u5169\u500b\u591a\u6708\u7121\u6cd5\u627e\u5230\u502a\u4e3b\u4efb\uff0c\u516c\u53f8\u7684\u5167\u90e8\u8abf\u67e5\u53c8\u4ee5\u66e0\u8077\u65b9\u5f0f\u8349\u8349\u7d50\u6848\uff0c\u9ad8\u5c64\u51b7\u6de1\u4e14\u8a6d\u8b4e\u7684\u614b\u5ea6\u4e2d\uff0c\u537b\u4f9d\u7136\u8209\u8fa6\u4e86\u4e00\u5834\u4f4e\u8abf\u800c\u5c0f\u5de7\u7684\u7dec\u61f7\u6703\u3002\u9019\u4e9b\u60c5\u7bc0\u6b63\u5982\u539f\u6587\u6240\u8ff0\uff0c\u8b93\u4eba\u611f\u53d7\u5230\u4e00\u7a2e\u6df1\u6c89\u7684\u7121\u5948\u8207\u8ff7\u832b\u3002\n      \n      \u674e\u5065\u54f2\u4e00\u53e5\u300c\u67d0\u4e9b\u8a0a\u606f\u53ef\u80fd\u4e26\u4e0d\u771f\u5be6\u300d\u7684\u8f15\u63cf\u6de1\u5beb\uff0c\u66f4\u8b93\u6211\u5011\u601d\u7d22\uff1a\u6211\u5011\u6240\u8a8d\u77e5\u7684\u73fe\u5be6\uff0c\u662f\u5426\u53ea\u662f\u4e00\u5c64\u88ab\u7cbe\u5fc3\u7de8\u7e54\u7684\u5e7b\u8c61\uff1f\u5728\u9019\u4e0d\u78ba\u5b9a\u7684\u4e16\u754c\u4e2d\uff0c\u56de\u61b6\u8207\u771f\u5be6\u3001\u8868\u8c61\u8207\u5167\u6db5\u5f80\u5f80\u96e3\u4ee5\u5340\u5206\uff0c\u5c31\u50cf\u502a\u4e3b\u4efb\u90a3\u5145\u6eff\u8b0e\u5718\u7684\u8eab\u5f71\u4e00\u6a23\uff0c\u7e3d\u5728\u6211\u5011\u4e0d\u7d93\u610f\u9593\u96b1\u85cf\u8457\u66f4\u591a\u672a\u89e3\u4e4b\u8b0e\u3002\n      \n      \u6216\u8a31\uff0c\u6b63\u5982\u7b46\u8a18\u4e2d\u6240\u8a00\uff0c\u300c\u4eba\u7e3d\u8981\u9078\u64c7\u9069\u7576\u7684\u6642\u6a5f\u8207\u65b9\u5f0f\u300d\uff0c\u627f\u8a8d\u90a3\u771f\u5be6\u8207\u865b\u5e7b\u4e4b\u9593\u7684\u6a21\u7cca\uff0c\u6b63\u662f\u6211\u5011\u7406\u89e3\u4e16\u754c\u8207\u81ea\u6211\u5c40\u9650\u7684\u7b2c\u4e00\u6b65\u3002\u5728\u9019\u689d\u63a2\u7d22\u771f\u76f8\u7684\u8def\u4e0a\uff0c\u6bcf\u4e00\u500b\u9078\u64c7\u3001\u6bcf\u4e00\u6bb5\u8a18\u61b6\uff0c\u90fd\u5728\u63d0\u9192\u6211\u5011\uff1a\u552f\u6709\u6df1\u523b\u53cd\u601d\uff0c\u624d\u80fd\u9010\u6b65\u63a5\u8fd1\u90a3\u591a\u91cd\u9762\u5411\u7684\u771f\u76f8\u3002"}}},Nn=nn.div`
  margin: 40px 0;
  padding: 30px;
  background: ${rn.secondary}dd;
  border-radius: 12px;
  position: relative;
  animation: ${on} 0.5s ease-out;
  box-shadow: ${dn};
  ${un}
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 20px;
    width: 20px;
    height: 20px;
    background: ${rn.secondary}dd;
    transform: rotate(45deg);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 20px;
    right: -10px;
    width: 100px;
    height: 100px;
    border: 1px solid ${rn.accent}33;
    border-radius: 50%;
    transform: rotate(-45deg);
  }

  @media (max-width: ${e=>{var t;return(null===(t=e.theme.breakpoints)||void 0===t?void 0:t.mobile)||"320px"}}) {
    padding: 20px;
    margin: 20px 0;
  }
`,On=nn.div`
  font-size: 1.3em;
  margin-bottom: 25px;
  color: ${rn.text.accent};
  position: relative;
  padding-left: 20px;
  font-family: ${pn.secondary};
  text-shadow: ${cn};
  ${sn}

  &::before {
    content: '?';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.8em;
    opacity: 0.5;
    color: ${rn.gold};
  }

  @media (max-width: ${e=>{var t;return(null===(t=e.theme.breakpoints)||void 0===t?void 0:t.mobile)||"320px"}}) {
    font-size: 1.1em;
    padding-left: 15px;
  }
`,$n=nn.div`
  font-style: italic;
  color: ${rn.text.secondary};
  margin-bottom: 25px;
  padding: 15px;
  border-left: 3px solid ${rn.accent};
  background: ${rn.primary}66;
  border-radius: 0 8px 8px 0;
  position: relative;
  ${un}
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    border-right: 1px solid ${rn.accent}33;
    border-top: 1px solid ${rn.accent}33;
  }

  @media (max-width: ${e=>{var t;return(null===(t=e.theme.breakpoints)||void 0===t?void 0:t.mobile)||"320px"}}) {
    padding: 10px;
    font-size: 0.9em;
  }
`,Rn=tn`
  0% { transform: translateX(0); }
  50% { transform: translateX(8px); }
  100% { transform: translateX(0); }
`,In=nn.button`
  display: block;
  width: 100%;
  padding: 18px;
  margin: 15px 0;
  background: ${rn.primary}99;
  border: 1px solid ${rn.accent}33;
  color: ${rn.text.primary};
  text-align: left;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  font-family: ${pn.primary};
  font-size: 1.1em;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  opacity: ${e=>e.disabled?"0.6":"1"};
  box-shadow: ${dn};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${rn.accent}33;
    transition: all 0.3s ease;
  }

  &:hover {
    background: ${e=>e.disabled?`${rn.primary}99`:`${rn.secondary}cc`};
    border-color: ${e=>e.disabled?`${rn.accent}33`:rn.gold};
    animation: ${e=>e.disabled?"none":Lt`${Rn} 1s infinite`};

    &::before {
      background: ${e=>e.disabled?`${rn.accent}33`:rn.gold};
    }
  }

  @media (max-width: ${e=>{var t;return(null===(t=e.theme.breakpoints)||void 0===t?void 0:t.mobile)||"320px"}}) {
    padding: 12px;
    font-size: 1em;
    margin: 10px 0;
  }
`,Dn=nn.div`
  margin-top: 30px;
  padding: 20px;
  background: ${rn.primary}99;
  border-radius: 8px;
  color: ${rn.text.secondary};
  animation: ${on} 0.5s ease-out;
  position: relative;
  border: 1px solid ${rn.accent}33;
  box-shadow: ${fn};
  ${un}

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    width: 20px;
    height: 20px;
    border-left: 1px solid ${rn.accent}33;
    border-top: 1px solid ${rn.accent}33;
  }

  @media (max-width: ${e=>{var t;return(null===(t=e.theme.breakpoints)||void 0===t?void 0:t.mobile)||"320px"}}) {
    padding: 15px;
    margin-top: 20px;
  }
`,Ln=nn.div`
  margin-top: 20px;
  padding: 15px;
  font-style: italic;
  color: ${rn.text.accent};
  border-top: 1px solid ${rn.accent}33;
  animation: ${an} 4s infinite;
  position: relative;

  &::before {
    content: '💡';
    position: absolute;
    left: -5px;
    top: -10px;
    font-size: 0.8em;
    opacity: 0.5;
  }

  @media (max-width: ${e=>{var t;return(null===(t=e.theme.breakpoints)||void 0===t?void 0:t.mobile)||"320px"}}) {
    padding: 10px;
    font-size: 0.9em;
  }
`,An=nn.button`
  margin-top: 30px;
  padding: 12px 25px;
  background: ${rn.primary}99;
  border: 1px solid ${rn.accent}33;
  color: ${rn.text.primary};
  cursor: pointer;
  font-family: ${pn.primary};
  font-size: 1.1em;
  border-radius: 6px;
  box-shadow: ${dn};
  ${un}
  width: 100%;
  text-align: left;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${rn.accent}33;
    transition: all 0.3s ease;
  }

  &:hover {
    background: ${rn.secondary}cc;
    border-color: ${rn.gold};
    animation: ${Lt`${Rn} 1s infinite`};

    &::before {
      background: ${rn.gold};
    }
  }

  @media (max-width: ${e=>{var t;return(null===(t=e.theme.breakpoints)||void 0===t?void 0:t.mobile)||"320px"}}) {
    padding: 12px;
    font-size: 1em;
  }
`;const Fn=function(e){let{question:t,context:n,choices:r,onChoice:a,feedback:o,hint:i,disabled:l,showContinue:s,onContinue:u}=e;return(0,mn.jsxs)(Nn,{children:[n&&(0,mn.jsx)($n,{children:n}),(0,mn.jsx)(On,{children:t}),r.map(((e,t)=>(0,mn.jsx)(In,{onClick:()=>!l&&a(t),disabled:l||o,children:e.text},t))),o&&(0,mn.jsxs)(Dn,{children:[o,i&&(0,mn.jsx)(Ln,{children:i})]}),s&&u&&(0,mn.jsx)(An,{onClick:u,children:"\u7e7c\u7e8c\u95b1\u8b80"})]})},Mn=nn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  max-width: 800px;
  margin: 0 auto;
`,Un=nn.h2`
  color: #fff;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`,Bn=nn.p`
  color: #ddd;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
`,Wn=nn.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #fff;
  letter-spacing: 0.5rem;
  min-width: 200px;
  text-align: center;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
`,Hn=nn.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`,Vn=nn.button`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background: ${e=>e.isSelected?"#4ECDC4":"rgba(255, 255, 255, 0.1)"};
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);

  &:hover {
    transform: scale(1.1);
    background: ${e=>e.isSelected?"#4ECDC4":"rgba(255, 255, 255, 0.2)"};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`,qn=nn.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`,Kn=nn.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  background: ${e=>"clear"===e.variant?"rgba(255, 255, 255, 0.1)":"#4ECDC4"};
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`,Yn=nn.div`
  color: #fff;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`,Qn=e=>{let{onComplete:n}=e;const[r]=(0,t.useState)("316"),[a,o]=(0,t.useState)([]),[i,l]=(0,t.useState)(""),[s,u]=(0,t.useState)(!1),[c,d]=(0,t.useState)(!1);return(0,mn.jsxs)(Mn,{children:[(0,mn.jsx)(Un,{children:"\u5bc6\u78bc\u904a\u6232"}),(0,mn.jsx)(Bn,{children:"\u8acb\u8f38\u5165\u6b63\u78ba\u76843\u4f4d\u6578\u5bc6\u78bc\u3002 \u6bcf\u500b\u6578\u5b57\u53ea\u80fd\u4f7f\u7528\u4e00\u6b21\u3002"}),(0,mn.jsx)(Wn,{children:Array(3).fill("").map(((e,t)=>(0,mn.jsx)("span",{children:a[t]||"_"},t)))}),(0,mn.jsx)(Hn,{children:[1,2,3,4,5,6,7,8,9].map((e=>(0,mn.jsx)(Vn,{onClick:()=>(e=>{if(a.length>=3||c)return;const t=[...a,e];o(t),3===t.length&&(t.join("")===r?(l("\u5bc6\u78bc\u6b63\u78ba\uff01"),u(!0),d(!0),setTimeout((()=>{n()}),2e3)):(l("\u5bc6\u78bc\u932f\u8aa4\uff0c\u8acb\u91cd\u8a66"),u(!0),setTimeout((()=>{o([]),u(!1)}),1500)))})(e),isSelected:a.includes(e),children:e},e)))}),(0,mn.jsxs)(qn,{children:[(0,mn.jsx)(Kn,{onClick:()=>{o([]),u(!1)},variant:"clear",children:"\u6e05\u9664"}),(0,mn.jsx)(Kn,{onClick:()=>{a.length>0&&(o((e=>e.slice(0,-1))),u(!1))},variant:"clear",children:"\u522a\u9664"})]}),(0,mn.jsx)(Yn,{className:s?"show":"",children:i})]})},Xn=tn`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`,Gn=tn`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,Jn=nn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
  animation: ${Xn} 0.5s ease-out;
`,Zn=nn.h2`
  color: #ffffff;
  margin-bottom: 1rem;
  font-size: 2rem;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,er=nn.p`
  color: #ffffff;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-size: 1.1rem;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`,tr=nn.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  margin-bottom: 2rem;
`,nr=nn.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,rr=nn.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,ar=nn.h3`
  color: #ffffff;
  font-size: 1.2rem;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`,or=nn.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`,ir=nn.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #ffffff;
  text-align: center;
  font-size: 0.9rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
  
  &.selected {
    background: rgba(46, 204, 113, 0.3);
    border: 2px solid #2ecc71;
  }
`,lr=nn.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1rem;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,sr=nn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  min-height: 200px;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
`,ur=nn.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  button {
    background: none;
    border: none;
    color: #e74c3c;
    cursor: pointer;
    padding: 0;
    font-size: 1.2rem;
    
    &:hover {
      color: #c0392b;
    }
  }
`,cr=nn.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,dr=nn.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: white;
  background: ${e=>"clear"===e.variant?"#e74c3c":"#3498db"};
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    background: #95a5a6;
    cursor: not-allowed;
    transform: none;
  }
`,fr=nn.div`
  margin-top: 1rem;
  padding: 2rem;
  border-radius: 10px;
  background: rgba(46, 204, 113, 0.2);
  color: white;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.8;
  opacity: ${e=>e.show?1:0};
  transition: opacity 0.3s ease;
  animation: ${e=>e.show?Gn:"none"} 0.5s ease-in-out;
  cursor: pointer;
  border: 2px solid #2ecc71;
  
  &:hover {
    background: rgba(46, 204, 113, 0.3);
  }
`,pr=nn.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  font-size: 1.8rem;
  font-weight: bold;
  color: #2ecc71;
  text-shadow: 0 0 10px rgba(46, 204, 113, 0.5);
  animation: ${Gn} 2s infinite;
`,hr=e=>{let{onComplete:n}=e;const[r,a]=(0,t.useState)([]),[o,i]=(0,t.useState)(!1),[l,s]=(0,t.useState)(""),u={emotions:[{id:"e1",text:"\u61a4\u6012",category:"emotions"},{id:"e2",text:"\u60b2\u50b7",category:"emotions"},{id:"e3",text:"\u7126\u616e",category:"emotions"},{id:"e4",text:"\u6050\u61fc",category:"emotions"}],thoughts:[{id:"t1",text:"\u70ba\u4ec0\u9ebc\u662f\u6211\uff1f",category:"thoughts"},{id:"t2",text:"\u6211\u4e0d\u503c\u5f97",category:"thoughts"},{id:"t3",text:"\u60f3\u8981\u6d88\u5931",category:"thoughts"},{id:"t4",text:"\u6c92\u6709\u4eba\u7406\u89e3",category:"thoughts"}],responses:[{id:"r1",text:"\u52c7\u6562\u9762\u5c0d",category:"responses"},{id:"r2",text:"\u5c0b\u6c42\u5e6b\u52a9",category:"responses"},{id:"r3",text:"\u81ea\u6211\u4fdd\u8b77",category:"responses"},{id:"r4",text:"\u4fdd\u6301\u5e0c\u671b",category:"responses"}]},c=e=>{r.length>=6||a((t=>[...t,e]))};return(0,mn.jsxs)(Jn,{children:[(0,mn.jsx)(Zn,{children:"\u533f\u540d\u4fe1\u7684\u771f\u8ae6"}),(0,mn.jsx)(er,{children:"\u9078\u64c7\u4e0d\u540c\u7684\u60c5\u611f\u5143\u7d20\u4f86\u8868\u9054\u4f60\u5c0d\u533f\u540d\u4fe1\u7684\u60f3\u6cd5\u3002 \u4f60\u53ef\u4ee5\u9078\u64c7\u60c5\u7dd2\u3001\u60f3\u6cd5\u548c\u61c9\u5c0d\u65b9\u5f0f\u4f86\u7d44\u5408\u3002 \u81f3\u5c11\u9700\u8981\u9078\u64c73\u500b\u5143\u7d20\u624d\u80fd\u5b8c\u6210\u5275\u4f5c\u3002"}),(0,mn.jsxs)(tr,{children:[(0,mn.jsxs)(nr,{children:[(0,mn.jsxs)(rr,{children:[(0,mn.jsx)(ar,{children:"\u60c5\u7dd2"}),(0,mn.jsx)(or,{children:u.emotions.map((e=>(0,mn.jsx)(ir,{onClick:()=>c(e),className:r.some((t=>t.id===e.id))?"selected":"",children:e.text},e.id)))})]}),(0,mn.jsxs)(rr,{children:[(0,mn.jsx)(ar,{children:"\u60f3\u6cd5"}),(0,mn.jsx)(or,{children:u.thoughts.map((e=>(0,mn.jsx)(ir,{onClick:()=>c(e),className:r.some((t=>t.id===e.id))?"selected":"",children:e.text},e.id)))})]}),(0,mn.jsxs)(rr,{children:[(0,mn.jsx)(ar,{children:"\u61c9\u5c0d\u65b9\u5f0f"}),(0,mn.jsx)(or,{children:u.responses.map((e=>(0,mn.jsx)(ir,{onClick:()=>c(e),className:r.some((t=>t.id===e.id))?"selected":"",children:e.text},e.id)))})]})]}),(0,mn.jsxs)(lr,{children:[(0,mn.jsx)(sr,{children:r.map((e=>(0,mn.jsxs)(ur,{children:[e.text,(0,mn.jsx)("button",{onClick:()=>{return t=e.id,void a((e=>e.filter((e=>e.id!==t))));var t},children:"\xd7"})]},e.id)))}),(0,mn.jsxs)(cr,{children:[(0,mn.jsx)(dr,{variant:"clear",onClick:()=>{a([]),i(!1)},children:"\u6e05\u9664\u9078\u64c7"}),(0,mn.jsx)(dr,{onClick:()=>{if(r.length<3)return;const e=r.filter((e=>"emotions"===e.category)).map((e=>e.text)),t=r.filter((e=>"thoughts"===e.category)).map((e=>e.text)),n=r.filter((e=>"responses"===e.category)).map((e=>e.text));let a="\u4f60\u7684\u9078\u64c7\u63ed\u793a\u4e86\u5167\u5fc3\u6df1\u8655\u7684\u6399\u624e\uff1a\n\n";e.length>0&&(a+=`\u9762\u5c0d\u9019\u4e9b\u60c5\u6cc1\uff0c\u4f60\u611f\u53d7\u5230${e.join("\u3001")}\u3002\n\n`),t.length>0&&(a+=`\u5167\u5fc3\u5145\u6eff\u4e86${t.join("\u3001")}\u7684\u56f0\u60d1\u3002\n\n`),n.length>0&&(a+=`\u4f46\u4f60\u9078\u64c7\u4e86${n.join("\u3001")}\uff0c\u9019\u5c55\u73fe\u4e86\u4f60\u7684\u52c7\u6c23\u3002\n\n`),s(a),i(!0)},disabled:r.length<3,children:"\u5b8c\u6210\u5275\u4f5c"})]})]})]}),(0,mn.jsxs)(fr,{show:o,onClick:()=>{n()},children:[l,o&&(0,mn.jsx)(pr,{children:"\u9ede\u64ca\u9019\u88e1\u7e7c\u7e8c..."})]})]})},mr=nn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  max-width: 800px;
  margin: 0 auto;
`,gr=nn.h2`
  color: #fff;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`,br=nn.p`
  color: #ddd;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
`,vr=nn.div`
  position: relative;
  width: 100%;
  height: 400px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 2rem;
`,yr=nn.div`
  position: absolute;
  width: 60px;
  height: 80px;
  background: ${e=>e.color};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);

  &:hover {
    transform: scale(1.1);
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 20px;
    background: rgba(255, 255, 255, 0.5);
  }
`,xr=nn.div`
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  padding: 0.5rem;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${yr}:hover & {
    opacity: 1;
  }
`,kr=nn.div`
  width: 100%;
  height: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  margin-bottom: 1rem;
  overflow: hidden;
`,wr=nn.div`
  width: ${e=>e.progress/6*100}%;
  height: 100%;
  background: #4ECDC4;
  transition: width 0.3s ease;
`,Sr=nn.div`
  color: #fff;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`,Cr=e=>{let{onComplete:n}=e;const[r,a]=(0,t.useState)([]),[o,i]=(0,t.useState)(0),[l,s]=(0,t.useState)(""),[u,c]=(0,t.useState)(!1),[d,f]=(0,t.useState)(!1),[p,h]=(0,t.useState)(0),m=["\u61f7\u5ff5","\u6c38\u5782\u4e0d\u673d","\u5e0c\u671b\u4f60\u904e\u7684\u5f88\u597d","\u4e00\u8def\u597d\u8d70","\u518d\u898b\u4e86","\u96e3\u5fd8\u8207\u4f60\u5171\u8655\u7684\u6642\u5149","\u60f3\u5ff5","\u6c38\u9060\u7684\u611b","\u96e3\u5fd8\u7684\u56de\u61b6","\u795d\u798f","\u6c38\u9060\u7684\u7d00\u5ff5","\u61f7\u5ff5","\u6c38\u6046\u7684\u601d\u5ff5","\u67d4\u60c5\u9577\u5b58","\u7f8e\u597d\u7684\u8a18\u61b6","\u5fc3\u6696\u5e38\u5728","\u6c38\u6046\u7684\u61f7\u5ff5","\u795d\u798f","\u60a8\u7d66\u6211\u6700\u5927\u7684\u6307\u5c0e","\u60f3\u5ff5","\u6211\u5011\u6709\u904e\u7f8e\u597d\u7684\u8a18\u61b6","\u6c38\u9060\u7684\u8ffd\u601d","\u61f7\u5ff5","\u6c38\u9060\u7684\u7d00\u5ff5","\u5f88\u601d\u5ff5\u60a8","\u6700\u6df1\u7684\u795d\u798f","\u7f8e\u597d\u7684\u8a18\u61b6","\u8a18\u5f97\u4e00\u8d77\u5ea6\u904e\u7684\u6642\u5149","\u61f7\u5ff5\u60a8\u7684\u56b4\u8b39","\u795d\u798f","\u7121\u76e1\u7684\u601d\u5ff5"],g=["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FFEEAD","#D4A5A5","#9B59B6","#3498DB","#E74C3C","#2ECC71","#F1C40F","#1ABC9C","#E67E22","#16A085","#D35400","#27AE60","#8E44AD","#2980B9","#C0392B","#F39C12","#1ABC9C","#2ECC71","#3498DB","#9B59B6","#34495E","#16A085","#27AE60","#2980B9","#8E44AD","#2C3E50"];(0,t.useEffect)((()=>{if(d)return;const e=setInterval((()=>{if(p>=30)return;const e=Math.random()*(window.innerWidth-100),t=300*Math.random(),n=g[p],r=m[p];a((a=>[...a,{id:Date.now(),x:e,y:t,color:n,phrase:r}])),h((e=>e+1))}),800);return()=>clearInterval(e)}),[p,d]);return(0,mn.jsxs)(mr,{children:[(0,mn.jsx)(gr,{children:"\u6c23\u7403\u904a\u6232"}),(0,mn.jsx)(br,{children:"\u9ede\u64ca\u6c23\u7403\uff0c\u63ed\u958b\u96b1\u85cf\u7684\u7d00\u5ff5\u6587\u5b57\u3002 \u7576\u4f60\u9ede\u78346\u500b\u6c23\u7403\u6642\uff0c\u904a\u6232\u5c31\u6703\u5b8c\u6210\u3002"}),(0,mn.jsx)(kr,{children:(0,mn.jsx)(wr,{progress:o})}),(0,mn.jsx)(vr,{children:r.map((e=>(0,mn.jsx)(yr,{color:e.color,style:{left:e.x,top:e.y},onClick:()=>{return t=e.id,void(d||(a((e=>e.filter((e=>e.id!==t)))),i((e=>e+1)),o+1===6&&(s("\u4f60\u5df2\u7d93\u9ede\u7834\u4e86\u8db3\u5920\u7684\u6c23\u7403\uff01"),c(!0),f(!0),setTimeout((()=>{n()}),2e3))));var t},children:(0,mn.jsx)(xr,{children:e.phrase})},e.id)))}),(0,mn.jsx)(Sr,{className:u?"show":"",children:l})]})},Er=tn`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`,_r=tn`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,Pr=nn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
  animation: ${Er} 0.5s ease-out;
`,Tr=nn.h2`
  color: #ffffff;
  margin-bottom: 1rem;
  font-size: 2rem;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,jr=nn.p`
  color: #ffffff;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-size: 1.1rem;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`,zr=nn.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  perspective: 1000px;
`,Nr=nn.div`
  width: 120px;
  height: 120px;
  position: relative;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${e=>e.flipped?"rotateY(180deg)":"none"};
  
  &:hover {
    animation: ${_r} 0.5s ease-in-out;
  }
`,Or=nn.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ecf0f1;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 2rem;
  color: #2c3e50;
  transition: all 0.3s ease;
  
  &:hover {
    background: #bdc3c7;
  }
`,$r=nn.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.color||"#3498db"};
  border-radius: 15px;
  transform: rotateY(180deg);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
`,Rr=nn.div`
  width: 100%;
  height: 10px;
  background: #ecf0f1;
  border-radius: 5px;
  margin: 1rem 0;
  overflow: hidden;
`,Ir=nn.div`
  width: ${e=>e.progress/3*100}%;
  height: 100%;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  transition: width 0.3s ease;
`,Dr=nn.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: white;
  background: linear-gradient(135deg, #3498db, #2ecc71);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
    transform: none;
  }
`,Lr=nn.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  background: ${e=>e.success?"#2ecc71":"#e74c3c"};
  color: white;
  text-align: center;
  opacity: ${e=>e.show?1:0};
  transition: opacity 0.3s ease;
`,Ar=e=>{let{onComplete:n}=e;const[r,a]=(0,t.useState)([]),[o,i]=(0,t.useState)([]),[l,s]=(0,t.useState)([]),[u,c]=(0,t.useState)(!1),[d,f]=(0,t.useState)(!1),[p,h]=(0,t.useState)(""),[m,g]=(0,t.useState)(!1),[b,v]=(0,t.useState)(!1),[y,x]=(0,t.useState)(30),k=(0,t.useRef)(null),w=[{id:1,name:"circle",color:"#e74c3c"},{id:2,name:"square",color:"#3498db"},{id:3,name:"triangle",color:"#2ecc71"},{id:4,name:"star",color:"#f1c40f"},{id:5,name:"heart",color:"#e84393"},{id:6,name:"diamond",color:"#9b59b6"}];(0,t.useEffect)((()=>{S()}),[]),(0,t.useEffect)((()=>(b&&y>0?k.current=setInterval((()=>{x((e=>e-1))}),1e3):0===y&&E(),()=>clearInterval(k.current))),[b,y]);const S=()=>{const e=[...w].sort((()=>Math.random()-.5)).slice(0,3),t=[...e,...e].sort((()=>Math.random()-.5)).map(((e,t)=>({...e,id:t+1})));a(t),i([]),s([]),c(!1),f(!1),v(!1),x(30)},C=e=>{e.length===r.length&&(c(!0),v(!1),f(!0),h("\u606d\u559c\u4f60\u5b8c\u6210\u4e86\u8a18\u61b6\u904a\u6232\uff01"),g(!0),setTimeout((()=>{n()}),2e3))},E=()=>{v(!1),f(!0),h("\u6642\u9593\u5230\uff01\u904a\u6232\u7d50\u675f\u3002"),g(!1)};return(0,mn.jsxs)(Pr,{children:[(0,mn.jsx)(Tr,{children:"\u8a18\u61b6\u904a\u6232"}),(0,mn.jsx)(jr,{children:"\u9019\u662f\u4e00\u500b\u8003\u9a57\u8a18\u61b6\u529b\u7684\u904a\u6232\u3002\u9ede\u64ca\u5361\u7247\u7ffb\u958b\u5b83\u5011\uff0c\u627e\u51fa\u914d\u5c0d\u7684\u5716\u5f62\u3002 \u4f60\u9700\u8981\u572830\u79d2\u5167\u5b8c\u6210\u6240\u6709\u914d\u5c0d\u3002\u6bcf\u5c0d\u5716\u5f62\u90fd\u6709\u76f8\u540c\u7684\u984f\u8272\u548c\u5f62\u72c0\u3002 \u6ce8\u610f\uff1a\u4f60\u4e00\u6b21\u53ea\u80fd\u7ffb\u958b\u5169\u5f35\u5361\u7247\uff0c\u5982\u679c\u5b83\u5011\u4e0d\u5339\u914d\uff0c\u5361\u7247\u6703\u81ea\u52d5\u7ffb\u56de\u53bb\u3002"}),(0,mn.jsxs)("div",{style:{marginBottom:"1rem",color:"#ffffff",fontSize:"1.2rem",fontWeight:"bold",textShadow:"0 1px 2px rgba(0, 0, 0, 0.3)"},children:["\u5269\u9918\u6642\u9593\uff1a",y,"\u79d2"]}),(0,mn.jsx)(zr,{children:r.map((e=>(0,mn.jsxs)(Nr,{flipped:o.includes(e.id)||l.includes(e.id),onClick:()=>(e=>{if(!b||2===o.length||o.includes(e)||l.includes(e))return;const t=[...o,e];if(i(t),2===t.length){const[e,n]=t,a=r.find((t=>t.id===e)),o=r.find((e=>e.id===n));a.name===o.name?(s((t=>[...t,e,n])),i([]),C([...l,e,n])):setTimeout((()=>{i([])}),1e3)}})(e.id),children:[(0,mn.jsx)(Or,{children:"?"}),(0,mn.jsxs)($r,{color:e.color,children:["circle"===e.name&&"\u2b55","square"===e.name&&"\u2b1c","triangle"===e.name&&"\u25b2","star"===e.name&&"\u2b50","heart"===e.name&&"\u2764\ufe0f","diamond"===e.name&&"\ud83d\udc8e"]})]},e.id)))}),(0,mn.jsx)(Rr,{children:(0,mn.jsx)(Ir,{progress:l.length/2})}),(0,mn.jsxs)("div",{children:[!b&&!u&&(0,mn.jsx)(Dr,{onClick:()=>{v(!0),x(30)},children:"\u958b\u59cb\u904a\u6232"}),(0,mn.jsx)(Dr,{onClick:()=>{S()},disabled:b,children:"\u91cd\u65b0\u958b\u59cb"})]}),(0,mn.jsx)(Lr,{show:d,success:m,children:p})]})},Fr=tn`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Mr=nn.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  animation: ${Fr} 0.5s ease-out;
`,Ur=nn.h1`
  font-size: 2em;
  color: #e0e0e0;
  text-align: center;
  margin-bottom: 30px;
  position: relative;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 60px;
    height: 2px;
    background: #88ff88;
  }

  &::before {
    left: -80px;
  }

  &::after {
    right: -80px;
  }
`,Br=nn.div`
  font-size: 1.2em;
  line-height: 1.6;
  color: #e0e0e0;
  margin-bottom: 40px;
  padding: 20px;
  background: rgba(26, 26, 26, 0.6);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`,Wr=nn.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`,Hr=nn.button`
  padding: 12px 24px;
  background: #2a2a2a;
  color: #e0e0e0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1em;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  &:hover {
    background: #88ff88;
    transform: translateY(-2px);
  }
`,Vr=nn.div`
  margin-top: 40px;
  padding: 30px;
  background: rgba(26, 26, 26, 0.6);
  border-radius: 8px;
  color: #b0b0b0;
  font-style: italic;
  line-height: 1.8;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  &::before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 3em;
    color: rgba(136, 255, 136, 0.2);
  }

  &::after {
    content: '"';
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 3em;
    color: rgba(136, 255, 136, 0.2);
  }
`,qr=()=>{const{chapterId:e}=function(){let{matches:e}=t.useContext(Q),n=e[e.length-1];return n?n.params:{}}(),n=ee(),[r,a]=(0,t.useState)(null),[o,i]=(0,t.useState)(0),[l,s]=(0,t.useState)(!1),[u,c]=(0,t.useState)(""),[d,f]=(0,t.useState)(""),[p,h]=(0,t.useState)(!1),[m,g]=(0,t.useState)(!1),[b,v]=(0,t.useState)(!1),[y,x]=(0,t.useState)(!1),[k,w]=(0,t.useState)(!1),[S,C]=(0,t.useState)(!1),[E,_]=(0,t.useState)(!1),[P,T]=(0,t.useState)(!1),[j,z]=(0,t.useState)(!1);(0,t.useEffect)((()=>{try{const t=(e=>{if(!e)return null;const t=parseInt(e);return isNaN(t)?null:zn[t]||null})(parseInt(e));if(t){a(t),i(0),s(!1),g(!1),v(!1),x(!1),w(!1),c(""),f(""),h(!1),C(!1),_(!1),T(!1),z(!1);"true"===localStorage.getItem(`chapter${e}Complete`)&&s(!0)}else console.error("Chapter not found:",e),n("/")}catch(t){console.error("Error loading chapter:",t),n("/")}}),[e,n]);if(!r)return null;const N=r.questions[o];return(0,mn.jsxs)(Mr,{children:[(0,mn.jsx)(Ur,{children:r.title}),(0,mn.jsx)(Br,{children:r.content}),!l&&!m&&!b&&!y&&!k&&N&&(0,mn.jsx)(Fn,{context:N.context,question:N.question,choices:N.choices,onChoice:e=>{if(!r||!r.questions[o])return;const t=r.questions[o].choices[e];c(t.feedback),f(t.hint),h(!0)},feedback:u,hint:d,showContinue:p,onContinue:()=>{if(o<r.questions.length-1)i((e=>e+1)),c(""),f(""),h(!1);else{const t=parseInt(e);1===t?w(!0):4===t?g(!0):5===t?v(!0):6===t?x(!0):s(!0)}}}),m&&(0,mn.jsx)(Qn,{onComplete:()=>{C(!0),g(!1),s(!0),localStorage.setItem(`chapter${e}Complete`,"true")}}),b&&(0,mn.jsx)(hr,{onComplete:()=>{_(!0),v(!1),s(!0),localStorage.setItem(`chapter${e}Complete`,"true")}}),y&&(0,mn.jsx)(Cr,{onComplete:()=>{T(!0),x(!1),s(!0),localStorage.setItem(`chapter${e}Complete`,"true")}}),k&&(0,mn.jsx)(Ar,{onComplete:()=>{z(!0),w(!1),s(!0),localStorage.setItem(`chapter${e}Complete`,"true")}}),l&&(0,mn.jsxs)(mn.Fragment,{children:[(0,mn.jsxs)(Vr,{children:[(0,mn.jsx)("h3",{children:r.philosophicalReflection.title}),(0,mn.jsx)("p",{children:r.philosophicalReflection.content})]}),(0,mn.jsx)(Wr,{children:(0,mn.jsx)(Hr,{onClick:()=>{n("/")},children:"\u7e7c\u7e8c\u95b1\u8b80"})})]})]})},Kr=tn`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Yr=tn`
  0% {
    box-shadow: 0 0 5px rgba(224, 224, 224, 0.2);
  }
  50% {
    box-shadow: 0 0 20px rgba(224, 224, 224, 0.4);
  }
  100% {
    box-shadow: 0 0 5px rgba(224, 224, 224, 0.2);
  }
`,Qr=tn`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
`,Xr=nn.div`
  margin: 40px 0;
  padding: 30px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  position: relative;
  animation: ${Kr} 0.5s ease-out;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 20px 0;
  }
`,Gr=nn.div`
  color: #e0e0e0;
  font-size: 1.2em;
  margin-bottom: 20px;
  text-align: center;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`,Jr=nn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 30px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`,Zr=nn.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`,ea=nn.div`
  padding: 15px;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid ${e=>e.isWrong?"#ff4444":"rgba(224, 224, 224, 0.2)"};
  border-radius: 8px;
  cursor: grab;
  user-select: none;
  transition: all 0.3s ease;
  color: #e0e0e0;
  min-width: 150px;
  text-align: center;
  animation: ${e=>e.isWrong?Qr:"none"} 0.5s ease;
  touch-action: none;

  &:hover {
    background: rgba(224, 224, 224, 0.1);
    transform: translateY(-2px);
  }

  &:active {
    cursor: grabbing;
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    width: 90%;
    min-width: auto;
    padding: 12px;
    font-size: 0.95em;
  }
`,ta=nn.div`
  padding: 20px;
  background: ${e=>e.isOver?"rgba(224, 224, 224, 0.1)":"rgba(0, 0, 0, 0.2)"};
  border: 2px dashed ${e=>e.isOver?"#88ff88":"rgba(224, 224, 224, 0.3)"};
  border-radius: 8px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  animation: ${e=>e.isCorrect?Yr:"none"} 2s infinite;
  touch-action: none;

  @media (max-width: 768px) {
    padding: 15px;
    min-height: 80px;
  }
`,na=nn.div`
  color: ${e=>e.isEmpty?"#666":"#e0e0e0"};
  font-style: italic;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`,ra=nn.div`
  margin-top: 30px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  color: ${e=>e.isError?"#ff4444":"#88ff88"};
  text-align: center;
  animation: ${Kr} 0.5s ease-out;

  @media (max-width: 768px) {
    padding: 15px;
    margin-top: 20px;
    font-size: 0.95em;
  }
`,aa=nn.button`
  margin: 20px auto 0;
  display: block;
  padding: 12px 30px;
  background: transparent;
  border: 1px solid #e0e0e0;
  color: #e0e0e0;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.1em;
  transition: all 0.3s ease;
  touch-action: manipulation;

  &:hover {
    background: rgba(224, 224, 224, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 10px 25px;
    font-size: 1em;
  }
`,oa=nn(aa)`
  margin-top: 30px;
`;const ia=function(e){let{puzzle:n,onComplete:r}=e;const[a,o]=(0,t.useState)(n.items),[i,l]=(0,t.useState)(n.zones),[s,u]=(0,t.useState)(null),[c,d]=(0,t.useState)(!1),[f,p]=(0,t.useState)(null),[h,m]=(0,t.useState)({}),[g,b]=(0,t.useState)(null),[v,y]=(0,t.useState)(null);(0,t.useEffect)((()=>(document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top=`-${window.scrollY}px`,()=>{document.body.style.overflow="",document.body.style.position="",document.body.style.width="",document.body.style.top=""})),[]);const x=e=>{e.target.style.opacity="1",u(null)},k=e=>{e.preventDefault()},w=e=>{g&&s&&(e.preventDefault(),y(e.touches[0]))},S=(e,t)=>{if(!g||!s)return;e.preventDefault(),e.target.style.opacity="1",u(null),b(null),y(null);const r=i.find((e=>e.id===t));if(r.correctItemId===s.id){const e=i.map((e=>e.id===t?{...e,item:s}:e)),r=a.filter((e=>e.id!==s.id));l(e),o(r),p({isError:!1,message:"\u6b63\u78ba\uff01\u9019\u500b\u7dda\u7d22\u627e\u5230\u4e86\u5b83\u7684\u6b78\u5c6c\u3002"}),0===r.length&&setTimeout((()=>{d(!0),p({isError:!1,message:n.completionFeedback})}),1e3)}else m({...h,[s.id]:!0}),p({isError:!0,message:"\u9019\u500b\u7dda\u7d22\u4f3c\u4e4e\u4e0d\u5c6c\u65bc\u9019\u88e1\uff0c\u8acb\u91cd\u65b0\u601d\u8003\u3002"})};return(0,mn.jsxs)(Xr,{children:[(0,mn.jsx)(Gr,{children:n.instructions}),(0,mn.jsx)(Jr,{children:a.map((e=>(0,mn.jsx)(ea,{draggable:!0,onDragStart:t=>((e,t)=>{u(t),e.target.style.opacity="0.5"})(t,e),onDragEnd:x,onTouchStart:t=>((e,t)=>{b(e.touches[0]),u(t),e.target.style.opacity="0.5"})(t,e),onTouchMove:w,onTouchEnd:e=>S(e,null),isWrong:h[e.id],children:e.text},e.id)))}),(0,mn.jsx)(Zr,{children:i.map((e=>(0,mn.jsx)(ta,{onDragOver:k,onDrop:t=>((e,t)=>{if(e.preventDefault(),!s)return;const r=i.find((e=>e.id===t));if(r.correctItemId===s.id){const e=i.map((e=>e.id===t?{...e,item:s}:e)),r=a.filter((e=>e.id!==s.id));l(e),o(r),p({isError:!1,message:"\u6b63\u78ba\uff01\u9019\u500b\u7dda\u7d22\u627e\u5230\u4e86\u5b83\u7684\u6b78\u5c6c\u3002"}),0===r.length&&setTimeout((()=>{d(!0),p({isError:!1,message:n.completionFeedback})}),1e3)}else m({...h,[s.id]:!0}),p({isError:!0,message:"\u9019\u500b\u7dda\u7d22\u4f3c\u4e4e\u4e0d\u5c6c\u65bc\u9019\u88e1\uff0c\u8acb\u91cd\u65b0\u601d\u8003\u3002"})})(t,e.id),onTouchEnd:t=>S(t,e.id),isOver:null!==s,isCorrect:e.item&&e.correctItemId===e.item.id,children:e.item?(0,mn.jsx)("div",{children:e.item.text}):(0,mn.jsx)(na,{isEmpty:!0,children:e.label})},e.id)))}),f&&(0,mn.jsxs)(mn.Fragment,{children:[(0,mn.jsx)(ra,{isError:f.isError,children:f.message}),f.isError&&(0,mn.jsx)(aa,{onClick:()=>{o(n.items),l(n.zones),m({}),p(null)},children:"\u91cd\u65b0\u5617\u8a66"})]}),c&&(0,mn.jsx)(oa,{onClick:r,children:"\u7e7c\u7e8c\u6545\u4e8b"})]})},la=tn`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
`,sa=nn.button`
  margin: 20px auto 0; // 上下邊距和自動水平居中
  display: block; // 設置為塊級元素
  width: auto; // 自動寬度
  padding: 15px 30px; // 內邊距
  font-size: 1.1em; // 字體大小
  background: rgba(0, 0, 0, 0.3); // 背景顏色
  border: 1px solid rgba(224, 224, 224, 0.3); // 邊框樣式
  color: #e0e0e0; // 字體顏色
  cursor: pointer; // 鼠標懸停時顯示為指針
  font-family: inherit; // 繼承字體
  transition: all 0.3s ease; // 過渡效果
  position: relative; // 相對定位
  overflow: hidden; // 隱藏溢出內容
  text-align: center; // 文字居中
  min-width: 200px; // 最小寬度
  border-radius: 6px; // 邊角圓滑
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); // 陰影效果
  
  // 懸停效果
  &:hover {
    background: rgba(224, 224, 224, 0.2); // 懸停時背景顏色
    border-color: rgba(224, 224, 224, 0.5); // 懸停時邊框顏色
    transform: translateY(-2px); // 懸停時向上移動
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4); // 懸停時陰影效果
  }

  // 懸停時的箭頭效果
  &::before {
    content: '→'; // 箭頭符號
    position: absolute; // 絕對定位
    right: 15px; // 右邊距
    opacity: 0; // 初始透明度
    transform: translateX(-10px); // 初始位置
    transition: all 0.3s ease; // 過渡效果
  }

  // 懸停時箭頭顯示
  &:hover::before {
    opacity: 1; // 懸停時顯示箭頭
    transform: translateX(0); // 移動到原位置
  }

  // 按下時的效果
  &:active {
    transform: translateY(0); // 按下時不移動
    background: rgba(224, 224, 224, 0.3); // 按下時背景顏色
  }

  // 響應式設計
  @media (max-width: 768px) {
    padding: 15px 30px; // 響應式內邊距
    font-size: 1.1em; // 響應式字體大小
    min-width: 220px; // 響應式最小寬度
  }
`,ua=nn.div`
  display: flex; // 使用彈性布局
  justify-content: space-between; // 兩端對齊
  margin-top: 40px; // 上邊距
  gap: 20px; // 按鈕間距
  max-width: 600px; // 最大寬度
  margin-left: auto; // 自動左邊距
  margin-right: auto; // 自動右邊距
  position: relative; // 相對定位

  // 在容器上方添加線條效果
  &::before {
    content: ''; // 空內容
    position: absolute; // 絕對定位
    top: -20px; // 上邊距
    left: 50%; // 左邊距
    transform: translateX(-50%); // 水平居中
    width: 80%; // 寬度
    height: 1px; // 高度
    background: linear-gradient(90deg, transparent, #e0e0e0, transparent); // 漸變背景
  }
`,ca=nn.button`
  background: transparent; // 背景透明
  border: 1px solid #e0e0e0; // 邊框樣式
  color: #e0e0e0; // 字體顏色
  padding: 12px 25px; // 內邊距
  cursor: pointer; // 鼠標懸停時顯示為指針
  font-family: inherit; // 繼承字體
  transition: all 0.3s ease; // 過渡效果
  position: relative; // 相對定位
  overflow: hidden; // 隱藏溢出內容
  min-width: 120px; // 最小寬度
  text-align: center; // 文字居中
  flex: 1; // 彈性布局
  border-radius: 6px; // 邊角圓滑
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); // 陰影效果

  // 懸停效果
  &::before {
    content: ''; // 空內容
    position: absolute; // 絕對定位
    top: 0; // 上邊距
    left: -100%; // 初始位置
    width: 100%; // 寬度
    height: 100%; // 高度
    background: linear-gradient(90deg, transparent, rgba(224, 224, 224, 0.1), transparent); // 漸變背景
    transition: all 0.5s ease; // 過渡效果
  }

  // 懸停時的效果
  &:hover {
    background: rgba(224, 224, 224, 0.1); // 懸停時背景顏色
    transform: translateX(0); // 懸停時不移動
    animation: ${Lt`${la}`} 1s infinite; // 懸停時動畫效果
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4); // 懸停時陰影效果
    border-color: rgba(224, 224, 224, 0.5); // 懸停時邊框顏色

    // 懸停時的箭頭效果
    &::before {
      left: 100%; // 移動到右側
    }
  }

  // 按下時的效果
  &:active {
    transform: translateY(0); // 按下時不移動
    background: rgba(224, 224, 224, 0.2); // 按下時背景顏色
  }

  // 響應式設計
  @media (max-width: 768px) {
    padding: 15px 30px; // 響應式內邊距
    font-size: 1.1em; // 響應式字體大小
    min-width: 140px; // 響應式最小寬度
  }
`,da=nn.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`,fa=nn.h1`
  color: #e0e0e0;
  text-align: center;
  margin-bottom: 30px;
`,pa=nn.p`
  color: #e0e0e0;
  line-height: 1.6;
  margin-bottom: 20px;
`,ha=nn.div`
  margin: 30px 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  color: #e0e0e0;

  h3 {
    color: #88ff88;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 15px;
    line-height: 1.6;
  }
`,ma=()=>{const e=ee(),[n,r]=(0,t.useState)(0),[a,o]=(0,t.useState)(!1),[i,l]=(0,t.useState)(!1),[s,u]=(0,t.useState)(""),[c,d]=(0,t.useState)(""),[f,p]=(0,t.useState)(!1),[h,m]=(0,t.useState)(!1),g=[{question:"\u9019\u4e9b\u7b46\u8a18\u4e2d\u7684\u9999\u6c23\uff0c\u8b93\u4f60\u806f\u60f3\u5230\u4ec0\u9ebc\uff1f",context:"\u7d00\u5f8b\u8abf\u67e5\u54e1\u5f35\u8861\u7ffb\u958b\u7b46\u8a18\uff0c\u7b46\u8a18\u672c\u6709\u8457\u67d0\u7a2e\u9999\u5473\uff0c\u5e36\u6709\u677e\u8102\u7684\u6e05\u51bd\u548c\u6ce5\u571f\u7684\u6fd5\u6f64\u3002",choices:[{text:"\u4e00\u7247\u88ab\u6668\u9727\u7c60\u7f69\u7684\u5e7d\u975c\u677e\u6797",feedback:"\u78ba\u5be6\uff0c\u9019\u7a2e\u7368\u7279\u7684\u9999\u6c23\u6b63\u5982\u6e05\u6668\u521d\u9727\u4e2d\u677e\u6797\u6563\u767c\u51fa\u7684\u6c23\u606f\uff0c\u8b93\u4eba\u611f\u53d7\u5230\u4e00\u7a2e\u6e05\u65b0\u8207\u975c\u8b10\u3002\u9019\u80a1\u6c23\u5473\u4f3c\u4e4e\u80fd\u559a\u8d77\u4eba\u5c0d\u5927\u81ea\u7136\u6df1\u8655\u79d8\u5bc6\u7684\u806f\u60f3\uff0c\u5f77\u5f7f\u7b46\u8a18\u80cc\u5f8c\u96b1\u85cf\u8457\u8207\u81ea\u7136\u3001\u751f\u547d\u5f8b\u52d5\u76f8\u95dc\u7684\u8a0a\u606f\u3002\u6216\u8a31\u9019\u6697\u793a\u8457\u502a\u4e3b\u4efb\u5167\u5fc3\u4e16\u754c\u4e2d\u7684\u67d0\u7a2e\u81ea\u6211\u6de8\u5316\u6216\u56de\u6b78\u672c\u6e90\u7684\u8ffd\u6c42\uff0c\u800c\u9019\u7a2e\u6c23\u606f\u6b63\u662f\u4ed6\u7cbe\u5fc3\u5b89\u6392\u7684\u7dda\u7d22\u4e4b\u4e00\u3002",hint:"\u5927\u81ea\u7136\u5f80\u5f80\u80fd\u7d66\u4eba\u555f\u767c\u548c\u5e73\u975c\u3002"},{text:"\u53e4\u8001\u5716\u66f8\u9928\u4e2d\u7684\u5178\u7c4d",feedback:"\u96d6\u7136\u4e5f\u662f\u4e00\u7a2e\u7279\u6b8a\u7684\u6c23\u5473\uff0c\u4f46\u4f3c\u4e4e\u4e0d\u592a\u7b26\u5408\u63cf\u8ff0...\u4f46\u63cf\u8ff0\u4e2d\u5f37\u8abf\u7684\u677e\u8102\u6e05\u51bd\u548c\u6ce5\u571f\u7684\u6fd5\u6f64\u611f\uff0c\u66f4\u8cbc\u8fd1\u5927\u81ea\u7136\u7684\u6c23\u606f\uff0c\u800c\u975e\u66f8\u5377\u5806\u7a4d\u7684\u6c89\u60b6\u3002\u9019\u7a2e\u6c23\u5473\u660e\u986f\u5e36\u6709\u81ea\u7136\u754c\u7684\u751f\u6a5f\u548c\u4e00\u7d72\u91ce\u6027\u7684\u5473\u9053\uff0c\u800c\u975e\u55ae\u7d14\u77e5\u8b58\u8207\u6b77\u53f2\u7684\u539a\u91cd\u3002",hint:"\u4ed4\u7d30\u56de\u60f3\u63cf\u8ff0\u4e2d\u63d0\u5230\u7684\u5177\u9ad4\u6c23\u5473\u7279\u5fb5\u3002\u7b46\u8a18\u4e2d\u9019\u80a1\u9999\u6c23\u6216\u8a31\u6697\u793a\u8457\u4e00\u7a2e\u8207\u81ea\u7136\u7dca\u5bc6\u76f8\u9023\u7684\u610f\u8c61\u3002"}]},{question:"\u70ba\u4ec0\u9ebc\u8fa6\u516c\u5ba4\u5728\u591c\u665a\u6703\u51fa\u73fe\u7570\u8c61\uff1f",context:"\u540c\u4e8b\u5011\u8b70\u8ad6\u7d1b\u7d1b\uff0c\u6709\u4eba\u8aaa\u770b\u898b\u71c8\u5149\u5ffd\u660e\u5ffd\u6697\uff0c\u6709\u4eba\u8aaa\u807d\u898b\u7d30\u5fae\u7684\u8173\u6b65\u8072\u3002",choices:[{text:"\u53ef\u80fd\u662f\u5927\u6a13\u7684\u96fb\u8def\u554f\u984c",feedback:"\u9019\u500b\u89e3\u91cb\u96d6\u7136\u5728\u6280\u8853\u5c64\u9762\u4e0a\u80fd\u89e3\u91cb\u71c8\u5149\u7684\u5ffd\u660e\u5ffd\u6697\uff0c\u4f46\u537b\u904e\u65bc\u55ae\u8584\uff0c\u7121\u6cd5\u6db5\u84cb\u7d30\u5fae\u8173\u6b65\u8072\u4ee5\u53ca\u5176\u4ed6\u4e0d\u5c0b\u5e38\u73fe\u8c61\u3002\u9019\u4e9b\u73fe\u8c61\u4f3c\u4e4e\u4e26\u975e\u50c5\u7531\u96fb\u8def\u6545\u969c\u5f15\u8d77\uff0c\u800c\u662f\u8207\u67d0\u7a2e\u66f4\u6df1\u5c64\u6b21\u7684\u795e\u79d8\u529b\u91cf\u6216\u4e8b\u4ef6\u6709\u95dc\u3002",hint:"\u4ed4\u7d30\u89c0\u5bdf\u73fe\u5834\u7684\u6bcf\u500b\u7d30\u7bc0\uff0c\u6216\u8a31\u80fd\u767c\u73fe\u9019\u4e9b\u73fe\u8c61\u8207\u8fa6\u516c\u5ba4\u5167\u5176\u4ed6\u4e0d\u5c0b\u5e38\u73fe\u8c61\u4e4b\u9593\u5b58\u5728\u8457\u67d0\u7a2e\u806f\u7e6b\u3002"},{text:"\u9019\u4e9b\u53ef\u80fd\u662f\u502a\u4e3b\u4efb\u7559\u4e0b\u7684\u7dda\u7d22",feedback:"\u6709\u8da3\u7684\u63a8\u6e2c\uff0c\u9019\u4e9b\u7570\u8c61\u78ba\u5be6\u986f\u5f97\u5f88\u4e0d\u5c0b\u5e38...\u8b93\u4eba\u806f\u60f3\u5230\u502a\u4e3b\u4efb\u5728\u6d88\u5931\u524d\u53ef\u80fd\u7279\u610f\u5b89\u6392\u4e86\u4e00\u7cfb\u5217\u7570\u8c61\u4f5c\u70ba\u6697\u793a\u3002\u5ffd\u660e\u5ffd\u6697\u7684\u71c8\u5149\u548c\u7d30\u5fae\u7684\u8173\u6b65\u8072\uff0c\u90fd\u50cf\u662f\u5728\u5411\u4eba\u50b3\u9054\u67d0\u7a2e\u4fe1\u606f\uff0c\u53ef\u80fd\u662f\u4ed6\u5c0d\u6b0a\u529b\u64cd\u63a7\u6216\u5167\u5fc3\u72c0\u614b\u7684\u4e00\u7a2e\u7121\u8072\u544a\u767d\u3002",hint:"\u7e7c\u7e8c\u63a2\u7d22\uff0c\u6216\u8a31\u80fd\u767c\u73fe\u66f4\u591a\u7dda\u7d22\u3002\u9019\u4e9b\u7570\u8c61\u662f\u5426\u8207\u4ed6\u8fa6\u516c\u5ba4\u4e2d\u7559\u4e0b\u7684\u672a\u767c\u9001\u90f5\u4ef6\u8349\u7a3f\u548c\u7b46\u8a18\u4e2d\u900f\u9732\u7684\u8a0a\u606f\u6709\u95dc\uff1f"}]}];return(0,mn.jsxs)(da,{children:[(0,mn.jsx)(fa,{children:"\u7b2c\u4e8c\u7ae0\uff1a\u7b46\u8a18\u7684\u555f\u793a"}),(0,mn.jsx)(pa,{children:"\u502a\u4e3b\u4efb\u7684\u8fa6\u516c\u5ba4\u5167\u7559\u4e0b\u7684\u4e0d\u50c5\u50c5\u662f\u7570\u6a23\u7684\u96fb\u8166\u87a2\u5e55\uff0c\u9084\u6709\u4e00\u500b\u95dc\u65bc\u4ed6\u7684\u795e\u79d8\u7dda\u7d22\uff1a\u4e00\u672c\u7b46\u8a18\u3002 \u9019\u672c\u7b46\u8a18\u88ab\u767c\u73fe\u5728\u4ed6\u7684\u684c\u4e0a\uff0c\u4f4d\u7f6e\u986f\u773c\uff0c\u5f77\u5f7f\u523b\u610f\u653e\u7f6e\u65bc\u6b64\u3002"}),!a&&(0,mn.jsxs)(mn.Fragment,{children:[(0,mn.jsx)(Fn,{question:g[n].question,context:g[n].context,choices:g[n].choices,onChoice:e=>{const t=g[n].choices;u(t[e].feedback),d(t[e].hint),p(!0),m(!0)},feedback:s,hint:c,disabled:f}),h&&(0,mn.jsx)(sa,{onClick:()=>{n<g.length-1?(r(n+1),u(""),d(""),p(!1),m(!1)):o(!0)},children:"\u7e7c\u7e8c\u95b1\u8b80"})]}),a&&!i&&(0,mn.jsx)(ia,{puzzle:{instructions:"\u5c07\u7b46\u8a18\u4e2d\u7684\u7dda\u7d22\u7247\u6bb5\u62d6\u653e\u5230\u5c0d\u61c9\u7684\u4e3b\u984c\u5340\u57df\u4e2d\uff0c\u91cd\u5efa\u502a\u4e3b\u4efb\u7684\u601d\u7dd2\u8108\u7d61\u3002",items:[{id:1,text:"\u6709\u4e9b\u4eba\u611b\u8ffd\u6c42\u81ea\u7531\uff0c\u4f46\u8d8a\u8ffd\u9010\uff0c\u8d8a\u9677\u9032\u53bb"},{id:2,text:"\u4eba\u5f9e\u611b\u6b32\u751f\u6182\uff0c\u5f9e\u6182\u751f\u6016"},{id:4,text:"\u4eba\u561b\uff0c\u7e3d\u5f97\u70ba\u81ea\u5df1\u8a2d\u9ede\u6846\u6846\u624d\u8e0f\u5be6"},{id:3,text:"\u611b\u8207\u6182\u3001\u6182\u8207\u6016\uff0c\u9019\u662f\u4eba\u6027\u6ce8\u5b9a\u7684\u67b7\u9396"}],zones:[{id:"philosophy",label:"\u6771\u65b9\u54f2\u5b78\u601d\u60f3",correctItemId:2},{id:"freedom",label:"\u81ea\u7531\u7684\u77db\u76fe",correctItemId:1},{id:"control",label:"\u63a7\u5236\u7684\u672c\u8cea",correctItemId:4},{id:"human_nature",label:"\u4eba\u6027\u7684\u67b7\u9396",correctItemId:3}],completionFeedback:"\u9019\u4e9b\u96f6\u6563\u7684\u7b46\u8a18\u4f3c\u4e4e\u5728\u8a34\u8aaa\u8457\u502a\u4e3b\u4efb\u5167\u5fc3\u7684\u6399\u624e\uff1a\u5728\u8ffd\u6c42\u81ea\u7531\u8207\u4fdd\u6301\u63a7\u5236\u4e4b\u9593\u7684\u6c38\u6046\u77db\u76fe\u3002"},onComplete:()=>{l(!0),localStorage.setItem("chapter2Complete","true")}}),i&&(0,mn.jsxs)(mn.Fragment,{children:[(0,mn.jsxs)(ha,{children:[(0,mn.jsx)("h3",{children:"\u502a\u4e3b\u4efb\u7684\u54f2\u5b78\u601d\u8003"}),(0,mn.jsx)("p",{children:"\u502a\u4e3b\u4efb\u7684\u7b46\u8a18\u63ed\u793a\u4e86\u4e00\u500b\u6df1\u5c64\u7684\u54f2\u5b78\u601d\u8003\uff1a\u4eba\u985e\u5728\u8ffd\u6c42\u81ea\u7531\u8207\u7dad\u6301\u63a7\u5236\u4e4b\u9593\u7684\u6c38\u6046\u77db\u76fe\u3002 \u9019\u4e9b\u96f6\u6563\u7684\u7b46\u8a18\u7247\u6bb5\uff0c\u5f9e\u4e0d\u540c\u89d2\u5ea6\u95e1\u8ff0\u4e86\u76f8\u540c\u7684\u4e3b\u984c\u2014\u2014\u4eba\u6027\u4e2d\u5c0d\u81ea\u7531\u7684\u6e34\u671b\u8207\u5c0d\u79e9\u5e8f\u7684\u9700\u6c42\u4e4b\u9593\u7684\u5f35\u529b\u3002"}),(0,mn.jsx)("p",{children:"\u300a\u4f5b\u8aaa\u56db\u5341\u4e8c\u7ae0\u7d93\u300b\u4e2d\u7684\u300c\u4eba\u5f9e\u611b\u6b32\u751f\u6182\uff0c\u5f9e\u6182\u751f\u6016\u300d\uff0c\u88ab\u502a\u4e3b\u4efb\u91cd\u65b0\u8a6e\u91cb\u70ba\u73fe\u4ee3\u7d44\u7e54\u4e2d\u7684\u6b0a\u529b\u95dc\u4fc2\uff1a \u4eba\u5011\u56e0\u8ffd\u6c42\u800c\u7522\u751f\u4f9d\u9644\uff0c\u56e0\u4f9d\u9644\u800c\u7522\u751f\u6050\u61fc\uff0c\u6700\u7d42\u5728\u81ea\u7531\u8207\u63a7\u5236\u7684\u62c9\u626f\u4e2d\u8ff7\u5931\u81ea\u6211\u3002"}),(0,mn.jsx)("p",{children:"\u502a\u4e3b\u4efb\u5c0d\u4eba\u6027\u7684\u6df1\u523b\u6d1e\u5bdf\uff0c\u4e5f\u6697\u793a\u4e86\u4ed6\u53ef\u80fd\u6b63\u5728\u7d93\u6b77\u7684\u5167\u5728\u6399\u624e\u2014\u2014 \u4f5c\u70ba\u4e00\u500b\u5236\u5ea6\u7684\u57f7\u884c\u8005\uff0c\u540c\u6642\u53c8\u662f\u9019\u500b\u5236\u5ea6\u7684\u8cea\u7591\u8005\u3002"})]}),(0,mn.jsx)(ua,{children:(0,mn.jsx)(ca,{onClick:()=>{localStorage.setItem("chapter2Complete","true"),e("/")},children:"\u7e7c\u7e8c\u6545\u4e8b"})})]})]})},ga=tn`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ba=tn`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(224, 224, 224, 0.7);
  }
  70% {
    transform: scale(1.1);
    box-shadow: 0 0 0 10px rgba(224, 224, 224, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(224, 224, 224, 0);
  }
`,va=nn.div`
  margin: 20px 0;
  padding: 30px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  position: relative;
  animation: ${ga} 0.5s ease-out;
  text-align: center;
`,ya=nn.div`
  font-size: 1.3em;
  color: #e0e0e0;
  margin-bottom: 20px;
  animation: ${ga} 0.3s ease-out;
`,xa=nn.button`
  display: inline-block;
  padding: 25px 50px;
  background: rgba(224, 224, 224, 0.1);
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  color: #e0e0e0;
  font-size: 1.5em;
  margin: 20px;
  cursor: pointer;
  animation: ${ba} 1s infinite;
  transition: all 0.3s ease;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: rgba(224, 224, 224, 0.2);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
    background: rgba(224, 224, 224, 0.3);
  }
`,ka=nn.div`
  width: ${e=>e.progress}%;
  height: 6px;
  background: ${e=>e.progress>60?"#88ff88":e.progress>30?"#ffff88":"#ff8888"};
  transition: width 0.1s linear, background 0.3s ease;
  margin-top: 20px;
  border-radius: 3px;
`,wa=nn.div`
  margin-top: 20px;
  color: ${e=>e.success?"#88ff88":"#ff4444"};
  font-size: 1.4em;
  font-weight: bold;
  animation: ${ga} 0.5s ease-out;
`,Sa=e=>{let{prompt:n,timeLimit:r=3e3,onComplete:a}=e;const[o,i]=(0,t.useState)(r),[l,s]=(0,t.useState)(!0),[u,c]=(0,t.useState)(null);(0,t.useEffect)((()=>{if(!l)return;const e=setInterval((()=>{i((t=>t<=100?(s(!1),c(!1),a(!1),clearInterval(e),0):t-100))}),100);return()=>clearInterval(e)}),[l,a]);const d=o/r*100;return(0,mn.jsxs)(va,{children:[(0,mn.jsx)(ya,{children:n}),l&&(0,mn.jsxs)(mn.Fragment,{children:[(0,mn.jsx)(xa,{onClick:()=>{l&&(c(!0),s(!1),a(!0))},children:"\u9ede\u64ca\uff01"}),(0,mn.jsx)(ka,{progress:d})]}),null!==u&&(0,mn.jsx)(wa,{success:u,children:u?"\u6210\u529f\uff01\u6e96\u5099\u4e0b\u4e00\u500b\u6311\u6230...":"\u5931\u6557..."})]})},Ca=nn.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  color: #e0e0e0;
  font-family: 'Noto Sans TC', sans-serif;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  position: relative;
  min-height: 100vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(224, 224, 224, 0.1);
    border-radius: 12px;
    pointer-events: none;
  }
`,Ea=nn.h1`
  text-align: center;
  color: #ffffff;
  margin-bottom: 40px;
`,_a=nn.p`
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: justify;
`,Pa=nn.div`
  position: relative;
  margin: 20px auto;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(224, 224, 224, 0.2);
  
  ${e=>{switch(e.position){case"top":return"margin-top: 50px;";case"middle":return"margin: 100px auto;";case"bottom":return"margin-bottom: 50px;";default:return""}}}
`,Ta=nn.div`
  margin: 30px 0;
  padding: 25px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(224, 224, 224, 0.2);
  
  h3 {
    color: #ffffff;
    margin-bottom: 15px;
    font-size: 1.3em;
  }
  
  p {
    color: #cccccc;
    line-height: 1.8;
    text-align: justify;
  }
`,ja=nn(sa)`
  background: rgba(224, 224, 224, 0.1);
  margin-top: 30px;
`,za=()=>{const e=ee(),[n,r]=(0,t.useState)(0),[a,o]=(0,t.useState)(!1),[i,l]=(0,t.useState)(0),[s,u]=(0,t.useState)(""),[c,d]=(0,t.useState)(""),[f,p]=(0,t.useState)(!1),[h,m]=(0,t.useState)(!1),[g,b]=(0,t.useState)(!1),[v,y]=(0,t.useState)([!1,!1,!1]),[x,k]=(0,t.useState)(!1),w=[{question:"\u95dc\u65bc\u502a\u4e3b\u4efb\u7684\u6548\u7387\u8207\u63a7\u5236\u529b\uff0c\u4f60\u7684\u5206\u6790\u662f\uff1f",context:"\u5f35\u8861\u5728\u8abf\u67e5\u5831\u544a\u88e1\u5beb\u4e0b\uff0c\u6548\u7387\u8207\u63a7\u5236\u529b\u3002\u502a\u4e3b\u4efb\u4ee5\u5f37\u5927\u7684\u57f7\u884c\u529b\u548c\u51b7\u975c\u8457\u7a31\uff0c\u4ed6\u7684\u6bcf\u4e00\u6b21\u6c7a\u7b56\u90fd\u5982\u7cbe\u5bc6\u5100\u5668\u822c\u904b\u4f5c...",choices:[{text:"\u9019\u662f\u4e00\u7a2e\u8fd1\u4e4e\u5b8c\u7f8e\u7684\u7ba1\u7406\u65b9\u5f0f",feedback:"\u8868\u9762\u7684\u5b8c\u7f8e\u5f80\u5f80\u63a9\u84cb\u8457\u6df1\u5c64\u7684\u554f\u984c\u3002\u96d6\u7136\u502a\u4e3b\u4efb\u7684\u7ba1\u7406\u6548\u7387\u4ee4\u4eba\u7a31\u7fa8\uff0c\u6240\u6709\u6d41\u7a0b\u904b\u4f5c\u5f97\u7121\u53ef\u6311\u5254\uff0c\u4f46\u4f60\u662f\u5426\u6ce8\u610f\u5230\u9019\u7a2e\u8fd1\u4e4e\u5b8c\u7f8e\u80cc\u5f8c\u96b1\u85cf\u7684\u6b98\u9177\u898f\u7bc4\uff1f\u6bcf\u500b\u6c7a\u7b56\u90fd\u53ef\u80fd\u5728\u7121\u8072\u4e2d\u525d\u596a\u54e1\u5de5\u7684\u81ea\u4e3b\u6027\uff0c\u8b93\u4eba\u8b8a\u6210\u51b7\u51b0\u51b0\u7684\u57f7\u884c\u8005\u3002\u9019\u7a2e\u770b\u4f3c\u5b8c\u7f8e\u7684\u7ba1\u7406\u65b9\u5f0f\uff0c\u5176\u5be6\u6b63\u6f5b\u85cf\u8457\u4e00\u7a2e\u975e\u4eba\u6027\u5316\u7684\u58d3\u8feb\u8207\u63a7\u5236\uff0c\u9032\u4e00\u6b65\u524a\u5f31\u4e86\u5718\u968a\u7684\u5f48\u6027\u8207\u5275\u610f\u3002",hint:"\u5b8c\u7f8e\u7684\u8868\u8c61\u4e0b\u53ef\u80fd\u96b1\u85cf\u8457\u5371\u6a5f\uff0c\u8acb\u591a\u7559\u610f\u90a3\u7a2e\u96e3\u4ee5\u5bdf\u89ba\u7684\u7121\u60c5\u8207\u51b7\u9177\uff0c\u9019\u53ef\u80fd\u6b63\u662f\u672a\u4f86\u96b1\u85cf\u885d\u7a81\u7684\u6839\u6e90\u3002"},{text:"\u9019\u53cd\u6620\u4e86\u4ed6\u5c0d\u6b0a\u529b\u7684\u57f7\u8457",feedback:"\u78ba\u5be6\uff0c\u4ed6\u5c0d\u6548\u7387\u7684\u8ffd\u6c42\u4f3c\u4e4e\u6e90\u65bc\u5c0d\u6b0a\u529b\u7684\u6e34\u671b\u3002\u901a\u904e\u63a7\u5236\u6548\u7387\uff0c\u4ed6\u5be6\u969b\u4e0a\u5728\u63a7\u5236\u8457\u6bcf\u500b\u4eba\u3002\u5f9e\u4ed6\u7684\u8a71\u8a9e\u548c\u8209\u52d5\u4e2d\uff0c\u4f60\u53ef\u4ee5\u611f\u53d7\u5230\u90a3\u80a1\u60f3\u8981\u5c07\u6bcf\u500b\u4eba\u90fd\u7262\u7262\u7d0d\u5165\u638c\u63a7\u7bc4\u570d\u7684\u5f37\u70c8\u617e\u671b\u3002\u9019\u4e0d\u50c5\u50c5\u662f\u7ba1\u7406\u65b9\u5f0f\uff0c\u800c\u66f4\u50cf\u662f\u4e00\u5834\u6b0a\u529b\u904a\u6232\uff0c\u4ed6\u901a\u904e\u4e0d\u65b7\u5f37\u5316\u63a7\u5236\u529b\uff0c\u5c07\u6574\u500b\u7d44\u7e54\u8b8a\u6210\u4ed6\u7368\u4e00\u7121\u4e8c\u7684\u821e\u53f0\u3002",hint:"\u6b0a\u529b\u548c\u63a7\u5236\u5f80\u5f80\u662f\u76f8\u8f14\u76f8\u6210\u7684\uff0c\u7d30\u7bc0\u4e2d\u53ef\u80fd\u96b1\u85cf\u8457\u66f4\u591a\u6709\u95dc\u6b0a\u529b\u904b\u4f5c\u548c\u5167\u90e8\u89d2\u529b\u7684\u7dda\u7d22\uff0c\u7559\u610f\u90a3\u4e9b\u5fae\u5999\u7684\u6697\u793a\u3002"},{text:"\u9019\u7a2e\u65b9\u5f0f\u53ef\u80fd\u640d\u5bb3\u5718\u968a\u7684\u5275\u9020\u529b",feedback:"\u4f60\u6ce8\u610f\u5230\u4e86\u95dc\u9375\u9ede\u3002\u904e\u5ea6\u7684\u63a7\u5236\u78ba\u5be6\u53ef\u80fd\u627c\u6bba\u5275\u610f\u548c\u4e3b\u52d5\u6027\uff0c\u8b93\u5718\u968a\u8b8a\u6210\u7d14\u7cb9\u7684\u57f7\u884c\u6a5f\u5668\u3002\u7576\u4e00\u500b\u9818\u5c0e\u8005\u5c07\u6548\u7387\u8207\u63a7\u5236\u63a8\u5411\u6975\u81f4\u6642\uff0c\u77ed\u671f\u5167\u53ef\u80fd\u6703\u770b\u5230\u6210\u679c\uff0c\u4f46\u9577\u671f\u4f86\u770b\uff0c\u9019\u7a2e\u904e\u5ea6\u7ba1\u7406\u5bb9\u6613\u627c\u6bba\u5275\u65b0\u548c\u81ea\u4e3b\u6027\u3002",hint:"\u63a7\u5236\u8207\u5275\u9020\u529b\u5f80\u5f80\u662f\u5c0d\u7acb\u7684"}]},{question:"\u5c0d\u65bc\u533f\u540d\u4fe1\u4e2d\u7684\u6307\u63a7\uff0c\u4f60\u7684\u5224\u65b7\u662f\uff1f",context:"\u5f35\u8861\u4ed4\u7d30\u6838\u5c0d\u533f\u540d\u4fe1\u4e2d\u63d0\u5230\u7684\u5177\u9ad4\u4e8b\u5be6\uff0c\u537b\u767c\u73fe\u5176\u4e2d\u4e0d\u5c11\u7d30\u7bc0\u67e5\u7121\u5be6\u8b49...",choices:[{text:"\u9019\u662f\u4e00\u500b\u7cbe\u5fc3\u8a2d\u8a08\u7684\u9677\u9631",feedback:"\u6709\u8da3\u7684\u89c0\u9ede\u3002\u533f\u540d\u4fe1\u4e2d\u90a3\u4e9b\u904e\u65bc\u7cbe\u7dfb\u3001\u6beb\u7121\u7834\u7dbb\u7684\u6307\u63a7\uff0c\u770b\u4f3c\u6709\u7406\u6709\u64da\uff0c\u4f46\u53cd\u800c\u66f4\u5bb9\u6613\u8b93\u4eba\u61f7\u7591\u9019\u662f\u4e00\u500b\u7cbe\u5fc3\u8a2d\u8a08\u7684\u9677\u9631\u3002\u9019\u7a2e\u9677\u9631\u53ef\u80fd\u6b63\u662f\u6709\u4eba\u6545\u610f\u4f48\u7f6e\uff0c\u7528\u4ee5\u8aa4\u5c0e\u8abf\u67e5\u65b9\u5411\uff0c\u5f9e\u800c\u8b93\u771f\u6b63\u7684\u554f\u984c\u96b1\u85cf\u65bc\u8ff7\u9727\u4e4b\u4e2d\u3002\u9019\u4e9b\u5b8c\u7f8e\u7121\u7f3a\u7684\u7d30\u7bc0\uff0c\u53cd\u800c\u986f\u5f97\u6709\u4e9b\u751f\u786c\uff0c\u4f3c\u4e4e\u662f\u70ba\u4e86\u523b\u610f\u5f15\u5c0e\u4f60\u53bb\u95dc\u6ce8\u67d0\u500b\u65b9\u5411\u800c\u7de8\u6392\u7684\u3002",hint:"\u904e\u65bc\u5b8c\u7f8e\u7684\u6307\u63a7\u53cd\u800c\u503c\u5f97\u61f7\u7591\uff0c\u9019\u53ef\u80fd\u6b63\u662f\u6709\u4eba\u5728\u6545\u610f\u8a2d\u5c40\u3002"},{text:"\u9019\u53cd\u6620\u4e86\u67d0\u7a2e\u66f4\u6df1\u5c64\u7684\u771f\u76f8",feedback:"\u96d6\u7136\u8868\u9762\u8b49\u64da\u4e0d\u8db3\uff0c\u4f46\u9019\u4e9b\u6307\u63a7\u4f3c\u4e4e\u89f8\u53ca\u4e86\u67d0\u500b\u6838\u5fc3\u554f\u984c\u3002\u533f\u540d\u4fe1\u7684\u5167\u5bb9\uff0c\u5118\u7ba1\u7f3a\u4e4f\u76f4\u63a5\u8b49\u64da\uff0c\u4f46\u5b83\u5728\u6558\u8ff0\u4e0a\u537b\u9ede\u51fa\u4e86\u502a\u4e3b\u4efb\u884c\u4e8b\u4e2d\u7684\u67d0\u4e9b\u4e0d\u5c0b\u5e38\u4e4b\u8655\uff0c\u9019\u4e9b\u4f3c\u662f\u800c\u975e\u7684\u7dda\u7d22\u6216\u8a31\u6b63\u96b1\u85cf\u8457\u66f4\u5927\u7684\u79d8\u5bc6\u3002\u9019\u7a2e\u6307\u63a7\u5f80\u5f80\u4e0d\u55ae\u662f\u653b\u64ca\u500b\u4eba\u7684\u8868\u8c61\uff0c\u800c\u662f\u8a66\u5716\u63ed\u793a\u4e00\u500b\u96b1\u79d8\u7684\u6b0a\u529b\u904b\u4f5c\u6a21\u5f0f\u6216\u5167\u90e8\u77db\u76fe\u3002",hint:"\u771f\u76f8\u5f80\u5f80\u96b1\u85cf\u5728\u7d30\u7bc0\u4e4b\u4e2d\uff0c\u80cc\u5f8c\u53ef\u80fd\u6709\u8457\u66f4\u8907\u96dc\u7684\u6545\u4e8b\u3002"},{text:"\u9019\u53ef\u80fd\u6df7\u5408\u4e86\u771f\u5be6\u8207\u865b\u69cb",feedback:"\u9019\u662f\u500b\u654f\u92b3\u7684\u89c0\u5bdf\u3002\u533f\u540d\u4fe1\u6216\u8a31\u6b63\u662f\u901a\u904e\u6df7\u5408\u771f\u5047\u4fe1\u606f\uff0c\u4f86\u9054\u5230\u67d0\u7a2e\u7279\u5b9a\u76ee\u7684\u3002\u9019\u6a23\u7684\u6df7\u5408\u4f7f\u5f97\u6574\u500b\u6307\u63a7\u65e2\u5177\u6709\u4e00\u5b9a\u53ef\u4fe1\u5ea6\uff0c\u53c8\u96e3\u4ee5\u5b8c\u5168\u8b49\u5be6\uff0c\u5f9e\u800c\u9054\u5230\u8b93\u4eba\u7121\u6cd5\u5224\u65b7\u771f\u507d\u7684\u6548\u679c\u3002\u9019\u7a2e\u7b56\u7565\u6b63\u7b26\u5408\u73fe\u4ee3\u6b0a\u529b\u9b25\u722d\u4e2d\u5e38\u898b\u7684\u64cd\u4f5c\u624b\u6cd5\uff0c\u8b93\u8abf\u67e5\u8005\u9677\u5165\u771f\u5047\u96e3\u8fa8\u7684\u56f0\u5883\uff0c\u9032\u800c\u5f71\u97ff\u5224\u65b7\u3002",hint:"\u771f\u5047\u96e3\u8fa8\u5f80\u5f80\u662f\u6700\u5371\u96aa\u7684\uff0c\u95dc\u6ce8\u90a3\u4e9b\u6a21\u7cca\u4e0d\u6e05\u4f46\u537b\u53cd\u8986\u51fa\u73fe\u7684\u7d30\u7bc0\uff0c\u5b83\u5011\u53ef\u80fd\u6b63\u662f\u6df7\u5408\u771f\u507d\u4fe1\u606f\u7684\u95dc\u9375\u3002"}]},{question:"\u9762\u5c0d\u6700\u5f8c\u7684\u795e\u79d8\u77ed\u4fe1\uff0c\u4f60\u6703\u5982\u4f55\u89e3\u8b80\uff1f",context:"\u300c\u5f35\u8861\uff0c\u8ff4\u907f\u80fd\u89e3\u6c7a\u4ec0\u9ebc\uff1f\u4f60\u8abf\u67e5\u904e\u4f60\u7684\u5167\u5fc3\u55ce?\u300d",choices:[{text:"\u9019\u662f\u4e00\u7a2e\u5a01\u8105",feedback:"\u9019\u689d\u77ed\u4fe1\u5e36\u6709\u660e\u986f\u7684\u5a01\u8105\u610f\u5473\uff0c\u4e0d\u50c5\u662f\u5728\u8b66\u544a\u5f35\u8861\u8981\u76f4\u9762\u73fe\u5be6\uff0c\u9084\u8a66\u5716\u903c\u8feb\u4ed6\u6aa2\u8996\u5167\u5fc3\u7684\u6050\u61fc\u3002\u77ed\u4fe1\u4e2d\u7684\u8a9e\u6c23\u65e2\u51b7\u5cfb\u53c8\u5145\u6eff\u6311\u91c1\uff0c\u4eff\u4f5b\u5728\u6495\u958b\u8abf\u67e5\u8005\u7684\u5fc3\u7406\u9632\u7dda\uff0c\u8b93\u4ed6\u4e0d\u5f97\u4e0d\u53cd\u601d\u81ea\u5df1\u7684\u52d5\u6a5f\u8207\u5c40\u9650\u3002\u9019\u7a2e\u5a01\u8105\u4e0d\u50c5\u91dd\u5c0d\u884c\u52d5\uff0c\u66f4\u662f\u5c0d\u5fc3\u7406\u7684\u4e00\u7a2e\u6311\u6230\u3002",hint:"\u5a01\u8105\u80cc\u5f8c\u53ef\u80fd\u96b1\u85cf\u8457\u63d0\u9192"},{text:"\u9019\u6697\u793a\u8457\u66f4\u5927\u7684\u9670\u8b00",feedback:"\u77ed\u4fe1\u7684\u8a9e\u6c23\u4e2d\u900f\u9732\u51fa\u4e00\u7a2e\u96e3\u4ee5\u8a00\u55bb\u7684\u795e\u79d8\u611f\uff0c\u8b93\u4eba\u611f\u89ba\u9019\u500b\u6848\u4ef6\u9060\u6bd4\u8868\u9762\u4e0a\u6240\u770b\u5230\u7684\u8907\u96dc\u5f97\u591a\u3002\u5b83\u4e0d\u50c5\u662f\u5728\u8cea\u7591\u5f35\u8861\u7684\u8abf\u67e5\u65b9\u6cd5\uff0c\u66f4\u4f3c\u4e4e\u5728\u63d0\u793a\uff0c\u80cc\u5f8c\u53ef\u80fd\u5b58\u5728\u4e00\u500b\u9f90\u5927\u4e14\u96b1\u79d8\u7684\u9670\u8b00\u3002\u9019\u7a2e\u6697\u793a\u8b93\u4eba\u4e0d\u7981\u61f7\u7591\uff0c\u81ea\u5df1\u662f\u5426\u5df2\u7d93\u6372\u5165\u4e86\u4e00\u5834\u66f4\u5ee3\u6cdb\u7684\u6b0a\u529b\u9b25\u722d\u4e2d\uff0c\u800c\u6240\u6709\u8868\u9762\u73fe\u8c61\u90fd\u53ea\u662f\u51b0\u5c71\u4e00\u89d2\u3002",hint:"\u500b\u4eba\u8abf\u67e5\u53ef\u80fd\u89f8\u53ca\u66f4\u5927\u7684\u771f\u76f8"},{text:"\u9019\u662f\u5c0d\u8abf\u67e5\u8005\u7684\u8003\u9a57",feedback:"\u9019\u500b\u89e3\u8b80\u76f8\u7576\u6df1\u523b\u3002\u77ed\u4fe1\u770b\u4f3c\u7c21\u77ed\uff0c\u4f46\u5176\u5be6\u5145\u6eff\u4e86\u5c64\u6b21\u611f\uff0c\u4f3c\u4e4e\u5728\u8003\u9a57\u5f35\u8861\u662f\u5426\u6709\u52c7\u6c23\u9762\u5c0d\u90a3\u4e9b\u6700\u96b1\u79d8\u3001\u6700\u4ee4\u4eba\u4e0d\u5b89\u7684\u771f\u76f8\u3002\u5b83\u4e0d\u50c5\u6311\u6230\u4ed6\u7684\u8abf\u67e5\u80fd\u529b\uff0c\u66f4\u5728\u6311\u6230\u4ed6\u7684\u81ea\u6211\u8a8d\u77e5\uff0c\u903c\u8feb\u4ed6\u6df1\u5165\u53cd\u601d\u5167\u5fc3\u7684\u6050\u61fc\u8207\u77db\u76fe\u3002\u9019\u7a2e\u8003\u9a57\u65e2\u662f\u5c0d\u500b\u4eba\u80fd\u529b\u7684\u6311\u6230\uff0c\u4e5f\u662f\u6574\u500b\u6848\u4ef6\u6df1\u5c64\u771f\u76f8\u7684\u4e00\u90e8\u5206\u3002",hint:"\u771f\u76f8\u5f80\u5f80\u9700\u8981\u9762\u5c0d\u81ea\u5df1"}]}],S=[{text:"\u7b2c\u4e00\u500b\u6311\u6230\uff1a\u4e00\u9663\u5bd2\u610f\u8972\u4f86\uff01\u5feb\u901f\u9ede\u64ca\u6309\u9215\u9a45\u6563\u9019\u7a2e\u4e0d\u5b89\u611f...",position:"top"},{text:"\u7b2c\u4e8c\u500b\u6311\u6230\uff1a\u5167\u5fc3\u7684\u8072\u97f3\u8d8a\u4f86\u8d8a\u6e05\u6670\uff0c\u9ede\u64ca\u6309\u9215\u8046\u807d\u9019\u500b\u8072\u97f3...",position:"middle"},{text:"\u6700\u5f8c\u7684\u6311\u6230\uff1a\u771f\u76f8\u5c31\u5728\u773c\u524d\uff0c\u9ede\u64ca\u6309\u9215\u76f4\u9762\u9019\u500b\u7b54\u6848...",position:"bottom"}];return(0,mn.jsxs)(Ca,{children:[(0,mn.jsx)(Ea,{children:"\u7b2c\u4e09\u7ae0\uff1a\u56f0\u5c40\u4e4b\u4e2d"}),(0,mn.jsx)(_a,{children:"\u5f35\u8861\u7684\u684c\u4e0a\u5806\u6eff\u4e86\u7b46\u8a18\u3001\u533f\u540d\u4fe1\u7684\u5f71\u672c\u4ee5\u53ca\u502a\u4e3b\u4efb\u7684\u76f8\u95dc\u6a94\u6848\uff0c\u4ed6\u7684\u8166\u6d77\u4e2d\u4e0d\u505c\u5730\u6392\u5217\u7d44\u5408\u8457\u9019\u4e9b\u7dda\u7d22\u3002 \u4f5c\u70ba\u8abf\u67e5\u8ca0\u8cac\u4eba\uff0c\u4ed6\u660e\u767d\u81ea\u5df1\u5fc5\u9808\u64b0\u5beb\u4e00\u4efd\u5177\u6709\u8aaa\u670d\u529b\u7684\u8abf\u67e5\u5831\u544a\uff0c\u7136\u800c\u6bcf\u4e00\u689d\u7dda\u7d22\u90fd\u50cf\u662f\u932f\u7d9c\u8907\u96dc\u7684\u8ff7\u5bae\uff0c \u7e3d\u8b93\u4ed6\u56de\u5230\u539f\u9ede\u3002"}),!a&&!g&&(0,mn.jsxs)(mn.Fragment,{children:[(0,mn.jsx)(Fn,{question:w[n].question,context:w[n].context,choices:w[n].choices,onChoice:e=>{if(!f){const t=w[n].choices;u(t[e].feedback),d(t[e].hint),p(!0),m(!0)}},feedback:s,hint:c,disabled:f}),h&&(0,mn.jsx)(sa,{onClick:()=>{n<w.length-1?(r(n+1),u(""),d(""),p(!1),m(!1)):o(!0)},children:"\u7e7c\u7e8c\u95b1\u8b80"})]}),a&&!g&&(0,mn.jsx)(Pa,{position:S[i].position,children:x?(0,mn.jsxs)(mn.Fragment,{children:[(0,mn.jsx)(_a,{style:{textAlign:"center",marginBottom:"30px"},children:"\u8abf\u67e5\u904e\u7a0b\u4e2d\u7684\u58d3\u529b\u8b93\u5f35\u8861\u66ab\u6642\u9000\u7e2e\u4e86\uff0c\u4f46\u4ed6\u77e5\u9053\u5fc5\u9808\u7e7c\u7e8c\u524d\u9032..."}),(0,mn.jsx)(ja,{onClick:()=>{y([!1,!1,!1]),l(0),k(!1)},children:"\u91cd\u65b0\u6311\u6230"})]}):(0,mn.jsxs)(mn.Fragment,{children:[(0,mn.jsxs)(_a,{style:{textAlign:"center",marginBottom:"30px"},children:[0===i&&"\u7576\u5f35\u8861\u6df1\u5165\u8abf\u67e5\u6642\uff0c\u7a81\u7136\u611f\u53d7\u5230\u4e00\u80a1\u83ab\u540d\u7684\u58d3\u529b...",1===i&&"\u96a8\u8457\u8abf\u67e5\u6df1\u5165\uff0c\u66f4\u591a\u4e0d\u5b89\u7684\u611f\u89ba\u6e67\u4e0a\u5fc3\u982d...",2===i&&"\u5728\u6700\u5f8c\u95dc\u982d\uff0c\u771f\u76f8\u4f3c\u4e4e\u5c31\u5728\u773c\u524d..."]}),(0,mn.jsx)(Sa,{prompt:S[i].text,timeLimit:3e3,onComplete:e=>{if(e){const e=[...v];e[i]=!0,y(e),i<2?setTimeout((()=>{l(i+1),k(!1)}),1e3):setTimeout((()=>{b(!0),o(!1),localStorage.setItem("chapter3Complete","true")}),1e3)}else setTimeout((()=>{k(!0)}),500)}},i),(0,mn.jsx)(_a,{style:{textAlign:"center",marginTop:"20px",color:"#888"},children:`\u6311\u6230 ${i+1}/3`})]})}),g&&(0,mn.jsxs)(mn.Fragment,{children:[(0,mn.jsx)(_a,{children:"\u5f35\u8861\u6574\u7406\u5b8c\u521d\u6b65\u7684\u8abf\u67e5\u5831\u544a\uff0c\u7d50\u8ad6\u986f\u793a\u502a\u4e3b\u4efb\u7684\u5931\u8e64\u5145\u6eff\u4e86\u77db\u76fe\uff1a\u533f\u540d\u4fe1\u7121\u6cd5\u5b8c\u5168\u7ad9\u5f97\u4f4f\u8173\uff0c \u4f46\u5176\u4e2d\u63d0\u5230\u7684\u6b0a\u529b\u64cd\u63a7\u624b\u6bb5\uff0c\u537b\u5728\u591a\u65b9\u9673\u8ff0\u4e2d\u6709\u8de1\u53ef\u5faa\u3002"}),(0,mn.jsx)(_a,{children:'\u5c31\u5728\u5f35\u8861\u6e96\u5099\u5c07\u5831\u544a\u63d0\u4ea4\u6642\uff0c\u4ed6\u7684\u624b\u6a5f\u7a81\u7136\u9707\u52d5\u3002\u4e00\u689d\u533f\u540d\u8a0a\u606f\u51fa\u73fe\u5728\u5c4f\u5e55\u4e0a\uff1a "\u5f35\u8861\uff0c\u8ff4\u907f\u80fd\u89e3\u6c7a\u4ec0\u9ebc\uff1f\u4f60\u8abf\u67e5\u904e\u4f60\u7684\u5167\u5fc3\u55ce?"'}),(0,mn.jsxs)(Ta,{children:[(0,mn.jsx)("h3",{children:"\u5167\u5fc3\u7684\u89ba\u9192"}),(0,mn.jsx)("p",{children:"\u5728\u9019\u4e00\u523b\uff0c\u5f35\u8861\u7d42\u65bc\u660e\u767d\u4e86\u3002\u90a3\u4e9b\u770b\u4f3c\u96f6\u6563\u7684\u7dda\u7d22\uff0c\u90a3\u4e9b\u96e3\u4ee5\u7406\u89e3\u7684\u77db\u76fe\uff0c \u90fd\u6307\u5411\u4e86\u4e00\u500b\u66f4\u6df1\u5c64\u7684\u771f\u76f8\uff1a\u6bcf\u500b\u4eba\u90fd\u5728\u5c0b\u627e\u81ea\u5df1\u7684\u7b54\u6848\uff0c\u5305\u62ec\u502a\u4e3b\u4efb\uff0c\u4e5f\u5305\u62ec\u4ed6\u81ea\u5df1\u3002"}),(0,mn.jsx)("p",{children:"\u502a\u4e3b\u4efb\u7684\u6d88\u5931\uff0c\u6216\u8a31\u4e0d\u50c5\u50c5\u662f\u4e00\u500b\u5f85\u89e3\u7684\u8b0e\u984c\uff0c\u66f4\u662f\u4e00\u9762\u93e1\u5b50\uff0c \u7167\u51fa\u4e86\u6bcf\u500b\u4eba\u5167\u5fc3\u6df1\u8655\u7684\u6050\u61fc\u8207\u6e34\u671b\u3002\u90a3\u4e9b\u5728\u591c\u665a\u51fa\u73fe\u7684\u7570\u8c61\uff0c \u662f\u5426\u6b63\u662f\u6211\u5011\u5167\u5fc3\u7684\u6295\u5c04\uff1f"}),(0,mn.jsx)("p",{children:"\u7576\u6211\u5011\u8ffd\u5c0b\u771f\u76f8\u7684\u6642\u5019\uff0c\u662f\u5426\u4e5f\u5728\u5c0b\u627e\u81ea\u5df1\uff1f\u9019\u500b\u8abf\u67e5\u5df2\u7d93\u4e0d\u518d\u662f \u95dc\u65bc\u4e00\u500b\u4eba\u7684\u5931\u8e64\uff0c\u800c\u662f\u95dc\u65bc\u6bcf\u500b\u4eba\u5982\u4f55\u9762\u5c0d\u81ea\u5df1\u5167\u5fc3\u7684\u56f0\u5883\u3002"})]}),(0,mn.jsx)(ua,{children:(0,mn.jsx)(ca,{onClick:()=>{localStorage.setItem("chapter3Complete","true"),e("/")},children:"\u7e7c\u7e8c\u6545\u4e8b"})})]})]})};function Na(){return Na=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Na.apply(null,arguments)}var Oa=["id","volume","playbackRate","soundEnabled","interrupt","onload"];const $a=function(e,r){var a,o=void 0===r?{}:r,i=o.volume,l=void 0===i?1:i,s=o.playbackRate,u=void 0===s?1:s,c=o.soundEnabled,d=void 0===c||c,f=o.interrupt,p=void 0!==f&&f,h=o.onload,m=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(o,Oa),g=t.useRef(null),b=t.useRef(!1),v=t.useState(null),y=v[0],x=v[1],k=t.useState(null),w=k[0],S=k[1],C=function(){"function"===typeof h&&h.call(this),b.current&&x(1e3*this.duration()),S(this)};a=function(){return n.e(885).then(n.t.bind(n,885,23)).then((function(t){var n;b.current||(g.current=null!==(n=t.Howl)&&void 0!==n?n:t.default.Howl,b.current=!0,new g.current(Na({src:Array.isArray(e)?e:[e],volume:l,rate:u,onload:C},m)))})),function(){b.current=!1}},(0,t.useEffect)(a,[]),t.useEffect((function(){g.current&&w&&S(new g.current(Na({src:Array.isArray(e)?e:[e],volume:l,onload:C},m)))}),[JSON.stringify(e)]),t.useEffect((function(){w&&(w.volume(l),w.rate(u))}),[w,l,u]);var E=t.useCallback((function(e){"undefined"===typeof e&&(e={}),w&&(d||e.forceSoundEnabled)&&(p&&w.stop(),e.playbackRate&&w.rate(e.playbackRate),w.play(e.id))}),[w,d,p]),_=t.useCallback((function(e){w&&w.stop(e)}),[w]),P=t.useCallback((function(e){w&&w.pause(e)}),[w]);return[E,{sound:w,stop:_,pause:P,duration:y}]},Ra=n.p+"static/media/background.247f6828a54e6c39dfdd.mp3",Ia=nn.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  color: #e0e0e0;
  font-family: 'Noto Sans TC', sans-serif;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  position: relative;
  min-height: 100vh;
  animation: ${on} 1s ease-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(224, 224, 224, 0.1);
    border-radius: 12px;
    pointer-events: none;
  }
`,Da=nn.h1`
  text-align: center;
  color: #ffffff;
  margin-bottom: 40px;
  font-size: 2.5em;
  text-shadow: ${cn};
`,La=nn.div`
  line-height: 1.8;
  margin-bottom: 30px;
  text-align: justify;
  padding: 30px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(224, 224, 224, 0.2);
  ${un}
`,Aa=nn.div`
  text-align: center;
  padding: 40px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(224, 224, 224, 0.2);
  margin-bottom: 30px;
  
  h2 {
    color: #ff8888;
    margin-bottom: 20px;
  }
  
  p {
    color: #cccccc;
    line-height: 1.6;
  }
`,Fa=nn.div`
  width: 100%;
  height: 20px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin: 20px 0;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    width: ${e=>e.progress}%;
    height: 100%;
    background: linear-gradient(90deg, #88ff88, #ffff88);
    transition: width 0.5s ease;
  }
`,Ma=nn.div`
  text-align: center;
  color: #cccccc;
  margin-bottom: 10px;
`,Ua=()=>{const e=ee(),[n,r]=(0,t.useState)(!1),[a,o]=(0,t.useState)(0);(0,t.useEffect)((()=>{const e=[1,2,3,4,5,6].filter((e=>"true"===localStorage.getItem(`chapter${e}Complete`))),t=e.length/6*100;o(t),6===e.length&&r(!0)}),[]);return(0,mn.jsxs)(Ia,{children:[(0,mn.jsx)(Da,{children:"\u771f\u76f8\u7684\u7d42\u9ede"}),n?(0,mn.jsxs)(La,{children:[(0,mn.jsx)("p",{children:"\u5728\u5b8c\u6210\u6240\u6709\u7ae0\u7bc0\u7684\u63a2\u7d22\u5f8c\uff0c\u5f35\u8861\u7d42\u65bc\u7406\u89e3\u4e86\u6574\u500b\u4e8b\u4ef6\u7684\u771f\u76f8\u3002\u9019\u4e0d\u50c5\u50c5\u662f\u4e00\u500b\u95dc\u65bc\u6b0a\u529b\u3001\u63a7\u5236\u8207\u81ea\u7531\u7684\u5bd3\u8a00\uff0c\u66f4\u662f\u4e00\u500b\u95dc\u65bc\u81ea\u6211\u89ba\u9192\u8207\u5167\u5fc3\u6399\u624e\u7684\u6b98\u9177\u6545\u4e8b\u3002 \u96a8\u8457\u4e00\u689d\u689d\u7dda\u7d22\u9010\u6f38\u62fc\u6e4a\u6210\u771f\u76f8\u7684\u5168\u666f\uff0c\u4ed6\u767c\u73fe\uff0c\u90a3\u4e9b\u5728\u591c\u665a\u4e2d\u5f98\u5f8a\u7684\u6a21\u7cca\u5f71\u5b50\uff0c\u90a3\u4e9b\u4e0d\u65b7\u5728\u5fc3\u982d\u8ff4\u76ea\u7684\u4f4e\u8a9e\uff0c\u7adf\u7121\u4e00\u4e0d\u5728\u6620\u7167\u8457\u4ed6\u5167\u5fc3\u6df1\u8655\u7684\u9ed1\u6697\u8207\u79d8\u5bc6\u3002"}),(0,mn.jsx)("p",{}),(0,mn.jsx)("p",{children:"\u502a\u4e3b\u4efb\u7684\u6d88\u5931\uff0c\u5f9e\u4e00\u958b\u59cb\u5c31\u50cf\u662f\u4e00\u500b\u7cbe\u5fc3\u8a2d\u8a08\u7684\u555f\u793a\u3002\u4ed6\u7528\u90a3\u53e5\u300c\u4eba\u7e3d\u8981\u9078\u64c7\u9069\u7576\u7684\u6642\u6a5f\u8207\u65b9\u5f0f\u300d\u63d0\u9192\u8457\u6bcf\u4e00\u500b\u4eba\uff0c\u903c\u8feb\u5927\u5bb6\u9762\u5c0d\u81ea\u5df1\u5167\u5fc3\u7684\u6050\u61fc\u8207\u57f7\u5ff5\u3002 \u7136\u800c\uff0c\u7576\u5f35\u8861\u8ffd\u67e5\u9019\u4e00\u5207\u6642\uff0c\u4ed6\u7d42\u65bc\u767c\u73fe\uff0c\u81ea\u5df1\u5728\u7121\u6578\u6b21\u51b7\u975c\u5206\u6790\u3001\u5728\u6bcf\u4e00\u500b\u770b\u4f3c\u5ba2\u89c0\u7684\u7d30\u7bc0\u4e2d\uff0c\u5176\u5be6\u65e9\u5df2\u88ab\u90a3\u7121\u5f62\u7684\u67b7\u9396\u6240\u675f\u7e1b\u3002 \u4ed6\u9a5a\u89ba\uff0c\u81ea\u5df1\u5c0d\u771f\u76f8\u7684\u8ffd\u554f\uff0c\u6b63\u662f\u6e90\u65bc\u5c0d\u904e\u53bb\u7121\u6cd5\u91cb\u61f7\u7684\u7f6a\u759a\u2014\u2014\u90a3\u4e00\u591c\uff0c\u8fa6\u516c\u5ba4\u4e2d\u6fc0\u70c8\u7684\u722d\u5435\u3001\u90a3\u8072\u96e3\u4ee5\u907a\u5fd8\u7684\u5931\u63a7\u3002 \u6b63\u662f\u5f35\u8861\u81ea\u5df1\uff0c\u89aa\u624b\u7d42\u7d50\u4e86\u502a\u4e3b\u4efb\u7684\u5b58\u5728\u3002"}),(0,mn.jsx)("p",{}),(0,mn.jsx)("p",{children:"\u5728\u9019\u500b\u5145\u6eff\u58d3\u8feb\u8207\u77db\u76fe\u7684\u6b0a\u529b\u7d50\u69cb\u4e2d\uff0c\u5f35\u8861\u958b\u59cb\u660e\u767d\uff1a\u4ed6\u81ea\u5df1\u4e00\u76f4\u90fd\u662f\u90a3\u500b\u88ab\u5ffd\u8996\u7684\u68cb\u5b50\uff0c\u4ea6\u6216\u662f\u90a3\u9ed1\u6697\u4e2d\u771f\u6b63\u7684\u64cd\u7e31\u8005\u3002 \u4ed6\u7684\u6bcf\u4e00\u6b21\u6c7a\u7b56\u3001\u6bcf\u4e00\u500b\u7591\u60d1\u8207\u53cd\u6297\uff0c\u7121\u4e0d\u5c07\u4ed6\u63a8\u5411\u4e00\u500b\u6b98\u9177\u7684\u908a\u7de3\u3002 \u7576\u6240\u6709\u7684\u8b0e\u984c\u6700\u7d42\u89e3\u69cb\uff0c\u90a3\u4e9b\u770b\u4f3c\u771f\u5be6\u7684\u7dda\u7d22\u7adf\u9010\u6f38\u6307\u5411\u4e00\u500b\u4ee4\u4eba\u9707\u9a5a\u7684\u4e8b\u5be6\u2014\u2014\u4ed6\uff0c\u5c31\u662f\u90a3\u4f4d\u5728\u6df1\u591c\u4e2d\u89aa\u624b\u63a9\u84cb\u771f\u76f8\u7684\u4eba\uff0c\u662f\u90a3\u500b\u8b93\u6b0a\u529b\u6a5f\u5236\u7121\u6cd5\u81ea\u62d4\u7684\u7f6a\u9b41\u798d\u9996\u3002 \u800c\u5982\u4eca\uff0c\u7576\u8b66\u65b9\u7121\u6cd5\u5c0b\u7372\u502a\u4e3b\u4efb\u7684\u8e64\u8de1\uff0c\u516c\u53f8\u7684\u8abf\u67e5\u4ee5\u66e0\u8077\u8349\u8349\u7d50\u6848\uff0c\u51b7\u6de1\u800c\u8a6d\u8b4e\u7684\u9ad8\u5c64\u6700\u7d42\u9078\u64c7\u4ee5\u5f62\u5f0f\u4e0a\u7684\u7dec\u61f7\u6703\u4f86\u5e73\u606f\u98a8\u6ce2\u6642\uff0c\u5f35\u8861\u5167\u5fc3\u90a3\u4efd\u51b0\u51b7\u7684\u89ba\u9192\u5df2\u7d93\u6084\u7136\u840c\u751f\u3002 \u4ed6\u4e0d\u518d\u50c5\u50c5\u662f\u90a3\u4f4d\u9ed8\u9ed8\u8ffd\u5c0b\u771f\u76f8\u7684\u8abf\u67e5\u54e1\uff0c\u800c\u662f\u9010\u6f38\u63a5\u904e\u4e86\u502a\u4e3b\u4efb\u7559\u7d66\u9019\u500b\u6a5f\u69cb\u7684\u6b0a\u529b\u706b\u70ac\uff0c\u6210\u70ba\u65b0\u7684\u502a\u4e3b\u4efb\u2014\u2014\u4e00\u4f4d\u61c2\u5f97\u5728\u77db\u76fe\u8207\u9ed1\u6697\u4e2d\u6399\u624e\uff0c\u537b\u53c8\u5728\u5fc5\u8981\u6642\u523b\u679c\u65b7\u9762\u5c0d\u73fe\u5be6\u7684\u638c\u63a7\u8005\u3002"}),(0,mn.jsx)("p",{}),(0,mn.jsx)("p",{children:"\u9019\u500b\u6545\u4e8b\u544a\u8a34\u6211\u5011\uff0c\u6709\u6642\u5019\uff0c\u6700\u5927\u7684\u8b0e\u984c\u4e0d\u662f\u5916\u5728\u7684\u771f\u76f8\uff0c \u800c\u662f\u6211\u5011\u5982\u4f55\u9762\u5c0d\u5167\u5fc3\u7684\u6050\u61fc\u8207\u6e34\u671b\u3002\u7576\u6240\u6709\u77db\u76fe\u8207\u58d3\u8feb\u5316\u4f5c\u4e0d\u53ef\u8a00\u8aaa\u7684\u7f6a\u759a\u8207\u9078\u64c7\uff0c\u552f\u6709\u5728\u90a3\u7121\u6578\u6b21\u81ea\u6211\u5be9\u8996\u8207\u6289\u64c7\u4e4b\u4e2d\uff0c\u624d\u80fd\u771f\u6b63\u9818\u609f\u5230\u2014\u2014\u81ea\u7531\u5f9e\u4f86\u4e0d\u5728\u65bc\u5916\u5728\u7684\u675f\u7e1b\uff0c\u800c\u5728\u65bc\u5167\u5fc3\u7684\u89ba\u9192\u3002 \u6b63\u5982\u90a3\u4e0d\u65b7\u56de\u8569\u7684\u4f4e\u8a9e\uff1a\u300c\u6709\u6182\u6709\u6016\uff0c\u4eba\u751f\u624d\u6709\u6ecb\u5473\u300d\uff0c \u6700\u7d42\uff0c\u5728\u9019\u7121\u76e1\u7684\u8b0e\u984c\u4e2d\uff0c\u5f35\u8861\u7528\u81ea\u5df1\u7684\u65b9\u5f0f\uff0c\u5b8c\u6210\u4e86\u4e00\u5834\u95dc\u65bc\u771f\u76f8\u3001\u7f6a\u60e1\u8207\u6551\u8d16\u7684\u6b98\u9177\u6dec\u934a\u3002"})]}):(0,mn.jsx)(mn.Fragment,{children:(0,mn.jsxs)(Aa,{children:[(0,mn.jsx)("h2",{children:"\u7d50\u5c40\u5c1a\u672a\u89e3\u9396"}),(0,mn.jsx)("p",{children:"\u4f60\u9700\u8981\u5b8c\u6210\u6240\u6709\u7ae0\u7bc0\u624d\u80fd\u89e3\u9396\u9019\u500b\u7d50\u5c40\u3002"}),(0,mn.jsxs)(Ma,{children:["\u5b8c\u6210\u9032\u5ea6\uff1a",Math.round(a),"%"]}),(0,mn.jsx)(Fa,{progress:a}),(0,mn.jsx)("p",{children:"\u7e7c\u7e8c\u63a2\u7d22\u6545\u4e8b\uff0c\u63ed\u958b\u6240\u6709\u8b0e\u984c..."})]})}),(0,mn.jsx)("div",{style:{textAlign:"center",marginTop:"40px"},children:(0,mn.jsx)(ca,{onClick:()=>{e("/")},children:"\u8fd4\u56de\u9996\u9801"})})]})},Ba=en`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700&family=Playfair+Display:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${hn}

  #root {
    min-height: 100vh;
    background: ${rn.primary};
    padding: 20px;
    position: relative;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${rn.primary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${rn.accent}66;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${rn.accent}99;
  }
`,Wa={colors:rn,typography:pn},Ha=nn.div`
  min-height: 100vh;
  background-color: #1a1a1a;
  color: #e0e0e0;
  font-family: 'Times New Roman', serif;
`,Va=nn.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: transparent;
  border: 1px solid #e0e0e0;
  color: #e0e0e0;
  padding: 12px 24px;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s ease;
  z-index: 1000;
  min-width: 100px;
  text-align: center;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  &:hover {
    background: #e0e0e0;
    color: #1a1a1a;
  }

  &:active {
    transform: scale(0.95);
    background: #e0e0e0;
    color: #1a1a1a;
  }

  @media (max-width: 768px) {
    padding: 15px 30px;
    font-size: 1.1em;
    min-width: 120px;
    top: 15px;
    right: 15px;
  }
`;const qa=function(){const[e,n]=(0,t.useState)(!1),[r,{stop:a}]=$a(Ra,{loop:!0});return(0,mn.jsxs)(Qt,{theme:Wa,children:[(0,mn.jsx)(Ba,{}),(0,mn.jsx)(ye,{children:(0,mn.jsxs)(Ha,{children:[(0,mn.jsx)(Va,{onClick:()=>{e?a():r(),n(!e)},children:e?"\u97f3\u6a02 \u95dc":"\u97f3\u6a02 \u958b"}),(0,mn.jsxs)(ge,{children:[(0,mn.jsx)(he,{path:"/",element:(0,mn.jsx)(jn,{})}),(0,mn.jsx)(he,{path:"/chapter/2",element:(0,mn.jsx)(ma,{})}),(0,mn.jsx)(he,{path:"/chapter/3",element:(0,mn.jsx)(za,{})}),(0,mn.jsx)(he,{path:"/chapter/:chapterId",element:(0,mn.jsx)(qr,{})}),(0,mn.jsx)(he,{path:"/ending",element:(0,mn.jsx)(Ua,{})})]})]})})]})},Ka=en`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #1a1a1a;
    font-family: 'Times New Roman', serif;
  }
`;a.createRoot(document.getElementById("root")).render((0,mn.jsxs)(t.StrictMode,{children:[(0,mn.jsx)(Ka,{}),(0,mn.jsx)(qa,{})]}))})()})();
//# sourceMappingURL=main.3c3b2500.js.map