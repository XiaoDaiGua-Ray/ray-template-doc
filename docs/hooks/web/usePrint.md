# usePrint

打印元素。

:::tip
直接打印元素，可能会有奇奇怪怪的问题，所以应该直接使用 `printDom` 方法。
:::

## 返回值

| 名称  | 类型         | 说明     |
| ----- | ------------ | -------- |
| print | `() => void` | 打印函数 |

## UsePrintOptions

:::details code

```ts
interface UsePrintOptions extends Omit<print.Configuration, 'printable'> {}
```

:::

## 基础使用

```tsx
import { NButton } from 'naive-ui'

import { usePrint } from '@/hooks'

const Demo = defineComponent({
  setup() {
    const elementRef = ref<HTMLElement>()

    const { print } = usePrint(elementRef, {
      // UsePrintOptions
    })

    return {
      elementRef,
      print,
    }
  },
  render() {
    const { print } = this

    return (
      <div ref="elementRef">
        <NButton onClick={print}>打印</NButton>
      </div>
    )
  },
})
```
