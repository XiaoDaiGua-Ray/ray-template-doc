# 流程

## 图示

![](/public/images/ray-template/ray_template_process.svg)

:::tip 备注
其实，在初始化 `pinia` 的时候，就已经完成了对于 `router` 的处理，例如：合并 modules 下所有的路由模块、提升所有路由模块等操作。如果你需要实现动态路由的操作，你可能需要修改初始化路由与初始化菜单的时机。
:::