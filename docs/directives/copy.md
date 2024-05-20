# v-copy

给剪切板塞点东西进去。

## template

```vue
<template>
  <div>
    <input v-model="inputRef" />
    <button v-copy="inputRef">Copy</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const inputRef = ref('hi')
</script>
```

## tsx

```tsx
import { ref } from 'vue'

const Demo = defineComponent({
  setup() {
    const inputRef = ref('hi')

    return {
      inputRef,
    }
  },
  render() {
    return (
      <div>
        <input v-model={this.inputRef} />
        <button v-copy={this.inputRef}>Copy</button>
      </div>
    )
  },
})
```
