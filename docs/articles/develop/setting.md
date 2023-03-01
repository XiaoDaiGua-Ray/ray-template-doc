# 项目配置

::: tip AppConfigExport
完整类型定义文件位置：`src/types/cfg.ts`，继承 `Vite UserConfigExport` 类型。
:::

## sideBarLogo（项目 LOGO）

::: info
如果不配置该类型，则不会渲染侧边栏 LOGO。
:::

### icon

- 类型：`string`
- 默认值： `ray`
- 说明：基于 [RayIcon](/articles/component/icon.html) 实现

### title

- 类型：`string`
- 默认值： `Ray Template`

### url

- 类型：`string`
- 默认值： `/dashboard`
- 说明：点击跳转地址，可以进行站内于站外跳转

### jumpType

- 类型：`station | outsideStation`
- 默认值： `station`
- 说明：station：本项目内跳转（vue-router 地址），outsideStation：新页面打开

## alias（项目别名）

- 类型：`AliasOptions`
- 默认值

```json
{
  "@": "src 根目录",
  "@use-utils": "src/utils 根目录",
  "@use-api": "src/axios/api 根目录",
  "@use-images": "src/assets/images 根目录"
}
```

## copyright（页底内容）

- 类型：`string`
- 默认值：`'Copyright © 2022-present Ray'`

## title（浏览器标签名称）

- 类型：`(title: string) => HTMLTitle`
- 默认值：`ray template`

## server（配置 HMR 特定选项（端口、主机、路径和协议）

- 类型：`ServerOptions`

## buildOptions（配置打包输出文件地址）

- 类型：`(mode: string) => BuildOptions`
