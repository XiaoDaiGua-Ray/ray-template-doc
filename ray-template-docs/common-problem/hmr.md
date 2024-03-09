# HMR 相关问题

模板使用 `vite` 做为构建工具，`vite` 默认支持 HMR（热模块替换）。

## useVueRouter, useI18n 导致报错

### 在顶层更新代码导致报错

例如，在 `Layout.tsx` 中更新了代码，页面可能就会因为使用了 `useVueRouter`, `useI18n` 等 hook 导致报错。

因为，在模板中为了满足一些业务需求，需要异步注册 `vue-router` 和 `vue-i18n`，所以在顶层更新代码时，可能会导致报错。

目前还没有好的解决方案，可以通过手动刷新页面来解决。

:::tip
在 `v4.7.0` 版本中，修复了 `useVueRouter` 的问题，但是 `useI18n` 还是可能会报错。
:::
