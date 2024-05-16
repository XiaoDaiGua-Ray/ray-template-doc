# Dom 相关工具方法

## printDom

打印 dom 节点，该方法基于 `usePrint`, `useDomToImage` 实现。该方法仅用于 `dom` 打印，如果有其他的需求，可以根据业务自行封装。

```vue
<template>
  <div>
    <div ref="dom">
      <div>打印内容</div>
    </div>
    <button @click="print">打印</button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { printDom } from '@/utils'

const dom = ref<HTMLElement>()

const print = () => {
  printDom(dom)
}
</script>
```
