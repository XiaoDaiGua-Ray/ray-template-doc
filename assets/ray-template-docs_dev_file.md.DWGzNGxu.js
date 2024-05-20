import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.CtA4ZjMf.js";const m=JSON.parse('{"title":"目录结构","description":"","frontmatter":{},"headers":[],"relativePath":"ray-template-docs/dev/file.md","filePath":"ray-template-docs/dev/file.md","lastUpdated":1716191600000}'),e={name:"ray-template-docs/dev/file.md"},l=p(`<h1 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h1><h2 id="主要文件" tabindex="-1">主要文件 <a class="header-anchor" href="#主要文件" aria-label="Permalink to &quot;主要文件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ray-template</span></span>
<span class="line"><span>|- cfg.ts</span></span>
<span class="line"><span>|- vite.config.ts</span></span>
<span class="line"><span>|- src</span></span>
<span class="line"><span>|--|- appConfig</span></span>
<span class="line"><span>|--|- assets</span></span>
<span class="line"><span>|--|- axios</span></span>
<span class="line"><span>|--|- components</span></span>
<span class="line"><span>|--|- dayjs</span></span>
<span class="line"><span>|--|- directives</span></span>
<span class="line"><span>|--|- error</span></span>
<span class="line"><span>|--|- icons</span></span>
<span class="line"><span>|--|- layout</span></span>
<span class="line"><span>|--|- locales</span></span>
<span class="line"><span>|--|- router</span></span>
<span class="line"><span>|--|- spin</span></span>
<span class="line"><span>|--|- store</span></span>
<span class="line"><span>|--|- types</span></span>
<span class="line"><span>|--|- utils</span></span>
<span class="line"><span>|--|- views</span></span>
<span class="line"><span>|--|- App.tsx</span></span>
<span class="line"><span>|--|- main.ts</span></span></code></pre></div><h2 id="目录说明" tabindex="-1">目录说明 <a class="header-anchor" href="#目录说明" aria-label="Permalink to &quot;目录说明&quot;">​</a></h2><ul><li>cfg.ts：该配置文件主要是用于 <code>vite.config.ts</code> 中的一些配置，并且部分配置会暴露在全局和 <code>ejs</code> 的注入</li></ul><div class="tip custom-block"><p class="custom-block-title">描述</p><p>这个配置文件主要用于配置 <code>vite.config.ts</code> 中的选项，其中一些选项会被暴露在全局和 <code>ejs</code> 中，以便于在应用程序的不同部分中使用。</p></div><ul><li>vite.config.ts：<code>vite.config.ts</code> 的一些配置</li><li>src：模板的入口文件</li></ul><div class="tip custom-block"><p class="custom-block-title">注</p><p>该文件这里不做赘述，后面会详细的介绍每个目录文件的作用。</p></div>`,8),t=[l];function i(c,o,d,r,h,u){return n(),a("div",null,t)}const f=s(e,[["render",i]]);export{m as __pageData,f as default};
