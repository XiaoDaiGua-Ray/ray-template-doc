import{_ as s,o as a,c as n,V as l}from"./chunks/framework.51f721ee.js";const A=JSON.parse('{"title":"全局常用 hooks","description":"","frontmatter":{},"headers":[],"relativePath":"ray-template-docs/advanced/hooks/web.md","filePath":"ray-template-docs/advanced/hooks/web.md","lastUpdated":1703251831000}'),o={name:"ray-template-docs/advanced/hooks/web.md"},p=l(`<h1 id="全局常用-hooks" tabindex="-1">全局常用 hooks <a class="header-anchor" href="#全局常用-hooks" aria-label="Permalink to &quot;全局常用 hooks&quot;">​</a></h1><h2 id="usedayjs" tabindex="-1">useDayjs <a class="header-anchor" href="#usedayjs" aria-label="Permalink to &quot;useDayjs&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">useDayjs</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/hooks/web/index</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h3 id="locale" tabindex="-1">locale <a class="header-anchor" href="#locale" aria-label="Permalink to &quot;locale&quot;">​</a></h3><p>切换语言包</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> locale </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">useDayjs</span><span style="color:#BABED8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">locale</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zh-cn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// 切换为中文简体</span></span>
<span class="line"><span style="color:#82AAFF;">locale</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// 切换为英文</span></span></code></pre></div><h3 id="isdayjs" tabindex="-1">isDayjs <a class="header-anchor" href="#isdayjs" aria-label="Permalink to &quot;isDayjs&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> isDayjs </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">useDayjs</span><span style="color:#BABED8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isDayjs</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-11-11</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#82AAFF;">isDayjs</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1239123789</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// false</span></span></code></pre></div><h3 id="format" tabindex="-1">format <a class="header-anchor" href="#format" aria-label="Permalink to &quot;format&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> format </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">useDayjs</span><span style="color:#BABED8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">dayjs</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">format</span><span style="color:#BABED8;">() </span><span style="color:#676E95;font-style:italic;">// &#39;2020-04-02T08:02:17-05:00&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">dayjs</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2019-01-25</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">format</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">DD/MM/YYYY</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// &#39;25/01/2019&#39;</span></span></code></pre></div><h3 id="getstartandendofday" tabindex="-1">getStartAndEndOfDay <a class="header-anchor" href="#getstartandendofday" aria-label="Permalink to &quot;getStartAndEndOfDay&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> getStartAndEndOfDay </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">useDayjs</span><span style="color:#BABED8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> today</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> startOfDay</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> endOfDay</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> formatToday</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> formatStartOfDay </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#82AAFF;">getStartAndEndOfDay</span><span style="color:#BABED8;">()</span></span></code></pre></div><h3 id="daysdiff" tabindex="-1">daysDiff <a class="header-anchor" href="#daysdiff" aria-label="Permalink to &quot;daysDiff&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> daysDiff </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">useDayjs</span><span style="color:#BABED8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">daysDiff</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-01-11</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-01-12</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#82AAFF;">daysDiff</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2021-01-11</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-01-12</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// 366</span></span>
<span class="line"><span style="color:#82AAFF;">daysDiff</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2023-01-11</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-01-12</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// -364</span></span></code></pre></div><h3 id="isdateinrange" tabindex="-1">isDateInRange <a class="header-anchor" href="#isdateinrange" aria-label="Permalink to &quot;isDateInRange&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> isDateInRange </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">useDayjs</span><span style="color:#BABED8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isDateInRange</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2023-01-16</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">start</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2023-01-15</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">end</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2023-01-20</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#82AAFF;">isDateInRange</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2023-01-15</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">start</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2023-01-15</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">end</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2023-01-20</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">//false</span></span>
<span class="line"><span style="color:#82AAFF;">isDateInRange</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2023-01-20</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">start</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2023-01-15</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">end</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2023-01-20</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">//false</span></span></code></pre></div><h2 id="usedevice" tabindex="-1">useDevice <a class="header-anchor" href="#usedevice" aria-label="Permalink to &quot;useDevice&quot;">​</a></h2><blockquote><p><code>isTabletOrSmaller</code> 为 <code>true</code> 则表示当前设备尺寸为平板或者更小</p></blockquote><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> width</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> height</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> isTabletOrSmaller </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">useDevice</span><span style="color:#BABED8;">()</span></span></code></pre></div><h2 id="usei18n" tabindex="-1">useI18n <a class="header-anchor" href="#usei18n" aria-label="Permalink to &quot;useI18n&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>重写 <code>vue-i18n</code> 的 <code>useI18n</code> 方法。允许在任何环境中使用，也就意味着可以脱离 <code>setup</code> 环境约束使用。该方法的使用逻辑、参数都与官方的保持一致，这里不在赘述。</p></div><h2 id="usevuerouter" tabindex="-1">useVueRouter <a class="header-anchor" href="#usevuerouter" aria-label="Permalink to &quot;useVueRouter&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>允许在非 <code>setup</code> 环境使用 <code>router</code>。但是在使用的时候会有 <code>HMR</code> 报错的问题，可能会有点影响体验，不太推荐使用。</p></div><h2 id="usedomtoimage" tabindex="-1">useDomToImage <a class="header-anchor" href="#usedomtoimage" aria-label="Permalink to &quot;useDomToImage&quot;">​</a></h2><p>基于 <code>dom-to-image</code> 拓展，允许传递 <code>ref dom</code> 与额外的配置项。其余的使用方法与官方保持一致。</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">domRef</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">hello world</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">create</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">点击下载</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">useDomToImage</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/hooks/web</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> domRef </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">HTMLElement</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> create </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">useDomToImage</span><span style="color:#BABED8;">(domRef</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">imageType</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">jpeg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 默认 jpeg，&#39;svg&#39; | &#39;png&#39; | &#39;jpeg&#39; | &#39;blob&#39; | &#39;pixelData&#39;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#82AAFF;">beforeCreate</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">element</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#82AAFF;">created</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">result</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">element</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#82AAFF;">createdError</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">error</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#82AAFF;">finally</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 一些 dom-to-image 的配置项。与官方保持一致，以上为拓展的配置项</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="useprint" tabindex="-1">usePrint <a class="header-anchor" href="#useprint" aria-label="Permalink to &quot;usePrint&quot;">​</a></h2><p>基于 <code>print-js</code> 拓展，允许传递 <code>ref dom</code> 与额外的配置项。其余的使用方法与官方保持一致。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果是需要直接打印元素，不建议直接使用该方法。可以使用 <a href="/ray-template-doc/ray-template-docs/dev/utils/dom.html"><code>printDom</code></a> 方法，避免一些奇奇怪怪的问题。</p></div><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">domRef</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">hello world</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">print</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">点击打印</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">usePrint</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/hooks/web</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> domRef </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">HTMLElement</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">()</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> print </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">usePrint</span><span style="color:#BABED8;">(domeRef</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 一些 print-js 的配置项</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,30),e=[p];function t(c,r,D,y,F,B){return a(),n("div",null,e)}const E=s(o,[["render",t]]);export{A as __pageData,E as default};