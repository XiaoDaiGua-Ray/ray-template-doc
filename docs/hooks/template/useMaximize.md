# useMaximize

大大大，小小小。

## 返回值

| 名称                     | 类型                                                 | 说明                   |
| ------------------------ | ---------------------------------------------------- | ---------------------- |
| isLayoutContentMaximized | `ComputedRef<boolean>`                               | 是否处于网页最大化状态 |
| maximize                 | `(full: boolean, options?: MaximizeOptions) => void` | 切换状态               |

## MaximizeOptions

:::details code

```ts
interface MaximizeOptions extends UseElementFullscreenOptions {
  /**
   *
   * 配置全屏后滚动的位置，left、top、behavior
   * 基于 LAYOUT_CONTENT_REF 实现
   *
   * 但是，该配置项仅在传递 true 时生效
   *
   * @default undefined
   */
  scrollToOptions?: ScrollToOptions
}
```

:::

## ScrollToOptions

:::details code

```ts
interface ScrollToOptions {
  left?: number
  top?: number
  behavior?: 'auto' | 'smooth' | 'instant'
}
```

:::

## 基础使用

```ts
import { useMaximize } from '@/hooks'

const { isLayoutContentMaximized, maximize } = useMaximize()

maximize(true) // 最大化网页
maximize(false) // 还原网页
```
