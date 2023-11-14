# 设计原则

## 核心理念

`Ray Template` 的核心价值观则是：

- 快速开发
- 降低成本（学习与上手成本）
- 模块化
- hooks

这四个核心理念驱动该模板的开发。

## 核心模块

### Layout

登陆系统后展示的核心页面，采用主流的布局方式布局。

### Router

模板的所有菜单、标签页、面包屑等，都依赖该模块的实现

### Store

数据管理仓库。

### AppComponents 与 AppProvider

模板专属组件与注入器。

### Axios（Request）

基于 `axios` 封装，并且拓展了：取消器、注入器、`vue-hooks-plus useRequest` 提供的插件能力与一些列实用的功能。

### AppConfig

模板配置项，赋予手动配置模板的能力。

### Directives

全局 `directives` 指令，提前封装常用的指令。
