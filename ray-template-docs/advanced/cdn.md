# CDN 配置

`RayTemplate` 支持使用 `CDN` 加速，只需在 `vite.plugin.config.ts` 中配置 `viteCDNPlugin modules` 即可。

:::warning 注意
注意，默认情况下，使用的是手动去配置插件的版本。所以在更新版本后需要自己手动去更新 `viteCDNPlugin modules` 中的版本号。并且，`vue`, `vue-demi` 加载顺序不可变。
:::

默认启用了如下包的 `CDN` 加速：

- `vue`
- `vue-demi`
- `vue-router`
- `pinia`
- `xlsx`
- `axios`
- `vue-i18n`
- `echarts`
- `naive`

如果有需要，可以自行添加。
