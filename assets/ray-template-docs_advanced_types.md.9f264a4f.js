import{_ as s,o as a,c as n,V as l}from"./chunks/framework.51f721ee.js";const E=JSON.parse('{"title":"TS Types","description":"","frontmatter":{},"headers":[],"relativePath":"ray-template-docs/advanced/types.md","filePath":"ray-template-docs/advanced/types.md","lastUpdated":1703251831000}'),p={name:"ray-template-docs/advanced/types.md"},o=l(`<h1 id="ts-types" tabindex="-1">TS Types <a class="header-anchor" href="#ts-types" aria-label="Permalink to &quot;TS Types&quot;">​</a></h1><p>该包存放了全局的类型定义与一些常用的工具类型。按照名称一一对应每个模块包。这里就不做过多的赘述，下面详细介绍一下工具类型的使用。</p><h2 id="conditionalkeys" tabindex="-1">ConditionalKeys <a class="header-anchor" href="#conditionalkeys" aria-label="Permalink to &quot;ConditionalKeys&quot;">​</a></h2><p>从类型中挑选匹配的属性名</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">ConditionalKeys</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/types/modules/helper</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Foo</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">FooKeys</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ConditionalKeys</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Foo</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// &#39;a&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">FooKeys2</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ConditionalKeys</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Foo</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// &#39;a&#39; | &#39;b&#39;</span></span></code></pre></div><h2 id="conditionalpick" tabindex="-1">ConditionalPick <a class="header-anchor" href="#conditionalpick" aria-label="Permalink to &quot;ConditionalPick&quot;">​</a></h2><p>从类型中挑选匹配的属性</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">ConditionalPick</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/types/modules/helper</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Foo</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">FooKeys</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ConditionalPick</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Foo</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// { a: string }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">FooKeys2</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ConditionalPick</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Foo</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// { a: string, b: number }</span></span></code></pre></div><h2 id="conditionalexclude" tabindex="-1">ConditionalExclude <a class="header-anchor" href="#conditionalexclude" aria-label="Permalink to &quot;ConditionalExclude&quot;">​</a></h2><p>从类型中排除匹配的类型</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">ConditionalExclude</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/types/modules/helper</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Foo</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">FooKeys</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ConditionalExclude</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Foo</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// { b: number, c: boolean }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">FooKeys2</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ConditionalExclude</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Foo</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// { c: boolean }</span></span></code></pre></div><h2 id="recordable" tabindex="-1">Recordable <a class="header-anchor" href="#recordable" aria-label="Permalink to &quot;Recordable&quot;">​</a></h2><p>任意类型的对象</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">Recordable</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/types/modules/helper</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> foo</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Recordable</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">e</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> bar</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Recordable</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="valueof" tabindex="-1">ValueOf <a class="header-anchor" href="#valueof" aria-label="Permalink to &quot;ValueOf&quot;">​</a></h2><p>获取对象的值类型</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">ValueOf</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/types/modules/helper</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Foo</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">FooValue</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ValueOf</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Foo</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// string | number | boolean</span></span></code></pre></div><h2 id="mutable" tabindex="-1">Mutable <a class="header-anchor" href="#mutable" aria-label="Permalink to &quot;Mutable&quot;">​</a></h2><p>移除类型的只读属性</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">Mutable</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/types/modules/helper</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Foo</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">readonly</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">readonly</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">readonly</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">FooValue</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Mutable</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Foo</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// { a: string, b: number, c: boolean }</span></span></code></pre></div><h2 id="deepmutable" tabindex="-1">DeepMutable <a class="header-anchor" href="#deepmutable" aria-label="Permalink to &quot;DeepMutable&quot;">​</a></h2><p>递归移除类型的只读</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">DeepMutable</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/types/modules/helper</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Foo</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">readonly</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">readonly</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">readonly</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">readonly</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">readonly</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">e</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">readonly</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">f</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">readonly</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">g</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">FooValue</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">DeepMutable</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Foo</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// { a: string, b: number, c: boolean, d: { e: string, f: number, g: boolean } }</span></span></code></pre></div><h2 id="returnpromisetype" tabindex="-1">ReturnPromiseType <a class="header-anchor" href="#returnpromisetype" aria-label="Permalink to &quot;ReturnPromiseType&quot;">​</a></h2><p>获取函数返回值的 Promise 类型</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">ReturnPromiseType</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/types/modules/helper</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">FooValue</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ReturnPromiseType</span><span style="color:#89DDFF;">&lt;typeof</span><span style="color:#BABED8;"> foo</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// number</span></span></code></pre></div>`,26),e=[o];function t(c,r,y,F,D,B){return a(),n("div",null,e)}const A=s(p,[["render",t]]);export{E as __pageData,A as default};
