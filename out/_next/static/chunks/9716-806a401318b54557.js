(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9716],{56416:function(e,t,r){"use strict";let o;r.r(t),r.d(t,{initRender:function(){return r2}});let n={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return i(this.context.count)},getNextContextId(){return i(this.context.count++)}};function i(e){let t=String(e),r=t.length-1;return n.context.id+(r?String.fromCharCode(96+r):"")+t}let l=Symbol("solid-proxy"),a="function"==typeof Proxy,s=Symbol("solid-track");Symbol("solid-dev-component");let c={equals:(e,t)=>e===t},u=A,d={owned:null,cleanups:null,context:null,owner:null};var p=null;let f=null,h=null,g=null,m=null,b=0;function w(e,t){let r=h,o=p,n=0===e.length,i=void 0===t?o:t,l=n?d:{owned:null,cleanups:null,context:i?i.context:null,owner:i};p=l,h=null;try{return N(n?e:()=>e(()=>E(()=>H(l))),!0)}finally{h=r,p=o}}function v(e,t){let r={value:e,observers:null,observerSlots:null,comparator:(t=t?Object.assign({},c,t):c).equals||void 0};return[S.bind(r),e=>("function"==typeof e&&(e=e(f&&f.running&&f.sources.has(r)?r.tValue:r.value)),L(r,e))]}function y(e,t,r){T(O(e,t,!1,1))}function x(e,t,r){u=j;let n=O(e,t,!1,1),i=o&&_(o);i&&(n.suspense=i),r&&r.render||(n.user=!0),m?m.push(n):T(n)}function C(e,t,r){r=r?Object.assign({},c,r):c;let o=O(e,t,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=r.equals||void 0,T(o),S.bind(o)}function E(e){if(null===h)return e();let t=h;h=null;try{return e()}finally{h=t}}function $(e){return null===p||(null===p.cleanups?p.cleanups=[e]:p.cleanups.push(e)),e}let[k,P]=v(!1);function _(e){let t;return p&&p.context&&void 0!==(t=p.context[e.id])?t:e.defaultValue}function S(){let e=f&&f.running;if(this.sources&&(e?this.tState:this.state)){if((e?this.tState:this.state)===1)T(this);else{let e=g;g=null,N(()=>M(this),!1),g=e}}if(h){let e=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(e)):(h.sources=[this],h.sourceSlots=[e]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return e&&f.sources.has(this)?this.tValue:this.value}function L(e,t,r){let o=f&&f.running&&f.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(o,t)){if(f){let o=f.running;(o||!r&&f.sources.has(e))&&(f.sources.add(e),e.tValue=t),o||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&N(()=>{for(let t=0;t<e.observers.length;t+=1){let r=e.observers[t],o=f&&f.running;o&&f.disposed.has(r)||((o?r.tState:r.state)||(r.pure?g.push(r):m.push(r),r.observers&&function e(t){let r=f&&f.running;for(let o=0;o<t.observers.length;o+=1){let n=t.observers[o];(r?n.tState:n.state)||(r?n.tState=2:n.state=2,n.pure?g.push(n):m.push(n),n.observers&&e(n))}}(r)),o?r.tState=1:r.state=1)}if(g.length>1e6)throw g=[],Error()},!1)}return t}function T(e){if(!e.fn)return;H(e);let t=b;I(e,f&&f.running&&f.sources.has(e)?e.tValue:e.value,t),f&&!f.running&&f.sources.has(e)&&queueMicrotask(()=>{N(()=>{f&&(f.running=!0),h=p=e,I(e,e.tValue,t),h=p=null},!1)})}function I(e,t,r){let o;let n=p,i=h;h=p=e;try{o=e.fn(t)}catch(t){return e.pure&&(f&&f.running?(e.tState=1,e.tOwned&&e.tOwned.forEach(H),e.tOwned=void 0):(e.state=1,e.owned&&e.owned.forEach(H),e.owned=null)),e.updatedAt=r+1,D(t)}finally{h=i,p=n}(!e.updatedAt||e.updatedAt<=r)&&(null!=e.updatedAt&&"observers"in e?L(e,o,!0):f&&f.running&&e.pure?(f.sources.add(e),e.tValue=o):e.value=o,e.updatedAt=r)}function O(e,t,r,o=1,n){let i={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:p?p.context:null,pure:r};return f&&f.running&&(i.state=0,i.tState=o),null===p||p!==d&&(f&&f.running&&p.pure?p.tOwned?p.tOwned.push(i):p.tOwned=[i]:p.owned?p.owned.push(i):p.owned=[i]),i}function R(e){let t=f&&f.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===2)return M(e);if(e.suspense&&E(e.suspense.inFallback))return e.suspense.effects.push(e);let r=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<b);){if(t&&f.disposed.has(e))return;(t?e.tState:e.state)&&r.push(e)}for(let o=r.length-1;o>=0;o--){if(e=r[o],t){let t=e,n=r[o+1];for(;(t=t.owner)&&t!==n;)if(f.disposed.has(t))return}if((t?e.tState:e.state)===1)T(e);else if((t?e.tState:e.state)===2){let t=g;g=null,N(()=>M(e,r[0]),!1),g=t}}}function N(e,t){if(g)return e();let r=!1;t||(g=[]),m?r=!0:m=[],b++;try{let t=e();return function(e){let t;if(g&&(A(g),g=null),e)return;if(f){if(f.promises.size||f.queue.size){if(f.running){f.running=!1,f.effects.push.apply(f.effects,m),m=null,P(!0);return}}else{let e=f.sources,r=f.disposed;for(let e of(m.push.apply(m,f.effects),t=f.resolve,m))"tState"in e&&(e.state=e.tState),delete e.tState;f=null,N(()=>{for(let e of r)H(e);for(let t of e){if(t.value=t.tValue,t.owned)for(let e=0,r=t.owned.length;e<r;e++)H(t.owned[e]);t.tOwned&&(t.owned=t.tOwned),delete t.tValue,delete t.tOwned,t.tState=0}P(!1)},!1)}}let r=m;m=null,r.length&&N(()=>u(r),!1),t&&t()}(r),t}catch(e){r||(m=null),g=null,D(e)}}function A(e){for(let t=0;t<e.length;t++)R(e[t])}function j(e){let t,r=0;for(t=0;t<e.length;t++){let o=e[t];o.user?e[r++]=o:R(o)}if(n.context){if(n.count){n.effects||(n.effects=[]),n.effects.push(...e.slice(0,r));return}n.context=void 0}for(n.effects&&(n.done||!n.count)&&(e=[...n.effects,...e],r+=n.effects.length,delete n.effects),t=0;t<r;t++)R(e[t])}function M(e,t){let r=f&&f.running;r?e.tState=0:e.state=0;for(let o=0;o<e.sources.length;o+=1){let n=e.sources[o];if(n.sources){let e=r?n.tState:n.state;1===e?n!==t&&(!n.updatedAt||n.updatedAt<b)&&R(n):2===e&&M(n,t)}}}function H(e){let t;if(e.sources)for(;e.sources.length;){let t=e.sources.pop(),r=e.sourceSlots.pop(),o=t.observers;if(o&&o.length){let e=o.pop(),n=t.observerSlots.pop();r<o.length&&(e.sourceSlots[n]=r,o[r]=e,t.observerSlots[r]=n)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)H(e.tOwned[t]);delete e.tOwned}if(f&&f.running&&e.pure)!function e(t,r){if(r||(t.tState=0,f.disposed.add(t)),t.owned)for(let r=0;r<t.owned.length;r++)e(t.owned[r])}(e,!0);else if(e.owned){for(t=e.owned.length-1;t>=0;t--)H(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}f&&f.running?e.tState=0:e.state=0}function D(e,t=p){throw e instanceof Error?e:Error("string"==typeof e?e:"Unknown error",{cause:e})}let V=Symbol("fallback");function B(e){for(let t=0;t<e.length;t++)e[t]()}function F(e,t){return E(()=>e(t||{}))}function z(){return!0}let U={get:(e,t,r)=>t===l?r:e.get(t),has:(e,t)=>t===l||e.has(t),set:z,deleteProperty:z,getOwnPropertyDescriptor:(e,t)=>({configurable:!0,enumerable:!0,get:()=>e.get(t),set:z,deleteProperty:z}),ownKeys:e=>e.keys()};function G(e){return(e="function"==typeof e?e():e)?e:{}}function X(){for(let e=0,t=this.length;e<t;++e){let t=this[e]();if(void 0!==t)return t}}let W=e=>`Stale read from <${e}>.`;function Y(e){return C(function(e,t,r={}){let o=[],n=[],i=[],l=0,a=t.length>1?[]:null;return $(()=>B(i)),()=>{let c=e()||[],u=c.length,d,p;return c[s],E(()=>{let e,t,s,h,g,m,b,v,y;if(0===u)0!==l&&(B(i),i=[],o=[],n=[],l=0,a&&(a=[])),r.fallback&&(o=[V],n[0]=w(e=>(i[0]=e,r.fallback())),l=1);else if(0===l){for(p=0,n=Array(u);p<u;p++)o[p]=c[p],n[p]=w(f);l=u}else{for(s=Array(u),h=Array(u),a&&(g=Array(u)),m=0,b=Math.min(l,u);m<b&&o[m]===c[m];m++);for(b=l-1,v=u-1;b>=m&&v>=m&&o[b]===c[v];b--,v--)s[v]=n[b],h[v]=i[b],a&&(g[v]=a[b]);for(e=new Map,t=Array(v+1),p=v;p>=m;p--)y=c[p],d=e.get(y),t[p]=void 0===d?-1:d,e.set(y,p);for(d=m;d<=b;d++)y=o[d],void 0!==(p=e.get(y))&&-1!==p?(s[p]=n[d],h[p]=i[d],a&&(g[p]=a[d]),p=t[p],e.set(y,p)):i[d]();for(p=m;p<u;p++)p in s?(n[p]=s[p],i[p]=h[p],a&&(a[p]=g[p],a[p](p))):n[p]=w(f);n=n.slice(0,l=u),o=c.slice(0)}return n});function f(e){if(i[p]=e,a){let[e,r]=v(p);return a[p]=r,t(c[p],e)}return t(c[p])}}}(()=>e.each,e.children,"fallback"in e&&{fallback:()=>e.fallback}||void 0))}function Z(e){let t=e.keyed,r=C(()=>e.when,void 0,{equals:(e,r)=>t?e===r:!e==!r});return C(()=>{let o=r();if(o){let n=e.children;return"function"==typeof n&&n.length>0?E(()=>n(t?o:()=>{if(!E(r))throw W("Show");return e.when})):n}return e.fallback},void 0,void 0)}Object.create(null),Object.create(null);let q="_$DX_DELEGATE";function J(e,t,r){let o;let n=()=>{let t=document.createElement("template");return t.innerHTML=e,r?t.content.firstChild.firstChild:t.content.firstChild},i=t?()=>E(()=>document.importNode(o||(o=n()),!0)):()=>(o||(o=n())).cloneNode(!0);return i.cloneNode=i,i}function K(e,t=window.document){let r=t[q]||(t[q]=new Set);for(let o=0,n=e.length;o<n;o++){let n=e[o];r.has(n)||(r.add(n),t.addEventListener(n,ei))}}function Q(e,t,r){en(e)||(null==r?e.removeAttribute(t):e.setAttribute(t,r))}function ee(e,t){en(e)||(null==t?e.removeAttribute("class"):e.className=t)}function et(e,t,r){let o,n;if(!t)return r?Q(e,"style"):t;let i=e.style;if("string"==typeof t)return i.cssText=t;for(n in"string"==typeof r&&(i.cssText=r=void 0),r||(r={}),t||(t={}),r)null==t[n]&&i.removeProperty(n),delete r[n];for(n in t)(o=t[n])!==r[n]&&(i.setProperty(n,o),r[n]=o);return r}function er(e,t,r){return E(()=>e(t,r))}function eo(e,t,r,o){if(void 0===r||o||(o=[]),"function"!=typeof t)return el(e,t,o,r);y(o=>el(e,t(),o,r),o)}function en(e){return!!n.context&&!n.done&&(!e||e.isConnected)}function ei(e){if(n.registry&&n.events&&n.events.find(([t,r])=>r===e))return;let t=e.target,r=`$$${e.type}`,o=e.target,i=e.currentTarget,l=t=>Object.defineProperty(e,"target",{configurable:!0,value:t}),a=()=>{let o=t[r];if(o&&!t.disabled){let n=t[`${r}Data`];if(void 0!==n?o.call(t,n,e):o.call(t,e),e.cancelBubble)return}return t.host&&"string"!=typeof t.host&&!t.host._$host&&t.contains(e.target)&&l(t.host),!0},s=()=>{for(;a()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>t||document}),n.registry&&!n.done&&(n.done=_$HY.done=!0),e.composedPath){let r=e.composedPath();l(r[0]);for(let e=0;e<r.length-2&&(t=r[e],a());e++){if(t._$host){t=t._$host,s();break}if(t.parentNode===i)break}}else s();l(o)}function el(e,t,r,o,n){let i=en(e);if(i){r||(r=[...e.childNodes]);let t=[];for(let e=0;e<r.length;e++){let o=r[e];8===o.nodeType&&"!$"===o.data.slice(0,2)?o.remove():t.push(o)}r=t}for(;"function"==typeof r;)r=r();if(t===r)return r;let l=typeof t,a=void 0!==o;if(e=a&&r[0]&&r[0].parentNode||e,"string"===l||"number"===l){if(i||"number"===l&&(t=t.toString())===r)return r;if(a){let n=r[0];n&&3===n.nodeType?n.data!==t&&(n.data=t):n=document.createTextNode(t),r=es(e,r,o,n)}else r=""!==r&&"string"==typeof r?e.firstChild.data=t:e.textContent=t}else if(null==t||"boolean"===l){if(i)return r;r=es(e,r,o)}else if("function"===l)return y(()=>{let n=t();for(;"function"==typeof n;)n=n();r=el(e,n,r,o)}),()=>r;else if(Array.isArray(t)){let l=[],s=r&&Array.isArray(r);if(function e(t,r,o,n){let i=!1;for(let l=0,a=r.length;l<a;l++){let a=r[l],s=o&&o[t.length],c;if(null==a||!0===a||!1===a);else if("object"==(c=typeof a)&&a.nodeType)t.push(a);else if(Array.isArray(a))i=e(t,a,s)||i;else if("function"===c){if(n){for(;"function"==typeof a;)a=a();i=e(t,Array.isArray(a)?a:[a],Array.isArray(s)?s:[s])||i}else t.push(a),i=!0}else{let e=String(a);s&&3===s.nodeType&&s.data===e?t.push(s):t.push(document.createTextNode(e))}}return i}(l,t,r,n))return y(()=>r=el(e,l,r,o,!0)),()=>r;if(i){if(!l.length)return r;if(void 0===o)return r=[...e.childNodes];let t=l[0];if(t.parentNode!==e)return r;let n=[t];for(;(t=t.nextSibling)!==o;)n.push(t);return r=n}if(0===l.length){if(r=es(e,r,o),a)return r}else s?0===r.length?ea(e,l,o):function(e,t,r){let o=r.length,n=t.length,i=o,l=0,a=0,s=t[n-1].nextSibling,c=null;for(;l<n||a<i;){if(t[l]===r[a]){l++,a++;continue}for(;t[n-1]===r[i-1];)n--,i--;if(n===l){let t=i<o?a?r[a-1].nextSibling:r[i-a]:s;for(;a<i;)e.insertBefore(r[a++],t)}else if(i===a)for(;l<n;)c&&c.has(t[l])||t[l].remove(),l++;else if(t[l]===r[i-1]&&r[a]===t[n-1]){let o=t[--n].nextSibling;e.insertBefore(r[a++],t[l++].nextSibling),e.insertBefore(r[--i],o),t[n]=r[i]}else{if(!c){c=new Map;let e=a;for(;e<i;)c.set(r[e],e++)}let o=c.get(t[l]);if(null!=o){if(a<o&&o<i){let s=l,u=1,d;for(;++s<n&&s<i&&null!=(d=c.get(t[s]))&&d===o+u;)u++;if(u>o-a){let n=t[l];for(;a<o;)e.insertBefore(r[a++],n)}else e.replaceChild(r[a++],t[l++])}else l++}else t[l++].remove()}}}(e,r,l):(r&&es(e),ea(e,l));r=l}else if(t.nodeType){if(i&&t.parentNode)return r=a?[t]:t;if(Array.isArray(r)){if(a)return r=es(e,r,o,t);es(e,r,null,t)}else null!=r&&""!==r&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);r=t}return r}function ea(e,t,r=null){for(let o=0,n=t.length;o<n;o++)e.insertBefore(t[o],r)}function es(e,t,r,o){if(void 0===r)return e.textContent="";let n=o||document.createTextNode("");if(t.length){let o=!1;for(let i=t.length-1;i>=0;i--){let l=t[i];if(n!==l){let t=l.parentNode===e;o||i?t&&l.remove():t?e.replaceChild(n,l):e.insertBefore(n,r)}else o=!0}}else e.insertBefore(n,r);return[n]}Symbol();var ec=r(17318);function eu(){let e=(document.documentElement.dataset.locatorMouseModifiers||"alt").split("+"),t={};return e.forEach(e=>{t[e]=!0},{}),t}function ed(e,t=!1){let r=eu();return t?!!r.alt==e.altKey&&!!r.meta==e.metaKey&&!!r.shift==e.shiftKey:!!r.alt==e.altKey&&!!r.ctrl==e.ctrlKey&&!!r.meta==e.metaKey&&!!r.shift==e.shiftKey}function ep(e){let t=e;for(;t;){if(t._debugSource)return{fiber:t,source:t._debugSource};t=t._debugOwner||null}return null}function ef(e,t){let r=window.__REACT_DEVTOOLS_GLOBAL_HOOK__?.renderers,o=r?.values();if(o){for(let r of Array.from(o))if(r.findFiberByHostInstance){let o=r.findFiberByHostInstance(e);if(o){if(t)return ep(o)?.fiber||null;return o}}}return null}function eh(e){return e?"string"==typeof e.elementType?e.elementType:e.elementType?e.elementType.name?e.elementType.name:e.elementType.displayName?e.elementType.displayName:e.elementType.type?.name?e.elementType.type.name:e.elementType._payload?._result?.name?e.elementType._payload._result.name:"Anonymous":"Anonymous":"Not found"}function eg(e,t){return{label:eh(e),link:t?{filePath:t.fileName,projectPath:"",line:t.lineNumber,column:t.columnNumber||0}:null}}function em(e){let t=[],r=e.child;for(;r;)t.push(r),r=r.sibling;return t}function eb(e){return null!=e}function ew(e){return e.stateNode&&e.stateNode.getBoundingClientRect?e.stateNode.getBoundingClientRect():null}function ev(e,t){let r=Math.min(e.x,t.x),o=Math.min(e.y,t.y);return{x:r,y:o,width:Math.max(e.x+e.width,t.x+t.width)-r,height:Math.max(e.y+e.height,t.y+t.height)-o}}function ey(e){return!!e._debugOwner?.elementType?.styledComponentId}function ex(e){let t=e,r=new Set,o=t,n=t.uniqueId;r.add(o.uniqueId);let i=2;for(;o&&i>0;)i--,(o=o.getParent())&&(r.add(o.uniqueId),t=o);return{expandedIds:r,highlightedId:n,root:t,originalNode:e}}let eC=new WeakMap,eE=0;class e${type="element";constructor(e){this.element=e,this.name=e.nodeName.toLowerCase(),this.uniqueId=String((eC.has(e)||(eE++,eC.set(e,eE)),eC.get(e)))}getBox(){return this.element.getBoundingClientRect()}getElement(){return this.element}getChildren(){return Array.from(this.element.children).map(e=>e instanceof HTMLElement?new this.constructor(e):null).filter(eb)}getParent(){return this.element.parentElement?new this.constructor(this.element.parentElement):null}getSource(){throw Error("Method not implemented.")}getComponent(){throw Error("Method not implemented.")}}class ek extends e${getSource(){let e=ef(this.element,!1);return e&&e._debugSource?{fileName:e._debugSource.fileName,lineNumber:e._debugSource.lineNumber,columnNumber:e._debugSource.columnNumber}:null}getComponent(){let e=ef(this.element,!1),t=e?._debugOwner;if(t){let e=eg(t,ep(t)?.source);return{label:e.label,callLink:e.link&&{fileName:e.link.filePath,lineNumber:e.link.line,columnNumber:e.link.column,projectPath:e.link.projectPath}||void 0}}return null}}function eP(e){let t=eg(e,ep(e)?.source);return{title:t.label,link:t.link}}var e_={getElementInfo:function(e){let t=[],r=ef(e,!1);if(r){let{component:o,componentBox:n,parentElements:i}=function(e){let t=[],r=e.stateNode;if(!r||!(r instanceof HTMLElement))throw Error("This functions works only for Fibres with HTMLElement stateNode");let o=r.getBoundingClientRect(),n=ey(e)&&e._debugOwner?e._debugOwner:e;for(;n._debugOwner||n.return;){let e=(n=n._debugOwner||n.return).stateNode;if(!e||!(e instanceof HTMLElement))return{component:n,parentElements:t,componentBox:function e(t,r=0){let o;return em(t).forEach(t=>{let n=ew(t);!n&&r<6&&(n=e(t,r+1)||null),!n||n.width<=0||n.height<=0||(o=o?ev(o,n):n)}),o}(n)||o};let r=eh(n);o=ev(o,e.getBoundingClientRect()),t.push({box:e.getBoundingClientRect(),label:r,link:null})}throw Error("Could not find root component")}(r);(function(e){let t=[e],r=e;for(;r.return&&!((r=r.return).stateNode&&r.stateNode instanceof HTMLElement)&&!(em(r).length>1);)t.push(r);return t})(o).forEach(e=>{let r=ep(e);if(r){let e=eg(r.fiber,r.source);t.push(e)}});let l=eg(r,ep(r)?.source);return ey(r)&&(l.label=`${l.label} (styled)`),{thisElement:{box:ew(r)||e.getBoundingClientRect(),...l},htmlElement:e,parentElements:i,componentBox:n,componentsLabels:function(e){let t={};return e.map(e=>{let r=JSON.stringify(e);return t[r]?null:(t[r]=!0,e)}).filter(eb)}(t)}}return null},getTree:function(e){return ex(new ek(e))},getParentsPaths:function(e){let t=ef(e,!1);if(t){let e=[],r=t;for(e.push(eP(r));r._debugOwner;)e.push(eP(r=r._debugOwner));return e}return[]}};function eS(e){let[t,r]=e.split("::");if(!t||!r)throw Error("locatorjsId is malformed");return[t,r]}function eL(e,t){if(e.dataset.locatorjsId){let[,r]=eS(e.dataset.locatorjsId),o=t.expressions[Number(r)];if(o)return o}return null}function eT(e){let t=e.closest("[data-locatorjs-id]");if(t&&t instanceof HTMLElement&&t.dataset&&(t.dataset.locatorjsId||t.dataset.locatorjsStyled)){var r;let e;let o=t.dataset.locatorjsId,n=t.dataset.locatorjsStyled;if(!o)return null;let[i]=eS(o),[l,a]=n?eS(n):[null,null],s=window.__LOCATOR_DATA__;if(!s)return null;let c=s[i];if(!c)return null;let u=l&&s[l],d=eL(t,c);if(!d)return null;let p=u&&u.styledDefinitions[Number(a)];p&&(u.filePath,u.projectPath,p.loc?.start.column,p.loc?.start.line);let f=null!==d.wrappingComponentId?c.components[Number(d.wrappingComponentId)]:null;return{thisElement:{box:t.getBoundingClientRect(),label:d.name,link:{filePath:c.filePath,projectPath:c.projectPath,column:(d.loc.start.column||0)+1,line:d.loc.start.line||0}},htmlElement:t,parentElements:[],componentBox:(r=Number(d.wrappingComponentId),e=t.getBoundingClientRect(),!function t(o){let n=o.parentNode;if(n&&n instanceof HTMLElement){if(n.dataset.locatorjsId){let[o]=eS(n.dataset.locatorjsId),l=s[o];if(l){let a=eL(n,l);a&&(a.wrappingComponentId===r&&i===o&&(e=ev(e,n.getBoundingClientRect()),t(n)),a.wrappingComponentId)}}else t(n)}}(t),e),componentsLabels:f?[{label:f.name||"component",link:{filePath:c.filePath,projectPath:c.projectPath,column:(f.loc?.start.column||0)+1,line:f.loc?.start.line||0}}]:[]}}return null}class eI extends e${getSource(){let e=this.element.dataset.locatorjsId,t=window.__LOCATOR_DATA__;if(e&&t){let[r]=eS(e),o=t[r];if(o){let e=eL(this.element,o);if(e)return{fileName:o.filePath,projectPath:o.projectPath,columnNumber:(e.loc.start.column||0)+1,lineNumber:e.loc.start.line||0}}}return null}getComponent(){let e=this.element.dataset.locatorjsId,t=window.__LOCATOR_DATA__;if(e&&t){let[r]=eS(e),o=t[r];if(o){let e=eL(this.element,o);if(e&&null!==e.wrappingComponentId){let t=o.components[e.wrappingComponentId];if(t)return{label:t.name||"component",definitionLink:{fileName:o.filePath,projectPath:o.projectPath,columnNumber:(t.loc?.start.column||0)+1,lineNumber:t.loc?.start.line||0}}}}}return null}}var eO={getElementInfo:eT,getTree:function(e){return ex(new eI(e))},getParentsPaths:function(e){let t=[],r=e,o=null;do{if(r){let e=eT(r),n=JSON.stringify(e?.componentsLabels);if(e&&n!==o){o=n;let r=e.thisElement.link,i=e.thisElement.label;r&&t.push({title:i,link:r})}}r=r.parentElement}while(r);return t}};class eR extends e${getSource(){let e=this.element;if(e.__svelte_meta){let{loc:t}=e.__svelte_meta;return{fileName:t.file,lineNumber:t.line+1,columnNumber:t.column+1}}return null}getComponent(){return null}}var eN={getElementInfo:function(e){if(e.__svelte_meta){let{loc:t}=e.__svelte_meta;return{thisElement:{box:e.getBoundingClientRect(),label:e.nodeName.toLowerCase(),link:{column:t.column+1,line:t.line+1,filePath:t.file,projectPath:""}},htmlElement:e,parentElements:[],componentBox:e.getBoundingClientRect(),componentsLabels:[]}}return null},getTree:function(e){return ex(new eR(e))},getParentsPaths:function(e){let t=[],r=e,o=1e4;do{if(r?.__svelte_meta){let{loc:e}=r.__svelte_meta;e.file!==t[t.length-1]?.link?.filePath&&t.push({title:r.nodeName.toLowerCase(),link:{column:e.column+1,line:e.line+1,filePath:e.file,projectPath:""}})}if(r=r.parentElement,--o<0)break}while(r);return t}};function eA(e){let t=e.__vueParentComponent;if(t){if(!t.type)return null;let r=function e(t){let r=null;return t?.subTree?.children&&t?.subTree?.children instanceof Array&&t?.subTree?.children.forEach(t=>{let o=t.el instanceof HTMLElement?t.el.getBoundingClientRect():t.component?e(t.component):null;!o||o.width<=0||o.height<=0||(r=r?ev(r,o):o)}),r}(t),{__file:o,__name:n}=t.type;if(o&&n)return{thisElement:{box:e.getBoundingClientRect(),label:e.nodeName.toLowerCase(),link:{column:1,line:1,filePath:o,projectPath:""}},htmlElement:e,parentElements:[],componentBox:r||e.getBoundingClientRect(),componentsLabels:[{label:n,link:{column:1,line:1,filePath:o,projectPath:""}}]}}return null}class ej extends e${getSource(){let e=this.element.__vueParentComponent;if(e&&e.type){let{__file:t}=e.type;if(t)return{fileName:t,lineNumber:1,columnNumber:1}}return null}getComponent(){return null}}var eM={getElementInfo:eA,getTree:function(e){return ex(new ej(e))},getParentsPaths:function(e){let t=[],r=e,o=null;do{if(r){let e=eA(r),n=JSON.stringify(e?.componentsLabels);if(e&&n!==o){o=n;let r=e.thisElement.link,i=e.thisElement.label;r&&t.push({title:i,link:r})}}r=r.parentElement}while(r);return t}};function eH(e,t){return"react"===t?e_.getElementInfo(e):"svelte"===t?eN.getElementInfo(e):"jsx"===t?eO.getElementInfo(e):"vue"===t?eM.getElementInfo(e):eO.getElementInfo(e)||e_.getElementInfo(e)||eN.getElementInfo(e)||eM.getElementInfo(e)}var eD=r(94177),eV=r(18078);function eB(e,t){window.open(e,t.getOptions().hrefTarget)}function eF(e,t,r){let o=(0,eV.DF)(e,t,r);window.open(o,r.getOptions().hrefTarget||eD._o)}function ez(e,t,r){return eB((0,eV.mx)(e,t,r),r)}let eU=function(e,t){let r=Symbol("context");return{id:r,Provider:function(e){let t;return y(()=>t=E(()=>(p.context={...p.context,[r]:e.value},function(e){let t=C(e),r=C(()=>(function e(t){if("function"==typeof t&&!t.length)return e(t());if(Array.isArray(t)){let r=[];for(let o=0;o<t.length;o++){let n=e(t[o]);Array.isArray(n)?r.push.apply(r,n):r.push(n)}return r}return t})(t()));return r.toArray=()=>{let e=r();return Array.isArray(e)?e:null!=e?[e]:[]},r}(()=>e.children))),void 0),t},defaultValue:void 0}}();function eG(e){let t=function(){let[e,t]=v((0,ec.Sh)());function r(e){let r={...(0,ec.Sh)(),...e};(0,ec.Jm)(r),t(r)}return(0,ec.v0)(e=>{t(e)}),window.addEventListener("message",e=>{e.source==window&&e.data.type&&"LOCATOR_EXTENSION_UPDATED_OPTIONS"==e.data.type&&t((0,ec.Sh)())},!1),window.enableLocator=()=>(r({disabled:!1}),"Locator enabled"),{setOptions:r,getOptions:e}}();return F(eU.Provider,{value:t,get children(){return e.children}})}function eX(){let e=_(eU);if(!e)throw Error("Options context is not provided");return e}let eW=J('<div class="border border-purple-500"><div id="locatorjs-labels-section"><div id="locatorjs-labels-wrapper">'),eY=J('<a class="cursor-pointer bg-purple-500 block text-white text-xs font-bold text-center px-1 py-0.5 rounded whitespace-nowrap pointer-events-auto hover:bg-purple-600">'),eZ=J('<div class="cursor-pointer bg-purple-500 block text-white text-xs font-bold text-center px-1 py-0.5 rounded whitespace-nowrap pointer-events-auto hover:bg-purple-600">');function eq(e){let t=eX(),r=()=>e.bbox.height>=window.innerHeight-40,o=()=>e.bbox.y<30&&!r(),n=()=>Math.max(e.bbox.x-eD.tr,0),i=()=>Math.max(e.bbox.y-eD.tr,0),l=()=>e.bbox.y<0?-(e.bbox.y-eD.tr):0,a=()=>e.bbox.x<0?-(e.bbox.x-eD.tr):0,s=()=>Math.min(e.bbox.width-a()+2*eD.tr,window.innerWidth),c=()=>Math.min(e.bbox.height-l()+2*eD.tr,window.innerHeight);return(()=>{let l=eW(),a=l.firstChild,u=a.firstChild;return l.style.setProperty("z-index","1"),l.style.setProperty("position","fixed"),eo(u,F(Y,{get each(){return e.labels},children:r=>{let o=r.link?(0,eV.DF)(r.link,e.targets,t):null,n={"line-height":"18px"};return o?(()=>{let e=eY();return e.$$click=()=>{eB(o,t)},et(e,n),Q(e,"href",o),eo(e,()=>r.label),y(()=>Q(e,"target",t.getOptions().hrefTarget||eD._o)),e})():(()=>{let e=eZ();return et(e,n),eo(e,()=>r.label),e})()}})),y(e=>{let t=n()+"px",d=i()+"px",p=s()+"px",f=c()+"px",h=0===n()||0===i()?"0":"8px",g=n()+s()===window.innerWidth||0===i()?"0":"8px",m=0===n()||i()+c()===window.innerHeight?"0":"8px",b=n()+s()===window.innerWidth||i()+c()===window.innerHeight?"0":"8px",w={position:"absolute",display:"flex","justify-content":"center",bottom:o()?r()?"2px":"-28px":void 0,top:o()?void 0:r()?"2px":"-28px",left:"0px",width:"100%","pointer-events":"auto",cursor:"pointer",...o()?{"border-bottom-left-radius":"100%","border-bottom-right-radius":"100%"}:{"border-top-left-radius":"100%","border-top-right-radius":"100%"}},v=o()?"10px 10px 2px 10px":"2px 10px 10px 10px";return t!==e._v$&&(null!=(e._v$=t)?l.style.setProperty("left",t):l.style.removeProperty("left")),d!==e._v$2&&(null!=(e._v$2=d)?l.style.setProperty("top",d):l.style.removeProperty("top")),p!==e._v$3&&(null!=(e._v$3=p)?l.style.setProperty("width",p):l.style.removeProperty("width")),f!==e._v$4&&(null!=(e._v$4=f)?l.style.setProperty("height",f):l.style.removeProperty("height")),h!==e._v$5&&(null!=(e._v$5=h)?l.style.setProperty("border-top-left-radius",h):l.style.removeProperty("border-top-left-radius")),g!==e._v$6&&(null!=(e._v$6=g)?l.style.setProperty("border-top-right-radius",g):l.style.removeProperty("border-top-right-radius")),m!==e._v$7&&(null!=(e._v$7=m)?l.style.setProperty("border-bottom-left-radius",m):l.style.removeProperty("border-bottom-left-radius")),b!==e._v$8&&(null!=(e._v$8=b)?l.style.setProperty("border-bottom-right-radius",b):l.style.removeProperty("border-bottom-right-radius")),e._v$9=et(a,w,e._v$9),v!==e._v$10&&(null!=(e._v$10=v)?u.style.setProperty("padding",v):u.style.removeProperty("padding")),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),l})()}K(["click"]);let eJ=J('<button class="py-1 px-1 hover:bg-white/30 pointer hover:text-gray-100 rounded">');function eK(e){return(()=>{let t=eJ();return t.$$click=t=>{t.preventDefault(),t.stopPropagation(),e.onClick()},eo(t,()=>e.children),t})()}K(["click"]);let eQ=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-bold</title><path fill="green" d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z">'),e0=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">');function e1(e){let[t,r]=v(!1);return F(eK,{onClick:()=>{r(!0),setTimeout(()=>{r(!1)},2e3),e.onClick()},get children(){return C(()=>!!t())()?(()=>{let e=eQ();return e.style.setProperty("width","16px"),e.style.setProperty("height","16px"),e.style.setProperty("pointer-events","none"),e})():(()=>{let e=e0();return e.style.setProperty("width","16px"),e.style.setProperty("height","16px"),e.style.setProperty("pointer-events","none"),e})()}})}let e2=J('<div class="fixed flex text-xs font-bold items-center justify-center text-blue-500 bg-blue-500/30">'),e3=J('<div class="fixed flex text-xs font-bold items-center justify-center text-orange-500 bg-orange-500/30">'),e4=J('<div class="fixed flex text-xs font-bold items-center justify-center text-green-500 bg-green-500/30">');function e5(e){return[C(()=>Object.entries(e.allBoxes.margin).map(([,e])=>(()=>{let t=e3();return t.style.setProperty("text-shadow","-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff"),y(r=>{let o=e.left+"px",n=e.top+"px",i=e.width+"px",l=e.height+"px";return o!==r._v$5&&(null!=(r._v$5=o)?t.style.setProperty("left",o):t.style.removeProperty("left")),n!==r._v$6&&(null!=(r._v$6=n)?t.style.setProperty("top",n):t.style.removeProperty("top")),i!==r._v$7&&(null!=(r._v$7=i)?t.style.setProperty("width",i):t.style.removeProperty("width")),l!==r._v$8&&(null!=(r._v$8=l)?t.style.setProperty("height",l):t.style.removeProperty("height")),r},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),t})())),C(()=>Object.entries(e.allBoxes.padding).map(([,e])=>(()=>{let t=e4();return t.style.setProperty("text-shadow","-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff"),y(r=>{let o=e.left+"px",n=e.top+"px",i=e.width+"px",l=e.height+"px";return o!==r._v$9&&(null!=(r._v$9=o)?t.style.setProperty("left",o):t.style.removeProperty("left")),n!==r._v$10&&(null!=(r._v$10=n)?t.style.setProperty("top",n):t.style.removeProperty("top")),i!==r._v$11&&(null!=(r._v$11=i)?t.style.setProperty("width",i):t.style.removeProperty("width")),l!==r._v$12&&(null!=(r._v$12=l)?t.style.setProperty("height",l):t.style.removeProperty("height")),r},{_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0}),t})())),(()=>{let t=e2();return t.style.setProperty("text-shadow","-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff"),eo(t,()=>e.allBoxes.innerBox.label),y(r=>{let o=e.allBoxes.innerBox.left+"px",n=e.allBoxes.innerBox.top+"px",i=e.allBoxes.innerBox.width+"px",l=e.allBoxes.innerBox.height+"px";return o!==r._v$&&(null!=(r._v$=o)?t.style.setProperty("left",o):t.style.removeProperty("left")),n!==r._v$2&&(null!=(r._v$2=n)?t.style.setProperty("top",n):t.style.removeProperty("top")),i!==r._v$3&&(null!=(r._v$3=i)?t.style.setProperty("width",i):t.style.removeProperty("width")),l!==r._v$4&&(null!=(r._v$4=l)?t.style.setProperty("height",l):t.style.removeProperty("height")),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),t})()]}let e6=J('<div class="group/tooltip relative block"><div role="tooltip">');function e9(e){let t={bottom:"-bottom-7 left-1/2 -translate-x-1/2 transform",left:"-left-2 top-1/2 -translate-y-1/2 -translate-x-full transform",right:"-right-2 top-1/2 -translate-y-1/2 translate-x-full transform",top:"-top-7 left-1/2 -translate-x-1/2 transform"};return(()=>{let r=e6(),o=r.firstChild;return eo(r,()=>e.children,o),eo(o,()=>e.tooltipText),y(()=>ee(o,"pointer-events-none invisible absolute z-10 whitespace-nowrap rounded bg-gray-700 px-2 py-1 text-center text-xs text-white opacity-0 transition-opacity duration-300 group-hover/tooltip:visible group-hover/tooltip:opacity-100 "+t[e.position||"top"])),r})()}let e8=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>sitemap</title><path fill="currentColor" d="M9,2V8H11V11H5C3.89,11 3,11.89 3,13V16H1V22H7V16H5V13H11V16H9V22H15V16H13V13H19V16H17V22H23V16H21V13C21,11.89 20.11,11 19,11H13V8H15V2H9Z">'),e7=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>format-list-text</title><path fill="currentColor" d="M2 14H8V20H2M16 8H10V10H16M2 10H8V4H2M10 4V6H22V4M10 20H16V18H10M10 16H22V14H10">'),te=J('<div><div class="fixed flex text-xs font-bold items-center justify-center text-sky-500 rounded border border-solid border-sky-500"><div class="absolute bg-black/60 text-white font-bold rounded-md px-1 py-1 flex">');function tt(e){let t;let r=()=>e.element.thisElement.box,o=()=>{let t=e.element.htmlElement,r=e.element.thisElement.box;if(t&&r){let e=window.getComputedStyle(t),o={top:parseFloat(e.marginTop),left:parseFloat(e.marginLeft),right:parseFloat(e.marginRight),bottom:parseFloat(e.marginBottom)},n={top:parseFloat(e.paddingTop),left:parseFloat(e.paddingLeft),right:parseFloat(e.paddingRight),bottom:parseFloat(e.paddingBottom)};return{margin:{top:{top:r.y-o.top,left:r.x,width:r.width,height:o.top,label:tr(o.top)},left:{top:r.y-o.top,left:r.x-o.left,width:o.left,height:r.height+o.top+o.bottom,label:tr(o.left)},right:{top:r.y-o.top,left:r.x+r.width,width:o.right,height:r.height+o.top+o.bottom,label:tr(o.right)},bottom:{top:r.y+r.height,left:r.x,width:r.width,height:o.bottom,label:tr(o.bottom)}},padding:{top:{top:r.y,left:r.x,width:r.width,height:n.top,label:tr(n.top)},left:{top:r.y+n.top,left:r.x,width:n.left,height:r.height-n.top-n.bottom,label:tr(n.left)},right:{top:r.y+n.top,left:r.x+r.width-n.right,width:n.right,height:r.height-n.top-n.bottom,label:tr(n.right)},bottom:{top:r.y+r.height-n.bottom,left:r.x,width:r.width,height:n.bottom,label:tr(n.bottom)}},innerBox:{top:r.y+n.top,left:r.x+n.left,width:r.width-n.left-n.right,height:r.height-n.top-n.bottom,label:""}}}return null};return[(()=>{let n=te(),i=n.firstChild,l=i.firstChild;eo(n,(()=>{let e=C(()=>!!o());return()=>e()&&F(e5,{get allBoxes(){return o()}})})(),i),i.style.setProperty("z-index","2"),i.style.setProperty("text-shadow","-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff"),i.style.setProperty("text-overflow","ellipsis");let a=t;return"function"==typeof a?er(a,l):t=l,eo(l,F(e9,{tooltipText:"Tree view",get children(){return F(eK,{onClick:()=>{e.showTreeFromElement(e.element.htmlElement)},get children(){let e=e8();return e.style.setProperty("width","16px"),e.style.setProperty("height","16px"),e.style.setProperty("pointer-events","none"),e}})}}),null),eo(l,F(e9,{tooltipText:"Parents",get children(){return F(eK,{onClick:()=>{e.showParentsPath(e.element.htmlElement,r().x+2,r().y+20)},get children(){let e=e7();return e.style.setProperty("width","16px"),e.style.setProperty("height","16px"),e.style.setProperty("pointer-events","none"),e}})}}),null),eo(l,F(e9,{tooltipText:"Copy path",get children(){return F(e1,{onClick:()=>{e.copyToClipboard(e.element.htmlElement)}})}}),null),eo(i,()=>e.element.thisElement.label,null),y(e=>{let o=r().x+"px",n=r().y+"px",a=r().width+"px",s=r().height+"px",c={"text-shadow":"none","pointer-events":"auto",...function(){let e=t?.clientWidth||80,o={top:-16,left:0};return r().width<e&&(o.left=-e/2+r().width/2-1),r().height<40&&(o.top=-30),{top:o.top+"px",left:o.left+"px"}}()};return o!==e._v$&&(null!=(e._v$=o)?i.style.setProperty("left",o):i.style.removeProperty("left")),n!==e._v$2&&(null!=(e._v$2=n)?i.style.setProperty("top",n):i.style.removeProperty("top")),a!==e._v$3&&(null!=(e._v$3=a)?i.style.setProperty("width",a):i.style.removeProperty("width")),s!==e._v$4&&(null!=(e._v$4=s)?i.style.setProperty("height",s):i.style.removeProperty("height")),e._v$5=et(l,c,e._v$5),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),n})(),C((()=>{let t=C(()=>e.element.componentsLabels.length>0);return()=>t()&&F(eq,{get labels(){return e.element.componentsLabels},get bbox(){return e.element.componentBox},get element(){return e.element.htmlElement},get showTreeFromElement(){return e.showTreeFromElement},get targets(){return e.targets}})})())]}function tr(e){return e?`${e}px`:""}let to=J('<div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center"><div class="flex items-center justify-center">No source found');function tn(e){let t=C(()=>eH(e.currentElement,e.adapterId)),r=()=>e.currentElement.getBoundingClientRect();return C((()=>{let o=C(()=>!!t());return()=>o()?F(tt,{get element(){return t()},get showTreeFromElement(){return e.showTreeFromElement},get showParentsPath(){return e.showParentsPath},get copyToClipboard(){return e.copyToClipboard},get targets(){return e.targets}}):(()=>{let e=to(),t=e.firstChild;return t.style.setProperty("position","absolute"),t.style.setProperty("background-color","rgba(222, 0, 0, 0.3)"),t.style.setProperty("border","1px solid rgba(222, 0, 0, 0.5)"),t.style.setProperty("border-radius","2px"),t.style.setProperty("font-size","12px"),t.style.setProperty("font-weight","bold"),t.style.setProperty("text-shadow","-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff"),t.style.setProperty("text-overflow","ellipsis"),y(e=>{let o=r().x+"px",n=r().y+"px",i=r().width+"px",l=r().height+"px";return o!==e._v$&&(null!=(e._v$=o)?t.style.setProperty("left",o):t.style.removeProperty("left")),n!==e._v$2&&(null!=(e._v$2=n)?t.style.setProperty("top",n):t.style.removeProperty("top")),i!==e._v$3&&(null!=(e._v$3=i)?t.style.setProperty("width",i):t.style.removeProperty("width")),l!==e._v$4&&(null!=(e._v$4=l)?t.style.setProperty("height",l):t.style.removeProperty("height")),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),e})()})())}let ti=J("<div>");function tl(e){let t=()=>"component"===e.node.type?2:0,r=()=>e.node.getBox();return(()=>{let o=ti();return eo(o,(()=>{let o=C(()=>!!r());return()=>o()?(()=>{let o=ti();return o.style.setProperty("position","fixed"),y(n=>{let i=r().x-t()+"px",l=r().y-t()+"px",a=r().width+2*t()+"px",s=r().height+2*t()+"px",c="component"===e.node.type?"2px solid rgba(200,0,0,1)":"1px solid rgba(200,0,0,1)",u="component"===e.node.type?"5px":"3px",d="component"===e.node.type?1e3:10;return i!==n._v$&&(null!=(n._v$=i)?o.style.setProperty("left",i):o.style.removeProperty("left")),l!==n._v$2&&(null!=(n._v$2=l)?o.style.setProperty("top",l):o.style.removeProperty("top")),a!==n._v$3&&(null!=(n._v$3=a)?o.style.setProperty("width",a):o.style.removeProperty("width")),s!==n._v$4&&(null!=(n._v$4=s)?o.style.setProperty("height",s):o.style.removeProperty("height")),c!==n._v$5&&(null!=(n._v$5=c)?o.style.setProperty("border",c):o.style.removeProperty("border")),u!==n._v$6&&(null!=(n._v$6=u)?o.style.setProperty("border-radius",u):o.style.removeProperty("border-radius")),d!==n._v$7&&(null!=(n._v$7=d)?o.style.setProperty("z-index",d):o.style.removeProperty("z-index")),n},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),o})():null})()),o})()}function ta(){return"fixed left-3 bottom-3 bg-white shadow-lg rounded-lg py-3 px-3 border-2 border-red-500 transition-all pointer-events-auto"}let ts=J('<a class="hover:bg-slate-50 rounded" title="LocatorJS" href="https://www.locatorjs.com" target="_blank"><svg width="276" height="66" viewBox="0 0 276 66" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_12_2)"><path d="M81.2989 47.0524H95.4743V51H76.8579V19.2399H81.2989V47.0524ZM120.289 40.3236C120.289 41.9684 119.99 43.4787 119.391 44.8543C118.823 46.23 118.016 47.4262 116.969 48.443C115.952 49.4299 114.741 50.2075 113.336 50.7757C111.93 51.314 110.42 51.5832 108.805 51.5832C107.19 51.5832 105.68 51.314 104.274 50.7757C102.868 50.2075 101.657 49.4299 100.64 48.443C99.6237 47.4262 98.8162 46.23 98.2181 44.8543C97.6499 43.4787 97.3658 41.9684 97.3658 40.3236C97.3658 38.6787 97.6499 37.1834 98.2181 35.8377C98.8162 34.462 99.6237 33.2807 100.64 32.2938C101.657 31.3069 102.868 30.5443 104.274 30.006C105.68 29.4378 107.19 29.1537 108.805 29.1537C110.42 29.1537 111.93 29.4378 113.336 30.006C114.741 30.5443 115.952 31.3069 116.969 32.2938C118.016 33.2807 118.823 34.462 119.391 35.8377C119.99 37.1834 120.289 38.6787 120.289 40.3236ZM115.893 40.3236C115.893 39.3068 115.728 38.3348 115.399 37.4077C115.1 36.4807 114.651 35.6732 114.053 34.9854C113.455 34.2676 112.708 33.6994 111.81 33.2807C110.943 32.862 109.941 32.6527 108.805 32.6527C107.668 32.6527 106.652 32.862 105.754 33.2807C104.887 33.6994 104.154 34.2676 103.556 34.9854C102.958 35.6732 102.495 36.4807 102.166 37.4077C101.867 38.3348 101.717 39.3068 101.717 40.3236C101.717 41.3404 101.867 42.3123 102.166 43.2394C102.495 44.1665 102.958 44.9889 103.556 45.7066C104.154 46.4244 104.887 46.9926 105.754 47.4113C106.652 47.83 107.668 48.0393 108.805 48.0393C109.941 48.0393 110.943 47.83 111.81 47.4113C112.708 46.9926 113.455 46.4244 114.053 45.7066C114.651 44.9889 115.1 44.1665 115.399 43.2394C115.728 42.3123 115.893 41.3404 115.893 40.3236ZM141.029 35.1199C140.581 34.4321 139.908 33.8639 139.011 33.4153C138.113 32.9368 137.156 32.6976 136.14 32.6976C135.033 32.6976 134.046 32.9069 133.179 33.3256C132.342 33.7443 131.624 34.3125 131.026 35.0302C130.428 35.7181 129.964 36.5255 129.635 37.4526C129.336 38.3797 129.187 39.3516 129.187 40.3684C129.187 41.3852 129.336 42.3572 129.635 43.2843C129.964 44.2113 130.428 45.0338 131.026 45.7515C131.624 46.4393 132.357 46.9926 133.224 47.4113C134.091 47.83 135.078 48.0393 136.185 48.0393C137.261 48.0393 138.233 47.83 139.1 47.4113C139.998 46.9926 140.73 46.4244 141.298 45.7066L144.125 48.2636C143.227 49.3103 142.106 50.1327 140.76 50.7308C139.414 51.2991 137.889 51.5832 136.185 51.5832C134.54 51.5832 133.014 51.314 131.609 50.7757C130.233 50.2374 129.037 49.4897 128.02 48.5328C127.003 47.5459 126.196 46.3646 125.598 44.9889C125.03 43.6132 124.745 42.0731 124.745 40.3684C124.745 38.6937 125.03 37.1685 125.598 35.7928C126.166 34.4171 126.959 33.2359 127.975 32.249C128.992 31.2621 130.188 30.4995 131.564 29.9612C132.97 29.4229 134.48 29.1537 136.095 29.1537C137.59 29.1537 139.07 29.4528 140.536 30.0509C142.031 30.649 143.212 31.5163 144.08 32.6527L141.029 35.1199ZM161.536 37.2283C161.536 35.6433 161.058 34.477 160.101 33.7293C159.144 32.9518 157.873 32.563 156.288 32.563C155.091 32.563 153.955 32.8022 152.878 33.2807C151.832 33.7293 150.949 34.3125 150.232 35.0302L147.989 32.3387C149.035 31.3518 150.306 30.5742 151.802 30.006C153.327 29.4378 154.957 29.1537 156.691 29.1537C158.217 29.1537 159.532 29.378 160.639 29.8266C161.775 30.2453 162.702 30.8284 163.42 31.5761C164.138 32.3237 164.676 33.206 165.035 34.2228C165.394 35.2396 165.573 36.3311 165.573 37.4975V46.7833C165.573 47.501 165.588 48.2636 165.618 49.0711C165.678 49.8486 165.768 50.4916 165.887 51H162.074C161.835 49.9832 161.716 48.9664 161.716 47.9496H161.581C160.803 49.086 159.817 49.9682 158.62 50.5963C157.454 51.2243 156.063 51.5383 154.448 51.5383C153.611 51.5383 152.729 51.4187 151.802 51.1794C150.905 50.9701 150.082 50.6112 149.334 50.1028C148.587 49.5944 147.959 48.9215 147.45 48.0842C146.972 47.2468 146.733 46.215 146.733 44.9889C146.733 43.374 147.166 42.103 148.034 41.1759C148.901 40.2189 150.037 39.5012 151.443 39.0227C152.848 38.5143 154.433 38.1853 156.198 38.0358C157.962 37.8862 159.742 37.8115 161.536 37.8115V37.2283ZM160.504 40.8619C159.458 40.8619 158.366 40.9067 157.23 40.9965C156.123 41.0862 155.106 41.2656 154.179 41.5348C153.282 41.8039 152.534 42.2076 151.936 42.746C151.338 43.2843 151.039 44.002 151.039 44.8992C151.039 45.5272 151.159 46.0506 151.398 46.4692C151.667 46.8879 152.011 47.2318 152.43 47.501C152.848 47.7702 153.312 47.9645 153.82 48.0842C154.329 48.1739 154.852 48.2187 155.39 48.2187C157.364 48.2187 158.874 47.6356 159.921 46.4692C160.998 45.273 161.536 43.7777 161.536 41.9834V40.8619H160.504ZM182.585 33.191H176.933V44.2712C176.933 45.5571 177.172 46.4842 177.651 47.0524C178.129 47.5907 178.892 47.8599 179.938 47.8599C180.327 47.8599 180.746 47.815 181.194 47.7253C181.643 47.6356 182.047 47.501 182.406 47.3216L182.54 50.7757C182.032 50.9551 181.464 51.0897 180.836 51.1794C180.237 51.2991 179.609 51.3589 178.952 51.3589C176.948 51.3589 175.408 50.8056 174.331 49.6991C173.284 48.5926 172.761 46.9328 172.761 44.7197V33.191H168.679V29.7369H172.761V23.6361H176.933V29.7369H182.585V33.191ZM208.473 40.3236C208.473 41.9684 208.174 43.4787 207.576 44.8543C207.008 46.23 206.2 47.4262 205.154 48.443C204.137 49.4299 202.926 50.2075 201.52 50.7757C200.115 51.314 198.604 51.5832 196.989 51.5832C195.374 51.5832 193.864 51.314 192.459 50.7757C191.053 50.2075 189.842 49.4299 188.825 48.443C187.808 47.4262 187.001 46.23 186.403 44.8543C185.834 43.4787 185.55 41.9684 185.55 40.3236C185.55 38.6787 185.834 37.1834 186.403 35.8377C187.001 34.462 187.808 33.2807 188.825 32.2938C189.842 31.3069 191.053 30.5443 192.459 30.006C193.864 29.4378 195.374 29.1537 196.989 29.1537C198.604 29.1537 200.115 29.4378 201.52 30.006C202.926 30.5443 204.137 31.3069 205.154 32.2938C206.2 33.2807 207.008 34.462 207.576 35.8377C208.174 37.1834 208.473 38.6787 208.473 40.3236ZM204.077 40.3236C204.077 39.3068 203.913 38.3348 203.584 37.4077C203.285 36.4807 202.836 35.6732 202.238 34.9854C201.64 34.2676 200.892 33.6994 199.995 33.2807C199.128 32.862 198.126 32.6527 196.989 32.6527C195.853 32.6527 194.836 32.862 193.939 33.2807C193.072 33.6994 192.339 34.2676 191.741 34.9854C191.143 35.6732 190.679 36.4807 190.35 37.4077C190.051 38.3348 189.902 39.3068 189.902 40.3236C189.902 41.3404 190.051 42.3123 190.35 43.2394C190.679 44.1665 191.143 44.9889 191.741 45.7066C192.339 46.4244 193.072 46.9926 193.939 47.4113C194.836 47.83 195.853 48.0393 196.989 48.0393C198.126 48.0393 199.128 47.83 199.995 47.4113C200.892 46.9926 201.64 46.4244 202.238 45.7066C202.836 44.9889 203.285 44.1665 203.584 43.2394C203.913 42.3123 204.077 41.3404 204.077 40.3236ZM214.321 34.3125C214.321 33.7443 214.306 33.0116 214.276 32.1144C214.246 31.2172 214.201 30.4247 214.141 29.7369H218.134C218.194 30.2752 218.238 30.9032 218.268 31.6209C218.298 32.3088 218.313 32.877 218.313 33.3256H218.448C219.046 32.0695 219.913 31.0677 221.05 30.32C222.216 29.5425 223.517 29.1537 224.952 29.1537C225.61 29.1537 226.163 29.2135 226.612 29.3331L226.433 33.2359C225.835 33.0863 225.192 33.0116 224.504 33.0116C223.487 33.0116 222.605 33.206 221.857 33.5947C221.109 33.9536 220.481 34.4471 219.973 35.0751C219.494 35.7031 219.136 36.4358 218.896 37.2732C218.657 38.0806 218.537 38.9329 218.537 39.8301V51H214.321V34.3125ZM231.74 43.9123C231.979 45.0487 232.502 45.9908 233.31 46.7384C234.117 47.4861 235.119 47.8599 236.315 47.8599C237.272 47.8599 238.05 47.6804 238.648 47.3216C239.276 46.9627 239.769 46.4842 240.128 45.8861C240.487 45.2581 240.741 44.5403 240.891 43.7329C241.04 42.8955 241.115 42.0133 241.115 41.0862V19.2399H245.556V41.2656C245.556 42.3721 245.437 43.5385 245.197 44.7646C244.958 45.9908 244.509 47.1272 243.852 48.1739C243.194 49.2206 242.267 50.0879 241.07 50.7757C239.904 51.4635 238.394 51.8075 236.54 51.8075C234.117 51.8075 232.143 51.1794 230.618 49.9234C229.093 48.6673 228.091 47.0524 227.613 45.0786L231.74 43.9123ZM268.798 25.1164C268.17 24.2491 267.318 23.5463 266.241 23.008C265.165 22.4398 263.954 22.1557 262.608 22.1557C261.89 22.1557 261.157 22.2604 260.41 22.4697C259.692 22.6492 259.034 22.9632 258.436 23.4118C257.838 23.8304 257.344 24.3687 256.956 25.0267C256.597 25.6547 256.417 26.4173 256.417 27.3145C256.417 28.1818 256.582 28.9145 256.911 29.5126C257.27 30.0808 257.733 30.5742 258.301 30.9929C258.9 31.3817 259.587 31.7256 260.365 32.0247C261.172 32.2938 262.025 32.5779 262.922 32.877C263.998 33.206 265.09 33.5798 266.197 33.9985C267.303 34.4171 268.305 34.9704 269.202 35.6582C270.099 36.3461 270.832 37.2134 271.4 38.2601C271.968 39.2769 272.253 40.5778 272.253 42.1628C272.253 43.8076 271.939 45.2431 271.31 46.4692C270.712 47.6655 269.905 48.6673 268.888 49.4748C267.871 50.2524 266.69 50.8355 265.344 51.2243C264.028 51.6131 262.668 51.8075 261.262 51.8075C259.258 51.8075 257.314 51.4187 255.43 50.6411C253.576 49.8636 252.036 48.7122 250.81 47.187L254.264 44.2712C255.012 45.3777 256.014 46.2749 257.27 46.9627C258.526 47.6505 259.886 47.9945 261.352 47.9945C262.099 47.9945 262.847 47.8898 263.595 47.6804C264.342 47.4711 265.015 47.1421 265.613 46.6935C266.241 46.245 266.75 45.6917 267.139 45.0338C267.527 44.3459 267.722 43.5235 267.722 42.5665C267.722 41.6095 267.512 40.817 267.094 40.189C266.705 39.5311 266.167 38.9778 265.479 38.5292C264.791 38.0806 263.984 37.7068 263.056 37.4077C262.159 37.0788 261.202 36.7498 260.185 36.4208C259.169 36.1218 258.167 35.7629 257.18 35.3442C256.193 34.8956 255.311 34.3424 254.533 33.6845C253.756 32.9966 253.128 32.1592 252.649 31.1724C252.171 30.1855 251.931 28.9593 251.931 27.4939C251.931 25.9089 252.245 24.5482 252.873 23.4118C253.531 22.2753 254.369 21.3333 255.386 20.5856C256.432 19.838 257.599 19.2997 258.885 18.9707C260.2 18.6118 261.516 18.4324 262.832 18.4324C264.686 18.4324 266.421 18.7614 268.036 19.4193C269.651 20.0772 270.952 20.9595 271.939 22.066L268.798 25.1164Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.3286 4.8189C13.8092 2.60154 18.3151 2.12833 26 2.02734V7.02796C23.318 7.06363 21.125 7.14462 19.2499 7.32846C16.0346 7.64367 14.2912 8.22292 13.0151 9.03586C11.4141 10.0558 10.0559 11.414 9.03592 13.015C8.22299 14.2911 7.64373 16.0346 7.32852 19.2498C7.14468 21.1249 7.06369 23.318 7.02803 25.9999H2.0274C2.12839 18.3151 2.6016 13.8091 4.81896 10.3286C6.23121 8.11176 8.11182 6.23115 10.3286 4.8189ZM2.0274 39.9999H7.02803C7.06369 42.6819 7.14468 44.875 7.32852 46.7501C7.64373 49.9653 8.22299 51.7088 9.03592 52.9848C10.0559 54.5859 11.4141 55.9441 13.0151 56.964C14.2912 57.777 16.0346 58.3562 19.2499 58.6714C21.125 58.8553 23.318 58.9363 26 58.9719V63.9725C18.3151 63.8716 13.8092 63.3983 10.3286 61.181C8.11182 59.7687 6.23121 57.8881 4.81896 55.6713C2.6016 52.1908 2.12839 47.6848 2.0274 39.9999ZM40 63.9725C47.6849 63.8716 52.1908 63.3983 55.6714 61.181C57.8882 59.7687 59.7688 57.8881 61.181 55.6713C63.3984 52.1908 63.8716 47.6848 63.9726 39.9999H58.972C58.9363 42.6819 58.8553 44.875 58.6715 46.7501C58.3563 49.9653 57.777 51.7088 56.9641 52.9848C55.9441 54.5859 54.5859 55.9441 52.9849 56.964C51.7089 57.777 49.9654 58.3562 46.7502 58.6714C44.875 58.8553 42.682 58.9363 40 58.9719V63.9725ZM58.972 25.9999C58.9363 23.318 58.8553 21.1249 58.6715 19.2498C58.3563 16.0346 57.777 14.2911 56.9641 13.015C55.9441 11.414 54.5859 10.0558 52.9849 9.03586C51.7089 8.22292 49.9654 7.64367 46.7502 7.32846C44.875 7.14462 42.682 7.06363 40 7.02796V2.02734C47.6849 2.12833 52.1908 2.60154 55.6714 4.8189C57.8882 6.23115 59.7688 8.11176 61.181 10.3286C63.3984 13.8091 63.8716 18.3151 63.9726 25.9999H58.972Z" fill="url(#paint0_linear_12_2)"></path><path d="M13.08 34.5427C13.08 34.866 13.274 35.1578 13.5721 35.283L25.3232 40.2171C25.8523 40.4393 26.4369 40.0507 26.4369 39.4768V37.0538C26.4369 36.7189 26.229 36.4191 25.9153 36.3018L17.8431 33.2822C17.7912 33.2628 17.7568 33.2132 17.7568 33.1577C17.7568 33.1022 17.7912 33.0526 17.8432 33.0332L25.9146 30.0225C26.2286 29.9054 26.4369 29.6055 26.4369 29.2703V26.8385C26.4369 26.2647 25.8523 25.8761 25.3232 26.0983L13.5721 31.0324C13.274 31.1576 13.08 31.4494 13.08 31.7727V34.5427Z" fill="#160101"></path><path d="M38.5829 22.0116C38.7202 21.5014 38.3359 21 37.8076 21H35.624C35.2609 21 34.943 21.2436 34.8487 21.5942L29.1928 42.6065C29.0555 43.1167 29.4398 43.6181 29.9681 43.6181H32.1517C32.5148 43.6181 32.8327 43.3745 32.927 43.0239L38.5829 22.0116Z" fill="#160101"></path><path d="M54.2036 35.283C54.5017 35.1578 54.6957 34.866 54.6957 34.5427V31.7727C54.6957 31.4494 54.5017 31.1576 54.2036 31.0324L42.4525 26.0983C41.9234 25.8761 41.3388 26.2647 41.3388 26.8385V29.2706C41.3388 29.6056 41.5468 29.9054 41.8607 30.0227L49.9503 33.0456C49.9971 33.0631 50.0282 33.1078 50.0282 33.1577C50.0282 33.2076 49.9972 33.2523 49.9505 33.2698L41.86 36.3016C41.5465 36.4191 41.3388 36.7187 41.3388 37.0534V39.4768C41.3388 40.0507 41.9234 40.4393 42.4525 40.2171L54.2036 35.283Z" fill="#160101"></path></g><defs><linearGradient id="paint0_linear_12_2" x1="2.0274" y1="2.02734" x2="46.9876" y2="47.4871" gradientUnits="userSpaceOnUse"><stop stop-color="#1909D1"></stop><stop offset="1" stop-color="#DC0E0E"></stop></linearGradient><clipPath id="clip0_12_2"><rect width="276" height="66" fill="white">');function tc(e){let t=function(...e){let t=!1;for(let r=0;r<e.length;r++){let o=e[r];t=t||!!o&&l in o,e[r]="function"==typeof o?(t=!0,C(o)):o}if(a&&t)return new Proxy({get(t){for(let r=e.length-1;r>=0;r--){let o=G(e[r])[t];if(void 0!==o)return o}},has(t){for(let r=e.length-1;r>=0;r--)if(t in G(e[r]))return!0;return!1},keys(){let t=[];for(let r=0;r<e.length;r++)t.push(...Object.keys(G(e[r])));return[...new Set(t)]}},U);let r={},o=Object.create(null);for(let t=e.length-1;t>=0;t--){let n=e[t];if(!n)continue;let i=Object.getOwnPropertyNames(n);for(let e=i.length-1;e>=0;e--){let t=i[e];if("__proto__"===t||"constructor"===t)continue;let l=Object.getOwnPropertyDescriptor(n,t);if(o[t]){let e=r[t];e&&(l.get?e.push(l.get.bind(n)):void 0!==l.value&&e.push(()=>l.value))}else o[t]=l.get?{enumerable:!0,configurable:!0,get:X.bind(r[t]=[l.get.bind(n)])}:void 0!==l.value?l:void 0}}let n={},i=Object.keys(o);for(let e=i.length-1;e>=0;e--){let t=i[e],r=o[t];r&&r.get?Object.defineProperty(n,t,r):n[t]=r?r.value:void 0}return n}({width:90},e);return(()=>{let e=ts(),r=e.firstChild;return e.$$click=e=>{e.preventDefault(),window.open("https://www.locatorjs.com","_blank")},y(e=>{let o=t.width+"px",n=t.width/276*66+"px";return o!==e._v$&&(null!=(e._v$=o)?r.style.setProperty("width",o):r.style.removeProperty("width")),n!==e._v$2&&(null!=(e._v$2=n)?r.style.setProperty("height",n):r.style.removeProperty("height")),e},{_v$:void 0,_v$2:void 0}),e})()}K(["click"]);var tu=r(60359);let td=J('<button class="bg-slate-100 py-1 px-2 rounded hover:bg-slate-300 active:bg-slate-200 cursor-pointer text-xs">');function tp(e){return(()=>{let t=td();return t.addEventListener("click",()=>{e.onClick()}),eo(t,()=>e.title||"Settings"),t})()}let tf=J('<div class="flex justify-between gap-2">');function th(e){return(()=>{let t=tf();return eo(t,F(tc,{}),null),eo(t,(()=>{let t=C(()=>!!e.openOptions);return()=>t()?F(tp,{onClick:()=>{e.openOptions()},get title(){return(0,tu.p)()?"Project settings":"Settings"}}):null})(),null),t})()}let tg=J('<div><div class="text-sm mt-2 mb-1">Go to component code with <!> + <div class="inline-block px-1 py-0.5 border border-slate-200 rounded">click</div> </div><div class="text-xs mt-2 mb-1 text-gray-600 flex gap-1"><a class="underline cursor-pointer" href="https://www.locatorjs.com" target="_blank">What is Locator?</a><a class="underline cursor-pointer">Stop showing this popup'),tm=J('<div class="inline-block px-1 py-0.5 border border-slate-200 rounded">');function tb(e){let t=eX(),[r,o]=v(!0);setTimeout(()=>{o(!1)},5e3),x(()=>{e.hide&&r()&&o(!1)});let n=()=>eu();return(()=>{let o=tg(),i=o.firstChild,l=i.firstChild.nextSibling,a=(l.nextSibling,i.nextSibling).firstChild.nextSibling;return eo(o,F(th,{get openOptions(){return e.openOptions},get adapter(){return e.adapter}}),i),eo(i,F(Y,{get each(){return Object.keys(n())},children:(e,t)=>[C(()=>0===t()?"":" + "),(()=>{let t=tm();return eo(t,()=>ec.jj[e]),t})()]}),l),a.$$click=()=>{t.setOptions({showIntro:!1})},y(e=>{let t=ta(),n=r()?"12px":"-120px";return t!==e._v$&&ee(o,e._v$=t),n!==e._v$2&&(null!=(e._v$2=n)?o.style.setProperty("bottom",n):o.style.removeProperty("bottom")),e},{_v$:void 0,_v$2:void 0}),o})()}K(["click"]);let tw=J('<button class="w-6 h-6 rounded hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z">');function tv(e){return(()=>{let t=tw(),r=t.firstChild;return t.$$click=()=>e.onClick(),r.style.setProperty("width","20px"),r.style.setProperty("height","20px"),t})()}K(["click"]);let ty=J('<div class="mt-2 border border-gray-200 rounded p-4 flex flex-col gap-1"><div class="flex justify-between self-stretch text-sm"><div>Editor / Link template</div><a class="underline cursor-pointer"></a></div><div class="text-xs text-gray-700">Change your editor for this project. For less common editors, you can change the link template.'),tx=J('<div class="flex flex-col gap-1 py-1"><div class="flex items-center"><input id="custom" type="radio" class="focus:ring-indigo-200 h-4 w-4 text-indigo-600 border-slate-300 hover:border-slate-400"><label for="custom" class="ml-2 block text-sm font-medium text-slate-700 hover:text-slate-800">Custom'),tC=J('<div class="flex items-center"><input type="radio" class="focus:ring-indigo-200 h-4 w-4 text-indigo-600 border-slate-300 hover:border-slate-400"><label class="ml-2 block text-sm font-medium text-slate-700 hover:text-slate-800">'),tE=J('<div class="mt-1"><input type="text" name="text">');function t$(e){let t=()=>Object.entries(e.targets)[0][0],r=()=>e.selectedTarget||"";function o(){e.selectTarget((e.targets[r()]?e.targets[r()]?.url:r())||"")}let n=()=>!e.targets[r()];return(()=>{let i=ty(),l=i.firstChild,a=l.firstChild.nextSibling;return l.nextSibling,a.$$click=()=>{void 0===e.selectedTarget?e.selectTarget(t()):e.selectTarget(void 0)},eo(a,()=>void 0===e.selectedTarget?"edit":"clear"),eo(i,(()=>{let t=C(()=>void 0!==e.selectedTarget);return()=>t()?[(()=>{let t=tx(),i=t.firstChild,l=i.firstChild;return eo(t,F(Y,{get each(){return Object.entries(e.targets)},children:([t,o])=>(()=>{let n=tC(),i=n.firstChild,l=i.nextSibling;return i.$$click=()=>{e.selectTarget(t)},Q(i,"id",t),Q(l,"for",t),eo(l,()=>o.label),y(()=>i.checked=t===r()),n})()}),i),l.$$click=()=>{o()},y(()=>l.checked=n()),t})(),C((()=>{let t=C(()=>!!n());return()=>t()&&(()=>{let t=tE(),n=t.firstChild;return n.$$input=t=>{e.selectTarget(t.currentTarget.value)},n.$$click=()=>{e.targets[r()]&&o()},y(()=>ee(n,"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-slate-300 rounded-md "+(e.targets[r()]?"text-slate-400":"text-slate-800"))),y(()=>n.value=e.targets[r()]?e.targets[r()]?.url:r()),t})()})())]:null})(),null),i})()}K(["click","input"]);let tk=J('<div class="mt-2 border border-gray-200 rounded p-4 flex flex-col gap-1"><div class="flex justify-between self-stretch text-sm"><div>Project path (prefix)</div><a class="underline cursor-pointer"></a></div><div class="text-xs text-gray-700">If your framework generates relative paths, you can add a prefix to it to make absolute paths.'),tP=J('<div class="py-2 flex flex-col gap-2"><input id="project-path" placeholder="e.g. /Users/MyName/MyProject" type="text" name="text" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-slate-300 rounded-md"><div class="text-xs text-slate-700 pt-2">Run <code class="bg-slate-100 rounded py-1 px-2">pwd</code> or <code class="bg-slate-100 rounded py-1 px-2">echo %cd%</code> to get the current path');function t_(e){return(()=>{let t=tk(),r=t.firstChild,o=r.firstChild.nextSibling;return r.nextSibling,o.$$click=()=>{void 0===e.value?e.onChange(""):e.onChange(void 0)},eo(o,()=>void 0===e.value?"edit":"clear"),eo(t,(()=>{let t=C(()=>void 0!==e.value);return()=>t()?(()=>{let t=tP(),r=t.firstChild;return r.$$input=t=>{e.onChange(t.currentTarget.value)},y(()=>r.value=e.value),t})():[]})(),null),t})()}K(["click","input"]);let tS=J('<div class="mt-2 border border-gray-200 rounded p-4 flex flex-col gap-1"><div class="flex justify-between self-stretch text-sm"><div>Transform final link</div><a class="underline cursor-pointer"></a></div><div class="text-xs text-gray-700">In case you need to change something in the final generated link you can find and replace parts with Regex'),tL=J('<div class="py-2"><div class="flex gap-2"><div class="grow"><label for="project-path" class="block text-sm text-slate-700 pb-0.5 font-bold">From (Regex)</label><input id="project-path" placeholder="from regex" type="text" name="text" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-slate-300 rounded-md"></div><div class="grow"><label for="project-path" class="block text-sm text-slate-700 pb-0.5 font-bold">To</label><input id="project-path" placeholder="to" type="text" name="text" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-slate-300 rounded-md">'),tT=J('<div class="text-red-600 mt-1 text-sm">Regex is not valid!'),tI={from:"",to:""};function tO(e){let t=()=>{if(!e.value||!e.value.from)return!1;try{RegExp(`${e.value.from}`)}catch(e){return!0}return!1};return(()=>{let r=tS(),o=r.firstChild,n=o.firstChild.nextSibling;return o.nextSibling,n.$$click=()=>{void 0===e.value?e.onChange(tI):e.onChange(void 0)},eo(n,()=>void 0===e.value?"edit":"clear"),eo(r,(()=>{let r=C(()=>void 0!==e.value);return()=>r()?(()=>{let r=tL(),o=r.firstChild.firstChild,n=o.firstChild.nextSibling,i=o.nextSibling.firstChild.nextSibling;return n.$$input=t=>{e.onChange({...e.value||tI,from:t.currentTarget.value})},i.$$input=t=>{e.onChange({...e.value||tI,to:t.currentTarget.value})},eo(r,(()=>{let e=C(()=>!!t());return()=>e()?tT():null})(),null),y(()=>n.value=e.value.from),y(()=>i.value=e.value.to),r})():null})(),null),r})()}K(["click","input"]);let tR=J('<div class="mt-2 border border-gray-200 rounded p-4 flex flex-col gap-1"><div class="flex justify-between self-stretch text-sm"><div>Link Href Target</div><a class="underline cursor-pointer">'),tN=J('<div class="text-xs text-gray-700">Hot-reloading On some stacks (e.g. Create React App) gets broken when you use _blank as the target. You can change the target to _self to fix this. <br>Some browsers open unnecessary tabs when you use _blank.'),tA=J('<div class="flex flex-col gap-1 py-1">'),tj=J('<div class="flex items-center"><input type="radio" class="focus:ring-indigo-200 h-4 w-4 text-indigo-600 border-slate-300 hover:border-slate-400"><label class="ml-2 block text-sm font-medium text-slate-700 hover:text-slate-800">'),tM=["_blank","_self"];function tH(e){let t=()=>e.value||"";return(()=>{let r=tR(),o=r.firstChild.firstChild.nextSibling;return o.$$click=()=>{void 0===e.value?e.onChange(eD._o):e.onChange(void 0)},eo(o,()=>void 0===e.value?"edit":"clear"),eo(r,(()=>{let r=C(()=>void 0!==e.value);return()=>r()?[tN(),(()=>{let r=tA();return eo(r,F(Y,{get each(){return Object.entries(tM)},children:([r,o])=>(()=>{let n=tj(),i=n.firstChild,l=i.nextSibling;return i.$$click=()=>{e.onChange(r)},Q(i,"id",r),Q(l,"for",r),eo(l,o),y(()=>i.checked=r===t()),n})()})),r})()]:null})(),null),r})()}K(["click"]);let tD=J('<div><div class="mt-4"><div class="text-sm flex flex-col bg-green-50 text-green-800 p-4 -mx-4 rounded whitespace-pre-wrap break-all"><label for="email" class="block text-xs text-green-700">Link preview:'),tV=J('<a class="hover:underline">');function tB(e){let t=eX();function r(){return t.getOptions().templateOrTemplateId}function o(e){t.setOptions({templateOrTemplateId:e})}let n=()=>e.linkProps?(0,eV.DF)(e.linkProps,e.targets,t,r()):void 0;return(()=>{let i=tD(),l=i.firstChild,a=l.firstChild;return a.firstChild,eo(i,F(t_,{get value(){return t.getOptions().projectPath},onChange:function(e){t.setOptions({projectPath:e})}}),l),eo(i,F(tO,{get value(){return t.getOptions().replacePath},onChange:e=>{t.setOptions({replacePath:e})}}),l),eo(i,F(t$,{get targets(){return e.targets},get selectedTarget(){return r()},selectTarget:o}),l),eo(i,F(tH,{get value(){return t.getOptions().hrefTarget},onChange:e=>{t.setOptions({hrefTarget:e})}}),l),eo(a,(()=>{let e=C(()=>!!n());return()=>e()?(()=>{let e=tV();return eo(e,n),y(r=>{let o=n(),i=t.getOptions().hrefTarget||eD._o;return o!==r._v$&&Q(e,"href",r._v$=o),i!==r._v$2&&Q(e,"target",r._v$2=i),r},{_v$:void 0,_v$2:void 0}),e})():"To test the link, try to hover over some element."})(),null),i})()}let tF=J('<div><div class="p-1"><div class="flex justify-between items-center"></div><div class="flex gap-2 justify-between mt-4"><button class="bg-slate-100 py-1 px-2 rounded hover:bg-slate-300 active:bg-slate-200 cursor-pointer text-xs">Reset settings</button><button class="bg-red-50 py-1 px-2 rounded hover:bg-red-200 active:bg-red-100 cursor-pointer text-xs text-red-800 flex gap-1"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13"></path></svg> Disable Locator');function tz(e){let t=eX(),r=C(()=>e.currentElement&&eH(e.currentElement,e.adapterId)?.thisElement.link||null);return(()=>{let o=tF(),n=o.firstChild,i=n.firstChild,l=i.nextSibling,a=l.firstChild,s=a.nextSibling,c=s.firstChild;return eo(i,F(tc,{}),null),eo(i,F(tv,{onClick:()=>e.onClose()}),null),eo(n,F(tB,{get linkProps(){return r()},get adapterId(){return e.adapterId},get targets(){return e.targets}}),l),a.$$click=()=>{(0,ec.ue)(),e.onClose()},s.$$click=()=>{(0,tu.p)()?(t.setOptions({disabled:!0}),e.onClose()):e.showDisableDialog()},c.style.setProperty("width","16px"),c.style.setProperty("height","16px"),y(()=>ee(o,ta()+" w-[560px] max-w-full overflow-hidden")),o})()}K(["click"]);let tU=J('<a target="_blank" class="underline">');function tG(e){return(()=>{let t=tU();return t.$$click=t=>{t.preventDefault(),window.open(e.href,"_blank")},eo(t,()=>e.children),y(()=>Q(t,"href",e.href)),t})()}K(["click"]);let tX=J('<div class="bg-white p-4 rounded-xl border-2 border-red-500 shadow-xl cursor-auto pointer-events-auto z-10"><div class="mt-2 font-bold">No source info found for this element!</div><div class="text-gray-700"><p class="font-medium text-gray-900 mt-2 mb-1">You need one of these:</p><ul class="pl-4 list-disc"><li>Working React in development mode, with </li><li>React, SolidJS or Preact with Locator Babel plugin</li></ul><p class="font-medium text-gray-900 mt-2 mb-1">Setup babel plugin:</p><div><ul class="pl-4 list-disc"><li></li><li></li><li>');function tW(){return(()=>{let e=tX(),t=e.firstChild,r=t.nextSibling.firstChild.nextSibling,o=r.firstChild,n=(o.firstChild,r.nextSibling).nextSibling.firstChild.firstChild,i=n.nextSibling,l=i.nextSibling;return eo(e,F(tc,{}),t),eo(o,F(tG,{href:"https://babeljs.io/docs/en/babel-preset-react",children:"preset-react plugins"}),null),eo(n,F(tG,{href:"https://www.locatorjs.com/install/react-data-id",children:"React"})),eo(i,F(tG,{href:"https://www.locatorjs.com/install/preact",children:"Preact"})),eo(l,F(tG,{href:"https://www.locatorjs.com/install/solidjs",children:"SolidJS"})),e})()}let tY=J('<div class="bg-white p-4 rounded-xl border-2 border-red-500 shadow-xl cursor-auto pointer-events-auto z-10 max-w-xl max-h-full overflow-auto"><div class="mt-2 mb-4"><h1 class="text-2xl font-bold">Welcome to Locator!</h1><span class="text-sm">Before using Locator, let\'s try links in your project and fix them if needed.</span></div><div class="mt-4 flex gap-2 justify-between items-center"><div class="text-sm text-gray-600"></div><div class="flex gap-2"><a class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Test link</a><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Confirm');function tZ(e){let t=eX(),r=()=>e.originalLinkProps?(0,eV.DF)(e.originalLinkProps,e.targets,t,t.getOptions().templateOrTemplateId):void 0;return(()=>{let o=tY(),n=o.firstChild.nextSibling,i=n.firstChild.nextSibling.firstChild,l=i.nextSibling;return eo(o,F(tB,{get linkProps(){return e.originalLinkProps},get adapterId(){return e.adapterId},get targets(){return e.targets}}),n),l.$$click=()=>{t.setOptions({welcomeScreenDismissed:!0}),e.onClose()},y(e=>{let o=r(),n=t.getOptions().hrefTarget||eD._o;return o!==e._v$&&Q(i,"href",e._v$=o),n!==e._v$2&&Q(i,"target",e._v$2=n),e},{_v$:void 0,_v$2:void 0}),o})()}function tq(e){return"locatorjs-label"==e.className||"locatorjs-labels-section"==e.id||"locatorjs-layer"==e.id||"locatorjs-wrapper"==e.id||e.matches("#locatorjs-wrapper *")}function tJ(e){let t=e.split("/"),r=t.slice(Math.max(t.length-3,0),t.length).join("/");return r!==e?`.../${r}`:r}K(["click"]);let tK=J('<div class="font-bold cursor-pointer text-black hover:bg-gray-100 rounded">'),tQ=J('<div class="font-bold">'),t0=J('<div><div><div><div class="font-mono flex gap-1">&lt;<!>></div><div class="whitespace-nowrap text-ellipsis overflow-hidden"></div></div><div>'),t1=J('<div class="flex gap-2 justify-between pb-1"><div class="whitespace-nowrap text-ellipsis overflow-hidden">'),t2=J('<button class="inline-flex cursor-pointer bg-gray-100 rounded-full hover:bg-gray-200 py-0 px-2 ml-2">...');function t3(e){let t=eX(),r=()=>!e.node.getSource();function o(){return e.node.getComponent&&JSON.stringify(e.node.getComponent())!==JSON.stringify(e.parentComponent)&&!r()}function n(){return e.node.getComponent()?.callLink?(()=>{let r=tK();return r.$$click=()=>{let r=e.node.getComponent()?.callLink;r&&ez(r,e.targets,t)},eo(r,()=>e.node.getComponent()?.label),r})():(()=>{let t=tQ();return eo(t,()=>e.node.getComponent()?.label),t})()}return(()=>{let i=t0(),l=i.firstChild,a=l.firstChild,s=a.firstChild,c=s.firstChild.nextSibling,u=(c.nextSibling,s.nextSibling),d=a.nextSibling;return i.addEventListener("mouseleave",()=>{e.setHighlightedBoundingBox(null)}),i.addEventListener("mouseenter",()=>{e.setHighlightedBoundingBox(e.node)}),eo(i,(()=>{let t=C(()=>!!o());return()=>t()&&(()=>{let t=t1(),r=t.firstChild;return eo(t,n,r),eo(r,()=>tJ(e.node.getComponent()?.definitionLink?.fileName||"")),t})()})(),l),a.$$click=()=>{let r=e.node.getSource();r&&ez(r,e.targets,t)},eo(s,()=>e.node.name,c),eo(s,(()=>{let e=C(()=>!!r());return()=>e()&&n()})(),null),eo(u,(()=>{let t=C(()=>!!(e.node.getSource()?.fileName!==e.parentFilePath&&!o()));return()=>t()?tJ(e.node.getSource()?.fileName||""):null})()),eo(d,(()=>{let t=C(()=>!!e.expandedIds.has(e.node.uniqueId));return()=>t()?F(Y,{get each(){return e.node.getChildren()},children:t=>F(t3,{node:t,get expandedIds(){return e.expandedIds},get highlightedId(){return e.highlightedId},get expandId(){return e.expandId},get parentFilePath(){return e.node.getSource()?.fileName},get targets(){return e.targets},get setHighlightedBoundingBox(){return e.setHighlightedBoundingBox},get parentComponent(){return e.node.getComponent()}})}):(()=>{let t=C(()=>!!e.node.getChildren().length);return()=>t()?(()=>{let t=t2();return t.$$click=()=>{e.expandId(e.node.uniqueId)},t})():""})()})()),y(t=>{let r="text-xs pl-2 "+(e.highlightedId===e.node.uniqueId?"bg-yellow-100 ":" ")+(o()?"border border-gray-300 py-2 pr-2 ":" ")+(e.node.getSource()?"text-black ":"text-gray-500 "),n=o()?"pl-2":"",s="flex justify-between items-center gap-4 "+(e.node.getSource()?" cursor-pointer hover:bg-sky-100":"");return r!==t._v$&&ee(i,t._v$=r),n!==t._v$2&&ee(l,t._v$2=n),s!==t._v$3&&ee(a,t._v$3=s),t},{_v$:void 0,_v$2:void 0,_v$3:void 0}),i})()}K(["click"]);let t4=Math.min,t5=Math.max,t6=Math.round,t9=e=>({x:e,y:e}),t8={left:"right",right:"left",bottom:"top",top:"bottom"},t7={start:"end",end:"start"};function re(e,t){return"function"==typeof e?e(t):e}function rt(e){return e.split("-")[0]}function rr(e){return e.split("-")[1]}function ro(e){return"x"===e?"y":"x"}function rn(e){return"y"===e?"height":"width"}function ri(e){return["top","bottom"].includes(rt(e))?"y":"x"}function rl(e){return e.replace(/start|end/g,e=>t7[e])}function ra(e){return e.replace(/left|right|bottom|top/g,e=>t8[e])}function rs(e){let{x:t,y:r,width:o,height:n}=e;return{width:o,height:n,top:r,left:t,right:t+o,bottom:r+n,x:t,y:r}}function rc(e,t,r){let o,{reference:n,floating:i}=e,l=ri(t),a=ro(ri(t)),s=rn(a),c=rt(t),u="y"===l,d=n.x+n.width/2-i.width/2,p=n.y+n.height/2-i.height/2,f=n[s]/2-i[s]/2;switch(c){case"top":o={x:d,y:n.y-i.height};break;case"bottom":o={x:d,y:n.y+n.height};break;case"right":o={x:n.x+n.width,y:p};break;case"left":o={x:n.x-i.width,y:p};break;default:o={x:n.x,y:n.y}}switch(rr(t)){case"start":o[a]-=f*(r&&u?-1:1);break;case"end":o[a]+=f*(r&&u?-1:1)}return o}let ru=async(e,t,r)=>{let{placement:o="bottom",strategy:n="absolute",middleware:i=[],platform:l}=r,a=i.filter(Boolean),s=await (null==l.isRTL?void 0:l.isRTL(t)),c=await l.getElementRects({reference:e,floating:t,strategy:n}),{x:u,y:d}=rc(c,o,s),p=o,f={},h=0;for(let r=0;r<a.length;r++){let{name:i,fn:g}=a[r],{x:m,y:b,data:w,reset:v}=await g({x:u,y:d,initialPlacement:o,placement:p,strategy:n,middlewareData:f,rects:c,platform:l,elements:{reference:e,floating:t}});u=null!=m?m:u,d=null!=b?b:d,f={...f,[i]:{...f[i],...w}},v&&h<=50&&(h++,"object"==typeof v&&(v.placement&&(p=v.placement),v.rects&&(c=!0===v.rects?await l.getElementRects({reference:e,floating:t,strategy:n}):v.rects),{x:u,y:d}=rc(c,p,s)),r=-1)}return{x:u,y:d,placement:p,strategy:n,middlewareData:f}};async function rd(e,t){var r;void 0===t&&(t={});let{x:o,y:n,platform:i,rects:l,elements:a,strategy:s}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:f=0}=re(t,e),h="number"!=typeof f?{top:0,right:0,bottom:0,left:0,...f}:{top:f,right:f,bottom:f,left:f},g=a[p?"floating"===d?"reference":"floating":d],m=rs(await i.getClippingRect({element:null==(r=await (null==i.isElement?void 0:i.isElement(g)))||r?g:g.contextElement||await (null==i.getDocumentElement?void 0:i.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:s})),b="floating"===d?{x:o,y:n,width:l.floating.width,height:l.floating.height}:l.reference,w=await (null==i.getOffsetParent?void 0:i.getOffsetParent(a.floating)),v=await (null==i.isElement?void 0:i.isElement(w))&&await (null==i.getScale?void 0:i.getScale(w))||{x:1,y:1},y=rs(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:w,strategy:s}):b);return{top:(m.top-y.top+h.top)/v.y,bottom:(y.bottom-m.bottom+h.bottom)/v.y,left:(m.left-y.left+h.left)/v.x,right:(y.right-m.right+h.right)/v.x}}async function rp(e,t){let{placement:r,platform:o,elements:n}=e,i=await (null==o.isRTL?void 0:o.isRTL(n.floating)),l=rt(r),a=rr(r),s="y"===ri(r),c=["left","top"].includes(l)?-1:1,u=i&&s?-1:1,d=re(t,e),{mainAxis:p,crossAxis:f,alignmentAxis:h}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&"number"==typeof h&&(f="end"===a?-1*h:h),s?{x:f*u,y:p*c}:{x:p*c,y:f*u}}function rf(e){return rm(e)?(e.nodeName||"").toLowerCase():"#document"}function rh(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function rg(e){var t;return null==(t=(rm(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function rm(e){return e instanceof Node||e instanceof rh(e).Node}function rb(e){return e instanceof Element||e instanceof rh(e).Element}function rw(e){return e instanceof HTMLElement||e instanceof rh(e).HTMLElement}function rv(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof rh(e).ShadowRoot)}function ry(e){let{overflow:t,overflowX:r,overflowY:o,display:n}=r$(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!["inline","contents"].includes(n)}function rx(e){let t=rC(),r=r$(e);return"none"!==r.transform||"none"!==r.perspective||!!r.containerType&&"normal"!==r.containerType||!t&&!!r.backdropFilter&&"none"!==r.backdropFilter||!t&&!!r.filter&&"none"!==r.filter||["transform","perspective","filter"].some(e=>(r.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(r.contain||"").includes(e))}function rC(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function rE(e){return["html","body","#document"].includes(rf(e))}function r$(e){return rh(e).getComputedStyle(e)}function rk(e){return rb(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function rP(e){if("html"===rf(e))return e;let t=e.assignedSlot||e.parentNode||rv(e)&&e.host||rg(e);return rv(t)?t.host:t}function r_(e){let t=r$(e),r=parseFloat(t.width)||0,o=parseFloat(t.height)||0,n=rw(e),i=n?e.offsetWidth:r,l=n?e.offsetHeight:o,a=t6(r)!==i||t6(o)!==l;return a&&(r=i,o=l),{width:r,height:o,$:a}}function rS(e){return rb(e)?e:e.contextElement}function rL(e){let t=rS(e);if(!rw(t))return t9(1);let r=t.getBoundingClientRect(),{width:o,height:n,$:i}=r_(t),l=(i?t6(r.width):r.width)/o,a=(i?t6(r.height):r.height)/n;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}let rT=t9(0);function rI(e){let t=rh(e);return rC()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:rT}function rO(e,t,r,o){var n;void 0===t&&(t=!1),void 0===r&&(r=!1);let i=e.getBoundingClientRect(),l=rS(e),a=t9(1);t&&(o?rb(o)&&(a=rL(o)):a=rL(e));let s=(void 0===(n=r)&&(n=!1),o&&(!n||o===rh(l))&&n)?rI(l):t9(0),c=(i.left+s.x)/a.x,u=(i.top+s.y)/a.y,d=i.width/a.x,p=i.height/a.y;if(l){let e=rh(l),t=o&&rb(o)?rh(o):o,r=e,n=r.frameElement;for(;n&&o&&t!==r;){let e=rL(n),t=n.getBoundingClientRect(),o=r$(n),i=t.left+(n.clientLeft+parseFloat(o.paddingLeft))*e.x,l=t.top+(n.clientTop+parseFloat(o.paddingTop))*e.y;c*=e.x,u*=e.y,d*=e.x,p*=e.y,c+=i,u+=l,n=(r=rh(n)).frameElement}}return rs({width:d,height:p,x:c,y:u})}let rR=[":popover-open",":modal"];function rN(e){return rR.some(t=>{try{return e.matches(t)}catch(e){return!1}})}function rA(e){return rO(rg(e)).left+rk(e).scrollLeft}function rj(e,t,r){let o;if("viewport"===t)o=function(e,t){let r=rh(e),o=rg(e),n=r.visualViewport,i=o.clientWidth,l=o.clientHeight,a=0,s=0;if(n){i=n.width,l=n.height;let e=rC();(!e||e&&"fixed"===t)&&(a=n.offsetLeft,s=n.offsetTop)}return{width:i,height:l,x:a,y:s}}(e,r);else if("document"===t)o=function(e){let t=rg(e),r=rk(e),o=e.ownerDocument.body,n=t5(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=t5(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight),l=-r.scrollLeft+rA(e),a=-r.scrollTop;return"rtl"===r$(o).direction&&(l+=t5(t.clientWidth,o.clientWidth)-n),{width:n,height:i,x:l,y:a}}(rg(e));else if(rb(t))o=function(e,t){let r=rO(e,!0,"fixed"===t),o=r.top+e.clientTop,n=r.left+e.clientLeft,i=rw(e)?rL(e):t9(1),l=e.clientWidth*i.x;return{width:l,height:e.clientHeight*i.y,x:n*i.x,y:o*i.y}}(t,r);else{let r=rI(e);o={...t,x:t.x-r.x,y:t.y-r.y}}return rs(o)}function rM(e){return"static"===r$(e).position}function rH(e,t){return rw(e)&&"fixed"!==r$(e).position?t?t(e):e.offsetParent:null}function rD(e,t){let r=rh(e);if(rN(e))return r;if(!rw(e)){let t=rP(e);for(;t&&!rE(t);){if(rb(t)&&!rM(t))return t;t=rP(t)}return r}let o=rH(e,t);for(;o&&["table","td","th"].includes(rf(o))&&rM(o);)o=rH(o,t);return o&&rE(o)&&rM(o)&&!rx(o)?r:o||function(e){let t=rP(e);for(;rw(t)&&!rE(t);){if(rx(t))return t;t=rP(t)}return null}(e)||r}let rV=async function(e){let t=this.getOffsetParent||rD,r=this.getDimensions,o=await r(e.floating);return{reference:function(e,t,r){let o=rw(t),n=rg(t),i="fixed"===r,l=rO(e,!0,i,t),a={scrollLeft:0,scrollTop:0},s=t9(0);if(o||!o&&!i){if(("body"!==rf(t)||ry(n))&&(a=rk(t)),o){let e=rO(t,!0,i,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else n&&(s.x=rA(n))}return{x:l.left+a.scrollLeft-s.x,y:l.top+a.scrollTop-s.y,width:l.width,height:l.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},rB={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:r,offsetParent:o,strategy:n}=e,i="fixed"===n,l=rg(o),a=!!t&&rN(t.floating);if(o===l||a&&i)return r;let s={scrollLeft:0,scrollTop:0},c=t9(1),u=t9(0),d=rw(o);if((d||!d&&!i)&&(("body"!==rf(o)||ry(l))&&(s=rk(o)),rw(o))){let e=rO(o);c=rL(o),u.x=e.x+o.clientLeft,u.y=e.y+o.clientTop}return{width:r.width*c.x,height:r.height*c.y,x:r.x*c.x-s.scrollLeft*c.x+u.x,y:r.y*c.y-s.scrollTop*c.y+u.y}},getDocumentElement:rg,getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:o,strategy:n}=e,i=[..."clippingAncestors"===r?rN(t)?[]:function(e,t){let r=t.get(e);if(r)return r;let o=(function e(t,r,o){var n;void 0===r&&(r=[]),void 0===o&&(o=!0);let i=function e(t){let r=rP(t);return rE(r)?t.ownerDocument?t.ownerDocument.body:t.body:rw(r)&&ry(r)?r:e(r)}(t),l=i===(null==(n=t.ownerDocument)?void 0:n.body),a=rh(i);return l?r.concat(a,a.visualViewport||[],ry(i)?i:[],a.frameElement&&o?e(a.frameElement):[]):r.concat(i,e(i,[],o))})(e,[],!1).filter(e=>rb(e)&&"body"!==rf(e)),n=null,i="fixed"===r$(e).position,l=i?rP(e):e;for(;rb(l)&&!rE(l);){let t=r$(l),r=rx(l);r||"fixed"!==t.position||(n=null),(i?!r&&!n:!r&&"static"===t.position&&!!n&&["absolute","fixed"].includes(n.position)||ry(l)&&!r&&function e(t,r){let o=rP(t);return!(o===r||!rb(o)||rE(o))&&("fixed"===r$(o).position||e(o,r))}(e,l))?o=o.filter(e=>e!==l):n=t,l=rP(l)}return t.set(e,o),o}(t,this._c):[].concat(r),o],l=i[0],a=i.reduce((e,r)=>{let o=rj(t,r,n);return e.top=t5(o.top,e.top),e.right=t4(o.right,e.right),e.bottom=t4(o.bottom,e.bottom),e.left=t5(o.left,e.left),e},rj(t,l,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:rD,getElementRects:rV,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:r}=r_(e);return{width:t,height:r}},getScale:rL,isElement:rb,isRTL:function(e){return"rtl"===r$(e).direction}},rF=(e,t,r)=>{let o=new Map,n={platform:rB,...r},i={...n.platform,_c:o};return ru(e,t,{...n,platform:i})},rz=J('<div><div><div class="m-2 bg-white rounded-md p-4 shadow-xl text-xs overflow-auto">'),rU=J("<div>"),rG=J('<div class="mb-2"><button class="inline-flex cursor-pointer bg-gray-100 rounded-full hover:bg-gray-200 py-0 px-2 ">...');function rX(e){let t;let[r,o]=v();return x(()=>{if(t){var r,n;let i=e.treeState.originalNode.getBox();rF({getBoundingClientRect:()=>({top:i?.y||0,left:i?.x||0,width:16,height:16})},t,{placement:"left-start",middleware:[{name:"offset",options:10,async fn(e){var t,r;let{x:o,y:n,placement:i,middlewareData:l}=e,a=await rp(e,10);return i===(null==(t=l.offset)?void 0:t.placement)&&null!=(r=l.arrow)&&r.alignmentOffset?{}:{x:o+a.x,y:n+a.y,data:{...a,placement:i}}}},(void 0===r&&(r={}),{name:"shift",options:r,async fn(e){let{x:t,y:o,placement:n}=e,{mainAxis:i=!0,crossAxis:l=!1,limiter:a={fn:e=>{let{x:t,y:r}=e;return{x:t,y:r}}},...s}=re(r,e),c={x:t,y:o},u=await rd(e,s),d=ri(rt(n)),p=ro(d),f=c[p],h=c[d];if(i){let e="y"===p?"top":"left",t="y"===p?"bottom":"right",r=f+u[e],o=f-u[t];f=t5(r,t4(f,o))}if(l){let e="y"===d?"top":"left",t="y"===d?"bottom":"right",r=h+u[e],o=h-u[t];h=t5(r,t4(h,o))}let g=a.fn({...e,[p]:f,[d]:h});return{...g,data:{x:g.x-t,y:g.y-o}}}}),(void 0===n&&(n={}),{name:"flip",options:n,async fn(e){var t,r,o,i,l;let{placement:a,middlewareData:s,rects:c,initialPlacement:u,platform:d,elements:p}=e,{mainAxis:f=!0,crossAxis:h=!0,fallbackPlacements:g,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:w=!0,...v}=re(n,e);if(null!=(t=s.arrow)&&t.alignmentOffset)return{};let y=rt(a),x=rt(u)===u,C=await (null==d.isRTL?void 0:d.isRTL(p.floating)),E=g||(x||!w?[ra(u)]:function(e){let t=ra(e);return[rl(e),t,rl(t)]}(u));g||"none"===b||E.push(...function(e,t,r,o){let n=rr(e),i=function(e,t,r){let o=["left","right"],n=["right","left"];switch(e){case"top":case"bottom":if(r)return t?n:o;return t?o:n;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(rt(e),"start"===r,o);return n&&(i=i.map(e=>e+"-"+n),t&&(i=i.concat(i.map(rl)))),i}(u,w,b,C));let $=[u,...E],k=await rd(e,v),P=[],_=(null==(r=s.flip)?void 0:r.overflows)||[];if(f&&P.push(k[y]),h){let e=function(e,t,r){void 0===r&&(r=!1);let o=rr(e),n=ro(ri(e)),i=rn(n),l="x"===n?o===(r?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=ra(l)),[l,ra(l)]}(a,c,C);P.push(k[e[0]],k[e[1]])}if(_=[..._,{placement:a,overflows:P}],!P.every(e=>e<=0)){let e=((null==(o=s.flip)?void 0:o.index)||0)+1,t=$[e];if(t)return{data:{index:e,overflows:_},reset:{placement:t}};let r=null==(i=_.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:i.placement;if(!r)switch(m){case"bestFit":{let e=null==(l=_.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:l[0];e&&(r=e);break}case"initialPlacement":r=u}if(a!==r)return{reset:{placement:r}}}return{}}})]}).then(({x:e,y:t})=>{o({x:e,y:t})})}}),(()=>{let o=rz(),n=o.firstChild,i=n.firstChild;o.$$click=t=>{t.currentTarget===t.target&&e.close()},o.style.setProperty("position","fixed"),o.style.setProperty("top","0"),o.style.setProperty("left","0"),o.style.setProperty("width","100vw"),o.style.setProperty("height","100vh"),o.style.setProperty("pointer-events","auto"),o.style.setProperty("background-color","rgba(0,0,0,0.1)"),o.style.setProperty("z-index","1001");let l=t;return"function"==typeof l?er(l,n):t=n,n.style.setProperty("position","absolute"),i.style.setProperty("max-height","calc(100vh - 16px)"),eo(i,(()=>{let t=C(()=>!!e.treeState);return()=>t()?(()=>{let t=rU();return eo(t,(()=>{let t=C(()=>!!e.treeState?.root.getParent());return()=>t()?(()=>{let t=rG();return t.firstChild.$$click=()=>{let t=e.treeState,r=t.root.getParent();r&&(t.expandedIds.add(r.uniqueId),e.setTreeState({...t,root:r}))},t})():null})(),null),eo(t,F(t3,{get node(){return e.treeState.root},get expandedIds(){return e.treeState.expandedIds},get highlightedId(){return e.treeState.highlightedId},expandId:t=>{let r=e.treeState;r.expandedIds.add(t),e.setTreeState(r)},get targets(){return e.targets},get setHighlightedBoundingBox(){return e.setHighlightedNode},parentComponent:null}),null),t})():"no tree"})()),y(e=>{let t=`${r()?.y||0}px`,o=`${r()?.x||0}px`;return t!==e._v$&&(null!=(e._v$=t)?n.style.setProperty("top",t):n.style.removeProperty("top")),o!==e._v$2&&(null!=(e._v$2=o)?n.style.setProperty("left",o):n.style.removeProperty("left")),e},{_v$:void 0,_v$2:void 0}),o})()}K(["click"]);let rW=J('<div><div class="flex justify-between items-center"></div><div class="font-medium mt-2">Disable Locator</div><div class="text-sm text-gray-700 mt-1">You will be able to enable Locator again by running `enableLocator()` in DevTools console.</div><div class="flex justify-end"><button class="bg-slate-100 py-2 px-4 rounded hover:bg-slate-300 active:bg-slate-200 cursor-pointer text-sm">Confirm');function rY(e){let t=eX();return(()=>{let r=rW(),o=r.firstChild,n=o.nextSibling.nextSibling.nextSibling.firstChild;return eo(o,F(tc,{}),null),eo(o,F(tv,{onClick:()=>e.onClose()}),null),n.addEventListener("click",()=>{t.setOptions({disabled:!0})}),y(()=>ee(r,ta()+" w-96")),r})()}let rZ=J('<div tabindex="0"><div><div class="bg-white rounded-md py-2 shadow-xl text-xs overflow-auto flex flex-col">'),rq=J('<a><div class="text-xs text-gray-500">');function rJ(e){var t;let r,o,n;let i=eX();t=()=>{n&&n.focus()},x(()=>E(t));let[l,a]=v(null),s=()=>{var t,r;return t=e.contextMenuState.target,"react"===(r=e.adapterId)&&e_.getParentsPaths?e_.getParentsPaths(t):"svelte"===r&&eN.getParentsPaths?eN.getParentsPaths(t):"vue"===r&&eM.getParentsPaths?eM.getParentsPaths(t):"jsx"===r&&eO.getParentsPaths?eO.getParentsPaths(t):(0,ec.nr)()&&eN.getParentsPaths?eN.getParentsPaths(t):(0,ec.$0)()&&eM.getParentsPaths?eM.getParentsPaths(t):(0,ec.wF)()&&e_.getParentsPaths?e_.getParentsPaths(t):(0,ec.BJ)()&&eO.getParentsPaths?eO.getParentsPaths(t):[]};function c(e){if(null==l){a(0);return}let t=l()??-1;"down"===e&&(t+=1),"up"===e&&(t-=1),t<0&&(t=s().length-1),t>s().length-1&&(t=0),a(t),window.setTimeout(()=>{null!=l&&o?.querySelector(`:nth-child(${(l()||0)+1})`)?.scrollIntoView({block:"nearest"})},0)}function u(t){switch(t.key){case"Escape":t.preventDefault(),t.stopPropagation(),e.close();break;case"ArrowDown":t.preventDefault(),c("down");break;case"ArrowUp":t.preventDefault(),c("up");break;case"Enter":case" ":if(t.preventDefault(),null!==l()){let t=s()[l()];t&&eF(t.link,e.targets,i),a(null)}e.close()}}return(()=>{let t=rZ(),a=t.firstChild,c=a.firstChild;t.$$keydown=u,t.$$click=t=>{t.currentTarget===t.target&&e.close()};let d=n;"function"==typeof d?er(d,t):n=t,t.style.setProperty("position","fixed"),t.style.setProperty("top","0"),t.style.setProperty("left","0"),t.style.setProperty("width","100vw"),t.style.setProperty("height","100vh"),t.style.setProperty("pointer-events","auto"),t.style.setProperty("background-color","rgba(0,0,0,0.1)"),t.style.setProperty("z-index","1001");let p=r;"function"==typeof p?er(p,a):r=a,a.style.setProperty("position","absolute");let f=o;return"function"==typeof f?er(f,c):o=c,c.style.setProperty("max-height","calc(100vh - 16px)"),eo(c,F(Y,{get each(){return s()},children:(t,r)=>(()=>{let o=rq(),n=o.firstChild;return o.$$click=r=>{r.preventDefault(),r.stopPropagation(),eF(t.link,e.targets,i),e.close()},eo(o,()=>t.title,n),eo(n,()=>(function(e){let t=e.split("/");if(1===t.length)return t[0]||"unnamed";let r=t[t.length-1]||"unnamed";return r.startsWith("index.")?`${t[t.length-2]}/${r}`:r})(t.link?.filePath||"")),y(n=>{let a="px-4 py-2 w-60 hover:bg-slate-50 text-left text-sm font-medium "+(r()===l()?"bg-slate-100":""),s=(0,eV.DF)(t.link,e.targets,i);return a!==n._v$3&&ee(o,n._v$3=a),s!==n._v$4&&Q(o,"href",n._v$4=s),n},{_v$3:void 0,_v$4:void 0}),o})()})),y(t=>{let r=`${e.contextMenuState.y||0}px`,o=`${e.contextMenuState.x||0}px`;return r!==t._v$&&(null!=(t._v$=r)?a.style.setProperty("top",r):a.style.removeProperty("top")),o!==t._v$2&&(null!=(t._v$2=o)?a.style.setProperty("left",o):a.style.removeProperty("left")),t},{_v$:void 0,_v$2:void 0}),t})()}K(["click","keydown"]);let rK=J('<div><div class="mt-2 text-xs text-gray-600">Support me on <a class="underline hover:text-sky-900 text-sky-700" href="https://github.com/sponsors/infi-pc" target="_blank">GitHub sponsors'),rQ=J('<div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/70 pointer-events-auto">');function r0(e){let[t,r]=v(["off"]),[o,n]=v(!1),[i,l]=v(null),[a,s]=v(null),[c,u]=v(null),d=eX();function p(e){n(ed(e))}function f(e){n(ed(e,!0))}function h(e){let t=e.target;if(t&&t instanceof HTMLElement){if(tq(t))return;n(ed(e,!0)),N(()=>{l(t)},!1)}}function g(e){ed(e)&&(e.preventDefault(),e.stopPropagation())}function m(e,t,o){r(["context",{target:e,x:t,y:o}])}function b(t){let r=eH(t,e.adapterId);if(r){let e=r.thisElement.link;e&&navigator.clipboard.writeText(e.filePath)}}function w(e){if(!ed(e,!0))return;e.preventDefault(),e.stopPropagation();let t=e.clientX,r=e.clientY,o=e.target;o&&o instanceof HTMLElement&&m(o,t,r)}function E(r){if(!ed(r)&&"options"!==t()[0])return;let o=r.target;if(o&&o instanceof HTMLElement){if(o.shadowRoot||tq(o))return;let t=eH(o,e.adapterId);if(t){let o=t.thisElement.link;o?(r.preventDefault(),r.stopPropagation(),(!(0,tu.p)()||(0,ec.nr)())&&!d.getOptions().welcomeScreenDismissed?s(["choose-editor",o]):eF(o,e.targets,d)):(console.error("[LocatorJS]: Could not find link: Element info: ",t),s(["no-link"]))}else console.error("[LocatorJS]: Could not find element info. Element: ",o),s(["no-link"])}}function k(){l(null)}x(()=>{o()&&i()?document.body.classList.add("locatorjs-active-pointer"):document.body.classList.remove("locatorjs-active-pointer")});let P=[document];for(let e of(document.querySelectorAll("*").forEach(e=>{"locatorjs-wrapper"!==e.id&&e.shadowRoot&&P.push(e.shadowRoot)}),P))e.addEventListener("mouseover",h,{capture:!0}),e.addEventListener("keydown",f),e.addEventListener("keyup",p),e.addEventListener("click",E,{capture:!0}),e.addEventListener("contextmenu",w,{capture:!0}),e.addEventListener("mousedown",g,{capture:!0}),e.addEventListener("mouseup",g,{capture:!0}),e.addEventListener("scroll",k);function _(e){var t;let o="svelte"===t&&eN.getTree?eN.getTree(e):"vue"===t&&eM.getTree?eM.getTree(e):"jsx"===t&&eO.getTree?eO.getTree(e):(0,ec.nr)()&&eN.getTree?eN.getTree(e):(0,ec.$0)()&&eM.getTree?eM.getTree(e):(0,ec.wF)()&&e_.getTree?e_.getTree(e):(0,ec.BJ)()&&eO.getTree?eO.getTree(e):null;o&&r(["tree",o])}function S(){r(["options"])}return $(()=>{for(let e of P)e.removeEventListener("keyup",p),e.removeEventListener("keydown",f),e.removeEventListener("mouseover",h,{capture:!0}),e.removeEventListener("click",E,{capture:!0}),e.removeEventListener("contextmenu",w,{capture:!0}),e.removeEventListener("mousedown",g,{capture:!0}),e.removeEventListener("mouseup",g,{capture:!0}),e.removeEventListener("scroll",k)}),[C((()=>{let o=C(()=>"tree"===t()[0]);return()=>o()?F(rX,{get treeState(){return t()[1]},close:()=>r(["off"]),setTreeState:e=>r(["tree",e]),get adapterId(){return e.adapterId},get targets(){return e.targets},setHighlightedNode:u}):null})()),C((()=>{let o=C(()=>"context"===t()[0]);return()=>o()?F(rJ,{get contextMenuState(){return t()[1]},close:()=>r(["off"]),get adapterId(){return e.adapterId},get targets(){return e.targets},setHighlightedNode:u}):null})()),C((()=>{let r=C(()=>!!((o()||"options"===t()[0])&&i()));return()=>r()?F(tn,{get currentElement(){return i()},get adapterId(){return e.adapterId},get targets(){return e.targets},showTreeFromElement:_,showParentsPath:m,copyToClipboard:b}):null})()),C((()=>{let t=C(()=>!!o());return()=>t()?(()=>{let t=rK(),r=t.firstChild,o=r.firstChild.nextSibling;return eo(t,F(th,{openOptions:S,get adapter(){return e.adapterId}}),r),o.$$click=e=>{e.preventDefault(),e.stopPropagation(),window.open("https://github.com/sponsors/infi-pc")},y(()=>ee(t,ta())),t})():null})()),C((()=>{let e=C(()=>!!c());return()=>e()?F(tl,{get node(){return c()}}):null})()),C((()=>{let r=C(()=>!!(!(0,tu.p)()&&!1!==d.getOptions().showIntro));return()=>r()?F(tb,{openOptions:S,get hide(){return!!o()||"off"!==t()[0]},get adapter(){return e.adapterId}}):null})()),C((()=>{let o=C(()=>"options"===t()[0]);return()=>o()?F(tz,{get adapterId(){return e.adapterId},get targets(){return e.targets},onClose:()=>{r(["off"])},showDisableDialog:()=>{r(["disable-confirmation"])},get currentElement(){return i()}}):null})()),C((()=>{let e=C(()=>"disable-confirmation"===t()[0]);return()=>e()?F(rY,{onClose:()=>{r(["off"])}}):null})()),C((()=>{let t=C(()=>!!a());return()=>t()&&(()=>{let t=rQ();return t.$$click=e=>{e.currentTarget===e.target&&s(null)},eo(t,(()=>{let e=C(()=>"no-link"===a()[0]);return()=>e()&&F(tW,{})})(),null),eo(t,(()=>{let t=C(()=>"choose-editor"===a()[0]);return()=>t()&&F(tZ,{get targets(){return e.targets},get originalLinkProps(){return a()[1]},onClose:()=>{s(null)}})})(),null),t})()})())]}function r1(e){let t=eX(),r=()=>t.getOptions().disabled||!1;return x(()=>{r()&&(0,tu.p)()?document.head.dataset.locatorDisabled="disabled":delete document.head.dataset.locatorDisabled}),F(Z,{get when(){return!r()},get children(){return F(r0,e)}})}function r2(e,t,r){!function(e,t,r,o={}){let n;w(r=>{n=r,t===document?e():eo(t,e(),t.firstChild?null:void 0,void 0)},o.owner),()=>{n(),t.textContent=""}}(()=>F(eG,{get children(){return F(r1,{get targets(){return Object.fromEntries(Object.entries(r).map(([e,t])=>[e,"string"==typeof t?{url:t,label:e}:t]))},adapterId:t})}}),e)}K(["click"])},94177:function(e,t,r){"use strict";r.d(t,{I8:function(){return i},_o:function(){return o},tr:function(){return n}});let o="_self",n=6,i="Helvetica, sans-serif, Arial"},18078:function(e,t,r){"use strict";r.d(t,{DF:function(){return l},mx:function(){return a},lk:function(){return i}});let o=(e,t,r)=>r||t.getOptions().templateOrTemplateId||document.documentElement.dataset.locatorTarget||Object.entries(e)[0][0],n=null;function i(e){n=e}function l(e,t,r,i){let l;let a={filePath:e.filePath,projectPath:r.getOptions().projectPath||n||e.projectPath,line:String(e.line),column:String(e.column),linePlusOne:String(e.line+1),columnPlusOne:String(e.column+1),lineMinusOne:String(e.line-1),columnMinusOne:String(e.column-1)},s=function(e,t,r){let n=o(e,t,r),i=e[n];return i?i.url:n}(t,r,i),c=r.getOptions().replacePath,u=(l=s,Object.entries(a).forEach(([e,t])=>{l=l.replace("${"+e+"}",t)}),l);return c&&(u=function(e,t,r){try{return e.replace(RegExp(`${t}`),r)}catch(t){return e}}(u,c.from,c.to)),u}function a(e,t,r){return l({filePath:e.fileName,projectPath:e.projectPath||"",line:e.lineNumber,column:e.columnNumber||0},t,r)}},60359:function(e,t,r){"use strict";function o(){return"undefined"!=typeof document&&!!document.querySelector(".locatorjs-extension-script")}r.d(t,{p:function(){return o}})},19716:function(e,t,r){"use strict";r.d(t,{op:function(){return s}});var o=r(17318),n=r(94177),i=`/*
! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
*/

