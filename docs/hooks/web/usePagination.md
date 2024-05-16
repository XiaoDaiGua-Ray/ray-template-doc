# usePagination

分页器 `hooks`。

:::tip
业务开发时，如果是需要结合表格，建议直接使用 [BTablePro](/docs/components/business/b-table-pro.html) 组件。
:::

## 返回值

| 名称            | 类型                                        | 说明               |
| --------------- | ------------------------------------------- | ------------------ |
| paginationRef   | `Ref<UsePaginationOptions>`                 | 响应式分页配置项   |
| setItemCount    | `(itemCount: number) => void`               | 设置总条数         |
| getPage         | `() => number`                              | 获取页码           |
| setPage         | `() => number`                              | 设置页码           |
| getPageSize     | `() => number`                              | 获取分页条数       |
| setPageSize     | `(pageSize: number) => void`                | 设置分页条数       |
| getPagination   | `getPagination: () => UsePaginationOptions` | 获取分页配置项     |
| getCallback     | `T \| undefined`                            | 获取设置的回调函数 |
| setCallback     | `<T extends AnyFC>(callback: T) => void`    | 动态设置回调函数   |
| resetPagination | `() => void`                                | 重置分页配置       |

## 基础使用

:::details code

```tsx
import { usePagination } from '@/hooks'

const Demo = defineComponent({
  setup() {
    const [
      paginationRef,
      { getPage, getPageSize, setItemCount, setCallback, setPage },
    ] = usePagination()

    // 获取人员列表
    const getPersonList = () => {
      // ...
    }

    setCallback(getPersonList)
  },
})
```

:::
