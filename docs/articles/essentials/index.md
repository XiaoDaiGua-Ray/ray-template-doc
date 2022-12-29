# 介绍

> [ray-template](https://xiaodaigua-ray.github.io/) 是一个后台前端解决方案，它基于 [vue3.x](https://cn.vuejs.org/)、[vite3.2](https://cn.vitejs.dev/)、[naive-ui](https://www.naiveui.com/zh-CN/light)、[typescript](https://www.typescriptlang.org/) 实现。它使用了最新的前端技术栈，内置了 [vue-i18n](https://github.com/intlify/vue-i18n-next) 国际化解决方案，动态路由，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。

## 特征

### 开箱即用

仅需几步操作，即可进行业务开发。配置了大量热门工具库，让你能够愉快的进行搬砖。

- 预配置丰富工具库
- 经典业务模型提炼
- 常用功能组件封装

### 开发体验

- 配置 `reactivityTransform` 让你轻松使用响应式方法（比如 `ref`），轻松进行响应式解构
- 配置自动导入，解放双手（全局直接使用 `vue hook`、`@vueuse hook` 等方法，具体配置可在 `vite.config.ts` 添加)
- 使用 `tsx` 进行组件开发，拥抱 hook
- 全量使用 `typescript` 进行开发

## 功能

```
- 登陆 / 注销

- 全局功能
  - 国际化多语言
  - 多种动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 明暗主题切换
  - 快捷导航(标签页)
  - svg 图标
  - 全屏操作
  - 自适应收缩侧边栏
  - 局部刷新（刷新内容区域）

- 错误页

- 组件（后续会有详细组件介绍）
  - RayChart（可视化组件）
  - RayCollapseGrid（折叠操作栏）
  - RayIcon（svg 图标）
  - RayTable（数据表格）
  - RayTransitionComponent（过渡动画路由，跟 RouterView 功能相同）

- 综合
  - 请求方法
  - 常用 hook 方法
  - typescript 签名
```