html {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

[type='text'],input:where(:not([type])),[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, input:where(:not([type])):focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #2563eb;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #6b7280;
  opacity: 1;
}

input::placeholder,textarea::placeholder {
  color: #6b7280;
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-date-and-time-value {
  min-height: 1.5em;
}

::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field {
  padding-top: 0;
  padding-bottom: 0;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
}

[multiple],[size]:where(select:not([size="1"])) {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
          print-color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #2563eb;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
  border-radius: 0px;
}

[type='radio'] {
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

[type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='checkbox']:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus {
  outline: 1px solid ButtonText;
  outline: 1px auto -webkit-focus-ring-color;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.pointer-events-none {
  pointer-events: none;
}

.pointer-events-auto {
  pointer-events: auto;
}

.visible {
  visibility: visible;
}

.invisible {
  visibility: hidden;
}

.collapse {
  visibility: collapse;
}

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.-bottom-7 {
  bottom: -1.75rem;
}

.-left-1 {
  left: -0.25rem;
}

.-left-2 {
  left: -0.5rem;
}

.-left-4 {
  left: -1rem;
}

.-right-2 {
  right: -0.5rem;
}

.-top-1 {
  top: -0.25rem;
}

.-top-2 {
  top: -0.5rem;
}

.-top-4 {
  top: -1rem;
}

.-top-7 {
  top: -1.75rem;
}

.bottom-3 {
  bottom: 0.75rem;
}

.left-0 {
  left: 0px;
}

.left-1 {
  left: 0.25rem;
}

.left-1\\/2 {
  left: 50%;
}

.left-3 {
  left: 0.75rem;
}

.top-0 {
  top: 0px;
}

.top-1 {
  top: 0.25rem;
}

.top-1\\/2 {
  top: 50%;
}

.z-10 {
  z-index: 10;
}

.m-1 {
  margin: 0.25rem;
}

.m-2 {
  margin: 0.5rem;
}

.m-4 {
  margin: 1rem;
}

.-mx-4 {
  margin-left: -1rem;
  margin-right: -1rem;
}

.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.ml-3 {
  margin-left: 0.75rem;
}

.mt-1 {
  margin-top: 0.25rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mt-3 {
  margin-top: 0.75rem;
}

.mt-4 {
  margin-top: 1rem;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.table {
  display: table;
}

.contents {
  display: contents;
}

.hidden {
  display: none;
}

.h-4 {
  height: 1rem;
}

.h-6 {
  height: 1.5rem;
}

.h-screen {
  height: 100vh;
}

.max-h-full {
  max-height: 100%;
}

.w-11 {
  width: 2.75rem;
}

.w-4 {
  width: 1rem;
}

.w-6 {
  width: 1.5rem;
}

.w-60 {
  width: 15rem;
}

.w-80 {
  width: 20rem;
}

.w-96 {
  width: 24rem;
}

.w-\\[560px\\] {
  width: 560px;
}

.w-full {
  width: 100%;
}

.w-screen {
  width: 100vw;
}

.max-w-2xl {
  max-width: 42rem;
}

.max-w-full {
  max-width: 100%;
}

.max-w-md {
  max-width: 28rem;
}

.max-w-xl {
  max-width: 36rem;
}

.flex-shrink {
  flex-shrink: 1;
}

.flex-grow {
  flex-grow: 1;
}

.grow {
  flex-grow: 1;
}

.border-collapse {
  border-collapse: collapse;
}

.-translate-x-1 {
  --tw-translate-x: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-full {
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-1 {
  --tw-translate-y: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-full {
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.cursor-auto {
  cursor: auto;
}

.cursor-default {
  cursor: default;
}

.cursor-pointer {
  cursor: pointer;
}

.resize {
  resize: both;
}

.list-disc {
  list-style-type: disc;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-1 {
  gap: 0.25rem;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-4 {
  gap: 1rem;
}

.self-stretch {
  align-self: stretch;
}

.overflow-auto {
  overflow: auto;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-scroll {
  overflow: scroll;
}

.text-ellipsis {
  text-overflow: ellipsis;
}

.whitespace-nowrap {
  white-space: nowrap;
}

.whitespace-pre-wrap {
  white-space: pre-wrap;
}

.break-words {
  overflow-wrap: break-word;
}

.break-all {
  word-break: break-all;
}

.rounded {
  border-radius: 0.25rem;
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-md {
  border-radius: 0.375rem;
}

.rounded-sm {
  border-radius: 0.125rem;
}

.rounded-xl {
  border-radius: 0.75rem;
}

.border {
  border-width: 1px;
}

.border-2 {
  border-width: 2px;
}

.border-solid {
  border-style: solid;
}

.border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(59 130 246 / var(--tw-border-opacity));
}

.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}

.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.border-gray-600 {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}

.border-green-500 {
  --tw-border-opacity: 1;
  border-color: rgb(34 197 94 / var(--tw-border-opacity));
}

.border-purple-500 {
  --tw-border-opacity: 1;
  border-color: rgb(168 85 247 / var(--tw-border-opacity));
}

.border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(239 68 68 / var(--tw-border-opacity));
}

.border-sky-500 {
  --tw-border-opacity: 1;
  border-color: rgb(14 165 233 / var(--tw-border-opacity));
}

.border-slate-200 {
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
}

.border-slate-300 {
  --tw-border-opacity: 1;
  border-color: rgb(203 213 225 / var(--tw-border-opacity));
}

.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}

.bg-black\\/60 {
  background-color: rgb(0 0 0 / 0.6);
}

.bg-black\\/70 {
  background-color: rgb(0 0 0 / 0.7);
}

.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}

.bg-blue-500\\/30 {
  background-color: rgb(59 130 246 / 0.3);
}

.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
}

.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}

.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}

.bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}

.bg-green-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 252 231 / var(--tw-bg-opacity));
}

.bg-green-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(240 253 244 / var(--tw-bg-opacity));
}

.bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity));
}

