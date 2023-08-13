# 请求

项目采用 `axios` 作为请求库。基于 `vue-hook-plus` 库的 `useRequest` 进行二次封装。现在已有的功能包括：

- 自动取消重复请求
- 自动请求/手动请求
- 轮询
- 防抖
- 节流
- 屏幕聚焦重新请求
- 错误重试
- loading delay
- SWR(stale-while-revalidate)
- 缓存
- 滚动加载和分页加载
- 并行请求
- 自定义插件

## `RequestCanceler` 取消器

:::tip
默认开启 `axios` 自动取消重复请求功能、切换路由前取消当前所有路由请求功能。都是基于 `RequestCanceler` 功能实现，可以根据实际需求进行拓展。
:::

### 使用方法

```ts
import RequestCanceler from '@/axios/helper/canceler'

const axiosCanceler = new RequestCanceler()
```

### `cancelConfig` 配置

可以通过配置 `cancelConfig` 属性，手动控制是否需要自动取消该请求。并且有且仅有 `cancelConfig.needCancel` 为 `false` 时，才不会被取消器自动搜集并且取消。

```ts
import { useRequest, request } from '@/axios/index'

// useRequest 配置
const { data, loading, run } = useRequest<{
  title: string
}>(
  {
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    method: 'get',
    cancelConifg: {
      needCancel: false,
    },
  },
  {
    manual: true,
  },
)

// request
request({
  url: 'https://jsonplaceholder.typicode.com/todos/1',
  method: 'get',
  cancelConifg: {
    needCancel: false,
  },
})
```

## 注入

`src/axios/inject` 包中，用于设置请求注入与响应注入。方法会在请求前、响应前执行。实现相关方法后，需要使用 `setImplement` 方法进行注册。

:::tip tip
`setImplement` 方法会根据设置方法的顺序依次执行任务，请注意方法顺序。并且建议方法命名时，按照其作用以 `injectRequestXXX` 与 `injectResponseXXX` 方式命名。
:::

## 请求注入（request）

演示如何注入 `http` 请求头。并且提供 `RequestInterceptorConfig` 类型工具函数。

```ts
// 导入注入器
import { useAxiosInterceptor } from '@/axios/helper/interceptor'
// 导入设置请求头方法
import { appendRequestHeaders } from '@/axios/helper/axiosCopilot'

import type {
  RequestInterceptorConfig,
  BeforeFetchFunction,
  FetchErrorFunction,
} from '@/axios/type'

const { setImplement } = useAxiosInterceptor()

const injectRequestHeaders: BeforeFetchFunction<RequestInterceptorConfig> = (
  ins,
  mode,
) => {
  appendRequestHeaders(ins, [
    {
      key: 'Demo-Header-Key',
      value: 'Demo Header Value',
    },
  ])
}

// 注册请求拦截器
export const setupRequestInterceptor = () => {
  setImplement(
    'implementRequestInterceptorArray',
    [injectRequestHeaders, injectCanceler],
    'ok',
  )
}

// 注册请求错误拦截器
export const setupRequestErrorInterceptor = () => {
  setImplement('implementRequestInterceptorErrorArray', [], 'error')
}
```

## 响应注入（response）

演示响应注入。并且提供 `ResponseInterceptorConfig` 类型工具函数。

```ts
import { useAxiosInterceptor } from '@/axios/helper/interceptor'

import type {
  ResponseInterceptorConfig,
  BeforeFetchFunction,
  FetchErrorFunction,
} from '@/axios/type'

const { setImplement } = useAxiosInterceptor()

const injectResponseTodoSomething: BeforeFetchFunction<
  ResponseInterceptorConfig
> = (ins, mode) => {
  console.log(ins, mode)
}

// 注册响应拦截器
export const setupResponseInterceptor = () => {
  setImplement(
    'implementResponseInterceptorArray',
    [injectResponseTodoSomething],
    'ok',
  )
}

// 注册响应错误拦截器
export const setupResponseErrorInterceptor = () => {
  setImplement('implementResponseInterceptorErrorArray', [], 'error')
}
```

## 请求

基于 `useRequest` 方法封装，无缝衔接使用 `useRequest` 的所有特性（防抖、节流、缓存、取消。。。等，详情见文档 [`vue hook plus`](https://inhiblab-core.gitee.io/docs/hooks/useRequest/basic)）。

## useRequest

使用该方法时，由于封装的局限性，仅支持配置化的请求方式（axios request config）。

```tsx
import { NCard, NLayout, NSpace, NInput, NButton } from 'naive-ui'

import { useRequest } from '@/axios/index'

interface JSONPlaceholder {
  completed: boolean
  id: number
  title: string
  userId: number
}

const RAxiosDemo = defineComponent({
  name: 'RAxiosDemo',
  setup() {
    const { data, loading, run } = useRequest<JSONPlaceholder>(
      {
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        method: 'get',
      },
      {
        manual: true,
      },
    )

    return {
      data,
      loading,
      run,
    }
  },
  render() {
    return (
      <NCard title="useRequest示例（手动触发）">
        <NSpace vertical>
          <NButton onClick={this.run.bind(this)}>获取数据</NButton>
          <h3>
            结果:&nbsp;
            {this.loading ? '获取中...' : this.data?.title}
          </h3>
        </NSpace>
      </NCard>
    )
  },
})
```

:::tip tip
`useRequest` 方法存在一些局限性，请求的时候不支持动态的参数请求，所以建议使用 `useHookPlusRequest` + `request` 方式进行结合使用。
:::

## useHookPlusRequest

```tsx
import { NCard, NLayout, NSpace, NInput, NButton } from 'naive-ui'

import { useHookPlusRequest, request } from '@/axios/index'

interface JSONPlaceholder {
  completed: boolean
  id: number
  title: string
  userId: number
}

export const getTypicode = (page: number) => {
  return request<JSONPlaceholder>({
    url: `https://jsonplaceholder.typicode.com/todos/${page}`,
    method: 'get',
  })
}

const RAxiosDemo = defineComponent({
  name: 'RAxiosDemo',
  setup() {
    const throttleDemoInputValue = ref(null)

    const { data, loading, run } = useHookPlusRequest(getTypicode, {
      debounceWait: 1000,
    })

    return {
      data,
      loading,
      run,
      throttleDemoInputValue,
    }
  },
  render() {
    return (
      <NCard title="节流">
        <NSpace vertical>
          <NInput
            v-model:value={this.throttleDemoInputValue}
            onUpdateValue={(val) => {
              this.run(val)
            }}
          />
          <h3>不论触发多少次，一秒钟之内仅会触发一次</h3>
          <h3>
            当前状态:&nbsp;
            {this.loading ? '获取中...' : this.data?.title}
          </h3>
        </NSpace>
      </NCard>
    )
  },
})
```

:::tip tip
其实这么写也是一个迫不得已的妥协方法，因为 `useHookPlusRequest` 仅限于在 `setup` 环境中使用，所以只能将其拆分开。其实 `useHookPlusRequest` 作为一个工具方法，并非仅仅是与 `axios` 绑定使用，可以把它视为一个与 `vue` 生命周期绑定的工具函数。默认情况下，useRequest 第一个参数是一个异步函数，在组件初始化时，会自动执行该异步函数。
:::
