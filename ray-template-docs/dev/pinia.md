# pinia 状态管理器

> 项目采用 `pinia` 作为状态管理器。与 `vuex` 不同的是，`pinia` 更为简洁、易上手，也是现在 `vue` 官方指定的专属状态管理器。

## 新增仓库模块

- `src/store/modules` 目录下创建模块文件
- 创建一个名为 `index.ts` 的文件
- `src/store/index` 中将新增的仓库暴露出去

```ts
// 假设新增一个 demo 仓库
// defineStore 第一个参数 key，必须全局唯一！
export const useDemo = defineStore('demo', () => {
  const count = ref(0)

  const handleCount = () => count.value++

  return {
    count,
    handleCount,
  }
})

// 暴露该仓库
export { useDemo } from './modules/demo/index'

// 使用仓库
// 导入仓库
import { useDemo } from '@/store'

const demoStore = useDemo()
// 获取暴露方法
const { handleCount } = demoStore
// 响应式解构 count
const { count } = storeToRefs(demoStore)
```

## 现有仓库

> 一般来讲，在业务开发过程中不应该去访问默认的数据仓库。可能会导致一些奇奇怪怪的问题，如果有这方面需求，也应该是读取为主。

## 持久化处理

> 使用 [`piniaPluginPersistedstate`](https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/) 实现持久化。

```ts
export const useDemo = defineStore(
  'demo',
  () => {
    const count = ref(0)

    const handleCount = () => count.value++

    return {
      count,
      handleCount,
    }
  },
  {
    persist: {
      // 访问 key // [!code hl]
      key: 'piniaDemoStore',
      // 持久化存储类型 // [!code hl]
      storage: window.sessionStorage,
      // 持久化数据（如果不指定，则全部缓存）// [!code hl]
      paths: ['count'],
    },
  },
)
```
