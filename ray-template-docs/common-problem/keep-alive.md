# 缓存

缓存依赖 `KeepAlive` 组件实现。它会根据组件的 `name` 选项进行匹配，所以组件如果想要条件性地被 `KeepAlive` 缓存，就必须显式声明一个 `name` 选项。

## 缓存失效

<!-- 如果缓存失效，请查看需要缓存组件的 `name` 属性是否与路由的 `name` 属性匹配。 -->

- 查看需要缓存组件的 `name` 属性是否与路由的 `name` 属性匹配
- 查看路由 `keepAlive` 属性是否配置为 `true`
- 查看 `APP_KEEP_ALIVE.setupKeepAlive` 属性是否配置为 `true`
- 缓存是否超过了最大缓存数 `APP_KEEP_ALIVE.maxKeepAliveLength`

:::tip tip
模板默认缓存数为 `5`，并且采用队列的形式维护缓存。会自动的收集所有配置了 `keepAlive` 的路由模块，并且放置于队列中。
:::

## 最大缓存数

模板默认启用缓存，并且设置的最大缓存数为 `5`。可以根据自己需求更改。

```ts
/**
 *
 * 系统缓存
 *
 * 说明:
 *   - setupKeepAlive: 是否启用系统页面缓存, 设置为 false 则关闭系统页面缓存
 *   - keepAliveExclude: 排除哪些页面不缓存
 *   - maxKeepAliveLength: 最大缓存页面数量
 */
export const APP_KEEP_ALIVE: Readonly<AppKeepAlive> = {
  setupKeepAlive: true,
  keepAliveExclude: [],
  maxKeepAliveLength: 5, // [!code focus]
}
```
