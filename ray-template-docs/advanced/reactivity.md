# reactivityTransform 功能（已废弃）

`vue3` 的响应式函数后，每一次修改或者访问 `ref` 响应式数据时，需要进行显示的 `.value` 调用，显得及其繁琐。所以尤大大团队提出了该 `SFC` 意在减轻开发者的心智负担。

:::tip
但是，实际上这个试验性功能很多问题，并且最终被遗弃。具体被舍弃原因可以查看[`原文`](https://github.com/vuejs/rfcs/discussions/369#discussioncomment-5059028)。
:::

## 使用方法

```vue
<script setup>
let count = $ref(0)

console.log(count)

function increment() {
  count++
}
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>
```

经过编译后，会被转换为这样：

```js
import { ref } from 'vue'

let count = ref(0)

console.log(count.value)

function increment() {
  count.value++
}
```

具体这里就不做赘述了，有兴趣可以去查看[官网地址](https://cn.vuejs.org/guide/extras/reactivity-transform.html)

## api

- `ref` => `$ref`
- `computed` => `$computed`
- `shallowRef` => `$shallowRef`
- `customRef` => `$customRef`
- `toRef` => `$toRef`
