(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function kS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var N_={exports:{}},Eu={},I_={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yl=Symbol.for("react.element"),zS=Symbol.for("react.portal"),BS=Symbol.for("react.fragment"),HS=Symbol.for("react.strict_mode"),VS=Symbol.for("react.profiler"),GS=Symbol.for("react.provider"),WS=Symbol.for("react.context"),XS=Symbol.for("react.forward_ref"),jS=Symbol.for("react.suspense"),qS=Symbol.for("react.memo"),YS=Symbol.for("react.lazy"),qm=Symbol.iterator;function $S(n){return n===null||typeof n!="object"?null:(n=qm&&n[qm]||n["@@iterator"],typeof n=="function"?n:null)}var U_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F_=Object.assign,O_={};function ro(n,e,t){this.props=n,this.context=e,this.refs=O_,this.updater=t||U_}ro.prototype.isReactComponent={};ro.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ro.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function k_(){}k_.prototype=ro.prototype;function cp(n,e,t){this.props=n,this.context=e,this.refs=O_,this.updater=t||U_}var up=cp.prototype=new k_;up.constructor=cp;F_(up,ro.prototype);up.isPureReactComponent=!0;var Ym=Array.isArray,z_=Object.prototype.hasOwnProperty,fp={current:null},B_={key:!0,ref:!0,__self:!0,__source:!0};function H_(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)z_.call(e,i)&&!B_.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:yl,type:n,key:s,ref:a,props:r,_owner:fp.current}}function KS(n,e){return{$$typeof:yl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function dp(n){return typeof n=="object"&&n!==null&&n.$$typeof===yl}function ZS(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var $m=/\/+/g;function $u(n,e){return typeof n=="object"&&n!==null&&n.key!=null?ZS(""+n.key):e.toString(36)}function Sc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case yl:case zS:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+$u(a,0):i,Ym(r)?(t="",n!=null&&(t=n.replace($m,"$&/")+"/"),Sc(r,e,t,"",function(c){return c})):r!=null&&(dp(r)&&(r=KS(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace($m,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Ym(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+$u(s,o);a+=Sc(s,e,t,l,r)}else if(l=$S(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+$u(s,o++),a+=Sc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Dl(n,e,t){if(n==null)return n;var i=[],r=0;return Sc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function QS(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var xn={current:null},Mc={transition:null},JS={ReactCurrentDispatcher:xn,ReactCurrentBatchConfig:Mc,ReactCurrentOwner:fp};function V_(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:Dl,forEach:function(n,e,t){Dl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Dl(n,function(){e++}),e},toArray:function(n){return Dl(n,function(e){return e})||[]},only:function(n){if(!dp(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Xe.Component=ro;Xe.Fragment=BS;Xe.Profiler=VS;Xe.PureComponent=cp;Xe.StrictMode=HS;Xe.Suspense=jS;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JS;Xe.act=V_;Xe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=F_({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=fp.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)z_.call(e,l)&&!B_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:yl,type:n.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(n){return n={$$typeof:WS,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:GS,_context:n},n.Consumer=n};Xe.createElement=H_;Xe.createFactory=function(n){var e=H_.bind(null,n);return e.type=n,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(n){return{$$typeof:XS,render:n}};Xe.isValidElement=dp;Xe.lazy=function(n){return{$$typeof:YS,_payload:{_status:-1,_result:n},_init:QS}};Xe.memo=function(n,e){return{$$typeof:qS,type:n,compare:e===void 0?null:e}};Xe.startTransition=function(n){var e=Mc.transition;Mc.transition={};try{n()}finally{Mc.transition=e}};Xe.unstable_act=V_;Xe.useCallback=function(n,e){return xn.current.useCallback(n,e)};Xe.useContext=function(n){return xn.current.useContext(n)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(n){return xn.current.useDeferredValue(n)};Xe.useEffect=function(n,e){return xn.current.useEffect(n,e)};Xe.useId=function(){return xn.current.useId()};Xe.useImperativeHandle=function(n,e,t){return xn.current.useImperativeHandle(n,e,t)};Xe.useInsertionEffect=function(n,e){return xn.current.useInsertionEffect(n,e)};Xe.useLayoutEffect=function(n,e){return xn.current.useLayoutEffect(n,e)};Xe.useMemo=function(n,e){return xn.current.useMemo(n,e)};Xe.useReducer=function(n,e,t){return xn.current.useReducer(n,e,t)};Xe.useRef=function(n){return xn.current.useRef(n)};Xe.useState=function(n){return xn.current.useState(n)};Xe.useSyncExternalStore=function(n,e,t){return xn.current.useSyncExternalStore(n,e,t)};Xe.useTransition=function(){return xn.current.useTransition()};Xe.version="18.3.1";I_.exports=Xe;var Qe=I_.exports;const Ll=kS(Qe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eM=Qe,tM=Symbol.for("react.element"),nM=Symbol.for("react.fragment"),iM=Object.prototype.hasOwnProperty,rM=eM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sM={key:!0,ref:!0,__self:!0,__source:!0};function G_(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)iM.call(e,i)&&!sM.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:tM,type:n,key:s,ref:a,props:r,_owner:rM.current}}Eu.Fragment=nM;Eu.jsx=G_;Eu.jsxs=G_;N_.exports=Eu;var P=N_.exports,W_={exports:{}},Kn={},X_={exports:{}},j_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(B,j){var J=B.length;B.push(j);e:for(;0<J;){var $=J-1>>>1,ee=B[$];if(0<r(ee,j))B[$]=j,B[J]=ee,J=$;else break e}}function t(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var j=B[0],J=B.pop();if(J!==j){B[0]=J;e:for(var $=0,ee=B.length,ve=ee>>>1;$<ve;){var Ce=2*($+1)-1,Ie=B[Ce],Y=Ce+1,se=B[Y];if(0>r(Ie,J))Y<ee&&0>r(se,Ie)?(B[$]=se,B[Y]=J,$=Y):(B[$]=Ie,B[Ce]=J,$=Ce);else if(Y<ee&&0>r(se,J))B[$]=se,B[Y]=J,$=Y;else break e}}return j}function r(B,j){var J=B.sortIndex-j.sortIndex;return J!==0?J:B.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,h=null,f=3,p=!1,m=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(B){for(var j=t(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=B)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=t(c)}}function S(B){if(v=!1,x(B),!m)if(t(l)!==null)m=!0,H(E);else{var j=t(c);j!==null&&I(S,j.startTime-B)}}function E(B,j){m=!1,v&&(v=!1,d(y),y=-1),p=!0;var J=f;try{for(x(j),h=t(l);h!==null&&(!(h.expirationTime>j)||B&&!R());){var $=h.callback;if(typeof $=="function"){h.callback=null,f=h.priorityLevel;var ee=$(h.expirationTime<=j);j=n.unstable_now(),typeof ee=="function"?h.callback=ee:h===t(l)&&i(l),x(j)}else i(l);h=t(l)}if(h!==null)var ve=!0;else{var Ce=t(c);Ce!==null&&I(S,Ce.startTime-j),ve=!1}return ve}finally{h=null,f=J,p=!1}}var w=!1,A=null,y=-1,T=5,L=-1;function R(){return!(n.unstable_now()-L<T)}function O(){if(A!==null){var B=n.unstable_now();L=B;var j=!0;try{j=A(!0,B)}finally{j?F():(w=!1,A=null)}}else w=!1}var F;if(typeof g=="function")F=function(){g(O)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,z=X.port2;X.port1.onmessage=O,F=function(){z.postMessage(null)}}else F=function(){_(O,0)};function H(B){A=B,w||(w=!0,F())}function I(B,j){y=_(function(){B(n.unstable_now())},j)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_continueExecution=function(){m||p||(m=!0,H(E))},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(B){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var J=f;f=j;try{return B()}finally{f=J}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(B,j){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=f;f=B;try{return j()}finally{f=J}},n.unstable_scheduleCallback=function(B,j,J){var $=n.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?$+J:$):J=$,B){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=J+ee,B={id:u++,callback:j,priorityLevel:B,startTime:J,expirationTime:ee,sortIndex:-1},J>$?(B.sortIndex=J,e(c,B),t(l)===null&&B===t(c)&&(v?(d(y),y=-1):v=!0,I(S,J-$))):(B.sortIndex=ee,e(l,B),m||p||(m=!0,H(E))),B},n.unstable_shouldYield=R,n.unstable_wrapCallback=function(B){var j=f;return function(){var J=f;f=j;try{return B.apply(this,arguments)}finally{f=J}}}})(j_);X_.exports=j_;var aM=X_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oM=Qe,qn=aM;function ne(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q_=new Set,jo={};function Ws(n,e){Ba(n,e),Ba(n+"Capture",e)}function Ba(n,e){for(jo[n]=e,n=0;n<e.length;n++)q_.add(e[n])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ud=Object.prototype.hasOwnProperty,lM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Km={},Zm={};function cM(n){return ud.call(Zm,n)?!0:ud.call(Km,n)?!1:lM.test(n)?Zm[n]=!0:(Km[n]=!0,!1)}function uM(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function fM(n,e,t,i){if(e===null||typeof e>"u"||uM(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){nn[n]=new yn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];nn[e]=new yn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){nn[n]=new yn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){nn[n]=new yn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){nn[n]=new yn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){nn[n]=new yn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){nn[n]=new yn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){nn[n]=new yn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){nn[n]=new yn(n,5,!1,n.toLowerCase(),null,!1,!1)});var hp=/[\-:]([a-z])/g;function pp(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(hp,pp);nn[e]=new yn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(hp,pp);nn[e]=new yn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(hp,pp);nn[e]=new yn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){nn[n]=new yn(n,1,!1,n.toLowerCase(),null,!1,!1)});nn.xlinkHref=new yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){nn[n]=new yn(n,1,!1,n.toLowerCase(),null,!0,!0)});function mp(n,e,t,i){var r=nn.hasOwnProperty(e)?nn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fM(e,t,r,i)&&(t=null),i||r===null?cM(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var vr=oM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nl=Symbol.for("react.element"),ha=Symbol.for("react.portal"),pa=Symbol.for("react.fragment"),gp=Symbol.for("react.strict_mode"),fd=Symbol.for("react.profiler"),Y_=Symbol.for("react.provider"),$_=Symbol.for("react.context"),_p=Symbol.for("react.forward_ref"),dd=Symbol.for("react.suspense"),hd=Symbol.for("react.suspense_list"),vp=Symbol.for("react.memo"),Rr=Symbol.for("react.lazy"),K_=Symbol.for("react.offscreen"),Qm=Symbol.iterator;function co(n){return n===null||typeof n!="object"?null:(n=Qm&&n[Qm]||n["@@iterator"],typeof n=="function"?n:null)}var wt=Object.assign,Ku;function Ao(n){if(Ku===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Ku=e&&e[1]||""}return`
`+Ku+n}var Zu=!1;function Qu(n,e){if(!n||Zu)return"";Zu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{Zu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ao(n):""}function dM(n){switch(n.tag){case 5:return Ao(n.type);case 16:return Ao("Lazy");case 13:return Ao("Suspense");case 19:return Ao("SuspenseList");case 0:case 2:case 15:return n=Qu(n.type,!1),n;case 11:return n=Qu(n.type.render,!1),n;case 1:return n=Qu(n.type,!0),n;default:return""}}function pd(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case pa:return"Fragment";case ha:return"Portal";case fd:return"Profiler";case gp:return"StrictMode";case dd:return"Suspense";case hd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case $_:return(n.displayName||"Context")+".Consumer";case Y_:return(n._context.displayName||"Context")+".Provider";case _p:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case vp:return e=n.displayName||null,e!==null?e:pd(n.type)||"Memo";case Rr:e=n._payload,n=n._init;try{return pd(n(e))}catch{}}return null}function hM(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pd(e);case 8:return e===gp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Z_(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pM(n){var e=Z_(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Il(n){n._valueTracker||(n._valueTracker=pM(n))}function Q_(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Z_(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Gc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function md(n,e){var t=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Jm(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Qr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function J_(n,e){e=e.checked,e!=null&&mp(n,"checked",e,!1)}function gd(n,e){J_(n,e);var t=Qr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?_d(n,e.type,t):e.hasOwnProperty("defaultValue")&&_d(n,e.type,Qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function eg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function _d(n,e,t){(e!=="number"||Gc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Co=Array.isArray;function ba(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Qr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function vd(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function tg(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ne(92));if(Co(t)){if(1<t.length)throw Error(ne(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Qr(t)}}function ev(n,e){var t=Qr(e.value),i=Qr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function ng(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function tv(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xd(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?tv(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ul,nv=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ul=Ul||document.createElement("div"),Ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ul.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function qo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mM=["Webkit","ms","Moz","O"];Object.keys(Io).forEach(function(n){mM.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Io[e]=Io[n]})});function iv(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Io.hasOwnProperty(n)&&Io[n]?(""+e).trim():e+"px"}function rv(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=iv(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var gM=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yd(n,e){if(e){if(gM[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Sd(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Md=null;function xp(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ed=null,Ra=null,Pa=null;function ig(n){if(n=El(n)){if(typeof Ed!="function")throw Error(ne(280));var e=n.stateNode;e&&(e=bu(e),Ed(n.stateNode,n.type,e))}}function sv(n){Ra?Pa?Pa.push(n):Pa=[n]:Ra=n}function av(){if(Ra){var n=Ra,e=Pa;if(Pa=Ra=null,ig(n),e)for(n=0;n<e.length;n++)ig(e[n])}}function ov(n,e){return n(e)}function lv(){}var Ju=!1;function cv(n,e,t){if(Ju)return n(e,t);Ju=!0;try{return ov(n,e,t)}finally{Ju=!1,(Ra!==null||Pa!==null)&&(lv(),av())}}function Yo(n,e){var t=n.stateNode;if(t===null)return null;var i=bu(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ne(231,e,typeof t));return t}var Td=!1;if(ur)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Td=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Td=!1}function _M(n,e,t,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Uo=!1,Wc=null,Xc=!1,wd=null,vM={onError:function(n){Uo=!0,Wc=n}};function xM(n,e,t,i,r,s,a,o,l){Uo=!1,Wc=null,_M.apply(vM,arguments)}function yM(n,e,t,i,r,s,a,o,l){if(xM.apply(this,arguments),Uo){if(Uo){var c=Wc;Uo=!1,Wc=null}else throw Error(ne(198));Xc||(Xc=!0,wd=c)}}function Xs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function uv(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function rg(n){if(Xs(n)!==n)throw Error(ne(188))}function SM(n){var e=n.alternate;if(!e){if(e=Xs(n),e===null)throw Error(ne(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return rg(r),n;if(s===i)return rg(r),e;s=s.sibling}throw Error(ne(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(t.alternate!==i)throw Error(ne(190))}if(t.tag!==3)throw Error(ne(188));return t.stateNode.current===t?n:e}function fv(n){return n=SM(n),n!==null?dv(n):null}function dv(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=dv(n);if(e!==null)return e;n=n.sibling}return null}var hv=qn.unstable_scheduleCallback,sg=qn.unstable_cancelCallback,MM=qn.unstable_shouldYield,EM=qn.unstable_requestPaint,Nt=qn.unstable_now,TM=qn.unstable_getCurrentPriorityLevel,yp=qn.unstable_ImmediatePriority,pv=qn.unstable_UserBlockingPriority,jc=qn.unstable_NormalPriority,wM=qn.unstable_LowPriority,mv=qn.unstable_IdlePriority,Tu=null,Fi=null;function AM(n){if(Fi&&typeof Fi.onCommitFiberRoot=="function")try{Fi.onCommitFiberRoot(Tu,n,void 0,(n.current.flags&128)===128)}catch{}}var Si=Math.clz32?Math.clz32:RM,CM=Math.log,bM=Math.LN2;function RM(n){return n>>>=0,n===0?32:31-(CM(n)/bM|0)|0}var Fl=64,Ol=4194304;function bo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function qc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=bo(o):(s&=a,s!==0&&(i=bo(s)))}else a=t&~r,a!==0?i=bo(a):s!==0&&(i=bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Si(e),r=1<<t,i|=n[t],e&=~r;return i}function PM(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DM(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-Si(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=PM(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function Ad(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function gv(){var n=Fl;return Fl<<=1,!(Fl&4194240)&&(Fl=64),n}function ef(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Sl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Si(e),n[e]=t}function LM(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Si(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Sp(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Si(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var rt=0;function _v(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var vv,Mp,xv,yv,Sv,Cd=!1,kl=[],Vr=null,Gr=null,Wr=null,$o=new Map,Ko=new Map,Lr=[],NM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ag(n,e){switch(n){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":$o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(e.pointerId)}}function fo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=El(e),e!==null&&Mp(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function IM(n,e,t,i,r){switch(e){case"focusin":return Vr=fo(Vr,n,e,t,i,r),!0;case"dragenter":return Gr=fo(Gr,n,e,t,i,r),!0;case"mouseover":return Wr=fo(Wr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return $o.set(s,fo($o.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ko.set(s,fo(Ko.get(s)||null,n,e,t,i,r)),!0}return!1}function Mv(n){var e=ws(n.target);if(e!==null){var t=Xs(e);if(t!==null){if(e=t.tag,e===13){if(e=uv(t),e!==null){n.blockedOn=e,Sv(n.priority,function(){xv(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ec(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=bd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Md=i,t.target.dispatchEvent(i),Md=null}else return e=El(t),e!==null&&Mp(e),n.blockedOn=t,!1;e.shift()}return!0}function og(n,e,t){Ec(n)&&t.delete(e)}function UM(){Cd=!1,Vr!==null&&Ec(Vr)&&(Vr=null),Gr!==null&&Ec(Gr)&&(Gr=null),Wr!==null&&Ec(Wr)&&(Wr=null),$o.forEach(og),Ko.forEach(og)}function ho(n,e){n.blockedOn===e&&(n.blockedOn=null,Cd||(Cd=!0,qn.unstable_scheduleCallback(qn.unstable_NormalPriority,UM)))}function Zo(n){function e(r){return ho(r,n)}if(0<kl.length){ho(kl[0],n);for(var t=1;t<kl.length;t++){var i=kl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Vr!==null&&ho(Vr,n),Gr!==null&&ho(Gr,n),Wr!==null&&ho(Wr,n),$o.forEach(e),Ko.forEach(e),t=0;t<Lr.length;t++)i=Lr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Lr.length&&(t=Lr[0],t.blockedOn===null);)Mv(t),t.blockedOn===null&&Lr.shift()}var Da=vr.ReactCurrentBatchConfig,Yc=!0;function FM(n,e,t,i){var r=rt,s=Da.transition;Da.transition=null;try{rt=1,Ep(n,e,t,i)}finally{rt=r,Da.transition=s}}function OM(n,e,t,i){var r=rt,s=Da.transition;Da.transition=null;try{rt=4,Ep(n,e,t,i)}finally{rt=r,Da.transition=s}}function Ep(n,e,t,i){if(Yc){var r=bd(n,e,t,i);if(r===null)ff(n,e,i,$c,t),ag(n,i);else if(IM(r,n,e,t,i))i.stopPropagation();else if(ag(n,i),e&4&&-1<NM.indexOf(n)){for(;r!==null;){var s=El(r);if(s!==null&&vv(s),s=bd(n,e,t,i),s===null&&ff(n,e,i,$c,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else ff(n,e,i,null,t)}}var $c=null;function bd(n,e,t,i){if($c=null,n=xp(i),n=ws(n),n!==null)if(e=Xs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=uv(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return $c=n,null}function Ev(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TM()){case yp:return 1;case pv:return 4;case jc:case wM:return 16;case mv:return 536870912;default:return 16}default:return 16}}var Ur=null,Tp=null,Tc=null;function Tv(){if(Tc)return Tc;var n,e=Tp,t=e.length,i,r="value"in Ur?Ur.value:Ur.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return Tc=r.slice(n,1<i?1-i:void 0)}function wc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function zl(){return!0}function lg(){return!1}function Zn(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zl:lg,this.isPropagationStopped=lg,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),e}var so={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wp=Zn(so),Ml=wt({},so,{view:0,detail:0}),kM=Zn(Ml),tf,nf,po,wu=wt({},Ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ap,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==po&&(po&&n.type==="mousemove"?(tf=n.screenX-po.screenX,nf=n.screenY-po.screenY):nf=tf=0,po=n),tf)},movementY:function(n){return"movementY"in n?n.movementY:nf}}),cg=Zn(wu),zM=wt({},wu,{dataTransfer:0}),BM=Zn(zM),HM=wt({},Ml,{relatedTarget:0}),rf=Zn(HM),VM=wt({},so,{animationName:0,elapsedTime:0,pseudoElement:0}),GM=Zn(VM),WM=wt({},so,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),XM=Zn(WM),jM=wt({},so,{data:0}),ug=Zn(jM),qM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},YM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$M={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KM(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=$M[n])?!!e[n]:!1}function Ap(){return KM}var ZM=wt({},Ml,{key:function(n){if(n.key){var e=qM[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=wc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?YM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ap,charCode:function(n){return n.type==="keypress"?wc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?wc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),QM=Zn(ZM),JM=wt({},wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fg=Zn(JM),e1=wt({},Ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ap}),t1=Zn(e1),n1=wt({},so,{propertyName:0,elapsedTime:0,pseudoElement:0}),i1=Zn(n1),r1=wt({},wu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),s1=Zn(r1),a1=[9,13,27,32],Cp=ur&&"CompositionEvent"in window,Fo=null;ur&&"documentMode"in document&&(Fo=document.documentMode);var o1=ur&&"TextEvent"in window&&!Fo,wv=ur&&(!Cp||Fo&&8<Fo&&11>=Fo),dg=" ",hg=!1;function Av(n,e){switch(n){case"keyup":return a1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ma=!1;function l1(n,e){switch(n){case"compositionend":return Cv(e);case"keypress":return e.which!==32?null:(hg=!0,dg);case"textInput":return n=e.data,n===dg&&hg?null:n;default:return null}}function c1(n,e){if(ma)return n==="compositionend"||!Cp&&Av(n,e)?(n=Tv(),Tc=Tp=Ur=null,ma=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return wv&&e.locale!=="ko"?null:e.data;default:return null}}var u1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!u1[n.type]:e==="textarea"}function bv(n,e,t,i){sv(i),e=Kc(e,"onChange"),0<e.length&&(t=new wp("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Oo=null,Qo=null;function f1(n){zv(n,0)}function Au(n){var e=va(n);if(Q_(e))return n}function d1(n,e){if(n==="change")return e}var Rv=!1;if(ur){var sf;if(ur){var af="oninput"in document;if(!af){var mg=document.createElement("div");mg.setAttribute("oninput","return;"),af=typeof mg.oninput=="function"}sf=af}else sf=!1;Rv=sf&&(!document.documentMode||9<document.documentMode)}function gg(){Oo&&(Oo.detachEvent("onpropertychange",Pv),Qo=Oo=null)}function Pv(n){if(n.propertyName==="value"&&Au(Qo)){var e=[];bv(e,Qo,n,xp(n)),cv(f1,e)}}function h1(n,e,t){n==="focusin"?(gg(),Oo=e,Qo=t,Oo.attachEvent("onpropertychange",Pv)):n==="focusout"&&gg()}function p1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Au(Qo)}function m1(n,e){if(n==="click")return Au(e)}function g1(n,e){if(n==="input"||n==="change")return Au(e)}function _1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Ei=typeof Object.is=="function"?Object.is:_1;function Jo(n,e){if(Ei(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ud.call(e,r)||!Ei(n[r],e[r]))return!1}return!0}function _g(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function vg(n,e){var t=_g(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=_g(t)}}function Dv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Dv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Lv(){for(var n=window,e=Gc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Gc(n.document)}return e}function bp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function v1(n){var e=Lv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Dv(t.ownerDocument.documentElement,t)){if(i!==null&&bp(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=vg(t,s);var a=vg(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var x1=ur&&"documentMode"in document&&11>=document.documentMode,ga=null,Rd=null,ko=null,Pd=!1;function xg(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Pd||ga==null||ga!==Gc(i)||(i=ga,"selectionStart"in i&&bp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ko&&Jo(ko,i)||(ko=i,i=Kc(Rd,"onSelect"),0<i.length&&(e=new wp("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ga)))}function Bl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var _a={animationend:Bl("Animation","AnimationEnd"),animationiteration:Bl("Animation","AnimationIteration"),animationstart:Bl("Animation","AnimationStart"),transitionend:Bl("Transition","TransitionEnd")},of={},Nv={};ur&&(Nv=document.createElement("div").style,"AnimationEvent"in window||(delete _a.animationend.animation,delete _a.animationiteration.animation,delete _a.animationstart.animation),"TransitionEvent"in window||delete _a.transitionend.transition);function Cu(n){if(of[n])return of[n];if(!_a[n])return n;var e=_a[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Nv)return of[n]=e[t];return n}var Iv=Cu("animationend"),Uv=Cu("animationiteration"),Fv=Cu("animationstart"),Ov=Cu("transitionend"),kv=new Map,yg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ss(n,e){kv.set(n,e),Ws(e,[n])}for(var lf=0;lf<yg.length;lf++){var cf=yg[lf],y1=cf.toLowerCase(),S1=cf[0].toUpperCase()+cf.slice(1);ss(y1,"on"+S1)}ss(Iv,"onAnimationEnd");ss(Uv,"onAnimationIteration");ss(Fv,"onAnimationStart");ss("dblclick","onDoubleClick");ss("focusin","onFocus");ss("focusout","onBlur");ss(Ov,"onTransitionEnd");Ba("onMouseEnter",["mouseout","mouseover"]);Ba("onMouseLeave",["mouseout","mouseover"]);Ba("onPointerEnter",["pointerout","pointerover"]);Ba("onPointerLeave",["pointerout","pointerover"]);Ws("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ws("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ws("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ws("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ws("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ws("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function Sg(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,yM(i,e,void 0,n),n.currentTarget=null}function zv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Sg(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Sg(r,o,c),s=l}}}if(Xc)throw n=wd,Xc=!1,wd=null,n}function mt(n,e){var t=e[Ud];t===void 0&&(t=e[Ud]=new Set);var i=n+"__bubble";t.has(i)||(Bv(e,n,2,!1),t.add(i))}function uf(n,e,t){var i=0;e&&(i|=4),Bv(t,n,i,e)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function el(n){if(!n[Hl]){n[Hl]=!0,q_.forEach(function(t){t!=="selectionchange"&&(M1.has(t)||uf(t,!1,n),uf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Hl]||(e[Hl]=!0,uf("selectionchange",!1,e))}}function Bv(n,e,t,i){switch(Ev(e)){case 1:var r=FM;break;case 4:r=OM;break;default:r=Ep}t=r.bind(null,e,t,n),r=void 0,!Td||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function ff(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=ws(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}cv(function(){var c=s,u=xp(t),h=[];e:{var f=kv.get(n);if(f!==void 0){var p=wp,m=n;switch(n){case"keypress":if(wc(t)===0)break e;case"keydown":case"keyup":p=QM;break;case"focusin":m="focus",p=rf;break;case"focusout":m="blur",p=rf;break;case"beforeblur":case"afterblur":p=rf;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=cg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=BM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=t1;break;case Iv:case Uv:case Fv:p=GM;break;case Ov:p=i1;break;case"scroll":p=kM;break;case"wheel":p=s1;break;case"copy":case"cut":case"paste":p=XM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=fg}var v=(e&4)!==0,_=!v&&n==="scroll",d=v?f!==null?f+"Capture":null:f;v=[];for(var g=c,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,d!==null&&(S=Yo(g,d),S!=null&&v.push(tl(g,S,x)))),_)break;g=g.return}0<v.length&&(f=new p(f,m,null,t,u),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Md&&(m=t.relatedTarget||t.fromElement)&&(ws(m)||m[fr]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=t.relatedTarget||t.toElement,p=c,m=m?ws(m):null,m!==null&&(_=Xs(m),m!==_||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(v=cg,S="onMouseLeave",d="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(v=fg,S="onPointerLeave",d="onPointerEnter",g="pointer"),_=p==null?f:va(p),x=m==null?f:va(m),f=new v(S,g+"leave",p,t,u),f.target=_,f.relatedTarget=x,S=null,ws(u)===c&&(v=new v(d,g+"enter",m,t,u),v.target=x,v.relatedTarget=_,S=v),_=S,p&&m)t:{for(v=p,d=m,g=0,x=v;x;x=Ks(x))g++;for(x=0,S=d;S;S=Ks(S))x++;for(;0<g-x;)v=Ks(v),g--;for(;0<x-g;)d=Ks(d),x--;for(;g--;){if(v===d||d!==null&&v===d.alternate)break t;v=Ks(v),d=Ks(d)}v=null}else v=null;p!==null&&Mg(h,f,p,v,!1),m!==null&&_!==null&&Mg(h,_,m,v,!0)}}e:{if(f=c?va(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var E=d1;else if(pg(f))if(Rv)E=g1;else{E=p1;var w=h1}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=m1);if(E&&(E=E(n,c))){bv(h,E,t,u);break e}w&&w(n,f,c),n==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&_d(f,"number",f.value)}switch(w=c?va(c):window,n){case"focusin":(pg(w)||w.contentEditable==="true")&&(ga=w,Rd=c,ko=null);break;case"focusout":ko=Rd=ga=null;break;case"mousedown":Pd=!0;break;case"contextmenu":case"mouseup":case"dragend":Pd=!1,xg(h,t,u);break;case"selectionchange":if(x1)break;case"keydown":case"keyup":xg(h,t,u)}var A;if(Cp)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ma?Av(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(wv&&t.locale!=="ko"&&(ma||y!=="onCompositionStart"?y==="onCompositionEnd"&&ma&&(A=Tv()):(Ur=u,Tp="value"in Ur?Ur.value:Ur.textContent,ma=!0)),w=Kc(c,y),0<w.length&&(y=new ug(y,n,null,t,u),h.push({event:y,listeners:w}),A?y.data=A:(A=Cv(t),A!==null&&(y.data=A)))),(A=o1?l1(n,t):c1(n,t))&&(c=Kc(c,"onBeforeInput"),0<c.length&&(u=new ug("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=A))}zv(h,e)})}function tl(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Kc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Yo(n,t),s!=null&&i.unshift(tl(n,s,r)),s=Yo(n,e),s!=null&&i.push(tl(n,s,r))),n=n.return}return i}function Ks(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Mg(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Yo(t,s),l!=null&&a.unshift(tl(t,l,o))):r||(l=Yo(t,s),l!=null&&a.push(tl(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var E1=/\r\n?/g,T1=/\u0000|\uFFFD/g;function Eg(n){return(typeof n=="string"?n:""+n).replace(E1,`
`).replace(T1,"")}function Vl(n,e,t){if(e=Eg(e),Eg(n)!==e&&t)throw Error(ne(425))}function Zc(){}var Dd=null,Ld=null;function Nd(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Id=typeof setTimeout=="function"?setTimeout:void 0,w1=typeof clearTimeout=="function"?clearTimeout:void 0,Tg=typeof Promise=="function"?Promise:void 0,A1=typeof queueMicrotask=="function"?queueMicrotask:typeof Tg<"u"?function(n){return Tg.resolve(null).then(n).catch(C1)}:Id;function C1(n){setTimeout(function(){throw n})}function df(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Zo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Zo(e)}function Xr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function wg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ao=Math.random().toString(36).slice(2),Di="__reactFiber$"+ao,nl="__reactProps$"+ao,fr="__reactContainer$"+ao,Ud="__reactEvents$"+ao,b1="__reactListeners$"+ao,R1="__reactHandles$"+ao;function ws(n){var e=n[Di];if(e)return e;for(var t=n.parentNode;t;){if(e=t[fr]||t[Di]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=wg(n);n!==null;){if(t=n[Di])return t;n=wg(n)}return e}n=t,t=n.parentNode}return null}function El(n){return n=n[Di]||n[fr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function va(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ne(33))}function bu(n){return n[nl]||null}var Fd=[],xa=-1;function as(n){return{current:n}}function gt(n){0>xa||(n.current=Fd[xa],Fd[xa]=null,xa--)}function pt(n,e){xa++,Fd[xa]=n.current,n.current=e}var Jr={},hn=as(Jr),wn=as(!1),Os=Jr;function Ha(n,e){var t=n.type.contextTypes;if(!t)return Jr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function An(n){return n=n.childContextTypes,n!=null}function Qc(){gt(wn),gt(hn)}function Ag(n,e,t){if(hn.current!==Jr)throw Error(ne(168));pt(hn,e),pt(wn,t)}function Hv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,hM(n)||"Unknown",r));return wt({},t,i)}function Jc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Jr,Os=hn.current,pt(hn,n),pt(wn,wn.current),!0}function Cg(n,e,t){var i=n.stateNode;if(!i)throw Error(ne(169));t?(n=Hv(n,e,Os),i.__reactInternalMemoizedMergedChildContext=n,gt(wn),gt(hn),pt(hn,n)):gt(wn),pt(wn,t)}var er=null,Ru=!1,hf=!1;function Vv(n){er===null?er=[n]:er.push(n)}function P1(n){Ru=!0,Vv(n)}function os(){if(!hf&&er!==null){hf=!0;var n=0,e=rt;try{var t=er;for(rt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}er=null,Ru=!1}catch(r){throw er!==null&&(er=er.slice(n+1)),hv(yp,os),r}finally{rt=e,hf=!1}}return null}var ya=[],Sa=0,eu=null,tu=0,ti=[],ni=0,ks=null,ir=1,rr="";function xs(n,e){ya[Sa++]=tu,ya[Sa++]=eu,eu=n,tu=e}function Gv(n,e,t){ti[ni++]=ir,ti[ni++]=rr,ti[ni++]=ks,ks=n;var i=ir;n=rr;var r=32-Si(i)-1;i&=~(1<<r),t+=1;var s=32-Si(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ir=1<<32-Si(e)+r|t<<r|i,rr=s+n}else ir=1<<s|t<<r|i,rr=n}function Rp(n){n.return!==null&&(xs(n,1),Gv(n,1,0))}function Pp(n){for(;n===eu;)eu=ya[--Sa],ya[Sa]=null,tu=ya[--Sa],ya[Sa]=null;for(;n===ks;)ks=ti[--ni],ti[ni]=null,rr=ti[--ni],ti[ni]=null,ir=ti[--ni],ti[ni]=null}var Xn=null,Vn=null,vt=!1,_i=null;function Wv(n,e){var t=ii(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function bg(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Xn=n,Vn=Xr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Xn=n,Vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ks!==null?{id:ir,overflow:rr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ii(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Xn=n,Vn=null,!0):!1;default:return!1}}function Od(n){return(n.mode&1)!==0&&(n.flags&128)===0}function kd(n){if(vt){var e=Vn;if(e){var t=e;if(!bg(n,e)){if(Od(n))throw Error(ne(418));e=Xr(t.nextSibling);var i=Xn;e&&bg(n,e)?Wv(i,t):(n.flags=n.flags&-4097|2,vt=!1,Xn=n)}}else{if(Od(n))throw Error(ne(418));n.flags=n.flags&-4097|2,vt=!1,Xn=n}}}function Rg(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Xn=n}function Gl(n){if(n!==Xn)return!1;if(!vt)return Rg(n),vt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Nd(n.type,n.memoizedProps)),e&&(e=Vn)){if(Od(n))throw Xv(),Error(ne(418));for(;e;)Wv(n,e),e=Xr(e.nextSibling)}if(Rg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ne(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Vn=Xr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Vn=null}}else Vn=Xn?Xr(n.stateNode.nextSibling):null;return!0}function Xv(){for(var n=Vn;n;)n=Xr(n.nextSibling)}function Va(){Vn=Xn=null,vt=!1}function Dp(n){_i===null?_i=[n]:_i.push(n)}var D1=vr.ReactCurrentBatchConfig;function mo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ne(309));var i=t.stateNode}if(!i)throw Error(ne(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(ne(284));if(!t._owner)throw Error(ne(290,n))}return n}function Wl(n,e){throw n=Object.prototype.toString.call(e),Error(ne(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Pg(n){var e=n._init;return e(n._payload)}function jv(n){function e(d,g){if(n){var x=d.deletions;x===null?(d.deletions=[g],d.flags|=16):x.push(g)}}function t(d,g){if(!n)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=$r(d,g),d.index=0,d.sibling=null,d}function s(d,g,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<g?(d.flags|=2,g):x):(d.flags|=2,g)):(d.flags|=1048576,g)}function a(d){return n&&d.alternate===null&&(d.flags|=2),d}function o(d,g,x,S){return g===null||g.tag!==6?(g=yf(x,d.mode,S),g.return=d,g):(g=r(g,x),g.return=d,g)}function l(d,g,x,S){var E=x.type;return E===pa?u(d,g,x.props.children,S,x.key):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rr&&Pg(E)===g.type)?(S=r(g,x.props),S.ref=mo(d,g,x),S.return=d,S):(S=Lc(x.type,x.key,x.props,null,d.mode,S),S.ref=mo(d,g,x),S.return=d,S)}function c(d,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Sf(x,d.mode,S),g.return=d,g):(g=r(g,x.children||[]),g.return=d,g)}function u(d,g,x,S,E){return g===null||g.tag!==7?(g=Ls(x,d.mode,S,E),g.return=d,g):(g=r(g,x),g.return=d,g)}function h(d,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=yf(""+g,d.mode,x),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Nl:return x=Lc(g.type,g.key,g.props,null,d.mode,x),x.ref=mo(d,null,g),x.return=d,x;case ha:return g=Sf(g,d.mode,x),g.return=d,g;case Rr:var S=g._init;return h(d,S(g._payload),x)}if(Co(g)||co(g))return g=Ls(g,d.mode,x,null),g.return=d,g;Wl(d,g)}return null}function f(d,g,x,S){var E=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:o(d,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Nl:return x.key===E?l(d,g,x,S):null;case ha:return x.key===E?c(d,g,x,S):null;case Rr:return E=x._init,f(d,g,E(x._payload),S)}if(Co(x)||co(x))return E!==null?null:u(d,g,x,S,null);Wl(d,x)}return null}function p(d,g,x,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(x)||null,o(g,d,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Nl:return d=d.get(S.key===null?x:S.key)||null,l(g,d,S,E);case ha:return d=d.get(S.key===null?x:S.key)||null,c(g,d,S,E);case Rr:var w=S._init;return p(d,g,x,w(S._payload),E)}if(Co(S)||co(S))return d=d.get(x)||null,u(g,d,S,E,null);Wl(g,S)}return null}function m(d,g,x,S){for(var E=null,w=null,A=g,y=g=0,T=null;A!==null&&y<x.length;y++){A.index>y?(T=A,A=null):T=A.sibling;var L=f(d,A,x[y],S);if(L===null){A===null&&(A=T);break}n&&A&&L.alternate===null&&e(d,A),g=s(L,g,y),w===null?E=L:w.sibling=L,w=L,A=T}if(y===x.length)return t(d,A),vt&&xs(d,y),E;if(A===null){for(;y<x.length;y++)A=h(d,x[y],S),A!==null&&(g=s(A,g,y),w===null?E=A:w.sibling=A,w=A);return vt&&xs(d,y),E}for(A=i(d,A);y<x.length;y++)T=p(A,d,y,x[y],S),T!==null&&(n&&T.alternate!==null&&A.delete(T.key===null?y:T.key),g=s(T,g,y),w===null?E=T:w.sibling=T,w=T);return n&&A.forEach(function(R){return e(d,R)}),vt&&xs(d,y),E}function v(d,g,x,S){var E=co(x);if(typeof E!="function")throw Error(ne(150));if(x=E.call(x),x==null)throw Error(ne(151));for(var w=E=null,A=g,y=g=0,T=null,L=x.next();A!==null&&!L.done;y++,L=x.next()){A.index>y?(T=A,A=null):T=A.sibling;var R=f(d,A,L.value,S);if(R===null){A===null&&(A=T);break}n&&A&&R.alternate===null&&e(d,A),g=s(R,g,y),w===null?E=R:w.sibling=R,w=R,A=T}if(L.done)return t(d,A),vt&&xs(d,y),E;if(A===null){for(;!L.done;y++,L=x.next())L=h(d,L.value,S),L!==null&&(g=s(L,g,y),w===null?E=L:w.sibling=L,w=L);return vt&&xs(d,y),E}for(A=i(d,A);!L.done;y++,L=x.next())L=p(A,d,y,L.value,S),L!==null&&(n&&L.alternate!==null&&A.delete(L.key===null?y:L.key),g=s(L,g,y),w===null?E=L:w.sibling=L,w=L);return n&&A.forEach(function(O){return e(d,O)}),vt&&xs(d,y),E}function _(d,g,x,S){if(typeof x=="object"&&x!==null&&x.type===pa&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Nl:e:{for(var E=x.key,w=g;w!==null;){if(w.key===E){if(E=x.type,E===pa){if(w.tag===7){t(d,w.sibling),g=r(w,x.props.children),g.return=d,d=g;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rr&&Pg(E)===w.type){t(d,w.sibling),g=r(w,x.props),g.ref=mo(d,w,x),g.return=d,d=g;break e}t(d,w);break}else e(d,w);w=w.sibling}x.type===pa?(g=Ls(x.props.children,d.mode,S,x.key),g.return=d,d=g):(S=Lc(x.type,x.key,x.props,null,d.mode,S),S.ref=mo(d,g,x),S.return=d,d=S)}return a(d);case ha:e:{for(w=x.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){t(d,g.sibling),g=r(g,x.children||[]),g.return=d,d=g;break e}else{t(d,g);break}else e(d,g);g=g.sibling}g=Sf(x,d.mode,S),g.return=d,d=g}return a(d);case Rr:return w=x._init,_(d,g,w(x._payload),S)}if(Co(x))return m(d,g,x,S);if(co(x))return v(d,g,x,S);Wl(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(t(d,g.sibling),g=r(g,x),g.return=d,d=g):(t(d,g),g=yf(x,d.mode,S),g.return=d,d=g),a(d)):t(d,g)}return _}var Ga=jv(!0),qv=jv(!1),nu=as(null),iu=null,Ma=null,Lp=null;function Np(){Lp=Ma=iu=null}function Ip(n){var e=nu.current;gt(nu),n._currentValue=e}function zd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function La(n,e){iu=n,Lp=Ma=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Tn=!0),n.firstContext=null)}function li(n){var e=n._currentValue;if(Lp!==n)if(n={context:n,memoizedValue:e,next:null},Ma===null){if(iu===null)throw Error(ne(308));Ma=n,iu.dependencies={lanes:0,firstContext:n}}else Ma=Ma.next=n;return e}var As=null;function Up(n){As===null?As=[n]:As.push(n)}function Yv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Up(e)):(t.next=r.next,r.next=t),e.interleaved=t,dr(n,i)}function dr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Pr=!1;function Fp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $v(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ar(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function jr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,dr(n,t)}return r=i.interleaved,r===null?(e.next=e,Up(i)):(e.next=r.next,r.next=e),i.interleaved=e,dr(n,t)}function Ac(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Sp(n,t)}}function Dg(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function ru(n,e,t,i){var r=n.updateQueue;Pr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=n.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,u=c=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var m=n,v=o;switch(f=e,p=t,v.tag){case 1:if(m=v.payload,typeof m=="function"){h=m.call(p,h,f);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,f=typeof m=="function"?m.call(p,h,f):m,f==null)break e;h=wt({},h,f);break e;case 2:Pr=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Bs|=a,n.lanes=a,n.memoizedState=h}}function Lg(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Tl={},Oi=as(Tl),il=as(Tl),rl=as(Tl);function Cs(n){if(n===Tl)throw Error(ne(174));return n}function Op(n,e){switch(pt(rl,e),pt(il,n),pt(Oi,Tl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xd(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=xd(e,n)}gt(Oi),pt(Oi,e)}function Wa(){gt(Oi),gt(il),gt(rl)}function Kv(n){Cs(rl.current);var e=Cs(Oi.current),t=xd(e,n.type);e!==t&&(pt(il,n),pt(Oi,t))}function kp(n){il.current===n&&(gt(Oi),gt(il))}var St=as(0);function su(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pf=[];function zp(){for(var n=0;n<pf.length;n++)pf[n]._workInProgressVersionPrimary=null;pf.length=0}var Cc=vr.ReactCurrentDispatcher,mf=vr.ReactCurrentBatchConfig,zs=0,Tt=null,zt=null,qt=null,au=!1,zo=!1,sl=0,L1=0;function sn(){throw Error(ne(321))}function Bp(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Ei(n[t],e[t]))return!1;return!0}function Hp(n,e,t,i,r,s){if(zs=s,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cc.current=n===null||n.memoizedState===null?F1:O1,n=t(i,r),zo){s=0;do{if(zo=!1,sl=0,25<=s)throw Error(ne(301));s+=1,qt=zt=null,e.updateQueue=null,Cc.current=k1,n=t(i,r)}while(zo)}if(Cc.current=ou,e=zt!==null&&zt.next!==null,zs=0,qt=zt=Tt=null,au=!1,e)throw Error(ne(300));return n}function Vp(){var n=sl!==0;return sl=0,n}function bi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?Tt.memoizedState=qt=n:qt=qt.next=n,qt}function ci(){if(zt===null){var n=Tt.alternate;n=n!==null?n.memoizedState:null}else n=zt.next;var e=qt===null?Tt.memoizedState:qt.next;if(e!==null)qt=e,zt=n;else{if(n===null)throw Error(ne(310));zt=n,n={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},qt===null?Tt.memoizedState=qt=n:qt=qt.next=n}return qt}function al(n,e){return typeof e=="function"?e(n):e}function gf(n){var e=ci(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=zt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((zs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,Tt.lanes|=u,Bs|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Ei(i,e.memoizedState)||(Tn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Tt.lanes|=s,Bs|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function _f(n){var e=ci(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);Ei(s,e.memoizedState)||(Tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Zv(){}function Qv(n,e){var t=Tt,i=ci(),r=e(),s=!Ei(i.memoizedState,r);if(s&&(i.memoizedState=r,Tn=!0),i=i.queue,Gp(tx.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||qt!==null&&qt.memoizedState.tag&1){if(t.flags|=2048,ol(9,ex.bind(null,t,i,r,e),void 0,null),Yt===null)throw Error(ne(349));zs&30||Jv(t,e,r)}return r}function Jv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function ex(n,e,t,i){e.value=t,e.getSnapshot=i,nx(e)&&ix(n)}function tx(n,e,t){return t(function(){nx(e)&&ix(n)})}function nx(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Ei(n,t)}catch{return!0}}function ix(n){var e=dr(n,1);e!==null&&Mi(e,n,1,-1)}function Ng(n){var e=bi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:al,lastRenderedState:n},e.queue=n,n=n.dispatch=U1.bind(null,Tt,n),[e.memoizedState,n]}function ol(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function rx(){return ci().memoizedState}function bc(n,e,t,i){var r=bi();Tt.flags|=n,r.memoizedState=ol(1|e,t,void 0,i===void 0?null:i)}function Pu(n,e,t,i){var r=ci();i=i===void 0?null:i;var s=void 0;if(zt!==null){var a=zt.memoizedState;if(s=a.destroy,i!==null&&Bp(i,a.deps)){r.memoizedState=ol(e,t,s,i);return}}Tt.flags|=n,r.memoizedState=ol(1|e,t,s,i)}function Ig(n,e){return bc(8390656,8,n,e)}function Gp(n,e){return Pu(2048,8,n,e)}function sx(n,e){return Pu(4,2,n,e)}function ax(n,e){return Pu(4,4,n,e)}function ox(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function lx(n,e,t){return t=t!=null?t.concat([n]):null,Pu(4,4,ox.bind(null,e,n),t)}function Wp(){}function cx(n,e){var t=ci();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Bp(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function ux(n,e){var t=ci();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Bp(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function fx(n,e,t){return zs&21?(Ei(t,e)||(t=gv(),Tt.lanes|=t,Bs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Tn=!0),n.memoizedState=t)}function N1(n,e){var t=rt;rt=t!==0&&4>t?t:4,n(!0);var i=mf.transition;mf.transition={};try{n(!1),e()}finally{rt=t,mf.transition=i}}function dx(){return ci().memoizedState}function I1(n,e,t){var i=Yr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},hx(n))px(e,t);else if(t=Yv(n,e,t,i),t!==null){var r=_n();Mi(t,n,i,r),mx(t,e,i)}}function U1(n,e,t){var i=Yr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(hx(n))px(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,Ei(o,a)){var l=e.interleaved;l===null?(r.next=r,Up(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Yv(n,e,r,i),t!==null&&(r=_n(),Mi(t,n,i,r),mx(t,e,i))}}function hx(n){var e=n.alternate;return n===Tt||e!==null&&e===Tt}function px(n,e){zo=au=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function mx(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Sp(n,t)}}var ou={readContext:li,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},F1={readContext:li,useCallback:function(n,e){return bi().memoizedState=[n,e===void 0?null:e],n},useContext:li,useEffect:Ig,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,bc(4194308,4,ox.bind(null,e,n),t)},useLayoutEffect:function(n,e){return bc(4194308,4,n,e)},useInsertionEffect:function(n,e){return bc(4,2,n,e)},useMemo:function(n,e){var t=bi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=bi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=I1.bind(null,Tt,n),[i.memoizedState,n]},useRef:function(n){var e=bi();return n={current:n},e.memoizedState=n},useState:Ng,useDebugValue:Wp,useDeferredValue:function(n){return bi().memoizedState=n},useTransition:function(){var n=Ng(!1),e=n[0];return n=N1.bind(null,n[1]),bi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Tt,r=bi();if(vt){if(t===void 0)throw Error(ne(407));t=t()}else{if(t=e(),Yt===null)throw Error(ne(349));zs&30||Jv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Ig(tx.bind(null,i,s,n),[n]),i.flags|=2048,ol(9,ex.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=bi(),e=Yt.identifierPrefix;if(vt){var t=rr,i=ir;t=(i&~(1<<32-Si(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=sl++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=L1++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},O1={readContext:li,useCallback:cx,useContext:li,useEffect:Gp,useImperativeHandle:lx,useInsertionEffect:sx,useLayoutEffect:ax,useMemo:ux,useReducer:gf,useRef:rx,useState:function(){return gf(al)},useDebugValue:Wp,useDeferredValue:function(n){var e=ci();return fx(e,zt.memoizedState,n)},useTransition:function(){var n=gf(al)[0],e=ci().memoizedState;return[n,e]},useMutableSource:Zv,useSyncExternalStore:Qv,useId:dx,unstable_isNewReconciler:!1},k1={readContext:li,useCallback:cx,useContext:li,useEffect:Gp,useImperativeHandle:lx,useInsertionEffect:sx,useLayoutEffect:ax,useMemo:ux,useReducer:_f,useRef:rx,useState:function(){return _f(al)},useDebugValue:Wp,useDeferredValue:function(n){var e=ci();return zt===null?e.memoizedState=n:fx(e,zt.memoizedState,n)},useTransition:function(){var n=_f(al)[0],e=ci().memoizedState;return[n,e]},useMutableSource:Zv,useSyncExternalStore:Qv,useId:dx,unstable_isNewReconciler:!1};function mi(n,e){if(n&&n.defaultProps){e=wt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Bd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:wt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Du={isMounted:function(n){return(n=n._reactInternals)?Xs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=_n(),r=Yr(n),s=ar(i,r);s.payload=e,t!=null&&(s.callback=t),e=jr(n,s,r),e!==null&&(Mi(e,n,r,i),Ac(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=_n(),r=Yr(n),s=ar(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=jr(n,s,r),e!==null&&(Mi(e,n,r,i),Ac(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=_n(),i=Yr(n),r=ar(t,i);r.tag=2,e!=null&&(r.callback=e),e=jr(n,r,i),e!==null&&(Mi(e,n,i,t),Ac(e,n,i))}};function Ug(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Jo(t,i)||!Jo(r,s):!0}function gx(n,e,t){var i=!1,r=Jr,s=e.contextType;return typeof s=="object"&&s!==null?s=li(s):(r=An(e)?Os:hn.current,i=e.contextTypes,s=(i=i!=null)?Ha(n,r):Jr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Du,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Fg(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Du.enqueueReplaceState(e,e.state,null)}function Hd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Fp(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=li(s):(s=An(e)?Os:hn.current,r.context=Ha(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Du.enqueueReplaceState(r,r.state,null),ru(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Xa(n,e){try{var t="",i=e;do t+=dM(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function vf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Vd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var z1=typeof WeakMap=="function"?WeakMap:Map;function _x(n,e,t){t=ar(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){cu||(cu=!0,Qd=i),Vd(n,e)},t}function vx(n,e,t){t=ar(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Vd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Vd(n,e),typeof i!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function Og(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new z1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=J1.bind(null,n,e,t),e.then(n,n))}function kg(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function zg(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ar(-1,1),e.tag=2,jr(t,e,1))),t.lanes|=1),n)}var B1=vr.ReactCurrentOwner,Tn=!1;function mn(n,e,t,i){e.child=n===null?qv(e,null,t,i):Ga(e,n.child,t,i)}function Bg(n,e,t,i,r){t=t.render;var s=e.ref;return La(e,r),i=Hp(n,e,t,i,s,r),t=Vp(),n!==null&&!Tn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,hr(n,e,r)):(vt&&t&&Rp(e),e.flags|=1,mn(n,e,i,r),e.child)}function Hg(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Qp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,xx(n,e,s,i,r)):(n=Lc(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:Jo,t(a,i)&&n.ref===e.ref)return hr(n,e,r)}return e.flags|=1,n=$r(s,i),n.ref=e.ref,n.return=e,e.child=n}function xx(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Jo(s,i)&&n.ref===e.ref)if(Tn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Tn=!0);else return e.lanes=n.lanes,hr(n,e,r)}return Gd(n,e,t,i,r)}function yx(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(Ta,kn),kn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,pt(Ta,kn),kn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,pt(Ta,kn),kn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,pt(Ta,kn),kn|=i;return mn(n,e,r,t),e.child}function Sx(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Gd(n,e,t,i,r){var s=An(t)?Os:hn.current;return s=Ha(e,s),La(e,r),t=Hp(n,e,t,i,s,r),i=Vp(),n!==null&&!Tn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,hr(n,e,r)):(vt&&i&&Rp(e),e.flags|=1,mn(n,e,t,r),e.child)}function Vg(n,e,t,i,r){if(An(t)){var s=!0;Jc(e)}else s=!1;if(La(e,r),e.stateNode===null)Rc(n,e),gx(e,t,i),Hd(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=li(c):(c=An(t)?Os:hn.current,c=Ha(e,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Fg(e,a,i,c),Pr=!1;var f=e.memoizedState;a.state=f,ru(e,i,a,r),l=e.memoizedState,o!==i||f!==l||wn.current||Pr?(typeof u=="function"&&(Bd(e,t,u,i),l=e.memoizedState),(o=Pr||Ug(e,t,o,i,f,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,$v(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:mi(e.type,o),a.props=c,h=e.pendingProps,f=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=li(l):(l=An(t)?Os:hn.current,l=Ha(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&Fg(e,a,i,l),Pr=!1,f=e.memoizedState,a.state=f,ru(e,i,a,r);var m=e.memoizedState;o!==h||f!==m||wn.current||Pr?(typeof p=="function"&&(Bd(e,t,p,i),m=e.memoizedState),(c=Pr||Ug(e,t,c,i,f,m,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,m,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,m,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),a.props=i,a.state=m,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Wd(n,e,t,i,s,r)}function Wd(n,e,t,i,r,s){Sx(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Cg(e,t,!1),hr(n,e,s);i=e.stateNode,B1.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=Ga(e,n.child,null,s),e.child=Ga(e,null,o,s)):mn(n,e,o,s),e.memoizedState=i.state,r&&Cg(e,t,!0),e.child}function Mx(n){var e=n.stateNode;e.pendingContext?Ag(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Ag(n,e.context,!1),Op(n,e.containerInfo)}function Gg(n,e,t,i,r){return Va(),Dp(r),e.flags|=256,mn(n,e,t,i),e.child}var Xd={dehydrated:null,treeContext:null,retryLane:0};function jd(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ex(n,e,t){var i=e.pendingProps,r=St.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),pt(St,r&1),n===null)return kd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Iu(a,i,0,null),n=Ls(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=jd(t),e.memoizedState=Xd,n):Xp(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return H1(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=$r(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=$r(o,s):(s=Ls(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?jd(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=Xd,i}return s=n.child,n=s.sibling,i=$r(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Xp(n,e){return e=Iu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Xl(n,e,t,i){return i!==null&&Dp(i),Ga(e,n.child,null,t),n=Xp(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function H1(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=vf(Error(ne(422))),Xl(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Iu({mode:"visible",children:i.children},r,0,null),s=Ls(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ga(e,n.child,null,a),e.child.memoizedState=jd(a),e.memoizedState=Xd,s);if(!(e.mode&1))return Xl(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=vf(s,i,void 0),Xl(n,e,a,i)}if(o=(a&n.childLanes)!==0,Tn||o){if(i=Yt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,dr(n,r),Mi(i,n,r,-1))}return Zp(),i=vf(Error(ne(421))),Xl(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=eE.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Vn=Xr(r.nextSibling),Xn=e,vt=!0,_i=null,n!==null&&(ti[ni++]=ir,ti[ni++]=rr,ti[ni++]=ks,ir=n.id,rr=n.overflow,ks=e),e=Xp(e,i.children),e.flags|=4096,e)}function Wg(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),zd(n.return,e,t)}function xf(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Tx(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(mn(n,e,i.children,t),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Wg(n,t,e);else if(n.tag===19)Wg(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(pt(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&su(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),xf(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&su(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}xf(e,!0,t,null,s);break;case"together":xf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function hr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Bs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ne(153));if(e.child!==null){for(n=e.child,t=$r(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=$r(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function V1(n,e,t){switch(e.tag){case 3:Mx(e),Va();break;case 5:Kv(e);break;case 1:An(e.type)&&Jc(e);break;case 4:Op(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;pt(nu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(pt(St,St.current&1),e.flags|=128,null):t&e.child.childLanes?Ex(n,e,t):(pt(St,St.current&1),n=hr(n,e,t),n!==null?n.sibling:null);pt(St,St.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Tx(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,yx(n,e,t)}return hr(n,e,t)}var wx,qd,Ax,Cx;wx=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};qd=function(){};Ax=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Cs(Oi.current);var s=null;switch(t){case"input":r=md(n,r),i=md(n,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=vd(n,r),i=vd(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Zc)}yd(t,i);var a;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(jo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(jo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",n),s||o===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Cx=function(n,e,t,i){t!==i&&(e.flags|=4)};function go(n,e){if(!vt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function an(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function G1(n,e,t){var i=e.pendingProps;switch(Pp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(e),null;case 1:return An(e.type)&&Qc(),an(e),null;case 3:return i=e.stateNode,Wa(),gt(wn),gt(hn),zp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Gl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,_i!==null&&(th(_i),_i=null))),qd(n,e),an(e),null;case 5:kp(e);var r=Cs(rl.current);if(t=e.type,n!==null&&e.stateNode!=null)Ax(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return an(e),null}if(n=Cs(Oi.current),Gl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Di]=e,i[nl]=s,n=(e.mode&1)!==0,t){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<Ro.length;r++)mt(Ro[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":Jm(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":tg(i,s),mt("invalid",i)}yd(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Vl(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Vl(i.textContent,o,n),r=["children",""+o]):jo.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&mt("scroll",i)}switch(t){case"input":Il(i),eg(i,s,!0);break;case"textarea":Il(i),ng(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Zc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=tv(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[Di]=e,n[nl]=i,wx(n,e,!1,!1),e.stateNode=n;e:{switch(a=Sd(t,i),t){case"dialog":mt("cancel",n),mt("close",n),r=i;break;case"iframe":case"object":case"embed":mt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ro.length;r++)mt(Ro[r],n);r=i;break;case"source":mt("error",n),r=i;break;case"img":case"image":case"link":mt("error",n),mt("load",n),r=i;break;case"details":mt("toggle",n),r=i;break;case"input":Jm(n,i),r=md(n,i),mt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),mt("invalid",n);break;case"textarea":tg(n,i),r=vd(n,i),mt("invalid",n);break;default:r=i}yd(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?rv(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&nv(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&qo(n,l):typeof l=="number"&&qo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(jo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",n):l!=null&&mp(n,s,l,a))}switch(t){case"input":Il(n),eg(n,i,!1);break;case"textarea":Il(n),ng(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Qr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ba(n,!!i.multiple,s,!1):i.defaultValue!=null&&ba(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Zc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return an(e),null;case 6:if(n&&e.stateNode!=null)Cx(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=Cs(rl.current),Cs(Oi.current),Gl(e)){if(i=e.stateNode,t=e.memoizedProps,i[Di]=e,(s=i.nodeValue!==t)&&(n=Xn,n!==null))switch(n.tag){case 3:Vl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Vl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Di]=e,e.stateNode=i}return an(e),null;case 13:if(gt(St),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(vt&&Vn!==null&&e.mode&1&&!(e.flags&128))Xv(),Va(),e.flags|=98560,s=!1;else if(s=Gl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Di]=e}else Va(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;an(e),s=!1}else _i!==null&&(th(_i),_i=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||St.current&1?Bt===0&&(Bt=3):Zp())),e.updateQueue!==null&&(e.flags|=4),an(e),null);case 4:return Wa(),qd(n,e),n===null&&el(e.stateNode.containerInfo),an(e),null;case 10:return Ip(e.type._context),an(e),null;case 17:return An(e.type)&&Qc(),an(e),null;case 19:if(gt(St),s=e.memoizedState,s===null)return an(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)go(s,!1);else{if(Bt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=su(n),a!==null){for(e.flags|=128,go(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return pt(St,St.current&1|2),e.child}n=n.sibling}s.tail!==null&&Nt()>ja&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304)}else{if(!i)if(n=su(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!vt)return an(e),null}else 2*Nt()-s.renderingStartTime>ja&&t!==1073741824&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,t=St.current,pt(St,i?t&1|2:t&1),e):(an(e),null);case 22:case 23:return Kp(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?kn&1073741824&&(an(e),e.subtreeFlags&6&&(e.flags|=8192)):an(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function W1(n,e){switch(Pp(e),e.tag){case 1:return An(e.type)&&Qc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Wa(),gt(wn),gt(hn),zp(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return kp(e),null;case 13:if(gt(St),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Va()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return gt(St),null;case 4:return Wa(),null;case 10:return Ip(e.type._context),null;case 22:case 23:return Kp(),null;case 24:return null;default:return null}}var jl=!1,cn=!1,X1=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Ea(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ct(n,e,i)}else t.current=null}function Yd(n,e,t){try{t()}catch(i){Ct(n,e,i)}}var Xg=!1;function j1(n,e){if(Dd=Yc,n=Lv(),bp(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,c=0,u=0,h=n,f=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===n)break t;if(f===t&&++c===r&&(o=a),f===s&&++u===i&&(l=a),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ld={focusedElem:n,selectionRange:t},Yc=!1,ge=e;ge!==null;)if(e=ge,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ge=n;else for(;ge!==null;){e=ge;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,_=m.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?v:mi(e.type,v),_);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){Ct(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}return m=Xg,Xg=!1,m}function Bo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Yd(e,t,s)}r=r.next}while(r!==i)}}function Lu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function $d(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function bx(n){var e=n.alternate;e!==null&&(n.alternate=null,bx(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Di],delete e[nl],delete e[Ud],delete e[b1],delete e[R1])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Rx(n){return n.tag===5||n.tag===3||n.tag===4}function jg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Rx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Kd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Zc));else if(i!==4&&(n=n.child,n!==null))for(Kd(n,e,t),n=n.sibling;n!==null;)Kd(n,e,t),n=n.sibling}function Zd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Zd(n,e,t),n=n.sibling;n!==null;)Zd(n,e,t),n=n.sibling}var Zt=null,gi=!1;function Mr(n,e,t){for(t=t.child;t!==null;)Px(n,e,t),t=t.sibling}function Px(n,e,t){if(Fi&&typeof Fi.onCommitFiberUnmount=="function")try{Fi.onCommitFiberUnmount(Tu,t)}catch{}switch(t.tag){case 5:cn||Ea(t,e);case 6:var i=Zt,r=gi;Zt=null,Mr(n,e,t),Zt=i,gi=r,Zt!==null&&(gi?(n=Zt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Zt.removeChild(t.stateNode));break;case 18:Zt!==null&&(gi?(n=Zt,t=t.stateNode,n.nodeType===8?df(n.parentNode,t):n.nodeType===1&&df(n,t),Zo(n)):df(Zt,t.stateNode));break;case 4:i=Zt,r=gi,Zt=t.stateNode.containerInfo,gi=!0,Mr(n,e,t),Zt=i,gi=r;break;case 0:case 11:case 14:case 15:if(!cn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Yd(t,e,a),r=r.next}while(r!==i)}Mr(n,e,t);break;case 1:if(!cn&&(Ea(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){Ct(t,e,o)}Mr(n,e,t);break;case 21:Mr(n,e,t);break;case 22:t.mode&1?(cn=(i=cn)||t.memoizedState!==null,Mr(n,e,t),cn=i):Mr(n,e,t);break;default:Mr(n,e,t)}}function qg(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new X1),e.forEach(function(i){var r=tE.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function fi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Zt=o.stateNode,gi=!1;break e;case 3:Zt=o.stateNode.containerInfo,gi=!0;break e;case 4:Zt=o.stateNode.containerInfo,gi=!0;break e}o=o.return}if(Zt===null)throw Error(ne(160));Px(s,a,r),Zt=null,gi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Dx(e,n),e=e.sibling}function Dx(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(fi(e,n),wi(n),i&4){try{Bo(3,n,n.return),Lu(3,n)}catch(v){Ct(n,n.return,v)}try{Bo(5,n,n.return)}catch(v){Ct(n,n.return,v)}}break;case 1:fi(e,n),wi(n),i&512&&t!==null&&Ea(t,t.return);break;case 5:if(fi(e,n),wi(n),i&512&&t!==null&&Ea(t,t.return),n.flags&32){var r=n.stateNode;try{qo(r,"")}catch(v){Ct(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&J_(r,s),Sd(o,a);var c=Sd(o,s);for(a=0;a<l.length;a+=2){var u=l[a],h=l[a+1];u==="style"?rv(r,h):u==="dangerouslySetInnerHTML"?nv(r,h):u==="children"?qo(r,h):mp(r,u,h,c)}switch(o){case"input":gd(r,s);break;case"textarea":ev(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ba(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ba(r,!!s.multiple,s.defaultValue,!0):ba(r,!!s.multiple,s.multiple?[]:"",!1))}r[nl]=s}catch(v){Ct(n,n.return,v)}}break;case 6:if(fi(e,n),wi(n),i&4){if(n.stateNode===null)throw Error(ne(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){Ct(n,n.return,v)}}break;case 3:if(fi(e,n),wi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Zo(e.containerInfo)}catch(v){Ct(n,n.return,v)}break;case 4:fi(e,n),wi(n);break;case 13:fi(e,n),wi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Yp=Nt())),i&4&&qg(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(cn=(c=cn)||u,fi(e,n),cn=c):fi(e,n),wi(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(ge=n,u=n.child;u!==null;){for(h=ge=u;ge!==null;){switch(f=ge,p=f.child,f.tag){case 0:case 11:case 14:case 15:Bo(4,f,f.return);break;case 1:Ea(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){Ct(i,t,v)}}break;case 5:Ea(f,f.return);break;case 22:if(f.memoizedState!==null){$g(h);continue}}p!==null?(p.return=f,ge=p):$g(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=iv("display",a))}catch(v){Ct(n,n.return,v)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){Ct(n,n.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:fi(e,n),wi(n),i&4&&qg(n);break;case 21:break;default:fi(e,n),wi(n)}}function wi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Rx(t)){var i=t;break e}t=t.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(qo(r,""),i.flags&=-33);var s=jg(n);Zd(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=jg(n);Kd(n,o,a);break;default:throw Error(ne(161))}}catch(l){Ct(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function q1(n,e,t){ge=n,Lx(n)}function Lx(n,e,t){for(var i=(n.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||jl;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||cn;o=jl;var c=cn;if(jl=a,(cn=l)&&!c)for(ge=r;ge!==null;)a=ge,l=a.child,a.tag===22&&a.memoizedState!==null?Kg(r):l!==null?(l.return=a,ge=l):Kg(r);for(;s!==null;)ge=s,Lx(s),s=s.sibling;ge=r,jl=o,cn=c}Yg(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):Yg(n)}}function Yg(n){for(;ge!==null;){var e=ge;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:cn||Lu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!cn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:mi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Lg(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Lg(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Zo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}cn||e.flags&512&&$d(e)}catch(f){Ct(e,e.return,f)}}if(e===n){ge=null;break}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}}function $g(n){for(;ge!==null;){var e=ge;if(e===n){ge=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ge=t;break}ge=e.return}}function Kg(n){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Lu(4,e)}catch(l){Ct(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{$d(e)}catch(l){Ct(e,s,l)}break;case 5:var a=e.return;try{$d(e)}catch(l){Ct(e,a,l)}}}catch(l){Ct(e,e.return,l)}if(e===n){ge=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ge=o;break}ge=e.return}}var Y1=Math.ceil,lu=vr.ReactCurrentDispatcher,jp=vr.ReactCurrentOwner,ai=vr.ReactCurrentBatchConfig,Ke=0,Yt=null,Ot=null,Jt=0,kn=0,Ta=as(0),Bt=0,ll=null,Bs=0,Nu=0,qp=0,Ho=null,En=null,Yp=0,ja=1/0,Qi=null,cu=!1,Qd=null,qr=null,ql=!1,Fr=null,uu=0,Vo=0,Jd=null,Pc=-1,Dc=0;function _n(){return Ke&6?Nt():Pc!==-1?Pc:Pc=Nt()}function Yr(n){return n.mode&1?Ke&2&&Jt!==0?Jt&-Jt:D1.transition!==null?(Dc===0&&(Dc=gv()),Dc):(n=rt,n!==0||(n=window.event,n=n===void 0?16:Ev(n.type)),n):1}function Mi(n,e,t,i){if(50<Vo)throw Vo=0,Jd=null,Error(ne(185));Sl(n,t,i),(!(Ke&2)||n!==Yt)&&(n===Yt&&(!(Ke&2)&&(Nu|=t),Bt===4&&Nr(n,Jt)),Cn(n,i),t===1&&Ke===0&&!(e.mode&1)&&(ja=Nt()+500,Ru&&os()))}function Cn(n,e){var t=n.callbackNode;DM(n,e);var i=qc(n,n===Yt?Jt:0);if(i===0)t!==null&&sg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&sg(t),e===1)n.tag===0?P1(Zg.bind(null,n)):Vv(Zg.bind(null,n)),A1(function(){!(Ke&6)&&os()}),t=null;else{switch(_v(i)){case 1:t=yp;break;case 4:t=pv;break;case 16:t=jc;break;case 536870912:t=mv;break;default:t=jc}t=Bx(t,Nx.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Nx(n,e){if(Pc=-1,Dc=0,Ke&6)throw Error(ne(327));var t=n.callbackNode;if(Na()&&n.callbackNode!==t)return null;var i=qc(n,n===Yt?Jt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=fu(n,i);else{e=i;var r=Ke;Ke|=2;var s=Ux();(Yt!==n||Jt!==e)&&(Qi=null,ja=Nt()+500,Ds(n,e));do try{Z1();break}catch(o){Ix(n,o)}while(!0);Np(),lu.current=s,Ke=r,Ot!==null?e=0:(Yt=null,Jt=0,e=Bt)}if(e!==0){if(e===2&&(r=Ad(n),r!==0&&(i=r,e=eh(n,r))),e===1)throw t=ll,Ds(n,0),Nr(n,i),Cn(n,Nt()),t;if(e===6)Nr(n,i);else{if(r=n.current.alternate,!(i&30)&&!$1(r)&&(e=fu(n,i),e===2&&(s=Ad(n),s!==0&&(i=s,e=eh(n,s))),e===1))throw t=ll,Ds(n,0),Nr(n,i),Cn(n,Nt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:ys(n,En,Qi);break;case 3:if(Nr(n,i),(i&130023424)===i&&(e=Yp+500-Nt(),10<e)){if(qc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){_n(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Id(ys.bind(null,n,En,Qi),e);break}ys(n,En,Qi);break;case 4:if(Nr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-Si(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Y1(i/1960))-i,10<i){n.timeoutHandle=Id(ys.bind(null,n,En,Qi),i);break}ys(n,En,Qi);break;case 5:ys(n,En,Qi);break;default:throw Error(ne(329))}}}return Cn(n,Nt()),n.callbackNode===t?Nx.bind(null,n):null}function eh(n,e){var t=Ho;return n.current.memoizedState.isDehydrated&&(Ds(n,e).flags|=256),n=fu(n,e),n!==2&&(e=En,En=t,e!==null&&th(e)),n}function th(n){En===null?En=n:En.push.apply(En,n)}function $1(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Ei(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Nr(n,e){for(e&=~qp,e&=~Nu,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Si(e),i=1<<t;n[t]=-1,e&=~i}}function Zg(n){if(Ke&6)throw Error(ne(327));Na();var e=qc(n,0);if(!(e&1))return Cn(n,Nt()),null;var t=fu(n,e);if(n.tag!==0&&t===2){var i=Ad(n);i!==0&&(e=i,t=eh(n,i))}if(t===1)throw t=ll,Ds(n,0),Nr(n,e),Cn(n,Nt()),t;if(t===6)throw Error(ne(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,ys(n,En,Qi),Cn(n,Nt()),null}function $p(n,e){var t=Ke;Ke|=1;try{return n(e)}finally{Ke=t,Ke===0&&(ja=Nt()+500,Ru&&os())}}function Hs(n){Fr!==null&&Fr.tag===0&&!(Ke&6)&&Na();var e=Ke;Ke|=1;var t=ai.transition,i=rt;try{if(ai.transition=null,rt=1,n)return n()}finally{rt=i,ai.transition=t,Ke=e,!(Ke&6)&&os()}}function Kp(){kn=Ta.current,gt(Ta)}function Ds(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,w1(t)),Ot!==null)for(t=Ot.return;t!==null;){var i=t;switch(Pp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Qc();break;case 3:Wa(),gt(wn),gt(hn),zp();break;case 5:kp(i);break;case 4:Wa();break;case 13:gt(St);break;case 19:gt(St);break;case 10:Ip(i.type._context);break;case 22:case 23:Kp()}t=t.return}if(Yt=n,Ot=n=$r(n.current,null),Jt=kn=e,Bt=0,ll=null,qp=Nu=Bs=0,En=Ho=null,As!==null){for(e=0;e<As.length;e++)if(t=As[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}As=null}return n}function Ix(n,e){do{var t=Ot;try{if(Np(),Cc.current=ou,au){for(var i=Tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}au=!1}if(zs=0,qt=zt=Tt=null,zo=!1,sl=0,jp.current=null,t===null||t.return===null){Bt=1,ll=e,Ot=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=Jt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=kg(a);if(p!==null){p.flags&=-257,zg(p,a,o,s,e),p.mode&1&&Og(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var v=new Set;v.add(l),e.updateQueue=v}else m.add(l);break e}else{if(!(e&1)){Og(s,c,e),Zp();break e}l=Error(ne(426))}}else if(vt&&o.mode&1){var _=kg(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),zg(_,a,o,s,e),Dp(Xa(l,o));break e}}s=l=Xa(l,o),Bt!==4&&(Bt=2),Ho===null?Ho=[s]:Ho.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=_x(s,l,e);Dg(s,d);break e;case 1:o=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(qr===null||!qr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=vx(s,o,e);Dg(s,S);break e}}s=s.return}while(s!==null)}Ox(t)}catch(E){e=E,Ot===t&&t!==null&&(Ot=t=t.return);continue}break}while(!0)}function Ux(){var n=lu.current;return lu.current=ou,n===null?ou:n}function Zp(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),Yt===null||!(Bs&268435455)&&!(Nu&268435455)||Nr(Yt,Jt)}function fu(n,e){var t=Ke;Ke|=2;var i=Ux();(Yt!==n||Jt!==e)&&(Qi=null,Ds(n,e));do try{K1();break}catch(r){Ix(n,r)}while(!0);if(Np(),Ke=t,lu.current=i,Ot!==null)throw Error(ne(261));return Yt=null,Jt=0,Bt}function K1(){for(;Ot!==null;)Fx(Ot)}function Z1(){for(;Ot!==null&&!MM();)Fx(Ot)}function Fx(n){var e=zx(n.alternate,n,kn);n.memoizedProps=n.pendingProps,e===null?Ox(n):Ot=e,jp.current=null}function Ox(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=W1(t,e),t!==null){t.flags&=32767,Ot=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Bt=6,Ot=null;return}}else if(t=G1(t,e,kn),t!==null){Ot=t;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=n}while(e!==null);Bt===0&&(Bt=5)}function ys(n,e,t){var i=rt,r=ai.transition;try{ai.transition=null,rt=1,Q1(n,e,t,i)}finally{ai.transition=r,rt=i}return null}function Q1(n,e,t,i){do Na();while(Fr!==null);if(Ke&6)throw Error(ne(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ne(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(LM(n,s),n===Yt&&(Ot=Yt=null,Jt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ql||(ql=!0,Bx(jc,function(){return Na(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ai.transition,ai.transition=null;var a=rt;rt=1;var o=Ke;Ke|=4,jp.current=null,j1(n,t),Dx(t,n),v1(Ld),Yc=!!Dd,Ld=Dd=null,n.current=t,q1(t),EM(),Ke=o,rt=a,ai.transition=s}else n.current=t;if(ql&&(ql=!1,Fr=n,uu=r),s=n.pendingLanes,s===0&&(qr=null),AM(t.stateNode),Cn(n,Nt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(cu)throw cu=!1,n=Qd,Qd=null,n;return uu&1&&n.tag!==0&&Na(),s=n.pendingLanes,s&1?n===Jd?Vo++:(Vo=0,Jd=n):Vo=0,os(),null}function Na(){if(Fr!==null){var n=_v(uu),e=ai.transition,t=rt;try{if(ai.transition=null,rt=16>n?16:n,Fr===null)var i=!1;else{if(n=Fr,Fr=null,uu=0,Ke&6)throw Error(ne(331));var r=Ke;for(Ke|=4,ge=n.current;ge!==null;){var s=ge,a=s.child;if(ge.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ge=c;ge!==null;){var u=ge;switch(u.tag){case 0:case 11:case 15:Bo(8,u,s)}var h=u.child;if(h!==null)h.return=u,ge=h;else for(;ge!==null;){u=ge;var f=u.sibling,p=u.return;if(bx(u),u===c){ge=null;break}if(f!==null){f.return=p,ge=f;break}ge=p}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}ge=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ge=a;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ge=d;break e}ge=s.return}}var g=n.current;for(ge=g;ge!==null;){a=ge;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,ge=x;else e:for(a=g;ge!==null;){if(o=ge,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Lu(9,o)}}catch(E){Ct(o,o.return,E)}if(o===a){ge=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,ge=S;break e}ge=o.return}}if(Ke=r,os(),Fi&&typeof Fi.onPostCommitFiberRoot=="function")try{Fi.onPostCommitFiberRoot(Tu,n)}catch{}i=!0}return i}finally{rt=t,ai.transition=e}}return!1}function Qg(n,e,t){e=Xa(t,e),e=_x(n,e,1),n=jr(n,e,1),e=_n(),n!==null&&(Sl(n,1,e),Cn(n,e))}function Ct(n,e,t){if(n.tag===3)Qg(n,n,t);else for(;e!==null;){if(e.tag===3){Qg(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qr===null||!qr.has(i))){n=Xa(t,n),n=vx(e,n,1),e=jr(e,n,1),n=_n(),e!==null&&(Sl(e,1,n),Cn(e,n));break}}e=e.return}}function J1(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=_n(),n.pingedLanes|=n.suspendedLanes&t,Yt===n&&(Jt&t)===t&&(Bt===4||Bt===3&&(Jt&130023424)===Jt&&500>Nt()-Yp?Ds(n,0):qp|=t),Cn(n,e)}function kx(n,e){e===0&&(n.mode&1?(e=Ol,Ol<<=1,!(Ol&130023424)&&(Ol=4194304)):e=1);var t=_n();n=dr(n,e),n!==null&&(Sl(n,e,t),Cn(n,t))}function eE(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),kx(n,t)}function tE(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),kx(n,t)}var zx;zx=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||wn.current)Tn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Tn=!1,V1(n,e,t);Tn=!!(n.flags&131072)}else Tn=!1,vt&&e.flags&1048576&&Gv(e,tu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Rc(n,e),n=e.pendingProps;var r=Ha(e,hn.current);La(e,t),r=Hp(null,e,i,n,r,t);var s=Vp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,An(i)?(s=!0,Jc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Fp(e),r.updater=Du,e.stateNode=r,r._reactInternals=e,Hd(e,i,n,t),e=Wd(null,e,i,!0,s,t)):(e.tag=0,vt&&s&&Rp(e),mn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Rc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=iE(i),n=mi(i,n),r){case 0:e=Gd(null,e,i,n,t);break e;case 1:e=Vg(null,e,i,n,t);break e;case 11:e=Bg(null,e,i,n,t);break e;case 14:e=Hg(null,e,i,mi(i.type,n),t);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),Gd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),Vg(n,e,i,r,t);case 3:e:{if(Mx(e),n===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,$v(n,e),ru(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Xa(Error(ne(423)),e),e=Gg(n,e,i,t,r);break e}else if(i!==r){r=Xa(Error(ne(424)),e),e=Gg(n,e,i,t,r);break e}else for(Vn=Xr(e.stateNode.containerInfo.firstChild),Xn=e,vt=!0,_i=null,t=qv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Va(),i===r){e=hr(n,e,t);break e}mn(n,e,i,t)}e=e.child}return e;case 5:return Kv(e),n===null&&kd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,Nd(i,r)?a=null:s!==null&&Nd(i,s)&&(e.flags|=32),Sx(n,e),mn(n,e,a,t),e.child;case 6:return n===null&&kd(e),null;case 13:return Ex(n,e,t);case 4:return Op(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ga(e,null,i,t):mn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),Bg(n,e,i,r,t);case 7:return mn(n,e,e.pendingProps,t),e.child;case 8:return mn(n,e,e.pendingProps.children,t),e.child;case 12:return mn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,pt(nu,i._currentValue),i._currentValue=a,s!==null)if(Ei(s.value,a)){if(s.children===r.children&&!wn.current){e=hr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ar(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),zd(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),zd(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}mn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,La(e,t),r=li(r),i=i(r),e.flags|=1,mn(n,e,i,t),e.child;case 14:return i=e.type,r=mi(i,e.pendingProps),r=mi(i.type,r),Hg(n,e,i,r,t);case 15:return xx(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),Rc(n,e),e.tag=1,An(i)?(n=!0,Jc(e)):n=!1,La(e,t),gx(e,i,r),Hd(e,i,r,t),Wd(null,e,i,!0,n,t);case 19:return Tx(n,e,t);case 22:return yx(n,e,t)}throw Error(ne(156,e.tag))};function Bx(n,e){return hv(n,e)}function nE(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(n,e,t,i){return new nE(n,e,t,i)}function Qp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function iE(n){if(typeof n=="function")return Qp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===_p)return 11;if(n===vp)return 14}return 2}function $r(n,e){var t=n.alternate;return t===null?(t=ii(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Lc(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")Qp(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case pa:return Ls(t.children,r,s,e);case gp:a=8,r|=8;break;case fd:return n=ii(12,t,e,r|2),n.elementType=fd,n.lanes=s,n;case dd:return n=ii(13,t,e,r),n.elementType=dd,n.lanes=s,n;case hd:return n=ii(19,t,e,r),n.elementType=hd,n.lanes=s,n;case K_:return Iu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Y_:a=10;break e;case $_:a=9;break e;case _p:a=11;break e;case vp:a=14;break e;case Rr:a=16,i=null;break e}throw Error(ne(130,n==null?n:typeof n,""))}return e=ii(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Ls(n,e,t,i){return n=ii(7,n,i,e),n.lanes=t,n}function Iu(n,e,t,i){return n=ii(22,n,i,e),n.elementType=K_,n.lanes=t,n.stateNode={isHidden:!1},n}function yf(n,e,t){return n=ii(6,n,null,e),n.lanes=t,n}function Sf(n,e,t){return e=ii(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function rE(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ef(0),this.expirationTimes=ef(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ef(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Jp(n,e,t,i,r,s,a,o,l){return n=new rE(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ii(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fp(s),n}function sE(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ha,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Hx(n){if(!n)return Jr;n=n._reactInternals;e:{if(Xs(n)!==n||n.tag!==1)throw Error(ne(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(An(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(n.tag===1){var t=n.type;if(An(t))return Hv(n,t,e)}return e}function Vx(n,e,t,i,r,s,a,o,l){return n=Jp(t,i,!0,n,r,s,a,o,l),n.context=Hx(null),t=n.current,i=_n(),r=Yr(t),s=ar(i,r),s.callback=e??null,jr(t,s,r),n.current.lanes=r,Sl(n,r,i),Cn(n,i),n}function Uu(n,e,t,i){var r=e.current,s=_n(),a=Yr(r);return t=Hx(t),e.context===null?e.context=t:e.pendingContext=t,e=ar(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=jr(r,e,a),n!==null&&(Mi(n,r,a,s),Ac(n,r,a)),a}function du(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Jg(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function em(n,e){Jg(n,e),(n=n.alternate)&&Jg(n,e)}function aE(){return null}var Gx=typeof reportError=="function"?reportError:function(n){console.error(n)};function tm(n){this._internalRoot=n}Fu.prototype.render=tm.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ne(409));Uu(n,e,null,null)};Fu.prototype.unmount=tm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Hs(function(){Uu(null,n,null,null)}),e[fr]=null}};function Fu(n){this._internalRoot=n}Fu.prototype.unstable_scheduleHydration=function(n){if(n){var e=yv();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Lr.length&&e!==0&&e<Lr[t].priority;t++);Lr.splice(t,0,n),t===0&&Mv(n)}};function nm(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ou(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function e0(){}function oE(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=du(a);s.call(c)}}var a=Vx(e,i,n,0,null,!1,!1,"",e0);return n._reactRootContainer=a,n[fr]=a.current,el(n.nodeType===8?n.parentNode:n),Hs(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=du(l);o.call(c)}}var l=Jp(n,0,!1,null,null,!1,!1,"",e0);return n._reactRootContainer=l,n[fr]=l.current,el(n.nodeType===8?n.parentNode:n),Hs(function(){Uu(e,l,t,i)}),l}function ku(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=du(a);o.call(l)}}Uu(e,a,n,r)}else a=oE(t,e,n,r,i);return du(a)}vv=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=bo(e.pendingLanes);t!==0&&(Sp(e,t|1),Cn(e,Nt()),!(Ke&6)&&(ja=Nt()+500,os()))}break;case 13:Hs(function(){var i=dr(n,1);if(i!==null){var r=_n();Mi(i,n,1,r)}}),em(n,1)}};Mp=function(n){if(n.tag===13){var e=dr(n,134217728);if(e!==null){var t=_n();Mi(e,n,134217728,t)}em(n,134217728)}};xv=function(n){if(n.tag===13){var e=Yr(n),t=dr(n,e);if(t!==null){var i=_n();Mi(t,n,e,i)}em(n,e)}};yv=function(){return rt};Sv=function(n,e){var t=rt;try{return rt=n,e()}finally{rt=t}};Ed=function(n,e,t){switch(e){case"input":if(gd(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=bu(i);if(!r)throw Error(ne(90));Q_(i),gd(i,r)}}}break;case"textarea":ev(n,t);break;case"select":e=t.value,e!=null&&ba(n,!!t.multiple,e,!1)}};ov=$p;lv=Hs;var lE={usingClientEntryPoint:!1,Events:[El,va,bu,sv,av,$p]},_o={findFiberByHostInstance:ws,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cE={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=fv(n),n===null?null:n.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||aE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{Tu=Yl.inject(cE),Fi=Yl}catch{}}Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lE;Kn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nm(e))throw Error(ne(200));return sE(n,e,null,t)};Kn.createRoot=function(n,e){if(!nm(n))throw Error(ne(299));var t=!1,i="",r=Gx;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Jp(n,1,!1,null,null,t,!1,i,r),n[fr]=e.current,el(n.nodeType===8?n.parentNode:n),new tm(e)};Kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ne(188)):(n=Object.keys(n).join(","),Error(ne(268,n)));return n=fv(e),n=n===null?null:n.stateNode,n};Kn.flushSync=function(n){return Hs(n)};Kn.hydrate=function(n,e,t){if(!Ou(e))throw Error(ne(200));return ku(null,n,e,!0,t)};Kn.hydrateRoot=function(n,e,t){if(!nm(n))throw Error(ne(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=Gx;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=Vx(e,null,n,1,t??null,r,!1,s,a),n[fr]=e.current,el(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Fu(e)};Kn.render=function(n,e,t){if(!Ou(e))throw Error(ne(200));return ku(null,n,e,!1,t)};Kn.unmountComponentAtNode=function(n){if(!Ou(n))throw Error(ne(40));return n._reactRootContainer?(Hs(function(){ku(null,null,n,!1,function(){n._reactRootContainer=null,n[fr]=null})}),!0):!1};Kn.unstable_batchedUpdates=$p;Kn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Ou(t))throw Error(ne(200));if(n==null||n._reactInternals===void 0)throw Error(ne(38));return ku(n,e,t,!1,i)};Kn.version="18.3.1-next-f1338f8080-20240426";function Wx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wx)}catch(n){console.error(n)}}Wx(),W_.exports=Kn;var uE=W_.exports,Xx,t0=uE;Xx=t0.createRoot,t0.hydrateRoot;/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=n=>{const e=dE(n);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=Qe.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>Qe.createElement("svg",{ref:l,...hE,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:jx("lucide",r),...!s&&!pE(o)&&{"aria-hidden":"true"},...o},[...a.map(([c,u])=>Qe.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=(n,e)=>{const t=Qe.forwardRef(({className:i,...r},s)=>Qe.createElement(mE,{ref:s,iconNode:e,className:jx(`lucide-${fE(n0(n))}`,`lucide-${n}`,i),...r}));return t.displayName=n0(n),t};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],_E=In("activity",gE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],qx=In("check",vE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],yE=In("chevron-down",xE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],ME=In("circle-plus",SE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],TE=In("coffee",EE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],AE=In("footprints",wE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],bE=In("pencil",CE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],PE=In("puzzle",RE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]],LE=In("shirt",DE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],IE=In("smartphone",NE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],FE=In("sparkles",UE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],kE=In("triangle-alert",OE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],BE=In("upload",zE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Yx=In("x",HE);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const im="183",Ia={ROTATE:0,DOLLY:1,PAN:2},wa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},VE=0,i0=1,GE=2,Nc=1,WE=2,Po=3,es=0,bn=1,nr=2,or=0,Ua=1,r0=2,s0=3,a0=4,XE=5,Es=100,jE=101,qE=102,YE=103,$E=104,KE=200,ZE=201,QE=202,JE=203,nh=204,ih=205,eT=206,tT=207,nT=208,iT=209,rT=210,sT=211,aT=212,oT=213,lT=214,rh=0,sh=1,ah=2,qa=3,oh=4,lh=5,ch=6,uh=7,$x=0,cT=1,uT=2,ki=0,Kx=1,Zx=2,Qx=3,Jx=4,ey=5,ty=6,ny=7,iy=300,Vs=301,Ya=302,Mf=303,Ef=304,zu=306,fh=1e3,sr=1001,dh=1002,Qt=1003,fT=1004,$l=1005,fn=1006,Tf=1007,bs=1008,Bn=1009,ry=1010,sy=1011,cl=1012,rm=1013,Hi=1014,Ni=1015,pr=1016,sm=1017,am=1018,ul=1020,ay=35902,oy=35899,ly=1021,cy=1022,yi=1023,mr=1026,Rs=1027,uy=1028,om=1029,$a=1030,lm=1031,cm=1033,Ic=33776,Uc=33777,Fc=33778,Oc=33779,hh=35840,ph=35841,mh=35842,gh=35843,_h=36196,vh=37492,xh=37496,yh=37488,Sh=37489,Mh=37490,Eh=37491,Th=37808,wh=37809,Ah=37810,Ch=37811,bh=37812,Rh=37813,Ph=37814,Dh=37815,Lh=37816,Nh=37817,Ih=37818,Uh=37819,Fh=37820,Oh=37821,kh=36492,zh=36494,Bh=36495,Hh=36283,Vh=36284,Gh=36285,Wh=36286,dT=3200,fy=0,hT=1,Ir="",ei="srgb",Ka="srgb-linear",hu="linear",it="srgb",Zs=7680,o0=519,pT=512,mT=513,gT=514,um=515,_T=516,vT=517,fm=518,xT=519,l0=35044,c0="300 es",Ii=2e3,fl=2001;function yT(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ST(){const n=pu("canvas");return n.style.display="block",n}const u0={};function f0(...n){const e="THREE."+n.shift();console.log(e,...n)}function dy(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ne(...n){n=dy(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ye(...n){n=dy(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function mu(...n){const e=n.join(" ");e in u0||(u0[e]=!0,Ne(...n))}function MT(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const ET={[rh]:sh,[ah]:ch,[oh]:uh,[qa]:lh,[sh]:rh,[ch]:ah,[uh]:oh,[lh]:qa};class js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kc=Math.PI/180,Xh=180/Math.PI;function wl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function TT(n,e){return(n%e+e)%e}function wf(n,e,t){return(1-t)*n+t*e}function vo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const wT={DEG2RAD:kc};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ts{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[a+0],p=s[a+1],m=s[a+2],v=s[a+3];if(h!==v||l!==f||c!==p||u!==m){let _=l*f+c*p+u*m+h*v;_<0&&(f=-f,p=-p,m=-m,v=-v,_=-_);let d=1-o;if(_<.9995){const g=Math.acos(_),x=Math.sin(g);d=Math.sin(d*g)/x,o=Math.sin(o*g)/x,l=l*d+f*o,c=c*d+p*o,u=u*d+m*o,h=h*d+v*o}else{l=l*d+f*o,c=c*d+p*o,u=u*d+m*o,h=h*d+v*o;const g=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=g,c*=g,u*=g,h*=g}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],f=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+u*h+l*p-c*f,e[t+1]=l*m+u*f+c*h-o*p,e[t+2]=c*m+u*p+o*f-l*h,e[t+3]=u*m-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),f=l(i/2),p=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*m,this._y=c*p*h-f*u*m,this._z=c*u*m+f*p*h,this._w=c*u*h-f*p*m;break;case"YXZ":this._x=f*u*h+c*p*m,this._y=c*p*h-f*u*m,this._z=c*u*m-f*p*h,this._w=c*u*h+f*p*m;break;case"ZXY":this._x=f*u*h-c*p*m,this._y=c*p*h+f*u*m,this._z=c*u*m+f*p*h,this._w=c*u*h-f*p*m;break;case"ZYX":this._x=f*u*h-c*p*m,this._y=c*p*h+f*u*m,this._z=c*u*m-f*p*h,this._w=c*u*h+f*p*m;break;case"YZX":this._x=f*u*h+c*p*m,this._y=c*p*h+f*u*m,this._z=c*u*m-f*p*h,this._w=c*u*h-f*p*m;break;case"XZY":this._x=f*u*h-c*p*m,this._y=c*p*h-f*u*m,this._z=c*u*m+f*p*h,this._w=c*u*h+f*p*m;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(d0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(d0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Af.copy(this).projectOnVector(e),this.sub(Af)}reflect(e){return this.sub(Af.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Af=new V,d0=new ts;class ze{constructor(e,t,i,r,s,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],m=i[8],v=r[0],_=r[3],d=r[6],g=r[1],x=r[4],S=r[7],E=r[2],w=r[5],A=r[8];return s[0]=a*v+o*g+l*E,s[3]=a*_+o*x+l*w,s[6]=a*d+o*S+l*A,s[1]=c*v+u*g+h*E,s[4]=c*_+u*x+h*w,s[7]=c*d+u*S+h*A,s[2]=f*v+p*g+m*E,s[5]=f*_+p*x+m*w,s[8]=f*d+p*S+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,m=t*h+i*f+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cf.makeScale(e,t)),this}rotate(e){return this.premultiply(Cf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cf=new ze,h0=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),p0=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AT(){const n={enabled:!0,workingColorSpace:Ka,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===it&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(r.r=Fa(r.r),r.g=Fa(r.g),r.b=Fa(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ir?hu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return mu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return mu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ka]:{primaries:e,whitePoint:i,transfer:hu,toXYZ:h0,fromXYZ:p0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:i,transfer:it,toXYZ:h0,fromXYZ:p0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),n}const $e=AT();function lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qs;class CT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qs===void 0&&(Qs=pu("canvas")),Qs.width=e.width,Qs.height=e.height;const r=Qs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Qs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=lr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(lr(t[i]/255)*255):t[i]=lr(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bT=0;class dm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bT++}),this.uuid=wl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bf(r[a].image)):s.push(bf(r[a]))}else s=bf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function bf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?CT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let RT=0;const Rf=new V;class vn extends js{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,i=sr,r=sr,s=fn,a=bs,o=yi,l=Bn,c=vn.DEFAULT_ANISOTROPY,u=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RT++}),this.uuid=wl(),this.name="",this.source=new dm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rf).x}get height(){return this.source.getSize(Rf).y}get depth(){return this.source.getSize(Rf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fh:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fh:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=iy;vn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],m=l[9],v=l[2],_=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(m-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(m+_)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(p+1)/2,E=(d+1)/2,w=(u+f)/4,A=(h+v)/4,y=(m+_)/4;return x>S&&x>E?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=A/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=y/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=A/s,r=y/s),this.set(i,r,s,t),this}let g=Math.sqrt((_-m)*(_-m)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(_-m)/g,this.y=(h-v)/g,this.z=(f-u)/g,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PT extends js{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new vn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new dm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends PT{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hy extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class DT extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _t{constructor(e,t,i,r,s,a,o,l,c,u,h,f,p,m,v,_){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,f,p,m,v,_)}set(e,t,i,r,s,a,o,l,c,u,h,f,p,m,v,_){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=m,d[11]=v,d[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Js.setFromMatrixColumn(e,0).length(),s=1/Js.setFromMatrixColumn(e,1).length(),a=1/Js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*h,m=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+m*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,m=c*u,v=c*h;t[0]=f+v*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-m,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,m=c*u,v=c*h;t[0]=f-v*o,t[4]=-a*h,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,m=o*u,v=o*h;t[0]=l*u,t[4]=m*c-p,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*u,t[4]=v-f*h,t[8]=m*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+m,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=a*u,t[9]=p*h-m,t[2]=m*h-p,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LT,e,NT)}lookAt(e,t,i){const r=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Er.crossVectors(i,Fn),Er.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Er.crossVectors(i,Fn)),Er.normalize(),Kl.crossVectors(Fn,Er),r[0]=Er.x,r[4]=Kl.x,r[8]=Fn.x,r[1]=Er.y,r[5]=Kl.y,r[9]=Fn.y,r[2]=Er.z,r[6]=Kl.z,r[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],m=i[2],v=i[6],_=i[10],d=i[14],g=i[3],x=i[7],S=i[11],E=i[15],w=r[0],A=r[4],y=r[8],T=r[12],L=r[1],R=r[5],O=r[9],F=r[13],X=r[2],z=r[6],H=r[10],I=r[14],B=r[3],j=r[7],J=r[11],$=r[15];return s[0]=a*w+o*L+l*X+c*B,s[4]=a*A+o*R+l*z+c*j,s[8]=a*y+o*O+l*H+c*J,s[12]=a*T+o*F+l*I+c*$,s[1]=u*w+h*L+f*X+p*B,s[5]=u*A+h*R+f*z+p*j,s[9]=u*y+h*O+f*H+p*J,s[13]=u*T+h*F+f*I+p*$,s[2]=m*w+v*L+_*X+d*B,s[6]=m*A+v*R+_*z+d*j,s[10]=m*y+v*O+_*H+d*J,s[14]=m*T+v*F+_*I+d*$,s[3]=g*w+x*L+S*X+E*B,s[7]=g*A+x*R+S*z+E*j,s[11]=g*y+x*O+S*H+E*J,s[15]=g*T+x*F+S*I+E*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],m=e[3],v=e[7],_=e[11],d=e[15],g=l*p-c*f,x=o*p-c*h,S=o*f-l*h,E=a*p-c*u,w=a*f-l*u,A=a*h-o*u;return t*(v*g-_*x+d*S)-i*(m*g-_*E+d*w)+r*(m*x-v*E+d*A)-s*(m*S-v*w+_*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],m=e[12],v=e[13],_=e[14],d=e[15],g=t*o-i*a,x=t*l-r*a,S=t*c-s*a,E=i*l-r*o,w=i*c-s*o,A=r*c-s*l,y=u*v-h*m,T=u*_-f*m,L=u*d-p*m,R=h*_-f*v,O=h*d-p*v,F=f*d-p*_,X=g*F-x*O+S*R+E*L-w*T+A*y;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/X;return e[0]=(o*F-l*O+c*R)*z,e[1]=(r*O-i*F-s*R)*z,e[2]=(v*A-_*w+d*E)*z,e[3]=(f*w-h*A-p*E)*z,e[4]=(l*L-a*F-c*T)*z,e[5]=(t*F-r*L+s*T)*z,e[6]=(_*S-m*A-d*x)*z,e[7]=(u*A-f*S+p*x)*z,e[8]=(a*O-o*L+c*y)*z,e[9]=(i*L-t*O-s*y)*z,e[10]=(m*w-v*S+d*g)*z,e[11]=(h*S-u*w-p*g)*z,e[12]=(o*T-a*R-l*y)*z,e[13]=(t*R-i*T+r*y)*z,e[14]=(v*x-m*E-_*g)*z,e[15]=(u*E-h*x+f*g)*z,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,m=s*h,v=a*u,_=a*h,d=o*h,g=l*c,x=l*u,S=l*h,E=i.x,w=i.y,A=i.z;return r[0]=(1-(v+d))*E,r[1]=(p+S)*E,r[2]=(m-x)*E,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(f+d))*w,r[6]=(_+g)*w,r[7]=0,r[8]=(m+x)*A,r[9]=(_-g)*A,r[10]=(1-(f+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Js.set(r[0],r[1],r[2]).length();const o=Js.set(r[4],r[5],r[6]).length(),l=Js.set(r[8],r[9],r[10]).length();s<0&&(a=-a),di.copy(this);const c=1/a,u=1/o,h=1/l;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=h,di.elements[9]*=h,di.elements[10]*=h,t.setFromRotationMatrix(di),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=Ii,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let m,v;if(l)m=s/(a-s),v=a*s/(a-s);else if(o===Ii)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===fl)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Ii,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let m,v;if(l)m=1/(a-s),v=a/(a-s);else if(o===Ii)m=-2/(a-s),v=-(a+s)/(a-s);else if(o===fl)m=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Js=new V,di=new _t,LT=new V(0,0,0),NT=new V(1,1,1),Er=new V,Kl=new V,Fn=new V,m0=new _t,g0=new ts;class Vi{constructor(e=0,t=0,i=0,r=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return m0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(m0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return g0.setFromEuler(this),this.setFromQuaternion(g0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class hm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IT=0;const _0=new V,ea=new ts,qi=new _t,Zl=new V,xo=new V,UT=new V,FT=new ts,v0=new V(1,0,0),x0=new V(0,1,0),y0=new V(0,0,1),S0={type:"added"},OT={type:"removed"},ta={type:"childadded",child:null},Pf={type:"childremoved",child:null};class en extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=wl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new V,t=new Vi,i=new ts,r=new V(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new ze}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ea.setFromAxisAngle(e,t),this.quaternion.multiply(ea),this}rotateOnWorldAxis(e,t){return ea.setFromAxisAngle(e,t),this.quaternion.premultiply(ea),this}rotateX(e){return this.rotateOnAxis(v0,e)}rotateY(e){return this.rotateOnAxis(x0,e)}rotateZ(e){return this.rotateOnAxis(y0,e)}translateOnAxis(e,t){return _0.copy(e).applyQuaternion(this.quaternion),this.position.add(_0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(v0,e)}translateY(e){return this.translateOnAxis(x0,e)}translateZ(e){return this.translateOnAxis(y0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zl.copy(e):Zl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(xo,Zl,this.up):qi.lookAt(Zl,xo,this.up),this.quaternion.setFromRotationMatrix(qi),r&&(qi.extractRotation(r.matrixWorld),ea.setFromRotationMatrix(qi),this.quaternion.premultiply(ea.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(S0),ta.child=e,this.dispatchEvent(ta),ta.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(OT),Pf.child=e,this.dispatchEvent(Pf),Pf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(S0),ta.child=e,this.dispatchEvent(ta),ta.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,UT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,FT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}en.DEFAULT_UP=new V(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ql extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kT={type:"move"};class Df{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ql,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ql,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ql,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,i),d=this._getHandJoint(c,v);_!==null&&(d.matrix.fromArray(_.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=_.radius),d.visible=_!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ql;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const py={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function Lf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=TT(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Lf(a,s,e+1/3),this.g=Lf(a,s,e),this.b=Lf(a,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,t=ei){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){const i=py[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return $e.workingToColorSpace(ln.copy(this),e),Math.round(We(ln.r*255,0,255))*65536+Math.round(We(ln.g*255,0,255))*256+Math.round(We(ln.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(ln.copy(this),t);const i=ln.r,r=ln.g,s=ln.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=ei){$e.workingToColorSpace(ln.copy(this),e);const t=ln.r,i=ln.g,r=ln.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(Jl);const i=wf(Tr.h,Jl.h,t),r=wf(Tr.s,Jl.s,t),s=wf(Tr.l,Jl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new Je;Je.NAMES=py;class zT extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hi=new V,Yi=new V,Nf=new V,$i=new V,na=new V,ia=new V,M0=new V,If=new V,Uf=new V,Ff=new V,Of=new bt,kf=new bt,zf=new bt;class xi{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),hi.subVectors(e,t),r.cross(hi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){hi.subVectors(r,t),Yi.subVectors(i,t),Nf.subVectors(e,t);const a=hi.dot(hi),o=hi.dot(Yi),l=hi.dot(Nf),c=Yi.dot(Yi),u=Yi.dot(Nf),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,m=(a*u-o*l)*f;return s.set(1-p-m,m,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$i.x),l.addScaledVector(a,$i.y),l.addScaledVector(o,$i.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Of.setScalar(0),kf.setScalar(0),zf.setScalar(0),Of.fromBufferAttribute(e,t),kf.fromBufferAttribute(e,i),zf.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Of,s.x),a.addScaledVector(kf,s.y),a.addScaledVector(zf,s.z),a}static isFrontFacing(e,t,i,r){return hi.subVectors(i,t),Yi.subVectors(e,t),hi.cross(Yi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),hi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return xi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;na.subVectors(r,i),ia.subVectors(s,i),If.subVectors(e,i);const l=na.dot(If),c=ia.dot(If);if(l<=0&&c<=0)return t.copy(i);Uf.subVectors(e,r);const u=na.dot(Uf),h=ia.dot(Uf);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(na,a);Ff.subVectors(e,s);const p=na.dot(Ff),m=ia.dot(Ff);if(m>=0&&p<=m)return t.copy(s);const v=p*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(ia,o);const _=u*m-p*h;if(_<=0&&h-u>=0&&p-m>=0)return M0.subVectors(s,r),o=(h-u)/(h-u+(p-m)),t.copy(r).addScaledVector(M0,o);const d=1/(_+v+f);return a=v*d,o=f*d,t.copy(i).addScaledVector(na,a).addScaledVector(ia,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class oo{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pi):pi.fromBufferAttribute(s,a),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ec.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ec.copy(i.boundingBox)),ec.applyMatrix4(e.matrixWorld),this.union(ec)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yo),tc.subVectors(this.max,yo),ra.subVectors(e.a,yo),sa.subVectors(e.b,yo),aa.subVectors(e.c,yo),wr.subVectors(sa,ra),Ar.subVectors(aa,sa),fs.subVectors(ra,aa);let t=[0,-wr.z,wr.y,0,-Ar.z,Ar.y,0,-fs.z,fs.y,wr.z,0,-wr.x,Ar.z,0,-Ar.x,fs.z,0,-fs.x,-wr.y,wr.x,0,-Ar.y,Ar.x,0,-fs.y,fs.x,0];return!Bf(t,ra,sa,aa,tc)||(t=[1,0,0,0,1,0,0,0,1],!Bf(t,ra,sa,aa,tc))?!1:(nc.crossVectors(wr,Ar),t=[nc.x,nc.y,nc.z],Bf(t,ra,sa,aa,tc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ki=[new V,new V,new V,new V,new V,new V,new V,new V],pi=new V,ec=new oo,ra=new V,sa=new V,aa=new V,wr=new V,Ar=new V,fs=new V,yo=new V,tc=new V,nc=new V,ds=new V;function Bf(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ds.fromArray(n,s);const o=r.x*Math.abs(ds.x)+r.y*Math.abs(ds.y)+r.z*Math.abs(ds.z),l=e.dot(ds),c=t.dot(ds),u=i.dot(ds);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ut=new V,ic=new Fe;let BT=0;class Bi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BT++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=l0,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ic.fromBufferAttribute(this,t),ic.applyMatrix3(e),this.setXY(t,ic.x,ic.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),r=Sn(r,this.array),s=Sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==l0&&(e.usage=this.usage),e}}class my extends Bi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gy extends Bi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class cr extends Bi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const HT=new oo,So=new V,Hf=new V;class pm{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):HT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);const t=So.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(So,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(Hf)),this.expandByPoint(So.copy(e.center).sub(Hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let VT=0;const Qn=new _t,Vf=new en,oa=new V,On=new oo,Mo=new oo,Xt=new V;class xr extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=wl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yT(e)?gy:my)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,i){return Qn.makeTranslation(e,t,i),this.applyMatrix4(Qn),this}scale(e,t,i){return Qn.makeScale(e,t,i),this.applyMatrix4(Qn),this}lookAt(e){return Vf.lookAt(e),Vf.updateMatrix(),this.applyMatrix4(Vf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oa).negate(),this.translate(oa.x,oa.y,oa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new cr(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];On.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pm);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Mo.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(On.min,Mo.min),On.expandByPoint(Xt),Xt.addVectors(On.max,Mo.max),On.expandByPoint(Xt)):(On.expandByPoint(Mo.min),On.expandByPoint(Mo.max))}On.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Xt.fromBufferAttribute(o,c),l&&(oa.fromBufferAttribute(e,c),Xt.add(oa)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new V,l[y]=new V;const c=new V,u=new V,h=new V,f=new Fe,p=new Fe,m=new Fe,v=new V,_=new V;function d(y,T,L){c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,L),f.fromBufferAttribute(s,y),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,L),u.sub(c),h.sub(c),p.sub(f),m.sub(f);const R=1/(p.x*m.y-m.x*p.y);isFinite(R)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(R),_.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(R),o[y].add(v),o[T].add(v),o[L].add(v),l[y].add(_),l[T].add(_),l[L].add(_))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let y=0,T=g.length;y<T;++y){const L=g[y],R=L.start,O=L.count;for(let F=R,X=R+O;F<X;F+=3)d(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new V,S=new V,E=new V,w=new V;function A(y){E.fromBufferAttribute(r,y),w.copy(E);const T=o[y];x.copy(T),x.sub(E.multiplyScalar(E.dot(T))).normalize(),S.crossVectors(w,T);const R=S.dot(l[y])<0?-1:1;a.setXYZW(y,x.x,x.y,x.z,R)}for(let y=0,T=g.length;y<T;++y){const L=g[y],R=L.start,O=L.count;for(let F=R,X=R+O;F<X;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new V,s=new V,a=new V,o=new V,l=new V,c=new V,u=new V,h=new V;if(e)for(let f=0,p=e.count;f<p;f+=3){const m=e.getX(f+0),v=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,_),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,_),o.add(u),l.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,m=0;for(let v=0,_=l.length;v<_;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let d=0;d<u;d++)f[m++]=c[p++]}return new Bi(f,u,h)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let GT=0;class Al extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=wl(),this.name="",this.type="Material",this.blending=Ua,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ua&&(i.blending=this.blending),this.side!==es&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nh&&(i.blendSrc=this.blendSrc),this.blendDst!==ih&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==o0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zi=new V,Gf=new V,rc=new V,Cr=new V,Wf=new V,sc=new V,Xf=new V;class mm{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Gf.copy(e).add(t).multiplyScalar(.5),rc.copy(t).sub(e).normalize(),Cr.copy(this.origin).sub(Gf);const s=e.distanceTo(t)*.5,a=-this.direction.dot(rc),o=Cr.dot(this.direction),l=-Cr.dot(rc),c=Cr.lengthSq(),u=Math.abs(1-a*a);let h,f,p,m;if(u>0)if(h=a*l-o,f=a*o-l,m=s*u,h>=0)if(f>=-m)if(f<=m){const v=1/u;h*=v,f*=v,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Gf).addScaledVector(rc,f),p}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const i=Zi.dot(this.direction),r=Zi.dot(Zi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,i,r,s){Wf.subVectors(t,e),sc.subVectors(i,e),Xf.crossVectors(Wf,sc);let a=this.direction.dot(Xf),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cr.subVectors(this.origin,e);const l=o*this.direction.dot(sc.crossVectors(Cr,sc));if(l<0)return null;const c=o*this.direction.dot(Wf.cross(Cr));if(c<0||l+c>a)return null;const u=-o*Cr.dot(Xf);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gm extends Al{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=$x,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const E0=new _t,hs=new mm,ac=new pm,T0=new V,oc=new V,lc=new V,cc=new V,jf=new V,uc=new V,w0=new V,fc=new V;class oi extends en{constructor(e=new xr,t=new gm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){uc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(jf.fromBufferAttribute(h,e),a?uc.addScaledVector(jf,u):uc.addScaledVector(jf.sub(t),u))}t.add(uc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ac.copy(i.boundingSphere),ac.applyMatrix4(s),hs.copy(e.ray).recast(e.near),!(ac.containsPoint(hs.origin)===!1&&(hs.intersectSphere(ac,T0)===null||hs.origin.distanceToSquared(T0)>(e.far-e.near)**2))&&(E0.copy(s).invert(),hs.copy(e.ray).applyMatrix4(E0),!(i.boundingBox!==null&&hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){const _=f[m],d=a[_.materialIndex],g=Math.max(_.start,p.start),x=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let S=g,E=x;S<E;S+=3){const w=o.getX(S),A=o.getX(S+1),y=o.getX(S+2);r=dc(this,d,e,i,c,u,h,w,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let _=m,d=v;_<d;_+=3){const g=o.getX(_),x=o.getX(_+1),S=o.getX(_+2);r=dc(this,a,e,i,c,u,h,g,x,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){const _=f[m],d=a[_.materialIndex],g=Math.max(_.start,p.start),x=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let S=g,E=x;S<E;S+=3){const w=S,A=S+1,y=S+2;r=dc(this,d,e,i,c,u,h,w,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let _=m,d=v;_<d;_+=3){const g=_,x=_+1,S=_+2;r=dc(this,a,e,i,c,u,h,g,x,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function WT(n,e,t,i,r,s,a,o){let l;if(e.side===bn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===es,o),l===null)return null;fc.copy(o),fc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(fc);return c<t.near||c>t.far?null:{distance:c,point:fc.clone(),object:n}}function dc(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,oc),n.getVertexPosition(l,lc),n.getVertexPosition(c,cc);const u=WT(n,e,t,i,oc,lc,cc,w0);if(u){const h=new V;xi.getBarycoord(w0,oc,lc,cc,h),r&&(u.uv=xi.getInterpolatedAttribute(r,o,l,c,h,new Fe)),s&&(u.uv1=xi.getInterpolatedAttribute(s,o,l,c,h,new Fe)),a&&(u.normal=xi.getInterpolatedAttribute(a,o,l,c,h,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new V,materialIndex:0};xi.getNormal(oc,lc,cc,f.normal),u.face=f,u.barycoord=h}return u}class XT extends vn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Qt,u=Qt,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qf=new V,jT=new V,qT=new ze;class Dr{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=qf.subVectors(i,t).cross(jT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(qf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||qT.getNormalMatrix(e),r=this.coplanarPoint(qf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new pm,YT=new Fe(.5,.5),hc=new V;class _m{constructor(e=new Dr,t=new Dr,i=new Dr,r=new Dr,s=new Dr,a=new Dr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ii,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],p=s[7],m=s[8],v=s[9],_=s[10],d=s[11],g=s[12],x=s[13],S=s[14],E=s[15];if(r[0].setComponents(c-a,p-u,d-m,E-g).normalize(),r[1].setComponents(c+a,p+u,d+m,E+g).normalize(),r[2].setComponents(c+o,p+h,d+v,E+x).normalize(),r[3].setComponents(c-o,p-h,d-v,E-x).normalize(),i)r[4].setComponents(l,f,_,S).normalize(),r[5].setComponents(c-l,p-f,d-_,E-S).normalize();else if(r[4].setComponents(c-l,p-f,d-_,E-S).normalize(),t===Ii)r[5].setComponents(c+l,p+f,d+_,E+S).normalize();else if(t===fl)r[5].setComponents(l,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const t=YT.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(hc.x=r.normal.x>0?e.max.x:e.min.x,hc.y=r.normal.y>0?e.max.y:e.min.y,hc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _y extends vn{constructor(e=[],t=Vs,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dl extends vn{constructor(e,t,i=Hi,r,s,a,o=Qt,l=Qt,c,u=mr,h=1){if(u!==mr&&u!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $T extends dl{constructor(e,t=Hi,i=Vs,r,s,a=Qt,o=Qt,l,c=mr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vy extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gs extends xr{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,r,a,2),m("x","z","y",1,-1,e,i,-t,r,a,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new cr(c,3)),this.setAttribute("normal",new cr(u,3)),this.setAttribute("uv",new cr(h,2));function m(v,_,d,g,x,S,E,w,A,y,T){const L=S/A,R=E/y,O=S/2,F=E/2,X=w/2,z=A+1,H=y+1;let I=0,B=0;const j=new V;for(let J=0;J<H;J++){const $=J*R-F;for(let ee=0;ee<z;ee++){const ve=ee*L-O;j[v]=ve*g,j[_]=$*x,j[d]=X,c.push(j.x,j.y,j.z),j[v]=0,j[_]=0,j[d]=w>0?1:-1,u.push(j.x,j.y,j.z),h.push(ee/A),h.push(1-J/y),I+=1}}for(let J=0;J<y;J++)for(let $=0;$<A;$++){const ee=f+$+z*J,ve=f+$+z*(J+1),Ce=f+($+1)+z*(J+1),Ie=f+($+1)+z*J;l.push(ee,ve,Ie),l.push(ve,Ce,Ie),B+=6}o.addGroup(p,B,T),p+=B,f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Cl extends xr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=t/l,p=[],m=[],v=[],_=[];for(let d=0;d<u;d++){const g=d*f-a;for(let x=0;x<c;x++){const S=x*h-s;m.push(S,-g,0),v.push(0,0,1),_.push(x/o),_.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<o;g++){const x=g+c*d,S=g+c*(d+1),E=g+1+c*(d+1),w=g+1+c*d;p.push(x,S,w),p.push(S,E,w)}this.setIndex(p),this.setAttribute("position",new cr(m,3)),this.setAttribute("normal",new cr(v,3)),this.setAttribute("uv",new cr(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.widthSegments,e.heightSegments)}}function Za(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function pn(n){const e={};for(let t=0;t<n.length;t++){const i=Za(n[t]);for(const r in i)e[r]=i[r]}return e}function KT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xy(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const ZT={clone:Za,merge:pn};var QT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends Al{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QT,this.fragmentShader=JT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Za(e.uniforms),this.uniformsGroups=KT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ew extends Gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class A0 extends Al{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fy,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tw extends Al{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nw extends Al{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class yy extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Yf=new _t,C0=new V,b0=new V;class iw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _m,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;C0.setFromMatrixPosition(e.matrixWorld),t.position.copy(C0),b0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(b0),t.updateMatrixWorld(),Yf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===fl||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pc=new V,mc=new ts,Ai=new V;class Sy extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pc,mc,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pc,mc,Ai.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(pc,mc,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pc,mc,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const br=new V,R0=new Fe,P0=new Fe;class vi extends Sy{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xh*2*Math.atan(Math.tan(kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,t){return this.getViewBounds(e,R0,P0),t.subVectors(P0,R0)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(kc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Bu extends Sy{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rw extends iw{constructor(){super(new Bu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sw extends yy{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new rw}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class aw extends yy{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const la=-90,ca=1;class ow extends en{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vi(la,ca,e,t);r.layers=this.layers,this.add(r);const s=new vi(la,ca,e,t);s.layers=this.layers,this.add(s);const a=new vi(la,ca,e,t);a.layers=this.layers,this.add(a);const o=new vi(la,ca,e,t);o.layers=this.layers,this.add(o);const l=new vi(la,ca,e,t);l.layers=this.layers,this.add(l);const c=new vi(la,ca,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class lw extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const D0=new _t;class cw{constructor(e,t,i=0,r=1/0){this.ray=new mm(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new hm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return D0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(D0),this}intersectObject(e,t=!0,i=[]){return jh(e,this,i,t),i.sort(L0),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)jh(e[r],this,i,t);return i.sort(L0),i}}function L0(n,e){return n.distance-e.distance}function jh(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)jh(s[a],e,t,!0)}}class N0{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class uw extends js{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ne("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function I0(n,e,t,i){const r=fw(i);switch(t){case ly:return n*e;case uy:return n*e/r.components*r.byteLength;case om:return n*e/r.components*r.byteLength;case $a:return n*e*2/r.components*r.byteLength;case lm:return n*e*2/r.components*r.byteLength;case cy:return n*e*3/r.components*r.byteLength;case yi:return n*e*4/r.components*r.byteLength;case cm:return n*e*4/r.components*r.byteLength;case Ic:case Uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fc:case Oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ph:case gh:return Math.max(n,16)*Math.max(e,8)/4;case hh:case mh:return Math.max(n,8)*Math.max(e,8)/2;case _h:case vh:case yh:case Sh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xh:case Mh:case Eh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case kh:case zh:case Bh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Hh:case Vh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Gh:case Wh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fw(n){switch(n){case Bn:case ry:return{byteLength:1,components:1};case cl:case sy:case pr:return{byteLength:2,components:1};case sm:case am:return{byteLength:2,components:4};case Hi:case rm:case Ni:return{byteLength:4,components:1};case ay:case oy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:im}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=im);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function My(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function dw(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<h.length;p++){const m=h[f],v=h[p];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,m=h.length;p<m;p++){const v=h[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var hw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_w=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Mw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ew=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ww=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Aw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Iw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Uw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Fw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ow=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ww=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$w=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_A=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,MA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,FA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,VA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$A=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,KA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,QA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_C=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,SC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,MC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,CC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,DC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,HC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:hw,alphahash_pars_fragment:pw,alphamap_fragment:mw,alphamap_pars_fragment:gw,alphatest_fragment:_w,alphatest_pars_fragment:vw,aomap_fragment:xw,aomap_pars_fragment:yw,batching_pars_vertex:Sw,batching_vertex:Mw,begin_vertex:Ew,beginnormal_vertex:Tw,bsdfs:ww,iridescence_fragment:Aw,bumpmap_pars_fragment:Cw,clipping_planes_fragment:bw,clipping_planes_pars_fragment:Rw,clipping_planes_pars_vertex:Pw,clipping_planes_vertex:Dw,color_fragment:Lw,color_pars_fragment:Nw,color_pars_vertex:Iw,color_vertex:Uw,common:Fw,cube_uv_reflection_fragment:Ow,defaultnormal_vertex:kw,displacementmap_pars_vertex:zw,displacementmap_vertex:Bw,emissivemap_fragment:Hw,emissivemap_pars_fragment:Vw,colorspace_fragment:Gw,colorspace_pars_fragment:Ww,envmap_fragment:Xw,envmap_common_pars_fragment:jw,envmap_pars_fragment:qw,envmap_pars_vertex:Yw,envmap_physical_pars_fragment:sA,envmap_vertex:$w,fog_vertex:Kw,fog_pars_vertex:Zw,fog_fragment:Qw,fog_pars_fragment:Jw,gradientmap_pars_fragment:eA,lightmap_pars_fragment:tA,lights_lambert_fragment:nA,lights_lambert_pars_fragment:iA,lights_pars_begin:rA,lights_toon_fragment:aA,lights_toon_pars_fragment:oA,lights_phong_fragment:lA,lights_phong_pars_fragment:cA,lights_physical_fragment:uA,lights_physical_pars_fragment:fA,lights_fragment_begin:dA,lights_fragment_maps:hA,lights_fragment_end:pA,logdepthbuf_fragment:mA,logdepthbuf_pars_fragment:gA,logdepthbuf_pars_vertex:_A,logdepthbuf_vertex:vA,map_fragment:xA,map_pars_fragment:yA,map_particle_fragment:SA,map_particle_pars_fragment:MA,metalnessmap_fragment:EA,metalnessmap_pars_fragment:TA,morphinstance_vertex:wA,morphcolor_vertex:AA,morphnormal_vertex:CA,morphtarget_pars_vertex:bA,morphtarget_vertex:RA,normal_fragment_begin:PA,normal_fragment_maps:DA,normal_pars_fragment:LA,normal_pars_vertex:NA,normal_vertex:IA,normalmap_pars_fragment:UA,clearcoat_normal_fragment_begin:FA,clearcoat_normal_fragment_maps:OA,clearcoat_pars_fragment:kA,iridescence_pars_fragment:zA,opaque_fragment:BA,packing:HA,premultiplied_alpha_fragment:VA,project_vertex:GA,dithering_fragment:WA,dithering_pars_fragment:XA,roughnessmap_fragment:jA,roughnessmap_pars_fragment:qA,shadowmap_pars_fragment:YA,shadowmap_pars_vertex:$A,shadowmap_vertex:KA,shadowmask_pars_fragment:ZA,skinbase_vertex:QA,skinning_pars_vertex:JA,skinning_vertex:eC,skinnormal_vertex:tC,specularmap_fragment:nC,specularmap_pars_fragment:iC,tonemapping_fragment:rC,tonemapping_pars_fragment:sC,transmission_fragment:aC,transmission_pars_fragment:oC,uv_pars_fragment:lC,uv_pars_vertex:cC,uv_vertex:uC,worldpos_vertex:fC,background_vert:dC,background_frag:hC,backgroundCube_vert:pC,backgroundCube_frag:mC,cube_vert:gC,cube_frag:_C,depth_vert:vC,depth_frag:xC,distance_vert:yC,distance_frag:SC,equirect_vert:MC,equirect_frag:EC,linedashed_vert:TC,linedashed_frag:wC,meshbasic_vert:AC,meshbasic_frag:CC,meshlambert_vert:bC,meshlambert_frag:RC,meshmatcap_vert:PC,meshmatcap_frag:DC,meshnormal_vert:LC,meshnormal_frag:NC,meshphong_vert:IC,meshphong_frag:UC,meshphysical_vert:FC,meshphysical_frag:OC,meshtoon_vert:kC,meshtoon_frag:zC,points_vert:BC,points_frag:HC,shadow_vert:VC,shadow_frag:GC,sprite_vert:WC,sprite_frag:XC},fe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Pi={basic:{uniforms:pn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:pn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:pn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:pn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:pn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:pn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:pn([fe.points,fe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:pn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:pn([fe.common,fe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:pn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:pn([fe.sprite,fe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:pn([fe.common,fe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:pn([fe.lights,fe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Pi.physical={uniforms:pn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const gc={r:0,b:0,g:0},ms=new Vi,jC=new _t;function qC(n,e,t,i,r,s){const a=new Je(0);let o=r===!0?0:1,l,c,u=null,h=0,f=null;function p(g){let x=g.isScene===!0?g.background:null;if(x&&x.isTexture){const S=g.backgroundBlurriness>0;x=e.get(x,S)}return x}function m(g){let x=!1;const S=p(g);S===null?_(a,o):S&&S.isColor&&(_(S,1),x=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(g,x){const S=p(x);S&&(S.isCubeTexture||S.mapping===zu)?(c===void 0&&(c=new oi(new Gs(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:Za(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),ms.copy(x.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jC.makeRotationFromEuler(ms)),c.material.toneMapped=$e.getTransfer(S.colorSpace)!==it,(u!==S||h!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,f=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new oi(new Cl(2,2),new Gi({name:"BackgroundMaterial",uniforms:Za(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=$e.getTransfer(S.colorSpace)!==it,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,f=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,x){g.getRGB(gc,xy(n)),t.buffers.color.setClear(gc.r,gc.g,gc.b,x,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,x=1){a.set(g),o=x,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,_(a,o)},render:m,addToRenderList:v,dispose:d}}function YC(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(R,O,F,X,z){let H=!1;const I=h(R,X,F,O);s!==I&&(s=I,c(s.object)),H=p(R,X,F,z),H&&m(R,X,F,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,S(R,O,F,X),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function u(R){return n.deleteVertexArray(R)}function h(R,O,F,X){const z=X.wireframe===!0;let H=i[O.id];H===void 0&&(H={},i[O.id]=H);const I=R.isInstancedMesh===!0?R.id:0;let B=H[I];B===void 0&&(B={},H[I]=B);let j=B[F.id];j===void 0&&(j={},B[F.id]=j);let J=j[z];return J===void 0&&(J=f(l()),j[z]=J),J}function f(R){const O=[],F=[],X=[];for(let z=0;z<t;z++)O[z]=0,F[z]=0,X[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:F,attributeDivisors:X,object:R,attributes:{},index:null}}function p(R,O,F,X){const z=s.attributes,H=O.attributes;let I=0;const B=F.getAttributes();for(const j in B)if(B[j].location>=0){const $=z[j];let ee=H[j];if(ee===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor)),$===void 0||$.attribute!==ee||ee&&$.data!==ee.data)return!0;I++}return s.attributesNum!==I||s.index!==X}function m(R,O,F,X){const z={},H=O.attributes;let I=0;const B=F.getAttributes();for(const j in B)if(B[j].location>=0){let $=H[j];$===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&($=R.instanceColor));const ee={};ee.attribute=$,$&&$.data&&(ee.data=$.data),z[j]=ee,I++}s.attributes=z,s.attributesNum=I,s.index=X}function v(){const R=s.newAttributes;for(let O=0,F=R.length;O<F;O++)R[O]=0}function _(R){d(R,0)}function d(R,O){const F=s.newAttributes,X=s.enabledAttributes,z=s.attributeDivisors;F[R]=1,X[R]===0&&(n.enableVertexAttribArray(R),X[R]=1),z[R]!==O&&(n.vertexAttribDivisor(R,O),z[R]=O)}function g(){const R=s.newAttributes,O=s.enabledAttributes;for(let F=0,X=O.length;F<X;F++)O[F]!==R[F]&&(n.disableVertexAttribArray(F),O[F]=0)}function x(R,O,F,X,z,H,I){I===!0?n.vertexAttribIPointer(R,O,F,z,H):n.vertexAttribPointer(R,O,F,X,z,H)}function S(R,O,F,X){v();const z=X.attributes,H=F.getAttributes(),I=O.defaultAttributeValues;for(const B in H){const j=H[B];if(j.location>=0){let J=z[B];if(J===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(J=R.instanceColor)),J!==void 0){const $=J.normalized,ee=J.itemSize,ve=e.get(J);if(ve===void 0)continue;const Ce=ve.buffer,Ie=ve.type,Y=ve.bytesPerElement,se=Ie===n.INT||Ie===n.UNSIGNED_INT||J.gpuType===rm;if(J.isInterleavedBufferAttribute){const ue=J.data,ke=ue.stride,Pe=J.offset;if(ue.isInstancedInterleavedBuffer){for(let Le=0;Le<j.locationSize;Le++)d(j.location+Le,ue.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Le=0;Le<j.locationSize;Le++)_(j.location+Le);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let Le=0;Le<j.locationSize;Le++)x(j.location+Le,ee/j.locationSize,Ie,$,ke*Y,(Pe+ee/j.locationSize*Le)*Y,se)}else{if(J.isInstancedBufferAttribute){for(let ue=0;ue<j.locationSize;ue++)d(j.location+ue,J.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ue=0;ue<j.locationSize;ue++)_(j.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let ue=0;ue<j.locationSize;ue++)x(j.location+ue,ee/j.locationSize,Ie,$,ee*Y,ee/j.locationSize*ue*Y,se)}}else if(I!==void 0){const $=I[B];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(j.location,$);break;case 3:n.vertexAttrib3fv(j.location,$);break;case 4:n.vertexAttrib4fv(j.location,$);break;default:n.vertexAttrib1fv(j.location,$)}}}}g()}function E(){T();for(const R in i){const O=i[R];for(const F in O){const X=O[F];for(const z in X){const H=X[z];for(const I in H)u(H[I].object),delete H[I];delete X[z]}}delete i[R]}}function w(R){if(i[R.id]===void 0)return;const O=i[R.id];for(const F in O){const X=O[F];for(const z in X){const H=X[z];for(const I in H)u(H[I].object),delete H[I];delete X[z]}}delete i[R.id]}function A(R){for(const O in i){const F=i[O];for(const X in F){const z=F[X];if(z[R.id]===void 0)continue;const H=z[R.id];for(const I in H)u(H[I].object),delete H[I];delete z[R.id]}}}function y(R){for(const O in i){const F=i[O],X=R.isInstancedMesh===!0?R.id:0,z=F[X];if(z!==void 0){for(const H in z){const I=z[H];for(const B in I)u(I[B].object),delete I[B];delete z[H]}delete F[X],Object.keys(F).length===0&&delete i[O]}}}function T(){L(),a=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:_,disableUnusedAttributes:g}}function $C(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let m=0;m<h;m++)p+=u[m];t.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],u[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let m=0;for(let v=0;v<h;v++)m+=u[v]*f[v];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function KC(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==yi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const y=A===pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Bn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ni&&!y)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ne("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:S,maxSamples:E,samples:w}}function ZC(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Dr,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const m=h.clippingPlanes,v=h.clipIntersection,_=h.clipShadows,d=n.get(h);if(!r||m===null||m.length===0||s&&!_)s?u(null):c();else{const g=s?0:i,x=g*4;let S=d.clippingState||null;l.value=S,S=u(m,f,x,p);for(let E=0;E!==x;++E)S[E]=t[E];d.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,m){const v=h!==null?h.length:0;let _=null;if(v!==0){if(_=l.value,m!==!0||_===null){const d=p+v*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(_===null||_.length<d)&&(_=new Float32Array(d));for(let x=0,S=p;x!==v;++x,S+=4)a.copy(h[x]).applyMatrix4(g,o),a.normal.toArray(_,S),_[S+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}const Or=4,U0=[.125,.215,.35,.446,.526,.582],Ts=20,QC=256,Eo=new Bu,F0=new Je;let $f=null,Kf=0,Zf=0,Qf=!1;const JC=new V;class O0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=JC}=s;$f=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=z0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($f,Kf,Zf),this._renderer.xr.enabled=Qf,e.scissorTest=!1,ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Ya?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$f=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:pr,format:yi,colorSpace:Ka,depthBuffer:!1},r=k0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=k0(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eb(s)),this._blurMaterial=nb(s,e,t),this._ggxMaterial=tb(s,e,t)}return r}_compileMaterial(e){const t=new oi(new xr,e);this._renderer.compile(t,Eo)}_sceneToCubeUV(e,t,i,r,s){const l=new vi(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(F0),h.toneMapping=ki,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oi(new Gs,new gm({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,_=v.material;let d=!1;const g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,d=!0):(_.color.copy(F0),d=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):S===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const E=this._cubeSize;ua(r,S*E,x>2?E:0,E,E),h.setRenderTarget(r),d&&h.render(v,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Vs||e.mapping===Ya;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=B0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=z0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ua(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Eo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,p=h*f,{_lodMax:m}=this,v=this._sizeLods[i],_=3*v*(i>m-Or?i-m+Or:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-t,ua(s,_,d,3*v,2*v),r.setRenderTarget(s),r.render(o,Eo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,ua(e,_,d,3*v,2*v),r.setRenderTarget(e),r.render(o,Eo)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ts-1),v=s/m,_=isFinite(s)?1+Math.floor(u*v):Ts;_>Ts&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ts}`);const d=[];let g=0;for(let A=0;A<Ts;++A){const y=A/v,T=Math.exp(-y*y/2);d.push(T),A===0?g+=T:A<_&&(g+=2*T)}for(let A=0;A<d.length;A++)d[A]=d[A]/g;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-i;const S=this._sizeLods[r],E=3*S*(r>x-Or?r-x+Or:0),w=4*(this._cubeSize-S);ua(t,E,w,3*S,2*S),l.setRenderTarget(t),l.render(h,Eo)}}function eb(n){const e=[],t=[],i=[];let r=n;const s=n-Or+1+U0.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Or?l=U0[a-n+Or-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,m=6,v=3,_=2,d=1,g=new Float32Array(v*m*p),x=new Float32Array(_*m*p),S=new Float32Array(d*m*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,y=w>2?0:-1,T=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];g.set(T,v*m*w),x.set(f,_*m*w);const L=[w,w,w,w,w,w];S.set(L,d*m*w)}const E=new xr;E.setAttribute("position",new Bi(g,v)),E.setAttribute("uv",new Bi(x,_)),E.setAttribute("faceIndex",new Bi(S,d)),i.push(new oi(E,null)),r>Or&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function k0(n,e,t){const i=new zi(n,e,t);return i.texture.mapping=zu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ua(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function tb(n,e,t){return new Gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function nb(n,e,t){const i=new Float32Array(Ts),r=new V(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function z0(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function B0(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Hu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ey extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new _y(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Gs(5,5,5),s=new Gi({name:"CubemapFromEquirect",uniforms:Za(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:or});s.uniforms.tEquirect.value=t;const a=new oi(r,s),o=t.minFilter;return t.minFilter===bs&&(t.minFilter=fn),new ow(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function ib(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===Mf||p===Ef)if(e.has(f)){const m=e.get(f).texture;return o(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const v=new Ey(m.height);return v.fromEquirectangularTexture(n,f),e.set(f,v),f.addEventListener("dispose",c),o(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,m=p===Mf||p===Ef,v=p===Vs||p===Ya;if(m||v){let _=t.get(f);const d=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new O0(n)),_=m?i.fromEquirectangular(f,_):i.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),_.texture;if(_!==void 0)return _.texture;{const g=f.image;return m&&g&&g.height>0||v&&g&&l(g)?(i===null&&(i=new O0(n)),_=m?i.fromEquirectangular(f):i.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),f.addEventListener("dispose",u),_.texture):null}}}return f}function o(f,p){return p===Mf?f.mapping=Vs:p===Ef&&(f.mapping=Ya),f}function l(f){let p=0;const m=6;for(let v=0;v<m;v++)f[v]!==void 0&&p++;return p===m}function c(f){const p=f.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function rb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&mu("WebGLRenderer: "+i+" extension not supported."),r}}}function sb(n,e,t,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,m=h.attributes.position;let v=0;if(m===void 0)return;if(p!==null){const g=p.array;v=p.version;for(let x=0,S=g.length;x<S;x+=3){const E=g[x+0],w=g[x+1],A=g[x+2];f.push(E,w,w,A,A,E)}}else{const g=m.array;v=m.version;for(let x=0,S=g.length/3-1;x<S;x+=3){const E=x+0,w=x+1,A=x+2;f.push(E,w,w,A,A,E)}}const _=new(m.count>=65535?gy:my)(f,1);_.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,_)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function ab(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*a),t.update(p,i,1)}function c(f,p,m){m!==0&&(n.drawElementsInstanced(i,p,s,f*a,m),t.update(p,i,m))}function u(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,m);let _=0;for(let d=0;d<m;d++)_+=p[d];t.update(_,i,1)}function h(f,p,m,v){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],v[d]);else{_.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,v,0,m);let d=0;for(let g=0;g<m;g++)d+=p[g]*v[g];t.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ob(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function lb(n,e,t){const i=new WeakMap,r=new bt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let L=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var p=L;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),v===!0&&(S=2),_===!0&&(S=3);let E=o.attributes.position.count*S,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*w*4*h),y=new hy(A,E,w,h);y.type=Ni,y.needsUpdate=!0;const T=S*4;for(let R=0;R<h;R++){const O=d[R],F=g[R],X=x[R],z=E*w*4*R;for(let H=0;H<O.count;H++){const I=H*T;m===!0&&(r.fromBufferAttribute(O,H),A[z+I+0]=r.x,A[z+I+1]=r.y,A[z+I+2]=r.z,A[z+I+3]=0),v===!0&&(r.fromBufferAttribute(F,H),A[z+I+4]=r.x,A[z+I+5]=r.y,A[z+I+6]=r.z,A[z+I+7]=0),_===!0&&(r.fromBufferAttribute(X,H),A[z+I+8]=r.x,A[z+I+9]=r.y,A[z+I+10]=r.z,A[z+I+11]=X.itemSize===4?r.w:1)}}f={count:h,texture:y,size:new Fe(E,w)},i.set(o,f),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function cb(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const ub={[Kx]:"LINEAR_TONE_MAPPING",[Zx]:"REINHARD_TONE_MAPPING",[Qx]:"CINEON_TONE_MAPPING",[Jx]:"ACES_FILMIC_TONE_MAPPING",[ty]:"AGX_TONE_MAPPING",[ny]:"NEUTRAL_TONE_MAPPING",[ey]:"CUSTOM_TONE_MAPPING"};function fb(n,e,t,i,r){const s=new zi(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new zi(e,t,{type:pr,depthBuffer:!1,stencilBuffer:!1}),o=new xr;o.setAttribute("position",new cr([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new cr([0,2,0,0,2,0],2));const l=new ew({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new oi(o,l),u=new Bu(-1,1,1,-1,0,1);let h=null,f=null,p=!1,m,v=null,_=[],d=!1;this.setSize=function(g,x){s.setSize(g,x),a.setSize(g,x);for(let S=0;S<_.length;S++){const E=_[S];E.setSize&&E.setSize(g,x)}},this.setEffects=function(g){_=g,d=_.length>0&&_[0].isRenderPass===!0;const x=s.width,S=s.height;for(let E=0;E<_.length;E++){const w=_[E];w.setSize&&w.setSize(x,S)}},this.begin=function(g,x){if(p||g.toneMapping===ki&&_.length===0)return!1;if(v=x,x!==null){const S=x.width,E=x.height;(s.width!==S||s.height!==E)&&this.setSize(S,E)}return d===!1&&g.setRenderTarget(s),m=g.toneMapping,g.toneMapping=ki,!0},this.hasRenderPass=function(){return d},this.end=function(g,x){g.toneMapping=m,p=!0;let S=s,E=a;for(let w=0;w<_.length;w++){const A=_[w];if(A.enabled!==!1&&(A.render(g,E,S,x),A.needsSwap!==!1)){const y=S;S=E,E=y}}if(h!==g.outputColorSpace||f!==g.toneMapping){h=g.outputColorSpace,f=g.toneMapping,l.defines={},$e.getTransfer(h)===it&&(l.defines.SRGB_TRANSFER="");const w=ub[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,g.setRenderTarget(v),g.render(c,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Ty=new vn,qh=new dl(1,1),wy=new hy,Ay=new DT,Cy=new _y,H0=[],V0=[],G0=new Float32Array(16),W0=new Float32Array(9),X0=new Float32Array(4);function lo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=H0[r];if(s===void 0&&(s=new Float32Array(r),H0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vu(n,e){let t=V0[e];t===void 0&&(t=new Int32Array(e),V0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function db(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function pb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function gb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;X0.set(i),n.uniformMatrix2fv(this.addr,!1,X0),Vt(t,i)}}function _b(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;W0.set(i),n.uniformMatrix3fv(this.addr,!1,W0),Vt(t,i)}}function vb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;G0.set(i),n.uniformMatrix4fv(this.addr,!1,G0),Vt(t,i)}}function xb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function Sb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function Mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function Eb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Tb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function wb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function Ab(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function Cb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(qh.compareFunction=t.isReversedDepthBuffer()?fm:um,s=qh):s=Ty,t.setTexture2D(e||s,r)}function bb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ay,r)}function Rb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Cy,r)}function Pb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||wy,r)}function Db(n){switch(n){case 5126:return db;case 35664:return hb;case 35665:return pb;case 35666:return mb;case 35674:return gb;case 35675:return _b;case 35676:return vb;case 5124:case 35670:return xb;case 35667:case 35671:return yb;case 35668:case 35672:return Sb;case 35669:case 35673:return Mb;case 5125:return Eb;case 36294:return Tb;case 36295:return wb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return Rb;case 36289:case 36303:case 36311:case 36292:return Pb}}function Lb(n,e){n.uniform1fv(this.addr,e)}function Nb(n,e){const t=lo(e,this.size,2);n.uniform2fv(this.addr,t)}function Ib(n,e){const t=lo(e,this.size,3);n.uniform3fv(this.addr,t)}function Ub(n,e){const t=lo(e,this.size,4);n.uniform4fv(this.addr,t)}function Fb(n,e){const t=lo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ob(n,e){const t=lo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function kb(n,e){const t=lo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zb(n,e){n.uniform1iv(this.addr,e)}function Bb(n,e){n.uniform2iv(this.addr,e)}function Hb(n,e){n.uniform3iv(this.addr,e)}function Vb(n,e){n.uniform4iv(this.addr,e)}function Gb(n,e){n.uniform1uiv(this.addr,e)}function Wb(n,e){n.uniform2uiv(this.addr,e)}function Xb(n,e){n.uniform3uiv(this.addr,e)}function jb(n,e){n.uniform4uiv(this.addr,e)}function qb(n,e,t){const i=this.cache,r=e.length,s=Vu(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=qh:a=Ty;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Yb(n,e,t){const i=this.cache,r=e.length,s=Vu(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ay,s[a])}function $b(n,e,t){const i=this.cache,r=e.length,s=Vu(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Cy,s[a])}function Kb(n,e,t){const i=this.cache,r=e.length,s=Vu(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||wy,s[a])}function Zb(n){switch(n){case 5126:return Lb;case 35664:return Nb;case 35665:return Ib;case 35666:return Ub;case 35674:return Fb;case 35675:return Ob;case 35676:return kb;case 5124:case 35670:return zb;case 35667:case 35671:return Bb;case 35668:case 35672:return Hb;case 35669:case 35673:return Vb;case 5125:return Gb;case 36294:return Wb;case 36295:return Xb;case 36296:return jb;case 35678:case 36198:case 36298:case 36306:case 35682:return qb;case 35679:case 36299:case 36307:return Yb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return Kb}}class Qb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Db(t.type)}}class Jb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zb(t.type)}}class eR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Jf=/(\w+)(\])?(\[|\.)?/g;function j0(n,e){n.seq.push(e),n.map[e.id]=e}function tR(n,e,t){const i=n.name,r=i.length;for(Jf.lastIndex=0;;){const s=Jf.exec(i),a=Jf.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){j0(t,c===void 0?new Qb(o,n,e):new Jb(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new eR(o),j0(t,h)),t=h}}}class zc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);tR(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function q0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const nR=37297;let iR=0;function rR(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Y0=new ze;function sR(n){$e._getMatrix(Y0,$e.workingColorSpace,n);const e=`mat3( ${Y0.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case hu:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function $0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+rR(n.getShaderSource(e),o)}else return s}function aR(n,e){const t=sR(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const oR={[Kx]:"Linear",[Zx]:"Reinhard",[Qx]:"Cineon",[Jx]:"ACESFilmic",[ty]:"AgX",[ny]:"Neutral",[ey]:"Custom"};function lR(n,e){const t=oR[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _c=new V;function cR(){$e.getLuminanceCoefficients(_c);const n=_c.x.toFixed(4),e=_c.y.toFixed(4),t=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uR(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function fR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dR(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Do(n){return n!==""}function K0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Z0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(n){return n.replace(hR,mR)}const pR=new Map;function mR(n,e){let t=Be[e];if(t===void 0){const i=pR.get(e);if(i!==void 0)t=Be[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yh(t)}const gR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Q0(n){return n.replace(gR,_R)}function _R(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function J0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const vR={[Nc]:"SHADOWMAP_TYPE_PCF",[Po]:"SHADOWMAP_TYPE_VSM"};function xR(n){return vR[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yR={[Vs]:"ENVMAP_TYPE_CUBE",[Ya]:"ENVMAP_TYPE_CUBE",[zu]:"ENVMAP_TYPE_CUBE_UV"};function SR(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":yR[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const MR={[Ya]:"ENVMAP_MODE_REFRACTION"};function ER(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":MR[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TR={[$x]:"ENVMAP_BLENDING_MULTIPLY",[cT]:"ENVMAP_BLENDING_MIX",[uT]:"ENVMAP_BLENDING_ADD"};function wR(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":TR[n.combine]||"ENVMAP_BLENDING_NONE"}function AR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function CR(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=xR(t),c=SR(t),u=ER(t),h=wR(t),f=AR(t),p=uR(t),m=fR(s),v=r.createProgram();let _,d,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Do).join(`
`),_.length>0&&(_+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Do).join(`
`),d.length>0&&(d+=`
`)):(_=[J0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),d=[J0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?Be.tonemapping_pars_fragment:"",t.toneMapping!==ki?lR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,aR("linearToOutputTexel",t.outputColorSpace),cR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Do).join(`
`)),a=Yh(a),a=K0(a,t),a=Z0(a,t),o=Yh(o),o=K0(o,t),o=Z0(o,t),a=Q0(a),o=Q0(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["#define varying in",t.glslVersion===c0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===c0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=g+_+a,S=g+d+o,E=q0(r,r.VERTEX_SHADER,x),w=q0(r,r.FRAGMENT_SHADER,S);r.attachShader(v,E),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(R){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(v)||"",F=r.getShaderInfoLog(E)||"",X=r.getShaderInfoLog(w)||"",z=O.trim(),H=F.trim(),I=X.trim();let B=!0,j=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,E,w);else{const J=$0(r,E,"vertex"),$=$0(r,w,"fragment");Ye("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+J+`
`+$)}else z!==""?Ne("WebGLProgram: Program Info Log:",z):(H===""||I==="")&&(j=!1);j&&(R.diagnostics={runnable:B,programLog:z,vertexShader:{log:H,prefix:_},fragmentShader:{log:I,prefix:d}})}r.deleteShader(E),r.deleteShader(w),y=new zc(r,v),T=dR(r,v)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(v,nR)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iR++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=w,this}let bR=0;class RR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new PR(e),t.set(e,i)),i}}class PR{constructor(e){this.id=bR++,this.code=e,this.usedTimes=0}}function DR(n,e,t,i,r,s){const a=new hm,o=new RR,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,T,L,R,O){const F=R.fog,X=O.geometry,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,I=e.get(y.envMap||z,H),B=I&&I.mapping===zu?I.image.height:null,j=p[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Ne("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const J=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,$=J!==void 0?J.length:0;let ee=0;X.morphAttributes.position!==void 0&&(ee=1),X.morphAttributes.normal!==void 0&&(ee=2),X.morphAttributes.color!==void 0&&(ee=3);let ve,Ce,Ie,Y;if(j){const nt=Pi[j];ve=nt.vertexShader,Ce=nt.fragmentShader}else ve=y.vertexShader,Ce=y.fragmentShader,o.update(y),Ie=o.getVertexShaderID(y),Y=o.getFragmentShaderID(y);const se=n.getRenderTarget(),ue=n.state.buffers.depth.getReversed(),ke=O.isInstancedMesh===!0,Pe=O.isBatchedMesh===!0,Le=!!y.map,Gt=!!y.matcap,qe=!!I,tt=!!y.aoMap,lt=!!y.lightMap,He=!!y.bumpMap,Pt=!!y.normalMap,D=!!y.displacementMap,It=!!y.emissiveMap,et=!!y.metalnessMap,dt=!!y.roughnessMap,Te=y.anisotropy>0,b=y.clearcoat>0,M=y.dispersion>0,U=y.iridescence>0,Q=y.sheen>0,te=y.transmission>0,Z=Te&&!!y.anisotropyMap,xe=b&&!!y.clearcoatMap,le=b&&!!y.clearcoatNormalMap,Re=b&&!!y.clearcoatRoughnessMap,De=U&&!!y.iridescenceMap,ie=U&&!!y.iridescenceThicknessMap,ae=Q&&!!y.sheenColorMap,ye=Q&&!!y.sheenRoughnessMap,Me=!!y.specularMap,pe=!!y.specularColorMap,Ve=!!y.specularIntensityMap,N=te&&!!y.transmissionMap,ce=te&&!!y.thicknessMap,oe=!!y.gradientMap,_e=!!y.alphaMap,re=y.alphaTest>0,K=!!y.alphaHash,Se=!!y.extensions;let Ue=ki;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const ht={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:ve,fragmentShader:Ce,defines:y.defines,customVertexShaderID:Ie,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Pe,batchingColor:Pe&&O._colorsTexture!==null,instancing:ke,instancingColor:ke&&O.instanceColor!==null,instancingMorph:ke&&O.morphTexture!==null,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ka,alphaToCoverage:!!y.alphaToCoverage,map:Le,matcap:Gt,envMap:qe,envMapMode:qe&&I.mapping,envMapCubeUVHeight:B,aoMap:tt,lightMap:lt,bumpMap:He,normalMap:Pt,displacementMap:D,emissiveMap:It,normalMapObjectSpace:Pt&&y.normalMapType===hT,normalMapTangentSpace:Pt&&y.normalMapType===fy,metalnessMap:et,roughnessMap:dt,anisotropy:Te,anisotropyMap:Z,clearcoat:b,clearcoatMap:xe,clearcoatNormalMap:le,clearcoatRoughnessMap:Re,dispersion:M,iridescence:U,iridescenceMap:De,iridescenceThicknessMap:ie,sheen:Q,sheenColorMap:ae,sheenRoughnessMap:ye,specularMap:Me,specularColorMap:pe,specularIntensityMap:Ve,transmission:te,transmissionMap:N,thicknessMap:ce,gradientMap:oe,opaque:y.transparent===!1&&y.blending===Ua&&y.alphaToCoverage===!1,alphaMap:_e,alphaTest:re,alphaHash:K,combine:y.combine,mapUv:Le&&m(y.map.channel),aoMapUv:tt&&m(y.aoMap.channel),lightMapUv:lt&&m(y.lightMap.channel),bumpMapUv:He&&m(y.bumpMap.channel),normalMapUv:Pt&&m(y.normalMap.channel),displacementMapUv:D&&m(y.displacementMap.channel),emissiveMapUv:It&&m(y.emissiveMap.channel),metalnessMapUv:et&&m(y.metalnessMap.channel),roughnessMapUv:dt&&m(y.roughnessMap.channel),anisotropyMapUv:Z&&m(y.anisotropyMap.channel),clearcoatMapUv:xe&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&m(y.sheenRoughnessMap.channel),specularMapUv:Me&&m(y.specularMap.channel),specularColorMapUv:pe&&m(y.specularColorMap.channel),specularIntensityMapUv:Ve&&m(y.specularIntensityMap.channel),transmissionMapUv:N&&m(y.transmissionMap.channel),thicknessMapUv:ce&&m(y.thicknessMap.channel),alphaMapUv:_e&&m(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Pt||Te),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(Le||_e),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||X.attributes.normal===void 0&&Pt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ue,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ee,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Le&&y.map.isVideoTexture===!0&&$e.getTransfer(y.map.colorSpace)===it,decodeVideoTextureEmissive:It&&y.emissiveMap.isVideoTexture===!0&&$e.getTransfer(y.emissiveMap.colorSpace)===it,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===nr,flipSided:y.side===bn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Se&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&y.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function _(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)T.push(L),T.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(d(T,y),g(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function d(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function g(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const T=p[y.type];let L;if(T){const R=Pi[T];L=ZT.clone(R.uniforms)}else L=y.uniforms;return L}function S(y,T){let L=u.get(T);return L!==void 0?++L.usedTimes:(L=new CR(n,T,y,r),c.push(L),u.set(T,L)),L}function E(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:x,acquireProgram:S,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:A}}function LR(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function NR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function e_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function t_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,m,v,_,d){let g=n[e];return g===void 0?(g={id:f.id,object:f,geometry:p,material:m,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:_,group:d},n[e]=g):(g.id=f.id,g.object=f,g.geometry=p,g.material=m,g.materialVariant=a(f),g.groupOrder=v,g.renderOrder=f.renderOrder,g.z=_,g.group=d),e++,g}function l(f,p,m,v,_,d){const g=o(f,p,m,v,_,d);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):t.push(g)}function c(f,p,m,v,_,d){const g=o(f,p,m,v,_,d);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function u(f,p){t.length>1&&t.sort(f||NR),i.length>1&&i.sort(p||e_),r.length>1&&r.sort(p||e_)}function h(){for(let f=e,p=n.length;f<p;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function IR(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new t_,n.set(i,[a])):r>=s.length?(a=new t_,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function UR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Je};break;case"SpotLight":t={position:new V,direction:new V,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function FR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let OR=0;function kR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function zR(n){const e=new UR,t=FR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new _t,a=new _t;function o(c){let u=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,m=0,v=0,_=0,d=0,g=0,x=0,S=0,E=0,w=0,A=0;c.sort(kR);for(let T=0,L=c.length;T<L;T++){const R=c[T],O=R.color,F=R.intensity,X=R.distance;let z=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===$a?z=R.shadow.map.texture:z=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=O.r*F,h+=O.g*F,f+=O.b*F;else if(R.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(R.sh.coefficients[H],F);A++}else if(R.isDirectionalLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const I=R.shadow,B=t.get(R);B.shadowIntensity=I.intensity,B.shadowBias=I.bias,B.shadowNormalBias=I.normalBias,B.shadowRadius=I.radius,B.shadowMapSize=I.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=R.shadow.matrix,g++}i.directional[p]=H,p++}else if(R.isSpotLight){const H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(O).multiplyScalar(F),H.distance=X,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,i.spot[v]=H;const I=R.shadow;if(R.map&&(i.spotLightMap[E]=R.map,E++,I.updateMatrices(R),R.castShadow&&w++),i.spotLightMatrix[v]=I.matrix,R.castShadow){const B=t.get(R);B.shadowIntensity=I.intensity,B.shadowBias=I.bias,B.shadowNormalBias=I.normalBias,B.shadowRadius=I.radius,B.shadowMapSize=I.mapSize,i.spotShadow[v]=B,i.spotShadowMap[v]=z,S++}v++}else if(R.isRectAreaLight){const H=e.get(R);H.color.copy(O).multiplyScalar(F),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),i.rectArea[_]=H,_++}else if(R.isPointLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const I=R.shadow,B=t.get(R);B.shadowIntensity=I.intensity,B.shadowBias=I.bias,B.shadowNormalBias=I.normalBias,B.shadowRadius=I.radius,B.shadowMapSize=I.mapSize,B.shadowCameraNear=I.camera.near,B.shadowCameraFar=I.camera.far,i.pointShadow[m]=B,i.pointShadowMap[m]=z,i.pointShadowMatrix[m]=R.shadow.matrix,x++}i.point[m]=H,m++}else if(R.isHemisphereLight){const H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(F),H.groundColor.copy(R.groundColor).multiplyScalar(F),i.hemi[d]=H,d++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==p||y.pointLength!==m||y.spotLength!==v||y.rectAreaLength!==_||y.hemiLength!==d||y.numDirectionalShadows!==g||y.numPointShadows!==x||y.numSpotShadows!==S||y.numSpotMaps!==E||y.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=_,i.point.length=m,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,y.directionalLength=p,y.pointLength=m,y.spotLength=v,y.rectAreaLength=_,y.hemiLength=d,y.numDirectionalShadows=g,y.numPointShadows=x,y.numSpotShadows=S,y.numSpotMaps=E,y.numLightProbes=A,i.version=OR++)}function l(c,u){let h=0,f=0,p=0,m=0,v=0;const _=u.matrixWorldInverse;for(let d=0,g=c.length;d<g;d++){const x=c[d];if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),h++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),p++}else if(x.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),a.identity(),s.copy(x.matrixWorld),s.premultiply(_),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),f++}else if(x.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(_),v++}}}return{setup:o,setupView:l,state:i}}function n_(n){const e=new zR(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function BR(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new n_(n),e.set(r,[o])):s>=a.length?(o=new n_(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const HR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,GR=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],WR=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],i_=new _t,To=new V,ed=new V;function XR(n,e,t){let i=new _m;const r=new Fe,s=new Fe,a=new bt,o=new tw,l=new nw,c={},u=t.maxTextureSize,h={[es]:bn,[bn]:es,[nr]:nr},f=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:HR,fragmentShader:VR}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new xr;m.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new oi(m,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let d=this.type;this.render=function(w,A,y){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;this.type===WE&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Nc);const T=n.getRenderTarget(),L=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),O=n.state;O.setBlending(or),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=d!==this.type;F&&A.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(z=>z.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,z=w.length;X<z;X++){const H=w[X],I=H.shadow;if(I===void 0){Ne("WebGLShadowMap:",H,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const B=I.getFrameExtents();r.multiply(B),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/B.x),r.x=s.x*B.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/B.y),r.y=s.y*B.y,I.mapSize.y=s.y));const j=n.state.buffers.depth.getReversed();if(I.camera._reversedDepth=j,I.map===null||F===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Po){if(H.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new zi(r.x,r.y,{format:$a,type:pr,minFilter:fn,magFilter:fn,generateMipmaps:!1}),I.map.texture.name=H.name+".shadowMap",I.map.depthTexture=new dl(r.x,r.y,Ni),I.map.depthTexture.name=H.name+".shadowMapDepth",I.map.depthTexture.format=mr,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Qt,I.map.depthTexture.magFilter=Qt}else H.isPointLight?(I.map=new Ey(r.x),I.map.depthTexture=new $T(r.x,Hi)):(I.map=new zi(r.x,r.y),I.map.depthTexture=new dl(r.x,r.y,Hi)),I.map.depthTexture.name=H.name+".shadowMap",I.map.depthTexture.format=mr,this.type===Nc?(I.map.depthTexture.compareFunction=j?fm:um,I.map.depthTexture.minFilter=fn,I.map.depthTexture.magFilter=fn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Qt,I.map.depthTexture.magFilter=Qt);I.camera.updateProjectionMatrix()}const J=I.map.isWebGLCubeRenderTarget?6:1;for(let $=0;$<J;$++){if(I.map.isWebGLCubeRenderTarget)n.setRenderTarget(I.map,$),n.clear();else{$===0&&(n.setRenderTarget(I.map),n.clear());const ee=I.getViewport($);a.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),O.viewport(a)}if(H.isPointLight){const ee=I.camera,ve=I.matrix,Ce=H.distance||ee.far;Ce!==ee.far&&(ee.far=Ce,ee.updateProjectionMatrix()),To.setFromMatrixPosition(H.matrixWorld),ee.position.copy(To),ed.copy(ee.position),ed.add(GR[$]),ee.up.copy(WR[$]),ee.lookAt(ed),ee.updateMatrixWorld(),ve.makeTranslation(-To.x,-To.y,-To.z),i_.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),I._frustum.setFromProjectionMatrix(i_,ee.coordinateSystem,ee.reversedDepth)}else I.updateMatrices(H);i=I.getFrustum(),S(A,y,I.camera,H,this.type)}I.isPointLightShadow!==!0&&this.type===Po&&g(I,y),I.needsUpdate=!1}d=this.type,_.needsUpdate=!1,n.setRenderTarget(T,L,R)};function g(w,A){const y=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new zi(r.x,r.y,{format:$a,type:pr})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,y,f,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,y,p,v,null)}function x(w,A,y,T){let L=null;const R=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)L=R;else if(L=y.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=L.uuid,F=A.uuid;let X=c[O];X===void 0&&(X={},c[O]=X);let z=X[F];z===void 0&&(z=L.clone(),X[F]=z,A.addEventListener("dispose",E)),L=z}if(L.visible=A.visible,L.wireframe=A.wireframe,T===Po?L.side=A.shadowSide!==null?A.shadowSide:A.side:L.side=A.shadowSide!==null?A.shadowSide:h[A.side],L.alphaMap=A.alphaMap,L.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,L.map=A.map,L.clipShadows=A.clipShadows,L.clippingPlanes=A.clippingPlanes,L.clipIntersection=A.clipIntersection,L.displacementMap=A.displacementMap,L.displacementScale=A.displacementScale,L.displacementBias=A.displacementBias,L.wireframeLinewidth=A.wireframeLinewidth,L.linewidth=A.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const O=n.properties.get(L);O.light=y}return L}function S(w,A,y,T,L){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Po)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const F=e.update(w),X=w.material;if(Array.isArray(X)){const z=F.groups;for(let H=0,I=z.length;H<I;H++){const B=z[H],j=X[B.materialIndex];if(j&&j.visible){const J=x(w,j,T,L);w.onBeforeShadow(n,w,A,y,F,J,B),n.renderBufferDirect(y,null,F,J,w,B),w.onAfterShadow(n,w,A,y,F,J,B)}}}else if(X.visible){const z=x(w,X,T,L);w.onBeforeShadow(n,w,A,y,F,z,null),n.renderBufferDirect(y,null,F,z,w,null),w.onAfterShadow(n,w,A,y,F,z,null)}}const O=w.children;for(let F=0,X=O.length;F<X;F++)S(O[F],A,y,T,L)}function E(w){w.target.removeEventListener("dispose",E);for(const y in c){const T=c[y],L=w.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}function jR(n,e){function t(){let N=!1;const ce=new bt;let oe=null;const _e=new bt(0,0,0,0);return{setMask:function(re){oe!==re&&!N&&(n.colorMask(re,re,re,re),oe=re)},setLocked:function(re){N=re},setClear:function(re,K,Se,Ue,ht){ht===!0&&(re*=Ue,K*=Ue,Se*=Ue),ce.set(re,K,Se,Ue),_e.equals(ce)===!1&&(n.clearColor(re,K,Se,Ue),_e.copy(ce))},reset:function(){N=!1,oe=null,_e.set(-1,0,0,0)}}}function i(){let N=!1,ce=!1,oe=null,_e=null,re=null;return{setReversed:function(K){if(ce!==K){const Se=e.get("EXT_clip_control");K?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ce=K;const Ue=re;re=null,this.setClear(Ue)}},getReversed:function(){return ce},setTest:function(K){K?se(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(K){oe!==K&&!N&&(n.depthMask(K),oe=K)},setFunc:function(K){if(ce&&(K=ET[K]),_e!==K){switch(K){case rh:n.depthFunc(n.NEVER);break;case sh:n.depthFunc(n.ALWAYS);break;case ah:n.depthFunc(n.LESS);break;case qa:n.depthFunc(n.LEQUAL);break;case oh:n.depthFunc(n.EQUAL);break;case lh:n.depthFunc(n.GEQUAL);break;case ch:n.depthFunc(n.GREATER);break;case uh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=K}},setLocked:function(K){N=K},setClear:function(K){re!==K&&(re=K,ce&&(K=1-K),n.clearDepth(K))},reset:function(){N=!1,oe=null,_e=null,re=null,ce=!1}}}function r(){let N=!1,ce=null,oe=null,_e=null,re=null,K=null,Se=null,Ue=null,ht=null;return{setTest:function(nt){N||(nt?se(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(nt){ce!==nt&&!N&&(n.stencilMask(nt),ce=nt)},setFunc:function(nt,Xi,ji){(oe!==nt||_e!==Xi||re!==ji)&&(n.stencilFunc(nt,Xi,ji),oe=nt,_e=Xi,re=ji)},setOp:function(nt,Xi,ji){(K!==nt||Se!==Xi||Ue!==ji)&&(n.stencilOp(nt,Xi,ji),K=nt,Se=Xi,Ue=ji)},setLocked:function(nt){N=nt},setClear:function(nt){ht!==nt&&(n.clearStencil(nt),ht=nt)},reset:function(){N=!1,ce=null,oe=null,_e=null,re=null,K=null,Se=null,Ue=null,ht=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],m=null,v=!1,_=null,d=null,g=null,x=null,S=null,E=null,w=null,A=new Je(0,0,0),y=0,T=!1,L=null,R=null,O=null,F=null,X=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,I=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(B)[1]),H=I>=1):B.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),H=I>=2);let j=null,J={};const $=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),ve=new bt().fromArray($),Ce=new bt().fromArray(ee);function Ie(N,ce,oe,_e){const re=new Uint8Array(4),K=n.createTexture();n.bindTexture(N,K),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<oe;Se++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(ce+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return K}const Y={};Y[n.TEXTURE_2D]=Ie(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=Ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=Ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=Ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(n.DEPTH_TEST),a.setFunc(qa),He(!1),Pt(i0),se(n.CULL_FACE),tt(or);function se(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function ue(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function ke(N,ce){return h[N]!==ce?(n.bindFramebuffer(N,ce),h[N]=ce,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ce),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function Pe(N,ce){let oe=p,_e=!1;if(N){oe=f.get(ce),oe===void 0&&(oe=[],f.set(ce,oe));const re=N.textures;if(oe.length!==re.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let K=0,Se=re.length;K<Se;K++)oe[K]=n.COLOR_ATTACHMENT0+K;oe.length=re.length,_e=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,_e=!0);_e&&n.drawBuffers(oe)}function Le(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const Gt={[Es]:n.FUNC_ADD,[jE]:n.FUNC_SUBTRACT,[qE]:n.FUNC_REVERSE_SUBTRACT};Gt[YE]=n.MIN,Gt[$E]=n.MAX;const qe={[KE]:n.ZERO,[ZE]:n.ONE,[QE]:n.SRC_COLOR,[nh]:n.SRC_ALPHA,[rT]:n.SRC_ALPHA_SATURATE,[nT]:n.DST_COLOR,[eT]:n.DST_ALPHA,[JE]:n.ONE_MINUS_SRC_COLOR,[ih]:n.ONE_MINUS_SRC_ALPHA,[iT]:n.ONE_MINUS_DST_COLOR,[tT]:n.ONE_MINUS_DST_ALPHA,[sT]:n.CONSTANT_COLOR,[aT]:n.ONE_MINUS_CONSTANT_COLOR,[oT]:n.CONSTANT_ALPHA,[lT]:n.ONE_MINUS_CONSTANT_ALPHA};function tt(N,ce,oe,_e,re,K,Se,Ue,ht,nt){if(N===or){v===!0&&(ue(n.BLEND),v=!1);return}if(v===!1&&(se(n.BLEND),v=!0),N!==XE){if(N!==_||nt!==T){if((d!==Es||S!==Es)&&(n.blendEquation(n.FUNC_ADD),d=Es,S=Es),nt)switch(N){case Ua:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case r0:n.blendFunc(n.ONE,n.ONE);break;case s0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case a0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ye("WebGLState: Invalid blending: ",N);break}else switch(N){case Ua:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case r0:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case s0:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case a0:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",N);break}g=null,x=null,E=null,w=null,A.set(0,0,0),y=0,_=N,T=nt}return}re=re||ce,K=K||oe,Se=Se||_e,(ce!==d||re!==S)&&(n.blendEquationSeparate(Gt[ce],Gt[re]),d=ce,S=re),(oe!==g||_e!==x||K!==E||Se!==w)&&(n.blendFuncSeparate(qe[oe],qe[_e],qe[K],qe[Se]),g=oe,x=_e,E=K,w=Se),(Ue.equals(A)===!1||ht!==y)&&(n.blendColor(Ue.r,Ue.g,Ue.b,ht),A.copy(Ue),y=ht),_=N,T=!1}function lt(N,ce){N.side===nr?ue(n.CULL_FACE):se(n.CULL_FACE);let oe=N.side===bn;ce&&(oe=!oe),He(oe),N.blending===Ua&&N.transparent===!1?tt(or):tt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const _e=N.stencilWrite;o.setTest(_e),_e&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),It(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(N){L!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),L=N)}function Pt(N){N!==VE?(se(n.CULL_FACE),N!==R&&(N===i0?n.cullFace(n.BACK):N===GE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),R=N}function D(N){N!==O&&(H&&n.lineWidth(N),O=N)}function It(N,ce,oe){N?(se(n.POLYGON_OFFSET_FILL),(F!==ce||X!==oe)&&(F=ce,X=oe,a.getReversed()&&(ce=-ce),n.polygonOffset(ce,oe))):ue(n.POLYGON_OFFSET_FILL)}function et(N){N?se(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function dt(N){N===void 0&&(N=n.TEXTURE0+z-1),j!==N&&(n.activeTexture(N),j=N)}function Te(N,ce,oe){oe===void 0&&(j===null?oe=n.TEXTURE0+z-1:oe=j);let _e=J[oe];_e===void 0&&(_e={type:void 0,texture:void 0},J[oe]=_e),(_e.type!==N||_e.texture!==ce)&&(j!==oe&&(n.activeTexture(oe),j=oe),n.bindTexture(N,ce||Y[N]),_e.type=N,_e.texture=ce)}function b(){const N=J[j];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function Q(){try{n.texSubImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function te(){try{n.texSubImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function le(){try{n.texStorage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function Re(){try{n.texStorage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function De(){try{n.texImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function ie(){try{n.texImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function ae(N){ve.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ve.copy(N))}function ye(N){Ce.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Ce.copy(N))}function Me(N,ce){let oe=c.get(ce);oe===void 0&&(oe=new WeakMap,c.set(ce,oe));let _e=oe.get(N);_e===void 0&&(_e=n.getUniformBlockIndex(ce,N.name),oe.set(N,_e))}function pe(N,ce){const _e=c.get(ce).get(N);l.get(ce)!==_e&&(n.uniformBlockBinding(ce,_e,N.__bindingPointIndex),l.set(ce,_e))}function Ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},j=null,J={},h={},f=new WeakMap,p=[],m=null,v=!1,_=null,d=null,g=null,x=null,S=null,E=null,w=null,A=new Je(0,0,0),y=0,T=!1,L=null,R=null,O=null,F=null,X=null,ve.set(0,0,n.canvas.width,n.canvas.height),Ce.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:ue,bindFramebuffer:ke,drawBuffers:Pe,useProgram:Le,setBlending:tt,setMaterial:lt,setFlipSided:He,setCullFace:Pt,setLineWidth:D,setPolygonOffset:It,setScissorTest:et,activeTexture:dt,bindTexture:Te,unbindTexture:b,compressedTexImage2D:M,compressedTexImage3D:U,texImage2D:De,texImage3D:ie,updateUBOMapping:Me,uniformBlockBinding:pe,texStorage2D:le,texStorage3D:Re,texSubImage2D:Q,texSubImage3D:te,compressedTexSubImage2D:Z,compressedTexSubImage3D:xe,scissor:ae,viewport:ye,reset:Ve}}function qR(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,M){return p?new OffscreenCanvas(b,M):pu("canvas")}function v(b,M,U){let Q=1;const te=Te(b);if((te.width>U||te.height>U)&&(Q=U/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor(Q*te.width),xe=Math.floor(Q*te.height);h===void 0&&(h=m(Z,xe));const le=M?m(Z,xe):h;return le.width=Z,le.height=xe,le.getContext("2d").drawImage(b,0,0,Z,xe),Ne("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+xe+")."),le}else return"data"in b&&Ne("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),b;return b}function _(b){return b.generateMipmaps}function d(b){n.generateMipmap(b)}function g(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(b,M,U,Q,te=!1){if(b!==null){if(n[b]!==void 0)return n[b];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=M;if(M===n.RED&&(U===n.FLOAT&&(Z=n.R32F),U===n.HALF_FLOAT&&(Z=n.R16F),U===n.UNSIGNED_BYTE&&(Z=n.R8)),M===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.R8UI),U===n.UNSIGNED_SHORT&&(Z=n.R16UI),U===n.UNSIGNED_INT&&(Z=n.R32UI),U===n.BYTE&&(Z=n.R8I),U===n.SHORT&&(Z=n.R16I),U===n.INT&&(Z=n.R32I)),M===n.RG&&(U===n.FLOAT&&(Z=n.RG32F),U===n.HALF_FLOAT&&(Z=n.RG16F),U===n.UNSIGNED_BYTE&&(Z=n.RG8)),M===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.RG8UI),U===n.UNSIGNED_SHORT&&(Z=n.RG16UI),U===n.UNSIGNED_INT&&(Z=n.RG32UI),U===n.BYTE&&(Z=n.RG8I),U===n.SHORT&&(Z=n.RG16I),U===n.INT&&(Z=n.RG32I)),M===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),U===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),U===n.UNSIGNED_INT&&(Z=n.RGB32UI),U===n.BYTE&&(Z=n.RGB8I),U===n.SHORT&&(Z=n.RGB16I),U===n.INT&&(Z=n.RGB32I)),M===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),U===n.UNSIGNED_INT&&(Z=n.RGBA32UI),U===n.BYTE&&(Z=n.RGBA8I),U===n.SHORT&&(Z=n.RGBA16I),U===n.INT&&(Z=n.RGBA32I)),M===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),M===n.RGBA){const xe=te?hu:$e.getTransfer(Q);U===n.FLOAT&&(Z=n.RGBA32F),U===n.HALF_FLOAT&&(Z=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Z=xe===it?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(b,M){let U;return b?M===null||M===Hi||M===ul?U=n.DEPTH24_STENCIL8:M===Ni?U=n.DEPTH32F_STENCIL8:M===cl&&(U=n.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Hi||M===ul?U=n.DEPTH_COMPONENT24:M===Ni?U=n.DEPTH_COMPONENT32F:M===cl&&(U=n.DEPTH_COMPONENT16),U}function E(b,M){return _(b)===!0||b.isFramebufferTexture&&b.minFilter!==Qt&&b.minFilter!==fn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function w(b){const M=b.target;M.removeEventListener("dispose",w),y(M),M.isVideoTexture&&u.delete(M)}function A(b){const M=b.target;M.removeEventListener("dispose",A),L(M)}function y(b){const M=i.get(b);if(M.__webglInit===void 0)return;const U=b.source,Q=f.get(U);if(Q){const te=Q[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(b),Object.keys(Q).length===0&&f.delete(U)}i.remove(b)}function T(b){const M=i.get(b);n.deleteTexture(M.__webglTexture);const U=b.source,Q=f.get(U);delete Q[M.__cacheKey],a.memory.textures--}function L(b){const M=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let te=0;te<M.__webglFramebuffer[Q].length;te++)n.deleteFramebuffer(M.__webglFramebuffer[Q][te]);else n.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[Q]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const U=b.textures;for(let Q=0,te=U.length;Q<te;Q++){const Z=i.get(U[Q]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(U[Q])}i.remove(b)}let R=0;function O(){R=0}function F(){const b=R;return b>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),R+=1,b}function X(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function z(b,M){const U=i.get(b);if(b.isVideoTexture&&et(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&U.__version!==b.version){const Q=b.image;if(Q===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(U,b,M);return}}else b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+M)}function H(b,M){const U=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){Y(U,b,M);return}else b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+M)}function I(b,M){const U=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){Y(U,b,M);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+M)}function B(b,M){const U=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&U.__version!==b.version){se(U,b,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+M)}const j={[fh]:n.REPEAT,[sr]:n.CLAMP_TO_EDGE,[dh]:n.MIRRORED_REPEAT},J={[Qt]:n.NEAREST,[fT]:n.NEAREST_MIPMAP_NEAREST,[$l]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[Tf]:n.LINEAR_MIPMAP_NEAREST,[bs]:n.LINEAR_MIPMAP_LINEAR},$={[pT]:n.NEVER,[xT]:n.ALWAYS,[mT]:n.LESS,[um]:n.LEQUAL,[gT]:n.EQUAL,[fm]:n.GEQUAL,[_T]:n.GREATER,[vT]:n.NOTEQUAL};function ee(b,M){if(M.type===Ni&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===fn||M.magFilter===Tf||M.magFilter===$l||M.magFilter===bs||M.minFilter===fn||M.minFilter===Tf||M.minFilter===$l||M.minFilter===bs)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,j[M.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,j[M.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,j[M.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,J[M.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,J[M.minFilter]),M.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,$[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Qt||M.minFilter!==$l&&M.minFilter!==bs||M.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ve(b,M){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",w));const Q=M.source;let te=f.get(Q);te===void 0&&(te={},f.set(Q,te));const Z=X(M);if(Z!==b.__cacheKey){te[Z]===void 0&&(te[Z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),te[Z].usedTimes++;const xe=te[b.__cacheKey];xe!==void 0&&(te[b.__cacheKey].usedTimes--,xe.usedTimes===0&&T(M)),b.__cacheKey=Z,b.__webglTexture=te[Z].texture}return U}function Ce(b,M,U){return Math.floor(Math.floor(b/U)/M)}function Ie(b,M,U,Q){const Z=b.updateRanges;if(Z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,U,Q,M.data);else{Z.sort((ie,ae)=>ie.start-ae.start);let xe=0;for(let ie=1;ie<Z.length;ie++){const ae=Z[xe],ye=Z[ie],Me=ae.start+ae.count,pe=Ce(ye.start,M.width,4),Ve=Ce(ae.start,M.width,4);ye.start<=Me+1&&pe===Ve&&Ce(ye.start+ye.count-1,M.width,4)===pe?ae.count=Math.max(ae.count,ye.start+ye.count-ae.start):(++xe,Z[xe]=ye)}Z.length=xe+1;const le=n.getParameter(n.UNPACK_ROW_LENGTH),Re=n.getParameter(n.UNPACK_SKIP_PIXELS),De=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let ie=0,ae=Z.length;ie<ae;ie++){const ye=Z[ie],Me=Math.floor(ye.start/4),pe=Math.ceil(ye.count/4),Ve=Me%M.width,N=Math.floor(Me/M.width),ce=pe,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,Ve,N,ce,oe,U,Q,M.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,le),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function Y(b,M,U){let Q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=n.TEXTURE_3D);const te=ve(b,M),Z=M.source;t.bindTexture(Q,b.__webglTexture,n.TEXTURE0+U);const xe=i.get(Z);if(Z.version!==xe.__version||te===!0){t.activeTexture(n.TEXTURE0+U);const le=$e.getPrimaries($e.workingColorSpace),Re=M.colorSpace===Ir?null:$e.getPrimaries(M.colorSpace),De=M.colorSpace===Ir||le===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ie=v(M.image,!1,r.maxTextureSize);ie=dt(M,ie);const ae=s.convert(M.format,M.colorSpace),ye=s.convert(M.type);let Me=x(M.internalFormat,ae,ye,M.colorSpace,M.isVideoTexture);ee(Q,M);let pe;const Ve=M.mipmaps,N=M.isVideoTexture!==!0,ce=xe.__version===void 0||te===!0,oe=Z.dataReady,_e=E(M,ie);if(M.isDepthTexture)Me=S(M.format===Rs,M.type),ce&&(N?t.texStorage2D(n.TEXTURE_2D,1,Me,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Me,ie.width,ie.height,0,ae,ye,null));else if(M.isDataTexture)if(Ve.length>0){N&&ce&&t.texStorage2D(n.TEXTURE_2D,_e,Me,Ve[0].width,Ve[0].height);for(let re=0,K=Ve.length;re<K;re++)pe=Ve[re],N?oe&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,pe.width,pe.height,ae,ye,pe.data):t.texImage2D(n.TEXTURE_2D,re,Me,pe.width,pe.height,0,ae,ye,pe.data);M.generateMipmaps=!1}else N?(ce&&t.texStorage2D(n.TEXTURE_2D,_e,Me,ie.width,ie.height),oe&&Ie(M,ie,ae,ye)):t.texImage2D(n.TEXTURE_2D,0,Me,ie.width,ie.height,0,ae,ye,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){N&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Me,Ve[0].width,Ve[0].height,ie.depth);for(let re=0,K=Ve.length;re<K;re++)if(pe=Ve[re],M.format!==yi)if(ae!==null)if(N){if(oe)if(M.layerUpdates.size>0){const Se=I0(pe.width,pe.height,M.format,M.type);for(const Ue of M.layerUpdates){const ht=pe.data.subarray(Ue*Se/pe.data.BYTES_PER_ELEMENT,(Ue+1)*Se/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,Ue,pe.width,pe.height,1,ae,ht)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,ie.depth,ae,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Me,pe.width,pe.height,ie.depth,0,pe.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,ie.depth,ae,ye,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Me,pe.width,pe.height,ie.depth,0,ae,ye,pe.data)}else{N&&ce&&t.texStorage2D(n.TEXTURE_2D,_e,Me,Ve[0].width,Ve[0].height);for(let re=0,K=Ve.length;re<K;re++)pe=Ve[re],M.format!==yi?ae!==null?N?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,pe.width,pe.height,ae,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Me,pe.width,pe.height,0,pe.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?oe&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,pe.width,pe.height,ae,ye,pe.data):t.texImage2D(n.TEXTURE_2D,re,Me,pe.width,pe.height,0,ae,ye,pe.data)}else if(M.isDataArrayTexture)if(N){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Me,ie.width,ie.height,ie.depth),oe)if(M.layerUpdates.size>0){const re=I0(ie.width,ie.height,M.format,M.type);for(const K of M.layerUpdates){const Se=ie.data.subarray(K*re/ie.data.BYTES_PER_ELEMENT,(K+1)*re/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,ae,ye,Se)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ae,ye,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,ie.width,ie.height,ie.depth,0,ae,ye,ie.data);else if(M.isData3DTexture)N?(ce&&t.texStorage3D(n.TEXTURE_3D,_e,Me,ie.width,ie.height,ie.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ae,ye,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Me,ie.width,ie.height,ie.depth,0,ae,ye,ie.data);else if(M.isFramebufferTexture){if(ce)if(N)t.texStorage2D(n.TEXTURE_2D,_e,Me,ie.width,ie.height);else{let re=ie.width,K=ie.height;for(let Se=0;Se<_e;Se++)t.texImage2D(n.TEXTURE_2D,Se,Me,re,K,0,ae,ye,null),re>>=1,K>>=1}}else if(Ve.length>0){if(N&&ce){const re=Te(Ve[0]);t.texStorage2D(n.TEXTURE_2D,_e,Me,re.width,re.height)}for(let re=0,K=Ve.length;re<K;re++)pe=Ve[re],N?oe&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ae,ye,pe):t.texImage2D(n.TEXTURE_2D,re,Me,ae,ye,pe);M.generateMipmaps=!1}else if(N){if(ce){const re=Te(ie);t.texStorage2D(n.TEXTURE_2D,_e,Me,re.width,re.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,ye,ie)}else t.texImage2D(n.TEXTURE_2D,0,Me,ae,ye,ie);_(M)&&d(Q),xe.__version=Z.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function se(b,M,U){if(M.image.length!==6)return;const Q=ve(b,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+U);const Z=i.get(te);if(te.version!==Z.__version||Q===!0){t.activeTexture(n.TEXTURE0+U);const xe=$e.getPrimaries($e.workingColorSpace),le=M.colorSpace===Ir?null:$e.getPrimaries(M.colorSpace),Re=M.colorSpace===Ir||xe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,ae=[];for(let K=0;K<6;K++)!De&&!ie?ae[K]=v(M.image[K],!0,r.maxCubemapSize):ae[K]=ie?M.image[K].image:M.image[K],ae[K]=dt(M,ae[K]);const ye=ae[0],Me=s.convert(M.format,M.colorSpace),pe=s.convert(M.type),Ve=x(M.internalFormat,Me,pe,M.colorSpace),N=M.isVideoTexture!==!0,ce=Z.__version===void 0||Q===!0,oe=te.dataReady;let _e=E(M,ye);ee(n.TEXTURE_CUBE_MAP,M);let re;if(De){N&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Ve,ye.width,ye.height);for(let K=0;K<6;K++){re=ae[K].mipmaps;for(let Se=0;Se<re.length;Se++){const Ue=re[Se];M.format!==yi?Me!==null?N?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se,0,0,Ue.width,Ue.height,Me,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se,Ve,Ue.width,Ue.height,0,Ue.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se,0,0,Ue.width,Ue.height,Me,pe,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se,Ve,Ue.width,Ue.height,0,Me,pe,Ue.data)}}}else{if(re=M.mipmaps,N&&ce){re.length>0&&_e++;const K=Te(ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Ve,K.width,K.height)}for(let K=0;K<6;K++)if(ie){N?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ae[K].width,ae[K].height,Me,pe,ae[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ve,ae[K].width,ae[K].height,0,Me,pe,ae[K].data);for(let Se=0;Se<re.length;Se++){const ht=re[Se].image[K].image;N?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se+1,0,0,ht.width,ht.height,Me,pe,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se+1,Ve,ht.width,ht.height,0,Me,pe,ht.data)}}else{N?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Me,pe,ae[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ve,Me,pe,ae[K]);for(let Se=0;Se<re.length;Se++){const Ue=re[Se];N?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se+1,0,0,Me,pe,Ue.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se+1,Ve,Me,pe,Ue.image[K])}}}_(M)&&d(n.TEXTURE_CUBE_MAP),Z.__version=te.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ue(b,M,U,Q,te,Z){const xe=s.convert(U.format,U.colorSpace),le=s.convert(U.type),Re=x(U.internalFormat,xe,le,U.colorSpace),De=i.get(M),ie=i.get(U);if(ie.__renderTarget=M,!De.__hasExternalTextures){const ae=Math.max(1,M.width>>Z),ye=Math.max(1,M.height>>Z);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,Re,ae,ye,M.depth,0,xe,le,null):t.texImage2D(te,Z,Re,ae,ye,0,xe,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),It(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,te,ie.__webglTexture,0,D(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,te,ie.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(b,M,U){if(n.bindRenderbuffer(n.RENDERBUFFER,b),M.depthBuffer){const Q=M.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,Z=S(M.stencilBuffer,te),xe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;It(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(M),Z,M.width,M.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(M),Z,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Z,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,b)}else{const Q=M.textures;for(let te=0;te<Q.length;te++){const Z=Q[te],xe=s.convert(Z.format,Z.colorSpace),le=s.convert(Z.type),Re=x(Z.internalFormat,xe,le,Z.colorSpace);It(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(M),Re,M.width,M.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(M),Re,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Re,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(b,M,U){const Q=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(M.depthTexture);if(te.__renderTarget=M,(!te.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q){if(te.__webglInit===void 0&&(te.__webglInit=!0,M.depthTexture.addEventListener("dispose",w)),te.__webglTexture===void 0){te.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),ee(n.TEXTURE_CUBE_MAP,M.depthTexture);const De=s.convert(M.depthTexture.format),ie=s.convert(M.depthTexture.type);let ae;M.depthTexture.format===mr?ae=n.DEPTH_COMPONENT24:M.depthTexture.format===Rs&&(ae=n.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ae,M.width,M.height,0,De,ie,null)}}else z(M.depthTexture,0);const Z=te.__webglTexture,xe=D(M),le=Q?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,Re=M.depthTexture.format===Rs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===mr)It(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,le,Z,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,Re,le,Z,0);else if(M.depthTexture.format===Rs)It(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,le,Z,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,Re,le,Z,0);else throw new Error("Unknown depthTexture format")}function Le(b){const M=i.get(b),U=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const Q=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=Q}if(b.depthTexture&&!M.__autoAllocateDepthBuffer)if(U)for(let Q=0;Q<6;Q++)Pe(M.__webglFramebuffer[Q],b,Q);else{const Q=b.texture.mipmaps;Q&&Q.length>0?Pe(M.__webglFramebuffer[0],b,0):Pe(M.__webglFramebuffer,b,0)}else if(U){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=n.createRenderbuffer(),ke(M.__webglDepthbuffer[Q],b,!1);else{const te=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Z)}}else{const Q=b.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ke(M.__webglDepthbuffer,b,!1);else{const te=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Gt(b,M,U){const Q=i.get(b);M!==void 0&&ue(Q.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Le(b)}function qe(b){const M=b.texture,U=i.get(b),Q=i.get(M);b.addEventListener("dispose",A);const te=b.textures,Z=b.isWebGLCubeRenderTarget===!0,xe=te.length>1;if(xe||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=M.version,a.memory.textures++),Z){U.__webglFramebuffer=[];for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer[le]=[];for(let Re=0;Re<M.mipmaps.length;Re++)U.__webglFramebuffer[le][Re]=n.createFramebuffer()}else U.__webglFramebuffer[le]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)U.__webglFramebuffer[le]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(xe)for(let le=0,Re=te.length;le<Re;le++){const De=i.get(te[le]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&It(b)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){const Re=te[le];U.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[le]);const De=s.convert(Re.format,Re.colorSpace),ie=s.convert(Re.type),ae=x(Re.internalFormat,De,ie,Re.colorSpace,b.isXRRenderTarget===!0),ye=D(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,ae,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,U.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),ke(U.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ee(n.TEXTURE_CUBE_MAP,M);for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)ue(U.__webglFramebuffer[le][Re],b,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Re);else ue(U.__webglFramebuffer[le],b,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);_(M)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let le=0,Re=te.length;le<Re;le++){const De=te[le],ie=i.get(De);let ae=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ae=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,ie.__webglTexture),ee(ae,De),ue(U.__webglFramebuffer,b,De,n.COLOR_ATTACHMENT0+le,ae,0),_(De)&&d(ae)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(le=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Q.__webglTexture),ee(le,M),M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)ue(U.__webglFramebuffer[Re],b,M,n.COLOR_ATTACHMENT0,le,Re);else ue(U.__webglFramebuffer,b,M,n.COLOR_ATTACHMENT0,le,0);_(M)&&d(le),t.unbindTexture()}b.depthBuffer&&Le(b)}function tt(b){const M=b.textures;for(let U=0,Q=M.length;U<Q;U++){const te=M[U];if(_(te)){const Z=g(b),xe=i.get(te).__webglTexture;t.bindTexture(Z,xe),d(Z),t.unbindTexture()}}}const lt=[],He=[];function Pt(b){if(b.samples>0){if(It(b)===!1){const M=b.textures,U=b.width,Q=b.height;let te=n.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(b),le=M.length>1;if(le)for(let De=0;De<M.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Re=b.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let De=0;De<M.length;De++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[De]);const ie=i.get(M[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,U,Q,0,0,U,Q,te,n.NEAREST),l===!0&&(lt.length=0,He.length=0,lt.push(n.COLOR_ATTACHMENT0+De),b.depthBuffer&&b.resolveDepthBuffer===!1&&(lt.push(Z),He.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,He)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let De=0;De<M.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,xe.__webglColorRenderbuffer[De]);const ie=i.get(M[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const M=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function D(b){return Math.min(r.maxSamples,b.samples)}function It(b){const M=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function et(b){const M=a.render.frame;u.get(b)!==M&&(u.set(b,M),b.update())}function dt(b,M){const U=b.colorSpace,Q=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==Ka&&U!==Ir&&($e.getTransfer(U)===it?(Q!==yi||te!==Bn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",U)),M}function Te(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=I,this.setTextureCube=B,this.rebindTextures=Gt,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function YR(n,e){function t(i,r=Ir){let s;const a=$e.getTransfer(r);if(i===Bn)return n.UNSIGNED_BYTE;if(i===sm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===am)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ay)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===oy)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ry)return n.BYTE;if(i===sy)return n.SHORT;if(i===cl)return n.UNSIGNED_SHORT;if(i===rm)return n.INT;if(i===Hi)return n.UNSIGNED_INT;if(i===Ni)return n.FLOAT;if(i===pr)return n.HALF_FLOAT;if(i===ly)return n.ALPHA;if(i===cy)return n.RGB;if(i===yi)return n.RGBA;if(i===mr)return n.DEPTH_COMPONENT;if(i===Rs)return n.DEPTH_STENCIL;if(i===uy)return n.RED;if(i===om)return n.RED_INTEGER;if(i===$a)return n.RG;if(i===lm)return n.RG_INTEGER;if(i===cm)return n.RGBA_INTEGER;if(i===Ic||i===Uc||i===Fc||i===Oc)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ic)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ic)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Uc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Oc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hh||i===ph||i===mh||i===gh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ph)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_h||i===vh||i===xh||i===yh||i===Sh||i===Mh||i===Eh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_h||i===vh)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===yh)return s.COMPRESSED_R11_EAC;if(i===Sh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Mh)return s.COMPRESSED_RG11_EAC;if(i===Eh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Th||i===wh||i===Ah||i===Ch||i===bh||i===Rh||i===Ph||i===Dh||i===Lh||i===Nh||i===Ih||i===Uh||i===Fh||i===Oh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Th)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ah)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ch)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ph)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ih)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kh||i===zh||i===Bh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===kh)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hh||i===Vh||i===Gh||i===Wh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Hh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ul?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const $R=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ZR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new vy(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gi({vertexShader:$R,fragmentShader:KR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new oi(new Cl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QR extends js{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,m=null;const v=typeof XRWebGLBinding<"u",_=new ZR,d={},g=t.getContextAttributes();let x=null,S=null;const E=[],w=[],A=new Fe;let y=null;const T=new vi;T.viewport=new bt;const L=new vi;L.viewport=new bt;const R=[T,L],O=new lw;let F=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let se=E[Y];return se===void 0&&(se=new Df,E[Y]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Y){let se=E[Y];return se===void 0&&(se=new Df,E[Y]=se),se.getGripSpace()},this.getHand=function(Y){let se=E[Y];return se===void 0&&(se=new Df,E[Y]=se),se.getHandSpace()};function z(Y){const se=w.indexOf(Y.inputSource);if(se===-1)return;const ue=E[se];ue!==void 0&&(ue.update(Y.inputSource,Y.frame,c||a),ue.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",I);for(let Y=0;Y<E.length;Y++){const se=w[Y];se!==null&&(w[Y]=null,E[Y].disconnect(se))}F=null,X=null,_.reset();for(const Y in d)delete d[Y];e.setRenderTarget(x),p=null,f=null,h=null,r=null,S=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",H),r.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,ke=null,Pe=null;g.depth&&(Pe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=g.stencil?Rs:mr,ke=g.stencil?ul:Hi);const Le={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Le),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new zi(f.textureWidth,f.textureHeight,{format:yi,type:Bn,depthTexture:new dl(f.textureWidth,f.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ue={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new zi(p.framebufferWidth,p.framebufferHeight,{format:yi,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function I(Y){for(let se=0;se<Y.removed.length;se++){const ue=Y.removed[se],ke=w.indexOf(ue);ke>=0&&(w[ke]=null,E[ke].disconnect(ue))}for(let se=0;se<Y.added.length;se++){const ue=Y.added[se];let ke=w.indexOf(ue);if(ke===-1){for(let Le=0;Le<E.length;Le++)if(Le>=w.length){w.push(ue),ke=Le;break}else if(w[Le]===null){w[Le]=ue,ke=Le;break}if(ke===-1)break}const Pe=E[ke];Pe&&Pe.connect(ue)}}const B=new V,j=new V;function J(Y,se,ue){B.setFromMatrixPosition(se.matrixWorld),j.setFromMatrixPosition(ue.matrixWorld);const ke=B.distanceTo(j),Pe=se.projectionMatrix.elements,Le=ue.projectionMatrix.elements,Gt=Pe[14]/(Pe[10]-1),qe=Pe[14]/(Pe[10]+1),tt=(Pe[9]+1)/Pe[5],lt=(Pe[9]-1)/Pe[5],He=(Pe[8]-1)/Pe[0],Pt=(Le[8]+1)/Le[0],D=Gt*He,It=Gt*Pt,et=ke/(-He+Pt),dt=et*-He;if(se.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(dt),Y.translateZ(et),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pe[10]===-1)Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Te=Gt+et,b=qe+et,M=D-dt,U=It+(ke-dt),Q=tt*qe/b*Te,te=lt*qe/b*Te;Y.projectionMatrix.makePerspective(M,U,Q,te,Te,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function $(Y,se){se===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(se.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let se=Y.near,ue=Y.far;_.texture!==null&&(_.depthNear>0&&(se=_.depthNear),_.depthFar>0&&(ue=_.depthFar)),O.near=L.near=T.near=se,O.far=L.far=T.far=ue,(F!==O.near||X!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),F=O.near,X=O.far),O.layers.mask=Y.layers.mask|6,T.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;const ke=Y.parent,Pe=O.cameras;$(O,ke);for(let Le=0;Le<Pe.length;Le++)$(Pe[Le],ke);Pe.length===2?J(O,T,L):O.projectionMatrix.copy(T.projectionMatrix),ee(Y,O,ke)};function ee(Y,se,ue){ue===null?Y.matrix.copy(se.matrixWorld):(Y.matrix.copy(ue.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(se.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Xh*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(O)},this.getCameraTexture=function(Y){return d[Y]};let ve=null;function Ce(Y,se){if(u=se.getViewerPose(c||a),m=se,u!==null){const ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let ke=!1;ue.length!==O.cameras.length&&(O.cameras.length=0,ke=!0);for(let qe=0;qe<ue.length;qe++){const tt=ue[qe];let lt=null;if(p!==null)lt=p.getViewport(tt);else{const Pt=h.getViewSubImage(f,tt);lt=Pt.viewport,qe===0&&(e.setRenderTargetTextures(S,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(S))}let He=R[qe];He===void 0&&(He=new vi,He.layers.enable(qe),He.viewport=new bt,R[qe]=He),He.matrix.fromArray(tt.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(tt.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(lt.x,lt.y,lt.width,lt.height),qe===0&&(O.matrix.copy(He.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),ke===!0&&O.cameras.push(He)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const qe=h.getDepthInformation(ue[0]);qe&&qe.isValid&&qe.texture&&_.init(qe,r.renderState)}if(Pe&&Pe.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let qe=0;qe<ue.length;qe++){const tt=ue[qe].camera;if(tt){let lt=d[tt];lt||(lt=new vy,d[tt]=lt);const He=h.getCameraImage(tt);lt.sourceTexture=He}}}}for(let ue=0;ue<E.length;ue++){const ke=w[ue],Pe=E[ue];ke!==null&&Pe!==void 0&&Pe.update(ke,se,c||a)}ve&&ve(Y,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),m=null}const Ie=new My;Ie.setAnimationLoop(Ce),this.setAnimationLoop=function(Y){ve=Y},this.dispose=function(){}}}const gs=new Vi,JR=new _t;function e2(n,e){function t(_,d){_.matrixAutoUpdate===!0&&_.updateMatrix(),d.value.copy(_.matrix)}function i(_,d){d.color.getRGB(_.fogColor.value,xy(n)),d.isFog?(_.fogNear.value=d.near,_.fogFar.value=d.far):d.isFogExp2&&(_.fogDensity.value=d.density)}function r(_,d,g,x,S){d.isMeshBasicMaterial?s(_,d):d.isMeshLambertMaterial?(s(_,d),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(_,d),h(_,d)):d.isMeshPhongMaterial?(s(_,d),u(_,d),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(_,d),f(_,d),d.isMeshPhysicalMaterial&&p(_,d,S)):d.isMeshMatcapMaterial?(s(_,d),m(_,d)):d.isMeshDepthMaterial?s(_,d):d.isMeshDistanceMaterial?(s(_,d),v(_,d)):d.isMeshNormalMaterial?s(_,d):d.isLineBasicMaterial?(a(_,d),d.isLineDashedMaterial&&o(_,d)):d.isPointsMaterial?l(_,d,g,x):d.isSpriteMaterial?c(_,d):d.isShadowMaterial?(_.color.value.copy(d.color),_.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(_,d){_.opacity.value=d.opacity,d.color&&_.diffuse.value.copy(d.color),d.emissive&&_.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.bumpMap&&(_.bumpMap.value=d.bumpMap,t(d.bumpMap,_.bumpMapTransform),_.bumpScale.value=d.bumpScale,d.side===bn&&(_.bumpScale.value*=-1)),d.normalMap&&(_.normalMap.value=d.normalMap,t(d.normalMap,_.normalMapTransform),_.normalScale.value.copy(d.normalScale),d.side===bn&&_.normalScale.value.negate()),d.displacementMap&&(_.displacementMap.value=d.displacementMap,t(d.displacementMap,_.displacementMapTransform),_.displacementScale.value=d.displacementScale,_.displacementBias.value=d.displacementBias),d.emissiveMap&&(_.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,_.emissiveMapTransform)),d.specularMap&&(_.specularMap.value=d.specularMap,t(d.specularMap,_.specularMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest);const g=e.get(d),x=g.envMap,S=g.envMapRotation;x&&(_.envMap.value=x,gs.copy(S),gs.x*=-1,gs.y*=-1,gs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),_.envMapRotation.value.setFromMatrix4(JR.makeRotationFromEuler(gs)),_.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=d.reflectivity,_.ior.value=d.ior,_.refractionRatio.value=d.refractionRatio),d.lightMap&&(_.lightMap.value=d.lightMap,_.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,_.lightMapTransform)),d.aoMap&&(_.aoMap.value=d.aoMap,_.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,_.aoMapTransform))}function a(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform))}function o(_,d){_.dashSize.value=d.dashSize,_.totalSize.value=d.dashSize+d.gapSize,_.scale.value=d.scale}function l(_,d,g,x){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.size.value=d.size*g,_.scale.value=x*.5,d.map&&(_.map.value=d.map,t(d.map,_.uvTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function c(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.rotation.value=d.rotation,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function u(_,d){_.specular.value.copy(d.specular),_.shininess.value=Math.max(d.shininess,1e-4)}function h(_,d){d.gradientMap&&(_.gradientMap.value=d.gradientMap)}function f(_,d){_.metalness.value=d.metalness,d.metalnessMap&&(_.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,_.metalnessMapTransform)),_.roughness.value=d.roughness,d.roughnessMap&&(_.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,_.roughnessMapTransform)),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)}function p(_,d,g){_.ior.value=d.ior,d.sheen>0&&(_.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),_.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(_.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,_.sheenColorMapTransform)),d.sheenRoughnessMap&&(_.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,_.sheenRoughnessMapTransform))),d.clearcoat>0&&(_.clearcoat.value=d.clearcoat,_.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(_.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,_.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(_.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===bn&&_.clearcoatNormalScale.value.negate())),d.dispersion>0&&(_.dispersion.value=d.dispersion),d.iridescence>0&&(_.iridescence.value=d.iridescence,_.iridescenceIOR.value=d.iridescenceIOR,_.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(_.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,_.iridescenceMapTransform)),d.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),d.transmission>0&&(_.transmission.value=d.transmission,_.transmissionSamplerMap.value=g.texture,_.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(_.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,_.transmissionMapTransform)),_.thickness.value=d.thickness,d.thicknessMap&&(_.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=d.attenuationDistance,_.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(_.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(_.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=d.specularIntensity,_.specularColor.value.copy(d.specularColor),d.specularColorMap&&(_.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,_.specularColorMapTransform)),d.specularIntensityMap&&(_.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,d){d.matcap&&(_.matcap.value=d.matcap)}function v(_,d){const g=e.get(d).light;_.referencePosition.value.setFromMatrixPosition(g.matrixWorld),_.nearDistance.value=g.shadow.camera.near,_.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function t2(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const S=x.program;i.uniformBlockBinding(g,S)}function c(g,x){let S=r[g.id];S===void 0&&(m(g),S=u(g),r[g.id]=S,g.addEventListener("dispose",_));const E=x.program;i.updateUBOMapping(g,E);const w=e.render.frame;s[g.id]!==w&&(f(g),s[g.id]=w)}function u(g){const x=h();g.__bindingPointIndex=x;const S=n.createBuffer(),E=g.__size,w=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,E,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function h(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const x=r[g.id],S=g.uniforms,E=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,A=S.length;w<A;w++){const y=Array.isArray(S[w])?S[w]:[S[w]];for(let T=0,L=y.length;T<L;T++){const R=y[T];if(p(R,w,T,E)===!0){const O=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let z=0;z<F.length;z++){const H=F[z],I=v(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,O+X,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,X),X+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,x,S,E){const w=g.value,A=x+"_"+S;if(E[A]===void 0)return typeof w=="number"||typeof w=="boolean"?E[A]=w:E[A]=w.clone(),!0;{const y=E[A];if(typeof w=="number"||typeof w=="boolean"){if(y!==w)return E[A]=w,!0}else if(y.equals(w)===!1)return y.copy(w),!0}return!1}function m(g){const x=g.uniforms;let S=0;const E=16;for(let A=0,y=x.length;A<y;A++){const T=Array.isArray(x[A])?x[A]:[x[A]];for(let L=0,R=T.length;L<R;L++){const O=T[L],F=Array.isArray(O.value)?O.value:[O.value];for(let X=0,z=F.length;X<z;X++){const H=F[X],I=v(H),B=S%E,j=B%I.boundary,J=B+j;S+=j,J!==0&&E-J<I.storage&&(S+=E-J),O.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=I.storage}}}const w=S%E;return w>0&&(S+=E-w),g.__size=S,g.__cache={},this}function v(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ne("WebGLRenderer: Unsupported uniform value type.",g),x}function _(g){const x=g.target;x.removeEventListener("dispose",_);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const g in r)n.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}const n2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ci=null;function i2(){return Ci===null&&(Ci=new XT(n2,16,16,$a,pr),Ci.name="DFG_LUT",Ci.minFilter=fn,Ci.magFilter=fn,Ci.wrapS=sr,Ci.wrapT=sr,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}class r2{constructor(e={}){const{canvas:t=ST(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Bn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const v=p,_=new Set([cm,lm,om]),d=new Set([Bn,Hi,cl,ul,sm,am]),g=new Uint32Array(4),x=new Int32Array(4);let S=null,E=null;const w=[],A=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let L=!1;this._outputColorSpace=ei;let R=0,O=0,F=null,X=-1,z=null;const H=new bt,I=new bt;let B=null;const j=new Je(0);let J=0,$=t.width,ee=t.height,ve=1,Ce=null,Ie=null;const Y=new bt(0,0,$,ee),se=new bt(0,0,$,ee);let ue=!1;const ke=new _m;let Pe=!1,Le=!1;const Gt=new _t,qe=new V,tt=new bt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function Pt(){return F===null?ve:1}let D=i;function It(C,k){return t.getContext(C,k)}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${im}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",ht,!1),D===null){const k="webgl2";if(D=It(k,C),D===null)throw It(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ye("WebGLRenderer: "+C.message),C}let et,dt,Te,b,M,U,Q,te,Z,xe,le,Re,De,ie,ae,ye,Me,pe,Ve,N,ce,oe,_e;function re(){et=new rb(D),et.init(),ce=new YR(D,et),dt=new KC(D,et,e,ce),Te=new jR(D,et),dt.reversedDepthBuffer&&f&&Te.buffers.depth.setReversed(!0),b=new ob(D),M=new LR,U=new qR(D,et,Te,M,dt,ce,b),Q=new ib(T),te=new dw(D),oe=new YC(D,te),Z=new sb(D,te,b,oe),xe=new cb(D,Z,te,oe,b),pe=new lb(D,dt,U),ae=new ZC(M),le=new DR(T,Q,et,dt,oe,ae),Re=new e2(T,M),De=new IR,ie=new BR(et),Me=new qC(T,Q,Te,xe,m,l),ye=new XR(T,xe,dt),_e=new t2(D,b,dt,Te),Ve=new $C(D,et,b),N=new ab(D,et,b),b.programs=le.programs,T.capabilities=dt,T.extensions=et,T.properties=M,T.renderLists=De,T.shadowMap=ye,T.state=Te,T.info=b}re(),v!==Bn&&(y=new fb(v,t.width,t.height,r,s));const K=new QR(T,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=et.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=et.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(C){C!==void 0&&(ve=C,this.setSize($,ee,!1))},this.getSize=function(C){return C.set($,ee)},this.setSize=function(C,k,q=!0){if(K.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}$=C,ee=k,t.width=Math.floor(C*ve),t.height=Math.floor(k*ve),q===!0&&(t.style.width=C+"px",t.style.height=k+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set($*ve,ee*ve).floor()},this.setDrawingBufferSize=function(C,k,q){$=C,ee=k,ve=q,t.width=Math.floor(C*q),t.height=Math.floor(k*q),this.setViewport(0,0,C,k)},this.setEffects=function(C){if(v===Bn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let k=0;k<C.length;k++)if(C[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(H)},this.getViewport=function(C){return C.copy(Y)},this.setViewport=function(C,k,q,W){C.isVector4?Y.set(C.x,C.y,C.z,C.w):Y.set(C,k,q,W),Te.viewport(H.copy(Y).multiplyScalar(ve).round())},this.getScissor=function(C){return C.copy(se)},this.setScissor=function(C,k,q,W){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,k,q,W),Te.scissor(I.copy(se).multiplyScalar(ve).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(C){Te.setScissorTest(ue=C)},this.setOpaqueSort=function(C){Ce=C},this.setTransparentSort=function(C){Ie=C},this.getClearColor=function(C){return C.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,q=!0){let W=0;if(C){let G=!1;if(F!==null){const de=F.texture.format;G=_.has(de)}if(G){const de=F.texture.type,me=d.has(de),he=Me.getClearColor(),Ee=Me.getClearAlpha(),Ae=he.r,Oe=he.g,Ge=he.b;me?(g[0]=Ae,g[1]=Oe,g[2]=Ge,g[3]=Ee,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Ae,x[1]=Oe,x[2]=Ge,x[3]=Ee,D.clearBufferiv(D.COLOR,0,x))}else W|=D.COLOR_BUFFER_BIT}k&&(W|=D.DEPTH_BUFFER_BIT),q&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),Me.dispose(),De.dispose(),ie.dispose(),M.dispose(),Q.dispose(),xe.dispose(),oe.dispose(),_e.dispose(),le.dispose(),K.dispose(),K.removeEventListener("sessionstart",zm),K.removeEventListener("sessionend",Bm),cs.stop()};function Se(C){C.preventDefault(),f0("WebGLRenderer: Context Lost."),L=!0}function Ue(){f0("WebGLRenderer: Context Restored."),L=!1;const C=b.autoReset,k=ye.enabled,q=ye.autoUpdate,W=ye.needsUpdate,G=ye.type;re(),b.autoReset=C,ye.enabled=k,ye.autoUpdate=q,ye.needsUpdate=W,ye.type=G}function ht(C){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function nt(C){const k=C.target;k.removeEventListener("dispose",nt),Xi(k)}function Xi(C){ji(C),M.remove(C)}function ji(C){const k=M.get(C).programs;k!==void 0&&(k.forEach(function(q){le.releaseProgram(q)}),C.isShaderMaterial&&le.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,q,W,G,de){k===null&&(k=lt);const me=G.isMesh&&G.matrixWorld.determinant()<0,he=LS(C,k,q,W,G);Te.setMaterial(W,me);let Ee=q.index,Ae=1;if(W.wireframe===!0){if(Ee=Z.getWireframeAttribute(q),Ee===void 0)return;Ae=2}const Oe=q.drawRange,Ge=q.attributes.position;let be=Oe.start*Ae,st=(Oe.start+Oe.count)*Ae;de!==null&&(be=Math.max(be,de.start*Ae),st=Math.min(st,(de.start+de.count)*Ae)),Ee!==null?(be=Math.max(be,0),st=Math.min(st,Ee.count)):Ge!=null&&(be=Math.max(be,0),st=Math.min(st,Ge.count));const Dt=st-be;if(Dt<0||Dt===1/0)return;oe.setup(G,W,he,q,Ee);let At,at=Ve;if(Ee!==null&&(At=te.get(Ee),at=N,at.setIndex(At)),G.isMesh)W.wireframe===!0?(Te.setLineWidth(W.wireframeLinewidth*Pt()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(G.isLine){let rn=W.linewidth;rn===void 0&&(rn=1),Te.setLineWidth(rn*Pt()),G.isLineSegments?at.setMode(D.LINES):G.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else G.isPoints?at.setMode(D.POINTS):G.isSprite&&at.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)mu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))at.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const rn=G._multiDrawStarts,we=G._multiDrawCounts,Un=G._multiDrawCount,Ze=Ee?te.get(Ee).bytesPerElement:1,ui=M.get(W).currentProgram.getUniforms();for(let Ti=0;Ti<Un;Ti++)ui.setValue(D,"_gl_DrawID",Ti),at.render(rn[Ti]/Ze,we[Ti])}else if(G.isInstancedMesh)at.renderInstances(be,Dt,G.count);else if(q.isInstancedBufferGeometry){const rn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,we=Math.min(q.instanceCount,rn);at.renderInstances(be,Dt,we)}else at.render(be,Dt)};function km(C,k,q){C.transparent===!0&&C.side===nr&&C.forceSinglePass===!1?(C.side=bn,C.needsUpdate=!0,Pl(C,k,q),C.side=es,C.needsUpdate=!0,Pl(C,k,q),C.side=nr):Pl(C,k,q)}this.compile=function(C,k,q=null){q===null&&(q=C),E=ie.get(q),E.init(k),A.push(E),q.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),C!==q&&C.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights();const W=new Set;return C.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const de=G.material;if(de)if(Array.isArray(de))for(let me=0;me<de.length;me++){const he=de[me];km(he,q,G),W.add(he)}else km(de,q,G),W.add(de)}),E=A.pop(),W},this.compileAsync=function(C,k,q=null){const W=this.compile(C,k,q);return new Promise(G=>{function de(){if(W.forEach(function(me){M.get(me).currentProgram.isReady()&&W.delete(me)}),W.size===0){G(C);return}setTimeout(de,10)}et.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let qu=null;function DS(C){qu&&qu(C)}function zm(){cs.stop()}function Bm(){cs.start()}const cs=new My;cs.setAnimationLoop(DS),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(C){qu=C,K.setAnimationLoop(C),C===null?cs.stop():cs.start()},K.addEventListener("sessionstart",zm),K.addEventListener("sessionend",Bm),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const q=K.enabled===!0&&K.isPresenting===!0,W=y!==null&&(F===null||q)&&y.begin(T,F);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,k,F),E=ie.get(C,A.length),E.init(k),A.push(E),Gt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ke.setFromProjectionMatrix(Gt,Ii,k.reversedDepth),Le=this.localClippingEnabled,Pe=ae.init(this.clippingPlanes,Le),S=De.get(C,w.length),S.init(),w.push(S),K.enabled===!0&&K.isPresenting===!0){const me=T.xr.getDepthSensingMesh();me!==null&&Yu(me,k,-1/0,T.sortObjects)}Yu(C,k,0,T.sortObjects),S.finish(),T.sortObjects===!0&&S.sort(Ce,Ie),He=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,He&&Me.addToRenderList(S,C),this.info.render.frame++,Pe===!0&&ae.beginShadows();const G=E.state.shadowsArray;if(ye.render(G,C,k),Pe===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&y.hasRenderPass())===!1){const me=S.opaque,he=S.transmissive;if(E.setupLights(),k.isArrayCamera){const Ee=k.cameras;if(he.length>0)for(let Ae=0,Oe=Ee.length;Ae<Oe;Ae++){const Ge=Ee[Ae];Vm(me,he,C,Ge)}He&&Me.render(C);for(let Ae=0,Oe=Ee.length;Ae<Oe;Ae++){const Ge=Ee[Ae];Hm(S,C,Ge,Ge.viewport)}}else he.length>0&&Vm(me,he,C,k),He&&Me.render(C),Hm(S,C,k)}F!==null&&O===0&&(U.updateMultisampleRenderTarget(F),U.updateRenderTargetMipmap(F)),W&&y.end(T),C.isScene===!0&&C.onAfterRender(T,C,k),oe.resetDefaultState(),X=-1,z=null,A.pop(),A.length>0?(E=A[A.length-1],Pe===!0&&ae.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function Yu(C,k,q,W){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ke.intersectsSprite(C)){W&&tt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Gt);const me=xe.update(C),he=C.material;he.visible&&S.push(C,me,he,q,tt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ke.intersectsObject(C))){const me=xe.update(C),he=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),tt.copy(C.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),tt.copy(me.boundingSphere.center)),tt.applyMatrix4(C.matrixWorld).applyMatrix4(Gt)),Array.isArray(he)){const Ee=me.groups;for(let Ae=0,Oe=Ee.length;Ae<Oe;Ae++){const Ge=Ee[Ae],be=he[Ge.materialIndex];be&&be.visible&&S.push(C,me,be,q,tt.z,Ge)}}else he.visible&&S.push(C,me,he,q,tt.z,null)}}const de=C.children;for(let me=0,he=de.length;me<he;me++)Yu(de[me],k,q,W)}function Hm(C,k,q,W){const{opaque:G,transmissive:de,transparent:me}=C;E.setupLightsView(q),Pe===!0&&ae.setGlobalState(T.clippingPlanes,q),W&&Te.viewport(H.copy(W)),G.length>0&&Rl(G,k,q),de.length>0&&Rl(de,k,q),me.length>0&&Rl(me,k,q),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Vm(C,k,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){const be=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new zi(1,1,{generateMipmaps:!0,type:be?pr:Bn,minFilter:bs,samples:Math.max(4,dt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const de=E.state.transmissionRenderTarget[W.id],me=W.viewport||H;de.setSize(me.z*T.transmissionResolutionScale,me.w*T.transmissionResolutionScale);const he=T.getRenderTarget(),Ee=T.getActiveCubeFace(),Ae=T.getActiveMipmapLevel();T.setRenderTarget(de),T.getClearColor(j),J=T.getClearAlpha(),J<1&&T.setClearColor(16777215,.5),T.clear(),He&&Me.render(q);const Oe=T.toneMapping;T.toneMapping=ki;const Ge=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),Pe===!0&&ae.setGlobalState(T.clippingPlanes,W),Rl(C,q,W),U.updateMultisampleRenderTarget(de),U.updateRenderTargetMipmap(de),et.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let st=0,Dt=k.length;st<Dt;st++){const At=k[st],{object:at,geometry:rn,material:we,group:Un}=At;if(we.side===nr&&at.layers.test(W.layers)){const Ze=we.side;we.side=bn,we.needsUpdate=!0,Gm(at,q,W,rn,we,Un),we.side=Ze,we.needsUpdate=!0,be=!0}}be===!0&&(U.updateMultisampleRenderTarget(de),U.updateRenderTargetMipmap(de))}T.setRenderTarget(he,Ee,Ae),T.setClearColor(j,J),Ge!==void 0&&(W.viewport=Ge),T.toneMapping=Oe}function Rl(C,k,q){const W=k.isScene===!0?k.overrideMaterial:null;for(let G=0,de=C.length;G<de;G++){const me=C[G],{object:he,geometry:Ee,group:Ae}=me;let Oe=me.material;Oe.allowOverride===!0&&W!==null&&(Oe=W),he.layers.test(q.layers)&&Gm(he,k,q,Ee,Oe,Ae)}}function Gm(C,k,q,W,G,de){C.onBeforeRender(T,k,q,W,G,de),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(T,k,q,W,C,de),G.transparent===!0&&G.side===nr&&G.forceSinglePass===!1?(G.side=bn,G.needsUpdate=!0,T.renderBufferDirect(q,k,W,G,C,de),G.side=es,G.needsUpdate=!0,T.renderBufferDirect(q,k,W,G,C,de),G.side=nr):T.renderBufferDirect(q,k,W,G,C,de),C.onAfterRender(T,k,q,W,G,de)}function Pl(C,k,q){k.isScene!==!0&&(k=lt);const W=M.get(C),G=E.state.lights,de=E.state.shadowsArray,me=G.state.version,he=le.getParameters(C,G.state,de,k,q),Ee=le.getProgramCacheKey(he);let Ae=W.programs;W.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?k.environment:null,W.fog=k.fog;const Oe=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;W.envMap=Q.get(C.envMap||W.environment,Oe),W.envMapRotation=W.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Ae===void 0&&(C.addEventListener("dispose",nt),Ae=new Map,W.programs=Ae);let Ge=Ae.get(Ee);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===me)return Xm(C,he),Ge}else he.uniforms=le.getUniforms(C),C.onBeforeCompile(he,T),Ge=le.acquireProgram(he,Ee),Ae.set(Ee,Ge),W.uniforms=he.uniforms;const be=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(be.clippingPlanes=ae.uniform),Xm(C,he),W.needsLights=IS(C),W.lightsStateVersion=me,W.needsLights&&(be.ambientLightColor.value=G.state.ambient,be.lightProbe.value=G.state.probe,be.directionalLights.value=G.state.directional,be.directionalLightShadows.value=G.state.directionalShadow,be.spotLights.value=G.state.spot,be.spotLightShadows.value=G.state.spotShadow,be.rectAreaLights.value=G.state.rectArea,be.ltc_1.value=G.state.rectAreaLTC1,be.ltc_2.value=G.state.rectAreaLTC2,be.pointLights.value=G.state.point,be.pointLightShadows.value=G.state.pointShadow,be.hemisphereLights.value=G.state.hemi,be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,be.spotLightMatrix.value=G.state.spotLightMatrix,be.spotLightMap.value=G.state.spotLightMap,be.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=Ge,W.uniformsList=null,Ge}function Wm(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=zc.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Xm(C,k){const q=M.get(C);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function LS(C,k,q,W,G){k.isScene!==!0&&(k=lt),U.resetTextureUnits();const de=k.fog,me=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?k.environment:null,he=F===null?T.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ka,Ee=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ae=Q.get(W.envMap||me,Ee),Oe=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ge=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),be=!!q.morphAttributes.position,st=!!q.morphAttributes.normal,Dt=!!q.morphAttributes.color;let At=ki;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(At=T.toneMapping);const at=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,rn=at!==void 0?at.length:0,we=M.get(W),Un=E.state.lights;if(Pe===!0&&(Le===!0||C!==z)){const Wt=C===z&&W.id===X;ae.setState(W,C,Wt)}let Ze=!1;W.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Un.state.version||we.outputColorSpace!==he||G.isBatchedMesh&&we.batching===!1||!G.isBatchedMesh&&we.batching===!0||G.isBatchedMesh&&we.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&we.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&we.instancing===!1||!G.isInstancedMesh&&we.instancing===!0||G.isSkinnedMesh&&we.skinning===!1||!G.isSkinnedMesh&&we.skinning===!0||G.isInstancedMesh&&we.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&we.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&we.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&we.instancingMorph===!1&&G.morphTexture!==null||we.envMap!==Ae||W.fog===!0&&we.fog!==de||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ae.numPlanes||we.numIntersection!==ae.numIntersection)||we.vertexAlphas!==Oe||we.vertexTangents!==Ge||we.morphTargets!==be||we.morphNormals!==st||we.morphColors!==Dt||we.toneMapping!==At||we.morphTargetsCount!==rn)&&(Ze=!0):(Ze=!0,we.__version=W.version);let ui=we.currentProgram;Ze===!0&&(ui=Pl(W,k,G));let Ti=!1,us=!1,Ys=!1;const ct=ui.getUniforms(),Kt=we.uniforms;if(Te.useProgram(ui.program)&&(Ti=!0,us=!0,Ys=!0),W.id!==X&&(X=W.id,us=!0),Ti||z!==C){Te.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ct.setValue(D,"projectionMatrix",C.projectionMatrix),ct.setValue(D,"viewMatrix",C.matrixWorldInverse);const Sr=ct.map.cameraPosition;Sr!==void 0&&Sr.setValue(D,qe.setFromMatrixPosition(C.matrixWorld)),dt.logarithmicDepthBuffer&&ct.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ct.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),z!==C&&(z=C,us=!0,Ys=!0)}if(we.needsLights&&(Un.state.directionalShadowMap.length>0&&ct.setValue(D,"directionalShadowMap",Un.state.directionalShadowMap,U),Un.state.spotShadowMap.length>0&&ct.setValue(D,"spotShadowMap",Un.state.spotShadowMap,U),Un.state.pointShadowMap.length>0&&ct.setValue(D,"pointShadowMap",Un.state.pointShadowMap,U)),G.isSkinnedMesh){ct.setOptional(D,G,"bindMatrix"),ct.setOptional(D,G,"bindMatrixInverse");const Wt=G.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),ct.setValue(D,"boneTexture",Wt.boneTexture,U))}G.isBatchedMesh&&(ct.setOptional(D,G,"batchingTexture"),ct.setValue(D,"batchingTexture",G._matricesTexture,U),ct.setOptional(D,G,"batchingIdTexture"),ct.setValue(D,"batchingIdTexture",G._indirectTexture,U),ct.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&ct.setValue(D,"batchingColorTexture",G._colorsTexture,U));const yr=q.morphAttributes;if((yr.position!==void 0||yr.normal!==void 0||yr.color!==void 0)&&pe.update(G,q,ui),(us||we.receiveShadow!==G.receiveShadow)&&(we.receiveShadow=G.receiveShadow,ct.setValue(D,"receiveShadow",G.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&k.environment!==null&&(Kt.envMapIntensity.value=k.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=i2()),us&&(ct.setValue(D,"toneMappingExposure",T.toneMappingExposure),we.needsLights&&NS(Kt,Ys),de&&W.fog===!0&&Re.refreshFogUniforms(Kt,de),Re.refreshMaterialUniforms(Kt,W,ve,ee,E.state.transmissionRenderTarget[C.id]),zc.upload(D,Wm(we),Kt,U)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(zc.upload(D,Wm(we),Kt,U),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ct.setValue(D,"center",G.center),ct.setValue(D,"modelViewMatrix",G.modelViewMatrix),ct.setValue(D,"normalMatrix",G.normalMatrix),ct.setValue(D,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Wt=W.uniformsGroups;for(let Sr=0,$s=Wt.length;Sr<$s;Sr++){const jm=Wt[Sr];_e.update(jm,ui),_e.bind(jm,ui)}}return ui}function NS(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function IS(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(C,k,q){const W=M.get(C);W.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),M.get(C.texture).__webglTexture=k,M.get(C.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:q,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,k){const q=M.get(C);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};const US=D.createFramebuffer();this.setRenderTarget=function(C,k=0,q=0){F=C,R=k,O=q;let W=null,G=!1,de=!1;if(C){const he=M.get(C);if(he.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(D.FRAMEBUFFER,he.__webglFramebuffer),H.copy(C.viewport),I.copy(C.scissor),B=C.scissorTest,Te.viewport(H),Te.scissor(I),Te.setScissorTest(B),X=-1;return}else if(he.__webglFramebuffer===void 0)U.setupRenderTarget(C);else if(he.__hasExternalTextures)U.rebindTextures(C,M.get(C.texture).__webglTexture,M.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Oe=C.depthTexture;if(he.__boundDepthTexture!==Oe){if(Oe!==null&&M.has(Oe)&&(C.width!==Oe.image.width||C.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(C)}}const Ee=C.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(de=!0);const Ae=M.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ae[k])?W=Ae[k][q]:W=Ae[k],G=!0):C.samples>0&&U.useMultisampledRTT(C)===!1?W=M.get(C).__webglMultisampledFramebuffer:Array.isArray(Ae)?W=Ae[q]:W=Ae,H.copy(C.viewport),I.copy(C.scissor),B=C.scissorTest}else H.copy(Y).multiplyScalar(ve).floor(),I.copy(se).multiplyScalar(ve).floor(),B=ue;if(q!==0&&(W=US),Te.bindFramebuffer(D.FRAMEBUFFER,W)&&Te.drawBuffers(C,W),Te.viewport(H),Te.scissor(I),Te.setScissorTest(B),G){const he=M.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,he.__webglTexture,q)}else if(de){const he=k;for(let Ee=0;Ee<C.textures.length;Ee++){const Ae=M.get(C.textures[Ee]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ee,Ae.__webglTexture,q,he)}}else if(C!==null&&q!==0){const he=M.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,he.__webglTexture,q)}X=-1},this.readRenderTargetPixels=function(C,k,q,W,G,de,me,he=0){if(!(C&&C.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee){Te.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const Ae=C.textures[he],Oe=Ae.format,Ge=Ae.type;if(C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he),!dt.textureFormatReadable(Oe)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Ge)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-W&&q>=0&&q<=C.height-G&&D.readPixels(k,q,W,G,ce.convert(Oe),ce.convert(Ge),de)}finally{const Ae=F!==null?M.get(F).__webglFramebuffer:null;Te.bindFramebuffer(D.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(C,k,q,W,G,de,me,he=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee)if(k>=0&&k<=C.width-W&&q>=0&&q<=C.height-G){Te.bindFramebuffer(D.FRAMEBUFFER,Ee);const Ae=C.textures[he],Oe=Ae.format,Ge=Ae.type;if(C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he),!dt.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,be),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),D.readPixels(k,q,W,G,ce.convert(Oe),ce.convert(Ge),0);const st=F!==null?M.get(F).__webglFramebuffer:null;Te.bindFramebuffer(D.FRAMEBUFFER,st);const Dt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await MT(D,Dt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,be),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.deleteBuffer(be),D.deleteSync(Dt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,k=null,q=0){const W=Math.pow(2,-q),G=Math.floor(C.image.width*W),de=Math.floor(C.image.height*W),me=k!==null?k.x:0,he=k!==null?k.y:0;U.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,me,he,G,de),Te.unbindTexture()};const FS=D.createFramebuffer(),OS=D.createFramebuffer();this.copyTextureToTexture=function(C,k,q=null,W=null,G=0,de=0){let me,he,Ee,Ae,Oe,Ge,be,st,Dt;const At=C.isCompressedTexture?C.mipmaps[de]:C.image;if(q!==null)me=q.max.x-q.min.x,he=q.max.y-q.min.y,Ee=q.isBox3?q.max.z-q.min.z:1,Ae=q.min.x,Oe=q.min.y,Ge=q.isBox3?q.min.z:0;else{const Kt=Math.pow(2,-G);me=Math.floor(At.width*Kt),he=Math.floor(At.height*Kt),C.isDataArrayTexture?Ee=At.depth:C.isData3DTexture?Ee=Math.floor(At.depth*Kt):Ee=1,Ae=0,Oe=0,Ge=0}W!==null?(be=W.x,st=W.y,Dt=W.z):(be=0,st=0,Dt=0);const at=ce.convert(k.format),rn=ce.convert(k.type);let we;k.isData3DTexture?(U.setTexture3D(k,0),we=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(U.setTexture2DArray(k,0),we=D.TEXTURE_2D_ARRAY):(U.setTexture2D(k,0),we=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const Un=D.getParameter(D.UNPACK_ROW_LENGTH),Ze=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ui=D.getParameter(D.UNPACK_SKIP_PIXELS),Ti=D.getParameter(D.UNPACK_SKIP_ROWS),us=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,At.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,At.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ae),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge);const Ys=C.isDataArrayTexture||C.isData3DTexture,ct=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const Kt=M.get(C),yr=M.get(k),Wt=M.get(Kt.__renderTarget),Sr=M.get(yr.__renderTarget);Te.bindFramebuffer(D.READ_FRAMEBUFFER,Wt.__webglFramebuffer),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let $s=0;$s<Ee;$s++)Ys&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,M.get(C).__webglTexture,G,Ge+$s),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,M.get(k).__webglTexture,de,Dt+$s)),D.blitFramebuffer(Ae,Oe,me,he,be,st,me,he,D.DEPTH_BUFFER_BIT,D.NEAREST);Te.bindFramebuffer(D.READ_FRAMEBUFFER,null),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||C.isRenderTargetTexture||M.has(C)){const Kt=M.get(C),yr=M.get(k);Te.bindFramebuffer(D.READ_FRAMEBUFFER,FS),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,OS);for(let Wt=0;Wt<Ee;Wt++)Ys?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Kt.__webglTexture,G,Ge+Wt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Kt.__webglTexture,G),ct?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yr.__webglTexture,de,Dt+Wt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yr.__webglTexture,de),G!==0?D.blitFramebuffer(Ae,Oe,me,he,be,st,me,he,D.COLOR_BUFFER_BIT,D.NEAREST):ct?D.copyTexSubImage3D(we,de,be,st,Dt+Wt,Ae,Oe,me,he):D.copyTexSubImage2D(we,de,be,st,Ae,Oe,me,he);Te.bindFramebuffer(D.READ_FRAMEBUFFER,null),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ct?C.isDataTexture||C.isData3DTexture?D.texSubImage3D(we,de,be,st,Dt,me,he,Ee,at,rn,At.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(we,de,be,st,Dt,me,he,Ee,at,At.data):D.texSubImage3D(we,de,be,st,Dt,me,he,Ee,at,rn,At):C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,de,be,st,me,he,at,rn,At.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,de,be,st,At.width,At.height,at,At.data):D.texSubImage2D(D.TEXTURE_2D,de,be,st,me,he,at,rn,At);D.pixelStorei(D.UNPACK_ROW_LENGTH,Un),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ze),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ui),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ti),D.pixelStorei(D.UNPACK_SKIP_IMAGES,us),de===0&&k.generateMipmaps&&D.generateMipmap(we),Te.unbindTexture()},this.initRenderTarget=function(C){M.get(C).__webglFramebuffer===void 0&&U.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?U.setTextureCube(C,0):C.isData3DTexture?U.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?U.setTexture2DArray(C,0):U.setTexture2D(C,0),Te.unbindTexture()},this.resetState=function(){R=0,O=0,F=null,Te.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const r_={type:"change"},vm={type:"start"},by={type:"end"},vc=new mm,s_=new Dr,s2=Math.cos(70*wT.DEG2RAD),kt=new V,Mn=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},td=1e-6;class a2 extends uw{constructor(e,t=null){super(e,t),this.state=ot.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ia.ROTATE,MIDDLE:Ia.DOLLY,RIGHT:Ia.PAN},this.touches={ONE:wa.ROTATE,TWO:wa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new ts,this._lastTargetPosition=new V,this._quat=new ts().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new N0,this._sphericalDelta=new N0,this._scale=1,this._panOffset=new V,this._rotateStart=new Fe,this._rotateEnd=new Fe,this._rotateDelta=new Fe,this._panStart=new Fe,this._panEnd=new Fe,this._panDelta=new Fe,this._dollyStart=new Fe,this._dollyEnd=new Fe,this._dollyDelta=new Fe,this._dollyDirection=new V,this._mouse=new Fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=l2.bind(this),this._onPointerDown=o2.bind(this),this._onPointerUp=c2.bind(this),this._onContextMenu=g2.bind(this),this._onMouseWheel=d2.bind(this),this._onKeyDown=h2.bind(this),this._onTouchStart=p2.bind(this),this._onTouchMove=m2.bind(this),this._onMouseDown=u2.bind(this),this._onMouseMove=f2.bind(this),this._interceptControlDown=_2.bind(this),this._interceptControlUp=v2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(r_),this.update(),this.state=ot.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;kt.copy(t).sub(this.target),kt.applyQuaternion(this._quat),this._spherical.setFromVector3(kt),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Mn:i>Math.PI&&(i-=Mn),r<-Math.PI?r+=Mn:r>Math.PI&&(r-=Mn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(kt.setFromSpherical(this._spherical),kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=kt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new V(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new V(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(vc.origin.copy(this.object.position),vc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vc.direction))<s2?this.object.lookAt(this.target):(s_.setFromNormalAndCoplanarPoint(this.object.up,this.target),vc.intersectPlane(s_,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>td||8*(1-this._lastQuaternion.dot(this.object.quaternion))>td||this._lastTargetPosition.distanceToSquared(this.target)>td?(this.dispatchEvent(r_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Mn/60*this.autoRotateSpeed*e:Mn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){kt.setFromMatrixColumn(t,0),kt.multiplyScalar(-e),this._panOffset.add(kt)}_panUp(e,t){this.screenSpacePanning===!0?kt.setFromMatrixColumn(t,1):(kt.setFromMatrixColumn(t,0),kt.crossVectors(this.object.up,kt)),kt.multiplyScalar(e),this._panOffset.add(kt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;kt.copy(r).sub(this.target);let s=kt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Fe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function o2(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function l2(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function c2(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(by),this.state=ot.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function u2(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ia.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ot.DOLLY;break;case Ia.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ot.ROTATE}break;case Ia.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(vm)}function f2(n){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function d2(n){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(n.preventDefault(),this.dispatchEvent(vm),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(by))}function h2(n){this.enabled!==!1&&this._handleKeyDown(n)}function p2(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case wa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ot.TOUCH_ROTATE;break;case wa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case wa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ot.TOUCH_DOLLY_PAN;break;case wa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(vm)}function m2(n){switch(this._trackPointer(n),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ot.NONE}}function g2(n){this.enabled!==!1&&n.preventDefault()}function _2(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function v2(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class x2 extends en{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Fe(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const fa=new V,a_=new _t,o_=new _t,l_=new V,c_=new V;class y2{constructor(e={}){const t=this;let i,r,s,a;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:i,height:r}},this.render=function(m,v){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),a_.copy(v.matrixWorldInverse),o_.multiplyMatrices(v.projectionMatrix,a_),u(m,m,v),this.sortObjects&&p(m)},this.setSize=function(m,v){i=m,r=v,s=i/2,a=r/2,l.style.width=m+"px",l.style.height=v+"px"};function c(m){m.isCSS2DObject&&(m.element.style.display="none");for(let v=0,_=m.children.length;v<_;v++)c(m.children[v])}function u(m,v,_){if(m.visible===!1){c(m);return}if(m.isCSS2DObject){fa.setFromMatrixPosition(m.matrixWorld),fa.applyMatrix4(o_);const d=fa.z>=-1&&fa.z<=1&&m.layers.test(_.layers)===!0,g=m.element;g.style.display=d===!0?"":"none",d===!0&&(m.onBeforeRender(t,v,_),g.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(fa.x*s+s)+"px,"+(-fa.y*a+a)+"px)",g.parentNode!==l&&l.appendChild(g),m.onAfterRender(t,v,_));const x={distanceToCameraSquared:h(_,m)};o.objects.set(m,x)}for(let d=0,g=m.children.length;d<g;d++)u(m.children[d],v,_)}function h(m,v){return l_.setFromMatrixPosition(m.matrixWorld),c_.setFromMatrixPosition(v.matrixWorld),l_.distanceToSquared(c_)}function f(m){const v=[];return m.traverseVisible(function(_){_.isCSS2DObject&&v.push(_)}),v}function p(m){const v=f(m).sort(function(d,g){if(d.renderOrder!==g.renderOrder)return g.renderOrder-d.renderOrder;const x=o.objects.get(d).distanceToCameraSquared,S=o.objects.get(g).distanceToCameraSquared;return x-S}),_=v.length;for(let d=0,g=v.length;d<g;d++)v[d].element.style.zIndex=_-d}}}function Ji(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Ry(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qa={duration:.5,overwrite:!1,delay:0},xm,tn,xt,ri=1e8,ft=1/ri,$h=Math.PI*2,S2=$h/4,M2=0,Py=Math.sqrt,E2=Math.cos,T2=Math.sin,$t=function(e){return typeof e=="string"},Rt=function(e){return typeof e=="function"},gr=function(e){return typeof e=="number"},ym=function(e){return typeof e>"u"},Wi=function(e){return typeof e=="object"},Rn=function(e){return e!==!1},Sm=function(){return typeof window<"u"},xc=function(e){return Rt(e)||$t(e)},Dy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},dn=Array.isArray,w2=/random\([^)]+\)/g,A2=/,\s*/g,u_=/(?:-?\.?\d|\.)+/gi,Ly=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Aa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ny=/[+-]=-?[.\d]+/,C2=/[^,'"\[\]\s]+/gi,b2=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Mt,Ri,Kh,Mm,Yn={},gu={},Iy,Uy=function(e){return(gu=Ja(e,Yn))&&Nn},Em=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},hl=function(e,t){return!t&&console.warn(e)},Fy=function(e,t){return e&&(Yn[e]=t)&&gu&&(gu[e]=t)||Yn},pl=function(){return 0},R2={suppressEvents:!0,isStart:!0,kill:!1},Bc={suppressEvents:!0,kill:!1},P2={suppressEvents:!0},Tm={},Kr=[],Zh={},Oy,zn={},id={},f_=30,Hc=[],wm="",Am=function(e){var t=e[0],i,r;if(Wi(t)||Rt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Hc.length;r--&&!Hc[r].targetTest(t););i=Hc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new oS(e[r],i)))||e.splice(r,1);return e},Ns=function(e){return e._gsap||Am(si(e))[0]._gsap},ky=function(e,t,i){return(i=e[t])&&Rt(i)?e[t]():ym(i)&&e.getAttribute&&e.getAttribute(t)||i},Pn=function(e,t){return(e=e.split(",")).forEach(t)||e},Lt=function(e){return Math.round(e*1e5)/1e5||0},yt=function(e){return Math.round(e*1e7)/1e7||0},Oa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},D2=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},_u=function(){var e=Kr.length,t=Kr.slice(0),i,r;for(Zh={},Kr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Cm=function(e){return!!(e._initted||e._startAt||e.add)},zy=function(e,t,i,r){Kr.length&&!tn&&_u(),e.render(t,i,!!(tn&&t<0&&Cm(e))),Kr.length&&!tn&&_u()},By=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(C2).length<2?t:$t(e)?e.trim():e},Hy=function(e){return e},$n=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},L2=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ja=function(e,t){for(var i in t)e[i]=t[i];return e},d_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Wi(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},vu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Go=function(e){var t=e.parent||Mt,i=e.keyframes?L2(dn(e.keyframes)):$n;if(Rn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},N2=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Vy=function(e,t,i,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Gu=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},ns=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Is=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},I2=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Qh=function(e,t,i,r){return e._startAt&&(tn?e._startAt.revert(Bc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},U2=function n(e){return!e||e._ts&&n(e.parent)},h_=function(e){return e._repeat?eo(e._tTime,e=e.duration()+e._rDelay)*e:0},eo=function(e,t){var i=Math.floor(e=yt(e/t));return e&&i===e?i-1:i},xu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Wu=function(e){return e._end=yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ft)||0))},Xu=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=yt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Wu(e),i._dirty||Is(i,e)),e},Gy=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=xu(e.rawTime(),t),(!t._dur||bl(0,t.totalDuration(),i)-t._tTime>ft)&&t.render(i,!0)),Is(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ft}},Li=function(e,t,i,r){return t.parent&&ns(t),t._start=yt((gr(i)?i:i||e!==Mt?Jn(e,i,t):e._time)+t._delay),t._end=yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Vy(e,t,"_first","_last",e._sort?"_start":0),Jh(t)||(e._recent=t),r||Gy(e,t),e._ts<0&&Xu(e,e._tTime),e},Wy=function(e,t){return(Yn.ScrollTrigger||Em("scrollTrigger",t))&&Yn.ScrollTrigger.create(t,e)},Xy=function(e,t,i,r,s){if(Rm(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!tn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Oy!==Hn.frame)return Kr.push(e),e._lazy=[s,r],1},F2=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Jh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},O2=function(e,t,i,r){var s=e.ratio,a=t<0||!t&&(!e._start&&F2(e)&&!(!e._initted&&Jh(e))||(e._ts<0||e._dp._ts<0)&&!Jh(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=bl(0,e._tDur,t),u=eo(l,o),e._yoyo&&u&1&&(a=1-a),u!==eo(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||tn||r||e._zTime===ft||!t&&e._zTime){if(!e._initted&&Xy(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?ft:0),i||(i=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Qh(e,t,i,!0),e._onUpdate&&!i&&Gn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Gn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ns(e,1),!i&&!tn&&(Gn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},k2=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},to=function(e,t,i,r){var s=e._repeat,a=yt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:yt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Xu(e,e._tTime=e._tDur*o),e.parent&&Wu(e),i||Is(e.parent,e),e},p_=function(e){return e instanceof gn?Is(e):to(e,e._dur)},z2={_start:0,endTime:pl,totalDuration:pl},Jn=function n(e,t,i){var r=e.labels,s=e._recent||z2,a=e.duration()>=ri?s.endTime(!1):e._dur,o,l,c;return $t(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(dn(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},Wo=function(e,t,i){var r=gr(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Rn(l.vars.inherit)&&l.parent;a.immediateRender=Rn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Ft(t[0],a,t[s+1])},ls=function(e,t){return e||e===0?t(e):t},bl=function(e,t,i){return i<e?e:i>t?t:i},un=function(e,t){return!$t(e)||!(t=b2.exec(e))?"":t[1]},B2=function(e,t,i){return ls(i,function(r){return bl(e,t,r)})},ep=[].slice,jy=function(e,t){return e&&Wi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Wi(e[0]))&&!e.nodeType&&e!==Ri},H2=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return $t(r)&&!t||jy(r,1)?(s=i).push.apply(s,si(r)):i.push(r)})||i},si=function(e,t,i){return xt&&!t&&xt.selector?xt.selector(e):$t(e)&&!i&&(Kh||!no())?ep.call((t||Mm).querySelectorAll(e),0):dn(e)?H2(e,i):jy(e)?ep.call(e,0):e?[e]:[]},tp=function(e){return e=si(e)[0]||hl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return si(t,i.querySelectorAll?i:i===e?hl("Invalid scope")||Mm.createElement("div"):e)}},qy=function(e){return e.sort(function(){return .5-Math.random()})},Yy=function(e){if(Rt(e))return e;var t=Wi(e)?e:{each:e},i=Us(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,h=r;return $t(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],h=r[1]),function(f,p,m){var v=(m||t).length,_=a[v],d,g,x,S,E,w,A,y,T;if(!_){if(T=t.grid==="auto"?0:(t.grid||[1,ri])[1],!T){for(A=-ri;A<(A=m[T++].getBoundingClientRect().left)&&T<v;);T<v&&T--}for(_=a[v]=[],d=l?Math.min(T,v)*u-.5:r%T,g=T===ri?0:l?v*h/T-.5:r/T|0,A=0,y=ri,w=0;w<v;w++)x=w%T-d,S=g-(w/T|0),_[w]=E=c?Math.abs(c==="y"?S:x):Py(x*x+S*S),E>A&&(A=E),E<y&&(y=E);r==="random"&&qy(_),_.max=A-y,_.min=y,_.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(T>v?v-1:c?c==="y"?v/T:T:Math.max(T,v/T))||0)*(r==="edges"?-1:1),_.b=v<0?s-v:s,_.u=un(t.amount||t.each)||0,i=i&&v<0?rS(i):i}return v=(_[f]-_.min)/_.max||0,yt(_.b+(i?i(v):v)*_.v)+_.u}},np=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=yt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(gr(i)?0:un(i))}},$y=function(e,t){var i=dn(e),r,s;return!i&&Wi(e)&&(r=i=e.radius||ri,e.values?(e=si(e.values),(s=!gr(e[0]))&&(r*=r)):e=np(e.increment)),ls(t,i?Rt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ri,u=0,h=e.length,f,p;h--;)s?(f=e[h].x-o,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:a,s||u===a||gr(a)?u:u+un(a)}:np(e))},Ky=function(e,t,i,r){return ls(dn(e)?!t:i===!0?!!(i=0):!r,function(){return dn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},V2=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,a){return a(s)},r)}},G2=function(e,t){return function(i){return e(parseFloat(i))+(t||un(i))}},W2=function(e,t,i){return Qy(e,t,0,1,i)},Zy=function(e,t,i){return ls(i,function(r){return e[~~t(r)]})},X2=function n(e,t,i){var r=t-e;return dn(e)?Zy(e,n(0,e.length),t):ls(i,function(s){return(r+(s-e)%r)%r+e})},j2=function n(e,t,i){var r=t-e,s=r*2;return dn(e)?Zy(e,n(0,e.length-1),t):ls(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},ml=function(e){return e.replace(w2,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(A2);return Ky(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Qy=function(e,t,i,r,s){var a=t-e,o=r-i;return ls(s,function(l){return i+((l-e)/a*o||0)})},q2=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=$t(e),o={},l,c,u,h,f;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(dn(e)&&!dn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(n(e[c-1],e[c]));h--,s=function(m){m*=h;var v=Math.min(f,~~m);return u[v](m-v)},i=t}else r||(e=Ja(dn(e)?[]:{},e));if(!u){for(l in t)bm.call(o,e,l,"get",t[l]);s=function(m){return Lm(m,o)||(a?e.p:e)}}}return ls(i,s)},m_=function(e,t,i){var r=e.labels,s=ri,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Gn=function(e,t,i){var r=e.vars,s=r[t],a=xt,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Kr.length&&_u(),o&&(xt=o),u=l?s.apply(c,l):s.call(c),xt=a,u},Lo=function(e){return ns(e),e.scrollTrigger&&e.scrollTrigger.kill(!!tn),e.progress()<1&&Gn(e,"onInterrupt"),e},Ca,Jy=[],eS=function(e){if(e)if(e=!e.name&&e.default||e,Sm()||e.headless){var t=e.name,i=Rt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:pl,render:Lm,add:bm,kill:cP,modifier:lP,rawVars:0},a={targetTest:0,get:0,getSetter:Dm,aliases:{},register:0};if(no(),e!==r){if(zn[t])return;$n(r,$n(vu(e,s),a)),Ja(r.prototype,Ja(s,vu(e,a))),zn[r.prop=t]=r,e.targetTest&&(Hc.push(r),Tm[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Fy(t,r),e.register&&e.register(Nn,r,Dn)}else Jy.push(e)},ut=255,No={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},rd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ut+.5|0},tS=function(e,t,i){var r=e?gr(e)?[e>>16,e>>8&ut,e&ut]:0:No.black,s,a,o,l,c,u,h,f,p,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),No[e])r=No[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ut,r&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(u_),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=rd(l+1/3,s,a),r[1]=rd(l,s,a),r[2]=rd(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(Ly),i&&r.length<4&&(r[3]=1),r}else r=e.match(u_)||No.transparent;r=r.map(Number)}return t&&!m&&(s=r[0]/ut,a=r[1]/ut,o=r[2]/ut,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(a-o)/p+(a<o?6:0):h===a?(o-s)/p+2:(s-a)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},nS=function(e){var t=[],i=[],r=-1;return e.split(Zr).forEach(function(s){var a=s.match(Aa)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},g_=function(e,t,i){var r="",s=(e+r).match(Zr),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=tS(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=nS(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Zr,"1").split(Aa),h=c.length-1;o<h;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Zr),h=c.length-1;o<h;o++)r+=c[o]+s[o];return r+c[h]},Zr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in No)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),Y2=/hsl[a]?\(/,iS=function(e){var t=e.join(" "),i;if(Zr.lastIndex=0,Zr.test(t))return i=Y2.test(t),e[1]=g_(e[1],i),e[0]=g_(e[0],i,nS(e[1])),!0},gl,Hn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,c,u,h,f,p,m=function v(_){var d=n()-r,g=_===!0,x,S,E,w;if((d>e||d<0)&&(i+=d-t),r+=d,E=r-i,x=E-a,(x>0||g)&&(w=++h.frame,f=E-h.time*1e3,h.time=E=E/1e3,a+=x+(x>=s?4:s-x),S=1),g||(l=c(v)),S)for(p=0;p<o.length;p++)o[p](E,f,w,_)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){Iy&&(!Kh&&Sm()&&(Ri=Kh=window,Mm=Ri.document||{},Yn.gsap=Nn,(Ri.gsapVersions||(Ri.gsapVersions=[])).push(Nn.version),Uy(gu||Ri.GreenSockGlobals||!Ri.gsap&&Ri||{}),Jy.forEach(eS)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(_){return setTimeout(_,a-h.time*1e3+1|0)},gl=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),gl=0,c=pl},lagSmoothing:function(_,d){e=_||1/0,t=Math.min(d||33,e)},fps:function(_){s=1e3/(_||240),a=h.time*1e3+s},add:function(_,d,g){var x=d?function(S,E,w,A){_(S,E,w,A),h.remove(x)}:_;return h.remove(_),o[g?"unshift":"push"](x),no(),x},remove:function(_,d){~(d=o.indexOf(_))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},h}(),no=function(){return!gl&&Hn.wake()},je={},$2=/^[\d.\-M][\d.\-,\s]/,K2=/["']/g,Z2=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(K2,"").trim():+c,r=l.substr(o+1).trim();return t},Q2=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},J2=function(e){var t=(e+"").split("("),i=je[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Z2(t[1])]:Q2(e).split(",").map(By)):je._CE&&$2.test(e)?je._CE("",e):i},rS=function(e){return function(t){return 1-e(1-t)}},sS=function n(e,t){for(var i=e._first,r;i;)i instanceof gn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Us=function(e,t){return e&&(Rt(e)?e:je[e]||J2(e))||t},qs=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},a;return Pn(e,function(o){je[o]=Yn[o]=s,je[a=o.toLowerCase()]=i;for(var l in s)je[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=je[o+"."+l]=s[l]}),s},aS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},sd=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/$h*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*T2((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:aS(o);return s=$h/s,l.config=function(c,u){return n(e,c,u)},l},ad=function n(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:aS(i);return r.config=function(s){return n(e,s)},r};Pn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;qs(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});je.Linear.easeNone=je.none=je.Linear.easeIn;qs("Elastic",sd("in"),sd("out"),sd());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};qs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);qs("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});qs("Circ",function(n){return-(Py(1-n*n)-1)});qs("Sine",function(n){return n===1?1:-E2(n*S2)+1});qs("Back",ad("in"),ad("out"),ad());je.SteppedEase=je.steps=Yn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,a=1-ft;return function(o){return((r*bl(0,a,o)|0)+s)*i}}};Qa.ease=je["quad.out"];Pn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return wm+=n+","+n+"Params,"});var oS=function(e,t){this.id=M2++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ky,this.set=t?t.getSetter:Dm},_l=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,to(this,+t.duration,1,1),this.data=t.data,xt&&(this._ctx=xt,xt.data.push(this)),gl||Hn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,to(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(no(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Xu(this,i),!s._dp||s.parent||Gy(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Li(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ft||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),zy(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+h_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+h_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?eo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-ft?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?xu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ft?0:this._rts,this.totalTime(bl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Wu(this),I2(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(no(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ft&&(this._tTime-=ft)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=yt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Li(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Rn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=P2);var r=tn;return tn=i,Cm(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),tn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,p_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,p_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Jn(this,i),Rn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Rn(r)),this._dur||(this._zTime=-ft),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ft:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ft,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ft)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=Rt(i)?i:Hy,l=function(){var u=r.then;r.then=null,s&&s(),Rt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Lo(this)},n}();$n(_l.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ft,_prom:0,_ps:!1,_rts:1});var gn=function(n){Ry(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Rn(i.sortChildren),Mt&&Li(i.parent||Mt,Ji(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Wy(Ji(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Wo(0,arguments,this),this},t.from=function(r,s,a){return Wo(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Wo(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Go(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ft(r,s,Jn(this,a),1),this},t.call=function(r,s,a){return Li(this,Ft.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Ft(r,a,Jn(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Go(a).immediateRender=Rn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,h){return o.startAt=a,Go(o).immediateRender=Rn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,h)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:yt(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,p,m,v,_,d,g,x,S,E,w,A;if(this!==Mt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),f=u,S=this._start,x=this._ts,d=!x,h&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,a);if(f=yt(u%_),u===l?(v=this._repeat,f=c):(E=yt(u/_),v=~~E,v&&v===E&&(f=c,v--),f>c&&(f=c)),E=eo(this._tTime,_),!o&&this._tTime&&E!==v&&this._tTime-E*_-this._dur<=0&&(E=v),w&&v&1&&(f=c-f,A=1),v!==E&&!this._lock){var y=w&&E&1,T=y===(w&&v&1);if(v<E&&(y=!y),o=y?0:u%c?c:u,this._lock=1,this.render(o||(A?0:yt(v*_)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,E=v),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=y?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;sS(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=k2(this,yt(o),yt(f)),g&&(u-=f-(f=g._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!E&&(Gn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&r>=0)for(p=this._first;p;){if(m=p._next,(p._act||f>=p._start)&&p._ts&&g!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!d){g=0,m&&(u+=this._zTime=-ft);break}}p=m}else{p=this._last;for(var L=r<0?r:f;p;){if(m=p._prev,(p._act||L<=p._end)&&p._ts&&g!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(L-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(L-p._start)*p._ts,s,a||tn&&Cm(p)),f!==this._time||!this._ts&&!d){g=0,m&&(u+=this._zTime=L?-ft:ft);break}}p=m}}if(g&&!s&&(this.pause(),g.render(f>=o?0:-ft)._zTime=f>=o?1:-1,this._ts))return this._start=S,Wu(this),this.render(r,s,a);this._onUpdate&&!s&&Gn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ns(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(Gn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(gr(s)||(s=Jn(this,s,r)),!(r instanceof _l)){if(dn(r))return r.forEach(function(o){return a.add(o,s)}),this;if($t(r))return this.addLabel(r,s);if(Rt(r))r=Ft.delayedCall(0,r);else return this}return this!==r?Li(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ri);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ft?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return $t(r)?this.removeLabel(r):Rt(r)?this.killTweensOf(r):(r.parent===this&&Gu(this,r),r===this._recent&&(this._recent=this._last),Is(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=yt(Hn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Jn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Ft.delayedCall(0,s||pl,a);return o.data="isPause",this._hasPause=1,Li(this,o,Jn(this,r))},t.removePause=function(r){var s=this._first;for(r=Jn(this,r);s;)s._start===r&&s.data==="isPause"&&ns(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)kr!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=si(r),l=this._first,c=gr(s),u;l;)l instanceof Ft?D2(l._targets,o)&&(c?(!kr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Jn(a,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,m=Ft.to(a,$n({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ft,onStart:function(){if(a.pause(),!p){var _=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());m._dur!==_&&to(m,_,0,1).render(m._time,!0,!0),p=1}u&&u.apply(m,h||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,$n({startAt:{time:Jn(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),m_(this,Jn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),m_(this,Jn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ft)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=yt(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Is(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Is(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=ri,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Li(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=yt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;to(a,a===Mt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Mt._ts&&(zy(Mt,xu(r,Mt)),Oy=Hn.frame),Hn.frame>=f_){f_+=jn.autoSleep||120;var s=Mt._first;if((!s||!s._ts)&&jn.autoSleep&&Hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Hn.sleep()}}},e}(_l);$n(gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var eP=function(e,t,i,r,s,a,o){var l=new Dn(this._pt,e,t,0,1,hS,null,s),c=0,u=0,h,f,p,m,v,_,d,g;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=ml(r)),a&&(g=[i,r],a(g,e,t),i=g[0],r=g[1]),f=i.match(nd)||[];h=nd.exec(r);)m=h[0],v=r.substring(c,h.index),p?p=(p+1)%5:v.substr(-5)==="rgba("&&(p=1),m!==f[u++]&&(_=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:v||u===1?v:",",s:_,c:m.charAt(1)==="="?Oa(_,m)-_:parseFloat(m)-_,m:p&&p<4?Math.round:0},c=nd.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(Ny.test(r)||d)&&(l.e=0),this._pt=l,l},bm=function(e,t,i,r,s,a,o,l,c,u){Rt(r)&&(r=r(s||0,e,a));var h=e[t],f=i!=="get"?i:Rt(h)?c?e[t.indexOf("set")||!Rt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=Rt(h)?c?sP:fS:Pm,m;if($t(r)&&(~r.indexOf("random(")&&(r=ml(r)),r.charAt(1)==="="&&(m=Oa(f,r)+(un(f)||0),(m||m===0)&&(r=m))),!u||f!==r||ip)return!isNaN(f*r)&&r!==""?(m=new Dn(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?oP:dS,0,p),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!h&&!(t in e)&&Em(t,r),eP.call(this,e,t,f,r,p,l||jn.stringFilter,c))},tP=function(e,t,i,r,s){if(Rt(e)&&(e=Xo(e,s,t,i,r)),!Wi(e)||e.style&&e.nodeType||dn(e)||Dy(e))return $t(e)?Xo(e,s,t,i,r):e;var a={},o;for(o in e)a[o]=Xo(e[o],s,t,i,r);return a},lS=function(e,t,i,r,s,a){var o,l,c,u;if(zn[e]&&(o=new zn[e]).init(s,o.rawVars?t[e]:tP(t[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new Dn(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Ca))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},kr,ip,Rm=function n(e,t,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,p=r.autoRevert,m=e._dur,v=e._startAt,_=e._targets,d=e.parent,g=d&&d.data==="nested"?d.vars.targets:_,x=e._overwrite==="auto"&&!xm,S=e.timeline,E,w,A,y,T,L,R,O,F,X,z,H,I;if(S&&(!f||!s)&&(s="none"),e._ease=Us(s,Qa.ease),e._yEase=h?rS(Us(h===!0?s:h,Qa.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!r.runBackwards,!S||f&&!r.stagger){if(O=_[0]?Ns(_[0]).harness:0,H=O&&r[O.prop],E=vu(r,Tm),v&&(v._zTime<0&&v.progress(1),t<0&&u&&o&&!p?v.render(-1,!0):v.revert(u&&m?Bc:R2),v._lazy=0),a){if(ns(e._startAt=Ft.set(_,$n({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!v&&Rn(l),startAt:null,delay:0,onUpdate:c&&function(){return Gn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn||!o&&!p)&&e._startAt.revert(Bc),o&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&m&&!v){if(t&&(o=!1),A=$n({overwrite:!1,data:"isFromStart",lazy:o&&!v&&Rn(l),immediateRender:o,stagger:0,parent:d},E),H&&(A[O.prop]=H),ns(e._startAt=Ft.set(_,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn?e._startAt.revert(Bc):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,ft,ft);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Rn(l)||l&&!m,w=0;w<_.length;w++){if(T=_[w],R=T._gsap||Am(_)[w]._gsap,e._ptLookup[w]=X={},Zh[R.id]&&Kr.length&&_u(),z=g===_?w:g.indexOf(T),O&&(F=new O).init(T,H||E,e,z,g)!==!1&&(e._pt=y=new Dn(e._pt,T,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(B){X[B]=y}),F.priority&&(L=1)),!O||H)for(A in E)zn[A]&&(F=lS(A,E,e,z,T,g))?F.priority&&(L=1):X[A]=y=bm.call(e,T,A,"get",E[A],z,g,0,r.stringFilter);e._op&&e._op[w]&&e.kill(T,e._op[w]),x&&e._pt&&(kr=e,Mt.killTweensOf(T,X,e.globalTime(t)),I=!e.parent,kr=0),e._pt&&l&&(Zh[R.id]=1)}L&&pS(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!I,f&&t<=0&&S.render(ri,!0,!0)},nP=function(e,t,i,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,p;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(u=f[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return ip=1,e.vars[t]="+=0",Rm(e,o),ip=0,l?hl(t+" not eligible for reset"):1;c.push(u)}for(p=c.length;p--;)h=c[p],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,h.e&&(h.e=Lt(i)+un(h.e)),h.b&&(h.b=u.s+un(h.b))},iP=function(e,t){var i=e[0]?Ns(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return t;s=Ja({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},rP=function(e,t,i,r){var s=t.ease||r||"power1.inOut",a,o;if(dn(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Xo=function(e,t,i,r,s){return Rt(e)?e.call(t,i,r,s):$t(e)&&~e.indexOf("random(")?ml(e):e},cS=wm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",uS={};Pn(cS+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return uS[n]=1});var Ft=function(n){Ry(e,n);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:Go(r))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,m=l.keyframes,v=l.defaults,_=l.scrollTrigger,d=l.yoyoEase,g=r.parent||Mt,x=(dn(i)||Dy(i)?gr(i[0]):"length"in r)?[i]:si(i),S,E,w,A,y,T,L,R;if(o._targets=x.length?Am(x):hl("GSAP target "+i+" not found. https://gsap.com",!jn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,m||f||xc(c)||xc(u)){if(r=o.vars,S=o.timeline=new gn({data:"nested",defaults:v||{},targets:g&&g.data==="nested"?g.vars.targets:x}),S.kill(),S.parent=S._dp=Ji(o),S._start=0,f||xc(c)||xc(u)){if(A=x.length,L=f&&Yy(f),Wi(f))for(y in f)~cS.indexOf(y)&&(R||(R={}),R[y]=f[y]);for(E=0;E<A;E++)w=vu(r,uS),w.stagger=0,d&&(w.yoyoEase=d),R&&Ja(w,R),T=x[E],w.duration=+Xo(c,Ji(o),E,T,x),w.delay=(+Xo(u,Ji(o),E,T,x)||0)-o._delay,!f&&A===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),S.to(T,w,L?L(E,T,x):0),S._ease=je.none;S.duration()?c=u=0:o.timeline=0}else if(m){Go($n(S.vars.defaults,{ease:"none"})),S._ease=Us(m.ease||r.ease||"none");var O=0,F,X,z;if(dn(m))m.forEach(function(H){return S.to(x,H,">")}),S.duration();else{w={};for(y in m)y==="ease"||y==="easeEach"||rP(y,m[y],w,m.easeEach);for(y in w)for(F=w[y].sort(function(H,I){return H.t-I.t}),O=0,E=0;E<F.length;E++)X=F[E],z={ease:X.e,duration:(X.t-(E?F[E-1].t:0))/100*c},z[y]=X.v,S.to(x,z,O),O+=z.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return p===!0&&!xm&&(kr=Ji(o),Mt.killTweensOf(x),kr=0),Li(g,Ji(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!c&&!m&&o._start===yt(g._time)&&Rn(h)&&U2(Ji(o))&&g.data!=="nested")&&(o._tTime=-ft,o.render(Math.max(0,-u)||0)),_&&Wy(Ji(o),_),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-ft&&!u?l:r<ft?0:r,f,p,m,v,_,d,g,x,S;if(!c)O2(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(v*100+r,s,a);if(f=yt(h%v),h===l?(m=this._repeat,f=c):(_=yt(h/v),m=~~_,m&&m===_?(f=c,m--):f>c&&(f=c)),d=this._yoyo&&m&1,d&&(S=this._yEase,f=c-f),_=eo(this._tTime,v),f===o&&!a&&this._initted&&m===_)return this._tTime=h,this;m!==_&&(x&&this._yEase&&sS(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&f!==v&&this._initted&&(this._lock=a=1,this.render(yt(v*m),!0).invalidate()._lock=0))}if(!this._initted){if(Xy(this,u?r:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==_))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=g=(S||this._ease)(f/c),this._from&&(this.ratio=g=1-g),!o&&h&&!s&&!_&&(Gn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(g,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Qh(this,r,s,a),Gn(this,"onUpdate")),this._repeat&&m!==_&&this.vars.onRepeat&&!s&&this.parent&&Gn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Qh(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ns(this,1),!s&&!(u&&!o)&&(h||o||d)&&(Gn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){gl||Hn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Rm(this,c),u=this._ease(c/this._dur),nP(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(Xu(this,0),this.parent||Vy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Lo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!tn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,kr&&kr.vars.overwrite!==!0)._first||Lo(this),this.parent&&a!==this.timeline.totalDuration()&&to(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?si(r):o,c=this._ptLookup,u=this._pt,h,f,p,m,v,_,d;if((!s||s==="all")&&N2(o,l))return s==="all"&&(this._pt=0),Lo(this);for(h=this._op=this._op||[],s!=="all"&&($t(s)&&(v={},Pn(s,function(g){return v[g]=1}),s=v),s=iP(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){f=c[d],s==="all"?(h[d]=s,m=f,p={}):(p=h[d]=h[d]||{},m=s);for(v in m)_=f&&f[v],_&&((!("kill"in _.d)||_.d.kill(v)===!0)&&Gu(this,_,"_pt"),delete f[v]),p!=="all"&&(p[v]=1)}return this._initted&&!this._pt&&u&&Lo(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Wo(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Wo(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Mt.killTweensOf(r,s,a)},e}(_l);$n(Ft.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pn("staggerTo,staggerFrom,staggerFromTo",function(n){Ft[n]=function(){var e=new gn,t=ep.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Pm=function(e,t,i){return e[t]=i},fS=function(e,t,i){return e[t](i)},sP=function(e,t,i,r){return e[t](r.fp,i)},aP=function(e,t,i){return e.setAttribute(t,i)},Dm=function(e,t){return Rt(e[t])?fS:ym(e[t])&&e.setAttribute?aP:Pm},dS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},oP=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},hS=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Lm=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},lP=function(e,t,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,i),s=a},cP=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Gu(this,t,"_pt"):t.dep||(i=1),t=r;return!i},uP=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},pS=function(e){for(var t=e._pt,i,r,s,a;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=s},Dn=function(){function n(t,i,r,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||dS,this.d=l||this,this.set=c||Pm,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=uP,this.m=i,this.mt=s,this.tween=r},n}();Pn(wm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Tm[n]=1});Yn.TweenMax=Yn.TweenLite=Ft;Yn.TimelineLite=Yn.TimelineMax=gn;Mt=new gn({sortChildren:!1,defaults:Qa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});jn.stringFilter=iS;var Fs=[],Vc={},fP=[],__=0,dP=0,od=function(e){return(Vc[e]||fP).map(function(t){return t()})},rp=function(){var e=Date.now(),t=[];e-__>2&&(od("matchMediaInit"),Fs.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=Ri.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),od("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),__=e,od("matchMedia"))},mS=function(){function n(t,i){this.selector=i&&tp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=dP++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Rt(i)&&(s=r,r=i,i=Rt);var a=this,o=function(){var c=xt,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=tp(s)),xt=a,h=r.apply(a,arguments),Rt(h)&&a._r.push(h),xt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,i===Rt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=xt;xt=null,i(this),xt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Ft&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof gn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ft)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Fs.length;a--;)Fs[a].id===this.id&&Fs.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),hP=function(){function n(t){this.contexts=[],this.scope=t,xt&&xt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Wi(i)||(i={matches:i});var a=new mS(0,s||this.scope),o=a.conditions={},l,c,u;xt&&!a.selector&&(a.selector=xt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?u=1:(l=Ri.matchMedia(i[c]),l&&(Fs.indexOf(a)<0&&Fs.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(rp):l.addEventListener("change",rp)));return u&&r(a,function(h){return a.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),yu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return eS(r)})},timeline:function(e){return new gn(e)},getTweensOf:function(e,t){return Mt.getTweensOf(e,t)},getProperty:function(e,t,i,r){$t(e)&&(e=si(e)[0]);var s=Ns(e||{}).get,a=i?Hy:By;return i==="native"&&(i=""),e&&(t?a((zn[t]&&zn[t].get||s)(e,t,i,r)):function(o,l,c){return a((zn[o]&&zn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=si(e),e.length>1){var r=e.map(function(u){return Nn.quickSetter(u,t,i)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var a=zn[t],o=Ns(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Ca._pt=0,h.init(e,i?u+i:u,Ca,0,[e]),h.render(1,h),Ca._pt&&Lm(1,Ca)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var r,s=Nn.to(e,$n((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Us(e.ease,Qa.ease)),d_(Qa,e||{})},config:function(e){return d_(jn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!zn[o]&&!Yn[o]&&hl(t+" effect requires "+o+" plugin.")}),id[t]=function(o,l,c){return i(si(o),$n(l||{},s),c)},a&&(gn.prototype[t]=function(o,l,c){return this.add(id[t](o,Wi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){je[e]=Us(t)},parseEase:function(e,t){return arguments.length?Us(e,t):je},getById:function(e){return Mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new gn(e),r,s;for(i.smoothChildTiming=Rn(e.smoothChildTiming),Mt.remove(i),i._dp=0,i._time=i._tTime=Mt._time,r=Mt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Ft&&r.vars.onComplete===r._targets[0]))&&Li(i,r,r._start-r._delay),r=s;return Li(Mt,i,0),i},context:function(e,t){return e?new mS(e,t):xt},matchMedia:function(e){return new hP(e)},matchMediaRefresh:function(){return Fs.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||rp()},addEventListener:function(e,t){var i=Vc[e]||(Vc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Vc[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:X2,wrapYoyo:j2,distribute:Yy,random:Ky,snap:$y,normalize:W2,getUnit:un,clamp:B2,splitColor:tS,toArray:si,selector:tp,mapRange:Qy,pipe:V2,unitize:G2,interpolate:q2,shuffle:qy},install:Uy,effects:id,ticker:Hn,updateRoot:gn.updateRoot,plugins:zn,globalTimeline:Mt,core:{PropTween:Dn,globals:Fy,Tween:Ft,Timeline:gn,Animation:_l,getCache:Ns,_removeLinkedListItem:Gu,reverting:function(){return tn},context:function(e){return e&&xt&&(xt.data.push(e),e._ctx=xt),xt},suppressOverwrites:function(e){return xm=e}}};Pn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return yu[n]=Ft[n]});Hn.add(gn.updateRoot);Ca=yu.to({},{duration:0});var pP=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},mP=function(e,t){var i=e._targets,r,s,a;for(r in t)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=pP(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[s],r))},ld=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if($t(s)&&(l={},Pn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}mP(o,s)}}}},Nn=yu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)tn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},ld("roundProps",np),ld("modifiers"),ld("snap",$y))||yu;Ft.version=gn.version=Nn.version="3.14.2";Iy=1;Sm()&&no();je.Power0;je.Power1;je.Power2;je.Power3;je.Power4;je.Linear;je.Quad;je.Cubic;je.Quart;je.Quint;je.Strong;je.Elastic;je.Back;je.SteppedEase;je.Bounce;je.Sine;je.Expo;je.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var v_,zr,ka,Nm,Ps,x_,Im,gP=function(){return typeof window<"u"},_r={},Ss=180/Math.PI,za=Math.PI/180,da=Math.atan2,y_=1e8,Um=/([A-Z])/g,_P=/(left|right|width|margin|padding|x)/i,vP=/[\s,\(]\S/,Ui={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},sp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},xP=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yP=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},SP=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},MP=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},gS=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_S=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},EP=function(e,t,i){return e.style[t]=i},TP=function(e,t,i){return e.style.setProperty(t,i)},wP=function(e,t,i){return e._gsap[t]=i},AP=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},CP=function(e,t,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},bP=function(e,t,i,r,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},Et="transform",Ln=Et+"Origin",RP=function n(e,t){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in _r&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ui[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=tr(r,o)}):this.tfm[e]=a.x?a[e]:tr(r,e),e===Ln&&(this.tfm.zOrigin=a.zOrigin);else return Ui.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(Et)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Ln,t,"")),e=Et}(s||t)&&this.props.push(e,t,s[e])},vS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},PP=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Um,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Im(),(!s||!s.isStart)&&!i[Et]&&(vS(i),r.zOrigin&&i[Ln]&&(i[Ln]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},xS=function(e,t){var i={target:e,props:[],revert:PP,save:RP};return e._gsap||Nn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},yS,ap=function(e,t){var i=zr.createElementNS?zr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):zr.createElement(e);return i&&i.style?i:zr.createElement(e)},Wn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Um,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,io(t)||t,1)||""},S_="O,Moz,ms,Ms,Webkit".split(","),io=function(e,t,i){var r=t||Ps,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(S_[a]+e in s););return a<0?null:(a===3?"ms":a>=0?S_[a]:"")+e},op=function(){gP()&&window.document&&(v_=window,zr=v_.document,ka=zr.documentElement,Ps=ap("div")||{style:{}},ap("div"),Et=io(Et),Ln=Et+"Origin",Ps.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yS=!!io("perspective"),Im=Nn.core.reverting,Nm=1)},M_=function(e){var t=e.ownerSVGElement,i=ap("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),ka.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),ka.removeChild(i),s},E_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},SS=function(e){var t,i;try{t=e.getBBox()}catch{t=M_(e),i=1}return t&&(t.width||t.height)||i||(t=M_(e)),t&&!t.width&&!t.x&&!t.y?{x:+E_(e,["x","cx","x1"])||0,y:+E_(e,["y","cy","y1"])||0,width:0,height:0}:t},MS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&SS(e))},is=function(e,t){if(t){var i=e.style,r;t in _r&&t!==Ln&&(t=Et),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Um,"-$1").toLowerCase())):i.removeAttribute(t)}},Br=function(e,t,i,r,s,a){var o=new Dn(e._pt,t,i,0,1,a?_S:gS);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},T_={deg:1,rad:1,turn:1},DP={grid:1,flex:1},rs=function n(e,t,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Ps.style,l=_P.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",p=r==="%",m,v,_,d;if(r===a||!s||T_[r]||T_[a])return s;if(a!=="px"&&!f&&(s=n(e,t,i,"px")),d=e.getCTM&&MS(e),(p||a==="%")&&(_r[t]||~t.indexOf("adius")))return m=d?e.getBBox()[l?"width":"height"]:e[u],Lt(p?s/m*h:s/100*m);if(o[l?"width":"height"]=h+(f?a:r),v=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,d&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===zr||!v.appendChild)&&(v=zr.body),_=v._gsap,_&&p&&_.width&&l&&_.time===Hn.time&&!_.uncache)return Lt(s/_.width*h);if(p&&(t==="height"||t==="width")){var g=e.style[t];e.style[t]=h+r,m=e[u],g?e.style[t]=g:is(e,t)}else(p||a==="%")&&!DP[Wn(v,"display")]&&(o.position=Wn(e,"position")),v===e&&(o.position="static"),v.appendChild(Ps),m=Ps[u],v.removeChild(Ps),o.position="absolute";return l&&p&&(_=Ns(v),_.time=Hn.time,_.width=v[u]),Lt(f?m*s/h:m&&s?h/m*s:0)},tr=function(e,t,i,r){var s;return Nm||op(),t in Ui&&t!=="transform"&&(t=Ui[t],~t.indexOf(",")&&(t=t.split(",")[0])),_r[t]&&t!=="transform"?(s=xl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Mu(Wn(e,Ln))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Su[t]&&Su[t](e,t,i)||Wn(e,t)||ky(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?rs(e,t,s,i)+i:s},LP=function(e,t,i,r){if(!i||i==="none"){var s=io(t,e,1),a=s&&Wn(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=Wn(e,"borderTopColor"))}var o=new Dn(this._pt,e.style,t,0,1,hS),l=0,c=0,u,h,f,p,m,v,_,d,g,x,S,E;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Wn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(v=e.style[t],e.style[t]=r,r=Wn(e,t)||r,v?e.style[t]=v:is(e,t)),u=[i,r],iS(u),i=u[0],r=u[1],f=i.match(Aa)||[],E=r.match(Aa)||[],E.length){for(;h=Aa.exec(r);)_=h[0],g=r.substring(l,h.index),m?m=(m+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(m=1),_!==(v=f[c++]||"")&&(p=parseFloat(v)||0,S=v.substr((p+"").length),_.charAt(1)==="="&&(_=Oa(p,_)+S),d=parseFloat(_),x=_.substr((d+"").length),l=Aa.lastIndex-x.length,x||(x=x||jn.units[t]||S,l===r.length&&(r+=x,o.e+=x)),S!==x&&(p=rs(e,t,v,x)||0),o._pt={_next:o._pt,p:g||c===1?g:",",s:p,c:d-p,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?_S:gS;return Ny.test(r)&&(o.e=0),this._pt=o,o},w_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},NP=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=w_[i]||i,t[1]=w_[r]||r,t.join(" ")},IP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],_r[o]&&(l=1,o=o==="transformOrigin"?Ln:Et),is(i,o);l&&(is(i,Et),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",xl(i,1),a.uncache=1,vS(r)))}},Su={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Dn(e._pt,t,i,0,0,IP);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},vl=[1,0,0,1,0,0],ES={},TS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},A_=function(e){var t=Wn(e,Et);return TS(t)?vl:t.substr(7).match(Ly).map(Lt)},Fm=function(e,t){var i=e._gsap||Ns(e),r=e.style,s=A_(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?vl:s):(s===vl&&!e.offsetParent&&e!==ka&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ka.appendChild(e)),s=A_(e),l?r.display=l:is(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ka.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},lp=function(e,t,i,r,s,a){var o=e._gsap,l=s||Fm(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,p=l[0],m=l[1],v=l[2],_=l[3],d=l[4],g=l[5],x=t.split(" "),S=parseFloat(x[0])||0,E=parseFloat(x[1])||0,w,A,y,T;i?l!==vl&&(A=p*_-m*v)&&(y=S*(_/A)+E*(-v/A)+(v*g-_*d)/A,T=S*(-m/A)+E*(p/A)-(p*g-m*d)/A,S=y,E=T):(w=SS(e),S=w.x+(~x[0].indexOf("%")?S/100*w.width:S),E=w.y+(~(x[1]||x[0]).indexOf("%")?E/100*w.height:E)),r||r!==!1&&o.smooth?(d=S-c,g=E-u,o.xOffset=h+(d*p+g*v)-d,o.yOffset=f+(d*m+g*_)-g):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=E,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[Ln]="0px 0px",a&&(Br(a,o,"xOrigin",c,S),Br(a,o,"yOrigin",u,E),Br(a,o,"xOffset",h,o.xOffset),Br(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+E)},xl=function(e,t){var i=e._gsap||new oS(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Wn(e,Ln)||"0",u,h,f,p,m,v,_,d,g,x,S,E,w,A,y,T,L,R,O,F,X,z,H,I,B,j,J,$,ee,ve,Ce,Ie;return u=h=f=v=_=d=g=x=S=0,p=m=1,i.svg=!!(e.getCTM&&MS(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Et]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Et]!=="none"?l[Et]:"")),r.scale=r.rotate=r.translate="none"),A=Fm(e,i.svg),i.svg&&(i.uncache?(B=e.getBBox(),c=i.xOrigin-B.x+"px "+(i.yOrigin-B.y)+"px",I=""):I=!t&&e.getAttribute("data-svg-origin"),lp(e,I||c,!!I||i.originIsAbsolute,i.smooth!==!1,A)),E=i.xOrigin||0,w=i.yOrigin||0,A!==vl&&(R=A[0],O=A[1],F=A[2],X=A[3],u=z=A[4],h=H=A[5],A.length===6?(p=Math.sqrt(R*R+O*O),m=Math.sqrt(X*X+F*F),v=R||O?da(O,R)*Ss:0,g=F||X?da(F,X)*Ss+v:0,g&&(m*=Math.abs(Math.cos(g*za))),i.svg&&(u-=E-(E*R+w*F),h-=w-(E*O+w*X))):(Ie=A[6],ve=A[7],J=A[8],$=A[9],ee=A[10],Ce=A[11],u=A[12],h=A[13],f=A[14],y=da(Ie,ee),_=y*Ss,y&&(T=Math.cos(-y),L=Math.sin(-y),I=z*T+J*L,B=H*T+$*L,j=Ie*T+ee*L,J=z*-L+J*T,$=H*-L+$*T,ee=Ie*-L+ee*T,Ce=ve*-L+Ce*T,z=I,H=B,Ie=j),y=da(-F,ee),d=y*Ss,y&&(T=Math.cos(-y),L=Math.sin(-y),I=R*T-J*L,B=O*T-$*L,j=F*T-ee*L,Ce=X*L+Ce*T,R=I,O=B,F=j),y=da(O,R),v=y*Ss,y&&(T=Math.cos(y),L=Math.sin(y),I=R*T+O*L,B=z*T+H*L,O=O*T-R*L,H=H*T-z*L,R=I,z=B),_&&Math.abs(_)+Math.abs(v)>359.9&&(_=v=0,d=180-d),p=Lt(Math.sqrt(R*R+O*O+F*F)),m=Lt(Math.sqrt(H*H+Ie*Ie)),y=da(z,H),g=Math.abs(y)>2e-4?y*Ss:0,S=Ce?1/(Ce<0?-Ce:Ce):0),i.svg&&(I=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!TS(Wn(e,Et)),I&&e.setAttribute("transform",I))),Math.abs(g)>90&&Math.abs(g)<270&&(s?(p*=-1,g+=v<=0?180:-180,v+=v<=0?180:-180):(m*=-1,g+=g<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=Lt(p),i.scaleY=Lt(m),i.rotation=Lt(v)+o,i.rotationX=Lt(_)+o,i.rotationY=Lt(d)+o,i.skewX=g+o,i.skewY=x+o,i.transformPerspective=S+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Ln]=Mu(c)),i.xOffset=i.yOffset=0,i.force3D=jn.force3D,i.renderTransform=i.svg?FP:yS?wS:UP,i.uncache=0,i},Mu=function(e){return(e=e.split(" "))[0]+" "+e[1]},cd=function(e,t,i){var r=un(t);return Lt(parseFloat(t)+parseFloat(rs(e,"x",i+"px",r)))+r},UP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,wS(e,t)},_s="0deg",wo="0px",vs=") ",wS=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,f=i.skewX,p=i.skewY,m=i.scaleX,v=i.scaleY,_=i.transformPerspective,d=i.force3D,g=i.target,x=i.zOrigin,S="",E=d==="auto"&&e&&e!==1||d===!0;if(x&&(h!==_s||u!==_s)){var w=parseFloat(u)*za,A=Math.sin(w),y=Math.cos(w),T;w=parseFloat(h)*za,T=Math.cos(w),a=cd(g,a,A*T*-x),o=cd(g,o,-Math.sin(w)*-x),l=cd(g,l,y*T*-x+x)}_!==wo&&(S+="perspective("+_+vs),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(E||a!==wo||o!==wo||l!==wo)&&(S+=l!==wo||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+vs),c!==_s&&(S+="rotate("+c+vs),u!==_s&&(S+="rotateY("+u+vs),h!==_s&&(S+="rotateX("+h+vs),(f!==_s||p!==_s)&&(S+="skew("+f+", "+p+vs),(m!==1||v!==1)&&(S+="scale("+m+", "+v+vs),g.style[Et]=S||"translate(0, 0)"},FP=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,f=i.scaleY,p=i.target,m=i.xOrigin,v=i.yOrigin,_=i.xOffset,d=i.yOffset,g=i.forceCSS,x=parseFloat(a),S=parseFloat(o),E,w,A,y,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=za,c*=za,E=Math.cos(l)*h,w=Math.sin(l)*h,A=Math.sin(l-c)*-f,y=Math.cos(l-c)*f,c&&(u*=za,T=Math.tan(c-u),T=Math.sqrt(1+T*T),A*=T,y*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),E*=T,w*=T)),E=Lt(E),w=Lt(w),A=Lt(A),y=Lt(y)):(E=h,y=f,w=A=0),(x&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(x=rs(p,"x",a,"px"),S=rs(p,"y",o,"px")),(m||v||_||d)&&(x=Lt(x+m-(m*E+v*A)+_),S=Lt(S+v-(m*w+v*y)+d)),(r||s)&&(T=p.getBBox(),x=Lt(x+r/100*T.width),S=Lt(S+s/100*T.height)),T="matrix("+E+","+w+","+A+","+y+","+x+","+S+")",p.setAttribute("transform",T),g&&(p.style[Et]=T)},OP=function(e,t,i,r,s){var a=360,o=$t(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ss:1),c=l-r,u=r+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*y_)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*y_)%a-~~(c/a)*a)),e._pt=f=new Dn(e._pt,t,i,r,c,xP),f.e=u,f.u="deg",e._props.push(i),f},C_=function(e,t){for(var i in t)e[i]=t[i];return e},kP=function(e,t,i){var r=C_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,h,f,p,m;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[Et]=t,o=xl(i,1),is(i,Et),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Et],a[Et]=t,o=xl(i,1),a[Et]=c);for(l in _r)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=un(c),m=un(u),h=p!==m?rs(i,l,c,m):parseFloat(c),f=parseFloat(u),e._pt=new Dn(e._pt,o,l,h,f-h,sp),e._pt.u=m||0,e._props.push(l));C_(o,r)};Pn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",a=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?n+o:"border"+o+n});Su[e>1?"border"+n:n]=function(o,l,c,u,h){var f,p;if(arguments.length<4)return f=a.map(function(m){return tr(o,m,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},a.forEach(function(m,v){return p[m]=f[v]=f[v]||f[(v-1)/2|0]}),o.init(l,p,h)}});var AS={name:"css",register:op,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,c,u,h,f,p,m,v,_,d,g,x,S,E,w,A,y,T;Nm||op(),this.styles=this.styles||xS(e),y=this.styles.props,this.tween=i;for(v in t)if(v!=="autoRound"&&(u=t[v],!(zn[v]&&lS(v,t,i,r,e,s)))){if(p=typeof u,m=Su[v],p==="function"&&(u=u.call(i,r,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=ml(u)),m)m(this,e,v,u,i)&&(A=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(v)+"").trim(),u+="",Zr.lastIndex=0,Zr.test(c)||(_=un(c),d=un(u),d?_!==d&&(c=rs(e,v,c,d)+d):_&&(u+=_)),this.add(o,"setProperty",c,u,r,s,0,0,v),a.push(v),y.push(v,0,o[v]);else if(p!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(i,r,e,s):l[v],$t(c)&&~c.indexOf("random(")&&(c=ml(c)),un(c+"")||c==="auto"||(c+=jn.units[v]||un(tr(e,v))||""),(c+"").charAt(1)==="="&&(c=tr(e,v))):c=tr(e,v),f=parseFloat(c),g=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),g&&(u=u.substr(2)),h=parseFloat(u),v in Ui&&(v==="autoAlpha"&&(f===1&&tr(e,"visibility")==="hidden"&&h&&(f=0),y.push("visibility",0,o.visibility),Br(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),v!=="scale"&&v!=="transform"&&(v=Ui[v],~v.indexOf(",")&&(v=v.split(",")[0]))),x=v in _r,x){if(this.styles.save(v),T=u,p==="string"&&u.substring(0,6)==="var(--"){if(u=Wn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var L=e.style.perspective;e.style.perspective=u,u=Wn(e,"perspective"),L?e.style.perspective=L:is(e,"perspective")}h=parseFloat(u)}if(S||(E=e._gsap,E.renderTransform&&!t.parseTransform||xl(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,S=this._pt=new Dn(this._pt,o,Et,0,1,E.renderTransform,E,0,-1),S.dep=1),v==="scale")this._pt=new Dn(this._pt,E,"scaleY",E.scaleY,(g?Oa(E.scaleY,g+h):h)-E.scaleY||0,sp),this._pt.u=0,a.push("scaleY",v),v+="X";else if(v==="transformOrigin"){y.push(Ln,0,o[Ln]),u=NP(u),E.svg?lp(e,u,0,w,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==E.zOrigin&&Br(this,E,"zOrigin",E.zOrigin,d),Br(this,o,v,Mu(c),Mu(u)));continue}else if(v==="svgOrigin"){lp(e,u,1,w,0,this);continue}else if(v in ES){OP(this,E,v,f,g?Oa(f,g+u):u);continue}else if(v==="smoothOrigin"){Br(this,E,"smooth",E.smooth,u);continue}else if(v==="force3D"){E[v]=u;continue}else if(v==="transform"){kP(this,u,e);continue}}else v in o||(v=io(v)||v);if(x||(h||h===0)&&(f||f===0)&&!vP.test(u)&&v in o)_=(c+"").substr((f+"").length),h||(h=0),d=un(u)||(v in jn.units?jn.units[v]:_),_!==d&&(f=rs(e,v,c,d)),this._pt=new Dn(this._pt,x?E:o,v,f,(g?Oa(f,g+h):h)-f,!x&&(d==="px"||v==="zIndex")&&t.autoRound!==!1?MP:sp),this._pt.u=d||0,x&&T!==u?(this._pt.b=c,this._pt.e=T,this._pt.r=SP):_!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=yP);else if(v in o)LP.call(this,e,v,c,g?g+u:u);else if(v in e)this.add(e,v,c||e[v],g?g+u:u,r,s);else if(v!=="parseTransform"){Em(v,u);continue}x||(v in o?y.push(v,0,o[v]):typeof e[v]=="function"?y.push(v,2,e[v]()):y.push(v,1,c||e[v])),a.push(v)}}A&&pS(this)},render:function(e,t){if(t.tween._time||!Im())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:tr,aliases:Ui,getSetter:function(e,t,i){var r=Ui[t];return r&&r.indexOf(",")<0&&(t=r),t in _r&&t!==Ln&&(e._gsap.x||tr(e,"x"))?i&&x_===i?t==="scale"?AP:wP:(x_=i||{})&&(t==="scale"?CP:bP):e.style&&!ym(e.style[t])?EP:~t.indexOf("-")?TP:Dm(e,t)},core:{_removeProperty:is,_getMatrix:Fm}};Nn.utils.checkPrefix=io;Nn.core.getStyleSaver=xS;(function(n,e,t,i){var r=Pn(n+","+e+","+t,function(s){_r[s]=1});Pn(e,function(s){jn.units[s]="deg",ES[s]=1}),Ui[r[13]]=n+","+e,Pn(i,function(s){var a=s.split(":");Ui[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){jn.units[n]="px"});Nn.registerPlugin(AS);var Ms=Nn.registerPlugin(AS)||Nn;Ms.core.Tween;const b_=n=>{let e;const t=new Set,i=(c,u)=>{const h=typeof c=="function"?c(e):c;if(!Object.is(h,e)){const f=e;e=u??(typeof h!="object"||h===null)?h:Object.assign({},e,h),t.forEach(p=>p(e,f))}},r=()=>e,o={setState:i,getState:r,getInitialState:()=>l,subscribe:c=>(t.add(c),()=>t.delete(c))},l=e=n(i,r,o);return o},zP=n=>n?b_(n):b_,BP=n=>n;function HP(n,e=BP){const t=Ll.useSyncExternalStore(n.subscribe,Ll.useCallback(()=>e(n.getState()),[n,e]),Ll.useCallback(()=>e(n.getInitialState()),[n,e]));return Ll.useDebugValue(t),t}const R_=n=>{const e=zP(n),t=i=>HP(e,i);return Object.assign(t,e),t},VP=n=>n?R_(n):R_,GP=[{id:"U01",x:-14,z:-8,width:6.2,depth:4.2,height:1.6,tenantId:"U01"},{id:"U02",x:-6.5,z:-8.2,width:7.2,depth:4.2,height:1.6,tenantId:"U02"},{id:"U03",x:2.2,z:-8.1,width:6.4,depth:4.2,height:1.6,tenantId:"U03"},{id:"U04",x:9.7,z:-7.6,width:3.1,depth:3,height:1.2,tenantId:"U04"},{id:"U05",x:14,z:-7.4,width:3.7,depth:3.1,height:1.2,tenantId:"U05"},{id:"U06",x:-15.4,z:-1.9,width:2.2,depth:2.4,height:1.2,tenantId:"U06"},{id:"U07",x:-12.2,z:-1.9,width:2.5,depth:2.5,height:1.2,tenantId:"U07"},{id:"U08",x:-8.8,z:-2,width:3,depth:2.8,height:1.2,tenantId:"U08"},{id:"U09",x:-5.1,z:-2,width:2.8,depth:2.6,height:1.2,tenantId:"U09"},{id:"U10",x:-1.5,z:-2,width:2.4,depth:2.4,height:1.2,tenantId:"U10"},{id:"U11",x:1.9,z:-2,width:2.8,depth:2.6,height:1.2,tenantId:"U11"},{id:"U12",x:5.8,z:-2,width:3,depth:2.8,height:1.2,tenantId:"U12"},{id:"U13",x:9.8,z:-2,width:4,depth:3.1,height:1.2,tenantId:"U13"},{id:"U14",x:14.4,z:-2,width:2.5,depth:2.4,height:1.2,tenantId:"U14"},{id:"U15",x:-7.2,z:4.3,width:3.6,depth:3,height:1.2,tenantId:"U15"},{id:"U16",x:-2.8,z:4.1,width:2,depth:2.2,height:1.2,tenantId:"U16"}],CS={units:GP},WP="#F59E0B",XP="#FDE68A",jP="#EF4444",qP="#6a8bfe",YP="#b7c8fe",P_="#9CA3AF",$P="#C8CDD5";function bS(n,e){const t=e.includes("expiring"),i=e.includes("underperforming"),r=ju(n.leaseExpiry),s=t&&(r==="under12"||r==="under24"),a=i&&n.status==="underperforming";return!t&&!i?!0:s||a}function KP(n,e,t){if(e)return{color:qP,labelOpacity:1,glowColor:YP,meshOpacity:1,labelMuted:!1};const i=ju(n.leaseExpiry),r=t.includes("expiring"),s=t.includes("underperforming"),a=r||s,o=bS(n,t);return a?o?s&&n.status==="underperforming"?{color:jP,labelOpacity:1,glowColor:"#FECACA",meshOpacity:1,labelMuted:!1}:r&&(i==="under12"||i==="under24")?{color:WP,labelOpacity:1,glowColor:XP,meshOpacity:1,labelMuted:!1}:{color:P_,labelOpacity:1,glowColor:null,meshOpacity:1,labelMuted:!1}:{color:$P,labelOpacity:.5,glowColor:null,meshOpacity:.5,labelMuted:!0}:{color:P_,labelOpacity:1,glowColor:null,meshOpacity:1,labelMuted:!1}}function jt(n){if(!n||typeof n!="string")return 1/0;const[e,t]=n.split("-").map(Number);if(!Number.isFinite(e)||!Number.isFinite(t))return 1/0;const i=new Date,r=new Date(e,t-1,1);return(r.getFullYear()-i.getFullYear())*12+(r.getMonth()-i.getMonth())}function ju(n){const e=jt(n);return e===1/0?"later":e<=12?"under12":e<=24?"under24":"later"}function Om(n){if(!n||typeof n!="string")return"—";const[e,t]=n.split("-").map(Number);return!Number.isFinite(e)||!Number.isFinite(t)?"—":new Date(e,t-1,1).toLocaleDateString("en-CA",{month:"short",year:"numeric"})}const RS=[{unitId:"U01",tenantName:"Sport Chek",sqFt:4200,category:"Sporting Goods",leaseExpiry:"2028-12",status:"healthy",salesIndex:112,anchorDependency:!0,performanceNote:"Top-10 tenant by sales, anchor traffic driver.",currentRent:42,signingDate:"Mar 2018",remainingMonths:Math.max(0,jt("2028-12")),footTrafficIndex:118,anchorProximity:"Adjacent to H&M"},{unitId:"U02",tenantName:"H&M",sqFt:6800,category:"Apparel",leaseExpiry:"2029-11",status:"healthy",salesIndex:104,anchorDependency:!0,performanceNote:"Stable sales and category anchor performance.",currentRent:40,signingDate:"Feb 2018",remainingMonths:Math.max(0,jt("2029-11")),footTrafficIndex:142,anchorProximity:"Adjacent to Sport Chek"},{unitId:"U03",tenantName:"Old Navy",sqFt:5100,category:"Apparel",leaseExpiry:"2027-08",status:"healthy",salesIndex:98,anchorDependency:!0,performanceNote:"Slightly below average but still resilient.",currentRent:38,signingDate:"Sep 2017",remainingMonths:Math.max(0,jt("2027-08")),footTrafficIndex:104,anchorProximity:"Stand-alone anchor"},{unitId:"U04",tenantName:"EB Games",sqFt:1400,category:"Electronics",leaseExpiry:"2026-02",status:"expiring",salesIndex:72,anchorDependency:!1,performanceNote:"Sales/sq ft 28% below asset average over trailing 12 months.",currentRent:48,signingDate:"Feb 2016",remainingMonths:Math.max(0,jt("2026-02")),footTrafficIndex:68,anchorProximity:"Near ArcTeryx Outlet"},{unitId:"U05",tenantName:"Michael Kors",sqFt:2100,category:"Apparel",leaseExpiry:"2026-04",status:"expiring",salesIndex:81,anchorDependency:!1,performanceNote:"Lease expiring soon with moderate productivity decline.",currentRent:62,signingDate:"May 2016",remainingMonths:Math.max(0,jt("2026-04")),footTrafficIndex:79,anchorProximity:"Near H&M + Old Navy corridor"},{unitId:"U06",tenantName:"Wirelesswave",sqFt:900,category:"Electronics",leaseExpiry:"2025-09",status:"expiring",salesIndex:65,anchorDependency:!1,performanceNote:"Sales/sq ft 35% below average, traffic softness.",currentRent:55,signingDate:"Aug 2020",remainingMonths:Math.max(0,jt("2025-09")),footTrafficIndex:71,anchorProximity:"Corner unit, high-traffic corridor"},{unitId:"U07",tenantName:"Claire's Boutique",sqFt:1200,category:"Accessories",leaseExpiry:"2026-06",status:"expiring",salesIndex:59,anchorDependency:!1,performanceNote:"13-month expiry horizon and under-indexing conversion.",currentRent:44,signingDate:"Jun 2019",remainingMonths:Math.max(0,jt("2026-06")),footTrafficIndex:63,anchorProximity:"Mid-mall corridor"},{unitId:"U08",tenantName:"Le Creuset",sqFt:1800,category:"Home & Lifestyle",leaseExpiry:"2027-01",status:"underperforming",salesIndex:61,anchorDependency:!1,performanceNote:"Sales/sq ft 39% below asset average over trailing 12 months.",currentRent:47,signingDate:"Jan 2020",remainingMonths:Math.max(0,jt("2027-01")),footTrafficIndex:57,anchorProximity:"Isolated (far from anchors)"},{unitId:"U09",tenantName:"Gladstone Jewellers",sqFt:1500,category:"Jewellery",leaseExpiry:"2027-03",status:"underperforming",salesIndex:54,anchorDependency:!1,performanceNote:"Sales/sq ft 46% below asset average, weak conversion.",currentRent:51,signingDate:"Mar 2017",remainingMonths:Math.max(0,jt("2027-03")),footTrafficIndex:52,anchorProximity:"Isolated (far from anchors)"},{unitId:"U10",tenantName:"Togo Sushi",sqFt:1100,category:"Food & Beverage",leaseExpiry:"2025-10",status:"expiring",salesIndex:88,anchorDependency:!1,performanceNote:"Expiring in 7 months; still healthy lunchtime demand.",currentRent:58,signingDate:"Oct 2018",remainingMonths:Math.max(0,jt("2025-10")),footTrafficIndex:95,anchorProximity:"Mid-mall corridor"},{unitId:"U11",tenantName:"Mellow Cafe",sqFt:1300,category:"Food & Beverage",leaseExpiry:"2028-01",status:"healthy",salesIndex:102,anchorDependency:!1,performanceNote:"Steady repeat traffic and healthy spend per visit.",currentRent:61,signingDate:"Apr 2019",remainingMonths:Math.max(0,jt("2028-01")),footTrafficIndex:108,anchorProximity:"Mid-mall corridor"},{unitId:"U12",tenantName:"LensCrafters",sqFt:1700,category:"Health & Optical",leaseExpiry:"2028-10",status:"healthy",salesIndex:101,anchorDependency:!1,performanceNote:"Consistent productivity and appointment utilization.",currentRent:49,signingDate:"Nov 2017",remainingMonths:Math.max(0,jt("2028-10")),footTrafficIndex:101,anchorProximity:"Mid-mall corridor"},{unitId:"U13",tenantName:"ArcTeryx Outlet",sqFt:2800,category:"Apparel",leaseExpiry:"2027-12",status:"healthy",salesIndex:109,anchorDependency:!1,performanceNote:"High AOV and strong destination draw.",currentRent:45,signingDate:"Jun 2015",remainingMonths:Math.max(0,jt("2027-12")),footTrafficIndex:92,anchorProximity:"Anchor-adjacent"},{unitId:"U14",tenantName:"The Body Shop",sqFt:1e3,category:"Beauty",leaseExpiry:"2026-09",status:"expiring",salesIndex:93,anchorDependency:!1,performanceNote:"Lease expiry within 18 months, mixed momentum.",currentRent:43,signingDate:"May 2016",remainingMonths:Math.max(0,jt("2026-09")),footTrafficIndex:88,anchorProximity:"Mid-mall corridor"},{unitId:"U15",tenantName:"Urban Planet",sqFt:2400,category:"Apparel",leaseExpiry:"2026-12",status:"expiring",salesIndex:74,anchorDependency:!1,performanceNote:"Below-average productivity and style-cycle volatility.",currentRent:36,signingDate:"Sep 2016",remainingMonths:Math.max(0,jt("2026-12")),footTrafficIndex:78,anchorProximity:"Mid-mall corridor"},{unitId:"U16",tenantName:"Mobile Snap",sqFt:600,category:"Electronics",leaseExpiry:"2025-08",status:"expiring",salesIndex:67,anchorDependency:!1,performanceNote:"Expiry in 6 months with declining conversion rate.",currentRent:52,signingDate:"Aug 2020",remainingMonths:Math.max(0,jt("2025-08")),footTrafficIndex:44,anchorProximity:"Mid-mall corridor"}],PS=Object.fromEntries(RS.map(n=>[n.unitId,n]));[...new Set(RS.map(n=>n.category))].sort();function ZP(n){if(!n||typeof n!="string")return null;const e=PS[n],t=CS.units.find(i=>i.id===n);return e?{id:n,...t||{},...e}:null}function yc(n=[]){return[...CS.units.map(t=>({...t,...PS[t.id]})).filter(t=>(t==null?void 0:t.id)&&(t==null?void 0:t.tenantName)),...n]}const Hr=VP(n=>({selectedUnit:null,drawerOpen:!1,drawerStep:"info",selectedCategories:[],activeFilters:[],userAddedUnits:[],units:yc(),setSelectedUnit:e=>{if(!e){n({selectedUnit:null,drawerOpen:!1,drawerStep:"info",selectedCategories:[]});return}n(t=>{const i=ZP(e)??t.userAddedUnits.find(r=>r.id===e)??null;return i?{selectedUnit:i,drawerOpen:!0,drawerStep:"info",selectedCategories:[]}:t})},addUserUnit:e=>n(t=>{const i=[...t.userAddedUnits,e];return{userAddedUnits:i,units:yc(i),selectedUnit:e,drawerOpen:!0,drawerStep:"info",selectedCategories:[]}}),removeUserUnit:e=>n(t=>{var s;const i=t.userAddedUnits.filter(a=>a.id!==e),r=((s=t.selectedUnit)==null?void 0:s.id)===e;return{userAddedUnits:i,units:yc(i),selectedUnit:r?null:t.selectedUnit,drawerOpen:r?!1:t.drawerOpen,drawerStep:r?"info":t.drawerStep,selectedCategories:r?[]:t.selectedCategories}}),setUnitsFromStore:()=>n(e=>{const t=e.userAddedUnits??[];return{units:yc(t)}}),setDrawerOpen:e=>n({drawerOpen:e}),setDrawerStep:e=>n({drawerStep:e}),toggleSelectedCategory:e=>n(t=>({selectedCategories:t.selectedCategories.includes(e)?t.selectedCategories.filter(i=>i!==e):[...t.selectedCategories,e]})),removeSelectedCategory:e=>n(t=>({selectedCategories:t.selectedCategories.filter(i=>i!==e)})),clearSelectedCategories:()=>n({selectedCategories:[]}),closeDrawer:()=>n({drawerOpen:!1,selectedUnit:null,drawerStep:"info",selectedCategories:[]}),toggleFilter:e=>n(t=>e!=="expiring"&&e!=="underperforming"?t:{activeFilters:t.activeFilters.includes(e)?t.activeFilters.filter(s=>s!==e):[...t.activeFilters,e]}),resetFilters:()=>n({activeFilters:[]})}));function QP({visible:n,x:e,y:t,content:i}){return!n||!i?null:P.jsxs("div",{className:"unit-tooltip",style:{left:e,top:t},children:[P.jsx("div",{children:i.tenantName}),P.jsxs("div",{children:[i.sqFt.toLocaleString()," sq ft"]}),P.jsxs("div",{children:["Expires ",i.leaseExpiry]})]})}function JP({onResetViewReady:n}){const e=Qe.useRef(null),t=Qe.useRef(new Map),i=Qe.useRef(new Map),r=Qe.useRef(null),s=Qe.useRef(null),a=Qe.useRef({position:{x:100,y:100,z:100},target:{x:0,y:0,z:0},zoom:1.6}),[o,l]=Qe.useState({visible:!1,x:0,y:0,content:null}),c=Hr(m=>{var v;return((v=m.selectedUnit)==null?void 0:v.id)??null}),u=Hr(m=>m.setSelectedUnit),h=Hr(m=>m.activeFilters),f=Hr(m=>m.units);Qe.useEffect(()=>{const m=e.current;if(!m)return;const v=new zT;v.background=null;const _=m.clientWidth,d=m.clientHeight,g=_/d,x=24,S=new Bu(-x*g,x*g,x,-x,.1,300);S.position.set(100,100,100),S.zoom=1.6,S.updateProjectionMatrix(),S.lookAt(0,0,0),s.current=S;const E=new r2({antialias:!0});E.setClearColor(16777215,0),E.setSize(_,d),E.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.appendChild(E.domElement);const w=new y2;w.setSize(_,d),w.domElement.style.position="absolute",w.domElement.style.top="0",w.domElement.style.pointerEvents="none",m.appendChild(w.domElement);const A=new a2(S,E.domElement);A.enableRotate=!1,A.enableDamping=!0,A.minZoom=.65,A.maxZoom=1.7,A.maxPolarAngle=Math.PI/2,A.minPolarAngle=0,A.target.set(0,0,0),r.current=A;const y=new aw("#ffffff",1.2),T=new sw("#ffffff",.8);T.position.set(20,50,20),v.add(y,T);const L=new oi(new Cl(48,30),new A0({color:"#D1D5DB",roughness:.95}));L.rotation.x=-Math.PI/2,L.position.y=-.7,v.add(L);const R=new cw,O=new Fe,F=[];f.forEach($=>{const ee=new Gs($.width,$.height,$.depth),ve=new A0({color:"#9CA3AF",roughness:.6,metalness:.1,transparent:!0,opacity:1}),Ce=new oi(ee,ve);Ce.position.set($.x,$.height/2,$.z),Ce.userData={unitId:$.id},v.add(Ce);const Ie=new oi(new Gs($.width+.28,$.height+.08,$.depth+.28),new gm({color:"#ffffff",transparent:!0,opacity:.2}));Ie.position.set($.x,$.height/2-.04,$.z),Ie.visible=!1,v.add(Ie),t.current.set($.id,{mesh:Ce,glow:Ie,baseY:$.height/2}),F.push(Ce);const Y=document.createElement("div");Y.className="unit-label",Y.textContent=$.tenantName;const se=new x2(Y);se.position.set($.x,$.height+.4,$.z),v.add(se),i.current.set($.id,Y)});const X=new oo;F.forEach($=>X.expandByObject($));const z=new V;X.getCenter(z),A.target.set(z.x,0,z.z),S.lookAt(z.x,0,z.z),a.current={position:{x:S.position.x,y:S.position.y,z:S.position.z},target:{x:z.x,y:0,z:z.z},zoom:S.zoom};const H=()=>{A.update(),E.render(v,S),w.render(v,S),requestAnimationFrame(H)};H();const I=$=>{var Ce;const ee=E.domElement.getBoundingClientRect();return O.x=($.clientX-ee.left)/ee.width*2-1,O.y=-(($.clientY-ee.top)/ee.height)*2+1,R.setFromCamera(O,S),((Ce=R.intersectObjects(F)[0])==null?void 0:Ce.object)??null},B=$=>{const ee=I($);if(E.domElement.style.cursor=ee?"pointer":"default",F.forEach(ve=>{Ms.to(ve.scale,{x:ee===ve?1.05:1,y:ee===ve?1.05:1,z:ee===ve?1.05:1,duration:.14})}),ee){const ve=ee.userData.unitId,Ce=f.find(Ie=>Ie.id===ve);if(!Ce)return;l({visible:!0,x:$.clientX+12,y:$.clientY+12,content:{tenantName:Ce.tenantName,sqFt:Ce.sqFt,leaseExpiry:Om(Ce.leaseExpiry)}})}else l(ve=>({...ve,visible:!1}))},j=$=>{const ee=I($);u(ee?ee.userData.unitId:null)},J=()=>{const $=m.clientWidth,ee=m.clientHeight,ve=$/ee;S.left=-x*ve,S.right=x*ve,S.top=x,S.bottom=-x,S.updateProjectionMatrix(),E.setSize($,ee),w.setSize($,ee)};return E.domElement.addEventListener("pointermove",B),E.domElement.addEventListener("click",j),window.addEventListener("resize",J),()=>{E.domElement.style.cursor="default",E.domElement.removeEventListener("pointermove",B),E.domElement.removeEventListener("click",j),window.removeEventListener("resize",J),A.dispose(),E.dispose(),m.removeChild(E.domElement),m.removeChild(w.domElement),t.current.clear(),i.current.clear()}},[u,f]),Qe.useEffect(()=>{f.forEach(m=>{const v=t.current.get(m.id);if(!v)return;const _=KP(m,c===m.id,h),d=v.mesh.material;d.color.set(_.color);const g=_.meshOpacity??1;d.transparent=g<1,d.opacity=g,d.depthWrite=g>=1,v.glow.visible=!!_.glowColor,_.glowColor&&v.glow.material.color.set(_.glowColor);const x=i.current.get(m.id);x&&(x.style.opacity=`${_.labelOpacity}`,_.labelMuted===!0?(x.style.color="#9CA3AF",x.style.fontWeight="600",x.style.textShadow="none"):(x.style.color="#ffffff",x.style.fontWeight="700",x.style.textShadow="0px 1px 3px rgba(0, 0, 0, 0.5)"));const S=c===m.id?v.baseY+.8:v.baseY;Ms.to(v.mesh.position,{y:S,duration:.3,ease:"power2.out"}),Ms.to(v.glow.position,{y:S-.04,duration:.3,ease:"power2.out"})})},[f,h,c]);const p=()=>{if(!s.current||!r.current)return;const m=a.current;Ms.to(s.current.position,{x:m.position.x,y:m.position.y,z:m.position.z,duration:.8,onUpdate:()=>{s.current.lookAt(m.target.x,m.target.y,m.target.z)}}),Ms.to(r.current.target,{x:m.target.x,y:m.target.y,z:m.target.z,duration:.8}),Ms.to(s.current,{zoom:m.zoom,duration:.8,onUpdate:()=>s.current.updateProjectionMatrix()})};return Qe.useEffect(()=>{typeof n=="function"&&n(p)},[n]),P.jsxs("div",{className:"canvas-wrap",children:[P.jsx("div",{ref:e,className:"canvas-mount"}),P.jsx(QP,{...o})]})}function e3({onResetView:n}){const{activeFilters:e,toggleFilter:t,resetFilters:i,units:r}=Hr(),[s,a]=Qe.useState(!1),[o,l]=Qe.useState("Capilano Mall"),c=["Capilano Mall","Bower Place","Willowbrook Shopping Centre"],u=Qe.useMemo(()=>r.filter(d=>bS(d,e)),[r,e]),h=r.filter(d=>{const g=ju(d.leaseExpiry);return g==="under12"||g==="under24"}).length,f=r.filter(d=>d.status==="underperforming").length,p=u.map(d=>d.leaseExpiry).sort()[0],m=u.reduce((d,g)=>d+g.sqFt,0),v=e.includes("expiring"),_=e.includes("underperforming");return P.jsxs("aside",{className:"filter-panel",children:[P.jsxs("div",{className:"filter-top",children:[P.jsx("h2",{children:"Filters & Controls"}),P.jsxs("button",{type:"button",className:`toggle-btn ${v?"toggle-btn-on":""}`,onClick:()=>t("expiring"),children:["Expiring Soon",P.jsx("span",{className:"toggle-count",children:h})]}),P.jsxs("button",{type:"button",className:`toggle-btn ${_?"toggle-btn-on":""}`,onClick:()=>t("underperforming"),children:["Underperforming",P.jsx("span",{className:"toggle-count",children:f})]}),P.jsxs("div",{className:"summary-card",children:[P.jsx("h3",{children:"Live summary"}),P.jsxs("p",{children:[P.jsx("strong",{children:u.length})," units highlighted"]}),P.jsxs("p",{children:["Earliest expiry: ",P.jsx("strong",{children:p?Om(p):"N/A"})]}),P.jsxs("p",{children:["Sq ft at risk: ",P.jsx("strong",{children:m.toLocaleString()})]})]})]}),P.jsxs("div",{className:"filter-bottom",children:[P.jsx("div",{className:"filter-bottom-divider"}),P.jsx("h3",{className:"section-label",children:"ASSET"}),P.jsxs("div",{className:"layout-selector-wrap",children:[P.jsxs("button",{type:"button",className:"layout-selector-btn",onClick:()=>a(d=>!d),children:[P.jsx("span",{children:o}),P.jsx(yE,{size:14})]}),s?P.jsx("div",{className:"layout-dropdown",children:c.map(d=>P.jsxs("button",{className:d===o?"layout-option active":"layout-option",onClick:()=>{l(d),a(!1)},children:[P.jsx("span",{children:d}),d===o?P.jsx(qx,{size:14}):null]},d))}):null]}),P.jsxs("div",{className:"filter-bottom-actions",children:[P.jsx("button",{type:"button",className:"reset-btn",onClick:i,children:"Reset Filters"}),P.jsx("button",{type:"button",className:"reset-view-btn",onClick:n,children:"Reset View"})]})]})]})}const t3=["Apparel","Food & Beverage","Electronics","Footwear","Sporting Goods","Toys & Hobbies","Beauty"],n3={U01:[{rank:1,brand:"Lululemon",score:94,category:"Sporting Goods",idealSize:"3,500-5,000 sq ft",rationale:["Massive Canadian brand momentum; flagship format 3,500-5,000 sq ft.","Highest sales/sq ft in category; loyal customer base drives repeat traffic."],dimensions:{financialHealth:93,expansionMomentum:95,categoryFit:94,sizeCompatibility:90}},{rank:2,brand:"Decathlon",score:88,category:"Sporting Goods",idealSize:"4,000-8,000 sq ft",rationale:["Aggressive Canadian expansion 2024-25; large-format value sporting goods.","Fills price-point gap above Sport Chek."],dimensions:{financialHealth:88,expansionMomentum:89,categoryFit:87,sizeCompatibility:85}},{rank:3,brand:"MEC (Mountain Equipment Co.)",score:81,category:"Sporting Goods",idealSize:"3,000-5,000 sq ft",rationale:["Restructured and growing again; outdoor/active focus.","Strong BC and urban demo alignment."],dimensions:{financialHealth:80,expansionMomentum:81,categoryFit:82,sizeCompatibility:80}},{rank:1,brand:"Aritzia",score:92,category:"Apparel",idealSize:"3,500-5,000 sq ft",rationale:["Top-performing Canadian retailer; flagship format 3,500-5,000 sq ft.","Exceptionally high sales/sq ft; strong female 18-40 demographic."],dimensions:{financialHealth:92,expansionMomentum:93,categoryFit:92,sizeCompatibility:91}},{rank:2,brand:"H&M Home + Apparel",score:85,category:"Apparel",idealSize:"4,000-6,000 sq ft",rationale:["Expanding combined format in Canada; drives high foot traffic.","Accessible price point."],dimensions:{financialHealth:86,expansionMomentum:84,categoryFit:85,sizeCompatibility:82}},{rank:3,brand:"Zara",score:82,category:"Apparel",idealSize:"3,000-5,000 sq ft",rationale:["Premium fast fashion; very high conversion.","Consistent performer across Canadian malls."],dimensions:{financialHealth:83,expansionMomentum:82,categoryFit:83,sizeCompatibility:80}}],U02:[{rank:1,brand:"Zara",score:91,category:"Apparel",idealSize:"5,000-7,000 sq ft",rationale:["Direct comp replacement; large format; premium positioning.","Strong international brand recognition."],dimensions:{financialHealth:90,expansionMomentum:91,categoryFit:92,sizeCompatibility:88}},{rank:2,brand:"Uniqlo",score:88,category:"Apparel",idealSize:"6,000-8,000 sq ft",rationale:["Actively expanding in Canada; basics-focused.","Very high repeat visit rate and basket size."],dimensions:{financialHealth:88,expansionMomentum:89,categoryFit:88,sizeCompatibility:85}},{rank:3,brand:"Gap (Flagship)",score:79,category:"Apparel",idealSize:"5,000-7,000 sq ft",rationale:["Gap flagship format; refreshed brand identity; known anchor draw."],dimensions:{financialHealth:79,expansionMomentum:78,categoryFit:80,sizeCompatibility:78}},{rank:1,brand:"Lululemon",score:90,category:"Sporting Goods",idealSize:"5,000-7,000 sq ft",rationale:["Would absorb the large footprint well; flagship format.","Highest revenue/sq ft in Canadian mall retail."],dimensions:{financialHealth:92,expansionMomentum:90,categoryFit:89,sizeCompatibility:87}},{rank:2,brand:"Adidas Brand Center",score:83,category:"Sporting Goods",idealSize:"5,000-7,000 sq ft",rationale:["Full-line brand centers expanding in Canada.","Strong brand equity post-collaboration era."],dimensions:{financialHealth:84,expansionMomentum:83,categoryFit:82,sizeCompatibility:80}},{rank:3,brand:"Nike Clearance",score:77,category:"Sporting Goods",idealSize:"5,000-8,000 sq ft",rationale:["Factory store format works at this sq ft; strong outlet traffic driver.","Proven performer in suburban Canadian malls."],dimensions:{financialHealth:78,expansionMomentum:76,categoryFit:77,sizeCompatibility:75}}],U03:[{rank:1,brand:"Uniqlo",score:89,category:"Apparel",idealSize:"4,000-6,000 sq ft",rationale:["5,000 sq ft sweet spot for Uniqlo; expanding across Canada rapidly.","Basics positioning complements surrounding stores."],dimensions:{financialHealth:88,expansionMomentum:90,categoryFit:89,sizeCompatibility:86}},{rank:2,brand:"Banana Republic",score:84,category:"Apparel",idealSize:"4,000-6,000 sq ft",rationale:["Premium positioning upgrade from Old Navy; strong loyalty program.","Same Gap Inc. supply chain familiarity."],dimensions:{financialHealth:84,expansionMomentum:83,categoryFit:85,sizeCompatibility:82}},{rank:3,brand:"Winners / HomeSense Combo",score:78,category:"Apparel",idealSize:"5,000-8,000 sq ft",rationale:["High traffic draw; value positioning; proven anchor for mid-tier malls."],dimensions:{financialHealth:79,expansionMomentum:77,categoryFit:78,sizeCompatibility:74}},{rank:1,brand:"Foot Locker (Power Store)",score:85,category:"Footwear",idealSize:"4,000-6,000 sq ft",rationale:["Large-format Power Store concept; experiential retail.","Very high youth traffic."],dimensions:{financialHealth:85,expansionMomentum:86,categoryFit:85,sizeCompatibility:83}},{rank:2,brand:"DSW (Designer Shoe Warehouse)",score:80,category:"Footwear",idealSize:"5,000-7,000 sq ft",rationale:["Expanding in Canada; wide selection drives destination shopping."],dimensions:{financialHealth:81,expansionMomentum:79,categoryFit:80,sizeCompatibility:78}},{rank:3,brand:"Browns Shoes",score:74,category:"Footwear",idealSize:"3,500-5,000 sq ft",rationale:["Canadian heritage brand; premium positioning; loyal older demographic."],dimensions:{financialHealth:75,expansionMomentum:73,categoryFit:74,sizeCompatibility:76}}],U04:[{rank:1,brand:"Miniso",score:91,category:"Toys & Hobbies",idealSize:"1,000-2,000 sq ft",rationale:["Aggressive Canadian expansion, 32 new stores in 2023-24.","Targets 1,000-2,000 sq ft footprints.","Strong youth demographic and impulse conversion."],dimensions:{financialHealth:90,expansionMomentum:93,categoryFit:91,sizeCompatibility:89}},{rank:2,brand:"Lego Certified Store",score:85,category:"Toys & Hobbies",idealSize:"1,200-2,000 sq ft",rationale:["Mall-first expansion strategy in premium markets.","Exceptional brand equity and destination value.","High dwell time and strong repeat visitation."],dimensions:{financialHealth:88,expansionMomentum:82,categoryFit:86,sizeCompatibility:83}},{rank:3,brand:"Mastermind Toys",score:78,category:"Toys & Hobbies",idealSize:"1,000-1,800 sq ft",rationale:["Premium toy positioning with family loyalty.","Format performs well in 1,000-1,800 sq ft bays.","Category diversification from electronics exposure."],dimensions:{financialHealth:76,expansionMomentum:77,categoryFit:80,sizeCompatibility:78}},{rank:1,brand:"Koodo / TELUS Kiosk",score:88,category:"Electronics",idealSize:"600-1,000 sq ft",rationale:["National rollout of inline and kiosk telecom formats.","Strong Q1 traffic and conversion signal.","Fills telecom gap created by tenant churn."],dimensions:{financialHealth:86,expansionMomentum:89,categoryFit:90,sizeCompatibility:75}},{rank:2,brand:"Samsung Experience",score:82,category:"Electronics",idealSize:"1,200-2,000 sq ft",rationale:["Expanding mall presence in Canada.","Experiential retail model lifts dwell time.","Strong adjacency fit with tech-led corridors."],dimensions:{financialHealth:84,expansionMomentum:81,categoryFit:83,sizeCompatibility:80}},{rank:3,brand:"iStore (Authorized Apple)",score:76,category:"Electronics",idealSize:"1,000-1,600 sq ft",rationale:["High traffic and premium customer alignment.","Consistent sales productivity in suburban malls.","Matches local demographic purchasing power."],dimensions:{financialHealth:79,expansionMomentum:74,categoryFit:77,sizeCompatibility:75}}],U05:[{rank:1,brand:"Anthropologie",score:88,category:"Apparel",idealSize:"1,800-2,500 sq ft",rationale:["Canadian expansion underway with inline formats.","Targets 1,800-2,500 sq ft footprints.","Strong female 28-45 demographic fit and higher ATV."],dimensions:{financialHealth:88,expansionMomentum:89,categoryFit:90,sizeCompatibility:84}},{rank:2,brand:"Reitmans",score:82,category:"Apparel",idealSize:"1,500-2,200 sq ft",rationale:["Post-restructuring growth improving store economics.","Actively targeting mid-tier malls.","Resilient Canadian brand awareness and loyalty."],dimensions:{financialHealth:80,expansionMomentum:83,categoryFit:83,sizeCompatibility:82}},{rank:3,brand:"Banana Republic",score:79,category:"Apparel",idealSize:"2,000-3,000 sq ft",rationale:["Rightsizing to stronger inline format strategy.","Strong loyalty program supporting repeat spend.","Upgrades fashion mix quality for the zone."],dimensions:{financialHealth:79,expansionMomentum:78,categoryFit:80,sizeCompatibility:77}}],U06:[{rank:1,brand:"Koodo / TELUS Kiosk",score:93,category:"Electronics",idealSize:"600-1,000 sq ft",rationale:["National rollout of kiosk formats.","Ideal 600-1,000 sq ft fit.","Directly fills telecom gap left by Wirelesswave."],dimensions:{financialHealth:91,expansionMomentum:95,categoryFit:93,sizeCompatibility:93}},{rank:2,brand:"Samsung Kiosk",score:84,category:"Electronics",idealSize:"700-1,100 sq ft",rationale:["Compact experience format is scaling.","High foot-traffic conversion profile.","Good fit for this small inline bay."],dimensions:{financialHealth:85,expansionMomentum:84,categoryFit:83,sizeCompatibility:84}},{rank:3,brand:"Fossil Group",score:76,category:"Electronics",idealSize:"1,000-1,800 sq ft",rationale:["Rightsizing portfolio for productive centres.","Accessories + electronics crossover potential.","Brings premium gifting behavior to corridor."],dimensions:{financialHealth:74,expansionMomentum:75,categoryFit:77,sizeCompatibility:72}},{rank:1,brand:"Pandora",score:87,category:"Beauty",idealSize:"700-1,100 sq ft",rationale:["Converting small-format spaces with high productivity.","700-1,100 sq ft aligns to compact box.","Very high sales/sq ft potential."],dimensions:{financialHealth:86,expansionMomentum:88,categoryFit:88,sizeCompatibility:86}},{rank:2,brand:"Sephora Mini",score:80,category:"Beauty",idealSize:"800-1,200 sq ft",rationale:["Piloting smaller Studio concept in Canada.","Beauty remains a reliable traffic driver.","Strong conversion among younger demos."],dimensions:{financialHealth:83,expansionMomentum:79,categoryFit:82,sizeCompatibility:78}},{rank:3,brand:"Kiehl's",score:75,category:"Beauty",idealSize:"400-900 sq ft",rationale:["Mall kiosk expansion supported by L’Oreal.","Premium skincare positioning lifts tenant mix.","Compact footprint can work with low capex."],dimensions:{financialHealth:77,expansionMomentum:74,categoryFit:75,sizeCompatibility:74}}],U07:[{rank:1,brand:"Miniso",score:93,category:"Toys & Hobbies",idealSize:"1,000-2,000 sq ft",rationale:["1,000-2,000 sq ft target; same young female demographic as Claire's.","Accessories + lifestyle crossover; 32 new Canadian stores 2023-24."],dimensions:{financialHealth:91,expansionMomentum:94,categoryFit:93,sizeCompatibility:90}},{rank:2,brand:"Lego Certified Store",score:86,category:"Toys & Hobbies",idealSize:"1,200-1,800 sq ft",rationale:["Family traffic driver; extremely high dwell time; strong gifting category."],dimensions:{financialHealth:87,expansionMomentum:85,categoryFit:86,sizeCompatibility:84}},{rank:3,brand:"Lovisa",score:80,category:"Toys & Hobbies",idealSize:"800-1,200 sq ft",rationale:["Direct category replacement; affordable jewelry/accessories.","Very high sales density; strong teen demographic."],dimensions:{financialHealth:80,expansionMomentum:79,categoryFit:81,sizeCompatibility:82}},{rank:1,brand:"Kiehl's",score:88,category:"Beauty",idealSize:"1,000-1,500 sq ft",rationale:["Premium skincare; L'Oreal backing; strong loyalty program.","Premiumizes the zone."],dimensions:{financialHealth:89,expansionMomentum:87,categoryFit:88,sizeCompatibility:85}},{rank:2,brand:"Saje Wellness",score:82,category:"Beauty",idealSize:"1,000-1,400 sq ft",rationale:["Canadian wellness brand; compact format; essential oils and wellness growing category."],dimensions:{financialHealth:83,expansionMomentum:82,categoryFit:83,sizeCompatibility:81}},{rank:3,brand:"Faces Cosmetics",score:75,category:"Beauty",idealSize:"1,000-1,500 sq ft",rationale:["Canadian affordable beauty; accessible price point; consistent mall performer."],dimensions:{financialHealth:76,expansionMomentum:74,categoryFit:75,sizeCompatibility:78}}],U08:[{rank:1,brand:"Anthropologie",score:90,category:"Apparel",idealSize:"1,800-2,500 sq ft",rationale:["Lifestyle crossover appeal in affluent catchment.","1,800-2,500 sq ft format aligns with target bay.","Premiumizes the corridor and basket size."],dimensions:{financialHealth:90,expansionMomentum:89,categoryFit:91,sizeCompatibility:88}},{rank:2,brand:"&Other Stories",score:83,category:"Apparel",idealSize:"1,500-2,200 sq ft",rationale:["H&M Group brand scaling in Canada.","Strong alignment with fashion-forward demographic.","Right-sized for productive inline tenancy."],dimensions:{financialHealth:83,expansionMomentum:84,categoryFit:82,sizeCompatibility:83}},{rank:3,brand:"Aritzia TNA",score:78,category:"Apparel",idealSize:"1,200-2,000 sq ft",rationale:["Sub-brand format fits smaller footprints.","Strong Canadian brand affinity and demand.","Upgrades fashion depth in current mix."],dimensions:{financialHealth:79,expansionMomentum:77,categoryFit:79,sizeCompatibility:77}},{rank:1,brand:"Aesop",score:90,category:"Food & Beverage",idealSize:"1,000-2,000 sq ft",rationale:["Premium positioning fits surrounding tenant mix.","High sales/sq ft and strong brand heat.","Supports category depth with high quality operator."],dimensions:{financialHealth:91,expansionMomentum:88,categoryFit:90,sizeCompatibility:89}},{rank:2,brand:"Cacao Barry Café",score:80,category:"Food & Beverage",idealSize:"1,200-1,800 sq ft",rationale:["Experiential concept that drives destination traffic.","Balanced capex and fit-out complexity.","Well-matched footprint for current bay."],dimensions:{financialHealth:79,expansionMomentum:80,categoryFit:81,sizeCompatibility:80}},{rank:3,brand:"Nespresso Boutique",score:77,category:"Food & Beverage",idealSize:"500-900 sq ft",rationale:["High revenue density in compact boutique format.","Experiential model increases dwell and conversion.","Can operate as premium small-footprint concept."],dimensions:{financialHealth:81,expansionMomentum:75,categoryFit:78,sizeCompatibility:70}}],U09:[{rank:1,brand:"Banana Republic",score:84,category:"Apparel",idealSize:"2,000-3,000 sq ft",rationale:["Rightsizing to inline formats.","1,500 sq ft can support accessories-light format strategy.","Recognizable brand with stable spend profile."],dimensions:{financialHealth:83,expansionMomentum:82,categoryFit:84,sizeCompatibility:71}},{rank:2,brand:"J.Crew",score:80,category:"Apparel",idealSize:"1,200-2,000 sq ft",rationale:["Re-entering Canadian market with curated formats.","1,200-2,000 sq ft target fits this bay.","Premium casual positioning improves mix."],dimensions:{financialHealth:79,expansionMomentum:81,categoryFit:80,sizeCompatibility:80}},{rank:3,brand:"Club Monaco",score:76,category:"Apparel",idealSize:"1,200-1,800 sq ft",rationale:["Canadian origin premium-casual brand.","Strong overlap with local high-income demographic.","Brings fashion credibility to underperforming zone."],dimensions:{financialHealth:75,expansionMomentum:76,categoryFit:77,sizeCompatibility:79}},{rank:1,brand:"Aesop",score:91,category:"Beauty",idealSize:"1,000-2,000 sq ft",rationale:["Converts underperforming zones into premium traffic.","High sales/sq ft benchmark and strong loyalty.","Premiumizes surrounding tenant adjacency."],dimensions:{financialHealth:92,expansionMomentum:90,categoryFit:92,sizeCompatibility:90}},{rank:2,brand:"Kiehl's",score:85,category:"Beauty",idealSize:"1,200-1,800 sq ft",rationale:["1,200-1,800 sq ft flagship format performs well.","L’Oreal backing reduces operator risk.","Strong repeat purchase and retention profile."],dimensions:{financialHealth:86,expansionMomentum:84,categoryFit:86,sizeCompatibility:84}},{rank:3,brand:"Bluemercury",score:79,category:"Beauty",idealSize:"1,000-1,600 sq ft",rationale:["Premium beauty apothecary positioning.","Strong female 30-50 demographic resonance.","Category diversification with high margin profile."],dimensions:{financialHealth:78,expansionMomentum:79,categoryFit:80,sizeCompatibility:79}}],U10:[{rank:1,brand:"Pokéworks",score:92,category:"Food & Beverage",idealSize:"800-1,200 sq ft",rationale:["Fast-casual poke concept with strong BC roots.","800-1,200 sq ft inline format is proven.","Expanding from Metro Vancouver with high lunch traffic."],dimensions:{financialHealth:90,expansionMomentum:93,categoryFit:92,sizeCompatibility:91}},{rank:2,brand:"Coco Fresh Tea & Juice",score:87,category:"Food & Beverage",idealSize:"600-1,000 sq ft",rationale:["Bubble tea demand remains very strong in Canada.","Low fit-out cost and operational flexibility.","Youth demographic driver with high repeat visits."],dimensions:{financialHealth:86,expansionMomentum:88,categoryFit:87,sizeCompatibility:84}},{rank:3,brand:"Manchu Wok",score:78,category:"Food & Beverage",idealSize:"900-1,400 sq ft",rationale:["Refreshed brand identity in 2024.","Familiar operator for BC shoppers.","Low-risk, proven format for this unit size."],dimensions:{financialHealth:79,expansionMomentum:76,categoryFit:78,sizeCompatibility:79}}],U11:[{rank:1,brand:"Coco Fresh Tea & Juice",score:94,category:"Food & Beverage",idealSize:"600-1,000 sq ft",rationale:["Bubble tea category leading brand; extremely low fit-out cost.","Highest growth F&B category in Canadian malls 2024."],dimensions:{financialHealth:92,expansionMomentum:95,categoryFit:94,sizeCompatibility:88}},{rank:2,brand:"Aritea",score:87,category:"Food & Beverage",idealSize:"700-1,000 sq ft",rationale:["Premium tea concept; growing Canadian presence; higher ATV than bubble tea competitors."],dimensions:{financialHealth:86,expansionMomentum:87,categoryFit:86,sizeCompatibility:85}},{rank:3,brand:"Tim Hortons Kiosk",score:80,category:"Food & Beverage",idealSize:"600-1,000 sq ft",rationale:["Kiosk format works at compact sq ft; guaranteed traffic.","Canadian brand recognition unmatched."],dimensions:{financialHealth:84,expansionMomentum:78,categoryFit:80,sizeCompatibility:82}}],U12:[{rank:1,brand:"Pokéworks",score:91,category:"Food & Beverage",idealSize:"800-1,200 sq ft",rationale:["Poke category growing rapidly; healthy fast casual.","Strong lunch and dinner daypart performance."],dimensions:{financialHealth:90,expansionMomentum:91,categoryFit:90,sizeCompatibility:88}},{rank:2,brand:"Freshii",score:84,category:"Food & Beverage",idealSize:"900-1,300 sq ft",rationale:["Health-focused fast casual; Canadian brand.","Appeals to health-conscious suburban demo."],dimensions:{financialHealth:85,expansionMomentum:83,categoryFit:84,sizeCompatibility:82}},{rank:3,brand:"Booster Juice",score:78,category:"Food & Beverage",idealSize:"800-1,100 sq ft",rationale:["Canadian smoothie/juice brand; works well as secondary F&B tenant.","Consistent traffic."],dimensions:{financialHealth:79,expansionMomentum:77,categoryFit:78,sizeCompatibility:80}}],U13:[{rank:1,brand:"Anthropologie",score:90,category:"Apparel",idealSize:"1,800-2,500 sq ft",rationale:["2,400 sq ft is ideal for Anthropologie inline format; lifestyle brand elevates surrounding tenants.","Strong female 28-45 demo."],dimensions:{financialHealth:90,expansionMomentum:89,categoryFit:91,sizeCompatibility:88}},{rank:2,brand:"Club Monaco",score:85,category:"Apparel",idealSize:"2,000-2,500 sq ft",rationale:["Canadian origin brand; premium casual; loyal upscale demographic.","Differentiates from fast fashion."],dimensions:{financialHealth:86,expansionMomentum:84,categoryFit:85,sizeCompatibility:84}},{rank:3,brand:"J.Crew",score:80,category:"Apparel",idealSize:"2,000-3,000 sq ft",rationale:["Re-entering Canadian market aggressively; classic American style.","Strong brand recognition."],dimensions:{financialHealth:80,expansionMomentum:81,categoryFit:80,sizeCompatibility:78}},{rank:1,brand:"Earls Kitchen (Café Format)",score:82,category:"Food & Beverage",idealSize:"2,000-3,000 sq ft",rationale:["Café/express format works at 2,400 sq ft; premium casual dining.","Strong BC brand recognition."],dimensions:{financialHealth:83,expansionMomentum:82,categoryFit:81,sizeCompatibility:80}},{rank:2,brand:"Cactus Club Café (Express)",score:78,category:"Food & Beverage",idealSize:"2,000-2,800 sq ft",rationale:["Smaller café formats being piloted; premium positioning; BC origin brand."],dimensions:{financialHealth:79,expansionMomentum:78,categoryFit:79,sizeCompatibility:77}},{rank:3,brand:"Freshii",score:74,category:"Food & Beverage",idealSize:"1,500-2,500 sq ft",rationale:["Health fast casual; larger format works for dine-in component.","Consistent lunch traffic."],dimensions:{financialHealth:76,expansionMomentum:73,categoryFit:74,sizeCompatibility:75}}],U14:[{rank:1,brand:"Koodo / TELUS Kiosk",score:95,category:"Electronics",idealSize:"600-1,000 sq ft",rationale:["Direct category replacement; fills telecom gap; national rollout program active."],dimensions:{financialHealth:94,expansionMomentum:96,categoryFit:95,sizeCompatibility:93}},{rank:2,brand:"Rogers / Fido Kiosk",score:88,category:"Electronics",idealSize:"700-1,100 sq ft",rationale:["Competing telecom brand; same footprint; guaranteed national ad support."],dimensions:{financialHealth:87,expansionMomentum:88,categoryFit:87,sizeCompatibility:86}},{rank:3,brand:"Samsung Kiosk",score:80,category:"Electronics",idealSize:"700-1,000 sq ft",rationale:["Brand experience kiosk format; high traffic converter in electronics category."],dimensions:{financialHealth:82,expansionMomentum:80,categoryFit:81,sizeCompatibility:82}},{rank:1,brand:"Pandora",score:90,category:"Beauty",idealSize:"800-1,100 sq ft",rationale:["900-1,100 sq ft is Pandora's sweet spot; very high sales/sq ft globally.","Strong gifting and repeat purchase model."],dimensions:{financialHealth:91,expansionMomentum:89,categoryFit:90,sizeCompatibility:88}},{rank:2,brand:"Kiehl's",score:83,category:"Beauty",idealSize:"900-1,500 sq ft",rationale:["Premium skincare; L'Oreal Group backing; strong repeat customer base."],dimensions:{financialHealth:84,expansionMomentum:82,categoryFit:83,sizeCompatibility:81}},{rank:3,brand:"The Ordinary (DECIEM)",score:76,category:"Beauty",idealSize:"700-1,000 sq ft",rationale:["Growing standalone presence; cult brand drives destination visits.","Strong online-to-store conversion."],dimensions:{financialHealth:77,expansionMomentum:75,categoryFit:76,sizeCompatibility:79}}],U16:[{rank:1,brand:"Kiehl's Kiosk",score:89,category:"Beauty",idealSize:"400-800 sq ft",rationale:["Mall kiosk expansion in Canada is active.","400-800 sq ft ideal format for this bay.","L’Oreal Group backing reduces risk."],dimensions:{financialHealth:90,expansionMomentum:88,categoryFit:89,sizeCompatibility:90}},{rank:2,brand:"Saje Wellness",score:83,category:"Beauty",idealSize:"400-700 sq ft",rationale:["Canadian wellness brand with compact-format strength.","Sub-800 sq ft footprints perform well.","Strong natural product category demand."],dimensions:{financialHealth:82,expansionMomentum:83,categoryFit:84,sizeCompatibility:86}},{rank:3,brand:"The Ordinary (DECIEM)",score:76,category:"Beauty",idealSize:"300-600 sq ft",rationale:["Cult skincare brand with strong loyalty.","Very small format supports high throughput.","Attracts destination visits from younger demos."],dimensions:{financialHealth:75,expansionMomentum:77,categoryFit:76,sizeCompatibility:80}},{rank:1,brand:"Nespresso Kiosk",score:84,category:"Electronics",idealSize:"500-900 sq ft",rationale:["Compact boutique with high revenue density.","Experiential retail model drives dwell time.","Strong fit for 600 sq ft small-box tenancy."],dimensions:{financialHealth:86,expansionMomentum:82,categoryFit:83,sizeCompatibility:85}},{rank:2,brand:"Mejuri",score:78,category:"Electronics",idealSize:"600-1,000 sq ft",rationale:["Canadian brand scaling from DTC to malls.","600-1,000 sq ft inline target range.","Social-driven traffic and repeat purchases."],dimensions:{financialHealth:77,expansionMomentum:80,categoryFit:78,sizeCompatibility:78}},{rank:3,brand:"Koodo Kiosk",score:73,category:"Electronics",idealSize:"400-700 sq ft",rationale:["Smallest kiosk format works at this size.","Telecom demand remains resilient.","Fast deployment model for quick occupancy."],dimensions:{financialHealth:74,expansionMomentum:72,categoryFit:74,sizeCompatibility:75}}]};function i3(n){return typeof n!="number"||Number.isNaN(n)?"#94a3b8":n>=85?"#22C55E":n>=70?"#F59E0B":"#EF4444"}function r3(n){return typeof n!="number"||Number.isNaN(n)?{bg:"#E5E7EB",text:"#374151"}:n>=85?{bg:"#DCFCE7",text:"#16A34A"}:n>=70?{bg:"#FEF3C7",text:"#D97706"}:{bg:"#FEE2E2",text:"#DC2626"}}function s3({recommendation:n}){if(!n)return null;const e=n.dimensions??{},t=typeof e.financialHealth=="number"?e.financialHealth:0,i=typeof e.expansionMomentum=="number"?e.expansionMomentum:0,r=typeof e.categoryFit=="number"?e.categoryFit:0,s=typeof e.sizeCompatibility=="number"?e.sizeCompatibility:0,a=[["Financial",t],["Expansion",i],["Category Fit",r],["Space Compatibility",s]],o=Array.isArray(n.rationale)?n.rationale:[],{bg:l,text:c}=r3(n.score);return P.jsxs("article",{className:"tenant-card",children:[P.jsxs("div",{className:"tenant-card-head",children:[P.jsxs("div",{className:"tenant-card-head-left",children:[P.jsxs("div",{className:"rank-pill",children:["#",n.rank]}),P.jsx("h4",{className:"brand-name",children:n.brand})]}),P.jsxs("div",{className:"score-pill",style:{backgroundColor:l,color:c},children:[n.score,"% match"]})]}),P.jsx("p",{className:"why-title",children:"Why this brand"}),P.jsx("ul",{className:"rationale-list",children:o.map(u=>P.jsx("li",{children:u},u))}),P.jsx("div",{className:"mini-score-grid",children:a.map(([u,h])=>P.jsxs("div",{children:[P.jsxs("div",{className:"mini-score-label",children:[P.jsx("span",{children:u}),P.jsxs("span",{children:[h,"%"]})]}),P.jsx("div",{className:"mini-score-track",children:P.jsx("div",{className:"mini-score-fill",style:{width:`${Math.min(100,Math.max(0,h))}%`,backgroundColor:i3(h)}})})]},u))})]})}const a3=[{id:"Apparel",label:"Apparel",Icon:LE,examples:"Aritzia, Banana Republic, Anthropologie"},{id:"Food & Beverage",label:"Food & Beverage",Icon:TE,examples:"Pokeworks, Coco Fresh Tea, Tim Hortons"},{id:"Electronics",label:"Electronics",Icon:IE,examples:"Koodo, Apple, Samsung"},{id:"Beauty",label:"Beauty",Icon:FE,examples:"Sephora, Aesop, Kiehl's"},{id:"Footwear",label:"Footwear",Icon:AE,examples:"Foot Locker, Browns, Steve Madden"},{id:"Sporting Goods",label:"Sporting Goods",Icon:_E,examples:"Lululemon, Decathlon, MEC"},{id:"Toys & Hobbies",label:"Toys & Hobbies",Icon:PE,examples:"Miniso, Lego, Mastermind Toys"}];function o3(n){return n<1e3?"Ideal for kiosks, boutique beauty, and accessories":n<=2e3?"Suited for specialty retail, fast casual, and lifestyle":n<=4e3?"Fits mid-format apparel, food concepts, and electronics":"Large format - flagships, sporting goods, multi-concept"}function l3(n){if(n.status==="underperforming")return{label:"Underperforming",className:"status-badge status-badge-under"};const e=ju(n.leaseExpiry);return e==="under12"||e==="under24"?{label:"Expiring Soon",className:"status-badge status-badge-expiring"}:{label:"Stable",className:"status-badge status-badge-stable"}}function c3(){const{drawerOpen:n,drawerStep:e,selectedCategories:t,selectedUnit:i,closeDrawer:r,setDrawerStep:s,toggleSelectedCategory:a,removeSelectedCategory:o,removeUserUnit:l}=Hr(),[c,u]=Qe.useState(!1),[h,f]=Qe.useState(0),p=(i==null?void 0:i.id)??"",m=n3[p]??[],v=["Analyzing space profile...","Searching tenant database...","Scoring expansion signals...","Ranking best matches..."],_=Qe.useMemo(()=>{const w=Object.fromEntries(t.map(A=>[A,[]]));return m.forEach(A=>{A!=null&&A.category&&w[A.category]&&w[A.category].push(A)}),w},[t,m]);if(!n||!i||typeof i.sqFt!="number"||typeof i.leaseExpiry!="string"||!i.tenantName)return null;const d=l3(i),g=typeof i.remainingMonths=="number"?i.remainingMonths:0,x=g<12?"#DC2626":g<24?"#D97706":"#374151",S=typeof i.footTrafficIndex=="number"?i.footTrafficIndex:0,E=S<70?"#DC2626":S<100?"#D97706":"#16A34A";return P.jsx(P.Fragment,{children:P.jsxs("aside",{className:"recommendation-drawer",children:[P.jsxs("header",{className:"drawer-header",children:[P.jsxs("div",{children:[P.jsx("h3",{children:i.tenantName}),P.jsxs("p",{children:[i.id," · ",i.sqFt.toLocaleString()," sq ft"]})]}),P.jsx("button",{type:"button",className:"icon-btn",onClick:r,"aria-label":"Close drawer",children:P.jsx(Yx,{size:16})})]}),e==="info"?P.jsxs(P.Fragment,{children:[P.jsxs("div",{className:"drawer-body",children:[P.jsx("div",{className:"drawer-category-row",style:{marginBottom:12},children:P.jsx("span",{className:"category-tag",children:i.category})}),P.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 8px",marginBottom:12},children:[P.jsxs("div",{children:[P.jsx("p",{style:{fontSize:11,color:"#9CA3AF",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"Unit Size"}),P.jsxs("p",{style:{fontSize:15,fontWeight:700,color:"#0A1F3D",margin:"4px 0 0"},children:[i.sqFt.toLocaleString()," sq ft"]})]}),P.jsxs("div",{children:[P.jsx("p",{style:{fontSize:11,color:"#9CA3AF",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"Lease Expiry"}),P.jsx("p",{style:{fontSize:15,fontWeight:700,color:"#0A1F3D",margin:"4px 0 0"},children:Om(i.leaseExpiry)})]})]}),P.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:6,marginBottom:0},children:[P.jsx("p",{style:{fontSize:11,color:"#9CA3AF",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"STATUS"}),P.jsx("span",{className:d.className,children:d.label})]}),P.jsx("div",{style:{height:1,background:"#E2E8F0",width:"100%",margin:"12px 0"}}),P.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 8px",marginBottom:0},children:[P.jsxs("div",{children:[P.jsx("p",{style:{fontSize:11,color:"#9CA3AF",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"Current Rent"}),P.jsxs("p",{style:{fontSize:15,fontWeight:700,color:"#0A1F3D",margin:"4px 0 0"},children:["$",i.currentRent," / sq ft"]})]}),P.jsxs("div",{children:[P.jsx("p",{style:{fontSize:11,color:"#9CA3AF",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"Lease Signed"}),P.jsx("p",{style:{fontSize:15,fontWeight:700,color:"#0A1F3D",margin:"4px 0 0"},children:i.signingDate})]})]}),P.jsxs("div",{style:{marginBottom:0},children:[P.jsx("p",{style:{fontSize:11,color:"#9CA3AF",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"Remaining Term"}),P.jsxs("p",{style:{fontSize:15,fontWeight:700,color:x,margin:"4px 0 0"},children:[g," months remaining"]})]}),P.jsx("div",{style:{height:1,background:"#E2E8F0",width:"100%",margin:"12px 0"}}),P.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 8px",marginBottom:12},children:[P.jsxs("div",{children:[P.jsx("p",{style:{fontSize:11,color:"#9CA3AF",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"Foot Traffic Index"}),P.jsxs("p",{style:{fontSize:15,fontWeight:700,color:E,margin:"4px 0 0"},children:[S," ",P.jsx("span",{style:{fontSize:12,fontWeight:400,color:"#9CA3AF"},children:"(avg: 100)"})]})]}),P.jsxs("div",{children:[P.jsx("p",{style:{fontSize:11,color:"#9CA3AF",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"Anchor Proximity"}),P.jsx("p",{style:{fontSize:14,fontWeight:600,color:"#374151",margin:"4px 0 0"},children:i.anchorProximity})]})]}),P.jsx("div",{style:{height:1,background:"#E2E8F0",width:"100%",margin:"12px 0"}}),P.jsxs("div",{style:{background:"#fff",border:"1px solid #E2E8F0",borderRadius:8,padding:12},children:[P.jsx("div",{style:{fontWeight:700,color:"#0A1F3D",marginBottom:6},children:"Performance Note"}),P.jsx("div",{style:{color:"#64748B",fontSize:13},children:i.performanceNote??"—"})]})]}),P.jsxs("div",{className:"drawer-footer",children:[P.jsx("button",{type:"button",className:"find-replacement-btn",onClick:()=>s("category"),children:"Find Replacement Tenants →"}),i.userAdded?P.jsx("button",{type:"button",className:"remove-unit-link",onClick:()=>{window.confirm(`Remove ${i.tenantName} from the map?
This cannot be undone.`)&&l(i.id)},children:"Remove this unit"}):null]})]}):null,e==="category"?P.jsxs(P.Fragment,{children:[P.jsxs("div",{className:"drawer-body",children:[P.jsx("button",{type:"button",className:"text-back-link",onClick:()=>s("info"),children:"← Back"}),P.jsxs("h4",{className:"category-heading",children:["Top categories for a ",i.sqFt.toLocaleString()," sq ft space"]}),P.jsx("p",{className:"category-subtext",children:o3(i.sqFt)}),P.jsx("div",{className:"category-card-grid",children:a3.filter(w=>t3.includes(w.id)).map(w=>{const{id:A,label:y,examples:T}=w,L=t.includes(A);return P.jsxs("button",{type:"button",className:L?"category-card selected":"category-card",onClick:()=>a(A),children:[P.jsx(w.Icon,{size:24}),P.jsxs("div",{className:"category-card-copy",children:[P.jsx("strong",{children:y}),P.jsx("span",{children:T})]}),L?P.jsx("span",{className:"category-check",children:P.jsx(qx,{size:16})}):null]},A)})})]}),P.jsx("div",{className:"drawer-footer",children:P.jsx("button",{type:"button",className:"show-recommendations-btn",disabled:!t.length||c,onClick:()=>{u(!0),f(0);let w=0;const A=setInterval(()=>{w+=1,w<v.length?f(w):clearInterval(A)},500);setTimeout(()=>{clearInterval(A),u(!1),s("recommendations")},2e3)},children:c?P.jsxs(P.Fragment,{children:[P.jsx("span",{className:"loading-spinner"}),P.jsx("span",{style:{animation:"fadeIn 0.15s ease",fontSize:14},children:v[h]},h)]}):P.jsxs(P.Fragment,{children:[P.jsx("span",{children:"Generate AI Recommendations"}),P.jsx("span",{className:"sparkle",children:" ✦"})]})})})]}):null,e==="recommendations"?P.jsxs("div",{className:"drawer-body",children:[P.jsx("button",{type:"button",className:"text-back-link",onClick:()=>s("category"),children:"← Change Category"}),P.jsxs("p",{className:"space-context-line",children:[i.tenantName," | ",i.sqFt.toLocaleString()," sq ft"]}),P.jsx("div",{className:"selected-chip-row",children:t.map(w=>P.jsxs("button",{type:"button",className:"selected-category-chip",onClick:()=>o(w),children:[w," ×"]},w))}),t.map(w=>{const A=_[w]??[];return P.jsxs("section",{children:[P.jsxs("div",{className:"recommendation-title",children:[P.jsx("h4",{children:w}),P.jsxs("span",{children:[A.length," brands"]})]}),A.length?A.map(y=>P.jsx(s3,{recommendation:y},`${i.id}-${w}-${y.rank}-${y.brand}`)):P.jsx("p",{className:"empty-state",children:"No recommendations available for this category and space size."})]},`${i.id}-${w}`)})]}):null]})})}const u3=[{key:"stable",label:"Stable"},{key:"expiring",label:"Expiring Soon"},{key:"underperforming",label:"Underperforming"}],f3=["Apparel","Food & Beverage","Electronics","Footwear","Sporting Goods","Toys & Hobbies","Beauty","Home & Lifestyle","Jewellery","Financial Services","Other"];function D_(n){const e=n.reduce((t,i)=>{const r=String(i.id??"").match(/^U(\d+)$/i);return r?Math.max(t,Number(r[1])):t},0);return`U${String(e+1).padStart(2,"0")}`}function L_(n,e,t=.25){return!(n.x+n.width/2+t<e.x-e.width/2||n.x-n.width/2-t>e.x+e.width/2||n.z+n.depth/2+t<e.z-e.depth/2||n.z-n.depth/2-t>e.z+e.depth/2)}function d3(n){const e={width:3,depth:2.5,height:1.2},t=n.find(l=>l.tenantName==="Mobile Snap"||l.id==="U16"),i=(t==null?void 0:t.x)??6,r=(t==null?void 0:t.z)??6,s=(t==null?void 0:t.width)??2,a=.8;for(let l=0;l<24;l+=1){const c={x:i+s/2+e.width/2+a+l*(e.width+a),z:r,...e};if(!n.some(h=>L_(c,{x:h.x,z:h.z,width:h.width,depth:h.depth})))return c}const o={x:8,z:6};for(let l=0;l<6;l+=1)for(let c=0;c<8;c+=1){const u={x:o.x+c*(e.width+a),z:o.z+l*(e.depth+a),...e};if(!n.some(f=>L_(u,{x:f.x,z:f.z,width:f.width,depth:f.depth})))return u}return{x:10,z:8,...e}}function h3(){const n=Qe.useRef(null),[e,t]=Qe.useState(!1),[i,r]=Qe.useState("entry"),[s,a]=Qe.useState({}),[o,l]=Qe.useState(""),c=Hr(d=>d.addUserUnit),u=Hr(d=>d.units),h=Qe.useMemo(()=>D_(u),[u]),[f,p]=Qe.useState({name:"",unitId:h,sqFt:"",category:"",expiry:"",rent:"",status:"stable",anchor:""}),m=()=>{a({}),r("entry"),p({name:"",unitId:D_(u),sqFt:"",category:"",expiry:"",rent:"",status:"stable",anchor:""}),t(!0)},v=()=>{t(!1),r("entry"),a({})},_=()=>{const d=["name","unitId","sqFt","category","expiry","rent","status"],g={};if(d.forEach(E=>{String(f[E]??"").trim()||(g[E]="This field is required")}),Object.keys(g).length){a(g);return}const x=d3(u),S={id:f.unitId.trim().toUpperCase(),tenantName:f.name.trim(),sqFt:Number(f.sqFt),category:f.category,leaseExpiry:f.expiry,currentRent:Number(f.rent),status:f.status,anchorProximity:f.anchor.trim()||"Mid-mall corridor",signingDate:new Date().toLocaleDateString("en-CA",{month:"short",year:"numeric"}),remainingMonths:Math.max(0,jt(f.expiry)),footTrafficIndex:100,performanceNote:"Newly added unit. Performance data pending.",salesIndex:100,x:x.x,z:x.z,width:x.width,depth:x.depth,height:x.height,userAdded:!0};c(S),v(),l(`${S.tenantName} added to map`),setTimeout(()=>l(""),3e3)};return P.jsxs("div",{className:"app-shell",children:[P.jsxs("header",{className:"app-header",children:[P.jsx("div",{className:"brand",children:P.jsx("span",{className:"brand-text",children:"QuadReal"})}),P.jsx("button",{type:"button",className:"add-unit-btn",onClick:m,"aria-label":"Add unit",children:P.jsx(ME,{size:20})})]}),P.jsxs("main",{className:"main-layout",children:[P.jsx(e3,{onResetView:()=>{var d;return(d=n.current)==null?void 0:d.call(n)}}),P.jsx("section",{className:"map-section",children:P.jsx(JP,{onResetViewReady:d=>{n.current=d}})}),P.jsx(c3,{})]}),P.jsxs("div",{className:"min-width-banner",children:[P.jsx(kE,{size:14}),P.jsx("span",{children:"TenantIQ is optimized for desktop (1024px+)."})]}),e?P.jsx("div",{className:"modal-backdrop",role:"presentation",onClick:v,children:P.jsxs("div",{className:"add-unit-modal",role:"dialog","aria-modal":"true",onClick:d=>d.stopPropagation(),children:[P.jsx("button",{type:"button",className:"modal-close-btn",onClick:v,"aria-label":"Close",children:P.jsx(Yx,{size:16})}),P.jsx("h3",{children:"Add New Unit"}),P.jsx("p",{children:"Add a unit manually or import from a connected source"}),i==="entry"?P.jsxs("div",{className:"add-options-grid",children:[P.jsxs("button",{type:"button",className:"add-option-card",onClick:()=>r("manual"),children:[P.jsx(bE,{size:20}),P.jsx("strong",{children:"Add Manually"}),P.jsx("span",{children:"Enter unit details using the form"})]}),P.jsxs("button",{type:"button",className:"add-option-card",onClick:()=>{},children:[P.jsx(BE,{size:20}),P.jsx("strong",{children:"Import from SharePoint"}),P.jsx("span",{children:"Pull unit data from your SharePoint list"})]})]}):P.jsxs("div",{className:"manual-form-wrap",children:[P.jsx("button",{type:"button",className:"text-back-link",onClick:()=>r("entry"),children:"← Back"}),P.jsxs("div",{className:"manual-field",children:[P.jsx("label",{children:"TENANT / BRAND NAME"}),P.jsx("input",{className:s.name?"field-error":"",placeholder:"e.g. Zara",value:f.name,onChange:d=>p(g=>({...g,name:d.target.value}))}),s.name?P.jsx("small",{children:s.name}):null]}),P.jsxs("div",{className:"manual-field",children:[P.jsx("label",{children:"UNIT ID"}),P.jsx("input",{className:s.unitId?"field-error":"",placeholder:"e.g. U17",value:f.unitId,onChange:d=>p(g=>({...g,unitId:d.target.value}))}),s.unitId?P.jsx("small",{children:s.unitId}):null]}),P.jsxs("div",{className:"manual-field",children:[P.jsx("label",{children:"SQUARE FOOTAGE"}),P.jsxs("div",{className:"inline-affix-wrap",children:[P.jsx("input",{type:"number",className:s.sqFt?"field-error":"",placeholder:"e.g. 2400",value:f.sqFt,onChange:d=>p(g=>({...g,sqFt:d.target.value}))}),P.jsx("span",{children:"sq ft"})]}),s.sqFt?P.jsx("small",{children:s.sqFt}):null]}),P.jsxs("div",{className:"manual-field",children:[P.jsx("label",{children:"CATEGORY"}),P.jsxs("select",{className:s.category?"field-error":"",value:f.category,onChange:d=>p(g=>({...g,category:d.target.value})),children:[P.jsx("option",{value:"",children:"Select category"}),f3.map(d=>P.jsx("option",{value:d,children:d},d))]}),s.category?P.jsx("small",{children:s.category}):null]}),P.jsxs("div",{className:"two-col",children:[P.jsxs("div",{className:"manual-field",children:[P.jsx("label",{children:"LEASE EXPIRY"}),P.jsx("input",{type:"month",className:s.expiry?"field-error":"",value:f.expiry,onChange:d=>p(g=>({...g,expiry:d.target.value}))}),s.expiry?P.jsx("small",{children:s.expiry}):null]}),P.jsxs("div",{className:"manual-field",children:[P.jsx("label",{children:"CURRENT RENT"}),P.jsxs("div",{className:"inline-affix-wrap",children:[P.jsx("span",{children:"$"}),P.jsx("input",{type:"number",className:s.rent?"field-error":"",placeholder:"e.g. 48",value:f.rent,onChange:d=>p(g=>({...g,rent:d.target.value}))}),P.jsx("span",{children:"/ sq ft"})]}),s.rent?P.jsx("small",{children:s.rent}):null]})]}),P.jsxs("div",{className:"manual-field",children:[P.jsx("label",{children:"STATUS"}),P.jsx("div",{className:"segmented-wrap",children:u3.map(d=>P.jsx("button",{type:"button",className:f.status===d.key?"segment active":"segment",onClick:()=>p(g=>({...g,status:d.key})),children:d.label},d.key))})]}),P.jsxs("div",{className:"manual-field",children:[P.jsxs("label",{children:["ANCHOR PROXIMITY ",P.jsx("em",{children:"(optional)"})]}),P.jsx("input",{placeholder:"e.g. Adjacent to H&M",value:f.anchor,onChange:d=>p(g=>({...g,anchor:d.target.value}))})]}),P.jsxs("div",{className:"modal-form-footer",children:[P.jsx("button",{type:"button",className:"submit-unit-btn",onClick:_,children:"Add Unit to Map"}),P.jsx("button",{type:"button",className:"cancel-unit-btn",onClick:v,children:"Cancel"})]})]})]})}):null,o?P.jsx("div",{className:"app-toast",children:o}):null]})}Xx(document.getElementById("root")).render(P.jsx(Qe.StrictMode,{children:P.jsx(h3,{})}));
