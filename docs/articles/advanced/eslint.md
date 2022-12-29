# ESLint

> 不管是多人合作还是个人项目，代码规范都是很重要的。这样做不仅可以很大程度地避免基本语法错误，也保证了代码的可读性。

## vscode 配置 ESLint

- 下载 `ESLint` 插件
- 配置 `setting.json`

```json
{
  "eslint.alwaysShowStatus": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["typescript", "javascript", "vue", "react"],
  "eslint.packageManager": "yarn"
}
```

## 取消 ESLint 检查

> 虽然个人不太建议取消。

- 找到 `vite.config.ts` 文件
- 找到 `plugins` 属性
- 注释 `viteEslintPlugin` 方法
