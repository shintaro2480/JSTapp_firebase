(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function oo(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const _e={},jn=[],_t=()=>{},_f=()=>!1,Mr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ao=t=>t.startsWith("onUpdate:"),Ne=Object.assign,lo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yf=Object.prototype.hasOwnProperty,fe=(t,e)=>yf.call(t,e),te=Array.isArray,Hn=t=>Ur(t)==="[object Map]",Ec=t=>Ur(t)==="[object Set]",ne=t=>typeof t=="function",Ce=t=>typeof t=="string",an=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",wc=t=>(Ie(t)||ne(t))&&ne(t.then)&&ne(t.catch),bc=Object.prototype.toString,Ur=t=>bc.call(t),Ef=t=>Ur(t).slice(8,-1),Ic=t=>Ur(t)==="[object Object]",co=t=>Ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vi=oo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},wf=/-(\w)/g,at=Fr(t=>t.replace(wf,(e,n)=>n?n.toUpperCase():"")),bf=/\B([A-Z])/g,Tn=Fr(t=>t.replace(bf,"-$1").toLowerCase()),jr=Fr(t=>t.charAt(0).toUpperCase()+t.slice(1)),ps=Fr(t=>t?`on${jr(t)}`:""),on=(t,e)=>!Object.is(t,e),hr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Tc=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Ms=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ua;const Sc=()=>Ua||(Ua=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function uo(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Ce(i)?Af(i):uo(i);if(s)for(const o in s)e[o]=s[o]}return e}else if(Ce(t)||Ie(t))return t}const If=/;(?![^(]*\))/g,Tf=/:([^]+)/,Sf=/\/\*[^]*?\*\//g;function Af(t){const e={};return t.replace(Sf,"").split(If).forEach(n=>{if(n){const i=n.split(Tf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ho(t){let e="";if(Ce(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const i=ho(t[n]);i&&(e+=i+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Cf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rf=oo(Cf);function Ac(t){return!!t||t===""}const Cc=t=>!!(t&&t.__v_isRef===!0),Rc=t=>Ce(t)?t:t==null?"":te(t)||Ie(t)&&(t.toString===bc||!ne(t.toString))?Cc(t)?Rc(t.value):JSON.stringify(t,Pc,2):String(t),Pc=(t,e)=>Cc(e)?Pc(t,e.value):Hn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],o)=>(n[gs(i,o)+" =>"]=s,n),{})}:Ec(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>gs(n))}:an(e)?gs(e):Ie(e)&&!te(e)&&!Ic(e)?String(e):e,gs=(t,e="")=>{var n;return an(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ze;class Oc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ze,!e&&Ze&&(this.index=(Ze.scopes||(Ze.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ze;try{return Ze=this,e()}finally{Ze=n}}}on(){Ze=this}off(){Ze=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Pf(t){return new Oc(t)}function Of(){return Ze}let ye;const ms=new WeakSet;class kc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ze&&Ze.active&&Ze.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ms.has(this)&&(ms.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Dc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fa(this),xc(this);const e=ye,n=ht;ye=this,ht=!0;try{return this.fn()}finally{Lc(this),ye=e,ht=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)go(e);this.deps=this.depsTail=void 0,Fa(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ms.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Us(this)&&this.run()}get dirty(){return Us(this)}}let Nc=0,Un;function Dc(t){t.flags|=8,t.next=Un,Un=t}function fo(){Nc++}function po(){if(--Nc>0)return;let t;for(;Un;){let e=Un,n;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=Un,Un=void 0;e;){if(n=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function xc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Lc(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),go(i),kf(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Us(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Mc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Mc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ai))return;t.globalVersion=Ai;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Us(t)){t.flags&=-3;return}const n=ye,i=ht;ye=t,ht=!0;try{xc(t);const s=t.fn(t._value);(e.version===0||on(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ye=n,ht=i,Lc(t),t.flags&=-3}}function go(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i),!n.subs&&n.computed){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)go(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function kf(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ht=!0;const Uc=[];function ln(){Uc.push(ht),ht=!1}function cn(){const t=Uc.pop();ht=t===void 0?!0:t}function Fa(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ye;ye=void 0;try{e()}finally{ye=n}}}let Ai=0;class Nf{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class mo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ye||!ht||ye===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ye)n=this.activeLink=new Nf(ye,this),ye.deps?(n.prevDep=ye.depsTail,ye.depsTail.nextDep=n,ye.depsTail=n):ye.deps=ye.depsTail=n,Fc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ye.depsTail,n.nextDep=void 0,ye.depsTail.nextDep=n,ye.depsTail=n,ye.deps===n&&(ye.deps=i)}return n}trigger(e){this.version++,Ai++,this.notify(e)}notify(e){fo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{po()}}}function Fc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Fc(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Fs=new WeakMap,vn=Symbol(""),js=Symbol(""),Ci=Symbol("");function $e(t,e,n){if(ht&&ye){let i=Fs.get(t);i||Fs.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new mo),s.target=t,s.map=i,s.key=n),s.track()}}function Dt(t,e,n,i,s,o){const l=Fs.get(t);if(!l){Ai++;return}const u=h=>{h&&h.trigger()};if(fo(),e==="clear")l.forEach(u);else{const h=te(t),d=h&&co(n);if(h&&n==="length"){const g=Number(i);l.forEach((_,w)=>{(w==="length"||w===Ci||!an(w)&&w>=g)&&u(_)})}else switch(n!==void 0&&u(l.get(n)),d&&u(l.get(Ci)),e){case"add":h?d&&u(l.get("length")):(u(l.get(vn)),Hn(t)&&u(l.get(js)));break;case"delete":h||(u(l.get(vn)),Hn(t)&&u(l.get(js)));break;case"set":Hn(t)&&u(l.get(vn));break}}po()}function Dn(t){const e=pe(t);return e===t?e:($e(e,"iterate",Ci),ft(t)?e:e.map(Ge))}function vo(t){return $e(t=pe(t),"iterate",Ci),t}const Df={__proto__:null,[Symbol.iterator](){return vs(this,Symbol.iterator,Ge)},concat(...t){return Dn(this).concat(...t.map(e=>te(e)?Dn(e):e))},entries(){return vs(this,"entries",t=>(t[1]=Ge(t[1]),t))},every(t,e){return Tt(this,"every",t,e,void 0,arguments)},filter(t,e){return Tt(this,"filter",t,e,n=>n.map(Ge),arguments)},find(t,e){return Tt(this,"find",t,e,Ge,arguments)},findIndex(t,e){return Tt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Tt(this,"findLast",t,e,Ge,arguments)},findLastIndex(t,e){return Tt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Tt(this,"forEach",t,e,void 0,arguments)},includes(...t){return _s(this,"includes",t)},indexOf(...t){return _s(this,"indexOf",t)},join(t){return Dn(this).join(t)},lastIndexOf(...t){return _s(this,"lastIndexOf",t)},map(t,e){return Tt(this,"map",t,e,void 0,arguments)},pop(){return di(this,"pop")},push(...t){return di(this,"push",t)},reduce(t,...e){return ja(this,"reduce",t,e)},reduceRight(t,...e){return ja(this,"reduceRight",t,e)},shift(){return di(this,"shift")},some(t,e){return Tt(this,"some",t,e,void 0,arguments)},splice(...t){return di(this,"splice",t)},toReversed(){return Dn(this).toReversed()},toSorted(t){return Dn(this).toSorted(t)},toSpliced(...t){return Dn(this).toSpliced(...t)},unshift(...t){return di(this,"unshift",t)},values(){return vs(this,"values",Ge)}};function vs(t,e,n){const i=vo(t),s=i[e]();return i!==t&&!ft(t)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=n(o.value)),o}),s}const xf=Array.prototype;function Tt(t,e,n,i,s,o){const l=vo(t),u=l!==t&&!ft(t),h=l[e];if(h!==xf[e]){const _=h.apply(t,o);return u?Ge(_):_}let d=n;l!==t&&(u?d=function(_,w){return n.call(this,Ge(_),w,t)}:n.length>2&&(d=function(_,w){return n.call(this,_,w,t)}));const g=h.call(l,d,i);return u&&s?s(g):g}function ja(t,e,n,i){const s=vo(t);let o=n;return s!==t&&(ft(t)?n.length>3&&(o=function(l,u,h){return n.call(this,l,u,h,t)}):o=function(l,u,h){return n.call(this,l,Ge(u),h,t)}),s[e](o,...i)}function _s(t,e,n){const i=pe(t);$e(i,"iterate",Ci);const s=i[e](...n);return(s===-1||s===!1)&&wo(n[0])?(n[0]=pe(n[0]),i[e](...n)):s}function di(t,e,n=[]){ln(),fo();const i=pe(t)[e].apply(t,n);return po(),cn(),i}const Lf=oo("__proto__,__v_isRef,__isVue"),jc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(an));function Mf(t){an(t)||(t=String(t));const e=pe(this);return $e(e,"has",t),e.hasOwnProperty(t)}class Hc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(s?o?Jf:Kc:o?Vc:$c).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const l=te(e);if(!s){let h;if(l&&(h=Df[n]))return h;if(n==="hasOwnProperty")return Mf}const u=Reflect.get(e,n,Be(e)?e:i);return(an(n)?jc.has(n):Lf(n))||(s||$e(e,"get",n),o)?u:Be(u)?l&&co(n)?u:u.value:Ie(u)?s?zc(u):Br(u):u}}class Bc extends Hc{constructor(e=!1){super(!1,e)}set(e,n,i,s){let o=e[n];if(!this._isShallow){const h=yn(o);if(!ft(i)&&!yn(i)&&(o=pe(o),i=pe(i)),!te(e)&&Be(o)&&!Be(i))return h?!1:(o.value=i,!0)}const l=te(e)&&co(n)?Number(n)<e.length:fe(e,n),u=Reflect.set(e,n,i,Be(e)?e:s);return e===pe(s)&&(l?on(i,o)&&Dt(e,"set",n,i):Dt(e,"add",n,i)),u}deleteProperty(e,n){const i=fe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Dt(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!an(n)||!jc.has(n))&&$e(e,"has",n),i}ownKeys(e){return $e(e,"iterate",te(e)?"length":vn),Reflect.ownKeys(e)}}class Uf extends Hc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ff=new Bc,jf=new Uf,Hf=new Bc(!0);const _o=t=>t,Hr=t=>Reflect.getPrototypeOf(t);function ir(t,e,n=!1,i=!1){t=t.__v_raw;const s=pe(t),o=pe(e);n||(on(e,o)&&$e(s,"get",e),$e(s,"get",o));const{has:l}=Hr(s),u=i?_o:n?bo:Ge;if(l.call(s,e))return u(t.get(e));if(l.call(s,o))return u(t.get(o));t!==s&&t.get(e)}function rr(t,e=!1){const n=this.__v_raw,i=pe(n),s=pe(t);return e||(on(t,s)&&$e(i,"has",t),$e(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function sr(t,e=!1){return t=t.__v_raw,!e&&$e(pe(t),"iterate",vn),Reflect.get(t,"size",t)}function Ha(t,e=!1){!e&&!ft(t)&&!yn(t)&&(t=pe(t));const n=pe(this);return Hr(n).has.call(n,t)||(n.add(t),Dt(n,"add",t,t)),this}function Ba(t,e,n=!1){!n&&!ft(e)&&!yn(e)&&(e=pe(e));const i=pe(this),{has:s,get:o}=Hr(i);let l=s.call(i,t);l||(t=pe(t),l=s.call(i,t));const u=o.call(i,t);return i.set(t,e),l?on(e,u)&&Dt(i,"set",t,e):Dt(i,"add",t,e),this}function $a(t){const e=pe(this),{has:n,get:i}=Hr(e);let s=n.call(e,t);s||(t=pe(t),s=n.call(e,t)),i&&i.call(e,t);const o=e.delete(t);return s&&Dt(e,"delete",t,void 0),o}function Va(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&Dt(t,"clear",void 0,void 0),n}function or(t,e){return function(i,s){const o=this,l=o.__v_raw,u=pe(l),h=e?_o:t?bo:Ge;return!t&&$e(u,"iterate",vn),l.forEach((d,g)=>i.call(s,h(d),h(g),o))}}function ar(t,e,n){return function(...i){const s=this.__v_raw,o=pe(s),l=Hn(o),u=t==="entries"||t===Symbol.iterator&&l,h=t==="keys"&&l,d=s[t](...i),g=n?_o:e?bo:Ge;return!e&&$e(o,"iterate",h?js:vn),{next(){const{value:_,done:w}=d.next();return w?{value:_,done:w}:{value:u?[g(_[0]),g(_[1])]:g(_),done:w}},[Symbol.iterator](){return this}}}}function Wt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Bf(){const t={get(o){return ir(this,o)},get size(){return sr(this)},has:rr,add:Ha,set:Ba,delete:$a,clear:Va,forEach:or(!1,!1)},e={get(o){return ir(this,o,!1,!0)},get size(){return sr(this)},has:rr,add(o){return Ha.call(this,o,!0)},set(o,l){return Ba.call(this,o,l,!0)},delete:$a,clear:Va,forEach:or(!1,!0)},n={get(o){return ir(this,o,!0)},get size(){return sr(this,!0)},has(o){return rr.call(this,o,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:or(!0,!1)},i={get(o){return ir(this,o,!0,!0)},get size(){return sr(this,!0)},has(o){return rr.call(this,o,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:or(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=ar(o,!1,!1),n[o]=ar(o,!0,!1),e[o]=ar(o,!1,!0),i[o]=ar(o,!0,!0)}),[t,n,e,i]}const[$f,Vf,Kf,Wf]=Bf();function yo(t,e){const n=e?t?Wf:Kf:t?Vf:$f;return(i,s,o)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(fe(n,s)&&s in i?n:i,s,o)}const zf={get:yo(!1,!1)},Gf={get:yo(!1,!0)},qf={get:yo(!0,!1)};const $c=new WeakMap,Vc=new WeakMap,Kc=new WeakMap,Jf=new WeakMap;function Xf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yf(t){return t.__v_skip||!Object.isExtensible(t)?0:Xf(Ef(t))}function Br(t){return yn(t)?t:Eo(t,!1,Ff,zf,$c)}function Wc(t){return Eo(t,!1,Hf,Gf,Vc)}function zc(t){return Eo(t,!0,jf,qf,Kc)}function Eo(t,e,n,i,s){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=s.get(t);if(o)return o;const l=Yf(t);if(l===0)return t;const u=new Proxy(t,l===2?i:n);return s.set(t,u),u}function _i(t){return yn(t)?_i(t.__v_raw):!!(t&&t.__v_isReactive)}function yn(t){return!!(t&&t.__v_isReadonly)}function ft(t){return!!(t&&t.__v_isShallow)}function wo(t){return t?!!t.__v_raw:!1}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function Gc(t){return!fe(t,"__v_skip")&&Object.isExtensible(t)&&Tc(t,"__v_skip",!0),t}const Ge=t=>Ie(t)?Br(t):t,bo=t=>Ie(t)?zc(t):t;function Be(t){return t?t.__v_isRef===!0:!1}function qc(t){return Jc(t,!1)}function Qf(t){return Jc(t,!0)}function Jc(t,e){return Be(t)?t:new Zf(t,e)}class Zf{constructor(e,n){this.dep=new mo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:pe(e),this._value=n?e:Ge(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||ft(e)||yn(e);e=i?e:pe(e),on(e,n)&&(this._rawValue=e,this._value=i?e:Ge(e),this.dep.trigger())}}function _n(t){return Be(t)?t.value:t}const ed={get:(t,e,n)=>e==="__v_raw"?t:_n(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Be(s)&&!Be(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Xc(t){return _i(t)?t:new Proxy(t,ed)}class td{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new mo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ai-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ye!==this)return Dc(this),!0}get value(){const e=this.dep.track();return Mc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function nd(t,e,n=!1){let i,s;return ne(t)?i=t:(i=t.get,s=t.set),new td(i,s,n)}const lr={},wr=new WeakMap;let gn;function id(t,e=!1,n=gn){if(n){let i=wr.get(n);i||wr.set(n,i=[]),i.push(t)}}function rd(t,e,n=_e){const{immediate:i,deep:s,once:o,scheduler:l,augmentJob:u,call:h}=n,d=V=>s?V:ft(V)||s===!1||s===0?Rt(V,1):Rt(V);let g,_,w,R,x=!1,j=!1;if(Be(t)?(_=()=>t.value,x=ft(t)):_i(t)?(_=()=>d(t),x=!0):te(t)?(j=!0,x=t.some(V=>_i(V)||ft(V)),_=()=>t.map(V=>{if(Be(V))return V.value;if(_i(V))return d(V);if(ne(V))return h?h(V,2):V()})):ne(t)?e?_=h?()=>h(t,2):t:_=()=>{if(w){ln();try{w()}finally{cn()}}const V=gn;gn=g;try{return h?h(t,3,[R]):t(R)}finally{gn=V}}:_=_t,e&&s){const V=_,re=s===!0?1/0:s;_=()=>Rt(V(),re)}const G=Of(),X=()=>{g.stop(),G&&lo(G.effects,g)};if(o&&e){const V=e;e=(...re)=>{V(...re),X()}}let K=j?new Array(t.length).fill(lr):lr;const z=V=>{if(!(!(g.flags&1)||!g.dirty&&!V))if(e){const re=g.run();if(s||x||(j?re.some((le,b)=>on(le,K[b])):on(re,K))){w&&w();const le=gn;gn=g;try{const b=[re,K===lr?void 0:j&&K[0]===lr?[]:K,R];h?h(e,3,b):e(...b),K=re}finally{gn=le}}}else g.run()};return u&&u(z),g=new kc(_),g.scheduler=l?()=>l(z,!1):z,R=V=>id(V,!1,g),w=g.onStop=()=>{const V=wr.get(g);if(V){if(h)h(V,4);else for(const re of V)re();wr.delete(g)}},e?i?z(!0):K=g.run():l?l(z.bind(null,!0),!0):g.run(),X.pause=g.pause.bind(g),X.resume=g.resume.bind(g),X.stop=X,X}function Rt(t,e=1/0,n){if(e<=0||!Ie(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Be(t))Rt(t.value,e,n);else if(te(t))for(let i=0;i<t.length;i++)Rt(t[i],e,n);else if(Ec(t)||Hn(t))t.forEach(i=>{Rt(i,e,n)});else if(Ic(t)){for(const i in t)Rt(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Rt(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mi(t,e,n,i){try{return i?t(...i):t()}catch(s){$r(s,e,n)}}function wt(t,e,n,i){if(ne(t)){const s=Mi(t,e,n,i);return s&&wc(s)&&s.catch(o=>{$r(o,e,n)}),s}if(te(t)){const s=[];for(let o=0;o<t.length;o++)s.push(wt(t[o],e,n,i));return s}}function $r(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||_e;if(e){let u=e.parent;const h=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;u;){const g=u.ec;if(g){for(let _=0;_<g.length;_++)if(g[_](t,h,d)===!1)return}u=u.parent}if(o){ln(),Mi(o,null,10,[t,h,d]),cn();return}}sd(t,n,s,i,l)}function sd(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}let Ri=!1,Hs=!1;const qe=[];let mt=0;const Bn=[];let qt=null,xn=0;const Yc=Promise.resolve();let Io=null;function Qc(t){const e=Io||Yc;return t?e.then(this?t.bind(this):t):e}function od(t){let e=Ri?mt+1:0,n=qe.length;for(;e<n;){const i=e+n>>>1,s=qe[i],o=Pi(s);o<t||o===t&&s.flags&2?e=i+1:n=i}return e}function To(t){if(!(t.flags&1)){const e=Pi(t),n=qe[qe.length-1];!n||!(t.flags&2)&&e>=Pi(n)?qe.push(t):qe.splice(od(e),0,t),t.flags|=1,Zc()}}function Zc(){!Ri&&!Hs&&(Hs=!0,Io=Yc.then(tu))}function ad(t){te(t)?Bn.push(...t):qt&&t.id===-1?qt.splice(xn+1,0,t):t.flags&1||(Bn.push(t),t.flags|=1),Zc()}function Ka(t,e,n=Ri?mt+1:0){for(;n<qe.length;n++){const i=qe[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;qe.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function eu(t){if(Bn.length){const e=[...new Set(Bn)].sort((n,i)=>Pi(n)-Pi(i));if(Bn.length=0,qt){qt.push(...e);return}for(qt=e,xn=0;xn<qt.length;xn++){const n=qt[xn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}qt=null,xn=0}}const Pi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function tu(t){Hs=!1,Ri=!0;try{for(mt=0;mt<qe.length;mt++){const e=qe[mt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Mi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mt<qe.length;mt++){const e=qe[mt];e&&(e.flags&=-2)}mt=0,qe.length=0,eu(),Ri=!1,Io=null,(qe.length||Bn.length)&&tu()}}let et=null,nu=null;function br(t){const e=et;return et=t,nu=t&&t.type.__scopeId||null,e}function So(t,e=et,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&el(-1);const o=br(e);let l;try{l=t(...s)}finally{br(o),i._d&&el(1)}return l};return i._n=!0,i._c=!0,i._d=!0,i}function Wa(t,e){if(et===null)return t;const n=Gr(et),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,l,u,h=_e]=e[s];o&&(ne(o)&&(o={mounted:o,updated:o}),o.deep&&Rt(l),i.push({dir:o,instance:n,value:l,oldValue:void 0,arg:u,modifiers:h}))}return t}function dn(t,e,n,i){const s=t.dirs,o=e&&e.dirs;for(let l=0;l<s.length;l++){const u=s[l];o&&(u.oldValue=o[l].value);let h=u.dir[i];h&&(ln(),wt(h,n,8,[t.el,u,t,e]),cn())}}const ld=Symbol("_vte"),cd=t=>t.__isTeleport;function Ao(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ao(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function iu(t,e){return ne(t)?Ne({name:t.name},e,{setup:t}):t}function ru(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Bs(t,e,n,i,s=!1){if(te(t)){t.forEach((x,j)=>Bs(x,e&&(te(e)?e[j]:e),n,i,s));return}if(yi(i)&&!s)return;const o=i.shapeFlag&4?Gr(i.component):i.el,l=s?null:o,{i:u,r:h}=t,d=e&&e.r,g=u.refs===_e?u.refs={}:u.refs,_=u.setupState,w=pe(_),R=_===_e?()=>!1:x=>fe(w,x);if(d!=null&&d!==h&&(Ce(d)?(g[d]=null,R(d)&&(_[d]=null)):Be(d)&&(d.value=null)),ne(h))Mi(h,u,12,[l,g]);else{const x=Ce(h),j=Be(h);if(x||j){const G=()=>{if(t.f){const X=x?R(h)?_[h]:g[h]:h.value;s?te(X)&&lo(X,o):te(X)?X.includes(o)||X.push(o):x?(g[h]=[o],R(h)&&(_[h]=g[h])):(h.value=[o],t.k&&(g[t.k]=h.value))}else x?(g[h]=l,R(h)&&(_[h]=l)):j&&(h.value=l,t.k&&(g[t.k]=l))};l?(G.id=-1,Qe(G,n)):G()}}}const yi=t=>!!t.type.__asyncLoader,su=t=>t.type.__isKeepAlive;function ud(t,e){ou(t,"a",e)}function hd(t,e){ou(t,"da",e)}function ou(t,e,n=Fe){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Vr(e,i,n),n){let s=n.parent;for(;s&&s.parent;)su(s.parent.vnode)&&fd(i,e,n,s),s=s.parent}}function fd(t,e,n,i){const s=Vr(e,t,i,!0);au(()=>{lo(i[e],s)},n)}function Vr(t,e,n=Fe,i=!1){if(n){const s=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...l)=>{ln();const u=Ui(n),h=wt(e,n,t,l);return u(),cn(),h});return i?s.unshift(o):s.push(o),o}}const Ft=t=>(e,n=Fe)=>{(!zr||t==="sp")&&Vr(t,(...i)=>e(...i),n)},dd=Ft("bm"),pd=Ft("m"),gd=Ft("bu"),md=Ft("u"),vd=Ft("bum"),au=Ft("um"),_d=Ft("sp"),yd=Ft("rtg"),Ed=Ft("rtc");function wd(t,e=Fe){Vr("ec",t,e)}const bd="components";function lu(t,e){return Td(bd,t,!0,e)||t}const Id=Symbol.for("v-ndc");function Td(t,e,n=!0,i=!1){const s=et||Fe;if(s){const o=s.type;{const u=dp(o,!1);if(u&&(u===e||u===at(e)||u===jr(at(e))))return o}const l=za(s[t]||o[t],e)||za(s.appContext[t],e);return!l&&i?o:l}}function za(t,e){return t&&(t[e]||t[at(e)]||t[jr(at(e))])}const $s=t=>t?Ru(t)?Gr(t):$s(t.parent):null,Ei=Ne(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$s(t.parent),$root:t=>$s(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Co(t),$forceUpdate:t=>t.f||(t.f=()=>{To(t.update)}),$nextTick:t=>t.n||(t.n=Qc.bind(t.proxy)),$watch:t=>Wd.bind(t)}),ys=(t,e)=>t!==_e&&!t.__isScriptSetup&&fe(t,e),Sd={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:o,accessCache:l,type:u,appContext:h}=t;let d;if(e[0]!=="$"){const R=l[e];if(R!==void 0)switch(R){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return o[e]}else{if(ys(i,e))return l[e]=1,i[e];if(s!==_e&&fe(s,e))return l[e]=2,s[e];if((d=t.propsOptions[0])&&fe(d,e))return l[e]=3,o[e];if(n!==_e&&fe(n,e))return l[e]=4,n[e];Vs&&(l[e]=0)}}const g=Ei[e];let _,w;if(g)return e==="$attrs"&&$e(t.attrs,"get",""),g(t);if((_=u.__cssModules)&&(_=_[e]))return _;if(n!==_e&&fe(n,e))return l[e]=4,n[e];if(w=h.config.globalProperties,fe(w,e))return w[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:o}=t;return ys(s,e)?(s[e]=n,!0):i!==_e&&fe(i,e)?(i[e]=n,!0):fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:o}},l){let u;return!!n[l]||t!==_e&&fe(t,l)||ys(e,l)||(u=o[0])&&fe(u,l)||fe(i,l)||fe(Ei,l)||fe(s.config.globalProperties,l)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ga(t){return te(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Vs=!0;function Ad(t){const e=Co(t),n=t.proxy,i=t.ctx;Vs=!1,e.beforeCreate&&qa(e.beforeCreate,t,"bc");const{data:s,computed:o,methods:l,watch:u,provide:h,inject:d,created:g,beforeMount:_,mounted:w,beforeUpdate:R,updated:x,activated:j,deactivated:G,beforeDestroy:X,beforeUnmount:K,destroyed:z,unmounted:V,render:re,renderTracked:le,renderTriggered:b,errorCaptured:m,serverPrefetch:E,expose:I,inheritAttrs:T,components:S,directives:y,filters:Ve}=e;if(d&&Cd(d,i,null),l)for(const se in l){const ie=l[se];ne(ie)&&(i[se]=ie.bind(n))}if(s){const se=s.call(n,n);Ie(se)&&(t.data=Br(se))}if(Vs=!0,o)for(const se in o){const ie=o[se],Ye=ne(ie)?ie.bind(n,n):ne(ie.get)?ie.get.bind(n,n):_t,lt=!ne(ie)&&ne(ie.set)?ie.set.bind(n):_t,rt=ut({get:Ye,set:lt});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>rt.value,set:we=>rt.value=we})}if(u)for(const se in u)cu(u[se],i,n,se);if(h){const se=ne(h)?h.call(n):h;Reflect.ownKeys(se).forEach(ie=>{fr(ie,se[ie])})}g&&qa(g,t,"c");function Ae(se,ie){te(ie)?ie.forEach(Ye=>se(Ye.bind(n))):ie&&se(ie.bind(n))}if(Ae(dd,_),Ae(pd,w),Ae(gd,R),Ae(md,x),Ae(ud,j),Ae(hd,G),Ae(wd,m),Ae(Ed,le),Ae(yd,b),Ae(vd,K),Ae(au,V),Ae(_d,E),te(I))if(I.length){const se=t.exposed||(t.exposed={});I.forEach(ie=>{Object.defineProperty(se,ie,{get:()=>n[ie],set:Ye=>n[ie]=Ye})})}else t.exposed||(t.exposed={});re&&t.render===_t&&(t.render=re),T!=null&&(t.inheritAttrs=T),S&&(t.components=S),y&&(t.directives=y),E&&ru(t)}function Cd(t,e,n=_t){te(t)&&(t=Ks(t));for(const i in t){const s=t[i];let o;Ie(s)?"default"in s?o=xt(s.from||i,s.default,!0):o=xt(s.from||i):o=xt(s),Be(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function qa(t,e,n){wt(te(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function cu(t,e,n,i){let s=i.includes(".")?Iu(n,i):()=>n[i];if(Ce(t)){const o=e[t];ne(o)&&dr(s,o)}else if(ne(t))dr(s,t.bind(n));else if(Ie(t))if(te(t))t.forEach(o=>cu(o,e,n,i));else{const o=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(o)&&dr(s,o,t)}}function Co(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:l}}=t.appContext,u=o.get(e);let h;return u?h=u:!s.length&&!n&&!i?h=e:(h={},s.length&&s.forEach(d=>Ir(h,d,l,!0)),Ir(h,e,l)),Ie(e)&&o.set(e,h),h}function Ir(t,e,n,i=!1){const{mixins:s,extends:o}=e;o&&Ir(t,o,n,!0),s&&s.forEach(l=>Ir(t,l,n,!0));for(const l in e)if(!(i&&l==="expose")){const u=Rd[l]||n&&n[l];t[l]=u?u(t[l],e[l]):e[l]}return t}const Rd={data:Ja,props:Xa,emits:Xa,methods:mi,computed:mi,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:mi,directives:mi,watch:Od,provide:Ja,inject:Pd};function Ja(t,e){return e?t?function(){return Ne(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function Pd(t,e){return mi(Ks(t),Ks(e))}function Ks(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ze(t,e){return t?[...new Set([].concat(t,e))]:e}function mi(t,e){return t?Ne(Object.create(null),t,e):e}function Xa(t,e){return t?te(t)&&te(e)?[...new Set([...t,...e])]:Ne(Object.create(null),Ga(t),Ga(e??{})):e}function Od(t,e){if(!t)return e;if(!e)return t;const n=Ne(Object.create(null),t);for(const i in e)n[i]=ze(t[i],e[i]);return n}function uu(){return{app:null,config:{isNativeTag:_f,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kd=0;function Nd(t,e){return function(i,s=null){ne(i)||(i=Ne({},i)),s!=null&&!Ie(s)&&(s=null);const o=uu(),l=new WeakSet,u=[];let h=!1;const d=o.app={_uid:kd++,_component:i,_props:s,_container:null,_context:o,_instance:null,version:gp,get config(){return o.config},set config(g){},use(g,..._){return l.has(g)||(g&&ne(g.install)?(l.add(g),g.install(d,..._)):ne(g)&&(l.add(g),g(d,..._))),d},mixin(g){return o.mixins.includes(g)||o.mixins.push(g),d},component(g,_){return _?(o.components[g]=_,d):o.components[g]},directive(g,_){return _?(o.directives[g]=_,d):o.directives[g]},mount(g,_,w){if(!h){const R=d._ceVNode||ke(i,s);return R.appContext=o,w===!0?w="svg":w===!1&&(w=void 0),_&&e?e(R,g):t(R,g,w),h=!0,d._container=g,g.__vue_app__=d,Gr(R.component)}},onUnmount(g){u.push(g)},unmount(){h&&(wt(u,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(g,_){return o.provides[g]=_,d},runWithContext(g){const _=$n;$n=d;try{return g()}finally{$n=_}}};return d}}let $n=null;function fr(t,e){if(Fe){let n=Fe.provides;const i=Fe.parent&&Fe.parent.provides;i===n&&(n=Fe.provides=Object.create(i)),n[t]=e}}function xt(t,e,n=!1){const i=Fe||et;if(i||$n){const s=$n?$n._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ne(e)?e.call(i&&i.proxy):e}}const hu={},fu=()=>Object.create(hu),du=t=>Object.getPrototypeOf(t)===hu;function Dd(t,e,n,i=!1){const s={},o=fu();t.propsDefaults=Object.create(null),pu(t,e,s,o);for(const l in t.propsOptions[0])l in s||(s[l]=void 0);n?t.props=i?s:Wc(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function xd(t,e,n,i){const{props:s,attrs:o,vnode:{patchFlag:l}}=t,u=pe(s),[h]=t.propsOptions;let d=!1;if((i||l>0)&&!(l&16)){if(l&8){const g=t.vnode.dynamicProps;for(let _=0;_<g.length;_++){let w=g[_];if(Kr(t.emitsOptions,w))continue;const R=e[w];if(h)if(fe(o,w))R!==o[w]&&(o[w]=R,d=!0);else{const x=at(w);s[x]=Ws(h,u,x,R,t,!1)}else R!==o[w]&&(o[w]=R,d=!0)}}}else{pu(t,e,s,o)&&(d=!0);let g;for(const _ in u)(!e||!fe(e,_)&&((g=Tn(_))===_||!fe(e,g)))&&(h?n&&(n[_]!==void 0||n[g]!==void 0)&&(s[_]=Ws(h,u,_,void 0,t,!0)):delete s[_]);if(o!==u)for(const _ in o)(!e||!fe(e,_))&&(delete o[_],d=!0)}d&&Dt(t.attrs,"set","")}function pu(t,e,n,i){const[s,o]=t.propsOptions;let l=!1,u;if(e)for(let h in e){if(vi(h))continue;const d=e[h];let g;s&&fe(s,g=at(h))?!o||!o.includes(g)?n[g]=d:(u||(u={}))[g]=d:Kr(t.emitsOptions,h)||(!(h in i)||d!==i[h])&&(i[h]=d,l=!0)}if(o){const h=pe(n),d=u||_e;for(let g=0;g<o.length;g++){const _=o[g];n[_]=Ws(s,h,_,d[_],t,!fe(d,_))}}return l}function Ws(t,e,n,i,s,o){const l=t[n];if(l!=null){const u=fe(l,"default");if(u&&i===void 0){const h=l.default;if(l.type!==Function&&!l.skipFactory&&ne(h)){const{propsDefaults:d}=s;if(n in d)i=d[n];else{const g=Ui(s);i=d[n]=h.call(null,e),g()}}else i=h;s.ce&&s.ce._setProp(n,i)}l[0]&&(o&&!u?i=!1:l[1]&&(i===""||i===Tn(n))&&(i=!0))}return i}const Ld=new WeakMap;function gu(t,e,n=!1){const i=n?Ld:e.propsCache,s=i.get(t);if(s)return s;const o=t.props,l={},u=[];let h=!1;if(!ne(t)){const g=_=>{h=!0;const[w,R]=gu(_,e,!0);Ne(l,w),R&&u.push(...R)};!n&&e.mixins.length&&e.mixins.forEach(g),t.extends&&g(t.extends),t.mixins&&t.mixins.forEach(g)}if(!o&&!h)return Ie(t)&&i.set(t,jn),jn;if(te(o))for(let g=0;g<o.length;g++){const _=at(o[g]);Ya(_)&&(l[_]=_e)}else if(o)for(const g in o){const _=at(g);if(Ya(_)){const w=o[g],R=l[_]=te(w)||ne(w)?{type:w}:Ne({},w),x=R.type;let j=!1,G=!0;if(te(x))for(let X=0;X<x.length;++X){const K=x[X],z=ne(K)&&K.name;if(z==="Boolean"){j=!0;break}else z==="String"&&(G=!1)}else j=ne(x)&&x.name==="Boolean";R[0]=j,R[1]=G,(j||fe(R,"default"))&&u.push(_)}}const d=[l,u];return Ie(t)&&i.set(t,d),d}function Ya(t){return t[0]!=="$"&&!vi(t)}const mu=t=>t[0]==="_"||t==="$stable",Ro=t=>te(t)?t.map(vt):[vt(t)],Md=(t,e,n)=>{if(e._n)return e;const i=So((...s)=>Ro(e(...s)),n);return i._c=!1,i},vu=(t,e,n)=>{const i=t._ctx;for(const s in t){if(mu(s))continue;const o=t[s];if(ne(o))e[s]=Md(s,o,i);else if(o!=null){const l=Ro(o);e[s]=()=>l}}},_u=(t,e)=>{const n=Ro(e);t.slots.default=()=>n},yu=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},Ud=(t,e,n)=>{const i=t.slots=fu();if(t.vnode.shapeFlag&32){const s=e._;s?(yu(i,e,n),n&&Tc(i,"_",s,!0)):vu(e,i)}else e&&_u(t,e)},Fd=(t,e,n)=>{const{vnode:i,slots:s}=t;let o=!0,l=_e;if(i.shapeFlag&32){const u=e._;u?n&&u===1?o=!1:yu(s,e,n):(o=!e.$stable,vu(e,s)),l=e}else e&&(_u(t,e),l={default:1});if(o)for(const u in s)!mu(u)&&l[u]==null&&delete s[u]},Qe=Qd;function jd(t){return Hd(t)}function Hd(t,e){const n=Sc();n.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:l,createText:u,createComment:h,setText:d,setElementText:g,parentNode:_,nextSibling:w,setScopeId:R=_t,insertStaticContent:x}=t,j=(p,v,C,N=null,O=null,D=null,H=void 0,U=null,M=!!v.dynamicChildren)=>{if(p===v)return;p&&!pi(p,v)&&(N=k(p),we(p,O,D,!0),p=null),v.patchFlag===-2&&(M=!1,v.dynamicChildren=null);const{type:L,ref:Q,shapeFlag:$}=v;switch(L){case Wr:G(p,v,C,N);break;case En:X(p,v,C,N);break;case pr:p==null&&K(v,C,N,H);break;case Ct:S(p,v,C,N,O,D,H,U,M);break;default:$&1?re(p,v,C,N,O,D,H,U,M):$&6?y(p,v,C,N,O,D,H,U,M):($&64||$&128)&&L.process(p,v,C,N,O,D,H,U,M,q)}Q!=null&&O&&Bs(Q,p&&p.ref,D,v||p,!v)},G=(p,v,C,N)=>{if(p==null)i(v.el=u(v.children),C,N);else{const O=v.el=p.el;v.children!==p.children&&d(O,v.children)}},X=(p,v,C,N)=>{p==null?i(v.el=h(v.children||""),C,N):v.el=p.el},K=(p,v,C,N)=>{[p.el,p.anchor]=x(p.children,v,C,N,p.el,p.anchor)},z=({el:p,anchor:v},C,N)=>{let O;for(;p&&p!==v;)O=w(p),i(p,C,N),p=O;i(v,C,N)},V=({el:p,anchor:v})=>{let C;for(;p&&p!==v;)C=w(p),s(p),p=C;s(v)},re=(p,v,C,N,O,D,H,U,M)=>{v.type==="svg"?H="svg":v.type==="math"&&(H="mathml"),p==null?le(v,C,N,O,D,H,U,M):E(p,v,O,D,H,U,M)},le=(p,v,C,N,O,D,H,U)=>{let M,L;const{props:Q,shapeFlag:$,transition:Y,dirs:J}=p;if(M=p.el=l(p.type,D,Q&&Q.is,Q),$&8?g(M,p.children):$&16&&m(p.children,M,null,N,O,Es(p,D),H,U),J&&dn(p,null,N,"created"),b(M,p,p.scopeId,H,N),Q){for(const he in Q)he!=="value"&&!vi(he)&&o(M,he,null,Q[he],D,N);"value"in Q&&o(M,"value",null,Q.value,D),(L=Q.onVnodeBeforeMount)&&gt(L,N,p)}J&&dn(p,null,N,"beforeMount");const Z=Bd(O,Y);Z&&Y.beforeEnter(M),i(M,v,C),((L=Q&&Q.onVnodeMounted)||Z||J)&&Qe(()=>{L&&gt(L,N,p),Z&&Y.enter(M),J&&dn(p,null,N,"mounted")},O)},b=(p,v,C,N,O)=>{if(C&&R(p,C),N)for(let D=0;D<N.length;D++)R(p,N[D]);if(O){let D=O.subTree;if(v===D||Su(D.type)&&(D.ssContent===v||D.ssFallback===v)){const H=O.vnode;b(p,H,H.scopeId,H.slotScopeIds,O.parent)}}},m=(p,v,C,N,O,D,H,U,M=0)=>{for(let L=M;L<p.length;L++){const Q=p[L]=U?Jt(p[L]):vt(p[L]);j(null,Q,v,C,N,O,D,H,U)}},E=(p,v,C,N,O,D,H)=>{const U=v.el=p.el;let{patchFlag:M,dynamicChildren:L,dirs:Q}=v;M|=p.patchFlag&16;const $=p.props||_e,Y=v.props||_e;let J;if(C&&pn(C,!1),(J=Y.onVnodeBeforeUpdate)&&gt(J,C,v,p),Q&&dn(v,p,C,"beforeUpdate"),C&&pn(C,!0),($.innerHTML&&Y.innerHTML==null||$.textContent&&Y.textContent==null)&&g(U,""),L?I(p.dynamicChildren,L,U,C,N,Es(v,O),D):H||ie(p,v,U,null,C,N,Es(v,O),D,!1),M>0){if(M&16)T(U,$,Y,C,O);else if(M&2&&$.class!==Y.class&&o(U,"class",null,Y.class,O),M&4&&o(U,"style",$.style,Y.style,O),M&8){const Z=v.dynamicProps;for(let he=0;he<Z.length;he++){const ce=Z[he],De=$[ce],Re=Y[ce];(Re!==De||ce==="value")&&o(U,ce,De,Re,O,C)}}M&1&&p.children!==v.children&&g(U,v.children)}else!H&&L==null&&T(U,$,Y,C,O);((J=Y.onVnodeUpdated)||Q)&&Qe(()=>{J&&gt(J,C,v,p),Q&&dn(v,p,C,"updated")},N)},I=(p,v,C,N,O,D,H)=>{for(let U=0;U<v.length;U++){const M=p[U],L=v[U],Q=M.el&&(M.type===Ct||!pi(M,L)||M.shapeFlag&70)?_(M.el):C;j(M,L,Q,null,N,O,D,H,!0)}},T=(p,v,C,N,O)=>{if(v!==C){if(v!==_e)for(const D in v)!vi(D)&&!(D in C)&&o(p,D,v[D],null,O,N);for(const D in C){if(vi(D))continue;const H=C[D],U=v[D];H!==U&&D!=="value"&&o(p,D,U,H,O,N)}"value"in C&&o(p,"value",v.value,C.value,O)}},S=(p,v,C,N,O,D,H,U,M)=>{const L=v.el=p?p.el:u(""),Q=v.anchor=p?p.anchor:u("");let{patchFlag:$,dynamicChildren:Y,slotScopeIds:J}=v;J&&(U=U?U.concat(J):J),p==null?(i(L,C,N),i(Q,C,N),m(v.children||[],C,Q,O,D,H,U,M)):$>0&&$&64&&Y&&p.dynamicChildren?(I(p.dynamicChildren,Y,C,O,D,H,U),(v.key!=null||O&&v===O.subTree)&&Eu(p,v,!0)):ie(p,v,C,Q,O,D,H,U,M)},y=(p,v,C,N,O,D,H,U,M)=>{v.slotScopeIds=U,p==null?v.shapeFlag&512?O.ctx.activate(v,C,N,H,M):Ve(v,C,N,O,D,H,M):it(p,v,M)},Ve=(p,v,C,N,O,D,H)=>{const U=p.component=lp(p,N,O);if(su(p)&&(U.ctx.renderer=q),cp(U,!1,H),U.asyncDep){if(O&&O.registerDep(U,Ae,H),!p.el){const M=U.subTree=ke(En);X(null,M,v,C)}}else Ae(U,p,v,C,O,D,H)},it=(p,v,C)=>{const N=v.component=p.component;if(Xd(p,v,C))if(N.asyncDep&&!N.asyncResolved){se(N,v,C);return}else N.next=v,N.update();else v.el=p.el,N.vnode=v},Ae=(p,v,C,N,O,D,H)=>{const U=()=>{if(p.isMounted){let{next:$,bu:Y,u:J,parent:Z,vnode:he}=p;{const xe=wu(p);if(xe){$&&($.el=he.el,se(p,$,H)),xe.asyncDep.then(()=>{p.isUnmounted||U()});return}}let ce=$,De;pn(p,!1),$?($.el=he.el,se(p,$,H)):$=he,Y&&hr(Y),(De=$.props&&$.props.onVnodeBeforeUpdate)&&gt(De,Z,$,he),pn(p,!0);const Re=ws(p),Pe=p.subTree;p.subTree=Re,j(Pe,Re,_(Pe.el),k(Pe),p,O,D),$.el=Re.el,ce===null&&Yd(p,Re.el),J&&Qe(J,O),(De=$.props&&$.props.onVnodeUpdated)&&Qe(()=>gt(De,Z,$,he),O)}else{let $;const{el:Y,props:J}=v,{bm:Z,m:he,parent:ce,root:De,type:Re}=p,Pe=yi(v);if(pn(p,!1),Z&&hr(Z),!Pe&&($=J&&J.onVnodeBeforeMount)&&gt($,ce,v),pn(p,!0),Y&&me){const xe=()=>{p.subTree=ws(p),me(Y,p.subTree,p,O,null)};Pe&&Re.__asyncHydrate?Re.__asyncHydrate(Y,p,xe):xe()}else{De.ce&&De.ce._injectChildStyle(Re);const xe=p.subTree=ws(p);j(null,xe,C,N,p,O,D),v.el=xe.el}if(he&&Qe(he,O),!Pe&&($=J&&J.onVnodeMounted)){const xe=v;Qe(()=>gt($,ce,xe),O)}(v.shapeFlag&256||ce&&yi(ce.vnode)&&ce.vnode.shapeFlag&256)&&p.a&&Qe(p.a,O),p.isMounted=!0,v=C=N=null}};p.scope.on();const M=p.effect=new kc(U);p.scope.off();const L=p.update=M.run.bind(M),Q=p.job=M.runIfDirty.bind(M);Q.i=p,Q.id=p.uid,M.scheduler=()=>To(Q),pn(p,!0),L()},se=(p,v,C)=>{v.component=p;const N=p.vnode.props;p.vnode=v,p.next=null,xd(p,v.props,N,C),Fd(p,v.children,C),ln(),Ka(p),cn()},ie=(p,v,C,N,O,D,H,U,M=!1)=>{const L=p&&p.children,Q=p?p.shapeFlag:0,$=v.children,{patchFlag:Y,shapeFlag:J}=v;if(Y>0){if(Y&128){lt(L,$,C,N,O,D,H,U,M);return}else if(Y&256){Ye(L,$,C,N,O,D,H,U,M);return}}J&8?(Q&16&&Xe(L,O,D),$!==L&&g(C,$)):Q&16?J&16?lt(L,$,C,N,O,D,H,U,M):Xe(L,O,D,!0):(Q&8&&g(C,""),J&16&&m($,C,N,O,D,H,U,M))},Ye=(p,v,C,N,O,D,H,U,M)=>{p=p||jn,v=v||jn;const L=p.length,Q=v.length,$=Math.min(L,Q);let Y;for(Y=0;Y<$;Y++){const J=v[Y]=M?Jt(v[Y]):vt(v[Y]);j(p[Y],J,C,null,O,D,H,U,M)}L>Q?Xe(p,O,D,!0,!1,$):m(v,C,N,O,D,H,U,M,$)},lt=(p,v,C,N,O,D,H,U,M)=>{let L=0;const Q=v.length;let $=p.length-1,Y=Q-1;for(;L<=$&&L<=Y;){const J=p[L],Z=v[L]=M?Jt(v[L]):vt(v[L]);if(pi(J,Z))j(J,Z,C,null,O,D,H,U,M);else break;L++}for(;L<=$&&L<=Y;){const J=p[$],Z=v[Y]=M?Jt(v[Y]):vt(v[Y]);if(pi(J,Z))j(J,Z,C,null,O,D,H,U,M);else break;$--,Y--}if(L>$){if(L<=Y){const J=Y+1,Z=J<Q?v[J].el:N;for(;L<=Y;)j(null,v[L]=M?Jt(v[L]):vt(v[L]),C,Z,O,D,H,U,M),L++}}else if(L>Y)for(;L<=$;)we(p[L],O,D,!0),L++;else{const J=L,Z=L,he=new Map;for(L=Z;L<=Y;L++){const Ke=v[L]=M?Jt(v[L]):vt(v[L]);Ke.key!=null&&he.set(Ke.key,L)}let ce,De=0;const Re=Y-Z+1;let Pe=!1,xe=0;const Bt=new Array(Re);for(L=0;L<Re;L++)Bt[L]=0;for(L=J;L<=$;L++){const Ke=p[L];if(De>=Re){we(Ke,O,D,!0);continue}let st;if(Ke.key!=null)st=he.get(Ke.key);else for(ce=Z;ce<=Y;ce++)if(Bt[ce-Z]===0&&pi(Ke,v[ce])){st=ce;break}st===void 0?we(Ke,O,D,!0):(Bt[st-Z]=L+1,st>=xe?xe=st:Pe=!0,j(Ke,v[st],C,null,O,D,H,U,M),De++)}const An=Pe?$d(Bt):jn;for(ce=An.length-1,L=Re-1;L>=0;L--){const Ke=Z+L,st=v[Ke],Cn=Ke+1<Q?v[Ke+1].el:N;Bt[L]===0?j(null,st,C,Cn,O,D,H,U,M):Pe&&(ce<0||L!==An[ce]?rt(st,C,Cn,2):ce--)}}},rt=(p,v,C,N,O=null)=>{const{el:D,type:H,transition:U,children:M,shapeFlag:L}=p;if(L&6){rt(p.component.subTree,v,C,N);return}if(L&128){p.suspense.move(v,C,N);return}if(L&64){H.move(p,v,C,q);return}if(H===Ct){i(D,v,C);for(let $=0;$<M.length;$++)rt(M[$],v,C,N);i(p.anchor,v,C);return}if(H===pr){z(p,v,C);return}if(N!==2&&L&1&&U)if(N===0)U.beforeEnter(D),i(D,v,C),Qe(()=>U.enter(D),O);else{const{leave:$,delayLeave:Y,afterLeave:J}=U,Z=()=>i(D,v,C),he=()=>{$(D,()=>{Z(),J&&J()})};Y?Y(D,Z,he):he()}else i(D,v,C)},we=(p,v,C,N=!1,O=!1)=>{const{type:D,props:H,ref:U,children:M,dynamicChildren:L,shapeFlag:Q,patchFlag:$,dirs:Y,cacheIndex:J}=p;if($===-2&&(O=!1),U!=null&&Bs(U,null,C,p,!0),J!=null&&(v.renderCache[J]=void 0),Q&256){v.ctx.deactivate(p);return}const Z=Q&1&&Y,he=!yi(p);let ce;if(he&&(ce=H&&H.onVnodeBeforeUnmount)&&gt(ce,v,p),Q&6)pt(p.component,C,N);else{if(Q&128){p.suspense.unmount(C,N);return}Z&&dn(p,null,v,"beforeUnmount"),Q&64?p.type.remove(p,v,C,q,N):L&&!L.hasOnce&&(D!==Ct||$>0&&$&64)?Xe(L,v,C,!1,!0):(D===Ct&&$&384||!O&&Q&16)&&Xe(M,v,C),N&&be(p)}(he&&(ce=H&&H.onVnodeUnmounted)||Z)&&Qe(()=>{ce&&gt(ce,v,p),Z&&dn(p,null,v,"unmounted")},C)},be=p=>{const{type:v,el:C,anchor:N,transition:O}=p;if(v===Ct){Ht(C,N);return}if(v===pr){V(p);return}const D=()=>{s(C),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(p.shapeFlag&1&&O&&!O.persisted){const{leave:H,delayLeave:U}=O,M=()=>H(C,D);U?U(p.el,D,M):M()}else D()},Ht=(p,v)=>{let C;for(;p!==v;)C=w(p),s(p),p=C;s(v)},pt=(p,v,C)=>{const{bum:N,scope:O,job:D,subTree:H,um:U,m:M,a:L}=p;Qa(M),Qa(L),N&&hr(N),O.stop(),D&&(D.flags|=8,we(H,p,v,C)),U&&Qe(U,v),Qe(()=>{p.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Xe=(p,v,C,N=!1,O=!1,D=0)=>{for(let H=D;H<p.length;H++)we(p[H],v,C,N,O)},k=p=>{if(p.shapeFlag&6)return k(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const v=w(p.anchor||p.el),C=v&&v[ld];return C?w(C):v};let W=!1;const B=(p,v,C)=>{p==null?v._vnode&&we(v._vnode,null,null,!0):j(v._vnode||null,p,v,null,null,null,C),v._vnode=p,W||(W=!0,Ka(),eu(),W=!1)},q={p:j,um:we,m:rt,r:be,mt:Ve,mc:m,pc:ie,pbc:I,n:k,o:t};let oe,me;return{render:B,hydrate:oe,createApp:Nd(B,oe)}}function Es({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function pn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Bd(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Eu(t,e,n=!1){const i=t.children,s=e.children;if(te(i)&&te(s))for(let o=0;o<i.length;o++){const l=i[o];let u=s[o];u.shapeFlag&1&&!u.dynamicChildren&&((u.patchFlag<=0||u.patchFlag===32)&&(u=s[o]=Jt(s[o]),u.el=l.el),!n&&u.patchFlag!==-2&&Eu(l,u)),u.type===Wr&&(u.el=l.el)}}function $d(t){const e=t.slice(),n=[0];let i,s,o,l,u;const h=t.length;for(i=0;i<h;i++){const d=t[i];if(d!==0){if(s=n[n.length-1],t[s]<d){e[i]=s,n.push(i);continue}for(o=0,l=n.length-1;o<l;)u=o+l>>1,t[n[u]]<d?o=u+1:l=u;d<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,l=n[o-1];o-- >0;)n[o]=l,l=e[l];return n}function wu(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:wu(e)}function Qa(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Vd=Symbol.for("v-scx"),Kd=()=>xt(Vd);function dr(t,e,n){return bu(t,e,n)}function bu(t,e,n=_e){const{immediate:i,deep:s,flush:o,once:l}=n,u=Ne({},n);let h;if(zr)if(o==="sync"){const w=Kd();h=w.__watcherHandles||(w.__watcherHandles=[])}else if(!e||i)u.once=!0;else{const w=()=>{};return w.stop=_t,w.resume=_t,w.pause=_t,w}const d=Fe;u.call=(w,R,x)=>wt(w,d,R,x);let g=!1;o==="post"?u.scheduler=w=>{Qe(w,d&&d.suspense)}:o!=="sync"&&(g=!0,u.scheduler=(w,R)=>{R?w():To(w)}),u.augmentJob=w=>{e&&(w.flags|=4),g&&(w.flags|=2,d&&(w.id=d.uid,w.i=d))};const _=rd(t,e,u);return h&&h.push(_),_}function Wd(t,e,n){const i=this.proxy,s=Ce(t)?t.includes(".")?Iu(i,t):()=>i[t]:t.bind(i,i);let o;ne(e)?o=e:(o=e.handler,n=e);const l=Ui(this),u=bu(s,o.bind(i),n);return l(),u}function Iu(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const zd=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${at(e)}Modifiers`]||t[`${Tn(e)}Modifiers`];function Gd(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||_e;let s=n;const o=e.startsWith("update:"),l=o&&zd(i,e.slice(7));l&&(l.trim&&(s=n.map(g=>Ce(g)?g.trim():g)),l.number&&(s=n.map(Ms)));let u,h=i[u=ps(e)]||i[u=ps(at(e))];!h&&o&&(h=i[u=ps(Tn(e))]),h&&wt(h,t,6,s);const d=i[u+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[u])return;t.emitted[u]=!0,wt(d,t,6,s)}}function Tu(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const o=t.emits;let l={},u=!1;if(!ne(t)){const h=d=>{const g=Tu(d,e,!0);g&&(u=!0,Ne(l,g))};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}return!o&&!u?(Ie(t)&&i.set(t,null),null):(te(o)?o.forEach(h=>l[h]=null):Ne(l,o),Ie(t)&&i.set(t,l),l)}function Kr(t,e){return!t||!Mr(e)?!1:(e=e.slice(2).replace(/Once$/,""),fe(t,e[0].toLowerCase()+e.slice(1))||fe(t,Tn(e))||fe(t,e))}function ws(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[o],slots:l,attrs:u,emit:h,render:d,renderCache:g,props:_,data:w,setupState:R,ctx:x,inheritAttrs:j}=t,G=br(t);let X,K;try{if(n.shapeFlag&4){const V=s||i,re=V;X=vt(d.call(re,V,g,_,R,w,x)),K=u}else{const V=e;X=vt(V.length>1?V(_,{attrs:u,slots:l,emit:h}):V(_,null)),K=e.props?u:qd(u)}}catch(V){wi.length=0,$r(V,t,1),X=ke(En)}let z=X;if(K&&j!==!1){const V=Object.keys(K),{shapeFlag:re}=z;V.length&&re&7&&(o&&V.some(ao)&&(K=Jd(K,o)),z=Gn(z,K,!1,!0))}return n.dirs&&(z=Gn(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&Ao(z,n.transition),X=z,br(G),X}const qd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Mr(n))&&((e||(e={}))[n]=t[n]);return e},Jd=(t,e)=>{const n={};for(const i in t)(!ao(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Xd(t,e,n){const{props:i,children:s,component:o}=t,{props:l,children:u,patchFlag:h}=e,d=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&h>=0){if(h&1024)return!0;if(h&16)return i?Za(i,l,d):!!l;if(h&8){const g=e.dynamicProps;for(let _=0;_<g.length;_++){const w=g[_];if(l[w]!==i[w]&&!Kr(d,w))return!0}}}else return(s||u)&&(!u||!u.$stable)?!0:i===l?!1:i?l?Za(i,l,d):!0:!!l;return!1}function Za(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const o=i[s];if(e[o]!==t[o]&&!Kr(n,o))return!0}return!1}function Yd({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Su=t=>t.__isSuspense;function Qd(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):ad(t)}const Ct=Symbol.for("v-fgt"),Wr=Symbol.for("v-txt"),En=Symbol.for("v-cmt"),pr=Symbol.for("v-stc"),wi=[];let tt=null;function Oi(t=!1){wi.push(tt=t?null:[])}function Zd(){wi.pop(),tt=wi[wi.length-1]||null}let ki=1;function el(t){ki+=t,t<0&&tt&&(tt.hasOnce=!0)}function Au(t){return t.dynamicChildren=ki>0?tt||jn:null,Zd(),ki>0&&tt&&tt.push(t),t}function Tr(t,e,n,i,s,o){return Au(Te(t,e,n,i,s,o,!0))}function ep(t,e,n,i,s){return Au(ke(t,e,n,i,s,!0))}function Sr(t){return t?t.__v_isVNode===!0:!1}function pi(t,e){return t.type===e.type&&t.key===e.key}const Cu=({key:t})=>t??null,gr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ce(t)||Be(t)||ne(t)?{i:et,r:t,k:e,f:!!n}:t:null);function Te(t,e=null,n=null,i=0,s=null,o=t===Ct?0:1,l=!1,u=!1){const h={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Cu(e),ref:e&&gr(e),scopeId:nu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:et};return u?(Po(h,n),o&128&&t.normalize(h)):n&&(h.shapeFlag|=Ce(n)?8:16),ki>0&&!l&&tt&&(h.patchFlag>0||o&6)&&h.patchFlag!==32&&tt.push(h),h}const ke=tp;function tp(t,e=null,n=null,i=0,s=null,o=!1){if((!t||t===Id)&&(t=En),Sr(t)){const u=Gn(t,e,!0);return n&&Po(u,n),ki>0&&!o&&tt&&(u.shapeFlag&6?tt[tt.indexOf(t)]=u:tt.push(u)),u.patchFlag=-2,u}if(pp(t)&&(t=t.__vccOpts),e){e=np(e);let{class:u,style:h}=e;u&&!Ce(u)&&(e.class=ho(u)),Ie(h)&&(wo(h)&&!te(h)&&(h=Ne({},h)),e.style=uo(h))}const l=Ce(t)?1:Su(t)?128:cd(t)?64:Ie(t)?4:ne(t)?2:0;return Te(t,e,n,i,s,l,o,!0)}function np(t){return t?wo(t)||du(t)?Ne({},t):t:null}function Gn(t,e,n=!1,i=!1){const{props:s,ref:o,patchFlag:l,children:u,transition:h}=t,d=e?sp(s||{},e):s,g={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&Cu(d),ref:e&&e.ref?n&&o?te(o)?o.concat(gr(e)):[o,gr(e)]:gr(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:u,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ct?l===-1?16:l|16:l,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:h,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gn(t.ssContent),ssFallback:t.ssFallback&&Gn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return h&&i&&Ao(g,h.clone(g)),g}function bi(t=" ",e=0){return ke(Wr,null,t,e)}function ip(t,e){const n=ke(pr,null,t);return n.staticCount=e,n}function rp(t="",e=!1){return e?(Oi(),ep(En,null,t)):ke(En,null,t)}function vt(t){return t==null||typeof t=="boolean"?ke(En):te(t)?ke(Ct,null,t.slice()):Sr(t)?Jt(t):ke(Wr,null,String(t))}function Jt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gn(t)}function Po(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Po(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!du(e)?e._ctx=et:s===3&&et&&(et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:et},n=32):(e=String(e),i&64?(n=16,e=[bi(e)]):n=8);t.children=e,t.shapeFlag|=n}function sp(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ho([e.class,i.class]));else if(s==="style")e.style=uo([e.style,i.style]);else if(Mr(s)){const o=e[s],l=i[s];l&&o!==l&&!(te(o)&&o.includes(l))&&(e[s]=o?[].concat(o,l):l)}else s!==""&&(e[s]=i[s])}return e}function gt(t,e,n,i=null){wt(t,e,7,[n,i])}const op=uu();let ap=0;function lp(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||op,o={uid:ap++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Oc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gu(i,s),emitsOptions:Tu(i,s),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:i.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Gd.bind(null,o),t.ce&&t.ce(o),o}let Fe=null,Ar,zs;{const t=Sc(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),o=>{s.length>1?s.forEach(l=>l(o)):s[0](o)}};Ar=e("__VUE_INSTANCE_SETTERS__",n=>Fe=n),zs=e("__VUE_SSR_SETTERS__",n=>zr=n)}const Ui=t=>{const e=Fe;return Ar(t),t.scope.on(),()=>{t.scope.off(),Ar(e)}},tl=()=>{Fe&&Fe.scope.off(),Ar(null)};function Ru(t){return t.vnode.shapeFlag&4}let zr=!1;function cp(t,e=!1,n=!1){e&&zs(e);const{props:i,children:s}=t.vnode,o=Ru(t);Dd(t,i,o,e),Ud(t,s,n);const l=o?up(t,e):void 0;return e&&zs(!1),l}function up(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Sd);const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?fp(t):null,o=Ui(t);ln();const l=Mi(i,t,0,[t.props,s]);if(cn(),o(),wc(l)){if(yi(t)||ru(t),l.then(tl,tl),e)return l.then(u=>{nl(t,u,e)}).catch(u=>{$r(u,t,0)});t.asyncDep=l}else nl(t,l,e)}else Pu(t,e)}function nl(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=Xc(e)),Pu(t,n)}let il;function Pu(t,e,n){const i=t.type;if(!t.render){if(!e&&il&&!i.render){const s=i.template||Co(t).template;if(s){const{isCustomElement:o,compilerOptions:l}=t.appContext.config,{delimiters:u,compilerOptions:h}=i,d=Ne(Ne({isCustomElement:o,delimiters:u},l),h);i.render=il(s,d)}}t.render=i.render||_t}{const s=Ui(t);ln();try{Ad(t)}finally{cn(),s()}}}const hp={get(t,e){return $e(t,"get",""),t[e]}};function fp(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,hp),slots:t.slots,emit:t.emit,expose:e}}function Gr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Xc(Gc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ei)return Ei[n](t)},has(e,n){return n in e||n in Ei}})):t.proxy}function dp(t,e=!0){return ne(t)?t.displayName||t.name:t.name||e&&t.__name}function pp(t){return ne(t)&&"__vccOpts"in t}const ut=(t,e)=>nd(t,e,zr);function Ou(t,e,n){const i=arguments.length;return i===2?Ie(e)&&!te(e)?Sr(e)?ke(t,null,[e]):ke(t,e):ke(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Sr(n)&&(n=[n]),ke(t,e,n))}const gp="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gs;const rl=typeof window<"u"&&window.trustedTypes;if(rl)try{Gs=rl.createPolicy("vue",{createHTML:t=>t})}catch{}const ku=Gs?t=>Gs.createHTML(t):t=>t,mp="http://www.w3.org/2000/svg",vp="http://www.w3.org/1998/Math/MathML",At=typeof document<"u"?document:null,sl=At&&At.createElement("template"),_p={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?At.createElementNS(mp,t):e==="mathml"?At.createElementNS(vp,t):n?At.createElement(t,{is:n}):At.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>At.createTextNode(t),createComment:t=>At.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>At.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,o){const l=n?n.previousSibling:e.lastChild;if(s&&(s===o||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{sl.innerHTML=ku(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const u=sl.content;if(i==="svg"||i==="mathml"){const h=u.firstChild;for(;h.firstChild;)u.appendChild(h.firstChild);u.removeChild(h)}e.insertBefore(u,n)}return[l?l.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},yp=Symbol("_vtc");function Ep(t,e,n){const i=t[yp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ol=Symbol("_vod"),wp=Symbol("_vsh"),bp=Symbol(""),Ip=/(^|;)\s*display\s*:/;function Tp(t,e,n){const i=t.style,s=Ce(n);let o=!1;if(n&&!s){if(e)if(Ce(e))for(const l of e.split(";")){const u=l.slice(0,l.indexOf(":")).trim();n[u]==null&&mr(i,u,"")}else for(const l in e)n[l]==null&&mr(i,l,"");for(const l in n)l==="display"&&(o=!0),mr(i,l,n[l])}else if(s){if(e!==n){const l=i[bp];l&&(n+=";"+l),i.cssText=n,o=Ip.test(n)}}else e&&t.removeAttribute("style");ol in t&&(t[ol]=o?i.display:"",t[wp]&&(i.display="none"))}const al=/\s*!important$/;function mr(t,e,n){if(te(n))n.forEach(i=>mr(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Sp(t,e);al.test(n)?t.setProperty(Tn(i),n.replace(al,""),"important"):t[i]=n}}const ll=["Webkit","Moz","ms"],bs={};function Sp(t,e){const n=bs[e];if(n)return n;let i=at(e);if(i!=="filter"&&i in t)return bs[e]=i;i=jr(i);for(let s=0;s<ll.length;s++){const o=ll[s]+i;if(o in t)return bs[e]=o}return e}const cl="http://www.w3.org/1999/xlink";function ul(t,e,n,i,s,o=Rf(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(cl,e.slice(6,e.length)):t.setAttributeNS(cl,e,n):n==null||o&&!Ac(n)?t.removeAttribute(e):t.setAttribute(e,o?"":an(n)?String(n):n)}function hl(t,e,n,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ku(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const l=s==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ac(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(e)}function Ln(t,e,n,i){t.addEventListener(e,n,i)}function Ap(t,e,n,i){t.removeEventListener(e,n,i)}const fl=Symbol("_vei");function Cp(t,e,n,i,s=null){const o=t[fl]||(t[fl]={}),l=o[e];if(i&&l)l.value=i;else{const[u,h]=Rp(e);if(i){const d=o[e]=kp(i,s);Ln(t,u,d,h)}else l&&(Ap(t,u,l,h),o[e]=void 0)}}const dl=/(?:Once|Passive|Capture)$/;function Rp(t){let e;if(dl.test(t)){e={};let i;for(;i=t.match(dl);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Tn(t.slice(2)),e]}let Is=0;const Pp=Promise.resolve(),Op=()=>Is||(Pp.then(()=>Is=0),Is=Date.now());function kp(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;wt(Np(i,n.value),e,5,[i])};return n.value=t,n.attached=Op(),n}function Np(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const pl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Dp=(t,e,n,i,s,o)=>{const l=s==="svg";e==="class"?Ep(t,i,l):e==="style"?Tp(t,n,i):Mr(e)?ao(e)||Cp(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xp(t,e,i,l))?(hl(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ul(t,e,i,l,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ce(i))?hl(t,at(e),i):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),ul(t,e,i,l))};function xp(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&pl(e)&&ne(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return pl(e)&&Ce(n)?!1:e in t}const gl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return te(e)?n=>hr(e,n):e};function Lp(t){t.target.composing=!0}function ml(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ts=Symbol("_assign"),vl={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Ts]=gl(s);const o=i||s.props&&s.props.type==="number";Ln(t,e?"change":"input",l=>{if(l.target.composing)return;let u=t.value;n&&(u=u.trim()),o&&(u=Ms(u)),t[Ts](u)}),n&&Ln(t,"change",()=>{t.value=t.value.trim()}),e||(Ln(t,"compositionstart",Lp),Ln(t,"compositionend",ml),Ln(t,"change",ml))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:o}},l){if(t[Ts]=gl(l),t.composing)return;const u=(o||t.type==="number")&&!/^0\d/.test(t.value)?Ms(t.value):t.value,h=e??"";u!==h&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===h)||(t.value=h))}},Mp=["ctrl","shift","alt","meta"],Up={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Mp.some(n=>t[`${n}Key`]&&!e.includes(n))},Fp=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...o)=>{for(let l=0;l<e.length;l++){const u=Up[e[l]];if(u&&u(s,e))return}return t(s,...o)})},jp=Ne({patchProp:Dp},_p);let _l;function Hp(){return _l||(_l=jd(jp))}const Bp=(...t)=>{const e=Hp().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Vp(i);if(!s)return;const o=e._component;!ne(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const l=n(s,!1,$p(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),l},e};function $p(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Vp(t){return Ce(t)?document.querySelector(t):t}var Kp=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const Wp=Symbol();var yl;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(yl||(yl={}));function zp(){const t=Pf(!0),e=t.run(()=>qc({}));let n=[],i=[];const s=Gc({install(o){s._a=o,o.provide(Wp,s),o.config.globalProperties.$pinia=s,i.forEach(l=>n.push(l)),i=[]},use(o){return!this._a&&!Kp?i.push(o):n.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Mn=typeof document<"u";function Nu(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Gp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Nu(t.default)}const ge=Object.assign;function Ss(t,e){const n={};for(const i in e){const s=e[i];n[i]=dt(s)?s.map(t):t(s)}return n}const Ii=()=>{},dt=Array.isArray,Du=/#/g,qp=/&/g,Jp=/\//g,Xp=/=/g,Yp=/\?/g,xu=/\+/g,Qp=/%5B/g,Zp=/%5D/g,Lu=/%5E/g,eg=/%60/g,Mu=/%7B/g,tg=/%7C/g,Uu=/%7D/g,ng=/%20/g;function Oo(t){return encodeURI(""+t).replace(tg,"|").replace(Qp,"[").replace(Zp,"]")}function ig(t){return Oo(t).replace(Mu,"{").replace(Uu,"}").replace(Lu,"^")}function qs(t){return Oo(t).replace(xu,"%2B").replace(ng,"+").replace(Du,"%23").replace(qp,"%26").replace(eg,"`").replace(Mu,"{").replace(Uu,"}").replace(Lu,"^")}function rg(t){return qs(t).replace(Xp,"%3D")}function sg(t){return Oo(t).replace(Du,"%23").replace(Yp,"%3F")}function og(t){return t==null?"":sg(t).replace(Jp,"%2F")}function Ni(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const ag=/\/$/,lg=t=>t.replace(ag,"");function As(t,e,n="/"){let i,s={},o="",l="";const u=e.indexOf("#");let h=e.indexOf("?");return u<h&&u>=0&&(h=-1),h>-1&&(i=e.slice(0,h),o=e.slice(h+1,u>-1?u:e.length),s=t(o)),u>-1&&(i=i||e.slice(0,u),l=e.slice(u,e.length)),i=fg(i??e,n),{fullPath:i+(o&&"?")+o+l,path:i,query:s,hash:Ni(l)}}function cg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function El(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ug(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&qn(e.matched[i],n.matched[s])&&Fu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function qn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Fu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hg(t[n],e[n]))return!1;return!0}function hg(t,e){return dt(t)?wl(t,e):dt(e)?wl(e,t):t===e}function wl(t,e){return dt(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function fg(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let o=n.length-1,l,u;for(l=0;l<i.length;l++)if(u=i[l],u!==".")if(u==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+i.slice(l).join("/")}const zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Di;(function(t){t.pop="pop",t.push="push"})(Di||(Di={}));var Ti;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ti||(Ti={}));function dg(t){if(!t)if(Mn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),lg(t)}const pg=/^[^#]+#/;function gg(t,e){return t.replace(pg,"#")+e}function mg(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const qr=()=>({left:window.scrollX,top:window.scrollY});function vg(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=mg(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function bl(t,e){return(history.state?history.state.position-e:-1)+t}const Js=new Map;function _g(t,e){Js.set(t,e)}function yg(t){const e=Js.get(t);return Js.delete(t),e}let Eg=()=>location.protocol+"//"+location.host;function ju(t,e){const{pathname:n,search:i,hash:s}=e,o=t.indexOf("#");if(o>-1){let u=s.includes(t.slice(o))?t.slice(o).length:1,h=s.slice(u);return h[0]!=="/"&&(h="/"+h),El(h,"")}return El(n,t)+i+s}function wg(t,e,n,i){let s=[],o=[],l=null;const u=({state:w})=>{const R=ju(t,location),x=n.value,j=e.value;let G=0;if(w){if(n.value=R,e.value=w,l&&l===x){l=null;return}G=j?w.position-j.position:0}else i(R);s.forEach(X=>{X(n.value,x,{delta:G,type:Di.pop,direction:G?G>0?Ti.forward:Ti.back:Ti.unknown})})};function h(){l=n.value}function d(w){s.push(w);const R=()=>{const x=s.indexOf(w);x>-1&&s.splice(x,1)};return o.push(R),R}function g(){const{history:w}=window;w.state&&w.replaceState(ge({},w.state,{scroll:qr()}),"")}function _(){for(const w of o)w();o=[],window.removeEventListener("popstate",u),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",u),window.addEventListener("beforeunload",g,{passive:!0}),{pauseListeners:h,listen:d,destroy:_}}function Il(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?qr():null}}function bg(t){const{history:e,location:n}=window,i={value:ju(t,n)},s={value:e.state};s.value||o(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(h,d,g){const _=t.indexOf("#"),w=_>-1?(n.host&&document.querySelector("base")?t:t.slice(_))+h:Eg()+t+h;try{e[g?"replaceState":"pushState"](d,"",w),s.value=d}catch(R){console.error(R),n[g?"replace":"assign"](w)}}function l(h,d){const g=ge({},e.state,Il(s.value.back,h,s.value.forward,!0),d,{position:s.value.position});o(h,g,!0),i.value=h}function u(h,d){const g=ge({},s.value,e.state,{forward:h,scroll:qr()});o(g.current,g,!0);const _=ge({},Il(i.value,h,null),{position:g.position+1},d);o(h,_,!1),i.value=h}return{location:i,state:s,push:u,replace:l}}function Ig(t){t=dg(t);const e=bg(t),n=wg(t,e.state,e.location,e.replace);function i(o,l=!0){l||n.pauseListeners(),history.go(o)}const s=ge({location:"",base:t,go:i,createHref:gg.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Tg(t){return typeof t=="string"||t&&typeof t=="object"}function Hu(t){return typeof t=="string"||typeof t=="symbol"}const Bu=Symbol("");var Tl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Tl||(Tl={}));function Jn(t,e){return ge(new Error,{type:t,[Bu]:!0},e)}function St(t,e){return t instanceof Error&&Bu in t&&(e==null||!!(t.type&e))}const Sl="[^/]+?",Sg={sensitive:!1,strict:!1,start:!0,end:!0},Ag=/[.+*?^${}()[\]/\\]/g;function Cg(t,e){const n=ge({},Sg,e),i=[];let s=n.start?"^":"";const o=[];for(const d of t){const g=d.length?[]:[90];n.strict&&!d.length&&(s+="/");for(let _=0;_<d.length;_++){const w=d[_];let R=40+(n.sensitive?.25:0);if(w.type===0)_||(s+="/"),s+=w.value.replace(Ag,"\\$&"),R+=40;else if(w.type===1){const{value:x,repeatable:j,optional:G,regexp:X}=w;o.push({name:x,repeatable:j,optional:G});const K=X||Sl;if(K!==Sl){R+=10;try{new RegExp(`(${K})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${x}" (${K}): `+V.message)}}let z=j?`((?:${K})(?:/(?:${K}))*)`:`(${K})`;_||(z=G&&d.length<2?`(?:/${z})`:"/"+z),G&&(z+="?"),s+=z,R+=20,G&&(R+=-8),j&&(R+=-20),K===".*"&&(R+=-50)}g.push(R)}i.push(g)}if(n.strict&&n.end){const d=i.length-1;i[d][i[d].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const l=new RegExp(s,n.sensitive?"":"i");function u(d){const g=d.match(l),_={};if(!g)return null;for(let w=1;w<g.length;w++){const R=g[w]||"",x=o[w-1];_[x.name]=R&&x.repeatable?R.split("/"):R}return _}function h(d){let g="",_=!1;for(const w of t){(!_||!g.endsWith("/"))&&(g+="/"),_=!1;for(const R of w)if(R.type===0)g+=R.value;else if(R.type===1){const{value:x,repeatable:j,optional:G}=R,X=x in d?d[x]:"";if(dt(X)&&!j)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const K=dt(X)?X.join("/"):X;if(!K)if(G)w.length<2&&(g.endsWith("/")?g=g.slice(0,-1):_=!0);else throw new Error(`Missing required param "${x}"`);g+=K}}return g||"/"}return{re:l,score:i,keys:o,parse:u,stringify:h}}function Rg(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $u(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const o=Rg(i[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-i.length)===1){if(Al(i))return 1;if(Al(s))return-1}return s.length-i.length}function Al(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Pg={type:0,value:""},Og=/[a-zA-Z0-9_]/;function kg(t){if(!t)return[[]];if(t==="/")return[[Pg]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(R){throw new Error(`ERR (${n})/"${d}": ${R}`)}let n=0,i=n;const s=[];let o;function l(){o&&s.push(o),o=[]}let u=0,h,d="",g="";function _(){d&&(n===0?o.push({type:0,value:d}):n===1||n===2||n===3?(o.length>1&&(h==="*"||h==="+")&&e(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:d,regexp:g,repeatable:h==="*"||h==="+",optional:h==="*"||h==="?"})):e("Invalid state to consume buffer"),d="")}function w(){d+=h}for(;u<t.length;){if(h=t[u++],h==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:h==="/"?(d&&_(),l()):h===":"?(_(),n=1):w();break;case 4:w(),n=i;break;case 1:h==="("?n=2:Og.test(h)?w():(_(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&u--);break;case 2:h===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+h:n=3:g+=h;break;case 3:_(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&u--,g="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${d}"`),_(),l(),s}function Ng(t,e,n){const i=Cg(kg(t.path),n),s=ge(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Dg(t,e){const n=[],i=new Map;e=Ol({strict:!1,end:!0,sensitive:!1},e);function s(_){return i.get(_)}function o(_,w,R){const x=!R,j=Rl(_);j.aliasOf=R&&R.record;const G=Ol(e,_),X=[j];if("alias"in _){const V=typeof _.alias=="string"?[_.alias]:_.alias;for(const re of V)X.push(Rl(ge({},j,{components:R?R.record.components:j.components,path:re,aliasOf:R?R.record:j})))}let K,z;for(const V of X){const{path:re}=V;if(w&&re[0]!=="/"){const le=w.record.path,b=le[le.length-1]==="/"?"":"/";V.path=w.record.path+(re&&b+re)}if(K=Ng(V,w,G),R?R.alias.push(K):(z=z||K,z!==K&&z.alias.push(K),x&&_.name&&!Pl(K)&&l(_.name)),Vu(K)&&h(K),j.children){const le=j.children;for(let b=0;b<le.length;b++)o(le[b],K,R&&R.children[b])}R=R||K}return z?()=>{l(z)}:Ii}function l(_){if(Hu(_)){const w=i.get(_);w&&(i.delete(_),n.splice(n.indexOf(w),1),w.children.forEach(l),w.alias.forEach(l))}else{const w=n.indexOf(_);w>-1&&(n.splice(w,1),_.record.name&&i.delete(_.record.name),_.children.forEach(l),_.alias.forEach(l))}}function u(){return n}function h(_){const w=Mg(_,n);n.splice(w,0,_),_.record.name&&!Pl(_)&&i.set(_.record.name,_)}function d(_,w){let R,x={},j,G;if("name"in _&&_.name){if(R=i.get(_.name),!R)throw Jn(1,{location:_});G=R.record.name,x=ge(Cl(w.params,R.keys.filter(z=>!z.optional).concat(R.parent?R.parent.keys.filter(z=>z.optional):[]).map(z=>z.name)),_.params&&Cl(_.params,R.keys.map(z=>z.name))),j=R.stringify(x)}else if(_.path!=null)j=_.path,R=n.find(z=>z.re.test(j)),R&&(x=R.parse(j),G=R.record.name);else{if(R=w.name?i.get(w.name):n.find(z=>z.re.test(w.path)),!R)throw Jn(1,{location:_,currentLocation:w});G=R.record.name,x=ge({},w.params,_.params),j=R.stringify(x)}const X=[];let K=R;for(;K;)X.unshift(K.record),K=K.parent;return{name:G,path:j,params:x,matched:X,meta:Lg(X)}}t.forEach(_=>o(_));function g(){n.length=0,i.clear()}return{addRoute:o,resolve:d,removeRoute:l,clearRoutes:g,getRoutes:u,getRecordMatcher:s}}function Cl(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Rl(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:xg(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function xg(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Pl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Lg(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function Ol(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Mg(t,e){let n=0,i=e.length;for(;n!==i;){const o=n+i>>1;$u(t,e[o])<0?i=o:n=o+1}const s=Ug(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function Ug(t){let e=t;for(;e=e.parent;)if(Vu(e)&&$u(t,e)===0)return e}function Vu({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Fg(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const o=i[s].replace(xu," "),l=o.indexOf("="),u=Ni(l<0?o:o.slice(0,l)),h=l<0?null:Ni(o.slice(l+1));if(u in e){let d=e[u];dt(d)||(d=e[u]=[d]),d.push(h)}else e[u]=h}return e}function kl(t){let e="";for(let n in t){const i=t[n];if(n=rg(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(dt(i)?i.map(o=>o&&qs(o)):[i&&qs(i)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function jg(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=dt(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Hg=Symbol(""),Nl=Symbol(""),ko=Symbol(""),Ku=Symbol(""),Xs=Symbol("");function gi(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Xt(t,e,n,i,s,o=l=>l()){const l=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((u,h)=>{const d=w=>{w===!1?h(Jn(4,{from:n,to:e})):w instanceof Error?h(w):Tg(w)?h(Jn(2,{from:e,to:w})):(l&&i.enterCallbacks[s]===l&&typeof w=="function"&&l.push(w),u())},g=o(()=>t.call(i&&i.instances[s],e,n,d));let _=Promise.resolve(g);t.length<3&&(_=_.then(d)),_.catch(w=>h(w))})}function Cs(t,e,n,i,s=o=>o()){const o=[];for(const l of t)for(const u in l.components){let h=l.components[u];if(!(e!=="beforeRouteEnter"&&!l.instances[u]))if(Nu(h)){const g=(h.__vccOpts||h)[e];g&&o.push(Xt(g,n,i,l,u,s))}else{let d=h();o.push(()=>d.then(g=>{if(!g)throw new Error(`Couldn't resolve component "${u}" at "${l.path}"`);const _=Gp(g)?g.default:g;l.mods[u]=g,l.components[u]=_;const R=(_.__vccOpts||_)[e];return R&&Xt(R,n,i,l,u,s)()}))}}return o}function Dl(t){const e=xt(ko),n=xt(Ku),i=ut(()=>{const h=_n(t.to);return e.resolve(h)}),s=ut(()=>{const{matched:h}=i.value,{length:d}=h,g=h[d-1],_=n.matched;if(!g||!_.length)return-1;const w=_.findIndex(qn.bind(null,g));if(w>-1)return w;const R=xl(h[d-2]);return d>1&&xl(g)===R&&_[_.length-1].path!==R?_.findIndex(qn.bind(null,h[d-2])):w}),o=ut(()=>s.value>-1&&Kg(n.params,i.value.params)),l=ut(()=>s.value>-1&&s.value===n.matched.length-1&&Fu(n.params,i.value.params));function u(h={}){return Vg(h)?e[_n(t.replace)?"replace":"push"](_n(t.to)).catch(Ii):Promise.resolve()}return{route:i,href:ut(()=>i.value.href),isActive:o,isExactActive:l,navigate:u}}const Bg=iu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Dl,setup(t,{slots:e}){const n=Br(Dl(t)),{options:i}=xt(ko),s=ut(()=>({[Ll(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ll(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&e.default(n);return t.custom?o:Ou("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),$g=Bg;function Vg(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Kg(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!dt(s)||s.length!==i.length||i.some((o,l)=>o!==s[l]))return!1}return!0}function xl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ll=(t,e,n)=>t??e??n,Wg=iu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=xt(Xs),s=ut(()=>t.route||i.value),o=xt(Nl,0),l=ut(()=>{let d=_n(o);const{matched:g}=s.value;let _;for(;(_=g[d])&&!_.components;)d++;return d}),u=ut(()=>s.value.matched[l.value]);fr(Nl,ut(()=>l.value+1)),fr(Hg,u),fr(Xs,s);const h=qc();return dr(()=>[h.value,u.value,t.name],([d,g,_],[w,R,x])=>{g&&(g.instances[_]=d,R&&R!==g&&d&&d===w&&(g.leaveGuards.size||(g.leaveGuards=R.leaveGuards),g.updateGuards.size||(g.updateGuards=R.updateGuards))),d&&g&&(!R||!qn(g,R)||!w)&&(g.enterCallbacks[_]||[]).forEach(j=>j(d))},{flush:"post"}),()=>{const d=s.value,g=t.name,_=u.value,w=_&&_.components[g];if(!w)return Ml(n.default,{Component:w,route:d});const R=_.props[g],x=R?R===!0?d.params:typeof R=="function"?R(d):R:null,G=Ou(w,ge({},x,e,{onVnodeUnmounted:X=>{X.component.isUnmounted&&(_.instances[g]=null)},ref:h}));return Ml(n.default,{Component:G,route:d})||G}}});function Ml(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Wu=Wg;function zg(t){const e=Dg(t.routes,t),n=t.parseQuery||Fg,i=t.stringifyQuery||kl,s=t.history,o=gi(),l=gi(),u=gi(),h=Qf(zt);let d=zt;Mn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=Ss.bind(null,k=>""+k),_=Ss.bind(null,og),w=Ss.bind(null,Ni);function R(k,W){let B,q;return Hu(k)?(B=e.getRecordMatcher(k),q=W):q=k,e.addRoute(q,B)}function x(k){const W=e.getRecordMatcher(k);W&&e.removeRoute(W)}function j(){return e.getRoutes().map(k=>k.record)}function G(k){return!!e.getRecordMatcher(k)}function X(k,W){if(W=ge({},W||h.value),typeof k=="string"){const v=As(n,k,W.path),C=e.resolve({path:v.path},W),N=s.createHref(v.fullPath);return ge(v,C,{params:w(C.params),hash:Ni(v.hash),redirectedFrom:void 0,href:N})}let B;if(k.path!=null)B=ge({},k,{path:As(n,k.path,W.path).path});else{const v=ge({},k.params);for(const C in v)v[C]==null&&delete v[C];B=ge({},k,{params:_(v)}),W.params=_(W.params)}const q=e.resolve(B,W),oe=k.hash||"";q.params=g(w(q.params));const me=cg(i,ge({},k,{hash:ig(oe),path:q.path})),p=s.createHref(me);return ge({fullPath:me,hash:oe,query:i===kl?jg(k.query):k.query||{}},q,{redirectedFrom:void 0,href:p})}function K(k){return typeof k=="string"?As(n,k,h.value.path):ge({},k)}function z(k,W){if(d!==k)return Jn(8,{from:W,to:k})}function V(k){return b(k)}function re(k){return V(ge(K(k),{replace:!0}))}function le(k){const W=k.matched[k.matched.length-1];if(W&&W.redirect){const{redirect:B}=W;let q=typeof B=="function"?B(k):B;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=K(q):{path:q},q.params={}),ge({query:k.query,hash:k.hash,params:q.path!=null?{}:k.params},q)}}function b(k,W){const B=d=X(k),q=h.value,oe=k.state,me=k.force,p=k.replace===!0,v=le(B);if(v)return b(ge(K(v),{state:typeof v=="object"?ge({},oe,v.state):oe,force:me,replace:p}),W||B);const C=B;C.redirectedFrom=W;let N;return!me&&ug(i,q,B)&&(N=Jn(16,{to:C,from:q}),rt(q,q,!0,!1)),(N?Promise.resolve(N):I(C,q)).catch(O=>St(O)?St(O,2)?O:lt(O):ie(O,C,q)).then(O=>{if(O){if(St(O,2))return b(ge({replace:p},K(O.to),{state:typeof O.to=="object"?ge({},oe,O.to.state):oe,force:me}),W||C)}else O=S(C,q,!0,p,oe);return T(C,q,O),O})}function m(k,W){const B=z(k,W);return B?Promise.reject(B):Promise.resolve()}function E(k){const W=Ht.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(k):k()}function I(k,W){let B;const[q,oe,me]=Gg(k,W);B=Cs(q.reverse(),"beforeRouteLeave",k,W);for(const v of q)v.leaveGuards.forEach(C=>{B.push(Xt(C,k,W))});const p=m.bind(null,k,W);return B.push(p),Xe(B).then(()=>{B=[];for(const v of o.list())B.push(Xt(v,k,W));return B.push(p),Xe(B)}).then(()=>{B=Cs(oe,"beforeRouteUpdate",k,W);for(const v of oe)v.updateGuards.forEach(C=>{B.push(Xt(C,k,W))});return B.push(p),Xe(B)}).then(()=>{B=[];for(const v of me)if(v.beforeEnter)if(dt(v.beforeEnter))for(const C of v.beforeEnter)B.push(Xt(C,k,W));else B.push(Xt(v.beforeEnter,k,W));return B.push(p),Xe(B)}).then(()=>(k.matched.forEach(v=>v.enterCallbacks={}),B=Cs(me,"beforeRouteEnter",k,W,E),B.push(p),Xe(B))).then(()=>{B=[];for(const v of l.list())B.push(Xt(v,k,W));return B.push(p),Xe(B)}).catch(v=>St(v,8)?v:Promise.reject(v))}function T(k,W,B){u.list().forEach(q=>E(()=>q(k,W,B)))}function S(k,W,B,q,oe){const me=z(k,W);if(me)return me;const p=W===zt,v=Mn?history.state:{};B&&(q||p?s.replace(k.fullPath,ge({scroll:p&&v&&v.scroll},oe)):s.push(k.fullPath,oe)),h.value=k,rt(k,W,B,p),lt()}let y;function Ve(){y||(y=s.listen((k,W,B)=>{if(!pt.listening)return;const q=X(k),oe=le(q);if(oe){b(ge(oe,{replace:!0}),q).catch(Ii);return}d=q;const me=h.value;Mn&&_g(bl(me.fullPath,B.delta),qr()),I(q,me).catch(p=>St(p,12)?p:St(p,2)?(b(p.to,q).then(v=>{St(v,20)&&!B.delta&&B.type===Di.pop&&s.go(-1,!1)}).catch(Ii),Promise.reject()):(B.delta&&s.go(-B.delta,!1),ie(p,q,me))).then(p=>{p=p||S(q,me,!1),p&&(B.delta&&!St(p,8)?s.go(-B.delta,!1):B.type===Di.pop&&St(p,20)&&s.go(-1,!1)),T(q,me,p)}).catch(Ii)}))}let it=gi(),Ae=gi(),se;function ie(k,W,B){lt(k);const q=Ae.list();return q.length?q.forEach(oe=>oe(k,W,B)):console.error(k),Promise.reject(k)}function Ye(){return se&&h.value!==zt?Promise.resolve():new Promise((k,W)=>{it.add([k,W])})}function lt(k){return se||(se=!k,Ve(),it.list().forEach(([W,B])=>k?B(k):W()),it.reset()),k}function rt(k,W,B,q){const{scrollBehavior:oe}=t;if(!Mn||!oe)return Promise.resolve();const me=!B&&yg(bl(k.fullPath,0))||(q||!B)&&history.state&&history.state.scroll||null;return Qc().then(()=>oe(k,W,me)).then(p=>p&&vg(p)).catch(p=>ie(p,k,W))}const we=k=>s.go(k);let be;const Ht=new Set,pt={currentRoute:h,listening:!0,addRoute:R,removeRoute:x,clearRoutes:e.clearRoutes,hasRoute:G,getRoutes:j,resolve:X,options:t,push:V,replace:re,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:o.add,beforeResolve:l.add,afterEach:u.add,onError:Ae.add,isReady:Ye,install(k){const W=this;k.component("RouterLink",$g),k.component("RouterView",Wu),k.config.globalProperties.$router=W,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>_n(h)}),Mn&&!be&&h.value===zt&&(be=!0,V(s.location).catch(oe=>{}));const B={};for(const oe in zt)Object.defineProperty(B,oe,{get:()=>h.value[oe],enumerable:!0});k.provide(ko,W),k.provide(Ku,Wc(B)),k.provide(Xs,h);const q=k.unmount;Ht.add(k),k.unmount=function(){Ht.delete(k),Ht.size<1&&(d=zt,y&&y(),y=null,h.value=zt,be=!1,se=!1),q()}}};function Xe(k){return k.reduce((W,B)=>W.then(()=>E(B)),Promise.resolve())}return pt}function Gg(t,e){const n=[],i=[],s=[],o=Math.max(e.matched.length,t.matched.length);for(let l=0;l<o;l++){const u=e.matched[l];u&&(t.matched.find(d=>qn(d,u))?i.push(u):n.push(u));const h=t.matched[l];h&&(e.matched.find(d=>qn(d,h))||s.push(h))}return[n,i,s]}const zu=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},qg={id:"app"},Jg={__name:"App",setup(t){return(e,n)=>(Oi(),Tr("div",qg,[ke(_n(Wu))]))}};var Ul={};/**
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
 */const Gu=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Xg=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],l=t[n++],u=t[n++],h=((s&7)<<18|(o&63)<<12|(l&63)<<6|u&63)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(h&1023))}else{const o=t[n++],l=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|l&63)}}return e.join("")},qu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const o=t[s],l=s+1<t.length,u=l?t[s+1]:0,h=s+2<t.length,d=h?t[s+2]:0,g=o>>2,_=(o&3)<<4|u>>4;let w=(u&15)<<2|d>>6,R=d&63;h||(R=64,l||(w=64)),i.push(n[g],n[_],n[w],n[R])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],u=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const _=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||u==null||d==null||_==null)throw new Yg;const w=o<<2|u>>4;if(i.push(w),d!==64){const R=u<<4&240|d>>2;if(i.push(R),_!==64){const x=d<<6&192|_;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Yg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qg=function(t){const e=Gu(t);return qu.encodeByteArray(e,!0)},Cr=function(t){return Qg(t).replace(/\./g,"")},Ju=function(t){try{return qu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Zg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const em=()=>Zg().__FIREBASE_DEFAULTS__,tm=()=>{if(typeof process>"u"||typeof Ul>"u")return;const t=Ul.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ju(t[1]);return e&&JSON.parse(e)},No=()=>{try{return em()||tm()||nm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xu=t=>{var e,n;return(n=(e=No())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},im=t=>{const e=Xu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Yu=()=>{var t;return(t=No())===null||t===void 0?void 0:t.config},Qu=t=>{var e;return(e=No())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class rm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function sm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Cr(JSON.stringify(n)),Cr(JSON.stringify(l)),""].join(".")}/**
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
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function om(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function am(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function um(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hm(){try{return typeof indexedDB=="object"}catch{return!1}}function fm(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const dm="FirebaseError";class jt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=dm,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fi.prototype.create)}}class Fi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],l=o?pm(o,i):"Error",u=`${this.serviceName}: ${l} (${s}).`;return new jt(s,u,i)}}function pm(t,e){return t.replace(gm,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const gm=/\{\$([^}]+)}/g;function mm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rr(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const o=t[s],l=e[s];if(Fl(o)&&Fl(l)){if(!Rr(o,l))return!1}else if(o!==l)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Fl(t){return t!==null&&typeof t=="object"}/**
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
 */function ji(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function vm(t,e){const n=new _m(t,e);return n.subscribe.bind(n)}class _m{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");ym(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Rs),s.error===void 0&&(s.error=Rs),s.complete===void 0&&(s.complete=Rs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ym(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rs(){}/**
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
 */function Qn(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mn="[DEFAULT]";/**
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
 */class Em{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new rm;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bm(e))try{this.getOrInitializeService({instanceIdentifier:mn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mn){return this.instances.has(e)}getOptions(e=mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);i===u&&l.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&e(l,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:wm(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=mn){return this.component?this.component.multipleInstances?e:mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wm(t){return t===mn?void 0:t}function bm(t){return t.instantiationMode==="EAGER"}/**
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
 */class Im{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Em(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const Tm={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},Sm=de.INFO,Am={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},Cm=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Am[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Do{constructor(e){this.name=e,this._logLevel=Sm,this._logHandler=Cm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const Rm=(t,e)=>e.some(n=>t instanceof n);let jl,Hl;function Pm(){return jl||(jl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Om(){return Hl||(Hl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zu=new WeakMap,Ys=new WeakMap,eh=new WeakMap,Ps=new WeakMap,xo=new WeakMap;function km(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",l)},o=()=>{n(tn(t.result)),s()},l=()=>{i(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&Zu.set(n,t)}).catch(()=>{}),xo.set(e,t),e}function Nm(t){if(Ys.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",l),t.removeEventListener("abort",l)},o=()=>{n(),s()},l=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",l),t.addEventListener("abort",l)});Ys.set(t,e)}let Qs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ys.get(t);if(e==="objectStoreNames")return t.objectStoreNames||eh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Dm(t){Qs=t(Qs)}function xm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Os(this),e,...n);return eh.set(i,e.sort?e.sort():[e]),tn(i)}:Om().includes(t)?function(...e){return t.apply(Os(this),e),tn(Zu.get(this))}:function(...e){return tn(t.apply(Os(this),e))}}function Lm(t){return typeof t=="function"?xm(t):(t instanceof IDBTransaction&&Nm(t),Rm(t,Pm())?new Proxy(t,Qs):t)}function tn(t){if(t instanceof IDBRequest)return km(t);if(Ps.has(t))return Ps.get(t);const e=Lm(t);return e!==t&&(Ps.set(t,e),xo.set(e,t)),e}const Os=t=>xo.get(t);function Mm(t,e,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const l=indexedDB.open(t,e),u=tn(l);return i&&l.addEventListener("upgradeneeded",h=>{i(tn(l.result),h.oldVersion,h.newVersion,tn(l.transaction),h)}),n&&l.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Um=["get","getKey","getAll","getAllKeys","count"],Fm=["put","add","delete","clear"],ks=new Map;function Bl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ks.get(e))return ks.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Fm.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Um.includes(n)))return;const o=async function(l,...u){const h=this.transaction(l,s?"readwrite":"readonly");let d=h.store;return i&&(d=d.index(u.shift())),(await Promise.all([d[n](...u),s&&h.done]))[0]};return ks.set(e,o),o}Dm(t=>({...t,get:(e,n,i)=>Bl(e,n)||t.get(e,n,i),has:(e,n)=>!!Bl(e,n)||t.has(e,n)}));/**
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
 */class jm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hm(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Hm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zs="@firebase/app",$l="0.10.11";/**
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
 */const Lt=new Do("@firebase/app"),Bm="@firebase/app-compat",$m="@firebase/analytics-compat",Vm="@firebase/analytics",Km="@firebase/app-check-compat",Wm="@firebase/app-check",zm="@firebase/auth",Gm="@firebase/auth-compat",qm="@firebase/database",Jm="@firebase/database-compat",Xm="@firebase/functions",Ym="@firebase/functions-compat",Qm="@firebase/installations",Zm="@firebase/installations-compat",ev="@firebase/messaging",tv="@firebase/messaging-compat",nv="@firebase/performance",iv="@firebase/performance-compat",rv="@firebase/remote-config",sv="@firebase/remote-config-compat",ov="@firebase/storage",av="@firebase/storage-compat",lv="@firebase/firestore",cv="@firebase/vertexai-preview",uv="@firebase/firestore-compat",hv="firebase",fv="10.13.2";/**
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
 */const eo="[DEFAULT]",dv={[Zs]:"fire-core",[Bm]:"fire-core-compat",[Vm]:"fire-analytics",[$m]:"fire-analytics-compat",[Wm]:"fire-app-check",[Km]:"fire-app-check-compat",[zm]:"fire-auth",[Gm]:"fire-auth-compat",[qm]:"fire-rtdb",[Jm]:"fire-rtdb-compat",[Xm]:"fire-fn",[Ym]:"fire-fn-compat",[Qm]:"fire-iid",[Zm]:"fire-iid-compat",[ev]:"fire-fcm",[tv]:"fire-fcm-compat",[nv]:"fire-perf",[iv]:"fire-perf-compat",[rv]:"fire-rc",[sv]:"fire-rc-compat",[ov]:"fire-gcs",[av]:"fire-gcs-compat",[lv]:"fire-fst",[uv]:"fire-fst-compat",[cv]:"fire-vertex","fire-js":"fire-js",[hv]:"fire-js-all"};/**
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
 */const Pr=new Map,pv=new Map,to=new Map;function Vl(t,e){try{t.container.addComponent(e)}catch(n){Lt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xn(t){const e=t.name;if(to.has(e))return Lt.debug(`There were multiple attempts to register component ${e}.`),!1;to.set(e,t);for(const n of Pr.values())Vl(n,t);for(const n of pv.values())Vl(n,t);return!0}function Lo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Pt(t){return t.settings!==void 0}/**
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
 */const gv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nn=new Fi("app","Firebase",gv);/**
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
 */class mv{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nn.create("app-deleted",{appName:this._name})}}/**
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
 */const Zn=fv;function th(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:eo,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw nn.create("bad-app-name",{appName:String(s)});if(n||(n=Yu()),!n)throw nn.create("no-options");const o=Pr.get(s);if(o){if(Rr(n,o.options)&&Rr(i,o.config))return o;throw nn.create("duplicate-app",{appName:s})}const l=new Im(s);for(const h of to.values())l.addComponent(h);const u=new mv(n,i,l);return Pr.set(s,u),u}function nh(t=eo){const e=Pr.get(t);if(!e&&t===eo&&Yu())return th();if(!e)throw nn.create("no-app",{appName:t});return e}function rn(t,e,n){var i;let s=(i=dv[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const u=[`Unable to register library "${s}" with version "${e}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lt.warn(u.join(" "));return}Xn(new wn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const vv="firebase-heartbeat-database",_v=1,xi="firebase-heartbeat-store";let Ns=null;function ih(){return Ns||(Ns=Mm(vv,_v,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xi)}catch(n){console.warn(n)}}}}).catch(t=>{throw nn.create("idb-open",{originalErrorMessage:t.message})})),Ns}async function yv(t){try{const n=(await ih()).transaction(xi),i=await n.objectStore(xi).get(rh(t));return await n.done,i}catch(e){if(e instanceof jt)Lt.warn(e.message);else{const n=nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lt.warn(n.message)}}}async function Kl(t,e){try{const i=(await ih()).transaction(xi,"readwrite");await i.objectStore(xi).put(e,rh(t)),await i.done}catch(n){if(n instanceof jt)Lt.warn(n.message);else{const i=nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Lt.warn(i.message)}}}function rh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ev=1024,wv=30*24*60*60*1e3;class bv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tv(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Wl();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=wv}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Lt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wl(),{heartbeatsToSend:i,unsentEntries:s}=Iv(this._heartbeatsCache.heartbeats),o=Cr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Lt.warn(n),""}}}function Wl(){return new Date().toISOString().substring(0,10)}function Iv(t,e=Ev){const n=[];let i=t.slice();for(const s of t){const o=n.find(l=>l.agent===s.agent);if(o){if(o.dates.push(s.date),zl(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),zl(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Tv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hm()?fm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zl(t){return Cr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Sv(t){Xn(new wn("platform-logger",e=>new jm(e),"PRIVATE")),Xn(new wn("heartbeat",e=>new bv(e),"PRIVATE")),rn(Zs,$l,t),rn(Zs,$l,"esm2017"),rn("fire-js","")}Sv("");var Av="firebase",Cv="10.13.2";/**
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
 */rn(Av,Cv,"app");function Mo(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function sh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rv=sh,oh=new Fi("auth","Firebase",sh());/**
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
 */const Or=new Do("@firebase/auth");function Pv(t,...e){Or.logLevel<=de.WARN&&Or.warn(`Auth (${Zn}): ${t}`,...e)}function vr(t,...e){Or.logLevel<=de.ERROR&&Or.error(`Auth (${Zn}): ${t}`,...e)}/**
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
 */function Mt(t,...e){throw Uo(t,...e)}function yt(t,...e){return Uo(t,...e)}function ah(t,e,n){const i=Object.assign(Object.assign({},Rv()),{[e]:n});return new Fi("auth","Firebase",i).create(e,{appName:t.name})}function sn(t){return ah(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Uo(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return oh.create(t,...e)}function ee(t,e,...n){if(!t)throw Uo(e,...n)}function Ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vr(e),new Error(e)}function Ut(t,e){t||Ot(e)}/**
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
 */function no(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ov(){return Gl()==="http:"||Gl()==="https:"}function Gl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function kv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ov()||lm()||"connection"in navigator)?navigator.onLine:!0}function Nv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Hi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ut(n>e,"Short delay should be less than long delay!"),this.isMobile=om()||cm()}get(){return kv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fo(t,e){Ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class lh{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Dv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xv=new Hi(3e4,6e4);function Bi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sn(t,e,n,i,s={}){return ch(t,s,async()=>{let o={},l={};i&&(e==="GET"?l=i:o={body:JSON.stringify(i)});const u=ji(Object.assign({key:t.config.apiKey},l)).slice(1),h=await t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:h},o);return am()||(d.referrerPolicy="no-referrer"),lh.fetch()(hh(t,t.config.apiHost,n,u),d)})}async function ch(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Dv),e);try{const s=new Mv(t),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw cr(t,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const u=o.ok?l.errorMessage:l.error.message,[h,d]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw cr(t,"credential-already-in-use",l);if(h==="EMAIL_EXISTS")throw cr(t,"email-already-in-use",l);if(h==="USER_DISABLED")throw cr(t,"user-disabled",l);const g=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ah(t,g,d);Mt(t,g)}}catch(s){if(s instanceof jt)throw s;Mt(t,"network-request-failed",{message:String(s)})}}async function uh(t,e,n,i,s={}){const o=await Sn(t,e,n,i,s);return"mfaPendingCredential"in o&&Mt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function hh(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Fo(t.config,s):`${t.config.apiScheme}://${s}`}function Lv(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Mv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(yt(this.auth,"network-request-failed")),xv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cr(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=yt(t,e,i);return s.customData._tokenResponse=n,s}function ql(t){return t!==void 0&&t.enterprise!==void 0}class Uv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Lv(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Fv(t,e){return Sn(t,"GET","/v2/recaptchaConfig",Bi(t,e))}/**
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
 */async function jv(t,e){return Sn(t,"POST","/v1/accounts:delete",e)}async function fh(t,e){return Sn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hv(t,e=!1){const n=Qn(t),i=await n.getIdToken(e),s=jo(i);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:Si(Ds(s.auth_time)),issuedAtTime:Si(Ds(s.iat)),expirationTime:Si(Ds(s.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ds(t){return Number(t)*1e3}function jo(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return vr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ju(n);return s?JSON.parse(s):(vr("Failed to decode base64 JWT payload"),null)}catch(s){return vr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Jl(t){const e=jo(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Li(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof jt&&Bv(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Bv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $v{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class io{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Si(this.lastLoginAt),this.creationTime=Si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function kr(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Li(t,fh(n,{idToken:i}));ee(s==null?void 0:s.users.length,n,"internal-error");const o=s.users[0];t._notifyReloadListener(o);const l=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?dh(o.providerUserInfo):[],u=Kv(t.providerData,l),h=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(u!=null&&u.length),g=h?d:!1,_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new io(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(t,_)}async function Vv(t){const e=Qn(t);await kr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kv(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function dh(t){return t.map(e=>{var{providerId:n}=e,i=Mo(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Wv(t,e){const n=await ch(t,{},async()=>{const i=ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,l=hh(t,s,"/v1/token",`key=${o}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",lh.fetch()(l,{method:"POST",headers:u,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zv(t,e){return Sn(t,"POST","/v2/accounts:revokeToken",Bi(t,e))}/**
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
 */class Vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Jl(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:o}=await Wv(e,n);this.updateTokensAndExpiration(i,s,Number(o))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:o}=n,l=new Vn;return i&&(ee(typeof i=="string","internal-error",{appName:e}),l.refreshToken=i),s&&(ee(typeof s=="string","internal-error",{appName:e}),l.accessToken=s),o&&(ee(typeof o=="number","internal-error",{appName:e}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vn,this.toJSON())}_performRefresh(){return Ot("not implemented")}}/**
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
 */function Gt(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kt{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,o=Mo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $v(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new io(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Li(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Hv(this,e)}reload(){return Vv(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await kr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pt(this.auth.app))return Promise.reject(sn(this.auth));const e=await this.getIdToken();return await Li(this,jv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,o,l,u,h,d,g;const _=(i=n.displayName)!==null&&i!==void 0?i:void 0,w=(s=n.email)!==null&&s!==void 0?s:void 0,R=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,x=(l=n.photoURL)!==null&&l!==void 0?l:void 0,j=(u=n.tenantId)!==null&&u!==void 0?u:void 0,G=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,X=(d=n.createdAt)!==null&&d!==void 0?d:void 0,K=(g=n.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:z,emailVerified:V,isAnonymous:re,providerData:le,stsTokenManager:b}=n;ee(z&&b,e,"internal-error");const m=Vn.fromJSON(this.name,b);ee(typeof z=="string",e,"internal-error"),Gt(_,e.name),Gt(w,e.name),ee(typeof V=="boolean",e,"internal-error"),ee(typeof re=="boolean",e,"internal-error"),Gt(R,e.name),Gt(x,e.name),Gt(j,e.name),Gt(G,e.name),Gt(X,e.name),Gt(K,e.name);const E=new kt({uid:z,auth:e,email:w,emailVerified:V,displayName:_,isAnonymous:re,photoURL:x,phoneNumber:R,tenantId:j,stsTokenManager:m,createdAt:X,lastLoginAt:K});return le&&Array.isArray(le)&&(E.providerData=le.map(I=>Object.assign({},I))),G&&(E._redirectEventId=G),E}static async _fromIdTokenResponse(e,n,i=!1){const s=new Vn;s.updateFromServerResponse(n);const o=new kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await kr(o),o}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];ee(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?dh(s.providerUserInfo):[],l=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),u=new Vn;u.updateFromIdToken(i);const h=new kt({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:l}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new io(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
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
 */const Xl=new Map;function Nt(t){Ut(t instanceof Function,"Expected a class definition");let e=Xl.get(t);return e?(Ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xl.set(t,e),e)}/**
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
 */class ph{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ph.type="NONE";const Yl=ph;/**
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
 */function _r(t,e,n){return`firebase:${t}:${e}:${n}`}class Kn{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:o}=this.auth;this.fullUserKey=_r(this.userKey,s.apiKey,o),this.fullPersistenceKey=_r("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Kn(Nt(Yl),e,i);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||Nt(Yl);const l=_r(i,e.config.apiKey,e.name);let u=null;for(const d of n)try{const g=await d._get(l);if(g){const _=kt._fromJSON(e,g);d!==o&&(u=_),o=d;break}}catch{}const h=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Kn(o,e,i):(o=h[0],u&&await o._set(l,u.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(l)}catch{}})),new Kn(o,e,i))}}/**
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
 */function Ql(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_h(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Eh(e))return"Blackberry";if(wh(e))return"Webos";if(mh(e))return"Safari";if((e.includes("chrome/")||vh(e))&&!e.includes("edge/"))return"Chrome";if(yh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function gh(t=Je()){return/firefox\//i.test(t)}function mh(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vh(t=Je()){return/crios\//i.test(t)}function _h(t=Je()){return/iemobile/i.test(t)}function yh(t=Je()){return/android/i.test(t)}function Eh(t=Je()){return/blackberry/i.test(t)}function wh(t=Je()){return/webos/i.test(t)}function Ho(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Gv(t=Je()){var e;return Ho(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qv(){return um()&&document.documentMode===10}function bh(t=Je()){return Ho(t)||yh(t)||wh(t)||Eh(t)||/windows phone/i.test(t)||_h(t)}/**
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
 */function Ih(t,e=[]){let n;switch(t){case"Browser":n=Ql(Je());break;case"Worker":n=`${Ql(Je())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zn}/${i}`}/**
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
 */class Jv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=o=>new Promise((l,u)=>{try{const h=e(o);l(h)}catch(h){u(h)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Xv(t,e={}){return Sn(t,"GET","/v2/passwordPolicy",Bi(t,e))}/**
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
 */const Yv=6;class Qv{constructor(e){var n,i,s,o;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:Yv,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,o,l,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(n=h.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(i=h.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(s=h.containsLowercaseLetter)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(l=h.containsNumericCharacter)!==null&&l!==void 0?l:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class Zv{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zl(this),this.idTokenSubscription=new Zl(this),this.beforeStateQueue=new Jv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Kn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await fh(this,{idToken:e}),i=await kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Pt(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(e);(!l||l===u)&&(h!=null&&h.user)&&(s=h.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await kr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pt(this.app))return Promise.reject(sn(this));const n=e?Qn(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pt(this.app)?Promise.reject(sn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pt(this.app)?Promise.reject(sn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Xv(this),n=new Qv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await zv(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nt(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Kn.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(u,this,"internal-error"),u.then(()=>{l||o(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,i,s);return()=>{l=!0,h()}}else{const h=e.addObserver(n);return()=>{l=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ih(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Pv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ei(t){return Qn(t)}class Zl{constructor(e){this.auth=e,this.observer=null,this.addObserver=vm(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Jr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function e_(t){Jr=t}function Th(t){return Jr.loadJS(t)}function t_(){return Jr.recaptchaEnterpriseScript}function n_(){return Jr.gapiScript}function i_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const r_="recaptcha-enterprise",s_="NO_RECAPTCHA";class o_{constructor(e){this.type=r_,this.auth=ei(e)}async verify(e="verify",n=!1){async function i(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(l,u)=>{Fv(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new Uv(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,l(d.siteKey)}}).catch(h=>{u(h)})})}function s(o,l,u){const h=window.grecaptcha;ql(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{l(d)}).catch(()=>{l(s_)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,l)=>{i(this.auth).then(u=>{if(!n&&ql(window.grecaptcha))s(u,o,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let h=t_();h.length!==0&&(h+=u),Th(h).then(()=>{s(u,o,l)}).catch(d=>{l(d)})}}).catch(u=>{l(u)})})}}async function ec(t,e,n,i=!1){const s=new o_(t);let o;try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);return i?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function a_(t,e,n,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ec(t,e,n,n==="getOobCode");return i(t,o)}else return i(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await ec(t,e,n,n==="getOobCode");return i(t,l)}else return Promise.reject(o)})}/**
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
 */function l_(t,e){const n=Lo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(Rr(o,e??{}))return s;Mt(s,"already-initialized")}return n.initialize({options:e})}function c_(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function u_(t,e,n){const i=ei(t);ee(i._canInitEmulator,i,"emulator-config-failed"),ee(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,o=Sh(e),{host:l,port:u}=h_(e),h=u===null?"":`:${u}`;i.config.emulator={url:`${o}//${l}${h}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:l,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),f_()}function Sh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function h_(t){const e=Sh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const o=s[1];return{host:o,port:tc(i.substr(o.length+1))}}else{const[o,l]=i.split(":");return{host:o,port:tc(l)}}}function tc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function f_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ah{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ot("not implemented")}_getIdTokenResponse(e){return Ot("not implemented")}_linkToIdToken(e,n){return Ot("not implemented")}_getReauthenticationResolver(e){return Ot("not implemented")}}/**
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
 */async function Wn(t,e){return uh(t,"POST","/v1/accounts:signInWithIdp",Bi(t,e))}/**
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
 */const d_="http://localhost";class bn extends Ah{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,o=Mo(n,["providerId","signInMethod"]);if(!i||!s)return null;const l=new bn(i,s);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return Wn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Wn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wn(e,n)}buildRequest(){const e={requestUri:d_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ji(n)}return e}}/**
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
 */class Ch{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $i extends Ch{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yt extends $i{constructor(){super("facebook.com")}static credential(e){return bn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yt.PROVIDER_ID="facebook.com";/**
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
 */class Qt extends $i{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return bn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Qt.credential(n,i)}catch{return null}}}Qt.GOOGLE_SIGN_IN_METHOD="google.com";Qt.PROVIDER_ID="google.com";/**
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
 */class Zt extends $i{constructor(){super("github.com")}static credential(e){return bn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.GITHUB_SIGN_IN_METHOD="github.com";Zt.PROVIDER_ID="github.com";/**
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
 */class en extends $i{constructor(){super("twitter.com")}static credential(e,n){return bn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return en.credential(n,i)}catch{return null}}}en.TWITTER_SIGN_IN_METHOD="twitter.com";en.PROVIDER_ID="twitter.com";/**
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
 */async function p_(t,e){return uh(t,"POST","/v1/accounts:signUp",Bi(t,e))}/**
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
 */class In{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const o=await kt._fromIdTokenResponse(e,i,s),l=nc(i);return new In({user:o,providerId:l,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=nc(i);return new In({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function nc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Nr extends jt{constructor(e,n,i,s){var o;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Nr.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Nr(e,n,i,s)}}function Rh(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Nr._fromErrorAndOperation(t,o,e,i):o})}async function g_(t,e,n=!1){const i=await Li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return In._forOperation(t,"link",i)}/**
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
 */async function m_(t,e,n=!1){const{auth:i}=t;if(Pt(i.app))return Promise.reject(sn(i));const s="reauthenticate";try{const o=await Li(t,Rh(i,s,e,t),n);ee(o.idToken,i,"internal-error");const l=jo(o.idToken);ee(l,i,"internal-error");const{sub:u}=l;return ee(t.uid===u,i,"user-mismatch"),In._forOperation(t,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Mt(i,"user-mismatch"),o}}/**
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
 */async function v_(t,e,n=!1){if(Pt(t.app))return Promise.reject(sn(t));const i="signIn",s=await Rh(t,i,e),o=await In._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(o.user),o}/**
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
 */async function __(t){const e=ei(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function y_(t,e,n){if(Pt(t.app))return Promise.reject(sn(t));const i=ei(t),l=await a_(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",p_).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&__(t),h}),u=await In._fromIdTokenResponse(i,"signIn",l);return await i._updateCurrentUser(u.user),u}function E_(t,e,n,i){return Qn(t).onIdTokenChanged(e,n,i)}function w_(t,e,n){return Qn(t).beforeAuthStateChanged(e,n)}const Dr="__sak";/**
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
 */class Ph{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dr,"1"),this.storage.removeItem(Dr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const b_=1e3,I_=10;class Oh extends Ph{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,u,h)=>{this.notifyListeners(l,h)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const l=this.storage.getItem(i);!n&&this.localCache[i]===l||this.notifyListeners(i,l)},o=this.storage.getItem(i);qv()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,I_):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},b_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Oh.type="LOCAL";const T_=Oh;/**
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
 */class kh extends Ph{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kh.type="SESSION";const Nh=kh;/**
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
 */function S_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Xr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:o}=n.data,l=this.handlersMap[s];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const u=Array.from(l).map(async d=>d(n.origin,o)),h=await S_(u);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xr.receivers=[];/**
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
 */function Bo(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class A_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,l;return new Promise((u,h)=>{const d=Bo("",20);s.port1.start();const g=setTimeout(()=>{h(new Error("unsupported_event"))},i);l={messageChannel:s,onMessage(_){const w=_;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(g),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(w.data.response);break;default:clearTimeout(g),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(l),s.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function Et(){return window}function C_(t){Et().location.href=t}/**
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
 */function Dh(){return typeof Et().WorkerGlobalScope<"u"&&typeof Et().importScripts=="function"}async function R_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function P_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function O_(){return Dh()?self:null}/**
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
 */const xh="firebaseLocalStorageDb",k_=1,xr="firebaseLocalStorage",Lh="fbase_key";class Vi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yr(t,e){return t.transaction([xr],e?"readwrite":"readonly").objectStore(xr)}function N_(){const t=indexedDB.deleteDatabase(xh);return new Vi(t).toPromise()}function ro(){const t=indexedDB.open(xh,k_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(xr,{keyPath:Lh})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(xr)?e(i):(i.close(),await N_(),e(await ro()))})})}async function ic(t,e,n){const i=Yr(t,!0).put({[Lh]:e,value:n});return new Vi(i).toPromise()}async function D_(t,e){const n=Yr(t,!1).get(e),i=await new Vi(n).toPromise();return i===void 0?null:i.value}function rc(t,e){const n=Yr(t,!0).delete(e);return new Vi(n).toPromise()}const x_=800,L_=3;class Mh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ro(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>L_)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xr._getInstance(O_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await R_(),!this.activeServiceWorker)return;this.sender=new A_(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||P_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ro();return await ic(e,Dr,"1"),await rc(e,Dr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>ic(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>D_(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Yr(s,!1).getAll();return new Vi(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),x_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mh.type="LOCAL";const M_=Mh;new Hi(3e4,6e4);/**
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
 */function U_(t,e){return e?Nt(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $o extends Ah{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function F_(t){return v_(t.auth,new $o(t),t.bypassAuthState)}function j_(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),m_(n,new $o(t),t.bypassAuthState)}async function H_(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),g_(n,new $o(t),t.bypassAuthState)}/**
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
 */class Uh{constructor(e,n,i,s,o=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:o,error:l,type:u}=e;if(l){this.reject(l);return}const h={auth:this.auth,requestUri:n,sessionId:i,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return F_;case"linkViaPopup":case"linkViaRedirect":return H_;case"reauthViaPopup":case"reauthViaRedirect":return j_;default:Mt(this.auth,"internal-error")}}resolve(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const B_=new Hi(2e3,1e4);class Fn extends Uh{constructor(e,n,i,s,o){super(e,n,s,o),this.provider=i,this.authWindow=null,this.pollId=null,Fn.currentPopupAction&&Fn.currentPopupAction.cancel(),Fn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const e=Bo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,B_.get())};e()}}Fn.currentPopupAction=null;/**
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
 */const $_="pendingRedirect",yr=new Map;class V_ extends Uh{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=yr.get(this.auth._key());if(!e){try{const i=await K_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}yr.set(this.auth._key(),e)}return this.bypassAuthState||yr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function K_(t,e){const n=G_(e),i=z_(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function W_(t,e){yr.set(t._key(),e)}function z_(t){return Nt(t._redirectPersistence)}function G_(t){return _r($_,t.config.apiKey,t.name)}async function q_(t,e,n=!1){if(Pt(t.app))return Promise.reject(sn(t));const i=ei(t),s=U_(i,e),l=await new V_(i,s,n).execute();return l&&!n&&(delete l.user._redirectEventId,await i._persistUserIfCurrent(l.user),await i._setRedirectUser(null,e)),l}/**
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
 */const J_=10*60*1e3;class X_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Fh(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(yt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=J_&&this.cachedEventUids.clear(),this.cachedEventUids.has(sc(e))}saveEventToCache(e){this.cachedEventUids.add(sc(e)),this.lastProcessedEventTime=Date.now()}}function sc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fh(t);default:return!1}}/**
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
 */async function Q_(t,e={}){return Sn(t,"GET","/v1/projects",e)}/**
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
 */const Z_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ey=/^https?/;async function ty(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Q_(t);for(const n of e)try{if(ny(n))return}catch{}Mt(t,"unauthorized-domain")}function ny(t){const e=no(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===i}if(!ey.test(n))return!1;if(Z_.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const iy=new Hi(3e4,6e4);function oc(){const t=Et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ry(t){return new Promise((e,n)=>{var i,s,o;function l(){oc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oc(),n(yt(t,"network-request-failed"))},timeout:iy.get()})}if(!((s=(i=Et().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=Et().gapi)===null||o===void 0)&&o.load)l();else{const u=i_("iframefcb");return Et()[u]=()=>{gapi.load?l():n(yt(t,"network-request-failed"))},Th(`${n_()}?onload=${u}`).catch(h=>n(h))}}).catch(e=>{throw Er=null,e})}let Er=null;function sy(t){return Er=Er||ry(t),Er}/**
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
 */const oy=new Hi(5e3,15e3),ay="__/auth/iframe",ly="emulator/auth/iframe",cy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hy(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fo(e,ly):`https://${t.config.authDomain}/${ay}`,i={apiKey:e.apiKey,appName:t.name,v:Zn},s=uy.get(t.config.apiHost);s&&(i.eid=s);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${ji(i).slice(1)}`}async function fy(t){const e=await sy(t),n=Et().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:hy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cy,dontclear:!0},i=>new Promise(async(s,o)=>{await i.restyle({setHideOnLeave:!1});const l=yt(t,"network-request-failed"),u=Et().setTimeout(()=>{o(l)},oy.get());function h(){Et().clearTimeout(u),s(i)}i.ping(h).then(h,()=>{o(l)})}))}/**
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
 */const dy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},py=500,gy=600,my="_blank",vy="http://localhost";class ac{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _y(t,e,n,i=py,s=gy){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),l=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const h=Object.assign(Object.assign({},dy),{width:i.toString(),height:s.toString(),top:o,left:l}),d=Je().toLowerCase();n&&(u=vh(d)?my:n),gh(d)&&(e=e||vy,h.scrollbars="yes");const g=Object.entries(h).reduce((w,[R,x])=>`${w}${R}=${x},`,"");if(Gv(d)&&u!=="_self")return yy(e||"",u),new ac(null);const _=window.open(e||"",u,g);ee(_,t,"popup-blocked");try{_.focus()}catch{}return new ac(_)}function yy(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const Ey="__/auth/handler",wy="emulator/auth/handler",by=encodeURIComponent("fac");async function lc(t,e,n,i,s,o){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Zn,eventId:s};if(e instanceof Ch){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",mm(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,_]of Object.entries({}))l[g]=_}if(e instanceof $i){const g=e.getScopes().filter(_=>_!=="");g.length>0&&(l.scopes=g.join(","))}t.tenantId&&(l.tid=t.tenantId);const u=l;for(const g of Object.keys(u))u[g]===void 0&&delete u[g];const h=await t._getAppCheckToken(),d=h?`#${by}=${encodeURIComponent(h)}`:"";return`${Iy(t)}?${ji(u).slice(1)}${d}`}function Iy({config:t}){return t.emulator?Fo(t,wy):`https://${t.authDomain}/${Ey}`}/**
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
 */const xs="webStorageSupport";class Ty{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nh,this._completeRedirectFn=q_,this._overrideRedirectResult=W_}async _openPopup(e,n,i,s){var o;Ut((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const l=await lc(e,n,i,no(),s);return _y(e,l,Bo())}async _openRedirect(e,n,i,s){await this._originValidation(e);const o=await lc(e,n,i,no(),s);return C_(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(Ut(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await fy(e),i=new X_(e);return n.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xs,{type:xs},s=>{var o;const l=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[xs];l!==void 0&&n(!!l),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ty(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bh()||mh()||Ho()}}const Sy=Ty;var cc="@firebase/auth",uc="1.7.9";/**
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
 */class Ay{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Cy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ry(t){Xn(new wn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=i.options;ee(l&&!l.includes(":"),"invalid-api-key",{appName:i.name});const h={apiKey:l,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ih(t)},d=new Zv(i,s,o,h);return c_(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Xn(new wn("auth-internal",e=>{const n=ei(e.getProvider("auth").getImmediate());return(i=>new Ay(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(cc,uc,Cy(t)),rn(cc,uc,"esm2017")}/**
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
 */const Py=5*60,Oy=Qu("authIdTokenMaxAge")||Py;let hc=null;const ky=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Oy)return;const s=n==null?void 0:n.token;hc!==s&&(hc=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ny(t=nh()){const e=Lo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=l_(t,{popupRedirectResolver:Sy,persistence:[M_,T_,Nh]}),i=Qu("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const l=ky(o.toString());w_(n,l,()=>l(n.currentUser)),E_(n,u=>l(u))}}const s=Xu("auth");return s&&u_(n,`http://${s}`),n}function Dy(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}e_({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const o=yt("internal-error");o.customData=s,n(o)},i.type="text/javascript",i.charset="UTF-8",Dy().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ry("Browser");var fc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jh;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,m){function E(){}E.prototype=m.prototype,b.D=m.prototype,b.prototype=new E,b.prototype.constructor=b,b.C=function(I,T,S){for(var y=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)y[Ve-2]=arguments[Ve];return m.prototype[T].apply(I,y)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,m,E){E||(E=0);var I=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)I[T]=m.charCodeAt(E++)|m.charCodeAt(E++)<<8|m.charCodeAt(E++)<<16|m.charCodeAt(E++)<<24;else for(T=0;16>T;++T)I[T]=m[E++]|m[E++]<<8|m[E++]<<16|m[E++]<<24;m=b.g[0],E=b.g[1],T=b.g[2];var S=b.g[3],y=m+(S^E&(T^S))+I[0]+3614090360&4294967295;m=E+(y<<7&4294967295|y>>>25),y=S+(T^m&(E^T))+I[1]+3905402710&4294967295,S=m+(y<<12&4294967295|y>>>20),y=T+(E^S&(m^E))+I[2]+606105819&4294967295,T=S+(y<<17&4294967295|y>>>15),y=E+(m^T&(S^m))+I[3]+3250441966&4294967295,E=T+(y<<22&4294967295|y>>>10),y=m+(S^E&(T^S))+I[4]+4118548399&4294967295,m=E+(y<<7&4294967295|y>>>25),y=S+(T^m&(E^T))+I[5]+1200080426&4294967295,S=m+(y<<12&4294967295|y>>>20),y=T+(E^S&(m^E))+I[6]+2821735955&4294967295,T=S+(y<<17&4294967295|y>>>15),y=E+(m^T&(S^m))+I[7]+4249261313&4294967295,E=T+(y<<22&4294967295|y>>>10),y=m+(S^E&(T^S))+I[8]+1770035416&4294967295,m=E+(y<<7&4294967295|y>>>25),y=S+(T^m&(E^T))+I[9]+2336552879&4294967295,S=m+(y<<12&4294967295|y>>>20),y=T+(E^S&(m^E))+I[10]+4294925233&4294967295,T=S+(y<<17&4294967295|y>>>15),y=E+(m^T&(S^m))+I[11]+2304563134&4294967295,E=T+(y<<22&4294967295|y>>>10),y=m+(S^E&(T^S))+I[12]+1804603682&4294967295,m=E+(y<<7&4294967295|y>>>25),y=S+(T^m&(E^T))+I[13]+4254626195&4294967295,S=m+(y<<12&4294967295|y>>>20),y=T+(E^S&(m^E))+I[14]+2792965006&4294967295,T=S+(y<<17&4294967295|y>>>15),y=E+(m^T&(S^m))+I[15]+1236535329&4294967295,E=T+(y<<22&4294967295|y>>>10),y=m+(T^S&(E^T))+I[1]+4129170786&4294967295,m=E+(y<<5&4294967295|y>>>27),y=S+(E^T&(m^E))+I[6]+3225465664&4294967295,S=m+(y<<9&4294967295|y>>>23),y=T+(m^E&(S^m))+I[11]+643717713&4294967295,T=S+(y<<14&4294967295|y>>>18),y=E+(S^m&(T^S))+I[0]+3921069994&4294967295,E=T+(y<<20&4294967295|y>>>12),y=m+(T^S&(E^T))+I[5]+3593408605&4294967295,m=E+(y<<5&4294967295|y>>>27),y=S+(E^T&(m^E))+I[10]+38016083&4294967295,S=m+(y<<9&4294967295|y>>>23),y=T+(m^E&(S^m))+I[15]+3634488961&4294967295,T=S+(y<<14&4294967295|y>>>18),y=E+(S^m&(T^S))+I[4]+3889429448&4294967295,E=T+(y<<20&4294967295|y>>>12),y=m+(T^S&(E^T))+I[9]+568446438&4294967295,m=E+(y<<5&4294967295|y>>>27),y=S+(E^T&(m^E))+I[14]+3275163606&4294967295,S=m+(y<<9&4294967295|y>>>23),y=T+(m^E&(S^m))+I[3]+4107603335&4294967295,T=S+(y<<14&4294967295|y>>>18),y=E+(S^m&(T^S))+I[8]+1163531501&4294967295,E=T+(y<<20&4294967295|y>>>12),y=m+(T^S&(E^T))+I[13]+2850285829&4294967295,m=E+(y<<5&4294967295|y>>>27),y=S+(E^T&(m^E))+I[2]+4243563512&4294967295,S=m+(y<<9&4294967295|y>>>23),y=T+(m^E&(S^m))+I[7]+1735328473&4294967295,T=S+(y<<14&4294967295|y>>>18),y=E+(S^m&(T^S))+I[12]+2368359562&4294967295,E=T+(y<<20&4294967295|y>>>12),y=m+(E^T^S)+I[5]+4294588738&4294967295,m=E+(y<<4&4294967295|y>>>28),y=S+(m^E^T)+I[8]+2272392833&4294967295,S=m+(y<<11&4294967295|y>>>21),y=T+(S^m^E)+I[11]+1839030562&4294967295,T=S+(y<<16&4294967295|y>>>16),y=E+(T^S^m)+I[14]+4259657740&4294967295,E=T+(y<<23&4294967295|y>>>9),y=m+(E^T^S)+I[1]+2763975236&4294967295,m=E+(y<<4&4294967295|y>>>28),y=S+(m^E^T)+I[4]+1272893353&4294967295,S=m+(y<<11&4294967295|y>>>21),y=T+(S^m^E)+I[7]+4139469664&4294967295,T=S+(y<<16&4294967295|y>>>16),y=E+(T^S^m)+I[10]+3200236656&4294967295,E=T+(y<<23&4294967295|y>>>9),y=m+(E^T^S)+I[13]+681279174&4294967295,m=E+(y<<4&4294967295|y>>>28),y=S+(m^E^T)+I[0]+3936430074&4294967295,S=m+(y<<11&4294967295|y>>>21),y=T+(S^m^E)+I[3]+3572445317&4294967295,T=S+(y<<16&4294967295|y>>>16),y=E+(T^S^m)+I[6]+76029189&4294967295,E=T+(y<<23&4294967295|y>>>9),y=m+(E^T^S)+I[9]+3654602809&4294967295,m=E+(y<<4&4294967295|y>>>28),y=S+(m^E^T)+I[12]+3873151461&4294967295,S=m+(y<<11&4294967295|y>>>21),y=T+(S^m^E)+I[15]+530742520&4294967295,T=S+(y<<16&4294967295|y>>>16),y=E+(T^S^m)+I[2]+3299628645&4294967295,E=T+(y<<23&4294967295|y>>>9),y=m+(T^(E|~S))+I[0]+4096336452&4294967295,m=E+(y<<6&4294967295|y>>>26),y=S+(E^(m|~T))+I[7]+1126891415&4294967295,S=m+(y<<10&4294967295|y>>>22),y=T+(m^(S|~E))+I[14]+2878612391&4294967295,T=S+(y<<15&4294967295|y>>>17),y=E+(S^(T|~m))+I[5]+4237533241&4294967295,E=T+(y<<21&4294967295|y>>>11),y=m+(T^(E|~S))+I[12]+1700485571&4294967295,m=E+(y<<6&4294967295|y>>>26),y=S+(E^(m|~T))+I[3]+2399980690&4294967295,S=m+(y<<10&4294967295|y>>>22),y=T+(m^(S|~E))+I[10]+4293915773&4294967295,T=S+(y<<15&4294967295|y>>>17),y=E+(S^(T|~m))+I[1]+2240044497&4294967295,E=T+(y<<21&4294967295|y>>>11),y=m+(T^(E|~S))+I[8]+1873313359&4294967295,m=E+(y<<6&4294967295|y>>>26),y=S+(E^(m|~T))+I[15]+4264355552&4294967295,S=m+(y<<10&4294967295|y>>>22),y=T+(m^(S|~E))+I[6]+2734768916&4294967295,T=S+(y<<15&4294967295|y>>>17),y=E+(S^(T|~m))+I[13]+1309151649&4294967295,E=T+(y<<21&4294967295|y>>>11),y=m+(T^(E|~S))+I[4]+4149444226&4294967295,m=E+(y<<6&4294967295|y>>>26),y=S+(E^(m|~T))+I[11]+3174756917&4294967295,S=m+(y<<10&4294967295|y>>>22),y=T+(m^(S|~E))+I[2]+718787259&4294967295,T=S+(y<<15&4294967295|y>>>17),y=E+(S^(T|~m))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+m&4294967295,b.g[1]=b.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,b.g[2]=b.g[2]+T&4294967295,b.g[3]=b.g[3]+S&4294967295}i.prototype.u=function(b,m){m===void 0&&(m=b.length);for(var E=m-this.blockSize,I=this.B,T=this.h,S=0;S<m;){if(T==0)for(;S<=E;)s(this,b,S),S+=this.blockSize;if(typeof b=="string"){for(;S<m;)if(I[T++]=b.charCodeAt(S++),T==this.blockSize){s(this,I),T=0;break}}else for(;S<m;)if(I[T++]=b[S++],T==this.blockSize){s(this,I),T=0;break}}this.h=T,this.o+=m},i.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var m=1;m<b.length-8;++m)b[m]=0;var E=8*this.o;for(m=b.length-8;m<b.length;++m)b[m]=E&255,E/=256;for(this.u(b),b=Array(16),m=E=0;4>m;++m)for(var I=0;32>I;I+=8)b[E++]=this.g[m]>>>I&255;return b};function o(b,m){var E=u;return Object.prototype.hasOwnProperty.call(E,b)?E[b]:E[b]=m(b)}function l(b,m){this.h=m;for(var E=[],I=!0,T=b.length-1;0<=T;T--){var S=b[T]|0;I&&S==m||(E[T]=S,I=!1)}this.g=E}var u={};function h(b){return-128<=b&&128>b?o(b,function(m){return new l([m|0],0>m?-1:0)}):new l([b|0],0>b?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return _;if(0>b)return G(d(-b));for(var m=[],E=1,I=0;b>=E;I++)m[I]=b/E|0,E*=4294967296;return new l(m,0)}function g(b,m){if(b.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(b.charAt(0)=="-")return G(g(b.substring(1),m));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=d(Math.pow(m,8)),I=_,T=0;T<b.length;T+=8){var S=Math.min(8,b.length-T),y=parseInt(b.substring(T,T+S),m);8>S?(S=d(Math.pow(m,S)),I=I.j(S).add(d(y))):(I=I.j(E),I=I.add(d(y)))}return I}var _=h(0),w=h(1),R=h(16777216);t=l.prototype,t.m=function(){if(j(this))return-G(this).m();for(var b=0,m=1,E=0;E<this.g.length;E++){var I=this.i(E);b+=(0<=I?I:4294967296+I)*m,m*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(x(this))return"0";if(j(this))return"-"+G(this).toString(b);for(var m=d(Math.pow(b,6)),E=this,I="";;){var T=V(E,m).g;E=X(E,T.j(m));var S=((0<E.g.length?E.g[0]:E.h)>>>0).toString(b);if(E=T,x(E))return S+I;for(;6>S.length;)S="0"+S;I=S+I}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function x(b){if(b.h!=0)return!1;for(var m=0;m<b.g.length;m++)if(b.g[m]!=0)return!1;return!0}function j(b){return b.h==-1}t.l=function(b){return b=X(this,b),j(b)?-1:x(b)?0:1};function G(b){for(var m=b.g.length,E=[],I=0;I<m;I++)E[I]=~b.g[I];return new l(E,~b.h).add(w)}t.abs=function(){return j(this)?G(this):this},t.add=function(b){for(var m=Math.max(this.g.length,b.g.length),E=[],I=0,T=0;T<=m;T++){var S=I+(this.i(T)&65535)+(b.i(T)&65535),y=(S>>>16)+(this.i(T)>>>16)+(b.i(T)>>>16);I=y>>>16,S&=65535,y&=65535,E[T]=y<<16|S}return new l(E,E[E.length-1]&-2147483648?-1:0)};function X(b,m){return b.add(G(m))}t.j=function(b){if(x(this)||x(b))return _;if(j(this))return j(b)?G(this).j(G(b)):G(G(this).j(b));if(j(b))return G(this.j(G(b)));if(0>this.l(R)&&0>b.l(R))return d(this.m()*b.m());for(var m=this.g.length+b.g.length,E=[],I=0;I<2*m;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var T=0;T<b.g.length;T++){var S=this.i(I)>>>16,y=this.i(I)&65535,Ve=b.i(T)>>>16,it=b.i(T)&65535;E[2*I+2*T]+=y*it,K(E,2*I+2*T),E[2*I+2*T+1]+=S*it,K(E,2*I+2*T+1),E[2*I+2*T+1]+=y*Ve,K(E,2*I+2*T+1),E[2*I+2*T+2]+=S*Ve,K(E,2*I+2*T+2)}for(I=0;I<m;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=m;I<2*m;I++)E[I]=0;return new l(E,0)};function K(b,m){for(;(b[m]&65535)!=b[m];)b[m+1]+=b[m]>>>16,b[m]&=65535,m++}function z(b,m){this.g=b,this.h=m}function V(b,m){if(x(m))throw Error("division by zero");if(x(b))return new z(_,_);if(j(b))return m=V(G(b),m),new z(G(m.g),G(m.h));if(j(m))return m=V(b,G(m)),new z(G(m.g),m.h);if(30<b.g.length){if(j(b)||j(m))throw Error("slowDivide_ only works with positive integers.");for(var E=w,I=m;0>=I.l(b);)E=re(E),I=re(I);var T=le(E,1),S=le(I,1);for(I=le(I,2),E=le(E,2);!x(I);){var y=S.add(I);0>=y.l(b)&&(T=T.add(E),S=y),I=le(I,1),E=le(E,1)}return m=X(b,T.j(m)),new z(T,m)}for(T=_;0<=b.l(m);){for(E=Math.max(1,Math.floor(b.m()/m.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),S=d(E),y=S.j(m);j(y)||0<y.l(b);)E-=I,S=d(E),y=S.j(m);x(S)&&(S=w),T=T.add(S),b=X(b,y)}return new z(T,b)}t.A=function(b){return V(this,b).h},t.and=function(b){for(var m=Math.max(this.g.length,b.g.length),E=[],I=0;I<m;I++)E[I]=this.i(I)&b.i(I);return new l(E,this.h&b.h)},t.or=function(b){for(var m=Math.max(this.g.length,b.g.length),E=[],I=0;I<m;I++)E[I]=this.i(I)|b.i(I);return new l(E,this.h|b.h)},t.xor=function(b){for(var m=Math.max(this.g.length,b.g.length),E=[],I=0;I<m;I++)E[I]=this.i(I)^b.i(I);return new l(E,this.h^b.h)};function re(b){for(var m=b.g.length+1,E=[],I=0;I<m;I++)E[I]=b.i(I)<<1|b.i(I-1)>>>31;return new l(E,b.h)}function le(b,m){var E=m>>5;m%=32;for(var I=b.g.length-E,T=[],S=0;S<I;S++)T[S]=0<m?b.i(S+E)>>>m|b.i(S+E+1)<<32-m:b.i(S+E);return new l(T,b.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=d,l.fromString=g,jh=l}).apply(typeof fc<"u"?fc:typeof self<"u"?self:typeof window<"u"?window:{});var ur=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,a,c){return r==Array.prototype||r==Object.prototype||(r[a]=c.value),r};function n(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof ur=="object"&&ur];for(var a=0;a<r.length;++a){var c=r[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var i=n(this);function s(r,a){if(a)e:{var c=i;r=r.split(".");for(var f=0;f<r.length-1;f++){var A=r[f];if(!(A in c))break e;c=c[A]}r=r[r.length-1],f=c[r],a=a(f),a!=f&&a!=null&&e(c,r,{configurable:!0,writable:!0,value:a})}}function o(r,a){r instanceof String&&(r+="");var c=0,f=!1,A={next:function(){if(!f&&c<r.length){var P=c++;return{value:a(P,r[P]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(r){return r||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function h(r){var a=typeof r;return a=a!="object"?a:r?Array.isArray(r)?"array":a:"null",a=="array"||a=="object"&&typeof r.length=="number"}function d(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function g(r,a,c){return r.call.apply(r.bind,arguments)}function _(r,a,c){if(!r)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),r.apply(a,A)}}return function(){return r.apply(a,arguments)}}function w(r,a,c){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:_,w.apply(null,arguments)}function R(r,a){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),r.apply(this,f)}}function x(r,a){function c(){}c.prototype=a.prototype,r.aa=a.prototype,r.prototype=new c,r.prototype.constructor=r,r.Qb=function(f,A,P){for(var F=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)F[ve-2]=arguments[ve];return a.prototype[A].apply(f,F)}}function j(r){const a=r.length;if(0<a){const c=Array(a);for(let f=0;f<a;f++)c[f]=r[f];return c}return[]}function G(r,a){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const A=r.length||0,P=f.length||0;r.length=A+P;for(let F=0;F<P;F++)r[A+F]=f[F]}else r.push(f)}}class X{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function K(r){return/^[\s\xa0]*$/.test(r)}function z(){var r=u.navigator;return r&&(r=r.userAgent)?r:""}function V(r){return V[" "](r),r}V[" "]=function(){};var re=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function le(r,a,c){for(const f in r)a.call(c,r[f],f,r)}function b(r,a){for(const c in r)a.call(void 0,r[c],c,r)}function m(r){const a={};for(const c in r)a[c]=r[c];return a}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(r,a){let c,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(c in f)r[c]=f[c];for(let P=0;P<E.length;P++)c=E[P],Object.prototype.hasOwnProperty.call(f,c)&&(r[c]=f[c])}}function T(r){var a=1;r=r.split(":");const c=[];for(;0<a&&r.length;)c.push(r.shift()),a--;return r.length&&c.push(r.join(":")),c}function S(r){u.setTimeout(()=>{throw r},0)}function y(){var r=Ye;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class Ve{constructor(){this.h=this.g=null}add(a,c){const f=it.get();f.set(a,c),this.h?this.h.next=f:this.g=f,this.h=f}}var it=new X(()=>new Ae,r=>r.reset());class Ae{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let se,ie=!1,Ye=new Ve,lt=()=>{const r=u.Promise.resolve(void 0);se=()=>{r.then(rt)}};var rt=()=>{for(var r;r=y();){try{r.h.call(r.g)}catch(c){S(c)}var a=it;a.j(r),100>a.h&&(a.h++,r.next=a.g,a.g=r)}ie=!1};function we(){this.s=this.s,this.C=this.C}we.prototype.s=!1,we.prototype.ma=function(){this.s||(this.s=!0,this.N())},we.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var Ht=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const c=()=>{};u.addEventListener("test",c,a),u.removeEventListener("test",c,a)}catch{}return r}();function pt(r,a){if(be.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var c=this.type=r.type,f=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget){if(re){e:{try{V(a.nodeName);var A=!0;break e}catch{}A=!1}A||(a=null)}}else c=="mouseover"?a=r.fromElement:c=="mouseout"&&(a=r.toElement);this.relatedTarget=a,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:Xe[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&pt.aa.h.call(this)}}x(pt,be);var Xe={2:"touch",3:"pen",4:"mouse"};pt.prototype.h=function(){pt.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var k="closure_listenable_"+(1e6*Math.random()|0),W=0;function B(r,a,c,f,A){this.listener=r,this.proxy=null,this.src=a,this.type=c,this.capture=!!f,this.ha=A,this.key=++W,this.da=this.fa=!1}function q(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function oe(r){this.src=r,this.g={},this.h=0}oe.prototype.add=function(r,a,c,f,A){var P=r.toString();r=this.g[P],r||(r=this.g[P]=[],this.h++);var F=p(r,a,f,A);return-1<F?(a=r[F],c||(a.fa=!1)):(a=new B(a,this.src,P,!!f,A),a.fa=c,r.push(a)),a};function me(r,a){var c=a.type;if(c in r.g){var f=r.g[c],A=Array.prototype.indexOf.call(f,a,void 0),P;(P=0<=A)&&Array.prototype.splice.call(f,A,1),P&&(q(a),r.g[c].length==0&&(delete r.g[c],r.h--))}}function p(r,a,c,f){for(var A=0;A<r.length;++A){var P=r[A];if(!P.da&&P.listener==a&&P.capture==!!c&&P.ha==f)return A}return-1}var v="closure_lm_"+(1e6*Math.random()|0),C={};function N(r,a,c,f,A){if(Array.isArray(a)){for(var P=0;P<a.length;P++)N(r,a[P],c,f,A);return null}return c=Y(c),r&&r[k]?r.K(a,c,d(f)?!!f.capture:!!f,A):O(r,a,c,!1,f,A)}function O(r,a,c,f,A,P){if(!a)throw Error("Invalid event type");var F=d(A)?!!A.capture:!!A,ve=Q(r);if(ve||(r[v]=ve=new oe(r)),c=ve.add(a,c,f,F,P),c.proxy)return c;if(f=D(),c.proxy=f,f.src=r,f.listener=c,r.addEventListener)Ht||(A=F),A===void 0&&(A=!1),r.addEventListener(a.toString(),f,A);else if(r.attachEvent)r.attachEvent(M(a.toString()),f);else if(r.addListener&&r.removeListener)r.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function D(){function r(c){return a.call(r.src,r.listener,c)}const a=L;return r}function H(r,a,c,f,A){if(Array.isArray(a))for(var P=0;P<a.length;P++)H(r,a[P],c,f,A);else f=d(f)?!!f.capture:!!f,c=Y(c),r&&r[k]?(r=r.i,a=String(a).toString(),a in r.g&&(P=r.g[a],c=p(P,c,f,A),-1<c&&(q(P[c]),Array.prototype.splice.call(P,c,1),P.length==0&&(delete r.g[a],r.h--)))):r&&(r=Q(r))&&(a=r.g[a.toString()],r=-1,a&&(r=p(a,c,f,A)),(c=-1<r?a[r]:null)&&U(c))}function U(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[k])me(a.i,r);else{var c=r.type,f=r.proxy;a.removeEventListener?a.removeEventListener(c,f,r.capture):a.detachEvent?a.detachEvent(M(c),f):a.addListener&&a.removeListener&&a.removeListener(f),(c=Q(a))?(me(c,r),c.h==0&&(c.src=null,a[v]=null)):q(r)}}}function M(r){return r in C?C[r]:C[r]="on"+r}function L(r,a){if(r.da)r=!0;else{a=new pt(a,this);var c=r.listener,f=r.ha||r.src;r.fa&&U(r),r=c.call(f,a)}return r}function Q(r){return r=r[v],r instanceof oe?r:null}var $="__closure_events_fn_"+(1e9*Math.random()>>>0);function Y(r){return typeof r=="function"?r:(r[$]||(r[$]=function(a){return r.handleEvent(a)}),r[$])}function J(){we.call(this),this.i=new oe(this),this.M=this,this.F=null}x(J,we),J.prototype[k]=!0,J.prototype.removeEventListener=function(r,a,c,f){H(this,r,a,c,f)};function Z(r,a){var c,f=r.F;if(f)for(c=[];f;f=f.F)c.push(f);if(r=r.M,f=a.type||a,typeof a=="string")a=new be(a,r);else if(a instanceof be)a.target=a.target||r;else{var A=a;a=new be(f,r),I(a,A)}if(A=!0,c)for(var P=c.length-1;0<=P;P--){var F=a.g=c[P];A=he(F,f,!0,a)&&A}if(F=a.g=r,A=he(F,f,!0,a)&&A,A=he(F,f,!1,a)&&A,c)for(P=0;P<c.length;P++)F=a.g=c[P],A=he(F,f,!1,a)&&A}J.prototype.N=function(){if(J.aa.N.call(this),this.i){var r=this.i,a;for(a in r.g){for(var c=r.g[a],f=0;f<c.length;f++)q(c[f]);delete r.g[a],r.h--}}this.F=null},J.prototype.K=function(r,a,c,f){return this.i.add(String(r),a,!1,c,f)},J.prototype.L=function(r,a,c,f){return this.i.add(String(r),a,!0,c,f)};function he(r,a,c,f){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();for(var A=!0,P=0;P<a.length;++P){var F=a[P];if(F&&!F.da&&F.capture==c){var ve=F.listener,Oe=F.ha||F.src;F.fa&&me(r.i,F),A=ve.call(Oe,f)!==!1&&A}}return A&&!f.defaultPrevented}function ce(r,a,c){if(typeof r=="function")c&&(r=w(r,c));else if(r&&typeof r.handleEvent=="function")r=w(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(r,a||0)}function De(r){r.g=ce(()=>{r.g=null,r.i&&(r.i=!1,De(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class Re extends we{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:De(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pe(r){we.call(this),this.h=r,this.g={}}x(Pe,we);var xe=[];function Bt(r){le(r.g,function(a,c){this.g.hasOwnProperty(c)&&U(a)},r),r.g={}}Pe.prototype.N=function(){Pe.aa.N.call(this),Bt(this)},Pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var An=u.JSON.stringify,Ke=u.JSON.parse,st=class{stringify(r){return u.JSON.stringify(r,void 0)}parse(r){return u.JSON.parse(r,void 0)}};function Cn(){}Cn.prototype.h=null;function qo(r){return r.h||(r.h=r.i())}function zh(){}var ti={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qr(){be.call(this,"d")}x(Qr,be);function Zr(){be.call(this,"c")}x(Zr,be);var Rn={},Jo=null;function es(){return Jo=Jo||new J}Rn.La="serverreachability";function Xo(r){be.call(this,Rn.La,r)}x(Xo,be);function ni(r){const a=es();Z(a,new Xo(a))}Rn.STAT_EVENT="statevent";function Yo(r,a){be.call(this,Rn.STAT_EVENT,r),this.stat=a}x(Yo,be);function We(r){const a=es();Z(a,new Yo(a,r))}Rn.Ma="timingevent";function Qo(r,a){be.call(this,Rn.Ma,r),this.size=a}x(Qo,be);function ii(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){r()},a)}function ri(){this.g=!0}ri.prototype.xa=function(){this.g=!1};function Gh(r,a,c,f,A,P){r.info(function(){if(r.g)if(P)for(var F="",ve=P.split("&"),Oe=0;Oe<ve.length;Oe++){var ue=ve[Oe].split("=");if(1<ue.length){var Le=ue[0];ue=ue[1];var Me=Le.split("_");F=2<=Me.length&&Me[1]=="type"?F+(Le+"="+ue+"&"):F+(Le+"=redacted&")}}else F=null;else F=P;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+a+`
`+c+`
`+F})}function qh(r,a,c,f,A,P,F){r.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+a+`
`+c+`
`+P+" "+F})}function Pn(r,a,c,f){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+Xh(r,c)+(f?" "+f:"")})}function Jh(r,a){r.info(function(){return"TIMEOUT: "+a})}ri.prototype.info=function(){};function Xh(r,a){if(!r.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(r=0;r<c.length;r++)if(Array.isArray(c[r])){var f=c[r];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(var F=1;F<A.length;F++)A[F]=""}}}}return An(c)}catch{return a}}var ts={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ns;function Wi(){}x(Wi,Cn),Wi.prototype.g=function(){return new XMLHttpRequest},Wi.prototype.i=function(){return{}},ns=new Wi;function $t(r,a,c,f){this.j=r,this.i=a,this.l=c,this.R=f||1,this.U=new Pe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zo}function Zo(){this.i=null,this.g="",this.h=!1}var ea={},is={};function rs(r,a,c){r.L=1,r.v=Ji(bt(a)),r.m=c,r.P=!0,ta(r,null)}function ta(r,a){r.F=Date.now(),zi(r),r.A=bt(r.v);var c=r.A,f=r.R;Array.isArray(f)||(f=[String(f)]),ga(c.i,"t",f),r.C=0,c=r.j.J,r.h=new Zo,r.g=Da(r.j,c?a:null,!r.m),0<r.O&&(r.M=new Re(w(r.Y,r,r.g),r.O)),a=r.U,c=r.g,f=r.ca;var A="readystatechange";Array.isArray(A)||(A&&(xe[0]=A.toString()),A=xe);for(var P=0;P<A.length;P++){var F=N(c,A[P],f||a.handleEvent,!1,a.h||a);if(!F)break;a.g[F.key]=F}a=r.H?m(r.H):{},r.m?(r.u||(r.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,a)):(r.u="GET",r.g.ea(r.A,r.u,null,a)),ni(),Gh(r.i,r.u,r.A,r.l,r.R,r.m)}$t.prototype.ca=function(r){r=r.target;const a=this.M;a&&It(r)==3?a.j():this.Y(r)},$t.prototype.Y=function(r){try{if(r==this.g)e:{const Me=It(this.g);var a=this.g.Ba();const Nn=this.g.Z();if(!(3>Me)&&(Me!=3||this.g&&(this.h.h||this.g.oa()||ba(this.g)))){this.J||Me!=4||a==7||(a==8||0>=Nn?ni(3):ni(2)),ss(this);var c=this.g.Z();this.X=c;t:if(na(this)){var f=ba(this.g);r="";var A=f.length,P=It(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),si(this);var F="";break t}this.h.i=new u.TextDecoder}for(a=0;a<A;a++)this.h.h=!0,r+=this.h.i.decode(f[a],{stream:!(P&&a==A-1)});f.length=0,this.h.g+=r,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=c==200,qh(this.i,this.u,this.A,this.l,this.R,Me,c),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,Oe=this.g;if((ve=Oe.g?Oe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(ve)){var ue=ve;break t}}ue=null}if(c=ue)Pn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,os(this,c);else{this.o=!1,this.s=3,We(12),un(this),si(this);break e}}if(this.P){c=!0;let ct;for(;!this.J&&this.C<F.length;)if(ct=Qh(this,F),ct==is){Me==4&&(this.s=4,We(14),c=!1),Pn(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==ea){this.s=4,We(15),Pn(this.i,this.l,F,"[Invalid Chunk]"),c=!1;break}else Pn(this.i,this.l,ct,null),os(this,ct);if(na(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Me!=4||F.length!=0||this.h.h||(this.s=1,We(16),c=!1),this.o=this.o&&c,!c)Pn(this.i,this.l,F,"[Invalid Chunked Response]"),un(this),si(this);else if(0<F.length&&!this.W){this.W=!0;var Le=this.j;Le.g==this&&Le.ba&&!Le.M&&(Le.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),fs(Le),Le.M=!0,We(11))}}else Pn(this.i,this.l,F,null),os(this,F);Me==4&&un(this),this.o&&!this.J&&(Me==4?Pa(this.j,this):(this.o=!1,zi(this)))}else mf(this.g),c==400&&0<F.indexOf("Unknown SID")?(this.s=3,We(12)):(this.s=0,We(13)),un(this),si(this)}}}catch{}finally{}};function na(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Qh(r,a){var c=r.C,f=a.indexOf(`
`,c);return f==-1?is:(c=Number(a.substring(c,f)),isNaN(c)?ea:(f+=1,f+c>a.length?is:(a=a.slice(f,f+c),r.C=f+c,a)))}$t.prototype.cancel=function(){this.J=!0,un(this)};function zi(r){r.S=Date.now()+r.I,ia(r,r.I)}function ia(r,a){if(r.B!=null)throw Error("WatchDog timer not null");r.B=ii(w(r.ba,r),a)}function ss(r){r.B&&(u.clearTimeout(r.B),r.B=null)}$t.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Jh(this.i,this.A),this.L!=2&&(ni(),We(17)),un(this),this.s=2,si(this)):ia(this,this.S-r)};function si(r){r.j.G==0||r.J||Pa(r.j,r)}function un(r){ss(r);var a=r.M;a&&typeof a.ma=="function"&&a.ma(),r.M=null,Bt(r.U),r.g&&(a=r.g,r.g=null,a.abort(),a.ma())}function os(r,a){try{var c=r.j;if(c.G!=0&&(c.g==r||as(c.h,r))){if(!r.K&&as(c.h,r)&&c.G==3){try{var f=c.Da.g.parse(a)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<r.F)tr(c),Zi(c);else break e;hs(c),We(18)}}else c.za=A[1],0<c.za-c.T&&37500>A[2]&&c.F&&c.v==0&&!c.C&&(c.C=ii(w(c.Za,c),6e3));if(1>=oa(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else fn(c,11)}else if((r.K||c.g==r)&&tr(c),!K(a))for(A=c.Da.g.parse(a),a=0;a<A.length;a++){let ue=A[a];if(c.T=ue[0],ue=ue[1],c.G==2)if(ue[0]=="c"){c.K=ue[1],c.ia=ue[2];const Le=ue[3];Le!=null&&(c.la=Le,c.j.info("VER="+c.la));const Me=ue[4];Me!=null&&(c.Aa=Me,c.j.info("SVER="+c.Aa));const Nn=ue[5];Nn!=null&&typeof Nn=="number"&&0<Nn&&(f=1.5*Nn,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const ct=r.g;if(ct){const nr=ct.g?ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(nr){var P=f.h;P.g||nr.indexOf("spdy")==-1&&nr.indexOf("quic")==-1&&nr.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ls(P,P.h),P.h=null))}if(f.D){const ds=ct.g?ct.g.getResponseHeader("X-HTTP-Session-Id"):null;ds&&(f.ya=ds,Ee(f.I,f.D,ds))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-r.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var F=r;if(f.qa=Na(f,f.J?f.ia:null,f.W),F.K){aa(f.h,F);var ve=F,Oe=f.L;Oe&&(ve.I=Oe),ve.B&&(ss(ve),zi(ve)),f.g=F}else Ca(f);0<c.i.length&&er(c)}else ue[0]!="stop"&&ue[0]!="close"||fn(c,7);else c.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?fn(c,7):us(c):ue[0]!="noop"&&c.l&&c.l.ta(ue),c.v=0)}}ni(4)}catch{}}var Zh=class{constructor(r,a){this.g=r,this.map=a}};function ra(r){this.l=r||10,u.PerformanceNavigationTiming?(r=u.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sa(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function oa(r){return r.h?1:r.g?r.g.size:0}function as(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function ls(r,a){r.g?r.g.add(a):r.h=a}function aa(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}ra.prototype.cancel=function(){if(this.i=la(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function la(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const c of r.g.values())a=a.concat(c.D);return a}return j(r.i)}function ef(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(h(r)){for(var a=[],c=r.length,f=0;f<c;f++)a.push(r[f]);return a}a=[],c=0;for(f in r)a[c++]=r[f];return a}function tf(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(h(r)||typeof r=="string"){var a=[];r=r.length;for(var c=0;c<r;c++)a.push(c);return a}a=[],c=0;for(const f in r)a[c++]=f;return a}}}function ca(r,a){if(r.forEach&&typeof r.forEach=="function")r.forEach(a,void 0);else if(h(r)||typeof r=="string")Array.prototype.forEach.call(r,a,void 0);else for(var c=tf(r),f=ef(r),A=f.length,P=0;P<A;P++)a.call(void 0,f[P],c&&c[P],r)}var ua=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nf(r,a){if(r){r=r.split("&");for(var c=0;c<r.length;c++){var f=r[c].indexOf("="),A=null;if(0<=f){var P=r[c].substring(0,f);A=r[c].substring(f+1)}else P=r[c];a(P,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function hn(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof hn){this.h=r.h,Gi(this,r.j),this.o=r.o,this.g=r.g,qi(this,r.s),this.l=r.l;var a=r.i,c=new li;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),ha(this,c),this.m=r.m}else r&&(a=String(r).match(ua))?(this.h=!1,Gi(this,a[1]||"",!0),this.o=oi(a[2]||""),this.g=oi(a[3]||"",!0),qi(this,a[4]),this.l=oi(a[5]||"",!0),ha(this,a[6]||"",!0),this.m=oi(a[7]||"")):(this.h=!1,this.i=new li(null,this.h))}hn.prototype.toString=function(){var r=[],a=this.j;a&&r.push(ai(a,fa,!0),":");var c=this.g;return(c||a=="file")&&(r.push("//"),(a=this.o)&&r.push(ai(a,fa,!0),"@"),r.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&r.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&r.push("/"),r.push(ai(c,c.charAt(0)=="/"?of:sf,!0))),(c=this.i.toString())&&r.push("?",c),(c=this.m)&&r.push("#",ai(c,lf)),r.join("")};function bt(r){return new hn(r)}function Gi(r,a,c){r.j=c?oi(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function qi(r,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);r.s=a}else r.s=null}function ha(r,a,c){a instanceof li?(r.i=a,cf(r.i,r.h)):(c||(a=ai(a,af)),r.i=new li(a,r.h))}function Ee(r,a,c){r.i.set(a,c)}function Ji(r){return Ee(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function oi(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function ai(r,a,c){return typeof r=="string"?(r=encodeURI(r).replace(a,rf),c&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function rf(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var fa=/[#\/\?@]/g,sf=/[#\?:]/g,of=/[#\?]/g,af=/[#\?@]/g,lf=/#/g;function li(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function Vt(r){r.g||(r.g=new Map,r.h=0,r.i&&nf(r.i,function(a,c){r.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}t=li.prototype,t.add=function(r,a){Vt(this),this.i=null,r=On(this,r);var c=this.g.get(r);return c||this.g.set(r,c=[]),c.push(a),this.h+=1,this};function da(r,a){Vt(r),a=On(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function pa(r,a){return Vt(r),a=On(r,a),r.g.has(a)}t.forEach=function(r,a){Vt(this),this.g.forEach(function(c,f){c.forEach(function(A){r.call(a,A,f,this)},this)},this)},t.na=function(){Vt(this);const r=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let f=0;f<a.length;f++){const A=r[f];for(let P=0;P<A.length;P++)c.push(a[f])}return c},t.V=function(r){Vt(this);let a=[];if(typeof r=="string")pa(this,r)&&(a=a.concat(this.g.get(On(this,r))));else{r=Array.from(this.g.values());for(let c=0;c<r.length;c++)a=a.concat(r[c])}return a},t.set=function(r,a){return Vt(this),this.i=null,r=On(this,r),pa(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},t.get=function(r,a){return r?(r=this.V(r),0<r.length?String(r[0]):a):a};function ga(r,a,c){da(r,a),0<c.length&&(r.i=null,r.g.set(On(r,a),j(c)),r.h+=c.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var f=a[c];const P=encodeURIComponent(String(f)),F=this.V(f);for(f=0;f<F.length;f++){var A=P;F[f]!==""&&(A+="="+encodeURIComponent(String(F[f]))),r.push(A)}}return this.i=r.join("&")};function On(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function cf(r,a){a&&!r.j&&(Vt(r),r.i=null,r.g.forEach(function(c,f){var A=f.toLowerCase();f!=A&&(da(this,f),ga(this,A,c))},r)),r.j=a}function uf(r,a){const c=new ri;if(u.Image){const f=new Image;f.onload=R(Kt,c,"TestLoadImage: loaded",!0,a,f),f.onerror=R(Kt,c,"TestLoadImage: error",!1,a,f),f.onabort=R(Kt,c,"TestLoadImage: abort",!1,a,f),f.ontimeout=R(Kt,c,"TestLoadImage: timeout",!1,a,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=r}else a(!1)}function hf(r,a){const c=new ri,f=new AbortController,A=setTimeout(()=>{f.abort(),Kt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:f.signal}).then(P=>{clearTimeout(A),P.ok?Kt(c,"TestPingServer: ok",!0,a):Kt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(A),Kt(c,"TestPingServer: error",!1,a)})}function Kt(r,a,c,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(c)}catch{}}function ff(){this.g=new st}function df(r,a,c){const f=c||"";try{ca(r,function(A,P){let F=A;d(A)&&(F=An(A)),a.push(f+P+"="+encodeURIComponent(F))})}catch(A){throw a.push(f+"type="+encodeURIComponent("_badmap")),A}}function Xi(r){this.l=r.Ub||null,this.j=r.eb||!1}x(Xi,Cn),Xi.prototype.g=function(){return new Yi(this.l,this.j)},Xi.prototype.i=function(r){return function(){return r}}({});function Yi(r,a){J.call(this),this.D=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Yi,J),t=Yi.prototype,t.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=a,this.readyState=1,ui(this)},t.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(a.body=r),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ci(this)),this.readyState=0},t.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ma(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function ma(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}t.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?ci(this):ui(this),this.readyState==3&&ma(this)}},t.Ra=function(r){this.g&&(this.response=this.responseText=r,ci(this))},t.Qa=function(r){this.g&&(this.response=r,ci(this))},t.ga=function(){this.g&&ci(this)};function ci(r){r.readyState=4,r.l=null,r.j=null,r.v=null,ui(r)}t.setRequestHeader=function(r,a){this.u.append(r,a)},t.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,r.push(c[0]+": "+c[1]),c=a.next();return r.join(`\r
`)};function ui(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(Yi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function va(r){let a="";return le(r,function(c,f){a+=f,a+=":",a+=c,a+=`\r
`}),a}function cs(r,a,c){e:{for(f in c){var f=!1;break e}f=!0}f||(c=va(c),typeof r=="string"?c!=null&&encodeURIComponent(String(c)):Ee(r,a,c))}function Se(r){J.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Se,J);var pf=/^https?$/i,gf=["POST","PUT"];t=Se.prototype,t.Ha=function(r){this.J=r},t.ea=function(r,a,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ns.g(),this.v=this.o?qo(this.o):qo(ns),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(P){_a(this,P);return}if(r=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)c.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())c.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(P=>P.toLowerCase()=="content-type"),A=u.FormData&&r instanceof u.FormData,!(0<=Array.prototype.indexOf.call(gf,a,void 0))||f||A||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,F]of c)this.g.setRequestHeader(P,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wa(this),this.u=!0,this.g.send(r),this.u=!1}catch(P){_a(this,P)}};function _a(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.m=5,ya(r),Qi(r)}function ya(r){r.A||(r.A=!0,Z(r,"complete"),Z(r,"error"))}t.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,Z(this,"complete"),Z(this,"abort"),Qi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qi(this,!0)),Se.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ea(this):this.bb())},t.bb=function(){Ea(this)};function Ea(r){if(r.h&&typeof l<"u"&&(!r.v[1]||It(r)!=4||r.Z()!=2)){if(r.u&&It(r)==4)ce(r.Ea,0,r);else if(Z(r,"readystatechange"),It(r)==4){r.h=!1;try{const F=r.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break e;default:a=!1}var c;if(!(c=a)){var f;if(f=F===0){var A=String(r.D).match(ua)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!pf.test(A?A.toLowerCase():"")}c=f}if(c)Z(r,"complete"),Z(r,"success");else{r.m=6;try{var P=2<It(r)?r.g.statusText:""}catch{P=""}r.l=P+" ["+r.Z()+"]",ya(r)}}finally{Qi(r)}}}}function Qi(r,a){if(r.g){wa(r);const c=r.g,f=r.v[0]?()=>{}:null;r.g=null,r.v=null,a||Z(r,"ready");try{c.onreadystatechange=f}catch{}}}function wa(r){r.I&&(u.clearTimeout(r.I),r.I=null)}t.isActive=function(){return!!this.g};function It(r){return r.g?r.g.readyState:0}t.Z=function(){try{return 2<It(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),Ke(a)}};function ba(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function mf(r){const a={};r=(r.g&&2<=It(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<r.length;f++){if(K(r[f]))continue;var c=T(r[f]);const A=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const P=a[A]||[];a[A]=P,P.push(c)}b(a,function(f){return f.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hi(r,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[r]||a}function Ia(r){this.Aa=0,this.i=[],this.j=new ri,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hi("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hi("baseRetryDelayMs",5e3,r),this.cb=hi("retryDelaySeedMs",1e4,r),this.Wa=hi("forwardChannelMaxRetries",2,r),this.wa=hi("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new ra(r&&r.concurrentRequestLimit),this.Da=new ff,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ia.prototype,t.la=8,t.G=1,t.connect=function(r,a,c,f){We(0),this.W=r,this.H=a||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=Na(this,null,this.W),er(this)};function us(r){if(Ta(r),r.G==3){var a=r.U++,c=bt(r.I);if(Ee(c,"SID",r.K),Ee(c,"RID",a),Ee(c,"TYPE","terminate"),fi(r,c),a=new $t(r,r.j,a),a.L=2,a.v=Ji(bt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=a.v,c=!0),c||(a.g=Da(a.j,null),a.g.ea(a.v)),a.F=Date.now(),zi(a)}ka(r)}function Zi(r){r.g&&(fs(r),r.g.cancel(),r.g=null)}function Ta(r){Zi(r),r.u&&(u.clearTimeout(r.u),r.u=null),tr(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&u.clearTimeout(r.s),r.s=null)}function er(r){if(!sa(r.h)&&!r.s){r.s=!0;var a=r.Ga;se||lt(),ie||(se(),ie=!0),Ye.add(a,r),r.B=0}}function vf(r,a){return oa(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=a.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=ii(w(r.Ga,r,a),Oa(r,r.B)),r.B++,!0)}t.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const A=new $t(this,this.j,r);let P=this.o;if(this.S&&(P?(P=m(P),I(P,this.S)):P=this.S),this.m!==null||this.O||(A.H=P,P=null),this.P)e:{for(var a=0,c=0;c<this.i.length;c++){t:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(a+=f,4096<a){a=c;break e}if(a===4096||c===this.i.length-1){a=c+1;break e}}a=1e3}else a=1e3;a=Aa(this,A,a),c=bt(this.I),Ee(c,"RID",r),Ee(c,"CVER",22),this.D&&Ee(c,"X-HTTP-Session-Id",this.D),fi(this,c),P&&(this.O?a="headers="+encodeURIComponent(String(va(P)))+"&"+a:this.m&&cs(c,this.m,P)),ls(this.h,A),this.Ua&&Ee(c,"TYPE","init"),this.P?(Ee(c,"$req",a),Ee(c,"SID","null"),A.T=!0,rs(A,c,null)):rs(A,c,a),this.G=2}}else this.G==3&&(r?Sa(this,r):this.i.length==0||sa(this.h)||Sa(this))};function Sa(r,a){var c;a?c=a.l:c=r.U++;const f=bt(r.I);Ee(f,"SID",r.K),Ee(f,"RID",c),Ee(f,"AID",r.T),fi(r,f),r.m&&r.o&&cs(f,r.m,r.o),c=new $t(r,r.j,c,r.B+1),r.m===null&&(c.H=r.o),a&&(r.i=a.D.concat(r.i)),a=Aa(r,c,1e3),c.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),ls(r.h,c),rs(c,f,a)}function fi(r,a){r.H&&le(r.H,function(c,f){Ee(a,f,c)}),r.l&&ca({},function(c,f){Ee(a,f,c)})}function Aa(r,a,c){c=Math.min(r.i.length,c);var f=r.l?w(r.l.Na,r.l,r):null;e:{var A=r.i;let P=-1;for(;;){const F=["count="+c];P==-1?0<c?(P=A[0].g,F.push("ofs="+P)):P=0:F.push("ofs="+P);let ve=!0;for(let Oe=0;Oe<c;Oe++){let ue=A[Oe].g;const Le=A[Oe].map;if(ue-=P,0>ue)P=Math.max(0,A[Oe].g-100),ve=!1;else try{df(Le,F,"req"+ue+"_")}catch{f&&f(Le)}}if(ve){f=F.join("&");break e}}}return r=r.i.splice(0,c),a.D=r,f}function Ca(r){if(!r.g&&!r.u){r.Y=1;var a=r.Fa;se||lt(),ie||(se(),ie=!0),Ye.add(a,r),r.v=0}}function hs(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=ii(w(r.Fa,r),Oa(r,r.v)),r.v++,!0)}t.Fa=function(){if(this.u=null,Ra(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=ii(w(this.ab,this),r)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,We(10),Zi(this),Ra(this))};function fs(r){r.A!=null&&(u.clearTimeout(r.A),r.A=null)}function Ra(r){r.g=new $t(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var a=bt(r.qa);Ee(a,"RID","rpc"),Ee(a,"SID",r.K),Ee(a,"AID",r.T),Ee(a,"CI",r.F?"0":"1"),!r.F&&r.ja&&Ee(a,"TO",r.ja),Ee(a,"TYPE","xmlhttp"),fi(r,a),r.m&&r.o&&cs(a,r.m,r.o),r.L&&(r.g.I=r.L);var c=r.g;r=r.ia,c.L=1,c.v=Ji(bt(a)),c.m=null,c.P=!0,ta(c,r)}t.Za=function(){this.C!=null&&(this.C=null,Zi(this),hs(this),We(19))};function tr(r){r.C!=null&&(u.clearTimeout(r.C),r.C=null)}function Pa(r,a){var c=null;if(r.g==a){tr(r),fs(r),r.g=null;var f=2}else if(as(r.h,a))c=a.D,aa(r.h,a),f=1;else return;if(r.G!=0){if(a.o)if(f==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var A=r.B;f=es(),Z(f,new Qo(f,c)),er(r)}else Ca(r);else if(A=a.s,A==3||A==0&&0<a.X||!(f==1&&vf(r,a)||f==2&&hs(r)))switch(c&&0<c.length&&(a=r.h,a.i=a.i.concat(c)),A){case 1:fn(r,5);break;case 4:fn(r,10);break;case 3:fn(r,6);break;default:fn(r,2)}}}function Oa(r,a){let c=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(c*=2),c*a}function fn(r,a){if(r.j.info("Error code "+a),a==2){var c=w(r.fb,r),f=r.Xa;const A=!f;f=new hn(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Gi(f,"https"),Ji(f),A?uf(f.toString(),c):hf(f.toString(),c)}else We(2);r.G=0,r.l&&r.l.sa(a),ka(r),Ta(r)}t.fb=function(r){r?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function ka(r){if(r.G=0,r.ka=[],r.l){const a=la(r.h);(a.length!=0||r.i.length!=0)&&(G(r.ka,a),G(r.ka,r.i),r.h.i.length=0,j(r.i),r.i.length=0),r.l.ra()}}function Na(r,a,c){var f=c instanceof hn?bt(c):new hn(c);if(f.g!="")a&&(f.g=a+"."+f.g),qi(f,f.s);else{var A=u.location;f=A.protocol,a=a?a+"."+A.hostname:A.hostname,A=+A.port;var P=new hn(null);f&&Gi(P,f),a&&(P.g=a),A&&qi(P,A),c&&(P.l=c),f=P}return c=r.D,a=r.ya,c&&a&&Ee(f,c,a),Ee(f,"VER",r.la),fi(r,f),f}function Da(r,a,c){if(a&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Ca&&!r.pa?new Se(new Xi({eb:c})):new Se(r.pa),a.Ha(r.J),a}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function xa(){}t=xa.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ot(r,a){J.call(this),this.g=new Ia(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(r?r["X-WebChannel-Client-Profile"]=a.va:r={"X-WebChannel-Client-Profile":a.va}),this.g.S=r,(r=a&&a.Sb)&&!K(r)&&(this.g.m=r),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!K(a)&&(this.g.D=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new kn(this)}x(ot,J),ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ot.prototype.close=function(){us(this.g)},ot.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var c={};c.__data__=r,r=c}else this.u&&(c={},c.__data__=An(r),r=c);a.i.push(new Zh(a.Ya++,r)),a.G==3&&er(a)},ot.prototype.N=function(){this.g.l=null,delete this.j,us(this.g),delete this.g,ot.aa.N.call(this)};function La(r){Qr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){e:{for(const c in a){r=c;break e}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}x(La,Qr);function Ma(){Zr.call(this),this.status=1}x(Ma,Zr);function kn(r){this.g=r}x(kn,xa),kn.prototype.ua=function(){Z(this.g,"a")},kn.prototype.ta=function(r){Z(this.g,new La(r))},kn.prototype.sa=function(r){Z(this.g,new Ma)},kn.prototype.ra=function(){Z(this.g,"b")},ot.prototype.send=ot.prototype.o,ot.prototype.open=ot.prototype.m,ot.prototype.close=ot.prototype.close,ts.NO_ERROR=0,ts.TIMEOUT=8,ts.HTTP_ERROR=6,Yh.COMPLETE="complete",zh.EventType=ti,ti.OPEN="a",ti.CLOSE="b",ti.ERROR="c",ti.MESSAGE="d",J.prototype.listen=J.prototype.K,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha}).apply(typeof ur<"u"?ur:typeof self<"u"?self:typeof window<"u"?window:{});const dc="@firebase/firestore";/**
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
 */class Ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");/**
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
 */let Ki="10.13.2";/**
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
 */const Yn=new Do("@firebase/firestore");function nt(t,...e){if(Yn.logLevel<=de.DEBUG){const n=e.map(Ko);Yn.debug(`Firestore (${Ki}): ${t}`,...n)}}function Vo(t,...e){if(Yn.logLevel<=de.ERROR){const n=e.map(Ko);Yn.error(`Firestore (${Ki}): ${t}`,...n)}}function xy(t,...e){if(Yn.logLevel<=de.WARN){const n=e.map(Ko);Yn.warn(`Firestore (${Ki}): ${t}`,...n)}}function Ko(t){if(typeof t=="string")return t;try{/**
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
 */function Wo(t="Unexpected state"){const e=`FIRESTORE (${Ki}) INTERNAL ASSERTION FAILED: `+t;throw Vo(e),new Error(e)}function so(t,e){t||Wo()}/**
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
 */const je={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class He extends jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Hh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ly{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ue.UNAUTHENTICATED))}shutdown(){}}class My{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Uy{constructor(e){this.t=e,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=h=>this.i!==i?(i=this.i,n(h)):Promise.resolve();let o=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new zn,e.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{nt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(nt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new zn)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(nt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(so(typeof i.accessToken=="string"),new Hh(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return so(e===null||typeof e=="string"),new Ue(e)}}class Fy{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class jy{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new Fy(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Hy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class By{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=o=>{o.error!=null&&nt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,nt("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const s=o=>{nt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):nt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(so(typeof n.token=="string"),this.R=n.token,new Hy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function $y(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class Vy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=$y(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<n&&(i+=e.charAt(s[o]%e.length))}return i}}function Bh(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ky{constructor(e,n,i,s,o,l,u,h,d){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d}}class Lr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Lr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var pc,ae;(ae=pc||(pc={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new jh([4294967295,4294967295],0);function Ls(){return typeof document<"u"?document:null}/**
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
 */class Wy{constructor(e,n,i=1e3,s=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=i,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-i);s>0&&nt("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class zo{constructor(e,n,i,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,o){const l=Date.now()+i,u=new zo(e,n,l,s,o);return u.start(i),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new He(je.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zy(t,e){if(Vo("AsyncQueue",`${e}: ${t}`),Bh(t))return new He(je.UNAVAILABLE,`${e}: ${t}`);throw t}var gc,mc;(mc=gc||(gc={})).ea="default",mc.Cache="cache";/**
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
 */class Gy{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Ue.UNAUTHENTICATED,this.clientId=Vy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async o=>{nt("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(nt("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new He(je.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=zy(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
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
 */function $h(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const vc=new Map;function qy(t,e,n,i){if(e===!0&&i===!0)throw new He(je.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jy(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Wo()}function Xy(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new He(je.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jy(t);throw new He(je.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class _c{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new He(je.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new He(je.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$h((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new He(je.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new He(je.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new He(je.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vh{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _c({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new He(je.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new He(je.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _c(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Ly;switch(i.type){case"firstParty":return new jy(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new He(je.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=vc.get(n);i&&(nt("ComponentProvider","Removing Datastore"),vc.delete(n),i.terminate())}(this),Promise.resolve()}}function Yy(t,e,n,i={}){var s;const o=(t=Xy(t,Vh))._getSettings(),l=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&xy("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),i.mockUserToken){let u,h;if(typeof i.mockUserToken=="string")u=i.mockUserToken,h=Ue.MOCK_USER;else{u=sm(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=i.mockUserToken.sub||i.mockUserToken.user_id;if(!d)throw new He(je.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Ue(d)}t._authCredentials=new My(new Hh(u,h))}}/**
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
 */class Qy{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Wy(this,"async_queue_retry"),this.Eu=()=>{const n=Ls();n&&nt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=Ls();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=Ls();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new zn;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!Bh(e))throw e;nt("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(i=>{this.hu=i,this.Pu=!1;const s=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(i);throw Vo("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Pu=!1,i))));return this.au=n,n}enqueueAfterDelay(e,n,i){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=zo.createAndSchedule(this,e,n,i,o=>this.Vu(o));return this.lu.push(s),s}du(){this.hu&&Wo()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class Zy extends Vh{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=function(){return new Qy}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||t0(this),this._firestoreClient.terminate()}}function e0(t,e){const n=typeof t=="object"?t:nh(),i=typeof t=="string"?t:"(default)",s=Lo(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=im("firestore");o&&Yy(s,...o)}return s}function t0(t){var e,n,i;const s=t._freezeSettings(),o=function(u,h,d,g){return new Ky(u,h,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,$h(g.experimentalLongPollingOptions),g.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Gy(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}(function(e,n=!0){(function(s){Ki=s})(Zn),Xn(new wn("firestore",(i,{instanceIdentifier:s,options:o})=>{const l=i.getProvider("app").getImmediate(),u=new Zy(new Uy(i.getProvider("auth-internal")),new By(i.getProvider("app-check-internal")),function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new He(je.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lr(d.options.projectId,g)}(l,s),l);return o=Object.assign({useFetchStreams:n},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),rn(dc,"4.7.2",e),rn(dc,"4.7.2","esm2017")})();const n0={apiKey:"AIzaSyAfGoqOAC36GNyNEJP9hSaDsMGtzr-LIIQ",authDomain:"jstmeet-firebase.firebaseapp.com",projectId:"jstmeet-firebase",storageBucket:"jstmeet-firebase.appspot.com",messagingSenderId:"926947290409",appId:"1:926947290409:web:d1d978db0ab19dc5a8db38"},Kh=th(n0),Wh=Ny(Kh);e0(Kh);const i0={data(){return{email:"",password:"",errorMessage:""}},methods:{async registerUser(){try{await y_(Wh,this.email,this.password),alert("アカウントが作成されました！ログインしてください。"),this.$router.push("/login")}catch(t){console.error(t),this.errorMessage=t.message}}}},r0={class:"flex flex-col h-screen"},s0={class:"flex justify-between p-4 border-b items-center"},o0={class:"py-1 px-4 border-2 border-green-800 rounded"},a0={class:"bg-gray-100 flex-auto"},l0={class:"flex justify-center mt-16"},c0={class:"w-2/5 border bg-white"},u0={class:"my-12 text-center"},h0={class:"mb-2"},f0={class:"mb-2"},d0={key:0,class:"error"};function p0(t,e,n,i,s,o){const l=lu("router-link");return Oi(),Tr("div",r0,[Te("header",s0,[e[4]||(e[4]=Te("h1",{class:"font-semibold text-xl leading-tight"},"Slack Clone",-1)),Te("button",o0,[ke(l,{to:"/signin"},{default:So(()=>e[3]||(e[3]=[bi("サインイン")])),_:1})])]),Te("div",a0,[Te("div",l0,[Te("div",c0,[Te("div",u0,[e[6]||(e[6]=Te("h2",{class:"text-4xl font-bold"},"ユーザの登録",-1)),e[7]||(e[7]=Te("p",{class:"my-4"},[Te("span",{class:"font-semibold"},"メールアドレス"),bi("と "),Te("span",{class:"font-semibold"},"パスワード"),bi("を入力してください。 ")],-1)),Te("form",{onSubmit:e[2]||(e[2]=Fp((...u)=>o.registerUser&&o.registerUser(...u),["prevent"]))},[Te("div",h0,[Wa(Te("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=u=>s.email=u),placeholder:"you@example.com",class:"text-xl w-3/5 p-3 border rounded"},null,512),[[vl,s.email]])]),Te("div",f0,[Wa(Te("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=u=>s.password=u),class:"text-xl w-3/5 p-3 border rounded",placeholder:"パスワード"},null,512),[[vl,s.password]])]),e[5]||(e[5]=Te("button",{type:"submit",class:"text-xl w-3/5 bg-green-800 text-white py-2 rounded"},"ユーザの登録",-1)),s.errorMessage?(Oi(),Tr("p",d0,Rc(s.errorMessage),1)):rp("",!0)],32)])])])])])}const yc=zu(i0,[["render",p0]]),g0={},m0={class:"flex flex-col h-screen"},v0={class:"flex justify-between p-4 border-b items-center"},_0={class:"py-1 px-4 border-2 border-green-800 rounded"};function y0(t,e){const n=lu("router-link");return Oi(),Tr("div",m0,[Te("header",v0,[e[1]||(e[1]=Te("h1",{class:"font-semibold text-xl leading-tight"},"Slack Clone",-1)),Te("button",_0,[ke(n,{to:"/register"},{default:So(()=>e[0]||(e[0]=[bi("Slack Cloneをはじめる")])),_:1})])]),e[2]||(e[2]=ip('<div class="bg-gray-100 flex-auto"><div class="flex justify-center mt-16"><div class="w-2/5 border bg-white"><div class="my-12 text-center"><h2 class="text-4xl font-bold">サインイン</h2><p class="my-4"><span class="font-semibold">メールアドレス</span>と <span class="font-semibold">パスワード</span>を入力してください。 </p><form><div class="mb-2"><input type="email" placeholder="you@example.com" class="text-xl w-3/5 p-3 border rounded"></div><div class="mb-2"><input type="password" class="text-xl w-3/5 p-3 border rounded" placeholder="パスワード"></div><button type="submit" class="text-xl w-3/5 bg-green-800 text-white py-2 rounded">サインイン</button></form></div></div></div></div>',1))])}const E0=zu(g0,[["render",y0]]),w0=zg({history:Ig("/vue"),routes:[{path:"/",name:"home",component:yc},{path:"/register",name:"register",component:yc},{path:"/signin",name:"signIn",component:E0}]});Wh.onAuthStateChanged(t=>{t?console.log("ユーザーがログインしています:",t):console.log("ユーザーがログアウトしています")});const Go=Bp(Jg);Go.use(zp());Go.use(w0);Go.mount("#app");
