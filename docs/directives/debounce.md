# v-debounce

延迟执行一个函数。

## template

```vue
<template>
  <button
    v-debounce="{
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
        v-debounce={{
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
