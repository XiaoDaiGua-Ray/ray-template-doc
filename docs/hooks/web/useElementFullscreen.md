# useElementFullscreen

让元素网页全屏。

## 返回值

| 说明             | 类型         | 说明         |
| ---------------- | ------------ | ------------ |
| enter            | `() => void` | 进入全屏     |
| exit             | `() => void` | 退出全屏     |
| toggleFullscreen | `() => void` | 切换全屏状态 |

## UseElementFullscreenOptions

:::details code

```ts
interface UseElementFullscreenOptions {
  /**
   *
   * 进入全屏前的回调
   */
  beforeEnter?: () => void
  /**
   *
   * 进入全屏后的回调
   */
  enter?: () => void
  /**
   *
   * 退出全屏前的回调
   */
  beforeExit?: () => void
  /**
   *
   * 退出全屏后的回调
   */
  exit?: () => void
  /**
   *
   * 全屏时的 z-index
   *
   * @default 999
   */
  zIndex?: number
  /**
   *
   * 全屏时的背景色
   *
   * @default null
   */
  backgroundColor?: string
  /**
   *
   * 手动设定 transition 过度效果
   *
   * @default 'width 0.3s var(--r-bezier), height 0.3s var(--r-bezier)'
   */
  transition?: string
}
```

:::

## 基础使用

```tsx
import { NButton } from 'naive-ui'

import { ref } from 'vue'
import { useElementFullscreen } from '@/hooks'

const Demo = defineComponent({
  setup() {
    const elementRef = ref<HTMLElement>()
    const { enter, exit, toggleFullscreen } = useElementFullscreen(elementRef)

    return {
      enter,
      exit,
      toggleFullscreen,
      elementRef,
    }
  },
  render() {
    const { enter, exit, toggleFullscreen } = this

    return (
      <div ref="elementRef">
        <NButton onClick={enter}>enter</NButton>
        <NButton onClick={exit}>exit</NButton>
        <NButton onClick={toggleFullscreen}>toggleFullscreen</NButton>
      </div>
    )
  },
})
```

### enter 进入全屏

```ts
enter()
```

### exit 退出全屏

```ts
exit()
```

### toggleFullscreen

```ts
toggleFullscreen()
```
