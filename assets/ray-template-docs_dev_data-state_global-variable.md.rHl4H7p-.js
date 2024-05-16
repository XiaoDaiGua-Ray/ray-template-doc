import{_ as s,c as a,o as i,a3 as t}from"./chunks/framework.CtA4ZjMf.js";const E=JSON.parse('{"title":"全局响应式变量","description":"","frontmatter":{},"headers":[],"relativePath":"ray-template-docs/dev/data-state/global-variable.md","filePath":"ray-template-docs/dev/data-state/global-variable.md","lastUpdated":1715849193000}'),e={name:"ray-template-docs/dev/data-state/global-variable.md"},l=t(`<h1 id="全局响应式变量" tabindex="-1">全局响应式变量 <a class="header-anchor" href="#全局响应式变量" aria-label="Permalink to &quot;全局响应式变量&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><p>有时候，你只是想简单的使用全局响应式变量，并且希望脱离 <code>pinia</code>，那么你可以考虑一下这个。</p></div><h2 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h2><blockquote><p>目前仅仅是手动去对应的 <code>state</code> 写入变量，其实这并不是很合理。后续该写法将会弃用。</p></blockquote><h2 id="设置变量" tabindex="-1">设置变量 <a class="header-anchor" href="#设置变量" aria-label="Permalink to &quot;设置变量&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { setVariable } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/global-variable/index&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setVariable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;value&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;callback&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="获取变量" tabindex="-1">获取变量 <a class="header-anchor" href="#获取变量" aria-label="Permalink to &quot;获取变量&quot;">​</a></h2><p>该方法获取变量，可能会丢失响应式。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { getVariable } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/global-variable/index&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> variable</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getVariable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;default value&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="获取响应式变量" tabindex="-1">获取响应式变量 <a class="header-anchor" href="#获取响应式变量" aria-label="Permalink to &quot;获取响应式变量&quot;">​</a></h2><p>该方法可以保证获取到的变量始终是响应式的。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { getVariableToRefs } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/global-variable/index&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> variable</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getVariableToRefs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,12),n=[l];function h(p,k,r,d,o,c){return i(),a("div",null,n)}const b=s(e,[["render",h]]);export{E as __pageData,b as default};