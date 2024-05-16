import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.CtA4ZjMf.js";const c=JSON.parse('{"title":"RCollapseGrid 折叠面板","description":"","frontmatter":{},"headers":[],"relativePath":"docs/components/basic/r-collapse-grid.md","filePath":"docs/components/basic/r-collapse-grid.md","lastUpdated":1715849003000}'),n={name:"docs/components/basic/r-collapse-grid.md"},l=t(`<h1 id="rcollapsegrid-折叠面板" tabindex="-1">RCollapseGrid 折叠面板 <a class="header-anchor" href="#rcollapsegrid-折叠面板" aria-label="Permalink to &quot;RCollapseGrid 折叠面板&quot;">​</a></h1><p>把一堆过滤条件组件收起来，让界面看着舒服一点。</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><details class="details custom-block"><summary>code</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { NCollapseGrid, RForm } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/components&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { NInput, NFormItemGi, NButton ，NFlex} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;naive-ui&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Demo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RForm</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> labelPlacement</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;left&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> showFeedback</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NCollapseGrid</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cols</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">collapsedRows</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NFormItemGi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NInput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NFormItemGi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          ),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NFlex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;查询&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;添加&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NFlex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NCollapseGrid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RForm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></details><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>open</td><td><code>boolean</code></td><td><code>false</code></td><td>是否展开折叠</td></tr><tr><td>collapseToggleText</td><td><code>CollapseToggleText</code></td><td><code>[&#39;展开&#39;, &#39;收起&#39;]</code></td><td>自定义展开与收起按钮文案</td></tr><tr><td>bordered</td><td><code>boolean</code></td><td><code>true</code></td><td>显示边框</td></tr><tr><td>onUpdateValue</td><td><code>(bool: boolean) =&gt; void</code></td><td><code>undefined</code></td><td>open 状态更新的回调函数</td></tr></tbody></table><p>其余的配置项，与 <a href="https://www.naiveui.com/zh-CN/dark/components/grid#Grid-Props" target="_blank" rel="noreferrer">NGrid Props</a> 完全一致。</p><h2 id="slots" tabindex="-1">slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;slots&quot;">​</a></h2><table><thead><tr><th>名称</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td><code>()</code></td><td>默认内容</td></tr><tr><td>action</td><td><code>()</code></td><td>功能插槽，放置操作按钮</td></tr></tbody></table>`,9),h=[l];function p(e,k,d,r,E,o){return a(),i("div",null,h)}const y=s(n,[["render",p]]);export{c as __pageData,y as default};
