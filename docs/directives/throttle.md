# v-throttle

一段时间内才会执行一次函数。

## template

```vue
<template>
  <button
    v-throttle="{
      func: click,
      trigger: 'click',
      delay: 1000,
    }"
  >
    Click
  </button>
</template>
<script setup lang="ts">
const click = () => {
  console.log('click')
}
</script>
```

```tsx
const Demo = defineComponent({
  setup() {
    const click = () => {
      console.log('click')
    }

    return {
      click,
    }
  },
  render() {
    const { click } = this

    return (
      <button
        v-throttle={{
          func: click,
          trigger: 'click',
          delay: 1000,
        }}
      >
        Click
      </button>
    )
  },
})
```
