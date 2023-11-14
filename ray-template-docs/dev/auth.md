# 鉴权

每个模板都会提供一个鉴权的功能，但是事实上，每个企业的登陆流程和字段是很难一致的。所以做一些封装其实意义不会太大。这里提供一个封装思路。

:::tip
模板在实现权限路由的时候其实是依赖了一些提前拟定的参数，所以在开发的时候应该注意修改为你实际业务的字段。
:::

## 涉及方法

### `validRole`

该方法依赖了 `getSigningCallback.value.role` 属性。也就是 `store` 仓库中的 `signing` 模块的 `signingCallback` 属性。当你在修改登录逻辑的时候需要注意该方法也要同步的修改，否则路由权限鉴权会失效或者报错。

## 鉴权封装

假设这是后端下发的权限列表

```ts
const roleOptions = [
  'dashboard.create',
  'dashboard.view',
  'dashboard.delete',
  'dashboard.update',
]
```

### 鉴权函数

```ts
import { appExpandRoutes } from '@/router/appRouteModules' // 获取到所有平铺开的路由列表

function useAuth() {
  const auth = (validValue: string | string[]) => {
    if (typeof validValue === 'string') {
      return roleOptions.includes(validValue)
    }

    if (Array.isArray(validValue)) {
      const result: boolean[] = []

      validValue.forEach((curr) =>
        roleOptions.includes(validValue)
          ? result.push(true)
          : result.push(false),
      )

      return result
    }
  }

  return {
    auth,
  }
}
```

使用 `useAuth`。

```ts
const { auth } = useAuth()

auth('dashboard.create') // true
auth('dashboard.create', 'dashboard.view', 'dashboard.unknown') // [true, true, false]
```

### 鉴权指令

```ts
import { useAuth } from '@/hooks/template/index'

const copyDirective: CustomDirectiveFC<HTMLElement, string | string[]> = () => {
  return {
    mounted: (el, { value }) => {
      const { auth } = useAuth()

      const authResult = auth(value)

      if (typeof value === 'string' && typeof authResult === 'boolean') {
        if (!authResult) {
          el.parentNode?.removeChild(el)
        }
      } else if (Array.isArray(value)) {
        if (!authResult.includes(true)) {
          el.parentNode?.removeChild(el)
        }
      }
    },
  }
}
```

使用指令。

```vue
<template>
  <h1 v-auth="auth">我不会被销毁</h1>
  <h1 v-auth="'dashboard.unknown'">我会被销毁</h1>
</template>
<script lang="ts" setup>
const auth = ['dashboard.create', 'dashboard.view', 'dashboard.unknown']
</script>
```
