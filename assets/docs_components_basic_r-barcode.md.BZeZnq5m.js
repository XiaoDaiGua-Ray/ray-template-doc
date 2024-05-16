import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.CtA4ZjMf.js";const g=JSON.parse('{"title":"RBarcode 条形码","description":"","frontmatter":{},"headers":[],"relativePath":"docs/components/basic/r-barcode.md","filePath":"docs/components/basic/r-barcode.md","lastUpdated":1715849003000}'),n={name:"docs/components/basic/r-barcode.md"},e=t(`<h1 id="rbarcode-条形码" tabindex="-1">RBarcode 条形码 <a class="header-anchor" href="#rbarcode-条形码" aria-label="Permalink to &quot;RBarcode 条形码&quot;">​</a></h1><p>条形码。</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><details class="details custom-block"><summary>code</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { RBarcode } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/components&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Demo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RBarcode</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;123456789&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></details><h2 id="回调函数" tabindex="-1">回调函数 <a class="header-anchor" href="#回调函数" aria-label="Permalink to &quot;回调函数&quot;">​</a></h2><details class="details custom-block"><summary>code</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { RBarcode } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/components&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Demo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _success</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _error</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _finally</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RBarcode</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;渲染成功&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onSuccess</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{_success} </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onFinally</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{_finally} /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RBarcode</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;渲染失败&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onError</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{_error} </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onFinally</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{_finally} /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></details><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>width</td><td><code>string | number</code></td><td><code>auto</code></td><td>条形码宽度</td></tr><tr><td>height</td><td><code>string | number</code></td><td><code>auto</code></td><td>条形码高度</td></tr><tr><td>loading</td><td><code>boolean</code></td><td><code>false</code></td><td>显示加载状态</td></tr><tr><td>barcodeRender</td><td><code>svg | canvas</code></td><td><code>canvas</code></td><td>渲染模式</td></tr><tr><td>text</td><td><code>string</code></td><td><code>undefine</code></td><td>条形码内容</td></tr><tr><td>options</td><td><code>RBarcodeOptions</code></td><td><code>{}</code></td><td>渲染配置项</td></tr><tr><td>format</td><td><code>RBarcodeFormat</code></td><td><code>CODE128</code></td><td>条形码输出格式，该配置项优先级最高</td></tr><tr><td>watchText</td><td><code>boolean</code></td><td><code>false</code></td><td>主动监听 <code>text</code> 内容变化，当内容变化时重新渲染条形码</td></tr><tr><td>onSuccess</td><td><code>(currentText: string | undefine, format: RBarcodeFormat, option: RBarcodeOptions) =&gt; void</code></td><td><code>undefine</code></td><td>渲染成功回调函数</td></tr><tr><td>onError</td><td><code>(error: Error) =&gt; void</code></td><td><code>undefine</code></td><td>渲染失败回调函数</td></tr><tr><td>onFinally</td><td><code>() =&gt; void</code></td><td><code>undefine</code></td><td>条形码渲染结束后执行的回调函数</td></tr></tbody></table>`,8),d=[e];function h(l,p,k,r,o,c){return a(),i("div",null,d)}const y=s(n,[["render",h]]);export{g as __pageData,y as default};
