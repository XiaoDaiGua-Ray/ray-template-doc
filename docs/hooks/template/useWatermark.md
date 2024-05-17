# useWatermark

出现在钱上的时候比较可爱。

## 返回值

| 说明                | 类型                        | 说明         |
| ------------------- | --------------------------- | ------------ |
| setWatermarkContent | `(content: string) => void` | 设置水印内容 |
| showWatermark       | `() => void`                | 显示水印     |
| hiddenWatermark     | `() => void`                | 显示水印     |
| toggleWatermark     | `() => void`                | 切换水印状态 |

## 基础使用

```ts
import { useWatermark } from '@/hooks'

const { setWatermarkContent, showWatermark, hiddenWatermark, toggleWatermark } =
  useWatermark()

setWatermarkContent('Hello, Watermark!') // 设置水印内容
showWatermark() // 显示水印
hiddenWatermark() // 隐藏水印
toggleWatermark() // 切换水印状态
```
