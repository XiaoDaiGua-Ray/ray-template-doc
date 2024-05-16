# 开始

## 介绍

> [`Ray Template`](https://ray-template.yka.moe/ray-template/#/) 是一个基于最新技术栈 `vue3.x` `vite5.x` `naive ui` `pinia` `tsx` 开发的中后台模板。相较于常见的中后台模板，该模板具有简洁、易上手的特点，让开发者可以更快地上手并专注于业务开发。

该模板采用最前沿的技术栈和 UI 组件库，为开发者提供更好的开发体验和更高的性能。模板提供了开箱即用的功能，让开发者在开发过程中只需关注业务逻辑，无需过多关注技术细节。这使得开发者可以更高效地开发中后台系统，同时保证系统的稳定性和可靠性。

## 浏览器支持

> `vue3.x` 与 `vite` 默认支持现代浏览器。如果有需要支持传统浏览器，可以通过使用官方的降级插件进行构建支持。这里不做赘述，并且该模板也默认支持现代浏览器。

## 在线预览

- [预览地址(加速地址)](https://ray-template.yka.moe/ray-template/#/)
- [预览地址](https://xiaodaigua-ray.github.io/ray-template/#/)

## 获取项目

- 下载模板

```bash
https://github.com/XiaoDaiGua-Ray/ray-template.git
```

- 依赖安装

```bash
pnpm i
```

:::warning 注意
该项目默认使用 `pnpm` 作为包管理器，如果使用 `yarn` 或者 `npm` 可能会出现一些小问题。
:::

- 启动项目

```bash
pnpm dev
```

## 命令行

```json
{
  "scripts": {
    "dev": "vite", // 启动项目
    "build": "vue-tsc --noEmit && vite build --mode production", // 构建生产环境
    "preview": "vite preview", // 预览
    "test": "vue-tsc --noEmit && vite build --mode test", // 构建测试环境
    "dev-build": "vue-tsc --noEmit && vite build --mode development", // 构建开发环境
    "report": "vue-tsc --noEmit && vite build --mode report", // 体积分析
    "prepare": "husky install" // husky
  }
}
```

## 环境准备

- `node` 版本 18 | 20，不支持 18 以下版本与 19 版本
- `pnpm` 版本 8.6+
