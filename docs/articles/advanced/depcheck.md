# 依赖检查

## 检查依赖

> [depcheck](https://github.com/depcheck/depcheck) 是一个分析项目中依赖关系的工具，可以查看每个依赖关系如何使用，哪些依赖关系没用，哪些依赖关系缺失 `package.json`。

## 项目中如何使用

```sh
npx depcheck
```

::: info
当你的项目出现构建失败的时候，可以执行该命令，检查依赖情况。大多数情况下，构建失败都是因为依赖丢失导致的，根据 `depcheck` 提示，然后安装丢失依赖即可。
:::
