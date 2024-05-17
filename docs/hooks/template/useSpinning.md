# useSpinning

让内容区域，转圈圈。

## 返回值

| 名称      | 类型                      | 说明                                                           |
| --------- | ------------------------- | -------------------------------------------------------------- |
| reload    | `(wait?: number) => void` | 显示加载状态，并且重新刷新当前路由加载，默认 800ms             |
| openSpin  | `() => void`              | 让内容区域处于加载状态，需要手动取消，并且不会重新刷新当前路由 |
| closeSpin | `() => void`              | 关闭内容区域加载状态                                           |

## 基础使用

```ts
import { useSpinning } from '@/hooks'

const { reload, openSpin, closeSpin } = useSpinning()

reload() // 显示加载状态，并且重新刷新当前路由加载，默认 800ms
openSpin() // 让内容区域处于加载状态，需要手动取消，并且不会重新刷新当前路由
closeSpin() // 关闭内容区域加载状态
```
