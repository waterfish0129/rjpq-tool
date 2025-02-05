(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ca(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ie={},or=[],$t=()=>{},up=()=>!1,Ii=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ha=t=>t.startsWith("onUpdate:"),rt=Object.assign,fa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cp=Object.prototype.hasOwnProperty,ve=(t,e)=>cp.call(t,e),oe=Array.isArray,$r=t=>Ai(t)==="[object Map]",hp=t=>Ai(t)==="[object Set]",ie=t=>typeof t=="function",Ue=t=>typeof t=="string",vr=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",$c=t=>(Oe(t)||ie(t))&&ie(t.then)&&ie(t.catch),fp=Object.prototype.toString,Ai=t=>fp.call(t),dp=t=>Ai(t).slice(8,-1),pp=t=>Ai(t)==="[object Object]",da=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qr=ca(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gp=/-(\w)/g,Rt=bi(t=>t.replace(gp,(e,n)=>n?n.toUpperCase():"")),mp=/\B([A-Z])/g,An=bi(t=>t.replace(mp,"-$1").toLowerCase()),Ri=bi(t=>t.charAt(0).toUpperCase()+t.slice(1)),ao=bi(t=>t?`on${Ri(t)}`:""),mn=(t,e)=>!Object.is(t,e),Ks=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},qc=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Do=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Yl;const Si=()=>Yl||(Yl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pa(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ue(r)?vp(r):pa(r);if(s)for(const o in s)e[o]=s[o]}return e}else if(Ue(t)||Oe(t))return t}const _p=/;(?![^(]*\))/g,yp=/:([^]+)/,Ep=/\/\*[^]*?\*\//g;function vp(t){const e={};return t.replace(Ep,"").split(_p).forEach(n=>{if(n){const r=n.split(yp);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ga(t){let e="";if(Ue(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=ga(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Tp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wp=ca(Tp);function Hc(t){return!!t||t===""}/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _t;class Ip{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){_t=this}off(){_t=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ap(){return _t}let Ae;const lo=new WeakSet;class zc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_t&&_t.active&&_t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,lo.has(this)&&(lo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Jl(this),Wc(this);const e=Ae,n=Nt;Ae=this,Nt=!0;try{return this.fn()}finally{Qc(this),Ae=e,Nt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ya(e);this.deps=this.depsTail=void 0,Jl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?lo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xo(this)&&this.run()}get dirty(){return xo(this)}}let Kc=0,Hr,zr;function Gc(t,e=!1){if(t.flags|=8,e){t.next=zr,zr=t;return}t.next=Hr,Hr=t}function ma(){Kc++}function _a(){if(--Kc>0)return;if(zr){let e=zr;for(zr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Hr;){let e=Hr;for(Hr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Wc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Qc(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ya(r),bp(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function xo(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Xc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===rs))return;t.globalVersion=rs;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!xo(t)){t.flags&=-3;return}const n=Ae,r=Nt;Ae=t,Nt=!0;try{Wc(t);const s=t.fn(t._value);(e.version===0||mn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ae=n,Nt=r,Qc(t),t.flags&=-3}}function ya(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)ya(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function bp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Nt=!0;const Yc=[];function bn(){Yc.push(Nt),Nt=!1}function Rn(){const t=Yc.pop();Nt=t===void 0?!0:t}function Jl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ae;Ae=void 0;try{e()}finally{Ae=n}}}let rs=0;class Rp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ea{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ae||!Nt||Ae===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ae)n=this.activeLink=new Rp(Ae,this),Ae.deps?(n.prevDep=Ae.depsTail,Ae.depsTail.nextDep=n,Ae.depsTail=n):Ae.deps=Ae.depsTail=n,Jc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ae.depsTail,n.nextDep=void 0,Ae.depsTail.nextDep=n,Ae.depsTail=n,Ae.deps===n&&(Ae.deps=r)}return n}trigger(e){this.version++,rs++,this.notify(e)}notify(e){ma();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{_a()}}}function Jc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Jc(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Oo=new WeakMap,Fn=Symbol(""),No=Symbol(""),ss=Symbol("");function Ze(t,e,n){if(Nt&&Ae){let r=Oo.get(t);r||Oo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ea),s.map=r,s.key=n),s.track()}}function Jt(t,e,n,r,s,o){const a=Oo.get(t);if(!a){rs++;return}const l=c=>{c&&c.trigger()};if(ma(),e==="clear")a.forEach(l);else{const c=oe(t),f=c&&da(n);if(c&&n==="length"){const d=Number(r);a.forEach((p,y)=>{(y==="length"||y===ss||!vr(y)&&y>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),f&&l(a.get(ss)),e){case"add":c?f&&l(a.get("length")):(l(a.get(Fn)),$r(t)&&l(a.get(No)));break;case"delete":c||(l(a.get(Fn)),$r(t)&&l(a.get(No)));break;case"set":$r(t)&&l(a.get(Fn));break}}_a()}function er(t){const e=Ee(t);return e===t?e:(Ze(e,"iterate",ss),Mt(t)?e:e.map(at))}function va(t){return Ze(t=Ee(t),"iterate",ss),t}const Sp={__proto__:null,[Symbol.iterator](){return uo(this,Symbol.iterator,at)},concat(...t){return er(this).concat(...t.map(e=>oe(e)?er(e):e))},entries(){return uo(this,"entries",t=>(t[1]=at(t[1]),t))},every(t,e){return Qt(this,"every",t,e,void 0,arguments)},filter(t,e){return Qt(this,"filter",t,e,n=>n.map(at),arguments)},find(t,e){return Qt(this,"find",t,e,at,arguments)},findIndex(t,e){return Qt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Qt(this,"findLast",t,e,at,arguments)},findLastIndex(t,e){return Qt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Qt(this,"forEach",t,e,void 0,arguments)},includes(...t){return co(this,"includes",t)},indexOf(...t){return co(this,"indexOf",t)},join(t){return er(this).join(t)},lastIndexOf(...t){return co(this,"lastIndexOf",t)},map(t,e){return Qt(this,"map",t,e,void 0,arguments)},pop(){return kr(this,"pop")},push(...t){return kr(this,"push",t)},reduce(t,...e){return Zl(this,"reduce",t,e)},reduceRight(t,...e){return Zl(this,"reduceRight",t,e)},shift(){return kr(this,"shift")},some(t,e){return Qt(this,"some",t,e,void 0,arguments)},splice(...t){return kr(this,"splice",t)},toReversed(){return er(this).toReversed()},toSorted(t){return er(this).toSorted(t)},toSpliced(...t){return er(this).toSpliced(...t)},unshift(...t){return kr(this,"unshift",t)},values(){return uo(this,"values",at)}};function uo(t,e,n){const r=va(t),s=r[e]();return r!==t&&!Mt(t)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=n(o.value)),o}),s}const Cp=Array.prototype;function Qt(t,e,n,r,s,o){const a=va(t),l=a!==t&&!Mt(t),c=a[e];if(c!==Cp[e]){const p=c.apply(t,o);return l?at(p):p}let f=n;a!==t&&(l?f=function(p,y){return n.call(this,at(p),y,t)}:n.length>2&&(f=function(p,y){return n.call(this,p,y,t)}));const d=c.call(a,f,r);return l&&s?s(d):d}function Zl(t,e,n,r){const s=va(t);let o=n;return s!==t&&(Mt(t)?n.length>3&&(o=function(a,l,c){return n.call(this,a,l,c,t)}):o=function(a,l,c){return n.call(this,a,at(l),c,t)}),s[e](o,...r)}function co(t,e,n){const r=Ee(t);Ze(r,"iterate",ss);const s=r[e](...n);return(s===-1||s===!1)&&Ia(n[0])?(n[0]=Ee(n[0]),r[e](...n)):s}function kr(t,e,n=[]){bn(),ma();const r=Ee(t)[e].apply(t,n);return _a(),Rn(),r}const Pp=ca("__proto__,__v_isRef,__isVue"),Zc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(vr));function Vp(t){vr(t)||(t=String(t));const e=Ee(this);return Ze(e,"has",t),e.hasOwnProperty(t)}class eh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(s?o?Bp:sh:o?rh:nh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=oe(e);if(!s){let c;if(a&&(c=Sp[n]))return c;if(n==="hasOwnProperty")return Vp}const l=Reflect.get(e,n,nt(e)?e:r);return(vr(n)?Zc.has(n):Pp(n))||(s||Ze(e,"get",n),o)?l:nt(l)?a&&da(n)?l:l.value:Oe(l)?s?oh(l):Ci(l):l}}class th extends eh{constructor(e=!1){super(!1,e)}set(e,n,r,s){let o=e[n];if(!this._isShallow){const c=jn(o);if(!Mt(r)&&!jn(r)&&(o=Ee(o),r=Ee(r)),!oe(e)&&nt(o)&&!nt(r))return c?!1:(o.value=r,!0)}const a=oe(e)&&da(n)?Number(n)<e.length:ve(e,n),l=Reflect.set(e,n,r,nt(e)?e:s);return e===Ee(s)&&(a?mn(r,o)&&Jt(e,"set",n,r):Jt(e,"add",n,r)),l}deleteProperty(e,n){const r=ve(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Jt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!vr(n)||!Zc.has(n))&&Ze(e,"has",n),r}ownKeys(e){return Ze(e,"iterate",oe(e)?"length":Fn),Reflect.ownKeys(e)}}class Dp extends eh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const xp=new th,Op=new Dp,Np=new th(!0);const Mo=t=>t,Fs=t=>Reflect.getPrototypeOf(t);function Mp(t,e,n){return function(...r){const s=this.__v_raw,o=Ee(s),a=$r(o),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,f=s[t](...r),d=n?Mo:e?ko:at;return!e&&Ze(o,"iterate",c?No:Fn),{next(){const{value:p,done:y}=f.next();return y?{value:p,done:y}:{value:l?[d(p[0]),d(p[1])]:d(p),done:y}},[Symbol.iterator](){return this}}}}function Us(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function kp(t,e){const n={get(s){const o=this.__v_raw,a=Ee(o),l=Ee(s);t||(mn(s,l)&&Ze(a,"get",s),Ze(a,"get",l));const{has:c}=Fs(a),f=e?Mo:t?ko:at;if(c.call(a,s))return f(o.get(s));if(c.call(a,l))return f(o.get(l));o!==a&&o.get(s)},get size(){const s=this.__v_raw;return!t&&Ze(Ee(s),"iterate",Fn),Reflect.get(s,"size",s)},has(s){const o=this.__v_raw,a=Ee(o),l=Ee(s);return t||(mn(s,l)&&Ze(a,"has",s),Ze(a,"has",l)),s===l?o.has(s):o.has(s)||o.has(l)},forEach(s,o){const a=this,l=a.__v_raw,c=Ee(l),f=e?Mo:t?ko:at;return!t&&Ze(c,"iterate",Fn),l.forEach((d,p)=>s.call(o,f(d),f(p),a))}};return rt(n,t?{add:Us("add"),set:Us("set"),delete:Us("delete"),clear:Us("clear")}:{add(s){!e&&!Mt(s)&&!jn(s)&&(s=Ee(s));const o=Ee(this);return Fs(o).has.call(o,s)||(o.add(s),Jt(o,"add",s,s)),this},set(s,o){!e&&!Mt(o)&&!jn(o)&&(o=Ee(o));const a=Ee(this),{has:l,get:c}=Fs(a);let f=l.call(a,s);f||(s=Ee(s),f=l.call(a,s));const d=c.call(a,s);return a.set(s,o),f?mn(o,d)&&Jt(a,"set",s,o):Jt(a,"add",s,o),this},delete(s){const o=Ee(this),{has:a,get:l}=Fs(o);let c=a.call(o,s);c||(s=Ee(s),c=a.call(o,s)),l&&l.call(o,s);const f=o.delete(s);return c&&Jt(o,"delete",s,void 0),f},clear(){const s=Ee(this),o=s.size!==0,a=s.clear();return o&&Jt(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Mp(s,t,e)}),n}function Ta(t,e){const n=kp(t,e);return(r,s,o)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ve(n,s)&&s in r?n:r,s,o)}const Lp={get:Ta(!1,!1)},Fp={get:Ta(!1,!0)},Up={get:Ta(!0,!1)};const nh=new WeakMap,rh=new WeakMap,sh=new WeakMap,Bp=new WeakMap;function jp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $p(t){return t.__v_skip||!Object.isExtensible(t)?0:jp(dp(t))}function Ci(t){return jn(t)?t:wa(t,!1,xp,Lp,nh)}function ih(t){return wa(t,!1,Np,Fp,rh)}function oh(t){return wa(t,!0,Op,Up,sh)}function wa(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=s.get(t);if(o)return o;const a=$p(t);if(a===0)return t;const l=new Proxy(t,a===2?r:n);return s.set(t,l),l}function Kr(t){return jn(t)?Kr(t.__v_raw):!!(t&&t.__v_isReactive)}function jn(t){return!!(t&&t.__v_isReadonly)}function Mt(t){return!!(t&&t.__v_isShallow)}function Ia(t){return t?!!t.__v_raw:!1}function Ee(t){const e=t&&t.__v_raw;return e?Ee(e):t}function qp(t){return!ve(t,"__v_skip")&&Object.isExtensible(t)&&qc(t,"__v_skip",!0),t}const at=t=>Oe(t)?Ci(t):t,ko=t=>Oe(t)?oh(t):t;function nt(t){return t?t.__v_isRef===!0:!1}function ah(t){return lh(t,!1)}function Hp(t){return lh(t,!0)}function lh(t,e){return nt(t)?t:new zp(t,e)}class zp{constructor(e,n){this.dep=new Ea,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ee(e),this._value=n?e:at(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Mt(e)||jn(e);e=r?e:Ee(e),mn(e,n)&&(this._rawValue=e,this._value=r?e:at(e),this.dep.trigger())}}function ar(t){return nt(t)?t.value:t}const Kp={get:(t,e,n)=>e==="__v_raw"?t:ar(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return nt(s)&&!nt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function uh(t){return Kr(t)?t:new Proxy(t,Kp)}class Gp{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ea(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=rs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ae!==this)return Gc(this,!0),!0}get value(){const e=this.dep.track();return Xc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Wp(t,e,n=!1){let r,s;return ie(t)?r=t:(r=t.get,s=t.set),new Gp(r,s,n)}const Bs={},ti=new WeakMap;let Nn;function Qp(t,e=!1,n=Nn){if(n){let r=ti.get(n);r||ti.set(n,r=[]),r.push(t)}}function Xp(t,e,n=Ie){const{immediate:r,deep:s,once:o,scheduler:a,augmentJob:l,call:c}=n,f=z=>s?z:Mt(z)||s===!1||s===0?Zt(z,1):Zt(z);let d,p,y,w,V=!1,k=!1;if(nt(t)?(p=()=>t.value,V=Mt(t)):Kr(t)?(p=()=>f(t),V=!0):oe(t)?(k=!0,V=t.some(z=>Kr(z)||Mt(z)),p=()=>t.map(z=>{if(nt(z))return z.value;if(Kr(z))return f(z);if(ie(z))return c?c(z,2):z()})):ie(t)?e?p=c?()=>c(t,2):t:p=()=>{if(y){bn();try{y()}finally{Rn()}}const z=Nn;Nn=d;try{return c?c(t,3,[w]):t(w)}finally{Nn=z}}:p=$t,e&&s){const z=p,ce=s===!0?1/0:s;p=()=>Zt(z(),ce)}const U=Ap(),G=()=>{d.stop(),U&&U.active&&fa(U.effects,d)};if(o&&e){const z=e;e=(...ce)=>{z(...ce),G()}}let q=k?new Array(t.length).fill(Bs):Bs;const W=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const ce=d.run();if(s||V||(k?ce.some((ge,A)=>mn(ge,q[A])):mn(ce,q))){y&&y();const ge=Nn;Nn=d;try{const A=[ce,q===Bs?void 0:k&&q[0]===Bs?[]:q,w];c?c(e,3,A):e(...A),q=ce}finally{Nn=ge}}}else d.run()};return l&&l(W),d=new zc(p),d.scheduler=a?()=>a(W,!1):W,w=z=>Qp(z,!1,d),y=d.onStop=()=>{const z=ti.get(d);if(z){if(c)c(z,4);else for(const ce of z)ce();ti.delete(d)}},e?r?W(!0):q=d.run():a?a(W.bind(null,!0),!0):d.run(),G.pause=d.pause.bind(d),G.resume=d.resume.bind(d),G.stop=G,G}function Zt(t,e=1/0,n){if(e<=0||!Oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,nt(t))Zt(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)Zt(t[r],e,n);else if(hp(t)||$r(t))t.forEach(r=>{Zt(r,e,n)});else if(pp(t)){for(const r in t)Zt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Zt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ms(t,e,n,r){try{return r?t(...r):t()}catch(s){Pi(s,e,n)}}function Ht(t,e,n,r){if(ie(t)){const s=ms(t,e,n,r);return s&&$c(s)&&s.catch(o=>{Pi(o,e,n)}),s}if(oe(t)){const s=[];for(let o=0;o<t.length;o++)s.push(Ht(t[o],e,n,r));return s}}function Pi(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ie;if(e){let l=e.parent;const c=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,f)===!1)return}l=l.parent}if(o){bn(),ms(o,null,10,[t,c,f]),Rn();return}}Yp(t,n,s,r,a)}function Yp(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const lt=[];let Ut=-1;const lr=[];let dn=null,tr=0;const ch=Promise.resolve();let ni=null;function hh(t){const e=ni||ch;return t?e.then(this?t.bind(this):t):e}function Jp(t){let e=Ut+1,n=lt.length;for(;e<n;){const r=e+n>>>1,s=lt[r],o=is(s);o<t||o===t&&s.flags&2?e=r+1:n=r}return e}function Aa(t){if(!(t.flags&1)){const e=is(t),n=lt[lt.length-1];!n||!(t.flags&2)&&e>=is(n)?lt.push(t):lt.splice(Jp(e),0,t),t.flags|=1,fh()}}function fh(){ni||(ni=ch.then(ph))}function Zp(t){oe(t)?lr.push(...t):dn&&t.id===-1?dn.splice(tr+1,0,t):t.flags&1||(lr.push(t),t.flags|=1),fh()}function eu(t,e,n=Ut+1){for(;n<lt.length;n++){const r=lt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;lt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function dh(t){if(lr.length){const e=[...new Set(lr)].sort((n,r)=>is(n)-is(r));if(lr.length=0,dn){dn.push(...e);return}for(dn=e,tr=0;tr<dn.length;tr++){const n=dn[tr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}dn=null,tr=0}}const is=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ph(t){try{for(Ut=0;Ut<lt.length;Ut++){const e=lt[Ut];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ms(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ut<lt.length;Ut++){const e=lt[Ut];e&&(e.flags&=-2)}Ut=-1,lt.length=0,dh(),ni=null,(lt.length||lr.length)&&ph()}}let yt=null,gh=null;function ri(t){const e=yt;return yt=t,gh=t&&t.type.__scopeId||null,e}function Lo(t,e=yt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&hu(-1);const o=ri(e);let a;try{a=t(...s)}finally{ri(o),r._d&&hu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function eg(t,e){if(yt===null)return t;const n=Oi(yt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Ie]=e[s];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&Zt(a),r.push({dir:o,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function xn(t,e,n,r){const s=t.dirs,o=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];o&&(l.oldValue=o[a].value);let c=l.dir[r];c&&(bn(),Ht(c,n,8,[t.el,l,t,e]),Rn())}}const tg=Symbol("_vte"),ng=t=>t.__isTeleport;function ba(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ba(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function mh(t,e){return ie(t)?rt({name:t.name},e,{setup:t}):t}function _h(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function si(t,e,n,r,s=!1){if(oe(t)){t.forEach((V,k)=>si(V,e&&(oe(e)?e[k]:e),n,r,s));return}if(Gr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&si(t,e,n,r.component.subTree);return}const o=r.shapeFlag&4?Oi(r.component):r.el,a=s?null:o,{i:l,r:c}=t,f=e&&e.r,d=l.refs===Ie?l.refs={}:l.refs,p=l.setupState,y=Ee(p),w=p===Ie?()=>!1:V=>ve(y,V);if(f!=null&&f!==c&&(Ue(f)?(d[f]=null,w(f)&&(p[f]=null)):nt(f)&&(f.value=null)),ie(c))ms(c,l,12,[a,d]);else{const V=Ue(c),k=nt(c);if(V||k){const U=()=>{if(t.f){const G=V?w(c)?p[c]:d[c]:c.value;s?oe(G)&&fa(G,o):oe(G)?G.includes(o)||G.push(o):V?(d[c]=[o],w(c)&&(p[c]=d[c])):(c.value=[o],t.k&&(d[t.k]=c.value))}else V?(d[c]=a,w(c)&&(p[c]=a)):k&&(c.value=a,t.k&&(d[t.k]=a))};a?(U.id=-1,mt(U,n)):U()}}}Si().requestIdleCallback;Si().cancelIdleCallback;const Gr=t=>!!t.type.__asyncLoader,yh=t=>t.type.__isKeepAlive;function rg(t,e){Eh(t,"a",e)}function sg(t,e){Eh(t,"da",e)}function Eh(t,e,n=tt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Vi(e,r,n),n){let s=n.parent;for(;s&&s.parent;)yh(s.parent.vnode)&&ig(r,e,n,s),s=s.parent}}function ig(t,e,n,r){const s=Vi(e,t,r,!0);vh(()=>{fa(r[e],s)},n)}function Vi(t,e,n=tt,r=!1){if(n){const s=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{bn();const l=_s(n),c=Ht(e,n,t,a);return l(),Rn(),c});return r?s.unshift(o):s.push(o),o}}const on=t=>(e,n=tt)=>{(!ls||t==="sp")&&Vi(t,(...r)=>e(...r),n)},og=on("bm"),ag=on("m"),lg=on("bu"),ug=on("u"),cg=on("bum"),vh=on("um"),hg=on("sp"),fg=on("rtg"),dg=on("rtc");function pg(t,e=tt){Vi("ec",t,e)}const gg="components";function tu(t,e){return _g(gg,t,!0,e)||t}const mg=Symbol.for("v-ndc");function _g(t,e,n=!0,r=!1){const s=yt||tt;if(s){const o=s.type;{const l=sm(o,!1);if(l&&(l===e||l===Rt(e)||l===Ri(Rt(e))))return o}const a=nu(s[t]||o[t],e)||nu(s.appContext[t],e);return!a&&r?o:a}}function nu(t,e){return t&&(t[e]||t[Rt(e)]||t[Ri(Rt(e))])}const Fo=t=>t?$h(t)?Oi(t):Fo(t.parent):null,Wr=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fo(t.parent),$root:t=>Fo(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>wh(t),$forceUpdate:t=>t.f||(t.f=()=>{Aa(t.update)}),$nextTick:t=>t.n||(t.n=hh.bind(t.proxy)),$watch:t=>Fg.bind(t)}),ho=(t,e)=>t!==Ie&&!t.__isScriptSetup&&ve(t,e),yg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:o,accessCache:a,type:l,appContext:c}=t;let f;if(e[0]!=="$"){const w=a[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return o[e]}else{if(ho(r,e))return a[e]=1,r[e];if(s!==Ie&&ve(s,e))return a[e]=2,s[e];if((f=t.propsOptions[0])&&ve(f,e))return a[e]=3,o[e];if(n!==Ie&&ve(n,e))return a[e]=4,n[e];Uo&&(a[e]=0)}}const d=Wr[e];let p,y;if(d)return e==="$attrs"&&Ze(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ie&&ve(n,e))return a[e]=4,n[e];if(y=c.config.globalProperties,ve(y,e))return y[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return ho(s,e)?(s[e]=n,!0):r!==Ie&&ve(r,e)?(r[e]=n,!0):ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let l;return!!n[a]||t!==Ie&&ve(t,a)||ho(e,a)||(l=o[0])&&ve(l,a)||ve(r,a)||ve(Wr,a)||ve(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ru(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Uo=!0;function Eg(t){const e=wh(t),n=t.proxy,r=t.ctx;Uo=!1,e.beforeCreate&&su(e.beforeCreate,t,"bc");const{data:s,computed:o,methods:a,watch:l,provide:c,inject:f,created:d,beforeMount:p,mounted:y,beforeUpdate:w,updated:V,activated:k,deactivated:U,beforeDestroy:G,beforeUnmount:q,destroyed:W,unmounted:z,render:ce,renderTracked:ge,renderTriggered:A,errorCaptured:_,serverPrefetch:T,expose:I,inheritAttrs:b,components:S,directives:v,filters:st}=e;if(f&&vg(f,r,null),a)for(const he in a){const le=a[he];ie(le)&&(r[he]=le.bind(n))}if(s){const he=s.call(n,n);Oe(he)&&(t.data=Ci(he))}if(Uo=!0,o)for(const he in o){const le=o[he],pt=ie(le)?le.bind(n,n):ie(le.get)?le.get.bind(n,n):$t,St=!ie(le)&&ie(le.set)?le.set.bind(n):$t,Tt=Dt({get:pt,set:St});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>Tt.value,set:Ce=>Tt.value=Ce})}if(l)for(const he in l)Th(l[he],r,n,he);if(c){const he=ie(c)?c.call(n):c;Reflect.ownKeys(he).forEach(le=>{Gs(le,he[le])})}d&&su(d,t,"c");function Ne(he,le){oe(le)?le.forEach(pt=>he(pt.bind(n))):le&&he(le.bind(n))}if(Ne(og,p),Ne(ag,y),Ne(lg,w),Ne(ug,V),Ne(rg,k),Ne(sg,U),Ne(pg,_),Ne(dg,ge),Ne(fg,A),Ne(cg,q),Ne(vh,z),Ne(hg,T),oe(I))if(I.length){const he=t.exposed||(t.exposed={});I.forEach(le=>{Object.defineProperty(he,le,{get:()=>n[le],set:pt=>n[le]=pt})})}else t.exposed||(t.exposed={});ce&&t.render===$t&&(t.render=ce),b!=null&&(t.inheritAttrs=b),S&&(t.components=S),v&&(t.directives=v),T&&_h(t)}function vg(t,e,n=$t){oe(t)&&(t=Bo(t));for(const r in t){const s=t[r];let o;Oe(s)?"default"in s?o=en(s.from||r,s.default,!0):o=en(s.from||r):o=en(s),nt(o)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function su(t,e,n){Ht(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Th(t,e,n,r){let s=r.includes(".")?kh(n,r):()=>n[r];if(Ue(t)){const o=e[t];ie(o)&&Ws(s,o)}else if(ie(t))Ws(s,t.bind(n));else if(Oe(t))if(oe(t))t.forEach(o=>Th(o,e,n,r));else{const o=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(o)&&Ws(s,o,t)}}function wh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,l=o.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(f=>ii(c,f,a,!0)),ii(c,e,a)),Oe(e)&&o.set(e,c),c}function ii(t,e,n,r=!1){const{mixins:s,extends:o}=e;o&&ii(t,o,n,!0),s&&s.forEach(a=>ii(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=Tg[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const Tg={data:iu,props:ou,emits:ou,methods:Br,computed:Br,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:Br,directives:Br,watch:Ig,provide:iu,inject:wg};function iu(t,e){return e?t?function(){return rt(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function wg(t,e){return Br(Bo(t),Bo(e))}function Bo(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ot(t,e){return t?[...new Set([].concat(t,e))]:e}function Br(t,e){return t?rt(Object.create(null),t,e):e}function ou(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:rt(Object.create(null),ru(t),ru(e??{})):e}function Ig(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const r in e)n[r]=ot(t[r],e[r]);return n}function Ih(){return{app:null,config:{isNativeTag:up,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ag=0;function bg(t,e){return function(r,s=null){ie(r)||(r=rt({},r)),s!=null&&!Oe(s)&&(s=null);const o=Ih(),a=new WeakSet,l=[];let c=!1;const f=o.app={_uid:Ag++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:om,get config(){return o.config},set config(d){},use(d,...p){return a.has(d)||(d&&ie(d.install)?(a.add(d),d.install(f,...p)):ie(d)&&(a.add(d),d(f,...p))),f},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),f},component(d,p){return p?(o.components[d]=p,f):o.components[d]},directive(d,p){return p?(o.directives[d]=p,f):o.directives[d]},mount(d,p,y){if(!c){const w=f._ceVNode||ut(r,s);return w.appContext=o,y===!0?y="svg":y===!1&&(y=void 0),t(w,d,y),c=!0,f._container=d,d.__vue_app__=f,Oi(w.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Ht(l,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(d,p){return o.provides[d]=p,f},runWithContext(d){const p=ur;ur=f;try{return d()}finally{ur=p}}};return f}}let ur=null;function Gs(t,e){if(tt){let n=tt.provides;const r=tt.parent&&tt.parent.provides;r===n&&(n=tt.provides=Object.create(r)),n[t]=e}}function en(t,e,n=!1){const r=tt||yt;if(r||ur){const s=ur?ur._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ie(e)?e.call(r&&r.proxy):e}}const Ah={},bh=()=>Object.create(Ah),Rh=t=>Object.getPrototypeOf(t)===Ah;function Rg(t,e,n,r=!1){const s={},o=bh();t.propsDefaults=Object.create(null),Sh(t,e,s,o);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:ih(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function Sg(t,e,n,r){const{props:s,attrs:o,vnode:{patchFlag:a}}=t,l=Ee(s),[c]=t.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let y=d[p];if(Di(t.emitsOptions,y))continue;const w=e[y];if(c)if(ve(o,y))w!==o[y]&&(o[y]=w,f=!0);else{const V=Rt(y);s[V]=jo(c,l,V,w,t,!1)}else w!==o[y]&&(o[y]=w,f=!0)}}}else{Sh(t,e,s,o)&&(f=!0);let d;for(const p in l)(!e||!ve(e,p)&&((d=An(p))===p||!ve(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=jo(c,l,p,void 0,t,!0)):delete s[p]);if(o!==l)for(const p in o)(!e||!ve(e,p))&&(delete o[p],f=!0)}f&&Jt(t.attrs,"set","")}function Sh(t,e,n,r){const[s,o]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(qr(c))continue;const f=e[c];let d;s&&ve(s,d=Rt(c))?!o||!o.includes(d)?n[d]=f:(l||(l={}))[d]=f:Di(t.emitsOptions,c)||(!(c in r)||f!==r[c])&&(r[c]=f,a=!0)}if(o){const c=Ee(n),f=l||Ie;for(let d=0;d<o.length;d++){const p=o[d];n[p]=jo(s,c,p,f[p],t,!ve(f,p))}}return a}function jo(t,e,n,r,s,o){const a=t[n];if(a!=null){const l=ve(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ie(c)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const d=_s(s);r=f[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(o&&!l?r=!1:a[1]&&(r===""||r===An(n))&&(r=!0))}return r}const Cg=new WeakMap;function Ch(t,e,n=!1){const r=n?Cg:e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},l=[];let c=!1;if(!ie(t)){const d=p=>{c=!0;const[y,w]=Ch(p,e,!0);rt(a,y),w&&l.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!o&&!c)return Oe(t)&&r.set(t,or),or;if(oe(o))for(let d=0;d<o.length;d++){const p=Rt(o[d]);au(p)&&(a[p]=Ie)}else if(o)for(const d in o){const p=Rt(d);if(au(p)){const y=o[d],w=a[p]=oe(y)||ie(y)?{type:y}:rt({},y),V=w.type;let k=!1,U=!0;if(oe(V))for(let G=0;G<V.length;++G){const q=V[G],W=ie(q)&&q.name;if(W==="Boolean"){k=!0;break}else W==="String"&&(U=!1)}else k=ie(V)&&V.name==="Boolean";w[0]=k,w[1]=U,(k||ve(w,"default"))&&l.push(p)}}const f=[a,l];return Oe(t)&&r.set(t,f),f}function au(t){return t[0]!=="$"&&!qr(t)}const Ph=t=>t[0]==="_"||t==="$stable",Ra=t=>oe(t)?t.map(jt):[jt(t)],Pg=(t,e,n)=>{if(e._n)return e;const r=Lo((...s)=>Ra(e(...s)),n);return r._c=!1,r},Vh=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ph(s))continue;const o=t[s];if(ie(o))e[s]=Pg(s,o,r);else if(o!=null){const a=Ra(o);e[s]=()=>a}}},Dh=(t,e)=>{const n=Ra(e);t.slots.default=()=>n},xh=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Vg=(t,e,n)=>{const r=t.slots=bh();if(t.vnode.shapeFlag&32){const s=e._;s?(xh(r,e,n),n&&qc(r,"_",s,!0)):Vh(e,r)}else e&&Dh(t,e)},Dg=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=Ie;if(r.shapeFlag&32){const l=e._;l?n&&l===1?o=!1:xh(s,e,n):(o=!e.$stable,Vh(e,s)),a=e}else e&&(Dh(t,e),a={default:1});if(o)for(const l in s)!Ph(l)&&a[l]==null&&delete s[l]},mt=zg;function xg(t){return Og(t)}function Og(t,e){const n=Si();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:a,createText:l,createComment:c,setText:f,setElementText:d,parentNode:p,nextSibling:y,setScopeId:w=$t,insertStaticContent:V}=t,k=(m,E,R,x=null,N=null,O=null,H=void 0,j=null,B=!!E.dynamicChildren)=>{if(m===E)return;m&&!Lr(m,E)&&(x=D(m),Ce(m,N,O,!0),m=null),E.patchFlag===-2&&(B=!1,E.dynamicChildren=null);const{type:L,ref:ee,shapeFlag:Q}=E;switch(L){case xi:U(m,E,R,x);break;case os:G(m,E,R,x);break;case po:m==null&&q(E,R,x,H);break;case Pt:S(m,E,R,x,N,O,H,j,B);break;default:Q&1?ce(m,E,R,x,N,O,H,j,B):Q&6?v(m,E,R,x,N,O,H,j,B):(Q&64||Q&128)&&L.process(m,E,R,x,N,O,H,j,B,Y)}ee!=null&&N&&si(ee,m&&m.ref,O,E||m,!E)},U=(m,E,R,x)=>{if(m==null)r(E.el=l(E.children),R,x);else{const N=E.el=m.el;E.children!==m.children&&f(N,E.children)}},G=(m,E,R,x)=>{m==null?r(E.el=c(E.children||""),R,x):E.el=m.el},q=(m,E,R,x)=>{[m.el,m.anchor]=V(m.children,E,R,x,m.el,m.anchor)},W=({el:m,anchor:E},R,x)=>{let N;for(;m&&m!==E;)N=y(m),r(m,R,x),m=N;r(E,R,x)},z=({el:m,anchor:E})=>{let R;for(;m&&m!==E;)R=y(m),s(m),m=R;s(E)},ce=(m,E,R,x,N,O,H,j,B)=>{E.type==="svg"?H="svg":E.type==="math"&&(H="mathml"),m==null?ge(E,R,x,N,O,H,j,B):T(m,E,N,O,H,j,B)},ge=(m,E,R,x,N,O,H,j)=>{let B,L;const{props:ee,shapeFlag:Q,transition:Z,dirs:ne}=m;if(B=m.el=a(m.type,O,ee&&ee.is,ee),Q&8?d(B,m.children):Q&16&&_(m.children,B,null,x,N,fo(m,O),H,j),ne&&xn(m,null,x,"created"),A(B,m,m.scopeId,H,x),ee){for(const se in ee)se!=="value"&&!qr(se)&&o(B,se,null,ee[se],O,x);"value"in ee&&o(B,"value",null,ee.value,O),(L=ee.onVnodeBeforeMount)&&Ft(L,x,m)}ne&&xn(m,null,x,"beforeMount");const te=Ng(N,Z);te&&Z.beforeEnter(B),r(B,E,R),((L=ee&&ee.onVnodeMounted)||te||ne)&&mt(()=>{L&&Ft(L,x,m),te&&Z.enter(B),ne&&xn(m,null,x,"mounted")},N)},A=(m,E,R,x,N)=>{if(R&&w(m,R),x)for(let O=0;O<x.length;O++)w(m,x[O]);if(N){let O=N.subTree;if(E===O||Fh(O.type)&&(O.ssContent===E||O.ssFallback===E)){const H=N.vnode;A(m,H,H.scopeId,H.slotScopeIds,N.parent)}}},_=(m,E,R,x,N,O,H,j,B=0)=>{for(let L=B;L<m.length;L++){const ee=m[L]=j?pn(m[L]):jt(m[L]);k(null,ee,E,R,x,N,O,H,j)}},T=(m,E,R,x,N,O,H)=>{const j=E.el=m.el;let{patchFlag:B,dynamicChildren:L,dirs:ee}=E;B|=m.patchFlag&16;const Q=m.props||Ie,Z=E.props||Ie;let ne;if(R&&On(R,!1),(ne=Z.onVnodeBeforeUpdate)&&Ft(ne,R,E,m),ee&&xn(E,m,R,"beforeUpdate"),R&&On(R,!0),(Q.innerHTML&&Z.innerHTML==null||Q.textContent&&Z.textContent==null)&&d(j,""),L?I(m.dynamicChildren,L,j,R,x,fo(E,N),O):H||le(m,E,j,null,R,x,fo(E,N),O,!1),B>0){if(B&16)b(j,Q,Z,R,N);else if(B&2&&Q.class!==Z.class&&o(j,"class",null,Z.class,N),B&4&&o(j,"style",Q.style,Z.style,N),B&8){const te=E.dynamicProps;for(let se=0;se<te.length;se++){const fe=te[se],Ge=Q[fe],Be=Z[fe];(Be!==Ge||fe==="value")&&o(j,fe,Ge,Be,N,R)}}B&1&&m.children!==E.children&&d(j,E.children)}else!H&&L==null&&b(j,Q,Z,R,N);((ne=Z.onVnodeUpdated)||ee)&&mt(()=>{ne&&Ft(ne,R,E,m),ee&&xn(E,m,R,"updated")},x)},I=(m,E,R,x,N,O,H)=>{for(let j=0;j<E.length;j++){const B=m[j],L=E[j],ee=B.el&&(B.type===Pt||!Lr(B,L)||B.shapeFlag&70)?p(B.el):R;k(B,L,ee,null,x,N,O,H,!0)}},b=(m,E,R,x,N)=>{if(E!==R){if(E!==Ie)for(const O in E)!qr(O)&&!(O in R)&&o(m,O,E[O],null,N,x);for(const O in R){if(qr(O))continue;const H=R[O],j=E[O];H!==j&&O!=="value"&&o(m,O,j,H,N,x)}"value"in R&&o(m,"value",E.value,R.value,N)}},S=(m,E,R,x,N,O,H,j,B)=>{const L=E.el=m?m.el:l(""),ee=E.anchor=m?m.anchor:l("");let{patchFlag:Q,dynamicChildren:Z,slotScopeIds:ne}=E;ne&&(j=j?j.concat(ne):ne),m==null?(r(L,R,x),r(ee,R,x),_(E.children||[],R,ee,N,O,H,j,B)):Q>0&&Q&64&&Z&&m.dynamicChildren?(I(m.dynamicChildren,Z,R,N,O,H,j),(E.key!=null||N&&E===N.subTree)&&Oh(m,E,!0)):le(m,E,R,ee,N,O,H,j,B)},v=(m,E,R,x,N,O,H,j,B)=>{E.slotScopeIds=j,m==null?E.shapeFlag&512?N.ctx.activate(E,R,x,H,B):st(E,R,x,N,O,H,B):vt(m,E,B)},st=(m,E,R,x,N,O,H)=>{const j=m.component=Zg(m,x,N);if(yh(m)&&(j.ctx.renderer=Y),em(j,!1,H),j.asyncDep){if(N&&N.registerDep(j,Ne,H),!m.el){const B=j.subTree=ut(os);G(null,B,E,R)}}else Ne(j,m,E,R,N,O,H)},vt=(m,E,R)=>{const x=E.component=m.component;if(qg(m,E,R))if(x.asyncDep&&!x.asyncResolved){he(x,E,R);return}else x.next=E,x.update();else E.el=m.el,x.vnode=E},Ne=(m,E,R,x,N,O,H)=>{const j=()=>{if(m.isMounted){let{next:Q,bu:Z,u:ne,parent:te,vnode:se}=m;{const We=Nh(m);if(We){Q&&(Q.el=se.el,he(m,Q,H)),We.asyncDep.then(()=>{m.isUnmounted||j()});return}}let fe=Q,Ge;On(m,!1),Q?(Q.el=se.el,he(m,Q,H)):Q=se,Z&&Ks(Z),(Ge=Q.props&&Q.props.onVnodeBeforeUpdate)&&Ft(Ge,te,Q,se),On(m,!0);const Be=uu(m),wt=m.subTree;m.subTree=Be,k(wt,Be,p(wt.el),D(wt),m,N,O),Q.el=Be.el,fe===null&&Hg(m,Be.el),ne&&mt(ne,N),(Ge=Q.props&&Q.props.onVnodeUpdated)&&mt(()=>Ft(Ge,te,Q,se),N)}else{let Q;const{el:Z,props:ne}=E,{bm:te,m:se,parent:fe,root:Ge,type:Be}=m,wt=Gr(E);On(m,!1),te&&Ks(te),!wt&&(Q=ne&&ne.onVnodeBeforeMount)&&Ft(Q,fe,E),On(m,!0);{Ge.ce&&Ge.ce._injectChildStyle(Be);const We=m.subTree=uu(m);k(null,We,R,x,m,N,O),E.el=We.el}if(se&&mt(se,N),!wt&&(Q=ne&&ne.onVnodeMounted)){const We=E;mt(()=>Ft(Q,fe,We),N)}(E.shapeFlag&256||fe&&Gr(fe.vnode)&&fe.vnode.shapeFlag&256)&&m.a&&mt(m.a,N),m.isMounted=!0,E=R=x=null}};m.scope.on();const B=m.effect=new zc(j);m.scope.off();const L=m.update=B.run.bind(B),ee=m.job=B.runIfDirty.bind(B);ee.i=m,ee.id=m.uid,B.scheduler=()=>Aa(ee),On(m,!0),L()},he=(m,E,R)=>{E.component=m;const x=m.vnode.props;m.vnode=E,m.next=null,Sg(m,E.props,x,R),Dg(m,E.children,R),bn(),eu(m),Rn()},le=(m,E,R,x,N,O,H,j,B=!1)=>{const L=m&&m.children,ee=m?m.shapeFlag:0,Q=E.children,{patchFlag:Z,shapeFlag:ne}=E;if(Z>0){if(Z&128){St(L,Q,R,x,N,O,H,j,B);return}else if(Z&256){pt(L,Q,R,x,N,O,H,j,B);return}}ne&8?(ee&16&&ct(L,N,O),Q!==L&&d(R,Q)):ee&16?ne&16?St(L,Q,R,x,N,O,H,j,B):ct(L,N,O,!0):(ee&8&&d(R,""),ne&16&&_(Q,R,x,N,O,H,j,B))},pt=(m,E,R,x,N,O,H,j,B)=>{m=m||or,E=E||or;const L=m.length,ee=E.length,Q=Math.min(L,ee);let Z;for(Z=0;Z<Q;Z++){const ne=E[Z]=B?pn(E[Z]):jt(E[Z]);k(m[Z],ne,R,null,N,O,H,j,B)}L>ee?ct(m,N,O,!0,!1,Q):_(E,R,x,N,O,H,j,B,Q)},St=(m,E,R,x,N,O,H,j,B)=>{let L=0;const ee=E.length;let Q=m.length-1,Z=ee-1;for(;L<=Q&&L<=Z;){const ne=m[L],te=E[L]=B?pn(E[L]):jt(E[L]);if(Lr(ne,te))k(ne,te,R,null,N,O,H,j,B);else break;L++}for(;L<=Q&&L<=Z;){const ne=m[Q],te=E[Z]=B?pn(E[Z]):jt(E[Z]);if(Lr(ne,te))k(ne,te,R,null,N,O,H,j,B);else break;Q--,Z--}if(L>Q){if(L<=Z){const ne=Z+1,te=ne<ee?E[ne].el:x;for(;L<=Z;)k(null,E[L]=B?pn(E[L]):jt(E[L]),R,te,N,O,H,j,B),L++}}else if(L>Z)for(;L<=Q;)Ce(m[L],N,O,!0),L++;else{const ne=L,te=L,se=new Map;for(L=te;L<=Z;L++){const je=E[L]=B?pn(E[L]):jt(E[L]);je.key!=null&&se.set(je.key,L)}let fe,Ge=0;const Be=Z-te+1;let wt=!1,We=0;const ln=new Array(Be);for(L=0;L<Be;L++)ln[L]=0;for(L=ne;L<=Q;L++){const je=m[L];if(Ge>=Be){Ce(je,N,O,!0);continue}let It;if(je.key!=null)It=se.get(je.key);else for(fe=te;fe<=Z;fe++)if(ln[fe-te]===0&&Lr(je,E[fe])){It=fe;break}It===void 0?Ce(je,N,O,!0):(ln[It-te]=L+1,It>=We?We=It:wt=!0,k(je,E[It],R,null,N,O,H,j,B),Ge++)}const Ir=wt?Mg(ln):or;for(fe=Ir.length-1,L=Be-1;L>=0;L--){const je=te+L,It=E[je],ws=je+1<ee?E[je+1].el:x;ln[L]===0?k(null,It,R,ws,N,O,H,j,B):wt&&(fe<0||L!==Ir[fe]?Tt(It,R,ws,2):fe--)}}},Tt=(m,E,R,x,N=null)=>{const{el:O,type:H,transition:j,children:B,shapeFlag:L}=m;if(L&6){Tt(m.component.subTree,E,R,x);return}if(L&128){m.suspense.move(E,R,x);return}if(L&64){H.move(m,E,R,Y);return}if(H===Pt){r(O,E,R);for(let Q=0;Q<B.length;Q++)Tt(B[Q],E,R,x);r(m.anchor,E,R);return}if(H===po){W(m,E,R);return}if(x!==2&&L&1&&j)if(x===0)j.beforeEnter(O),r(O,E,R),mt(()=>j.enter(O),N);else{const{leave:Q,delayLeave:Z,afterLeave:ne}=j,te=()=>r(O,E,R),se=()=>{Q(O,()=>{te(),ne&&ne()})};Z?Z(O,te,se):se()}else r(O,E,R)},Ce=(m,E,R,x=!1,N=!1)=>{const{type:O,props:H,ref:j,children:B,dynamicChildren:L,shapeFlag:ee,patchFlag:Q,dirs:Z,cacheIndex:ne}=m;if(Q===-2&&(N=!1),j!=null&&si(j,null,R,m,!0),ne!=null&&(E.renderCache[ne]=void 0),ee&256){E.ctx.deactivate(m);return}const te=ee&1&&Z,se=!Gr(m);let fe;if(se&&(fe=H&&H.onVnodeBeforeUnmount)&&Ft(fe,E,m),ee&6)Lt(m.component,R,x);else{if(ee&128){m.suspense.unmount(R,x);return}te&&xn(m,null,E,"beforeUnmount"),ee&64?m.type.remove(m,E,R,Y,x):L&&!L.hasOnce&&(O!==Pt||Q>0&&Q&64)?ct(L,E,R,!1,!0):(O===Pt&&Q&384||!N&&ee&16)&&ct(B,E,R),x&&Pe(m)}(se&&(fe=H&&H.onVnodeUnmounted)||te)&&mt(()=>{fe&&Ft(fe,E,m),te&&xn(m,null,E,"unmounted")},R)},Pe=m=>{const{type:E,el:R,anchor:x,transition:N}=m;if(E===Pt){an(R,x);return}if(E===po){z(m);return}const O=()=>{s(R),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(m.shapeFlag&1&&N&&!N.persisted){const{leave:H,delayLeave:j}=N,B=()=>H(R,O);j?j(m.el,O,B):B()}else O()},an=(m,E)=>{let R;for(;m!==E;)R=y(m),s(m),m=R;s(E)},Lt=(m,E,R)=>{const{bum:x,scope:N,job:O,subTree:H,um:j,m:B,a:L}=m;lu(B),lu(L),x&&Ks(x),N.stop(),O&&(O.flags|=8,Ce(H,m,E,R)),j&&mt(j,E),mt(()=>{m.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},ct=(m,E,R,x=!1,N=!1,O=0)=>{for(let H=O;H<m.length;H++)Ce(m[H],E,R,x,N)},D=m=>{if(m.shapeFlag&6)return D(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const E=y(m.anchor||m.el),R=E&&E[tg];return R?y(R):E};let X=!1;const K=(m,E,R)=>{m==null?E._vnode&&Ce(E._vnode,null,null,!0):k(E._vnode||null,m,E,null,null,null,R),E._vnode=m,X||(X=!0,eu(),dh(),X=!1)},Y={p:k,um:Ce,m:Tt,r:Pe,mt:st,mc:_,pc:le,pbc:I,n:D,o:t};return{render:K,hydrate:void 0,createApp:bg(K)}}function fo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function On({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ng(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Oh(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let o=0;o<r.length;o++){const a=r[o];let l=s[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[o]=pn(s[o]),l.el=a.el),!n&&l.patchFlag!==-2&&Oh(a,l)),l.type===xi&&(l.el=a.el)}}function Mg(t){const e=t.slice(),n=[0];let r,s,o,a,l;const c=t.length;for(r=0;r<c;r++){const f=t[r];if(f!==0){if(s=n[n.length-1],t[s]<f){e[r]=s,n.push(r);continue}for(o=0,a=n.length-1;o<a;)l=o+a>>1,t[n[l]]<f?o=l+1:a=l;f<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function Nh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Nh(e)}function lu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const kg=Symbol.for("v-scx"),Lg=()=>en(kg);function Ws(t,e,n){return Mh(t,e,n)}function Mh(t,e,n=Ie){const{immediate:r,deep:s,flush:o,once:a}=n,l=rt({},n),c=e&&r||!e&&o!=="post";let f;if(ls){if(o==="sync"){const w=Lg();f=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=$t,w.resume=$t,w.pause=$t,w}}const d=tt;l.call=(w,V,k)=>Ht(w,d,V,k);let p=!1;o==="post"?l.scheduler=w=>{mt(w,d&&d.suspense)}:o!=="sync"&&(p=!0,l.scheduler=(w,V)=>{V?w():Aa(w)}),l.augmentJob=w=>{e&&(w.flags|=4),p&&(w.flags|=2,d&&(w.id=d.uid,w.i=d))};const y=Xp(t,e,l);return ls&&(f?f.push(y):c&&y()),y}function Fg(t,e,n){const r=this.proxy,s=Ue(t)?t.includes(".")?kh(r,t):()=>r[t]:t.bind(r,r);let o;ie(e)?o=e:(o=e.handler,n=e);const a=_s(this),l=Mh(s,o.bind(r),n);return a(),l}function kh(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ug=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Rt(e)}Modifiers`]||t[`${An(e)}Modifiers`];function Bg(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ie;let s=n;const o=e.startsWith("update:"),a=o&&Ug(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>Ue(d)?d.trim():d)),a.number&&(s=n.map(Do)));let l,c=r[l=ao(e)]||r[l=ao(Rt(e))];!c&&o&&(c=r[l=ao(An(e))]),c&&Ht(c,t,6,s);const f=r[l+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ht(f,t,6,s)}}function Lh(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const o=t.emits;let a={},l=!1;if(!ie(t)){const c=f=>{const d=Lh(f,e,!0);d&&(l=!0,rt(a,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!o&&!l?(Oe(t)&&r.set(t,null),null):(oe(o)?o.forEach(c=>a[c]=null):rt(a,o),Oe(t)&&r.set(t,a),a)}function Di(t,e){return!t||!Ii(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(t,e[0].toLowerCase()+e.slice(1))||ve(t,An(e))||ve(t,e))}function uu(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:f,renderCache:d,props:p,data:y,setupState:w,ctx:V,inheritAttrs:k}=t,U=ri(t);let G,q;try{if(n.shapeFlag&4){const z=s||r,ce=z;G=jt(f.call(ce,z,d,p,w,y,V)),q=l}else{const z=e;G=jt(z.length>1?z(p,{attrs:l,slots:a,emit:c}):z(p,null)),q=e.props?l:jg(l)}}catch(z){Qr.length=0,Pi(z,t,1),G=ut(os)}let W=G;if(q&&k!==!1){const z=Object.keys(q),{shapeFlag:ce}=W;z.length&&ce&7&&(o&&z.some(ha)&&(q=$g(q,o)),W=hr(W,q,!1,!0))}return n.dirs&&(W=hr(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&ba(W,n.transition),G=W,ri(U),G}const jg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ii(n))&&((e||(e={}))[n]=t[n]);return e},$g=(t,e)=>{const n={};for(const r in t)(!ha(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function qg(t,e,n){const{props:r,children:s,component:o}=t,{props:a,children:l,patchFlag:c}=e,f=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?cu(r,a,f):!!a;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const y=d[p];if(a[y]!==r[y]&&!Di(f,y))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?cu(r,a,f):!0:!!a;return!1}function cu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(e[o]!==t[o]&&!Di(n,o))return!0}return!1}function Hg({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Fh=t=>t.__isSuspense;function zg(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):Zp(t)}const Pt=Symbol.for("v-fgt"),xi=Symbol.for("v-txt"),os=Symbol.for("v-cmt"),po=Symbol.for("v-stc"),Qr=[];let Et=null;function Uh(t=!1){Qr.push(Et=t?null:[])}function Kg(){Qr.pop(),Et=Qr[Qr.length-1]||null}let as=1;function hu(t,e=!1){as+=t,t<0&&Et&&e&&(Et.hasOnce=!0)}function Gg(t){return t.dynamicChildren=as>0?Et||or:null,Kg(),as>0&&Et&&Et.push(t),t}function Bh(t,e,n,r,s,o){return Gg(At(t,e,n,r,s,o,!0))}function oi(t){return t?t.__v_isVNode===!0:!1}function Lr(t,e){return t.type===e.type&&t.key===e.key}const jh=({key:t})=>t??null,Qs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||nt(t)||ie(t)?{i:yt,r:t,k:e,f:!!n}:t:null);function At(t,e=null,n=null,r=0,s=null,o=t===Pt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jh(e),ref:e&&Qs(e),scopeId:gh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:yt};return l?(Sa(c,n),o&128&&t.normalize(c)):n&&(c.shapeFlag|=Ue(n)?8:16),as>0&&!a&&Et&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Et.push(c),c}const ut=Wg;function Wg(t,e=null,n=null,r=0,s=null,o=!1){if((!t||t===mg)&&(t=os),oi(t)){const l=hr(t,e,!0);return n&&Sa(l,n),as>0&&!o&&Et&&(l.shapeFlag&6?Et[Et.indexOf(t)]=l:Et.push(l)),l.patchFlag=-2,l}if(im(t)&&(t=t.__vccOpts),e){e=Qg(e);let{class:l,style:c}=e;l&&!Ue(l)&&(e.class=ga(l)),Oe(c)&&(Ia(c)&&!oe(c)&&(c=rt({},c)),e.style=pa(c))}const a=Ue(t)?1:Fh(t)?128:ng(t)?64:Oe(t)?4:ie(t)?2:0;return At(t,e,n,r,s,a,o,!0)}function Qg(t){return t?Ia(t)||Rh(t)?rt({},t):t:null}function hr(t,e,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:l,transition:c}=t,f=e?Xg(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&jh(f),ref:e&&e.ref?n&&o?oe(o)?o.concat(Qs(e)):[o,Qs(e)]:Qs(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hr(t.ssContent),ssFallback:t.ssFallback&&hr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&ba(d,c.clone(d)),d}function $o(t=" ",e=0){return ut(xi,null,t,e)}function jt(t){return t==null||typeof t=="boolean"?ut(os):oe(t)?ut(Pt,null,t.slice()):oi(t)?pn(t):ut(xi,null,String(t))}function pn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hr(t)}function Sa(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Sa(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Rh(e)?e._ctx=yt:s===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),r&64?(n=16,e=[$o(e)]):n=8);t.children=e,t.shapeFlag|=n}function Xg(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ga([e.class,r.class]));else if(s==="style")e.style=pa([e.style,r.style]);else if(Ii(s)){const o=e[s],a=r[s];a&&o!==a&&!(oe(o)&&o.includes(a))&&(e[s]=o?[].concat(o,a):a)}else s!==""&&(e[s]=r[s])}return e}function Ft(t,e,n,r=null){Ht(t,e,7,[n,r])}const Yg=Ih();let Jg=0;function Zg(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Yg,o={uid:Jg++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ip(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ch(r,s),emitsOptions:Lh(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Bg.bind(null,o),t.ce&&t.ce(o),o}let tt=null,ai,qo;{const t=Si(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),o=>{s.length>1?s.forEach(a=>a(o)):s[0](o)}};ai=e("__VUE_INSTANCE_SETTERS__",n=>tt=n),qo=e("__VUE_SSR_SETTERS__",n=>ls=n)}const _s=t=>{const e=tt;return ai(t),t.scope.on(),()=>{t.scope.off(),ai(e)}},fu=()=>{tt&&tt.scope.off(),ai(null)};function $h(t){return t.vnode.shapeFlag&4}let ls=!1;function em(t,e=!1,n=!1){e&&qo(e);const{props:r,children:s}=t.vnode,o=$h(t);Rg(t,r,o,e),Vg(t,s,n);const a=o?tm(t,e):void 0;return e&&qo(!1),a}function tm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,yg);const{setup:r}=n;if(r){bn();const s=t.setupContext=r.length>1?rm(t):null,o=_s(t),a=ms(r,t,0,[t.props,s]),l=$c(a);if(Rn(),o(),(l||t.sp)&&!Gr(t)&&_h(t),l){if(a.then(fu,fu),e)return a.then(c=>{du(t,c)}).catch(c=>{Pi(c,t,0)});t.asyncDep=a}else du(t,a)}else qh(t)}function du(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=uh(e)),qh(t)}function qh(t,e,n){const r=t.type;t.render||(t.render=r.render||$t);{const s=_s(t);bn();try{Eg(t)}finally{Rn(),s()}}}const nm={get(t,e){return Ze(t,"get",""),t[e]}};function rm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,nm),slots:t.slots,emit:t.emit,expose:e}}function Oi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(uh(qp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wr)return Wr[n](t)},has(e,n){return n in e||n in Wr}})):t.proxy}function sm(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function im(t){return ie(t)&&"__vccOpts"in t}const Dt=(t,e)=>Wp(t,e,ls);function Hh(t,e,n){const r=arguments.length;return r===2?Oe(e)&&!oe(e)?oi(e)?ut(t,null,[e]):ut(t,e):ut(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&oi(n)&&(n=[n]),ut(t,e,n))}const om="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ho;const pu=typeof window<"u"&&window.trustedTypes;if(pu)try{Ho=pu.createPolicy("vue",{createHTML:t=>t})}catch{}const zh=Ho?t=>Ho.createHTML(t):t=>t,am="http://www.w3.org/2000/svg",lm="http://www.w3.org/1998/Math/MathML",Yt=typeof document<"u"?document:null,gu=Yt&&Yt.createElement("template"),um={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Yt.createElementNS(am,t):e==="mathml"?Yt.createElementNS(lm,t):n?Yt.createElement(t,{is:n}):Yt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Yt.createTextNode(t),createComment:t=>Yt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Yt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,o){const a=n?n.previousSibling:e.lastChild;if(s&&(s===o||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{gu.innerHTML=zh(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=gu.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},cm=Symbol("_vtc");function hm(t,e,n){const r=t[cm];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const mu=Symbol("_vod"),fm=Symbol("_vsh"),dm=Symbol(""),pm=/(^|;)\s*display\s*:/;function gm(t,e,n){const r=t.style,s=Ue(n);let o=!1;if(n&&!s){if(e)if(Ue(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Xs(r,l,"")}else for(const a in e)n[a]==null&&Xs(r,a,"");for(const a in n)a==="display"&&(o=!0),Xs(r,a,n[a])}else if(s){if(e!==n){const a=r[dm];a&&(n+=";"+a),r.cssText=n,o=pm.test(n)}}else e&&t.removeAttribute("style");mu in t&&(t[mu]=o?r.display:"",t[fm]&&(r.display="none"))}const _u=/\s*!important$/;function Xs(t,e,n){if(oe(n))n.forEach(r=>Xs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=mm(t,e);_u.test(n)?t.setProperty(An(r),n.replace(_u,""),"important"):t[r]=n}}const yu=["Webkit","Moz","ms"],go={};function mm(t,e){const n=go[e];if(n)return n;let r=Rt(e);if(r!=="filter"&&r in t)return go[e]=r;r=Ri(r);for(let s=0;s<yu.length;s++){const o=yu[s]+r;if(o in t)return go[e]=o}return e}const Eu="http://www.w3.org/1999/xlink";function vu(t,e,n,r,s,o=wp(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Eu,e.slice(6,e.length)):t.setAttributeNS(Eu,e,n):n==null||o&&!Hc(n)?t.removeAttribute(e):t.setAttribute(e,o?"":vr(n)?String(n):n)}function Tu(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?zh(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Hc(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function nr(t,e,n,r){t.addEventListener(e,n,r)}function _m(t,e,n,r){t.removeEventListener(e,n,r)}const wu=Symbol("_vei");function ym(t,e,n,r,s=null){const o=t[wu]||(t[wu]={}),a=o[e];if(r&&a)a.value=r;else{const[l,c]=Em(e);if(r){const f=o[e]=wm(r,s);nr(t,l,f,c)}else a&&(_m(t,l,a,c),o[e]=void 0)}}const Iu=/(?:Once|Passive|Capture)$/;function Em(t){let e;if(Iu.test(t)){e={};let r;for(;r=t.match(Iu);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):An(t.slice(2)),e]}let mo=0;const vm=Promise.resolve(),Tm=()=>mo||(vm.then(()=>mo=0),mo=Date.now());function wm(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ht(Im(r,n.value),e,5,[r])};return n.value=t,n.attached=Tm(),n}function Im(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Au=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Am=(t,e,n,r,s,o)=>{const a=s==="svg";e==="class"?hm(t,r,a):e==="style"?gm(t,n,r):Ii(e)?ha(e)||ym(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bm(t,e,r,a))?(Tu(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&vu(t,e,r,a,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ue(r))?Tu(t,Rt(e),r,o,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),vu(t,e,r,a))};function bm(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Au(e)&&ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Au(e)&&Ue(n)?!1:e in t}const bu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>Ks(e,n):e};function Rm(t){t.target.composing=!0}function Ru(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _o=Symbol("_assign"),Sm={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[_o]=bu(s);const o=r||s.props&&s.props.type==="number";nr(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),o&&(l=Do(l)),t[_o](l)}),n&&nr(t,"change",()=>{t.value=t.value.trim()}),e||(nr(t,"compositionstart",Rm),nr(t,"compositionend",Ru),nr(t,"change",Ru))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(t[_o]=bu(a),t.composing)return;const l=(o||t.type==="number")&&!/^0\d/.test(t.value)?Do(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Cm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Pm=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const o=An(s.key);if(e.some(a=>a===o||Cm[a]===o))return t(s)})},Vm=rt({patchProp:Am},um);let Su;function Dm(){return Su||(Su=xg(Vm))}const xm=(...t)=>{const e=Dm().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Nm(r);if(!s)return;const o=e._component;!ie(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Om(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Om(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Nm(t){return Ue(t)?document.querySelector(t):t}var Cu={};/**
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
 */const Kh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Mm=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Gh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,f=c?t[s+2]:0,d=o>>2,p=(o&3)<<4|l>>4;let y=(l&15)<<2|f>>6,w=f&63;c||(w=64,a||(y=64)),r.push(n[d],n[p],n[y],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Mm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const f=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||l==null||f==null||p==null)throw new km;const y=o<<2|l>>4;if(r.push(y),f!==64){const w=l<<4&240|f>>2;if(r.push(w),p!==64){const V=f<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class km extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lm=function(t){const e=Kh(t);return Gh.encodeByteArray(e,!0)},li=function(t){return Lm(t).replace(/\./g,"")},Fm=function(t){try{return Gh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Um(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bm=()=>Um().__FIREBASE_DEFAULTS__,jm=()=>{if(typeof process>"u"||typeof Cu>"u")return;const t=Cu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$m=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fm(t[1]);return e&&JSON.parse(e)},Ca=()=>{try{return Bm()||jm()||$m()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qm=t=>{var e,n;return(n=(e=Ca())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Hm=t=>{const e=qm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Wh=()=>{var t;return(t=Ca())===null||t===void 0?void 0:t.config};/**
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
 */class zm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Km(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[li(JSON.stringify(n)),li(JSON.stringify(a)),""].join(".")}/**
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
 */function Gm(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wm(){var t;const e=(t=Ca())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Xm(){return!Wm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Qh(){try{return typeof indexedDB=="object"}catch{return!1}}function Xh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function Ym(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Jm="FirebaseError";class Sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Jm,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?Zm(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Sn(s,l,r)}}function Zm(t,e){return t.replace(e_,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const e_=/\{\$([^}]+)}/g;function zo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],a=e[s];if(Pu(o)&&Pu(a)){if(!zo(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Pu(t){return t!==null&&typeof t=="object"}/**
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
 */const t_=1e3,n_=2,r_=4*60*60*1e3,s_=.5;function Vu(t,e=t_,n=n_){const r=e*Math.pow(n,t),s=Math.round(s_*r*(Math.random()-.5)*2);return Math.min(r_,r+s)}/**
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
 */function fr(t){return t&&t._delegate?t._delegate:t}class rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mn="[DEFAULT]";/**
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
 */class i_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(a_(e))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=Mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mn){return this.instances.has(e)}getOptions(e=Mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:o_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mn){return this.component?this.component.multipleInstances?e:Mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o_(t){return t===Mn?void 0:t}function a_(t){return t.instantiationMode==="EAGER"}/**
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
 */class l_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new i_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const u_={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},c_=pe.INFO,h_={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},f_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=h_[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pa{constructor(e){this.name=e,this._logLevel=c_,this._logHandler=f_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?u_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const d_=(t,e)=>e.some(n=>t instanceof n);let Du,xu;function p_(){return Du||(Du=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function g_(){return xu||(xu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yh=new WeakMap,Ko=new WeakMap,Jh=new WeakMap,yo=new WeakMap,Va=new WeakMap;function m_(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(_n(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Yh.set(n,t)}).catch(()=>{}),Va.set(e,t),e}function __(t){if(Ko.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});Ko.set(t,e)}let Go={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ko.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function y_(t){Go=t(Go)}function E_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Eo(this),e,...n);return Jh.set(r,e.sort?e.sort():[e]),_n(r)}:g_().includes(t)?function(...e){return t.apply(Eo(this),e),_n(Yh.get(this))}:function(...e){return _n(t.apply(Eo(this),e))}}function v_(t){return typeof t=="function"?E_(t):(t instanceof IDBTransaction&&__(t),d_(t,p_())?new Proxy(t,Go):t)}function _n(t){if(t instanceof IDBRequest)return m_(t);if(yo.has(t))return yo.get(t);const e=v_(t);return e!==t&&(yo.set(t,e),Va.set(e,t)),e}const Eo=t=>Va.get(t);function Zh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),l=_n(a);return r&&a.addEventListener("upgradeneeded",c=>{r(_n(a.result),c.oldVersion,c.newVersion,_n(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const T_=["get","getKey","getAll","getAllKeys","count"],w_=["put","add","delete","clear"],vo=new Map;function Ou(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vo.get(e))return vo.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=w_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||T_.includes(n)))return;const o=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),s&&c.done]))[0]};return vo.set(e,o),o}y_(t=>({...t,get:(e,n,r)=>Ou(e,n)||t.get(e,n,r),has:(e,n)=>!!Ou(e,n)||t.has(e,n)}));/**
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
 */class I_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(A_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function A_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wo="@firebase/app",Nu="0.10.18";/**
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
 */const sn=new Pa("@firebase/app"),b_="@firebase/app-compat",R_="@firebase/analytics-compat",S_="@firebase/analytics",C_="@firebase/app-check-compat",P_="@firebase/app-check",V_="@firebase/auth",D_="@firebase/auth-compat",x_="@firebase/database",O_="@firebase/data-connect",N_="@firebase/database-compat",M_="@firebase/functions",k_="@firebase/functions-compat",L_="@firebase/installations",F_="@firebase/installations-compat",U_="@firebase/messaging",B_="@firebase/messaging-compat",j_="@firebase/performance",$_="@firebase/performance-compat",q_="@firebase/remote-config",H_="@firebase/remote-config-compat",z_="@firebase/storage",K_="@firebase/storage-compat",G_="@firebase/firestore",W_="@firebase/vertexai",Q_="@firebase/firestore-compat",X_="firebase",Y_="11.2.0";/**
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
 */const Qo="[DEFAULT]",J_={[Wo]:"fire-core",[b_]:"fire-core-compat",[S_]:"fire-analytics",[R_]:"fire-analytics-compat",[P_]:"fire-app-check",[C_]:"fire-app-check-compat",[V_]:"fire-auth",[D_]:"fire-auth-compat",[x_]:"fire-rtdb",[O_]:"fire-data-connect",[N_]:"fire-rtdb-compat",[M_]:"fire-fn",[k_]:"fire-fn-compat",[L_]:"fire-iid",[F_]:"fire-iid-compat",[U_]:"fire-fcm",[B_]:"fire-fcm-compat",[j_]:"fire-perf",[$_]:"fire-perf-compat",[q_]:"fire-rc",[H_]:"fire-rc-compat",[z_]:"fire-gcs",[K_]:"fire-gcs-compat",[G_]:"fire-fst",[Q_]:"fire-fst-compat",[W_]:"fire-vertex","fire-js":"fire-js",[X_]:"fire-js-all"};/**
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
 */const ui=new Map,Z_=new Map,Xo=new Map;function Mu(t,e){try{t.container.addComponent(e)}catch(n){sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vn(t){const e=t.name;if(Xo.has(e))return sn.debug(`There were multiple attempts to register component ${e}.`),!1;Xo.set(e,t);for(const n of ui.values())Mu(n,t);for(const n of Z_.values())Mu(n,t);return!0}function Da(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ey={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yn=new Ni("app","Firebase",ey);/**
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
 */class ty{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yn.create("app-deleted",{appName:this._name})}}/**
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
 */const ny=Y_;function ef(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qo,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw yn.create("bad-app-name",{appName:String(s)});if(n||(n=Wh()),!n)throw yn.create("no-options");const o=ui.get(s);if(o){if(zo(n,o.options)&&zo(r,o.config))return o;throw yn.create("duplicate-app",{appName:s})}const a=new l_(s);for(const c of Xo.values())a.addComponent(c);const l=new ty(n,r,a);return ui.set(s,l),l}function ry(t=Qo){const e=ui.get(t);if(!e&&t===Qo&&Wh())return ef();if(!e)throw yn.create("no-app",{appName:t});return e}function qt(t,e,n){var r;let s=(r=J_[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${e}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sn.warn(l.join(" "));return}vn(new rn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const sy="firebase-heartbeat-database",iy=1,us="firebase-heartbeat-store";let To=null;function tf(){return To||(To=Zh(sy,iy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(us)}catch(n){console.warn(n)}}}}).catch(t=>{throw yn.create("idb-open",{originalErrorMessage:t.message})})),To}async function oy(t){try{const n=(await tf()).transaction(us),r=await n.objectStore(us).get(nf(t));return await n.done,r}catch(e){if(e instanceof Sn)sn.warn(e.message);else{const n=yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sn.warn(n.message)}}}async function ku(t,e){try{const r=(await tf()).transaction(us,"readwrite");await r.objectStore(us).put(e,nf(t)),await r.done}catch(n){if(n instanceof Sn)sn.warn(n.message);else{const r=yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sn.warn(r.message)}}}function nf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ay=1024,ly=30*24*60*60*1e3;class uy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Lu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=ly}),this._storage.overwrite(this._heartbeatsCache))}catch(r){sn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lu(),{heartbeatsToSend:r,unsentEntries:s}=cy(this._heartbeatsCache.heartbeats),o=li(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return sn.warn(n),""}}}function Lu(){return new Date().toISOString().substring(0,10)}function cy(t,e=ay){const n=[];let r=t.slice();for(const s of t){const o=n.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Fu(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Fu(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qh()?Xh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await oy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ku(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ku(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Fu(t){return li(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function fy(t){vn(new rn("platform-logger",e=>new I_(e),"PRIVATE")),vn(new rn("heartbeat",e=>new uy(e),"PRIVATE")),qt(Wo,Nu,t),qt(Wo,Nu,"esm2017"),qt("fire-js","")}fy("");var dy="firebase",py="11.2.0";/**
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
 */qt(dy,py,"app");var Uu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xa;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function T(){}T.prototype=_.prototype,A.D=_.prototype,A.prototype=new T,A.prototype.constructor=A,A.C=function(I,b,S){for(var v=Array(arguments.length-2),st=2;st<arguments.length;st++)v[st-2]=arguments[st];return _.prototype[b].apply(I,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,_,T){T||(T=0);var I=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)I[b]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(b=0;16>b;++b)I[b]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=A.g[0],T=A.g[1],b=A.g[2];var S=A.g[3],v=_+(S^T&(b^S))+I[0]+3614090360&4294967295;_=T+(v<<7&4294967295|v>>>25),v=S+(b^_&(T^b))+I[1]+3905402710&4294967295,S=_+(v<<12&4294967295|v>>>20),v=b+(T^S&(_^T))+I[2]+606105819&4294967295,b=S+(v<<17&4294967295|v>>>15),v=T+(_^b&(S^_))+I[3]+3250441966&4294967295,T=b+(v<<22&4294967295|v>>>10),v=_+(S^T&(b^S))+I[4]+4118548399&4294967295,_=T+(v<<7&4294967295|v>>>25),v=S+(b^_&(T^b))+I[5]+1200080426&4294967295,S=_+(v<<12&4294967295|v>>>20),v=b+(T^S&(_^T))+I[6]+2821735955&4294967295,b=S+(v<<17&4294967295|v>>>15),v=T+(_^b&(S^_))+I[7]+4249261313&4294967295,T=b+(v<<22&4294967295|v>>>10),v=_+(S^T&(b^S))+I[8]+1770035416&4294967295,_=T+(v<<7&4294967295|v>>>25),v=S+(b^_&(T^b))+I[9]+2336552879&4294967295,S=_+(v<<12&4294967295|v>>>20),v=b+(T^S&(_^T))+I[10]+4294925233&4294967295,b=S+(v<<17&4294967295|v>>>15),v=T+(_^b&(S^_))+I[11]+2304563134&4294967295,T=b+(v<<22&4294967295|v>>>10),v=_+(S^T&(b^S))+I[12]+1804603682&4294967295,_=T+(v<<7&4294967295|v>>>25),v=S+(b^_&(T^b))+I[13]+4254626195&4294967295,S=_+(v<<12&4294967295|v>>>20),v=b+(T^S&(_^T))+I[14]+2792965006&4294967295,b=S+(v<<17&4294967295|v>>>15),v=T+(_^b&(S^_))+I[15]+1236535329&4294967295,T=b+(v<<22&4294967295|v>>>10),v=_+(b^S&(T^b))+I[1]+4129170786&4294967295,_=T+(v<<5&4294967295|v>>>27),v=S+(T^b&(_^T))+I[6]+3225465664&4294967295,S=_+(v<<9&4294967295|v>>>23),v=b+(_^T&(S^_))+I[11]+643717713&4294967295,b=S+(v<<14&4294967295|v>>>18),v=T+(S^_&(b^S))+I[0]+3921069994&4294967295,T=b+(v<<20&4294967295|v>>>12),v=_+(b^S&(T^b))+I[5]+3593408605&4294967295,_=T+(v<<5&4294967295|v>>>27),v=S+(T^b&(_^T))+I[10]+38016083&4294967295,S=_+(v<<9&4294967295|v>>>23),v=b+(_^T&(S^_))+I[15]+3634488961&4294967295,b=S+(v<<14&4294967295|v>>>18),v=T+(S^_&(b^S))+I[4]+3889429448&4294967295,T=b+(v<<20&4294967295|v>>>12),v=_+(b^S&(T^b))+I[9]+568446438&4294967295,_=T+(v<<5&4294967295|v>>>27),v=S+(T^b&(_^T))+I[14]+3275163606&4294967295,S=_+(v<<9&4294967295|v>>>23),v=b+(_^T&(S^_))+I[3]+4107603335&4294967295,b=S+(v<<14&4294967295|v>>>18),v=T+(S^_&(b^S))+I[8]+1163531501&4294967295,T=b+(v<<20&4294967295|v>>>12),v=_+(b^S&(T^b))+I[13]+2850285829&4294967295,_=T+(v<<5&4294967295|v>>>27),v=S+(T^b&(_^T))+I[2]+4243563512&4294967295,S=_+(v<<9&4294967295|v>>>23),v=b+(_^T&(S^_))+I[7]+1735328473&4294967295,b=S+(v<<14&4294967295|v>>>18),v=T+(S^_&(b^S))+I[12]+2368359562&4294967295,T=b+(v<<20&4294967295|v>>>12),v=_+(T^b^S)+I[5]+4294588738&4294967295,_=T+(v<<4&4294967295|v>>>28),v=S+(_^T^b)+I[8]+2272392833&4294967295,S=_+(v<<11&4294967295|v>>>21),v=b+(S^_^T)+I[11]+1839030562&4294967295,b=S+(v<<16&4294967295|v>>>16),v=T+(b^S^_)+I[14]+4259657740&4294967295,T=b+(v<<23&4294967295|v>>>9),v=_+(T^b^S)+I[1]+2763975236&4294967295,_=T+(v<<4&4294967295|v>>>28),v=S+(_^T^b)+I[4]+1272893353&4294967295,S=_+(v<<11&4294967295|v>>>21),v=b+(S^_^T)+I[7]+4139469664&4294967295,b=S+(v<<16&4294967295|v>>>16),v=T+(b^S^_)+I[10]+3200236656&4294967295,T=b+(v<<23&4294967295|v>>>9),v=_+(T^b^S)+I[13]+681279174&4294967295,_=T+(v<<4&4294967295|v>>>28),v=S+(_^T^b)+I[0]+3936430074&4294967295,S=_+(v<<11&4294967295|v>>>21),v=b+(S^_^T)+I[3]+3572445317&4294967295,b=S+(v<<16&4294967295|v>>>16),v=T+(b^S^_)+I[6]+76029189&4294967295,T=b+(v<<23&4294967295|v>>>9),v=_+(T^b^S)+I[9]+3654602809&4294967295,_=T+(v<<4&4294967295|v>>>28),v=S+(_^T^b)+I[12]+3873151461&4294967295,S=_+(v<<11&4294967295|v>>>21),v=b+(S^_^T)+I[15]+530742520&4294967295,b=S+(v<<16&4294967295|v>>>16),v=T+(b^S^_)+I[2]+3299628645&4294967295,T=b+(v<<23&4294967295|v>>>9),v=_+(b^(T|~S))+I[0]+4096336452&4294967295,_=T+(v<<6&4294967295|v>>>26),v=S+(T^(_|~b))+I[7]+1126891415&4294967295,S=_+(v<<10&4294967295|v>>>22),v=b+(_^(S|~T))+I[14]+2878612391&4294967295,b=S+(v<<15&4294967295|v>>>17),v=T+(S^(b|~_))+I[5]+4237533241&4294967295,T=b+(v<<21&4294967295|v>>>11),v=_+(b^(T|~S))+I[12]+1700485571&4294967295,_=T+(v<<6&4294967295|v>>>26),v=S+(T^(_|~b))+I[3]+2399980690&4294967295,S=_+(v<<10&4294967295|v>>>22),v=b+(_^(S|~T))+I[10]+4293915773&4294967295,b=S+(v<<15&4294967295|v>>>17),v=T+(S^(b|~_))+I[1]+2240044497&4294967295,T=b+(v<<21&4294967295|v>>>11),v=_+(b^(T|~S))+I[8]+1873313359&4294967295,_=T+(v<<6&4294967295|v>>>26),v=S+(T^(_|~b))+I[15]+4264355552&4294967295,S=_+(v<<10&4294967295|v>>>22),v=b+(_^(S|~T))+I[6]+2734768916&4294967295,b=S+(v<<15&4294967295|v>>>17),v=T+(S^(b|~_))+I[13]+1309151649&4294967295,T=b+(v<<21&4294967295|v>>>11),v=_+(b^(T|~S))+I[4]+4149444226&4294967295,_=T+(v<<6&4294967295|v>>>26),v=S+(T^(_|~b))+I[11]+3174756917&4294967295,S=_+(v<<10&4294967295|v>>>22),v=b+(_^(S|~T))+I[2]+718787259&4294967295,b=S+(v<<15&4294967295|v>>>17),v=T+(S^(b|~_))+I[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(b+(v<<21&4294967295|v>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+S&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var T=_-this.blockSize,I=this.B,b=this.h,S=0;S<_;){if(b==0)for(;S<=T;)s(this,A,S),S+=this.blockSize;if(typeof A=="string"){for(;S<_;)if(I[b++]=A.charCodeAt(S++),b==this.blockSize){s(this,I),b=0;break}}else for(;S<_;)if(I[b++]=A[S++],b==this.blockSize){s(this,I),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var T=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=T&255,T/=256;for(this.u(A),A=Array(16),_=T=0;4>_;++_)for(var I=0;32>I;I+=8)A[T++]=this.g[_]>>>I&255;return A};function o(A,_){var T=l;return Object.prototype.hasOwnProperty.call(T,A)?T[A]:T[A]=_(A)}function a(A,_){this.h=_;for(var T=[],I=!0,b=A.length-1;0<=b;b--){var S=A[b]|0;I&&S==_||(T[b]=S,I=!1)}this.g=T}var l={};function c(A){return-128<=A&&128>A?o(A,function(_){return new a([_|0],0>_?-1:0)}):new a([A|0],0>A?-1:0)}function f(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return U(f(-A));for(var _=[],T=1,I=0;A>=T;I++)_[I]=A/T|0,T*=4294967296;return new a(_,0)}function d(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return U(d(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=f(Math.pow(_,8)),I=p,b=0;b<A.length;b+=8){var S=Math.min(8,A.length-b),v=parseInt(A.substring(b,b+S),_);8>S?(S=f(Math.pow(_,S)),I=I.j(S).add(f(v))):(I=I.j(T),I=I.add(f(v)))}return I}var p=c(0),y=c(1),w=c(16777216);t=a.prototype,t.m=function(){if(k(this))return-U(this).m();for(var A=0,_=1,T=0;T<this.g.length;T++){var I=this.i(T);A+=(0<=I?I:4294967296+I)*_,_*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(V(this))return"0";if(k(this))return"-"+U(this).toString(A);for(var _=f(Math.pow(A,6)),T=this,I="";;){var b=z(T,_).g;T=G(T,b.j(_));var S=((0<T.g.length?T.g[0]:T.h)>>>0).toString(A);if(T=b,V(T))return S+I;for(;6>S.length;)S="0"+S;I=S+I}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function V(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function k(A){return A.h==-1}t.l=function(A){return A=G(this,A),k(A)?-1:V(A)?0:1};function U(A){for(var _=A.g.length,T=[],I=0;I<_;I++)T[I]=~A.g[I];return new a(T,~A.h).add(y)}t.abs=function(){return k(this)?U(this):this},t.add=function(A){for(var _=Math.max(this.g.length,A.g.length),T=[],I=0,b=0;b<=_;b++){var S=I+(this.i(b)&65535)+(A.i(b)&65535),v=(S>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);I=v>>>16,S&=65535,v&=65535,T[b]=v<<16|S}return new a(T,T[T.length-1]&-2147483648?-1:0)};function G(A,_){return A.add(U(_))}t.j=function(A){if(V(this)||V(A))return p;if(k(this))return k(A)?U(this).j(U(A)):U(U(this).j(A));if(k(A))return U(this.j(U(A)));if(0>this.l(w)&&0>A.l(w))return f(this.m()*A.m());for(var _=this.g.length+A.g.length,T=[],I=0;I<2*_;I++)T[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<A.g.length;b++){var S=this.i(I)>>>16,v=this.i(I)&65535,st=A.i(b)>>>16,vt=A.i(b)&65535;T[2*I+2*b]+=v*vt,q(T,2*I+2*b),T[2*I+2*b+1]+=S*vt,q(T,2*I+2*b+1),T[2*I+2*b+1]+=v*st,q(T,2*I+2*b+1),T[2*I+2*b+2]+=S*st,q(T,2*I+2*b+2)}for(I=0;I<_;I++)T[I]=T[2*I+1]<<16|T[2*I];for(I=_;I<2*_;I++)T[I]=0;return new a(T,0)};function q(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function W(A,_){this.g=A,this.h=_}function z(A,_){if(V(_))throw Error("division by zero");if(V(A))return new W(p,p);if(k(A))return _=z(U(A),_),new W(U(_.g),U(_.h));if(k(_))return _=z(A,U(_)),new W(U(_.g),_.h);if(30<A.g.length){if(k(A)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var T=y,I=_;0>=I.l(A);)T=ce(T),I=ce(I);var b=ge(T,1),S=ge(I,1);for(I=ge(I,2),T=ge(T,2);!V(I);){var v=S.add(I);0>=v.l(A)&&(b=b.add(T),S=v),I=ge(I,1),T=ge(T,1)}return _=G(A,b.j(_)),new W(b,_)}for(b=p;0<=A.l(_);){for(T=Math.max(1,Math.floor(A.m()/_.m())),I=Math.ceil(Math.log(T)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),S=f(T),v=S.j(_);k(v)||0<v.l(A);)T-=I,S=f(T),v=S.j(_);V(S)&&(S=y),b=b.add(S),A=G(A,v)}return new W(b,A)}t.A=function(A){return z(this,A).h},t.and=function(A){for(var _=Math.max(this.g.length,A.g.length),T=[],I=0;I<_;I++)T[I]=this.i(I)&A.i(I);return new a(T,this.h&A.h)},t.or=function(A){for(var _=Math.max(this.g.length,A.g.length),T=[],I=0;I<_;I++)T[I]=this.i(I)|A.i(I);return new a(T,this.h|A.h)},t.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),T=[],I=0;I<_;I++)T[I]=this.i(I)^A.i(I);return new a(T,this.h^A.h)};function ce(A){for(var _=A.g.length+1,T=[],I=0;I<_;I++)T[I]=A.i(I)<<1|A.i(I-1)>>>31;return new a(T,A.h)}function ge(A,_){var T=_>>5;_%=32;for(var I=A.g.length-T,b=[],S=0;S<I;S++)b[S]=0<_?A.i(S+T)>>>_|A.i(S+T+1)<<32-_:A.i(S+T);return new a(b,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,xa=a}).apply(typeof Uu<"u"?Uu:typeof self<"u"?self:typeof window<"u"?window:{});var js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rf,jr,sf,Ys,Yo,of,af,lf;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,h){return i==Array.prototype||i==Object.prototype||(i[u]=h.value),i};function n(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof js=="object"&&js];for(var u=0;u<i.length;++u){var h=i[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(i,u){if(u)e:{var h=r;i=i.split(".");for(var g=0;g<i.length-1;g++){var C=i[g];if(!(C in h))break e;h=h[C]}i=i[i.length-1],g=h[i],u=u(g),u!=g&&u!=null&&e(h,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var h=0,g=!1,C={next:function(){if(!g&&h<i.length){var P=h++;return{value:u(P,i[P]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function f(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function d(i,u,h){return i.call.apply(i.bind,arguments)}function p(i,u,h){if(!i)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),i.apply(u,C)}}return function(){return i.apply(u,arguments)}}function y(i,u,h){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,y.apply(null,arguments)}function w(i,u){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),i.apply(this,g)}}function V(i,u){function h(){}h.prototype=u.prototype,i.aa=u.prototype,i.prototype=new h,i.prototype.constructor=i,i.Qb=function(g,C,P){for(var $=Array(arguments.length-2),we=2;we<arguments.length;we++)$[we-2]=arguments[we];return u.prototype[C].apply(g,$)}}function k(i){const u=i.length;if(0<u){const h=Array(u);for(let g=0;g<u;g++)h[g]=i[g];return h}return[]}function U(i,u){for(let h=1;h<arguments.length;h++){const g=arguments[h];if(c(g)){const C=i.length||0,P=g.length||0;i.length=C+P;for(let $=0;$<P;$++)i[C+$]=g[$]}else i.push(g)}}class G{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function q(i){return/^[\s\xa0]*$/.test(i)}function W(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function z(i){return z[" "](i),i}z[" "]=function(){};var ce=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function ge(i,u,h){for(const g in i)u.call(h,i[g],g,i)}function A(i,u){for(const h in i)u.call(void 0,i[h],h,i)}function _(i){const u={};for(const h in i)u[h]=i[h];return u}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(i,u){let h,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(h in g)i[h]=g[h];for(let P=0;P<T.length;P++)h=T[P],Object.prototype.hasOwnProperty.call(g,h)&&(i[h]=g[h])}}function b(i){var u=1;i=i.split(":");const h=[];for(;0<u&&i.length;)h.push(i.shift()),u--;return i.length&&h.push(i.join(":")),h}function S(i){l.setTimeout(()=>{throw i},0)}function v(){var i=pt;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class st{constructor(){this.h=this.g=null}add(u,h){const g=vt.get();g.set(u,h),this.h?this.h.next=g:this.g=g,this.h=g}}var vt=new G(()=>new Ne,i=>i.reset());class Ne{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let he,le=!1,pt=new st,St=()=>{const i=l.Promise.resolve(void 0);he=()=>{i.then(Tt)}};var Tt=()=>{for(var i;i=v();){try{i.h.call(i.g)}catch(h){S(h)}var u=vt;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}le=!1};function Ce(){this.s=this.s,this.C=this.C}Ce.prototype.s=!1,Ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pe(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var an=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};l.addEventListener("test",h,u),l.removeEventListener("test",h,u)}catch{}return i}();function Lt(i,u){if(Pe.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var h=this.type=i.type,g=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(ce){e:{try{z(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else h=="mouseover"?u=i.fromElement:h=="mouseout"&&(u=i.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:ct[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Lt.aa.h.call(this)}}V(Lt,Pe);var ct={2:"touch",3:"pen",4:"mouse"};Lt.prototype.h=function(){Lt.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),X=0;function K(i,u,h,g,C){this.listener=i,this.proxy=null,this.src=u,this.type=h,this.capture=!!g,this.ha=C,this.key=++X,this.da=this.fa=!1}function Y(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function me(i){this.src=i,this.g={},this.h=0}me.prototype.add=function(i,u,h,g,C){var P=i.toString();i=this.g[P],i||(i=this.g[P]=[],this.h++);var $=E(i,u,g,C);return-1<$?(u=i[$],h||(u.fa=!1)):(u=new K(u,this.src,P,!!g,C),u.fa=h,i.push(u)),u};function m(i,u){var h=u.type;if(h in i.g){var g=i.g[h],C=Array.prototype.indexOf.call(g,u,void 0),P;(P=0<=C)&&Array.prototype.splice.call(g,C,1),P&&(Y(u),i.g[h].length==0&&(delete i.g[h],i.h--))}}function E(i,u,h,g){for(var C=0;C<i.length;++C){var P=i[C];if(!P.da&&P.listener==u&&P.capture==!!h&&P.ha==g)return C}return-1}var R="closure_lm_"+(1e6*Math.random()|0),x={};function N(i,u,h,g,C){if(Array.isArray(u)){for(var P=0;P<u.length;P++)N(i,u[P],h,g,C);return null}return h=ne(h),i&&i[D]?i.K(u,h,f(g)?!!g.capture:!1,C):O(i,u,h,!1,g,C)}function O(i,u,h,g,C,P){if(!u)throw Error("Invalid event type");var $=f(C)?!!C.capture:!!C,we=Q(i);if(we||(i[R]=we=new me(i)),h=we.add(u,h,g,$,P),h.proxy)return h;if(g=H(),h.proxy=g,g.src=i,g.listener=h,i.addEventListener)an||(C=$),C===void 0&&(C=!1),i.addEventListener(u.toString(),g,C);else if(i.attachEvent)i.attachEvent(L(u.toString()),g);else if(i.addListener&&i.removeListener)i.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function H(){function i(h){return u.call(i.src,i.listener,h)}const u=ee;return i}function j(i,u,h,g,C){if(Array.isArray(u))for(var P=0;P<u.length;P++)j(i,u[P],h,g,C);else g=f(g)?!!g.capture:!!g,h=ne(h),i&&i[D]?(i=i.i,u=String(u).toString(),u in i.g&&(P=i.g[u],h=E(P,h,g,C),-1<h&&(Y(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete i.g[u],i.h--)))):i&&(i=Q(i))&&(u=i.g[u.toString()],i=-1,u&&(i=E(u,h,g,C)),(h=-1<i?u[i]:null)&&B(h))}function B(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[D])m(u.i,i);else{var h=i.type,g=i.proxy;u.removeEventListener?u.removeEventListener(h,g,i.capture):u.detachEvent?u.detachEvent(L(h),g):u.addListener&&u.removeListener&&u.removeListener(g),(h=Q(u))?(m(h,i),h.h==0&&(h.src=null,u[R]=null)):Y(i)}}}function L(i){return i in x?x[i]:x[i]="on"+i}function ee(i,u){if(i.da)i=!0;else{u=new Lt(u,this);var h=i.listener,g=i.ha||i.src;i.fa&&B(i),i=h.call(g,u)}return i}function Q(i){return i=i[R],i instanceof me?i:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(i){return typeof i=="function"?i:(i[Z]||(i[Z]=function(u){return i.handleEvent(u)}),i[Z])}function te(){Ce.call(this),this.i=new me(this),this.M=this,this.F=null}V(te,Ce),te.prototype[D]=!0,te.prototype.removeEventListener=function(i,u,h,g){j(this,i,u,h,g)};function se(i,u){var h,g=i.F;if(g)for(h=[];g;g=g.F)h.push(g);if(i=i.M,g=u.type||u,typeof u=="string")u=new Pe(u,i);else if(u instanceof Pe)u.target=u.target||i;else{var C=u;u=new Pe(g,i),I(u,C)}if(C=!0,h)for(var P=h.length-1;0<=P;P--){var $=u.g=h[P];C=fe($,g,!0,u)&&C}if($=u.g=i,C=fe($,g,!0,u)&&C,C=fe($,g,!1,u)&&C,h)for(P=0;P<h.length;P++)$=u.g=h[P],C=fe($,g,!1,u)&&C}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var h=i.g[u],g=0;g<h.length;g++)Y(h[g]);delete i.g[u],i.h--}}this.F=null},te.prototype.K=function(i,u,h,g){return this.i.add(String(i),u,!1,h,g)},te.prototype.L=function(i,u,h,g){return this.i.add(String(i),u,!0,h,g)};function fe(i,u,h,g){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,P=0;P<u.length;++P){var $=u[P];if($&&!$.da&&$.capture==h){var we=$.listener,$e=$.ha||$.src;$.fa&&m(i.i,$),C=we.call($e,g)!==!1&&C}}return C&&!g.defaultPrevented}function Ge(i,u,h){if(typeof i=="function")h&&(i=y(i,h));else if(i&&typeof i.handleEvent=="function")i=y(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(i,u||0)}function Be(i){i.g=Ge(()=>{i.g=null,i.i&&(i.i=!1,Be(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class wt extends Ce{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Be(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function We(i){Ce.call(this),this.h=i,this.g={}}V(We,Ce);var ln=[];function Ir(i){ge(i.g,function(u,h){this.g.hasOwnProperty(h)&&B(u)},i),i.g={}}We.prototype.N=function(){We.aa.N.call(this),Ir(this)},We.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var je=l.JSON.stringify,It=l.JSON.parse,ws=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function Ki(){}Ki.prototype.h=null;function ol(i){return i.h||(i.h=i.i())}function al(){}var Ar={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gi(){Pe.call(this,"d")}V(Gi,Pe);function Wi(){Pe.call(this,"c")}V(Wi,Pe);var Cn={},ll=null;function Is(){return ll=ll||new te}Cn.La="serverreachability";function ul(i){Pe.call(this,Cn.La,i)}V(ul,Pe);function br(i){const u=Is();se(u,new ul(u))}Cn.STAT_EVENT="statevent";function cl(i,u){Pe.call(this,Cn.STAT_EVENT,i),this.stat=u}V(cl,Pe);function it(i){const u=Is();se(u,new cl(u,i))}Cn.Ma="timingevent";function hl(i,u){Pe.call(this,Cn.Ma,i),this.size=u}V(hl,Pe);function Rr(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},u)}function Sr(){this.g=!0}Sr.prototype.xa=function(){this.g=!1};function Bd(i,u,h,g,C,P){i.info(function(){if(i.g)if(P)for(var $="",we=P.split("&"),$e=0;$e<we.length;$e++){var _e=we[$e].split("=");if(1<_e.length){var Qe=_e[0];_e=_e[1];var Xe=Qe.split("_");$=2<=Xe.length&&Xe[1]=="type"?$+(Qe+"="+_e+"&"):$+(Qe+"=redacted&")}}else $=null;else $=P;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+h+`
`+$})}function jd(i,u,h,g,C,P,$){i.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+h+`
`+P+" "+$})}function Xn(i,u,h,g){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+qd(i,h)+(g?" "+g:"")})}function $d(i,u){i.info(function(){return"TIMEOUT: "+u})}Sr.prototype.info=function(){};function qd(i,u){if(!i.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(i=0;i<h.length;i++)if(Array.isArray(h[i])){var g=h[i];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var P=C[0];if(P!="noop"&&P!="stop"&&P!="close")for(var $=1;$<C.length;$++)C[$]=""}}}}return je(h)}catch{return u}}var As={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qi;function bs(){}V(bs,Ki),bs.prototype.g=function(){return new XMLHttpRequest},bs.prototype.i=function(){return{}},Qi=new bs;function un(i,u,h,g){this.j=i,this.i=u,this.l=h,this.R=g||1,this.U=new We(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new dl}function dl(){this.i=null,this.g="",this.h=!1}var pl={},Xi={};function Yi(i,u,h){i.L=1,i.v=Ps(Gt(u)),i.m=h,i.P=!0,gl(i,null)}function gl(i,u){i.F=Date.now(),Rs(i),i.A=Gt(i.v);var h=i.A,g=i.R;Array.isArray(g)||(g=[String(g)]),Pl(h.i,"t",g),i.C=0,h=i.j.J,i.h=new dl,i.g=Gl(i.j,h?u:null,!i.m),0<i.O&&(i.M=new wt(y(i.Y,i,i.g),i.O)),u=i.U,h=i.g,g=i.ca;var C="readystatechange";Array.isArray(C)||(C&&(ln[0]=C.toString()),C=ln);for(var P=0;P<C.length;P++){var $=N(h,C[P],g||u.handleEvent,!1,u.h||u);if(!$)break;u.g[$.key]=$}u=i.H?_(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),br(),Bd(i.i,i.u,i.A,i.l,i.R,i.m)}un.prototype.ca=function(i){i=i.target;const u=this.M;u&&Wt(i)==3?u.j():this.Y(i)},un.prototype.Y=function(i){try{if(i==this.g)e:{const Xe=Wt(this.g);var u=this.g.Ba();const Zn=this.g.Z();if(!(3>Xe)&&(Xe!=3||this.g&&(this.h.h||this.g.oa()||kl(this.g)))){this.J||Xe!=4||u==7||(u==8||0>=Zn?br(3):br(2)),Ji(this);var h=this.g.Z();this.X=h;t:if(ml(this)){var g=kl(this.g);i="";var C=g.length,P=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pn(this),Cr(this);var $="";break t}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,i+=this.h.i.decode(g[u],{stream:!(P&&u==C-1)});g.length=0,this.h.g+=i,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=h==200,jd(this.i,this.u,this.A,this.l,this.R,Xe,h),this.o){if(this.T&&!this.K){t:{if(this.g){var we,$e=this.g;if((we=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(we)){var _e=we;break t}}_e=null}if(h=_e)Xn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zi(this,h);else{this.o=!1,this.s=3,it(12),Pn(this),Cr(this);break e}}if(this.P){h=!0;let Ct;for(;!this.J&&this.C<$.length;)if(Ct=Hd(this,$),Ct==Xi){Xe==4&&(this.s=4,it(14),h=!1),Xn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==pl){this.s=4,it(15),Xn(this.i,this.l,$,"[Invalid Chunk]"),h=!1;break}else Xn(this.i,this.l,Ct,null),Zi(this,Ct);if(ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xe!=4||$.length!=0||this.h.h||(this.s=1,it(16),h=!1),this.o=this.o&&h,!h)Xn(this.i,this.l,$,"[Invalid Chunked Response]"),Pn(this),Cr(this);else if(0<$.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),io(Qe),Qe.M=!0,it(11))}}else Xn(this.i,this.l,$,null),Zi(this,$);Xe==4&&Pn(this),this.o&&!this.J&&(Xe==4?ql(this.j,this):(this.o=!1,Rs(this)))}else ap(this.g),h==400&&0<$.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),Pn(this),Cr(this)}}}catch{}finally{}};function ml(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Hd(i,u){var h=i.C,g=u.indexOf(`
`,h);return g==-1?Xi:(h=Number(u.substring(h,g)),isNaN(h)?pl:(g+=1,g+h>u.length?Xi:(u=u.slice(g,g+h),i.C=g+h,u)))}un.prototype.cancel=function(){this.J=!0,Pn(this)};function Rs(i){i.S=Date.now()+i.I,_l(i,i.I)}function _l(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Rr(y(i.ba,i),u)}function Ji(i){i.B&&(l.clearTimeout(i.B),i.B=null)}un.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?($d(this.i,this.A),this.L!=2&&(br(),it(17)),Pn(this),this.s=2,Cr(this)):_l(this,this.S-i)};function Cr(i){i.j.G==0||i.J||ql(i.j,i)}function Pn(i){Ji(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,Ir(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function Zi(i,u){try{var h=i.j;if(h.G!=0&&(h.g==i||eo(h.h,i))){if(!i.K&&eo(h.h,i)&&h.G==3){try{var g=h.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<i.F)Ms(h),Os(h);else break e;so(h),it(18)}}else h.za=C[1],0<h.za-h.T&&37500>C[2]&&h.F&&h.v==0&&!h.C&&(h.C=Rr(y(h.Za,h),6e3));if(1>=vl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Dn(h,11)}else if((i.K||h.g==i)&&Ms(h),!q(u))for(C=h.Da.g.parse(u),u=0;u<C.length;u++){let _e=C[u];if(h.T=_e[0],_e=_e[1],h.G==2)if(_e[0]=="c"){h.K=_e[1],h.ia=_e[2];const Qe=_e[3];Qe!=null&&(h.la=Qe,h.j.info("VER="+h.la));const Xe=_e[4];Xe!=null&&(h.Aa=Xe,h.j.info("SVER="+h.Aa));const Zn=_e[5];Zn!=null&&typeof Zn=="number"&&0<Zn&&(g=1.5*Zn,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const Ct=i.g;if(Ct){const Ls=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ls){var P=g.h;P.g||Ls.indexOf("spdy")==-1&&Ls.indexOf("quic")==-1&&Ls.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(to(P,P.h),P.h=null))}if(g.D){const oo=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;oo&&(g.ya=oo,Re(g.I,g.D,oo))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-i.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var $=i;if(g.qa=Kl(g,g.J?g.ia:null,g.W),$.K){Tl(g.h,$);var we=$,$e=g.L;$e&&(we.I=$e),we.B&&(Ji(we),Rs(we)),g.g=$}else jl(g);0<h.i.length&&Ns(h)}else _e[0]!="stop"&&_e[0]!="close"||Dn(h,7);else h.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?Dn(h,7):ro(h):_e[0]!="noop"&&h.l&&h.l.ta(_e),h.v=0)}}br(4)}catch{}}var zd=class{constructor(i,u){this.g=i,this.map=u}};function yl(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function El(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function vl(i){return i.h?1:i.g?i.g.size:0}function eo(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function to(i,u){i.g?i.g.add(u):i.h=u}function Tl(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}yl.prototype.cancel=function(){if(this.i=wl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function wl(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const h of i.g.values())u=u.concat(h.D);return u}return k(i.i)}function Kd(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(c(i)){for(var u=[],h=i.length,g=0;g<h;g++)u.push(i[g]);return u}u=[],h=0;for(g in i)u[h++]=i[g];return u}function Gd(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(c(i)||typeof i=="string"){var u=[];i=i.length;for(var h=0;h<i;h++)u.push(h);return u}u=[],h=0;for(const g in i)u[h++]=g;return u}}}function Il(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(c(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var h=Gd(i),g=Kd(i),C=g.length,P=0;P<C;P++)u.call(void 0,g[P],h&&h[P],i)}var Al=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wd(i,u){if(i){i=i.split("&");for(var h=0;h<i.length;h++){var g=i[h].indexOf("="),C=null;if(0<=g){var P=i[h].substring(0,g);C=i[h].substring(g+1)}else P=i[h];u(P,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Vn(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Vn){this.h=i.h,Ss(this,i.j),this.o=i.o,this.g=i.g,Cs(this,i.s),this.l=i.l;var u=i.i,h=new Dr;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),bl(this,h),this.m=i.m}else i&&(u=String(i).match(Al))?(this.h=!1,Ss(this,u[1]||"",!0),this.o=Pr(u[2]||""),this.g=Pr(u[3]||"",!0),Cs(this,u[4]),this.l=Pr(u[5]||"",!0),bl(this,u[6]||"",!0),this.m=Pr(u[7]||"")):(this.h=!1,this.i=new Dr(null,this.h))}Vn.prototype.toString=function(){var i=[],u=this.j;u&&i.push(Vr(u,Rl,!0),":");var h=this.g;return(h||u=="file")&&(i.push("//"),(u=this.o)&&i.push(Vr(u,Rl,!0),"@"),i.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&i.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(Vr(h,h.charAt(0)=="/"?Yd:Xd,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",Vr(h,Zd)),i.join("")};function Gt(i){return new Vn(i)}function Ss(i,u,h){i.j=h?Pr(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function Cs(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function bl(i,u,h){u instanceof Dr?(i.i=u,ep(i.i,i.h)):(h||(u=Vr(u,Jd)),i.i=new Dr(u,i.h))}function Re(i,u,h){i.i.set(u,h)}function Ps(i){return Re(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Pr(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Vr(i,u,h){return typeof i=="string"?(i=encodeURI(i).replace(u,Qd),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Qd(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Rl=/[#\/\?@]/g,Xd=/[#\?:]/g,Yd=/[#\?]/g,Jd=/[#\?@]/g,Zd=/#/g;function Dr(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function cn(i){i.g||(i.g=new Map,i.h=0,i.i&&Wd(i.i,function(u,h){i.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}t=Dr.prototype,t.add=function(i,u){cn(this),this.i=null,i=Yn(this,i);var h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(u),this.h+=1,this};function Sl(i,u){cn(i),u=Yn(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function Cl(i,u){return cn(i),u=Yn(i,u),i.g.has(u)}t.forEach=function(i,u){cn(this),this.g.forEach(function(h,g){h.forEach(function(C){i.call(u,C,g,this)},this)},this)},t.na=function(){cn(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let g=0;g<u.length;g++){const C=i[g];for(let P=0;P<C.length;P++)h.push(u[g])}return h},t.V=function(i){cn(this);let u=[];if(typeof i=="string")Cl(this,i)&&(u=u.concat(this.g.get(Yn(this,i))));else{i=Array.from(this.g.values());for(let h=0;h<i.length;h++)u=u.concat(i[h])}return u},t.set=function(i,u){return cn(this),this.i=null,i=Yn(this,i),Cl(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},t.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function Pl(i,u,h){Sl(i,u),0<h.length&&(i.i=null,i.g.set(Yn(i,u),k(h)),i.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var g=u[h];const P=encodeURIComponent(String(g)),$=this.V(g);for(g=0;g<$.length;g++){var C=P;$[g]!==""&&(C+="="+encodeURIComponent(String($[g]))),i.push(C)}}return this.i=i.join("&")};function Yn(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function ep(i,u){u&&!i.j&&(cn(i),i.i=null,i.g.forEach(function(h,g){var C=g.toLowerCase();g!=C&&(Sl(this,g),Pl(this,C,h))},i)),i.j=u}function tp(i,u){const h=new Sr;if(l.Image){const g=new Image;g.onload=w(hn,h,"TestLoadImage: loaded",!0,u,g),g.onerror=w(hn,h,"TestLoadImage: error",!1,u,g),g.onabort=w(hn,h,"TestLoadImage: abort",!1,u,g),g.ontimeout=w(hn,h,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=i}else u(!1)}function np(i,u){const h=new Sr,g=new AbortController,C=setTimeout(()=>{g.abort(),hn(h,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:g.signal}).then(P=>{clearTimeout(C),P.ok?hn(h,"TestPingServer: ok",!0,u):hn(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),hn(h,"TestPingServer: error",!1,u)})}function hn(i,u,h,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(h)}catch{}}function rp(){this.g=new ws}function sp(i,u,h){const g=h||"";try{Il(i,function(C,P){let $=C;f(C)&&($=je(C)),u.push(g+P+"="+encodeURIComponent($))})}catch(C){throw u.push(g+"type="+encodeURIComponent("_badmap")),C}}function Vs(i){this.l=i.Ub||null,this.j=i.eb||!1}V(Vs,Ki),Vs.prototype.g=function(){return new Ds(this.l,this.j)},Vs.prototype.i=function(i){return function(){return i}}({});function Ds(i,u){te.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Ds,te),t=Ds.prototype,t.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,Or(this)},t.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xr(this)),this.readyState=0},t.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Or(this)),this.g&&(this.readyState=3,Or(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vl(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vl(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}t.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?xr(this):Or(this),this.readyState==3&&Vl(this)}},t.Ra=function(i){this.g&&(this.response=this.responseText=i,xr(this))},t.Qa=function(i){this.g&&(this.response=i,xr(this))},t.ga=function(){this.g&&xr(this)};function xr(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Or(i)}t.setRequestHeader=function(i,u){this.u.append(i,u)},t.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=u.next();return i.join(`\r
`)};function Or(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Dl(i){let u="";return ge(i,function(h,g){u+=g,u+=":",u+=h,u+=`\r
`}),u}function no(i,u,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=Dl(h),typeof i=="string"?h!=null&&encodeURIComponent(String(h)):Re(i,u,h))}function Ve(i){te.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Ve,te);var ip=/^https?$/i,op=["POST","PUT"];t=Ve.prototype,t.Ha=function(i){this.J=i},t.ea=function(i,u,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qi.g(),this.v=this.o?ol(this.o):ol(Qi),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(P){xl(this,P);return}if(i=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)h.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())h.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),C=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(op,u,void 0))||g||C||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,$]of h)this.g.setRequestHeader(P,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ml(this),this.u=!0,this.g.send(i),this.u=!1}catch(P){xl(this,P)}};function xl(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,Ol(i),xs(i)}function Ol(i){i.A||(i.A=!0,se(i,"complete"),se(i,"error"))}t.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,se(this,"complete"),se(this,"abort"),xs(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xs(this,!0)),Ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Nl(this):this.bb())},t.bb=function(){Nl(this)};function Nl(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Wt(i)!=4||i.Z()!=2)){if(i.u&&Wt(i)==4)Ge(i.Ea,0,i);else if(se(i,"readystatechange"),Wt(i)==4){i.h=!1;try{const $=i.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var g;if(g=$===0){var C=String(i.D).match(Al)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!ip.test(C?C.toLowerCase():"")}h=g}if(h)se(i,"complete"),se(i,"success");else{i.m=6;try{var P=2<Wt(i)?i.g.statusText:""}catch{P=""}i.l=P+" ["+i.Z()+"]",Ol(i)}}finally{xs(i)}}}}function xs(i,u){if(i.g){Ml(i);const h=i.g,g=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||se(i,"ready");try{h.onreadystatechange=g}catch{}}}function Ml(i){i.I&&(l.clearTimeout(i.I),i.I=null)}t.isActive=function(){return!!this.g};function Wt(i){return i.g?i.g.readyState:0}t.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),It(u)}};function kl(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function ap(i){const u={};i=(i.g&&2<=Wt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<i.length;g++){if(q(i[g]))continue;var h=b(i[g]);const C=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=u[C]||[];u[C]=P,P.push(h)}A(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Nr(i,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||u}function Ll(i){this.Aa=0,this.i=[],this.j=new Sr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Nr("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Nr("baseRetryDelayMs",5e3,i),this.cb=Nr("retryDelaySeedMs",1e4,i),this.Wa=Nr("forwardChannelMaxRetries",2,i),this.wa=Nr("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new yl(i&&i.concurrentRequestLimit),this.Da=new rp,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ll.prototype,t.la=8,t.G=1,t.connect=function(i,u,h,g){it(0),this.W=i,this.H=u||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=Kl(this,null,this.W),Ns(this)};function ro(i){if(Fl(i),i.G==3){var u=i.U++,h=Gt(i.I);if(Re(h,"SID",i.K),Re(h,"RID",u),Re(h,"TYPE","terminate"),Mr(i,h),u=new un(i,i.j,u),u.L=2,u.v=Ps(Gt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=u.v,h=!0),h||(u.g=Gl(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Rs(u)}zl(i)}function Os(i){i.g&&(io(i),i.g.cancel(),i.g=null)}function Fl(i){Os(i),i.u&&(l.clearTimeout(i.u),i.u=null),Ms(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function Ns(i){if(!El(i.h)&&!i.s){i.s=!0;var u=i.Ga;he||St(),le||(he(),le=!0),pt.add(u,i),i.B=0}}function lp(i,u){return vl(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Rr(y(i.Ga,i,u),Hl(i,i.B)),i.B++,!0)}t.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const C=new un(this,this.j,i);let P=this.o;if(this.S&&(P?(P=_(P),I(P,this.S)):P=this.S),this.m!==null||this.O||(C.H=P,P=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=Bl(this,C,u),h=Gt(this.I),Re(h,"RID",i),Re(h,"CVER",22),this.D&&Re(h,"X-HTTP-Session-Id",this.D),Mr(this,h),P&&(this.O?u="headers="+encodeURIComponent(String(Dl(P)))+"&"+u:this.m&&no(h,this.m,P)),to(this.h,C),this.Ua&&Re(h,"TYPE","init"),this.P?(Re(h,"$req",u),Re(h,"SID","null"),C.T=!0,Yi(C,h,null)):Yi(C,h,u),this.G=2}}else this.G==3&&(i?Ul(this,i):this.i.length==0||El(this.h)||Ul(this))};function Ul(i,u){var h;u?h=u.l:h=i.U++;const g=Gt(i.I);Re(g,"SID",i.K),Re(g,"RID",h),Re(g,"AID",i.T),Mr(i,g),i.m&&i.o&&no(g,i.m,i.o),h=new un(i,i.j,h,i.B+1),i.m===null&&(h.H=i.o),u&&(i.i=u.D.concat(i.i)),u=Bl(i,h,1e3),h.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),to(i.h,h),Yi(h,g,u)}function Mr(i,u){i.H&&ge(i.H,function(h,g){Re(u,g,h)}),i.l&&Il({},function(h,g){Re(u,g,h)})}function Bl(i,u,h){h=Math.min(i.i.length,h);var g=i.l?y(i.l.Na,i.l,i):null;e:{var C=i.i;let P=-1;for(;;){const $=["count="+h];P==-1?0<h?(P=C[0].g,$.push("ofs="+P)):P=0:$.push("ofs="+P);let we=!0;for(let $e=0;$e<h;$e++){let _e=C[$e].g;const Qe=C[$e].map;if(_e-=P,0>_e)P=Math.max(0,C[$e].g-100),we=!1;else try{sp(Qe,$,"req"+_e+"_")}catch{g&&g(Qe)}}if(we){g=$.join("&");break e}}}return i=i.i.splice(0,h),u.D=i,g}function jl(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;he||St(),le||(he(),le=!0),pt.add(u,i),i.v=0}}function so(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Rr(y(i.Fa,i),Hl(i,i.v)),i.v++,!0)}t.Fa=function(){if(this.u=null,$l(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Rr(y(this.ab,this),i)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),Os(this),$l(this))};function io(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function $l(i){i.g=new un(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=Gt(i.qa);Re(u,"RID","rpc"),Re(u,"SID",i.K),Re(u,"AID",i.T),Re(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&Re(u,"TO",i.ja),Re(u,"TYPE","xmlhttp"),Mr(i,u),i.m&&i.o&&no(u,i.m,i.o),i.L&&(i.g.I=i.L);var h=i.g;i=i.ia,h.L=1,h.v=Ps(Gt(u)),h.m=null,h.P=!0,gl(h,i)}t.Za=function(){this.C!=null&&(this.C=null,Os(this),so(this),it(19))};function Ms(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function ql(i,u){var h=null;if(i.g==u){Ms(i),io(i),i.g=null;var g=2}else if(eo(i.h,u))h=u.D,Tl(i.h,u),g=1;else return;if(i.G!=0){if(u.o)if(g==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var C=i.B;g=Is(),se(g,new hl(g,h)),Ns(i)}else jl(i);else if(C=u.s,C==3||C==0&&0<u.X||!(g==1&&lp(i,u)||g==2&&so(i)))switch(h&&0<h.length&&(u=i.h,u.i=u.i.concat(h)),C){case 1:Dn(i,5);break;case 4:Dn(i,10);break;case 3:Dn(i,6);break;default:Dn(i,2)}}}function Hl(i,u){let h=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(h*=2),h*u}function Dn(i,u){if(i.j.info("Error code "+u),u==2){var h=y(i.fb,i),g=i.Xa;const C=!g;g=new Vn(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ss(g,"https"),Ps(g),C?tp(g.toString(),h):np(g.toString(),h)}else it(2);i.G=0,i.l&&i.l.sa(u),zl(i),Fl(i)}t.fb=function(i){i?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function zl(i){if(i.G=0,i.ka=[],i.l){const u=wl(i.h);(u.length!=0||i.i.length!=0)&&(U(i.ka,u),U(i.ka,i.i),i.h.i.length=0,k(i.i),i.i.length=0),i.l.ra()}}function Kl(i,u,h){var g=h instanceof Vn?Gt(h):new Vn(h);if(g.g!="")u&&(g.g=u+"."+g.g),Cs(g,g.s);else{var C=l.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var P=new Vn(null);g&&Ss(P,g),u&&(P.g=u),C&&Cs(P,C),h&&(P.l=h),g=P}return h=i.D,u=i.ya,h&&u&&Re(g,h,u),Re(g,"VER",i.la),Mr(i,g),g}function Gl(i,u,h){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new Ve(new Vs({eb:h})):new Ve(i.pa),u.Ha(i.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wl(){}t=Wl.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ks(){}ks.prototype.g=function(i,u){return new gt(i,u)};function gt(i,u){te.call(this),this.g=new Ll(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!q(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!q(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Jn(this)}V(gt,te),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){ro(this.g)},gt.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.u&&(h={},h.__data__=je(i),i=h);u.i.push(new zd(u.Ya++,i)),u.G==3&&Ns(u)},gt.prototype.N=function(){this.g.l=null,delete this.j,ro(this.g),delete this.g,gt.aa.N.call(this)};function Ql(i){Gi.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){e:{for(const h in u){i=h;break e}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}V(Ql,Gi);function Xl(){Wi.call(this),this.status=1}V(Xl,Wi);function Jn(i){this.g=i}V(Jn,Wl),Jn.prototype.ua=function(){se(this.g,"a")},Jn.prototype.ta=function(i){se(this.g,new Ql(i))},Jn.prototype.sa=function(i){se(this.g,new Xl)},Jn.prototype.ra=function(){se(this.g,"b")},ks.prototype.createWebChannel=ks.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,lf=function(){return new ks},af=function(){return Is()},of=Cn,Yo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},As.NO_ERROR=0,As.TIMEOUT=8,As.HTTP_ERROR=6,Ys=As,fl.COMPLETE="complete",sf=fl,al.EventType=Ar,Ar.OPEN="a",Ar.CLOSE="b",Ar.ERROR="c",Ar.MESSAGE="d",te.prototype.listen=te.prototype.K,jr=al,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,rf=Ve}).apply(typeof js<"u"?js:typeof self<"u"?self:typeof window<"u"?window:{});const Bu="@firebase/firestore";/**
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
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
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
 */let Tr="11.2.0";/**
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
 */const $n=new Pa("@firebase/firestore");function rr(){return $n.logLevel}function J(t,...e){if($n.logLevel<=pe.DEBUG){const n=e.map(Oa);$n.debug(`Firestore (${Tr}): ${t}`,...n)}}function qn(t,...e){if($n.logLevel<=pe.ERROR){const n=e.map(Oa);$n.error(`Firestore (${Tr}): ${t}`,...n)}}function ci(t,...e){if($n.logLevel<=pe.WARN){const n=e.map(Oa);$n.warn(`Firestore (${Tr}): ${t}`,...n)}}function Oa(t){if(typeof t=="string")return t;try{/**
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
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${Tr}) INTERNAL ASSERTION FAILED: `+t;throw qn(e),new Error(e)}function xe(t,e){t||ue()}function be(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class uf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class my{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _y{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xe(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let o=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Un,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=o;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Un)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string"),new uf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new Je(e)}}class yy{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Ey{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new yy(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ty{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){xe(this.o===void 0);const r=o=>{o.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,J("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new vy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function wy(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class cf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=wy(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<n&&(r+=e.charAt(s[o]%e.length))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function dr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Fe{static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Se{static fromTimestamp(e){return new Se(e)}static min(){return new Se(new Fe(0,0))}static max(){return new Se(new Fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Bt{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Bt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Bt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const o=Bt.compareSegments(e.get(s),n.get(s));if(o!==0)return o}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=Bt.isNumericId(e),s=Bt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Bt.extractNumericId(e).compare(Bt.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xa.fromString(e.substring(4,e.length-2))}}class De extends Bt{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new De(n)}static emptyPath(){return new De([])}}const Iy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends Bt{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return Iy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const o=()=>{if(r.length===0)throw new re(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new re(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new re(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new re(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
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
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(De.fromString(e))}static fromName(e){return new ae(De.fromString(e).popFirst(5))}static empty(){return new ae(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new De(e.slice()))}}function Ay(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Se.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new Tn(s,ae.empty(),e)}function by(t){return new Tn(t.readTime,t.key,-1)}class Tn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Tn(Se.min(),ae.empty(),-1)}static max(){return new Tn(Se.max(),ae.empty(),-1)}}function Ry(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
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
 */const Sy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Na(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==Sy)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,o=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&n()},c=>r(c))}),a=!0,o===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,o)=>{r.push(n.call(this,s,o))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const o=e.length,a=new Array(o);let l=0;for(let c=0;c<o;c++){const f=c;n(e[f]).next(d=>{a[f]=d,++l,l===o&&r(a)},d=>s(d))}})}static doWhile(e,n){return new M((r,s)=>{const o=()=>{e()===!0?n().next(()=>{o()},s):r()};o()})}}function Py(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ys(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ma{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ma.oe=-1;function ka(t){return t==null}function hi(t){return t===0&&1/t==-1/0}function Vy(t){return typeof t=="number"&&Number.isInteger(t)&&!hi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Dy(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ju(e)),e=xy(t.get(n),e);return ju(e)}function xy(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const o=t.charAt(s);switch(o){case"\0":n+="";break;case"":n+="";break;default:n+=o}}return n}function ju(t){return t+""}/**
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
 */function $u(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class dt{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new dt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $s(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $s(this.root,e,this.comparator,!1)}getReverseIterator(){return new $s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $s(this.root,e,this.comparator,!0)}}class $s{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,s,o){this.key=e,this.value=n,this.color=r??qe.RED,this.left=s??qe.EMPTY,this.right=o??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,o){return new qe(e??this.key,n??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,n,r),null):o===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,s,o){return this}insert(e,n,r){return new qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ke{constructor(e){this.comparator=e,this.data=new dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qu(this.data.getIterator())}getIteratorFrom(e){return new qu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class qu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ot{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new Ke(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return dr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Oy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class zt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Oy("Invalid base64 string: "+o):o}}(e);return new zt(n)}static fromUint8Array(e){const n=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new zt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}zt.EMPTY_BYTE_STRING=new zt("");const Ny=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hn(t){if(xe(!!t),typeof t=="string"){let e=0;const n=Ny.exec(t);if(xe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function pr(t){return typeof t=="string"?zt.fromBase64String(t):zt.fromUint8Array(t)}/**
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
 */function La(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fa(t){const e=t.mapValue.fields.__previous_value__;return La(e)?Fa(e):e}function fi(t){const e=Hn(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
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
 */class My{constructor(e,n,r,s,o,a,l,c,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=f}}class di{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof di&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const qs={mapValue:{}};function zn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?La(t)?4:Ly(t)?9007199254740991:ky(t)?10:11:ue()}function Kt(t,e){if(t===e)return!0;const n=zn(t);if(n!==zn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fi(t).isEqual(fi(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Hn(s.timestampValue),l=Hn(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,o){return pr(s.bytesValue).isEqual(pr(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,o){return He(s.geoPointValue.latitude)===He(o.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(o.geoPointValue.longitude)}(t,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return He(s.integerValue)===He(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=He(s.doubleValue),l=He(o.doubleValue);return a===l?hi(a)===hi(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return dr(t.arrayValue.values||[],e.arrayValue.values||[],Kt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if($u(a)!==$u(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Kt(a[c],l[c])))return!1;return!0}(t,e);default:return ue()}}function cs(t,e){return(t.values||[]).find(n=>Kt(n,e))!==void 0}function gr(t,e){if(t===e)return 0;const n=zn(t),r=zn(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(o,a){const l=He(o.integerValue||o.doubleValue),c=He(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Hu(t.timestampValue,e.timestampValue);case 4:return Hu(fi(t),fi(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(o,a){const l=pr(o),c=pr(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(o,a){const l=o.split("/"),c=a.split("/");for(let f=0;f<l.length&&f<c.length;f++){const d=Te(l[f],c[f]);if(d!==0)return d}return Te(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,a){const l=Te(He(o.latitude),He(a.latitude));return l!==0?l:Te(He(o.longitude),He(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return zu(t.arrayValue,e.arrayValue);case 10:return function(o,a){var l,c,f,d;const p=o.fields||{},y=a.fields||{},w=(l=p.value)===null||l===void 0?void 0:l.arrayValue,V=(c=y.value)===null||c===void 0?void 0:c.arrayValue,k=Te(((f=w==null?void 0:w.values)===null||f===void 0?void 0:f.length)||0,((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:zu(w,V)}(t.mapValue,e.mapValue);case 11:return function(o,a){if(o===qs.mapValue&&a===qs.mapValue)return 0;if(o===qs.mapValue)return 1;if(a===qs.mapValue)return-1;const l=o.fields||{},c=Object.keys(l),f=a.fields||{},d=Object.keys(f);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const y=Te(c[p],d[p]);if(y!==0)return y;const w=gr(l[c[p]],f[d[p]]);if(w!==0)return w}return Te(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ue()}}function Hu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Hn(t),r=Hn(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function zu(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const o=gr(n[s],r[s]);if(o)return o}return Te(n.length,r.length)}function mr(t){return Jo(t)}function Jo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return pr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const o of n.values||[])s?s=!1:r+=",",r+=Jo(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Jo(n.fields[a])}`;return s+"}"}(t.mapValue):ue()}function Js(t){switch(zn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fa(t);return e?16+Js(e):16;case 5:return 2*t.stringValue.length;case 6:return pr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+Js(o),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return wr(r.fields,(o,a)=>{s+=o.length+Js(a)}),s}(t.mapValue);default:throw ue()}}function Zo(t){return!!t&&"integerValue"in t}function Ua(t){return!!t&&"arrayValue"in t}function Zs(t){return!!t&&"mapValue"in t}function ky(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Xr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ly(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Zs(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xr(n)}setAll(e){let n=ze.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Xr(a):s.push(l.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,s)}delete(e){const n=this.field(e.popLast());Zs(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Zs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){wr(n,(s,o)=>e[s]=o);for(const s of r)delete e[s]}clone(){return new xt(Xr(this.value))}}function ff(t){const e=[];return wr(t.fields,(n,r)=>{const s=new ze([n]);if(Zs(r)){const o=ff(r.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new Ot(e)}/**
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
 */class Vt{constructor(e,n,r,s,o,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Vt(e,0,Se.min(),Se.min(),Se.min(),xt.empty(),0)}static newFoundDocument(e,n,r,s){return new Vt(e,1,n,Se.min(),r,s,0)}static newNoDocument(e,n){return new Vt(e,2,n,Se.min(),Se.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new Vt(e,3,n,Se.min(),Se.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pi{constructor(e,n){this.position=e,this.inclusive=n}}function Ku(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const o=e[s],a=t.position[s];if(o.field.isKeyField()?r=ae.comparator(ae.fromName(a.referenceValue),n.key):r=gr(a,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gu(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class gi{constructor(e,n="asc"){this.field=e,this.dir=n}}function Fy(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class df{}class Le extends df{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new By(e,n,r):n==="array-contains"?new qy(e,r):n==="in"?new Hy(e,r):n==="not-in"?new zy(e,r):n==="array-contains-any"?new Ky(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new jy(e,r):new $y(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(gr(n,this.value)):n!==null&&zn(this.value)===zn(n)&&this.matchesComparison(gr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class wn extends df{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new wn(e,n)}matches(e){return pf(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function pf(t){return t.op==="and"}function gf(t){return Uy(t)&&pf(t)}function Uy(t){for(const e of t.filters)if(e instanceof wn)return!1;return!0}function ea(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+mr(t.value);if(gf(t))return t.filters.map(e=>ea(e)).join(",");{const e=t.filters.map(n=>ea(n)).join(",");return`${t.op}(${e})`}}function mf(t,e){return t instanceof Le?function(r,s){return s instanceof Le&&r.op===s.op&&r.field.isEqual(s.field)&&Kt(r.value,s.value)}(t,e):t instanceof wn?function(r,s){return s instanceof wn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,l)=>o&&mf(a,s.filters[l]),!0):!1}(t,e):void ue()}function _f(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${mr(n.value)}`}(t):t instanceof wn?function(n){return n.op.toString()+" {"+n.getFilters().map(_f).join(" ,")+"}"}(t):"Filter"}class By extends Le{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class jy extends Le{constructor(e,n){super(e,"in",n),this.keys=yf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $y extends Le{constructor(e,n){super(e,"not-in",n),this.keys=yf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function yf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ae.fromName(r.referenceValue))}class qy extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ua(n)&&cs(n.arrayValue,this.value)}}class Hy extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&cs(this.value.arrayValue,n)}}class zy extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(cs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!cs(this.value.arrayValue,n)}}class Ky extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ua(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>cs(this.value.arrayValue,r))}}/**
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
 */class Gy{constructor(e,n=null,r=[],s=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function Wu(t,e=null,n=[],r=[],s=null,o=null,a=null){return new Gy(t,e,n,r,s,o,a)}function Ba(t){const e=be(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ea(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),ka(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>mr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>mr(r)).join(",")),e.ue=n}return e.ue}function ja(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Fy(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mf(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gu(t.startAt,e.startAt)&&Gu(t.endAt,e.endAt)}/**
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
 */class Mi{constructor(e,n=null,r=[],s=[],o=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Wy(t,e,n,r,s,o,a,l){return new Mi(t,e,n,r,s,o,a,l)}function Qy(t){return new Mi(t)}function Qu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Xy(t){return t.collectionGroup!==null}function Yr(t){const e=be(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ke(ze.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new gi(o,r))}),n.has(ze.keyField().canonicalString())||e.ce.push(new gi(ze.keyField(),r))}return e.ce}function Bn(t){const e=be(t);return e.le||(e.le=Yy(e,Yr(t))),e.le}function Yy(t,e){if(t.limitType==="F")return Wu(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new gi(s.field,o)});const n=t.endAt?new pi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new pi(t.startAt.position,t.startAt.inclusive):null;return Wu(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ta(t,e,n){return new Mi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ef(t,e){return ja(Bn(t),Bn(e))&&t.limitType===e.limitType}function vf(t){return`${Ba(Bn(t))}|lt:${t.limitType}`}function Fr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>_f(s)).join(", ")}]`),ka(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>mr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>mr(s)).join(",")),`Target(${r})`}(Bn(t))}; limitType=${t.limitType})`}function $a(t,e){return e.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):ae.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,s){for(const o of Yr(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const f=Ku(a,l,c);return a.inclusive?f<=0:f<0}(r.startAt,Yr(r),s)||r.endAt&&!function(a,l,c){const f=Ku(a,l,c);return a.inclusive?f>=0:f>0}(r.endAt,Yr(r),s))}(t,e)}function Jy(t){return(e,n)=>{let r=!1;for(const s of Yr(t)){const o=Zy(s,e,n);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Zy(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):function(o,a,l){const c=a.data.field(o),f=l.data.field(o);return c!==null&&f!==null?gr(c,f):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
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
 */class Wn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){wr(this.inner,(n,r)=>{for(const[s,o]of r)e(s,o)})}isEmpty(){return hf(this.inner)}size(){return this.innerSize}}/**
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
 */const eE=new dt(ae.comparator);function mi(){return eE}const Tf=new dt(ae.comparator);function Hs(...t){let e=Tf;for(const n of t)e=e.insert(n.key,n);return e}function wf(t){let e=Tf;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function kn(){return Jr()}function If(){return Jr()}function Jr(){return new Wn(t=>t.toString(),(t,e)=>t.isEqual(e))}const tE=new dt(ae.comparator),nE=new Ke(ae.comparator);function et(...t){let e=nE;for(const n of t)e=e.add(n);return e}const rE=new Ke(Te);function sE(){return rE}/**
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
 */function qa(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hi(e)?"-0":e}}function Af(t){return{integerValue:""+t}}function iE(t,e){return Vy(e)?Af(e):qa(t,e)}/**
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
 */class ki{constructor(){this._=void 0}}function oE(t,e,n){return t instanceof _i?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&La(o)&&(o=Fa(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(n,e):t instanceof hs?Rf(t,e):t instanceof fs?Sf(t,e):function(s,o){const a=bf(s,o),l=Xu(a)+Xu(s.Pe);return Zo(a)&&Zo(s.Pe)?Af(l):qa(s.serializer,l)}(t,e)}function aE(t,e,n){return t instanceof hs?Rf(t,e):t instanceof fs?Sf(t,e):n}function bf(t,e){return t instanceof yi?function(r){return Zo(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class _i extends ki{}class hs extends ki{constructor(e){super(),this.elements=e}}function Rf(t,e){const n=Cf(e);for(const r of t.elements)n.some(s=>Kt(s,r))||n.push(r);return{arrayValue:{values:n}}}class fs extends ki{constructor(e){super(),this.elements=e}}function Sf(t,e){let n=Cf(e);for(const r of t.elements)n=n.filter(s=>!Kt(s,r));return{arrayValue:{values:n}}}class yi extends ki{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Xu(t){return He(t.integerValue||t.doubleValue)}function Cf(t){return Ua(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function lE(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof hs&&s instanceof hs||r instanceof fs&&s instanceof fs?dr(r.elements,s.elements,Kt):r instanceof yi&&s instanceof yi?Kt(r.Pe,s.Pe):r instanceof _i&&s instanceof _i}(t.transform,e.transform)}class uE{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ei(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Li{}function Pf(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Df(t.key,tn.none()):new Es(t.key,t.data,tn.none());{const n=t.data,r=xt.empty();let s=new Ke(ze.comparator);for(let o of e.fields)if(!s.has(o)){let a=n.field(o);a===null&&o.length>1&&(o=o.popLast(),a=n.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Qn(t.key,r,new Ot(s.toArray()),tn.none())}}function cE(t,e,n){t instanceof Es?function(s,o,a){const l=s.value.clone(),c=Ju(s.fieldTransforms,o,a.transformResults);l.setAll(c),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Qn?function(s,o,a){if(!ei(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Ju(s.fieldTransforms,o,a.transformResults),c=o.data;c.setAll(Vf(s)),c.setAll(l),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Zr(t,e,n,r){return t instanceof Es?function(o,a,l,c){if(!ei(o.precondition,a))return l;const f=o.value.clone(),d=Zu(o.fieldTransforms,c,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qn?function(o,a,l,c){if(!ei(o.precondition,a))return l;const f=Zu(o.fieldTransforms,c,a),d=a.data;return d.setAll(Vf(o)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(o,a,l){return ei(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function hE(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),o=bf(r.transform,s||null);o!=null&&(n===null&&(n=xt.empty()),n.set(r.field,o))}return n||null}function Yu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&dr(r,s,(o,a)=>lE(o,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Es extends Li{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qn extends Li{constructor(e,n,r,s,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Vf(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ju(t,e,n){const r=new Map;xe(t.length===n.length);for(let s=0;s<n.length;s++){const o=t[s],a=o.transform,l=e.data.field(o.field);r.set(o.field,aE(a,l,n[s]))}return r}function Zu(t,e,n){const r=new Map;for(const s of t){const o=s.transform,a=n.data.field(s.field);r.set(s.field,oE(o,a,e))}return r}class Df extends Li{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fE extends Li{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dE{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&cE(o,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zr(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zr(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=If();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=n.has(s.key)?null:l;const c=Pf(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(Se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),et())}isEqual(e){return this.batchId===e.batchId&&dr(this.mutations,e.mutations,(n,r)=>Yu(n,r))&&dr(this.baseMutations,e.baseMutations,(n,r)=>Yu(n,r))}}class Ha{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){xe(e.mutations.length===r.length);let s=function(){return tE}();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Ha(e,n,r,s)}}/**
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
 */class pE{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var Me,de;function gE(t){switch(t){default:return ue();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function mE(t){if(t===void 0)return qn("GRPC error has no .code"),F.UNKNOWN;switch(t){case Me.OK:return F.OK;case Me.CANCELLED:return F.CANCELLED;case Me.UNKNOWN:return F.UNKNOWN;case Me.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Me.INTERNAL:return F.INTERNAL;case Me.UNAVAILABLE:return F.UNAVAILABLE;case Me.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Me.NOT_FOUND:return F.NOT_FOUND;case Me.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Me.ABORTED:return F.ABORTED;case Me.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Me.DATA_LOSS:return F.DATA_LOSS;default:return ue()}}(de=Me||(Me={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new xa([4294967295,4294967295],0);class _E{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function na(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function EE(t,e){return na(t,e.toTimestamp())}function cr(t){return xe(!!t),Se.fromTimestamp(function(n){const r=Hn(n);return new Fe(r.seconds,r.nanos)}(t))}function xf(t,e){return ra(t,e).canonicalString()}function ra(t,e){const n=function(s){return new De(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function vE(t){const e=De.fromString(t);return xe(CE(e)),e}function sa(t,e){return xf(t.databaseId,e.path)}function TE(t){const e=vE(t);return e.length===4?De.emptyPath():IE(e)}function wE(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function IE(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ec(t,e,n){return{name:sa(t,e),fields:n.value.mapValue.fields}}function AE(t,e){let n;if(e instanceof Es)n={update:ec(t,e.key,e.value)};else if(e instanceof Df)n={delete:sa(t,e.key)};else if(e instanceof Qn)n={update:ec(t,e.key,e.data),updateMask:SE(e.fieldMask)};else{if(!(e instanceof fE))return ue();n={verify:sa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof _i)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof hs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof fs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof yi)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:EE(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:ue()}(t,e.precondition)),n}function bE(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(s,o){let a=s.updateTime?cr(s.updateTime):cr(o);return a.isEqual(Se.min())&&(a=cr(o)),new uE(a,s.transformResults||[])}(n,e))):[]}function RE(t){let e=TE(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){xe(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let o=[];n.where&&(o=function(p){const y=Of(p);return y instanceof wn&&gf(y)?y.getFilters():[y]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(y=>function(V){return new gi(sr(V.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,ka(y)?null:y}(n.limit));let c=null;n.startAt&&(c=function(p){const y=!!p.before,w=p.values||[];return new pi(w,y)}(n.startAt));let f=null;return n.endAt&&(f=function(p){const y=!p.before,w=p.values||[];return new pi(w,y)}(n.endAt)),Wy(e,s,a,o,l,"F",c,f)}function Of(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=sr(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=sr(n.unaryFilter.field);return Le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=sr(n.unaryFilter.field);return Le.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=sr(n.unaryFilter.field);return Le.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(sr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return wn.create(n.compositeFilter.filters.map(r=>Of(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function sr(t){return ze.fromServerFormat(t.fieldPath)}function SE(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function CE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class PE{constructor(e){this.ht=e}}function VE(t){const e=RE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ta(e,e.limit,"L"):e}/**
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
 */class DE{constructor(){this.ln=new xE}addToCollectionParentIndex(e,n){return this.ln.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Tn.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Tn.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class xE{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ke(De.comparator),o=!s.has(r);return this.index[n]=s.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ke(De.comparator)).toArray()}}/**
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
 */const tc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(41943040,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);/**
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
 */class _r{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new _r(0)}static Qn(){return new _r(-1)}}/**
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
 */function nc([t,e],[n,r]){const s=Te(t,n);return s===0?Te(e,r):s}class OE{constructor(e){this.Gn=e,this.buffer=new Ke(nc),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();nc(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class NE{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){J("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ys(n)?J("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Na(n)}await this.Yn(3e5)})}}class ME{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Ma.oe);const r=new OE(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(tc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),tc):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,o,a,l,c,f;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(o=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(f=Date.now(),rr()<=pe.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(f-c)+`ms
Total Duration: ${f-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:p})))}}function kE(t,e){return new ME(t,e)}/**
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
 */class LE{constructor(){this.changes=new Wn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class FE{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class UE{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Zr(r.mutation,s,Ot.empty(),Fe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,et()).next(()=>r))}getLocalViewOfDocuments(e,n,r=et()){const s=kn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(o=>{let a=Hs();return o.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=kn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,et()))}populateOverlays(e,n,r){const s=[];return r.forEach(o=>{n.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let o=mi();const a=Jr(),l=function(){return Jr()}();return n.forEach((c,f)=>{const d=r.get(f.key);s.has(f.key)&&(d===void 0||d.mutation instanceof Qn)?o=o.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),Zr(d.mutation,f,d.mutation.getFieldMask(),Fe.now())):a.set(f.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,o).next(c=>(c.forEach((f,d)=>a.set(f,d)),n.forEach((f,d)=>{var p;return l.set(f,new FE(d,(p=a.get(f))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Jr();let s=new dt((a,l)=>a-l),o=et();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const f=n.get(c);if(f===null)return;let d=r.get(c)||Ot.empty();d=l.applyToLocalView(f,d),r.set(c,d);const p=(s.get(l.batchId)||et()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),f=c.key,d=c.value,p=If();d.forEach(y=>{if(!o.has(y)){const w=Pf(n.get(y),r.get(y));w!==null&&p.set(y,w),o=o.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,p))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return ae.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Xy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-o.size):M.resolve(kn());let l=-1,c=o;return a.next(f=>M.forEach(f,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),o.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(y=>{c=c.insert(d,y)}))).next(()=>this.populateOverlays(e,f,o)).next(()=>this.computeViews(e,c,f,et())).next(d=>({batchId:l,changes:wf(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(r=>{let s=Hs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const o=n.collectionGroup;let a=Hs();return this.indexManager.getCollectionParents(e,o).next(l=>M.forEach(l,c=>{const f=function(p,y){return new Mi(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next(d=>{d.forEach((p,y)=>{a=a.insert(p,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,s))).next(a=>{o.forEach((c,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,Vt.newInvalidDocument(d)))});let l=Hs();return a.forEach((c,f)=>{const d=o.get(c);d!==void 0&&Zr(d.mutation,f,Ot.empty(),Fe.now()),$a(n,f)&&(l=l.insert(c,f))}),l})}}/**
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
 */class BE{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return M.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:cr(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:VE(s.bundledQuery),readTime:cr(s.readTime)}}(n)),M.resolve()}}/**
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
 */class jE{constructor(){this.overlays=new dt(ae.comparator),this.dr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=kn();return M.forEach(n,s=>this.getOverlay(e,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,o)=>{this.Tt(e,n,o)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.dr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.dr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=kn(),o=n.length+1,a=new ae(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,f=c.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===o&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let o=new dt((f,d)=>f-d);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let d=o.get(f.largestBatchId);d===null&&(d=kn(),o=o.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const l=kn(),c=o.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((f,d)=>l.set(f,d)),!(l.size()>=s)););return M.resolve(l)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.dr.get(s.largestBatchId).delete(r.key);this.dr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new pE(n,r));let o=this.dr.get(n);o===void 0&&(o=et(),this.dr.set(n,o)),this.dr.set(n,o.add(r.key))}}/**
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
 */class $E{constructor(){this.sessionToken=zt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class za{constructor(){this.Er=new Ke(ke.Ar),this.Rr=new Ke(ke.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,n){const r=new ke(e,n);this.Er=this.Er.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new ke(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new ae(new De([])),r=new ke(n,e),s=new ke(n,e+1),o=[];return this.Rr.forEachInRange([r,s],a=>{this.gr(a),o.push(a.key)}),o}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ae(new De([])),r=new ke(n,e),s=new ke(n,e+1);let o=et();return this.Rr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(e){const n=new ke(e,0),r=this.Er.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ke{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ae.comparator(e.key,n.key)||Te(e.br,n.br)}static Vr(e,n){return Te(e.br,n.br)||ae.comparator(e.key,n.key)}}/**
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
 */class qE{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new Ke(ke.Ar)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new dE(o,n,r,s);this.mutationQueue.push(a);for(const l of s)this.vr=this.vr.add(new ke(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,n){return M.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),o=s<0?0:s;return M.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ke(n,0),s=new ke(n,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([r,s],a=>{const l=this.Cr(a.br);o.push(l)}),M.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(Te);return n.forEach(s=>{const o=new ke(s,0),a=new ke(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,a],l=>{r=r.add(l.br)})}),M.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let o=r;ae.isDocumentKey(o)||(o=o.child(""));const a=new ke(new ae(o),0);let l=new Ke(Te);return this.vr.forEachWhile(c=>{const f=c.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(c.br)),!0)},a),M.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){xe(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return M.forEach(n.mutations,s=>{const o=new ke(s.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Bn(e){}containsKey(e,n){const r=new ke(n,0),s=this.vr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class HE{constructor(e){this.Nr=e,this.docs=function(){return new dt(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),o=s?s.size:0,a=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Vt.newInvalidDocument(n))}getEntries(e,n){let r=mi();return n.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Vt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let o=mi();const a=n.path,l=new ae(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:f,value:{document:d}}=c.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Ry(by(d),r)<=0||(s.has(d.key)||$a(n,d))&&(o=o.insert(d.key,d.mutableCopy()))}return M.resolve(o)}getAllFromCollectionGroup(e,n,r,s){ue()}Br(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zE(this)}getSize(e){return M.resolve(this.size)}}class zE extends LE{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
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
 */class KE{constructor(e){this.persistence=e,this.Lr=new Wn(n=>Ba(n),ja),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.kr=0,this.qr=new za,this.targetCount=0,this.Qr=_r.qn()}forEachTarget(e,n){return this.Lr.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),M.resolve()}Un(e){this.Lr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new _r(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Un(n),M.resolve()}removeTargetData(e,n){return this.Lr.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const o=[];return this.Lr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Lr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(o).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Lr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,o=[];return s&&n.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),M.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.qr.containsKey(n))}}/**
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
 */class Nf{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Ma(0),this.Ur=!1,this.Ur=!0,this.Wr=new $E,this.referenceDelegate=e(this),this.Gr=new KE(this),this.indexManager=new DE,this.remoteDocumentCache=function(s){return new HE(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new PE(n),this.jr=new BE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jE,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new qE(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const s=new GE(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(o=>this.referenceDelegate.Jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Yr(e,n){return M.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class GE extends Cy{constructor(e){super(),this.currentSequenceNumber=e}}class Ka{constructor(e){this.persistence=e,this.Zr=new za,this.Xr=null}static ei(e){return new Ka(e)}get ti(){if(this.Xr)return this.Xr;throw ue()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),M.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(o=>this.ti.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.ti,r=>{const s=ae.fromPath(r);return this.ni(e,s).next(o=>{o||n.removeEntry(s,Se.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return M.or([()=>M.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Ei{constructor(e,n){this.persistence=e,this.ri=new Wn(r=>Dy(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=kE(this,n)}static ei(e,n){return new Ei(e,n)}Hr(){}Jr(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return M.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(o=>o?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.Br(e,a=>this.ir(e,a,n).next(l=>{l||(r++,o.removeEntry(a,Se.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),M.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Js(e.data.value)),n}ir(e,n,r){return M.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ga{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=et(),s=et();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ga(e,n.fromCache,r,s)}}/**
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
 */class WE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class QE{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Xm()?8:Py(Gm())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const o={result:null};return this.Xi(e,n).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.es(e,n,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new WE;return this.ts(e,n,a).next(l=>{if(o.result=l,this.Hi)return this.ns(e,n,a,l.size)})}).next(()=>o.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(rr()<=pe.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Fr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),M.resolve()):(rr()<=pe.DEBUG&&J("QueryEngine","Query:",Fr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(rr()<=pe.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Fr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Bn(n))):M.resolve())}Xi(e,n){if(Qu(n))return M.resolve(null);let r=Bn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ta(n,null,"F"),r=Bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=et(...o);return this.Zi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const f=this.rs(n,l);return this.ss(n,f,a,c.readTime)?this.Xi(e,ta(n,null,"F")):this.os(e,f,n,c)}))})))}es(e,n,r,s){return Qu(n)||s.isEqual(Se.min())?M.resolve(null):this.Zi.getDocuments(e,r).next(o=>{const a=this.rs(n,o);return this.ss(n,a,r,s)?M.resolve(null):(rr()<=pe.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fr(n)),this.os(e,a,n,Ay(s,-1)).next(l=>l))})}rs(e,n){let r=new Ke(Jy(e));return n.forEach((s,o)=>{$a(e,o)&&(r=r.add(o))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ts(e,n,r){return rr()<=pe.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Fr(n)),this.Zi.getDocumentsMatchingQuery(e,n,Tn.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(o=>(n.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class XE{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new dt(Te),this.cs=new Wn(o=>Ba(o),ja),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UE(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function YE(t,e,n,r){return new XE(t,e,n,r)}async function Mf(t,e){const n=be(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let c=et();for(const f of s){a.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}for(const f of o){l.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(f=>({Ts:f,removedBatchIds:a,addedBatchIds:l}))})})}function JE(t,e){const n=be(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),o=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,f,d){const p=f.batch,y=p.keys();let w=M.resolve();return y.forEach(V=>{w=w.next(()=>d.getEntry(c,V)).next(k=>{const U=f.docVersions.get(V);xe(U!==null),k.version.compareTo(U)<0&&(p.applyToRemoteDocument(k,f),k.isValidDocument()&&(k.setReadTime(f.commitVersion),d.addEntry(k)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=et();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(c=c.add(l.batch.mutations[f].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function ZE(t){const e=be(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function ev(t,e){const n=be(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class rc{constructor(){this.activeTargetIds=sE()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tv{constructor(){this._o=new rc,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new rc,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nv{uo(e){}shutdown(){}}/**
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
 */class sc{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zs=null;function wo(){return zs===null?zs=function(){return 268435456+Math.round(2147483648*Math.random())}():zs++,"0x"+zs.toString(16)}/**
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
 */const rv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class sv{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Ye="WebChannelConnection";class iv extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Oo(n,r,s,o,a){const l=wo(),c=this.No(n,r.toUriEncodedString());J("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const f={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(f,o,a),this.Lo(n,c,f,s).then(d=>(J("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw ci("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}ko(n,r,s,o,a,l){return this.Oo(n,r,s,o,a)}Bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Tr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>n[a]=o),s&&s.headers.forEach((o,a)=>n[a]=o)}No(n,r){const s=rv[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,n,r,s){const o=wo();return new Promise((a,l)=>{const c=new rf;c.setWithCredentials(!0),c.listenOnce(sf.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ys.NO_ERROR:const d=c.getResponseJson();J(Ye,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),a(d);break;case Ys.TIMEOUT:J(Ye,`RPC '${e}' ${o} timed out`),l(new re(F.DEADLINE_EXCEEDED,"Request time out"));break;case Ys.HTTP_ERROR:const p=c.getStatus();if(J(Ye,`RPC '${e}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const w=y==null?void 0:y.error;if(w&&w.status&&w.message){const V=function(U){const G=U.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(G)>=0?G:F.UNKNOWN}(w.status);l(new re(V,w.message))}else l(new re(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new re(F.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{J(Ye,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);J(Ye,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",f,r,15)})}qo(e,n,r){const s=wo(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=lf(),l=af(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(c.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Bo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=o.join("");J(Ye,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);let y=!1,w=!1;const V=new sv({Eo:U=>{w?J(Ye,`Not sending because RPC '${e}' stream ${s} is closed:`,U):(y||(J(Ye,`Opening RPC '${e}' stream ${s} transport.`),p.open(),y=!0),J(Ye,`RPC '${e}' stream ${s} sending:`,U),p.send(U))},Ao:()=>p.close()}),k=(U,G,q)=>{U.listen(G,W=>{try{q(W)}catch(z){setTimeout(()=>{throw z},0)}})};return k(p,jr.EventType.OPEN,()=>{w||(J(Ye,`RPC '${e}' stream ${s} transport opened.`),V.So())}),k(p,jr.EventType.CLOSE,()=>{w||(w=!0,J(Ye,`RPC '${e}' stream ${s} transport closed`),V.Do())}),k(p,jr.EventType.ERROR,U=>{w||(w=!0,ci(Ye,`RPC '${e}' stream ${s} transport errored:`,U),V.Do(new re(F.UNAVAILABLE,"The operation could not be completed")))}),k(p,jr.EventType.MESSAGE,U=>{var G;if(!w){const q=U.data[0];xe(!!q);const W=q,z=(W==null?void 0:W.error)||((G=W[0])===null||G===void 0?void 0:G.error);if(z){J(Ye,`RPC '${e}' stream ${s} received error:`,z);const ce=z.status;let ge=function(T){const I=Me[T];if(I!==void 0)return mE(I)}(ce),A=z.message;ge===void 0&&(ge=F.INTERNAL,A="Unknown error status: "+ce+" with message "+z.message),w=!0,V.Do(new re(ge,A)),p.close()}else J(Ye,`RPC '${e}' stream ${s} received:`,q),V.vo(q)}}),k(l,of.STAT_EVENT,U=>{U.stat===Yo.PROXY?J(Ye,`RPC '${e}' stream ${s} detected buffering proxy`):U.stat===Yo.NOPROXY&&J(Ye,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.bo()},0),V}}function Io(){return typeof document<"u"?document:null}/**
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
 */function Fi(t){return new _E(t,!0)}/**
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
 */class kf{constructor(e,n,r=1e3,s=1.5,o=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class ov{constructor(e,n,r,s,o,a,l,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new kf(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(qn(n.toString()),qn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new re(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.d_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.E_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.d_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class av extends ov{constructor(e,n,r,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,n){return this.connection.qo("Write",e,n)}A_(e){return xe(!!e.streamToken),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=bE(e.writeResults,e.commitTime),r=cr(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=wE(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>AE(this.serializer,r))};this.c_(n)}}/**
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
 */class lv extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new re(F.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Oo(e,ra(n,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(F.UNKNOWN,o.toString())})}ko(e,n,r,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.ko(e,ra(n,r),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new re(F.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class uv{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(qn(n),this.C_=!1):J("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class cv{constructor(e,n,r,s,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{Ts(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(c){const f=be(c);f.k_.add(4),await vs(f),f.K_.set("Unknown"),f.k_.delete(4),await Ui(f)}(this))})}),this.K_=new uv(r,s)}}async function Ui(t){if(Ts(t))for(const e of t.q_)await e(!0)}async function vs(t){for(const e of t.q_)await e(!1)}function Ts(t){return be(t).k_.size===0}async function Lf(t,e,n){if(!ys(e))throw e;t.k_.add(1),await vs(t),t.K_.set("Offline"),n||(n=()=>ZE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Ui(t)})}function Ff(t,e){return e().catch(n=>Lf(t,n,e))}async function Bi(t){const e=be(t),n=In(e);let r=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;hv(e);)try{const s=await ev(e.localStore,r);if(s===null){e.B_.length===0&&n.a_();break}r=s.batchId,fv(e,s)}catch(s){await Lf(e,s)}Uf(e)&&Bf(e)}function hv(t){return Ts(t)&&t.B_.length<10}function fv(t,e){t.B_.push(e);const n=In(t);n.s_()&&n.f_&&n.g_(e.mutations)}function Uf(t){return Ts(t)&&!In(t).i_()&&t.B_.length>0}function Bf(t){In(t).start()}async function dv(t){In(t).w_()}async function pv(t){const e=In(t);for(const n of t.B_)e.g_(n.mutations)}async function gv(t,e,n){const r=t.B_.shift(),s=Ha.from(r,e,n);await Ff(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Bi(t)}async function mv(t,e){e&&In(t).f_&&await async function(r,s){if(function(a){return gE(a)&&a!==F.ABORTED}(s.code)){const o=r.B_.shift();In(r).__(),await Ff(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Bi(r)}}(t,e),Uf(t)&&Bf(t)}async function ic(t,e){const n=be(t);n.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=Ts(n);n.k_.add(3),await vs(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Ui(n)}async function _v(t,e){const n=be(t);e?(n.k_.delete(2),await Ui(n)):e||(n.k_.add(2),await vs(n),n.K_.set("Unknown"))}function In(t){return t.G_||(t.G_=function(n,r,s){const o=be(n);return o.b_(),new av(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:dv.bind(null,t),po:mv.bind(null,t),p_:pv.bind(null,t),y_:gv.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Bi(t)):(await t.G_.stop(),t.B_.length>0&&(J("RemoteStore",`Stopping write stream with ${t.B_.length} pending writes`),t.B_=[]))})),t.G_}/**
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
 */class Wa{constructor(e,n,r,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,o){const a=Date.now()+r,l=new Wa(e,n,a,s,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jf(t,e){if(qn("AsyncQueue",`${e}: ${t}`),ys(t))return new re(F.UNAVAILABLE,`${e}: ${t}`);throw t}class yv{constructor(){this.queries=oc(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=be(n),o=s.queries;s.queries=oc(),o.forEach((a,l)=>{for(const c of l.J_)c.onError(r)})})(this,new re(F.ABORTED,"Firestore shutting down"))}}function oc(){return new Wn(t=>vf(t),Ef)}function Ev(t){t.X_.forEach(e=>{e.next()})}var ac,lc;(lc=ac||(ac={})).na="default",lc.Cache="cache";class vv{constructor(e,n,r,s,o,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new Wn(l=>vf(l),Ef),this.Oa=new Map,this.Na=new Set,this.Ba=new dt(ae.comparator),this.La=new Map,this.ka=new za,this.qa={},this.Qa=new Map,this.Ka=_r.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Tv(t,e,n){const r=bv(t);try{const s=await function(a,l){const c=be(a),f=Fe.now(),d=l.reduce((w,V)=>w.add(V.key),et());let p,y;return c.persistence.runTransaction("Locally write mutations","readwrite",w=>{let V=mi(),k=et();return c.hs.getEntries(w,d).next(U=>{V=U,V.forEach((G,q)=>{q.isValidDocument()||(k=k.add(G))})}).next(()=>c.localDocuments.getOverlayedDocuments(w,V)).next(U=>{p=U;const G=[];for(const q of l){const W=hE(q,p.get(q.key).overlayedDocument);W!=null&&G.push(new Qn(q.key,W,ff(W.value.mapValue),tn.exists(!0)))}return c.mutationQueue.addMutationBatch(w,f,G,l)}).next(U=>{y=U;const G=U.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(w,U.batchId,G)})}).then(()=>({batchId:y.batchId,changes:wf(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let f=a.qa[a.currentUser.toKey()];f||(f=new dt(Te)),f=f.insert(l,c),a.qa[a.currentUser.toKey()]=f}(r,s.batchId,n),await ji(r,s.changes),await Bi(r.remoteStore)}catch(s){const o=jf(s,"Failed to persist write");n.reject(o)}}function uc(t,e,n){const r=be(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((o,a)=>{const l=a.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=be(a);c.onlineState=l;let f=!1;c.queries.forEach((d,p)=>{for(const y of p.J_)y.ea(l)&&(f=!0)}),f&&Ev(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wv(t,e){const n=be(t),r=e.batch.batchId;try{const s=await JE(n.localStore,e);qf(n,r,null),$f(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ji(n,s)}catch(s){await Na(s)}}async function Iv(t,e,n){const r=be(t);try{const s=await function(a,l){const c=be(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let d;return c.mutationQueue.lookupMutationBatch(f,l).next(p=>(xe(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(f,p))).next(()=>c.mutationQueue.performConsistencyCheck(f)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(f,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,d)).next(()=>c.localDocuments.getDocuments(f,d))})}(r.localStore,e);qf(r,e,n),$f(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ji(r,s)}catch(s){await Na(s)}}function $f(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function qf(t,e,n){const r=be(t);let s=r.qa[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(n?o.reject(n):o.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}async function ji(t,e,n){const r=be(t),s=[],o=[],a=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{a.push(r.Ua(c,e,n).then(f=>{var d;if((f||n)&&r.isPrimaryClient){const p=f?!f.fromCache:(d=void 0)===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(f){s.push(f);const p=Ga.zi(c.targetId,f);o.push(p)}}))}),await Promise.all(a),r.Ma.R_(s),await async function(c,f){const d=be(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(f,y=>M.forEach(y.Wi,w=>d.persistence.referenceDelegate.addReference(p,y.targetId,w)).next(()=>M.forEach(y.Gi,w=>d.persistence.referenceDelegate.removeReference(p,y.targetId,w)))))}catch(p){if(!ys(p))throw p;J("LocalStore","Failed to update sequence numbers: "+p)}for(const p of f){const y=p.targetId;if(!p.fromCache){const w=d.us.get(y),V=w.snapshotVersion,k=w.withLastLimboFreeSnapshotVersion(V);d.us=d.us.insert(y,k)}}}(r.localStore,o))}async function Av(t,e){const n=be(t);if(!n.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const r=await Mf(n.localStore,e);n.currentUser=e,function(o,a){o.Qa.forEach(l=>{l.forEach(c=>{c.reject(new re(F.CANCELLED,a))})}),o.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ji(n,r.Ts)}}function bv(t){const e=be(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Iv.bind(null,e),e}class vi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fi(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return YE(this.persistence,new QE,e.initialUser,this.serializer)}ja(e){return new Nf(Ka.ei,this.serializer)}za(e){return new tv}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vi.provider={build:()=>new vi};class Rv extends vi{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){xe(this.persistence.referenceDelegate instanceof Ei);const r=this.persistence.referenceDelegate.garbageCollector;return new NE(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new Nf(r=>Ei.ei(r,n),this.serializer)}}class ia{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>uc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Av.bind(null,this.syncEngine),await _v(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yv}()}createDatastore(e){const n=Fi(e.databaseInfo.databaseId),r=function(o){return new iv(o)}(e.databaseInfo);return function(o,a,l,c){return new lv(o,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,o,a,l){return new cv(r,s,o,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>uc(this.syncEngine,n,0),function(){return sc.p()?new sc:new nv}())}createSyncEngine(e,n){return function(s,o,a,l,c,f,d){const p=new vv(s,o,a,l,c,f);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const o=be(s);J("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await vs(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ia.provider={build:()=>new ia};/**
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
 */class Sv{constructor(e,n,r,s,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Je.UNAUTHENTICATED,this.clientId=cf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{J("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(J("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=jf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ao(t,e){t.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Mf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function cc(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Cv(t);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ic(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>ic(e.remoteStore,s)),t._onlineComponents=e}async function Cv(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ao(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ci("Error using user provided cache. Falling back to memory cache: "+n),await Ao(t,new vi)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await Ao(t,new Rv(void 0));return t._offlineComponents}async function Pv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await cc(t,t._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await cc(t,new ia))),t._onlineComponents}function Vv(t){return Pv(t).then(e=>e.syncEngine)}/**
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
 */function Hf(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const hc=new Map;/**
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
 */function zf(t,e,n){if(!n)throw new re(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Dv(t,e,n,r){if(e===!0&&r===!0)throw new re(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fc(t){if(!ae.isDocumentKey(t))throw new re(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dc(t){if(ae.isDocumentKey(t))throw new re(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function Kf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qa(t);throw new re(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class pc{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Dv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new re(F.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new re(F.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new re(F.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $i{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gy;switch(r.type){case"firstParty":return new Ey(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=hc.get(n);r&&(J("ComponentProvider","Removing Datastore"),hc.delete(n),r.terminate())}(this),Promise.resolve()}}function xv(t,e,n,r={}){var s;const o=(t=Kf(t,$i))._getSettings(),a=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&ci("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=Je.MOCK_USER;else{l=Km(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new re(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Je(f)}t._authCredentials=new my(new uf(l,c))}}/**
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
 */class Xa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xa(this.firestore,e,this._query)}}class nn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new En(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nn(this.firestore,e,this._key)}}class En extends Xa{constructor(e,n,r){super(e,n,Qy(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nn(this.firestore,null,new ae(e))}withConverter(e){return new En(this.firestore,e,this._path)}}function Ov(t,e,...n){if(t=fr(t),zf("collection","path",e),t instanceof $i){const r=De.fromString(e,...n);return dc(r),new En(t,null,r)}{if(!(t instanceof nn||t instanceof En))throw new re(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return dc(r),new En(t.firestore,null,r)}}function Nv(t,e,...n){if(t=fr(t),arguments.length===1&&(e=cf.newId()),zf("doc","path",e),t instanceof $i){const r=De.fromString(e,...n);return fc(r),new nn(t,null,new ae(r))}{if(!(t instanceof nn||t instanceof En))throw new re(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return fc(r),new nn(t.firestore,t instanceof En?t.converter:null,new ae(r))}}/**
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
 */class gc{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new kf(this,"async_queue_retry"),this.fu=()=>{const r=Io();r&&J("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Io();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const n=Io();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const n=new Un;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!ys(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw qn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=Wa.createAndSchedule(this,e,n,r,o=>this.Su(o));return this.Eu.push(s),s}pu(){this.Au&&ue()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.Eu)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.Eu.indexOf(e);this.Eu.splice(n,1)}}class Gf extends $i{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new gc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gc(e),this._firestoreClient=void 0,await e}}}function Mv(t,e){const n=typeof t=="object"?t:ry(),r=typeof t=="string"?t:"(default)",s=Da(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Hm("firestore");o&&xv(s,...o)}return s}function kv(t){if(t._terminated)throw new re(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Lv(t),t._firestoreClient}function Lv(t){var e,n,r;const s=t._freezeSettings(),o=function(l,c,f,d){return new My(l,c,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Hf(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new Sv(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class ds{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ds(zt.fromBase64String(e))}catch(n){throw new re(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ds(zt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Wf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Qf{constructor(e){this._methodName=e}}/**
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
 */class Xf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
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
 */class Yf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const Fv=/^__.*__$/;class Uv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Es(e,this.data,n,this.fieldTransforms)}}function Jf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class Ya{constructor(e,n,r,s,o,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Ya(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Bu(e),s}Lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Ti(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Jf(this.Mu)&&Fv.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class Bv{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Fi(e)}$u(e,n,r,s=!1){return new Ya({Mu:e,methodName:n,Ku:r,path:ze.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jv(t){const e=t._freezeSettings(),n=Fi(t._databaseId);return new Bv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $v(t,e,n,r,s,o={}){const a=t.$u(o.merge||o.mergeFields?2:0,e,n,s);nd("Data must be an object, but it was:",a,r);const l=ed(r,a);let c,f;if(o.merge)c=new Ot(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const d=[];for(const p of o.mergeFields){const y=qv(e,p,n);if(!a.contains(y))throw new re(F.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Kv(d,y)||d.push(y)}c=new Ot(d),f=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,f=a.fieldTransforms;return new Uv(new xt(l),c,f)}function Zf(t,e){if(td(t=fr(t)))return nd("Unsupported field value:",e,t),ed(t,e);if(t instanceof Qf)return function(r,s){if(!Jf(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const l of r){let c=Zf(l,s.ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),a++}return{arrayValue:{values:o}}}(t,e)}return function(r,s){if((r=fr(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return iE(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Fe.fromDate(r);return{timestampValue:na(s.serializer,o)}}if(r instanceof Fe){const o=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:na(s.serializer,o)}}if(r instanceof Xf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ds)return{bytesValue:yE(s.serializer,r._byteString)};if(r instanceof nn){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:xf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Yf)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return qa(l.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Qa(r)}`)}(t,e)}function ed(t,e){const n={};return hf(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wr(t,(r,s)=>{const o=Zf(s,e.Ou(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function td(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof Xf||t instanceof ds||t instanceof nn||t instanceof Qf||t instanceof Yf)}function nd(t,e,n){if(!td(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Qa(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function qv(t,e,n){if((e=fr(e))instanceof Wf)return e._internalPath;if(typeof e=="string")return zv(t,e);throw Ti("Field path arguments must be of type string or ",t,!1,void 0,n)}const Hv=new RegExp("[~\\*/\\[\\]]");function zv(t,e,n){if(e.search(Hv)>=0)throw Ti(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wf(...e.split("."))._internalPath}catch{throw Ti(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ti(t,e,n,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(o||a)&&(c+=" (found",o&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new re(F.INVALID_ARGUMENT,l+t+c)}function Kv(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function Gv(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function Wv(t,e){const n=Kf(t.firestore,Gf),r=Nv(t),s=Gv(t.converter,e);return Qv(n,[$v(jv(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,tn.exists(!1))]).then(()=>r)}function Qv(t,e){return function(r,s){const o=new Un;return r.asyncQueue.enqueueAndForget(async()=>Tv(await Vv(r),s,o)),o.promise}(kv(t),e)}(function(e,n=!0){(function(s){Tr=s})(ny),vn(new rn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new Gf(new _y(r.getProvider("auth-internal")),new Ty(r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new re(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new di(f.options.projectId,d)}(a,s),a);return o=Object.assign({useFetchStreams:n},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),qt(Bu,"4.7.6",e),qt(Bu,"4.7.6","esm2017")})();const rd="@firebase/installations",Ja="0.6.12";/**
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
 */const sd=1e4,id=`w:${Ja}`,od="FIS_v2",Xv="https://firebaseinstallations.googleapis.com/v1",Yv=60*60*1e3,Jv="installations",Zv="Installations";/**
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
 */const eT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Kn=new Ni(Jv,Zv,eT);function ad(t){return t instanceof Sn&&t.code.includes("request-failed")}/**
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
 */function ld({projectId:t}){return`${Xv}/projects/${t}/installations`}function ud(t){return{token:t.token,requestStatus:2,expiresIn:nT(t.expiresIn),creationTime:Date.now()}}async function cd(t,e){const r=(await e.json()).error;return Kn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function hd({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function tT(t,{refreshToken:e}){const n=hd(t);return n.append("Authorization",rT(e)),n}async function fd(t){const e=await t();return e.status>=500&&e.status<600?t():e}function nT(t){return Number(t.replace("s","000"))}function rT(t){return`${od} ${t}`}/**
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
 */async function sT({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=ld(t),s=hd(t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={fid:n,authVersion:od,appId:t.appId,sdkVersion:id},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await fd(()=>fetch(r,l));if(c.ok){const f=await c.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:ud(f.authToken)}}else throw await cd("Create Installation",c)}/**
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
 */function dd(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function iT(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const oT=/^[cdef][\w-]{21}$/,oa="";function aT(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=lT(t);return oT.test(n)?n:oa}catch{return oa}}function lT(t){return iT(t).substr(0,22)}/**
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
 */function qi(t){return`${t.appName}!${t.appId}`}/**
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
 */const pd=new Map;function gd(t,e){const n=qi(t);md(n,e),uT(n,e)}function md(t,e){const n=pd.get(t);if(n)for(const r of n)r(e)}function uT(t,e){const n=cT();n&&n.postMessage({key:t,fid:e}),hT()}let Ln=null;function cT(){return!Ln&&"BroadcastChannel"in self&&(Ln=new BroadcastChannel("[Firebase] FID Change"),Ln.onmessage=t=>{md(t.data.key,t.data.fid)}),Ln}function hT(){pd.size===0&&Ln&&(Ln.close(),Ln=null)}/**
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
 */const fT="firebase-installations-database",dT=1,Gn="firebase-installations-store";let bo=null;function Za(){return bo||(bo=Zh(fT,dT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gn)}}})),bo}async function wi(t,e){const n=qi(t),s=(await Za()).transaction(Gn,"readwrite"),o=s.objectStore(Gn),a=await o.get(n);return await o.put(e,n),await s.done,(!a||a.fid!==e.fid)&&gd(t,e.fid),e}async function _d(t){const e=qi(t),r=(await Za()).transaction(Gn,"readwrite");await r.objectStore(Gn).delete(e),await r.done}async function Hi(t,e){const n=qi(t),s=(await Za()).transaction(Gn,"readwrite"),o=s.objectStore(Gn),a=await o.get(n),l=e(a);return l===void 0?await o.delete(n):await o.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&gd(t,l.fid),l}/**
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
 */async function el(t){let e;const n=await Hi(t.appConfig,r=>{const s=pT(r),o=gT(t,s);return e=o.registrationPromise,o.installationEntry});return n.fid===oa?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function pT(t){const e=t||{fid:aT(),registrationStatus:0};return yd(e)}function gT(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Kn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=mT(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_T(t)}:{installationEntry:e}}async function mT(t,e){try{const n=await sT(t,e);return wi(t.appConfig,n)}catch(n){throw ad(n)&&n.customData.serverCode===409?await _d(t.appConfig):await wi(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function _T(t){let e=await mc(t.appConfig);for(;e.registrationStatus===1;)await dd(100),e=await mc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await el(t);return r||n}return e}function mc(t){return Hi(t,e=>{if(!e)throw Kn.create("installation-not-found");return yd(e)})}function yd(t){return yT(t)?{fid:t.fid,registrationStatus:0}:t}function yT(t){return t.registrationStatus===1&&t.registrationTime+sd<Date.now()}/**
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
 */async function ET({appConfig:t,heartbeatServiceProvider:e},n){const r=vT(t,n),s=tT(t,n),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={installation:{sdkVersion:id,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await fd(()=>fetch(r,l));if(c.ok){const f=await c.json();return ud(f)}else throw await cd("Generate Auth Token",c)}function vT(t,{fid:e}){return`${ld(t)}/${e}/authTokens:generate`}/**
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
 */async function tl(t,e=!1){let n;const r=await Hi(t.appConfig,o=>{if(!Ed(o))throw Kn.create("not-registered");const a=o.authToken;if(!e&&IT(a))return o;if(a.requestStatus===1)return n=TT(t,e),o;{if(!navigator.onLine)throw Kn.create("app-offline");const l=bT(o);return n=wT(t,l),l}});return n?await n:r.authToken}async function TT(t,e){let n=await _c(t.appConfig);for(;n.authToken.requestStatus===1;)await dd(100),n=await _c(t.appConfig);const r=n.authToken;return r.requestStatus===0?tl(t,e):r}function _c(t){return Hi(t,e=>{if(!Ed(e))throw Kn.create("not-registered");const n=e.authToken;return RT(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function wT(t,e){try{const n=await ET(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await wi(t.appConfig,r),n}catch(n){if(ad(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _d(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await wi(t.appConfig,r)}throw n}}function Ed(t){return t!==void 0&&t.registrationStatus===2}function IT(t){return t.requestStatus===2&&!AT(t)}function AT(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Yv}function bT(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function RT(t){return t.requestStatus===1&&t.requestTime+sd<Date.now()}/**
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
 */async function ST(t){const e=t,{installationEntry:n,registrationPromise:r}=await el(e);return r?r.catch(console.error):tl(e).catch(console.error),n.fid}/**
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
 */async function CT(t,e=!1){const n=t;return await PT(n),(await tl(n,e)).token}async function PT(t){const{registrationPromise:e}=await el(t);e&&await e}/**
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
 */function VT(t){if(!t||!t.options)throw Ro("App Configuration");if(!t.name)throw Ro("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ro(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ro(t){return Kn.create("missing-app-config-values",{valueName:t})}/**
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
 */const vd="installations",DT="installations-internal",xT=t=>{const e=t.getProvider("app").getImmediate(),n=VT(e),r=Da(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},OT=t=>{const e=t.getProvider("app").getImmediate(),n=Da(e,vd).getImmediate();return{getId:()=>ST(n),getToken:s=>CT(n,s)}};function NT(){vn(new rn(vd,xT,"PUBLIC")),vn(new rn(DT,OT,"PRIVATE"))}NT();qt(rd,Ja);qt(rd,Ja,"esm2017");/**
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
 */const yc="analytics",MT="firebase_id",kT="origin",LT=60*1e3,FT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",nl="https://www.googletagmanager.com/gtag/js";/**
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
 */const ft=new Pa("@firebase/analytics");/**
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
 */const UT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},bt=new Ni("analytics","Analytics",UT);/**
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
 */function BT(t){if(!t.startsWith(nl)){const e=bt.create("invalid-gtag-resource",{gtagURL:t});return ft.warn(e.message),""}return t}function Td(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function jT(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function $T(t,e){const n=jT("firebase-js-sdk-policy",{createScriptURL:BT}),r=document.createElement("script"),s=`${nl}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function qT(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function HT(t,e,n,r,s,o){const a=r[s];try{if(a)await e[a];else{const c=(await Td(n)).find(f=>f.measurementId===s);c&&await e[c.appId]}}catch(l){ft.error(l)}t("config",s,o)}async function zT(t,e,n,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Td(n);for(const c of a){const f=l.find(p=>p.measurementId===c),d=f&&e[f.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,s||{})}catch(o){ft.error(o)}}function KT(t,e,n,r){async function s(o,...a){try{if(o==="event"){const[l,c]=a;await zT(t,e,n,l,c)}else if(o==="config"){const[l,c]=a;await HT(t,e,n,r,l,c)}else if(o==="consent"){const[l,c]=a;t("consent",l,c)}else if(o==="get"){const[l,c,f]=a;t("get",l,c,f)}else if(o==="set"){const[l]=a;t("set",l)}else t(o,...a)}catch(l){ft.error(l)}}return s}function GT(t,e,n,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=KT(o,t,e,n),{gtagCore:o,wrappedGtag:window[s]}}function WT(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(nl)&&n.src.includes(t))return n;return null}/**
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
 */const QT=30,XT=1e3;class YT{constructor(e={},n=XT){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const wd=new YT;function JT(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ZT(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:JT(r)},o=FT.replace("{app-id}",n),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let l="";try{const c=await a.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw bt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function ew(t,e=wd,n){const{appId:r,apiKey:s,measurementId:o}=t.options;if(!r)throw bt.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw bt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new rw;return setTimeout(async()=>{l.abort()},LT),Id({appId:r,apiKey:s,measurementId:o},a,l,e)}async function Id(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=wd){var o;const{appId:a,measurementId:l}=t;try{await tw(r,e)}catch(c){if(l)return ft.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw c}try{const c=await ZT(t);return s.deleteThrottleMetadata(a),c}catch(c){const f=c;if(!nw(f)){if(s.deleteThrottleMetadata(a),l)return ft.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:a,measurementId:l};throw c}const d=Number((o=f==null?void 0:f.customData)===null||o===void 0?void 0:o.httpStatus)===503?Vu(n,s.intervalMillis,QT):Vu(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(a,p),ft.debug(`Calling attemptFetch again in ${d} millis`),Id(t,p,r,s)}}function tw(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),o=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(o),r(bt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function nw(t){if(!(t instanceof Sn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class rw{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function sw(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const o=await e,a=Object.assign(Object.assign({},r),{send_to:o});t("event",n,a)}}/**
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
 */async function iw(){if(Qh())try{await Xh()}catch(t){return ft.warn(bt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ft.warn(bt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ow(t,e,n,r,s,o,a){var l;const c=ew(t);c.then(w=>{n[w.measurementId]=w.appId,t.options.measurementId&&w.measurementId!==t.options.measurementId&&ft.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>ft.error(w)),e.push(c);const f=iw().then(w=>{if(w)return r.getId()}),[d,p]=await Promise.all([c,f]);WT(o)||$T(o,d.measurementId),s("js",new Date);const y=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return y[kT]="firebase",y.update=!0,p!=null&&(y[MT]=p),s("config",d.measurementId,y),d.measurementId}/**
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
 */class aw{constructor(e){this.app=e}_delete(){return delete es[this.app.options.appId],Promise.resolve()}}let es={},Ec=[];const vc={};let So="dataLayer",lw="gtag",Tc,Ad,wc=!1;function uw(){const t=[];if(Qm()&&t.push("This is a browser extension environment."),Ym()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=bt.create("invalid-analytics-context",{errorInfo:e});ft.warn(n.message)}}function cw(t,e,n){uw();const r=t.options.appId;if(!r)throw bt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ft.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw bt.create("no-api-key");if(es[r]!=null)throw bt.create("already-exists",{id:r});if(!wc){qT(So);const{wrappedGtag:o,gtagCore:a}=GT(es,Ec,vc,So,lw);Ad=o,Tc=a,wc=!0}return es[r]=ow(t,Ec,vc,e,Tc,So,n),new aw(t)}function hw(t,e,n,r){t=fr(t),sw(Ad,es[t.app.options.appId],e,n,r).catch(s=>ft.error(s))}const Ic="@firebase/analytics",Ac="0.10.11";function fw(){vn(new rn(yc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return cw(r,s,n)},"PUBLIC")),vn(new rn("analytics-internal",t,"PRIVATE")),qt(Ic,Ac),qt(Ic,Ac,"esm2017");function t(e){try{const n=e.getProvider(yc).getImmediate();return{logEvent:(r,s,o)=>hw(n,r,s,o)}}catch(n){throw bt.create("interop-component-reg-failed",{reason:n})}}}fw();const dw={apiKey:"AIzaSyCaJnedelI1fPbdtuzo_Ewm-IHe30eevpo",authDomain:"rjpq-c9bbc.firebaseapp.com",projectId:"rjpq-c9bbc",storageBucket:"rjpq-c9bbc.firebasestorage.app",messagingSenderId:"951762727763",appId:"1:951762727763:web:69c3ca5ff3be1da86367a6",measurementId:"G-KW5K62G0FR"},pw=ef(dw),gw=Mv(pw);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ir=typeof document<"u";function bd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function mw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&bd(t.default)}const ye=Object.assign;function Co(t,e){const n={};for(const r in e){const s=e[r];n[r]=kt(s)?s.map(t):t(s)}return n}const ts=()=>{},kt=Array.isArray,Rd=/#/g,_w=/&/g,yw=/\//g,Ew=/=/g,vw=/\?/g,Sd=/\+/g,Tw=/%5B/g,ww=/%5D/g,Cd=/%5E/g,Iw=/%60/g,Pd=/%7B/g,Aw=/%7C/g,Vd=/%7D/g,bw=/%20/g;function rl(t){return encodeURI(""+t).replace(Aw,"|").replace(Tw,"[").replace(ww,"]")}function Rw(t){return rl(t).replace(Pd,"{").replace(Vd,"}").replace(Cd,"^")}function aa(t){return rl(t).replace(Sd,"%2B").replace(bw,"+").replace(Rd,"%23").replace(_w,"%26").replace(Iw,"`").replace(Pd,"{").replace(Vd,"}").replace(Cd,"^")}function Sw(t){return aa(t).replace(Ew,"%3D")}function Cw(t){return rl(t).replace(Rd,"%23").replace(vw,"%3F")}function Pw(t){return t==null?"":Cw(t).replace(yw,"%2F")}function ps(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Vw=/\/$/,Dw=t=>t.replace(Vw,"");function Po(t,e,n="/"){let r,s={},o="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),o=e.slice(c+1,l>-1?l:e.length),s=t(o)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=Mw(r??e,n),{fullPath:r+(o&&"?")+o+a,path:r,query:s,hash:ps(a)}}function xw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ow(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&yr(e.matched[r],n.matched[s])&&Dd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function yr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Dd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Nw(t[n],e[n]))return!1;return!0}function Nw(t,e){return kt(t)?Rc(t,e):kt(e)?Rc(e,t):t===e}function Rc(t,e){return kt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Mw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let o=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(a).join("/")}const fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var gs;(function(t){t.pop="pop",t.push="push"})(gs||(gs={}));var ns;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ns||(ns={}));function kw(t){if(!t)if(ir){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Dw(t)}const Lw=/^[^#]+#/;function Fw(t,e){return t.replace(Lw,"#")+e}function Uw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const zi=()=>({left:window.scrollX,top:window.scrollY});function Bw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Uw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Sc(t,e){return(history.state?history.state.position-e:-1)+t}const la=new Map;function jw(t,e){la.set(t,e)}function $w(t){const e=la.get(t);return la.delete(t),e}let qw=()=>location.protocol+"//"+location.host;function xd(t,e){const{pathname:n,search:r,hash:s}=e,o=t.indexOf("#");if(o>-1){let l=s.includes(t.slice(o))?t.slice(o).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),bc(c,"")}return bc(n,t)+r+s}function Hw(t,e,n,r){let s=[],o=[],a=null;const l=({state:y})=>{const w=xd(t,location),V=n.value,k=e.value;let U=0;if(y){if(n.value=w,e.value=y,a&&a===V){a=null;return}U=k?y.position-k.position:0}else r(w);s.forEach(G=>{G(n.value,V,{delta:U,type:gs.pop,direction:U?U>0?ns.forward:ns.back:ns.unknown})})};function c(){a=n.value}function f(y){s.push(y);const w=()=>{const V=s.indexOf(y);V>-1&&s.splice(V,1)};return o.push(w),w}function d(){const{history:y}=window;y.state&&y.replaceState(ye({},y.state,{scroll:zi()}),"")}function p(){for(const y of o)y();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:f,destroy:p}}function Cc(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?zi():null}}function zw(t){const{history:e,location:n}=window,r={value:xd(t,n)},s={value:e.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(c,f,d){const p=t.indexOf("#"),y=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:qw()+t+c;try{e[d?"replaceState":"pushState"](f,"",y),s.value=f}catch(w){console.error(w),n[d?"replace":"assign"](y)}}function a(c,f){const d=ye({},e.state,Cc(s.value.back,c,s.value.forward,!0),f,{position:s.value.position});o(c,d,!0),r.value=c}function l(c,f){const d=ye({},s.value,e.state,{forward:c,scroll:zi()});o(d.current,d,!0);const p=ye({},Cc(r.value,c,null),{position:d.position+1},f);o(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function Kw(t){t=kw(t);const e=zw(t),n=Hw(t,e.state,e.location,e.replace);function r(o,a=!0){a||n.pauseListeners(),history.go(o)}const s=ye({location:"",base:t,go:r,createHref:Fw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Gw(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Kw(t)}function Ww(t){return typeof t=="string"||t&&typeof t=="object"}function Od(t){return typeof t=="string"||typeof t=="symbol"}const Nd=Symbol("");var Pc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Pc||(Pc={}));function Er(t,e){return ye(new Error,{type:t,[Nd]:!0},e)}function Xt(t,e){return t instanceof Error&&Nd in t&&(e==null||!!(t.type&e))}const Vc="[^/]+?",Qw={sensitive:!1,strict:!1,start:!0,end:!0},Xw=/[.+*?^${}()[\]/\\]/g;function Yw(t,e){const n=ye({},Qw,e),r=[];let s=n.start?"^":"";const o=[];for(const f of t){const d=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let p=0;p<f.length;p++){const y=f[p];let w=40+(n.sensitive?.25:0);if(y.type===0)p||(s+="/"),s+=y.value.replace(Xw,"\\$&"),w+=40;else if(y.type===1){const{value:V,repeatable:k,optional:U,regexp:G}=y;o.push({name:V,repeatable:k,optional:U});const q=G||Vc;if(q!==Vc){w+=10;try{new RegExp(`(${q})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${V}" (${q}): `+z.message)}}let W=k?`((?:${q})(?:/(?:${q}))*)`:`(${q})`;p||(W=U&&f.length<2?`(?:/${W})`:"/"+W),U&&(W+="?"),s+=W,w+=20,U&&(w+=-8),k&&(w+=-20),q===".*"&&(w+=-50)}d.push(w)}r.push(d)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(f){const d=f.match(a),p={};if(!d)return null;for(let y=1;y<d.length;y++){const w=d[y]||"",V=o[y-1];p[V.name]=w&&V.repeatable?w.split("/"):w}return p}function c(f){let d="",p=!1;for(const y of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const w of y)if(w.type===0)d+=w.value;else if(w.type===1){const{value:V,repeatable:k,optional:U}=w,G=V in f?f[V]:"";if(kt(G)&&!k)throw new Error(`Provided param "${V}" is an array but it is not repeatable (* or + modifiers)`);const q=kt(G)?G.join("/"):G;if(!q)if(U)y.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${V}"`);d+=q}}return d||"/"}return{re:a,score:r,keys:o,parse:l,stringify:c}}function Jw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Md(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const o=Jw(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(Dc(r))return 1;if(Dc(s))return-1}return s.length-r.length}function Dc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Zw={type:0,value:""},eI=/[a-zA-Z0-9_]/;function tI(t){if(!t)return[[]];if(t==="/")return[[Zw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(w){throw new Error(`ERR (${n})/"${f}": ${w}`)}let n=0,r=n;const s=[];let o;function a(){o&&s.push(o),o=[]}let l=0,c,f="",d="";function p(){f&&(n===0?o.push({type:0,value:f}):n===1||n===2||n===3?(o.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),f="")}function y(){f+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(f&&p(),a()):c===":"?(p(),n=1):y();break;case 4:y(),n=r;break;case 1:c==="("?n=2:eI.test(c)?y():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${f}"`),p(),a(),s}function nI(t,e,n){const r=Yw(tI(t.path),n),s=ye(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function rI(t,e){const n=[],r=new Map;e=Mc({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function o(p,y,w){const V=!w,k=Oc(p);k.aliasOf=w&&w.record;const U=Mc(e,p),G=[k];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const ce of z)G.push(Oc(ye({},k,{components:w?w.record.components:k.components,path:ce,aliasOf:w?w.record:k})))}let q,W;for(const z of G){const{path:ce}=z;if(y&&ce[0]!=="/"){const ge=y.record.path,A=ge[ge.length-1]==="/"?"":"/";z.path=y.record.path+(ce&&A+ce)}if(q=nI(z,y,U),w?w.alias.push(q):(W=W||q,W!==q&&W.alias.push(q),V&&p.name&&!Nc(q)&&a(p.name)),kd(q)&&c(q),k.children){const ge=k.children;for(let A=0;A<ge.length;A++)o(ge[A],q,w&&w.children[A])}w=w||q}return W?()=>{a(W)}:ts}function a(p){if(Od(p)){const y=r.get(p);y&&(r.delete(p),n.splice(n.indexOf(y),1),y.children.forEach(a),y.alias.forEach(a))}else{const y=n.indexOf(p);y>-1&&(n.splice(y,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const y=oI(p,n);n.splice(y,0,p),p.record.name&&!Nc(p)&&r.set(p.record.name,p)}function f(p,y){let w,V={},k,U;if("name"in p&&p.name){if(w=r.get(p.name),!w)throw Er(1,{location:p});U=w.record.name,V=ye(xc(y.params,w.keys.filter(W=>!W.optional).concat(w.parent?w.parent.keys.filter(W=>W.optional):[]).map(W=>W.name)),p.params&&xc(p.params,w.keys.map(W=>W.name))),k=w.stringify(V)}else if(p.path!=null)k=p.path,w=n.find(W=>W.re.test(k)),w&&(V=w.parse(k),U=w.record.name);else{if(w=y.name?r.get(y.name):n.find(W=>W.re.test(y.path)),!w)throw Er(1,{location:p,currentLocation:y});U=w.record.name,V=ye({},y.params,p.params),k=w.stringify(V)}const G=[];let q=w;for(;q;)G.unshift(q.record),q=q.parent;return{name:U,path:k,params:V,matched:G,meta:iI(G)}}t.forEach(p=>o(p));function d(){n.length=0,r.clear()}return{addRoute:o,resolve:f,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function xc(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Oc(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:sI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function sI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Nc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function iI(t){return t.reduce((e,n)=>ye(e,n.meta),{})}function Mc(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function oI(t,e){let n=0,r=e.length;for(;n!==r;){const o=n+r>>1;Md(t,e[o])<0?r=o:n=o+1}const s=aI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function aI(t){let e=t;for(;e=e.parent;)if(kd(e)&&Md(t,e)===0)return e}function kd({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function lI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const o=r[s].replace(Sd," "),a=o.indexOf("="),l=ps(a<0?o:o.slice(0,a)),c=a<0?null:ps(o.slice(a+1));if(l in e){let f=e[l];kt(f)||(f=e[l]=[f]),f.push(c)}else e[l]=c}return e}function kc(t){let e="";for(let n in t){const r=t[n];if(n=Sw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(kt(r)?r.map(o=>o&&aa(o)):[r&&aa(r)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function uI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=kt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const cI=Symbol(""),Lc=Symbol(""),sl=Symbol(""),Ld=Symbol(""),ua=Symbol("");function Ur(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function gn(t,e,n,r,s,o=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const f=y=>{y===!1?c(Er(4,{from:n,to:e})):y instanceof Error?c(y):Ww(y)?c(Er(2,{from:e,to:y})):(a&&r.enterCallbacks[s]===a&&typeof y=="function"&&a.push(y),l())},d=o(()=>t.call(r&&r.instances[s],e,n,f));let p=Promise.resolve(d);t.length<3&&(p=p.then(f)),p.catch(y=>c(y))})}function Vo(t,e,n,r,s=o=>o()){const o=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(bd(c)){const d=(c.__vccOpts||c)[e];d&&o.push(gn(d,n,r,a,l,s))}else{let f=c();o.push(()=>f.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=mw(d)?d.default:d;a.mods[l]=d,a.components[l]=p;const w=(p.__vccOpts||p)[e];return w&&gn(w,n,r,a,l,s)()}))}}return o}function Fc(t){const e=en(sl),n=en(Ld),r=Dt(()=>{const c=ar(t.to);return e.resolve(c)}),s=Dt(()=>{const{matched:c}=r.value,{length:f}=c,d=c[f-1],p=n.matched;if(!d||!p.length)return-1;const y=p.findIndex(yr.bind(null,d));if(y>-1)return y;const w=Uc(c[f-2]);return f>1&&Uc(d)===w&&p[p.length-1].path!==w?p.findIndex(yr.bind(null,c[f-2])):y}),o=Dt(()=>s.value>-1&&gI(n.params,r.value.params)),a=Dt(()=>s.value>-1&&s.value===n.matched.length-1&&Dd(n.params,r.value.params));function l(c={}){if(pI(c)){const f=e[ar(t.replace)?"replace":"push"](ar(t.to)).catch(ts);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:r,href:Dt(()=>r.value.href),isActive:o,isExactActive:a,navigate:l}}function hI(t){return t.length===1?t[0]:t}const fI=mh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fc,setup(t,{slots:e}){const n=Ci(Fc(t)),{options:r}=en(sl),s=Dt(()=>({[Bc(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Bc(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&hI(e.default(n));return t.custom?o:Hh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),dI=fI;function pI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function gI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!kt(s)||s.length!==r.length||r.some((o,a)=>o!==s[a]))return!1}return!0}function Uc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Bc=(t,e,n)=>t??e??n,mI=mh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=en(ua),s=Dt(()=>t.route||r.value),o=en(Lc,0),a=Dt(()=>{let f=ar(o);const{matched:d}=s.value;let p;for(;(p=d[f])&&!p.components;)f++;return f}),l=Dt(()=>s.value.matched[a.value]);Gs(Lc,Dt(()=>a.value+1)),Gs(cI,l),Gs(ua,s);const c=ah();return Ws(()=>[c.value,l.value,t.name],([f,d,p],[y,w,V])=>{d&&(d.instances[p]=f,w&&w!==d&&f&&f===y&&(d.leaveGuards.size||(d.leaveGuards=w.leaveGuards),d.updateGuards.size||(d.updateGuards=w.updateGuards))),f&&d&&(!w||!yr(d,w)||!y)&&(d.enterCallbacks[p]||[]).forEach(k=>k(f))},{flush:"post"}),()=>{const f=s.value,d=t.name,p=l.value,y=p&&p.components[d];if(!y)return jc(n.default,{Component:y,route:f});const w=p.props[d],V=w?w===!0?f.params:typeof w=="function"?w(f):w:null,U=Hh(y,ye({},V,e,{onVnodeUnmounted:G=>{G.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return jc(n.default,{Component:U,route:f})||U}}});function jc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const _I=mI;function yI(t){const e=rI(t.routes,t),n=t.parseQuery||lI,r=t.stringifyQuery||kc,s=t.history,o=Ur(),a=Ur(),l=Ur(),c=Hp(fn);let f=fn;ir&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Co.bind(null,D=>""+D),p=Co.bind(null,Pw),y=Co.bind(null,ps);function w(D,X){let K,Y;return Od(D)?(K=e.getRecordMatcher(D),Y=X):Y=D,e.addRoute(Y,K)}function V(D){const X=e.getRecordMatcher(D);X&&e.removeRoute(X)}function k(){return e.getRoutes().map(D=>D.record)}function U(D){return!!e.getRecordMatcher(D)}function G(D,X){if(X=ye({},X||c.value),typeof D=="string"){const R=Po(n,D,X.path),x=e.resolve({path:R.path},X),N=s.createHref(R.fullPath);return ye(R,x,{params:y(x.params),hash:ps(R.hash),redirectedFrom:void 0,href:N})}let K;if(D.path!=null)K=ye({},D,{path:Po(n,D.path,X.path).path});else{const R=ye({},D.params);for(const x in R)R[x]==null&&delete R[x];K=ye({},D,{params:p(R)}),X.params=p(X.params)}const Y=e.resolve(K,X),me=D.hash||"";Y.params=d(y(Y.params));const m=xw(r,ye({},D,{hash:Rw(me),path:Y.path})),E=s.createHref(m);return ye({fullPath:m,hash:me,query:r===kc?uI(D.query):D.query||{}},Y,{redirectedFrom:void 0,href:E})}function q(D){return typeof D=="string"?Po(n,D,c.value.path):ye({},D)}function W(D,X){if(f!==D)return Er(8,{from:X,to:D})}function z(D){return A(D)}function ce(D){return z(ye(q(D),{replace:!0}))}function ge(D){const X=D.matched[D.matched.length-1];if(X&&X.redirect){const{redirect:K}=X;let Y=typeof K=="function"?K(D):K;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=q(Y):{path:Y},Y.params={}),ye({query:D.query,hash:D.hash,params:Y.path!=null?{}:D.params},Y)}}function A(D,X){const K=f=G(D),Y=c.value,me=D.state,m=D.force,E=D.replace===!0,R=ge(K);if(R)return A(ye(q(R),{state:typeof R=="object"?ye({},me,R.state):me,force:m,replace:E}),X||K);const x=K;x.redirectedFrom=X;let N;return!m&&Ow(r,Y,K)&&(N=Er(16,{to:x,from:Y}),Tt(Y,Y,!0,!1)),(N?Promise.resolve(N):I(x,Y)).catch(O=>Xt(O)?Xt(O,2)?O:St(O):le(O,x,Y)).then(O=>{if(O){if(Xt(O,2))return A(ye({replace:E},q(O.to),{state:typeof O.to=="object"?ye({},me,O.to.state):me,force:m}),X||x)}else O=S(x,Y,!0,E,me);return b(x,Y,O),O})}function _(D,X){const K=W(D,X);return K?Promise.reject(K):Promise.resolve()}function T(D){const X=an.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(D):D()}function I(D,X){let K;const[Y,me,m]=EI(D,X);K=Vo(Y.reverse(),"beforeRouteLeave",D,X);for(const R of Y)R.leaveGuards.forEach(x=>{K.push(gn(x,D,X))});const E=_.bind(null,D,X);return K.push(E),ct(K).then(()=>{K=[];for(const R of o.list())K.push(gn(R,D,X));return K.push(E),ct(K)}).then(()=>{K=Vo(me,"beforeRouteUpdate",D,X);for(const R of me)R.updateGuards.forEach(x=>{K.push(gn(x,D,X))});return K.push(E),ct(K)}).then(()=>{K=[];for(const R of m)if(R.beforeEnter)if(kt(R.beforeEnter))for(const x of R.beforeEnter)K.push(gn(x,D,X));else K.push(gn(R.beforeEnter,D,X));return K.push(E),ct(K)}).then(()=>(D.matched.forEach(R=>R.enterCallbacks={}),K=Vo(m,"beforeRouteEnter",D,X,T),K.push(E),ct(K))).then(()=>{K=[];for(const R of a.list())K.push(gn(R,D,X));return K.push(E),ct(K)}).catch(R=>Xt(R,8)?R:Promise.reject(R))}function b(D,X,K){l.list().forEach(Y=>T(()=>Y(D,X,K)))}function S(D,X,K,Y,me){const m=W(D,X);if(m)return m;const E=X===fn,R=ir?history.state:{};K&&(Y||E?s.replace(D.fullPath,ye({scroll:E&&R&&R.scroll},me)):s.push(D.fullPath,me)),c.value=D,Tt(D,X,K,E),St()}let v;function st(){v||(v=s.listen((D,X,K)=>{if(!Lt.listening)return;const Y=G(D),me=ge(Y);if(me){A(ye(me,{replace:!0,force:!0}),Y).catch(ts);return}f=Y;const m=c.value;ir&&jw(Sc(m.fullPath,K.delta),zi()),I(Y,m).catch(E=>Xt(E,12)?E:Xt(E,2)?(A(ye(q(E.to),{force:!0}),Y).then(R=>{Xt(R,20)&&!K.delta&&K.type===gs.pop&&s.go(-1,!1)}).catch(ts),Promise.reject()):(K.delta&&s.go(-K.delta,!1),le(E,Y,m))).then(E=>{E=E||S(Y,m,!1),E&&(K.delta&&!Xt(E,8)?s.go(-K.delta,!1):K.type===gs.pop&&Xt(E,20)&&s.go(-1,!1)),b(Y,m,E)}).catch(ts)}))}let vt=Ur(),Ne=Ur(),he;function le(D,X,K){St(D);const Y=Ne.list();return Y.length?Y.forEach(me=>me(D,X,K)):console.error(D),Promise.reject(D)}function pt(){return he&&c.value!==fn?Promise.resolve():new Promise((D,X)=>{vt.add([D,X])})}function St(D){return he||(he=!D,st(),vt.list().forEach(([X,K])=>D?K(D):X()),vt.reset()),D}function Tt(D,X,K,Y){const{scrollBehavior:me}=t;if(!ir||!me)return Promise.resolve();const m=!K&&$w(Sc(D.fullPath,0))||(Y||!K)&&history.state&&history.state.scroll||null;return hh().then(()=>me(D,X,m)).then(E=>E&&Bw(E)).catch(E=>le(E,D,X))}const Ce=D=>s.go(D);let Pe;const an=new Set,Lt={currentRoute:c,listening:!0,addRoute:w,removeRoute:V,clearRoutes:e.clearRoutes,hasRoute:U,getRoutes:k,resolve:G,options:t,push:z,replace:ce,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:o.add,beforeResolve:a.add,afterEach:l.add,onError:Ne.add,isReady:pt,install(D){const X=this;D.component("RouterLink",dI),D.component("RouterView",_I),D.config.globalProperties.$router=X,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>ar(c)}),ir&&!Pe&&c.value===fn&&(Pe=!0,z(s.location).catch(me=>{}));const K={};for(const me in fn)Object.defineProperty(K,me,{get:()=>c.value[me],enumerable:!0});D.provide(sl,X),D.provide(Ld,ih(K)),D.provide(ua,c);const Y=D.unmount;an.add(D),D.unmount=function(){an.delete(D),an.size<1&&(f=fn,v&&v(),v=null,c.value=fn,Pe=!1,he=!1),Y()}}};function ct(D){return D.reduce((X,K)=>X.then(()=>T(K)),Promise.resolve())}return Lt}function EI(t,e){const n=[],r=[],s=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const l=e.matched[a];l&&(t.matched.find(f=>yr(f,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(f=>yr(f,c))||s.push(c))}return[n,r,s]}const il=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},vI={__name:"HelloWorld",setup(t){const e=ah("");console.log(e.value);const n=async()=>{if(e.value)try{const r=await Wv(Ov(gw,"rooms"),{name:"Tokyo",country:"Japan"});console.log("Document written with ID: ",r.id)}catch(r){console.error("Error adding document: ",r)}finally{e.value=""}};return(r,s)=>{const o=tu("RouterLink"),a=tu("RouterView");return Uh(),Bh(Pt,null,[At("nav",null,[ut(o,{to:"/"},{default:Lo(()=>s[1]||(s[1]=[$o("Go to Home")])),_:1}),ut(o,{to:"/about"},{default:Lo(()=>s[2]||(s[2]=[$o("Go to About")])),_:1})]),At("div",null,[ut(a)]),At("div",null,[eg(At("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=l=>e.value=l),onKeyup:Pm(n,["enter"])},null,544),[[Sm,e.value,void 0,{trim:!0}]]),At("button",{type:"button",onClick:n},"新增")])],64)}}},Fd=il(vI,[["__scopeId","data-v-b797dc87"]]),TI={};function wI(t,e){return" 這是第二夜 "}const II=il(TI,[["render",wI]]),AI=[{path:"/",component:Fd},{path:"/about",component:II}],bI=yI({history:Gw(),routes:AI}),RI="/rjpq-tool/vite.svg",SI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e",CI={__name:"App",setup(t){return(e,n)=>(Uh(),Bh(Pt,null,[n[0]||(n[0]=At("div",null,[At("a",{href:"https://vite.dev",target:"_blank"},[At("img",{src:RI,class:"logo",alt:"Vite logo"})]),At("a",{href:"https://vuejs.org/",target:"_blank"},[At("img",{src:SI,class:"logo vue",alt:"Vue logo"})])],-1)),ut(Fd,{msg:"Vite + Vue"})],64))}},PI=il(CI,[["__scopeId","data-v-962047bb"]]),Ud=xm(PI);Ud.use(bI);Ud.mount("#app");
