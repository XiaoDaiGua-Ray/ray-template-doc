# 注释规范

强制约定需要在 `function`, `class`, `interface`, `type`, `component` 等声明之前添加注释。

并且注释需要符合 `jsDoc` 规范。

## function

```ts
/**
 *
 * @description
 * 求和函数。
 *
 * @example
 * sum(1, 2) // 3
 */
const sum = (a: number, b: number) => {
  return a + b
}
```

## class

```ts
/**
 *
 * @description
 * Demo 类。
 *
 * @example
 * const demo = new Demo()
 */
class Demo {}
```

## interface

```ts
interface Demo {
  /**
   *
   * @description
   * 名称。
   */
  name: string
}
```

## type

```ts
/**
 *
 * @description
 * Demo 类型。
 *
 * @example
 * const demo: Demo = () => {}
 */
type Demo = () => void
```

## component

### tsx

```tsx
/**
 *
 * @description
 * Demo 组件。
 *
 * @example
 * <Demo />
 */
const Demo = () => {
  return <div>demo</div>
}
```

### vue

```vue
<template>
  <div>demo</div>
</template>
<script lang="ts" setup>
/**
 *
 * @description
 * Demo 组件。
 *
 * @example
 * <Demo />
 */
</script>
```
