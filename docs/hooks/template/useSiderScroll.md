# useSiderScroll

让菜单滚动条动起来。

## 返回值

| 名称          | 类型                                                                      | 说明     |
| ------------- | ------------------------------------------------------------------------- | -------- |
| siderScrollTo | `((options: ScrollToOptions) => void) & ((x: number, y: number) => void)` | 滚动函数 |

## siderScrollTo

```ts
import { useSiderScroll } from '@/hooks'

const siderScrollTo = useSiderScroll()

siderScrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth',
}) // 滚动内容区域
siderScrollTo(10, 10) // x, y 方向滚动到 10 位置
```