.bg-green-500\\/30 {
  background-color: rgb(34 197 94 / 0.3);
}

.bg-orange-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 115 22 / var(--tw-bg-opacity));
}

.bg-orange-500\\/30 {
  background-color: rgb(249 115 22 / 0.3);
}

.bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity));
}

.bg-red-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 242 242 / var(--tw-bg-opacity));
}

.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}

.bg-slate-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
}

.bg-slate-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(203 213 225 / var(--tw-bg-opacity));
}

.bg-slate-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity));
}

.bg-slate-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity));
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.bg-yellow-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 249 195 / var(--tw-bg-opacity));
}

.p-0 {
  padding: 0px;
}

.p-1 {
  padding: 0.25rem;
}

.p-2 {
  padding: 0.5rem;
}

.p-3 {
  padding: 0.75rem;
}

.p-4 {
  padding: 1rem;
}

.p-6 {
  padding: 1.5rem;
}

.p-8 {
  padding: 2rem;
}

.px-0 {
  padding-left: 0px;
  padding-right: 0px;
}

.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}

.py-0\\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.pb-0 {
  padding-bottom: 0px;
}

.pb-0\\.5 {
  padding-bottom: 0.125rem;
}

.pb-1 {
  padding-bottom: 0.25rem;
}

.pl-2 {
  padding-left: 0.5rem;
}

