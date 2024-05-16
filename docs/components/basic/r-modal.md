# RModal 模态框

它会弹出来，然后给你看点东西。

基于 [NModal](https://www.naiveui.com/zh-CN/dark/components/modal) 封装。

## useModal

:::danger
该命令基于 `naive ui useModal` 进行封装，集成了 `RModal` 与 `NModal` 的一些特性。

非必要不使用组件式模态框。
:::

:::details code

```tsx
import { NButton, NFlex } from 'naive-ui'

import { useModal } from '@/components'

const Demo = () => {
  const { create } = useModal()

  const createDialog = () => {
    create({
      preset: 'dialog',
      content: 'hi dialog',
    })
  }

  const createCard = () => {
    create({
      preset: 'card',
      content: 'hi card',
    })
  }

  return (
    <NFlex>
      <NButton onClick={createDialog}>dialog</NButton>
      <NButton onClick={createCard}>card</NButton>
    </NFlex>
  )
}
```

:::

## props

| 名称        | 类型               | 默认值  | 说明                                    |
| ----------- | ------------------ | ------- | --------------------------------------- |
| memo        | `boolean`          | `true`  | 记忆上次拖拽位置，当 dad 开启时才会生效 |
| fullscreen  | `boolean`          | `false` | 全屏显示                                |
| width       | `string \| number` | `600`   | 模态框宽度                              |
| cardWidth   | `string \| number` | `600`   | preset 为 card 时，模态框宽度           |
| dialogWidth | `string \| number` | `446`   | preset 为 dialog 时，模态框宽度         |
| dad         | `boolean`          | `true`  | 是否开启拖拽                            |

其余 props 参考 [NModal Props](https://www.naiveui.com/zh-CN/dark/components/modal#Modal-Props)。
