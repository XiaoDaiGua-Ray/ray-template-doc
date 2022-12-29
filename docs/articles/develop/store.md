# 状态管理器

## pinia

### 为什么选择 pinia

Pinia 是 Vue 的专属状态管理库，它允许你跨组件或页面共享状态。如果你熟悉组合式 API 的话，你可能会认为可以通过一行简单的 `export const state = reactive({})` 来共享一个全局状态。对于单页应用来说确实可以，但如果应用在服务器端渲染，这可能会使你的应用暴露出一些安全漏洞。 而如果使用 Pinia，即使在小型单页应用中，你也可以获得如下功能

- Devtools 支持
  - 追踪 actions、mutations 的时间线
  - 在组件中展示它们所用到的 Store
  - 让调试更容易的 Time travel
- 热更新
  - 不必重载页面即可修改 Store
  - 开发时可保持当前的 State
- 可通过插件扩展 Pinia 功能
- 为 JS 开发者提供适当的 TypeScript 支持以及自动补全功能
- 支持服务端渲染

::: info 建议
如果你以前常用 vuex，那我更要建议你体验一下 pinia，不论是个人建议还是官方建议，都已经将 pinia 作为官方推荐库。只需要一点点时间成本，即可上手。
:::

### 项目仓库位置

该项目默认将 `src/store` 作为状态管理器仓库入口。

## 新增仓库

- src/store/modules 创建 my-store.ts 文件

```ts
export const useMyStore = defineStore(
  'myStore', // 作为 key，必须保证唯一
  () => {
    const demo = ref('hell pinia')
    const myState = reactive({
      my: 'hello ray',
    })

    return {
      demo,
      ...toRefs(myState),
    }
  },
  // 根据业务需求，是否开启该方法
  // {
  //   persist: {
  //     key: 'piniaSettingStore', // 如果配置为对象，该 key 必须唯一
  //   },
  // },
)
```

::: tip
项目使用了 [piniaPluginPersistedstate](https://github.com/prazdevs/pinia-plugin-persistedstate) 作为防止刷新丢失数据处理插件。如果需要对当前仓库开启防止刷新丢失，仅需要在 `defineStore` 方法的第三个参数配置 `persist` 即可。具体配置方法可以参考官方文档。
:::

- src/store/index.ts 默认导出

```ts
export { useMyStore } from './modules/my-store'
```

- 页面使用

```ts
import { useMyStore } from '@/store'
```