.pl-4 {
  padding-left: 1rem;
}

.pr-2 {
  padding-right: 0.5rem;
}

.pt-2 {
  padding-top: 0.5rem;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.font-bold {
  font-weight: 700;
}

.font-medium {
  font-weight: 500;
}

.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}

.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity));
}

.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}

.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}

.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity));
}

.text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(22 163 74 / var(--tw-text-opacity));
}

.text-green-700 {
  --tw-text-opacity: 1;
  color: rgb(21 128 61 / var(--tw-text-opacity));
}

.text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(22 101 52 / var(--tw-text-opacity));
}

.text-indigo-600 {
  --tw-text-opacity: 1;
  color: rgb(79 70 229 / var(--tw-text-opacity));
}

.text-orange-500 {
  --tw-text-opacity: 1;
  color: rgb(249 115 22 / var(--tw-text-opacity));
}

.text-purple-500 {
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity));
}

.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}

.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity));
}

.text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(153 27 27 / var(--tw-text-opacity));
}

.text-sky-500 {
  --tw-text-opacity: 1;
  color: rgb(14 165 233 / var(--tw-text-opacity));
}

.text-sky-700 {
  --tw-text-opacity: 1;
  color: rgb(3 105 161 / var(--tw-text-opacity));
}

.text-slate-400 {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

.text-slate-500 {
  --tw-text-opacity: 1;
  color: rgb(100 116 139 / var(--tw-text-opacity));
}

.text-slate-700 {
  --tw-text-opacity: 1;
  color: rgb(51 65 85 / var(--tw-text-opacity));
}

.text-slate-800 {
  --tw-text-opacity: 1;
  color: rgb(30 41 59 / var(--tw-text-opacity));
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.underline {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.outline {
  outline-style: solid;
}

.ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.ring-blue-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));
}

