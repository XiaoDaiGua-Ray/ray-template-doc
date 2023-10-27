import{_ as a,o as s,c as o,U as n}from"./chunks/framework.56c084f4.js";const h=JSON.parse('{"title":"组件","description":"","frontmatter":{},"headers":[],"relativePath":"ray-template-docs/dev/component.md","filePath":"ray-template-docs/dev/component.md","lastUpdated":1691570920000}'),e={name:"ray-template-docs/dev/component.md"},l=n(`<h1 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to &quot;组件&quot;">​</a></h1><h2 id="按需引入" tabindex="-1">按需引入 <a class="header-anchor" href="#按需引入" aria-label="Permalink to &quot;按需引入&quot;">​</a></h2><blockquote><p>开箱即用的按需引入功能，无需做任何的配置。但是，当你在导入某个 <code>ui</code> 组件的时候，你应该是按照解构的方法进行导入，而不是 <code>import UIComponents from ui</code>。因为这样做，会导致按需引入不生效。其实不仅仅是 <code>ui</code> 组件，在你引入某个大型的库时，应该也是解构导入。</p></blockquote><h2 id="已封装组件" tabindex="-1">已封装组件 <a class="header-anchor" href="#已封装组件" aria-label="Permalink to &quot;已封装组件&quot;">​</a></h2><p>除了 <code>RouterView</code> 组件，所有已封装组件都是基于 <code>naive ui</code>。组件都是以 <code>RayXXX</code> 格式命名，并且存放于 <code>src/components</code> 下。具体不赘述，可以在线预览查看组件效果。</p><h2 id="raychart" tabindex="-1">RayChart <a class="header-anchor" href="#raychart" aria-label="Permalink to &quot;RayChart&quot;">​</a></h2><p>基于 <code>echarts5.x</code> 封装。组件会自动管理 <code>echarts</code> 的注册、注销，让你仅需要关注 <code>options</code> 的管理。并且支持使用 <code>use</code> 进行自行拓展 <code>echarts</code> 提供的组件进行注册。</p><h2 id="rayicon" tabindex="-1">RayIcon <a class="header-anchor" href="#rayicon" aria-label="Permalink to &quot;RayIcon&quot;">​</a></h2><p>让你能够在项目中使用 <code>svg icon</code>。但是需要在使用前，在 <code>src/icons</code> 中提前引入 <code>svg</code>。</p><h2 id="raytable" tabindex="-1">RayTable <a class="header-anchor" href="#raytable" aria-label="Permalink to &quot;RayTable&quot;">​</a></h2><p>基于 <code>naive ui table</code> 组件封装，拓展了一些方法。</p><h2 id="rayiframe" tabindex="-1">RayIframe <a class="header-anchor" href="#rayiframe" aria-label="Permalink to &quot;RayIframe&quot;">​</a></h2><p>让你便捷使用、管理 <code>iframe</code>。</p><h2 id="raycollapsegrid" tabindex="-1">RayCollapseGrid <a class="header-anchor" href="#raycollapsegrid" aria-label="Permalink to &quot;RayCollapseGrid&quot;">​</a></h2><p>基于 <code>naive ui grid</code> 组件封装。能够进行折叠一些内容。但是该组件有一定的局限性，那就是仅支持结合 <code>naive grid item</code> 组件使用才能够实现布局效果。</p><h2 id="raytransitioncomponent" tabindex="-1">RayTransitionComponent <a class="header-anchor" href="#raytransitioncomponent" aria-label="Permalink to &quot;RayTransitionComponent&quot;">​</a></h2><p>带有过渡动画的 <code>RouterView</code>。</p><h2 id="组件开发" tabindex="-1">组件开发 <a class="header-anchor" href="#组件开发" aria-label="Permalink to &quot;组件开发&quot;">​</a></h2><blockquote><p>项目提供了 <code>tsx</code> <code>vue template</code> 两种开发方式。按照自己喜好开发即可。</p></blockquote><ul><li><h3 id="tsx-component" tabindex="-1">tsx component <a class="header-anchor" href="#tsx-component" aria-label="Permalink to &quot;tsx component&quot;">​</a></h3></li></ul><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">NButton</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">naive-ui</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> DemoComponent </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineComponent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">DemoComponent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">handleCount</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">handleCount</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">NButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">handleCount</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">this</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}&gt;{this.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#FFCB6B;">NButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> DemoComponent</span></span></code></pre></div><ul><li><h3 id="template-component" tabindex="-1">template component <a class="header-anchor" href="#template-component" aria-label="Permalink to &quot;template component&quot;">​</a></h3></li></ul><blockquote><p>这个大家应该很熟悉，就不做过多的赘述。</p></blockquote><h2 id="组件注册" tabindex="-1">组件注册 <a class="header-anchor" href="#组件注册" aria-label="Permalink to &quot;组件注册&quot;">​</a></h2><blockquote><p>如果有需要全局注册的组件，可以通过 <code>use</code> 方法注册。但是并不推荐全局注册组件，不论是 <code>ui component</code> 或者是 <code>custom component</code>。应该是自己手动在页面显式的导入并且使用。</p></blockquote>`,25),p=[l];function t(c,r,i,y,d,F){return s(),o("div",null,p)}const C=a(e,[["render",t]]);export{h as __pageData,C as default};