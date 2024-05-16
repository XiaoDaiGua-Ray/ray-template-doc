# 代码格式规范

代码在编写的时候，需要遵循一定的格式规范，以便于代码的阅读和维护。

## 代码换行

在开发的时候，默认使用 `eslint` 规范一些关键字和块强制换行。

### 示例

- Bad ✅

```tsx
const Demo = () => {
  const demo = [
    {
      label: 'demo',
      value: 'demo',
    },
  ]

  const updateDemo = () => {}

  const click = () => {}

  return (
    <div>
      {demo.map((item) => (
        <div key={item.value}>{item.label}</div>
      ))}
    </div>
  )
}
```

- Bad ❌

```tsx
const Demo = () => {
  const demo = [
    {
      label: 'demo',
      value: 'demo',
    },
  ]
  const updateDemo = () => {}
  const click = () => {}
  return (
    <div>
      {demo.map((item) => (
        <div key={item.value}>{item.label}</div>
      ))}
    </div>
  )
}
```

## 模板名称

强制约定在开发的时候，组件必须有一个模板名称，以便于在开发的时候，能够更好的定位问题。

在开发的时候，模板名称的命名规范为 `PascalCase`，并且不允许单个单词。

### 示例

- Bad ✅

```tsx
const Demo = () =>
  defineComponent({
    name: 'GoodDemo',
    render() {
      return <div>demo</div>
    },
  })
```

```vue
<template>
  <div>demo</div>
</template>
<script lang="ts" setup>
defineOptions({
  name: 'GoodDemo',
})
</script>
```
