# useContentScroll

让内容区域滚一滚。

## 返回值

| 名称            | 类型                                                                      | 说明     |
| --------------- | ------------------------------------------------------------------------- | -------- |
| contentScrollTo | `((options: ScrollToOptions) => void) & ((x: number, y: number) => void)` | 滚动函数 |

## contentScrollTo

```ts
import { useContentScroll } from '@/hooks'

const contentScrollTo = useContentScroll()

contentScrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth',
}) // 滚动内容区域
contentScrollTo(10, 10) // x, y 方向滚动到 10 位置
```
