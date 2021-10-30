var app=function(){"use strict";function n(){}function t(n){return n()}function a(){return Object.create(null)}function s(n){n.forEach(t)}function e(n){return"function"==typeof n}function o(n,t){return n!=n?t==t:n!==t}function p(n,t){n.appendChild(t)}function c(n){n.parentNode.removeChild(n)}function l(n){return document.createElement(n)}function r(n){return document.createTextNode(n)}function i(){return r(" ")}function u(n,t,a){null==a?n.removeAttribute(t):n.getAttribute(t)!==a&&n.setAttribute(t,a)}function d(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}let k;function h(n){k=n}function g(){if(!k)throw new Error("Function called outside component initialization");return k}function m(){const n=g();return(t,a)=>{const s=n.$$.callbacks[t];if(s){const e=function(n,t,a=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(n,a,!1,t),s}(t,a);s.slice().forEach((t=>{t.call(n,e)}))}}}const f=[],y=[],$=[],v=[],b=Promise.resolve();let T=!1;function M(n){$.push(n)}let x=!1;const L=new Set;function w(){if(!x){x=!0;do{for(let n=0;n<f.length;n+=1){const t=f[n];h(t),H(t.$$)}for(h(null),f.length=0;y.length;)y.pop()();for(let n=0;n<$.length;n+=1){const t=$[n];L.has(t)||(L.add(t),t())}$.length=0}while(f.length);for(;v.length;)v.pop()();T=!1,x=!1,L.clear()}}function H(n){if(null!==n.fragment){n.update(),s(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(M)}}const S=new Set;function C(n,t){n&&n.i&&(S.delete(n),n.i(t))}function _(n,a,o,p){const{fragment:c,on_mount:l,on_destroy:r,after_update:i}=n.$$;c&&c.m(a,o),p||M((()=>{const a=l.map(t).filter(e);r?r.push(...a):s(a),n.$$.on_mount=[]})),i.forEach(M)}function E(n,t){const a=n.$$;null!==a.fragment&&(s(a.on_destroy),a.fragment&&a.fragment.d(t),a.on_destroy=a.fragment=null,a.ctx=[])}function q(n,t){-1===n.$$.dirty[0]&&(f.push(n),T||(T=!0,b.then(w)),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function I(t,e,o,p,l,r,i,u=[-1]){const d=k;h(t);const g=t.$$={fragment:null,ctx:null,props:r,update:n,not_equal:l,bound:a(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:a(),dirty:u,skip_bound:!1,root:e.target||d.$$.root};i&&i(g.root);let m=!1;if(g.ctx=o?o(t,e.props||{},((n,a,...s)=>{const e=s.length?s[0]:a;return g.ctx&&l(g.ctx[n],g.ctx[n]=e)&&(!g.skip_bound&&g.bound[n]&&g.bound[n](e),m&&q(t,n)),a})):[],g.update(),m=!0,s(g.before_update),g.fragment=!!p&&p(g.ctx),e.target){if(e.hydrate){const n=function(n){return Array.from(n.childNodes)}(e.target);g.fragment&&g.fragment.l(n),n.forEach(c)}else g.fragment&&g.fragment.c();e.intro&&C(t.$$.fragment),_(t,e.target,e.anchor,e.customElement),w()}h(d)}class A{$destroy(){E(this,1),this.$destroy=n}$on(n,t){const a=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return a.push(t),()=>{const n=a.indexOf(t);-1!==n&&a.splice(n,1)}}$set(n){var t;this.$$set&&(t=n,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}function P(n,t,a){let{theme:s="dark"}=t,{key:e="theme"}=t;const o={dark:"dark",light:"light"},p=m(),c=n=>n in o,l=n=>a(0,s=n.matches?o.dark:o.light);var r;return r=()=>{const n=matchMedia("(prefers-color-scheme: dark)"),t=localStorage.getItem(e);return c(t)?a(0,s=t):a(0,s=n.matches?o.dark:o.light),n.addEventListener("change",l),()=>{n.removeEventListener("change",l)}},g().$$.on_mount.push(r),function(n){g().$$.after_update.push(n)}((()=>{c(s)&&(p("change",s),localStorage.setItem(e,s))})),n.$$set=n=>{"theme"in n&&a(0,s=n.theme),"key"in n&&a(1,e=n.key)},[s,e]}class N extends A{constructor(n){super(),I(this,n,P,null,o,{theme:0,key:1})}}function j(n){let t,a,s,e,o,k,h,g,m,f,$,b,T,M,x,L,w,H,q,I,A,P,j,D,U,G,O,W,z,B,R,F,V,Y,J,K,Q,X,Z,nn,tn,an,sn,en,on,pn,cn,ln,rn,un,dn,kn,hn,gn,mn,fn,yn,$n,vn,bn,Tn,Mn,xn,Ln,wn,Hn,Sn,Cn,_n,En,qn,In,An,Pn,Nn,jn,Dn,Un,Gn,On,Wn,zn,Bn,Rn,Fn,Vn,Yn,Jn,Kn,Qn,Xn,Zn,nt,tt,at,st,et,ot,pt,ct,lt;function rt(t){n[2](t)}let it={};return void 0!==n[0]&&(it.theme=n[0]),K=new N({props:it}),y.push((()=>function(n,t,a){const s=n.$$.props[t];void 0!==s&&(n.$$.bound[s]=a,a(n.$$.ctx[s]))}(K,"theme",rt))),{c(){var p;t=l("main"),a=l("h1"),a.textContent="svelte-dark-mode",s=i(),e=l("p"),e.innerHTML='<a href="https://npmjs.com/package/svelte-dark-mode"><img src="https://img.shields.io/npm/v/svelte-dark-mode.svg?color=%23ff3e00&amp;style=for-the-badge" alt="NPM"/></a>',o=i(),k=l("blockquote"),k.innerHTML="<p>Support dark mode in your Svelte apps.</p>",h=i(),g=l("p"),g.innerHTML='<a href="https://github.com/metonym/svelte-dark-mode.git">GitHub repo</a>',m=i(),f=l("p"),f.innerHTML='This component sets the theme based on the user’s preferred color scheme using <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia">window.matchMedia</a>.',$=i(),b=l("p"),b.innerHTML='The preferred theme is persisted using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">window.localStorage API</a>.',T=i(),M=l("hr"),x=i(),L=l("p"),L.innerHTML="<strong>Table of Contents</strong>",w=l("ul"),w.innerHTML='<li><a href="#installation">Installation</a></li> \n<li><a href="#usage">Usage</a></li> \n<ul><li><a href="#basic">Basic</a></li> \n<li><a href="#server-side-rendering-(ssr)">Server-side rendering (SSR)</a></li> \n<li><a href="#system-preference-change">System preference change</a></li> \n<li><a href="#custom-localstorage-key">Custom</a></li> \n</ul><li><a href="#api">API</a></li> \n<ul><li><a href="#props">Props</a></li> \n<li><a href="#dispatched-events">Dispatched events</a></li> \n</ul><li><a href="#typescript">TypeScript</a></li> \n<li><a href="#changelog">Changelog</a></li> \n<li><a href="#license">License</a></li>',H=i(),q=l("h2"),q.textContent="Installation",I=i(),A=l("p"),A.innerHTML="<strong>Yarn</strong>",P=i(),j=l("pre"),D=i(),U=l("p"),U.innerHTML="<strong>NPM</strong>",G=i(),O=l("pre"),W=i(),z=l("h2"),z.textContent="Usage",B=i(),R=l("h3"),R.textContent="Basic",F=i(),V=l("p"),V.innerHTML="The <code>theme</code> is set to either <code>&quot;dark&quot;</code> or <code>&quot;light&quot;</code> based on the user’s system preference.",Y=i(),J=l("div"),(p=K.$$.fragment)&&p.c(),X=i(),Z=l("h1"),nn=r("This is "),tn=r(n[0]),an=r(" mode."),sn=i(),en=l("p"),en.textContent="Change the theme and reload the page.",on=i(),pn=l("button"),cn=r("Switch to "),ln=r(n[1]),rn=r(" mode\n"),un=l("pre"),dn=i(),kn=l("h3"),kn.textContent="Server-side rendering (SSR)",hn=i(),gn=l("p"),gn.innerHTML="When using server-side rendering (SSR), employ the <code>afterUpdate</code> lifecycle to access <code>document.body</code> or <code>document.documentElement</code>.",mn=i(),fn=l("pre"),yn=i(),$n=l("h3"),$n.textContent="System preference change",vn=i(),bn=l("p"),bn.textContent="The theme will automatically be updated if the user changes their color scheme preference at the system level.",Tn=i(),Mn=l("h3"),Mn.innerHTML="Custom <code>localStorage</code> key",xn=i(),Ln=l("p"),Ln.innerHTML="Use the <code>key</code> prop to customize the local storage key used to track the persisted theme.",wn=i(),Hn=l("p"),Hn.innerHTML="By default, the key is <code>&quot;theme&quot;</code>.",Sn=i(),Cn=l("pre"),_n=i(),En=l("p"),En.innerHTML="Use the <code>localStorage.getItem</code> API to programmatically access the stored value.",qn=i(),In=l("pre"),An=i(),Pn=l("h2"),Pn.textContent="API",Nn=i(),jn=l("h3"),jn.textContent="Props",Dn=i(),Un=l("table"),Un.innerHTML='<thead><tr><th style="text-align:left">Prop name</th> \n<th style="text-align:left">Value</th></tr></thead> \n<tbody><tr><td style="text-align:left">theme</td> \n<td style="text-align:left"><code>&quot;dark&quot;</code> or <code>&quot;light&quot;</code> (default: <code>&quot;dark&quot;</code>)</td></tr> \n<tr><td style="text-align:left">key</td> \n<td style="text-align:left"><code>string</code> (default: <code>&quot;theme&quot;</code>)</td></tr></tbody>',Gn=i(),On=l("h3"),On.textContent="Dispatched events",Wn=i(),zn=l("ul"),zn.innerHTML="<li><strong>on:change</strong>: dispatched when <code>theme</code> is updated</li>",Bn=i(),Rn=l("pre"),Fn=i(),Vn=l("h2"),Vn.textContent="TypeScript",Yn=i(),Jn=l("p"),Jn.innerHTML="<code>svelte</code> version 3.31 or greater is required to use this component with TypeScript.",Kn=i(),Qn=l("p"),Qn.innerHTML='TypeScript definitions are located in the <a href="https://github.com/metonym/svelte-dark-mode/tree/master/types">types folder</a>.',Xn=i(),Zn=l("h2"),Zn.textContent="Changelog",nt=i(),tt=l("p"),tt.innerHTML='<a href="https://github.com/metonym/svelte-dark-mode/tree/master/CHANGELOG.md">CHANGELOG.md</a>',at=i(),st=l("h2"),st.textContent="License",et=i(),ot=l("p"),ot.innerHTML='<a href="https://github.com/metonym/svelte-dark-mode/tree/master/LICENSE">MIT</a>',u(a,"id","svelte-dark-mode"),u(q,"id","installation"),u(j,"class","language-bash"),u(O,"class","language-bash"),u(z,"id","usage"),u(R,"id","basic"),u(J,"class","code-fence"),u(un,"class","language-svelte"),u(un,"data-svelte",""),u(kn,"id","server-side-rendering-(ssr)"),u(fn,"class","language-svelte"),u($n,"id","system-preference-change"),u(Mn,"id","custom-localstorage-key"),u(Cn,"class","language-svelte"),u(In,"class","language-javascript"),u(Pn,"id","api"),u(jn,"id","props"),u(On,"id","dispatched-events"),u(Rn,"class","language-svelte"),u(Vn,"id","typescript"),u(Zn,"id","changelog"),u(st,"id","license"),u(t,"class","markdown-body")},m(c,l){var r,i,u,d;!function(n,t,a){n.insertBefore(t,a||null)}(c,t,l),p(t,a),p(t,s),p(t,e),p(t,o),p(t,k),p(t,h),p(t,g),p(t,m),p(t,f),p(t,$),p(t,b),p(t,T),p(t,M),p(t,x),p(t,L),p(t,w),p(t,H),p(t,q),p(t,I),p(t,A),p(t,P),p(t,j),j.innerHTML='<span class="token function">yarn</span> <span class="token function">add</span> -D svelte-dark-mode\n',p(t,D),p(t,U),p(t,G),p(t,O),O.innerHTML='<span class="token function">npm</span> i -D svelte-dark-mode\n',p(t,W),p(t,z),p(t,B),p(t,R),p(t,F),p(t,V),p(t,Y),p(t,J),_(K,J,null),p(J,X),p(J,Z),p(Z,nn),p(Z,tn),p(Z,an),p(J,sn),p(J,en),p(J,on),p(J,pn),p(pn,cn),p(pn,ln),p(pn,rn),p(t,un),un.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> DarkMode <span class="token keyword">from</span> <span class="token string">"svelte-dark-mode"</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> theme<span class="token punctuation">;</span>\n\n  $<span class="token operator">:</span> switchTheme <span class="token operator">=</span> theme <span class="token operator">===</span> <span class="token string">"dark"</span> <span class="token operator">?</span> <span class="token string">"light"</span> <span class="token operator">:</span> <span class="token string">"dark"</span><span class="token punctuation">;</span>\n  $<span class="token operator">:</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>className <span class="token operator">=</span> theme<span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DarkMode</span> <span class="token attr-name"><span class="token namespace">bind:</span>theme</span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>This is <span class="token language-javascript"><span class="token punctuation">{</span>theme<span class="token punctuation">}</span></span> mode.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Change the theme and reload the page.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>theme <span class="token operator">=</span> switchTheme<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  Switch to <span class="token language-javascript"><span class="token punctuation">{</span>switchTheme<span class="token punctuation">}</span></span> mode\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">:global(.dark)</span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> #032f62<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> #f1f8ff<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n',p(t,dn),p(t,kn),p(t,hn),p(t,gn),p(t,mn),p(t,fn),fn.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> DarkMode <span class="token keyword">from</span> <span class="token string">"svelte-dark-mode"</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> afterUpdate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"svelte"</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> theme<span class="token punctuation">;</span>\n\n  <span class="token function">afterUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>className <span class="token operator">=</span> theme<span class="token punctuation">;</span> <span class="token comment">// "dark" or "light"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DarkMode</span> <span class="token attr-name"><span class="token namespace">bind:</span>theme</span> <span class="token punctuation">/></span></span>\n',p(t,yn),p(t,$n),p(t,vn),p(t,bn),p(t,Tn),p(t,Mn),p(t,xn),p(t,Ln),p(t,wn),p(t,Hn),p(t,Sn),p(t,Cn),Cn.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DarkMode</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>custom-theme-key<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n',p(t,_n),p(t,En),p(t,qn),p(t,In),In.innerHTML='localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">"custom-theme-key"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "dark" || "light"</span>\n',p(t,An),p(t,Pn),p(t,Nn),p(t,jn),p(t,Dn),p(t,Un),p(t,Gn),p(t,On),p(t,Wn),p(t,zn),p(t,Bn),p(t,Rn),Rn.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DarkMode</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>change=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "dark" | "light"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n',p(t,Fn),p(t,Vn),p(t,Yn),p(t,Jn),p(t,Kn),p(t,Qn),p(t,Xn),p(t,Zn),p(t,nt),p(t,tt),p(t,at),p(t,st),p(t,et),p(t,ot),pt=!0,ct||(r=pn,i="click",u=n[3],r.addEventListener(i,u,d),lt=()=>r.removeEventListener(i,u,d),ct=!0)},p(n,[t]){const a={};var s;!Q&&1&t&&(Q=!0,a.theme=n[0],s=()=>Q=!1,v.push(s)),K.$set(a),(!pt||1&t)&&d(tn,n[0]),(!pt||2&t)&&d(ln,n[1])},i(n){pt||(C(K.$$.fragment,n),pt=!0)},o(n){!function(n,t,a,s){if(n&&n.o){if(S.has(n))return;S.add(n),(void 0).c.push((()=>{S.delete(n),s&&(a&&n.d(1),s())})),n.o(t)}}(K.$$.fragment,n),pt=!1},d(n){n&&c(t),E(K),ct=!1,lt()}}}function D(n,t,a){let s,e;return n.$$.update=()=>{1&n.$$.dirty&&a(1,s="dark"===e?"light":"dark"),1&n.$$.dirty&&(document.body.className=e)},[e,s,function(n){e=n,a(0,e)},()=>a(0,e=s)]}return new class extends A{constructor(n){super(),I(this,n,D,j,o,{})}}({target:document.body})}();
