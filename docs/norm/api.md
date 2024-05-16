# 请求规范

请求使用 [vue-hooks-plus useRequest](https://inhiblabcore.github.io/docs/hooks/useRequest/) 作为异步管理器；结合 `axios` 进行请求。

## 请求命名规范

### 按照后端接口名命名

假设该接口为获取所有的 DTU 信息。

```sh
/api/DTU/GetDTUSelectModule
```

那么接口方法可以写为:

```ts
const getDTUSelectModule = () => {
  return request({
    // ...
  })
}
```

### 按照 【模块】+【功能】命名

有时候，会存在抽离公共接口的时候。比如某一个下拉菜单的接口。

```sh
/api/Common/GetEnumList
```

这种接口一般都是通过 `enumName` 来进行匹配的。有时候希望单独抽离一个接口方法进行管理，那么可以这么写:

```ts
const getEnumTestTypesResult = () => {
  return request({
    // ...
  })
}
```

- Enum: 代表模块，代表属于枚举（下拉）
- TestTypes: 代表功能，代表获取测试类型的下拉菜单

## 结合 `useHookPlusRequest` 使用

在项目中，为了方便管理与避免命名冲突，将该方法统一至 `src/axios` 包中导出。

```ts
import { useHookPlusRequest } from '@/axios'

import { getEnumTestTypesResult } from '@/api/common'

const Demo = () => {
  const { data, loading } = useHookPlusRequest(getEnumTestTypesResult)

  return <div>{loading ? 'loading...' : data}</div>
}
```

:::danger
千万不要在组件生命周期外使用 `useHookPlusRequest`，否则会导致一些不可预测的问题。
:::

- Bad ❌

```ts
const { data, loading } = useHookPlusRequest(getEnumTestTypesResult)
```

- Good ✅

```ts
const Demo = () => {
  const { data, loading } = useHookPlusRequest(getEnumTestTypesResult)

  return <div>{loading ? 'loading...' : data}</div>
}
```

## 多个请求中如何命名变量

建议与接口名称结合起来命名，比如:

```ts
import { useHookPlusRequest } from '@/axios'

import { getEnumTestTypesResult } from '@/api/common'

const Demo = () => {
  const {
    data: dataGetEnumTestTypesResult,
    loading: loadingGetEnumTestTypesResult,
  } = useHookPlusRequest(getEnumTestTypesResult)
}
```

这样命名的好处便是:

- `低心智负担`: 不用去费尽心思考虑如何命名
- `一目了然`: 知道该变量是由哪个接口返回的
- `便于搜索`: 直接搜索接口名即可找到对应的变量
- `便于维护`: 不会因为变量名冲突而导致问题

## useRequest 使用

善于使用该方法提供的高级功能，如果有需求应该是去看看文档，而不是自己瞎折腾。

在开发中，强制约束使用异步管理器管理请求。

[文档一键直达](https://inhiblabcore.github.io/docs/hooks/useRequest/)

## 格式化数据

弃用旧的 `useFormatResult` 方法格式化数据，直接使用 `options.formatResult` 进行格式化。

## axios 插件

`axios` 拦截器，采用插件式设计与管理。所以应该严格按照该规范进行拦截器的编写。

### 文件目录结构

文件目录结构如下:

```
.
├── src
│   ├── axios
│   │   ├── axios-interceptor
│   │   │   ├── request
└─  └── └── └── response
```

### axios 插件示例

```ts
import type { FetchFunction } from '@/axios/types'

const yourPlugin: FetchFunction = (inst, mode) => {
  // ...
}
```

编写完成后，在对于的 `request` 或 `response` 文件中的 `provider.ts` 文件中引入即可。
