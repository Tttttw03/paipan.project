(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))h(g);new MutationObserver(g=>{for(const f of g)if(f.type==="childList")for(const F of f.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&h(F)}).observe(document,{childList:!0,subtree:!0});function l(g){const f={};return g.integrity&&(f.integrity=g.integrity),g.referrerPolicy&&(f.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?f.credentials="include":g.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function h(g){if(g.ep)return;g.ep=!0;const f=l(g);fetch(g.href,f)}})();function C4(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var U5={exports:{}},Pu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $7;function Rs(){if($7)return Pu;$7=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function l(h,g,f){var F=null;if(f!==void 0&&(F=""+f),g.key!==void 0&&(F=""+g.key),"key"in g){f={};for(var A in g)A!=="key"&&(f[A]=g[A])}else f=g;return g=f.ref,{$$typeof:o,type:h,key:F,ref:g!==void 0?g:null,props:f}}return Pu.Fragment=t,Pu.jsx=l,Pu.jsxs=l,Pu}var n4;function Ls(){return n4||(n4=1,U5.exports=Rs()),U5.exports}var D=Ls(),X5={exports:{}},s0={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u4;function qs(){if(u4)return s0;u4=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),F=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),R=Symbol.iterator;function L(B){return B===null||typeof B!="object"?null:(B=R&&B[R]||B["@@iterator"],typeof B=="function"?B:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,a0={};function W(B,I,q){this.props=B,this.context=I,this.refs=a0,this.updater=q||J}W.prototype.isReactComponent={},W.prototype.setState=function(B,I){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,I,"setState")},W.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function w0(){}w0.prototype=W.prototype;function c0(B,I,q){this.props=B,this.context=I,this.refs=a0,this.updater=q||J}var G0=c0.prototype=new w0;G0.constructor=c0,k(G0,W.prototype),G0.isPureReactComponent=!0;var Y0=Array.isArray;function E0(){}var u0={H:null,A:null,T:null,S:null},C0=Object.prototype.hasOwnProperty;function d0(B,I,q){var Q=q.ref;return{$$typeof:o,type:B,key:I,ref:Q!==void 0?Q:null,props:q}}function J0(B,I){return d0(B.type,I,B.props)}function k0(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function M0(B){var I={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(q){return I[q]})}var Q0=/\/+/g;function S0(B,I){return typeof B=="object"&&B!==null&&B.key!=null?M0(""+B.key):I.toString(36)}function X0(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(E0,E0):(B.status="pending",B.then(function(I){B.status==="pending"&&(B.status="fulfilled",B.value=I)},function(I){B.status==="pending"&&(B.status="rejected",B.reason=I)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function p(B,I,q,Q,l0){var r0=typeof B;(r0==="undefined"||r0==="boolean")&&(B=null);var B0=!1;if(B===null)B0=!0;else switch(r0){case"bigint":case"string":case"number":B0=!0;break;case"object":switch(B.$$typeof){case o:case t:B0=!0;break;case S:return B0=B._init,p(B0(B._payload),I,q,Q,l0)}}if(B0)return l0=l0(B),B0=Q===""?"."+S0(B,0):Q,Y0(l0)?(q="",B0!=null&&(q=B0.replace(Q0,"$&/")+"/"),p(l0,I,q,"",function(D1){return D1})):l0!=null&&(k0(l0)&&(l0=J0(l0,q+(l0.key==null||B&&B.key===l0.key?"":(""+l0.key).replace(Q0,"$&/")+"/")+B0)),I.push(l0)),1;B0=0;var cn=Q===""?".":Q+":";if(Y0(B))for(var R0=0;R0<B.length;R0++)Q=B[R0],r0=cn+S0(Q,R0),B0+=p(Q,I,q,r0,l0);else if(R0=L(B),typeof R0=="function")for(B=R0.call(B),R0=0;!(Q=B.next()).done;)Q=Q.value,r0=cn+S0(Q,R0++),B0+=p(Q,I,q,r0,l0);else if(r0==="object"){if(typeof B.then=="function")return p(X0(B),I,q,Q,l0);throw I=String(B),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return B0}function U(B,I,q){if(B==null)return B;var Q=[],l0=0;return p(B,Q,"","",function(r0){return I.call(q,r0,l0++)}),Q}function V(B){if(B._status===-1){var I=B._result;I=I(),I.then(function(q){(B._status===0||B._status===-1)&&(B._status=1,B._result=q)},function(q){(B._status===0||B._status===-1)&&(B._status=2,B._result=q)}),B._status===-1&&(B._status=0,B._result=I)}if(B._status===1)return B._result.default;throw B._result}var o0=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},M={map:U,forEach:function(B,I,q){U(B,function(){I.apply(this,arguments)},q)},count:function(B){var I=0;return U(B,function(){I++}),I},toArray:function(B){return U(B,function(I){return I})||[]},only:function(B){if(!k0(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return s0.Activity=_,s0.Children=M,s0.Component=W,s0.Fragment=l,s0.Profiler=g,s0.PureComponent=c0,s0.StrictMode=h,s0.Suspense=y,s0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u0,s0.__COMPILER_RUNTIME={__proto__:null,c:function(B){return u0.H.useMemoCache(B)}},s0.cache=function(B){return function(){return B.apply(null,arguments)}},s0.cacheSignal=function(){return null},s0.cloneElement=function(B,I,q){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Q=k({},B.props),l0=B.key;if(I!=null)for(r0 in I.key!==void 0&&(l0=""+I.key),I)!C0.call(I,r0)||r0==="key"||r0==="__self"||r0==="__source"||r0==="ref"&&I.ref===void 0||(Q[r0]=I[r0]);var r0=arguments.length-2;if(r0===1)Q.children=q;else if(1<r0){for(var B0=Array(r0),cn=0;cn<r0;cn++)B0[cn]=arguments[cn+2];Q.children=B0}return d0(B.type,l0,Q)},s0.createContext=function(B){return B={$$typeof:F,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:f,_context:B},B},s0.createElement=function(B,I,q){var Q,l0={},r0=null;if(I!=null)for(Q in I.key!==void 0&&(r0=""+I.key),I)C0.call(I,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(l0[Q]=I[Q]);var B0=arguments.length-2;if(B0===1)l0.children=q;else if(1<B0){for(var cn=Array(B0),R0=0;R0<B0;R0++)cn[R0]=arguments[R0+2];l0.children=cn}if(B&&B.defaultProps)for(Q in B0=B.defaultProps,B0)l0[Q]===void 0&&(l0[Q]=B0[Q]);return d0(B,r0,l0)},s0.createRef=function(){return{current:null}},s0.forwardRef=function(B){return{$$typeof:A,render:B}},s0.isValidElement=k0,s0.lazy=function(B){return{$$typeof:S,_payload:{_status:-1,_result:B},_init:V}},s0.memo=function(B,I){return{$$typeof:x,type:B,compare:I===void 0?null:I}},s0.startTransition=function(B){var I=u0.T,q={};u0.T=q;try{var Q=B(),l0=u0.S;l0!==null&&l0(q,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(E0,o0)}catch(r0){o0(r0)}finally{I!==null&&q.types!==null&&(I.types=q.types),u0.T=I}},s0.unstable_useCacheRefresh=function(){return u0.H.useCacheRefresh()},s0.use=function(B){return u0.H.use(B)},s0.useActionState=function(B,I,q){return u0.H.useActionState(B,I,q)},s0.useCallback=function(B,I){return u0.H.useCallback(B,I)},s0.useContext=function(B){return u0.H.useContext(B)},s0.useDebugValue=function(){},s0.useDeferredValue=function(B,I){return u0.H.useDeferredValue(B,I)},s0.useEffect=function(B,I){return u0.H.useEffect(B,I)},s0.useEffectEvent=function(B){return u0.H.useEffectEvent(B)},s0.useId=function(){return u0.H.useId()},s0.useImperativeHandle=function(B,I,q){return u0.H.useImperativeHandle(B,I,q)},s0.useInsertionEffect=function(B,I){return u0.H.useInsertionEffect(B,I)},s0.useLayoutEffect=function(B,I){return u0.H.useLayoutEffect(B,I)},s0.useMemo=function(B,I){return u0.H.useMemo(B,I)},s0.useOptimistic=function(B,I){return u0.H.useOptimistic(B,I)},s0.useReducer=function(B,I,q){return u0.H.useReducer(B,I,q)},s0.useRef=function(B){return u0.H.useRef(B)},s0.useState=function(B){return u0.H.useState(B)},s0.useSyncExternalStore=function(B,I,q){return u0.H.useSyncExternalStore(B,I,q)},s0.useTransition=function(){return u0.H.useTransition()},s0.version="19.2.0",s0}var e4;function K5(){return e4||(e4=1,X5.exports=qs()),X5.exports}var U0=K5();const Js=C4(U0);var R5={exports:{}},Vu={},L5={exports:{}},q5={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i4;function ks(){return i4||(i4=1,(function(o){function t(p,U){var V=p.length;p.push(U);n:for(;0<V;){var o0=V-1>>>1,M=p[o0];if(0<g(M,U))p[o0]=U,p[V]=M,V=o0;else break n}}function l(p){return p.length===0?null:p[0]}function h(p){if(p.length===0)return null;var U=p[0],V=p.pop();if(V!==U){p[0]=V;n:for(var o0=0,M=p.length,B=M>>>1;o0<B;){var I=2*(o0+1)-1,q=p[I],Q=I+1,l0=p[Q];if(0>g(q,V))Q<M&&0>g(l0,q)?(p[o0]=l0,p[Q]=V,o0=Q):(p[o0]=q,p[I]=V,o0=I);else if(Q<M&&0>g(l0,V))p[o0]=l0,p[Q]=V,o0=Q;else break n}}return U}function g(p,U){var V=p.sortIndex-U.sortIndex;return V!==0?V:p.id-U.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var F=Date,A=F.now();o.unstable_now=function(){return F.now()-A}}var y=[],x=[],S=1,_=null,R=3,L=!1,J=!1,k=!1,a0=!1,W=typeof setTimeout=="function"?setTimeout:null,w0=typeof clearTimeout=="function"?clearTimeout:null,c0=typeof setImmediate<"u"?setImmediate:null;function G0(p){for(var U=l(x);U!==null;){if(U.callback===null)h(x);else if(U.startTime<=p)h(x),U.sortIndex=U.expirationTime,t(y,U);else break;U=l(x)}}function Y0(p){if(k=!1,G0(p),!J)if(l(y)!==null)J=!0,E0||(E0=!0,M0());else{var U=l(x);U!==null&&X0(Y0,U.startTime-p)}}var E0=!1,u0=-1,C0=5,d0=-1;function J0(){return a0?!0:!(o.unstable_now()-d0<C0)}function k0(){if(a0=!1,E0){var p=o.unstable_now();d0=p;var U=!0;try{n:{J=!1,k&&(k=!1,w0(u0),u0=-1),L=!0;var V=R;try{u:{for(G0(p),_=l(y);_!==null&&!(_.expirationTime>p&&J0());){var o0=_.callback;if(typeof o0=="function"){_.callback=null,R=_.priorityLevel;var M=o0(_.expirationTime<=p);if(p=o.unstable_now(),typeof M=="function"){_.callback=M,G0(p),U=!0;break u}_===l(y)&&h(y),G0(p)}else h(y);_=l(y)}if(_!==null)U=!0;else{var B=l(x);B!==null&&X0(Y0,B.startTime-p),U=!1}}break n}finally{_=null,R=V,L=!1}U=void 0}}finally{U?M0():E0=!1}}}var M0;if(typeof c0=="function")M0=function(){c0(k0)};else if(typeof MessageChannel<"u"){var Q0=new MessageChannel,S0=Q0.port2;Q0.port1.onmessage=k0,M0=function(){S0.postMessage(null)}}else M0=function(){W(k0,0)};function X0(p,U){u0=W(function(){p(o.unstable_now())},U)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(p){p.callback=null},o.unstable_forceFrameRate=function(p){0>p||125<p?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C0=0<p?Math.floor(1e3/p):5},o.unstable_getCurrentPriorityLevel=function(){return R},o.unstable_next=function(p){switch(R){case 1:case 2:case 3:var U=3;break;default:U=R}var V=R;R=U;try{return p()}finally{R=V}},o.unstable_requestPaint=function(){a0=!0},o.unstable_runWithPriority=function(p,U){switch(p){case 1:case 2:case 3:case 4:case 5:break;default:p=3}var V=R;R=p;try{return U()}finally{R=V}},o.unstable_scheduleCallback=function(p,U,V){var o0=o.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?o0+V:o0):V=o0,p){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=V+M,p={id:S++,callback:U,priorityLevel:p,startTime:V,expirationTime:M,sortIndex:-1},V>o0?(p.sortIndex=V,t(x,p),l(y)===null&&p===l(x)&&(k?(w0(u0),u0=-1):k=!0,X0(Y0,V-o0))):(p.sortIndex=M,t(y,p),J||L||(J=!0,E0||(E0=!0,M0()))),p},o.unstable_shouldYield=J0,o.unstable_wrapCallback=function(p){var U=R;return function(){var V=R;R=U;try{return p.apply(this,arguments)}finally{R=V}}}})(q5)),q5}var t4;function Qs(){return t4||(t4=1,L5.exports=ks()),L5.exports}var J5={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a4;function Ks(){if(a4)return Dn;a4=1;var o=K5();function t(y){var x="https://react.dev/errors/"+y;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)x+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+y+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var h={d:{f:l,r:function(){throw Error(t(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},g=Symbol.for("react.portal");function f(y,x,S){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:g,key:_==null?null:""+_,children:y,containerInfo:x,implementation:S}}var F=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(y,x){if(y==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,Dn.createPortal=function(y,x){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(t(299));return f(y,x,null,S)},Dn.flushSync=function(y){var x=F.T,S=h.p;try{if(F.T=null,h.p=2,y)return y()}finally{F.T=x,h.p=S,h.d.f()}},Dn.preconnect=function(y,x){typeof y=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,h.d.C(y,x))},Dn.prefetchDNS=function(y){typeof y=="string"&&h.d.D(y)},Dn.preinit=function(y,x){if(typeof y=="string"&&x&&typeof x.as=="string"){var S=x.as,_=A(S,x.crossOrigin),R=typeof x.integrity=="string"?x.integrity:void 0,L=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;S==="style"?h.d.S(y,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:_,integrity:R,fetchPriority:L}):S==="script"&&h.d.X(y,{crossOrigin:_,integrity:R,fetchPriority:L,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Dn.preinitModule=function(y,x){if(typeof y=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var S=A(x.as,x.crossOrigin);h.d.M(y,{crossOrigin:S,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&h.d.M(y)},Dn.preload=function(y,x){if(typeof y=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var S=x.as,_=A(S,x.crossOrigin);h.d.L(y,S,{crossOrigin:_,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Dn.preloadModule=function(y,x){if(typeof y=="string")if(x){var S=A(x.as,x.crossOrigin);h.d.m(y,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:S,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else h.d.m(y)},Dn.requestFormReset=function(y){h.d.r(y)},Dn.unstable_batchedUpdates=function(y,x){return y(x)},Dn.useFormState=function(y,x,S){return F.H.useFormState(y,x,S)},Dn.useFormStatus=function(){return F.H.useHostTransitionStatus()},Dn.version="19.2.0",Dn}var l4;function Ps(){if(l4)return J5.exports;l4=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),J5.exports=Ks(),J5.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s4;function Vs(){if(s4)return Vu;s4=1;var o=Qs(),t=K5(),l=Ps();function h(n){var u="https://react.dev/errors/"+n;if(1<arguments.length){u+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)u+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+n+"; visit "+u+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function f(n){var u=n,e=n;if(n.alternate)for(;u.return;)u=u.return;else{n=u;do u=n,(u.flags&4098)!==0&&(e=u.return),n=u.return;while(n)}return u.tag===3?e:null}function F(n){if(n.tag===13){var u=n.memoizedState;if(u===null&&(n=n.alternate,n!==null&&(u=n.memoizedState)),u!==null)return u.dehydrated}return null}function A(n){if(n.tag===31){var u=n.memoizedState;if(u===null&&(n=n.alternate,n!==null&&(u=n.memoizedState)),u!==null)return u.dehydrated}return null}function y(n){if(f(n)!==n)throw Error(h(188))}function x(n){var u=n.alternate;if(!u){if(u=f(n),u===null)throw Error(h(188));return u!==n?null:n}for(var e=n,i=u;;){var a=e.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){e=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===e)return y(a),n;if(s===i)return y(a),u;s=s.sibling}throw Error(h(188))}if(e.return!==i.return)e=a,i=s;else{for(var c=!1,E=a.child;E;){if(E===e){c=!0,e=a,i=s;break}if(E===i){c=!0,i=a,e=s;break}E=E.sibling}if(!c){for(E=s.child;E;){if(E===e){c=!0,e=s,i=a;break}if(E===i){c=!0,i=s,e=a;break}E=E.sibling}if(!c)throw Error(h(189))}}if(e.alternate!==i)throw Error(h(190))}if(e.tag!==3)throw Error(h(188));return e.stateNode.current===e?n:u}function S(n){var u=n.tag;if(u===5||u===26||u===27||u===6)return n;for(n=n.child;n!==null;){if(u=S(n),u!==null)return u;n=n.sibling}return null}var _=Object.assign,R=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),J=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),a0=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),w0=Symbol.for("react.consumer"),c0=Symbol.for("react.context"),G0=Symbol.for("react.forward_ref"),Y0=Symbol.for("react.suspense"),E0=Symbol.for("react.suspense_list"),u0=Symbol.for("react.memo"),C0=Symbol.for("react.lazy"),d0=Symbol.for("react.activity"),J0=Symbol.for("react.memo_cache_sentinel"),k0=Symbol.iterator;function M0(n){return n===null||typeof n!="object"?null:(n=k0&&n[k0]||n["@@iterator"],typeof n=="function"?n:null)}var Q0=Symbol.for("react.client.reference");function S0(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Q0?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case W:return"Profiler";case a0:return"StrictMode";case Y0:return"Suspense";case E0:return"SuspenseList";case d0:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case J:return"Portal";case c0:return n.displayName||"Context";case w0:return(n._context.displayName||"Context")+".Consumer";case G0:var u=n.render;return n=n.displayName,n||(n=u.displayName||u.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case u0:return u=n.displayName||null,u!==null?u:S0(n.type)||"Memo";case C0:u=n._payload,n=n._init;try{return S0(n(u))}catch{}}return null}var X0=Array.isArray,p=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},o0=[],M=-1;function B(n){return{current:n}}function I(n){0>M||(n.current=o0[M],o0[M]=null,M--)}function q(n,u){M++,o0[M]=n.current,n.current=u}var Q=B(null),l0=B(null),r0=B(null),B0=B(null);function cn(n,u){switch(q(r0,u),q(l0,n),q(Q,null),u.nodeType){case 9:case 11:n=(n=u.documentElement)&&(n=n.namespaceURI)?B7(n):0;break;default:if(n=u.tagName,u=u.namespaceURI)u=B7(u),n=m7(u,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}I(Q),q(Q,n)}function R0(){I(Q),I(l0),I(r0)}function D1(n){n.memoizedState!==null&&q(B0,n);var u=Q.current,e=m7(u,n.type);u!==e&&(q(l0,n),q(Q,e))}function ne(n){l0.current===n&&(I(Q),I(l0)),B0.current===n&&(I(B0),Ju._currentValue=V)}var mi,W5;function V2(n){if(mi===void 0)try{throw Error()}catch(e){var u=e.stack.trim().match(/\n( *(at )?)/);mi=u&&u[1]||"",W5=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mi+n+W5}var _i=!1;function ji(n,u){if(!n||_i)return"";_i=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(u){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(N){var v=N}Reflect.construct(n,[],G)}else{try{G.call()}catch(N){v=N}n.call(G.prototype)}}else{try{throw Error()}catch(N){v=N}(G=n())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(N){if(N&&v&&typeof N.stack=="string")return[N.stack,v.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),c=s[0],E=s[1];if(c&&E){var d=c.split(`
`),b=E.split(`
`);for(a=i=0;i<d.length&&!d[i].includes("DetermineComponentFrameRoot");)i++;for(;a<b.length&&!b[a].includes("DetermineComponentFrameRoot");)a++;if(i===d.length||a===b.length)for(i=d.length-1,a=b.length-1;1<=i&&0<=a&&d[i]!==b[a];)a--;for(;1<=i&&0<=a;i--,a--)if(d[i]!==b[a]){if(i!==1||a!==1)do if(i--,a--,0>a||d[i]!==b[a]){var T=`
`+d[i].replace(" at new "," at ");return n.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",n.displayName)),T}while(1<=i&&0<=a);break}}}finally{_i=!1,Error.prepareStackTrace=e}return(e=n?n.displayName||n.name:"")?V2(e):""}function y4(n,u){switch(n.tag){case 26:case 27:case 5:return V2(n.type);case 16:return V2("Lazy");case 13:return n.child!==u&&u!==null?V2("Suspense Fallback"):V2("Suspense");case 19:return V2("SuspenseList");case 0:case 15:return ji(n.type,!1);case 11:return ji(n.type.render,!1);case 1:return ji(n.type,!0);case 31:return V2("Activity");default:return""}}function $5(n){try{var u="",e=null;do u+=y4(n,e),e=n,n=n.return;while(n);return u}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Si=Object.prototype.hasOwnProperty,zi=o.unstable_scheduleCallback,pi=o.unstable_cancelCallback,d4=o.unstable_shouldYield,B4=o.unstable_requestPaint,Yn=o.unstable_now,m4=o.unstable_getCurrentPriorityLevel,na=o.unstable_ImmediatePriority,ua=o.unstable_UserBlockingPriority,ue=o.unstable_NormalPriority,_4=o.unstable_LowPriority,ea=o.unstable_IdlePriority,j4=o.log,S4=o.unstable_setDisableYieldValue,tu=null,bn=null;function j2(n){if(typeof j4=="function"&&S4(n),bn&&typeof bn.setStrictMode=="function")try{bn.setStrictMode(tu,n)}catch{}}var vn=Math.clz32?Math.clz32:Y4,z4=Math.log,p4=Math.LN2;function Y4(n){return n>>>=0,n===0?32:31-(z4(n)/p4|0)|0}var ee=256,ie=262144,te=4194304;function W2(n){var u=n&42;if(u!==0)return u;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ae(n,u,e){var i=n.pendingLanes;if(i===0)return 0;var a=0,s=n.suspendedLanes,c=n.pingedLanes;n=n.warmLanes;var E=i&134217727;return E!==0?(i=E&~s,i!==0?a=W2(i):(c&=E,c!==0?a=W2(c):e||(e=E&~n,e!==0&&(a=W2(e))))):(E=i&~s,E!==0?a=W2(E):c!==0?a=W2(c):e||(e=i&~n,e!==0&&(a=W2(e)))),a===0?0:u!==0&&u!==a&&(u&s)===0&&(s=a&-a,e=u&-u,s>=e||s===32&&(e&4194048)!==0)?u:a}function au(n,u){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&u)===0}function b4(n,u){switch(n){case 1:case 2:case 4:case 8:case 64:return u+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return u+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ia(){var n=te;return te<<=1,(te&62914560)===0&&(te=4194304),n}function Yi(n){for(var u=[],e=0;31>e;e++)u.push(n);return u}function lu(n,u){n.pendingLanes|=u,u!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function v4(n,u,e,i,a,s){var c=n.pendingLanes;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=e,n.entangledLanes&=e,n.errorRecoveryDisabledLanes&=e,n.shellSuspendCounter=0;var E=n.entanglements,d=n.expirationTimes,b=n.hiddenUpdates;for(e=c&~e;0<e;){var T=31-vn(e),G=1<<T;E[T]=0,d[T]=-1;var v=b[T];if(v!==null)for(b[T]=null,T=0;T<v.length;T++){var N=v[T];N!==null&&(N.lane&=-536870913)}e&=~G}i!==0&&ta(n,i,0),s!==0&&a===0&&n.tag!==0&&(n.suspendedLanes|=s&~(c&~u))}function ta(n,u,e){n.pendingLanes|=u,n.suspendedLanes&=~u;var i=31-vn(u);n.entangledLanes|=u,n.entanglements[i]=n.entanglements[i]|1073741824|e&261930}function aa(n,u){var e=n.entangledLanes|=u;for(n=n.entanglements;e;){var i=31-vn(e),a=1<<i;a&u|n[i]&u&&(n[i]|=u),e&=~a}}function la(n,u){var e=u&-u;return e=(e&42)!==0?1:bi(e),(e&(n.suspendedLanes|u))!==0?0:e}function bi(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function vi(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function sa(){var n=U.p;return n!==0?n:(n=window.event,n===void 0?32:J7(n.type))}function oa(n,u){var e=U.p;try{return U.p=n,u()}finally{U.p=e}}var S2=Math.random().toString(36).slice(2),rn="__reactFiber$"+S2,dn="__reactProps$"+S2,x1="__reactContainer$"+S2,Ni="__reactEvents$"+S2,N4="__reactListeners$"+S2,T4="__reactHandles$"+S2,ha="__reactResources$"+S2,su="__reactMarker$"+S2;function Ti(n){delete n[rn],delete n[dn],delete n[Ni],delete n[N4],delete n[T4]}function A1(n){var u=n[rn];if(u)return u;for(var e=n.parentNode;e;){if(u=e[x1]||e[rn]){if(e=u.alternate,u.child!==null||e!==null&&e.child!==null)for(n=b7(n);n!==null;){if(e=n[rn])return e;n=b7(n)}return u}n=e,e=n.parentNode}return null}function y1(n){if(n=n[rn]||n[x1]){var u=n.tag;if(u===5||u===6||u===13||u===31||u===26||u===27||u===3)return n}return null}function ou(n){var u=n.tag;if(u===5||u===26||u===27||u===6)return n.stateNode;throw Error(h(33))}function d1(n){var u=n[ha];return u||(u=n[ha]={hoistableStyles:new Map,hoistableScripts:new Map}),u}function sn(n){n[su]=!0}var ga=new Set,ca={};function $2(n,u){B1(n,u),B1(n+"Capture",u)}function B1(n,u){for(ca[n]=u,n=0;n<u.length;n++)ga.add(u[n])}var M4=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ra={},Ea={};function I4(n){return Si.call(Ea,n)?!0:Si.call(ra,n)?!1:M4.test(n)?Ea[n]=!0:(ra[n]=!0,!1)}function le(n,u,e){if(I4(u))if(e===null)n.removeAttribute(u);else{switch(typeof e){case"undefined":case"function":case"symbol":n.removeAttribute(u);return;case"boolean":var i=u.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){n.removeAttribute(u);return}}n.setAttribute(u,""+e)}}function se(n,u,e){if(e===null)n.removeAttribute(u);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(u);return}n.setAttribute(u,""+e)}}function l2(n,u,e,i){if(i===null)n.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttributeNS(u,e,""+i)}}function Zn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function fa(n){var u=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(u==="checkbox"||u==="radio")}function O4(n,u,e){var i=Object.getOwnPropertyDescriptor(n.constructor.prototype,u);if(!n.hasOwnProperty(u)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(n,u,{configurable:!0,get:function(){return a.call(this)},set:function(c){e=""+c,s.call(this,c)}}),Object.defineProperty(n,u,{enumerable:i.enumerable}),{getValue:function(){return e},setValue:function(c){e=""+c},stopTracking:function(){n._valueTracker=null,delete n[u]}}}}function Mi(n){if(!n._valueTracker){var u=fa(n)?"checked":"value";n._valueTracker=O4(n,u,""+n[u])}}function Fa(n){if(!n)return!1;var u=n._valueTracker;if(!u)return!0;var e=u.getValue(),i="";return n&&(i=fa(n)?n.checked?"true":"false":n.value),n=i,n!==e?(u.setValue(n),!0):!1}function oe(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var w4=/[\n"\\]/g;function Un(n){return n.replace(w4,function(u){return"\\"+u.charCodeAt(0).toString(16)+" "})}function Ii(n,u,e,i,a,s,c,E){n.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?n.type=c:n.removeAttribute("type"),u!=null?c==="number"?(u===0&&n.value===""||n.value!=u)&&(n.value=""+Zn(u)):n.value!==""+Zn(u)&&(n.value=""+Zn(u)):c!=="submit"&&c!=="reset"||n.removeAttribute("value"),u!=null?Oi(n,c,Zn(u)):e!=null?Oi(n,c,Zn(e)):i!=null&&n.removeAttribute("value"),a==null&&s!=null&&(n.defaultChecked=!!s),a!=null&&(n.checked=a&&typeof a!="function"&&typeof a!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.name=""+Zn(E):n.removeAttribute("name")}function Ca(n,u,e,i,a,s,c,E){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(n.type=s),u!=null||e!=null){if(!(s!=="submit"&&s!=="reset"||u!=null)){Mi(n);return}e=e!=null?""+Zn(e):"",u=u!=null?""+Zn(u):e,E||u===n.value||(n.value=u),n.defaultValue=u}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,n.checked=E?n.checked:!!i,n.defaultChecked=!!i,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(n.name=c),Mi(n)}function Oi(n,u,e){u==="number"&&oe(n.ownerDocument)===n||n.defaultValue===""+e||(n.defaultValue=""+e)}function m1(n,u,e,i){if(n=n.options,u){u={};for(var a=0;a<e.length;a++)u["$"+e[a]]=!0;for(e=0;e<n.length;e++)a=u.hasOwnProperty("$"+n[e].value),n[e].selected!==a&&(n[e].selected=a),a&&i&&(n[e].defaultSelected=!0)}else{for(e=""+Zn(e),u=null,a=0;a<n.length;a++){if(n[a].value===e){n[a].selected=!0,i&&(n[a].defaultSelected=!0);return}u!==null||n[a].disabled||(u=n[a])}u!==null&&(u.selected=!0)}}function Da(n,u,e){if(u!=null&&(u=""+Zn(u),u!==n.value&&(n.value=u),e==null)){n.defaultValue!==u&&(n.defaultValue=u);return}n.defaultValue=e!=null?""+Zn(e):""}function xa(n,u,e,i){if(u==null){if(i!=null){if(e!=null)throw Error(h(92));if(X0(i)){if(1<i.length)throw Error(h(93));i=i[0]}e=i}e==null&&(e=""),u=e}e=Zn(u),n.defaultValue=e,i=n.textContent,i===e&&i!==""&&i!==null&&(n.value=i),Mi(n)}function _1(n,u){if(u){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=u;return}}n.textContent=u}var G4=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Aa(n,u,e){var i=u.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?i?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="":i?n.setProperty(u,e):typeof e!="number"||e===0||G4.has(u)?u==="float"?n.cssFloat=e:n[u]=(""+e).trim():n[u]=e+"px"}function ya(n,u,e){if(u!=null&&typeof u!="object")throw Error(h(62));if(n=n.style,e!=null){for(var i in e)!e.hasOwnProperty(i)||u!=null&&u.hasOwnProperty(i)||(i.indexOf("--")===0?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="");for(var a in u)i=u[a],u.hasOwnProperty(a)&&e[a]!==i&&Aa(n,a,i)}else for(var s in u)u.hasOwnProperty(s)&&Aa(n,s,u[s])}function wi(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H4=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Z4=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function he(n){return Z4.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function s2(){}var Gi=null;function Hi(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var j1=null,S1=null;function da(n){var u=y1(n);if(u&&(n=u.stateNode)){var e=n[dn]||null;n:switch(n=u.stateNode,u.type){case"input":if(Ii(n,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),u=e.name,e.type==="radio"&&u!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+Un(""+u)+'"][type="radio"]'),u=0;u<e.length;u++){var i=e[u];if(i!==n&&i.form===n.form){var a=i[dn]||null;if(!a)throw Error(h(90));Ii(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(u=0;u<e.length;u++)i=e[u],i.form===n.form&&Fa(i)}break n;case"textarea":Da(n,e.value,e.defaultValue);break n;case"select":u=e.value,u!=null&&m1(n,!!e.multiple,u,!1)}}}var Zi=!1;function Ba(n,u,e){if(Zi)return n(u,e);Zi=!0;try{var i=n(u);return i}finally{if(Zi=!1,(j1!==null||S1!==null)&&(Pe(),j1&&(u=j1,n=S1,S1=j1=null,da(u),n)))for(u=0;u<n.length;u++)da(n[u])}}function hu(n,u){var e=n.stateNode;if(e===null)return null;var i=e[dn]||null;if(i===null)return null;e=i[u];n:switch(u){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break n;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(h(231,u,typeof e));return e}var o2=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ui=!1;if(o2)try{var gu={};Object.defineProperty(gu,"passive",{get:function(){Ui=!0}}),window.addEventListener("test",gu,gu),window.removeEventListener("test",gu,gu)}catch{Ui=!1}var z2=null,Xi=null,ge=null;function ma(){if(ge)return ge;var n,u=Xi,e=u.length,i,a="value"in z2?z2.value:z2.textContent,s=a.length;for(n=0;n<e&&u[n]===a[n];n++);var c=e-n;for(i=1;i<=c&&u[e-i]===a[s-i];i++);return ge=a.slice(n,1<i?1-i:void 0)}function ce(n){var u=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&u===13&&(n=13)):n=u,n===10&&(n=13),32<=n||n===13?n:0}function re(){return!0}function _a(){return!1}function Bn(n){function u(e,i,a,s,c){this._reactName=e,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=c,this.currentTarget=null;for(var E in n)n.hasOwnProperty(E)&&(e=n[E],this[E]=e?e(s):s[E]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?re:_a,this.isPropagationStopped=_a,this}return _(u.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=re)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=re)},persist:function(){},isPersistent:re}),u}var n1={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ee=Bn(n1),cu=_({},n1,{view:0,detail:0}),U4=Bn(cu),Ri,Li,ru,fe=_({},cu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ji,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ru&&(ru&&n.type==="mousemove"?(Ri=n.screenX-ru.screenX,Li=n.screenY-ru.screenY):Li=Ri=0,ru=n),Ri)},movementY:function(n){return"movementY"in n?n.movementY:Li}}),ja=Bn(fe),X4=_({},fe,{dataTransfer:0}),R4=Bn(X4),L4=_({},cu,{relatedTarget:0}),qi=Bn(L4),q4=_({},n1,{animationName:0,elapsedTime:0,pseudoElement:0}),J4=Bn(q4),k4=_({},n1,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Q4=Bn(k4),K4=_({},n1,{data:0}),Sa=Bn(K4),P4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $4(n){var u=this.nativeEvent;return u.getModifierState?u.getModifierState(n):(n=W4[n])?!!u[n]:!1}function Ji(){return $4}var nl=_({},cu,{key:function(n){if(n.key){var u=P4[n.key]||n.key;if(u!=="Unidentified")return u}return n.type==="keypress"?(n=ce(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?V4[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ji,charCode:function(n){return n.type==="keypress"?ce(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ce(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ul=Bn(nl),el=_({},fe,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),za=Bn(el),il=_({},cu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ji}),tl=Bn(il),al=_({},n1,{propertyName:0,elapsedTime:0,pseudoElement:0}),ll=Bn(al),sl=_({},fe,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ol=Bn(sl),hl=_({},n1,{newState:0,oldState:0}),gl=Bn(hl),cl=[9,13,27,32],ki=o2&&"CompositionEvent"in window,Eu=null;o2&&"documentMode"in document&&(Eu=document.documentMode);var rl=o2&&"TextEvent"in window&&!Eu,pa=o2&&(!ki||Eu&&8<Eu&&11>=Eu),Ya=" ",ba=!1;function va(n,u){switch(n){case"keyup":return cl.indexOf(u.keyCode)!==-1;case"keydown":return u.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Na(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var z1=!1;function El(n,u){switch(n){case"compositionend":return Na(u);case"keypress":return u.which!==32?null:(ba=!0,Ya);case"textInput":return n=u.data,n===Ya&&ba?null:n;default:return null}}function fl(n,u){if(z1)return n==="compositionend"||!ki&&va(n,u)?(n=ma(),ge=Xi=z2=null,z1=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(u.ctrlKey||u.altKey||u.metaKey)||u.ctrlKey&&u.altKey){if(u.char&&1<u.char.length)return u.char;if(u.which)return String.fromCharCode(u.which)}return null;case"compositionend":return pa&&u.locale!=="ko"?null:u.data;default:return null}}var Fl={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ta(n){var u=n&&n.nodeName&&n.nodeName.toLowerCase();return u==="input"?!!Fl[n.type]:u==="textarea"}function Ma(n,u,e,i){j1?S1?S1.push(i):S1=[i]:j1=i,u=ii(u,"onChange"),0<u.length&&(e=new Ee("onChange","change",null,e,i),n.push({event:e,listeners:u}))}var fu=null,Fu=null;function Cl(n){C7(n,0)}function Fe(n){var u=ou(n);if(Fa(u))return n}function Ia(n,u){if(n==="change")return u}var Oa=!1;if(o2){var Qi;if(o2){var Ki="oninput"in document;if(!Ki){var wa=document.createElement("div");wa.setAttribute("oninput","return;"),Ki=typeof wa.oninput=="function"}Qi=Ki}else Qi=!1;Oa=Qi&&(!document.documentMode||9<document.documentMode)}function Ga(){fu&&(fu.detachEvent("onpropertychange",Ha),Fu=fu=null)}function Ha(n){if(n.propertyName==="value"&&Fe(Fu)){var u=[];Ma(u,Fu,n,Hi(n)),Ba(Cl,u)}}function Dl(n,u,e){n==="focusin"?(Ga(),fu=u,Fu=e,fu.attachEvent("onpropertychange",Ha)):n==="focusout"&&Ga()}function xl(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Fe(Fu)}function Al(n,u){if(n==="click")return Fe(u)}function yl(n,u){if(n==="input"||n==="change")return Fe(u)}function dl(n,u){return n===u&&(n!==0||1/n===1/u)||n!==n&&u!==u}var Nn=typeof Object.is=="function"?Object.is:dl;function Cu(n,u){if(Nn(n,u))return!0;if(typeof n!="object"||n===null||typeof u!="object"||u===null)return!1;var e=Object.keys(n),i=Object.keys(u);if(e.length!==i.length)return!1;for(i=0;i<e.length;i++){var a=e[i];if(!Si.call(u,a)||!Nn(n[a],u[a]))return!1}return!0}function Za(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ua(n,u){var e=Za(n);n=0;for(var i;e;){if(e.nodeType===3){if(i=n+e.textContent.length,n<=u&&i>=u)return{node:e,offset:u-n};n=i}n:{for(;e;){if(e.nextSibling){e=e.nextSibling;break n}e=e.parentNode}e=void 0}e=Za(e)}}function Xa(n,u){return n&&u?n===u?!0:n&&n.nodeType===3?!1:u&&u.nodeType===3?Xa(n,u.parentNode):"contains"in n?n.contains(u):n.compareDocumentPosition?!!(n.compareDocumentPosition(u)&16):!1:!1}function Ra(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var u=oe(n.document);u instanceof n.HTMLIFrameElement;){try{var e=typeof u.contentWindow.location.href=="string"}catch{e=!1}if(e)n=u.contentWindow;else break;u=oe(n.document)}return u}function Pi(n){var u=n&&n.nodeName&&n.nodeName.toLowerCase();return u&&(u==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||u==="textarea"||n.contentEditable==="true")}var Bl=o2&&"documentMode"in document&&11>=document.documentMode,p1=null,Vi=null,Du=null,Wi=!1;function La(n,u,e){var i=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Wi||p1==null||p1!==oe(i)||(i=p1,"selectionStart"in i&&Pi(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Du&&Cu(Du,i)||(Du=i,i=ii(Vi,"onSelect"),0<i.length&&(u=new Ee("onSelect","select",null,u,e),n.push({event:u,listeners:i}),u.target=p1)))}function u1(n,u){var e={};return e[n.toLowerCase()]=u.toLowerCase(),e["Webkit"+n]="webkit"+u,e["Moz"+n]="moz"+u,e}var Y1={animationend:u1("Animation","AnimationEnd"),animationiteration:u1("Animation","AnimationIteration"),animationstart:u1("Animation","AnimationStart"),transitionrun:u1("Transition","TransitionRun"),transitionstart:u1("Transition","TransitionStart"),transitioncancel:u1("Transition","TransitionCancel"),transitionend:u1("Transition","TransitionEnd")},$i={},qa={};o2&&(qa=document.createElement("div").style,"AnimationEvent"in window||(delete Y1.animationend.animation,delete Y1.animationiteration.animation,delete Y1.animationstart.animation),"TransitionEvent"in window||delete Y1.transitionend.transition);function e1(n){if($i[n])return $i[n];if(!Y1[n])return n;var u=Y1[n],e;for(e in u)if(u.hasOwnProperty(e)&&e in qa)return $i[n]=u[e];return n}var Ja=e1("animationend"),ka=e1("animationiteration"),Qa=e1("animationstart"),ml=e1("transitionrun"),_l=e1("transitionstart"),jl=e1("transitioncancel"),Ka=e1("transitionend"),Pa=new Map,nt="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nt.push("scrollEnd");function Pn(n,u){Pa.set(n,u),$2(u,[n])}var Ce=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var u=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(u))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Xn=[],b1=0,ut=0;function De(){for(var n=b1,u=ut=b1=0;u<n;){var e=Xn[u];Xn[u++]=null;var i=Xn[u];Xn[u++]=null;var a=Xn[u];Xn[u++]=null;var s=Xn[u];if(Xn[u++]=null,i!==null&&a!==null){var c=i.pending;c===null?a.next=a:(a.next=c.next,c.next=a),i.pending=a}s!==0&&Va(e,a,s)}}function xe(n,u,e,i){Xn[b1++]=n,Xn[b1++]=u,Xn[b1++]=e,Xn[b1++]=i,ut|=i,n.lanes|=i,n=n.alternate,n!==null&&(n.lanes|=i)}function et(n,u,e,i){return xe(n,u,e,i),Ae(n)}function i1(n,u){return xe(n,null,null,u),Ae(n)}function Va(n,u,e){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e);for(var a=!1,s=n.return;s!==null;)s.childLanes|=e,i=s.alternate,i!==null&&(i.childLanes|=e),s.tag===22&&(n=s.stateNode,n===null||n._visibility&1||(a=!0)),n=s,s=s.return;return n.tag===3?(s=n.stateNode,a&&u!==null&&(a=31-vn(e),n=s.hiddenUpdates,i=n[a],i===null?n[a]=[u]:i.push(u),u.lane=e|536870912),s):null}function Ae(n){if(50<Hu)throw Hu=0,c5=null,Error(h(185));for(var u=n.return;u!==null;)n=u,u=n.return;return n.tag===3?n.stateNode:null}var v1={};function Sl(n,u,e,i){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=u,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(n,u,e,i){return new Sl(n,u,e,i)}function it(n){return n=n.prototype,!(!n||!n.isReactComponent)}function h2(n,u){var e=n.alternate;return e===null?(e=Tn(n.tag,u,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=u,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&65011712,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,u=n.dependencies,e.dependencies=u===null?null:{lanes:u.lanes,firstContext:u.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e.refCleanup=n.refCleanup,e}function Wa(n,u){n.flags&=65011714;var e=n.alternate;return e===null?(n.childLanes=0,n.lanes=u,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.type=e.type,u=e.dependencies,n.dependencies=u===null?null:{lanes:u.lanes,firstContext:u.firstContext}),n}function ye(n,u,e,i,a,s){var c=0;if(i=n,typeof n=="function")it(n)&&(c=1);else if(typeof n=="string")c=vs(n,e,Q.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case d0:return n=Tn(31,e,u,a),n.elementType=d0,n.lanes=s,n;case k:return t1(e.children,a,s,u);case a0:c=8,a|=24;break;case W:return n=Tn(12,e,u,a|2),n.elementType=W,n.lanes=s,n;case Y0:return n=Tn(13,e,u,a),n.elementType=Y0,n.lanes=s,n;case E0:return n=Tn(19,e,u,a),n.elementType=E0,n.lanes=s,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case c0:c=10;break n;case w0:c=9;break n;case G0:c=11;break n;case u0:c=14;break n;case C0:c=16,i=null;break n}c=29,e=Error(h(130,n===null?"null":typeof n,"")),i=null}return u=Tn(c,e,u,a),u.elementType=n,u.type=i,u.lanes=s,u}function t1(n,u,e,i){return n=Tn(7,n,i,u),n.lanes=e,n}function tt(n,u,e){return n=Tn(6,n,null,u),n.lanes=e,n}function $a(n){var u=Tn(18,null,null,0);return u.stateNode=n,u}function at(n,u,e){return u=Tn(4,n.children!==null?n.children:[],n.key,u),u.lanes=e,u.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},u}var n3=new WeakMap;function Rn(n,u){if(typeof n=="object"&&n!==null){var e=n3.get(n);return e!==void 0?e:(u={value:n,source:u,stack:$5(u)},n3.set(n,u),u)}return{value:n,source:u,stack:$5(u)}}var N1=[],T1=0,de=null,xu=0,Ln=[],qn=0,p2=null,u2=1,e2="";function g2(n,u){N1[T1++]=xu,N1[T1++]=de,de=n,xu=u}function u3(n,u,e){Ln[qn++]=u2,Ln[qn++]=e2,Ln[qn++]=p2,p2=n;var i=u2;n=e2;var a=32-vn(i)-1;i&=~(1<<a),e+=1;var s=32-vn(u)+a;if(30<s){var c=a-a%5;s=(i&(1<<c)-1).toString(32),i>>=c,a-=c,u2=1<<32-vn(u)+a|e<<a|i,e2=s+n}else u2=1<<s|e<<a|i,e2=n}function lt(n){n.return!==null&&(g2(n,1),u3(n,1,0))}function st(n){for(;n===de;)de=N1[--T1],N1[T1]=null,xu=N1[--T1],N1[T1]=null;for(;n===p2;)p2=Ln[--qn],Ln[qn]=null,e2=Ln[--qn],Ln[qn]=null,u2=Ln[--qn],Ln[qn]=null}function e3(n,u){Ln[qn++]=u2,Ln[qn++]=e2,Ln[qn++]=p2,u2=u.id,e2=u.overflow,p2=n}var En=null,H0=null,A0=!1,Y2=null,Jn=!1,ot=Error(h(519));function b2(n){var u=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Au(Rn(u,n)),ot}function i3(n){var u=n.stateNode,e=n.type,i=n.memoizedProps;switch(u[rn]=n,u[dn]=i,e){case"dialog":F0("cancel",u),F0("close",u);break;case"iframe":case"object":case"embed":F0("load",u);break;case"video":case"audio":for(e=0;e<Uu.length;e++)F0(Uu[e],u);break;case"source":F0("error",u);break;case"img":case"image":case"link":F0("error",u),F0("load",u);break;case"details":F0("toggle",u);break;case"input":F0("invalid",u),Ca(u,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":F0("invalid",u);break;case"textarea":F0("invalid",u),xa(u,i.value,i.defaultValue,i.children)}e=i.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||u.textContent===""+e||i.suppressHydrationWarning===!0||y7(u.textContent,e)?(i.popover!=null&&(F0("beforetoggle",u),F0("toggle",u)),i.onScroll!=null&&F0("scroll",u),i.onScrollEnd!=null&&F0("scrollend",u),i.onClick!=null&&(u.onclick=s2),u=!0):u=!1,u||b2(n,!0)}function t3(n){for(En=n.return;En;)switch(En.tag){case 5:case 31:case 13:Jn=!1;return;case 27:case 3:Jn=!0;return;default:En=En.return}}function M1(n){if(n!==En)return!1;if(!A0)return t3(n),A0=!0,!1;var u=n.tag,e;if((e=u!==3&&u!==27)&&((e=u===5)&&(e=n.type,e=!(e!=="form"&&e!=="button")||S5(n.type,n.memoizedProps)),e=!e),e&&H0&&b2(n),t3(n),u===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(317));H0=Y7(n)}else if(u===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(317));H0=Y7(n)}else u===27?(u=H0,L2(n.type)?(n=v5,v5=null,H0=n):H0=u):H0=En?Qn(n.stateNode.nextSibling):null;return!0}function a1(){H0=En=null,A0=!1}function ht(){var n=Y2;return n!==null&&(Sn===null?Sn=n:Sn.push.apply(Sn,n),Y2=null),n}function Au(n){Y2===null?Y2=[n]:Y2.push(n)}var gt=B(null),l1=null,c2=null;function v2(n,u,e){q(gt,u._currentValue),u._currentValue=e}function r2(n){n._currentValue=gt.current,I(gt)}function ct(n,u,e){for(;n!==null;){var i=n.alternate;if((n.childLanes&u)!==u?(n.childLanes|=u,i!==null&&(i.childLanes|=u)):i!==null&&(i.childLanes&u)!==u&&(i.childLanes|=u),n===e)break;n=n.return}}function rt(n,u,e,i){var a=n.child;for(a!==null&&(a.return=n);a!==null;){var s=a.dependencies;if(s!==null){var c=a.child;s=s.firstContext;n:for(;s!==null;){var E=s;s=a;for(var d=0;d<u.length;d++)if(E.context===u[d]){s.lanes|=e,E=s.alternate,E!==null&&(E.lanes|=e),ct(s.return,e,n),i||(c=null);break n}s=E.next}}else if(a.tag===18){if(c=a.return,c===null)throw Error(h(341));c.lanes|=e,s=c.alternate,s!==null&&(s.lanes|=e),ct(c,e,n),c=null}else c=a.child;if(c!==null)c.return=a;else for(c=a;c!==null;){if(c===n){c=null;break}if(a=c.sibling,a!==null){a.return=c.return,c=a;break}c=c.return}a=c}}function I1(n,u,e,i){n=null;for(var a=u,s=!1;a!==null;){if(!s){if((a.flags&524288)!==0)s=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var c=a.alternate;if(c===null)throw Error(h(387));if(c=c.memoizedProps,c!==null){var E=a.type;Nn(a.pendingProps.value,c.value)||(n!==null?n.push(E):n=[E])}}else if(a===B0.current){if(c=a.alternate,c===null)throw Error(h(387));c.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(n!==null?n.push(Ju):n=[Ju])}a=a.return}n!==null&&rt(u,n,e,i),u.flags|=262144}function Be(n){for(n=n.firstContext;n!==null;){if(!Nn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function s1(n){l1=n,c2=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function fn(n){return a3(l1,n)}function me(n,u){return l1===null&&s1(n),a3(n,u)}function a3(n,u){var e=u._currentValue;if(u={context:u,memoizedValue:e,next:null},c2===null){if(n===null)throw Error(h(308));c2=u,n.dependencies={lanes:0,firstContext:u},n.flags|=524288}else c2=c2.next=u;return e}var zl=typeof AbortController<"u"?AbortController:function(){var n=[],u=this.signal={aborted:!1,addEventListener:function(e,i){n.push(i)}};this.abort=function(){u.aborted=!0,n.forEach(function(e){return e()})}},pl=o.unstable_scheduleCallback,Yl=o.unstable_NormalPriority,$0={$$typeof:c0,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Et(){return{controller:new zl,data:new Map,refCount:0}}function yu(n){n.refCount--,n.refCount===0&&pl(Yl,function(){n.controller.abort()})}var du=null,ft=0,O1=0,w1=null;function bl(n,u){if(du===null){var e=du=[];ft=0,O1=D5(),w1={status:"pending",value:void 0,then:function(i){e.push(i)}}}return ft++,u.then(l3,l3),u}function l3(){if(--ft===0&&du!==null){w1!==null&&(w1.status="fulfilled");var n=du;du=null,O1=0,w1=null;for(var u=0;u<n.length;u++)(0,n[u])()}}function vl(n,u){var e=[],i={status:"pending",value:null,reason:null,then:function(a){e.push(a)}};return n.then(function(){i.status="fulfilled",i.value=u;for(var a=0;a<e.length;a++)(0,e[a])(u)},function(a){for(i.status="rejected",i.reason=a,a=0;a<e.length;a++)(0,e[a])(void 0)}),i}var s3=p.S;p.S=function(n,u){L6=Yn(),typeof u=="object"&&u!==null&&typeof u.then=="function"&&bl(n,u),s3!==null&&s3(n,u)};var o1=B(null);function Ft(){var n=o1.current;return n!==null?n:I0.pooledCache}function _e(n,u){u===null?q(o1,o1.current):q(o1,u.pool)}function o3(){var n=Ft();return n===null?null:{parent:$0._currentValue,pool:n}}var G1=Error(h(460)),Ct=Error(h(474)),je=Error(h(542)),Se={then:function(){}};function h3(n){return n=n.status,n==="fulfilled"||n==="rejected"}function g3(n,u,e){switch(e=n[e],e===void 0?n.push(u):e!==u&&(u.then(s2,s2),u=e),u.status){case"fulfilled":return u.value;case"rejected":throw n=u.reason,r3(n),n;default:if(typeof u.status=="string")u.then(s2,s2);else{if(n=I0,n!==null&&100<n.shellSuspendCounter)throw Error(h(482));n=u,n.status="pending",n.then(function(i){if(u.status==="pending"){var a=u;a.status="fulfilled",a.value=i}},function(i){if(u.status==="pending"){var a=u;a.status="rejected",a.reason=i}})}switch(u.status){case"fulfilled":return u.value;case"rejected":throw n=u.reason,r3(n),n}throw g1=u,G1}}function h1(n){try{var u=n._init;return u(n._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(g1=e,G1):e}}var g1=null;function c3(){if(g1===null)throw Error(h(459));var n=g1;return g1=null,n}function r3(n){if(n===G1||n===je)throw Error(h(483))}var H1=null,Bu=0;function ze(n){var u=Bu;return Bu+=1,H1===null&&(H1=[]),g3(H1,n,u)}function mu(n,u){u=u.props.ref,n.ref=u!==void 0?u:null}function pe(n,u){throw u.$$typeof===R?Error(h(525)):(n=Object.prototype.toString.call(u),Error(h(31,n==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":n)))}function E3(n){function u(j,m){if(n){var Y=j.deletions;Y===null?(j.deletions=[m],j.flags|=16):Y.push(m)}}function e(j,m){if(!n)return null;for(;m!==null;)u(j,m),m=m.sibling;return null}function i(j){for(var m=new Map;j!==null;)j.key!==null?m.set(j.key,j):m.set(j.index,j),j=j.sibling;return m}function a(j,m){return j=h2(j,m),j.index=0,j.sibling=null,j}function s(j,m,Y){return j.index=Y,n?(Y=j.alternate,Y!==null?(Y=Y.index,Y<m?(j.flags|=67108866,m):Y):(j.flags|=67108866,m)):(j.flags|=1048576,m)}function c(j){return n&&j.alternate===null&&(j.flags|=67108866),j}function E(j,m,Y,w){return m===null||m.tag!==6?(m=tt(Y,j.mode,w),m.return=j,m):(m=a(m,Y),m.return=j,m)}function d(j,m,Y,w){var $=Y.type;return $===k?T(j,m,Y.props.children,w,Y.key):m!==null&&(m.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===C0&&h1($)===m.type)?(m=a(m,Y.props),mu(m,Y),m.return=j,m):(m=ye(Y.type,Y.key,Y.props,null,j.mode,w),mu(m,Y),m.return=j,m)}function b(j,m,Y,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==Y.containerInfo||m.stateNode.implementation!==Y.implementation?(m=at(Y,j.mode,w),m.return=j,m):(m=a(m,Y.children||[]),m.return=j,m)}function T(j,m,Y,w,$){return m===null||m.tag!==7?(m=t1(Y,j.mode,w,$),m.return=j,m):(m=a(m,Y),m.return=j,m)}function G(j,m,Y){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=tt(""+m,j.mode,Y),m.return=j,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case L:return Y=ye(m.type,m.key,m.props,null,j.mode,Y),mu(Y,m),Y.return=j,Y;case J:return m=at(m,j.mode,Y),m.return=j,m;case C0:return m=h1(m),G(j,m,Y)}if(X0(m)||M0(m))return m=t1(m,j.mode,Y,null),m.return=j,m;if(typeof m.then=="function")return G(j,ze(m),Y);if(m.$$typeof===c0)return G(j,me(j,m),Y);pe(j,m)}return null}function v(j,m,Y,w){var $=m!==null?m.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return $!==null?null:E(j,m,""+Y,w);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case L:return Y.key===$?d(j,m,Y,w):null;case J:return Y.key===$?b(j,m,Y,w):null;case C0:return Y=h1(Y),v(j,m,Y,w)}if(X0(Y)||M0(Y))return $!==null?null:T(j,m,Y,w,null);if(typeof Y.then=="function")return v(j,m,ze(Y),w);if(Y.$$typeof===c0)return v(j,m,me(j,Y),w);pe(j,Y)}return null}function N(j,m,Y,w,$){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return j=j.get(Y)||null,E(m,j,""+w,$);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case L:return j=j.get(w.key===null?Y:w.key)||null,d(m,j,w,$);case J:return j=j.get(w.key===null?Y:w.key)||null,b(m,j,w,$);case C0:return w=h1(w),N(j,m,Y,w,$)}if(X0(w)||M0(w))return j=j.get(Y)||null,T(m,j,w,$,null);if(typeof w.then=="function")return N(j,m,Y,ze(w),$);if(w.$$typeof===c0)return N(j,m,Y,me(m,w),$);pe(m,w)}return null}function K(j,m,Y,w){for(var $=null,m0=null,P=m,g0=m=0,x0=null;P!==null&&g0<Y.length;g0++){P.index>g0?(x0=P,P=null):x0=P.sibling;var _0=v(j,P,Y[g0],w);if(_0===null){P===null&&(P=x0);break}n&&P&&_0.alternate===null&&u(j,P),m=s(_0,m,g0),m0===null?$=_0:m0.sibling=_0,m0=_0,P=x0}if(g0===Y.length)return e(j,P),A0&&g2(j,g0),$;if(P===null){for(;g0<Y.length;g0++)P=G(j,Y[g0],w),P!==null&&(m=s(P,m,g0),m0===null?$=P:m0.sibling=P,m0=P);return A0&&g2(j,g0),$}for(P=i(P);g0<Y.length;g0++)x0=N(P,j,g0,Y[g0],w),x0!==null&&(n&&x0.alternate!==null&&P.delete(x0.key===null?g0:x0.key),m=s(x0,m,g0),m0===null?$=x0:m0.sibling=x0,m0=x0);return n&&P.forEach(function(K2){return u(j,K2)}),A0&&g2(j,g0),$}function e0(j,m,Y,w){if(Y==null)throw Error(h(151));for(var $=null,m0=null,P=m,g0=m=0,x0=null,_0=Y.next();P!==null&&!_0.done;g0++,_0=Y.next()){P.index>g0?(x0=P,P=null):x0=P.sibling;var K2=v(j,P,_0.value,w);if(K2===null){P===null&&(P=x0);break}n&&P&&K2.alternate===null&&u(j,P),m=s(K2,m,g0),m0===null?$=K2:m0.sibling=K2,m0=K2,P=x0}if(_0.done)return e(j,P),A0&&g2(j,g0),$;if(P===null){for(;!_0.done;g0++,_0=Y.next())_0=G(j,_0.value,w),_0!==null&&(m=s(_0,m,g0),m0===null?$=_0:m0.sibling=_0,m0=_0);return A0&&g2(j,g0),$}for(P=i(P);!_0.done;g0++,_0=Y.next())_0=N(P,j,g0,_0.value,w),_0!==null&&(n&&_0.alternate!==null&&P.delete(_0.key===null?g0:_0.key),m=s(_0,m,g0),m0===null?$=_0:m0.sibling=_0,m0=_0);return n&&P.forEach(function(Xs){return u(j,Xs)}),A0&&g2(j,g0),$}function N0(j,m,Y,w){if(typeof Y=="object"&&Y!==null&&Y.type===k&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case L:n:{for(var $=Y.key;m!==null;){if(m.key===$){if($=Y.type,$===k){if(m.tag===7){e(j,m.sibling),w=a(m,Y.props.children),w.return=j,j=w;break n}}else if(m.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===C0&&h1($)===m.type){e(j,m.sibling),w=a(m,Y.props),mu(w,Y),w.return=j,j=w;break n}e(j,m);break}else u(j,m);m=m.sibling}Y.type===k?(w=t1(Y.props.children,j.mode,w,Y.key),w.return=j,j=w):(w=ye(Y.type,Y.key,Y.props,null,j.mode,w),mu(w,Y),w.return=j,j=w)}return c(j);case J:n:{for($=Y.key;m!==null;){if(m.key===$)if(m.tag===4&&m.stateNode.containerInfo===Y.containerInfo&&m.stateNode.implementation===Y.implementation){e(j,m.sibling),w=a(m,Y.children||[]),w.return=j,j=w;break n}else{e(j,m);break}else u(j,m);m=m.sibling}w=at(Y,j.mode,w),w.return=j,j=w}return c(j);case C0:return Y=h1(Y),N0(j,m,Y,w)}if(X0(Y))return K(j,m,Y,w);if(M0(Y)){if($=M0(Y),typeof $!="function")throw Error(h(150));return Y=$.call(Y),e0(j,m,Y,w)}if(typeof Y.then=="function")return N0(j,m,ze(Y),w);if(Y.$$typeof===c0)return N0(j,m,me(j,Y),w);pe(j,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint"?(Y=""+Y,m!==null&&m.tag===6?(e(j,m.sibling),w=a(m,Y),w.return=j,j=w):(e(j,m),w=tt(Y,j.mode,w),w.return=j,j=w),c(j)):e(j,m)}return function(j,m,Y,w){try{Bu=0;var $=N0(j,m,Y,w);return H1=null,$}catch(P){if(P===G1||P===je)throw P;var m0=Tn(29,P,null,j.mode);return m0.lanes=w,m0.return=j,m0}finally{}}}var c1=E3(!0),f3=E3(!1),N2=!1;function Dt(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xt(n,u){n=n.updateQueue,u.updateQueue===n&&(u.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function T2(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function M2(n,u,e){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(j0&2)!==0){var a=i.pending;return a===null?u.next=u:(u.next=a.next,a.next=u),i.pending=u,u=Ae(n),Va(n,null,e),u}return xe(n,i,u,e),Ae(n)}function _u(n,u,e){if(u=u.updateQueue,u!==null&&(u=u.shared,(e&4194048)!==0)){var i=u.lanes;i&=n.pendingLanes,e|=i,u.lanes=e,aa(n,e)}}function At(n,u){var e=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,e===i)){var a=null,s=null;if(e=e.firstBaseUpdate,e!==null){do{var c={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};s===null?a=s=c:s=s.next=c,e=e.next}while(e!==null);s===null?a=s=u:s=s.next=u}else a=s=u;e={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=u:n.next=u,e.lastBaseUpdate=u}var yt=!1;function ju(){if(yt){var n=w1;if(n!==null)throw n}}function Su(n,u,e,i){yt=!1;var a=n.updateQueue;N2=!1;var s=a.firstBaseUpdate,c=a.lastBaseUpdate,E=a.shared.pending;if(E!==null){a.shared.pending=null;var d=E,b=d.next;d.next=null,c===null?s=b:c.next=b,c=d;var T=n.alternate;T!==null&&(T=T.updateQueue,E=T.lastBaseUpdate,E!==c&&(E===null?T.firstBaseUpdate=b:E.next=b,T.lastBaseUpdate=d))}if(s!==null){var G=a.baseState;c=0,T=b=d=null,E=s;do{var v=E.lane&-536870913,N=v!==E.lane;if(N?(D0&v)===v:(i&v)===v){v!==0&&v===O1&&(yt=!0),T!==null&&(T=T.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});n:{var K=n,e0=E;v=u;var N0=e;switch(e0.tag){case 1:if(K=e0.payload,typeof K=="function"){G=K.call(N0,G,v);break n}G=K;break n;case 3:K.flags=K.flags&-65537|128;case 0:if(K=e0.payload,v=typeof K=="function"?K.call(N0,G,v):K,v==null)break n;G=_({},G,v);break n;case 2:N2=!0}}v=E.callback,v!==null&&(n.flags|=64,N&&(n.flags|=8192),N=a.callbacks,N===null?a.callbacks=[v]:N.push(v))}else N={lane:v,tag:E.tag,payload:E.payload,callback:E.callback,next:null},T===null?(b=T=N,d=G):T=T.next=N,c|=v;if(E=E.next,E===null){if(E=a.shared.pending,E===null)break;N=E,E=N.next,N.next=null,a.lastBaseUpdate=N,a.shared.pending=null}}while(!0);T===null&&(d=G),a.baseState=d,a.firstBaseUpdate=b,a.lastBaseUpdate=T,s===null&&(a.shared.lanes=0),H2|=c,n.lanes=c,n.memoizedState=G}}function F3(n,u){if(typeof n!="function")throw Error(h(191,n));n.call(u)}function C3(n,u){var e=n.callbacks;if(e!==null)for(n.callbacks=null,n=0;n<e.length;n++)F3(e[n],u)}var Z1=B(null),Ye=B(0);function D3(n,u){n=d2,q(Ye,n),q(Z1,u),d2=n|u.baseLanes}function dt(){q(Ye,d2),q(Z1,Z1.current)}function Bt(){d2=Ye.current,I(Z1),I(Ye)}var Mn=B(null),kn=null;function I2(n){var u=n.alternate;q(V0,V0.current&1),q(Mn,n),kn===null&&(u===null||Z1.current!==null||u.memoizedState!==null)&&(kn=n)}function mt(n){q(V0,V0.current),q(Mn,n),kn===null&&(kn=n)}function x3(n){n.tag===22?(q(V0,V0.current),q(Mn,n),kn===null&&(kn=n)):O2()}function O2(){q(V0,V0.current),q(Mn,Mn.current)}function In(n){I(Mn),kn===n&&(kn=null),I(V0)}var V0=B(0);function be(n){for(var u=n;u!==null;){if(u.tag===13){var e=u.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||Y5(e)||b5(e)))return u}else if(u.tag===19&&(u.memoizedProps.revealOrder==="forwards"||u.memoizedProps.revealOrder==="backwards"||u.memoizedProps.revealOrder==="unstable_legacy-backwards"||u.memoizedProps.revealOrder==="together")){if((u.flags&128)!==0)return u}else if(u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break;for(;u.sibling===null;){if(u.return===null||u.return===n)return null;u=u.return}u.sibling.return=u.return,u=u.sibling}return null}var E2=0,h0=null,b0=null,nn=null,ve=!1,U1=!1,r1=!1,Ne=0,zu=0,X1=null,Nl=0;function K0(){throw Error(h(321))}function _t(n,u){if(u===null)return!1;for(var e=0;e<u.length&&e<n.length;e++)if(!Nn(n[e],u[e]))return!1;return!0}function jt(n,u,e,i,a,s){return E2=s,h0=u,u.memoizedState=null,u.updateQueue=null,u.lanes=0,p.H=n===null||n.memoizedState===null?u6:Zt,r1=!1,s=e(i,a),r1=!1,U1&&(s=y3(u,e,i,a)),A3(n),s}function A3(n){p.H=bu;var u=b0!==null&&b0.next!==null;if(E2=0,nn=b0=h0=null,ve=!1,zu=0,X1=null,u)throw Error(h(300));n===null||un||(n=n.dependencies,n!==null&&Be(n)&&(un=!0))}function y3(n,u,e,i){h0=n;var a=0;do{if(U1&&(X1=null),zu=0,U1=!1,25<=a)throw Error(h(301));if(a+=1,nn=b0=null,n.updateQueue!=null){var s=n.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}p.H=e6,s=u(e,i)}while(U1);return s}function Tl(){var n=p.H,u=n.useState()[0];return u=typeof u.then=="function"?pu(u):u,n=n.useState()[0],(b0!==null?b0.memoizedState:null)!==n&&(h0.flags|=1024),u}function St(){var n=Ne!==0;return Ne=0,n}function zt(n,u,e){u.updateQueue=n.updateQueue,u.flags&=-2053,n.lanes&=~e}function pt(n){if(ve){for(n=n.memoizedState;n!==null;){var u=n.queue;u!==null&&(u.pending=null),n=n.next}ve=!1}E2=0,nn=b0=h0=null,U1=!1,zu=Ne=0,X1=null}function An(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?h0.memoizedState=nn=n:nn=nn.next=n,nn}function W0(){if(b0===null){var n=h0.alternate;n=n!==null?n.memoizedState:null}else n=b0.next;var u=nn===null?h0.memoizedState:nn.next;if(u!==null)nn=u,b0=n;else{if(n===null)throw h0.alternate===null?Error(h(467)):Error(h(310));b0=n,n={memoizedState:b0.memoizedState,baseState:b0.baseState,baseQueue:b0.baseQueue,queue:b0.queue,next:null},nn===null?h0.memoizedState=nn=n:nn=nn.next=n}return nn}function Te(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pu(n){var u=zu;return zu+=1,X1===null&&(X1=[]),n=g3(X1,n,u),u=h0,(nn===null?u.memoizedState:nn.next)===null&&(u=u.alternate,p.H=u===null||u.memoizedState===null?u6:Zt),n}function Me(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return pu(n);if(n.$$typeof===c0)return fn(n)}throw Error(h(438,String(n)))}function Yt(n){var u=null,e=h0.updateQueue;if(e!==null&&(u=e.memoCache),u==null){var i=h0.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(u={data:i.data.map(function(a){return a.slice()}),index:0})))}if(u==null&&(u={data:[],index:0}),e===null&&(e=Te(),h0.updateQueue=e),e.memoCache=u,e=u.data[u.index],e===void 0)for(e=u.data[u.index]=Array(n),i=0;i<n;i++)e[i]=J0;return u.index++,e}function f2(n,u){return typeof u=="function"?u(n):u}function Ie(n){var u=W0();return bt(u,b0,n)}function bt(n,u,e){var i=n.queue;if(i===null)throw Error(h(311));i.lastRenderedReducer=e;var a=n.baseQueue,s=i.pending;if(s!==null){if(a!==null){var c=a.next;a.next=s.next,s.next=c}u.baseQueue=a=s,i.pending=null}if(s=n.baseState,a===null)n.memoizedState=s;else{u=a.next;var E=c=null,d=null,b=u,T=!1;do{var G=b.lane&-536870913;if(G!==b.lane?(D0&G)===G:(E2&G)===G){var v=b.revertLane;if(v===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),G===O1&&(T=!0);else if((E2&v)===v){b=b.next,v===O1&&(T=!0);continue}else G={lane:0,revertLane:b.revertLane,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},d===null?(E=d=G,c=s):d=d.next=G,h0.lanes|=v,H2|=v;G=b.action,r1&&e(s,G),s=b.hasEagerState?b.eagerState:e(s,G)}else v={lane:G,revertLane:b.revertLane,gesture:b.gesture,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},d===null?(E=d=v,c=s):d=d.next=v,h0.lanes|=G,H2|=G;b=b.next}while(b!==null&&b!==u);if(d===null?c=s:d.next=E,!Nn(s,n.memoizedState)&&(un=!0,T&&(e=w1,e!==null)))throw e;n.memoizedState=s,n.baseState=c,n.baseQueue=d,i.lastRenderedState=s}return a===null&&(i.lanes=0),[n.memoizedState,i.dispatch]}function vt(n){var u=W0(),e=u.queue;if(e===null)throw Error(h(311));e.lastRenderedReducer=n;var i=e.dispatch,a=e.pending,s=u.memoizedState;if(a!==null){e.pending=null;var c=a=a.next;do s=n(s,c.action),c=c.next;while(c!==a);Nn(s,u.memoizedState)||(un=!0),u.memoizedState=s,u.baseQueue===null&&(u.baseState=s),e.lastRenderedState=s}return[s,i]}function d3(n,u,e){var i=h0,a=W0(),s=A0;if(s){if(e===void 0)throw Error(h(407));e=e()}else e=u();var c=!Nn((b0||a).memoizedState,e);if(c&&(a.memoizedState=e,un=!0),a=a.queue,Mt(_3.bind(null,i,a,n),[n]),a.getSnapshot!==u||c||nn!==null&&nn.memoizedState.tag&1){if(i.flags|=2048,R1(9,{destroy:void 0},m3.bind(null,i,a,e,u),null),I0===null)throw Error(h(349));s||(E2&127)!==0||B3(i,u,e)}return e}function B3(n,u,e){n.flags|=16384,n={getSnapshot:u,value:e},u=h0.updateQueue,u===null?(u=Te(),h0.updateQueue=u,u.stores=[n]):(e=u.stores,e===null?u.stores=[n]:e.push(n))}function m3(n,u,e,i){u.value=e,u.getSnapshot=i,j3(u)&&S3(n)}function _3(n,u,e){return e(function(){j3(u)&&S3(n)})}function j3(n){var u=n.getSnapshot;n=n.value;try{var e=u();return!Nn(n,e)}catch{return!0}}function S3(n){var u=i1(n,2);u!==null&&zn(u,n,2)}function Nt(n){var u=An();if(typeof n=="function"){var e=n;if(n=e(),r1){j2(!0);try{e()}finally{j2(!1)}}}return u.memoizedState=u.baseState=n,u.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:f2,lastRenderedState:n},u}function z3(n,u,e,i){return n.baseState=e,bt(n,b0,typeof i=="function"?i:f2)}function Ml(n,u,e,i,a){if(Ge(n))throw Error(h(485));if(n=u.action,n!==null){var s={payload:a,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){s.listeners.push(c)}};p.T!==null?e(!0):s.isTransition=!1,i(s),e=u.pending,e===null?(s.next=u.pending=s,p3(u,s)):(s.next=e.next,u.pending=e.next=s)}}function p3(n,u){var e=u.action,i=u.payload,a=n.state;if(u.isTransition){var s=p.T,c={};p.T=c;try{var E=e(a,i),d=p.S;d!==null&&d(c,E),Y3(n,u,E)}catch(b){Tt(n,u,b)}finally{s!==null&&c.types!==null&&(s.types=c.types),p.T=s}}else try{s=e(a,i),Y3(n,u,s)}catch(b){Tt(n,u,b)}}function Y3(n,u,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(i){b3(n,u,i)},function(i){return Tt(n,u,i)}):b3(n,u,e)}function b3(n,u,e){u.status="fulfilled",u.value=e,v3(u),n.state=e,u=n.pending,u!==null&&(e=u.next,e===u?n.pending=null:(e=e.next,u.next=e,p3(n,e)))}function Tt(n,u,e){var i=n.pending;if(n.pending=null,i!==null){i=i.next;do u.status="rejected",u.reason=e,v3(u),u=u.next;while(u!==i)}n.action=null}function v3(n){n=n.listeners;for(var u=0;u<n.length;u++)(0,n[u])()}function N3(n,u){return u}function T3(n,u){if(A0){var e=I0.formState;if(e!==null){n:{var i=h0;if(A0){if(H0){u:{for(var a=H0,s=Jn;a.nodeType!==8;){if(!s){a=null;break u}if(a=Qn(a.nextSibling),a===null){a=null;break u}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){H0=Qn(a.nextSibling),i=a.data==="F!";break n}}b2(i)}i=!1}i&&(u=e[0])}}return e=An(),e.memoizedState=e.baseState=u,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:N3,lastRenderedState:u},e.queue=i,e=W3.bind(null,h0,i),i.dispatch=e,i=Nt(!1),s=Ht.bind(null,h0,!1,i.queue),i=An(),a={state:u,dispatch:null,action:n,pending:null},i.queue=a,e=Ml.bind(null,h0,a,s,e),a.dispatch=e,i.memoizedState=n,[u,e,!1]}function M3(n){var u=W0();return I3(u,b0,n)}function I3(n,u,e){if(u=bt(n,u,N3)[0],n=Ie(f2)[0],typeof u=="object"&&u!==null&&typeof u.then=="function")try{var i=pu(u)}catch(c){throw c===G1?je:c}else i=u;u=W0();var a=u.queue,s=a.dispatch;return e!==u.memoizedState&&(h0.flags|=2048,R1(9,{destroy:void 0},Il.bind(null,a,e),null)),[i,s,n]}function Il(n,u){n.action=u}function O3(n){var u=W0(),e=b0;if(e!==null)return I3(u,e,n);W0(),u=u.memoizedState,e=W0();var i=e.queue.dispatch;return e.memoizedState=n,[u,i,!1]}function R1(n,u,e,i){return n={tag:n,create:e,deps:i,inst:u,next:null},u=h0.updateQueue,u===null&&(u=Te(),h0.updateQueue=u),e=u.lastEffect,e===null?u.lastEffect=n.next=n:(i=e.next,e.next=n,n.next=i,u.lastEffect=n),n}function w3(){return W0().memoizedState}function Oe(n,u,e,i){var a=An();h0.flags|=n,a.memoizedState=R1(1|u,{destroy:void 0},e,i===void 0?null:i)}function we(n,u,e,i){var a=W0();i=i===void 0?null:i;var s=a.memoizedState.inst;b0!==null&&i!==null&&_t(i,b0.memoizedState.deps)?a.memoizedState=R1(u,s,e,i):(h0.flags|=n,a.memoizedState=R1(1|u,s,e,i))}function G3(n,u){Oe(8390656,8,n,u)}function Mt(n,u){we(2048,8,n,u)}function Ol(n){h0.flags|=4;var u=h0.updateQueue;if(u===null)u=Te(),h0.updateQueue=u,u.events=[n];else{var e=u.events;e===null?u.events=[n]:e.push(n)}}function H3(n){var u=W0().memoizedState;return Ol({ref:u,nextImpl:n}),function(){if((j0&2)!==0)throw Error(h(440));return u.impl.apply(void 0,arguments)}}function Z3(n,u){return we(4,2,n,u)}function U3(n,u){return we(4,4,n,u)}function X3(n,u){if(typeof u=="function"){n=n();var e=u(n);return function(){typeof e=="function"?e():u(null)}}if(u!=null)return n=n(),u.current=n,function(){u.current=null}}function R3(n,u,e){e=e!=null?e.concat([n]):null,we(4,4,X3.bind(null,u,n),e)}function It(){}function L3(n,u){var e=W0();u=u===void 0?null:u;var i=e.memoizedState;return u!==null&&_t(u,i[1])?i[0]:(e.memoizedState=[n,u],n)}function q3(n,u){var e=W0();u=u===void 0?null:u;var i=e.memoizedState;if(u!==null&&_t(u,i[1]))return i[0];if(i=n(),r1){j2(!0);try{n()}finally{j2(!1)}}return e.memoizedState=[i,u],i}function Ot(n,u,e){return e===void 0||(E2&1073741824)!==0&&(D0&261930)===0?n.memoizedState=u:(n.memoizedState=e,n=J6(),h0.lanes|=n,H2|=n,e)}function J3(n,u,e,i){return Nn(e,u)?e:Z1.current!==null?(n=Ot(n,e,i),Nn(n,u)||(un=!0),n):(E2&42)===0||(E2&1073741824)!==0&&(D0&261930)===0?(un=!0,n.memoizedState=e):(n=J6(),h0.lanes|=n,H2|=n,u)}function k3(n,u,e,i,a){var s=U.p;U.p=s!==0&&8>s?s:8;var c=p.T,E={};p.T=E,Ht(n,!1,u,e);try{var d=a(),b=p.S;if(b!==null&&b(E,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var T=vl(d,i);Yu(n,u,T,Gn(n))}else Yu(n,u,i,Gn(n))}catch(G){Yu(n,u,{then:function(){},status:"rejected",reason:G},Gn())}finally{U.p=s,c!==null&&E.types!==null&&(c.types=E.types),p.T=c}}function wl(){}function wt(n,u,e,i){if(n.tag!==5)throw Error(h(476));var a=Q3(n).queue;k3(n,a,u,V,e===null?wl:function(){return K3(n),e(i)})}function Q3(n){var u=n.memoizedState;if(u!==null)return u;u={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:f2,lastRenderedState:V},next:null};var e={};return u.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:f2,lastRenderedState:e},next:null},n.memoizedState=u,n=n.alternate,n!==null&&(n.memoizedState=u),u}function K3(n){var u=Q3(n);u.next===null&&(u=n.alternate.memoizedState),Yu(n,u.next.queue,{},Gn())}function Gt(){return fn(Ju)}function P3(){return W0().memoizedState}function V3(){return W0().memoizedState}function Gl(n){for(var u=n.return;u!==null;){switch(u.tag){case 24:case 3:var e=Gn();n=T2(e);var i=M2(u,n,e);i!==null&&(zn(i,u,e),_u(i,u,e)),u={cache:Et()},n.payload=u;return}u=u.return}}function Hl(n,u,e){var i=Gn();e={lane:i,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Ge(n)?$3(u,e):(e=et(n,u,e,i),e!==null&&(zn(e,n,i),n6(e,u,i)))}function W3(n,u,e){var i=Gn();Yu(n,u,e,i)}function Yu(n,u,e,i){var a={lane:i,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(Ge(n))$3(u,a);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=u.lastRenderedReducer,s!==null))try{var c=u.lastRenderedState,E=s(c,e);if(a.hasEagerState=!0,a.eagerState=E,Nn(E,c))return xe(n,u,a,0),I0===null&&De(),!1}catch{}finally{}if(e=et(n,u,a,i),e!==null)return zn(e,n,i),n6(e,u,i),!0}return!1}function Ht(n,u,e,i){if(i={lane:2,revertLane:D5(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ge(n)){if(u)throw Error(h(479))}else u=et(n,e,i,2),u!==null&&zn(u,n,2)}function Ge(n){var u=n.alternate;return n===h0||u!==null&&u===h0}function $3(n,u){U1=ve=!0;var e=n.pending;e===null?u.next=u:(u.next=e.next,e.next=u),n.pending=u}function n6(n,u,e){if((e&4194048)!==0){var i=u.lanes;i&=n.pendingLanes,e|=i,u.lanes=e,aa(n,e)}}var bu={readContext:fn,use:Me,useCallback:K0,useContext:K0,useEffect:K0,useImperativeHandle:K0,useLayoutEffect:K0,useInsertionEffect:K0,useMemo:K0,useReducer:K0,useRef:K0,useState:K0,useDebugValue:K0,useDeferredValue:K0,useTransition:K0,useSyncExternalStore:K0,useId:K0,useHostTransitionStatus:K0,useFormState:K0,useActionState:K0,useOptimistic:K0,useMemoCache:K0,useCacheRefresh:K0};bu.useEffectEvent=K0;var u6={readContext:fn,use:Me,useCallback:function(n,u){return An().memoizedState=[n,u===void 0?null:u],n},useContext:fn,useEffect:G3,useImperativeHandle:function(n,u,e){e=e!=null?e.concat([n]):null,Oe(4194308,4,X3.bind(null,u,n),e)},useLayoutEffect:function(n,u){return Oe(4194308,4,n,u)},useInsertionEffect:function(n,u){Oe(4,2,n,u)},useMemo:function(n,u){var e=An();u=u===void 0?null:u;var i=n();if(r1){j2(!0);try{n()}finally{j2(!1)}}return e.memoizedState=[i,u],i},useReducer:function(n,u,e){var i=An();if(e!==void 0){var a=e(u);if(r1){j2(!0);try{e(u)}finally{j2(!1)}}}else a=u;return i.memoizedState=i.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:a},i.queue=n,n=n.dispatch=Hl.bind(null,h0,n),[i.memoizedState,n]},useRef:function(n){var u=An();return n={current:n},u.memoizedState=n},useState:function(n){n=Nt(n);var u=n.queue,e=W3.bind(null,h0,u);return u.dispatch=e,[n.memoizedState,e]},useDebugValue:It,useDeferredValue:function(n,u){var e=An();return Ot(e,n,u)},useTransition:function(){var n=Nt(!1);return n=k3.bind(null,h0,n.queue,!0,!1),An().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,u,e){var i=h0,a=An();if(A0){if(e===void 0)throw Error(h(407));e=e()}else{if(e=u(),I0===null)throw Error(h(349));(D0&127)!==0||B3(i,u,e)}a.memoizedState=e;var s={value:e,getSnapshot:u};return a.queue=s,G3(_3.bind(null,i,s,n),[n]),i.flags|=2048,R1(9,{destroy:void 0},m3.bind(null,i,s,e,u),null),e},useId:function(){var n=An(),u=I0.identifierPrefix;if(A0){var e=e2,i=u2;e=(i&~(1<<32-vn(i)-1)).toString(32)+e,u="_"+u+"R_"+e,e=Ne++,0<e&&(u+="H"+e.toString(32)),u+="_"}else e=Nl++,u="_"+u+"r_"+e.toString(32)+"_";return n.memoizedState=u},useHostTransitionStatus:Gt,useFormState:T3,useActionState:T3,useOptimistic:function(n){var u=An();u.memoizedState=u.baseState=n;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return u.queue=e,u=Ht.bind(null,h0,!0,e),e.dispatch=u,[n,u]},useMemoCache:Yt,useCacheRefresh:function(){return An().memoizedState=Gl.bind(null,h0)},useEffectEvent:function(n){var u=An(),e={impl:n};return u.memoizedState=e,function(){if((j0&2)!==0)throw Error(h(440));return e.impl.apply(void 0,arguments)}}},Zt={readContext:fn,use:Me,useCallback:L3,useContext:fn,useEffect:Mt,useImperativeHandle:R3,useInsertionEffect:Z3,useLayoutEffect:U3,useMemo:q3,useReducer:Ie,useRef:w3,useState:function(){return Ie(f2)},useDebugValue:It,useDeferredValue:function(n,u){var e=W0();return J3(e,b0.memoizedState,n,u)},useTransition:function(){var n=Ie(f2)[0],u=W0().memoizedState;return[typeof n=="boolean"?n:pu(n),u]},useSyncExternalStore:d3,useId:P3,useHostTransitionStatus:Gt,useFormState:M3,useActionState:M3,useOptimistic:function(n,u){var e=W0();return z3(e,b0,n,u)},useMemoCache:Yt,useCacheRefresh:V3};Zt.useEffectEvent=H3;var e6={readContext:fn,use:Me,useCallback:L3,useContext:fn,useEffect:Mt,useImperativeHandle:R3,useInsertionEffect:Z3,useLayoutEffect:U3,useMemo:q3,useReducer:vt,useRef:w3,useState:function(){return vt(f2)},useDebugValue:It,useDeferredValue:function(n,u){var e=W0();return b0===null?Ot(e,n,u):J3(e,b0.memoizedState,n,u)},useTransition:function(){var n=vt(f2)[0],u=W0().memoizedState;return[typeof n=="boolean"?n:pu(n),u]},useSyncExternalStore:d3,useId:P3,useHostTransitionStatus:Gt,useFormState:O3,useActionState:O3,useOptimistic:function(n,u){var e=W0();return b0!==null?z3(e,b0,n,u):(e.baseState=n,[n,e.queue.dispatch])},useMemoCache:Yt,useCacheRefresh:V3};e6.useEffectEvent=H3;function Ut(n,u,e,i){u=n.memoizedState,e=e(i,u),e=e==null?u:_({},u,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var Xt={enqueueSetState:function(n,u,e){n=n._reactInternals;var i=Gn(),a=T2(i);a.payload=u,e!=null&&(a.callback=e),u=M2(n,a,i),u!==null&&(zn(u,n,i),_u(u,n,i))},enqueueReplaceState:function(n,u,e){n=n._reactInternals;var i=Gn(),a=T2(i);a.tag=1,a.payload=u,e!=null&&(a.callback=e),u=M2(n,a,i),u!==null&&(zn(u,n,i),_u(u,n,i))},enqueueForceUpdate:function(n,u){n=n._reactInternals;var e=Gn(),i=T2(e);i.tag=2,u!=null&&(i.callback=u),u=M2(n,i,e),u!==null&&(zn(u,n,e),_u(u,n,e))}};function i6(n,u,e,i,a,s,c){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,c):u.prototype&&u.prototype.isPureReactComponent?!Cu(e,i)||!Cu(a,s):!0}function t6(n,u,e,i){n=u.state,typeof u.componentWillReceiveProps=="function"&&u.componentWillReceiveProps(e,i),typeof u.UNSAFE_componentWillReceiveProps=="function"&&u.UNSAFE_componentWillReceiveProps(e,i),u.state!==n&&Xt.enqueueReplaceState(u,u.state,null)}function E1(n,u){var e=u;if("ref"in u){e={};for(var i in u)i!=="ref"&&(e[i]=u[i])}if(n=n.defaultProps){e===u&&(e=_({},e));for(var a in n)e[a]===void 0&&(e[a]=n[a])}return e}function a6(n){Ce(n)}function l6(n){console.error(n)}function s6(n){Ce(n)}function He(n,u){try{var e=n.onUncaughtError;e(u.value,{componentStack:u.stack})}catch(i){setTimeout(function(){throw i})}}function o6(n,u,e){try{var i=n.onCaughtError;i(e.value,{componentStack:e.stack,errorBoundary:u.tag===1?u.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Rt(n,u,e){return e=T2(e),e.tag=3,e.payload={element:null},e.callback=function(){He(n,u)},e}function h6(n){return n=T2(n),n.tag=3,n}function g6(n,u,e,i){var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;n.payload=function(){return a(s)},n.callback=function(){o6(u,e,i)}}var c=e.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(n.callback=function(){o6(u,e,i),typeof a!="function"&&(Z2===null?Z2=new Set([this]):Z2.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})})}function Zl(n,u,e,i,a){if(e.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(u=e.alternate,u!==null&&I1(u,e,a,!0),e=Mn.current,e!==null){switch(e.tag){case 31:case 13:return kn===null?Ve():e.alternate===null&&P0===0&&(P0=3),e.flags&=-257,e.flags|=65536,e.lanes=a,i===Se?e.flags|=16384:(u=e.updateQueue,u===null?e.updateQueue=new Set([i]):u.add(i),f5(n,i,a)),!1;case 22:return e.flags|=65536,i===Se?e.flags|=16384:(u=e.updateQueue,u===null?(u={transitions:null,markerInstances:null,retryQueue:new Set([i])},e.updateQueue=u):(e=u.retryQueue,e===null?u.retryQueue=new Set([i]):e.add(i)),f5(n,i,a)),!1}throw Error(h(435,e.tag))}return f5(n,i,a),Ve(),!1}if(A0)return u=Mn.current,u!==null?((u.flags&65536)===0&&(u.flags|=256),u.flags|=65536,u.lanes=a,i!==ot&&(n=Error(h(422),{cause:i}),Au(Rn(n,e)))):(i!==ot&&(u=Error(h(423),{cause:i}),Au(Rn(u,e))),n=n.current.alternate,n.flags|=65536,a&=-a,n.lanes|=a,i=Rn(i,e),a=Rt(n.stateNode,i,a),At(n,a),P0!==4&&(P0=2)),!1;var s=Error(h(520),{cause:i});if(s=Rn(s,e),Gu===null?Gu=[s]:Gu.push(s),P0!==4&&(P0=2),u===null)return!0;i=Rn(i,e),e=u;do{switch(e.tag){case 3:return e.flags|=65536,n=a&-a,e.lanes|=n,n=Rt(e.stateNode,i,n),At(e,n),!1;case 1:if(u=e.type,s=e.stateNode,(e.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Z2===null||!Z2.has(s))))return e.flags|=65536,a&=-a,e.lanes|=a,a=h6(a),g6(a,n,e,i),At(e,a),!1}e=e.return}while(e!==null);return!1}var Lt=Error(h(461)),un=!1;function Fn(n,u,e,i){u.child=n===null?f3(u,null,e,i):c1(u,n.child,e,i)}function c6(n,u,e,i,a){e=e.render;var s=u.ref;if("ref"in i){var c={};for(var E in i)E!=="ref"&&(c[E]=i[E])}else c=i;return s1(u),i=jt(n,u,e,c,s,a),E=St(),n!==null&&!un?(zt(n,u,a),F2(n,u,a)):(A0&&E&&lt(u),u.flags|=1,Fn(n,u,i,a),u.child)}function r6(n,u,e,i,a){if(n===null){var s=e.type;return typeof s=="function"&&!it(s)&&s.defaultProps===void 0&&e.compare===null?(u.tag=15,u.type=s,E6(n,u,s,i,a)):(n=ye(e.type,null,i,u,u.mode,a),n.ref=u.ref,n.return=u,u.child=n)}if(s=n.child,!Wt(n,a)){var c=s.memoizedProps;if(e=e.compare,e=e!==null?e:Cu,e(c,i)&&n.ref===u.ref)return F2(n,u,a)}return u.flags|=1,n=h2(s,i),n.ref=u.ref,n.return=u,u.child=n}function E6(n,u,e,i,a){if(n!==null){var s=n.memoizedProps;if(Cu(s,i)&&n.ref===u.ref)if(un=!1,u.pendingProps=i=s,Wt(n,a))(n.flags&131072)!==0&&(un=!0);else return u.lanes=n.lanes,F2(n,u,a)}return qt(n,u,e,i,a)}function f6(n,u,e,i){var a=i.children,s=n!==null?n.memoizedState:null;if(n===null&&u.stateNode===null&&(u.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((u.flags&128)!==0){if(s=s!==null?s.baseLanes|e:e,n!==null){for(i=u.child=n.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,u.child=null;return F6(n,u,s,e,i)}if((e&536870912)!==0)u.memoizedState={baseLanes:0,cachePool:null},n!==null&&_e(u,s!==null?s.cachePool:null),s!==null?D3(u,s):dt(),x3(u);else return i=u.lanes=536870912,F6(n,u,s!==null?s.baseLanes|e:e,e,i)}else s!==null?(_e(u,s.cachePool),D3(u,s),O2(),u.memoizedState=null):(n!==null&&_e(u,null),dt(),O2());return Fn(n,u,a,e),u.child}function vu(n,u){return n!==null&&n.tag===22||u.stateNode!==null||(u.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.sibling}function F6(n,u,e,i,a){var s=Ft();return s=s===null?null:{parent:$0._currentValue,pool:s},u.memoizedState={baseLanes:e,cachePool:s},n!==null&&_e(u,null),dt(),x3(u),n!==null&&I1(n,u,i,!0),u.childLanes=a,null}function Ze(n,u){return u=Xe({mode:u.mode,children:u.children},n.mode),u.ref=n.ref,n.child=u,u.return=n,u}function C6(n,u,e){return c1(u,n.child,null,e),n=Ze(u,u.pendingProps),n.flags|=2,In(u),u.memoizedState=null,n}function Ul(n,u,e){var i=u.pendingProps,a=(u.flags&128)!==0;if(u.flags&=-129,n===null){if(A0){if(i.mode==="hidden")return n=Ze(u,i),u.lanes=536870912,vu(null,n);if(mt(u),(n=H0)?(n=p7(n,Jn),n=n!==null&&n.data==="&"?n:null,n!==null&&(u.memoizedState={dehydrated:n,treeContext:p2!==null?{id:u2,overflow:e2}:null,retryLane:536870912,hydrationErrors:null},e=$a(n),e.return=u,u.child=e,En=u,H0=null)):n=null,n===null)throw b2(u);return u.lanes=536870912,null}return Ze(u,i)}var s=n.memoizedState;if(s!==null){var c=s.dehydrated;if(mt(u),a)if(u.flags&256)u.flags&=-257,u=C6(n,u,e);else if(u.memoizedState!==null)u.child=n.child,u.flags|=128,u=null;else throw Error(h(558));else if(un||I1(n,u,e,!1),a=(e&n.childLanes)!==0,un||a){if(i=I0,i!==null&&(c=la(i,e),c!==0&&c!==s.retryLane))throw s.retryLane=c,i1(n,c),zn(i,n,c),Lt;Ve(),u=C6(n,u,e)}else n=s.treeContext,H0=Qn(c.nextSibling),En=u,A0=!0,Y2=null,Jn=!1,n!==null&&e3(u,n),u=Ze(u,i),u.flags|=4096;return u}return n=h2(n.child,{mode:i.mode,children:i.children}),n.ref=u.ref,u.child=n,n.return=u,n}function Ue(n,u){var e=u.ref;if(e===null)n!==null&&n.ref!==null&&(u.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(h(284));(n===null||n.ref!==e)&&(u.flags|=4194816)}}function qt(n,u,e,i,a){return s1(u),e=jt(n,u,e,i,void 0,a),i=St(),n!==null&&!un?(zt(n,u,a),F2(n,u,a)):(A0&&i&&lt(u),u.flags|=1,Fn(n,u,e,a),u.child)}function D6(n,u,e,i,a,s){return s1(u),u.updateQueue=null,e=y3(u,i,e,a),A3(n),i=St(),n!==null&&!un?(zt(n,u,s),F2(n,u,s)):(A0&&i&&lt(u),u.flags|=1,Fn(n,u,e,s),u.child)}function x6(n,u,e,i,a){if(s1(u),u.stateNode===null){var s=v1,c=e.contextType;typeof c=="object"&&c!==null&&(s=fn(c)),s=new e(i,s),u.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Xt,u.stateNode=s,s._reactInternals=u,s=u.stateNode,s.props=i,s.state=u.memoizedState,s.refs={},Dt(u),c=e.contextType,s.context=typeof c=="object"&&c!==null?fn(c):v1,s.state=u.memoizedState,c=e.getDerivedStateFromProps,typeof c=="function"&&(Ut(u,e,c,i),s.state=u.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(c=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),c!==s.state&&Xt.enqueueReplaceState(s,s.state,null),Su(u,i,s,a),ju(),s.state=u.memoizedState),typeof s.componentDidMount=="function"&&(u.flags|=4194308),i=!0}else if(n===null){s=u.stateNode;var E=u.memoizedProps,d=E1(e,E);s.props=d;var b=s.context,T=e.contextType;c=v1,typeof T=="object"&&T!==null&&(c=fn(T));var G=e.getDerivedStateFromProps;T=typeof G=="function"||typeof s.getSnapshotBeforeUpdate=="function",E=u.pendingProps!==E,T||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(E||b!==c)&&t6(u,s,i,c),N2=!1;var v=u.memoizedState;s.state=v,Su(u,i,s,a),ju(),b=u.memoizedState,E||v!==b||N2?(typeof G=="function"&&(Ut(u,e,G,i),b=u.memoizedState),(d=N2||i6(u,e,d,i,v,b,c))?(T||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(u.flags|=4194308)):(typeof s.componentDidMount=="function"&&(u.flags|=4194308),u.memoizedProps=i,u.memoizedState=b),s.props=i,s.state=b,s.context=c,i=d):(typeof s.componentDidMount=="function"&&(u.flags|=4194308),i=!1)}else{s=u.stateNode,xt(n,u),c=u.memoizedProps,T=E1(e,c),s.props=T,G=u.pendingProps,v=s.context,b=e.contextType,d=v1,typeof b=="object"&&b!==null&&(d=fn(b)),E=e.getDerivedStateFromProps,(b=typeof E=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==G||v!==d)&&t6(u,s,i,d),N2=!1,v=u.memoizedState,s.state=v,Su(u,i,s,a),ju();var N=u.memoizedState;c!==G||v!==N||N2||n!==null&&n.dependencies!==null&&Be(n.dependencies)?(typeof E=="function"&&(Ut(u,e,E,i),N=u.memoizedState),(T=N2||i6(u,e,T,i,v,N,d)||n!==null&&n.dependencies!==null&&Be(n.dependencies))?(b||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,N,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,N,d)),typeof s.componentDidUpdate=="function"&&(u.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(u.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===n.memoizedProps&&v===n.memoizedState||(u.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===n.memoizedProps&&v===n.memoizedState||(u.flags|=1024),u.memoizedProps=i,u.memoizedState=N),s.props=i,s.state=N,s.context=d,i=T):(typeof s.componentDidUpdate!="function"||c===n.memoizedProps&&v===n.memoizedState||(u.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===n.memoizedProps&&v===n.memoizedState||(u.flags|=1024),i=!1)}return s=i,Ue(n,u),i=(u.flags&128)!==0,s||i?(s=u.stateNode,e=i&&typeof e.getDerivedStateFromError!="function"?null:s.render(),u.flags|=1,n!==null&&i?(u.child=c1(u,n.child,null,a),u.child=c1(u,null,e,a)):Fn(n,u,e,a),u.memoizedState=s.state,n=u.child):n=F2(n,u,a),n}function A6(n,u,e,i){return a1(),u.flags|=256,Fn(n,u,e,i),u.child}var Jt={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kt(n){return{baseLanes:n,cachePool:o3()}}function Qt(n,u,e){return n=n!==null?n.childLanes&~e:0,u&&(n|=wn),n}function y6(n,u,e){var i=u.pendingProps,a=!1,s=(u.flags&128)!==0,c;if((c=s)||(c=n!==null&&n.memoizedState===null?!1:(V0.current&2)!==0),c&&(a=!0,u.flags&=-129),c=(u.flags&32)!==0,u.flags&=-33,n===null){if(A0){if(a?I2(u):O2(),(n=H0)?(n=p7(n,Jn),n=n!==null&&n.data!=="&"?n:null,n!==null&&(u.memoizedState={dehydrated:n,treeContext:p2!==null?{id:u2,overflow:e2}:null,retryLane:536870912,hydrationErrors:null},e=$a(n),e.return=u,u.child=e,En=u,H0=null)):n=null,n===null)throw b2(u);return b5(n)?u.lanes=32:u.lanes=536870912,null}var E=i.children;return i=i.fallback,a?(O2(),a=u.mode,E=Xe({mode:"hidden",children:E},a),i=t1(i,a,e,null),E.return=u,i.return=u,E.sibling=i,u.child=E,i=u.child,i.memoizedState=kt(e),i.childLanes=Qt(n,c,e),u.memoizedState=Jt,vu(null,i)):(I2(u),Kt(u,E))}var d=n.memoizedState;if(d!==null&&(E=d.dehydrated,E!==null)){if(s)u.flags&256?(I2(u),u.flags&=-257,u=Pt(n,u,e)):u.memoizedState!==null?(O2(),u.child=n.child,u.flags|=128,u=null):(O2(),E=i.fallback,a=u.mode,i=Xe({mode:"visible",children:i.children},a),E=t1(E,a,e,null),E.flags|=2,i.return=u,E.return=u,i.sibling=E,u.child=i,c1(u,n.child,null,e),i=u.child,i.memoizedState=kt(e),i.childLanes=Qt(n,c,e),u.memoizedState=Jt,u=vu(null,i));else if(I2(u),b5(E)){if(c=E.nextSibling&&E.nextSibling.dataset,c)var b=c.dgst;c=b,i=Error(h(419)),i.stack="",i.digest=c,Au({value:i,source:null,stack:null}),u=Pt(n,u,e)}else if(un||I1(n,u,e,!1),c=(e&n.childLanes)!==0,un||c){if(c=I0,c!==null&&(i=la(c,e),i!==0&&i!==d.retryLane))throw d.retryLane=i,i1(n,i),zn(c,n,i),Lt;Y5(E)||Ve(),u=Pt(n,u,e)}else Y5(E)?(u.flags|=192,u.child=n.child,u=null):(n=d.treeContext,H0=Qn(E.nextSibling),En=u,A0=!0,Y2=null,Jn=!1,n!==null&&e3(u,n),u=Kt(u,i.children),u.flags|=4096);return u}return a?(O2(),E=i.fallback,a=u.mode,d=n.child,b=d.sibling,i=h2(d,{mode:"hidden",children:i.children}),i.subtreeFlags=d.subtreeFlags&65011712,b!==null?E=h2(b,E):(E=t1(E,a,e,null),E.flags|=2),E.return=u,i.return=u,i.sibling=E,u.child=i,vu(null,i),i=u.child,E=n.child.memoizedState,E===null?E=kt(e):(a=E.cachePool,a!==null?(d=$0._currentValue,a=a.parent!==d?{parent:d,pool:d}:a):a=o3(),E={baseLanes:E.baseLanes|e,cachePool:a}),i.memoizedState=E,i.childLanes=Qt(n,c,e),u.memoizedState=Jt,vu(n.child,i)):(I2(u),e=n.child,n=e.sibling,e=h2(e,{mode:"visible",children:i.children}),e.return=u,e.sibling=null,n!==null&&(c=u.deletions,c===null?(u.deletions=[n],u.flags|=16):c.push(n)),u.child=e,u.memoizedState=null,e)}function Kt(n,u){return u=Xe({mode:"visible",children:u},n.mode),u.return=n,n.child=u}function Xe(n,u){return n=Tn(22,n,null,u),n.lanes=0,n}function Pt(n,u,e){return c1(u,n.child,null,e),n=Kt(u,u.pendingProps.children),n.flags|=2,u.memoizedState=null,n}function d6(n,u,e){n.lanes|=u;var i=n.alternate;i!==null&&(i.lanes|=u),ct(n.return,u,e)}function Vt(n,u,e,i,a,s){var c=n.memoizedState;c===null?n.memoizedState={isBackwards:u,rendering:null,renderingStartTime:0,last:i,tail:e,tailMode:a,treeForkCount:s}:(c.isBackwards=u,c.rendering=null,c.renderingStartTime=0,c.last=i,c.tail=e,c.tailMode=a,c.treeForkCount=s)}function B6(n,u,e){var i=u.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var c=V0.current,E=(c&2)!==0;if(E?(c=c&1|2,u.flags|=128):c&=1,q(V0,c),Fn(n,u,i,e),i=A0?xu:0,!E&&n!==null&&(n.flags&128)!==0)n:for(n=u.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&d6(n,e,u);else if(n.tag===19)d6(n,e,u);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===u)break n;for(;n.sibling===null;){if(n.return===null||n.return===u)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(a){case"forwards":for(e=u.child,a=null;e!==null;)n=e.alternate,n!==null&&be(n)===null&&(a=e),e=e.sibling;e=a,e===null?(a=u.child,u.child=null):(a=e.sibling,e.sibling=null),Vt(u,!1,a,e,s,i);break;case"backwards":case"unstable_legacy-backwards":for(e=null,a=u.child,u.child=null;a!==null;){if(n=a.alternate,n!==null&&be(n)===null){u.child=a;break}n=a.sibling,a.sibling=e,e=a,a=n}Vt(u,!0,e,null,s,i);break;case"together":Vt(u,!1,null,null,void 0,i);break;default:u.memoizedState=null}return u.child}function F2(n,u,e){if(n!==null&&(u.dependencies=n.dependencies),H2|=u.lanes,(e&u.childLanes)===0)if(n!==null){if(I1(n,u,e,!1),(e&u.childLanes)===0)return null}else return null;if(n!==null&&u.child!==n.child)throw Error(h(153));if(u.child!==null){for(n=u.child,e=h2(n,n.pendingProps),u.child=e,e.return=u;n.sibling!==null;)n=n.sibling,e=e.sibling=h2(n,n.pendingProps),e.return=u;e.sibling=null}return u.child}function Wt(n,u){return(n.lanes&u)!==0?!0:(n=n.dependencies,!!(n!==null&&Be(n)))}function Xl(n,u,e){switch(u.tag){case 3:cn(u,u.stateNode.containerInfo),v2(u,$0,n.memoizedState.cache),a1();break;case 27:case 5:D1(u);break;case 4:cn(u,u.stateNode.containerInfo);break;case 10:v2(u,u.type,u.memoizedProps.value);break;case 31:if(u.memoizedState!==null)return u.flags|=128,mt(u),null;break;case 13:var i=u.memoizedState;if(i!==null)return i.dehydrated!==null?(I2(u),u.flags|=128,null):(e&u.child.childLanes)!==0?y6(n,u,e):(I2(u),n=F2(n,u,e),n!==null?n.sibling:null);I2(u);break;case 19:var a=(n.flags&128)!==0;if(i=(e&u.childLanes)!==0,i||(I1(n,u,e,!1),i=(e&u.childLanes)!==0),a){if(i)return B6(n,u,e);u.flags|=128}if(a=u.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),q(V0,V0.current),i)break;return null;case 22:return u.lanes=0,f6(n,u,e,u.pendingProps);case 24:v2(u,$0,n.memoizedState.cache)}return F2(n,u,e)}function m6(n,u,e){if(n!==null)if(n.memoizedProps!==u.pendingProps)un=!0;else{if(!Wt(n,e)&&(u.flags&128)===0)return un=!1,Xl(n,u,e);un=(n.flags&131072)!==0}else un=!1,A0&&(u.flags&1048576)!==0&&u3(u,xu,u.index);switch(u.lanes=0,u.tag){case 16:n:{var i=u.pendingProps;if(n=h1(u.elementType),u.type=n,typeof n=="function")it(n)?(i=E1(n,i),u.tag=1,u=x6(null,u,n,i,e)):(u.tag=0,u=qt(null,u,n,i,e));else{if(n!=null){var a=n.$$typeof;if(a===G0){u.tag=11,u=c6(null,u,n,i,e);break n}else if(a===u0){u.tag=14,u=r6(null,u,n,i,e);break n}}throw u=S0(n)||n,Error(h(306,u,""))}}return u;case 0:return qt(n,u,u.type,u.pendingProps,e);case 1:return i=u.type,a=E1(i,u.pendingProps),x6(n,u,i,a,e);case 3:n:{if(cn(u,u.stateNode.containerInfo),n===null)throw Error(h(387));i=u.pendingProps;var s=u.memoizedState;a=s.element,xt(n,u),Su(u,i,null,e);var c=u.memoizedState;if(i=c.cache,v2(u,$0,i),i!==s.cache&&rt(u,[$0],e,!0),ju(),i=c.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:c.cache},u.updateQueue.baseState=s,u.memoizedState=s,u.flags&256){u=A6(n,u,i,e);break n}else if(i!==a){a=Rn(Error(h(424)),u),Au(a),u=A6(n,u,i,e);break n}else{switch(n=u.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(H0=Qn(n.firstChild),En=u,A0=!0,Y2=null,Jn=!0,e=f3(u,null,i,e),u.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(a1(),i===a){u=F2(n,u,e);break n}Fn(n,u,i,e)}u=u.child}return u;case 26:return Ue(n,u),n===null?(e=M7(u.type,null,u.pendingProps,null))?u.memoizedState=e:A0||(e=u.type,n=u.pendingProps,i=ti(r0.current).createElement(e),i[rn]=u,i[dn]=n,Cn(i,e,n),sn(i),u.stateNode=i):u.memoizedState=M7(u.type,n.memoizedProps,u.pendingProps,n.memoizedState),null;case 27:return D1(u),n===null&&A0&&(i=u.stateNode=v7(u.type,u.pendingProps,r0.current),En=u,Jn=!0,a=H0,L2(u.type)?(v5=a,H0=Qn(i.firstChild)):H0=a),Fn(n,u,u.pendingProps.children,e),Ue(n,u),n===null&&(u.flags|=4194304),u.child;case 5:return n===null&&A0&&((a=i=H0)&&(i=xs(i,u.type,u.pendingProps,Jn),i!==null?(u.stateNode=i,En=u,H0=Qn(i.firstChild),Jn=!1,a=!0):a=!1),a||b2(u)),D1(u),a=u.type,s=u.pendingProps,c=n!==null?n.memoizedProps:null,i=s.children,S5(a,s)?i=null:c!==null&&S5(a,c)&&(u.flags|=32),u.memoizedState!==null&&(a=jt(n,u,Tl,null,null,e),Ju._currentValue=a),Ue(n,u),Fn(n,u,i,e),u.child;case 6:return n===null&&A0&&((n=e=H0)&&(e=As(e,u.pendingProps,Jn),e!==null?(u.stateNode=e,En=u,H0=null,n=!0):n=!1),n||b2(u)),null;case 13:return y6(n,u,e);case 4:return cn(u,u.stateNode.containerInfo),i=u.pendingProps,n===null?u.child=c1(u,null,i,e):Fn(n,u,i,e),u.child;case 11:return c6(n,u,u.type,u.pendingProps,e);case 7:return Fn(n,u,u.pendingProps,e),u.child;case 8:return Fn(n,u,u.pendingProps.children,e),u.child;case 12:return Fn(n,u,u.pendingProps.children,e),u.child;case 10:return i=u.pendingProps,v2(u,u.type,i.value),Fn(n,u,i.children,e),u.child;case 9:return a=u.type._context,i=u.pendingProps.children,s1(u),a=fn(a),i=i(a),u.flags|=1,Fn(n,u,i,e),u.child;case 14:return r6(n,u,u.type,u.pendingProps,e);case 15:return E6(n,u,u.type,u.pendingProps,e);case 19:return B6(n,u,e);case 31:return Ul(n,u,e);case 22:return f6(n,u,e,u.pendingProps);case 24:return s1(u),i=fn($0),n===null?(a=Ft(),a===null&&(a=I0,s=Et(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=e),a=s),u.memoizedState={parent:i,cache:a},Dt(u),v2(u,$0,a)):((n.lanes&e)!==0&&(xt(n,u),Su(u,null,null,e),ju()),a=n.memoizedState,s=u.memoizedState,a.parent!==i?(a={parent:i,cache:i},u.memoizedState=a,u.lanes===0&&(u.memoizedState=u.updateQueue.baseState=a),v2(u,$0,i)):(i=s.cache,v2(u,$0,i),i!==a.cache&&rt(u,[$0],e,!0))),Fn(n,u,u.pendingProps.children,e),u.child;case 29:throw u.pendingProps}throw Error(h(156,u.tag))}function C2(n){n.flags|=4}function $t(n,u,e,i,a){if((u=(n.mode&32)!==0)&&(u=!1),u){if(n.flags|=16777216,(a&335544128)===a)if(n.stateNode.complete)n.flags|=8192;else if(P6())n.flags|=8192;else throw g1=Se,Ct}else n.flags&=-16777217}function _6(n,u){if(u.type!=="stylesheet"||(u.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!H7(u))if(P6())n.flags|=8192;else throw g1=Se,Ct}function Re(n,u){u!==null&&(n.flags|=4),n.flags&16384&&(u=n.tag!==22?ia():536870912,n.lanes|=u,k1|=u)}function Nu(n,u){if(!A0)switch(n.tailMode){case"hidden":u=n.tail;for(var e=null;u!==null;)u.alternate!==null&&(e=u),u=u.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?u||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Z0(n){var u=n.alternate!==null&&n.alternate.child===n.child,e=0,i=0;if(u)for(var a=n.child;a!==null;)e|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=n,a=a.sibling;else for(a=n.child;a!==null;)e|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=n,a=a.sibling;return n.subtreeFlags|=i,n.childLanes=e,u}function Rl(n,u,e){var i=u.pendingProps;switch(st(u),u.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Z0(u),null;case 1:return Z0(u),null;case 3:return e=u.stateNode,i=null,n!==null&&(i=n.memoizedState.cache),u.memoizedState.cache!==i&&(u.flags|=2048),r2($0),R0(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(n===null||n.child===null)&&(M1(u)?C2(u):n===null||n.memoizedState.isDehydrated&&(u.flags&256)===0||(u.flags|=1024,ht())),Z0(u),null;case 26:var a=u.type,s=u.memoizedState;return n===null?(C2(u),s!==null?(Z0(u),_6(u,s)):(Z0(u),$t(u,a,null,i,e))):s?s!==n.memoizedState?(C2(u),Z0(u),_6(u,s)):(Z0(u),u.flags&=-16777217):(n=n.memoizedProps,n!==i&&C2(u),Z0(u),$t(u,a,n,i,e)),null;case 27:if(ne(u),e=r0.current,a=u.type,n!==null&&u.stateNode!=null)n.memoizedProps!==i&&C2(u);else{if(!i){if(u.stateNode===null)throw Error(h(166));return Z0(u),null}n=Q.current,M1(u)?i3(u):(n=v7(a,i,e),u.stateNode=n,C2(u))}return Z0(u),null;case 5:if(ne(u),a=u.type,n!==null&&u.stateNode!=null)n.memoizedProps!==i&&C2(u);else{if(!i){if(u.stateNode===null)throw Error(h(166));return Z0(u),null}if(s=Q.current,M1(u))i3(u);else{var c=ti(r0.current);switch(s){case 1:s=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=c.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?c.createElement("select",{is:i.is}):c.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?c.createElement(a,{is:i.is}):c.createElement(a)}}s[rn]=u,s[dn]=i;n:for(c=u.child;c!==null;){if(c.tag===5||c.tag===6)s.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===u)break n;for(;c.sibling===null;){if(c.return===null||c.return===u)break n;c=c.return}c.sibling.return=c.return,c=c.sibling}u.stateNode=s;n:switch(Cn(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break n;case"img":i=!0;break n;default:i=!1}i&&C2(u)}}return Z0(u),$t(u,u.type,n===null?null:n.memoizedProps,u.pendingProps,e),null;case 6:if(n&&u.stateNode!=null)n.memoizedProps!==i&&C2(u);else{if(typeof i!="string"&&u.stateNode===null)throw Error(h(166));if(n=r0.current,M1(u)){if(n=u.stateNode,e=u.memoizedProps,i=null,a=En,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}n[rn]=u,n=!!(n.nodeValue===e||i!==null&&i.suppressHydrationWarning===!0||y7(n.nodeValue,e)),n||b2(u,!0)}else n=ti(n).createTextNode(i),n[rn]=u,u.stateNode=n}return Z0(u),null;case 31:if(e=u.memoizedState,n===null||n.memoizedState!==null){if(i=M1(u),e!==null){if(n===null){if(!i)throw Error(h(318));if(n=u.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(557));n[rn]=u}else a1(),(u.flags&128)===0&&(u.memoizedState=null),u.flags|=4;Z0(u),n=!1}else e=ht(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=e),n=!0;if(!n)return u.flags&256?(In(u),u):(In(u),null);if((u.flags&128)!==0)throw Error(h(558))}return Z0(u),null;case 13:if(i=u.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(a=M1(u),i!==null&&i.dehydrated!==null){if(n===null){if(!a)throw Error(h(318));if(a=u.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(h(317));a[rn]=u}else a1(),(u.flags&128)===0&&(u.memoizedState=null),u.flags|=4;Z0(u),a=!1}else a=ht(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),a=!0;if(!a)return u.flags&256?(In(u),u):(In(u),null)}return In(u),(u.flags&128)!==0?(u.lanes=e,u):(e=i!==null,n=n!==null&&n.memoizedState!==null,e&&(i=u.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),e!==n&&e&&(u.child.flags|=8192),Re(u,u.updateQueue),Z0(u),null);case 4:return R0(),n===null&&d5(u.stateNode.containerInfo),Z0(u),null;case 10:return r2(u.type),Z0(u),null;case 19:if(I(V0),i=u.memoizedState,i===null)return Z0(u),null;if(a=(u.flags&128)!==0,s=i.rendering,s===null)if(a)Nu(i,!1);else{if(P0!==0||n!==null&&(n.flags&128)!==0)for(n=u.child;n!==null;){if(s=be(n),s!==null){for(u.flags|=128,Nu(i,!1),n=s.updateQueue,u.updateQueue=n,Re(u,n),u.subtreeFlags=0,n=e,e=u.child;e!==null;)Wa(e,n),e=e.sibling;return q(V0,V0.current&1|2),A0&&g2(u,i.treeForkCount),u.child}n=n.sibling}i.tail!==null&&Yn()>Qe&&(u.flags|=128,a=!0,Nu(i,!1),u.lanes=4194304)}else{if(!a)if(n=be(s),n!==null){if(u.flags|=128,a=!0,n=n.updateQueue,u.updateQueue=n,Re(u,n),Nu(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!A0)return Z0(u),null}else 2*Yn()-i.renderingStartTime>Qe&&e!==536870912&&(u.flags|=128,a=!0,Nu(i,!1),u.lanes=4194304);i.isBackwards?(s.sibling=u.child,u.child=s):(n=i.last,n!==null?n.sibling=s:u.child=s,i.last=s)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Yn(),n.sibling=null,e=V0.current,q(V0,a?e&1|2:e&1),A0&&g2(u,i.treeForkCount),n):(Z0(u),null);case 22:case 23:return In(u),Bt(),i=u.memoizedState!==null,n!==null?n.memoizedState!==null!==i&&(u.flags|=8192):i&&(u.flags|=8192),i?(e&536870912)!==0&&(u.flags&128)===0&&(Z0(u),u.subtreeFlags&6&&(u.flags|=8192)):Z0(u),e=u.updateQueue,e!==null&&Re(u,e.retryQueue),e=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),i=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(i=u.memoizedState.cachePool.pool),i!==e&&(u.flags|=2048),n!==null&&I(o1),null;case 24:return e=null,n!==null&&(e=n.memoizedState.cache),u.memoizedState.cache!==e&&(u.flags|=2048),r2($0),Z0(u),null;case 25:return null;case 30:return null}throw Error(h(156,u.tag))}function Ll(n,u){switch(st(u),u.tag){case 1:return n=u.flags,n&65536?(u.flags=n&-65537|128,u):null;case 3:return r2($0),R0(),n=u.flags,(n&65536)!==0&&(n&128)===0?(u.flags=n&-65537|128,u):null;case 26:case 27:case 5:return ne(u),null;case 31:if(u.memoizedState!==null){if(In(u),u.alternate===null)throw Error(h(340));a1()}return n=u.flags,n&65536?(u.flags=n&-65537|128,u):null;case 13:if(In(u),n=u.memoizedState,n!==null&&n.dehydrated!==null){if(u.alternate===null)throw Error(h(340));a1()}return n=u.flags,n&65536?(u.flags=n&-65537|128,u):null;case 19:return I(V0),null;case 4:return R0(),null;case 10:return r2(u.type),null;case 22:case 23:return In(u),Bt(),n!==null&&I(o1),n=u.flags,n&65536?(u.flags=n&-65537|128,u):null;case 24:return r2($0),null;case 25:return null;default:return null}}function j6(n,u){switch(st(u),u.tag){case 3:r2($0),R0();break;case 26:case 27:case 5:ne(u);break;case 4:R0();break;case 31:u.memoizedState!==null&&In(u);break;case 13:In(u);break;case 19:I(V0);break;case 10:r2(u.type);break;case 22:case 23:In(u),Bt(),n!==null&&I(o1);break;case 24:r2($0)}}function Tu(n,u){try{var e=u.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var a=i.next;e=a;do{if((e.tag&n)===n){i=void 0;var s=e.create,c=e.inst;i=s(),c.destroy=i}e=e.next}while(e!==a)}}catch(E){p0(u,u.return,E)}}function w2(n,u,e){try{var i=u.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&n)===n){var c=i.inst,E=c.destroy;if(E!==void 0){c.destroy=void 0,a=u;var d=e,b=E;try{b()}catch(T){p0(a,d,T)}}}i=i.next}while(i!==s)}}catch(T){p0(u,u.return,T)}}function S6(n){var u=n.updateQueue;if(u!==null){var e=n.stateNode;try{C3(u,e)}catch(i){p0(n,n.return,i)}}}function z6(n,u,e){e.props=E1(n.type,n.memoizedProps),e.state=n.memoizedState;try{e.componentWillUnmount()}catch(i){p0(n,u,i)}}function Mu(n,u){try{var e=n.ref;if(e!==null){switch(n.tag){case 26:case 27:case 5:var i=n.stateNode;break;case 30:i=n.stateNode;break;default:i=n.stateNode}typeof e=="function"?n.refCleanup=e(i):e.current=i}}catch(a){p0(n,u,a)}}function i2(n,u){var e=n.ref,i=n.refCleanup;if(e!==null)if(typeof i=="function")try{i()}catch(a){p0(n,u,a)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(a){p0(n,u,a)}else e.current=null}function p6(n){var u=n.type,e=n.memoizedProps,i=n.stateNode;try{n:switch(u){case"button":case"input":case"select":case"textarea":e.autoFocus&&i.focus();break n;case"img":e.src?i.src=e.src:e.srcSet&&(i.srcset=e.srcSet)}}catch(a){p0(n,n.return,a)}}function n5(n,u,e){try{var i=n.stateNode;rs(i,n.type,e,u),i[dn]=u}catch(a){p0(n,n.return,a)}}function Y6(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&L2(n.type)||n.tag===4}function u5(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Y6(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&L2(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function e5(n,u,e){var i=n.tag;if(i===5||i===6)n=n.stateNode,u?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(n,u):(u=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,u.appendChild(n),e=e._reactRootContainer,e!=null||u.onclick!==null||(u.onclick=s2));else if(i!==4&&(i===27&&L2(n.type)&&(e=n.stateNode,u=null),n=n.child,n!==null))for(e5(n,u,e),n=n.sibling;n!==null;)e5(n,u,e),n=n.sibling}function Le(n,u,e){var i=n.tag;if(i===5||i===6)n=n.stateNode,u?e.insertBefore(n,u):e.appendChild(n);else if(i!==4&&(i===27&&L2(n.type)&&(e=n.stateNode),n=n.child,n!==null))for(Le(n,u,e),n=n.sibling;n!==null;)Le(n,u,e),n=n.sibling}function b6(n){var u=n.stateNode,e=n.memoizedProps;try{for(var i=n.type,a=u.attributes;a.length;)u.removeAttributeNode(a[0]);Cn(u,i,e),u[rn]=n,u[dn]=e}catch(s){p0(n,n.return,s)}}var D2=!1,en=!1,i5=!1,v6=typeof WeakSet=="function"?WeakSet:Set,on=null;function ql(n,u){if(n=n.containerInfo,_5=ci,n=Ra(n),Pi(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else n:{e=(e=n.ownerDocument)&&e.defaultView||window;var i=e.getSelection&&e.getSelection();if(i&&i.rangeCount!==0){e=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{e.nodeType,s.nodeType}catch{e=null;break n}var c=0,E=-1,d=-1,b=0,T=0,G=n,v=null;u:for(;;){for(var N;G!==e||a!==0&&G.nodeType!==3||(E=c+a),G!==s||i!==0&&G.nodeType!==3||(d=c+i),G.nodeType===3&&(c+=G.nodeValue.length),(N=G.firstChild)!==null;)v=G,G=N;for(;;){if(G===n)break u;if(v===e&&++b===a&&(E=c),v===s&&++T===i&&(d=c),(N=G.nextSibling)!==null)break;G=v,v=G.parentNode}G=N}e=E===-1||d===-1?null:{start:E,end:d}}else e=null}e=e||{start:0,end:0}}else e=null;for(j5={focusedElem:n,selectionRange:e},ci=!1,on=u;on!==null;)if(u=on,n=u.child,(u.subtreeFlags&1028)!==0&&n!==null)n.return=u,on=n;else for(;on!==null;){switch(u=on,s=u.alternate,n=u.flags,u.tag){case 0:if((n&4)!==0&&(n=u.updateQueue,n=n!==null?n.events:null,n!==null))for(e=0;e<n.length;e++)a=n[e],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&s!==null){n=void 0,e=u,a=s.memoizedProps,s=s.memoizedState,i=e.stateNode;try{var K=E1(e.type,a);n=i.getSnapshotBeforeUpdate(K,s),i.__reactInternalSnapshotBeforeUpdate=n}catch(e0){p0(e,e.return,e0)}}break;case 3:if((n&1024)!==0){if(n=u.stateNode.containerInfo,e=n.nodeType,e===9)p5(n);else if(e===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":p5(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(h(163))}if(n=u.sibling,n!==null){n.return=u.return,on=n;break}on=u.return}}function N6(n,u,e){var i=e.flags;switch(e.tag){case 0:case 11:case 15:A2(n,e),i&4&&Tu(5,e);break;case 1:if(A2(n,e),i&4)if(n=e.stateNode,u===null)try{n.componentDidMount()}catch(c){p0(e,e.return,c)}else{var a=E1(e.type,u.memoizedProps);u=u.memoizedState;try{n.componentDidUpdate(a,u,n.__reactInternalSnapshotBeforeUpdate)}catch(c){p0(e,e.return,c)}}i&64&&S6(e),i&512&&Mu(e,e.return);break;case 3:if(A2(n,e),i&64&&(n=e.updateQueue,n!==null)){if(u=null,e.child!==null)switch(e.child.tag){case 27:case 5:u=e.child.stateNode;break;case 1:u=e.child.stateNode}try{C3(n,u)}catch(c){p0(e,e.return,c)}}break;case 27:u===null&&i&4&&b6(e);case 26:case 5:A2(n,e),u===null&&i&4&&p6(e),i&512&&Mu(e,e.return);break;case 12:A2(n,e);break;case 31:A2(n,e),i&4&&I6(n,e);break;case 13:A2(n,e),i&4&&O6(n,e),i&64&&(n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(e=ns.bind(null,e),ys(n,e))));break;case 22:if(i=e.memoizedState!==null||D2,!i){u=u!==null&&u.memoizedState!==null||en,a=D2;var s=en;D2=i,(en=u)&&!s?y2(n,e,(e.subtreeFlags&8772)!==0):A2(n,e),D2=a,en=s}break;case 30:break;default:A2(n,e)}}function T6(n){var u=n.alternate;u!==null&&(n.alternate=null,T6(u)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(u=n.stateNode,u!==null&&Ti(u)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var L0=null,mn=!1;function x2(n,u,e){for(e=e.child;e!==null;)M6(n,u,e),e=e.sibling}function M6(n,u,e){if(bn&&typeof bn.onCommitFiberUnmount=="function")try{bn.onCommitFiberUnmount(tu,e)}catch{}switch(e.tag){case 26:en||i2(e,u),x2(n,u,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:en||i2(e,u);var i=L0,a=mn;L2(e.type)&&(L0=e.stateNode,mn=!1),x2(n,u,e),Ru(e.stateNode),L0=i,mn=a;break;case 5:en||i2(e,u);case 6:if(i=L0,a=mn,L0=null,x2(n,u,e),L0=i,mn=a,L0!==null)if(mn)try{(L0.nodeType===9?L0.body:L0.nodeName==="HTML"?L0.ownerDocument.body:L0).removeChild(e.stateNode)}catch(s){p0(e,u,s)}else try{L0.removeChild(e.stateNode)}catch(s){p0(e,u,s)}break;case 18:L0!==null&&(mn?(n=L0,S7(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.stateNode),uu(n)):S7(L0,e.stateNode));break;case 4:i=L0,a=mn,L0=e.stateNode.containerInfo,mn=!0,x2(n,u,e),L0=i,mn=a;break;case 0:case 11:case 14:case 15:w2(2,e,u),en||w2(4,e,u),x2(n,u,e);break;case 1:en||(i2(e,u),i=e.stateNode,typeof i.componentWillUnmount=="function"&&z6(e,u,i)),x2(n,u,e);break;case 21:x2(n,u,e);break;case 22:en=(i=en)||e.memoizedState!==null,x2(n,u,e),en=i;break;default:x2(n,u,e)}}function I6(n,u){if(u.memoizedState===null&&(n=u.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{uu(n)}catch(e){p0(u,u.return,e)}}}function O6(n,u){if(u.memoizedState===null&&(n=u.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{uu(n)}catch(e){p0(u,u.return,e)}}function Jl(n){switch(n.tag){case 31:case 13:case 19:var u=n.stateNode;return u===null&&(u=n.stateNode=new v6),u;case 22:return n=n.stateNode,u=n._retryCache,u===null&&(u=n._retryCache=new v6),u;default:throw Error(h(435,n.tag))}}function qe(n,u){var e=Jl(n);u.forEach(function(i){if(!e.has(i)){e.add(i);var a=us.bind(null,n,i);i.then(a,a)}})}function _n(n,u){var e=u.deletions;if(e!==null)for(var i=0;i<e.length;i++){var a=e[i],s=n,c=u,E=c;n:for(;E!==null;){switch(E.tag){case 27:if(L2(E.type)){L0=E.stateNode,mn=!1;break n}break;case 5:L0=E.stateNode,mn=!1;break n;case 3:case 4:L0=E.stateNode.containerInfo,mn=!0;break n}E=E.return}if(L0===null)throw Error(h(160));M6(s,c,a),L0=null,mn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(u.subtreeFlags&13886)for(u=u.child;u!==null;)w6(u,n),u=u.sibling}var Vn=null;function w6(n,u){var e=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:_n(u,n),jn(n),i&4&&(w2(3,n,n.return),Tu(3,n),w2(5,n,n.return));break;case 1:_n(u,n),jn(n),i&512&&(en||e===null||i2(e,e.return)),i&64&&D2&&(n=n.updateQueue,n!==null&&(i=n.callbacks,i!==null&&(e=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=e===null?i:e.concat(i))));break;case 26:var a=Vn;if(_n(u,n),jn(n),i&512&&(en||e===null||i2(e,e.return)),i&4){var s=e!==null?e.memoizedState:null;if(i=n.memoizedState,e===null)if(i===null)if(n.stateNode===null){n:{i=n.type,e=n.memoizedProps,a=a.ownerDocument||a;u:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[su]||s[rn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),Cn(s,i,e),s[rn]=n,sn(s),i=s;break n;case"link":var c=w7("link","href",a).get(i+(e.href||""));if(c){for(var E=0;E<c.length;E++)if(s=c[E],s.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&s.getAttribute("rel")===(e.rel==null?null:e.rel)&&s.getAttribute("title")===(e.title==null?null:e.title)&&s.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){c.splice(E,1);break u}}s=a.createElement(i),Cn(s,i,e),a.head.appendChild(s);break;case"meta":if(c=w7("meta","content",a).get(i+(e.content||""))){for(E=0;E<c.length;E++)if(s=c[E],s.getAttribute("content")===(e.content==null?null:""+e.content)&&s.getAttribute("name")===(e.name==null?null:e.name)&&s.getAttribute("property")===(e.property==null?null:e.property)&&s.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&s.getAttribute("charset")===(e.charSet==null?null:e.charSet)){c.splice(E,1);break u}}s=a.createElement(i),Cn(s,i,e),a.head.appendChild(s);break;default:throw Error(h(468,i))}s[rn]=n,sn(s),i=s}n.stateNode=i}else G7(a,n.type,n.stateNode);else n.stateNode=O7(a,i,n.memoizedProps);else s!==i?(s===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):s.count--,i===null?G7(a,n.type,n.stateNode):O7(a,i,n.memoizedProps)):i===null&&n.stateNode!==null&&n5(n,n.memoizedProps,e.memoizedProps)}break;case 27:_n(u,n),jn(n),i&512&&(en||e===null||i2(e,e.return)),e!==null&&i&4&&n5(n,n.memoizedProps,e.memoizedProps);break;case 5:if(_n(u,n),jn(n),i&512&&(en||e===null||i2(e,e.return)),n.flags&32){a=n.stateNode;try{_1(a,"")}catch(K){p0(n,n.return,K)}}i&4&&n.stateNode!=null&&(a=n.memoizedProps,n5(n,a,e!==null?e.memoizedProps:a)),i&1024&&(i5=!0);break;case 6:if(_n(u,n),jn(n),i&4){if(n.stateNode===null)throw Error(h(162));i=n.memoizedProps,e=n.stateNode;try{e.nodeValue=i}catch(K){p0(n,n.return,K)}}break;case 3:if(si=null,a=Vn,Vn=ai(u.containerInfo),_n(u,n),Vn=a,jn(n),i&4&&e!==null&&e.memoizedState.isDehydrated)try{uu(u.containerInfo)}catch(K){p0(n,n.return,K)}i5&&(i5=!1,G6(n));break;case 4:i=Vn,Vn=ai(n.stateNode.containerInfo),_n(u,n),jn(n),Vn=i;break;case 12:_n(u,n),jn(n);break;case 31:_n(u,n),jn(n),i&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,qe(n,i)));break;case 13:_n(u,n),jn(n),n.child.flags&8192&&n.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(ke=Yn()),i&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,qe(n,i)));break;case 22:a=n.memoizedState!==null;var d=e!==null&&e.memoizedState!==null,b=D2,T=en;if(D2=b||a,en=T||d,_n(u,n),en=T,D2=b,jn(n),i&8192)n:for(u=n.stateNode,u._visibility=a?u._visibility&-2:u._visibility|1,a&&(e===null||d||D2||en||f1(n)),e=null,u=n;;){if(u.tag===5||u.tag===26){if(e===null){d=e=u;try{if(s=d.stateNode,a)c=s.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{E=d.stateNode;var G=d.memoizedProps.style,v=G!=null&&G.hasOwnProperty("display")?G.display:null;E.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(K){p0(d,d.return,K)}}}else if(u.tag===6){if(e===null){d=u;try{d.stateNode.nodeValue=a?"":d.memoizedProps}catch(K){p0(d,d.return,K)}}}else if(u.tag===18){if(e===null){d=u;try{var N=d.stateNode;a?z7(N,!0):z7(d.stateNode,!1)}catch(K){p0(d,d.return,K)}}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===n)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break n;for(;u.sibling===null;){if(u.return===null||u.return===n)break n;e===u&&(e=null),u=u.return}e===u&&(e=null),u.sibling.return=u.return,u=u.sibling}i&4&&(i=n.updateQueue,i!==null&&(e=i.retryQueue,e!==null&&(i.retryQueue=null,qe(n,e))));break;case 19:_n(u,n),jn(n),i&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,qe(n,i)));break;case 30:break;case 21:break;default:_n(u,n),jn(n)}}function jn(n){var u=n.flags;if(u&2){try{for(var e,i=n.return;i!==null;){if(Y6(i)){e=i;break}i=i.return}if(e==null)throw Error(h(160));switch(e.tag){case 27:var a=e.stateNode,s=u5(n);Le(n,s,a);break;case 5:var c=e.stateNode;e.flags&32&&(_1(c,""),e.flags&=-33);var E=u5(n);Le(n,E,c);break;case 3:case 4:var d=e.stateNode.containerInfo,b=u5(n);e5(n,b,d);break;default:throw Error(h(161))}}catch(T){p0(n,n.return,T)}n.flags&=-3}u&4096&&(n.flags&=-4097)}function G6(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var u=n;G6(u),u.tag===5&&u.flags&1024&&u.stateNode.reset(),n=n.sibling}}function A2(n,u){if(u.subtreeFlags&8772)for(u=u.child;u!==null;)N6(n,u.alternate,u),u=u.sibling}function f1(n){for(n=n.child;n!==null;){var u=n;switch(u.tag){case 0:case 11:case 14:case 15:w2(4,u,u.return),f1(u);break;case 1:i2(u,u.return);var e=u.stateNode;typeof e.componentWillUnmount=="function"&&z6(u,u.return,e),f1(u);break;case 27:Ru(u.stateNode);case 26:case 5:i2(u,u.return),f1(u);break;case 22:u.memoizedState===null&&f1(u);break;case 30:f1(u);break;default:f1(u)}n=n.sibling}}function y2(n,u,e){for(e=e&&(u.subtreeFlags&8772)!==0,u=u.child;u!==null;){var i=u.alternate,a=n,s=u,c=s.flags;switch(s.tag){case 0:case 11:case 15:y2(a,s,e),Tu(4,s);break;case 1:if(y2(a,s,e),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(b){p0(i,i.return,b)}if(i=s,a=i.updateQueue,a!==null){var E=i.stateNode;try{var d=a.shared.hiddenCallbacks;if(d!==null)for(a.shared.hiddenCallbacks=null,a=0;a<d.length;a++)F3(d[a],E)}catch(b){p0(i,i.return,b)}}e&&c&64&&S6(s),Mu(s,s.return);break;case 27:b6(s);case 26:case 5:y2(a,s,e),e&&i===null&&c&4&&p6(s),Mu(s,s.return);break;case 12:y2(a,s,e);break;case 31:y2(a,s,e),e&&c&4&&I6(a,s);break;case 13:y2(a,s,e),e&&c&4&&O6(a,s);break;case 22:s.memoizedState===null&&y2(a,s,e),Mu(s,s.return);break;case 30:break;default:y2(a,s,e)}u=u.sibling}}function t5(n,u){var e=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),n=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(n=u.memoizedState.cachePool.pool),n!==e&&(n!=null&&n.refCount++,e!=null&&yu(e))}function a5(n,u){n=null,u.alternate!==null&&(n=u.alternate.memoizedState.cache),u=u.memoizedState.cache,u!==n&&(u.refCount++,n!=null&&yu(n))}function Wn(n,u,e,i){if(u.subtreeFlags&10256)for(u=u.child;u!==null;)H6(n,u,e,i),u=u.sibling}function H6(n,u,e,i){var a=u.flags;switch(u.tag){case 0:case 11:case 15:Wn(n,u,e,i),a&2048&&Tu(9,u);break;case 1:Wn(n,u,e,i);break;case 3:Wn(n,u,e,i),a&2048&&(n=null,u.alternate!==null&&(n=u.alternate.memoizedState.cache),u=u.memoizedState.cache,u!==n&&(u.refCount++,n!=null&&yu(n)));break;case 12:if(a&2048){Wn(n,u,e,i),n=u.stateNode;try{var s=u.memoizedProps,c=s.id,E=s.onPostCommit;typeof E=="function"&&E(c,u.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(d){p0(u,u.return,d)}}else Wn(n,u,e,i);break;case 31:Wn(n,u,e,i);break;case 13:Wn(n,u,e,i);break;case 23:break;case 22:s=u.stateNode,c=u.alternate,u.memoizedState!==null?s._visibility&2?Wn(n,u,e,i):Iu(n,u):s._visibility&2?Wn(n,u,e,i):(s._visibility|=2,L1(n,u,e,i,(u.subtreeFlags&10256)!==0||!1)),a&2048&&t5(c,u);break;case 24:Wn(n,u,e,i),a&2048&&a5(u.alternate,u);break;default:Wn(n,u,e,i)}}function L1(n,u,e,i,a){for(a=a&&((u.subtreeFlags&10256)!==0||!1),u=u.child;u!==null;){var s=n,c=u,E=e,d=i,b=c.flags;switch(c.tag){case 0:case 11:case 15:L1(s,c,E,d,a),Tu(8,c);break;case 23:break;case 22:var T=c.stateNode;c.memoizedState!==null?T._visibility&2?L1(s,c,E,d,a):Iu(s,c):(T._visibility|=2,L1(s,c,E,d,a)),a&&b&2048&&t5(c.alternate,c);break;case 24:L1(s,c,E,d,a),a&&b&2048&&a5(c.alternate,c);break;default:L1(s,c,E,d,a)}u=u.sibling}}function Iu(n,u){if(u.subtreeFlags&10256)for(u=u.child;u!==null;){var e=n,i=u,a=i.flags;switch(i.tag){case 22:Iu(e,i),a&2048&&t5(i.alternate,i);break;case 24:Iu(e,i),a&2048&&a5(i.alternate,i);break;default:Iu(e,i)}u=u.sibling}}var Ou=8192;function q1(n,u,e){if(n.subtreeFlags&Ou)for(n=n.child;n!==null;)Z6(n,u,e),n=n.sibling}function Z6(n,u,e){switch(n.tag){case 26:q1(n,u,e),n.flags&Ou&&n.memoizedState!==null&&Ns(e,Vn,n.memoizedState,n.memoizedProps);break;case 5:q1(n,u,e);break;case 3:case 4:var i=Vn;Vn=ai(n.stateNode.containerInfo),q1(n,u,e),Vn=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=Ou,Ou=16777216,q1(n,u,e),Ou=i):q1(n,u,e));break;default:q1(n,u,e)}}function U6(n){var u=n.alternate;if(u!==null&&(n=u.child,n!==null)){u.child=null;do u=n.sibling,n.sibling=null,n=u;while(n!==null)}}function wu(n){var u=n.deletions;if((n.flags&16)!==0){if(u!==null)for(var e=0;e<u.length;e++){var i=u[e];on=i,R6(i,n)}U6(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)X6(n),n=n.sibling}function X6(n){switch(n.tag){case 0:case 11:case 15:wu(n),n.flags&2048&&w2(9,n,n.return);break;case 3:wu(n);break;case 12:wu(n);break;case 22:var u=n.stateNode;n.memoizedState!==null&&u._visibility&2&&(n.return===null||n.return.tag!==13)?(u._visibility&=-3,Je(n)):wu(n);break;default:wu(n)}}function Je(n){var u=n.deletions;if((n.flags&16)!==0){if(u!==null)for(var e=0;e<u.length;e++){var i=u[e];on=i,R6(i,n)}U6(n)}for(n=n.child;n!==null;){switch(u=n,u.tag){case 0:case 11:case 15:w2(8,u,u.return),Je(u);break;case 22:e=u.stateNode,e._visibility&2&&(e._visibility&=-3,Je(u));break;default:Je(u)}n=n.sibling}}function R6(n,u){for(;on!==null;){var e=on;switch(e.tag){case 0:case 11:case 15:w2(8,e,u);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var i=e.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:yu(e.memoizedState.cache)}if(i=e.child,i!==null)i.return=e,on=i;else n:for(e=n;on!==null;){i=on;var a=i.sibling,s=i.return;if(T6(i),i===e){on=null;break n}if(a!==null){a.return=s,on=a;break n}on=s}}}var kl={getCacheForType:function(n){var u=fn($0),e=u.data.get(n);return e===void 0&&(e=n(),u.data.set(n,e)),e},cacheSignal:function(){return fn($0).controller.signal}},Ql=typeof WeakMap=="function"?WeakMap:Map,j0=0,I0=null,f0=null,D0=0,z0=0,On=null,G2=!1,J1=!1,l5=!1,d2=0,P0=0,H2=0,F1=0,s5=0,wn=0,k1=0,Gu=null,Sn=null,o5=!1,ke=0,L6=0,Qe=1/0,Ke=null,Z2=null,an=0,U2=null,Q1=null,B2=0,h5=0,g5=null,q6=null,Hu=0,c5=null;function Gn(){return(j0&2)!==0&&D0!==0?D0&-D0:p.T!==null?D5():sa()}function J6(){if(wn===0)if((D0&536870912)===0||A0){var n=ie;ie<<=1,(ie&3932160)===0&&(ie=262144),wn=n}else wn=536870912;return n=Mn.current,n!==null&&(n.flags|=32),wn}function zn(n,u,e){(n===I0&&(z0===2||z0===9)||n.cancelPendingCommit!==null)&&(K1(n,0),X2(n,D0,wn,!1)),lu(n,e),((j0&2)===0||n!==I0)&&(n===I0&&((j0&2)===0&&(F1|=e),P0===4&&X2(n,D0,wn,!1)),t2(n))}function k6(n,u,e){if((j0&6)!==0)throw Error(h(327));var i=!e&&(u&127)===0&&(u&n.expiredLanes)===0||au(n,u),a=i?Vl(n,u):E5(n,u,!0),s=i;do{if(a===0){J1&&!i&&X2(n,u,0,!1);break}else{if(e=n.current.alternate,s&&!Kl(e)){a=E5(n,u,!1),s=!1;continue}if(a===2){if(s=u,n.errorRecoveryDisabledLanes&s)var c=0;else c=n.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){u=c;n:{var E=n;a=Gu;var d=E.current.memoizedState.isDehydrated;if(d&&(K1(E,c).flags|=256),c=E5(E,c,!1),c!==2){if(l5&&!d){E.errorRecoveryDisabledLanes|=s,F1|=s,a=4;break n}s=Sn,Sn=a,s!==null&&(Sn===null?Sn=s:Sn.push.apply(Sn,s))}a=c}if(s=!1,a!==2)continue}}if(a===1){K1(n,0),X2(n,u,0,!0);break}n:{switch(i=n,s=a,s){case 0:case 1:throw Error(h(345));case 4:if((u&4194048)!==u)break;case 6:X2(i,u,wn,!G2);break n;case 2:Sn=null;break;case 3:case 5:break;default:throw Error(h(329))}if((u&62914560)===u&&(a=ke+300-Yn(),10<a)){if(X2(i,u,wn,!G2),ae(i,0,!0)!==0)break n;B2=u,i.timeoutHandle=_7(Q6.bind(null,i,e,Sn,Ke,o5,u,wn,F1,k1,G2,s,"Throttled",-0,0),a);break n}Q6(i,e,Sn,Ke,o5,u,wn,F1,k1,G2,s,null,-0,0)}}break}while(!0);t2(n)}function Q6(n,u,e,i,a,s,c,E,d,b,T,G,v,N){if(n.timeoutHandle=-1,G=u.subtreeFlags,G&8192||(G&16785408)===16785408){G={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:s2},Z6(u,s,G);var K=(s&62914560)===s?ke-Yn():(s&4194048)===s?L6-Yn():0;if(K=Ts(G,K),K!==null){B2=s,n.cancelPendingCommit=K(e7.bind(null,n,u,s,e,i,a,c,E,d,T,G,null,v,N)),X2(n,s,c,!b);return}}e7(n,u,s,e,i,a,c,E,d)}function Kl(n){for(var u=n;;){var e=u.tag;if((e===0||e===11||e===15)&&u.flags&16384&&(e=u.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var i=0;i<e.length;i++){var a=e[i],s=a.getSnapshot;a=a.value;try{if(!Nn(s(),a))return!1}catch{return!1}}if(e=u.child,u.subtreeFlags&16384&&e!==null)e.return=u,u=e;else{if(u===n)break;for(;u.sibling===null;){if(u.return===null||u.return===n)return!0;u=u.return}u.sibling.return=u.return,u=u.sibling}}return!0}function X2(n,u,e,i){u&=~s5,u&=~F1,n.suspendedLanes|=u,n.pingedLanes&=~u,i&&(n.warmLanes|=u),i=n.expirationTimes;for(var a=u;0<a;){var s=31-vn(a),c=1<<s;i[s]=-1,a&=~c}e!==0&&ta(n,e,u)}function Pe(){return(j0&6)===0?(Zu(0),!1):!0}function r5(){if(f0!==null){if(z0===0)var n=f0.return;else n=f0,c2=l1=null,pt(n),H1=null,Bu=0,n=f0;for(;n!==null;)j6(n.alternate,n),n=n.return;f0=null}}function K1(n,u){var e=n.timeoutHandle;e!==-1&&(n.timeoutHandle=-1,Fs(e)),e=n.cancelPendingCommit,e!==null&&(n.cancelPendingCommit=null,e()),B2=0,r5(),I0=n,f0=e=h2(n.current,null),D0=u,z0=0,On=null,G2=!1,J1=au(n,u),l5=!1,k1=wn=s5=F1=H2=P0=0,Sn=Gu=null,o5=!1,(u&8)!==0&&(u|=u&32);var i=n.entangledLanes;if(i!==0)for(n=n.entanglements,i&=u;0<i;){var a=31-vn(i),s=1<<a;u|=n[a],i&=~s}return d2=u,De(),e}function K6(n,u){h0=null,p.H=bu,u===G1||u===je?(u=c3(),z0=3):u===Ct?(u=c3(),z0=4):z0=u===Lt?8:u!==null&&typeof u=="object"&&typeof u.then=="function"?6:1,On=u,f0===null&&(P0=1,He(n,Rn(u,n.current)))}function P6(){var n=Mn.current;return n===null?!0:(D0&4194048)===D0?kn===null:(D0&62914560)===D0||(D0&536870912)!==0?n===kn:!1}function V6(){var n=p.H;return p.H=bu,n===null?bu:n}function W6(){var n=p.A;return p.A=kl,n}function Ve(){P0=4,G2||(D0&4194048)!==D0&&Mn.current!==null||(J1=!0),(H2&134217727)===0&&(F1&134217727)===0||I0===null||X2(I0,D0,wn,!1)}function E5(n,u,e){var i=j0;j0|=2;var a=V6(),s=W6();(I0!==n||D0!==u)&&(Ke=null,K1(n,u)),u=!1;var c=P0;n:do try{if(z0!==0&&f0!==null){var E=f0,d=On;switch(z0){case 8:r5(),c=6;break n;case 3:case 2:case 9:case 6:Mn.current===null&&(u=!0);var b=z0;if(z0=0,On=null,P1(n,E,d,b),e&&J1){c=0;break n}break;default:b=z0,z0=0,On=null,P1(n,E,d,b)}}Pl(),c=P0;break}catch(T){K6(n,T)}while(!0);return u&&n.shellSuspendCounter++,c2=l1=null,j0=i,p.H=a,p.A=s,f0===null&&(I0=null,D0=0,De()),c}function Pl(){for(;f0!==null;)$6(f0)}function Vl(n,u){var e=j0;j0|=2;var i=V6(),a=W6();I0!==n||D0!==u?(Ke=null,Qe=Yn()+500,K1(n,u)):J1=au(n,u);n:do try{if(z0!==0&&f0!==null){u=f0;var s=On;u:switch(z0){case 1:z0=0,On=null,P1(n,u,s,1);break;case 2:case 9:if(h3(s)){z0=0,On=null,n7(u);break}u=function(){z0!==2&&z0!==9||I0!==n||(z0=7),t2(n)},s.then(u,u);break n;case 3:z0=7;break n;case 4:z0=5;break n;case 7:h3(s)?(z0=0,On=null,n7(u)):(z0=0,On=null,P1(n,u,s,7));break;case 5:var c=null;switch(f0.tag){case 26:c=f0.memoizedState;case 5:case 27:var E=f0;if(c?H7(c):E.stateNode.complete){z0=0,On=null;var d=E.sibling;if(d!==null)f0=d;else{var b=E.return;b!==null?(f0=b,We(b)):f0=null}break u}}z0=0,On=null,P1(n,u,s,5);break;case 6:z0=0,On=null,P1(n,u,s,6);break;case 8:r5(),P0=6;break n;default:throw Error(h(462))}}Wl();break}catch(T){K6(n,T)}while(!0);return c2=l1=null,p.H=i,p.A=a,j0=e,f0!==null?0:(I0=null,D0=0,De(),P0)}function Wl(){for(;f0!==null&&!d4();)$6(f0)}function $6(n){var u=m6(n.alternate,n,d2);n.memoizedProps=n.pendingProps,u===null?We(n):f0=u}function n7(n){var u=n,e=u.alternate;switch(u.tag){case 15:case 0:u=D6(e,u,u.pendingProps,u.type,void 0,D0);break;case 11:u=D6(e,u,u.pendingProps,u.type.render,u.ref,D0);break;case 5:pt(u);default:j6(e,u),u=f0=Wa(u,d2),u=m6(e,u,d2)}n.memoizedProps=n.pendingProps,u===null?We(n):f0=u}function P1(n,u,e,i){c2=l1=null,pt(u),H1=null,Bu=0;var a=u.return;try{if(Zl(n,a,u,e,D0)){P0=1,He(n,Rn(e,n.current)),f0=null;return}}catch(s){if(a!==null)throw f0=a,s;P0=1,He(n,Rn(e,n.current)),f0=null;return}u.flags&32768?(A0||i===1?n=!0:J1||(D0&536870912)!==0?n=!1:(G2=n=!0,(i===2||i===9||i===3||i===6)&&(i=Mn.current,i!==null&&i.tag===13&&(i.flags|=16384))),u7(u,n)):We(u)}function We(n){var u=n;do{if((u.flags&32768)!==0){u7(u,G2);return}n=u.return;var e=Rl(u.alternate,u,d2);if(e!==null){f0=e;return}if(u=u.sibling,u!==null){f0=u;return}f0=u=n}while(u!==null);P0===0&&(P0=5)}function u7(n,u){do{var e=Ll(n.alternate,n);if(e!==null){e.flags&=32767,f0=e;return}if(e=n.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!u&&(n=n.sibling,n!==null)){f0=n;return}f0=n=e}while(n!==null);P0=6,f0=null}function e7(n,u,e,i,a,s,c,E,d){n.cancelPendingCommit=null;do $e();while(an!==0);if((j0&6)!==0)throw Error(h(327));if(u!==null){if(u===n.current)throw Error(h(177));if(s=u.lanes|u.childLanes,s|=ut,v4(n,e,s,c,E,d),n===I0&&(f0=I0=null,D0=0),Q1=u,U2=n,B2=e,h5=s,g5=a,q6=i,(u.subtreeFlags&10256)!==0||(u.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,es(ue,function(){return s7(),null})):(n.callbackNode=null,n.callbackPriority=0),i=(u.flags&13878)!==0,(u.subtreeFlags&13878)!==0||i){i=p.T,p.T=null,a=U.p,U.p=2,c=j0,j0|=4;try{ql(n,u,e)}finally{j0=c,U.p=a,p.T=i}}an=1,i7(),t7(),a7()}}function i7(){if(an===1){an=0;var n=U2,u=Q1,e=(u.flags&13878)!==0;if((u.subtreeFlags&13878)!==0||e){e=p.T,p.T=null;var i=U.p;U.p=2;var a=j0;j0|=4;try{w6(u,n);var s=j5,c=Ra(n.containerInfo),E=s.focusedElem,d=s.selectionRange;if(c!==E&&E&&E.ownerDocument&&Xa(E.ownerDocument.documentElement,E)){if(d!==null&&Pi(E)){var b=d.start,T=d.end;if(T===void 0&&(T=b),"selectionStart"in E)E.selectionStart=b,E.selectionEnd=Math.min(T,E.value.length);else{var G=E.ownerDocument||document,v=G&&G.defaultView||window;if(v.getSelection){var N=v.getSelection(),K=E.textContent.length,e0=Math.min(d.start,K),N0=d.end===void 0?e0:Math.min(d.end,K);!N.extend&&e0>N0&&(c=N0,N0=e0,e0=c);var j=Ua(E,e0),m=Ua(E,N0);if(j&&m&&(N.rangeCount!==1||N.anchorNode!==j.node||N.anchorOffset!==j.offset||N.focusNode!==m.node||N.focusOffset!==m.offset)){var Y=G.createRange();Y.setStart(j.node,j.offset),N.removeAllRanges(),e0>N0?(N.addRange(Y),N.extend(m.node,m.offset)):(Y.setEnd(m.node,m.offset),N.addRange(Y))}}}}for(G=[],N=E;N=N.parentNode;)N.nodeType===1&&G.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<G.length;E++){var w=G[E];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}ci=!!_5,j5=_5=null}finally{j0=a,U.p=i,p.T=e}}n.current=u,an=2}}function t7(){if(an===2){an=0;var n=U2,u=Q1,e=(u.flags&8772)!==0;if((u.subtreeFlags&8772)!==0||e){e=p.T,p.T=null;var i=U.p;U.p=2;var a=j0;j0|=4;try{N6(n,u.alternate,u)}finally{j0=a,U.p=i,p.T=e}}an=3}}function a7(){if(an===4||an===3){an=0,B4();var n=U2,u=Q1,e=B2,i=q6;(u.subtreeFlags&10256)!==0||(u.flags&10256)!==0?an=5:(an=0,Q1=U2=null,l7(n,n.pendingLanes));var a=n.pendingLanes;if(a===0&&(Z2=null),vi(e),u=u.stateNode,bn&&typeof bn.onCommitFiberRoot=="function")try{bn.onCommitFiberRoot(tu,u,void 0,(u.current.flags&128)===128)}catch{}if(i!==null){u=p.T,a=U.p,U.p=2,p.T=null;try{for(var s=n.onRecoverableError,c=0;c<i.length;c++){var E=i[c];s(E.value,{componentStack:E.stack})}}finally{p.T=u,U.p=a}}(B2&3)!==0&&$e(),t2(n),a=n.pendingLanes,(e&261930)!==0&&(a&42)!==0?n===c5?Hu++:(Hu=0,c5=n):Hu=0,Zu(0)}}function l7(n,u){(n.pooledCacheLanes&=u)===0&&(u=n.pooledCache,u!=null&&(n.pooledCache=null,yu(u)))}function $e(){return i7(),t7(),a7(),s7()}function s7(){if(an!==5)return!1;var n=U2,u=h5;h5=0;var e=vi(B2),i=p.T,a=U.p;try{U.p=32>e?32:e,p.T=null,e=g5,g5=null;var s=U2,c=B2;if(an=0,Q1=U2=null,B2=0,(j0&6)!==0)throw Error(h(331));var E=j0;if(j0|=4,X6(s.current),H6(s,s.current,c,e),j0=E,Zu(0,!1),bn&&typeof bn.onPostCommitFiberRoot=="function")try{bn.onPostCommitFiberRoot(tu,s)}catch{}return!0}finally{U.p=a,p.T=i,l7(n,u)}}function o7(n,u,e){u=Rn(e,u),u=Rt(n.stateNode,u,2),n=M2(n,u,2),n!==null&&(lu(n,2),t2(n))}function p0(n,u,e){if(n.tag===3)o7(n,n,e);else for(;u!==null;){if(u.tag===3){o7(u,n,e);break}else if(u.tag===1){var i=u.stateNode;if(typeof u.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Z2===null||!Z2.has(i))){n=Rn(e,n),e=h6(2),i=M2(u,e,2),i!==null&&(g6(e,i,u,n),lu(i,2),t2(i));break}}u=u.return}}function f5(n,u,e){var i=n.pingCache;if(i===null){i=n.pingCache=new Ql;var a=new Set;i.set(u,a)}else a=i.get(u),a===void 0&&(a=new Set,i.set(u,a));a.has(e)||(l5=!0,a.add(e),n=$l.bind(null,n,u,e),u.then(n,n))}function $l(n,u,e){var i=n.pingCache;i!==null&&i.delete(u),n.pingedLanes|=n.suspendedLanes&e,n.warmLanes&=~e,I0===n&&(D0&e)===e&&(P0===4||P0===3&&(D0&62914560)===D0&&300>Yn()-ke?(j0&2)===0&&K1(n,0):s5|=e,k1===D0&&(k1=0)),t2(n)}function h7(n,u){u===0&&(u=ia()),n=i1(n,u),n!==null&&(lu(n,u),t2(n))}function ns(n){var u=n.memoizedState,e=0;u!==null&&(e=u.retryLane),h7(n,e)}function us(n,u){var e=0;switch(n.tag){case 31:case 13:var i=n.stateNode,a=n.memoizedState;a!==null&&(e=a.retryLane);break;case 19:i=n.stateNode;break;case 22:i=n.stateNode._retryCache;break;default:throw Error(h(314))}i!==null&&i.delete(u),h7(n,e)}function es(n,u){return zi(n,u)}var ni=null,V1=null,F5=!1,ui=!1,C5=!1,R2=0;function t2(n){n!==V1&&n.next===null&&(V1===null?ni=V1=n:V1=V1.next=n),ui=!0,F5||(F5=!0,ts())}function Zu(n,u){if(!C5&&ui){C5=!0;do for(var e=!1,i=ni;i!==null;){if(n!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var c=i.suspendedLanes,E=i.pingedLanes;s=(1<<31-vn(42|n)+1)-1,s&=a&~(c&~E),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(e=!0,E7(i,s))}else s=D0,s=ae(i,i===I0?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||au(i,s)||(e=!0,E7(i,s));i=i.next}while(e);C5=!1}}function is(){g7()}function g7(){ui=F5=!1;var n=0;R2!==0&&fs()&&(n=R2);for(var u=Yn(),e=null,i=ni;i!==null;){var a=i.next,s=c7(i,u);s===0?(i.next=null,e===null?ni=a:e.next=a,a===null&&(V1=e)):(e=i,(n!==0||(s&3)!==0)&&(ui=!0)),i=a}an!==0&&an!==5||Zu(n),R2!==0&&(R2=0)}function c7(n,u){for(var e=n.suspendedLanes,i=n.pingedLanes,a=n.expirationTimes,s=n.pendingLanes&-62914561;0<s;){var c=31-vn(s),E=1<<c,d=a[c];d===-1?((E&e)===0||(E&i)!==0)&&(a[c]=b4(E,u)):d<=u&&(n.expiredLanes|=E),s&=~E}if(u=I0,e=D0,e=ae(n,n===u?e:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),i=n.callbackNode,e===0||n===u&&(z0===2||z0===9)||n.cancelPendingCommit!==null)return i!==null&&i!==null&&pi(i),n.callbackNode=null,n.callbackPriority=0;if((e&3)===0||au(n,e)){if(u=e&-e,u===n.callbackPriority)return u;switch(i!==null&&pi(i),vi(e)){case 2:case 8:e=ua;break;case 32:e=ue;break;case 268435456:e=ea;break;default:e=ue}return i=r7.bind(null,n),e=zi(e,i),n.callbackPriority=u,n.callbackNode=e,u}return i!==null&&i!==null&&pi(i),n.callbackPriority=2,n.callbackNode=null,2}function r7(n,u){if(an!==0&&an!==5)return n.callbackNode=null,n.callbackPriority=0,null;var e=n.callbackNode;if($e()&&n.callbackNode!==e)return null;var i=D0;return i=ae(n,n===I0?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),i===0?null:(k6(n,i,u),c7(n,Yn()),n.callbackNode!=null&&n.callbackNode===e?r7.bind(null,n):null)}function E7(n,u){if($e())return null;k6(n,u,!0)}function ts(){Cs(function(){(j0&6)!==0?zi(na,is):g7()})}function D5(){if(R2===0){var n=O1;n===0&&(n=ee,ee<<=1,(ee&261888)===0&&(ee=256)),R2=n}return R2}function f7(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:he(""+n)}function F7(n,u){var e=u.ownerDocument.createElement("input");return e.name=u.name,e.value=u.value,n.id&&e.setAttribute("form",n.id),u.parentNode.insertBefore(e,u),n=new FormData(n),e.parentNode.removeChild(e),n}function as(n,u,e,i,a){if(u==="submit"&&e&&e.stateNode===a){var s=f7((a[dn]||null).action),c=i.submitter;c&&(u=(u=c[dn]||null)?f7(u.formAction):c.getAttribute("formAction"),u!==null&&(s=u,c=null));var E=new Ee("action","action",null,i,a);n.push({event:E,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(R2!==0){var d=c?F7(a,c):new FormData(a);wt(e,{pending:!0,data:d,method:a.method,action:s},null,d)}}else typeof s=="function"&&(E.preventDefault(),d=c?F7(a,c):new FormData(a),wt(e,{pending:!0,data:d,method:a.method,action:s},s,d))},currentTarget:a}]})}}for(var x5=0;x5<nt.length;x5++){var A5=nt[x5],ls=A5.toLowerCase(),ss=A5[0].toUpperCase()+A5.slice(1);Pn(ls,"on"+ss)}Pn(Ja,"onAnimationEnd"),Pn(ka,"onAnimationIteration"),Pn(Qa,"onAnimationStart"),Pn("dblclick","onDoubleClick"),Pn("focusin","onFocus"),Pn("focusout","onBlur"),Pn(ml,"onTransitionRun"),Pn(_l,"onTransitionStart"),Pn(jl,"onTransitionCancel"),Pn(Ka,"onTransitionEnd"),B1("onMouseEnter",["mouseout","mouseover"]),B1("onMouseLeave",["mouseout","mouseover"]),B1("onPointerEnter",["pointerout","pointerover"]),B1("onPointerLeave",["pointerout","pointerover"]),$2("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$2("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$2("onBeforeInput",["compositionend","keypress","textInput","paste"]),$2("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$2("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$2("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),os=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uu));function C7(n,u){u=(u&4)!==0;for(var e=0;e<n.length;e++){var i=n[e],a=i.event;i=i.listeners;n:{var s=void 0;if(u)for(var c=i.length-1;0<=c;c--){var E=i[c],d=E.instance,b=E.currentTarget;if(E=E.listener,d!==s&&a.isPropagationStopped())break n;s=E,a.currentTarget=b;try{s(a)}catch(T){Ce(T)}a.currentTarget=null,s=d}else for(c=0;c<i.length;c++){if(E=i[c],d=E.instance,b=E.currentTarget,E=E.listener,d!==s&&a.isPropagationStopped())break n;s=E,a.currentTarget=b;try{s(a)}catch(T){Ce(T)}a.currentTarget=null,s=d}}}}function F0(n,u){var e=u[Ni];e===void 0&&(e=u[Ni]=new Set);var i=n+"__bubble";e.has(i)||(D7(u,n,2,!1),e.add(i))}function y5(n,u,e){var i=0;u&&(i|=4),D7(e,n,i,u)}var ei="_reactListening"+Math.random().toString(36).slice(2);function d5(n){if(!n[ei]){n[ei]=!0,ga.forEach(function(e){e!=="selectionchange"&&(os.has(e)||y5(e,!1,n),y5(e,!0,n))});var u=n.nodeType===9?n:n.ownerDocument;u===null||u[ei]||(u[ei]=!0,y5("selectionchange",!1,u))}}function D7(n,u,e,i){switch(J7(u)){case 2:var a=Os;break;case 8:a=ws;break;default:a=O5}e=a.bind(null,u,e,n),a=void 0,!Ui||u!=="touchstart"&&u!=="touchmove"&&u!=="wheel"||(a=!0),i?a!==void 0?n.addEventListener(u,e,{capture:!0,passive:a}):n.addEventListener(u,e,!0):a!==void 0?n.addEventListener(u,e,{passive:a}):n.addEventListener(u,e,!1)}function B5(n,u,e,i,a){var s=i;if((u&1)===0&&(u&2)===0&&i!==null)n:for(;;){if(i===null)return;var c=i.tag;if(c===3||c===4){var E=i.stateNode.containerInfo;if(E===a)break;if(c===4)for(c=i.return;c!==null;){var d=c.tag;if((d===3||d===4)&&c.stateNode.containerInfo===a)return;c=c.return}for(;E!==null;){if(c=A1(E),c===null)return;if(d=c.tag,d===5||d===6||d===26||d===27){i=s=c;continue n}E=E.parentNode}}i=i.return}Ba(function(){var b=s,T=Hi(e),G=[];n:{var v=Pa.get(n);if(v!==void 0){var N=Ee,K=n;switch(n){case"keypress":if(ce(e)===0)break n;case"keydown":case"keyup":N=ul;break;case"focusin":K="focus",N=qi;break;case"focusout":K="blur",N=qi;break;case"beforeblur":case"afterblur":N=qi;break;case"click":if(e.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=ja;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=R4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=tl;break;case Ja:case ka:case Qa:N=J4;break;case Ka:N=ll;break;case"scroll":case"scrollend":N=U4;break;case"wheel":N=ol;break;case"copy":case"cut":case"paste":N=Q4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=za;break;case"toggle":case"beforetoggle":N=gl}var e0=(u&4)!==0,N0=!e0&&(n==="scroll"||n==="scrollend"),j=e0?v!==null?v+"Capture":null:v;e0=[];for(var m=b,Y;m!==null;){var w=m;if(Y=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||Y===null||j===null||(w=hu(m,j),w!=null&&e0.push(Xu(m,w,Y))),N0)break;m=m.return}0<e0.length&&(v=new N(v,K,null,e,T),G.push({event:v,listeners:e0}))}}if((u&7)===0){n:{if(v=n==="mouseover"||n==="pointerover",N=n==="mouseout"||n==="pointerout",v&&e!==Gi&&(K=e.relatedTarget||e.fromElement)&&(A1(K)||K[x1]))break n;if((N||v)&&(v=T.window===T?T:(v=T.ownerDocument)?v.defaultView||v.parentWindow:window,N?(K=e.relatedTarget||e.toElement,N=b,K=K?A1(K):null,K!==null&&(N0=f(K),e0=K.tag,K!==N0||e0!==5&&e0!==27&&e0!==6)&&(K=null)):(N=null,K=b),N!==K)){if(e0=ja,w="onMouseLeave",j="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(e0=za,w="onPointerLeave",j="onPointerEnter",m="pointer"),N0=N==null?v:ou(N),Y=K==null?v:ou(K),v=new e0(w,m+"leave",N,e,T),v.target=N0,v.relatedTarget=Y,w=null,A1(T)===b&&(e0=new e0(j,m+"enter",K,e,T),e0.target=Y,e0.relatedTarget=N0,w=e0),N0=w,N&&K)u:{for(e0=hs,j=N,m=K,Y=0,w=j;w;w=e0(w))Y++;w=0;for(var $=m;$;$=e0($))w++;for(;0<Y-w;)j=e0(j),Y--;for(;0<w-Y;)m=e0(m),w--;for(;Y--;){if(j===m||m!==null&&j===m.alternate){e0=j;break u}j=e0(j),m=e0(m)}e0=null}else e0=null;N!==null&&x7(G,v,N,e0,!1),K!==null&&N0!==null&&x7(G,N0,K,e0,!0)}}n:{if(v=b?ou(b):window,N=v.nodeName&&v.nodeName.toLowerCase(),N==="select"||N==="input"&&v.type==="file")var m0=Ia;else if(Ta(v))if(Oa)m0=yl;else{m0=xl;var P=Dl}else N=v.nodeName,!N||N.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?b&&wi(b.elementType)&&(m0=Ia):m0=Al;if(m0&&(m0=m0(n,b))){Ma(G,m0,e,T);break n}P&&P(n,v,b),n==="focusout"&&b&&v.type==="number"&&b.memoizedProps.value!=null&&Oi(v,"number",v.value)}switch(P=b?ou(b):window,n){case"focusin":(Ta(P)||P.contentEditable==="true")&&(p1=P,Vi=b,Du=null);break;case"focusout":Du=Vi=p1=null;break;case"mousedown":Wi=!0;break;case"contextmenu":case"mouseup":case"dragend":Wi=!1,La(G,e,T);break;case"selectionchange":if(Bl)break;case"keydown":case"keyup":La(G,e,T)}var g0;if(ki)n:{switch(n){case"compositionstart":var x0="onCompositionStart";break n;case"compositionend":x0="onCompositionEnd";break n;case"compositionupdate":x0="onCompositionUpdate";break n}x0=void 0}else z1?va(n,e)&&(x0="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&(x0="onCompositionStart");x0&&(pa&&e.locale!=="ko"&&(z1||x0!=="onCompositionStart"?x0==="onCompositionEnd"&&z1&&(g0=ma()):(z2=T,Xi="value"in z2?z2.value:z2.textContent,z1=!0)),P=ii(b,x0),0<P.length&&(x0=new Sa(x0,n,null,e,T),G.push({event:x0,listeners:P}),g0?x0.data=g0:(g0=Na(e),g0!==null&&(x0.data=g0)))),(g0=rl?El(n,e):fl(n,e))&&(x0=ii(b,"onBeforeInput"),0<x0.length&&(P=new Sa("onBeforeInput","beforeinput",null,e,T),G.push({event:P,listeners:x0}),P.data=g0)),as(G,n,b,e,T)}C7(G,u)})}function Xu(n,u,e){return{instance:n,listener:u,currentTarget:e}}function ii(n,u){for(var e=u+"Capture",i=[];n!==null;){var a=n,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=hu(n,e),a!=null&&i.unshift(Xu(n,a,s)),a=hu(n,u),a!=null&&i.push(Xu(n,a,s))),n.tag===3)return i;n=n.return}return[]}function hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function x7(n,u,e,i,a){for(var s=u._reactName,c=[];e!==null&&e!==i;){var E=e,d=E.alternate,b=E.stateNode;if(E=E.tag,d!==null&&d===i)break;E!==5&&E!==26&&E!==27||b===null||(d=b,a?(b=hu(e,s),b!=null&&c.unshift(Xu(e,b,d))):a||(b=hu(e,s),b!=null&&c.push(Xu(e,b,d)))),e=e.return}c.length!==0&&n.push({event:u,listeners:c})}var gs=/\r\n?/g,cs=/\u0000|\uFFFD/g;function A7(n){return(typeof n=="string"?n:""+n).replace(gs,`
`).replace(cs,"")}function y7(n,u){return u=A7(u),A7(n)===u}function v0(n,u,e,i,a,s){switch(e){case"children":typeof i=="string"?u==="body"||u==="textarea"&&i===""||_1(n,i):(typeof i=="number"||typeof i=="bigint")&&u!=="body"&&_1(n,""+i);break;case"className":se(n,"class",i);break;case"tabIndex":se(n,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":se(n,e,i);break;case"style":ya(n,i,s);break;case"data":if(u!=="object"){se(n,"data",i);break}case"src":case"href":if(i===""&&(u!=="a"||e!=="href")){n.removeAttribute(e);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){n.removeAttribute(e);break}i=he(""+i),n.setAttribute(e,i);break;case"action":case"formAction":if(typeof i=="function"){n.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(e==="formAction"?(u!=="input"&&v0(n,u,"name",a.name,a,null),v0(n,u,"formEncType",a.formEncType,a,null),v0(n,u,"formMethod",a.formMethod,a,null),v0(n,u,"formTarget",a.formTarget,a,null)):(v0(n,u,"encType",a.encType,a,null),v0(n,u,"method",a.method,a,null),v0(n,u,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){n.removeAttribute(e);break}i=he(""+i),n.setAttribute(e,i);break;case"onClick":i!=null&&(n.onclick=s2);break;case"onScroll":i!=null&&F0("scroll",n);break;case"onScrollEnd":i!=null&&F0("scrollend",n);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(h(61));if(e=i.__html,e!=null){if(a.children!=null)throw Error(h(60));n.innerHTML=e}}break;case"multiple":n.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":n.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){n.removeAttribute("xlink:href");break}e=he(""+i),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(e,""+i):n.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(e,""):n.removeAttribute(e);break;case"capture":case"download":i===!0?n.setAttribute(e,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(e,i):n.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?n.setAttribute(e,i):n.removeAttribute(e);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?n.removeAttribute(e):n.setAttribute(e,i);break;case"popover":F0("beforetoggle",n),F0("toggle",n),le(n,"popover",i);break;case"xlinkActuate":l2(n,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":l2(n,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":l2(n,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":l2(n,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":l2(n,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":l2(n,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":l2(n,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":l2(n,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":l2(n,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":le(n,"is",i);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=H4.get(e)||e,le(n,e,i))}}function m5(n,u,e,i,a,s){switch(e){case"style":ya(n,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(h(61));if(e=i.__html,e!=null){if(a.children!=null)throw Error(h(60));n.innerHTML=e}}break;case"children":typeof i=="string"?_1(n,i):(typeof i=="number"||typeof i=="bigint")&&_1(n,""+i);break;case"onScroll":i!=null&&F0("scroll",n);break;case"onScrollEnd":i!=null&&F0("scrollend",n);break;case"onClick":i!=null&&(n.onclick=s2);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ca.hasOwnProperty(e))n:{if(e[0]==="o"&&e[1]==="n"&&(a=e.endsWith("Capture"),u=e.slice(2,a?e.length-7:void 0),s=n[dn]||null,s=s!=null?s[e]:null,typeof s=="function"&&n.removeEventListener(u,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(e in n?n[e]=null:n.hasAttribute(e)&&n.removeAttribute(e)),n.addEventListener(u,i,a);break n}e in n?n[e]=i:i===!0?n.setAttribute(e,""):le(n,e,i)}}}function Cn(n,u,e){switch(u){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":F0("error",n),F0("load",n);var i=!1,a=!1,s;for(s in e)if(e.hasOwnProperty(s)){var c=e[s];if(c!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,u));default:v0(n,u,s,c,e,null)}}a&&v0(n,u,"srcSet",e.srcSet,e,null),i&&v0(n,u,"src",e.src,e,null);return;case"input":F0("invalid",n);var E=s=c=a=null,d=null,b=null;for(i in e)if(e.hasOwnProperty(i)){var T=e[i];if(T!=null)switch(i){case"name":a=T;break;case"type":c=T;break;case"checked":d=T;break;case"defaultChecked":b=T;break;case"value":s=T;break;case"defaultValue":E=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(h(137,u));break;default:v0(n,u,i,T,e,null)}}Ca(n,s,E,d,b,c,a,!1);return;case"select":F0("invalid",n),i=c=s=null;for(a in e)if(e.hasOwnProperty(a)&&(E=e[a],E!=null))switch(a){case"value":s=E;break;case"defaultValue":c=E;break;case"multiple":i=E;default:v0(n,u,a,E,e,null)}u=s,e=c,n.multiple=!!i,u!=null?m1(n,!!i,u,!1):e!=null&&m1(n,!!i,e,!0);return;case"textarea":F0("invalid",n),s=a=i=null;for(c in e)if(e.hasOwnProperty(c)&&(E=e[c],E!=null))switch(c){case"value":i=E;break;case"defaultValue":a=E;break;case"children":s=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(h(91));break;default:v0(n,u,c,E,e,null)}xa(n,i,a,s);return;case"option":for(d in e)if(e.hasOwnProperty(d)&&(i=e[d],i!=null))switch(d){case"selected":n.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:v0(n,u,d,i,e,null)}return;case"dialog":F0("beforetoggle",n),F0("toggle",n),F0("cancel",n),F0("close",n);break;case"iframe":case"object":F0("load",n);break;case"video":case"audio":for(i=0;i<Uu.length;i++)F0(Uu[i],n);break;case"image":F0("error",n),F0("load",n);break;case"details":F0("toggle",n);break;case"embed":case"source":case"link":F0("error",n),F0("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in e)if(e.hasOwnProperty(b)&&(i=e[b],i!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,u));default:v0(n,u,b,i,e,null)}return;default:if(wi(u)){for(T in e)e.hasOwnProperty(T)&&(i=e[T],i!==void 0&&m5(n,u,T,i,e,void 0));return}}for(E in e)e.hasOwnProperty(E)&&(i=e[E],i!=null&&v0(n,u,E,i,e,null))}function rs(n,u,e,i){switch(u){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,c=null,E=null,d=null,b=null,T=null;for(N in e){var G=e[N];if(e.hasOwnProperty(N)&&G!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":d=G;default:i.hasOwnProperty(N)||v0(n,u,N,null,i,G)}}for(var v in i){var N=i[v];if(G=e[v],i.hasOwnProperty(v)&&(N!=null||G!=null))switch(v){case"type":s=N;break;case"name":a=N;break;case"checked":b=N;break;case"defaultChecked":T=N;break;case"value":c=N;break;case"defaultValue":E=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(h(137,u));break;default:N!==G&&v0(n,u,v,N,i,G)}}Ii(n,c,E,d,b,T,s,a);return;case"select":N=c=E=v=null;for(s in e)if(d=e[s],e.hasOwnProperty(s)&&d!=null)switch(s){case"value":break;case"multiple":N=d;default:i.hasOwnProperty(s)||v0(n,u,s,null,i,d)}for(a in i)if(s=i[a],d=e[a],i.hasOwnProperty(a)&&(s!=null||d!=null))switch(a){case"value":v=s;break;case"defaultValue":E=s;break;case"multiple":c=s;default:s!==d&&v0(n,u,a,s,i,d)}u=E,e=c,i=N,v!=null?m1(n,!!e,v,!1):!!i!=!!e&&(u!=null?m1(n,!!e,u,!0):m1(n,!!e,e?[]:"",!1));return;case"textarea":N=v=null;for(E in e)if(a=e[E],e.hasOwnProperty(E)&&a!=null&&!i.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:v0(n,u,E,null,i,a)}for(c in i)if(a=i[c],s=e[c],i.hasOwnProperty(c)&&(a!=null||s!=null))switch(c){case"value":v=a;break;case"defaultValue":N=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(h(91));break;default:a!==s&&v0(n,u,c,a,i,s)}Da(n,v,N);return;case"option":for(var K in e)if(v=e[K],e.hasOwnProperty(K)&&v!=null&&!i.hasOwnProperty(K))switch(K){case"selected":n.selected=!1;break;default:v0(n,u,K,null,i,v)}for(d in i)if(v=i[d],N=e[d],i.hasOwnProperty(d)&&v!==N&&(v!=null||N!=null))switch(d){case"selected":n.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:v0(n,u,d,v,i,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var e0 in e)v=e[e0],e.hasOwnProperty(e0)&&v!=null&&!i.hasOwnProperty(e0)&&v0(n,u,e0,null,i,v);for(b in i)if(v=i[b],N=e[b],i.hasOwnProperty(b)&&v!==N&&(v!=null||N!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(h(137,u));break;default:v0(n,u,b,v,i,N)}return;default:if(wi(u)){for(var N0 in e)v=e[N0],e.hasOwnProperty(N0)&&v!==void 0&&!i.hasOwnProperty(N0)&&m5(n,u,N0,void 0,i,v);for(T in i)v=i[T],N=e[T],!i.hasOwnProperty(T)||v===N||v===void 0&&N===void 0||m5(n,u,T,v,i,N);return}}for(var j in e)v=e[j],e.hasOwnProperty(j)&&v!=null&&!i.hasOwnProperty(j)&&v0(n,u,j,null,i,v);for(G in i)v=i[G],N=e[G],!i.hasOwnProperty(G)||v===N||v==null&&N==null||v0(n,u,G,v,i,N)}function d7(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Es(){if(typeof performance.getEntriesByType=="function"){for(var n=0,u=0,e=performance.getEntriesByType("resource"),i=0;i<e.length;i++){var a=e[i],s=a.transferSize,c=a.initiatorType,E=a.duration;if(s&&E&&d7(c)){for(c=0,E=a.responseEnd,i+=1;i<e.length;i++){var d=e[i],b=d.startTime;if(b>E)break;var T=d.transferSize,G=d.initiatorType;T&&d7(G)&&(d=d.responseEnd,c+=T*(d<E?1:(E-b)/(d-b)))}if(--i,u+=8*(s+c)/(a.duration/1e3),n++,10<n)break}}if(0<n)return u/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var _5=null,j5=null;function ti(n){return n.nodeType===9?n:n.ownerDocument}function B7(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function m7(n,u){if(n===0)switch(u){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&u==="foreignObject"?0:n}function S5(n,u){return n==="textarea"||n==="noscript"||typeof u.children=="string"||typeof u.children=="number"||typeof u.children=="bigint"||typeof u.dangerouslySetInnerHTML=="object"&&u.dangerouslySetInnerHTML!==null&&u.dangerouslySetInnerHTML.__html!=null}var z5=null;function fs(){var n=window.event;return n&&n.type==="popstate"?n===z5?!1:(z5=n,!0):(z5=null,!1)}var _7=typeof setTimeout=="function"?setTimeout:void 0,Fs=typeof clearTimeout=="function"?clearTimeout:void 0,j7=typeof Promise=="function"?Promise:void 0,Cs=typeof queueMicrotask=="function"?queueMicrotask:typeof j7<"u"?function(n){return j7.resolve(null).then(n).catch(Ds)}:_7;function Ds(n){setTimeout(function(){throw n})}function L2(n){return n==="head"}function S7(n,u){var e=u,i=0;do{var a=e.nextSibling;if(n.removeChild(e),a&&a.nodeType===8)if(e=a.data,e==="/$"||e==="/&"){if(i===0){n.removeChild(a),uu(u);return}i--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")i++;else if(e==="html")Ru(n.ownerDocument.documentElement);else if(e==="head"){e=n.ownerDocument.head,Ru(e);for(var s=e.firstChild;s;){var c=s.nextSibling,E=s.nodeName;s[su]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&s.rel.toLowerCase()==="stylesheet"||e.removeChild(s),s=c}}else e==="body"&&Ru(n.ownerDocument.body);e=a}while(e);uu(u)}function z7(n,u){var e=n;n=0;do{var i=e.nextSibling;if(e.nodeType===1?u?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(u?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),i&&i.nodeType===8)if(e=i.data,e==="/$"){if(n===0)break;n--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||n++;e=i}while(e)}function p5(n){var u=n.firstChild;for(u&&u.nodeType===10&&(u=u.nextSibling);u;){var e=u;switch(u=u.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":p5(e),Ti(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}n.removeChild(e)}}function xs(n,u,e,i){for(;n.nodeType===1;){var a=e;if(n.nodeName.toLowerCase()!==u.toLowerCase()){if(!i&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(i){if(!n[su])switch(u){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(s=n.getAttribute("rel"),s==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(s!==a.rel||n.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||n.getAttribute("title")!==(a.title==null?null:a.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(s=n.getAttribute("src"),(s!==(a.src==null?null:a.src)||n.getAttribute("type")!==(a.type==null?null:a.type)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(u==="input"&&n.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&n.getAttribute("name")===s)return n}else return n;if(n=Qn(n.nextSibling),n===null)break}return null}function As(n,u,e){if(u==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=Qn(n.nextSibling),n===null))return null;return n}function p7(n,u){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!u||(n=Qn(n.nextSibling),n===null))return null;return n}function Y5(n){return n.data==="$?"||n.data==="$~"}function b5(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function ys(n,u){var e=n.ownerDocument;if(n.data==="$~")n._reactRetry=u;else if(n.data!=="$?"||e.readyState!=="loading")u();else{var i=function(){u(),e.removeEventListener("DOMContentLoaded",i)};e.addEventListener("DOMContentLoaded",i),n._reactRetry=i}}function Qn(n){for(;n!=null;n=n.nextSibling){var u=n.nodeType;if(u===1||u===3)break;if(u===8){if(u=n.data,u==="$"||u==="$!"||u==="$?"||u==="$~"||u==="&"||u==="F!"||u==="F")break;if(u==="/$"||u==="/&")return null}}return n}var v5=null;function Y7(n){n=n.nextSibling;for(var u=0;n;){if(n.nodeType===8){var e=n.data;if(e==="/$"||e==="/&"){if(u===0)return Qn(n.nextSibling);u--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||u++}n=n.nextSibling}return null}function b7(n){n=n.previousSibling;for(var u=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(u===0)return n;u--}else e!=="/$"&&e!=="/&"||u++}n=n.previousSibling}return null}function v7(n,u,e){switch(u=ti(e),n){case"html":if(n=u.documentElement,!n)throw Error(h(452));return n;case"head":if(n=u.head,!n)throw Error(h(453));return n;case"body":if(n=u.body,!n)throw Error(h(454));return n;default:throw Error(h(451))}}function Ru(n){for(var u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Ti(n)}var Kn=new Map,N7=new Set;function ai(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var m2=U.d;U.d={f:ds,r:Bs,D:ms,C:_s,L:js,m:Ss,X:ps,S:zs,M:Ys};function ds(){var n=m2.f(),u=Pe();return n||u}function Bs(n){var u=y1(n);u!==null&&u.tag===5&&u.type==="form"?K3(u):m2.r(n)}var W1=typeof document>"u"?null:document;function T7(n,u,e){var i=W1;if(i&&typeof u=="string"&&u){var a=Un(u);a='link[rel="'+n+'"][href="'+a+'"]',typeof e=="string"&&(a+='[crossorigin="'+e+'"]'),N7.has(a)||(N7.add(a),n={rel:n,crossOrigin:e,href:u},i.querySelector(a)===null&&(u=i.createElement("link"),Cn(u,"link",n),sn(u),i.head.appendChild(u)))}}function ms(n){m2.D(n),T7("dns-prefetch",n,null)}function _s(n,u){m2.C(n,u),T7("preconnect",n,u)}function js(n,u,e){m2.L(n,u,e);var i=W1;if(i&&n&&u){var a='link[rel="preload"][as="'+Un(u)+'"]';u==="image"&&e&&e.imageSrcSet?(a+='[imagesrcset="'+Un(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(a+='[imagesizes="'+Un(e.imageSizes)+'"]')):a+='[href="'+Un(n)+'"]';var s=a;switch(u){case"style":s=$1(n);break;case"script":s=nu(n)}Kn.has(s)||(n=_({rel:"preload",href:u==="image"&&e&&e.imageSrcSet?void 0:n,as:u},e),Kn.set(s,n),i.querySelector(a)!==null||u==="style"&&i.querySelector(Lu(s))||u==="script"&&i.querySelector(qu(s))||(u=i.createElement("link"),Cn(u,"link",n),sn(u),i.head.appendChild(u)))}}function Ss(n,u){m2.m(n,u);var e=W1;if(e&&n){var i=u&&typeof u.as=="string"?u.as:"script",a='link[rel="modulepreload"][as="'+Un(i)+'"][href="'+Un(n)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=nu(n)}if(!Kn.has(s)&&(n=_({rel:"modulepreload",href:n},u),Kn.set(s,n),e.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(qu(s)))return}i=e.createElement("link"),Cn(i,"link",n),sn(i),e.head.appendChild(i)}}}function zs(n,u,e){m2.S(n,u,e);var i=W1;if(i&&n){var a=d1(i).hoistableStyles,s=$1(n);u=u||"default";var c=a.get(s);if(!c){var E={loading:0,preload:null};if(c=i.querySelector(Lu(s)))E.loading=5;else{n=_({rel:"stylesheet",href:n,"data-precedence":u},e),(e=Kn.get(s))&&N5(n,e);var d=c=i.createElement("link");sn(d),Cn(d,"link",n),d._p=new Promise(function(b,T){d.onload=b,d.onerror=T}),d.addEventListener("load",function(){E.loading|=1}),d.addEventListener("error",function(){E.loading|=2}),E.loading|=4,li(c,u,i)}c={type:"stylesheet",instance:c,count:1,state:E},a.set(s,c)}}}function ps(n,u){m2.X(n,u);var e=W1;if(e&&n){var i=d1(e).hoistableScripts,a=nu(n),s=i.get(a);s||(s=e.querySelector(qu(a)),s||(n=_({src:n,async:!0},u),(u=Kn.get(a))&&T5(n,u),s=e.createElement("script"),sn(s),Cn(s,"link",n),e.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function Ys(n,u){m2.M(n,u);var e=W1;if(e&&n){var i=d1(e).hoistableScripts,a=nu(n),s=i.get(a);s||(s=e.querySelector(qu(a)),s||(n=_({src:n,async:!0,type:"module"},u),(u=Kn.get(a))&&T5(n,u),s=e.createElement("script"),sn(s),Cn(s,"link",n),e.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function M7(n,u,e,i){var a=(a=r0.current)?ai(a):null;if(!a)throw Error(h(446));switch(n){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(u=$1(e.href),e=d1(a).hoistableStyles,i=e.get(u),i||(i={type:"style",instance:null,count:0,state:null},e.set(u,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){n=$1(e.href);var s=d1(a).hoistableStyles,c=s.get(n);if(c||(a=a.ownerDocument||a,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(n,c),(s=a.querySelector(Lu(n)))&&!s._p&&(c.instance=s,c.state.loading=5),Kn.has(n)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Kn.set(n,e),s||bs(a,n,e,c.state))),u&&i===null)throw Error(h(528,""));return c}if(u&&i!==null)throw Error(h(529,""));return null;case"script":return u=e.async,e=e.src,typeof e=="string"&&u&&typeof u!="function"&&typeof u!="symbol"?(u=nu(e),e=d1(a).hoistableScripts,i=e.get(u),i||(i={type:"script",instance:null,count:0,state:null},e.set(u,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,n))}}function $1(n){return'href="'+Un(n)+'"'}function Lu(n){return'link[rel="stylesheet"]['+n+"]"}function I7(n){return _({},n,{"data-precedence":n.precedence,precedence:null})}function bs(n,u,e,i){n.querySelector('link[rel="preload"][as="style"]['+u+"]")?i.loading=1:(u=n.createElement("link"),i.preload=u,u.addEventListener("load",function(){return i.loading|=1}),u.addEventListener("error",function(){return i.loading|=2}),Cn(u,"link",e),sn(u),n.head.appendChild(u))}function nu(n){return'[src="'+Un(n)+'"]'}function qu(n){return"script[async]"+n}function O7(n,u,e){if(u.count++,u.instance===null)switch(u.type){case"style":var i=n.querySelector('style[data-href~="'+Un(e.href)+'"]');if(i)return u.instance=i,sn(i),i;var a=_({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return i=(n.ownerDocument||n).createElement("style"),sn(i),Cn(i,"style",a),li(i,e.precedence,n),u.instance=i;case"stylesheet":a=$1(e.href);var s=n.querySelector(Lu(a));if(s)return u.state.loading|=4,u.instance=s,sn(s),s;i=I7(e),(a=Kn.get(a))&&N5(i,a),s=(n.ownerDocument||n).createElement("link"),sn(s);var c=s;return c._p=new Promise(function(E,d){c.onload=E,c.onerror=d}),Cn(s,"link",i),u.state.loading|=4,li(s,e.precedence,n),u.instance=s;case"script":return s=nu(e.src),(a=n.querySelector(qu(s)))?(u.instance=a,sn(a),a):(i=e,(a=Kn.get(s))&&(i=_({},e),T5(i,a)),n=n.ownerDocument||n,a=n.createElement("script"),sn(a),Cn(a,"link",i),n.head.appendChild(a),u.instance=a);case"void":return null;default:throw Error(h(443,u.type))}else u.type==="stylesheet"&&(u.state.loading&4)===0&&(i=u.instance,u.state.loading|=4,li(i,e.precedence,n));return u.instance}function li(n,u,e){for(var i=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,c=0;c<i.length;c++){var E=i[c];if(E.dataset.precedence===u)s=E;else if(s!==a)break}s?s.parentNode.insertBefore(n,s.nextSibling):(u=e.nodeType===9?e.head:e,u.insertBefore(n,u.firstChild))}function N5(n,u){n.crossOrigin==null&&(n.crossOrigin=u.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=u.referrerPolicy),n.title==null&&(n.title=u.title)}function T5(n,u){n.crossOrigin==null&&(n.crossOrigin=u.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=u.referrerPolicy),n.integrity==null&&(n.integrity=u.integrity)}var si=null;function w7(n,u,e){if(si===null){var i=new Map,a=si=new Map;a.set(e,i)}else a=si,i=a.get(e),i||(i=new Map,a.set(e,i));if(i.has(n))return i;for(i.set(n,null),e=e.getElementsByTagName(n),a=0;a<e.length;a++){var s=e[a];if(!(s[su]||s[rn]||n==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var c=s.getAttribute(u)||"";c=n+c;var E=i.get(c);E?E.push(s):i.set(c,[s])}}return i}function G7(n,u,e){n=n.ownerDocument||n,n.head.insertBefore(e,u==="title"?n.querySelector("head > title"):null)}function vs(n,u,e){if(e===1||u.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof u.precedence!="string"||typeof u.href!="string"||u.href==="")break;return!0;case"link":if(typeof u.rel!="string"||typeof u.href!="string"||u.href===""||u.onLoad||u.onError)break;switch(u.rel){case"stylesheet":return n=u.disabled,typeof u.precedence=="string"&&n==null;default:return!0}case"script":if(u.async&&typeof u.async!="function"&&typeof u.async!="symbol"&&!u.onLoad&&!u.onError&&u.src&&typeof u.src=="string")return!0}return!1}function H7(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function Ns(n,u,e,i){if(e.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var a=$1(i.href),s=u.querySelector(Lu(a));if(s){u=s._p,u!==null&&typeof u=="object"&&typeof u.then=="function"&&(n.count++,n=oi.bind(n),u.then(n,n)),e.state.loading|=4,e.instance=s,sn(s);return}s=u.ownerDocument||u,i=I7(i),(a=Kn.get(a))&&N5(i,a),s=s.createElement("link"),sn(s);var c=s;c._p=new Promise(function(E,d){c.onload=E,c.onerror=d}),Cn(s,"link",i),e.instance=s}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,u),(u=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=oi.bind(n),u.addEventListener("load",e),u.addEventListener("error",e))}}var M5=0;function Ts(n,u){return n.stylesheets&&n.count===0&&gi(n,n.stylesheets),0<n.count||0<n.imgCount?function(e){var i=setTimeout(function(){if(n.stylesheets&&gi(n,n.stylesheets),n.unsuspend){var s=n.unsuspend;n.unsuspend=null,s()}},6e4+u);0<n.imgBytes&&M5===0&&(M5=62500*Es());var a=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&gi(n,n.stylesheets),n.unsuspend)){var s=n.unsuspend;n.unsuspend=null,s()}},(n.imgBytes>M5?50:800)+u);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function oi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gi(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var hi=null;function gi(n,u){n.stylesheets=null,n.unsuspend!==null&&(n.count++,hi=new Map,u.forEach(Ms,n),hi=null,oi.call(n))}function Ms(n,u){if(!(u.state.loading&4)){var e=hi.get(n);if(e)var i=e.get(null);else{e=new Map,hi.set(n,e);for(var a=n.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var c=a[s];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(e.set(c.dataset.precedence,c),i=c)}i&&e.set(null,i)}a=u.instance,c=a.getAttribute("data-precedence"),s=e.get(c)||i,s===i&&e.set(null,a),e.set(c,a),this.count++,i=oi.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(a,n.firstChild)),u.state.loading|=4}}var Ju={$$typeof:c0,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function Is(n,u,e,i,a,s,c,E,d){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yi(0),this.hiddenUpdates=Yi(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function Z7(n,u,e,i,a,s,c,E,d,b,T,G){return n=new Is(n,u,e,c,d,b,T,G,E),u=1,s===!0&&(u|=24),s=Tn(3,null,null,u),n.current=s,s.stateNode=n,u=Et(),u.refCount++,n.pooledCache=u,u.refCount++,s.memoizedState={element:i,isDehydrated:e,cache:u},Dt(s),n}function U7(n){return n?(n=v1,n):v1}function X7(n,u,e,i,a,s){a=U7(a),i.context===null?i.context=a:i.pendingContext=a,i=T2(u),i.payload={element:e},s=s===void 0?null:s,s!==null&&(i.callback=s),e=M2(n,i,u),e!==null&&(zn(e,n,u),_u(e,n,u))}function R7(n,u){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<u?e:u}}function I5(n,u){R7(n,u),(n=n.alternate)&&R7(n,u)}function L7(n){if(n.tag===13||n.tag===31){var u=i1(n,67108864);u!==null&&zn(u,n,67108864),I5(n,67108864)}}function q7(n){if(n.tag===13||n.tag===31){var u=Gn();u=bi(u);var e=i1(n,u);e!==null&&zn(e,n,u),I5(n,u)}}var ci=!0;function Os(n,u,e,i){var a=p.T;p.T=null;var s=U.p;try{U.p=2,O5(n,u,e,i)}finally{U.p=s,p.T=a}}function ws(n,u,e,i){var a=p.T;p.T=null;var s=U.p;try{U.p=8,O5(n,u,e,i)}finally{U.p=s,p.T=a}}function O5(n,u,e,i){if(ci){var a=w5(i);if(a===null)B5(n,u,i,ri,e),k7(n,i);else if(Hs(a,n,u,e,i))i.stopPropagation();else if(k7(n,i),u&4&&-1<Gs.indexOf(n)){for(;a!==null;){var s=y1(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var c=W2(s.pendingLanes);if(c!==0){var E=s;for(E.pendingLanes|=2,E.entangledLanes|=2;c;){var d=1<<31-vn(c);E.entanglements[1]|=d,c&=~d}t2(s),(j0&6)===0&&(Qe=Yn()+500,Zu(0))}}break;case 31:case 13:E=i1(s,2),E!==null&&zn(E,s,2),Pe(),I5(s,2)}if(s=w5(i),s===null&&B5(n,u,i,ri,e),s===a)break;a=s}a!==null&&i.stopPropagation()}else B5(n,u,i,null,e)}}function w5(n){return n=Hi(n),G5(n)}var ri=null;function G5(n){if(ri=null,n=A1(n),n!==null){var u=f(n);if(u===null)n=null;else{var e=u.tag;if(e===13){if(n=F(u),n!==null)return n;n=null}else if(e===31){if(n=A(u),n!==null)return n;n=null}else if(e===3){if(u.stateNode.current.memoizedState.isDehydrated)return u.tag===3?u.stateNode.containerInfo:null;n=null}else u!==n&&(n=null)}}return ri=n,null}function J7(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(m4()){case na:return 2;case ua:return 8;case ue:case _4:return 32;case ea:return 268435456;default:return 32}default:return 32}}var H5=!1,q2=null,J2=null,k2=null,ku=new Map,Qu=new Map,Q2=[],Gs="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function k7(n,u){switch(n){case"focusin":case"focusout":q2=null;break;case"dragenter":case"dragleave":J2=null;break;case"mouseover":case"mouseout":k2=null;break;case"pointerover":case"pointerout":ku.delete(u.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qu.delete(u.pointerId)}}function Ku(n,u,e,i,a,s){return n===null||n.nativeEvent!==s?(n={blockedOn:u,domEventName:e,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},u!==null&&(u=y1(u),u!==null&&L7(u)),n):(n.eventSystemFlags|=i,u=n.targetContainers,a!==null&&u.indexOf(a)===-1&&u.push(a),n)}function Hs(n,u,e,i,a){switch(u){case"focusin":return q2=Ku(q2,n,u,e,i,a),!0;case"dragenter":return J2=Ku(J2,n,u,e,i,a),!0;case"mouseover":return k2=Ku(k2,n,u,e,i,a),!0;case"pointerover":var s=a.pointerId;return ku.set(s,Ku(ku.get(s)||null,n,u,e,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Qu.set(s,Ku(Qu.get(s)||null,n,u,e,i,a)),!0}return!1}function Q7(n){var u=A1(n.target);if(u!==null){var e=f(u);if(e!==null){if(u=e.tag,u===13){if(u=F(e),u!==null){n.blockedOn=u,oa(n.priority,function(){q7(e)});return}}else if(u===31){if(u=A(e),u!==null){n.blockedOn=u,oa(n.priority,function(){q7(e)});return}}else if(u===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ei(n){if(n.blockedOn!==null)return!1;for(var u=n.targetContainers;0<u.length;){var e=w5(n.nativeEvent);if(e===null){e=n.nativeEvent;var i=new e.constructor(e.type,e);Gi=i,e.target.dispatchEvent(i),Gi=null}else return u=y1(e),u!==null&&L7(u),n.blockedOn=e,!1;u.shift()}return!0}function K7(n,u,e){Ei(n)&&e.delete(u)}function Zs(){H5=!1,q2!==null&&Ei(q2)&&(q2=null),J2!==null&&Ei(J2)&&(J2=null),k2!==null&&Ei(k2)&&(k2=null),ku.forEach(K7),Qu.forEach(K7)}function fi(n,u){n.blockedOn===u&&(n.blockedOn=null,H5||(H5=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Zs)))}var Fi=null;function P7(n){Fi!==n&&(Fi=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Fi===n&&(Fi=null);for(var u=0;u<n.length;u+=3){var e=n[u],i=n[u+1],a=n[u+2];if(typeof i!="function"){if(G5(i||e)===null)continue;break}var s=y1(e);s!==null&&(n.splice(u,3),u-=3,wt(s,{pending:!0,data:a,method:e.method,action:i},i,a))}}))}function uu(n){function u(d){return fi(d,n)}q2!==null&&fi(q2,n),J2!==null&&fi(J2,n),k2!==null&&fi(k2,n),ku.forEach(u),Qu.forEach(u);for(var e=0;e<Q2.length;e++){var i=Q2[e];i.blockedOn===n&&(i.blockedOn=null)}for(;0<Q2.length&&(e=Q2[0],e.blockedOn===null);)Q7(e),e.blockedOn===null&&Q2.shift();if(e=(n.ownerDocument||n).$$reactFormReplay,e!=null)for(i=0;i<e.length;i+=3){var a=e[i],s=e[i+1],c=a[dn]||null;if(typeof s=="function")c||P7(e);else if(c){var E=null;if(s&&s.hasAttribute("formAction")){if(a=s,c=s[dn]||null)E=c.formAction;else if(G5(a)!==null)continue}else E=c.action;typeof E=="function"?e[i+1]=E:(e.splice(i,3),i-=3),P7(e)}}}function V7(){function n(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(c){return a=c})},focusReset:"manual",scroll:"manual"})}function u(){a!==null&&(a(),a=null),i||setTimeout(e,20)}function e(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",u),navigation.addEventListener("navigateerror",u),setTimeout(e,100),function(){i=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",u),navigation.removeEventListener("navigateerror",u),a!==null&&(a(),a=null)}}}function Z5(n){this._internalRoot=n}Ci.prototype.render=Z5.prototype.render=function(n){var u=this._internalRoot;if(u===null)throw Error(h(409));var e=u.current,i=Gn();X7(e,i,n,u,null,null)},Ci.prototype.unmount=Z5.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var u=n.containerInfo;X7(n.current,2,null,n,null,null),Pe(),u[x1]=null}};function Ci(n){this._internalRoot=n}Ci.prototype.unstable_scheduleHydration=function(n){if(n){var u=sa();n={blockedOn:null,target:n,priority:u};for(var e=0;e<Q2.length&&u!==0&&u<Q2[e].priority;e++);Q2.splice(e,0,n),e===0&&Q7(n)}};var W7=t.version;if(W7!=="19.2.0")throw Error(h(527,W7,"19.2.0"));U.findDOMNode=function(n){var u=n._reactInternals;if(u===void 0)throw typeof n.render=="function"?Error(h(188)):(n=Object.keys(n).join(","),Error(h(268,n)));return n=x(u),n=n!==null?S(n):null,n=n===null?null:n.stateNode,n};var Us={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:p,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Di=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Di.isDisabled&&Di.supportsFiber)try{tu=Di.inject(Us),bn=Di}catch{}}return Vu.createRoot=function(n,u){if(!g(n))throw Error(h(299));var e=!1,i="",a=a6,s=l6,c=s6;return u!=null&&(u.unstable_strictMode===!0&&(e=!0),u.identifierPrefix!==void 0&&(i=u.identifierPrefix),u.onUncaughtError!==void 0&&(a=u.onUncaughtError),u.onCaughtError!==void 0&&(s=u.onCaughtError),u.onRecoverableError!==void 0&&(c=u.onRecoverableError)),u=Z7(n,1,!1,null,null,e,i,null,a,s,c,V7),n[x1]=u.current,d5(n),new Z5(u)},Vu.hydrateRoot=function(n,u,e){if(!g(n))throw Error(h(299));var i=!1,a="",s=a6,c=l6,E=s6,d=null;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(E=e.onRecoverableError),e.formState!==void 0&&(d=e.formState)),u=Z7(n,1,!0,u,e??null,i,a,d,s,c,E,V7),u.context=U7(null),e=u.current,i=Gn(),i=bi(i),a=T2(i),a.callback=null,M2(e,a,i),e=i,u.current.lanes=e,lu(u,e),t2(u),n[x1]=u.current,d5(n),new Ci(u)},Vu.version="19.2.0",Vu}var o4;function Ws(){if(o4)return R5.exports;o4=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),R5.exports=Vs(),R5.exports}var $s=Ws();const n8=C4($s);var Z=(o=>(o.METAL="金",o.WOOD="木",o.WATER="水",o.FIRE="火",o.EARTH="土",o))(Z||{}),tn=(o=>(o[o.TIME=1]="TIME",o[o.NUMBERS=2]="NUMBERS",o[o.WORDS=3]="WORDS",o[o.OBJECTS=4]="OBJECTS",o[o.DIRECTION=5]="DIRECTION",o[o.CUSTOM=6]="CUSTOM",o))(tn||{});const h4=[{index:1,name:"乾",nameFull:"乾",originalText:"乾。元，亨，利，贞。",xiangCi:"象曰：天行健，君子以自强不息。",explanation:`乾卦：大吉大利，吉利的贞卜。
《象辞》说：天道刚健，运行不已。君子观此卦象，从而以天为法，自强不息。
《断易天机》解
乾象征天，六阳爻构成乾卦，为《易经》六十四卦之首。纯阳刚建，其性刚强，其行劲健，大通而至正，兆示大通而有利，但须行正道，方可永远亨通。`,shaoYong:`刚健旺盛，发育之功；完事顺利，谨防太强。
得此卦者，天行刚健，自强不息，名利双收之象，宜把握机会，争取成果。女人得此卦则有过于刚直之嫌。`,yaoCi:[{ci:"初九。潜龙勿用。",xiang:"",explanation:`初九：潜藏的龙，无法施展。
《象辞》说：潜藏的龙，无法施展，因为初九阳爻处在一卦的下位，所以压抑难伸。`,shaoYong:"平：得此爻者，宜沉稳待机，若一动作即生灾疾，谋事不利，谨防小人。做官的会有阻力。经商的会有阻滞。女命则兴家业，孕生子。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。见龙在田，利见大人。",xiang:"",explanation:`九二：龙出现在大地上，有利于会见贵族王公。
《象辞》说：龙出现在大地上，喻指君子走出了压抑的低谷，正开始谋取能够广泛施予德泽的社会地位。`,shaoYong:"吉：得此爻者，会得到贵人的提拔。做官的会遇到明主，身居要职。读书人考试能获得佳绩。经商者获利。女命逢之，则又富又贵。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。君子终日乾乾，夕惕若；厉，无咎。",xiang:"",explanation:`九三：有才德的君子始终是白天勤奋努力，夜晚戒惧反省，虽然处境艰难，但终究没有灾难。
《象辞》说：君子整日里勤奋努力，意思是反复行道，坚持不舍。`,shaoYong:"平：得此爻者，会往来不停，财利难获，凡事不认真计划，躁动者会有损失。做官的会身兼重职，且事多繁冗，如果能保持忧虑和谨慎的态度则没有过失。女命逢之，性躁，难成为贤内助。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。或跃在渊，无咎。",xiang:"",explanation:`九四：龙也许跳进深潭，没有灾难。
《象辞》说：龙也许跳进深潭，表示可以有所作为而没有灾难。`,shaoYong:"平：得此爻者，百为艰难。做官的会停缺待职，等待机会。女命逢之，则安乐富贵也。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。飞龙在天，利见大人。",xiang:"",explanation:`九五：龙飞腾在空中，有利于会见贵族王公。
《象辞》说：龙飞腾在空中，意味着君子大有所为。`,shaoYong:"吉：得此爻者，会遇到贵人，谋遂志得。做官的会飞黄腾达。女命则兼男权，难免孤独。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。亢龙有悔。",xiang:"",explanation:`上九：升腾到极限的龙会有灾祸之困。
《象辞》说：升腾到极限的龙会有灾祸之困，这是警戒人们崇高、盈满是不可能长久保持的。`,shaoYong:"凶：得此爻者，有过刚取凶之祸，五十以后者不寿。做官的会退职，或遭贬。女命逢之，其性必悍，难成为贤内助。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:2,name:"坤",nameFull:"坤",originalText:"坤。元，亨，利牝马之贞。君子有攸往，先迷后得主。利西南得朋，东北丧朋。安贞，吉。",xiangCi:"象曰：地势坤，君子以厚德载物。",explanation:`坤卦：大吉大利。占问雌马得到吉兆。君子前去旅行，先迷失路途，后来找到主人，吉利。西南行获得财物，东北行丧失财物。占问定居，得到吉兆。
《象辞》说：大地的形势平铺舒展，顺承天道。君子观此卦象，取法于地，以深厚的德行来承担重大的责任。
《断易天机》解
坤卦坤上坤下，为坤宫本位卦。坤卦为柔顺，为地气舒展之象，具有纯阴之性，先失道而后得主，宜往西南，西南可得到朋友。`,shaoYong:`柔顺和静，厚载之功；静守安顺，妄动招损。
得此卦者，宜顺从运势，以静制动，不宜独立谋事，顺从他人，一起合作，可成大事。
台湾国学大儒傅佩荣解
时运：为人厚道，声名远传。
财运：满载而归。
家宅：家庭安稳；婚嫁大吉。
身体：柔软运动。
传统解卦
这个卦是同卦（下坤上坤）相叠，阴性。象征地（与乾卦相反），顺从天，承载万物，伸展无穷无尽。坤卦以雌马为象征，表明地道生育抚养万物，而又依天顺时，性情温顺。它以“先迷后得”证明“坤”顺从“乾”，依随“乾”，才能把握正确方向，遵循正道，获取吉利。
大象：大地承载万物，以德服众，仁者无敌。
运势：诸事不宜急进，以静制动为宜。
事业：诸项事业可以成功，得到预想的结果，但开始出师不利，为困境所扰。切莫冒险急进，须小心谨言慎行，尤其不可单枪匹马，独断专行。取得朋友的关心和支持最为重要，在他人的合作下，共同完成事业。因此，应注重内心修养，积蓄养德，效法大地，容忍负重，宽厚大度，以直率、方正、含蓄为原则，不得贪功自傲，持之以恒，谋求事业的成功。
经商：机遇不很好，切莫冒险，以稳健为妥，遇到挫折，务必即时总结经验。注意储存货物，待价而沽，处处小心为是。
求名：比较顺利，具备基本条件，踏踏实实，埋头苦干，不追求身外之物，即可吉祥。
婚恋：阴盛。以柔克刚，女方柔顺，美好姻缘，白头到老。
决策：忠厚、温和，待人真诚，热心助人，因此也能得到他人的帮助，可往往因不提防小人而受到伤害，但无大碍。性格灵活，工作方法多样，可以左右逢源，得到赞许。
台湾张铭仁解卦
地：表示大地为母，天生之母性也。六冲纯卦，主大好大坏之卦象。优点：如母亲般地柔顺、牺牲、付出，有事事和顺之意。缺点：过于委缺求全，没有了自己的想法和观念。此卦论感情，有前世因缘的影响，自己就有如母亲??大姊般地照顾对方，无怨无悔，会很辛苦、多劳累。事业，适合当任副手之职位，忌任主事者，容易软弱难成事。
解释：在母胎里孕育中，不宜创业。
特性：为人较为保守，善于计划与研究工作，适合任辅佐幕僚之职，做人朴实，人缘佳，大好人型，男性桃花多，女性则爱情专一。
运势：诸事不宜急进，退守以静制动者吉。坤者大地平静，任其他物所摧而不为所动者大利也。若醉心私欲，违背常理，则有无妄之灾。
家运：幸福平静之象。
疾病：病情严重，为腹、肠胃、肌肉等慢性病（腹疾、脾胃之疾、饮食停滞，从而食不化）。
胎孕：生贵子，女儿亦为福。
子女：儿女众多，和睦幸福也。
周转：须耐心去求，否则难成。
买卖：勿急，交易可成。
等人：不会来，须再待些时日。
寻人：此人为色情之事出走，于西南方附近之地也。
失物：难以寻回，大部分均不知下落。
外出：宜结伴而行。可去陌生的地方。
考试：希望不大。
诉讼：防房地产之争，宜和解，有始无终之兆。
求事：不称意亦不理想，另寻。
改行：改行不利，宜固守本份。
开业：开业者再观望，目前尚未筹备妥当，不宜。`,yaoCi:[{ci:"初六。履霜，坚冰至。",xiang:"",explanation:`初六：践踏着薄霜，可以推断坚厚的冰层快要冻结成了。
《象辞》说：践踏着薄霜，可以推断坚厚的冰层快要冻结成了。这表明阴冷之气开始凝聚了，遵循自然规律的推进，坚厚的冰层快要冻结而成了。`,shaoYong:"平：得此爻者，宜谨防仇怨引起的纠纷。阴气盛的人则会大兴家业。做官的要谨防小人的谗言而生祸。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。直，方，大，不习无不利。",xiang:"",explanation:`六二：平直、方正、辽阔是大地的特点。即使前往陌生的地方，也没有什么不利的。
《象辞》说：六二的爻象是平直而且方正，即使前往陌生的地方，也没有什么不利的，因为地道是广大无边的。`,shaoYong:"吉：得此爻者，会不愁吃喝，衣食无忧。做官的会升迁，身居高位。女命则为贤良起家。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。含章可贞。或从王事，无成有终。",xiang:"",explanation:`六三：战胜殷商。称心的占卜。有人服役于战争，没有取得战绩，但结局还是好的。
《象辞》说：战胜殷商，称心的占卜，说明能抓住时机采取行动。有人服役于战争（没有取得战绩而有好的结局），因为他才智广大。`,shaoYong:"平：得此爻者，谋望可成，认真经营会有收获。做官的会有升迁的希望。女命则为德妇。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。括囊，无咎，无誉。",xiang:"",explanation:`六四：扎紧了口袋，如缄口不言，没有指责，也没有赞誉。
《象辞》说：扎紧了口袋，如缄口不言，是说谨慎才没有祸害。`,shaoYong:"平：得此爻者，经营受阻，大凡谨慎收敛者，则无横来之祸。做官的要谨守常职，可望升迁。女命则贤而起家。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。黄裳，元吉。",xiang:"",explanation:`六五：黄色的裙裤，大吉大利。
《象辞》说：黄色的裙裤大吉大利，因为“黄裳”象征着人内在的美德。`,shaoYong:"吉：得此爻者，将会获得财利，事事安稳，没有灾难。做官的将会升迁，飞黄腾达。女命则为德妇，贤惠之人。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。龙战于野，其血玄黄。",xiang:"",explanation:`上六：龙在大地上争斗，血流遍野。
《象辞》说：龙在大地上争斗，比喻人走到了穷困的绝境。`,shaoYong:"凶：得此爻者，有竞争的困扰，会有大的损失。做官的会有被贬之祸。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:3,name:"屯",nameFull:"屯",originalText:"屯。元，亨，利，贞。勿用，有攸往，利建侯。",xiangCi:"象曰：云，雷，屯；君子以经纶。",explanation:`屯卦。大吉大利，吉利的占卜。不利于出门。有利于建国封侯。
《象辞》说：屯的上卦为坎，坎为云，下卦为震，震为雷。云行于上，雷动于下，是屯卦的卦象。君子观此卦象，取法于云雷，用云的恩泽，雷的威严来治理国事。
《断易天机》解
屯卦坎上震下，为坎宫二世卦。屯说明有困难，又象征动而逢险境，需刚毅果敢方为吉。`,shaoYong:`万物始生，开始困难；先劳后逸，苦尽甘来。
得此卦者，身处困境，宜守不宜进，须多加辛苦努力，排除困难，方可通达，有初难后解之象。
台湾国学大儒傅佩荣解
时运：宜守不宜进。
财运：创业维艰。
家宅：修缮住宅；初婚不和。
身体：保存元气。
传统解卦
这个卦是异卦（下震上坎）相叠，震为雷，喻动；坎为雨，喻险。雷雨交加，险象丛生，环境恶劣。“屯”原指植物萌生大地，万物始生，充满艰难险阻，然而顺时应运，必欣欣向荣。
大象：屯者难也，万事欲进而不得进。
运势：身处困境，步步为营，有初难后解之意。
事业：起初多有不利，要知难而进，小心翼翼，勇往直前，灵活机动，可望获得大的成功，时机到来时一定要抓住，却也不得操之太急，且仍有困难，务必有他人相助，故平时应多施恩惠。
经商：创业初期步履艰难，多有挫折。坚定信念最重要，不要为表面现象所迷惑，应积极进取，行动果断，打开出路。若仍无法摆脱困境，则应退守保全，等待机会，再展宏图。
求名：积极争取，主动追求，可以成功。
婚恋：好事多磨，忠贞纯洁，大胆追求，能够成功，婚姻美满。
决策：初始困难，但若具有坚忍不拔的毅力和锲而不舍的奋斗精神，前途不可估量，但往往不为他人理解而陷于孤独苦闷，事业会因此处于困难状态，需要得到贤德之人的帮助才能摆脱。如能以乐观主义精神处世，能取得成就。
台湾张铭仁解卦
屯：表示刚出生的小草，主凶象，四大难卦第一卦。因为刚出生的小草，脆弱易折，表示凡事都会很困难，很容易就会夭折、失败。但是只要有心小心地护持，小草还是有机会长成大树的！
解释：不明不白。
特性：理想远大，奋斗不懈，苦尽甘来，最后能达成目标，获得他人的肯定。一生困境多，烦恼厌烦多，朋友少助。
运势：逆势，多有困惑，但不可妄进，宜守不宜进。坚定意志，凡事不可为一己之利而执意强行，皆有不成损破之象。宜步步为营，排除困难，始可通达，有初难后解之象。
家运：多波折，若能努力排除困难，可得通顺。
疾病：病在肠胃，足部或泌尿系统，不宜掉以轻心。
胎孕：不安，产母有虚惊，但可无虑。
子女：有辛苦，但以后可得安逸。
周转：困难重重，须用心忍耐奔波。
买卖：不利，交易有损。
等人：不会来。
寻人：出走者不知去向，难寻。东或北方去矣。
失物：难以寻回。
外出：慎重为好，有危险，宜改日动身。
考试：不理想。
诉讼：小事粘滞纠缠，大事反无大害，宜和解。
求事：不利。
改行：不宜。
开业：不宜，有困难亦难成也。`,yaoCi:[{ci:"初九。盘桓，利居贞，利建侯。",xiang:"",explanation:`初九：徘徊难进。这是有利于居住的卜问。巫遇此爻，有利于建国封侯。
《象辞》说：虽然徘徊难进，但志行贞正。初九居六二阴爻之下，象征以尊贵而俯顺于低贱，因而大得民心。`,shaoYong:"平：得此爻者，安分守己者则无忧，躁动者不利。做官的暂时未受到重用，坚守正道，好运可期。女命则为良妇而兴家。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。屯如邅如，乘马班如。匪寇婚媾，女子贞不字，十年乃字。",xiang:"",explanation:`六二：逡巡不前。行路踌躇，驾着马车原地回旋，不是前来抢劫，而是迎娶新娘。占得这个女子不能孕育，十年才能怀孕。
《象辞》说：六二之爻预示艰难，因为处在初九阳爻之上。十年才能怀孕，这是反常现象。`,shaoYong:"平：得此爻者，有婚嫁之喜事。做官的权柄日盛。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。即鹿无虞，惟入于林中。君子几不如舍。往吝。",xiang:"",explanation:`六三：追捕野鹿，没有充当向导的官员。思忖着鹿逃入山林。君子机灵，认为不如放弃。深入山林，认为会有危险。
《象辞》说：追捕野鹿，没有充当向导的官员，意在追逐走兽。君子放弃那野鹿，知道深入山林会有危险，因而除此别无他法。`,shaoYong:"凶：得此爻者，须安分守己，否则会有灾难。做官的有贪污之嫌，有被停职降职之忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。乘马班如，求婚媾，往吉，无不利。",xiang:"",explanation:`六四：驾着马车原地回旋，这是寻求婿姻。放胆前进，必定吉利。
《象辞》说：敢于追求，勇于深入，因为其人深明形势。`,shaoYong:"吉：得此爻者，谋事可成，百事和合，会得到朋友的帮助，大吉大利。做官的将会名声显赫，有升迁之机。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。屯其膏，小贞吉，大贞凶。",xiang:"",explanation:`九五：屯积肥肉。筮遇此爻，问小事则吉，问大事则凶。
《象辞》说：“屯积肥肉”，意思是施舍不广。`,shaoYong:"平：得此爻者，谋事者切勿急躁，小事可成，大事无望，甚至会招来凶祸。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。乘马班如，泣血涟如。",xiang:"",explanation:`上六：驾着马车原地回旋，哭泣无声，滴泪涟涟。
《象辞》说：哭泣无声，滴泪涟涟，这种情景怎能长久下去。`,shaoYong:"凶：得此爻者，家道中落，须防损失。做官的须谨防小人的谗言。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:4,name:"蒙",nameFull:"蒙",originalText:"蒙。亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。",xiangCi:"象曰：山下出泉，蒙。君子以果行育德。",explanation:`蒙卦：通泰。不是我有求于幼稚愚昧的人，而是幼稚愚昧的人有求于我。第一次占筮，神灵告诉了他。轻慢不敬的再三占筮，轻慢不敬的占筮，神灵就不会告诉他。但还是吉利的卜问。
《象辞》说：上卦为艮，象征山；下卦为坎，象征泉。山下有泉，泉水喷涌而出，这是蒙卦的卦象。君子观此卦象，取法于一往无前的山泉，从而以果敢坚毅的行动来培养自身的品德。
《断易天机》解
蒙卦艮上坎下，为离宫四世卦。蒙即蒙昧，主回还往复，疑惑不前，多忧愁过失，乃是凶卦。`,shaoYong:`智慧未开，蒙昧闭塞；犹豫不决，缺乏果断。
得此卦者，智慧犹如童蒙，不辨是非，迷失方向；若能顺贤师良友之教，启其聪明则亨通。
台湾国学大儒傅佩荣解
时运：蓄积德行，出而用世。
财运：矿山生意，果决则吉。
家宅：君子居吉；婚姻之始。
身体：驱去邪热，可保平安。
传统解卦
这个卦是异卦（下坎上艮）相叠，艮是山的形象，喻止；坎是水的形象，喻险。卦形为山下有险，仍不停止前进，是为蒙昧，故称蒙卦。但因把握时机，行动切合时宜，因此，具有启蒙和通达的卦象。
大象：蒙者，昏而无所见也，故宜“启蒙”。
运势：初时迷惑不知方向，须忍耐待机而动，凡事多听取别人意见，则运可通。
事业：事业开始，混乱无序，危机四伏，以勇敢坚毅的行动可以扭转局面。然而必须接受严格教育，培养这种奋发图强的精神。务必脚踏实地，最忌好高骛远，否则会陷入孤立无援的境地。
经商：务必小心谨慎，不得急功近利，尤其应树立高尚的商业道德，以良好的信誉提高竞争力而取胜。
求名：必须接受良好的基础教育，陶冶情操。且动机纯正，可以达到目的。
婚恋：注意考察对方品德，不可以金钱为诱铒。夫妻需相互宽容、理解。
决策：有时会陷入迷惘困顿的境地，加上胆小、不果断，往往误事。如能接受长辈的教诲，甚至严酷的考验，抛弃疑惧的心理，等待适当时机，必然一帆风顺。
台湾张铭仁解卦
蒙：表示被蒙蔽不明之意。主小凶象。事情迷蒙不明，不宜轻信于人，此卦易犯小人，需诚心求教于有智慧经验的友人长者，受其启蒙开智慧，方能转危而安。若是一意而行必现大凶象。
解释：被蒙蔽、被欺瞒。
特性：喜欢追求新的知识，过平稳生活，做事谨慎，对下属要求较严，领导统御能力略差。宜防受朋友之拖累蒙蔽。
运势：气运不发，多迷惑。初时不顺，须忍耐待机，渐可佳。切勿贸然行事或为人认保、作保，否则必有损失。凡事宜从上辈教诲，则运可通也。
家运：初时辛苦，上下无法沟通，只要以诚相待，必有开运之时。
疾病：病情不明，反覆难治。为肠胃、腹水之疾及传染病。
胎孕：胎孕无碍。
子女：应注重子女教养，将来方得幸福之象。
周转：困难，防止上当受骗。
买卖：不利，有损失。
等人：可能走错路，会迟到。
寻人：受诱惑而出走，因本身蒙昧无知而受骗。在东北或北方，日前难寻。
失物：遍寻不获。似乎在大门下陷之处遗失，忘记带走，可试问人。
外出：等候有利时机再行动，等待期间应积极做准备。
考试：不理想。
诉讼：因外人引起事端，目下未明，有理讲不清。
求事：未能如愿，再等时机。
改行：改行不宜
开业：开业者不宜。再等一段时间，筹备好资金再做打算。`,yaoCi:[{ci:"初六。发蒙，利用刑人，用说桎梏。以往，吝。",xiang:"",explanation:`初六：启蒙教育，教育学生开发生产，教师用受刑之人作榜样，给犯人脱去手铐脚镣。往前走有困难。
《象辞》说：以刑罚惩治罪人是有利的，可以以此来整肃法纪。`,shaoYong:"凶：得此爻者，多有官诉，亲朋不和，多争斗，终能脱解。做官的为教育之职，或为司法系统之职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。包蒙吉。纳妇吉。子克家。",xiang:"",explanation:`九二：教育包容，这是吉兆。筮遇此爻，娶迎妻子，吉利。男女能相配成家。
《象辞》说：男女相配成家，因为九二、六三两爻相近，表示阴阳刚柔相交会。`,shaoYong:"吉：得此爻者，人情和合，百事有成，或结婚，或生子孙，有财有福。做官的会守住官职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。勿用娶女，见金夫，不有躬。无攸利。",xiang:"",explanation:`六三：不要抢劫女子为婚，会遭到武装者的抵抗，丢掉性命，没有什么好处。
《象辞》说：不能聘娶女子，六三之爻居于九二之上，这是以柔乘刚之象，象征着以女虐男，这是悖逆不顺的。`,shaoYong:"凶：得此爻者，会生是非，小则破财，大则伤身。做官的会因为贪婪而自取其辱。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。困蒙，吝。",xiang:"",explanation:`六四：教育脱困，太可惜。
《象辞》说：为蒙昧无知所困扰，因为离群索居，远离生活。`,shaoYong:"凶：得此爻者，人情淡薄，经营受阻。静无灾，动有损。做官的因为无人赏识而难以晋升。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。童蒙，吉。",xiang:"",explanation:`六五：教育少年儿童，吉利。
《象辞》说：幼稚蒙昧的人之所以吉利，是因为柔顺服从。`,shaoYong:"吉：得此爻者，依附贵人、良师者百事顺遂，谋望可成。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。击蒙。不利为寇，利御寇。",xiang:"",explanation:`上九：教育击打，不应当作匪寇，而要抵御匪寇。
《象辞》说：有利于防御盗寇，因为上九阳爻居于一卦之首，说明臣下顺从拥戴。防御盗寇之举，获得众人支持，必能胜利。`,shaoYong:"平：得此爻者，宜守旧，须谨防争讼，寇盗之扰。做官的会有司寇之名职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:5,name:"需",nameFull:"需",originalText:"需。有孚，光亨，贞吉。利涉大川。",xiangCi:"象曰：云上于天，需；君子以饮食宴乐。",explanation:`需卦：抓到俘虏。大吉大利，吉利的卜问。有利于涉水渡河。
《象辞》说：需的上卦为坎，表示云；下卦为乾，表示天。云浮聚于天上，待时降雨是需卦的卦象。君子观此卦象，可以宴饮安乐，待时而动。
《断易天机》解
需卦坎上乾下，为坤宫游魂卦。需为踌躇、期待，虽然刚强，但前面有险阻，应当等待，涉大川则利。`,shaoYong:`坎陷当前，遇阻不进；大器晚成，收成在后。
得此卦者，时机尚未成熟，需要耐心等待，急进反会见凶。
台湾国学大儒傅佩荣解
时运：时机尚未成熟，耐心等待。
财运：资本未集，无法开张。
家宅：平安是福。
身体：调节饮食，健康有望。
传统解卦
这个卦是异卦（下乾上坎）相叠，下卦是乾，刚健之意；上卦是坎，险陷之意。以刚逢险，宜稳健之妥，不可冒失行动，观时待变，所往一定成功。
大象：云登天上而未雨，不能急进，等待时机之象。
运势：智者必须待时而行，急进反见凶险。
事业：关键在于审时度势，耐心等待，事成于安祥，切勿冒险，欲速不达。自己要充满自信，临危不惧，坚守中正，必可化险为夷。情况有利时，仍得居安思危。
经商：行动之初，情况困难，必须以极大的耐心，创造条件和机会，行事光明磊落，观时待变，实现愿望。事情接近成功时，更应小心谨慎，切莫功亏一篑。
求名：时机尚不成熟，应耐心等待。这时应坚定信念，不为闲言流语所动摇，努力丰富自己，再求助可靠的人便可成功。
婚恋：慎重，切不可草率行事，逐渐培养感情，以诚实、热情相待，会发生变故，仍可以有良好的结局。双方都应懂得以柔克刚的道理。
决策：前途光明，有雄心大志，且可实现。为此需要积蓄实力，等待时机，大器晚成。本人具有坚强的意志，冷静的头脑。前进途中会遇到困难和险阻，必须十分谨慎，坦然对待小人的中伤，在灾祸在面前能镇静自若。不轻举妄动，冷静选择方向。为人谦和、坦率，多有他人相助，促使事业成功。当时机成熟后，必然一帆风顺。
台湾张铭仁解卦
需：表示需要、需求，但却又是时机未到。此卦凶中带吉，需耐心等待，则事情可成。健康方面，要特别注意。
解释：需要等待时机。
特性：谦恭有礼，性格保守，稍被动，但为人诚恳，欲求不高，中晚年才渐入佳境。不利早婚，有宗教艺术兴趣。
运势：宜退守正道，不宜冒险前进，投机急取反而失利。须知贪小失大，智者必须待时也。
家运：初为多事之秋，须凭智慧耐心挽救颓势。
疾病：病情拖延，须留心治疗，为头、胸、肺、泌尿系统等病。
胎孕：临产之时才占卜，表示会有障碍。防克产母。
子女：得子迟。
周转：不能预期而得，有延滞。
买卖：有口舌不可成就，亦勿贪小而失大。
等人：迟到。
寻人：此出走之人因感情之事，在西北或北方。
失物：即时不能寻回，需经过一段时间将会出现。
外出：充分准备齐全后，可平安无事。
考试：要多用功。
诉讼：暂时未能了结，以和为贵。
求事：不宜急取，急亦不得，再等待，再寻求。
改行：不宜。
开业：不宜。`,yaoCi:[{ci:"初九。需于郊，利用恒，无咎。",xiang:"",explanation:`初九：在郊外等侯，应该照旧等待下去，没有危险。
《象辞》说：在郊外等候，是说不能冒险前进。照旧等待下去，没有危险，这是因为待机而动没有违反正常的原则。`,shaoYong:"平：得此爻者，宜守旧，则无灾祸。做官的须守常职，耐心等待机会。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。需于沙，小有言，终吉。",xiang:"",explanation:`九二：在沙地上等待，稍微有过错，最后还是吉利的。
《象辞》说：在沙地上等待，沙地软柔难通行，将有延误事机之失，这过失在自身。虽然稍微有过错，最后的结果还是好的。`,shaoYong:"吉：得此爻者，会受到争诉之扰，若能以宽厚待人，则不辩自明。做官的会受到流言的困扰，但最后吉祥。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。需于泥，致寇至。",xiang:"",explanation:`九三：在泥淖中等待，把强盗招引过来。
《象辞》说：在泥淖中等待，泥淖污秽，环境险恶，灾难就在附近。由自己招致了强盗，但郑重谨慎，随机应变，就可不受损伤。`,shaoYong:"凶：得此爻者，须防止窃盗之患，亦要预防水险。做官的会被贬职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。需于血，出自穴。",xiang:"",explanation:`六四：起初在血泊中滞留，后来从凶险的陷阱中逃脱出来。
《象辞》说：在血泊中滞留，坐等不测的命运降临，六四之爻处在九五之爻的威逼之下，只得顺从强者，听从摆布。`,shaoYong:"平：得此爻者，坏运逐渐远离，恢复平静。做官的能全身而退。从事国学者可出身成名。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。需于酒食，贞吉。",xiang:"",explanation:`九五：在酒宴上等待，这是吉利的占兆。
《象辞》说：有酒有肉，吉利之兆，因为九五之爻处于上卦中位，象征其人有中正的品德，自能择善而居，处优容之境。`,shaoYong:"吉：得此爻者，会物产丰富，衣食不缺，也会有婚嫁之喜。做官的食禄会丰厚。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。入于穴，有不速之客三人来，敬之终吉。",xiang:"",explanation:`上六：进入地穴式的房屋，有三位不速之客来到，恭敬地接待他们，结果是吉利的。
《象辞》说：不速之客来了，恭敬地接待他们，结果是吉利的。因为全卦阳刚过甚，逼压阴柔，但是上六处阴位，位置合适，所以有惊无险，没有大的损失。`,shaoYong:"平：得此爻者，宜谨慎，则忧愁自散。做官的会有升迁之机会，但须防谗邪之流。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:6,name:"讼",nameFull:"讼",originalText:"讼。有孚，窒惕，中吉，终凶。利见大人，不利涉大川。",xiangCi:"象曰：天与水违行，讼。君子以做事谋始。",explanation:`讼卦：虽有利可图(获得俘虏)，但要警惕戒惧。其事中间吉利，后来凶险。占筮得此爻，有利于会见贵族王公，不利于涉水渡河。
《象辞》说：上卦为乾，乾为天；下卦为坎，坎为水，天水隔绝，流向相背，事理乖舛，这是讼卦的卦象。君子观此卦象，以杜绝争讼为意，从而在谋事之初必须慎之又慎。
《断易天机》解
讼卦乾上坎下，为离宫游魂卦。上乾为刚，下坎为险，一方刚强，一方阴险，必然产生争论，因此多有不吉。`,shaoYong:`天高水深，达远不亲；慎谋退守，敬畏无凶。
得此卦者，身心不安，事多不顺，与他人多争诉之事，宜修身养性，谨慎处事。
台湾国学大儒傅佩荣解
时运：功名受阻，不宜树敌。
财运：开始谨慎，终可获利。
家宅：君子必求淑女。
身体：预防胜于治疗。
传统解卦
这个卦是异卦（下坎上乾）相叠。同需卦相反，互为“综卦”。乾为刚健，坎为险陷。刚与险，健与险，彼此反对，定生争讼。争讼非善事，务必慎重戒惧。
大象：乾天升于上，坎水降于下，相背而行而起讼。
运势：事与愿违，凡事不顺，小人加害，宜防陷阱。
事业：起初顺利，有利可图，继而受挫，务必警惕，慎之又慎，不得固执已见，极力避免介入诉讼纠纷的争执之中。与其这样，不如退而让人，求得化解，安于正理，可免除意外之灾。陷入争讼，即使获胜，最后还得失去，得不偿失。
经商：和气生财，吃亏是福，切勿追求不义之财。商业谈判应坚持公正、公平、互利的原则，尽量避免发生冲突。这样便会有好结果。
求名：不利。自己尚缺乏竞争实力，应坚守纯正，隐忍自励，自强自勉，切莫逞强。依靠有地位的人的帮助，及早渡过难关。
婚恋：虽不尽人意，倒也般配，彼此理解，未尝不可。双方应以温和的方式处理生活。
决策：争强好胜，不安于现状，为改变命运和超越他人而奋斗。头脑聪颖，反应敏捷，有贵人相助。但缺乏持之以恒的毅力，容易露出锋芒，得罪他人，带来诉讼之灾。宜承认现实，顺其自然，知足，适可而止。接受教训，引以为戒，可功成名就。
台湾张铭仁解卦
讼：表示诉讼、争端之象。主大凶象。事情冲突到必须见官上法院，可能必须以法律途径来解决了！凡事皆不利，而且已引起很大口舌是非争持，而必须摊牌互相攻击的程度了！
解释：官司缠讼。
特性：不服输，好竞争辩论，反应快，口才佳，易得罪他人，是自立自强之人。
运势：百事闭塞不通，伤害频繁，受中伤而又易陷于奸计，不如意之运也。得饶人处且饶人，得过且过，莫再争讼，否则皆不利也。
家运：家庭内部不和，有口舌争端之害，并有散离之象。
疾病：病情严重，为腰、血液、泌尿系统、头部疾患。
胎孕：生产无惊阻，安也。
子女：父子之间存有歧见，无法沟通之象。子女生来劳碌，与父母缘薄，多辛劳忧苦也。
周转：不得要领，难成。
买卖：因处理不当，有冲突争端，常招损失，不利也。
等人：不会来。就算会来，双方必有争执事情发生。
寻人：此人因争执事由负气出走，并有生命危险，又寻找不易，尽量往西北与北方寻找。
失物：不会出现。
外出：途中多有变故，宜改日出行。
考试：不理想。
诉讼：两败俱伤，宜找中间人调解，久争无益。
求事：难成。
改行：不利。
开业：不宜。`,yaoCi:[{ci:"初六。不永所事，小有言，终吉。",xiang:"",explanation:`初六：做事不能持之以恒，稍有过错，最后还是吉利的。
《象辞》说：做事不能持之以恒，说明官司不可能长久打下去。虽然稍有过错，但争讼双方的是非曲直终将辨别清楚。`,shaoYong:"吉：得此爻者，会生起是非，但终吉。有病者，不药而愈。做官的会遭诽谤，但会不辩自明。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。不克讼，归而逋，其邑人三百户无眚。",xiang:"",explanation:`九二：讼事失败，归到采邑，三百户奴隶逃亡。没有大的灾祸。
《象辞》说：讼事失败，逃窜回家，这是躲避反讼。小官与大官争讼，败讼而归，势在必然。幸好灾难没有进一步扩大。`,shaoYong:"平：得此爻者，平安无事。做官的会有食邑之荣。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。食旧德，贞厉，终吉。或从王事，无成。",xiang:"",explanation:`六三：依赖先人遗业过活。卜问得险兆，但最后是吉利的。但是，如果服务于王事，谋取利禄，却不会成功。
《象辞》说：依赖先人遗业过活，因为六三爻象表明，居于九四之下，只有凭借祖上余荫才获吉利。`,shaoYong:"平：得此爻者，宜保持常态，则无灾难。做官的宜谨守常职，晋升无望。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。不克讼，复即命，渝安贞，吉。",xiang:"",explanation:`九四：讼事失败，败讼回家，服从判决。卜问平安，得吉利之兆。
《象辞》说：败讼回家，服从判决，安守本分，不失正道。`,shaoYong:"吉：得此爻者，会转危为安。做官的会闲中复职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。讼，元吉。",xiang:"",explanation:`九五：争讼，筮遇此爻，大吉大利。
《象辞》说：争讼而大吉大利，因为九五之爻居上卦的中位，像人守中正之道。`,shaoYong:"吉：得此爻者，经营、谋事、求财皆大吉。做官的会受到重用。读书人会获得佳绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。或锡之鞶带，终朝三褫之。",xiang:"",explanation:`上九：王侯赐予人以绅带，但不满一天，三次赐予三次革夺。
《象辞》说：某人因为讼事而得到赐予绅带的殊荣，这不是值得尊敬的事。`,shaoYong:"平：得此爻者，会有争诉之忧，宜修德养身，化大为小。做官的会有成有败，患得患失。读书人认真学习，必可获佳绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:7,name:"师",nameFull:"师",originalText:"师。贞，丈人吉，无咎。",xiangCi:"象曰：地中有水，师。君子以容民畜众。",explanation:`师卦：占问总指挥的军情，没有灾祸。
《象辞》说：下卦为坎，坎为水；上卦为坤，坤为地，像“地中有水”，这是师卦的卦象。君子观此卦象，取法于容纳江河的大地，收容和畜养大众。
《断易天机》解
师卦坤上坎下，为坎宫归魂卦。师即兵众，只有选择德高望重的长者来统率军队，才能吉祥无咎。`,shaoYong:`忧劳动众，变化无穷；公正无私，排除万难。
得此卦者，困难重重，忧心劳众，宜包容别人，艰苦努力，摒除一切困难。
台湾国学大儒傅佩荣解
时运：包容别人，修行待时。
财运：有财有库，善自珍惜。
家宅：旧亲联姻，可喜可贺。
身体：腹胀之症，调气无忧。
传统解卦
这个卦是异卦（下坎上坤）相叠。“师”指军队。坎为水、为险；坤为地、为顺，喻寓兵于农。兵凶战危，用兵乃圣人不得已而为之，但它可以顺利无阻碍地解决矛盾，因为顺乎形势，师出有名，故能化凶为吉。
大象：养兵聚众，出师攻伐之象，彼此有伤，难得安宁。
运势：困难重重，凡事以正规行事，忌独断独行、投机取巧，提防潜在敌人。
事业：阻力很大，困难很多，处于激烈的竞争状态，要与他人密切合作，谨小慎微，行为果断，切忌盲目妄动，适度即可，注意保全自己。机动灵活，严于律已。从容沉着对付一切，必能成功。
经商：已有一定的积蓄，可以从事大的营销活动，但必卷入激烈商战，以刚毅顽强的精神和高尚的商业道德，辅以灵活的方法，勿贪图小利，勿掉以轻心，加强与他人的沟通，必可摆脱困境，化险为夷。
求名：具备很好的条件，但须有正确的引导，务必严格要求自己，克服不利因素的干扰，经过扎实努力，必可名利双全。
婚恋：慎重、专注，否则会陷入“三角”纠纷。痴情追求可以达到目的。
决策：天资聪颖，性格灵活，具有坚强的意志，对事业执着追求，迎难而进。可成就大事业。喜竞争，善争辩，富有冒险精神，不免带来麻烦，务老成持重，不贪功，以中正为要。
台湾张铭仁解卦
师：表示军队打仗强烈抗争之意。师亦为「师长、老师」，是为强烈教训的现象，若在事、在人，均表示会受到很大教训、挫折。或是与人结怨甚深而遭到其强力的打击、迫害。
解释：要师出有名。
特性：讲求实力，具有毅力，不怕困难，挑战艰巨任务，虽然时常会遇到逆境，都能一一化解克服，赢得他人的赞许。
运势：事虽有不顺、但要引以为镜，记取教训。不要图私利而投机取巧。凡事应以正规而行，事物多变动，切忌独立而行。困难多端，靠自己努力，摒除一切困难为上策。
家运：外柔顺而内险恶，故家内常生不和，需慎重处理。行正道可化险为安。
疾病：病况严重，提防心脏或腹腔肿瘤等。
胎孕：喜中有忧。或有不安或不孕。
子女：大出息之象。
周转：无望，另觅别处。
买卖：有阻，不太顺意，寅午戌日交易可成。
等人：来者不善。
寻人：此人因家内失和而出走，速往北方或西南找，否则有危险。
失物：不会出现，即或寻回，也已损坏。
外出：“行险而顺”。虽有可能遇到麻烦，但结果一定十分顺利，可放心出行。
考试：很认真，但不理想，继续努力终有成就。
诉讼：宜进不宜退，内心虽忧，但得贵人之助。
求事：独立无望，有人扶持则可。
改行：不宜。
开业：须待时机行事，勿过急。`,yaoCi:[{ci:"初六。师出以律，否臧凶。",xiang:"",explanation:`初六：整军出战全凭纪律，不遵守纪律就会有凶险。
《象辞》说：整军出战全凭纪律，失去纪律的约束就会带来凶险。`,shaoYong:"凶：得此爻者，经营得当，则财货日增。但妄动者，成少败多。不良者，多险难刑伤。做官的宜谨守正道，则会得到上级的欣赏。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。在师中，吉无咎，王三锡命。",xiang:"",explanation:`九二：主帅身在军中指挥，吉利，没有灾难。君王三次颁命嘉奖。
《象辞》说：主帅身在军中指挥，吉利，因为得到上天的宠爱。君王三次颁命嘉奖，因为主帅能怀徕万国。`,shaoYong:"吉：得此爻者，会遇到贵人，谋事可成。做官的会受到上级的赏识，有升迁之机会。读书人会取得佳绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。师或舆尸，凶。",xiang:"",explanation:`六三：军队出征，有人载尸而归，这是凶险之兆。
《象辞》说：军队出征，有人载尸而归，这是前方吃了败仗。`,shaoYong:"凶：得此爻者，多有悲优，或家中亲人病故。做官的会受职待缺。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。师左次，无咎。",xiang:"",explanation:`六四：军队在左边扎营，没有危险。
《象辞》说：军队在左边扎营，没有危险，因为军队驻扎或左或右，唯视地理环境、敌我形势而定，并没有违背行军常道。`,shaoYong:"平：得此爻者，安居乐业，无妄动之灾。做官的官运不济，不宜妄想。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。田有禽，利执言，无咎。长子帅师，弟子舆尸，贞凶。",xiang:"",explanation:`六五：打猎时获得猎物，作战中捕获俘虏，没有灾祸。长子指挥军队，次子战败阵亡，这是凶险的贞兆。
《象辞》说：以长子指挥军队，这是依正道行事。次子战败阵亡，这是因为差遣不当。`,shaoYong:"平：得此爻者，财富日增，若用人得当，则谋望可成，但须谨防小人之危。做官的或有实权，或因为谏言而地位高显。读书人会取得佳绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。大君有命，开国承家，小人勿用。",xiang:"",explanation:`上六：国君颁发命令，有人被封为诸侯，享有封国，有人被封为大夫，享有采邑。但是不要重用无才无德的小人。
《象辞》说：国君颁发封赏功臣的命令，这是论功行赏。不要重用无才无德的小人，因为小人必定覆国乱邦。`,shaoYong:"平：得此爻者，可立家计，或继承家业，但谨防小人从中作梗。做官的会当权立功。专业人才则会技艺成名。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:8,name:"比",nameFull:"比",originalText:"比。吉。原筮，元永贞，无咎。不宁方来，后夫凶。",xiangCi:"象曰：地上有水，比。先王以建万国，亲诸侯。",explanation:`比卦：吉利。同时再卜筮，仍然大吉大利。卜问长时期的吉凶，也没有灾祸。不愿臣服的邦国来朝，迟迟不来者有难。
《象辞》说：下卦为坤，上卦为坎，坤为地，坎为水，像地上有水，这是比卦的卦象。先王观此卦象，取法于水附大地，地纳江河之象，封建万国，亲近诸侯。
《断易天机》解
比卦坎上坤下，为坤宫归魂卦。比为相亲相依附之意，长期如此，就会无咎，所以吉祥。`,shaoYong:`水行地上，亲比欢乐；人情亲顺，百事无忧。
得此卦者，可获朋友之助，众人之力，谋事有成，荣显之极。
台湾国学大儒傅佩荣解
时运：众人相贺，荣显之极。
财运：善人相扶，大发利市。
家宅：百年好合。
身体：心腹水肿，宜早求治。
传统解卦
这个卦是异卦（下坤上坎）相叠，坤为地，坎为水。水附大地，地纳河海，相互依赖，亲密无间。此卦与师卦完全相反，互为综卦。它阐述的是相亲相辅，宽宏无私，精诚团结的道理。
大象：一阳统五阴，比邻相亲相辅，和乐之象。
运势：平顺，可得贵人提拔，凡事宜速战速决，不可过份迟疑。
事业：顺利能够成功，向前发展，可以得到他人的帮助和辅佐，以诚实、信任的态度去做事。待人宽厚、正直，主动热情，向才德高尚的人士学习，听取建议。
经商：愿望能够实现，且有较丰厚的利润，但需要与他人密切合作，真诚交往，讲究商业道德，遵守信义，如唯利是图，贪心不足，或自以为是，会导致严重损失。
求名：有成功的希望，不仅要靠个人的努力，更为重要的是他人的赏识和栽培。
婚恋：美好姻缘，相亲相爱，彼此忠诚，白头到老。
决策：心地善良，待人忠诚、厚道，乐于帮助他人，也能得到回报。工作勤恳，对自己要求严格，可以实现自己的理想，但要多动脑筋，多思考，善于判断是非，尤其要注意选择朋友，一旦结上品行不端的人，会成为自己的祸患。如果与比自己高明的人交朋友，并取得帮助，会终身受益。
台湾张铭仁解卦
比：表示兄友比肩而站，一片融合互持、比和之意。主吉象。水溶入土中，胶和在一起，是个很亲密的卦象，尤其是论男女之情。事业投资有亲密的伙伴相助，共同扶持打拼，事事当然顺利进行。
解释：平等、比合。
特性：勤劳，认真，善良，谦恭，务实，踏实，重生活享受。异性缘多，感情烦恼也多。
运势：平顺可得贵人提拔，凡事宜速战速决，不可过份迟疑。
家运：合家和乐，家运亨通。
疾病：新病宜速就医，久病则危，为腹、肾、耳等疾。
胎孕：孕安。
子女：儿女温顺且侍亲至孝，亲情融合之象。
周转：必成、找同年之兄弟、朋友可成。
买卖：莫太贪心。交易反覆难成，勿贪则有利可成。
等人：会来。
寻人：不在杏花处，则是有妇人相留，不可寻，恐生不测之祸。此人会自己回来。
失物：不会再现。通常均已遭损毁。
外出：旅途平安，一路顺风。
考试：金榜题名。
诉讼：宜以和解态度面对，虽小人多，但可胜诉。
求事：有贵人帮助，可成。
改行：有利，可得友人支持。
开业：可大发利市，但须注意有人背叛。`,yaoCi:[{ci:"初六。有孚比之，无咎。有孚盈缶，终来有它吉。",xiang:"",explanation:`初六：捕获俘虏，安抚他们，没有灾难。捕获俘虏，满盆满罐的酒饭招待他们。虽然可能有意外之患，但最后是吉利的。
《象辞》说：筮遇初六之爻，虽有意外之患，但最后是吉利的。`,shaoYong:"吉：得此爻者，会遇到知己，谋事称心如意。做官的会有意外之喜。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。比之自内，贞吉。",xiang:"",explanation:`六二：内部和睦团结，卜问得吉兆。
《象辞》说：内部和睦团结，就不会失掉民心。`,shaoYong:"吉：得此爻者，得贵人之助，营谋遂意。做官的会无过失，安然而吉亨。读书人或能成名。女命则会得贤夫。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。比之匪人。",xiang:"",explanation:`六三：跟败类狼狈为奸。
《象辞》说：跟败类狼狈为奸，不是很可悲吗？`,shaoYong:"凶：得此爻者，交友不慎，或有争诉，破财刑伤。做官的要谨防同僚不睦而造成不顺。女子则所嫁并非良人，破家丧身之象，不然则会争诉破财。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。外比之，贞吉。",xiang:"",explanation:`六四：跟外邦联盟亲善，卜问得吉兆。
《象辞》说：外部亲附于贤明的国君，像臣下服从君上。`,shaoYong:"吉：得此爻者，出外有利，多得知己之力，事事顺利。做官的会有升迁之喜。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。显比，王用三驱，失前禽。邑人不诫，吉。",xiang:"",explanation:`九五：普遍的和洽。君王采用三面包围的方法狩猎，网开一面，有意放走逃奔的野兽。老百姓对君王狩猎毫不惊惧。筮遇此爻吉利。
《象辞》说：普遍的和洽是吉利的，因为九五之爻处于上卦中位，像人守中正之道。放走向前奔逃的，猎取迎面奔窜的，这就是“失前禽”的缘故。老百姓对君王狩猎毫不惊惧，因为君王平时行事端正。`,shaoYong:"吉：得此爻者，会先逆后顺，谋事有成，无往不利。做官的会有大的荣耀。读书人会考的佳绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。比之无首，凶。",xiang:"",explanation:`上六：小人朋比为奸，勾心斗角，无法形成一个团结的中心，这是非常危险的事。
《象辞》说：小人朋比为奸，勾心斗角，无法形成一个团结的中心，当然没有好下场。`,shaoYong:"凶：得此爻者，刑克有灾，人情淡薄，甚者恐有性命之忧。做官的会失去下属的支持，处境危难。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:9,name:"小畜",nameFull:"小畜",originalText:"小畜。亨。密云不雨，自我西郊。",xiangCi:"象曰：风行天上，小畜。君子以懿文德。",explanation:`小畜卦：吉利。在西郊一带浓云密布，但雨没有下来。
《象辞》说：上卦为巽，巽为风；下卦为乾，乾为天，和风拂地，草木低昂，勃勃滋生，这是小畜的卦象。君子观此卦象，取法催发万物的和风，自励风范，推行德教。
《断易天机》解
小畜卦巽上乾下，为巽宫初世卦。小畜为小的蓄积、小的阻碍，阳盛而阴不足，以致不得不暂时停顿，但终究还能亨通。`,shaoYong:`力量寡弱，阻止前进；藏器待时，耐心推进。
得此卦者，力量薄弱，运势反覆，宜蓄养实力，静待时机，急进则有险，凡事须耐心推进。
台湾国学大儒傅佩荣解
时运：平平无奇，受人牵制。
财运：外表不错，内多耗损。
家宅：小康，须防口舌；娶得淑女。
身体：风火之症；小孩吉，大人凶。
传统解卦
这个卦是异卦（下乾上巽）相叠，乾为天，巽为风。喻风调雨顺，谷物滋长，故卦名小畜（蓄）。力量有限，须待发展到一定程度，才可大有作为。
大象：蓄养之量有限，力不从心，故宜忍耐蓄养实力，静待时机。
运势：运势反覆，有口舌之争，但难于短期内解决，须忍耐，静待时机。
事业：时机尚不成熟，应当耐心而积极地积存力量，切不可冒险行动。遇到挫折不可灰心，鼓起勇气战胜困难，坚持原则，加强团结合作，提前做好各项准备，会有所成。
经商：已有一定的基础，但有失去危险，一定要特别慎重，争取与他人真诚合作，共同获利，决不贪心，适可而止，但更不能满足现状，不图进取。
求名：树立远大目标，尽最大努力去争取，虚心求教他人，取得真诚帮助，实现自己的理想，警惕小人的破坏。
婚恋：双方必须十分忠诚，第三者插足的现象极有可能发生。
决策：不很顺利，前进途中会遇到一些意想不到的困难。但由于本人性格坚强，具有战胜不利条件的意志。因此，可以实理自己的理想。但极有可能遭到小人的伤害，必须得到志同道合者的真诚相助，才能可能排除障碍。对所得应满足，适可而止，切不可过度追求，以免满招损。
台湾张铭仁解卦
小畜：表示小有积蓄。是个小吉卦，事事不可贪大，投资理财均需保守为佳。健康无碍，平顺。
解释：稍有积蓄。
特性：上进心，求知欲强，思想灵敏，察言观色，善解人意，追求精神层次??，美好事物。有艺术美学方面天分。
运势：有蓄聚、阻止之意。 一阴畜五阳，虽有云雨而不下，雨之不下，大地不能得到滋润，故此运势有反覆、有口舌、又难以急调，诸事宜忍耐，等待时机。尤其女人得此卦更应在行为上，对事或对人有所节制。
家运：不和且多是非，衰而不振，多劳，要耐心应对，以待时机。雨过天必晴。
疾病：危，重病，注意肝胆，头部病变。
胎孕：宜防流产。
子女：因子女而劳碌之象，但晚年有福也。
周转：有女人从中阻碍，不成也。
买卖：景气不好，买卖难成或利薄。
等人：不会来，临时变卦。
寻人：因感情或家庭不和出走，只在原处。东南或西北之向。
失物：似乎遗失的是金器或现金支票等物，有被硬物夹住，或者第三格的地方。
外出：准备尚未充分，不得仓促出行，尤其忌长途旅行，会有意外的灾害。应另择他日外出。
考试：不理想。
诉讼：会因证据不足而败诉。
求事：希望渺小。
改行：不宜。
开业：不宜，已开业者则困难、口舌多。`,yaoCi:[{ci:"初九。复自道，何其咎？吉。",xiang:"",explanation:`初九：由原路返回，有什么灾祸？吉利。
《象辞》说：由原路返回，其含义是吉利。`,shaoYong:"平：得此爻者，宜守旧业，不宜创新。谋事者，须防猜忌疑惑之祸。做官的会闲位复职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。牵复，吉。",xiang:"",explanation:`九二：牵引着返回，吉利。
《象辞》说：牵引着返回，吉利，因为九二之爻处于下卦中位，像人操行中正，自然不会有错失。`,shaoYong:"吉：得此爻者，有人相助，营谋遂意。做官的有升迁之机会。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。舆说辐，夫妻反目。",xiang:"",explanation:`九三：车子坏了一个轮子。夫妻互相口角。
《象辞》说：夫妻口角，说明不能治理家庭。`,shaoYong:"凶：得此爻者，荣而见辱，进而见退，或有足目之疾，或夫妻反目，或君臣疏远，或朋友是非，血气损伤。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。有孚，血去惕出，无咎。",xiang:"",explanation:`六四：捕获了俘虏，战争危险暂时消除了，但仍须保持警惕，才能没有灾难。
《象辞》说：捕获了俘虏，保持着警惕，说明尚能统一意志。`,shaoYong:"平：得此爻者，心诚者，人情和合，营谋颇遂。做官的会得到上司的提拔，久任者，能转运。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。有孚挛如，富以其邻。",xiang:"",explanation:`九五：捕获俘虏，串连搁缚，这些财物与邻邑同享。
《象辞》说：捕获俘虏，串连捆缚，财物与邻邑同享，并非一人独享。`,shaoYong:"吉：得此爻者，能得到他人的帮助，百谋称心。做官的会得到上级的赏识，下属的拥戴，德高望重。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。既雨既处，尚德载。妇贞厉。月几望，君子征凶。",xiang:"",explanation:`上九：久雨新停，还赶得上栽种作物。妇女占得此爻则凶险。夏历某月十四日君子离家出行也有危险。
《象辞》说：久雨新停，未误农时，当能丰登满载。君子离家出行有凶险，因为对充满危险的旅途缺乏了解。`,shaoYong:"平：得此爻者，会受到小人的骚扰，宜修德养身，不妄进者，则可免灾。妇女占得此爻则凶，君子离家出行有凶险。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:10,name:"履",nameFull:"履",originalText:"履。履虎尾，不咥人，亨。",xiangCi:"象曰：上天下泽，履。君子以辨上下，定民志。",explanation:`履卦：踩着虎尾巴，老虎不咬人，吉利。
《象辞》说：本卦上卦为乾，为天，下卦为兑，为泽，上天下泽，尊卑显别，这是履卦的卦象。君子观此卦象，从而分别上下尊卑，使人民循规蹈矩，安份守纪。
《断易天机》解
履卦乾上兑下，为艮宫五世卦。履为履行之意，又寓意礼，提示占筮者要兢兢戒惧，遵守礼节，这样才有惊无险。`,shaoYong:`步履不安，困难危险；谦虚自重，敬慎事主。
得此卦者，困难时期，多坎坷不顺，万事不宜急进，须循序渐进，谨慎行事。
台湾国学大儒傅佩荣解
时运：依序升进，不可攀缘。
财运：明察货品，待时而售。
家宅：门庭严整。
身体：疏通气血。
传统解卦
这个卦是异卦（下兑上乾）相叠，乾为天，兑为泽，以天喻君，以泽喻民，原文：“履（踩）虎尾，不咥（咬）人”。因此，结果吉利。君上民下，各得其位。兑柔遇乾刚，所履危。履意为实践，卦义是脚踏实地的向前进取的意思。
大象：柔弱遇刚强，欲行却难行之象，难且危也。
运势：先劳而后逸，始惊而后安，百事不宜急进，须以和待人，有惊无险。
事业：起初很不顺利，受到种种威胁，若能提高警惕，谨小慎微，脚踏实地，逐个地去克服困难，不改变自己的决心，一定可以达到目的。办事有自知之明，务必量力而行，不可不顾实际，尤其不得逞强，急于求成。
经商：宜待观动静，勿为小利而动摇自己计划，尤其不得贪得无厌，遵循商业道德，了解全面信息。
求名：务必有恒心，孜孜以求，不为财富利诱，不为世俗干扰，坚持自己的志向和理想，可以取得成功。
婚恋：双方安贫乐道，可和睦相处，若一方为富贵所动，会发生婚变。
决策：诸事必须小心慎重，不利的情况经常会出现，但若能处理得好，总会是有惊无险，化险为夷。为此，办事必须认认真真，遵循正道，虚心听取别人的建议，量力而行，切莫自负逞强，一定会有好的结果。
台湾张铭仁解卦
履：表示战战兢兢、如履薄冰而行，却是有惊无险。为小凶带吉之象。 履又为「礼」也。 得此卦者，需尽快反省自己的态度，对人、对事、对长辈是否有轻忽、不敬之意。虽有危急之事幸好能平安度过。
解释：只要履行契约承诺则吉。
特性：竞争，积极，冒险，热枕，独立，自立自强，有骨气。
运势：先劳而后逸，始惊而后安，百事不宜急进，须以和待人，有惊无险。
家运：新婚而刚建立家庭者，多碍、劳苦。但此卦有先苦后甜之象，和气可生财，过些时日即可雨过天晴也。
疾病：病虽重，但注意调理亦可愈，防头、口、肺等疾。
胎孕：临盆产妇占得则吉，否则有受惊吓之象，需安胎。
子女：初运有劳苦，障碍、困难之象，但以后能获得幸福也。
周转：虽有些困难，但不必急躁，谦恭而施则可成也。
买卖：虽有是非但终可成，牛马猴之月或日方成。
等人：迟来。
寻人：走失之人有生命危险，在西方或西北方向，难寻，须争取时效。申未日可见。
失物：赶快去找有可能寻回，留意行过的路上，或者有鞋的地方。
外出：有惊无险，可以外出，但非紧急情况可以缓行。
考试：不理想。
诉讼：敌强而我弱之象，宜步步为营。
求事：有贵人提拔，可发展，称心。
改行：不宜。
开业：不宜。`,yaoCi:[{ci:"初九。素履，往无咎。",xiang:"",explanation:`初九：以朴素坦白的态度处世，没有灾害。
《象辞》说：以朴素坦白的态度处世，是说能独行其志愿。`,shaoYong:"平：得此爻者，营谋有计，则财利日增。做官的若修德养身，则有升迁之机。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。履道坦坦，幽人贞吉。",xiang:"",explanation:`九二：行道之人，胸怀坦荡；隐居之人，长逢吉兆。
《象辞》说：隐居之人洁身守正，因为他们秉性中正，不被世俗所惑。`,shaoYong:"平：得此爻者，安然自乐，修身养性。做官的会有全身而退之兆。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。眇能视，跛能履。履虎尾，咥人，凶。武人为于大君。",xiang:"",explanation:`六三：瞎了眼睛却要看物，跛了脚却要行走，这是勉为其难，犹如踩着虎尾巴，终将为虎所伤。这是凶险之事。武人纂夺国政，同样是凶险之事。
《象辞》说：瞎了眼睛却要看物，其视力不足以辨物。跛了脚却要行走，其脚力不足以行路。老虎之所以伤人，因为六三阴爻而居于阳位，所处不当。武人纂夺国政，这是僭越犯上，以六三之位而行九五之志，必遭祸殃。`,shaoYong:"凶：得此爻者，会有争诉，囚狱之扰，甚者家破人亡。做官的则会有被贬职之祸。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。履虎尾，愬愬，终吉。",xiang:"",explanation:`九四：踩着虎尾巴，但能遇险知惧，最后仍吉利。
《象辞》说：恐惧警惕，终归于吉，说明虽历磨难，但志愿得行。`,shaoYong:"平：得此爻者，会有危险，宜温和自持，可免灾祸。做官的会有虎符将帅之兆。读书人将会取得不错的佳绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。夬履，贞厉。",xiang:"",explanation:`九五：行为急躁莽撞；卜其行事有危险之象。
《象辞》说：行为急躁莽撞，卜其行事有危险之象，但九五阳爻居上卦中位，正当其位。因而虽险不凶。`,shaoYong:"凶：得此爻者，躁动妄行者，则祸患将至，甚者有性命之忧。做官的会功高盖主，而不赏。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。视履考祥，其旋元吉。",xiang:"",explanation:`上九：行为审慎，遇事周密反复地考虑，大吉。
《象辞》说：大吉大利，因为上九之爻居全卦之首。预兆其人将有重大喜庆之事。`,shaoYong:"吉：得此爻者，财利可获。做官的宜退而以享安静和平之福。读书人努力者可获佳绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:11,name:"泰",nameFull:"泰",originalText:"泰。小往大来，吉亨。",xiangCi:"象曰：天地交，泰。后以财（裁）成天地之道，辅相天地之宜，以左右民。",explanation:`泰卦：由小而大，由微而盛，吉利，亨通。
《象辞》说：天地交感，是泰卦的卦象。君子观此卦象，裁度天地运行的规律，辅助天地的造化，从而支配天下万民。
《断易天机》解
泰卦坤上乾下，为坤宫三世卦。此卦所失者小，所得者大，若是占得此卦，将会失小而得大。`,shaoYong:`小往大来，通泰吉祥；泰极转否，事宜固守。
得此卦者，否极泰来，鸿运当头，诸事皆顺，但须防乐极生悲。
台湾国学大儒傅佩荣解
时运：一切顺利，居安思危。
财运：买卖均宜，买入较佳。
家宅：盛但须防衰，婚嫁大吉。
身体：运动合宜。
传统解卦
这个卦是异卦（下乾上坤）相叠，乾为天，为阳；坤为地，为阴，阴阳交感，上下互通，天地相交，万物纷纭。反之则凶，万事万物，皆对立，转化，盛极必衰，衰而转盛，故应时而变者泰（通）。
大象：天地阴阳之气相交感，上下和睦，流通无阻。
运势：诸事吉祥顺利，凡事宜内求，不宜外求，防乐极生悲。
事业：坚持由小而大，循序渐进的原则，事业已达到顺利的境地，更应小心从事，居安思危，积极寻求、开拓新的事业，方可继续前进，若因循守旧，不思进取，必遭失败。
经商：顺利。务必注意市场动向，开拓新的领域，展开新的竞争。为此，要密切与他人进行合作，争取各方面的帮助，但需谦虚谨慎，警惕巧言令色的小人。
求名：具有成功的条件，但一定得更加努力，刻苦追求，最忌聪明反被聪明误。
婚恋：美满姻缘。谈恋爱却不可不认真对待。
决策：吉祥如意。适应能力强，各项事业能成功。能谋善断，长于人际关系，能团结他人共创业绩，灵活机动，很能适应形势的变化，不断向新的领域迈进。但在人生途中必须兢兢业业，尤其不可麻痹大意，在择朋选友方面更应慎重，切防小人倒运。
台湾张铭仁解卦
泰：表示三阳开泰，万事亨通。吉卦之象，诸事皆顺。
解释：否极泰来，鸿运当头。
特性：交游广泛，包容性大，有雅量，个性开朗，乐观，积极，主动。又能接受他人意见，心胸开阔。
运势：诸事如意吉祥，前途事业均顺利。切不可骄傲或任意从事，亦宜自惕勿太活跃，始能免于灾难。凡事宜求内在之实，不求外在之虚，否则有破。
家运：家庭和合，有通亨之象，凡事宜检点得失，不可胡为，否则招灾不利。
疾病：久病不利，注意肠肺及头部之症。
胎孕：生贵子。安而无灾。生女亦均无碍。
子女：亲子和睦，幸福圆满。留心教养，勿使太任性，否则沦于不幸之破运。
周转：可成。
买卖：交易有益，得利。
等人：会来。
寻人：在朋友或亲戚家里，有信息也。可寻。
失物：不会出现。
外出：一帆风顺。
考试：上榜有望，宜再努力勿懈。
诉讼：是非由小事化大，终可和解。
求事：吉利亨通。
改行：吉。
开业：开业者吉利之象。`,yaoCi:[{ci:"初九。拔茅茹，以其汇，征吉。",xiang:"",explanation:`初九：连根拨掉茅草，及其同类。征伐敌人，吉利。
《象辞》说：连根拔掉茅草，彻底征服敌人，吉利，说明志在讨伐敌国。`,shaoYong:"吉：得此爻者，志同合谋，财利日增。做官的会逐步升迁。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。包荒，用冯河，不遐遗，朋亡，得尚于中行。",xiang:"",explanation:`九二：用挖空的瓠瓜绑在身上渡河，不至于沉没。钱币丢失了，在半路上得到别人的帮助。
《象辞》说：其人度量弘大，深得同路人的赏识，这是由于他光明正大呀。`,shaoYong:"吉：得此爻者，会有好运，必遇尊贵，但要防长上有损，言语有伤。做官的会身居高位，功名显达。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。无平不陂，无往不复。艰贞无咎。勿恤其孚，于食有福。",xiang:"",explanation:`九三：平地终将变成坡地，离去必定复返。卜问艰难之事，爻象显示必能渡过难关，不要担心被人虏去，而且在饮食上尚有口福。
《象辞》说：离去必定复返，这是天地间的法则。`,shaoYong:"平：得此爻者，须谨慎自持，宜保守，则安，不然会犯小人，事事遇阻。做官的会比较艰难，须防小人和别人的妒忌。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。翩翩不富，以其邻，不戒以孚。",xiang:"",explanation:`六四：巧言欺人，将给邻邑带来灾难；不加警戒，即将遇难被虏。
《象辞》说：巧言欺人，祸及邻人，是说同受损失。不加警戒，遇难被虏，这是因为心地太忠厚了。`,shaoYong:"平：得此爻者，营谋失利，退守可平安。做官的进取难成，宜退守。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。帝乙归妹，以祉元吉。",xiang:"",explanation:`六五：殷帝乙嫁女于周文王，因而得福，大吉大利。
《象辞》说：得福大吉，因为六五之爻居上卦中位，像人行事得中正之道，所行必遂。`,shaoYong:"吉：得此爻者，会得到别人的赏识和抬举，或结婚生子，幸福安乐。做官的或能升迁，或有喜事。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。城复于隍，勿用师。自邑告命，贞吝。",xiang:"",explanation:`上六：城墙攻破倒塌在护城濠里。“停止进攻”，从邑中传来命令。卜问得不祥之兆。
《象辞》说：城墙攻破倒塌在护城濠里（本应乘势攻击，反命停止进攻），这是邑中传来的命令错乱了。`,shaoYong:"凶：得此爻者，会有破损，有疾病，谨慎厚道者可免祸。做官的会被贬职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:12,name:"否",nameFull:"否",originalText:"否。否之匪人。不利君子贞。大往小来。",xiangCi:"象曰：天地不交，否。君子以俭德辟难，不可荣以禄。",explanation:`否卦：为小人所隔阂，这是不利于君子的占卜，事业也将由盛转衰。
《象辞》说：天地隔阂不能交感，万物咽窒不能畅釜，这是否卦的卦象。君子观此卦象，从而在国家政治否塞之时，应思隐居不仕，以崇尚俭约来躲避灾难，不要以利禄为荣。
《断易天机》解
否卦乾上坤下，为乾宫三世卦。否象征闭塞不通，是不吉之兆。否卦中，阴阳不交，是一切都不和谐之象。`,shaoYong:`大往小来，闭塞不通；否极泰来，修德避难。
得此卦者，万物闭塞之象，上下不合，诸事不顺，凡事宜忍，须待时运好转而有为。
台湾国学大儒傅佩荣解
时运：诸事不顺，不可妄动。
财运：适宜买入，后可获利。
家宅：勤俭免祸；仳离之象。
身体：气血不通，节制饮食。
传统解卦
这个卦是异卦（下坤上乾）相叠，其结构同泰卦相反，系阳气上升，阴气下降，天地不交，万物不通。它们彼此为“综卦”，表明泰极而否，否极泰来，互为因果。
大象：天气上升，地气下降，天地之气不交，主闭塞不通。
运势：上下不和，百事不通，凡事宜忍，须知否极泰来。
事业：陷入逆境，事业处于衰退阶段，多有不顺利。受小人干扰而不得志，多挫折。应坚持正道，勿与小人合流，团结志同道合者，自保以等待时机。保持自信心，戒慎恐惧，形势定会好转，事业终能成功。
经商：遇到强大的竞争对手，处于不利地位，信息不灵造成重大损失。应格外小心谨慎，坚持守势，等待有利时机到来，再努力发展自己的事业。
求名：条件还不成熟，再努力一阵子，并得到他人的帮助，理想可以实现。
婚恋：容易出现节外生枝的事情，甚至发生挫折和变故，双方若都充满信心，好的结果会出现。
决策：本人聪慧，精明，勤奋努力，但不注意人际关系，加上小人的排斥，命运或遭厄运。意志坚强，具有奋斗精神，且克服了不足，尽管付出的代价很高，必能成全事业。
台湾张铭仁解卦
否：表示不好、坏掉了！ 主凶象。否显现出阴阳之气不协调，在人及事方面诸多不被认同，有内外不合、众说纷纭的现象，因此事事难以进行，最好此时能彼此互相退让静下心来理性的沟通，方能转吉。婚姻、感情，已有个性、意见的冲突产生，若不能好好退让协商，恐有离异分手的结局。
解释：处在困境中。
特性：自尊心强，个性刚烈，不服输，反应快，学习能力强，高傲不亦亲近。财运佳，有领导才能，与上司不易相处。
运势：凶且衰，君子以险德避难，不可荣以禄也。运势不通达，诸事不顺，有损失且波折多。故宜守固正道，若稍偏差，则灾害至也。
家运：夫妻彼此不能协调，是非很多，劫财又带衰，慎之。
疾病：占病为凶兆，病在脑、肺及肠胃等，慎防癌症。
胎孕：不安。
子女：与双亲感情不睦，任其自然发展吧。
周转：告贷无门。
买卖：多有损失，但有贵人应在午未申日。
等人：不会来，因别的事情而违约。
寻人：因感情不睦而出走，去向不明，难寻。东南方。
失物：寻不回。
外出：会遇到不少麻烦和困难，宜推迟或提前行动。
考试：不理想。
诉讼：各走极端，有口难言，宜及时求和。
求事：先难后易，须有耐心去争取胜利，否则凶。
改行：难如愿。
开业：最好另择吉日。然此卦有先难之困，若能舒之则利。`,yaoCi:[{ci:"初六。拔茅茹，以其汇，贞吉，亨。",xiang:"",explanation:`初六：连根拔掉茅草，及其同类，占得此爻则吉利，亨通。
《象辞》说：连根拔掉茅草，占得此爻吉利，比喻其志在清理君侧，为国尽忠。`,shaoYong:"平：得此爻者，宜守旧，小人得势之时，爻辞虽好，但须谨防小人牵连之事。做官的受职者待缺，当权者防扰。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。包承，小人吉；大人否，亨。",xiang:"",explanation:`六二：厨中有肉，这对老百姓来说是吉利，对贵族来说并不是通泰的表现。
《象辞》说：贵族身处窘境，则能心怀惩戒，使其安守本分。`,shaoYong:"平：得此爻者，宜忍耐，宽容待人，不然会生是非。做官的宜低调行事。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。包羞。",xiang:"",explanation:`六三：厨中有美味。
《象辞》说：心怀羞愧，因为才德不称其位。`,shaoYong:"凶：得此爻者，须防是非争诉之扰。做官的会退休离职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。有命无咎，畴离祉。",xiang:"",explanation:`九四：君王有赏赐之命，没有灾害，谁能得到赏赐呢?
《象辞》说：君王有赏赐之命，没有灾害，说明君王论功行赏，臣下尽职效力，各行其志。`,shaoYong:"吉：得此爻者，家产日增，吉庆安乐。做官的会得到朋友和同僚之助，或升迁，或进财。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。休否，大人吉；其亡其亡，系于苞桑。",xiang:"",explanation:`九五：警戒覆亡，贵族王公如此存心则吉利。危险呵，危险，国家命运好像系在柔弱的苞草、桑枝上一样。
《象辞》说：九五爻辞讲贵族王公安不忘危，则吉利。因为九五之爻居上卦中位，像其人忧国忧君，才德正当其位。`,shaoYong:"吉：得此爻者，旧祸已去，好运将至，诸事皆吉。做官的会身居重位。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。倾否，先否后喜。",xiang:"",explanation:`上九：短暂的恶运，先遇恶运后交好运。
《象辞》说：恶运快终了，好运岂迢遥。命运交变之际，什么力量可以制止呢？`,shaoYong:"平：得此爻者，将会转好运，久困者利可期，久讼者讼事解。做官的失职者复职，闲缺者会走马上任。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:13,name:"同人",nameFull:"同人",originalText:"同人。同人于野，亨。利涉大川，利君子贞。",xiangCi:"象曰：天与火，同人；君子以类族辨物。",explanation:`同人卦：聚众于郊外，将行大事，吉利。有利于涉水渡河，有利于君子的卜问。
《象辞》说：同人之卦，上卦为乾为天为君王，下卦为离为火为臣民，上乾下离象征君王上情下达，臣民下情上达，君臣意志和同，这是同人的卦象。君子观此卦象，取法于火，明烛天地，照亮幽隐，从而去分析物类，辨明情状。
《断易天机》解
同人卦乾上离下，为离宫归魂卦。同人卦象征交结情深，两人契义，同心断金。主所求皆得，事事称心。`,shaoYong:`人类相亲，与人和同；所求皆得，无不称心。
得此卦者，吉祥如意，与人合作共事更佳，上下同心，谋事有成。
台湾国学大儒傅佩荣解
时运：朋友支持，升迁顺利。
财运：合资有利，可以进取。
家宅：合家欢喜。
身体：燥热之症，另求良医。
传统解卦
这个卦是异卦（下离上乾）相叠，乾为天，为君；离为火，为臣民百姓，上天下火，火性上升，同于天，上下和同，同舟共济，人际关系和谐，天下大同。
大象：二人同心，其利断金，君子正心诚意，与人和同之象。
运势：如意吉祥，与人共事，上下皆和，又得长辈提拔。
事业：顺利、平安，尤其是在与他人的合作方面会十分成功，宜广泛开展人际活动，建立广泛的联系，克服狭隘的门户之见，照顾各方面的利益，求大同，存小异，坚持正确的原则，必能成就大事业。
经商：以真诚合作、精诚团结的态度与同行共事，公平竞争，必可获得自己应得的利益。
求名：自己必须刻苦努力，尤其要取得师长和志同道合的朋友指教、帮助，自己虚心进取，完全能够达到目的。
婚恋：多情、善交际，认识的异性朋友多，故需慎重选择，注意维护双方关系和家庭和睦。
决策：性格开朗、乐观，为人热情，人际关系好，社交能力强，要善于同他人合作，尤其要协调多方面的关系，要有原则性，与不良风气斗争，有魄力，敢作敢为，富有自我奉献精神，并具有统御能力，适于担任一定的负责。
台湾张铭仁解卦
同人：表示有志一同，相和而成。主吉象。理念相同共处愉快。事业投资、感情皆是和睦融洽。最适合找人合伙事业或寻求认同自己理念的吉卦。
解释：结合志同道合的人集思广益。
特性：喜团体生活户外活动，有领导才能，善交际，人际关系佳。有幽默感。
运势：得此卦为诸事开通、平安、吉祥、如意之象，有同情心，互爱、亨通之象，故宜好好掌握时机，维持盛泰。若有稍涉偏私或为私情之爱则有破兆，应以事业为重。
家运：上下和乐，运势亨通，可得意外之财，宜把握良机，努力求取。
疾病：病轻，不久可愈，注意心脏，头肺等疾。
胎孕：无碍。与六亲和睦，得缘之吉卦。
子女：上下皆能和睦之象。
周转：顺利，并可进取大业，利也。
买卖：利益大，与人共事吉。
等人：一定会来，且会带来好消息。
寻人：此人非故意出走，自己会回来。
失物：遗失似文件眼镜等物，可能被压在底层，尽快找寻，则可取回。
外出：很平安、顺利，并可以结交新朋友，获得帮助。
考试：成绩优良。
诉讼：凡事以和为贵。
求事：吉利。
改行：吉利亨通。
开业：吉利亨通。`,yaoCi:[{ci:"初九。同人于门，无咎。",xiang:"",explanation:`初九：聚集大众于王门，将行大事，没有灾祸。
《象辞》说：君王走出王门与国人打成一片，谁又会遭受灾祸呢？`,shaoYong:"平：得此爻者，能与人合伙经营获利，或出家远行，或修造门户，或在他处学习。做官的或会受到重用，或有升迁之机。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。同人于宗，吝。",xiang:"",explanation:`六二：聚同族于宗庙，卜祷凶吉，因为面临艰难。
《象辞》说：仅仅聚同族于宗庙，这是狭隘的宗法原则。`,shaoYong:"凶：得此爻者，事多不定，与宗人朋友多不和，相互多猜忌，面和心不合，容易起是非。做官的没有升迁之机，需耐心等待。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。伏戎于莽，升其高陵，三岁不兴。",xiang:"",explanation:`九三：将军队隐蔽在深山密林，并且占领了制高点，但长时期不能取胜。
《象辞》说：将军队隐蔽在深山密林，因为敌人太强大。长时期不能取胜，怎能有所作为呢？`,shaoYong:"凶：得此爻者，或有丧亲，或有诉讼打官司之患。做官的须防被免职之忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。乘其墉，弗克攻，吉。",xiang:"",explanation:`九四：爬上了敌人的城墙，城还没有攻下来，继续攻打才能获胜。
《象辞》说：爬上了敌人的城墙，从道义上讲应该停士攻城。之所以继续攻打为吉利，因为困守之敌可能逞其狡诈。`,shaoYong:"平：得此爻者，亲友之间会互相猜忌，荣中有辱，结果会好些，凡事须多加提防则可吉祥。做官的若能兢兢业业，则有提拔之机遇，或会受到表彰。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。同人，先号啕而后笑，大师克相遇。",xiang:"",explanation:`九五：聚集起来的大众先哭嚎后欢笑，因为大军及时增援，大获胜仗。
《象辞》说：聚集起来的大众之所以先哭后笑（战斗转败为胜），因为筮遇此爻，九五居上卦之中位，像人得贞正之道，势必化凶为吉。大军会师，是说我军压倒了敌人。`,shaoYong:"平：得此爻者，先难后易，是非不一。做官的会先贬后升。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。同人于郊，无悔。",xiang:"",explanation:`上九：聚众于郊外，致祭于神灵祝贺胜利，自然没有悔咎。
《象辞》说：聚众于郊外，援助不广，尚不得行其志。`,shaoYong:"平：得此爻者，宜守常，不宜激进。做官的则多有出差的机会。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:14,name:"火天大有",nameFull:"火天大有",originalText:"大有。元亨。",xiangCi:"象曰：火在天上，大有。君子以遏恶扬善，顺天休命。",explanation:`大有卦：昌隆通泰。
《象辞》说：本卦下卦为乾为天，上卦为离为火，火在天上，明烛四方，这是大有的卦象。君子观此卦象，取法于火，洞察善恶，抑恶扬善，从而顺应天命，祈获好运。
《断易天机》解
大有卦离上乾下，为乾宫归魂卦。大有卦为柔得尊位，抑恶扬善，丰财利义，象征天命所归，得人心，因此主吉。`,shaoYong:`日丽中天，遍照万物；盛大富有，持盈保泰。
得此卦者，正当好运，事事吉祥，大有收获，但需防物极必反，盛极转衰。
台湾国学大儒傅佩荣解
时运：亨通无比，大放异彩。
财运：放手去做，财富自来。
家宅：积善之家，子孙保之。
身体：虚火上升，小心诊治。
传统解卦
这个卦是异卦（下乾上离）相叠。上卦为离，为火；下卦为乾，为天。火在天上，普照万物，万民归顺，顺天依时，大有所成。
大象：太阳在天，遍照大地万物，但五阳争一阴，须知有盈即缺。
运势：得时得运，昌荣大吉，但防物极必反，盛极而衰。
事业：事业已经取得一定的成就，最忌得意忘形，胡作非为。务必止恶扬善，坚守中正，交往正直的朋友，戒惧谨慎，兢兢业业，真正做到大而不盈，满而不溢，事业可望迈上新的台阶。
经商：兴隆昌盛，已摆脱困难状态，进入兴旺发达的阶段，如能克制贪财的心理，确守诚信原则，公平待人，克勤克俭，尤其应时刻注意市场动向，适时转轨，可望长久。
求名：已经小有名气，切勿就此满足，停顿不前，尤其不可陷入世俗圈内，应继续努力，在真正朋友的帮助下，更上一层楼。
婚恋：条件优越，可供选择者多，以慎重为好。对于家庭双方应尽力维护。
决策：性格坚强，勇于战胜困难，奋斗向上，前进途中困难和厄运很多，唯有认真对待才能不断取得成功，如放松警惕，骄傲自满，将带来惨重失败。朋友很多，交际广泛，对事业很有帮助，但其中也有拆台的小人。
台湾张铭仁解卦
大有：表示有很多的收获。是个吉卦。易经解释大有卦为：春耕、夏耘、秋收、冬藏，是个努力坚持之后的愿望期待实现。很利于投资、合伙、感情、婚姻。
解释：旺盛大有收获。
特性：具有组织能力，能扩展大事业，吸收各方专才，克服困难，有努力完成大目标勇气，荣誉心重。
运势：得时得运，隆盛昌荣也。然卦象藏有盛极必衰的预兆，不得不慎，以期保持其全盛之枢纽，可众望所归。有走红、赚钱之势，须谨慎不可骄纵。
家运：生平富贵吉利。切勿因富而凌贫，过于傲气凌人者不利也。
疾病：治疗可愈，防高血压、心脏、头肺病患。
胎孕：生贵子女，宜往大医院。
子女：儿女有成，父母欢欣之象。
周转：大有所得。
买卖：交易有获大利之象，但亦宜审慎行事。
等人：会带来好消息。
寻人：此人为感情或金钱之事出走，宜速找寻，否则恐有走极端之险。以东南再南方再西北三向寻之。
失物：找寻费时，惟可失而得。
外出：平安，可动身。
考试：会取得好成绩
诉讼：可圆满解决。
求事：顺利可行。
改行：可以，依计划进行。
开业：开业吉利。`,yaoCi:[{ci:"初九。无交害，匪咎；艰则无咎。",xiang:"",explanation:`初九：不要彼此侵害，即没有灾祸，既使处于艰难之中，也没有灾祸。
《象辞》说：大有初九爻辞说，不要彼此侵害。`,shaoYong:"平：得此爻者，心绪不定，小人欺凌，很是艰辛，长辈或有灾难。做官的须急流勇退，不可贪婪荣华富贵。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。大车以载，有攸往，无咎。",xiang:"",explanation:`九二：用大车装物载人，有明确的目的地，没有灾祸。
《象辞》说：用大车装物载人，物积于车中不会散失。`,shaoYong:"吉：得此爻者，营谋得利，财利丰厚，但不利于老人的健康。做官的闲职者会受到重用。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。公用亨于天子，小人弗克。",xiang:"",explanation:`九三：天子宴请公侯。小人则不能参与。
《象辞》说：天子宴请公侯，（小人不能参与）因为小人参与国政，将是国家的祸害。`,shaoYong:"平：得此爻者，有灾难，举步维艰，勿近小人。做官的会受到重任，读书人会取得很好的成绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。匪其彭，无咎。",xiang:"",explanation:`九四：用曝晒男巫来求雨，旱情严重，但没有灾祸。
《象辞》说：反对坏人坏事没有灾祸，因为明于考察辨析。`,shaoYong:"平：得此爻者，宜守常，则可避免伤害，眼睛方面或会出现病症。做官的须安于现状，不可激进，则可免祸。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。厥孚交如，威如，吉。",xiang:"",explanation:`六五：来犯之敌被紧紧捆绑，严厉惩罚，吉利。
《象辞》说：其人诚信坦白，因为他以诚信来表现自己的志向。威服众人之所以吉利，因为众人敬畏，则能平安而不困惫。`,shaoYong:"吉：得此爻者，须相时而动，切不可骄傲自负，以免自取其祸。做官的宜退不宜进。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。自天祐之，吉无不利。",xiang:"",explanation:`上九：上天保祐，吉利，无所不顺利。
《象辞》说：大有是大吉大利之卦，因为得到上天的保祐。`,shaoYong:"吉：得此爻者，得到祖上之庇佑，一路好运。做官的以及读书人会进职成名。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:15,name:"谦",nameFull:"谦",originalText:"谦。亨，君子有终。",xiangCi:"象曰：地中有山，谦。君子以裒多益寡，称物平施。",explanation:`谦卦：通泰。筮遇此卦，君子将有所成就。
《象辞》说：本卦外卦为坤为地，内卦为艮为山，地中有山，内高外卑，居高不傲，这是谦卦的卦象。君子观此卦象，以谦让为怀，裁取多余昀，增益缺乏的，衡量财物的多寡而公平施予。
《断易天机》解
谦卦坤上艮下，为兑宫五世卦。谦为谦逊，内卦艮和外卦坤都是谦虚之象，所以为吉利之卦。`,shaoYong:`谦和忍让，尊人自卑；利用谦虚，万事可达。
得此卦者，吉利平安，步步高升。谦虚忍让者前途大好，骄横者必招败。谦受益，满招损。
台湾国学大儒傅佩荣解
时运：眼前平顺，步步高升。
财运：物价合理，利益保障。
家宅：近山之居，合家平安。
身体：内郁之症，放宽心胸。
传统解卦
这个卦是异卦（下艮上坤）相叠，艮为山，坤为地。地面有山，地卑（低）而山高，是为内高外低，比喻功高不自居，名高不自誉，位高不自傲。这就是谦。
大象：山应在地面上，而今在地下，代表谦逊之德。
运势：吉利平安，前途无限，但必须去除骄横之气。
事业：尚未被人器重，但因品德高尚，终会为人发现。自己不必有意表现，尤其不可放弃谦虚的美德，埋头苦干，一定会得到他人的帮助，在事业上大有作为。
经商：较为顺利，但不会获暴利，须逐步积累，故应极其小心谨慎，诚心与他人合作，遵守商业道德，通过自己的勤劳努力，取得商业的发展。
求名：天资聪明，但因性格不善于表现自己，起初往往被埋没，自己只要不灰心，继续努力钻研业务，保持谦逊好学精神，更大的成功正在未来。
婚恋：美满的婚姻应由双方共同去努力争取。否则，恋爱不成功，家庭不能和睦。
决策：具有内高外低的谦虚美德，善于团结他人，也能得到别人的帮助，事业很顺利，遇到困难，很快可以化险为夷，有惊无险。由于能够认真吸取别人的长处，进步很快，会畅通无阻，但需要特别注意学业、德业和修养。
台湾张铭仁解卦
谦：表示谦虚不出风头之意。主吉中带小凶。谦卦显示除了谦虚不与人争之外，还有一个很重要的意义，就是被「压抑」！ 在目前到处都充满竞争的时代里，彼此竞争、排斥，是很正常的一种现象，所以，谦卦就是告诉你，虽然一时被压制了，但是忍辱负重，很快就会再意气风发。 因此不要气馁、灰心。另外，也显示，事事不可强出头，目前局势下，谦让不意气用事，才可得吉象。
解释：要谦虚才可得到助力。
特性：待人谦恭，随和，交游广泛，喜休闲活动，重视生活安排及财物的规划，并不断追求新知。
运势：吉利平安，欣欣向荣之象，谦者前途大利，骄者横行招败。故以君子谦德，纵涉大川而无险也，卦利君子。正所谓谦受益满招损也。
家运：幸福之吉运。
疾病：防旧病发，腹部或背部之疾，但仍属吉象。
胎孕：生男儿无灾。生女儿亦无灾。
子女：子女多温顺，事亲孝，可贺也。
周转：诚实谦恭，可成也。
买卖：终成，有是非。获薄利，益也。
等人：准时到达。
寻人：未见，待一段时间自回。
失物：难以发现，有失窃的可能。
外出：顺利，但应准备充分，途中小心，不可忽视安全。
考试：金榜题名。
诉讼：宜速和解，拖延不利。
求事：吉利，可成。
改行：可行。
开业：开业者吉利，但诸事勿太急，以谦则受益。`,yaoCi:[{ci:"初六。谦谦君子，用涉大川，吉。",xiang:"",explanation:`初六：谦让，再谦让，这才是君子的风度。具有这种品德，即使冒险涉水过河，也是吉利的。
《象辞》说：十分谦让的君子，就是从谦让入手进行自我修养。`,shaoYong:"平：得此爻者，宜远行或出游，出外做生意会发财。做官的须退守，不宜与人争利，出差的机会会多。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。鸣谦，贞吉。",xiang:"",explanation:`六二：明智而谦让，卜问得吉兆。
《象辞》说：明智而谦让，心正而吉利，因为六二之爻居下卦中位，像人守中正之道。`,shaoYong:"吉：得此爻者，不宜轻举妄动，宜退守。做官的会升迁，读书人会进取成名。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。劳谦君子，有终吉。",xiang:"",explanation:`九三：勤劳而谦让，这样的人将有好结果，凡事吉利。
《象辞》说：勤劳而谦让的君子，万民敬服。`,shaoYong:"吉：得此爻者，营谋得利，但会劳心劳力。做官的会高升。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。无不利，撝谦。",xiang:"",explanation:`六四：无所不利，只要奋勇直前而又谦虚谨慎。
《象辞》说：无所不利，只要奋勇直前而又谦虚谨慎，因为这样才不会违犯法则。`,shaoYong:"吉：得此爻者，无所不通，但做官的、读书人及商人宜固守退让，太盛则有过。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。不富以其邻，利用侵伐，无不利。",xiang:"",explanation:`六五：贫穷是由于敌国的侵掠，应该对之讨伐，无所不利。
《象辞》说：筮遇此爻有利于征战讨伐，因为是征讨不服从王命的人。`,shaoYong:"平：得此爻者，会得到贵人的帮助而成事，会获得利益，但须谨防生出祸端，与人争诉。当官的会文武兼用，利于进取。读书人会有金榜题名之机会。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。鸣谦，利用行师，征邑国。",xiang:"",explanation:`上六：明智而谦让，出兵征伐邑国自然获胜。
《象辞》说：明智而谦让，尚不能感化邑国得行其志，就可以出兵征讨邑国。`,shaoYong:"平：得此爻者，有争诉之扰，但会不辨自明。做官的须修德养身，进取有望。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:16,name:"豫",nameFull:"豫",originalText:"豫。利建侯行师。",xiangCi:"象曰：雷出地奋，豫。先王以作乐崇德，殷荐之上帝，以配祖考。",explanation:`豫卦：有利于封侯建国，出兵打仗。
《象辞》说：本卦上卦为震，震为雷，下卦为坤，坤为地。春雷轰鸣，大地震动，催发万物，这是豫卦的卦象。先王观此卦象，取法于声满大地的雷鸣，制作音乐，歌功颂德，光荣归于上帝，光荣归于祖考。
《断易天机》解
豫卦震上坤下，为震宫初世卦。雷出地奋，象征春雷使万物苏醒，君王之威行于子民，因此有利于建候、行师。`,shaoYong:`雷出地上，悦服快乐；安乐之中，预防忧患。
得此卦者，顺天应时，事事吉祥，可得长辈之助，但须防色难，切不可沉迷于声色欢场之中。
台湾国学大儒傅佩荣解
时运：春雷发动，诸事吉祥。
财运：新货上市，必有大利。
家宅：祈神祭祖，可保平安。
身体：祷告静心。
传统解卦
这个卦是异卦（下坤上震）相叠，坤为地，为顺；震为雷，为动。雷依时出，预示大地回春。因顺而动，和乐之源。此卦与谦卦互为综卦，交互作用。
大象：雷出于地上，阳气奋发，万物欣欣向荣。
运势：如意安泰，可得长辈扶助，但须防色难，凡事应有备而战。
事业：十分顺利，事业可以获得成功，但必须符合实际，顺应潮流，且得自己努力奋斗，树立远大目光，尤其不可因事业的顺利而放松谨慎小心的态度，陷于懒散享乐。否则，必将后悔莫及。
经商：时运已到，应大胆行动，即使发生挫折，也可以很快化险为夷。应加强同他人的合作，开诚布公，共同开发事业。
求名：天资聪颖，如能坚守正直的品德，严格要求自己，努力上进，不因有成绩骄傲满足，停止前进，而是兢兢业业，不惰不怠，必定可以有重大成功。
婚恋：十分顺利，一生顺利和吉祥，但万不可掉以轻心，更不可玩弄感情，否则将会出现悲剧。
决策：一生顺利，不会出现大的波折，容易比较顺利得到自己应该得到的。但关键在于自己的努力和奋斗，不得耽于安乐，不可玩物丧志。豁达、大度更有利于健康和长寿。一旦遇到意外的灾害，只要时时严格要求自己，坚守纯正，乐不忘忧，居安思危，必可转危为安。
台湾张铭仁解卦
豫：表示高兴悦乐之意，主小吉象。此卦显示做事积极、有力，性情柔和、圆融，充满令人喜乐之气象。凡事可尽力去做，无大碍。婚姻感情，可得良缘。
解释：顺应天命。
特性：稳重，有组织领导的能力，心地善良乐于助人，做事积极务实有效率。精于计划，有金钱观念。
运势：此卦象征万物欣畅，如意安泰，可得上辈之助。切不可因繁华而怠惰，或沉醉于声色欢场之中。好运不常有，当好好把握。
家运：吉象。切不可迷于情而招破相。
疾病：凶险之卦，注意腹腔、肝胆之疾。
胎孕：安康，会喜得贵子。
子女：儿女均能相亲相爱，前程美好。
周转：稍有阻，过后顺利。
买卖：好时机。秋更吉，有贵人。
等人：途中有碍，一定会来。
寻人：东方或西南方可寻，或他人自来相寻。
失物：难以寻回。
外出：充分准备，从容出发，会十分顺利和平安。
考试：金榜题名。
诉讼：有始而无终，易被多人连累，破财、受惊。
求事：可得上辈提拔，有希望。
改行：吉，大有可为。
开业：开业者大吉大利之象。`,yaoCi:[{ci:"初六。鸣豫，凶。",xiang:"",explanation:`初六：津津乐道于荒淫享乐，凶险。
《象辞》说：初六爻辞讲，津津乐道于荒淫享乐，其人意志必消退，身名必败裂。`,shaoYong:"凶：得此爻者，不顺，有口舌之争，前进有阻力。做官的不要得意忘形，须谨慎，以免生祸。读书人则可能会一鸣惊人。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。介于石，不终日，贞吉。",xiang:"",explanation:`六二：夹在石缝中，幸而不到一天就被人救出。卜问得吉兆。
《象辞》说：磨难不足一日即解除，卜问得吉兆，因为六二之爻居下卦中位，像人得中正之道。`,shaoYong:"吉：得此爻者，会获利。做官的宜急流勇退，读书人有成名之机。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。盱豫，悔。 迟有悔。",xiang:"",explanation:`六三：懒散游乐，将招致后悔；再加上懈怠大意，那就后悔莫及。
《象辞》说：懒散游乐，将招致后悔，因为六三之爻居于阳位，是处置不当，像人之行事与所处地位不相称。`,shaoYong:"凶：得此爻者，投机取巧，是非不一。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。由豫，大有得，勿疑，朋盍簪。",xiang:"",explanation:`九四：田猎取乐，大获鸟兽。筮遇此爻，勿疑友人多嘴而谗己。
《象辞》说：田猎取乐，大获鸟兽，说明猎获甚多，如愿以偿。`,shaoYong:"吉：得此爻者，进取成名，经营获利。做官的会得到知己，进取有望。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。贞疾，恒不死。",xiang:"",explanation:`六五：卜问疾病，长时间内不会死去。
《象辞》说：六五爻辞讲患病，因为六五阴爻居于九四阳爻之上，犯了柔乘刚之象。“长时间不会死去”，因为六五之爻居于上卦中位，正当不死之象。`,shaoYong:"凶：得此爻者，多心事，有灾难，或有腹疾。做官的多洋洋得意，持恩固宠，难免有失。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。冥豫，成有渝，无咎。",xiang:"",explanation:`上六：末日将至尚且享乐，已成之事也将毁败。
《象辞》说：末日将至尚且享乐，以此居上位，怎能长久。`,shaoYong:"平：得此爻者，因为心气太高，会有诉争之扰，但若能改过自新，心态平和，则不会有过失。做官的会有贪污之嫌，须明哲保身。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:17,name:"随",nameFull:"随",originalText:"随。元亨，利贞，无咎。",xiangCi:"象曰：泽中有雷，随。君子以向晦入宴息。",explanation:`随卦：大吉大利，卜得吉兆，没有灾害。
《象辞》说：本卦下卦为震，震为雷，上卦为兑，兑为泽;雷入泽中，大地寒凝，万物蛰伏，是随卦的卦象。君子观此卦象，取法于随天时而沉寂的雷声，随时作息，向晚则入室休息。
《断易天机》解
随卦兑上震下，为震宫归魂卦。随即顺从、随时之意，占得此卦，凡事顺心，吉无不利。`,shaoYong:`随顺和同，贞固自持;随从机运，不能专横。
小吉：得此卦者，宜随大势，其事可成。凡事与他人多沟通交流，可名利双收。切不可坚持己见，专横者事不成。
傅佩荣解卦手册
时运：明年运行，五年方展。
财运：堆积存货，明春有利。
家宅：防止惊惧。
身体：休养为宜;牢狱之灾。
传统解卦
这个卦是异卦(下震上兑)相叠，震为雷，为动;兑为悦，动而悦就是“随”。随指相互顺从，己有随物，物能随己，彼此沟通。随必依时顺势，有原则和条件，以坚贞为前提。
大象：震木在兑泽之下，木必随水漂荡，随者，顺也。
运势：有去旧迎新之吉象，宜与人合作，可获厚利，忌三心两意，或独断独行。
事业：对社会和人生有正确的估价，重视人际关系，善于同他人合作，事业会很顺利。为了保证取得更进一步的成功，不得贪图小利，向比自己优秀的人学习，择善而从，心存诚信、努力开拓事业。
经商：顺利。在与他人的真诚合作下，能够达到预期的目的。在竞争中应保持清醒头脑，从大处、长远考虑，遵守商业道德，保持至诚的态度对待顾客和同行，会保持竞争优势。
求名：在自己刻苦钻研的基础上，虚心向有德有才的师长学习，借助外界的力量，促使自己更快的进步，实现个人的理想。
婚恋：双方情投意合可以成功，家庭和睦，但若迷恋于情爱，会影响双方的事业，务必注意。
决策：个人成长道路并不十分顺利，但由于谦虚、随和，人际关系好，尤其能够得到长辈的器重，各种事都能在他人的帮助和关心下成功。但务必注意追随他人应有的立场和原则，不可趋炎附势，招致祸凶。
台湾张铭仁解卦
随：表示随遇而安，一切随缘、随和。主吉象。事事均可依随着自己的心思计划来执行，会顺利地达成。事业、投资、理财、感情，均会有令人满意的发展和收获。
解释：跟随上司主意行事。
特性：交际佳，贵人运多，善谋略，为辅佐良才，保守，被动。
运势：物事均有去旧迎新之吉象，凡事与他人互相通达、协商，可名利双收。倘若三心二意，或独立单行，不听人言劝，有自招灾祸之虞。
家运：本身有相当不错的收入，富有之象。但不可过于放纵，守操节为宜。
疾病：病重，须长期治疗，注意口腔、肝、足患等症。
胎孕：无碍，无惊险。
子女：亲情融洽，与六亲和睦，幸福之象。
周转：和气相商有利，意气用事则难成。
买卖：勿顽强固执，则交易有利。否则失之，有阻。
等人：会迟到。
寻人：不必去找了，过些时日会自己回来，勿急。
失物：即将疏忽之时，会突然察觉。
外出：吉利。可以改变处境。
考试：成绩理想。
诉讼：宜决意和解，目前无忧，但不久须防有祸。
求事：虽吉，然若能谦逊待人，多接受别人意见，会得人提拔。
改行：有充份计划者可行。
开业：吉利。`,yaoCi:[{ci:"初九。官有渝，贞吉。 出门交有功。",xiang:"",explanation:`初九：馆舍时里发生事故，筮遇此爻则吉，出门同行都得好处。
《象辞》说：官吏把事情办坏了，归从正道则吉利。出门同行都得好处，这是不失正道的缘故。`,shaoYong:"吉：得此爻者，多获利。做官的正当好运，有升迁之机。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。系小子，失丈夫。",xiang:"",explanation:`六二：抓住了未成年的奴隶，跑了成年的奴隶。
《象辞》说：抓住了小的，跑了大的，意思是两者不能兼得。`,shaoYong:"凶：得此爻者，不安宁，或受小人的暗算，是非不断。当官的宜退守，进取者要有自知之明。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。系丈夫，失小子。随有求，得，利居贞。",xiang:"",explanation:`六三：抓住了成年奴隶，跑了未成年奴隶。希望无失不如现得。筮遇此爻，卜问居处则吉利。
《象辞》说：抓了大的，跑了小的，其志在于追逐大的，舍弃小的。`,shaoYong:"平：得此爻者，营谋遂意，但宜走正道，才能得利。做官的会得到保举而升迁有望。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。随有获，贞凶。有孚，在道以明，何咎?",xiang:"",explanation:`九四：追名逐利，贪多务获，卜问得凶兆。押送俘虏上路，明于约束，没有灾难。
《象辞》说：追名逐利，贪多务获，这种人遭遇凶险是应该的。谨守信用，严守正道，这是明察事功的结果。`,shaoYong:"平：得此爻者，会得到好人的抬举，化凶为吉。做官的会身居要职，努力进取者可成事，可获得名利。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。孚于嘉，吉。",xiang:"",explanation:`九五：俘虏了不少嘉人，吉利。
《象辞》说：信守中正之道，诸事吉利，因为九五之爻居上卦中位，像人守中正之道。`,shaoYong:"吉：得此爻者，营谋遂意，多喜庆之事，做官的会升职，或多喜事。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。拘系之，乃从维之;王用亨于西山。",xiang:"",explanation:`上六：将俘虏拘禁起来，紧紧捆绑，周文王将他们作为人牲在西山祭祀神灵。
《象辞》说：被捆绑拘禁，因为上六居一卦之尽头，像人处于穷困之境地。`,shaoYong:"凶：得此爻者，苦难多多，不很如意，重病者会有生命之忧。做官的须防止小人的谗言。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:18,name:"蛊",nameFull:"蛊",originalText:"蛊。元亨，利涉大川。先甲三日，后甲三日。",xiangCi:"象曰：山下有风，蛊。君子以振民育德。",explanation:`蛊卦：大吉大利。利于涉水渡河，但须在甲前三日之辛日与甲后三日之丁日启程。
《象辞》说：本卦上卦为艮为山，下卦为巽为风，贤人如山居于上，宣布德教施于下，所谓山下有风，这是巽卦盼卦象。君子观此卦象，取法于吹拂万物的风，从而振救万民，施行德教。
《断易天机》解
蛊卦艮上巽下，为巽宫归魂卦。蛊是指皿中食物因腐败而生虫，筮遇此卦，半凶半吉。`,shaoYong:`三蛊在器，事物败坏;辛勤丁宁，转危为安。
凶：得此卦者，艰难迷惑之时，事事不如意;宜大胆革新，奋发图强，艰苦努力，可转危为安。
傅佩荣解卦手册
时运：力图振作，可改旧观。
财运：不宜堆积，应即贩卖。
家宅：整顿家风;恐有私情;生育不顺。
身体：蛊毒之症，小心咒诅。
传统解卦
这个卦是异卦(下巽上艮)相叠，与随卦互为综卦。蛊本意为事，引申为多事、混乱。器皿久不用而生虫称“蛊”，喻天下久安而因循、腐败，必须革新创造，治理整顿，挽救危机，重振事业。
大象：风入山下，闭而不出，即物腐生虫，意气不通，因循败事。
运势：诸事不如意，艰难迷惑，宜大胆革新，否则引来内忧外患。
事业：运气处于不佳状态，或因外界条件，或因个人因素所致。唯有谨慎分析原因，找出弊端，坚决，大胆，不惜冒险，战胜阻力。这时一要头脑冷静，二要向高明的人请教，必能创造业绩。
经商：诸多不利困扰着自己，不宜继续走老路。应全面分析市场动向，当机立断，另外找寻出路。
求名：会遇到许多困难和不利，应看作是对自己的考验，要以百倍的勇气，继续奋斗。同时，虚心寻找自己的不足，加以补救。
婚恋：不顺利。双方如情投意合，则应全力以赴促成此事，夫妇应共同努力维系家庭。
决策：生不逢时，家道或事业有中落现象，个人陷入多事之秋。唯有正视现实，勤奋勉励，不屈不挠，有所作为，甚至不惜冒险，挽救败落状况。必要时还需耐心等待时机。
台湾张铭仁解卦
蛊：表示受到蛊惑、毒害。主大凶象。蛊毒是因内在腐朽而生虫化毒，显示问题的根因存在已久，却未诚实面对处理而导致愈来愈严重。易做出错误的决策，慨大都被人所迷惑、而一时心神错乱引致祸事。
解释：中蛊毒，无可救药。
特性：内心犹豫，猜疑心重，多事之秋，宜大胆革新。
运势：诸事不如意、积弊已深，未能进展，气运杂乱。逢此宜鼓起勇气，大胆加以革新，有内忧外患之象。
家运：家庭易生烦心之事，不彻底改革有破家、损财之象。
疾病：宜把握治疗时机，冬季占得险象，为内脏恶性疾病。
胎孕：胎有惊。
子女：双亲不堪其忧之苦象耳。
周转：信用不好，周转无望。
买卖：交易不成，另谋生计为要。
等人：中途有变，不会来。
寻人：因家庭感情失和而出走，或与人私奔，于东南或东北。
失物：找不回来，遗失似是木制工艺品，在门口或旅馆遗失，或者是寄失了。
外出：宜推迟或提前。否则会出现危险，务必小心谨慎。
考试：落榜。
诉讼：慎防桃色纠纷，会拖一段时间，不易解决。
求事：不利。
改行：弃旧迎新，或革新内部人事。
开业：开业者不宜，有损财或官符之灾。`,yaoCi:[{ci:"初六。干父之蛊，有子，考无咎。厉，终吉。",xiang:"",explanation:`初六：继承父业，有一个孝顺的儿子，固然没有灾害，即使遇到危险，最后乃吉利。
《象辞》说：继承父业，意思是继承其父遗志。`,shaoYong:"吉：得此爻者，会得到祖先的庇佑，营谋遂意。做官的会受到重任，改革创新。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。干母之蛊，不可贞。",xiang:"",explanation:`九二：继承母业，则吉凶不可卜问。
《象辞》说：继承母业，九二处下卦中位，爻象显示其人得中正之道。`,shaoYong:"平：得此爻者，改旧从新，则会如意。女命勤俭持家，性忠直者多福。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。干父之蛊，小有悔，无大咎。",xiang:"",explanation:`九三：继承父业，即使稍有过错，也不会出大问题。
《象辞》说：继承父业，最终不会遭逢灾难。`,shaoYong:"凶：得此爻者，躁进者有失，不听信谗言者则无难。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。裕父之蛊，往见吝。",xiang:"",explanation:`六四：光大父业，施行起来困难重重。
《象辞》说：光大父业(困难重重)，施行之中未尽得当。`,shaoYong:"凶：得此爻者，事事见忧，有足疾。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。干父之蛊，用誉。",xiang:"",explanation:`六五：继承父业，博得了赞誉。
《象辞》说：继承父业而博得了赞誉，因为继承了其父的美好品德。`,shaoYong:"吉：得此爻者，多喜庆之事，家中或进人口。做官的进取有望，名誉远播。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。不事王侯，高尚其事。",xiang:"",explanation:`上九：不服务于王侯，因为其人看重自身价值。
《象辞》说：不服务于王侯，这种志趣可以效法。`,shaoYong:"平：得此爻者，宜守旧，好运者，多遇尊贵，能获得提拔。做官的宜退守，或告休。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:19,name:"临",nameFull:"临",originalText:"临。元，亨，利，贞。至于八月有凶。",xiangCi:"象曰：泽上有地，临。君子以教思无穷，客保民无疆。",explanation:`临卦：大吉大利，吉利的卜问。到了八月，可能有凶险。
《象辞》说：本卦下卦为兑为泽，上卦为坤为地，堤岸高出大泽，河泽容于大地，这是临卦的卦象。君子观此卦象，君临天下，教化万民，覃恩极虑，保容万民，德业无疆。
《断易天机》解
临卦坤上兑下，为坤宫二世卦。临卦下兑为悦，上坤为顺，欢悦而顺从，保证可以亨通。`,shaoYong:`以上临下，相佐相互；居安思危，时时慎戒。
得此卦者，好运来到，诸事如意，人情和合，但行事不宜过于急进。
台湾国学大儒傅佩荣解
时运：活水流行，好运方来。
财运：经营有成，获利可期。
家宅：家业正旺；两姓和合。
身体：疾病拖延，不致危险。
传统解卦
这个卦是异卦（下兑上坤）相叠。坤为地，兑为泽，地高于泽，泽容于地。喻君主亲临天下，治国安邦，上下融洽。
大象：池泽之水灌溉地面万物，相辅相成，生生不息。
运势：诸事亨通，上下和合，前途有望，但不宜过于急进。
事业：正是成功的极好时机，务必抓紧，不可失去良机。但却不可就此满足，时运会很快消失，一定要从长计议，注意总结经验，团结他人，共同开拓新领域。
经商：会十分顺利，并有收获，但须随时注意市场动向，兢兢业业，防止出现意外的事故，尤其应妥善处理人际关系。
求名：自己的努力已到了收获的季节，应更加虚心，严格要求自己，谨慎小心地实现自己的目标。很可能出现意外，应以刚强的意志去从容对付，过于软弱将失去机会。
婚恋：加紧进行，全力以赴，双方以诚信相待，美满、和谐。
决策：头脑灵活，善于同他人交往，并有主见，具有领导才能。务必加强个人的全面修养，诚信待人，树立良好的个人威望，尤其要有远大的眼光，长久的计划，可以保证事业的发达和前程的光明。
台湾张铭仁解卦
临：表示大驾光临，贵人来到之意。主吉象。 临又为「君王临幸」之意，是上者对下者之象，在事业投资，为贵人相助之意。在感情则有期待而至的欢喜感。
解释：好事即将来临。
特性：待人热心，心胸开阔，乐于助人，尊重他人，体会别人心意，谦恭有礼。自然贵人多来帮助，财运丰厚。
运势：运势渐增，诸事亨通如意，前途有望，仕途有成，可得贵人相助，上下安合。以和顺可奏大功，宜诚心待人，可诸事顺畅，急进或忘形者，有破财之象。
家运：幸福圆满，切勿意气用事，否则有反。
疾病：病情较轻，为肠胃，口腔之疾，并防泌尿生殖系统病变。
胎孕：生贵子。求佛及家神则安。产妇慎饮食。
子女：得孝顺之儿女。
周转：可成。
买卖：防口舌，勿过急，和顺交易有利。
等人：有好消息且准时到。
寻人：西方或西南方，不必急，目下其人已动，自回。
失物：不能立即发现，很久才能找回。可能被埋在地下，是件会发声或震动的物件。
外出：在准备充分的情况下，立即行动，不必再犹豫。
考试：金榜题名。
诉讼：宜柔不宜刚，因本欲欺他人，反伤自己。
求事：顺利可成。
改行：吉利。
开业：开业正得其时，大吉大利。`,yaoCi:[{ci:"初九。咸临，贞吉。",xiang:"",explanation:`初九：以感化的政策治民。卜问得吉兆。
《象辞》说：以感化的政策治民，治道贞正，自然吉利，因为居心端正，作风正派。`,shaoYong:"吉：得此爻者，会交好运，营谋称意。做官的会得到众人的拥戴，能升迁。读书人参加考试者必能考出佳绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。咸临，吉，无不利。",xiang:"",explanation:`九二：用温和的政策治民，吉利，无不吉利。
《象辞》说：用温和的政策治民，吉利，无不吉利，因为百姓尚未驯化从命。`,shaoYong:"吉：得此爻者，营谋获利，但宜认清时机，不然不能成事，美中不足。做官的会光明磊落，地位清高。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。甘临，无攸利。即忧之，无咎。",xiang:"",explanation:`六三：用压服的政策治民，没有什么好处。如果有所忧悔，灾祸可以消除。
《象辞》说：用压服的政策治民，正如六三阴爻不当居阳位一样，这样的君王不是称职的君主。如果能有所忧悔，其灾祸则可消除。`,shaoYong:"凶：得此爻者，有忧愁，会受苦劳累。做官的会受到小人的谗言攻击，志不能伸。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。至临，无咎。",xiang:"",explanation:`六四：亲自理国治民，没有害处。
《象辞》说：亲自理国治民，没有害处，正如六四阴爻居阴位一样。这样的君王是称职的君王。`,shaoYong:"平：得此爻者，人情和合，经营得利，但要成大事者，须谨慎而行，做好准备再进取。做官的会得到同僚的帮助。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。知临，大君之宜，吉。",xiang:"",explanation:`六五：以明智治民，得君王之体，自然吉利。
《象辞》说：得君王之体，因为六五之爻居上卦中位，像人行事得中正之道。`,shaoYong:"吉：得此爻者，万事如意。做官的会得到上司的赏识。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。敦临，吉，无咎。",xiang:"",explanation:`上六：以敦厚之道治民，吉利，自然无灾祸。
《象辞》说：以敦厚之道治民，吉利，因为敦厚诚实之意存于内心。`,shaoYong:"吉：得此爻者，多获利，无往不利，但谨防气势太盛而变衰。做官的会得到上司的器重，委以重用。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:20,name:"观",nameFull:"观",originalText:"观。盥而不荐，有孚顒若。",xiangCi:"象曰：风行地上，观。先王以省方，观民设教。",explanation:`观卦：祭祀时灌酒降神而不献人牲，因为用作祭祀的俘虏的头部肿了，不能用作祭品。
《象辞》说：本卦上卦为巽为风，下卦为坤为地，风行大地吹拂万物，这是观的卦象。先王观此卦象取法于周流八方的风，从而巡视邦国，观察民情，推行教化。
《断易天机》解
观卦巽上坤下，为乾宫四世卦。观卦象征将道义展示于众人面前。观卦风在上而地在下，是春风浩荡、万物滋生之象。`,shaoYong:`以下观上，周游观览；平心静气，坚守岗位。
得此卦者，处身于变化之中，心神不宁，宜多观察入微，待机行事，切勿妄进。
台湾国学大儒傅佩荣解
时运：出外游览，不易闲居。
财运：贩卖洋货，须防风险。
家宅：供养神佛。
身体：风湿之症，运动调养。
传统解卦
这个卦是异卦（下坤上巽）相叠，风行地上，喻德教遍施。观卦与临卦互为综卦，交相使用。在上者以道义观天下；在下者以敬仰瞻上，人心顺服归从。
大象：风运行于坤地之上，喻有周游观览之意。阴长阳消，正道衰微，万物难行。
运势：处身于变化之中，宜多观察入微，心身苦恼，并防外来诱惑。
事业：事业已出现不顺利的迹象，务必谦虚慎重，高瞻远瞩，尤忌短期行为，心胸开阔，注意搞好人际关系，团结他人，不宜轻率行动。必要时不妨投靠德行高的人，以图再度发展。
经商：市场形势不稳定，正处于变动，应谨慎小心，随时观察动向，从长计议，做好退却的准备。
求名：贵在自知之明，虚心向他人求教，端正处世态度，尤其不可自我满足，更须守中持正，树立远大理想，勿丧失个人追求的目标，勿偏离正道。
婚恋：不顺利，双方应经受住考验，从长计议，会有理想的结果。
决策：具有组织能力，适宜担任负责工作，但人生旅途多曲折，必须注意培养自己的预见性和观察力，办事务必公正，实事求是，注意人心动向，关心他人。尤其不可以陷入小人之道和近视行为之中。应有决断精神，不可盲从，必要时可进行策略依附。
台湾张铭仁解卦
观：表示观察、观看，是个最标准的状况卦，吉凶未定。凡事不可轻下决定，需要再观察一下局势再做打算。尤其是对长官、上位者的态度更是要察言观色，不可轻忽大意。
解释：尚在观察中。
特性：有创意，喜欢开发新事物，见解新颖，爱旅行，观摩他人，研究比较，不断修正反省自己。
运势：处在有危险不稳的时运，耍多观望时势之利弊，待机行事，于人事物，须以诚待之，才能感化而幸免陷入困难也。
家运：正处于下坡时段，要知固守进退之机，听取长辈意见有助也。
疾病：有渐恶化之象，病情变化多，为腹、神经系统病症。
胎孕：孕有不安之象。
子女：儿女将来有成就幸福也。
周转：虽有好言，实际内在空虚。无指望居多。
买卖：交易有碍。应在戌亥日可成，否则难成。
等人：观望必有等待，而来者有随他人去之象。
寻人：此人到处漂泊，行踪不定，有险象。目前在西南方，宜丑未日见。
失物：若能细心四察，可以找回来。
外出：有风险，择日而行。
考试：不理想。
诉讼：小人当道，愈争论惹起纷争愈多，但终会和解。
求事：不易。
改行：擅自主张不宜，若由他人提拔则可。
开业：开业者不宜。`,yaoCi:[{ci:"初六。童观，小人无咎，君子吝。",xiang:"",explanation:`初六：愚蠢近视，对一般百姓来讲尚无大碍，但对于担负政治责任的君子来说，将会铸成大错。
《象辞》说：初六爻辞讲，愚蠢近视，这正是小人们的思想特征。`,shaoYong:"凶：得此爻者，宜防小人，诸事有困难，弄巧成拙。做官的有危难，不宜进取。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。窥观，利女贞。",xiang:"",explanation:`六二：囿于一孔之见，这是有利于女人的贞兆。
《象辞》说：女人窥视男人，即使操行贞正，亦属可丑的行为。`,shaoYong:"平：得此爻者，在家不如意，外出谋事则好，或喜或忧，或因妇人而起是非，大抵宜动不宜静。此爻女喜，男悲。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。观我生，进退。",xiang:"",explanation:`六三：观察亲族的思想动向，从而决定为政的措施。
《象辞》说：观察亲族的思想动向，从而决定为政的措施，这才未失去用人行政的正道。`,shaoYong:"平：得此爻者，三心二意，须谨慎行事，知难而退。做官的进退无常。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。观国之光，利用宾于王。",xiang:"",explanation:`六四：观察国家政绩风俗的辉煌表现。筮遇此爻，有利于朝觐君王。
《象辞》说：观察国家政绩风俗的辉煌表现，此来者为国宾。`,shaoYong:"平：得此爻者，宜出外谋事，多与外人交往，则有利。做官的或居闲职，清高之地。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。观我生，君子无咎。",xiang:"",explanation:`九五：善于观察亲族之意向，君子可以无过错。
《象辞》说：观察亲族之意向，就是观察天下万民的意向。`,shaoYong:"吉：得此爻者，时来运转，利益丰厚，对于妇人则有怀孕之喜，病重者有生命之忧。做官的会因为自己良好的官德，爵禄有升。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。观其生，君子无咎。",xiang:"",explanation:`上九：观察其他部族的意向，君子可以无过错。
《象辞》说：观察其他部族的意向，是因为尚未全面摸清情况，心不踏实，决心难下。`,shaoYong:"平：得此爻者，运势不通，心有余而力不足，怀孕者利于生育，久病者会痊愈。做官的宜退守，修德养身。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:21,name:"噬嗑",nameFull:"噬嗑",originalText:"噬嗑。亨。利用狱。",xiangCi:"象曰：雷电噬嗑。先王以明罚敕法。",explanation:`噬瞌卦：通泰。利于讼狱。
《象辞》说：本卦下卦为震为雷，上卦为离为电，雷电交合是噬嗑的卦象。先王观此卦象，取法于威风凛凛的雷、照彻幽隐的电，思以严明治政，从而明察其刑罚，修正其法律。
《断易天机》解
噬嗑卦离上震下，为巽宫五世卦。噬嗑为咬合之意，象征物品咬碎之后才能通过。此卦于诉讼有利。`,shaoYong:`咬碎硬骨，强硬态度；事多困阻，积极谋求。
得此卦者，事不遂心，纷争难免，诸事被阻，宜坚守常规，不为利诱，可保平安。
台湾国学大儒傅佩荣解
时运：好运初动，声名直上。
财运：买卖皆成，货物畅销。
家宅：小心火灾；百年好合。
身体：须防郁热，失物不保。
传统解卦
这个卦是异卦（下震上离）相叠。离为阴卦；震为阳卦。阴阳相交，咬碎硬物，喻恩威并施，宽严结合，刚柔相济。噬嗑为上下颚咬合，咀嚼。
大象：上唇与下唇间有物，必须咬断，方能合拢，乃诸事被阻，务必去除，方可成功。
运势：诸事阻隔，纷争难免，宜守常规，不为利诱，问题可解决。
事业：困难与阻力非常大，应以坚强的意志，果敢的行为，公正无私的态度去战胜种种厄运，争取事态好转。为了早日化险为夷，必要时可采取强硬手段，甚至诉诸法律。
经商：处于不利的时候，头脑冷静，明察形势，寻求机遇，不为眼前小利所诱，不发非分之财。认真听取忠告，遵守法纪，秉公办事，不得徇私情，更警惕不得触犯刑律。
求名：自己的努力尚不为人所知，不可急于求成，受到挫折应看作是对自己的考验，持之以恒，必能成功。
婚恋：初不顺利，须有顽强精神可以取得满意的结果，不可以个人的情绪左右家庭事务。
决策：一生不平坦，会遇到挫折和磨难，但应看作是对个人的考验，应认真总结经验教训，以更为坚强的意志，不屈不挠，继续前进。经过锻炼，各方面都会有较大的进展，终将进入光明境地，取得重大成就。
台湾张铭仁解卦
噬嗑：表示如鲠在喉、难以决策。主吉凶未定，是个状况卦，有点偏小凶。也如同「鸡肋」一般，食之无味、弃之又可惜！是需要坚决下个决心的时候了！
解释：被吞没掉。
特性：生命力强，坚守奋斗，百折不挠，对自己要求很高，不断充实自己，突破超越提升。克服困难，宜往大企业大单位任职，较能有所表现。
运势：诸事不遂心，多受阻害。有纷争，无法前进之时，宜守原则，不为利诱，以免被人中伤。然而一般人多有无法逃避利诱者，故必受祸，若能和气处事为安，更须突破困难方可通达。
家运：家庭有不和现象，亦常有无法沟通之阻碍。除非彼此能够排除成见，否则无法融洽相处。
疾病：病情严重，注意足部，心脏、神经系统病变。
胎孕：胎有惊。
子女：儿女倔强、反抗。
周转：卦已明示有困难，但诚心或可圆满。
买卖：多阻挠且多是非。但若积极推进，不要放弃，则有利，可成。
等人：受到阻碍，不能来。
寻人：必因发生争端或涉嫌重大事件而出走。去庙观市井求之，东、南方。
失物：有被人捷足捡走的可能，寻回的机会不大。
外出：另择他日为佳。若非出门不可，务必充分准备，小心为是。
考试：不佳。
诉讼：宜采取主动，据理力争。
求事：多生枝节，不利。唯有积极去谋求方有所成就。
改行：有碍，但耐心排除可成。
开业：开业吉，中途有是非，宜耐心解决。`,yaoCi:[{ci:"初九。屦校灭趾，无咎。",xiang:"",explanation:`初九：拖着刑具，磨破了脚趾，但没有大的灾难。
《象辞》说：拖着刑具，磨破了脚趾，小惩则可大戒，使之不重犯过错。`,shaoYong:"凶：得此爻者，宜谨慎行事，以免生祸端。做官的会遭到贬职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。噬肤灭鼻，无咎。",xiang:"",explanation:`六二：大吃鲜鱼嫩肉，遭受割鼻之刑，但没有大难。
《象辞》说：大吃鲜鱼嫩肉，遭受割鼻之刑，因为六二之爻居于阳爻之上，像人享受非分之福。`,shaoYong:"平：得此爻者，进退艰难，是非不断，或生暗疾，骨肉有伤。做官的不会顺利，会有所纠结。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。噬腊肉，遇毒。小吝，无咎。",xiang:"",explanation:`六三：吃腊肉，中毒。碰上了麻烦，但不十分严重。
《象辞》说：中毒，因为六三阴爻居于阳位，像人不称其位。`,shaoYong:"凶：得此爻者，不易成事，运气不顺，或生心腹之疾，或有惊险。做官的才力不及，有失。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。噬干胏，得金矢。利艰贞，吉。",xiang:"",explanation:`九四：啃吃骨头，发现骨头中有金属箭头。卜问艰难之事，结果是吉利的。
《象辞》说：卜问艰难之事，结果是吉利的，但目前仍处于艰难之中，尚未进入光明之境。`,shaoYong:"吉：得此爻者，经商必获利。做官的会升迁，读书人会成名。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。噬干肉，得黄金。贞厉，无咎。",xiang:"",explanation:`六五：吃干肉，发现金属箭头。卜问得危险之兆，但最终可以无灾祸。
《象辞》说：卜问得危险之兆，但最终可以无灾祸，因为六五之爻居上卦中位，位象得当，可以化险为夷。`,shaoYong:"吉：得此爻者，行好运，有病的会痊愈，有冤的会昭雪，读书人进取成名，做官的会剪除小人。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。何校灭耳，凶。",xiang:"",explanation:`上九：肩上扛着大枷，磨破了耳朵，凶险。
《象辞》说：肩上杠着大枷，磨破了耳朵，因为其人不听劝阻，触犯了刑律。`,shaoYong:"凶：得此爻者，须防争诉，不良者，耳目不明，血气不顺，或有生命之忧。做官的须防止小人的谗言而遭致贬职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:22,name:"贲",nameFull:"贲",originalText:"贲。亨。小利有攸往。",xiangCi:"象曰：山下有火，贲。君子以明庶政，无敢折狱。",explanation:`贲卦：通达。有所往则有小利。
《象辞》说：本卦上卦为艮为山，下卦为离为火，山下有火，火燎群山，这是贲卦的卦象。君子观此卦象，思及猛火燎山，玉石俱焚，草木皆尽，以此为戒，从而明察各项政事，不敢以威猛断狱。
《断易天机》解
贲卦艮上离下，为艮宫初世卦。贲为装饰之意，离为明，艮为止，表示有文明的制度使人们止于一定的规范，因此多为吉兆。`,shaoYong:`文饰光明，外实内需；隐忧之时，量力而为。
得此卦者，表面风光，内在空虚，多虚少实。宜充实自己，稳重行事，量力而为。
台湾国学大儒傅佩荣解
时运：上有阻力，不可任意。
财运：经理精明，须防套牢。
家宅：小心火灾。
身体：郁火上升，慎用寒剂。
传统解卦
这个卦是异卦（下离上艮）相叠。离为火为明；艮为山为止。文明而有节制。贲卦论述文与质的关系，以质为主，以文调节。贲，文饰、修饰。
大象：日落西山，照耀通明，华美灿烂，同时喻光明力量渐消，阴暗的力量扩大。
运势：表面风光，内里空虚，必须充实自己，凡事宜踏实、按部就班。
事业：顺利，小有成绩，宜即时总结经验，图谋更大的发展。树立信心，不计较一时的得失。追求实质性的内容，慎重行事，不要随波逐流，寻求有实力的人物提携自己。
经商：开始会遇到困难，不应灰心，宜全面分析形势，大胆开拓，勇敢地投入，联合他人，共同合作，根据市场，运转业务。
求名：不可过多地注重外表，而应着重于内在的素质。大胆地推荐自己，但应坚持自己的理想。
婚恋：慎重选择，有合适者，则应迫切追求，不可三心二意，务必专一。注重对方的内在气质，勿为表面现象所欺骗。
决策：喜爱注重外表，缺乏追求内在气质的恒心。生性较为浮躁，好务虚名，往往因此而碰壁，或半途而废。在事实的教育下，改变不切实际的做法，明察社会和人生，会有所收敛，变得自持，注重自身修养，成全事业，中年以后会大有作为，老年仍可发挥余热。
台湾张铭仁解卦
贲：表示美丽得外表装饰，主小凶象。「金玉其外、败絮其中」，经过有心修饰、伪装的外表或事情，事业投资、感情皆不宜。慎防有心的小人、伪君子。
解释：表面好看，里表不一。
特性：重精神，轻物质，有艺术文学专才，感情敏锐，追求理想。在情爱上，易留下刻骨的回忆。
运势：卦象是象征其人外表好看，内在空虚，因此，必须充实自己，凡事深思远虑，与人和睦相处，能获得意外利益。切忌因小失大，更无须为了掩饰外观而造成不必要的损失。凡事踏实，按部就班为是。
家运：外美内虚而不为外人所知，应及时整顿家庭经济，使其安稳、充实，更须安份自持，莫以虚浮来掩饰空虚。踏实为上策。
疾病：病情危重，为心脏、胸腹等病。
胎孕：孕有不安之象。
子女：子女身体虚弱，美丽而得人缘。
周转：不宜大，小调尚可。
买卖：有贵人，速决有利。
等人：会来。但远方者不来。
寻人：已在东北或南方亲友家，可寻。
失物：在家中遗失，将可寻回。不妨试试注意门脚的地方。
外出：慎远行。但只要准备充分，注意安全，不会出麻烦。
考试：不理想。但人家以为你读得不错。
诉讼：宜速求解决，不可拖延，可得贵人调解。
求事：条件勿太苛求，可成。
改行：改行宜，但勿夸大或太过。
开业：开业者吉利之象。`,yaoCi:[{ci:"初九。贲其趾，舍车而徒。",xiang:"",explanation:`初九：脚穿花鞋，舍车不乘，徒步而行。
《象辞》说：舍车不乘，徒步而行，为显示鞋子之美丽，理应不乘车。`,shaoYong:"平：得此爻者，多奔波，静凶动吉。做官的须防退职之患。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。贲其须。",xiang:"",explanation:`六二：修饰自己的胡须。
《象辞》说：修饰自己的胡须，说明老人不服老，帮助君王振兴国家。`,shaoYong:"平：得此爻者，得人提拔，好运可期，但也要相时而动，不可随性而为，以免遭难。做官的会因人成事，升迁有望。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。贲如，濡如，永贞吉。",xiang:"",explanation:`九三：奔跑向前，汗流浃背。卜问长时期的凶吉而得吉兆。
《象辞》说：永远贞正，必吉利，因为决没有人侵凌正人君子。`,shaoYong:"吉：得此爻者，好运来到，不必费力，自然荣盛，即使有是非纠纷，也不足为患。做官的与人和睦，能居要职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。贲如，皤如，白马翰如，匪寇婚媾。",xiang:"",explanation:`六四：奔跑气吁吁，太阳火辣辣。高头白马，向前飞奔。不是来抢劫，而是来娶亲。
《象辞》说：六四阴爻居阴位，所处恰当。既知不是来抢劫，而是来娶亲，疑虑冰释，终无灾祸。`,shaoYong:"平：得此爻者，先凶后吉，忧中有喜，虽有危险，终得安宁。未婚者，有望成家。做官的先难后易。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。贲于丘园，束帛戋戋。吝，终吉。",xiang:"",explanation:`六五：奔向丘园，送上许多布帛，初遇困难，终则顺利。
《象辞》说：六五爻辞说的吉利，是指有婚姻之喜。`,shaoYong:"吉：得此爻者，会遇贵人，经营获利，多喜事。做官的闲职者会受到重用，在职者福禄双全。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。白贲，无咎。",xiang:"",explanation:`上九：送上白底饰以诸色花纹的布帛，不会坏事。
《象辞》说：白底的布帛饰以诸色花纹，没有灾祸，因为上九居一卦之首位，像人高高在上，志得意满。`,shaoYong:"平：得此爻者，须防好运转凶，家中、亲属有长辈或命终。做官的会升迁。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:23,name:"剥",nameFull:"剥",originalText:"剥。不利有攸往。",xiangCi:"象曰：山附于地，剥。上以厚下，安宅。",explanation:`剥卦：有所往则不利。
《象辞》说：本卦上卦为艮为山，下卦为坤为地，山在地上，风雨剥蚀，这是剥卦的卦象。君子观此卦象，以山石剥落，岩角崩塌为戒，从而厚结民心，使人民安居乐业。
《断易天机》解
剥卦艮上坤下，为乾宫五世卦。剥卦象征剥落，因山高倾危而剥落。此时为阴气极盛之时，君子宜谨慎隐忍，不可贸然行动。`,shaoYong:`剥削蚀烂，灾情之忧；进取难成，顺时而止。
得此卦者，时运不佳，多有损失，前进有阻，宜顺时而止，安份自守。
台湾国学大儒傅佩荣解
时运：时运不佳，安心自守。
财运：出口获利，剥人之财。
家宅：不离己宅，寄居可买。
身体：魂不附体，千万小心。
传统解卦
这个卦是异卦（下坤上艮）相叠。五阴在下，一阳在上，阴盛而阳孤；高山附于地。二者都是剥落象，故为“剥卦”。此卦阴盛阳衰，喻小人得势，君子困顿，事业败坏。
大象：山附于地喻山石崩而落于地面上，五阴迫一阳，正义被损。
运势：恶运缠身，宜重新部署，不宜自作聪明，防被女子及小人连累。
事业：时运不佳，乃大势所趋，个人只能顺应时势而暂停行动，静观待变，不可冒险，积极创造条件，增强实力，谨慎隐忍，勿与小人同流。时来运转，成就事业，为期不远。
经商：已从高峰转入低落，进入不景气时期，需要认真总结经验教训，进行整顿，尤其不可孤注一掷。景气形势一旦到来，可顺势从容再起。
求名：成功的可能性不大，不宜执意强求，应继续创造条件，努力提高自己，充实处世的本领，增强实力，待机东山再起。
婚恋：务须慎重考虑，除非有十分般配者，不要随便进行。双方应注意维护家庭的和睦。
决策：一生曲折较多，往往隐入不顺利的境况，甚至绝境，但可绝处逢生。只要冷静分析形势，顽强拼搏，一定会彻底改变命运，获得美好的结果，为他人惊羡。关键是不可急于求成，尤其不可冒险。须顺应时势，并防小人陷害。
台湾张铭仁解卦
剥：表示剥落之意，主大凶象。地动山崩，一时群山崩落为平地，表示很严重的动荡、变化，而致使重大的伤害、不幸的产生。最易有急症、意外的血光之灾。事业、感情、婚姻，得此卦需有心理准备，所有之前的努力可能要重新再来了。 唯此卦利于重新到外地发展，或另寻对象也可。
解释：剥削，剥落。
特性：反应灵敏，思想新颖，走在时代尖端，有研发长才，有意料之外的机会和柳暗花明之遭遇。
运势：运带破、带衰，有不利之灾祸，不可抱持野心，自作聪明，否则自掘坟坑。得此卦者，必有与欢场女子耗费钱财而又被陷害之苦恼，且有受部下连累而损财，为不得志之时运也。
家运：正处于没落之时，辛苦劳心，有心挽回者可得安，否则有别离之险象。
疾病：病情恶化之象，防头痛、肠胃、性病等疾。
胎孕：虚惊之凶象。
子女：缘薄，不和，体弱。
周转：无望。
买卖：难成。若成亦有损。
等人：不会来。
寻人：在东北方的山上或水边寻之。
失物：目前还隐藏在家中地上，可惜无法发现，不久会被扫走。
外出：暂缓为好。可在充分准备之后动身。
考试：落榜。
诉讼：因财而起纷争，小人当道，宜避之则吉。
求事：顺而止，要谨慎行事，不可粗心大意。
改行：不利，必损财。
开业：开业者有阻碍，切勿意气用事，否则有害，宜再待时。`,yaoCi:[{ci:"初六。剥床以足，蔑贞，凶。",xiang:"",explanation:`初六：床足脱落。无须占问，这是凶险之象。
《象辞》说：床足脱落，这是自毁根基。`,shaoYong:"凶：得此爻者，营谋不遂，或有手足之灾，或兄弟不睦，凶则家破身亡。做官的有升迁之机会，但宜见机行事。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。剥床以辨，蔑贞，凶。",xiang:"",explanation:`六二：床板脱落。无须占问，这是凶险之象。
《象辞》说：床板脱落，这是自毁辅佐。`,shaoYong:"凶：得此爻者，营谋不遂，或受到小人的侵辱，或受到他人的猜忌。做官的须防被贬职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。剥之，无咎。",xiang:"",explanation:`六三：割取邻国邻邑的土地人民，可以无灾祸。
《象辞》说：割取邻国邻邑的土地人民，可以无灾祸，因为邻国邻邑的统治者已失去了上下臣民的支持。`,shaoYong:"平：得此爻者，难遇知己，生涯不顺，欲求名利，必须创新，此爻像父母妻子或有忧，须谨防。做官的会遇到明主或大官提拔。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。剥床以肤，凶。",xiang:"",explanation:`六四：剥取床上的垫席，这是凶险之象。
《象辞》说：剥取床上的垫席，灾祸就在眼前。`,shaoYong:"凶：得此爻者，时运不佳，危难之时，多有争诉刑克之事。做官的须谨防小人的谗言，以免遭难。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。贯鱼，以宫人宠，无不利。",xiang:"",explanation:`六五：宫人依次当夕受宠，无所不利。
《象辞》说：宫人依次当夕受宠，秩序不乱，厚薄均匀，因而终无忧患。`,shaoYong:"吉：得此爻者，人情和合，营谋得时，家和福生，妇人进财。做官的升高进职，居要位。读书人、学子考试必能考出佳绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。硕果不食，君子得舆，小人剥庐。",xiang:"",explanation:`上九：劳者不得食，不劳者得食；君子乘坐华丽的车子，小人的草屋不蔽风雨。
《象辞》说：君子乘坐华丽的车辆，这是老百姓沉重的负担。小人的破屋不蔽风雨，这种取象表明终究难保平安。`,shaoYong:"平：得此爻者，须谨慎，踏实稳重者可无忧。商人生意买卖会不错。做官的会有权柄。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:24,name:"复",nameFull:"复",originalText:"复。亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。",xiangCi:"象曰：雷在地中，复。先王以至日闭关，商旅不行，后不省方。",explanation:`复卦：通泰。出门、居处均无疾病。有钱可赚而可以无灾祸。往返途中，七日可归。有所往则有所利。
《象辞》说：本卦内卦为震为雷，外卦为坤为地，天寒地冻，雷返归地中，往而有复，依时回归，这是复卦的卦象。先王观此卦象，取法于雷，在冬至之日关闭城门，不接纳商旅，君王也不巡视邦国。
《断易天机》解
复卦坤上震下，为坤宫初世卦。复代表阴阳去而复返，使万物生生不息，预示已逝去的可能会再回来。`,shaoYong:`循环往复，生机复萌；成功在望，性急即败。
得此卦者，时运好转，顺势而为，谋事可成，但不宜过于急进。
台湾国学大儒傅佩荣解
时运：好运初来，静待发动。
财运：暂停售物，必可获利。
家宅：待春再迁；婚嫁初春可成。
身体：有痰上火，冬令宜防。
传统解卦
这个卦是异卦（下震上坤）相叠。震为雷、为动；坤为地、为顺，动则顺，顺其自然。动在顺中，内阳外阴，循序运动，进退自如，利于前进。
大象：雷在地中振发，喻春回大地，一元始，万象更生。
运势：开运亨通之象，万事不宜急进，按部就班可成。
事业：已经渡过了困难时期，开始进入积极行动的阶段。但务必抓住时机，当机立断，却不可急躁，且应时常反省个人行动，严于修身，勇往直前，可望成功。
经商：可大胆投资，与志同道合的伙伴坦诚合作，打开市场，勿因挫折而退缩。更可以打入外地，坚持商业道德，循序渐进，一定会有所赢利。
求名：时机正在成熟，不要急于求成，继续奠定基础，机遇一旦到来，务必要抓住，必将转运。最忌自伤意志。
婚恋：顺利。但切不可性急，应冷静考虑。家庭的美满幸福，靠严于律己维持。
决策：性格活泼，精力旺盛，但因急躁情绪会造成事业损失。一定要冷静思考，勇于改正错误，必能重振事业。此时应抓住时机，明确方向，灵活机敏，脚踏实地改变处境。一旦出现意外，宜当机立断，暂行退让。如能准确驾驶自己，努力奋斗，成就事业十分顺利。
台湾张铭仁解卦
复：表示重复再来、周而复始之意。是个状况卦，吉凶未定。好事会重复，但坏事也会重复再来的。此卦显现一种循环的状态，可能是好、也可能是坏。
解释：一年复始、万象更新。
特性：为最佳辅佐人才，做事谨慎，调理分明，精企划，组织，一生财运丰足，乐于助人，排解别人困难，人缘佳。
运势：一阳来复，万事苏伸，不久就会好转。初时不宜急进，脚踏实地则有一本万利、开运亨通之象也。
家运：昌隆茂盛，渐曙光明之象。
疾病：病防发，但可治，为肝、肠胃、神经系统病变。
胎孕：主产母有惊惧之灾。
子女：辛劳之后必得享福，儿女将来会出人头地。
周转：难求，反覆终可入手。
买卖：有是非，故勿太急，可有利。
等人：会迟到。
寻人：自身反覆终人不动，但七日内可回。
失物：有失而得之可能。
外出：无灾无祸，且有收获。
考试：愈考愈好。
诉讼：多人之事，但经多次扰攘才可解决。
求事：勿太急，可成。
改行：可行，但宜沉着，勿急躁。
开业：开业者可行，但宜沉着，勿急躁。`,yaoCi:[{ci:"初九。不远复，无只悔，元吉。",xiang:"",explanation:`初九：出外不远就返回，没有大的过失，大吉大利。
《象辞》说：出外不远就返回，比喻能时时反省，严于修身。`,shaoYong:"吉：得此爻者，万事如意，经营获利。做官的会位高权重。读书人会取得佳绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。休复，吉。",xiang:"",explanation:`六二：圆满而归，吉利。
《象辞》说：圆满而归之所以吉利，是能够去位让贤。`,shaoYong:"吉：得此爻者，与人共利，事业兴旺，病者痊愈。做官的遭贬者会复职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。频复，厉，无咎。",xiang:"",explanation:`六三：愁眉苦脸地回来，是遇到了危险，知难而退可以无灾祸。
《象辞》说：虽然愁眉苦脸地回来，但已脱离危险，理应没有灾祸。`,shaoYong:"平：得此爻者，事多反复，阴阳差错，时好时坏。做官的职位不稳定，更变无定。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。中行独复。",xiang:"",explanation:`六四：中途独自返回。
《象辞》说：中途独自返回，这是返回到道义上来。`,shaoYong:"平：得此爻者，好运可期，营谋得利。做官的会复职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。敦复，无悔。",xiang:"",explanation:`六五：经过考察，决定返回，可以无悔。
《象辞》说：经过考察，决定返回，可以无悔，意思是从内心用正道检察自己。`,shaoYong:"吉：得此爻者，会有积蓄，但要谨防父亲出意外。做官的有升职之机会。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。迷复，凶，有灾眚。用行师，终有大败，以其国君凶，至于十年不克征。",xiang:"",explanation:`上六：迷途难返，凶险，有灾祸。筮遇此爻，出兵打仗，终有大败，连累国君遭遇凶险，元气大伤，十年后还不能再举征伐。
《象辞》说：迷途难返遭遇凶险，这是由于君王违反君道。`,shaoYong:"凶：得此爻者，做事乖张，诸事不顺，静吉动凶。做官的会过于贪婪权力而有损。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:25,name:"无妄",nameFull:"无妄",originalText:"无妄。元，亨，利，贞。其匪正有眚，不利有攸往。",xiangCi:"象曰：天下雷行，物与无妄。先王以茂对时，育万物。",explanation:`无妄卦：嘉美通泰，卜问得吉兆。行为不正当，则有灾殃，有所往则不利。
《象辞》说：本卦上卦为乾为天，下卦为震为雷，天宇之下，春雷滚动，万物萌发，孳生繁衍，这是无妄的卦象。先王观此卦象，从而奋勉努力，顺应时令，保育万物。
《断易天机》解
无妄卦乾上震下，为巽宫四世卦。无妄卦为天雷震响之象，表示事与愿违，可能会有小的灾祸，但先凶后吉。`,shaoYong:`不欺不妄，真实至诚；顺乎自然，福禄深宏。
得此卦者，顺其自然，守正道者，诸事皆宜。但行为不检者，必招灾祸。
台湾国学大儒傅佩荣解
时运：正当好运，诸事皆宜。
财运：货到财来，自然开心。
家宅：屋运甚旺；门当户对。
身体：保持运动，自可消化。
传统解卦
这个卦是异卦（下震上乾）相叠。乾为天为刚为健；震为雷为刚为动。动而健，刚阳盛，人心振奋，必有所得，但唯循纯正，不可妄行。无妄必有获，必可致福。
大象：雷动于天，阳气舒发，为真实无虚妄之意。
运势：凡事宜守正，若行为不检者，必招灾祸。
事业：贵自知之明，从个人实际出发，不抱非分之想，脚踏实地，勤奋努力，检点行为，防意外灾祸。不计较得失，诚心追求，待机而动，事业必成。
经商：切勿勉为其难，遵循市场规律，讲究商业道德，屏弃投机心理，勿贪暴利，经过辛勤努力，日积月累，必将成功。
求名：以良好的动机，刻苦努力，丢弃幻想，但问耕耘，不问收获，终将有所获。
婚恋：双方务以诚相待，绝不可抱以轻率的态度，亦不宜急于求成、顺其发展，水到渠成。
决策：精力充沛，富有上进心，可有作为。但务必勤勉努力，诚心诚恳，奋发向上，刻苦钻研。不可因小有成就而得意忘形。不必追求所得，而应追求实干。遵循规律办事，等待时机再行动。尤其应清除非份的念头。这样，可实现自己的理想。
台湾张铭仁解卦
无妄：表示不要有一些空幻的想法，或是你的想法可能有点虚妄不切实际，主小凶。建议凡事要务实、踏实一点。也表示目前所处的状况，是有一厢情愿的心态，或是有点「妄想症」的不切实际心理。
解释：无妄之灾。
特性：言词犀利，易生是非，愤世嫉俗，不流俗，求知欲强，重精神层面。
运势：无妄的道理是提醒要真实无虚，踏实。故若做事操守而能坚贞固执者吉。若不行正道，行为不检点者，必然有灾祸至也。切忌沉醉于利、欲之中，慎之。
家运：有不和之情况，因受外界诱惑而心乱，须谨慎，否则导致破运。
疾病：不宜意气用事，应尽力疗养为宜，属呼吸系统，头、足之疾病。
胎孕：或有惊，终无碍。
子女：注意与其父不和而离家出走。
周转：诚心有望，不诚免谈。
买卖：若不要过份苛求，有利。
等人：一定会来。但有不欢而散之象，宜以和为贵。
寻人：已走远，不易寻找，东北或西北之向。
失物：找不到，似已遗失。
外出：不存妄想则平安无事。为谋私利或邪念而行则大为不利，不宜行。
考试：笔试有利，口试不利。
诉讼：因女人或死亡之事起纷争，宜和解，否则招凶。
求事：毫无头绪，勿过于草率为宜。
改行：不宜勉强。
开业：开业者可行。`,yaoCi:[{ci:"初九。无妄，往吉。",xiang:"",explanation:`初九：不要妄行非正，吉利。
《象辞》说：没有悖妄的行为，因为所有行动受到意志的控制。`,shaoYong:"吉：得此爻者，营谋得利。做官的会得到上司的赞许，百姓的爱戴。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。不耕获，不菑畲，则利有攸往。",xiang:"",explanation:`六二：不耕种就想收获，不开荒地就想种熟地。这些妄谬的行径怎能有利?
《象辞》说：不耕种而想收获，这种空妄的念头不能带来财富。`,shaoYong:"吉：得此爻者，正当好运，不劳而获。富人进财多，商人出外获利。当官的会升官。读书人会取得佳绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。无妄之灾。或系之牛，行人之得，邑人之灾。",xiang:"",explanation:`六三：意外的灾难。比喻说有人将牛系在不该系的地方，行人顺手牵牛获意外之得，邑人失牛受到意外之灾。
《象辞》说：行人意外得牛，邑人意外蒙灾。`,shaoYong:"凶：得此爻者，无妄之灾，破财损身。做官的不宜进取。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。可贞，无咎。",xiang:"",explanation:`九四：称心的占问，没有灾难。
《象辞》说：具有贞正的品德，没有灾难，理应如此。`,shaoYong:"平：得此爻者，宜守旧，图谋有实，不致虚浮。做官的宜守职，勿妄动。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。无妄之疾，勿药有喜。",xiang:"",explanation:`九五：患意外之病，不要忙乱服药，自可痊愈。
《象辞》说：出人意外的药物，不可随便服用。`,shaoYong:"平：得此爻者，营谋有成，病得愈，或有生育之喜。做官的纵有祸难，也会不辩自明，不解自释。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。无妄，行有眚，无攸利。",xiang:"",explanation:`上九：不要胡作妄行！将有灾殃，没有好处。
《象辞》说：谬妄的行为，是绝望无聊的表现。`,shaoYong:"平：得此爻者，好运已过，不可妄动，否则是非迭生，唯有变通可免祸。做官的妄动有被贬职之忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:26,name:"大畜",nameFull:"大畜",originalText:"大畜。利贞，不家食，吉。利涉大川。",xiangCi:"象曰：天在山中，大畜。君子以多识前言往行，以畜其德。",explanation:`大畜卦：吉利的贞兆。不食于家，食于朝廷，吉利。筮遇此卦，有利于涉水渡河。
《象辞》说：内卦为乾为天，外卦为艮为山，太阳照耀于山中，万物摄取阳光雨露，各遂其生，这是大畜的卦象。君子观此卦象，从而广泛地了解古人的嘉言善行，来培养自己的德行。
《断易天机》解
大畜卦艮上乾下，为艮宫二世卦。畜为积蓄之意，艮为止，提示人们要停止下来积蓄力量，多主吉。`,shaoYong:`以阳畜阴，制止欲进；坚守正道，先凶后吉。
得此卦者，宜坚守正道，脚踏实地，务实行事，方可成就大业。切勿骄傲自满，目空一切。
台湾国学大儒傅佩荣解
时运：守静二年，方可展运。
财运：暂时株守，良机必至。
家宅：家业日隆；婚姻大吉。
身体：健康有力。
传统解卦
这个卦是异卦（下乾上艮）相叠。乾为天，刚健；艮为山，笃实。畜者积聚，大畜意为大积蓄。为此不畏严重的艰难险阻，努力修身养性以丰富德业。
大象：天之大而在山之中，以小阻大，以阴畜阳，为止为养。
运势：处事不可好高骛远，宜脚踏实地，可成大业，忌目空一切。
事业：务必端正行为，修养德行。行为应大胆、果断，但需适可而止，注意休整，决不可冒险闯进。宜注意吸收前人的经验教训，有所畏而不行，否则必有危害。再取得成就之后，应适可而止，不可贪图眼前小利而走向反面。
经商：本着循序渐进的原则，把握正当的商业道德，会有重大收获。此时，切忌贪心不足，而应见机而退，保守事业，深思熟虑，再图发展，一味自信冒进，决不可取。
求名：注意积累学问，提高德行，勿三天打鱼两天晒网，持之以恒，且以学问、知识报效国家，抱负终将实现。
婚恋：顺利。建立在共同勤俭持家的基础上，相互坦诚而待，美满幸福。
决策：蓄财的人，但决不可抱投机取巧心理，得靠个人诚实工作，多动心机，真诚与他人合作，共创事业，困难时仍应持正道，尤其不可粗心大意，牢记成就大阻力也大的道理。
台湾张铭仁解卦
大畜：表示会有很多的积蓄、不动产的来到，吉相之卦。可以考虑较大的投资案，只是现金周转可能会较不利。蓄也有守财小气之象。
解释：大有积蓄。
特性：反应快，追求新知，不断创新，研究新事物，待人谦虚，修养好。贵人多助，容易少年发达，年轻就会有所成就。
运势：大凡诸事不可好高鹜远，脚踏实地、务实行事，始能成就大业。以蓄德为主可吉，若因得势而气盛凌人，目空一切者，终招失败之象。
家运：须知蓄者以备急需也。明此道理，持之力行，则可亨通。
疾病：病虽重，但可治，防胸肺，腹或手部之病，易积劳成疾。
胎孕：占得此卦主生贵子。
子女：儿女必声扬家风，可得幸福之象。
周转：可成。
买卖：再谈可成交 ，且有获大利之象也。
等人：不会来。
寻人：途中虚险，若一人等待必有凶。若是出走者，不必寻，会自回。
失物：有机会寻回。似是在圆形有盖盛存之物中。
外出：不宜守于家中，出行必得，且畅通无阻。不过应处处小心谨慎。
考试：上榜。
诉讼：因房地产引起，有破财之象，但纠纷可解。
求事：不利，宜再待时。
改行：不宜。
开业：开业者要有不怕挫折之决心全力以赴，有利可得。`,yaoCi:[{ci:"初九。有厉，利已。",xiang:"",explanation:`初九：将有危险，祭祀鬼神则能化凶为吉。
《象辞》说：将有危险，停止所为则能化凶为吉，因为这样就不会犯灾触难。`,shaoYong:"凶：得此爻者，宜守旧，不然会有不测之祸。做官的宜退居闲职，或退位。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。舆说輹。",xiang:"",explanation:`九二：车辐脱落，车轮坏了。
《象辞》说：车辐脱落车轮坏了，九二之爻居下卦中位，这种爻象表明毕竟没有忧患。`,shaoYong:"凶：得此爻者，须谨防是非，或有足疾、腰疾。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。良马逐，利艰贞。曰闲舆卫，利有攸往。",xiang:"",explanation:`九三：良马交配。占问艰难之事吉利。每天练习防卫性车战。有所往则有利。
《象辞》说：有所往则有利，所往必得，尚可符合心意。`,shaoYong:"平：得此爻者，会得到长辈的重用，或知己相助，前运辛苦，后可有获。做官的会有实权。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。童豕之牿，元吉。",xiang:"",explanation:`六四：将木棒横缚在好斗公牛的犄角上。筮遇此爻，大吉大利。
《象辞》说：六四爻辞讲的大吉大利，是指将有喜庆之事。`,shaoYong:"吉：得此爻者，营谋有望，财富增加。做官的会有升迁之喜。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。豮豕之牙，吉。",xiang:"",explanation:`六五：将好奔突的大猪圈起来，吉利。
《象辞》说：六五爻辞讲的吉利，是指有吉庆之事。`,shaoYong:"吉：得此爻者，营谋遂意，多有喜庆之事。做官的会高升。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。何天之衢，亨。",xiang:"",explanation:`上九：得到上天的福佑，大吉大利。
《象辞》说：得到上天的福佑，行事畅通无阻。`,shaoYong:"吉：得此爻者，万事如意，心想事成，好运连连。做官的会得到上司的提拔，或被举荐而高升。读书人会进取成名。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:27,name:"颐",nameFull:"颐",originalText:"颐。贞吉。观颐，自求口实。",xiangCi:"象曰：山下有雷，颐。君子以慎言语，节饮食。",explanation:`颐卦：占卜得吉兆。研究颐养之道，在于自食其力。
《象辞》说：本卦上卦为艮为山，下卦为震为雷，雷出山中，万物萌发，这是颐卦的卦象。君子观此卦象，思生养之不易，从而谨慎言语，避免灾祸。节制饮食，修身养性。
《断易天机》解
颐卦艮上震下，为巽宫游魂卦。颐为修养、调养，雷震于山，为春来之兆，万物开始生养，因此颐卦为发展之兆，多主吉。`,shaoYong:`养正养育，谨言节食；观察实务，自知审慎。
得此卦者，对于言语及饮食，均须谨慎。宜守正道，谨言慎行，心怀阴谋者会招灾祸。
台湾国学大儒傅佩荣解
时运：生机显达，谨言慎行。
财运：内外升降，未必流通。
家宅：小心防火；贤妇从夫。
身体：上寒下热，五日乃愈。
传统解卦
这个卦是异卦（下震上艮）相叠。震为雷，艮为山。山在上而雷在下，外实内虚。春暖万物养育，依时养贤育民。阳实阴虚，实者养人，虚者为人养。自食其力。
大象：形如口腔之象，取其饮食之道，须慎言，注重日常生活。
运势：处事欠缺周详考虑，不宜心怀阴谋，要守正道而善方吉。
事业：凡事得靠个人追求，自己奋斗，而不能依赖他人。更不得用不光彩的手段谋求财物。只要遵循正道，自食其力，谨言慎行，一定会有好的机遇。这时，经过一番艰苦奋斗，能够成功。
经商：不得急于求成，应谨慎小心，循序渐进，诚以待人，真诚与他人合作，因时制宜，不断追求新的开拓方向，必要时可适当冒险。
求名：以丰富自身知识为目的，知足安乐，刻苦努力，成功的希望极大。
婚恋：不可急于求成，关键在于加强自己的修养。一旦选中应全力追求，尤其不可三心二意。
决策：注意道德修养，乐于尽力而为地去帮助他人，救人急难，不贪求不应得到的财物。因此，能受到他人的尊重，也能不断得到外来的援助，个人事业十分顺利，成功的可能性很大。尤其不可粗心大意，牢记成就大阻力也大的道理。
台湾张铭仁解卦
颐：表示养也，主小吉带一点凶。养跟饮食有关，也表示养育、教育的意思，对情势需要充分了解，不要贸然的就下任何的决定。颐，又与口有关，故需慎防小人口舌之灾。
解释：静卧，不向前冲。
特性：有欠缺考虑、鲁莽妄动之害。若有怀阴谋，与人互相猜疑或争端者更不利。 要守正道而善行之，凡事切忌任性非为。
运势：先苦后甜，失败后成功型，物质金钱运佳，乐善好施，贵人多助。不断提升修养自己，容易得到社会好的名声。
家运：陷于痛苦深渊，有身败名裂之象，宜改进言行，冷静反省，力求幸福才是。
疾病：占病为凶，久病者险，为肠胃、咽喉、手足之疾。
胎孕：宜求香火保佑。
子女：过份溺爱反有害。尤其须注意儿女健康，以免日后因身体虚弱而不能获福。
周转：是否成功，要看自己是否有诚心。
买卖：守旧为宜，不宜谋求新事，否则不利。
等人：难来，中途有碍。
寻人：不久相逢。东北或东之向。
失物：尽快去找，似被物件上下夹着。
外出：应慎重，不宜过多外出。如无充分准备，仓促出行，将可能会遇到凶险。
考试：尚可。
诉讼：我告他人终不能成，宜速和解。
求事：不成。
改行：不宜，勿勉强。
开业：开业者不利，须再待时。`,yaoCi:[{ci:"初九。舍尔灵龟，观我朵颐，凶。",xiang:"",explanation:`初九：自己储藏着大量的财宝，还要羡嫉人家的财物，必遭凶险之事。
《象辞》说：羡嫉人家的财物，这不是高尚的行为。`,shaoYong:"凶：得此爻者，为争夺财利而起祸，大凡心底善良守正道者可无忧。做官的会受贿，失其廉。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。颠颐，拂经；于丘颐，征凶。",xiang:"",explanation:`六二：为了糊口，就得在山坡上开荒种地。为了生计而去抢劫别人，这是凶险之事。
《象辞》说：六二爻辞说抢劫则凶，因为这种行径违反道义。`,shaoYong:"凶：得此爻者，大起大落，是非不一，凶者病致死。做官的须防被贬职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。拂颐，贞凶。十年勿用，无攸利。",xiang:"",explanation:`六三：违背养生正道，靠歪门邪道过活，占问得凶兆。十年都得倒霉，永无好处。
《象辞》说：十年都得倒霉，因为这种行为大有悖于道义。`,shaoYong:"凶：得此爻者，运势低迷，荒诞无稽，甚至有生死离别之伤。做官的有丧名失节之患。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。颠颐，吉。虎视眈眈，其欲逐逐，无咎。",xiang:"",explanation:`六四：所求不过糊口，害人之心不可存，吉利。虎视眈眈，防人之心不可无。这样就可以安享天年，悠然自得，无灾祸。
《象辞》：所求不过餬口，之所以吉利，因为君上施舍甚广，足以养民。`,shaoYong:"吉：得此爻者，会得到好人的帮助，营谋遂意。做官的会得到祖上的恩惠，幸宠有加。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。拂经，居贞吉。不可涉大川。",xiang:"",explanation:`六五：开荒种地，平居度日，占问得吉兆。筮遇此爻，不可涉水渡河。
《象辞》说：平居守正，之所以吉利，因为其人安份循道，服从君上。`,shaoYong:"吉：得此爻者，会有依靠，事可成，但不可乘船涉险。做官的会因人而功可成，位可保。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。由颐，厉吉。利涉大川。",xiang:"",explanation:`上九：遵循生活正道，先艰难而终吉利。筮遇此爻，有利于涉水渡河。
《象辞》说：遵循生活正道，先艰难而终吉利，因为善良之人终得善报。`,shaoYong:"吉：得此爻者，营谋有成，无往不利。做官的爵禄荣重。读书人会取得佳绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:28,name:"大过",nameFull:"大过",originalText:"大过。栋桡。利有攸往，亨。",xiangCi:"象曰：泽灭木，大过。君子以独立不惧，遁世无闷。",explanation:`大过卦：屋粱压得弯曲了。有所往则有利，通泰。
《象辞》说：本卦上卦为兑为泽，下卦为巽为木，上兑下巽，泽水淹没木舟，这是大过的卦象。君子观此卦象，以舟重则覆为戒，领悟到遭逢祸变，应守节不屈，稳居不仕，清静淡泊。
《断易天机》解
大过卦兑上巽下，为震宫游魂卦。大过即太过，事情过头了，但大过卦仍是中庸顺从之象，主其人得协助、能前进。`,shaoYong:`阳多阴少，势将颠覆；本未俱弱，量力而为。
得此卦者，身心不安，事不如意，却又强意而行，大有后悔之时，谨防官非及水险。
台湾国学大儒傅佩荣解
时运：收敛自省，未可求名。
财运：低价高涨，不易把握。
家宅：防止倾斜；老少配婚。
身体：肝肾皆累，不易治好。
传统解卦
这个卦是异卦（下巽上兑）相叠。兑为泽、为悦，巽为木、为顺，泽水淹舟，遂成大错。阴阳爻相反，阳大阴小，行动非常，有过度形象，内刚外柔。
大象：中间四阳爻，为结实之梁，但初末为阴爻，力弱不支，则势将摧折。
运势：有力不从心，负担过重之象，多烦恼，防官非及水险。
事业：事业出现隐患，甚至危机四伏，务必十分小心谨慎，唯有坚守中道，以谦虚和悦的手段，胆大心细，求助他人相助。必要时可采取非常手段，不拘常规，予以冒险。
经商：操之过急，发展过快，宜收缩调整。竞争处于不利地步，切勿过度自信，更不得刚愎自用，宜随时观测风向，待机行动。在有确切把握之下，不妨冒险，争取时机的好转。
求名：最忌不务实际，追求不切实际的虚名，以致盛名不符。唯以谦逊态度，谨慎行动，潜心努力，不怕世人眼舌，一往直前，追求最初的目标。
婚恋：自知之明最为重要，不可急于求成，应慎重考虑，并以正当手段，促成事情的成功。但也不排除必要的精明手段。
决策：处在非常时期，若不能妥善处置，则极为不利，针对实际情况，既不可轻举妄动，也不可优柔寡断，而应刚柔相济，虚心征求他人意见，慎重行动，大胆追求，却又不怕流言，争取时局好转。
台湾张铭仁解卦
大过：表示犯了一个很大的过错，主大凶。诸事不顺，切忌此时作任何的决策。需努力找出问题之所在，尽快解决才能扭转劣势。
解释：极大过失。
特性：心直口快，性急，易得罪他人，是非小人多，但交际层面广，朋友多，但也易受朋友之拖累。
运势：诸事衰退，多烦恼，防官非及水险。有力而不从心，负担过重之象。逢挫折而将坠落之时运，故得此卦者，凡事切忌轻举妄动，否则有过。
家运：困难重重，摇摇欲坠之衰运。夫妻感情不睦，且均有向外发展之趋势，若想挽回此破象，双方宜改正自己的缺点，否则破裂也。
疾病：严重，须耐心治疗，为肺、神经系统，女占得妇科经带之疾。
胎孕：女儿或男儿均与六亲缘薄，育养困难。
子女：子女与双亲间感情薄弱，又缺乏谅解，有症结也。
周转：无啥希望。
买卖：不可做超过自己本身财力之生意交易，否则定有折损，亦不成。
等人：不会来。
寻人：不易找到，可向东南方或西方，难寻。但若动用人手共寻找，可见。
失物：无法发现，不能物归原主。
外出：行动务必慎重，但不可过于拘泥，必要时不妨采取特殊行动。
考试：苦恼也，不佳。
诉讼：有文书之烦，即使求和也未能如愿。
求事：困难很多。
改行：不宜图不相应之事。
开业：开业尚属虚，且待时候。`,yaoCi:[{ci:"初六。藉用白茅，无咎。",xiang:"",explanation:`初六：恭敬地用白茅垫着祭品，可以无灾祸。
《象辞》说：“恭敬地用白茅垫着祭品”，柔软之物铺垫在下面，正像初六阴爻居一卦之下位。`,shaoYong:"平：得此爻者，谨慎行事，财利可固。凶者，防孝服之忧。做官的小心谨慎则禄位巩固。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。枯杨生稊，老夫得其女妻，无不利。",xiang:"",explanation:`九二：枯杨发芽，老头子娶少女为妻，并无不吉利。
《象辞》说：夫老妻少，年龄不当，这是错误的婚配。`,shaoYong:"吉：得此爻者，或娶妻纳妾，或生子，君子得少妻义子。做官的去位者会复职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。栋桡，凶。",xiang:"",explanation:`九三：屋梁弯曲，这是凶险之象。
《象辞》说：屋梁弯曲之所以凶险，因为栋曲即屋倾，无法支撑。`,shaoYong:"凶：得此爻者，须防大难而遭致家产有失，或有足目之疾。做官的须谨防被贬职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。栋隆，吉。有它吝。",xiang:"",explanation:`九四：屋梁挺直，吉利。但有意外之患则不好应付。
《象辞》说：屋梁挺直之所以吉利，因为屋梁不弯曲则房屋不倾倒。`,shaoYong:"吉：得此爻者，多有修造之事，可做大事，勿谋小事。做官的必能受到重用。读书人进取成名。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。枯杨生花，老妇得其士夫，无咎无誉。",xiang:"",explanation:`九五：枯杨开花，老妇人嫁给一个年轻人，这件事不好也不坏。
《象辞》说：枯杨开花，其花怎能长开不谢。老妇人嫁给年轻人，这种事总不大光彩。`,shaoYong:"平：得此爻者，营谋不利，或喜中生忧，美事成丑；先逆后顺之象。做官的不可久任。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。过涉灭顶，凶，无咎。",xiang:"",explanation:`上六：盲目涉水，水深过顶，虽遇凶险，但终归没有灾难。
《象辞》说：盲目涉水遭致危险，事已至此，谴责亦属无益。`,shaoYong:"凶：得此爻者，不宜进取，退守为安，面部或有疾。做官的有功高震主身危之祸。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:29,name:"坎",nameFull:"坎",originalText:"坎。习坎，有孚，维心亨，行有尚。",xiangCi:"象曰：水洊至，习坎。君子以常德行，习教事。",explanation:`习坎卦：抓获俘虏，劝慰安抚他们，通泰。途中将得到帮助。
《象辞》说：坎为永，水长流不滞，是坎卦的卦象。君子观此卦象，从而尊尚德行，取法于细水长流之象，学习教化人民的方法。
《断易天机》解
坎卦坎上坎下，为坎宫本位卦。坎为陷入、陷阱，为险难之境。此时应坚持信心，才能豁然贯通。`,shaoYong:`艰难危险，重险重陷；事多困阻，谨慎行事。
得此卦者，运气不佳，多难危险，事多困阻，宜谨言慎行，退守保安。
台湾国学大儒傅佩荣解
时运：逐步升迁，随时防患。
财运：财如流水，商运亨通。
家宅：邻居营造；亲上加亲。
身体：水泻之症，虔心祷告。
传统解卦
这个卦是同卦（下坎上坎）相叠。坎为水、为险，两坎相重，险上加险，险阻重重。一阳陷二阴。所幸阴虚阳实，诚信可豁然贯通。虽险难重重，却方能显人性光彩。
大象：两水重叠，坎水为险，进固险，退亦险，进退两难。
运势：危机重重，宜沉著应付，保持心境开朗，凡事莫与人争。
事业：陷入重重艰难险阻之中，险况丛生。既不得冒险，也不可束手待毙，应以积极态度，努力创造条件，改变处境，化险为夷。务必实心实意，充满信心，不图侥幸，不辞艰险，宜静观待变，运用智慧，突破险境，转危为安。
经商：十分不利，甚至陷入面临破产的境地，但内心应沉着踏实，保持头脑冷静，身陷险境而心不陷，勿轻举妄动，先求自保以观变，把握时机以脱险。
求名：不为他人理解，怀才不遇，千万不可自暴自弃。不改初衷，泰然自若，循序渐进，终可为人理解和发现。
婚恋：多遭不利，应冷静分析原因，积极改变自身条件。双方同舟共济，共渡难关。
决策：不幸。然而是转运前的考验。只要能不因困境而失常，且不图侥幸，保持信心，勿自陷险境。镇定自若，不轻举妄动，洞察时机，必可转危为安，成出险之功。
台湾张铭仁解卦
水：表示陷溺被水淹灭之意，主凶象，四大难卦第二卦。困难已到来了，此时正在挣扎中，随时会被淹灭而破散。若能破釜沉舟、奋力一击，或许尚有转机，需积极找求贵人，才会有生机。
解释：漂浮，被情所困。
特性：不安定感，好冒险，投机，变换工作环境，爱情多困扰不顺。
运势：危机重重，宜容忍自重，保持心境开朗，沉着应付，则可有脱险之机。吃得苦中苦，方为人上人，凡事莫与人争长短，否则有不幸灾害。
家运：时运不济，陷于困境之中，不和，且有分裂之忧，凡事宜慎重行事。
疾病：病重宜速治，否则难救，注意肾脏，膀胱生殖器病。
胎孕：临产有虚惊，难产之象。
子女：子女多劳苦，宜忍辱负重，会有出人头地的一天。子女宜防水厄之灾。
周转：难成。
买卖：亏损。
等人：不来。
寻人：此人因家庭不和或不得志而出走，速寻北方水边。
失物：找不回来。有失窃可能，或沉在水底。因坎水有困难之意。
外出：大胆外出，另辟新路，必有所成，且得到他人相助。
考试：不理想。
诉讼：有盗贼之讼，或田土之争，有理说不清，凶象。
求事：不利。
改行：不宜，应暂时守住本行。
开业：开业者不利，有陷入困难之象。`,yaoCi:[{ci:"初六。习坎，入于坎窞。凶。",xiang:"",explanation:`初六：坎坑之中又有坎坑，陷入重坑之中，凶险。
《象辞》说：“坎坑之中又有坎坑，陷入重坑当中”，不行坦途，偏要走险道，必招致灾殃。`,shaoYong:"凶：得此爻者，时运不佳，宜防跌入陷阱灾难之中。做官的须防小人。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。坎有险，求小得。",xiang:"",explanation:`九二：坑坑坎坎，道有险阻。敢于行险道，或小有收获。
《象辞》说：敢于行险道，或小有收获，因为九二之爻居下卦的中位，像人尚未偏离正道。`,shaoYong:"平：得此爻者，有小成就，女命或为侍妾，凶者防险难或生心腹血气之疾。做官的会有小的成就，大事不成。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。来之坎坎，险且枕，入于坎窞，勿用。",xiang:"",explanation:`六三：向坑坎走来，这坑坎既险又深，陷入重坎之中，非常不利。
《象辞》说：来到这多坎之地，终无功利。`,shaoYong:"凶：得此爻者，多坎坷，多争诉之事。做官的宜退守。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。樽酒簋贰，用缶，纳约自牖，终无咎。",xiang:"",explanation:`六四：用铜樽盛酒，用圆簋盛饭。然而对于关押在坎窖里的犯人，只须用瓦盆子就行了，牢饭从天窗里送进取出，其人遭此噩运，但最后还是没有危险。
《象辞》说：“平时享受美食美器，此时用瓦盆子吃牢饭”，爻象表明六四阴爻处于九五阳爻之卞，像人被强者所压，受此磨难。`,shaoYong:"平：得此爻者，多喜事，或有结婚之喜。做官的多饮食之乐。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。坎不盈，只既平，无咎。",xiang:"",explanation:`九五：坎坑虽没有填满，小山头却被锄平。没有灾难。
《象辞》说：小山头虽锄平，但坎坑尚未填满，说明道路不平，未成坦途。`,shaoYong:"平：得此爻者，平淡无常，宜养精蓄锐。做官的没有危难，职位无忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。系用徵纆，寘于丛棘，三岁不得，凶。",xiang:"",explanation:`上六：把犯人用绳索捆紧，投入周围有丛棘的监狱中，三年不得释放，这是凶险之事。
《象辞》说：上六爻辞所描述的，正说明官吏违背正道，违法囚人，历时三年之久。`,shaoYong:"凶：得此爻者，须防牢狱之灾。做官的须防职权旁落之忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:30,name:"离",nameFull:"离",originalText:"离。利贞，亨。畜牝牛，吉。",xiangCi:"象曰：明两作，离。大人以继明照四方。",explanation:`离卦：吉利的占问，通泰。饲养母牛，吉利。
《象辞》说：今朝太阳升，明朝太阳升，相继不停顿，这是离卦的卦象。贵族王公观此卦象，从而以源源不断的光明照临四方。
《断易天机》解
离卦离上离下，为离宫本位卦。离可取光明、美丽、离散之意，利文章而不利出师。`,shaoYong:`附丽光明，谦虚缓进；公正柔和，顺守则吉。
得此卦者，宜谦虚谨慎，稳步进取，则前途光明。急进及意气用事者必有所损失。
台湾国学大儒傅佩荣解
时运：努力修德，前途光明。
财运：与火有关，皆有所得。
家宅：贵人之屋；可得继室。
身体：热病严重，小心大去。
传统解卦
这个卦是同卦（下离上离）相叠。离者丽也，附着之意，一阴附丽，上下二阳，该卦象征火，内空外明。离为火、为明，太阳反复升落，运行不息，柔顺为心。
大象：两离火相重，上下通明之象，火有气，但无形，主不实不定之意。
运势：外观极盛，烈日当空之象，凡事不宜急进及意气用事。
事业：已快进入顶点，盛极而衰，务必总结经验教训，趋善避邪，以顺自养，居危知危，激励志气，切勿妄动。尤应求助中正的人援助，以期重振事业。
经商：不要急于求成，宜兢兢业业，忧深虑远，考察市场行情，公平竞争，不可投机取巧，争取与他人密切合作。
求名：方向未确定之前，不可到处乱撞，应持之以恒，执意追求，虚心向有才德的长者请教。
婚恋：自己寻找对象恐怕有困难，最好请可靠的朋友、长辈帮忙，不得急躁。双方应相互尊敬，最忌生邪念。
决策：乐天知命，顺应自然，年轻时急于上进，未能实现理想，但坚持中正、谦和，可无灾祸，时常警觉，更可化险为夷。在危难时要寻求依托，但要慎重选择对象。晚年应知天命，尤不可不顾时势而轻举妄图动。
台湾张铭仁解卦
火：表示智慧、明亮、温暖。六冲卦、纯卦，主大吉大凶、大好大坏之象，也表虚象不实之意。
解释：变动，突发火光。
特性：喜欢与人竞争，冲动，自尊心强，不服输，容易遭人排斥反对。依赖自己努力，他人助力较少。
运势：虽然目前外观极盛一切顺利，可能为假象、虚象，而且双火之燃，其内部、内情已有所损，又双火之烈，如烈日中天，故凡事宜守之，勿太急进，待人以谦和、理性，否则必有所损失。宜顺从长辈，勿因急躁而妄动或意气用事，则可欣欣向荣也。
家运：富有幸福之运，必须保持仁和谦恭，骄傲自大者易招致失败，宜谦逊处世。
疾病：急病可解，久病则凶，宜耐心调养、为心脏眼科血疾。
胎孕：胎有不安。产母不宜出外游。
子女：子女幸福，但有娇生惯养之嫌，勿疏于教导为上。
周转：可得到上辈的帮助渡过难关。
买卖：交易必得利，忌用不法手段。
等人：一定会来。
寻人：此人因受到诱惑或煽动而出走。南方可寻，且小有是非。
失物：动作快，可寻回。
外出：可行动，事先应准备充分，不可仓促上路。
考试：成绩不错。
诉讼：只宜人侵己，不宜己侵人，主动者不利。
求事：尊重长辈安排。待时机可获良好事业。
改行：可极力推展。
开业：开业者吉象。`,yaoCi:[{ci:"初九。履错然，敬之，无咎。",xiang:"",explanation:`初九：听到纷来沓至的脚步声，立时警惕戒备，可以无灾难。
《象辞》说：听到纷至沓来的脚步声，立时警惕戒备，可以避免灾难。`,shaoYong:"平：得此爻者，须防无妄之灾，宜谨慎，或有足疾。做官的宜安守。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。黄离，元吉。",xiang:"",explanation:`六二：天空出黄霓，大吉大利。
《象辞》说：黄色附丽于身，大吉大利，因为六二之爻居下卦中位，像人得中正之道。`,shaoYong:"吉：得此爻者，财利可获。做官的会受到重用。读书人会取得佳绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。日昃之离。不鼓缶而歌，则大耋之嗟，凶。",xiang:"",explanation:`九三：黄昏时分有霓虹出现在天空，这是凶兆，人们居然不击鼓唱歌禳除它，老人感到悲哀，灾殃快要来了。
《象辞》说：黄昏时分的霓虹，怎么会长留不散。`,shaoYong:"凶：得此爻者，乐中生悲，吉中生愁，险难迭生。做官的告休。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。突如其来如，焚如，死如，弃如。",xiang:"",explanation:`九四：灾难突然降临，敌人见房屋就烧，见人就杀，此处变成一片废墟。
《象辞》说：灾难来得如此突然，人们无处藏身逃命。`,shaoYong:"凶：得此爻者，时运不济，困难重重，或和长辈不睦，或遭官灾。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。出涕沱若，戚嗟若，吉。",xiang:"",explanation:`六五：灾难过后，人们痛哭，人们悲叹，然而吉利。
《象辞》说：六五爻辞所讲的吉利，因为爻象表明，六五之爻处于上九之下，像人们能够附丽于王公而得救。`,shaoYong:"平：得此爻者，不宜进取，宜守常。做官的在位者得志，退职者多险危。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。王用出征，有嘉。折首，获匪其丑，无咎。",xiang:"",explanation:`上九：国王出征，反击敌人，将有嘉国的国君斩首，抓到了许多俘虏，无灾无难。
《象辞》说：君王出兵反击，以安定邦国。抓到了许多俘虏，是说大获胜仗。`,shaoYong:"吉：得此爻者，时运佳，多喜事，经营获利。做官的会功成名就，读书人会取得好成绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:31,name:"咸",nameFull:"咸",originalText:"咸。亨，利贞。取女吉。",xiangCi:"象曰：山上有泽，咸。君子以虚受人。",explanation:`咸卦：通达，吉利的贞卜。娶女，吉利。
《象辞》说：本卦下卦为艮，艮为山，上卦为兑，兑为泽，山中有泽，山气水息，互相感应，是咸卦的卦象。君子观此卦象，取法于深邃的山谷，深广的大泽，从而虚怀若谷，以谦虚的态度，接受他人的教益。
《断易天机》解
咸卦兑上艮下，为兑宫三世卦。咸为感应，万物皆有感应，男女感应，夫妇康宁，感应之事，无有不亨。`,shaoYong:`两性交感，正道感应；物击则鸣，识时知机。
得此卦者，宜谦虚待人，则会吉祥如意，谋事可成。但勿为不正当感情而意乱情迷。
台湾国学大儒傅佩荣解
时运：谦虚待人，可保功名。
财运：转运贩卖，必可图利。
家宅：知其所止；两性合好。
身体：虚弱宜补。
传统解卦
这个卦是异卦（下艮上兑）相叠。艮为山；泽为水。兑柔在上，艮刚在下，水向下渗，柔上而刚下，交相感应。感则成。
大象：少男在少女之下，彼此感应，象征新婚，两性交感。
运势：如意吉祥，但勿为不正当感情而意乱情迷。
事业：和为贵，和则万事兴，务以诚感人，以诚待人。广泛交往朋友，谦虚礼让。树立大志向，坚持主见，不可盲目随大流。不利时应安居待机，不可妄动强求。
经商：有利可图。但应以纯正之心，以诚待人，加强合作。市场若不景气，决不可妄动，不可强求，而应静待发展，虚心听取不同意见。
求名：志向应宏大，脚踏实地，虚心请教他人，使人悦而应，帮助、重用自己。切莫自我封闭，更不得冷漠孤僻，以广阔的胸怀发展自身。
婚恋：成功的可能性极大。双方很有感情，但动机务必纯正，婚姻方可幸福、永久。
决策：吉祥如意。人际关系好，善于交际。以真诚的态度，无私的心去处世，不会有不利的地方。与他人合作应坚持原则。办事不可优柔寡断。不顺利时，应停止行动，总结经验，以图发展。待人诚恳，但不可与玩弄口舌的小人交往，防止受骗。
台湾张铭仁解卦
咸：表示感动也。主吉象。感，有如青春男女，清纯无暇的感情，心心相印有感而发的情感，得此卦，与感情有非常大的关系，也可引伸为对一种理念的认同和欣赏。咸，并无利欲的情色纠葛，是属于比较「感性的」一种感觉。 对男女之间的感情，是最大的吉象。
解释：合和。
特性：罗曼蒂克型，异性缘佳，感情丰富，六亲缘浓，口才佳，贵人多助。
运势：吉祥如意。但勿为不正当的感情而意乱迷惑，或过于冲动。然得此卦时，会有男贪女爱之争，非名正者必遭损，宜慎之。
家运：目前非常融洽，而后亦然。如夫妇间另有不正当之交往者，宜明哲保家，避免有越轨情事为宜。
疾病：防泌尿系统病，肠胃病及性病等，须疗养得法，否则不利。
胎孕：有兴家和泰之运。
子女：感情极融洽，幸福。
周转：可成。
买卖：交易可成有利。
等人：会带来好消息。
寻人：因色情之事出走，不久会出现。其人有在住处动身不得之忧，恐有些是非。
失物：尽速找寻，可以取回，延误时机，则找不回来。
外出：虽希望外出，但暂时不宜远行。待时机成熟时再出行。
考试：成绩佳。
诉讼：提防桃色纠纷，诸事宜和解，有贵人相助。
求事：皆能如偿所愿。
改行：吉利，可进行。
开业：大吉大利。`,yaoCi:[{ci:"初六。咸其拇。",xiang:"",explanation:`初六：伤其大脚趾。
《象辞》说：大脚趾在动，说明其志在于出行。`,shaoYong:"平：得此爻者，行事过急，多难成就。做官的须修身养性，等待机会，京官出，闲官起。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。咸其腓，凶，居吉。",xiang:"",explanation:`六二：伤其腿肚子，这是凶兆。小腿负伤，不宜出门，安居不动，自然平安。
《象辞》说：虽遇凶兆，但安居不动，则可以转凶为吉。顺从贞卜之象可以避免灾害。`,shaoYong:"平：得此爻者，奔波徒劳，宜静不宜动。做官的在位者吉，出差者有险。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。咸其股，执其随，往吝。",xiang:"",explanation:`九三：伤其股，并伤及股下之肉。带伤出行，定遭灾难。
《象辞》说：挪动其大腿说明他不安所处。但是其志向不过是追随他人，可见他所持的主张也卑下，不足取。`,shaoYong:"平：得此爻者，最好退守，做官的谨防被贬。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。贞吉悔亡，憧憧往来，朋从尔思。",xiang:"",explanation:`九四：贞卜吉利，无所悔恨。纷沓往来，朋友们都顺从你的意旨。
《象辞》说：贞正，吉利，无所悔恨，因为没有蒙受损害。虽然有几个朋友纷沓往来，但还是要耗费不少心思。`,shaoYong:"平：得此爻者，朋友相助，可谋小事，大事有困难，心绪不定。做官的秉公执政，升迁有望。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。咸其脢，无悔。",xiang:"",explanation:`九五：伤其背肉，但没有灾祸。
《象辞》说：耸动其背，作出背负重物的反应，看来其志在卑微之事。`,shaoYong:"平：得此爻者，人情不合，营谋微小。做官的多与同僚不睦。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。咸其辅，颊，舌。",xiang:"",explanation:`上六：伤其腮帮、脸颊、舌头。
《象辞》说：伤其腮帮、脸颊、舌头，这是翻腾口说招引的灾祸。`,shaoYong:"平：得此爻者，多口舌之争，防止被他人诽谤，从事演讲、技艺、评论者吉。做官的或遭言责。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:32,name:"恒",nameFull:"恒",originalText:"恒。亨，无咎，利贞。利有攸往。",xiangCi:"象曰：雷风，恒。君子以立不易方。",explanation:`恒卦：通达，没有过失，吉利的卜问。有所往则有利。
《象辞》说：本卦上卦为震，震为雷，下卦为巽，巽为风，风雷荡涤，宇宙常新，这是恒卦的卦象。君子观此卦象，从而立于正道，坚守不易。
《断易天机》解
恒卦震上巽下，为震宫三世卦。恒卦的意思就是要坚持、恒定、有恒心，这样才能获得亨通。`,shaoYong:`经常恒久，长久不变；君子以利，不易其方。
得此卦者，须立身正道，坚守不易，持续努力，必能亨通。缺少毅力，朝三暮四者则不会成功。
台湾国学大儒傅佩荣解
时运：努力耕耘，不可躁进。
财运：贸易之地，不可更改。
家宅：方向不改；百年好合。
身体：气喘有痰，仍服旧方。
传统解卦
这个卦是异卦（下巽上震）相叠。震为男、为雷；巽为女、为风。震刚在上，巽柔在下。刚上柔下，造化有常，相互助长。阴阳相应，常情，故称为恒。
大象：震者为动，宜向外发展，巽为入，为内向，一内一外，各居本位，故能永恒不变，喻夫妇之道。
运势：万事亨通，能恒久努力，安守本份则吉，妄动则招灾。
事业：诸事无不成于恒，持之以恒，必有成效。恒乃成功之本。为此，务必动机纯正，守静而勿躁动，不可急于求成，也不可固守死道，应从个人实际出发。最忌人云亦云，最宜随机应变。如此，诸事顺而成。
经商：大胆行动，有所往必有所利。注意市场行情和周围的情况。随时变化经营策略，但不得改变常理常道，坚持慎重选择的方向，勿追随潮流。忌不自量而冒险强求。
求名：有始有终，善始善终，立于正道，坚持不懈，学习方面尤应提高涵养，必可成。
婚恋：好事多磨，有曲折，唯不可见异思迁，和睦相处，勿固执己见。
决策：循序渐进，不要在一开始时期望过高，但不能因此放弃追求，应脚踏实地，从实际也发，不要好高骛远，更不可不自量，勿冒险激进，勿反复无常。坚信宇宙常新，不断修正自己的见解，补充新内容。
台湾张铭仁解卦
恒：表示维持不变的迹象。是个状况卦，吉凶未定。显示一种会持续很长久的一种状况。好的或坏的情形，都将会再持续下去。事业投资、感情婚姻都不宜在此时做任何的计划或变动。
解释：要有恒心。
特性：主动，积极，坚忍，百折不挠，律己严，反应快，追求成功，理财佳，组织能力好。
运势：诸事亨通而没有犯错方能恒久。其象利于正常固守，并须有毅力持行。雷风者，知守常则吉，妄动者则不能亨通。
家运：全家上下均各循正轨而行，幸福家庭也。
疾病：为慢性及须长期治疗之疾。注意肝之疾。
胎孕：胎有烦恼，但无碍。
子女：与双亲感情融治，幸福之至。
周转：不成问题。
买卖：有贵人，得力终成。利益双收。
等人：迟到。
寻人：外出之人平安无事，会自己回来。
失物：不能寻回。
外出：果敢行动，有利。
考试：会得高分。
诉讼：小人招祸，但宜速战速决，不利拖延，宜和解。
求事：向东南有利。
改行：忌做无妄之事，需注意风险。
开业：吉利可行。`,yaoCi:[{ci:"初六。浚恒，贞凶，无攸利。",xiang:"",explanation:`初六：掘进不止，卜问凶险，没有什么好处。
《象辞》说：掘进不止之所以凶险，因为冒险求深，必遭崩塌之祸。`,shaoYong:"凶：得此爻者，人情乖离，前途渺茫，静守可免祸。做官的难于受到上司的赏识。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。悔亡。",xiang:"",explanation:`九二：没有悔恨。
《象辞》说：九二爻辞说没有悔恨，因为能坚守中正之道。`,shaoYong:"平：得此爻者，安分守己则无忧。做官的宜洁身自爱，谨慎行事。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。不恒其德，或承之羞，贞吝。",xiang:"",explanation:`九三：不能保持其德行，必然蒙受耻辱。卜问得艰难之兆。
《象辞》说：不能保持其德行，反复无常，无人信任，必然落到无所容身的地步。`,shaoYong:"凶：得此爻者，须防小人诽谤，争诉之扰。做官的须防被贬。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。田无禽。",xiang:"",explanation:`九四：畋猎无所获。
《象辞》说：长久处于不适宜的环境，怎会有收获？`,shaoYong:"凶：得此爻者，营谋费力，难以成事。做官的时运不济，有所退步。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。恒其德，贞。妇人吉，夫子凶。",xiang:"",explanation:`六五：操行一贯。卜得妇人吉利，丈夫凶险。
《象辞》说：爻辞讲妇人操守贞洁则吉利，这是符合从夫以终其身的道理。丈夫则因事制义，其道多方，如果以妇德来约束男子，则必遭凶险。`,shaoYong:"凶：得此爻者，多招毁谤，有所损失。做官的多阿谀权势而有失。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。振恒，凶。",xiang:"",explanation:`上六：久动不息，凶险。
《象辞》说：统治者朝令夕改，政令无常，其结果必所向无功。`,shaoYong:"凶：得此爻者，求名望利，小能成，大则无功，女人不利夫子。做官的会很劳累，多动少静。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:33,name:"遁",nameFull:"遁",originalText:"遁。亨。小利贞。",xiangCi:"象曰：天下有山，遁。君子以远小人，不恶而严。",explanation:`遁卦：通达。小有利之占问。
《象辞》说：本卦上卦为乾，乾为天，下卦为艮，艮为山，天下有山，天高山远，是遁卦的卦象。君子观此卦象，从而不用以恶报恶的方法对付小人，而是采取严厉的态度，挂冠悬笏，自甘退隐，远离小人。
《断易天机》解
遁卦乾上艮下，为乾宫二世卦。卦下阴爻逐渐生长，是阳道将衰，恶事将起之兆，说明小人欲制君子，此时君子处于退避的状态。`,shaoYong:`逃避退隐，盛极必衰；言行严禁，待机再举。
得此卦者，宜退不宜进。退守可以保身，若轻举妄动则会招灾。宜谨言慎行，待机行事。
台湾国学大儒傅佩荣解
时运：最好退隐，君子有吉。
财运：物价涨跌，相去甚远。
家宅：须防作祟；婚姻不宜。
身体：避居吉地。
传统解卦
这个卦是异卦（下艮上乾）相叠。乾为天，艮为山。天下有山，山高天退。阴长阳消，小人得势，君子退隐，明哲保身，伺机救天下。
大象：山在天之下，阴渐长，而阳渐消，宜退避三舍。
运势：小人道长，君子道消，凡事宜退不宜进，穷则独善其身，修身养性。
事业：时运不佳，应考虑退隐，勿与不正派的人同流合污。但不是消极逃避，而是为保存实力，总结经验，把握时机，待机而出。切忌贸然行事，造成不必要的损失。同时勿为眼前小利禄所诱惑。
经商：市场进入衰落的状况，行情不佳。决不可执意追求，盲目投入，而应沉着冷静，坚持商业道德，远离小人、奸商，保存自己的实力，等待市场行情好转，再图发展。
求名：明哲保身，甘居退隐。全力总结提高，为复出做准备。
婚恋：勿急于解决，更不可妄动强求。时机成熟时，须以纯正的态度去正确对待。
决策：处于衰败时期，小人得志。盲目行动必遭不利。虽不必以恶报恶，但更不可同流合污，因小失大，因权宜轻重，韬光养晦，保存实力，断然离去，不可犹豫不决。潜心发展个人实力，隐忍待机。只要能坚定正道，坚持中正，必可在时机成熟时复出，成就大业。
台湾张铭仁解卦
遁：表示退守、退步之意，主凶象。一切事项均需停止下来，因其中可能有小人或障碍、阴谋在破坏中。退另有表示退步之意，功课、事业，均不再如同往常般的成绩了！
解释：隐居退守。
特性：外华内虚，内心不易满足空虚，自我要求高，不善人际关系，但有贵人运。宜追求心灵宗教寄托。
运势：小人道长，君子须远离小人，诸事宜守。艮者，止也，言行物事要谨慎，才能得安而运泰。若遇小人之害，见陷于是非之地，勿管闲事，识时务为俊杰。
家运：须多积德行善，可得安祥。若常争端则衰运，且有别离之象、离婚之象。若曾数经波折之君子，历尽沧桑，则有先恶??后吉之运。
疾病：病重，注意血气不调、头、背、筋骨不良之疾。
胎孕：母子不安，慎之。
子女：儿女体质虚弱，有亲子不和之象。
周转：不成，有碍。
买卖：宜守，不能进取大事，否则失败。
等人：遁，藏也。不能来。
寻人：下落不明，为家庭之事而离乡背井，寻亦难觅。
失物：失落远处，不能寻回。
外出：不宜积极行动，而应等待时机，创造条件，争取早日而行。
考试：不理想。
诉讼：强行争取亦不利，宜罢手逃避反吉。
求事：须待时机。
改行：不得时。
开业：开业不利。`,yaoCi:[{ci:"初六。遁尾，厉。勿用有攸往。",xiang:"",explanation:`初六：君子全部隐退，国家就危险了。不能有所作为了。
《象辞》说：逃遁隐藏仍未脱离危险，若能坚持苦斗，设法取胜，有什么灾难？`,shaoYong:"凶：得此爻者，宜安分守己，可无忧。做官的宜择机而退。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。执之用黄牛之革，莫之胜说。",xiang:"",explanation:`六二：抓来用黄牛革绳紧紧捆绑，这样就不能解脱了。
《象辞》说：用黄牛革绳捆绑，表示意志坚固。`,shaoYong:"平：得此爻者，家中有争执，安常守分无忧，农人有进牛畜之喜 。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。系遁，有疾厉。畜臣妾，吉。",xiang:"",explanation:`九三：被拖累而不能决然隐退，就像身染重病，情形危险。在这种情况下，蓄养奴婢或可有利。
《象辞》说：被拖累以至不能决然隐退所造成的危险，有如被疾病折腾得疲惫不堪，所以说蓄养奴婢则吉，意思是暂且养疾疗伤，不可贸然行动。`,shaoYong:"平：得此爻者，多灾多难，良善者，得妻之力，或进人口。做官的宜急流勇退。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。好遁，君子吉，小人否。",xiang:"",explanation:`九四：喜爱隐居，这对君子是吉利的，对小人则未必。
《象辞》说：君子不以利禄为心，喜爱隐居；小人以利禄为心，不甘退隐。`,shaoYong:"平：得此爻者，虽有收获，但谨防因小人而受祸。做官的宜告休避难。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。嘉遁，贞吉。",xiang:"",explanation:`九五：退隐以时，值得赞美，卜问前程，通泰吉利。
《象辞》说：退隐以时，值得赞美；遵循正道，所以吉利，因为他存心正直，品德崇高。`,shaoYong:"吉：得此爻者，近贵多利。做官的或升迁，或功成身退。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。肥遁，无不利。",xiang:"",explanation:`上九：远走高飞，退隐山林，无不利。
《象辞》说：上九爻辞讲远走高飞，退隐山林，无不利，说明其人善观形势，急流勇退。`,shaoYong:"吉：得此爻者，营谋获利，家肥业厚。做官的乐天知命，退居闲职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:34,name:"大壮",nameFull:"大壮",originalText:"大壮。利贞。",xiangCi:"象曰：雷在天上，大壮。君子以非礼弗履。",explanation:`大壮卦：吉利的卜问。
《象辞》说：本卦上卦为震，震为雷，下卦为乾，乾为天，天上鸣雷是大壮的卦象。君子观此卦象，以迅雷可畏，礼法森严，从而畏威知惧，唯礼是遵。
《断易天机》解
大壮卦震上乾下，为坤宫四世卦。此卦中的大壮表示壮大，阳隆盛，象征君子，君子壮大当然亨通。`,shaoYong:`光明正大，强盛壮大；容忍和气，切忌冲动。
得此卦者，运势过于强盛，宜心平气和，谨慎行事，否则必生过失。
台湾国学大儒傅佩荣解
时运：成名不难，不可骄傲。
财运：得价即售，不可过贪。
家宅：小心防火；相敬如宾。
身体：保养脚部。
传统解卦
这个卦是异卦（下乾上震）相叠。震为雷；乾为天。乾刚震动。天鸣雷，云雷滚，声势宏大，阳气盛壮，万物生长。刚壮有力故曰壮。大而且壮，故名大壮。四阳壮盛，积极而有所作为，上正下正，标正影直。
大象：雷声响亮，光明天际，为正大光明之象，又为强烈地动之象，为六冲卦之一。
运势：运势虽强，但已届极盛之时，宜心平气和，否则反招失败，须知物极必反。
事业：处世凭智不凭力，有勇更有谋，切忌蛮干，该守不守，自取其凶。不可逞强，否则自取凶险。对小人应有防犯，尤其不得忽视小人的奸诈。对事业应勇往直前，但切忌冒进。
经商：处在高涨阶段，形势很好。但决不可逞强，更不可妄动，应主动增强与他人的合作。提高警惕，认识物极必反的道理，做事业衰退的准备。
求名：务必注意妥善地运用自己的力量，不可自恃刚健强壮而冒进，尤其不可自负。适当发挥自己的才干，加上外力的援助，必有所作为。
婚恋：决不可因自己条件好而高傲。切勿错过好姻缘。
决策：强健适中，不可过分消耗自己的力量。在事业顺利的时刻，尤其不可妄动。更应注意，很可能已经处于进退维谷的状态，务必自保待机，及早有所准备。
台湾张铭仁解卦
大壮：表示天上打雷、声势浩大，行动迅速、积极之象。 此卦一般以吉处藏凶来论。因为对人、对事最忌冲动。此卦有过于不理性冲动之象，容易犯错。尤其有血光之祸，被人殴打、伤害之意。得此卦，凡事再三思为吉。
解释：声势浩荡。
特性：爱冒险，领导欲强，喜怒易形于色，不喜欢太平淡安定的工作生活。金钱支出大方，朋友人缘不错。
运势：刚强过盛者，若不思正与顺，则有躁动之害耳。虽运势强大，时至当盛之期，但忌血气方刚。处事??欠思虑而遭破运，宜力持和平、顺气，勿得罪人，否则会因此而招来失败，切勿贪妄。
家运：已壮大且富有，但亦有似成而空之感。
疾病：生平少病者遇此卦则不利，注意急性呼吸道感染和脑疾等。
胎孕：子母有难非喜。
子女：儿女有自视太高，目中无人之情。
周转：勿再三借贷，如此反而不利。
买卖：可成功与获大利，但往后要小心，有反遭不利之情况。
等人：迟来。
寻人：为斗气而出走，若寻找途中不见，则难查下落，东方或西北方。
失物：不能取回。
外出：慎重外出，不可莽撞，否则不吉利。
考试：有好成绩，但勿太骄傲。
诉讼：忌与人斗气，宜和解收场，否则两败俱伤。
求事：可顺利，勿太刚强行事。
改行：可，不过勿太勉强。
开业：吉利。`,yaoCi:[{ci:"初九。壮于趾，征凶，有孚。",xiang:"",explanation:`初九：伤于脚趾。筮遇此爻，出征则凶，但尚有收获。
《象辞》说：自恃兵强，侵略他国，虽有收获，但信用扫地。`,shaoYong:"凶：得此爻者，会有争诉，动则凶，须防足疾。做官的须防小人的谗言而受辱。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。贞吉。",xiang:"",explanation:`九二：卜问得吉兆。
《象辞》说：九二爻辞讲贞正吉利，因为九二之爻居下卦中位，像人守中正之道。`,shaoYong:"吉：得此爻者，营谋得意。做官的中庸处事，心中无愧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。小人用壮，君子用罔，贞厉。羝羊触藩，羸其角。",xiang:"",explanation:`九三：小人捕兽凭气力，君子捕兽靠网围。卜问得险兆。公羊以角撞藩，结果被篱笆卡住。
《象辞》说：小人捕兽凭气力，君子捕兽靠网围。`,shaoYong:"凶：得此爻者，或有官司之事，或家中有丧，人财不利。做官的多祸难，进退难安。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。贞吉，悔亡；藩决不羸，壮于大舆之輹。",xiang:"",explanation:`九四：卜问得吉兆，没有悔恨。因为公羊冲决篱笆，摆脱了拘系，但又被车轮撞伤，不能乱冲乱撞了。
《象辞》说：冲决篱笆，摆脱掏系，恐其冲撞别处。`,shaoYong:"吉：得此爻者，常人得福，久静者必动，动则吉。做官的闲职者复职，进取如意。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。丧羊于易，无悔。",xiang:"",explanation:`六五：丧羊于狄。筮遇此爻，没有大的灾祸。
《象辞》说：丧羊于狄，因为六五阴爻而居处阳位，是所处不当，像人所处环境不适当，将蒙受损失。`,shaoYong:"凶：得此爻者，一筹莫展，不能得利，病者有丧身之兆。做官的会荒于政务。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。羝羊触藩，不能退，不能遂，无攸利。艰则吉。",xiang:"",explanation:`上六：羊角插进了篱笆，退不了，进不了，处境不利。但是，目前虽处于艰难之中，最终可以化解逢吉。
《象辞》说：不能退，不能进，陷入进退维谷之中，这是遭逢不祥。虽陷入艰难之中，最终可以化解逢吉，是说灾难不会长久。`,shaoYong:"平：得此爻者，进退两难，多是非争诉，宜守常。做官的宜退不宜进，恐有遭贬之危。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:35,name:"晋",nameFull:"晋",originalText:"晋。康侯用锡马蕃庶，昼日三接。",xiangCi:"象曰：明出地上，晋。君子以自昭明德。",explanation:`晋卦：康侯用成王赐予的良马来繁殖马匹，一天多次配种。
《象辞》说：“本卦上卦为离，离为日；下卦为坤，坤为地。太阳照大地，万物沐光辉”，是晋卦的卦象。君子观此卦象，从而光大自身的光明之德。
《断易天机》解
晋卦离上坤下，为乾宫游魂卦。晋取前进、晋见、晋升之意，上离下坤，为太阳普照大地，万物和顺之象，多主吉。`,shaoYong:`日出地上，万物进展；赏赐隆重，百谋皆遂。
得此卦者，如旭日东升，气运旺盛，收入颇丰，谋事可成，百事如意。
台湾国学大儒傅佩荣解
时运：好运新来，步步高升。
财运：光亮之业，最有利润。
家宅：阳光之屋。
身体：自知之明。
传统解卦
这个卦是异卦（下坤上离）相叠。离为日，为光明；坤为地。太阳高悬，普照大地，大地卑顺，万物生长，光明磊落，柔进上行，喻事业蒸蒸日上。
大象：日出地面，普照大地，有光明上进之象。
运势：事业、名望、财运皆吉，所谓有加官晋爵之兆。
事业：顺利。应遵守正道，迎难而上，克敌制胜，因势利导。树立良好的人际关系，深得人心。全力以赴，不得有丝毫犹豫不决，更忌优柔寡断，而应败不馁，勇往直前。注意和衷共济，共同前进。
经商：行情好，市场竞争顺利。但也会遇到一些困难，要迎难而上，因势利导，克敌制胜，争取众人支持。前进中的挫折不可免，只要动机纯正，必可转危为安。
求名：经过刻苦努力与奋斗，已具备开拓事业的基础，却因无人引荐，暂时不得志，决不可因此自暴自弃，须耐心等待时机。同时，更加积极地创造条件。
婚恋：吉星高照。会有理想的结果，但决不可自恃条件优越而抱无所谓的态度或过于挑剔。
决策：处于不断上升的形势，不会有过大的阻力。但务必争取众人信任，获取人心，再接再厉，只要动机纯正，克服侥幸心理，必有喜从天降。
台湾张铭仁解卦
晋：表示进取也，主吉象。火为太阳，所以是「日出于大地、光明乍现」，阳光准备要照耀大地，一片欣欣向荣之象。事业投资、升迁、婚姻、感情均是有雨过天晴，奋发向上的吉象。
解释：很明白，很明亮。
特性：荣誉心重，固执，爱面子，外华内虚，喜领导他人。
运势：事业繁荣，声誉渐高，于人、事、物均获宏利之际，与人共事者吉。但要知进德虚怀，即是诸凡对人、事宜谨守德操，不可傲溢心怀，否则有破象也。但财运旺。
家运：虽如日中天，切不可过于骄纵、蛮横，若为人不行正道，虽然光明就在眼前，且兴隆幸福，又难免夫妇失和，家运不振。
疾病：久病者凶，近病无妨，注意胃肠、心脏之疾。
胎孕：平。
子女：多才智，聪明而贤孝。
周转：可获得强大资金。
买卖：进取得利，并获得巨财。
等人：女者会来，男者不一定会来。
寻人：见于西南方或南方。
失物：动作快，可以寻回来。似是在地上的箱子之类藏着。
外出：克服犹豫心理，大胆前进，可无往而不顺。
考试：科甲登榜。
诉讼：最终能圆满解决。
求事：受人提拔，可有成就。
改行：可行。
开业：吉利。`,yaoCi:[{ci:"初六。晋如，摧如，贞吉。罔孚，裕，无咎。",xiang:"",explanation:`初六：攻击敌人，打垮敌人，卜问得吉兆。胜利之师没有捕捉俘虏，没有抢掠财物，不会有灾难。
《象辞》说：攻击敌人，打垮敌人，这是因为将帅能遵循正道，所以取得了胜利。从容部署，克敌制胜，没有灾难，说明将帅能因势制宜，独断于心。`,shaoYong:"平：得此爻者，忧愁参半，静则吉，动则凶。做官的不宜进取，须防流言。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。晋如，愁如，贞吉。受兹介福，于其王母。",xiang:"",explanation:`六二：攻击敌人，压倒敌人，卜问得吉兆。因为得到了先祖母的庇佑获得大福。
《象辞》说：之所以受此大福，因为六二之爻居下卦中位，像人得中正之道。`,shaoYong:"吉：得此爻者，求谋称意，多得母亲扶助，或得妻财。做官的守正者会进取。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。众允，悔亡。",xiang:"",explanation:`六三：万众一心，全力进攻，无所悔恨。
《象辞》说：众人信任，其志向就会实现。`,shaoYong:"平：得此爻者，得朋友之助，营谋遂意，但谨防意外之险。做官的有升迁之机。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。晋如鼫鼠，贞厉。",xiang:"",explanation:`九四：攻击敌人而胆小如鼠，卜问得凶兆。
《象辞》说：攻击敌人而胆小如鼠，卜问得凶兆，因为九四阳爻而居阴位，像人处于不利的地位。`,shaoYong:"凶：得此爻者，时运不佳，或有争诉。做官的不宜进取，有阻力，须守正。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。悔亡，失得勿恤，往吉，无不利。",xiang:"",explanation:`六五：无所悔恨，吃了败仗，不要气馁。只要再接再厉，终必转败为胜。无所不利。
《象辞》说：受到挫失，不要气馁，勇往直前，定有喜庆降临。`,shaoYong:"吉：得此爻者，好运到来，营谋获利。做官的有升迁之喜。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。晋其角，维用伐邑，厉吉无咎，贞吝。",xiang:"",explanation:`上九：攻击敌人，必须较量敌我双方的力量，可以考虑攻击敌人的城邑。但其结局难料：或许危险，或许吉利，或许没有灾难，或许正践凶兆。
《象辞》说：考虑到攻击敌人的城邑，这说明王道未能广泛实行，以致属邑叛乱。`,shaoYong:"平：得此爻者，有修屋宇之喜，不良者有争诉之忧。做官的有食邑之荣。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:36,name:"明夷",nameFull:"明夷",originalText:"明夷。利艰贞。",xiangCi:"象曰：明入地中，明夷。君子以莅众，用晦而明。",explanation:`明夷卦：卜问艰难之事则利。
《象辞》说：本卦内卦为离，离为日，外卦为坤，坤为地。太阳没入地中，是明夷的卦象。君子观此卦象，治民理政，不以苛察为明，而是外愚内慧，容物亲众。
《断易天机》解
明夷卦坤上离下，为坎宫游魂卦。明夷即明德被伤，象征君子受厄，此时百事宜息，静观待变。`,shaoYong:`日入地中，光明被伤；万事阻滞，等待时运。
得此卦者，时运不佳，事事劳苦，宜坚守正道，忍耐自重，等待时机。
台湾国学大儒傅佩荣解
时运：明哲保身，以避灾厄。
财运：明无利润，暗中分红。
家宅：父子分居为宜；不是明媒正娶。
身体：肝大郁积，注意保养。
传统解卦
这个卦是异卦（下离上坤）相叠。离为明，坤为顺；离为日；坤为地。日没入地，光明受损，前途不明，环境困难，宜遵时养晦，坚守正道，外愚内慧，韬光养晦。
大象：太阳掩没在坤地之下，大地黑暗，有失明之象。
运势：百事阻滞，小人加害，遇事多迷惑，宜守，静待时机而动。
事业：处于不利的环境，宜心境坦然地处置险恶的条件，增强心理素质，承受各种压力。表面柔顺小心，内心洞察事理，当离去则离去，避免灾祸，脱离危险。防患于未然，坚持逆境中奋斗。
经商：认真观察市场动态，待机行动，但须坚持商业道德，即使处于不利情况下，也要冒险向前，特别是要向南方发展，会大有收获。
求名：内心保持大志，行动刻苦忍耐，奋斗于逆境，自守其志，收敛聪明而不外露，于混乱中更应坚持正义，守愚藏拙。
婚恋：必须全面分析对方情况，不能因小失大。注意大节。
决策：处在不佳的状况下，环境困难，前途不明。但若能坦处厄运，能伸能屈，前景会变光明。尤其应加强修养，隐忍行志，外愚内慧，可以遇难呈祥。如能谨慎行事，处处小心，更能有所作为。
台湾张铭仁解卦
明夷：表示火入坑中，阳气被阴气所伤害，被小人所重伤，主大凶象。诸事不宜，运背之时。
解释：浑沌不明。
特性：朋友多，心慈，重友谊，喜追求高层次的境界，理智和感情常矛盾。有时会牺牲一切，去完成自己的理想。
运势：逆势下降，时运未济，万事劳苦，逢小人加害，光明受到掩蔽而失光明，所以多艰难之运也。有万事阻滞，遇事迷惑、受灾。故宜守贞固之道，忍耐自重，等待时机 。
家运：衰弱、多劳，家人受累，恐有诈欺、官符。须知邪恶之人定有因果，凡事心地坦荡可渡难关也。
疾病：凶象。为潜伏已久之疾，注意心脏、腹部之疾或神经病。
胎孕：产母有惊。
子女：受子女牵连，陷于痛苦深渊之中。
周转：不成。
买卖：难成，用谋方就。
等人：不来。
寻人：西南或南方，虽在附近但难寻。
失物：不能立即寻回。正当要遗忘这件事时，会意外地有所发现。
外出：最好不要马上行动，再等待一个时期，做好充分准备。
考试：无望。
诉讼：败象，宜和解了事，愈争愈苦。
求事：日下无希望，须再待时，需防被骗、失财、失身。
改行：不利。
开业：不宜，亦不成事。`,yaoCi:[{ci:"初九。明夷于飞，垂其翼。君子于行，三日不食。有攸往，主人有言。",xiang:"",explanation:`初九：“鹈鹕在飞翔，停栖在沼畔。君子离家走，三日无食粮。”筮遇此爻，有所往，则必遭主人谴责。
《象辞》说：君子在旅途中，依礼义不能蒙羞受食。`,shaoYong:"平：得此爻者，或有手足之伤，善者有进财纳福之喜。做官的有飞黄腾达之象，但谨防有失。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。明夷，夷于左股，用拯马壮，吉。",xiang:"",explanation:`六二：鹈鹕，鹈鹕，伤于左股，君子负伤，因马获救。吉利。
《象辞》说：六二爻辞所讲的吉利，是因为六二阴爻处于九三阳爻之下，正像马顺从主人善体人意。`,shaoYong:"吉：得此爻者，常人或有难，但会得贵人之助。做官的会有实权，能当大任。读书人会取得好成绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。明夷于南狩，得其大首，不可疾，贞。",xiang:"",explanation:`九三：在南方的猎区，拉弓射箭，获得一些大野兽。筮遇此爻，占问疾病则不利。
《象辞》说：决心在南方狩猎，大称其意。`,shaoYong:"平：得此爻者，有修屋宇造作之兆。不良者，左股或有伤，多忧愁分离之患。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。入于左腹，获明夷之心，出于门庭。",xiang:"",explanation:`六四：回到深隐之处吧！走出居室，进入社会，就感到环境的险恶，退隐的念头油然而生。
《象辞》说：回到深隐之处，就满足了退隐的心意。`,shaoYong:"平：得此爻者，出外营谋者会顺利，妇人有孕者生男，不良者或生心腹之疾。做官的闲职者会复职，在职者，多出外任职，韬光养晦者必出身成名。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。箕子之明夷，利贞。",xiang:"",explanation:`六五：殷亡后，箕子逃到东方邻国避难，卜问得吉兆。
《象辞》说：箕子退隐守正，他的光辉形像千古不灭。`,shaoYong:"平：得此爻者，难逢知己，或有家难之祸。做官的须修德养性可保无忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。不明晦。初登于天，后入于地。",xiang:"",explanation:`上六：阳光消失了，天黑了。太阳初升，君子进仕之象；太阳隐没，君子退隐之象。
《象辞》说：太阳初升，君子进仕，光照四方。太阳隐没，君子引退，国无楷模。`,shaoYong:"凶：得此爻者，先喜后忧，老者或不寿。做官的防止遭人流言，或被贬。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:37,name:"家人",nameFull:"家人",originalText:"家人。利女贞。",xiangCi:"象曰：风自火出，家人。君子以言有物，而行有恒。",explanation:`家人卦：卜问妇女之事吉利。
《象辞》说：本卦外卦为巽，巽为风；内卦为离，离为火，内火外风，风助火势，火助风威，相辅相成，是家人的卦象。君子观此卦象，从而省悟到言辞须有内容才不致于空洞，德行须持之以恒才能充沛。
《断易天机》解
家人卦巽上离下，为巽宫二世卦。家人卦为家庭和睦、和合之象，多主吉。`,shaoYong:`人心内向，家道兴隆；严正有恒，不能移心。
得此卦者，与人合作共事者会有利，且多有喜事之象，家庭和睦者，能同心协力，发展事业。
台湾国学大儒傅佩荣解
时运：旺运当头，言行小心。
财运：囤积货品，后有高价。
家宅：小心火灾；亲上加亲。
身体：痰多气喘，难以根治。
传统解卦
这个卦是异卦（下离上巽）相叠。离为火；巽为风。火使热气上升，成为风。一切事物皆应以内在为本，然后伸延到外。发生于内，形成于外。喻先治家而后治天下，家道正，天下安乐。
大象：风吹火之象，助火之威，喻家人同心协力，发展事业。
运势：平安大吉，与人合作则易成，更有喜庆之象，如添丁婚嫁等。
事业：成功与否取决于家庭的情况。严格治家，防止“后院”起火出现意外事故，这是事业成功的先决条件。夫妇和睦，共同合作，必可脱贫致富。事业应由内而外，循序渐进，持之以恒，而后必有所成。
经商：以治家方式用于商业活动。对待公司员工应严宽结合，以严为主。宜集中领导，主事一人，共同合作，日积月累。
求名：以勤苦努力和安贫乐道为主，更应有家庭的支持。家道兴盛的同时，个人的事业也就容易成功。
婚恋：和睦的家庭，是一切的基础，而妻子又是家道的根本。择妻应慎重，和乐兴家。
决策：因好的家庭和妻子的支持而顺利成功，务必保持这种优势，否则，由盛转衰在顷刻之间。尤其应预防家庭变故。持家重在谦和待人，勤俭积蓄以致富。亲人相互和睦、友好。
台湾张铭仁解卦
家人：表示同为一家人，主小吉之象。事事以家人为重之意，如事业投资均需一家人合作共事为佳。感情，为成家之吉象。
解释：家人离散，吉中带凶。
特性：为人热忱，待人谦恭有礼貌，善交际，外表积极内心保守。喜家庭生活，爱小孩小动物。
运势：平安无事，且有喜事之象，与家人共事者大利。
家运：万事畅达如意，和乐之象。
疾病：注意心脏或胆病，必须小心调理。
胎孕：不碍。
子女：儿女孝顺。
周转：难调，但可成，宜找自家亲人为佳。谨守诚信可无阻。
买卖：有超值的利益可得，交易可成。
等人：会来，且有吉事相告。
寻人：因赌气出走，不久便见。
失物：会出现。隐藏在家中。可能是被家人收起来了。
外出：在家千日好，外出一时难，准备充分后再行动。
考试：上榜有名。
诉讼：虽产生大疑虑，若行事合理则无碍。
求事：有良好机会，勿失。
改行：勿急。
开业：开业者可照计划而行，吉利也。`,yaoCi:[{ci:"初九。闲有家，悔亡。",xiang:"",explanation:`初九：防范家庭出现意外事故，没有悔恨。
《象辞》说：防范家庭出现意外事故，就是警惕未然事变。`,shaoYong:"平：得此爻者，谋事有成，未婚者会结婚，老者不利于寿。做官的闲职者会晋升有实权，当职者则权力旁落。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。无攸遂，在中馈，贞吉。",xiang:"",explanation:`六二：妇女在家中料理家务，安排饍食，没有失误，这是吉利之象。
《象辞》说：六二爻辞之所以称吉利，因为六二阴爻居九三阳爻之下，像妇人对男人顺从而又谦逊。`,shaoYong:"吉：得此爻者，营谋成家，多喜事。做官的会荣华富贵。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。家人嗃嗃，悔厉，吉；妇子嘻嘻，终吝。",xiang:"",explanation:`九三：贫困之家，众口嗷嗷待哺，这是愁苦之事，但能辛勤劳作，可以脱贫致富。而富贵之家，骄奢淫逸，妻室儿女只知嬉笑作乐，终将败落。
《象辞》说：贫困之家，而能辛勤劳作，未失正派家风。富贵之冢，一味嬉笑作乐，则有失勤俭之道。`,shaoYong:"凶：得此爻者，忧喜参半，谨防沉迷于享乐中。做官的严而少宽恕之恩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。富家，大吉。",xiang:"",explanation:`六四：幸福家庭，大吉大利。
《象辞》说：幸福家庭，大吉大利，因为六四阴爻居于九五阳爻之下，像家人和顺而各守其职。`,shaoYong:"吉：得此爻者，时运正佳，贵人提拔，孤寡见亲。做官的仕途顺利，升迁有望。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。王假有家，勿恤，吉。",xiang:"",explanation:`九五：君王到家庙祭祀祖先，不要忧虑，祖先福佑家人，凡事吉利。
《象辞》说：君王到臣民之家，说明君臣交相爱护。`,shaoYong:"吉：得此爻者，营谋得利，会得到贵人的提携。做官的显贵，进取有望。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。有孚威如，终吉。",xiang:"",explanation:`上九：君上掌握杀罚之权，威风凛凛，权柄不移，终归吉利。
《象辞》说：上九爻辞讲杀罚立威，终归吉利，因为君上能够内省己身，外树威望。`,shaoYong:"吉：得此爻者，营谋称意，女命更好。做官的位高权重，读书人进取成名。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:38,name:"睽",nameFull:"睽",originalText:"睽。小事吉。",xiangCi:"象曰：上火下泽，睽。君子以同而异。",explanation:`睽卦：筮遇此卦，小事吉利。
《象辞》说：本卦上卦为离，离为火；下卦为兑，兑为泽。上火下泽，两相乖离，是睽卦的卦象。君子观此卦象，从而综合万物之所同，分析万物之所异。
《断易天机》解
睽卦离上兑下，为艮宫四世卦。睽象征乖离、乖异，筮遇此卦，大事不吉，小事顺利。`,shaoYong:`人心外向，背道而驰；难以成事，不宜大举。
得此卦者，运气不佳，水火不容，相互矛盾，诸事难成。
台湾国学大儒傅佩荣解
时运：上下不通，以正处之。
财运：人弃我取，尚有小利。
家宅：迁避为宜；择而娶之。
身体：上火下湿，实在难治。
传统解卦
这个卦是异卦（下兑上离）相叠。离为火；兑为泽。上火下泽，相违不相济。克则生，往复无空。万物有所不同，必有所异，相互矛盾。睽即矛盾。
大象：离火向上，兑泽则向下，一上一下，两相乖违，又二女同居，不得正之象。
运势：气运欠佳，诸事难成，有水火不容之象，宜处变不惊。
事业：事业开创困难，处境艰辛。如能志同道合，相互信任，目的可以达到。但起初成功的多是小事，小事积累可成大事。事成于协力合作，败于众志相异。应加强团结，委曲以求相通，最忌内部相互猜疑。
经商：应以心平气和的态度投入市场竞争，求大同而存小异。对竞争对手不应敌视，可和而不流，群而不党。尤其不能惹起纠纷，极力避免灾祸。
求名：以真诚的心努力上进。对于恶人必要时亦不可完全不交往，应采取宽大包容的态度，适度往来。对志同道合者也不必完全一致，可异中求同。
婚恋：双方必须真诚相待。否则，第三者极易介入，夫妻相疑则家破。
决策：处于矛盾、对应状态。必须注意以宽宏大度、平和、柔顺的态度对待人生。这样才能心平气和，柔而上进。认清合必有离，离必有合；同中有异，异中有同的道理。否则，刚极暴躁，明极生疑。暴疑皆可致命。
台湾张铭仁解卦
睽：表示乖危、叛逆、背离之象，主凶象。意见不合，彼此争斗、任性、不协调。事事均不顺，且有被出卖的危险，注意犯小人。
解释：防小人。
特性：经常事与愿违，个性敏锐，理想化，感情与理智容易矛盾冲突，易生孤独感，宜往专技艺术发展。
运势：水火不相容，则气运不通，势行低落，诸事难成。凡事有违叛之时，若能处变不惊，不逞强出头，尚可转危为安。有家内不和，亲友疏散之情。宜力持温和，忍耐去克服困难，始可渡危。
家运：困苦离亲之象，不和睦之情。家运衰颓，虽可得小利，但也入不敷出。
疾病：轻症宜速就医，重症则危，更防断症错误，注意心脏，寒热失调之症。
胎孕：无碍。
子女：子女不和，有骨肉无情之不幸，且其子女六亲缘薄无靠。
周转：难以如愿。
买卖：多阻碍，难成，若成者亦必损。
等人：不会来。
寻人：因口角负气出走，其志不同故不易寻。
失物：不能找回。有失窃的可能。
外出：顺利。途中可以得到善人相助。
考试：落榜。
诉讼：宜速求和解，迟则理屈辞穷。
求事：无希望。
改行：不宜。
开业：不利。`,yaoCi:[{ci:"初九。悔亡，丧马勿逐，自复。见恶人，无咎。",xiang:"",explanation:`初九：不必悔恨，丢失了马匹，不必寻找，它自会回来，途中碰见坏人，也不会有灾祸。
《象辞》说：遇见坏人之所以无灾祸，意在消除恶人的恶意。`,shaoYong:"平：得此爻者，营谋先失而后得，人事先离而后合，谨防凶恶之灾患。做官的闲职者复职，被贬者复升。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。遇主于巷，无咎。",xiang:"",explanation:`九二：遇着了热情好客的主人，没有灾难。
《象辞》说：遇着了热情好客的主人，这说明没有迷失道路。`,shaoYong:"平：得此爻者，会得知己，营谋遂意。做官的会遇到明主，升迁有望。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。见舆曳，其牛掣。其人天且劓，无初有终。",xiang:"",explanation:`六三：看见一辆拉货的车，拉车的牛一俯一仰拉得很费劲，赶车的人是一个烙了额，割了鼻的奴隶。起初车子陷着不动，后来终于拉动了。
《象辞》说：看见一个烙额割鼻的奴隶在拉车，爻象表明：六三阴爻而居于阳位，所处不当，像人落入了悲苦的境地。起初不顺，结局倒好，因为六三阴爻上进遇到九四阳爻，像人得到强者的帮助。`,shaoYong:"凶：得此爻者，谋望有阻，险中求安，先迷后顺。不良者有骨肉刑伤之厄。做官的须防小人的谗言。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。睽孤，遇元夫。交孚，厉无咎。",xiang:"",explanation:`九四：旅人孤单地行路，遇上一个跛子，一同被抓住，情形危险，但终无灾祸。
《象辞》说：交相信任，必无灾难，说明其志得行，目的达到。`,shaoYong:"平：得此爻者，能得到朋友的帮助，转危为安，求婚者必配。做官的会得到同僚的推荐，升迁有机。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。悔亡，厥宗噬肤，往何咎。",xiang:"",explanation:`六五：没有悔恨。瞧见同族宗人在吃肉，孤单的旅人欣然结伴同行，一路平安无事。
《象辞》说：同族宗人在吃肉，前往，必有喜庆之事。`,shaoYong:"平：得此爻者，经营获利，抬举有人。不良者，亲朋怨恶，骨肉刑伤，官司牵连。做官的会获得成就与名望，读书人会取得佳绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。睽孤，见豕负涂，载鬼一车。先张之弧，后说之弧，匪寇婚媾。往遇雨则吉。",xiang:"",explanation:`上九：旅人孤单地行路，见一头大猪伏在路上，又遇上一辆大车，上面满载着打扮得奇形怪状的人。旅人搭弓欲射，后来又放下弓箭。因为这伙人不是强盗，而是去订婚的。旅人照常行进，遇上大雨，但一切平安。
《象辞》说：上九爻辞讲的旅人途遇婚媾之人，开始相互猜疑，几致动武，后来相安无事，照常旅行。这是因为双方疑惧消失了。`,shaoYong:"平：得此爻者，遭污受诬，先损后益。做官的须防被诽谤之忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:39,name:"蹇",nameFull:"蹇",originalText:"蹇。利西南，不利东北。利见大人，贞吉。",xiangCi:"象曰：山上有水，蹇。君子以反身修德。",explanation:`蹇卦：筮遇此卦，利西南行，不利东北行。利见贵族王公，获吉祥之兆。
《象辞》说：上卦为坎，坎为水；下卦为艮，艮为山，山石磷峋，水流曲折，是蹇卦的卦象。君子观此卦象，悟行道之不易，从而反求诸己，修养德行。
《断易天机》解
蹇卦坎上艮下，为兑宫四世卦。此卦利于向西南方向行，不利于向东北方向，又利见大人。`,shaoYong:`踏步难行，艰辛万苦；进退维谷，容忍待时。
得此卦者，身心忧苦，举步维艰，宜守正道，不可妄动，涉险境者会有灾难。
台湾国学大儒傅佩荣解
时运：处于艰困，更加奋勉。
财运：财不流通，难以得利。
家宅：防水冲损；婚姻有悔。
身体：足部有疾，小心保养。
传统解卦
这个卦是异卦（下艮上坎）相叠。坎为水，艮为山。山高水深，困难重重，人生险阻，见险而止，明哲保身，可谓智慧。蹇，跋行艰难。
大象：前路险陷，后有高山，进退维谷，如跛者举步为艰。
运势：多灾多难，进退两难，此时宜守正道，不可轻举妄动，动反招祸。
事业：诸事开头难，坚持下去，会有好的结果。人生不易，首先得求助自己，修德养性。志高自信，奋勇进取。逢到困难，得求友人相助，行动不可冒险，要以柔克刚，待机候时，量力而行。
经商：逐步起业，冒险行事，自寻苦恼。宜加强商业道德，真诚同他人合作，陷入困境时，不得见死不救，而应奋不顾身。联合行动，可活跃于市场竞争之中。
求名：循序渐进，加强自身修道。居静观动，待变，伺机而动，能进则进。内心坦然，不可为追逐名利而冒险。与贤能结合，追随高人，必能转危为安。
婚恋：不很顺利，不得急，宜慎重选择。但应有自知之明。
决策：艰难不利。但可视为考验。奋进向前，充满信心，切勿自寻苦恼，交结贤人，相互帮助，坚守中正之道，可遇难呈祥，结得善果。
台湾张铭仁解卦
蹇：表示寒足之意，主凶象，四大难卦第三卦。冰天雪地中赤足而行，表示现在处境多么的艰辛困苦，却又不能放守不管，只能硬撑到底。此时虽是无奈，但也总有苦尽甘来的时刻。人事均很为难之时，事业、感情均有骑虎难下的困境。
解释：跛足，执行困难。
特性：幻想多，重情调，喜新厌旧，有设计??研发才能，追求理想化的生活，不切实际，故内心易有挫折感。
运势：衰运，多灾难，进退两难之处境，要自重而不可妄动，此时应守正道待时也。凡事杂乱，更防小人之害，绝不可涉险境，否则灾害必至。
家运：六亲无情，有贫困、不幸之象，运差者，其险难脱，善者宜致力克服挽救。宜注意家人有重病、血光之厄运。
疾病：病重，不可疏忽医治，注意肾、胃、手部四肢损伤。
胎孕：胎不安，孕有灾。
子女：子女手足情薄，六亲少靠，劳碌之命也。
周转：难调，多不成也。
买卖：失利，交易不成。
等人：不会来。
寻人：速报警帮寻，得贵人则可回。
失物：搜索有困难阻滞而停止，不能寻回。
外出：出门可能有难，利于西南行。如外出遇难，可得救助，转危为安。
考试：落榜。
诉讼：终必有险，更防血光。不宜起讼，动则招咎。
求事：眼前毫无希望。
改行：不宜。执意强行并非良策。
开业：开业者不宜，有是非、损耗之象。`,yaoCi:[{ci:"初六。往蹇来誉。",xiang:"",explanation:`初六：出门艰难，归来安适。
《象辞》说：出门艰难，归来安适，知难而退，坐待时机。`,shaoYong:"平：得此爻者，宜守旧安常。做官的稳步进取，好运将至。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。王臣蹇蹇，匪躬之故。",xiang:"",explanation:`六二：王臣之所以屡犯艰难，并不是为自身私利。
《象辞》说：王臣出以公心屡犯艰难，其自身始终没有过失。`,shaoYong:"凶：得此爻者，涉艰历险，营谋有阻。做官的宜保持忠贞，报效国家。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。往蹇来反。",xiang:"",explanation:`九三：出门困难重重，归来笑逐颜开。
《象辞》说：出门困难重重，归来笑逐颜开，这是发自内心的喜悦。`,shaoYong:"平：得此爻者，不宜进取，或有妻子之喜。做官的位高者会晋升。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。往蹇来连。",xiang:"",explanation:`六四：出门步履艰难，归来时却有车可乘。
《象辞》说：出门步履艰难，归来时却有车可乘，因为六四阴爻居阴位，像人才正当其位，德符其名。`,shaoYong:"凶：得此爻者，不良者会有争诉。做官的进升有机，求名望利皆有实而不虚。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。大蹇朋来。",xiang:"",explanation:`九五：经历了很多艰难困苦，终予获得大利。
《象辞》说：大难当前，得到友人相助，因为九五之爻居上卦中位，像人节操贞正自能获救。`,shaoYong:"吉：得此爻者，会得到贵人提举，无往不利。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。往蹇来硕，吉。利见大人。",xiang:"",explanation:`上六：出门困难重重，归来欢喜跳跃。筮遇此爻，吉利，利于会见贵族王公。
《象辞》说：出门困难重重，归来欢喜跳跃，说明志气高昂，奋勇取胜。爻辞说：利于会见贵族王公，说明追随贵人，必获福利。`,shaoYong:"吉：得此爻者，好运来到，营谋遂意。做官的会身居要职，读书人进取成名。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:40,name:"解",nameFull:"解",originalText:"解。利西南。无所往，其来复吉。有攸往，夙吉。",xiangCi:"象曰：雷雨作，解。君子以赦过宥罪。",explanation:`解卦：利于西南行，但是，若没有确定的目标，则不如返回，返回吉利。如果有确定的目标，则宜早行，早行吉利。
《象辞》说：本卦上卦为震，震为雷；下卦为坎，坎为雨，雷雨并作，化育万物，是解卦的卦象。君子观此卦象，从而赦免过失，宽宥罪人。
《断易天机》解
解卦震上坎下，为震宫二世卦。震为动，坎为险，遇险而动，为即将脱险走出困境之兆，因此多主吉。`,shaoYong:`艰难化散，排难解纷；把握时机，趁早进行。
得此卦者，能解脱先前之困难，宜把握良机，求谋事业，出外谋事者更佳。
台湾国学大儒傅佩荣解
时运：灾难已解，声名大起。
财运：天时地利，人和为贵。
家宅：祈祷解厄；婚姻吉祥。
身体：药到病除。
传统解卦
这个卦是异卦（下坎上震）相叠。震为雷、为动；坎为水、为险。险在内，动在外。严冬天地闭塞，静极而动。万象更新，冬去春来，一切消除，是为解。
大象：春雷大作，大地解冻，喻冬去春来生机再现。
运势：宜把握良机，快速处理身边困境，更宜出外求谋，因贵人在远方，以西南为吉方。
事业：元气初复，宜休养生息，安静平易为佳，宜宽宜和。当准备就绪则应立即行动，争取主动，不可拖廷，所往必有功利，但切勿贪得无厌。克勤克俭，刚柔相济，以柔为主。远避小人，团结君子，相互依托，共成事业。
经商：行动贵神速，积极而为，方可摆脱险境。行商宜循正道，切勿招摇过市，此乃愚蠢行动，必自招灾祸。
求名：初出茅庐，应继续充实自己。待机行动。尤应远小人，近君子和有才德的人，以期迅速提高自己。
婚恋：应适时进行。夫妻和衷共济，可家庭和睦，免除灾难。
决策：稳妥为宜，亦不应冒险，因一切尚在元气初复阶段。为争取大发展，务必宽以待人，以柔致治，广交贤者，遣散小人，以中庸、正直的方式，张驰结合的手段，开拓方兴未艾的事业。
台湾张铭仁解卦
解：表示解决之象，先苦后甜之象，冬雪春化之意。冰冻三尺非一日之寒，事出有因、但已是到该解决的尽头了！只是化解之日还很长，要抓住重点方向，好好努力坚持下去，还是有可能再成功的。
解释：解冻。
特性：耐性差，爱变化，喜热闹场合，多学不精，思想兴趣不稳定，易受外??界影响。一生多为他人排解事务，自己却少有他人之助。
运势：顺势而行，速把握良机、坚持努力，快速处理可成。贵人在远方，有助，宜出外营谋。大运在西南。
家运：初有困难，但难关已过。开花结实之兆。
疾病：久病可治愈，注意肝、肾、足疾。
胎孕：孕安。
子女：初时因子女牵累而劳苦，但其子女越长运越好，故苦后得甘，已可得到幸福。
周转：速进行可成，延迟不利。
买卖：即速交易，可名利双收。
等人：一定来。
寻人：北方寻之可见。
失物：遗失之物似有被支解破坏的可能，故寻回的机会不大。
外出：一旦准备充分，立即行动，捷足先登必有所获。
考试：题榜在望。
诉讼：一般纠纷皆可解决，宜当机立断，不可拖延。
求事：有贵人相助。
改行：速改有利。
开业：开业者有很大的展望。`,yaoCi:[{ci:"初六。无咎。",xiang:"",explanation:`初六：筮遇此爻，没有灾难。
《象辞》说：初六与九二相接，为刚柔相应之象，喻君臣、夫妻和衷共济，其义自无灾难。`,shaoYong:"平：得此爻者，经营者吉，未婚者配。做官的德位相称，晋升有望，读书人会取得好成绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。田获三狐，得黄矢，贞吉。",xiang:"",explanation:`九二：畋猎获得三只狐狸，猎物身上带着铜箭头。卜问得吉兆。
《象辞》说：九二爻辞讲的卜问得吉兆，因为九二之爻居下卦中位，像其人行事遵循正道。`,shaoYong:"吉：得此爻者，正当好运，财利可获。做官的会荣华富贵，读书人会取得佳绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。负且乘，致寇至，贞吝。",xiang:"",explanation:`六三：带着许多财物，又是背负，又是车拉，招摇惹盗，自然招致盗寇抢劫，卜问有灾祸之象。
《象辞》说：带着许多财物，又是背负，又是车拉，招摇惹盗，这是愚蠢可耻之事，由于自己慢藏诲盗，招致盗寇，又能谴责谁呢？`,shaoYong:"凶：得此爻者，须防窃盗，是非诉讼。做官的谨防被贬之忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。解而拇，朋至斯孚。",xiang:"",explanation:`九四：赚了钱，而懒怠不想走，结果被人虏去。
《象辞》说：懒怠不想动，说明其人怠于职守，不称其位。`,shaoYong:"凶：得此爻者，须防小人，或有交友不慎之祸。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。君子维有解，吉，有孚于小人。",xiang:"",explanation:`六五：君子被拘囚后又获释，吉利；小人则将受罚。
《象辞》说：君子解除了小人的职务，说明小人被摒退。`,shaoYong:"吉：得此爻者，正当好运，君子有利，病者愈。做官的会身居要职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。公用射隼，于高墉之上，获之无不利。",xiang:"",explanation:`上六：在高高的城墙上，王公射中一只鹰，并且抓到了，这没有什么不吉利的。
《象辞》说：王公射鹰，意在除强去暴。`,shaoYong:"吉：得此爻者，运途顺利，多营谋获利。做官的闲职者会复职，居要位。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:41,name:"损",nameFull:"损",originalText:"损。有孚，元吉，无咎，可贞。利有攸往。曷之用？二簋可用享。",xiangCi:"象曰：山下有泽，损。君子以征忿窒欲。",explanation:`损卦：筮遇此卦，将有所俘获，大吉大利，没有灾难，是称心的卜问。而且所往将获利。将有人送来两盆食物，可享口福。
《象辞》说：本卦上卦为艮，艮为山；下卦为兑，兑为泽，可见山下有泽是损卦的卦象。君子观此卦象，以泽水浸蚀山脚为戒，从而制止其忿怒，杜塞其贪欲。
《断易天机》解
损卦艮上兑下，为艮宫三世卦。损象征损益、减少，为损己之兆，多主不吉，但只要坚守诚信，就会有利。`,shaoYong:`损下益上，损盈益虚；先难后易，量入为出。
得此卦者，损己利人，虽然开始会有所不顺，但付出总会有所回报，因祸得福之象。
台湾国学大儒傅佩荣解
时运：心平气和，才有发展。
财运：和气生财，损己利人。
家宅：地势宜平；夫妇得正。
身体：修身养性。
传统解卦
这个卦是异卦（下兑上艮）相叠。艮为山；兑为泽。上山下泽，大泽浸蚀山根。损益相间，损中有益，益中有损。二者之间，不可不慎重对待。损下益上，治理国家，过度会损伤国基。应损则损，但必量力、适度。少损而益最佳。
大象：山高水深，各得其所，因损得益之象。
运势：现况诸事不顺，有破财之象，虽先损失，但后反而得益，因祸得福。
事业：开拓事业要有所投入，投入多少应事先精心算计，力求损益得当。诸事皆应有节度，切忌欺诈、贪婪。天下事克己最难，务必严格要求自己，刻苦奋斗，手段灵活，争取事业成功。
经商：全面调查市场行情，计算投入和收益的比例。不必过于计较利润的多少，获利即可。真诚与他人合作，彼此信任，手段灵活，切勿自我封闭。
求名：为了成长进步，务必有所投入，且应付诸实践。以损增益，成就理想。
婚恋：全面权衡对方的长处与短处，应从大处着眼。
决策：为人聪颖，善于权衡利弊。顺应自然发展规律，积极主动与他人合作，助人为乐，适度投入，资助他人，而自己要宁俭勿奢。如此，诸事都可以十分顺利。
台湾张铭仁解卦
损：表示小有损失也，主凶中带吉之象。「赛翁失马、焉之非福」是此卦最好的解释。投资、事业、借贷、感情皆是失意不顺之时，然对事要有信心，学得经验将可得到更好的结果。若将要投资则不可。
解释：有所损害、损失。
特性：心地善良，富同情心，悲天悯人，体贴他人，善于照顾，安慰别人。牺牲小我，完成大我精神，生活节俭，大方助人。
运势：诸事不如意，若倾于利欲不当之心则有灾，散财之损。必须能够悟其所损，方能挽回局势。与人共事商量则可收损失之象。
家运：正处于受损之时，审慎挽救颓势也。
疾病：现况病情虽重，积极治疗可愈。身体较衰弱，注意肠胃、咽喉、贫血等疾。
胎孕：产母有凶象。
子女：儿女多诚实孝顺，幸福之格。
周转：可达目的。
买卖：虽有损，但终得利。
等人：可能会迟到。
寻人：在东北或西方友人家中，可寻。否则会自回。
失物：不能寻回。
外出：有益可行。注意节省费用，防止损多于益。
考试：多努力，榜上可题名。
诉讼：有斗争之象，损失破财，和解反而获益。
求事：可慢慢受重用。
改行：可行，勿急躁，宜周密行事。
开业：吉利，宜有耐力。`,yaoCi:[{ci:"初九。已事遄往，无咎，酌损之。",xiang:"",explanation:`初九：祭祀大事，得赶快去参加，这才不会有灾难。祭品过丰，可以酌情减损。
《象辞》说：“祭祀大事，得赶快去参加”，这是体现了敬畏鬼神的心意。`,shaoYong:"平：得此爻者，谋事得当，可获利，不良者，或因酒食误事。做官的会因为工作忙碌而顾不得家庭，声望日盛。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。利贞，征凶。弗损，益之。",xiang:"",explanation:`九二：吉利的卜问。征伐他国则凶。因为这样作对于他国非但不能损伤，反而有利。
《象辞》说：九二爻辞讲的吉利的卜问，因为九二之爻居下卦中位，像人行事以处正守贞为心。`,shaoYong:"凶：得此爻者，宜谨守勿动。做官的时机未成熟，难于升迁。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。三人行，则损一人；一人行，则得其友。",xiang:"",explanation:`六三：三人同行，难免意见分岐，必有一人被孤立。一人独行，孤单无助，则主动邀人作伴。
《象辞》说：一人独行，凡事自作主张，事无掣肘。三人同行，遇事各持己见，滋生疑惑。`,shaoYong:"平：得此爻者，合力经营，获利者多，未婚者配。做官的与同僚关系融洽，进取有望。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。损其疾，使遄有喜，无咎。",xiang:"",explanation:`六四：要消除疾病，赶快求巫祭神，病就会有好转，必无灾难。
《象辞》说：“求巫祭神消除疾病”，也是可喜之事。`,shaoYong:"平：得此爻者，多喜庆之事，有灾者转好运，有病者愈，有忧者转喜。做官的闲职者将被起复。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。或益之，十朋之龟，弗克违。元吉。",xiang:"",explanation:`六五：有人送给他价值十朋的大龟，这不能拒而不收，得龟用于占卜这是大吉之事。
《象辞》说：六五爻辞讲的大吉大利，因为上天保佑他，赐以灵龟，所以大吉。`,shaoYong:"吉：得此爻者，运势大好，财利丰富。做官的会得到领导的赞赏和提拔。读书人会取得佳绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。弗损，益之，无咎。贞吉。利有攸往，得臣无家。",xiang:"",explanation:`上九：不要减损，不要增益，一任其旧，没有灾难，卜问得吉兆。筮遇此爻，有所往则必获利，将得到一单身奴隶。
《象辞》说：不要减损，不要增益，公允执中，如此行事，平生志愿当能实现。`,shaoYong:"吉：得此爻者，贵人扶持，财利可期。做官的会得到下属的爱戴，领导的器重。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:42,name:"益",nameFull:"益",originalText:"益。利有攸往，利涉大川。",xiangCi:"象曰：风雷，益。君子以见善则迁，有过则改。",explanation:`益卦：筮遇此爻，利于有所往，利于涉水渡河。
《象辞》说：本卦上卦为巽，巽为风；下卦为震，震为雷，风雷激荡，是益卦的卦象。君子观此卦象，惊恐于风雷的威力，从而见善则从之，有过则改之。
《断易天机》解
益卦巽上震下，为巽宫三世卦。益卦为损益、收益之意，利有所往，利涉大川，多主吉。`,shaoYong:`损上益下，奋发有为；进取成名，商贾获利。
得此卦者，正当好运，奋发图进，得人帮助，能获名利。
台湾国学大儒傅佩荣解
时运：得意之时，改旧换新。
财运：贸易要快，才有利益。
家宅：小心风雷；婚姻好合。
身体：肝火太盛。
传统解卦
这个卦是异卦（下震上巽）相叠。巽为风；震为雷。风雷激荡，其势愈强，雷愈响，风雷相助互长，交相助益。此卦与损卦相反。它是损上以益下，后者是损下以益上。二卦阐述的是损益的原则。
大象：强风配快雷，声威增长之象，长男配长女，夫妇合体，增益儿孙之象。
运势：现正当吉运，可得贵人之助而成功，宜施惠于人，施比受更有福。
事业：大胆投入，勇于支持他人事业，必相得益彰。勇敢前进，敢作敢为。只要心地善良、纯洁、谦虚，事业必定与日俱增，前程无可限量。助人宜即时，要在应急。开拓事业，内部团结一致，人心所向，树立恒心，不怕冒险犯难。
经商：勿追求小利，让利于顾客，反而必获丰厚利润，切忌贪心不足！在遇到危险时应向他人求教，争取诚实的援助。
求名：真心实意地施惠于他人，自己必然可以得到诚心诚意的回报，并且获得支持，事业必成。
婚恋：相亲相爱，良缘天定。
决策：心胸开阔，乐于助人。人际关系好，得到众人的支持。自己贵在树立恒心，克服三心二意。尤其要向比自己优秀的人学习，借助对方的力量，充实和发展自己。树立必要的冒险精神。平日要施善于人。因此，即使遇到危险也会得到他人救助。
台湾张铭仁解卦
益：表示利益、好处，是由上对下的一种好的给予，主吉象。对事业投资都有相当的帮助，可得贵人来相助、扶持。
解释：有利益，有好处。
特性：重大我，轻小我，热心公益，爱热闹场合，团体事务协调工作。对自己的生活要求少，在朋友口碑中不错。
运势：乘盛吉之运，可得他人之助而诸事顺畅，家业有成。大致吉利之运也。
家运：有喜悦之象，发达之意。
疾病：可治愈，提防肝胆、肠胃之疾，或性病等。
胎孕：胎有不安。
子女：得家人之喜爱，天真顽皮。
周转：可成。
买卖：可得大利。
等人：迟来。因有好事相告。
寻人：难逢，防有害。若出走者会自回。
失物：有望可寻回。
外出：有利可获。大胆外出行动。
考试：成绩优良，父母有喜悦之象。
诉讼：有牢狱之灾，或事因女人、房地产引起，宜和解。
求事：大好时机，勿错过。
改行：有利。
开业：开业者则大有利图。`,yaoCi:[{ci:"初九。利用为大作，元吉，无咎。",xiang:"",explanation:`初九：筮遇此爻，利于大兴土木，大吉大利，并无灾祸。
《象辞》说：大吉大利，并无灾祸，因为百姓努力工作，加快了工程进度。`,shaoYong:"吉：得此爻者，大事可成，万事称心。做官的会高升，读书人会取得大的成绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。或益之，十朋之龟，弗克违，永贞吉。王用享于帝，吉。",xiang:"",explanation:`六二：有人赐予价值十朋的大龟，不可拒违其命。卜问得长久的吉兆。君王祭祀天帝，吉利。
《象辞》说：有人赐予我们宝龟，说明这大宝龟是从外面送来的。`,shaoYong:"吉：得此爻者，商贾获利，福份多多。做官的仕途一帆风顺，读书人进取成名。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。益之用凶事，无咎。有孚中行，告公用圭。",xiang:"",explanation:`六三：因为武王逝世，增加祭祀鬼神的祭物，没有灾祸。武庚乘国丧作乱，周公发兵征讨，大获胜仗，抓获俘虏。中衍向周公报告，从而举行祭祀。
《象辞》说：因为有丧事，增加祭祀鬼神的祭物，这是自然之理。`,shaoYong:"平：得此爻者，常人获利，不良者大凶，官灾祸患并至。做官的会受到重用，委以重职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。中行，告公从。利用为依迁国。",xiang:"",explanation:`六四：中衍向周公报告了处理殷室遗民之事，周公听从了，顺利地将殷商遗民分封给各封国。
《象辞》说：周公听从了王命，说明君臣上下团结更加巩固。`,shaoYong:"平：得此爻者，或会迁居，或有修造，诉者利，官者伸。做官的会被领导委以重任。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。有孚惠心，勿问元吉。有孚惠我德。",xiang:"",explanation:`九五：捕获了很多俘虏，安抚他们，不必追究，大吉大利。这些俘虏，将感戴我的恩德。
《象辞》说：捕获了很多俘虏，安抚他们，不要追究他们的责任，使他们感戴我的恩德，说明这样可以笼络人心。`,shaoYong:"吉：得此爻者，谋望称意，事多顺利。做官的会遇到明主，仕途顺利。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。莫益之，或击之，立心勿恒，凶。",xiang:"",explanation:`上九：没有人帮助他，还有人攻击他。在这种情况下，立志不坚定，就要坏事。
《象辞》说：没有人帮助他，这是周遍之辞，表示根本没有相助者。有人攻击他，说明这攻击来自外部。`,shaoYong:"凶：得此爻者，贪图名利，或有意外之祸，刑克损伤之灾。做官的因为贪求名位，或被贬职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:43,name:"夬",nameFull:"夬",originalText:"夬。扬于王庭，孚号，有厉。告自邑，不利即戎，利有攸往。",xiangCi:"象曰：泽上于天，夬。君子以施禄及下，居德则忌。",explanation:`夬卦：王庭里正跳舞作乐。有人呼告：“有敌人来犯。”邑中传来命令：“出击不利，要严阵以待。”筮遇此爻，出外旅行则吉利。
《象辞》说：本卦上卦为兑，兑为泽；下卦为乾，乾为天，可见泽水上涨，浇灌大地，是夬卦的卦象。君子观此卦象，从而泽惠下施，不敢居功自傲，并以此为忌。
《断易天机》解
夬卦兑上乾下，为坤宫五世卦。此卦中的夬为决断、决裂，象征会有危险之事，利有攸往，往前有利。`,shaoYong:`排除决去，必须刚断；始吉终凶，谨慎自重。
得此卦者，大运将过，困难将至，宜提高警惕，谨言慎行。
台湾国学大儒傅佩荣解
时运：气运过盛，散财为吉。
财运：利己利人，财散人聚。
家宅：须防水患；婚姻不成。
身体：调养气息。
传统解卦
这个卦是异卦（下乾上兑）相叠。乾为天为健；兑为泽为悦。泽气上升，决注成雨，雨施大地，滋润万物。五阳去一阴，去之不难，决（去之意）即可，故名为夬（guài），夬即决。
大象：泽水积满而泛滥成灾，滔天之势。又五阳爻之盛势必除去唯一阴爻，故一阴孤立。
运势：目前虽吉，但困难及变动正在蕴酿中，宜提高警觉，忌骄傲，防口舌是非。
事业：处在兴盛阶段，但已孕育着普遍的危险。务必施恩泽给他人，勿居功自傲，主动团结他人，不干冒险的事。时时提高警惕，防止小人的破坏。但不可莽撞，应持和缓的手段去决断小人，避免过犹不及。
经商：市场正在走向衰落的状态，不宜大量活动，随时注意转向。开拓新领域时，加强同他人的合作。但务必充分注意别有用心的奸诈小人趁机捣乱和破坏。
求名：虚心求教，充实自身实力。但应量力而行，不可盲目自大，更不可同小人合流，图虚名而败坏事业。
婚恋：防止上介绍人的当，也应注意对方的目的。
决策：性格矛盾，往往表面刚强而内心虚弱，在关键的时刻，败坏事业。虚心听取他人劝告，切勿鲁莽，多谋深思，用柔和的态度待人处世。
台湾张铭仁解卦
夬：表示决定或缺失，是个状况卦，吉凶未定。所迟疑的事情，一定要有个决定不能再拖延，至于如何决定，可视变卦而定。否则在有所拖延，就成凶象了！
解释：卦相奇特，角龙升天行大运。
特性：思想敏锐，有理想抱负，果决，务实主义，实事求是，不投机冒险，有孤独感，宜从事专技工作。
运势：日前虽然鸿运当头，终会遇到困难与危险，凡事不可轻举妄动，宜随时警惕自己，留心意外灾害。住所可能会有变动，亦有文书、契约之失利，易生错误。慎勿傲气或自以为是，不谦和者定有灾。
家运：夕阳虽好，却近黄昏，往后有陷于惊动、痛苦之境。因此卦有盛极必反之象。
疾病：病情重宜速治，防头部、呼吸系统、肿瘤等疾。
胎孕：无灾。母胎宜节食物，且勿发怒气，否则有难产之虑。
子女：有先吉后凶之象。
周转：不可急躁，须诚意，光明之态度可成，否则有不利之象。
买卖：须诚信交易，有失败破财之害。
等人：不必等了，不会来。
寻人：宜速寻找，延误不利。
失物：相信失物已经损坏，不能寻回。
外出：不宜过于频繁，以逸待劳最佳。外出旅行吉利。
考试：不理想。
诉讼：不宜与人争执，因势孤力弱，宜寻求法律途径解决。
求事：有困难，或得不到好职位。
改行：改行者要慎重考虑。
开业：开业者不利，如已备妥，小心难关重重。`,yaoCi:[{ci:"初九。壮于前趾，往不胜为咎。",xiang:"",explanation:`初九：脚趾受伤，仍然继续前进，将因为脚力不胜而遭致灾难。
《象辞》说：脚力不胜而继续行进，将遭灾难。`,shaoYong:"凶：得此爻者，会有无妄之灾，宜静守。做官的躁动者有损。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。惕号，莫夜有戎，勿恤。",xiang:"",explanation:`九二：恐惧地惊叫，夜间有敌来犯，但不足为患。
《象辞》说：有敌来犯，不足为患，因为九二之爻居下卦中位，像人得中正之道。`,shaoYong:"凶：得此爻者，多忧愁，多惊险，谨防盗窃之事发生。做官的多掌兵权。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。壮于頄，有凶。君子夬夬，独行遇雨，若濡有愠，无咎。",xiang:"",explanation:`九三：颧骨受伤，这是凶象。君子匆匆忙忙地独个儿行路，碰上了雨，全身淋湿了，令人很不快，但没有灾难。
《象辞》说：君子匆匆忙忙地独个儿行路，但最后没有灾难。`,shaoYong:"凶：得此爻者，会有争诉之忧，品行端正者无忧，初见艰难，终得安乐。做官的除奸不成，反被倒咬一口。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。臀无肤，其行次且。牵羊悔亡，闻言不信。",xiang:"",explanation:`九四：臀部受伤，走起路来踉踉跄跄。牵羊上路，悔恨丢失了羊儿，这是由于对别人的告诫不相信。
《象辞》说：行路艰难，因为九四阳爻而居阴位，像人处境不利。对于别人的告诫不相信，说明听觉虽好，但不明事理。`,shaoYong:"凶：得此爻者，心绪不定，所谋不成。做官的有心而力不足，难于升迁。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。苋陆夬夬，中行无咎。",xiang:"",explanation:`九五：细角山羊在道路中间蹦蹦跳跳，筮遇此爻无灾难。
《象辞》说：行中正之道，仅称无灾难，大概是没有将中行之道推广施行。`,shaoYong:"平：得此爻者，营谋遂意，诉者伸，有病者愈。做官的须防奸邪之辈侵害。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。无号，终有凶。",xiang:"",explanation:`上六：狗在哭叫，预兆着终将有凶险之事。
《象辞》说：国无号令，其势必遭凶险，说明国运衰微，终不可保。`,shaoYong:"凶：得此爻者，营谋不成，宜守常，不良者，骨肉刑克，是非缠绕。做官的难于久任，激流勇退为佳。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:44,name:"姤",nameFull:"姤",originalText:"姤。女壮，勿用取女。",xiangCi:"象曰：天下有风，姤。后以施命诰四方。",explanation:`姤卦：梦见女子受伤。筮遇此卦，不利于娶女。
《象辞》说：本卦上卦为乾，乾为天；下卦为巽，巽为风，可见天下有风，是姤卦的卦象，君王观此卦象，从而效法于风之吹拂万物，施教化于天下，昭告四方。
《断易天机》解
姤卦乾上巽下，一阴五阳，为乾宫初世卦。姤卦以阴遇阳，以柔乘刚，含有不期而遇之意，但不宜娶女。遇此卦适宜谋事，如果遇火，还会有喜事。`,shaoYong:`阴长阳消，鸿运中衰；诸多阻滞，谨慎以防。
得此卦者，阴长阳衰，诸事不顺，宜谨慎行事，更应注意桃色纠纷。
台湾国学大儒傅佩荣解
时运：正当好运，名扬四海。
财运：到了远方，自可获利。
家宅：小心狂风；婚姻得正。
身体：小心中风。
传统解卦
这个卦是异卦（下巽上乾）相叠。乾为天，巽为风。天下有风，吹遍大地，阴阳交合，万物茂盛。姤（gǒu）卦与夬卦相反，互为“综卦”。姤即媾，阴阳相遇。但五阳一阴，不能长久相处。
大象：风无孔不入，所吹到之处，暴露其间之物体，无一不与之相遇，为邂逅之意。
运势：阴长阳消，注意桃色纠纷，诸事阻滞，宜慎重行事。
事业：合时宜，循时序。但潜在着危机，阴阳不协调。务必依附于强者，多方联系，增强势力，防止小人渔利，争取形势好转。诸事宜及早准备，等待时机，一旦成熟立刻行动。
经商：市场正从红火的状态走向衰危，及早脱身为妙，强行发展有危险。无正直的人相助，却有小人在暗中盘算。对此，务必保持清醒的头脑，寻求可靠的合作伙伴，隐忍待时，以图商业活动的再发展。
求名：性格不很合群，内心自视过高，不免处于困境而不得志。应投靠真诚正直的人，在其支持下成功。
婚恋：严格考察对方的道德品质，避免陷入“三角”纠纷。夫妻以诚相待，可转危为安。
决策：吉利。可在有利的环境中顺利发展，但决不可冒险行事，以免适得其反。其次在于随时提防身边小人的陷害。为此，在邪恶未成势之前即应制止，宁可孤立也不可与小人结伴。
台湾张铭仁解卦
姤：表示邂逅、不其而遇，非预想中的事情来发生。主是个状况卦，吉凶未定。逅，会带来意外之喜、也会带来意外之灾，需视动爻变卦吉凶来论断。 而「姤」意，卜感情通常是有其他的感情发生的迹象、与情色非常有关系。
解释：二女争一男。
特性：杞人忧天，虎头蛇尾，易感伤，有艺术美学之天分，较理想化。
运势：阴长阳衰，男人谨防因色受祸，诸事不如意，不能上进，沉于女色之凶象也。凡事进取宜慎重。
家运：家运渐衰，不祥之兆。有女人口舌，亦有感情之因，损财之运。
疾病：病情重，有恶化情况，注意泌尿生殖系统、胸肺科病。
胎孕：孕无碍。然须注意子女均有品性不良之趋向。
子女：子女多有志行不坚定，给父母亲增加麻烦，不幸之象，难管教也。
周转：有意外阻挠，难调，另谋他法为宜。
买卖：不能如意，受奸诈之害而导致失败也。
等人：女方会来，男方不一定会来，因为途中遇到别的女人之故。
寻人：会在意想不到的地方相遇。寻人不易，西北方。
失物：尽快寻找，可失而得。失物似被重重物件压在最底部。
外出：有困难，虽无大灾祸，但无人相助。
考试：不理想。
诉讼：提防桃色纠纷，是非谣言拨弄。
求事：难成。
改行：不利。
开业：不宜，强行必受小人之害。`,yaoCi:[{ci:"初六。系于金柅，贞吉。有攸往，见凶。羸豕孚蹢躅。",xiang:"",explanation:`初六：细柔之线牵附于黄铜柅子之上。这是吉利的贞兆。若占问有所往，则必逢凶险，就象瘦弱的猪被不情愿地拖回来。
《象辞》说：细柔之线牵附于黄铜柅子上，是说柔物被牵制于刚物，以像柔弱者依附于刚强者，则获吉利。`,shaoYong:"平：得此爻者，或遇贵人好友提携而发财，女人有生育之喜。不良者，须防疾诉忧患，或女人有不贞之事。做官的有被贬职之忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。包有鱼，无咎，不利宾。",xiang:"",explanation:`九二：厨中有鱼。占得此爻，没有灾祸，但不利宴请宾客。
《象辞》说：厨中有鱼，有鱼无肉，乃小康之象，不宜大肆宴请宾客。`,shaoYong:"平：得此爻者，有财运，妇人则有怀孕之喜。做官的晋升有望。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。臀无肤，其行次且。厉，无大咎。",xiang:"",explanation:`九三：臀部负伤，行走困难。占得此爻，有危险，但尚无大的灾难。
《象辞》说：行走困难，因为没有人扶持。`,shaoYong:"凶：得此爻者，多灾难。做官的会退步，或者被贬。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。包无鱼，起凶。",xiang:"",explanation:`九四：厨中无鱼。筮遇此爻，有所动作必遭凶险。
《象辞》说：厨中无鱼之爻，显示其人必遭凶险。因为九四阳爻而居阴位，像君王失其权位，脱离民众。`,shaoYong:"凶：得此爻者，多是非之扰，年老者不利于寿。做官的有损，多难。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。以杞包瓜，含章，有陨自天。",xiang:"",explanation:`九五：匏瓜缠着杞树生长，隐印的瓜纹很好看。忽然从头顶上方掉下一个瓜来。
《象辞》说：九五爻辞讲的隐含文彩，即指九五之爻居上卦中位，像人秉含中正之德。自天上殒落，说明高尚的志行不得施行，故舍命而殉志。`,shaoYong:"平：得此爻者，会遇到贵人提携，有意外之喜，妇人有怀孕之喜。做官的会为栋梁之才。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。姤其角，吝，无咎。",xiang:"",explanation:`上九：遭遇野兽，处于它的角锋之下，不是好兆头，但没有大的灾难。
《象辞》说：遭遇野兽，处于它的角锋之下，因为上九阳爻居一卦之尽头，像人处于穷困之境地。`,shaoYong:"凶：得此爻者，营谋艰辛，孤立无助。做官的功名大显，但好运将尽。读书人努力进取者能取得佳绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:45,name:"萃",nameFull:"萃",originalText:"萃。亨，王假有庙。利见大人，亨，利贞。用大牲吉。利有攸往。",xiangCi:"象曰：泽上于地，萃。君子以除戎器，戒不虞。",explanation:`萃卦：通泰。王到宗庙举行祭祀。占得此卦，利于会见贵族王公，亨通，这是吉利的贞兆。用牛牲祭祀，也很吉利，并且出行吉利。
《象辞》说：本卦上卦为兑，兑为泽；下卦为坤，坤为地。泽水淹地，是萃卦的卦象。君子观此卦象，以洪水横流，祸乱丛聚为戒，从而修治兵器，戒备意外的变乱。
《断易天机》解
萃卦兑上坤下，为兑宫二世卦。此卦指水在地上聚集成泽以滋润万物，造福于民。占得此卦，利于见大人，祭祀用大牲畜则吉利。`,shaoYong:`物产丰富，聚合丰盛；得贵接引，无往不利。
得此卦者，运气大好，能得到贵人的帮助，获利丰厚，无往不利。
台湾国学大儒傅佩荣解
时运：安不忘危，自可无忧。
财运：财聚之象，有聚有散。
家宅：防水入屋；洁身自爱。
身体：胸腹水涨，早些调理。
传统解卦
这个卦是异卦（下坤上兑）相叠。坤为地、为顺；兑为泽、为水。泽泛滥淹没大地，人众多相互斗争，危机必四伏，务必顺天任贤，未雨绸缪，柔顺而又和悦，彼此相得益彰，安居乐业。萃，聚集、团结。
大象：泽在地上，水聚于泥土中，滋养草木，生长茂盛。
运势：吉运昌盛，又得长辈提携，事业大利，但须防财务纠纷。
事业：兴旺发达，团结和睦。正在蒸蒸日上，但水多泛滥，人多竞争必然激烈。盛则必衰，切勿骄傲，谨慎小心为好。但也不得犹豫不决，宜勇往直前，开拓新的业务。务必以高尚的品德服众。
经商：真诚合作，团结互助。鼓励是事业兴旺发达的标志。大胆开拓市场，稳妥前进，有备无患，必可取得不断发展。
求名：光靠个人努力，建树不会很大，定要取得他人的帮助，加上个人的条件方可达到理想的境界。
婚恋：勿急于求成，相亲相爱，美满幸福。
决策：善于团结他人共同合作，具有领导才能。但心胸宽阔，眼光务必远大，以诚信、中正为本，不失原则，尤其要严格要求自己，宽容他人，遭到他人反对时，应认真反省自己，得出教训，以这种心境处世为人，终生可平安，事业必通达。
台湾张铭仁解卦
萃：表示精华聚集之意，主吉中带小凶之状况卦。有经过挑选、或是在因缘际会下，而重新再一起共事的意义。
解释：人才聚集。
特性：富同情心，慈悲心，被动，略消极，乏耐性，博学不专。人缘佳，易有情爱困扰。
运势：昌隆，得信于人，承上辈照顾，事业吉昌，但宜小心财务上的纠纷。
家运：家庭融洽如意。防财务歧见之意外。
疾病：凶象，宜速诊治，防胸腹及咽喉之病变。
胎孕：胎安。然产母病多，注意保养身体。
子女：手足相敬如宾。
周转：可得到上辈支持。
买卖：可获利。
等人：一定会来，且有佳音相告。
寻人：会自己回来，不用担心。
失物：多半能失而复得。
外出：出行虽可能遇到小麻烦，但不要害怕，应以大局为重，积极行动。
考试：常保佳绩。
诉讼：宜解不宜结。
求事：可顺利，有成就。
改行：吉利。
开业：开业适时，可按计划进行。`,yaoCi:[{ci:"初六。有孚不终，乃乱乃萃。若号，一握为笑。勿恤，往无咎",xiang:"",explanation:`初六：捕获了俘虏，却又逃跑了，引起纷乱和忧虑，大家呼喊着四处追捕。终于追回了，又高兴得嘻嘻哈哈，用不着担忧了。占得此爻，大胆前往，没有灾难。
《象辞》说：混乱啊，憔悴啊，其人神志昏乱。`,shaoYong:"平：得此爻者，会受到小人的陷害，先凶后吉，宜谨慎从事。做官的会被贬职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。引吉，无咎。孚乃利用禴。",xiang:"",explanation:`六二：占得此爻，长时间吉利，没有灾难。占问祭祀，贞兆显示：春祭要用俘虏作人牲才好。
《象辞》说：“长时间吉利，没有灾难”，因为六二阴爻居于下卦中位，象人坚守正道，绝不改变。`,shaoYong:"吉：得此爻者，正当好运，贵人提举，营谋得利。做官的得人引荐，能升迁。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。萃如，嗟如，无攸利。往无咎，小吝。",xiang:"",explanation:`六三：忧愁嗟叹。占得此爻，无所利。出行则无灾难，但有小小的麻烦。
《象辞》说：出行无灾难，因为六三阴爻居于九四阳爻之下，像臣下顺从君上，行为谨慎。`,shaoYong:"凶：得此爻者，家里不安，六亲有损，老者多凶。做官的在位不得安宁，出外则艰辛。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。大吉，无咎。",xiang:"",explanation:`九四：大吉大利，没有灾难。
《象辞》说：贞兆本来是大吉大利，但结果仅仅是没有灾难，因为九四阳爻而居阴位，像人才小德薄而居高位，论其官运则谓亨通，论其居官则求无灾祸而已。`,shaoYong:"平：得此爻者，不从正道者，会有凶祸，惟大德君子，可改过得福。做官的须防他人猜忌，宜弃高就低，急流勇退为吉。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。萃有位，无咎。匪孚，元永贞，悔亡。",xiang:"",explanation:`九五：瘁心力于其职守，没有灾祸。不轻易责罚别人，卜问长期的吉凶，贞兆显示：没有大的悔恨。
《象辞》说：瘁心力于其职守，结果仅仅是没有灾祸，因为才具驽下，不能有所建树。`,shaoYong:"平：得此爻者，人情不合，营谋有阻。做官的不得人心，其志未光。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。赍咨涕洟，无咎。",xiang:"",explanation:`上六：叹息流涕，忧心忡忡，但没有灾难。
《象辞》说：叹息流涕，忧心忡仲，因为上六之爻居于一卦的尽头，孤悬无据，像人虽居高位，但如履薄冰，惊恐度日。`,shaoYong:"凶：得此爻者，事多烦扰，不能安宁，或上下无情，长幼忧愁，名利成虚。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:46,name:"升",nameFull:"升",originalText:"升。元亨。用见大人，勿恤，南征吉。",xiangCi:"象曰：地中生木，升。君子以顺德，积小以高大。",explanation:`升卦：非常亨通，有利于会见王公贵族，不用担忧。占得此爻，出征南方吉利。
《象辞》说：本卦外卦为坤，坤为地；内卦为巽，巽为木。可见木植于地中，是升卦的卦象。君子观此卦象，从而遵循德义，加强修养，从细小起步，逐步培育崇高的品德。
《断易天机》解
升卦坤上巽下，为震宫四世卦。升卦的意思就是上升、长进，为出暗向明，积小成大的亨达之象。`,shaoYong:`升腾上进，畅行其志；出暗向明，遂渐升进。
得此卦者，运气升腾，诸事皆积极向上发展，谋事有成，名利双收。
台湾国学大儒傅佩荣解
时运：大地春回，日益高升。
财运：储蓄积财，可成富人。
家宅：改造大厦；以妾作嫡。
身体：肝火渐旺，早些调养。
传统解卦
这个卦是异卦（下巽上坤）相叠。坤为地、为顺；巽为木、为逊。大地生长树木，逐渐成长，日渐高大成材，喻事业步步高升，前程远大，故名“升”。
大象：树木从地上不断向上，有进升之势。
运势：名利双收，发展开运之象，宜向南方发展。
事业：十分顺利，不断发展，依时而进，逐步上升，前程远大，但应逐步发展，切莫因顺利而冒进。谨慎小心，修养德行，追随有德行的前辈，真诚对待事业。
经商：遵守商业道德，从小处着手，逐渐开拓，通过自己的勤劳，真诚竞争，稳重为好，切莫冒失而成大错。
求名：努力学习，加强修养，以自己的聪明才智，必能得志，若有人引荐，前途更为广阔。但应注意节制。
婚恋：双方以诚相待，逐步培养情感，一定可以成功。
决策：如意随愿。聪明、灵活、具有良好的成功基础，严格要求自己，谦虚和顺，虚心向长辈求教，逐步、稳健地发展自己的事业，将犹如树木的成长，终于会成栋梁之才。但在成长过程中，务必处处谨慎，坚持真诚和正直，大胆前进。
台湾张铭仁解卦
升：表示一种情势有如乘风而起，会越来越旺。树木从地上不断向上，有进升之势。
解释：逐渐高升。
特性：有计划安排自己的人生，做事考虑周详，待人谦和，追求新的知识。喜欢多彩人生，重生活品味。
运势：诸事向上发展，开运之象，南方有吉庆，可名利双收也。
家运：渐进而升至繁荣，积小以成大之吉运。
疾病：病情重，注意腹部，胆管之疾。
胎孕：不宜修造动土，修造必犯产母。
子女：子女渐有成功之象，可贺。
周转：勿太过急，可成。
买卖：多有利，应于亥卯日。
等人：迟到。
寻人：动身则见，但恐自身有阻，与他人同去可，宜向北方。会自己回来。
失物：不易寻回，失物有被束之高阁的可能。
外出：十分顺利，尤其是南行，不会有灾祸。
考试：进步，进取有利。
诉讼：宜持平和态度处理，可争取主动，胜算在握。
求事：有利。
改行：吉利。
开业：吉利，渐渐获利。`,yaoCi:[{ci:"初六。允升，大吉。",xiang:"",explanation:`初六：前进发展，大吉大利。
《象辞》说：前进发展，大吉大利，是说尚能契合心意。`,shaoYong:"吉：得此爻者，名利双收，营谋遂心。做官的晋升有望。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。孚乃利用禴，无咎。",xiang:"",explanation:`九二：春祭宜用俘虏作为人牲，则无灾祸。
《象辞》说：九二爻辞讲祭祀鬼神必以忠信，从而将有喜庆之事。`,shaoYong:"平：得此爻者，常人有喜，病者安，谋事可成。做官的有升迁之机。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。升虚邑。",xiang:"",explanation:`九三：登临于建立在大丘之上的城邑。
《象辞》说：登临于建立在大丘之上的城邑，登高望远，所见甚明，故无所疑惑。`,shaoYong:"平：得此爻者，营谋遂意。做官的会身居要位，读书人可成名。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。王用亨于岐山，吉，无咎。",xiang:"",explanation:`六四：周王在岐山祭祀鬼神。筮遇此爻，吉利，并无灾祸。
《象辞》说：周王在岐山祭祀鬼神，之所以吉而无灾祸，因为这是顺乎天理之事。`,shaoYong:"吉：得此爻者，得山林之利，隐者有山林之乐。做官的会升迁，身居要职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。贞吉，升阶。",xiang:"",explanation:`六五：占得吉兆，所占之事将逐步发展。
《象辞》说：信守正道，自然吉利，其事业必然逐步发展，说明其志愿得伸，目的达到。`,shaoYong:"吉：得此爻者，正行好运，大愿可成。做官的会高升。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。冥升，利于不息之贞。",xiang:"",explanation:`上六：深夜不眠，勤勉不息地工作则符合此吉兆。
《象辞》说：上六爻辞讲深夜不眠，因为上六之爻据一卦之首，爻位孤悬，其人虽处高位，但环境不利，不过，勤于职守则可以消灾得福。`,shaoYong:"平：得此爻者，有贪得无厌之祸。做官的会告休。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:47,name:"困",nameFull:"困",originalText:"困。亨，贞，大人吉，无咎。有言不信。",xiangCi:"象曰：泽无水，困。君子以致命遂志。",explanation:`困卦：通泰。卜问王公贵族之事吉利，没有灾难。筮遇此爻，有罪之人无法申辩清楚。
《象辞》说：本卦上卦为兑，兑为泽；下卦为坎，坎为水，水渗泽底，泽中干涸，是困卦的卦象。君子观此卦象，以处境艰难自励，穷且益坚，舍身捐命，以行其夙志。
《断易天机》解
困卦兑上坎下，为兑宫初世卦。此卦君子受困于小人，阳为阴蔽，大人则吉而无咎。所闻之言没有诚信。`,shaoYong:`泽上无水，受困穷之；万物不生，修德静守。
得此卦者，陷入困境，事事不如意，宜坚守正道，等待时机。
台湾国学大儒傅佩荣解
时运：身名皆困，不如安命。
财运：财乏势危，不如归去。
家宅：安全第一；女寡之象。
身体：肾水已亏，险在眼前。
传统解卦
这个卦是异卦（下坎上兑）相叠。兑为阴为泽喻悦；坎为阳为水喻险。泽水困，陷入困境，才智难以施展，仍坚守正道，自得其乐，必可成事，摆脱困境。
大象：水在泽下，万物不生，喻君子困穷，小人滥盈之象。
运势：诸事不如意，所谓龙游浅水遭虾戏。
事业：境况十分不佳，遭受到很大的困难。人生面临巨大的考验，如采取不正当的手段，会愈陷愈深。相反，如身陷困逆境地而不失节操，自勉自坚，泰然处之，不失其志，终能成事。
经商：面临激烈竞争，很有破产的可能。切勿失望，而应在困境中奋斗。为此，只能靠平日加强修养。认真反省自己的行为，总结教训，重新奋起，但也不宜浮躁，应缓慢而进。同时，更要警惕因致富发财，得意忘形而陷入新的困境。
求名：欲速则不达。应以谦虚的态度，缓慢前进，应有坚定的志向，唯有志才能促成事业的成功。
婚恋：以乐观态度冷静处理，尤应注重人品。
决策：聪明智慧，但怀才不遇。若不因困境而失去信心，坚持努力上进，放弃侥幸心理，锲而不舍，虽不一定能守全实现自己的理想，但终会有所成。
台湾张铭仁解卦
困：表示很大的困难被困住了，主大凶象，四大难卦第四卦。四处无援，最困难之时。事事很难再有进展，只好静待时机，是此时最好的选择。
解释：被困住。
特性：不满足感，不喜平淡生活，生活过于理想化，爱变化。自立自强，辛勤工作，善于用脑工作，不适合领导工作。
运势：不如意，被小人欺，劳而无功，破损之灾。一事难成，运衰也。宜守己待时。
家运：家庭之主有屈于下风，被内助压迫者，亦常生反弹，吵架滋事。为黑暗时期，宜忍辱负重，期待黎明到来。若不谨守正道者，有失和、破??兆也。
疾病：危重之象，注意口腔咽喉，泌尿系统，甚至性病。
胎孕：胎安。将来劳碌命格。
子女：劳苦之命，但行为端正者，终可得福也。
周转：求人不如求己，凡事需量入为出。若为女色破财，当然求助无门。
买卖：不能如愿，有挫折。
等人：受到阻碍，不来或迟到。
寻人：途中可遇，来者自来也。
失物：不能寻回。
外出：困难多，慎重考虑。
考试：不理想。
诉讼：凡事不宜过于执着，防牢狱之灾。
求事：不得时亦不得意，再待时机。
改行：不宜。
开业：开业者须再待时。`,yaoCi:[{ci:"初六。臀困于株木，入于幽谷，三岁不见。",xiang:"",explanation:`初六：臀部被狱吏的刑杖打伤，被投入黑暗的牢房中，三年不见其人。
《象辞》说：进入了幽深的山谷，自然幽暗不明。`,shaoYong:"凶：得此爻者，有惊忧，或有丧服之灾。做官的会退职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。困于洒食，朱绂方来，利用享祀。征凶，无咎。",xiang:"",explanation:`九二：酒醉未醒，穿着红色服装的蛮夷前来进犯，忧患猝临，宜急祭神求佑。至于占问出征，则有危险。其他事无大的灾祸。
《象辞》说：酒醉未醒，天予命赐公卿之服，因为九二之爻居下卦中位，这是将有喜庆之事的兆头。`,shaoYong:"平：得此爻者，得贵人提携，营谋获利，静吉动凶。做官的有晋升之机。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。困于石，据于疾藜。入于其宫，不见其妻，凶。",xiang:"",explanation:`六三：被石头绊倒，被蒺藜刺伤，历难归家，妻子又不见了，这是凶险之兆。
《象辞》说：被石头绊倒，被蒺藜刺伤，之所以屡遇艰难，因为六三阴爻居于九二阳爻之上，像弱者攀附于强暴之人，必受其挟持威凌。回到家中，妻子又不见了，这是不祥之兆。`,shaoYong:"凶：得此爻者，多难之时，宜守正谨慎。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。来徐徐，困于金车，吝，有终。",xiang:"",explanation:`九四：其人被关押在囚车里，慢慢地走来。真不幸，但最后还是被释放。
《象辞》说：行走缓慢，不求速进，志向卑微的表现。九四之爻居于九五之下，像人甘居下位，因为态度谦卑，倒能得人帮助。`,shaoYong:"凶：得此爻者，谋事虽然不利，但终有出险之时，从商者或周转不利。做官的闲职者会被起用。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。劓刖，困于赤绂。乃徐，有说，利用祭祀。",xiang:"",explanation:`九五：割了鼻子，断了腿，被身着红色服装的蛮夷虏去。后来慢慢找到脱身的机会，终于逃脱回家。宜急祭神酬谢。
《象辞》说：割了鼻子，断了腿，是说其人不得志，身处险境。后来慢慢地脱离了险境，因为九五之爻居上卦中位，像人立身正直，自能化险为夷。宜祭祀鬼神，因为爻象指示：祈求鬼神保佑，承受其福荫。`,shaoYong:"凶：得此爻者，先难后易，不良者有诉刑之扰，丧服之忧。做官的先阻后顺。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。困于葛藟，于臲卼，曰动悔。有悔，征吉。",xiang:"",explanation:`上六：被葛藟绊倒，被小木桩刺伤，处境如此艰难，不宜有所行动，否则悔上加悔。至于占问出征则吉利。
《象辞》说：被葛藟绊倒，因为行为不得当。悔悟到动则招悔，必能谦慎行事丽逢吉利。`,shaoYong:"平：得此爻者，防惊忧丧服，惟商人、旅行者利有攸往。做官的会有刑罚束缚之忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:48,name:"井",nameFull:"井",originalText:"井。改邑不改井，无丧无得。往来井井。汔至，亦未繘井，羸其瓶，凶。",xiangCi:"象曰：木上有水，井。君子以劳民劝相。",explanation:`井卦：改建邑落而不改建水井，等于什么也没有干。人们往来井边汲水，水井干涸淤塞，不去加以淘洗，反而将吊水罐打破，这是凶险之象。
《象辞》说：本卦下卦为巽，巽为木；上卦为坎，坎为水。水下浸而树木生长，这是井卦的卦象。君子观此卦象，取法于井水养人，从而鼓励人民勤劳而互相劝勉。
《断易天机》解
井卦坎上巽下，为震宫五世卦。井不可移动，象征静止，此卦也是提示占卦者要安身守道，不可贪求。`,shaoYong:`静水通源，气运平静；不变所守，维持现状。
得此卦者，宜修身养性，顺其自然，泰然处之，静有利，动则凶。
台湾国学大儒傅佩荣解
时运：木水相生，功名有望。
财运：利大于本，自然可喜。
家宅：修屋防水；阴阳得正。
身体：肾水过胀，立即调治。
传统解卦
这个卦是异卦（下巽上坎）相叠。坎为水；巽为木。树木得水而蓬勃生长。人靠水井生活，水井由人挖掘而成。相互为养，井以水养人，经久不竭，人应取此德而勤劳自勉。
大象：水被植物吸收，滋养树身又象征汲器入井取水，有节约重覆之意。
运势：井为静物，不能移动，故凡事不能进取主动，又缺乏冲劲，不如处之泰然更有利。
事业：处于平稳状态。既不宜贸然前进，也不必后退，而应以积极的态度努力进修，提高自己，充实个人实力，待机而起，将大有成就。最怕的是停顿不前，否则将会因不合时宜而被淘汰。
经商：市场情况良好，可继续按照原来的方针。同时，继续本着勤劳、奋进的精神，诚心诚意地开拓市场，特别注意与人的合作，相互协助，在实践活动中丰富和积累经验。
求名：本着正当的目的，为社会做贡献，因此而努力学习。应特别注意向贤德的人求教，以便被发现而受到推荐。
婚恋：不必过急，会有般配的伴侣。
决策：聪明、机敏、乐于助人。同时，也会有机会充分施展个人的才能。只要能学习“水井”的精神，真诚奉献，不断丰富自己的才能，一定会受到社会的重视。
台湾张铭仁解卦
井：表示小水之源，有格局小却能过活之心态，主小吉象。井水虽不能种植、畜养，却能养人度日，显示心力之有限，不能做太大的计划。也另表示视野没有很宽广，比较短视，保守心态重。
解释：井底之蛙。
特性：积极，主动，创新，改革，反应快，口才佳，组织能力强，有领导才能，贵人多助，社会名誉佳。
运势：缺乏衡力，因井为静而不能移之物。故凡事已无法进取，不如守之泰然。
家运：诸事宜心平气和处理，守其井水，供来往人用，为守旧之义。诸事宜防有变。
疾病：病情较重且拖延，可能复发。
胎孕：宜防有不成之兆。防产母有灾，作福祈保可平安。
子女：儿女有顺良之象，宜防血光。
周转：无望，再待时另调。
买卖：尚可，但不可大作为。小交易有利。
等人：迟来。
寻人：东南或北方可寻。
失物：不能寻回。
外出：没有十分的必要和充分的把握不可随意出行。
考试：尚可。
诉讼：有刑罚之象，且受人牵连，及防房地产之诉讼。
求事：安于本份，换新的工作也是小工作。
改行：不利，守之尚可。
开业：开业者不宜，此卦有破损之象。`,yaoCi:[{ci:"初六。井泥不食，旧井无禽。",xiang:"",explanation:`初六：井水混浊不可食用。墤塌的陷阱已关不住野兽。
《象辞》说：井水混浊不可食用，因为泥土落入其中。墤塌的陷阱已关不住野兽，是说人们已将这陷阱舍弃不用了。`,shaoYong:"凶：得此爻者，谋事有阻。做官的会退居闲职，求名者不遂。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。井谷射鲋，瓮敝漏。",xiang:"",explanation:`九二：在井口张弓射井中小鱼。瓮瓶又破又漏。
《象辞》说：在井口张弓射井中小鱼，如此谋食求生，可见其人无依无靠。`,shaoYong:"凶：得此爻者，宜谨守以避祸。做官的宜退以自保。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。井渫不食，为我心恻。可用汲，王明，并受其福。",xiang:"",explanation:`九三：君上看见井水污浊不能食用，为我们感刭伤心。淘洗干净，就可汲饮。君上英明，众人都获得他们的好处。
《象辞》说：井水污浊不能食用，这是触景生情的感叹。盼求君王英明，是企望获得好处。`,shaoYong:"平：得此爻者，安分守己为吉，不良者或有灾。做官的难逢明主，需另觅良机。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。井甃，无咎。",xiang:"",explanation:`六四：用砖石垒筑井壁，进行顺利。
《象辞》说：用砖石垒筑井壁，进行顺利，这是讲修井之事。`,shaoYong:"平：得此爻者，宜安分守己，或有迁居之喜。做官清廉者，修身立命，可望上进。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。井冽，寒泉食。",xiang:"",explanation:`九五：水洁泉寒，清凉可口，可以食用。
《象辞》说：九五爻辞讲水洁泉寒，清凉可口，因为九五之爻居上卦中位，象征人得中正之道。`,shaoYong:"吉：得此爻者，营谋遂意。做官的品行端正，会得到上司的赞赏。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。井收勿幕，有孚元吉。",xiang:"",explanation:`上六：陷阱下宽上窄，十分隐蔽，甚至可以不加伪装。果然捕获了野兽，大吉大利。
《象辞》说：上六爻辞讲大吉大利，因为上六之爻处一卦之首位，说明其人爵位高登，大有成就。`,shaoYong:"吉：得此爻者，谋事顺利，财用充足。做官的功高德厚，能得升迁。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:49,name:"革",nameFull:"革",originalText:"革。己日乃孚。元亨利贞。悔亡。",xiangCi:"象曰：泽中有火，革。君子以治历明时。",explanation:`革卦：祭祀之日用俘虏作人牲，亨通，吉利的卜问。没有悔恨。
《象辞》说：本卦外卦为兑，兑为泽；内卦为离，离为火。内蒸外煏，水涸草枯，如同水泽之中，大火燃烧，这是革卦的卦象。君子观此卦象，了解到泽水涨落，草木枯荣的周期变化，从而修治历法，明确时令。
《断易天机》解
革卦兑上离下，为坎宫四世卦。革就是需要变革，提醒占筮者需要变革才会更进一步。`,shaoYong:`事多变动，坚守正道；顺天应人，实施变革。
得此卦者，凡事均在变动之中，宜去旧立新，以应革新之象，则会吉祥。
台湾国学大儒傅佩荣解
时运：改变之时，顺时而动。
财运：消耗过多，迁地贸易。
家宅：小心防火；改娶之象。
身体：肾水干枯，肝火上升。
传统解卦
这个卦是异卦（下离上兑）相叠。离为火、兑为泽，泽内有水。水在上而下浇，火在下而上升。火旺水干，水大火熄。二者相生亦相克，必然出现变革。变革是宇宙的基本规律。
大象：兑为金，被离火所烧，变革之象。
运势：凡事均在变动之中，宜去旧立新，以应革新之象。
事业：正处在转折的关键时刻，必须密切注意各种信息，认真思考。首先巩固自己的地位，完善个人的行为。时机成熟后，立即行动，积极进行变革。但应注意动机纯正，手段正当，不保守也不妄进，事业必定发达。
经商：市场竞争十分激烈。为了立于不败之地，一定要敢于大胆求新，适时改变自己的经营方向，受到挫败，马上总结经验，重新奋起，拓展商业活动，但要注意竞争方式。
求名：首先要努力提高自己，完善个人的学识和品德。同时，服从上级指挥搞好工作，二者的关系一定要得到妥善处理。
婚恋：可能会出现一些节外生枝的麻烦事，应冷静处理，感情专注。
决策：十分吉利、顺利。以自己的聪明才智，顺应形势，根据时代特点，依理而动，变革渐合时宜的事物，壮大自己的事业。但应谨慎，时机不成熟不可妄动，尤忌急功近利。行动之前应三思而行。
台湾张铭仁解卦
革：表示该改革、革新之时候了。主是个状况卦，吉凶未定。事事情况虽不稳定、明朗，但只要有心改变，重新再来则成功机会大。一切不可固执不化、不变通。
解释：革旧布新。
特性：性急，反传统，爱改变现象，创新事物，旅行，变换工作，口齿伶俐。
运势：不稳定，多变化之际，凡事均有所变动，故需弃腐朽而立新者，宜下决心改革。但仍须谨慎改革之道，善改则吉，恶改则凶。
家运：多事之秋。慎重改变自己的生活方式，方能建立新的气象。
疾病：病情多变，宜改换求医方法，注意心脏，眼目和咽喉之疾。
胎孕：胎安。
子女：子女与母亲有缘薄之象。
周转：要及时改变方针。
买卖：改变经营方式为宜。
等人：因中途变卦不会来。
寻人：速改变方向，向西、南方寻找。
失物：因有弃旧迎新之意，故相信不能寻回。
外出：十分顺利，积极活动，扩大人际关系。
考试：越来越好。
诉讼：要改变旧有对策，才可圆满解决。
求事：不可守旧，改变职事有利之时机也。宜速把握良机。
改行：大吉大利。
开业：大吉大利。`,yaoCi:[{ci:"初九。巩用黄牛之革。",xiang:"",explanation:`初九：用黄牛的皮革束紧加固(战车)。
《象辞》说：用黄牛的皮革束紧加固，说明其人被紧紧束缚不能有作为。`,shaoYong:"平：得此爻者，宜谨守常规，不可存非分之想。做官的不宜进取，切不可怀出位之念。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。己日乃革之。征吉，无咎。",xiang:"",explanation:`六二：祭祀的日期要改变。随之要重新卜问征战的日期，结果卜得吉兆，没有灾难。
《象辞》说：祭祀的日期要改变，大概是因为将有喜庆之事。`,shaoYong:"吉：得此爻者，多喜庆之事，做官的会升迁。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。征凶，贞厉。革言三就，有孚。",xiang:"",explanation:`九三：出征，吃了败仗，卜问得凶兆。但是，只要振奋精神，整顿装备，重新开战，则能转败为胜，生擒强敌。
《象辞》说：犯人屡次推翻供辞，只得反复进行审讯，这说明抵赖无用，只能招出实情。`,shaoYong:"凶：得此爻者，多事之时，谨慎而行。做官的有躁动失政之忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。悔亡，有孚，改命，吉。",xiang:"",explanation:`九四：没有悔恨。至于占问战争，则小有战果，如果改帅易将，则将大吉。
《象辞》说：九四爻辞讲改帅易将之所以吉利，因为这样能使有才德的人施展抱负。`,shaoYong:"平：得此爻者，会有转变，有收获。做官的会有升迁之机。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。大人虎变，未占有孚。",xiang:"",explanation:`九五：王公大人赫然斯怒，化柔弱为威猛，不用卜占，即知将大获胜仗。
《象辞》说：王公赫然斯怒，威猛如虎，说明其人仪表威严，光采照人。`,shaoYong:"吉：得此爻者，时运转好，多吉利之事。做官的晋升有望。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。君子豹变，小人革面。征凶，居贞吉。",xiang:"",explanation:`上六：君子精神振奋，但基层官兵一反常态。筮遇此爻，占问征伐，则凶险。卜问居处则吉利。
《象辞》说：君子精神振奋，说明其仪态清朗雍容。小人洗心革面，说明小人去恶从善，服从君上。`,shaoYong:"平：得此爻者，安分守己则是非不扰。做官的进取者会晋升，离退休者会功成身退。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:50,name:"鼎",nameFull:"鼎",originalText:"鼎。元吉，亨。",xiangCi:"象曰：木上有火，鼎。君子以正位凝命。",explanation:`鼎卦：大吉大利，亨通。
《象辞》说：本卦下卦为巽，巽为木；上卦为离，离为火。可见木上有火，以鼎烹物，这是《鼎》卦的卦象。君子观此卦象，取法于鼎足三分，正立不倚，从而持正守位，为君上所倚重，不负使命。
《断易天机》解
鼎卦离上巽下，为离宫二世卦。鼎为鼎定、和美之意，多主吉，但对诉讼、求官不利。`,shaoYong:`因败致功，因人成事；万事通达，平步青云。
得此卦者，时运正佳，能得到朋友的帮助，取得不错的成就。与人合伙共事更佳。
台湾国学大儒傅佩荣解
时运：功名日进，贵不可言。
财运：自然得利，不劳而获。
家宅：小心火灾；正配内助。
身体：肝火上冲，顺气以治。
传统解卦
这个卦是异卦（下巽上离）相叠。燃木煮食，化生为熟，除旧布新的意思。鼎为重宝大器，三足稳重之象。煮食，喻食物充足，不再有困难和困扰。在此基础上宜变革，发展事业。
大象：木之上有离火，为燃炊烹饪之象，鼎有去旧立新，改过迁善之意。
运势：时运仍佳，事业可成，但诸事不宜迟滞，及防有诉讼之累。
事业：具备开拓事业的各种条件。耳聪目明，头脑冷静，应以端正的态度为人处世，严于律己，慎终如始，刚柔兼备，与有才德的人合作，勿妄进失度，则会无往不利。
经商：经过一番奋斗，已经可以比较顺利地发展自己的商业活动，遇到困难也能够克服。如果坚持商业道德，参与正常竞争活动，无轻举妄动和邪思，刚中自守，商业可大发展，但若不量入为出，坐吃山空，必败业。
求名：首先应积功累德，严于律己，不陷入与他人的怨仇之中，柔而上行，循序渐进。得到知人者的善用，更是前途广大。
婚恋：个人条件比较理想，顺利，但勿不切合实际。
决策：天资聪颖，反应敏捷，头脑灵活，具备随机应变，随时应变和随势应变的能力。因此，前程远大，即使暂时不受重视，无出路也无防，最终可实现抱负。
台湾张铭仁解卦
鼎：表示三足而立，三人而行，平稳之势。另表拜神、礼佛的香炉，主吉象。事业投资应与人合伙为佳，诸事可在平稳中发展。唯对感情、婚姻略有凶象，出现三人行的机率很高，有外遇出轨的迹象。只是大家会很理智的来寻求解决。
解释：极为旺盛。
特性：因人成事，得利于他人之助，多有长辈照顾提拔。交游广阔，喜欢热闹，人多之处更能表现其才能。
运势：能解决困难，取得事物之稳定而名利双收，会有不错的成就，最好找外人来共事、合伙。
家运：生平幸福之运，吉也。
疾病：病情有变，但无大碍，为胆石，心脏，消化系统病。
胎孕：不安，不久便产。男女将来皆豪杰，母宜保。
子女：子女均才能出众，将成大功立大业之趋势也。
周转：可成。
买卖：有大利可得。
等人：一定会来。
寻人：南方或东南方。不必操心，会自己回来。
失物：过一段时间后可寻回，惟已变形。
外出：无重大事情不宜外出。为发展事业外出顺利。
考试：登科上榜。
诉讼：由小事引起，宜和解了事。
求事：大利，有上辈提拔。
改行：有得天独厚的条件，速进行。
开业：吉利通达之象。`,yaoCi:[{ci:"初六。鼎颠趾，利出否。得妾以其子，无咎。",xiang:"",explanation:`初六：将鼎倾覆，鼎足向上，筮遇此爻，利于清除恶人。以无子而纳妾。因纳妾而得子，没有灾祸。
《象辞》说：将鼎倾覆，这不是悖乱之举。清除朝中恶人，这是听从了上面的旨意。`,shaoYong:"平：得此爻者，因人成事，多喜事，或结婚，或生子，忧者喜，贱者贵。做官的会因功得晋升。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。鼎有实，我仇有疾，不我能即，吉。",xiang:"",explanation:`九二：鼎中有食物。筮遇此爻，家里有饭吃，仇家有疾病，再没有什么东西困扰我，吉利。
《象辞》说：家里有饭吃，家境优裕，犹宜重其身家，慎其出处。仇家有疾病，我可以安亨清福，终于没有灾祸。`,shaoYong:"吉：得此爻者，虽有收获，但须防忧。做官的秉公执政，须防小人的谗言之扰。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。鼎耳革，其行塞，雉膏不食。方雨，亏悔，终吉。",xiang:"",explanation:`九三：鼎耳脱落了。筮遇此爻，打猎无所获。野味莫吃光，老天要下雨，不知何日能出猎，坐吃山空，食物将匮乏，节约渡难关，终于得吉利。
《象辞》说：鼎耳脱落，意在说其人行动失宜。`,shaoYong:"平：得此爻者，先难后易，老者多福，年轻人多不如意。做官的会遇到阻力，但最终的结果会好。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。鼎折足，覆公餗，其形渥，凶。",xiang:"",explanation:`九四：鼎足太轻，不堪重负，以致折断，倾覆王公的珍馐美味，弄得汁液满地，形容狼藉。这是凶险之兆。
《象辞》说：倾覆了王公的珍馐美味，这是喻指其人德薄而位尊，力小而任重，以致败坏军国大事，其结果如何呢？`,shaoYong:"凶：得此爻者，多灾之时，或生足疾。做官的有被贬职之忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。鼎黄耳金铉，利贞。",xiang:"",explanation:`六五：豪华之鼎，上面装配有铜耳、铜铉。筮遇此爻吉利。
《象辞》说：豪华之鼎，上面装配着铜耳、铜铉，这样的食鼎，理应盛着佳霉美味。`,shaoYong:"吉：得此爻者，时运不错，多获利。做官的多吉兆，多升迁。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。鼎玉铉，大吉，无不利。",xiang:"",explanation:`上九：金属之鼎配以玉石之铉。占得此爻，大吉，无所不利。
《象辞》说：上九爻辞讲玉石之铉配在金属之鼎上面，表明刚柔相接，上下安份，没有凌乱侵夺的现象。`,shaoYong:"吉：得此爻者，安稳利达，谋求遂意。做官的闲职者复职，离退者功成身退。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:51,name:"震",nameFull:"震",originalText:"震。亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。",xiangCi:"象曰：洊雷，震。君子以恐惧修省。",explanation:`震卦：临祭之时，雷声传来，有的人吓得浑身发抖，片刻之后，才能谈笑如常。巨雷猝响，震惊百里，有的人却神态自若，手里拿着酒勺子，连一滴酒都没有洒出来。
《象辞》说：本卦上下卦都为震，震为雷。可见巨雷连击，是震卦的卦象。君子观此卦象，从而戒惧恐惧，修省其身。
《断易天机》解
震卦震上震下，为震宫本位卦。震即雷，空闻其响，不见其形。主求谋难遂，官爵难成。`,shaoYong:`重雷发响，奋发图强；先难后易，先苦后甜。
得此卦者，奋发振作，大可有为，但表面风光，内恐有难，宜谨言慎行，以免损失。
台湾国学大儒傅佩荣解
时运：运势正强，谨慎免咎。
财运：所积财物，皆得售出。
家宅：保护宅基，祭祷为宜；佳偶。
身体：肝火太盛，不宜劳累。
传统解卦
这个卦是同卦（下震上震）相叠。震为雷，两震相叠，反响巨大，可消除沉闷之气，亨通畅达。平日应居安思危，怀恐惧心理，不敢有所怠慢，遇到突发事变，也能安然自若，谈笑如常。
大象：重雷发向，千里传声，有惊无险之象，亦有变动之意。
运势：表面昌盛风光，内里正处多事之秋，动荡不安之境。
事业：处于不顺利、甚至面临危险的局面，对此务必提高警惕，有备方可无患，一旦出现突发事件，可以泰然处之，并且可以由此引吸取教训，一方面使损失减少，另一方面可以迅速复原，使事业迈上新的高度。
经商：在激烈的商场竞争中，随时可能出现问题，陷入困境。冷静、从容地应付到来的现实，坚持不偏不激的中正原则，以刚毅的态度，从容不迫地去战胜困难。经过一番危机后，一定可以获得巨大利益。
求名：很可能会遭到挫折。不必灰心，而应自我反省，找出问题的症结所在。
婚恋：恋爱和家庭都可能出现变故，应以冷静态度处理，会有理想的结果。
决策：处于人生的转折关头。应正确地总结过去，为开拓新的事业奠定基础。在前进的道路上应随时心怀恐惧，勤勤恳恳，坚持正确原则，在困难中前进，命运亨通。
台湾张铭仁解卦
雷：表示奋发、震动有冲动不安稳的现象。六冲纯卦，主大好大坏之卦象。此卦要注意意外血光，有被惊吓之情形发生，运动比赛可为吉论。雷通常表示，声势浩大，却是有声无形虚象之意。 与人交往最忌此卦，表面热心却只是虚应一番，无诚心，不能用真诚来对待，否则会很失望。
解释：受惊，害怕。
特性：心直口快，喜怒形于色，缺乏耐性，工作不稳定，爱变化，理财能力差，自立自强。
运势：表面似盛泰，但正处于多事之秋，宜慎重，勿自视过高，无益也。有动荡、不安、惊惧之象耳。
家运：家中常有变动惊惧、不平等、多争吵，影响家运进展，宜审慎处理家务事也。
疾病：注意肝、神经系统、足疾，病情反复。
胎孕：临产妇得之无碍。
子女：子女多有性刚者，但皆争气，奋发，并有少年劳苦老来福之象，有成有福。
周转：抱持可有可无之心态，因此卦有被反悔之象。
买卖：不可有始无终，否则难成。
等人：会来，而且会提早到。
寻人：此人临时起意而出走，但亦会马上回来。
失物：可能是受某些事惊吓而遗失，令你惊惶失措，尝试于会发声的东西或电器处寻找。
外出：大胆出行，不必理会小的灾祸。
考试：可榜登科甲。
诉讼：反覆难平，宜收敛脾气，心平气和。
求事：不利。
改行：改行吉利，为变动之时机也。
开业：吉利，可依计划而行。`,yaoCi:[{ci:"初九。震来虩虩，后笑言哑哑，吉。",xiang:"",explanation:`初九：雷声传来，吓得浑身发抖，后来听到雷声，仍谈笑如常，吉利。
《象辞》说：雷声传来，吓得浑身发抖，是因为相信敬畏重大的天象可以免罪得福。后来听到雷声仍能谈笑如常，是说后来对这类事情有了些经验。`,shaoYong:"吉：得此爻者，好运到来，先惊后喜。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。震来厉，亿丧贝。跻于九陵，勿逐，七日得。",xiang:"",explanation:`六二：雷电交加，十分危险，惊慌之中丢失了钱币，翻山越蛉，走了很远的路程去寻找也没有找到。筮者告诉他：“不必追寻了，七八日内，这损失可得补偿。”
《象辞》说：雷电交加之时，翻越九重山，爻象显示其人触犯雷电，处境危险。`,shaoYong:"凶：得此爻者，多难之时，或有争诉，小心为妙。做官的有遭奸邪之辈陷害之忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。震苏苏，震行无眚。",xiang:"",explanation:`六三：出门时遇到电闪雷鸣，感到疑惧不安。继续前进，不会有灾祸。
《象辞》说：出门时遇到电闪雷鸣，感到疑惧不安，因为六三阴爻而居阳位，像人处境不利。`,shaoYong:"凶：得此爻者，多忧愁，多灾难，宜谨慎，可免祸。做官的不宜进取。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。震遂泥。",xiang:"",explanation:`九四：雷电下击，接触到地面。
《象辞》说：其人猝闻惊雷，吓得坠入泥中，说明其人见识不广，胆量不大。`,shaoYong:"凶：得此爻者，一筹莫展，前进有阻。做官的有被贬职之危。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。震往来厉，亿无丧，有事。",xiang:"",explanation:`六五：巨雷轰鸣，危险在前。只要小心谨慎，不至于酿成灾祸，亦无损于事。
《象辞》说：巨雷轰鸣，危险在前，喻指人的行动将有危险。但是其事合符义理，故能没有大的损失。`,shaoYong:"凶：得此爻者，不吉之时，或有手足受损之忧。做官的守常者无忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。震索索，视矍矍，征凶。震不于其躬，于其邻，无咎。婚媾有言。",xiang:"",explanation:`上六：雷电交加，其人行动谨慎，警戒四顾，因为行路艰难，危险四伏。但是雷电不会击在他身上，而是落在邻人的头上。因为他本人没有什么过错，而其他邻人却犯有罪责。
《象辞》说：雷电交加，行动谨慎，因为内心虚空，精神紧张。虽然凶险但毕竟没有灾祸，因为对于邻人的遭遇有所警戒，从而能远恶近善。`,shaoYong:"凶：得此爻者，须谨防意外，或夫妻有刑克，亲邻遭难。做官的要谨防被贬职之忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:52,name:"艮",nameFull:"艮",originalText:"艮。艮其背，不获其身。行其庭，不见其人。无咎。",xiangCi:"象曰：兼山，艮。君子以思不出其位。",explanation:`艮卦：卸掉责任，挂笏隐退，朝列之中已看不到他的身影，在他的庭院中寻找，也没有找到。其人远走高飞，自无灾祸。
《象辞》说：本卦为两艮卦相重，艮为山，可见艮卦的卦象是高山重立，渊深稳重。君子观此卦象，以此为戒，谋不踰位，明哲保身。
《断易天机》解
艮卦艮上艮下，为艮宫本位卦。艮为停止的意思，为钱财散失之象，需谨慎提防。`,shaoYong:`停留阻止，无可再进；随份勿贪，不可强求。
得此卦者，前路受阻，不宜妄进，宜守待机。
台湾国学大儒傅佩荣解
时运：运势平平，不宜妄进。
财运：守好本业，不可贪财。
家宅：不宜改造；命由前定。
身体：带病延年。
传统解卦
这个卦是同卦（下艮上艮）相叠。艮为山，二山相重，喻静止。它和震卦相反。高潮过后，必然出现低潮，进入事物的相对静止阶段。静止如山，宜止则止，宜行则行。行止即动和静，都不可失机，应恰到好处，动静得宜，适可而止。
大象：两重高山并峙，故宜止不宜进，阻塞之象。
运势：凡事不宜妄动，前路受阻，只好待机而动。
事业：在经过一段发展后，应进行调整，暂时停止行动，总结经验教训。不可因贪名利而妄进。自我克制，自我约束，谨言慎行，不要盲目追求他人。经过休整后，在适当时机到来时，再大显身手。
经商：进入停滞不前的状态，切勿盲目冒进，而宜适时停止，进入安静退守，不要受外界干扰，尤其是应该保持内心和理智上的宁静，更不要轻易与他人合作。等待时机，必有光明前途。
求名：应保持纯正的目的，静守正道。勿为功名诱惑，秉守忠厚，可得成功。
婚恋：重感情，彼此以诚相待，可白头到老。
决策：性格沉静、内向，不喜好活动，也不善于交际，为人忠诚老实，讲信义。注意听取他人的建议，明哲保身。机遇不到，不宜积极活动，该止则止，勿抱不切实际的想法。
台湾张铭仁解卦
山：表示停止、退守之意，六冲纯卦，主大好大坏之象。凡事应当知进退、量力而为。有如登山越岭般，需充分审视自己的体能，和山上的情势，绝不可强行逞能，适时的休息，方能平安度过。得此卦时应有大事或障碍、不顺阻挡在前，若能保守、修身养性则安，反则为凶。
解释：不动，自己改变。
特性：耐性佳，保守经营，努力奋斗，老成持重，有偏财运，精于计划分析，处事有条理，公私分明，择善固执。
运势：应当洁身自爱，依赖心不要太重，否则不利。凡事不可轻举妄动，诸事宜守，相辅得吉。儒家有言：『静亦定，动亦定』，此非言死等，宜中正德行，固守贞常之道，凡事有定之理也。
家运：不和，家运停滞不发，改正自己以谋求开运之道，内有动荡、困境。
疾病：难治，注意肠胃血管硬化及结核病。
胎孕：难产之虞。
子女：子女多有不和、不相辅之数。
周转：难成。
买卖：有些小是非，失利之象，但可成。
等人：不会来。
寻人：西南方，难寻。
失物：可以寻回，但要等一段时间。藏在家中、旅馆、寺院、山中某处。
外出：慎重为好，宜另择佳日。
考试：落榜。
诉讼：因小事而化大，宜速求和，忌土姓人。
求事：固守本份为宜。
改行：不利。
开业：开业不宜，须再待时。`,yaoCi:[{ci:"初六。艮其趾，无咎。利永贞。",xiang:"",explanation:`初六：歇脚养息，不要轻举妄动，自然无灾难，这是长期吉利的贞兆。
《象辞》说：歇脚养息，不要轻举妄动，远离不义，不失正道，自然永远吉利。`,shaoYong:"平：得此爻者，宜守本份，不要纵欲。做官的保守己职者无失。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。艮其腓，不拯其随，其心不快。",xiang:"",explanation:`六二：停立不行，但腿部肌肉还是负伤。心里很不愉快。
《象辞》说：腿部肌肉还是负伤，因为其人固执己见，没有退回来，听取别人的意见。`,shaoYong:"凶：得此爻者，运势受阻，或奔波在外，多劳苦；或有足疾。做官的得不到他人的帮助，不宜上进。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。艮其限，列其夤，厉薰心。",xiang:"",explanation:`九三：卸掉重担，保护腰部，但是胁间肉却已裂开了，引退不及时，则罹凶险。这是由于为名利所惑，不能迅速引退卸职所招致的灾祸。
《象辞》说：“卸掉重担，保护腰部，胁间肉却已裂开了，引退不及时，则罹凶险”，危险是由为名利迷惑所致。`,shaoYong:"凶：得此爻者，不顺之时，危难不安。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。艮其身，无咎。",xiang:"",explanation:`六四：引退保身，没有灾祸。
《象辞》说：引退保身，是说其人注意力全部集中在自身的安危上，所以不会招惹灾难。`,shaoYong:"平：得此爻者，宜安分守常，不可有非分之想。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。艮其辅，言有序，悔亡。",xiang:"",explanation:`六五：闭口少言，讲话有分寸，自然没有悔恨。
《象辞》说：闭口少言，讲话有分寸，没有悔恨，因为六五之爻居上卦中位，像人谨守中正之道。`,shaoYong:"平：得此爻者，正人君子，人情和合，谋望遂意。做官的会居要职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。敦艮，吉。",xiang:"",explanation:`上九：注意保护自己的脑袋，首级不失，自然吉利。
《象辞》说：爻辞讲以忠厚为归宿之所以吉利，因为上九之爻为一卦之终爻，像人秉守忠厚，必得善终。`,shaoYong:"吉：得此爻者，多福多利，但易防不吉之事。做官的会升迁，读书人会取得佳绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:53,name:"渐",nameFull:"渐",originalText:"渐。女归吉，利贞。",xiangCi:"象曰：山上有木，渐。君子以居贤德善俗。",explanation:`渐卦：女大当嫁，这是好事。这是吉利的贞卜。
《象辞》说：本卦下卦为艮，艮为山；上卦为巽，巽为木，木植山上，不断生长，是渐卦的卦象。君子观此卦象，取法于山之育林，从而以贤德自居，担负起改善风俗的社会责任。
《断易天机》解
渐卦巽上艮下，为艮宫归魂卦。渐为渐进，筮遇此卦，女嫁则吉，举事有利。`,shaoYong:`循序渐进，积少成多；渐进即利，性急即败。
得此卦者，逐步开运，凡事宜循序渐进，则谋事可成，不宜急进，性急则败。
台湾国学大儒傅佩荣解
时运：时来运转，可以得意。
财运：逐渐得利，多行善事。
家宅：君子居之；贤女可妻。
身体：安居调养。
传统解卦
这个卦是异卦（下艮上巽）相叠。艮为山，巽为木。山上有木，逐渐成长，山也随着增高。这是逐渐进步的过程，所以称渐，渐即进，渐渐前进而不急速。
大象：山上种有树木，逐渐生长，比喻循序渐进。
运势：逐渐走向光明前途，凡事宜打根基，可得吉庆，但须防色情之难及文书错失。
事业：在经过一个相对静止的时期后，重新开始了事业的新阶段。这时最怕的是急躁冒进，务必循序上进，脚踏实地。同时注意品德修养，以沉着、谦逊的态度对待事业，可无往而不利。
经商：正处在稳步向前发展的阶段，要把握时机，既不可盲目乐观，也不要停步不前，而应采取逐步前进的策略，量力而行。遵守商业道德，以良好的服务，开拓市场。
求名：效法树木植根山上，逐渐生长的精神。在品德和学业两个方面，扎扎实实地提高自己。同时，肩负起改善社会风俗的责任。求名应以渐进为宜，切不可急进。
婚恋：不可操之过急。幸福、美满，夫妻白头和谐。
决策：时来运转的时刻已经到来，切莫错过良机。务必小心谨慎，渐进有益有利。以谦和的态度处世，可以得到强有力的支持，会获得重大成功。
台湾张铭仁解卦
渐：表示循序渐进，不可心急之意，主吉象。好事慢慢在进行中，一切遵循正理常规即可，事业投资均能有收益。感情婚姻，更是结果收成，欢喜结局之时。
解释：逐渐好转。
特性：感觉细腻，思想敏锐，重品味，讲情调之人，爱追求变化的事物，口才佳。反应快，为人热心，财运丰厚。
运势：逐渐顺利，光明开运之象。凡事务必掌握时机，循序渐进，可得吉庆。须防款项交易之差错及色情之灾。
家运：渐曙光明、幸福之象，诸事宜以顺乎自然为吉，反则有克也。
疾病：恶化之象，注意胃、肠、背痛等。
胎孕：无碍。
子女：儿女多坚强笃实，态度温顺，将来有成就。
周转：不成亦勿放弃，久调可成。
买卖：渐进有利，过急不利，欲速则不达。
等人：迟到。
寻人：在东南或东北二方，过些时日可寻得。
失物：多数不能寻回。
外出：准备充分，从容外出，一路平安。
考试：会取得好成绩。
诉讼：宜进不宜退，据理力争可胜。
求事：可寻得良好工作。
改行：吉利。
开业：吉利，渐有发展之象。`,yaoCi:[{ci:"初六。鸿渐于干，小子厉。有言，无咎。",xiang:"",explanation:`初六：鸿雁走进了山涧。筮遇此爻，警惕小孩顽皮，遭遇危险，应该加以谴责，则没有灾难。
《象辞》说：小孩顽皮遭遇危险，因为有家长呵责制止，理应不会出事故。`,shaoYong:"凶：得此爻者，运气不佳，谋为不利。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。鸿渐于磐，饮食衎衎，吉。",xiang:"",explanation:`六二：鸿雁走上水边高地，饱饮饱食，自得喜乐。筮遇此爻，吉利。
《象辞》说：饱饮饱食，自得喜乐，喻指其人，自食其力，从不白吃白喝。`,shaoYong:"吉：得此爻者，无往不利，随处皆安。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。鸿渐于陆，夫征不复，妇孕不育，凶。利御寇。",xiang:"",explanation:`九三：鸿雁走到旱地上。筮遇此爻，丈夫出征可能不再回返，妇女怀孕可能流产，这是凶险之兆。但有利于抵御敌寇。
《象辞》说：丈夫出征不再回返，说明其人掉队遇险。妇女怀孕而流产，说明其人失其保胎之道。利于抵御敌寇，说明国人能够同心同德，保家卫国。`,shaoYong:"凶：得此爻者，多惊扰，人情不睦，盗贼侵害。做官的上进有阻力，有被贬之忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。鸿渐于木，或得其桷，无咎。",xiang:"",explanation:`六四：鸿雁飞到树木上，有的停息在河边堆放的桷木上。筮遇此爻，没有灾难。
《象辞》说：有的鸿雁停息在河边堆放的桷木上之所以没有灾难，因为六四阴爻居于九五阳爻之下，像人有驯服而又谦逊之德。`,shaoYong:"平：得此爻者，利于修造，自给自足。做官的须随遇而安，升迁无定。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。鸿渐于陵，妇三岁不孕，终莫之胜，吉。",xiang:"",explanation:`九五：鸿雁走到山陵上。筮遇此爻，妻子多年不能怀孕，但始终不会被人取代，吉利。
《象辞》说：始终没有被人取代，吉利，妻子实现了与其丈夫和谐白头的愿望。`,shaoYong:"吉：得此爻者，先难后易，做官的多招诽谤，先暗后明。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。鸿渐于陆，其羽可用为仪，吉。",xiang:"",explanation:`上九：鸿雁走到山头上，它的羽毛可用来编织舞具。这是吉利之兆。
《象辞》说：鸿雁的羽毛可用来编织舞具，这是吉利之兆，编织舞具的羽毛应该纯而不杂，像人心志不乱。`,shaoYong:"吉：得此爻者，得人荐举，谋望有成，祸患不侵，多福多利。做官的大运来到，会得到重用。读书人会取得好成绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:54,name:"归妹",nameFull:"归妹",originalText:"归妹。征凶，无攸利。",xiangCi:"象曰：泽上有雷，归妹。君子以永终知敝。",explanation:`归妹卦：筮遇此爻，出征凶险。无所利。
《象辞》说：归妹之卦，下卦为兑，兑为泽；上卦为震，震为雷。可见泽上雷鸣，雷鸣水动，用以喻男女心动相爱而成眷属。这是归妹卦的卦象。君子观此卦象，从而在长期的婚姻生活中，体察到婚姻的成功与失败。
《断易天机》解
归妹卦震上兑下，为兑宫归魂卦。占得此卦，天地不交，闭塞不通，有殃有咎，无始无终，所作不顺，百事不利。`,shaoYong:`违反常理，其道将穷；明察事理，止绝妄念。
得此卦者，困难之时，做事有违常理，灾祸不断。宜明察事理，修身养性，断绝妄念。
台湾国学大儒傅佩荣解
时运：进不以道，难以持久。
财运：货价尚可，结局未必。
家宅：已婚不宜居母家；勿眈情欲。
身体：大限将至。
传统解卦
这个卦是异卦（下兑上震）相叠。震为动、为长男；兑为悦、为少女。以少女从长男，产生爱慕之情，有婚姻之动，有嫁女之象，故称归妹。
大象：震长男在上，兑少女在下，女必归从，归即是出嫁，但少女配长男，非正常组合。
运势：处事有违常理正道，先得其益，但随后祸事百端。
事业：正在进入新的阶段，很快将会出现另一番景象。这时首先必须具备远大眼光，识破利弊和吉凶，有备始能无患。其次是坚守纯正的品德和正确的原则。
经商：开拓新的市场即将成功，在未来的商业活动中必须注意经营的方向和种类，加强与他人合作。
求名：务必以坚定的决心，努力提高自己，为成名立业奠定基础，最可怕是儿女情长影响了自己的前途和事业。
婚恋：顺其自然，不可违背原则，尤其不可强求，宁可晚婚也要选择理想的对象。夫妻经过生活考验，可和谐到老。
决策：对于人生必须坚持公正纯洁的品德，正确对待婚姻和家庭，以幸福美满的家庭为基础，开拓和发展自己的事业。
台湾张铭仁解卦
归妹：表示小妹急着先出嫁，为感情冲动、不理智之象。得此卦投资、升迁、合伙，大概与男女之间的感情用事，会有很大的关连。感情，第三者积极介入之象，或是自己一厢情愿冲动的妄想。
解释：精神恍惚。
特性：具有同情心，喜欢结交朋友，爱热闹，贵人运多，恋爱运早，喜追求变化性工作，容易转换工作，多学不专。
运势：祸出百端，事物有违常理。初时有悦，不久反凶，祸害随至。
家运：外观风光幸福，其实家内正起风波，有失和、祸害等不幸情况。
疾病：病危重，极易恶化，为中风、肝病、气管及性病等。
胎孕：无碍。秋占不利。
子女：儿女有沉于情欲之中者。
周转：希望渺小。
买卖：表面上不错，其实亏了老本。
等人：不会来。
寻人：在东方或西方。
失物：失物虽有被归还的可能，但自身仍有损失。
外出：十分顺利，即便发生意外也会有人相助。
考试：有重新再读一年之况。
诉讼：事牵连于女性，宜力求和解，但我方必有损失。
求事：放弃算了，再另做打算。
改行：不宜。
开业：开业者宜暂停，静候时机。`,yaoCi:[{ci:"初九。归妹以娣，跛能履，征吉。",xiang:"",explanation:`初九：嫁女而将其妹妹一同陪嫁。跛脚而能行走。筮遇此爻，出行吉利。
《象辞》说：嫁女而将其妹妹一同陪嫁，是说姊妹共嫁一夫，这是古代贵族婚嫁的常规。跛脚而能行走，出行吉利，因为跛者获得别人的帮助。`,shaoYong:"吉：得此爻者，有小德，谋望顺遂。做官的或有政绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。眇能视，利幽人之贞。",xiang:"",explanation:`九二：眼睛瞎了而能看得见。这是利于囚徒的贞卜。
《象辞》说：这是利于囚徒的贞卜，因为身处囚笼尚不失正道，故能重见光明。`,shaoYong:"平：得此爻者，不宜进取，守旧者则祸害不生。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。归妹以须，反归以娣。",xiang:"",explanation:`六三：嫁女而用其姊陪嫁，随后又与其妹妹返归父母家。
《象辞》说：嫁女而用其姊陪嫁，这件事不妥当。`,shaoYong:"凶：得此爻者，进退无常，劳役悲苦。做官的有被降职之忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。归妹愆期，迟归有时。",xiang:"",explanation:`九四：出嫁时超过了婚龄，迟迟不嫁是因为有所等待。
《象辞》说：超龄而不嫁，因为她决意找到合意的郎君。`,shaoYong:"平：得此爻者，不是佳期，须待时运。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。帝乙归妹，其君之袂，不如其娣之袂良。月几望，吉。",xiang:"",explanation:`六五：帝乙嫁女于周文王，以其次女陪嫁。论嫁妆姊的不如妹的好。良辰择在某月十四日，吉利。
《象辞》说：帝乙嫁女于周文王，姊的嫁妆不如妹的好。六五之爻居上卦中位，像女嫁夫家处于尊贵之位。`,shaoYong:"吉：得此爻者，正值好运，或成婚，或得财。做官的会受到重用，身居要职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。女承筐无实，士刲羊无血，无攸利。",xiang:"",explanation:`上六：献祭之时，新娘捧着盛祭品的筐具，但筐中无物；新郎以刀刺羊，但羊不流血。此不祥之兆，无所利。
《象辞》说：上六之爻居一卦之尽头，孤悬无所依赖，正宜其捧着空空的筐具。`,shaoYong:"凶：得此爻者，事多不顺，营谋皆空。做官的居虚位而无实禄。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:55,name:"丰",nameFull:"丰",originalText:"丰。亨。王假之，勿忧，宜日中。",xiangCi:"象曰：雷电皆至，丰。君子以折狱致刑。",explanation:`丰卦：举行祭祀，君王将亲临宗庙。不要担心，最佳时刻当在正午时分。
《象辞》说：本卦上卦为震，震为雷；下卦为离，离为电。电闪雷鸣，是上天垂示的重大天象，这也是丰卦的卦象。君子观此卦象，有感于电光雷鸣的精明和威严，从而裁断讼狱，施行刑罚。
《断易天机》解
丰卦震上离下，为坎宫五世卦。丰即为盛大，本是吉兆，但盛极必衰，丰盛中也藏着隐忧，需小心谨慎。`,shaoYong:`盛大丰满，进财获利；谋望克遂，必有喜庆。
得此卦者，运势正强，谋事可成，名利双收。但不宜过贪，要知足常乐，谨防乐极生悲，损财甚至火险。
台湾国学大儒傅佩荣解
时运：气势正旺，谨慎小心。
财运：获利甚丰，须防诉讼。
家宅：宜向东南；天作之合。
身体：肝火上升，静养为宜。
传统解卦
这个卦是异卦（下离上震）相叠，电闪雷鸣，成就巨大，喻达到顶峰，如日中天。告戒：务必注意事物向相反方面发展，盛衰无常，不可不警惕。
大象：雷电交加，声势壮大，又离日动于天际，普照大地，皆为盛大之象。
运势：运势极强，为收获之时，但不宜贪得无厌，须知足常乐，要防是非、损财甚至火险。
事业：处于十分顺利的鼎盛时期，各方面都很顺利，成就很大。但务必注意开始出现的衰败症状，防微杜渐，严防骄傲自满。同时，不必盲目追求不切实际的事情，全力保持当前状况的延长。
经商：由于准确地把握了市场动态，商情对自己十分有利，可以大胆发展，但一定要密切注意行情，分析信息，稍有不慎，破产可能在一夜间。一旦破产应立即总结教训寻求真诚的合作者，早日走出困境。
求名：经过努力和奋斗，已获得成就，应注意保持和稳步发展，切勿追求虚名。
婚恋：可以成功，也会美满幸福，但若一方自持条件变化而动摇，则会导致不利。
决策：由于个人天资聪颖，条件好，因此各方面十分顺利。但务必深刻认识人生无常的真理，一切应保持适度，切记物极必反。更不应自我封闭，陷入困境，切莫灰心。
台湾张铭仁解卦
丰：表示丰收之象。凡事积极奋发可成，有兴致高昂，一时天雷勾动地火，闪电迅速达成之意，此卦最利于短期投资理财，感情方面，情投意合则可速成。
解释：丰富，丰收。
特性：随和谦虚，懒散但内心急躁，被动，拖延，须人催促，多偏财运或意外之好处，多异性之帮助。
运势：运势极强，为收获之时，但不宜贪得无厌，须知足常乐，要防是非，损财甚至火险。
家运：繁华幸福，但为人处事宜守分寸为要。
疾病：病况重，注意肝足疾及血压，心脏等疾。
胎孕：无碍。
子女：对子女宜多加教养，免招不幸。
周转：耐心应对，则可在短时间内达成。利在寅午未申日。
买卖：正直经营可获利。贪则有失。
等人：会来。亦会因故而很快离去。
寻人：此人会自觉不安而自己回来。
失物：尽快找寻，可失而复得。
外出：十分顺利。但应提高警惕，防止乐极生悲。
考试：及格有望。
诉讼：自己虽势如破竹，胜券在握，但也应提高警惕。
求事：有利。
改行：改行不可三心二意。
开业：开业者吉利。`,yaoCi:[{ci:"初九。遇其配主，虽旬无咎；往有尚。",xiang:"",explanation:`初九：旅途之中受到一位女主人的接待，与这位寡居的女人结成夫妻。占卜结果显示：不会遭人议论，而且能得到人们的赞同。
《象辞》说：十日之内没有灾难，意思是超过一旬就有灾了。`,shaoYong:"平：得此爻者，得贵人提拔，谋望有成，不良者有大过，必招灾殃。做官的会遇到明主，得以晋升。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。丰其蔀，日中见斗。往得疑疾。有孚发若，吉。",xiang:"",explanation:`六二：将小席拼缀起来，躺下休息。正午时分，有人说看见北斗星。看来旅伴之中有人精神错乱。对他加以刺激，或许可以使他清醒。
《象辞》说：存心诚信，一言一行都能表现出来，因为这是坦白直率地表达了自己的心愿。`,shaoYong:"吉：得此爻者，有久困发财之美，有讼者不辩自明，有病者会愈。做官的忠言多阻于邪议，先失后得。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。丰其沛，日中见昧。折其右肱，无咎。",xiang:"",explanation:`九三：将铺草加厚，躺下休息。正午时分，此人又说看见鬼魅。将他的右臂折断。经此一吓，或许他能清静。
《象辞》说：将铺草加厚，这起不了什么大的作用。将其右臂折断，那他就终身残废了。`,shaoYong:"平：得此爻者，营谋难遂，或明而受蔽，争诉日起，或手足有疾，难于做事。做官的有告休之兆。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。丰其蔀，日中见斗。遇其夷主，吉。",xiang:"",explanation:`九四：将小席拼缀起来，躺下休息。正午时分，此人还在说看见北斗星，看来还未恢复正常。幸好遇着了他的老店主，把他托付给老店主，这一下可清静平安了。
《象辞》说：将小席拼缀起来，随地休息，是所处不得当，正如九四阳爻而处于阴位一样。正午时分看见北斗，也许天空迷暗不明的缘故。遇着他的老店主，这是吉利之行。`,shaoYong:"平：得此爻者，明而受蔽，得人解释而吉。做官的受到领导和同僚的猜忌，位不安。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。来章，有庆誉，吉。",xiang:"",explanation:`六五：赚得美玉，大家都庆贺夸奖他。这是吉利之兆。
《象辞》说：六五爻辞所讲的吉利，是因为有吉庆之事。`,shaoYong:"吉：得此爻者，会得好人提举，谋望称意。读书人会取得佳绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。丰其屋，蔀其家，窥其户，阒其无人，三岁不见，凶。",xiang:"",explanation:`上六：房子空荡荡的，屋顶上散乱盖着草席，从门缝里探视，寂无一人。看样子这里多年未住人了。这是不祥之兆。
《象辞》说：增修扩建房屋，看来此人如鸟飞蓝天，志得意满，发财不小。从门缝里探视，寂无一人，看来财多害身，横遭灾祸，他逃生去了。`,shaoYong:"凶：得此爻者，骨肉相残，离祖成家，难免口舌之争。做官的位高者有危。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:56,name:"旅",nameFull:"旅",originalText:"旅。小亨，旅贞吉。",xiangCi:"象曰：山上有火，旅。君子以明慎用刑，而不留狱。",explanation:`旅卦：稍见亨通。贞卜旅行，吉利。
《象辞》说：本卦上卦为离，离为火；下卦为艮，艮为山。山上有火，洞照幽隐，这是旅卦的卦象。君子观此卦象，从而明察刑狱，慎重判决，既不敢滥施刑罚，也不敢延宕滞留。
《断易天机》解
旅卦离上艮下，为离宫初世卦。旅为做客、旅游之意，先主乐而后悲啼。`,shaoYong:`旅途穷困，飘摇不定；小望可成，宏愿难求。
得此卦者，事多变动，如在异乡，小事可成，大事难成，宜谨守常规。
台湾国学大儒傅佩荣解
时运：谨慎防灾，升用在即。
财运：出外经营，不可积货。
家宅：小心火灾；即日成亲。
身体：肝火过旺，性命交关。
传统解卦
这个卦是异卦（下艮上离）相叠。此卦与丰卦相反，互为“综卦”。山中燃火，烧而不止，火势不停地向前蔓延，如同途中行人，急于赶路。因而称旅卦。
大象：火烧山野，火头遍布，所到之处，无一幸免，火头尤如行旅之人，无所定处。
运势：诸事变动不定，此时只好坚守信心，多参考他人意见，否则必有凶。
事业：正处于创业、发展的阶段，各种困难很多。只要能坚持中正的方针，依正道办事，注意调查，处处小心谨慎，并根据情况的变化，采取应变措施，事业可顺利前进。
经商：市场行情犹如旅途一样，意想不到的情况，会随时发生。因此，首先应采取慎重的原则，不要冒险。但也不应缩手缩脚，尤其不要猜疑。开发市场之前，应进行充分的调查研究。
求名：根据时代的要求，丰富自己的知识和能力，不断提高自己，并且争取得到他人的相助。
婚恋：双方的不确定因素较多，如确有感情，可顺其发展，再行确定。婚姻美满。
决策：人生处于多变状态，一定要眼光远大，树立大志向，不断地充实自己，以诚心实意和谦虚的态度去待人处事，勿计较一时得失，广泛交际朋友。人生旅途十分顺利。
台湾张铭仁解卦
旅：表示旅行、不定、不安稳之意。 旅行者常居无定所，表示事事皆在浮动之中，虽不现凶象，但也是很令人烦心的。投资理财、感情、婚姻，大慨都是游戏的心态吧！
解释：在火山口旅游，非常危险。
特性：一生多外出旅行运，喜欢多变化事物，重效率，享受，亦多桃花运，异性缘浓。兴趣广泛，爱尝试冒险。
运势：诸事变动不定，此时只好坚守信心，多参考他人意见，否则必有凶。
家运：内面不和，是非多，意见不一。家运衰也。
疾病：病情变化不定，宜速就医。
胎孕：多是夜间产。
子女：骨肉无情，不幸之兆。
周转：小数目可，大数目不成。
买卖：多碍难成，或交易不成。
等人：临时变意不会来。
寻人：此人为情所困，意志消沉而远离也，难寻。
失物：尽快去找，应可寻回，失物似在屋舍之外，留意镜子之类物体，可提供线索。
外出：很顺利，且经常出行。因此，要时时注意安全。
考试：很差。
诉讼：宜速战速决，时间一拖则不利。
求事：白费心神。
改行：不利。
开业：开业者不得时机。`,yaoCi:[{ci:"初六。旅琐琐，斯其所取灾。",xiang:"",explanation:`初六：旅人三心二意，进退犹豫，最后还是离开住所，结果自遭灾祸。
《象辞》说：旅人三心二意，说明其人四处碰壁，精神疲惫。`,shaoYong:"凶：得此爻者，运气不佳，须防祸难。做官的有才但不能受到上司的重用。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。旅即次，怀其资，得童仆，贞。",xiang:"",explanation:`六二：旅人来到市场，带着钱财，买来一男仆，卜问得吉兆。
《象辞》说：买一男仆，卜问得吉兆，看来这笔买卖没有问题。`,shaoYong:"吉：得此爻者，运气转好，营谋有成。做官的显耀。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。旅焚其次，丧其童仆，贞厉。",xiang:"",explanation:`九三：旅人来到着火的市场上，新买的男仆乘乱跑掉。卜问得险兆。
《象辞》说：旅人来到着火的市场，岂不遭受损失。因为旅人带着男仆同往，男仆乘乱跑掉是很自然的。`,shaoYong:"凶：得此爻者，运势转坏，多灾多难。做官的有离职之忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。旅于处，得其资斧，我心不快。",xiang:"",explanation:`九四：旅人回到客居之处，因为赚了不少钱，心中不踏实。
《象辞》说：旅人回到客居之处，这不是恰当的住处。赚了不少钱，恐怕抢劫，自然心中不踏实。`,shaoYong:"凶：得此爻者，在外者会有所成就，但美中不足，有忧惨是非之事发生。从商者会获利。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。射雉一矢亡，终以誉命。",xiang:"",explanation:`六五：射野鸡，一发命中，其人因而博得善时的美名。
《象辞》说：终于博得善射的美名，众口传誉，上面的人也知道了。`,shaoYong:"吉：得此爻者，会得到老者的帮助，事有所成。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。鸟焚其巢，旅人先笑后号啕。丧牛于易，凶。",xiang:"",explanation:`上九：鸟儿的巢窠被焚烧，周人的邑落被抢劫，四处流落的周人啊，美好的生活已成往事，悲惨的现实即在眼前，狄人牵着牛羊去，往后的日子怎么过。
《象辞》说：以商旅身份而身登高爵，非分之极，其居室被焚毁是意料之中的事，牛羊在易地被抢劫，也没有人来体恤安慰，是理所应当。`,shaoYong:"凶：得此爻者，先好后坏，或迁居修造以避灾难，或有目疾，或会遭火灾。做官的难保其位，有先得后失之忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:57,name:"巽",nameFull:"巽",originalText:"巽。小亨。利有攸往，利见大人。",xiangCi:"象曰：随风，巽。君子以申命行事。",explanation:`巽卦：稍见亨通。利于出行，利于会见王公贵族。
《象辞》说：本卦为巽卦相迭而成，巽为风，因而长风相随，吹拂不断，是巽卦的卦象。君子观此卦象，取法于长吹不断的风，从而不断地申明教义，反复地颁行政令，灌输纲常大义。
《断易天机》解
巽卦巽上巽下，为巽宫本位卦。巽为顺，谦逊、顺从之意，对君子有利，利见大人。`,shaoYong:`顺伏容人，谦虚行事；得贵多助，利在远处。
得此卦者，运势起伏不定，宜随机应变，谦虚行事，则可得意外之收获。
台湾国学大儒傅佩荣解
时运：运势顺利，诸事皆宜。
财运：随机应变，获利可期。
家宅：可以安居；夫唱妇随。
身体：可能中风，须人扶行。
传统解卦
这个卦是同卦（下巽上巽）相叠，巽为风，两风相重，长风不绝，无孔不入，巽亦为顺、谦逊的态度和行为，可无往不利。
大象：此卦为两重巽风重叠，巽为入，风之所到无孔不入，尤如政令颁布，深入民心。
运势：波折重重，运势起落浮沉不定，要随机应变，心平气和，择善固执。
事业：正在发展中，应本着勇往直前的精神，战胜一切困难和险阻，奋发向上。万事起头难，开始会受挫折，但在有才德和有力量的人物帮助下，会有理想的结果。
经商：市场竞争激烈，风险大。商业活动务必小心谨慎，遵守商业道德，以谦逊的态度对待同行和顾客，及至竞争对手，必定可以取得利益。
求名：以谦逊的态度对待一切，但又不可自卑、软弱、做作，更不可虚伪，这样就可以进步很快。
婚恋：不可抱轻率的态度，而应慎重，相互尊重。
决策：头脑聪明、灵活，性格开朗，以谦虚的态度处世，会受到各个方面的欢迎，也会得到上级的重视。谦虚不可过度，应以刚健中正为前提，决不可表现为懦弱和虚伪。否则，不利于自身的成长。
台湾张铭仁解卦
风：表示不定之象，时柔顺、时狂暴。六冲纯卦，主大好大坏之象。不易控制的局面，包括人、事、感情、投资，都是令人很难去掌控的、会有波折和变化。
解释：粗暴。
特性：求知欲强，喜欢追求新事物，新潮流，多外出旅行运，朋友多，财运佳，异性缘重，相识满天下。
运势：此卦象征多波折，游离不定之运也。此时要处理不惊，坚定意志，万事果断而随机应变，不必一味跟从顺行。待人接物宜心平气和，则可得意外之收获。切记狂风之下必有所损。
家运：家内已生风波，遵照长辈意见与指示方可渡过难关，否则动荡不安。
疾病：久病则凶，且病情变化多端。
胎孕：有碍。宜慎。
子女：养儿育女，可谓无微不至，但有孝顺恩情之子女，福也。
周转：小吉，大则难调。
买卖：好时机，绝对有利。
等人：主动约人，有结果。
寻人：此人隐于附近朋友家中，好言相劝可回。大致是吵架出走，若是债务纠纷寻人者，注意发生冲突损伤。东南方位。
失物：遗失在远处，不能寻回。
外出：一帆风顺，十分顺利，但仍得注意安全，防止发生意外事故。
考试：宜多用功。
诉讼：不易和解，但一方肯让步则易解决。
求事：不能达到理想，可随机应变。
改行：需看情况，但必有所变动。
开业：开业可行，但勿太急，慢慢进取有利。`,yaoCi:[{ci:"初六。进退，利武人之贞。",xiang:"",explanation:`初六：进退听命，这是利于武人的占卜。
《象辞》说：进退听命，是因为自己没有成见。武人具有坚定的意志是应该的，因为只有意志坚定，才能勇敢无畏，临危不乱。`,shaoYong:"平：得此爻者，有得有失，不良者多招诽谤。做官的或有差役，进退不一，或有兼权，难中有易。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。巽在床下，用史巫纷若，吉，无咎。",xiang:"",explanation:`九二：病人卧床不起，祝史巫士降神祭祀，禳灾驱鬼，忙碌不停。病情有好转，灾难消除了。
《象辞》说：祝史巫士禳灾驱鬼忙碌不停，之所以使病情有好转，因为九二阳爻居下卦中位，爻象既得，灾难自退。`,shaoYong:"吉：得此爻者，诚恳待人，谋望获利。做官的有升迁之机。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。频巽，吝。",xiang:"",explanation:`九三：勉强顺从，其心必不顺畅。
《象辞》说：勉强顺从，而内心不顺畅，说明这是出于无可奈何。`,shaoYong:"凶：得此爻者，运势低迷，有穷困之厄。做官的有被贬职之忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。悔亡，田获三品。",xiang:"",explanation:`六四：没有悔恨，狩猎获得各种猎物。
《象辞》说：狩猎获得各种猎物，说明狩猎大有收获。`,shaoYong:"吉：得此爻者，正当好运，多福多利。读书人会取得佳绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。贞吉，悔亡，无不利。无初有终。先庚三日，后庚三日，吉。",xiang:"",explanation:`九五：贞卜得吉兆，没有悔恨，无所不利。虽没有良好的开端，但有良好的结局。时日定在丁日或癸日，其事一定成功。
《象辞》说：九五爻辞之所以讲吉利，因为九五阳爻居上卦中位，像人事合于正道，自然吉利。`,shaoYong:"吉：得此爻者，谋望有成，无往不利。做官的先阻后顺。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。巽在床下，丧其资斧，贞凶。",xiang:"",explanation:`上九：人隐伏在床底下，钱财则被洗劫一空。卜问得凶兆。
《象辞》说：隐伏在床底下，正是上九阳爻穷途末路之象。钱财被洗劫，不正是凶险之事吗？`,shaoYong:"凶：得此爻者，多损失，或生疾病。做官的有运不逢时，须谨慎。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:58,name:"兑",nameFull:"兑",originalText:"兑。亨，利，贞。",xiangCi:"象曰：丽泽，兑。君子以朋友讲习。",explanation:`兑卦：亨通。吉利的贞卜。
《象辞》说：本卦为两兑相叠，兑为泽，两泽相连，两水交流是兑卦的卦象。君子观此卦象，从而广交朋友，讲习探索，推广见闻。
《断易天机》解：
兑卦兑上兑下，为兑宫本位卦。兑为喜悦、取悦，又为泽，泽中之水可以滋润万物，所占的人会很吉利。`,shaoYong:`泽润万物，双重喜悦；和乐群伦，确守正道。
得此卦者，多喜庆之事，人情和合，但应坚守正道，否则犯灾。
台湾国学大儒傅佩荣解
时运：朋友支持，好好珍惜。
财运：有人扶助，获利不难。
家宅：友朋同住；因友成亲。
身体：熟医可治。
传统解卦
这个卦是同卦（下泽上泽）相叠。泽为水。两泽相连，两水交流，上下相和，团结一致，朋友相助，欢欣喜悦。兑为悦也。同秉刚健之德，外抱柔和之姿，坚行正道，导民向上。
大象：两泽相依，更得泽中映月，美景良辰，令人怡悦。
运势：悲喜交集，有誉有讥，守正道，诸事尚可称意。
事业：由于善长人际关系，能团结他人，获得援助。因此，各项事业都十分顺利。只要本人坚持中正之道，动机纯正，是非分明，以诚心与人和悦，前途光明。
经商：很有利，可以取得多种渠道的支持。但在顺利时切莫忘记谨慎小心的原则，尤其警惕上小人的当。
求名：只要自己目的纯正，并有真才实学，一定可以受到多方面的热情帮助和资助，达到目的。
婚恋：彼此满意，成功的可能性很大。但千万不要过于坚持己见。
决策：为人聪颖，性格开朗，头脑灵活，心地善良，热心为公众服务，富有组织才能。因此，可以比较顺利地走上领导岗位。但一定要坚持中正原则，秉公办事，不得诌媚讨好上级，更不可欺压民众。永远保持谦虚品德，尤其不可过分自信，否则很容易为坏人包围。
台湾张铭仁解卦
泽：表示少女纯真喜悦之象，却在纯真之中带有娇蛮、任性的态度。六冲卦象，大好大坏。忧喜参半！
解释：喜悦，高兴。
特性：细心，体贴，善解人意，口才佳，幽默感，宜从事公关，服务业。
运势：有喜亦有忧，有誉亦有讥，虽得吉庆如意，然应守持正道，否则犯灾。
家运：有和悦之气象，但要操守自律，行事不可越轨，有分寸可得吉运。若不操守自律，必犯色情之害而受殃。
疾病：久病则凶，注意生活检点，戒酒色。
胎孕：孕安。能带给家人喜悦，又与六亲和睦，有缘。但也不要过分溺爱才是。
子女：骨肉情深，和好幸福之象。
周转：可顺利，不须急也。
买卖：有反覆之象，然尽力必成，可得大利之交易。
等人：会来，且有喜讯相告。
寻人：很快可知其下落。向西方寻可得。
失物：遗失物似为金属或金钱，有望失而复得，但是迟一点。且多数已损毁或损失。
外出：一路平安，即使遇到困难也会有人帮助，解脱困境。
考试：成绩佳。
诉讼：似为两个女性及金钱之事惹起，宜有和事佬出面调解。
求事：得利，但亦不可太大意。
改行：吉利。
开业：吉利。`,yaoCi:[{ci:"初九。和兑，吉。",xiang:"",explanation:`初九：和睦欢喜，吉利。
《象辞》说：和睦欢喜之所以吉利，因为人际邦交无所猜疑。`,shaoYong:"吉：得此爻者，人情和合，百谋皆遂。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。孚兑，吉，悔亡。",xiang:"",explanation:`九二：优待俘虏，吉利，没有悔恨。
《象辞》说：以诚信待人，人亦热忱待之，之所以吉利，因为互相之间有了信任。`,shaoYong:"吉：得此爻者，正当好运，事事和顺。做官的有升迁之兆。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。来兑，凶。",xiang:"",explanation:`六三：以使人归服为乐，蕴藏着凶险。
《象辞》说：以使人归服为乐，蕴藏着凶险，因为力小而任大，德薄而欲多，所行必不当。`,shaoYong:"凶：得此爻者，会有意外之祸，甚者则失道忘身。做官的有听信谗言而遭辱之忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。商兑，未宁，介疾有喜。",xiang:"",explanation:`九四：商谈恢复邦交之事，尚未达成协议，但两国的矛盾分歧有了愈合的趋势。
《象辞》说：九四爻辞所讲的喜，即是指将有喜庆之事。`,shaoYong:"平：得此爻者，从商获利，或进人口，不良者或有疾病，谋望不成。做官的会身居要职，升迁有望。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。孚于剥，有厉。",xiang:"",explanation:`九五：被剥国俘虏。剥国无理挑衅，必遭惩罚（对我方而言，坏事将变为好事）。
《象辞》说：当被侵剥之时，仍以诚信待人，正如九五阳爻所象，其人秉行中正之道，必能逢凶化吉。`,shaoYong:"凶：得此爻者，时运不佳，多意外之祸。做官的会受到小人的诽谤。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。引兑。",xiang:"",explanation:`上六：引导大家和睦相处。
《象辞》说：上六爻辞讲引导大家和睦相处，用意虽佳，但上六阴爻处一卦之尽头，像其人未必能一呼百应。`,shaoYong:"平：得此爻者，营谋不顺，谨防有忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:59,name:"涣",nameFull:"涣",originalText:"涣。亨，王假有庙。利涉大川，利贞。",xiangCi:"象曰：风行水上，涣。先王以享于帝，立庙。",explanation:`涣卦：亨通，因为君王亲临宗庙，禳灾祈福。利于涉水过江河。这是吉利的贞卜
《象辞》说：本卦上卦为巽，巽为风；下卦为坎，坎为水。风行水上，是涣卦的卦象。先王观此卦象，从而享祭天帝，建立宗庙，推行尊天孝祖的“德教”。
《断易天机》解
涣卦巽上坎下，为离宫五世卦。涣即涣散，表示恶事离身，患难将消，利涉大川，出入无阻，乃是吉卦。`,shaoYong:`离散解消，灾害涣散；乘机观变，养威蓄锐。
得此卦者，初有不顺，但终可解困，凡事宜小心则百事亨通，忌任性放纵。
台湾国学大儒傅佩荣解
时运：时来运转，水到渠成。
财运：神明保佑，财源流通。
家宅：祈神得福；自成佳偶。
身体：病情严重，恐难回天。
传统解卦
这个卦是异卦（下坎上巽）相叠。风在水上行，推波助澜，四方流溢。涣，水流流散之意。象征组织和人心涣散，必须用积极的手段和方法克服，战胜弊端，挽救涣散，转危为安。
大象：风吹在水面上，流动四散，又有春风吹散严寒，令冰雪消解。
运势：虽有忧患，但终可解困，百事亨通，忌任性散慢。
事业：处于比较困难的地步，主要是因为人心不齐。要采取强有力的办法，求得安定团结。其中，最为重要的是坚持正道，秉持大公无私的精神，收人心以聚涣散。
经商：市场状况混乱，方向不明，适当的冒险是完全必要的。但必须公正无私，克制私欲，争取有实力的合作者和支援也是完全有必要的。
求名：必须静下心来努力学习和提高知识水平，增加才干。涣散的形势必须进行治理，这需要多方面的人才。前途是光明的，关键取决于个人的努力。
婚恋：只要双方都抱着纯正的目的，一定美满成功。
决策：为了开拓事业，必须使用积极的手段，克服和战胜内部不团结的弊病。首先自己要除私心，牺牲小我，完成大我。切莫介入是非争端之中。这样，可以重新获得安定的局面。在良好的环境里，各项事业前途光明。
台湾张铭仁解卦
涣：表示涣散之象，主凶象。心神不宁、精神不佳，人事向心力均已离散，有颓废不振的运势。事业、感情、婚姻根基开始有所松动。自身情绪不稳定，若能稳定情绪、定下心神，应会再恢复以往的神采风光。
解释：涣散。
特性：喜追求变化，缺乏耐性，工作不稳定，理财能力差，爱旅行外出，变换住所。 对朋友热心，桃花运也多。
运势：初有小损，但终可解困而心悦，凡事小心则百事亨通，任性放纵必败。
家运：起初有损，有波折且困，但可渐入佳境。
疾病：幼年体弱多病，长大后渐康 ，注意血液、内分泌。
胎孕：临产妇无碍。
子女：双亲百般劳苦为子女，而子女深知父母养育教导之恩，多得良好配偶，并有才艺之象。
周转：目标准确则有利，否则波折多亦难成。
买卖：虽难成，客户会再回来，但忍耐些时日可有利。
等人：不一定会来。
寻人：难寻。
失物：不能寻回。
外出：平安无事，水路更顺利。
考试：尚可，宜再加油。
诉讼：凡事宜大事化小，小事化无，诉讼可解。
求事：虽有挫折，但可成。宜耐心。
改行：择时视势而行，不必急于一时。
开业：开业可，初时有小挫折，勿惊。`,yaoCi:[{ci:"初六。用拯马壮，吉。",xiang:"",explanation:`初六：洪水突来，因而乘马逃避，匆促跌伤，幸免淹亡之祸，吉利。
《象辞》说：初六爻辞讲的吉利，是因为初六阴爻居九二阳爻之下，有阴柔顺从阳刚之意。像马顺从人意。`,shaoYong:"吉：得此爻者，得尊上提举，营谋皆遂。做官的会受到重用，有望晋升。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。涣奔其机，悔亡。",xiang:"",explanation:`九二：洪水奔涌，冲毁房基。性命无虞。不幸中之万幸。
《象辞》说：荡涤冲刷其污垢，正是心中所愿。`,shaoYong:"平：得此爻者，谋望有成，或会成家。做官的有实权。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。涣其躬，无悔。",xiang:"",explanation:`六三：洪水冲到身上，幸免于难，尚可庆幸。
《象辞》说：冲刷他的身体，说明其人志在教育他人，治理国家。`,shaoYong:"平：得此爻者，常人获利。做官的出外就职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。涣其群，元吉。涣有丘，匪夷所思。",xiang:"",explanation:`六四：洪水冲向人群，然而十分幸运，因为人群聚集在山丘上，洪水只能淹到山脚，否则其后果是平常难以想像的。
《象辞》说：冲刷大众百姓，说明君王德教广施，教化大行。`,shaoYong:"吉：得此爻者，先凶后吉，谋望和合，求利可获。做官的会身居要职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。涣汗其大号，涣王居，无咎。",xiang:"",explanation:`九五：洪水横溢，淹没国都，淹及王宫，牵好人员早巳撤走，没有大的灾难。
《象辞》说：王宫没有遭遇灾难，因为九五阳爻居上卦中位，位尊且正，自然无灾难。`,shaoYong:"吉：得此爻者，正当好运，事事皆吉，求利者遂。做官的会升迁。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。涣其血，去逖出，无咎。",xiang:"",explanation:`上九：洪水退去，忧患消除，但仍须警惕，加强防范，这样就没有灾难。
《象辞》说：有血光之灾，走开，远远地走开，这样就可远离灾害。`,shaoYong:"平：得此爻者，先难后易，运势好转。做官的外出就职者会有灾难。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:60,name:"节",nameFull:"节",originalText:"节。亨，苦节不可贞。",xiangCi:"象曰：泽上有水，节。君子以制数度，议德行。",explanation:`节卦：亨通。如果以节制为苦，其凶吉则不可卜问。
《象辞》说：本卦下卦为兑，兑为泽；上卦为坎，坎为水。泽中水满，因而须高筑堤防，这是节卦的卦象。君子观此卦象，从而建立政纲制度，确立伦理原则。
《断易天机》解
节卦坎上兑下，为坎宫初世卦。节说明需节制、节约，停止挥霍，这样才能居家康宁。`,shaoYong:`操守节度，适可而止；审时度势，能知变通。
得此卦者，宜安分守己，切忌贪心不足，诸事必须节制，不宜过份，更要戒酒色。
台湾国学大儒傅佩荣解
时运：品行端正，名利自成。
财运：正派经营，富裕可求。
家宅：富有之家；婚姻吉祥。
身体：节制饮食。
传统解卦
这个卦是异卦（下兑上坎）相叠。兑为泽，坎为水。泽有水而流有限，多必溢于泽外。因此要有节度，故称节。节卦与涣卦相反，互为综卦，交相使用。天地有节度才能常新，国家有节度才能安稳，个人有节度才能完美。
大象：泽为池沼，坎水在上，喻蓄积及约束水份不使流失，但水位过高，则成泛滥。
运势：有志不能伸，诸事必须节制，不宜过份，更要戒酒色。
事业：正处在发展时期，一定要注意切勿冒进。但更不应放弃良好的机遇，只要坚持遵道守义的原则，可大胆行动。这样，事业可以继续兴旺发达。
经商：市场行情好，对自己很有利，应该努力开拓，勿失去机会。不过，头脑一定要冷静，投入应有限度，适可而止，该收则收。
求名：严格要求自己，办事知道节度，不走极端，可以通行无阻，顺利前进。
婚恋：不要陷入情不自禁的地步，顺其自然会有好结果。
决策：抓住机遇，勿失良机。适当节制自己的行动，不可勉强，更不可冒险，恰如其分。一切不可拘泥，该变就变。但是，该节制的时候一定要节制。节制必须有限度，过于节制就成为苦，不会有好的结果，这叫适得其反，务必十分注意。
台湾张铭仁解卦
节：表示节制之象。主是个状况卦，吉凶未定之象。卦中所现，提醒卜卦之人，事事有过于放纵之象，尤其是在金钱方面，投资理财需节制有守为安。感情则要多留意自己的言行举止，已有过份之态或对对方过于放纵之势。
解释：节制，节约。
特性：理想高远，但与现实差距大，不过却有恒久的耐力，有志者是竟成。宽以待人，严以律己，社会声誉不错。
运势：有志不能伸，诸事必须节制，不宜过份，更要戒酒色。
家运：谨守做人处事的规范，则可得平安和乐之家庭。
疾病：注意泌尿及消化系病变，宜速就医。
胎孕：可求神保产母，否则有厄。
子女：儿女多温柔孝顺。但若长辈行为不检反招破，得不偿失也。
周转：远水难救近火。无望。
买卖：不得时也。
等人：不来，或须久等。
寻人：人说皆是虚言。有所藏身，不必去寻。想回来自己会回来。
失物：不能寻回。
外出：大胆外出顺利。
考试：须力求上进，不可怠忽。
诉讼：局势僵持不下，宜让则讼可解。
求事：再待时机，成功率小。
改行：不宜。
开业：开业宜缓图，计划周详后方可。`,yaoCi:[{ci:"初九。不出户庭，无咎。",xiang:"",explanation:`初九：筮遇此爻，杜门不出，没有灾祸。
《象辞》说：杜门不出，因为其人知道所行必不通。`,shaoYong:"平：得此爻者，进取不利，宜守旧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。不出门庭，凶。",xiang:"",explanation:`九二：筮遇此爻，杜门不出，也有凶险。
《象辞》说：杜门不出，也有凶险，因为坐失良机，错误已极。`,shaoYong:"凶：得此爻者，时运不佳，事多乖离，宜动不宜静。做官的不得时运。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。不节若，则嗟若。无咎。",xiang:"",explanation:`六三：不节俭则困穷，处困穷则知悔过，知悔过则可以无灾难。
《象辞》说：奢侈带来了悔恨，这是谁之过？`,shaoYong:"平：得此爻者，多辛苦，少收获。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。安节，亨。",xiang:"",explanation:`六四：安于节俭遵礼的生活，通泰。
《象辞》说：安于节俭遵礼的生活之所以吉利，是因为顺从了君上的旨意。`,shaoYong:"吉：得此爻者，秉公守法，安于正道，福利可获。做官的会得到上司的欣赏，升迁有望。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。甘节，吉，往有尚。",xiang:"",explanation:`九五：以节俭遵礼为乐，吉利。秉此而行，所往必得别人资助。
《象辞》说：以节俭遵礼为乐之所以吉利，因为九五之爻，所居恰当，像人居德行义，自然获得人家资助。`,shaoYong:"吉：得此爻者，正当好运，谋望有成。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。苦节，贞凶。悔亡。",xiang:"",explanation:`上六：以节俭遵礼为苦，卜问得凶兆，其人将为家道败落而悔恨。
《象辞》说：以节俭遵礼为苦，卜问得凶兆，正如上六阴爻孤悬一卦之尽头，像人走入穷困不通的境地。`,shaoYong:"凶：得此爻者，不得天时，名利皆无。做官的不知变通，前途渺茫。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:61,name:"中孚",nameFull:"中孚",originalText:"中孚。豚鱼，吉。利涉大川，利贞。",xiangCi:"象曰：泽上有风，中孚。君子以议狱缓死。",explanation:`中孚卦：豚鱼献祭，虽物薄但心诚，吉利。并利于涉水过河。这是吉利的贞卜。
《象辞》说：本卦上卦为巽，巽为风；下卦为兑，兑为泽，泽上有风，风起波涌。这是中孚的卦象。君子观此卦象，有感于风化邦国，唯德教为先，因而审议讼狱，不轻置重典。
《断易天机》解
中孚卦巽上兑下，为艮宫游魂卦。中孚即忠信之意，主利涉大川，厄难消除。`,shaoYong:`信而有实，诚恳诚信；知己协助，谋望克遂。
得此卦者，正直诚信者吉利，会得到朋友的帮助，谋事可成；心存邪念者则凶。
台湾国学大儒傅佩荣解
时运：风波难免，小心诉讼。
财运：谨慎行事，可免灾祸。
家宅：诉讼之灾；婚姻致讼。
身体：有惊无险。
传统解卦
这个卦是异卦（下兑上巽）相叠。孚本义孵，孵卵出壳的日期非常准确，有信的意义。卦形外实内虚，喻心中诚信，所以称中孚卦。这是立身处世的根本。
大象：中孚为诚信意，风吹在泽水之上，泽水必相应而起波浪，为共鸣之象。
运势：凡事以「诚」待人，以「信」处事则诸事皆吉，心存邪念则凶。
事业：以诚实忠信的态度对待事业，获得重大的成就，发展顺利。必须继续遵循正道的原则，不可掉以轻心，也不可过分地相信人，尤其不可以孤傲的性格自我封闭。否则事业将走向失败。
经商：处理得很好，符合市场的要求。小心谨慎地经营，讲究信义，优质服务，可有满意的结果，甚至冒险犯难也不会出问题。
求名：必须在道德修养的基础上，刻苦学习知识和本领，不断提高自己。同时，不要惧怕困难，努力向前。
婚恋：双方以诚信的态度相互对待，幸福美满。
决策：以诚信为立身处世的基石，真诚待人，信守制度，坚持原则，和悦谦虚，可以战胜任何困难，即使出现了问题也可以亡羊补牢。但务必增强对人的观察能力，提高分辨是非的水平。
台湾张铭仁解卦
中孚：表示诚信、实在。若为人处事一切以诚信为重，则事事皆可顺利而行。
解释：得人缘，孚众望。
特性：心地善良，富同情心，朋友多助，为人风趣，口才佳，反应快，桃花运早。重罗曼蒂克情调，讲气氛感觉。
运势：如三月之春花，似锦大地，与人谋事均得利。诚者，立业之本也，若存邪曲之念则破吉运，须认清善恶。得此卦诚者佳，尤利他乡财路。
家运：有突发大利，平安幸福之吉象。
疾病：金木交战之象，注意胸腹脾胃等病。
胎孕：安。
子女：父母慈且诚信，故子女必孝，忠信门第也。
周转：不成问题。
买卖：可成亦有利。
等人：必定来。
寻人：不寻自来。
失物：可失而复得，但需要一段时间。
外出：非常顺利，根据工作的需要可以经常外出。
考试：必定上榜。
诉讼：为突发事件，宜把握第一时间处理，迟则反凶。
求事：有利。
改行：可按照计划行事。
开业：开业者吉利，先苦后乐之象。`,yaoCi:[{ci:"初九。虞吉，有它不燕。",xiang:"",explanation:`初九：行安神之礼，吉利。有这样的变故，自然不行讌礼。
《象辞》说：初九爻辞讲行安神之礼，吉利，因为慕恋先人的心愿未变。`,shaoYong:"吉：得此爻者，得贵人提举，谋事有成，但喜中有忧，宜行正道，修身养性，不可逸乐。做官的会受到举荐，能居要职。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。鸣鹤在阴，其子和之。我有好爵，吾与尔靡之。",xiang:"",explanation:`九二：老鹤在树荫下鸣叫，小鹤在旁边附和。我有美酒，与你共享用。
《象辞》说：小鹤和应老鹤，这是心灵相通的表现。`,shaoYong:"吉：得此爻者，无往不利，多进钱财，或生子。做官的会晋升。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。得敌，或鼓或罢，或泣或歌。",xiang:"",explanation:`六三：击败了敌人，有的击鼓追击，有的凯旋报捷；消息传来，有的高兴得热泪盈眶，有的放声高歌。
《象辞》说：有的人击鼓追击，有的凯旋报捷，但从爻象看来，六三阴爻而处于阳位，胜利之中，恐怕隐伏着不测之祸。`,shaoYong:"凶：得此爻者，喜中有忧，事多反复。做官的同僚不睦，先进后退。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。月既望，马匹亡，无咎。",xiang:"",explanation:`六四：月中的时候，马匹丢失了，但无大的灾祸。
《象辞》说：马匹丢失了，此后要加倍警惕，防止再发生类似事情。`,shaoYong:"平：得此爻者，能得到提拔，但有失去配偶或财产之忧。做官的会晋升，身居要位。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。有孚挛如，无咎。",xiang:"",explanation:`九五：俘虏成群，串连捆绑。没有灾难。
《象辞》说：存心诚信，始终如一，正如九五爻象所显示的，其人行事与其地位相合。`,shaoYong:"吉：得此爻者，人情和合，谋事有成，无往不利。做官的君臣一心，会得到上司的赞赏。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。翰音登于天，贞凶。",xiang:"",explanation:`上九：鸡飞到天空。卜问得凶兆。
《象辞》说：鸡飞到天空，它怎能长久飞翔呢？`,shaoYong:"凶：得此爻者，多虚少实，前路凶险。经商者会有损失。做官的有近颜之喜。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:62,name:"小过",nameFull:"小过",originalText:"小过。亨，利贞。可小事，不可大事。飞鸟遗之音。不宜上，宜下，大吉。",xiangCi:"象曰：山上有雷，小过。君子以行过乎恭，丧过乎衰，用过乎俭。",explanation:`小过卦：亨通，这是吉利的贞卜。但是只适宜于小事，不适宜大事。飞鸟空中过，叫声耳边留，警惕人们：登高必遇险，下行则吉利。
象辞说：本卦下卦为艮，艮为山；上卦为震，震为雷，山上有雷，是小过的卦象。君子观此卦象，惧畏天雷，不敢有过失。因而行事不敢过于恭谦，居丧不敢过度哀伤，用度不敢过于节俭，唯适中而已。`,shaoYong:`阴顺阳困，柔软用事；谨慎自持，不宜急进。
得此卦者，诸事不利，宜行小事，不宜成大事，更防因自身的过失惹来是非争讼。`,yaoCi:[{ci:"初六。飞鸟以凶。",xiang:"",explanation:`初六：飞鸟经过空中，预兆着凶险。
《象辞》说：飞鸟经过空中，预兆着凶险，这是无可奈何之事。`,shaoYong:"凶：得此爻者，不得天时，灾难突来。做官的有骤然取祸之忧。读书人则有一飞冲天之兆。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。过其祖，遇其妣。不及其君，遇其臣，无咎。",xiang:"",explanation:`六二：错过了他的祖父，但遇着了他的祖母；没有赶上国君，还是遇着了臣僚。虽有差迟，但非徒劳，因而无灾难。
《象辞》说：没有赶上国君，因为臣子固不宜超越国君。`,shaoYong:"平：得此爻者，得贵人指引，谋望有成。做官的严于律己，恪守己职，则升迁有望。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。弗过防之，从或戕之，凶。",xiang:"",explanation:`九三：不要过分指责，但要制止他的错误发展，如果听任放纵，反而害了他，必遭凶险。
《象辞》说：听任放纵反而害了他，凶险已极，不可言状。`,shaoYong:"凶：得此爻者，时运不济，谨防意外。做官的须防小人奸邪之辈所害。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。无咎，弗过遇之，往厉必戒。勿用，永贞。",xiang:"",explanation:`九四：没有过错，不要指责他，但要防止发生错误。前去冒险，则必须立即加以警告，无须乎卜问往后的吉凶。
《象辞》说：不要过份指责，但要防止发生错误，因为九四阳爻处于阴位，像人处境不利，容易出错。前去冒险，必须加以警告，因为明知而故犯，只能加速自己的失败。`,shaoYong:"平：得此爻者，宜安常守职，不可妄动。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。密云不雨，自我西郊。公弋取彼在穴。",xiang:"",explanation:`六五：在我西郊的上空，云气密布，降雨在即。王公本是去射鸟，可是在洞穴捉到野兽。
《象辞》说：云气密布，降雨在即，因为雨云已聚集在空中。`,shaoYong:"平：得此爻者，不利谋事，守旧为佳。做官的有告休之危。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。弗遇过之，飞鸟离之，凶。是谓灾眚。",xiang:"",explanation:`上六：不加制之，因而犯下过失，好比飞鸟钻入罗网，凶险啊，这叫做灾难。。
《象辞》说：不加制止，因而犯下过失，正如上六阴爻位象所示，其人太猖狂了。`,shaoYong:`凶：得此爻者，时运不佳，不知退守，过刚则折。
鍛ㄦ槗绗?7鍗﹁瑙?
闅忓崷(娉介浄闅?鍘熸枃
闅忋€傚厓浜紝鍒╄礊锛屾棤鍜庛€?
璞℃洶锛氭辰涓湁闆凤紝闅忋€傚悰瀛愪互鍚戞櫐鍏ュ鎭€?
鐧借瘽鏂囪В閲?
闅忓崷锛氬ぇ鍚夊ぇ鍒╋紝鍗滃緱鍚夊厗锛屾病鏈夌伨瀹炽€?
銆婅薄杈炪€嬭锛氭湰鍗︿笅鍗︿负闇囷紝闇囦负闆凤紝涓婂崷涓哄厬锛屽厬涓烘辰;闆峰叆娉戒腑锛屽ぇ鍦板瘨鍑濓紝涓囩墿铔颁紡锛屾槸闅忓崷鐨勫崷璞°€傚悰瀛愯姝ゅ崷璞★紝鍙栨硶浜庨殢澶╂椂鑰屾矇瀵傜殑闆峰０锛岄殢鏃朵綔鎭紝鍚戞櫄鍒欏叆瀹や紤鎭€?
閭甸泹娌虫礇鐞嗘暟瑙ｅ崷
闅忛『鍜屽悓锛岃礊鍥鸿嚜鎸?闅忎粠鏈鸿繍锛屼笉鑳戒笓妯€?
灏忓悏锛氬緱姝ゅ崷鑰咃紝瀹滈殢澶у娍锛屽叾浜嬪彲鎴愩€傚嚒浜嬩笌浠栦汉澶氭矡閫氫氦娴侊紝鍙悕鍒╁弻鏀躲€傚垏涓嶅彲鍧氭寔宸辫锛屼笓妯€呬簨涓嶆垚銆?
鍛ㄦ槗绗?7鍗﹀垵涔濈埢璇﹁В
鍒濅節鐖昏緸
鍒濅節銆傚畼鏈夋笣锛岃礊鍚夈€?鍑洪棬浜ゆ湁鍔熴€?
璞℃洶锛氬畼鏈夋笣锛屼粠姝ｅ悏涔?鍑洪棬浜ゆ湁鍔燂紝涓嶅け涔熴€?
鐧借瘽鏂囪В閲?
鍒濅節锛氶鑸嶆椂閲屽彂鐢熶簨鏁咃紝绛亣姝ょ埢鍒欏悏锛屽嚭闂ㄥ悓琛岄兘寰楀ソ澶勩€?
銆婅薄杈炪€嬭锛氬畼鍚忔妸浜嬫儏鍔炲潖浜嗭紝褰掍粠姝ｉ亾鍒欏悏鍒┿€傚嚭闂ㄥ悓琛岄兘寰楀ソ澶勶紝杩欐槸涓嶅け姝ｉ亾鐨勭紭鏁呫€?
閭甸泹娌虫礇鐞嗘暟鐖昏緸瑙ｉ噴
鍚夛細寰楁鐖昏€咃紝澶氳幏鍒┿€傚仛瀹樼殑姝ｅ綋濂借繍锛屾湁鍗囪縼涔嬫満銆?
鍛ㄦ槗绗?7鍗﹀叚浜岀埢璇﹁В
鍏簩鐖昏緸
鍏簩銆傜郴灏忓瓙锛屽け涓堝か銆?
璞℃洶锛氱郴灏忓瓙锛屽紬鍏间笌涔熴€?
鐧借瘽鏂囪В閲?
鍏簩锛氭姄浣忎簡鏈垚骞寸殑濂撮毝锛岃窇浜嗘垚骞寸殑濂撮毝銆?
銆婅薄杈炪€嬭锛氭姄浣忎簡灏忕殑锛岃窇浜嗗ぇ鐨勶紝鎰忔€濇槸涓よ€呬笉鑳藉吋寰椼€?
閭甸泹娌虫礇鐞嗘暟鐖昏緸瑙ｉ噴
鍑讹細寰楁鐖昏€咃紝涓嶅畨瀹侊紝鎴栧彈灏忎汉鐨勬殫绠楋紝鏄潪涓嶆柇銆傚綋瀹樼殑瀹滈€€瀹堬紝杩涘彇鑰呰鏈夎嚜鐭ヤ箣鏄庛€?
鍛ㄦ槗绗?7鍗﹀叚涓夌埢璇﹁В
鍏笁鐖昏緸
鍏笁銆傜郴涓堝か锛屽け灏忓瓙銆傞殢鏈夋眰锛屽緱锛屽埄灞呰礊銆?
璞℃洶锛氱郴涓堝か锛屽織鑸嶄笅涔熴€?
鐧借瘽鏂囪В閲?
鍏笁锛氭姄浣忎簡鎴愬勾濂撮毝锛岃窇浜嗘湭鎴愬勾濂撮毝銆傚笇鏈涙棤澶变笉濡傜幇寰椼€傜閬囨鐖伙紝鍗滈棶灞呭鍒欏悏鍒┿€?
銆婅薄杈炪€嬭锛氭姄浜嗗ぇ鐨勶紝璺戜簡灏忕殑锛屽叾蹇楀湪浜庤拷閫愬ぇ鐨勶紝鑸嶅純灏忕殑銆?
閭甸泹娌虫礇鐞嗘暟鐖昏緸瑙ｉ噴
骞筹細寰楁鐖昏€咃紝钀ヨ皨閬傛剰锛屼絾瀹滆蛋姝ｉ亾锛屾墠鑳藉緱鍒┿€傚仛瀹樼殑浼氬緱鍒颁繚涓捐€屽崌杩佹湁鏈涖€?
鍛ㄦ槗绗?7鍗︿節鍥涚埢璇﹁В
涔濆洓鐖昏緸
涔濆洓銆傞殢鏈夎幏锛岃礊鍑躲€傛湁瀛氾紝鍦ㄩ亾浠ユ槑锛屼綍鍜?
璞℃洶锛氶殢鏈夎幏锛屽叾涔夊嚩涔熴€傛湁瀛氬湪閬擄紝鏄庡姛涔熴€?
鐧借瘽鏂囪В閲?
涔濆洓锛氳拷鍚嶉€愬埄锛岃椽澶氬姟鑾凤紝鍗滈棶寰楀嚩鍏嗐€傛娂閫佷繕铏忎笂璺紝鏄庝簬绾︽潫锛屾病鏈夌伨闅俱€?
銆婅薄杈炪€嬭锛氳拷鍚嶉€愬埄锛岃椽澶氬姟鑾凤紝杩欑浜洪伃閬囧嚩闄╂槸搴旇鐨勩€傝皑瀹堜俊鐢紝涓ュ畧姝ｉ亾锛岃繖鏄槑瀵熶簨鍔熺殑缁撴灉銆?
閭甸泹娌虫礇鐞嗘暟鐖昏緸瑙ｉ噴
骞筹細寰楁鐖昏€咃紝浼氬緱鍒板ソ浜虹殑鎶妇锛屽寲鍑朵负鍚夈€傚仛瀹樼殑浼氳韩灞呰鑱岋紝鍔姏杩涘彇鑰呭彲鎴愪簨锛屽彲鑾峰緱鍚嶅埄銆?
鍛ㄦ槗绗?7鍗︿節浜旂埢璇﹁В
涔濅簲鐖昏緸
涔濅簲銆傚瓪浜庡槈锛屽悏銆?
璞℃洶锛氬瓪浜庡槈鍚夛紝浣嶆涓篃銆?
鐧借瘽鏂囪В閲?
涔濅簲锛氫繕铏忎簡涓嶅皯鍢変汉锛屽悏鍒┿€?
銆婅薄杈炪€嬭锛氫俊瀹堜腑姝ｄ箣閬擄紝璇镐簨鍚夊埄锛屽洜涓轰節浜斾箣鐖诲眳涓婂崷涓綅锛屽儚浜哄畧涓涔嬮亾銆?
閭甸泹娌虫礇鐞嗘暟鐖昏緸瑙ｉ噴
鍚夛細寰楁鐖昏€咃紝钀ヨ皨閬傛剰锛屽鍠滃簡涔嬩簨锛屽仛瀹樼殑浼氬崌鑱岋紝鎴栧鍠滀簨銆?
鍛ㄦ槗绗?7鍗︿笂鍏埢璇﹁В
涓婂叚鐖昏緸
涓婂叚銆傛嫎绯讳箣锛屼箖浠庣淮涔?鐜嬬敤浜ㄤ簬瑗垮北銆?
璞℃洶锛氭嫎绯讳箣锛屼笂绌蜂篃銆?
鐧借瘽鏂囪В閲?
涓婂叚锛氬皢淇樿檹鎷樼璧锋潵锛岀揣绱ф崋缁戯紝鍛ㄦ枃鐜嬪皢浠栦滑浣滀负浜虹壊鍦ㄨタ灞辩キ绁€绁炵伒銆?
銆婅薄杈炪€嬭锛氳鎹嗙粦鎷樼锛屽洜涓轰笂鍏眳涓€鍗︿箣灏藉ご锛屽儚浜哄浜庣┓鍥颁箣澧冨湴銆?
閭甸泹娌虫礇鐞嗘暟鐖昏緸瑙ｉ噴
鍑讹細寰楁鐖昏€咃紝鑻﹂毦澶氬锛屼笉寰堝鎰忥紝閲嶇梾鑰呬細鏈夌敓鍛戒箣蹇с€傚仛瀹樼殑椤婚槻姝㈠皬浜虹殑璋楄█銆?
鍛ㄦ槗绗?8鍗﹁瑙?銆€
铔婂崷(灞遍铔?鍘熸枃 銆€銆€
铔娿€傚厓浜紝鍒╂秹澶у窛銆傚厛鐢蹭笁鏃ワ紝鍚庣敳涓夋棩銆?
璞℃洶锛氬北涓嬫湁椋庯紝铔娿€傚悰瀛愪互鎸皯鑲插痉銆?
鐧借瘽鏂囪В閲?銆€銆€
铔婂崷锛氬ぇ鍚夊ぇ鍒┿€傚埄浜庢秹姘存浮娌筹紝浣嗛』鍦ㄧ敳鍓嶄笁鏃ヤ箣杈涙棩涓庣敳鍚庝笁鏃ヤ箣涓佹棩鍚▼銆?
銆婅薄杈炪€嬭锛氭湰鍗︿笂鍗︿负鑹负灞憋紝涓嬪崷涓哄方涓洪锛岃搐浜哄灞卞眳浜庝笂锛屽甯冨痉鏁欐柦浜庝笅锛屾墍璋撳北涓嬫湁椋庯紝杩欐槸宸藉崷鐩煎崷璞°€傚悰瀛愯姝ゅ崷璞★紝鍙栨硶浜庡惞鎷備竾鐗╃殑椋庯紝浠庤€屾尟鏁戜竾姘戯紝鏂借寰锋暀銆?
閭甸泹娌虫礇鐞嗘暟瑙ｅ崷 銆€
涓夎泭鍦ㄥ櫒锛屼簨鐗╄触鍧?杈涘嫟涓佸畞锛岃浆鍗变负瀹夈€?
鍑讹細寰楁鍗﹁€咃紝鑹伴毦杩锋儜涔嬫椂锛屼簨浜嬩笉濡傛剰;瀹滃ぇ鑳嗛潻鏂帮紝濂嬪彂鍥惧己锛岃壈鑻﹀姫鍔涳紝鍙浆鍗变负瀹夈€?
鍛ㄦ槗绗?8鍗﹀垵鍏埢璇﹁В
鍒濆叚鐖昏緸
鍒濆叚銆傚共鐖朵箣铔婏紝鏈夊瓙锛岃€冩棤鍜庛€傚帀锛岀粓鍚夈€?
璞℃洶锛氬共鐖朵箣铔婏紝鎰忔壙鑰冧篃銆?
鐧借瘽鏂囪В閲?
鍒濆叚锛氱户鎵跨埗涓氾紝鏈変竴涓瓭椤虹殑鍎垮瓙锛屽浐鐒舵病鏈夌伨瀹筹紝鍗充娇閬囧埌鍗遍櫓锛屾渶鍚庝箖鍚夊埄銆?
銆婅薄杈炪€嬭锛氱户鎵跨埗涓氾紝鎰忔€濇槸缁ф壙鍏剁埗閬楀織銆?
閭甸泹娌虫礇鐞嗘暟鐖昏緸瑙ｉ噴
鍚夛細寰楁鐖昏€咃紝浼氬緱鍒扮鍏堢殑搴囦綉锛岃惀璋嬮亗鎰忋€傚仛瀹樼殑浼氬彈鍒伴噸浠伙紝鏀归潻鍒涙柊銆?
鍛ㄦ槗绗?8鍗︿節浜岀埢璇﹁В 銆€
涔濅簩鐖昏緸 銆€
涔濅簩銆傚共姣嶄箣铔婏紝涓嶅彲璐炪€?
璞℃洶锛氬共姣嶄箣铔婏紝寰椾腑閬撲篃銆?
鐧借瘽鏂囪В閲?
涔濅簩锛氱户鎵挎瘝涓氾紝鍒欏悏鍑朵笉鍙崪闂€?
銆婅薄杈炪€嬭锛氱户鎵挎瘝涓氾紝涔濅簩澶勪笅鍗︿腑浣嶏紝鐖昏薄鏄剧ず鍏朵汉寰椾腑姝ｄ箣閬撱€?
閭甸泹娌虫礇鐞嗘暟鐖昏緸瑙ｉ噴
骞筹細寰楁鐖昏€咃紝鏀规棫浠庢柊锛屽垯浼氬鎰忋€傚コ鍛藉嫟淇寔瀹讹紝鎬у繝鐩磋€呭绂忋€?
鍛ㄦ槗绗?8鍗︿節涓夌埢璇﹁В
涔濅笁鐖昏緸
涔濅笁銆傚共鐖朵箣铔婏紝灏忔湁鎮旓紝鏃犲ぇ鍜庛€?
璞℃洶锛氬共鐖朵箣铔婏紝缁堟棤鍜庝篃銆?
鐧借瘽鏂囪В閲?銆€
涔濅笁锛氱户鎵跨埗涓氾紝鍗充娇绋嶆湁杩囬敊锛屼篃涓嶄細鍑哄ぇ闂銆?
銆婅薄杈炪€嬭锛氱户鎵跨埗涓氾紝鏈€缁堜笉浼氶伃閫㈢伨闅俱€?
閭甸泹娌虫礇鐞嗘暟鐖昏緸瑙ｉ噴 銆€
鍑讹細寰楁鐖昏€咃紝韬佽繘鑰呮湁澶憋紝涓嶅惉淇¤皸瑷€鑰呭垯鏃犻毦銆?
鍛ㄦ槗绗?8鍗﹀叚鍥涚埢璇﹁В 銆€銆€
鍏洓鐖昏緸 銆€銆€
鍏洓銆傝鐖朵箣铔婏紝寰€瑙佸悵銆?
璞℃洶锛氳鐖朵箣铔婏紝寰€鏈緱涔熴€?
鐧借瘽鏂囪В閲?銆€銆€
鍏洓锛氬厜澶х埗涓氾紝鏂借璧锋潵鍥伴毦閲嶉噸銆?
銆婅薄杈炪€嬭锛氬厜澶х埗涓?鍥伴毦閲嶉噸)锛屾柦琛屼箣涓湭灏藉緱褰撱€?
閭甸泹娌虫礇鐞嗘暟鐖昏緸瑙ｉ噴 銆€銆€
鍑讹細寰楁鐖昏€咃紝浜嬩簨瑙佸咖锛屾湁瓒崇柧銆?
鍛ㄦ槗绗?8鍗﹀叚浜旂埢璇﹁В
鍏簲鐖昏緸
鍏簲銆傚共鐖朵箣铔婏紝鐢ㄨ獕銆?
璞℃洶锛氬共鐖朵箣铔婏紝鎵夸互寰蜂篃銆?
鐧借瘽鏂囪В閲?銆€
鍏簲锛氱户鎵跨埗涓氾紝鍗氬緱浜嗚禐瑾夈€?
銆婅薄杈炪€嬭锛氱户鎵跨埗涓氳€屽崥寰椾簡璧炶獕锛屽洜涓虹户鎵夸簡鍏剁埗鐨勭編濂藉搧寰枫€?
閭甸泹娌虫礇鐞嗘暟鐖昏緸瑙ｉ噴
鍚夛細寰楁鐖昏€咃紝澶氬枩搴嗕箣浜嬶紝瀹朵腑鎴栬繘浜哄彛銆傚仛瀹樼殑杩涘彇鏈夋湜锛屽悕瑾夎繙鎾€?
鍛ㄦ槗绗?8鍗︿笂涔濈埢璇﹁В 銆€
涓婁節鐖昏緸 銆€
涓婁節銆備笉浜嬬帇渚紝楂樺皻鍏朵簨銆?
璞℃洶锛氫笉浜嬬帇渚紝蹇楀彲鍒欎篃銆?
鐧借瘽鏂囪В閲?銆€
涓婁節锛氫笉鏈嶅姟浜庣帇渚紝鍥犱负鍏朵汉鐪嬮噸鑷韩浠峰€笺€?
銆婅薄杈炪€嬭锛氫笉鏈嶅姟浜庣帇渚紝杩欑蹇楄叮鍙互鏁堟硶銆?
閭甸泹娌虫礇鐞嗘暟鐖昏緸瑙ｉ噴
骞筹細寰楁鐖昏€咃紝瀹滃畧鏃э紝濂借繍鑰咃紝澶氶亣灏婅吹锛岃兘鑾峰緱鎻愭嫈銆傚仛瀹樼殑瀹滈€€瀹堬紝鎴栧憡浼戙€?`,fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:63,name:"既济",nameFull:"既济",originalText:"既济。亨，小利贞，初吉终乱。",xiangCi:"象曰：水在火上，既济。君子以思患而预防之。",explanation:`既济卦：亨通。这是小见吉利的贞卜。起初吉利，最后将发生变故。
《象辞》说：本卦上卦为坎，坎为水；下卦为离，离为火。水上火下，水浇火熄，是既济之卦的卦象。君子观此卦象，从而有备于无患之时，防范于未然之际。
《断易天机》解
既济卦坎上离下，为坎宫三世卦。既济就是说已经成功，事情已经摆平。但还需谨慎，当心物极必反。`,shaoYong:`济助有成，坚忍自重；由大而小，确保盛运。
得此卦者，事业有成，成功之象，但谨防盛极必衰，宜退守为吉，再进则凶。
台湾国学大儒傅佩荣解
时运：盛极必衰，谨防后患。
财运：及时出手，可得利润。
家宅：大厦可居；百年好合。
身体：大病初愈，仍需自理。
传统解卦
这个卦是异卦（下离上坎）相叠。坎为水，离为火，水火相交，水在火上，水势压倒火势，救火大功告成。既，已经；济，成也。既济就是事情已经成功，但终将发生变故。
大象：坎水在离火之上，水性下注，火势上炎，水火相济，完成之意。
运势：名利双收，成功之象，但须防物极必反，初吉后凶。
事业：处在顺利和兴旺的阶段，甚至大功已经告成。如何才能保住这种势头，是问题的关键。必须认识盛极将衰的真理，思患预防，防微杜渐，有备可无患。同时，一定要密切注意形势，抓住有利时机，继续奋发向上，推动事业发展。
经商：由于市场形势有利，已经赚得许多，但同时也预示着危机的随时出现。因此，务必小心在意，事未到，先预防，终日提防戒惧。同时，认真观察市场的变化，随时转向，开拓新市场。
求名：个人追求名利的基本条件已经具备。必须防止因此而变得僵化和保守，以致功亏一篑，半途而废。
婚恋：起初顺利，中途会出现挫折。
决策：各方面条件都很好，环境又有利于成长。但因此反而会使自己满足，停止前进，甚至变得颓废，趋向没落。一定要不断刻苦努力，保持谦虚美德，常怀不安之心，防止不测事件发生。
台湾张铭仁解卦
既济：表示水火阴阳调和，一时平安和乐之象。水火本相克，因一时环境或人事所影响，而暂时相安无事，但终非常久之象，必有所冲克而败。
解释：已经得到利益，不可贪得无厌。
特性：物质丰盛，但精神易空虚，外华内虚，交际广，知心少，心思细腻，多愁善感，喜宁静的生活。
运势：功名双收。极盛之时，但须知物极必反，宜退守为吉，再进则凶。但得此卦者，皆有因一时顺利而忘本，大意失荆州，终有人不和、心迷乱之象。
家运：生在富家之象，受祖上恩泽而不知珍惜者多，终而破运之兆。
疾病：短期虽有好转，但好景不常。
胎孕：不安。
子女：初时幸福，长大后与双亲不和，慎之。
周转：短期可成，长期无望。
买卖：中途变卦不利。故初时见好就收，莫贪心拖延，否则不利。
等人：已中途折回，不必再等。
寻人：若是常出走之人，小时自回，长大再出走，难寻。甚或不回。
失物：应可寻回。
外出：利于出行，途中需注意安全。
考试：实力有，但需视考期之日吉凶而定，小吉。
诉讼：有理说不清，仍须把握最有利时机争取主动，迟则反见凶。
求事：紧急可，不宜长久。
改行：不宜。
开业：开业者最好慎重考虑，因此卦象好景不常。`,yaoCi:[{ci:"初九。曳其轮，濡其尾，无咎。",xiang:"",explanation:`初九：提着腰带过河，打湿了衣尾。没有大问题。
《象辞》说：提着腰带过河，打湿了衣尾，理应无灾难。`,shaoYong:"平：得此爻者，时运未到，欲动未动，安保无虞。做官的有职未受，有位未登。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六二。妇丧其茀，勿逐，七日得。",xiang:"",explanation:`六二：妇人丢失了头巾，不用寻找，七日内可以不寻而得。
《象辞》说：七日内可以不寻而得，因为六二阴爻居阴位，位象既得，失物将还。`,shaoYong:"平：得此爻者，先难后易，做官的有先逆后顺之美。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九三。高宗伐鬼方，三年克之。小人勿用。",xiang:"",explanation:`九三：高宗讨伐鬼方，费时三年才打败它。筮遇此爻，不可重用小人。
《象辞》说：费时三年才打败它，因为鬼方这时已疲惫不堪。`,shaoYong:"凶：得此爻者，有结怨争诉之损。做官的多差遣征伐之举。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六四。繻有衣袽，终日戒。",xiang:"",explanation:`六四：撑着用败絮塞罅漏的船，整日里提心吊胆。
《象辞》说：整日里提心吊胆，说明心中疑虑重重。`,shaoYong:"平：得此爻者，时运平平，有备则无患。做官的须做好预防，则爵禄稳固。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九五。东邻杀牛，不如西郊之禴祭，实受其福。",xiang:"",explanation:`九五：殷人杀牛厚祭鬼神，不如周人簿祭鬼神，周人倒是得到鬼神的福佑。
《象辞》说：殷人杀牛厚祭鬼神，不如周人薄祭鬼神的用意美善，周人得到鬼神的福佑，将有重大的吉庆降临。`,shaoYong:"吉：得此爻者，近谋有实，远谋多虚，不利东方，利于西方。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上六。濡其首，厉。",xiang:"",explanation:`上六：涉水过河，水拍湿其头部，危险。
《象辞》说：水拍湿其头部，怎能呆很久的时间呢？`,shaoYong:"凶：得此爻者，小人侵扰，坐船者，防溺水之灾。做官的有过刚则折之忧。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]},{index:64,name:"未济",nameFull:"未济",originalText:"未济。亨，小狐汔济，濡其尾，无攸利。",xiangCi:"象曰：火在水上，未济。君子以慎辨物居方。",explanation:`未济卦：亨通。小狐狸快要渡过河，却打湿了尾巴。看来此行无所利。
《象辞》说：本卦上卦为离，离为火；下卦为坎，坎为水。火在水上，水不能克火，是未济卦的卦象。君子观此卦象，有感于水火错位不能相克，从而以谨慎的态度辨辩事物的性质，审视其方位。
《断易天机》解
未济卦离上坎下，为离宫三世卦。未济就是未完成，此卦爻位不正，形象上极端恶劣，但变化在酝酿之中，未来充满希望。`,shaoYong:`不能资助，待时而动；由小而大，不可躁进。
得此卦者，运势不通，诸事不能如愿，宜由小及大，稳步进取，要耐心去突破难关，则终可成功。
台湾国学大儒傅佩荣解
时运：运势颠倒，务必谨慎。
财运：诸事不顺，步步为营。
家宅：改变方向；门户不合。
身体：血脉不顺，用药谨慎。
传统解卦
这个卦是异卦（下坎上离）相叠。离为火，坎为水。火上水下，火势压倒水势，救火大功未成，故称未济。《周易》以乾坤二卦为始，以既济、未济二卦为终，充分反映了变化发展的思想。
大象：水性下注，火势向上，水火不交，阴阳不得正位，未能完成和未能成功之意。
运势：运气欠佳，但必须耐心突破难关，终可成功，有初凶后吉之象。
事业：处于最后的关键时刻，成功与否就在眼前，因此务必不可掉以轻心。自我节制非常重要，坚持到底，必要时也可能慎重地进行适度冒险，以成就事业。
经商：市场处于大变动的前夕，前景如何尚不明显。这是最为艰苦的时期，头脑必须冷静，切勿冒险，不可行动过度，适度节制，观察动向，决定行动。
求名：长期的努力和追求即会有结果。在成败的关键时刻应泰然自若，听天由命，顺其自然。
婚恋：已经渡过了困难阶段，再慎重地加把劲，会有美满的结果。
决策：此卦的意思是“未完成”，表明前途无量，有充分发展的可能。因此，必须坚持中正的原则，以明智、中庸、诚信、谦逊的态度，成就事业。面对人生，唯有勤勤恳恳，极力尽人事，听天命，不必过分计较成功与否。
台湾张铭仁解卦
未济：表示阴阳不调和，气血不顺。人事情绪不顺应是最大的影响主因，幸好此卦会有否极泰来之变化，一切均会雨过天晴，值的等待。
解释：快要获利。
特性：思想高远，又缺乏耐性，神经质，情绪不稳定，内心易有冲突感，孤独感，悲观，感性。宜往艺术哲学宗教发展。
运势：气运不通，诸事不能如愿，有初衰后盛之象。凡事要有耐心去突破难关，前途将大有可望。与人共谋事者，终有大利，可为之。
家运：初运不振，耐心熬过辛苦的路，可得幸福。
疾病：病情不稳定，注意心肾不交、失眠、血液等病。
胎孕：平安。
子女：子女迟得，但终有繁荣之象，将来都能振奋家声，以慰祖德。
周转：有不少困难，成败各半。
买卖：初限不佳，渐有好转之象。
等人：虽迟到，但有吉兆。
寻人：负气出走，会自己回来。
失物：不能寻回。
外出：积极行动，十分有利。
考试：不错，有好成绩。
诉讼：宜拖延时间，日久可得贵人之助，和解了事。
求事：枉费心机，无希望，再等候时机。
改行：可进行。
开业：勿因初时不佳而灰心，生意会转兴隆。`,yaoCi:[{ci:"初六。濡其尾，吝。",xiang:"",explanation:`初六：涉水渡河，沾湿了衣尾，前进有困难。
《象辞》说：涉水渡河，沾湿了衣尾，见微知巨，再冒险前进，是不知儆戒。`,shaoYong:"凶：得此爻者，经营不利，涉水行舟者，谨防溺水之患。做官的仕途有阻，不能前进。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九二。曳其轮，贞吉。",xiang:"",explanation:`九二：提着腰带涉水过河。卜问得吉兆。
《象辞》说：九二爻辞讲贞吉，因为九二阳爻处下卦中位，像人行事遵循正道。`,shaoYong:"吉：得此爻者，安份守纪者，谋望遂意。做官的克服困难者，晋升有望。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六三。未济，征凶，利涉大川。",xiang:"",explanation:`六三：渡不了河，出行有凶险。不利于涉水渡河。
《象辞》说：渡不了河，出行有凶险，因为六三阴爻居阳位，像人处境不利。`,shaoYong:"凶：得此爻者，宜见机行事，不宜妄动。做官的有因人成事之美。在商旅则涉川历险而利可获。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"九四。贞吉，悔亡，震用伐鬼方。三年有赏于大国。",xiang:"",explanation:`九四：吉利的贞卜，没有悔恨。大动干戈，助殷讨伐鬼方，费时三年，打败了它，获得殷国的奖赏。
《象辞》说：吉利的卜问，没有悔恨，说明志得意行。`,shaoYong:"吉：得此爻者，会得好人提举，获利丰厚。做官的会受到重用，名利双全。读书人会取得佳绩。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"六五。贞吉，无悔，君子之光。有孚，吉。",xiang:"",explanation:`六五：吉利的贞卜，没有悔恨。打了胜仗，捕获了俘虏，这是君子的光荣，吉利。
《象辞》说：君子光荣，君子光明正大，自然吉利。`,shaoYong:"吉：得此爻者，谋望有成，财利丰厚。做官的能得到升迁。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}},{ci:"上九。有孚于饮酒，无咎。濡其首，有孚失是。",xiang:"",explanation:`上九：捕获了俘虏，饮酒庆贺。没有灾难，但酗酒闹事，头发都淋湿了。俘虏乘机作乱，将他们杀了。
《象辞》说：酗酒闹事头发都淋湿，也太不知节制了。`,shaoYong:"平：得此爻者，行险而顺，不良者有溺水之厄，纵酒之灾。做官的有望升迁。",fuPeirong:{shiyun:"",caiyun:"",jiazhai:"",shenti:""}}]}],P2=[{id:0,name:"",symbol:"",element:Z.EARTH,nature:"",lines:[],description:""},{id:1,name:"乾",symbol:"☰",element:Z.METAL,nature:"天",lines:[1,1,1],description:"刚健，创始，君王，父亲"},{id:2,name:"兑",symbol:"☱",element:Z.METAL,nature:"泽",lines:[1,1,0],description:"喜悦，口舌，少女，缺损"},{id:3,name:"离",symbol:"☲",element:Z.FIRE,nature:"火",lines:[1,0,1],description:"光明，美丽，中女，依附"},{id:4,name:"震",symbol:"☳",element:Z.WOOD,nature:"雷",lines:[1,0,0],description:"震动，奋起，长男，急躁"},{id:5,name:"巽",symbol:"☴",element:Z.WOOD,nature:"风",lines:[0,1,1],description:"柔顺，进入，长女，不决"},{id:6,name:"坎",symbol:"☵",element:Z.WATER,nature:"水",lines:[0,1,0],description:"险陷，流动，中男，智慧"},{id:7,name:"艮",symbol:"☶",element:Z.EARTH,nature:"山",lines:[0,0,1],description:"静止，阻隔，少男，稳重"},{id:8,name:"坤",symbol:"☷",element:Z.EARTH,nature:"地",lines:[0,0,0],description:"柔顺，包容，母亲，厚德"}],u8=[{name:"子时 (23-01)",number:1,zodiac:"鼠"},{name:"丑时 (01-03)",number:2,zodiac:"牛"},{name:"寅时 (03-05)",number:3,zodiac:"虎"},{name:"卯时 (05-07)",number:4,zodiac:"兔"},{name:"辰时 (07-09)",number:5,zodiac:"龙"},{name:"巳时 (09-11)",number:6,zodiac:"蛇"},{name:"午时 (11-13)",number:7,zodiac:"马"},{name:"未时 (13-15)",number:8,zodiac:"羊"},{name:"申时 (15-17)",number:9,zodiac:"猴"},{name:"酉时 (17-19)",number:10,zodiac:"鸡"},{name:"戌时 (19-21)",number:11,zodiac:"狗"},{name:"亥时 (21-23)",number:12,zodiac:"猪"}],e8=[{name:"南方",guaId:3},{name:"北方",guaId:6},{name:"东方",guaId:4},{name:"西方",guaId:2},{name:"东南",guaId:5},{name:"西南",guaId:8},{name:"东北",guaId:7},{name:"西北",guaId:1}],xi={[Z.METAL]:"text-wuxing-jin",[Z.WOOD]:"text-wuxing-mu",[Z.WATER]:"text-wuxing-shui",[Z.FIRE]:"text-wuxing-huo",[Z.EARTH]:"text-wuxing-tu"};Z.METAL+"",Z.WOOD+"",Z.WATER+"",Z.FIRE+"",Z.EARTH+"";const k5={"1-1":"乾为天","1-2":"天泽履","1-3":"天火同人","1-4":"天雷无妄","1-5":"天风姤","1-6":"天水讼","1-7":"天山遁","1-8":"天地否","2-1":"泽天夬","2-2":"兑为泽","2-3":"泽火革","2-4":"泽雷随","2-5":"泽风大过","2-6":"泽水困","2-7":"泽山咸","2-8":"泽地萃","3-1":"火天大有","3-2":"火泽睽","3-3":"离为火","3-4":"火雷噬嗑","3-5":"火风鼎","3-6":"火水未济","3-7":"火山旅","3-8":"火地晋","4-1":"雷天大壮","4-2":"雷泽归妹","4-3":"雷火丰","4-4":"震为雷","4-5":"雷风恒","4-6":"雷水解","4-7":"雷山小过","4-8":"雷地豫","5-1":"风天小畜","5-2":"风泽中孚","5-3":"风火家人","5-4":"风雷益","5-5":"巽为风","5-6":"风水涣","5-7":"风山渐","5-8":"风地观","6-1":"水天需","6-2":"水泽节","6-3":"水火既济","6-4":"水雷屯","6-5":"水风井","6-6":"坎为水","6-7":"水山蹇","6-8":"水地比","7-1":"山天大畜","7-2":"山泽损","7-3":"山火贲","7-4":"山雷颐","7-5":"山风蛊","7-6":"山水蒙","7-7":"艮为山","7-8":"山地剥","8-1":"地天泰","8-2":"地泽临","8-3":"地火明夷","8-4":"地雷复","8-5":"地风升","8-6":"地水师","8-7":"地山谦","8-8":"坤为地",未济:"水火未济"};Z.WATER,Z.EARTH,Z.WOOD,Z.WOOD,Z.EARTH,Z.FIRE,Z.FIRE,Z.EARTH,Z.METAL,Z.METAL,Z.EARTH,Z.WATER;const P5=o=>{let t=h4.find(l=>l.name===o||l.nameFull===o);return t||(t=h4.find(l=>o.includes(l.name)||l.nameFull&&o.includes(l.nameFull))),t},g4=o=>{const t=P5(o);if(!t)return`此卦名为${o}，卦辞原文请参考《易经》原文。

象曰：${o}之象，君子观此象以明道。`;let l="";const h=t.shaoYong,g=h.indexOf("台湾国学大儒傅佩荣解");return g!==-1&&(l=h.substring(g)),`${t.originalText}
${t.xiangCi}

${t.explanation}

${l}`},i8=(o,t)=>{const l=P5(o),h=t-1;if(!l||!l.yaoCi[h])return`第${t}爻辞请参考《易经》原文。

象曰：爻变之象，观其动以察其变。`;const g=l.yaoCi[h];let f=`${g.ci}
${g.xiang}`;return g.explanation&&(f+=`

【白话文解释】
${g.explanation}`),g.shaoYong&&(f+=`

【北宋易学家邵雍解】
${g.shaoYong}`),f},c4=o=>{const t=P5(o);if(!t)return`${o}卦邵雍解：此卦象征天地变化之理，君子观此卦象，当顺应天时，修身养德。`;const l=t.shaoYong,h=l.indexOf("台湾国学大儒傅佩荣解");return h!==-1?l.substring(0,h).trim():l},r4=o=>{const t=o%8;return t===0?8:t},t8=o=>{const t=o%6;return t===0?6:t},a8=(o,t)=>{const l=o.element,h=t.element;let g="",f="",F="";const A=l===h,y=(S,_)=>S===Z.METAL&&_===Z.WATER||S===Z.WATER&&_===Z.WOOD||S===Z.WOOD&&_===Z.FIRE||S===Z.FIRE&&_===Z.EARTH||S===Z.EARTH&&_===Z.METAL,x=(S,_)=>S===Z.METAL&&_===Z.WOOD||S===Z.WOOD&&_===Z.EARTH||S===Z.EARTH&&_===Z.WATER||S===Z.WATER&&_===Z.FIRE||S===Z.FIRE&&_===Z.METAL;return A?(g="比和",f="大吉",F=`体卦${o.element}与用卦${t.element}五行相同，为比和之象，主凡事顺遂，多得贵人相助。`):y(h,l)?(g="用生体",f="大吉",F=`用卦${t.element}生体卦${o.element}，为进益之喜，主做事易成，不费力气。`):y(l,h)?(g="体生用",f="小凶",F=`体卦${o.element}生用卦${t.element}，为泄气之象，主操心劳神，虽成亦累。`):x(l,h)?(g="体克用",f="小吉",F=`体卦${o.element}克用卦${t.element}，为主导之象，虽有阻力但最终能成。`):x(h,l)&&(g="用克体",f="大凶",F=`用卦${t.element}克体卦${o.element}，为受制之象，主事多阻碍，甚至有损。`),{relation:g,verdict:f,description:F}},l8=(o,t,l,h,g)=>{const f=r4(o),F=r4(t),A=t8(l),y=P2[f],x=P2[F],S=k5[`${f}-${F}`]||"未知卦",_=[...x.lines,...y.lines],R=Q0=>P2.find(S0=>S0.id!==0&&S0.lines[0]===Q0[0]&&S0.lines[1]===Q0[1]&&S0.lines[2]===Q0[2])||P2[0],L=[_[1],_[2],_[3]],J=[_[2],_[3],_[4]],k=R(L),a0=R(J),W=k5[`${a0.id}-${k.id}`]||"未知卦",w0=A-1,c0=[..._];c0[w0]=c0[w0]===1?0:1;const G0=c0.slice(0,3),Y0=c0.slice(3,6),E0=R(G0),u0=R(Y0),C0=k5[`${u0.id}-${E0.id}`]||"未知卦";let d0,J0;A<=3?(d0=y,J0=x):(d0=x,J0=y);const k0=a8(d0,J0),M0=g||new Date;return{methodName:h,benGua:{upper:y,lower:x,name:S},huGua:{upper:a0,lower:k,name:W},bianGua:{upper:u0,lower:E0,name:C0},movingYao:A,analysis:{tiGua:d0,yongGua:J0,...k0},timestamp:M0.toLocaleString("zh-CN")}},xn=class{static isLeapYear(o){return o<1600?o%4===0:o%4===0&&o%100!==0||o%400===0}static getDaysOfMonth(o,t){if(o===1582&&t===10)return 21;const l=t-1;let h=xn.DAYS_OF_MONTH[l];return l===1&&xn.isLeapYear(o)&&h++,h}static getDaysOfYear(o){return o===1582?355:xn.isLeapYear(o)?366:365}static getDaysInYear(o,t,l){let h=0;for(let f=1;f<t;f++)h+=xn.getDaysOfMonth(o,f);let g=l;if(o===1582&&t===10&&l>=15){if(l>=15)g-=10;else if(l>4)throw new Error(`wrong solar year ${o} month ${t} day ${l}`)}return h+=g,h}static getWeeksOfMonth(o,t,l){return Math.ceil((xn.getDaysOfMonth(o,t)+y0.fromYmd(o,t,1).getWeek()-l)/7)}static getDaysBetween(o,t,l,h,g,f){if(o==h)return xn.getDaysInYear(h,g,f)-xn.getDaysInYear(o,t,l);if(o>h){let F=xn.getDaysOfYear(h)-xn.getDaysInYear(h,g,f);for(let A=h+1;A<o;A++)F+=xn.getDaysOfYear(A);return F+=xn.getDaysInYear(o,t,l),-F}else{let F=xn.getDaysOfYear(o)-xn.getDaysInYear(o,t,l);for(let A=o+1;A<h;A++)F+=xn.getDaysOfYear(A);return F+=xn.getDaysInYear(h,g,f),F}}};let T0=xn;T0.WEEK=["{w.sun}","{w.mon}","{w.tues}","{w.wed}","{w.thur}","{w.fri}","{w.sat}"];T0.DAYS_OF_MONTH=[31,28,31,30,31,30,31,31,30,31,30,31];T0.XINGZUO=["{xz.aries}","{xz.taurus}","{xz.gemini}","{xz.cancer}","{xz.leo}","{xz.virgo}","{xz.libra}","{xz.scorpio}","{xz.sagittarius}","{xz.capricornus}","{xz.aquarius}","{xz.pisces}"];T0.FESTIVAL={"1-1":"{jr.yuanDan}","2-14":"{jr.qingRen}","3-8":"{jr.fuNv}","3-12":"{jr.zhiShu}","3-15":"{jr.xiaoFei}","4-1":"{jr.yuRen}","5-1":"{jr.wuYi}","5-4":"{jr.qingNian}","6-1":"{jr.erTong}","7-1":"{jr.jianDang}","8-1":"{jr.jianJun}","9-10":"{jr.jiaoShi}","10-1":"{jr.guoQing}","10-31":"{jr.wanShengYe}","11-1":"{jr.wanSheng}","12-24":"{jr.pingAn}","12-25":"{jr.shengDan}"};T0.OTHER_FESTIVAL={"1-8":["周恩来逝世纪念日"],"1-10":["中国人民警察节"],"1-14":["日记情人节"],"1-21":["列宁逝世纪念日"],"1-26":["国际海关日"],"1-27":["国际大屠杀纪念日"],"2-2":["世界湿地日"],"2-4":["世界抗癌日"],"2-7":["京汉铁路罢工纪念日"],"2-10":["国际气象节"],"2-19":["邓小平逝世纪念日"],"2-20":["世界社会公正日"],"2-21":["国际母语日"],"2-24":["第三世界青年日"],"3-1":["国际海豹日"],"3-3":["世界野生动植物日","全国爱耳日"],"3-5":["周恩来诞辰纪念日","中国青年志愿者服务日"],"3-6":["世界青光眼日"],"3-7":["女生节"],"3-12":["孙中山逝世纪念日"],"3-14":["马克思逝世纪念日","白色情人节"],"3-17":["国际航海日"],"3-18":["全国科技人才活动日","全国爱肝日"],"3-20":["国际幸福日"],"3-21":["世界森林日","世界睡眠日","国际消除种族歧视日"],"3-22":["世界水日"],"3-23":["世界气象日"],"3-24":["世界防治结核病日"],"3-29":["中国黄花岗七十二烈士殉难纪念日"],"4-2":["国际儿童图书日","世界自闭症日"],"4-4":["国际地雷行动日"],"4-7":["世界卫生日"],"4-8":["国际珍稀动物保护日"],"4-12":["世界航天日"],"4-14":["黑色情人节"],"4-15":["全民国家安全教育日"],"4-22":["世界地球日","列宁诞辰纪念日"],"4-23":["世界读书日"],"4-24":["中国航天日"],"4-25":["儿童预防接种宣传日"],"4-26":["世界知识产权日","全国疟疾日"],"4-28":["世界安全生产与健康日"],"4-30":["全国交通安全反思日"],"5-2":["世界金枪鱼日"],"5-3":["世界新闻自由日"],"5-5":["马克思诞辰纪念日"],"5-8":["世界红十字日"],"5-11":["世界肥胖日"],"5-12":["全国防灾减灾日","护士节"],"5-14":["玫瑰情人节"],"5-15":["国际家庭日"],"5-19":["中国旅游日"],"5-20":["网络情人节"],"5-22":["国际生物多样性日"],"5-25":["525心理健康节"],"5-27":["上海解放日"],"5-29":["国际维和人员日"],"5-30":["中国五卅运动纪念日"],"5-31":["世界无烟日"],"6-3":["世界自行车日"],"6-5":["世界环境日"],"6-6":["全国爱眼日"],"6-8":["世界海洋日"],"6-11":["中国人口日"],"6-14":["世界献血日","亲亲情人节"],"6-17":["世界防治荒漠化与干旱日"],"6-20":["世界难民日"],"6-21":["国际瑜伽日"],"6-25":["全国土地日"],"6-26":["国际禁毒日","联合国宪章日"],"7-1":["香港回归纪念日"],"7-6":["国际接吻日","朱德逝世纪念日"],"7-7":["七七事变纪念日"],"7-11":["世界人口日","中国航海日"],"7-14":["银色情人节"],"7-18":["曼德拉国际日"],"7-30":["国际友谊日"],"8-3":["男人节"],"8-5":["恩格斯逝世纪念日"],"8-6":["国际电影节"],"8-8":["全民健身日"],"8-9":["国际土著人日"],"8-12":["国际青年节"],"8-14":["绿色情人节"],"8-19":["世界人道主义日","中国医师节"],"8-22":["邓小平诞辰纪念日"],"8-29":["全国测绘法宣传日"],"9-3":["中国抗日战争胜利纪念日"],"9-5":["中华慈善日"],"9-8":["世界扫盲日"],"9-9":["毛泽东逝世纪念日","全国拒绝酒驾日"],"9-14":["世界清洁地球日","相片情人节"],"9-15":["国际民主日"],"9-16":["国际臭氧层保护日"],"9-17":["世界骑行日"],"9-18":["九一八事变纪念日"],"9-20":["全国爱牙日"],"9-21":["国际和平日"],"9-27":["世界旅游日"],"9-30":["中国烈士纪念日"],"10-1":["国际老年人日"],"10-2":["国际非暴力日"],"10-4":["世界动物日"],"10-11":["国际女童日"],"10-10":["辛亥革命纪念日"],"10-13":["国际减轻自然灾害日","中国少年先锋队诞辰日"],"10-14":["葡萄酒情人节"],"10-16":["世界粮食日"],"10-17":["全国扶贫日"],"10-20":["世界统计日"],"10-24":["世界发展信息日","程序员节"],"10-25":["抗美援朝纪念日"],"11-5":["世界海啸日"],"11-8":["记者节"],"11-9":["全国消防日"],"11-11":["光棍节"],"11-12":["孙中山诞辰纪念日"],"11-14":["电影情人节"],"11-16":["国际宽容日"],"11-17":["国际大学生节"],"11-19":["世界厕所日"],"11-28":["恩格斯诞辰纪念日"],"11-29":["国际声援巴勒斯坦人民日"],"12-1":["世界艾滋病日"],"12-2":["全国交通安全日"],"12-3":["世界残疾人日"],"12-4":["全国法制宣传日"],"12-5":["世界弱能人士日","国际志愿人员日"],"12-7":["国际民航日"],"12-9":["世界足球日","国际反腐败日"],"12-10":["世界人权日"],"12-11":["国际山岳日"],"12-12":["西安事变纪念日"],"12-13":["国家公祭日"],"12-14":["拥抱情人节"],"12-18":["国际移徙者日"],"12-26":["毛泽东诞辰纪念日"]};T0.WEEK_FESTIVAL={"3-0-1":"全国中小学生安全教育日","5-2-0":"母亲节","5-3-0":"全国助残日","6-3-0":"父亲节","9-3-6":"全民国防教育日","10-1-1":"世界住房日","11-4-4":"感恩节"};class Hn{static fromYmd(t,l,h,g){return new Hn(t,l,h,g)}static fromDate(t,l){return Hn.fromYmd(t.getFullYear(),t.getMonth()+1,t.getDate(),l)}constructor(t,l,h,g){this._year=t,this._month=l,this._day=h,this._start=g}getYear(){return this._year}getMonth(){return this._month}getDay(){return this._day}getStart(){return this._start}getIndex(){let t=y0.fromYmd(this._year,this._month,1).getWeek()-this._start;return t<0&&(t+=7),Math.ceil((this._day+t)/7)}getIndexInYear(){let t=y0.fromYmd(this._year,1,1).getWeek()-this._start;return t<0&&(t+=7),Math.ceil((T0.getDaysInYear(this._year,this._month,this._day)+t)/7)}next(t,l){const h=this._start;if(t===0)return Hn.fromYmd(this._year,this._month,this._day,h);let g=y0.fromYmd(this._year,this._month,this._day);if(l){let f=t,F=Hn.fromYmd(this._year,this._month,this._day,h),A=this._month;const y=f>0;for(;f!==0;){g=g.next(y?7:-7),F=Hn.fromYmd(g.getYear(),g.getMonth(),g.getDay(),h);let x=F.getMonth();if(A!==x){const S=F.getIndex();if(y)if(S===1){const _=F.getFirstDay();F=Hn.fromYmd(_.getYear(),_.getMonth(),_.getDay(),h),x=F.getMonth()}else g=y0.fromYmd(F.getYear(),F.getMonth(),1),F=Hn.fromYmd(g.getYear(),g.getMonth(),g.getDay(),h);else if(T0.getWeeksOfMonth(F.getYear(),F.getMonth(),h)===S){const _=F.getFirstDay().next(6);F=Hn.fromYmd(_.getYear(),_.getMonth(),_.getDay(),h),x=F.getMonth()}else g=y0.fromYmd(F.getYear(),F.getMonth(),T0.getDaysOfMonth(F.getYear(),F.getMonth())),F=Hn.fromYmd(g.getYear(),g.getMonth(),g.getDay(),h);A=x}f-=y?1:-1}return F}else return g=g.next(t*7),Hn.fromYmd(g.getYear(),g.getMonth(),g.getDay(),h)}getFirstDay(){const t=y0.fromYmd(this._year,this._month,this._day);let l=t.getWeek()-this._start;return l<0&&(l+=7),t.next(-l)}getFirstDayInMonth(){let t=0;const l=this.getDays();for(let h=0;h<l.length;h++)if(this._month===l[h].getMonth()){t=h;break}return l[t]}getDays(){const t=this.getFirstDay(),l=[];l.push(t);for(let h=1;h<7;h++)l.push(t.next(h));return l}getDaysInMonth(){const t=this.getDays(),l=[];for(let h=0;h<t.length;h++){const g=t[h];this._month===g.getMonth()&&l.push(g)}return l}toString(){return`${this.getYear()}.${this.getMonth()}.${this.getIndex()}`}toFullString(){return`${this.getYear()}年${this.getMonth()}月第${this.getIndex()}周`}}const i0=class{static getTimeZhiIndex(o){if(!o)return 0;o.length>5&&(o=o.substring(0,5));let t=1;for(let l=1;l<22;l+=2){if(o>=(l<10?"0":"")+l+":00"&&o<=(l+1<10?"0":"")+(l+1)+":59")return t;t++}return 0}static convertTime(o){return i0.ZHI[i0.getTimeZhiIndex(o)+1]}static getJiaZiIndex(o){return i0.index(o,i0.JIA_ZI,0)}static hex(o){let t=o.toString(16);return t.length<2&&(t="0"+t),t.toUpperCase()}static getDayYi(o,t){const l=[],h=i0.hex(i0.getJiaZiIndex(t)),g=i0.hex(i0.getJiaZiIndex(o));let f=i0.DAY_YI_JI,F=f.indexOf(h+"=");for(;F>-1;){f=f.substring(F+3);let A=f;A.indexOf("=")>-1&&(A=A.substring(0,A.indexOf("=")-2));let y=!1;const x=A.substring(0,A.indexOf(":"));for(let S=0,_=x.length;S<_;S+=2)if(x.substring(S,S+2)==g){y=!0;break}if(y){let S=A.substring(A.indexOf(":")+1);S=S.substring(0,S.indexOf(","));for(let _=0,R=S.length;_<R;_+=2)l.push(i0.YI_JI[parseInt(S.substring(_,_+2),16)]);break}F=f.indexOf(h+"=")}return l.length<1&&l.push(i0.SHEN_SHA[0]),l}static getDayJi(o,t){const l=[],h=i0.hex(i0.getJiaZiIndex(t)),g=i0.hex(i0.getJiaZiIndex(o));let f=i0.DAY_YI_JI,F=f.indexOf(h+"=");for(;F>-1;){f=f.substring(F+3);let A=f;A.indexOf("=")>-1&&(A=A.substring(0,A.indexOf("=")-2));let y=!1;const x=A.substring(0,A.indexOf(":"));for(let S=0,_=x.length;S<_;S+=2)if(x.substring(S,S+2)==g){y=!0;break}if(y){const S=A.substring(A.indexOf(",")+1);for(let _=0,R=S.length;_<R;_+=2)l.push(i0.YI_JI[parseInt(S.substring(_,_+2),16)]);break}F=f.indexOf(h+"=")}return l.length<1&&l.push(i0.SHEN_SHA[0]),l}static getDayJiShen(o,t){const l=[];let h=o-2;h<0&&(h+=12);let g=i0.getJiaZiIndex(t).toString(16).toUpperCase();g.length<2&&(g="0"+g);const f=new RegExp(`;${g}(.[^;]*)`,"g").exec(i0.DAY_SHEN_SHA[h]);if(f){const F=f[1];for(let A=0,y=F.length;A<y;A+=2){const x=parseInt(F.substring(A,A+2),16);x<60&&l.push(i0.SHEN_SHA[x+1])}}return l.length<1&&l.push(i0.SHEN_SHA[0]),l}static getDayXiongSha(o,t){const l=[];let h=o-2;h<0&&(h+=12);let g=i0.getJiaZiIndex(t).toString(16).toUpperCase();g.length<2&&(g="0"+g);const f=new RegExp(`;${g}(.[^;]*)`,"g").exec(i0.DAY_SHEN_SHA[h]);if(f){const F=f[1];for(let A=0,y=F.length;A<y;A+=2){const x=parseInt(F.substring(A,A+2),16);x>=60&&l.push(i0.SHEN_SHA[x+1])}}return l.length<1&&l.push(i0.SHEN_SHA[0]),l}static getTimeYi(o,t){const l=[],h=i0.hex(i0.getJiaZiIndex(o)),g=i0.hex(i0.getJiaZiIndex(t)),f=i0.TIME_YI_JI.indexOf(h+g+"=");if(f>-1){let F=i0.TIME_YI_JI.substring(f+5);F.indexOf("=")>-1&&(F=F.substring(0,F.indexOf("=")-4));const A=F.substring(0,F.indexOf(","));for(let y=0,x=A.length;y<x;y+=2)l.push(i0.YI_JI[parseInt(A.substring(y,y+2),16)])}return l.length<1&&l.push(i0.SHEN_SHA[0]),l}static getTimeJi(o,t){const l=[],h=i0.hex(i0.getJiaZiIndex(o)),g=i0.hex(i0.getJiaZiIndex(t)),f=i0.TIME_YI_JI.indexOf(h+g+"=");if(f>-1){let F=i0.TIME_YI_JI.substring(f+5);F.indexOf("=")>-1&&(F=F.substring(0,F.indexOf("=")-4));const A=F.substring(F.indexOf(",")+1);for(let y=0,x=A.length;y<x;y+=2)l.push(i0.YI_JI[parseInt(A.substring(y,y+2),16)])}return l.length<1&&l.push(i0.SHEN_SHA[0]),l}static getXunIndex(o){const t=i0.find(o,i0.GAN),l=i0.find(o,i0.ZHI);let h=t.index-l.index;return h<0&&(h+=12),Math.floor(h/2)}static getXun(o){return i0.XUN[i0.getXunIndex(o)]}static getXunKong(o){return i0.XUN_KONG[i0.getXunIndex(o)]}static find(o,t){for(let l=0,h=t.length;l<h;l++){const g=t[l];if(!(g.length<1)&&o.indexOf(g)>-1)return{index:l,value:g}}return null}static index(o,t,l){for(let h=0,g=t.length;h<g;h++)if(t[h]===o)return h+l;return-1}};let r=i0;r.BASE_MONTH_ZHI_INDEX=2;r.XUN=["{jz.jiaZi}","{jz.jiaXu}","{jz.jiaShen}","{jz.jiaWu}","{jz.jiaChen}","{jz.jiaYin}"];r.XUN_KONG=["{dz.xu}{dz.hai}","{dz.shen}{dz.you}","{dz.wu}{dz.wei}","{dz.chen}{dz.si}","{dz.yin}{dz.mao}","{dz.zi}{dz.chou}"];r.CHANG_SHENG=["{ds.changSheng}","{ds.muYu}","{ds.guanDai}","{ds.linGuan}","{ds.diWang}","{ds.shuai}","{ds.bing}","{ds.si}","{ds.mu}","{ds.jue}","{ds.tai}","{ds.yang}"];r.MONTH_ZHI=["","{dz.yin}","{dz.mao}","{dz.chen}","{dz.si}","{dz.wu}","{dz.wei}","{dz.shen}","{dz.you}","{dz.xu}","{dz.hai}","{dz.zi}","{dz.chou}"];r.JIE_QI=["{jq.dongZhi}","{jq.xiaoHan}","{jq.daHan}","{jq.liChun}","{jq.yuShui}","{jq.jingZhe}","{jq.chunFen}","{jq.qingMing}","{jq.guYu}","{jq.liXia}","{jq.xiaoMan}","{jq.mangZhong}","{jq.xiaZhi}","{jq.xiaoShu}","{jq.daShu}","{jq.liQiu}","{jq.chuShu}","{jq.baiLu}","{jq.qiuFen}","{jq.hanLu}","{jq.shuangJiang}","{jq.liDong}","{jq.xiaoXue}","{jq.daXue}"];r.JIE_QI_IN_USE=["DA_XUE","{jq.dongZhi}","{jq.xiaoHan}","{jq.daHan}","{jq.liChun}","{jq.yuShui}","{jq.jingZhe}","{jq.chunFen}","{jq.qingMing}","{jq.guYu}","{jq.liXia}","{jq.xiaoMan}","{jq.mangZhong}","{jq.xiaZhi}","{jq.xiaoShu}","{jq.daShu}","{jq.liQiu}","{jq.chuShu}","{jq.baiLu}","{jq.qiuFen}","{jq.hanLu}","{jq.shuangJiang}","{jq.liDong}","{jq.xiaoXue}","{jq.daXue}","DONG_ZHI","XIAO_HAN","DA_HAN","LI_CHUN","YU_SHUI","JING_ZHE"];r.LIU_YAO=["{ly.xianSheng}","{ly.youYin}","{ly.xianFu}","{ly.foMie}","{ly.daAn}","{ly.chiKou}"];r.HOU=["{h.first}","{h.second}","{h.third}"];r.WU_HOU=["{h.qiuYinJie}","{h.miJiao}","{h.shuiQuan}","{h.yanBei}","{h.queShi}","{h.zhiShi}","{h.jiShi}","{h.zhengNiao}","{h.shuiZe}","{h.dongFeng}","{h.zheChongShiZhen}","{h.yuZhi}","{h.taJi}","{h.houYan}","{h.caoMuMengDong}","{h.taoShi}","{h.cangGeng}","{h.yingHua}","{h.xuanNiaoZhi}","{h.leiNai}","{h.shiDian}","{h.tongShi}","{h.tianShu}","{h.hongShi}","{h.pingShi}","{h.mingJiu}","{h.daiSheng}","{h.louGuo}","{h.qiuYinChu}","{h.wangGua}","{h.kuCai}","{h.miCao}","{h.maiQiu}","{h.tangLang}","{h.juShi}","{h.fanShe}","{h.luJia}","{h.tiaoShi}","{h.banXia}","{h.wenFeng}","{h.xiShuai}","{h.yingShi}","{h.fuCao}","{h.tuRun}","{h.daYu}","{h.liangFeng}","{h.baiLu}","{h.hanChan}","{h.yingNai}","{h.tianDi}","{h.heNai}","{h.hongYanLai}","{h.xuanNiaoGui}","{h.qunNiao}","{h.leiShi}","{h.zheChongPiHu}","{h.shuiShiHe}","{h.hongYanLaiBin}","{h.queRu}","{h.juYou}","{h.caiNai}","{h.caoMuHuangLuo}","{h.zheChongXianFu}","{h.shuiShiBing}","{h.diShi}","{h.zhiRu}","{h.hongCang}","{h.tianQi}","{h.biSe}","{h.heDan}","{h.huShi}","{h.liTing}"];r.GAN=["","{tg.jia}","{tg.yi}","{tg.bing}","{tg.ding}","{tg.wu}","{tg.ji}","{tg.geng}","{tg.xin}","{tg.ren}","{tg.gui}"];r.POSITION_XI=["","{bg.gen}","{bg.qian}","{bg.kun}","{bg.li}","{bg.xun}","{bg.gen}","{bg.qian}","{bg.kun}","{bg.li}","{bg.xun}"];r.POSITION_YANG_GUI=["","{bg.kun}","{bg.kun}","{bg.dui}","{bg.qian}","{bg.gen}","{bg.kan}","{bg.li}","{bg.gen}","{bg.zhen}","{bg.xun}"];r.POSITION_YIN_GUI=["","{bg.gen}","{bg.kan}","{bg.qian}","{bg.dui}","{bg.kun}","{bg.kun}","{bg.gen}","{bg.li}","{bg.xun}","{bg.zhen}"];r.POSITION_FU=["","{bg.xun}","{bg.xun}","{bg.zhen}","{bg.zhen}","{bg.kan}","{bg.li}","{bg.kun}","{bg.kun}","{bg.qian}","{bg.dui}"];r.POSITION_FU_2=["","{bg.kan}","{bg.kun}","{bg.qian}","{bg.xun}","{bg.gen}","{bg.kan}","{bg.kun}","{bg.qian}","{bg.xun}","{bg.gen}"];r.POSITION_CAI=["","{bg.gen}","{bg.gen}","{bg.kun}","{bg.kun}","{bg.kan}","{bg.kan}","{bg.zhen}","{bg.zhen}","{bg.li}","{bg.li}"];r.POSITION_TAI_SUI_YEAR=["{bg.kan}","{bg.gen}","{bg.gen}","{bg.zhen}","{bg.xun}","{bg.xun}","{bg.li}","{bg.kun}","{bg.kun}","{bg.dui}","{bg.kan}","{bg.kan}"];r.POSITION_GAN=["{bg.zhen}","{bg.zhen}","{bg.li}","{bg.li}","{ps.center}","{ps.center}","{bg.dui}","{bg.dui}","{bg.kan}","{bg.kan}"];r.POSITION_ZHI=["{bg.kan}","{ps.center}","{bg.zhen}","{bg.zhen}","{ps.center}","{bg.li}","{bg.li}","{ps.center}","{bg.dui}","{bg.dui}","{ps.center}","{bg.kan}"];r.POSITION_TAI_DAY=["{ts.zhan}{ts.men}{ts.dui} {ps.wai}{ps.dongNan}","{ts.dui}{ts.mo}{ts.ce} {ps.wai}{ps.dongNan}","{ts.chu}{ts.zao}{ts.lu} {ps.wai}{ps.zhengNan}","{ts.cangKu}{ts.men} {ps.wai}{ps.zhengNan}","{ts.fang}{ts.chuang}{ts.xi} {ps.wai}{ps.zhengNan}","{ts.zhan}{ts.men}{ts.chuang} {ps.wai}{ps.zhengNan}","{ts.zhan}{ts.dui}{ts.mo} {ps.wai}{ps.zhengNan}","{ts.chu}{ts.zao}{ts.ce} {ps.wai}{ps.xiNan}","{ts.cangKu}{ts.lu} {ps.wai}{ps.xiNan}","{ts.fang}{ts.chuang}{ts.men} {ps.wai}{ps.xiNan}","{ts.zhan}{ts.men}{ts.xi} {ps.wai}{ps.xiNan}","{ts.dui}{ts.mo}{ts.chuang} {ps.wai}{ps.xiNan}","{ts.chu}{ts.zao}{ts.dui} {ps.wai}{ps.xiNan}","{ts.cangKu}{ts.ce} {ps.wai}{ps.zhengXi}","{ts.fang}{ts.chuang}{ts.lu} {ps.wai}{ps.zhengXi}","{ts.zhan}{ts.daMen} {ps.wai}{ps.zhengXi}","{ts.dui}{ts.mo}{ts.xi} {ps.wai}{ps.zhengXi}","{ts.chu}{ts.zao}{ts.chuang} {ps.wai}{ps.zhengXi}","{ts.cangKu}{ts.dui} {ps.wai}{ps.xiBei}","{ts.fang}{ts.chuang}{ts.ce} {ps.wai}{ps.xiBei}","{ts.zhan}{ts.men}{ts.lu} {ps.wai}{ps.xiBei}","{ts.dui}{ts.mo}{ts.men} {ps.wai}{ps.xiBei}","{ts.chu}{ts.zao}{ts.xi} {ps.wai}{ps.xiBei}","{ts.cangKu}{ts.chuang} {ps.wai}{ps.xiBei}","{ts.fang}{ts.chuang}{ts.dui} {ps.wai}{ps.zhengBei}","{ts.zhan}{ts.men}{ts.ce} {ps.wai}{ps.zhengBei}","{ts.dui}{ts.mo}{ts.lu} {ps.wai}{ps.zhengBei}","{ts.chu}{ts.zao}{ts.men} {ps.wai}{ps.zhengBei}","{ts.cangKu}{ts.xi} {ps.wai}{ps.zhengBei}","{ts.zhan}{ts.fang}{ts.chuang} {ps.fangNei}{ps.bei}","{ts.zhan}{ts.men}{ts.dui} {ps.fangNei}{ps.bei}","{ts.dui}{ts.mo}{ts.ce} {ps.fangNei}{ps.bei}","{ts.chu}{ts.zao}{ts.lu} {ps.fangNei}{ps.bei}","{ts.cangKu}{ts.men} {ps.fangNei}{ps.bei}","{ts.fang}{ts.chuang}{ts.xi} {ps.fangNei}{ps.center}","{ts.zhan}{ts.men}{ts.chuang} {ps.fangNei}{ps.center}","{ts.zhan}{ts.dui}{ts.mo} {ps.fangNei}{ps.nan}","{ts.chu}{ts.zao}{ts.ce} {ps.fangNei}{ps.nan}","{ts.cangKu}{ts.lu} {ps.fangNei}{ps.nan}","{ts.fang}{ts.chuang}{ts.men} {ps.fangNei}{ps.xi}","{ts.zhan}{ts.men}{ts.xi} {ps.fangNei}{ps.dong}","{ts.dui}{ts.mo}{ts.chuang} {ps.fangNei}{ps.dong}","{ts.chu}{ts.zao}{ts.dui} {ps.fangNei}{ps.dong}","{ts.cangKu}{ts.ce} {ps.fangNei}{ps.dong}","{ts.fang}{ts.chuang}{ts.lu} {ps.fangNei}{ps.center}","{ts.zhan}{ts.daMen} {ps.wai}{ps.dongBei}","{ts.dui}{ts.mo}{ts.xi} {ps.wai}{ps.dongBei}","{ts.chu}{ts.zao}{ts.chuang} {ps.wai}{ps.dongBei}","{ts.cangKu}{ts.dui} {ps.wai}{ps.dongBei}","{ts.fang}{ts.chuang}{ts.ce} {ps.wai}{ps.dongBei}","{ts.zhan}{ts.men}{ts.lu} {ps.wai}{ps.dongBei}","{ts.dui}{ts.mo}{ts.men} {ps.wai}{ps.zhengDong}","{ts.chu}{ts.zao}{ts.xi} {ps.wai}{ps.zhengDong}","{ts.cangKu}{ts.chuang} {ps.wai}{ps.zhengDong}","{ts.fang}{ts.chuang}{ts.dui} {ps.wai}{ps.zhengDong}","{ts.zhan}{ts.men}{ts.ce} {ps.wai}{ps.zhengDong}","{ts.dui}{ts.mo}{ts.lu} {ps.wai}{ps.dongNan}","{ts.chu}{ts.zao}{ts.men} {ps.wai}{ps.dongNan}","{ts.cangKu}{ts.xi} {ps.wai}{ps.dongNan}","{ts.zhan}{ts.fang}{ts.chuang} {ps.wai}{ps.dongNan}"];r.POSITION_TAI_MONTH=["{ts.zhan}{ts.fang}{ts.chuang}","{ts.zhan}{ts.hu}{ts.win}","{ts.zhan}{ts.men}{ts.tang}","{ts.zhan}{ts.chu}{ts.zao}","{ts.zhan}{ts.fang}{ts.chuang}","{ts.zhan}{ts.chuang}{ts.cang}","{ts.zhan}{ts.dui}{ts.mo}","{ts.zhan}{ts.ce}{ts.hu}","{ts.zhan}{ts.men}{ts.fang}","{ts.zhan}{ts.fang}{ts.chuang}","{ts.zhan}{ts.zao}{ts.lu}","{ts.zhan}{ts.fang}{ts.chuang}"];r.ZHI=["","{dz.zi}","{dz.chou}","{dz.yin}","{dz.mao}","{dz.chen}","{dz.si}","{dz.wu}","{dz.wei}","{dz.shen}","{dz.you}","{dz.xu}","{dz.hai}"];r.ZHI_XING=["","{zx.jian}","{zx.chu}","{zx.man}","{zx.ping}","{zx.ding}","{zx.zhi}","{zx.po}","{zx.wei}","{zx.cheng}","{zx.shou}","{zx.kai}","{zx.bi}"];r.JIA_ZI=["{jz.jiaZi}","{jz.yiChou}","{jz.bingYin}","{jz.dingMao}","{jz.wuChen}","{jz.jiSi}","{jz.gengWu}","{jz.xinWei}","{jz.renShen}","{jz.guiYou}","{jz.jiaXu}","{jz.yiHai}","{jz.bingZi}","{jz.dingChou}","{jz.wuYin}","{jz.jiMao}","{jz.gengChen}","{jz.xinSi}","{jz.renWu}","{jz.guiWei}","{jz.jiaShen}","{jz.yiYou}","{jz.bingXu}","{jz.dingHai}","{jz.wuZi}","{jz.jiChou}","{jz.gengYin}","{jz.xinMao}","{jz.renChen}","{jz.guiSi}","{jz.jiaWu}","{jz.yiWei}","{jz.bingShen}","{jz.dingYou}","{jz.wuXu}","{jz.jiHai}","{jz.gengZi}","{jz.xinChou}","{jz.renYin}","{jz.guiMao}","{jz.jiaChen}","{jz.yiSi}","{jz.bingWu}","{jz.dingWei}","{jz.wuShen}","{jz.jiYou}","{jz.gengXu}","{jz.xinHai}","{jz.renZi}","{jz.guiChou}","{jz.jiaYin}","{jz.yiMao}","{jz.bingChen}","{jz.dingSi}","{jz.wuWu}","{jz.jiWei}","{jz.gengShen}","{jz.xinYou}","{jz.renXu}","{jz.guiHai}"];r.CHANG_SHENG_OFFSET={"{tg.jia}":1,"{tg.bing}":10,"{tg.wu}":10,"{tg.geng}":7,"{tg.ren}":4,"{tg.yi}":6,"{tg.ding}":9,"{tg.ji}":9,"{tg.xin}":0,"{tg.gui}":3};r.TIAN_SHEN=["","{sn.qingLong}","{sn.mingTang}","{sn.tianXing}","{sn.zhuQue}","{sn.jinKui}","{sn.tianDe}","{sn.baiHu}","{sn.yuTang}","{sn.tianLao}","{sn.xuanWu}","{sn.siMing}","{sn.gouChen}"];r.ZHI_TIAN_SHEN_OFFSET={"{dz.zi}":4,"{dz.chou}":2,"{dz.yin}":0,"{dz.mao}":10,"{dz.chen}":8,"{dz.si}":6,"{dz.wu}":4,"{dz.wei}":2,"{dz.shen}":0,"{dz.you}":10,"{dz.xu}":8,"{dz.hai}":6};r.TIAN_SHEN_TYPE={"{sn.qingLong}":"{s.huangDao}","{sn.mingTang}":"{s.huangDao}","{sn.jinKui}":"{s.huangDao}","{sn.tianDe}":"{s.huangDao}","{sn.yuTang}":"{s.huangDao}","{sn.siMing}":"{s.huangDao}","{sn.tianXing}":"{s.heiDao}","{sn.zhuQue}":"{s.heiDao}","{sn.baiHu}":"{s.heiDao}","{sn.tianLao}":"{s.heiDao}","{sn.xuanWu}":"{s.heiDao}","{sn.gouChen}":"{s.heiDao}"};r.TIAN_SHEN_TYPE_LUCK={"{s.huangDao}":"{s.goodLuck}","{s.heiDao}":"{s.badLuck}"};r.LU={"{tg.jia}":"{dz.yin}","{tg.yi}":"{dz.mao}","{tg.bing}":"{dz.si}","{tg.ding}":"{dz.wu}","{tg.wu}":"{dz.si}","{tg.ji}":"{dz.wu}","{tg.geng}":"{dz.shen}","{tg.xin}":"{dz.you}","{tg.ren}":"{dz.hai}","{tg.gui}":"{dz.zi}","{dz.yin}":"{tg.jia}","{dz.mao}":"{tg.yi}","{dz.si}":"{tg.bing},{tg.wu}","{dz.wu}":"{tg.ding},{tg.ji}","{dz.shen}":"{tg.geng}","{dz.you}":"{tg.xin}","{dz.hai}":"{tg.ren}","{dz.zi}":"{tg.gui}"};r.PENGZU_GAN=["","{tg.jia}不开仓财物耗散","{tg.yi}不栽植千株不长","{tg.bing}不修灶必见灾殃","{tg.ding}不剃头头必生疮","{tg.wu}不受田田主不祥","{tg.ji}不破券二比并亡","{tg.geng}不经络织机虚张","{tg.xin}不合酱主人不尝","{tg.ren}不泱水更难提防","{tg.gui}不词讼理弱敌强"];r.PENGZU_ZHI=["","{dz.zi}不问卜自惹祸殃","{dz.chou}不冠带主不还乡","{dz.yin}不祭祀神鬼不尝","{dz.mao}不穿井水泉不香","{dz.chen}不哭泣必主重丧","{dz.si}不远行财物伏藏","{dz.wu}不苫盖屋主更张","{dz.wei}不服药毒气入肠","{dz.shen}不安床鬼祟入房","{dz.you}不会客醉坐颠狂","{dz.xu}不吃犬作怪上床","{dz.hai}不嫁娶不利新郎"];r.NUMBER=["{n.zero}","{n.one}","{n.two}","{n.three}","{n.four}","{n.five}","{n.six}","{n.seven}","{n.eight}","{n.nine}","{n.ten}","{n.eleven}","{n.twelve}"];r.MONTH=["","{m.one}","{m.two}","{m.three}","{m.four}","{m.five}","{m.six}","{m.seven}","{m.eight}","{m.nine}","{m.ten}","{m.eleven}","{m.twelve}"];r.SEASON=["","{od.first}{sz.chun}","{od.second}{sz.chun}","{od.third}{sz.chun}","{od.first}{sz.xia}","{od.second}{sz.xia}","{od.third}{sz.xia}","{od.first}{sz.qiu}","{od.second}{sz.qiu}","{od.third}{sz.qiu}","{od.first}{sz.dong}","{od.second}{sz.dong}","{od.third}{sz.dong}"];r.SHENGXIAO=["","{sx.rat}","{sx.ox}","{sx.tiger}","{sx.rabbit}","{sx.dragon}","{sx.snake}","{sx.horse}","{sx.goat}","{sx.monkey}","{sx.rooster}","{sx.dog}","{sx.pig}"];r.DAY=["","{d.one}","{d.two}","{d.three}","{d.four}","{d.five}","{d.six}","{d.seven}","{d.eight}","{d.nine}","{d.ten}","{d.eleven}","{d.twelve}","{d.thirteen}","{d.fourteen}","{d.fifteen}","{d.sixteen}","{d.seventeen}","{d.eighteen}","{d.nighteen}","{d.twenty}","{d.twentyOne}","{d.twentyTwo}","{d.twentyThree}","{d.twentyFour}","{d.twentyFive}","{d.twentySix}","{d.twentySeven}","{d.twentyEight}","{d.twentyNine}","{d.thirty}"];r.YUE_XIANG=["","{yx.shuo}","{yx.jiShuo}","{yx.eMeiXin}","{yx.eMeiXin}","{yx.eMei}","{yx.xi}","{yx.shangXian}","{yx.shangXian}","{yx.jiuYe}","{yx.night}","{yx.night}","{yx.night}","{yx.jianYingTu}","{yx.xiaoWang}","{yx.wang}","{yx.jiWang}","{yx.liDai}","{yx.juDai}","{yx.qinDai}","{yx.gengDai}","{yx.jianKuiTu}","{yx.xiaXian}","{yx.xiaXian}","{yx.youMing}","{yx.youMing}","{yx.eMeiCan}","{yx.eMeiCan}","{yx.can}","{yx.xiao}","{yx.hui}"];r.XIU={"{dz.shen}1":"{xx.bi}","{dz.shen}2":"{xx.yi}","{dz.shen}3":"{xx.ji}","{dz.shen}4":"{xx.kui}","{dz.shen}5":"{xx.gui}","{dz.shen}6":"{xx.di}","{dz.shen}0":"{xx.xu}","{dz.zi}1":"{xx.bi}","{dz.zi}2":"{xx.yi}","{dz.zi}3":"{xx.ji}","{dz.zi}4":"{xx.kui}","{dz.zi}5":"{xx.gui}","{dz.zi}6":"{xx.di}","{dz.zi}0":"{xx.xu}","{dz.chen}1":"{xx.bi}","{dz.chen}2":"{xx.yi}","{dz.chen}3":"{xx.ji}","{dz.chen}4":"{xx.kui}","{dz.chen}5":"{xx.gui}","{dz.chen}6":"{xx.di}","{dz.chen}0":"{xx.xu}","{dz.si}1":"{xx.wei}","{dz.si}2":"{xx.zi}","{dz.si}3":"{xx.zhen}","{dz.si}4":"{xx.dou}","{dz.si}5":"{xx.lou}","{dz.si}6":"{xx.liu}","{dz.si}0":"{xx.fang}","{dz.you}1":"{xx.wei}","{dz.you}2":"{xx.zi}","{dz.you}3":"{xx.zhen}","{dz.you}4":"{xx.dou}","{dz.you}5":"{xx.lou}","{dz.you}6":"{xx.liu}","{dz.you}0":"{xx.fang}","{dz.chou}1":"{xx.wei}","{dz.chou}2":"{xx.zi}","{dz.chou}3":"{xx.zhen}","{dz.chou}4":"{xx.dou}","{dz.chou}5":"{xx.lou}","{dz.chou}6":"{xx.liu}","{dz.chou}0":"{xx.fang}","{dz.yin}1":"{xx.xin}","{dz.yin}2":"{xx.shi}","{dz.yin}3":"{xx.can}","{dz.yin}4":"{xx.jiao}","{dz.yin}5":"{xx.niu}","{dz.yin}6":"{xx.vei}","{dz.yin}0":"{xx.xing}","{dz.wu}1":"{xx.xin}","{dz.wu}2":"{xx.shi}","{dz.wu}3":"{xx.can}","{dz.wu}4":"{xx.jiao}","{dz.wu}5":"{xx.niu}","{dz.wu}6":"{xx.vei}","{dz.wu}0":"{xx.xing}","{dz.xu}1":"{xx.xin}","{dz.xu}2":"{xx.shi}","{dz.xu}3":"{xx.can}","{dz.xu}4":"{xx.jiao}","{dz.xu}5":"{xx.niu}","{dz.xu}6":"{xx.vei}","{dz.xu}0":"{xx.xing}","{dz.hai}1":"{xx.zhang}","{dz.hai}2":"{xx.tail}","{dz.hai}3":"{xx.qiang}","{dz.hai}4":"{xx.jing}","{dz.hai}5":"{xx.kang}","{dz.hai}6":"{xx.nv}","{dz.hai}0":"{xx.mao}","{dz.mao}1":"{xx.zhang}","{dz.mao}2":"{xx.tail}","{dz.mao}3":"{xx.qiang}","{dz.mao}4":"{xx.jing}","{dz.mao}5":"{xx.kang}","{dz.mao}6":"{xx.nv}","{dz.mao}0":"{xx.mao}","{dz.wei}1":"{xx.zhang}","{dz.wei}2":"{xx.tail}","{dz.wei}3":"{xx.qiang}","{dz.wei}4":"{xx.jing}","{dz.wei}5":"{xx.kang}","{dz.wei}6":"{xx.nv}","{dz.wei}0":"{xx.mao}"};r.XIU_LUCK={"{xx.jiao}":"{s.goodLuck}","{xx.kang}":"{s.badLuck}","{xx.di}":"{s.badLuck}","{xx.fang}":"{s.goodLuck}","{xx.xin}":"{s.badLuck}","{xx.tail}":"{s.goodLuck}","{xx.ji}":"{s.goodLuck}","{xx.dou}":"{s.goodLuck}","{xx.niu}":"{s.badLuck}","{xx.nv}":"{s.badLuck}","{xx.xu}":"{s.badLuck}","{xx.wei}":"{s.badLuck}","{xx.shi}":"{s.goodLuck}","{xx.qiang}":"{s.goodLuck}","{xx.kui}":"{s.badLuck}","{xx.lou}":"{s.goodLuck}","{xx.vei}":"{s.goodLuck}","{xx.mao}":"{s.badLuck}","{xx.bi}":"{s.goodLuck}","{xx.zi}":"{s.badLuck}","{xx.can}":"{s.goodLuck}","{xx.jing}":"{s.goodLuck}","{xx.gui}":"{s.badLuck}","{xx.liu}":"{s.badLuck}","{xx.xing}":"{s.badLuck}","{xx.zhang}":"{s.goodLuck}","{xx.yi}":"{s.badLuck}","{xx.zhen}":"{s.goodLuck}"};r.XIU_SONG={"{xx.jiao}":"角星造作主荣昌，外进田财及女郎，嫁娶婚姻出贵子，文人及第见君王，惟有埋葬不可用，三年之后主瘟疫，起工修筑坟基地，堂前立见主人凶。","{xx.kang}":"亢星造作长房当，十日之中主有殃，田地消磨官失职，接运定是虎狼伤，嫁娶婚姻用此日，儿孙新妇守空房，埋葬若还用此日，当时害祸主重伤。","{xx.di}":"氐星造作主灾凶，费尽田园仓库空，埋葬不可用此日，悬绳吊颈祸重重，若是婚姻离别散，夜招浪子入房中，行船必定遭沉没，更生聋哑子孙穷。","{xx.fang}":"房星造作田园进，钱财牛马遍山岗，更招外处田庄宅，荣华富贵福禄康，埋葬若然用此日，高官进职拜君王，嫁娶嫦娥至月殿，三年抱子至朝堂。","{xx.xin}":"心星造作大为凶，更遭刑讼狱囚中，忤逆官非宅产退，埋葬卒暴死相从，婚姻若是用此日，子死儿亡泪满胸，三年之内连遭祸，事事教君没始终。","{xx.tail}":"尾星造作主天恩，富贵荣华福禄增，招财进宝兴家宅，和合婚姻贵子孙，埋葬若能依此日，男清女正子孙兴，开门放水招田宅，代代公侯远播名。","{xx.ji}":"箕星造作主高强，岁岁年年大吉昌，埋葬修坟大吉利，田蚕牛马遍山岗，开门放水招田宅，箧满金银谷满仓，福荫高官加禄位，六亲丰禄乐安康。","{xx.dou}":"斗星造作主招财，文武官员位鼎台，田宅家财千万进，坟堂修筑贵富来，开门放水招牛马，旺蚕男女主和谐，遇此吉宿来照护，时支福庆永无灾。","{xx.niu}":"牛星造作主灾危，九横三灾不可推，家宅不安人口退，田蚕不利主人衰，嫁娶婚姻皆自损，金银财谷渐无之，若是开门并放水，牛猪羊马亦伤悲。","{xx.nv}":"女星造作损婆娘，兄弟相嫌似虎狼，埋葬生灾逢鬼怪，颠邪疾病主瘟惶，为事遭官财失散，泻利留连不可当，开门放水用此日，全家财散主离乡。","{xx.xu}":"虚星造作主灾殃，男女孤眠不一双，内乱风声无礼节，儿孙媳妇伴人床，开门放水遭灾祸，虎咬蛇伤又卒亡，三三五五连年病，家破人亡不可当。","{xx.wei}":"危星不可造高楼，自遭刑吊见血光，三年孩子遭水厄，后生出外永不还，埋葬若还逢此日，周年百日取高堂，三年两载一悲伤，开门放水到官堂。","{xx.shi}":"室星修造进田牛，儿孙代代近王侯，家贵荣华天上至，寿如彭祖八千秋，开门放水招财帛，和合婚姻生贵儿，埋葬若能依此日，门庭兴旺福无休。","{xx.qiang}":"壁星造作主增财，丝蚕大熟福滔天，奴婢自来人口进，开门放水出英贤，埋葬招财官品进，家中诸事乐陶然，婚姻吉利主贵子，早播名誉著祖鞭。","{xx.kui}":"奎星造作得祯祥，家内荣和大吉昌，若是埋葬阴卒死，当年定主两三伤，看看军令刑伤到，重重官事主瘟惶，开门放水遭灾祸，三年两次损儿郎。","{xx.lou}":"娄星修造起门庭，财旺家和事事兴，外进钱财百日进，一家兄弟播高名，婚姻进益生贵子，玉帛金银箱满盈，放水开门皆吉利，男荣女贵寿康宁。","{xx.vei}":"胃星造作事如何，家贵荣华喜气多，埋葬贵临官禄位，夫妇齐眉永保康，婚姻遇此家富贵，三灾九祸不逢他，从此门前多吉庆，儿孙代代拜金阶。","{xx.mao}":"昴星造作进田牛，埋葬官灾不得休，重丧二日三人死，尽卖田园不记增，开门放水招灾祸，三岁孩儿白了头，婚姻不可逢此日，死别生离是可愁。","{xx.bi}":"毕星造作主光前，买得田园有余钱，埋葬此日添官职，田蚕大熟永丰年，开门放水多吉庆，合家人口得安然，婚姻若得逢此日，生得孩儿福寿全。","{xx.zi}":"觜星造作有徒刑，三年必定主伶丁，埋葬卒死多因此，取定寅年使杀人，三丧不止皆由此，一人药毒二人身，家门田地皆退败，仓库金银化作尘。","{xx.can}":"参星造作旺人家，文星照耀大光华，只因造作田财旺，埋葬招疾哭黄沙，开门放水加官职，房房子孙见田加，婚姻许遁遭刑克，男女朝开幕落花。","{xx.jing}":"井星造作旺蚕田，金榜题名第一光，埋葬须防惊卒死，狂颠风疾入黄泉，开门放水招财帛，牛马猪羊旺莫言，贵人田塘来入宅，儿孙兴旺有余钱。","{xx.gui}":"鬼星起造卒人亡，堂前不见主人郎，埋葬此日官禄至，儿孙代代近君王，开门放水须伤死，嫁娶夫妻不久长，修土筑墙伤产女，手扶双女泪汪汪。","{xx.liu}":"柳星造作主遭官，昼夜偷闭不暂安，埋葬瘟惶多疾病，田园退尽守冬寒，开门放水遭聋瞎，腰驼背曲似弓弯，更有棒刑宜谨慎，妇人随客走盘桓。","{xx.xing}":"星宿日好造新房，进职加官近帝王，不可埋葬并放水，凶星临位女人亡，生离死别无心恋，要自归休别嫁郎，孔子九曲殊难度，放水开门天命伤。","{xx.zhang}":"张星日好造龙轩，年年并见进庄田，埋葬不久升官职，代代为官近帝前，开门放水招财帛，婚姻和合福绵绵，田蚕人满仓库满，百般顺意自安然。","{xx.yi}":"翼星不利架高堂，三年二载见瘟惶，埋葬若还逢此日，子孙必定走他乡，婚姻此日不宜利，归家定是不相当，开门放水家须破，少女恋花贪外郎。","{xx.zhen}":"轸星临水造龙宫，代代为官受皇封，富贵荣华增寿禄，库满仓盈自昌隆，埋葬文昌来照助，宅舍安宁不见凶，更有为官沾帝宠，婚姻龙子入龙宫。"};r.ZHENG={"{xx.jiao}":"{wx.mu}","{xx.jing}":"{wx.mu}","{xx.kui}":"{wx.mu}","{xx.dou}":"{wx.mu}","{xx.kang}":"{wx.jin}","{xx.gui}":"{wx.jin}","{xx.lou}":"{wx.jin}","{xx.niu}":"{wx.jin}","{xx.di}":"{wx.tu}","{xx.liu}":"{wx.tu}","{xx.vei}":"{wx.tu}","{xx.nv}":"{wx.tu}","{xx.fang}":"{wx.ri}","{xx.xing}":"{wx.ri}","{xx.mao}":"{wx.ri}","{xx.xu}":"{wx.ri}","{xx.xin}":"{wx.yue}","{xx.zhang}":"{wx.yue}","{xx.bi}":"{wx.yue}","{xx.wei}":"{wx.yue}","{xx.tail}":"{wx.huo}","{xx.yi}":"{wx.huo}","{xx.zi}":"{wx.huo}","{xx.shi}":"{wx.huo}","{xx.ji}":"{wx.shui}","{xx.zhen}":"{wx.shui}","{xx.can}":"{wx.shui}","{xx.qiang}":"{wx.shui}"};r.ANIMAL={"{xx.jiao}":"{dw.jiao}","{xx.dou}":"{dw.xie}","{xx.kui}":"{dw.lang}","{xx.jing}":"{dw.han}","{xx.kang}":"{dw.long}","{xx.niu}":"{dw.niu}","{xx.lou}":"{dw.gou}","{xx.gui}":"{dw.yang}","{xx.nv}":"{dw.fu}","{xx.di}":"{dw.he}","{xx.vei}":"{dw.zhi}","{xx.liu}":"{dw.zhang}","{xx.fang}":"{dw.tu}","{xx.xu}":"{dw.shu}","{xx.mao}":"{dw.ji}","{xx.xing}":"{dw.ma}","{xx.xin}":"{dw.huLi}","{xx.wei}":"{dw.yan}","{xx.bi}":"{dw.wu}","{xx.zhang}":"{dw.lu}","{xx.tail}":"{dw.hu}","{xx.shi}":"{dw.zhu}","{xx.zi}":"{dw.hou}","{xx.yi}":"{dw.she}","{xx.ji}":"{dw.bao}","{xx.qiang}":"{dw.xu}","{xx.can}":"{dw.yuan}","{xx.zhen}":"{dw.yin}"};r.GONG={"{xx.jiao}":"{ps.dong}","{xx.jing}":"{ps.nan}","{xx.kui}":"{ps.xi}","{xx.dou}":"{ps.bei}","{xx.kang}":"{ps.dong}","{xx.gui}":"{ps.nan}","{xx.lou}":"{ps.xi}","{xx.niu}":"{ps.bei}","{xx.di}":"{ps.dong}","{xx.liu}":"{ps.nan}","{xx.vei}":"{ps.xi}","{xx.nv}":"{ps.bei}","{xx.fang}":"{ps.dong}","{xx.xing}":"{ps.nan}","{xx.mao}":"{ps.xi}","{xx.xu}":"{ps.bei}","{xx.xin}":"{ps.dong}","{xx.zhang}":"{ps.nan}","{xx.bi}":"{ps.xi}","{xx.wei}":"{ps.bei}","{xx.tail}":"{ps.dong}","{xx.yi}":"{ps.nan}","{xx.zi}":"{ps.xi}","{xx.shi}":"{ps.bei}","{xx.ji}":"{ps.dong}","{xx.zhen}":"{ps.nan}","{xx.can}":"{ps.xi}","{xx.qiang}":"{ps.bei}"};r.SHOU={"{ps.dong}":"{sn.qingLong}","{ps.nan}":"{sn.zhuQue}","{ps.xi}":"{sn.baiHu}","{ps.bei}":"{sn.xuanWu}"};r.FESTIVAL={"1-1":"{jr.chunJie}","1-15":"{jr.yuanXiao}","2-2":"{jr.longTou}","5-5":"{jr.duanWu}","7-7":"{jr.qiXi}","8-15":"{jr.zhongQiu}","9-9":"{jr.chongYang}","12-8":"{jr.laBa}"};r.OTHER_FESTIVAL={"1-4":["接神日"],"1-5":["隔开日"],"1-7":["人日"],"1-8":["谷日","顺星节"],"1-9":["天日"],"1-10":["地日"],"1-20":["天穿节"],"1-25":["填仓节"],"1-30":["正月晦"],"2-1":["中和节"],"2-2":["社日节"],"3-3":["上巳节"],"5-20":["分龙节"],"5-25":["会龙节"],"6-6":["天贶节"],"6-24":["观莲节"],"6-25":["五谷母节"],"7-15":["中元节"],"7-22":["财神节"],"7-29":["地藏节"],"8-1":["天灸日"],"10-1":["寒衣节"],"10-10":["十成节"],"10-15":["下元节"],"12-7":["驱傩日"],"12-16":["尾牙"],"12-24":["祭灶日"]};r.CHONG=["{dz.wu}","{dz.wei}","{dz.shen}","{dz.you}","{dz.xu}","{dz.hai}","{dz.zi}","{dz.chou}","{dz.yin}","{dz.mao}","{dz.chen}","{dz.si}"];r.CHONG_GAN=["{tg.wu}","{tg.ji}","{tg.geng}","{tg.xin}","{tg.ren}","{tg.gui}","{tg.jia}","{tg.yi}","{tg.bing}","{tg.ding}"];r.CHONG_GAN_TIE=["{tg.ji}","{tg.wu}","{tg.xin}","{tg.geng}","{tg.gui}","{tg.ren}","{tg.yi}","{tg.jia}","{tg.ding}","{tg.bing}"];r.CHONG_GAN_4=["{tg.geng}","{tg.xin}","{tg.ren}","{tg.gui}","","","{tg.jia}","{tg.yi}","{tg.bing}","{tg.ding}"];r.HE_GAN_5=["{tg.ji}","{tg.geng}","{tg.xin}","{tg.ren}","{tg.gui}","{tg.jia}","{tg.yi}","{tg.bing}","{tg.ding}","{tg.wu}"];r.HE_ZHI_6=["{dz.chou}","{dz.zi}","{dz.hai}","{dz.xu}","{dz.you}","{dz.shen}","{dz.wei}","{dz.wu}","{dz.si}","{dz.chen}","{dz.mao}","{dz.yin}"];r.SHA={"{dz.zi}":"{ps.nan}","{dz.chou}":"{ps.dong}","{dz.yin}":"{ps.bei}","{dz.mao}":"{ps.xi}","{dz.chen}":"{ps.nan}","{dz.si}":"{ps.dong}","{dz.wu}":"{ps.bei}","{dz.wei}":"{ps.xi}","{dz.shen}":"{ps.nan}","{dz.you}":"{ps.dong}","{dz.xu}":"{ps.bei}","{dz.hai}":"{ps.xi}"};r.POSITION_DESC={"{bg.kan}":"{ps.zhengBei}","{bg.gen}":"{ps.dongBei}","{bg.zhen}":"{ps.zhengDong}","{bg.xun}":"{ps.dongNan}","{bg.li}":"{ps.zhengNan}","{bg.kun}":"{ps.xiNan}","{bg.dui}":"{ps.zhengXi}","{bg.qian}":"{ps.xiBei}","{ps.center}":"{ps.zhong}"};r.NAYIN={"{jz.jiaZi}":"{ny.haiZhong}{wx.jin}","{jz.jiaWu}":"{ny.shaZhong}{wx.jin}","{jz.bingYin}":"{ny.luZhong}{wx.huo}","{jz.bingShen}":"{ny.shanXia}{wx.huo}","{jz.wuChen}":"{ny.daLin}{wx.mu}","{jz.wuXu}":"{ny.pingDi}{wx.mu}","{jz.gengWu}":"{ny.luPang}{wx.tu}","{jz.gengZi}":"{ny.biShang}{wx.tu}","{jz.renShen}":"{ny.jianFeng}{wx.jin}","{jz.renYin}":"{ny.jinBo}{wx.jin}","{jz.jiaXu}":"{ny.shanTou}{wx.huo}","{jz.jiaChen}":"{ny.fuDeng}{wx.huo}","{jz.bingZi}":"{ny.jianXia}{wx.shui}","{jz.bingWu}":"{ny.tianHe}{wx.shui}","{jz.wuYin}":"{ny.chengTou}{wx.tu}","{jz.wuShen}":"{ny.daYi}{wx.tu}","{jz.gengChen}":"{ny.baiLa}{wx.jin}","{jz.gengXu}":"{ny.chaiChuan}{wx.jin}","{jz.renWu}":"{ny.yangLiu}{wx.mu}","{jz.renZi}":"{ny.sangZhe}{wx.mu}","{jz.jiaShen}":"{ny.quanZhong}{wx.shui}","{jz.jiaYin}":"{ny.daXi}{wx.shui}","{jz.bingXu}":"{ny.wuShang}{wx.tu}","{jz.bingChen}":"{ny.shaZhong}{wx.tu}","{jz.wuZi}":"{ny.piLi}{wx.huo}","{jz.wuWu}":"{ny.tianShang}{wx.huo}","{jz.gengYin}":"{ny.songBo}{wx.mu}","{jz.gengShen}":"{ny.shiLiu}{wx.mu}","{jz.renChen}":"{ny.changLiu}{wx.shui}","{jz.renXu}":"{ny.daHai}{wx.shui}","{jz.yiChou}":"{ny.haiZhong}{wx.jin}","{jz.yiWei}":"{ny.shaZhong}{wx.jin}","{jz.dingMao}":"{ny.luZhong}{wx.huo}","{jz.dingYou}":"{ny.shanXia}{wx.huo}","{jz.jiSi}":"{ny.daLin}{wx.mu}","{jz.jiHai}":"{ny.pingDi}{wx.mu}","{jz.xinWei}":"{ny.luPang}{wx.tu}","{jz.xinChou}":"{ny.biShang}{wx.tu}","{jz.guiYou}":"{ny.jianFeng}{wx.jin}","{jz.guiMao}":"{ny.jinBo}{wx.jin}","{jz.yiHai}":"{ny.shanTou}{wx.huo}","{jz.yiSi}":"{ny.fuDeng}{wx.huo}","{jz.dingChou}":"{ny.jianXia}{wx.shui}","{jz.dingWei}":"{ny.tianHe}{wx.shui}","{jz.jiMao}":"{ny.chengTou}{wx.tu}","{jz.jiYou}":"{ny.daYi}{wx.tu}","{jz.xinSi}":"{ny.baiLa}{wx.jin}","{jz.xinHai}":"{ny.chaiChuan}{wx.jin}","{jz.guiWei}":"{ny.yangLiu}{wx.mu}","{jz.guiChou}":"{ny.sangZhe}{wx.mu}","{jz.yiYou}":"{ny.quanZhong}{wx.shui}","{jz.yiMao}":"{ny.daXi}{wx.shui}","{jz.dingHai}":"{ny.wuShang}{wx.tu}","{jz.dingSi}":"{ny.shaZhong}{wx.tu}","{jz.jiChou}":"{ny.piLi}{wx.huo}","{jz.jiWei}":"{ny.tianShang}{wx.huo}","{jz.xinMao}":"{ny.songBo}{wx.mu}","{jz.xinYou}":"{ny.shiLiu}{wx.mu}","{jz.guiSi}":"{ny.changLiu}{wx.shui}","{jz.guiHai}":"{ny.daHai}{wx.shui}"};r.WU_XING_GAN={"{tg.jia}":"{wx.mu}","{tg.yi}":"{wx.mu}","{tg.bing}":"{wx.huo}","{tg.ding}":"{wx.huo}","{tg.wu}":"{wx.tu}","{tg.ji}":"{wx.tu}","{tg.geng}":"{wx.jin}","{tg.xin}":"{wx.jin}","{tg.ren}":"{wx.shui}","{tg.gui}":"{wx.shui}"};r.WU_XING_ZHI={"{dz.yin}":"{wx.mu}","{dz.mao}":"{wx.mu}","{dz.si}":"{wx.huo}","{dz.wu}":"{wx.huo}","{dz.chen}":"{wx.tu}","{dz.chou}":"{wx.tu}","{dz.xu}":"{wx.tu}","{dz.wei}":"{wx.tu}","{dz.shen}":"{wx.jin}","{dz.you}":"{wx.jin}","{dz.hai}":"{wx.shui}","{dz.zi}":"{wx.shui}"};r.SHI_SHEN={"{tg.jia}{tg.jia}":"{ss.biJian}","{tg.jia}{tg.yi}":"{ss.jieCai}","{tg.jia}{tg.bing}":"{ss.shiShen}","{tg.jia}{tg.ding}":"{ss.shangGuan}","{tg.jia}{tg.wu}":"{ss.pianCai}","{tg.jia}{tg.ji}":"{ss.zhengCai}","{tg.jia}{tg.geng}":"{ss.qiSha}","{tg.jia}{tg.xin}":"{ss.zhengGuan}","{tg.jia}{tg.ren}":"{ss.pianYin}","{tg.jia}{tg.gui}":"{ss.zhengYin}","{tg.yi}{tg.yi}":"{ss.biJian}","{tg.yi}{tg.jia}":"{ss.jieCai}","{tg.yi}{tg.ding}":"{ss.shiShen}","{tg.yi}{tg.bing}":"{ss.shangGuan}","{tg.yi}{tg.ji}":"{ss.pianCai}","{tg.yi}{tg.wu}":"{ss.zhengCai}","{tg.yi}{tg.xin}":"{ss.qiSha}","{tg.yi}{tg.geng}":"{ss.zhengGuan}","{tg.yi}{tg.gui}":"{ss.pianYin}","{tg.yi}{tg.ren}":"{ss.zhengYin}","{tg.bing}{tg.bing}":"{ss.biJian}","{tg.bing}{tg.ding}":"{ss.jieCai}","{tg.bing}{tg.wu}":"{ss.shiShen}","{tg.bing}{tg.ji}":"{ss.shangGuan}","{tg.bing}{tg.geng}":"{ss.pianCai}","{tg.bing}{tg.xin}":"{ss.zhengCai}","{tg.bing}{tg.ren}":"{ss.qiSha}","{tg.bing}{tg.gui}":"{ss.zhengGuan}","{tg.bing}{tg.jia}":"{ss.pianYin}","{tg.bing}{tg.yi}":"{ss.zhengYin}","{tg.ding}{tg.ding}":"{ss.biJian}","{tg.ding}{tg.bing}":"{ss.jieCai}","{tg.ding}{tg.ji}":"{ss.shiShen}","{tg.ding}{tg.wu}":"{ss.shangGuan}","{tg.ding}{tg.xin}":"{ss.pianCai}","{tg.ding}{tg.geng}":"{ss.zhengCai}","{tg.ding}{tg.gui}":"{ss.qiSha}","{tg.ding}{tg.ren}":"{ss.zhengGuan}","{tg.ding}{tg.yi}":"{ss.pianYin}","{tg.ding}{tg.jia}":"{ss.zhengYin}","{tg.wu}{tg.wu}":"{ss.biJian}","{tg.wu}{tg.ji}":"{ss.jieCai}","{tg.wu}{tg.geng}":"{ss.shiShen}","{tg.wu}{tg.xin}":"{ss.shangGuan}","{tg.wu}{tg.ren}":"{ss.pianCai}","{tg.wu}{tg.gui}":"{ss.zhengCai}","{tg.wu}{tg.jia}":"{ss.qiSha}","{tg.wu}{tg.yi}":"{ss.zhengGuan}","{tg.wu}{tg.bing}":"{ss.pianYin}","{tg.wu}{tg.ding}":"{ss.zhengYin}","{tg.ji}{tg.ji}":"{ss.biJian}","{tg.ji}{tg.wu}":"{ss.jieCai}","{tg.ji}{tg.xin}":"{ss.shiShen}","{tg.ji}{tg.geng}":"{ss.shangGuan}","{tg.ji}{tg.gui}":"{ss.pianCai}","{tg.ji}{tg.ren}":"{ss.zhengCai}","{tg.ji}{tg.yi}":"{ss.qiSha}","{tg.ji}{tg.jia}":"{ss.zhengGuan}","{tg.ji}{tg.ding}":"{ss.pianYin}","{tg.ji}{tg.bing}":"{ss.zhengYin}","{tg.geng}{tg.geng}":"{ss.biJian}","{tg.geng}{tg.xin}":"{ss.jieCai}","{tg.geng}{tg.ren}":"{ss.shiShen}","{tg.geng}{tg.gui}":"{ss.shangGuan}","{tg.geng}{tg.jia}":"{ss.pianCai}","{tg.geng}{tg.yi}":"{ss.zhengCai}","{tg.geng}{tg.bing}":"{ss.qiSha}","{tg.geng}{tg.ding}":"{ss.zhengGuan}","{tg.geng}{tg.wu}":"{ss.pianYin}","{tg.geng}{tg.ji}":"{ss.zhengYin}","{tg.xin}{tg.xin}":"{ss.biJian}","{tg.xin}{tg.geng}":"{ss.jieCai}","{tg.xin}{tg.gui}":"{ss.shiShen}","{tg.xin}{tg.ren}":"{ss.shangGuan}","{tg.xin}{tg.yi}":"{ss.pianCai}","{tg.xin}{tg.jia}":"{ss.zhengCai}","{tg.xin}{tg.ding}":"{ss.qiSha}","{tg.xin}{tg.bing}":"{ss.zhengGuan}","{tg.xin}{tg.ji}":"{ss.pianYin}","{tg.xin}{tg.wu}":"{ss.zhengYin}","{tg.ren}{tg.ren}":"{ss.biJian}","{tg.ren}{tg.gui}":"{ss.jieCai}","{tg.ren}{tg.jia}":"{ss.shiShen}","{tg.ren}{tg.yi}":"{ss.shangGuan}","{tg.ren}{tg.bing}":"{ss.pianCai}","{tg.ren}{tg.ding}":"{ss.zhengCai}","{tg.ren}{tg.wu}":"{ss.qiSha}","{tg.ren}{tg.ji}":"{ss.zhengGuan}","{tg.ren}{tg.geng}":"{ss.pianYin}","{tg.ren}{tg.xin}":"{ss.zhengYin}","{tg.gui}{tg.gui}":"{ss.biJian}","{tg.gui}{tg.ren}":"{ss.jieCai}","{tg.gui}{tg.yi}":"{ss.shiShen}","{tg.gui}{tg.jia}":"{ss.shangGuan}","{tg.gui}{tg.ding}":"{ss.pianCai}","{tg.gui}{tg.bing}":"{ss.zhengCai}","{tg.gui}{tg.ji}":"{ss.qiSha}","{tg.gui}{tg.wu}":"{ss.zhengGuan}","{tg.gui}{tg.xin}":"{ss.pianYin}","{tg.gui}{tg.geng}":"{ss.zhengYin}"};r.ZHI_HIDE_GAN={"{dz.zi}":["{tg.gui}"],"{dz.chou}":["{tg.ji}","{tg.gui}","{tg.xin}"],"{dz.yin}":["{tg.jia}","{tg.bing}","{tg.wu}"],"{dz.mao}":["{tg.yi}"],"{dz.chen}":["{tg.wu}","{tg.yi}","{tg.gui}"],"{dz.si}":["{tg.bing}","{tg.geng}","{tg.wu}"],"{dz.wu}":["{tg.ding}","{tg.ji}"],"{dz.wei}":["{tg.ji}","{tg.ding}","{tg.yi}"],"{dz.shen}":["{tg.geng}","{tg.ren}","{tg.wu}"],"{dz.you}":["{tg.xin}"],"{dz.xu}":["{tg.wu}","{tg.xin}","{tg.ding}"],"{dz.hai}":["{tg.ren}","{tg.jia}"]};r.YI_JI=["{yj.jiSi}","{yj.qiFu}","{yj.qiuSi}","{yj.kaiGuang}","{yj.suHui}","{yj.qiJiao}","{yj.zhaiJiao}","{yj.muYu}","{yj.chouShen}","{yj.zaoMiao}","{yj.siZhao}","{yj.fenXiang}","{yj.xieTu}","{yj.chuHuo}","{yj.diaoKe}","{yj.jiaQu}","{yj.DingHun}","{yj.naCai}","{yj.wenMing}","{yj.naXu}","{yj.guiNing}","{yj.anChuang}","{yj.heZhang}","{yj.guanJi}","{yj.dingMeng}","{yj.jinRenKou}","{yj.caiYi}","{yj.wanMian}","{yj.kaiRong}","{yj.xiuFen}","{yj.qiZuan}","{yj.poTu}","{yj.anZang}","{yj.liBei}","{yj.chengFu}","{yj.chuFu}","{yj.kaiShengFen}","{yj.heShouMu}","{yj.ruLian}","{yj.yiJiu}","{yj.puDu}","{yj.ruZhai}","{yj.anXiang}","{yj.anMen}","{yj.xiuZao}","{yj.qiJi}","{yj.dongTu}","{yj.shangLiang}","{yj.shuZhu}","{yj.kaiJing}","{yj.zuoBei}","{yj.chaiXie}","{yj.poWu}","{yj.huaiYuan}","{yj.buYuan}","{yj.faMuZuoLiang}","{yj.zuoZhao}","{yj.jieChu}","{yj.kaiZhuYan}","{yj.chuanPing}","{yj.gaiWuHeJi}","{yj.kaiCe}","{yj.zaoCang}","{yj.saiXue}","{yj.pingZhi}","{yj.zaoQiao}","{yj.zuoCe}","{yj.zhuDi}","{yj.kaiChi}","{yj.faMu}","{yj.kaiQu}","{yj.jueJing}","{yj.saoShe}","{yj.fangShui}","{yj.zaoWu}","{yj.heJi}","{yj.zaoChuChou}","{yj.xiuMen}","{yj.dingSang}","{yj.zuoLiang}","{yj.xiuShi}","{yj.jiaMa}","{yj.kaiShi}","{yj.guaBian}","{yj.naChai}","{yj.qiuCai}","{yj.kaiCang}","{yj.maiChe}","{yj.zhiChan}","{yj.guYong}","{yj.chuHuoCai}","{yj.anJiXie}","{yj.zaoCheQi}","{yj.jingLuo}","{yj.yunNiang}","{yj.zuoRan}","{yj.guZhu}","{yj.zaoChuan}","{yj.geMi}","{yj.zaiZhong}","{yj.quYu}","{yj.jieWang}","{yj.muYang}","{yj.anDuiWei}","{yj.xiYi}","{yj.ruXue}","{yj.liFa}","{yj.tanBing}","{yj.jianGui}","{yj.chengChuan}","{yj.duShui}","{yj.zhenJiu}","{yj.chuXing}","{yj.yiXi}","{yj.fenJu}","{yj.TiTou}","{yj.zhengShou}","{yj.naChu}","{yj.buZhuo}","{yj.tianLie}","{yj.jiaoNiuMa}","{yj.huiQinYou}","{yj.fuRen}","{yj.qiuYi}","{yj.zhiBing}","{yj.ciSong}","{yj.qiJiDongTu}","{yj.poWuHuaiYuan}","{yj.gaiWu}","{yj.zaoCangKu}","{yj.liQuanJiaoYi}","{yj.jiaoYi}","{yj.liQuan}","{yj.anJi}","{yj.huiYou}","{yj.qiuYiLiaoBing}","{yj.zhuShi}","{yj.yuShi}","{yj.xingSang}","{yj.duanYi}","{yj.guiXiu}","{s.none}"];r.DAY_YI_JI="30=192531010D:838454151A4C200C1E23221D212726,030F522E1F00=2430000C18:8319000776262322200C1E1D,06292C2E1F04=32020E1A26:7917155B0001025D,0F522E38201D=162E3A0A22:790F181113332C2E2D302F1554,7001203810=0E1A263202:79026A17657603,522E201F05=0D19250131:7911192C2E302F00030401060F1571292A75,707C20522F=0C18243000:4F2C2E2B383F443D433663,0F01478A20151D=0E1A320226:3840,0001202B892F=14202C3808:3807504089,8829=0E1A263202:383940,6370018A75202B454F6605=32020E1A26:38394089,0001202B22=16223A0A2E:384C,8A2020=2B3707131F:2C2E5B000739337C38802D44484C2425201F1E272621,5229701535=121E2A3606:2C2E2D2B156343364C,0F4729710D708A20036A1904=0D19250131:5040262789,0F7129033B=202C380814:5040000738,0F7D7C584F012063452B35=1A2632020E:50400089,8813=1A2632020E:69687011180F791966762627201E,0352292E8034=182430000C:291503000D332E53261F2075,0F5238584F450B=000C182430:297170192C2E2D2F2B3E363F4C,0F521563200103470B=131F2B3707:297115030102195283840D332C2E,0F1F5863201D8A02=222E3A0A16:261F1E20232289,52290058363F32=16222E3A0A:261F201E232289,8D39=0D19310125:262322271E201D21,52450F4F09=0D19253101:262322271E202189,1F4526=16222E3A0A:262322271F1E20,712906=0F1B273303:17262322274050,80387C6B2C=0915212D39:1707702C2E71291F20,0F52000106111D15=16222E3A0A:170007386A7448363F261F1E,030F79636F2026=030F1B2733:1784832C2E5B26201F,0F010D2913=182430000C:175447440D15838477656A49,2B2E1F8A202228=101C283404:70504C7889,8803=0D19250131:700F181126151E20001A7919,8D2F=0915212D39:705283845B0D2F71,0F202E4106=3606121E2A:70786289,06802E1F23=1824000C30:70076A363F,292017=202C380814:700718111A302F717566,0F2B2E2026=3B0B17232F:70545283842E71291A7933192A5D5A5040,090C384F45208A1D6B38=212D390915:7039170F45513A2C2E7129242526271F201D,00010352153A=15212D3909:703911170E2C2E2D2F4B15712952633D,092B8A2027=010D192531:702D155483840F63262720,53292F017D4F38442B2E1F4717=16222E3A0A:705C4C39171A4F0E7971295B5248,0F2E1F1D37=1A2632020E:2E260F27201F,523815292F1A22=0E1A260232:64262322271F2021,0F2F293822=2F3B0B1723:161A0F1526271F4C,586103473818=2430000C18:161A7889,292E1F0F386131=17232F3B0B:04795B3F651A5D,0F5201062016=14202C3808:04170F79195D1A637566363F76,01522E8A2039=132B37071F:0470170F191A134C8384662426232227201E,8D08=0D19253101:040370181123220F1326271E2021,29153B=0D19310125:040307177938494C,0F26207017=0E2632021A:0403010218111A17332C2E2D2B15713E6575,45382064291D=142C380820:04033918110F0D2C2E7129332D2B72528384547566,8D1C=1830000C24:040318111A17332C15290D200C7A,4745063835=0F2733031B:040318111A16175B795452848315302F6563395D,387029202E=14202C3808:04031975363F6366,0F5401202C5283842E2F1E=0E1A320226:0403080618111A16332E2F152A09537919702C5445490D75072B,8063203820=182430000C:04067033392C7161262322271E1D210C,8D2F=101C283404:3F4889,881C=2733030F1B:3F74397677658988,0F3847201D=293505111D:3F8B657789,0F2029702E7D35=111D293505:3F8B6589,1F200A=020E1A2632:3F656477,0F2B71292005=111D290535:3F6589,8810=0F1B273303:3F88,2B38200F1C=293505111D:0F83843D363F776424,15462F2C520329712A=0F1B273303:0F17795B54838458,52807C3811=121E2A3606:0F172C2E387129363F7566512D4E4461,01034752203A=172F3B0B23:0F171511793F76584C,0347200C1D20=2D39091521:0F175B3975660745514F2B4825201E211D,010352292E2E=0F1B273303:0F170070792C2E261F,040341232228=05111D2935:0F1700707129385C363F3D1F1E232226,80412B202F14=14202C3808:0F17000728705448757A,522E1F15562F05=30000C1824:0F17000102061979454F3A15477677,241F8A2021=2F3B0B1723:0F17000102060370392E52838453331F,452F2C266A79292B203810=0C18243000:0F170001020E032A70692C2E302F802D2B0D7129474C201F2322,5211183809615D34=1A2632020E:0F171170792F5B1566770001032C2B802D,29387C207134=14202C3808:0F0D33000103452E528384297115752620,63386F7014=15212D3909:0F7045332C2E71201F1D21,4701155229530327=101C283404:0F70161715232238838426271F20,7D035219=121E2A3606:0F705B0004037C5D15653F1F26,522B473809=131F2B0737:0F705215261E20,012E1F25=182430000C:0F707B7C00012F75,52201B=2531010D19:0F706A151E201D528384544466,47010C2E292F2C3820=14202C3808:0F707500261E20,382E1F05=3606121E2A:0F161A17452F0D33712C2E2B5443633F,150170208A0327=0E1A263202:0F150370002E0D3979528384532971331F1E20,477D0D=06121E2A36:0F5B8370000102060403161A494447,386A418A201A=17232F3B0B:0F03700D332C2E2971152F52838463,01004547380C26=101C283404:0F03700D33195284835329711563,01260038206B0E=131F2B3707:0F03706A4F0D332C528384532E29711563,4500750F=131F2B3707:0F0370010239332E2C19528384532971156375262720,8D18=17232F3B0B:0F0370390D332C192E2971637547202322,581528=0E1A263202:0F0302791566046F,29710D722A38528384202E4530=0E1A263202:0F030102392E15634447001F1E,293845200D707538=1E2A360612:0F0300017039712952542D2C302F80380D2A363F3349483E616320,1118150C1F2E20=33030F1B27:0F03000102700D29713963451F0C20,528338542F15806128=121E2A3606:0F030001027039452971150D332C2F6327,2052838403=2C38081420:0F030001022A0D3945297115528384637020,476A382E1F4426=010D192531:0F03390D332C1929711563261D2E2322,382000521118750C706B15=131F2B3707:0F033915666A52261E272048,382E2F6329712C0114=0D19253101:0F52838403700D332C29712E1F27201E2322,1545017505=131F2B3707:0F528400012E7129,092026=3707131F2B:0F528471295B795D2B155333565A446375661F201E272621,00016B0C4113=14202C3808:0F280001363F8B4326232220,2E1F47032F7D35=16222E3A0A:0F0211195465756679,2F384570202B6A10=15212D3909:0F0102700D332C2E2F0319528384531529716345261F2322,8D32=101C283404:0F0102037039330D5284832971152E1F0C,0026206B37=16222E3A0A:0F003854,20521D2106=020E1A2632:0F00175058,5D6B80382E16=1B2733030F:0F00701784831952712C2E1526271F,033806201F=2B3707131F:0F00701A17830E544C5C78,7129632E1F38208A452F16=15212D3909:0F00040370396A742E15444948,458A384F2021=16222E3A0A:0F005B261F20,2E2F1D=2531010D19:0F0003450D3329712C2E2F1575,528A63705A20587D7C12=17232F3B0B:0F00030D70332C2E3952838453542971156375,6B2019=1B2733030F:0F000301020D297115332E1F0C,165220262E=121E2A3606:0F00030102700D332E2C192971155383846375261F1E20,8D1F=33030F1B27:0F00030102700D19297115332C2B535448,2E45208A00=2632020E1A:0F00030102705283842E544779,2920454F754C3836=16222E3A0A:0F0052037029710D332C15,7545584F8A201D2121=121E2A3606:0F00074850,8A2036=0D25310119:0F00071A706A717677492923221E202726,80522E1F39=1E2A360612:0F006A385040740717,1F70631E=212D390915:0F006A1938271779,565A4575522F801F1E632B=121E2A3606:0F00010D0302703352838453297115632E,208A454F2B=0E1A263202:0F000170390D332E2971152F63751F1E20,52846A381F=14202C3808:0F000106387129,2E1F24=14202C3808:0F0001062E7129,522010=0814202C38:0F0001062871292E7C528384032C5C2A15767765,11185D8A206B08=131F2B0737:0F0001067C1F20,522900=202C380814:0F0001020D700339332C192A83842971152E1F0C20262322,065256386110=111D293505:0F000102700D332C2E297115383F631F20,0347562B=14202C3808:0F000102700D332C712E15261F201E,80036A61473831=0C18243000:0F000102700D335283845329711563,38048A7D45202A=14202C3808:0F000102702E15471F1E,294F2B452C2F268011=0D19253101:0F0001022E792D3E75663D19,472063703852292B39=222E3A0A16:0F0001022E154826271F1E203874362322,036312=0D19253101:0F000102032971152C2E19,4720637038522B15=111D293505:0F000102030D70332E3919528384532971152B2F201F0C,8D1B=232F3B0B17:0F000102030D7033528384534529711520,63475814=131F2B3707:0F000102030D332C2E195283845329716375261E2322,8D19=15212D3909:0F00010203700D332C2E1929711552838453637526202322,8D09=111D293505:0F00010203700D332E2F192971152B52838453631F20,8D33=1A2632020E:0F00010203700D332E2F1929711552838453261F201E2322,8D03=2E3A0A1622:0F0001020370332C2E2F1575261F,2971476A458352380C=111D293505:0F0001020370332E2F0D19297115637566302B2C3979,8D08=000C182430:0F000102037039297175261F1D21,454F2E1563410F=17232F3B0B:0F0001020370390D3319297115632E2C752620212322,8D07=3606121E2A:0F0001020370390D332C1929712E157563548384534C,20248A38=16222E3A0A:0F0001020370390D1952838453542971631F0C,152036=14202C3808:0F00010203703915632719792322,80262045297158750F=111D293505:0F00010203528384157033,752971206B452F2B262E05=3404101C28:0F00010206030D7129302F79802D7C2B5C4744,11701D2052843833=111D293505:0F00010206181139702E1F686F6A792D2C304E153375664923221D21,52296B0D800D=15212D3909:0F000102070D70332C2E19528384297115637526201E2322,8D05=2C38081420:0F0001021A175D2C19152E302F7183846379,8A20704F7545410A=131F2B3707:0F001A651707,565A58202E1F476320=121E36062A:0F11707B7C5271291E20,2E1F39=111D293505:0F11700001522E71291F20,2B07=131F2B0737:0F11700001397129,2E2002=111D293505:0F11707129,2E1F2002=131F37072B:0F1152702E2F71291F20,000103=131F37072B:0F1152702E2F71291F20,7A3A=111D293505:0F117B7C2C2E71291F20,520300=111D350529:0F110001702E2F71291F20,0621=101C280434:0F11000170717B,522E1F0A=06121E2A36:0F110001708471292E1F20,03388051561C=121E2A3606:0F1100017B7C702E7129,522B22=2D39091521:0F110039702C2E522F1574487B7C2D4E804B,098A204538612B=05111D2935:0F1118795B65170002195D,52382E8A201E=2531010D19:0F111829711500010370390D332E750C201F,4552832F382B8004=2A3606121E:0F1118175C000301027039450D29332C2E2F15631F,8A582020=31010D1925:0F1118032A0D545283841A802D2C2E2B71296366774744201F26232221,010900150C06=2C38081420:0F11180300706A2E1549466319,292F26806B382B20754506=2E3A0A1622:0F1118528384530001035C702971152B332C2E63201F1E23222621,6B75452D4F802E=111D293505:0F1118060300017B7C792E39767566261F20,7129805136=232F3B0B17:0F111800171A454F514E3A3871157765443D23221E262720,80612E1F1C=212D390915:0F11180003706A4F0D332C2E192971155363751F20262322,524746416128=3B0B17232F:0F111800037039450D2971332C632026,1F2E2B38528327=3B0B17232F:0F11180006032A0D70332E011954838471152C202322,58477D630C=0814202C38:0F1118000106287129705B032C2E302F802D4E2B201F,528458384108=380814202C:0F11180001027039302971542F7526201E,63472E151F583A=1E2A360612:0F1118000102030D70332C2E192971158384535426201E2322,471F1B=1F2B370713:0F1118000102030D70332C2E195283845329711563261F0C20,4745752522=3505111D29:0F1118000102030D70332E2C192971153953631F0C262720,5284612528=390915212D:0F111800010203700D332C2E192971152F4B49471F270C2322,52562B2029=390915212D:0F111800010203391929710D1552838453,2075708A456309410F=0A16222E3A:0F111800010206032A0D097170292D302F1575761320,521F47251D=1F2B370713:0F18000102111A1703154F2C2E382D2F807566,7163708A1F207D2A=05111D2935:0F111800017C5C2C2E7129,527015382021=2B3707131F:0F11185C0370332D152322528384636626271E,2F292C2E1F00010601=2430000C18:0F11185C0001092A0D7014692983847B7C2C2E302F802D2B,06454F208A2E=0D19253101:0F11181200171A7919547638,5215201D09=3A0A16222E:0F1A1716007015713F261F2720,5263587D2B470304=111D293505:0F1A0070153871291F20,7A7629=010D192531:0F181179005B712980152D4E2A0D533358,5270208A11=0814202C38:0F181138171A7975665B52845415,47701F8A2013=121E2A3606:0F181117795B5C007054292A0D690403332D2C2E66632B3D,8A454F3822=121E2A3606:0F1811705200012E71291F20,382A=16222E0A3A:0F1811705200012E71291F20,062B27=14202C0838:0F18117052000171291E20,2E1F27=16222E0A3A:0F18117000012E71291F20,527A06=111D290535:0F1811700001062E2F1F20,712912=14202C3808:0F181100062839707952542C2E302F03565A7566441F1E,0D29802B2029=1824300C00:0F181100012C2E7129,522025=121E2A0636:0F18110001261F20,03522E=0915212D39:0F18110001702C2E7129,6F454F098A2025=030F1B2733:0F18110001702C2E71291F0D2B152F2127,5283162014=16222E3A0A:0F18110001707B7C0D7129,52565A152B2034=17232F3B0B:0F1811000104037115454F7677657B7C392023222726210C,52092E1F27=3707131F2B:0F181100010603797B7C802D302F2B6743441F202322,2952477D2528=14202C0838:0F181100017B7C2E71291F20,036F33=0D19253101:0F18110001027939706954528384685D15565A75201E1D26,29032E11=182430000C:0F1811000102062A0D2C2D804B2B672E2F7129,70471F8A2030=17232F3B0B:0F5C707971292C2E0E032A0D6A804B2D8C2B3348634C,52110915462031=15212D3909:0F5C5B0001032A0D7052842C2E71291F20,1118517D462B=0F1B273303:0F5C111800015B712952841F20,756A251A=2733030F1B:1545332C2E2F84836375662620,0F0003700D71292B1C=0E1A320226:1516291211020056,06382007=000C182430:1551000403706A454F3A3D771F262322271E1D21,382B41522016=17232F3B0B:1500443626271F1E,29710F47380D19520337=182430000C:150001021745512E443D65262322,2B63387C18=192531010D:151A83842627202322,580F7003632E1F297C26=0E1A263202:15391A302F83845475662627201E,0F702E4629004708=3606121E2A:5B000102073911522C302F3A678C363F33490D482425200C1E2322,0F15382E1F6116=1E2A360612:5B71297000010611182A0D39792C2E332D4E80151F202621,52454F3804=2C38081420:5B11180001020328700D332C2E195283847115632F751F2720,290F476630=0C18243000:201E27262322,8902=3404101C28:2A0D11180F52848353037039156358332C2E,3820002628=010D192531:4089,030F565A61206B27=1824300C00:4089,8836=1C28340410:0370833F0F6A5215,010D582E1F202C2F2938=112935051D:03700F,79192C2E2D715275262322271F201D2136=112935051D:0370110F45510D3371290941614C522623222720,8D3B=152D390921:03047039171A533852443D363F,8D11=0F1B273303:030402111A16175B4F3A2B153E0079015D54528483696A51,7006200F05=0F1B270333:03041A174533302F56795B3E808339528454,700F292026=121E2A3606:037B7C2E2F261F20,0F14=1E2A360612:030270170F45513A2C71295283842A0D532D24252623222720,155A382E1F2F=1B2733030F:03027011170D332D2C2E2F716152838454,010F201F2C=121E2A3606:03027039450D332C2F2D2971528384636626202322,581535=212D390915:03020E0F18110D332C2E2D2F4971293E615244756653,8A202531=1B2733030F:030102703945802D2C512B7129092322270C7566,112E528325=2D39091521:030102062C2E543E3D636679,380D19462971001F=293505111D:03111A171538193E3F,0F632C2E70454F200C19=17232F3B0B:031A2B7915656A,0F177001204529710D632E2F02=32020E1A26:033945302F838475262720,297071000F2E1F3810=17232F3B0B:0339332C2E1575201E26,0F520D631F29712A72473826=390915212D:0339332C2E302B66201D1F27,0D2971010015520F6B0E=15212D3909:03392D2E332F211D201F1E27,0F7015380029710D195824=16223A0A2E:036F791E20,522E1F31=1D29350511:5283845B79037B7C802D2C2E4E302F2B38493D4463664C1F2021,0F0D712917=15212D3909:5283845303702971150D2F,388A6A6D0F2012=111D293505:528384530370331929272E2B2F631F1D20,0F156B380E=0D19253101:528384530339454F0D297115332E2F637520,0F00705802=2A3606121E:528384530339332E152C2F58631F20,380D000F2900=283404101C:528384530003010215392C20,1112180F29560D2E1F754511=15212D3909:5283845300031929150D332C2E63,0F217045208A717521=3505111D29:5283845300010670802D2C2E4E155B201F1E232221,380F71296A0E=17232F3B0B:5283845354037029711575262720,631F58000F2E38010D=111D293505:528384000103451915332C2E631F2720,29716A0D0F7019=1D29350511:5283840001032E1570637566302F391F,0F4729712030=16222E3A0A:5283845479036A2627201E,0F380D70297115012F1A=1F2B370713:528384542E03700F111869565A7566631F1E2021,297138000C31=121E2A3606:52838454443D65002C2E15495D1F,0F417D712B38630F=0D19253101:5283845444360F11756415,2C2F29016B472E2B20381D=212D390915:528384545363000103332E15,0F1F197029710D757D2032=121E2A3606:528384546315332C2E2F26201F2322,0F0D45002971756B17=192531010D:52838454754C2971150301022E,0F63206A0938268A4117=1B2733030F:52848353000103297115332E2F19,0F8A514F6A6620754526=1824300C00:528403395B2F1E20,0F012D=0B17232F3B:5254700001020612692D4E584647336375662E1F1E,71290D262037=131F2B3707:525400045B17791A565D754C7866,2E1F207C34=0F2733031B:483F89,8838=232F3B0B17:767779392623222789,152B1F1D200E=0A16222E3A:767789,528300292025=14202C3808:7665261F20,0F291A=222E3A0A16:7665262322271F201E21,0F0029807124=1824000C30:7889,292E1F24=101C283404:8D,8832=1D29350511:63767789,522E0006206B31=131F2B3707:7B7C343589,0F7038=2632020E1A:7B7C343589,520F20=0E1A260232:7B34,8812=1C28340410:02703918110F7919155283756626232227201E,012C2E1F0C29=121E2A3606:020F11161A17454F2C2E2D302F2B38434C,2070016328=1824300C00:02060418110D332C2E415B637566262322271F20,520F23=142038082C:07504089,0F010C=15212D3909:07262723221F40,0F7129523B=2430000C18:0717363F1A2C4F3A67433D8B,71290F0103471A=2531010D19:0704031118528384542D2E4E49201F1E1D2127,292B000C3B=283404101C:073F7765644889,012014=111D293505:074048261F202322,0F71454F1500018008=111D293505:07404826271F1E2089,882C=0D19253101:07565A5283845463756677261F20,010F15296120=2F3B0B1723:07487677393F89,0F2952151F1D30=111D293505:074889,06520F3808=17232F3B0B:074889,883B=131F2B3707:074889,8832=15212D3909:07762623221F1E20,000F1552296B2F2A=0D19253101:0776776A742623221F200C211D1E,11180F2F5206802B0B=04101C2834:0776776564,000F29382011=101C283404:0706397B7C794C636A48,520F7129472026=14202C3808:077C343589,880A=380814202C:076A79040363660F5D363F,52292E1F20382F15560123=16223A0A2E:076A696819,0F2918=222E3A0A16:076A171552847983546578,712970010F2D=182430000C:076A48,45752F29384C0F204F612B30=131F2B3707:076A7626271F1E20,0D0F29382F2E0E=0814202C38:07343589,065238=1C28340410:070039201F0C2789,06030F292F23=101C280434:076564,0F292002=0D19253101:073918111A17332C2E71292322271F1E20481D45548384,38002F702A=1824300C00:7C343589,8801=172F3B0B23:6A79363F65,0F292B7118=1B2733030F:6A170F19,5845754C201F4F382430=1B2733030F:6A170F1963766F,5452201F32=0C18243000:6A0339332C20528384531563,29713801000F0C47806B3B=2A3606121E:77766564000789,0F52201E8A01=202C380814:1F2027260076232289,0F29528339=0F1B330327:3435,8809=0F1B273303:34357B7C,8818=121E2A3606:34357B7C7789,0F291D=232F3B0B17:34357B7C89,0F2021=33030F1B27:34357B7C89,030F27=390915212D:34357B7C89,712917=1D29350511:3435073989,8802=2C38081420:34357C89,0111180F292006=30000C1824:34357C89,71291A=14202C3808:34357C89,8A2036=182430000C:3435000789,8835=232F3B0B17:34350089,0F2025=3707131F2B:34353989,0F2037=0D25310119:343589,0F52202D=0F1B273303:343589,0F7152290D=131F2B3707:343589,8830=121E2A3606:343589,881C=16222E3A0A:343589,8819=131F2B3707:343589,880F=15212D3909:343589,8832=14202C3808:343589,8813=0D19253101:343589,8811=17232F3B0B:343589,881E=142C380820:017018110F1A2E15495247838463462322271F,8D03=0F1B270333:0103040818111A155284262322271E20217A79708330,38472E631B=14202C3808:010670170F0E3A294152838454262322271F201E,2E1815442C=0F1B273303:01067071292C2E1F20,1103150F520A=17232F0B3B:010670181126271F202165,293816=182430000C:0106111839513A2C2E2D2F8C804B4723221F63,7152292037=0F2733031B:010203040618110F3315292A271D200C6339171A712C2E30491E21,7A21=0E1A260232:010206040318110F2E292A27200C70072C302F541F392B49,381512=1A2632020E:010206110F452C2E7129095B5226232227201F0C,58804B036B2B381C=142C380820:01023918112E2D493E52756624262322271F20,8D12=121E2A3606:008354,06462F2E1F27=030F1B2733:00797084831754,0F2E472D4E1F06=0D19250131:0079701811072C2E01060F33152627200C7A1A302F4576631F2B,8052382900=172F3B0B23:00790F072C2E0103047018111A262322271E7A302F5448637545,293815561E=101C340428:007952151E20,0F2E1F33=0F1B273303:007984831A160F1719,632E20471D6B01=152D390921:0079110F0304062A528423222627207A19701A2C2E2F5D83,294513=0F1B273303:0079181A165B332F2B262322271E2021030469702D4E49712930845D,454F05=152139092D:0079192E2F030417332D1552847A5D,4E201F=162E3A0A22:003826232277,632E20523A=0D19310125:0038262389,521513=1C28340410:00384089,0F202E157C07=04101C2834:00384089,152967631F=101C283404:00384740,0F2037=1C28340410:00387765504089,0F157C04=131F37072B:00385476,521F13=16222E3A0A:003854767789,2E1F522010=131F2B3707:003854637519,205D1D1F52151E210F=121E2A3606:003889,52201F1D4733=121E2A3606:003889,881F=212D390915:001D23221E2789,52290F2E1F202B=07131F2B37:002C7080305C784C62,2E1F472001=283404101C:004D64547589,0F292E=131F2B3707:005040,522E1F0F2C2004=3404101C28:005089,032C2E1F33=182430000C:005089,8815=192531010D:00261F23221E201D2189,8D12=131F2B3707:00261F2322271E200C89,8D1E=121E2A3606:0026271E20,2F2E1F33=16222E3A0A:002627241F1E20232289,8D33=14202C3808:002627651E20232289,881B=182430000C:00262789,292C2E1F2B2F2A=07131F2B37:00262322271F1E203F8B65,52290F038002=15212D3909:001779332D2322271E2007760304,38290F1C=1F2B370713:00173883546365756619,466115201F701D47522434=0D25310119:00170F79191A6540,712909387C2015=0E1A263202:00170F332C2E2D2F802952443F26232227201F,15637C383A=132B37071F:00170F7665776489,8D2A=390915212D:00177689,0F52804F2507=2E3A0A1622:00177179546A76,0F52443D1F2D=0915212D39:0070,0F292C2E791F13=131F2B3707:007083624C,0F38202E7D4F45471F7107=380814202C:00704F0D332C2E2D15363F261F20274C,0F2906036F4703=3404101C28:00702C2E164C157126271F1E202425363F,29386A032B0F=0F1B273303:00700F1715262720,472E386309=15212D0939:007022230726,2E17712952302F15=15212D3909:00704889,8834=1C28340410:0070784889,0345201F21=2D39091521:007007482089,2E1F58470B=0D19253101:0070071A010618110F5B52846775,6326202E=16222E3A0A:00701A17794C0F302F715475,2E454F8A20243A=0F1B330327:007018111A1617192E15382627201F656477,4F090A=0F1B273303:002E2F18110F5B3315292A26271F20210C7A70710102393E19,035A37=14202C3808:002E4344793F26271F20,03702C2F292B381A31=0E1A263202:00161A5D454F153826201E27,7D0D2904=152139092D:0004037039180F332D152952262322271F0C533A83,4117804735=1F2B370713:0004037B7C0F79494766754667,80293869208A1E=162E3A0A22:00040301067018111A0F332C15292A261E200C7A7919712F5D52838454,5617454F06=3404101C28:000403110F527079156523221E2027,0129802E1F6B1D=1830000C24:0004031A170F11332C2E302F1571292A657677451949,70201D5218=102834041C:0004031811171A5B332C2E155D52,0D29204504=17233B0B2F:00040318110F1519262322271E2021,52831F3825=3B0B17232F:00046A7966444C7765,010C202F38520F70292E31=14202C3808:003F261F202789,8836=131F2B3707:003F657789,7152290F032B3A=2632020E1A:003F651F0C2027232289,0F292B=16222E3A0A:003F89,8836=212D390915:000F76,032E1F522C292B22=2B3707131F:000F7765,2E1F7C4607=0F1B273303:000F01111A1615292A2627200C2C670279538384543E49,634512=0F1B273303:000F1320,6380382936=0F2733031B:000F1323222627,2E3829031535=0D25310119:00676589,0F200F=0C18243000:00401D232289,71290F47202B=101C283404:0040395089,8803=30000C1824:004023222089,0F291118470D=0A16222E3A:004089,0F5211=1A2632020E:004089,0F0147200B=3A0A16222E:00037039454F0D332971152C4C48,090F476341382E0A=111D293505:00037039041A26271F1E202322,0F2F2C335129452E0D3A3B=222E3A0A16:000370396A450D332F4B154C,0F208A7D41381F2E14=0F1B273303:00030401061A16170F332E71292627200C02696A45514F0D2C2D4E497A,2B0B=0F1B273303:000304111A33152D2E302F71292A5284530770022B,0F6345203B=0F1B330327:00030418111617332E2D2F292A52845407020D302B,090F452001=0F1B273303:000304080618110F1A2E2D0D3371292A2C302F7566010239454E802B,632039=2430000C18:00036A7415384878,45751F20240F522E834F2E=182430000C:000301394F2E154763751F27,0F707A802629710D192035=14202C3808:0003391983845475,2E1F0F6A702971722A0D04=0F1B270333:00483F,6338200F2A=3B0B17232F:00481F2023221E27262189,0F292C2E1B=122A36061E:0076645089,8819=202C380814:0076777566262322271F201E,0F111852290D=101C283404:00763989,0F2036=1E2A360612:00788B89,0671292E25=010D192531:00784C793989,0F29702E1F208A21=31010D1925:0006261F1E201D212322,0F2938111801=2A3606121E:00060403702C2E4C154947443D651F,0D2920=101C283404:0006522E261F20,0F712939=2632020E1A:00060724232227261F2025,520F157929382F22=31010D1925:0006547677,0F5229151F201B=0E1A320226:00061A161718110F292A0C26271F21797001022F49,470D=0814202C38:002876396577261F20,5283290F37=212D390915:0028397976771E232227,0F522E47442027=121E2A3606:006389,8822=101C280434:007B7C3989,881E=1830000C24:007B343589,8805=2E3A0A1622:00021719792B155D5466774962,010611180F292030=14202C3808:00020370454F0D3933192C2E2D156375261F202322,0F7123=0E1A260232:0002070818111A16175B153E445D5452848365647576,2038454F15=182430000C:0007385476771548,52061F2024=2D39091521:0007504089,0F29157030=15212D3909:0007504089,060F71702F2918=15212D3909:0007504089,880B=17232F0B3B:000770171989,0F2E20382F=0B17232F3B:00077089,522E1F8A202C=07131F2B37:000704036939487C4466,0F7011293821=1824000C30:000715547776,521F18=0E2632021A:0007030401021811171A0F2E2322271F1E706749528483,202F293800=0F1B330327:00077663,0F297138202C=0B17232F3B:000776776548,0F1118152E1F2017=121E2A3606:00077665776489,52830F208A14=1A2632020E:00077B7C4834353989,2952203B=2632020E1A:00076A386563,0F7D8A2066454F52754C15=1E2A360612:00076A0F3874485040,06707C2509=3606121E2A:00076A74504089,5229702C7D15=14202C3808:00076A74173926271F1E20,0F7029522B09=000C182430:00076A54196348767765,7920297115528A0D382B16=101C283404:000734357B7C3989,0F528329200C=06121E2A36:0007343589,290F7104=2E3A0A1622:0007343589,0F292F702012=182430000C:0007343589,0F71296B708003=15212D3909:0007343589,7129706300=0D19310125:0007010618111A332D302F15262322271E530270164C,560F712924=0E1A263202:000701020618111A1752848354230C7027,262038292C=111D293505:0007711F204840,010F29153814=17232F3B0B:00076527262322,1552835A201D0F382D=0D19253101:0007363F8B3989,09292C208A0F28=030F1B2733:000739483F66,0F208A2B0A=04101C2834:0007397B7C343589,0106522008=020E1A2632:0007396A48343589,0F203A=283404101C:00073934357B7C89,0F5223=3505111D29:000739343589,032010=0A16222E3A:000739343589,520F2F=111D293505:000739343589,8A200A=15212D0939:00077A7089,8817=17232F3B0B:000789,8D3B=172F3B0B23:000789,8815=1B2733030F:007C343589,881B=212D390915:007C343589,8812=15212D3909:006A79190F6F2627,6B46204538290B=380814202C:006A38075040,0F630141202B454F2D=121E2A3606:006A5040077448,702B2C0F2F292E=0B17232F3B:006A583F232227261F20,0F291547031C=232F3B0B17:006A6F391974,0F2E614447702C292F71201F38521F=31010D1925:0034353989,522E1F2B=0D19253101:00343589,060F5200=2A3606121E:00343589,7129565A01=131F2B3707:00343589,883B=111D350529:00343589,8800=152D390921:000150402627,0F292F2B1E=2733030F1B:00010F17505840,565A80385283846315=101C283404:000103020611187B7C2D4E616439201E0C26,522E474429=101C283404:0001030239450D297115332C2E4C,0F542070528438632C=101C283404:000103392E54837548,19700F58157A20381F=1830000C24:00010670175B71292A152322271E,03637C2B380F=0E1A263202:0001067052842E71291F20,030F38477533=131F2B3707:0001067011185B0D332C2E2D712909262322271F200C,0F5263250C=17232F0B3B:000106040318111A170F33292A26276A201D0C7A71077C1F1E74694F,520A=0D19253101:0001060403232226380F767754,568020152D=111D293505:000106025B75712904032D302F382B2A0D801E20,2E1F0F0C=0D19253101:00010607155B5C26271E2021165D83,38470F2920=16222E3A0A:000106073018110F3329271E0C7A0D75,3826201508=0F1B273303:00010618111A16332C2E2F2D27200C07483A450D,1552843825=0E1A263202:000102261E2027,03476F700F2971382E39=15212D3909:0001027007834878,2E388A201D17=131F2B3707:00010203450D3329152C2E2F5375,0F638A6A1D382D=0E1A263202:000102030D70332C2E29712F534426201F1E,0F38152F=121E2A3606:0001020370450D332C2E2D152971,0F52838A201D1B=1D29350511:0001020370528384631575712D2E4E3E581F1E1D,292C2B452620803A=222E3A0A16:0001020370392F2971152B54754C,458A1F0F20462C=14202C3808:0001020370392F80712B546675201E26,1F58472E152F=16222E3A0A:000102037039714515750D33,201D381F092E0F1103=32020E1A26:000102030F7039453319152E2D2F63751F0C1E20,71290D38472C=16222E3A0A:000102035270392E2D5863,0F381D2B2921201511=131F2B3707:0001020352666A,0F7020262938172F3A=2430000C18:00010203332C2E2F1558631F,0F1920707A2971264627=05111D2935:0001020311180F702E1F7952838468332D6749443E46630C1E1D21,292B2035=1C28340410:000102031118396375664819,1D4138702080291F=232F3B0B17:000102033945332C6375201D21,0F1929710D702D=101C283404:00010203390D3329152C2B751E20,2E1F54475352458316=111D293505:0001020339161745514F2C190F1A152E2D2F304979,8D13=17232F3B0B:00010203396A79637566201D211E,29387D71707A30=101C283404:000102033911170D3319152E2F0947442627201F,8D25=3505111D29:000102031811392E2D19528384543E4463751F20,152F1A290F0D=0E1A263202:0001020626232227201E,0F2E03801F0F=101C283404:0001020617385483,030F47202B6B1B=2733030F1B:000102060F17705283797823221E2027,2E712910=121E2A3606:000102062A397129797B7C2E1F2425,162F5D20262B=182430000C:0001020603691817452C2E2D498344,412B6A09633808=3A0A16222E:0001020603700F7B7C2E1F692D48302F565A586366240C21,2B151A292039=17232F3B0B:000102060717706A33392D2E4E674447482322271E210C,71292B4F2023=33030F1B27:0001020607036A5D397C2163664744,0F4E25208A08=04101C2834:000102060775261F20,71290F70150C=101C283404:00010206111803302F565A802D4E2B881F261E0C,0D0F521B=16222E3A0A:00010206090D5B7952838454685D7B7C443D77656366201F1E,030F47454F24=010D192531:000102071283542627201D210C4C78,29580F2E6352031F01=32020E1A26:00010275261E0C2322,6303706F0F292E1F19=0E2632021A:000102081A158483262322270C1E,700F292E1B=101C283404:00011A1615262322271F1E200C214C,472B0F1124=3707131F2B:00013974150726271F1E200C,0F06520D297170382B4507=17233B0B2F:000118111A16175B154C26271E200C232279302F5D528384547543,0F297C7A03=17232F3B0B:000118111A332C2E2D1571292A2627200C7A1979,387C02=172F3B0B23:000118111A332C2E2D1571292A23222627200C7A791970302F5D5283845456,387C454F1F=0E1A263202:0001081811171A160F1571292A26271E20396476452B0D,632E523813=15212D3909:00211D1E232289,8D16=0E2632021A:006526232227201F,8926=05111D2935:00657689,6B0F5225=16223A0A2E:00654C89,8D03=2A3606121E:006589,2970472008=15212D3909:001A170F5B332E2D7129261E203E5D,1503528306=152139092D:001A170F1379232227761926,71293833=1C28340410:001A1715838444363F261F1E200C2322,0F476B52036338=14202C3808:001A2B5448701938754C,152E20242510=0D19253101:0039504089,8D39=283404101C:003926271E20747677642322480C06,2E1F38=0F1B273303:0039262322271E201D210C0748766465776A,150F382939=202C380814:0039332C2E2D2F152B4644261F1E,0F7019382971637A31=192531010D:0039787989,1F2E2010=101C283404:0039787089,2E1F8A034F206B29=05111D2935:00398B7989,0F200C=131F2B3707:0039077426271F1E20,0F29713852832B632D=14202C3808:0039076A7426271F2048,0F79197029717A382C=0E1A263202:00397C343548,8929=3B0B17232F:003934357B7C89,0F2028=16222E0A3A:0039343589,8D34=16222E3A0A:0039343589,880B=111D293505:0039343589,8805=17233B0B2F:0039343589,882E=101C283404:0039343589,8806=17233B0B2F:00390103040618111A17332C2E262322271E157A7071302F45631F2075,807C2B=0915212D39:00396577647969271E2322,52012E1F2620612D=16222E3A0A:00391A6A15384C4943363F7448,0F0379472B6319=192531010D:00394C786F89,0F2E442035=182430000C:003989,882A=121E2A3606:003989,8816=13191F252B313701070D:003989,8801=0D19310125:003989,880D=0F1B273303:0018112C2E01040607332D292A09270C2322696870302F47023945,382052801C=101C340428:00190F153917701A48,472E1F200334=1F2B370713:00195475667689,5229152E2019=222E3A0A16:004C504089,0F5215470A=3A0A16222E:005C702C2F802B154C78,5A562E1F208A45466319=102834041C:0089,090F1538=131F2B3707:71297C790001062A0F802D,5215705D2F=0E1A263202:7100030170391959152E2D2F2B,0F201F4F75668A3824=030F1B2733:5483846376656419786A,298030201A=2430000C18:5452838479195D00012A0D7B7C2C2E3348156366242526201E,0F71292D=07131F2B37:54528384700001020339482D301571565A363F637566,06292B201F8A29=030F1B2733:54528384036F796A153E65,7129631D=2733030F1B:5452848303152F802C2D,2E1F208A7A700F29710C7D22=33030F1B27:118384155B20272E1F21,0F03380E=0E1A263202:1179302F842627201E,0071292E1F0E=06121E2A36:11177B7C52842C2E5B1F20,060071292F0F0E=101C283404:110F70528475660D7129,012E1F20262A=101C283404:110F03706A795215636626271E,0C012F38062C292B07=020E1A2632:110F0001702C2E7129201F,52060C=0E1A263202:110F00017052792E1F1E,71290D2B2020=293505111D:110F1A6A702C2E1952838453712F6375,45201500011D=101C340428:11037B7C2E2F7129,0F52200B=0E1A263202:11000170792C2E7129,0F52201F01=111D350529:110001527B7C2E75,0F2009=04101C2834:1100010206702D804E2B2620,0F52540D00=131F2B3707:110001392E1F20,0F712932=17232F3B0B:117154528384292C2E302D4E092A0D50407970443D,5680410023=2B3707131F:111879690001020370396A2E2D528384543E637566,0F380D58292000=222E3A0A16:111879076A1A171523221E272024,5229700F1D012E2B0C2F0B=06121E2A36:111817000106702C2E71292A0D33802D302F4E2B44,0F52252029=07131F2B37:11180F000704030D7C684580302F153867534775,70204119=2430000C18:11180F00012A0D70795D7B7C39332D2C2E4E4863664C,064F478A2037=1E2A360612:11180F000152548471702C2E2D4E303348492A156144474C63,8A201F38450618=202C380814:11180F000128032A0D7129302C2E2F2D802B09411F1E20,5284543824=2F3B0B1723:11180F0001020370391952845329712B632E7B7C792D2C8020,385D151E=293505111D:11180F0001020339700D29716375662E1F2620,3815568016=16222E3A0A:11180F000102587B7C5283847971302F804B2B497675,09612E1F201E=232F3B0B17:11180F00010E715229702E79692C2D2B15093954444C66,2F565A806132=131F2B3707:11180F71297052838454792A0D33802D153853201F1E212627,012F56476628=3707131F2B:11180F71297000010604032A0D793969302F33802D636675,201F52565A1E18=1D29350511:11180F5C000102030D332C2E195329711563261F202322,52843A=202C380814:11180370392A0D3329712C2F156375795B5D,450C8A00382E1F20010C=3A0A16222E:11185283847975661271393D692D15565A201E262322,292F060D0C02=30000C1824:111852838470795B302F404533802D152B39201E23221D212726,0F2E1F010D2923=2D39091521:111852838453546319297115030D332B2C,060F8A2E38201F38=0D19253101:111800020D041A796933483E5347446563751F1D212026,010F09150C17=2430000C18:1118000717161A2C2E3371292B56433D6375363F,0F010347208A09=020E1A2632:111800012A0D2C705271292E201F,1538617904=30000C1824:11180001032A0D70795B2C2E302F802D4E152B33714161201F26,520958470A=000C182430:11180001020439332C2E302F2B5844477515634C1F2721,0F520D19267A2971702037=232F3B0B17:111800010206037939695483845D2D2E4E446375661F262120,0F52290D7123=31010D1925:111800010206071979697C67474475664C,0F16298A2014=182430000C:11187129705B79000106032A0D397B6F7C802D2C2B61756627261E0C1D21,0F2E15414732=192531010D:111871545283842979397B7C69152B2A0D33485324251F1D1E26,6B00702F800C201E=1F2B370713:5D0007363F232227261E21,037C0F471F202E=0E1A263202:6526232227201F,880E=111D293505:653989,8806=131F2B3707:363F6526232227201E89,8832=1A2632020E:1A454F548384,881D=121E2A3606:1A38712975,0F201A=0E1A263202:1A162623227954,0001710F290C=0F1B273303:1A16170F13152654,3852204F32=0F1B273303:1A5D453A332C2E2F4B25262322271F201E1D21,000F704723=2F3B0B1723:3950177089,522E1F0F201A=1D29350511:39701117302F713819297566,004551152C2E201D1F34=121E2A3606:393589,881A=15212D3909:393589,882C=182430000C:393589,8825=101C283404:393589,881C=2531010D19:394089,71294709636F7C440D=0D19253101:3948007889,8D38=2430000C18:394889,8811=111D293505:394889,882A=0E1A263202:3907,8807=0D19253101:39343589,8831=101C283404:393489,8801=222E3A0A16:390050404C89,0F528329692018=131F2B3707:39006A26201F,0F520D38580629712B09=380814202C:390001022C2E302F1575804B2D261F20,0D0F0319707D5229717A15=17232F3B0B:3989,8D11=0A16222E3A:181179838454637566,0F5229012007=111D293505:18117915384C,52200E=0C18243000:1811795B032C2E302F802D4163754C27261E1D2120,010D0F29521F29=16222E0A3A:1811795B5466,01202F=192531010D:181179000607040D03302F5283844F3A45512B1533664C47,090F702E208A2B=0B17232F3B:18117900012C2E5B1F20,0F710D52291A=122A36061E:181179190E332C2E2D52637566262322271F20,8D02=0F1B273303:181117332C2E1526232227201F1E3E,38030F522922=142038082C:181170792C2F7129,52201F=121E36062A:18117001061579,71292023=121E2A3606:18117000012C2E7129,522024=3505111D29:18110F3900010203700D3329711563752E1F0C201D,38525D1A=101C283404:18110F197983842E230C271F1E7A70525463,2620291503=111D293505:1811002E1F8384,0F2022=1824000C30:181100012C2E2F1F,0F3821=142038082C:181100012C2E2F1F20,0F5229=14202C3808:181100015B3875,2E2034=15212D3909:181100012A0D2C2E2F2B2D304E447129841F,0F09416138200F=0814202C38:181100012A0D52842953411E20,2E1F0F47152F=131F2B3707:18110001032A0D845B7129302F791533536678,0F208A1F1D33=17232F3B0B:18115452840001712970802D2C2E302F2B2A0D78791F,0F204758610E=0F1B273303:18111A16175B3315262322271F1E201D215D838454433E363F754551,00030F290D=0C18243000:18115C0001702A2C2E2F5283847129795B6375802D154C,1F208A2407=15212D3909:88,262052830D=17232F3B0B:88,8D17=102834041C:88,8D0B=15212D0939:88,8D24=121E2A0636:88,8D09=17232F0B3B:88,8D13=111D293505:1979,3F2F2E45207D37=112935051D:1966583F6589,8831=16222E3A0A:4C4089,880C=0C18243000:4C78,297172380D2A2E0F47484112=16222E3A0A:5C0F1811790070528471291F20,2F0380512514=1C28340410:5C0001020652835B0E03804B2D4E2B752024210C,292E565A36=1A2632020E:5C11180001027170520D2984832B15200C,03802E386333=15212D3909:89,6B34=111D293505:89,8D";r.TIME_YI_JI="0D28=,2C2E2128=,2C2E0110=,2C2E0C1F=,2C2E7A701B1C=,01022308=,01026D003026=,000106037A702D02=,000106037A702802=,000106037A703131=,000106037A70341B=,000106087A701F0E=,000106087A702E15=,000106087A702C2E0E39=,000106087A702C2E0D2B=,881727=,88032D=,88352F=,882B2F=,882125=,882A22=,880C1E=,880220=,88161A=,882018=,883422=,880113=,880B11=,883315=,882915=,881F17=,88150D=,88122E=,88302A=,88262A=,883A28=,880826=,881C2C=,881905=,882303=,880F09=,88050B=,883701=,882D01=,88060C=,882410=,881A12=,882E0E=,88380E=,881010=,883630=,881834=,880E38=,882232=,882C30=,88043A=,881E0A=,880006=,883208=,880A04=,881400=,882808=,883137=,883B35=,882737=,881D39=,88133B=,880933=,88251D=,882F1B=,881B1F=,88111D=,880719=,88391B=,88212D=,7A702C0B15=,7A70551515=,7A70552D00=,7A7D2C2E1334=382C,000106083528=382C,7A70000106080504=382C7A6C55700F197120,00010608223A=380006082C,01026D0D2C=380006082C,01027A70551D30=380006082C0F71295283,01027A703636=380006082C0F71295283,0102416D1226=380006082C7A706C550F297120,0102251C=380006082C7A6C55700F197120,01026D2300=3800010608,2C2E0324=3800010608,7A702C2E082E=3800010608,7A70552C2E3B34=38000106082C,2F8026330C=38000106082C,2F80267A701622=38000106082C7A70556C0F197120,1904=38000106082C7A6C55700F197120,1514=38000106087A70556C0F197120,2C2E3138=38000106087A70556C0F197120,2C2E0B10=38000106087A6C55700F197120,2C2E2B28=387A6C55700F197120,000106082C2E2E16=38082C,000106037A700E3A=38082C,000106037A703708=38082C6C550F197120,000106037A701B20=38082C6C550F197120,000106037A70111C=38082C6C550F197120,000106037A703A2D=2C38,000106082733=2C38,000106081015=2C38020F71295283,000106083817=2C2920,7A700F03=2C2920,616D1839=2C292070556C100F,00010608161B=2C2920020F7100010608,302B=2C2920556C0F1971,7A701E07=2C2920010F,1B1B=2C2920010670100F00,352B=2C292000010206100F70,082B=2C292000010206100F707A,0C21=2C292000010870556C100F7A,0617=2C29206C0F1971,7A70552807=2C29207A70556C0F197100010206,122F=2C29207A706C55100F1971,1017=2C29207A706C55100F1971,2731=2C20,616D0436=2C2070550F,7A7D01022E12=2C200F71295283,01021831=2C20556C0F1971,7A702912=2C20100F52,01026D1D33=2C807138152952,000106080E31=2C80713815295270556C100F,000106083201=2C80713815295270556C100F7A,000106080327=2C80713815295202100F,000106037A702B2B=2C80713815295202100F,000106037A702801=2C80713815295202100F,000106083639=2C80713815295202100F7A7055,00010608341D=2C807138152952556C100F,000106037A701B23=2C807138152952010F6C55,7A70302D=2C8071381529520102100F7A7055,2231=2C8071381529520102100F7A6C55,1F13=2C80713815295200010206100F20,7A70313B=2C8071381529526C550F,000106037A701A15=2C8071381529527A70550F,000106080219=2C8071381529527A70556C0F19,000106082E0D=2C80713815295208556C100F,000106037A70161F=2C80711529525670556C100F,000106083813=2C80711529525670556C100F,000106082D05=2C807115295256020F7A706C55,2237=2C80711529525602100F,000106081F0D=2C80711529525602100F55,000106037A702627=2C8071152952560102100F7A706C,2C33=2C8071152952560102100F7A706C,0939=2C80711529525601100F7A7055,416D021F=2C80711529525600010206100F70,0E37=2C80711529525600010870556C10,2129=2C8071152952566C550F,7A702519=2C8071152952566C550F19,7A702417=2C8071152952566C55100F19,000106037A70043B=2C8071152952566C55100F19,000106037A700C1B=2C8071152952566C55100F19,7A703B31=2C8071152952566C100F19,7A705500010603172D=2C8071152952567A70550F,416D3A2F=2C8071152952567A70556C100F,1901=2C8071152952567A706C55100F19,1119=2C8071152952567A6C55700F19,1C2B=2C80711529525608556C100F,000106037A701403=2C80711529525608556C100F,000106037A70071D=2C80711529525608100F55,000106037A701908=292C20,7A7D01026D2E0F=292C200102100F7A7055,032C=292C20000608,0102071C=292C206C550F1971,000106037A700E33=292C207A70556C000108,0503=2920550F,7A702C2E0721=2920556C100F,7A702C1225=2920000108556C100F,7A702C2E1F11=2900010870556C100F7A,032C201A11=297A70556C100F,032C200E35=297A70556C100F,032C20000A=70556C0F197120,7A7D3A29=70556C100F2C20,000106081C25=70556C100F2C20,000106082805=70556C100F2C20,000106082F20=70556C100F2C20,00010608150C=70556C100F29522002,7A7D000106033314=70556C100F,00010608032C20122A=70556C08,7A7D000106032415=70100F2C715220,000106081A0D=4B0F2C20,000106037A701902=4B0F2C20,000106080E3B=4B0F20,7A702C000106032E17=0F2C09382920,7A7000010603363B=0F2C093829206C55,000106037A70082C=0F29528320,7A2C71707D01026D0718=0F712952832C20,7A7D01021C26=0F712952832C20,7A7D01026D3918=0F712952832C2038000608,01027A70552126=0F712952832C2010,01021330=0F712952832C207A7055,01021118=0F712952832C207A7055,01023524=0F715220,7A70552C2E3419=20556C0F1971,7A702C2E1D31=2000010206100F,7A702C1E05=0270290F2C207A,00010608212C=0270550F,00010608032C200C23=0270550F,00010608032C203706=0270550F20,000106082C2E2520=0270550F20,7A7D000106032E13=0270550F202C807115295256,000106081620=020F29528320,000106087A2C71707D0112=020F2952832055,7A2C71707D000106030F08=020F20,7A7055000106032A23=020F712952832C20,2521=020F712952832C20,000106082F21=020F712952832C20,000106080003=020F712952832C20,7A700432=020F712952832C2038000106086C,7A701E03=020F712952832C2070556C10,000106081623=020F712952832C2001,2236=020F712952832C2001,000B=020F712952832C2001,7A70552C36=020F712952832C20013800,416D341E=020F712952832C20017055,7A7D0E32=020F712952832C200110,7A7D0329=020F712952832C2001107A706C55,262D=020F712952832C20017A7055,1229=020F712952832C2000010608,122D=020F712952832C2000010608,1011=020F712952832C2000010608,0A0B=020F712952832C2000010608,1F0F=020F712952832C2000010870556C,1A0E=020F712952832C206C55,7A703312=020F712952832C2010,000106037A70172A=020F712952832C2010,7A7055000106033B3B=020F712952832C2010,416D000106037A700B12=020F712952832C20106C55,000106037A700615=020F712952832C207A7055,3203=020F712952832C207A7055,201B=020F712952832C207A706C5510,2023=020F712952832C207A6C7055,2A1B=020F7129528320,000106087A702C2629=020F7129528320,7A702C2E3709=020F7129528320,7A702C000106083A24=020F7129528320,7A70552C2E341A=020F712952832038000106087A70,2C2E1C2D=020F712952832001,7A702C2E0611=020F712952832001,7A702C2E021A=020F712952832001,7A7D2C2E3815=020F71295283200100,7A702C2E3024=020F71295283200110,616D2C2E093B=020F71295283206C55,7A702C2E000106030505=020F71295283206C55,7A702C030C1A=020F71295283207A706C55,000106082C2E3705=020F712952837A706C55,032C201F0C=02550F20,000106037A700508=02550F20,000106037A703029=02550F20,000106087A702C2E3027=02550F202C807115295256,000106037A703526=02100F2C29528320,000106037A70150E=02100F2C29528320,00010608380F=02100F2C29528320,000106083527=02100F2C29528320,7A70000106031C27=02100F2C2955528320,000106081227=02100F2C29555283207A706C,00010608060F=02100F2C29555283207A706C,000106081D34=02100F7020,7A7D000106030F02=02100F7055528315,2F8026000106083920=02100F7055528315,2F802600010608212A=02100F7055528315,000106082A20=02100F7055528315,000106083A26=02100F7055528315,000106080439=02100F7055528315,000106080008=02100F7055528315,000106081B21=02100F7055528315,00010608071B=02100F7055528315,000106080D24=02100F7055528315,000106082C2E2C32=02100F7055528315,000106082C2E2B2C=02100F7055528315,00010608032C201402=02100F7055528315,00010608032C20391C=02100F7055528315,7A7D000106031F10=02100F705552831538,2F8026000106082D06=02100F70555283157A,2F802600010608290D=02100F20,7A702C000106032416=02100F20,616D000106037A702C34=02100F20292C,7A70000106031C2A=02100F528315,7A7055000106032234=02100F528315,7A7055000106032A21=02100F55528315,000106037A703313=02100F55528315,000106037A700509=02100F55528315,000106037A702D03=02100F55528315,000106037A700613=02100F55528315,000106037A702235=02100F55528315,000106037A70391D=02100F55528315,000106037A70100F=02100F55528315,000106087A702C111B=02100F55528315,000106087A702C2E2916=02100F55528315,7A2C71707D000106030430=02100F55528315,7A2C71707D000106033B32=02100F55528315,7A2C71707D000106081903=02100F55528315,7A702C2E000106033A27=02100F55528315,7A702C000106030931=02100F55528315,7A702C000106030C1C=02100F55528315,7A70000106032735=02100F555283152C8071,000106037A700B13=02100F555283152C807138,000106037A701517=02100F555283152C807138,000106037A702917=02100F555283156C,000106037A703136=550F522010,7A2C71707D01022A1E=550F715220,7A702C2E1333=550F715220,7A702C2E000106081405=556C,000106087A702C2E0433=556C,7A70000106083B38=556C0F197120,7A702C2E1E01=556C0F19712001,7A702C2E190B=556C000108,7A70230B=556C000108,7A702C2E1A0F=556C0001082C807115295256,7A701830=556C0008,7A2C71707D01023814=556C100F295220,7A2C71707D03082F=556C100F295220,7A702C0C1D=556C100F295220,7A702C2E00010603021D=556C100F295220,7A70000106031121=556C100F2952202C,7A701835=556C100F2952202C80713815,000106037A703B30=556C100F29522002,000106037A70290C=556C100F29522002,7A70000106030930=556C100F2952200238,000106037A702B27=556C100F2952200102,7A702C2E3812=556C08,000106037A701012=556C08,000106037A701621=556C08,7A702C2E000106033209=556C08,7A702C2E000106032021=556C082C807138152952,000106037A700009=556C082C807138152952,000106037A702A1D=807138152952000170100F,032C200A05=807138152952000170100F,032C20273B=8071381529527A706C550F,032C203423=80711529525600010870556C100F,032C201511=80711529525600010870556C100F,032C20183B=80711529525600010870556C100F,032C203311=010F2C80093829206C55,7A702B29=010F2C80093829206C55,7A70616D3A25=010F2C09382920,7A70550825=010F2C093829207A6C5570,201E=010F09382920,7A702C2E352E=010670100F2C71522000,1C28=010670100F7152207A6C55,2C2E2E11=0106100F7152,7A70032C203205=0106100F71526C,7A70032C202A19=0102290F20,7A702C2E2A1F=010270290F2C207A6C55,2413=010270290F2C207A6C55,0437=010270290F2C207A6C55,0935=010270550F,032C201B18=010270550F20,2B24=010270550F20,2F80261906=010270550F20,2C2E2732=010270550F20,2C2E071A=010270550F20,2C2E3700=010270550F20,7A7D1724=010270550F203800,2F80263921=010270550F202C29,416D290F=010270550F202C807138152952,1619=010270550F202C8071381529527A,3207=010270550F202C80711529525600,0829=010270550F2000,060D=010270550F2000,0001=010270550F2000,2736=010270550F207A,1B1E=010270550F207A,2C2E140B=010270550F207A6C,0114=010270550F7A6C,032C202C3B=010270550F7A6C,032C20201F=0102550F20,7A702C1A13=0102550F20,7A702C3637=0102550F20,7A702C280B=0102550F20,7A702C223B=0102550F20,7A702C032D04=0102100F2C29528320,7A701409=0102100F2C29528320,7A70552307=0102100F2C2952832000,0005=0102100F295283,032C207A700A00=0102100F2955528320,7A2C71707D082D=0102100F2955528320,7A702C2E2809=0102100F295552832000,7A702C2E2B2D=0102100F7055528315,021E=0102100F7055528315,0C20=0102100F7055528315,2F80263420=0102100F7055528315,2F80261510=0102100F7055528315,2F80262E10=0102100F7055528315,2F80262806=0102100F7055528315,2F80263134=0102100F7055528315,2F80261D38=0102100F7055528315,2F8026251A=0102100F7055528315,2F80263A2A=0102100F7055528315,2F80267A7D1120=0102100F7055528315,2F80267A7D0824=0102100F7055528315,2C2E1E00=0102100F7055528315,2C2E7A2F1D=0102100F7055528315,032C200A06=0102100F7055528315,7A7D2C2E1C2E=0102100F70555283153800,2F80261832=0102100F70555283153800,2C2E280A=0102100F70555283153800,2C2E320A=0102100F705552831538007A,2738=0102100F705552831538007A6C,2F80260720=0102100F705552831538007A6C,2F8026032B=0102100F70555283152C292000,1907=0102100F70555283152C292000,3703=0102100F70555283152C292000,2739=0102100F70555283152C29207A,251B=0102100F70555283152C29207A,2B25=0102100F70555283152C29207A6C,1331=0102100F70555283152C207A,0D29=0102100F70555283152C80717A,1B1D=0102100F70555283158071,032C200D2D=0102100F705552831500,1725=0102100F705552831500,352D=0102100F705552831500,0C19=0102100F705552831500,150F=0102100F705552831500,3025=0102100F705552831500,0F07=0102100F705552831500,1E09=0102100F705552831500,251F=0102100F705552831500,010C=0102100F705552831500,2F80261A10=0102100F705552831500,2F80261016=0102100F705552831500,2F80260934=0102100F705552831500,2F80262910=0102100F705552831500,2F80267A7D1A14=0102100F705552831500,2C2E2304=0102100F705552831500,7A7D3421=0102100F7055528315002C2920,212F=0102100F7055528315002C807138,111F=0102100F7055528315002C807138,3135=0102100F7055528315008071,032C200828=0102100F7055528315007A6C,2022=0102100F70555283156C,7A7D140A=0102100F70555283156C,7A7D2C2E2127=0102100F70555283157A,1618=0102100F70555283157A,0B0F=0102100F70555283157A,1836=0102100F70555283157A,172E=0102100F70555283157A,2F8026352A=0102100F70555283157A,2F80262B2E=0102100F70555283157A,2F8026082A=0102100F70555283157A,2F80262306=0102100F70555283157A,2F80263702=0102100F70555283157A,2F80262C38=0102100F70555283157A,2F80261E06=0102100F70555283157A,2F80261B1A=0102100F70555283157A,2F8026032A=0102100F70555283157A,2C2E1F14=0102100F70555283157A,2C2E3810=0102100F70555283157A,2C2E262C=0102100F70555283157A29,032C20201A=0102100F70555283157A00,2F80260A02=0102100F70555283157A00,2F80261838=0102100F70555283157A6C,2F80260E34=0102100F70555283157A6C,2F80260438=0102100F70555283157A6C,2C2E2F1A=0102100F70555283157A6C,2C2E2305=0102100F528315,7A70553525=0102100F5283152C8071,7A70550723=0102100F528315807138,7A7055032C200D2A=0102100F55528315,2F80267A2C71707D3316=0102100F55528315,2F80267A2C71707D1224=0102100F55528315,2F80267A2C71707D212E=0102100F55528315,2F80267A700616=0102100F55528315,2F80267A70380C=0102100F55528315,2F80267A700434=0102100F55528315,2F80267A702A18=0102100F55528315,7A2C71707D2628=0102100F55528315,7A2C71707D100C=0102100F55528315,7A2C71707D2F80261729=0102100F55528315,7A701F15=0102100F55528315,7A70240E=0102100F55528315,7A703632=0102100F55528315,7A701339=0102100F55528315,7A700115=0102100F55528315,7A702C2C37=0102100F55528315,7A702C320B=0102100F55528315,7A702C3206=0102100F55528315,7A702C2E2238=0102100F55528315,616D2F80267A2C71707D3816=0102100F555283153800,2F80267A701406=0102100F555283153800,2F80267A700111=0102100F555283152C8071,7A700501=0102100F555283152C8071,7A70370B=0102100F555283152C807138,7A703B37=0102100F555283152C80713800,7A701C2F=0102100F555283152920,7A702C240F=0102100F555283152920,7A702C0A03=0102100F555283152920,7A702C0221=0102100F55528315292000,7A702C2E3317=0102100F55528315292000,7A702C2E3634=0102100F5552831500,2F80267A2C71707D3028=0102100F5552831500,7A2C71707D111A=0102100F5552831500,7A2C71707D071E=0102100F5552831500,7A2C71707D2913=0102100F5552831500,7A702F19=0102100F5552831500,7A702301=0102100F5552831500,7A702C3919=0102100F5552831500,7A702C3B33=0102100F5552831500,7A702C2E0223=0102100F5552831500,7A702C03032F=0102100F55528315006C,7A702C2E262E=0102100F555283156C,2F80267A70032E=0102100F555283156C,7A2C71707D0F0B=0102100F555283156C,7A701D3B=0102100F555283156C,7A702C2E030116=01100F1571292C20,2F80267A703200=01100F1571292C20,7A7055370A=01100F1571292C2000,7A701B22=01100F1571292C2000,7A701E04=01100F1571292C2000,416D1336=01100F1571292C20007A70556C,391A=01100F1571292C20007A6C7055,1C24=01100F1571292C207A7055,2F80260D2E=01100F15712920,7A702C2E2D0A=01100F15712920,7A702C2E2800=01100F15712920027A7055,2C2E251E=01100F157129207A70556C,2C2E1228=01100F157129207A70556C,416D2C2E050A=01100F5220,7A70550000=01100F5220,616D2624=01100F5220,616D2F80267A702804=01100F5220006C,7A70550F06=01100F52207A70556C,2C2E2F1E=01100F52207A70556C,2C2E1014=01100F527A70556C,032C20161E=01100F712920,7A702C2E0A0A=01100F71522C2920,616D161C=0070100F292C20,01020F04=0006100F7020,7A7D01026D183A=0006100F7020,616D0102201C=0006100F20,7A2C71707D01026D1D37=000170100F292C20,2F18=000170100F292C802038,161D=00014B0F,032C201338=00014B0F2C2002,2F80261728=00014B0F20,2C2E0F0A=00014B0F20,7A2C71707D1833=00014B0F20,7A702C1407=00014B0F20,7A702C1401=0001060838,2C2E1123=0001060838,416D032C202019=000106082C38,2C31=000106082C38,391F=000106082C38,2523=000106082C38,7A70416D1C29=000106082C38020F71295283,3811=000106082C38020F71295283,7A700937=000106082C386C550F197120,7A700117=00010252100F29202C7A706C55,1337=00010206700F202C807138152952,3A2E=00010206100F7020,616D0610=00010206100F20,7A2C71707D0328=00010206100F20,7A700F01=00010206100F20,7A702C3310=00010206100F20,7A702C2E3139=0001100F298020,7A702C2625=00010870556C100F2C20,1909=00010870556C100F2C20,391E=00010870556C100F2C20,2124=00010870556C100F2C20,2F80267A7D0F00=00010870556C100F2C2038,2D09=00010870556C100F2C2002,0500=00010870556C100F2C207A,2C39=00010870556C100F2C207A,2518=00010870556C100F2C207A,0B0C=00010870556C100F2C207A,2F80262911=00010870556C100F7A,032C200007=000108556C100F2C2029,7A700A07=000108556C100F2C2029,7A701332=000108556C100F20,2C2E7A70100D=000108556C100F20,7A702C2E2239=000108556C100F20,7A702C2E0A01=000108556C100F20,7A702C2E380D=0001086C100F2C20,7A70551D36=0001086C100F2C20,7A70552F1F=000108100F70552920,010D=000108100F70552920,616D0507=000108100F705529202C80713815,0B0D=000108100F705529202C8071157A,3133=000108100F7055292002,2309=000108100F7055292002,416D0002=000108100F705529207A,2F80263202=000108100F705529207A,2F80263638=000108100F705529207A,2C2E2A1A=000108100F705529207A38,2F80262414=000108100F705529207A6C,2C2E2E14=000108100F552920,7A2C71707D1404=000108100F552920,7A2C71707D0B17=000108100F552920,7A70330D=000108100F552920,7A702C172F=000108100F552920,7A702C2E3707=000108100F5529206C,616D7A702C2E302E=6C55700F197120,2C2E7A7D0C22=6C55700F197120,7A7D01026D1E02=6C550F297120,000106037A703923=6C550F297120,7A702C2E03230A=6C550F1920,7A2C71707D240C=6C550F19200210,7A2C71707D000106031A16=6C550F197120,000106037A701513=6C550F197120,7A703A2B=6C550F197120,7A701837=6C550F197120,7A702F23=6C550F197120,7A702F22=6C550F197120,7A702D07=6C550F197120,7A702C2E3922=6C550F197120,7A700102093A=6C550F197120,7A70000106031B19=6C550F197120,616D7A70071F=6C550F197120,616D7A702C2E212B=6C550F197120,616D7A702C2E000106032734=6C550F197120292C,000106037A700325=6C550F1971200001020610,7A702C122B=6C550F19712008,000106037A702411=6C100F2952,7A7055032C20010E=100F2C29528320,01023704=100F2C29528320,0102363A=100F292C206C55,000106037A702B26=100F2920,7A2C71707D01026D302C=100F7055528315,01021E08=100F7055528315,01022730=100F7055528315,01021512=100F7055528315,010200352C=100F7055528315,7A7D01026D2F1C=100F7055528315,7A7D01026D0222=100F70555283153800,01026D2412=100F70555283157A,01022230=100F70555283157A,0102060E=100F70555283157A6C,01022C3A=100F70555283157A6C,01026D1F12=100F1571292C20,01026D3B36=100F1571292C20,01026D1516=100F1571292C20,000106037A702302=100F1571292C20,000106037A701D32=100F1571292C20,000106082F8026330E=100F1571292C20,000106086D2A1C=100F1571292C20,7A7001026D313A=100F1571292C20,7A7000010603341C=100F1571292C20,416D7A70000106032B2A=100F1571292C2002,000106037A700326=100F1571292C20556C,000106037A70273A=100F1571292C2000,01026D0722=100F1571292C2000,01026D2E0C=100F1571292C206C55,000106037A701408=100F1571292C207A706C55,01022020=100F1571292C207A706C55,000106081726=100F1571292C207A6C7055,0102290E=100F1571292C207A6C7055,000106080932=100F1571292C207A6C7055,000106080D26=100F52,00010608032C20100E=100F5283153800,01027A70550B16=100F5220,2F8026000106081122=100F5220,6D010200133A=100F5220,01026D1F16=100F5220,000106037A703132=100F5220,000106083B3A=100F5220,000106082522=100F5220,00010608190A=100F5220,000106082C2E021C=100F5220,7A70000106030936=100F52202C,01026D3A2C=100F52206C55,01027A701A0C=100F52206C55,000106037A700E30=100F52206C55,000106037A700A08=100F52207A706C55,000106083204=100F52207A6C5570,01026D0B0E=100F55528315,01027A2C71707D0004=100F55528315,7A2C71707D01026D1D3A=100F55528315,7A2C71707D01026D3418=100F5552831500,7A2C71707D0102201D=100F712920,7A702C2E00010608030E36=100F71522C2920,01023635=100F715229,00010608032C20021B=7A70550F2C715220,1900=7A70550F715220,2C2E0A09=7A70556C,00010608172C=7A70556C,00010608032C200B14=7A70556C,00010608032C202914=7A70556C0F197120,2C2E0938=7A70556C0F197120,000106082C2E111E=7A70556C000108,0502=7A70556C000108,2F80260D2F=7A70556C0001082C807138152952,2D0B=7A70556C0001082C807138152952,3633=7A70556C0001082C807115295256,0C18=7A70556C0008,01020218=7A70556C0008,0102302F=7A70556C100F295220,000106082C35=7A70556C100F295220,000106081E0B=7A70556C100F2952202C807115,3130=7A70556C100F29522002,000106080506=7A70556C100F29522001,2C2E330F=7A70556C100F29522001022C8071,010F=7A70556C100F295220010200,0435=7A70556C100F295280713815,032C200614=7A70556C100F295201,032C20122C=7A70556C100F29520102,032C203B39=7A706C550F297120,0F05=7A706C550F297102,032C200D25=7A706C550F19712001,616D2233=7A706C550F19712000010608,2626=7A6C70550F197120,01021A17=7A6C70550F197120,00010608262F=7A6C70550F1971202C29,000106083529=7A6C70550F19712002,616D000106082D08=7A6C70550F197120103800,0102341F=7A6C55700F197120,2C2E172B=082C38,7A7055000106030D27=082C38,7A70000106030827=08556C100F2C20,000106037A702803=08556C100F2C20,000106037A701013=08556C100F2C20,7A7000010603262B=08556C100F2C20,7A7000010603240D=08556C100F2C20,7A70000106033631=08556C100F2C20,7A70000106030431=08556C100F20,7A702C2E000106031D35=08100F552920,000106037A701335=08100F552920,000106037A700612=08100F55292038,000106037A70";r.SHEN_SHA=["{s.none}","{sn.tianEn}","{sn.mingFei}","{sn.muCang}","{sn.buJiang}","{sn.siXiang}","{sn.mingFeiDui}","{sn.wuHe}","{sn.sanHe}","{sn.chuShen}","{sn.yueDe}","{sn.yueKong}","{sn.yueDeHe}","{sn.yueEn}","{sn.shiYin}","{sn.wuFu}","{sn.shengQi}","{sn.jinKui}","{sn.xiangRi}","{sn.yinDe}","{sn.liuHe}","{sn.yiHou}","{sn.qingLong}","{sn.xuShi}","{sn.mingTang}","{sn.wangRi}","{sn.yaoAn}","{sn.guanRi}","{sn.jiQi}","{sn.fuDe}","{sn.liuYi}","{sn.jinTang}","{sn.baoGuang}","{sn.minRi}","{sn.linRi}","{sn.tianMa}","{sn.jingAn}","{sn.puHu}","{sn.yiMa}","{sn.tianHou}","{sn.yangDe}","{sn.tianXi}","{sn.tianYi}","{sn.siMing}","{sn.shengXin}","{sn.yuYu}","{sn.shouRi}","{sn.shiDe}","{sn.jieShen}","{sn.shiYang}","{sn.tianCang}","{sn.tianWu}","{sn.yuTang}","{sn.fuSheng}","{sn.tianDe}","{sn.tianDeHe}","{sn.tianYuan}","{sn.tianShe}","{sn.tianFu}","{sn.yinShen}","{sn.jieChu}","{sn.wuXu}","{sn.wuLi}","{sn.chongRi}","{sn.fuRi}","{sn.xueZhi}","{sn.tianZei}","{sn.tuFu}","{sn.youHuo}","{sn.baiHu}","{sn.xiaoHao}","{sn.zhiSi}","{sn.heKui}","{sn.jieSha}","{sn.yueSha}","{sn.yueJian}","{sn.wangWang}","{sn.daShi}","{sn.daBai}","{sn.xianChi}","{sn.yanDui}","{sn.zhaoYao}","{sn.jiuKan}","{sn.jiuJiao}","{sn.tianGang}","{sn.siShen}","{sn.yueHai}","{sn.siQi}","{sn.yuePo}","{sn.daHao}","{sn.tianLao}","{sn.yuanWu}","{sn.yueYan}","{sn.yueXu}","{sn.guiJi}","{sn.xiaoShi}","{sn.tianXing}","{sn.zhuQue}","{sn.jiuKong}","{sn.tianLi}","{sn.diHuo}","{sn.fourHit}","{sn.daSha}","{sn.gouChen}","{sn.baZhuan}","{sn.zaiSha}","{sn.tianHuo}","{sn.xueJi}","{sn.tuHu}","{sn.yueXing}","{sn.chuShuiLong}","{sn.diNang}","{sn.baFeng}","{sn.siFei}","{sn.siJi}","{sn.siQiong}","{sn.wuMu}","{sn.yinCuo}","{sn.siHao}","{sn.yangCuo}","{sn.guChen}","{sn.xiaoHui}","{sn.daHui}","{sn.baLong}","{sn.qiNiao}","{sn.jiuHu}","{sn.liuShe}","{sn.tianGou}","{sn.xingHen}","{sn.liaoLi}","{sn.suiBo}","{sn.zhuZhen}","{sn.sanSang}","{sn.sanYin}","{sn.yinDaoChongYang}","{sn.yinWei}","{sn.yinYangJiaoPo}","{sn.yinYangJuCuo}","{sn.yinYangJiChong}","{sn.guiKu}","{sn.danYin}","{sn.jueYin}","{sn.chunYang}","{sn.yangCuoYinChong}","{sn.qiFu}","{sn.chengRi}","{sn.guYang}","{sn.jueYang}","{sn.chunYin}","{sn.daTui}","{sn.siLi}","{sn.yangPoYinChong}"];r.DAY_SHEN_SHA=[";000002300F14156869717A3F;01001617495C40413C425D6A;0209000C041831031906054A5E6B4B5F;033500041A1B032C06054C4D4E60;04002D321C1D1E104F50615152;05111F53546C55433C3E;062E200721220D01566E44;070B2333242F45;08360A2526242F080157583D59;091234080162463C3D5A;0A270728292A5B6364653F79;0B0237130E2B4748727A3E66;0C09020C04300F0314150568696D;0D3504031617495C40413C6F425D6A;0E38183119064A5E6B4B5F;0F001A1B032C064C4D4E60;10002D321C1D1E104F50615152;110B00111F53546C55433C3E;12360A002E200721220D015644;13002333456D;142526242F080157583F3D59;15001234080162463C3D5A;16090004270728292A5B636465;17350204130E032B47483E66;1802300F14156869;19031617495C40413C425D6A;1A1831031906054A5E6B4B5F;1B0B1A1B032C06054C4D4E;1C360A2D321C1D1E104F50615152;1D111F53546C55433C3E;1E2E200721220D01563F44;1F23334573;20090C042526242F080157583D;2135041234080162463C3D5A;22270728292A5B636465;2302130E032B47483E66;2402300F0314150568696E;250B031617495C40413C425D6A;26360A18311906054A5E6B4B5F;271A1B2C06054C4D4E60;282D321C1D1E104F506151523F;29111F53546C55433C3E;2A090C042E200721220D015644;2B350423334567;2C2526242F0857583D59;2D001234080162463C3D5A;2E00270728292A5B63646574;2F0B0002130E032B47483E66;30360A0002300F141505686975;31001617495C40413C425D6A676D;3218311906054A5E6B4B3F675F76;331A1B2C06054C4D4E60;34090C042D321C1D1E104F50615152;353504111F53546C55433C6F3E;362E200721220D5644;3723334567;382526242F08015758703D6759;390B123408016246703C3D5A84;3A360A270728292A5B636465;3B02130E2B47483E66;",";00090002272A536C4C4D4E41717A;0100300F3103233C6151523F66;020004180E032406150543405D;03000C041A1D340617054A5E6B4F50;04002D1B555F;050B112526321C2B3C42654B3E60;060A2E2014100547546246;0712070D161F566A;0822192F0148453D44;092C083301575868695B633C3D;0A0937131E495C6459;0B020721282903727A3F3E5A;0C020427032A05536C4C4D4E416D;0D0C04300F03233C6F61515266;0E38180E24061543405D;0F0B001A1D3406174A5E6B4F5078;100A002D1B555F;1100112526321C2B3C42654B3E60;12002E2014100147546246;130012070D161F566A6D;140922192F080148453D44;152C083301575868695B633C3F3D44;160413031E495C6459;17020C0407212829033E5A;1802272A536C4C4D4E41;190B300F3103233C61515266;1A0A180E032406150543405D;1B1A1D340617014A5E6B4F50;1C2D1B555F;1D112526321C2B3C42654B3E60;1E092E2014100147546246;1F12070D161F56736E6A3F;200422192F080148453D44;210C042C083301575868695B633C3D;22131E495C6459;230B0207212829033E5A;240A0227032A05536C4C4D4E41;25300F31233C61515266;26180E2406150543405D;271A1D340617054A5E6B4F50;28092D1B555F;29112526321C2B3C42654B3F3E60;2A042E2014100147546246;2B0C0412070D161F566A67;2C22192F0848453D44;2D0B002C083301575868695B633C3D85;2E0A0013031E495C6459;2F0002072128293E5A;300002272A05536C4C4D4E4175;3100300F31233C6151526E676D66;3209180E2406150543405D;331A1D340617054A5E6B4F503F76;34042D1B555F;350C04112526321C2B3C6F42654B3E60;362E20141047546246;370B12070D161F566A67;380A22192F08014845703D6744;392C083301575868695B63703C3D74;3A131E495C6459;3B02072128293E5A;",";00000207282931032B717A6E5D59;01000314473C5A;020A000427182526300F1D16062A054F506A;03360B00041A1906055562464066;04002D2C154A5E6B6C733F788B;0512111B0E1E17483C3E;060C2E20321C016869655F;0753544960;08350907210D230810015B63564B3D77;091324081F014C4D4E453C423D;0A2203342F57586461515244;0B02032C4341727A3E;0C0A020407282931032B055D6D59;0D360B040314473C6F5A;0E3827182526300F1D16062A4F506A3F;0F001A19065562464066;10000C2D2C154A5E6B6C86;110012111B0E1E17483C3E;123509002E20321C0168696E655F;13005354495C6D60;1407210D230810015B63564B3D7F;1537130324081F014C4D4E453C423D;160A042203342F57586461515244;17360B0204033343413E;1802072829312B5D3F59;190314473C5A;1A0C27182526300F1D16062A054F506A;1B1A1906055562464066;1C35092D2C154A5E6B6C;1D12111B0E1E17483C3E;1E2E20321C016869655F;1F5354495C60;200A0407210D230810015B63564B3D80;21360B04130324081F014C4D4E453C423D;2222342F5758646151523F44;2302033343413E;24020C072829312B055D59;2514473C5A;26120927182526300F1D16062A054F506A;271A1906055562464066;282D2C154A5E6B6C76;2912111B0E1E17483C3E;2A0A042E20321C016869655F;2B360B045354495C6760;2C07210D2308105B63564B3F3D77;2D00130324081F014C4D4E453C423D;2E000C22342F57586461515244;2F00023343413E;3035090002072829312B05755D59;310014473C676D5A;3227182526300F1D16062A054F506A67;331A1906055562464066;340A042D2C154A5E6B6C;35360B0412111B0E1E17483C6F3E;362E20321C6869653F5F;375354495C6760;380C07210D230810015B6356704B3D677774;391324081F014C4D4E45703C423D;3A350922342F57586461515244;3B023343413E;",";000A00220362463C44;010B00072128291D334F50645D;02360002230605534855423F59;03000212300F24060568695A;0400042E27342A495C403C8C;050C04184A5E6B3E66788D76;06091A1B2B15014C4D4E;07352D321C14175B636151526577;0811130E16080147546C433C6A3D5F;0920070D190801563D60;0A0A032C2F104541;0B0B252631031E1F57584B3E;0C362203056246717B3C3F6D44;0D072128291D334F50645D;0E020423065348554259;0F00020C0412300F240668696E5A;1009002E12342A495C403C;113500184A5E6B3E66;12001A1B2B15014C4D4E;13002D321C14175B63615152656D77;140A11130E0316080147546C433C6F6A3D5F;150B20070D03190801563D60;1636032C2F104541733F;17252631031E1F5758727B4B3E;1804220362463C44;190C04072128291D334F50645D;1A09022306055348554259;1B3502120D0F24060568695A;1C2E27342A495C403C;1D184A5E6B3E66;1E0A381A1B2B15014C4D4E;1F0B2D321C14175B63615152657F;20363711130E0316080147546C433C6A3F3D5F;2120070D03190801563D60;2204032C2F104541;230C042526311E1F57584B3E;2409220562463C44;2535072128291D334F50645D;26022306055348554259;270212300F24060568695A;280A2E27342A495C403C6F;290B184A5E6B3E66;2A361A1B2B15014C4D4E3F81;2B2D321C14175B6361515265678074;2C0411130E03160847546C433C6A3D5F;2D000C0420070D190801566E3D60;2E09002C2F104541;2F35002526311E1F57584B3E;300022056246703C44;3100072128291D334F50645D676D;320A02230605534855426759;330B02120D0F2406056869755A;34362E27342A495C403C3F;35184A5E6B3E6676;36041A1B2B154C4D4E81;370C042D321C14175B6361515265677774;380911130E16080147546C433C6A3D675F;393520070D190801563D60;3A2C2F104541;3B2526311E1F5758704B3E87;",";00001D2F10575868694F503C;0100122B1F495C5564;0209000207222829140605655D44;03000216063305474C4D4E51526A4B3F;04000C042E300F193C6159;0504182C43403E5A;06271A1E2A014A5E6B6C5B6342;070B2D1B1366;080A112526321C0815013C3D;0920032308170153546246413D;0A07210D310324565F;0B0E033448453E60;0C091D2F1005575868694F50717B3C6D;0D122B1F495C553F;0E020C04072228291406655D44;0F000204160633474C4D4E51526A4B;10002E300F193C6159;110B00182C43403E5A;120A00271A1E2A014A5E6B6C5B6342;13002D1B13036D66;14112526321C030815013C6F3D;1520032308170153546246413D;160907210D31032456735F;170E344845727B3F3E60;180C041D2F10575868694F503C;1904122B1F495C5564;1A0207222829140605655D44;1B0B0216063305474C4D4E51526A4B;1C0A2E300F193C6159;1D182C43403E5A;1E38271A1E2A014A5E6B6C5B6342;1F2D1B130366;2009112526321C030815013C3D;21202308170153546246413F3D;220C0407210D3103565F;23040E3448453E60;241D2F1005575868694F503C;250B122B1F495C5564;260A0207222829140605655D44;270216063305474C4D4E51526A4B;282E300F193C6F616E59;29182C43403E5A;2A09271A1E2A014A5E6B6C5B63427988;2B372D1B133F6766;2C0C04112526321C0308153C3D;2D0004202308170153546246413D;2E0007210D3124565F;2F0B000E3448453E60;300A001D2F1005575868694F50703C89;3100122B1F495C5564676D;320207222829140605655D6744;330216063305474C4D4E7551526A4B;34092E300F193C6159;35182C43403F3E5A;360904271A1E2A4A5E6B6C5B634278;37042D1B136766;38112526321C0815013C3D67;390B202308170153546246413D;3A0A07210D3124566E5F;3B0E03344845703E60;",";003509001E2F554C4D4E453C51525D5F;010057586C646160;0200020E06100543;0300020721282923061F0565;0400042E2224533C7344;05360B04182526300F34335B633F3E74;060A1A13016246404B59;070C2D2B4A5E6B5A;0827111B0314082A0148413C3D;0920321C310316080148413C3D;0A35090319154754495C42;0B12070D1D2C174F50563E;0C1E2F05554C4D4E45717B3C51525D6D5F;0D57586C646160;0E02040E061043;0F360B0002040721282923061F653F;100A002E2224533C44;11000C182526300F34335B633E;12001A1303016246404B59;13002D032B4A5E6B6D5A;14350927111B0314082A0148413C6F3D;1520321C310316080168696A3D66;1619154754495C426E;1712070D1D2C174F5056727B3E;18041E2F554C4D4E453C51525D5F;19360B0457586C64613F60;1A0A020E06100543;1B020C0721282923061F0565;1C2E2224533C44;1D182526300F34335B633E;1E3509381A1303016246404B59;1F2D032B4A5E6B5A;2027111B14082A0148413C3D;2120321C3116080168696A3D66;22040319154754495C42;23360B0412070D1D2C174F50563F3E;240A1E2F05554C4D4E453C51525D5F;250C57586C646160;26020E06100543;27020721282923061F0565;2835092E2224533C6F44;29182526300F34335B633E;2A1A13016246404B5982;2B2D2B4A5E6B675A76;2C0427111B0314082A48413C3D;2D360B000420321C3116080168696A3F3D66;2E0A0019154754495C42;2F000C12070D1D2C174F50563E;30001E2F05554C4D4E45703C51525D5F;310057586C6461676D608E;323509020E0610054367;33020721282923061F057565;342E2224533C6E44;35182526300F34335B633E7974;3637041A13036246404B5982;37360B042D2B4A5E6B3F675A76;380A27111B14082A0148413C3D67;390C20321C3116080168696A3D66;3A0319154754495C42;3B12070D1D2C174F5056703E;",";0000302007210D341556;01000217455D;020A0025262B2F060557586C5F;030B001406056246603C8F;0436000207282916105B6364656A;0537130E191F47483E;0622300F2C0168693F44;07021E33495C40413C;08090C04184A5E423D59;093504121A1B0308014C4D4E51524B3D5A;0A02272D321C1D232A4F507E61;0B1124535455433E66;0C0A2E2007210D341505566D;0D0B0217455D;0E3625262B2F0657586C;0F00140662463C4260;10000207282916105B6364656A3F79;1100130E191F47483E;1209350C0422300F032C01686944;1335000204031E33495C40413C6D;1418310308014A5E6B3D59;15121A1B0308014C4D4E51524B3D5A;160A02272D321C1D232A4F507E61;170B1124535455433C6F6E3E66;18362E2007210D341556;190217455D;1A25262B060557586C3F5F;1B14060562463C4260;1C09020C0407282916105B6364656A;1D3504130E03191F47483E;1E22300F032C01686944;1F02031E495C40413C;200A183108014A5E6B3D59;210B121A1B08014C4D4E51524B3D5A;223602272D321C1D232A4F507E61;231124535455433C3E66;242E2007210D34150556717C3F;25021745735D;26090C0425262B2F060557586C5F;27350414060562463C4260;280207282916105B6364656A74;29130E03191F47483E;2A0A22300F2C01686944;2B0B021E33495C40413C6F67;2C36381831034A5E6B3D59;2D00121A1B08014C4D4E51524B3D5A;2E0002272D321C1D232A4F507E613F;2F00112453545543727C3C3E66;3009000C042E2007210D34150556;313500020417455D676D;3225262B2F060557586C70675F;331406056246703C426084;340A0207282916105B6364656A;350B130E191F47486E3E;363622300F032C7544;37021E33495C40413C67;38183108014A5E6B3F3D675976;39121A1B08014C4D4E51524B3D5A;3A09020C04272D321C1D232A4F507E61;3B35041124535455433C3E66;",";000A002E27202C2A475462464B;010B0002070D1E5666;02002F06150548456E5D;0300061705575868695B633C;040002130323495C645F;0507212829249060;0609341001534C4D4E415152;070212300F31031F3C61423F;080418220E032B080143403D44;090C041A1D14080833014A5E6B6C4F503D;0A0A022D1B16556A59;0B0B112526321C193C653E5A;0C2E27202C2A05475462464B6D;0D02070D1E5666;0E2F061548455D;0F000617575868695B633C85;10090002371323495C645F;11000721282903243F3E60;12000403341001534C4D4E415152;1300020C0412300F31031F3C61426D;140A18220E032B080143403D44;150B1A1D140833014A5E6B6C4F503D;16022D1B16556A59;17112526321C193C6F653E5A;182E27202C2A475462464B;1902070D1E5666;1A092F06150548455D;1B061705575868695B633C3F79;1C0204130323495C645F;1D0C040721282903243E60;1E0A03341001534C4D4E415152;1F0B0227300F311F3C6142;2018220E2B080143406E3D44;211A1D140833014A5E6B6C4F503D;22022D1B16556A59;23112526321C193C653E5A;24092E27202C2A0547546246717C4B;2502070D1E56733F66;26042F06150548455D;270C04061705575868695B633C;280A02130323495C645F;290B07212829243E60;2A341001534C4D4E415152;2B0212300F311F3C6F614267;2C3818220E032B0843403D44;2D001A1D140833014A5E6B5B4F503D78;2E0900022D1B16556A59;2F00112526321C19727C3C653F3E5A;3000042E27202C2A05475462464B;3100020C04070D1E56676D66;320A2F0615054845705D67;330B061705575868695B63703C74;34021323495C645F;3507212829243E60;36033410534C4D4E41755152;370212300F311F3C614267;380918220E2B080143403D6744;391A1D140833014A5E6B6C4F503F3D76;3A02042D1B16556A59;3B0C04112526321C193C653E5A;",";00002E20391C246869655D59;010002345354495C5A;023509002707210D062A055B6356515277;0300132B06054C4D4E453C66;04000203142F1557586473614B3F;0512161743416A3E;060C072829310319015F;07360B02032C476C3C6E60;080A04182526300F1D1E0810014F503D;09041A081F01556246403D;0A022D224A5E6B4486;0B111B0E2333483C423E;0C35092E20321C24056869655D6D59;0D02345354495C5A;0E2707210D062A5B635651523F77;0F00132B064C4D4E453C66;1000020C03142F15575864614B;11360B001203161743416A3E;120A0004072829310319015F;13000204032C476C3C6D60;14182526300F1D1E0810014F503D;151A081F01556246403D;163509022D224A5E6B44;17111B0E2333483C6F423E;182E20321C246869655D3F59;1902345354495C5A;1A0C2707210D062A055B635651527F;1B360B3713032B06054C4D4E453C66;1C0A020403142F15575864614B;1D041203161743416A3E;1E0728293119015F;1F022C476C3C60;203509182526300F1D1E08104F503D;211A081F01556246403D;22022D224A5E6B3F447891;23111B0E2333483C423E;240C2E20321C24056869717C655D59;25360B021C5354495C6E5A;260A042707210D062A055B6356515280;270413032B06054C4D4E453C66;2802142F15575864614B;2912161743416A3E;2A35090728293119015F;2B022C476C3C6F6760;2C38182526300F1D1E08104F503F3D;2D001A081F01556246403D;2E0002092D224A5E6B4476;2F360B00111B0E233348727C3C423E;300A00042E20321C24056869655D59;31000204345354495C676D5A;322707210D062A055B6356705152677774;33132B06054C4D4E45703C66;34350902142F15575864614B;3512161743416A3E;36072829310319753F5F;37022C476C3C6760;380C182526300F1D1E0810014F503D67;39360B1A081F01556246403D;3A0A02042D224A5E6B44;3B04111B0E2333483C423E;",";00090038041A221B194C4D4E44;0135000C042D321C2C335B6361655D77;02002E11130E1E06054754433C59;03001220070D0605565A;0400272F2A454142;050B252631032357583E66;06360A0324150162463C;07072128291D34174F50644B;080208015348553F3D5F;0902300F2B080168693D60;0A09041410495C403C6F;0B35090418161F4A5E6B6C5152403E;0C1A221B19054C4D4E6D44;0D2D321C2C335B6361655D77;0E2E11130E1E064754433C6E59;0F0B351220070D0306565A;10360A0027032F2A454142;1100252631032357583E66;12000324150162463C3F;1300072128291D34174F50644B6D;1409020408015348553D5F;1535020C04300F2B080168693D60;161410495C403C;1718161F4A5E6B6C51526A3E;181A221B194C4D4E4481;190B0A2E11130E031E06054754433C59;1A360A2E11130E031E06054754433C59;1B1220070D030605565A;1C27032F2A454173423F;1D252631032357583E66;1E090424150162463C;1F350C04072128291D34174F50644B;200208015348553D5F;2102300F2B080168693D60;221410495C403C92;230B18161F4A5E6B6C51526A3E7893;24360A1A221B19054C4D4E44;252D321C2C335B6361655D7F;26372E11130E031E06054754433C3F59;271220070D030605565A;280904272F2A454142;29350C042526312357583E66;2A2415016246703C;2B072128291D34174F50644B67;2C02085348556E3D5F;2D090002300F2B080168693D60;2E360A001410495C403C;2F0018161F4A5E6B6C51526A3E;30001A221B19054C4D4E717D3F4481;31002D321C2C335B6361655D676D8074;3209042E11130E1E06054754433C6F6759;33350C042720070D0605565A;34272F2A454142;35252631235758703E6687;36241562463C;370B072128291D34174F50644B67;38360A023A015348553D675F;3902300F2B08016869753D60;3A1410495C403C3F;3B18161F4A5E6B6C727D51526A3E76;",";0000380C041A23104A5E6B5B63;010004122D1B13241F838A;020A002E11252622321C3406053C5D44;030B00200306330553544641;040007210D312B5659;050E031448453E5A;060E1D162F2A01575868694F503C6A;0719495C556466;0809020728292C081501515242653D;09021E081701474C4D4E3F3D;0A0C04300F3C6F614B5F;0B041843403E60;0C0A1A2310054A5E6B5B636D;0D0B122D1B1303241F838A94;0E2E11252622321C34063C5D44;0F002003063353546C624641;100007210D31032B5659;11000E031448453E5A;120900271D162F2A01575868694F503C6A;130019495C55643F6D66;14020C040728292C081501515242653D;1502041E081701474C4D4E3D;160A300F3C614B5F;170B1843403E60;181A23104A456B5B6378;19122D1B1303241F9583;1A2E11252622321C033406053C5D44;1B200306330553546C6246416E;1C0907210D31032B567359;1D0E1448453F3E5A;1E0C04271D163B2A01575868694F503C6A;1F0419495C556466;200A020728292C081501515242653D;210B021E081701474C4D4E3D;22300F3C614B5F;231843403E60;241A2310054A5E425B63;25122D1B1303241F;26092E11252622321C033406053C5D44;272006330553546C6246413F;280C0407210D312B5659;29040E1448453E5A;2A0A271D162F2A01575868694F50703C6A89;2B0B19495C55646766;2C020728292C0815515242653D;2D00021E081701474C4D4E3D;2E00300F3C614B5F;2F001843403E60;3009001A2310054A5E6B5B63717D7988;310037122D1B13241F3F676D;320C042E11252622321C3406053C6F5D6744;33042006330553546C624641;340A07210D312B5659;350B0E03144845703E5A;36271D162F2A575868694F503C6A;3719495C55646766;38020728292C081501515242653D67;39021E081701474C4D4E756E3D;3A09300F3C614B5F;3B184340727D3F3E60;",";000A003837041A1316624640425D6A5F;01360B00042D194A5E6B4B60;020009111B032C06100548413C;030020321C310310061F056869;0400224754495C7344;05070D1D334F505651523F3E;063509232F01554C4D4E453C59;070C24575864615A;0802270E34082A01433D;09020721282908016E653D66;0A0A042B15536C3C6F;0B360B0412182526300F14175B633E;0C1A13031605624640425D6A6D5F;0D2D03194A5E6B4B60;0E2E111B33061048413C;0F0020321C31031E061F68693F;1035090022034754495C44;11000C070D1D334F505651523E;1200232F01554C4D4E453C59;130024575864616D5A;140A0204270E0F082A01433D;15360B0204072128290801653D66;162B15536C3C;17121825260D0F14175B633E;181A1316624640425D6A5F82;192D03194A5E6B4B3F60;1A35092E111B032C061048413C;1B0C20321C31031E061F056869;1C224754495C44;1D07121D334F505651523E;1E0A04232F01554C4D4E453C59;1F360B0424575864615A;2002270E34082A01433D;2102072128290801653D66;222B15536C3C;2312182526300F14175B633F3E;2435091A13031605624640425D6A5F;250C2D03194A5E6B4B60;262E111B2C06100548413C;2720321C311E061F056869;280A04224746495C44;29360B04070D1D334F505651523E;2A232F01554C4D4E45703C59;2B2457586461675A96;2C02270E34082A433D;2D0002072128290801653F3D66;2E3509002B15536C3C;2F000C12182526300F14175B633E;30001A1316624640717D425D6A5F82;31002D194A5E6B4B676D6076;320A042E111B2C06100548413C6F67;33360B0420321C311E061F0568696E;3422034754495C44;35070D1D334F50567051523E;36232F554C4D4E453C59;3724575864613F675A;38350902270E34082A01433D67;39020C07212829080175653D66;3A2B15536C3C;3B12182526300F14175B63727D3E7974;"];class C1{constructor(t,l,h,g){this._day=C1._ymd(t),this._name=l,this._work=h,this._target=C1._ymd(g)}static _ymd(t){return t.indexOf("-")<0?t.substring(0,4)+"-"+t.substring(4,6)+"-"+t.substring(6):t}getDay(){return this._day}setDay(t){this._day=C1._ymd(t)}getName(){return this._name}setName(t){this._name=t}isWork(){return this._work}setWork(t){this._work=t}getTarget(){return this._target}setTarget(t){this._target=C1._ymd(t)}toString(){return this._day+" "+this._name+(this._work?"调休":"")+" "+this._target}}const t0=class{static _padding(o){return(o<10?"0":"")+o}static _findForward(o){const t=t0._DATA_IN_USE.indexOf(o);if(t<0)return null;let l=t0._DATA_IN_USE.substring(t);const h=l.length%t0._SIZE;for(h>0&&(l=l.substring(h));l.indexOf(o)!==0&&l.length>=t0._SIZE;)l=l.substring(t0._SIZE);return l}static _findBackward(o){const t=t0._DATA_IN_USE.lastIndexOf(o);if(t<0)return null;const l=o.length;let h=t0._DATA_IN_USE.substring(0,t+l),g=h.length;const f=g%t0._SIZE;for(f>0&&(h=h.substring(0,g-f)),g=h.length;g-l!==h.lastIndexOf(o)&&g>=t0._SIZE;)h=h.substring(0,g-t0._SIZE),g=h.length;return h}static _buildHolidayForward(o){const t=o.substring(0,8),l=t0._NAMES_IN_USE[o.charCodeAt(8)-t0._ZERO],h=o.charCodeAt(9)===t0._ZERO,g=o.substring(10,18);return new C1(t,l,h,g)}static _buildHolidayBackward(o){const t=o.length,l=o.substring(t-18,t-10),h=t0._NAMES_IN_USE[o.charCodeAt(t-10)-t0._ZERO],g=o.charCodeAt(t-9)===t0._ZERO,f=o.substring(t-8);return new C1(l,h,g,f)}static _findHolidaysForward(o){const t=[];let l=t0._findForward(o);if(l==null)return t;for(;l.indexOf(o)===0;)t.push(t0._buildHolidayForward(l)),l=l.substring(t0._SIZE);return t}static _findHolidaysBackward(o){const t=[];let l=t0._findBackward(o);if(l==null)return t;let h=l.length;const g=o.length;for(;h-g===l.lastIndexOf(o);)t.push(t0._buildHolidayBackward(l)),l=l.substring(0,h-t0._SIZE),h=l.length;return t.reverse(),t}static getHoliday(o,t=0,l=0){const h=t==0||l==0?t0._findHolidaysForward((o+"").replace(/-/g,"")):t0._findHolidaysForward(o+t0._padding(t)+t0._padding(l));return h.length<1?null:h[0]}static getHolidays(o,t=0){return t==0?t0._findHolidaysForward((o+"").replace(/-/g,"")):t0._findHolidaysForward(o+t0._padding(t))}static getHolidaysByTarget(o,t=0){return t==0?t0._findHolidaysBackward((o+"").replace(/-/g,"")):t0._findHolidaysBackward(o+t0._padding(t))}static _fixNames(o){o&&(t0._NAMES_IN_USE=o)}static _fixData(o){if(!o)return;const t=[];for(;o.length>=t0._SIZE;){const l=o.substring(0,t0._SIZE),h=l.substring(0,8),g=t0._TAG_REMOVE==l.substring(8,9),f=t0.getHoliday(h);if(!f)g||t.push(l);else{let F=-1;for(let A=0,y=t0._NAMES_IN_USE.length;A<y;A++)if(t0._NAMES_IN_USE[A]===f.getName()){F=A;break}if(F>-1){const A=h+String.fromCharCode(F+t0._ZERO)+(f.isWork()?"0":"1")+f.getTarget().replace(/-/g,"");t0._DATA_IN_USE=t0._DATA_IN_USE.replace(new RegExp(A,"g"),g?"":l)}}o=o.substring(t0._SIZE)}t.length>0&&(t0._DATA_IN_USE+=t.join(""))}static fix(o,t){t?(Array.isArray(o)&&t0._fixNames(o),t0._fixData(t)):Array.isArray(o)?t0._fixNames(o):t0._fixData(o)}};let _2=t0;_2.NAMES=["元旦节","春节","清明节","劳动节","端午节","中秋节","国庆节","国庆中秋","抗战胜利日"];_2.DATA="200112290020020101200112300020020101200201010120020101200201020120020101200201030120020101200202091020020212200202101020020212200202121120020212200202131120020212200202141120020212200202151120020212200202161120020212200202171120020212200202181120020212200204273020020501200204283020020501200205013120020501200205023120020501200205033120020501200205043120020501200205053120020501200205063120020501200205073120020501200209286020021001200209296020021001200210016120021001200210026120021001200210036120021001200210046120021001200210056120021001200210066120021001200210076120021001200301010120030101200302011120030201200302021120030201200302031120030201200302041120030201200302051120030201200302061120030201200302071120030201200302081020030201200302091020030201200304263020030501200304273020030501200305013120030501200305023120030501200305033120030501200305043120030501200305053120030501200305063120030501200305073120030501200309276020031001200309286020031001200310016120031001200310026120031001200310036120031001200310046120031001200310056120031001200310066120031001200310076120031001200401010120040101200401171020040122200401181020040122200401221120040122200401231120040122200401241120040122200401251120040122200401261120040122200401271120040122200401281120040122200405013120040501200405023120040501200405033120040501200405043120040501200405053120040501200405063120040501200405073120040501200405083020040501200405093020040501200410016120041001200410026120041001200410036120041001200410046120041001200410056120041001200410066120041001200410076120041001200410096020041001200410106020041001200501010120050101200501020120050101200501030120050101200502051020050209200502061020050209200502091120050209200502101120050209200502111120050209200502121120050209200502131120050209200502141120050209200502151120050209200504303020050501200505013120050501200505023120050501200505033120050501200505043120050501200505053120050501200505063120050501200505073120050501200505083020050501200510016120051001200510026120051001200510036120051001200510046120051001200510056120051001200510066120051001200510076120051001200510086020051001200510096020051001200512310020060101200601010120060101200601020120060101200601030120060101200601281020060129200601291120060129200601301120060129200601311120060129200602011120060129200602021120060129200602031120060129200602041120060129200602051020060129200604293020060501200604303020060501200605013120060501200605023120060501200605033120060501200605043120060501200605053120060501200605063120060501200605073120060501200609306020061001200610016120061001200610026120061001200610036120061001200610046120061001200610056120061001200610066120061001200610076120061001200610086020061001200612300020070101200612310020070101200701010120070101200701020120070101200701030120070101200702171020070218200702181120070218200702191120070218200702201120070218200702211120070218200702221120070218200702231120070218200702241120070218200702251020070218200704283020070501200704293020070501200705013120070501200705023120070501200705033120070501200705043120070501200705053120070501200705063120070501200705073120070501200709296020071001200709306020071001200710016120071001200710026120071001200710036120071001200710046120071001200710056120071001200710066120071001200710076120071001200712290020080101200712300120080101200712310120080101200801010120080101200802021020080206200802031020080206200802061120080206200802071120080206200802081120080206200802091120080206200802101120080206200802111120080206200802121120080206200804042120080404200804052120080404200804062120080404200805013120080501200805023120080501200805033120080501200805043020080501200806074120080608200806084120080608200806094120080608200809135120080914200809145120080914200809155120080914200809276020081001200809286020081001200809296120081001200809306120081001200810016120081001200810026120081001200810036120081001200810046120081001200810056120081001200901010120090101200901020120090101200901030120090101200901040020090101200901241020090125200901251120090125200901261120090125200901271120090125200901281120090125200901291120090125200901301120090125200901311120090125200902011020090125200904042120090404200904052120090404200904062120090404200905013120090501200905023120090501200905033120090501200905284120090528200905294120090528200905304120090528200905314020090528200909276020091001200910016120091001200910026120091001200910036120091001200910046120091001200910055120091003200910065120091003200910075120091003200910085120091003200910105020091003201001010120100101201001020120100101201001030120100101201002131120100213201002141120100213201002151120100213201002161120100213201002171120100213201002181120100213201002191120100213201002201020100213201002211020100213201004032120100405201004042120100405201004052120100405201005013120100501201005023120100501201005033120100501201006124020100616201006134020100616201006144120100616201006154120100616201006164120100616201009195020100922201009225120100922201009235120100922201009245120100922201009255020100922201009266020101001201010016120101001201010026120101001201010036120101001201010046120101001201010056120101001201010066120101001201010076120101001201010096020101001201101010120110101201101020120110101201101030120110101201101301020110203201102021120110203201102031120110203201102041120110203201102051120110203201102061120110203201102071120110203201102081120110203201102121020110203201104022020110405201104032120110405201104042120110405201104052120110405201104303120110501201105013120110501201105023120110501201106044120110606201106054120110606201106064120110606201109105120110912201109115120110912201109125120110912201110016120111001201110026120111001201110036120111001201110046120111001201110056120111001201110066120111001201110076120111001201110086020111001201110096020111001201112310020120101201201010120120101201201020120120101201201030120120101201201211020120123201201221120120123201201231120120123201201241120120123201201251120120123201201261120120123201201271120120123201201281120120123201201291020120123201203312020120404201204012020120404201204022120120404201204032120120404201204042120120404201204283020120501201204293120120501201204303120120501201205013120120501201205023020120501201206224120120623201206234120120623201206244120120623201209295020120930201209305120120930201210016120121001201210026120121001201210036120121001201210046120121001201210056120121001201210066120121001201210076120121001201210086020121001201301010120130101201301020120130101201301030120130101201301050020130101201301060020130101201302091120130210201302101120130210201302111120130210201302121120130210201302131120130210201302141120130210201302151120130210201302161020130210201302171020130210201304042120130404201304052120130404201304062120130404201304273020130501201304283020130501201304293120130501201304303120130501201305013120130501201306084020130612201306094020130612201306104120130612201306114120130612201306124120130612201309195120130919201309205120130919201309215120130919201309225020130919201309296020131001201310016120131001201310026120131001201310036120131001201310046120131001201310056120131001201310066120131001201310076120131001201401010120140101201401261020140131201401311120140131201402011120140131201402021120140131201402031120140131201402041120140131201402051120140131201402061120140131201402081020140131201404052120140405201404062120140405201404072120140405201405013120140501201405023120140501201405033120140501201405043020140501201405314120140602201406014120140602201406024120140602201409065120140908201409075120140908201409085120140908201409286020141001201410016120141001201410026120141001201410036120141001201410046120141004201410056120141001201410066120141001201410076120141001201410116020141001201501010120150101201501020120150101201501030120150101201501040020150101201502151020150219201502181120150219201502191120150219201502201120150219201502211120150219201502221120150219201502231120150219201502241120150219201502281020150219201504042120150405201504052120150405201504062120150405201505013120150501201505023120150501201505033120150501201506204120150620201506214120150620201506224120150620201509038120150903201509048120150903201509058120150903201509068020150903201509265120150927201509275120150927201510016120151001201510026120151001201510036120151001201510046120151004201510056120151001201510066120151001201510076120151001201510106020151001201601010120160101201601020120160101201601030120160101201602061020160208201602071120160208201602081120160208201602091120160208201602101120160208201602111120160208201602121120160208201602131120160208201602141020160208201604022120160404201604032120160404201604042120160404201604303120160501201605013120160501201605023120160501201606094120160609201606104120160609201606114120160609201606124020160609201609155120160915201609165120160915201609175120160915201609185020160915201610016120161001201610026120161001201610036120161001201610046120161001201610056120161001201610066120161001201610076120161001201610086020161001201610096020161001201612310120170101201701010120170101201701020120170101201701221020170128201701271120170128201701281120170128201701291120170128201701301120170128201701311120170128201702011120170128201702021120170128201702041020170128201704012020170404201704022120170404201704032120170404201704042120170404201704293120170501201704303120170501201705013120170501201705274020170530201705284120170530201705294120170530201705304120170530201709306020171001201710016120171001201710026120171001201710036120171001201710045120171004201710056120171001201710066120171001201710076120171001201710086120171001201712300120180101201712310120180101201801010120180101201802111020180216201802151120180216201802161120180216201802171120180216201802181120180216201802191120180216201802201120180216201802211120180216201802241020180216201804052120180405201804062120180405201804072120180405201804082020180405201804283020180501201804293120180501201804303120180501201805013120180501201806164120180618201806174120180618201806184120180618201809225120180924201809235120180924201809245120180924201809296020181001201809306020181001201810016120181001201810026120181001201810036120181001201810046120181001201810056120181001201810066120181001201810076120181001201812290020190101201812300120190101201812310120190101201901010120190101201902021020190205201902031020190205201902041120190205201902051120190205201902061120190205201902071120190205201902081120190205201902091120190205201902101120190205201904052120190405201904062120190405201904072120190405201904283020190501201905013120190501201905023120190501201905033120190501201905043120190501201905053020190501201906074120190607201906084120190607201906094120190607201909135120190913201909145120190913201909155120190913201909296020191001201910016120191001201910026120191001201910036120191001201910046120191001201910056120191001201910066120191001201910076120191001201910126020191001202001010120200101202001191020200125202001241120200125202001251120200125202001261120200125202001271120200125202001281120200125202001291120200125202001301120200125202001311120200125202002011120200125202002021120200125202004042120200404202004052120200404202004062120200404202004263020200501202005013120200501202005023120200501202005033120200501202005043120200501202005053120200501202005093020200501202006254120200625202006264120200625202006274120200625202006284020200625202009277020201001202010017120201001202010026120201001202010036120201001202010046120201001202010056120201001202010066120201001202010076120201001202010086120201001202010106020201001202101010120210101202101020120210101202101030120210101202102071020210212202102111120210212202102121120210212202102131120210212202102141120210212202102151120210212202102161120210212202102171120210212202102201020210212202104032120210404202104042120210404202104052120210404202104253020210501202105013120210501202105023120210501202105033120210501202105043120210501202105053120210501202105083020210501202106124120210614202106134120210614202106144120210614202109185020210921202109195120210921202109205120210921202109215120210921202109266020211001202110016120211001202110026120211001202110036120211001202110046120211001202110056120211001202110066120211001202110076120211001202110096020211001202201010120220101202201020120220101202201030120220101202201291020220201202201301020220201202201311120220201202202011120220201202202021120220201202202031120220201202202041120220201202202051120220201202202061120220201202204022020220405202204032120220405202204042120220405202204052120220405202204243020220501202204303120220501202205013120220501202205023120220501202205033120220501202205043120220501202205073020220501202206034120220603202206044120220603202206054120220603202209105120220910202209115120220910202209125120220910202210016120221001202210026120221001202210036120221001202210046120221001202210056120221001202210066120221001202210076120221001202210086020221001202210096020221001202212310120230101202301010120230101202301020120230101202301211120230122202301221120230122202301231120230122202301241120230122202301251120230122202301261120230122202301271120230122202301281020230122202301291020230122202304052120230405202304233020230501202304293120230501202304303120230501202305013120230501202305023120230501202305033120230501202305063020230501202306224120230622202306234120230622202306244120230622202306254020230622202309295120230929202309306120231001202310016120231001202310026120231001202310036120231001202310046120231001202310056120231001202310066120231001202310076020231001202310086020231001202312300120240101202312310120240101202401010120240101202402041020240210202402101120240210202402111120240210202402121120240210202402131120240210202402141120240210202402151120240210202402161120240210202402171120240210202402181020240210202404042120240404202404052120240404202404062120240404202404072020240404202404283020240501202405013120240501202405023120240501202405033120240501202405043120240501202405053120240501202405113020240501202406084120240610202406094120240610202406104120240610202409145020240917202409155120240917202409165120240917202409175120240917202409296020241001202410016120241001202410026120241001202410036120241001202410046120241001202410056120241001202410066120241001202410076120241001202410126020241001202501010120250101202501261020250129202501281120250129202501291120250129202501301120250129202501311120250129202502011120250129202502021120250129202502031120250129202502041120250129202502081020250129202504042120250404202504052120250404202504062120250404202504273020250501202505013120250501202505023120250501202505033120250501202505043120250501202505053120250501202505314120250531202506014120250531202506024120250531202509287020251001202510017120251001202510027120251001202510037120251001202510047120251001202510057120251001202510067120251001202510077120251001202510087120251001202510117020251001202601010120260101202601020120260101202601030120260101202601040020260101202602141020260217202602151120260217202602161120260217202602171120260217202602181120260217202602191120260217202602201120260217202602211120260217202602221120260217202602231120260217202602281020260217202604042120260405202604052120260405202604062120260405202605013120260501202605023120260501202605033120260501202605043120260501202605053120260501202605093020260501202606194120260619202606204120260619202606214120260619202609206020261001202609255120260925202609265120260925202609275120260925202610016120261001202610026120261001202610036120261001202610046120261001202610056120261001202610066120261001202610076120261001202610106020261001";_2._SIZE=18;_2._ZERO=48;_2._TAG_REMOVE="~";_2._NAMES_IN_USE=t0.NAMES;_2._DATA_IN_USE=t0.DATA;class Ai{constructor(t,l){let h=!1,g=!1;for(let f=0,F=r.JIE_QI.length;f<F;f++)if(r.JIE_QI[f]===t){f%2==0?g=!0:h=!0;break}this._name=t,this._solar=l,this._jie=h,this._qi=g}getName(){return this._name}getSolar(){return this._solar}setName(t){this._name=t}setSolar(t){this._solar=t}isJie(){return this._jie}isQi(){return this._qi}toString(){return this.getName()}}class s8{constructor(t,l){this._liuNian=t,this._index=l}getIndex(){return this._index}getMonthInChinese(){return r.MONTH[this._index+1]}getGanZhi(){const t=r.find(this._liuNian.getGanZhi(),r.GAN).index-1,l=[2,4,6,8,0][t%5],h=r.GAN[(this._index+l)%10+1],g=r.ZHI[(this._index+r.BASE_MONTH_ZHI_INDEX)%12+1];return h+g}getXun(){return r.getXun(this.getGanZhi())}getXunKong(){return r.getXunKong(this.getGanZhi())}}class O{constructor(t,l=""){this._name=t,this._remark=l}getName(){return this._name}getRemark(){return this._remark}toString(){return this._name}toFullString(){const t=[this._name];return this._remark&&t.push("["+this._remark+"]"),t.join("")}}class ln{}ln.SAN_HUI=["1-7","7-7","10-15"];ln.SAN_YUAN=["1-15","7-15","10-15"];ln.WU_LA=["1-1","5-5","7-7","10-1","12-8"];ln.AN_WU=["{dz.wei}","{dz.xu}","{dz.chen}","{dz.yin}","{dz.wu}","{dz.zi}","{dz.you}","{dz.shen}","{dz.si}","{dz.hai}","{dz.mao}","{dz.chou}"];ln.BA_HUI={"{jz.bingWu}":"天会","{jz.renWu}":"地会","{jz.renZi}":"人会","{jz.gengWu}":"日会","{jz.gengShen}":"月会","{jz.xinYou}":"星辰会","{jz.jiaChen}":"五行会","{jz.jiaXu}":"四时会"};ln.BA_JIE={"{jq.liChun}":"东北方度仙上圣天尊同梵炁始青天君下降","{jq.chunFen}":"东方玉宝星上天尊同青帝九炁天君下降","{jq.liXia}":"东南方好生度命天尊同梵炁始丹天君下降","{jq.xiaZhi}":"南方玄真万福天尊同赤帝三炁天君下降","{jq.liQiu}":"西南方太灵虚皇天尊同梵炁始素天君下降","{jq.qiuFen}":"西方太妙至极天尊同白帝七炁天君下降","{jq.liDong}":"西北方无量太华天尊同梵炁始玄天君下降","{jq.dongZhi}":"北方玄上玉宸天尊同黑帝五炁天君下降"};ln.FESTIVAL={"1-1":[new O("天腊之辰","天腊，此日五帝会于东方九炁青天")],"1-3":[new O("郝真人圣诞"),new O("孙真人圣诞")],"1-5":[new O("孙祖清静元君诞")],"1-7":[new O("举迁赏会","此日上元赐福，天官同地水二官考校罪福")],"1-9":[new O("玉皇上帝圣诞")],"1-13":[new O("关圣帝君飞升")],"1-15":[new O("上元天官圣诞"),new O("老祖天师圣诞")],"1-19":[new O("长春邱真人(邱处机)圣诞")],"1-28":[new O("许真君(许逊天师)圣诞")],"2-1":[new O("勾陈天皇大帝圣诞"),new O("长春刘真人(刘渊然)圣诞")],"2-2":[new O("土地正神诞"),new O("姜太公圣诞")],"2-3":[new O("文昌梓潼帝君圣诞")],"2-6":[new O("东华帝君圣诞")],"2-13":[new O("度人无量葛真君圣诞")],"2-15":[new O("太清道德天尊(太上老君)圣诞")],"2-19":[new O("慈航真人圣诞")],"3-1":[new O("谭祖(谭处端)长真真人圣诞")],"3-3":[new O("玄天上帝圣诞")],"3-6":[new O("眼光娘娘圣诞")],"3-15":[new O("天师张大真人圣诞"),new O("财神赵公元帅圣诞")],"3-16":[new O("三茅真君得道之辰"),new O("中岳大帝圣诞")],"3-18":[new O("王祖(王处一)玉阳真人圣诞"),new O("后土娘娘圣诞")],"3-19":[new O("太阳星君圣诞")],"3-20":[new O("子孙娘娘圣诞")],"3-23":[new O("天后妈祖圣诞")],"3-26":[new O("鬼谷先师诞")],"3-28":[new O("东岳大帝圣诞")],"4-1":[new O("长生谭真君成道之辰")],"4-10":[new O("何仙姑圣诞")],"4-14":[new O("吕祖纯阳祖师圣诞")],"4-15":[new O("钟离祖师圣诞")],"4-18":[new O("北极紫微大帝圣诞"),new O("泰山圣母碧霞元君诞"),new O("华佗神医先师诞")],"4-20":[new O("眼光圣母娘娘诞")],"4-28":[new O("神农先帝诞")],"5-1":[new O("南极长生大帝圣诞")],"5-5":[new O("地腊之辰","地腊，此日五帝会于南方三炁丹天"),new O("南方雷祖圣诞"),new O("地祗温元帅圣诞"),new O("雷霆邓天君圣诞")],"5-11":[new O("城隍爷圣诞")],"5-13":[new O("关圣帝君降神"),new O("关平太子圣诞")],"5-18":[new O("张天师圣诞")],"5-20":[new O("马祖丹阳真人圣诞")],"5-29":[new O("紫青白祖师圣诞")],"6-1":[new O("南斗星君下降")],"6-2":[new O("南斗星君下降")],"6-3":[new O("南斗星君下降")],"6-4":[new O("南斗星君下降")],"6-5":[new O("南斗星君下降")],"6-6":[new O("南斗星君下降")],"6-10":[new O("刘海蟾祖师圣诞")],"6-15":[new O("灵官王天君圣诞")],"6-19":[new O("慈航(观音)成道日")],"6-23":[new O("火神圣诞")],"6-24":[new O("南极大帝中方雷祖圣诞"),new O("关圣帝君圣诞")],"6-26":[new O("二郎真君圣诞")],"7-7":[new O("道德腊之辰","道德腊，此日五帝会于西方七炁素天"),new O("庆生中会","此日中元赦罪，地官同天水二官考校罪福")],"7-12":[new O("西方雷祖圣诞")],"7-15":[new O("中元地官大帝圣诞")],"7-18":[new O("王母娘娘圣诞")],"7-20":[new O("刘祖(刘处玄)长生真人圣诞")],"7-22":[new O("财帛星君文财神增福相公李诡祖圣诞")],"7-26":[new O("张三丰祖师圣诞")],"8-1":[new O("许真君飞升日")],"8-3":[new O("九天司命灶君诞")],"8-5":[new O("北方雷祖圣诞")],"8-10":[new O("北岳大帝诞辰")],"8-15":[new O("太阴星君诞")],"9-1":[new O("北斗九皇降世之辰")],"9-2":[new O("北斗九皇降世之辰")],"9-3":[new O("北斗九皇降世之辰")],"9-4":[new O("北斗九皇降世之辰")],"9-5":[new O("北斗九皇降世之辰")],"9-6":[new O("北斗九皇降世之辰")],"9-7":[new O("北斗九皇降世之辰")],"9-8":[new O("北斗九皇降世之辰")],"9-9":[new O("北斗九皇降世之辰"),new O("斗姥元君圣诞"),new O("重阳帝君圣诞"),new O("玄天上帝飞升"),new O("酆都大帝圣诞")],"9-22":[new O("增福财神诞")],"9-23":[new O("萨翁真君圣诞")],"9-28":[new O("五显灵官马元帅圣诞")],"10-1":[new O("民岁腊之辰","民岁腊，此日五帝会于北方五炁黑天"),new O("东皇大帝圣诞")],"10-3":[new O("三茅应化真君圣诞")],"10-6":[new O("天曹诸司五岳五帝圣诞")],"10-15":[new O("下元水官大帝圣诞"),new O("建生大会","此日下元解厄，水官同天地二官考校罪福")],"10-18":[new O("地母娘娘圣诞")],"10-19":[new O("长春邱真君飞升")],"10-20":[new O("虚靖天师(即三十代天师弘悟张真人)诞")],"11-6":[new O("西岳大帝圣诞")],"11-9":[new O("湘子韩祖圣诞")],"11-11":[new O("太乙救苦天尊圣诞")],"11-26":[new O("北方五道圣诞")],"12-8":[new O("王侯腊之辰","王侯腊，此日五帝会于上方玄都玉京")],"12-16":[new O("南岳大帝圣诞"),new O("福德正神诞")],"12-20":[new O("鲁班先师圣诞")],"12-21":[new O("天猷上帝圣诞")],"12-22":[new O("重阳祖师圣诞")],"12-23":[new O("祭灶王","最适宜谢旧年太岁，开启拜新年太岁")],"12-25":[new O("玉帝巡天"),new O("天神下降")],"12-29":[new O("清静孙真君(孙不二)成道")]};class z{constructor(t,l="",h=!1,g=""){this._name=t,this._result=l||"",this._everyMonth=h,this._remark=g}getName(){return this._name}getResult(){return this._result}isEveryMonth(){return this._everyMonth}getRemark(){return this._remark}toString(){return this._name}toFullString(){const t=[this._name];return this._result&&t.push(this._result),this._remark&&t.push(this._remark),t.join(" ")}}const C=class{static getXiu(o,t){return C.XIU_27[(C.XIU_OFFSET[Math.abs(o)-1]+t-1)%C.XIU_27.length]}};let O0=C;O0.DAY_ZHAI_GUAN_YIN=["1-8","2-7","2-9","2-19","3-3","3-6","3-13","4-22","5-3","5-17","6-16","6-18","6-19","6-23","7-13","8-16","9-19","9-23","10-2","11-19","11-24","12-25"];O0.XIU_27=["{xx.jiao}","{xx.kang}","{xx.di}","{xx.fang}","{xx.xin}","{xx.tail}","{xx.ji}","{xx.dou}","{xx.nv}","{xx.xu}","{xx.wei}","{xx.shi}","{xx.qiang}","{xx.kui}","{xx.lou}","{xx.vei}","{xx.mao}","{xx.bi}","{xx.zi}","{xx.can}","{xx.jing}","{xx.gui}","{xx.liu}","{xx.xing}","{xx.zhang}","{xx.yi}","{xx.zhen}"];O0.XIU_OFFSET=[11,13,15,17,19,21,24,0,2,4,7,9];O0._DJ="犯者夺纪";O0._JS="犯者减寿";O0._SS="犯者损寿";O0._XL="犯者削禄夺纪";O0._JW="犯者三年内夫妇俱亡";O0._Y=new z("杨公忌");O0._T=new z("四天王巡行","",!0);O0._D=new z("斗降",C._DJ,!0);O0._S=new z("月朔",C._DJ,!0);O0._W=new z("月望",C._DJ,!0);O0._H=new z("月晦",C._JS,!0);O0._L=new z("雷斋日",C._JS,!0);O0._J=new z("九毒日","犯者夭亡，奇祸不测");O0._R=new z("人神在阴","犯者得病",!0,"宜先一日即戒");O0._M=new z("司命奏事",C._JS,!0,"如月小，即戒廿九");O0._HH=new z("月晦",C._JS,!0,"如月小，即戒廿九");O0.FESTIVAL={"1-1":[new z("天腊，玉帝校世人神气禄命",C._XL),C._S],"1-3":[new z("万神都会",C._DJ),C._D],"1-5":[new z("五虚忌")],"1-6":[new z("六耗忌"),C._L],"1-7":[new z("上会日",C._SS)],"1-8":[new z("五殿阎罗天子诞",C._DJ),C._T],"1-9":[new z("玉皇上帝诞",C._DJ)],"1-13":[C._Y],"1-14":[new z("三元降",C._JS),C._T],"1-15":[new z("三元降",C._JS),new z("上元神会",C._DJ),C._W,C._T],"1-16":[new z("三元降",C._JS)],"1-19":[new z("长春真人诞")],"1-23":[new z("三尸神奏事"),C._T],"1-25":[C._H,new z("天地仓开日","犯者损寿，子带疾")],"1-27":[C._D],"1-28":[C._R],"1-29":[C._T],"1-30":[C._HH,C._M,C._T],"2-1":[new z("一殿秦广王诞",C._DJ),C._S],"2-2":[new z("万神都会",C._DJ),new z("福德土地正神诞","犯者得祸")],"2-3":[new z("文昌帝君诞",C._XL),C._D],"2-6":[new z("东华帝君诞"),C._L],"2-8":[new z("释迦牟尼佛出家",C._DJ),new z("三殿宋帝王诞",C._DJ),new z("张大帝诞",C._DJ),C._T],"2-11":[C._Y],"2-14":[C._T],"2-15":[new z("释迦牟尼佛涅槃",C._XL),new z("太上老君诞",C._XL),new z("月望",C._XL,!0),C._T],"2-17":[new z("东方杜将军诞")],"2-18":[new z("四殿五官王诞",C._XL),new z("至圣先师孔子讳辰",C._XL)],"2-19":[new z("观音大士诞",C._DJ)],"2-21":[new z("普贤菩萨诞")],"2-23":[C._T],"2-25":[C._H],"2-27":[C._D],"2-28":[C._R],"2-29":[C._T],"2-30":[C._HH,C._M,C._T],"3-1":[new z("二殿楚江王诞",C._DJ),C._S],"3-3":[new z("玄天上帝诞",C._DJ),C._D],"3-6":[C._L],"3-8":[new z("六殿卞城王诞",C._DJ),C._T],"3-9":[new z("牛鬼神出","犯者产恶胎"),C._Y],"3-12":[new z("中央五道诞")],"3-14":[C._T],"3-15":[new z("昊天上帝诞",C._DJ),new z("玄坛诞",C._DJ),C._W,C._T],"3-16":[new z("准提菩萨诞",C._DJ)],"3-19":[new z("中岳大帝诞"),new z("后土娘娘诞"),new z("三茅降")],"3-20":[new z("天地仓开日",C._SS),new z("子孙娘娘诞")],"3-23":[C._T],"3-25":[C._H],"3-27":[new z("七殿泰山王诞"),C._D],"3-28":[C._R,new z("苍颉至圣先师诞",C._XL),new z("东岳大帝诞")],"3-29":[C._T],"3-30":[C._HH,C._M,C._T],"4-1":[new z("八殿都市王诞",C._DJ),C._S],"4-3":[C._D],"4-4":[new z("万神善会","犯者失瘼夭胎"),new z("文殊菩萨诞")],"4-6":[C._L],"4-7":[new z("南斗、北斗、西斗同降",C._JS),C._Y],"4-8":[new z("释迦牟尼佛诞",C._DJ),new z("万神善会","犯者失瘼夭胎"),new z("善恶童子降","犯者血死"),new z("九殿平等王诞"),C._T],"4-14":[new z("纯阳祖师诞",C._JS),C._T],"4-15":[C._W,new z("钟离祖师诞"),C._T],"4-16":[new z("天地仓开日",C._SS)],"4-17":[new z("十殿转轮王诞",C._DJ)],"4-18":[new z("天地仓开日",C._SS),new z("紫徽大帝诞",C._SS)],"4-20":[new z("眼光圣母诞")],"4-23":[C._T],"4-25":[C._H],"4-27":[C._D],"4-28":[C._R],"4-29":[C._T],"4-30":[C._HH,C._M,C._T],"5-1":[new z("南极长生大帝诞",C._DJ),C._S],"5-3":[C._D],"5-5":[new z("地腊",C._XL),new z("五帝校定生人官爵",C._XL),C._J,C._Y],"5-6":[C._J,C._L],"5-7":[C._J],"5-8":[new z("南方五道诞"),C._T],"5-11":[new z("天地仓开日",C._SS),new z("天下都城隍诞")],"5-12":[new z("炳灵公诞")],"5-13":[new z("关圣降",C._XL)],"5-14":[new z("夜子时为天地交泰",C._JW),C._T],"5-15":[C._W,C._J,C._T],"5-16":[new z("九毒日",C._JW),new z("天地元气造化万物之辰",C._JW)],"5-17":[C._J],"5-18":[new z("张天师诞")],"5-22":[new z("孝娥神诞",C._DJ)],"5-23":[C._T],"5-25":[C._J,C._H],"5-26":[C._J],"5-27":[C._J,C._D],"5-28":[C._R],"5-29":[C._T],"5-30":[C._HH,C._M,C._T],"6-1":[C._S],"6-3":[new z("韦驮菩萨圣诞"),C._D,C._Y],"6-5":[new z("南赡部洲转大轮",C._SS)],"6-6":[new z("天地仓开日",C._SS),C._L],"6-8":[C._T],"6-10":[new z("金粟如来诞")],"6-14":[C._T],"6-15":[C._W,C._T],"6-19":[new z("观世音菩萨成道",C._DJ)],"6-23":[new z("南方火神诞","犯者遭回禄"),C._T],"6-24":[new z("雷祖诞",C._XL),new z("关帝诞",C._XL)],"6-25":[C._H],"6-27":[C._D],"6-28":[C._R],"6-29":[C._T],"6-30":[C._HH,C._M,C._T],"7-1":[C._S,C._Y],"7-3":[C._D],"7-5":[new z("中会日",C._SS,!1,"一作初七")],"7-6":[C._L],"7-7":[new z("道德腊",C._XL),new z("五帝校生人善恶",C._XL),new z("魁星诞",C._XL)],"7-8":[C._T],"7-10":[new z("阴毒日","",!1,"大忌")],"7-12":[new z("长真谭真人诞")],"7-13":[new z("大势至菩萨诞",C._JS)],"7-14":[new z("三元降",C._JS),C._T],"7-15":[C._W,new z("三元降",C._DJ),new z("地官校籍",C._DJ),C._T],"7-16":[new z("三元降",C._JS)],"7-18":[new z("西王母诞",C._DJ)],"7-19":[new z("太岁诞",C._DJ)],"7-22":[new z("增福财神诞",C._XL)],"7-23":[C._T],"7-25":[C._H],"7-27":[C._D],"7-28":[C._R],"7-29":[C._Y,C._T],"7-30":[new z("地藏菩萨诞",C._DJ),C._HH,C._M,C._T],"8-1":[C._S,new z("许真君诞")],"8-3":[C._D,new z("北斗诞",C._XL),new z("司命灶君诞","犯者遭回禄")],"8-5":[new z("雷声大帝诞",C._DJ)],"8-6":[C._L],"8-8":[C._T],"8-10":[new z("北斗大帝诞")],"8-12":[new z("西方五道诞")],"8-14":[C._T],"8-15":[C._W,new z("太明朝元","犯者暴亡",!1,"宜焚香守夜"),C._T],"8-16":[new z("天曹掠刷真君降","犯者贫夭")],"8-18":[new z("天人兴福之辰","",!1,"宜斋戒，存想吉事")],"8-23":[new z("汉恒候张显王诞"),C._T],"8-24":[new z("灶君夫人诞")],"8-25":[C._H],"8-27":[C._D,new z("至圣先师孔子诞",C._XL),C._Y],"8-28":[C._R,new z("四天会事")],"8-29":[C._T],"8-30":[new z("诸神考校","犯者夺算"),C._HH,C._M,C._T],"9-1":[C._S,new z("南斗诞",C._XL),new z("北斗九星降世",C._DJ,!1,"此九日俱宜斋戒")],"9-3":[C._D,new z("五瘟神诞")],"9-6":[C._L],"9-8":[C._T],"9-9":[new z("斗母诞",C._XL),new z("酆都大帝诞"),new z("玄天上帝飞升")],"9-10":[new z("斗母降",C._DJ)],"9-11":[new z("宜戒")],"9-13":[new z("孟婆尊神诞")],"9-14":[C._T],"9-15":[C._W,C._T],"9-17":[new z("金龙四大王诞","犯者遭水厄")],"9-19":[new z("日宫月宫会合",C._JS),new z("观世音菩萨诞",C._JS)],"9-23":[C._T],"9-25":[C._H,C._Y],"9-27":[C._D],"9-28":[C._R],"9-29":[C._T],"9-30":[new z("药师琉璃光佛诞","犯者危疾"),C._HH,C._M,C._T],"10-1":[C._S,new z("民岁腊",C._DJ),new z("四天王降","犯者一年内死")],"10-3":[C._D,new z("三茅诞")],"10-5":[new z("下会日",C._JS),new z("达摩祖师诞",C._JS)],"10-6":[C._L,new z("天曹考察",C._DJ)],"10-8":[new z("佛涅槃日","",!1,"大忌色欲"),C._T],"10-10":[new z("四天王降","犯者一年内死")],"10-11":[new z("宜戒")],"10-14":[new z("三元降",C._JS),C._T],"10-15":[C._W,new z("三元降",C._DJ),new z("下元水府校籍",C._DJ),C._T],"10-16":[new z("三元降",C._JS),C._T],"10-23":[C._Y,C._T],"10-25":[C._H],"10-27":[C._D,new z("北极紫徽大帝降")],"10-28":[C._R],"10-29":[C._T],"10-30":[C._HH,C._M,C._T],"11-1":[C._S],"11-3":[C._D],"11-4":[new z("至圣先师孔子诞",C._XL)],"11-6":[new z("西岳大帝诞")],"11-8":[C._T],"11-11":[new z("天地仓开日",C._DJ),new z("太乙救苦天尊诞",C._DJ)],"11-14":[C._T],"11-15":[new z("月望","上半夜犯男死 下半夜犯女死"),new z("四天王巡行","上半夜犯男死 下半夜犯女死")],"11-17":[new z("阿弥陀佛诞")],"11-19":[new z("太阳日宫诞","犯者得奇祸")],"11-21":[C._Y],"11-23":[new z("张仙诞","犯者绝嗣"),C._T],"11-25":[new z("掠刷大夫降","犯者遭大凶"),C._H],"11-26":[new z("北方五道诞")],"11-27":[C._D],"11-28":[C._R],"11-29":[C._T],"11-30":[C._HH,C._M,C._T],"12-1":[C._S],"12-3":[C._D],"12-6":[new z("天地仓开日",C._JS),C._L],"12-7":[new z("掠刷大夫降","犯者得恶疾")],"12-8":[new z("王侯腊",C._DJ),new z("释迦如来成佛之辰"),C._T,new z("初旬内戊日，亦名王侯腊",C._DJ)],"12-12":[new z("太素三元君朝真")],"12-14":[C._T],"12-15":[C._W,C._T],"12-16":[new z("南岳大帝诞")],"12-19":[C._Y],"12-20":[new z("天地交道","犯者促寿")],"12-21":[new z("天猷上帝诞")],"12-23":[new z("五岳诞降"),C._T],"12-24":[new z("司今朝天奏人善恶","犯者得大祸")],"12-25":[new z("三清玉帝同降，考察善恶","犯者得奇祸"),C._H],"12-27":[C._D],"12-28":[C._R],"12-29":[new z("华严菩萨诞"),C._T],"12-30":[new z("诸神下降，察访善恶","犯者男女俱亡")]};O0.OTHER_FESTIVAL={"1-1":["弥勒菩萨圣诞"],"1-6":["定光佛圣诞"],"2-8":["释迦牟尼佛出家"],"2-15":["释迦牟尼佛涅槃"],"2-19":["观世音菩萨圣诞"],"2-21":["普贤菩萨圣诞"],"3-16":["准提菩萨圣诞"],"4-4":["文殊菩萨圣诞"],"4-8":["释迦牟尼佛圣诞"],"4-15":["佛吉祥日"],"4-28":["药王菩萨圣诞"],"5-13":["伽蓝菩萨圣诞"],"6-3":["韦驮菩萨圣诞"],"6-19":["观音菩萨成道"],"7-13":["大势至菩萨圣诞"],"7-15":["佛欢喜日"],"7-24":["龙树菩萨圣诞"],"7-30":["地藏菩萨圣诞"],"8-15":["月光菩萨圣诞"],"8-22":["燃灯佛圣诞"],"9-9":["摩利支天菩萨圣诞"],"9-19":["观世音菩萨出家"],"9-30":["药师琉璃光佛圣诞"],"10-5":["达摩祖师圣诞"],"10-20":["文殊菩萨出家"],"11-17":["阿弥陀佛圣诞"],"11-19":["日光菩萨圣诞"],"12-8":["释迦牟尼佛成道"],"12-23":["监斋菩萨圣诞"],"12-29":["华严菩萨圣诞"]};class gn{}gn.NUMBER=["{n.one}","{n.two}","{n.three}","{n.four}","{n.five}","{n.six}","{n.seven}","{n.eight}","{n.nine}"];gn.WU_XING=["{wx.shui}","{wx.tu}","{wx.mu}","{wx.mu}","{wx.tu}","{wx.jin}","{wx.jin}","{wx.tu}","{wx.huo}"];gn.POSITION=["{bg.kan}","{bg.kun}","{bg.zhen}","{bg.xun}","{ps.center}","{bg.qian}","{bg.dui}","{bg.gen}","{bg.li}"];gn.LUCK_XUAN_KONG=["{s.goodLuck}","{s.badLuck}","{s.badLuck}","{s.goodLuck}","{s.badLuck}","{s.goodLuck}","{s.badLuck}","{s.goodLuck}","{s.goodLuck}"];gn.YIN_YANG_QI_MEN=["{s.yang}","{s.yin}","{s.yang}","{s.yang}","{s.yang}","{s.yin}","{s.yin}","{s.yang}","{s.yin}"];gn.COLOR=["{s.white}","{s.black}","{s.blue}","{s.green}","{s.yellow}","{s.white}","{s.red}","{s.white}","{s.purple}"];const n0=class{static updateArray(o){const t=n0._ARRAYS[o],l=n0._OBJ_ARRAYS[o],h=Object.keys(t);for(let g=0,f=h.length;g<f;g++){const F=h[g],A=t[F];for(let y=0,x=A.length;y<x;y++)l[F][y]=A[y].replace(/{(.[^}]*)}/g,(S,_)=>n0.getMessage(_))}}static updateStringDictionary(o){const t=n0._DICT_STRING[o],l=n0._OBJ_STRING[o],h=Object.keys(t);for(let g=0,f=h.length;g<f;g++){const F=h[g],A=t[F],y=Object.keys(A);for(let x=0,S=y.length;x<S;x++){const _=y[x],R=_.replace(/{(.[^}]*)}/g,(L,J)=>n0.getMessage(J));l[F][R]=A[_].replace(/{(.[^}]*)}/g,(L,J)=>n0.getMessage(J))}}}static updateNumberDictionary(o){const t=n0._DICT_NUMBER[o],l=n0._OBJ_NUMBER[o],h=Object.keys(t);for(let g=0,f=h.length;g<f;g++){const F=h[g],A=t[F],y=Object.keys(A);for(let x=0,S=y.length;x<S;x++){const _=y[x],R=_.replace(/{(.[^}]*)}/g,(L,J)=>n0.getMessage(J));l[F][R]=A[_]}}}static updateArrayDictionary(o){const t=n0._DICT_ARRAY[o],l=n0._OBJ_ARRAY[o],h=Object.keys(t);for(let g=0,f=h.length;g<f;g++){const F=h[g],A=t[F],y=Object.keys(A);for(let x=0,S=y.length;x<S;x++){const _=y[x],R=_.replace(/{(.[^}]*)}/g,(J,k)=>n0.getMessage(k)),L=A[_];for(let J=0,k=L.length;J<k;J++)L[J]=L[J].replace(/{(.[^}]*)}/g,(a0,W)=>n0.getMessage(W));l[F][R]=L}}}static update(){let o=Object.keys(n0._ARRAYS);for(let t=0,l=o.length;t<l;t++)n0.updateArray(o[t]);o=Object.keys(n0._DICT_STRING);for(let t=0,l=o.length;t<l;t++)n0.updateStringDictionary(o[t]);o=Object.keys(n0._DICT_NUMBER);for(let t=0,l=o.length;t<l;t++)n0.updateNumberDictionary(o[t]);o=Object.keys(n0._DICT_ARRAY);for(let t=0,l=o.length;t<l;t++)n0.updateArrayDictionary(o[t])}static setMessages(o,t){if(!t)return;n0._MESSAGES[o]||(n0._MESSAGES[o]={});const l=Object.keys(t);for(let h=0,g=l.length;h<g;h++){const f=l[h];n0._MESSAGES[o][f]=t[f]}n0.update()}static getMessage(o){let t=n0._MESSAGES[n0._LANG][o];return t==null&&(t=n0._MESSAGES[n0._DEFAULT_LANG][o]),t==null&&(t=o),t}static setLanguage(o){n0._MESSAGES[o]&&(n0._LANG=o,n0.update())}static getLanguage(){return n0._LANG}static initArray(o){const t=n0._ARRAYS[o],l=n0._OBJ_ARRAYS[o],h=Object.keys(t);for(let g=0,f=h.length;g<f;g++){const F=h[g];t[F].length=0;const A=l[F];for(let y=0,x=A.length;y<x;y++)t[F].push(A[y])}}static initArrayDictionary(o){const t=n0._DICT_ARRAY[o],l=n0._OBJ_ARRAY[o],h=Object.keys(t);for(let g=0,f=h.length;g<f;g++){const F=h[g],A=l[F],y=Object.keys(A);for(let x=0,S=y.length;x<S;x++){const _=y[x];t[F][_]=A[_]}}}static initStringDictionary(o){const t=n0._DICT_STRING[o],l=n0._OBJ_STRING[o],h=Object.keys(t);for(let g=0,f=h.length;g<f;g++){const F=h[g],A=l[F],y=Object.keys(A);for(let x=0,S=y.length;x<S;x++){const _=y[x];t[F][_]=A[_]}}}static initNumberDictionary(o){const t=n0._DICT_NUMBER[o],l=n0._OBJ_NUMBER[o],h=Object.keys(t);for(let g=0,f=h.length;g<f;g++){const F=h[g],A=l[F],y=Object.keys(A);for(let x=0,S=y.length;x<S;x++){const _=y[x];t[F][_]=A[_]}}}static init(){if(n0._INIT)return;n0._INIT=!0;let o=Object.keys(n0._ARRAYS);for(let t=0,l=o.length;t<l;t++)n0.initArray(o[t]);o=Object.keys(n0._DICT_STRING);for(let t=0,l=o.length;t<l;t++)n0.initStringDictionary(o[t]);o=Object.keys(n0._DICT_NUMBER);for(let t=0,l=o.length;t<l;t++)n0.initNumberDictionary(o[t]);o=Object.keys(n0._DICT_ARRAY);for(let t=0,l=o.length;t<l;t++)n0.initArrayDictionary(o[t]);n0.setLanguage(n0._DEFAULT_LANG)}};let X=n0;X._DEFAULT_LANG="chs";X._INIT=!1;X._MESSAGES={chs:{"tg.jia":"甲","tg.yi":"乙","tg.bing":"丙","tg.ding":"丁","tg.wu":"戊","tg.ji":"己","tg.geng":"庚","tg.xin":"辛","tg.ren":"壬","tg.gui":"癸","dz.zi":"子","dz.chou":"丑","dz.yin":"寅","dz.mao":"卯","dz.chen":"辰","dz.si":"巳","dz.wu":"午","dz.wei":"未","dz.shen":"申","dz.you":"酉","dz.xu":"戌","dz.hai":"亥","zx.jian":"建","zx.chu":"除","zx.man":"满","zx.ping":"平","zx.ding":"定","zx.zhi":"执","zx.po":"破","zx.wei":"危","zx.cheng":"成","zx.shou":"收","zx.kai":"开","zx.bi":"闭","jz.jiaZi":"甲子","jz.yiChou":"乙丑","jz.bingYin":"丙寅","jz.dingMao":"丁卯","jz.wuChen":"戊辰","jz.jiSi":"己巳","jz.gengWu":"庚午","jz.xinWei":"辛未","jz.renShen":"壬申","jz.guiYou":"癸酉","jz.jiaXu":"甲戌","jz.yiHai":"乙亥","jz.bingZi":"丙子","jz.dingChou":"丁丑","jz.wuYin":"戊寅","jz.jiMao":"己卯","jz.gengChen":"庚辰","jz.xinSi":"辛巳","jz.renWu":"壬午","jz.guiWei":"癸未","jz.jiaShen":"甲申","jz.yiYou":"乙酉","jz.bingXu":"丙戌","jz.dingHai":"丁亥","jz.wuZi":"戊子","jz.jiChou":"己丑","jz.gengYin":"庚寅","jz.xinMao":"辛卯","jz.renChen":"壬辰","jz.guiSi":"癸巳","jz.jiaWu":"甲午","jz.yiWei":"乙未","jz.bingShen":"丙申","jz.dingYou":"丁酉","jz.wuXu":"戊戌","jz.jiHai":"己亥","jz.gengZi":"庚子","jz.xinChou":"辛丑","jz.renYin":"壬寅","jz.guiMao":"癸卯","jz.jiaChen":"甲辰","jz.yiSi":"乙巳","jz.bingWu":"丙午","jz.dingWei":"丁未","jz.wuShen":"戊申","jz.jiYou":"己酉","jz.gengXu":"庚戌","jz.xinHai":"辛亥","jz.renZi":"壬子","jz.guiChou":"癸丑","jz.jiaYin":"甲寅","jz.yiMao":"乙卯","jz.bingChen":"丙辰","jz.dingSi":"丁巳","jz.wuWu":"戊午","jz.jiWei":"己未","jz.gengShen":"庚申","jz.xinYou":"辛酉","jz.renXu":"壬戌","jz.guiHai":"癸亥","sx.rat":"鼠","sx.ox":"牛","sx.tiger":"虎","sx.rabbit":"兔","sx.dragon":"龙","sx.snake":"蛇","sx.horse":"马","sx.goat":"羊","sx.monkey":"猴","sx.rooster":"鸡","sx.dog":"狗","sx.pig":"猪","dw.long":"龙","dw.niu":"牛","dw.gou":"狗","dw.yang":"羊","dw.tu":"兔","dw.shu":"鼠","dw.ji":"鸡","dw.ma":"马","dw.hu":"虎","dw.zhu":"猪","dw.hou":"猴","dw.she":"蛇","dw.huLi":"狐","dw.yan":"燕","dw.bao":"豹","dw.yuan":"猿","dw.yin":"蚓","dw.lu":"鹿","dw.wu":"乌","dw.jiao":"蛟","dw.lang":"狼","dw.fu":"蝠","dw.zhang":"獐","dw.xu":"獝","dw.xie":"獬","dw.han":"犴","dw.he":"貉","dw.zhi":"彘","wx.jin":"金","wx.mu":"木","wx.shui":"水","wx.huo":"火","wx.tu":"土","wx.ri":"日","wx.yue":"月","n.zero":"〇","n.one":"一","n.two":"二","n.three":"三","n.four":"四","n.five":"五","n.six":"六","n.seven":"七","n.eight":"八","n.nine":"九","n.ten":"十","n.eleven":"十一","n.twelve":"十二","d.one":"初一","d.two":"初二","d.three":"初三","d.four":"初四","d.five":"初五","d.six":"初六","d.seven":"初七","d.eight":"初八","d.nine":"初九","d.ten":"初十","d.eleven":"十一","d.twelve":"十二","d.thirteen":"十三","d.fourteen":"十四","d.fifteen":"十五","d.sixteen":"十六","d.seventeen":"十七","d.eighteen":"十八","d.nighteen":"十九","d.twenty":"二十","d.twentyOne":"廿一","d.twentyTwo":"廿二","d.twentyThree":"廿三","d.twentyFour":"廿四","d.twentyFive":"廿五","d.twentySix":"廿六","d.twentySeven":"廿七","d.twentyEight":"廿八","d.twentyNine":"廿九","d.thirty":"三十","m.one":"正","m.two":"二","m.three":"三","m.four":"四","m.five":"五","m.six":"六","m.seven":"七","m.eight":"八","m.nine":"九","m.ten":"十","m.eleven":"冬","m.twelve":"腊","w.sun":"日","w.mon":"一","w.tues":"二","w.wed":"三","w.thur":"四","w.fri":"五","w.sat":"六","xz.aries":"白羊","xz.taurus":"金牛","xz.gemini":"双子","xz.cancer":"巨蟹","xz.leo":"狮子","xz.virgo":"处女","xz.libra":"天秤","xz.scorpio":"天蝎","xz.sagittarius":"射手","xz.capricornus":"摩羯","xz.aquarius":"水瓶","xz.pisces":"双鱼","bg.qian":"乾","bg.kun":"坤","bg.zhen":"震","bg.xun":"巽","bg.kan":"坎","bg.li":"离","bg.gen":"艮","bg.dui":"兑","ps.center":"中","ps.dong":"东","ps.nan":"南","ps.xi":"西","ps.bei":"北","ps.zhong":"中宫","ps.zhengDong":"正东","ps.zhengNan":"正南","ps.zhengXi":"正西","ps.zhengBei":"正北","ps.dongBei":"东北","ps.dongNan":"东南","ps.xiBei":"西北","ps.xiNan":"西南","ps.wai":"外","ps.fangNei":"房内","jq.dongZhi":"冬至","jq.xiaoHan":"小寒","jq.daHan":"大寒","jq.liChun":"立春","jq.yuShui":"雨水","jq.jingZhe":"惊蛰","jq.chunFen":"春分","jq.qingMing":"清明","jq.guYu":"谷雨","jq.liXia":"立夏","jq.xiaoMan":"小满","jq.mangZhong":"芒种","jq.xiaZhi":"夏至","jq.xiaoShu":"小暑","jq.daShu":"大暑","jq.liQiu":"立秋","jq.chuShu":"处暑","jq.baiLu":"白露","jq.qiuFen":"秋分","jq.hanLu":"寒露","jq.shuangJiang":"霜降","jq.liDong":"立冬","jq.xiaoXue":"小雪","jq.daXue":"大雪","sn.qingLong":"青龙","sn.baiHu":"白虎","sn.zhuQue":"朱雀","sn.xuanWu":"玄武","sn.mingTang":"明堂","sn.tianXing":"天刑","sn.tianDe":"天德","sn.jinKui":"金匮","sn.yuTang":"玉堂","sn.siMing":"司命","sn.tianLao":"天牢","sn.gouChen":"勾陈","sn.tianEn":"天恩","sn.muCang":"母仓","sn.shiYang":"时阳","sn.shengQi":"生气","sn.yiHou":"益后","sn.zaiSha":"灾煞","sn.tianHuo":"天火","sn.siJi":"四忌","sn.baLong":"八龙","sn.fuRi":"复日","sn.xuShi":"续世","sn.yueSha":"月煞","sn.yueXu":"月虚","sn.xueZhi":"血支","sn.tianZei":"天贼","sn.wuXu":"五虚","sn.tuFu":"土符","sn.guiJi":"归忌","sn.xueJi":"血忌","sn.yueDe":"月德","sn.yueEn":"月恩","sn.siXiang":"四相","sn.wangRi":"王日","sn.tianCang":"天仓","sn.buJiang":"不将","sn.wuHe":"五合","sn.mingFeiDui":"鸣吠对","sn.yueJian":"月建","sn.xiaoShi":"小时","sn.tuHu":"土府","sn.wangWang":"往亡","sn.yaoAn":"要安","sn.siShen":"死神","sn.tianMa":"天马","sn.jiuHu":"九虎","sn.qiNiao":"七鸟","sn.liuShe":"六蛇","sn.guanRi":"官日","sn.jiQi":"吉期","sn.yuYu":"玉宇","sn.daShi":"大时","sn.daBai":"大败","sn.xianChi":"咸池","sn.shouRi":"守日","sn.tianWu":"天巫","sn.fuDe":"福德","sn.liuYi":"六仪","sn.jinTang":"金堂","sn.yanDui":"厌对","sn.zhaoYao":"招摇","sn.jiuKong":"九空","sn.jiuKan":"九坎","sn.jiuJiao":"九焦","sn.xiangRi":"相日","sn.baoGuang":"宝光","sn.tianGang":"天罡","sn.yueXing":"月刑","sn.yueHai":"月害","sn.youHuo":"游祸","sn.chongRi":"重日","sn.shiDe":"时德","sn.minRi":"民日","sn.sanHe":"三合","sn.linRi":"临日","sn.shiYin":"时阴","sn.mingFei":"鸣吠","sn.siQi":"死气","sn.diNang":"地囊","sn.yueDeHe":"月德合","sn.jingAn":"敬安","sn.puHu":"普护","sn.jieShen":"解神","sn.xiaoHao":"小耗","sn.tianDeHe":"天德合","sn.yueKong":"月空","sn.yiMa":"驿马","sn.tianHou":"天后","sn.chuShen":"除神","sn.yuePo":"月破","sn.daHao":"大耗","sn.wuLi":"五离","sn.yinDe":"阴德","sn.fuSheng":"福生","sn.tianLi":"天吏","sn.zhiSi":"致死","sn.yuanWu":"元武","sn.yangDe":"阳德","sn.tianXi":"天喜","sn.tianYi":"天医","sn.yueYan":"月厌","sn.diHuo":"地火","sn.fourHit":"四击","sn.daSha":"大煞","sn.daHui":"大会","sn.tianYuan":"天愿","sn.liuHe":"六合","sn.wuFu":"五富","sn.shengXin":"圣心","sn.heKui":"河魁","sn.jieSha":"劫煞","sn.siQiong":"四穷","sn.chuShuiLong":"触水龙","sn.baFeng":"八风","sn.tianShe":"天赦","sn.wuMu":"五墓","sn.baZhuan":"八专","sn.yinCuo":"阴错","sn.siHao":"四耗","sn.yangCuo":"阳错","sn.siFei":"四废","sn.sanYin":"三阴","sn.xiaoHui":"小会","sn.yinDaoChongYang":"阴道冲阳","sn.danYin":"单阴","sn.guChen":"孤辰","sn.yinWei":"阴位","sn.xingHen":"行狠","sn.liaoLi":"了戾","sn.jueYin":"绝阴","sn.chunYang":"纯阳","sn.suiBo":"岁薄","sn.yinYangJiaoPo":"阴阳交破","sn.yinYangJuCuo":"阴阳俱错","sn.yinYangJiChong":"阴阳击冲","sn.zhuZhen":"逐阵","sn.yangCuoYinChong":"阳错阴冲","sn.qiFu":"七符","sn.tianGou":"天狗","sn.chengRi":"成日","sn.tianFu":"天符","sn.guYang":"孤阳","sn.jueYang":"绝阳","sn.chunYin":"纯阴","sn.yinShen":"阴神","sn.jieChu":"解除","sn.yangPoYinChong":"阳破阴冲","ss.biJian":"比肩","ss.jieCai":"劫财","ss.shiShen":"食神","ss.shangGuan":"伤官","ss.pianCai":"偏财","ss.zhengCai":"正财","ss.qiSha":"七杀","ss.zhengGuan":"正官","ss.pianYin":"偏印","ss.zhengYin":"正印","s.none":"无","s.huangDao":"黄道","s.heiDao":"黑道","s.goodLuck":"吉","s.badLuck":"凶","s.yin":"阴","s.yang":"阳","s.white":"白","s.black":"黑","s.blue":"碧","s.green":"绿","s.yellow":"黄","s.red":"赤","s.purple":"紫","jr.chuXi":"除夕","jr.chunJie":"春节","jr.yuanXiao":"元宵节","jr.longTou":"龙头节","jr.duanWu":"端午节","jr.qiXi":"七夕节","jr.zhongQiu":"中秋节","jr.chongYang":"重阳节","jr.laBa":"腊八节","jr.yuanDan":"元旦节","jr.qingRen":"情人节","jr.fuNv":"妇女节","jr.zhiShu":"植树节","jr.xiaoFei":"消费者权益日","jr.wuYi":"劳动节","jr.qingNian":"青年节","jr.erTong":"儿童节","jr.yuRen":"愚人节","jr.jianDang":"建党节","jr.jianJun":"建军节","jr.jiaoShi":"教师节","jr.guoQing":"国庆节","jr.wanShengYe":"万圣节前夜","jr.wanSheng":"万圣节","jr.pingAn":"平安夜","jr.shengDan":"圣诞节","ds.changSheng":"长生","ds.muYu":"沐浴","ds.guanDai":"冠带","ds.linGuan":"临官","ds.diWang":"帝旺","ds.shuai":"衰","ds.bing":"病","ds.si":"死","ds.mu":"墓","ds.jue":"绝","ds.tai":"胎","ds.yang":"养","h.first":"初候","h.second":"二候","h.third":"三候","h.qiuYinJie":"蚯蚓结","h.miJiao":"麋角解","h.shuiQuan":"水泉动","h.yanBei":"雁北乡","h.queShi":"鹊始巢","h.zhiShi":"雉始雊","h.jiShi":"鸡始乳","h.zhengNiao":"征鸟厉疾","h.shuiZe":"水泽腹坚","h.dongFeng":"东风解冻","h.zheChongShiZhen":"蛰虫始振","h.yuZhi":"鱼陟负冰","h.taJi":"獭祭鱼","h.houYan":"候雁北","h.caoMuMengDong":"草木萌动","h.taoShi":"桃始华","h.cangGeng":"仓庚鸣","h.yingHua":"鹰化为鸠","h.xuanNiaoZhi":"玄鸟至","h.leiNai":"雷乃发声","h.shiDian":"始电","h.tongShi":"桐始华","h.tianShu":"田鼠化为鴽","h.hongShi":"虹始见","h.pingShi":"萍始生","h.mingJiu":"鸣鸠拂其羽","h.daiSheng":"戴胜降于桑","h.louGuo":"蝼蝈鸣","h.qiuYinChu":"蚯蚓出","h.wangGua":"王瓜生","h.kuCai":"苦菜秀","h.miCao":"靡草死","h.maiQiu":"麦秋至","h.tangLang":"螳螂生","h.juShi":"鵙始鸣","h.fanShe":"反舌无声","h.luJia":"鹿角解","h.tiaoShi":"蜩始鸣","h.banXia":"半夏生","h.wenFeng":"温风至","h.xiShuai":"蟋蟀居壁","h.yingShi":"鹰始挚","h.fuCao":"腐草为萤","h.tuRun":"土润溽暑","h.daYu":"大雨行时","h.liangFeng":"凉风至","h.baiLu":"白露降","h.hanChan":"寒蝉鸣","h.yingNai":"鹰乃祭鸟","h.tianDi":"天地始肃","h.heNai":"禾乃登","h.hongYanLai":"鸿雁来","h.xuanNiaoGui":"玄鸟归","h.qunNiao":"群鸟养羞","h.leiShi":"雷始收声","h.zheChongPiHu":"蛰虫坯户","h.shuiShiHe":"水始涸","h.hongYanLaiBin":"鸿雁来宾","h.queRu":"雀入大水为蛤","h.juYou":"菊有黄花","h.caiNai":"豺乃祭兽","h.caoMuHuangLuo":"草木黄落","h.zheChongXianFu":"蛰虫咸俯","h.shuiShiBing":"水始冰","h.diShi":"地始冻","h.zhiRu":"雉入大水为蜃","h.hongCang":"虹藏不见","h.tianQi":"天气上升地气下降","h.biSe":"闭塞而成冬","h.heDan":"鹖鴠不鸣","h.huShi":"虎始交","h.liTing":"荔挺出","ts.zhan":"占","ts.hu":"户","ts.win":"窗","ts.fang":"房","ts.chuang":"床","ts.lu":"炉","ts.zao":"灶","ts.dui":"碓","ts.mo":"磨","ts.xi":"栖","ts.chu":"厨","ts.ce":"厕","ts.cang":"仓","ts.cangKu":"仓库","ts.daMen":"大门","ts.men":"门","ts.tang":"堂","ly.xianSheng":"先胜","ly.xianFu":"先负","ly.youYin":"友引","ly.foMie":"佛灭","ly.daAn":"大安","ly.chiKou":"赤口","yj.jiSi":"祭祀","yj.qiFu":"祈福","yj.qiuSi":"求嗣","yj.kaiGuang":"开光","yj.suHui":"塑绘","yj.qiJiao":"齐醮","yj.zhaiJiao":"斋醮","yj.muYu":"沐浴","yj.chouShen":"酬神","yj.zaoMiao":"造庙","yj.siZhao":"祀灶","yj.fenXiang":"焚香","yj.xieTu":"谢土","yj.chuHuo":"出火","yj.diaoKe":"雕刻","yj.jiaQu":"嫁娶","yj.DingHun":"订婚","yj.naCai":"纳采","yj.wenMing":"问名","yj.naXu":"纳婿","yj.guiNing":"归宁","yj.anChuang":"安床","yj.heZhang":"合帐","yj.guanJi":"冠笄","yj.dingMeng":"订盟","yj.jinRenKou":"进人口","yj.caiYi":"裁衣","yj.wanMian":"挽面","yj.kaiRong":"开容","yj.xiuFen":"修坟","yj.qiZuan":"启钻","yj.poTu":"破土","yj.anZang":"安葬","yj.liBei":"立碑","yj.chengFu":"成服","yj.chuFu":"除服","yj.kaiShengFen":"开生坟","yj.heShouMu":"合寿木","yj.ruLian":"入殓","yj.yiJiu":"移柩","yj.puDu":"普渡","yj.ruZhai":"入宅","yj.anXiang":"安香","yj.anMen":"安门","yj.xiuZao":"修造","yj.qiJi":"起基","yj.dongTu":"动土","yj.shangLiang":"上梁","yj.shuZhu":"竖柱","yj.kaiJing":"开井开池","yj.zuoBei":"作陂放水","yj.chaiXie":"拆卸","yj.poWu":"破屋","yj.huaiYuan":"坏垣","yj.buYuan":"补垣","yj.faMuZuoLiang":"伐木做梁","yj.zuoZhao":"作灶","yj.jieChu":"解除","yj.kaiZhuYan":"开柱眼","yj.chuanPing":"穿屏扇架","yj.gaiWuHeJi":"盖屋合脊","yj.kaiCe":"开厕","yj.zaoCang":"造仓","yj.saiXue":"塞穴","yj.pingZhi":"平治道涂","yj.zaoQiao":"造桥","yj.zuoCe":"作厕","yj.zhuDi":"筑堤","yj.kaiChi":"开池","yj.faMu":"伐木","yj.kaiQu":"开渠","yj.jueJing":"掘井","yj.saoShe":"扫舍","yj.fangShui":"放水","yj.zaoWu":"造屋","yj.heJi":"合脊","yj.zaoChuChou":"造畜稠","yj.xiuMen":"修门","yj.dingSang":"定磉","yj.zuoLiang":"作梁","yj.xiuShi":"修饰垣墙","yj.jiaMa":"架马","yj.kaiShi":"开市","yj.guaBian":"挂匾","yj.naChai":"纳财","yj.qiuCai":"求财","yj.kaiCang":"开仓","yj.maiChe":"买车","yj.zhiChan":"置产","yj.guYong":"雇佣","yj.chuHuoCai":"出货财","yj.anJiXie":"安机械","yj.zaoCheQi":"造车器","yj.jingLuo":"经络","yj.yunNiang":"酝酿","yj.zuoRan":"作染","yj.guZhu":"鼓铸","yj.zaoChuan":"造船","yj.geMi":"割蜜","yj.zaiZhong":"栽种","yj.quYu":"取渔","yj.jieWang":"结网","yj.muYang":"牧养","yj.anDuiWei":"安碓磑","yj.xiYi":"习艺","yj.ruXue":"入学","yj.liFa":"理发","yj.tanBing":"探病","yj.jianGui":"见贵","yj.chengChuan":"乘船","yj.duShui":"渡水","yj.zhenJiu":"针灸","yj.chuXing":"出行","yj.yiXi":"移徙","yj.fenJu":"分居","yj.TiTou":"剃头","yj.zhengShou":"整手足甲","yj.naChu":"纳畜","yj.buZhuo":"捕捉","yj.tianLie":"畋猎","yj.jiaoNiuMa":"教牛马","yj.huiQinYou":"会亲友","yj.fuRen":"赴任","yj.qiuYi":"求医","yj.zhiBing":"治病","yj.ciSong":"词讼","yj.qiJiDongTu":"起基动土","yj.poWuHuaiYuan":"破屋坏垣","yj.gaiWu":"盖屋","yj.zaoCangKu":"造仓库","yj.liQuanJiaoYi":"立券交易","yj.jiaoYi":"交易","yj.liQuan":"立券","yj.anJi":"安机","yj.huiYou":"会友","yj.qiuYiLiaoBing":"求医疗病","yj.zhuShi":"诸事不宜","yj.yuShi":"馀事勿取","yj.xingSang":"行丧","yj.duanYi":"断蚁","yj.guiXiu":"归岫","xx.bi":"毕","xx.yi":"翼","xx.ji":"箕","xx.kui":"奎","xx.gui":"鬼","xx.di":"氐","xx.xu":"虚","xx.wei":"危","xx.zi":"觜","xx.zhen":"轸","xx.dou":"斗","xx.lou":"娄","xx.liu":"柳","xx.fang":"房","xx.xin":"心","xx.shi":"室","xx.can":"参","xx.jiao":"角","xx.niu":"牛","xx.vei":"胃","xx.xing":"星","xx.zhang":"张","xx.tail":"尾","xx.qiang":"壁","xx.jing":"井","xx.kang":"亢","xx.nv":"女","xx.mao":"昴","sz.chun":"春","sz.xia":"夏","sz.qiu":"秋","sz.dong":"冬","od.first":"孟","od.second":"仲","od.third":"季","yx.shuo":"朔","yx.jiShuo":"既朔","yx.eMeiXin":"蛾眉新","yx.eMei":"蛾眉","yx.xi":"夕","yx.shangXian":"上弦","yx.jiuYe":"九夜","yx.night":"宵","yx.jianYingTu":"渐盈凸","yx.xiaoWang":"小望","yx.wang":"望","yx.jiWang":"既望","yx.liDai":"立待","yx.juDai":"居待","yx.qinDai":"寝待","yx.gengDai":"更待","yx.jianKuiTu":"渐亏凸","yx.xiaXian":"下弦","yx.youMing":"有明","yx.eMeiCan":"蛾眉残","yx.can":"残","yx.xiao":"晓","yx.hui":"晦","ny.sangZhe":"桑柘","ny.baiLa":"白蜡","ny.yangLiu":"杨柳","ny.jinBo":"金箔","ny.haiZhong":"海中","ny.daHai":"大海","ny.shaZhong":"沙中","ny.luZhong":"炉中","ny.shanXia":"山下","ny.daLin":"大林","ny.pingDi":"平地","ny.luPang":"路旁","ny.biShang":"壁上","ny.jianFeng":"剑锋","ny.shanTou":"山头","ny.fuDeng":"覆灯","ny.jianXia":"涧下","ny.tianHe":"天河","ny.chengTou":"城头","ny.daYi":"大驿","ny.chaiChuan":"钗钏","ny.quanZhong":"泉中","ny.daXi":"大溪","ny.wuShang":"屋上","ny.piLi":"霹雳","ny.tianShang":"天上","ny.songBo":"松柏","ny.shiLiu":"石榴","ny.changLiu":"长流"},en:{"tg.jia":"Jia","tg.yi":"Yi","tg.bing":"Bing","tg.ding":"Ding","tg.wu":"Wu","tg.ji":"Ji","tg.geng":"Geng","tg.xin":"Xin","tg.ren":"Ren","tg.gui":"Gui","dz.zi":"Zi","dz.chou":"Chou","dz.yin":"Yin","dz.mao":"Mao","dz.chen":"Chen","dz.si":"Si","dz.wu":"Wu","dz.wei":"Wei","dz.shen":"Shen","dz.you":"You","dz.xu":"Xu","dz.hai":"Hai","zx.jian":"Build","zx.chu":"Remove","zx.man":"Full","zx.ping":"Flat","zx.ding":"Stable","zx.zhi":"Hold","zx.po":"Break","zx.wei":"Danger","zx.cheng":"Complete","zx.shou":"Collect","zx.kai":"Open","zx.bi":"Close","jz.jiaZi":"JiaZi","jz.yiChou":"YiChou","jz.bingYin":"BingYin","jz.dingMao":"DingMao","jz.wuChen":"WuChen","jz.jiSi":"JiSi","jz.gengWu":"GengWu","jz.xinWei":"XinWei","jz.renShen":"RenShen","jz.guiYou":"GuiYou","jz.jiaXu":"JiaXu","jz.yiHai":"YiHai","jz.bingZi":"BingZi","jz.dingChou":"DingChou","jz.wuYin":"WuYin","jz.jiMao":"JiMao","jz.gengChen":"GengChen","jz.xinSi":"XinSi","jz.renWu":"RenWu","jz.guiWei":"GuiWei","jz.jiaShen":"JiaShen","jz.yiYou":"YiYou","jz.bingXu":"BingXu","jz.dingHai":"DingHai","jz.wuZi":"WuZi","jz.jiChou":"JiChou","jz.gengYin":"GengYin","jz.xinMao":"XinMao","jz.renChen":"RenChen","jz.guiSi":"GuiSi","jz.jiaWu":"JiaWu","jz.yiWei":"YiWei","jz.bingShen":"BingShen","jz.dingYou":"DingYou","jz.wuXu":"WuXu","jz.jiHai":"JiHai","jz.gengZi":"GengZi","jz.xinChou":"XinChou","jz.renYin":"RenYin","jz.guiMao":"GuiMao","jz.jiaChen":"JiaChen","jz.yiSi":"YiSi","jz.bingWu":"BingWu","jz.dingWei":"DingWei","jz.wuShen":"WuShen","jz.jiYou":"JiYou","jz.gengXu":"GengXu","jz.xinHai":"XinHai","jz.renZi":"RenZi","jz.guiChou":"GuiChou","jz.jiaYin":"JiaYin","jz.yiMao":"YiMao","jz.bingChen":"BingChen","jz.dingSi":"DingSi","jz.wuWu":"WuWu","jz.jiWei":"JiWei","jz.gengShen":"GengShen","jz.xinYou":"XinYou","jz.renXu":"RenXu","jz.guiHai":"GuiHai","sx.rat":"Rat","sx.ox":"Ox","sx.tiger":"Tiger","sx.rabbit":"Rabbit","sx.dragon":"Dragon","sx.snake":"Snake","sx.horse":"Horse","sx.goat":"Goat","sx.monkey":"Monkey","sx.rooster":"Rooster","sx.dog":"Dog","sx.pig":"Pig","dw.long":"Dragon","dw.niu":"Ox","dw.gou":"Dog","dw.yang":"Goat","dw.tu":"Rabbit","dw.shu":"Rat","dw.ji":"Rooster","dw.ma":"Horse","dw.hu":"Tiger","dw.zhu":"Pig","dw.hou":"Monkey","dw.she":"Snake","dw.huLi":"Fox","dw.yan":"Swallow","dw.bao":"Leopard","dw.yuan":"Ape","dw.yin":"Earthworm","dw.lu":"Deer","dw.wu":"Crow","dw.lang":"Wolf","dw.fu":"Bat","wx.jin":"Metal","wx.mu":"Wood","wx.shui":"Water","wx.huo":"Fire","wx.tu":"Earth","wx.ri":"Sun","wx.yue":"Moon","n.zero":"0","n.one":"1","n.two":"2","n.three":"3","n.four":"4","n.five":"5","n.six":"6","n.seven":"7","n.eight":"8","n.nine":"9","n.ten":"10","n.eleven":"11","n.twelve":"12","w.sun":"Sunday","w.mon":"Monday","w.tues":"Tuesday","w.wed":"Wednesday","w.thur":"Thursday","w.fri":"Friday","w.sat":"Saturday","xz.aries":"Aries","xz.taurus":"Taurus","xz.gemini":"Gemini","xz.cancer":"Cancer","xz.leo":"Leo","xz.virgo":"Virgo","xz.libra":"Libra","xz.scorpio":"Scorpio","xz.sagittarius":"Sagittarius","xz.capricornus":"Capricornus","xz.aquarius":"Aquarius","xz.pisces":"Pisces","bg.qian":"Qian","bg.kun":"Kun","bg.zhen":"Zhen","bg.xun":"Xun","bg.kan":"Kan","bg.li":"Li","bg.gen":"Gen","bg.dui":"Dui","ps.center":"Center","ps.dong":"East","ps.nan":"South","ps.xi":"West","ps.bei":"North","ps.zhong":"Center","ps.zhengDong":"East","ps.zhengNan":"South","ps.zhengXi":"West","ps.zhengBei":"North","ps.dongBei":"Northeast","ps.dongNan":"Southeast","ps.xiBei":"Northwest","ps.xiNan":"Southwest","jq.dongZhi":"Winter Solstice","jq.xiaoHan":"Lesser Cold","jq.daHan":"Great Cold","jq.liChun":"Spring Beginning","jq.yuShui":"Rain Water","jq.jingZhe":"Awakening from Hibernation","jq.chunFen":"Spring Equinox","jq.qingMing":"Fresh Green","jq.guYu":"Grain Rain","jq.liXia":"Beginning of Summer","jq.xiaoMan":"Lesser Fullness","jq.mangZhong":"Grain in Ear","jq.xiaZhi":"Summer Solstice","jq.xiaoShu":"Lesser Heat","jq.daShu":"Greater Heat","jq.liQiu":"Beginning of Autumn","jq.chuShu":"End of Heat","jq.baiLu":"White Dew","jq.qiuFen":"Autumnal Equinox","jq.hanLu":"Cold Dew","jq.shuangJiang":"First Frost","jq.liDong":"Beginning of Winter","jq.xiaoXue":"Light Snow","jq.daXue":"Heavy Snow","sn.qingLong":"Azure Dragon","sn.baiHu":"White Tiger","sn.zhuQue":"Rosefinch","sn.xuanWu":"Black Tortoise","sn.tianEn":"Serene Grace","sn.siShen":"Death","sn.tianMa":"Pegasus","sn.baLong":"Eight Dragon","sn.jiuHu":"Nine Tiger","sn.qiNiao":"Seven Bird","sn.liuShe":"Six Snake","s.none":"None","s.goodLuck":"Good luck","s.badLuck":"Bad luck","s.yin":"Yin","s.yang":"Yang","s.white":"White","s.black":"Black","s.blue":"Blue","s.green":"Green","s.yellow":"Yellow","s.red":"Red","s.purple":"Purple","jr.chuXi":"Chinese New Year's Eve","jr.chunJie":"Luna New Year","jr.yuanXiao":"Lantern Festival","jr.duanWu":"Dragon Boat Festival","jr.qiXi":"Begging Festival","jr.zhongQiu":"Mid-Autumn Festival","jr.laBa":"Laba Festival","jr.yuanDan":"New Year's Day","jr.qingRen":"Valentine's Day","jr.fuNv":"Women's Day","jr.xiaoFei":"Consumer Rights Day","jr.zhiShu":"Arbor Day","jr.wuYi":"International Worker's Day","jr.erTong":"Children's Day","jr.qingNian":"Youth Day","jr.yuRen":"April Fools' Day","jr.jianDang":"Party's Day","jr.jianJun":"Army Day","jr.jiaoShi":"Teachers' Day","jr.guoQing":"National Day","jr.wanShengYe":"All Saints' Eve","jr.wanSheng":"All Saints' Day","jr.pingAn":"Christmas Eve","jr.shengDan":"Christmas Day","ts.zhan":"At","ts.hu":"Household","ts.zao":"Cooker","ts.dui":"Pestle","ts.xi":"Habitat","ts.win":"Window","ts.fang":"Room","ts.chuang":"Bed","ts.lu":"Stove","ts.mo":"Mill","ts.chu":"Kitchen","ts.ce":"Toilet","ts.cang":"Depot","ts.cangKu":"Depot","ts.daMen":"Gate","ts.men":"Door","ts.tang":"Hall","ly.xianSheng":"Win first","ly.xianFu":"Lose first","ly.youYin":"Friend's referral","ly.foMie":"Buddhism's demise","ly.daAn":"Great safety","ly.chiKou":"Chikagoro","yj.jiSi":"Sacrifice","yj.qiFu":"Pray","yj.qiuSi":"Seek heirs","yj.kaiGuang":"Consecretion","yj.suHui":"Paint sculptural","yj.qiJiao":"Build altar","yj.zhaiJiao":"Taoist rites","yj.muYu":"Bathing","yj.chouShen":"Reward gods","yj.zaoMiao":"Build temple","yj.siZhao":"Offer kitchen god","yj.fenXiang":"Burn incense","yj.xieTu":"Earth gratitude","yj.chuHuo":"Expel the flame","yj.diaoKe":"Carving","yj.jiaQu":"Marriage","yj.DingHun":"Engagement","yj.naCai":"Proposing","yj.wenMing":"Ask name","yj.naXu":"Uxorilocal marriage","yj.guiNing":"Visit parents","yj.anChuang":"Bed placing","yj.heZhang":"Make up accounts","yj.guanJi":"Crowning adulthood","yj.dingMeng":"Make alliance","yj.jinRenKou":"Adopt","yj.caiYi":"Dressmaking","yj.wanMian":"Cosmeticsurgery","yj.kaiRong":"Open face","yj.xiuFen":"Grave repair","yj.qiZuan":"Open coffin","yj.poTu":"Break earth","yj.anZang":"Burial","yj.liBei":"Tombstone erecting","yj.chengFu":"Formation of clothes","yj.chuFu":"Mourning clothes removal","yj.kaiShengFen":"Open grave","yj.heShouMu":"Make coffin","yj.ruLian":"Body placing","yj.yiJiu":"Move coffin","yj.puDu":"Save soul","yj.ruZhai":"Enter house","yj.anXiang":"Incenst placement","yj.anMen":"Door placing","yj.xiuZao":"Repair","yj.qiJi":"Digging","yj.dongTu":"Break ground","yj.shangLiang":"Beam placing","yj.shuZhu":"Erecting pillars","yj.kaiJing":"Open pond and well","yj.zuoBei":"Make pond and fill water","yj.chaiXie":"Smash house","yj.poWu":"Break house","yj.huaiYuan":"Demolish","yj.buYuan":"Mending","yj.faMuZuoLiang":"Make beams","yj.zuoZhao":"Make stove","yj.jieChu":"Removal","yj.kaiZhuYan":"Build beam","yj.chuanPing":"Build door","yj.gaiWuHeJi":"Cover house","yj.kaiCe":"Open toilet","yj.zaoCang":"Build depot","yj.saiXue":"Block nest","yj.pingZhi":"Repair roads","yj.zaoQiao":"Build bridge","yj.zuoCe":"Build toilet","yj.zhuDi":"Fill","yj.kaiChi":"Open pond","yj.faMu":"Lumbering","yj.kaiQu":"Canalization","yj.jueJing":"Dig well","yj.saoShe":"Sweep house","yj.fangShui":"Drainage","yj.zaoWu":"Build house","yj.heJi":"Close ridge","yj.zaoChuChou":"Livestock thickening","yj.xiuMen":"Repair door","yj.dingSang":"Fix stone","yj.zuoLiang":"Beam construction","yj.xiuShi":"Decorate wall","yj.jiaMa":"Erect horse","yj.kaiShi":"Opening","yj.guaBian":"Hang plaque","yj.naChai":"Accept wealth","yj.qiuCai":"Seek wealth","yj.kaiCang":"Open depot","yj.maiChe":"Buy car","yj.zhiChan":"Buy property","yj.guYong":"Hire","yj.chuHuoCai":"Delivery","yj.anJiXie":"Build machine","yj.zaoCheQi":"Build car","yj.jingLuo":"Build loom","yj.yunNiang":"Brew","yj.zuoRan":"Dye","yj.guZhu":"Cast","yj.zaoChuan":"Build boat","yj.geMi":"Harvest honey","yj.zaiZhong":"Farming","yj.quYu":"Fishing","yj.jieWang":"Netting","yj.muYang":"Graze","yj.anDuiWei":"Build rub","yj.xiYi":"Learn","yj.ruXue":"Enter school","yj.liFa":"Haircut","yj.tanBing":"Visiting","yj.jianGui":"Meet noble","yj.chengChuan":"Ride boat","yj.duShui":"Cross water","yj.zhenJiu":"Acupuncture","yj.chuXing":"Travel","yj.yiXi":"Move","yj.fenJu":"Live apart","yj.TiTou":"Shave","yj.zhengShou":"Manicure","yj.naChu":"Feed livestock","yj.buZhuo":"Catch","yj.tianLie":"Hunt","yj.jiaoNiuMa":"Train horse","yj.huiQinYou":"Meet friends","yj.fuRen":"Go post","yj.qiuYi":"See doctor","yj.zhiBing":"Treat","yj.ciSong":"Litigation","yj.qiJiDongTu":"Lay foundation","yj.poWuHuaiYuan":"Demolish","yj.gaiWu":"Build house","yj.zaoCangKu":"Build depot","yj.liQuanJiaoYi":"Covenant trade","yj.jiaoYi":"Trade","yj.liQuan":"Covenant","yj.anJi":"Install machine","yj.huiYou":"Meet friends","yj.qiuYiLiaoBing":"Seek treatment","yj.zhuShi":"Everything Sucks","yj.yuShi":"Do nothing else","yj.xingSang":"Funeral","yj.duanYi":"Block ant hole","yj.guiXiu":"Place beam","xx.bi":"Finish","xx.yi":"Wing","xx.ji":"Sieve","xx.kui":"Qui","xx.gui":"Ghost","xx.di":"Foundation","xx.xu":"Virtual","xx.wei":"Danger","xx.zi":"Mouth","xx.zhen":"Cross-bar","xx.dou":"Fight","xx.lou":"Weak","xx.liu":"Willow","xx.fang":"House","xx.xin":"Heart","xx.shi":"Room","xx.can":"Join","xx.jiao":"Horn","xx.niu":"Ox","xx.vei":"Stomach","xx.xing":"Star","xx.zhang":"Chang","xx.tail":"Tail","xx.qiang":"Wall","xx.jing":"Well","xx.kang":"Kang","xx.nv":"Female","xx.mao":"Mao","sz.chun":"Spring","sz.xia":"Summer","sz.qiu":"Autumn","sz.dong":"Winter","yx.shuo":"New","yx.eMeiXin":"New waxing","yx.eMei":"Waxing","yx.xi":"Evening","yx.shangXian":"First quarter","yx.jiuYe":"Nine night","yx.night":"Night","yx.jianYingTu":"Gibbous","yx.xiaoWang":"Little full","yx.wang":"Full","yx.jianKuiTu":"Disseminating","yx.xiaXian":"Third quarter","yx.eMeiCan":"Waning waxing","yx.can":"Waning","yx.xiao":"Daybreak","yx.hui":"Obscure","ny.sangZhe":"Cudrania","ny.baiLa":"Wax","ny.yangLiu":"Willow","ny.jinBo":"Foil","ny.haiZhong":"Sea","ny.daHai":"Ocean","ny.shaZhong":"Sand","ny.luZhong":"Stove","ny.shanXia":"Piedmont","ny.daLin":"Forest","ny.pingDi":"Land","ny.luPang":"Roadside","ny.biShang":"Wall","ny.jianFeng":"Blade","ny.shanTou":"Hilltop","ny.fuDeng":"Light","ny.jianXia":"Valleyn","ny.tianHe":"River","ny.chengTou":"City","ny.daYi":"Post","ny.chaiChuan":"Ornaments","ny.quanZhong":"Spring","ny.daXi":"Stream","ny.wuShang":"Roof","ny.piLi":"Thunderbolt","ny.tianShang":"Sky","ny.songBo":"Coniferin","ny.shiLiu":"Pomegranate","ny.changLiu":"Flows"}};X._OBJ_STRING={LunarUtil:{TIAN_SHEN_TYPE:r.TIAN_SHEN_TYPE,TIAN_SHEN_TYPE_LUCK:r.TIAN_SHEN_TYPE_LUCK,XIU_LUCK:r.XIU_LUCK,LU:r.LU,XIU:r.XIU,SHA:r.SHA,POSITION_DESC:r.POSITION_DESC,NAYIN:r.NAYIN,WU_XING_GAN:r.WU_XING_GAN,WU_XING_ZHI:r.WU_XING_ZHI,SHOU:r.SHOU,GONG:r.GONG,FESTIVAL:r.FESTIVAL,ZHENG:r.ZHENG,ANIMAL:r.ANIMAL,SHI_SHEN:r.SHI_SHEN,XIU_SONG:r.XIU_SONG},SolarUtil:{FESTIVAL:T0.FESTIVAL},TaoUtil:{BA_HUI:ln.BA_HUI,BA_JIE:ln.BA_JIE}};X._DICT_STRING={LunarUtil:{TIAN_SHEN_TYPE:{},TIAN_SHEN_TYPE_LUCK:{},XIU_LUCK:{},LU:{},XIU:{},SHA:{},POSITION_DESC:{},NAYIN:{},WU_XING_GAN:{},WU_XING_ZHI:{},SHOU:{},GONG:{},FESTIVAL:{},ZHENG:{},ANIMAL:{},SHI_SHEN:{},XIU_SONG:{}},SolarUtil:{FESTIVAL:{}},TaoUtil:{BA_HUI:{},BA_JIE:{}}};X._DICT_NUMBER={LunarUtil:{ZHI_TIAN_SHEN_OFFSET:{},CHANG_SHENG_OFFSET:{}}};X._OBJ_NUMBER={LunarUtil:{ZHI_TIAN_SHEN_OFFSET:r.ZHI_TIAN_SHEN_OFFSET,CHANG_SHENG_OFFSET:r.CHANG_SHENG_OFFSET}};X._DICT_ARRAY={LunarUtil:{ZHI_HIDE_GAN:{}}};X._OBJ_ARRAY={LunarUtil:{ZHI_HIDE_GAN:r.ZHI_HIDE_GAN}};X._ARRAYS={LunarUtil:{GAN:[],ZHI:[],JIA_ZI:[],ZHI_XING:[],XUN:[],XUN_KONG:[],CHONG:[],CHONG_GAN:[],CHONG_GAN_TIE:[],HE_GAN_5:[],HE_ZHI_6:[],SHENGXIAO:[],NUMBER:[],POSITION_XI:[],POSITION_YANG_GUI:[],POSITION_YIN_GUI:[],POSITION_FU:[],POSITION_FU_2:[],POSITION_CAI:[],POSITION_TAI_SUI_YEAR:[],POSITION_GAN:[],POSITION_ZHI:[],JIE_QI:[],JIE_QI_IN_USE:[],TIAN_SHEN:[],SHEN_SHA:[],PENGZU_GAN:[],PENGZU_ZHI:[],MONTH_ZHI:[],CHANG_SHENG:[],HOU:[],WU_HOU:[],POSITION_TAI_DAY:[],POSITION_TAI_MONTH:[],YI_JI:[],LIU_YAO:[],MONTH:[],SEASON:[],DAY:[],YUE_XIANG:[]},SolarUtil:{WEEK:[],XINGZUO:[]},TaoUtil:{AN_WU:[]},FotoUtil:{XIU_27:[]},NineStarUtil:{NUMBER:[],WU_XING:[],POSITION:[],LUCK_XUAN_KONG:[],YIN_YANG_QI_MEN:[],COLOR:[]}};X._OBJ_ARRAYS={LunarUtil:{GAN:r.GAN,ZHI:r.ZHI,JIA_ZI:r.JIA_ZI,ZHI_XING:r.ZHI_XING,XUN:r.XUN,XUN_KONG:r.XUN_KONG,CHONG:r.CHONG,CHONG_GAN:r.CHONG_GAN,CHONG_GAN_TIE:r.CHONG_GAN_TIE,HE_GAN_5:r.HE_GAN_5,HE_ZHI_6:r.HE_ZHI_6,SHENGXIAO:r.SHENGXIAO,NUMBER:r.NUMBER,POSITION_XI:r.POSITION_XI,POSITION_YANG_GUI:r.POSITION_YANG_GUI,POSITION_YIN_GUI:r.POSITION_YIN_GUI,POSITION_FU:r.POSITION_FU,POSITION_FU_2:r.POSITION_FU_2,POSITION_CAI:r.POSITION_CAI,POSITION_TAI_SUI_YEAR:r.POSITION_TAI_SUI_YEAR,POSITION_GAN:r.POSITION_GAN,POSITION_ZHI:r.POSITION_ZHI,JIE_QI:r.JIE_QI,JIE_QI_IN_USE:r.JIE_QI_IN_USE,TIAN_SHEN:r.TIAN_SHEN,SHEN_SHA:r.SHEN_SHA,PENGZU_GAN:r.PENGZU_GAN,PENGZU_ZHI:r.PENGZU_ZHI,MONTH_ZHI:r.MONTH_ZHI,CHANG_SHENG:r.CHANG_SHENG,HOU:r.HOU,WU_HOU:r.WU_HOU,POSITION_TAI_DAY:r.POSITION_TAI_DAY,POSITION_TAI_MONTH:r.POSITION_TAI_MONTH,YI_JI:r.YI_JI,LIU_YAO:r.LIU_YAO,MONTH:r.MONTH,SEASON:r.SEASON,DAY:r.DAY,YUE_XIANG:r.YUE_XIANG},SolarUtil:{WEEK:T0.WEEK,XINGZUO:T0.XINGZUO},TaoUtil:{AN_WU:ln.AN_WU},FotoUtil:{XIU_27:O0.XIU_27},NineStarUtil:{NUMBER:gn.NUMBER,WU_XING:gn.WU_XING,POSITION:gn.POSITION,LUCK_XUAN_KONG:gn.LUCK_XUAN_KONG,YIN_YANG_QI_MEN:gn.YIN_YANG_QI_MEN,COLOR:gn.COLOR}};class o8{constructor(t,l){this._year=t.getStartYear()+l,this._age=t.getStartAge()+l,this._index=l,this._daYun=t,this._lunar=t.getLunar()}getYear(){return this._year}getAge(){return this._age}getIndex(){return this._index}getLunar(){return this._lunar}getGanZhi(){let t=r.getJiaZiIndex(this._lunar.getJieQiTable()[X.getMessage("jq.liChun")].getLunar().getYearInGanZhiExact())+this._index;return this._daYun.getIndex()>0&&(t+=this._daYun.getStartAge()-1),t%=r.JIA_ZI.length,r.JIA_ZI[t]}getXun(){return r.getXun(this.getGanZhi())}getXunKong(){return r.getXunKong(this.getGanZhi())}getLiuYue(){const t=[];for(let l=0;l<12;l++)t.push(new s8(this,l));return t}}class h8{constructor(t,l,h){this._year=t.getStartYear()+l,this._age=t.getStartAge()+l,this._index=l,this._daYun=t,this._lunar=t.getLunar(),this._forward=h}getYear(){return this._year}getAge(){return this._age}getIndex(){return this._index}getGanZhi(){let t=r.getJiaZiIndex(this._lunar.getTimeInGanZhi()),l=this._index+1;this._daYun.getIndex()>0&&(l+=this._daYun.getStartAge()-1),t+=this._forward?l:-l;const h=r.JIA_ZI.length;for(;t<0;)t+=h;return t%=h,r.JIA_ZI[t]}getXun(){return r.getXun(this.getGanZhi())}getXunKong(){return r.getXunKong(this.getGanZhi())}}class g8{constructor(t,l){const h=t.getLunar(),g=h.getSolar().getYear(),f=t.getStartSolar().getYear();let F=g,A=1,y=f-1,x=f-g;l>=1&&(F=f+(l-1)*10,A=F-g+1,y=F+9,x=A+9),this._startYear=F,this._endYear=y,this._startAge=A,this._endAge=x,this._index=l,this._yun=t,this._lunar=h}getStartYear(){return this._startYear}getEndYear(){return this._endYear}getStartAge(){return this._startAge}getEndAge(){return this._endAge}getIndex(){return this._index}getLunar(){return this._lunar}getGanZhi(){if(this._index<1)return"";let t=r.getJiaZiIndex(this._lunar.getMonthInGanZhiExact());t+=this._yun.isForward()?this._index:-this._index;const l=r.JIA_ZI.length;return t>=l&&(t-=l),t<0&&(t+=l),r.JIA_ZI[t]}getXun(){return r.getXun(this.getGanZhi())}getXunKong(){return r.getXunKong(this.getGanZhi())}getLiuNian(t=10){this._index<1&&(t=this._endYear-this._startYear+1);const l=[];for(let h=0;h<t;h++)l.push(new o8(this,h));return l}getXiaoYun(t=10){this._index<1&&(t=this._endYear-this._startYear+1);const l=[];for(let h=0;h<t;h++)l.push(new h8(this,h,this._yun.isForward()));return l}}class c8{constructor(t,l,h=1){this._gender=l,this._lunar=t;const g=t.getYearGanIndexExact()%2===0,f=l===1,F=g&&f||!g&&!f;this._forward=F;const A=t.getPrevJie(),y=t.getNextJie(),x=t.getSolar(),S=F?x:A.getSolar(),_=F?y.getSolar():x;let R=0;if(h===2){let L=_.subtractMinute(S);const J=Math.floor(L/4320);L-=J*4320;const k=Math.floor(L/360);L-=k*360;const a0=Math.floor(L/12);L-=a0*12,R=L*2,this._startYear=J,this._startMonth=k,this._startDay=a0}else{const L=_.getHour()==23?11:r.getTimeZhiIndex(_.toYmdHms().substring(11,16)),J=S.getHour()==23?11:r.getTimeZhiIndex(S.toYmdHms().substring(11,16));let k=L-J,a0=_.subtract(S);k<0&&(k+=12,a0--);const W=Math.floor(k*10/30),w0=a0*4+W;this._startDay=k*10-W*30;const c0=Math.floor(w0/12);this._startMonth=w0-c0*12,this._startYear=c0}this._startHour=R}getGender(){return this._gender}getStartYear(){return this._startYear}getStartMonth(){return this._startMonth}getStartDay(){return this._startDay}getStartHour(){return this._startHour}isForward(){return this._forward}getLunar(){return this._lunar}getStartSolar(){let t=this._lunar.getSolar();return t=t.nextYear(this._startYear),t=t.nextMonth(this._startMonth),t=t.next(this._startDay),t.nextHour(this._startHour)}getDaYun(t=10){const l=[];for(let h=0;h<t;h++)l.push(new g8(this,h));return l}}class V5{constructor(t){this._sect=2,this._lunar=t}static fromLunar(t){return new V5(t)}getSect(){return this._sect}setSect(t){this._sect=t==1?1:2}getDayGanIndex(){return this._sect===2?this._lunar.getDayGanIndexExact2():this._lunar.getDayGanIndexExact()}getDayZhiIndex(){return this._sect===2?this._lunar.getDayZhiIndexExact2():this._lunar.getDayZhiIndexExact()}getYear(){return this._lunar.getYearInGanZhiExact()}getYearGan(){return this._lunar.getYearGanExact()}getYearZhi(){return this._lunar.getYearZhiExact()}getYearHideGan(){const t=r.ZHI_HIDE_GAN[this.getYearZhi()];return t||[]}getYearWuXing(){const t=r.WU_XING_GAN[this.getYearGan()],l=r.WU_XING_ZHI[this.getYearZhi()];return t&&l?t+l:""}getYearNaYin(){const t=r.NAYIN[this.getYear()];return t||""}getYearShiShenGan(){const t=r.SHI_SHEN[this.getDayGan()+this.getYearGan()];return t||""}getYearShiShenZhi(){const t=this.getDayGan(),l=r.ZHI_HIDE_GAN[this.getYearZhi()],h=[];if(l)for(let g=0,f=l.length;g<f;g++){const F=r.SHI_SHEN[t+l[g]];F&&h.push(F)}return h}getDiShi(t){const l=r.CHANG_SHENG_OFFSET[this.getDayGan()];if(l==null)return"";let h=l+(this.getDayGanIndex()%2==0?t:-t);return h>=12&&(h-=12),h<0&&(h+=12),r.CHANG_SHENG[h]}getYearDiShi(){return this.getDiShi(this._lunar.getYearZhiIndexExact())}getYearXun(){return this._lunar.getYearXunExact()}getYearXunKong(){return this._lunar.getYearXunKongExact()}getMonth(){return this._lunar.getMonthInGanZhiExact()}getMonthGan(){return this._lunar.getMonthGanExact()}getMonthZhi(){return this._lunar.getMonthZhiExact()}getMonthHideGan(){const t=r.ZHI_HIDE_GAN[this.getMonthZhi()];return t||[]}getMonthWuXing(){const t=r.WU_XING_GAN[this.getMonthGan()],l=r.WU_XING_ZHI[this.getMonthZhi()];return t&&l?t+l:""}getMonthNaYin(){const t=r.NAYIN[this.getMonth()];return t||""}getMonthShiShenGan(){const t=r.SHI_SHEN[this.getDayGan()+this.getMonthGan()];return t||""}getMonthShiShenZhi(){const t=this.getDayGan(),l=r.ZHI_HIDE_GAN[this.getMonthZhi()],h=[];if(l)for(let g=0,f=l.length;g<f;g++){const F=r.SHI_SHEN[t+l[g]];F&&h.push(F)}return h}getMonthDiShi(){return this.getDiShi(this._lunar.getMonthZhiIndexExact())}getMonthXun(){return this._lunar.getMonthXunExact()}getMonthXunKong(){return this._lunar.getMonthXunKongExact()}getDay(){return this._sect===2?this._lunar.getDayInGanZhiExact2():this._lunar.getDayInGanZhiExact()}getDayGan(){return this._sect===2?this._lunar.getDayGanExact2():this._lunar.getDayGanExact()}getDayZhi(){return this._sect===2?this._lunar.getDayZhiExact2():this._lunar.getDayZhiExact()}getDayHideGan(){const t=r.ZHI_HIDE_GAN[this.getDayZhi()];return t||[]}getDayWuXing(){const t=r.WU_XING_GAN[this.getDayGan()],l=r.WU_XING_ZHI[this.getDayZhi()];return t&&l?t+l:""}getDayNaYin(){const t=r.NAYIN[this.getDay()];return t||""}getDayShiShenGan(){return"日主"}getDayShiShenZhi(){const t=this.getDayGan(),l=r.ZHI_HIDE_GAN[this.getDayZhi()],h=[];if(l)for(let g=0,f=l.length;g<f;g++){const F=r.SHI_SHEN[t+l[g]];F&&h.push(F)}return h}getDayDiShi(){return this.getDiShi(this.getDayZhiIndex())}getDayXun(){return this._sect===2?this._lunar.getDayXunExact2():this._lunar.getDayXunExact()}getDayXunKong(){return this._sect===2?this._lunar.getDayXunKongExact2():this._lunar.getDayXunKongExact()}getTime(){return this._lunar.getTimeInGanZhi()}getTimeGan(){return this._lunar.getTimeGan()}getTimeZhi(){return this._lunar.getTimeZhi()}getTimeHideGan(){const t=r.ZHI_HIDE_GAN[this.getTimeZhi()];return t||[]}getTimeWuXing(){const t=r.WU_XING_GAN[this._lunar.getTimeGan()],l=r.WU_XING_ZHI[this._lunar.getTimeZhi()];return t&&l?t+l:""}getTimeNaYin(){const t=r.NAYIN[this.getTime()];return t||""}getTimeShiShenGan(){const t=r.SHI_SHEN[this.getDayGan()+this.getTimeGan()];return t||""}getTimeShiShenZhi(){const t=this.getDayGan(),l=r.ZHI_HIDE_GAN[this.getTimeZhi()],h=[];if(l)for(let g=0,f=l.length;g<f;g++){const F=r.SHI_SHEN[t+l[g]];F&&h.push(F)}return h}getTimeDiShi(){return this.getDiShi(this._lunar.getTimeZhiIndex())}getTimeXun(){return this._lunar.getTimeXun()}getTimeXunKong(){return this._lunar.getTimeXunKong()}getTaiYuan(){let t=this._lunar.getMonthGanIndexExact()+1;t>=10&&(t-=10);let l=this._lunar.getMonthZhiIndexExact()+3;return l>=12&&(l-=12),r.GAN[t+1]+r.ZHI[l+1]}getTaiYuanNaYin(){const t=r.NAYIN[this.getTaiYuan()];return t||""}getTaiXi(){const t=this._sect==2?this._lunar.getDayGanIndexExact2():this._lunar.getDayGanIndexExact(),l=this._sect==2?this._lunar.getDayZhiIndexExact2():this._lunar.getDayZhiIndexExact();return r.HE_GAN_5[t]+r.HE_ZHI_6[l]}getTaiXiNaYin(){const t=r.NAYIN[this.getTaiXi()];return t||""}getMingGong(){const t=r.find(this.getMonthZhi(),r.MONTH_ZHI).index,l=r.find(this.getTimeZhi(),r.MONTH_ZHI).index;let h=t+l;h=(h>=14?26:14)-h;let g=(this._lunar.getYearGanIndexExact()+1)*2+h;for(;g>10;)g-=10;return r.GAN[g]+r.MONTH_ZHI[h]}getMingGongNaYin(){const t=r.NAYIN[this.getMingGong()];return t||""}getShenGong(){const t=r.find(this.getMonthZhi(),r.MONTH_ZHI).index,l=r.find(this.getTimeZhi(),r.ZHI).index;let h=t+l;h>12&&(h-=12);let g=(this._lunar.getYearGanIndexExact()+1)*2+h;for(;g>10;)g-=10;return r.GAN[g]+r.MONTH_ZHI[h]}getShenGongNaYin(){const t=r.NAYIN[this.getShenGong()];return t||""}getLunar(){return this._lunar}getYun(t,l=1){return new c8(this._lunar,t,l)}toString(){return this.getYear()+" "+this.getMonth()+" "+this.getDay()+" "+this.getTime()}}const a2=class{static fromIndex(o){return new a2(o)}constructor(o){this._index=o}getNumber(){return gn.NUMBER[this._index]}getColor(){return gn.COLOR[this._index]}getWuXing(){return gn.WU_XING[this._index]}getPosition(){return gn.POSITION[this._index]}getPositionDesc(){const o=r.POSITION_DESC[this.getPosition()];return o||""}getNameInXuanKong(){return a2.NAME_XUAN_KONG[this._index]}getNameInBeiDou(){return a2.NAME_BEI_DOU[this._index]}getNameInQiMen(){return a2.NAME_QI_MEN[this._index]}getNameInTaiYi(){return a2.NAME_TAI_YI[this._index]}getLuckInQiMen(){return a2.LUCK_QI_MEN[this._index]}getLuckInXuanKong(){return gn.LUCK_XUAN_KONG[this._index]}getYinYangInQiMen(){return gn.YIN_YANG_QI_MEN[this._index]}getTypeInTaiYi(){return a2.TYPE_TAI_YI[this._index]}getBaMenInQiMen(){return a2.BA_MEN_QI_MEN[this._index]}getSongInTaiYi(){return a2.SONG_TAI_YI[this._index]}getIndex(){return this._index}toString(){return this.getNumber()+this.getColor()+this.getWuXing()+this.getNameInBeiDou()}toFullString(){let o=this.getNumber();return o+=this.getColor(),o+=this.getWuXing(),o+=" ",o+=this.getPosition(),o+="(",o+=this.getPositionDesc(),o+=") ",o+=this.getNameInBeiDou(),o+=" 玄空[",o+=this.getNameInXuanKong(),o+=" ",o+=this.getLuckInXuanKong(),o+="] 奇门[",o+=this.getNameInQiMen(),o+=" ",o+=this.getLuckInQiMen(),this.getBaMenInQiMen().length>0&&(o+=" ",o+=this.getBaMenInQiMen(),o+="门"),o+=" ",o+=this.getYinYangInQiMen(),o+="] 太乙[",o+=this.getNameInTaiYi(),o+=" ",o+=this.getTypeInTaiYi(),o+="]",o}};let yn=a2;yn.NAME_BEI_DOU=["天枢","天璇","天玑","天权","玉衡","开阳","摇光","洞明","隐元"];yn.NAME_XUAN_KONG=["贪狼","巨门","禄存","文曲","廉贞","武曲","破军","左辅","右弼"];yn.NAME_QI_MEN=["天蓬","天芮","天冲","天辅","天禽","天心","天柱","天任","天英"];yn.BA_MEN_QI_MEN=["休","死","伤","杜","","开","惊","生","景"];yn.NAME_TAI_YI=["太乙","摄提","轩辕","招摇","天符","青龙","咸池","太阴","天乙"];yn.TYPE_TAI_YI=["吉神","凶神","安神","安神","凶神","吉神","凶神","吉神","吉神"];yn.SONG_TAI_YI=["门中太乙明，星官号贪狼，赌彩财喜旺，婚姻大吉昌，出入无阻挡，参谒见贤良，此行三五里，黑衣别阴阳。","门前见摄提，百事必忧疑，相生犹自可，相克祸必临，死门并相会，老妇哭悲啼，求谋并吉事，尽皆不相宜，只可藏隐遁，若动伤身疾。","出入会轩辕，凡事必缠牵，相生全不美，相克更忧煎，远行多不利，博彩尽输钱，九天玄女法，句句不虚言。","招摇号木星，当之事莫行，相克行人阻，阴人口舌迎，梦寐多惊惧，屋响斧自鸣，阴阳消息理，万法弗违情。","五鬼为天符，当门阴女谋，相克无好事，行路阻中途，走失难寻觅，道逢有尼姑，此星当门值，万事有灾除。","神光跃青龙，财气喜重重，投入有酒食，赌彩最兴隆，更逢相生旺，休言克破凶，见贵安营寨，万事总吉同。","吾将为咸池，当之尽不宜，出入多不利，相克有灾情，赌彩全输尽，求财空手回，仙人真妙语，愚人莫与知，动用虚惊退，反复逆风吹。","坐临太阴星，百祸不相侵，求谋悉成就，知交有觅寻，回风归来路，恐有殃伏起，密语中记取，慎乎莫轻行。","迎来天乙星，相逢百事兴，运用和合庆，茶酒喜相迎，求谋并嫁娶，好合有天成，祸福如神验，吉凶甚分明。"];yn.LUCK_QI_MEN=["大凶","大凶","小吉","大吉","大吉","大吉","小凶","小吉","小凶"];class r8{constructor(t,l){this._name=t,this._index=l}getName(){return this._name}setName(t){this._name=t}getIndex(){return this._index}setIndex(t){this._index=t}toString(){return this.getName()}toFullString(){return this.getName()+"第"+this.getIndex()+"天"}}class yi{constructor(t,l){this._name=t,this._index=l}getName(){return this._name}setName(t){this._name=t}getIndex(){return this._index}setIndex(t){this._index=t}toString(){return this.getName()}toFullString(){return this.getName()+"第"+this.getIndex()+"天"}}class Bi{static fromYm(t,l){return pn.fromYear(t).getMonth(l)}constructor(t,l,h,g,f){this._year=t,this._month=l,this._dayCount=h,this._firstJulianDay=g,this._index=f,this._zhiIndex=(Math.abs(l)-1+r.BASE_MONTH_ZHI_INDEX)%12}getYear(){return this._year}getMonth(){return this._month}getIndex(){return this._index}getGanIndex(){const t=(pn.fromYear(this._year).getGanIndex()+1)%5*2;return(Math.abs(this._month)-1+t)%10}getZhiIndex(){return this._zhiIndex}getGan(){return r.GAN[this.getGanIndex()+1]}getZhi(){return r.ZHI[this._zhiIndex+1]}getGanZhi(){return this.getGan()+this.getZhi()}isLeap(){return this._month<0}getDayCount(){return this._dayCount}getFirstJulianDay(){return this._firstJulianDay}getPositionXi(){return r.POSITION_XI[this.getGanIndex()+1]}getPositionXiDesc(){return r.POSITION_DESC[this.getPositionXi()]}getPositionYangGui(){return r.POSITION_YANG_GUI[this.getGanIndex()+1]}getPositionYangGuiDesc(){return r.POSITION_DESC[this.getPositionYangGui()]}getPositionYinGui(){return r.POSITION_YIN_GUI[this.getGanIndex()+1]}getPositionYinGuiDesc(){return r.POSITION_DESC[this.getPositionYinGui()]}getPositionFu(t=2){return(t==1?r.POSITION_FU:r.POSITION_FU_2)[this.getGanIndex()+1]}getPositionFuDesc(t=2){return r.POSITION_DESC[this.getPositionFu(t)]}getPositionCai(){return r.POSITION_CAI[this.getGanIndex()+1]}getPositionCaiDesc(){return r.POSITION_DESC[this.getPositionCai()]}getPositionTaiSui(){switch(Math.abs(this._month)){case 1:case 5:case 9:return"艮";case 3:case 7:case 11:return"坤";case 4:case 8:case 12:return"巽"}return r.POSITION_GAN[y0.fromJulianDay(this.getFirstJulianDay()).getLunar().getMonthGanIndex()]}getPositionTaiSuiDesc(){return r.POSITION_DESC[this.getPositionTaiSui()]}getNineStar(){const t=pn.fromYear(this._year).getZhiIndex()%3,h=(13+Math.abs(this._month))%12;let g=27-t*3;h<r.BASE_MONTH_ZHI_INDEX&&(g-=3);const f=(g-h)%9;return yn.fromIndex(f)}toString(){return`${this.getYear()}年${this.isLeap()?"闰":""}${r.MONTH[Math.abs(this.getMonth())]}月(${this.getDayCount()})天`}next(t){if(t==0)return Bi.fromYm(this._year,this._month);{let l=Math.abs(t),h=this._year,g=h,f=this._month,F=0,A=pn.fromYear(h).getMonths();if(t>0){for(;;){const y=A.length;for(let _=0;_<y;_++){const R=A[_];if(R.getYear()===g&&R.getMonth()===f){F=_;break}}const x=y-F-1;if(l<x)break;l-=x;const S=A[y-1];g=S.getYear(),f=S.getMonth(),h++,A=pn.fromYear(h).getMonths()}return A[F+l]}else{for(;;){const y=A.length;for(let S=0;S<y;S++){const _=A[S];if(_.getYear()===g&&_.getMonth()===f){F=S;break}}if(l<=F)break;l-=F;const x=A[0];g=x.getYear(),f=x.getMonth(),h--,A=pn.fromYear(h).getMonths()}return A[F-l]}}}}const H=class{static decode(o){const t="0000000000",l=t+t;return o=o.replace(/J/g,"00"),o=o.replace(/I/g,"000"),o=o.replace(/H/g,"0000"),o=o.replace(/G/g,"00000"),o=o.replace(/t/g,"02"),o=o.replace(/s/g,"002"),o=o.replace(/r/g,"0002"),o=o.replace(/q/g,"00002"),o=o.replace(/p/g,"000002"),o=o.replace(/o/g,"0000002"),o=o.replace(/n/g,"00000002"),o=o.replace(/m/g,"000000002"),o=o.replace(/l/g,"0000000002"),o=o.replace(/k/g,"01"),o=o.replace(/j/g,"0101"),o=o.replace(/i/g,"001"),o=o.replace(/h/g,"001001"),o=o.replace(/g/g,"0001"),o=o.replace(/f/g,"00001"),o=o.replace(/e/g,"000001"),o=o.replace(/d/g,"0000001"),o=o.replace(/c/g,"00000001"),o=o.replace(/b/g,"000000001"),o=o.replace(/a/g,"0000000001"),o=o.replace(/A/g,l+l+l),o=o.replace(/B/g,l+l+t),o=o.replace(/C/g,l+l),o=o.replace(/D/g,l+t),o=o.replace(/E/g,l),o=o.replace(/F/g,t),o}static nutationLon2(o){let t=-1.742*o;const l=o*o;let h=0;for(let g=0,f=H.NUT_B.length;g<f;g+=5)h+=(H.NUT_B[g+3]+t)*Math.sin(H.NUT_B[g]+H.NUT_B[g+1]*o+H.NUT_B[g+2]*l),t=0;return h/100/H.SECOND_PER_RAD}static eLon(o,t){o/=10;let l=0,h=1;const g=1,f=H.XL0[g+1]-H.XL0[g];for(let A=0;A<6;A++,h*=o){const y=Math.floor(H.XL0[g+A]),x=Math.floor(H.XL0[g+1+A]),S=x-y;if(S==0)continue;let _=0;t<0?_=x:(_=Math.floor(3*t*S/f+.5+y),A!=0&&(_+=3),_>x&&(_=x));let R=0;for(let L=y;L<_;L+=3)R+=H.XL0[L]*Math.cos(H.XL0[L+1]+o*H.XL0[L+2]);l+=R*h}l/=H.XL0[0];const F=o*o;return l+=(-.0728-2.7702*o-1.1019*F-.0996*F*o)/H.SECOND_PER_RAD,l}static mLon(o,t){const l=H.XL1,h=l[0].length;let g=1,f=0,F=o*o,A=F*o,y=A*o;const x=y*o,S=o-10;f+=(3.81034409+8399.684730072*o-3319e-8*F+311e-10*A-2033e-13*y)*H.SECOND_PER_RAD,f+=5028.792262*o+1.1124406*F+7699e-8*A-23479e-9*y-178e-10*x,S>0&&(f+=-.866+1.43*S+.054*S*S),F/=1e4,A/=1e8,y/=1e8,t*=6,t<0&&(t=h);for(let _=0,R=l.length;_<R;_++,g*=o){const L=l[_],J=L.length;let k=Math.floor(t*J/h+.5);_>0&&(k+=6),k>=J&&(k=J);let a0=0;for(let W=0;W<k;W+=6)a0+=L[W]*Math.cos(L[W+1]+o*L[W+2]+F*L[W+3]+A*L[W+4]+y*L[W+5]);f+=a0*g}return f/=H.SECOND_PER_RAD,f}static gxcSunLon(o){const t=o*o,l=-.043126+628.301955*o-2732e-9*t;return-20.49552*(1+(.016708634-42037e-9*o-1267e-10*t)*Math.cos(l))/H.SECOND_PER_RAD}static ev(o){const t=628.307585*o;return 628.332+21*Math.sin(1.527+t)+.44*Math.sin(1.48+t*2)+.129*Math.sin(5.82+t)*o+55e-5*Math.sin(4.21+t)*o*o}static saLon(o,t){return H.eLon(o,t)+H.nutationLon2(o)+H.gxcSunLon(o)+Math.PI}static dtExt(o,t){const l=(o-1820)/100;return-20+t*l*l}static dtCalc(o){const t=H.DT_AT.length,l=H.DT_AT[t-2],h=H.DT_AT[t-1];if(o>=l)return o>l+100?H.dtExt(o,31):H.dtExt(o,31)-(H.dtExt(l,31)-h)*(l+100-o)/100;let g=0;for(;g<t&&!(o<H.DT_AT[g+5]);g+=5);const f=(o-H.DT_AT[g])/(H.DT_AT[g+5]-H.DT_AT[g])*10,F=f*f,A=F*f;return H.DT_AT[g+1]+H.DT_AT[g+2]*f+H.DT_AT[g+3]*F+H.DT_AT[g+4]*A}static dtT(o){return H.dtCalc(o/365.2425+2e3)/H.SECOND_PER_DAY}static mv(o){let t=8399.71-914*Math.sin(.7848+8328.691425*o+1523e-7*o*o);return t-=179*Math.sin(2.543+15542.7543*o)+160*Math.sin(.1874+7214.0629*o)+62*Math.sin(3.14+16657.3828*o)+34*Math.sin(4.827+16866.9323*o)+22*Math.sin(4.9+23871.4457*o)+12*Math.sin(2.59+14914.4523*o)+7*Math.sin(.23+6585.7609*o)+5*Math.sin(.9+25195.624*o)+5*Math.sin(2.32-7700.3895*o)+5*Math.sin(3.88+8956.9934*o)+5*Math.sin(.49+7771.3771*o),t}static saLonT(o){let t=628.3319653318,l=(o-1.75347-Math.PI)/t;return t=H.ev(l),l+=(o-H.saLon(l,10))/t,t=H.ev(l),l+=(o-H.saLon(l,-1))/t,l}static msaLon(o,t,l){return H.mLon(o,t)+-34e-7-(H.eLon(o,l)+H.gxcSunLon(o)+Math.PI)}static msaLonT(o){let t=7771.37714500204,l=(o+1.08472)/t;return l+=(o-H.msaLon(l,3,3))/t,t=H.mv(l)-H.ev(l),l+=(o-H.msaLon(l,20,10))/t,l+=(o-H.msaLon(l,-1,60))/t,l}static saLonT2(o){const t=628.3319653318;let l=(o-1.75347-Math.PI)/t;return l-=(5297e-9*l*l+.0334166*Math.cos(4.669257+628.307585*l)+2061e-7*Math.cos(2.67823+628.307585*l)*l)/t,l+=(o-H.eLon(l,8)-Math.PI+(20.5+17.2*Math.sin(2.1824-33.75705*l))/H.SECOND_PER_RAD)/t,l}static msaLonT2(o){let t=7771.37714500204,l=(o+1.08472)/t,h=l*l;l-=(-3309e-8*h+.10976*Math.cos(.784758+8328.6914246*l+152292e-9*h)+.02224*Math.cos(.1874+7214.0628654*l-21848e-8*h)-.03342*Math.cos(4.669257+628.307585*l))/t,h=l*l;const g=H.mLon(l,20)-(4.8950632+628.3319653318*l+5297e-9*h+.0334166*Math.cos(4.669257+628.307585*l)+2061e-7*Math.cos(2.67823+628.307585*l)*l+349e-6*Math.cos(4.6261+1256.61517*l)-20.5/H.SECOND_PER_RAD);return t=7771.38-914*Math.sin(.7848+8328.691425*l+1523e-7*h)-179*Math.sin(2.543+15542.7543*l)-160*Math.sin(.1874+7214.0629*l),l+=(o-g)/t,l}static qiHigh(o){let t=H.saLonT2(o)*36525;t=t-H.dtT(t)+H.ONE_THIRD;const l=(t+.5)%1*H.SECOND_PER_DAY;return(l<1200||l>H.SECOND_PER_DAY-1200)&&(t=H.saLonT(o)*36525-H.dtT(t)+H.ONE_THIRD),t}static shuoHigh(o){let t=H.msaLonT2(o)*36525;t=t-H.dtT(t)+H.ONE_THIRD;const l=(t+.5)%1*H.SECOND_PER_DAY;return(l<1800||l>H.SECOND_PER_DAY-1800)&&(t=H.msaLonT(o)*36525-H.dtT(t)+H.ONE_THIRD),t}static qiLow(o){const t=628.3319653318;let l=(o-4.895062166)/t;l-=(53*l*l+334116*Math.cos(4.67+628.307585*l)+2061*Math.cos(2.678+628.3076*l)*l)/t/1e7;const h=4895062166e-2+6283319653318e-3*l+53*l*l+334166*Math.cos(4.669257+628.307585*l)+3489*Math.cos(4.6261+1256.61517*l)+2060.6*Math.cos(2.67823+628.307585*l)*l-994-834*Math.sin(2.1824-33.75705*l);return l-=(h/1e7-o)/628.332+(32*(l+1.8)*(l+1.8)-20)/H.SECOND_PER_DAY/36525,l*36525+H.ONE_THIRD}static shuoLow(o){const t=7771.37714500204;let l=(o+1.08472)/t;return l-=(-331e-7*l*l+.10976*Math.cos(.785+8328.6914*l)+.02224*Math.cos(.187+7214.0629*l)-.03342*Math.cos(4.669+628.3076*l))/t+(32*(l+1.8)*(l+1.8)-20)/H.SECOND_PER_DAY/36525,l*36525+H.ONE_THIRD}static calcShuo(o){const t=H.SHUO_KB.length;let l=0;const h=14;o+=y0.J2000;const g=H.SHUO_KB[0]-h,f=H.SHUO_KB[t-1]-h,F=2436935;if(o<g||o>=F)l=Math.floor(H.shuoHigh(Math.floor((o+h-2451551)/29.5306)*Math.PI*2)+.5);else if(o>=g&&o<f){let A=0;for(;A<t&&!(o+h<H.SHUO_KB[A+2]);A+=2);l=H.SHUO_KB[A]+H.SHUO_KB[A+1]*Math.floor((o+h-H.SHUO_KB[A])/H.SHUO_KB[A+1]),l=Math.floor(l+.5),l==1683460&&l++,l-=y0.J2000}else if(o>=f&&o<F){l=Math.floor(H.shuoLow(Math.floor((o+h-2451551)/29.5306)*Math.PI*2)+.5);const A=Math.floor((o-f)/29.5306),y=H.SB.substring(A,A+1);y=="1"?l+=1:y=="2"&&(l-=1)}return l}static calcQi(o){const t=H.QI_KB.length;let l=0;const h=7;o+=y0.J2000;const g=H.QI_KB[0]-h,f=H.QI_KB[t-1]-h,F=2436935;if(o<g||o>=F)l=Math.floor(H.qiHigh(Math.floor((o+h-2451259)/365.2422*24)*Math.PI/12)+.5);else if(o>=g&&o<f){let A=0;for(;A<t&&!(o+h<H.QI_KB[A+2]);A+=2);l=H.QI_KB[A]+H.QI_KB[A+1]*Math.floor((o+h-H.QI_KB[A])/H.QI_KB[A+1]),l=Math.floor(l+.5),l==1683460&&l++,l-=y0.J2000}else if(o>=f&&o<F){l=Math.floor(H.qiLow(Math.floor((o+h-2451259)/365.2422*24)*Math.PI/12)+.5);const A=Math.floor((o-f)/365.2422*24),y=H.QB.substring(A,A+1);y=="1"?l+=1:y=="2"&&(l-=1)}return l}static qiAccurate(o){const t=H.saLonT(o)*36525;return t-H.dtT(t)+H.ONE_THIRD}static qiAccurate2(o){const t=Math.PI/12,l=Math.floor((o+293)/365.2422*24)*t,h=H.qiAccurate(l);return h-o>5?H.qiAccurate(l-t):h-o<-5?H.qiAccurate(l+t):h}};let hn=H;hn.ONE_THIRD=1/3;hn.SECOND_PER_DAY=86400;hn.SECOND_PER_RAD=648e3/Math.PI;hn.NUT_B=[2.1824,-33.75705,36e-6,-1720,920,3.5069,1256.66393,11e-6,-132,57,1.3375,16799.4182,-51e-6,-23,10,4.3649,-67.5141,72e-6,21,-9,.04,-628.302,0,-14,0,2.36,8328.691,0,7,0,3.46,1884.966,0,-5,2,5.44,16833.175,0,-4,2,3.69,25128.11,0,-3,0,3.55,628.362,0,2,0];hn.DT_AT=[-4e3,108371.7,-13036.8,392,0,-500,17201,-627.82,16.17,-.3413,-150,12200.6,-346.41,5.403,-.1593,150,9113.8,-328.13,-1.647,.0377,500,5707.5,-391.41,.915,.3145,900,2203.4,-283.45,13.034,-.1778,1300,490.1,-57.35,2.085,-.0072,1600,120,-9.81,-1.532,.1403,1700,10.2,-.91,.51,-.037,1800,13.4,-.72,.202,-.0193,1830,7.8,-1.81,.416,-.0247,1860,8.3,-.13,-.406,.0292,1880,-5.4,.32,-.183,.0173,1900,-2.3,2.06,.169,-.0135,1920,21.2,1.69,-.304,.0167,1940,24.2,1.22,-.064,.0031,1960,33.2,.51,.231,-.0109,1980,51,1.29,-.026,.0032,2e3,63.87,.1,0,0,2005,64.7,.21,0,0,2012,66.8,.22,0,0,2016,68.1024,.5456,-.0542,-.001172,2020,69.3612,.0422,-.0502,.006216,2024,69.1752,-.0335,-.0048,811e-6,2028,69.0206,-.0275,.0055,-14e-6,2032,68.9981,.0163,.0054,6e-6,2036,69.1498,.0599,.0053,26e-6,2040,69.4751,.1035,.0051,46e-6,2044,69.9737,.1469,.005,66e-6,2048,70.6451,.1903,.0049,85e-6,2050,71.0457];hn.XL0=[1e10,20,578,920,1100,1124,1136,1148,1217,1226,1229,1229,1229,1229,1937,2363,2618,2633,2660,2666,17534704567,0,0,334165646,4.669256804,6283.075849991,3489428,4.6261024,12566.1517,349706,2.744118,5753.384885,341757,2.828866,3.523118,313590,3.62767,77713.771468,267622,4.418084,7860.419392,234269,6.135162,3930.209696,132429,.742464,11506.76977,127317,2.037097,529.690965,119917,1.109629,1577.343542,99025,5.23268,5884.92685,90186,2.04505,26.29832,85722,3.50849,398.149,77979,1.17883,5223.69392,75314,2.53339,5507.55324,50526,4.58293,18849.22755,49238,4.20507,775.52261,35666,2.91954,.06731,31709,5.84902,11790.62909,28413,1.89869,796.29801,27104,.31489,10977.0788,24281,.34481,5486.77784,20616,4.80647,2544.31442,20539,1.86948,5573.1428,20226,2.45768,6069.77675,15552,.83306,213.2991,13221,3.41118,2942.46342,12618,1.08303,20.7754,11513,.64545,.98032,10285,.636,4694.00295,10190,.97569,15720.83878,10172,4.2668,7.11355,9921,6.2099,2146.1654,9761,.681,155.4204,8580,5.9832,161000.6857,8513,1.2987,6275.9623,8471,3.6708,71430.6956,7964,1.8079,17260.1547,7876,3.037,12036.4607,7465,1.7551,5088.6288,7387,3.5032,3154.6871,7355,4.6793,801.8209,6963,.833,9437.7629,6245,3.9776,8827.3903,6115,1.8184,7084.8968,5696,2.7843,6286.599,5612,4.3869,14143.4952,5558,3.4701,6279.5527,5199,.1891,12139.5535,5161,1.3328,1748.0164,5115,.2831,5856.4777,4900,.4874,1194.447,4104,5.3682,8429.2413,4094,2.3985,19651.0485,3920,6.1683,10447.3878,3677,6.0413,10213.2855,3660,2.5696,1059.3819,3595,1.7088,2352.8662,3557,1.776,6812.7668,3329,.5931,17789.8456,3041,.4429,83996.8473,3005,2.7398,1349.8674,2535,3.1647,4690.4798,2474,.2148,3.5904,2366,.4847,8031.0923,2357,2.0653,3340.6124,2282,5.222,4705.7323,2189,5.5559,553.5694,2142,1.4256,16730.4637,2109,4.1483,951.7184,2030,.3713,283.8593,1992,5.2221,12168.0027,1986,5.7747,6309.3742,1912,3.8222,23581.2582,1889,5.3863,149854.4001,1790,2.2149,13367.9726,1748,4.5605,135.0651,1622,5.9884,11769.8537,1508,4.1957,6256.7775,1442,4.1932,242.7286,1435,3.7236,38.0277,1397,4.4014,6681.2249,1362,1.8893,7632.9433,1250,1.1305,5.5229,1205,2.6223,955.5997,1200,1.0035,632.7837,1129,.1774,4164.312,1083,.3273,103.0928,1052,.9387,11926.2544,1050,5.3591,1592.596,1033,6.1998,6438.4962,1001,6.0291,5746.2713,980,.999,11371.705,980,5.244,27511.468,938,2.624,5760.498,923,.483,522.577,922,4.571,4292.331,905,5.337,6386.169,862,4.165,7058.598,841,3.299,7234.794,836,4.539,25132.303,813,6.112,4732.031,812,6.271,426.598,801,5.821,28.449,787,.996,5643.179,776,2.957,23013.54,769,3.121,7238.676,758,3.974,11499.656,735,4.386,316.392,731,.607,11513.883,719,3.998,74.782,706,.323,263.084,676,5.911,90955.552,663,3.665,17298.182,653,5.791,18073.705,630,4.717,6836.645,615,1.458,233141.314,612,1.075,19804.827,596,3.321,6283.009,596,2.876,6283.143,555,2.452,12352.853,541,5.392,419.485,531,.382,31441.678,519,4.065,6208.294,513,2.361,10973.556,494,5.737,9917.697,450,3.272,11015.106,449,3.653,206.186,447,2.064,7079.374,435,4.423,5216.58,421,1.906,245.832,413,.921,3738.761,402,.84,20.355,387,1.826,11856.219,379,2.344,3.881,374,2.954,3128.389,370,5.031,536.805,365,1.018,16200.773,365,1.083,88860.057,352,5.978,3894.182,352,2.056,244287.6,351,3.713,6290.189,340,1.106,14712.317,339,.978,8635.942,339,3.202,5120.601,333,.837,6496.375,325,3.479,6133.513,316,5.089,21228.392,316,1.328,10873.986,309,3.646,10.637,303,1.802,35371.887,296,3.397,9225.539,288,6.026,154717.61,281,2.585,14314.168,262,3.856,266.607,262,2.579,22483.849,257,1.561,23543.231,255,3.949,1990.745,251,3.744,10575.407,240,1.161,10984.192,238,.106,7.046,236,4.272,6040.347,234,3.577,10969.965,211,3.714,65147.62,210,.754,13521.751,207,4.228,5650.292,202,.814,170.673,201,4.629,6037.244,200,.381,6172.87,199,3.933,6206.81,199,5.197,6262.3,197,1.046,18209.33,195,1.07,5230.807,195,4.869,36.028,194,4.313,6244.943,192,1.229,709.933,192,5.595,6282.096,192,.602,6284.056,189,3.744,23.878,188,1.904,15.252,188,.867,22003.915,182,3.681,15110.466,181,.491,1.484,179,3.222,39302.097,179,1.259,12559.038,62833196674749,0,0,20605886,2.67823456,6283.07584999,430343,2.635127,12566.1517,42526,1.59047,3.52312,11926,5.79557,26.29832,10898,2.96618,1577.34354,9348,2.5921,18849.2275,7212,1.1385,529.691,6777,1.8747,398.149,6733,4.4092,5507.5532,5903,2.888,5223.6939,5598,2.1747,155.4204,4541,.398,796.298,3637,.4662,775.5226,2896,2.6471,7.1135,2084,5.3414,.9803,1910,1.8463,5486.7778,1851,4.9686,213.2991,1729,2.9912,6275.9623,1623,.0322,2544.3144,1583,1.4305,2146.1654,1462,1.2053,10977.0788,1246,2.8343,1748.0164,1188,3.258,5088.6288,1181,5.2738,1194.447,1151,2.075,4694.003,1064,.7661,553.5694,997,1.303,6286.599,972,4.239,1349.867,945,2.7,242.729,858,5.645,951.718,758,5.301,2352.866,639,2.65,9437.763,610,4.666,4690.48,583,1.766,1059.382,531,.909,3154.687,522,5.661,71430.696,520,1.854,801.821,504,1.425,6438.496,433,.241,6812.767,426,.774,10447.388,413,5.24,7084.897,374,2.001,8031.092,356,2.429,14143.495,350,4.8,6279.553,337,.888,12036.461,337,3.862,1592.596,325,3.4,7632.943,322,.616,8429.241,318,3.188,4705.732,297,6.07,4292.331,295,1.431,5746.271,290,2.325,20.355,275,.935,5760.498,270,4.804,7234.794,253,6.223,6836.645,228,5.003,17789.846,225,5.672,11499.656,215,5.202,11513.883,208,3.955,10213.286,208,2.268,522.577,206,2.224,5856.478,206,2.55,25132.303,203,.91,6256.778,189,.532,3340.612,188,4.735,83996.847,179,1.474,4164.312,178,3.025,5.523,177,3.026,5753.385,159,4.637,3.286,157,6.124,5216.58,155,3.077,6681.225,154,4.2,13367.973,143,1.191,3894.182,138,3.093,135.065,136,4.245,426.598,134,5.765,6040.347,128,3.085,5643.179,127,2.092,6290.189,125,3.077,11926.254,125,3.445,536.805,114,3.244,12168.003,112,2.318,16730.464,111,3.901,11506.77,111,5.32,23.878,105,3.75,7860.419,103,2.447,1990.745,96,.82,3.88,96,4.08,6127.66,91,5.42,206.19,91,.42,7079.37,88,5.17,11790.63,81,.34,9917.7,80,3.89,10973.56,78,2.4,1589.07,78,2.58,11371.7,77,3.98,955.6,77,3.36,36.03,76,1.3,103.09,75,5.18,10969.97,75,4.96,6496.37,73,5.21,38.03,72,2.65,6309.37,70,5.61,3738.76,69,2.6,3496.03,69,.39,15.25,69,2.78,20.78,65,1.13,7058.6,64,4.28,28.45,61,5.63,10984.19,60,.73,419.48,60,5.28,10575.41,58,5.55,17298.18,58,3.19,4732.03,5291887,0,0,871984,1.072097,6283.07585,30913,.86729,12566.1517,2734,.053,3.5231,1633,5.1883,26.2983,1575,3.6846,155.4204,954,.757,18849.228,894,2.057,77713.771,695,.827,775.523,506,4.663,1577.344,406,1.031,7.114,381,3.441,5573.143,346,5.141,796.298,317,6.053,5507.553,302,1.192,242.729,289,6.117,529.691,271,.306,398.149,254,2.28,553.569,237,4.381,5223.694,208,3.754,.98,168,.902,951.718,153,5.759,1349.867,145,4.364,1748.016,134,3.721,1194.447,125,2.948,6438.496,122,2.973,2146.165,110,1.271,161000.686,104,.604,3154.687,100,5.986,6286.599,92,4.8,5088.63,89,5.23,7084.9,83,3.31,213.3,76,3.42,5486.78,71,6.19,4690.48,68,3.43,4694,65,1.6,2544.31,64,1.98,801.82,61,2.48,10977.08,50,1.44,6836.65,49,2.34,1592.6,46,1.31,4292.33,46,3.81,149854.4,43,.04,7234.79,40,4.94,7632.94,39,1.57,71430.7,38,3.17,6309.37,35,.99,6040.35,35,.67,1059.38,31,3.18,2352.87,31,3.55,8031.09,30,1.92,10447.39,30,2.52,6127.66,28,4.42,9437.76,28,2.71,3894.18,27,.67,25132.3,26,5.27,6812.77,25,.55,6279.55,23,1.38,4705.73,22,.64,6256.78,20,6.07,640.88,28923,5.84384,6283.07585,3496,0,0,1682,5.4877,12566.1517,296,5.196,155.42,129,4.722,3.523,71,5.3,18849.23,64,5.97,242.73,40,3.79,553.57,11408,3.14159,0,772,4.134,6283.076,77,3.84,12566.15,42,.42,155.42,88,3.14,0,17,2.77,6283.08,5,2.01,155.42,3,2.21,12566.15,27962,3.1987,84334.66158,10164,5.42249,5507.55324,8045,3.8801,5223.6939,4381,3.7044,2352.8662,3193,4.0003,1577.3435,2272,3.9847,1047.7473,1814,4.9837,6283.0758,1639,3.5646,5856.4777,1444,3.7028,9437.7629,1430,3.4112,10213.2855,1125,4.8282,14143.4952,1090,2.0857,6812.7668,1037,4.0566,71092.8814,971,3.473,4694.003,915,1.142,6620.89,878,4.44,5753.385,837,4.993,7084.897,770,5.554,167621.576,719,3.602,529.691,692,4.326,6275.962,558,4.41,7860.419,529,2.484,4705.732,521,6.25,18073.705,903,3.897,5507.553,618,1.73,5223.694,380,5.244,2352.866,166,1.627,84334.662,10001398880,0,0,167069963,3.098463508,6283.075849991,1395602,3.0552461,12566.1517,308372,5.198467,77713.771468,162846,1.173877,5753.384885,157557,2.846852,7860.419392,92480,5.45292,11506.76977,54244,4.56409,3930.2097,47211,3.661,5884.92685,34598,.96369,5507.55324,32878,5.89984,5223.69392,30678,.29867,5573.1428,24319,4.2735,11790.62909,21183,5.84715,1577.34354,18575,5.02194,10977.0788,17484,3.01194,18849.22755,10984,5.05511,5486.77784,9832,.8868,6069.7768,8650,5.6896,15720.8388,8583,1.2708,161000.6857,6490,.2725,17260.1547,6292,.9218,529.691,5706,2.0137,83996.8473,5574,5.2416,71430.6956,4938,3.245,2544.3144,4696,2.5781,775.5226,4466,5.5372,9437.7629,4252,6.0111,6275.9623,3897,5.3607,4694.003,3825,2.3926,8827.3903,3749,.8295,19651.0485,3696,4.9011,12139.5535,3566,1.6747,12036.4607,3454,1.8427,2942.4634,3319,.2437,7084.8968,3192,.1837,5088.6288,3185,1.7778,398.149,2846,1.2134,6286.599,2779,1.8993,6279.5527,2628,4.589,10447.3878,2460,3.7866,8429.2413,2393,4.996,5856.4777,2359,.2687,796.298,2329,2.8078,14143.4952,2210,1.95,3154.6871,2035,4.6527,2146.1654,1951,5.3823,2352.8662,1883,.6731,149854.4001,1833,2.2535,23581.2582,1796,.1987,6812.7668,1731,6.152,16730.4637,1717,4.4332,10213.2855,1619,5.2316,17789.8456,1381,5.1896,8031.0923,1364,3.6852,4705.7323,1314,.6529,13367.9726,1041,4.3329,11769.8537,1017,1.5939,4690.4798,998,4.201,6309.374,966,3.676,27511.468,874,6.064,1748.016,779,3.674,12168.003,771,.312,7632.943,756,2.626,6256.778,746,5.648,11926.254,693,2.924,6681.225,680,1.423,23013.54,674,.563,3340.612,663,5.661,11371.705,659,3.136,801.821,648,2.65,19804.827,615,3.029,233141.314,612,5.134,1194.447,563,4.341,90955.552,552,2.091,17298.182,534,5.1,31441.678,531,2.407,11499.656,523,4.624,6438.496,513,5.324,11513.883,477,.256,11856.219,461,1.722,7234.794,458,3.766,6386.169,458,4.466,5746.271,423,1.055,5760.498,422,1.557,7238.676,415,2.599,7058.598,401,3.03,1059.382,397,1.201,1349.867,379,4.907,4164.312,360,5.707,5643.179,352,3.626,244287.6,348,.761,10973.556,342,3.001,4292.331,336,4.546,4732.031,334,3.138,6836.645,324,4.164,9917.697,316,1.691,11015.106,307,.238,35371.887,298,1.306,6283.143,298,1.75,6283.009,293,5.738,16200.773,286,5.928,14712.317,281,3.515,21228.392,280,5.663,8635.942,277,.513,26.298,268,4.207,18073.705,266,.9,12352.853,260,2.962,25132.303,255,2.477,6208.294,242,2.8,709.933,231,1.054,22483.849,229,1.07,14314.168,216,1.314,154717.61,215,6.038,10873.986,200,.561,7079.374,198,2.614,951.718,197,4.369,167283.762,186,2.861,5216.58,183,1.66,39302.097,183,5.912,3738.761,175,2.145,6290.189,173,2.168,10575.407,171,3.702,1592.596,171,1.343,3128.389,164,5.55,6496.375,164,5.856,10984.192,161,1.998,10969.965,161,1.909,6133.513,157,4.955,25158.602,154,6.216,23543.231,153,5.357,13521.751,150,5.77,18209.33,150,5.439,155.42,139,1.778,9225.539,139,1.626,5120.601,128,2.46,13916.019,123,.717,143571.324,122,2.654,88860.057,121,4.414,3894.182,121,1.192,3.523,120,4.03,553.569,119,1.513,17654.781,117,3.117,14945.316,113,2.698,6040.347,110,3.085,43232.307,109,.998,955.6,108,2.939,17256.632,107,5.285,65147.62,103,.139,11712.955,103,5.85,213.299,102,3.046,6037.244,101,2.842,8662.24,100,3.626,6262.3,98,2.36,6206.81,98,5.11,6172.87,98,2,15110.47,97,2.67,5650.29,97,2.75,6244.94,96,4.02,6282.1,96,5.31,6284.06,92,.1,29088.81,85,3.26,20426.57,84,2.6,28766.92,81,3.58,10177.26,80,5.81,5230.81,78,2.53,16496.36,77,4.06,6127.66,73,.04,5481.25,72,5.96,12559.04,72,5.92,4136.91,71,5.49,22003.91,70,3.41,7.11,69,.62,11403.68,69,3.9,1589.07,69,1.96,12416.59,69,4.51,426.6,67,1.61,11087.29,66,4.5,47162.52,66,5.08,283.86,66,4.32,16858.48,65,1.04,6062.66,64,1.59,18319.54,63,5.7,45892.73,63,4.6,66567.49,63,3.82,13517.87,62,2.62,11190.38,61,1.54,33019.02,60,5.58,10344.3,60,5.38,316428.23,60,5.78,632.78,59,6.12,9623.69,57,.16,17267.27,57,3.86,6076.89,57,1.98,7668.64,56,4.78,20199.09,55,4.56,18875.53,55,3.51,17253.04,54,3.07,226858.24,54,4.83,18422.63,53,5.02,12132.44,52,3.63,5333.9,52,.97,155427.54,51,3.36,20597.24,50,.99,11609.86,50,2.21,1990.75,48,1.62,12146.67,48,1.17,12569.67,47,4.62,5436.99,47,1.81,12562.63,47,.59,21954.16,47,.76,7342.46,46,.27,4590.91,46,3.77,156137.48,45,5.66,10454.5,44,5.84,3496.03,43,.24,17996.03,41,5.93,51092.73,41,4.21,12592.45,40,5.14,1551.05,40,5.28,15671.08,39,3.69,18052.93,39,4.94,24356.78,38,2.72,11933.37,38,5.23,7477.52,38,4.99,9779.11,37,3.7,9388.01,37,4.44,4535.06,36,2.16,28237.23,36,2.54,242.73,36,.22,5429.88,35,6.15,19800.95,35,2.92,36949.23,34,5.63,2379.16,34,5.73,16460.33,34,5.11,5849.36,33,6.19,6268.85,10301861,1.1074897,6283.07584999,172124,1.064423,12566.1517,70222,3.14159,0,3235,1.0217,18849.2275,3080,2.8435,5507.5532,2497,1.3191,5223.6939,1849,1.4243,1577.3435,1008,5.9138,10977.0788,865,1.42,6275.962,863,.271,5486.778,507,1.686,5088.629,499,6.014,6286.599,467,5.987,529.691,440,.518,4694.003,410,1.084,9437.763,387,4.75,2544.314,375,5.071,796.298,352,.023,83996.847,344,.949,71430.696,341,5.412,775.523,322,6.156,2146.165,286,5.484,10447.388,284,3.42,2352.866,255,6.132,6438.496,252,.243,398.149,243,3.092,4690.48,225,3.689,7084.897,220,4.952,6812.767,219,.42,8031.092,209,1.282,1748.016,193,5.314,8429.241,185,1.82,7632.943,175,3.229,6279.553,173,1.537,4705.732,158,4.097,11499.656,158,5.539,3154.687,150,3.633,11513.883,148,3.222,7234.794,147,3.653,1194.447,144,.817,14143.495,135,6.151,5746.271,134,4.644,6836.645,128,2.693,1349.867,123,5.65,5760.498,118,2.577,13367.973,113,3.357,17789.846,110,4.497,4292.331,108,5.828,12036.461,102,5.621,6256.778,99,1.14,1059.38,98,.66,5856.48,93,2.32,10213.29,92,.77,16730.46,88,1.5,11926.25,86,1.42,5753.38,85,.66,155.42,81,1.64,6681.22,80,4.11,951.72,66,4.55,5216.58,65,.98,25132.3,64,4.19,6040.35,64,.52,6290.19,63,1.51,5643.18,59,6.18,4164.31,57,2.3,10973.56,55,2.32,11506.77,55,2.2,1592.6,55,5.27,3340.61,54,5.54,553.57,53,5.04,9917.7,53,.92,11371.7,52,3.98,17298.18,52,3.6,10969.97,49,5.91,3894.18,49,2.51,6127.66,48,1.67,12168,46,.31,801.82,42,3.7,10575.41,42,4.05,10984.19,40,2.17,7860.42,40,4.17,26.3,38,5.82,7058.6,37,3.39,6496.37,36,1.08,6309.37,36,5.34,7079.37,34,3.62,11790.63,32,.32,16200.77,31,4.24,3738.76,29,4.55,11856.22,29,1.26,8635.94,27,3.45,5884.93,26,5.08,10177.26,26,5.38,21228.39,24,2.26,11712.96,24,1.05,242.73,24,5.59,6069.78,23,3.63,6284.06,23,1.64,4732.03,22,3.46,213.3,21,1.05,3496.03,21,3.92,13916.02,21,4.01,5230.81,20,5.16,12352.85,20,.69,1990.75,19,2.73,6062.66,19,5.01,11015.11,18,6.04,6283.01,18,2.85,7238.68,18,5.6,6283.14,18,5.16,17253.04,18,2.54,14314.17,17,1.58,7.11,17,.98,3930.21,17,4.75,17267.27,16,2.19,6076.89,16,2.19,18073.7,16,6.12,3.52,16,4.61,9623.69,16,3.4,16496.36,15,.19,9779.11,15,5.3,13517.87,15,4.26,3128.39,15,.81,709.93,14,.5,25158.6,14,4.38,4136.91,13,.98,65147.62,13,3.31,154717.61,13,2.11,1589.07,13,1.92,22483.85,12,6.03,9225.54,12,1.53,12559.04,12,5.82,6282.1,12,5.61,5642.2,12,2.38,167283.76,12,.39,12132.44,12,3.98,4686.89,12,5.81,12569.67,12,.56,5849.36,11,.45,6172.87,11,5.8,16858.48,11,6.22,12146.67,11,2.27,5429.88,435939,5.784551,6283.07585,12363,5.57935,12566.1517,1234,3.1416,0,879,3.628,77713.771,569,1.87,5573.143,330,5.47,18849.228,147,4.48,5507.553,110,2.842,161000.686,101,2.815,5223.694,85,3.11,1577.34,65,5.47,775.52,61,1.38,6438.5,50,4.42,6286.6,47,3.66,7084.9,46,5.39,149854.4,42,.9,10977.08,40,3.2,5088.63,35,1.81,5486.78,32,5.35,3154.69,30,3.52,796.3,29,4.62,4690.48,28,1.84,4694,27,3.14,71430.7,27,6.17,6836.65,26,1.42,2146.17,25,2.81,1748.02,24,2.18,155.42,23,4.76,7234.79,21,3.38,7632.94,21,.22,4705.73,20,4.22,1349.87,20,2.01,1194.45,20,4.58,529.69,19,1.59,6309.37,18,5.7,6040.35,18,6.03,4292.33,17,2.9,9437.76,17,2,8031.09,17,5.78,83996.85,16,.05,2544.31,15,.95,6127.66,14,.36,10447.39,14,1.48,2352.87,13,.77,553.57,13,5.48,951.72,13,5.27,6279.55,13,3.76,6812.77,11,5.41,6256.78,10,.68,1592.6,10,4.95,398.15,10,1.15,3894.18,10,5.2,244287.6,10,1.94,11856.22,9,5.39,25132.3,8,6.18,1059.38,8,.69,8429.24,8,5.85,242.73,7,5.26,14143.5,7,.52,801.82,6,2.24,8635.94,6,4,13367.97,6,2.77,90955.55,6,5.17,7058.6,5,1.46,233141.31,5,4.13,7860.42,5,3.91,26.3,5,3.89,12036.46,5,5.58,6290.19,5,5.54,1990.75,5,.83,11506.77,5,6.22,6681.22,4,5.26,10575.41,4,1.91,7477.52,4,.43,10213.29,4,1.09,709.93,4,5.09,11015.11,4,4.22,88860.06,4,3.57,7079.37,4,1.98,6284.06,4,3.93,10973.56,4,6.18,9917.7,4,.36,10177.26,4,2.75,3738.76,4,3.33,5643.18,4,5.36,25158.6,14459,4.27319,6283.07585,673,3.917,12566.152,77,0,0,25,3.73,18849.23,4,2.8,6286.6,386,2.564,6283.076,31,2.27,12566.15,5,3.44,5573.14,2,2.05,18849.23,1,2.06,77713.77,1,4.41,161000.69,1,3.82,149854.4,1,4.08,6127.66,1,5.26,6438.5,9,1.22,6283.08,1,.66,12566.15];hn.XL1=[[22639.586,.78475822,8328.691424623,1.5229241,25.0719,-.123598,4586.438,.1873974,7214.06286536,-2.184756,-18.86,.0828,2369.914,2.542952,15542.75428998,-.661832,6.212,-.0408,769.026,3.140313,16657.38284925,3.04585,50.144,-.2472,666.418,1.527671,628.30195521,-.02664,.062,-.0054,411.596,4.826607,16866.932315,-1.28012,-1.07,-.0059,211.656,4.115028,-1114.6285593,-3.70768,-43.93,.2064,205.436,.230523,6585.7609101,-2.15812,-18.92,.0882,191.956,4.898507,23871.4457146,.86109,31.28,-.164,164.729,2.586078,14914.4523348,-.6352,6.15,-.035,147.321,5.4553,-7700.3894694,-1.5496,-25.01,.118,124.988,.48608,7771.377145,-.3309,3.11,-.02,109.38,3.88323,8956.9933798,1.4963,25.13,-.129,55.177,5.57033,-1324.178025,.6183,7.3,-.035,45.1,.89898,25195.62374,.2428,24,-.129,39.533,3.81213,-8538.24089,2.803,26.1,-.118,38.43,4.30115,22756.817155,-2.8466,-12.6,.042,36.124,5.49587,24986.074274,4.5688,75.2,-.371,30.773,1.94559,14428.125731,-4.3695,-37.7,.166,28.397,3.28586,7842.364821,-2.2114,-18.8,.077,24.358,5.64142,16171.056245,-.6885,6.3,-.046,18.585,4.41371,-557.31428,-1.8538,-22,.1,17.954,3.58454,8399.6791,-.3576,3.2,-.03,14.53,4.9416,23243.143759,.888,31.2,-.16,14.38,.9709,32200.137139,2.384,56.4,-.29,14.251,5.7641,-2.3012,1.523,25.1,-.12,13.899,.3735,31085.50858,-1.324,12.4,-.08,13.194,1.7595,-9443.319984,-5.231,-69,.33,9.679,3.0997,-16029.080894,-3.072,-50.1,.24,9.366,.3016,24080.99518,-3.465,-19.9,.08,8.606,4.1582,-1742.930514,-3.681,-44,.21,8.453,2.8416,16100.06857,1.192,28.2,-.14,8.05,2.6292,14286.15038,-.609,6.1,-.03,7.63,6.2388,17285.684804,3.019,50.2,-.25,7.447,1.4845,1256.60391,-.053,.1,-.01,7.371,.2736,5957.458955,-2.131,-19,.09,7.063,5.6715,33.757047,-.308,-3.6,.02,6.383,4.7843,7004.5134,2.141,32.4,-.16,5.742,2.6572,32409.686605,-1.942,5,-.05,4.374,4.3443,22128.5152,-2.82,-13,.05,3.998,3.2545,33524.31516,1.766,49,-.25,3.21,2.2443,14985.44001,-2.516,-16,.06,2.915,1.7138,24499.74767,.834,31,-.17,2.732,1.9887,13799.82378,-4.343,-38,.17,2.568,5.4122,-7072.08751,-1.576,-25,.11,2.521,3.2427,8470.66678,-2.238,-19,.07,2.489,4.0719,-486.3266,-3.734,-44,.2,2.146,5.6135,-1952.47998,.645,7,-.03,1.978,2.7291,39414.2,.199,37,-.21,1.934,1.5682,33314.7657,6.092,100,-.5,1.871,.4166,30457.20662,-1.297,12,-.1,1.753,2.0582,-8886.0057,-3.38,-47,.2,1.437,2.386,-695.87607,.59,7,0,1.373,3.026,-209.54947,4.33,51,-.2,1.262,5.94,16728.37052,1.17,28,-.1,1.224,6.172,6656.74859,-4.04,-41,.2,1.187,5.873,6099.43431,-5.89,-63,.3,1.177,1.014,31571.83518,2.41,56,-.3,1.162,3.84,9585.29534,1.47,25,-.1,1.143,5.639,8364.73984,-2.18,-19,.1,1.078,1.229,70.98768,-1.88,-22,.1,1.059,3.326,40528.82856,3.91,81,-.4,.99,5.013,40738.37803,-.42,30,-.2,.948,5.687,-17772.01141,-6.75,-94,.5,.876,.298,-.35232,0,0,0,.822,2.994,393.02097,0,0,0,.788,1.836,8326.39022,3.05,50,-.2,.752,4.985,22614.8418,.91,31,-.2,.74,2.875,8330.99262,0,0,0,.669,.744,-24357.77232,-4.6,-75,.4,.644,1.314,8393.12577,-2.18,-19,.1,.639,5.888,575.33849,0,0,0,.635,1.116,23385.11911,-2.87,-13,0,.584,5.197,24428.75999,2.71,53,-.3,.583,3.513,-9095.55517,.95,4,0,.572,6.059,29970.88002,-5.03,-32,.1,.565,2.96,.32863,1.52,25,-.1,.561,4.001,-17981.56087,-2.43,-43,.2,.557,.529,7143.07519,-.3,3,0,.546,2.311,25614.37623,4.54,75,-.4,.536,4.229,15752.30376,-4.99,-45,.2,.493,3.316,-8294.9344,-1.83,-29,.1,.491,1.744,8362.4485,1.21,21,-.1,.478,1.803,-10071.6219,-5.2,-69,.3,.454,.857,15333.2048,3.66,57,-.3,.445,2.071,8311.7707,-2.18,-19,.1,.426,.345,23452.6932,-3.44,-20,.1,.42,4.941,33733.8646,-2.56,-2,0,.413,1.642,17495.2343,-1.31,-1,0,.404,1.458,23314.1314,-.99,9,-.1,.395,2.132,38299.5714,-3.51,-6,0,.382,2.7,31781.3846,-1.92,5,0,.375,4.827,6376.2114,2.17,32,-.2,.361,3.867,16833.1753,-.97,3,0,.358,5.044,15056.4277,-4.4,-38,.2,.35,5.157,-8257.7037,-3.4,-47,.2,.344,4.233,157.7344,0,0,0,.34,2.672,13657.8484,-.58,6,0,.329,5.61,41853.0066,3.29,74,-.4,.325,5.895,-39.8149,0,0,0,.309,4.387,21500.2132,-2.79,-13,.1,.302,1.278,786.0419,0,0,0,.302,5.341,-24567.3218,-.27,-24,.1,.301,1.045,5889.8848,-1.57,-12,0,.294,4.201,-2371.2325,-3.65,-44,.2,.293,3.704,21642.1886,-6.55,-57,.2,.29,4.069,32828.4391,2.36,56,-.3,.289,3.472,31713.8105,-1.35,12,-.1,.285,5.407,-33.7814,.31,4,0,.283,5.998,-16.9207,-3.71,-44,.2,.283,2.772,38785.898,.23,37,-.2,.274,5.343,15613.742,-2.54,-16,.1,.263,3.997,25823.9257,.22,24,-.1,.254,.6,24638.3095,-1.61,2,0,.253,1.344,6447.1991,.29,10,-.1,.25,.887,141.9754,-3.76,-44,.2,.247,.317,5329.157,-2.1,-19,.1,.245,.141,36.0484,-3.71,-44,.2,.231,2.287,14357.1381,-2.49,-16,.1,.227,5.158,2.6298,0,0,0,.219,5.085,47742.8914,1.72,63,-.3,.211,2.145,6638.7244,-2.18,-19,.1,.201,4.415,39623.7495,-4.13,-14,0,.194,2.091,588.4927,0,0,0,.193,3.057,-15400.7789,-3.1,-50,0,.186,5.598,16799.3582,-.72,6,0,.185,3.886,1150.677,0,0,0,.183,1.619,7178.0144,1.52,25,0,.181,2.635,8328.3391,1.52,25,0,.181,2.077,8329.0437,1.52,25,0,.179,3.215,-9652.8694,-.9,-18,0,.176,1.716,-8815.018,-5.26,-69,0,.175,5.673,550.7553,0,0,0,.17,2.06,31295.058,-5.6,-39,0,.167,1.239,7211.7617,-.7,6,0,.165,4.499,14967.4158,-.7,6,0,.164,3.595,15540.4531,.9,31,0,.164,4.237,522.3694,0,0,0,.163,4.633,15545.0555,-2.2,-19,0,.161,.478,6428.0209,-2.2,-19,0,.158,2.03,13171.5218,-4.3,-38,0,.157,2.28,7216.3641,-3.7,-44,0,.154,5.65,7935.6705,1.5,25,0,.152,.46,29828.9047,-1.3,12,0,.151,1.19,-.7113,0,0,0,.15,1.42,23942.4334,-1,9,0,.144,2.75,7753.3529,1.5,25,0,.137,2.08,7213.7105,-2.2,-19,0,.137,1.44,7214.4152,-2.2,-19,0,.136,4.46,-1185.6162,-1.8,-22,0,.136,3.03,8000.1048,-2.2,-19,0,.134,2.83,14756.7124,-.7,6,0,.131,5.05,6821.0419,-2.2,-19,0,.128,5.99,-17214.6971,-4.9,-72,0,.127,5.35,8721.7124,1.5,25,0,.126,4.49,46628.2629,-2,19,0,.125,5.94,7149.6285,1.5,25,0,.124,1.09,49067.0695,1.1,55,0,.121,2.88,15471.7666,1.2,28,0,.111,3.92,41643.4571,7.6,125,-1,.11,1.96,8904.0299,1.5,25,0,.106,3.3,-18.0489,-2.2,-19,0,.105,2.3,-4.931,1.5,25,0,.104,2.22,-6.559,-1.9,-22,0,.101,1.44,1884.9059,-.1,0,0,.1,5.92,5471.1324,-5.9,-63,0,.099,1.12,15149.7333,-.7,6,0,.096,4.73,15508.9972,-.4,10,0,.095,5.18,7230.9835,1.5,25,0,.093,3.37,39900.5266,3.9,81,0,.092,2.01,25057.0619,2.7,53,0,.092,1.21,-79.6298,0,0,0,.092,1.65,-26310.2523,-4,-68,0,.091,1.01,42062.5561,-1,23,0,.09,6.1,29342.5781,-5,-32,0,.09,4.43,15542.402,-.7,6,0,.09,3.8,15543.1066,-.7,6,0,.089,4.15,6063.3859,-2.2,-19,0,.086,4.03,52.9691,0,0,0,.085,.49,47952.4409,-2.6,11,0,.085,1.6,7632.8154,2.1,32,0,.084,.22,14392.0773,-.7,6,0,.083,6.22,6028.4466,-4,-41,0,.083,.63,-7909.9389,2.8,26,0,.083,5.2,-77.5523,0,0,0,.082,2.74,8786.1467,-2.2,-19,0,.08,2.43,9166.5428,-2.8,-26,0,.08,3.7,-25405.1732,4.1,27,0,.078,5.68,48857.52,5.4,106,-1,.077,1.85,8315.5735,-2.2,-19,0,.075,5.46,-18191.1103,1.9,8,0,.075,1.41,-16238.6304,1.3,1,0,.074,5.06,40110.0761,-.4,30,0,.072,2.1,64.4343,-3.7,-44,0,.071,2.17,37671.2695,-3.5,-6,0,.069,1.71,16693.4313,-.7,6,0,.069,3.33,-26100.7028,-8.3,-119,1,.068,1.09,8329.4028,1.5,25,0,.068,3.62,8327.9801,1.5,25,0,.068,2.41,16833.1509,-1,3,0,.067,3.4,24709.2971,-3.5,-20,0,.067,1.65,8346.7156,-.3,3,0,.066,2.61,22547.2677,1.5,39,0,.066,3.5,15576.5113,-1,3,0,.065,5.76,33037.9886,-2,5,0,.065,4.58,8322.1325,-.3,3,0,.065,6.2,17913.9868,3,50,0,.065,1.5,22685.8295,-1,9,0,.065,2.37,7180.3058,-1.9,-15,0,.064,1.06,30943.5332,2.4,56,0,.064,1.89,8288.8765,1.5,25,0,.064,4.7,6.0335,.3,4,0,.063,2.83,8368.5063,1.5,25,0,.063,5.66,-2580.7819,.7,7,0,.062,3.78,7056.3285,-2.2,-19,0,.061,1.49,8294.91,1.8,29,0,.061,.12,-10281.1714,-.9,-18,0,.061,3.06,-8362.4729,-1.2,-21,0,.061,4.43,8170.9571,1.5,25,0,.059,5.78,-13.1179,-3.7,-44,0,.059,5.97,6625.5702,-2.2,-19,0,.058,5.01,-.508,-.3,0,0,.058,2.73,7161.0938,-2.2,-19,0,.057,.19,7214.0629,-2.2,-19,0,.057,4,22199.5029,-4.7,-35,0,.057,5.38,8119.142,5.8,76,0,.056,1.07,7542.6495,1.5,25,0,.056,.28,8486.4258,1.5,25,0,.054,4.19,16655.0816,4.6,75,0,.053,.72,7267.032,-2.2,-19,0,.053,3.12,12.6192,.6,7,0,.052,2.99,-32896.013,-1.8,-49,0,.052,3.46,1097.708,0,0,0,.051,5.37,-6443.786,-1.6,-25,0,.051,1.35,7789.401,-2.2,-19,0,.051,5.83,40042.502,.2,38,0,.051,3.63,9114.733,1.5,25,0,.05,1.51,8504.484,-2.5,-22,0,.05,5.23,16659.684,1.5,25,0,.05,1.15,7247.82,-2.5,-23,0,.047,.25,-1290.421,.3,0,0,.047,4.67,-32686.464,-6.1,-100,0,.047,3.49,548.678,0,0,0,.047,2.37,6663.308,-2.2,-19,0,.046,.98,1572.084,0,0,0,.046,2.04,14954.262,-.7,6,0,.046,3.72,6691.693,-2.2,-19,0,.045,6.19,-235.287,0,0,0,.044,2.96,32967.001,-.1,27,0,.044,3.82,-1671.943,-5.6,-66,0,.043,5.82,1179.063,0,0,0,.043,.07,34152.617,1.7,49,0,.043,3.71,6514.773,-.3,0,0,.043,5.62,15.732,-2.5,-23,0,.043,5.8,8351.233,-2.2,-19,0,.042,.27,7740.199,1.5,25,0,.042,6.14,15385.02,-.7,6,0,.042,6.13,7285.051,-4.1,-41,0,.041,1.27,32757.451,4.2,78,0,.041,4.46,8275.722,1.5,25,0,.04,.23,8381.661,1.5,25,0,.04,5.87,-766.864,2.5,29,0,.04,1.66,254.431,0,0,0,.04,.4,9027.981,-.4,0,0,.04,2.96,7777.936,1.5,25,0,.039,4.67,33943.068,6.1,100,0,.039,3.52,8326.062,1.5,25,0,.039,3.75,21013.887,-6.5,-57,0,.039,5.6,606.978,0,0,0,.039,1.19,8331.321,1.5,25,0,.039,2.84,7211.433,-2.2,-19,0,.038,.67,7216.693,-2.2,-19,0,.038,6.22,25161.867,.6,28,0,.038,4.4,7806.322,1.5,25,0,.038,4.16,9179.168,-2.2,-19,0,.037,4.73,14991.999,-.7,6,0,.036,.35,67.514,-.6,-7,0,.036,3.7,25266.611,-1.6,0,0,.036,5.39,16328.796,-.7,6,0,.035,1.44,7174.248,-2.2,-19,0,.035,5,15684.73,-4.4,-38,0,.035,.39,-15.419,-2.2,-19,0,.035,6.07,15020.385,-.7,6,0,.034,6.01,7371.797,-2.2,-19,0,.034,.96,-16623.626,-3.4,-54,0,.033,6.24,9479.368,1.5,25,0,.033,3.21,23661.896,5.2,82,0,.033,4.06,8311.418,-2.2,-19,0,.033,2.4,1965.105,0,0,0,.033,5.17,15489.785,-.7,6,0,.033,5.03,21986.54,.9,31,0,.033,4.1,16691.14,2.7,46,0,.033,5.13,47114.589,1.7,63,0,.033,4.45,8917.184,1.5,25,0,.033,4.23,2.078,0,0,0,.032,2.33,75.251,1.5,25,0,.032,2.1,7253.878,-2.2,-19,0,.032,3.11,-.224,1.5,25,0,.032,4.43,16640.462,-.7,6,0,.032,5.68,8328.363,0,0,0,.031,5.32,8329.02,3,50,0,.031,3.7,16118.093,-.7,6,0,.03,3.67,16721.817,-.7,6,0,.03,5.27,-1881.492,-1.2,-15,0,.03,5.72,8157.839,-2.2,-19,0,.029,5.73,-18400.313,-6.7,-94,0,.029,2.76,16,-2.2,-19,0,.029,1.75,8879.447,1.5,25,0,.029,.32,8851.061,1.5,25,0,.029,.9,14704.903,3.7,57,0,.028,2.9,15595.723,-.7,6,0,.028,5.88,16864.631,.2,24,0,.028,.63,16869.234,-2.8,-26,0,.028,4.04,-18609.863,-2.4,-43,0,.027,5.83,6727.736,-5.9,-63,0,.027,6.12,418.752,4.3,51,0,.027,.14,41157.131,3.9,81,0,.026,3.8,15.542,0,0,0,.026,1.68,50181.698,4.8,99,-1,.026,.32,315.469,0,0,0,.025,5.67,19.188,.3,0,0,.025,3.16,62.133,-2.2,-19,0,.025,3.76,15502.939,-.7,6,0,.025,4.53,45999.961,-2,19,0,.024,3.21,837.851,-4.4,-51,0,.024,2.82,38157.596,.3,37,0,.024,5.21,15540.124,-.7,6,0,.024,.26,14218.576,0,13,0,.024,3.01,15545.384,-.7,6,0,.024,1.16,-17424.247,-.6,-21,0,.023,2.34,-67.574,.6,7,0,.023,2.44,18.024,-1.9,-22,0,.023,3.7,469.4,0,0,0,.023,.72,7136.511,-2.2,-19,0,.023,4.5,15582.569,-.7,6,0,.023,2.8,-16586.395,-4.9,-72,0,.023,1.51,80.182,0,0,0,.023,1.09,5261.583,-1.5,-12,0,.023,.56,54956.954,-.5,44,0,.023,4.01,8550.86,-2.2,-19,0,.023,4.46,38995.448,-4.1,-14,0,.023,3.82,2358.126,0,0,0,.022,3.77,32271.125,.5,34,0,.022,.82,15935.775,-.7,6,0,.022,1.07,24013.421,-2.9,-13,0,.022,.4,8940.078,-2.2,-19,0,.022,2.06,15700.489,-.7,6,0,.022,4.27,15124.002,-5,-45,0,.021,1.16,56071.583,3.2,88,0,.021,5.58,9572.189,-2.2,-19,0,.02,1.7,-17.273,-3.7,-44,0,.02,3.05,214.617,0,0,0,.02,4.41,8391.048,-2.2,-19,0,.02,5.95,23869.145,2.4,56,0,.02,.42,40947.927,-4.7,-21,0,.019,1.39,5818.897,.3,10,0,.019,.71,23873.747,-.7,6,0,.019,2.81,7291.615,-2.2,-19,0,.019,5.09,8428.018,-2.2,-19,0,.019,4.14,6518.187,-1.6,-12,0,.019,3.85,21.33,0,0,0,.018,.66,14445.046,-.7,6,0,.018,1.65,.966,-4,-48,0,.018,5.64,-17143.709,-6.8,-94,0,.018,6.01,7736.432,-2.2,-19,0,.018,2.74,31153.083,-1.9,5,0,.018,4.58,6116.355,-2.2,-19,0,.018,2.28,46.401,.3,0,0,.018,3.8,10213.597,1.4,25,0,.018,2.84,56281.132,-1.1,36,0,.018,3.53,8249.062,1.5,25,0,.017,4.43,20871.911,-3,-13,0,.017,4.44,627.596,0,0,0,.017,1.85,628.308,0,0,0,.017,1.19,8408.321,2,25,0,.017,1.95,7214.056,-2,-19,0,.017,1.57,7214.07,-2,-19,0,.017,1.65,13870.811,-6,-60,0,.017,.3,22.542,-4,-44,0,.017,2.62,-119.445,0,0,0,.016,4.87,5747.909,2,32,0,.016,4.45,14339.108,-1,6,0,.016,1.83,41366.68,0,30,0,.016,4.53,16309.618,-3,-23,0,.016,2.54,15542.754,-1,6,0,.016,6.05,1203.646,0,0,0,.015,5.2,2751.147,0,0,0,.015,1.8,-10699.924,-5,-69,0,.015,.4,22824.391,-3,-20,0,.015,2.1,30666.756,-6,-39,0,.015,2.1,6010.417,-2,-19,0,.015,.7,-23729.47,-5,-75,0,.015,1.4,14363.691,-1,6,0,.015,5.8,16900.689,-2,0,0,.015,5.2,23800.458,3,53,0,.015,5.3,6035,-2,-19,0,.015,1.2,8251.139,2,25,0,.015,3.6,-8.86,0,0,0,.015,.8,882.739,0,0,0,.015,3,1021.329,0,0,0,.015,.6,23296.107,1,31,0,.014,5.4,7227.181,2,25,0,.014,.1,7213.352,-2,-19,0,.014,4,15506.706,3,50,0,.014,3.4,7214.774,-2,-19,0,.014,4.6,6665.385,-2,-19,0,.014,.1,-8.636,-2,-22,0,.014,3.1,15465.202,-1,6,0,.014,4.9,508.863,0,0,0,.014,3.5,8406.244,2,25,0,.014,1.3,13313.497,-8,-82,0,.014,2.8,49276.619,-3,0,0,.014,.1,30528.194,-3,-10,0,.013,1.7,25128.05,1,31,0,.013,2.9,14128.405,-1,6,0,.013,3.4,57395.761,3,80,0,.013,2.7,13029.546,-1,6,0,.013,3.9,7802.556,-2,-19,0,.013,1.6,8258.802,-2,-19,0,.013,2.2,8417.709,-2,-19,0,.013,.7,9965.21,-2,-19,0,.013,3.4,50391.247,0,48,0,.013,3,7134.433,-2,-19,0,.013,2.9,30599.182,-5,-31,0,.013,3.6,-9723.857,1,0,0,.013,4.8,7607.084,-2,-19,0,.012,.8,23837.689,1,35,0,.012,3.6,4.409,-4,-44,0,.012,5,16657.031,3,50,0,.012,4.4,16657.735,3,50,0,.012,1.1,15578.803,-4,-38,0,.012,6,-11.49,0,0,0,.012,1.9,8164.398,0,0,0,.012,2.4,31852.372,-4,-17,0,.012,2.4,6607.085,-2,-19,0,.012,4.2,8359.87,0,0,0,.012,.5,5799.713,-2,-19,0,.012,2.7,7220.622,0,0,0,.012,4.3,-139.72,0,0,0,.012,2.3,13728.836,-2,-16,0,.011,3.6,14912.146,1,31,0,.011,4.7,14916.748,-2,-19,0],[1.6768,4.66926,628.301955,-.0266,.1,-.005,.51642,3.3721,6585.76091,-2.158,-18.9,.09,.41383,5.7277,14914.452335,-.635,6.2,-.04,.37115,3.9695,7700.389469,1.55,25,-.12,.2756,.7416,8956.99338,1.496,25.1,-.13,.24599,4.2253,-2.3012,1.523,25.1,-.12,.07118,.1443,7842.36482,-2.211,-19,.08,.06128,2.4998,16171.05625,-.688,6,0,.04516,.443,8399.6791,-.36,3,0,.04048,5.771,14286.15038,-.61,6,0,.03747,4.626,1256.60391,-.05,0,0,.03707,3.415,5957.45895,-2.13,-19,.1,.03649,1.8,23243.14376,.89,31,-.2,.02438,.042,16029.08089,3.07,50,-.2,.02165,1.017,-1742.93051,-3.68,-44,.2,.01923,3.097,17285.6848,3.02,50,-.3,.01692,1.28,.3286,1.52,25,-.1,.01361,.298,8326.3902,3.05,50,-.2,.01293,4.013,7072.0875,1.58,25,-.1,.01276,4.413,8330.9926,0,0,0,.0127,.101,8470.6668,-2.24,-19,.1,.01097,1.203,22128.5152,-2.82,-13,0,.01088,2.545,15542.7543,-.66,6,0,.00835,.19,7214.0629,-2.18,-19,.1,.00734,4.855,24499.7477,.83,31,-.2,.00686,5.13,13799.8238,-4.34,-38,.2,.00631,.93,-486.3266,-3.73,-44,0,.00585,.699,9585.2953,1.5,25,0,.00566,4.073,8328.3391,1.5,25,0,.00566,.638,8329.0437,1.5,25,0,.00539,2.472,-1952.48,.6,7,0,.00509,2.88,-.7113,0,0,0,.00469,3.56,30457.2066,-1.3,12,0,.00387,.78,-.3523,0,0,0,.00378,1.84,22614.8418,.9,31,0,.00362,5.53,-695.8761,.6,7,0,.00317,2.8,16728.3705,1.2,28,0,.00303,6.07,157.7344,0,0,0,.003,2.53,33.757,-.3,-4,0,.00295,4.16,31571.8352,2.4,56,0,.00289,5.98,7211.7617,-.7,6,0,.00285,2.06,15540.4531,.9,31,0,.00283,2.65,2.6298,0,0,0,.00282,6.17,15545.0555,-2.2,-19,0,.00278,1.23,-39.8149,0,0,0,.00272,3.82,7216.3641,-3.7,-44,0,.0027,4.37,70.9877,-1.9,-22,0,.00256,5.81,13657.8484,-.6,6,0,.00244,5.64,-.2237,1.5,25,0,.0024,2.96,8311.7707,-2.2,-19,0,.00239,.87,-33.7814,.3,4,0,.00216,2.31,15.9995,-2.2,-19,0,.00186,3.46,5329.157,-2.1,-19,0,.00169,2.4,24357.772,4.6,75,0,.00161,5.8,8329.403,1.5,25,0,.00161,5.2,8327.98,1.5,25,0,.0016,4.26,23385.119,-2.9,-13,0,.00156,1.26,550.755,0,0,0,.00155,1.25,21500.213,-2.8,-13,0,.00152,.6,-16.921,-3.7,-44,0,.0015,2.71,-79.63,0,0,0,.0015,5.29,15.542,0,0,0,.00148,1.06,-2371.232,-3.7,-44,0,.00141,.77,8328.691,1.5,25,0,.00141,3.67,7143.075,-.3,0,0,.00138,5.45,25614.376,4.5,75,0,.00129,4.9,23871.446,.9,31,0,.00126,4.03,141.975,-3.8,-44,0,.00124,6.01,522.369,0,0,0,.0012,4.94,-10071.622,-5.2,-69,0,.00118,5.07,-15.419,-2.2,-19,0,.00107,3.49,23452.693,-3.4,-20,0,.00104,4.78,17495.234,-1.3,0,0,.00103,1.44,-18.049,-2.2,-19,0,.00102,5.63,15542.402,-.7,6,0,.00102,2.59,15543.107,-.7,6,0,.001,4.11,-6.559,-1.9,-22,0,97e-5,.08,15400.779,3.1,50,0,96e-5,5.84,31781.385,-1.9,5,0,94e-5,1.08,8328.363,0,0,0,94e-5,2.46,16799.358,-.7,6,0,94e-5,1.69,6376.211,2.2,32,0,93e-5,3.64,8329.02,3,50,0,93e-5,2.65,16655.082,4.6,75,0,9e-4,1.9,15056.428,-4.4,-38,0,89e-5,1.59,52.969,0,0,0,88e-5,2.02,-8257.704,-3.4,-47,0,88e-5,3.02,7213.711,-2.2,-19,0,87e-5,.5,7214.415,-2.2,-19,0,87e-5,.49,16659.684,1.5,25,0,82e-5,5.64,-4.931,1.5,25,0,79e-5,5.17,13171.522,-4.3,-38,0,76e-5,3.6,29828.905,-1.3,12,0,76e-5,4.08,24567.322,.3,24,0,76e-5,4.58,1884.906,-.1,0,0,73e-5,.33,31713.811,-1.4,12,0,73e-5,.93,32828.439,2.4,56,0,71e-5,5.91,38785.898,.2,37,0,69e-5,2.2,15613.742,-2.5,-16,0,66e-5,3.87,15.732,-2.5,-23,0,66e-5,.86,25823.926,.2,24,0,65e-5,2.52,8170.957,1.5,25,0,63e-5,.18,8322.132,-.3,0,0,6e-4,5.84,8326.062,1.5,25,0,6e-4,5.15,8331.321,1.5,25,0,6e-4,2.18,8486.426,1.5,25,0,58e-5,2.3,-1.731,-4,-44,0,58e-5,5.43,14357.138,-2,-16,0,57e-5,3.09,8294.91,2,29,0,57e-5,4.67,-8362.473,-1,-21,0,56e-5,4.15,16833.151,-1,0,0,54e-5,1.93,7056.329,-2,-19,0,54e-5,5.27,8315.574,-2,-19,0,52e-5,5.6,8311.418,-2,-19,0,52e-5,2.7,-77.552,0,0,0,51e-5,4.3,7230.984,2,25,0,5e-4,.4,-.508,0,0,0,49e-5,5.4,7211.433,-2,-19,0,49e-5,4.4,7216.693,-2,-19,0,49e-5,4.3,16864.631,0,24,0,49e-5,2.2,16869.234,-3,-26,0,47e-5,6.1,627.596,0,0,0,47e-5,5,12.619,1,7,0,45e-5,4.9,-8815.018,-5,-69,0,44e-5,1.6,62.133,-2,-19,0,42e-5,2.9,-13.118,-4,-44,0,42e-5,4.1,-119.445,0,0,0,41e-5,4.3,22756.817,-3,-13,0,41e-5,3.6,8288.877,2,25,0,4e-4,.5,6663.308,-2,-19,0,4e-4,1.1,8368.506,2,25,0,39e-5,4.1,6443.786,2,25,0,39e-5,3.1,16657.383,3,50,0,38e-5,.1,16657.031,3,50,0,38e-5,3,16657.735,3,50,0,38e-5,4.6,23942.433,-1,9,0,37e-5,4.3,15385.02,-1,6,0,37e-5,5,548.678,0,0,0,36e-5,1.8,7213.352,-2,-19,0,36e-5,1.7,7214.774,-2,-19,0,35e-5,1.1,7777.936,2,25,0,35e-5,1.6,-8.86,0,0,0,35e-5,4.4,23869.145,2,56,0,35e-5,2,6691.693,-2,-19,0,34e-5,1.3,-1185.616,-2,-22,0,34e-5,2.2,23873.747,-1,6,0,33e-5,2,-235.287,0,0,0,33e-5,3.1,17913.987,3,50,0,33e-5,1,8351.233,-2,-19,0],[.00487,4.6693,628.30196,-.027,0,-.01,.00228,2.6746,-2.3012,1.523,25,-.12,.0015,3.372,6585.76091,-2.16,-19,.1,.0012,5.728,14914.45233,-.64,6,0,.00108,3.969,7700.38947,1.55,25,-.1,8e-4,.742,8956.99338,1.5,25,-.1,254e-6,6.002,.3286,1.52,25,-.1,21e-5,.144,7842.3648,-2.21,-19,0,18e-5,2.5,16171.0562,-.7,6,0,13e-5,.44,8399.6791,-.4,3,0,126e-6,5.03,8326.3902,3,50,0,12e-5,5.77,14286.1504,-.6,6,0,118e-6,5.96,8330.9926,0,0,0,11e-5,1.8,23243.1438,.9,31,0,11e-5,3.42,5957.459,-2.1,-19,0,11e-5,4.63,1256.6039,-.1,0,0,99e-6,4.7,-.7113,0,0,0,7e-5,.04,16029.0809,3.1,50,0,7e-5,5.14,8328.3391,1.5,25,0,7e-5,5.85,8329.0437,1.5,25,0,6e-5,1.02,-1742.9305,-3.7,-44,0,6e-5,3.1,17285.6848,3,50,0,54e-6,5.69,-.352,0,0,0,43e-6,.52,15.542,0,0,0,41e-6,2.03,2.63,0,0,0,4e-5,.1,8470.667,-2.2,-19,0,4e-5,4.01,7072.088,1.6,25,0,36e-6,2.93,-8.86,-.3,0,0,3e-5,1.2,22128.515,-2.8,-13,0,3e-5,2.54,15542.754,-.7,6,0,27e-6,4.43,7211.762,-.7,6,0,26e-6,.51,15540.453,.9,31,0,26e-6,1.44,15545.055,-2.2,-19,0,25e-6,5.37,7216.364,-3.7,-44,0],[12e-6,1.041,-2.3012,1.52,25,-.1,17e-7,.31,-.711,0,0,0]];hn.QI_KB=[1640650479938e-6,15.218425,1642476703182e-6,15.21874996,1683430515601e-6,15.218750011,1752157640664e-6,15.218749978,1807675003759e-6,15.218620279,1883627765182e-6,15.218612292,19073691281e-4,15.218449176,1936603140413e-6,15.218425,193914552418e-5,15.218466998,19471807983e-4,15.218524844,1964362041824e-6,15.218533526,1987372340971e-6,15.218513908,1999653819126e-6,15.218530782,2007445469786e-6,15.218535181,2021324917146e-6,15.218526248,2047257232342e-6,15.218519654,2070282898213e-6,15.218425,207320487285e-5,15.218515221,2080144500926e-6,15.218530782,2086703688963e-6,15.218523776,2110033182763e-6,15.218425,2111190300888e-6,15.218425,2113731271005e-6,15.218515671,2120670840263e-6,15.218425,2123973309063e-6,15.218425,2125068997336e-6,15.218477932,2136026312633e-6,15.218472436,2156099495538e-6,15.218425,2159021324663e-6,15.218425,2162308575254e-6,15.218461742,2178485706538e-6,15.218425,2178759662849e-6,15.218445786,21853340208e-4,15.218425,2187525481425e-6,15.218425,2188621191481e-6,15.218437494,232214776e-2];hn.QB=H.decode("FrcFs22AFsckF2tsDtFqEtF1posFdFgiFseFtmelpsEfhkF2anmelpFlF1ikrotcnEqEq2FfqmcDsrFor22FgFrcgDscFs22FgEeFtE2sfFs22sCoEsaF2tsD1FpeE2eFsssEciFsFnmelpFcFhkF2tcnEqEpFgkrotcnEqrEtFermcDsrE222FgBmcmr22DaEfnaF222sD1FpeForeF2tssEfiFpEoeFssD1iFstEqFppDgFstcnEqEpFg11FscnEqrAoAF2ClAEsDmDtCtBaDlAFbAEpAAAAAD2FgBiBqoBbnBaBoAAAAAAAEgDqAdBqAFrBaBoACdAAf1AACgAAAeBbCamDgEifAE2AABa1C1BgFdiAAACoCeE1ADiEifDaAEqAAFe1AcFbcAAAAAF1iFaAAACpACmFmAAAAAAAACrDaAAADG0");hn.SHUO_KB=[1457698231017e-6,29.53067166,1546082512234e-6,29.53085106,16406407353e-4,29.5306,1642472151543e-6,29.53085439,16834305093e-4,29.53086148,1752148041079e-6,29.53085097,1807665420323e-6,29.53059851,18836181141e-4,29.5306,19073607047e-4,29.5306,19365962249e-4,29.5306,19391356753e-4,29.5306,1947168];hn.SB=H.decode("EqoFscDcrFpmEsF2DfFideFelFpFfFfFiaipqti1ksttikptikqckstekqttgkqttgkqteksttikptikq2fjstgjqttjkqttgkqtekstfkptikq2tijstgjiFkirFsAeACoFsiDaDiADc1AFbBfgdfikijFifegF1FhaikgFag1E2btaieeibggiffdeigFfqDfaiBkF1kEaikhkigeidhhdiegcFfakF1ggkidbiaedksaFffckekidhhdhdikcikiakicjF1deedFhFccgicdekgiFbiaikcfi1kbFibefgEgFdcFkFeFkdcfkF1kfkcickEiFkDacFiEfbiaejcFfffkhkdgkaiei1ehigikhdFikfckF1dhhdikcfgjikhfjicjicgiehdikcikggcifgiejF1jkieFhegikggcikFegiegkfjebhigikggcikdgkaFkijcfkcikfkcifikiggkaeeigefkcdfcfkhkdgkegieidhijcFfakhfgeidieidiegikhfkfckfcjbdehdikggikgkfkicjicjF1dbidikFiggcifgiejkiegkigcdiegfggcikdbgfgefjF1kfegikggcikdgFkeeijcfkcikfkekcikdgkabhkFikaffcfkhkdgkegbiaekfkiakicjhfgqdq2fkiakgkfkhfkfcjiekgFebicggbedF1jikejbbbiakgbgkacgiejkijjgigfiakggfggcibFifjefjF1kfekdgjcibFeFkijcfkfhkfkeaieigekgbhkfikidfcjeaibgekgdkiffiffkiakF1jhbakgdki1dj1ikfkicjicjieeFkgdkicggkighdF1jfgkgfgbdkicggfggkidFkiekgijkeigfiskiggfaidheigF1jekijcikickiggkidhhdbgcfkFikikhkigeidieFikggikhkffaffijhidhhakgdkhkijF1kiakF1kfheakgdkifiggkigicjiejkieedikgdfcggkigieeiejfgkgkigbgikicggkiaideeijkefjeijikhkiggkiaidheigcikaikffikijgkiahi1hhdikgjfifaakekighie1hiaikggikhkffakicjhiahaikggikhkijF1kfejfeFhidikggiffiggkigicjiekgieeigikggiffiggkidheigkgfjkeigiegikifiggkidhedeijcfkFikikhkiggkidhh1ehigcikaffkhkiggkidhh1hhigikekfiFkFikcidhh1hitcikggikhkfkicjicghiediaikggikhkijbjfejfeFhaikggifikiggkigiejkikgkgieeigikggiffiggkigieeigekijcijikggifikiggkideedeijkefkfckikhkiggkidhh1ehijcikaffkhkiggkidhh1hhigikhkikFikfckcidhh1hiaikgjikhfjicjicgiehdikcikggifikigiejfejkieFhegikggifikiggfghigkfjeijkhigikggifikiggkigieeijcijcikfksikifikiggkidehdeijcfdckikhkiggkhghh1ehijikifffffkhsFngErD1pAfBoDd1BlEtFqA2AqoEpDqElAEsEeB2BmADlDkqBtC1FnEpDqnEmFsFsAFnllBbFmDsDiCtDmAB2BmtCgpEplCpAEiBiEoFqFtEqsDcCnFtADnFlEgdkEgmEtEsCtDmADqFtAFrAtEcCqAE1BoFqC1F1DrFtBmFtAC2ACnFaoCgADcADcCcFfoFtDlAFgmFqBq2bpEoAEmkqnEeCtAE1bAEqgDfFfCrgEcBrACfAAABqAAB1AAClEnFeCtCgAADqDoBmtAAACbFiAAADsEtBqAB2FsDqpFqEmFsCeDtFlCeDtoEpClEqAAFrAFoCgFmFsFqEnAEcCqFeCtFtEnAEeFtAAEkFnErAABbFkADnAAeCtFeAfBoAEpFtAABtFqAApDcCGJ");const $n=class{static fromYear(o){let t;return!$n._CACHE_YEAR||$n._CACHE_YEAR.getYear()!=o?(t=new $n(o),$n._CACHE_YEAR=t):t=$n._CACHE_YEAR,t}constructor(o){this._year=o,this._months=[],this._jieQiJulianDays=[];const t=o-4;let l=t%10,h=t%12;l<0&&(l+=10),h<0&&(h+=12),this._ganIndex=l,this._zhiIndex=h,this.compute()}compute(){const o=[],t=[],l=[],h=[];let g,f;const F=this._year;let A=Math.floor((F-2e3)*365.2422+180),y=Math.floor((A-355+183)/365.2422)*365.2422+355;for(hn.calcQi(y)>A&&(y-=365.2422),g=0;g<26;g++)o.push(hn.calcQi(y+15.2184*g));for(g=0,f=r.JIE_QI_IN_USE.length;g<f;g++)g===0?A=hn.qiAccurate2(o[0]-15.2184):g<=26?A=hn.qiAccurate2(o[g-1]):A=hn.qiAccurate2(o[25]+15.2184*(g-26)),this._jieQiJulianDays.push(A+y0.J2000);for(y=hn.calcShuo(o[0]),y>o[0]&&(y-=29.53),g=0;g<16;g++)t.push(hn.calcShuo(y+29.5306*g));for(g=0;g<15;g++)l.push(Math.floor(t[g+1]-t[g])),h.push(g);const x=F-1;let S=16;if($n._LEAP_11.indexOf(F)>-1)S=13;else if($n._LEAP_12.indexOf(F)>-1)S=14;else if(t[13]<=o[24]){for(g=1;t[g+1]>o[2*g]&&g<13;)g++;S=g}for(f=S;f<15;f++)h[f]-=1;const _=[11,12,1,2,3,4,5,6,7,8,9,10];let R=-1,L=-1,J=x;for(g=0;g<15;g++){const k=t[g]+y0.J2000,a0=h[g];let W=_[a0%12];1724360<=k&&k<1729794||1807724<=k&&k<1808699?W=_[(a0+1)%12]:(k==1729794||k==1808699)&&(W=12),R==-1&&(R=W,L=W),W<R&&(J+=1,L=1),R=W,g==S?W=-W:(k==1729794||k==1808699)&&(W=-11),this._months.push(new Bi(J,W,l[g],t[g]+y0.J2000,L)),L++}}getYear(){return this._year}getGanIndex(){return this._ganIndex}getZhiIndex(){return this._zhiIndex}getGan(){return r.GAN[this._ganIndex+1]}getZhi(){return r.ZHI[this._zhiIndex+1]}getGanZhi(){return this.getGan()+this.getZhi()}getJieQiJulianDays(){return this._jieQiJulianDays}getDayCount(){let o=0;for(let t=0,l=this._months.length;t<l;t++){const h=this._months[t];h.getYear()==this._year&&(o+=h.getDayCount())}return o}getMonths(){return this._months}getMonthsInYear(){const o=[];for(let t=0,l=this._months.length;t<l;t++){const h=this._months[t];h.getYear()==this._year&&o.push(h)}return o}getMonth(o){for(let t=0,l=this._months.length;t<l;t++){const h=this._months[t];if(h.getYear()==this._year&&h.getMonth()==o)return h}return null}getLeapMonth(){for(let o=0,t=this._months.length;o<t;o++){const l=this._months[o];if(l.getYear()==this._year&&l.isLeap())return Math.abs(l.getMonth())}return 0}toString(){return`${this.getYear()}`}toFullString(){return`${this.getYear()}年`}_getZaoByGan(o,t){const l=this.getMonth(1);if(l==null)return"";let h=o-y0.fromJulianDay(l.getFirstJulianDay()).getLunar().getDayGanIndex();return h<0&&(h+=10),t.replace("几",r.NUMBER[h+1])}_getZaoByZhi(o,t){const l=this.getMonth(1);if(l==null)return"";let h=o-y0.fromJulianDay(l.getFirstJulianDay()).getLunar().getDayZhiIndex();return h<0&&(h+=12),t.replace("几",r.NUMBER[h+1])}getTouLiang(){return this._getZaoByZhi(0,"几鼠偷粮")}getCaoZi(){return this._getZaoByZhi(0,"草子几分")}getGengTian(){return this._getZaoByZhi(1,"几牛耕田")}getHuaShou(){return this._getZaoByZhi(3,"花收几分")}getZhiShui(){return this._getZaoByZhi(4,"几龙治水")}getTuoGu(){return this._getZaoByZhi(6,"几马驮谷")}getQiangMi(){return this._getZaoByZhi(9,"几鸡抢米")}getKanCan(){return this._getZaoByZhi(9,"几姑看蚕")}getGongZhu(){return this._getZaoByZhi(11,"几屠共猪")}getJiaTian(){return this._getZaoByGan(0,"甲田几分")}getFenBing(){return this._getZaoByGan(2,"几人分饼")}getDeJin(){return this._getZaoByGan(7,"几日得金")}getRenBing(){return this._getZaoByGan(2,this._getZaoByZhi(2,"几人几丙"))}getRenChu(){return this._getZaoByGan(3,this._getZaoByZhi(2,"几人几锄"))}getYuan(){return $n.YUAN[Math.floor((this._year+2696)/60)%3]+"元"}getYun(){return $n.YUN[Math.floor((this._year+2696)/20)%9]+"运"}getNineStar(){const o=r.getJiaZiIndex(this.getGanZhi())+1;let l=(62+Math.floor(this._year+2696)/60%3*3-o)%9;return l==0&&(l=9),yn.fromIndex(l-1)}getPositionXi(){return r.POSITION_XI[this._ganIndex+1]}getPositionXiDesc(){return r.POSITION_DESC[this.getPositionXi()]}getPositionYangGui(){return r.POSITION_YANG_GUI[this._ganIndex+1]}getPositionYangGuiDesc(){return r.POSITION_DESC[this.getPositionYangGui()]}getPositionYinGui(){return r.POSITION_YIN_GUI[this._ganIndex+1]}getPositionYinGuiDesc(){return r.POSITION_DESC[this.getPositionYinGui()]}getPositionFu(o=2){return(o==1?r.POSITION_FU:r.POSITION_FU_2)[this._ganIndex+1]}getPositionFuDesc(o=2){return r.POSITION_DESC[this.getPositionFu(o)]}getPositionCai(){return r.POSITION_CAI[this._ganIndex+1]}getPositionCaiDesc(){return r.POSITION_DESC[this.getPositionCai()]}getPositionTaiSui(){return r.POSITION_TAI_SUI_YEAR[this._zhiIndex]}getPositionTaiSuiDesc(){return r.POSITION_DESC[this.getPositionTaiSui()]}next(o){return $n.fromYear(this._year+o)}};let pn=$n;pn.YUAN=["下","上","中"];pn.YUN=["七","八","九","一","二","三","四","五","六"];pn._LEAP_11=[75,94,170,265,322,398,469,553,583,610,678,735,754,773,849,887,936,1050,1069,1126,1145,1164,1183,1259,1278,1308,1373,1403,1441,1460,1498,1555,1593,1612,1631,1642,2033,2128,2147,2242,2614,2728,2910,3062,3244,3339,3616,3711,3730,3825,4007,4159,4197,4322,4341,4379,4417,4531,4599,4694,4713,4789,4808,4971,5085,5104,5161,5180,5199,5294,5305,5476,5677,5696,5772,5791,5848,5886,6049,6068,6144,6163,6258,6402,6440,6497,6516,6630,6641,6660,6679,6736,6774,6850,6869,6899,6918,6994,7013,7032,7051,7070,7089,7108,7127,7146,7222,7271,7290,7309,7366,7385,7404,7442,7461,7480,7491,7499,7594,7624,7643,7662,7681,7719,7738,7814,7863,7882,7901,7939,7958,7977,7996,8034,8053,8072,8091,8121,8159,8186,8216,8235,8254,8273,8311,8330,8341,8349,8368,8444,8463,8474,8493,8531,8569,8588,8626,8664,8683,8694,8702,8713,8721,8751,8789,8808,8816,8827,8846,8884,8903,8922,8941,8971,9036,9066,9085,9104,9123,9142,9161,9180,9199,9218,9256,9294,9313,9324,9343,9362,9381,9419,9438,9476,9514,9533,9544,9552,9563,9571,9582,9601,9639,9658,9666,9677,9696,9734,9753,9772,9791,9802,9821,9886,9897,9916,9935,9954,9973,9992];pn._LEAP_12=[37,56,113,132,151,189,208,227,246,284,303,341,360,379,417,436,458,477,496,515,534,572,591,629,648,667,697,716,792,811,830,868,906,925,944,963,982,1001,1020,1039,1058,1088,1153,1202,1221,1240,1297,1335,1392,1411,1422,1430,1517,1525,1536,1574,3358,3472,3806,3988,4751,4941,5066,5123,5275,5343,5438,5457,5495,5533,5552,5715,5810,5829,5905,5924,6421,6535,6793,6812,6888,6907,7002,7184,7260,7279,7374,7556,7746,7757,7776,7833,7852,7871,7966,8015,8110,8129,8148,8224,8243,8338,8406,8425,8482,8501,8520,8558,8596,8607,8615,8645,8740,8778,8835,8865,8930,8960,8979,8998,9017,9055,9074,9093,9112,9150,9188,9237,9275,9332,9351,9370,9408,9427,9446,9457,9465,9495,9560,9590,9628,9647,9685,9715,9742,9780,9810,9818,9829,9848,9867,9905,9924,9943,9962,1e4];pn._CACHE_YEAR=null;class Wu{static fromYmdHms(t,l,h,g,f,F){return new Wu(t,l,h,g,f,F)}constructor(t,l,h,g,f,F){this._lunar=q0.fromYmdHms(t,l,h,g,f,F),this._zhiIndex=r.getTimeZhiIndex([(g<10?"0":"")+g,(f<10?"0":"")+f].join(":")),this._ganIndex=(this._lunar.getDayGanIndexExact()%5*2+this._zhiIndex)%10}getGanIndex(){return this._ganIndex}getZhiIndex(){return this._zhiIndex}getGan(){return r.GAN[this._ganIndex+1]}getZhi(){return r.ZHI[this._zhiIndex+1]}getGanZhi(){return this.getGan()+this.getZhi()}getShengXiao(){return r.SHENGXIAO[this._zhiIndex+1]}getPositionXi(){return r.POSITION_XI[this._ganIndex+1]}getPositionXiDesc(){return r.POSITION_DESC[this.getPositionXi()]}getPositionYangGui(){return r.POSITION_YANG_GUI[this._ganIndex+1]}getPositionYangGuiDesc(){return r.POSITION_DESC[this.getPositionYangGui()]}getPositionYinGui(){return r.POSITION_YIN_GUI[this._ganIndex+1]}getPositionYinGuiDesc(){return r.POSITION_DESC[this.getPositionYinGui()]}getPositionFu(t=2){return(t===1?r.POSITION_FU:r.POSITION_FU_2)[this._ganIndex+1]}getPositionFuDesc(t=2){return r.POSITION_DESC[this.getPositionFu(t)]}getPositionCai(){return r.POSITION_CAI[this._ganIndex+1]}getPositionCaiDesc(){return r.POSITION_DESC[this.getPositionCai()]}getNaYin(){return r.NAYIN[this.getGanZhi()]}getTianShen(){return r.TIAN_SHEN[(this._zhiIndex+r.ZHI_TIAN_SHEN_OFFSET[this._lunar.getDayZhiExact()])%12+1]}getTianShenType(){return r.TIAN_SHEN_TYPE[this.getTianShen()]}getTianShenLuck(){return r.TIAN_SHEN_TYPE_LUCK[this.getTianShenType()]}getChong(){return r.CHONG[this._zhiIndex]}getSha(){return r.SHA[this.getZhi()]}getChongShengXiao(){const t=this.getChong();for(let l=0,h=r.ZHI.length;l<h;l++)if(r.ZHI[l]===t)return r.SHENGXIAO[l];return""}getChongDesc(){return"("+this.getChongGan()+this.getChong()+")"+this.getChongShengXiao()}getChongGan(){return r.CHONG_GAN[this._ganIndex]}getChongGanTie(){return r.CHONG_GAN_TIE[this._ganIndex]}getYi(){return r.getTimeYi(this._lunar.getDayInGanZhiExact(),this.getGanZhi())}getJi(){return r.getTimeJi(this._lunar.getDayInGanZhiExact(),this.getGanZhi())}getNineStar(){const t=this._lunar.getSolar().toYmd(),l=this._lunar.getJieQiTable();let h=!1;t>=l[X.getMessage("jq.dongZhi")].toYmd()&&t<l[X.getMessage("jq.xiaZhi")].toYmd()&&(h=!0);const f=(h?[0,3,6]:[8,5,2])[this._lunar.getDayZhiIndex()%3],F=h?f+this._zhiIndex:f+9-this._zhiIndex;return yn.fromIndex(F%9)}getXun(){return r.getXun(this.getGanZhi())}getXunKong(){return r.getXunKong(this.getGanZhi())}getMinHm(){let t=this._lunar.getHour();return t<1?"00:00":t>22?"23:00":(t%2===0&&(t-=1),(t<10?"0":"")+t+":00")}getMaxHm(){let t=this._lunar.getHour();return t<1?"00:59":t>22?"23:59":(t%2!==0&&(t+=1),(t<10?"0":"")+t+":59")}toString(){return this.getGanZhi()}}const eu=class{constructor(o){this._lunar=o}static fromLunar(o){return new eu(o)}static fromYmdHms(o,t,l,h,g,f){return eu.fromLunar(q0.fromYmdHms(o+eu.DEAD_YEAR-1,t,l,h,g,f))}static fromYmd(o,t,l){return eu.fromYmdHms(o,t,l,0,0,0)}getLunar(){return this._lunar}getYear(){const o=this._lunar.getSolar().getYear();let t=o-eu.DEAD_YEAR;return o===this._lunar.getYear()&&t++,t}getMonth(){return this._lunar.getMonth()}getDay(){return this._lunar.getDay()}getYearInChinese(){const o=this.getYear()+"";let t="";const l=48;for(let h=0,g=o.length;h<g;h++)t+=r.NUMBER[o.charCodeAt(h)-l];return t}getMonthInChinese(){return this._lunar.getMonthInChinese()}getDayInChinese(){return this._lunar.getDayInChinese()}getFestivals(){const o=O0.FESTIVAL[this.getMonth()+"-"+this.getDay()];return o||[]}getOtherFestivals(){const o=[],t=O0.OTHER_FESTIVAL[this.getMonth()+"-"+this.getDay()];return t&&t.forEach(l=>{o.push(l)}),o}isMonthZhai(){const o=this.getMonth();return o===1||o===5||o===9}isDayYangGong(){const o=this.getFestivals();for(let t=0,l=o.length;t<l;t++)if(o[t].getName()==="杨公忌")return!0;return!1}isDayZhaiShuoWang(){const o=this.getDay();return o===1||o===15}isDayZhaiSix(){const o=this.getDay();if(o===8||o===14||o===15||o===23||o===29||o===30)return!0;if(o===28){const t=Bi.fromYm(this._lunar.getYear(),this.getMonth());if(t!=null&&t.getDayCount()!==30)return!0}return!1}isDayZhaiTen(){const o=this.getDay();return o===1||o===8||o===14||o===15||o===18||o===23||o===24||o===28||o===29||o===30}isDayZhaiGuanYin(){const o=this.getMonth()+"-"+this.getDay();for(let t=0,l=O0.DAY_ZHAI_GUAN_YIN.length;t<l;t++)if(o===O0.DAY_ZHAI_GUAN_YIN[t])return!0;return!1}getXiu(){return O0.getXiu(this.getMonth(),this.getDay())}getXiuLuck(){return r.XIU_LUCK[this.getXiu()]}getXiuSong(){return r.XIU_SONG[this.getXiu()]}getZheng(){return r.ZHENG[this.getXiu()]}getAnimal(){return r.ANIMAL[this.getXiu()]}getGong(){return r.GONG[this.getXiu()]}getShou(){return r.SHOU[this.getGong()]}toString(){return this.getYearInChinese()+"年"+this.getMonthInChinese()+"月"+this.getDayInChinese()}toFullString(){let o=this.toString();const t=this.getFestivals();for(let l=0,h=t.length;l<h;l++)o+=" ("+t[l]+")";return o}};let D4=eu;D4.DEAD_YEAR=-543;const iu=class{constructor(o){this._lunar=o}static fromLunar(o){return new iu(o)}static fromYmdHms(o,t,l,h,g,f){return iu.fromLunar(q0.fromYmdHms(o+iu.BIRTH_YEAR,t,l,h,g,f))}static fromYmd(o,t,l){return iu.fromYmdHms(o,t,l,0,0,0)}getLunar(){return this._lunar}getYear(){return this._lunar.getYear()-iu.BIRTH_YEAR}getMonth(){return this._lunar.getMonth()}getDay(){return this._lunar.getDay()}getYearInChinese(){const o=this.getYear()+"";let t="";const l=48;for(let h=0,g=o.length;h<g;h++)t+=r.NUMBER[o.charCodeAt(h)-l];return t}getMonthInChinese(){return this._lunar.getMonthInChinese()}getDayInChinese(){return this._lunar.getDayInChinese()}getFestivals(){const o=[],t=ln.FESTIVAL[this.getMonth()+"-"+this.getDay()];t&&t.forEach(g=>{o.push(g)});const l=this._lunar.getJieQi();X.getMessage("jq.dongZhi")===l?o.push(new O("元始天尊圣诞")):X.getMessage("jq.xiaZhi")===l&&o.push(new O("灵宝天尊圣诞"));let h=ln.BA_JIE[l];return h&&o.push(new O(h)),h=ln.BA_HUI[this._lunar.getDayInGanZhi()],h&&o.push(new O(h)),o}_isDayIn(o){const t=this.getMonth()+"-"+this.getDay();for(let l=0,h=o.length;l<h;l++)if(t===o[l])return!0;return!1}isDaySanHui(){return this._isDayIn(ln.SAN_HUI)}isDaySanYuan(){return this._isDayIn(ln.SAN_YUAN)}isDayBaJie(){return!!ln.BA_JIE[this._lunar.getJieQi()]}isDayWuLa(){return this._isDayIn(ln.WU_LA)}isDayBaHui(){return!!ln.BA_HUI[this._lunar.getDayInGanZhi()]}isDayMingWu(){return X.getMessage("tg.wu")===this._lunar.getDayGan()}isDayAnWu(){return this._lunar.getDayZhi()===ln.AN_WU[Math.abs(this.getMonth())-1]}isDayWu(){return this.isDayMingWu()||this.isDayAnWu()}isDayTianShe(){let o=!1;const t=this._lunar.getMonthZhi(),l=this._lunar.getDayInGanZhi();return[X.getMessage("dz.yin"),X.getMessage("dz.mao"),X.getMessage("dz.chen")].join(",").indexOf(t)>-1?X.getMessage("jz.wuYin")===l&&(o=!0):[X.getMessage("dz.si"),X.getMessage("dz.wu"),X.getMessage("dz.wei")].join(",").indexOf(t)>-1?X.getMessage("jz.jiaWu")===l&&(o=!0):[X.getMessage("dz.shen"),X.getMessage("dz.you"),X.getMessage("dz.xu")].join(",").indexOf(t)>-1?X.getMessage("jz.wuShen")===l&&(o=!0):[X.getMessage("dz.hai"),X.getMessage("dz.zi"),X.getMessage("dz.chou")].join(",").indexOf(t)>-1&&X.getMessage("jz.jiaZi")===l&&(o=!0),o}toString(){return this.getYearInChinese()+"年"+this.getMonthInChinese()+"月"+this.getDayInChinese()}toFullString(){return"道歷"+this.getYearInChinese()+"年，天運"+this._lunar.getYearInGanZhi()+"年，"+this._lunar.getMonthInGanZhi()+"月，"+this._lunar.getDayInGanZhi()+"日。"+this.getMonthInChinese()+"月"+this.getDayInChinese()+"日，"+this._lunar.getTimeZhi()+"時。"}};let x4=iu;x4.BIRTH_YEAR=-2697;class q0{static fromYmd(t,l,h){return q0.fromYmdHms(t,l,h,0,0,0)}static fromYmdHms(t,l,h,g,f,F){let A=pn.fromYear(t);const y=A.getMonth(l);if(y==null)throw new Error(`wrong lunar year ${t} month ${l}`);if(h<1)throw new Error("lunar day must bigger than 0");const x=y.getDayCount();if(h>x)throw new Error(`only ${x} days in lunar year ${t} month ${l}`);const S=y0.fromJulianDay(y.getFirstJulianDay()+h-1),_=y0.fromYmdHms(S.getYear(),S.getMonth(),S.getDay(),g,f,F);return S.getYear()!==t&&(A=pn.fromYear(S.getYear())),new q0(t,l,h,g,f,F,_,A)}static fromSolar(t){let l=0,h=0,g=0;const f=pn.fromYear(t.getYear()),F=f.getMonths();for(let A=0,y=F.length;A<y;A++){const x=F[A],S=t.subtract(y0.fromJulianDay(x.getFirstJulianDay()));if(S<x.getDayCount()){l=x.getYear(),h=x.getMonth(),g=S+1;break}}return new q0(l,h,g,t.getHour(),t.getMinute(),t.getSecond(),t,f)}static fromDate(t){return q0.fromSolar(y0.fromDate(t))}static _computeJieQi(t,l){const h=l.getJieQiJulianDays();for(let g=0,f=r.JIE_QI_IN_USE.length;g<f;g++){const F=r.JIE_QI_IN_USE[g];t.jieQiList.push(F),t.jieQi[F]=y0.fromJulianDay(h[g])}}static _computeYear(t,l,h){const g=h-4;let f=g%10,F=g%12;f<0&&(f+=10),F<0&&(F+=12);let A=f,y=F,x=f,S=F;const _=l.getYear(),R=l.toYmd(),L=l.toYmdHms();let J=t.jieQi[X.getMessage("jq.liChun")];J.getYear()!=_&&(J=t.jieQi.LI_CHUN);const k=J.toYmd(),a0=J.toYmdHms();h===_?(R<k&&(A--,y--),L<a0&&(x--,S--)):h<_&&(R>=k&&(A++,y++),L>=a0&&(x++,S++)),t.yearGanIndex=f,t.yearZhiIndex=F,t.yearGanIndexByLiChun=(A<0?A+10:A)%10,t.yearZhiIndexByLiChun=(y<0?y+12:y)%12,t.yearGanIndexExact=(x<0?x+10:x)%10,t.yearZhiIndexExact=(S<0?S+12:S)%12}static _computeMonth(t,l){let h=null,g=null;const f=l.toYmd(),F=l.toYmdHms(),A=r.JIE_QI_IN_USE.length;let y=-3;for(let S=0;S<A;S+=2){g=t.jieQi[r.JIE_QI_IN_USE[S]];const _=h==null?f:h.toYmd();if(f>=_&&f<g.toYmd())break;h=g,y++}let x=((t.yearGanIndexByLiChun+(y<0?1:0))%5+1)*2%10;t.monthGanIndex=((y<0?y+10:y)+x)%10,t.monthZhiIndex=((y<0?y+12:y)+r.BASE_MONTH_ZHI_INDEX)%12,h=null,y=-3;for(let S=0;S<A;S+=2){g=t.jieQi[r.JIE_QI_IN_USE[S]];const _=h==null?F:h.toYmdHms();if(F>=_&&F<g.toYmdHms())break;h=g,y++}x=((t.yearGanIndexExact+(y<0?1:0))%5+1)*2%10,t.monthGanIndexExact=((y<0?y+10:y)+x)%10,t.monthZhiIndexExact=((y<0?y+12:y)+r.BASE_MONTH_ZHI_INDEX)%12}static _computeDay(t,l,h,g){const f=y0.fromYmdHms(l.getYear(),l.getMonth(),l.getDay(),12,0,0),F=Math.floor(f.getJulianDay())-11,A=F%10,y=F%12;t.dayGanIndex=A,t.dayZhiIndex=y;let x=A,S=y;t.dayGanIndexExact2=x,t.dayZhiIndexExact2=S;const _=(h<10?"0":"")+h+":"+(g<10?"0":"")+g;_>="23:00"&&_<="23:59"&&(x++,x>=10&&(x-=10),S++,S>=12&&(S-=12)),t.dayGanIndexExact=x,t.dayZhiIndexExact=S}static _computeTime(t,l,h){const g=r.getTimeZhiIndex((l<10?"0":"")+l+":"+(h<10?"0":"")+h);t.timeZhiIndex=g,t.timeGanIndex=(t.dayGanIndexExact%5*2+g)%10}static _computeWeek(t,l){t.weekIndex=l.getWeek()}static _compute(t,l,h,g,f){const F={timeGanIndex:0,timeZhiIndex:0,dayGanIndex:0,dayZhiIndex:0,dayGanIndexExact:0,dayZhiIndexExact:0,dayGanIndexExact2:0,dayZhiIndexExact2:0,monthGanIndex:0,monthZhiIndex:0,monthGanIndexExact:0,monthZhiIndexExact:0,yearGanIndex:0,yearZhiIndex:0,yearGanIndexByLiChun:0,yearZhiIndexByLiChun:0,yearGanIndexExact:0,yearZhiIndexExact:0,weekIndex:0,jieQi:{},jieQiList:[]};return q0._computeJieQi(F,f),q0._computeYear(F,g,t),q0._computeMonth(F,g),q0._computeDay(F,g,l,h),q0._computeTime(F,l,h),q0._computeWeek(F,g),F}constructor(t,l,h,g,f,F,A,y){const x=q0._compute(t,g,f,A,y);this._year=t,this._month=l,this._day=h,this._hour=g,this._minute=f,this._second=F,this._timeGanIndex=x.timeGanIndex,this._timeZhiIndex=x.timeZhiIndex,this._dayGanIndex=x.dayGanIndex,this._dayZhiIndex=x.dayZhiIndex,this._dayGanIndexExact=x.dayGanIndexExact,this._dayZhiIndexExact=x.dayZhiIndexExact,this._dayGanIndexExact2=x.dayGanIndexExact2,this._dayZhiIndexExact2=x.dayZhiIndexExact2,this._monthGanIndex=x.monthGanIndex,this._monthZhiIndex=x.monthZhiIndex,this._monthGanIndexExact=x.monthGanIndexExact,this._monthZhiIndexExact=x.monthZhiIndexExact,this._yearGanIndex=x.yearGanIndex,this._yearZhiIndex=x.yearZhiIndex,this._yearGanIndexByLiChun=x.yearGanIndexByLiChun,this._yearZhiIndexByLiChun=x.yearZhiIndexByLiChun,this._yearGanIndexExact=x.yearGanIndexExact,this._yearZhiIndexExact=x.yearZhiIndexExact,this._weekIndex=x.weekIndex,this._jieQi=x.jieQi,this._jieQiList=x.jieQiList,this._solar=A,this._eightChar=new V5(this),this._lang=X.getLanguage()}getYear(){return this._year}getMonth(){return this._month}getDay(){return this._day}getHour(){return this._hour}getMinute(){return this._minute}getSecond(){return this._second}getTimeGanIndex(){return this._timeGanIndex}getTimeZhiIndex(){return this._timeZhiIndex}getDayGanIndex(){return this._dayGanIndex}getDayZhiIndex(){return this._dayZhiIndex}getMonthGanIndex(){return this._monthGanIndex}getMonthZhiIndex(){return this._monthZhiIndex}getYearGanIndex(){return this._yearGanIndex}getYearZhiIndex(){return this._yearZhiIndex}getYearGanIndexByLiChun(){return this._yearGanIndexByLiChun}getYearZhiIndexByLiChun(){return this._yearZhiIndexByLiChun}getDayGanIndexExact(){return this._dayGanIndexExact}getDayZhiIndexExact(){return this._dayZhiIndexExact}getDayGanIndexExact2(){return this._dayGanIndexExact2}getDayZhiIndexExact2(){return this._dayZhiIndexExact2}getMonthGanIndexExact(){return this._monthGanIndexExact}getMonthZhiIndexExact(){return this._monthZhiIndexExact}getYearGanIndexExact(){return this._yearGanIndexExact}getYearZhiIndexExact(){return this._yearZhiIndexExact}getGan(){return this.getYearGan()}getZhi(){return this.getYearZhi()}getYearGan(){return r.GAN[this._yearGanIndex+1]}getYearGanByLiChun(){return r.GAN[this._yearGanIndexByLiChun+1]}getYearGanExact(){return r.GAN[this._yearGanIndexExact+1]}getYearZhi(){return r.ZHI[this._yearZhiIndex+1]}getYearZhiByLiChun(){return r.ZHI[this._yearZhiIndexByLiChun+1]}getYearZhiExact(){return r.ZHI[this._yearZhiIndexExact+1]}getYearInGanZhi(){return this.getYearGan()+this.getYearZhi()}getYearInGanZhiByLiChun(){return this.getYearGanByLiChun()+this.getYearZhiByLiChun()}getYearInGanZhiExact(){return this.getYearGanExact()+this.getYearZhiExact()}getMonthGan(){return r.GAN[this._monthGanIndex+1]}getMonthGanExact(){return r.GAN[this._monthGanIndexExact+1]}getMonthZhi(){return r.ZHI[this._monthZhiIndex+1]}getMonthZhiExact(){return r.ZHI[this._monthZhiIndexExact+1]}getMonthInGanZhi(){return this.getMonthGan()+this.getMonthZhi()}getMonthInGanZhiExact(){return this.getMonthGanExact()+this.getMonthZhiExact()}getDayGan(){return r.GAN[this._dayGanIndex+1]}getDayGanExact(){return r.GAN[this._dayGanIndexExact+1]}getDayGanExact2(){return r.GAN[this._dayGanIndexExact2+1]}getDayZhi(){return r.ZHI[this._dayZhiIndex+1]}getDayZhiExact(){return r.ZHI[this._dayZhiIndexExact+1]}getDayZhiExact2(){return r.ZHI[this._dayZhiIndexExact2+1]}getDayInGanZhi(){return this.getDayGan()+this.getDayZhi()}getDayInGanZhiExact(){return this.getDayGanExact()+this.getDayZhiExact()}getDayInGanZhiExact2(){return this.getDayGanExact2()+this.getDayZhiExact2()}getTimeGan(){return r.GAN[this._timeGanIndex+1]}getTimeZhi(){return r.ZHI[this._timeZhiIndex+1]}getTimeInGanZhi(){return this.getTimeGan()+this.getTimeZhi()}getShengxiao(){return this.getYearShengXiao()}getYearShengXiao(){return r.SHENGXIAO[this._yearZhiIndex+1]}getYearShengXiaoByLiChun(){return r.SHENGXIAO[this._yearZhiIndexByLiChun+1]}getYearShengXiaoExact(){return r.SHENGXIAO[this._yearZhiIndexExact+1]}getMonthShengXiao(){return r.SHENGXIAO[this._monthZhiIndex+1]}getMonthShengXiaoExact(){return r.SHENGXIAO[this._monthZhiIndexExact+1]}getDayShengXiao(){return r.SHENGXIAO[this._dayZhiIndex+1]}getTimeShengXiao(){return r.SHENGXIAO[this._timeZhiIndex+1]}getYearInChinese(){const t=this._year+"";let l="";const h=48;for(let g=0,f=t.length;g<f;g++){const F=t.charCodeAt(g);l+=r.NUMBER[F-h]}return l}getMonthInChinese(){return(this._month<0?"闰":"")+r.MONTH[Math.abs(this._month)]}getDayInChinese(){return r.DAY[this._day]}getPengZuGan(){return r.PENGZU_GAN[this._dayGanIndex+1]}getPengZuZhi(){return r.PENGZU_ZHI[this._dayZhiIndex+1]}getPositionXi(){return this.getDayPositionXi()}getPositionXiDesc(){return this.getDayPositionXiDesc()}getPositionYangGui(){return this.getDayPositionYangGui()}getPositionYangGuiDesc(){return this.getDayPositionYangGuiDesc()}getPositionYinGui(){return this.getDayPositionYinGui()}getPositionYinGuiDesc(){return this.getDayPositionYinGuiDesc()}getPositionFu(){return this.getDayPositionFu()}getPositionFuDesc(){return this.getDayPositionFuDesc()}getPositionCai(){return this.getDayPositionCai()}getPositionCaiDesc(){return this.getDayPositionCaiDesc()}getDayPositionXi(){return r.POSITION_XI[this._dayGanIndex+1]}getDayPositionXiDesc(){const t=r.POSITION_DESC[this.getDayPositionXi()];return t||""}getDayPositionYangGui(){return r.POSITION_YANG_GUI[this._dayGanIndex+1]}getDayPositionYangGuiDesc(){const t=r.POSITION_DESC[this.getDayPositionYangGui()];return t||""}getDayPositionYinGui(){return r.POSITION_YIN_GUI[this._dayGanIndex+1]}getDayPositionYinGuiDesc(){const t=r.POSITION_DESC[this.getDayPositionYinGui()];return t||""}getDayPositionFu(t=2){return(t===1?r.POSITION_FU:r.POSITION_FU_2)[this._dayGanIndex+1]}getDayPositionFuDesc(t=2){const l=r.POSITION_DESC[this.getDayPositionFu(t)];return l||""}getDayPositionCai(){return r.POSITION_CAI[this._dayGanIndex+1]}getDayPositionCaiDesc(){const t=r.POSITION_DESC[this.getDayPositionCai()];return t||""}getTimePositionXi(){return r.POSITION_XI[this._timeGanIndex+1]}getTimePositionXiDesc(){const t=r.POSITION_DESC[this.getTimePositionXi()];return t||""}getTimePositionYangGui(){return r.POSITION_YANG_GUI[this._timeGanIndex+1]}getTimePositionYangGuiDesc(){const t=r.POSITION_DESC[this.getTimePositionYangGui()];return t||""}getTimePositionYinGui(){return r.POSITION_YIN_GUI[this._timeGanIndex+1]}getTimePositionYinGuiDesc(){const t=r.POSITION_DESC[this.getTimePositionYinGui()];return t||""}getTimePositionFu(t=2){return(t===1?r.POSITION_FU:r.POSITION_FU_2)[this._timeGanIndex+1]}getTimePositionFuDesc(t=2){const l=r.POSITION_DESC[this.getTimePositionFu(t)];return l||""}getTimePositionCai(){return r.POSITION_CAI[this._timeGanIndex+1]}getTimePositionCaiDesc(){const t=r.POSITION_DESC[this.getTimePositionCai()];return t||""}getYearPositionTaiSui(t=2){let l=this._yearZhiIndexByLiChun;switch(t){case 1:l=this._yearZhiIndex;break;case 3:l=this._yearZhiIndexExact;break}return r.POSITION_TAI_SUI_YEAR[l]}getYearPositionTaiSuiDesc(t=2){return r.POSITION_DESC[this.getYearPositionTaiSui(t)]}getMonthPositionTaiSui(t=2){let l=this._monthZhiIndex,h=this._monthGanIndex;t===3&&(l=this._monthZhiIndexExact,h=this._monthGanIndexExact);let g=l-r.BASE_MONTH_ZHI_INDEX;return g<0&&(g+=12),[X.getMessage("bg.gen"),r.POSITION_GAN[h],X.getMessage("bg.kun"),X.getMessage("bg.xun")][g%4]}getMonthPositionTaiSuiDesc(t=2){return r.POSITION_DESC[this.getMonthPositionTaiSui(t)]}getDayPositionTaiSui(t=2){let l=this.getDayInGanZhiExact2(),h=this._yearZhiIndexByLiChun;switch(t){case 1:l=this.getDayInGanZhi(),h=this._yearZhiIndex;break;case 3:l=this.getDayInGanZhi(),h=this._yearZhiIndexExact;break}return[X.getMessage("jz.jiaZi"),X.getMessage("jz.yiChou"),X.getMessage("jz.bingYin"),X.getMessage("jz.dingMao"),X.getMessage("jz.wuChen"),X.getMessage("jz.jiSi")].join(",").indexOf(l)>-1?X.getMessage("bg.zhen"):[X.getMessage("jz.bingZi"),X.getMessage("jz.dingChou"),X.getMessage("jz.wuYin"),X.getMessage("jz.jiMao"),X.getMessage("jz.gengChen"),X.getMessage("jz.xinSi")].join(",").indexOf(l)>-1?X.getMessage("bg.li"):[X.getMessage("jz.wuZi"),X.getMessage("jz.jiChou"),X.getMessage("jz.gengYin"),X.getMessage("jz.xinMao"),X.getMessage("jz.renChen"),X.getMessage("jz.guiSi")].join(",").indexOf(l)>-1?X.getMessage("ps.center"):[X.getMessage("jz.gengZi"),X.getMessage("jz.xinChou"),X.getMessage("jz.renYin"),X.getMessage("jz.guiMao"),X.getMessage("jz.jiaChen"),X.getMessage("jz.yiSi")].join(",").indexOf(l)>-1?X.getMessage("bg.dui"):[X.getMessage("jz.renZi"),X.getMessage("jz.guiChou"),X.getMessage("jz.jiaYin"),X.getMessage("jz.yiMao"),X.getMessage("jz.bingChen"),X.getMessage("jz.dingSi")].join(",").indexOf(l)>-1?X.getMessage("bg.kan"):r.POSITION_TAI_SUI_YEAR[h]}getDayPositionTaiSuiDesc(t=2){return r.POSITION_DESC[this.getDayPositionTaiSui(t)]}getChong(){return this.getDayChong()}getChongGan(){return this.getDayChongGan()}getChongGanTie(){return this.getDayChongGanTie()}getChongShengXiao(){return this.getDayChongShengXiao()}getChongDesc(){return this.getDayChongDesc()}getSha(){return this.getDaySha()}getDayChong(){return r.CHONG[this._dayZhiIndex]}getDayChongGan(){return r.CHONG_GAN[this._dayGanIndex]}getDayChongGanTie(){return r.CHONG_GAN_TIE[this._dayGanIndex]}getDayChongShengXiao(){const t=this.getChong();for(let l=0,h=r.ZHI.length;l<h;l++)if(r.ZHI[l]===t)return r.SHENGXIAO[l];return""}getDayChongDesc(){return"("+this.getDayChongGan()+this.getDayChong()+")"+this.getDayChongShengXiao()}getDaySha(){const t=r.SHA[this.getDayZhi()];return t||""}getTimeChong(){return r.CHONG[this._timeZhiIndex]}getTimeChongGan(){return r.CHONG_GAN[this._timeGanIndex]}getTimeChongGanTie(){return r.CHONG_GAN_TIE[this._timeGanIndex]}getTimeChongShengXiao(){const t=this.getTimeChong();for(let l=0,h=r.ZHI.length;l<h;l++)if(r.ZHI[l]===t)return r.SHENGXIAO[l];return""}getTimeChongDesc(){return"("+this.getTimeChongGan()+this.getTimeChong()+")"+this.getTimeChongShengXiao()}getTimeSha(){const t=r.SHA[this.getTimeZhi()];return t||""}getYearNaYin(){const t=r.NAYIN[this.getYearInGanZhi()];return t||""}getMonthNaYin(){const t=r.NAYIN[this.getMonthInGanZhi()];return t||""}getDayNaYin(){const t=r.NAYIN[this.getDayInGanZhi()];return t||""}getTimeNaYin(){const t=r.NAYIN[this.getTimeInGanZhi()];return t||""}getSeason(){return r.SEASON[Math.abs(this._month)]}static _convertJieQi(t){let l=t;return l==="DONG_ZHI"?l=X.getMessage("jq.dongZhi"):l==="DA_HAN"?l=X.getMessage("jq.daHan"):l==="XIAO_HAN"?l=X.getMessage("jq.xiaoHan"):l==="LI_CHUN"?l=X.getMessage("jq.liChun"):l==="DA_XUE"?l=X.getMessage("jq.daXue"):l==="YU_SHUI"?l=X.getMessage("jq.yuShui"):l==="JING_ZHE"&&(l=X.getMessage("jq.jingZhe")),l}checkLang(){const t=X.getLanguage();if(this._lang!=t){for(let l=0,h=r.JIE_QI_IN_USE.length;l<h;l++){const g=r.JIE_QI_IN_USE[l],f=this._jieQiList[l],F=this._jieQi[f];this._jieQiList[l]=g,this._jieQi[g]=F}this._lang=t}}getJie(){for(let t=0,l=r.JIE_QI_IN_USE.length;t<l;t+=2){const h=r.JIE_QI_IN_USE[t],g=this.getJieQiSolar(h);if(g&&g.getYear()===this._solar.getYear()&&g.getMonth()===this._solar.getMonth()&&g.getDay()===this._solar.getDay())return q0._convertJieQi(h)}return""}getQi(){for(let t=1,l=r.JIE_QI_IN_USE.length;t<l;t+=2){const h=r.JIE_QI_IN_USE[t],g=this.getJieQiSolar(h);if(g&&g.getYear()===this._solar.getYear()&&g.getMonth()===this._solar.getMonth()&&g.getDay()===this._solar.getDay())return q0._convertJieQi(h)}return""}getJieQi(){let t="";const l=Object.keys(this._jieQi);for(let h=0,g=l.length;h<g;h++){const f=l[h],F=this._jieQi[f];if(F.getYear()==this._solar.getYear()&&F.getMonth()==this._solar.getMonth()&&F.getDay()==this._solar.getDay()){t=f;break}}return q0._convertJieQi(t)}getWeek(){return this._weekIndex}getWeekInChinese(){return T0.WEEK[this.getWeek()]}getXiu(){const t=r.XIU[this.getDayZhi()+this.getWeek()];return t||""}getXiuLuck(){const t=r.XIU_LUCK[this.getXiu()];return t||""}getXiuSong(){const t=r.XIU_SONG[this.getXiu()];return t||""}getZheng(){const t=r.ZHENG[this.getXiu()];return t||""}getAnimal(){const t=r.ANIMAL[this.getXiu()];return t||""}getGong(){const t=r.GONG[this.getXiu()];return t||""}getShou(){const t=r.SHOU[this.getGong()];return t||""}getFestivals(){const t=[],l=r.FESTIVAL[this._month+"-"+this._day];return l&&t.push(l),Math.abs(this._month)==12&&this._day>=29&&this._year!=this.next(1).getYear()&&t.push(X.getMessage("jr.chuXi")),t}getOtherFestivals(){const t=[],l=r.OTHER_FESTIVAL[this._month+"-"+this._day];l&&l.forEach(F=>{t.push(F)});let h=this.getJieQiSolar(X.getMessage("jq.qingMing"));const g=this._solar.toYmd();g===h.next(-1).toYmd()&&t.push("寒食节"),h=this.getJieQiSolar(X.getMessage("jq.liChun"));let f=4-h.getLunar().getDayGanIndex();return f<0&&(f+=10),g===h.next(f+40).toYmd()&&t.push("春社"),h=this.getJieQiSolar(X.getMessage("jq.liQiu")),f=4-h.getLunar().getDayGanIndex(),f<0&&(f+=10),g===h.next(f+40).toYmd()&&t.push("秋社"),t}getBaZi(){const t=this.getEightChar(),l=[];return l.push(t.getYear()),l.push(t.getMonth()),l.push(t.getDay()),l.push(t.getTime()),l}getBaZiWuXing(){const t=this.getEightChar(),l=[];return l.push(t.getYearWuXing()),l.push(t.getMonthWuXing()),l.push(t.getDayWuXing()),l.push(t.getTimeWuXing()),l}getBaZiNaYin(){const t=this.getEightChar(),l=[];return l.push(t.getYearNaYin()),l.push(t.getMonthNaYin()),l.push(t.getDayNaYin()),l.push(t.getTimeNaYin()),l}getBaZiShiShenGan(){const t=this.getEightChar(),l=[];return l.push(t.getYearShiShenGan()),l.push(t.getMonthShiShenGan()),l.push(t.getDayShiShenGan()),l.push(t.getTimeShiShenGan()),l}getBaZiShiShenZhi(){const t=this.getEightChar(),l=[];return l.push(t.getYearShiShenZhi()[0]),l.push(t.getMonthShiShenZhi()[0]),l.push(t.getDayShiShenZhi()[0]),l.push(t.getTimeShiShenZhi()[0]),l}getBaZiShiShenYearZhi(){return this.getEightChar().getYearShiShenZhi()}getBaZiShiShenMonthZhi(){return this.getEightChar().getMonthShiShenZhi()}getBaZiShiShenDayZhi(){return this.getEightChar().getDayShiShenZhi()}getBaZiShiShenTimeZhi(){return this.getEightChar().getTimeShiShenZhi()}getZhiXing(){let t=this._dayZhiIndex-this._monthZhiIndex;return t<0&&(t+=12),r.ZHI_XING[t+1]}getDayTianShen(){const t=this.getMonthZhi(),l=r.ZHI_TIAN_SHEN_OFFSET[t];return l==null?"":r.TIAN_SHEN[(this._dayZhiIndex+l)%12+1]}getTimeTianShen(){const t=this.getDayZhiExact(),l=r.ZHI_TIAN_SHEN_OFFSET[t];return l==null?"":r.TIAN_SHEN[(this._timeZhiIndex+l)%12+1]}getDayTianShenType(){const t=r.TIAN_SHEN_TYPE[this.getDayTianShen()];return t||""}getTimeTianShenType(){const t=r.TIAN_SHEN_TYPE[this.getTimeTianShen()];return t||""}getDayTianShenLuck(){const t=r.TIAN_SHEN_TYPE_LUCK[this.getDayTianShenType()];return t||""}getTimeTianShenLuck(){const t=r.TIAN_SHEN_TYPE_LUCK[this.getTimeTianShenType()];return t||""}getDayPositionTai(){return r.POSITION_TAI_DAY[r.getJiaZiIndex(this.getDayInGanZhi())]}getMonthPositionTai(){const t=this._month;return t<0?"":r.POSITION_TAI_MONTH[t-1]}getDayYi(t=1){return r.getDayYi(t==2?this.getMonthInGanZhiExact():this.getMonthInGanZhi(),this.getDayInGanZhi())}getDayJi(t=1){return r.getDayJi(t==2?this.getMonthInGanZhiExact():this.getMonthInGanZhi(),this.getDayInGanZhi())}getDayJiShen(){return r.getDayJiShen(this.getMonthZhiIndex(),this.getDayInGanZhi())}getDayXiongSha(){return r.getDayXiongSha(this.getMonthZhiIndex(),this.getDayInGanZhi())}getTimeYi(){return r.getTimeYi(this.getDayInGanZhiExact(),this.getTimeInGanZhi())}getTimeJi(){return r.getTimeJi(this.getDayInGanZhiExact(),this.getTimeInGanZhi())}getYueXiang(){return r.YUE_XIANG[this._day]}_getYearNineStar(t){const l=r.getJiaZiIndex(t)+1,h=r.getJiaZiIndex(this.getYearInGanZhi())+1;let g=l-h;g>1?g-=60:g<-1&&(g+=60);let F=(62+Math.floor((this._year+g+2696)/60)%3*3-l)%9;return F===0&&(F=9),yn.fromIndex(F-1)}getYearNineStar(t=2){switch(t){case 1:return this._getYearNineStar(this.getYearInGanZhi());case 3:return this._getYearNineStar(this.getYearInGanZhiExact())}return this._getYearNineStar(this.getYearInGanZhiByLiChun())}getMonthNineStar(t=2){let l=this._yearZhiIndexByLiChun,h=this._monthZhiIndex;switch(t){case 1:l=this._yearZhiIndex,h=this._monthZhiIndex;break;case 3:l=this._yearZhiIndexExact,h=this._monthZhiIndexExact;break}let g=27-l%3*3;return h<r.BASE_MONTH_ZHI_INDEX&&(g-=3),yn.fromIndex((g-h)%9)}getJieQiSolar(t){return this.checkLang(),this._jieQi[t]}getDayNineStar(){const t=this._solar.toYmd(),l=this.getJieQiSolar(X.getMessage("jq.dongZhi")),h=this.getJieQiSolar("DONG_ZHI"),g=this.getJieQiSolar(X.getMessage("jq.xiaZhi")),f=r.getJiaZiIndex(l.getLunar().getDayInGanZhi()),F=r.getJiaZiIndex(h.getLunar().getDayInGanZhi()),A=r.getJiaZiIndex(g.getLunar().getDayInGanZhi()),y=l.next(f>29?60-f:-f),x=h.next(F>29?60-F:-F),S=g.next(A>29?60-A:-A),_=y.toYmd(),R=x.toYmd(),L=S.toYmd();let J=0;return t>=_&&t<L?J=this._solar.subtract(y)%9:t>=L&&t<R?J=8-this._solar.subtract(S)%9:t>=R?J=this._solar.subtract(x)%9:t<_&&(J=(8+y.subtract(this._solar))%9),yn.fromIndex(J)}getTimeNineStar(){const t=this._solar.toYmd();let l=!1;(t>=this.getJieQiSolar(X.getMessage("jq.dongZhi")).toYmd()&&t<this.getJieQiSolar(X.getMessage("jq.xiaZhi")).toYmd()||t>=this.getJieQiSolar("DONG_ZHI").toYmd())&&(l=!0);const g=(l?[0,3,6]:[8,5,2])[this.getDayZhiIndex()%3],f=l?g+this._timeZhiIndex:g+9-this._timeZhiIndex;return yn.fromIndex(f%9)}getSolar(){return this._solar}getJieQiTable(){return this.checkLang(),this._jieQi}getJieQiList(){return this._jieQiList}getNextJie(t=!1){const l=[];for(let h=0,g=r.JIE_QI_IN_USE.length/2;h<g;h++)l.push(r.JIE_QI_IN_USE[h*2]);return this.getNearJieQi(!0,l,t)}getPrevJie(t=!1){const l=[];for(let h=0,g=r.JIE_QI_IN_USE.length/2;h<g;h++)l.push(r.JIE_QI_IN_USE[h*2]);return this.getNearJieQi(!1,l,t)}getNextQi(t=!1){const l=[];for(let h=0,g=r.JIE_QI_IN_USE.length/2;h<g;h++)l.push(r.JIE_QI_IN_USE[h*2+1]);return this.getNearJieQi(!0,l,t)}getPrevQi(t=!1){const l=[];for(let h=0,g=r.JIE_QI_IN_USE.length/2;h<g;h++)l.push(r.JIE_QI_IN_USE[h*2+1]);return this.getNearJieQi(!1,l,t)}getNextJieQi(t=!1){return this.getNearJieQi(!0,[],t)}getPrevJieQi(t=!1){return this.getNearJieQi(!1,[],t)}getNearJieQi(t,l,h){let g="",f=null;const F={};let A=!1;if(l)for(let S=0,_=l.length;S<_;S++)F[l[S]]=!0,A=!0;const y=h?this._solar.toYmd():this._solar.toYmdHms(),x=Object.keys(this._jieQi);for(let S=0,_=x.length;S<_;S++){const R=x[S],L=this._jieQi[R],J=q0._convertJieQi(R);if(A&&!F[J])continue;const k=h?L.toYmd():L.toYmdHms();if(t){if(k<=y)continue;if(f==null)g=J,f=L;else{const a0=h?f.toYmd():f.toYmdHms();k<a0&&(g=J,f=L)}}else{if(k>y)continue;if(f==null)g=J,f=L;else{const a0=h?f.toYmd():f.toYmdHms();k>a0&&(g=J,f=L)}}}return new Ai(g,f)}getCurrentJieQi(){const t=Object.keys(this._jieQi);for(let l=0,h=t.length;l<h;l++){const g=t[l],f=this._jieQi[g];if(f.getYear()==this._solar.getYear()&&f.getMonth()==this._solar.getMonth()&&f.getDay()==this._solar.getDay())return new Ai(q0._convertJieQi(g),f)}return null}getCurrentJie(){for(let t=0,l=r.JIE_QI_IN_USE.length;t<l;t+=2){const h=r.JIE_QI_IN_USE[t],g=this.getJieQiSolar(h);if(g&&g.getYear()===this._solar.getYear()&&g.getMonth()===this._solar.getMonth()&&g.getDay()===this._solar.getDay())return new Ai(q0._convertJieQi(h),g)}return null}getCurrentQi(){for(let t=1,l=r.JIE_QI_IN_USE.length;t<l;t+=2){const h=r.JIE_QI_IN_USE[t],g=this.getJieQiSolar(h);if(g&&g.getYear()===this._solar.getYear()&&g.getMonth()===this._solar.getMonth()&&g.getDay()===this._solar.getDay())return new Ai(q0._convertJieQi(h),g)}return null}getEightChar(){return this._eightChar}next(t){return this._solar.next(t).getLunar()}getYearXun(){return r.getXun(this.getYearInGanZhi())}getMonthXun(){return r.getXun(this.getMonthInGanZhi())}getDayXun(){return r.getXun(this.getDayInGanZhi())}getTimeXun(){return r.getXun(this.getTimeInGanZhi())}getYearXunByLiChun(){return r.getXun(this.getYearInGanZhiByLiChun())}getYearXunExact(){return r.getXun(this.getYearInGanZhiExact())}getMonthXunExact(){return r.getXun(this.getMonthInGanZhiExact())}getDayXunExact(){return r.getXun(this.getDayInGanZhiExact())}getDayXunExact2(){return r.getXun(this.getDayInGanZhiExact2())}getYearXunKong(){return r.getXunKong(this.getYearInGanZhi())}getMonthXunKong(){return r.getXunKong(this.getMonthInGanZhi())}getDayXunKong(){return r.getXunKong(this.getDayInGanZhi())}getTimeXunKong(){return r.getXunKong(this.getTimeInGanZhi())}getYearXunKongByLiChun(){return r.getXunKong(this.getYearInGanZhiByLiChun())}getYearXunKongExact(){return r.getXunKong(this.getYearInGanZhiExact())}getMonthXunKongExact(){return r.getXunKong(this.getMonthInGanZhiExact())}getDayXunKongExact(){return r.getXunKong(this.getDayInGanZhiExact())}getDayXunKongExact2(){return r.getXunKong(this.getDayInGanZhiExact2())}toString(){return this.getYearInChinese()+"年"+this.getMonthInChinese()+"月"+this.getDayInChinese()}toFullString(){let t=this.toString();t+=" "+this.getYearInGanZhi()+"("+this.getYearShengXiao()+")年",t+=" "+this.getMonthInGanZhi()+"("+this.getMonthShengXiao()+")月",t+=" "+this.getDayInGanZhi()+"("+this.getDayShengXiao()+")日",t+=" "+this.getTimeZhi()+"("+this.getTimeShengXiao()+")时",t+=" 纳音["+this.getYearNaYin()+" "+this.getMonthNaYin()+" "+this.getDayNaYin()+" "+this.getTimeNaYin()+"]",t+=" 星期"+this.getWeekInChinese(),this.getFestivals().forEach(h=>{t+=" ("+h+")"}),this.getOtherFestivals().forEach(h=>{t+=" ("+h+")"});const l=this.getJieQi();return l.length>0&&(t+=" ["+l+"]"),t+=" "+this.getGong()+"方"+this.getShou(),t+=" 星宿["+this.getXiu()+this.getZheng()+this.getAnimal()+"]("+this.getXiuLuck()+")",t+=" 彭祖百忌["+this.getPengZuGan()+" "+this.getPengZuZhi()+"]",t+=" 喜神方位["+this.getDayPositionXi()+"]("+this.getDayPositionXiDesc()+")",t+=" 阳贵神方位["+this.getDayPositionYangGui()+"]("+this.getDayPositionYangGuiDesc()+")",t+=" 阴贵神方位["+this.getDayPositionYinGui()+"]("+this.getDayPositionYinGuiDesc()+")",t+=" 福神方位["+this.getDayPositionFu()+"]("+this.getDayPositionFuDesc()+")",t+=" 财神方位["+this.getDayPositionCai()+"]("+this.getDayPositionCaiDesc()+")",t+=" 冲["+this.getDayChongDesc()+"]",t+=" 煞["+this.getDaySha()+"]",t}getShuJiu(){const t=y0.fromYmd(this._solar.getYear(),this._solar.getMonth(),this._solar.getDay());let l=this.getJieQiSolar("DONG_ZHI"),h=y0.fromYmd(l.getYear(),l.getMonth(),l.getDay());t.isBefore(h)&&(l=this.getJieQiSolar(X.getMessage("jq.dongZhi")),h=y0.fromYmd(l.getYear(),l.getMonth(),l.getDay()));const g=y0.fromYmd(l.getYear(),l.getMonth(),l.getDay()).next(81);if(t.isBefore(h)||!t.isBefore(g))return null;const f=t.subtract(h);return new r8(r.NUMBER[Math.floor(f/9)+1]+"九",f%9+1)}getFu(){const t=y0.fromYmd(this._solar.getYear(),this._solar.getMonth(),this._solar.getDay()),l=this.getJieQiSolar(X.getMessage("jq.xiaZhi")),h=this.getJieQiSolar(X.getMessage("jq.liQiu"));let g=y0.fromYmd(l.getYear(),l.getMonth(),l.getDay()),f=6-l.getLunar().getDayGanIndex();if(f<0&&(f+=10),f+=20,g=g.next(f),t.isBefore(g))return null;let F=t.subtract(g);if(F<10)return new yi("初伏",F+1);if(g=g.next(10),F=t.subtract(g),F<10)return new yi("中伏",F+1);g=g.next(10);const A=y0.fromYmd(h.getYear(),h.getMonth(),h.getDay());if(F=t.subtract(g),A.isAfter(g)){if(F<10)return new yi("中伏",F+11);g=g.next(10),F=t.subtract(g)}return F<10?new yi("末伏",F+1):null}getLiuYao(){return r.LIU_YAO[(Math.abs(this._month)+this._day-2)%6]}getWuHou(){const t=this.getPrevJieQi(!0),l=r.find(t.getName(),r.JIE_QI);let h=Math.floor(this._solar.subtract(t.getSolar())/5);return h>2&&(h=2),r.WU_HOU[(l.index*3+h)%r.WU_HOU.length]}getHou(){const t=this.getPrevJieQi(!0),l=this._solar.subtract(t.getSolar()),h=r.HOU.length-1;let g=Math.floor(l/5);return g>h&&(g=h),t.getName()+" "+r.HOU[g]}getDayLu(){const t=r.LU[this.getDayGan()],l=r.LU[this.getDayZhi()];let h=t+"命互禄";return l&&(h+=" "+l+"命进禄"),h}getTime(){return Wu.fromYmdHms(this._year,this._month,this._day,this._hour,this._minute,this._second)}getTimes(){const t=[];t.push(Wu.fromYmdHms(this._year,this._month,this._day,0,0,0));for(let l=0;l<12;l++)t.push(Wu.fromYmdHms(this._year,this._month,this._day,(l+1)*2-1,0,0));return t}getFoto(){return D4.fromLunar(this)}getTao(){return x4.fromLunar(this)}}class $u{static fromYm(t,l){return new $u(t,l)}static fromDate(t){return $u.fromYm(t.getFullYear(),t.getMonth()+1)}constructor(t,l){this._year=t,this._month=l}getYear(){return this._year}getMonth(){return this._month}next(t){const l=t<0?-1:1;let h=Math.abs(t),g=this._year+Math.floor(h/12)*l;return h=this._month+h%12*l,h>12?(h-=12,g++):h<1&&(h+=12,g--),$u.fromYm(g,h)}getDays(){const t=[],l=y0.fromYmd(this._year,this._month,1);t.push(l);const h=T0.getDaysOfMonth(this._year,this._month);for(let g=1;g<h;g++)t.push(l.next(g));return t}getWeeks(t){const l=[];let h=Hn.fromYmd(this._year,this._month,1,t);for(;;){l.push(h),h=h.next(1,!1);const g=h.getFirstDay();if(g.getYear()>this._year||g.getMonth()>this._month)break}return l}toString(){return`${this.getYear()}-${this.getMonth()}`}toFullString(){return`${this.getYear()}年${this.getMonth()}月`}}const n2=class{static fromYmd(o,t,l){return n2.fromYmdHms(o,t,l,0,0,0)}static fromYmdHms(o,t,l,h,g,f){return new n2(o,t,l,h,g,f)}static fromDate(o){return n2.fromYmdHms(o.getFullYear(),o.getMonth()+1,o.getDate(),o.getHours(),o.getMinutes(),o.getSeconds())}static fromJulianDay(o){let t=Math.floor(o+.5),l=o+.5-t;if(t>=2299161){const x=Math.floor((t-186721625e-2)/36524.25);t+=1+x-Math.floor(x/4)}t+=1524;let h=Math.floor((t-122.1)/365.25);t-=Math.floor(365.25*h);let g=Math.floor(t/30.601);t-=Math.floor(30.601*g);let f=t;g>13?(g-=13,h-=4715):(g-=1,h-=4716),l*=24;let F=Math.floor(l);l-=F,l*=60;let A=Math.floor(l);l-=A,l*=60;let y=Math.round(l);return y>59&&(y-=60,A++),A>59&&(A-=60,F++),F>23&&(F-=24,f+=1),n2.fromYmdHms(h,g,f,F,A,y)}static fromBaZi(o,t,l,h,g=2,f=1900){g=g==1?1:2;const F=[];let A=r.index(t.substring(1),r.ZHI,-1)-2;if(A<0&&(A+=12),((r.index(o.substring(0,1),r.GAN,-1)+1)*2+A)%10!==r.index(t.substring(0,1),r.GAN,-1))return F;let y=r.getJiaZiIndex(o)-57;y<0&&(y+=60),y++,A*=2;const x=r.index(h.substring(1),r.ZHI,-1)*2;let S=[x];x==0&&g==2&&(S=[0,23]);const _=f-1,R=new Date().getFullYear();for(;y<=R;){if(y>=_){const L=q0.fromYmd(y,1,1),J=L.getJieQiList();let a0=L.getJieQiTable()[J[4+A]];if(a0.getYear()>=f){let W=r.getJiaZiIndex(l)-r.getJiaZiIndex(a0.getLunar().getDayInGanZhiExact2());W<0&&(W+=60),W>0&&(a0=a0.next(W)),S.forEach(w0=>{let c0=0,G0=0;W==0&&w0===a0.getHour()&&(c0=a0.getMinute(),G0=a0.getSecond());let Y0=n2.fromYmdHms(a0.getYear(),a0.getMonth(),a0.getDay(),w0,c0,G0);W===30&&(Y0=Y0.nextHour(-1));const E0=Y0.getLunar(),u0=g===2?E0.getDayInGanZhiExact2():E0.getDayInGanZhiExact();E0.getYearInGanZhiExact()===o&&E0.getMonthInGanZhiExact()===t&&u0===l&&E0.getTimeInGanZhi()===h&&F.push(Y0)})}}y+=60}return F}constructor(o,t,l,h,g,f){if(o===1582&&t===10&&l>4&&l<15)throw new Error(`wrong solar year ${o} month ${t} day ${l}`);if(t<1||t>12)throw new Error(`wrong month ${t}`);if(l<1||l>31)throw new Error(`wrong day ${l}`);if(h<0||h>23)throw new Error(`wrong hour ${h}`);if(g<0||g>59)throw new Error(`wrong minute ${g}`);if(f<0||f>59)throw new Error(`wrong second ${f}`);this._year=o,this._month=t,this._day=l,this._hour=h,this._minute=g,this._second=f}getYear(){return this._year}getMonth(){return this._month}getDay(){return this._day}getHour(){return this._hour}getMinute(){return this._minute}getSecond(){return this._second}getWeek(){return(Math.floor(this.getJulianDay()+.5)+7000001)%7}getWeekInChinese(){return T0.WEEK[this.getWeek()]}getSolarWeek(o){return Hn.fromYmd(this._year,this._month,this._day,o)}isLeapYear(){return T0.isLeapYear(this._year)}getFestivals(){const o=[];let t=T0.FESTIVAL[this._month+"-"+this._day];t&&o.push(t);const l=Math.ceil(this._day/7),h=this.getWeek();return t=T0.WEEK_FESTIVAL[this._month+"-"+l+"-"+h],t&&o.push(t),this._day+7>T0.getDaysOfMonth(this._year,this._month)&&(t=T0.WEEK_FESTIVAL[this._month+"-0-"+h],t&&o.push(t)),o}getOtherFestivals(){const o=[],t=T0.OTHER_FESTIVAL[this._month+"-"+this._day];return t&&t.forEach(l=>{o.push(l)}),o}getXingzuo(){return this.getXingZuo()}getXingZuo(){let o=11;const t=this._month*100+this._day;return t>=321&&t<=419?o=0:t>=420&&t<=520?o=1:t>=521&&t<=621?o=2:t>=622&&t<=722?o=3:t>=723&&t<=822?o=4:t>=823&&t<=922?o=5:t>=923&&t<=1023?o=6:t>=1024&&t<=1122?o=7:t>=1123&&t<=1221?o=8:t>=1222||t<=119?o=9:t<=218&&(o=10),T0.XINGZUO[o]}getSalaryRate(){if(this._month===1&&this._day===1||this._month===5&&this._day===1||this._month===10&&this._day>=1&&this._day<=3)return 3;const o=this.getLunar();if(o.getMonth()===1&&o.getDay()>=1&&o.getDay()<=3||o.getMonth()===5&&o.getDay()===5||o.getMonth()===8&&o.getDay()===15||o.getJieQi()==="清明")return 3;const t=_2.getHoliday(this._year,this._month,this._day);if(t){if(!t.isWork())return 2}else{const l=this.getWeek();if(l===6||l===0)return 2}return 1}toYmd(){let o=this._year+"";for(;o.length<4;)o="0"+o;return[o,(this._month<10?"0":"")+this._month,(this._day<10?"0":"")+this._day].join("-")}toYmdHms(){return this.toYmd()+" "+[(this._hour<10?"0":"")+this._hour,(this._minute<10?"0":"")+this._minute,(this._second<10?"0":"")+this._second].join(":")}toString(){return this.toYmd()}toFullString(){let o=this.toYmdHms();return this.isLeapYear()&&(o+=" 闰年"),o+=" 星期"+this.getWeekInChinese(),this.getFestivals().forEach(l=>{o+=" ("+l+")"}),o+=" "+this.getXingZuo()+"座",o}nextYear(o){const t=this._year+o,l=this._month;let h=this._day;return t===1582&&l===10?h>4&&h<15&&(h+=10):l===2&&h>28&&(T0.isLeapYear(t)||(h=28)),n2.fromYmdHms(t,l,h,this._hour,this._minute,this._second)}nextMonth(o){const t=$u.fromYm(this._year,this._month).next(o),l=t.getYear(),h=t.getMonth();let g=this._day;if(l===1582&&h===10)g>4&&g<15&&(g+=10);else{const f=T0.getDaysOfMonth(l,h);g>f&&(g=f)}return n2.fromYmdHms(l,h,g,this._hour,this._minute,this._second)}nextDay(o){let t=this._year,l=this._month,h=this._day;if(t===1582&&l===10&&h>4&&(h-=10),o>0){h+=o;let g=T0.getDaysOfMonth(t,l);for(;h>g;)h-=g,l++,l>12&&(l=1,t++),g=T0.getDaysOfMonth(t,l)}else if(o<0){for(;h+o<=0;)l--,l<1&&(l=12,t--),h+=T0.getDaysOfMonth(t,l);h+=o}return t===1582&&l===10&&h>4&&(h+=10),n2.fromYmdHms(t,l,h,this._hour,this._minute,this._second)}next(o,t=!1){if(t){let l=n2.fromYmdHms(this._year,this._month,this._day,this._hour,this._minute,this._second);if(o!==0){let h=Math.abs(o);const g=o<1?-1:1;for(;h>0;){l=l.next(g);let f=!0;const F=_2.getHoliday(l.getYear(),l.getMonth(),l.getDay());if(F)f=F.isWork();else{const A=l.getWeek();(A===0||A===6)&&(f=!1)}f&&(h-=1)}}return l}else return this.nextDay(o)}nextHour(o){const t=this._hour+o,l=t<0?-1:1;let h=Math.abs(t),g=Math.floor(h/24)*l;h=h%24*l,h<0&&(h+=24,g--);const f=this.next(g);return n2.fromYmdHms(f.getYear(),f.getMonth(),f.getDay(),h,f.getMinute(),f.getSecond())}getLunar(){return q0.fromSolar(this)}getJulianDay(){let o=this._year,t=this._month;const l=this._day+((this._second/60+this._minute)/60+this._hour)/24;let h=0,g=!1;return o*372+t*31+Math.floor(l)>=588829&&(g=!0),t<=2&&(t+=12,o--),g&&(h=Math.floor(o/100),h=2-h+Math.floor(h/4)),Math.floor(365.25*(o+4716))+Math.floor(30.6001*(t+1))+l+h-1524.5}isBefore(o){return this._year>o.getYear()?!1:this._year<o.getYear()?!0:this._month>o.getMonth()?!1:this._month<o.getMonth()?!0:this._day>o.getDay()?!1:this._day<o.getDay()?!0:this._hour>o.getHour()?!1:this._hour<o.getHour()?!0:this._minute>o.getMinute()?!1:this._minute<o.getMinute()?!0:this._second<o.getSecond()}isAfter(o){return this._year>o.getYear()?!0:this._year<o.getYear()?!1:this._month>o.getMonth()?!0:this._month<o.getMonth()?!1:this._day>o.getDay()?!0:this._day<o.getDay()?!1:this._hour>o.getHour()?!0:this._hour<o.getHour()?!1:this._minute>o.getMinute()?!0:this._minute<o.getMinute()?!1:this._second>o.getSecond()}subtract(o){return T0.getDaysBetween(o.getYear(),o.getMonth(),o.getDay(),this._year,this._month,this._day)}subtractMinute(o){let t=this.subtract(o);const l=this._hour*60+this._minute,h=o.getHour()*60+o.getMinute();let g=l-h;return g<0&&(g+=1440,t--),g+=t*1440,g}};let y0=n2;y0.J2000=2451545;X.init();const E8=({method:o,onSubmit:t,onBack:l})=>{const[h,g]=U0.useState(new Date().toISOString().split("T")[0]),[f,F]=U0.useState(1),[A,y]=U0.useState(""),[x,S]=U0.useState(""),[_,R]=U0.useState(""),[L,J]=U0.useState(""),[k,a0]=U0.useState(""),[W,w0]=U0.useState(""),[c0,G0]=U0.useState(1),[Y0,E0]=U0.useState(3),[u0,C0]=U0.useState(1),[d0,J0]=U0.useState(8),[k0,M0]=U0.useState(1);U0.useEffect(()=>{if(o===tn.TIME&&h){const M=new Date(h),I=y0.fromDate(M).getLunar(),q=I.getYearInGanZhi(),Q=I.getMonthInChinese(),l0=I.getDayInChinese();y(`农历：${q}年 ${Q}月 ${l0}`)}},[h,o]);const Q0=()=>{const M=new Date(h),I=y0.fromDate(M).getLunar(),q=["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"],Q=I.getYearShengXiao(),l0=q.indexOf(Q)+1,r0=I.getMonth(),B0=I.getDay(),cn=l0+r0+B0,R0=l0+r0+B0+f;t(cn,R0,R0,M)},S0=()=>{const M=parseInt(x)||0,B=parseInt(_)||0;M===0||B===0||t(M,B,M+B+f)},X0=()=>{const M=parseInt(L)||1,B=parseInt(k)||1,I=M+B;t(M,B,I)},p=()=>{const M=parseInt(W)||0;M!==0&&t(M,f,M+f)},U=()=>{t(c0,Y0,c0+Y0+f)},V=()=>{t(u0,d0,k0)},o0=D.jsxs("div",{className:"mb-4",children:[D.jsx("label",{className:"block text-ink font-serif mb-2",children:"当前时辰"}),D.jsx("select",{value:f,onChange:M=>F(parseInt(M.target.value)),className:"w-full p-2 border border-stone-400 bg-paper rounded-sm focus:border-c-red outline-none",children:u8.map(M=>D.jsxs("option",{value:M.number,children:[M.name," - ",M.zodiac]},M.number))})]});return D.jsxs("div",{className:"max-w-md mx-auto p-6 bg-white shadow-lg rounded border border-stone-200",children:[D.jsxs("h2",{className:"text-2xl font-cursive text-center text-c-red mb-6",children:[o===tn.TIME&&"时间起卦",o===tn.NUMBERS&&"报数起卦",o===tn.WORDS&&"文字起卦",o===tn.OBJECTS&&"物数起卦",o===tn.DIRECTION&&"物象方位",o===tn.CUSTOM&&"自定义排盘"]}),o===tn.TIME&&D.jsxs("div",{className:"space-y-4",children:[D.jsxs("div",{children:[D.jsx("label",{className:"block text-ink font-serif mb-2",children:"公历日期"}),D.jsx("input",{type:"date",value:h,onChange:M=>g(M.target.value),className:"w-full p-2 border border-stone-400 bg-paper rounded-sm focus:border-c-red outline-none"}),A&&D.jsx("div",{className:"mt-2 p-2 bg-amber-50 border border-amber-200 rounded text-sm text-stone-700",children:A})]}),o0,D.jsx("button",{onClick:Q0,className:"w-full btn-primary",children:"起卦"})]}),o===tn.NUMBERS&&D.jsxs("div",{className:"space-y-4",children:[D.jsxs("div",{children:[D.jsx("label",{className:"block text-ink font-serif mb-2",children:"第一个数字 (上卦)"}),D.jsx("input",{type:"number",value:x,onChange:M=>S(M.target.value),className:"input-field",placeholder:"1-999"})]}),D.jsxs("div",{children:[D.jsx("label",{className:"block text-ink font-serif mb-2",children:"第二个数字 (下卦)"}),D.jsx("input",{type:"number",value:_,onChange:M=>R(M.target.value),className:"input-field",placeholder:"1-999"})]}),o0,D.jsx("button",{onClick:S0,className:"w-full btn-primary",children:"起卦"})]}),o===tn.WORDS&&D.jsxs("div",{className:"space-y-4",children:[D.jsx("div",{className:"p-4 bg-stone-100 text-xs text-stone-500 mb-4 rounded text-sm",children:"请根据字数划分上卦和下卦。若字数相等就平分为上卦与下卦；若字数不等，则少的一半为上卦（取“天”之清轻之义），多的一半为下卦（取“地”之重浊之义）。"}),D.jsx("div",{className:"p-4 bg-stone-50 text-xs text-stone-600 mb-4 rounded text-sm",children:"提示：当 1 < 字数 ≤ 3 时：用笔画数；当 4 ≤ 字数 ≤ 10 时：用声调计数；当 字数 > 10 时：直接用字数作为数源。"}),D.jsxs("div",{className:"space-y-4",children:[D.jsxs("div",{children:[D.jsx("label",{className:"block text-ink font-serif mb-2",children:"上卦数值"}),D.jsx("input",{type:"number",value:L,onChange:M=>J(M.target.value),className:"input-field",placeholder:"笔画总和/声调总和/字数总和"})]}),D.jsxs("div",{children:[D.jsx("label",{className:"block text-ink font-serif mb-2",children:"下卦数值"}),D.jsx("input",{type:"number",value:k,onChange:M=>a0(M.target.value),className:"input-field",placeholder:"笔画总和/声调总和/字数总和"})]})]}),D.jsx("button",{onClick:X0,className:"w-full btn-primary",children:"起卦"})]}),o===tn.OBJECTS&&D.jsxs("div",{className:"space-y-4",children:[D.jsxs("div",{children:[D.jsx("label",{className:"block text-ink font-serif mb-2",children:"物品数量"}),D.jsx("input",{type:"number",value:W,onChange:M=>w0(M.target.value),className:"input-field",placeholder:"例如见到5只鸟"})]}),o0,D.jsx("button",{onClick:p,className:"w-full btn-primary",children:"起卦"})]}),o===tn.DIRECTION&&D.jsxs("div",{className:"space-y-4",children:[D.jsxs("div",{children:[D.jsx("label",{className:"block text-ink font-serif mb-2",children:"所见物象 (取象归类)"}),D.jsx("select",{value:c0,onChange:M=>G0(parseInt(M.target.value)),className:"input-field",children:P2.filter(M=>M.id!==0).map(M=>D.jsxs("option",{value:M.id,children:[M.name," - ",M.nature," (属",M.element,")"]},M.id))})]}),D.jsxs("div",{children:[D.jsx("label",{className:"block text-ink font-serif mb-2",children:"所在方位"}),D.jsx("select",{value:Y0,onChange:M=>E0(parseInt(M.target.value)),className:"input-field",children:e8.map(M=>{const B=P2.find(q=>q.id===M.guaId),I=B?`${B.name}-${M.name}`:M.name;return D.jsx("option",{value:M.guaId,children:I},M.name)})})]}),o0,D.jsx("button",{onClick:U,className:"w-full btn-primary",children:"起卦"})]}),o===tn.CUSTOM&&D.jsxs("div",{className:"space-y-4",children:[D.jsxs("div",{children:[D.jsx("label",{className:"block text-ink font-serif mb-2",children:"上卦"}),D.jsx("select",{value:u0,onChange:M=>C0(parseInt(M.target.value)),className:"input-field",children:P2.filter(M=>M.id!==0).map(M=>D.jsxs("option",{value:M.id,children:[M.name," - ",M.nature]},M.id))})]}),D.jsxs("div",{children:[D.jsx("label",{className:"block text-ink font-serif mb-2",children:"下卦"}),D.jsx("select",{value:d0,onChange:M=>J0(parseInt(M.target.value)),className:"input-field",children:P2.filter(M=>M.id!==0).map(M=>D.jsxs("option",{value:M.id,children:[M.name," - ",M.nature]},M.id))})]}),D.jsxs("div",{children:[D.jsx("label",{className:"block text-ink font-serif mb-2",children:"动爻"}),D.jsx("select",{value:k0,onChange:M=>M0(parseInt(M.target.value)),className:"input-field",children:[1,2,3,4,5,6].map(M=>D.jsxs("option",{value:M,children:[M,"爻"]},M))})]}),D.jsx("button",{onClick:V,className:"w-full btn-primary",children:"排盘"})]}),D.jsx("button",{onClick:l,className:"w-full mt-4 text-stone-500 underline hover:text-c-brown",children:"返回"}),D.jsx("style",{children:`
        .input-field {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #a8a29e;
          background-color: #f7f5f0;
          border-radius: 0.125rem;
          outline: none;
        }
        .input-field:focus {
          border-color: #8b0000;
        }
        .btn-primary {
          background-color: #8b0000;
          color: #f7f5f0;
          padding: 0.75rem;
          font-family: "Noto Serif SC", serif;
          font-weight: bold;
          border-radius: 0.25rem;
          transition: background-color 0.2s;
        }
        .btn-primary:hover {
          background-color: #5d0000;
        }
      `})]})},E4=({isYang:o,colorClass:t,isMoving:l})=>D.jsxs("div",{className:`flex gap-2 items-center justify-center h-6 my-1 w-24 ${l?"animate-pulse":""}`,children:[o?D.jsx("div",{className:`w-full h-4 ${t} bg-current rounded-sm`}):D.jsxs(D.Fragment,{children:[D.jsx("div",{className:`w-[45%] h-4 ${t} bg-current rounded-sm`}),D.jsx("div",{className:"w-[10%]"}),D.jsx("div",{className:`w-[45%] h-4 ${t} bg-current rounded-sm`})]}),l&&D.jsx("span",{className:"absolute right-0 text-red-500 text-xs font-bold",children:"○"})]}),Q5=({upper:o,lower:t,name:l,title:h,movingYaoIndex:g,tiYongLabel:f})=>D.jsxs("div",{className:"flex items-start gap-2",children:[D.jsx("div",{className:"flex flex-col justify-center pt-12",style:{height:"280px",minWidth:"20px"},children:f&&D.jsxs(D.Fragment,{children:[D.jsxs("div",{className:"h-1/2 flex items-center justify-end",style:{height:"90px"},children:[f==="upper"&&D.jsx("span",{className:"text-base font-serif font-bold",style:{color:"#8B0000"},children:"体"}),f==="lower"&&D.jsx("span",{className:"text-base font-serif font-bold",style:{color:"#8B0000"},children:"用"})]}),D.jsxs("div",{className:"h-1/2 flex items-center justify-end",style:{height:"90px"},children:[f==="upper"&&D.jsx("span",{className:"text-base font-serif font-bold",style:{color:"#8B0000"},children:"用"}),f==="lower"&&D.jsx("span",{className:"text-base font-serif font-bold",style:{color:"#8B0000"},children:"体"})]})]})}),D.jsxs("div",{className:"flex flex-col items-center p-4 bg-white/80 border border-stone-300 rounded-sm shadow-sm",children:[D.jsx("h3",{className:"text-lg font-serif font-bold text-c-brown mb-2",children:h}),D.jsxs("div",{className:"flex flex-col relative",children:[D.jsx("div",{className:"flex flex-col-reverse border-b border-dotted border-stone-300 pb-1 mb-1",title:`${o.name} (${o.element})`,children:[0,1,2].map(F=>D.jsx(E4,{isYang:o.lines[F]===1,colorClass:xi[o.element],isMoving:g===F+4},`upper-${F}`))}),D.jsx("div",{className:"flex flex-col-reverse pt-1",title:`${t.name} (${t.element})`,children:[0,1,2].map(F=>D.jsx(E4,{isYang:t.lines[F]===1,colorClass:xi[t.element],isMoving:g===F+1},`lower-${F}`))})]}),D.jsxs("div",{className:"mt-3 text-center",children:[D.jsx("div",{className:"text-2xl font-cursive text-ink",children:l}),D.jsxs("div",{className:"text-xs text-stone-500 mt-1 flex justify-center gap-2",children:[D.jsxs("span",{className:xi[o.element],children:["上",o.name,o.element]}),D.jsx("span",{className:"text-stone-300",children:"|"}),D.jsxs("span",{className:xi[t.element],children:["下",t.name,t.element]})]})]})]})]}),f8=[{id:"qian",name:"乾卦",description:`一 金
乾为天 天风姤 天山遁 天地否
风地观 山地剥 火地晋 火天大有
天时：天、冰、雹、霰。
地理：西北方、京都、大郡、形胜之地、高亢之所。
人物：君、父、大人、老人、长者、官宦、名人、公门人。
静物：金玉、宝珠、圆物、水果、刚物、冠、镜。
身体：首、骨、肺。
动物：马、天鹅、狮、象。
人事：刚健武勇、果决、多动少静、高上下屈。
时序：秋、九十月之交、戌亥年月日时、一四九年月日时。
屋舍：公廨、楼台、高堂、大厦、驿舍、西北向之居。
家宅：秋占宅兴隆、夏占有祸、冬占冷落、春占吉利。
婚姻：贵官之眷、有声名之家、秋占宜成、冬夏占不利。
饮食：马肉、珍味、多骨、肝肺、干肉、水果、诸物之首、圆物、辛辣之物。
生产：易生、秋占生贵子，夏占有损，坐宜向西北。
求名：有名、宜随朝内任、刑官、武职、掌权、天使、驿官、宜西北方之任。
谋旺：有成、利公门、宜动中有财、夏占不成、冬占多谋少遂。
交易：宜金、玉珍宝珠贵货、易成、夏占不利。
求利：有财、金、玉之利、公门中得财、秋占大利、夏占损财、冬占无财。
出行：利于出行、宜入京师、利西北之行、夏占不利。
谒见：利见大人、有德行之人、宜见官贵、可见。
疾病：头面之疾、肺疾、筋骨疾、上焦疾、夏占不安。
官讼：健讼、有贵人助、秋占得胜、夏占失理。
坟墓：宜向西北、宜乾山气脉、宜天穴、宜高、秋占出贵、夏占大凶。
方道：西北。
五色：大赤色、玄色。
姓字：带金旁者、商音、行位一四九。
数目：一、四、九。
五味：辛、辣。`},{id:"dui",name:"兑卦",description:`二 金
兑为金 泽水困 泽地萃 泽山咸
水山蹇 地山谦 雷山小过 雷泽归妹
天时：雨泽、新月、星。
地理：泽、水际、缺池、废井、山崩破裂之地、其地为刚卤。
人物：少女、妾、歌妓、伶人、译人、巫师。
静物：金刀、金类、乐器、废物、缺器。
身体：舌、口喉、肺、痰、涎。
动物：羊、泽中之物。
人事：喜悦、口、谗毁、谤说、饮食。
时序：秋八月、酉年月日时、二四九月日。
屋舍：西向之居、近泽之居、败墙壁宅、户有损。
家宅：不安、防口舌、秋占喜悦、夏占家宅有祸。
饮食：羊肉、泽中之物、宿味、辛辣之味。
婚姻：不成、秋占可成、有喜、主成婚之吉、利婚少女、夏占不利。
生产：不利、恐有损胎或则生女、夏占不利、宜坐向西。
求名：难成、因名有损、利西之任、宜刑官、武职、伶官、译官。
求利：无利、有损、财利、主口舌、秋占有财喜、夏占破财。
出行：不宜远行、防口舌、或损失、宜西行、秋占宜行有利。
交易：难利、防口舌、有争竞、夏占不利、秋占有交易之财。
谋旺：难成、谋中有损、秋占有喜、夏占不遂。
谒见：利行西方、见有咒诅。
疾病：口舌、咽喉之疾、气逆喘疾、饮食不飧。
坟墓：宜西向、防穴中有水、近泽之墓、夏占不宜、或葬废穴。
官讼：争讼不已、曲直未决、因讼有损、防刑、秋占为体得理胜讼。
姓字：商音、带口带金字旁姓氏、行位四二九。
数目：四、二、九。
方道：西方。
五色：白。
五味：辛、辣。`},{id:"li",name:"离卦",description:`三 火
离为火 火山旅 火风鼎 火水末济
山水蒙 风水涣 天水讼 天火同人
天时：日、电、虹、霓、霞。
地理：南方、干亢之地、窖灶、炉冶之所、刚燥厥地、其地面陽。
人物：中女、文人、大腹、目疾人、甲胄之士。
静物：火、书、文、甲胄、干戈、槁衣、干燥之物、赤色之物。
身体：目、心、上焦。
动物：雉、龟、鳖、蟹、螺、蚌。
人事：文画之所、聪明才学、相见虚心、书事。
时序：夏五月、午火年月日时、三二七日。
屋舍：南舍之居、陽明之宅、明窗、虚室。
家宅：安稳、平善、冬占不安、克体主火灾。
饮食：雉肉、煎炒、烧炙之物、干脯之体、热肉。
婚姻：不成、利中女之婚、夏占可成、冬占不利。
生产：易生、产中女、冬占有损、坐宜向南。
求名：有名、宜南方之职、文官之任、宜炉冶亢场之职。
求利：有财宜南方求、有文书之财、冬占有失。
谋旺：可以谋旺、宜文书之事。
交易：可成、宜有文书之交易。
出行：可行、宜向南方、就文书之行、冬占不宜行、不宜行舟。
谒见：可见南方人、冬占不顺、秋见文书考案之士。
官讼：易散、文书动、辞讼明辨。
疾病：目疾、心疾、上焦热病、夏占伏暑、时疫。
坟墓：南向之幕、无树木之所、陽穴。夏占出文人、冬占不利。
姓字：徵音、立人旁士姓氏、行位三二七。
数目：三、二、七。
方道：南。
五色：赤、紫、红。
五味：苦。`},{id:"zhen",name:"震卦",description:`四 木
震为雷 雷地豫 雷水解 雷风恒
地风升 水风井 泽风大过 泽雷随
天时：雷。
地理：东方、树木、闹市、大途、竹林、草木茂盛之所。
人物：长男。
静物：木竹、萑苇、乐器（属竹木者）、花草繁鲜之物。
身体：足、肝、发、声音。
动物：龙、蛇。
人事：起动、怒、虚惊、鼓动噪、多动少静。
时序：春三月、卯年月日时、四三八月日。
屋舍：东向之居、山林之处、楼阁。
家宅：宅中不时有虚惊、春冬吉、秋占不利。
饮食：蹄、肉、山林野味、鲜肉、果酸味、菜蔬。
婚姻：可、有成、声名之家、得长男之婚、秋占不宜婚。
求利：山林竹木之财、动处求财、或山林、竹木茶货之利。
求名：有名、宜东方之任、施号发令之职、掌刑狱之官、竹茶木税课之任、或闹市司货之职。
生产：虚惊、胎动不安、头胎必生男、坐宜东向、秋占必有损。
疾病：足疾、肝经之疾、惊怖不安。
谋旺：可旺、可求、宜动中谋、秋占不遂。
交易：利于成交、秋占难成、动而可成、山林、木竹茶货之利。
官讼：健讼、有虚惊、行移取甚反复。
谒见：可见、在山林之人、利见宜有声名之人。
出行：宜行、利于东方、利山林之人、秋占不宜行、但恐虚惊。
坟墓：利于东向、山林中穴、秋不利。
姓字：角音、带木姓人、行位四八三。
数目：四、八、三。
方道：东。
五味：甘、酸味。
五色：青、绿、碧`},{id:"xun",name:"巽卦",description:`五 木
巽为风 风天小畜 风火家人 风雷益
天雷无妄 火雷噬嗑 山雷颐 山风蛊
天时：风。
地理：东南方之地、草木茂秀之所、花果菜园。
人物：长女、秀士、寡妇之人、山林仙道之人。
静物：木香、绳、直物、长物、竹木、工巧之器。
身体：肱、股、气、风疾。
动物：鸡、百禽、山林中之禽、虫。
人事：柔和、不定、鼓舞、利市三倍、进退不果。
时序：春夏之交、三五八之时月日、辰巳月日时。
屋舍：东南向之居、寺观楼台、山林之居。
家宅：安稳利市、春占吉、秋占不安。
饮食：鸡肉、山林之味、蔬果酸味。
婚姻：可成、宜长女之婚、秋占不利。
生产：易生、头胎产女、秋占损胎、宜向东南坐。
求名：有名、宜文职有风宪之力、宜为风宪、宜茶果竹木税货之职、宜东南之任。
求利：有利三倍、宜山林之利、秋占不利、竹货木货之利。
交易：可成、进退不一、利山林交易、山林木茶之利。
谋旺：可谋旺、有财可成、秋占多谋少遂。
出行：可行、有出入之利、宜向东南行、秋占不利。
谒见：可见、利见山林之人、利见文人秀士。
疾病：股肱之疾、风疾、肠疾、中风、寒邪、气疾。
姓字：角音、草木旁姓氏、行位五三八。
官讼：宜和、恐遭风宪之责。
坟墓：宜东南方向、山林之穴、多树木、秋占不利。
数目：五、三、八。
方道：东南。
五味：酸味。
五色：青、绿、碧、洁白。`},{id:"kan",name:"坎卦",description:`六 水
坎为水 水泽节 水雷屯 水火既济
泽火革 雷火丰 地火明夷 地水师
天时：月、雨、雪、霜、露。
地理：北方、江湖、溪涧、泉井、卑湿之地（沟渎、池沼、凡有水处）。
人物：中男、江湖之人、舟人、资贼。
静物：水带子、带核之物、弓轮、矫揉之物、酒器、水具。
身体：耳、血、肾。
动物：猪、鱼、水中物、水鸟、鼠、四足动物
人事：险陷卑下、外示以柔、内序以利、漂泊不成、随波逐流。
时序：冬十一月、子年月日时、一六月日。
屋舍：向北之居、近水、水阁、江楼、花酒长器、宅中混地之处。
饮食：豕肉、酒、冷味、海味、汤、酸味、宿食、鱼、带血、掩藏、有带核之物、水中之物、多骨之物。
家宅：不安、暗昧、防盗。
婚姻：利中男之婚、宜北方之婚、辰戌丑未月婚不可。
生产：难产有险、宜次胎、中男、辰戌丑未月有损、宜北向。
求名：艰难、恐有灾险、宜北方之任、鱼盐河泊之职。
求利：有财失、宜水边财、恐有失陷、宜鱼盐酒货之利、防遗失、防盗。
交易：不利成交、恐防失陷、宜水边交易、宜鱼盐货之交易、或点水人之交易。
谋旺：不宜谋旺、不能成就、秋冬占可谋旺。
出行：不宜远行、宜涉舟、宜北方之行、防盗、恐遇险陷溺之事。
谒见：难见、宜见江湖之人、或有水旁姓氏之人。
疾病：耳痛、心疾、感寒、肾疾、胃冷、水泻、痼冷之病、血病。
官讼：不利、有陰险、有失、因讼、失陷。
坟墓：宜北向之穴、近水傍之墓、不利葬。
姓字：羽音、点水旁之姓氏、行位一六。
数目：一、六。
方道：北方。
五味：咸、酸。
五色：黑。`},{id:"gen",name:"艮卦",description:`七 土
艮为山 山火贲 山天大畜 山泽损
火泽睽 天泽履 风泽中孚 风山渐
天时：云、雾、山岚。
地理：山径路、近山城、丘陵、坟墓、东北方。
人物：少男、闲人、山中人。
静物：土石、瓜果、黄物、土中之物。
身体：手指、骨、鼻、背。
动物：虎、狗、鼠、百兽、黔啄之物。
人事：阻隔、守静、进退不决、反背、止住、不见。
时序：冬春之月、十二月丑寅年月日时、七五十数月日、土年月日时。
家宅：安稳、诸事有阻、家人不睦、春占不安。
屋舍：东北方之居、山居近石、近路之宅。
饮食：土中物味、诸兽之肉、墓畔竹笋之属、野味。
婚姻：阻隔难成、成亦迟、利少男之婚、春占不利、宜对乡里婚。
求名：阻隔无名、宜东北方之任、宜土官山城之职。
求利：求财阻隔、宜山林中取财、春占不利、有损失。
生产：难生、有险阻之厄、宜向东北、春占有损。
交易：难成、有山林田土之交易、春占有失。
谋旺：阻隔难成、进退不决。
出行：不宜远行、有阻、宜近陆行。
谒见：不可见、有阻、宜见山林之人。
疾病：手指之疾、脾胃之疾。
官讼：贵人阻滞、官讼未解、牵连不决。
坟墓：东北之穴、山中之穴、春占不利、近路旁有石。
数目：五、七、十。
方道：东北方。
五色：黄。
五味：甘。`},{id:"kun",name:"坤卦",description:`八 土
坤为地 地雷复 地泽临 地天泰
雷天大壮 泽天决 水天需 水地比
天时：云陰、雾气。
地理：田野、乡里、平地、西南方。
人物：老母、后母、农夫、乡人、众人、大腹人。
静物：方物、柔物、布帛、丝绵、五谷、舆釜、瓦器。
身体：腹、脾、胃、肉。
动物：牛、百兽、牝马。
人事：吝啬、柔顺、懦弱、众多。
时序：辰戌丑未月、未申年月日时、八五十月日。
屋舍：西南向、村居、田舍、矮屋、土阶、仓库。
家宅：安稳、多陰气、春占宅舍不安。
饮食：牛肉、土中之物、甘味、野味、五谷之味、芋笋之物、腹脏之物。
婚姻：利于婚姻、宜税产之家、乡村之家、或寡妇之家、春占不利。
生产：易产、春占难产、有损、或不利于母、坐宜西南方。
求名：有名、宜西南方或教官、农官守土之职、春占虚名。
交易：宜利交易、宜田土交易、宜五谷、利贱货、重物、布帛、静中有财、春占不利。
求利：有利、宜土中之利、贱货重物之利、静中得财、春占无财、多中取利。
谋旺：利求谋、乡里求谋、静中求谋、春占少遂、或谋于妇人。
出行：可行、宜西南行、宜往乡里行、宜陆行、春占不宜行。
谒见：可见、利见乡人、宜见亲朋或陰人、春不宜见。
疾病：腹疾、脾胃之疾、饮食停伤、谷食不化。
官讼：理顺、得众情、讼当解散。
坟墓：宜向西南之穴、平陽之地、近田野、宜低葬、春不可葬。
姓字：宫音、带土姓人、行位八五十。
数目：八、五、十。
方道：西南。
五味：甘。
五色：黄、黑。`}],F8=({result:o})=>{const t=o?new Set([o.benGua.upper.name,o.benGua.lower.name,o.huGua.upper.name,o.huGua.lower.name,o.bianGua.upper.name,o.bianGua.lower.name]):new Set,l=A=>o&&t.has(A.replace("卦","")),[h,g]=U0.useState(null),f=A=>{g(h===A?null:A)},F=A=>A.split(`
`).map((x,S)=>{const _=x.indexOf("：");if(_>0){const R=x.substring(0,_),L=x.substring(_);return D.jsxs("div",{children:[D.jsx("span",{className:"font-bold text-c-brown",children:R}),D.jsx("span",{children:L})]},S)}return D.jsx("div",{children:x},S)});return D.jsx("div",{className:"p-3 mb-4 animate-fade-in",style:{fontSize:"0.8rem",maxWidth:"700px"},children:D.jsx("div",{className:"space-y-2",children:f8.map(A=>{const y=l(A.name),x=h===A.id;return D.jsxs("div",{className:`transition-all duration-300 ${x?"border-c-red":""}`,children:[D.jsxs("button",{onClick:()=>f(A.id),className:`w-full text-left px-2 py-2 flex justify-between items-center ${y?"bg-stone-50":"bg-transparent"} hover:bg-stone-100 transition-colors`,children:[D.jsx("div",{className:"flex items-center",children:D.jsx("span",{className:`font-serif font-bold ${y?"text-c-red":"text-c-brown"}`,children:A.name})}),D.jsx("span",{className:`transform transition-transform duration-300 text-stone-400 ${x?"rotate-180":""}`,children:"▼"})]}),D.jsx("div",{className:`overflow-hidden transition-all duration-300 ease-in-out px-2 ${x?"max-h-[600px] opacity-100 py-2":"max-h-0 opacity-0 py-0"}`,children:D.jsx("div",{className:"text-stone-600 leading-relaxed font-serif whitespace-pre-wrap max-h-[300px] overflow-y-auto",style:{scrollbarWidth:"thin",scrollbarColor:"#8B4513 #F5F5DC"},children:F(A.description||"暂无内容")})})]},A.id)})})})},C8=({benGuaName:o,bianGuaName:t,movingYao:l,result:h})=>{const[g,f]=U0.useState("gua"),[F,A]=U0.useState(!1),[y,x]=U0.useState(!1),S=U0.useRef(null),_=U0.useRef(null),R=g4(o),L=c4(o),J=g4(t),k=c4(t),a0=i8(o,l),W=()=>{F&&S.current&&(S.current.scrollTop=0),A(!F)},w0=()=>{y&&_.current&&(_.current.scrollTop=0),x(!y)},c0=E0=>{let u0=E0;return u0=u0.replace(/\n\s*\n\s*\n/g,`

`),u0.split(`
`).map((d0,J0)=>{const k0=[{regex:/^(【白话文解释】)/,name:"白话文解释"},{regex:/^(【北宋易学家邵雍解】)/,name:"北宋易学家邵雍解"},{regex:/^(《[^》]+》说)/,name:"书名号说"},{regex:/^(《[^》]+》解)/,name:"书名号解"},{regex:/^(《[^》]+》)/,name:"书名号"},{regex:/^(台湾国学大儒傅佩荣解)/,name:"傅佩荣解"},{regex:/^(北宋易学家邵雍解)/,name:"邵雍解"},{regex:/^(传统解卦)/,name:"传统解卦"},{regex:/^(台湾张铭仁解卦)/,name:"张铭仁解卦"},{regex:/^(邵雍河洛理数解卦)/,name:"邵雍河洛"},{regex:/^(傅佩荣解卦手册)/,name:"傅佩荣手册"},{regex:/^(白话文解释)/,name:"白话文"},{regex:/^(大象)[:：]/,name:"大象"},{regex:/^(运势)[:：]/,name:"运势"},{regex:/^(事业)[:：]/,name:"事业"},{regex:/^(经商)[:：]/,name:"经商"},{regex:/^(求名)[:：]/,name:"求名"},{regex:/^(婚恋)[:：]/,name:"婚恋"},{regex:/^(决策)[:：]/,name:"决策"},{regex:/^(解释)[:：]/,name:"解释"},{regex:/^(特性)[:：]/,name:"特性"},{regex:/^(家运)[:：]/,name:"家运"},{regex:/^(疾病)[:：]/,name:"疾病"},{regex:/^(胎孕)[:：]/,name:"胎孕"},{regex:/^(子女)[:：]/,name:"子女"},{regex:/^(周转)[:：]/,name:"周转"},{regex:/^(买卖)[:：]/,name:"买卖"},{regex:/^(等人)[:：]/,name:"等人"},{regex:/^(寻人)[:：]/,name:"寻人"},{regex:/^(失物)[:：]/,name:"失物"},{regex:/^(外出)[:：]/,name:"外出"},{regex:/^(考试)[:：]/,name:"考试"},{regex:/^(诉讼)[:：]/,name:"诉讼"},{regex:/^(求事)[:：]/,name:"求事"},{regex:/^(改行)[:：]/,name:"改行"},{regex:/^(开业)[:：]/,name:"开业"}];for(const Q0 of k0){const S0=d0.match(Q0.regex);if(S0){const X0=S0[1],p=d0.substring(X0.length);return D.jsxs("div",{className:"mt-3",children:[D.jsx("span",{className:"font-bold text-c-brown",children:X0}),p]},J0)}}const M0=d0.match(/^([^：:]+卦)[:：](.*)/);if(M0){const Q0=M0[1],S0=M0[2];return D.jsxs("div",{children:[D.jsxs("span",{className:"font-bold text-c-brown",children:[Q0,"："]}),S0]},J0)}return D.jsx("div",{children:d0||" "},J0)})},G0=E0=>{const u0=E0.split(`
`);let C0=!1;return u0.map((d0,J0)=>{const k0=[{regex:/^(【白话文解释】)/,name:"白话文解释",isShaoYong:!1},{regex:/^(【北宋易学家邵雍解】)/,name:"北宋易学家邵雍解",isShaoYong:!0},{regex:/^(《[^》]+》说)/,name:"书名号说",isShaoYong:!1},{regex:/^(《[^》]+》解)/,name:"书名号解",isShaoYong:!1},{regex:/^(《[^》]+》)/,name:"书名号",isShaoYong:!1},{regex:/^(台湾国学大儒傅佩荣解)/,name:"傅佩荣解",isShaoYong:!1},{regex:/^(北宋易学家邵雍解)/,name:"邵雍解",isShaoYong:!0},{regex:/^(传统解卦)/,name:"传统解卦",isShaoYong:!1},{regex:/^(台湾张铭仁解卦)/,name:"张铭仁解卦",isShaoYong:!1},{regex:/^(邵雍河洛理数解卦)/,name:"邵雍河洛",isShaoYong:!0},{regex:/^(傅佩荣解卦手册)/,name:"傅佩荣手册",isShaoYong:!1},{regex:/^(白话文解释)/,name:"白话文",isShaoYong:!1},{regex:/^(大象)[:：]/,name:"大象",isShaoYong:!1},{regex:/^(运势)[:：]/,name:"运势",isShaoYong:!1},{regex:/^(事业)[:：]/,name:"事业",isShaoYong:!1},{regex:/^(经商)[:：]/,name:"经商",isShaoYong:!1},{regex:/^(求名)[:：]/,name:"求名",isShaoYong:!1},{regex:/^(婚恋)[:：]/,name:"婚恋",isShaoYong:!1},{regex:/^(决策)[:：]/,name:"决策",isShaoYong:!1},{regex:/^(解释)[:：]/,name:"解释",isShaoYong:!1},{regex:/^(特性)[:：]/,name:"特性",isShaoYong:!1},{regex:/^(家运)[:：]/,name:"家运",isShaoYong:!1},{regex:/^(疾病)[:：]/,name:"疾病",isShaoYong:!1},{regex:/^(胎孕)[:：]/,name:"胎孕",isShaoYong:!1},{regex:/^(子女)[:：]/,name:"子女",isShaoYong:!1},{regex:/^(周转)[:：]/,name:"周转",isShaoYong:!1},{regex:/^(买卖)[:：]/,name:"买卖",isShaoYong:!1},{regex:/^(等人)[:：]/,name:"等人",isShaoYong:!1},{regex:/^(寻人)[:：]/,name:"寻人",isShaoYong:!1},{regex:/^(失物)[:：]/,name:"失物",isShaoYong:!1},{regex:/^(外出)[:：]/,name:"外出",isShaoYong:!1},{regex:/^(考试)[:：]/,name:"考试",isShaoYong:!1},{regex:/^(诉讼)[:：]/,name:"诉讼",isShaoYong:!1},{regex:/^(求事)[:：]/,name:"求事",isShaoYong:!1},{regex:/^(改行)[:：]/,name:"改行",isShaoYong:!1},{regex:/^(开业)[:：]/,name:"开业",isShaoYong:!1}];for(const S0 of k0){const X0=d0.match(S0.regex);if(X0){const p=X0[1],U=d0.substring(p.length);C0=S0.isShaoYong;const V=C0?Y0(U):U;return D.jsxs("div",{className:"mt-3",children:[D.jsx("span",{className:"font-bold text-c-brown",children:p}),V]},J0)}}const M0=d0||" ",Q0=C0?Y0(M0):M0;return D.jsx("div",{children:Q0},J0)})},Y0=E0=>!E0||E0===" "?E0:E0.split(/(吉[:：]|凶[:：]|平[:：])/).map((C0,d0)=>C0==="吉："||C0==="吉:"?D.jsx("span",{className:"text-red-600 font-semibold",children:C0},d0):C0==="凶："||C0==="凶:"?D.jsx("span",{className:"text-black font-semibold",children:C0},d0):C0==="平："||C0==="平:"?D.jsx("span",{className:"text-blue-600 font-semibold",children:C0},d0):C0);return D.jsxs("div",{className:"bg-paper border border-c-brown p-6 shadow-md relative overflow-hidden",children:[D.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-c-brown"}),D.jsxs("div",{className:"flex border-b border-stone-300 mb-4",children:[D.jsx("button",{className:`px-4 py-2 font-serif text-sm ${g==="gua"?"text-c-red border-b-2 border-c-red":"text-stone-600"}`,onClick:()=>f("gua"),children:"卦辞解读（本卦）"}),D.jsx("button",{className:`px-4 py-2 font-serif text-sm ${g==="biangua"?"text-c-red border-b-2 border-c-red":"text-stone-600"}`,onClick:()=>f("biangua"),children:"卦辞解读（变卦）"}),D.jsx("button",{className:`px-4 py-2 font-serif text-sm ${g==="yao"?"text-c-red border-b-2 border-c-red":"text-stone-600"}`,onClick:()=>f("yao"),children:"爻辞解释"}),D.jsx("button",{className:`px-4 py-2 font-serif text-sm ${g==="bagua"?"text-c-red border-b-2 border-c-red":"text-stone-600"}`,onClick:()=>f("bagua"),children:"八卦万物属类"})]}),D.jsxs("div",{className:"font-serif text-ink",children:[g==="gua"&&D.jsxs("div",{className:"space-y-4",children:[D.jsxs("div",{className:"border-b border-stone-200 pb-4 relative",children:[D.jsxs("div",{className:"flex items-center justify-between mb-2",children:[D.jsxs("span",{className:"font-bold text-c-red",children:["【",o,"卦辞】"]}),D.jsx("button",{onClick:W,className:"text-xs text-stone-500 hover:text-c-red transition-colors px-2 py-1 border border-stone-300 rounded",children:F?"收起 ▲":"展开 ▼"})]}),D.jsx("div",{ref:S,className:`leading-7 overflow-hidden transition-all duration-300 relative ${F?"max-h-[600px] overflow-y-auto":"max-h-32"}`,style:{scrollbarWidth:"thin",scrollbarColor:"#8B4513 #F5F5DC"},children:D.jsx("div",{className:"text-sm",children:c0(R)})}),!F&&R.length>200&&D.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-paper to-transparent pointer-events-none"})]}),D.jsxs("div",{children:[D.jsx("div",{className:"mb-2",children:D.jsx("span",{className:"font-bold text-c-red",children:"【北宋易学家邵雍解】"})}),D.jsx("div",{className:"leading-7 text-sm",children:c0(L)})]})]}),g==="biangua"&&D.jsxs("div",{className:"space-y-4",children:[D.jsxs("div",{className:"border-b border-stone-200 pb-4 relative",children:[D.jsxs("div",{className:"flex items-center justify-between mb-2",children:[D.jsxs("span",{className:"font-bold text-c-red",children:["【",t,"卦辞】"]}),D.jsx("button",{onClick:w0,className:"text-xs text-stone-500 hover:text-c-red transition-colors px-2 py-1 border border-stone-300 rounded",children:y?"收起 ▲":"展开 ▼"})]}),D.jsx("div",{ref:_,className:`leading-7 overflow-hidden transition-all duration-300 relative ${y?"max-h-[600px] overflow-y-auto":"max-h-32"}`,style:{scrollbarWidth:"thin",scrollbarColor:"#8B4513 #F5F5DC"},children:D.jsx("div",{className:"text-sm",children:c0(J)})}),!y&&J.length>200&&D.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-paper to-transparent pointer-events-none"})]}),D.jsxs("div",{children:[D.jsx("div",{className:"mb-2",children:D.jsx("span",{className:"font-bold text-c-red",children:"【北宋易学家邵雍解】"})}),D.jsx("div",{className:"leading-7 text-sm",children:c0(k)})]})]}),g==="yao"&&D.jsxs("div",{children:[D.jsxs("span",{className:"font-bold text-c-red",children:["【第",l,"爻】"]}),D.jsx("div",{className:"mt-2 leading-7 max-h-[500px] overflow-y-auto text-sm",style:{scrollbarWidth:"thin",scrollbarColor:"#8B4513 #F5F5DC"},children:D.jsx("div",{children:G0(a0)})})]}),g==="bagua"&&D.jsx(F8,{result:h})]}),D.jsx("style",{children:`
        div::-webkit-scrollbar {
          width: 6px;
        }
        div::-webkit-scrollbar-track {
          background: #F5F5DC;
          border-radius: 3px;
        }
        div::-webkit-scrollbar-thumb {
          background: #8B4513;
          border-radius: 3px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: #654321;
        }
      `})]})},f4=(o,t)=>{const l=o.element,h=t.element;if(l===h)return{relation:"体用比和",verdict:"大吉",description:"顺遂"};const g=(F,A)=>F===Z.METAL&&A===Z.WATER||F===Z.WATER&&A===Z.WOOD||F===Z.WOOD&&A===Z.FIRE||F===Z.FIRE&&A===Z.EARTH||F===Z.EARTH&&A===Z.METAL,f=(F,A)=>F===Z.METAL&&A===Z.WOOD||F===Z.WOOD&&A===Z.EARTH||F===Z.EARTH&&A===Z.WATER||F===Z.WATER&&A===Z.FIRE||F===Z.FIRE&&A===Z.METAL;return g(h,l)?{relation:"用生体",verdict:"吉",description:"增益"}:g(l,h)?{relation:"体生用",verdict:"小凶",description:"主损耗"}:f(l,h)?{relation:"体克用",verdict:"小吉",description:"事缓成"}:f(h,l)?{relation:"用克体",verdict:"大凶",description:"凶险"}:{relation:"未知",verdict:"待定",description:""}},di=(o,t)=>{if(o===Z.WOOD){if(["寅","卯"].includes(t))return"旺";if(["巳","午"].includes(t))return"囚";if(["申","酉"].includes(t))return"死";if(["亥","子"].includes(t))return"相";if(["辰","戌","丑","未"].includes(t))return"休"}if(o===Z.FIRE){if(["巳","午"].includes(t))return"旺";if(["申","酉"].includes(t))return"休";if(["亥","子"].includes(t))return"死";if(["辰","戌","丑","未"].includes(t))return"囚";if(["寅","卯"].includes(t))return"相"}if(o===Z.EARTH){if(["辰","戌","丑","未"].includes(t))return"旺";if(["巳","午"].includes(t))return"相";if(["申","酉"].includes(t))return"囚";if(["寅","卯"].includes(t))return"死";if(["亥","子"].includes(t))return"休"}if(o===Z.METAL){if(["申","酉"].includes(t))return"旺";if(["亥","子"].includes(t))return"囚";if(["寅","卯"].includes(t)||["巳","午"].includes(t))return"死";if(["辰","戌","丑","未"].includes(t))return"相"}if(o===Z.WATER){if(["亥","子"].includes(t))return"旺";if(["寅","卯"].includes(t))return"囚";if(["巳","午"].includes(t)||["辰","戌","丑","未"].includes(t))return"死";if(["申","酉"].includes(t))return"相"}return"休"},D8=(o,t,l,h,g,f,F)=>{const A=o.element,y=t.element,x=l.element;let S=0,_=0,R=0;return[h,g,f,F].forEach((J,k)=>{k===0||k===3||(J.element===A&&S++,J.element===y&&_++,J.element===x&&R++)}),{tiParty:S,benYongParty:_,bianYongParty:R}},x8=o=>{try{let t;if(o)if(typeof o=="string"){let _=o.replace(/年/g,"/").replace(/月/g,"/").replace(/日/g,"");t=new Date(_)}else t=new Date(o);else t=new Date;isNaN(t.getTime())&&(console.error("日期解析失败，使用当前时间作为后备"),t=new Date);const l=t.getFullYear(),h=t.getMonth()+1,g=t.getDate(),f=new Date(l,h-1,g,23,59,59);return console.log("--- 月柱计算调试 ---"),console.log("用户输入/当前时间:",t.toLocaleString()),console.log("计算使用时间(强制日末):",f.toLocaleString()),y0.fromDate(f).getLunar().getEightChar().getMonth().substring(1)}catch(t){console.error("获取地支月份失败:",t);const h=new Date().getMonth()+1;return{1:"寅",2:"卯",3:"辰",4:"巳",5:"午",6:"未",7:"申",8:"酉",9:"戌",10:"亥",11:"子",12:"丑"}[h]||"子"}},A8=["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],y8=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],d8=o=>{const t=new Date(2025,11,10),l=9,h=1,g=o.getTime()-t.getTime(),f=Math.floor(g/(1e3*60*60*24));let F=(l+f)%10,A=(h+f)%12;return F<0&&(F+=10),A<0&&(A+=12),`${A8[F]}${y8[A]}日`},B8=({result:o})=>{const{benGua:t,bianGua:l,huGua:h,analysis:g,movingYao:f}=o,[F,A]=U0.useState({tiYongRelation:!1,guaQiStatus:!1,tiYongParty:!1,waiGua:!1}),y=p=>{A(U=>({...U,[p]:!U[p]}))};let x,S,_,R;f<=3?(x=t.upper,S=t.lower,_=l.upper,R=l.lower):(x=t.lower,S=t.upper,_=l.lower,R=l.upper);const L=f4(x,S),J=f4(_,R),k=x8(o.timestamp),W=(p=>["寅","卯"].includes(p)?"木":["巳","午"].includes(p)?"火":["申","酉"].includes(p)?"金":["亥","子"].includes(p)?"水":["辰","戌","丑","未"].includes(p)?"土":"未知")(k),w0=di(x.element,k),c0=di(S.element,k),G0=di(_.element,k),Y0=di(R.element,k);let E0,u0;f<=3?(E0=h.upper,u0=h.lower):(E0=h.lower,u0=h.upper),D8(x,S,R,S,E0,u0,R);const C0=()=>{const p=o.timestamp;let U;try{U=new Date(p),isNaN(U.getTime())&&(console.warn("无法解析时间戳，使用当前日期:",p),U=new Date)}catch(B){console.error("解析时间戳时出错:",p,B),U=new Date}const V=d8(U),o0=V.charAt(V.length-2);let M;return["寅","卯"].includes(o0)?M=Z.WOOD:["巳","午"].includes(o0)?M=Z.FIRE:["申","酉"].includes(o0)?M=Z.METAL:["亥","子"].includes(o0)?M=Z.WATER:(["辰","戌","丑","未"].includes(o0),M=Z.EARTH),{ganZhi:V,diZhi:o0,wuXing:M}},{ganZhi:d0,diZhi:J0,wuXing:k0}=C0(),M0=()=>{const p=x.element,U=k0;if(p===U)return"比和";const V=(M,B)=>M===Z.METAL&&B===Z.WATER||M===Z.WATER&&B===Z.WOOD||M===Z.WOOD&&B===Z.FIRE||M===Z.FIRE&&B===Z.EARTH||M===Z.EARTH&&B===Z.METAL,o0=(M,B)=>M===Z.METAL&&B===Z.WOOD||M===Z.WOOD&&B===Z.EARTH||M===Z.EARTH&&B===Z.WATER||M===Z.WATER&&B===Z.FIRE||M===Z.FIRE&&B===Z.METAL;return V(U,p)?"生体":o0(U,p)?"克体":V(p,U)?"被体生":o0(p,U)?"被体克":"关系未明"},Q0=p=>p.includes("大吉")?"text-red-600 font-bold":p.includes("吉")?"text-red-500":p.includes("大凶")?"text-black font-bold":p.includes("凶")?"text-stone-700":"text-stone-600",S0=p=>p==="旺"||p==="相"?"旺":p==="休"?"平":"衰",X0=p=>{const U=S0(p);return U==="旺"?"text-red-600 font-semibold":U==="衰"?"text-blue-600 font-semibold":"text-stone-600"};return D.jsxs("div",{className:"bg-paper border border-c-brown p-6 shadow-md relative overflow-hidden",children:[D.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-c-brown"}),D.jsx("h3",{className:"text-xl font-serif font-bold text-c-brown mb-4 border-b border-stone-300 pb-2",children:"相关分析"}),D.jsxs("div",{className:"space-y-6 text-ink font-serif",children:[D.jsxs("div",{children:[D.jsxs("div",{className:"flex justify-between items-center cursor-pointer",onClick:()=>y("tiYongRelation"),children:[D.jsx("h4",{className:"font-bold text-c-red mb-3",children:"【体用生克关系】"}),D.jsx("span",{className:"text-sm text-c-brown",children:F.tiYongRelation?"收起 ▲":"展开 ▼"})]}),F.tiYongRelation&&D.jsxs(D.Fragment,{children:[D.jsxs("div",{className:"mb-3 p-3 bg-stone-50 rounded border border-stone-200",children:[D.jsx("div",{className:"text-sm font-bold text-c-brown mb-2",children:"本卦："}),D.jsxs("div",{className:"flex justify-between items-center text-sm mb-1",children:[D.jsxs("span",{children:["体卦：",x.name,"（",x.element,"）"]}),D.jsxs("span",{children:["用卦：",S.name,"（",S.element,"）"]})]}),D.jsx("div",{className:"text-center mt-2",children:D.jsxs("span",{className:`text-base ${Q0(L.verdict)}`,children:[L.relation,"：",L.verdict,"，",L.description]})})]}),D.jsxs("div",{className:"p-3 bg-stone-50 rounded border border-stone-200",children:[D.jsx("div",{className:"text-sm font-bold text-c-brown mb-2",children:"变卦："}),D.jsxs("div",{className:"flex justify-between items-center text-sm mb-1",children:[D.jsxs("span",{children:["体卦：",_.name,"（",_.element,"）"]}),D.jsxs("span",{children:["用卦：",R.name,"（",R.element,"）"]})]}),D.jsx("div",{className:"text-center mt-2",children:D.jsxs("span",{className:`text-base ${Q0(J.verdict)}`,children:[J.relation,"：",J.verdict,"，",J.description]})})]}),D.jsx("div",{className:"text-xs text-stone-500 mt-2 pl-2 border-l-2 border-stone-300",children:"体生用：小凶，主损耗 | 体克用：小吉，事缓成 | 用生体：吉，增益 | 用克体：大凶，凶险 | 体用比和：大吉，顺遂"})]})]}),D.jsxs("div",{children:[D.jsxs("div",{className:"flex justify-between items-center cursor-pointer",onClick:()=>y("guaQiStatus"),children:[D.jsxs("h4",{className:"font-bold text-c-red mb-3",children:["【卦气旺衰】",D.jsxs("span",{className:"text-sm font-normal text-c-brown ml-2",children:["当前:",k,"月(",W,")"]})]}),D.jsx("span",{className:"text-sm text-c-brown",children:F.guaQiStatus?"收起 ▲":"展开 ▼"})]}),F.guaQiStatus&&D.jsxs(D.Fragment,{children:[D.jsxs("div",{className:"mb-3 p-3 bg-amber-50/30 rounded border border-amber-200",children:[D.jsx("div",{className:"text-sm font-bold text-c-brown mb-2",children:"本卦："}),D.jsxs("div",{className:"flex justify-between items-center text-sm",children:[D.jsxs("span",{children:["体卦 ",x.name,"（",x.element,"）：",D.jsxs("span",{className:X0(w0),children:[w0,"(",S0(w0),")"]})]}),D.jsxs("span",{children:["用卦 ",S.name,"（",S.element,"）：",D.jsxs("span",{className:X0(c0),children:[c0,"(",S0(c0),")"]})]})]})]}),D.jsxs("div",{className:"p-3 bg-amber-50/30 rounded border border-amber-200",children:[D.jsx("div",{className:"text-sm font-bold text-c-brown mb-2",children:"变卦："}),D.jsxs("div",{className:"flex justify-between items-center text-sm",children:[D.jsxs("span",{children:["体卦 ",_.name,"（",_.element,"）：",D.jsxs("span",{className:X0(G0),children:[G0,"(",S0(G0),")"]})]}),D.jsxs("span",{children:["用卦 ",R.name,"（",R.element,"）：",D.jsxs("span",{className:X0(Y0),children:[Y0,"(",S0(Y0),")"]})]})]})]}),D.jsx("div",{className:"text-xs text-stone-500 mt-2 pl-2 border-l-2 border-stone-300",children:'卦气状态：旺、相属于"旺"; 休为"平"; 囚、死属于"衰" | 木旺春(寅卢)衰秋(申酉) | 火旺夏(巳午)衰冬(亥子) | 金旺秋(申酉)衰夏(巳午) | 水旺冬(亥子)衰土月(辰戌丑未) | 土旺四季月(辰戌丑未)衰春(寅卢)'})]})]}),D.jsxs("div",{children:[D.jsxs("div",{className:"flex justify-between items-center cursor-pointer",onClick:()=>y("tiYongParty"),children:[D.jsx("h4",{className:"font-bold text-c-red mb-3",children:"【体党用党】"}),D.jsx("span",{className:"text-sm text-c-brown",children:F.tiYongParty?"收起 ▲":"展开 ▼"})]}),F.tiYongParty&&D.jsx("div",{className:"p-4 bg-blue-50/30 rounded border border-blue-200",children:D.jsx("div",{className:"text-base text-stone-700 leading-relaxed",children:"体卦的同类(体党)多，即：用卦、互之用(互卦的用)、互之体(互卦的体)、变卦之五行与体卦五行同类多者，则体卦卦气、卦势旺盛；用卦的同类(用党)多，则体卦卦气、卦势必然衰弱。"})})]}),D.jsxs("div",{children:[D.jsxs("div",{className:"flex justify-between items-center cursor-pointer",onClick:()=>y("waiGua"),children:[D.jsx("h4",{className:"font-bold text-c-red mb-3",children:"【外卦】"}),D.jsx("span",{className:"text-sm text-c-brown",children:F.waiGua?"收起 ▲":"展开 ▼"})]}),F.waiGua&&D.jsxs("div",{className:"space-y-4",children:[D.jsxs("div",{className:"p-4 bg-amber-50/30 rounded border border-amber-200",children:[D.jsx("h5",{className:"font-bold text-c-brown mb-2",children:"日应"}),D.jsxs("div",{className:"space-y-2 text-base",children:[D.jsxs("div",{className:"flex justify-between items-center",children:[D.jsx("span",{className:"font-semibold text-c-brown",children:"当日干支："}),D.jsx("span",{children:d0})]}),D.jsxs("div",{className:"flex justify-between items-center",children:[D.jsx("span",{className:"font-semibold text-c-brown",children:"日辰属性："}),D.jsxs("span",{children:[J0,"（",k0,"）"]})]}),D.jsxs("div",{className:"flex justify-between items-center",children:[D.jsx("span",{className:"font-semibold text-c-brown",children:"与体卦关系："}),D.jsx("span",{children:M0()})]})]})]}),D.jsxs("div",{className:"p-4 bg-blue-50/30 rounded border border-blue-200",children:[D.jsx("h5",{className:"font-bold text-c-brown mb-2",children:"方应"}),D.jsx("div",{className:"text-base text-stone-700",children:"看问卜者所在或事物发生的方位。若所在方能生体卦或与体卦比和则吉；若为克体则凶；若为体卦生之（反向生）亦不利。"})]})]})]}),D.jsxs("div",{className:"text-xs text-stone-500 bg-stone-100/50 p-3 rounded border border-stone-200 leading-relaxed",children:[D.jsxs("p",{children:[D.jsx("span",{className:"font-bold",children:"注："}),"体为己，用为事。本卦看开始，互卦看过程，变卦看结局，",D.jsx("span",{className:"font-bold text-c-red",children:"卦是动态的过程"}),"。"]}),D.jsx("p",{className:"mt-1",children:"体用生克关系不仅限于看本、变卦，还有用卦与用卦、体卦与体卦之间，按重要性依次进行分析。"})]})]})]})},m8=({result:o,onReset:t})=>{const l=o.movingYao<=3?"upper":"lower";return D.jsxs("div",{className:"max-w-4xl mx-auto",children:[D.jsxs("div",{className:"text-center mb-8 border-b-2 border-c-red pb-4",children:[D.jsx("div",{className:"text-stone-500 text-sm mb-2",children:o.methodName==="时间起卦"?o.methodName:`${o.timestamp} · ${o.methodName}`}),D.jsx("h2",{className:"text-3xl font-cursive text-c-red",children:"梅花易数排盘结果"})]}),D.jsx("div",{className:"overflow-x-auto mb-10",children:D.jsxs("div",{className:"grid grid-cols-3 gap-4 min-w-max md:gap-8 px-2",children:[D.jsxs("div",{className:"flex flex-col items-center animate-fade-in",style:{animationDelay:"0.1s"},children:[D.jsx("div",{className:"text-stone-400 mb-2 font-serif text-sm md:text-base",children:"主事之始"}),D.jsx(Q5,{upper:o.benGua.upper,lower:o.benGua.lower,name:o.benGua.name,title:"本 卦",isMoving:!0,movingYaoIndex:o.movingYao,tiYongLabel:l})]}),D.jsxs("div",{className:"flex flex-col items-center animate-fade-in",style:{animationDelay:"0.3s"},children:[D.jsx("div",{className:"text-stone-400 mb-2 font-serif text-sm md:text-base",children:"过程发展"}),D.jsx(Q5,{upper:o.huGua.upper,lower:o.huGua.lower,name:o.huGua.name,title:"互 卦"})]}),D.jsxs("div",{className:"flex flex-col items-center animate-fade-in",style:{animationDelay:"0.5s"},children:[D.jsx("div",{className:"text-stone-400 mb-2 font-serif text-sm md:text-base",children:"最终结局"}),D.jsx(Q5,{upper:o.bianGua.upper,lower:o.bianGua.lower,name:o.bianGua.name,title:"变 卦",tiYongLabel:l})]})]})}),D.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in",style:{animationDelay:"0.7s"},children:[D.jsx(B8,{result:o}),D.jsx(C8,{benGuaName:o.benGua.name,bianGuaName:o.bianGua.name,movingYao:o.movingYao,result:o})]}),D.jsx("div",{className:"mt-10 text-center pb-10",children:D.jsx("button",{onClick:t,className:"px-8 py-3 bg-stone-800 text-white font-serif rounded shadow hover:bg-c-brown transition-colors",children:"重新起卦"})}),D.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.6s ease-out forwards;
        }
      `})]})},F4=[{id:tn.TIME,name:"时间起卦",desc:"根据年月日时灵动起卦",icon:"⏳"},{id:tn.NUMBERS,name:"报数起卦",desc:"心念两数，直觉指引",icon:"🔢"},{id:tn.WORDS,name:"文字起卦",desc:"触机占断，字里乾坤",icon:"✍️"},{id:tn.OBJECTS,name:"物数起卦",desc:"观物计数，取象比类",icon:"🍎"},{id:tn.DIRECTION,name:"物象方位",desc:"环境风水，时空交织",icon:"🧭"},{id:tn.CUSTOM,name:"自定义",desc:"手动排盘，研究卦理",icon:"⚙️"}];function _8(){const[o,t]=U0.useState("home"),[l,h]=U0.useState(null),[g,f]=U0.useState(null),F=x=>{h(x),t("input")},A=(x,S,_,R)=>{const L=F4.find(k=>k.id===l),J=l8(x,S,_,(L==null?void 0:L.name)||"未知方式",R);f(J),t("result")},y=()=>{f(null),h(null),t("home")};return D.jsxs("div",{className:"min-h-screen flex flex-col font-serif text-ink bg-paper",children:[D.jsx("header",{className:"bg-c-brown text-paper py-4 shadow-md",children:D.jsxs("div",{className:"container mx-auto px-4 flex justify-between items-center",children:[D.jsxs("div",{className:"flex items-center gap-3",onClick:y,style:{cursor:"pointer"},children:[D.jsx("img",{src:"logo.png",alt:"Logo",className:"w-10 h-10 object-contain rounded-full border border-paper/20 shadow-inner bg-white/10 p-0.5"}),D.jsxs("h1",{className:"text-2xl font-cursive tracking-wider",children:["梅花易数 ",D.jsx("span",{className:"text-sm font-serif opacity-80",children:"在线排盘"})]})]}),D.jsx("div",{className:"hidden sm:block font-serif text-sm opacity-70",children:"以玄制玄"})]})}),D.jsxs("main",{className:"flex-grow container mx-auto px-4 py-8",children:[o==="home"&&D.jsxs("div",{className:"animate-fade-in",children:[D.jsxs("div",{className:"text-center mb-10",children:[D.jsx("h2",{className:"text-3xl font-serif font-bold text-c-red mb-3",children:"选择起卦方式"}),D.jsx("p",{className:"text-stone-500 font-serif",children:"心动意发，顺应自然。请选择最适合当下的起卦方式。"})]}),D.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto",children:F4.map(x=>D.jsxs("button",{onClick:()=>F(x.id),className:"group bg-white p-6 rounded-sm border border-stone-300 shadow-sm hover:shadow-lg hover:border-c-red transition-all duration-300 flex flex-col items-center text-center",children:[D.jsx("div",{className:"text-4xl mb-4 group-hover:scale-110 transition-transform",children:x.icon}),D.jsx("h3",{className:"text-xl font-bold text-c-brown mb-2 font-serif",children:x.name}),D.jsx("p",{className:"text-stone-500 text-sm",children:x.desc}),D.jsx("div",{className:"mt-4 w-8 h-0.5 bg-stone-200 group-hover:bg-c-red transition-colors"})]},x.id))}),D.jsx("div",{className:"mt-16 text-center text-xs text-stone-400 font-serif"})]}),o==="input"&&l&&D.jsx(E8,{method:l,onSubmit:A,onBack:()=>t("home")}),o==="result"&&g&&D.jsx(m8,{result:g,onReset:y})]}),D.jsx("footer",{className:"bg-stone-200 py-6 text-center text-stone-500 text-sm font-serif border-t border-stone-300",children:D.jsxs("p",{children:["© ",new Date().getFullYear()," 梅花易数排盘系统 | 直观·完备·简明"]})})]})}const A4=document.getElementById("root");if(!A4)throw new Error("Could not find root element to mount to");const j8=n8.createRoot(A4);j8.render(D.jsx(Js.StrictMode,{children:D.jsx(_8,{})}));
