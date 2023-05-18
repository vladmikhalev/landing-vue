(function(){"use strict";var t={8452:function(t,e,n){var r=n(9963),i=n(6252);function o(t,e){const n=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(n)}var a=n(3744);const s={},c=(0,a.Z)(s,[["render",o]]);var l=c,u=n(2201);const d={class:"home"};function f(t,e,n,r,o,a){const s=(0,i.up)("ArticleList");return(0,i.wg)(),(0,i.iD)("div",d,[(0,i.Wm)(s)])}const p=t=>((0,i.dD)("data-v-11f86b74"),t=t(),(0,i.Cn)(),t),h={class:"container"},m=(0,i.uE)('<header id="masthead" class="site-header" data-v-11f86b74><div class="site-branding" data-v-11f86b74><h1 class="site-title" data-v-11f86b74><a href="index.html" rel="home" data-v-11f86b74>Moschino</a></h1><h2 class="site-description" data-v-11f86b74>Minimalist Portfolio HTML Template</h2></div><nav id="site-navigation" class="main-navigation" data-v-11f86b74><button class="menu-toggle" data-v-11f86b74>Menu</button><a class="skip-link screen-reader-text" href="#content" data-v-11f86b74>Skip to content</a><div class="menu-menu-1-container" data-v-11f86b74> Тестовое задание QTIM </div></nav></header>',1),v={id:"content",class:"site-content"},g={id:"primary",class:"content-area column full"},b={key:0,id:"main",class:"site-main"},y={class:"grid portfoliogrid articleList"},w=p((()=>(0,i._)("br",null,null,-1))),k={key:1,style:{"text-align":"center"}};function _(t,e,n,r,o,a){const s=(0,i.up)("Article"),c=(0,i.up)("vue-awesome-paginate");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",h,[m,(0,i._)("div",v,[(0,i._)("div",g,[t.posts.length>0?((0,i.wg)(),(0,i.iD)("main",b,[(0,i._)("div",y,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.posts,(t=>((0,i.wg)(),(0,i.j4)(s,{key:t.id,post:t},null,8,["post"])))),128))]),(0,i.Wm)(c,{"total-items":50,modelValue:t.page,"onUpdate:modelValue":e[0]||(e[0]=e=>t.page=e),"items-per-page":5,"max-pages-shown":5,"on-click":t.changePage,"hide-prev-next-when-ends":!0},null,8,["modelValue","on-click"]),w])):((0,i.wg)(),(0,i.iD)("h2",k,"....Загрузка"))])])])])}var A=n(6154),j=(n(7658),n(3577));const O={class:"entry-header"},P=(0,i._)("div",{class:"entry-thumbnail"},[(0,i._)("img",{src:"https://cdn.dribbble.com/userupload/7067483/file/original-951562a758c87c94e5e8e9df607ca127.jpg?compress=1&resize=752x",class:"attachment-post-thumbnail size-post-thumbnail wp-post-image",alt:"p1"})],-1),T={class:"entry-title"},C={href:"portfolio-item.html",rel:"bookmark"},x=(0,i._)("a",{class:"portfoliotype",href:"#"},"summer",-1),D=(0,i._)("a",{class:"portfoliotype",href:"#"},"woman",-1),E=(0,i._)("a",{class:"portfoliotype",href:"#"},"yellow",-1);function S(t,e,n,r,o,a){return(0,i.wg)(),(0,i.iD)("article",{class:"hentry",onClick:e[0]||(e[0]=e=>t.$router.push(`/DetailArticle/${t.post.id}`))},[(0,i._)("header",O,[P,(0,i._)("h2",T,[(0,i._)("a",C,(0,j.zw)(t.post.title),1)]),x,D,E])])}var L=(0,i.aZ)({name:"Article",props:{post:{type:Object,required:!0}}});const M=(0,a.Z)(L,[["render",S]]);var N=M,Z=(0,i.aZ)({name:"HelloWorld",components:{Article:N},methods:{changePage(t){this.page=t},async fetchPosts(){try{const t=await A.Z.get("https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts",{params:{page:this.page,limit:this.limit}}),e=t.data;this.totalPages=Math.ceil(e.length/this.limit),this.posts=e}catch(t){alert(t)}}},data(){return{page:1,limit:9,totalPages:0,isPostsLoading:!1,posts:[]}},created(){this.fetchPosts()},watch:{page(){this.fetchPosts()}}});const q=(0,a.Z)(Z,[["render",_],["__scopeId","data-v-11f86b74"]]);var H=q,B=(0,i.aZ)({name:"HomeView",components:{ArticleList:H}});const F=(0,a.Z)(B,[["render",f]]);var I=F;const V=[{path:"/",name:"home",component:I},{path:"/DetailArticle/:id",name:"DetailArticle",component:()=>n.e(219).then(n.bind(n,219))}],z=(0,u.p7)({history:(0,u.r5)(),routes:V});var W=z,K=n(3907),Q=(0,K.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),U=n(5811);(0,r.ri)(l).use(Q).use(W).use(U.Z).mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var a=1/0;for(u=0;u<t.length;u++){r=t[u][0],i=t[u][1],o=t[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(s=!1,o<a&&(a=o));if(s){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,i,o]}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+".933368dd.js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".76da6356.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="test-task-qtim:";n.l=function(r,i,o,a){if(t[r])t[r].push(i);else{var s,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+o){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+o),s.src=r),t[r]=[i];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(p);var i=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/Test-Task-QTIM/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,o.parentNode&&o.parentNode.removeChild(o),i(c)}};return o.onerror=o.onload=a,o.href=e,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===t||o===e))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){i=a[r],o=i.getAttribute("data-href");if(o===t||o===e)return i}},r=function(r){return new Promise((function(i,o){var a=n.miniCssF(r),s=n.p+a;if(e(a,s))return i();t(r,s,null,i,o)}))},i={143:0};n.f.miniCss=function(t,e){var n={219:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=r(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(n,r){i=t[e]=[n,r]}));r.push(i[2]=o);var a=n.p+n.u(e),s=new Error,c=function(r){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,i[1](s)}};n.l(a,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,a=r[0],s=r[1],c=r[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var u=c(n)}for(e&&e(r);l<a.length;l++)o=a[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},r=self["webpackChunktest_task_qtim"]=self["webpackChunktest_task_qtim"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8452)}));r=n.O(r)})();
//# sourceMappingURL=app.17a34de6.js.map