.ring-blue-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 64 175 / var(--tw-ring-opacity));
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.transition {
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-300 {
  transition-duration: 300ms;
}

.hover\\:border-slate-400:hover {
  --tw-border-opacity: 1;
  border-color: rgb(148 163 184 / var(--tw-border-opacity));
}

.hover\\:bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity));
}

.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.hover\\:bg-gray-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}

.hover\\:bg-green-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(21 128 61 / var(--tw-bg-opacity));
}

.hover\\:bg-purple-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(147 51 234 / var(--tw-bg-opacity));
}

.hover\\:bg-red-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(254 202 202 / var(--tw-bg-opacity));
}

.hover\\:bg-sky-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(224 242 254 / var(--tw-bg-opacity));
}

.hover\\:bg-slate-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
}

.hover\\:bg-slate-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(203 213 225 / var(--tw-bg-opacity));
}

.hover\\:bg-slate-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity));
}

.hover\\:bg-white\\/30:hover {
  background-color: rgb(255 255 255 / 0.3);
}

.hover\\:text-gray-100:hover {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity));
}

.hover\\:text-sky-900:hover {
  --tw-text-opacity: 1;
  color: rgb(12 74 110 / var(--tw-text-opacity));
}

.hover\\:text-slate-600:hover {
  --tw-text-opacity: 1;
  color: rgb(71 85 105 / var(--tw-text-opacity));
}

