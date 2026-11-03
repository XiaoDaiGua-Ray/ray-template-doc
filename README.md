# Ray Template 文档

[在线文档](https://xiaodaigua-ray.github.io/ray-template-doc/) · [模板源码](https://github.com/XiaoDaiGua-Ray/ray-template) · [在线演示](https://xiaodaigua-ray.github.io/ray-template/)

## 本地维护

站点为 VitePress，CI 使用 Node.js 22.x、pnpm 11.9.0；模板应用的运行时要求见应用仓库。文档站无需检出应用仓库，也不在构建时拉取应用源码。

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm preview
```

按终端地址访问 `/ray-template-doc/`。生产构建产物位于 `.vitepress/dist`；Pages workflow 构建 PR，并在 main 发布。

- `guide/`：读者上手、开发和部署任务。
- `migration.md`：旧写法、新写法、兼容边界和验证方法。
- `reference/`：按组件、Hooks、Store、指令、工具和配置拆分的 API 参考；`source.md` 标注核对的源码版本。
- `.vitepress/sidebar.mts`：指南和 API 参考分别维护侧栏。
- `.vitepress/theme/`：首页、正文外观和共享主题样式。
- `.vitepress/legacy.mts`：旧路径到新主题的映射，在生产构建生成静态跳转；用 `pnpm preview` 验收旧链接。

## 跨仓库同步

1. 从应用的交接说明、模块 README、示例和测试取得事实，记录待写的行为、边界、旧用法及验证命令。对照应用提交检查关键类型和实际调用方。
2. 按用户任务更新指南；公开入口或配置不兼容时同步迁移页。把相关源码链接固定到已核对提交。提升基线时同步 `.vitepress/source.mts`、`reference/source.md`、迁移页以及受影响的源码链接。
3. 运行 `pnpm build`，在生产 base 下验证首页、正文、搜索、侧栏、主题、窄屏和旧 URL；与应用侧记录互链。发布前确认引用的应用提交可访问，在线演示已部署对应功能。

历史正文可从 [旧文档提交](https://github.com/XiaoDaiGua-Ray/ray-template-doc/tree/0cae0e4334b16df22d491401c190360af4819025) 查阅。
