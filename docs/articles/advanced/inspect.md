# 插件检查

> [vite-plugin-inspect](https://github.com/antfu/vite-plugin-inspect) 可以检查 `vite` 中间件的状态，可以用于调试和编写插件。

## 检查转换

```ts
import ViteInspect from 'vite-plugin-inspect'

ViteInspect({
  build: true, // [!code ++]
  outputDir: '.vite-inspect', // [!code ++]
})
```

::: info
运行 `vite build` 后，会生成检查器客户端地址，可以在 `.vite-inspect` 中运行 `npx serve .vite-inspect` 查看结果。
:::
