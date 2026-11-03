# 快速开始

## 启动工作台

准备 Node.js 26.13.0 和 pnpm 12.16.1。以下以 nvm 为例：

```sh
git clone https://github.com/XiaoDaiGua-Ray/ray-template.git
cd ray-template
nvm install
nvm use
npm install --global pnpm@12.16.1
pnpm install --frozen-lockfile
pnpm env:check
pnpm dev
```

打开 [http://127.0.0.1:9527/ray-template/](http://127.0.0.1:9527/ray-template/)，如果端口被占用，以 Vite 输出的地址为准。使用预填表单登录，再打开「表格 → 远端查询与分页」或「布局实验室」。也可直接体验[在线演示](https://xiaodaigua-ray.github.io/ray-template/)。

::: warning 演示与真实业务
预填表单、会话和 Mock 用于展示前端工作流。对外部署真实业务前，接入自己的认证、服务端权限校验和 API。
:::

## 相关文档

[第一个业务页面](./first-page) · [从旧版迁移](../migration) · [工程检查与部署](./tooling)

[运行时与依赖清单](https://github.com/XiaoDaiGua-Ray/ray-template/blob/548de9427d59502cdc7f06b86943f8c0dba9f907/package.json) · [项目目录与启动链路](https://github.com/XiaoDaiGua-Ray/ray-template/blob/548de9427d59502cdc7f06b86943f8c0dba9f907/docs/architecture.md)
