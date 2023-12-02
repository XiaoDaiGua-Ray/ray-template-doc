# 模板组件、NaiveUI 组件专属 Hooks

## useContextmenuCoordinate

该方法允许你传递一个 `Ref Dom` 对象，自动绑定右键事件。当你右键点击该 `Dom` 时，会返回一个 `coordinate` 对象，该对象包含了鼠标点击的坐标与其它信息。

:::warning 注意
必须设置 `NDropdown` 组件的 `trigger` 属性为 `manual`。
:::

```vue
<template>
  <div
    ref="dom"
    style="width: 100%; height: 200px; background-color: rgba(0, 128, 0, 0.5)"
  >
    <p>右键点击我</p>
  </div>
  <NDropdown
    :show="show"
    :x="x"
    :y="y"
    :options="options"
    trigger="manual"
    placement="bottom-start"
  />
</template>
<script lang="ts" setup>
import { NDropdown } from 'naive-ui'

import { ref } from 'vue'
import { useContextmenuCoordinate } from '@/hooks/components'

const dom = ref<HTMLElement>()
const { x, y, show } = useContextmenuCoordinate(dom)

// 菜单选项
const options = [
  {
    label: '杰·盖茨比',
    key: 'jay gatsby',
  },
  {
    label: '黛西·布坎南',
    key: 'daisy buchanan',
  },
  {
    type: 'divider',
    key: 'd1',
  },
  {
    label: '尼克·卡拉威',
    key: 'nick carraway',
  },
]
</script>
```

`useContextmenuCoordinate` 方法会自动管理 `NDropdown` 组件的显示与隐藏，你只需要传递 `NDropdown` 组件的 `x`、`y`、`show` 属性即可。
