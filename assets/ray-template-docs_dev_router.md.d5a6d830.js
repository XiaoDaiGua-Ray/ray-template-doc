import{_ as s,o as a,c as n,V as l}from"./chunks/framework.51f721ee.js";const E=JSON.parse('{"title":"路由","description":"","frontmatter":{},"headers":[],"relativePath":"ray-template-docs/dev/router.md","filePath":"ray-template-docs/dev/router.md","lastUpdated":1703468607000}'),p={name:"ray-template-docs/dev/router.md"},o=l(`<h1 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-label="Permalink to &quot;路由&quot;">​</a></h1><blockquote><p>项目的路由都存于 <code>src/router</code> 中。<code>src/router/modules</code> 存放所有的路由模块，并且会自动的注册。</p></blockquote><div class="warning custom-block"><p class="custom-block-title">注意</p><ul><li>在该模板中，路由 path 属性视 <code>/</code> 开头的路由为根路由</li><li>路由会在初始化的时候将所有路由进行提升（全部提升为顶级路由），所以注意第一条 Tip</li><li>路由模块会影响菜单的输出显示（菜单模块与路由模块进行拆分开来的）</li><li>具体路由支持配置属性看 router/README.md 文件</li></ul></div><h2 id="layout-组件" tabindex="-1">LAYOUT 组件 <a class="header-anchor" href="#layout-组件" aria-label="Permalink to &quot;LAYOUT 组件&quot;">​</a></h2><blockquote><p>router modules 包中的路由模块会与菜单一一映射，也就是说，路由模块的配置结构会影响菜单的展示。当你有子菜单需要配置时，你需要使用该组件。</p></blockquote><h3 id="路由模块" tabindex="-1">路由模块 <a class="header-anchor" href="#路由模块" aria-label="Permalink to &quot;路由模块&quot;">​</a></h3><blockquote><p>在 <code>src/router/modules</code> 中的每一个 <code>.ts</code> 文件都会被视为一个路由模块。不论文件深度。</p></blockquote><h3 id="路由模块结构" tabindex="-1">路由模块结构 <a class="header-anchor" href="#路由模块结构" aria-label="Permalink to &quot;路由模块结构&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">t</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/locales/useI18n</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">LAYOUT</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/router/constant/index</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">AppRouteRecordRaw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/router/type</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> demo</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">AppRouteRecordRaw</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 路由路径，如果为根菜单且无有菜单的时候可以配置为空字符串 */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/demo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** views component name，必须与组件 name 属性匹配，否则缓存属性会失效 */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">RDemo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 这样配置后，就无须在 views 中重复写 &lt;view-router /&gt; 了 */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> LAYOUT</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">/** t 方法是一个纯函数，为了配合 i18n ally 插件提示使用 */</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">i18nKey</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">t</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menu.Demo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">demo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">order</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/demo-child</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">RDemoChild</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#82AAFF;">component</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">import</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/views/demo-child/index</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">i18nKey</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">t</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menu.DemoChild</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">demo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">order</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> dashboard</span></span></code></pre></div><h2 id="多级路由" tabindex="-1">多级路由 <a class="header-anchor" href="#多级路由" aria-label="Permalink to &quot;多级路由&quot;">​</a></h2><ul><li><h3 id="子路由" tabindex="-1">子路由 <a class="header-anchor" href="#子路由" aria-label="Permalink to &quot;子路由&quot;">​</a></h3></li></ul><div class="tip custom-block"><p class="custom-block-title">转换前</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">t</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/locales/useI18n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 用于 \`i18n-ally\` 插件</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">LAYOUT</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/router/constant/index</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 内容区域父组件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">AppRouteRecordRaw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/router/type</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> demo</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">AppRouteRecordRaw</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/multi</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MultiMenu</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">i18nKey</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MultiMenu</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">table</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">multi-menu-one</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MultiMenuOne</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">noLocalTitle</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">多级菜单-1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">multi-menu-one</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">breadcrumbLabel</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">多级菜单-1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">show</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">multi-menu-two</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MultiMenuTwo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">noLocalTitle</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">多级菜单-2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sub-menu</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SubMenu</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#F07178;">noLocalTitle</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">多级菜单-2-1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sub-menu</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">breadcrumbLabel</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">多级菜单-2-1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">show</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">multi-menu-two</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">breadcrumbLabel</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">多级菜单-2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">show</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">转换后</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> transform </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/multi/multi-menu-one</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MultiMenuOne</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">noLocalTitle</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">多级菜单-1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">multi-menu-one</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">breadcrumbLabel</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">多级菜单-1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">show</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/multi/multi-menu-two/sub-menu</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SubMenu</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">noLocalTitle</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">多级菜单-2-1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sub-menu</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">breadcrumbLabel</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">多级菜单-2-1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">show</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">]</span></span></code></pre></div></div><h2 id="meta-配置属性" tabindex="-1">meta 配置属性 <a class="header-anchor" href="#meta-配置属性" aria-label="Permalink to &quot;meta 配置属性&quot;">​</a></h2><h3 id="配置说明" tabindex="-1">配置说明 <a class="header-anchor" href="#配置说明" aria-label="Permalink to &quot;配置说明&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">AppRouteMeta</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// i18n 国际化 key, 会优先使用该字段</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">i18nKey</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// icon 图标， 用于 Menu 菜单(依赖 RayIcon 组件实现)</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">VNode</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 超链接打开（新开窗口打开）</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">windowOpen</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 权限表</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">role</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> (</span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#BABED8;">)[]</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 是否隐藏菜单</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">hidden</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 使用普通文本内容渲染 Menu Title</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">noLocalTitle</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 是否忽略该页面内容区域自动初始化滚动条位置</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">ignoreAutoResetScroll</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//  菜单排序。子菜单该值无效，子菜单基于配置顺序排序。如果未设置则会按照 component name 进行排序，如果未匹配到 name 则会按照合并顺序排序</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">order</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 是否缓存该页面（需要配置 APP_KEEP_ALIVE setupKeepAlive 属性为 true 启用才有效），并且需要与组件 name 属性匹配</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">keepAlive</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 是否标记该路由为平级模式，如果标记为平级模式，会使路由菜单项隐藏。如果在含有子节点处，设置了该属性，会导致子节点全部被隐藏</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">sameLevel</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 根据当前环境展示、隐藏菜单（优先级最低）</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p><code>sameLevel</code> 在后续的使用 url 地址导航跳转时，如果在非当前路由层级层面跳转的该路由，会在当前的面包屑后面追加该模块的信息，触发跳转时，不会修改面包屑、标签页。</p></div><h2 id="路由守卫" tabindex="-1">路由守卫 <a class="header-anchor" href="#路由守卫" aria-label="Permalink to &quot;路由守卫&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">注</p><ul><li>根据 meta role 与 BASIC_ROUTER 结合进行跳转路由鉴权操作</li><li>如果 meta role 为空则会默认认为全局可用</li><li>如果需要指定角色，则添加该属性并且添加角色。当然，你可以指定一个超级管理员角色，默认获取全部路由</li></ul></div><h2 id="工具函数" tabindex="-1">工具函数 <a class="header-anchor" href="#工具函数" aria-label="Permalink to &quot;工具函数&quot;">​</a></h2><p>方法存放于 <code>src/router/helper/routerCopilot.ts</code> 与 <code>src/router/helper/useVueRouter.ts</code> 中。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">validRole</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">validMenuItemShow</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">redirectRouterToDashboard</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/router/helper/routerCopilot</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><ul><li><h3 id="validrole" tabindex="-1">validRole <a class="header-anchor" href="#validrole" aria-label="Permalink to &quot;validRole&quot;">​</a></h3></li></ul><blockquote><p>校验该路由项是否与权限匹配。</p></blockquote><ul><li><h3 id="validmenuitemshow" tabindex="-1">validMenuItemShow <a class="header-anchor" href="#validmenuitemshow" aria-label="Permalink to &quot;validMenuItemShow&quot;">​</a></h3></li></ul><blockquote><p>校验当前路由是否显示。该方法进行校验时，会将 hidden 与 sameLevel 一起进行校验，sameLevel 的优先级最高。</p></blockquote><ul><li><h3 id="redirectroutertodashboard" tabindex="-1">redirectRouterToDashboard <a class="header-anchor" href="#redirectroutertodashboard" aria-label="Permalink to &quot;redirectRouterToDashboard&quot;">​</a></h3></li></ul><blockquote><p>重定向路由至首页，默认采用替换方法重定向（replace）。该方法依赖 <code>ROOT_ROUTE</code> 配置项。</p></blockquote><ul><li><h3 id="usevuerouter" tabindex="-1">useVueRouter <a class="header-anchor" href="#usevuerouter" aria-label="Permalink to &quot;useVueRouter&quot;">​</a></h3></li></ul><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">useVueRouter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/router/helper/useVueRouter</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><blockquote><p>允许在 setup 环境外使用路由方法。但是该方法可能会导致 HMR 的时候出现加载报错的提示（手动刷新一下就好），如果你确定使用环境在 setup 环境中时，还是建议使用官方提供方法。</p></blockquote>`,31),e=[o];function t(c,r,D,y,F,B){return a(),n("div",null,e)}const A=s(p,[["render",t]]);export{E as __pageData,A as default};