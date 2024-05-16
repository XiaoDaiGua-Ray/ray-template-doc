import{_ as s,c as i,o as a,a3 as e}from"./chunks/framework.CtA4ZjMf.js";const A=JSON.parse('{"title":"缓存","description":"","frontmatter":{},"headers":[],"relativePath":"ray-template-docs/common-problem/keep-alive.md","filePath":"ray-template-docs/common-problem/keep-alive.md","lastUpdated":1715849003000}'),l={name:"ray-template-docs/common-problem/keep-alive.md"},n=e(`<h1 id="缓存" tabindex="-1">缓存 <a class="header-anchor" href="#缓存" aria-label="Permalink to &quot;缓存&quot;">​</a></h1><p>缓存依赖 <code>KeepAlive</code> 组件实现。它会根据组件的 <code>name</code> 选项进行匹配，所以组件如果想要条件性地被 <code>KeepAlive</code> 缓存，就必须显式声明一个 <code>name</code> 选项。</p><h2 id="缓存失效" tabindex="-1">缓存失效 <a class="header-anchor" href="#缓存失效" aria-label="Permalink to &quot;缓存失效&quot;">​</a></h2><ul><li>查看需要缓存组件的 <code>name</code> 属性是否与路由的 <code>name</code> 属性匹配</li><li>查看路由 <code>keepAlive</code> 属性是否配置为 <code>true</code></li><li>查看 <code>APP_KEEP_ALIVE.setupKeepAlive</code> 属性是否配置为 <code>true</code></li><li>缓存是否超过了最大缓存数 <code>APP_KEEP_ALIVE.maxKeepAliveLength</code></li></ul><div class="tip custom-block"><p class="custom-block-title">tip</p><p>模板默认缓存数为 <code>5</code>，并且采用队列的形式维护缓存。会自动的收集所有配置了 <code>keepAlive</code> 的路由模块，并且放置于队列中。</p></div><h2 id="最大缓存数" tabindex="-1">最大缓存数 <a class="header-anchor" href="#最大缓存数" aria-label="Permalink to &quot;最大缓存数&quot;">​</a></h2><p>模板默认启用缓存，并且设置的最大缓存数为 <code>5</code>。可以根据自己需求更改。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 系统缓存</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 说明:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *   - setupKeepAlive: 是否启用系统页面缓存, 设置为 false 则关闭系统页面缓存</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *   - keepAliveExclude: 排除哪些页面不缓存</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *   - maxKeepAliveLength: 最大缓存页面数量</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> APP_KEEP_ALIVE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Readonly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AppKeepAlive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  setupKeepAlive: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  keepAliveExclude: [],</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  maxKeepAliveLength: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,8),p=[n];function t(h,k,d,c,o,r){return a(),i("div",null,p)}const g=s(l,[["render",t]]);export{A as __pageData,g as default};
