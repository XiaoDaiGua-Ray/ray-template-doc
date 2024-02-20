# 特殊组件

在项目中，拆分了一个特殊的文件包 `app-components`。用于项目的功能注入，并且拆分为 `app` 与 `provider` 两种类型。其实两个包中的组件，都可能与项目数据有关联，拆分为两个的原因更多是按照其用途进行划分。

## app

存放全局使用，但是与项目数据有关联的特殊组件。例如：`AppLockScreen` `AppAvatar` 组件。这些都是与项目数据深度绑定，所以拆分在 `app` 包中。这些组件功能比较简单，这里不做赘述。

## provider

项目中一些功能采用组件注入的方式实现，并且该包中的组件一般来说不需要做改动。

## AppNaiveGlobalProvider

`navie ui` 的全局注入组件。全局注册 `message` `dialog` `notification` `loadingBar`，并且挂载在 `window` 中，让你可以在项目中使用 `window.$xxx` 方法调用。并且注入对应的 `themeOverrides` `locale`。

:::warning 注意
该方法虽然可以便捷的注册这四个方法，但是存在一些局限性。例如 `notification` 只能在右上角出现，如果在页面中有需要自定义触发位置的需求，需要自己重新按照官方文档的调用方法进行在当前页面使用。
:::

## AppRequestCanceler

:::tip 执行顺序
`beforeRouteUpdate` => `cancelAllRequest` => `routeUpdate`
:::

基于取消器 `RequestCanceler` 实现，可以在路由切换的时候，自动取消上一个路由中所有的请求。当然，你可以在请求的时候增加 `cancel` 配置，手动决定是否可以被手动取消（`false` 则不会被取消）。

```ts
import { useRequest, useHookPlusRequest, request } from '@/axios'

request<unknown>({
  url: 'https://jsonplaceholder.typicode.com/todos/1',
  method: 'get',
  cancelConfig: {
    cancel: true,
  },
})

useRequest<{
  title: string
}>(
  {
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    method: 'get',
    cancelConfig: {
      cancel: true,
    },
  },
  {
    manual: true,
  },
)
```

:::warning 注意
该方法仅会在进入系统后（登陆后），才会触发。并且需要注意请求的发送时机，否则可能会被错误取消。
:::

## AppStyleProvider

样式注入与加载动画的管理。会在 `body` 注入 `class` `css var` 等。

## AppWatermarkProvider

水印注入组件。
