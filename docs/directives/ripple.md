# v-ripple

给元素添加涟漪效果。

## template

```vue
<template>
  <button v-ripple>点击查看水波纹效果</button>
  <button v-ripple.center>设置从中心散开</button>
</template>
```

## tsx

```tsx
const Demo = defineComponent({
  render() {
    return (
      <>
        <button v-ripple>点击查看水波纹效果</button>
        <button v-ripple="{[true, ['center']]}">设置从中心散开</button>
      </>
    )
  },
})
```
