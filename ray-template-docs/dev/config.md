# 项目配置项

:::tip 备注
项目的配置区分为 `cfg` 与 `appConfig` 两种。`cfg` 依赖 `appConfig` 下的配置。所有配置项都提供了完整的类型。该配置项文档可能会落后于项目实际开放的配置能力，请以实际项目为准。
:::

# cfg.ts 配置项

> 该配置项有一些属性会被暴露给全局，可以使用 `__APP_CFG__` 访问。

```ts
const config: AppConfigExport = {
  /** 公共基础路径配置, 如果为空则会默认以 '/' 填充 */
  base: '/ray-template/',
  /** 配置首屏加载信息 */
  preloadingConfig: PRE_LOADING_CONFIG,
  /** 默认主题色(不可省略, 必填), 也用于 ejs 注入 */
  appPrimaryColor: APP_THEME.APP_PRIMARY_COLOR,
  sideBarLogo: SIDE_BAR_LOGO,
  /**
   *
   * 预处理全局需要注入的 css 文件
   *
   * 预设:
   *   - ./src/styles/mixins.scss
   *   - ./src/styles/setting.scss
   *   - ./src/styles/theme.scss
   *
   * 如果需要删除或者修改, 需要同步修改目录下的 css 文件
   */
  mixinCSS: mixinCSSPlugin([
    './src/styles/mixins.scss',
    './src/styles/setting.scss',
  ]),
  /**
   *
   * 版权信息
   *
   * 也可以当作页底设置, 看实际业务需求
   */
  copyright: 'Copyright © 2022-present Ray',
  /**
   *
   * 浏览器标题
   */
  title: HTMLTitlePlugin('Ray Template'),
  /**
   *
   * 配置 HMR 特定选项(端口、主机、路径和协议)
   */
  server: {
    host: '0.0.0.0',
    port: 9527,
    open: false,
    https: false,
    strictPort: false,
    fs: {
      strict: false,
      allow: [],
    },
    proxy: {
      '/api': {
        target: 'url',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/office': {
        target: 'https://office.yka.one/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/office/, ''),
      },
    },
  },
  /**
   *
   * 打包相关配置
   */
  buildOptions: buildOptions,
  /**
   *
   * 预设别名
   * - `@`: `src` 根目录
   * - `@use-utils`: `src/utils` 根目录
   * - `@use-api`: `src/axios/api` 根目录
   * - `@use-images`: `src/assets/images` 根目录
   */
  alias: [
    {
      find: '@',
      replacement: path.resolve(__dirname, './src'),
    },
    {
      find: '@use-utils',
      replacement: path.resolve(__dirname, './src/utils'),
    },
    {
      find: '@use-api',
      replacement: path.resolve(__dirname, './src/axios/api'),
    },
    {
      find: '@use-images',
      replacement: path.resolve(__dirname, './src/assets/images'),
    },
  ],
}
```

## appConfig 系统配置

### 路由缓存

```ts
export const APP_KEEP_ALIVE: Readonly<AppKeepAlive> = {
  setupKeepAlive: true, // 是否启用系统页面缓存, 设置为 false 则关闭系统页面缓存
  keepAliveExclude: [], // 排除哪些页面不缓存
  maxKeepAliveLength: 5, // 最大缓存页面数量
}
```

### 首屏加载信息

```ts
export const PRE_LOADING_CONFIG: PreloadingConfig = {
  title: 'Ray Template', // 标题
  tagColor: '#ff6700', // 加载动画颜色
  titleColor: '#2d8cf0', // 标题颜色
}
```

### 配置根页面（不可省略）

```ts
export const ROOT_ROUTE: Readonly<RootRoute> = {
  name: 'Dashboard',
  path: '/dashboard',
}
```

:::danger 注意
该项目所有重定向至首页，都依赖该配置项。如果修改了该项目的首页路由配置，需要更改该配置项，以免重定向首页操作出现错误。
:::

### 菜单标题

```ts
export const SIDE_BAR_LOGO: LayoutSideBarLogo = {
  icon: 'ray', // 依赖 `RayIcon` 实现（如果为空则不会渲染图标）
  title: 'Ray Template', // LOGO 标题
  url: '/dashboard', // 点击跳转地址，如果不配置该属性，则不会触发跳转
  jumpType: 'station', // 跳转类型(station：项目内跳转，outsideStation：新页面打开)
}
```

### 菜单风格配置项

```ts
export const APP_MENU_CONFIG: Readonly<AppMenuConfig> = {
  MENU_COLLAPSED_WIDTH: 64, // 配置仅当 MENU_COLLAPSED_MODE 为 width 风格时才有效
  MENU_COLLAPSED_MODE: 'width', // transform：边栏将只会移动它的位置而不会改变宽度，width：Sider 的内容宽度将会被实际改变
  MENU_COLLAPSED_ICON_SIZE: 22, // 配置菜单未折叠时图标的大小
  MENU_COLLAPSED_INDENT: 24, // 配置菜单每级的缩进
  MENU_ACCORDION: false, // 手风琴模式
}
```

### 预设 catch key

