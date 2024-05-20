# v-ellipsis

溢出省略。

## template

```vue
<template>
  <div style="width: 100px; border: 1px solid #000;" v-ellipsis>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </div>
  <div
    style="width: 100px; border: 1px solid #000;"
    v-ellipsis="{ type: 'block', width: 200 }"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </div>
  <div
    style="width: 100px; border: 1px solid #000;"
    v-ellipsis="{ line: 2, width: 200 }"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </div>
</template>
```

## tsx

```tsx
const Demo = defineComponent({
  render() {
    return (
      <>
        <div style="width: 100px; border: 1px solid #000;" v-ellipsis>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div
          style="width: 100px; border: 1px solid #000;"
          v-ellipsis={{ type: 'block', width: 200 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div
          style="width: 100px; border: 1px solid #000;"
          v-ellipsis={{ line: 2, width: 200 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </>
    )
  },
})
```
