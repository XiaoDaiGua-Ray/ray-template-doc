import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.CtA4ZjMf.js";const u=JSON.parse('{"title":"快速上手","description":"","frontmatter":{},"headers":[],"relativePath":"docs/refer/setup.md","filePath":"docs/refer/setup.md","lastUpdated":1715849193000}'),i={name:"docs/refer/setup.md"},e=p(`<h1 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h1><p>准备，启航！</p><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><p>一些常用的相关命名。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-AJ8LM" id="tab-zH4TqE0" checked="checked"><label for="tab-zH4TqE0">安装依赖</label><input type="radio" name="group-AJ8LM" id="tab-eODRgcE"><label for="tab-eODRgcE">启动项目</label><input type="radio" name="group-AJ8LM" id="tab-08-hYTK"><label for="tab-08-hYTK">构建项目</label><input type="radio" name="group-AJ8LM" id="tab-pdZHWHE"><label for="tab-pdZHWHE">代码检查与修复</label><input type="radio" name="group-AJ8LM" id="tab-76opXWi"><label for="tab-76opXWi">体积分析</label><input type="radio" name="group-AJ8LM" id="tab-KEwHfo4"><label for="tab-KEwHfo4">单测</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lint</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> report</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 命令行查看</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 可视化查看</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test:ui</span></span></code></pre></div></div></div><h2 id="文件结构" tabindex="-1">文件结构 <a class="header-anchor" href="#文件结构" aria-label="Permalink to &quot;文件结构&quot;">​</a></h2><p>简单看看，有点多。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ __test__</span></span>
<span class="line"><span>├─ .github</span></span>
<span class="line"><span>├─ husky</span></span>
<span class="line"><span>├─ .vscode</span></span>
<span class="line"><span>├─ mock</span></span>
<span class="line"><span>├─ public</span></span>
<span class="line"><span>├─ src</span></span>
<span class="line"><span>│ ├─ __ray-template</span></span>
<span class="line"><span>│ ├─ api</span></span>
<span class="line"><span>│ ├─ app-components</span></span>
<span class="line"><span>│ ├─ app-config</span></span>
<span class="line"><span>│ ├─ assets</span></span>
<span class="line"><span>│ ├─ axios</span></span>
<span class="line"><span>│ ├─ components</span></span>
<span class="line"><span>│ ├─ dayjs</span></span>
<span class="line"><span>│ ├─ directives</span></span>
<span class="line"><span>│ ├─ global-variable</span></span>
<span class="line"><span>│ ├─ hooks</span></span>
<span class="line"><span>│ ├─ icons</span></span>
<span class="line"><span>│ ├─ layout</span></span>
<span class="line"><span>│ ├─ locales</span></span>
<span class="line"><span>│ ├─ router</span></span>
<span class="line"><span>│ ├─ store</span></span>
<span class="line"><span>│ ├─ styles</span></span>
<span class="line"><span>│ ├─ types</span></span>
<span class="line"><span>│ ├─ utils</span></span>
<span class="line"><span>│ ├─ views</span></span>
<span class="line"><span>│ ├─ App.tsx</span></span>
<span class="line"><span>│ └─ main.ts</span></span>
<span class="line"><span>├─ unplugin</span></span>
<span class="line"><span>├─ vite-helper</span></span>
<span class="line"><span>└─ some config files</span></span></code></pre></div>`,8),l=[e];function t(c,h,o,d,r,k){return n(),a("div",null,l)}const b=s(i,[["render",t]]);export{u as __pageData,b as default};
