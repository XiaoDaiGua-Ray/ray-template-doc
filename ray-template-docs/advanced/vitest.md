# 单元测试

在 `Ray Template v4.7.2` 版本中引入了 `vitest` 测试框架，用于对模板进行单元测试。

并且默认对 `utils`, `hooks` 包下的方法进行了单元测试模块编写。

## 介绍

`vitest` 是一个基于 `vite` 的测试框架，有以下的特点：

- 高性能
- 易配置
- 兼容 `jest`
- `plugin` 支持
- 默认支持：`ts(x)`, `js(x)`
- 还有更多...

> 还有更多特点，可以点击查看 [vitest 官网](https://cn.vitest.dev/guide/why.html)。

## 配置流程

在 Ray Template 中，我们已经内置了 `vitest`，所以你可以直接使用。只需要按照一下步骤即可起步：

1. 在根目录找到 `__test__` 文件 2.
2. 创建对应的单元模块测试文件
3. 编写对应测试应用
4. 运行测试

## 示例

假设目录结构如下：

```sh
.
├── __test__
│   ├── sum.spec.ts
└── src
    ├── sum.ts
```

:::tip
在 `__test__` 目录下创建 `sum.spec.ts` 文件，编写测试用例。并且在 `src` 目录下创建 `sum.ts` 文件，编写对应的函数。
:::

### sum.ts

```ts
export function sum(a: number, b: number) {
  return a + b
}
```

### sum.spec.ts

```ts
import { sum } from '../../src/sum'

describe('sum', () => {
  it('should return 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
```

### 运行测试

在模板中默认集成了 `vitest/ui` 插件，所以你有两种方式查看测试结果：

1. 在终端中运行 `pnpm test`，查看测试结果

```sh
pnpm test
```

2. 在终端中运行 `pnpm test:ui`，查看测试结果

```sh
pnpm test:ui
```

## 一些注意事项

### 关于 `threads` 配置

为什么会出现 `threads` 配置问题？

因为在实际开发过程中遇到了如下的一些问题：

![](/assets/vitest-threads-error.webp)

去查阅了相关的一些资料，发现这个问题也是历史悠久就有，这么做也是迫不得已。有兴趣可以点击查看相关的 [issues](https://github.com/vitest-dev/vitest/issues/740)。

:::tip
其实这个问题蛮难受的，会导致单元测试运行时间变长。
:::

### 单元测试模块后缀名

模板默认只查询 `__test__/**/*.(spec).(ts|js)` 文件。并且不会查询 `__test__/utils` 文件下的所有文件。

### 规范问题

一般来说，我们应该按照模块去划分对应的测试文件，这样更加清晰。所以，这边也建议这么做。

### 其他问题

点击查看 [vitest 常见错误](https://cn.vitest.dev/guide/common-errors.html) 文章，这里不做赘述。
