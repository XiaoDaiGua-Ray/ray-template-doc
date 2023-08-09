# 请求

## 自动取消请求

模板会自动的搜集所有的 `axios` 请求，并且在识别到重复请求的时候自动取消重复请求。并且在路由更新前的时候，会自动取消当前页面的所有请求。如果你并不希望该请求被取消，你可以手动的配置 `cancelConfig.needCancel` 属性为 `false`。

:::tip
取消器在每次取消请求的时候会自动有一个 `Error` 输出在控制台，但是他并不会影响你的请求方法，因为取消器仅会取消重复请求，所以当你的请求重复时，就会被自动取消上一个重复请求。
:::

## 请求返回值 `ts` 类型声明

不论是 `request` 方法，又或者是 `useRequest` 方法，都可以手动的传递类型为请求响应值批注类型。`useHookPlusRequest` 方法会自动的推导返回值类型，一般来讲不需要手动的批注。

```ts
import { useRequest, useHookPlusRequest, request } from '@/axios/index'

interface Person {
  name: string
  address: string
  age: number
}

request<Person>({
  url: 'http:xxxx',
  method: 'get',
})

useRequest<Person>({
  url: 'http:xxxx',
  method: 'get',
})
```
