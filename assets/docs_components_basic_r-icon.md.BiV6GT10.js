import{_ as t,c as s,o as d,a3 as i}from"./chunks/framework.CtA4ZjMf.js";const u=JSON.parse('{"title":"RIcon 图表","description":"","frontmatter":{},"headers":[],"relativePath":"docs/components/basic/r-icon.md","filePath":"docs/components/basic/r-icon.md","lastUpdated":1715849193000}'),e={name:"docs/components/basic/r-icon.md"},a=i(`<h1 id="ricon-图表" tabindex="-1">RIcon 图表 <a class="header-anchor" href="#ricon-图表" aria-label="Permalink to &quot;RIcon 图表&quot;">​</a></h1><p>快捷使用 <code>svg</code> 作为图标。</p><h2 id="使用流程" tabindex="-1">使用流程 <a class="header-anchor" href="#使用流程" aria-label="Permalink to &quot;使用流程&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>如果需要让 <code>svg</code> 继承 <code>color</code> 颜色值，需要注意 <code>svg</code> 文件的 <code>fill</code> 属性是否为 <code>currentColor</code>。</p></div><ul><li>引入图标至 <code>src/icons</code> 文件夹下</li><li>确保文件名为 <code>demo.svg</code> 格式</li><li>使用 <code>RIcon</code> 组件引入图标</li></ul><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { RIcon } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/components&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Demo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RIcon</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> icon</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;demo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>color</td><td><code>string</code></td><td><code>currentColor</code></td><td>图标颜色</td></tr><tr><td>prefix</td><td><code>string</code></td><td><code>icon</code></td><td>图标前缀</td></tr><tr><td>name</td><td><code>string</code></td><td><code>-</code></td><td>图标名称，名称为图标的文件名，必填</td></tr><tr><td>size</td><td><code>string | number</code></td><td><code>14</code></td><td>图标尺寸，同时设置宽高</td></tr><tr><td>width</td><td><code>string | number</code></td><td><code>0</code></td><td>图标宽度</td></tr><tr><td>height</td><td><code>string | number</code></td><td><code>0</code></td><td>图标高度</td></tr><tr><td>depth</td><td><code>number</code></td><td><code>1</code></td><td>图标颜色深度，也就是透明度</td></tr><tr><td>cursor</td><td><code>string</code></td><td><code>default</code></td><td>鼠标样式</td></tr></tbody></table>`,8),o=[a];function n(c,r,l,h,p,k){return d(),s("div",null,o)}const m=t(e,[["render",n]]);export{u as __pageData,m as default};