# useVueRouter

允许你在 `setup` 环境外使用。

## 返回值

| 名称   | 类型                 | 说明        |
| ------ | -------------------- | ----------- |
| router | `{ router: Router }` | Router 实例 |

该方法与 `vue-router` 的 `useRouter` 方法相同。

## 基础使用

:::details code

```tsx
import { useVueRouter } from '@/hooks'

const demo = () => {
  const {
    router: { getRoutes, push, replace },
  } = useVueRouter()

  const routes = getRoutes()

  push({ name: 'home' })
  replace({ name: 'home' })
}
```

:::
