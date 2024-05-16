import{_ as a,c as e,o as i,a3 as s}from"./chunks/framework.CtA4ZjMf.js";const u=JSON.parse('{"title":"全局注入","description":"","frontmatter":{},"headers":[],"relativePath":"ray-template-docs/advanced/app-global-provider.md","filePath":"ray-template-docs/advanced/app-global-provider.md","lastUpdated":1715849003000}'),t={name:"ray-template-docs/advanced/app-global-provider.md"},l=s('<h1 id="全局注入" tabindex="-1">全局注入 <a class="header-anchor" href="#全局注入" aria-label="Permalink to &quot;全局注入&quot;">​</a></h1><p>项目中注入了一些特殊的属性，共全局使用。</p><h2 id="dev" tabindex="-1"><code>__DEV__</code> <a class="header-anchor" href="#dev" aria-label="Permalink to &quot;`__DEV__`&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li><li>介绍：当前环境是否为开发环境</li></ul><div class="tip custom-block"><p class="custom-block-title">提示</p><p>该属性是为了方便在项目中判断是否为开发环境，如果你需要更加准确的判断，可以使用 <code>getAppEnvironment</code> 方法来获取当前环境变量。</p></div><h2 id="app-cfg" tabindex="-1"><code>__APP_CFG__</code> <a class="header-anchor" href="#app-cfg" aria-label="Permalink to &quot;`__APP_CFG__`&quot;">​</a></h2><ul><li>类型：<code>AppConfig</code></li><li>介绍：该属性在经过 <code>vite</code> 编译后，会挂在 <code>window</code> 下。所以你可以直接在项目任意地方使用，并且不用担心加载顺序问题</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pkg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">appPrimaryColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __APP_CFG__</span></span></code></pre></div><h2 id="ejs" tabindex="-1"><code>ejs</code> <a class="header-anchor" href="#ejs" aria-label="Permalink to &quot;`ejs`&quot;">​</a></h2><ul><li>类型：<code>ViteEjsPluginDataType</code></li><li>介绍：该功能借助 <code>vite-plugin-ejs</code> 插件实现</li></ul><div class="tip custom-block"><p class="custom-block-title">提示</p><p>一般来说，不太需要 <code>ejs</code> 的注入操作。但是如果你需要在 <code>index.html</code> 进行一些特殊的操作时，可能用得上它。例如项目使用该插件实现可以配置化的 <code>css var</code> <code>loading</code> 等功能。</p></div>',11),o=[l];function d(c,p,n,h,r,k){return i(),e("div",null,o)}const g=a(t,[["render",d]]);export{u as __pageData,g as default};