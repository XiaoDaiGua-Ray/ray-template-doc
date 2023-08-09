# 自定义指令

## 添加指令说明

- 模板视 modules 中每一个文件包为一个模板的指令（全局），并且每个文件包的名称，也被视为该指令名称
- 添加文件包后，`强制要求 index.ts 为指令的输出文件名`
- modules 包中所有指令都会被自动合并到模板中

:::warning 注意
创建自定义指令时，应该注意内存泄漏的问题，在组件卸载时手动解绑相应的变量。
:::

## 新增指令

假设创建一个 `v-demo` 指令

:::tip 步骤

- modules 中添加文件包
- modules/demo 目录下创建 index.ts 文件
- 进行自定义指令开发
  :::

```ts
/**
 *
 * 示例添加 demo 指令
 */

// 1. modules 中添加文件包
// 2. modules/demo 目录下创建 index.ts 文件
// 3. 进行自定义指令开发

import type { Directive } from 'vue'
import type { RoleBindingValue } from './type'
import type { CustomDirectiveFC } from '@/directives/type'

const demoDirective: CustomDirectiveFC<HTMLElement, RoleBindingValue> = () => {
  return {
    beforeMount: (el, binding) => {
      console.log(el, binding)
    },
  }
}

export default demoDirective

// 4. 按照上述步骤执行后，会自动在模板中创建一个 v-demo 的指令供全局使用
```
