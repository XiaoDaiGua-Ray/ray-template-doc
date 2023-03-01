# 项目文件结构

## 文件结构说明

```
- locales 国际化多语言（本项目采用 json 格式）
- vite-plugin 项目插件封装方法（可根据自身情况进行补充）
- postcss.config.cjs postcss 配置
- cfg.ts vite.config.ts 配置
```

:::info
以上文件都是项目打包、插件的一些配置文件，可根据自己实际业务情况进行拓展补充。
:::

```
- assets 静态文件入口（字体、图片等）
- axios 请求方法入口（包括 axios 拦截器封装、全局接口管理）
- conponents 全局组件
- icons svg 图标（配合 RayIcon 使用）
- language i18n 入口
- layout 全局布局管理
- router 路由
- store 仓库（pinia）
- styles 全局样式
- types 全局类型
- utils 工具包
- views 页面入口
```

:::tip
项目约定按照该结构进行管理，细化颗粒度。建议开发按照该结构进行二次开发。
:::
