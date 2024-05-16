# 目录结构

## 主要文件

```
ray-template
|- cfg.ts
|- vite.config.ts
|- src
|--|- appConfig
|--|- assets
|--|- axios
|--|- components
|--|- dayjs
|--|- directives
|--|- error
|--|- icons
|--|- layout
|--|- locales
|--|- router
|--|- spin
|--|- store
|--|- types
|--|- utils
|--|- views
|--|- App.tsx
|--|- main.ts
```

## 目录说明

- cfg.ts：该配置文件主要是用于 `vite.config.ts` 中的一些配置，并且部分配置会暴露在全局和 `ejs` 的注入

:::tip 描述
这个配置文件主要用于配置 `vite.config.ts` 中的选项，其中一些选项会被暴露在全局和 `ejs` 中，以便于在应用程序的不同部分中使用。
:::

- vite.config.ts：`vite.config.ts` 的一些配置
- src：模板的入口文件

:::tip 注
该文件这里不做赘述，后面会详细的介绍每个目录文件的作用。
:::
