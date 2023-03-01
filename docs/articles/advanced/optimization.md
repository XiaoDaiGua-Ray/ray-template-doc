# 项目优化

该项目已经默认做了相关打包优化处理，如果你需要按照自己风格自定义配置，可以在 `vite.config.ts` 文件中进行相关配置。内置体积分析工具，可以通过使用 `yarn report` 命令，然后稍等片刻即可自动打开构建文件体积分析图。

## 路由懒加载

> 该功能开箱即用，仅需要在配置 `router component` 属性时，使用 `import` 动态导入对应页面文件即可。

```ts
export default {
  path: '/demo',
  name: 'demo',
  component: () => import('@/views/demo/index'), // [!code focus]
  meta: {
    i18nKey: 'Demo',
    icon: 'demo',
  },
}
```

## 按需打包

::: danger 警告
禁止在使用第三方插件和库的时候，有全部导入所有方法的地方，否则会破坏按需打包。
:::

> 现主流插件和组件库，基本上都支持 `tree shaking`，所以在使用时仅需要按照 `import { ... } from 'xxx'` 方式引用即可。

- 已有按需打包配置

```json
{
  "lodash-es",
  "echarts",
  "pinia",
  "xlsx",
  "vue",
  "naive-ui",
  "@vueuse",
  ...
}
```

- 如何自定义配置（该效果，基于 [vite-plugin-imp](https://github.com/onebay/vite-plugin-imp#readme) 实现）

```ts
import vitePluginImp from 'vite-plugin-imp' // 按需打包工具

vitePluginImp({
  libList: [
    {
      libName: 'lodash-es',
      libDirectory: '',
      camel2DashComponentName: false,
    },
    {
      libName: '@vueuse',
      libDirectory: '',
      camel2DashComponentName: false,
    },
  ],
})
```

## gzip 压缩

::: warning 注意
输出 `gzip` 压缩包后，需要后端配置服务支持和浏览器支持才行。
:::

> 开箱即用的功能，基于 [vite-plugin-compression](https://github.com/vbenjs/vite-plugin-compression/blob/main/README.zh_CN.md) 实现。如果需要自定义配置，按照官方文档配置即可。

```ts
import { useViteCompression } from './vite-plugin/index'
```

## 代码优化

> 在开发过程中，应该抽离复用代码，在打包的时候会自动抽离打包。

### 代码质量优化

项目默认启用 `eslint` 规范代码（很不建议关闭），提高代码质量，减少开发过程中的一些隐性问题。该配置配合 `ts` 的使用，虽然会让你开发的过程有点不适应，但是，当你熟悉了后会收获到不一样的结果。

### 第三方库包分割

`vite.config.ts` 文件中配置 `build.rollupOptions.output.manualChunks` 默认配置了拆分包。减少将包合并到 `vender` 中，提高页面首屏加载速度。

## css 优化

### css 代码分割

Vite 会自动地将一个异步 chunk 模块中使用到的 CSS 代码抽取出来并为其生成一个单独的文件。这个 CSS 文件将在该异步 chunk 加载完成时自动通过一个 `<link>` 标签载入，该异步 chunk 会保证只在 CSS 加载完毕后再执行，避免发生 `FOUC` 。

::: info
如果你更倾向于将所有的 CSS 抽取到一个文件中，你可以通过设置 `build.cssCodeSplit` 为 false 来禁用 CSS 代码分割。
:::

### 预加载指令生成

Vite 会为入口 chunk 和它们在打包出的 HTML 中的直接引入自动生成 `<link rel="modulepreload">` 指令。

## 图片优化

### 图片构建输出 base64

开箱即用，自动将小图片转换为 `base64` 格式。如果需要自定义配置，可以覆盖 `build` 属性配置（遵从 `vite build options`）。

### 图片懒加载

- 使用 [Naive UI Image](https://github.com/hilongjw/vue-lazyload#readme) 组件
- 安装 [VueLazyload](https://github.com/hilongjw/vue-lazyload/tree/next) 插件

### 压缩图片

推荐使用 [docsmall](https://docsmall.com/image-compress) 批量压缩图片（主要是免费又好用）。

### 转换图片格式

这里比较推荐将图片转换为 `webp` 格式。推荐使用 [ezgif](https://ezgif.com/png-to-webp)、[squoosh](https://squoosh.app/) 工具。

- 主流浏览器基本上都支持
- 更小的体积，更好的效果

::: tip
如果需要更小的体积，可以直接使用 [squoosh](https://squoosh.app/) 压缩。谷歌出品，用着放心。
:::
