# 全局注入

项目中注入了一些特殊的属性，共全局使用。

## `__DEV__`

- 类型：`boolean`
- 介绍：当前环境是否为开发环境

:::tip
该属性是为了方便在项目中判断是否为开发环境，如果你需要更加准确的判断，可以使用 `getAppEnvironment` 方法来获取当前环境变量。
:::

## `__APP_CFG__`

- 类型：`AppConfig`
- 介绍：该属性在经过 `vite` 编译后，会挂在 `window` 下。所以你可以直接在项目任意地方使用，并且不用担心加载顺序问题

```ts
const { pkg, layout, base, appPrimaryColor } = __APP_CFG__
```

## `ejs`

- 类型：`ViteEjsPluginDataType`
- 介绍：该功能借助 `vite-plugin-ejs` 插件实现

:::tip
一般来说，不太需要 `ejs` 的注入操作。但是如果你需要在 `index.html` 进行一些特殊的操作时，可能用得上它。例如项目使用该插件实现可以配置化的 `css var` `loading` 等功能。
:::
