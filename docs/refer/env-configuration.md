# 环境配置

项目采用 `vue3.x`, `vite5.x` 作为框架基础。

## 基础环境依赖

:::warning
项目强制依赖 `pnpm` 作为包管理工具，如果没有安装，请先安装 `pnpm`。并且受到 `vite5.x` 的限制，`node` 版本必须为 `18.x` 或 `20.x`。
:::

- `node.js`: `18.x` || `20.x`
- `pnpm`: `8.x`
- `typescript`: `5.2.2`

## 选择 typescript 版本

:::warning
`vscode` 默认会启用自身 `ts` 的版本，会导致项目编译的差异性。所以需要手动切换 `ts` 版本为工作区版本。
:::

使用 `vscode` 为示例:

![image](/public/assets/setup-ts-config-1.webp)

![image](/public/assets/setup-ts-config-2.webp)

![image](/public/assets/setup-ts-config-3.webp)
