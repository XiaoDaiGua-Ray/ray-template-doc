# 新增 view 页面

::: warning 提示
开箱即用的动态路由功能，仅需在配置路由表的时候，使用 `import` 导入路由对应页面文件即可。
:::

## 步骤

- `views` 文件下创建 `my-view` 文件夹后再创建 `index.tsx(vue)` 文件
- `router/modules` 创建 `my-view.ts` 文件（按照 `vue-router` 格式进行配置）
- `router/modules/index.ts` 中进行注册（由于种种原因，取消了自动导入路由的方式）

:::tip
菜单会自动获取路由表所有注册页面进行渲染
:::

```ts
export default {
  path: '/my-view',
  name: 'my-view',
  component: () => import('@/views/my-view/index'),
  meta: {
    i18nKey: 'my-view',
    icon: 'my-view',
  },
}
```

## meta 配置说明

## i18nKey

- 类型：`string`
- 默认值： `''`
- 说明：新增页面后，需要在国际化多语言语言包（GlobalMenuOptions）中添加对应名称

::: warning 注意
由于采用 i18n 提供虚拟文件包方法，所以每次更新语言包后，需要重启项目。可以安装 i18n ally 插件，辅助开发。
:::

## icon

- 类型：`string`
- 默认值： `''`
- 说明：导航菜单图标，如果为空则不渲染图标（如果需要新增图标，需要在 src/icons 中添加，之后则会自动匹配该图标并渲染）

::: warning 注意
新增图标后，需要刷新页面，才会正常显示该图标。由于 svg 特性，新增图标后，需要手动更改 fill 属性，才可以使该图标自动跟随元素颜色变化。fill="currentColor"
:::

## windowOpen

- 类型：`string`
- 默认值：`''`
- 说明：如果配置则会自动打开新页面并且转到该链接地址

::: tip
后续还会继续拓展 meta 配置，不定时更新中。。。
:::
