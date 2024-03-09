# 已有自定义指令

## v-copy

基于 `clipboard.js` 实现的复制指令。

```vue
<template>
  <input v-model="copyText" />
  <div v-copy="copyText">点击复制</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const copyText = ref('复制的文本')
</script>
```

## v-debounce

基于 `lodash/debounce` 实现的防抖指令。

> 配置项类型 `DebounceBindingOptions`

```vue
<template>
  <div>
    <p>我执行了：{{ count }} 次</p>
    <button
      v-debounce="{
        func: changeCount,
        trigger: 'click',
        wait: 3000,
      }"
    >
      更新
    </button>
    <h3>我将会延迟 3s 后执行更新操作。</h3>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const changeCount = () => {
  count.value++
}
</script>
```

## v-throttle

基于 `lodash/throttle` 实现的节流指令。

> 配置项类型 `ThrottleBindingOptions`

```vue
<template>
  <div>
    <p>我执行了：{{ count }} 次</p>
    <button
      v-throttle="{
        func: changeCount,
        trigger: 'click',
        wait: 3000,
      }"
    >
      更新
    </button>
    <h3>我只会在 3s 内执行一次。</h3>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const changeCount = () => {
  count.value++
}
</script>
```

## v-disabled

基于 `ray-template__directive--disabled` 样式类实现。

```vue
<template>
  <div>
    <input v-model="inputValue" v-disabled="isDisabled" />
    <button @click="() => (isDisabled = !isDisabled)">点击</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('我是输入框')
const isDisabled = ref(false)
</script>
```

## v-ellipsis

该指令支持实现两种省略模式：`block`, `line`。

:::tip
`width` 为必传递项。
:::

完整的配置项类型 `EllipsisBindingValue`。

### block 单行模式

```vue
<template>
  <div>
    <div
      v-ellipsis="{
        type: 'block',
        width: '100px',
      }"
    >
      我是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本。
    </div>
  </div>
</template>
```

### line 多行模式

```vue
<template>
  <div>
    <div
      v-ellipsis="{
        type: 'line',
        lineClamp: 2,
        width: '100px',
      }"
    >
      我是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本。
    </div>
  </div>
</template>
```
