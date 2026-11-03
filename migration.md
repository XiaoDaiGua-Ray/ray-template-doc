# 从旧版迁移

本页以 **v5.2.4 → 当前文档的源码基线**为对照。清单中的包版本为 `5.2.5`；[源码基线](./reference/source)用于标明本文核对的实现。

先升级工具链并安装依赖，再按导入、数据契约、布局与部署的顺序改造。每完成一类修改，运行对应的回归或演示。

## 1. 升级工具链

- Node.js 使用仓库的 `.nvmrc`（26.13.0），pnpm 使用 `packageManager`（12.16.1）。以 `pnpm install --frozen-lockfile` 安装。
- Vite 8 使用 Rolldown/Oxc。自定义构建迁移至 `rolldownOptions`；旧的依赖目录分包策略和 `build.transpile` 不再沿用。
- 应用、Node 构建配置和测试分别由 `tsconfig.app.json`、`tsconfig.node.json`、`tsconfig.test.json` 管理。共享别名按实际入口配置，例如 `@api → src/api`。
- Router 5 守卫使用返回值表示放行、取消或重定向。自行维护的守卫应检查未登录、角色拒绝和首页重定向。

## 2. 替换组件与表格

| 旧写法                                            | 新写法                                                      |
| ------------------------------------------------- | ----------------------------------------------------------- |
| `@/components/base/...` 或 `@/components/pro/...` | 通过 `@/components` 导入组件和公开类型                      |
| `RTable`                                          | `RTablePro bare`；要保留工具栏时去掉 `bare`                 |
| `useTable`、`useTablePro` 和注册回调              | 可选的 `shallowRef<TableProInst>()`，组件挂载后调用实例方法 |
| `requestConfig`                                   | 额外条件放进 `params`；接口字段转换放在 `request` 中        |
| `takeoverAutoHeight`、`flexAutoHeight`            | `autoHeight`；自定义容器可设置 `--r-table-height`           |
| `printOptions.documentTitle` 或表格截图打印       | `printTableOptions.title`；复杂版式传 `target`              |

远端函数返回 `{ data, total }`，其中 `total` 是筛选后的总条数。将组件传入的 signal 交给 HTTP 客户端。逐页验证分页、筛选、错误重试、列设置，以及导出或打印的取数范围。详见 [TablePro](./reference/table-pro)。

## 3. 迁移状态、图标和工具

- 原 `src/global-variable` 已移除。通过 `useRuntimeGetters`、`useRuntimeActions` 读取和修改 UI 状态；布局偏好由 `setting.layoutConfig` 管理。沿用既有设置与锁屏缓存格式。[布局与状态](./guide/layout)
- SVG 放在分包目录，代码用完整路径，例如 `navigation/dashboard`。旧缓存仅在裸名称唯一时自动迁移。生成文件随 SVG 一起提交。[SVG 图标](./reference/icons)
- `@/hooks`、`@/utils` 继续可用。新代码从对应公开入口导入；核对直接引用旧内部路径的调用，尤其是 `src/utils/crypto.ts`。[Hooks](./reference/hooks) · [工具函数](./reference/utils)
- Mock.js 被 Faker 替换；开发 HTTP Mock 和静态演示走不同的数据入口。真实业务从 `src/api` 接到自己的后端。[接口与 Mock](./guide/requests)

## 4. 回归与部署

1. 运行 `pnpm harness verify`，检查类型、格式、测试及构建。
2. 检查桌面与移动布局；从菜单进入页面，再测试直达、刷新和 KeepAlive。
3. 用 `pnpm preview` 检查生产子路径、SVG 加载和远端列表。若项目使用自定义布局、无界宿主或实际打印，再在目标环境验收这些链路。

[版本差异](https://github.com/XiaoDaiGua-Ray/ray-template/compare/v5.2.4...548de9427d59502cdc7f06b86943f8c0dba9f907) · [工程适配记录](https://github.com/XiaoDaiGua-Ray/ray-template/blob/548de9427d59502cdc7f06b86943f8c0dba9f907/docs/toolchain-upgrade.md)
