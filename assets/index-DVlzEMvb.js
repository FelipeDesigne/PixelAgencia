function z1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function $1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fv={exports:{}},ou={},pv={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uo=Symbol.for("react.element"),B1=Symbol.for("react.portal"),q1=Symbol.for("react.fragment"),W1=Symbol.for("react.strict_mode"),H1=Symbol.for("react.profiler"),K1=Symbol.for("react.provider"),G1=Symbol.for("react.context"),Q1=Symbol.for("react.forward_ref"),Y1=Symbol.for("react.suspense"),X1=Symbol.for("react.memo"),J1=Symbol.for("react.lazy"),Am=Symbol.iterator;function Z1(t){return t===null||typeof t!="object"?null:(t=Am&&t[Am]||t["@@iterator"],typeof t=="function"?t:null)}var mv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gv=Object.assign,yv={};function is(t,e,n){this.props=t,this.context=e,this.refs=yv,this.updater=n||mv}is.prototype.isReactComponent={};is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vv(){}vv.prototype=is.prototype;function Rd(t,e,n){this.props=t,this.context=e,this.refs=yv,this.updater=n||mv}var Pd=Rd.prototype=new vv;Pd.constructor=Rd;gv(Pd,is.prototype);Pd.isPureReactComponent=!0;var Cm=Array.isArray,_v=Object.prototype.hasOwnProperty,Nd={current:null},wv={key:!0,ref:!0,__self:!0,__source:!0};function Ev(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_v.call(e,r)&&!wv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Uo,type:t,key:s,ref:o,props:i,_owner:Nd.current}}function eT(t,e){return{$$typeof:Uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Uo}function tT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var km=/\/+/g;function wc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?tT(""+t.key):e.toString(36)}function Ha(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Uo:case B1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wc(o,0):r,Cm(i)?(n="",t!=null&&(n=t.replace(km,"$&/")+"/"),Ha(i,e,n,"",function(c){return c})):i!=null&&(bd(i)&&(i=eT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(km,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Cm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+wc(s,l);o+=Ha(s,e,n,u,i)}else if(u=Z1(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+wc(s,l++),o+=Ha(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xa(t,e,n){if(t==null)return t;var r=[],i=0;return Ha(t,r,"","",function(s){return e.call(n,s,i++)}),r}function nT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dt={current:null},Ka={transition:null},rT={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:Ka,ReactCurrentOwner:Nd};function Tv(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:xa,forEach:function(t,e,n){xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xa(t,function(){e++}),e},toArray:function(t){return xa(t,function(e){return e})||[]},only:function(t){if(!bd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=is;ee.Fragment=q1;ee.Profiler=H1;ee.PureComponent=Rd;ee.StrictMode=W1;ee.Suspense=Y1;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rT;ee.act=Tv;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=gv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Nd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)_v.call(e,u)&&!wv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Uo,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:G1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:K1,_context:t},t.Consumer=t};ee.createElement=Ev;ee.createFactory=function(t){var e=Ev.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:Q1,render:t}};ee.isValidElement=bd;ee.lazy=function(t){return{$$typeof:J1,_payload:{_status:-1,_result:t},_init:nT}};ee.memo=function(t,e){return{$$typeof:X1,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Ka.transition;Ka.transition={};try{t()}finally{Ka.transition=e}};ee.unstable_act=Tv;ee.useCallback=function(t,e){return dt.current.useCallback(t,e)};ee.useContext=function(t){return dt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return dt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return dt.current.useEffect(t,e)};ee.useId=function(){return dt.current.useId()};ee.useImperativeHandle=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return dt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return dt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return dt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return dt.current.useReducer(t,e,n)};ee.useRef=function(t){return dt.current.useRef(t)};ee.useState=function(t){return dt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return dt.current.useTransition()};ee.version="18.3.1";pv.exports=ee;var D=pv.exports;const iT=$1(D),sT=z1({__proto__:null,default:iT},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oT=D,aT=Symbol.for("react.element"),lT=Symbol.for("react.fragment"),uT=Object.prototype.hasOwnProperty,cT=oT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hT={key:!0,ref:!0,__self:!0,__source:!0};function xv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)uT.call(e,r)&&!hT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:aT,type:t,key:s,ref:o,props:i,_owner:cT.current}}ou.Fragment=lT;ou.jsx=xv;ou.jsxs=xv;fv.exports=ou;var d=fv.exports,Iv={exports:{}},Ct={},Sv={exports:{}},Av={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Y){var Z=$.length;$.push(Y);e:for(;0<Z;){var _e=Z-1>>>1,he=$[_e];if(0<i(he,Y))$[_e]=Y,$[Z]=he,Z=_e;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Y=$[0],Z=$.pop();if(Z!==Y){$[0]=Z;e:for(var _e=0,he=$.length,Ce=he>>>1;_e<Ce;){var un=2*(_e+1)-1,cn=$[un],hn=un+1,dn=$[hn];if(0>i(cn,Z))hn<he&&0>i(dn,cn)?($[_e]=dn,$[hn]=Z,_e=hn):($[_e]=cn,$[un]=Z,_e=un);else if(hn<he&&0>i(dn,Z))$[_e]=dn,$[hn]=Z,_e=hn;else break e}}return Y}function i($,Y){var Z=$.sortIndex-Y.sortIndex;return Z!==0?Z:$.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,g=3,_=!1,T=!1,R=!1,S=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A($){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=$)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function V($){if(R=!1,A($),!T)if(n(u)!==null)T=!0,ps(F);else{var Y=n(c);Y!==null&&ln(V,Y.startTime-$)}}function F($,Y){T=!1,R&&(R=!1,E(v),v=-1),_=!0;var Z=g;try{for(A(Y),m=n(u);m!==null&&(!(m.expirationTime>Y)||$&&!P());){var _e=m.callback;if(typeof _e=="function"){m.callback=null,g=m.priorityLevel;var he=_e(m.expirationTime<=Y);Y=t.unstable_now(),typeof he=="function"?m.callback=he:m===n(u)&&r(u),A(Y)}else r(u);m=n(u)}if(m!==null)var Ce=!0;else{var un=n(c);un!==null&&ln(V,un.startTime-Y),Ce=!1}return Ce}finally{m=null,g=Z,_=!1}}var z=!1,I=null,v=-1,x=5,C=-1;function P(){return!(t.unstable_now()-C<x)}function b(){if(I!==null){var $=t.unstable_now();C=$;var Y=!0;try{Y=I(!0,$)}finally{Y?k():(z=!1,I=null)}}else z=!1}var k;if(typeof w=="function")k=function(){w(b)};else if(typeof MessageChannel<"u"){var Rt=new MessageChannel,Nr=Rt.port2;Rt.port1.onmessage=b,k=function(){Nr.postMessage(null)}}else k=function(){S(b,0)};function ps($){I=$,z||(z=!0,k())}function ln($,Y){v=S(function(){$(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){T||_||(T=!0,ps(F))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var Z=g;g=Y;try{return $()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Y){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=g;g=$;try{return Y()}finally{g=Z}},t.unstable_scheduleCallback=function($,Y,Z){var _e=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?_e+Z:_e):Z=_e,$){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=Z+he,$={id:f++,callback:Y,priorityLevel:$,startTime:Z,expirationTime:he,sortIndex:-1},Z>_e?($.sortIndex=Z,e(c,$),n(u)===null&&$===n(c)&&(R?(E(v),v=-1):R=!0,ln(V,Z-_e))):($.sortIndex=he,e(u,$),T||_||(T=!0,ps(F))),$},t.unstable_shouldYield=P,t.unstable_wrapCallback=function($){var Y=g;return function(){var Z=g;g=Y;try{return $.apply(this,arguments)}finally{g=Z}}}})(Av);Sv.exports=Av;var dT=Sv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fT=D,At=dT;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cv=new Set,lo={};function ii(t,e){Bi(t,e),Bi(t+"Capture",e)}function Bi(t,e){for(lo[t]=e,t=0;t<e.length;t++)Cv.add(e[t])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sh=Object.prototype.hasOwnProperty,pT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rm={},Pm={};function mT(t){return sh.call(Pm,t)?!0:sh.call(Rm,t)?!1:pT.test(t)?Pm[t]=!0:(Rm[t]=!0,!1)}function gT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function yT(t,e,n,r){if(e===null||typeof e>"u"||gT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ft(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dd=/[\-:]([a-z])/g;function Od(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dd,Od);Ke[e]=new ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dd,Od);Ke[e]=new ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dd,Od);Ke[e]=new ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new ft(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vd(t,e,n,r){var i=Ke.hasOwnProperty(e)?Ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yT(e,n,i,r)&&(n=null),r||i===null?mT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ln=fT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ia=Symbol.for("react.element"),wi=Symbol.for("react.portal"),Ei=Symbol.for("react.fragment"),Ld=Symbol.for("react.strict_mode"),oh=Symbol.for("react.profiler"),kv=Symbol.for("react.provider"),Rv=Symbol.for("react.context"),jd=Symbol.for("react.forward_ref"),ah=Symbol.for("react.suspense"),lh=Symbol.for("react.suspense_list"),Md=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),Pv=Symbol.for("react.offscreen"),Nm=Symbol.iterator;function ks(t){return t===null||typeof t!="object"?null:(t=Nm&&t[Nm]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,Ec;function js(t){if(Ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ec=e&&e[1]||""}return`
`+Ec+t}var Tc=!1;function xc(t,e){if(!t||Tc)return"";Tc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Tc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?js(t):""}function vT(t){switch(t.tag){case 5:return js(t.type);case 16:return js("Lazy");case 13:return js("Suspense");case 19:return js("SuspenseList");case 0:case 2:case 15:return t=xc(t.type,!1),t;case 11:return t=xc(t.type.render,!1),t;case 1:return t=xc(t.type,!0),t;default:return""}}function uh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ei:return"Fragment";case wi:return"Portal";case oh:return"Profiler";case Ld:return"StrictMode";case ah:return"Suspense";case lh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Rv:return(t.displayName||"Context")+".Consumer";case kv:return(t._context.displayName||"Context")+".Provider";case jd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Md:return e=t.displayName||null,e!==null?e:uh(t.type)||"Memo";case qn:e=t._payload,t=t._init;try{return uh(t(e))}catch{}}return null}function _T(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uh(e);case 8:return e===Ld?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wT(t){var e=Nv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sa(t){t._valueTracker||(t._valueTracker=wT(t))}function bv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Nv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ch(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dv(t,e){e=e.checked,e!=null&&Vd(t,"checked",e,!1)}function hh(t,e){Dv(t,e);var n=gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?dh(t,e.type,n):e.hasOwnProperty("defaultValue")&&dh(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function dh(t,e,n){(e!=="number"||gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ms=Array.isArray;function Di(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function fh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Om(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(Ms(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function Ov(t,e){var n=gr(e.value),r=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ph(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Aa,Lv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Aa=Aa||document.createElement("div"),Aa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Aa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ks={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ET=["Webkit","ms","Moz","O"];Object.keys(Ks).forEach(function(t){ET.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ks[e]=Ks[t]})});function jv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ks.hasOwnProperty(t)&&Ks[t]?(""+e).trim():e+"px"}function Mv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var TT=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mh(t,e){if(e){if(TT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function gh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yh=null;function Fd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vh=null,Oi=null,Vi=null;function Lm(t){if(t=Bo(t)){if(typeof vh!="function")throw Error(M(280));var e=t.stateNode;e&&(e=hu(e),vh(t.stateNode,t.type,e))}}function Fv(t){Oi?Vi?Vi.push(t):Vi=[t]:Oi=t}function Uv(){if(Oi){var t=Oi,e=Vi;if(Vi=Oi=null,Lm(t),e)for(t=0;t<e.length;t++)Lm(e[t])}}function zv(t,e){return t(e)}function $v(){}var Ic=!1;function Bv(t,e,n){if(Ic)return t(e,n);Ic=!0;try{return zv(t,e,n)}finally{Ic=!1,(Oi!==null||Vi!==null)&&($v(),Uv())}}function co(t,e){var n=t.stateNode;if(n===null)return null;var r=hu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var _h=!1;if(An)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){_h=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{_h=!1}function xT(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Gs=!1,yl=null,vl=!1,wh=null,IT={onError:function(t){Gs=!0,yl=t}};function ST(t,e,n,r,i,s,o,l,u){Gs=!1,yl=null,xT.apply(IT,arguments)}function AT(t,e,n,r,i,s,o,l,u){if(ST.apply(this,arguments),Gs){if(Gs){var c=yl;Gs=!1,yl=null}else throw Error(M(198));vl||(vl=!0,wh=c)}}function si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function qv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jm(t){if(si(t)!==t)throw Error(M(188))}function CT(t){var e=t.alternate;if(!e){if(e=si(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return jm(i),t;if(s===r)return jm(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function Wv(t){return t=CT(t),t!==null?Hv(t):null}function Hv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hv(t);if(e!==null)return e;t=t.sibling}return null}var Kv=At.unstable_scheduleCallback,Mm=At.unstable_cancelCallback,kT=At.unstable_shouldYield,RT=At.unstable_requestPaint,Re=At.unstable_now,PT=At.unstable_getCurrentPriorityLevel,Ud=At.unstable_ImmediatePriority,Gv=At.unstable_UserBlockingPriority,_l=At.unstable_NormalPriority,NT=At.unstable_LowPriority,Qv=At.unstable_IdlePriority,au=null,Zt=null;function bT(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(au,t,void 0,(t.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:VT,DT=Math.log,OT=Math.LN2;function VT(t){return t>>>=0,t===0?32:31-(DT(t)/OT|0)|0}var Ca=64,ka=4194304;function Fs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Fs(l):(s&=o,s!==0&&(r=Fs(s)))}else o=n&~i,o!==0?r=Fs(o):s!==0&&(r=Fs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bt(e),i=1<<n,r|=t[n],e&=~i;return r}function LT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=LT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Eh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yv(){var t=Ca;return Ca<<=1,!(Ca&4194240)&&(Ca=64),t}function Sc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bt(e),t[e]=n}function MT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function Xv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Jv,$d,Zv,e0,t0,Th=!1,Ra=[],rr=null,ir=null,sr=null,ho=new Map,fo=new Map,Hn=[],FT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fm(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(e.pointerId)}}function Ps(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Bo(e),e!==null&&$d(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function UT(t,e,n,r,i){switch(e){case"focusin":return rr=Ps(rr,t,e,n,r,i),!0;case"dragenter":return ir=Ps(ir,t,e,n,r,i),!0;case"mouseover":return sr=Ps(sr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ho.set(s,Ps(ho.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fo.set(s,Ps(fo.get(s)||null,t,e,n,r,i)),!0}return!1}function n0(t){var e=Fr(t.target);if(e!==null){var n=si(e);if(n!==null){if(e=n.tag,e===13){if(e=qv(n),e!==null){t.blockedOn=e,t0(t.priority,function(){Zv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ga(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);yh=r,n.target.dispatchEvent(r),yh=null}else return e=Bo(n),e!==null&&$d(e),t.blockedOn=n,!1;e.shift()}return!0}function Um(t,e,n){Ga(t)&&n.delete(e)}function zT(){Th=!1,rr!==null&&Ga(rr)&&(rr=null),ir!==null&&Ga(ir)&&(ir=null),sr!==null&&Ga(sr)&&(sr=null),ho.forEach(Um),fo.forEach(Um)}function Ns(t,e){t.blockedOn===e&&(t.blockedOn=null,Th||(Th=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,zT)))}function po(t){function e(i){return Ns(i,t)}if(0<Ra.length){Ns(Ra[0],t);for(var n=1;n<Ra.length;n++){var r=Ra[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rr!==null&&Ns(rr,t),ir!==null&&Ns(ir,t),sr!==null&&Ns(sr,t),ho.forEach(e),fo.forEach(e),n=0;n<Hn.length;n++)r=Hn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)n0(n),n.blockedOn===null&&Hn.shift()}var Li=Ln.ReactCurrentBatchConfig,El=!0;function $T(t,e,n,r){var i=ue,s=Li.transition;Li.transition=null;try{ue=1,Bd(t,e,n,r)}finally{ue=i,Li.transition=s}}function BT(t,e,n,r){var i=ue,s=Li.transition;Li.transition=null;try{ue=4,Bd(t,e,n,r)}finally{ue=i,Li.transition=s}}function Bd(t,e,n,r){if(El){var i=xh(t,e,n,r);if(i===null)Vc(t,e,r,Tl,n),Fm(t,r);else if(UT(i,t,e,n,r))r.stopPropagation();else if(Fm(t,r),e&4&&-1<FT.indexOf(t)){for(;i!==null;){var s=Bo(i);if(s!==null&&Jv(s),s=xh(t,e,n,r),s===null&&Vc(t,e,r,Tl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Vc(t,e,r,null,n)}}var Tl=null;function xh(t,e,n,r){if(Tl=null,t=Fd(r),t=Fr(t),t!==null)if(e=si(t),e===null)t=null;else if(n=e.tag,n===13){if(t=qv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tl=t,null}function r0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(PT()){case Ud:return 1;case Gv:return 4;case _l:case NT:return 16;case Qv:return 536870912;default:return 16}default:return 16}}var Zn=null,qd=null,Qa=null;function i0(){if(Qa)return Qa;var t,e=qd,n=e.length,r,i="value"in Zn?Zn.value:Zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Qa=i.slice(t,1<r?1-r:void 0)}function Ya(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pa(){return!0}function zm(){return!1}function kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Pa:zm,this.isPropagationStopped=zm,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pa)},persist:function(){},isPersistent:Pa}),e}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wd=kt(ss),$o=xe({},ss,{view:0,detail:0}),qT=kt($o),Ac,Cc,bs,lu=xe({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bs&&(bs&&t.type==="mousemove"?(Ac=t.screenX-bs.screenX,Cc=t.screenY-bs.screenY):Cc=Ac=0,bs=t),Ac)},movementY:function(t){return"movementY"in t?t.movementY:Cc}}),$m=kt(lu),WT=xe({},lu,{dataTransfer:0}),HT=kt(WT),KT=xe({},$o,{relatedTarget:0}),kc=kt(KT),GT=xe({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),QT=kt(GT),YT=xe({},ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),XT=kt(YT),JT=xe({},ss,{data:0}),Bm=kt(JT),ZT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tx[t])?!!e[t]:!1}function Hd(){return nx}var rx=xe({},$o,{key:function(t){if(t.key){var e=ZT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ya(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ex[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hd,charCode:function(t){return t.type==="keypress"?Ya(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ya(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ix=kt(rx),sx=xe({},lu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qm=kt(sx),ox=xe({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hd}),ax=kt(ox),lx=xe({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),ux=kt(lx),cx=xe({},lu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hx=kt(cx),dx=[9,13,27,32],Kd=An&&"CompositionEvent"in window,Qs=null;An&&"documentMode"in document&&(Qs=document.documentMode);var fx=An&&"TextEvent"in window&&!Qs,s0=An&&(!Kd||Qs&&8<Qs&&11>=Qs),Wm=" ",Hm=!1;function o0(t,e){switch(t){case"keyup":return dx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function a0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ti=!1;function px(t,e){switch(t){case"compositionend":return a0(e);case"keypress":return e.which!==32?null:(Hm=!0,Wm);case"textInput":return t=e.data,t===Wm&&Hm?null:t;default:return null}}function mx(t,e){if(Ti)return t==="compositionend"||!Kd&&o0(t,e)?(t=i0(),Qa=qd=Zn=null,Ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return s0&&e.locale!=="ko"?null:e.data;default:return null}}var gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Km(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gx[t.type]:e==="textarea"}function l0(t,e,n,r){Fv(r),e=xl(e,"onChange"),0<e.length&&(n=new Wd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ys=null,mo=null;function yx(t){_0(t,0)}function uu(t){var e=Si(t);if(bv(e))return t}function vx(t,e){if(t==="change")return e}var u0=!1;if(An){var Rc;if(An){var Pc="oninput"in document;if(!Pc){var Gm=document.createElement("div");Gm.setAttribute("oninput","return;"),Pc=typeof Gm.oninput=="function"}Rc=Pc}else Rc=!1;u0=Rc&&(!document.documentMode||9<document.documentMode)}function Qm(){Ys&&(Ys.detachEvent("onpropertychange",c0),mo=Ys=null)}function c0(t){if(t.propertyName==="value"&&uu(mo)){var e=[];l0(e,mo,t,Fd(t)),Bv(yx,e)}}function _x(t,e,n){t==="focusin"?(Qm(),Ys=e,mo=n,Ys.attachEvent("onpropertychange",c0)):t==="focusout"&&Qm()}function wx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uu(mo)}function Ex(t,e){if(t==="click")return uu(e)}function Tx(t,e){if(t==="input"||t==="change")return uu(e)}function xx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wt=typeof Object.is=="function"?Object.is:xx;function go(t,e){if(Wt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sh.call(e,i)||!Wt(t[i],e[i]))return!1}return!0}function Ym(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xm(t,e){var n=Ym(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ym(n)}}function h0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?h0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function d0(){for(var t=window,e=gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gl(t.document)}return e}function Gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ix(t){var e=d0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&h0(n.ownerDocument.documentElement,n)){if(r!==null&&Gd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Xm(n,s);var o=Xm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Sx=An&&"documentMode"in document&&11>=document.documentMode,xi=null,Ih=null,Xs=null,Sh=!1;function Jm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sh||xi==null||xi!==gl(r)||(r=xi,"selectionStart"in r&&Gd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xs&&go(Xs,r)||(Xs=r,r=xl(Ih,"onSelect"),0<r.length&&(e=new Wd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=xi)))}function Na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ii={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},Nc={},f0={};An&&(f0=document.createElement("div").style,"AnimationEvent"in window||(delete Ii.animationend.animation,delete Ii.animationiteration.animation,delete Ii.animationstart.animation),"TransitionEvent"in window||delete Ii.transitionend.transition);function cu(t){if(Nc[t])return Nc[t];if(!Ii[t])return t;var e=Ii[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in f0)return Nc[t]=e[n];return t}var p0=cu("animationend"),m0=cu("animationiteration"),g0=cu("animationstart"),y0=cu("transitionend"),v0=new Map,Zm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){v0.set(t,e),ii(e,[t])}for(var bc=0;bc<Zm.length;bc++){var Dc=Zm[bc],Ax=Dc.toLowerCase(),Cx=Dc[0].toUpperCase()+Dc.slice(1);Tr(Ax,"on"+Cx)}Tr(p0,"onAnimationEnd");Tr(m0,"onAnimationIteration");Tr(g0,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(y0,"onTransitionEnd");Bi("onMouseEnter",["mouseout","mouseover"]);Bi("onMouseLeave",["mouseout","mouseover"]);Bi("onPointerEnter",["pointerout","pointerover"]);Bi("onPointerLeave",["pointerout","pointerover"]);ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Us));function eg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,AT(r,e,void 0,t),t.currentTarget=null}function _0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;eg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;eg(i,l,c),s=u}}}if(vl)throw t=wh,vl=!1,wh=null,t}function me(t,e){var n=e[Ph];n===void 0&&(n=e[Ph]=new Set);var r=t+"__bubble";n.has(r)||(w0(e,t,2,!1),n.add(r))}function Oc(t,e,n){var r=0;e&&(r|=4),w0(n,t,r,e)}var ba="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[ba]){t[ba]=!0,Cv.forEach(function(n){n!=="selectionchange"&&(kx.has(n)||Oc(n,!1,t),Oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ba]||(e[ba]=!0,Oc("selectionchange",!1,e))}}function w0(t,e,n,r){switch(r0(e)){case 1:var i=$T;break;case 4:i=BT;break;default:i=Bd}n=i.bind(null,e,n,t),i=void 0,!_h||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Vc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Fr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Bv(function(){var c=s,f=Fd(n),m=[];e:{var g=v0.get(t);if(g!==void 0){var _=Wd,T=t;switch(t){case"keypress":if(Ya(n)===0)break e;case"keydown":case"keyup":_=ix;break;case"focusin":T="focus",_=kc;break;case"focusout":T="blur",_=kc;break;case"beforeblur":case"afterblur":_=kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=$m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=HT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=ax;break;case p0:case m0:case g0:_=QT;break;case y0:_=ux;break;case"scroll":_=qT;break;case"wheel":_=hx;break;case"copy":case"cut":case"paste":_=XT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=qm}var R=(e&4)!==0,S=!R&&t==="scroll",E=R?g!==null?g+"Capture":null:g;R=[];for(var w=c,A;w!==null;){A=w;var V=A.stateNode;if(A.tag===5&&V!==null&&(A=V,E!==null&&(V=co(w,E),V!=null&&R.push(vo(w,V,A)))),S)break;w=w.return}0<R.length&&(g=new _(g,T,null,n,f),m.push({event:g,listeners:R}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",g&&n!==yh&&(T=n.relatedTarget||n.fromElement)&&(Fr(T)||T[Cn]))break e;if((_||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,_?(T=n.relatedTarget||n.toElement,_=c,T=T?Fr(T):null,T!==null&&(S=si(T),T!==S||T.tag!==5&&T.tag!==6)&&(T=null)):(_=null,T=c),_!==T)){if(R=$m,V="onMouseLeave",E="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(R=qm,V="onPointerLeave",E="onPointerEnter",w="pointer"),S=_==null?g:Si(_),A=T==null?g:Si(T),g=new R(V,w+"leave",_,n,f),g.target=S,g.relatedTarget=A,V=null,Fr(f)===c&&(R=new R(E,w+"enter",T,n,f),R.target=A,R.relatedTarget=S,V=R),S=V,_&&T)t:{for(R=_,E=T,w=0,A=R;A;A=gi(A))w++;for(A=0,V=E;V;V=gi(V))A++;for(;0<w-A;)R=gi(R),w--;for(;0<A-w;)E=gi(E),A--;for(;w--;){if(R===E||E!==null&&R===E.alternate)break t;R=gi(R),E=gi(E)}R=null}else R=null;_!==null&&tg(m,g,_,R,!1),T!==null&&S!==null&&tg(m,S,T,R,!0)}}e:{if(g=c?Si(c):window,_=g.nodeName&&g.nodeName.toLowerCase(),_==="select"||_==="input"&&g.type==="file")var F=vx;else if(Km(g))if(u0)F=Tx;else{F=wx;var z=_x}else(_=g.nodeName)&&_.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=Ex);if(F&&(F=F(t,c))){l0(m,F,n,f);break e}z&&z(t,g,c),t==="focusout"&&(z=g._wrapperState)&&z.controlled&&g.type==="number"&&dh(g,"number",g.value)}switch(z=c?Si(c):window,t){case"focusin":(Km(z)||z.contentEditable==="true")&&(xi=z,Ih=c,Xs=null);break;case"focusout":Xs=Ih=xi=null;break;case"mousedown":Sh=!0;break;case"contextmenu":case"mouseup":case"dragend":Sh=!1,Jm(m,n,f);break;case"selectionchange":if(Sx)break;case"keydown":case"keyup":Jm(m,n,f)}var I;if(Kd)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ti?o0(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(s0&&n.locale!=="ko"&&(Ti||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ti&&(I=i0()):(Zn=f,qd="value"in Zn?Zn.value:Zn.textContent,Ti=!0)),z=xl(c,v),0<z.length&&(v=new Bm(v,t,null,n,f),m.push({event:v,listeners:z}),I?v.data=I:(I=a0(n),I!==null&&(v.data=I)))),(I=fx?px(t,n):mx(t,n))&&(c=xl(c,"onBeforeInput"),0<c.length&&(f=new Bm("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=I))}_0(m,e)})}function vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=co(t,n),s!=null&&r.unshift(vo(t,s,i)),s=co(t,e),s!=null&&r.push(vo(t,s,i))),t=t.return}return r}function gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function tg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=co(n,s),u!=null&&o.unshift(vo(n,u,l))):i||(u=co(n,s),u!=null&&o.push(vo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Rx=/\r\n?/g,Px=/\u0000|\uFFFD/g;function ng(t){return(typeof t=="string"?t:""+t).replace(Rx,`
`).replace(Px,"")}function Da(t,e,n){if(e=ng(e),ng(t)!==e&&n)throw Error(M(425))}function Il(){}var Ah=null,Ch=null;function kh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rh=typeof setTimeout=="function"?setTimeout:void 0,Nx=typeof clearTimeout=="function"?clearTimeout:void 0,rg=typeof Promise=="function"?Promise:void 0,bx=typeof queueMicrotask=="function"?queueMicrotask:typeof rg<"u"?function(t){return rg.resolve(null).then(t).catch(Dx)}:Rh;function Dx(t){setTimeout(function(){throw t})}function Lc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),po(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);po(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ig(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),Yt="__reactFiber$"+os,_o="__reactProps$"+os,Cn="__reactContainer$"+os,Ph="__reactEvents$"+os,Ox="__reactListeners$"+os,Vx="__reactHandles$"+os;function Fr(t){var e=t[Yt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cn]||n[Yt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ig(t);t!==null;){if(n=t[Yt])return n;t=ig(t)}return e}t=n,n=t.parentNode}return null}function Bo(t){return t=t[Yt]||t[Cn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Si(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function hu(t){return t[_o]||null}var Nh=[],Ai=-1;function xr(t){return{current:t}}function ye(t){0>Ai||(t.current=Nh[Ai],Nh[Ai]=null,Ai--)}function fe(t,e){Ai++,Nh[Ai]=t.current,t.current=e}var yr={},ot=xr(yr),yt=xr(!1),Kr=yr;function qi(t,e){var n=t.type.contextTypes;if(!n)return yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function Sl(){ye(yt),ye(ot)}function sg(t,e,n){if(ot.current!==yr)throw Error(M(168));fe(ot,e),fe(yt,n)}function E0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,_T(t)||"Unknown",i));return xe({},n,r)}function Al(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,Kr=ot.current,fe(ot,t),fe(yt,yt.current),!0}function og(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=E0(t,e,Kr),r.__reactInternalMemoizedMergedChildContext=t,ye(yt),ye(ot),fe(ot,t)):ye(yt),fe(yt,n)}var yn=null,du=!1,jc=!1;function T0(t){yn===null?yn=[t]:yn.push(t)}function Lx(t){du=!0,T0(t)}function Ir(){if(!jc&&yn!==null){jc=!0;var t=0,e=ue;try{var n=yn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yn=null,du=!1}catch(i){throw yn!==null&&(yn=yn.slice(t+1)),Kv(Ud,Ir),i}finally{ue=e,jc=!1}}return null}var Ci=[],ki=0,Cl=null,kl=0,Pt=[],Nt=0,Gr=null,vn=1,_n="";function Lr(t,e){Ci[ki++]=kl,Ci[ki++]=Cl,Cl=t,kl=e}function x0(t,e,n){Pt[Nt++]=vn,Pt[Nt++]=_n,Pt[Nt++]=Gr,Gr=t;var r=vn;t=_n;var i=32-Bt(r)-1;r&=~(1<<i),n+=1;var s=32-Bt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vn=1<<32-Bt(e)+i|n<<i|r,_n=s+t}else vn=1<<s|n<<i|r,_n=t}function Qd(t){t.return!==null&&(Lr(t,1),x0(t,1,0))}function Yd(t){for(;t===Cl;)Cl=Ci[--ki],Ci[ki]=null,kl=Ci[--ki],Ci[ki]=null;for(;t===Gr;)Gr=Pt[--Nt],Pt[Nt]=null,_n=Pt[--Nt],Pt[Nt]=null,vn=Pt[--Nt],Pt[Nt]=null}var St=null,xt=null,ve=!1,$t=null;function I0(t,e){var n=bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ag(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,St=t,xt=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,St=t,xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:vn,overflow:_n}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,St=t,xt=null,!0):!1;default:return!1}}function bh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Dh(t){if(ve){var e=xt;if(e){var n=e;if(!ag(t,e)){if(bh(t))throw Error(M(418));e=or(n.nextSibling);var r=St;e&&ag(t,e)?I0(r,n):(t.flags=t.flags&-4097|2,ve=!1,St=t)}}else{if(bh(t))throw Error(M(418));t.flags=t.flags&-4097|2,ve=!1,St=t}}}function lg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function Oa(t){if(t!==St)return!1;if(!ve)return lg(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kh(t.type,t.memoizedProps)),e&&(e=xt)){if(bh(t))throw S0(),Error(M(418));for(;e;)I0(t,e),e=or(e.nextSibling)}if(lg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xt=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xt=null}}else xt=St?or(t.stateNode.nextSibling):null;return!0}function S0(){for(var t=xt;t;)t=or(t.nextSibling)}function Wi(){xt=St=null,ve=!1}function Xd(t){$t===null?$t=[t]:$t.push(t)}var jx=Ln.ReactCurrentBatchConfig;function Ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function Va(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ug(t){var e=t._init;return e(t._payload)}function A0(t){function e(E,w){if(t){var A=E.deletions;A===null?(E.deletions=[w],E.flags|=16):A.push(w)}}function n(E,w){if(!t)return null;for(;w!==null;)e(E,w),w=w.sibling;return null}function r(E,w){for(E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function i(E,w){return E=cr(E,w),E.index=0,E.sibling=null,E}function s(E,w,A){return E.index=A,t?(A=E.alternate,A!==null?(A=A.index,A<w?(E.flags|=2,w):A):(E.flags|=2,w)):(E.flags|=1048576,w)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,w,A,V){return w===null||w.tag!==6?(w=qc(A,E.mode,V),w.return=E,w):(w=i(w,A),w.return=E,w)}function u(E,w,A,V){var F=A.type;return F===Ei?f(E,w,A.props.children,V,A.key):w!==null&&(w.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===qn&&ug(F)===w.type)?(V=i(w,A.props),V.ref=Ds(E,w,A),V.return=E,V):(V=rl(A.type,A.key,A.props,null,E.mode,V),V.ref=Ds(E,w,A),V.return=E,V)}function c(E,w,A,V){return w===null||w.tag!==4||w.stateNode.containerInfo!==A.containerInfo||w.stateNode.implementation!==A.implementation?(w=Wc(A,E.mode,V),w.return=E,w):(w=i(w,A.children||[]),w.return=E,w)}function f(E,w,A,V,F){return w===null||w.tag!==7?(w=qr(A,E.mode,V,F),w.return=E,w):(w=i(w,A),w.return=E,w)}function m(E,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return w=qc(""+w,E.mode,A),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ia:return A=rl(w.type,w.key,w.props,null,E.mode,A),A.ref=Ds(E,null,w),A.return=E,A;case wi:return w=Wc(w,E.mode,A),w.return=E,w;case qn:var V=w._init;return m(E,V(w._payload),A)}if(Ms(w)||ks(w))return w=qr(w,E.mode,A,null),w.return=E,w;Va(E,w)}return null}function g(E,w,A,V){var F=w!==null?w.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return F!==null?null:l(E,w,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ia:return A.key===F?u(E,w,A,V):null;case wi:return A.key===F?c(E,w,A,V):null;case qn:return F=A._init,g(E,w,F(A._payload),V)}if(Ms(A)||ks(A))return F!==null?null:f(E,w,A,V,null);Va(E,A)}return null}function _(E,w,A,V,F){if(typeof V=="string"&&V!==""||typeof V=="number")return E=E.get(A)||null,l(w,E,""+V,F);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Ia:return E=E.get(V.key===null?A:V.key)||null,u(w,E,V,F);case wi:return E=E.get(V.key===null?A:V.key)||null,c(w,E,V,F);case qn:var z=V._init;return _(E,w,A,z(V._payload),F)}if(Ms(V)||ks(V))return E=E.get(A)||null,f(w,E,V,F,null);Va(w,V)}return null}function T(E,w,A,V){for(var F=null,z=null,I=w,v=w=0,x=null;I!==null&&v<A.length;v++){I.index>v?(x=I,I=null):x=I.sibling;var C=g(E,I,A[v],V);if(C===null){I===null&&(I=x);break}t&&I&&C.alternate===null&&e(E,I),w=s(C,w,v),z===null?F=C:z.sibling=C,z=C,I=x}if(v===A.length)return n(E,I),ve&&Lr(E,v),F;if(I===null){for(;v<A.length;v++)I=m(E,A[v],V),I!==null&&(w=s(I,w,v),z===null?F=I:z.sibling=I,z=I);return ve&&Lr(E,v),F}for(I=r(E,I);v<A.length;v++)x=_(I,E,v,A[v],V),x!==null&&(t&&x.alternate!==null&&I.delete(x.key===null?v:x.key),w=s(x,w,v),z===null?F=x:z.sibling=x,z=x);return t&&I.forEach(function(P){return e(E,P)}),ve&&Lr(E,v),F}function R(E,w,A,V){var F=ks(A);if(typeof F!="function")throw Error(M(150));if(A=F.call(A),A==null)throw Error(M(151));for(var z=F=null,I=w,v=w=0,x=null,C=A.next();I!==null&&!C.done;v++,C=A.next()){I.index>v?(x=I,I=null):x=I.sibling;var P=g(E,I,C.value,V);if(P===null){I===null&&(I=x);break}t&&I&&P.alternate===null&&e(E,I),w=s(P,w,v),z===null?F=P:z.sibling=P,z=P,I=x}if(C.done)return n(E,I),ve&&Lr(E,v),F;if(I===null){for(;!C.done;v++,C=A.next())C=m(E,C.value,V),C!==null&&(w=s(C,w,v),z===null?F=C:z.sibling=C,z=C);return ve&&Lr(E,v),F}for(I=r(E,I);!C.done;v++,C=A.next())C=_(I,E,v,C.value,V),C!==null&&(t&&C.alternate!==null&&I.delete(C.key===null?v:C.key),w=s(C,w,v),z===null?F=C:z.sibling=C,z=C);return t&&I.forEach(function(b){return e(E,b)}),ve&&Lr(E,v),F}function S(E,w,A,V){if(typeof A=="object"&&A!==null&&A.type===Ei&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Ia:e:{for(var F=A.key,z=w;z!==null;){if(z.key===F){if(F=A.type,F===Ei){if(z.tag===7){n(E,z.sibling),w=i(z,A.props.children),w.return=E,E=w;break e}}else if(z.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===qn&&ug(F)===z.type){n(E,z.sibling),w=i(z,A.props),w.ref=Ds(E,z,A),w.return=E,E=w;break e}n(E,z);break}else e(E,z);z=z.sibling}A.type===Ei?(w=qr(A.props.children,E.mode,V,A.key),w.return=E,E=w):(V=rl(A.type,A.key,A.props,null,E.mode,V),V.ref=Ds(E,w,A),V.return=E,E=V)}return o(E);case wi:e:{for(z=A.key;w!==null;){if(w.key===z)if(w.tag===4&&w.stateNode.containerInfo===A.containerInfo&&w.stateNode.implementation===A.implementation){n(E,w.sibling),w=i(w,A.children||[]),w.return=E,E=w;break e}else{n(E,w);break}else e(E,w);w=w.sibling}w=Wc(A,E.mode,V),w.return=E,E=w}return o(E);case qn:return z=A._init,S(E,w,z(A._payload),V)}if(Ms(A))return T(E,w,A,V);if(ks(A))return R(E,w,A,V);Va(E,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,w!==null&&w.tag===6?(n(E,w.sibling),w=i(w,A),w.return=E,E=w):(n(E,w),w=qc(A,E.mode,V),w.return=E,E=w),o(E)):n(E,w)}return S}var Hi=A0(!0),C0=A0(!1),Rl=xr(null),Pl=null,Ri=null,Jd=null;function Zd(){Jd=Ri=Pl=null}function ef(t){var e=Rl.current;ye(Rl),t._currentValue=e}function Oh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ji(t,e){Pl=t,Jd=Ri=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function Vt(t){var e=t._currentValue;if(Jd!==t)if(t={context:t,memoizedValue:e,next:null},Ri===null){if(Pl===null)throw Error(M(308));Ri=t,Pl.dependencies={lanes:0,firstContext:t}}else Ri=Ri.next=t;return e}var Ur=null;function tf(t){Ur===null?Ur=[t]:Ur.push(t)}function k0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,tf(e)):(n.next=i.next,i.next=n),e.interleaved=n,kn(t,r)}function kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wn=!1;function nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function R0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kn(t,n)}return i=r.interleaved,i===null?(e.next=e,tf(r)):(e.next=i.next,i.next=e),r.interleaved=e,kn(t,n)}function Xa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zd(t,n)}}function cg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nl(t,e,n,r){var i=t.updateQueue;Wn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=c=u=null,l=s;do{var g=l.lane,_=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var T=t,R=l;switch(g=e,_=n,R.tag){case 1:if(T=R.payload,typeof T=="function"){m=T.call(_,m,g);break e}m=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=R.payload,g=typeof T=="function"?T.call(_,m,g):T,g==null)break e;m=xe({},m,g);break e;case 2:Wn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else _={eventTime:_,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=_,u=m):f=f.next=_,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=m}}function hg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var qo={},en=xr(qo),wo=xr(qo),Eo=xr(qo);function zr(t){if(t===qo)throw Error(M(174));return t}function rf(t,e){switch(fe(Eo,e),fe(wo,t),fe(en,qo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ph(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ph(e,t)}ye(en),fe(en,e)}function Ki(){ye(en),ye(wo),ye(Eo)}function P0(t){zr(Eo.current);var e=zr(en.current),n=ph(e,t.type);e!==n&&(fe(wo,t),fe(en,n))}function sf(t){wo.current===t&&(ye(en),ye(wo))}var we=xr(0);function bl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mc=[];function of(){for(var t=0;t<Mc.length;t++)Mc[t]._workInProgressVersionPrimary=null;Mc.length=0}var Ja=Ln.ReactCurrentDispatcher,Fc=Ln.ReactCurrentBatchConfig,Qr=0,Te=null,Oe=null,Fe=null,Dl=!1,Js=!1,To=0,Mx=0;function Je(){throw Error(M(321))}function af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wt(t[n],e[n]))return!1;return!0}function lf(t,e,n,r,i,s){if(Qr=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ja.current=t===null||t.memoizedState===null?$x:Bx,t=n(r,i),Js){s=0;do{if(Js=!1,To=0,25<=s)throw Error(M(301));s+=1,Fe=Oe=null,e.updateQueue=null,Ja.current=qx,t=n(r,i)}while(Js)}if(Ja.current=Ol,e=Oe!==null&&Oe.next!==null,Qr=0,Fe=Oe=Te=null,Dl=!1,e)throw Error(M(300));return t}function uf(){var t=To!==0;return To=0,t}function Qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Te.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Lt(){if(Oe===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Fe===null?Te.memoizedState:Fe.next;if(e!==null)Fe=e,Oe=t;else{if(t===null)throw Error(M(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Fe===null?Te.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function xo(t,e){return typeof e=="function"?e(t):e}function Uc(t){var e=Lt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((Qr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Te.lanes|=f,Yr|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Wt(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,Yr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zc(t){var e=Lt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Wt(s,e.memoizedState)||(gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function N0(){}function b0(t,e){var n=Te,r=Lt(),i=e(),s=!Wt(r.memoizedState,i);if(s&&(r.memoizedState=i,gt=!0),r=r.queue,cf(V0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,Io(9,O0.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(M(349));Qr&30||D0(n,e,i)}return i}function D0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function O0(t,e,n,r){e.value=n,e.getSnapshot=r,L0(e)&&j0(t)}function V0(t,e,n){return n(function(){L0(e)&&j0(t)})}function L0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wt(t,n)}catch{return!0}}function j0(t){var e=kn(t,1);e!==null&&qt(e,t,1,-1)}function dg(t){var e=Qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:t},e.queue=t,t=t.dispatch=zx.bind(null,Te,t),[e.memoizedState,t]}function Io(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function M0(){return Lt().memoizedState}function Za(t,e,n,r){var i=Qt();Te.flags|=t,i.memoizedState=Io(1|e,n,void 0,r===void 0?null:r)}function fu(t,e,n,r){var i=Lt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&af(r,o.deps)){i.memoizedState=Io(e,n,s,r);return}}Te.flags|=t,i.memoizedState=Io(1|e,n,s,r)}function fg(t,e){return Za(8390656,8,t,e)}function cf(t,e){return fu(2048,8,t,e)}function F0(t,e){return fu(4,2,t,e)}function U0(t,e){return fu(4,4,t,e)}function z0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $0(t,e,n){return n=n!=null?n.concat([t]):null,fu(4,4,z0.bind(null,e,t),n)}function hf(){}function B0(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&af(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function q0(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&af(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function W0(t,e,n){return Qr&21?(Wt(n,e)||(n=Yv(),Te.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function Fx(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=Fc.transition;Fc.transition={};try{t(!1),e()}finally{ue=n,Fc.transition=r}}function H0(){return Lt().memoizedState}function Ux(t,e,n){var r=ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},K0(t))G0(e,n);else if(n=k0(t,e,n,r),n!==null){var i=ht();qt(n,t,r,i),Q0(n,e,r)}}function zx(t,e,n){var r=ur(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(K0(t))G0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Wt(l,o)){var u=e.interleaved;u===null?(i.next=i,tf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=k0(t,e,i,r),n!==null&&(i=ht(),qt(n,t,r,i),Q0(n,e,r))}}function K0(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function G0(t,e){Js=Dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Q0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zd(t,n)}}var Ol={readContext:Vt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},$x={readContext:Vt,useCallback:function(t,e){return Qt().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:fg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Za(4194308,4,z0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Za(4194308,4,t,e)},useInsertionEffect:function(t,e){return Za(4,2,t,e)},useMemo:function(t,e){var n=Qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ux.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=Qt();return t={current:t},e.memoizedState=t},useState:dg,useDebugValue:hf,useDeferredValue:function(t){return Qt().memoizedState=t},useTransition:function(){var t=dg(!1),e=t[0];return t=Fx.bind(null,t[1]),Qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=Qt();if(ve){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),Ue===null)throw Error(M(349));Qr&30||D0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,fg(V0.bind(null,r,s,t),[t]),r.flags|=2048,Io(9,O0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Qt(),e=Ue.identifierPrefix;if(ve){var n=_n,r=vn;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=To++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Mx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Bx={readContext:Vt,useCallback:B0,useContext:Vt,useEffect:cf,useImperativeHandle:$0,useInsertionEffect:F0,useLayoutEffect:U0,useMemo:q0,useReducer:Uc,useRef:M0,useState:function(){return Uc(xo)},useDebugValue:hf,useDeferredValue:function(t){var e=Lt();return W0(e,Oe.memoizedState,t)},useTransition:function(){var t=Uc(xo)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:N0,useSyncExternalStore:b0,useId:H0,unstable_isNewReconciler:!1},qx={readContext:Vt,useCallback:B0,useContext:Vt,useEffect:cf,useImperativeHandle:$0,useInsertionEffect:F0,useLayoutEffect:U0,useMemo:q0,useReducer:zc,useRef:M0,useState:function(){return zc(xo)},useDebugValue:hf,useDeferredValue:function(t){var e=Lt();return Oe===null?e.memoizedState=t:W0(e,Oe.memoizedState,t)},useTransition:function(){var t=zc(xo)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:N0,useSyncExternalStore:b0,useId:H0,unstable_isNewReconciler:!1};function Ut(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pu={isMounted:function(t){return(t=t._reactInternals)?si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),i=ur(t),s=xn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(qt(e,t,i,r),Xa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),i=ur(t),s=xn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(qt(e,t,i,r),Xa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=ur(t),i=xn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ar(t,i,r),e!==null&&(qt(e,t,r,n),Xa(e,t,r))}};function pg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!go(n,r)||!go(i,s):!0}function Y0(t,e,n){var r=!1,i=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(i=vt(e)?Kr:ot.current,r=e.contextTypes,s=(r=r!=null)?qi(t,i):yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function mg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&pu.enqueueReplaceState(e,e.state,null)}function Lh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},nf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Vt(s):(s=vt(e)?Kr:ot.current,i.context=qi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&pu.enqueueReplaceState(i,i.state,null),Nl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Gi(t,e){try{var n="",r=e;do n+=vT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function $c(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function jh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Wx=typeof WeakMap=="function"?WeakMap:Map;function X0(t,e,n){n=xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ll||(Ll=!0,Kh=r),jh(t,e)},n}function J0(t,e,n){n=xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){jh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jh(t,e),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function gg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Wx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=sI.bind(null,t,e,n),e.then(t,t))}function yg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xn(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var Hx=Ln.ReactCurrentOwner,gt=!1;function ct(t,e,n,r){e.child=t===null?C0(e,null,n,r):Hi(e,t.child,n,r)}function _g(t,e,n,r,i){n=n.render;var s=e.ref;return ji(e,i),r=lf(t,e,n,r,s,i),n=uf(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rn(t,e,i)):(ve&&n&&Qd(e),e.flags|=1,ct(t,e,r,i),e.child)}function wg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!_f(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Z0(t,e,s,r,i)):(t=rl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:go,n(o,r)&&t.ref===e.ref)return Rn(t,e,i)}return e.flags|=1,t=cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Z0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(go(s,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,Rn(t,e,i)}return Mh(t,e,n,r,i)}function e_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Ni,Tt),Tt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(Ni,Tt),Tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(Ni,Tt),Tt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe(Ni,Tt),Tt|=r;return ct(t,e,i,n),e.child}function t_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mh(t,e,n,r,i){var s=vt(n)?Kr:ot.current;return s=qi(e,s),ji(e,i),n=lf(t,e,n,r,s,i),r=uf(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rn(t,e,i)):(ve&&r&&Qd(e),e.flags|=1,ct(t,e,n,i),e.child)}function Eg(t,e,n,r,i){if(vt(n)){var s=!0;Al(e)}else s=!1;if(ji(e,i),e.stateNode===null)el(t,e),Y0(e,n,r),Lh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vt(c):(c=vt(n)?Kr:ot.current,c=qi(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&mg(e,o,r,c),Wn=!1;var g=e.memoizedState;o.state=g,Nl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||yt.current||Wn?(typeof f=="function"&&(Vh(e,n,f,r),u=e.memoizedState),(l=Wn||pg(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,R0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Ut(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Vt(u):(u=vt(n)?Kr:ot.current,u=qi(e,u));var _=n.getDerivedStateFromProps;(f=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&mg(e,o,r,u),Wn=!1,g=e.memoizedState,o.state=g,Nl(e,r,o,i);var T=e.memoizedState;l!==m||g!==T||yt.current||Wn?(typeof _=="function"&&(Vh(e,n,_,r),T=e.memoizedState),(c=Wn||pg(e,n,c,r,g,T,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Fh(t,e,n,r,s,i)}function Fh(t,e,n,r,i,s){t_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&og(e,n,!1),Rn(t,e,s);r=e.stateNode,Hx.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Hi(e,t.child,null,s),e.child=Hi(e,null,l,s)):ct(t,e,l,s),e.memoizedState=r.state,i&&og(e,n,!0),e.child}function n_(t){var e=t.stateNode;e.pendingContext?sg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sg(t,e.context,!1),rf(t,e.containerInfo)}function Tg(t,e,n,r,i){return Wi(),Xd(i),e.flags|=256,ct(t,e,n,r),e.child}var Uh={dehydrated:null,treeContext:null,retryLane:0};function zh(t){return{baseLanes:t,cachePool:null,transitions:null}}function r_(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(we,i&1),t===null)return Dh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yu(o,r,0,null),t=qr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zh(n),e.memoizedState=Uh,t):df(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Kx(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=cr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=cr(l,s):(s=qr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?zh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Uh,r}return s=t.child,t=s.sibling,r=cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function df(t,e){return e=yu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function La(t,e,n,r){return r!==null&&Xd(r),Hi(e,t.child,null,n),t=df(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Kx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=$c(Error(M(422))),La(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=yu({mode:"visible",children:r.children},i,0,null),s=qr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Hi(e,t.child,null,o),e.child.memoizedState=zh(o),e.memoizedState=Uh,s);if(!(e.mode&1))return La(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=$c(s,r,void 0),La(t,e,o,r)}if(l=(o&t.childLanes)!==0,gt||l){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kn(t,i),qt(r,t,i,-1))}return vf(),r=$c(Error(M(421))),La(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=oI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,xt=or(i.nextSibling),St=e,ve=!0,$t=null,t!==null&&(Pt[Nt++]=vn,Pt[Nt++]=_n,Pt[Nt++]=Gr,vn=t.id,_n=t.overflow,Gr=e),e=df(e,r.children),e.flags|=4096,e)}function xg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Oh(t.return,e,n)}function Bc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function i_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ct(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xg(t,n,e);else if(t.tag===19)xg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&bl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Bc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&bl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Bc(e,!0,n,null,s);break;case"together":Bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function el(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Gx(t,e,n){switch(e.tag){case 3:n_(e),Wi();break;case 5:P0(e);break;case 1:vt(e.type)&&Al(e);break;case 4:rf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(Rl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?r_(t,e,n):(fe(we,we.current&1),t=Rn(t,e,n),t!==null?t.sibling:null);fe(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return i_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,e_(t,e,n)}return Rn(t,e,n)}var s_,$h,o_,a_;s_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$h=function(){};o_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,zr(en.current);var s=null;switch(n){case"input":i=ch(t,i),r=ch(t,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=fh(t,i),r=fh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Il)}mh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(lo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(lo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&me("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};a_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Os(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Qx(t,e,n){var r=e.pendingProps;switch(Yd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(e),null;case 1:return vt(e.type)&&Sl(),Ze(e),null;case 3:return r=e.stateNode,Ki(),ye(yt),ye(ot),of(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$t!==null&&(Yh($t),$t=null))),$h(t,e),Ze(e),null;case 5:sf(e);var i=zr(Eo.current);if(n=e.type,t!==null&&e.stateNode!=null)o_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return Ze(e),null}if(t=zr(en.current),Oa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Yt]=e,r[_o]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Us.length;i++)me(Us[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":bm(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":Om(r,s),me("invalid",r)}mh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Da(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Da(r.textContent,l,t),i=["children",""+l]):lo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":Sa(r),Dm(r,s,!0);break;case"textarea":Sa(r),Vm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Il)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yt]=e,t[_o]=r,s_(t,e,!1,!1),e.stateNode=t;e:{switch(o=gh(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<Us.length;i++)me(Us[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":bm(t,r),i=ch(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),me("invalid",t);break;case"textarea":Om(t,r),i=fh(t,r),me("invalid",t);break;default:i=r}mh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Mv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Lv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&uo(t,u):typeof u=="number"&&uo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(lo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&Vd(t,s,u,o))}switch(n){case"input":Sa(t),Dm(t,r,!1);break;case"textarea":Sa(t),Vm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Di(t,!!r.multiple,s,!1):r.defaultValue!=null&&Di(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Il)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ze(e),null;case 6:if(t&&e.stateNode!=null)a_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=zr(Eo.current),zr(en.current),Oa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yt]=e,(s=r.nodeValue!==n)&&(t=St,t!==null))switch(t.tag){case 3:Da(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Da(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=e,e.stateNode=r}return Ze(e),null;case 13:if(ye(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&xt!==null&&e.mode&1&&!(e.flags&128))S0(),Wi(),e.flags|=98560,s=!1;else if(s=Oa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[Yt]=e}else Wi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ze(e),s=!1}else $t!==null&&(Yh($t),$t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Ve===0&&(Ve=3):vf())),e.updateQueue!==null&&(e.flags|=4),Ze(e),null);case 4:return Ki(),$h(t,e),t===null&&yo(e.stateNode.containerInfo),Ze(e),null;case 10:return ef(e.type._context),Ze(e),null;case 17:return vt(e.type)&&Sl(),Ze(e),null;case 19:if(ye(we),s=e.memoizedState,s===null)return Ze(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Os(s,!1);else{if(Ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bl(t),o!==null){for(e.flags|=128,Os(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>Qi&&(e.flags|=128,r=!0,Os(s,!1),e.lanes=4194304)}else{if(!r)if(t=bl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Os(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return Ze(e),null}else 2*Re()-s.renderingStartTime>Qi&&n!==1073741824&&(e.flags|=128,r=!0,Os(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=we.current,fe(we,r?n&1|2:n&1),e):(Ze(e),null);case 22:case 23:return yf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tt&1073741824&&(Ze(e),e.subtreeFlags&6&&(e.flags|=8192)):Ze(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function Yx(t,e){switch(Yd(e),e.tag){case 1:return vt(e.type)&&Sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ki(),ye(yt),ye(ot),of(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sf(e),null;case 13:if(ye(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Wi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(we),null;case 4:return Ki(),null;case 10:return ef(e.type._context),null;case 22:case 23:return yf(),null;case 24:return null;default:return null}}var ja=!1,nt=!1,Xx=typeof WeakSet=="function"?WeakSet:Set,q=null;function Pi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function Bh(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var Ig=!1;function Jx(t,e){if(Ah=El,t=d0(),Gd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,g=null;t:for(;;){for(var _;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(_=m.firstChild)!==null;)g=m,m=_;for(;;){if(m===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++f===r&&(u=o),(_=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=_}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ch={focusedElem:t,selectionRange:n},El=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var R=T.memoizedProps,S=T.memoizedState,E=e.stateNode,w=E.getSnapshotBeforeUpdate(e.elementType===e.type?R:Ut(e.type,R),S);E.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(V){Ae(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return T=Ig,Ig=!1,T}function Zs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Bh(e,n,s)}i=i.next}while(i!==r)}}function mu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function l_(t){var e=t.alternate;e!==null&&(t.alternate=null,l_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yt],delete e[_o],delete e[Ph],delete e[Ox],delete e[Vx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function u_(t){return t.tag===5||t.tag===3||t.tag===4}function Sg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||u_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Il));else if(r!==4&&(t=t.child,t!==null))for(Wh(t,e,n),t=t.sibling;t!==null;)Wh(t,e,n),t=t.sibling}function Hh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Hh(t,e,n),t=t.sibling;t!==null;)Hh(t,e,n),t=t.sibling}var $e=null,zt=!1;function $n(t,e,n){for(n=n.child;n!==null;)c_(t,e,n),n=n.sibling}function c_(t,e,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(au,n)}catch{}switch(n.tag){case 5:nt||Pi(n,e);case 6:var r=$e,i=zt;$e=null,$n(t,e,n),$e=r,zt=i,$e!==null&&(zt?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(zt?(t=$e,n=n.stateNode,t.nodeType===8?Lc(t.parentNode,n):t.nodeType===1&&Lc(t,n),po(t)):Lc($e,n.stateNode));break;case 4:r=$e,i=zt,$e=n.stateNode.containerInfo,zt=!0,$n(t,e,n),$e=r,zt=i;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Bh(n,e,o),i=i.next}while(i!==r)}$n(t,e,n);break;case 1:if(!nt&&(Pi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,e,l)}$n(t,e,n);break;case 21:$n(t,e,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,$n(t,e,n),nt=r):$n(t,e,n);break;default:$n(t,e,n)}}function Ag(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Xx),e.forEach(function(r){var i=aI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,zt=!1;break e;case 3:$e=l.stateNode.containerInfo,zt=!0;break e;case 4:$e=l.stateNode.containerInfo,zt=!0;break e}l=l.return}if($e===null)throw Error(M(160));c_(s,o,i),$e=null,zt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ae(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)h_(e,t),e=e.sibling}function h_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ft(e,t),Gt(t),r&4){try{Zs(3,t,t.return),mu(3,t)}catch(R){Ae(t,t.return,R)}try{Zs(5,t,t.return)}catch(R){Ae(t,t.return,R)}}break;case 1:Ft(e,t),Gt(t),r&512&&n!==null&&Pi(n,n.return);break;case 5:if(Ft(e,t),Gt(t),r&512&&n!==null&&Pi(n,n.return),t.flags&32){var i=t.stateNode;try{uo(i,"")}catch(R){Ae(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Dv(i,s),gh(l,o);var c=gh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Mv(i,m):f==="dangerouslySetInnerHTML"?Lv(i,m):f==="children"?uo(i,m):Vd(i,f,m,c)}switch(l){case"input":hh(i,s);break;case"textarea":Ov(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Di(i,!!s.multiple,_,!1):g!==!!s.multiple&&(s.defaultValue!=null?Di(i,!!s.multiple,s.defaultValue,!0):Di(i,!!s.multiple,s.multiple?[]:"",!1))}i[_o]=s}catch(R){Ae(t,t.return,R)}}break;case 6:if(Ft(e,t),Gt(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){Ae(t,t.return,R)}}break;case 3:if(Ft(e,t),Gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{po(e.containerInfo)}catch(R){Ae(t,t.return,R)}break;case 4:Ft(e,t),Gt(t);break;case 13:Ft(e,t),Gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(mf=Re())),r&4&&Ag(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(nt=(c=nt)||f,Ft(e,t),nt=c):Ft(e,t),Gt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(m=q=f;q!==null;){switch(g=q,_=g.child,g.tag){case 0:case 11:case 14:case 15:Zs(4,g,g.return);break;case 1:Pi(g,g.return);var T=g.stateNode;if(typeof T.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(R){Ae(r,n,R)}}break;case 5:Pi(g,g.return);break;case 22:if(g.memoizedState!==null){kg(m);continue}}_!==null?(_.return=g,q=_):kg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=jv("display",o))}catch(R){Ae(t,t.return,R)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(R){Ae(t,t.return,R)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ft(e,t),Gt(t),r&4&&Ag(t);break;case 21:break;default:Ft(e,t),Gt(t)}}function Gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(u_(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(uo(i,""),r.flags&=-33);var s=Sg(t);Hh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Sg(t);Wh(t,l,o);break;default:throw Error(M(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Zx(t,e,n){q=t,d_(t)}function d_(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ja;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||nt;l=ja;var c=nt;if(ja=o,(nt=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Rg(i):u!==null?(u.return=o,q=u):Rg(i);for(;s!==null;)q=s,d_(s),s=s.sibling;q=i,ja=l,nt=c}Cg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Cg(t)}}function Cg(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nt||mu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&po(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}nt||e.flags&512&&qh(e)}catch(g){Ae(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function kg(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Rg(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{mu(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ae(e,i,u)}}var s=e.return;try{qh(e)}catch(u){Ae(e,s,u)}break;case 5:var o=e.return;try{qh(e)}catch(u){Ae(e,o,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var eI=Math.ceil,Vl=Ln.ReactCurrentDispatcher,ff=Ln.ReactCurrentOwner,Dt=Ln.ReactCurrentBatchConfig,ie=0,Ue=null,be=null,We=0,Tt=0,Ni=xr(0),Ve=0,So=null,Yr=0,gu=0,pf=0,eo=null,pt=null,mf=0,Qi=1/0,gn=null,Ll=!1,Kh=null,lr=null,Ma=!1,er=null,jl=0,to=0,Gh=null,tl=-1,nl=0;function ht(){return ie&6?Re():tl!==-1?tl:tl=Re()}function ur(t){return t.mode&1?ie&2&&We!==0?We&-We:jx.transition!==null?(nl===0&&(nl=Yv()),nl):(t=ue,t!==0||(t=window.event,t=t===void 0?16:r0(t.type)),t):1}function qt(t,e,n,r){if(50<to)throw to=0,Gh=null,Error(M(185));zo(t,n,r),(!(ie&2)||t!==Ue)&&(t===Ue&&(!(ie&2)&&(gu|=n),Ve===4&&Kn(t,We)),_t(t,r),n===1&&ie===0&&!(e.mode&1)&&(Qi=Re()+500,du&&Ir()))}function _t(t,e){var n=t.callbackNode;jT(t,e);var r=wl(t,t===Ue?We:0);if(r===0)n!==null&&Mm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Mm(n),e===1)t.tag===0?Lx(Pg.bind(null,t)):T0(Pg.bind(null,t)),bx(function(){!(ie&6)&&Ir()}),n=null;else{switch(Xv(r)){case 1:n=Ud;break;case 4:n=Gv;break;case 16:n=_l;break;case 536870912:n=Qv;break;default:n=_l}n=w_(n,f_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function f_(t,e){if(tl=-1,nl=0,ie&6)throw Error(M(327));var n=t.callbackNode;if(Mi()&&t.callbackNode!==n)return null;var r=wl(t,t===Ue?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ml(t,r);else{e=r;var i=ie;ie|=2;var s=m_();(Ue!==t||We!==e)&&(gn=null,Qi=Re()+500,Br(t,e));do try{rI();break}catch(l){p_(t,l)}while(!0);Zd(),Vl.current=s,ie=i,be!==null?e=0:(Ue=null,We=0,e=Ve)}if(e!==0){if(e===2&&(i=Eh(t),i!==0&&(r=i,e=Qh(t,i))),e===1)throw n=So,Br(t,0),Kn(t,r),_t(t,Re()),n;if(e===6)Kn(t,r);else{if(i=t.current.alternate,!(r&30)&&!tI(i)&&(e=Ml(t,r),e===2&&(s=Eh(t),s!==0&&(r=s,e=Qh(t,s))),e===1))throw n=So,Br(t,0),Kn(t,r),_t(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:jr(t,pt,gn);break;case 3:if(Kn(t,r),(r&130023424)===r&&(e=mf+500-Re(),10<e)){if(wl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Rh(jr.bind(null,t,pt,gn),e);break}jr(t,pt,gn);break;case 4:if(Kn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Bt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*eI(r/1960))-r,10<r){t.timeoutHandle=Rh(jr.bind(null,t,pt,gn),r);break}jr(t,pt,gn);break;case 5:jr(t,pt,gn);break;default:throw Error(M(329))}}}return _t(t,Re()),t.callbackNode===n?f_.bind(null,t):null}function Qh(t,e){var n=eo;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=Ml(t,e),t!==2&&(e=pt,pt=n,e!==null&&Yh(e)),t}function Yh(t){pt===null?pt=t:pt.push.apply(pt,t)}function tI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Wt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kn(t,e){for(e&=~pf,e&=~gu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bt(e),r=1<<n;t[n]=-1,e&=~r}}function Pg(t){if(ie&6)throw Error(M(327));Mi();var e=wl(t,0);if(!(e&1))return _t(t,Re()),null;var n=Ml(t,e);if(t.tag!==0&&n===2){var r=Eh(t);r!==0&&(e=r,n=Qh(t,r))}if(n===1)throw n=So,Br(t,0),Kn(t,e),_t(t,Re()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,pt,gn),_t(t,Re()),null}function gf(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Qi=Re()+500,du&&Ir())}}function Xr(t){er!==null&&er.tag===0&&!(ie&6)&&Mi();var e=ie;ie|=1;var n=Dt.transition,r=ue;try{if(Dt.transition=null,ue=1,t)return t()}finally{ue=r,Dt.transition=n,ie=e,!(ie&6)&&Ir()}}function yf(){Tt=Ni.current,ye(Ni)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Nx(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Yd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sl();break;case 3:Ki(),ye(yt),ye(ot),of();break;case 5:sf(r);break;case 4:Ki();break;case 13:ye(we);break;case 19:ye(we);break;case 10:ef(r.type._context);break;case 22:case 23:yf()}n=n.return}if(Ue=t,be=t=cr(t.current,null),We=Tt=e,Ve=0,So=null,pf=gu=Yr=0,pt=eo=null,Ur!==null){for(e=0;e<Ur.length;e++)if(n=Ur[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ur=null}return t}function p_(t,e){do{var n=be;try{if(Zd(),Ja.current=Ol,Dl){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Dl=!1}if(Qr=0,Fe=Oe=Te=null,Js=!1,To=0,ff.current=null,n===null||n.return===null){Ve=1,So=e,be=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=We,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=yg(o);if(_!==null){_.flags&=-257,vg(_,o,l,s,e),_.mode&1&&gg(s,c,e),e=_,u=c;var T=e.updateQueue;if(T===null){var R=new Set;R.add(u),e.updateQueue=R}else T.add(u);break e}else{if(!(e&1)){gg(s,c,e),vf();break e}u=Error(M(426))}}else if(ve&&l.mode&1){var S=yg(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),vg(S,o,l,s,e),Xd(Gi(u,l));break e}}s=u=Gi(u,l),Ve!==4&&(Ve=2),eo===null?eo=[s]:eo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=X0(s,u,e);cg(s,E);break e;case 1:l=u;var w=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(lr===null||!lr.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=J0(s,l,e);cg(s,V);break e}}s=s.return}while(s!==null)}y_(n)}catch(F){e=F,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function m_(){var t=Vl.current;return Vl.current=Ol,t===null?Ol:t}function vf(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Ue===null||!(Yr&268435455)&&!(gu&268435455)||Kn(Ue,We)}function Ml(t,e){var n=ie;ie|=2;var r=m_();(Ue!==t||We!==e)&&(gn=null,Br(t,e));do try{nI();break}catch(i){p_(t,i)}while(!0);if(Zd(),ie=n,Vl.current=r,be!==null)throw Error(M(261));return Ue=null,We=0,Ve}function nI(){for(;be!==null;)g_(be)}function rI(){for(;be!==null&&!kT();)g_(be)}function g_(t){var e=__(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,e===null?y_(t):be=e,ff.current=null}function y_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Yx(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,be=null;return}}else if(n=Qx(n,e,Tt),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);Ve===0&&(Ve=5)}function jr(t,e,n){var r=ue,i=Dt.transition;try{Dt.transition=null,ue=1,iI(t,e,n,r)}finally{Dt.transition=i,ue=r}return null}function iI(t,e,n,r){do Mi();while(er!==null);if(ie&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(MT(t,s),t===Ue&&(be=Ue=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ma||(Ma=!0,w_(_l,function(){return Mi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dt.transition,Dt.transition=null;var o=ue;ue=1;var l=ie;ie|=4,ff.current=null,Jx(t,n),h_(n,t),Ix(Ch),El=!!Ah,Ch=Ah=null,t.current=n,Zx(n),RT(),ie=l,ue=o,Dt.transition=s}else t.current=n;if(Ma&&(Ma=!1,er=t,jl=i),s=t.pendingLanes,s===0&&(lr=null),bT(n.stateNode),_t(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ll)throw Ll=!1,t=Kh,Kh=null,t;return jl&1&&t.tag!==0&&Mi(),s=t.pendingLanes,s&1?t===Gh?to++:(to=0,Gh=t):to=0,Ir(),null}function Mi(){if(er!==null){var t=Xv(jl),e=Dt.transition,n=ue;try{if(Dt.transition=null,ue=16>t?16:t,er===null)var r=!1;else{if(t=er,er=null,jl=0,ie&6)throw Error(M(331));var i=ie;for(ie|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:Zs(8,f,s)}var m=f.child;if(m!==null)m.return=f,q=m;else for(;q!==null;){f=q;var g=f.sibling,_=f.return;if(l_(f),f===c){q=null;break}if(g!==null){g.return=_,q=g;break}q=_}}}var T=s.alternate;if(T!==null){var R=T.child;if(R!==null){T.child=null;do{var S=R.sibling;R.sibling=null,R=S}while(R!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zs(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,q=E;break e}q=s.return}}var w=t.current;for(q=w;q!==null;){o=q;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,q=A;else e:for(o=w;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:mu(9,l)}}catch(F){Ae(l,l.return,F)}if(l===o){q=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,q=V;break e}q=l.return}}if(ie=i,Ir(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(au,t)}catch{}r=!0}return r}finally{ue=n,Dt.transition=e}}return!1}function Ng(t,e,n){e=Gi(n,e),e=X0(t,e,1),t=ar(t,e,1),e=ht(),t!==null&&(zo(t,1,e),_t(t,e))}function Ae(t,e,n){if(t.tag===3)Ng(t,t,n);else for(;e!==null;){if(e.tag===3){Ng(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){t=Gi(n,t),t=J0(e,t,1),e=ar(e,t,1),t=ht(),e!==null&&(zo(e,1,t),_t(e,t));break}}e=e.return}}function sI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(We&n)===n&&(Ve===4||Ve===3&&(We&130023424)===We&&500>Re()-mf?Br(t,0):pf|=n),_t(t,e)}function v_(t,e){e===0&&(t.mode&1?(e=ka,ka<<=1,!(ka&130023424)&&(ka=4194304)):e=1);var n=ht();t=kn(t,e),t!==null&&(zo(t,e,n),_t(t,n))}function oI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),v_(t,n)}function aI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),v_(t,n)}var __;__=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,Gx(t,e,n);gt=!!(t.flags&131072)}else gt=!1,ve&&e.flags&1048576&&x0(e,kl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;el(t,e),t=e.pendingProps;var i=qi(e,ot.current);ji(e,n),i=lf(null,e,r,t,i,n);var s=uf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,Al(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nf(e),i.updater=pu,e.stateNode=i,i._reactInternals=e,Lh(e,r,t,n),e=Fh(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&Qd(e),ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(el(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=uI(r),t=Ut(r,t),i){case 0:e=Mh(null,e,r,t,n);break e;case 1:e=Eg(null,e,r,t,n);break e;case 11:e=_g(null,e,r,t,n);break e;case 14:e=wg(null,e,r,Ut(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Mh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Eg(t,e,r,i,n);case 3:e:{if(n_(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,R0(t,e),Nl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Gi(Error(M(423)),e),e=Tg(t,e,r,n,i);break e}else if(r!==i){i=Gi(Error(M(424)),e),e=Tg(t,e,r,n,i);break e}else for(xt=or(e.stateNode.containerInfo.firstChild),St=e,ve=!0,$t=null,n=C0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wi(),r===i){e=Rn(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return P0(e),t===null&&Dh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,kh(r,i)?o=null:s!==null&&kh(r,s)&&(e.flags|=32),t_(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&Dh(e),null;case 13:return r_(t,e,n);case 4:return rf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Hi(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),_g(t,e,r,i,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(Rl,r._currentValue),r._currentValue=o,s!==null)if(Wt(s.value,o)){if(s.children===i.children&&!yt.current){e=Rn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=xn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Oh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Oh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ji(e,n),i=Vt(i),r=r(i),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,i=Ut(r,e.pendingProps),i=Ut(r.type,i),wg(t,e,r,i,n);case 15:return Z0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),el(t,e),e.tag=1,vt(r)?(t=!0,Al(e)):t=!1,ji(e,n),Y0(e,r,i),Lh(e,r,i,n),Fh(null,e,r,!0,t,n);case 19:return i_(t,e,n);case 22:return e_(t,e,n)}throw Error(M(156,e.tag))};function w_(t,e){return Kv(t,e)}function lI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(t,e,n,r){return new lI(t,e,n,r)}function _f(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uI(t){if(typeof t=="function")return _f(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jd)return 11;if(t===Md)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_f(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ei:return qr(n.children,i,s,e);case Ld:o=8,i|=8;break;case oh:return t=bt(12,n,e,i|2),t.elementType=oh,t.lanes=s,t;case ah:return t=bt(13,n,e,i),t.elementType=ah,t.lanes=s,t;case lh:return t=bt(19,n,e,i),t.elementType=lh,t.lanes=s,t;case Pv:return yu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case kv:o=10;break e;case Rv:o=9;break e;case jd:o=11;break e;case Md:o=14;break e;case qn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=bt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function qr(t,e,n,r){return t=bt(7,t,r,e),t.lanes=n,t}function yu(t,e,n,r){return t=bt(22,t,r,e),t.elementType=Pv,t.lanes=n,t.stateNode={isHidden:!1},t}function qc(t,e,n){return t=bt(6,t,null,e),t.lanes=n,t}function Wc(t,e,n){return e=bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sc(0),this.expirationTimes=Sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wf(t,e,n,r,i,s,o,l,u){return t=new cI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nf(s),t}function hI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function E_(t){if(!t)return yr;t=t._reactInternals;e:{if(si(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(vt(n))return E0(t,n,e)}return e}function T_(t,e,n,r,i,s,o,l,u){return t=wf(n,r,!0,t,i,s,o,l,u),t.context=E_(null),n=t.current,r=ht(),i=ur(n),s=xn(r,i),s.callback=e??null,ar(n,s,i),t.current.lanes=i,zo(t,i,r),_t(t,r),t}function vu(t,e,n,r){var i=e.current,s=ht(),o=ur(i);return n=E_(n),e.context===null?e.context=n:e.pendingContext=n,e=xn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ar(i,e,o),t!==null&&(qt(t,i,o,s),Xa(t,i,o)),o}function Fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ef(t,e){bg(t,e),(t=t.alternate)&&bg(t,e)}function dI(){return null}var x_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tf(t){this._internalRoot=t}_u.prototype.render=Tf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));vu(t,e,null,null)};_u.prototype.unmount=Tf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xr(function(){vu(null,t,null,null)}),e[Cn]=null}};function _u(t){this._internalRoot=t}_u.prototype.unstable_scheduleHydration=function(t){if(t){var e=e0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hn.length&&e!==0&&e<Hn[n].priority;n++);Hn.splice(n,0,t),n===0&&n0(t)}};function xf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dg(){}function fI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Fl(o);s.call(c)}}var o=T_(e,r,t,0,null,!1,!1,"",Dg);return t._reactRootContainer=o,t[Cn]=o.current,yo(t.nodeType===8?t.parentNode:t),Xr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Fl(u);l.call(c)}}var u=wf(t,0,!1,null,null,!1,!1,"",Dg);return t._reactRootContainer=u,t[Cn]=u.current,yo(t.nodeType===8?t.parentNode:t),Xr(function(){vu(e,u,n,r)}),u}function Eu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Fl(o);l.call(u)}}vu(e,o,t,i)}else o=fI(n,e,t,i,r);return Fl(o)}Jv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fs(e.pendingLanes);n!==0&&(zd(e,n|1),_t(e,Re()),!(ie&6)&&(Qi=Re()+500,Ir()))}break;case 13:Xr(function(){var r=kn(t,1);if(r!==null){var i=ht();qt(r,t,1,i)}}),Ef(t,1)}};$d=function(t){if(t.tag===13){var e=kn(t,134217728);if(e!==null){var n=ht();qt(e,t,134217728,n)}Ef(t,134217728)}};Zv=function(t){if(t.tag===13){var e=ur(t),n=kn(t,e);if(n!==null){var r=ht();qt(n,t,e,r)}Ef(t,e)}};e0=function(){return ue};t0=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};vh=function(t,e,n){switch(e){case"input":if(hh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=hu(r);if(!i)throw Error(M(90));bv(r),hh(r,i)}}}break;case"textarea":Ov(t,n);break;case"select":e=n.value,e!=null&&Di(t,!!n.multiple,e,!1)}};zv=gf;$v=Xr;var pI={usingClientEntryPoint:!1,Events:[Bo,Si,hu,Fv,Uv,gf]},Vs={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mI={bundleType:Vs.bundleType,version:Vs.version,rendererPackageName:Vs.rendererPackageName,rendererConfig:Vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Wv(t),t===null?null:t.stateNode},findFiberByHostInstance:Vs.findFiberByHostInstance||dI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{au=Fa.inject(mI),Zt=Fa}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pI;Ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xf(e))throw Error(M(200));return hI(t,e,null,n)};Ct.createRoot=function(t,e){if(!xf(t))throw Error(M(299));var n=!1,r="",i=x_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wf(t,1,!1,null,null,n,!1,r,i),t[Cn]=e.current,yo(t.nodeType===8?t.parentNode:t),new Tf(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=Wv(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return Xr(t)};Ct.hydrate=function(t,e,n){if(!wu(e))throw Error(M(200));return Eu(null,t,e,!0,n)};Ct.hydrateRoot=function(t,e,n){if(!xf(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=x_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=T_(e,null,t,1,n??null,i,!1,s,o),t[Cn]=e.current,yo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new _u(e)};Ct.render=function(t,e,n){if(!wu(e))throw Error(M(200));return Eu(null,t,e,!1,n)};Ct.unmountComponentAtNode=function(t){if(!wu(t))throw Error(M(40));return t._reactRootContainer?(Xr(function(){Eu(null,null,t,!1,function(){t._reactRootContainer=null,t[Cn]=null})}),!0):!1};Ct.unstable_batchedUpdates=gf;Ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wu(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return Eu(t,e,n,!1,r)};Ct.version="18.3.1-next-f1338f8080-20240426";function I_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I_)}catch(t){console.error(t)}}I_(),Iv.exports=Ct;var gI=Iv.exports,S_,Og=gI;S_=Og.createRoot,Og.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ao.apply(this,arguments)}var tr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(tr||(tr={}));const Vg="popstate";function yI(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:u=""}=oi(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Xh("",{pathname:o,search:l,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");l=c===-1?u:u.slice(0,c)}return l+"#"+(typeof s=="string"?s:Ul(s))}function r(i,s){If(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return _I(e,n,r,t)}function Pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function If(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function vI(){return Math.random().toString(36).substr(2,8)}function Lg(t,e){return{usr:t.state,key:t.key,idx:e}}function Xh(t,e,n,r){return n===void 0&&(n=null),Ao({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?oi(e):e,{state:n,key:e&&e.key||r||vI()})}function Ul(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function oi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function _I(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=tr.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(Ao({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function m(){l=tr.Pop;let S=f(),E=S==null?null:S-c;c=S,u&&u({action:l,location:R.location,delta:E})}function g(S,E){l=tr.Push;let w=Xh(R.location,S,E);n&&n(w,S),c=f()+1;let A=Lg(w,c),V=R.createHref(w);try{o.pushState(A,"",V)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(V)}s&&u&&u({action:l,location:R.location,delta:1})}function _(S,E){l=tr.Replace;let w=Xh(R.location,S,E);n&&n(w,S),c=f();let A=Lg(w,c),V=R.createHref(w);o.replaceState(A,"",V),s&&u&&u({action:l,location:R.location,delta:0})}function T(S){let E=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof S=="string"?S:Ul(S);return w=w.replace(/ $/,"%20"),Pe(E,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,E)}let R={get action(){return l},get location(){return t(i,o)},listen(S){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Vg,m),u=S,()=>{i.removeEventListener(Vg,m),u=null}},createHref(S){return e(i,S)},createURL:T,encodeLocation(S){let E=T(S);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:g,replace:_,go(S){return o.go(S)}};return R}var jg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(jg||(jg={}));function wI(t,e,n){return n===void 0&&(n="/"),EI(t,e,n,!1)}function EI(t,e,n,r){let i=typeof e=="string"?oi(e):e,s=Sf(i.pathname||"/",n);if(s==null)return null;let o=A_(t);TI(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=DI(s);l=NI(o[u],c,r)}return l}function A_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Pe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=hr([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),A_(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:RI(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of C_(s.path))i(s,o,u)}),e}function C_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=C_(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function TI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:PI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const xI=/^:[\w-]+$/,II=3,SI=2,AI=1,CI=10,kI=-2,Mg=t=>t==="*";function RI(t,e){let n=t.split("/"),r=n.length;return n.some(Mg)&&(r+=kI),e&&(r+=SI),n.filter(i=>!Mg(i)).reduce((i,s)=>i+(xI.test(s)?II:s===""?AI:CI),r)}function PI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function NI(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",m=Fg({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),g=u.route;if(!m&&c&&n&&!r[r.length-1].route.index&&(m=Fg({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:hr([s,m.pathname]),pathnameBase:jI(hr([s,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(s=hr([s,m.pathnameBase]))}return o}function Fg(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=bI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,m)=>{let{paramName:g,isOptional:_}=f;if(g==="*"){let R=l[m]||"";o=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const T=l[m];return _&&!T?c[g]=void 0:c[g]=(T||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function bI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),If(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function DI(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return If(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Sf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function OI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?oi(t):t;return{pathname:n?n.startsWith("/")?n:VI(n,e):e,search:MI(r),hash:FI(i)}}function VI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Hc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function LI(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Af(t,e){let n=LI(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Cf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=oi(t):(i=Ao({},t),Pe(!i.pathname||!i.pathname.includes("?"),Hc("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),Hc("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),Hc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}l=m>=0?e[m]:"/"}let u=OI(i,l),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const hr=t=>t.join("/").replace(/\/\/+/g,"/"),jI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),MI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,FI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function UI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const k_=["post","put","patch","delete"];new Set(k_);const zI=["get",...k_];new Set(zI);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Co(){return Co=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Co.apply(this,arguments)}const kf=D.createContext(null),$I=D.createContext(null),Sr=D.createContext(null),Tu=D.createContext(null),jn=D.createContext({outlet:null,matches:[],isDataRoute:!1}),R_=D.createContext(null);function BI(t,e){let{relative:n}=e===void 0?{}:e;as()||Pe(!1);let{basename:r,navigator:i}=D.useContext(Sr),{hash:s,pathname:o,search:l}=b_(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:hr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function as(){return D.useContext(Tu)!=null}function ai(){return as()||Pe(!1),D.useContext(Tu).location}function P_(t){D.useContext(Sr).static||D.useLayoutEffect(t)}function jt(){let{isDataRoute:t}=D.useContext(jn);return t?nS():qI()}function qI(){as()||Pe(!1);let t=D.useContext(kf),{basename:e,future:n,navigator:r}=D.useContext(Sr),{matches:i}=D.useContext(jn),{pathname:s}=ai(),o=JSON.stringify(Af(i,n.v7_relativeSplatPath)),l=D.useRef(!1);return P_(()=>{l.current=!0}),D.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=Cf(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:hr([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,o,s,t])}function N_(){let{matches:t}=D.useContext(jn),e=t[t.length-1];return e?e.params:{}}function b_(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(Sr),{matches:i}=D.useContext(jn),{pathname:s}=ai(),o=JSON.stringify(Af(i,r.v7_relativeSplatPath));return D.useMemo(()=>Cf(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function WI(t,e){return HI(t,e)}function HI(t,e,n,r){as()||Pe(!1);let{navigator:i}=D.useContext(Sr),{matches:s}=D.useContext(jn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ai(),f;if(e){var m;let S=typeof e=="string"?oi(e):e;u==="/"||(m=S.pathname)!=null&&m.startsWith(u)||Pe(!1),f=S}else f=c;let g=f.pathname||"/",_=g;if(u!=="/"){let S=u.replace(/^\//,"").split("/");_="/"+g.replace(/^\//,"").split("/").slice(S.length).join("/")}let T=wI(t,{pathname:_}),R=XI(T&&T.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:hr([u,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?u:hr([u,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return e&&R?D.createElement(Tu.Provider,{value:{location:Co({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:tr.Pop}},R):R}function KI(){let t=tS(),e=UI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,null)}const GI=D.createElement(KI,null);class QI extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(jn.Provider,{value:this.props.routeContext},D.createElement(R_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function YI(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(kf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(jn.Provider,{value:e},r)}function XI(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);f>=0||Pe(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=f),m.route.id){let{loaderData:g,errors:_}=n,T=m.route.loader&&g[m.route.id]===void 0&&(!_||_[m.route.id]===void 0);if(m.route.lazy||T){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,m,g)=>{let _,T=!1,R=null,S=null;n&&(_=l&&m.route.id?l[m.route.id]:void 0,R=m.route.errorElement||GI,u&&(c<0&&g===0?(T=!0,S=null):c===g&&(T=!0,S=m.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,g+1)),w=()=>{let A;return _?A=R:T?A=S:m.route.Component?A=D.createElement(m.route.Component,null):m.route.element?A=m.route.element:A=f,D.createElement(YI,{match:m,routeContext:{outlet:f,matches:E,isDataRoute:n!=null},children:A})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?D.createElement(QI,{location:n.location,revalidation:n.revalidation,component:R,error:_,children:w(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):w()},null)}var D_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(D_||{}),zl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(zl||{});function JI(t){let e=D.useContext(kf);return e||Pe(!1),e}function ZI(t){let e=D.useContext($I);return e||Pe(!1),e}function eS(t){let e=D.useContext(jn);return e||Pe(!1),e}function O_(t){let e=eS(),n=e.matches[e.matches.length-1];return n.route.id||Pe(!1),n.route.id}function tS(){var t;let e=D.useContext(R_),n=ZI(zl.UseRouteError),r=O_(zl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function nS(){let{router:t}=JI(D_.UseNavigateStable),e=O_(zl.UseNavigateStable),n=D.useRef(!1);return P_(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Co({fromRouteId:e},s)))},[t,e])}function ko(t){let{to:e,replace:n,state:r,relative:i}=t;as()||Pe(!1);let{future:s,static:o}=D.useContext(Sr),{matches:l}=D.useContext(jn),{pathname:u}=ai(),c=jt(),f=Cf(e,Af(l,s.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(f);return D.useEffect(()=>c(JSON.parse(m),{replace:n,state:r,relative:i}),[c,m,i,n,r]),null}function rt(t){Pe(!1)}function rS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=tr.Pop,navigator:s,static:o=!1,future:l}=t;as()&&Pe(!1);let u=e.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:u,navigator:s,static:o,future:Co({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=oi(r));let{pathname:f="/",search:m="",hash:g="",state:_=null,key:T="default"}=r,R=D.useMemo(()=>{let S=Sf(f,u);return S==null?null:{location:{pathname:S,search:m,hash:g,state:_,key:T},navigationType:i}},[u,f,m,g,_,T,i]);return R==null?null:D.createElement(Sr.Provider,{value:c},D.createElement(Tu.Provider,{children:n,value:R}))}function Rf(t){let{children:e,location:n}=t;return WI(Jh(e),n)}new Promise(()=>{});function Jh(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,Jh(r.props.children,s));return}r.type!==rt&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Jh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zh(){return Zh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zh.apply(this,arguments)}function iS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function sS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function oS(t,e){return t.button===0&&(!e||e==="_self")&&!sS(t)}const aS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],lS="6";try{window.__reactRouterVersion=lS}catch{}const uS="startTransition",Ug=sT[uS];function cS(t){let{basename:e,children:n,future:r,window:i}=t,s=D.useRef();s.current==null&&(s.current=yI({window:i,v5Compat:!0}));let o=s.current,[l,u]=D.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=D.useCallback(m=>{c&&Ug?Ug(()=>u(m)):u(m)},[u,c]);return D.useLayoutEffect(()=>o.listen(f),[o,f]),D.createElement(rS,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const hS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,V_=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:m}=e,g=iS(e,aS),{basename:_}=D.useContext(Sr),T,R=!1;if(typeof c=="string"&&dS.test(c)&&(T=c,hS))try{let A=new URL(window.location.href),V=c.startsWith("//")?new URL(A.protocol+c):new URL(c),F=Sf(V.pathname,_);V.origin===A.origin&&F!=null?c=F+V.search+V.hash:R=!0}catch{}let S=BI(c,{relative:i}),E=fS(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:m});function w(A){r&&r(A),A.defaultPrevented||E(A)}return D.createElement("a",Zh({},g,{href:T||S,onClick:R||s?r:w,ref:n,target:u}))});var zg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(zg||(zg={}));var $g;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})($g||($g={}));function fS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=jt(),c=ai(),f=b_(t,{relative:o});return D.useCallback(m=>{if(oS(m,n)){m.preventDefault();let g=r!==void 0?r:Ul(c)===Ul(f);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,f,r,i,n,t,s,o,l])}let pS={data:""},mS=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||pS,gS=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,yS=/\/\*[^]*?\*\/|  +/g,Bg=/\n+/g,Gn=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Gn(o,s):s+"{"+Gn(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Gn(o,e?e.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Gn.p?Gn.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},mn={},L_=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+L_(t[n]);return e}return t},vS=(t,e,n,r,i)=>{let s=L_(t),o=mn[s]||(mn[s]=(u=>{let c=0,f=11;for(;c<u.length;)f=101*f+u.charCodeAt(c++)>>>0;return"go"+f})(s));if(!mn[o]){let u=s!==t?t:(c=>{let f,m,g=[{}];for(;f=gS.exec(c.replace(yS,""));)f[4]?g.shift():f[3]?(m=f[3].replace(Bg," ").trim(),g.unshift(g[0][m]=g[0][m]||{})):g[0][f[1]]=f[2].replace(Bg," ").trim();return g[0]})(t);mn[o]=Gn(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&mn.g?mn.g:null;return n&&(mn.g=mn[o]),((u,c,f,m)=>{m?c.data=c.data.replace(m,u):c.data.indexOf(u)===-1&&(c.data=f?u+c.data:c.data+u)})(mn[o],e,r,l),o},_S=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":Gn(l,""):l===!1?"":l}return r+i+(o??"")},"");function xu(t){let e=this||{},n=t.call?t(e.p):t;return vS(n.unshift?n.raw?_S(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,mS(e.target),e.g,e.o,e.k)}let j_,ed,td;xu.bind({g:1});let Pn=xu.bind({k:1});function wS(t,e,n,r){Gn.p=e,j_=t,ed=n,td=r}function Ar(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),u=l.className||i.className;n.p=Object.assign({theme:ed&&ed()},l),n.o=/ *go\d+/.test(u),l.className=xu.apply(n,r)+(u?" "+u:"");let c=t;return t[0]&&(c=l.as||t,delete l.as),td&&c[0]&&td(l),j_(c,l)}return i}}var ES=t=>typeof t=="function",$l=(t,e)=>ES(t)?t(e):t,TS=(()=>{let t=0;return()=>(++t).toString()})(),M_=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),xS=20,il=new Map,IS=1e3,qg=t=>{if(il.has(t))return;let e=setTimeout(()=>{il.delete(t),li({type:4,toastId:t})},IS);il.set(t,e)},SS=t=>{let e=il.get(t);e&&clearTimeout(e)},nd=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,xS)};case 1:return e.toast.id&&SS(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return t.toasts.find(s=>s.id===n.id)?nd(t,{type:1,toast:n}):nd(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?qg(r):t.toasts.forEach(s=>{qg(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},sl=[],ol={toasts:[],pausedAt:void 0},li=t=>{ol=nd(ol,t),sl.forEach(e=>{e(ol)})},AS={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},CS=(t={})=>{let[e,n]=D.useState(ol);D.useEffect(()=>(sl.push(n),()=>{let i=sl.indexOf(n);i>-1&&sl.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var s,o;return{...t,...t[i.type],...i,duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||AS[i.type],style:{...t.style,...(o=t[i.type])==null?void 0:o.style,...i.style}}});return{...e,toasts:r}},kS=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||TS()}),Wo=t=>(e,n)=>{let r=kS(e,t,n);return li({type:2,toast:r}),r.id},G=(t,e)=>Wo("blank")(t,e);G.error=Wo("error");G.success=Wo("success");G.loading=Wo("loading");G.custom=Wo("custom");G.dismiss=t=>{li({type:3,toastId:t})};G.remove=t=>li({type:4,toastId:t});G.promise=(t,e,n)=>{let r=G.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(G.success($l(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{G.error($l(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var RS=(t,e)=>{li({type:1,toast:{id:t,height:e}})},PS=()=>{li({type:5,time:Date.now()})},NS=t=>{let{toasts:e,pausedAt:n}=CS(t);D.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(l=>{if(l.duration===1/0)return;let u=(l.duration||0)+l.pauseDuration-(s-l.createdAt);if(u<0){l.visible&&G.dismiss(l.id);return}return setTimeout(()=>G.dismiss(l.id),u)});return()=>{o.forEach(l=>l&&clearTimeout(l))}},[e,n]);let r=D.useCallback(()=>{n&&li({type:6,time:Date.now()})},[n]),i=D.useCallback((s,o)=>{let{reverseOrder:l=!1,gutter:u=8,defaultPosition:c}=o||{},f=e.filter(_=>(_.position||c)===(s.position||c)&&_.height),m=f.findIndex(_=>_.id===s.id),g=f.filter((_,T)=>T<m&&_.visible).length;return f.filter(_=>_.visible).slice(...l?[g+1]:[0,g]).reduce((_,T)=>_+(T.height||0)+u,0)},[e]);return{toasts:e,handlers:{updateHeight:RS,startPause:PS,endPause:r,calculateOffset:i}}},bS=Pn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,DS=Pn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,OS=Pn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,VS=Ar("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${bS} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${DS} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${OS} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,LS=Pn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,jS=Ar("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${LS} 1s linear infinite;
`,MS=Pn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,FS=Pn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,US=Ar("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${MS} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${FS} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,zS=Ar("div")`
  position: absolute;
`,$S=Ar("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,BS=Pn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,qS=Ar("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${BS} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,WS=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?D.createElement(qS,null,e):e:n==="blank"?null:D.createElement($S,null,D.createElement(jS,{...r}),n!=="loading"&&D.createElement(zS,null,n==="error"?D.createElement(VS,{...r}):D.createElement(US,{...r})))},HS=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,KS=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,GS="0%{opacity:0;} 100%{opacity:1;}",QS="0%{opacity:1;} 100%{opacity:0;}",YS=Ar("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,XS=Ar("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,JS=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=M_()?[GS,QS]:[HS(n),KS(n)];return{animation:e?`${Pn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Pn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ZS=D.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?JS(t.position||e||"top-center",t.visible):{opacity:0},s=D.createElement(WS,{toast:t}),o=D.createElement(XS,{...t.ariaProps},$l(t.message,t));return D.createElement(YS,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):D.createElement(D.Fragment,null,s,o))});wS(D.createElement);var eA=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=D.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return D.createElement("div",{ref:s,className:e,style:n},i)},tA=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:M_()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},nA=xu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ua=16,rA=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:l,handlers:u}=NS(n);return D.createElement("div",{style:{position:"fixed",zIndex:9999,top:Ua,left:Ua,right:Ua,bottom:Ua,pointerEvents:"none",...s},className:o,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(c=>{let f=c.position||e,m=u.calculateOffset(c,{reverseOrder:t,gutter:r,defaultPosition:e}),g=tA(f,m);return D.createElement(eA,{id:c.id,key:c.id,onHeightUpdate:u.updateHeight,className:c.visible?nA:"",style:g},c.type==="custom"?$l(c.message,c):i?i(c):D.createElement(ZS,{toast:c,position:f}))}))};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var iA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ae=(t,e)=>{const n=D.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...c},f)=>D.createElement("svg",{ref:f,...iA,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${sA(t)}`,l].join(" "),...c},[...e.map(([m,g])=>D.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=ae("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=ae("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=ae("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=ae("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=ae("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=ae("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=ae("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=ae("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=ae("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=ae("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=ae("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=ae("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=ae("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=ae("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=ae("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=ae("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=ae("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=ae("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=ae("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=ae("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=ae("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=ae("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=ae("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=ae("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=ae("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=ae("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=ae("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=ae("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=ae("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=ae("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=ae("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=ae("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var Kg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},CA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},W_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,_=c&63;u||(_=64,o||(g=64)),r.push(n[f],n[m],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(q_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):CA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new kA;const g=s<<2|l>>4;if(r.push(g),c!==64){const _=l<<4&240|c>>2;if(r.push(_),m!==64){const T=c<<6&192|m;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RA=function(t){const e=q_(t);return W_.encodeByteArray(e,!0)},Bl=function(t){return RA(t).replace(/\./g,"")},H_=function(t){try{return W_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=()=>PA().__FIREBASE_DEFAULTS__,bA=()=>{if(typeof process>"u"||typeof Kg>"u")return;const t=Kg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},DA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&H_(t[1]);return e&&JSON.parse(e)},Su=()=>{try{return NA()||bA()||DA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},K_=t=>{var e,n;return(n=(e=Su())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},OA=t=>{const e=K_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},G_=()=>{var t;return(t=Su())===null||t===void 0?void 0:t.config},Q_=t=>{var e;return(e=Su())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Bl(JSON.stringify(n)),Bl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function MA(){var t;const e=(t=Su())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function FA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function UA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $A(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function BA(){return!MA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qA(){try{return typeof indexedDB=="object"}catch{return!1}}function WA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=HA,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ho.prototype.create)}}class Ho{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?KA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Mn(i,l,r)}}function KA(t,e){return t.replace(GA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const GA=/\{\$([^}]+)}/g;function QA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ql(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Gg(s)&&Gg(o)){if(!ql(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Gg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function $s(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function YA(t,e){const n=new XA(t,e);return n.subscribe.bind(n)}class XA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");JA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Gc),i.error===void 0&&(i.error=Gc),i.complete===void 0&&(i.complete=Gc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t){return t&&t._delegate?t._delegate:t}class Jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new VA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tC(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eC(t){return t===Mr?void 0:t}function tC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ZA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const rC={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},iC=ne.INFO,sC={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},oC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=sC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nf{constructor(e){this.name=e,this._logLevel=iC,this._logHandler=oC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const aC=(t,e)=>e.some(n=>t instanceof n);let Qg,Yg;function lC(){return Qg||(Qg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uC(){return Yg||(Yg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Y_=new WeakMap,id=new WeakMap,X_=new WeakMap,Qc=new WeakMap,bf=new WeakMap;function cC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(dr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Y_.set(n,t)}).catch(()=>{}),bf.set(e,t),e}function hC(t){if(id.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});id.set(t,e)}let sd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return id.get(t);if(e==="objectStoreNames")return t.objectStoreNames||X_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dC(t){sd=t(sd)}function fC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Yc(this),e,...n);return X_.set(r,e.sort?e.sort():[e]),dr(r)}:uC().includes(t)?function(...e){return t.apply(Yc(this),e),dr(Y_.get(this))}:function(...e){return dr(t.apply(Yc(this),e))}}function pC(t){return typeof t=="function"?fC(t):(t instanceof IDBTransaction&&hC(t),aC(t,lC())?new Proxy(t,sd):t)}function dr(t){if(t instanceof IDBRequest)return cC(t);if(Qc.has(t))return Qc.get(t);const e=pC(t);return e!==t&&(Qc.set(t,e),bf.set(e,t)),e}const Yc=t=>bf.get(t);function mC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=dr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(dr(o.result),u.oldVersion,u.newVersion,dr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const gC=["get","getKey","getAll","getAllKeys","count"],yC=["put","add","delete","clear"],Xc=new Map;function Xg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xc.get(e))return Xc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=yC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||gC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Xc.set(e,s),s}dC(t=>({...t,get:(e,n,r)=>Xg(e,n)||t.get(e,n,r),has:(e,n)=>!!Xg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_C(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _C(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const od="@firebase/app",Jg="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new Nf("@firebase/app"),wC="@firebase/app-compat",EC="@firebase/analytics-compat",TC="@firebase/analytics",xC="@firebase/app-check-compat",IC="@firebase/app-check",SC="@firebase/auth",AC="@firebase/auth-compat",CC="@firebase/database",kC="@firebase/data-connect",RC="@firebase/database-compat",PC="@firebase/functions",NC="@firebase/functions-compat",bC="@firebase/installations",DC="@firebase/installations-compat",OC="@firebase/messaging",VC="@firebase/messaging-compat",LC="@firebase/performance",jC="@firebase/performance-compat",MC="@firebase/remote-config",FC="@firebase/remote-config-compat",UC="@firebase/storage",zC="@firebase/storage-compat",$C="@firebase/firestore",BC="@firebase/vertexai-preview",qC="@firebase/firestore-compat",WC="firebase",HC="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="[DEFAULT]",KC={[od]:"fire-core",[wC]:"fire-core-compat",[TC]:"fire-analytics",[EC]:"fire-analytics-compat",[IC]:"fire-app-check",[xC]:"fire-app-check-compat",[SC]:"fire-auth",[AC]:"fire-auth-compat",[CC]:"fire-rtdb",[kC]:"fire-data-connect",[RC]:"fire-rtdb-compat",[PC]:"fire-fn",[NC]:"fire-fn-compat",[bC]:"fire-iid",[DC]:"fire-iid-compat",[OC]:"fire-fcm",[VC]:"fire-fcm-compat",[LC]:"fire-perf",[jC]:"fire-perf-compat",[MC]:"fire-rc",[FC]:"fire-rc-compat",[UC]:"fire-gcs",[zC]:"fire-gcs-compat",[$C]:"fire-fst",[qC]:"fire-fst-compat",[BC]:"fire-vertex","fire-js":"fire-js",[WC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=new Map,GC=new Map,ld=new Map;function Zg(t,e){try{t.container.addComponent(e)}catch(n){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yi(t){const e=t.name;if(ld.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;ld.set(e,t);for(const n of Wl.values())Zg(n,t);for(const n of GC.values())Zg(n,t);return!0}function Df(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fr=new Ho("app","Firebase",QC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=HC;function J_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ad,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw fr.create("bad-app-name",{appName:String(i)});if(n||(n=G_()),!n)throw fr.create("no-options");const s=Wl.get(i);if(s){if(ql(n,s.options)&&ql(r,s.config))return s;throw fr.create("duplicate-app",{appName:i})}const o=new nC(i);for(const u of ld.values())o.addComponent(u);const l=new YC(n,r,o);return Wl.set(i,l),l}function Z_(t=ad){const e=Wl.get(t);if(!e&&t===ad&&G_())return J_();if(!e)throw fr.create("no-app",{appName:t});return e}function pr(t,e,n){var r;let i=(r=KC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(l.join(" "));return}Yi(new Jr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC="firebase-heartbeat-database",JC=1,Ro="firebase-heartbeat-store";let Jc=null;function ew(){return Jc||(Jc=mC(XC,JC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ro)}catch(n){console.warn(n)}}}}).catch(t=>{throw fr.create("idb-open",{originalErrorMessage:t.message})})),Jc}async function ZC(t){try{const n=(await ew()).transaction(Ro),r=await n.objectStore(Ro).get(tw(t));return await n.done,r}catch(e){if(e instanceof Mn)Nn.warn(e.message);else{const n=fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(n.message)}}}async function ey(t,e){try{const r=(await ew()).transaction(Ro,"readwrite");await r.objectStore(Ro).put(e,tw(t)),await r.done}catch(n){if(n instanceof Mn)Nn.warn(n.message);else{const r=fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nn.warn(r.message)}}}function tw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=1024,tk=30*24*60*60*1e3;class nk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ik(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ty();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=tk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Nn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ty(),{heartbeatsToSend:r,unsentEntries:i}=rk(this._heartbeatsCache.heartbeats),s=Bl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Nn.warn(n),""}}}function ty(){return new Date().toISOString().substring(0,10)}function rk(t,e=ek){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ny(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ny(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ik{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qA()?WA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ZC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ey(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ey(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ny(t){return Bl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){Yi(new Jr("platform-logger",e=>new vC(e),"PRIVATE")),Yi(new Jr("heartbeat",e=>new nk(e),"PRIVATE")),pr(od,Jg,t),pr(od,Jg,"esm2017"),pr("fire-js","")}sk("");function Of(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function nw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ok=nw,rw=new Ho("auth","Firebase",nw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=new Nf("@firebase/auth");function ak(t,...e){Hl.logLevel<=ne.WARN&&Hl.warn(`Auth (${ls}): ${t}`,...e)}function al(t,...e){Hl.logLevel<=ne.ERROR&&Hl.error(`Auth (${ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,...e){throw Vf(t,...e)}function tn(t,...e){return Vf(t,...e)}function iw(t,e,n){const r=Object.assign(Object.assign({},ok()),{[e]:n});return new Ho("auth","Firebase",r).create(e,{appName:t.name})}function In(t){return iw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rw.create(t,...e)}function K(t,e,...n){if(!t)throw Vf(e,...n)}function wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw al(e),new Error(e)}function bn(t,e){t||wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lk(){return ry()==="http:"||ry()==="https:"}function ry(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lk()||UA()||"connection"in navigator)?navigator.onLine:!0}function ck(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=jA()||zA()}get(){return uk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk=new Go(3e4,6e4);function Cr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kr(t,e,n,r,i={}){return ow(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ko(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return FA()||(c.referrerPolicy="no-referrer"),sw.fetch()(aw(t,t.config.apiHost,n,l),c)})}async function ow(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},hk),e);try{const i=new pk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw za(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw za(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw za(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw za(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw iw(t,f,c);Ht(t,f)}}catch(i){if(i instanceof Mn)throw i;Ht(t,"network-request-failed",{message:String(i)})}}async function Qo(t,e,n,r,i={}){const s=await kr(t,e,n,r,i);return"mfaPendingCredential"in s&&Ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}function aw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Lf(t.config,i):`${t.config.apiScheme}://${i}`}function fk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),dk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function za(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tn(t,e,r);return i.customData._tokenResponse=n,i}function iy(t){return t!==void 0&&t.enterprise!==void 0}class mk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return fk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function gk(t,e){return kr(t,"GET","/v2/recaptchaConfig",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yk(t,e){return kr(t,"POST","/v1/accounts:delete",e)}async function lw(t,e){return kr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vk(t,e=!1){const n=je(t),r=await n.getIdToken(e),i=jf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:no(Zc(i.auth_time)),issuedAtTime:no(Zc(i.iat)),expirationTime:no(Zc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Zc(t){return Number(t)*1e3}function jf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return al("JWT malformed, contained fewer than 3 sections"),null;try{const i=H_(n);return i?JSON.parse(i):(al("Failed to decode base64 JWT payload"),null)}catch(i){return al("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sy(t){const e=jf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&_k(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _k({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=no(this.lastLoginAt),this.creationTime=no(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Po(t,lw(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?uw(s.providerUserInfo):[],l=Tk(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new cd(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function Ek(t){const e=je(t);await Kl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Tk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function uw(t){return t.map(e=>{var{providerId:n}=e,r=Of(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xk(t,e){const n=await ow(t,{},async()=>{const r=Ko({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=aw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",sw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ik(t,e){return kr(t,"POST","/v2/accounts:revokeToken",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=sy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await xk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Fi;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fi,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class En{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Of(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Po(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vk(this,e)}reload(){return Ek(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new En(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Kl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await Po(this,yk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:V,isAnonymous:F,providerData:z,stsTokenManager:I}=n;K(A&&I,e,"internal-error");const v=Fi.fromJSON(this.name,I);K(typeof A=="string",e,"internal-error"),Bn(m,e.name),Bn(g,e.name),K(typeof V=="boolean",e,"internal-error"),K(typeof F=="boolean",e,"internal-error"),Bn(_,e.name),Bn(T,e.name),Bn(R,e.name),Bn(S,e.name),Bn(E,e.name),Bn(w,e.name);const x=new En({uid:A,auth:e,email:g,emailVerified:V,displayName:m,isAnonymous:F,photoURL:T,phoneNumber:_,tenantId:R,stsTokenManager:v,createdAt:E,lastLoginAt:w});return z&&Array.isArray(z)&&(x.providerData=z.map(C=>Object.assign({},C))),S&&(x._redirectEventId=S),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new Fi;i.updateFromServerResponse(n);const s=new En({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Kl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?uw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Fi;l.updateFromIdToken(r);const u=new En({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new cd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=new Map;function Tn(t){bn(t instanceof Function,"Expected a class definition");let e=oy.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,oy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cw.type="NONE";const ay=cw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t,e,n){return`firebase:${t}:${e}:${n}`}class Ui{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ll(this.userKey,i.apiKey,s),this.fullPersistenceKey=ll("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?En._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ui(Tn(ay),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Tn(ay);const o=ll(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const m=En._fromJSON(e,f);c!==s&&(l=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ui(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ui(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gw(e))return"Blackberry";if(yw(e))return"Webos";if(dw(e))return"Safari";if((e.includes("chrome/")||fw(e))&&!e.includes("edge/"))return"Chrome";if(mw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hw(t=at()){return/firefox\//i.test(t)}function dw(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fw(t=at()){return/crios\//i.test(t)}function pw(t=at()){return/iemobile/i.test(t)}function mw(t=at()){return/android/i.test(t)}function gw(t=at()){return/blackberry/i.test(t)}function yw(t=at()){return/webos/i.test(t)}function Mf(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Sk(t=at()){var e;return Mf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ak(){return $A()&&document.documentMode===10}function vw(t=at()){return Mf(t)||mw(t)||yw(t)||gw(t)||/windows phone/i.test(t)||pw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(t,e=[]){let n;switch(t){case"Browser":n=ly(at());break;case"Worker":n=`${ly(at())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kk(t,e={}){return kr(t,"GET","/v2/passwordPolicy",Cr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=6;class Pk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Rk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uy(this),this.idTokenSubscription=new uy(this),this.beforeStateQueue=new Ck(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ui.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await lw(this,{idToken:e}),r=await En._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ck()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xt(this.app))return Promise.reject(In(this));const n=e?je(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xt(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kk(this),n=new Pk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ho("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ik(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ui.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_w(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ak(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ui(t){return je(t)}class uy{constructor(e){this.auth=e,this.observer=null,this.addObserver=YA(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Au={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bk(t){Au=t}function ww(t){return Au.loadJS(t)}function Dk(){return Au.recaptchaEnterpriseScript}function Ok(){return Au.gapiScript}function Vk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Lk="recaptcha-enterprise",jk="NO_RECAPTCHA";class Mk{constructor(e){this.type=Lk,this.auth=ui(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{gk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new mk(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;iy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(jk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&iy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Dk();u.length!==0&&(u+=l),ww(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function cy(t,e,n,r=!1){const i=new Mk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function hd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await cy(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await cy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(t,e){const n=Df(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ql(s,e??{}))return i;Ht(i,"already-initialized")}return n.initialize({options:e})}function Uk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zk(t,e,n){const r=ui(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Ew(e),{host:o,port:l}=$k(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Bk()}function Ew(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $k(t){const e=Ew(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:hy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:hy(o)}}}function hy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Bk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}async function qk(t,e){return kr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(t,e){return Qo(t,"POST","/v1/accounts:signInWithPassword",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk(t,e){return Qo(t,"POST","/v1/accounts:signInWithEmailLink",Cr(t,e))}async function Kk(t,e){return Qo(t,"POST","/v1/accounts:signInWithEmailLink",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends Ff{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new No(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new No(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hd(e,n,"signInWithPassword",Wk);case"emailLink":return Hk(e,{email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hd(e,r,"signUpPassword",qk);case"emailLink":return Kk(e,{idToken:n,email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t,e){return Qo(t,"POST","/v1/accounts:signInWithIdp",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk="http://localhost";class Zr extends Ff{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Of(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Zr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zi(e,n)}buildRequest(){const e={requestUri:Gk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ko(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Yk(t){const e=zs($s(t)).link,n=e?zs($s(e)).deep_link_id:null,r=zs($s(t)).deep_link_id;return(r?zs($s(r)).link:null)||r||n||e||t}class Uf{constructor(e){var n,r,i,s,o,l;const u=zs($s(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=Qk((i=u.mode)!==null&&i!==void 0?i:null);K(c&&f&&m,"argument-error"),this.apiKey=c,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Yk(e);try{return new Uf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.providerId=us.PROVIDER_ID}static credential(e,n){return No._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Uf.parseLink(n);return K(r,"argument-error"),No._fromEmailAndCode(e,r.code,r.tenantId)}}us.PROVIDER_ID="password";us.EMAIL_PASSWORD_SIGN_IN_METHOD="password";us.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends Tw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Yo{constructor(){super("facebook.com")}static credential(e){return Zr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Yo{constructor(){super("github.com")}static credential(e){return Zr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Yo{constructor(){super("twitter.com")}static credential(e,n){return Zr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xk(t,e){return Qo(t,"POST","/v1/accounts:signUp",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await En._fromIdTokenResponse(e,r,i),o=dy(r);return new ei({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=dy(r);return new ei({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function dy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends Mn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Gl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Gl(e,n,r,i)}}function xw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Gl._fromErrorAndOperation(t,s,e,r):s})}async function Jk(t,e,n=!1){const r=await Po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ei._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zk(t,e,n=!1){const{auth:r}=t;if(Xt(r.app))return Promise.reject(In(r));const i="reauthenticate";try{const s=await Po(t,xw(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=jf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),ei._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iw(t,e,n=!1){if(Xt(t.app))return Promise.reject(In(t));const r="signIn",i=await xw(t,r,e),s=await ei._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function eR(t,e){return Iw(ui(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sw(t){const e=ui(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Aw(t,e,n){if(Xt(t.app))return Promise.reject(In(t));const r=ui(t),o=await hd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Xk).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Sw(t),u}),l=await ei._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function tR(t,e,n){return Xt(t.app)?Promise.reject(In(t)):eR(je(t),us.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Sw(t),r})}function nR(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function rR(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function iR(t,e,n,r){return je(t).onAuthStateChanged(e,n,r)}function sR(t){return je(t).signOut()}const Ql="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ql,"1"),this.storage.removeItem(Ql),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=1e3,aR=10;class kw extends Cw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Ak()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},oR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kw.type="LOCAL";const lR=kw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw extends Cw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rw.type="SESSION";const Pw=Rw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Cu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await uR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=zf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return window}function hR(t){nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function dR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pR(){return Nw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw="firebaseLocalStorageDb",mR=1,Yl="firebaseLocalStorage",Dw="fbase_key";class Xo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ku(t,e){return t.transaction([Yl],e?"readwrite":"readonly").objectStore(Yl)}function gR(){const t=indexedDB.deleteDatabase(bw);return new Xo(t).toPromise()}function dd(){const t=indexedDB.open(bw,mR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yl,{keyPath:Dw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yl)?e(r):(r.close(),await gR(),e(await dd()))})})}async function fy(t,e,n){const r=ku(t,!0).put({[Dw]:e,value:n});return new Xo(r).toPromise()}async function yR(t,e){const n=ku(t,!1).get(e),r=await new Xo(n).toPromise();return r===void 0?null:r.value}function py(t,e){const n=ku(t,!0).delete(e);return new Xo(n).toPromise()}const vR=800,_R=3;class Ow{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_R)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cu._getInstance(pR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dR(),!this.activeServiceWorker)return;this.sender=new cR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dd();return await fy(e,Ql,"1"),await py(e,Ql),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>py(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ku(i,!1).getAll();return new Xo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ow.type="LOCAL";const wR=Ow;new Go(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(t,e){return e?Tn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f extends Ff{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TR(t){return Iw(t.auth,new $f(t),t.bypassAuthState)}function xR(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Zk(n,new $f(t),t.bypassAuthState)}async function IR(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Jk(n,new $f(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TR;case"linkViaPopup":case"linkViaRedirect":return IR;case"reauthViaPopup":case"reauthViaRedirect":return xR;default:Ht(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=new Go(2e3,1e4);class bi extends Vw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,bi.currentPopupAction&&bi.currentPopupAction.cancel(),bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=zf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SR.get())};e()}}bi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR="pendingRedirect",ul=new Map;class CR extends Vw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ul.get(this.auth._key());if(!e){try{const r=await kR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ul.set(this.auth._key(),e)}return this.bypassAuthState||ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kR(t,e){const n=NR(e),r=PR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function RR(t,e){ul.set(t._key(),e)}function PR(t){return Tn(t._redirectPersistence)}function NR(t){return ll(AR,t.config.apiKey,t.name)}async function bR(t,e,n=!1){if(Xt(t.app))return Promise.reject(In(t));const r=ui(t),i=ER(r,e),o=await new CR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=10*60*1e3;class OR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Lw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DR&&this.cachedEventUids.clear(),this.cachedEventUids.has(my(e))}saveEventToCache(e){this.cachedEventUids.add(my(e)),this.lastProcessedEventTime=Date.now()}}function my(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Lw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LR(t,e={}){return kr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MR=/^https?/;async function FR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await LR(t);for(const n of e)try{if(UR(n))return}catch{}Ht(t,"unauthorized-domain")}function UR(t){const e=ud(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MR.test(n))return!1;if(jR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=new Go(3e4,6e4);function gy(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $R(t){return new Promise((e,n)=>{var r,i,s;function o(){gy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gy(),n(tn(t,"network-request-failed"))},timeout:zR.get()})}if(!((i=(r=nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=nn().gapi)===null||s===void 0)&&s.load)o();else{const l=Vk("iframefcb");return nn()[l]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},ww(`${Ok()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw cl=null,e})}let cl=null;function BR(t){return cl=cl||$R(t),cl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=new Go(5e3,15e3),WR="__/auth/iframe",HR="emulator/auth/iframe",KR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QR(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lf(e,HR):`https://${t.config.authDomain}/${WR}`,r={apiKey:e.apiKey,appName:t.name,v:ls},i=GR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ko(r).slice(1)}`}async function YR(t){const e=await BR(t),n=nn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:QR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),l=nn().setTimeout(()=>{s(o)},qR.get());function u(){nn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JR=500,ZR=600,eP="_blank",tP="http://localhost";class yy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nP(t,e,n,r=JR,i=ZR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},XR),{width:r.toString(),height:i.toString(),top:s,left:o}),c=at().toLowerCase();n&&(l=fw(c)?eP:n),hw(c)&&(e=e||tP,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[_,T])=>`${g}${_}=${T},`,"");if(Sk(c)&&l!=="_self")return rP(e||"",l),new yy(null);const m=window.open(e||"",l,f);K(m,t,"popup-blocked");try{m.focus()}catch{}return new yy(m)}function rP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP="__/auth/handler",sP="emulator/auth/handler",oP=encodeURIComponent("fac");async function vy(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ls,eventId:i};if(e instanceof Tw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",QA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Yo){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${oP}=${encodeURIComponent(u)}`:"";return`${aP(t)}?${Ko(l).slice(1)}${c}`}function aP({config:t}){return t.emulator?Lf(t,sP):`https://${t.authDomain}/${iP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="webStorageSupport";class lP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pw,this._completeRedirectFn=bR,this._overrideRedirectResult=RR}async _openPopup(e,n,r,i){var s;bn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await vy(e,n,r,ud(),i);return nP(e,o,zf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await vy(e,n,r,ud(),i);return hR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await YR(e),r=new OR(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(eh,{type:eh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[eh];o!==void 0&&n(!!o),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vw()||dw()||Mf()}}const uP=lP;var _y="@firebase/auth",wy="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dP(t){Yi(new Jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_w(t)},c=new Nk(r,i,s,u);return Uk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Yi(new Jr("auth-internal",e=>{const n=ui(e.getProvider("auth").getImmediate());return(r=>new cP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pr(_y,wy,hP(t)),pr(_y,wy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=5*60,pP=Q_("authIdTokenMaxAge")||fP;let Ey=null;const mP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>pP)return;const i=n==null?void 0:n.token;Ey!==i&&(Ey=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gP(t=Z_()){const e=Df(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Fk(t,{popupRedirectResolver:uP,persistence:[wR,lR,Pw]}),r=Q_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=mP(s.toString());rR(n,o,()=>o(n.currentUser)),nR(n,l=>o(l))}}const i=K_("auth");return i&&zk(n,`http://${i}`),n}function yP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}bk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=tn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",yP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dP("Browser");var Ty=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wr,jw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function x(){}x.prototype=v.prototype,I.D=v.prototype,I.prototype=new x,I.prototype.constructor=I,I.C=function(C,P,b){for(var k=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)k[Rt-2]=arguments[Rt];return v.prototype[P].apply(C,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,v,x){x||(x=0);var C=Array(16);if(typeof v=="string")for(var P=0;16>P;++P)C[P]=v.charCodeAt(x++)|v.charCodeAt(x++)<<8|v.charCodeAt(x++)<<16|v.charCodeAt(x++)<<24;else for(P=0;16>P;++P)C[P]=v[x++]|v[x++]<<8|v[x++]<<16|v[x++]<<24;v=I.g[0],x=I.g[1],P=I.g[2];var b=I.g[3],k=v+(b^x&(P^b))+C[0]+3614090360&4294967295;v=x+(k<<7&4294967295|k>>>25),k=b+(P^v&(x^P))+C[1]+3905402710&4294967295,b=v+(k<<12&4294967295|k>>>20),k=P+(x^b&(v^x))+C[2]+606105819&4294967295,P=b+(k<<17&4294967295|k>>>15),k=x+(v^P&(b^v))+C[3]+3250441966&4294967295,x=P+(k<<22&4294967295|k>>>10),k=v+(b^x&(P^b))+C[4]+4118548399&4294967295,v=x+(k<<7&4294967295|k>>>25),k=b+(P^v&(x^P))+C[5]+1200080426&4294967295,b=v+(k<<12&4294967295|k>>>20),k=P+(x^b&(v^x))+C[6]+2821735955&4294967295,P=b+(k<<17&4294967295|k>>>15),k=x+(v^P&(b^v))+C[7]+4249261313&4294967295,x=P+(k<<22&4294967295|k>>>10),k=v+(b^x&(P^b))+C[8]+1770035416&4294967295,v=x+(k<<7&4294967295|k>>>25),k=b+(P^v&(x^P))+C[9]+2336552879&4294967295,b=v+(k<<12&4294967295|k>>>20),k=P+(x^b&(v^x))+C[10]+4294925233&4294967295,P=b+(k<<17&4294967295|k>>>15),k=x+(v^P&(b^v))+C[11]+2304563134&4294967295,x=P+(k<<22&4294967295|k>>>10),k=v+(b^x&(P^b))+C[12]+1804603682&4294967295,v=x+(k<<7&4294967295|k>>>25),k=b+(P^v&(x^P))+C[13]+4254626195&4294967295,b=v+(k<<12&4294967295|k>>>20),k=P+(x^b&(v^x))+C[14]+2792965006&4294967295,P=b+(k<<17&4294967295|k>>>15),k=x+(v^P&(b^v))+C[15]+1236535329&4294967295,x=P+(k<<22&4294967295|k>>>10),k=v+(P^b&(x^P))+C[1]+4129170786&4294967295,v=x+(k<<5&4294967295|k>>>27),k=b+(x^P&(v^x))+C[6]+3225465664&4294967295,b=v+(k<<9&4294967295|k>>>23),k=P+(v^x&(b^v))+C[11]+643717713&4294967295,P=b+(k<<14&4294967295|k>>>18),k=x+(b^v&(P^b))+C[0]+3921069994&4294967295,x=P+(k<<20&4294967295|k>>>12),k=v+(P^b&(x^P))+C[5]+3593408605&4294967295,v=x+(k<<5&4294967295|k>>>27),k=b+(x^P&(v^x))+C[10]+38016083&4294967295,b=v+(k<<9&4294967295|k>>>23),k=P+(v^x&(b^v))+C[15]+3634488961&4294967295,P=b+(k<<14&4294967295|k>>>18),k=x+(b^v&(P^b))+C[4]+3889429448&4294967295,x=P+(k<<20&4294967295|k>>>12),k=v+(P^b&(x^P))+C[9]+568446438&4294967295,v=x+(k<<5&4294967295|k>>>27),k=b+(x^P&(v^x))+C[14]+3275163606&4294967295,b=v+(k<<9&4294967295|k>>>23),k=P+(v^x&(b^v))+C[3]+4107603335&4294967295,P=b+(k<<14&4294967295|k>>>18),k=x+(b^v&(P^b))+C[8]+1163531501&4294967295,x=P+(k<<20&4294967295|k>>>12),k=v+(P^b&(x^P))+C[13]+2850285829&4294967295,v=x+(k<<5&4294967295|k>>>27),k=b+(x^P&(v^x))+C[2]+4243563512&4294967295,b=v+(k<<9&4294967295|k>>>23),k=P+(v^x&(b^v))+C[7]+1735328473&4294967295,P=b+(k<<14&4294967295|k>>>18),k=x+(b^v&(P^b))+C[12]+2368359562&4294967295,x=P+(k<<20&4294967295|k>>>12),k=v+(x^P^b)+C[5]+4294588738&4294967295,v=x+(k<<4&4294967295|k>>>28),k=b+(v^x^P)+C[8]+2272392833&4294967295,b=v+(k<<11&4294967295|k>>>21),k=P+(b^v^x)+C[11]+1839030562&4294967295,P=b+(k<<16&4294967295|k>>>16),k=x+(P^b^v)+C[14]+4259657740&4294967295,x=P+(k<<23&4294967295|k>>>9),k=v+(x^P^b)+C[1]+2763975236&4294967295,v=x+(k<<4&4294967295|k>>>28),k=b+(v^x^P)+C[4]+1272893353&4294967295,b=v+(k<<11&4294967295|k>>>21),k=P+(b^v^x)+C[7]+4139469664&4294967295,P=b+(k<<16&4294967295|k>>>16),k=x+(P^b^v)+C[10]+3200236656&4294967295,x=P+(k<<23&4294967295|k>>>9),k=v+(x^P^b)+C[13]+681279174&4294967295,v=x+(k<<4&4294967295|k>>>28),k=b+(v^x^P)+C[0]+3936430074&4294967295,b=v+(k<<11&4294967295|k>>>21),k=P+(b^v^x)+C[3]+3572445317&4294967295,P=b+(k<<16&4294967295|k>>>16),k=x+(P^b^v)+C[6]+76029189&4294967295,x=P+(k<<23&4294967295|k>>>9),k=v+(x^P^b)+C[9]+3654602809&4294967295,v=x+(k<<4&4294967295|k>>>28),k=b+(v^x^P)+C[12]+3873151461&4294967295,b=v+(k<<11&4294967295|k>>>21),k=P+(b^v^x)+C[15]+530742520&4294967295,P=b+(k<<16&4294967295|k>>>16),k=x+(P^b^v)+C[2]+3299628645&4294967295,x=P+(k<<23&4294967295|k>>>9),k=v+(P^(x|~b))+C[0]+4096336452&4294967295,v=x+(k<<6&4294967295|k>>>26),k=b+(x^(v|~P))+C[7]+1126891415&4294967295,b=v+(k<<10&4294967295|k>>>22),k=P+(v^(b|~x))+C[14]+2878612391&4294967295,P=b+(k<<15&4294967295|k>>>17),k=x+(b^(P|~v))+C[5]+4237533241&4294967295,x=P+(k<<21&4294967295|k>>>11),k=v+(P^(x|~b))+C[12]+1700485571&4294967295,v=x+(k<<6&4294967295|k>>>26),k=b+(x^(v|~P))+C[3]+2399980690&4294967295,b=v+(k<<10&4294967295|k>>>22),k=P+(v^(b|~x))+C[10]+4293915773&4294967295,P=b+(k<<15&4294967295|k>>>17),k=x+(b^(P|~v))+C[1]+2240044497&4294967295,x=P+(k<<21&4294967295|k>>>11),k=v+(P^(x|~b))+C[8]+1873313359&4294967295,v=x+(k<<6&4294967295|k>>>26),k=b+(x^(v|~P))+C[15]+4264355552&4294967295,b=v+(k<<10&4294967295|k>>>22),k=P+(v^(b|~x))+C[6]+2734768916&4294967295,P=b+(k<<15&4294967295|k>>>17),k=x+(b^(P|~v))+C[13]+1309151649&4294967295,x=P+(k<<21&4294967295|k>>>11),k=v+(P^(x|~b))+C[4]+4149444226&4294967295,v=x+(k<<6&4294967295|k>>>26),k=b+(x^(v|~P))+C[11]+3174756917&4294967295,b=v+(k<<10&4294967295|k>>>22),k=P+(v^(b|~x))+C[2]+718787259&4294967295,P=b+(k<<15&4294967295|k>>>17),k=x+(b^(P|~v))+C[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(P+(k<<21&4294967295|k>>>11))&4294967295,I.g[2]=I.g[2]+P&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var x=v-this.blockSize,C=this.B,P=this.h,b=0;b<v;){if(P==0)for(;b<=x;)i(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<v;)if(C[P++]=I.charCodeAt(b++),P==this.blockSize){i(this,C),P=0;break}}else for(;b<v;)if(C[P++]=I[b++],P==this.blockSize){i(this,C),P=0;break}}this.h=P,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var x=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=x&255,x/=256;for(this.u(I),I=Array(16),v=x=0;4>v;++v)for(var C=0;32>C;C+=8)I[x++]=this.g[v]>>>C&255;return I};function s(I,v){var x=l;return Object.prototype.hasOwnProperty.call(x,I)?x[I]:x[I]=v(I)}function o(I,v){this.h=v;for(var x=[],C=!0,P=I.length-1;0<=P;P--){var b=I[P]|0;C&&b==v||(x[P]=b,C=!1)}this.g=x}var l={};function u(I){return-128<=I&&128>I?s(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return m;if(0>I)return S(c(-I));for(var v=[],x=1,C=0;I>=x;C++)v[C]=I/x|0,x*=4294967296;return new o(v,0)}function f(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return S(f(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=c(Math.pow(v,8)),C=m,P=0;P<I.length;P+=8){var b=Math.min(8,I.length-P),k=parseInt(I.substring(P,P+b),v);8>b?(b=c(Math.pow(v,b)),C=C.j(b).add(c(k))):(C=C.j(x),C=C.add(c(k)))}return C}var m=u(0),g=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-S(this).m();for(var I=0,v=1,x=0;x<this.g.length;x++){var C=this.i(x);I+=(0<=C?C:4294967296+C)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(T(this))return"0";if(R(this))return"-"+S(this).toString(I);for(var v=c(Math.pow(I,6)),x=this,C="";;){var P=V(x,v).g;x=E(x,P.j(v));var b=((0<x.g.length?x.g[0]:x.h)>>>0).toString(I);if(x=P,T(x))return b+C;for(;6>b.length;)b="0"+b;C=b+C}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function T(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function R(I){return I.h==-1}t.l=function(I){return I=E(this,I),R(I)?-1:T(I)?0:1};function S(I){for(var v=I.g.length,x=[],C=0;C<v;C++)x[C]=~I.g[C];return new o(x,~I.h).add(g)}t.abs=function(){return R(this)?S(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),x=[],C=0,P=0;P<=v;P++){var b=C+(this.i(P)&65535)+(I.i(P)&65535),k=(b>>>16)+(this.i(P)>>>16)+(I.i(P)>>>16);C=k>>>16,b&=65535,k&=65535,x[P]=k<<16|b}return new o(x,x[x.length-1]&-2147483648?-1:0)};function E(I,v){return I.add(S(v))}t.j=function(I){if(T(this)||T(I))return m;if(R(this))return R(I)?S(this).j(S(I)):S(S(this).j(I));if(R(I))return S(this.j(S(I)));if(0>this.l(_)&&0>I.l(_))return c(this.m()*I.m());for(var v=this.g.length+I.g.length,x=[],C=0;C<2*v;C++)x[C]=0;for(C=0;C<this.g.length;C++)for(var P=0;P<I.g.length;P++){var b=this.i(C)>>>16,k=this.i(C)&65535,Rt=I.i(P)>>>16,Nr=I.i(P)&65535;x[2*C+2*P]+=k*Nr,w(x,2*C+2*P),x[2*C+2*P+1]+=b*Nr,w(x,2*C+2*P+1),x[2*C+2*P+1]+=k*Rt,w(x,2*C+2*P+1),x[2*C+2*P+2]+=b*Rt,w(x,2*C+2*P+2)}for(C=0;C<v;C++)x[C]=x[2*C+1]<<16|x[2*C];for(C=v;C<2*v;C++)x[C]=0;return new o(x,0)};function w(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function A(I,v){this.g=I,this.h=v}function V(I,v){if(T(v))throw Error("division by zero");if(T(I))return new A(m,m);if(R(I))return v=V(S(I),v),new A(S(v.g),S(v.h));if(R(v))return v=V(I,S(v)),new A(S(v.g),v.h);if(30<I.g.length){if(R(I)||R(v))throw Error("slowDivide_ only works with positive integers.");for(var x=g,C=v;0>=C.l(I);)x=F(x),C=F(C);var P=z(x,1),b=z(C,1);for(C=z(C,2),x=z(x,2);!T(C);){var k=b.add(C);0>=k.l(I)&&(P=P.add(x),b=k),C=z(C,1),x=z(x,1)}return v=E(I,P.j(v)),new A(P,v)}for(P=m;0<=I.l(v);){for(x=Math.max(1,Math.floor(I.m()/v.m())),C=Math.ceil(Math.log(x)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),b=c(x),k=b.j(v);R(k)||0<k.l(I);)x-=C,b=c(x),k=b.j(v);T(b)&&(b=g),P=P.add(b),I=E(I,k)}return new A(P,I)}t.A=function(I){return V(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),x=[],C=0;C<v;C++)x[C]=this.i(C)&I.i(C);return new o(x,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),x=[],C=0;C<v;C++)x[C]=this.i(C)|I.i(C);return new o(x,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),x=[],C=0;C<v;C++)x[C]=this.i(C)^I.i(C);return new o(x,this.h^I.h)};function F(I){for(var v=I.g.length+1,x=[],C=0;C<v;C++)x[C]=I.i(C)<<1|I.i(C-1)>>>31;return new o(x,I.h)}function z(I,v){var x=v>>5;v%=32;for(var C=I.g.length-x,P=[],b=0;b<C;b++)P[b]=0<v?I.i(b+x)>>>v|I.i(b+x+1)<<32-v:I.i(b+x);return new o(P,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,jw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Wr=o}).apply(typeof Ty<"u"?Ty:typeof self<"u"?self:typeof window<"u"?window:{});var $a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mw,Bs,Fw,hl,fd,Uw,zw,$w;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof $a=="object"&&$a];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var N=a[y];if(!(N in p))break e;p=p[N]}a=a[a.length-1],y=p[a],h=h(y),h!=y&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var p=0,y=!1,N={next:function(){if(!y&&p<a.length){var O=p++;return{value:h(O,a[O]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,p){return a.call.apply(a.bind,arguments)}function m(a,h,p){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),a.apply(h,N)}}return function(){return a.apply(h,arguments)}}function g(a,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function _(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function T(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(y,N,O){for(var U=Array(arguments.length-2),de=2;de<arguments.length;de++)U[de-2]=arguments[de];return h.prototype[N].apply(y,U)}}function R(a){const h=a.length;if(0<h){const p=Array(h);for(let y=0;y<h;y++)p[y]=a[y];return p}return[]}function S(a,h){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(u(y)){const N=a.length||0,O=y.length||0;a.length=N+O;for(let U=0;U<O;U++)a[N+U]=y[U]}else a.push(y)}}class E{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var F=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function z(a,h,p){for(const y in a)h.call(p,a[y],y,a)}function I(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function v(a){const h={};for(const p in a)h[p]=a[p];return h}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(a,h){let p,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(p in y)a[p]=y[p];for(let O=0;O<x.length;O++)p=x[O],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function P(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function b(a){l.setTimeout(()=>{throw a},0)}function k(){var a=Y;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Rt{constructor(){this.h=this.g=null}add(h,p){const y=Nr.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var Nr=new E(()=>new ps,a=>a.reset());class ps{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ln,$=!1,Y=new Rt,Z=()=>{const a=l.Promise.resolve(void 0);ln=()=>{a.then(_e)}};var _e=()=>{for(var a;a=k();){try{a.h.call(a.g)}catch(p){b(p)}var h=Nr;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ce(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var un=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function cn(a,h){if(Ce.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(F){e:{try{V(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:hn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&cn.aa.h.call(this)}}T(cn,Ce);var hn={2:"touch",3:"pen",4:"mouse"};cn.prototype.h=function(){cn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),c1=0;function h1(a,h,p,y,N){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=N,this.key=++c1,this.da=this.fa=!1}function sa(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function oa(a){this.src=a,this.g={},this.h=0}oa.prototype.add=function(a,h,p,y,N){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var U=Ju(a,h,y,N);return-1<U?(h=a[U],p||(h.fa=!1)):(h=new h1(h,this.src,O,!!y,N),h.fa=p,a.push(h)),h};function Xu(a,h){var p=h.type;if(p in a.g){var y=a.g[p],N=Array.prototype.indexOf.call(y,h,void 0),O;(O=0<=N)&&Array.prototype.splice.call(y,N,1),O&&(sa(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Ju(a,h,p,y){for(var N=0;N<a.length;++N){var O=a[N];if(!O.da&&O.listener==h&&O.capture==!!p&&O.ha==y)return N}return-1}var Zu="closure_lm_"+(1e6*Math.random()|0),ec={};function Cp(a,h,p,y,N){if(Array.isArray(h)){for(var O=0;O<h.length;O++)Cp(a,h[O],p,y,N);return null}return p=Pp(p),a&&a[dn]?a.K(h,p,c(y)?!!y.capture:!!y,N):d1(a,h,p,!1,y,N)}function d1(a,h,p,y,N,O){if(!h)throw Error("Invalid event type");var U=c(N)?!!N.capture:!!N,de=nc(a);if(de||(a[Zu]=de=new oa(a)),p=de.add(h,p,y,U,O),p.proxy)return p;if(y=f1(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)un||(N=U),N===void 0&&(N=!1),a.addEventListener(h.toString(),y,N);else if(a.attachEvent)a.attachEvent(Rp(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function f1(){function a(p){return h.call(a.src,a.listener,p)}const h=p1;return a}function kp(a,h,p,y,N){if(Array.isArray(h))for(var O=0;O<h.length;O++)kp(a,h[O],p,y,N);else y=c(y)?!!y.capture:!!y,p=Pp(p),a&&a[dn]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],p=Ju(O,p,y,N),-1<p&&(sa(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=nc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ju(h,p,y,N)),(p=-1<a?h[a]:null)&&tc(p))}function tc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[dn])Xu(h.i,a);else{var p=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(p,y,a.capture):h.detachEvent?h.detachEvent(Rp(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=nc(h))?(Xu(p,a),p.h==0&&(p.src=null,h[Zu]=null)):sa(a)}}}function Rp(a){return a in ec?ec[a]:ec[a]="on"+a}function p1(a,h){if(a.da)a=!0;else{h=new cn(h,this);var p=a.listener,y=a.ha||a.src;a.fa&&tc(a),a=p.call(y,h)}return a}function nc(a){return a=a[Zu],a instanceof oa?a:null}var rc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pp(a){return typeof a=="function"?a:(a[rc]||(a[rc]=function(h){return a.handleEvent(h)}),a[rc])}function Qe(){he.call(this),this.i=new oa(this),this.M=this,this.F=null}T(Qe,he),Qe.prototype[dn]=!0,Qe.prototype.removeEventListener=function(a,h,p,y){kp(this,a,h,p,y)};function lt(a,h){var p,y=a.F;if(y)for(p=[];y;y=y.F)p.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new Ce(h,a);else if(h instanceof Ce)h.target=h.target||a;else{var N=h;h=new Ce(y,a),C(h,N)}if(N=!0,p)for(var O=p.length-1;0<=O;O--){var U=h.g=p[O];N=aa(U,y,!0,h)&&N}if(U=h.g=a,N=aa(U,y,!0,h)&&N,N=aa(U,y,!1,h)&&N,p)for(O=0;O<p.length;O++)U=h.g=p[O],N=aa(U,y,!1,h)&&N}Qe.prototype.N=function(){if(Qe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],y=0;y<p.length;y++)sa(p[y]);delete a.g[h],a.h--}}this.F=null},Qe.prototype.K=function(a,h,p,y){return this.i.add(String(a),h,!1,p,y)},Qe.prototype.L=function(a,h,p,y){return this.i.add(String(a),h,!0,p,y)};function aa(a,h,p,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,O=0;O<h.length;++O){var U=h[O];if(U&&!U.da&&U.capture==p){var de=U.listener,ze=U.ha||U.src;U.fa&&Xu(a.i,U),N=de.call(ze,y)!==!1&&N}}return N&&!y.defaultPrevented}function Np(a,h,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function bp(a){a.g=Np(()=>{a.g=null,a.i&&(a.i=!1,bp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class m1 extends he{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:bp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ms(a){he.call(this),this.h=a,this.g={}}T(ms,he);var Dp=[];function Op(a){z(a.g,function(h,p){this.g.hasOwnProperty(p)&&tc(h)},a),a.g={}}ms.prototype.N=function(){ms.aa.N.call(this),Op(this)},ms.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ic=l.JSON.stringify,g1=l.JSON.parse,y1=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function sc(){}sc.prototype.h=null;function Vp(a){return a.h||(a.h=a.i())}function Lp(){}var gs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function oc(){Ce.call(this,"d")}T(oc,Ce);function ac(){Ce.call(this,"c")}T(ac,Ce);var br={},jp=null;function la(){return jp=jp||new Qe}br.La="serverreachability";function Mp(a){Ce.call(this,br.La,a)}T(Mp,Ce);function ys(a){const h=la();lt(h,new Mp(h))}br.STAT_EVENT="statevent";function Fp(a,h){Ce.call(this,br.STAT_EVENT,a),this.stat=h}T(Fp,Ce);function ut(a){const h=la();lt(h,new Fp(h,a))}br.Ma="timingevent";function Up(a,h){Ce.call(this,br.Ma,a),this.size=h}T(Up,Ce);function vs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function _s(){this.g=!0}_s.prototype.xa=function(){this.g=!1};function v1(a,h,p,y,N,O){a.info(function(){if(a.g)if(O)for(var U="",de=O.split("&"),ze=0;ze<de.length;ze++){var se=de[ze].split("=");if(1<se.length){var Ye=se[0];se=se[1];var Xe=Ye.split("_");U=2<=Xe.length&&Xe[1]=="type"?U+(Ye+"="+se+"&"):U+(Ye+"=redacted&")}}else U=null;else U=O;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+h+`
`+p+`
`+U})}function _1(a,h,p,y,N,O,U){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+h+`
`+p+`
`+O+" "+U})}function di(a,h,p,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+E1(a,p)+(y?" "+y:"")})}function w1(a,h){a.info(function(){return"TIMEOUT: "+h})}_s.prototype.info=function(){};function E1(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var y=p[a];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var O=N[0];if(O!="noop"&&O!="stop"&&O!="close")for(var U=1;U<N.length;U++)N[U]=""}}}}return ic(p)}catch{return h}}var ua={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},lc;function ca(){}T(ca,sc),ca.prototype.g=function(){return new XMLHttpRequest},ca.prototype.i=function(){return{}},lc=new ca;function Fn(a,h,p,y){this.j=a,this.i=h,this.l=p,this.R=y||1,this.U=new ms(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $p}function $p(){this.i=null,this.g="",this.h=!1}var Bp={},uc={};function cc(a,h,p){a.L=1,a.v=pa(fn(h)),a.m=p,a.P=!0,qp(a,null)}function qp(a,h){a.F=Date.now(),ha(a),a.A=fn(a.v);var p=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),im(p.i,"t",y),a.C=0,p=a.j.J,a.h=new $p,a.g=Tm(a.j,p?h:null,!a.m),0<a.O&&(a.M=new m1(g(a.Y,a,a.g),a.O)),h=a.U,p=a.g,y=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Dp[0]=N.toString()),N=Dp);for(var O=0;O<N.length;O++){var U=Cp(p,N[O],y||h.handleEvent,!1,h.h||h);if(!U)break;h.g[U.key]=U}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ys(),v1(a.i,a.u,a.A,a.l,a.R,a.m)}Fn.prototype.ca=function(a){a=a.target;const h=this.M;h&&pn(a)==3?h.j():this.Y(a)},Fn.prototype.Y=function(a){try{if(a==this.g)e:{const Xe=pn(this.g);var h=this.g.Ba();const mi=this.g.Z();if(!(3>Xe)&&(Xe!=3||this.g&&(this.h.h||this.g.oa()||hm(this.g)))){this.J||Xe!=4||h==7||(h==8||0>=mi?ys(3):ys(2)),hc(this);var p=this.g.Z();this.X=p;t:if(Wp(this)){var y=hm(this.g);a="";var N=y.length,O=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dr(this),ws(this);var U="";break t}this.h.i=new l.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(O&&h==N-1)});y.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=p==200,_1(this.i,this.u,this.A,this.l,this.R,Xe,p),this.o){if(this.T&&!this.K){t:{if(this.g){var de,ze=this.g;if((de=ze.g?ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(de)){var se=de;break t}}se=null}if(p=se)di(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dc(this,p);else{this.o=!1,this.s=3,ut(12),Dr(this),ws(this);break e}}if(this.P){p=!0;let Mt;for(;!this.J&&this.C<U.length;)if(Mt=T1(this,U),Mt==uc){Xe==4&&(this.s=4,ut(14),p=!1),di(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==Bp){this.s=4,ut(15),di(this.i,this.l,U,"[Invalid Chunk]"),p=!1;break}else di(this.i,this.l,Mt,null),dc(this,Mt);if(Wp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xe!=4||U.length!=0||this.h.h||(this.s=1,ut(16),p=!1),this.o=this.o&&p,!p)di(this.i,this.l,U,"[Invalid Chunked Response]"),Dr(this),ws(this);else if(0<U.length&&!this.W){this.W=!0;var Ye=this.j;Ye.g==this&&Ye.ba&&!Ye.M&&(Ye.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),vc(Ye),Ye.M=!0,ut(11))}}else di(this.i,this.l,U,null),dc(this,U);Xe==4&&Dr(this),this.o&&!this.J&&(Xe==4?vm(this.j,this):(this.o=!1,ha(this)))}else F1(this.g),p==400&&0<U.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),Dr(this),ws(this)}}}catch{}finally{}};function Wp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function T1(a,h){var p=a.C,y=h.indexOf(`
`,p);return y==-1?uc:(p=Number(h.substring(p,y)),isNaN(p)?Bp:(y+=1,y+p>h.length?uc:(h=h.slice(y,y+p),a.C=y+p,h)))}Fn.prototype.cancel=function(){this.J=!0,Dr(this)};function ha(a){a.S=Date.now()+a.I,Hp(a,a.I)}function Hp(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=vs(g(a.ba,a),h)}function hc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Fn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(w1(this.i,this.A),this.L!=2&&(ys(),ut(17)),Dr(this),this.s=2,ws(this)):Hp(this,this.S-a)};function ws(a){a.j.G==0||a.J||vm(a.j,a)}function Dr(a){hc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Op(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function dc(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||fc(p.h,a))){if(!a.K&&fc(p.h,a)&&p.G==3){try{var y=p.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)wa(p),va(p);else break e;yc(p),ut(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=vs(g(p.Za,p),6e3));if(1>=Qp(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Vr(p,11)}else if((a.K||p.g==a)&&wa(p),!w(h))for(N=p.Da.g.parse(h),h=0;h<N.length;h++){let se=N[h];if(p.T=se[0],se=se[1],p.G==2)if(se[0]=="c"){p.K=se[1],p.ia=se[2];const Ye=se[3];Ye!=null&&(p.la=Ye,p.j.info("VER="+p.la));const Xe=se[4];Xe!=null&&(p.Aa=Xe,p.j.info("SVER="+p.Aa));const mi=se[5];mi!=null&&typeof mi=="number"&&0<mi&&(y=1.5*mi,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const Mt=a.g;if(Mt){const Ta=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ta){var O=y.h;O.g||Ta.indexOf("spdy")==-1&&Ta.indexOf("quic")==-1&&Ta.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(pc(O,O.h),O.h=null))}if(y.D){const _c=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;_c&&(y.ya=_c,pe(y.I,y.D,_c))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var U=a;if(y.qa=Em(y,y.J?y.ia:null,y.W),U.K){Yp(y.h,U);var de=U,ze=y.L;ze&&(de.I=ze),de.B&&(hc(de),ha(de)),y.g=U}else gm(y);0<p.i.length&&_a(p)}else se[0]!="stop"&&se[0]!="close"||Vr(p,7);else p.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Vr(p,7):gc(p):se[0]!="noop"&&p.l&&p.l.ta(se),p.v=0)}}ys(4)}catch{}}var x1=class{constructor(a,h){this.g=a,this.map=h}};function Kp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Qp(a){return a.h?1:a.g?a.g.size:0}function fc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function pc(a,h){a.g?a.g.add(h):a.h=h}function Yp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Kp.prototype.cancel=function(){if(this.i=Xp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Xp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return R(a.i)}function I1(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],p=a.length,y=0;y<p;y++)h.push(a[y]);return h}h=[],p=0;for(y in a)h[p++]=a[y];return h}function S1(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const y in a)h[p++]=y;return h}}}function Jp(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=S1(a),y=I1(a),N=y.length,O=0;O<N;O++)h.call(void 0,y[O],p&&p[O],a)}var Zp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function A1(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var y=a[p].indexOf("="),N=null;if(0<=y){var O=a[p].substring(0,y);N=a[p].substring(y+1)}else O=a[p];h(O,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Or(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Or){this.h=a.h,da(this,a.j),this.o=a.o,this.g=a.g,fa(this,a.s),this.l=a.l;var h=a.i,p=new xs;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),em(this,p),this.m=a.m}else a&&(h=String(a).match(Zp))?(this.h=!1,da(this,h[1]||"",!0),this.o=Es(h[2]||""),this.g=Es(h[3]||"",!0),fa(this,h[4]),this.l=Es(h[5]||"",!0),em(this,h[6]||"",!0),this.m=Es(h[7]||"")):(this.h=!1,this.i=new xs(null,this.h))}Or.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ts(h,tm,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ts(h,tm,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Ts(p,p.charAt(0)=="/"?R1:k1,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Ts(p,N1)),a.join("")};function fn(a){return new Or(a)}function da(a,h,p){a.j=p?Es(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function fa(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function em(a,h,p){h instanceof xs?(a.i=h,b1(a.i,a.h)):(p||(h=Ts(h,P1)),a.i=new xs(h,a.h))}function pe(a,h,p){a.i.set(h,p)}function pa(a){return pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Es(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ts(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,C1),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function C1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var tm=/[#\/\?@]/g,k1=/[#\?:]/g,R1=/[#\?]/g,P1=/[#\?@]/g,N1=/#/g;function xs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Un(a){a.g||(a.g=new Map,a.h=0,a.i&&A1(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=xs.prototype,t.add=function(a,h){Un(this),this.i=null,a=fi(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function nm(a,h){Un(a),h=fi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function rm(a,h){return Un(a),h=fi(a,h),a.g.has(h)}t.forEach=function(a,h){Un(this),this.g.forEach(function(p,y){p.forEach(function(N){a.call(h,N,y,this)},this)},this)},t.na=function(){Un(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let y=0;y<h.length;y++){const N=a[y];for(let O=0;O<N.length;O++)p.push(h[y])}return p},t.V=function(a){Un(this);let h=[];if(typeof a=="string")rm(this,a)&&(h=h.concat(this.g.get(fi(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return Un(this),this.i=null,a=fi(this,a),rm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function im(a,h,p){nm(a,h),0<p.length&&(a.i=null,a.g.set(fi(a,h),R(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var y=h[p];const O=encodeURIComponent(String(y)),U=this.V(y);for(y=0;y<U.length;y++){var N=O;U[y]!==""&&(N+="="+encodeURIComponent(String(U[y]))),a.push(N)}}return this.i=a.join("&")};function fi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function b1(a,h){h&&!a.j&&(Un(a),a.i=null,a.g.forEach(function(p,y){var N=y.toLowerCase();y!=N&&(nm(this,y),im(this,N,p))},a)),a.j=h}function D1(a,h){const p=new _s;if(l.Image){const y=new Image;y.onload=_(zn,p,"TestLoadImage: loaded",!0,h,y),y.onerror=_(zn,p,"TestLoadImage: error",!1,h,y),y.onabort=_(zn,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=_(zn,p,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function O1(a,h){const p=new _s,y=new AbortController,N=setTimeout(()=>{y.abort(),zn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(O=>{clearTimeout(N),O.ok?zn(p,"TestPingServer: ok",!0,h):zn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),zn(p,"TestPingServer: error",!1,h)})}function zn(a,h,p,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(p)}catch{}}function V1(){this.g=new y1}function L1(a,h,p){const y=p||"";try{Jp(a,function(N,O){let U=N;c(N)&&(U=ic(N)),h.push(y+O+"="+encodeURIComponent(U))})}catch(N){throw h.push(y+"type="+encodeURIComponent("_badmap")),N}}function ma(a){this.l=a.Ub||null,this.j=a.eb||!1}T(ma,sc),ma.prototype.g=function(){return new ga(this.l,this.j)},ma.prototype.i=function(a){return function(){return a}}({});function ga(a,h){Qe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(ga,Qe),t=ga.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ss(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Is(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ss(this)),this.g&&(this.readyState=3,Ss(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function sm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Is(this):Ss(this),this.readyState==3&&sm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Is(this))},t.Qa=function(a){this.g&&(this.response=a,Is(this))},t.ga=function(){this.g&&Is(this)};function Is(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ss(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Ss(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function om(a){let h="";return z(a,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function mc(a,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=om(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):pe(a,h,p))}function Se(a){Qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Se,Qe);var j1=/^https?$/i,M1=["POST","PUT"];t=Se.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lc.g(),this.v=this.o?Vp(this.o):Vp(lc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){am(this,O);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)p.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())p.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(M1,h,void 0))||y||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,U]of p)this.g.setRequestHeader(O,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cm(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){am(this,O)}};function am(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,lm(a),ya(a)}function lm(a){a.A||(a.A=!0,lt(a,"complete"),lt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,lt(this,"complete"),lt(this,"abort"),ya(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ya(this,!0)),Se.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?um(this):this.bb())},t.bb=function(){um(this)};function um(a){if(a.h&&typeof o<"u"&&(!a.v[1]||pn(a)!=4||a.Z()!=2)){if(a.u&&pn(a)==4)Np(a.Ea,0,a);else if(lt(a,"readystatechange"),pn(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=U===0){var N=String(a.D).match(Zp)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),y=!j1.test(N?N.toLowerCase():"")}p=y}if(p)lt(a,"complete"),lt(a,"success");else{a.m=6;try{var O=2<pn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",lm(a)}}finally{ya(a)}}}}function ya(a,h){if(a.g){cm(a);const p=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||lt(a,"ready");try{p.onreadystatechange=y}catch{}}}function cm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function pn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),g1(h)}};function hm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function F1(a){const h={};a=(a.g&&2<=pn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(w(a[y]))continue;var p=P(a[y]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=h[N]||[];h[N]=O,O.push(p)}I(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function As(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function dm(a){this.Aa=0,this.i=[],this.j=new _s,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=As("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=As("baseRetryDelayMs",5e3,a),this.cb=As("retryDelaySeedMs",1e4,a),this.Wa=As("forwardChannelMaxRetries",2,a),this.wa=As("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Kp(a&&a.concurrentRequestLimit),this.Da=new V1,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=dm.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,y){ut(0),this.W=a,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=Em(this,null,this.W),_a(this)};function gc(a){if(fm(a),a.G==3){var h=a.U++,p=fn(a.I);if(pe(p,"SID",a.K),pe(p,"RID",h),pe(p,"TYPE","terminate"),Cs(a,p),h=new Fn(a,a.j,h),h.L=2,h.v=pa(fn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=Tm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ha(h)}wm(a)}function va(a){a.g&&(vc(a),a.g.cancel(),a.g=null)}function fm(a){va(a),a.u&&(l.clearTimeout(a.u),a.u=null),wa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function _a(a){if(!Gp(a.h)&&!a.s){a.s=!0;var h=a.Ga;ln||Z(),$||(ln(),$=!0),Y.add(h,a),a.B=0}}function U1(a,h){return Qp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=vs(g(a.Ga,a,h),_m(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new Fn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=v(O),C(O,this.S)):O=this.S),this.m!==null||this.O||(N.H=O,O=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=mm(this,N,h),p=fn(this.I),pe(p,"RID",a),pe(p,"CVER",22),this.D&&pe(p,"X-HTTP-Session-Id",this.D),Cs(this,p),O&&(this.O?h="headers="+encodeURIComponent(String(om(O)))+"&"+h:this.m&&mc(p,this.m,O)),pc(this.h,N),this.Ua&&pe(p,"TYPE","init"),this.P?(pe(p,"$req",h),pe(p,"SID","null"),N.T=!0,cc(N,p,null)):cc(N,p,h),this.G=2}}else this.G==3&&(a?pm(this,a):this.i.length==0||Gp(this.h)||pm(this))};function pm(a,h){var p;h?p=h.l:p=a.U++;const y=fn(a.I);pe(y,"SID",a.K),pe(y,"RID",p),pe(y,"AID",a.T),Cs(a,y),a.m&&a.o&&mc(y,a.m,a.o),p=new Fn(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=mm(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),pc(a.h,p),cc(p,y,h)}function Cs(a,h){a.H&&z(a.H,function(p,y){pe(h,y,p)}),a.l&&Jp({},function(p,y){pe(h,y,p)})}function mm(a,h,p){p=Math.min(a.i.length,p);var y=a.l?g(a.l.Na,a.l,a):null;e:{var N=a.i;let O=-1;for(;;){const U=["count="+p];O==-1?0<p?(O=N[0].g,U.push("ofs="+O)):O=0:U.push("ofs="+O);let de=!0;for(let ze=0;ze<p;ze++){let se=N[ze].g;const Ye=N[ze].map;if(se-=O,0>se)O=Math.max(0,N[ze].g-100),de=!1;else try{L1(Ye,U,"req"+se+"_")}catch{y&&y(Ye)}}if(de){y=U.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,y}function gm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ln||Z(),$||(ln(),$=!0),Y.add(h,a),a.v=0}}function yc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=vs(g(a.Fa,a),_m(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ym(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=vs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),va(this),ym(this))};function vc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ym(a){a.g=new Fn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=fn(a.qa);pe(h,"RID","rpc"),pe(h,"SID",a.K),pe(h,"AID",a.T),pe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&pe(h,"TO",a.ja),pe(h,"TYPE","xmlhttp"),Cs(a,h),a.m&&a.o&&mc(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=pa(fn(h)),p.m=null,p.P=!0,qp(p,a)}t.Za=function(){this.C!=null&&(this.C=null,va(this),yc(this),ut(19))};function wa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function vm(a,h){var p=null;if(a.g==h){wa(a),vc(a),a.g=null;var y=2}else if(fc(a.h,h))p=h.D,Yp(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var N=a.B;y=la(),lt(y,new Up(y,p)),_a(a)}else gm(a);else if(N=h.s,N==3||N==0&&0<h.X||!(y==1&&U1(a,h)||y==2&&yc(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),N){case 1:Vr(a,5);break;case 4:Vr(a,10);break;case 3:Vr(a,6);break;default:Vr(a,2)}}}function _m(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function Vr(a,h){if(a.j.info("Error code "+h),h==2){var p=g(a.fb,a),y=a.Xa;const N=!y;y=new Or(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||da(y,"https"),pa(y),N?D1(y.toString(),p):O1(y.toString(),p)}else ut(2);a.G=0,a.l&&a.l.sa(h),wm(a),fm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function wm(a){if(a.G=0,a.ka=[],a.l){const h=Xp(a.h);(h.length!=0||a.i.length!=0)&&(S(a.ka,h),S(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function Em(a,h,p){var y=p instanceof Or?fn(p):new Or(p);if(y.g!="")h&&(y.g=h+"."+y.g),fa(y,y.s);else{var N=l.location;y=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var O=new Or(null);y&&da(O,y),h&&(O.g=h),N&&fa(O,N),p&&(O.l=p),y=O}return p=a.D,h=a.ya,p&&h&&pe(y,p,h),pe(y,"VER",a.la),Cs(a,y),y}function Tm(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Se(new ma({eb:p})):new Se(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function xm(){}t=xm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ea(){}Ea.prototype.g=function(a,h){return new Et(a,h)};function Et(a,h){Qe.call(this),this.g=new dm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!w(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new pi(this)}T(Et,Qe),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){gc(this.g)},Et.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=ic(a),a=p);h.i.push(new x1(h.Ya++,a)),h.G==3&&_a(h)},Et.prototype.N=function(){this.g.l=null,delete this.j,gc(this.g),delete this.g,Et.aa.N.call(this)};function Im(a){oc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}T(Im,oc);function Sm(){ac.call(this),this.status=1}T(Sm,ac);function pi(a){this.g=a}T(pi,xm),pi.prototype.ua=function(){lt(this.g,"a")},pi.prototype.ta=function(a){lt(this.g,new Im(a))},pi.prototype.sa=function(a){lt(this.g,new Sm)},pi.prototype.ra=function(){lt(this.g,"b")},Ea.prototype.createWebChannel=Ea.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,$w=function(){return new Ea},zw=function(){return la()},Uw=br,fd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ua.NO_ERROR=0,ua.TIMEOUT=8,ua.HTTP_ERROR=6,hl=ua,zp.COMPLETE="complete",Fw=zp,Lp.EventType=gs,gs.OPEN="a",gs.CLOSE="b",gs.ERROR="c",gs.MESSAGE="d",Qe.prototype.listen=Qe.prototype.K,Bs=Lp,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,Mw=Se}).apply(typeof $a<"u"?$a:typeof self<"u"?self:typeof window<"u"?window:{});const xy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new Nf("@firebase/firestore");function Ls(){return ti.logLevel}function W(t,...e){if(ti.logLevel<=ne.DEBUG){const n=e.map(Bf);ti.debug(`Firestore (${cs}): ${t}`,...n)}}function Dn(t,...e){if(ti.logLevel<=ne.ERROR){const n=e.map(Bf);ti.error(`Firestore (${cs}): ${t}`,...n)}}function Xi(t,...e){if(ti.logLevel<=ne.WARN){const n=e.map(Bf);ti.warn(`Firestore (${cs}): ${t}`,...n)}}function Bf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: `+t;throw Dn(e),new Error(e)}function ce(t,e){t||Q()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class _P{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wP{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Sn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new Bw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new tt(e)}}class EP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class TP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new EP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ce(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.R=n.token,new xP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=SP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Ji(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Le(0,0))}static max(){return new X(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return bo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends bo{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const AP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends bo{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return AP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new B(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ge.fromString(e))}static fromName(e){return new H(ge.fromString(e).popFirst(5))}static empty(){return new H(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ge(e.slice()))}}function CP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new vr(i,H.empty(),e)}function kP(t){return new vr(t.readTime,t.key,-1)}class vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vr(X.min(),H.empty(),-1)}static max(){return new vr(X.max(),H.empty(),-1)}}function RP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==PP)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function bP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Zo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}qf.oe=-1;function Ru(t){return t==null}function Xl(t){return t===0&&1/t==-1/0}function DP(t){return typeof t=="number"&&Number.isInteger(t)&&!Xl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ci(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ww(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ba(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ba(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ba(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ba(this.root,e,this.comparator,!0)}}class Ba{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Be.RED,this.left=i??Be.EMPTY,this.right=s??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sy(this.data.getIterator())}getIteratorFrom(e){return new Sy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Sy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new It([])}unionWith(e){let n=new He(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new It(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ji(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Hw("Invalid base64 string: "+s):s}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const OP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(t){if(ce(!!t),typeof t=="string"){let e=0;const n=OP.exec(t);if(ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ni(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hf(t){const e=t.mapValue.fields.__previous_value__;return Wf(e)?Hf(e):e}function Do(t){const e=_r(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Oo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Oo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Oo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ri(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wf(t)?4:jP(t)?9007199254740991:LP(t)?10:11:Q()}function on(t,e){if(t===e)return!0;const n=ri(t);if(n!==ri(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Do(t).isEqual(Do(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=_r(i.timestampValue),l=_r(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ni(i.bytesValue).isEqual(ni(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ke(i.geoPointValue.latitude)===ke(s.geoPointValue.latitude)&&ke(i.geoPointValue.longitude)===ke(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ke(i.integerValue)===ke(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ke(i.doubleValue),l=ke(s.doubleValue);return o===l?Xl(o)===Xl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ji(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Iy(o)!==Iy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!on(o[u],l[u])))return!1;return!0}(t,e);default:return Q()}}function Vo(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function Zi(t,e){if(t===e)return 0;const n=ri(t),r=ri(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ke(s.integerValue||s.doubleValue),u=ke(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Ay(t.timestampValue,e.timestampValue);case 4:return Ay(Do(t),Do(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ni(s),u=ni(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=oe(l[c],u[c]);if(f!==0)return f}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=oe(ke(s.latitude),ke(o.latitude));return l!==0?l:oe(ke(s.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Cy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const m=s.fields||{},g=o.fields||{},_=(l=m.value)===null||l===void 0?void 0:l.arrayValue,T=(u=g.value)===null||u===void 0?void 0:u.arrayValue,R=oe(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((f=T==null?void 0:T.values)===null||f===void 0?void 0:f.length)||0);return R!==0?R:Cy(_,T)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===qa.mapValue&&o===qa.mapValue)return 0;if(s===qa.mapValue)return 1;if(o===qa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=oe(u[m],f[m]);if(g!==0)return g;const _=Zi(l[u[m]],c[f[m]]);if(_!==0)return _}return oe(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Ay(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=_r(t),r=_r(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function Cy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Zi(n[i],r[i]);if(s)return s}return oe(n.length,r.length)}function es(t){return pd(t)}function pd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_r(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ni(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=pd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${pd(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function ky(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function md(t){return!!t&&"integerValue"in t}function Kf(t){return!!t&&"arrayValue"in t}function Ry(t){return!!t&&"nullValue"in t}function Py(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function dl(t){return!!t&&"mapValue"in t}function LP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ro(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ci(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ro(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ro(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!dl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ro(n)}setAll(e){let n=qe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ro(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());dl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];dl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ci(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(ro(this.value))}}function Kw(t){const e=[];return ci(t.fields,(n,r)=>{const i=new qe([n]);if(dl(r)){const s=Kw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new It(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new it(e,0,X.min(),X.min(),X.min(),mt.empty(),0)}static newFoundDocument(e,n,r,i){return new it(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new it(e,2,n,X.min(),X.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,X.min(),X.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n){this.position=e,this.inclusive=n}}function Ny(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Zi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function by(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n="asc"){this.field=e,this.dir=n}}function MP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{}class De extends Gw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new UP(e,n,r):n==="array-contains"?new BP(e,r):n==="in"?new qP(e,r):n==="not-in"?new WP(e,r):n==="array-contains-any"?new HP(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zP(e,r):new $P(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Zi(n,this.value)):n!==null&&ri(this.value)===ri(n)&&this.matchesComparison(Zi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends Gw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Kt(e,n)}matches(e){return Qw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Qw(t){return t.op==="and"}function Yw(t){return FP(t)&&Qw(t)}function FP(t){for(const e of t.filters)if(e instanceof Kt)return!1;return!0}function gd(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+es(t.value);if(Yw(t))return t.filters.map(e=>gd(e)).join(",");{const e=t.filters.map(n=>gd(n)).join(",");return`${t.op}(${e})`}}function Xw(t,e){return t instanceof De?function(r,i){return i instanceof De&&r.op===i.op&&r.field.isEqual(i.field)&&on(r.value,i.value)}(t,e):t instanceof Kt?function(r,i){return i instanceof Kt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Xw(o,i.filters[l]),!0):!1}(t,e):void Q()}function Jw(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${es(n.value)}`}(t):t instanceof Kt?function(n){return n.op.toString()+" {"+n.getFilters().map(Jw).join(" ,")+"}"}(t):"Filter"}class UP extends De{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class zP extends De{constructor(e,n){super(e,"in",n),this.keys=Zw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $P extends De{constructor(e,n){super(e,"not-in",n),this.keys=Zw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Zw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class BP extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kf(n)&&Vo(n.arrayValue,this.value)}}class qP extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vo(this.value.arrayValue,n)}}class WP extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vo(this.value.arrayValue,n)}}class HP extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Dy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new KP(t,e,n,r,i,s,o)}function Gf(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>gd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ru(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>es(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>es(r)).join(",")),e.ue=n}return e.ue}function Qf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!MP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Xw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!by(t.startAt,e.startAt)&&by(t.endAt,e.endAt)}function yd(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function GP(t,e,n,r,i,s,o,l){return new hs(t,e,n,r,i,s,o,l)}function Pu(t){return new hs(t)}function Oy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function eE(t){return t.collectionGroup!==null}function io(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new He(qe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Lo(s,r))}),n.has(qe.keyField().canonicalString())||e.ce.push(new Lo(qe.keyField(),r))}return e.ce}function rn(t){const e=J(t);return e.le||(e.le=QP(e,io(t))),e.le}function QP(t,e){if(t.limitType==="F")return Dy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Lo(i.field,s)});const n=t.endAt?new Jl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Jl(t.startAt.position,t.startAt.inclusive):null;return Dy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vd(t,e){const n=t.filters.concat([e]);return new hs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _d(t,e,n){return new hs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nu(t,e){return Qf(rn(t),rn(e))&&t.limitType===e.limitType}function tE(t){return`${Gf(rn(t))}|lt:${t.limitType}`}function yi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Jw(i)).join(", ")}]`),Ru(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>es(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>es(i)).join(",")),`Target(${r})`}(rn(t))}; limitType=${t.limitType})`}function bu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of io(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Ny(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,io(r),i)||r.endAt&&!function(o,l,u){const c=Ny(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,io(r),i))}(t,e)}function YP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function nE(t){return(e,n)=>{let r=!1;for(const i of io(t)){const s=XP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function XP(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Zi(u,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ci(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Ww(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=new Ie(H.comparator);function On(){return JP}const rE=new Ie(H.comparator);function qs(...t){let e=rE;for(const n of t)e=e.insert(n.key,n);return e}function iE(t){let e=rE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $r(){return so()}function sE(){return so()}function so(){return new ds(t=>t.toString(),(t,e)=>t.isEqual(e))}const ZP=new Ie(H.comparator),e2=new He(H.comparator);function te(...t){let e=e2;for(const n of t)e=e.add(n);return e}const t2=new He(oe);function n2(){return t2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xl(e)?"-0":e}}function oE(t){return{integerValue:""+t}}function r2(t,e){return DP(e)?oE(e):Yf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(){this._=void 0}}function i2(t,e,n){return t instanceof jo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Wf(s)&&(s=Hf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Mo?lE(t,e):t instanceof Fo?uE(t,e):function(i,s){const o=aE(i,s),l=Vy(o)+Vy(i.Pe);return md(o)&&md(i.Pe)?oE(l):Yf(i.serializer,l)}(t,e)}function s2(t,e,n){return t instanceof Mo?lE(t,e):t instanceof Fo?uE(t,e):n}function aE(t,e){return t instanceof Zl?function(r){return md(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class jo extends Du{}class Mo extends Du{constructor(e){super(),this.elements=e}}function lE(t,e){const n=cE(e);for(const r of t.elements)n.some(i=>on(i,r))||n.push(r);return{arrayValue:{values:n}}}class Fo extends Du{constructor(e){super(),this.elements=e}}function uE(t,e){let n=cE(e);for(const r of t.elements)n=n.filter(i=>!on(i,r));return{arrayValue:{values:n}}}class Zl extends Du{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Vy(t){return ke(t.integerValue||t.doubleValue)}function cE(t){return Kf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,n){this.field=e,this.transform=n}}function a2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Mo&&i instanceof Mo||r instanceof Fo&&i instanceof Fo?Ji(r.elements,i.elements,on):r instanceof Zl&&i instanceof Zl?on(r.Pe,i.Pe):r instanceof jo&&i instanceof jo}(t.transform,e.transform)}class l2{constructor(e,n){this.version=e,this.transformResults=n}}class Ot{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ot}static exists(e){return new Ot(void 0,e)}static updateTime(e){return new Ot(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ou{}function hE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xf(t.key,Ot.none()):new ea(t.key,t.data,Ot.none());{const n=t.data,r=mt.empty();let i=new He(qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Rr(t.key,r,new It(i.toArray()),Ot.none())}}function u2(t,e,n){t instanceof ea?function(i,s,o){const l=i.value.clone(),u=jy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Rr?function(i,s,o){if(!fl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=jy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(dE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function oo(t,e,n,r){return t instanceof ea?function(s,o,l,u){if(!fl(s.precondition,o))return l;const c=s.value.clone(),f=My(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Rr?function(s,o,l,u){if(!fl(s.precondition,o))return l;const c=My(s.fieldTransforms,u,o),f=o.data;return f.setAll(dE(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return fl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function c2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=aE(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function Ly(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ji(r,i,(s,o)=>a2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ea extends Ou{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Rr extends Ou{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function dE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jy(t,e,n){const r=new Map;ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,s2(o,l,n[i]))}return r}function My(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,i2(s,o,e))}return r}class Xf extends Ou{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class h2 extends Ou{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&u2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=oo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=oo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=sE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=hE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Ji(this.mutations,e.mutations,(n,r)=>Ly(n,r))&&Ji(this.baseMutations,e.baseMutations,(n,r)=>Ly(n,r))}}class Jf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length);let i=function(){return ZP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Jf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,re;function m2(t){switch(t){default:return Q();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function fE(t){if(t===void 0)return Dn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ne.OK:return L.OK;case Ne.CANCELLED:return L.CANCELLED;case Ne.UNKNOWN:return L.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return L.INTERNAL;case Ne.UNAVAILABLE:return L.UNAVAILABLE;case Ne.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ne.NOT_FOUND:return L.NOT_FOUND;case Ne.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ne.ABORTED:return L.ABORTED;case Ne.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ne.DATA_LOSS:return L.DATA_LOSS;default:return Q()}}(re=Ne||(Ne={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=new Wr([4294967295,4294967295],0);function Fy(t){const e=g2().encode(t),n=new jw;return n.update(e),new Uint8Array(n.digest())}function Uy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Wr([n,r],0),new Wr([i,s],0)]}class Zf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ws(`Invalid padding: ${n}`);if(r<0)throw new Ws(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ws(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ws(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Wr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Wr.fromNumber(r)));return i.compare(y2)===1&&(i=new Wr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Fy(e),[r,i]=Uy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Zf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Fy(e),[r,i]=Uy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ta.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Vu(X.min(),i,new Ie(oe),On(),te())}}class ta{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ta(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class pE{constructor(e,n){this.targetId=e,this.me=n}}class mE{constructor(e,n,r=Ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class zy{constructor(){this.fe=0,this.ge=By(),this.pe=Ge.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new ta(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=By()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class v2{constructor(e){this.Le=e,this.Be=new Map,this.ke=On(),this.qe=$y(),this.Qe=new Ie(oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(yd(s))if(r===0){const o=new H(s.path);this.Ue(n,o,it.newNoDocument(o,X.min()))}else ce(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ni(r).toUint8Array()}catch(u){if(u instanceof Hw)return Xi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Zf(o,i,s)}catch(u){return Xi(u instanceof Ws?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&yd(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,it.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Vu(e,n,this.Qe,this.ke,r);return this.ke=On(),this.qe=$y(),this.Qe=new Ie(oe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new zy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new He(oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new zy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function $y(){return new Ie(H.comparator)}function By(){return new Ie(H.comparator)}const _2={asc:"ASCENDING",desc:"DESCENDING"},w2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},E2={and:"AND",or:"OR"};class T2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wd(t,e){return t.useProto3Json||Ru(e)?e:{value:e}}function eu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function x2(t,e){return eu(t,e.toTimestamp())}function sn(t){return ce(!!t),X.fromTimestamp(function(n){const r=_r(n);return new Le(r.seconds,r.nanos)}(t))}function ep(t,e){return Ed(t,e).canonicalString()}function Ed(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function yE(t){const e=ge.fromString(t);return ce(TE(e)),e}function Td(t,e){return ep(t.databaseId,e.path)}function th(t,e){const n=yE(e);if(n.get(1)!==t.databaseId.projectId)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(_E(n))}function vE(t,e){return ep(t.databaseId,e)}function I2(t){const e=yE(t);return e.length===4?ge.emptyPath():_E(e)}function xd(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _E(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function qy(t,e,n){return{name:Td(t,e),fields:n.value.mapValue.fields}}function S2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(ce(f===void 0||typeof f=="string"),Ge.fromBase64String(f||"")):(ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ge.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?L.UNKNOWN:fE(c.code);return new B(f,c.message||"")}(o);n=new mE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=th(t,r.document.name),s=sn(r.document.updateTime),o=r.document.createTime?sn(r.document.createTime):X.min(),l=new mt({mapValue:{fields:r.document.fields}}),u=it.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new pl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=th(t,r.document),s=r.readTime?sn(r.readTime):X.min(),o=it.newNoDocument(i,s),l=r.removedTargetIds||[];n=new pl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=th(t,r.document),s=r.removedTargetIds||[];n=new pl([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new p2(i,s),l=r.targetId;n=new pE(l,o)}}return n}function A2(t,e){let n;if(e instanceof ea)n={update:qy(t,e.key,e.value)};else if(e instanceof Xf)n={delete:Td(t,e.key)};else if(e instanceof Rr)n={update:qy(t,e.key,e.data),updateMask:V2(e.fieldMask)};else{if(!(e instanceof h2))return Q();n={verify:Td(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof jo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Mo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Fo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Zl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:x2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function C2(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?sn(i.updateTime):sn(s);return o.isEqual(X.min())&&(o=sn(s)),new l2(o,i.transformResults||[])}(n,e))):[]}function k2(t,e){return{documents:[vE(t,e.path)]}}function R2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=vE(t,i);const s=function(c){if(c.length!==0)return EE(Kt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:vi(g.field),direction:b2(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=wd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function P2(t){let e=I2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=wE(m);return g instanceof Kt&&Yw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(T){return new Lo(_i(T.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Ru(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,_=m.values||[];return new Jl(_,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,_=m.values||[];return new Jl(_,g)}(n.endAt)),GP(e,i,o,s,l,"F",u,c)}function N2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function wE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_i(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_i(n.unaryFilter.field);return De.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_i(n.unaryFilter.field);return De.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_i(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return De.create(_i(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kt.create(n.compositeFilter.filters.map(r=>wE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function b2(t){return _2[t]}function D2(t){return w2[t]}function O2(t){return E2[t]}function vi(t){return{fieldPath:t.canonicalString()}}function _i(t){return qe.fromServerFormat(t.fieldPath)}function EE(t){return t instanceof De?function(n){if(n.op==="=="){if(Py(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NAN"}};if(Ry(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Py(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NOT_NAN"}};if(Ry(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vi(n.field),op:D2(n.op),value:n.value}}}(t):t instanceof Kt?function(n){const r=n.getFilters().map(i=>EE(i));return r.length===1?r[0]:{compositeFilter:{op:O2(n.op),filters:r}}}(t):Q()}function V2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function TE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r,i,s=X.min(),o=X.min(),l=Ge.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e){this.ct=e}}function j2(t){const e=P2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_d(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(){this.un=new F2}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(vr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class F2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new He(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new He(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ts(0)}static kn(){return new ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(){this.changes=new ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&oo(r.mutation,i,It.empty(),Le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=$r();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=qs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=On();const o=so(),l=function(){return so()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Rr)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),oo(f.mutation,c,f.mutation.getFieldMask(),Le.now())):o.set(c.key,It.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var m;return l.set(c,new z2(f,(m=o.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=so();let i=new Ie((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||It.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=sE();f.forEach(g=>{if(!s.has(g)){const _=hE(n.get(g),r.get(g));_!==null&&m.set(g,_),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):eE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve($r());let l=-1,u=s;return o.next(c=>j.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,te())).next(f=>({batchId:l,changes:iE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=qs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=qs();return this.indexManager.getCollectionParents(e,s).next(l=>j.forEach(l,u=>{const c=function(m,g){return new hs(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,it.newInvalidDocument(f)))});let l=qs();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&oo(f.mutation,c,It.empty(),Le.now()),bu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:sn(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:j2(i.bundledQuery),readTime:sn(i.readTime)}}(n)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(){this.overlays=new Ie(H.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$r();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=$r(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=$r(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=$r(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return j.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new f2(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(){this.Tr=new He(Me.Er),this.dr=new He(Me.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Me(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new ge([])),r=new Me(n,e),i=new Me(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new ge([])),r=new Me(n,e),i=new Me(n,e+1);let s=te();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Me(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||oe(e.wr,n.wr)}static Ar(e,n){return oe(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new He(Me.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new d2(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Me(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(oe);return n.forEach(i=>{const s=new Me(i,0),o=new Me(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Me(new H(s),0);let l=new He(oe);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),j.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,i=>{const s=new Me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Me(n,0),i=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e){this.Mr=e,this.docs=function(){return new Ie(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=On();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():it.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=On();const o=n.path,l=new H(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||RP(kP(f),r)<=0||(i.has(f.key)||bu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new G2(this)}getSize(e){return j.resolve(this.size)}}class G2 extends U2{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e){this.persistence=e,this.Nr=new ds(n=>Gf(n),Qf),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new tp,this.targetCount=0,this.kr=ts.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ts(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e,n){this.qr={},this.overlays={},this.Qr=new qf(0),this.Kr=!1,this.Kr=!0,this.$r=new W2,this.referenceDelegate=e(this),this.Ur=new Q2(this),this.indexManager=new M2,this.remoteDocumentCache=function(i){return new K2(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new L2(n),this.Gr=new B2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new q2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new H2(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new X2(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class X2 extends NP{constructor(e){super(),this.currentSequenceNumber=e}}class np{constructor(e){this.persistence=e,this.Jr=new tp,this.Yr=null}static Zr(e){return new np(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new rp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return BA()?8:bP(at())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new J2;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ls()<=ne.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",yi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(Ls()<=ne.DEBUG&&W("QueryEngine","Query:",yi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ls()<=ne.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",yi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rn(n))):j.resolve())}Yi(e,n){if(Oy(n))return j.resolve(null);let r=rn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=_d(n,null,"F"),r=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,_d(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Oy(n)||i.isEqual(X.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?j.resolve(null):(Ls()<=ne.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),yi(n)),this.rs(e,o,n,CP(i,-1)).next(l=>l))})}ts(e,n){let r=new He(nE(e));return n.forEach((i,s)=>{bu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ls()<=ne.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",yi(n)),this.Ji.getDocumentsMatchingQuery(e,n,vr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ie(oe),this._s=new ds(s=>Gf(s),Qf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $2(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function tN(t,e,n,r){return new eN(t,e,n,r)}async function xE(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function nN(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,g=m.keys();let _=j.resolve();return g.forEach(T=>{_=_.next(()=>f.getEntry(u,T)).next(R=>{const S=c.docVersions.get(T);ce(S!==null),R.version.compareTo(S)<0&&(m.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),f.addEntry(R)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function IE(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function rN(t,e){const n=J(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,m)));let _=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?_=_.withResumeToken(Ge.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),i=i.insert(m,_),function(R,S,E){return R.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,_,f)&&l.push(n.Ur.updateTargetData(s,_))});let u=On(),c=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(iN(s,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(X.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return j.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function iN(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=On();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function sN(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function oN(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Id(t,e,n){const r=J(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Zo(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Wy(t,e,n){const r=J(t);let i=X.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=J(u),g=m._s.get(f);return g!==void 0?j.resolve(m.os.get(g)):m.Ur.getTargetData(c,f)}(r,o,rn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:te())).next(l=>(aN(r,YP(e),l),{documents:l,Ts:s})))}function aN(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Hy{constructor(){this.activeTargetIds=n2()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lN{constructor(){this.so=new Hy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Hy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wa=null;function nh(){return Wa===null?Wa=function(){return 268435456+Math.round(2147483648*Math.random())}():Wa++,"0x"+Wa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="WebChannelConnection";class dN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=nh(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(f=>(W("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Xi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=cN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=nh();return new Promise((o,l)=>{const u=new Mw;u.setWithCredentials(!0),u.listenOnce(Fw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case hl.NO_ERROR:const f=u.getResponseJson();W(et,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case hl.TIMEOUT:W(et,`RPC '${e}' ${s} timed out`),l(new B(L.DEADLINE_EXCEEDED,"Request time out"));break;case hl.HTTP_ERROR:const m=u.getStatus();if(W(et,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const T=function(S){const E=S.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(E)>=0?E:L.UNKNOWN}(_.status);l(new B(T,_.message))}else l(new B(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new B(L.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{W(et,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);W(et,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=nh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$w(),l=zw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");W(et,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let g=!1,_=!1;const T=new hN({Io:S=>{_?W(et,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(g||(W(et,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),W(et,`RPC '${e}' stream ${i} sending:`,S),m.send(S))},To:()=>m.close()}),R=(S,E,w)=>{S.listen(E,A=>{try{w(A)}catch(V){setTimeout(()=>{throw V},0)}})};return R(m,Bs.EventType.OPEN,()=>{_||(W(et,`RPC '${e}' stream ${i} transport opened.`),T.yo())}),R(m,Bs.EventType.CLOSE,()=>{_||(_=!0,W(et,`RPC '${e}' stream ${i} transport closed`),T.So())}),R(m,Bs.EventType.ERROR,S=>{_||(_=!0,Xi(et,`RPC '${e}' stream ${i} transport errored:`,S),T.So(new B(L.UNAVAILABLE,"The operation could not be completed")))}),R(m,Bs.EventType.MESSAGE,S=>{var E;if(!_){const w=S.data[0];ce(!!w);const A=w,V=A.error||((E=A[0])===null||E===void 0?void 0:E.error);if(V){W(et,`RPC '${e}' stream ${i} received error:`,V);const F=V.status;let z=function(x){const C=Ne[x];if(C!==void 0)return fE(C)}(F),I=V.message;z===void 0&&(z=L.INTERNAL,I="Unknown error status: "+F+" with message "+V.message),_=!0,T.So(new B(z,I)),m.close()}else W(et,`RPC '${e}' stream ${i} received:`,w),T.bo(w)}}),R(l,Uw.STAT_EVENT,S=>{S.stat===fd.PROXY?W(et,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===fd.NOPROXY&&W(et,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function rh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t){return new T2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new SE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new B(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fN extends AE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=S2(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?sn(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=xd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=yd(u)?{documents:k2(s,u)}:{query:R2(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=gE(s,o.resumeToken);const c=wd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=eu(s,o.snapshotVersion.toTimestamp());const c=wd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=N2(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=xd(this.serializer),n.removeTarget=e,this.a_(n)}}class pN extends AE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ce(!!e.streamToken),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=C2(e.writeResults,e.commitTime),r=sn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=xd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>A2(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Ed(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Ed(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class gN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Dn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{hi(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=J(u);c.L_.add(4),await na(c),c.q_.set("Unknown"),c.L_.delete(4),await ju(c)}(this))})}),this.q_=new gN(r,i)}}async function ju(t){if(hi(t))for(const e of t.B_)await e(!0)}async function na(t){for(const e of t.B_)await e(!1)}function CE(t,e){const n=J(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ap(n)?op(n):fs(n).r_()&&sp(n,e))}function ip(t,e){const n=J(t),r=fs(n);n.N_.delete(e),r.r_()&&kE(n,e),n.N_.size===0&&(r.r_()?r.o_():hi(n)&&n.q_.set("Unknown"))}function sp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}fs(t).A_(e)}function kE(t,e){t.Q_.xe(e),fs(t).R_(e)}function op(t){t.Q_=new v2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),fs(t).start(),t.q_.v_()}function ap(t){return hi(t)&&!fs(t).n_()&&t.N_.size>0}function hi(t){return J(t).L_.size===0}function RE(t){t.Q_=void 0}async function vN(t){t.q_.set("Online")}async function _N(t){t.N_.forEach((e,n)=>{sp(t,e)})}async function wN(t,e){RE(t),ap(t)?(t.q_.M_(e),op(t)):t.q_.set("Unknown")}async function EN(t,e,n){if(t.q_.set("Online"),e instanceof mE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await tu(t,r)}else if(e instanceof pl?t.Q_.Ke(e):e instanceof pE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await IE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(c);f&&s.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Ge.EMPTY_BYTE_STRING,f.snapshotVersion)),kE(s,u);const m=new nr(f.target,u,c,f.sequenceNumber);sp(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await tu(t,r)}}async function tu(t,e,n){if(!Zo(e))throw e;t.L_.add(1),await na(t),t.q_.set("Offline"),n||(n=()=>IE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ju(t)})}function PE(t,e){return e().catch(n=>tu(t,n,e))}async function Mu(t){const e=J(t),n=wr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;TN(e);)try{const i=await sN(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,xN(e,i)}catch(i){await tu(e,i)}NE(e)&&bE(e)}function TN(t){return hi(t)&&t.O_.length<10}function xN(t,e){t.O_.push(e);const n=wr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function NE(t){return hi(t)&&!wr(t).n_()&&t.O_.length>0}function bE(t){wr(t).start()}async function IN(t){wr(t).p_()}async function SN(t){const e=wr(t);for(const n of t.O_)e.m_(n.mutations)}async function AN(t,e,n){const r=t.O_.shift(),i=Jf.from(r,e,n);await PE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Mu(t)}async function CN(t,e){e&&wr(t).V_&&await async function(r,i){if(function(o){return m2(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();wr(r).s_(),await PE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Mu(r)}}(t,e),NE(t)&&bE(t)}async function Gy(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=hi(n);n.L_.add(3),await na(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ju(n)}async function kN(t,e){const n=J(t);e?(n.L_.delete(2),await ju(n)):e||(n.L_.add(2),await na(n),n.q_.set("Unknown"))}function fs(t){return t.K_||(t.K_=function(n,r,i){const s=J(n);return s.w_(),new fN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:vN.bind(null,t),Ro:_N.bind(null,t),mo:wN.bind(null,t),d_:EN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ap(t)?op(t):t.q_.set("Unknown")):(await t.K_.stop(),RE(t))})),t.K_}function wr(t){return t.U_||(t.U_=function(n,r,i){const s=J(n);return s.w_(),new pN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:IN.bind(null,t),mo:CN.bind(null,t),f_:SN.bind(null,t),g_:AN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Mu(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new lp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function up(t,e){if(Dn("AsyncQueue",`${e}: ${t}`),Zo(t))return new B(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=qs(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new $i(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $i)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $i;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(){this.W_=new Ie(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ns{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ns(e,n,$i.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class PN{constructor(){this.queries=Yy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=Yy(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new B(L.ABORTED,"Firestore shutting down"))}}function Yy(){return new ds(t=>tE(t),Nu)}async function cp(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new RN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=up(o,`Initialization of query '${yi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&dp(n)}async function hp(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function NN(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&dp(n)}function bN(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function dp(t){t.Y_.forEach(e=>{e.next()})}var Sd,Xy;(Xy=Sd||(Sd={})).ea="default",Xy.Cache="cache";class fp{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Sd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e){this.key=e}}class OE{constructor(e){this.key=e}}class DN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=nE(e),this.Ra=new $i(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Qy,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),_=bu(this.query,m)?m:null,T=!!g&&this.mutatedKeys.has(g.key),R=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let S=!1;g&&_?g.data.isEqual(_.data)?T!==R&&(r.track({type:3,doc:_}),S=!0):this.ga(g,_)||(r.track({type:2,doc:_}),S=!0,(u&&this.Aa(_,u)>0||c&&this.Aa(_,c)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),S=!0):g&&!_&&(r.track({type:1,doc:g}),S=!0,(u||c)&&(l=!0)),S&&(_?(o=o.add(_),s=R?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(_,T){const R=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return R(_)-R(T)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new ns(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Qy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new OE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new DE(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ns.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class ON{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class VN{constructor(e){this.key=e,this.va=!1}}class LN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ds(l=>tE(l),Nu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ie(H.comparator),this.Na=new Map,this.La=new tp,this.Ba={},this.ka=new Map,this.qa=ts.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function jN(t,e,n=!0){const r=UE(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await VE(r,e,n,!0),i}async function MN(t,e){const n=UE(t);await VE(n,e,!0,!1)}async function VE(t,e,n,r){const i=await oN(t.localStore,rn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await FN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&CE(t.remoteStore,i),l}async function FN(t,e,n,r,i){t.Ka=(m,g,_)=>async function(R,S,E,w){let A=S.view.ma(E);A.ns&&(A=await Wy(R.localStore,S.query,!1).then(({documents:I})=>S.view.ma(I,A)));const V=w&&w.targetChanges.get(S.targetId),F=w&&w.targetMismatches.get(S.targetId)!=null,z=S.view.applyChanges(A,R.isPrimaryClient,V,F);return Zy(R,S.targetId,z.wa),z.snapshot}(t,m,g,_);const s=await Wy(t.localStore,e,!0),o=new DN(e,s.Ts),l=o.ma(s.documents),u=ta.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Zy(t,n,c.wa);const f=new ON(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function UN(t,e,n){const r=J(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Nu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Id(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ip(r.remoteStore,i.targetId),Ad(r,i.targetId)}).catch(Jo)):(Ad(r,i.targetId),await Id(r.localStore,i.targetId,!0))}async function zN(t,e){const n=J(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ip(n.remoteStore,r.targetId))}async function $N(t,e,n){const r=QN(t);try{const i=await function(o,l){const u=J(o),c=Le.now(),f=l.reduce((_,T)=>_.add(T.key),te());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let T=On(),R=te();return u.cs.getEntries(_,f).next(S=>{T=S,T.forEach((E,w)=>{w.isValidDocument()||(R=R.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,T)).next(S=>{m=S;const E=[];for(const w of l){const A=c2(w,m.get(w.key).overlayedDocument);A!=null&&E.push(new Rr(w.key,A,Kw(A.value.mapValue),Ot.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,E,l)}).next(S=>{g=S;const E=S.applyToLocalDocumentSet(m,R);return u.documentOverlayCache.saveOverlays(_,S.batchId,E)})}).then(()=>({batchId:g.batchId,changes:iE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ie(oe)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await ra(r,i.changes),await Mu(r.remoteStore)}catch(i){const s=up(i,"Failed to persist write");n.reject(s)}}async function LE(t,e){const n=J(t);try{const r=await rN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ce(o.va):i.removedDocuments.size>0&&(ce(o.va),o.va=!1))}),await ra(n,r,e)}catch(r){await Jo(r)}}function Jy(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(l)&&(c=!0)}),c&&dp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BN(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ie(H.comparator);o=o.insert(s,it.newNoDocument(s,X.min()));const l=te().add(s),u=new Vu(X.min(),new Map,new Ie(oe),o,l);await LE(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),pp(r)}else await Id(r.localStore,e,!1).then(()=>Ad(r,e,n)).catch(Jo)}async function qN(t,e){const n=J(t),r=e.batch.batchId;try{const i=await nN(n.localStore,e);ME(n,r,null),jE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ra(n,i)}catch(i){await Jo(i)}}async function WN(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(ce(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);ME(r,e,n),jE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ra(r,i)}catch(i){await Jo(i)}}function jE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function ME(t,e,n){const r=J(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Ad(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||FE(t,r)})}function FE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(ip(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),pp(t))}function Zy(t,e,n){for(const r of n)r instanceof DE?(t.La.addReference(r.key,e),HN(t,r)):r instanceof OE?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||FE(t,r.key)):Q()}function HN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),pp(t))}function pp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(ge.fromString(e)),r=t.qa.next();t.Na.set(r,new VN(n)),t.Oa=t.Oa.insert(n,r),CE(t.remoteStore,new nr(rn(Pu(n.path)),r,"TargetPurposeLimboResolution",qf.oe))}}async function ra(t,e,n){const r=J(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=rp.Wi(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>j.forEach(c,g=>j.forEach(g.$i,_=>f.persistence.referenceDelegate.addReference(m,g.targetId,_)).next(()=>j.forEach(g.Ui,_=>f.persistence.referenceDelegate.removeReference(m,g.targetId,_)))))}catch(m){if(!Zo(m))throw m;W("LocalStore","Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const _=f.os.get(g),T=_.snapshotVersion,R=_.withLastLimboFreeSnapshotVersion(T);f.os=f.os.insert(g,R)}}}(r.localStore,s))}async function KN(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await xE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new B(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ra(n,r.hs)}}function GN(t,e){const n=J(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function UE(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=LE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BN.bind(null,e),e.Ca.d_=NN.bind(null,e.eventManager),e.Ca.$a=bN.bind(null,e.eventManager),e}function QN(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WN.bind(null,e),e}class nu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return tN(this.persistence,new Z2,e.initialUser,this.serializer)}Ga(e){return new Y2(np.Zr,this.serializer)}Wa(e){return new lN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nu.provider={build:()=>new nu};class Cd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KN.bind(null,this.syncEngine),await kN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PN}()}createDatastore(e){const n=Lu(e.databaseInfo.databaseId),r=function(s){return new dN(s)}(e.databaseInfo);return function(s,o,l,u){return new mN(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new yN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Jy(this.syncEngine,n,0),function(){return Ky.D()?new Ky:new uN}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const m=new LN(i,s,o,l,u,c);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await na(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Cd.provider={build:()=>new Cd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Dn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=qw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=up(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ih(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await xE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ev(t,e){t.asyncQueue.verifyOperationInProgress();const n=await XN(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Gy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Gy(e.remoteStore,i)),t._onlineComponents=e}async function XN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await ih(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Xi("Error using user provided cache. Falling back to memory cache: "+n),await ih(t,new nu)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await ih(t,new nu);return t._offlineComponents}async function zE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await ev(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await ev(t,new Cd))),t._onlineComponents}function JN(t){return zE(t).then(e=>e.syncEngine)}async function ru(t){const e=await zE(t),n=e.eventManager;return n.onListen=jN.bind(null,e.syncEngine),n.onUnlisten=UN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=MN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=zN.bind(null,e.syncEngine),n}function ZN(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new mp({next:g=>{f.Za(),o.enqueueAndForget(()=>hp(s,m));const _=g.docs.has(l);!_&&g.fromCache?c.reject(new B(L.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&u&&u.source==="server"?c.reject(new B(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new fp(Pu(l.path),f,{includeMetadataChanges:!0,_a:!0});return cp(s,m)}(await ru(t),t.asyncQueue,e,n,r)),r.promise}function eb(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new mp({next:g=>{f.Za(),o.enqueueAndForget(()=>hp(s,m)),g.fromCache&&u.source==="server"?c.reject(new B(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new fp(l,f,{includeMetadataChanges:!0,_a:!0});return cp(s,m)}(await ru(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(t,e,n){if(!n)throw new B(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tb(t,e,n,r){if(e===!0&&r===!0)throw new B(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function nv(t){if(!H.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rv(t){if(H.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function wt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fu(t);throw new B(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$E((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Uu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vP;switch(r.type){case"firstParty":return new TP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=tv.get(n);r&&(W("ComponentProvider","Removing Datastore"),tv.delete(n),r.terminate())}(this),Promise.resolve()}}function nb(t,e,n,r={}){var i;const s=(t=wt(t,Uu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Xi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=tt.MOCK_USER;else{l=LA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new B(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new tt(c)}t._authCredentials=new _P(new Bw(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pr(this.firestore,e,this._query)}}class st{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}}class mr extends Pr{constructor(e,n,r){super(e,n,Pu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new H(e))}withConverter(e){return new mr(this.firestore,e,this._path)}}function Er(t,e,...n){if(t=je(t),BE("collection","path",e),t instanceof Uu){const r=ge.fromString(e,...n);return rv(r),new mr(t,null,r)}{if(!(t instanceof st||t instanceof mr))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return rv(r),new mr(t.firestore,null,r)}}function Ee(t,e,...n){if(t=je(t),arguments.length===1&&(e=qw.newId()),BE("doc","path",e),t instanceof Uu){const r=ge.fromString(e,...n);return nv(r),new st(t,null,new H(r))}{if(!(t instanceof st||t instanceof mr))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return nv(r),new st(t.firestore,t instanceof mr?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new SE(this,"async_queue_retry"),this.Vu=()=>{const r=rh();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=rh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=rh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Sn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Zo(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Dn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=lp.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function ov(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Vn extends Uu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new sv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sv(e),this._firestoreClient=void 0,await e}}}function rb(t,e){const n=typeof t=="object"?t:Z_(),r=typeof t=="string"?t:"(default)",i=Df(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=OA("firestore");s&&nb(i,...s)}return i}function zu(t){if(t._terminated)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ib(t),t._firestoreClient}function ib(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new VP(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,$E(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new YN(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rs(Ge.fromBase64String(e))}catch(n){throw new B(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new rs(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=/^__.*__$/;class ob{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ea(e,this.data,n,this.fieldTransforms)}}class qE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function WE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class vp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new vp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return iu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(WE(this.Cu)&&sb.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class ab{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Lu(e)}Qu(e,n,r,i=!1){return new vp({Cu:e,methodName:n,qu:r,path:qe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qu(t){const e=t._freezeSettings(),n=Lu(t._databaseId);return new ab(t._databaseId,!!e.ignoreUndefinedProperties,n)}function HE(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);wp("Data must be an object, but it was:",o,r);const l=KE(r,o);let u,c;if(s.merge)u=new It(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=kd(e,m,n);if(!o.contains(g))throw new B(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);QE(f,g)||f.push(g)}u=new It(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new ob(new mt(l),u,c)}class Wu extends Bu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wu}}class _p extends Bu{_toFieldTransform(e){return new o2(e.path,new jo)}isEqual(e){return e instanceof _p}}function lb(t,e,n,r){const i=t.Qu(1,e,n);wp("Data must be an object, but it was:",i,r);const s=[],o=mt.empty();ci(r,(u,c)=>{const f=Ep(e,u,n);c=je(c);const m=i.Nu(f);if(c instanceof Wu)s.push(f);else{const g=ia(c,m);g!=null&&(s.push(f),o.set(f,g))}});const l=new It(s);return new qE(o,l,i.fieldTransforms)}function ub(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[kd(e,r,n)],u=[i];if(s.length%2!=0)throw new B(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(kd(e,s[g])),u.push(s[g+1]);const c=[],f=mt.empty();for(let g=l.length-1;g>=0;--g)if(!QE(c,l[g])){const _=l[g];let T=u[g];T=je(T);const R=o.Nu(_);if(T instanceof Wu)c.push(_);else{const S=ia(T,R);S!=null&&(c.push(_),f.set(_,S))}}const m=new It(c);return new qE(f,m,o.fieldTransforms)}function cb(t,e,n,r=!1){return ia(n,t.Qu(r?4:3,e))}function ia(t,e){if(GE(t=je(t)))return wp("Unsupported field value:",e,t),KE(t,e);if(t instanceof Bu)return function(r,i){if(!WE(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=ia(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return r2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Le.fromDate(r);return{timestampValue:eu(i.serializer,s)}}if(r instanceof Le){const s=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:eu(i.serializer,s)}}if(r instanceof gp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rs)return{bytesValue:gE(i.serializer,r._byteString)};if(r instanceof st){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ep(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof yp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Yf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Fu(r)}`)}(t,e)}function KE(t,e){const n={};return Ww(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ci(t,(r,i)=>{const s=ia(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function GE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof gp||t instanceof rs||t instanceof st||t instanceof Bu||t instanceof yp)}function wp(t,e,n){if(!GE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Fu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function kd(t,e,n){if((e=je(e))instanceof $u)return e._internalPath;if(typeof e=="string")return Ep(t,e);throw iu("Field path arguments must be of type string or ",t,!1,void 0,n)}const hb=new RegExp("[~\\*/\\[\\]]");function Ep(t,e,n){if(e.search(hb)>=0)throw iu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $u(...e.split("."))._internalPath}catch{throw iu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function iu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new B(L.INVALID_ARGUMENT,l+t+u)}function QE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new db(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class db extends YE{data(){return super.data()}}function Hu(t,e){return typeof e=="string"?Ep(t,e):e instanceof $u?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tp{}class JE extends Tp{}function Ku(t,e,...n){let r=[];e instanceof Tp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Ip).length,l=s.filter(u=>u instanceof Gu).length;if(o>1||o>0&&l>0)throw new B(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Gu extends JE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Gu(e,n,r)}_apply(e){const n=this._parse(e);return e1(e._query,n),new Pr(e.firestore,e.converter,vd(e._query,n))}_parse(e){const n=qu(e.firestore);return function(s,o,l,u,c,f,m){let g;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){lv(m,f);const _=[];for(const T of m)_.push(av(u,s,T));g={arrayValue:{values:_}}}else g=av(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||lv(m,f),g=cb(l,o,m,f==="in"||f==="not-in");return De.create(c,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function xp(t,e,n){const r=e,i=Hu("where",t);return Gu._create(i,r,n)}class Ip extends Tp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ip(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)e1(o,u),o=vd(o,u)}(e._query,n),new Pr(e.firestore,e.converter,vd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Sp extends JE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Sp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Lo(s,o)}(e._query,this._field,this._direction);return new Pr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new hs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function ZE(t,e="asc"){const n=e,r=Hu("orderBy",t);return Sp._create(r,n)}function av(t,e,n){if(typeof(n=je(n))=="string"){if(n==="")throw new B(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!eE(e)&&n.indexOf("/")!==-1)throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!H.isDocumentKey(r))throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ky(t,new H(r))}if(n instanceof st)return ky(t,n._key);throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fu(n)}.`)}function lv(t,e){if(!Array.isArray(t)||t.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function e1(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class fb{convertValue(e,n="none"){switch(ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ci(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ke(o.doubleValue));return new yp(s)}convertGeoPoint(e){return new gp(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Do(e));default:return null}}convertTimestamp(e){const n=_r(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);ce(TE(r));const i=new Oo(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Dn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class n1 extends YE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ml(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Hu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ml extends n1{data(e={}){return super.data(e)}}class r1{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Hs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ml(this._firestore,this._userDataWriter,r.key,r,new Hs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ml(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Hs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ml(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Hs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:pb(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t){t=wt(t,st);const e=wt(t.firestore,Vn);return ZN(zu(e),t._key).then(n=>o1(e,t,n))}class Ap extends fb{constructor(e){super(),this.firestore=e}convertBytes(e){return new rs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,n)}}function Qu(t){t=wt(t,Pr);const e=wt(t.firestore,Vn),n=zu(e),r=new Ap(e);return XE(t._query),eb(n,t._query).then(i=>new r1(e,r,t,i))}function Hr(t,e,n){t=wt(t,st);const r=wt(t.firestore,Vn),i=t1(t.converter,e);return Yu(r,[HE(qu(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ot.none())])}function su(t,e,n,...r){t=wt(t,st);const i=wt(t.firestore,Vn),s=qu(i);let o;return o=typeof(e=je(e))=="string"||e instanceof $u?ub(s,"updateDoc",t._key,e,n,r):lb(s,"updateDoc",t._key,e),Yu(i,[o.toMutation(t._key,Ot.exists(!0))])}function mb(t){return Yu(wt(t.firestore,Vn),[new Xf(t._key,Ot.none())])}function i1(t,e){const n=wt(t.firestore,Vn),r=Ee(t),i=t1(t.converter,e);return Yu(n,[HE(qu(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ot.exists(!1))]).then(()=>r)}function s1(t,...e){var n,r,i;t=je(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||ov(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(ov(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,c,f;if(t instanceof st)c=wt(t.firestore,Vn),f=Pu(t._key.path),u={next:m=>{e[o]&&e[o](o1(c,t,m))},error:e[o+1],complete:e[o+2]};else{const m=wt(t,Pr);c=wt(m.firestore,Vn),f=m._query;const g=new Ap(c);u={next:_=>{e[o]&&e[o](new r1(c,g,m,_))},error:e[o+1],complete:e[o+2]},XE(t._query)}return function(g,_,T,R){const S=new mp(R),E=new fp(_,S,T);return g.asyncQueue.enqueueAndForget(async()=>cp(await ru(g),E)),()=>{S.Za(),g.asyncQueue.enqueueAndForget(async()=>hp(await ru(g),E))}}(zu(c),f,l,u)}function Yu(t,e){return function(r,i){const s=new Sn;return r.asyncQueue.enqueueAndForget(async()=>$N(await JN(r),i,s)),s.promise}(zu(t),e)}function o1(t,e,n){const r=n.docs.get(e._key),i=new Ap(t);return new n1(t,i,e._key,r,new Hs(n.hasPendingWrites,n.fromCache),e.converter)}function gb(){return new _p("serverTimestamp")}(function(e,n=!0){(function(i){cs=i})(ls),Yi(new Jr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Vn(new wP(r.getProvider("auth-internal")),new IP(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oo(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),pr(xy,"4.7.3",e),pr(xy,"4.7.3","esm2017")})();var yb="firebase",vb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pr(yb,vb,"app");const _b={apiKey:"AIzaSyA_cQM_IT673H53Qw164DP29_gOI8TAGdg",authDomain:"pixelagencia-663a1.firebaseapp.com",projectId:"pixelagencia-663a1",storageBucket:"pixelagencia-663a1.firebasestorage.app",messagingSenderId:"942976055229",appId:"1:942976055229:web:e4673039b1733fa43f04d4"},a1=J_(_b),ao=gP(a1),le=rb(a1),l1=D.createContext(void 0);function wb({children:t}){const[e,n]=D.useState(null),[r,i]=D.useState(null),[s,o]=D.useState(null),l=jt();D.useEffect(()=>{const f=iR(ao,async m=>{if(m)try{let g=await Jt(Ee(le,"users",m.uid));if(g.exists()||(g=await Jt(Ee(le,"clients",m.uid))),g.exists()){const _=g.data();n({uid:m.uid,email:m.email,role:(_==null?void 0:_.role)||"client",status:(_==null?void 0:_.status)||"active"}),i((_==null?void 0:_.role)||"client"),o((_==null?void 0:_.status)||"active")}else{const _={uid:m.uid,email:m.email,role:"client",status:"active",createdAt:new Date().toISOString()};await Hr(Ee(le,"clients",m.uid),_),n(_),i("client"),o("active")}}catch(g){console.error("Error fetching user data:",g),n({uid:m.uid,email:m.email,role:"client",status:"active"}),i("client"),o("active")}else n(null),i(null),o(null)});return()=>f()},[]);const u=async(f,m)=>{try{const g=await tR(ao,f,m);let _=await Jt(Ee(le,"users",g.user.uid));_.exists()||(_=await Jt(Ee(le,"clients",g.user.uid)));let T;_.exists()?T=_.data():(T={role:"client",status:"active"},await Hr(Ee(le,"clients",g.user.uid),{uid:g.user.uid,email:g.user.email,role:T.role,status:T.status,createdAt:new Date().toISOString()})),n({uid:g.user.uid,email:g.user.email,role:T.role||"client",status:T.status||"active"}),i(T.role||"client"),o(T.status||"active"),T.role==="admin"?l("/admin"):l("/client")}catch(g){throw g.code==="auth/user-not-found"||g.code==="auth/wrong-password"?new Error("Email ou senha incorretos"):g}},c=async()=>{try{await sR(ao),n(null),i(null),o(null),l("/")}catch(f){throw console.error("Error signing out:",f),f}};return d.jsx(l1.Provider,{value:{user:e,userRole:r,userStatus:s,signIn:u,signOut:c},children:t})}function an(){const t=D.useContext(l1);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t}function Eb(){const[t,e]=D.useState(!1),[n,r]=D.useState(""),[i,s]=D.useState(""),[o,l]=D.useState(!1),[u,c]=D.useState({name:"",email:"",phone:"",password:"",confirmPassword:""}),f=jt(),{signIn:m,userRole:g}=an();D.useEffect(()=>{g==="admin"?f("/admin"):g==="client"&&f("/client")},[g,f]);const _=async S=>{S.preventDefault(),l(!0);try{await m(n,i)}catch(E){console.error("Login error:",E),G.error(E.message||"Erro ao fazer login. Tente novamente.")}finally{l(!1)}},T=async S=>{if(S.preventDefault(),l(!0),u.password!==u.confirmPassword){G.error("As senhas não coincidem"),l(!1);return}if(u.password.length<6){G.error("A senha deve ter pelo menos 6 caracteres"),l(!1);return}try{const E=await Aw(ao,u.email,u.password);await Hr(Ee(le,"clients",E.user.uid),{name:u.name,email:u.email,phone:u.phone,status:"pending",role:"client",createdAt:new Date().toISOString()}),G.success("Cadastro realizado com sucesso! Aguarde a aprovação do administrador."),e(!1),c({name:"",email:"",phone:"",password:"",confirmPassword:""})}catch(E){console.error("Register error:",E),E.code==="auth/email-already-in-use"?G.error("Este email já está em uso"):G.error("Erro ao realizar cadastro. Tente novamente.")}finally{l(!1)}},R=S=>{const{name:E,value:w}=S.target;c(A=>({...A,[E]:w}))};return d.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4",children:d.jsxs("div",{className:"bg-white rounded-2xl shadow-xl w-full max-w-md p-8",children:[d.jsxs("div",{className:"text-center mb-8",children:[d.jsx("div",{className:"bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",children:t?d.jsx(SA,{className:"w-8 h-8 text-blue-600"}):d.jsx(mA,{className:"w-8 h-8 text-blue-600"})}),d.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:t?"Criar Conta":"Bem-vindo de volta"}),d.jsx("p",{className:"text-gray-600 mt-2",children:t?"Preencha seus dados para se cadastrar":"Entre para acessar sua conta"})]}),t?d.jsxs("form",{onSubmit:T,className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Nome Completo"}),d.jsxs("div",{className:"relative",children:[d.jsx(B_,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),d.jsx("input",{type:"text",name:"name",value:u.name,onChange:R,className:"pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Seu nome completo",required:!0})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email"}),d.jsxs("div",{className:"relative",children:[d.jsx(Wg,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),d.jsx("input",{type:"email",name:"email",value:u.email,onChange:R,className:"pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"seu@email.com",required:!0})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Telefone"}),d.jsxs("div",{className:"relative",children:[d.jsx(vA,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),d.jsx("input",{type:"tel",name:"phone",value:u.phone,onChange:R,className:"pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"(00) 00000-0000",required:!0})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Senha"}),d.jsxs("div",{className:"relative",children:[d.jsx(Kc,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),d.jsx("input",{type:"password",name:"password",value:u.password,onChange:R,className:"pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"••••••••",required:!0})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Confirmar Senha"}),d.jsxs("div",{className:"relative",children:[d.jsx(Kc,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),d.jsx("input",{type:"password",name:"confirmPassword",value:u.confirmPassword,onChange:R,className:"pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"••••••••",required:!0})]})]}),d.jsx("button",{type:"submit",disabled:o,className:"w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-200 flex items-center justify-center",children:o?d.jsx("div",{className:"w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"}):"Cadastrar"}),d.jsx("button",{type:"button",onClick:()=>e(!1),className:"w-full text-sm text-blue-600 hover:text-blue-800 text-center mt-4",children:"Já tem uma conta? Entre aqui"})]}):d.jsxs("form",{onSubmit:_,className:"space-y-6",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email"}),d.jsxs("div",{className:"relative",children:[d.jsx(Wg,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),d.jsx("input",{type:"email",value:n,onChange:S=>r(S.target.value),className:"pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"seu@email.com",required:!0})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Senha"}),d.jsxs("div",{className:"relative",children:[d.jsx(Kc,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),d.jsx("input",{type:"password",value:i,onChange:S=>s(S.target.value),className:"pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"••••••••",required:!0})]})]}),d.jsx("button",{type:"submit",disabled:o,className:"w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-200 flex items-center justify-center",children:o?d.jsx("div",{className:"w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"}):"Entrar"}),d.jsxs("div",{className:"space-y-2",children:[d.jsx("button",{type:"button",onClick:()=>G.error("Função em desenvolvimento"),className:"w-full text-sm text-blue-600 hover:text-blue-800 text-center",children:"Esqueci minha senha"}),d.jsx("button",{type:"button",onClick:()=>e(!0),className:"w-full text-sm text-blue-600 hover:text-blue-800 text-center",children:"Não tem uma conta? Cadastre-se"})]})]})]})})}function Tb({count:t}){return d.jsxs("div",{className:"relative",children:[d.jsx(uA,{className:"w-6 h-6 text-gray-600"}),t>0&&d.jsx("span",{className:"absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center",children:t})]})}function xb({children:t}){const[e,n]=D.useState(!0),{signOut:r}=an(),i=jt(),s=ai(),[o,l]=D.useState(0);D.useEffect(()=>{const f=Er(le,"orders"),m=Ku(f,xp("viewed","==",!1)),g=s1(m,_=>{l(_.docs.length)});return()=>g()},[]);const u=async()=>{await r(),i("/login")},c=[{path:"/admin",label:"Clientes",icon:AA},{path:"/admin/orders",label:"Pedidos",icon:dA,customIcon:o>0?d.jsx(Tb,{count:o}):null},{path:"/admin/orders/archived",label:"Arquivados",icon:lA}];return d.jsxs("div",{className:"min-h-screen bg-gray-900",children:[d.jsx("button",{className:"fixed top-4 left-4 z-50 lg:hidden bg-gray-800 p-2 rounded-lg shadow-md text-gray-200",onClick:()=>n(!e),children:e?d.jsx(Iu,{size:24}):d.jsx(z_,{size:24})}),d.jsx("aside",{className:`fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 shadow-lg transform transition-transform duration-200 ease-in-out border-r border-gray-700
          ${e?"translate-x-0":"-translate-x-full"} lg:translate-x-0`,children:d.jsxs("div",{className:"h-full flex flex-col",children:[d.jsx("div",{className:"p-6",children:d.jsx("h1",{className:"text-2xl font-bold text-gray-200",children:"Admin Panel"})}),d.jsx("nav",{className:"flex-1 px-4 space-y-2",children:c.map(f=>{const m=f.icon,g=s.pathname===f.path;return d.jsxs(V_,{to:f.path,className:`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                    ${g?"bg-blue-900 text-blue-200":"text-gray-300 hover:bg-gray-700"}`,children:[f.customIcon?f.customIcon:m&&d.jsx(m,{size:20}),d.jsx("span",{children:f.label})]},f.path)})}),d.jsx("div",{className:"p-4 border-t border-gray-700",children:d.jsxs("button",{onClick:u,className:"flex items-center space-x-3 text-gray-300 hover:text-red-400 w-full px-4 py-3 rounded-lg transition-colors",children:[d.jsx(U_,{size:20}),d.jsx("span",{children:"Sair"})]})})]})}),d.jsx("main",{className:`transition-all duration-200 ease-in-out ${e?"lg:ml-64":""}`,children:d.jsx("div",{className:"container mx-auto px-4 py-8",children:t})})]})}function Ib({isOpen:t,onClose:e,onConfirm:n}){const[r,i]=D.useState("");if(!t)return null;const s=o=>{o.preventDefault(),n(r),i("")};return d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:d.jsxs("div",{className:"bg-white rounded-lg p-6 w-full max-w-md",children:[d.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Motivo da Desativação"}),d.jsxs("form",{onSubmit:s,children:[d.jsx("textarea",{value:r,onChange:o=>i(o.target.value),className:"w-full p-2 border rounded-lg mb-4",rows:4,placeholder:"Digite o motivo da desativação...",required:!0}),d.jsxs("div",{className:"flex justify-end space-x-2",children:[d.jsx("button",{type:"button",onClick:e,className:"px-4 py-2 text-gray-600 hover:text-gray-800",children:"Cancelar"}),d.jsx("button",{type:"submit",className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",children:"Confirmar"})]})]})]})})}function Sb(){const[t,e]=D.useState([]),[n,r]=D.useState(!0),[i,s]=D.useState(null),[o,l]=D.useState(!1),u=jt();D.useEffect(()=>{c()},[]);const c=async()=>{try{const E=(await Qu(Er(le,"clients"))).docs.map(w=>({id:w.id,...w.data()}));E.sort((w,A)=>{const V={pending:0,active:1,inactive:2};return V[w.status]-V[A.status]}),e(E)}catch(S){console.error("Erro ao carregar clientes:",S),G.error("Erro ao carregar clientes")}finally{r(!1)}},f=async(S,E)=>{if(window.confirm(`Tem certeza que deseja excluir o cliente ${E}?`))try{await mb(Ee(le,"clients",S)),G.success("Cliente excluído com sucesso"),c()}catch(w){console.error("Erro ao excluir cliente:",w),G.error("Erro ao excluir cliente")}},m=async(S,E)=>{try{const w={status:E};if(E==="inactive"){s(S),l(!0);return}else w.deactivationReason=null;await su(Ee(le,"clients",S.id),w),G.success(`Cliente ${E==="active"?"aprovado":"atualizado"} com sucesso`),c()}catch(w){console.error("Erro ao atualizar status do cliente:",w),G.error("Erro ao atualizar status do cliente")}},g=async S=>{if(i)try{await su(Ee(le,"clients",i.id),{status:"inactive",deactivationReason:S}),G.success("Cliente desativado com sucesso"),l(!1),s(null),c()}catch(E){console.error("Erro ao desativar cliente:",E),G.error("Erro ao desativar cliente")}},_=S=>{switch(S){case"pending":return"bg-yellow-100 text-yellow-800";case"active":return"bg-green-100 text-green-800";case"inactive":return"bg-red-100 text-red-800";default:return"bg-gray-100 text-gray-800"}},T=S=>{switch(S){case"pending":return"Pendente";case"active":return"Ativo";case"inactive":return"Inativo";default:return S}},R=S=>new Date(S).toLocaleDateString("pt-BR");return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"bg-white rounded-lg shadow-md",children:[d.jsx("div",{className:"p-6 border-b border-gray-200",children:d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"Clientes"}),d.jsxs("button",{onClick:()=>u("/admin/client/new"),className:"btn-primary flex items-center space-x-2",children:[d.jsx(_A,{size:20}),d.jsx("span",{children:"Novo Cliente"})]})]})}),d.jsx("div",{className:"overflow-x-auto",children:d.jsxs("table",{className:"w-full",children:[d.jsx("thead",{className:"bg-gray-50",children:d.jsxs("tr",{children:[d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Nome"}),d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Email"}),d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Telefone"}),d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Data de Cadastro"}),d.jsx("th",{className:"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Ações"})]})}),d.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:n?d.jsx("tr",{children:d.jsx("td",{colSpan:6,className:"px-6 py-4 text-center",children:d.jsx("div",{className:"w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"})})}):t.length===0?d.jsx("tr",{children:d.jsx("td",{colSpan:6,className:"px-6 py-4 text-center text-gray-500",children:"Nenhum cliente cadastrado"})}):t.map(S=>d.jsxs("tr",{className:"hover:bg-gray-50",children:[d.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:d.jsx("div",{className:"flex items-center",children:d.jsx("div",{className:"text-sm font-medium text-gray-900",children:S.name})})}),d.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:d.jsx("div",{className:"text-sm text-gray-900",children:S.email})}),d.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:d.jsx("div",{className:"text-sm text-gray-900",children:S.phone})}),d.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:d.jsx("span",{className:`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${_(S.status)}`,children:T(S.status)})}),d.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:R(S.createdAt)}),d.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2",children:S.status==="pending"?d.jsxs(d.Fragment,{children:[d.jsx("button",{onClick:()=>m(S,"active"),className:"text-green-600 hover:text-green-900",title:"Aprovar cliente",children:d.jsx(cA,{size:18})}),d.jsx("button",{onClick:()=>m(S,"inactive"),className:"text-red-600 hover:text-red-900",title:"Rejeitar cliente",children:d.jsx(Iu,{size:18})})]}):d.jsxs(d.Fragment,{children:[d.jsx("button",{onClick:()=>m(S,S.status==="active"?"inactive":"active"),className:`${S.status==="active"?"text-green-600 hover:text-green-900":"text-red-600 hover:text-red-900"}`,title:S.status==="active"?"Desativar cliente":"Ativar cliente",children:S.status==="active"?d.jsx(xA,{size:18}):d.jsx(TA,{size:18})}),d.jsx("button",{onClick:()=>u(`/admin/client/${S.id}`),className:"text-blue-600 hover:text-blue-900",title:"Editar cliente",children:d.jsx(EA,{size:18})}),d.jsx("button",{onClick:()=>f(S.id,S.name),className:"text-red-600 hover:text-red-900",title:"Excluir cliente",children:d.jsx(IA,{size:18})})]})})]},S.id))})]})})]}),d.jsx(Ib,{isOpen:o,onClose:()=>{l(!1),s(null)},onConfirm:g})]})}const Ab={name:"",email:"",phone:"",address:"",status:"pending",password:"",driveLink:""};function uv(){const[t,e]=D.useState(Ab),[n,r]=D.useState(!1),[i,s]=D.useState(!1),[o,l]=D.useState(!1),u=jt(),{id:c}=N_();D.useEffect(()=>{c&&f()},[c]);const f=async()=>{r(!0);try{const _=Ee(le,"clients",c),T=await Jt(_);if(T.exists()){const R=T.data();delete R.password,e(R)}else G.error("Cliente não encontrado"),u("/admin")}catch{G.error("Erro ao carregar dados do cliente")}finally{r(!1)}},m=async _=>{_.preventDefault(),s(!0);try{if(c){const{password:T,...R}=t;await Hr(Ee(le,"clients",c),{...R,updatedAt:new Date().toISOString()})}else{if(!t.password)throw new Error("Senha é obrigatória para novos clientes");const T=await Aw(ao,t.email,t.password),{password:R,...S}=t;await Hr(Ee(le,"clients",T.user.uid),{...S,status:"pending",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),await Hr(Ee(le,"users",T.user.uid),{email:t.email,role:"client",status:"pending",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()})}G.success(c?"Cliente atualizado com sucesso":"Cliente cadastrado com sucesso"),u("/admin")}catch(T){console.error("Error:",T),T.code==="auth/email-already-in-use"?G.error("Este email já está em uso"):T.code==="auth/weak-password"?G.error("A senha deve ter pelo menos 6 caracteres"):G.error(T.message||"Erro ao salvar cliente")}finally{s(!1)}},g=_=>{const{name:T,value:R}=_.target;e(S=>({...S,[T]:R}))};return n?d.jsx("div",{className:"flex justify-center items-center h-64",children:d.jsx("div",{className:"w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"})}):d.jsxs("div",{className:"bg-white rounded-lg shadow-md",children:[d.jsx("div",{className:"p-6 border-b border-gray-200",children:d.jsxs("div",{className:"flex items-center space-x-4",children:[d.jsx("button",{onClick:()=>u("/admin"),className:"text-gray-600 hover:text-gray-900",children:d.jsx(F_,{size:24})}),d.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:c?"Editar Cliente":"Novo Cliente"})]})}),d.jsxs("form",{onSubmit:m,className:"p-6 space-y-6",children:[d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Nome"}),d.jsx("input",{type:"text",name:"name",value:t.name,onChange:g,className:"input-field",required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email"}),d.jsx("input",{type:"email",name:"email",value:t.email,onChange:g,className:"input-field",required:!0,disabled:!!c})]}),!c&&d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Senha"}),d.jsxs("div",{className:"relative",children:[d.jsx("input",{type:o?"text":"password",name:"password",value:t.password,onChange:g,className:"input-field pr-10",required:!0,minLength:6}),d.jsx("button",{type:"button",onClick:()=>l(!o),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500",children:o?d.jsx(hA,{size:20}):d.jsx(Pf,{size:20})})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Telefone"}),d.jsx("input",{type:"tel",name:"phone",value:t.phone,onChange:g,className:"input-field",required:!0})]}),c&&d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Status"}),d.jsxs("select",{name:"status",value:t.status,onChange:g,className:"input-field",children:[d.jsx("option",{value:"pending",children:"Pendente"}),d.jsx("option",{value:"active",children:"Ativo"}),d.jsx("option",{value:"inactive",children:"Inativo"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Link do Google Drive"}),d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-3 flex items-center pointer-events-none",children:d.jsx(rd,{className:"w-5 h-5 text-blue-600"})}),d.jsx("input",{type:"url",name:"driveLink",value:t.driveLink||"",onChange:g,placeholder:"https://drive.google.com/drive/folders/...",className:"input-field pl-10"})]}),d.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Adicione o link da pasta compartilhada do Google Drive."})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Endereço"}),d.jsx("textarea",{name:"address",value:t.address,onChange:g,rows:3,className:"input-field",required:!0})]}),d.jsxs("div",{className:"flex justify-end space-x-4",children:[d.jsx("button",{type:"button",onClick:()=>u("/admin"),className:"px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors",children:"Cancelar"}),d.jsx("button",{type:"submit",disabled:i,className:"btn-primary flex items-center justify-center min-w-[100px]",children:i?d.jsx("div",{className:"w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"}):c?"Atualizar":"Cadastrar"})]})]})]})}function Cb({orderId:t,onClose:e,isOpen:n}){const[r,i]=D.useState([]),[s,o]=D.useState(""),{user:l,userRole:u}=an(),c=D.useRef(null),[f,m]=D.useState(!0);D.useEffect(()=>{if(!n)return;const T=Er(le,"chats",t,"messages"),R=Ku(T,ZE("timestamp","asc")),S=s1(R,E=>{const w=E.docs.map(A=>({id:A.id,...A.data()}));i(w),m(!1)});return()=>S()},[t,n]),D.useEffect(()=>{g()},[r]);const g=()=>{var T;(T=c.current)==null||T.scrollIntoView({behavior:"smooth"})},_=async T=>{if(T.preventDefault(),!(!s.trim()||!l))try{const R=Er(le,"chats",t,"messages");await i1(R,{text:s,senderId:l.uid,senderName:u==="admin"?"Admin":"Cliente",timestamp:gb(),orderId:t}),o("")}catch(R){console.error("Error sending message:",R)}};return n?d.jsxs("div",{className:"fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl flex flex-col max-h-[600px] border border-gray-200",children:[d.jsxs("div",{className:"flex justify-between items-center p-4 border-b border-gray-200",children:[d.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"Chat do Pedido"}),d.jsx("button",{onClick:e,className:"text-gray-500 hover:text-gray-700",children:d.jsx(Iu,{size:20})})]}),d.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[f?d.jsx("div",{className:"flex justify-center items-center h-full",children:d.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"})}):r.length===0?d.jsx("p",{className:"text-center text-gray-500",children:"Nenhuma mensagem ainda. Comece a conversa!"}):r.map(T=>{var R;return d.jsxs("div",{className:`flex flex-col ${T.senderId===(l==null?void 0:l.uid)?"items-end":"items-start"}`,children:[d.jsxs("div",{className:`max-w-[80%] rounded-lg px-4 py-2 ${T.senderId===(l==null?void 0:l.uid)?"bg-blue-600 text-white":"bg-gray-100 text-gray-900"}`,children:[d.jsx("p",{className:"text-sm font-medium mb-1",children:T.senderName}),d.jsx("p",{children:T.text})]}),d.jsx("span",{className:"text-xs text-gray-500 mt-1",children:(R=T.timestamp)==null?void 0:R.toDate().toLocaleString()})]},T.id)}),d.jsx("div",{ref:c})]}),d.jsx("form",{onSubmit:_,className:"p-4 border-t border-gray-200",children:d.jsxs("div",{className:"flex space-x-2",children:[d.jsx("input",{type:"text",value:s,onChange:T=>o(T.target.value),placeholder:"Digite sua mensagem...",className:"flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),d.jsx("button",{type:"submit",disabled:!s.trim(),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed",children:d.jsx(wA,{size:20})})]})})]}):null}function u1({orderId:t}){const[e,n]=D.useState(!1);return d.jsxs(d.Fragment,{children:[d.jsxs("button",{onClick:()=>n(!0),className:"inline-flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",title:"Abrir chat",children:[d.jsx(yA,{size:18}),d.jsx("span",{children:"Chat"})]}),d.jsx(Cb,{orderId:t,isOpen:e,onClose:()=>n(!1)})]})}function kb({isOpen:t,onClose:e,description:n,title:r}){return t?d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:d.jsxs("div",{className:"bg-white rounded-lg p-6 w-full max-w-2xl",children:[d.jsxs("div",{className:"flex justify-between items-center mb-4",children:[d.jsx("h3",{className:"text-lg font-semibold",children:r}),d.jsx("button",{onClick:e,className:"text-gray-400 hover:text-gray-600",children:"✕"})]}),d.jsx("div",{className:"prose max-w-none",children:d.jsx("p",{className:"whitespace-pre-wrap",children:n})}),d.jsx("div",{className:"mt-6 flex justify-end",children:d.jsx("button",{onClick:e,className:"px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200",children:"Fechar"})})]})}):null}function Rb(){const[t,e]=D.useState([]),[n,r]=D.useState(!0),[i,s]=D.useState(null),[o,l]=D.useState(!1);D.useEffect(()=>{u()},[]);const u=async()=>{try{const g=await Qu(Er(le,"orders")),_=await Promise.all(g.docs.map(async T=>{const R=T.data();if(R.id=T.id,R.clientId){const S=await Jt(Ee(le,"clients",R.clientId));if(S.exists()){const E=S.data();R.clientName=E.name}}return R}));_.sort((T,R)=>new Date(R.createdAt).getTime()-new Date(T.createdAt).getTime()),e(_)}catch(g){console.error("Erro ao carregar pedidos:",g),G.error("Erro ao carregar pedidos")}finally{r(!1)}},c=async(g,_)=>{try{const T=Ee(le,"orders",g),R={status:_};_==="completed"&&(R.completedAt=new Date().toISOString()),await su(T,R),e(t.map(S=>S.id===g?{...S,status:_}:S)),_==="completed"?(e(t.filter(S=>S.id!==g)),G.success("Pedido finalizado e movido para arquivados")):G.success("Status atualizado com sucesso")}catch(T){console.error("Erro ao atualizar status:",T),G.error("Erro ao atualizar status")}},f=g=>{switch(g){case"pending":return"bg-yellow-100 text-yellow-800";case"in_progress":return"bg-blue-100 text-blue-800";case"completed":return"bg-green-100 text-green-800";default:return"bg-gray-100 text-gray-800"}},m=g=>{s(g),l(!0)};return n?d.jsx("div",{className:"flex justify-center items-center h-64",children:d.jsx("div",{className:"w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"})}):t.length===0?d.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8 text-center",children:[d.jsx($_,{className:"w-16 h-16 text-gray-400 mx-auto mb-4"}),d.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Nenhum pedido encontrado"}),d.jsx("p",{className:"text-gray-500",children:"Os pedidos aparecerão aqui quando forem criados."})]}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"bg-white rounded-lg shadow-md",children:[d.jsx("div",{className:"p-6 border-b border-gray-200",children:d.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"Pedidos"})}),d.jsx("div",{className:"overflow-x-auto",children:d.jsxs("table",{className:"w-full",children:[d.jsx("thead",{className:"bg-gray-50",children:d.jsxs("tr",{children:[d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Cliente"}),d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Título"}),d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Descrição"}),d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Data do Pedido"}),d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Prazo de Entrega"}),d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Chat"})]})}),d.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.map(g=>d.jsxs("tr",{className:"hover:bg-gray-50",children:[d.jsx("td",{className:"px-6 py-4 whitespace-nowrap font-medium text-gray-900",children:g.clientName||"Cliente não encontrado"}),d.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:g.title}),d.jsx("td",{className:"px-6 py-4",children:d.jsxs("div",{className:"flex items-center space-x-2",children:[d.jsx("div",{className:"text-sm text-gray-900 line-clamp-2 max-w-md",children:g.description}),d.jsx("button",{onClick:()=>m(g),className:"text-blue-600 hover:text-blue-800",title:"Ver descrição completa",children:d.jsx(Pf,{size:18})})]})}),d.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:d.jsxs("select",{value:g.status,onChange:_=>c(g.id,_.target.value),className:`px-2 py-1 rounded-full text-xs font-semibold ${f(g.status)} border-0 cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`,children:[d.jsx("option",{value:"pending",children:"Pendente"}),d.jsx("option",{value:"in_progress",children:"Em Produção"}),d.jsx("option",{value:"completed",children:"Finalizado"})]})}),d.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:new Date(g.createdAt).toLocaleDateString()}),d.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:new Date(g.deliveryDate).toLocaleDateString()}),d.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:d.jsx(u1,{orderId:g.id})})]},g.id))})]})})]}),d.jsx(kb,{isOpen:o,onClose:()=>{l(!1),s(null)},description:(i==null?void 0:i.description)||"",title:(i==null?void 0:i.title)||""})]})}function Pb(t){if(!t)return"";const e=new Date(t);return new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(e)}function Nb(){const[t,e]=D.useState([]),[n,r]=D.useState(!0);return D.useEffect(()=>{async function i(){try{const s=Er(le,"orders"),o=Ku(s,xp("status","==","completed"),ZE("createdAt","desc")),l=await Qu(o),u=[];l.forEach(c=>{u.push({id:c.id,...c.data()})}),e(u)}catch(s){console.error("Error loading archived orders:",s)}finally{r(!1)}}i()},[]),n?d.jsx("div",{className:"flex justify-center items-center h-64",children:d.jsx(pA,{className:"animate-spin",size:32})}):d.jsxs("div",{className:"space-y-6",children:[d.jsx("h2",{className:"text-2xl font-bold text-gray-200",children:"Pedidos Arquivados"}),t.length===0?d.jsx("p",{className:"text-gray-400 text-center py-8",children:"Nenhum pedido arquivado encontrado."}):d.jsx("div",{className:"grid gap-4",children:t.map(i=>d.jsxs("div",{className:"bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700",children:[d.jsx("div",{className:"flex justify-between items-start",children:d.jsxs("div",{children:[d.jsx("h3",{className:"text-lg font-semibold text-gray-200",children:i.title}),d.jsxs("p",{className:"text-gray-400 text-sm mt-1",children:["Cliente: ",i.clientName]}),d.jsxs("p",{className:"text-gray-400 text-sm",children:["Finalizado em: ",Pb(i.completedAt)]})]})}),d.jsx("div",{className:"mt-4",children:d.jsx("p",{className:"text-gray-300",children:i.description})}),i.attachments&&i.attachments.length>0&&d.jsxs("div",{className:"mt-4",children:[d.jsx("p",{className:"text-sm font-medium text-gray-300 mb-2",children:"Anexos:"}),d.jsx("div",{className:"flex flex-wrap gap-2",children:i.attachments.map((s,o)=>d.jsx("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-300 text-sm underline",children:s.name},o))})]})]},i.id))})]})}function bb(){const{userRole:t}=an(),e=jt();return D.useEffect(()=>{t!=="admin"&&e("/login")},[t,e]),d.jsx(xb,{children:d.jsxs(Rf,{children:[d.jsx(rt,{path:"/",element:d.jsx(Sb,{})}),d.jsx(rt,{path:"/client/new",element:d.jsx(uv,{})}),d.jsx(rt,{path:"/client/edit/:id",element:d.jsx(uv,{})}),d.jsx(rt,{path:"/orders",element:d.jsx(Rb,{})}),d.jsx(rt,{path:"/orders/archived",element:d.jsx(Nb,{})})]})})}function Db({children:t}){const[e,n]=D.useState(!0),{signOut:r}=an(),i=jt(),s=ai(),o=async()=>{try{await r(),G.success("Logout realizado com sucesso"),i("/login",{replace:!0})}catch(u){console.error("Erro ao fazer logout:",u),G.error("Erro ao fazer logout")}},l=[{path:"/client/orders",icon:$_,label:"Meus Pedidos"},{path:"/client/profile",icon:B_,label:"Meu Perfil"}];return d.jsxs("div",{className:"min-h-screen bg-gray-100",children:[d.jsx("button",{className:"fixed top-4 left-4 z-50 lg:hidden bg-white p-2 rounded-lg shadow-md",onClick:()=>n(!e),children:e?d.jsx(Iu,{size:24}):d.jsx(z_,{size:24})}),d.jsx("aside",{className:`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out
          ${e?"translate-x-0":"-translate-x-full"} lg:translate-x-0`,children:d.jsxs("div",{className:"h-full flex flex-col",children:[d.jsx("div",{className:"p-6",children:d.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:"Área do Cliente"})}),d.jsx("nav",{className:"flex-1 px-4 space-y-2",children:l.map(u=>{const c=u.icon,f=s.pathname===u.path;return d.jsxs(V_,{to:u.path,className:`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                    ${f?"bg-blue-50 text-blue-600":"text-gray-600 hover:bg-gray-50"}`,children:[d.jsx(c,{size:20}),d.jsx("span",{children:u.label})]},u.path)})}),d.jsx("div",{className:"p-4 border-t",children:d.jsxs("button",{onClick:o,className:"flex items-center space-x-3 text-gray-600 hover:text-red-600 w-full px-4 py-3 rounded-lg transition-colors hover:bg-red-50",children:[d.jsx(U_,{size:20}),d.jsx("span",{children:"Sair"})]})})]})}),d.jsx("main",{className:`transition-all duration-200 ease-in-out ${e?"lg:ml-64":""}`,children:d.jsx("div",{className:"container mx-auto px-4 py-8",children:t})})]})}function Ob({isOpen:t,onClose:e,description:n,title:r}){return t?d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:d.jsxs("div",{className:"bg-white rounded-lg p-6 w-full max-w-2xl",children:[d.jsxs("div",{className:"flex justify-between items-center mb-4",children:[d.jsx("h3",{className:"text-lg font-semibold",children:r}),d.jsx("button",{onClick:e,className:"text-gray-400 hover:text-gray-600",children:"✕"})]}),d.jsx("div",{className:"prose max-w-none",children:d.jsx("p",{className:"whitespace-pre-wrap",children:n})}),d.jsx("div",{className:"mt-6 flex justify-end",children:d.jsx("button",{onClick:e,className:"px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200",children:"Fechar"})})]})}):null}function cv({isInactive:t}){const[e,n]=D.useState([]),[r,i]=D.useState(!0),[s,o]=D.useState(null),[l,u]=D.useState(!1),{user:c}=an(),f=jt();D.useEffect(()=>{c&&m()},[c]);const m=async()=>{try{const S=Ku(Er(le,"orders"),xp("clientId","==",c==null?void 0:c.uid)),w=(await Qu(S)).docs.map(A=>({id:A.id,...A.data()}));w.sort((A,V)=>new Date(V.createdAt).getTime()-new Date(A.createdAt).getTime()),n(w)}catch(S){console.error("Erro ao carregar pedidos:",S),G.error("Erro ao carregar pedidos")}finally{i(!1)}},g=S=>{switch(S){case"pending":return"bg-yellow-100 text-yellow-800";case"in_progress":return"bg-blue-100 text-blue-800";case"completed":return"bg-green-100 text-green-800";default:return"bg-gray-100 text-gray-800"}},_=S=>{switch(S){case"pending":return"Pendente";case"in_progress":return"Em Progresso";case"completed":return"Concluído";default:return S}},T=S=>new Date(S).toLocaleDateString("pt-BR"),R=S=>{o(S),u(!0)};return r?d.jsx("div",{className:"flex justify-center items-center h-64",children:d.jsx("div",{className:"w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"})}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"flex justify-between items-center mb-6",children:[d.jsx("h1",{className:"text-2xl font-semibold text-gray-900",children:"Meus Pedidos"}),d.jsxs("button",{onClick:()=>f(t?"#":"/client/orders/new"),className:`
              inline-flex items-center px-4 py-2 rounded-md text-sm font-medium
              ${t?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-blue-600 text-white hover:bg-blue-700"}
            `,disabled:t,children:[d.jsx(Hg,{size:20}),d.jsx("span",{children:"Novo Pedido"})]})]}),e.length===0?d.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8 text-center",children:[d.jsx("div",{className:"w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4",children:d.jsx(Hg,{className:"w-8 h-8 text-blue-600"})}),d.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Nenhum pedido encontrado"}),d.jsx("p",{className:"text-gray-500 mb-4",children:"Comece criando seu primeiro pedido!"}),d.jsx("button",{onClick:()=>f("/client/orders/new"),className:"btn-primary",disabled:t,children:"Criar Pedido"})]}):d.jsx("div",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:d.jsx("div",{className:"overflow-x-auto",children:d.jsxs("table",{className:"w-full",children:[d.jsx("thead",{className:"bg-gray-50",children:d.jsxs("tr",{children:[d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Título"}),d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Descrição"}),d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Data do Pedido"}),d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Prazo de Entrega"}),d.jsx("th",{className:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Ações"})]})}),d.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:e.map(S=>d.jsxs("tr",{className:"hover:bg-gray-50",children:[d.jsx("td",{className:"px-6 py-4 whitespace-nowrap font-medium text-gray-900",children:S.title}),d.jsx("td",{className:"px-6 py-4",children:d.jsxs("div",{className:"flex items-center space-x-2",children:[d.jsx("div",{className:"text-sm text-gray-900 line-clamp-2 max-w-md",children:S.description}),d.jsx("button",{onClick:()=>R(S),className:"text-blue-600 hover:text-blue-800",title:"Ver descrição completa",children:d.jsx(Pf,{size:18})})]})}),d.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:d.jsx("span",{className:`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${g(S.status)}`,children:_(S.status)})}),d.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:T(S.createdAt)}),d.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:T(S.deliveryDate)}),d.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:d.jsx("div",{className:"flex justify-end space-x-2",children:d.jsx(u1,{orderId:S.id})})})]},S.id))})]})})})]}),d.jsx(Ob,{isOpen:l,onClose:()=>{u(!1),o(null)},description:(s==null?void 0:s.description)||"",title:(s==null?void 0:s.title)||""})]})}const Vb={title:"",description:"",deliveryDate:new Date(Date.now()+7*24*60*60*1e3).toISOString().split("T")[0]};function hv(){const[t,e]=D.useState(Vb),[n,r]=D.useState(!1),[i,s]=D.useState(!1),o=jt(),{id:l}=N_(),{user:u}=an();D.useEffect(()=>{l&&c()},[l]);const c=async()=>{r(!0);try{const g=Ee(le,"orders",l),_=await Jt(g);if(_.exists()){const T=_.data();e({...T,deliveryDate:new Date(T.deliveryDate).toISOString().split("T")[0]})}else G.error("Pedido não encontrado"),o("/client")}catch{G.error("Erro ao carregar dados do pedido")}finally{r(!1)}},f=async g=>{var _;if(g.preventDefault(),!u){G.error("Usuário não autenticado");return}s(!0);try{const T={...t,clientId:u.uid,status:"pending",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),deliveryDate:new Date(t.deliveryDate).toISOString()};l?await Hr(Ee(le,"orders",l),{...T,status:((_=(await Jt(Ee(le,"orders",l))).data())==null?void 0:_.status)||"pending"}):await i1(Er(le,"orders"),{...t,clientId:u.uid,status:"pending",viewed:!1,createdAt:new Date().toISOString()}),G.success(l?"Pedido atualizado com sucesso":"Pedido criado com sucesso"),o("/client")}catch(T){console.error("Error:",T),G.error("Erro ao salvar pedido")}finally{s(!1)}},m=g=>{const{name:_,value:T}=g.target;e(R=>({...R,[_]:T}))};return n?d.jsx("div",{className:"flex justify-center items-center h-64",children:d.jsx("div",{className:"w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"})}):d.jsxs("div",{className:"bg-white rounded-lg shadow-md",children:[d.jsx("div",{className:"p-6 border-b border-gray-200",children:d.jsxs("div",{className:"flex items-center space-x-4",children:[d.jsx("button",{onClick:()=>o("/client"),className:"text-gray-600 hover:text-gray-900",children:d.jsx(F_,{size:24})}),d.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:l?"Editar Pedido":"Novo Pedido"})]})}),d.jsxs("form",{onSubmit:f,className:"p-6 space-y-6",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Título do Pedido"}),d.jsx("input",{type:"text",name:"title",value:t.title,onChange:m,className:"input-field",required:!0,placeholder:"Ex: Logo para minha empresa"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Descrição"}),d.jsx("textarea",{name:"description",value:t.description,onChange:m,rows:5,className:"input-field",required:!0,placeholder:"Descreva os detalhes do seu pedido..."})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Data de Entrega Desejada"}),d.jsx("input",{type:"date",name:"deliveryDate",value:t.deliveryDate,onChange:m,className:"input-field",required:!0,min:new Date().toISOString().split("T")[0]})]}),d.jsxs("div",{className:"flex justify-end space-x-4",children:[d.jsx("button",{type:"button",onClick:()=>o("/client"),className:"px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors",children:"Cancelar"}),d.jsx("button",{type:"submit",disabled:i,className:"btn-primary flex items-center justify-center min-w-[100px]",children:i?d.jsx("div",{className:"w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"}):l?"Atualizar":"Criar Pedido"})]})]})]})}function Lb(){const{user:t}=an(),[e,n]=D.useState(!0),[r,i]=D.useState(null),[s,o]=D.useState(!1),[l,u]=D.useState(null);D.useEffect(()=>{c()},[t]);const c=async()=>{if(t)try{const m=Ee(le,"clients",t.uid),g=await Jt(m);if(g.exists()){const _=g.data();i(_),u(_)}}catch(m){console.error("Erro ao carregar perfil:",m),G.error("Erro ao carregar perfil")}finally{n(!1)}},f=async()=>{if(!(!t||!l))try{const m=Ee(le,"clients",t.uid);await su(m,l),i(l),o(!1),G.success("Perfil atualizado com sucesso")}catch(m){console.error("Erro ao atualizar perfil:",m),G.error("Erro ao atualizar perfil")}};return e?d.jsx("div",{className:"flex justify-center items-center h-64",children:d.jsx("div",{className:"w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"})}):d.jsxs("div",{className:"bg-white rounded-lg shadow-md",children:[d.jsx("div",{className:"p-6 border-b border-gray-200",children:d.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"Meu Perfil"})}),d.jsx("div",{className:"p-6",children:s?d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Nome"}),d.jsx("input",{type:"text",value:(l==null?void 0:l.name)||"",onChange:m=>u(g=>g?{...g,name:m.target.value}:null),className:"input-field"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),d.jsx("input",{type:"email",value:(l==null?void 0:l.email)||"",onChange:m=>u(g=>g?{...g,email:m.target.value}:null),className:"input-field"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Telefone"}),d.jsx("input",{type:"tel",value:(l==null?void 0:l.phone)||"",onChange:m=>u(g=>g?{...g,phone:m.target.value}:null),className:"input-field"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Link do Google Drive"}),d.jsxs("div",{className:"flex items-center space-x-2",children:[d.jsx(rd,{className:"w-5 h-5 text-blue-600"}),d.jsx("input",{type:"url",value:(l==null?void 0:l.driveLink)||"",onChange:m=>u(g=>g?{...g,driveLink:m.target.value}:null),placeholder:"https://drive.google.com/drive/folders/...",className:"input-field"})]}),d.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Adicione o link da pasta compartilhada do Google Drive onde seus arquivos serão armazenados."})]}),d.jsxs("div",{className:"flex justify-end space-x-3 mt-6",children:[d.jsx("button",{onClick:()=>{o(!1),u(r)},className:"px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors",children:"Cancelar"}),d.jsx("button",{onClick:f,className:"btn-primary",children:"Salvar"})]})]}):d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Nome"}),d.jsx("p",{className:"mt-1 text-base text-gray-900",children:r==null?void 0:r.name})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Email"}),d.jsx("p",{className:"mt-1 text-base text-gray-900",children:r==null?void 0:r.email})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Telefone"}),d.jsx("p",{className:"mt-1 text-base text-gray-900",children:r==null?void 0:r.phone})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Link do Google Drive"}),d.jsxs("div",{className:"mt-1 flex items-center space-x-2",children:[d.jsx(rd,{className:"w-5 h-5 text-blue-600"}),r!=null&&r.driveLink?d.jsx("a",{href:r.driveLink,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:text-blue-800 hover:underline",children:"Acessar Google Drive"}):d.jsx("p",{className:"text-gray-500 italic",children:"Nenhum link configurado"})]})]}),d.jsx("div",{className:"flex justify-end mt-6",children:d.jsx("button",{onClick:()=>o(!0),className:"btn-primary",children:"Editar Perfil"})})]})})]})}function jb(){return d.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:d.jsx("div",{className:"max-w-md w-full space-y-8",children:d.jsxs("div",{className:"flex flex-col items-center",children:[d.jsx(oA,{className:"h-12 w-12 text-yellow-500"}),d.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Aprovação Pendente"}),d.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:"Sua conta está aguardando aprovação do administrador. Por favor, aguarde o email de confirmação."}),d.jsx("p",{className:"mt-4 text-center text-sm text-gray-500",children:"Se você tiver alguma dúvida, entre em contato conosco."})]})})})}function Mb({driveLink:t,whatsappNumber:e="14981181568"}){const n=()=>{const i=`https://wa.me/${e}`;window.open(i,"_blank")},r=()=>{t&&window.open(t,"_blank")};return d.jsxs("div",{className:"flex gap-4",children:[d.jsxs("button",{onClick:n,className:"flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors",children:[d.jsx(gA,{className:"w-5 h-5"}),"WhatsApp"]}),t&&d.jsxs("button",{onClick:r,className:"flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:[d.jsx(fA,{className:"w-5 h-5"}),"Google Drive"]})]})}function Fb(){const{user:t,userRole:e}=an(),n=jt(),[r,i]=D.useState(null),[s,o]=D.useState(!0);return D.useEffect(()=>{if(e!=="client"){n("/login");return}(async()=>{if(t)try{const u=Ee(le,"clients",t.uid),c=await Jt(u);if(c.exists()){const f=c.data();i(f)}}catch(u){console.error("Error checking client status:",u)}finally{o(!1)}})()},[e,t,n]),s?d.jsx("div",{className:"min-h-screen flex items-center justify-center",children:d.jsx("div",{className:"w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"})}):(r==null?void 0:r.status)==="pending"?d.jsx(jb,{}):d.jsxs(Db,{children:[d.jsx("div",{className:"mb-4",children:d.jsx(Mb,{driveLink:r==null?void 0:r.driveLink})}),(r==null?void 0:r.status)==="inactive"&&d.jsx("div",{className:"bg-red-50 border-l-4 border-red-400 p-4 mb-4",children:d.jsxs("div",{className:"flex items-center",children:[d.jsx("div",{className:"flex-shrink-0",children:d.jsx(aA,{className:"h-5 w-5 text-red-400"})}),d.jsx("div",{className:"ml-3",children:d.jsxs("p",{className:"text-sm text-red-700",children:[d.jsx("span",{className:"font-medium",children:"Conta Inativa: "}),r.deactivationReason||"Sua conta está atualmente inativa."]})})]})}),d.jsxs(Rf,{children:[d.jsx(rt,{index:!0,element:d.jsx(cv,{isInactive:(r==null?void 0:r.status)==="inactive"})}),d.jsx(rt,{path:"orders",element:d.jsx(cv,{isInactive:(r==null?void 0:r.status)==="inactive"})}),d.jsx(rt,{path:"orders/new",element:(r==null?void 0:r.status)==="inactive"?d.jsx(ko,{to:"/client",replace:!0}):d.jsx(hv,{})}),d.jsx(rt,{path:"orders/:id",element:d.jsx(hv,{})}),d.jsx(rt,{path:"profile",element:d.jsx(Lb,{})}),d.jsx(rt,{path:"*",element:d.jsx(ko,{to:"",replace:!0})})]})]})}function dv({children:t,allowedRole:e}){const{user:n,userRole:r,loading:i}=an();return i?d.jsx("div",{className:"min-h-screen flex items-center justify-center",children:d.jsx("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"})}):!n||!r?d.jsx(ko,{to:"/login",replace:!0}):r!==e?d.jsx(ko,{to:`/${r}`,replace:!0}):d.jsx(d.Fragment,{children:t})}function Ub(){return d.jsx(cS,{children:d.jsxs(wb,{children:[d.jsxs(Rf,{children:[d.jsx(rt,{path:"/login",element:d.jsx(Eb,{})}),d.jsx(rt,{path:"/admin/*",element:d.jsx(dv,{allowedRole:"admin",children:d.jsx(bb,{})})}),d.jsx(rt,{path:"/client/*",element:d.jsx(dv,{allowedRole:"client",children:d.jsx(Fb,{})})}),d.jsx(rt,{path:"/",element:d.jsx(ko,{to:"/login",replace:!0})})]}),d.jsx(rA,{position:"top-right"})]})})}S_(document.getElementById("root")).render(d.jsx(D.StrictMode,{children:d.jsx(Ub,{})}));
//# sourceMappingURL=index-DVlzEMvb.js.map
