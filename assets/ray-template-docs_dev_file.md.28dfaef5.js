import{_ as s,o as a,c as n,U as l}from"./chunks/framework.56c084f4.js";const _=JSON.parse('{"title":"目录结构","description":"","frontmatter":{},"headers":[],"relativePath":"ray-template-docs/dev/file.md","filePath":"ray-template-docs/dev/file.md","lastUpdated":1691570920000}'),e={name:"ray-template-docs/dev/file.md"},p=l(`<h1 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h1><h2 id="主要文件" tabindex="-1">主要文件 <a class="header-anchor" href="#主要文件" aria-label="Permalink to &quot;主要文件&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ray-template</span></span>
<span class="line"><span style="color:#A6ACCD;">|- cfg.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">|- vite.config.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">|- src</span></span>
<span class="line"><span style="color:#A6ACCD;">|--|- appConfig</span></span>
<span class="line"><span style="color:#A6ACCD;">|--|- assets</span></span>
<span class="line"><span style="color:#A6ACCD;">|--|- axios</span></span>
<span class="line"><span style="color:#A6ACCD;">|--|- components</span></span>
<span class="line"><span style="color:#A6ACCD;">|--|- dayjs</span></span>
<span class="line"><span style="color:#A6ACCD;">|--|- directives</span></span>
<span class="line"><span style="color:#A6ACCD;">|--|- error</span></span>
<span class="line"><span style="color:#A6ACCD;">|--|- icons</span></span>
<span class="line"><span style="color:#A6ACCD;">|--|- layout</span></span>
<span class="line"><span style="color:#A6ACCD;">|--|- locales</span></span>
<span class="line"><span style="color:#A6ACCD;">|--|- router</span></span>
<span class="line"><span style="color:#A6ACCD;">|--|- spin</span></span>
<span class="line"><span style="color:#A6ACCD;">|--|- store</span></span>
<span class="line"><span style="color:#A6ACCD;">|--|- types</span></span>
<span class="line"><span style="color:#A6ACCD;">|--|- utils</span></span>
<span class="line"><span style="color:#A6ACCD;">|--|- views</span></span>
<span class="line"><span style="color:#A6ACCD;">|--|- App.tsx</span></span>
<span class="line"><span style="color:#A6ACCD;">|--|- main.ts</span></span></code></pre></div><h2 id="目录说明" tabindex="-1">目录说明 <a class="header-anchor" href="#目录说明" aria-label="Permalink to &quot;目录说明&quot;">​</a></h2><ul><li>cfg.ts：该配置文件主要是用于 <code>vite.config.ts</code> 中的一些配置，并且部分配置会暴露在全局和 <code>ejs</code> 的注入</li></ul><div class="tip custom-block"><p class="custom-block-title">描述</p><p>这个配置文件主要用于配置 <code>vite.config.ts</code> 中的选项，其中一些选项会被暴露在全局和 <code>ejs</code> 中，以便于在应用程序的不同部分中使用。</p></div><ul><li>vite.config.ts：<code>vite.config.ts</code> 的一些配置</li><li>src：模板的入口文件</li></ul><div class="tip custom-block"><p class="custom-block-title">注</p><p>该文件这里不做赘述，后面会详细的介绍每个目录文件的作用。</p></div>`,8),o=[p];function t(c,i,r,d,C,A){return a(),n("div",null,o)}const u=s(e,[["render",t]]);export{_ as __pageData,u as default};
