import{_ as s,c as i,o as t,a3 as a}from"./chunks/framework.CtA4ZjMf.js";const g=JSON.parse('{"title":"useContentScroll","description":"","frontmatter":{},"headers":[],"relativePath":"docs/hooks/template/useContentScroll.md","filePath":"docs/hooks/template/useContentScroll.md","lastUpdated":1715926864000}'),n={name:"docs/hooks/template/useContentScroll.md"},l=a(`<h1 id="usecontentscroll" tabindex="-1">useContentScroll <a class="header-anchor" href="#usecontentscroll" aria-label="Permalink to &quot;useContentScroll&quot;">​</a></h1><p>让内容区域滚一滚。</p><h2 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h2><table><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>contentScrollTo</td><td><code>((options: ScrollToOptions) =&gt; void) &amp; ((x: number, y: number) =&gt; void)</code></td><td>滚动函数</td></tr></tbody></table><h2 id="contentscrollto" tabindex="-1">contentScrollTo <a class="header-anchor" href="#contentscrollto" aria-label="Permalink to &quot;contentScrollTo&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useContentScroll } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/hooks&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> contentScrollTo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useContentScroll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">contentScrollTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  top: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  left: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  behavior: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;smooth&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 滚动内容区域</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">contentScrollTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// x, y 方向滚动到 10 位置</span></span></code></pre></div>`,6),e=[l];function h(o,p,k,r,c,d){return t(),i("div",null,e)}const y=s(n,[["render",h]]);export{g as __pageData,y as default};
