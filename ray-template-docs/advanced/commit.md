# Commit 检查

## Pre-Commit

在 `RayTemplate` 中，使用 `husky` + `lint-staged` 来实现 `pre-commit` 钩子，实现 `commit` 前的代码检查。主要是进行：

- `eslint:` 代码检查
- `prettier:` 风格检查

## Commit Message 规范

在 `RayTemplate` 中，使用 `@commitlint/config-conventional` + `husky` + `lint-staged` 来实现 `commit` 前缀信息检查。并且预定了一些提交前缀的规范，如下：

- `update:` 更新代码 | Update code
- `fix:` 修复 bug | Fix bug
- `feat:` 新功能 | New feature
- `chore:` 构建过程或辅助工具的变动 | Build process or auxiliary tool changes
- `docs:` 文档 | Documentation
- `refactor:` 重构（即不是新增功能，也不是修改 bug 的代码变动） | Refactor (i.e. code changes that are neither new features nor bug fixes)
- `test:` 增加测试 | Add test
- `style:` 代码格式（不影响功能，例如空格、分号等格式修正） | Code format (no functional impact, such as space, semicolon, etc.)
- `version:` 更新迭代 package.json 版本号 | Update the package.json version number
- `build:` 构建 | Build
- `plugin:` 更新插件版本 | Update plugin version
