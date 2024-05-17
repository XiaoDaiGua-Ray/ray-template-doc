# useAppNavigation

启用导航，开始出发。

## 返回值

| 名称         | 类型                                                     | 说明     |
| ------------ | -------------------------------------------------------- | -------- |
| navigationTo | `(target: Target, option?: NavigationToOptions) => void` | 导航函数 |

## Target

:::details code

```ts
type Target = number | AppMenuOption | string
```

:::

## NavigationToOptions

:::details code

```ts
interface NavigationToOptions {
  /**
   *
   * 是否为 push 模式
   * 如果设置为 true， 则会使用 vue-router 的 push 方法进行导航，否则使用 replace 方法进行导航
   *
   * @default true
   */
  isPush?: boolean
  /**
   *
   * 跳转参数
   *
   * @default undefined
   */
  query?: LocationQuery
}
```

:::

## navigationTo 导航

```ts
import { useAppNavigation } from '@/hooks'

navigationTo(1) // 导航至第二个菜单项，如果为根菜单项，会自动的递归导航至第一个子菜单项
navigationTo({ AppMenuOption }) // 导航至目标菜单项
navigationTo('path') // 导航至目标路由
```
