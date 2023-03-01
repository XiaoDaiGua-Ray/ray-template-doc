# 构建发布

## 多环境打包

> 多环境打包配置，需要结合 `.env` 文件使用。变量必须以 `VITE_APP` 开头。

- 测试环境打包，对应 `.env.test` 文件

```sh
yarn test
```

- 测试环境打包，对应 `.env.production` 文件

```sh
yarn build
```

::: danger 警告
该项目默认启用了 `gzip` 打包、按需引用打包。开发过程中，引用第三方库方法时，应该采用解构方式引入使用。如果采用直接引入，会破坏按需引用打包。
:::

## 预览

```sh
yarn preview
```

## 打包体积分析

```sh
yarn report
```

::: tip
执行该命令后，会自动在根目录生成 `visualizer.html` 文件，并且会自动打开该页面，展示分析结果。
:::

## 发布

默认按照 `cfg.ts` 中 buildOptions 方法进行配置，会在 `dist` 文件夹中输出对应构建文件。默认会以 `index.html` 作为构建后的入口文件。如果有需要拓展，在 `vite.config.ts` 中进行补充即可。

::: warning 提示
如果需要修改公共路径，只需要在 `vite.config.ts` 中配置 `base` 属性即可。
:::

## 路由

该项目默认采用 `hash` 模式，如果需要跟后端配合使用，将路由模式改为 `history` 即可。

```ts
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(), // history 模式：createWebHistory()
  ...
})
```
