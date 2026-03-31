(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function iM(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ev={exports:{}},Nu={},tv={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cl=Symbol.for("react.element"),rM=Symbol.for("react.portal"),sM=Symbol.for("react.fragment"),aM=Symbol.for("react.strict_mode"),oM=Symbol.for("react.profiler"),lM=Symbol.for("react.provider"),cM=Symbol.for("react.context"),uM=Symbol.for("react.forward_ref"),fM=Symbol.for("react.suspense"),dM=Symbol.for("react.memo"),hM=Symbol.for("react.lazy"),ag=Symbol.iterator;function pM(n){return n===null||typeof n!="object"?null:(n=ag&&n[ag]||n["@@iterator"],typeof n=="function"?n:null)}var nv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iv=Object.assign,rv={};function ao(n,e,t){this.props=n,this.context=e,this.refs=rv,this.updater=t||nv}ao.prototype.isReactComponent={};ao.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ao.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function sv(){}sv.prototype=ao.prototype;function Tp(n,e,t){this.props=n,this.context=e,this.refs=rv,this.updater=t||nv}var wp=Tp.prototype=new sv;wp.constructor=Tp;iv(wp,ao.prototype);wp.isPureReactComponent=!0;var og=Array.isArray,av=Object.prototype.hasOwnProperty,bp={current:null},ov={key:!0,ref:!0,__self:!0,__source:!0};function lv(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)av.call(e,i)&&!ov.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Cl,type:n,key:s,ref:a,props:r,_owner:bp.current}}function mM(n,e){return{$$typeof:Cl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Cp(n){return typeof n=="object"&&n!==null&&n.$$typeof===Cl}function gM(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var lg=/\/+/g;function lf(n,e){return typeof n=="object"&&n!==null&&n.key!=null?gM(""+n.key):e.toString(36)}function Pc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case Cl:case rM:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+lf(a,0):i,og(r)?(t="",n!=null&&(t=n.replace(lg,"$&/")+"/"),Pc(r,e,t,"",function(c){return c})):r!=null&&(Cp(r)&&(r=mM(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(lg,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",og(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+lf(s,o);a+=Pc(s,e,t,l,r)}else if(l=pM(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+lf(s,o++),a+=Pc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ul(n,e,t){if(n==null)return n;var i=[],r=0;return Pc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function _M(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var yn={current:null},Dc={transition:null},vM={ReactCurrentDispatcher:yn,ReactCurrentBatchConfig:Dc,ReactCurrentOwner:bp};function cv(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:Ul,forEach:function(n,e,t){Ul(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ul(n,function(){e++}),e},toArray:function(n){return Ul(n,function(e){return e})||[]},only:function(n){if(!Cp(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Xe.Component=ao;Xe.Fragment=sM;Xe.Profiler=oM;Xe.PureComponent=Tp;Xe.StrictMode=aM;Xe.Suspense=fM;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vM;Xe.act=cv;Xe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=iv({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=bp.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)av.call(e,l)&&!ov.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Cl,type:n.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(n){return n={$$typeof:cM,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:lM,_context:n},n.Consumer=n};Xe.createElement=lv;Xe.createFactory=function(n){var e=lv.bind(null,n);return e.type=n,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(n){return{$$typeof:uM,render:n}};Xe.isValidElement=Cp;Xe.lazy=function(n){return{$$typeof:hM,_payload:{_status:-1,_result:n},_init:_M}};Xe.memo=function(n,e){return{$$typeof:dM,type:n,compare:e===void 0?null:e}};Xe.startTransition=function(n){var e=Dc.transition;Dc.transition={};try{n()}finally{Dc.transition=e}};Xe.unstable_act=cv;Xe.useCallback=function(n,e){return yn.current.useCallback(n,e)};Xe.useContext=function(n){return yn.current.useContext(n)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(n){return yn.current.useDeferredValue(n)};Xe.useEffect=function(n,e){return yn.current.useEffect(n,e)};Xe.useId=function(){return yn.current.useId()};Xe.useImperativeHandle=function(n,e,t){return yn.current.useImperativeHandle(n,e,t)};Xe.useInsertionEffect=function(n,e){return yn.current.useInsertionEffect(n,e)};Xe.useLayoutEffect=function(n,e){return yn.current.useLayoutEffect(n,e)};Xe.useMemo=function(n,e){return yn.current.useMemo(n,e)};Xe.useReducer=function(n,e,t){return yn.current.useReducer(n,e,t)};Xe.useRef=function(n){return yn.current.useRef(n)};Xe.useState=function(n){return yn.current.useState(n)};Xe.useSyncExternalStore=function(n,e,t){return yn.current.useSyncExternalStore(n,e,t)};Xe.useTransition=function(){return yn.current.useTransition()};Xe.version="18.3.1";tv.exports=Xe;var nt=tv.exports;const Ol=iM(nt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xM=nt,yM=Symbol.for("react.element"),SM=Symbol.for("react.fragment"),MM=Object.prototype.hasOwnProperty,EM=xM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,TM={key:!0,ref:!0,__self:!0,__source:!0};function uv(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)MM.call(e,i)&&!TM.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:yM,type:n,key:s,ref:a,props:r,_owner:EM.current}}Nu.Fragment=SM;Nu.jsx=uv;Nu.jsxs=uv;ev.exports=Nu;var P=ev.exports,fv={exports:{}},Zn={},dv={exports:{}},hv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(G,Y){var J=G.length;G.push(Y);e:for(;0<J;){var ie=J-1>>>1,ne=G[ie];if(0<r(ne,Y))G[ie]=Y,G[J]=ne,J=ie;else break e}}function t(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var Y=G[0],J=G.pop();if(J!==Y){G[0]=J;e:for(var ie=0,ne=G.length,Le=ne>>>1;ie<Le;){var Fe=2*(ie+1)-1,Be=G[Fe],U=Fe+1,q=G[U];if(0>r(Be,J))U<ne&&0>r(q,Be)?(G[ie]=q,G[U]=J,ie=U):(G[ie]=Be,G[Fe]=J,ie=Fe);else if(U<ne&&0>r(q,J))G[ie]=q,G[U]=J,ie=U;else break e}}return Y}function r(G,Y){var J=G.sortIndex-Y.sortIndex;return J!==0?J:G.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,h=null,d=3,p=!1,g=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(G){for(var Y=t(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=G)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=t(c)}}function S(G){if(v=!1,x(G),!g)if(t(l)!==null)g=!0,V(w);else{var Y=t(c);Y!==null&&F(S,Y.startTime-G)}}function w(G,Y){g=!1,v&&(v=!1,f(y),y=-1),p=!0;var J=d;try{for(x(Y),h=t(l);h!==null&&(!(h.expirationTime>Y)||G&&!R());){var ie=h.callback;if(typeof ie=="function"){h.callback=null,d=h.priorityLevel;var ne=ie(h.expirationTime<=Y);Y=n.unstable_now(),typeof ne=="function"?h.callback=ne:h===t(l)&&i(l),x(Y)}else i(l);h=t(l)}if(h!==null)var Le=!0;else{var Fe=t(c);Fe!==null&&F(S,Fe.startTime-Y),Le=!1}return Le}finally{h=null,d=J,p=!1}}var T=!1,b=null,y=-1,E=5,L=-1;function R(){return!(n.unstable_now()-L<E)}function z(){if(b!==null){var G=n.unstable_now();L=G;var Y=!0;try{Y=b(!0,G)}finally{Y?O():(T=!1,b=null)}}else T=!1}var O;if(typeof m=="function")O=function(){m(z)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,B=X.port2;X.port1.onmessage=z,O=function(){B.postMessage(null)}}else O=function(){_(z,0)};function V(G){b=G,T||(T=!0,O())}function F(G,Y){y=_(function(){G(n.unstable_now())},Y)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,V(w))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(G){switch(d){case 1:case 2:case 3:var Y=3;break;default:Y=d}var J=d;d=Y;try{return G()}finally{d=J}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,Y){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var J=d;d=G;try{return Y()}finally{d=J}},n.unstable_scheduleCallback=function(G,Y,J){var ie=n.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ie+J:ie):J=ie,G){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=J+ne,G={id:u++,callback:Y,priorityLevel:G,startTime:J,expirationTime:ne,sortIndex:-1},J>ie?(G.sortIndex=J,e(c,G),t(l)===null&&G===t(c)&&(v?(f(y),y=-1):v=!0,F(S,J-ie))):(G.sortIndex=ne,e(l,G),g||p||(g=!0,V(w))),G},n.unstable_shouldYield=R,n.unstable_wrapCallback=function(G){var Y=d;return function(){var J=d;d=Y;try{return G.apply(this,arguments)}finally{d=J}}}})(hv);dv.exports=hv;var wM=dv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bM=nt,Yn=wM;function re(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pv=new Set,Jo={};function js(n,e){Ha(n,e),Ha(n+"Capture",e)}function Ha(n,e){for(Jo[n]=e,n=0;n<e.length;n++)pv.add(e[n])}var pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Td=Object.prototype.hasOwnProperty,CM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cg={},ug={};function AM(n){return Td.call(ug,n)?!0:Td.call(cg,n)?!1:CM.test(n)?ug[n]=!0:(cg[n]=!0,!1)}function RM(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function PM(n,e,t,i){if(e===null||typeof e>"u"||RM(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Sn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){nn[n]=new Sn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];nn[e]=new Sn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){nn[n]=new Sn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){nn[n]=new Sn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){nn[n]=new Sn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){nn[n]=new Sn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){nn[n]=new Sn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){nn[n]=new Sn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){nn[n]=new Sn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ap=/[\-:]([a-z])/g;function Rp(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Ap,Rp);nn[e]=new Sn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Ap,Rp);nn[e]=new Sn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Ap,Rp);nn[e]=new Sn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){nn[n]=new Sn(n,1,!1,n.toLowerCase(),null,!1,!1)});nn.xlinkHref=new Sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){nn[n]=new Sn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Pp(n,e,t,i){var r=nn.hasOwnProperty(e)?nn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(PM(e,t,r,i)&&(t=null),i||r===null?AM(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Mr=bM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kl=Symbol.for("react.element"),pa=Symbol.for("react.portal"),ma=Symbol.for("react.fragment"),Dp=Symbol.for("react.strict_mode"),wd=Symbol.for("react.profiler"),mv=Symbol.for("react.provider"),gv=Symbol.for("react.context"),Lp=Symbol.for("react.forward_ref"),bd=Symbol.for("react.suspense"),Cd=Symbol.for("react.suspense_list"),Np=Symbol.for("react.memo"),Lr=Symbol.for("react.lazy"),_v=Symbol.for("react.offscreen"),fg=Symbol.iterator;function ho(n){return n===null||typeof n!="object"?null:(n=fg&&n[fg]||n["@@iterator"],typeof n=="function"?n:null)}var At=Object.assign,cf;function Do(n){if(cf===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);cf=e&&e[1]||""}return`
`+cf+n}var uf=!1;function ff(n,e){if(!n||uf)return"";uf=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{uf=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Do(n):""}function DM(n){switch(n.tag){case 5:return Do(n.type);case 16:return Do("Lazy");case 13:return Do("Suspense");case 19:return Do("SuspenseList");case 0:case 2:case 15:return n=ff(n.type,!1),n;case 11:return n=ff(n.type.render,!1),n;case 1:return n=ff(n.type,!0),n;default:return""}}function Ad(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ma:return"Fragment";case pa:return"Portal";case wd:return"Profiler";case Dp:return"StrictMode";case bd:return"Suspense";case Cd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case gv:return(n.displayName||"Context")+".Consumer";case mv:return(n._context.displayName||"Context")+".Provider";case Lp:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Np:return e=n.displayName||null,e!==null?e:Ad(n.type)||"Memo";case Lr:e=n._payload,n=n._init;try{return Ad(n(e))}catch{}}return null}function LM(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ad(e);case 8:return e===Dp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function es(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function vv(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function NM(n){var e=vv(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function zl(n){n._valueTracker||(n._valueTracker=NM(n))}function xv(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=vv(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Zc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Rd(n,e){var t=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function dg(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=es(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yv(n,e){e=e.checked,e!=null&&Pp(n,"checked",e,!1)}function Pd(n,e){yv(n,e);var t=es(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Dd(n,e.type,t):e.hasOwnProperty("defaultValue")&&Dd(n,e.type,es(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function hg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Dd(n,e,t){(e!=="number"||Zc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Lo=Array.isArray;function Ra(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+es(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Ld(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function pg(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(re(92));if(Lo(t)){if(1<t.length)throw Error(re(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:es(t)}}function Sv(n,e){var t=es(e.value),i=es(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function mg(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Mv(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nd(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Mv(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Bl,Ev=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Bl=Bl||document.createElement("div"),Bl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Bl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function el(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IM=["Webkit","ms","Moz","O"];Object.keys(Bo).forEach(function(n){IM.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Bo[e]=Bo[n]})});function Tv(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Bo.hasOwnProperty(n)&&Bo[n]?(""+e).trim():e+"px"}function wv(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Tv(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var FM=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Id(n,e){if(e){if(FM[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Fd(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ud=null;function Ip(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Od=null,Pa=null,Da=null;function gg(n){if(n=Pl(n)){if(typeof Od!="function")throw Error(re(280));var e=n.stateNode;e&&(e=ku(e),Od(n.stateNode,n.type,e))}}function bv(n){Pa?Da?Da.push(n):Da=[n]:Pa=n}function Cv(){if(Pa){var n=Pa,e=Da;if(Da=Pa=null,gg(n),e)for(n=0;n<e.length;n++)gg(e[n])}}function Av(n,e){return n(e)}function Rv(){}var df=!1;function Pv(n,e,t){if(df)return n(e,t);df=!0;try{return Av(n,e,t)}finally{df=!1,(Pa!==null||Da!==null)&&(Rv(),Cv())}}function tl(n,e){var t=n.stateNode;if(t===null)return null;var i=ku(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(re(231,e,typeof t));return t}var kd=!1;if(pr)try{var po={};Object.defineProperty(po,"passive",{get:function(){kd=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{kd=!1}function UM(n,e,t,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Ho=!1,Qc=null,Jc=!1,zd=null,OM={onError:function(n){Ho=!0,Qc=n}};function kM(n,e,t,i,r,s,a,o,l){Ho=!1,Qc=null,UM.apply(OM,arguments)}function zM(n,e,t,i,r,s,a,o,l){if(kM.apply(this,arguments),Ho){if(Ho){var c=Qc;Ho=!1,Qc=null}else throw Error(re(198));Jc||(Jc=!0,zd=c)}}function Xs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Dv(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function _g(n){if(Xs(n)!==n)throw Error(re(188))}function BM(n){var e=n.alternate;if(!e){if(e=Xs(n),e===null)throw Error(re(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return _g(r),n;if(s===i)return _g(r),e;s=s.sibling}throw Error(re(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(re(189))}}if(t.alternate!==i)throw Error(re(190))}if(t.tag!==3)throw Error(re(188));return t.stateNode.current===t?n:e}function Lv(n){return n=BM(n),n!==null?Nv(n):null}function Nv(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Nv(n);if(e!==null)return e;n=n.sibling}return null}var Iv=Yn.unstable_scheduleCallback,vg=Yn.unstable_cancelCallback,HM=Yn.unstable_shouldYield,VM=Yn.unstable_requestPaint,Ft=Yn.unstable_now,GM=Yn.unstable_getCurrentPriorityLevel,Fp=Yn.unstable_ImmediatePriority,Fv=Yn.unstable_UserBlockingPriority,eu=Yn.unstable_NormalPriority,WM=Yn.unstable_LowPriority,Uv=Yn.unstable_IdlePriority,Iu=null,Hi=null;function jM(n){if(Hi&&typeof Hi.onCommitFiberRoot=="function")try{Hi.onCommitFiberRoot(Iu,n,void 0,(n.current.flags&128)===128)}catch{}}var wi=Math.clz32?Math.clz32:YM,XM=Math.log,qM=Math.LN2;function YM(n){return n>>>=0,n===0?32:31-(XM(n)/qM|0)|0}var Hl=64,Vl=4194304;function No(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function tu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=No(o):(s&=a,s!==0&&(i=No(s)))}else a=t&~r,a!==0?i=No(a):s!==0&&(i=No(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-wi(e),r=1<<t,i|=n[t],e&=~r;return i}function $M(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function KM(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-wi(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=$M(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function Bd(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ov(){var n=Hl;return Hl<<=1,!(Hl&4194240)&&(Hl=64),n}function hf(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Al(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-wi(e),n[e]=t}function ZM(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-wi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Up(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-wi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var at=0;function kv(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var zv,Op,Bv,Hv,Vv,Hd=!1,Gl=[],Wr=null,jr=null,Xr=null,nl=new Map,il=new Map,Fr=[],QM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xg(n,e){switch(n){case"focusin":case"focusout":Wr=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":Xr=null;break;case"pointerover":case"pointerout":nl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":il.delete(e.pointerId)}}function mo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Pl(e),e!==null&&Op(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function JM(n,e,t,i,r){switch(e){case"focusin":return Wr=mo(Wr,n,e,t,i,r),!0;case"dragenter":return jr=mo(jr,n,e,t,i,r),!0;case"mouseover":return Xr=mo(Xr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return nl.set(s,mo(nl.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,il.set(s,mo(il.get(s)||null,n,e,t,i,r)),!0}return!1}function Gv(n){var e=Cs(n.target);if(e!==null){var t=Xs(e);if(t!==null){if(e=t.tag,e===13){if(e=Dv(t),e!==null){n.blockedOn=e,Vv(n.priority,function(){Bv(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Lc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Vd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Ud=i,t.target.dispatchEvent(i),Ud=null}else return e=Pl(t),e!==null&&Op(e),n.blockedOn=t,!1;e.shift()}return!0}function yg(n,e,t){Lc(n)&&t.delete(e)}function e1(){Hd=!1,Wr!==null&&Lc(Wr)&&(Wr=null),jr!==null&&Lc(jr)&&(jr=null),Xr!==null&&Lc(Xr)&&(Xr=null),nl.forEach(yg),il.forEach(yg)}function go(n,e){n.blockedOn===e&&(n.blockedOn=null,Hd||(Hd=!0,Yn.unstable_scheduleCallback(Yn.unstable_NormalPriority,e1)))}function rl(n){function e(r){return go(r,n)}if(0<Gl.length){go(Gl[0],n);for(var t=1;t<Gl.length;t++){var i=Gl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Wr!==null&&go(Wr,n),jr!==null&&go(jr,n),Xr!==null&&go(Xr,n),nl.forEach(e),il.forEach(e),t=0;t<Fr.length;t++)i=Fr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Fr.length&&(t=Fr[0],t.blockedOn===null);)Gv(t),t.blockedOn===null&&Fr.shift()}var La=Mr.ReactCurrentBatchConfig,nu=!0;function t1(n,e,t,i){var r=at,s=La.transition;La.transition=null;try{at=1,kp(n,e,t,i)}finally{at=r,La.transition=s}}function n1(n,e,t,i){var r=at,s=La.transition;La.transition=null;try{at=4,kp(n,e,t,i)}finally{at=r,La.transition=s}}function kp(n,e,t,i){if(nu){var r=Vd(n,e,t,i);if(r===null)Ef(n,e,i,iu,t),xg(n,i);else if(JM(r,n,e,t,i))i.stopPropagation();else if(xg(n,i),e&4&&-1<QM.indexOf(n)){for(;r!==null;){var s=Pl(r);if(s!==null&&zv(s),s=Vd(n,e,t,i),s===null&&Ef(n,e,i,iu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ef(n,e,i,null,t)}}var iu=null;function Vd(n,e,t,i){if(iu=null,n=Ip(i),n=Cs(n),n!==null)if(e=Xs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Dv(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return iu=n,null}function Wv(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(GM()){case Fp:return 1;case Fv:return 4;case eu:case WM:return 16;case Uv:return 536870912;default:return 16}default:return 16}}var kr=null,zp=null,Nc=null;function jv(){if(Nc)return Nc;var n,e=zp,t=e.length,i,r="value"in kr?kr.value:kr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return Nc=r.slice(n,1<i?1-i:void 0)}function Ic(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Wl(){return!0}function Sg(){return!1}function Qn(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wl:Sg,this.isPropagationStopped=Sg,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),e}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bp=Qn(oo),Rl=At({},oo,{view:0,detail:0}),i1=Qn(Rl),pf,mf,_o,Fu=At({},Rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hp,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_o&&(_o&&n.type==="mousemove"?(pf=n.screenX-_o.screenX,mf=n.screenY-_o.screenY):mf=pf=0,_o=n),pf)},movementY:function(n){return"movementY"in n?n.movementY:mf}}),Mg=Qn(Fu),r1=At({},Fu,{dataTransfer:0}),s1=Qn(r1),a1=At({},Rl,{relatedTarget:0}),gf=Qn(a1),o1=At({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),l1=Qn(o1),c1=At({},oo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u1=Qn(c1),f1=At({},oo,{data:0}),Eg=Qn(f1),d1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=p1[n])?!!e[n]:!1}function Hp(){return m1}var g1=At({},Rl,{key:function(n){if(n.key){var e=d1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ic(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?h1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hp,charCode:function(n){return n.type==="keypress"?Ic(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ic(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),_1=Qn(g1),v1=At({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tg=Qn(v1),x1=At({},Rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hp}),y1=Qn(x1),S1=At({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),M1=Qn(S1),E1=At({},Fu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),T1=Qn(E1),w1=[9,13,27,32],Vp=pr&&"CompositionEvent"in window,Vo=null;pr&&"documentMode"in document&&(Vo=document.documentMode);var b1=pr&&"TextEvent"in window&&!Vo,Xv=pr&&(!Vp||Vo&&8<Vo&&11>=Vo),wg=" ",bg=!1;function qv(n,e){switch(n){case"keyup":return w1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ga=!1;function C1(n,e){switch(n){case"compositionend":return Yv(e);case"keypress":return e.which!==32?null:(bg=!0,wg);case"textInput":return n=e.data,n===wg&&bg?null:n;default:return null}}function A1(n,e){if(ga)return n==="compositionend"||!Vp&&qv(n,e)?(n=jv(),Nc=zp=kr=null,ga=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xv&&e.locale!=="ko"?null:e.data;default:return null}}var R1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!R1[n.type]:e==="textarea"}function $v(n,e,t,i){bv(i),e=ru(e,"onChange"),0<e.length&&(t=new Bp("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Go=null,sl=null;function P1(n){ax(n,0)}function Uu(n){var e=xa(n);if(xv(e))return n}function D1(n,e){if(n==="change")return e}var Kv=!1;if(pr){var _f;if(pr){var vf="oninput"in document;if(!vf){var Ag=document.createElement("div");Ag.setAttribute("oninput","return;"),vf=typeof Ag.oninput=="function"}_f=vf}else _f=!1;Kv=_f&&(!document.documentMode||9<document.documentMode)}function Rg(){Go&&(Go.detachEvent("onpropertychange",Zv),sl=Go=null)}function Zv(n){if(n.propertyName==="value"&&Uu(sl)){var e=[];$v(e,sl,n,Ip(n)),Pv(P1,e)}}function L1(n,e,t){n==="focusin"?(Rg(),Go=e,sl=t,Go.attachEvent("onpropertychange",Zv)):n==="focusout"&&Rg()}function N1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Uu(sl)}function I1(n,e){if(n==="click")return Uu(e)}function F1(n,e){if(n==="input"||n==="change")return Uu(e)}function U1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Ci=typeof Object.is=="function"?Object.is:U1;function al(n,e){if(Ci(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Td.call(e,r)||!Ci(n[r],e[r]))return!1}return!0}function Pg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Dg(n,e){var t=Pg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Pg(t)}}function Qv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Qv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Jv(){for(var n=window,e=Zc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Zc(n.document)}return e}function Gp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function O1(n){var e=Jv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Qv(t.ownerDocument.documentElement,t)){if(i!==null&&Gp(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Dg(t,s);var a=Dg(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var k1=pr&&"documentMode"in document&&11>=document.documentMode,_a=null,Gd=null,Wo=null,Wd=!1;function Lg(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Wd||_a==null||_a!==Zc(i)||(i=_a,"selectionStart"in i&&Gp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wo&&al(Wo,i)||(Wo=i,i=ru(Gd,"onSelect"),0<i.length&&(e=new Bp("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=_a)))}function jl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var va={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionend:jl("Transition","TransitionEnd")},xf={},ex={};pr&&(ex=document.createElement("div").style,"AnimationEvent"in window||(delete va.animationend.animation,delete va.animationiteration.animation,delete va.animationstart.animation),"TransitionEvent"in window||delete va.transitionend.transition);function Ou(n){if(xf[n])return xf[n];if(!va[n])return n;var e=va[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in ex)return xf[n]=e[t];return n}var tx=Ou("animationend"),nx=Ou("animationiteration"),ix=Ou("animationstart"),rx=Ou("transitionend"),sx=new Map,Ng="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function os(n,e){sx.set(n,e),js(e,[n])}for(var yf=0;yf<Ng.length;yf++){var Sf=Ng[yf],z1=Sf.toLowerCase(),B1=Sf[0].toUpperCase()+Sf.slice(1);os(z1,"on"+B1)}os(tx,"onAnimationEnd");os(nx,"onAnimationIteration");os(ix,"onAnimationStart");os("dblclick","onDoubleClick");os("focusin","onFocus");os("focusout","onBlur");os(rx,"onTransitionEnd");Ha("onMouseEnter",["mouseout","mouseover"]);Ha("onMouseLeave",["mouseout","mouseover"]);Ha("onPointerEnter",["pointerout","pointerover"]);Ha("onPointerLeave",["pointerout","pointerover"]);js("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));js("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));js("onBeforeInput",["compositionend","keypress","textInput","paste"]);js("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));js("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));js("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function Ig(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,zM(i,e,void 0,n),n.currentTarget=null}function ax(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Ig(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Ig(r,o,c),s=l}}}if(Jc)throw n=zd,Jc=!1,zd=null,n}function xt(n,e){var t=e[$d];t===void 0&&(t=e[$d]=new Set);var i=n+"__bubble";t.has(i)||(ox(e,n,2,!1),t.add(i))}function Mf(n,e,t){var i=0;e&&(i|=4),ox(t,n,i,e)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function ol(n){if(!n[Xl]){n[Xl]=!0,pv.forEach(function(t){t!=="selectionchange"&&(H1.has(t)||Mf(t,!1,n),Mf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Xl]||(e[Xl]=!0,Mf("selectionchange",!1,e))}}function ox(n,e,t,i){switch(Wv(e)){case 1:var r=t1;break;case 4:r=n1;break;default:r=kp}t=r.bind(null,e,t,n),r=void 0,!kd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Ef(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Cs(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Pv(function(){var c=s,u=Ip(t),h=[];e:{var d=sx.get(n);if(d!==void 0){var p=Bp,g=n;switch(n){case"keypress":if(Ic(t)===0)break e;case"keydown":case"keyup":p=_1;break;case"focusin":g="focus",p=gf;break;case"focusout":g="blur",p=gf;break;case"beforeblur":case"afterblur":p=gf;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Mg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=s1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=y1;break;case tx:case nx:case ix:p=l1;break;case rx:p=M1;break;case"scroll":p=i1;break;case"wheel":p=T1;break;case"copy":case"cut":case"paste":p=u1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Tg}var v=(e&4)!==0,_=!v&&n==="scroll",f=v?d!==null?d+"Capture":null:d;v=[];for(var m=c,x;m!==null;){x=m;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,f!==null&&(S=tl(m,f),S!=null&&v.push(ll(m,S,x)))),_)break;m=m.return}0<v.length&&(d=new p(d,g,null,t,u),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==Ud&&(g=t.relatedTarget||t.fromElement)&&(Cs(g)||g[mr]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?Cs(g):null,g!==null&&(_=Xs(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(v=Mg,S="onMouseLeave",f="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(v=Tg,S="onPointerLeave",f="onPointerEnter",m="pointer"),_=p==null?d:xa(p),x=g==null?d:xa(g),d=new v(S,m+"leave",p,t,u),d.target=_,d.relatedTarget=x,S=null,Cs(u)===c&&(v=new v(f,m+"enter",g,t,u),v.target=x,v.relatedTarget=_,S=v),_=S,p&&g)t:{for(v=p,f=g,m=0,x=v;x;x=Zs(x))m++;for(x=0,S=f;S;S=Zs(S))x++;for(;0<m-x;)v=Zs(v),m--;for(;0<x-m;)f=Zs(f),x--;for(;m--;){if(v===f||f!==null&&v===f.alternate)break t;v=Zs(v),f=Zs(f)}v=null}else v=null;p!==null&&Fg(h,d,p,v,!1),g!==null&&_!==null&&Fg(h,_,g,v,!0)}}e:{if(d=c?xa(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var w=D1;else if(Cg(d))if(Kv)w=F1;else{w=N1;var T=L1}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=I1);if(w&&(w=w(n,c))){$v(h,w,t,u);break e}T&&T(n,d,c),n==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Dd(d,"number",d.value)}switch(T=c?xa(c):window,n){case"focusin":(Cg(T)||T.contentEditable==="true")&&(_a=T,Gd=c,Wo=null);break;case"focusout":Wo=Gd=_a=null;break;case"mousedown":Wd=!0;break;case"contextmenu":case"mouseup":case"dragend":Wd=!1,Lg(h,t,u);break;case"selectionchange":if(k1)break;case"keydown":case"keyup":Lg(h,t,u)}var b;if(Vp)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ga?qv(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(Xv&&t.locale!=="ko"&&(ga||y!=="onCompositionStart"?y==="onCompositionEnd"&&ga&&(b=jv()):(kr=u,zp="value"in kr?kr.value:kr.textContent,ga=!0)),T=ru(c,y),0<T.length&&(y=new Eg(y,n,null,t,u),h.push({event:y,listeners:T}),b?y.data=b:(b=Yv(t),b!==null&&(y.data=b)))),(b=b1?C1(n,t):A1(n,t))&&(c=ru(c,"onBeforeInput"),0<c.length&&(u=new Eg("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=b))}ax(h,e)})}function ll(n,e,t){return{instance:n,listener:e,currentTarget:t}}function ru(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=tl(n,t),s!=null&&i.unshift(ll(n,s,r)),s=tl(n,e),s!=null&&i.push(ll(n,s,r))),n=n.return}return i}function Zs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Fg(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=tl(t,s),l!=null&&a.unshift(ll(t,l,o))):r||(l=tl(t,s),l!=null&&a.push(ll(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var V1=/\r\n?/g,G1=/\u0000|\uFFFD/g;function Ug(n){return(typeof n=="string"?n:""+n).replace(V1,`
`).replace(G1,"")}function ql(n,e,t){if(e=Ug(e),Ug(n)!==e&&t)throw Error(re(425))}function su(){}var jd=null,Xd=null;function qd(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yd=typeof setTimeout=="function"?setTimeout:void 0,W1=typeof clearTimeout=="function"?clearTimeout:void 0,Og=typeof Promise=="function"?Promise:void 0,j1=typeof queueMicrotask=="function"?queueMicrotask:typeof Og<"u"?function(n){return Og.resolve(null).then(n).catch(X1)}:Yd;function X1(n){setTimeout(function(){throw n})}function Tf(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),rl(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);rl(e)}function qr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function kg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var lo=Math.random().toString(36).slice(2),Ui="__reactFiber$"+lo,cl="__reactProps$"+lo,mr="__reactContainer$"+lo,$d="__reactEvents$"+lo,q1="__reactListeners$"+lo,Y1="__reactHandles$"+lo;function Cs(n){var e=n[Ui];if(e)return e;for(var t=n.parentNode;t;){if(e=t[mr]||t[Ui]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=kg(n);n!==null;){if(t=n[Ui])return t;n=kg(n)}return e}n=t,t=n.parentNode}return null}function Pl(n){return n=n[Ui]||n[mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function xa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(re(33))}function ku(n){return n[cl]||null}var Kd=[],ya=-1;function ls(n){return{current:n}}function yt(n){0>ya||(n.current=Kd[ya],Kd[ya]=null,ya--)}function gt(n,e){ya++,Kd[ya]=n.current,n.current=e}var ts={},mn=ls(ts),Cn=ls(!1),zs=ts;function Va(n,e){var t=n.type.contextTypes;if(!t)return ts;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function An(n){return n=n.childContextTypes,n!=null}function au(){yt(Cn),yt(mn)}function zg(n,e,t){if(mn.current!==ts)throw Error(re(168));gt(mn,e),gt(Cn,t)}function lx(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,LM(n)||"Unknown",r));return At({},t,i)}function ou(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ts,zs=mn.current,gt(mn,n),gt(Cn,Cn.current),!0}function Bg(n,e,t){var i=n.stateNode;if(!i)throw Error(re(169));t?(n=lx(n,e,zs),i.__reactInternalMemoizedMergedChildContext=n,yt(Cn),yt(mn),gt(mn,n)):yt(Cn),gt(Cn,t)}var sr=null,zu=!1,wf=!1;function cx(n){sr===null?sr=[n]:sr.push(n)}function $1(n){zu=!0,cx(n)}function cs(){if(!wf&&sr!==null){wf=!0;var n=0,e=at;try{var t=sr;for(at=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}sr=null,zu=!1}catch(r){throw sr!==null&&(sr=sr.slice(n+1)),Iv(Fp,cs),r}finally{at=e,wf=!1}}return null}var Sa=[],Ma=0,lu=null,cu=0,ii=[],ri=0,Bs=null,lr=1,cr="";function Ss(n,e){Sa[Ma++]=cu,Sa[Ma++]=lu,lu=n,cu=e}function ux(n,e,t){ii[ri++]=lr,ii[ri++]=cr,ii[ri++]=Bs,Bs=n;var i=lr;n=cr;var r=32-wi(i)-1;i&=~(1<<r),t+=1;var s=32-wi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,lr=1<<32-wi(e)+r|t<<r|i,cr=s+n}else lr=1<<s|t<<r|i,cr=n}function Wp(n){n.return!==null&&(Ss(n,1),ux(n,1,0))}function jp(n){for(;n===lu;)lu=Sa[--Ma],Sa[Ma]=null,cu=Sa[--Ma],Sa[Ma]=null;for(;n===Bs;)Bs=ii[--ri],ii[ri]=null,cr=ii[--ri],ii[ri]=null,lr=ii[--ri],ii[ri]=null}var Xn=null,Gn=null,St=!1,Mi=null;function fx(n,e){var t=ai(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Hg(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Xn=n,Gn=qr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Xn=n,Gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Bs!==null?{id:lr,overflow:cr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ai(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Xn=n,Gn=null,!0):!1;default:return!1}}function Zd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Qd(n){if(St){var e=Gn;if(e){var t=e;if(!Hg(n,e)){if(Zd(n))throw Error(re(418));e=qr(t.nextSibling);var i=Xn;e&&Hg(n,e)?fx(i,t):(n.flags=n.flags&-4097|2,St=!1,Xn=n)}}else{if(Zd(n))throw Error(re(418));n.flags=n.flags&-4097|2,St=!1,Xn=n}}}function Vg(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Xn=n}function Yl(n){if(n!==Xn)return!1;if(!St)return Vg(n),St=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!qd(n.type,n.memoizedProps)),e&&(e=Gn)){if(Zd(n))throw dx(),Error(re(418));for(;e;)fx(n,e),e=qr(e.nextSibling)}if(Vg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(re(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Gn=qr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Gn=null}}else Gn=Xn?qr(n.stateNode.nextSibling):null;return!0}function dx(){for(var n=Gn;n;)n=qr(n.nextSibling)}function Ga(){Gn=Xn=null,St=!1}function Xp(n){Mi===null?Mi=[n]:Mi.push(n)}var K1=Mr.ReactCurrentBatchConfig;function vo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(re(309));var i=t.stateNode}if(!i)throw Error(re(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(re(284));if(!t._owner)throw Error(re(290,n))}return n}function $l(n,e){throw n=Object.prototype.toString.call(e),Error(re(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Gg(n){var e=n._init;return e(n._payload)}function hx(n){function e(f,m){if(n){var x=f.deletions;x===null?(f.deletions=[m],f.flags|=16):x.push(m)}}function t(f,m){if(!n)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function i(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function r(f,m){return f=Zr(f,m),f.index=0,f.sibling=null,f}function s(f,m,x){return f.index=x,n?(x=f.alternate,x!==null?(x=x.index,x<m?(f.flags|=2,m):x):(f.flags|=2,m)):(f.flags|=1048576,m)}function a(f){return n&&f.alternate===null&&(f.flags|=2),f}function o(f,m,x,S){return m===null||m.tag!==6?(m=Lf(x,f.mode,S),m.return=f,m):(m=r(m,x),m.return=f,m)}function l(f,m,x,S){var w=x.type;return w===ma?u(f,m,x.props.children,S,x.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Lr&&Gg(w)===m.type)?(S=r(m,x.props),S.ref=vo(f,m,x),S.return=f,S):(S=Hc(x.type,x.key,x.props,null,f.mode,S),S.ref=vo(f,m,x),S.return=f,S)}function c(f,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Nf(x,f.mode,S),m.return=f,m):(m=r(m,x.children||[]),m.return=f,m)}function u(f,m,x,S,w){return m===null||m.tag!==7?(m=Is(x,f.mode,S,w),m.return=f,m):(m=r(m,x),m.return=f,m)}function h(f,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Lf(""+m,f.mode,x),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case kl:return x=Hc(m.type,m.key,m.props,null,f.mode,x),x.ref=vo(f,null,m),x.return=f,x;case pa:return m=Nf(m,f.mode,x),m.return=f,m;case Lr:var S=m._init;return h(f,S(m._payload),x)}if(Lo(m)||ho(m))return m=Is(m,f.mode,x,null),m.return=f,m;$l(f,m)}return null}function d(f,m,x,S){var w=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:o(f,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case kl:return x.key===w?l(f,m,x,S):null;case pa:return x.key===w?c(f,m,x,S):null;case Lr:return w=x._init,d(f,m,w(x._payload),S)}if(Lo(x)||ho(x))return w!==null?null:u(f,m,x,S,null);$l(f,x)}return null}function p(f,m,x,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(x)||null,o(m,f,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case kl:return f=f.get(S.key===null?x:S.key)||null,l(m,f,S,w);case pa:return f=f.get(S.key===null?x:S.key)||null,c(m,f,S,w);case Lr:var T=S._init;return p(f,m,x,T(S._payload),w)}if(Lo(S)||ho(S))return f=f.get(x)||null,u(m,f,S,w,null);$l(m,S)}return null}function g(f,m,x,S){for(var w=null,T=null,b=m,y=m=0,E=null;b!==null&&y<x.length;y++){b.index>y?(E=b,b=null):E=b.sibling;var L=d(f,b,x[y],S);if(L===null){b===null&&(b=E);break}n&&b&&L.alternate===null&&e(f,b),m=s(L,m,y),T===null?w=L:T.sibling=L,T=L,b=E}if(y===x.length)return t(f,b),St&&Ss(f,y),w;if(b===null){for(;y<x.length;y++)b=h(f,x[y],S),b!==null&&(m=s(b,m,y),T===null?w=b:T.sibling=b,T=b);return St&&Ss(f,y),w}for(b=i(f,b);y<x.length;y++)E=p(b,f,y,x[y],S),E!==null&&(n&&E.alternate!==null&&b.delete(E.key===null?y:E.key),m=s(E,m,y),T===null?w=E:T.sibling=E,T=E);return n&&b.forEach(function(R){return e(f,R)}),St&&Ss(f,y),w}function v(f,m,x,S){var w=ho(x);if(typeof w!="function")throw Error(re(150));if(x=w.call(x),x==null)throw Error(re(151));for(var T=w=null,b=m,y=m=0,E=null,L=x.next();b!==null&&!L.done;y++,L=x.next()){b.index>y?(E=b,b=null):E=b.sibling;var R=d(f,b,L.value,S);if(R===null){b===null&&(b=E);break}n&&b&&R.alternate===null&&e(f,b),m=s(R,m,y),T===null?w=R:T.sibling=R,T=R,b=E}if(L.done)return t(f,b),St&&Ss(f,y),w;if(b===null){for(;!L.done;y++,L=x.next())L=h(f,L.value,S),L!==null&&(m=s(L,m,y),T===null?w=L:T.sibling=L,T=L);return St&&Ss(f,y),w}for(b=i(f,b);!L.done;y++,L=x.next())L=p(b,f,y,L.value,S),L!==null&&(n&&L.alternate!==null&&b.delete(L.key===null?y:L.key),m=s(L,m,y),T===null?w=L:T.sibling=L,T=L);return n&&b.forEach(function(z){return e(f,z)}),St&&Ss(f,y),w}function _(f,m,x,S){if(typeof x=="object"&&x!==null&&x.type===ma&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case kl:e:{for(var w=x.key,T=m;T!==null;){if(T.key===w){if(w=x.type,w===ma){if(T.tag===7){t(f,T.sibling),m=r(T,x.props.children),m.return=f,f=m;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Lr&&Gg(w)===T.type){t(f,T.sibling),m=r(T,x.props),m.ref=vo(f,T,x),m.return=f,f=m;break e}t(f,T);break}else e(f,T);T=T.sibling}x.type===ma?(m=Is(x.props.children,f.mode,S,x.key),m.return=f,f=m):(S=Hc(x.type,x.key,x.props,null,f.mode,S),S.ref=vo(f,m,x),S.return=f,f=S)}return a(f);case pa:e:{for(T=x.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){t(f,m.sibling),m=r(m,x.children||[]),m.return=f,f=m;break e}else{t(f,m);break}else e(f,m);m=m.sibling}m=Nf(x,f.mode,S),m.return=f,f=m}return a(f);case Lr:return T=x._init,_(f,m,T(x._payload),S)}if(Lo(x))return g(f,m,x,S);if(ho(x))return v(f,m,x,S);$l(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(t(f,m.sibling),m=r(m,x),m.return=f,f=m):(t(f,m),m=Lf(x,f.mode,S),m.return=f,f=m),a(f)):t(f,m)}return _}var Wa=hx(!0),px=hx(!1),uu=ls(null),fu=null,Ea=null,qp=null;function Yp(){qp=Ea=fu=null}function $p(n){var e=uu.current;yt(uu),n._currentValue=e}function Jd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Na(n,e){fu=n,qp=Ea=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(bn=!0),n.firstContext=null)}function fi(n){var e=n._currentValue;if(qp!==n)if(n={context:n,memoizedValue:e,next:null},Ea===null){if(fu===null)throw Error(re(308));Ea=n,fu.dependencies={lanes:0,firstContext:n}}else Ea=Ea.next=n;return e}var As=null;function Kp(n){As===null?As=[n]:As.push(n)}function mx(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Kp(e)):(t.next=r.next,r.next=t),e.interleaved=t,gr(n,i)}function gr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Nr=!1;function Zp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gx(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function fr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Yr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,gr(n,t)}return r=i.interleaved,r===null?(e.next=e,Kp(i)):(e.next=r.next,r.next=e),i.interleaved=e,gr(n,t)}function Fc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Up(n,t)}}function Wg(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function du(n,e,t,i){var r=n.updateQueue;Nr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=n.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,u=c=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=n,v=o;switch(d=e,p=t,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=At({},h,d);break e;case 2:Nr=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Vs|=a,n.lanes=a,n.memoizedState=h}}function jg(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Dl={},Vi=ls(Dl),ul=ls(Dl),fl=ls(Dl);function Rs(n){if(n===Dl)throw Error(re(174));return n}function Qp(n,e){switch(gt(fl,e),gt(ul,n),gt(Vi,Dl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nd(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Nd(e,n)}yt(Vi),gt(Vi,e)}function ja(){yt(Vi),yt(ul),yt(fl)}function _x(n){Rs(fl.current);var e=Rs(Vi.current),t=Nd(e,n.type);e!==t&&(gt(ul,n),gt(Vi,t))}function Jp(n){ul.current===n&&(yt(Vi),yt(ul))}var Tt=ls(0);function hu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bf=[];function em(){for(var n=0;n<bf.length;n++)bf[n]._workInProgressVersionPrimary=null;bf.length=0}var Uc=Mr.ReactCurrentDispatcher,Cf=Mr.ReactCurrentBatchConfig,Hs=0,Ct=null,Bt=null,qt=null,pu=!1,jo=!1,dl=0,Z1=0;function sn(){throw Error(re(321))}function tm(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Ci(n[t],e[t]))return!1;return!0}function nm(n,e,t,i,r,s){if(Hs=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Uc.current=n===null||n.memoizedState===null?tE:nE,n=t(i,r),jo){s=0;do{if(jo=!1,dl=0,25<=s)throw Error(re(301));s+=1,qt=Bt=null,e.updateQueue=null,Uc.current=iE,n=t(i,r)}while(jo)}if(Uc.current=mu,e=Bt!==null&&Bt.next!==null,Hs=0,qt=Bt=Ct=null,pu=!1,e)throw Error(re(300));return n}function im(){var n=dl!==0;return dl=0,n}function Ni(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?Ct.memoizedState=qt=n:qt=qt.next=n,qt}function di(){if(Bt===null){var n=Ct.alternate;n=n!==null?n.memoizedState:null}else n=Bt.next;var e=qt===null?Ct.memoizedState:qt.next;if(e!==null)qt=e,Bt=n;else{if(n===null)throw Error(re(310));Bt=n,n={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},qt===null?Ct.memoizedState=qt=n:qt=qt.next=n}return qt}function hl(n,e){return typeof e=="function"?e(n):e}function Af(n){var e=di(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=Bt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((Hs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,Ct.lanes|=u,Vs|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Ci(i,e.memoizedState)||(bn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ct.lanes|=s,Vs|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Rf(n){var e=di(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);Ci(s,e.memoizedState)||(bn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function vx(){}function xx(n,e){var t=Ct,i=di(),r=e(),s=!Ci(i.memoizedState,r);if(s&&(i.memoizedState=r,bn=!0),i=i.queue,rm(Mx.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||qt!==null&&qt.memoizedState.tag&1){if(t.flags|=2048,pl(9,Sx.bind(null,t,i,r,e),void 0,null),Yt===null)throw Error(re(349));Hs&30||yx(t,e,r)}return r}function yx(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Sx(n,e,t,i){e.value=t,e.getSnapshot=i,Ex(e)&&Tx(n)}function Mx(n,e,t){return t(function(){Ex(e)&&Tx(n)})}function Ex(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Ci(n,t)}catch{return!0}}function Tx(n){var e=gr(n,1);e!==null&&bi(e,n,1,-1)}function Xg(n){var e=Ni();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hl,lastRenderedState:n},e.queue=n,n=n.dispatch=eE.bind(null,Ct,n),[e.memoizedState,n]}function pl(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function wx(){return di().memoizedState}function Oc(n,e,t,i){var r=Ni();Ct.flags|=n,r.memoizedState=pl(1|e,t,void 0,i===void 0?null:i)}function Bu(n,e,t,i){var r=di();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var a=Bt.memoizedState;if(s=a.destroy,i!==null&&tm(i,a.deps)){r.memoizedState=pl(e,t,s,i);return}}Ct.flags|=n,r.memoizedState=pl(1|e,t,s,i)}function qg(n,e){return Oc(8390656,8,n,e)}function rm(n,e){return Bu(2048,8,n,e)}function bx(n,e){return Bu(4,2,n,e)}function Cx(n,e){return Bu(4,4,n,e)}function Ax(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Rx(n,e,t){return t=t!=null?t.concat([n]):null,Bu(4,4,Ax.bind(null,e,n),t)}function sm(){}function Px(n,e){var t=di();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&tm(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Dx(n,e){var t=di();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&tm(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Lx(n,e,t){return Hs&21?(Ci(t,e)||(t=Ov(),Ct.lanes|=t,Vs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,bn=!0),n.memoizedState=t)}function Q1(n,e){var t=at;at=t!==0&&4>t?t:4,n(!0);var i=Cf.transition;Cf.transition={};try{n(!1),e()}finally{at=t,Cf.transition=i}}function Nx(){return di().memoizedState}function J1(n,e,t){var i=Kr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Ix(n))Fx(e,t);else if(t=mx(n,e,t,i),t!==null){var r=xn();bi(t,n,i,r),Ux(t,e,i)}}function eE(n,e,t){var i=Kr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ix(n))Fx(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,Ci(o,a)){var l=e.interleaved;l===null?(r.next=r,Kp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=mx(n,e,r,i),t!==null&&(r=xn(),bi(t,n,i,r),Ux(t,e,i))}}function Ix(n){var e=n.alternate;return n===Ct||e!==null&&e===Ct}function Fx(n,e){jo=pu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Ux(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Up(n,t)}}var mu={readContext:fi,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},tE={readContext:fi,useCallback:function(n,e){return Ni().memoizedState=[n,e===void 0?null:e],n},useContext:fi,useEffect:qg,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Oc(4194308,4,Ax.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Oc(4194308,4,n,e)},useInsertionEffect:function(n,e){return Oc(4,2,n,e)},useMemo:function(n,e){var t=Ni();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Ni();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=J1.bind(null,Ct,n),[i.memoizedState,n]},useRef:function(n){var e=Ni();return n={current:n},e.memoizedState=n},useState:Xg,useDebugValue:sm,useDeferredValue:function(n){return Ni().memoizedState=n},useTransition:function(){var n=Xg(!1),e=n[0];return n=Q1.bind(null,n[1]),Ni().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ct,r=Ni();if(St){if(t===void 0)throw Error(re(407));t=t()}else{if(t=e(),Yt===null)throw Error(re(349));Hs&30||yx(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,qg(Mx.bind(null,i,s,n),[n]),i.flags|=2048,pl(9,Sx.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Ni(),e=Yt.identifierPrefix;if(St){var t=cr,i=lr;t=(i&~(1<<32-wi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=dl++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Z1++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},nE={readContext:fi,useCallback:Px,useContext:fi,useEffect:rm,useImperativeHandle:Rx,useInsertionEffect:bx,useLayoutEffect:Cx,useMemo:Dx,useReducer:Af,useRef:wx,useState:function(){return Af(hl)},useDebugValue:sm,useDeferredValue:function(n){var e=di();return Lx(e,Bt.memoizedState,n)},useTransition:function(){var n=Af(hl)[0],e=di().memoizedState;return[n,e]},useMutableSource:vx,useSyncExternalStore:xx,useId:Nx,unstable_isNewReconciler:!1},iE={readContext:fi,useCallback:Px,useContext:fi,useEffect:rm,useImperativeHandle:Rx,useInsertionEffect:bx,useLayoutEffect:Cx,useMemo:Dx,useReducer:Rf,useRef:wx,useState:function(){return Rf(hl)},useDebugValue:sm,useDeferredValue:function(n){var e=di();return Bt===null?e.memoizedState=n:Lx(e,Bt.memoizedState,n)},useTransition:function(){var n=Rf(hl)[0],e=di().memoizedState;return[n,e]},useMutableSource:vx,useSyncExternalStore:xx,useId:Nx,unstable_isNewReconciler:!1};function xi(n,e){if(n&&n.defaultProps){e=At({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function eh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:At({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Hu={isMounted:function(n){return(n=n._reactInternals)?Xs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=xn(),r=Kr(n),s=fr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Yr(n,s,r),e!==null&&(bi(e,n,r,i),Fc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=xn(),r=Kr(n),s=fr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Yr(n,s,r),e!==null&&(bi(e,n,r,i),Fc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=xn(),i=Kr(n),r=fr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Yr(n,r,i),e!==null&&(bi(e,n,i,t),Fc(e,n,i))}};function Yg(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!al(t,i)||!al(r,s):!0}function Ox(n,e,t){var i=!1,r=ts,s=e.contextType;return typeof s=="object"&&s!==null?s=fi(s):(r=An(e)?zs:mn.current,i=e.contextTypes,s=(i=i!=null)?Va(n,r):ts),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hu,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function $g(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Hu.enqueueReplaceState(e,e.state,null)}function th(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Zp(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=fi(s):(s=An(e)?zs:mn.current,r.context=Va(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(eh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Hu.enqueueReplaceState(r,r.state,null),du(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Xa(n,e){try{var t="",i=e;do t+=DM(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Pf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function nh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var rE=typeof WeakMap=="function"?WeakMap:Map;function kx(n,e,t){t=fr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){_u||(_u=!0,dh=i),nh(n,e)},t}function zx(n,e,t){t=fr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){nh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){nh(n,e),typeof i!="function"&&($r===null?$r=new Set([this]):$r.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function Kg(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new rE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=vE.bind(null,n,e,t),e.then(n,n))}function Zg(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Qg(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=fr(-1,1),e.tag=2,Yr(t,e,1))),t.lanes|=1),n)}var sE=Mr.ReactCurrentOwner,bn=!1;function _n(n,e,t,i){e.child=n===null?px(e,null,t,i):Wa(e,n.child,t,i)}function Jg(n,e,t,i,r){t=t.render;var s=e.ref;return Na(e,r),i=nm(n,e,t,i,s,r),t=im(),n!==null&&!bn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,_r(n,e,r)):(St&&t&&Wp(e),e.flags|=1,_n(n,e,i,r),e.child)}function e0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!hm(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Bx(n,e,s,i,r)):(n=Hc(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:al,t(a,i)&&n.ref===e.ref)return _r(n,e,r)}return e.flags|=1,n=Zr(s,i),n.ref=e.ref,n.return=e,e.child=n}function Bx(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(al(s,i)&&n.ref===e.ref)if(bn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(bn=!0);else return e.lanes=n.lanes,_r(n,e,r)}return ih(n,e,t,i,r)}function Hx(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(wa,zn),zn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,gt(wa,zn),zn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,gt(wa,zn),zn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,gt(wa,zn),zn|=i;return _n(n,e,r,t),e.child}function Vx(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function ih(n,e,t,i,r){var s=An(t)?zs:mn.current;return s=Va(e,s),Na(e,r),t=nm(n,e,t,i,s,r),i=im(),n!==null&&!bn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,_r(n,e,r)):(St&&i&&Wp(e),e.flags|=1,_n(n,e,t,r),e.child)}function t0(n,e,t,i,r){if(An(t)){var s=!0;ou(e)}else s=!1;if(Na(e,r),e.stateNode===null)kc(n,e),Ox(e,t,i),th(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=fi(c):(c=An(t)?zs:mn.current,c=Va(e,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&$g(e,a,i,c),Nr=!1;var d=e.memoizedState;a.state=d,du(e,i,a,r),l=e.memoizedState,o!==i||d!==l||Cn.current||Nr?(typeof u=="function"&&(eh(e,t,u,i),l=e.memoizedState),(o=Nr||Yg(e,t,o,i,d,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,gx(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:xi(e.type,o),a.props=c,h=e.pendingProps,d=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=fi(l):(l=An(t)?zs:mn.current,l=Va(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&$g(e,a,i,l),Nr=!1,d=e.memoizedState,a.state=d,du(e,i,a,r);var g=e.memoizedState;o!==h||d!==g||Cn.current||Nr?(typeof p=="function"&&(eh(e,t,p,i),g=e.memoizedState),(c=Nr||Yg(e,t,c,i,d,g,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return rh(n,e,t,i,s,r)}function rh(n,e,t,i,r,s){Vx(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Bg(e,t,!1),_r(n,e,s);i=e.stateNode,sE.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=Wa(e,n.child,null,s),e.child=Wa(e,null,o,s)):_n(n,e,o,s),e.memoizedState=i.state,r&&Bg(e,t,!0),e.child}function Gx(n){var e=n.stateNode;e.pendingContext?zg(n,e.pendingContext,e.pendingContext!==e.context):e.context&&zg(n,e.context,!1),Qp(n,e.containerInfo)}function n0(n,e,t,i,r){return Ga(),Xp(r),e.flags|=256,_n(n,e,t,i),e.child}var sh={dehydrated:null,treeContext:null,retryLane:0};function ah(n){return{baseLanes:n,cachePool:null,transitions:null}}function Wx(n,e,t){var i=e.pendingProps,r=Tt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),gt(Tt,r&1),n===null)return Qd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Wu(a,i,0,null),n=Is(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=ah(t),e.memoizedState=sh,n):am(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return aE(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Zr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Zr(o,s):(s=Is(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?ah(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=sh,i}return s=n.child,n=s.sibling,i=Zr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function am(n,e){return e=Wu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Kl(n,e,t,i){return i!==null&&Xp(i),Wa(e,n.child,null,t),n=am(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function aE(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=Pf(Error(re(422))),Kl(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Wu({mode:"visible",children:i.children},r,0,null),s=Is(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Wa(e,n.child,null,a),e.child.memoizedState=ah(a),e.memoizedState=sh,s);if(!(e.mode&1))return Kl(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(re(419)),i=Pf(s,i,void 0),Kl(n,e,a,i)}if(o=(a&n.childLanes)!==0,bn||o){if(i=Yt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,gr(n,r),bi(i,n,r,-1))}return dm(),i=Pf(Error(re(421))),Kl(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=xE.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Gn=qr(r.nextSibling),Xn=e,St=!0,Mi=null,n!==null&&(ii[ri++]=lr,ii[ri++]=cr,ii[ri++]=Bs,lr=n.id,cr=n.overflow,Bs=e),e=am(e,i.children),e.flags|=4096,e)}function i0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Jd(n.return,e,t)}function Df(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function jx(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(_n(n,e,i.children,t),i=Tt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&i0(n,t,e);else if(n.tag===19)i0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(gt(Tt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&hu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Df(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&hu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Df(e,!0,t,null,s);break;case"together":Df(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function kc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function _r(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Vs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(re(153));if(e.child!==null){for(n=e.child,t=Zr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Zr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function oE(n,e,t){switch(e.tag){case 3:Gx(e),Ga();break;case 5:_x(e);break;case 1:An(e.type)&&ou(e);break;case 4:Qp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(uu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(Tt,Tt.current&1),e.flags|=128,null):t&e.child.childLanes?Wx(n,e,t):(gt(Tt,Tt.current&1),n=_r(n,e,t),n!==null?n.sibling:null);gt(Tt,Tt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return jx(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(Tt,Tt.current),i)break;return null;case 22:case 23:return e.lanes=0,Hx(n,e,t)}return _r(n,e,t)}var Xx,oh,qx,Yx;Xx=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};oh=function(){};qx=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Rs(Vi.current);var s=null;switch(t){case"input":r=Rd(n,r),i=Rd(n,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=Ld(n,r),i=Ld(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=su)}Id(t,i);var a;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Jo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Jo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&xt("scroll",n),s||o===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Yx=function(n,e,t,i){t!==i&&(e.flags|=4)};function xo(n,e){if(!St)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function an(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function lE(n,e,t){var i=e.pendingProps;switch(jp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(e),null;case 1:return An(e.type)&&au(),an(e),null;case 3:return i=e.stateNode,ja(),yt(Cn),yt(mn),em(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Yl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mi!==null&&(mh(Mi),Mi=null))),oh(n,e),an(e),null;case 5:Jp(e);var r=Rs(fl.current);if(t=e.type,n!==null&&e.stateNode!=null)qx(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return an(e),null}if(n=Rs(Vi.current),Yl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ui]=e,i[cl]=s,n=(e.mode&1)!==0,t){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(r=0;r<Io.length;r++)xt(Io[r],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":dg(i,s),xt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},xt("invalid",i);break;case"textarea":pg(i,s),xt("invalid",i)}Id(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ql(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ql(i.textContent,o,n),r=["children",""+o]):Jo.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&xt("scroll",i)}switch(t){case"input":zl(i),hg(i,s,!0);break;case"textarea":zl(i),mg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=su)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Mv(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[Ui]=e,n[cl]=i,Xx(n,e,!1,!1),e.stateNode=n;e:{switch(a=Fd(t,i),t){case"dialog":xt("cancel",n),xt("close",n),r=i;break;case"iframe":case"object":case"embed":xt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Io.length;r++)xt(Io[r],n);r=i;break;case"source":xt("error",n),r=i;break;case"img":case"image":case"link":xt("error",n),xt("load",n),r=i;break;case"details":xt("toggle",n),r=i;break;case"input":dg(n,i),r=Rd(n,i),xt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),xt("invalid",n);break;case"textarea":pg(n,i),r=Ld(n,i),xt("invalid",n);break;default:r=i}Id(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?wv(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ev(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&el(n,l):typeof l=="number"&&el(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Jo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&xt("scroll",n):l!=null&&Pp(n,s,l,a))}switch(t){case"input":zl(n),hg(n,i,!1);break;case"textarea":zl(n),mg(n);break;case"option":i.value!=null&&n.setAttribute("value",""+es(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ra(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ra(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=su)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return an(e),null;case 6:if(n&&e.stateNode!=null)Yx(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(t=Rs(fl.current),Rs(Vi.current),Yl(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ui]=e,(s=i.nodeValue!==t)&&(n=Xn,n!==null))switch(n.tag){case 3:ql(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ql(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ui]=e,e.stateNode=i}return an(e),null;case 13:if(yt(Tt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(St&&Gn!==null&&e.mode&1&&!(e.flags&128))dx(),Ga(),e.flags|=98560,s=!1;else if(s=Yl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[Ui]=e}else Ga(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;an(e),s=!1}else Mi!==null&&(mh(Mi),Mi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Tt.current&1?Ht===0&&(Ht=3):dm())),e.updateQueue!==null&&(e.flags|=4),an(e),null);case 4:return ja(),oh(n,e),n===null&&ol(e.stateNode.containerInfo),an(e),null;case 10:return $p(e.type._context),an(e),null;case 17:return An(e.type)&&au(),an(e),null;case 19:if(yt(Tt),s=e.memoizedState,s===null)return an(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)xo(s,!1);else{if(Ht!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=hu(n),a!==null){for(e.flags|=128,xo(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return gt(Tt,Tt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Ft()>qa&&(e.flags|=128,i=!0,xo(s,!1),e.lanes=4194304)}else{if(!i)if(n=hu(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),xo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!St)return an(e),null}else 2*Ft()-s.renderingStartTime>qa&&t!==1073741824&&(e.flags|=128,i=!0,xo(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ft(),e.sibling=null,t=Tt.current,gt(Tt,i?t&1|2:t&1),e):(an(e),null);case 22:case 23:return fm(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?zn&1073741824&&(an(e),e.subtreeFlags&6&&(e.flags|=8192)):an(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function cE(n,e){switch(jp(e),e.tag){case 1:return An(e.type)&&au(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ja(),yt(Cn),yt(mn),em(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Jp(e),null;case 13:if(yt(Tt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Ga()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return yt(Tt),null;case 4:return ja(),null;case 10:return $p(e.type._context),null;case 22:case 23:return fm(),null;case 24:return null;default:return null}}var Zl=!1,un=!1,uE=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Ta(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Pt(n,e,i)}else t.current=null}function lh(n,e,t){try{t()}catch(i){Pt(n,e,i)}}var r0=!1;function fE(n,e){if(jd=nu,n=Jv(),Gp(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,c=0,u=0,h=n,d=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===n)break t;if(d===t&&++c===r&&(o=a),d===s&&++u===i&&(l=a),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Xd={focusedElem:n,selectionRange:t},nu=!1,xe=e;xe!==null;)if(e=xe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,xe=n;else for(;xe!==null;){e=xe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,_=g.memoizedState,f=e.stateNode,m=f.getSnapshotBeforeUpdate(e.elementType===e.type?v:xi(e.type,v),_);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){Pt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}return g=r0,r0=!1,g}function Xo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&lh(e,t,s)}r=r.next}while(r!==i)}}function Vu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function ch(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function $x(n){var e=n.alternate;e!==null&&(n.alternate=null,$x(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ui],delete e[cl],delete e[$d],delete e[q1],delete e[Y1])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Kx(n){return n.tag===5||n.tag===3||n.tag===4}function s0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Kx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function uh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=su));else if(i!==4&&(n=n.child,n!==null))for(uh(n,e,t),n=n.sibling;n!==null;)uh(n,e,t),n=n.sibling}function fh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(fh(n,e,t),n=n.sibling;n!==null;)fh(n,e,t),n=n.sibling}var Qt=null,yi=!1;function wr(n,e,t){for(t=t.child;t!==null;)Zx(n,e,t),t=t.sibling}function Zx(n,e,t){if(Hi&&typeof Hi.onCommitFiberUnmount=="function")try{Hi.onCommitFiberUnmount(Iu,t)}catch{}switch(t.tag){case 5:un||Ta(t,e);case 6:var i=Qt,r=yi;Qt=null,wr(n,e,t),Qt=i,yi=r,Qt!==null&&(yi?(n=Qt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Qt.removeChild(t.stateNode));break;case 18:Qt!==null&&(yi?(n=Qt,t=t.stateNode,n.nodeType===8?Tf(n.parentNode,t):n.nodeType===1&&Tf(n,t),rl(n)):Tf(Qt,t.stateNode));break;case 4:i=Qt,r=yi,Qt=t.stateNode.containerInfo,yi=!0,wr(n,e,t),Qt=i,yi=r;break;case 0:case 11:case 14:case 15:if(!un&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&lh(t,e,a),r=r.next}while(r!==i)}wr(n,e,t);break;case 1:if(!un&&(Ta(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){Pt(t,e,o)}wr(n,e,t);break;case 21:wr(n,e,t);break;case 22:t.mode&1?(un=(i=un)||t.memoizedState!==null,wr(n,e,t),un=i):wr(n,e,t);break;default:wr(n,e,t)}}function a0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new uE),e.forEach(function(i){var r=yE.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function pi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Qt=o.stateNode,yi=!1;break e;case 3:Qt=o.stateNode.containerInfo,yi=!0;break e;case 4:Qt=o.stateNode.containerInfo,yi=!0;break e}o=o.return}if(Qt===null)throw Error(re(160));Zx(s,a,r),Qt=null,yi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qx(e,n),e=e.sibling}function Qx(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(pi(e,n),Pi(n),i&4){try{Xo(3,n,n.return),Vu(3,n)}catch(v){Pt(n,n.return,v)}try{Xo(5,n,n.return)}catch(v){Pt(n,n.return,v)}}break;case 1:pi(e,n),Pi(n),i&512&&t!==null&&Ta(t,t.return);break;case 5:if(pi(e,n),Pi(n),i&512&&t!==null&&Ta(t,t.return),n.flags&32){var r=n.stateNode;try{el(r,"")}catch(v){Pt(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&yv(r,s),Fd(o,a);var c=Fd(o,s);for(a=0;a<l.length;a+=2){var u=l[a],h=l[a+1];u==="style"?wv(r,h):u==="dangerouslySetInnerHTML"?Ev(r,h):u==="children"?el(r,h):Pp(r,u,h,c)}switch(o){case"input":Pd(r,s);break;case"textarea":Sv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ra(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ra(r,!!s.multiple,s.defaultValue,!0):Ra(r,!!s.multiple,s.multiple?[]:"",!1))}r[cl]=s}catch(v){Pt(n,n.return,v)}}break;case 6:if(pi(e,n),Pi(n),i&4){if(n.stateNode===null)throw Error(re(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){Pt(n,n.return,v)}}break;case 3:if(pi(e,n),Pi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{rl(e.containerInfo)}catch(v){Pt(n,n.return,v)}break;case 4:pi(e,n),Pi(n);break;case 13:pi(e,n),Pi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(cm=Ft())),i&4&&a0(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(un=(c=un)||u,pi(e,n),un=c):pi(e,n),Pi(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(xe=n,u=n.child;u!==null;){for(h=xe=u;xe!==null;){switch(d=xe,p=d.child,d.tag){case 0:case 11:case 14:case 15:Xo(4,d,d.return);break;case 1:Ta(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){Pt(i,t,v)}}break;case 5:Ta(d,d.return);break;case 22:if(d.memoizedState!==null){l0(h);continue}}p!==null?(p.return=d,xe=p):l0(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Tv("display",a))}catch(v){Pt(n,n.return,v)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){Pt(n,n.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:pi(e,n),Pi(n),i&4&&a0(n);break;case 21:break;default:pi(e,n),Pi(n)}}function Pi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Kx(t)){var i=t;break e}t=t.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(el(r,""),i.flags&=-33);var s=s0(n);fh(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=s0(n);uh(n,o,a);break;default:throw Error(re(161))}}catch(l){Pt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function dE(n,e,t){xe=n,Jx(n)}function Jx(n,e,t){for(var i=(n.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Zl;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||un;o=Zl;var c=un;if(Zl=a,(un=l)&&!c)for(xe=r;xe!==null;)a=xe,l=a.child,a.tag===22&&a.memoizedState!==null?c0(r):l!==null?(l.return=a,xe=l):c0(r);for(;s!==null;)xe=s,Jx(s),s=s.sibling;xe=r,Zl=o,un=c}o0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):o0(n)}}function o0(n){for(;xe!==null;){var e=xe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:un||Vu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!un)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:xi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jg(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}jg(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&rl(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}un||e.flags&512&&ch(e)}catch(d){Pt(e,e.return,d)}}if(e===n){xe=null;break}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}}function l0(n){for(;xe!==null;){var e=xe;if(e===n){xe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,xe=t;break}xe=e.return}}function c0(n){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Vu(4,e)}catch(l){Pt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Pt(e,r,l)}}var s=e.return;try{ch(e)}catch(l){Pt(e,s,l)}break;case 5:var a=e.return;try{ch(e)}catch(l){Pt(e,a,l)}}}catch(l){Pt(e,e.return,l)}if(e===n){xe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,xe=o;break}xe=e.return}}var hE=Math.ceil,gu=Mr.ReactCurrentDispatcher,om=Mr.ReactCurrentOwner,ci=Mr.ReactCurrentBatchConfig,Je=0,Yt=null,kt=null,en=0,zn=0,wa=ls(0),Ht=0,ml=null,Vs=0,Gu=0,lm=0,qo=null,wn=null,cm=0,qa=1/0,ir=null,_u=!1,dh=null,$r=null,Ql=!1,zr=null,vu=0,Yo=0,hh=null,zc=-1,Bc=0;function xn(){return Je&6?Ft():zc!==-1?zc:zc=Ft()}function Kr(n){return n.mode&1?Je&2&&en!==0?en&-en:K1.transition!==null?(Bc===0&&(Bc=Ov()),Bc):(n=at,n!==0||(n=window.event,n=n===void 0?16:Wv(n.type)),n):1}function bi(n,e,t,i){if(50<Yo)throw Yo=0,hh=null,Error(re(185));Al(n,t,i),(!(Je&2)||n!==Yt)&&(n===Yt&&(!(Je&2)&&(Gu|=t),Ht===4&&Ur(n,en)),Rn(n,i),t===1&&Je===0&&!(e.mode&1)&&(qa=Ft()+500,zu&&cs()))}function Rn(n,e){var t=n.callbackNode;KM(n,e);var i=tu(n,n===Yt?en:0);if(i===0)t!==null&&vg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&vg(t),e===1)n.tag===0?$1(u0.bind(null,n)):cx(u0.bind(null,n)),j1(function(){!(Je&6)&&cs()}),t=null;else{switch(kv(i)){case 1:t=Fp;break;case 4:t=Fv;break;case 16:t=eu;break;case 536870912:t=Uv;break;default:t=eu}t=oy(t,ey.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function ey(n,e){if(zc=-1,Bc=0,Je&6)throw Error(re(327));var t=n.callbackNode;if(Ia()&&n.callbackNode!==t)return null;var i=tu(n,n===Yt?en:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=xu(n,i);else{e=i;var r=Je;Je|=2;var s=ny();(Yt!==n||en!==e)&&(ir=null,qa=Ft()+500,Ns(n,e));do try{gE();break}catch(o){ty(n,o)}while(!0);Yp(),gu.current=s,Je=r,kt!==null?e=0:(Yt=null,en=0,e=Ht)}if(e!==0){if(e===2&&(r=Bd(n),r!==0&&(i=r,e=ph(n,r))),e===1)throw t=ml,Ns(n,0),Ur(n,i),Rn(n,Ft()),t;if(e===6)Ur(n,i);else{if(r=n.current.alternate,!(i&30)&&!pE(r)&&(e=xu(n,i),e===2&&(s=Bd(n),s!==0&&(i=s,e=ph(n,s))),e===1))throw t=ml,Ns(n,0),Ur(n,i),Rn(n,Ft()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Ms(n,wn,ir);break;case 3:if(Ur(n,i),(i&130023424)===i&&(e=cm+500-Ft(),10<e)){if(tu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){xn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Yd(Ms.bind(null,n,wn,ir),e);break}Ms(n,wn,ir);break;case 4:if(Ur(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-wi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*hE(i/1960))-i,10<i){n.timeoutHandle=Yd(Ms.bind(null,n,wn,ir),i);break}Ms(n,wn,ir);break;case 5:Ms(n,wn,ir);break;default:throw Error(re(329))}}}return Rn(n,Ft()),n.callbackNode===t?ey.bind(null,n):null}function ph(n,e){var t=qo;return n.current.memoizedState.isDehydrated&&(Ns(n,e).flags|=256),n=xu(n,e),n!==2&&(e=wn,wn=t,e!==null&&mh(e)),n}function mh(n){wn===null?wn=n:wn.push.apply(wn,n)}function pE(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Ci(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ur(n,e){for(e&=~lm,e&=~Gu,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-wi(e),i=1<<t;n[t]=-1,e&=~i}}function u0(n){if(Je&6)throw Error(re(327));Ia();var e=tu(n,0);if(!(e&1))return Rn(n,Ft()),null;var t=xu(n,e);if(n.tag!==0&&t===2){var i=Bd(n);i!==0&&(e=i,t=ph(n,i))}if(t===1)throw t=ml,Ns(n,0),Ur(n,e),Rn(n,Ft()),t;if(t===6)throw Error(re(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ms(n,wn,ir),Rn(n,Ft()),null}function um(n,e){var t=Je;Je|=1;try{return n(e)}finally{Je=t,Je===0&&(qa=Ft()+500,zu&&cs())}}function Gs(n){zr!==null&&zr.tag===0&&!(Je&6)&&Ia();var e=Je;Je|=1;var t=ci.transition,i=at;try{if(ci.transition=null,at=1,n)return n()}finally{at=i,ci.transition=t,Je=e,!(Je&6)&&cs()}}function fm(){zn=wa.current,yt(wa)}function Ns(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,W1(t)),kt!==null)for(t=kt.return;t!==null;){var i=t;switch(jp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&au();break;case 3:ja(),yt(Cn),yt(mn),em();break;case 5:Jp(i);break;case 4:ja();break;case 13:yt(Tt);break;case 19:yt(Tt);break;case 10:$p(i.type._context);break;case 22:case 23:fm()}t=t.return}if(Yt=n,kt=n=Zr(n.current,null),en=zn=e,Ht=0,ml=null,lm=Gu=Vs=0,wn=qo=null,As!==null){for(e=0;e<As.length;e++)if(t=As[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}As=null}return n}function ty(n,e){do{var t=kt;try{if(Yp(),Uc.current=mu,pu){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}pu=!1}if(Hs=0,qt=Bt=Ct=null,jo=!1,dl=0,om.current=null,t===null||t.return===null){Ht=1,ml=e,kt=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=en,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Zg(a);if(p!==null){p.flags&=-257,Qg(p,a,o,s,e),p.mode&1&&Kg(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){Kg(s,c,e),dm();break e}l=Error(re(426))}}else if(St&&o.mode&1){var _=Zg(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Qg(_,a,o,s,e),Xp(Xa(l,o));break e}}s=l=Xa(l,o),Ht!==4&&(Ht=2),qo===null?qo=[s]:qo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=kx(s,l,e);Wg(s,f);break e;case 1:o=l;var m=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&($r===null||!$r.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=zx(s,o,e);Wg(s,S);break e}}s=s.return}while(s!==null)}ry(t)}catch(w){e=w,kt===t&&t!==null&&(kt=t=t.return);continue}break}while(!0)}function ny(){var n=gu.current;return gu.current=mu,n===null?mu:n}function dm(){(Ht===0||Ht===3||Ht===2)&&(Ht=4),Yt===null||!(Vs&268435455)&&!(Gu&268435455)||Ur(Yt,en)}function xu(n,e){var t=Je;Je|=2;var i=ny();(Yt!==n||en!==e)&&(ir=null,Ns(n,e));do try{mE();break}catch(r){ty(n,r)}while(!0);if(Yp(),Je=t,gu.current=i,kt!==null)throw Error(re(261));return Yt=null,en=0,Ht}function mE(){for(;kt!==null;)iy(kt)}function gE(){for(;kt!==null&&!HM();)iy(kt)}function iy(n){var e=ay(n.alternate,n,zn);n.memoizedProps=n.pendingProps,e===null?ry(n):kt=e,om.current=null}function ry(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=cE(t,e),t!==null){t.flags&=32767,kt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ht=6,kt=null;return}}else if(t=lE(t,e,zn),t!==null){kt=t;return}if(e=e.sibling,e!==null){kt=e;return}kt=e=n}while(e!==null);Ht===0&&(Ht=5)}function Ms(n,e,t){var i=at,r=ci.transition;try{ci.transition=null,at=1,_E(n,e,t,i)}finally{ci.transition=r,at=i}return null}function _E(n,e,t,i){do Ia();while(zr!==null);if(Je&6)throw Error(re(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(re(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(ZM(n,s),n===Yt&&(kt=Yt=null,en=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ql||(Ql=!0,oy(eu,function(){return Ia(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ci.transition,ci.transition=null;var a=at;at=1;var o=Je;Je|=4,om.current=null,fE(n,t),Qx(t,n),O1(Xd),nu=!!jd,Xd=jd=null,n.current=t,dE(t),VM(),Je=o,at=a,ci.transition=s}else n.current=t;if(Ql&&(Ql=!1,zr=n,vu=r),s=n.pendingLanes,s===0&&($r=null),jM(t.stateNode),Rn(n,Ft()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(_u)throw _u=!1,n=dh,dh=null,n;return vu&1&&n.tag!==0&&Ia(),s=n.pendingLanes,s&1?n===hh?Yo++:(Yo=0,hh=n):Yo=0,cs(),null}function Ia(){if(zr!==null){var n=kv(vu),e=ci.transition,t=at;try{if(ci.transition=null,at=16>n?16:n,zr===null)var i=!1;else{if(n=zr,zr=null,vu=0,Je&6)throw Error(re(331));var r=Je;for(Je|=4,xe=n.current;xe!==null;){var s=xe,a=s.child;if(xe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(xe=c;xe!==null;){var u=xe;switch(u.tag){case 0:case 11:case 15:Xo(8,u,s)}var h=u.child;if(h!==null)h.return=u,xe=h;else for(;xe!==null;){u=xe;var d=u.sibling,p=u.return;if($x(u),u===c){xe=null;break}if(d!==null){d.return=p,xe=d;break}xe=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}xe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,xe=a;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,xe=f;break e}xe=s.return}}var m=n.current;for(xe=m;xe!==null;){a=xe;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,xe=x;else e:for(a=m;xe!==null;){if(o=xe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Vu(9,o)}}catch(w){Pt(o,o.return,w)}if(o===a){xe=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,xe=S;break e}xe=o.return}}if(Je=r,cs(),Hi&&typeof Hi.onPostCommitFiberRoot=="function")try{Hi.onPostCommitFiberRoot(Iu,n)}catch{}i=!0}return i}finally{at=t,ci.transition=e}}return!1}function f0(n,e,t){e=Xa(t,e),e=kx(n,e,1),n=Yr(n,e,1),e=xn(),n!==null&&(Al(n,1,e),Rn(n,e))}function Pt(n,e,t){if(n.tag===3)f0(n,n,t);else for(;e!==null;){if(e.tag===3){f0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($r===null||!$r.has(i))){n=Xa(t,n),n=zx(e,n,1),e=Yr(e,n,1),n=xn(),e!==null&&(Al(e,1,n),Rn(e,n));break}}e=e.return}}function vE(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=xn(),n.pingedLanes|=n.suspendedLanes&t,Yt===n&&(en&t)===t&&(Ht===4||Ht===3&&(en&130023424)===en&&500>Ft()-cm?Ns(n,0):lm|=t),Rn(n,e)}function sy(n,e){e===0&&(n.mode&1?(e=Vl,Vl<<=1,!(Vl&130023424)&&(Vl=4194304)):e=1);var t=xn();n=gr(n,e),n!==null&&(Al(n,e,t),Rn(n,t))}function xE(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),sy(n,t)}function yE(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),sy(n,t)}var ay;ay=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Cn.current)bn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return bn=!1,oE(n,e,t);bn=!!(n.flags&131072)}else bn=!1,St&&e.flags&1048576&&ux(e,cu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;kc(n,e),n=e.pendingProps;var r=Va(e,mn.current);Na(e,t),r=nm(null,e,i,n,r,t);var s=im();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,An(i)?(s=!0,ou(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zp(e),r.updater=Hu,e.stateNode=r,r._reactInternals=e,th(e,i,n,t),e=rh(null,e,i,!0,s,t)):(e.tag=0,St&&s&&Wp(e),_n(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(kc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ME(i),n=xi(i,n),r){case 0:e=ih(null,e,i,n,t);break e;case 1:e=t0(null,e,i,n,t);break e;case 11:e=Jg(null,e,i,n,t);break e;case 14:e=e0(null,e,i,xi(i.type,n),t);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),ih(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),t0(n,e,i,r,t);case 3:e:{if(Gx(e),n===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,gx(n,e),du(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Xa(Error(re(423)),e),e=n0(n,e,i,t,r);break e}else if(i!==r){r=Xa(Error(re(424)),e),e=n0(n,e,i,t,r);break e}else for(Gn=qr(e.stateNode.containerInfo.firstChild),Xn=e,St=!0,Mi=null,t=px(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ga(),i===r){e=_r(n,e,t);break e}_n(n,e,i,t)}e=e.child}return e;case 5:return _x(e),n===null&&Qd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,qd(i,r)?a=null:s!==null&&qd(i,s)&&(e.flags|=32),Vx(n,e),_n(n,e,a,t),e.child;case 6:return n===null&&Qd(e),null;case 13:return Wx(n,e,t);case 4:return Qp(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Wa(e,null,i,t):_n(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),Jg(n,e,i,r,t);case 7:return _n(n,e,e.pendingProps,t),e.child;case 8:return _n(n,e,e.pendingProps.children,t),e.child;case 12:return _n(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,gt(uu,i._currentValue),i._currentValue=a,s!==null)if(Ci(s.value,a)){if(s.children===r.children&&!Cn.current){e=_r(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=fr(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Jd(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Jd(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}_n(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Na(e,t),r=fi(r),i=i(r),e.flags|=1,_n(n,e,i,t),e.child;case 14:return i=e.type,r=xi(i,e.pendingProps),r=xi(i.type,r),e0(n,e,i,r,t);case 15:return Bx(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),kc(n,e),e.tag=1,An(i)?(n=!0,ou(e)):n=!1,Na(e,t),Ox(e,i,r),th(e,i,r,t),rh(null,e,i,!0,n,t);case 19:return jx(n,e,t);case 22:return Hx(n,e,t)}throw Error(re(156,e.tag))};function oy(n,e){return Iv(n,e)}function SE(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(n,e,t,i){return new SE(n,e,t,i)}function hm(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ME(n){if(typeof n=="function")return hm(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Lp)return 11;if(n===Np)return 14}return 2}function Zr(n,e){var t=n.alternate;return t===null?(t=ai(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Hc(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")hm(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case ma:return Is(t.children,r,s,e);case Dp:a=8,r|=8;break;case wd:return n=ai(12,t,e,r|2),n.elementType=wd,n.lanes=s,n;case bd:return n=ai(13,t,e,r),n.elementType=bd,n.lanes=s,n;case Cd:return n=ai(19,t,e,r),n.elementType=Cd,n.lanes=s,n;case _v:return Wu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case mv:a=10;break e;case gv:a=9;break e;case Lp:a=11;break e;case Np:a=14;break e;case Lr:a=16,i=null;break e}throw Error(re(130,n==null?n:typeof n,""))}return e=ai(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Is(n,e,t,i){return n=ai(7,n,i,e),n.lanes=t,n}function Wu(n,e,t,i){return n=ai(22,n,i,e),n.elementType=_v,n.lanes=t,n.stateNode={isHidden:!1},n}function Lf(n,e,t){return n=ai(6,n,null,e),n.lanes=t,n}function Nf(n,e,t){return e=ai(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function EE(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hf(0),this.expirationTimes=hf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function pm(n,e,t,i,r,s,a,o,l){return n=new EE(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ai(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zp(s),n}function TE(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function ly(n){if(!n)return ts;n=n._reactInternals;e:{if(Xs(n)!==n||n.tag!==1)throw Error(re(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(An(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(n.tag===1){var t=n.type;if(An(t))return lx(n,t,e)}return e}function cy(n,e,t,i,r,s,a,o,l){return n=pm(t,i,!0,n,r,s,a,o,l),n.context=ly(null),t=n.current,i=xn(),r=Kr(t),s=fr(i,r),s.callback=e??null,Yr(t,s,r),n.current.lanes=r,Al(n,r,i),Rn(n,i),n}function ju(n,e,t,i){var r=e.current,s=xn(),a=Kr(r);return t=ly(t),e.context===null?e.context=t:e.pendingContext=t,e=fr(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Yr(r,e,a),n!==null&&(bi(n,r,a,s),Fc(n,r,a)),a}function yu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function d0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function mm(n,e){d0(n,e),(n=n.alternate)&&d0(n,e)}function wE(){return null}var uy=typeof reportError=="function"?reportError:function(n){console.error(n)};function gm(n){this._internalRoot=n}Xu.prototype.render=gm.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(re(409));ju(n,e,null,null)};Xu.prototype.unmount=gm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Gs(function(){ju(null,n,null,null)}),e[mr]=null}};function Xu(n){this._internalRoot=n}Xu.prototype.unstable_scheduleHydration=function(n){if(n){var e=Hv();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Fr.length&&e!==0&&e<Fr[t].priority;t++);Fr.splice(t,0,n),t===0&&Gv(n)}};function _m(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function qu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function h0(){}function bE(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=yu(a);s.call(c)}}var a=cy(e,i,n,0,null,!1,!1,"",h0);return n._reactRootContainer=a,n[mr]=a.current,ol(n.nodeType===8?n.parentNode:n),Gs(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=yu(l);o.call(c)}}var l=pm(n,0,!1,null,null,!1,!1,"",h0);return n._reactRootContainer=l,n[mr]=l.current,ol(n.nodeType===8?n.parentNode:n),Gs(function(){ju(e,l,t,i)}),l}function Yu(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=yu(a);o.call(l)}}ju(e,a,n,r)}else a=bE(t,e,n,r,i);return yu(a)}zv=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=No(e.pendingLanes);t!==0&&(Up(e,t|1),Rn(e,Ft()),!(Je&6)&&(qa=Ft()+500,cs()))}break;case 13:Gs(function(){var i=gr(n,1);if(i!==null){var r=xn();bi(i,n,1,r)}}),mm(n,1)}};Op=function(n){if(n.tag===13){var e=gr(n,134217728);if(e!==null){var t=xn();bi(e,n,134217728,t)}mm(n,134217728)}};Bv=function(n){if(n.tag===13){var e=Kr(n),t=gr(n,e);if(t!==null){var i=xn();bi(t,n,e,i)}mm(n,e)}};Hv=function(){return at};Vv=function(n,e){var t=at;try{return at=n,e()}finally{at=t}};Od=function(n,e,t){switch(e){case"input":if(Pd(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=ku(i);if(!r)throw Error(re(90));xv(i),Pd(i,r)}}}break;case"textarea":Sv(n,t);break;case"select":e=t.value,e!=null&&Ra(n,!!t.multiple,e,!1)}};Av=um;Rv=Gs;var CE={usingClientEntryPoint:!1,Events:[Pl,xa,ku,bv,Cv,um]},yo={findFiberByHostInstance:Cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AE={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Lv(n),n===null?null:n.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||wE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{Iu=Jl.inject(AE),Hi=Jl}catch{}}Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CE;Zn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_m(e))throw Error(re(200));return TE(n,e,null,t)};Zn.createRoot=function(n,e){if(!_m(n))throw Error(re(299));var t=!1,i="",r=uy;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=pm(n,1,!1,null,null,t,!1,i,r),n[mr]=e.current,ol(n.nodeType===8?n.parentNode:n),new gm(e)};Zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(re(188)):(n=Object.keys(n).join(","),Error(re(268,n)));return n=Lv(e),n=n===null?null:n.stateNode,n};Zn.flushSync=function(n){return Gs(n)};Zn.hydrate=function(n,e,t){if(!qu(e))throw Error(re(200));return Yu(null,n,e,!0,t)};Zn.hydrateRoot=function(n,e,t){if(!_m(n))throw Error(re(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=uy;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=cy(e,null,n,1,t??null,r,!1,s,a),n[mr]=e.current,ol(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Xu(e)};Zn.render=function(n,e,t){if(!qu(e))throw Error(re(200));return Yu(null,n,e,!1,t)};Zn.unmountComponentAtNode=function(n){if(!qu(n))throw Error(re(40));return n._reactRootContainer?(Gs(function(){Yu(null,null,n,!1,function(){n._reactRootContainer=null,n[mr]=null})}),!0):!1};Zn.unstable_batchedUpdates=um;Zn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!qu(t))throw Error(re(200));if(n==null||n._reactInternals===void 0)throw Error(re(38));return Yu(n,e,t,!1,i)};Zn.version="18.3.1-next-f1338f8080-20240426";function fy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fy)}catch(n){console.error(n)}}fy(),fv.exports=Zn;var RE=fv.exports,dy,p0=RE;dy=p0.createRoot,p0.hydrateRoot;/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=n=>{const e=DE(n);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var LE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=nt.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>nt.createElement("svg",{ref:l,...LE,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:hy("lucide",r),...!s&&!NE(o)&&{"aria-hidden":"true"},...o},[...a.map(([c,u])=>nt.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=(n,e)=>{const t=nt.forwardRef(({className:i,...r},s)=>nt.createElement(IE,{ref:s,iconNode:e,className:hy(`lucide-${PE(m0(n))}`,`lucide-${n}`,i),...r}));return t.displayName=m0(n),t};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],UE=Mn("activity",FE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],py=Mn("check",OE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],zE=Mn("chevron-down",kE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],HE=Mn("circle-plus",BE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],GE=Mn("coffee",VE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],jE=Mn("database",WE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],qE=Mn("footprints",XE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],$E=Mn("pencil",YE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],ZE=Mn("puzzle",KE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]],JE=Mn("shirt",QE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],tT=Mn("smartphone",eT);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],g0=Mn("sparkles",nT);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],rT=Mn("triangle-alert",iT);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],aT=Mn("upload",sT);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],my=Mn("x",oT);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vm="183",Fa={ROTATE:0,DOLLY:1,PAN:2},ba={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lT=0,_0=1,cT=2,Vc=1,uT=2,Fo=3,ns=0,Pn=1,or=2,dr=0,Ua=1,v0=2,x0=3,y0=4,fT=5,ws=100,dT=101,hT=102,pT=103,mT=104,gT=200,_T=201,vT=202,xT=203,gh=204,_h=205,yT=206,ST=207,MT=208,ET=209,TT=210,wT=211,bT=212,CT=213,AT=214,vh=0,xh=1,yh=2,Ya=3,Sh=4,Mh=5,Eh=6,Th=7,gy=0,RT=1,PT=2,Gi=0,_y=1,vy=2,xy=3,yy=4,Sy=5,My=6,Ey=7,Ty=300,Ws=301,$a=302,If=303,Ff=304,$u=306,wh=1e3,ur=1001,bh=1002,Jt=1003,DT=1004,ec=1005,dn=1006,Uf=1007,Ps=1008,Hn=1009,wy=1010,by=1011,gl=1012,xm=1013,Xi=1014,ki=1015,vr=1016,ym=1017,Sm=1018,_l=1020,Cy=35902,Ay=35899,Ry=1021,Py=1022,Ti=1023,xr=1026,Ds=1027,Dy=1028,Mm=1029,Ka=1030,Em=1031,Tm=1033,Gc=33776,Wc=33777,jc=33778,Xc=33779,Ch=35840,Ah=35841,Rh=35842,Ph=35843,Dh=36196,Lh=37492,Nh=37496,Ih=37488,Fh=37489,Uh=37490,Oh=37491,kh=37808,zh=37809,Bh=37810,Hh=37811,Vh=37812,Gh=37813,Wh=37814,jh=37815,Xh=37816,qh=37817,Yh=37818,$h=37819,Kh=37820,Zh=37821,Qh=36492,Jh=36494,ep=36495,tp=36283,np=36284,ip=36285,rp=36286,LT=3200,Ly=0,NT=1,Or="",ti="srgb",Za="srgb-linear",Su="linear",st="srgb",Qs=7680,S0=519,IT=512,FT=513,UT=514,wm=515,OT=516,kT=517,bm=518,zT=519,M0=35044,E0="300 es",zi=2e3,vl=2001;function BT(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Mu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function HT(){const n=Mu("canvas");return n.style.display="block",n}const T0={};function w0(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ny(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ie(...n){n=Ny(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ze(...n){n=Ny(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Eu(...n){const e=n.join(" ");e in T0||(T0[e]=!0,Ie(...n))}function VT(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const GT={[vh]:xh,[yh]:Eh,[Sh]:Th,[Ya]:Mh,[xh]:vh,[Eh]:yh,[Th]:Sh,[Mh]:Ya};class qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$o=Math.PI/180,sp=180/Math.PI;function Ll(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function WT(n,e){return(n%e+e)%e}function Of(n,e,t){return(1-t)*n+t*e}function So(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function En(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const jT={DEG2RAD:$o};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class is{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],d=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(h!==v||l!==d||c!==p||u!==g){let _=l*d+c*p+u*g+h*v;_<0&&(d=-d,p=-p,g=-g,v=-v,_=-_);let f=1-o;if(_<.9995){const m=Math.acos(_),x=Math.sin(m);f=Math.sin(f*m)/x,o=Math.sin(o*m)/x,l=l*f+d*o,c=c*f+p*o,u=u*f+g*o,h=h*f+v*o}else{l=l*f+d*o,c=c*f+p*o,u=u*f+g*o,h=h*f+v*o;const m=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=m,c*=m,u*=m,h*=m}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-o*p,e[t+2]=c*g+u*p+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(b0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(b0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kf.copy(this).projectOnVector(e),this.sub(kf)}reflect(e){return this.sub(kf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kf=new H,b0=new is;class ze{constructor(e,t,i,r,s,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],v=r[0],_=r[3],f=r[6],m=r[1],x=r[4],S=r[7],w=r[2],T=r[5],b=r[8];return s[0]=a*v+o*m+l*w,s[3]=a*_+o*x+l*T,s[6]=a*f+o*S+l*b,s[1]=c*v+u*m+h*w,s[4]=c*_+u*x+h*T,s[7]=c*f+u*S+h*b,s[2]=d*v+p*m+g*w,s[5]=d*_+p*x+g*T,s[8]=d*f+p*S+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,p=c*s-a*l,g=t*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zf.makeScale(e,t)),this}rotate(e){return this.premultiply(zf.makeRotation(-e)),this}translate(e,t){return this.premultiply(zf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zf=new ze,C0=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),A0=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XT(){const n={enabled:!0,workingColorSpace:Za,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=hr(r.r),r.g=hr(r.g),r.b=hr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=Oa(r.r),r.g=Oa(r.g),r.b=Oa(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Or?Su:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Eu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Eu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Za]:{primaries:e,whitePoint:i,transfer:Su,toXYZ:C0,fromXYZ:A0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:i,transfer:st,toXYZ:C0,fromXYZ:A0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),n}const Qe=XT();function hr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Oa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Js;class qT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Js===void 0&&(Js=Mu("canvas")),Js.width=e.width,Js.height=e.height;const r=Js.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Js}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=hr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hr(t[i]/255)*255):t[i]=hr(t[i]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let YT=0;class Cm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YT++}),this.uuid=Ll(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Bf(r[a].image)):s.push(Bf(r[a]))}else s=Bf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Bf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let $T=0;const Hf=new H;class hn extends qs{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,i=ur,r=ur,s=dn,a=Ps,o=Ti,l=Hn,c=hn.DEFAULT_ANISOTROPY,u=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$T++}),this.uuid=Ll(),this.name="",this.source=new Cm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hf).x}get height(){return this.source.getSize(Hf).y}get depth(){return this.source.getSize(Hf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ty)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wh:e.x=e.x-Math.floor(e.x);break;case ur:e.x=e.x<0?0:1;break;case bh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wh:e.y=e.y-Math.floor(e.y);break;case ur:e.y=e.y<0?0:1;break;case bh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Ty;hn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],_=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+_)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(p+1)/2,w=(f+1)/2,T=(u+d)/4,b=(h+v)/4,y=(g+_)/4;return x>S&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=b/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=y/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=b/s,r=y/s),this.set(i,r,s,t),this}let m=Math.sqrt((_-g)*(_-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(m)<.001&&(m=1),this.x=(_-g)/m,this.y=(h-v)/m,this.z=(d-u)/m,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KT extends qs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new hn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Cm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends KT{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Iy extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZT extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _t{constructor(e,t,i,r,s,a,o,l,c,u,h,d,p,g,v,_){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,d,p,g,v,_)}set(e,t,i,r,s,a,o,l,c,u,h,d,p,g,v,_){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/ea.setFromMatrixColumn(e,0).length(),s=1/ea.setFromMatrixColumn(e,1).length(),a=1/ea.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QT,e,JT)}lookAt(e,t,i){const r=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),br.crossVectors(i,On),br.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),br.crossVectors(i,On)),br.normalize(),tc.crossVectors(On,br),r[0]=br.x,r[4]=tc.x,r[8]=On.x,r[1]=br.y,r[5]=tc.y,r[9]=On.y,r[2]=br.z,r[6]=tc.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],v=i[6],_=i[10],f=i[14],m=i[3],x=i[7],S=i[11],w=i[15],T=r[0],b=r[4],y=r[8],E=r[12],L=r[1],R=r[5],z=r[9],O=r[13],X=r[2],B=r[6],V=r[10],F=r[14],G=r[3],Y=r[7],J=r[11],ie=r[15];return s[0]=a*T+o*L+l*X+c*G,s[4]=a*b+o*R+l*B+c*Y,s[8]=a*y+o*z+l*V+c*J,s[12]=a*E+o*O+l*F+c*ie,s[1]=u*T+h*L+d*X+p*G,s[5]=u*b+h*R+d*B+p*Y,s[9]=u*y+h*z+d*V+p*J,s[13]=u*E+h*O+d*F+p*ie,s[2]=g*T+v*L+_*X+f*G,s[6]=g*b+v*R+_*B+f*Y,s[10]=g*y+v*z+_*V+f*J,s[14]=g*E+v*O+_*F+f*ie,s[3]=m*T+x*L+S*X+w*G,s[7]=m*b+x*R+S*B+w*Y,s[11]=m*y+x*z+S*V+w*J,s[15]=m*E+x*O+S*F+w*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],v=e[7],_=e[11],f=e[15],m=l*p-c*d,x=o*p-c*h,S=o*d-l*h,w=a*p-c*u,T=a*d-l*u,b=a*h-o*u;return t*(v*m-_*x+f*S)-i*(g*m-_*w+f*T)+r*(g*x-v*w+f*b)-s*(g*S-v*T+_*b)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],v=e[13],_=e[14],f=e[15],m=t*o-i*a,x=t*l-r*a,S=t*c-s*a,w=i*l-r*o,T=i*c-s*o,b=r*c-s*l,y=u*v-h*g,E=u*_-d*g,L=u*f-p*g,R=h*_-d*v,z=h*f-p*v,O=d*f-p*_,X=m*O-x*z+S*R+w*L-T*E+b*y;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/X;return e[0]=(o*O-l*z+c*R)*B,e[1]=(r*z-i*O-s*R)*B,e[2]=(v*b-_*T+f*w)*B,e[3]=(d*T-h*b-p*w)*B,e[4]=(l*L-a*O-c*E)*B,e[5]=(t*O-r*L+s*E)*B,e[6]=(_*S-g*b-f*x)*B,e[7]=(u*b-d*S+p*x)*B,e[8]=(a*z-o*L+c*y)*B,e[9]=(i*L-t*z-s*y)*B,e[10]=(g*T-v*S+f*m)*B,e[11]=(h*S-u*T-p*m)*B,e[12]=(o*E-a*R-l*y)*B,e[13]=(t*R-i*E+r*y)*B,e[14]=(v*x-g*w-_*m)*B,e[15]=(u*w-h*x+d*m)*B,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,p=s*u,g=s*h,v=a*u,_=a*h,f=o*h,m=l*c,x=l*u,S=l*h,w=i.x,T=i.y,b=i.z;return r[0]=(1-(v+f))*w,r[1]=(p+S)*w,r[2]=(g-x)*w,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(d+f))*T,r[6]=(_+m)*T,r[7]=0,r[8]=(g+x)*b,r[9]=(_-m)*b,r[10]=(1-(d+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=ea.set(r[0],r[1],r[2]).length();const o=ea.set(r[4],r[5],r[6]).length(),l=ea.set(r[8],r[9],r[10]).length();s<0&&(a=-a),mi.copy(this);const c=1/a,u=1/o,h=1/l;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=u,mi.elements[5]*=u,mi.elements[6]*=u,mi.elements[8]*=h,mi.elements[9]*=h,mi.elements[10]*=h,t.setFromRotationMatrix(mi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=zi,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let g,v;if(l)g=s/(a-s),v=a*s/(a-s);else if(o===zi)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===vl)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=zi,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,v;if(l)g=1/(a-s),v=a/(a-s);else if(o===zi)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===vl)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ea=new H,mi=new _t,QT=new H(0,0,0),JT=new H(1,1,1),br=new H,tc=new H,On=new H,R0=new _t,P0=new is;class qi{constructor(e=0,t=0,i=0,r=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return R0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(R0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return P0.setFromEuler(this),this.setFromQuaternion(P0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class Am{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ew=0;const D0=new H,ta=new is,Qi=new _t,nc=new H,Mo=new H,tw=new H,nw=new is,L0=new H(1,0,0),N0=new H(0,1,0),I0=new H(0,0,1),F0={type:"added"},iw={type:"removed"},na={type:"childadded",child:null},Vf={type:"childremoved",child:null};class $t extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ew++}),this.uuid=Ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new H,t=new qi,i=new is,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new ze}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Am,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.multiply(ta),this}rotateOnWorldAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.premultiply(ta),this}rotateX(e){return this.rotateOnAxis(L0,e)}rotateY(e){return this.rotateOnAxis(N0,e)}rotateZ(e){return this.rotateOnAxis(I0,e)}translateOnAxis(e,t){return D0.copy(e).applyQuaternion(this.quaternion),this.position.add(D0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(L0,e)}translateY(e){return this.translateOnAxis(N0,e)}translateZ(e){return this.translateOnAxis(I0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?nc.copy(e):nc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Mo,nc,this.up):Qi.lookAt(nc,Mo,this.up),this.quaternion.setFromRotationMatrix(Qi),r&&(Qi.extractRotation(r.matrixWorld),ta.setFromRotationMatrix(Qi),this.quaternion.premultiply(ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(F0),na.child=e,this.dispatchEvent(na),na.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(iw),Vf.child=e,this.dispatchEvent(Vf),Vf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(F0),na.child=e,this.dispatchEvent(na),na.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,tw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,nw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DEFAULT_UP=new H(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ic extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rw={type:"move"};class Gf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ic,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ic,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ic,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,i),f=this._getHandJoint(c,v);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ic;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Fy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},rc={h:0,s:0,l:0};function Wf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=WT(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Wf(a,s,e+1/3),this.g=Wf(a,s,e),this.b=Wf(a,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=ti){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const i=Fy[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Qe.workingToColorSpace(ln.copy(this),e),Math.round(je(ln.r*255,0,255))*65536+Math.round(je(ln.g*255,0,255))*256+Math.round(je(ln.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(ln.copy(this),t);const i=ln.r,r=ln.g,s=ln.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=ti){Qe.workingToColorSpace(ln.copy(this),e);const t=ln.r,i=ln.g,r=ln.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(rc);const i=Of(Cr.h,rc.h,t),r=Of(Cr.s,rc.s,t),s=Of(Cr.l,rc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new tt;tt.NAMES=Fy;class sw extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gi=new H,Ji=new H,jf=new H,er=new H,ia=new H,ra=new H,U0=new H,Xf=new H,qf=new H,Yf=new H,$f=new Dt,Kf=new Dt,Zf=new Dt;class si{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),gi.subVectors(e,t),r.cross(gi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){gi.subVectors(r,t),Ji.subVectors(i,t),jf.subVectors(e,t);const a=gi.dot(gi),o=gi.dot(Ji),l=gi.dot(jf),c=Ji.dot(Ji),u=Ji.dot(jf),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,er.x),l.addScaledVector(a,er.y),l.addScaledVector(o,er.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return $f.setScalar(0),Kf.setScalar(0),Zf.setScalar(0),$f.fromBufferAttribute(e,t),Kf.fromBufferAttribute(e,i),Zf.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector($f,s.x),a.addScaledVector(Kf,s.y),a.addScaledVector(Zf,s.z),a}static isFrontFacing(e,t,i,r){return gi.subVectors(i,t),Ji.subVectors(e,t),gi.cross(Ji).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),gi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return si.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ia.subVectors(r,i),ra.subVectors(s,i),Xf.subVectors(e,i);const l=ia.dot(Xf),c=ra.dot(Xf);if(l<=0&&c<=0)return t.copy(i);qf.subVectors(e,r);const u=ia.dot(qf),h=ra.dot(qf);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ia,a);Yf.subVectors(e,s);const p=ia.dot(Yf),g=ra.dot(Yf);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ra,o);const _=u*g-p*h;if(_<=0&&h-u>=0&&p-g>=0)return U0.subVectors(s,r),o=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(U0,o);const f=1/(_+v+d);return a=v*f,o=d*f,t.copy(i).addScaledVector(ia,a).addScaledVector(ra,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class co{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_i):_i.fromBufferAttribute(s,a),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sc.copy(i.boundingBox)),sc.applyMatrix4(e.matrixWorld),this.union(sc)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),ac.subVectors(this.max,Eo),sa.subVectors(e.a,Eo),aa.subVectors(e.b,Eo),oa.subVectors(e.c,Eo),Ar.subVectors(aa,sa),Rr.subVectors(oa,aa),hs.subVectors(sa,oa);let t=[0,-Ar.z,Ar.y,0,-Rr.z,Rr.y,0,-hs.z,hs.y,Ar.z,0,-Ar.x,Rr.z,0,-Rr.x,hs.z,0,-hs.x,-Ar.y,Ar.x,0,-Rr.y,Rr.x,0,-hs.y,hs.x,0];return!Qf(t,sa,aa,oa,ac)||(t=[1,0,0,0,1,0,0,0,1],!Qf(t,sa,aa,oa,ac))?!1:(oc.crossVectors(Ar,Rr),t=[oc.x,oc.y,oc.z],Qf(t,sa,aa,oa,ac))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const tr=[new H,new H,new H,new H,new H,new H,new H,new H],_i=new H,sc=new co,sa=new H,aa=new H,oa=new H,Ar=new H,Rr=new H,hs=new H,Eo=new H,ac=new H,oc=new H,ps=new H;function Qf(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ps.fromArray(n,s);const o=r.x*Math.abs(ps.x)+r.y*Math.abs(ps.y)+r.z*Math.abs(ps.z),l=e.dot(ps),c=t.dot(ps),u=i.dot(ps);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ut=new H,lc=new Oe;let aw=0;class ji{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:aw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=M0,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)lc.fromBufferAttribute(this,t),lc.applyMatrix3(e),this.setXY(t,lc.x,lc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=So(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=En(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=So(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=So(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=So(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=So(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array),r=En(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array),r=En(r,this.array),s=En(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==M0&&(e.usage=this.usage),e}}class Uy extends ji{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Oy extends ji{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ui extends ji{constructor(e,t,i){super(new Float32Array(e),t,i)}}const ow=new co,To=new H,Jf=new H;class Ku{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ow.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;To.subVectors(e,this.center);const t=To.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(To,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(To.copy(e.center).add(Jf)),this.expandByPoint(To.copy(e.center).sub(Jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lw=0;const Jn=new _t,ed=new $t,la=new H,kn=new co,wo=new co,jt=new H;class Ai extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lw++}),this.uuid=Ll(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(BT(e)?Oy:Uy)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,i){return Jn.makeTranslation(e,t,i),this.applyMatrix4(Jn),this}scale(e,t,i){return Jn.makeScale(e,t,i),this.applyMatrix4(Jn),this}lookAt(e){return ed.lookAt(e),ed.updateMatrix(),this.applyMatrix4(ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(la).negate(),this.translate(la.x,la.y,la.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ui(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ku);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];wo.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(kn.min,wo.min),kn.expandByPoint(jt),jt.addVectors(kn.max,wo.max),kn.expandByPoint(jt)):(kn.expandByPoint(wo.min),kn.expandByPoint(wo.max))}kn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)jt.fromBufferAttribute(o,c),l&&(la.fromBufferAttribute(e,c),jt.add(la)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ji(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new H,l[y]=new H;const c=new H,u=new H,h=new H,d=new Oe,p=new Oe,g=new Oe,v=new H,_=new H;function f(y,E,L){c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,L),d.fromBufferAttribute(s,y),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,L),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),_.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),o[y].add(v),o[E].add(v),o[L].add(v),l[y].add(_),l[E].add(_),l[L].add(_))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let y=0,E=m.length;y<E;++y){const L=m[y],R=L.start,z=L.count;for(let O=R,X=R+z;O<X;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new H,S=new H,w=new H,T=new H;function b(y){w.fromBufferAttribute(r,y),T.copy(w);const E=o[y];x.copy(E),x.sub(w.multiplyScalar(w.dot(E))).normalize(),S.crossVectors(T,E);const R=S.dot(l[y])<0?-1:1;a.setXYZW(y,x.x,x.y,x.z,R)}for(let y=0,E=m.length;y<E;++y){const L=m[y],R=L.start,z=L.count;for(let O=R,X=R+z;O<X;O+=3)b(e.getX(O+0)),b(e.getX(O+1)),b(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ji(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,_),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,_),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,_=l.length;v<_;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new ji(d,u,h)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ai,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let cw=0;class uo extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cw++}),this.uuid=Ll(),this.name="",this.type="Material",this.blending=Ua,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=_h,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=S0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ua&&(i.blending=this.blending),this.side!==ns&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gh&&(i.blendSrc=this.blendSrc),this.blendDst!==_h&&(i.blendDst=this.blendDst),this.blendEquation!==ws&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ya&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==S0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const nr=new H,td=new H,cc=new H,Pr=new H,nd=new H,uc=new H,id=new H;class Zu{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nr.copy(this.origin).addScaledVector(this.direction,t),nr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){td.copy(e).add(t).multiplyScalar(.5),cc.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(td);const s=e.distanceTo(t)*.5,a=-this.direction.dot(cc),o=Pr.dot(this.direction),l=-Pr.dot(cc),c=Pr.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(td).addScaledVector(cc,d),p}intersectSphere(e,t){nr.subVectors(e.center,this.origin);const i=nr.dot(this.direction),r=nr.dot(nr)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,nr)!==null}intersectTriangle(e,t,i,r,s){nd.subVectors(t,e),uc.subVectors(i,e),id.crossVectors(nd,uc);let a=this.direction.dot(id),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pr.subVectors(this.origin,e);const l=o*this.direction.dot(uc.crossVectors(Pr,uc));if(l<0)return null;const c=o*this.direction.dot(nd.cross(Pr));if(c<0||l+c>a)return null;const u=-o*Pr.dot(id);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rm extends uo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=gy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const O0=new _t,ms=new Zu,fc=new Ku,k0=new H,dc=new H,hc=new H,pc=new H,rd=new H,mc=new H,z0=new H,gc=new H;class cn extends $t{constructor(e=new Ai,t=new Rm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){mc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(rd.fromBufferAttribute(h,e),a?mc.addScaledVector(rd,u):mc.addScaledVector(rd.sub(t),u))}t.add(mc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fc.copy(i.boundingSphere),fc.applyMatrix4(s),ms.copy(e.ray).recast(e.near),!(fc.containsPoint(ms.origin)===!1&&(ms.intersectSphere(fc,k0)===null||ms.origin.distanceToSquared(k0)>(e.far-e.near)**2))&&(O0.copy(s).invert(),ms.copy(e.ray).applyMatrix4(O0),!(i.boundingBox!==null&&ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const _=d[g],f=a[_.materialIndex],m=Math.max(_.start,p.start),x=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let S=m,w=x;S<w;S+=3){const T=o.getX(S),b=o.getX(S+1),y=o.getX(S+2);r=_c(this,f,e,i,c,u,h,T,b,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let _=g,f=v;_<f;_+=3){const m=o.getX(_),x=o.getX(_+1),S=o.getX(_+2);r=_c(this,a,e,i,c,u,h,m,x,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const _=d[g],f=a[_.materialIndex],m=Math.max(_.start,p.start),x=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let S=m,w=x;S<w;S+=3){const T=S,b=S+1,y=S+2;r=_c(this,f,e,i,c,u,h,T,b,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let _=g,f=v;_<f;_+=3){const m=_,x=_+1,S=_+2;r=_c(this,a,e,i,c,u,h,m,x,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function uw(n,e,t,i,r,s,a,o){let l;if(e.side===Pn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ns,o),l===null)return null;gc.copy(o),gc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(gc);return c<t.near||c>t.far?null:{distance:c,point:gc.clone(),object:n}}function _c(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,dc),n.getVertexPosition(l,hc),n.getVertexPosition(c,pc);const u=uw(n,e,t,i,dc,hc,pc,z0);if(u){const h=new H;si.getBarycoord(z0,dc,hc,pc,h),r&&(u.uv=si.getInterpolatedAttribute(r,o,l,c,h,new Oe)),s&&(u.uv1=si.getInterpolatedAttribute(s,o,l,c,h,new Oe)),a&&(u.normal=si.getInterpolatedAttribute(a,o,l,c,h,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new H,materialIndex:0};si.getNormal(dc,hc,pc,d.normal),u.face=d,u.barycoord=h}return u}class fw extends hn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Jt,u=Jt,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sd=new H,dw=new H,hw=new ze;class Ir{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=sd.subVectors(i,t).cross(dw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(sd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hw.getNormalMatrix(e),r=this.coplanarPoint(sd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new Ku,pw=new Oe(.5,.5),vc=new H;class Pm{constructor(e=new Ir,t=new Ir,i=new Ir,r=new Ir,s=new Ir,a=new Ir){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],p=s[7],g=s[8],v=s[9],_=s[10],f=s[11],m=s[12],x=s[13],S=s[14],w=s[15];if(r[0].setComponents(c-a,p-u,f-g,w-m).normalize(),r[1].setComponents(c+a,p+u,f+g,w+m).normalize(),r[2].setComponents(c+o,p+h,f+v,w+x).normalize(),r[3].setComponents(c-o,p-h,f-v,w-x).normalize(),i)r[4].setComponents(l,d,_,S).normalize(),r[5].setComponents(c-l,p-d,f-_,w-S).normalize();else if(r[4].setComponents(c-l,p-d,f-_,w-S).normalize(),t===zi)r[5].setComponents(c+l,p+d,f+_,w+S).normalize();else if(t===vl)r[5].setComponents(l,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);const t=pw.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(vc.x=r.normal.x>0?e.max.x:e.min.x,vc.y=r.normal.y>0?e.max.y:e.min.y,vc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ap extends uo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tu=new H,wu=new H,B0=new _t,bo=new Zu,xc=new Ku,ad=new H,H0=new H;class mw extends $t{constructor(e=new Ai,t=new ap){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Tu.fromBufferAttribute(t,r-1),wu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Tu.distanceTo(wu);e.setAttribute("lineDistance",new ui(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xc.copy(i.boundingSphere),xc.applyMatrix4(r),xc.radius+=s,e.ray.intersectsSphere(xc)===!1)return;B0.copy(r).invert(),bo.copy(e.ray).applyMatrix4(B0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=p,_=g-1;v<_;v+=c){const f=u.getX(v),m=u.getX(v+1),x=yc(this,e,bo,l,f,m,v);x&&t.push(x)}if(this.isLineLoop){const v=u.getX(g-1),_=u.getX(p),f=yc(this,e,bo,l,v,_,g-1);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=p,_=g-1;v<_;v+=c){const f=yc(this,e,bo,l,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){const v=yc(this,e,bo,l,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function yc(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Tu.fromBufferAttribute(o,r),wu.fromBufferAttribute(o,s),t.distanceSqToSegment(Tu,wu,ad,H0)>i)return;ad.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ad);if(!(c<e.near||c>e.far))return{distance:c,point:H0.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const V0=new H,G0=new H;class W0 extends mw{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)V0.fromBufferAttribute(t,r),G0.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+V0.distanceTo(G0);e.setAttribute("lineDistance",new ui(i,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ky extends hn{constructor(e=[],t=Ws,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class j0 extends hn{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xl extends hn{constructor(e,t,i=Xi,r,s,a,o=Jt,l=Jt,c,u=xr,h=1){if(u!==xr&&u!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gw extends xl{constructor(e,t=Xi,i=Ws,r,s,a=Jt,o=Jt,l,c=xr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zy extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ni extends Ai{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ui(c,3)),this.setAttribute("normal",new ui(u,3)),this.setAttribute("uv",new ui(h,2));function g(v,_,f,m,x,S,w,T,b,y,E){const L=S/b,R=w/y,z=S/2,O=w/2,X=T/2,B=b+1,V=y+1;let F=0,G=0;const Y=new H;for(let J=0;J<V;J++){const ie=J*R-O;for(let ne=0;ne<B;ne++){const Le=ne*L-z;Y[v]=Le*m,Y[_]=ie*x,Y[f]=X,c.push(Y.x,Y.y,Y.z),Y[v]=0,Y[_]=0,Y[f]=T>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(ne/b),h.push(1-J/y),F+=1}}for(let J=0;J<y;J++)for(let ie=0;ie<b;ie++){const ne=d+ie+B*J,Le=d+ie+B*(J+1),Fe=d+(ie+1)+B*(J+1),Be=d+(ie+1)+B*J;l.push(ne,Le,Be),l.push(Le,Fe,Be),G+=6}o.addGroup(p,G,E),p+=G,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const Sc=new H,Mc=new H,od=new H,Ec=new si;class X0 extends Ai{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos($o*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:_,c:f}=Ec;if(v.fromBufferAttribute(o,c[0]),_.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),Ec.getNormal(od),h[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){const x=(m+1)%3,S=h[m],w=h[x],T=Ec[u[m]],b=Ec[u[x]],y=`${S}_${w}`,E=`${w}_${S}`;E in d&&d[E]?(od.dot(d[E].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(b.x,b.y,b.z)),d[E]=null):y in d||(d[y]={index0:c[m],index1:c[x],normal:od.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:_}=d[g];Sc.fromBufferAttribute(o,v),Mc.fromBufferAttribute(o,_),p.push(Sc.x,Sc.y,Sc.z),p.push(Mc.x,Mc.y,Mc.z)}this.setAttribute("position",new ui(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Qa extends Ai{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,p=[],g=[],v=[],_=[];for(let f=0;f<u;f++){const m=f*d-a;for(let x=0;x<c;x++){const S=x*h-s;g.push(S,-m,0),v.push(0,0,1),_.push(x/o),_.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const x=m+c*f,S=m+c*(f+1),w=m+1+c*(f+1),T=m+1+c*f;p.push(x,S,T),p.push(S,w,T)}this.setIndex(p),this.setAttribute("position",new ui(g,3)),this.setAttribute("normal",new ui(v,3)),this.setAttribute("uv",new ui(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ja(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function gn(n){const e={};for(let t=0;t<n.length;t++){const i=Ja(n[t]);for(const r in i)e[r]=i[r]}return e}function _w(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function By(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const vw={clone:Ja,merge:gn};var xw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends uo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xw,this.fragmentShader=yw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ja(e.uniforms),this.uniformsGroups=_w(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Sw extends Yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vi extends uo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ly,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mw extends uo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ew extends uo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hy extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ld=new _t,q0=new H,Y0=new H;class Tw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=Hn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pm,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;q0.setFromMatrixPosition(e.matrixWorld),t.position.copy(q0),Y0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Y0),t.updateMatrixWorld(),ld.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ld,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===vl||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ld)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Tc=new H,wc=new is,Di=new H;class Vy extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Tc,wc,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,wc,Di.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Tc,wc,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,wc,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new H,$0=new Oe,K0=new Oe;class Ei extends Vy{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sp*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,$0,K0),t.subVectors(K0,$0)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($o*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Qu extends Vy{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ww extends Tw{constructor(){super(new Qu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bw extends Hy{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new ww}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Cw extends Hy{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ca=-90,ua=1;class Aw extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ei(ca,ua,e,t);r.layers=this.layers,this.add(r);const s=new Ei(ca,ua,e,t);s.layers=this.layers,this.add(s);const a=new Ei(ca,ua,e,t);a.layers=this.layers,this.add(a);const o=new Ei(ca,ua,e,t);o.layers=this.layers,this.add(o);const l=new Ei(ca,ua,e,t);l.layers=this.layers,this.add(l);const c=new Ei(ca,ua,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Rw extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Z0=new _t;class Pw{constructor(e,t,i=0,r=1/0){this.ray=new Zu(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Am,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Z0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Z0),this}intersectObject(e,t=!0,i=[]){return op(e,this,i,t),i.sort(Q0),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)op(e[r],this,i,t);return i.sort(Q0),i}}function Q0(n,e){return n.distance-e.distance}function op(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)op(s[a],e,t,!0)}}class J0{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Dw extends qs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ie("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function e_(n,e,t,i){const r=Lw(i);switch(t){case Ry:return n*e;case Dy:return n*e/r.components*r.byteLength;case Mm:return n*e/r.components*r.byteLength;case Ka:return n*e*2/r.components*r.byteLength;case Em:return n*e*2/r.components*r.byteLength;case Py:return n*e*3/r.components*r.byteLength;case Ti:return n*e*4/r.components*r.byteLength;case Tm:return n*e*4/r.components*r.byteLength;case Gc:case Wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jc:case Xc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ah:case Ph:return Math.max(n,16)*Math.max(e,8)/4;case Ch:case Rh:return Math.max(n,8)*Math.max(e,8)/2;case Dh:case Lh:case Ih:case Fh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nh:case Uh:case Oh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case qh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case $h:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Qh:case Jh:case ep:return Math.ceil(n/4)*Math.ceil(e/4)*16;case tp:case np:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ip:case rp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lw(n){switch(n){case Hn:case wy:return{byteLength:1,components:1};case gl:case by:case vr:return{byteLength:2,components:1};case ym:case Sm:return{byteLength:2,components:4};case Xi:case xm:case ki:return{byteLength:4,components:1};case Cy:case Ay:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vm}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gy(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Nw(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Iw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fw=`#ifdef USE_ALPHAHASH
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
#endif`,Uw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ow=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bw=`#ifdef USE_AOMAP
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
#endif`,Hw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vw=`#ifdef USE_BATCHING
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
#endif`,Gw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ww=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qw=`#ifdef USE_IRIDESCENCE
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
#endif`,Yw=`#ifdef USE_BUMPMAP
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
#endif`,$w=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ib=`#define PI 3.141592653589793
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
} // validated`,rb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sb=`vec3 transformedNormal = objectNormal;
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
#endif`,ab=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ob=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",fb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,db=`#ifdef USE_ENVMAP
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
#endif`,hb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pb=`#ifdef USE_ENVMAP
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
#endif`,mb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gb=`#ifdef USE_ENVMAP
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
#endif`,_b=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sb=`#ifdef USE_GRADIENTMAP
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
}`,Mb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wb=`uniform bool receiveShadow;
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
#endif`,bb=`#ifdef USE_ENVMAP
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
#endif`,Cb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Db=`PhysicalMaterial material;
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
#endif`,Lb=`uniform sampler2D dfgLUT;
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
}`,Nb=`
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
#endif`,Ib=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ob=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gb=`#if defined( USE_POINTS_UV )
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
#endif`,Wb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$b=`#ifdef USE_MORPHTARGETS
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
#endif`,Kb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nC=`#ifdef USE_NORMALMAP
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
#endif`,iC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_C=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vC=`float getShadowMask() {
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
}`,xC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yC=`#ifdef USE_SKINNING
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
#endif`,SC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MC=`#ifdef USE_SKINNING
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
#endif`,EC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,CC=`#ifdef USE_TRANSMISSION
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
#endif`,AC=`#ifdef USE_TRANSMISSION
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
#endif`,RC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IC=`uniform sampler2D t2D;
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
}`,FC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,OC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zC=`#include <common>
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
}`,BC=`#if DEPTH_PACKING == 3200
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
}`,HC=`#define DISTANCE
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
}`,VC=`#define DISTANCE
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
}`,GC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jC=`uniform float scale;
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
}`,XC=`uniform vec3 diffuse;
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
}`,qC=`#include <common>
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
}`,YC=`uniform vec3 diffuse;
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
}`,$C=`#define LAMBERT
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
}`,KC=`#define LAMBERT
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
}`,ZC=`#define MATCAP
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
}`,QC=`#define MATCAP
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
}`,JC=`#define NORMAL
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
}`,eA=`#define NORMAL
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
}`,tA=`#define PHONG
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
}`,nA=`#define PHONG
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
}`,iA=`#define STANDARD
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
}`,rA=`#define STANDARD
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
}`,sA=`#define TOON
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
}`,aA=`#define TOON
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
}`,oA=`uniform float size;
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
}`,lA=`uniform vec3 diffuse;
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
}`,cA=`#include <common>
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
}`,uA=`uniform vec3 color;
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
}`,fA=`uniform float rotation;
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
}`,dA=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Iw,alphahash_pars_fragment:Fw,alphamap_fragment:Uw,alphamap_pars_fragment:Ow,alphatest_fragment:kw,alphatest_pars_fragment:zw,aomap_fragment:Bw,aomap_pars_fragment:Hw,batching_pars_vertex:Vw,batching_vertex:Gw,begin_vertex:Ww,beginnormal_vertex:jw,bsdfs:Xw,iridescence_fragment:qw,bumpmap_pars_fragment:Yw,clipping_planes_fragment:$w,clipping_planes_pars_fragment:Kw,clipping_planes_pars_vertex:Zw,clipping_planes_vertex:Qw,color_fragment:Jw,color_pars_fragment:eb,color_pars_vertex:tb,color_vertex:nb,common:ib,cube_uv_reflection_fragment:rb,defaultnormal_vertex:sb,displacementmap_pars_vertex:ab,displacementmap_vertex:ob,emissivemap_fragment:lb,emissivemap_pars_fragment:cb,colorspace_fragment:ub,colorspace_pars_fragment:fb,envmap_fragment:db,envmap_common_pars_fragment:hb,envmap_pars_fragment:pb,envmap_pars_vertex:mb,envmap_physical_pars_fragment:bb,envmap_vertex:gb,fog_vertex:_b,fog_pars_vertex:vb,fog_fragment:xb,fog_pars_fragment:yb,gradientmap_pars_fragment:Sb,lightmap_pars_fragment:Mb,lights_lambert_fragment:Eb,lights_lambert_pars_fragment:Tb,lights_pars_begin:wb,lights_toon_fragment:Cb,lights_toon_pars_fragment:Ab,lights_phong_fragment:Rb,lights_phong_pars_fragment:Pb,lights_physical_fragment:Db,lights_physical_pars_fragment:Lb,lights_fragment_begin:Nb,lights_fragment_maps:Ib,lights_fragment_end:Fb,logdepthbuf_fragment:Ub,logdepthbuf_pars_fragment:Ob,logdepthbuf_pars_vertex:kb,logdepthbuf_vertex:zb,map_fragment:Bb,map_pars_fragment:Hb,map_particle_fragment:Vb,map_particle_pars_fragment:Gb,metalnessmap_fragment:Wb,metalnessmap_pars_fragment:jb,morphinstance_vertex:Xb,morphcolor_vertex:qb,morphnormal_vertex:Yb,morphtarget_pars_vertex:$b,morphtarget_vertex:Kb,normal_fragment_begin:Zb,normal_fragment_maps:Qb,normal_pars_fragment:Jb,normal_pars_vertex:eC,normal_vertex:tC,normalmap_pars_fragment:nC,clearcoat_normal_fragment_begin:iC,clearcoat_normal_fragment_maps:rC,clearcoat_pars_fragment:sC,iridescence_pars_fragment:aC,opaque_fragment:oC,packing:lC,premultiplied_alpha_fragment:cC,project_vertex:uC,dithering_fragment:fC,dithering_pars_fragment:dC,roughnessmap_fragment:hC,roughnessmap_pars_fragment:pC,shadowmap_pars_fragment:mC,shadowmap_pars_vertex:gC,shadowmap_vertex:_C,shadowmask_pars_fragment:vC,skinbase_vertex:xC,skinning_pars_vertex:yC,skinning_vertex:SC,skinnormal_vertex:MC,specularmap_fragment:EC,specularmap_pars_fragment:TC,tonemapping_fragment:wC,tonemapping_pars_fragment:bC,transmission_fragment:CC,transmission_pars_fragment:AC,uv_pars_fragment:RC,uv_pars_vertex:PC,uv_vertex:DC,worldpos_vertex:LC,background_vert:NC,background_frag:IC,backgroundCube_vert:FC,backgroundCube_frag:UC,cube_vert:OC,cube_frag:kC,depth_vert:zC,depth_frag:BC,distance_vert:HC,distance_frag:VC,equirect_vert:GC,equirect_frag:WC,linedashed_vert:jC,linedashed_frag:XC,meshbasic_vert:qC,meshbasic_frag:YC,meshlambert_vert:$C,meshlambert_frag:KC,meshmatcap_vert:ZC,meshmatcap_frag:QC,meshnormal_vert:JC,meshnormal_frag:eA,meshphong_vert:tA,meshphong_frag:nA,meshphysical_vert:iA,meshphysical_frag:rA,meshtoon_vert:sA,meshtoon_frag:aA,points_vert:oA,points_frag:lA,shadow_vert:cA,shadow_frag:uA,sprite_vert:fA,sprite_frag:dA},fe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Fi={basic:{uniforms:gn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:gn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:gn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:gn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:gn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new tt(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:gn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:gn([fe.points,fe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:gn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:gn([fe.common,fe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:gn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:gn([fe.sprite,fe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:gn([fe.common,fe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:gn([fe.lights,fe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Fi.physical={uniforms:gn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const bc={r:0,b:0,g:0},_s=new qi,hA=new _t;function pA(n,e,t,i,r,s){const a=new tt(0);let o=r===!0?0:1,l,c,u=null,h=0,d=null;function p(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){const S=m.backgroundBlurriness>0;x=e.get(x,S)}return x}function g(m){let x=!1;const S=p(m);S===null?_(a,o):S&&S.isColor&&(_(S,1),x=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(m,x){const S=p(x);S&&(S.isCubeTexture||S.mapping===$u)?(c===void 0&&(c=new cn(new ni(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Ja(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),_s.copy(x.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hA.makeRotationFromEuler(_s)),c.material.toneMapped=Qe.getTransfer(S.colorSpace)!==st,(u!==S||h!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new cn(new Qa(2,2),new Yi({name:"BackgroundMaterial",uniforms:Ja(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(S.colorSpace)!==st,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,d=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,x){m.getRGB(bc,By(n)),t.buffers.color.setClear(bc.r,bc.g,bc.b,x,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,x=1){a.set(m),o=x,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,_(a,o)},render:g,addToRenderList:v,dispose:f}}function mA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(R,z,O,X,B){let V=!1;const F=h(R,X,O,z);s!==F&&(s=F,c(s.object)),V=p(R,X,O,B),V&&g(R,X,O,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,S(R,z,O,X),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function u(R){return n.deleteVertexArray(R)}function h(R,z,O,X){const B=X.wireframe===!0;let V=i[z.id];V===void 0&&(V={},i[z.id]=V);const F=R.isInstancedMesh===!0?R.id:0;let G=V[F];G===void 0&&(G={},V[F]=G);let Y=G[O.id];Y===void 0&&(Y={},G[O.id]=Y);let J=Y[B];return J===void 0&&(J=d(l()),Y[B]=J),J}function d(R){const z=[],O=[],X=[];for(let B=0;B<t;B++)z[B]=0,O[B]=0,X[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:O,attributeDivisors:X,object:R,attributes:{},index:null}}function p(R,z,O,X){const B=s.attributes,V=z.attributes;let F=0;const G=O.getAttributes();for(const Y in G)if(G[Y].location>=0){const ie=B[Y];let ne=V[Y];if(ne===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor)),ie===void 0||ie.attribute!==ne||ne&&ie.data!==ne.data)return!0;F++}return s.attributesNum!==F||s.index!==X}function g(R,z,O,X){const B={},V=z.attributes;let F=0;const G=O.getAttributes();for(const Y in G)if(G[Y].location>=0){let ie=V[Y];ie===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor));const ne={};ne.attribute=ie,ie&&ie.data&&(ne.data=ie.data),B[Y]=ne,F++}s.attributes=B,s.attributesNum=F,s.index=X}function v(){const R=s.newAttributes;for(let z=0,O=R.length;z<O;z++)R[z]=0}function _(R){f(R,0)}function f(R,z){const O=s.newAttributes,X=s.enabledAttributes,B=s.attributeDivisors;O[R]=1,X[R]===0&&(n.enableVertexAttribArray(R),X[R]=1),B[R]!==z&&(n.vertexAttribDivisor(R,z),B[R]=z)}function m(){const R=s.newAttributes,z=s.enabledAttributes;for(let O=0,X=z.length;O<X;O++)z[O]!==R[O]&&(n.disableVertexAttribArray(O),z[O]=0)}function x(R,z,O,X,B,V,F){F===!0?n.vertexAttribIPointer(R,z,O,B,V):n.vertexAttribPointer(R,z,O,X,B,V)}function S(R,z,O,X){v();const B=X.attributes,V=O.getAttributes(),F=z.defaultAttributeValues;for(const G in V){const Y=V[G];if(Y.location>=0){let J=B[G];if(J===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(J=R.instanceColor)),J!==void 0){const ie=J.normalized,ne=J.itemSize,Le=e.get(J);if(Le===void 0)continue;const Fe=Le.buffer,Be=Le.type,U=Le.bytesPerElement,q=Be===n.INT||Be===n.UNSIGNED_INT||J.gpuType===xm;if(J.isInterleavedBufferAttribute){const ee=J.data,de=ee.stride,_e=J.offset;if(ee.isInstancedInterleavedBuffer){for(let Se=0;Se<Y.locationSize;Se++)f(Y.location+Se,ee.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Se=0;Se<Y.locationSize;Se++)_(Y.location+Se);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let Se=0;Se<Y.locationSize;Se++)x(Y.location+Se,ne/Y.locationSize,Be,ie,de*U,(_e+ne/Y.locationSize*Se)*U,q)}else{if(J.isInstancedBufferAttribute){for(let ee=0;ee<Y.locationSize;ee++)f(Y.location+ee,J.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ee=0;ee<Y.locationSize;ee++)_(Y.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let ee=0;ee<Y.locationSize;ee++)x(Y.location+ee,ne/Y.locationSize,Be,ie,ne*U,ne/Y.locationSize*ee*U,q)}}else if(F!==void 0){const ie=F[G];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(Y.location,ie);break;case 3:n.vertexAttrib3fv(Y.location,ie);break;case 4:n.vertexAttrib4fv(Y.location,ie);break;default:n.vertexAttrib1fv(Y.location,ie)}}}}m()}function w(){E();for(const R in i){const z=i[R];for(const O in z){const X=z[O];for(const B in X){const V=X[B];for(const F in V)u(V[F].object),delete V[F];delete X[B]}}delete i[R]}}function T(R){if(i[R.id]===void 0)return;const z=i[R.id];for(const O in z){const X=z[O];for(const B in X){const V=X[B];for(const F in V)u(V[F].object),delete V[F];delete X[B]}}delete i[R.id]}function b(R){for(const z in i){const O=i[z];for(const X in O){const B=O[X];if(B[R.id]===void 0)continue;const V=B[R.id];for(const F in V)u(V[F].object),delete V[F];delete B[R.id]}}}function y(R){for(const z in i){const O=i[z],X=R.isInstancedMesh===!0?R.id:0,B=O[X];if(B!==void 0){for(const V in B){const F=B[V];for(const G in F)u(F[G].object),delete F[G];delete B[V]}delete O[X],Object.keys(O).length===0&&delete i[z]}}}function E(){L(),a=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:_,disableUnusedAttributes:m}}function gA(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function _A(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==Ti&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const y=b===vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Hn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ki&&!y)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:S,maxSamples:w,samples:T}}function vA(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ir,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,v=h.clipIntersection,_=h.clipShadows,f=n.get(h);if(!r||g===null||g.length===0||s&&!_)s?u(null):c();else{const m=s?0:i,x=m*4;let S=f.clippingState||null;l.value=S,S=u(g,d,x,p);for(let w=0;w!==x;++w)S[w]=t[w];f.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const v=h!==null?h.length:0;let _=null;if(v!==0){if(_=l.value,g!==!0||_===null){const f=p+v*4,m=d.matrixWorldInverse;o.getNormalMatrix(m),(_===null||_.length<f)&&(_=new Float32Array(f));for(let x=0,S=p;x!==v;++x,S+=4)a.copy(h[x]).applyMatrix4(m,o),a.normal.toArray(_,S),_[S+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}const Br=4,t_=[.125,.215,.35,.446,.526,.582],bs=20,xA=256,Co=new Qu,n_=new tt;let cd=null,ud=0,fd=0,dd=!1;const yA=new H;class i_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=yA}=s;cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=s_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cd,ud,fd),this._renderer.xr.enabled=dd,e.scissorTest=!1,fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===$a?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:vr,format:Ti,colorSpace:Za,depthBuffer:!1},r=r_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=r_(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=SA(s)),this._blurMaterial=EA(s,e,t),this._ggxMaterial=MA(s,e,t)}return r}_compileMaterial(e){const t=new cn(new Ai,e);this._renderer.compile(t,Co)}_sceneToCubeUV(e,t,i,r,s){const l=new Ei(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(n_),h.toneMapping=Gi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new cn(new ni,new Rm({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,_=v.material;let f=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,f=!0):(_.color.copy(n_),f=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):S===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const w=this._cubeSize;fa(r,S*w,x>2?w:0,w,w),h.setRenderTarget(r),f&&h.render(v,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ws||e.mapping===$a;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=a_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=s_());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;fa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Co)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,p=h*d,{_lodMax:g}=this,v=this._sizeLods[i],_=3*v*(i>g-Br?i-g+Br:0),f=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,fa(s,_,f,3*v,2*v),r.setRenderTarget(s),r.render(o,Co),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,fa(e,_,f,3*v,2*v),r.setRenderTarget(e),r.render(o,Co)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*bs-1),v=s/g,_=isFinite(s)?1+Math.floor(u*v):bs;_>bs&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${bs}`);const f=[];let m=0;for(let b=0;b<bs;++b){const y=b/v,E=Math.exp(-y*y/2);f.push(E),b===0?m+=E:b<_&&(m+=2*E)}for(let b=0;b<f.length;b++)f[b]=f[b]/m;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const S=this._sizeLods[r],w=3*S*(r>x-Br?r-x+Br:0),T=4*(this._cubeSize-S);fa(t,w,T,3*S,2*S),l.setRenderTarget(t),l.render(h,Co)}}function SA(n){const e=[],t=[],i=[];let r=n;const s=n-Br+1+t_.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Br?l=t_[a-n+Br-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,_=2,f=1,m=new Float32Array(v*g*p),x=new Float32Array(_*g*p),S=new Float32Array(f*g*p);for(let T=0;T<p;T++){const b=T%3*2/3-1,y=T>2?0:-1,E=[b,y,0,b+2/3,y,0,b+2/3,y+1,0,b,y,0,b+2/3,y+1,0,b,y+1,0];m.set(E,v*g*T),x.set(d,_*g*T);const L=[T,T,T,T,T,T];S.set(L,f*g*T)}const w=new Ai;w.setAttribute("position",new ji(m,v)),w.setAttribute("uv",new ji(x,_)),w.setAttribute("faceIndex",new ji(S,f)),i.push(new cn(w,null)),r>Br&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function r_(n,e,t){const i=new Wi(n,e,t);return i.texture.mapping=$u,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function MA(n,e,t){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function EA(n,e,t){const i=new Float32Array(bs),r=new H(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function s_(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function a_(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Ju(){return`

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
	`}class Wy extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ky(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ni(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:Ja(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:dr});s.uniforms.tEquirect.value=t;const a=new cn(r,s),o=t.minFilter;return t.minFilter===Ps&&(t.minFilter=dn),new Aw(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function TA(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===If||p===Ff)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new Wy(g.height);return v.fromEquirectangularTexture(n,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const p=d.mapping,g=p===If||p===Ff,v=p===Ws||p===$a;if(g||v){let _=t.get(d);const f=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new i_(n)),_=g?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const m=d.image;return g&&m&&m.height>0||v&&m&&l(m)?(i===null&&(i=new i_(n)),_=g?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function o(d,p){return p===If?d.mapping=Ws:p===Ff&&(d.mapping=$a),d}function l(d){let p=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&p++;return p===g}function c(d){const p=d.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function wA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Eu("WebGLRenderer: "+i+" extension not supported."),r}}}function bA(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,g=h.attributes.position;let v=0;if(g===void 0)return;if(p!==null){const m=p.array;v=p.version;for(let x=0,S=m.length;x<S;x+=3){const w=m[x+0],T=m[x+1],b=m[x+2];d.push(w,T,T,b,b,w)}}else{const m=g.array;v=g.version;for(let x=0,S=m.length/3-1;x<S;x+=3){const w=x+0,T=x+1,b=x+2;d.push(w,T,T,b,b,w)}}const _=new(g.count>=65535?Oy:Uy)(d,1);_.version=v;const f=s.get(h);f&&e.remove(f),s.set(h,_)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function CA(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*a),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*a,g),t.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let _=0;for(let f=0;f<g;f++)_+=p[f];t.update(_,i,1)}function h(d,p,g,v){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],v[f]);else{_.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,g);let f=0;for(let m=0;m<g;m++)f+=p[m]*v[m];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function AA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function RA(n,e,t){const i=new WeakMap,r=new Dt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let L=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var p=L;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),_===!0&&(S=3);let w=o.attributes.position.count*S,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*T*4*h),y=new Iy(b,w,T,h);y.type=ki,y.needsUpdate=!0;const E=S*4;for(let R=0;R<h;R++){const z=f[R],O=m[R],X=x[R],B=w*T*4*R;for(let V=0;V<z.count;V++){const F=V*E;g===!0&&(r.fromBufferAttribute(z,V),b[B+F+0]=r.x,b[B+F+1]=r.y,b[B+F+2]=r.z,b[B+F+3]=0),v===!0&&(r.fromBufferAttribute(O,V),b[B+F+4]=r.x,b[B+F+5]=r.y,b[B+F+6]=r.z,b[B+F+7]=0),_===!0&&(r.fromBufferAttribute(X,V),b[B+F+8]=r.x,b[B+F+9]=r.y,b[B+F+10]=r.z,b[B+F+11]=X.itemSize===4?r.w:1)}}d={count:h,texture:y,size:new Oe(w,T)},i.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let _=0;_<c.length;_++)g+=c[_];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function PA(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const DA={[_y]:"LINEAR_TONE_MAPPING",[vy]:"REINHARD_TONE_MAPPING",[xy]:"CINEON_TONE_MAPPING",[yy]:"ACES_FILMIC_TONE_MAPPING",[My]:"AGX_TONE_MAPPING",[Ey]:"NEUTRAL_TONE_MAPPING",[Sy]:"CUSTOM_TONE_MAPPING"};function LA(n,e,t,i,r){const s=new Wi(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Wi(e,t,{type:vr,depthBuffer:!1,stencilBuffer:!1}),o=new Ai;o.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ui([0,2,0,0,2,0],2));const l=new Sw({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new cn(o,l),u=new Qu(-1,1,1,-1,0,1);let h=null,d=null,p=!1,g,v=null,_=[],f=!1;this.setSize=function(m,x){s.setSize(m,x),a.setSize(m,x);for(let S=0;S<_.length;S++){const w=_[S];w.setSize&&w.setSize(m,x)}},this.setEffects=function(m){_=m,f=_.length>0&&_[0].isRenderPass===!0;const x=s.width,S=s.height;for(let w=0;w<_.length;w++){const T=_[w];T.setSize&&T.setSize(x,S)}},this.begin=function(m,x){if(p||m.toneMapping===Gi&&_.length===0)return!1;if(v=x,x!==null){const S=x.width,w=x.height;(s.width!==S||s.height!==w)&&this.setSize(S,w)}return f===!1&&m.setRenderTarget(s),g=m.toneMapping,m.toneMapping=Gi,!0},this.hasRenderPass=function(){return f},this.end=function(m,x){m.toneMapping=g,p=!0;let S=s,w=a;for(let T=0;T<_.length;T++){const b=_[T];if(b.enabled!==!1&&(b.render(m,w,S,x),b.needsSwap!==!1)){const y=S;S=w,w=y}}if(h!==m.outputColorSpace||d!==m.toneMapping){h=m.outputColorSpace,d=m.toneMapping,l.defines={},Qe.getTransfer(h)===st&&(l.defines.SRGB_TRANSFER="");const T=DA[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,m.setRenderTarget(v),m.render(c,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const jy=new hn,lp=new xl(1,1),Xy=new Iy,qy=new ZT,Yy=new ky,o_=[],l_=[],c_=new Float32Array(16),u_=new Float32Array(9),f_=new Float32Array(4);function fo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=o_[r];if(s===void 0&&(s=new Float32Array(r),o_[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ef(n,e){let t=l_[e];t===void 0&&(t=new Int32Array(e),l_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function NA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function IA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function FA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function UA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function OA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;f_.set(i),n.uniformMatrix2fv(this.addr,!1,f_),Gt(t,i)}}function kA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;u_.set(i),n.uniformMatrix3fv(this.addr,!1,u_),Gt(t,i)}}function zA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;c_.set(i),n.uniformMatrix4fv(this.addr,!1,c_),Gt(t,i)}}function BA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function HA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function VA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function GA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function WA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function XA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function qA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function YA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(lp.compareFunction=t.isReversedDepthBuffer()?bm:wm,s=lp):s=jy,t.setTexture2D(e||s,r)}function $A(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||qy,r)}function KA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Yy,r)}function ZA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Xy,r)}function QA(n){switch(n){case 5126:return NA;case 35664:return IA;case 35665:return FA;case 35666:return UA;case 35674:return OA;case 35675:return kA;case 35676:return zA;case 5124:case 35670:return BA;case 35667:case 35671:return HA;case 35668:case 35672:return VA;case 35669:case 35673:return GA;case 5125:return WA;case 36294:return jA;case 36295:return XA;case 36296:return qA;case 35678:case 36198:case 36298:case 36306:case 35682:return YA;case 35679:case 36299:case 36307:return $A;case 35680:case 36300:case 36308:case 36293:return KA;case 36289:case 36303:case 36311:case 36292:return ZA}}function JA(n,e){n.uniform1fv(this.addr,e)}function e2(n,e){const t=fo(e,this.size,2);n.uniform2fv(this.addr,t)}function t2(n,e){const t=fo(e,this.size,3);n.uniform3fv(this.addr,t)}function n2(n,e){const t=fo(e,this.size,4);n.uniform4fv(this.addr,t)}function i2(n,e){const t=fo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function r2(n,e){const t=fo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function s2(n,e){const t=fo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function a2(n,e){n.uniform1iv(this.addr,e)}function o2(n,e){n.uniform2iv(this.addr,e)}function l2(n,e){n.uniform3iv(this.addr,e)}function c2(n,e){n.uniform4iv(this.addr,e)}function u2(n,e){n.uniform1uiv(this.addr,e)}function f2(n,e){n.uniform2uiv(this.addr,e)}function d2(n,e){n.uniform3uiv(this.addr,e)}function h2(n,e){n.uniform4uiv(this.addr,e)}function p2(n,e,t){const i=this.cache,r=e.length,s=ef(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=lp:a=jy;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function m2(n,e,t){const i=this.cache,r=e.length,s=ef(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||qy,s[a])}function g2(n,e,t){const i=this.cache,r=e.length,s=ef(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Yy,s[a])}function _2(n,e,t){const i=this.cache,r=e.length,s=ef(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Xy,s[a])}function v2(n){switch(n){case 5126:return JA;case 35664:return e2;case 35665:return t2;case 35666:return n2;case 35674:return i2;case 35675:return r2;case 35676:return s2;case 5124:case 35670:return a2;case 35667:case 35671:return o2;case 35668:case 35672:return l2;case 35669:case 35673:return c2;case 5125:return u2;case 36294:return f2;case 36295:return d2;case 36296:return h2;case 35678:case 36198:case 36298:case 36306:case 35682:return p2;case 35679:case 36299:case 36307:return m2;case 35680:case 36300:case 36308:case 36293:return g2;case 36289:case 36303:case 36311:case 36292:return _2}}class x2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=QA(t.type)}}class y2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v2(t.type)}}class S2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const hd=/(\w+)(\])?(\[|\.)?/g;function d_(n,e){n.seq.push(e),n.map[e.id]=e}function M2(n,e,t){const i=n.name,r=i.length;for(hd.lastIndex=0;;){const s=hd.exec(i),a=hd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){d_(t,c===void 0?new x2(o,n,e):new y2(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new S2(o),d_(t,h)),t=h}}}class qc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);M2(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function h_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const E2=37297;let T2=0;function w2(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const p_=new ze;function b2(n){Qe._getMatrix(p_,Qe.workingColorSpace,n);const e=`mat3( ${p_.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case Su:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function m_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+w2(n.getShaderSource(e),o)}else return s}function C2(n,e){const t=b2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const A2={[_y]:"Linear",[vy]:"Reinhard",[xy]:"Cineon",[yy]:"ACESFilmic",[My]:"AgX",[Ey]:"Neutral",[Sy]:"Custom"};function R2(n,e){const t=A2[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cc=new H;function P2(){Qe.getLuminanceCoefficients(Cc);const n=Cc.x.toFixed(4),e=Cc.y.toFixed(4),t=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function L2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function N2(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Uo(n){return n!==""}function g_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function __(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I2=/^[ \t]*#include +<([\w\d./]+)>/gm;function cp(n){return n.replace(I2,U2)}const F2=new Map;function U2(n,e){let t=He[e];if(t===void 0){const i=F2.get(e);if(i!==void 0)t=He[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cp(t)}const O2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v_(n){return n.replace(O2,k2)}function k2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function x_(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const z2={[Vc]:"SHADOWMAP_TYPE_PCF",[Fo]:"SHADOWMAP_TYPE_VSM"};function B2(n){return z2[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const H2={[Ws]:"ENVMAP_TYPE_CUBE",[$a]:"ENVMAP_TYPE_CUBE",[$u]:"ENVMAP_TYPE_CUBE_UV"};function V2(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":H2[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const G2={[$a]:"ENVMAP_MODE_REFRACTION"};function W2(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":G2[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const j2={[gy]:"ENVMAP_BLENDING_MULTIPLY",[RT]:"ENVMAP_BLENDING_MIX",[PT]:"ENVMAP_BLENDING_ADD"};function X2(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":j2[n.combine]||"ENVMAP_BLENDING_NONE"}function q2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Y2(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=B2(t),c=V2(t),u=W2(t),h=X2(t),d=q2(t),p=D2(t),g=L2(s),v=r.createProgram();let _,f,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Uo).join(`
`),_.length>0&&(_+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Uo).join(`
`),f.length>0&&(f+=`
`)):(_=[x_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),f=[x_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?He.tonemapping_pars_fragment:"",t.toneMapping!==Gi?R2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,C2("linearToOutputTexel",t.outputColorSpace),P2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Uo).join(`
`)),a=cp(a),a=g_(a,t),a=__(a,t),o=cp(o),o=g_(o,t),o=__(o,t),a=v_(a),o=v_(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",t.glslVersion===E0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===E0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=m+_+a,S=m+f+o,w=h_(r,r.VERTEX_SHADER,x),T=h_(r,r.FRAGMENT_SHADER,S);r.attachShader(v,w),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function b(R){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(v)||"",O=r.getShaderInfoLog(w)||"",X=r.getShaderInfoLog(T)||"",B=z.trim(),V=O.trim(),F=X.trim();let G=!0,Y=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,w,T);else{const J=m_(r,w,"vertex"),ie=m_(r,T,"fragment");Ze("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+J+`
`+ie)}else B!==""?Ie("WebGLProgram: Program Info Log:",B):(V===""||F==="")&&(Y=!1);Y&&(R.diagnostics={runnable:G,programLog:B,vertexShader:{log:V,prefix:_},fragmentShader:{log:F,prefix:f}})}r.deleteShader(w),r.deleteShader(T),y=new qc(r,v),E=N2(r,v)}let y;this.getUniforms=function(){return y===void 0&&b(this),y};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(v,E2)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=T2++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=T,this}let $2=0;class K2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Z2(e),t.set(e,i)),i}}class Z2{constructor(e){this.id=$2++,this.code=e,this.usedTimes=0}}function Q2(n,e,t,i,r,s){const a=new Am,o=new K2,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,E,L,R,z){const O=R.fog,X=z.geometry,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,F=e.get(y.envMap||B,V),G=F&&F.mapping===$u?F.image.height:null,Y=p[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&Ie("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const J=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ie=J!==void 0?J.length:0;let ne=0;X.morphAttributes.position!==void 0&&(ne=1),X.morphAttributes.normal!==void 0&&(ne=2),X.morphAttributes.color!==void 0&&(ne=3);let Le,Fe,Be,U;if(Y){const rt=Fi[Y];Le=rt.vertexShader,Fe=rt.fragmentShader}else Le=y.vertexShader,Fe=y.fragmentShader,o.update(y),Be=o.getVertexShaderID(y),U=o.getFragmentShaderID(y);const q=n.getRenderTarget(),ee=n.state.buffers.depth.getReversed(),de=z.isInstancedMesh===!0,_e=z.isBatchedMesh===!0,Se=!!y.map,it=!!y.matcap,We=!!F,$e=!!y.aoMap,Ke=!!y.lightMap,me=!!y.bumpMap,ft=!!y.normalMap,D=!!y.displacementMap,vt=!!y.emissiveMap,qe=!!y.metalnessMap,ot=!!y.roughnessMap,Me=y.anisotropy>0,A=y.clearcoat>0,M=y.dispersion>0,N=y.iridescence>0,Q=y.sheen>0,te=y.transmission>0,Z=Me&&!!y.anisotropyMap,Ee=A&&!!y.clearcoatMap,ce=A&&!!y.clearcoatNormalMap,De=A&&!!y.clearcoatRoughnessMap,Ne=N&&!!y.iridescenceMap,se=N&&!!y.iridescenceThicknessMap,oe=Q&&!!y.sheenColorMap,Te=Q&&!!y.sheenRoughnessMap,be=!!y.specularMap,ge=!!y.specularColorMap,Ve=!!y.specularIntensityMap,I=te&&!!y.transmissionMap,ue=te&&!!y.thicknessMap,le=!!y.gradientMap,ye=!!y.alphaMap,ae=y.alphaTest>0,K=!!y.alphaHash,we=!!y.extensions;let Ue=Gi;y.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const mt={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:Le,fragmentShader:Fe,defines:y.defines,customVertexShaderID:Be,customFragmentShaderID:U,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:_e,batchingColor:_e&&z._colorsTexture!==null,instancing:de,instancingColor:de&&z.instanceColor!==null,instancingMorph:de&&z.morphTexture!==null,outputColorSpace:q===null?n.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Za,alphaToCoverage:!!y.alphaToCoverage,map:Se,matcap:it,envMap:We,envMapMode:We&&F.mapping,envMapCubeUVHeight:G,aoMap:$e,lightMap:Ke,bumpMap:me,normalMap:ft,displacementMap:D,emissiveMap:vt,normalMapObjectSpace:ft&&y.normalMapType===NT,normalMapTangentSpace:ft&&y.normalMapType===Ly,metalnessMap:qe,roughnessMap:ot,anisotropy:Me,anisotropyMap:Z,clearcoat:A,clearcoatMap:Ee,clearcoatNormalMap:ce,clearcoatRoughnessMap:De,dispersion:M,iridescence:N,iridescenceMap:Ne,iridescenceThicknessMap:se,sheen:Q,sheenColorMap:oe,sheenRoughnessMap:Te,specularMap:be,specularColorMap:ge,specularIntensityMap:Ve,transmission:te,transmissionMap:I,thicknessMap:ue,gradientMap:le,opaque:y.transparent===!1&&y.blending===Ua&&y.alphaToCoverage===!1,alphaMap:ye,alphaTest:ae,alphaHash:K,combine:y.combine,mapUv:Se&&g(y.map.channel),aoMapUv:$e&&g(y.aoMap.channel),lightMapUv:Ke&&g(y.lightMap.channel),bumpMapUv:me&&g(y.bumpMap.channel),normalMapUv:ft&&g(y.normalMap.channel),displacementMapUv:D&&g(y.displacementMap.channel),emissiveMapUv:vt&&g(y.emissiveMap.channel),metalnessMapUv:qe&&g(y.metalnessMap.channel),roughnessMapUv:ot&&g(y.roughnessMap.channel),anisotropyMapUv:Z&&g(y.anisotropyMap.channel),clearcoatMapUv:Ee&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:se&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(y.sheenRoughnessMap.channel),specularMapUv:be&&g(y.specularMap.channel),specularColorMapUv:ge&&g(y.specularColorMap.channel),specularIntensityMapUv:Ve&&g(y.specularIntensityMap.channel),transmissionMapUv:I&&g(y.transmissionMap.channel),thicknessMapUv:ue&&g(y.thicknessMap.channel),alphaMapUv:ye&&g(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ft||Me),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(Se||ye),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||X.attributes.normal===void 0&&ft===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ee,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ne,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Se&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===st,decodeVideoTextureEmissive:vt&&y.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(y.emissiveMap.colorSpace)===st,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===or,flipSided:y.side===Pn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:we&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&y.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function _(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)E.push(L),E.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(f(E,y),m(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function f(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function m(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const E=p[y.type];let L;if(E){const R=Fi[E];L=vw.clone(R.uniforms)}else L=y.uniforms;return L}function S(y,E){let L=u.get(E);return L!==void 0?++L.usedTimes:(L=new Y2(n,E,y,r),c.push(L),u.set(E,L)),L}function w(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function b(){o.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:x,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:b}}function J2(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function eR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function y_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function S_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,g,v,_,f){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:p,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:_,group:f},n[e]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=g,m.materialVariant=a(d),m.groupOrder=v,m.renderOrder=d.renderOrder,m.z=_,m.group=f),e++,m}function l(d,p,g,v,_,f){const m=o(d,p,g,v,_,f);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):t.push(m)}function c(d,p,g,v,_,f){const m=o(d,p,g,v,_,f);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function u(d,p){t.length>1&&t.sort(d||eR),i.length>1&&i.sort(p||y_),r.length>1&&r.sort(p||y_)}function h(){for(let d=e,p=n.length;d<p;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function tR(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new S_,n.set(i,[a])):r>=s.length?(a=new S_,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function nR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new tt};break;case"SpotLight":t={position:new H,direction:new H,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function iR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rR=0;function sR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function aR(n){const e=new nR,t=iR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new _t,a=new _t;function o(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,v=0,_=0,f=0,m=0,x=0,S=0,w=0,T=0,b=0;c.sort(sR);for(let E=0,L=c.length;E<L;E++){const R=c[E],z=R.color,O=R.intensity,X=R.distance;let B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ka?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=z.r*O,h+=z.g*O,d+=z.b*O;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],O);b++}else if(R.isDirectionalLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const F=R.shadow,G=t.get(R);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize=F.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=R.shadow.matrix,m++}i.directional[p]=V,p++}else if(R.isSpotLight){const V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(z).multiplyScalar(O),V.distance=X,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[v]=V;const F=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,F.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[v]=F.matrix,R.castShadow){const G=t.get(R);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize=F.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=B,S++}v++}else if(R.isRectAreaLight){const V=e.get(R);V.color.copy(z).multiplyScalar(O),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),i.rectArea[_]=V,_++}else if(R.isPointLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const F=R.shadow,G=t.get(R);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize=F.mapSize,G.shadowCameraNear=F.camera.near,G.shadowCameraFar=F.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=R.shadow.matrix,x++}i.point[g]=V,g++}else if(R.isHemisphereLight){const V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(O),V.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[f]=V,f++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const y=i.hash;(y.directionalLength!==p||y.pointLength!==g||y.spotLength!==v||y.rectAreaLength!==_||y.hemiLength!==f||y.numDirectionalShadows!==m||y.numPointShadows!==x||y.numSpotShadows!==S||y.numSpotMaps!==w||y.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=_,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=b,y.directionalLength=p,y.pointLength=g,y.spotLength=v,y.rectAreaLength=_,y.hemiLength=f,y.numDirectionalShadows=m,y.numPointShadows=x,y.numSpotShadows=S,y.numSpotMaps=w,y.numLightProbes=b,i.version=rR++)}function l(c,u){let h=0,d=0,p=0,g=0,v=0;const _=u.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const x=c[f];if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),h++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),p++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),a.identity(),s.copy(x.matrixWorld),s.premultiply(_),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),d++}else if(x.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(_),v++}}}return{setup:o,setupView:l,state:i}}function M_(n){const e=new aR(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function oR(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new M_(n),e.set(r,[o])):s>=a.length?(o=new M_(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const lR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cR=`uniform sampler2D shadow_pass;
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
}`,uR=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],fR=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],E_=new _t,Ao=new H,pd=new H;function dR(n,e,t){let i=new Pm;const r=new Oe,s=new Oe,a=new Dt,o=new Mw,l=new Ew,c={},u=t.maxTextureSize,h={[ns]:Pn,[Pn]:ns,[or]:or},d=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:lR,fragmentShader:cR}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ai;g.setAttribute("position",new ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new cn(g,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let f=this.type;this.render=function(T,b,y){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;this.type===uT&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Vc);const E=n.getRenderTarget(),L=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),z=n.state;z.setBlending(dr),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=f!==this.type;O&&b.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(B=>B.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,B=T.length;X<B;X++){const V=T[X],F=V.shadow;if(F===void 0){Ie("WebGLShadowMap:",V,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const G=F.getFrameExtents();r.multiply(G),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/G.x),r.x=s.x*G.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/G.y),r.y=s.y*G.y,F.mapSize.y=s.y));const Y=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Y,F.map===null||O===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Fo){if(V.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Wi(r.x,r.y,{format:Ka,type:vr,minFilter:dn,magFilter:dn,generateMipmaps:!1}),F.map.texture.name=V.name+".shadowMap",F.map.depthTexture=new xl(r.x,r.y,ki),F.map.depthTexture.name=V.name+".shadowMapDepth",F.map.depthTexture.format=xr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Jt,F.map.depthTexture.magFilter=Jt}else V.isPointLight?(F.map=new Wy(r.x),F.map.depthTexture=new gw(r.x,Xi)):(F.map=new Wi(r.x,r.y),F.map.depthTexture=new xl(r.x,r.y,Xi)),F.map.depthTexture.name=V.name+".shadowMap",F.map.depthTexture.format=xr,this.type===Vc?(F.map.depthTexture.compareFunction=Y?bm:wm,F.map.depthTexture.minFilter=dn,F.map.depthTexture.magFilter=dn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Jt,F.map.depthTexture.magFilter=Jt);F.camera.updateProjectionMatrix()}const J=F.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<J;ie++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,ie),n.clear();else{ie===0&&(n.setRenderTarget(F.map),n.clear());const ne=F.getViewport(ie);a.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),z.viewport(a)}if(V.isPointLight){const ne=F.camera,Le=F.matrix,Fe=V.distance||ne.far;Fe!==ne.far&&(ne.far=Fe,ne.updateProjectionMatrix()),Ao.setFromMatrixPosition(V.matrixWorld),ne.position.copy(Ao),pd.copy(ne.position),pd.add(uR[ie]),ne.up.copy(fR[ie]),ne.lookAt(pd),ne.updateMatrixWorld(),Le.makeTranslation(-Ao.x,-Ao.y,-Ao.z),E_.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),F._frustum.setFromProjectionMatrix(E_,ne.coordinateSystem,ne.reversedDepth)}else F.updateMatrices(V);i=F.getFrustum(),S(b,y,F.camera,V,this.type)}F.isPointLightShadow!==!0&&this.type===Fo&&m(F,y),F.needsUpdate=!1}f=this.type,_.needsUpdate=!1,n.setRenderTarget(E,L,R)};function m(T,b){const y=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wi(r.x,r.y,{format:Ka,type:vr})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(b,null,y,d,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(b,null,y,p,v,null)}function x(T,b,y,E){let L=null;const R=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)L=R;else if(L=y.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const z=L.uuid,O=b.uuid;let X=c[z];X===void 0&&(X={},c[z]=X);let B=X[O];B===void 0&&(B=L.clone(),X[O]=B,b.addEventListener("dispose",w)),L=B}if(L.visible=b.visible,L.wireframe=b.wireframe,E===Fo?L.side=b.shadowSide!==null?b.shadowSide:b.side:L.side=b.shadowSide!==null?b.shadowSide:h[b.side],L.alphaMap=b.alphaMap,L.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,L.map=b.map,L.clipShadows=b.clipShadows,L.clippingPlanes=b.clippingPlanes,L.clipIntersection=b.clipIntersection,L.displacementMap=b.displacementMap,L.displacementScale=b.displacementScale,L.displacementBias=b.displacementBias,L.wireframeLinewidth=b.wireframeLinewidth,L.linewidth=b.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const z=n.properties.get(L);z.light=y}return L}function S(T,b,y,E,L){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===Fo)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const O=e.update(T),X=T.material;if(Array.isArray(X)){const B=O.groups;for(let V=0,F=B.length;V<F;V++){const G=B[V],Y=X[G.materialIndex];if(Y&&Y.visible){const J=x(T,Y,E,L);T.onBeforeShadow(n,T,b,y,O,J,G),n.renderBufferDirect(y,null,O,J,T,G),T.onAfterShadow(n,T,b,y,O,J,G)}}}else if(X.visible){const B=x(T,X,E,L);T.onBeforeShadow(n,T,b,y,O,B,null),n.renderBufferDirect(y,null,O,B,T,null),T.onAfterShadow(n,T,b,y,O,B,null)}}const z=T.children;for(let O=0,X=z.length;O<X;O++)S(z[O],b,y,E,L)}function w(T){T.target.removeEventListener("dispose",w);for(const y in c){const E=c[y],L=T.target.uuid;L in E&&(E[L].dispose(),delete E[L])}}}function hR(n,e){function t(){let I=!1;const ue=new Dt;let le=null;const ye=new Dt(0,0,0,0);return{setMask:function(ae){le!==ae&&!I&&(n.colorMask(ae,ae,ae,ae),le=ae)},setLocked:function(ae){I=ae},setClear:function(ae,K,we,Ue,mt){mt===!0&&(ae*=Ue,K*=Ue,we*=Ue),ue.set(ae,K,we,Ue),ye.equals(ue)===!1&&(n.clearColor(ae,K,we,Ue),ye.copy(ue))},reset:function(){I=!1,le=null,ye.set(-1,0,0,0)}}}function i(){let I=!1,ue=!1,le=null,ye=null,ae=null;return{setReversed:function(K){if(ue!==K){const we=e.get("EXT_clip_control");K?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),ue=K;const Ue=ae;ae=null,this.setClear(Ue)}},getReversed:function(){return ue},setTest:function(K){K?q(n.DEPTH_TEST):ee(n.DEPTH_TEST)},setMask:function(K){le!==K&&!I&&(n.depthMask(K),le=K)},setFunc:function(K){if(ue&&(K=GT[K]),ye!==K){switch(K){case vh:n.depthFunc(n.NEVER);break;case xh:n.depthFunc(n.ALWAYS);break;case yh:n.depthFunc(n.LESS);break;case Ya:n.depthFunc(n.LEQUAL);break;case Sh:n.depthFunc(n.EQUAL);break;case Mh:n.depthFunc(n.GEQUAL);break;case Eh:n.depthFunc(n.GREATER);break;case Th:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=K}},setLocked:function(K){I=K},setClear:function(K){ae!==K&&(ae=K,ue&&(K=1-K),n.clearDepth(K))},reset:function(){I=!1,le=null,ye=null,ae=null,ue=!1}}}function r(){let I=!1,ue=null,le=null,ye=null,ae=null,K=null,we=null,Ue=null,mt=null;return{setTest:function(rt){I||(rt?q(n.STENCIL_TEST):ee(n.STENCIL_TEST))},setMask:function(rt){ue!==rt&&!I&&(n.stencilMask(rt),ue=rt)},setFunc:function(rt,Ki,Zi){(le!==rt||ye!==Ki||ae!==Zi)&&(n.stencilFunc(rt,Ki,Zi),le=rt,ye=Ki,ae=Zi)},setOp:function(rt,Ki,Zi){(K!==rt||we!==Ki||Ue!==Zi)&&(n.stencilOp(rt,Ki,Zi),K=rt,we=Ki,Ue=Zi)},setLocked:function(rt){I=rt},setClear:function(rt){mt!==rt&&(n.clearStencil(rt),mt=rt)},reset:function(){I=!1,ue=null,le=null,ye=null,ae=null,K=null,we=null,Ue=null,mt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,v=!1,_=null,f=null,m=null,x=null,S=null,w=null,T=null,b=new tt(0,0,0),y=0,E=!1,L=null,R=null,z=null,O=null,X=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,F=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=F>=1):G.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=F>=2);let Y=null,J={};const ie=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),Le=new Dt().fromArray(ie),Fe=new Dt().fromArray(ne);function Be(I,ue,le,ye){const ae=new Uint8Array(4),K=n.createTexture();n.bindTexture(I,K),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<le;we++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(ue+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return K}const U={};U[n.TEXTURE_2D]=Be(n.TEXTURE_2D,n.TEXTURE_2D,1),U[n.TEXTURE_CUBE_MAP]=Be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[n.TEXTURE_2D_ARRAY]=Be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),U[n.TEXTURE_3D]=Be(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),q(n.DEPTH_TEST),a.setFunc(Ya),me(!1),ft(_0),q(n.CULL_FACE),$e(dr);function q(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function ee(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function de(I,ue){return h[I]!==ue?(n.bindFramebuffer(I,ue),h[I]=ue,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ue),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function _e(I,ue){let le=p,ye=!1;if(I){le=d.get(ue),le===void 0&&(le=[],d.set(ue,le));const ae=I.textures;if(le.length!==ae.length||le[0]!==n.COLOR_ATTACHMENT0){for(let K=0,we=ae.length;K<we;K++)le[K]=n.COLOR_ATTACHMENT0+K;le.length=ae.length,ye=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,ye=!0);ye&&n.drawBuffers(le)}function Se(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const it={[ws]:n.FUNC_ADD,[dT]:n.FUNC_SUBTRACT,[hT]:n.FUNC_REVERSE_SUBTRACT};it[pT]=n.MIN,it[mT]=n.MAX;const We={[gT]:n.ZERO,[_T]:n.ONE,[vT]:n.SRC_COLOR,[gh]:n.SRC_ALPHA,[TT]:n.SRC_ALPHA_SATURATE,[MT]:n.DST_COLOR,[yT]:n.DST_ALPHA,[xT]:n.ONE_MINUS_SRC_COLOR,[_h]:n.ONE_MINUS_SRC_ALPHA,[ET]:n.ONE_MINUS_DST_COLOR,[ST]:n.ONE_MINUS_DST_ALPHA,[wT]:n.CONSTANT_COLOR,[bT]:n.ONE_MINUS_CONSTANT_COLOR,[CT]:n.CONSTANT_ALPHA,[AT]:n.ONE_MINUS_CONSTANT_ALPHA};function $e(I,ue,le,ye,ae,K,we,Ue,mt,rt){if(I===dr){v===!0&&(ee(n.BLEND),v=!1);return}if(v===!1&&(q(n.BLEND),v=!0),I!==fT){if(I!==_||rt!==E){if((f!==ws||S!==ws)&&(n.blendEquation(n.FUNC_ADD),f=ws,S=ws),rt)switch(I){case Ua:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case v0:n.blendFunc(n.ONE,n.ONE);break;case x0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case y0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ze("WebGLState: Invalid blending: ",I);break}else switch(I){case Ua:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case v0:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case x0:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case y0:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",I);break}m=null,x=null,w=null,T=null,b.set(0,0,0),y=0,_=I,E=rt}return}ae=ae||ue,K=K||le,we=we||ye,(ue!==f||ae!==S)&&(n.blendEquationSeparate(it[ue],it[ae]),f=ue,S=ae),(le!==m||ye!==x||K!==w||we!==T)&&(n.blendFuncSeparate(We[le],We[ye],We[K],We[we]),m=le,x=ye,w=K,T=we),(Ue.equals(b)===!1||mt!==y)&&(n.blendColor(Ue.r,Ue.g,Ue.b,mt),b.copy(Ue),y=mt),_=I,E=!1}function Ke(I,ue){I.side===or?ee(n.CULL_FACE):q(n.CULL_FACE);let le=I.side===Pn;ue&&(le=!le),me(le),I.blending===Ua&&I.transparent===!1?$e(dr):$e(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const ye=I.stencilWrite;o.setTest(ye),ye&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),vt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?q(n.SAMPLE_ALPHA_TO_COVERAGE):ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function me(I){L!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),L=I)}function ft(I){I!==lT?(q(n.CULL_FACE),I!==R&&(I===_0?n.cullFace(n.BACK):I===cT?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ee(n.CULL_FACE),R=I}function D(I){I!==z&&(V&&n.lineWidth(I),z=I)}function vt(I,ue,le){I?(q(n.POLYGON_OFFSET_FILL),(O!==ue||X!==le)&&(O=ue,X=le,a.getReversed()&&(ue=-ue),n.polygonOffset(ue,le))):ee(n.POLYGON_OFFSET_FILL)}function qe(I){I?q(n.SCISSOR_TEST):ee(n.SCISSOR_TEST)}function ot(I){I===void 0&&(I=n.TEXTURE0+B-1),Y!==I&&(n.activeTexture(I),Y=I)}function Me(I,ue,le){le===void 0&&(Y===null?le=n.TEXTURE0+B-1:le=Y);let ye=J[le];ye===void 0&&(ye={type:void 0,texture:void 0},J[le]=ye),(ye.type!==I||ye.texture!==ue)&&(Y!==le&&(n.activeTexture(le),Y=le),n.bindTexture(I,ue||U[I]),ye.type=I,ye.texture=ue)}function A(){const I=J[Y];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function Q(){try{n.texSubImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function te(){try{n.texSubImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function Ee(){try{n.compressedTexSubImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function ce(){try{n.texStorage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function De(){try{n.texStorage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function Ne(){try{n.texImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function se(){try{n.texImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function oe(I){Le.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Le.copy(I))}function Te(I){Fe.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Fe.copy(I))}function be(I,ue){let le=c.get(ue);le===void 0&&(le=new WeakMap,c.set(ue,le));let ye=le.get(I);ye===void 0&&(ye=n.getUniformBlockIndex(ue,I.name),le.set(I,ye))}function ge(I,ue){const ye=c.get(ue).get(I);l.get(ue)!==ye&&(n.uniformBlockBinding(ue,ye,I.__bindingPointIndex),l.set(ue,ye))}function Ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Y=null,J={},h={},d=new WeakMap,p=[],g=null,v=!1,_=null,f=null,m=null,x=null,S=null,w=null,T=null,b=new tt(0,0,0),y=0,E=!1,L=null,R=null,z=null,O=null,X=null,Le.set(0,0,n.canvas.width,n.canvas.height),Fe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:q,disable:ee,bindFramebuffer:de,drawBuffers:_e,useProgram:Se,setBlending:$e,setMaterial:Ke,setFlipSided:me,setCullFace:ft,setLineWidth:D,setPolygonOffset:vt,setScissorTest:qe,activeTexture:ot,bindTexture:Me,unbindTexture:A,compressedTexImage2D:M,compressedTexImage3D:N,texImage2D:Ne,texImage3D:se,updateUBOMapping:be,uniformBlockBinding:ge,texStorage2D:ce,texStorage3D:De,texSubImage2D:Q,texSubImage3D:te,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ee,scissor:oe,viewport:Te,reset:Ve}}function pR(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return p?new OffscreenCanvas(A,M):Mu("canvas")}function v(A,M,N){let Q=1;const te=Me(A);if((te.width>N||te.height>N)&&(Q=N/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(Q*te.width),Ee=Math.floor(Q*te.height);h===void 0&&(h=g(Z,Ee));const ce=M?g(Z,Ee):h;return ce.width=Z,ce.height=Ee,ce.getContext("2d").drawImage(A,0,0,Z,Ee),Ie("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+Ee+")."),ce}else return"data"in A&&Ie("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function _(A){return A.generateMipmaps}function f(A){n.generateMipmap(A)}function m(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(A,M,N,Q,te=!1){if(A!==null){if(n[A]!==void 0)return n[A];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=M;if(M===n.RED&&(N===n.FLOAT&&(Z=n.R32F),N===n.HALF_FLOAT&&(Z=n.R16F),N===n.UNSIGNED_BYTE&&(Z=n.R8)),M===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(Z=n.R8UI),N===n.UNSIGNED_SHORT&&(Z=n.R16UI),N===n.UNSIGNED_INT&&(Z=n.R32UI),N===n.BYTE&&(Z=n.R8I),N===n.SHORT&&(Z=n.R16I),N===n.INT&&(Z=n.R32I)),M===n.RG&&(N===n.FLOAT&&(Z=n.RG32F),N===n.HALF_FLOAT&&(Z=n.RG16F),N===n.UNSIGNED_BYTE&&(Z=n.RG8)),M===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(Z=n.RG8UI),N===n.UNSIGNED_SHORT&&(Z=n.RG16UI),N===n.UNSIGNED_INT&&(Z=n.RG32UI),N===n.BYTE&&(Z=n.RG8I),N===n.SHORT&&(Z=n.RG16I),N===n.INT&&(Z=n.RG32I)),M===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),N===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),N===n.UNSIGNED_INT&&(Z=n.RGB32UI),N===n.BYTE&&(Z=n.RGB8I),N===n.SHORT&&(Z=n.RGB16I),N===n.INT&&(Z=n.RGB32I)),M===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),N===n.UNSIGNED_INT&&(Z=n.RGBA32UI),N===n.BYTE&&(Z=n.RGBA8I),N===n.SHORT&&(Z=n.RGBA16I),N===n.INT&&(Z=n.RGBA32I)),M===n.RGB&&(N===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),M===n.RGBA){const Ee=te?Su:Qe.getTransfer(Q);N===n.FLOAT&&(Z=n.RGBA32F),N===n.HALF_FLOAT&&(Z=n.RGBA16F),N===n.UNSIGNED_BYTE&&(Z=Ee===st?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(A,M){let N;return A?M===null||M===Xi||M===_l?N=n.DEPTH24_STENCIL8:M===ki?N=n.DEPTH32F_STENCIL8:M===gl&&(N=n.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Xi||M===_l?N=n.DEPTH_COMPONENT24:M===ki?N=n.DEPTH_COMPONENT32F:M===gl&&(N=n.DEPTH_COMPONENT16),N}function w(A,M){return _(A)===!0||A.isFramebufferTexture&&A.minFilter!==Jt&&A.minFilter!==dn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function T(A){const M=A.target;M.removeEventListener("dispose",T),y(M),M.isVideoTexture&&u.delete(M)}function b(A){const M=A.target;M.removeEventListener("dispose",b),L(M)}function y(A){const M=i.get(A);if(M.__webglInit===void 0)return;const N=A.source,Q=d.get(N);if(Q){const te=Q[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(A),Object.keys(Q).length===0&&d.delete(N)}i.remove(A)}function E(A){const M=i.get(A);n.deleteTexture(M.__webglTexture);const N=A.source,Q=d.get(N);delete Q[M.__cacheKey],a.memory.textures--}function L(A){const M=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let te=0;te<M.__webglFramebuffer[Q].length;te++)n.deleteFramebuffer(M.__webglFramebuffer[Q][te]);else n.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[Q]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const N=A.textures;for(let Q=0,te=N.length;Q<te;Q++){const Z=i.get(N[Q]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(N[Q])}i.remove(A)}let R=0;function z(){R=0}function O(){const A=R;return A>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),R+=1,A}function X(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function B(A,M){const N=i.get(A);if(A.isVideoTexture&&qe(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&N.__version!==A.version){const Q=A.image;if(Q===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{U(N,A,M);return}}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+M)}function V(A,M){const N=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){U(N,A,M);return}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+M)}function F(A,M){const N=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){U(N,A,M);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+M)}function G(A,M){const N=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&N.__version!==A.version){q(N,A,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+M)}const Y={[wh]:n.REPEAT,[ur]:n.CLAMP_TO_EDGE,[bh]:n.MIRRORED_REPEAT},J={[Jt]:n.NEAREST,[DT]:n.NEAREST_MIPMAP_NEAREST,[ec]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[Uf]:n.LINEAR_MIPMAP_NEAREST,[Ps]:n.LINEAR_MIPMAP_LINEAR},ie={[IT]:n.NEVER,[zT]:n.ALWAYS,[FT]:n.LESS,[wm]:n.LEQUAL,[UT]:n.EQUAL,[bm]:n.GEQUAL,[OT]:n.GREATER,[kT]:n.NOTEQUAL};function ne(A,M){if(M.type===ki&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===dn||M.magFilter===Uf||M.magFilter===ec||M.magFilter===Ps||M.minFilter===dn||M.minFilter===Uf||M.minFilter===ec||M.minFilter===Ps)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Y[M.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Y[M.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Y[M.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,J[M.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,J[M.minFilter]),M.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Jt||M.minFilter!==ec&&M.minFilter!==Ps||M.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Le(A,M){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",T));const Q=M.source;let te=d.get(Q);te===void 0&&(te={},d.set(Q,te));const Z=X(M);if(Z!==A.__cacheKey){te[Z]===void 0&&(te[Z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),te[Z].usedTimes++;const Ee=te[A.__cacheKey];Ee!==void 0&&(te[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&E(M)),A.__cacheKey=Z,A.__webglTexture=te[Z].texture}return N}function Fe(A,M,N){return Math.floor(Math.floor(A/N)/M)}function Be(A,M,N,Q){const Z=A.updateRanges;if(Z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,N,Q,M.data);else{Z.sort((se,oe)=>se.start-oe.start);let Ee=0;for(let se=1;se<Z.length;se++){const oe=Z[Ee],Te=Z[se],be=oe.start+oe.count,ge=Fe(Te.start,M.width,4),Ve=Fe(oe.start,M.width,4);Te.start<=be+1&&ge===Ve&&Fe(Te.start+Te.count-1,M.width,4)===ge?oe.count=Math.max(oe.count,Te.start+Te.count-oe.start):(++Ee,Z[Ee]=Te)}Z.length=Ee+1;const ce=n.getParameter(n.UNPACK_ROW_LENGTH),De=n.getParameter(n.UNPACK_SKIP_PIXELS),Ne=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let se=0,oe=Z.length;se<oe;se++){const Te=Z[se],be=Math.floor(Te.start/4),ge=Math.ceil(Te.count/4),Ve=be%M.width,I=Math.floor(be/M.width),ue=ge,le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Ve,I,ue,le,N,Q,M.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ce),n.pixelStorei(n.UNPACK_SKIP_PIXELS,De),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function U(A,M,N){let Q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=n.TEXTURE_3D);const te=Le(A,M),Z=M.source;t.bindTexture(Q,A.__webglTexture,n.TEXTURE0+N);const Ee=i.get(Z);if(Z.version!==Ee.__version||te===!0){t.activeTexture(n.TEXTURE0+N);const ce=Qe.getPrimaries(Qe.workingColorSpace),De=M.colorSpace===Or?null:Qe.getPrimaries(M.colorSpace),Ne=M.colorSpace===Or||ce===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let se=v(M.image,!1,r.maxTextureSize);se=ot(M,se);const oe=s.convert(M.format,M.colorSpace),Te=s.convert(M.type);let be=x(M.internalFormat,oe,Te,M.colorSpace,M.isVideoTexture);ne(Q,M);let ge;const Ve=M.mipmaps,I=M.isVideoTexture!==!0,ue=Ee.__version===void 0||te===!0,le=Z.dataReady,ye=w(M,se);if(M.isDepthTexture)be=S(M.format===Ds,M.type),ue&&(I?t.texStorage2D(n.TEXTURE_2D,1,be,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,be,se.width,se.height,0,oe,Te,null));else if(M.isDataTexture)if(Ve.length>0){I&&ue&&t.texStorage2D(n.TEXTURE_2D,ye,be,Ve[0].width,Ve[0].height);for(let ae=0,K=Ve.length;ae<K;ae++)ge=Ve[ae],I?le&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ge.width,ge.height,oe,Te,ge.data):t.texImage2D(n.TEXTURE_2D,ae,be,ge.width,ge.height,0,oe,Te,ge.data);M.generateMipmaps=!1}else I?(ue&&t.texStorage2D(n.TEXTURE_2D,ye,be,se.width,se.height),le&&Be(M,se,oe,Te)):t.texImage2D(n.TEXTURE_2D,0,be,se.width,se.height,0,oe,Te,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){I&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,be,Ve[0].width,Ve[0].height,se.depth);for(let ae=0,K=Ve.length;ae<K;ae++)if(ge=Ve[ae],M.format!==Ti)if(oe!==null)if(I){if(le)if(M.layerUpdates.size>0){const we=e_(ge.width,ge.height,M.format,M.type);for(const Ue of M.layerUpdates){const mt=ge.data.subarray(Ue*we/ge.data.BYTES_PER_ELEMENT,(Ue+1)*we/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,Ue,ge.width,ge.height,1,oe,mt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ge.width,ge.height,se.depth,oe,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,be,ge.width,ge.height,se.depth,0,ge.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ge.width,ge.height,se.depth,oe,Te,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,be,ge.width,ge.height,se.depth,0,oe,Te,ge.data)}else{I&&ue&&t.texStorage2D(n.TEXTURE_2D,ye,be,Ve[0].width,Ve[0].height);for(let ae=0,K=Ve.length;ae<K;ae++)ge=Ve[ae],M.format!==Ti?oe!==null?I?le&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,ge.width,ge.height,oe,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,be,ge.width,ge.height,0,ge.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?le&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ge.width,ge.height,oe,Te,ge.data):t.texImage2D(n.TEXTURE_2D,ae,be,ge.width,ge.height,0,oe,Te,ge.data)}else if(M.isDataArrayTexture)if(I){if(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,be,se.width,se.height,se.depth),le)if(M.layerUpdates.size>0){const ae=e_(se.width,se.height,M.format,M.type);for(const K of M.layerUpdates){const we=se.data.subarray(K*ae/se.data.BYTES_PER_ELEMENT,(K+1)*ae/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,se.width,se.height,1,oe,Te,we)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,oe,Te,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,se.width,se.height,se.depth,0,oe,Te,se.data);else if(M.isData3DTexture)I?(ue&&t.texStorage3D(n.TEXTURE_3D,ye,be,se.width,se.height,se.depth),le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,oe,Te,se.data)):t.texImage3D(n.TEXTURE_3D,0,be,se.width,se.height,se.depth,0,oe,Te,se.data);else if(M.isFramebufferTexture){if(ue)if(I)t.texStorage2D(n.TEXTURE_2D,ye,be,se.width,se.height);else{let ae=se.width,K=se.height;for(let we=0;we<ye;we++)t.texImage2D(n.TEXTURE_2D,we,be,ae,K,0,oe,Te,null),ae>>=1,K>>=1}}else if(Ve.length>0){if(I&&ue){const ae=Me(Ve[0]);t.texStorage2D(n.TEXTURE_2D,ye,be,ae.width,ae.height)}for(let ae=0,K=Ve.length;ae<K;ae++)ge=Ve[ae],I?le&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,oe,Te,ge):t.texImage2D(n.TEXTURE_2D,ae,be,oe,Te,ge);M.generateMipmaps=!1}else if(I){if(ue){const ae=Me(se);t.texStorage2D(n.TEXTURE_2D,ye,be,ae.width,ae.height)}le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe,Te,se)}else t.texImage2D(n.TEXTURE_2D,0,be,oe,Te,se);_(M)&&f(Q),Ee.__version=Z.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function q(A,M,N){if(M.image.length!==6)return;const Q=Le(A,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+N);const Z=i.get(te);if(te.version!==Z.__version||Q===!0){t.activeTexture(n.TEXTURE0+N);const Ee=Qe.getPrimaries(Qe.workingColorSpace),ce=M.colorSpace===Or?null:Qe.getPrimaries(M.colorSpace),De=M.colorSpace===Or||Ee===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Ne=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let K=0;K<6;K++)!Ne&&!se?oe[K]=v(M.image[K],!0,r.maxCubemapSize):oe[K]=se?M.image[K].image:M.image[K],oe[K]=ot(M,oe[K]);const Te=oe[0],be=s.convert(M.format,M.colorSpace),ge=s.convert(M.type),Ve=x(M.internalFormat,be,ge,M.colorSpace),I=M.isVideoTexture!==!0,ue=Z.__version===void 0||Q===!0,le=te.dataReady;let ye=w(M,Te);ne(n.TEXTURE_CUBE_MAP,M);let ae;if(Ne){I&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ve,Te.width,Te.height);for(let K=0;K<6;K++){ae=oe[K].mipmaps;for(let we=0;we<ae.length;we++){const Ue=ae[we];M.format!==Ti?be!==null?I?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,we,0,0,Ue.width,Ue.height,be,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,we,Ve,Ue.width,Ue.height,0,Ue.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,we,0,0,Ue.width,Ue.height,be,ge,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,we,Ve,Ue.width,Ue.height,0,be,ge,Ue.data)}}}else{if(ae=M.mipmaps,I&&ue){ae.length>0&&ye++;const K=Me(oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ve,K.width,K.height)}for(let K=0;K<6;K++)if(se){I?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,oe[K].width,oe[K].height,be,ge,oe[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ve,oe[K].width,oe[K].height,0,be,ge,oe[K].data);for(let we=0;we<ae.length;we++){const mt=ae[we].image[K].image;I?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,we+1,0,0,mt.width,mt.height,be,ge,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,we+1,Ve,mt.width,mt.height,0,be,ge,mt.data)}}else{I?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,be,ge,oe[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ve,be,ge,oe[K]);for(let we=0;we<ae.length;we++){const Ue=ae[we];I?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,we+1,0,0,be,ge,Ue.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,we+1,Ve,be,ge,Ue.image[K])}}}_(M)&&f(n.TEXTURE_CUBE_MAP),Z.__version=te.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ee(A,M,N,Q,te,Z){const Ee=s.convert(N.format,N.colorSpace),ce=s.convert(N.type),De=x(N.internalFormat,Ee,ce,N.colorSpace),Ne=i.get(M),se=i.get(N);if(se.__renderTarget=M,!Ne.__hasExternalTextures){const oe=Math.max(1,M.width>>Z),Te=Math.max(1,M.height>>Z);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,De,oe,Te,M.depth,0,Ee,ce,null):t.texImage2D(te,Z,De,oe,Te,0,Ee,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),vt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,te,se.__webglTexture,0,D(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,te,se.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(A,M,N){if(n.bindRenderbuffer(n.RENDERBUFFER,A),M.depthBuffer){const Q=M.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,Z=S(M.stencilBuffer,te),Ee=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;vt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(M),Z,M.width,M.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(M),Z,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Z,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,A)}else{const Q=M.textures;for(let te=0;te<Q.length;te++){const Z=Q[te],Ee=s.convert(Z.format,Z.colorSpace),ce=s.convert(Z.type),De=x(Z.internalFormat,Ee,ce,Z.colorSpace);vt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(M),De,M.width,M.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(M),De,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,De,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _e(A,M,N){const Q=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(M.depthTexture);if(te.__renderTarget=M,(!te.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q){if(te.__webglInit===void 0&&(te.__webglInit=!0,M.depthTexture.addEventListener("dispose",T)),te.__webglTexture===void 0){te.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),ne(n.TEXTURE_CUBE_MAP,M.depthTexture);const Ne=s.convert(M.depthTexture.format),se=s.convert(M.depthTexture.type);let oe;M.depthTexture.format===xr?oe=n.DEPTH_COMPONENT24:M.depthTexture.format===Ds&&(oe=n.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,oe,M.width,M.height,0,Ne,se,null)}}else B(M.depthTexture,0);const Z=te.__webglTexture,Ee=D(M),ce=Q?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,De=M.depthTexture.format===Ds?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===xr)vt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,De,ce,Z,0,Ee):n.framebufferTexture2D(n.FRAMEBUFFER,De,ce,Z,0);else if(M.depthTexture.format===Ds)vt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,De,ce,Z,0,Ee):n.framebufferTexture2D(n.FRAMEBUFFER,De,ce,Z,0);else throw new Error("Unknown depthTexture format")}function Se(A){const M=i.get(A),N=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=Q}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(N)for(let Q=0;Q<6;Q++)_e(M.__webglFramebuffer[Q],A,Q);else{const Q=A.texture.mipmaps;Q&&Q.length>0?_e(M.__webglFramebuffer[0],A,0):_e(M.__webglFramebuffer,A,0)}else if(N){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=n.createRenderbuffer(),de(M.__webglDepthbuffer[Q],A,!1);else{const te=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Z)}}else{const Q=A.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),de(M.__webglDepthbuffer,A,!1);else{const te=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function it(A,M,N){const Q=i.get(A);M!==void 0&&ee(Q.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Se(A)}function We(A){const M=A.texture,N=i.get(A),Q=i.get(M);A.addEventListener("dispose",b);const te=A.textures,Z=A.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=M.version,a.memory.textures++),Z){N.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer[ce]=[];for(let De=0;De<M.mipmaps.length;De++)N.__webglFramebuffer[ce][De]=n.createFramebuffer()}else N.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)N.__webglFramebuffer[ce]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let ce=0,De=te.length;ce<De;ce++){const Ne=i.get(te[ce]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&vt(A)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ce=0;ce<te.length;ce++){const De=te[ce];N.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ce]);const Ne=s.convert(De.format,De.colorSpace),se=s.convert(De.type),oe=x(De.internalFormat,Ne,se,De.colorSpace,A.isXRRenderTarget===!0),Te=D(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,oe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,N.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),de(N.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ne(n.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let De=0;De<M.mipmaps.length;De++)ee(N.__webglFramebuffer[ce][De],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De);else ee(N.__webglFramebuffer[ce],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);_(M)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ce=0,De=te.length;ce<De;ce++){const Ne=te[ce],se=i.get(Ne);let oe=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,se.__webglTexture),ne(oe,Ne),ee(N.__webglFramebuffer,A,Ne,n.COLOR_ATTACHMENT0+ce,oe,0),_(Ne)&&f(oe)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,Q.__webglTexture),ne(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let De=0;De<M.mipmaps.length;De++)ee(N.__webglFramebuffer[De],A,M,n.COLOR_ATTACHMENT0,ce,De);else ee(N.__webglFramebuffer,A,M,n.COLOR_ATTACHMENT0,ce,0);_(M)&&f(ce),t.unbindTexture()}A.depthBuffer&&Se(A)}function $e(A){const M=A.textures;for(let N=0,Q=M.length;N<Q;N++){const te=M[N];if(_(te)){const Z=m(A),Ee=i.get(te).__webglTexture;t.bindTexture(Z,Ee),f(Z),t.unbindTexture()}}}const Ke=[],me=[];function ft(A){if(A.samples>0){if(vt(A)===!1){const M=A.textures,N=A.width,Q=A.height;let te=n.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(A),ce=M.length>1;if(ce)for(let Ne=0;Ne<M.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const De=A.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ne=0;Ne<M.length;Ne++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ne]);const se=i.get(M[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,N,Q,0,0,N,Q,te,n.NEAREST),l===!0&&(Ke.length=0,me.length=0,Ke.push(n.COLOR_ATTACHMENT0+Ne),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ke.push(Z),me.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,me)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Ne=0;Ne<M.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ne]);const se=i.get(M[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function D(A){return Math.min(r.maxSamples,A.samples)}function vt(A){const M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function qe(A){const M=a.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function ot(A,M){const N=A.colorSpace,Q=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==Za&&N!==Or&&(Qe.getTransfer(N)===st?(Q!==Ti||te!==Hn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",N)),M}function Me(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=B,this.setTexture2DArray=V,this.setTexture3D=F,this.setTextureCube=G,this.rebindTextures=it,this.setupRenderTarget=We,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function mR(n,e){function t(i,r=Or){let s;const a=Qe.getTransfer(r);if(i===Hn)return n.UNSIGNED_BYTE;if(i===ym)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cy)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ay)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===wy)return n.BYTE;if(i===by)return n.SHORT;if(i===gl)return n.UNSIGNED_SHORT;if(i===xm)return n.INT;if(i===Xi)return n.UNSIGNED_INT;if(i===ki)return n.FLOAT;if(i===vr)return n.HALF_FLOAT;if(i===Ry)return n.ALPHA;if(i===Py)return n.RGB;if(i===Ti)return n.RGBA;if(i===xr)return n.DEPTH_COMPONENT;if(i===Ds)return n.DEPTH_STENCIL;if(i===Dy)return n.RED;if(i===Mm)return n.RED_INTEGER;if(i===Ka)return n.RG;if(i===Em)return n.RG_INTEGER;if(i===Tm)return n.RGBA_INTEGER;if(i===Gc||i===Wc||i===jc||i===Xc)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Gc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Gc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ch||i===Ah||i===Rh||i===Ph)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ch)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ah)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ph)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dh||i===Lh||i===Nh||i===Ih||i===Fh||i===Uh||i===Oh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Dh||i===Lh)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ih)return s.COMPRESSED_R11_EAC;if(i===Fh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Uh)return s.COMPRESSED_RG11_EAC;if(i===Oh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===kh||i===zh||i===Bh||i===Hh||i===Vh||i===Gh||i===Wh||i===jh||i===Xh||i===qh||i===Yh||i===$h||i===Kh||i===Zh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===kh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$h)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qh||i===Jh||i===ep)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Qh)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ep)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tp||i===np||i===ip||i===rp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===tp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===np)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ip)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_l?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const gR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_R=`
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

}`;class vR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new zy(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yi({vertexShader:gR,fragmentShader:_R,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new cn(new Qa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xR extends qs{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",_=new vR,f={},m=t.getContextAttributes();let x=null,S=null;const w=[],T=[],b=new Oe;let y=null;const E=new Ei;E.viewport=new Dt;const L=new Ei;L.viewport=new Dt;const R=[E,L],z=new Rw;let O=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let q=w[U];return q===void 0&&(q=new Gf,w[U]=q),q.getTargetRaySpace()},this.getControllerGrip=function(U){let q=w[U];return q===void 0&&(q=new Gf,w[U]=q),q.getGripSpace()},this.getHand=function(U){let q=w[U];return q===void 0&&(q=new Gf,w[U]=q),q.getHandSpace()};function B(U){const q=T.indexOf(U.inputSource);if(q===-1)return;const ee=w[q];ee!==void 0&&(ee.update(U.inputSource,U.frame,c||a),ee.dispatchEvent({type:U.type,data:U.inputSource}))}function V(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",F);for(let U=0;U<w.length;U++){const q=T[U];q!==null&&(T[U]=null,w[U].disconnect(q))}O=null,X=null,_.reset();for(const U in f)delete f[U];e.setRenderTarget(x),p=null,d=null,h=null,r=null,S=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",V),r.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(b),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,de=null,_e=null;m.depth&&(_e=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?Ds:xr,de=m.stencil?_l:Xi);const Se={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Se),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Wi(d.textureWidth,d.textureHeight,{format:Ti,type:Hn,depthTexture:new xl(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Wi(p.framebufferWidth,p.framebufferHeight,{format:Ti,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(U){for(let q=0;q<U.removed.length;q++){const ee=U.removed[q],de=T.indexOf(ee);de>=0&&(T[de]=null,w[de].disconnect(ee))}for(let q=0;q<U.added.length;q++){const ee=U.added[q];let de=T.indexOf(ee);if(de===-1){for(let Se=0;Se<w.length;Se++)if(Se>=T.length){T.push(ee),de=Se;break}else if(T[Se]===null){T[Se]=ee,de=Se;break}if(de===-1)break}const _e=w[de];_e&&_e.connect(ee)}}const G=new H,Y=new H;function J(U,q,ee){G.setFromMatrixPosition(q.matrixWorld),Y.setFromMatrixPosition(ee.matrixWorld);const de=G.distanceTo(Y),_e=q.projectionMatrix.elements,Se=ee.projectionMatrix.elements,it=_e[14]/(_e[10]-1),We=_e[14]/(_e[10]+1),$e=(_e[9]+1)/_e[5],Ke=(_e[9]-1)/_e[5],me=(_e[8]-1)/_e[0],ft=(Se[8]+1)/Se[0],D=it*me,vt=it*ft,qe=de/(-me+ft),ot=qe*-me;if(q.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ot),U.translateZ(qe),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),_e[10]===-1)U.projectionMatrix.copy(q.projectionMatrix),U.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const Me=it+qe,A=We+qe,M=D-ot,N=vt+(de-ot),Q=$e*We/A*Me,te=Ke*We/A*Me;U.projectionMatrix.makePerspective(M,N,Q,te,Me,A),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function ie(U,q){q===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(q.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;let q=U.near,ee=U.far;_.texture!==null&&(_.depthNear>0&&(q=_.depthNear),_.depthFar>0&&(ee=_.depthFar)),z.near=L.near=E.near=q,z.far=L.far=E.far=ee,(O!==z.near||X!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),O=z.near,X=z.far),z.layers.mask=U.layers.mask|6,E.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;const de=U.parent,_e=z.cameras;ie(z,de);for(let Se=0;Se<_e.length;Se++)ie(_e[Se],de);_e.length===2?J(z,E,L):z.projectionMatrix.copy(E.projectionMatrix),ne(U,z,de)};function ne(U,q,ee){ee===null?U.matrix.copy(q.matrixWorld):(U.matrix.copy(ee.matrixWorld),U.matrix.invert(),U.matrix.multiply(q.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(q.projectionMatrix),U.projectionMatrixInverse.copy(q.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=sp*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=U)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(z)},this.getCameraTexture=function(U){return f[U]};let Le=null;function Fe(U,q){if(u=q.getViewerPose(c||a),g=q,u!==null){const ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let de=!1;ee.length!==z.cameras.length&&(z.cameras.length=0,de=!0);for(let We=0;We<ee.length;We++){const $e=ee[We];let Ke=null;if(p!==null)Ke=p.getViewport($e);else{const ft=h.getViewSubImage(d,$e);Ke=ft.viewport,We===0&&(e.setRenderTargetTextures(S,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(S))}let me=R[We];me===void 0&&(me=new Ei,me.layers.enable(We),me.viewport=new Dt,R[We]=me),me.matrix.fromArray($e.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray($e.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),We===0&&(z.matrix.copy(me.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),de===!0&&z.cameras.push(me)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const We=h.getDepthInformation(ee[0]);We&&We.isValid&&We.texture&&_.init(We,r.renderState)}if(_e&&_e.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let We=0;We<ee.length;We++){const $e=ee[We].camera;if($e){let Ke=f[$e];Ke||(Ke=new zy,f[$e]=Ke);const me=h.getCameraImage($e);Ke.sourceTexture=me}}}}for(let ee=0;ee<w.length;ee++){const de=T[ee],_e=w[ee];de!==null&&_e!==void 0&&_e.update(de,q,c||a)}Le&&Le(U,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),g=null}const Be=new Gy;Be.setAnimationLoop(Fe),this.setAnimationLoop=function(U){Le=U},this.dispose=function(){}}}const vs=new qi,yR=new _t;function SR(n,e){function t(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function i(_,f){f.color.getRGB(_.fogColor.value,By(n)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function r(_,f,m,x,S){f.isMeshBasicMaterial?s(_,f):f.isMeshLambertMaterial?(s(_,f),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(_,f),h(_,f)):f.isMeshPhongMaterial?(s(_,f),u(_,f),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(_,f),d(_,f),f.isMeshPhysicalMaterial&&p(_,f,S)):f.isMeshMatcapMaterial?(s(_,f),g(_,f)):f.isMeshDepthMaterial?s(_,f):f.isMeshDistanceMaterial?(s(_,f),v(_,f)):f.isMeshNormalMaterial?s(_,f):f.isLineBasicMaterial?(a(_,f),f.isLineDashedMaterial&&o(_,f)):f.isPointsMaterial?l(_,f,m,x):f.isSpriteMaterial?c(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,t(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,t(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===Pn&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,t(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===Pn&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,t(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,t(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);const m=e.get(f),x=m.envMap,S=m.envMapRotation;x&&(_.envMap.value=x,vs.copy(S),vs.x*=-1,vs.y*=-1,vs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),_.envMapRotation.value.setFromMatrix4(yR.makeRotationFromEuler(vs)),_.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap&&(_.lightMap.value=f.lightMap,_.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,_.lightMapTransform)),f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,_.aoMapTransform))}function a(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,t(f.map,_.mapTransform))}function o(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function l(_,f,m,x){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*m,_.scale.value=x*.5,f.map&&(_.map.value=f.map,t(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function c(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,t(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function u(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function h(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function d(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,_.roughnessMapTransform)),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function p(_,f,m){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pn&&_.clearcoatNormalScale.value.negate())),f.dispersion>0&&(_.dispersion.value=f.dispersion),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=m.texture,_.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,f){f.matcap&&(_.matcap.value=f.matcap)}function v(_,f){const m=e.get(f).light;_.referencePosition.value.setFromMatrixPosition(m.matrixWorld),_.nearDistance.value=m.shadow.camera.near,_.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function MR(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,x){const S=x.program;i.uniformBlockBinding(m,S)}function c(m,x){let S=r[m.id];S===void 0&&(g(m),S=u(m),r[m.id]=S,m.addEventListener("dispose",_));const w=x.program;i.updateUBOMapping(m,w);const T=e.render.frame;s[m.id]!==T&&(d(m),s[m.id]=T)}function u(m){const x=h();m.__bindingPointIndex=x;const S=n.createBuffer(),w=m.__size,T=m.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function h(){for(let m=0;m<o;m++)if(a.indexOf(m)===-1)return a.push(m),m;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(m){const x=r[m.id],S=m.uniforms,w=m.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,b=S.length;T<b;T++){const y=Array.isArray(S[T])?S[T]:[S[T]];for(let E=0,L=y.length;E<L;E++){const R=y[E];if(p(R,T,E,w)===!0){const z=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let B=0;B<O.length;B++){const V=O[B],F=v(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,z+X,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,X),X+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(m,x,S,w){const T=m.value,b=x+"_"+S;if(w[b]===void 0)return typeof T=="number"||typeof T=="boolean"?w[b]=T:w[b]=T.clone(),!0;{const y=w[b];if(typeof T=="number"||typeof T=="boolean"){if(y!==T)return w[b]=T,!0}else if(y.equals(T)===!1)return y.copy(T),!0}return!1}function g(m){const x=m.uniforms;let S=0;const w=16;for(let b=0,y=x.length;b<y;b++){const E=Array.isArray(x[b])?x[b]:[x[b]];for(let L=0,R=E.length;L<R;L++){const z=E[L],O=Array.isArray(z.value)?z.value:[z.value];for(let X=0,B=O.length;X<B;X++){const V=O[X],F=v(V),G=S%w,Y=G%F.boundary,J=G+Y;S+=Y,J!==0&&w-J<F.storage&&(S+=w-J),z.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=F.storage}}}const T=S%w;return T>0&&(S+=w-T),m.__size=S,m.__cache={},this}function v(m){const x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",m),x}function _(m){const x=m.target;x.removeEventListener("dispose",_);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const m in r)n.deleteBuffer(r[m]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}const ER=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function TR(){return Li===null&&(Li=new fw(ER,16,16,Ka,vr),Li.name="DFG_LUT",Li.minFilter=dn,Li.magFilter=dn,Li.wrapS=ur,Li.wrapT=ur,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class wR{constructor(e={}){const{canvas:t=HT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Hn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const v=p,_=new Set([Tm,Em,Mm]),f=new Set([Hn,Xi,gl,_l,ym,Sm]),m=new Uint32Array(4),x=new Int32Array(4);let S=null,w=null;const T=[],b=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let L=!1;this._outputColorSpace=ti;let R=0,z=0,O=null,X=-1,B=null;const V=new Dt,F=new Dt;let G=null;const Y=new tt(0);let J=0,ie=t.width,ne=t.height,Le=1,Fe=null,Be=null;const U=new Dt(0,0,ie,ne),q=new Dt(0,0,ie,ne);let ee=!1;const de=new Pm;let _e=!1,Se=!1;const it=new _t,We=new H,$e=new Dt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let me=!1;function ft(){return O===null?Le:1}let D=i;function vt(C,k){return t.getContext(C,k)}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vm}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",mt,!1),D===null){const k="webgl2";if(D=vt(k,C),D===null)throw vt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ze("WebGLRenderer: "+C.message),C}let qe,ot,Me,A,M,N,Q,te,Z,Ee,ce,De,Ne,se,oe,Te,be,ge,Ve,I,ue,le,ye;function ae(){qe=new wA(D),qe.init(),ue=new mR(D,qe),ot=new _A(D,qe,e,ue),Me=new hR(D,qe),ot.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),A=new AA(D),M=new J2,N=new pR(D,qe,Me,M,ot,ue,A),Q=new TA(E),te=new Nw(D),le=new mA(D,te),Z=new bA(D,te,A,le),Ee=new PA(D,Z,te,le,A),ge=new RA(D,ot,N),oe=new vA(M),ce=new Q2(E,Q,qe,ot,le,oe),De=new SR(E,M),Ne=new tR,se=new oR(qe),be=new pA(E,Q,Me,Ee,g,l),Te=new dR(E,Ee,ot),ye=new MR(D,A,ot,Me),Ve=new gA(D,qe,A),I=new CA(D,qe,A),A.programs=ce.programs,E.capabilities=ot,E.extensions=qe,E.properties=M,E.renderLists=Ne,E.shadowMap=Te,E.state=Me,E.info=A}ae(),v!==Hn&&(y=new LA(v,t.width,t.height,r,s));const K=new xR(E,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=qe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=qe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(C){C!==void 0&&(Le=C,this.setSize(ie,ne,!1))},this.getSize=function(C){return C.set(ie,ne)},this.setSize=function(C,k,$=!0){if(K.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=C,ne=k,t.width=Math.floor(C*Le),t.height=Math.floor(k*Le),$===!0&&(t.style.width=C+"px",t.style.height=k+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(ie*Le,ne*Le).floor()},this.setDrawingBufferSize=function(C,k,$){ie=C,ne=k,Le=$,t.width=Math.floor(C*$),t.height=Math.floor(k*$),this.setViewport(0,0,C,k)},this.setEffects=function(C){if(v===Hn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let k=0;k<C.length;k++)if(C[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(V)},this.getViewport=function(C){return C.copy(U)},this.setViewport=function(C,k,$,j){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,k,$,j),Me.viewport(V.copy(U).multiplyScalar(Le).round())},this.getScissor=function(C){return C.copy(q)},this.setScissor=function(C,k,$,j){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,k,$,j),Me.scissor(F.copy(q).multiplyScalar(Le).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(C){Me.setScissorTest(ee=C)},this.setOpaqueSort=function(C){Fe=C},this.setTransparentSort=function(C){Be=C},this.getClearColor=function(C){return C.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,$=!0){let j=0;if(C){let W=!1;if(O!==null){const he=O.texture.format;W=_.has(he)}if(W){const he=O.texture.type,ve=f.has(he),pe=be.getClearColor(),Ce=be.getClearAlpha(),Re=pe.r,ke=pe.g,Ge=pe.b;ve?(m[0]=Re,m[1]=ke,m[2]=Ge,m[3]=Ce,D.clearBufferuiv(D.COLOR,0,m)):(x[0]=Re,x[1]=ke,x[2]=Ge,x[3]=Ce,D.clearBufferiv(D.COLOR,0,x))}else j|=D.COLOR_BUFFER_BIT}k&&(j|=D.DEPTH_BUFFER_BIT),$&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",mt,!1),be.dispose(),Ne.dispose(),se.dispose(),M.dispose(),Q.dispose(),Ee.dispose(),le.dispose(),ye.dispose(),ce.dispose(),K.dispose(),K.removeEventListener("sessionstart",Qm),K.removeEventListener("sessionend",Jm),fs.stop()};function we(C){C.preventDefault(),w0("WebGLRenderer: Context Lost."),L=!0}function Ue(){w0("WebGLRenderer: Context Restored."),L=!1;const C=A.autoReset,k=Te.enabled,$=Te.autoUpdate,j=Te.needsUpdate,W=Te.type;ae(),A.autoReset=C,Te.enabled=k,Te.autoUpdate=$,Te.needsUpdate=j,Te.type=W}function mt(C){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function rt(C){const k=C.target;k.removeEventListener("dispose",rt),Ki(k)}function Ki(C){Zi(C),M.remove(C)}function Zi(C){const k=M.get(C).programs;k!==void 0&&(k.forEach(function($){ce.releaseProgram($)}),C.isShaderMaterial&&ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,$,j,W,he){k===null&&(k=Ke);const ve=W.isMesh&&W.matrixWorld.determinant()<0,pe=ZS(C,k,$,j,W);Me.setMaterial(j,ve);let Ce=$.index,Re=1;if(j.wireframe===!0){if(Ce=Z.getWireframeAttribute($),Ce===void 0)return;Re=2}const ke=$.drawRange,Ge=$.attributes.position;let Pe=ke.start*Re,lt=(ke.start+ke.count)*Re;he!==null&&(Pe=Math.max(Pe,he.start*Re),lt=Math.min(lt,(he.start+he.count)*Re)),Ce!==null?(Pe=Math.max(Pe,0),lt=Math.min(lt,Ce.count)):Ge!=null&&(Pe=Math.max(Pe,0),lt=Math.min(lt,Ge.count));const Nt=lt-Pe;if(Nt<0||Nt===1/0)return;le.setup(W,j,pe,$,Ce);let Rt,ct=Ve;if(Ce!==null&&(Rt=te.get(Ce),ct=I,ct.setIndex(Rt)),W.isMesh)j.wireframe===!0?(Me.setLineWidth(j.wireframeLinewidth*ft()),ct.setMode(D.LINES)):ct.setMode(D.TRIANGLES);else if(W.isLine){let rn=j.linewidth;rn===void 0&&(rn=1),Me.setLineWidth(rn*ft()),W.isLineSegments?ct.setMode(D.LINES):W.isLineLoop?ct.setMode(D.LINE_LOOP):ct.setMode(D.LINE_STRIP)}else W.isPoints?ct.setMode(D.POINTS):W.isSprite&&ct.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Eu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))ct.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const rn=W._multiDrawStarts,Ae=W._multiDrawCounts,Un=W._multiDrawCount,et=Ce?te.get(Ce).bytesPerElement:1,hi=M.get(j).currentProgram.getUniforms();for(let Ri=0;Ri<Un;Ri++)hi.setValue(D,"_gl_DrawID",Ri),ct.render(rn[Ri]/et,Ae[Ri])}else if(W.isInstancedMesh)ct.renderInstances(Pe,Nt,W.count);else if($.isInstancedBufferGeometry){const rn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ae=Math.min($.instanceCount,rn);ct.renderInstances(Pe,Nt,Ae)}else ct.render(Pe,Nt)};function Zm(C,k,$){C.transparent===!0&&C.side===or&&C.forceSinglePass===!1?(C.side=Pn,C.needsUpdate=!0,Fl(C,k,$),C.side=ns,C.needsUpdate=!0,Fl(C,k,$),C.side=or):Fl(C,k,$)}this.compile=function(C,k,$=null){$===null&&($=C),w=se.get($),w.init(k),b.push(w),$.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),C!==$&&C.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights();const j=new Set;return C.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const he=W.material;if(he)if(Array.isArray(he))for(let ve=0;ve<he.length;ve++){const pe=he[ve];Zm(pe,$,W),j.add(pe)}else Zm(he,$,W),j.add(he)}),w=b.pop(),j},this.compileAsync=function(C,k,$=null){const j=this.compile(C,k,$);return new Promise(W=>{function he(){if(j.forEach(function(ve){M.get(ve).currentProgram.isReady()&&j.delete(ve)}),j.size===0){W(C);return}setTimeout(he,10)}qe.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let af=null;function KS(C){af&&af(C)}function Qm(){fs.stop()}function Jm(){fs.start()}const fs=new Gy;fs.setAnimationLoop(KS),typeof self<"u"&&fs.setContext(self),this.setAnimationLoop=function(C){af=C,K.setAnimationLoop(C),C===null?fs.stop():fs.start()},K.addEventListener("sessionstart",Qm),K.addEventListener("sessionend",Jm),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const $=K.enabled===!0&&K.isPresenting===!0,j=y!==null&&(O===null||$)&&y.begin(E,O);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,k,O),w=se.get(C,b.length),w.init(k),b.push(w),it.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),de.setFromProjectionMatrix(it,zi,k.reversedDepth),Se=this.localClippingEnabled,_e=oe.init(this.clippingPlanes,Se),S=Ne.get(C,T.length),S.init(),T.push(S),K.enabled===!0&&K.isPresenting===!0){const ve=E.xr.getDepthSensingMesh();ve!==null&&of(ve,k,-1/0,E.sortObjects)}of(C,k,0,E.sortObjects),S.finish(),E.sortObjects===!0&&S.sort(Fe,Be),me=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,me&&be.addToRenderList(S,C),this.info.render.frame++,_e===!0&&oe.beginShadows();const W=w.state.shadowsArray;if(Te.render(W,C,k),_e===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&y.hasRenderPass())===!1){const ve=S.opaque,pe=S.transmissive;if(w.setupLights(),k.isArrayCamera){const Ce=k.cameras;if(pe.length>0)for(let Re=0,ke=Ce.length;Re<ke;Re++){const Ge=Ce[Re];tg(ve,pe,C,Ge)}me&&be.render(C);for(let Re=0,ke=Ce.length;Re<ke;Re++){const Ge=Ce[Re];eg(S,C,Ge,Ge.viewport)}}else pe.length>0&&tg(ve,pe,C,k),me&&be.render(C),eg(S,C,k)}O!==null&&z===0&&(N.updateMultisampleRenderTarget(O),N.updateRenderTargetMipmap(O)),j&&y.end(E),C.isScene===!0&&C.onAfterRender(E,C,k),le.resetDefaultState(),X=-1,B=null,b.pop(),b.length>0?(w=b[b.length-1],_e===!0&&oe.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?S=T[T.length-1]:S=null};function of(C,k,$,j){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)w.pushLight(C),C.castShadow&&w.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||de.intersectsSprite(C)){j&&$e.setFromMatrixPosition(C.matrixWorld).applyMatrix4(it);const ve=Ee.update(C),pe=C.material;pe.visible&&S.push(C,ve,pe,$,$e.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||de.intersectsObject(C))){const ve=Ee.update(C),pe=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),$e.copy(C.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),$e.copy(ve.boundingSphere.center)),$e.applyMatrix4(C.matrixWorld).applyMatrix4(it)),Array.isArray(pe)){const Ce=ve.groups;for(let Re=0,ke=Ce.length;Re<ke;Re++){const Ge=Ce[Re],Pe=pe[Ge.materialIndex];Pe&&Pe.visible&&S.push(C,ve,Pe,$,$e.z,Ge)}}else pe.visible&&S.push(C,ve,pe,$,$e.z,null)}}const he=C.children;for(let ve=0,pe=he.length;ve<pe;ve++)of(he[ve],k,$,j)}function eg(C,k,$,j){const{opaque:W,transmissive:he,transparent:ve}=C;w.setupLightsView($),_e===!0&&oe.setGlobalState(E.clippingPlanes,$),j&&Me.viewport(V.copy(j)),W.length>0&&Il(W,k,$),he.length>0&&Il(he,k,$),ve.length>0&&Il(ve,k,$),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function tg(C,k,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[j.id]===void 0){const Pe=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[j.id]=new Wi(1,1,{generateMipmaps:!0,type:Pe?vr:Hn,minFilter:Ps,samples:Math.max(4,ot.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const he=w.state.transmissionRenderTarget[j.id],ve=j.viewport||V;he.setSize(ve.z*E.transmissionResolutionScale,ve.w*E.transmissionResolutionScale);const pe=E.getRenderTarget(),Ce=E.getActiveCubeFace(),Re=E.getActiveMipmapLevel();E.setRenderTarget(he),E.getClearColor(Y),J=E.getClearAlpha(),J<1&&E.setClearColor(16777215,.5),E.clear(),me&&be.render($);const ke=E.toneMapping;E.toneMapping=Gi;const Ge=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),w.setupLightsView(j),_e===!0&&oe.setGlobalState(E.clippingPlanes,j),Il(C,$,j),N.updateMultisampleRenderTarget(he),N.updateRenderTargetMipmap(he),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let lt=0,Nt=k.length;lt<Nt;lt++){const Rt=k[lt],{object:ct,geometry:rn,material:Ae,group:Un}=Rt;if(Ae.side===or&&ct.layers.test(j.layers)){const et=Ae.side;Ae.side=Pn,Ae.needsUpdate=!0,ng(ct,$,j,rn,Ae,Un),Ae.side=et,Ae.needsUpdate=!0,Pe=!0}}Pe===!0&&(N.updateMultisampleRenderTarget(he),N.updateRenderTargetMipmap(he))}E.setRenderTarget(pe,Ce,Re),E.setClearColor(Y,J),Ge!==void 0&&(j.viewport=Ge),E.toneMapping=ke}function Il(C,k,$){const j=k.isScene===!0?k.overrideMaterial:null;for(let W=0,he=C.length;W<he;W++){const ve=C[W],{object:pe,geometry:Ce,group:Re}=ve;let ke=ve.material;ke.allowOverride===!0&&j!==null&&(ke=j),pe.layers.test($.layers)&&ng(pe,k,$,Ce,ke,Re)}}function ng(C,k,$,j,W,he){C.onBeforeRender(E,k,$,j,W,he),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(E,k,$,j,C,he),W.transparent===!0&&W.side===or&&W.forceSinglePass===!1?(W.side=Pn,W.needsUpdate=!0,E.renderBufferDirect($,k,j,W,C,he),W.side=ns,W.needsUpdate=!0,E.renderBufferDirect($,k,j,W,C,he),W.side=or):E.renderBufferDirect($,k,j,W,C,he),C.onAfterRender(E,k,$,j,W,he)}function Fl(C,k,$){k.isScene!==!0&&(k=Ke);const j=M.get(C),W=w.state.lights,he=w.state.shadowsArray,ve=W.state.version,pe=ce.getParameters(C,W.state,he,k,$),Ce=ce.getProgramCacheKey(pe);let Re=j.programs;j.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?k.environment:null,j.fog=k.fog;const ke=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;j.envMap=Q.get(C.envMap||j.environment,ke),j.envMapRotation=j.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Re===void 0&&(C.addEventListener("dispose",rt),Re=new Map,j.programs=Re);let Ge=Re.get(Ce);if(Ge!==void 0){if(j.currentProgram===Ge&&j.lightsStateVersion===ve)return rg(C,pe),Ge}else pe.uniforms=ce.getUniforms(C),C.onBeforeCompile(pe,E),Ge=ce.acquireProgram(pe,Ce),Re.set(Ce,Ge),j.uniforms=pe.uniforms;const Pe=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Pe.clippingPlanes=oe.uniform),rg(C,pe),j.needsLights=JS(C),j.lightsStateVersion=ve,j.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotLightMatrix.value=W.state.spotLightMatrix,Pe.spotLightMap.value=W.state.spotLightMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=Ge,j.uniformsList=null,Ge}function ig(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=qc.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function rg(C,k){const $=M.get(C);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function ZS(C,k,$,j,W){k.isScene!==!0&&(k=Ke),N.resetTextureUnits();const he=k.fog,ve=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?k.environment:null,pe=O===null?E.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Za,Ce=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Re=Q.get(j.envMap||ve,Ce),ke=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ge=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Pe=!!$.morphAttributes.position,lt=!!$.morphAttributes.normal,Nt=!!$.morphAttributes.color;let Rt=Gi;j.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Rt=E.toneMapping);const ct=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,rn=ct!==void 0?ct.length:0,Ae=M.get(j),Un=w.state.lights;if(_e===!0&&(Se===!0||C!==B)){const Wt=C===B&&j.id===X;oe.setState(j,C,Wt)}let et=!1;j.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Un.state.version||Ae.outputColorSpace!==pe||W.isBatchedMesh&&Ae.batching===!1||!W.isBatchedMesh&&Ae.batching===!0||W.isBatchedMesh&&Ae.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ae.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ae.instancing===!1||!W.isInstancedMesh&&Ae.instancing===!0||W.isSkinnedMesh&&Ae.skinning===!1||!W.isSkinnedMesh&&Ae.skinning===!0||W.isInstancedMesh&&Ae.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ae.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ae.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ae.instancingMorph===!1&&W.morphTexture!==null||Ae.envMap!==Re||j.fog===!0&&Ae.fog!==he||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==oe.numPlanes||Ae.numIntersection!==oe.numIntersection)||Ae.vertexAlphas!==ke||Ae.vertexTangents!==Ge||Ae.morphTargets!==Pe||Ae.morphNormals!==lt||Ae.morphColors!==Nt||Ae.toneMapping!==Rt||Ae.morphTargetsCount!==rn)&&(et=!0):(et=!0,Ae.__version=j.version);let hi=Ae.currentProgram;et===!0&&(hi=Fl(j,k,W));let Ri=!1,ds=!1,$s=!1;const dt=hi.getUniforms(),Zt=Ae.uniforms;if(Me.useProgram(hi.program)&&(Ri=!0,ds=!0,$s=!0),j.id!==X&&(X=j.id,ds=!0),Ri||B!==C){Me.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),dt.setValue(D,"projectionMatrix",C.projectionMatrix),dt.setValue(D,"viewMatrix",C.matrixWorldInverse);const Tr=dt.map.cameraPosition;Tr!==void 0&&Tr.setValue(D,We.setFromMatrixPosition(C.matrixWorld)),ot.logarithmicDepthBuffer&&dt.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&dt.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),B!==C&&(B=C,ds=!0,$s=!0)}if(Ae.needsLights&&(Un.state.directionalShadowMap.length>0&&dt.setValue(D,"directionalShadowMap",Un.state.directionalShadowMap,N),Un.state.spotShadowMap.length>0&&dt.setValue(D,"spotShadowMap",Un.state.spotShadowMap,N),Un.state.pointShadowMap.length>0&&dt.setValue(D,"pointShadowMap",Un.state.pointShadowMap,N)),W.isSkinnedMesh){dt.setOptional(D,W,"bindMatrix"),dt.setOptional(D,W,"bindMatrixInverse");const Wt=W.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),dt.setValue(D,"boneTexture",Wt.boneTexture,N))}W.isBatchedMesh&&(dt.setOptional(D,W,"batchingTexture"),dt.setValue(D,"batchingTexture",W._matricesTexture,N),dt.setOptional(D,W,"batchingIdTexture"),dt.setValue(D,"batchingIdTexture",W._indirectTexture,N),dt.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null&&dt.setValue(D,"batchingColorTexture",W._colorsTexture,N));const Er=$.morphAttributes;if((Er.position!==void 0||Er.normal!==void 0||Er.color!==void 0)&&ge.update(W,$,hi),(ds||Ae.receiveShadow!==W.receiveShadow)&&(Ae.receiveShadow=W.receiveShadow,dt.setValue(D,"receiveShadow",W.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&k.environment!==null&&(Zt.envMapIntensity.value=k.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=TR()),ds&&(dt.setValue(D,"toneMappingExposure",E.toneMappingExposure),Ae.needsLights&&QS(Zt,$s),he&&j.fog===!0&&De.refreshFogUniforms(Zt,he),De.refreshMaterialUniforms(Zt,j,Le,ne,w.state.transmissionRenderTarget[C.id]),qc.upload(D,ig(Ae),Zt,N)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(qc.upload(D,ig(Ae),Zt,N),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&dt.setValue(D,"center",W.center),dt.setValue(D,"modelViewMatrix",W.modelViewMatrix),dt.setValue(D,"normalMatrix",W.normalMatrix),dt.setValue(D,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Wt=j.uniformsGroups;for(let Tr=0,Ks=Wt.length;Tr<Ks;Tr++){const sg=Wt[Tr];ye.update(sg,hi),ye.bind(sg,hi)}}return hi}function QS(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function JS(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(C,k,$){const j=M.get(C);j.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),M.get(C.texture).__webglTexture=k,M.get(C.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:$,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,k){const $=M.get(C);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0};const eM=D.createFramebuffer();this.setRenderTarget=function(C,k=0,$=0){O=C,R=k,z=$;let j=null,W=!1,he=!1;if(C){const pe=M.get(C);if(pe.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(D.FRAMEBUFFER,pe.__webglFramebuffer),V.copy(C.viewport),F.copy(C.scissor),G=C.scissorTest,Me.viewport(V),Me.scissor(F),Me.setScissorTest(G),X=-1;return}else if(pe.__webglFramebuffer===void 0)N.setupRenderTarget(C);else if(pe.__hasExternalTextures)N.rebindTextures(C,M.get(C.texture).__webglTexture,M.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ke=C.depthTexture;if(pe.__boundDepthTexture!==ke){if(ke!==null&&M.has(ke)&&(C.width!==ke.image.width||C.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(C)}}const Ce=C.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(he=!0);const Re=M.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Re[k])?j=Re[k][$]:j=Re[k],W=!0):C.samples>0&&N.useMultisampledRTT(C)===!1?j=M.get(C).__webglMultisampledFramebuffer:Array.isArray(Re)?j=Re[$]:j=Re,V.copy(C.viewport),F.copy(C.scissor),G=C.scissorTest}else V.copy(U).multiplyScalar(Le).floor(),F.copy(q).multiplyScalar(Le).floor(),G=ee;if($!==0&&(j=eM),Me.bindFramebuffer(D.FRAMEBUFFER,j)&&Me.drawBuffers(C,j),Me.viewport(V),Me.scissor(F),Me.setScissorTest(G),W){const pe=M.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,pe.__webglTexture,$)}else if(he){const pe=k;for(let Ce=0;Ce<C.textures.length;Ce++){const Re=M.get(C.textures[Ce]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ce,Re.__webglTexture,$,pe)}}else if(C!==null&&$!==0){const pe=M.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pe.__webglTexture,$)}X=-1},this.readRenderTargetPixels=function(C,k,$,j,W,he,ve,pe=0){if(!(C&&C.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ve!==void 0&&(Ce=Ce[ve]),Ce){Me.bindFramebuffer(D.FRAMEBUFFER,Ce);try{const Re=C.textures[pe],ke=Re.format,Ge=Re.type;if(C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),!ot.textureFormatReadable(ke)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Ge)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-j&&$>=0&&$<=C.height-W&&D.readPixels(k,$,j,W,ue.convert(ke),ue.convert(Ge),he)}finally{const Re=O!==null?M.get(O).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(C,k,$,j,W,he,ve,pe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ve!==void 0&&(Ce=Ce[ve]),Ce)if(k>=0&&k<=C.width-j&&$>=0&&$<=C.height-W){Me.bindFramebuffer(D.FRAMEBUFFER,Ce);const Re=C.textures[pe],ke=Re.format,Ge=Re.type;if(C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),!ot.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.bufferData(D.PIXEL_PACK_BUFFER,he.byteLength,D.STREAM_READ),D.readPixels(k,$,j,W,ue.convert(ke),ue.convert(Ge),0);const lt=O!==null?M.get(O).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,lt);const Nt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await VT(D,Nt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,he),D.deleteBuffer(Pe),D.deleteSync(Nt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,k=null,$=0){const j=Math.pow(2,-$),W=Math.floor(C.image.width*j),he=Math.floor(C.image.height*j),ve=k!==null?k.x:0,pe=k!==null?k.y:0;N.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,ve,pe,W,he),Me.unbindTexture()};const tM=D.createFramebuffer(),nM=D.createFramebuffer();this.copyTextureToTexture=function(C,k,$=null,j=null,W=0,he=0){let ve,pe,Ce,Re,ke,Ge,Pe,lt,Nt;const Rt=C.isCompressedTexture?C.mipmaps[he]:C.image;if($!==null)ve=$.max.x-$.min.x,pe=$.max.y-$.min.y,Ce=$.isBox3?$.max.z-$.min.z:1,Re=$.min.x,ke=$.min.y,Ge=$.isBox3?$.min.z:0;else{const Zt=Math.pow(2,-W);ve=Math.floor(Rt.width*Zt),pe=Math.floor(Rt.height*Zt),C.isDataArrayTexture?Ce=Rt.depth:C.isData3DTexture?Ce=Math.floor(Rt.depth*Zt):Ce=1,Re=0,ke=0,Ge=0}j!==null?(Pe=j.x,lt=j.y,Nt=j.z):(Pe=0,lt=0,Nt=0);const ct=ue.convert(k.format),rn=ue.convert(k.type);let Ae;k.isData3DTexture?(N.setTexture3D(k,0),Ae=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(N.setTexture2DArray(k,0),Ae=D.TEXTURE_2D_ARRAY):(N.setTexture2D(k,0),Ae=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const Un=D.getParameter(D.UNPACK_ROW_LENGTH),et=D.getParameter(D.UNPACK_IMAGE_HEIGHT),hi=D.getParameter(D.UNPACK_SKIP_PIXELS),Ri=D.getParameter(D.UNPACK_SKIP_ROWS),ds=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Rt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Rt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Re),D.pixelStorei(D.UNPACK_SKIP_ROWS,ke),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge);const $s=C.isDataArrayTexture||C.isData3DTexture,dt=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const Zt=M.get(C),Er=M.get(k),Wt=M.get(Zt.__renderTarget),Tr=M.get(Er.__renderTarget);Me.bindFramebuffer(D.READ_FRAMEBUFFER,Wt.__webglFramebuffer),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,Tr.__webglFramebuffer);for(let Ks=0;Ks<Ce;Ks++)$s&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,M.get(C).__webglTexture,W,Ge+Ks),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,M.get(k).__webglTexture,he,Nt+Ks)),D.blitFramebuffer(Re,ke,ve,pe,Pe,lt,ve,pe,D.DEPTH_BUFFER_BIT,D.NEAREST);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(W!==0||C.isRenderTargetTexture||M.has(C)){const Zt=M.get(C),Er=M.get(k);Me.bindFramebuffer(D.READ_FRAMEBUFFER,tM),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,nM);for(let Wt=0;Wt<Ce;Wt++)$s?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Zt.__webglTexture,W,Ge+Wt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Zt.__webglTexture,W),dt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Er.__webglTexture,he,Nt+Wt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Er.__webglTexture,he),W!==0?D.blitFramebuffer(Re,ke,ve,pe,Pe,lt,ve,pe,D.COLOR_BUFFER_BIT,D.NEAREST):dt?D.copyTexSubImage3D(Ae,he,Pe,lt,Nt+Wt,Re,ke,ve,pe):D.copyTexSubImage2D(Ae,he,Pe,lt,Re,ke,ve,pe);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else dt?C.isDataTexture||C.isData3DTexture?D.texSubImage3D(Ae,he,Pe,lt,Nt,ve,pe,Ce,ct,rn,Rt.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Ae,he,Pe,lt,Nt,ve,pe,Ce,ct,Rt.data):D.texSubImage3D(Ae,he,Pe,lt,Nt,ve,pe,Ce,ct,rn,Rt):C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,he,Pe,lt,ve,pe,ct,rn,Rt.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,he,Pe,lt,Rt.width,Rt.height,ct,Rt.data):D.texSubImage2D(D.TEXTURE_2D,he,Pe,lt,ve,pe,ct,rn,Rt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Un),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,et),D.pixelStorei(D.UNPACK_SKIP_PIXELS,hi),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ri),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ds),he===0&&k.generateMipmaps&&D.generateMipmap(Ae),Me.unbindTexture()},this.initRenderTarget=function(C){M.get(C).__webglFramebuffer===void 0&&N.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?N.setTextureCube(C,0):C.isData3DTexture?N.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?N.setTexture2DArray(C,0):N.setTexture2D(C,0),Me.unbindTexture()},this.resetState=function(){R=0,z=0,O=null,Me.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const T_={type:"change"},Dm={type:"start"},$y={type:"end"},Ac=new Zu,w_=new Ir,bR=Math.cos(70*jT.DEG2RAD),zt=new H,Tn=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},md=1e-6;class CR extends Dw{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fa.ROTATE,MIDDLE:Fa.DOLLY,RIGHT:Fa.PAN},this.touches={ONE:ba.ROTATE,TWO:ba.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new is,this._lastTargetPosition=new H,this._quat=new is().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new J0,this._sphericalDelta=new J0,this._scale=1,this._panOffset=new H,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new H,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=RR.bind(this),this._onPointerDown=AR.bind(this),this._onPointerUp=PR.bind(this),this._onContextMenu=OR.bind(this),this._onMouseWheel=NR.bind(this),this._onKeyDown=IR.bind(this),this._onTouchStart=FR.bind(this),this._onTouchMove=UR.bind(this),this._onMouseDown=DR.bind(this),this._onMouseMove=LR.bind(this),this._interceptControlDown=kR.bind(this),this._interceptControlUp=zR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(T_),this.update(),this.state=ut.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;zt.copy(t).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Tn:i>Math.PI&&(i-=Tn),r<-Math.PI?r+=Tn:r>Math.PI&&(r-=Tn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=zt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new H(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ac.origin.copy(this.object.position),Ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ac.direction))<bR?this.object.lookAt(this.target):(w_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ac.intersectPlane(w_,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>md||8*(1-this._lastQuaternion.dot(this.object.quaternion))>md||this._lastTargetPosition.distanceToSquared(this.target)>md?(this.dispatchEvent(T_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Tn/60*this.autoRotateSpeed*e:Tn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zt.setFromMatrixColumn(t,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,t){this.screenSpacePanning===!0?zt.setFromMatrixColumn(t,1):(zt.setFromMatrixColumn(t,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;zt.copy(r).sub(this.target);let s=zt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function AR(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function RR(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function PR(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($y),this.state=ut.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function DR(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Fa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ut.DOLLY;break;case Fa.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ut.ROTATE}break;case Fa.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Dm)}function LR(n){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function NR(n){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(n.preventDefault(),this.dispatchEvent(Dm),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent($y))}function IR(n){this.enabled!==!1&&this._handleKeyDown(n)}function FR(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ba.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ut.TOUCH_ROTATE;break;case ba.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case ba.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ut.TOUCH_DOLLY_PAN;break;case ba.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Dm)}function UR(n){switch(this._trackPointer(n),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ut.NONE}}function OR(n){this.enabled!==!1&&n.preventDefault()}function kR(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zR(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class b_ extends $t{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Oe(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const da=new H,C_=new _t,A_=new _t,R_=new H,P_=new H;class BR{constructor(e={}){const t=this;let i,r,s,a;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:i,height:r}},this.render=function(g,v){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),C_.copy(v.matrixWorldInverse),A_.multiplyMatrices(v.projectionMatrix,C_),u(g,g,v),this.sortObjects&&p(g)},this.setSize=function(g,v){i=g,r=v,s=i/2,a=r/2,l.style.width=g+"px",l.style.height=v+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let v=0,_=g.children.length;v<_;v++)c(g.children[v])}function u(g,v,_){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){da.setFromMatrixPosition(g.matrixWorld),da.applyMatrix4(A_);const f=da.z>=-1&&da.z<=1&&g.layers.test(_.layers)===!0,m=g.element;m.style.display=f===!0?"":"none",f===!0&&(g.onBeforeRender(t,v,_),m.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(da.x*s+s)+"px,"+(-da.y*a+a)+"px)",m.parentNode!==l&&l.appendChild(m),g.onAfterRender(t,v,_));const x={distanceToCameraSquared:h(_,g)};o.objects.set(g,x)}for(let f=0,m=g.children.length;f<m;f++)u(g.children[f],v,_)}function h(g,v){return R_.setFromMatrixPosition(g.matrixWorld),P_.setFromMatrixPosition(v.matrixWorld),R_.distanceToSquared(P_)}function d(g){const v=[];return g.traverseVisible(function(_){_.isCSS2DObject&&v.push(_)}),v}function p(g){const v=d(g).sort(function(f,m){if(f.renderOrder!==m.renderOrder)return m.renderOrder-f.renderOrder;const x=o.objects.get(f).distanceToCameraSquared,S=o.objects.get(m).distanceToCameraSquared;return x-S}),_=v.length;for(let f=0,m=v.length;f<m;f++)v[f].element.style.zIndex=_-f}}}function rr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Ky(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},eo={duration:.5,overwrite:!1,delay:0},Lm,tn,Mt,oi=1e8,pt=1/oi,up=Math.PI*2,HR=up/4,VR=0,Zy=Math.sqrt,GR=Math.cos,WR=Math.sin,Kt=function(e){return typeof e=="string"},Lt=function(e){return typeof e=="function"},yr=function(e){return typeof e=="number"},Nm=function(e){return typeof e>"u"},$i=function(e){return typeof e=="object"},Dn=function(e){return e!==!1},Im=function(){return typeof window<"u"},Rc=function(e){return Lt(e)||Kt(e)},Qy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},pn=Array.isArray,jR=/random\([^)]+\)/g,XR=/,\s*/g,D_=/(?:-?\.?\d|\.)+/gi,Jy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ca=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,gd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,eS=/[+-]=-?[.\d]+/,qR=/[^,'"\[\]\s]+/gi,YR=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,wt,Ii,fp,Fm,$n={},bu={},tS,nS=function(e){return(bu=to(e,$n))&&Fn},Um=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},yl=function(e,t){return!t&&console.warn(e)},iS=function(e,t){return e&&($n[e]=t)&&bu&&(bu[e]=t)||$n},Sl=function(){return 0},$R={suppressEvents:!0,isStart:!0,kill:!1},Yc={suppressEvents:!0,kill:!1},KR={suppressEvents:!0},Om={},Qr=[],dp={},rS,Bn={},_d={},L_=30,$c=[],km="",zm=function(e){var t=e[0],i,r;if($i(t)||Lt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=$c.length;r--&&!$c[r].targetTest(t););i=$c[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new AS(e[r],i)))||e.splice(r,1);return e},Fs=function(e){return e._gsap||zm(li(e))[0]._gsap},sS=function(e,t,i){return(i=e[t])&&Lt(i)?e[t]():Nm(i)&&e.getAttribute&&e.getAttribute(t)||i},Ln=function(e,t){return(e=e.split(",")).forEach(t)||e},It=function(e){return Math.round(e*1e5)/1e5||0},Et=function(e){return Math.round(e*1e7)/1e7||0},ka=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},ZR=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Cu=function(){var e=Qr.length,t=Qr.slice(0),i,r;for(dp={},Qr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Bm=function(e){return!!(e._initted||e._startAt||e.add)},aS=function(e,t,i,r){Qr.length&&!tn&&Cu(),e.render(t,i,!!(tn&&t<0&&Bm(e))),Qr.length&&!tn&&Cu()},oS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(qR).length<2?t:Kt(e)?e.trim():e},lS=function(e){return e},Kn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},QR=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},to=function(e,t){for(var i in t)e[i]=t[i];return e},N_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=$i(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Au=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Ko=function(e){var t=e.parent||wt,i=e.keyframes?QR(pn(e.keyframes)):Kn;if(Dn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},JR=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},cS=function(e,t,i,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},tf=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},rs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Us=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},eP=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},hp=function(e,t,i,r){return e._startAt&&(tn?e._startAt.revert(Yc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},tP=function n(e){return!e||e._ts&&n(e.parent)},I_=function(e){return e._repeat?no(e._tTime,e=e.duration()+e._rDelay)*e:0},no=function(e,t){var i=Math.floor(e=Et(e/t));return e&&i===e?i-1:i},Ru=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},nf=function(e){return e._end=Et(e._start+(e._tDur/Math.abs(e._ts||e._rts||pt)||0))},rf=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Et(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),nf(e),i._dirty||Us(i,e)),e},uS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Ru(e.rawTime(),t),(!t._dur||Nl(0,t.totalDuration(),i)-t._tTime>pt)&&t.render(i,!0)),Us(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-pt}},Oi=function(e,t,i,r){return t.parent&&rs(t),t._start=Et((yr(i)?i:i||e!==wt?ei(e,i,t):e._time)+t._delay),t._end=Et(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),cS(e,t,"_first","_last",e._sort?"_start":0),pp(t)||(e._recent=t),r||uS(e,t),e._ts<0&&rf(e,e._tTime),e},fS=function(e,t){return($n.ScrollTrigger||Um("scrollTrigger",t))&&$n.ScrollTrigger.create(t,e)},dS=function(e,t,i,r,s){if(Vm(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!tn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&rS!==Vn.frame)return Qr.push(e),e._lazy=[s,r],1},nP=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},pp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},iP=function(e,t,i,r){var s=e.ratio,a=t<0||!t&&(!e._start&&nP(e)&&!(!e._initted&&pp(e))||(e._ts<0||e._dp._ts<0)&&!pp(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Nl(0,e._tDur,t),u=no(l,o),e._yoyo&&u&1&&(a=1-a),u!==no(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||tn||r||e._zTime===pt||!t&&e._zTime){if(!e._initted&&dS(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?pt:0),i||(i=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&hp(e,t,i,!0),e._onUpdate&&!i&&Wn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Wn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&rs(e,1),!i&&!tn&&(Wn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},rP=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},io=function(e,t,i,r){var s=e._repeat,a=Et(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Et(a*(s+1)+e._rDelay*s):a,o>0&&!r&&rf(e,e._tTime=e._tDur*o),e.parent&&nf(e),i||Us(e.parent,e),e},F_=function(e){return e instanceof vn?Us(e):io(e,e._dur)},sP={_start:0,endTime:Sl,totalDuration:Sl},ei=function n(e,t,i){var r=e.labels,s=e._recent||sP,a=e.duration()>=oi?s.endTime(!1):e._dur,o,l,c;return Kt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(pn(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},Zo=function(e,t,i){var r=yr(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Dn(l.vars.inherit)&&l.parent;a.immediateRender=Dn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Ot(t[0],a,t[s+1])},us=function(e,t){return e||e===0?t(e):t},Nl=function(e,t,i){return i<e?e:i>t?t:i},fn=function(e,t){return!Kt(e)||!(t=YR.exec(e))?"":t[1]},aP=function(e,t,i){return us(i,function(r){return Nl(e,t,r)})},mp=[].slice,hS=function(e,t){return e&&$i(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&$i(e[0]))&&!e.nodeType&&e!==Ii},oP=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Kt(r)&&!t||hS(r,1)?(s=i).push.apply(s,li(r)):i.push(r)})||i},li=function(e,t,i){return Mt&&!t&&Mt.selector?Mt.selector(e):Kt(e)&&!i&&(fp||!ro())?mp.call((t||Fm).querySelectorAll(e),0):pn(e)?oP(e,i):hS(e)?mp.call(e,0):e?[e]:[]},gp=function(e){return e=li(e)[0]||yl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return li(t,i.querySelectorAll?i:i===e?yl("Invalid scope")||Fm.createElement("div"):e)}},pS=function(e){return e.sort(function(){return .5-Math.random()})},mS=function(e){if(Lt(e))return e;var t=$i(e)?e:{each:e},i=Os(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,h=r;return Kt(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],h=r[1]),function(d,p,g){var v=(g||t).length,_=a[v],f,m,x,S,w,T,b,y,E;if(!_){if(E=t.grid==="auto"?0:(t.grid||[1,oi])[1],!E){for(b=-oi;b<(b=g[E++].getBoundingClientRect().left)&&E<v;);E<v&&E--}for(_=a[v]=[],f=l?Math.min(E,v)*u-.5:r%E,m=E===oi?0:l?v*h/E-.5:r/E|0,b=0,y=oi,T=0;T<v;T++)x=T%E-f,S=m-(T/E|0),_[T]=w=c?Math.abs(c==="y"?S:x):Zy(x*x+S*S),w>b&&(b=w),w<y&&(y=w);r==="random"&&pS(_),_.max=b-y,_.min=y,_.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(E>v?v-1:c?c==="y"?v/E:E:Math.max(E,v/E))||0)*(r==="edges"?-1:1),_.b=v<0?s-v:s,_.u=fn(t.amount||t.each)||0,i=i&&v<0?wS(i):i}return v=(_[d]-_.min)/_.max||0,Et(_.b+(i?i(v):v)*_.v)+_.u}},_p=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Et(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(yr(i)?0:fn(i))}},gS=function(e,t){var i=pn(e),r,s;return!i&&$i(e)&&(r=i=e.radius||oi,e.values?(e=li(e.values),(s=!yr(e[0]))&&(r*=r)):e=_p(e.increment)),us(t,i?Lt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=oi,u=0,h=e.length,d,p;h--;)s?(d=e[h].x-o,p=e[h].y-l,d=d*d+p*p):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!r||c<=r?e[u]:a,s||u===a||yr(a)?u:u+fn(a)}:_p(e))},_S=function(e,t,i,r){return us(pn(e)?!t:i===!0?!!(i=0):!r,function(){return pn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},lP=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,a){return a(s)},r)}},cP=function(e,t){return function(i){return e(parseFloat(i))+(t||fn(i))}},uP=function(e,t,i){return xS(e,t,0,1,i)},vS=function(e,t,i){return us(i,function(r){return e[~~t(r)]})},fP=function n(e,t,i){var r=t-e;return pn(e)?vS(e,n(0,e.length),t):us(i,function(s){return(r+(s-e)%r)%r+e})},dP=function n(e,t,i){var r=t-e,s=r*2;return pn(e)?vS(e,n(0,e.length-1),t):us(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Ml=function(e){return e.replace(jR,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(XR);return _S(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},xS=function(e,t,i,r,s){var a=t-e,o=r-i;return us(s,function(l){return i+((l-e)/a*o||0)})},hP=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=Kt(e),o={},l,c,u,h,d;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(pn(e)&&!pn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(n(e[c-1],e[c]));h--,s=function(g){g*=h;var v=Math.min(d,~~g);return u[v](g-v)},i=t}else r||(e=to(pn(e)?[]:{},e));if(!u){for(l in t)Hm.call(o,e,l,"get",t[l]);s=function(g){return jm(g,o)||(a?e.p:e)}}}return us(i,s)},U_=function(e,t,i){var r=e.labels,s=oi,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Wn=function(e,t,i){var r=e.vars,s=r[t],a=Mt,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Qr.length&&Cu(),o&&(Mt=o),u=l?s.apply(c,l):s.call(c),Mt=a,u},Oo=function(e){return rs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!tn),e.progress()<1&&Wn(e,"onInterrupt"),e},Aa,yS=[],SS=function(e){if(e)if(e=!e.name&&e.default||e,Im()||e.headless){var t=e.name,i=Lt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Sl,render:jm,add:Hm,kill:RP,modifier:AP,rawVars:0},a={targetTest:0,get:0,getSetter:Wm,aliases:{},register:0};if(ro(),e!==r){if(Bn[t])return;Kn(r,Kn(Au(e,s),a)),to(r.prototype,to(s,Au(e,a))),Bn[r.prop=t]=r,e.targetTest&&($c.push(r),Om[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}iS(t,r),e.register&&e.register(Fn,r,Nn)}else yS.push(e)},ht=255,ko={aqua:[0,ht,ht],lime:[0,ht,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ht],navy:[0,0,128],white:[ht,ht,ht],olive:[128,128,0],yellow:[ht,ht,0],orange:[ht,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ht,0,0],pink:[ht,192,203],cyan:[0,ht,ht],transparent:[ht,ht,ht,0]},vd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ht+.5|0},MS=function(e,t,i){var r=e?yr(e)?[e>>16,e>>8&ht,e&ht]:0:ko.black,s,a,o,l,c,u,h,d,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ko[e])r=ko[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ht,r&ht,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ht,e&ht]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(D_),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=vd(l+1/3,s,a),r[1]=vd(l,s,a),r[2]=vd(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(Jy),i&&r.length<4&&(r[3]=1),r}else r=e.match(D_)||ko.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/ht,a=r[1]/ht,o=r[2]/ht,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(p=h-d,c=u>.5?p/(2-h-d):p/(h+d),l=h===s?(a-o)/p+(a<o?6:0):h===a?(o-s)/p+2:(s-a)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},ES=function(e){var t=[],i=[],r=-1;return e.split(Jr).forEach(function(s){var a=s.match(Ca)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},O_=function(e,t,i){var r="",s=(e+r).match(Jr),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=MS(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=ES(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Jr,"1").split(Ca),h=c.length-1;o<h;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Jr),h=c.length-1;o<h;o++)r+=c[o]+s[o];return r+c[h]},Jr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ko)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),pP=/hsl[a]?\(/,TS=function(e){var t=e.join(" "),i;if(Jr.lastIndex=0,Jr.test(t))return i=pP.test(t),e[1]=O_(e[1],i),e[0]=O_(e[0],i,ES(e[1])),!0},El,Vn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,c,u,h,d,p,g=function v(_){var f=n()-r,m=_===!0,x,S,w,T;if((f>e||f<0)&&(i+=f-t),r+=f,w=r-i,x=w-a,(x>0||m)&&(T=++h.frame,d=w-h.time*1e3,h.time=w=w/1e3,a+=x+(x>=s?4:s-x),S=1),m||(l=c(v)),S)for(p=0;p<o.length;p++)o[p](w,d,T,_)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(_){return d/(1e3/(_||60))},wake:function(){tS&&(!fp&&Im()&&(Ii=fp=window,Fm=Ii.document||{},$n.gsap=Fn,(Ii.gsapVersions||(Ii.gsapVersions=[])).push(Fn.version),nS(bu||Ii.GreenSockGlobals||!Ii.gsap&&Ii||{}),yS.forEach(SS)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(_){return setTimeout(_,a-h.time*1e3+1|0)},El=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),El=0,c=Sl},lagSmoothing:function(_,f){e=_||1/0,t=Math.min(f||33,e)},fps:function(_){s=1e3/(_||240),a=h.time*1e3+s},add:function(_,f,m){var x=f?function(S,w,T,b){_(S,w,T,b),h.remove(x)}:_;return h.remove(_),o[m?"unshift":"push"](x),ro(),x},remove:function(_,f){~(f=o.indexOf(_))&&o.splice(f,1)&&p>=f&&p--},_listeners:o},h}(),ro=function(){return!El&&Vn.wake()},Ye={},mP=/^[\d.\-M][\d.\-,\s]/,gP=/["']/g,_P=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(gP,"").trim():+c,r=l.substr(o+1).trim();return t},vP=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},xP=function(e){var t=(e+"").split("("),i=Ye[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[_P(t[1])]:vP(e).split(",").map(oS)):Ye._CE&&mP.test(e)?Ye._CE("",e):i},wS=function(e){return function(t){return 1-e(1-t)}},bS=function n(e,t){for(var i=e._first,r;i;)i instanceof vn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Os=function(e,t){return e&&(Lt(e)?e:Ye[e]||xP(e))||t},Ys=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},a;return Ln(e,function(o){Ye[o]=$n[o]=s,Ye[a=o.toLowerCase()]=i;for(var l in s)Ye[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ye[o+"."+l]=s[l]}),s},CS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},xd=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/up*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*WR((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:CS(o);return s=up/s,l.config=function(c,u){return n(e,c,u)},l},yd=function n(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:CS(i);return r.config=function(s){return n(e,s)},r};Ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Ys(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ye.Linear.easeNone=Ye.none=Ye.Linear.easeIn;Ys("Elastic",xd("in"),xd("out"),xd());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};Ys("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ys("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Ys("Circ",function(n){return-(Zy(1-n*n)-1)});Ys("Sine",function(n){return n===1?1:-GR(n*HR)+1});Ys("Back",yd("in"),yd("out"),yd());Ye.SteppedEase=Ye.steps=$n.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,a=1-pt;return function(o){return((r*Nl(0,a,o)|0)+s)*i}}};eo.ease=Ye["quad.out"];Ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return km+=n+","+n+"Params,"});var AS=function(e,t){this.id=VR++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:sS,this.set=t?t.getSetter:Wm},Tl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,io(this,+t.duration,1,1),this.data=t.data,Mt&&(this._ctx=Mt,Mt.data.push(this)),El||Vn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,io(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(ro(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(rf(this,i),!s._dp||s.parent||uS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Oi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===pt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),aS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+I_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+I_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?no(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-pt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Ru(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-pt?0:this._rts,this.totalTime(Nl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),nf(this),eP(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ro(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pt&&(this._tTime-=pt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Et(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Oi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Dn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ru(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=KR);var r=tn;return tn=i,Bm(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),tn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,F_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,F_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(ei(this,i),Dn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Dn(r)),this._dur||(this._zTime=-pt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-pt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-pt)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=Lt(i)?i:lS,l=function(){var u=r.then;r.then=null,s&&s(),Lt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Oo(this)},n}();Kn(Tl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pt,_prom:0,_ps:!1,_rts:1});var vn=function(n){Ky(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Dn(i.sortChildren),wt&&Oi(i.parent||wt,rr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&fS(rr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Zo(0,arguments,this),this},t.from=function(r,s,a){return Zo(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Zo(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Ko(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ot(r,s,ei(this,a),1),this},t.call=function(r,s,a){return Oi(this,Ot.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Ot(r,a,ei(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Ko(a).immediateRender=Dn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,h){return o.startAt=a,Ko(o).immediateRender=Dn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,h)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Et(r),h=this._zTime<0!=r<0&&(this._initted||!c),d,p,g,v,_,f,m,x,S,w,T,b;if(this!==wt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),d=u,S=this._start,x=this._ts,f=!x,h&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,a);if(d=Et(u%_),u===l?(v=this._repeat,d=c):(w=Et(u/_),v=~~w,v&&v===w&&(d=c,v--),d>c&&(d=c)),w=no(this._tTime,_),!o&&this._tTime&&w!==v&&this._tTime-w*_-this._dur<=0&&(w=v),T&&v&1&&(d=c-d,b=1),v!==w&&!this._lock){var y=T&&w&1,E=y===(T&&v&1);if(v<w&&(y=!y),o=y?0:u%c?c:u,this._lock=1,this.render(o||(b?0:Et(v*_)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Wn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,w=v),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,o=y?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;bS(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=rP(this,Et(o),Et(d)),m&&(u-=d-(d=m._start))),this._tTime=u,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!w&&(Wn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||d>=p._start)&&p._ts&&m!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,a),d!==this._time||!this._ts&&!f){m=0,g&&(u+=this._zTime=-pt);break}}p=g}else{p=this._last;for(var L=r<0?r:d;p;){if(g=p._prev,(p._act||L<=p._end)&&p._ts&&m!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(L-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(L-p._start)*p._ts,s,a||tn&&Bm(p)),d!==this._time||!this._ts&&!f){m=0,g&&(u+=this._zTime=L?-pt:pt);break}}p=g}}if(m&&!s&&(this.pause(),m.render(d>=o?0:-pt)._zTime=d>=o?1:-1,this._ts))return this._start=S,nf(this),this.render(r,s,a);this._onUpdate&&!s&&Wn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&rs(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(Wn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(yr(s)||(s=ei(this,s,r)),!(r instanceof Tl)){if(pn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Kt(r))return this.addLabel(r,s);if(Lt(r))r=Ot.delayedCall(0,r);else return this}return this!==r?Oi(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-oi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ot?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Kt(r)?this.removeLabel(r):Lt(r)?this.killTweensOf(r):(r.parent===this&&tf(this,r),r===this._recent&&(this._recent=this._last),Us(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Et(Vn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=ei(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Ot.delayedCall(0,s||Sl,a);return o.data="isPause",this._hasPause=1,Oi(this,o,ei(this,r))},t.removePause=function(r){var s=this._first;for(r=ei(this,r);s;)s._start===r&&s.data==="isPause"&&rs(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Hr!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=li(r),l=this._first,c=yr(s),u;l;)l instanceof Ot?ZR(l._targets,o)&&(c?(!Hr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=ei(a,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,p,g=Ot.to(a,Kn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||pt,onStart:function(){if(a.pause(),!p){var _=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==_&&io(g,_,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,Kn({startAt:{time:ei(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),U_(this,ei(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),U_(this,ei(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+pt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=Et(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Us(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Us(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=oi,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Oi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=Et(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;io(a,a===wt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(wt._ts&&(aS(wt,Ru(r,wt)),rS=Vn.frame),Vn.frame>=L_){L_+=qn.autoSleep||120;var s=wt._first;if((!s||!s._ts)&&qn.autoSleep&&Vn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Vn.sleep()}}},e}(Tl);Kn(vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var yP=function(e,t,i,r,s,a,o){var l=new Nn(this._pt,e,t,0,1,IS,null,s),c=0,u=0,h,d,p,g,v,_,f,m;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=Ml(r)),a&&(m=[i,r],a(m,e,t),i=m[0],r=m[1]),d=i.match(gd)||[];h=gd.exec(r);)g=h[0],v=r.substring(c,h.index),p?p=(p+1)%5:v.substr(-5)==="rgba("&&(p=1),g!==d[u++]&&(_=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:v||u===1?v:",",s:_,c:g.charAt(1)==="="?ka(_,g)-_:parseFloat(g)-_,m:p&&p<4?Math.round:0},c=gd.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(eS.test(r)||f)&&(l.e=0),this._pt=l,l},Hm=function(e,t,i,r,s,a,o,l,c,u){Lt(r)&&(r=r(s||0,e,a));var h=e[t],d=i!=="get"?i:Lt(h)?c?e[t.indexOf("set")||!Lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=Lt(h)?c?wP:LS:Gm,g;if(Kt(r)&&(~r.indexOf("random(")&&(r=Ml(r)),r.charAt(1)==="="&&(g=ka(d,r)+(fn(d)||0),(g||g===0)&&(r=g))),!u||d!==r||vp)return!isNaN(d*r)&&r!==""?(g=new Nn(this._pt,e,t,+d||0,r-(d||0),typeof h=="boolean"?CP:NS,0,p),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Um(t,r),yP.call(this,e,t,d,r,p,l||qn.stringFilter,c))},SP=function(e,t,i,r,s){if(Lt(e)&&(e=Qo(e,s,t,i,r)),!$i(e)||e.style&&e.nodeType||pn(e)||Qy(e))return Kt(e)?Qo(e,s,t,i,r):e;var a={},o;for(o in e)a[o]=Qo(e[o],s,t,i,r);return a},RS=function(e,t,i,r,s,a){var o,l,c,u;if(Bn[e]&&(o=new Bn[e]).init(s,o.rawVars?t[e]:SP(t[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new Nn(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Aa))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Hr,vp,Vm=function n(e,t,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,d=r.keyframes,p=r.autoRevert,g=e._dur,v=e._startAt,_=e._targets,f=e.parent,m=f&&f.data==="nested"?f.vars.targets:_,x=e._overwrite==="auto"&&!Lm,S=e.timeline,w,T,b,y,E,L,R,z,O,X,B,V,F;if(S&&(!d||!s)&&(s="none"),e._ease=Os(s,eo.ease),e._yEase=h?wS(Os(h===!0?s:h,eo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!r.runBackwards,!S||d&&!r.stagger){if(z=_[0]?Fs(_[0]).harness:0,V=z&&r[z.prop],w=Au(r,Om),v&&(v._zTime<0&&v.progress(1),t<0&&u&&o&&!p?v.render(-1,!0):v.revert(u&&g?Yc:$R),v._lazy=0),a){if(rs(e._startAt=Ot.set(_,Kn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!v&&Dn(l),startAt:null,delay:0,onUpdate:c&&function(){return Wn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn||!o&&!p)&&e._startAt.revert(Yc),o&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!v){if(t&&(o=!1),b=Kn({overwrite:!1,data:"isFromStart",lazy:o&&!v&&Dn(l),immediateRender:o,stagger:0,parent:f},w),V&&(b[z.prop]=V),rs(e._startAt=Ot.set(_,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn?e._startAt.revert(Yc):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,pt,pt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Dn(l)||l&&!g,T=0;T<_.length;T++){if(E=_[T],R=E._gsap||zm(_)[T]._gsap,e._ptLookup[T]=X={},dp[R.id]&&Qr.length&&Cu(),B=m===_?T:m.indexOf(E),z&&(O=new z).init(E,V||w,e,B,m)!==!1&&(e._pt=y=new Nn(e._pt,E,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(G){X[G]=y}),O.priority&&(L=1)),!z||V)for(b in w)Bn[b]&&(O=RS(b,w,e,B,E,m))?O.priority&&(L=1):X[b]=y=Hm.call(e,E,b,"get",w[b],B,m,0,r.stringFilter);e._op&&e._op[T]&&e.kill(E,e._op[T]),x&&e._pt&&(Hr=e,wt.killTweensOf(E,X,e.globalTime(t)),F=!e.parent,Hr=0),e._pt&&l&&(dp[R.id]=1)}L&&FS(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!F,d&&t<=0&&S.render(oi,!0,!0)},MP=function(e,t,i,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,p;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(u=d[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return vp=1,e.vars[t]="+=0",Vm(e,o),vp=0,l?yl(t+" not eligible for reset"):1;c.push(u)}for(p=c.length;p--;)h=c[p],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,h.e&&(h.e=It(i)+fn(h.e)),h.b&&(h.b=u.s+fn(h.b))},EP=function(e,t){var i=e[0]?Fs(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return t;s=to({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},TP=function(e,t,i,r){var s=t.ease||r||"power1.inOut",a,o;if(pn(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Qo=function(e,t,i,r,s){return Lt(e)?e.call(t,i,r,s):Kt(e)&&~e.indexOf("random(")?Ml(e):e},PS=km+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",DS={};Ln(PS+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return DS[n]=1});var Ot=function(n){Ky(e,n);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:Ko(r))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,p=l.overwrite,g=l.keyframes,v=l.defaults,_=l.scrollTrigger,f=l.yoyoEase,m=r.parent||wt,x=(pn(i)||Qy(i)?yr(i[0]):"length"in r)?[i]:li(i),S,w,T,b,y,E,L,R;if(o._targets=x.length?zm(x):yl("GSAP target "+i+" not found. https://gsap.com",!qn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||d||Rc(c)||Rc(u)){if(r=o.vars,S=o.timeline=new vn({data:"nested",defaults:v||{},targets:m&&m.data==="nested"?m.vars.targets:x}),S.kill(),S.parent=S._dp=rr(o),S._start=0,d||Rc(c)||Rc(u)){if(b=x.length,L=d&&mS(d),$i(d))for(y in d)~PS.indexOf(y)&&(R||(R={}),R[y]=d[y]);for(w=0;w<b;w++)T=Au(r,DS),T.stagger=0,f&&(T.yoyoEase=f),R&&to(T,R),E=x[w],T.duration=+Qo(c,rr(o),w,E,x),T.delay=(+Qo(u,rr(o),w,E,x)||0)-o._delay,!d&&b===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),S.to(E,T,L?L(w,E,x):0),S._ease=Ye.none;S.duration()?c=u=0:o.timeline=0}else if(g){Ko(Kn(S.vars.defaults,{ease:"none"})),S._ease=Os(g.ease||r.ease||"none");var z=0,O,X,B;if(pn(g))g.forEach(function(V){return S.to(x,V,">")}),S.duration();else{T={};for(y in g)y==="ease"||y==="easeEach"||TP(y,g[y],T,g.easeEach);for(y in T)for(O=T[y].sort(function(V,F){return V.t-F.t}),z=0,w=0;w<O.length;w++)X=O[w],B={ease:X.e,duration:(X.t-(w?O[w-1].t:0))/100*c},B[y]=X.v,S.to(x,B,z),z+=B.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return p===!0&&!Lm&&(Hr=rr(o),wt.killTweensOf(x),Hr=0),Oi(m,rr(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!c&&!g&&o._start===Et(m._time)&&Dn(h)&&tP(rr(o))&&m.data!=="nested")&&(o._tTime=-pt,o.render(Math.max(0,-u)||0)),_&&fS(rr(o),_),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-pt&&!u?l:r<pt?0:r,d,p,g,v,_,f,m,x,S;if(!c)iP(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,x=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(v*100+r,s,a);if(d=Et(h%v),h===l?(g=this._repeat,d=c):(_=Et(h/v),g=~~_,g&&g===_?(d=c,g--):d>c&&(d=c)),f=this._yoyo&&g&1,f&&(S=this._yEase,d=c-d),_=no(this._tTime,v),d===o&&!a&&this._initted&&g===_)return this._tTime=h,this;g!==_&&(x&&this._yEase&&bS(x,f),this.vars.repeatRefresh&&!f&&!this._lock&&d!==v&&this._initted&&(this._lock=a=1,this.render(Et(v*g),!0).invalidate()._lock=0))}if(!this._initted){if(dS(this,u?r:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==_))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=m=(S||this._ease)(d/c),this._from&&(this.ratio=m=1-m),!o&&h&&!s&&!_&&(Wn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(m,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&hp(this,r,s,a),Wn(this,"onUpdate")),this._repeat&&g!==_&&this.vars.onRepeat&&!s&&this.parent&&Wn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&hp(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&rs(this,1),!s&&!(u&&!o)&&(h||o||f)&&(Wn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){El||Vn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Vm(this,c),u=this._ease(c/this._dur),MP(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(rf(this,0),this.parent||cS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Oo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!tn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Hr&&Hr.vars.overwrite!==!0)._first||Oo(this),this.parent&&a!==this.timeline.totalDuration()&&io(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?li(r):o,c=this._ptLookup,u=this._pt,h,d,p,g,v,_,f;if((!s||s==="all")&&JR(o,l))return s==="all"&&(this._pt=0),Oo(this);for(h=this._op=this._op||[],s!=="all"&&(Kt(s)&&(v={},Ln(s,function(m){return v[m]=1}),s=v),s=EP(o,s)),f=o.length;f--;)if(~l.indexOf(o[f])){d=c[f],s==="all"?(h[f]=s,g=d,p={}):(p=h[f]=h[f]||{},g=s);for(v in g)_=d&&d[v],_&&((!("kill"in _.d)||_.d.kill(v)===!0)&&tf(this,_,"_pt"),delete d[v]),p!=="all"&&(p[v]=1)}return this._initted&&!this._pt&&u&&Oo(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Zo(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Zo(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return wt.killTweensOf(r,s,a)},e}(Tl);Kn(Ot.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ln("staggerTo,staggerFrom,staggerFromTo",function(n){Ot[n]=function(){var e=new vn,t=mp.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Gm=function(e,t,i){return e[t]=i},LS=function(e,t,i){return e[t](i)},wP=function(e,t,i,r){return e[t](r.fp,i)},bP=function(e,t,i){return e.setAttribute(t,i)},Wm=function(e,t){return Lt(e[t])?LS:Nm(e[t])&&e.setAttribute?bP:Gm},NS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},CP=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},IS=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},jm=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},AP=function(e,t,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,i),s=a},RP=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?tf(this,t,"_pt"):t.dep||(i=1),t=r;return!i},PP=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},FS=function(e){for(var t=e._pt,i,r,s,a;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=s},Nn=function(){function n(t,i,r,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||NS,this.d=l||this,this.set=c||Gm,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=PP,this.m=i,this.mt=s,this.tween=r},n}();Ln(km+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Om[n]=1});$n.TweenMax=$n.TweenLite=Ot;$n.TimelineLite=$n.TimelineMax=vn;wt=new vn({sortChildren:!1,defaults:eo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});qn.stringFilter=TS;var ks=[],Kc={},DP=[],k_=0,LP=0,Sd=function(e){return(Kc[e]||DP).map(function(t){return t()})},xp=function(){var e=Date.now(),t=[];e-k_>2&&(Sd("matchMediaInit"),ks.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=Ii.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),Sd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),k_=e,Sd("matchMedia"))},US=function(){function n(t,i){this.selector=i&&gp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=LP++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Lt(i)&&(s=r,r=i,i=Lt);var a=this,o=function(){var c=Mt,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=gp(s)),Mt=a,h=r.apply(a,arguments),Lt(h)&&a._r.push(h),Mt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,i===Lt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=Mt;Mt=null,i(this),Mt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Ot&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof vn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ot)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=ks.length;a--;)ks[a].id===this.id&&ks.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),NP=function(){function n(t){this.contexts=[],this.scope=t,Mt&&Mt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){$i(i)||(i={matches:i});var a=new US(0,s||this.scope),o=a.conditions={},l,c,u;Mt&&!a.selector&&(a.selector=Mt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?u=1:(l=Ii.matchMedia(i[c]),l&&(ks.indexOf(a)<0&&ks.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(xp):l.addEventListener("change",xp)));return u&&r(a,function(h){return a.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Pu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return SS(r)})},timeline:function(e){return new vn(e)},getTweensOf:function(e,t){return wt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Kt(e)&&(e=li(e)[0]);var s=Fs(e||{}).get,a=i?lS:oS;return i==="native"&&(i=""),e&&(t?a((Bn[t]&&Bn[t].get||s)(e,t,i,r)):function(o,l,c){return a((Bn[o]&&Bn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=li(e),e.length>1){var r=e.map(function(u){return Fn.quickSetter(u,t,i)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var a=Bn[t],o=Fs(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Aa._pt=0,h.init(e,i?u+i:u,Aa,0,[e]),h.render(1,h),Aa._pt&&jm(1,Aa)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var r,s=Fn.to(e,Kn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Os(e.ease,eo.ease)),N_(eo,e||{})},config:function(e){return N_(qn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Bn[o]&&!$n[o]&&yl(t+" effect requires "+o+" plugin.")}),_d[t]=function(o,l,c){return i(li(o),Kn(l||{},s),c)},a&&(vn.prototype[t]=function(o,l,c){return this.add(_d[t](o,$i(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ye[e]=Os(t)},parseEase:function(e,t){return arguments.length?Os(e,t):Ye},getById:function(e){return wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new vn(e),r,s;for(i.smoothChildTiming=Dn(e.smoothChildTiming),wt.remove(i),i._dp=0,i._time=i._tTime=wt._time,r=wt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Ot&&r.vars.onComplete===r._targets[0]))&&Oi(i,r,r._start-r._delay),r=s;return Oi(wt,i,0),i},context:function(e,t){return e?new US(e,t):Mt},matchMedia:function(e){return new NP(e)},matchMediaRefresh:function(){return ks.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||xp()},addEventListener:function(e,t){var i=Kc[e]||(Kc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Kc[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:fP,wrapYoyo:dP,distribute:mS,random:_S,snap:gS,normalize:uP,getUnit:fn,clamp:aP,splitColor:MS,toArray:li,selector:gp,mapRange:xS,pipe:lP,unitize:cP,interpolate:hP,shuffle:pS},install:nS,effects:_d,ticker:Vn,updateRoot:vn.updateRoot,plugins:Bn,globalTimeline:wt,core:{PropTween:Nn,globals:iS,Tween:Ot,Timeline:vn,Animation:Tl,getCache:Fs,_removeLinkedListItem:tf,reverting:function(){return tn},context:function(e){return e&&Mt&&(Mt.data.push(e),e._ctx=Mt),Mt},suppressOverwrites:function(e){return Lm=e}}};Ln("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Pu[n]=Ot[n]});Vn.add(vn.updateRoot);Aa=Pu.to({},{duration:0});var IP=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},FP=function(e,t){var i=e._targets,r,s,a;for(r in t)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=IP(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[s],r))},Md=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Kt(s)&&(l={},Ln(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}FP(o,s)}}}},Fn=Pu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)tn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Md("roundProps",_p),Md("modifiers"),Md("snap",gS))||Pu;Ot.version=vn.version=Fn.version="3.14.2";tS=1;Im()&&ro();Ye.Power0;Ye.Power1;Ye.Power2;Ye.Power3;Ye.Power4;Ye.Linear;Ye.Quad;Ye.Cubic;Ye.Quart;Ye.Quint;Ye.Strong;Ye.Elastic;Ye.Back;Ye.SteppedEase;Ye.Bounce;Ye.Sine;Ye.Expo;Ye.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var z_,Vr,za,Xm,Ls,B_,qm,UP=function(){return typeof window<"u"},Sr={},Es=180/Math.PI,Ba=Math.PI/180,ha=Math.atan2,H_=1e8,Ym=/([A-Z])/g,OP=/(left|right|width|margin|padding|x)/i,kP=/[\s,\(]\S/,Bi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},yp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zP=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},BP=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},HP=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},VP=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},OS=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},kS=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},GP=function(e,t,i){return e.style[t]=i},WP=function(e,t,i){return e.style.setProperty(t,i)},jP=function(e,t,i){return e._gsap[t]=i},XP=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},qP=function(e,t,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},YP=function(e,t,i,r,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},bt="transform",In=bt+"Origin",$P=function n(e,t){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in Sr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Bi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=ar(r,o)}):this.tfm[e]=a.x?a[e]:ar(r,e),e===In&&(this.tfm.zOrigin=a.zOrigin);else return Bi.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(bt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(In,t,"")),e=bt}(s||t)&&this.props.push(e,t,s[e])},zS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},KP=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ym,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=qm(),(!s||!s.isStart)&&!i[bt]&&(zS(i),r.zOrigin&&i[In]&&(i[In]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},BS=function(e,t){var i={target:e,props:[],revert:KP,save:$P};return e._gsap||Fn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},HS,Sp=function(e,t){var i=Vr.createElementNS?Vr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Vr.createElement(e);return i&&i.style?i:Vr.createElement(e)},jn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Ym,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,so(t)||t,1)||""},V_="O,Moz,ms,Ms,Webkit".split(","),so=function(e,t,i){var r=t||Ls,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(V_[a]+e in s););return a<0?null:(a===3?"ms":a>=0?V_[a]:"")+e},Mp=function(){UP()&&window.document&&(z_=window,Vr=z_.document,za=Vr.documentElement,Ls=Sp("div")||{style:{}},Sp("div"),bt=so(bt),In=bt+"Origin",Ls.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",HS=!!so("perspective"),qm=Fn.core.reverting,Xm=1)},G_=function(e){var t=e.ownerSVGElement,i=Sp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),za.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),za.removeChild(i),s},W_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},VS=function(e){var t,i;try{t=e.getBBox()}catch{t=G_(e),i=1}return t&&(t.width||t.height)||i||(t=G_(e)),t&&!t.width&&!t.x&&!t.y?{x:+W_(e,["x","cx","x1"])||0,y:+W_(e,["y","cy","y1"])||0,width:0,height:0}:t},GS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&VS(e))},ss=function(e,t){if(t){var i=e.style,r;t in Sr&&t!==In&&(t=bt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Ym,"-$1").toLowerCase())):i.removeAttribute(t)}},Gr=function(e,t,i,r,s,a){var o=new Nn(e._pt,t,i,0,1,a?kS:OS);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},j_={deg:1,rad:1,turn:1},ZP={grid:1,flex:1},as=function n(e,t,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Ls.style,l=OP.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=r==="px",p=r==="%",g,v,_,f;if(r===a||!s||j_[r]||j_[a])return s;if(a!=="px"&&!d&&(s=n(e,t,i,"px")),f=e.getCTM&&GS(e),(p||a==="%")&&(Sr[t]||~t.indexOf("adius")))return g=f?e.getBBox()[l?"width":"height"]:e[u],It(p?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(d?a:r),v=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,f&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===Vr||!v.appendChild)&&(v=Vr.body),_=v._gsap,_&&p&&_.width&&l&&_.time===Vn.time&&!_.uncache)return It(s/_.width*h);if(p&&(t==="height"||t==="width")){var m=e.style[t];e.style[t]=h+r,g=e[u],m?e.style[t]=m:ss(e,t)}else(p||a==="%")&&!ZP[jn(v,"display")]&&(o.position=jn(e,"position")),v===e&&(o.position="static"),v.appendChild(Ls),g=Ls[u],v.removeChild(Ls),o.position="absolute";return l&&p&&(_=Fs(v),_.time=Vn.time,_.width=v[u]),It(d?g*s/h:g&&s?h/g*s:0)},ar=function(e,t,i,r){var s;return Xm||Mp(),t in Bi&&t!=="transform"&&(t=Bi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Sr[t]&&t!=="transform"?(s=bl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Lu(jn(e,In))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Du[t]&&Du[t](e,t,i)||jn(e,t)||sS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?as(e,t,s,i)+i:s},QP=function(e,t,i,r){if(!i||i==="none"){var s=so(t,e,1),a=s&&jn(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=jn(e,"borderTopColor"))}var o=new Nn(this._pt,e.style,t,0,1,IS),l=0,c=0,u,h,d,p,g,v,_,f,m,x,S,w;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=jn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(v=e.style[t],e.style[t]=r,r=jn(e,t)||r,v?e.style[t]=v:ss(e,t)),u=[i,r],TS(u),i=u[0],r=u[1],d=i.match(Ca)||[],w=r.match(Ca)||[],w.length){for(;h=Ca.exec(r);)_=h[0],m=r.substring(l,h.index),g?g=(g+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(g=1),_!==(v=d[c++]||"")&&(p=parseFloat(v)||0,S=v.substr((p+"").length),_.charAt(1)==="="&&(_=ka(p,_)+S),f=parseFloat(_),x=_.substr((f+"").length),l=Ca.lastIndex-x.length,x||(x=x||qn.units[t]||S,l===r.length&&(r+=x,o.e+=x)),S!==x&&(p=as(e,t,v,x)||0),o._pt={_next:o._pt,p:m||c===1?m:",",s:p,c:f-p,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?kS:OS;return eS.test(r)&&(o.e=0),this._pt=o,o},X_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},JP=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=X_[i]||i,t[1]=X_[r]||r,t.join(" ")},e3=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Sr[o]&&(l=1,o=o==="transformOrigin"?In:bt),ss(i,o);l&&(ss(i,bt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",bl(i,1),a.uncache=1,zS(r)))}},Du={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Nn(e._pt,t,i,0,0,e3);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},wl=[1,0,0,1,0,0],WS={},jS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},q_=function(e){var t=jn(e,bt);return jS(t)?wl:t.substr(7).match(Jy).map(It)},$m=function(e,t){var i=e._gsap||Fs(e),r=e.style,s=q_(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?wl:s):(s===wl&&!e.offsetParent&&e!==za&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,za.appendChild(e)),s=q_(e),l?r.display=l:ss(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):za.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ep=function(e,t,i,r,s,a){var o=e._gsap,l=s||$m(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,p=l[0],g=l[1],v=l[2],_=l[3],f=l[4],m=l[5],x=t.split(" "),S=parseFloat(x[0])||0,w=parseFloat(x[1])||0,T,b,y,E;i?l!==wl&&(b=p*_-g*v)&&(y=S*(_/b)+w*(-v/b)+(v*m-_*f)/b,E=S*(-g/b)+w*(p/b)-(p*m-g*f)/b,S=y,w=E):(T=VS(e),S=T.x+(~x[0].indexOf("%")?S/100*T.width:S),w=T.y+(~(x[1]||x[0]).indexOf("%")?w/100*T.height:w)),r||r!==!1&&o.smooth?(f=S-c,m=w-u,o.xOffset=h+(f*p+m*v)-f,o.yOffset=d+(f*g+m*_)-m):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=w,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[In]="0px 0px",a&&(Gr(a,o,"xOrigin",c,S),Gr(a,o,"yOrigin",u,w),Gr(a,o,"xOffset",h,o.xOffset),Gr(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+w)},bl=function(e,t){var i=e._gsap||new AS(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=jn(e,In)||"0",u,h,d,p,g,v,_,f,m,x,S,w,T,b,y,E,L,R,z,O,X,B,V,F,G,Y,J,ie,ne,Le,Fe,Be;return u=h=d=v=_=f=m=x=S=0,p=g=1,i.svg=!!(e.getCTM&&GS(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[bt]!=="none"?l[bt]:"")),r.scale=r.rotate=r.translate="none"),b=$m(e,i.svg),i.svg&&(i.uncache?(G=e.getBBox(),c=i.xOrigin-G.x+"px "+(i.yOrigin-G.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),Ep(e,F||c,!!F||i.originIsAbsolute,i.smooth!==!1,b)),w=i.xOrigin||0,T=i.yOrigin||0,b!==wl&&(R=b[0],z=b[1],O=b[2],X=b[3],u=B=b[4],h=V=b[5],b.length===6?(p=Math.sqrt(R*R+z*z),g=Math.sqrt(X*X+O*O),v=R||z?ha(z,R)*Es:0,m=O||X?ha(O,X)*Es+v:0,m&&(g*=Math.abs(Math.cos(m*Ba))),i.svg&&(u-=w-(w*R+T*O),h-=T-(w*z+T*X))):(Be=b[6],Le=b[7],J=b[8],ie=b[9],ne=b[10],Fe=b[11],u=b[12],h=b[13],d=b[14],y=ha(Be,ne),_=y*Es,y&&(E=Math.cos(-y),L=Math.sin(-y),F=B*E+J*L,G=V*E+ie*L,Y=Be*E+ne*L,J=B*-L+J*E,ie=V*-L+ie*E,ne=Be*-L+ne*E,Fe=Le*-L+Fe*E,B=F,V=G,Be=Y),y=ha(-O,ne),f=y*Es,y&&(E=Math.cos(-y),L=Math.sin(-y),F=R*E-J*L,G=z*E-ie*L,Y=O*E-ne*L,Fe=X*L+Fe*E,R=F,z=G,O=Y),y=ha(z,R),v=y*Es,y&&(E=Math.cos(y),L=Math.sin(y),F=R*E+z*L,G=B*E+V*L,z=z*E-R*L,V=V*E-B*L,R=F,B=G),_&&Math.abs(_)+Math.abs(v)>359.9&&(_=v=0,f=180-f),p=It(Math.sqrt(R*R+z*z+O*O)),g=It(Math.sqrt(V*V+Be*Be)),y=ha(B,V),m=Math.abs(y)>2e-4?y*Es:0,S=Fe?1/(Fe<0?-Fe:Fe):0),i.svg&&(F=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!jS(jn(e,bt)),F&&e.setAttribute("transform",F))),Math.abs(m)>90&&Math.abs(m)<270&&(s?(p*=-1,m+=v<=0?180:-180,v+=v<=0?180:-180):(g*=-1,m+=m<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=d+a,i.scaleX=It(p),i.scaleY=It(g),i.rotation=It(v)+o,i.rotationX=It(_)+o,i.rotationY=It(f)+o,i.skewX=m+o,i.skewY=x+o,i.transformPerspective=S+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[In]=Lu(c)),i.xOffset=i.yOffset=0,i.force3D=qn.force3D,i.renderTransform=i.svg?n3:HS?XS:t3,i.uncache=0,i},Lu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ed=function(e,t,i){var r=fn(t);return It(parseFloat(t)+parseFloat(as(e,"x",i+"px",r)))+r},t3=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,XS(e,t)},xs="0deg",Ro="0px",ys=") ",XS=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,d=i.skewX,p=i.skewY,g=i.scaleX,v=i.scaleY,_=i.transformPerspective,f=i.force3D,m=i.target,x=i.zOrigin,S="",w=f==="auto"&&e&&e!==1||f===!0;if(x&&(h!==xs||u!==xs)){var T=parseFloat(u)*Ba,b=Math.sin(T),y=Math.cos(T),E;T=parseFloat(h)*Ba,E=Math.cos(T),a=Ed(m,a,b*E*-x),o=Ed(m,o,-Math.sin(T)*-x),l=Ed(m,l,y*E*-x+x)}_!==Ro&&(S+="perspective("+_+ys),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(w||a!==Ro||o!==Ro||l!==Ro)&&(S+=l!==Ro||w?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ys),c!==xs&&(S+="rotate("+c+ys),u!==xs&&(S+="rotateY("+u+ys),h!==xs&&(S+="rotateX("+h+ys),(d!==xs||p!==xs)&&(S+="skew("+d+", "+p+ys),(g!==1||v!==1)&&(S+="scale("+g+", "+v+ys),m.style[bt]=S||"translate(0, 0)"},n3=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,d=i.scaleY,p=i.target,g=i.xOrigin,v=i.yOrigin,_=i.xOffset,f=i.yOffset,m=i.forceCSS,x=parseFloat(a),S=parseFloat(o),w,T,b,y,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ba,c*=Ba,w=Math.cos(l)*h,T=Math.sin(l)*h,b=Math.sin(l-c)*-d,y=Math.cos(l-c)*d,c&&(u*=Ba,E=Math.tan(c-u),E=Math.sqrt(1+E*E),b*=E,y*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),w*=E,T*=E)),w=It(w),T=It(T),b=It(b),y=It(y)):(w=h,y=d,T=b=0),(x&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(x=as(p,"x",a,"px"),S=as(p,"y",o,"px")),(g||v||_||f)&&(x=It(x+g-(g*w+v*b)+_),S=It(S+v-(g*T+v*y)+f)),(r||s)&&(E=p.getBBox(),x=It(x+r/100*E.width),S=It(S+s/100*E.height)),E="matrix("+w+","+T+","+b+","+y+","+x+","+S+")",p.setAttribute("transform",E),m&&(p.style[bt]=E)},i3=function(e,t,i,r,s){var a=360,o=Kt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Es:1),c=l-r,u=r+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*H_)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*H_)%a-~~(c/a)*a)),e._pt=d=new Nn(e._pt,t,i,r,c,zP),d.e=u,d.u="deg",e._props.push(i),d},Y_=function(e,t){for(var i in t)e[i]=t[i];return e},r3=function(e,t,i){var r=Y_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,h,d,p,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[bt]=t,o=bl(i,1),ss(i,bt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[bt],a[bt]=t,o=bl(i,1),a[bt]=c);for(l in Sr)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=fn(c),g=fn(u),h=p!==g?as(i,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new Nn(e._pt,o,l,h,d-h,yp),e._pt.u=g||0,e._props.push(l));Y_(o,r)};Ln("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",a=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?n+o:"border"+o+n});Du[e>1?"border"+n:n]=function(o,l,c,u,h){var d,p;if(arguments.length<4)return d=a.map(function(g){return ar(o,g,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(u+"").split(" "),p={},a.forEach(function(g,v){return p[g]=d[v]=d[v]||d[(v-1)/2|0]}),o.init(l,p,h)}});var qS={name:"css",register:Mp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,c,u,h,d,p,g,v,_,f,m,x,S,w,T,b,y,E;Xm||Mp(),this.styles=this.styles||BS(e),y=this.styles.props,this.tween=i;for(v in t)if(v!=="autoRound"&&(u=t[v],!(Bn[v]&&RS(v,t,i,r,e,s)))){if(p=typeof u,g=Du[v],p==="function"&&(u=u.call(i,r,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Ml(u)),g)g(this,e,v,u,i)&&(b=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(v)+"").trim(),u+="",Jr.lastIndex=0,Jr.test(c)||(_=fn(c),f=fn(u),f?_!==f&&(c=as(e,v,c,f)+f):_&&(u+=_)),this.add(o,"setProperty",c,u,r,s,0,0,v),a.push(v),y.push(v,0,o[v]);else if(p!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(i,r,e,s):l[v],Kt(c)&&~c.indexOf("random(")&&(c=Ml(c)),fn(c+"")||c==="auto"||(c+=qn.units[v]||fn(ar(e,v))||""),(c+"").charAt(1)==="="&&(c=ar(e,v))):c=ar(e,v),d=parseFloat(c),m=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),m&&(u=u.substr(2)),h=parseFloat(u),v in Bi&&(v==="autoAlpha"&&(d===1&&ar(e,"visibility")==="hidden"&&h&&(d=0),y.push("visibility",0,o.visibility),Gr(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),v!=="scale"&&v!=="transform"&&(v=Bi[v],~v.indexOf(",")&&(v=v.split(",")[0]))),x=v in Sr,x){if(this.styles.save(v),E=u,p==="string"&&u.substring(0,6)==="var(--"){if(u=jn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var L=e.style.perspective;e.style.perspective=u,u=jn(e,"perspective"),L?e.style.perspective=L:ss(e,"perspective")}h=parseFloat(u)}if(S||(w=e._gsap,w.renderTransform&&!t.parseTransform||bl(e,t.parseTransform),T=t.smoothOrigin!==!1&&w.smooth,S=this._pt=new Nn(this._pt,o,bt,0,1,w.renderTransform,w,0,-1),S.dep=1),v==="scale")this._pt=new Nn(this._pt,w,"scaleY",w.scaleY,(m?ka(w.scaleY,m+h):h)-w.scaleY||0,yp),this._pt.u=0,a.push("scaleY",v),v+="X";else if(v==="transformOrigin"){y.push(In,0,o[In]),u=JP(u),w.svg?Ep(e,u,0,T,0,this):(f=parseFloat(u.split(" ")[2])||0,f!==w.zOrigin&&Gr(this,w,"zOrigin",w.zOrigin,f),Gr(this,o,v,Lu(c),Lu(u)));continue}else if(v==="svgOrigin"){Ep(e,u,1,T,0,this);continue}else if(v in WS){i3(this,w,v,d,m?ka(d,m+u):u);continue}else if(v==="smoothOrigin"){Gr(this,w,"smooth",w.smooth,u);continue}else if(v==="force3D"){w[v]=u;continue}else if(v==="transform"){r3(this,u,e);continue}}else v in o||(v=so(v)||v);if(x||(h||h===0)&&(d||d===0)&&!kP.test(u)&&v in o)_=(c+"").substr((d+"").length),h||(h=0),f=fn(u)||(v in qn.units?qn.units[v]:_),_!==f&&(d=as(e,v,c,f)),this._pt=new Nn(this._pt,x?w:o,v,d,(m?ka(d,m+h):h)-d,!x&&(f==="px"||v==="zIndex")&&t.autoRound!==!1?VP:yp),this._pt.u=f||0,x&&E!==u?(this._pt.b=c,this._pt.e=E,this._pt.r=HP):_!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=BP);else if(v in o)QP.call(this,e,v,c,m?m+u:u);else if(v in e)this.add(e,v,c||e[v],m?m+u:u,r,s);else if(v!=="parseTransform"){Um(v,u);continue}x||(v in o?y.push(v,0,o[v]):typeof e[v]=="function"?y.push(v,2,e[v]()):y.push(v,1,c||e[v])),a.push(v)}}b&&FS(this)},render:function(e,t){if(t.tween._time||!qm())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:ar,aliases:Bi,getSetter:function(e,t,i){var r=Bi[t];return r&&r.indexOf(",")<0&&(t=r),t in Sr&&t!==In&&(e._gsap.x||ar(e,"x"))?i&&B_===i?t==="scale"?XP:jP:(B_=i||{})&&(t==="scale"?qP:YP):e.style&&!Nm(e.style[t])?GP:~t.indexOf("-")?WP:Wm(e,t)},core:{_removeProperty:ss,_getMatrix:$m}};Fn.utils.checkPrefix=so;Fn.core.getStyleSaver=BS;(function(n,e,t,i){var r=Ln(n+","+e+","+t,function(s){Sr[s]=1});Ln(e,function(s){qn.units[s]="deg",WS[s]=1}),Bi[r[13]]=n+","+e,Ln(i,function(s){var a=s.split(":");Bi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){qn.units[n]="px"});Fn.registerPlugin(qS);var Ts=Fn.registerPlugin(qS)||Fn;Ts.core.Tween;const $_=n=>{let e;const t=new Set,i=(c,u)=>{const h=typeof c=="function"?c(e):c;if(!Object.is(h,e)){const d=e;e=u??(typeof h!="object"||h===null)?h:Object.assign({},e,h),t.forEach(p=>p(e,d))}},r=()=>e,o={setState:i,getState:r,getInitialState:()=>l,subscribe:c=>(t.add(c),()=>t.delete(c))},l=e=n(i,r,o);return o},s3=n=>n?$_(n):$_,a3=n=>n;function o3(n,e=a3){const t=Ol.useSyncExternalStore(n.subscribe,Ol.useCallback(()=>e(n.getState()),[n,e]),Ol.useCallback(()=>e(n.getInitialState()),[n,e]));return Ol.useDebugValue(t),t}const K_=n=>{const e=s3(n),t=i=>o3(e,i);return Object.assign(t,e),t},l3=n=>n?K_(n):K_,c3=[{id:"U01",x:-14,z:-8,width:6.2,depth:4.2,height:1.6,tenantId:"U01"},{id:"U02",x:-6.5,z:-8.2,width:7.2,depth:4.2,height:1.6,tenantId:"U02"},{id:"U03",x:2.2,z:-8.1,width:6.4,depth:4.2,height:1.6,tenantId:"U03"},{id:"U04",x:9.7,z:-7.6,width:3.1,depth:3,height:1.2,tenantId:"U04"},{id:"U05",x:14,z:-7.4,width:3.7,depth:3.1,height:1.2,tenantId:"U05"},{id:"U06",x:-15.4,z:-1.9,width:2.2,depth:2.4,height:1.2,tenantId:"U06"},{id:"U07",x:-12.2,z:-1.9,width:2.5,depth:2.5,height:1.2,tenantId:"U07"},{id:"U08",x:-8.8,z:-2,width:3,depth:2.8,height:1.2,tenantId:"U08"},{id:"U09",x:-5.1,z:-2,width:2.8,depth:2.6,height:1.2,tenantId:"U09"},{id:"U10",x:-1.5,z:-2,width:2.4,depth:2.4,height:1.2,tenantId:"U10"},{id:"U11",x:1.9,z:-2,width:2.8,depth:2.6,height:1.2,tenantId:"U11"},{id:"U12",x:5.8,z:-2,width:3,depth:2.8,height:1.2,tenantId:"U12"},{id:"U13",x:9.8,z:-2,width:4,depth:3.1,height:1.2,tenantId:"U13"},{id:"U14",x:14.4,z:-2,width:2.5,depth:2.4,height:1.2,tenantId:"U14"},{id:"U15",x:-7.2,z:4.3,width:3.6,depth:3,height:1.2,tenantId:"U15"},{id:"U16",x:-2.8,z:4.1,width:2,depth:2.2,height:1.2,tenantId:"U16"}],u3={units:c3},f3="#F59E0B",d3="#FDE68A",h3="#EF4444",p3="#6a8bfe",m3="#b7c8fe",Z_="#9CA3AF",g3="#C8CDD5";function YS(n,e){const t=e.includes("expiring"),i=e.includes("underperforming"),r=sf(n.leaseExpiry),s=t&&(r==="under12"||r==="under24"),a=i&&n.status==="underperforming";return!t&&!i?!0:s||a}function _3(n,e,t){if(e)return{color:p3,labelOpacity:1,glowColor:m3,meshOpacity:1,labelMuted:!1};const i=sf(n.leaseExpiry),r=t.includes("expiring"),s=t.includes("underperforming"),a=r||s,o=YS(n,t);return a?o?s&&n.status==="underperforming"?{color:h3,labelOpacity:1,glowColor:"#FECACA",meshOpacity:1,labelMuted:!1}:r&&(i==="under12"||i==="under24")?{color:f3,labelOpacity:1,glowColor:d3,meshOpacity:1,labelMuted:!1}:{color:Z_,labelOpacity:1,glowColor:null,meshOpacity:1,labelMuted:!1}:{color:g3,labelOpacity:.5,glowColor:null,meshOpacity:.5,labelMuted:!0}:{color:Z_,labelOpacity:1,glowColor:null,meshOpacity:1,labelMuted:!1}}function Xt(n){if(!n||typeof n!="string")return 1/0;const[e,t]=n.split("-").map(Number);if(!Number.isFinite(e)||!Number.isFinite(t))return 1/0;const i=new Date,r=new Date(e,t-1,1);return(r.getFullYear()-i.getFullYear())*12+(r.getMonth()-i.getMonth())}function sf(n){const e=Xt(n);return e===1/0?"later":e<=12?"under12":e<=24?"under24":"later"}function Km(n){if(!n||typeof n!="string")return"—";const[e,t]=n.split("-").map(Number);return!Number.isFinite(e)||!Number.isFinite(t)?"—":new Date(e,t-1,1).toLocaleDateString("en-CA",{month:"short",year:"numeric"})}const $S=[{unitId:"U01",tenantName:"Sport Chek",sqFt:4200,category:"Sporting Goods",leaseExpiry:"2028-12",status:"healthy",salesIndex:112,anchorDependency:!0,performanceNote:"Top-10 tenant by sales, anchor traffic driver.",currentRent:42,signingDate:"Mar 2018",remainingMonths:Math.max(0,Xt("2028-12")),footTrafficIndex:118,anchorProximity:"Adjacent to H&M"},{unitId:"U02",tenantName:"H&M",sqFt:6800,category:"Apparel",leaseExpiry:"2029-11",status:"healthy",salesIndex:104,anchorDependency:!0,performanceNote:"Stable sales and category anchor performance.",currentRent:40,signingDate:"Feb 2018",remainingMonths:Math.max(0,Xt("2029-11")),footTrafficIndex:142,anchorProximity:"Adjacent to Sport Chek"},{unitId:"U03",tenantName:"Old Navy",sqFt:5100,category:"Apparel",leaseExpiry:"2027-08",status:"healthy",salesIndex:98,anchorDependency:!0,performanceNote:"Slightly below average but still resilient.",currentRent:38,signingDate:"Sep 2017",remainingMonths:Math.max(0,Xt("2027-08")),footTrafficIndex:104,anchorProximity:"Stand-alone anchor"},{unitId:"U04",tenantName:"EB Games",sqFt:1400,category:"Electronics",leaseExpiry:"2026-02",status:"expiring",salesIndex:72,anchorDependency:!1,performanceNote:"Sales/sq ft 28% below asset average over trailing 12 months.",currentRent:48,signingDate:"Feb 2016",remainingMonths:Math.max(0,Xt("2026-02")),footTrafficIndex:68,anchorProximity:"Near ArcTeryx Outlet"},{unitId:"U05",tenantName:"Michael Kors",sqFt:2100,category:"Apparel",leaseExpiry:"2026-04",status:"expiring",salesIndex:81,anchorDependency:!1,performanceNote:"Lease expiring soon with moderate productivity decline.",currentRent:62,signingDate:"May 2016",remainingMonths:Math.max(0,Xt("2026-04")),footTrafficIndex:79,anchorProximity:"Near H&M + Old Navy corridor"},{unitId:"U06",tenantName:"Wirelesswave",sqFt:900,category:"Electronics",leaseExpiry:"2025-09",status:"expiring",salesIndex:65,anchorDependency:!1,performanceNote:"Sales/sq ft 35% below average, traffic softness.",currentRent:55,signingDate:"Aug 2020",remainingMonths:Math.max(0,Xt("2025-09")),footTrafficIndex:71,anchorProximity:"Corner unit, high-traffic corridor"},{unitId:"U07",tenantName:"Claire's Boutique",sqFt:1200,category:"Accessories",leaseExpiry:"2026-06",status:"expiring",salesIndex:59,anchorDependency:!1,performanceNote:"13-month expiry horizon and under-indexing conversion.",currentRent:44,signingDate:"Jun 2019",remainingMonths:Math.max(0,Xt("2026-06")),footTrafficIndex:63,anchorProximity:"Mid-mall corridor"},{unitId:"U08",tenantName:"Le Creuset",sqFt:1800,category:"Home & Lifestyle",leaseExpiry:"2027-01",status:"underperforming",salesIndex:61,anchorDependency:!1,performanceNote:"Sales/sq ft 39% below asset average over trailing 12 months.",currentRent:47,signingDate:"Jan 2020",remainingMonths:Math.max(0,Xt("2027-01")),footTrafficIndex:57,anchorProximity:"Isolated (far from anchors)"},{unitId:"U09",tenantName:"Gladstone Jewellers",sqFt:1500,category:"Jewellery",leaseExpiry:"2027-03",status:"underperforming",salesIndex:54,anchorDependency:!1,performanceNote:"Sales/sq ft 46% below asset average, weak conversion.",currentRent:51,signingDate:"Mar 2017",remainingMonths:Math.max(0,Xt("2027-03")),footTrafficIndex:52,anchorProximity:"Isolated (far from anchors)"},{unitId:"U10",tenantName:"Togo Sushi",sqFt:1100,category:"Food & Beverage",leaseExpiry:"2025-10",status:"expiring",salesIndex:88,anchorDependency:!1,performanceNote:"Expiring in 7 months; still healthy lunchtime demand.",currentRent:58,signingDate:"Oct 2018",remainingMonths:Math.max(0,Xt("2025-10")),footTrafficIndex:95,anchorProximity:"Mid-mall corridor"},{unitId:"U11",tenantName:"Mellow Cafe",sqFt:1300,category:"Food & Beverage",leaseExpiry:"2028-01",status:"healthy",salesIndex:102,anchorDependency:!1,performanceNote:"Steady repeat traffic and healthy spend per visit.",currentRent:61,signingDate:"Apr 2019",remainingMonths:Math.max(0,Xt("2028-01")),footTrafficIndex:108,anchorProximity:"Mid-mall corridor"},{unitId:"U12",tenantName:"LensCrafters",sqFt:1700,category:"Health & Optical",leaseExpiry:"2028-10",status:"healthy",salesIndex:101,anchorDependency:!1,performanceNote:"Consistent productivity and appointment utilization.",currentRent:49,signingDate:"Nov 2017",remainingMonths:Math.max(0,Xt("2028-10")),footTrafficIndex:101,anchorProximity:"Mid-mall corridor"},{unitId:"U13",tenantName:"ArcTeryx Outlet",sqFt:2800,category:"Apparel",leaseExpiry:"2027-12",status:"healthy",salesIndex:109,anchorDependency:!1,performanceNote:"High AOV and strong destination draw.",currentRent:45,signingDate:"Jun 2015",remainingMonths:Math.max(0,Xt("2027-12")),footTrafficIndex:92,anchorProximity:"Anchor-adjacent"},{unitId:"U14",tenantName:"The Body Shop",sqFt:1e3,category:"Beauty",leaseExpiry:"2026-09",status:"expiring",salesIndex:93,anchorDependency:!1,performanceNote:"Lease expiry within 18 months, mixed momentum.",currentRent:43,signingDate:"May 2016",remainingMonths:Math.max(0,Xt("2026-09")),footTrafficIndex:88,anchorProximity:"Mid-mall corridor"},{unitId:"U15",tenantName:"Urban Planet",sqFt:2400,category:"Apparel",leaseExpiry:"2026-12",status:"expiring",salesIndex:74,anchorDependency:!1,performanceNote:"Below-average productivity and style-cycle volatility.",currentRent:36,signingDate:"Sep 2016",remainingMonths:Math.max(0,Xt("2026-12")),footTrafficIndex:78,anchorProximity:"Mid-mall corridor"},{unitId:"U16",tenantName:"Mobile Snap",sqFt:600,category:"Electronics",leaseExpiry:"2025-08",status:"expiring",salesIndex:67,anchorDependency:!1,performanceNote:"Expiry in 6 months with declining conversion rate.",currentRent:52,signingDate:"Aug 2020",remainingMonths:Math.max(0,Xt("2025-08")),footTrafficIndex:44,anchorProximity:"Mid-mall corridor"}],v3=Object.fromEntries($S.map(n=>[n.unitId,n]));[...new Set($S.map(n=>n.category))].sort();const x3=u3.units.map(n=>({...n,...v3[n.id],interactive:!0})),y3={id:"capilano",name:"Capilano Mall",gla:"620,000 sq ft",floorPlaneSize:{w:48,d:30},cameraTarget:{x:0,y:0,z:0},frustumSize:24},S3=[],M3=[{id:"BR01",tenantName:"Pharmasave",sqFt:2800,category:"Health & Wellness",leaseExpiry:"2026-03",status:"expiring",currentRent:52,signingDate:"Mar 2021",footTrafficIndex:94,anchorProximity:"Street-facing anchor",performanceNote:"Below average foot traffic, lease ending soon",x:-6.15,z:3.5,width:4,depth:3,height:1.2,interactive:!0},{id:"BR02",tenantName:"Waves Coffee",sqFt:950,category:"Food & Beverage",leaseExpiry:"2025-08",status:"expiring",currentRent:68,signingDate:"Aug 2020",footTrafficIndex:88,anchorProximity:"Adjacent to Pharmasave",performanceNote:"Low sq ft revenue vs food category average",x:-2.9,z:3.5,width:2.5,depth:3,height:1.2,interactive:!0},{id:"BR03",tenantName:"State & Main",sqFt:3200,category:"Food & Beverage",leaseExpiry:"2028-11",status:"stable",currentRent:61,signingDate:"Nov 2018",footTrafficIndex:112,anchorProximity:"Corner unit",performanceNote:"Top performer, strong dinner traffic",x:.6,z:3.5,width:4.5,depth:3,height:1.2,interactive:!0},{id:"BR04",tenantName:"Kumon",sqFt:1100,category:"Education",leaseExpiry:"2026-05",status:"expiring",currentRent:44,signingDate:"May 2021",footTrafficIndex:61,anchorProximity:"Mid-strip",performanceNote:"Weak traffic, education category declining",x:4.25,z:3.5,width:2.8,depth:3,height:1.2,interactive:!0},{id:"BR05",tenantName:"Nail Studio",sqFt:900,category:"Beauty",leaseExpiry:"2027-01",status:"underperforming",currentRent:48,signingDate:"Jan 2022",footTrafficIndex:54,anchorProximity:"Mid-strip",performanceNote:"Sales 38% below podium average",x:6.9,z:3.5,width:2.5,depth:3,height:1.2,interactive:!0}],E3={id:"bower",name:"Bower Place",gla:"32,000 sq ft",floorPlaneSize:{w:36,d:24},cameraTarget:{x:0,y:0,z:0},frustumSize:22},T3=[],w3=[{id:"WL01",tenantName:"Sport Chek",sqFt:5200,category:"Sporting Goods",leaseExpiry:"2027-01",status:"stable",currentRent:41,signingDate:"Jan 2022",footTrafficIndex:121,anchorProximity:"Anchor - end unit",performanceNote:"Strong anchor, drives significant cross-shopping",x:-8.5,z:-12,width:7,depth:4,height:.9,interactive:!0},{id:"WL02",tenantName:"Winners",sqFt:8400,category:"Apparel",leaseExpiry:"2028-03",status:"stable",currentRent:28,signingDate:"Mar 2018",footTrafficIndex:138,anchorProximity:"Centre anchor",performanceNote:"Highest traffic driver in plaza",x:0,z:-12,width:10,depth:4,height:.9,interactive:!0},{id:"WL03",tenantName:"Milestones",sqFt:4800,category:"Food & Beverage",leaseExpiry:"2025-10",status:"expiring",currentRent:55,signingDate:"Oct 2020",footTrafficIndex:98,anchorProximity:"Corner unit left",performanceNote:"Lease ending, restaurant headwinds",x:-19,z:3,width:4,depth:6,height:.9,interactive:!0},{id:"WL04",tenantName:"GoodLife Fitness",sqFt:6600,category:"Health & Fitness",leaseExpiry:"2030-08",status:"stable",currentRent:22,signingDate:"Aug 2020",footTrafficIndex:109,anchorProximity:"Right wing anchor",performanceNote:"Long lease, daily traffic anchor",x:19,z:-6.5,width:4,depth:7,height:.9,interactive:!0},{id:"WL05",tenantName:"Reitmans",sqFt:2200,category:"Apparel",leaseExpiry:"2026-02",status:"underperforming",currentRent:38,signingDate:"Feb 2021",footTrafficIndex:52,anchorProximity:"Left wing mid",performanceNote:"Sales 41% below average, brand in national decline",x:-19,z:-7.5,width:4,depth:5,height:.9,interactive:!0}],b3=[{id:"TP04",label:"Third Party",tenantName:"Dollarama",x:-14.5,z:-12,width:5,depth:4,height:.9},{id:"TP01",label:"Third Party",tenantName:"Shoppers Drug Mart",x:9,z:-12,width:8,depth:4,height:.9},{id:"TP02",label:"Third Party",tenantName:"Scotiabank",x:15,z:-12,width:4,depth:4,height:.9},{id:"TP05",label:"Third Party",tenantName:"Pharmasave",x:-19,z:-2.5,width:4,depth:5,height:.9},{id:"TP06",label:"Third Party",tenantName:"Rogers",x:19,z:-.5,width:4,depth:5,height:.9},{id:"TP03",label:"Third Party",tenantName:"Tim Hortons",x:19,z:4,width:4,depth:4,height:.9}],C3={id:"willowbrook",name:"Willowbrook Shopping Centre",gla:"118,000 sq ft",floorPlaneSize:{w:52,d:44},cameraTarget:{x:0,y:0,z:0},frustumSize:34},zo={capilano:{layoutConfig:y3,units:x3,thirdPartyUnits:S3},bower:{layoutConfig:E3,units:M3,thirdPartyUnits:T3},willowbrook:{layoutConfig:C3,units:w3,thirdPartyUnits:b3}},A3=[{id:"capilano",name:"Capilano Mall"},{id:"bower",name:"Bower Place"},{id:"willowbrook",name:"Willowbrook Shopping Centre"}];function R3(n,e){return!n||typeof n!="string"?null:e.find(t=>t.id===n)??null}function Po(n,e=[]){var i;return[...((i=zo[n])==null?void 0:i.units)??[],...e]}const Si=l3(n=>({selectedUnit:null,drawerOpen:!1,drawerStep:"info",selectedCategories:[],activeFilters:[],selectedLayoutId:"capilano",layoutConfig:zo.capilano.layoutConfig,thirdPartyUnits:zo.capilano.thirdPartyUnits,userAddedUnits:[],units:Po("capilano"),setSelectedUnit:e=>{if(!e){n({selectedUnit:null,drawerOpen:!1,drawerStep:"info",selectedCategories:[]});return}n(t=>{const i=R3(e,t.units)??null;return i?{selectedUnit:i,drawerOpen:!0,drawerStep:"info",selectedCategories:[]}:t})},setLayout:e=>n(()=>{const t=zo[e]??zo.capilano;return{selectedLayoutId:t.layoutConfig.id,layoutConfig:t.layoutConfig,thirdPartyUnits:t.thirdPartyUnits??[],userAddedUnits:[],units:Po(t.layoutConfig.id,[]),activeFilters:[],selectedUnit:null,drawerOpen:!1,drawerStep:"info",selectedCategories:[]}}),addUserUnit:e=>n(t=>{const i=[...t.userAddedUnits,e];return{userAddedUnits:i,units:Po(t.selectedLayoutId,i),selectedUnit:e,drawerOpen:!0,drawerStep:"info",selectedCategories:[]}}),removeUserUnit:e=>n(t=>{var s;const i=t.userAddedUnits.filter(a=>a.id!==e),r=((s=t.selectedUnit)==null?void 0:s.id)===e;return{userAddedUnits:i,units:Po(t.selectedLayoutId,i),selectedUnit:r?null:t.selectedUnit,drawerOpen:r?!1:t.drawerOpen,drawerStep:r?"info":t.drawerStep,selectedCategories:r?[]:t.selectedCategories}}),setUnitsFromStore:()=>n(e=>{const t=e.userAddedUnits??[];return{units:Po(e.selectedLayoutId,t)}}),setDrawerOpen:e=>n({drawerOpen:e}),setDrawerStep:e=>n({drawerStep:e}),toggleSelectedCategory:e=>n(t=>({selectedCategories:t.selectedCategories.includes(e)?t.selectedCategories.filter(i=>i!==e):[...t.selectedCategories,e]})),removeSelectedCategory:e=>n(t=>({selectedCategories:t.selectedCategories.filter(i=>i!==e)})),clearSelectedCategories:()=>n({selectedCategories:[]}),closeDrawer:()=>n({drawerOpen:!1,selectedUnit:null,drawerStep:"info",selectedCategories:[]}),toggleFilter:e=>n(t=>e!=="expiring"&&e!=="underperforming"?t:{activeFilters:t.activeFilters.includes(e)?t.activeFilters.filter(s=>s!==e):[...t.activeFilters,e]}),resetFilters:()=>n({activeFilters:[]})}));function P3({visible:n,x:e,y:t,content:i}){return!n||!i?null:i.customMessage?P.jsx("div",{className:"unit-tooltip",style:{left:e,top:t},children:P.jsx("div",{children:i.customMessage})}):P.jsxs("div",{className:"unit-tooltip",style:{left:e,top:t},children:[P.jsx("div",{children:i.tenantName}),P.jsxs("div",{children:[i.sqFt.toLocaleString()," sq ft"]}),P.jsxs("div",{children:["Expires ",i.leaseExpiry]})]})}function D3({onResetViewReady:n}){const e=nt.useRef(null),t=nt.useRef(new Map),i=nt.useRef(new Map),r=nt.useRef(null),s=nt.useRef(null),a=nt.useRef({position:{x:100,y:100,z:100},target:{x:0,y:0,z:0},zoom:1.6}),[o,l]=nt.useState({visible:!1,x:0,y:0,content:null}),c=Si(f=>{var m;return((m=f.selectedUnit)==null?void 0:m.id)??null}),u=Si(f=>f.setSelectedUnit),h=Si(f=>f.activeFilters),d=Si(f=>f.units),p=Si(f=>f.selectedLayoutId),g=Si(f=>f.layoutConfig),v=Si(f=>f.thirdPartyUnits);nt.useEffect(()=>{const f=e.current;if(!f)return;const m=new sw;m.background=null;const x=f.clientWidth,S=f.clientHeight,w=x/S,T=g.frustumSize,b=new Qu(-T*w,T*w,T,-T,.1,300);b.position.set(100,100,100),b.zoom=1.6,b.updateProjectionMatrix(),b.lookAt(0,0,0),s.current=b;const y=new wR({antialias:!0});y.setClearColor(16777215,0),y.setSize(x,S),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.appendChild(y.domElement);const E=new BR;E.setSize(x,S),E.domElement.style.position="absolute",E.domElement.style.top="0",E.domElement.style.pointerEvents="none",f.appendChild(E.domElement);const L=new CR(b,y.domElement);L.enableRotate=!1,L.enableDamping=!0,L.minZoom=.65,L.maxZoom=1.7,L.maxPolarAngle=Math.PI/2,L.minPolarAngle=0,L.target.set(0,0,0),r.current=L;const R=new Cw("#ffffff",1.2),z=new bw("#ffffff",.8);z.position.set(20,50,20),m.add(R,z);const O=new cn(new Qa(g.floorPlaneSize.w,g.floorPlaneSize.d),new vi({color:"#D1D5DB",roughness:.95}));O.rotation.x=-Math.PI/2,O.position.y=-.7,m.add(O);const X=new Pw,B=new Oe,V=[],F=[],G=()=>{const U=document.createElement("canvas");U.width=256,U.height=512;const q=U.getContext("2d");if(!q)return null;q.fillStyle="#4A6080",q.fillRect(0,0,256,512);const ee=8,de=512/ee;q.strokeStyle="#3A5070",q.lineWidth=2;for(let me=0;me<ee;me+=1)q.beginPath(),q.moveTo(0,me*de),q.lineTo(256,me*de),q.stroke();const _e=5,Se=ee,it=28,We=20,$e=256/_e,Ke=de;for(let me=0;me<Se;me+=1)for(let ft=0;ft<_e;ft+=1){const D=ft*$e+($e-it)/2,vt=me*Ke+(Ke-We)/2,qe=Math.random()>.3;q.fillStyle=qe?"#C8E0FF":"#2A3A50",q.fillRect(D,vt,it,We),q.strokeStyle="#3A5070",q.lineWidth=1,q.strokeRect(D,vt,it,We)}return new j0(U)},Y=()=>{const U=document.createElement("canvas");U.width=512,U.height=512;const q=U.getContext("2d");if(!q)return null;q.fillStyle="#B8C4CE",q.fillRect(0,0,512,512),q.strokeStyle="#A0ADB8",q.lineWidth=1.5;for(let ee=0;ee<512;ee+=40)q.beginPath(),q.moveTo(ee,0),q.lineTo(ee,512),q.stroke();return q.lineWidth=2,q.beginPath(),q.moveTo(0,256),q.lineTo(512,256),q.stroke(),new j0(U)};if(d.forEach(U=>{const q=new ni(U.width,U.height,U.depth),ee=new vi({color:"#9CA3AF",roughness:.6,metalness:.1,transparent:!0,opacity:1}),de=new cn(q,ee);de.position.set(U.x,U.height/2,U.z),de.userData={unitId:U.id},m.add(de);const _e=new cn(new ni(U.width+.28,U.height+.08,U.depth+.28),new Rm({color:"#ffffff",transparent:!0,opacity:.2}));_e.position.set(U.x,U.height/2-.04,U.z),_e.visible=!1,m.add(_e),t.current.set(U.id,{mesh:de,glow:_e,baseY:U.height/2,interactive:U.interactive!==!1}),U.interactive!==!1&&V.push(de);const Se=document.createElement("div");Se.className="unit-label",Se.textContent=U.tenantName;const it=new b_(Se);it.position.set(U.x,U.height+.4,U.z),m.add(it),i.current.set(U.id,Se)}),p==="bower"){const U=G(),q=[new vi({color:3821680}),new vi({color:3821680}),new vi({color:4874368}),new vi({color:2767440}),new vi({map:U??void 0,color:4874368}),new vi({color:3821680})],ee=new cn(new ni(16,12,10),q);ee.position.set(0,7.19,-3),m.add(ee),F.push(ee);const de=new cn(new ni(16.6,.3,10.6),new vi({color:2767440}));de.position.set(0,13.34,-3),m.add(de),F.push(de)}if(p==="willowbrook"){const $e=Y(),Ke=new cn(new Qa(34,16),new vi({color:12109006,roughness:.95,map:$e??void 0}));Ke.rotation.x=-Math.PI/2,Ke.position.set(0,.01,-2),m.add(Ke),v.forEach(me=>{const ft=new ni(me.width+.1,me.height+.1,me.depth+.1),D=new X0(ft),vt=new ap({color:6583435,transparent:!0,opacity:.4}),qe=new W0(D,vt);qe.position.set(me.x,me.height/2,me.z),m.add(qe);const ot=new X0(new ni(me.width,me.height,me.depth)),Me=new ap({color:4674921}),A=new W0(ot,Me);A.position.set(me.x,me.height/2,me.z),m.add(A);const M=new cn(new ni(me.width,me.height,me.depth),new vi({color:9741240,transparent:!0,opacity:.12}));M.position.set(me.x,me.height/2,me.z),m.add(M);const N=document.createElement("div");N.className="unit-label",N.textContent=me.label,N.style.fontSize="11px",N.style.color="#334155",N.style.fontStyle="italic",N.style.fontWeight="600",N.style.background="rgba(255,255,255,0.7)",N.style.padding="2px 6px",N.style.borderRadius="4px",N.style.border="1px solid #CBD5E1";const Q=new b_(N);Q.position.set(me.x,me.height+.35,me.z),m.add(Q)})}const J=new co;V.forEach(U=>J.expandByObject(U)),L.target.set(g.cameraTarget.x,g.cameraTarget.y,g.cameraTarget.z),b.lookAt(g.cameraTarget.x,g.cameraTarget.y,g.cameraTarget.z),a.current={position:{x:b.position.x,y:b.position.y,z:b.position.z},target:{x:g.cameraTarget.x,y:g.cameraTarget.y,z:g.cameraTarget.z},zoom:b.zoom};const ie=()=>{L.update(),y.render(m,b),E.render(m,b),requestAnimationFrame(ie)};ie();const ne=U=>{var de;const q=y.domElement.getBoundingClientRect();return B.x=(U.clientX-q.left)/q.width*2-1,B.y=-((U.clientY-q.top)/q.height)*2+1,X.setFromCamera(B,b),((de=X.intersectObjects(V)[0])==null?void 0:de.object)??null},Le=U=>{var ee;const q=ne(U);if(y.domElement.style.cursor=q?"pointer":"default",V.forEach(de=>{Ts.to(de.scale,{x:q===de?1.05:1,y:q===de?1.05:1,z:q===de?1.05:1,duration:.14})}),q){const de=q.userData.unitId,_e=d.find(Se=>Se.id===de);if(!_e)return;l({visible:!0,x:U.clientX+12,y:U.clientY+12,content:{tenantName:_e.tenantName,sqFt:_e.sqFt,leaseExpiry:Km(_e.leaseExpiry)}})}else{const de=y.domElement.getBoundingClientRect();if(B.x=(U.clientX-de.left)/de.width*2-1,B.y=-((U.clientY-de.top)/de.height)*2+1,X.setFromCamera(B,b),(ee=X.intersectObjects(F)[0])==null?void 0:ee.object){y.domElement.style.cursor="default",l({visible:!0,x:U.clientX+12,y:U.clientY+12,content:{customMessage:"Residential floors — not part of retail portfolio"}});return}l(Se=>({...Se,visible:!1}))}},Fe=U=>{const q=ne(U);u(q?q.userData.unitId:null)},Be=()=>{const U=f.clientWidth,q=f.clientHeight,ee=U/q;b.left=-T*ee,b.right=T*ee,b.top=T,b.bottom=-T,b.updateProjectionMatrix(),y.setSize(U,q),E.setSize(U,q)};return y.domElement.addEventListener("pointermove",Le),y.domElement.addEventListener("click",Fe),window.addEventListener("resize",Be),()=>{y.domElement.style.cursor="default",y.domElement.removeEventListener("pointermove",Le),y.domElement.removeEventListener("click",Fe),window.removeEventListener("resize",Be),L.dispose(),y.dispose(),f.removeChild(y.domElement),f.removeChild(E.domElement),m.traverse(U=>{var q,ee,de,_e;U.geometry&&((ee=(q=U.geometry).dispose)==null||ee.call(q)),U.material&&(Array.isArray(U.material)?U.material.forEach(Se=>{var it;return(it=Se.dispose)==null?void 0:it.call(Se)}):(_e=(de=U.material).dispose)==null||_e.call(de))}),t.current.clear(),i.current.clear()}},[u,d,p,g,v]),nt.useEffect(()=>{d.forEach(f=>{const m=t.current.get(f.id);if(!m||m.interactive===!1)return;const x=_3(f,c===f.id,h),S=m.mesh.material;S.color.set(x.color);const w=x.meshOpacity??1;S.transparent=w<1,S.opacity=w,S.depthWrite=w>=1,m.glow.visible=!!x.glowColor,x.glowColor&&m.glow.material.color.set(x.glowColor);const T=i.current.get(f.id);T&&(T.style.opacity=`${x.labelOpacity}`,x.labelMuted===!0?(T.style.color="#9CA3AF",T.style.fontWeight="600",T.style.textShadow="none"):(T.style.color="#ffffff",T.style.fontWeight="700",T.style.textShadow="0px 1px 3px rgba(0, 0, 0, 0.5)"));const b=c===f.id?m.baseY+.8:m.baseY;Ts.to(m.mesh.position,{y:b,duration:.3,ease:"power2.out"}),Ts.to(m.glow.position,{y:b-.04,duration:.3,ease:"power2.out"})})},[d,h,c]);const _=()=>{if(!s.current||!r.current)return;const f=a.current;Ts.to(s.current.position,{x:f.position.x,y:f.position.y,z:f.position.z,duration:.8,onUpdate:()=>{s.current.lookAt(f.target.x,f.target.y,f.target.z)}}),Ts.to(r.current.target,{x:f.target.x,y:f.target.y,z:f.target.z,duration:.8}),Ts.to(s.current,{zoom:f.zoom,duration:.8,onUpdate:()=>s.current.updateProjectionMatrix()})};return nt.useEffect(()=>{typeof n=="function"&&n(_)},[n]),P.jsxs("div",{className:"canvas-wrap",children:[P.jsx("div",{ref:e,className:"canvas-mount"}),P.jsx(P3,{...o})]})}function L3({onResetView:n}){const{activeFilters:e,toggleFilter:t,resetFilters:i,units:r,selectedLayoutId:s,setLayout:a,layoutConfig:o}=Si(),[l,c]=nt.useState(!1),u=nt.useMemo(()=>r.filter(f=>YS(f,e)),[r,e]),h=r.filter(f=>{const m=sf(f.leaseExpiry);return m==="under12"||m==="under24"}).length,d=r.filter(f=>f.status==="underperforming").length,p=u.map(f=>f.leaseExpiry).sort()[0],g=u.reduce((f,m)=>f+m.sqFt,0),v=e.includes("expiring"),_=e.includes("underperforming");return P.jsxs("aside",{className:"filter-panel",children:[P.jsxs("div",{className:"filter-top",children:[P.jsx("h2",{children:"Filters & Controls"}),P.jsxs("button",{type:"button",className:`toggle-btn ${v?"toggle-btn-on":""}`,onClick:()=>t("expiring"),children:["Expiring Soon",P.jsx("span",{className:"toggle-count",children:h})]}),P.jsxs("button",{type:"button",className:`toggle-btn ${_?"toggle-btn-on":""}`,onClick:()=>t("underperforming"),children:["Underperforming",P.jsx("span",{className:"toggle-count",children:d})]}),P.jsxs("div",{className:"summary-card",children:[P.jsx("h3",{children:"Live summary"}),P.jsxs("p",{children:[P.jsx("strong",{children:u.length})," units highlighted"]}),P.jsxs("p",{children:["Earliest expiry: ",P.jsx("strong",{children:p?Km(p):"N/A"})]}),P.jsxs("p",{children:["Sq ft at risk: ",P.jsx("strong",{children:g.toLocaleString()})]})]})]}),P.jsxs("div",{className:"filter-bottom",children:[P.jsx("div",{className:"filter-bottom-divider"}),P.jsx("h3",{className:"section-label",children:"ASSET"}),P.jsxs("div",{className:"layout-selector-wrap",children:[P.jsxs("button",{type:"button",className:"layout-selector-btn",onClick:()=>c(f=>!f),children:[P.jsx("span",{children:o.name}),P.jsx(zE,{size:14})]}),l?P.jsx("div",{className:"layout-dropdown",children:A3.map(f=>P.jsxs("button",{className:f.id===s?"layout-option active":"layout-option",onClick:()=>{a(f.id),c(!1)},children:[P.jsx("span",{children:f.name}),f.id===s?P.jsx(py,{size:14}):null]},f.id))}):null]}),P.jsxs("p",{className:"gla-display",children:[o.gla," GLA"]}),P.jsxs("div",{className:"filter-bottom-actions",children:[P.jsx("button",{type:"button",className:"reset-btn",onClick:i,children:"Reset Filters"}),P.jsx("button",{type:"button",className:"reset-view-btn",onClick:n,children:"Reset View"})]})]})]})}const N3=["Apparel","Food & Beverage","Electronics","Footwear","Sporting Goods","Toys & Hobbies","Beauty","Home & Lifestyle"],I3={U01:[{rank:1,brand:"Lululemon",score:94,category:"Sporting Goods",idealSize:"3,500-5,000 sq ft",rationale:["Massive Canadian brand momentum; flagship format 3,500-5,000 sq ft.","Highest sales/sq ft in category; loyal customer base drives repeat traffic."],dimensions:{financialHealth:93,expansionMomentum:95,categoryFit:94,sizeCompatibility:90}},{rank:2,brand:"Decathlon",score:88,category:"Sporting Goods",idealSize:"4,000-8,000 sq ft",rationale:["Aggressive Canadian expansion 2024-25; large-format value sporting goods.","Fills price-point gap above Sport Chek."],dimensions:{financialHealth:88,expansionMomentum:89,categoryFit:87,sizeCompatibility:85}},{rank:3,brand:"MEC (Mountain Equipment Co.)",score:81,category:"Sporting Goods",idealSize:"3,000-5,000 sq ft",rationale:["Restructured and growing again; outdoor/active focus.","Strong BC and urban demo alignment."],dimensions:{financialHealth:80,expansionMomentum:81,categoryFit:82,sizeCompatibility:80}},{rank:1,brand:"Aritzia",score:92,category:"Apparel",idealSize:"3,500-5,000 sq ft",rationale:["Top-performing Canadian retailer; flagship format 3,500-5,000 sq ft.","Exceptionally high sales/sq ft; strong female 18-40 demographic."],dimensions:{financialHealth:92,expansionMomentum:93,categoryFit:92,sizeCompatibility:91}},{rank:2,brand:"H&M Home + Apparel",score:85,category:"Apparel",idealSize:"4,000-6,000 sq ft",rationale:["Expanding combined format in Canada; drives high foot traffic.","Accessible price point."],dimensions:{financialHealth:86,expansionMomentum:84,categoryFit:85,sizeCompatibility:82}},{rank:3,brand:"Zara",score:82,category:"Apparel",idealSize:"3,000-5,000 sq ft",rationale:["Premium fast fashion; very high conversion.","Consistent performer across Canadian malls."],dimensions:{financialHealth:83,expansionMomentum:82,categoryFit:83,sizeCompatibility:80}}],U02:[{rank:1,brand:"Zara",score:91,category:"Apparel",idealSize:"5,000-7,000 sq ft",rationale:["Direct comp replacement; large format; premium positioning.","Strong international brand recognition."],dimensions:{financialHealth:90,expansionMomentum:91,categoryFit:92,sizeCompatibility:88}},{rank:2,brand:"Uniqlo",score:88,category:"Apparel",idealSize:"6,000-8,000 sq ft",rationale:["Actively expanding in Canada; basics-focused.","Very high repeat visit rate and basket size."],dimensions:{financialHealth:88,expansionMomentum:89,categoryFit:88,sizeCompatibility:85}},{rank:3,brand:"Gap (Flagship)",score:79,category:"Apparel",idealSize:"5,000-7,000 sq ft",rationale:["Gap flagship format; refreshed brand identity; known anchor draw."],dimensions:{financialHealth:79,expansionMomentum:78,categoryFit:80,sizeCompatibility:78}},{rank:1,brand:"Lululemon",score:90,category:"Sporting Goods",idealSize:"5,000-7,000 sq ft",rationale:["Would absorb the large footprint well; flagship format.","Highest revenue/sq ft in Canadian mall retail."],dimensions:{financialHealth:92,expansionMomentum:90,categoryFit:89,sizeCompatibility:87}},{rank:2,brand:"Adidas Brand Center",score:83,category:"Sporting Goods",idealSize:"5,000-7,000 sq ft",rationale:["Full-line brand centers expanding in Canada.","Strong brand equity post-collaboration era."],dimensions:{financialHealth:84,expansionMomentum:83,categoryFit:82,sizeCompatibility:80}},{rank:3,brand:"Nike Clearance",score:77,category:"Sporting Goods",idealSize:"5,000-8,000 sq ft",rationale:["Factory store format works at this sq ft; strong outlet traffic driver.","Proven performer in suburban Canadian malls."],dimensions:{financialHealth:78,expansionMomentum:76,categoryFit:77,sizeCompatibility:75}}],U03:[{rank:1,brand:"Uniqlo",score:89,category:"Apparel",idealSize:"4,000-6,000 sq ft",rationale:["5,000 sq ft sweet spot for Uniqlo; expanding across Canada rapidly.","Basics positioning complements surrounding stores."],dimensions:{financialHealth:88,expansionMomentum:90,categoryFit:89,sizeCompatibility:86}},{rank:2,brand:"Banana Republic",score:84,category:"Apparel",idealSize:"4,000-6,000 sq ft",rationale:["Premium positioning upgrade from Old Navy; strong loyalty program.","Same Gap Inc. supply chain familiarity."],dimensions:{financialHealth:84,expansionMomentum:83,categoryFit:85,sizeCompatibility:82}},{rank:3,brand:"Winners / HomeSense Combo",score:78,category:"Apparel",idealSize:"5,000-8,000 sq ft",rationale:["High traffic draw; value positioning; proven anchor for mid-tier malls."],dimensions:{financialHealth:79,expansionMomentum:77,categoryFit:78,sizeCompatibility:74}},{rank:1,brand:"Foot Locker (Power Store)",score:85,category:"Footwear",idealSize:"4,000-6,000 sq ft",rationale:["Large-format Power Store concept; experiential retail.","Very high youth traffic."],dimensions:{financialHealth:85,expansionMomentum:86,categoryFit:85,sizeCompatibility:83}},{rank:2,brand:"DSW (Designer Shoe Warehouse)",score:80,category:"Footwear",idealSize:"5,000-7,000 sq ft",rationale:["Expanding in Canada; wide selection drives destination shopping."],dimensions:{financialHealth:81,expansionMomentum:79,categoryFit:80,sizeCompatibility:78}},{rank:3,brand:"Browns Shoes",score:74,category:"Footwear",idealSize:"3,500-5,000 sq ft",rationale:["Canadian heritage brand; premium positioning; loyal older demographic."],dimensions:{financialHealth:75,expansionMomentum:73,categoryFit:74,sizeCompatibility:76}}],U04:[{rank:1,brand:"Miniso",score:91,category:"Toys & Hobbies",idealSize:"1,000-2,000 sq ft",rationale:["Aggressive Canadian expansion, 32 new stores in 2023-24.","Targets 1,000-2,000 sq ft footprints.","Strong youth demographic and impulse conversion."],dimensions:{financialHealth:90,expansionMomentum:93,categoryFit:91,sizeCompatibility:89}},{rank:2,brand:"Lego Certified Store",score:85,category:"Toys & Hobbies",idealSize:"1,200-2,000 sq ft",rationale:["Mall-first expansion strategy in premium markets.","Exceptional brand equity and destination value.","High dwell time and strong repeat visitation."],dimensions:{financialHealth:88,expansionMomentum:82,categoryFit:86,sizeCompatibility:83}},{rank:3,brand:"Mastermind Toys",score:78,category:"Toys & Hobbies",idealSize:"1,000-1,800 sq ft",rationale:["Premium toy positioning with family loyalty.","Format performs well in 1,000-1,800 sq ft bays.","Category diversification from electronics exposure."],dimensions:{financialHealth:76,expansionMomentum:77,categoryFit:80,sizeCompatibility:78}},{rank:1,brand:"Koodo / TELUS Kiosk",score:88,category:"Electronics",idealSize:"600-1,000 sq ft",rationale:["National rollout of inline and kiosk telecom formats.","Strong Q1 traffic and conversion signal.","Fills telecom gap created by tenant churn."],dimensions:{financialHealth:86,expansionMomentum:89,categoryFit:90,sizeCompatibility:75}},{rank:2,brand:"Samsung Experience",score:82,category:"Electronics",idealSize:"1,200-2,000 sq ft",rationale:["Expanding mall presence in Canada.","Experiential retail model lifts dwell time.","Strong adjacency fit with tech-led corridors."],dimensions:{financialHealth:84,expansionMomentum:81,categoryFit:83,sizeCompatibility:80}},{rank:3,brand:"iStore (Authorized Apple)",score:76,category:"Electronics",idealSize:"1,000-1,600 sq ft",rationale:["High traffic and premium customer alignment.","Consistent sales productivity in suburban malls.","Matches local demographic purchasing power."],dimensions:{financialHealth:79,expansionMomentum:74,categoryFit:77,sizeCompatibility:75}}],U05:[{rank:1,brand:"Anthropologie",score:88,category:"Apparel",idealSize:"1,800-2,500 sq ft",rationale:["Canadian expansion underway with inline formats.","Targets 1,800-2,500 sq ft footprints.","Strong female 28-45 demographic fit and higher ATV."],dimensions:{financialHealth:88,expansionMomentum:89,categoryFit:90,sizeCompatibility:84}},{rank:2,brand:"Reitmans",score:82,category:"Apparel",idealSize:"1,500-2,200 sq ft",rationale:["Post-restructuring growth improving store economics.","Actively targeting mid-tier malls.","Resilient Canadian brand awareness and loyalty."],dimensions:{financialHealth:80,expansionMomentum:83,categoryFit:83,sizeCompatibility:82}},{rank:3,brand:"Banana Republic",score:79,category:"Apparel",idealSize:"2,000-3,000 sq ft",rationale:["Rightsizing to stronger inline format strategy.","Strong loyalty program supporting repeat spend.","Upgrades fashion mix quality for the zone."],dimensions:{financialHealth:79,expansionMomentum:78,categoryFit:80,sizeCompatibility:77}}],U06:[{rank:1,brand:"Koodo / TELUS Kiosk",score:93,category:"Electronics",idealSize:"600-1,000 sq ft",rationale:["National rollout of kiosk formats.","Ideal 600-1,000 sq ft fit.","Directly fills telecom gap left by Wirelesswave."],dimensions:{financialHealth:91,expansionMomentum:95,categoryFit:93,sizeCompatibility:93}},{rank:2,brand:"Samsung Kiosk",score:84,category:"Electronics",idealSize:"700-1,100 sq ft",rationale:["Compact experience format is scaling.","High foot-traffic conversion profile.","Good fit for this small inline bay."],dimensions:{financialHealth:85,expansionMomentum:84,categoryFit:83,sizeCompatibility:84}},{rank:3,brand:"Fossil Group",score:76,category:"Electronics",idealSize:"1,000-1,800 sq ft",rationale:["Rightsizing portfolio for productive centres.","Accessories + electronics crossover potential.","Brings premium gifting behavior to corridor."],dimensions:{financialHealth:74,expansionMomentum:75,categoryFit:77,sizeCompatibility:72}},{rank:1,brand:"Pandora",score:87,category:"Beauty",idealSize:"700-1,100 sq ft",rationale:["Converting small-format spaces with high productivity.","700-1,100 sq ft aligns to compact box.","Very high sales/sq ft potential."],dimensions:{financialHealth:86,expansionMomentum:88,categoryFit:88,sizeCompatibility:86}},{rank:2,brand:"Sephora Mini",score:80,category:"Beauty",idealSize:"800-1,200 sq ft",rationale:["Piloting smaller Studio concept in Canada.","Beauty remains a reliable traffic driver.","Strong conversion among younger demos."],dimensions:{financialHealth:83,expansionMomentum:79,categoryFit:82,sizeCompatibility:78}},{rank:3,brand:"Kiehl's",score:75,category:"Beauty",idealSize:"400-900 sq ft",rationale:["Mall kiosk expansion supported by L’Oreal.","Premium skincare positioning lifts tenant mix.","Compact footprint can work with low capex."],dimensions:{financialHealth:77,expansionMomentum:74,categoryFit:75,sizeCompatibility:74}}],U07:[{rank:1,brand:"Miniso",score:93,category:"Toys & Hobbies",idealSize:"1,000-2,000 sq ft",rationale:["1,000-2,000 sq ft target; same young female demographic as Claire's.","Accessories + lifestyle crossover; 32 new Canadian stores 2023-24."],dimensions:{financialHealth:91,expansionMomentum:94,categoryFit:93,sizeCompatibility:90}},{rank:2,brand:"Lego Certified Store",score:86,category:"Toys & Hobbies",idealSize:"1,200-1,800 sq ft",rationale:["Family traffic driver; extremely high dwell time; strong gifting category."],dimensions:{financialHealth:87,expansionMomentum:85,categoryFit:86,sizeCompatibility:84}},{rank:3,brand:"Lovisa",score:80,category:"Toys & Hobbies",idealSize:"800-1,200 sq ft",rationale:["Direct category replacement; affordable jewelry/accessories.","Very high sales density; strong teen demographic."],dimensions:{financialHealth:80,expansionMomentum:79,categoryFit:81,sizeCompatibility:82}},{rank:1,brand:"Kiehl's",score:88,category:"Beauty",idealSize:"1,000-1,500 sq ft",rationale:["Premium skincare; L'Oreal backing; strong loyalty program.","Premiumizes the zone."],dimensions:{financialHealth:89,expansionMomentum:87,categoryFit:88,sizeCompatibility:85}},{rank:2,brand:"Saje Wellness",score:82,category:"Beauty",idealSize:"1,000-1,400 sq ft",rationale:["Canadian wellness brand; compact format; essential oils and wellness growing category."],dimensions:{financialHealth:83,expansionMomentum:82,categoryFit:83,sizeCompatibility:81}},{rank:3,brand:"Faces Cosmetics",score:75,category:"Beauty",idealSize:"1,000-1,500 sq ft",rationale:["Canadian affordable beauty; accessible price point; consistent mall performer."],dimensions:{financialHealth:76,expansionMomentum:74,categoryFit:75,sizeCompatibility:78}}],U08:[{rank:1,brand:"Anthropologie",score:90,category:"Apparel",idealSize:"1,800-2,500 sq ft",rationale:["Lifestyle crossover appeal in affluent catchment.","1,800-2,500 sq ft format aligns with target bay.","Premiumizes the corridor and basket size."],dimensions:{financialHealth:90,expansionMomentum:89,categoryFit:91,sizeCompatibility:88}},{rank:2,brand:"&Other Stories",score:83,category:"Apparel",idealSize:"1,500-2,200 sq ft",rationale:["H&M Group brand scaling in Canada.","Strong alignment with fashion-forward demographic.","Right-sized for productive inline tenancy."],dimensions:{financialHealth:83,expansionMomentum:84,categoryFit:82,sizeCompatibility:83}},{rank:3,brand:"Aritzia TNA",score:78,category:"Apparel",idealSize:"1,200-2,000 sq ft",rationale:["Sub-brand format fits smaller footprints.","Strong Canadian brand affinity and demand.","Upgrades fashion depth in current mix."],dimensions:{financialHealth:79,expansionMomentum:77,categoryFit:79,sizeCompatibility:77}},{rank:1,brand:"Aesop",score:90,category:"Food & Beverage",idealSize:"1,000-2,000 sq ft",rationale:["Premium positioning fits surrounding tenant mix.","High sales/sq ft and strong brand heat.","Supports category depth with high quality operator."],dimensions:{financialHealth:91,expansionMomentum:88,categoryFit:90,sizeCompatibility:89}},{rank:2,brand:"Cacao Barry Café",score:80,category:"Food & Beverage",idealSize:"1,200-1,800 sq ft",rationale:["Experiential concept that drives destination traffic.","Balanced capex and fit-out complexity.","Well-matched footprint for current bay."],dimensions:{financialHealth:79,expansionMomentum:80,categoryFit:81,sizeCompatibility:80}},{rank:3,brand:"Nespresso Boutique",score:77,category:"Food & Beverage",idealSize:"500-900 sq ft",rationale:["High revenue density in compact boutique format.","Experiential model increases dwell and conversion.","Can operate as premium small-footprint concept."],dimensions:{financialHealth:81,expansionMomentum:75,categoryFit:78,sizeCompatibility:70}}],U09:[{rank:1,brand:"Banana Republic",score:84,category:"Apparel",idealSize:"2,000-3,000 sq ft",rationale:["Rightsizing to inline formats.","1,500 sq ft can support accessories-light format strategy.","Recognizable brand with stable spend profile."],dimensions:{financialHealth:83,expansionMomentum:82,categoryFit:84,sizeCompatibility:71}},{rank:2,brand:"J.Crew",score:80,category:"Apparel",idealSize:"1,200-2,000 sq ft",rationale:["Re-entering Canadian market with curated formats.","1,200-2,000 sq ft target fits this bay.","Premium casual positioning improves mix."],dimensions:{financialHealth:79,expansionMomentum:81,categoryFit:80,sizeCompatibility:80}},{rank:3,brand:"Club Monaco",score:76,category:"Apparel",idealSize:"1,200-1,800 sq ft",rationale:["Canadian origin premium-casual brand.","Strong overlap with local high-income demographic.","Brings fashion credibility to underperforming zone."],dimensions:{financialHealth:75,expansionMomentum:76,categoryFit:77,sizeCompatibility:79}},{rank:1,brand:"Aesop",score:91,category:"Beauty",idealSize:"1,000-2,000 sq ft",rationale:["Converts underperforming zones into premium traffic.","High sales/sq ft benchmark and strong loyalty.","Premiumizes surrounding tenant adjacency."],dimensions:{financialHealth:92,expansionMomentum:90,categoryFit:92,sizeCompatibility:90}},{rank:2,brand:"Kiehl's",score:85,category:"Beauty",idealSize:"1,200-1,800 sq ft",rationale:["1,200-1,800 sq ft flagship format performs well.","L’Oreal backing reduces operator risk.","Strong repeat purchase and retention profile."],dimensions:{financialHealth:86,expansionMomentum:84,categoryFit:86,sizeCompatibility:84}},{rank:3,brand:"Bluemercury",score:79,category:"Beauty",idealSize:"1,000-1,600 sq ft",rationale:["Premium beauty apothecary positioning.","Strong female 30-50 demographic resonance.","Category diversification with high margin profile."],dimensions:{financialHealth:78,expansionMomentum:79,categoryFit:80,sizeCompatibility:79}}],U10:[{rank:1,brand:"Pokéworks",score:92,category:"Food & Beverage",idealSize:"800-1,200 sq ft",rationale:["Fast-casual poke concept with strong BC roots.","800-1,200 sq ft inline format is proven.","Expanding from Metro Vancouver with high lunch traffic."],dimensions:{financialHealth:90,expansionMomentum:93,categoryFit:92,sizeCompatibility:91}},{rank:2,brand:"Coco Fresh Tea & Juice",score:87,category:"Food & Beverage",idealSize:"600-1,000 sq ft",rationale:["Bubble tea demand remains very strong in Canada.","Low fit-out cost and operational flexibility.","Youth demographic driver with high repeat visits."],dimensions:{financialHealth:86,expansionMomentum:88,categoryFit:87,sizeCompatibility:84}},{rank:3,brand:"Manchu Wok",score:78,category:"Food & Beverage",idealSize:"900-1,400 sq ft",rationale:["Refreshed brand identity in 2024.","Familiar operator for BC shoppers.","Low-risk, proven format for this unit size."],dimensions:{financialHealth:79,expansionMomentum:76,categoryFit:78,sizeCompatibility:79}}],U11:[{rank:1,brand:"Coco Fresh Tea & Juice",score:94,category:"Food & Beverage",idealSize:"600-1,000 sq ft",rationale:["Bubble tea category leading brand; extremely low fit-out cost.","Highest growth F&B category in Canadian malls 2024."],dimensions:{financialHealth:92,expansionMomentum:95,categoryFit:94,sizeCompatibility:88}},{rank:2,brand:"Aritea",score:87,category:"Food & Beverage",idealSize:"700-1,000 sq ft",rationale:["Premium tea concept; growing Canadian presence; higher ATV than bubble tea competitors."],dimensions:{financialHealth:86,expansionMomentum:87,categoryFit:86,sizeCompatibility:85}},{rank:3,brand:"Tim Hortons Kiosk",score:80,category:"Food & Beverage",idealSize:"600-1,000 sq ft",rationale:["Kiosk format works at compact sq ft; guaranteed traffic.","Canadian brand recognition unmatched."],dimensions:{financialHealth:84,expansionMomentum:78,categoryFit:80,sizeCompatibility:82}}],U12:[{rank:1,brand:"Pokéworks",score:91,category:"Food & Beverage",idealSize:"800-1,200 sq ft",rationale:["Poke category growing rapidly; healthy fast casual.","Strong lunch and dinner daypart performance."],dimensions:{financialHealth:90,expansionMomentum:91,categoryFit:90,sizeCompatibility:88}},{rank:2,brand:"Freshii",score:84,category:"Food & Beverage",idealSize:"900-1,300 sq ft",rationale:["Health-focused fast casual; Canadian brand.","Appeals to health-conscious suburban demo."],dimensions:{financialHealth:85,expansionMomentum:83,categoryFit:84,sizeCompatibility:82}},{rank:3,brand:"Booster Juice",score:78,category:"Food & Beverage",idealSize:"800-1,100 sq ft",rationale:["Canadian smoothie/juice brand; works well as secondary F&B tenant.","Consistent traffic."],dimensions:{financialHealth:79,expansionMomentum:77,categoryFit:78,sizeCompatibility:80}}],U13:[{rank:1,brand:"Anthropologie",score:90,category:"Apparel",idealSize:"1,800-2,500 sq ft",rationale:["2,400 sq ft is ideal for Anthropologie inline format; lifestyle brand elevates surrounding tenants.","Strong female 28-45 demo."],dimensions:{financialHealth:90,expansionMomentum:89,categoryFit:91,sizeCompatibility:88}},{rank:2,brand:"Club Monaco",score:85,category:"Apparel",idealSize:"2,000-2,500 sq ft",rationale:["Canadian origin brand; premium casual; loyal upscale demographic.","Differentiates from fast fashion."],dimensions:{financialHealth:86,expansionMomentum:84,categoryFit:85,sizeCompatibility:84}},{rank:3,brand:"J.Crew",score:80,category:"Apparel",idealSize:"2,000-3,000 sq ft",rationale:["Re-entering Canadian market aggressively; classic American style.","Strong brand recognition."],dimensions:{financialHealth:80,expansionMomentum:81,categoryFit:80,sizeCompatibility:78}},{rank:1,brand:"Earls Kitchen (Café Format)",score:82,category:"Food & Beverage",idealSize:"2,000-3,000 sq ft",rationale:["Café/express format works at 2,400 sq ft; premium casual dining.","Strong BC brand recognition."],dimensions:{financialHealth:83,expansionMomentum:82,categoryFit:81,sizeCompatibility:80}},{rank:2,brand:"Cactus Club Café (Express)",score:78,category:"Food & Beverage",idealSize:"2,000-2,800 sq ft",rationale:["Smaller café formats being piloted; premium positioning; BC origin brand."],dimensions:{financialHealth:79,expansionMomentum:78,categoryFit:79,sizeCompatibility:77}},{rank:3,brand:"Freshii",score:74,category:"Food & Beverage",idealSize:"1,500-2,500 sq ft",rationale:["Health fast casual; larger format works for dine-in component.","Consistent lunch traffic."],dimensions:{financialHealth:76,expansionMomentum:73,categoryFit:74,sizeCompatibility:75}}],U14:[{rank:1,brand:"Koodo / TELUS Kiosk",score:95,category:"Electronics",idealSize:"600-1,000 sq ft",rationale:["Direct category replacement; fills telecom gap; national rollout program active."],dimensions:{financialHealth:94,expansionMomentum:96,categoryFit:95,sizeCompatibility:93}},{rank:2,brand:"Rogers / Fido Kiosk",score:88,category:"Electronics",idealSize:"700-1,100 sq ft",rationale:["Competing telecom brand; same footprint; guaranteed national ad support."],dimensions:{financialHealth:87,expansionMomentum:88,categoryFit:87,sizeCompatibility:86}},{rank:3,brand:"Samsung Kiosk",score:80,category:"Electronics",idealSize:"700-1,000 sq ft",rationale:["Brand experience kiosk format; high traffic converter in electronics category."],dimensions:{financialHealth:82,expansionMomentum:80,categoryFit:81,sizeCompatibility:82}},{rank:1,brand:"Pandora",score:90,category:"Beauty",idealSize:"800-1,100 sq ft",rationale:["900-1,100 sq ft is Pandora's sweet spot; very high sales/sq ft globally.","Strong gifting and repeat purchase model."],dimensions:{financialHealth:91,expansionMomentum:89,categoryFit:90,sizeCompatibility:88}},{rank:2,brand:"Kiehl's",score:83,category:"Beauty",idealSize:"900-1,500 sq ft",rationale:["Premium skincare; L'Oreal Group backing; strong repeat customer base."],dimensions:{financialHealth:84,expansionMomentum:82,categoryFit:83,sizeCompatibility:81}},{rank:3,brand:"The Ordinary (DECIEM)",score:76,category:"Beauty",idealSize:"700-1,000 sq ft",rationale:["Growing standalone presence; cult brand drives destination visits.","Strong online-to-store conversion."],dimensions:{financialHealth:77,expansionMomentum:75,categoryFit:76,sizeCompatibility:79}}],U16:[{rank:1,brand:"Kiehl's Kiosk",score:89,category:"Beauty",idealSize:"400-800 sq ft",rationale:["Mall kiosk expansion in Canada is active.","400-800 sq ft ideal format for this bay.","L’Oreal Group backing reduces risk."],dimensions:{financialHealth:90,expansionMomentum:88,categoryFit:89,sizeCompatibility:90}},{rank:2,brand:"Saje Wellness",score:83,category:"Beauty",idealSize:"400-700 sq ft",rationale:["Canadian wellness brand with compact-format strength.","Sub-800 sq ft footprints perform well.","Strong natural product category demand."],dimensions:{financialHealth:82,expansionMomentum:83,categoryFit:84,sizeCompatibility:86}},{rank:3,brand:"The Ordinary (DECIEM)",score:76,category:"Beauty",idealSize:"300-600 sq ft",rationale:["Cult skincare brand with strong loyalty.","Very small format supports high throughput.","Attracts destination visits from younger demos."],dimensions:{financialHealth:75,expansionMomentum:77,categoryFit:76,sizeCompatibility:80}},{rank:1,brand:"Nespresso Kiosk",score:84,category:"Electronics",idealSize:"500-900 sq ft",rationale:["Compact boutique with high revenue density.","Experiential retail model drives dwell time.","Strong fit for 600 sq ft small-box tenancy."],dimensions:{financialHealth:86,expansionMomentum:82,categoryFit:83,sizeCompatibility:85}},{rank:2,brand:"Mejuri",score:78,category:"Electronics",idealSize:"600-1,000 sq ft",rationale:["Canadian brand scaling from DTC to malls.","600-1,000 sq ft inline target range.","Social-driven traffic and repeat purchases."],dimensions:{financialHealth:77,expansionMomentum:80,categoryFit:78,sizeCompatibility:78}},{rank:3,brand:"Koodo Kiosk",score:73,category:"Electronics",idealSize:"400-700 sq ft",rationale:["Smallest kiosk format works at this size.","Telecom demand remains resilient.","Fast deployment model for quick occupancy."],dimensions:{financialHealth:74,expansionMomentum:72,categoryFit:74,sizeCompatibility:75}}],BR02:[{rank:1,brand:"Coco Fresh Tea & Juice",score:92,category:"Food & Beverage",idealSize:"700-1,100 sq ft",rationale:["Strong suburban momentum with compact inline format.","Fits 950 sq ft with low conversion cost.","High repeat traffic from youth and commuter mix."],dimensions:{financialHealth:90,expansionMomentum:93,categoryFit:92,sizeCompatibility:91}},{rank:2,brand:"Aritea",score:86,category:"Food & Beverage",idealSize:"800-1,200 sq ft",rationale:["Premium tea positioning lifts podium merchandising.","Expanding in Western Canada.","Good fit for small-format food bay."],dimensions:{financialHealth:85,expansionMomentum:87,categoryFit:86,sizeCompatibility:84}},{rank:3,brand:"Booster Juice",score:79,category:"Food & Beverage",idealSize:"700-1,100 sq ft",rationale:["Proven compact format with healthy menu mix.","Performs well in mixed-use residential nodes.","Moderate capex and fast launch timeline."],dimensions:{financialHealth:79,expansionMomentum:78,categoryFit:80,sizeCompatibility:80}}],BR04:[{rank:1,brand:"Oxford Learning",score:88,category:"Apparel",idealSize:"1,000-1,400 sq ft",rationale:["Education-service concept aligns with family residential catchment.","1,100 sq ft is right-sized for tutoring pods.","Stable recurring revenue model."],dimensions:{financialHealth:87,expansionMomentum:88,categoryFit:89,sizeCompatibility:88}},{rank:2,brand:"Sylvan Learning",score:82,category:"Apparel",idealSize:"900-1,300 sq ft",rationale:["Brand recognition and strong after-school demand.","Fits podium frontage and local demographics.","Balanced operating profile with predictable traffic."],dimensions:{financialHealth:82,expansionMomentum:81,categoryFit:83,sizeCompatibility:84}},{rank:3,brand:"Mathnasium",score:76,category:"Apparel",idealSize:"1,000-1,500 sq ft",rationale:["Growing franchise footprint in suburban markets.","Easy conversion from existing education fit-out.","Good adjacency with residential users above."],dimensions:{financialHealth:75,expansionMomentum:77,categoryFit:76,sizeCompatibility:79}}],BR05:[{rank:1,brand:"Sephora Collection Studio",score:90,category:"Beauty",idealSize:"800-1,200 sq ft",rationale:["Mini-format beauty stores are expanding.","900 sq ft fits perfectly for high-turnover assortment.","Strong attachment sales in mixed-use nodes."],dimensions:{financialHealth:91,expansionMomentum:89,categoryFit:90,sizeCompatibility:92}},{rank:2,brand:"Kiehl's Boutique",score:84,category:"Beauty",idealSize:"700-1,100 sq ft",rationale:["Premium skincare format works in compact bays.","Loyal repeat customer base and strong margin mix.","Operationally efficient replacement for underperforming salon use."],dimensions:{financialHealth:85,expansionMomentum:83,categoryFit:84,sizeCompatibility:86}},{rank:3,brand:"Benefit Cosmetics Brow Bar+",score:78,category:"Beauty",idealSize:"600-1,000 sq ft",rationale:["Service-led model drives frequent visits.","Flexible fit-out and lower occupancy risk.","Strong cross-shopping with food and pharmacy users."],dimensions:{financialHealth:78,expansionMomentum:77,categoryFit:79,sizeCompatibility:82}}],WL04:[{rank:1,brand:"Cactus Club Express",score:88,category:"Food & Beverage",idealSize:"4,000-5,500 sq ft",rationale:["Strong BC brand alignment and patio-friendly format.","Fits 4,800 sq ft corner restaurant box.","Can re-anchor evening traffic for right wing."],dimensions:{financialHealth:88,expansionMomentum:87,categoryFit:89,sizeCompatibility:90}},{rank:2,brand:"Earls Local Kitchen",score:82,category:"Food & Beverage",idealSize:"4,200-6,000 sq ft",rationale:["Premium casual concept with resilient suburban performance.","Good fit for existing restaurant servicing and utilities.","Elevates food mix quality in plaza."],dimensions:{financialHealth:83,expansionMomentum:81,categoryFit:82,sizeCompatibility:85}},{rank:3,brand:"The Keg Market Grill",score:75,category:"Food & Beverage",idealSize:"4,500-6,500 sq ft",rationale:["Destination dining draw with strong average check.","Requires higher capex but offers category uplift.","Best suited if long-term lease secured."],dimensions:{financialHealth:77,expansionMomentum:74,categoryFit:76,sizeCompatibility:78}}],WL05:[{rank:1,brand:"Winners Active",score:87,category:"Apparel",idealSize:"2,000-3,000 sq ft",rationale:["Value fashion remains strong in power centres.","2,200 sq ft unit supports compact off-price concept.","Improves conversion with adjacent traffic anchors."],dimensions:{financialHealth:88,expansionMomentum:86,categoryFit:87,sizeCompatibility:85}},{rank:2,brand:"Uniqlo Roadside",score:82,category:"Apparel",idealSize:"2,000-2,800 sq ft",rationale:["Growing off-mall format potential in suburban BC.","Strong basics assortment and loyalty dynamics.","Right-sized for this left-wing strip location."],dimensions:{financialHealth:83,expansionMomentum:82,categoryFit:82,sizeCompatibility:83}},{rank:3,brand:"Old Navy Outlet",score:76,category:"Apparel",idealSize:"2,000-3,200 sq ft",rationale:["Outlet-style assortment fits value-driven catchment.","Known traffic pull in open-air plaza formats.","Moderate fit-out complexity for quick turnaround."],dimensions:{financialHealth:77,expansionMomentum:75,categoryFit:76,sizeCompatibility:79}}],WL08:[{rank:1,brand:"Specsavers",score:91,category:"Beauty",idealSize:"1,200-1,800 sq ft",rationale:["Optical and health service demand is rising in suburban trade areas.","1,400 sq ft aligns with compact clinic-retail format.","Strong recurring revenue from exams and eyewear cycles."],dimensions:{financialHealth:92,expansionMomentum:90,categoryFit:91,sizeCompatibility:89}},{rank:2,brand:"Clearly Studio",score:84,category:"Beauty",idealSize:"1,000-1,600 sq ft",rationale:["Omnichannel brand with native category relevance.","Can convert existing optical-adjacent infrastructure.","Supports quick lease-up with known local awareness."],dimensions:{financialHealth:83,expansionMomentum:85,categoryFit:84,sizeCompatibility:86}},{rank:3,brand:"FYidoctors",score:78,category:"Beauty",idealSize:"1,200-1,700 sq ft",rationale:["Clinic-led operator with stable healthcare traffic.","Fits this footprint and neighbourhood demand profile.","Moderate growth but high operating stability."],dimensions:{financialHealth:80,expansionMomentum:76,categoryFit:78,sizeCompatibility:80}}],WL09:[{rank:1,brand:"Chatime",score:90,category:"Food & Beverage",idealSize:"500-900 sq ft",rationale:["Bubble tea demand sustains compact kiosk-adjacent units.","650 sq ft is an excellent fit for high-turnover beverage service.","Strong youth traffic overlap with adjacent Starbucks node."],dimensions:{financialHealth:88,expansionMomentum:92,categoryFit:90,sizeCompatibility:93}},{rank:2,brand:"Cinnzeo",score:83,category:"Food & Beverage",idealSize:"500-850 sq ft",rationale:["Snack-led concept suited to open-air convenience trips.","Low build-out complexity and strong impulse conversion.","Good seasonal resilience with coffee adjacency."],dimensions:{financialHealth:82,expansionMomentum:83,categoryFit:84,sizeCompatibility:88}},{rank:3,brand:"Jugo Juice",score:76,category:"Food & Beverage",idealSize:"450-800 sq ft",rationale:["Compact healthy beverage concept with low occupancy risk.","Can open rapidly with standardized kit-of-parts fit-out.","Moderate traffic support from fitness and grocery trips."],dimensions:{financialHealth:76,expansionMomentum:75,categoryFit:77,sizeCompatibility:85}}],WL10:[{rank:1,brand:"Ashley Home Outlet",score:86,category:"Home & Lifestyle",idealSize:"3,000-5,000 sq ft",rationale:["Home value segment fits suburban plaza demand.","3,800 sq ft aligns with compact furniture format.","Improves destination value for back strip."],dimensions:{financialHealth:87,expansionMomentum:85,categoryFit:86,sizeCompatibility:84}},{rank:2,brand:"Bouclair",score:81,category:"Home & Lifestyle",idealSize:"3,000-4,500 sq ft",rationale:["Canadian home decor banner with mid-box flexibility.","Good adjacency with Winners and Dollarama traffic.","Balanced capex and merchandising productivity."],dimensions:{financialHealth:80,expansionMomentum:82,categoryFit:82,sizeCompatibility:81}},{rank:3,brand:"Urban Barn Studio",score:74,category:"Home & Lifestyle",idealSize:"2,800-4,000 sq ft",rationale:["Lifestyle furniture format suited to power-centre context.","Potential uplift if curated showroom strategy adopted.","Moderate expansion pace but strong brand familiarity."],dimensions:{financialHealth:74,expansionMomentum:73,categoryFit:75,sizeCompatibility:78}}]};function F3(n){return typeof n!="number"||Number.isNaN(n)?"#94a3b8":n>=85?"#22C55E":n>=70?"#F59E0B":"#EF4444"}function U3(n){return typeof n!="number"||Number.isNaN(n)?{bg:"#E5E7EB",text:"#374151"}:n>=85?{bg:"#DCFCE7",text:"#16A34A"}:n>=70?{bg:"#FEF3C7",text:"#D97706"}:{bg:"#FEE2E2",text:"#DC2626"}}function O3({recommendation:n}){if(!n)return null;const e=n.dimensions??{},t=typeof e.financialHealth=="number"?e.financialHealth:0,i=typeof e.expansionMomentum=="number"?e.expansionMomentum:0,r=typeof e.categoryFit=="number"?e.categoryFit:0,s=typeof e.sizeCompatibility=="number"?e.sizeCompatibility:0,a=[["Financial",t],["Expansion",i],["Category Fit",r],["Space Compatibility",s]],o=Array.isArray(n.rationale)?n.rationale:[],{bg:l,text:c}=U3(n.score);return P.jsxs("article",{className:"tenant-card",children:[P.jsxs("div",{className:"tenant-card-head",children:[P.jsxs("div",{className:"tenant-card-head-left",children:[P.jsxs("div",{className:"rank-pill",children:["#",n.rank]}),P.jsx("h4",{className:"brand-name",children:n.brand})]}),P.jsxs("div",{className:"score-pill",style:{backgroundColor:l,color:c},children:[n.score,"% match"]})]}),P.jsx("p",{className:"why-title",children:"Why this brand"}),P.jsx("ul",{className:"rationale-list",children:o.map(u=>P.jsx("li",{children:u},u))}),P.jsx("div",{className:"mini-score-grid",children:a.map(([u,h])=>P.jsxs("div",{children:[P.jsxs("div",{className:"mini-score-label",children:[P.jsx("span",{children:u}),P.jsxs("span",{children:[h,"%"]})]}),P.jsx("div",{className:"mini-score-track",children:P.jsx("div",{className:"mini-score-fill",style:{width:`${Math.min(100,Math.max(0,h))}%`,backgroundColor:F3(h)}})})]},u))})]})}const k3=[{id:"Apparel",label:"Apparel",Icon:JE,examples:"Aritzia, Banana Republic, Anthropologie"},{id:"Food & Beverage",label:"Food & Beverage",Icon:GE,examples:"Pokeworks, Coco Fresh Tea, Tim Hortons"},{id:"Electronics",label:"Electronics",Icon:tT,examples:"Koodo, Apple, Samsung"},{id:"Beauty",label:"Beauty",Icon:g0,examples:"Sephora, Aesop, Kiehl's"},{id:"Footwear",label:"Footwear",Icon:qE,examples:"Foot Locker, Browns, Steve Madden"},{id:"Sporting Goods",label:"Sporting Goods",Icon:UE,examples:"Lululemon, Decathlon, MEC"},{id:"Toys & Hobbies",label:"Toys & Hobbies",Icon:ZE,examples:"Miniso, Lego, Mastermind Toys"},{id:"Home & Lifestyle",label:"Home & Lifestyle",Icon:g0,examples:"Structube, Bouclair, Urban Barn"}];function z3(n){return n<1e3?"Ideal for kiosks, boutique beauty, and accessories":n<=2e3?"Suited for specialty retail, fast casual, and lifestyle":n<=4e3?"Fits mid-format apparel, food concepts, and electronics":"Large format - flagships, sporting goods, multi-concept"}function B3(n){if(n.status==="underperforming")return{label:"Underperforming",className:"status-badge status-badge-under"};const e=sf(n.leaseExpiry);return e==="under12"||e==="under24"?{label:"Expiring Soon",className:"status-badge status-badge-expiring"}:{label:"Stable",className:"status-badge status-badge-stable"}}function H3(){const{drawerOpen:n,drawerStep:e,selectedCategories:t,selectedUnit:i,closeDrawer:r,setDrawerStep:s,toggleSelectedCategory:a,removeSelectedCategory:o,removeUserUnit:l}=Si(),[c,u]=nt.useState(!1),[h,d]=nt.useState(0),p=(i==null?void 0:i.id)??"",g=I3[p]??[],v=["Analyzing space profile...","Searching tenant database...","Scoring expansion signals...","Ranking best matches..."],_=nt.useMemo(()=>{const T=Object.fromEntries(t.map(b=>[b,[]]));return g.forEach(b=>{b!=null&&b.category&&T[b.category]&&T[b.category].push(b)}),T},[t,g]);if(!n||!i||typeof i.sqFt!="number"||typeof i.leaseExpiry!="string"||!i.tenantName)return null;const f=B3(i),m=typeof i.remainingMonths=="number"?i.remainingMonths:0,x=m<12?"#DC2626":m<24?"#D97706":"#374151",S=typeof i.footTrafficIndex=="number"?i.footTrafficIndex:0,w=S<70?"#DC2626":S<100?"#D97706":"#16A34A";return P.jsx(P.Fragment,{children:P.jsxs("aside",{className:"recommendation-drawer",children:[P.jsxs("header",{className:"drawer-header",children:[P.jsxs("div",{children:[P.jsx("h3",{children:i.tenantName}),P.jsxs("p",{children:[i.id," · ",i.sqFt.toLocaleString()," sq ft"]})]}),P.jsx("button",{type:"button",className:"icon-btn",onClick:r,"aria-label":"Close drawer",children:P.jsx(my,{size:16})})]}),e==="info"?P.jsxs(P.Fragment,{children:[P.jsxs("div",{className:"drawer-body",children:[P.jsx("div",{className:"drawer-category-row",style:{marginBottom:12},children:P.jsx("span",{className:"category-tag",children:i.category})}),P.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 8px",marginBottom:12},children:[P.jsxs("div",{children:[P.jsx("p",{style:{fontSize:11,color:"#9CA3AF",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"Unit Size"}),P.jsxs("p",{style:{fontSize:15,fontWeight:700,color:"#0A1F3D",margin:"4px 0 0"},children:[i.sqFt.toLocaleString()," sq ft"]})]}),P.jsxs("div",{children:[P.jsx("p",{style:{fontSize:11,color:"#9CA3AF",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"Lease Expiry"}),P.jsx("p",{style:{fontSize:15,fontWeight:700,color:"#0A1F3D",margin:"4px 0 0"},children:Km(i.leaseExpiry)})]})]}),P.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:6,marginBottom:0},children:[P.jsx("p",{style:{fontSize:11,color:"#9CA3AF",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"STATUS"}),P.jsx("span",{className:f.className,children:f.label})]}),P.jsx("div",{style:{height:1,background:"#E2E8F0",width:"100%",margin:"12px 0"}}),P.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 8px",marginBottom:0},children:[P.jsxs("div",{children:[P.jsx("p",{style:{fontSize:11,color:"#9CA3AF",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"Current Rent"}),P.jsxs("p",{style:{fontSize:15,fontWeight:700,color:"#0A1F3D",margin:"4px 0 0"},children:["$",i.currentRent," / sq ft"]})]}),P.jsxs("div",{children:[P.jsx("p",{style:{fontSize:11,color:"#9CA3AF",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"Lease Signed"}),P.jsx("p",{style:{fontSize:15,fontWeight:700,color:"#0A1F3D",margin:"4px 0 0"},children:i.signingDate})]})]}),P.jsxs("div",{style:{marginBottom:0},children:[P.jsx("p",{style:{fontSize:11,color:"#9CA3AF",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"Remaining Term"}),P.jsxs("p",{style:{fontSize:15,fontWeight:700,color:x,margin:"4px 0 0"},children:[m," months remaining"]})]}),P.jsx("div",{style:{height:1,background:"#E2E8F0",width:"100%",margin:"12px 0"}}),P.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 8px",marginBottom:12},children:[P.jsxs("div",{children:[P.jsx("p",{style:{fontSize:11,color:"#9CA3AF",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"Foot Traffic Index"}),P.jsxs("p",{style:{fontSize:15,fontWeight:700,color:w,margin:"4px 0 0"},children:[S," ",P.jsx("span",{style:{fontSize:12,fontWeight:400,color:"#9CA3AF"},children:"(avg: 100)"})]})]}),P.jsxs("div",{children:[P.jsx("p",{style:{fontSize:11,color:"#9CA3AF",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"Anchor Proximity"}),P.jsx("p",{style:{fontSize:14,fontWeight:600,color:"#374151",margin:"4px 0 0"},children:i.anchorProximity})]})]}),P.jsx("div",{style:{height:1,background:"#E2E8F0",width:"100%",margin:"12px 0"}}),P.jsxs("div",{style:{background:"#fff",border:"1px solid #E2E8F0",borderRadius:8,padding:12},children:[P.jsx("div",{style:{fontWeight:700,color:"#0A1F3D",marginBottom:6},children:"Performance Note"}),P.jsx("div",{style:{color:"#64748B",fontSize:13},children:i.performanceNote??"—"})]})]}),P.jsxs("div",{className:"drawer-footer",children:[P.jsx("button",{type:"button",className:"find-replacement-btn",onClick:()=>s("category"),children:"Find Replacement Tenants →"}),i.userAdded?P.jsx("button",{type:"button",className:"remove-unit-link",onClick:()=>{window.confirm(`Remove ${i.tenantName} from the map?
This cannot be undone.`)&&l(i.id)},children:"Remove this unit"}):null]})]}):null,e==="category"?P.jsxs(P.Fragment,{children:[P.jsxs("div",{className:"drawer-body",children:[P.jsx("button",{type:"button",className:"text-back-link",onClick:()=>s("info"),children:"← Back"}),P.jsxs("h4",{className:"category-heading",children:["Top categories for a ",i.sqFt.toLocaleString()," sq ft space"]}),P.jsx("p",{className:"category-subtext",children:z3(i.sqFt)}),P.jsx("div",{className:"category-card-grid",children:k3.filter(T=>N3.includes(T.id)).map(T=>{const{id:b,label:y,examples:E}=T,L=t.includes(b);return P.jsxs("button",{type:"button",className:L?"category-card selected":"category-card",onClick:()=>a(b),children:[P.jsx(T.Icon,{size:24}),P.jsxs("div",{className:"category-card-copy",children:[P.jsx("strong",{children:y}),P.jsx("span",{children:E})]}),L?P.jsx("span",{className:"category-check",children:P.jsx(py,{size:16})}):null]},b)})})]}),P.jsx("div",{className:"drawer-footer",children:P.jsx("button",{type:"button",className:"show-recommendations-btn",disabled:!t.length||c,onClick:()=>{u(!0),d(0);let T=0;const b=setInterval(()=>{T+=1,T<v.length?d(T):clearInterval(b)},500);setTimeout(()=>{clearInterval(b),u(!1),s("recommendations")},2e3)},children:c?P.jsxs(P.Fragment,{children:[P.jsx("span",{className:"loading-spinner"}),P.jsx("span",{style:{animation:"fadeIn 0.15s ease",fontSize:14},children:v[h]},h)]}):P.jsxs(P.Fragment,{children:[P.jsx("span",{children:"Generate AI Recommendations"}),P.jsx("span",{className:"sparkle",children:" ✦"})]})})})]}):null,e==="recommendations"?P.jsxs("div",{className:"drawer-body",children:[P.jsx("button",{type:"button",className:"text-back-link",onClick:()=>s("category"),children:"← Change Category"}),P.jsxs("p",{className:"space-context-line",children:[i.tenantName," | ",i.sqFt.toLocaleString()," sq ft"]}),P.jsx("div",{className:"selected-chip-row",children:t.map(T=>P.jsxs("button",{type:"button",className:"selected-category-chip",onClick:()=>o(T),children:[T," ×"]},T))}),t.map(T=>{const b=_[T]??[];return P.jsxs("section",{children:[P.jsxs("div",{className:"recommendation-title",children:[P.jsx("h4",{children:T}),P.jsxs("span",{children:[b.length," brands"]})]}),b.length?b.map(y=>P.jsx(O3,{recommendation:y},`${i.id}-${T}-${y.rank}-${y.brand}`)):P.jsx("p",{className:"empty-state",children:"No recommendations available for this category and space size."})]},`${i.id}-${T}`)})]}):null]})})}const V3=[{key:"stable",label:"Stable"},{key:"expiring",label:"Expiring Soon"},{key:"underperforming",label:"Underperforming"}],G3=["Apparel","Food & Beverage","Electronics","Footwear","Sporting Goods","Toys & Hobbies","Beauty","Home & Lifestyle","Jewellery","Financial Services","Other"];function Q_(n){const e=n.reduce((t,i)=>{const r=String(i.id??"").match(/^U(\d+)$/i);return r?Math.max(t,Number(r[1])):t},0);return`U${String(e+1).padStart(2,"0")}`}function J_(n,e,t=.25){return!(n.x+n.width/2+t<e.x-e.width/2||n.x-n.width/2-t>e.x+e.width/2||n.z+n.depth/2+t<e.z-e.depth/2||n.z-n.depth/2-t>e.z+e.depth/2)}function W3(n){const e={width:3,depth:2.5,height:1.2},t=n.find(l=>l.tenantName==="Mobile Snap"||l.id==="U16"),i=(t==null?void 0:t.x)??6,r=(t==null?void 0:t.z)??6,s=(t==null?void 0:t.width)??2,a=.8;for(let l=0;l<24;l+=1){const c={x:i+s/2+e.width/2+a+l*(e.width+a),z:r,...e};if(!n.some(h=>J_(c,{x:h.x,z:h.z,width:h.width,depth:h.depth})))return c}const o={x:8,z:6};for(let l=0;l<6;l+=1)for(let c=0;c<8;c+=1){const u={x:o.x+c*(e.width+a),z:o.z+l*(e.depth+a),...e};if(!n.some(d=>J_(u,{x:d.x,z:d.z,width:d.width,depth:d.depth})))return u}return{x:10,z:8,...e}}function j3(){const n=nt.useRef(null),[e,t]=nt.useState(!1),[i,r]=nt.useState("entry"),[s,a]=nt.useState({}),[o,l]=nt.useState(""),c=Si(f=>f.addUserUnit),u=Si(f=>f.units),h=nt.useMemo(()=>Q_(u),[u]),[d,p]=nt.useState({name:"",unitId:h,sqFt:"",category:"",expiry:"",rent:"",status:"stable",anchor:""}),g=()=>{a({}),r("entry"),p({name:"",unitId:Q_(u),sqFt:"",category:"",expiry:"",rent:"",status:"stable",anchor:""}),t(!0)},v=()=>{t(!1),r("entry"),a({})},_=()=>{const f=["name","unitId","sqFt","category","expiry","rent","status"],m={};if(f.forEach(w=>{String(d[w]??"").trim()||(m[w]="This field is required")}),Object.keys(m).length){a(m);return}const x=W3(u),S={id:d.unitId.trim().toUpperCase(),tenantName:d.name.trim(),sqFt:Number(d.sqFt),category:d.category,leaseExpiry:d.expiry,currentRent:Number(d.rent),status:d.status,anchorProximity:d.anchor.trim()||"Mid-mall corridor",signingDate:new Date().toLocaleDateString("en-CA",{month:"short",year:"numeric"}),remainingMonths:Math.max(0,Xt(d.expiry)),footTrafficIndex:100,performanceNote:"Newly added unit. Performance data pending.",salesIndex:100,x:x.x,z:x.z,width:x.width,depth:x.depth,height:x.height,userAdded:!0};c(S),v(),l(`${S.tenantName} added to map`),setTimeout(()=>l(""),3e3)};return P.jsxs("div",{className:"app-shell",children:[P.jsxs("header",{className:"app-header",children:[P.jsx("div",{className:"brand",children:P.jsx("span",{className:"brand-text",children:"QuadReal"})}),P.jsx("button",{type:"button",className:"add-unit-btn",onClick:g,"aria-label":"Add unit",children:P.jsx(HE,{size:20})})]}),P.jsxs("main",{className:"main-layout",children:[P.jsx(L3,{onResetView:()=>{var f;return(f=n.current)==null?void 0:f.call(n)}}),P.jsx("section",{className:"map-section",children:P.jsx(D3,{onResetViewReady:f=>{n.current=f}})}),P.jsx(H3,{})]}),P.jsxs("div",{className:"min-width-banner",children:[P.jsx(rT,{size:14}),P.jsx("span",{children:"Smart Leasing is optimized for desktop (1024px+)."})]}),e?P.jsx("div",{className:"modal-backdrop",role:"presentation",onClick:v,children:P.jsxs("div",{className:"add-unit-modal",role:"dialog","aria-modal":"true",onClick:f=>f.stopPropagation(),children:[P.jsx("button",{type:"button",className:"modal-close-btn",onClick:v,"aria-label":"Close",children:P.jsx(my,{size:16})}),P.jsx("h3",{children:"Add New Unit"}),P.jsx("p",{children:"Add a unit manually or import from a connected source"}),i==="entry"?P.jsxs("div",{className:"add-options-grid",children:[P.jsxs("button",{type:"button",className:"add-option-card",onClick:()=>r("manual"),children:[P.jsx($E,{size:20}),P.jsx("strong",{children:"Add Manually"}),P.jsx("span",{children:"Enter unit details using the form"})]}),P.jsxs("div",{className:"add-option-card",children:[P.jsx(jE,{size:20}),P.jsx("strong",{children:"Import from Yardi"}),P.jsx("span",{children:"Sync unit data from your Yardi property management system"})]}),P.jsxs("div",{className:"add-option-card",children:[P.jsx(aT,{size:20}),P.jsx("strong",{children:"Import from SharePoint"}),P.jsx("span",{children:"Pull unit data from your SharePoint list"})]})]}):P.jsxs("div",{className:"manual-form-wrap",children:[P.jsx("button",{type:"button",className:"text-back-link",onClick:()=>r("entry"),children:"← Back"}),P.jsxs("div",{className:"manual-field",children:[P.jsx("label",{children:"TENANT / BRAND NAME"}),P.jsx("input",{className:s.name?"field-error":"",placeholder:"e.g. Zara",value:d.name,onChange:f=>p(m=>({...m,name:f.target.value}))}),s.name?P.jsx("small",{children:s.name}):null]}),P.jsxs("div",{className:"manual-field",children:[P.jsx("label",{children:"UNIT ID"}),P.jsx("input",{className:s.unitId?"field-error":"",placeholder:"e.g. U17",value:d.unitId,onChange:f=>p(m=>({...m,unitId:f.target.value}))}),s.unitId?P.jsx("small",{children:s.unitId}):null]}),P.jsxs("div",{className:"manual-field",children:[P.jsx("label",{children:"SQUARE FOOTAGE"}),P.jsxs("div",{className:"inline-affix-wrap",children:[P.jsx("input",{type:"number",className:s.sqFt?"field-error":"",placeholder:"e.g. 2400",value:d.sqFt,onChange:f=>p(m=>({...m,sqFt:f.target.value}))}),P.jsx("span",{children:"sq ft"})]}),s.sqFt?P.jsx("small",{children:s.sqFt}):null]}),P.jsxs("div",{className:"manual-field",children:[P.jsx("label",{children:"CATEGORY"}),P.jsxs("select",{className:s.category?"field-error":"",value:d.category,onChange:f=>p(m=>({...m,category:f.target.value})),children:[P.jsx("option",{value:"",children:"Select category"}),G3.map(f=>P.jsx("option",{value:f,children:f},f))]}),s.category?P.jsx("small",{children:s.category}):null]}),P.jsxs("div",{className:"two-col",children:[P.jsxs("div",{className:"manual-field",children:[P.jsx("label",{children:"LEASE EXPIRY"}),P.jsx("input",{type:"month",className:s.expiry?"field-error":"",value:d.expiry,onChange:f=>p(m=>({...m,expiry:f.target.value}))}),s.expiry?P.jsx("small",{children:s.expiry}):null]}),P.jsxs("div",{className:"manual-field",children:[P.jsx("label",{children:"CURRENT RENT"}),P.jsxs("div",{className:"inline-affix-wrap",children:[P.jsx("span",{children:"$"}),P.jsx("input",{type:"number",className:s.rent?"field-error":"",placeholder:"e.g. 48",value:d.rent,onChange:f=>p(m=>({...m,rent:f.target.value}))}),P.jsx("span",{children:"/ sq ft"})]}),s.rent?P.jsx("small",{children:s.rent}):null]})]}),P.jsxs("div",{className:"manual-field",children:[P.jsx("label",{children:"STATUS"}),P.jsx("div",{className:"segmented-wrap",children:V3.map(f=>P.jsx("button",{type:"button",className:d.status===f.key?"segment active":"segment",onClick:()=>p(m=>({...m,status:f.key})),children:f.label},f.key))})]}),P.jsxs("div",{className:"manual-field",children:[P.jsxs("label",{children:["ANCHOR PROXIMITY ",P.jsx("em",{children:"(optional)"})]}),P.jsx("input",{placeholder:"e.g. Adjacent to H&M",value:d.anchor,onChange:f=>p(m=>({...m,anchor:f.target.value}))})]}),P.jsxs("div",{className:"modal-form-footer",children:[P.jsx("button",{type:"button",className:"submit-unit-btn",onClick:_,children:"Add Unit to Map"}),P.jsx("button",{type:"button",className:"cancel-unit-btn",onClick:v,children:"Cancel"})]})]})]})}):null,o?P.jsx("div",{className:"app-toast",children:o}):null]})}dy(document.getElementById("root")).render(P.jsx(nt.StrictMode,{children:P.jsx(j3,{})}));
