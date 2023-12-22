import{_ as s,o as a,c as n,V as l}from"./chunks/framework.51f721ee.js";const B=JSON.parse('{"title":"reactivityTransform 功能（已废弃）","description":"","frontmatter":{},"headers":[],"relativePath":"ray-template-docs/advanced/reactivity.md","filePath":"ray-template-docs/advanced/reactivity.md","lastUpdated":1703251831000}'),o={name:"ray-template-docs/advanced/reactivity.md"},e=l(`<h1 id="reactivitytransform-功能-已废弃" tabindex="-1">reactivityTransform 功能（已废弃） <a class="header-anchor" href="#reactivitytransform-功能-已废弃" aria-label="Permalink to &quot;reactivityTransform 功能（已废弃）&quot;">​</a></h1><p><code>vue3</code> 的响应式函数后，每一次修改或者访问 <code>ref</code> 响应式数据时，需要进行显示的 <code>.value</code> 调用，显得及其繁琐。所以尤大大团队提出了该 <code>SFC</code> 意在减轻开发者的心智负担。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>但是，实际上这个试验性功能很多问题，并且最终被遗弃。具体被舍弃原因可以查看<a href="https://github.com/vuejs/rfcs/discussions/369#discussioncomment-5059028" target="_blank" rel="noreferrer"><code>原文</code></a>。</p></div><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">$ref</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">0</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(count)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">increment</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">count</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">increment</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">{{ count }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>经过编译后，会被转换为这样：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">0</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(count</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">value)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">increment</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">count</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">value</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>具体这里就不做赘述了，有兴趣可以去查看<a href="https://cn.vuejs.org/guide/extras/reactivity-transform.html" target="_blank" rel="noreferrer">官网地址</a></p><h2 id="api" tabindex="-1">api <a class="header-anchor" href="#api" aria-label="Permalink to &quot;api&quot;">​</a></h2><ul><li><code>ref</code> =&gt; <code>$ref</code></li><li><code>computed</code> =&gt; <code>$computed</code></li><li><code>shallowRef</code> =&gt; <code>$shallowRef</code></li><li><code>customRef</code> =&gt; <code>$customRef</code></li><li><code>toRef</code> =&gt; <code>$toRef</code></li></ul>`,10),p=[e];function t(c,r,i,y,D,F){return a(),n("div",null,p)}const u=s(o,[["render",t]]);export{B as __pageData,u as default};