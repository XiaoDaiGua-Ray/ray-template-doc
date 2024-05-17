# useAppRoot

获取到根信息配置，做点什么。

## 返回值

| 名称         | 类型                                     | 说明                               |
| ------------ | ---------------------------------------- | ---------------------------------- |
| getRootRoute | `ComputedRef<AppRootRoute>`              | 根路由配置信息                     |
| getRootPath  | `ComputedRef<string>`                    | 根路由路径                         |
| getRootName  | `ComputedRef<string>`                    | 根路由名称                         |
| setRootRoute | `(route: Partial<AppRootRoute>) => void` | 动态设置根路由，会自动合并默认配置 |

## AppRootRoute

:::details code

```ts
interface AppRootRoute {
  name: string
  path: string
}
```

:::

## 基础使用

```ts
import { useAppRoot } from '@/hooks'

const { getRootRoute, getRootPath, getRootName, setRootRoute } = useAppRoot()

setRootRoute({
  name: 'demo',
})
setRootRoute({
  path: '/demo',
})
setRootRoute({
  name: 'your name',
  path: 'your path',
})
```