```ts
export const APP_CATCH_KEY = {
  signin: 'signin', // 登陆信息缓存 key
  localeLanguage: 'localeLanguage', // 国际化默认缓存 key
  token: 'token', // token key
} as const
```

## designConfig 配置项

### 主题配置

````ts
export const APP_THEME: AppTheme = {
  /**
   *
   * 系统主题颜色预设色盘
   * 支持 RGBA、RGB、十六进制
   */
  APP_THEME_COLOR: [
    '#2d8cf0',
    '#0960bd',
    '#536dfe',
    '#ff5c93',
    '#ee4f12',
    '#9c27b0',
    '#ff9800',
    '#18A058',
  ],
  /** 系统主题色 */
  APP_PRIMARY_COLOR: {
    /** 主题色 */
    primaryColor: '#2d8cf0',
    /** 主题辅助色(用于整体 hover、active 等之类颜色) */
    primaryFadeColor: 'rgba(45, 140, 240, 0.3)',
  },
  /**
   *
   * 配置系统 naive-ui 主题色
   * 官网文档地址: <https://www.naiveui.com/zh-CN/dark/docs/customize-theme>
   *
   * 注意:
   *   - APP_PRIMARY_COLOR common 配置优先级大于该配置
   *
   * 如果需要定制化整体组件样式, 配置示例
   * ```
   * const themeOverrides: GlobalThemeOverrides = {
   *   common: {
   *     primaryColor: '#FF0000',
   *   },
   *   Button: {
   *     textColor: '#FF0000',
   *   },
   * }
   * ```
   *
   * 具体自行查看官网, 还有模式更佳丰富的 peers 主题变量配置
   * 地址: <https://www.naiveui.com/zh-CN/dark/docs/customize-theme#%E4%BD%BF%E7%94%A8-peers-%E4%B8%BB%E9%A2%98%E5%8F%98%E9%87%8F>
   */
  APP_NAIVE_UI_THEME_OVERRIDES: {},
}
````

## localConfig 配置项

### 国际化下拉框配置

```ts
export const LOCAL_OPTIONS: AppLocalesDropdownMixedOption[] = [
  {
    key: 'zh-CN',
    label: '中文(简体)',
  },
  {
    key: 'en-US',
    label: 'English(US)',
  },
]
```

:::danger 注意
语言包语种添加后，需要在此文件配置语言包。该配置中的 key 也会影响 naiveLocales 方法，配置后请仔细核对一下。添加新的语言包后，如果需要其类型提示，需要在 CurrentAppMessages 中添加新的类型。
:::

### 默认语言

```ts
export const SYSTEM_DEFAULT_LOCAL = 'zh-CN' // 配置时应该与 LOCAL_OPTIONS 的 key 一致
```

### dayjs 国际化映射配置项

```ts
/**
 *
 * i18n 国际化配置与 dayjs 配置的映射入口
 *
 * key 应该与 LOCAL_OPTIONS key 一致
 * 配置时请仔细检查
 */
export const DAYJS_LOCAL_MAP: DayjsLocalMap = {
  'zh-CN': 'zh-cn',
  'en-US': 'en',
}
```

## requestConfig 配置项

### axios 公共配置项

```ts
import type { AxiosConfig } from '@/types/modules/appConfig'

/** axios 相关配置 */
export const AXIOS_CONFIG: AxiosConfig = {
  baseURL: '', // `import.meta.env`,
  withCredentials: false, // 是否允许跨域携带 `cookie`
  timeout: 5 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
}
```

## routerConfig 配置项

### 内容区域 ref 注册

````ts
/**
 *
 * 内容区域 ref 注册
 * 可以控制内容区域当前滚动位置
 * 如果你需要在切换路由时候配置自定义滚动到某个视图区域时, 可以使用该属性提供的方法(scrollTo)
 *
 * 请注意
 * 如果你动态的添加了某个属性后, 希望控制滚动条滚动到某个区域时, 应该注意 dom 挂载后再执行该方法
 * @example
 * ```ts
 * nextTick().then(() => {
 *  LAYOUT_CONTENT_REF.value?.scrollTo()
 * })
 * ```
 */
export const LAYOUT_CONTENT_REF = ref<LayoutInst>()
````

### 是否启用路由切换时顶部加载条动画

```ts
export const SETUP_ROUTER_LOADING_BAR = true
```

### 是否启用路由守卫

```ts
/** 是否启用路由守卫, 如果设置为 false 则不会触发路由切换校验 */
export const SETUP_ROUTER_GUARD = true
```

### 白名单

```ts
/**
 *
 * 路由白名单(不进行权限校验路由)
 *
 * 路由表单白名单
 *
 * 如果需要启用该功能, 则需要配置路由 name 属性, 并且需要一一对应(对大小写敏感)
 * 并且在配置 route name 属性时, 如果 name 类型为 symbol 的话, 会认为该路由永远不与白名单列表进行匹配
 */
export const WHITE_ROUTES: string[] = ['RLogin', 'ErrorPage', 'RayTemplateDoc']
```

### 超级管理员

```ts
/**
 *
 * 超级管理员
 * 配置默认超级管理员, 默认拥有全部最高权限
 */
export const SUPER_ADMIN: (string | number)[] = ['admin']
```
