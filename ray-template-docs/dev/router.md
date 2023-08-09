# 路由

> 项目的路由都存于 `src/router` 中。`src/router/modules` 存放所有的路由模块，并且会自动的注册。

:::warning 注意

- 在该模板中，路由 path 属性视 `/` 开头的路由为根路由
- 路由会在初始化的时候将所有路由进行提升（全部提升为顶级路由），所以注意第一条 Tip
- 路由模块会影响菜单的输出显示（菜单模块与路由模块进行拆分开来的）
- 具体路由支持配置属性看 router/README.md 文件
  :::

## LAYOUT 组件

> router modules 包中的路由模块会与菜单一一映射，也就是说，路由模块的配置结构会影响菜单的展示。当你有子菜单需要配置时，你需要使用该组件。

### 路由模块

> 在 `src/router/modules` 中的每一个 `.ts` 文件都会被视为一个路由模块。不论文件深度。

### 路由模块结构

```ts
import { t } from '@/locales/useI18n'
import { LAYOUT } from '@/router/constant/index'

import type { AppRouteRecordRaw } from '@/router/type'

const demo: AppRouteRecordRaw = {
  /** 路由路径，如果为根菜单且无有菜单的时候可以配置为空字符串 */
  path: '/demo',
  /** views component name，必须与组件 name 属性匹配，否则缓存属性会失效 */
  name: 'RDemo',
  /** 这样配置后，就无须在 views 中重复写 <view-router /> 了 */
  component: LAYOUT,
  meta: {
    /** t 方法是一个纯函数，为了配合 i18n ally 插件提示使用 */
    i18nKey: t('menu.Demo'),
    icon: 'demo',
    order: 0,
  },
  children: [
    {
      path: '/demo-child',
      name: 'RDemoChild',
      component: () => import('@/views/demo-child/index'),
      meta: {
        i18nKey: t('menu.DemoChild'),
        icon: 'demo',
        order: 0,
      },
    },
  ],
}

export default dashboard
```

## 多级路由

- ### 子路由

:::tip 转换前

```ts
import { t } from '@/locales/useI18n' // 用于 `i18n-ally` 插件
import { LAYOUT } from '@/router/constant/index' // 内容区域父组件

import type { AppRouteRecordRaw } from '@/router/type'

const demo: AppRouteRecordRaw = {
  path: '/multi',
  name: 'MultiMenu',
  meta: {
    i18nKey: 'MultiMenu',
    icon: 'table',
  },
  children: [
    {
      path: 'multi-menu-one',
      name: 'MultiMenuOne',
      meta: {
        noLocalTitle: '多级菜单-1',
      },
      key: 'multi-menu-one',
      breadcrumbLabel: '多级菜单-1',
      show: true,
    },
    {
      path: 'multi-menu-two',
      name: 'MultiMenuTwo',
      meta: {
        noLocalTitle: '多级菜单-2',
      },
      children: [
        {
          path: 'sub-menu',
          name: 'SubMenu',
          meta: {
            noLocalTitle: '多级菜单-2-1',
          },
          key: 'sub-menu',
          breadcrumbLabel: '多级菜单-2-1',
          show: true,
        },
      ],
      key: 'multi-menu-two',
      breadcrumbLabel: '多级菜单-2',
      show: true,
    },
  ],
}
```

:::

:::tip 转换后

```ts
const transform = [
  {
    path: '/multi/multi-menu-one',
    name: 'MultiMenuOne',
    meta: {
      noLocalTitle: '多级菜单-1',
    },
    key: 'multi-menu-one',
    breadcrumbLabel: '多级菜单-1',
    show: true,
  },
  {
    path: '/multi/multi-menu-two/sub-menu',
    name: 'SubMenu',
    meta: {
      noLocalTitle: '多级菜单-2-1',
    },
    key: 'sub-menu',
    breadcrumbLabel: '多级菜单-2-1',
    show: true,
  },
]
```

:::

## meta 配置属性

### 配置说明

```ts
interface AppRouteMeta {
  // i18n 国际化 key, 会优先使用该字段
  i18nKey?: string
  // icon 图标， 用于 Menu 菜单(依赖 RayIcon 组件实现)
  icon?: string | VNode
  // 超链接打开（新开窗口打开）
  windowOpen?: string
  // 权限表
  role?: (string | number)[]
  // 是否隐藏菜单
  hidden?: boolean
  // 使用普通文本内容渲染 Menu Title
  noLocalTitle?: string | number
  // 是否忽略该页面内容区域自动初始化滚动条位置
  ignoreAutoResetScroll?: boolean
  //  菜单排序。子菜单该值无效，子菜单基于配置顺序排序。如果未设置则会按照 component name 进行排序，如果未匹配到 name 则会按照合并顺序排序
  order?: number
  // 是否缓存该页面（需要配置 APP_KEEP_ALIVE setupKeepAlive 属性为 true 启用才有效），并且需要与组件 name 属性匹配
  keepAlive?: boolean
  // 是否标记该路由为平级模式，如果标记为平级模式，会使路由菜单项隐藏。如果在含有子节点处，设置了该属性，会导致子节点全部被隐藏
  sameLevel?: boolean
  // 根据当前环境展示、隐藏菜单（优先级最低）
  env?: string | string[]
}
```

:::warning 注意
`sameLevel` 在后续的使用 url 地址导航跳转时，如果在非当前路由层级层面跳转的该路由，会在当前的面包屑后面追加该模块的信息，触发跳转时，不会修改面包屑、标签页。
:::

## 路由守卫

:::tip 注

- 根据 meta role 与 BASIC_ROUTER 结合进行跳转路由鉴权操作
- 如果 meta role 为空则会默认认为全局可用
- 如果需要指定角色，则添加该属性并且添加角色。当然，你可以指定一个超级管理员角色，默认获取全部路由
  :::

## 工具函数

方法存放于 `src/router/helper/routerCopilot.ts` 与 `src/router/helper/useVueRouter.ts` 中。

```ts
import {
  validRole,
  validMenuItemShow,
  redirectRouterToDashboard,
} from '@/router/helper/routerCopilot'
```

- ### validRole

> 校验该路由项是否与权限匹配。

- ### validMenuItemShow

> 校验当前路由是否显示。该方法进行校验时，会将 hidden 与 sameLevel 一起进行校验，sameLevel 的优先级最高。

- ### redirectRouterToDashboard

> 重定向路由至首页，默认采用替换方法重定向（replace）。该方法依赖 `ROOT_ROUTE` 配置项。

- ### useVueRouter

```ts
import { useVueRouter } from '@/router/helper/useVueRouter'
```

> 允许在 setup 环境外使用路由方法。但是该方法可能会导致 HMR 的时候出现加载报错的提示（手动刷新一下就好），如果你确定使用环境在 setup 环境中时，还是建议使用官方提供方法。
