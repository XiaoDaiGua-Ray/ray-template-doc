---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Ray Template'
  text: '简洁、易上手的中后台模板'
  actions:
    - theme: brand
      text: 快速开始
      link: /ray-template-docs/guide/why.md
    - theme: alt
      text: 组件
      link: /docs/components/basic/description
    - theme: alt
      text: hooks
      link: /docs/hooks/description
    - theme: alt
      text: directives
      link: /docs/directives/copy
  image:
    src: /logo.svg
    alt: Ray Template

features:
  - icon: 💡
    title: 最新技术
    details: vite5.x vue3.x pinia tsx 等最新技术栈
  - icon: ⚡️
    title: 轻量快速的热重载
    details: 无论应用程序大小如何，都始终极快的模块热替换（HMR）
  - icon: 🛠️
    title: 丰富的功能
    details: tsx、css modules、mock、权限路由等功能开箱即用
  - icon: 📦
    title: 优化的构建
    details: 开箱即用的最佳构建体验
  - icon: 🔩
    title: 快速开发
    details: 模板简介明了，容易上手，快速开发
  - icon: 🔑
    title: 完整类型
    details: 完整的 TypeScript 类型
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