.hover\\:text-slate-800:hover {
  --tw-text-opacity: 1;
  color: rgb(30 41 59 / var(--tw-text-opacity));
}

.hover\\:underline:hover {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}

.focus\\:border-indigo-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(99 102 241 / var(--tw-border-opacity));
}

.focus\\:ring-indigo-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(199 210 254 / var(--tw-ring-opacity));
}

.focus\\:ring-indigo-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity));
}

.active\\:bg-red-100:active {
  --tw-bg-opacity: 1;
  background-color: rgb(254 226 226 / var(--tw-bg-opacity));
}

.active\\:bg-slate-200:active {
  --tw-bg-opacity: 1;
  background-color: rgb(226 232 240 / var(--tw-bg-opacity));
}

.group\\/tooltip:hover .group-hover\\/tooltip\\:visible {
  visibility: visible;
}

.group\\/tooltip:hover .group-hover\\/tooltip\\:opacity-100 {
  opacity: 1;
}

@media (min-width: 640px) {
  .sm\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}`,l=r(18078),a=r(60359);"undefined"!=typeof window&&(0,a.p)()&&setTimeout(()=>(function({adapter:e,targets:t,projectPath:a}={}){if("undefined"==typeof window||"undefined"==typeof document||document.getElementById("locatorjs-wrapper"))return;a&&(0,l.lk)(a);let c=document.createElement("style");c.id="locatorjs-style",c.innerHTML=`
      #locatorjs-layer {
        all: initial;
        pointer-events: none;
        font-family: ${n.I8};
      }
      #locatorjs-layer * {
        box-sizing: border-box;
      }
      #locatorjs-labels-wrapper {
        display: flex;
        gap: 8px;
      }
      .locatorjs-tree-node:hover {
        background-color: #eee;
      }
      ${i}
    `;let u=document.createElement("style");u.id="locatorjs-global-style",u.innerHTML=`
      #locatorjs-wrapper {
        z-index: ${s};
        pointer-events: none;
        position: fixed;
      }
      .locatorjs-active-pointer * {
        cursor: pointer !important;
      }
    `;let d=document.createElement("div");d.setAttribute("id","locatorjs-wrapper");let p=d.attachShadow({mode:"open"}),f=document.createElement("div");f.setAttribute("id","locatorjs-layer"),p.appendChild(c),p.appendChild(f),document.body.appendChild(d),document.head.appendChild(u);{let{initRender:n}=r(56416);n(f,e,t||o.LX)}})({}),0);let s=2147483647},17318:function(e,t,r){"use strict";r.d(t,{LX:function(){return d},ue:function(){return c},BJ:function(){return m},wF:function(){return b},nr:function(){return h},$0:function(){return g},Sh:function(){return a},v0:function(){return u},jj:function(){return f},Jm:function(){return s}});var o=r(45755);let n="16.9.0",i=!1;function l(){return"undefined"!=typeof localStorage&&null!=localStorage||(i||(console.warn("[LocatorJS]: No local storage available. Please check your browser settings."),i=!0),!1)}function a(){if(!l())return{};let e={},t=localStorage.getItem("LOCATOR_OPTIONS");if(t){let r=JSON.parse(t);"string"==typeof r.projectPath&&(e.projectPath=r.projectPath),"string"==typeof r.templateOrTemplateId&&(e.templateOrTemplateId=r.templateOrTemplateId),"string"==typeof r.adapterId&&(e.adapterId=r.adapterId),"object"==typeof r.replacePath&&"string"==typeof r.replacePath.from&&"string"==typeof r.replacePath.to&&(e.replacePath={from:r.replacePath.from,to:r.replacePath.to}),"boolean"==typeof r.disabled&&(e.disabled=r.disabled),"boolean"==typeof r.showIntro&&(e.showIntro=r.showIntro),"string"==typeof r.hrefTarget&&(e.hrefTarget=r.hrefTarget),"boolean"==typeof r.welcomeScreenDismissed&&(e.welcomeScreenDismissed=r.welcomeScreenDismissed)}return e}function s(e){l()&&localStorage.setItem("LOCATOR_OPTIONS",JSON.stringify(e))}function c(){l()&&localStorage.removeItem("LOCATOR_OPTIONS")}function u(e){if(!l())return;let t=localStorage.getItem("LOCATOR_OPTIONS");addEventListener("storage",r=>{if("LOCATOR_OPTIONS"!==r.key)return;let o=localStorage.getItem("LOCATOR_OPTIONS");o!==t&&(t=o,e(a()))})}let d={vscode:{url:"vscode://file/${projectPath}${filePath}:${line}:${column}",label:"VSCode"},webstorm:{url:"webstorm://open?file=${projectPath}${filePath}&line=${line}&column=${column}",label:"WebStorm"}},p="undefined"!=typeof navigator&&navigator.platform.toUpperCase().indexOf("MAC")>=0,f={alt:p?"⌥ Option":"Alt",ctrl:p?"⌃ Ctrl":"Ctrl",meta:p?"⌘ Command":"Windows",shift:p?"⇧ Shift":"Shift"};function h(){return!!window.__SVELTE_HMR||!!window.__SAPPER__}function g(){return!!window.__VUE__}function m(){return!!window.__LOCATOR_DATA__}function b(){if(window.__REACT_DEVTOOLS_GLOBAL_HOOK__){let e=window.__REACT_DEVTOOLS_GLOBAL_HOOK__?.renderers;if(e){let t=[];if(Array.from(e.values()).filter(e=>(function({rendererPackageName:e,version:t,bundleType:r},i){return"react-dom"===e&&"string"==typeof t&&/^\d+\.\d+\.\d+(-\S+)?$/.test(t)&&(0,o.gte)(t,n)?1===r||(i&&i(`Unsupported React renderer, only bundle type 1 (development) is supported but ${r} (${0===r?"production":"unknown"}) is found`),!1):(i&&i(`Unsupported React renderer (only react-dom v${n}+ is supported). Renderer: ${e||"unknown"}, Version: ${t||"unknown"}`),!1)})(e,e=>{t.push(e)})).length)return!0}}return!1}},20357:function(e,t,r){"use strict";var o,n;e.exports=(null==(o=r.g.process)?void 0:o.env)&&"object"==typeof(null==(n=r.g.process)?void 0:n.env)?r.g.process:r(88081)},88081:function(e){!function(){var t={229:function(e){var t,r,o,n=e.exports={};function i(){throw Error("setTimeout has not been defined")}function l(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(e){r=l}}();var s=[],c=!1,u=-1;function d(){c&&o&&(c=!1,o.length?s=o.concat(s):u=-1,s.length&&p())}function p(){if(!c){var e=a(d);c=!0;for(var t=s.length;t;){for(o=s,s=[];++u<t;)o&&o[u].run();u=-1,t=s.length}o=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function h(){}n.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new f(e,t)),1!==s.length||c||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=h,n.addListener=h,n.once=h,n.off=h,n.removeListener=h,n.removeAllListeners=h,n.emit=h,n.prependListener=h,n.prependOnceListener=h,n.listeners=function(e){return[]},n.binding=function(e){throw Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}},l=!0;try{t[e](i,i.exports,o),l=!1}finally{l&&delete r[e]}return i.exports}o.ab="//";var n=o(229);e.exports=n}()},1961:function(e,t,r){let o=Symbol("SemVer ANY");class n{static get ANY(){return o}constructor(e,t){if(t=i(t),e instanceof n){if(!!t.loose===e.loose)return e;e=e.value}c("comparator",e=e.trim().split(/\s+/).join(" "),t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===o?this.value="":this.value=this.operator+this.semver.version,c("comp",this)}parse(e){let t=this.options.loose?l[a.COMPARATORLOOSE]:l[a.COMPARATOR],r=e.match(t);if(!r)throw TypeError(`Invalid comparator: ${e}`);this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new u(r[2],this.options.loose):this.semver=o}toString(){return this.value}test(e){if(c("Comparator.test",e,this.options.loose),this.semver===o||e===o)return!0;if("string"==typeof e)try{e=new u(e,this.options)}catch(e){return!1}return s(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof n))throw TypeError("a Comparator is required");return""===this.operator?""===this.value||new d(e.value,t).test(this.value):""===e.operator?""===e.value||new d(this.value,t).test(e.semver):!((t=i(t)).includePrerelease&&("<0.0.0-0"===this.value||"<0.0.0-0"===e.value)||!t.includePrerelease&&(this.value.startsWith("<0.0.0")||e.value.startsWith("<0.0.0")))&&!!(this.operator.startsWith(">")&&e.operator.startsWith(">")||this.operator.startsWith("<")&&e.operator.startsWith("<")||this.semver.version===e.semver.version&&this.operator.includes("=")&&e.operator.includes("=")||s(this.semver,"<",e.semver,t)&&this.operator.startsWith(">")&&e.operator.startsWith("<")||s(this.semver,">",e.semver,t)&&this.operator.startsWith("<")&&e.operator.startsWith(">"))}}e.exports=n;let i=r(72018),{safeRe:l,t:a}=r(37127),s=r(23920),c=r(86026),u=r(95012),d=r(85461)},85461:function(e,t,r){class o{constructor(e,t){if(t=i(t),e instanceof o){if(!!t.loose===e.loose&&!!t.includePrerelease===e.includePrerelease)return e;return new o(e.raw,t)}if(e instanceof l)return this.raw=e.value,this.set=[[e]],this.format(),this;if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e.trim().split(/\s+/).join(" "),this.set=this.raw.split("||").map(e=>this.parseRange(e.trim())).filter(e=>e.length),!this.set.length)throw TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let e=this.set[0];if(this.set=this.set.filter(e=>!m(e[0])),0===this.set.length)this.set=[e];else if(this.set.length>1){for(let e of this.set)if(1===e.length&&b(e[0])){this.set=[e];break}}}this.format()}format(){return this.range=this.set.map(e=>e.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(e){let t=((this.options.includePrerelease&&h)|(this.options.loose&&g))+":"+e,r=n.get(t);if(r)return r;let o=this.options.loose,i=o?c[u.HYPHENRANGELOOSE]:c[u.HYPHENRANGE];a("hyphen replace",e=e.replace(i,L(this.options.includePrerelease))),a("comparator trim",e=e.replace(c[u.COMPARATORTRIM],d)),a("tilde trim",e=e.replace(c[u.TILDETRIM],p)),a("caret trim",e=e.replace(c[u.CARETTRIM],f));let s=e.split(" ").map(e=>v(e,this.options)).join(" ").split(/\s+/).map(e=>S(e,this.options));o&&(s=s.filter(e=>(a("loose invalid filter",e,this.options),!!e.match(c[u.COMPARATORLOOSE])))),a("range list",s);let b=new Map;for(let e of s.map(e=>new l(e,this.options))){if(m(e))return[e];b.set(e.value,e)}b.size>1&&b.has("")&&b.delete("");let w=[...b.values()];return n.set(t,w),w}intersects(e,t){if(!(e instanceof o))throw TypeError("a Range is required");return this.set.some(r=>w(r,t)&&e.set.some(e=>w(e,t)&&r.every(r=>e.every(e=>r.intersects(e,t)))))}test(e){if(!e)return!1;if("string"==typeof e)try{e=new s(e,this.options)}catch(e){return!1}for(let t=0;t<this.set.length;t++)if(T(this.set[t],e,this.options))return!0;return!1}}e.exports=o;let n=new(r(58469)),i=r(72018),l=r(1961),a=r(86026),s=r(95012),{safeRe:c,t:u,comparatorTrimReplace:d,tildeTrimReplace:p,caretTrimReplace:f}=r(37127),{FLAG_INCLUDE_PRERELEASE:h,FLAG_LOOSE:g}=r(54632),m=e=>"<0.0.0-0"===e.value,b=e=>""===e.value,w=(e,t)=>{let r=!0,o=e.slice(),n=o.pop();for(;r&&o.length;)r=o.every(e=>n.intersects(e,t)),n=o.pop();return r},v=(e,t)=>(a("comp",e,t),a("caret",e=E(e,t)),a("tildes",e=x(e,t)),a("xrange",e=k(e,t)),a("stars",e=_(e,t)),e),y=e=>!e||"x"===e.toLowerCase()||"*"===e,x=(e,t)=>e.trim().split(/\s+/).map(e=>C(e,t)).join(" "),C=(e,t)=>{let r=t.loose?c[u.TILDELOOSE]:c[u.TILDE];return e.replace(r,(t,r,o,n,i)=>{let l;return a("tilde",e,t,r,o,n,i),y(r)?l="":y(o)?l=`>=${r}.0.0 <${+r+1}.0.0-0`:y(n)?l=`>=${r}.${o}.0 <${r}.${+o+1}.0-0`:i?(a("replaceTilde pr",i),l=`>=${r}.${o}.${n}-${i} <${r}.${+o+1}.0-0`):l=`>=${r}.${o}.${n} <${r}.${+o+1}.0-0`,a("tilde return",l),l})},E=(e,t)=>e.trim().split(/\s+/).map(e=>$(e,t)).join(" "),$=(e,t)=>{a("caret",e,t);let r=t.loose?c[u.CARETLOOSE]:c[u.CARET],o=t.includePrerelease?"-0":"";return e.replace(r,(t,r,n,i,l)=>{let s;return a("caret",e,t,r,n,i,l),y(r)?s="":y(n)?s=`>=${r}.0.0${o} <${+r+1}.0.0-0`:y(i)?s="0"===r?`>=${r}.${n}.0${o} <${r}.${+n+1}.0-0`:`>=${r}.${n}.0${o} <${+r+1}.0.0-0`:l?(a("replaceCaret pr",l),s="0"===r?"0"===n?`>=${r}.${n}.${i}-${l} <${r}.${n}.${+i+1}-0`:`>=${r}.${n}.${i}-${l} <${r}.${+n+1}.0-0`:`>=${r}.${n}.${i}-${l} <${+r+1}.0.0-0`):(a("no pr"),s="0"===r?"0"===n?`>=${r}.${n}.${i}${o} <${r}.${n}.${+i+1}-0`:`>=${r}.${n}.${i}${o} <${r}.${+n+1}.0-0`:`>=${r}.${n}.${i} <${+r+1}.0.0-0`),a("caret return",s),s})},k=(e,t)=>(a("replaceXRanges",e,t),e.split(/\s+/).map(e=>P(e,t)).join(" ")),P=(e,t)=>{e=e.trim();let r=t.loose?c[u.XRANGELOOSE]:c[u.XRANGE];return e.replace(r,(r,o,n,i,l,s)=>{a("xRange",e,r,o,n,i,l,s);let c=y(n),u=c||y(i),d=u||y(l);return"="===o&&d&&(o=""),s=t.includePrerelease?"-0":"",c?r=">"===o||"<"===o?"<0.0.0-0":"*":o&&d?(u&&(i=0),l=0,">"===o?(o=">=",u?(n=+n+1,i=0):i=+i+1,l=0):"<="===o&&(o="<",u?n=+n+1:i=+i+1),"<"===o&&(s="-0"),r=`${o+n}.${i}.${l}${s}`):u?r=`>=${n}.0.0${s} <${+n+1}.0.0-0`:d&&(r=`>=${n}.${i}.0${s} <${n}.${+i+1}.0-0`),a("xRange return",r),r})},_=(e,t)=>(a("replaceStars",e,t),e.trim().replace(c[u.STAR],"")),S=(e,t)=>(a("replaceGTE0",e,t),e.trim().replace(c[t.includePrerelease?u.GTE0PRE:u.GTE0],"")),L=e=>(t,r,o,n,i,l,a,s,c,u,d,p)=>(r=y(o)?"":y(n)?`>=${o}.0.0${e?"-0":""}`:y(i)?`>=${o}.${n}.0${e?"-0":""}`:l?`>=${r}`:`>=${r}${e?"-0":""}`,s=y(c)?"":y(u)?`<${+c+1}.0.0-0`:y(d)?`<${c}.${+u+1}.0-0`:p?`<=${c}.${u}.${d}-${p}`:e?`<${c}.${u}.${+d+1}-0`:`<=${s}`,`${r} ${s}`.trim()),T=(e,t,r)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(let r=0;r<e.length;r++)if(a(e[r].semver),e[r].semver!==l.ANY&&e[r].semver.prerelease.length>0){let o=e[r].semver;if(o.major===t.major&&o.minor===t.minor&&o.patch===t.patch)return!0}return!1}return!0}},95012:function(e,t,r){let o=r(86026),{MAX_LENGTH:n,MAX_SAFE_INTEGER:i}=r(54632),{safeRe:l,t:a}=r(37127),s=r(72018),{compareIdentifiers:c}=r(43688);class u{constructor(e,t){if(t=s(t),e instanceof u){if(!!t.loose===e.loose&&!!t.includePrerelease===e.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>n)throw TypeError(`version is longer than ${n} characters`);o("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;let r=e.trim().match(t.loose?l[a.LOOSE]:l[a.FULL]);if(!r)throw TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>i||this.major<0)throw TypeError("Invalid major version");if(this.minor>i||this.minor<0)throw TypeError("Invalid minor version");if(this.patch>i||this.patch<0)throw TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(e=>{if(/^[0-9]+$/.test(e)){let t=+e;if(t>=0&&t<i)return t}return e}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(o("SemVer.compare",this.version,this.options,e),!(e instanceof u)){if("string"==typeof e&&e===this.version)return 0;e=new u(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof u||(e=new u(e,this.options)),c(this.major,e.major)||c(this.minor,e.minor)||c(this.patch,e.patch)}comparePre(e){if(e instanceof u||(e=new u(e,this.options)),this.prerelease.length&&!e.prerelease.length)return -1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{let r=this.prerelease[t],n=e.prerelease[t];if(o("prerelease compare",t,r,n),void 0===r&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===r)return -1;if(r===n)continue;else return c(r,n)}while(++t)}compareBuild(e){e instanceof u||(e=new u(e,this.options));let t=0;do{let r=this.build[t],n=e.build[t];if(o("build compare",t,r,n),void 0===r&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===r)return -1;if(r===n)continue;else return c(r,n)}while(++t)}inc(e,t,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t,r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t,r),this.inc("pre",t,r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t,r),this.inc("pre",t,r);break;case"major":(0!==this.minor||0!==this.patch||0===this.prerelease.length)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(0!==this.patch||0===this.prerelease.length)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":{let e=Number(r)?1:0;if(!t&&!1===r)throw Error("invalid increment argument: identifier is empty");if(0===this.prerelease.length)this.prerelease=[e];else{let o=this.prerelease.length;for(;--o>=0;)"number"==typeof this.prerelease[o]&&(this.prerelease[o]++,o=-2);if(-1===o){if(t===this.prerelease.join(".")&&!1===r)throw Error("invalid increment argument: identifier already exists");this.prerelease.push(e)}}if(t){let o=[t,e];!1===r&&(o=[t]),0===c(this.prerelease[0],t)?isNaN(this.prerelease[1])&&(this.prerelease=o):this.prerelease=o}break}default:throw Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}e.exports=u},22210:function(e,t,r){let o=r(83041);e.exports=(e,t)=>{let r=o(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null}},23920:function(e,t,r){let o=r(52605),n=r(97224),i=r(38993),l=r(4916),a=r(95215),s=r(51864);e.exports=(e,t,r,c)=>{switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e===r;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return o(e,r,c);case"!=":return n(e,r,c);case">":return i(e,r,c);case">=":return l(e,r,c);case"<":return a(e,r,c);case"<=":return s(e,r,c);default:throw TypeError(`Invalid operator: ${t}`)}}},68771:function(e,t,r){let o=r(95012),n=r(83041),{safeRe:i,t:l}=r(37127);e.exports=(e,t)=>{if(e instanceof o)return e;if("number"==typeof e&&(e=String(e)),"string"!=typeof e)return null;let r=null;if((t=t||{}).rtl){let o;let n=t.includePrerelease?i[l.COERCERTLFULL]:i[l.COERCERTL];for(;(o=n.exec(e))&&(!r||r.index+r[0].length!==e.length);)r&&o.index+o[0].length===r.index+r[0].length||(r=o),n.lastIndex=o.index+o[1].length+o[2].length;n.lastIndex=-1}else r=e.match(t.includePrerelease?i[l.COERCEFULL]:i[l.COERCE]);if(null===r)return null;let a=r[2],s=r[3]||"0",c=r[4]||"0",u=t.includePrerelease&&r[5]?`-${r[5]}`:"",d=t.includePrerelease&&r[6]?`+${r[6]}`:"";return n(`${a}.${s}.${c}${u}${d}`,t)}},80218:function(e,t,r){let o=r(95012);e.exports=(e,t,r)=>{let n=new o(e,r),i=new o(t,r);return n.compare(i)||n.compareBuild(i)}},90079:function(e,t,r){let o=r(75953);e.exports=(e,t)=>o(e,t,!0)},75953:function(e,t,r){let o=r(95012);e.exports=(e,t,r)=>new o(e,r).compare(new o(t,r))},18124:function(e,t,r){let o=r(83041);e.exports=(e,t)=>{let r=o(e,null,!0),n=o(t,null,!0),i=r.compare(n);if(0===i)return null;let l=i>0,a=l?r:n,s=l?n:r,c=!!a.prerelease.length;if(s.prerelease.length&&!c)return s.patch||s.minor?a.patch?"patch":a.minor?"minor":"major":"major";let u=c?"pre":"";return r.major!==n.major?u+"major":r.minor!==n.minor?u+"minor":r.patch!==n.patch?u+"patch":"prerelease"}},52605:function(e,t,r){let o=r(75953);e.exports=(e,t,r)=>0===o(e,t,r)},38993:function(e,t,r){let o=r(75953);e.exports=(e,t,r)=>o(e,t,r)>0},4916:function(e,t,r){let o=r(75953);e.exports=(e,t,r)=>o(e,t,r)>=0},46655:function(e,t,r){let o=r(95012);e.exports=(e,t,r,n,i)=>{"string"==typeof r&&(i=n,n=r,r=void 0);try{return new o(e instanceof o?e.version:e,r).inc(t,n,i).version}catch(e){return null}}},95215:function(e,t,r){let o=r(75953);e.exports=(e,t,r)=>0>o(e,t,r)},51864:function(e,t,r){let o=r(75953);e.exports=(e,t,r)=>0>=o(e,t,r)},73007:function(e,t,r){let o=r(95012);e.exports=(e,t)=>new o(e,t).major},71024:function(e,t,r){let o=r(95012);e.exports=(e,t)=>new o(e,t).minor},97224:function(e,t,r){let o=r(75953);e.exports=(e,t,r)=>0!==o(e,t,r)},83041:function(e,t,r){let o=r(95012);e.exports=(e,t,r=!1)=>{if(e instanceof o)return e;try{return new o(e,t)}catch(e){if(!r)return null;throw e}}},48430:function(e,t,r){let o=r(95012);e.exports=(e,t)=>new o(e,t).patch},29716:function(e,t,r){let o=r(83041);e.exports=(e,t)=>{let r=o(e,t);return r&&r.prerelease.length?r.prerelease:null}},6659:function(e,t,r){let o=r(75953);e.exports=(e,t,r)=>o(t,e,r)},79682:function(e,t,r){let o=r(80218);e.exports=(e,t)=>e.sort((e,r)=>o(r,e,t))},23611:function(e,t,r){let o=r(85461);e.exports=(e,t,r)=>{try{t=new o(t,r)}catch(e){return!1}return t.test(e)}},1839:function(e,t,r){let o=r(80218);e.exports=(e,t)=>e.sort((e,r)=>o(e,r,t))},14191:function(e,t,r){let o=r(83041);e.exports=(e,t)=>{let r=o(e,t);return r?r.version:null}},45755:function(e,t,r){let o=r(37127),n=r(54632),i=r(95012),l=r(43688),a=r(83041),s=r(14191),c=r(22210),u=r(46655),d=r(18124),p=r(73007),f=r(71024),h=r(48430),g=r(29716),m=r(75953),b=r(6659),w=r(90079),v=r(80218),y=r(1839),x=r(79682),C=r(38993),E=r(95215),$=r(52605),k=r(97224),P=r(4916),_=r(51864),S=r(23920),L=r(68771),T=r(1961),I=r(85461),O=r(23611),R=r(59406),N=r(78536),A=r(71496),j=r(61407),M=r(9212),H=r(83001),D=r(36345),V=r(27309),B=r(91284),F=r(8268),z=r(6394);e.exports={parse:a,valid:s,clean:c,inc:u,diff:d,major:p,minor:f,patch:h,prerelease:g,compare:m,rcompare:b,compareLoose:w,compareBuild:v,sort:y,rsort:x,gt:C,lt:E,eq:$,neq:k,gte:P,lte:_,cmp:S,coerce:L,Comparator:T,Range:I,satisfies:O,toComparators:R,maxSatisfying:N,minSatisfying:A,minVersion:j,validRange:M,outside:H,gtr:D,ltr:V,intersects:B,simplifyRange:F,subset:z,SemVer:i,re:o.re,src:o.src,tokens:o.t,SEMVER_SPEC_VERSION:n.SEMVER_SPEC_VERSION,RELEASE_TYPES:n.RELEASE_TYPES,compareIdentifiers:l.compareIdentifiers,rcompareIdentifiers:l.rcompareIdentifiers}},54632:function(e){let t=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_BUILD_LENGTH:250,MAX_SAFE_INTEGER:t,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}},86026:function(e,t,r){var o=r(20357);let n="object"==typeof o&&o.env&&o.env.NODE_DEBUG&&/\bsemver\b/i.test(o.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};e.exports=n},43688:function(e){let t=/^[0-9]+$/,r=(e,r)=>{let o=t.test(e),n=t.test(r);return o&&n&&(e=+e,r=+r),e===r?0:o&&!n?-1:n&&!o?1:e<r?-1:1};e.exports={compareIdentifiers:r,rcompareIdentifiers:(e,t)=>r(t,e)}},58469:function(e){class t{constructor(){this.max=1e3,this.map=new Map}get(e){let t=this.map.get(e);if(void 0!==t)return this.map.delete(e),this.map.set(e,t),t}delete(e){return this.map.delete(e)}set(e,t){if(!this.delete(e)&&void 0!==t){if(this.map.size>=this.max){let e=this.map.keys().next().value;this.delete(e)}this.map.set(e,t)}return this}}e.exports=t},72018:function(e){let t=Object.freeze({loose:!0}),r=Object.freeze({});e.exports=e=>e?"object"!=typeof e?t:e:r},37127:function(e,t,r){let{MAX_SAFE_COMPONENT_LENGTH:o,MAX_SAFE_BUILD_LENGTH:n,MAX_LENGTH:i}=r(54632),l=r(86026),a=(t=e.exports={}).re=[],s=t.safeRe=[],c=t.src=[],u=t.t={},d=0,p="[a-zA-Z0-9-]",f=[["\\s",1],["\\d",i],[p,n]],h=e=>{for(let[t,r]of f)e=e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);return e},g=(e,t,r)=>{let o=h(t),n=d++;l(e,n,t),u[e]=n,c[n]=t,a[n]=new RegExp(t,r?"g":void 0),s[n]=new RegExp(o,r?"g":void 0)};g("NUMERICIDENTIFIER","0|[1-9]\\d*"),g("NUMERICIDENTIFIERLOOSE","\\d+"),g("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${p}*`),g("MAINVERSION",`(${c[u.NUMERICIDENTIFIER]})\\.(${c[u.NUMERICIDENTIFIER]})\\.(${c[u.NUMERICIDENTIFIER]})`),g("MAINVERSIONLOOSE",`(${c[u.NUMERICIDENTIFIERLOOSE]})\\.(${c[u.NUMERICIDENTIFIERLOOSE]})\\.(${c[u.NUMERICIDENTIFIERLOOSE]})`),g("PRERELEASEIDENTIFIER",`(?:${c[u.NUMERICIDENTIFIER]}|${c[u.NONNUMERICIDENTIFIER]})`),g("PRERELEASEIDENTIFIERLOOSE",`(?:${c[u.NUMERICIDENTIFIERLOOSE]}|${c[u.NONNUMERICIDENTIFIER]})`),g("PRERELEASE",`(?:-(${c[u.PRERELEASEIDENTIFIER]}(?:\\.${c[u.PRERELEASEIDENTIFIER]})*))`),g("PRERELEASELOOSE",`(?:-?(${c[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[u.PRERELEASEIDENTIFIERLOOSE]})*))`),g("BUILDIDENTIFIER",`${p}+`),g("BUILD",`(?:\\+(${c[u.BUILDIDENTIFIER]}(?:\\.${c[u.BUILDIDENTIFIER]})*))`),g("FULLPLAIN",`v?${c[u.MAINVERSION]}${c[u.PRERELEASE]}?${c[u.BUILD]}?`),g("FULL",`^${c[u.FULLPLAIN]}$`),g("LOOSEPLAIN",`[v=\\s]*${c[u.MAINVERSIONLOOSE]}${c[u.PRERELEASELOOSE]}?${c[u.BUILD]}?`),g("LOOSE",`^${c[u.LOOSEPLAIN]}$`),g("GTLT","((?:<|>)?=?)"),g("XRANGEIDENTIFIERLOOSE",`${c[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),g("XRANGEIDENTIFIER",`${c[u.NUMERICIDENTIFIER]}|x|X|\\*`),g("XRANGEPLAIN",`[v=\\s]*(${c[u.XRANGEIDENTIFIER]})(?:\\.(${c[u.XRANGEIDENTIFIER]})(?:\\.(${c[u.XRANGEIDENTIFIER]})(?:${c[u.PRERELEASE]})?${c[u.BUILD]}?)?)?`),g("XRANGEPLAINLOOSE",`[v=\\s]*(${c[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[u.XRANGEIDENTIFIERLOOSE]})(?:${c[u.PRERELEASELOOSE]})?${c[u.BUILD]}?)?)?`),g("XRANGE",`^${c[u.GTLT]}\\s*${c[u.XRANGEPLAIN]}$`),g("XRANGELOOSE",`^${c[u.GTLT]}\\s*${c[u.XRANGEPLAINLOOSE]}$`),g("COERCEPLAIN",`(^|[^\\d])(\\d{1,${o}})(?:\\.(\\d{1,${o}}))?(?:\\.(\\d{1,${o}}))?`),g("COERCE",`${c[u.COERCEPLAIN]}(?:$|[^\\d])`),g("COERCEFULL",c[u.COERCEPLAIN]+`(?:${c[u.PRERELEASE]})?`+`(?:${c[u.BUILD]})?`+"(?:$|[^\\d])"),g("COERCERTL",c[u.COERCE],!0),g("COERCERTLFULL",c[u.COERCEFULL],!0),g("LONETILDE","(?:~>?)"),g("TILDETRIM",`(\\s*)${c[u.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",g("TILDE",`^${c[u.LONETILDE]}${c[u.XRANGEPLAIN]}$`),g("TILDELOOSE",`^${c[u.LONETILDE]}${c[u.XRANGEPLAINLOOSE]}$`),g("LONECARET","(?:\\^)"),g("CARETTRIM",`(\\s*)${c[u.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",g("CARET",`^${c[u.LONECARET]}${c[u.XRANGEPLAIN]}$`),g("CARETLOOSE",`^${c[u.LONECARET]}${c[u.XRANGEPLAINLOOSE]}$`),g("COMPARATORLOOSE",`^${c[u.GTLT]}\\s*(${c[u.LOOSEPLAIN]})$|^$`),g("COMPARATOR",`^${c[u.GTLT]}\\s*(${c[u.FULLPLAIN]})$|^$`),g("COMPARATORTRIM",`(\\s*)${c[u.GTLT]}\\s*(${c[u.LOOSEPLAIN]}|${c[u.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",g("HYPHENRANGE",`^\\s*(${c[u.XRANGEPLAIN]})\\s+-\\s+(${c[u.XRANGEPLAIN]})\\s*$`),g("HYPHENRANGELOOSE",`^\\s*(${c[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[u.XRANGEPLAINLOOSE]})\\s*$`),g("STAR","(<|>)?=?\\s*\\*"),g("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),g("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},36345:function(e,t,r){let o=r(83001);e.exports=(e,t,r)=>o(e,t,">",r)},91284:function(e,t,r){let o=r(85461);e.exports=(e,t,r)=>(e=new o(e,r),t=new o(t,r),e.intersects(t,r))},27309:function(e,t,r){let o=r(83001);e.exports=(e,t,r)=>o(e,t,"<",r)},78536:function(e,t,r){let o=r(95012),n=r(85461);e.exports=(e,t,r)=>{let i=null,l=null,a=null;try{a=new n(t,r)}catch(e){return null}return e.forEach(e=>{a.test(e)&&(!i||-1===l.compare(e))&&(l=new o(i=e,r))}),i}},71496:function(e,t,r){let o=r(95012),n=r(85461);e.exports=(e,t,r)=>{let i=null,l=null,a=null;try{a=new n(t,r)}catch(e){return null}return e.forEach(e=>{a.test(e)&&(!i||1===l.compare(e))&&(l=new o(i=e,r))}),i}},61407:function(e,t,r){let o=r(95012),n=r(85461),i=r(38993);e.exports=(e,t)=>{e=new n(e,t);let r=new o("0.0.0");if(e.test(r)||(r=new o("0.0.0-0"),e.test(r)))return r;r=null;for(let t=0;t<e.set.length;++t){let n=e.set[t],l=null;n.forEach(e=>{let t=new o(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":(!l||i(t,l))&&(l=t);break;case"<":case"<=":break;default:throw Error(`Unexpected operation: ${e.operator}`)}}),l&&(!r||i(r,l))&&(r=l)}return r&&e.test(r)?r:null}},83001:function(e,t,r){let o=r(95012),n=r(1961),{ANY:i}=n,l=r(85461),a=r(23611),s=r(38993),c=r(95215),u=r(51864),d=r(4916);e.exports=(e,t,r,p)=>{let f,h,g,m,b;switch(e=new o(e,p),t=new l(t,p),r){case">":f=s,h=u,g=c,m=">",b=">=";break;case"<":f=c,h=d,g=s,m="<",b="<=";break;default:throw TypeError('Must provide a hilo val of "<" or ">"')}if(a(e,t,p))return!1;for(let r=0;r<t.set.length;++r){let o=t.set[r],l=null,a=null;if(o.forEach(e=>{e.semver===i&&(e=new n(">=0.0.0")),l=l||e,a=a||e,f(e.semver,l.semver,p)?l=e:g(e.semver,a.semver,p)&&(a=e)}),l.operator===m||l.operator===b||(!a.operator||a.operator===m)&&h(e,a.semver)||a.operator===b&&g(e,a.semver))return!1}return!0}},8268:function(e,t,r){let o=r(23611),n=r(75953);e.exports=(e,t,r)=>{let i=[],l=null,a=null,s=e.sort((e,t)=>n(e,t,r));for(let e of s)o(e,t,r)?(a=e,l||(l=e)):(a&&i.push([l,a]),a=null,l=null);l&&i.push([l,null]);let c=[];for(let[e,t]of i)e===t?c.push(e):t||e!==s[0]?t?e===s[0]?c.push(`<=${t}`):c.push(`${e} - ${t}`):c.push(`>=${e}`):c.push("*");let u=c.join(" || "),d="string"==typeof t.raw?t.raw:String(t);return u.length<d.length?u:t}},6394:function(e,t,r){let o=r(85461),n=r(1961),{ANY:i}=n,l=r(23611),a=r(75953),s=[new n(">=0.0.0-0")],c=[new n(">=0.0.0")],u=(e,t,r)=>{let o,n,u,f,h,g,m;if(e===t)return!0;if(1===e.length&&e[0].semver===i){if(1===t.length&&t[0].semver===i)return!0;e=r.includePrerelease?s:c}if(1===t.length&&t[0].semver===i){if(r.includePrerelease)return!0;t=c}let b=new Set;for(let t of e)">"===t.operator||">="===t.operator?o=d(o,t,r):"<"===t.operator||"<="===t.operator?n=p(n,t,r):b.add(t.semver);if(b.size>1||o&&n&&((u=a(o.semver,n.semver,r))>0||0===u&&(">="!==o.operator||"<="!==n.operator)))return null;for(let e of b){if(o&&!l(e,String(o),r)||n&&!l(e,String(n),r))return null;for(let o of t)if(!l(e,String(o),r))return!1;return!0}let w=!!n&&!r.includePrerelease&&!!n.semver.prerelease.length&&n.semver,v=!!o&&!r.includePrerelease&&!!o.semver.prerelease.length&&o.semver;for(let e of(w&&1===w.prerelease.length&&"<"===n.operator&&0===w.prerelease[0]&&(w=!1),t)){if(m=m||">"===e.operator||">="===e.operator,g=g||"<"===e.operator||"<="===e.operator,o){if(v&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===v.major&&e.semver.minor===v.minor&&e.semver.patch===v.patch&&(v=!1),">"===e.operator||">="===e.operator){if((f=d(o,e,r))===e&&f!==o)return!1}else if(">="===o.operator&&!l(o.semver,String(e),r))return!1}if(n){if(w&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===w.major&&e.semver.minor===w.minor&&e.semver.patch===w.patch&&(w=!1),"<"===e.operator||"<="===e.operator){if((h=p(n,e,r))===e&&h!==n)return!1}else if("<="===n.operator&&!l(n.semver,String(e),r))return!1}if(!e.operator&&(n||o)&&0!==u)return!1}return(!o||!g||!!n||0===u)&&(!n||!m||!!o||0===u)&&!v&&!w},d=(e,t,r)=>{if(!e)return t;let o=a(e.semver,t.semver,r);return o>0?e:o<0?t:">"===t.operator&&">="===e.operator?t:e},p=(e,t,r)=>{if(!e)return t;let o=a(e.semver,t.semver,r);return o<0?e:o>0?t:"<"===t.operator&&"<="===e.operator?t:e};e.exports=(e,t,r={})=>{if(e===t)return!0;e=new o(e,r),t=new o(t,r);let n=!1;e:for(let o of e.set){for(let e of t.set){let t=u(o,e,r);if(n=n||null!==t,t)continue e}if(n)return!1}return!0}},59406:function(e,t,r){let o=r(85461);e.exports=(e,t)=>new o(e,t).set.map(e=>e.map(e=>e.value).join(" ").trim().split(" "))},9212:function(e,t,r){let o=r(85461);e.exports=(e,t)=>{try{return new o(e,t).range||"*"}catch(e){return null}}}}]);