# useDevice

检测当前尺寸是否比平板尺寸或者指定尺寸更小。

## 返回值

| 名称              | 类型                                | 说明               |
| ----------------- | ----------------------------------- | ------------------ |
| width             | `Ref<number>`                       | 当前浏览器宽度     |
| height            | `Ref<number>`                       | 当前浏览器高度     |
| isTabletOrSmaller | `Readonly<globalThis.Ref<boolean>>` | 是否比指定尺寸更小 |

## UseDeviceOptions

:::details code

```ts
interface UseDeviceOptions extends UseWindowSizeOptions {
  /**
   *
   * @description
   * 自定义 isTabletOrSmaller 的判断尺寸。
   *
   * @default 768
   */
  media?: number
}
```

:::

## 基础使用

```ts
import { useDevice } from '@/hooks'

const { isTableOrSmaller } = useDevice()
```
