# RTable 表格

有点意思的表格组件。

## 基础用法

该组件基于 `NCard`, `NTable` 封装，支持这两个组件的几乎所有的配置项。

并且还在此基础上封装了 `useCheckedRowKeys`, `useTable` 方法。

## useCheckedRowKeys

用于便捷的管理选择模式。

```tsx
import { RTable } from '@/components'

import { useCheckedRowKeys } from '@/components'

import type { DataTableColumns } from 'naive-ui'

const Demo = () =>
  defineComponent({
    setup() {
      const columns: DataTableColumns = [
        {
          type: 'selection',
        },
        {
          title: 'Age',
          key: 'age',
          sorter: (a, b) => a.age - b.age,
        },
        {
          title: 'Address',
          key: 'address',
        },
      ]
      const data = [
        { age: 18, address: 'address1', key: 1 },
        { age: 19, address: 'address2', key: 1 },
        { age: 20, address: 'address3', key: 1 },
      ]
      const [
        checkedRowKeys,
        { checkedRowKeysBind, getKeys, getRows, clearKey, clearAll, selectKey },
      ] = useCheckedRowKeys(data, columns, {
        rowKey: 'key',
        onChange: (keys, rows, meta) => {},
      })

      return {
        columns,
        data,
        checkedRowKeys,
        checkedRowKeysBind,
        getKeys,
        getRows,
        clearKey,
        clearAll,
        selectKey,
      }
    },
    render() {
      const { columns, data, checkedRowKeysBind } = this

      return (
        <RTable
          columns={columns}
          data={data}
          v-model:checkedRowKeys={this.checkedRowKeys}
          onUpdateCheckedRowKeys={checkedRowKeysBind.bind(this)}
        />
      )
    },
  })
```

## useTable

```tsx
import { RTable } from '@/components'

import { useTable } from '@/components'

import type { DataTableColumns } from 'naive-ui'

const Demo = defineComponent({
  setup() {
    const columns: DataTableColumns = [
      {
        type: 'selection',
      },
      {
        title: 'Age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Address',
        key: 'address',
      },
    ]
    const data = [
      { age: 18, address: 'address1', key: 1 },
      { age: 19, address: 'address2', key: 1 },
      { age: 20, address: 'address3', key: 1 },
    ]
    const [
      register,
      {
        getTableInstance,
        clearFilters,
        clearSorter,
        scrollTo,
        filters,
        sort,
        downloadCsv,
      },
    ] = useTable()

    return {
      register,
      columns,
      data,
    }
  },
  render() {
    const { register, columns, data } = this

    return (
      <RTable columns={columns} data={data} onRegister={register.bind(this)} />
    )
  },
})
```

## props

| 名称                    | 类型                                                      | 默认值      | 说明                                                                                                                     |
| :---------------------- | :-------------------------------------------------------- | :---------- | :----------------------------------------------------------------------------------------------------------------------- |
| cardProps               | `RTableCardProps`                                         | `{}`        | 配置表格外层的 NCard 容器样式，配置方式一致                                                                              |
| tool                    | `boolean`                                                 | `true`      | 是否显示工具栏                                                                                                           |
| downloadCsvTableOptions | `DownloadCsvTableOptions`                                 | `{}`        | 导出 csv 配置                                                                                                            |
| title                   | `VNode \| string \| number`                               | `undefined` | 表格标题                                                                                                                 |
| toolOptions             | `VNode \| () => VNode`                                    | `undefined` | 工具栏配置，可以与 coverTool 配置项结合使用                                                                              |
| coverTool               | `boolean`                                                 | `false`     | 是否覆盖工具栏                                                                                                           |
| contextMenuOptions      | `DropdownOption[]`                                        | `undefined` | 右键菜单配置，当该配置项不为 undefined 或者是一个有效数组时，会自动启用右键菜单，但是受到 disabledContextMenu 配置项影响 |
| disabledContextMenu     | `boolean`                                                 | `false`     | 是否禁用右键菜单                                                                                                         |
| onContextMenuClick      | `(key: string, option: DropdownOption) => void`           | `undefined` | 右键菜单点击事件                                                                                                         |
| wrapperBordered         | `boolean`                                                 | `true`      | 是否显示外层 NCard 容器边框，该配置项优先级最高                                                                          |
| printTableOptions       | `PrintTableOptions`                                       | `{}`        | 打印表格配置                                                                                                             |
| onUpdateColumns         | `(arr: DataTableColumn[]) => void`                        | `undefined` | 列配置更新事件                                                                                                           |
| onContextmenu           | `(row: Recordable, index: number, e: MouseEvent) => void` | `undefined` | 于启用右键菜单后被 Table 强行代理后的右键点击事件回调                                                                    |
| onRegister              | `(tableInst: RTableInst) => void`                         | `undefined` | 表格实例注册事件，如果需要使用 useTable hook，该配置项必填                                                               |
| remote                  | `boolean`                                                 | `true`      | 启用远程数据加载，需要异步数据并且分页的时候，需要设置                                                                   |
| striped                 | `boolean`                                                 | `true`      | 是否显示斑马纹                                                                                                           |
| statisticsOptions       | `TabsStatisticsItem[]`                                    | `[]`        | 统计配置项                                                                                                               |
| onStatisticsUpdateValue | `(option: TabsStatisticsItem) => void`                    | `undefined` | 统计项更新事件                                                                                                           |

## hooks

### useTable

| 名称             | 类型                                               | 说明           |
| ---------------- | -------------------------------------------------- | -------------- |
| getTableInstance | `() => RTableInst`                                 | 获取表格实例   |
| clearFilters     | `() => void`                                       | 清除所有过滤器 |
| clearSorter`     | `() => void`                                       | 清除所有排序器 |
| downloadCsv      | `(options?: CsvOptionsType) => void`               | 下载 csv       |
| filters          | `(filters: FilterState \| null) => void`           | 设置过滤器     |
| page             | `(page: number) => void`                           | 设置页码       |
| scrollTo         | `ScrollTo`                                         | 滚动到指定位置 |
| sort             | `(columnKey: ColumnKey, order: SortOrder) => void` | 设置排序器     |
| print            | `() => void`                                       | 打印表格       |

:::details 示例

```tsx
import { RTable } from '@/components'

import { useTable } from '@/components'

const Demo = () => {
  const [
    register,
    {
      getTableInstance,
      clearFilters,
      clearSorter,
      scrollTo,
      filters,
      sort,
      downloadCsv,
      print,
    },
  ] = useTable()

  return <RTable onRegister={register} />
}
```

:::

### useCheckedRowKeys

| 名称               | 类型                                                                                                                        | 说明                      |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| keysRef            | `Ref<RowKey[]>`                                                                                                             | 选中的行的 key 集合       |
| checkedRows        | `Ref<T[]>`                                                                                                                  | 选中的行的数据集合        |
| checkedRowKeysBind | `checkedRowKeysBind: (keys: RowKey[], rows: Recordable[], meta: { row: Recordable \| undefined; action: Action; }) => void` | 绑定选中行的 keys 和 rows |
| getKeys            | `() => RowKey[]`                                                                                                            | 获取选中的 keys           |
| getRows            | `() => T[]`                                                                                                                 | 获取选中的 rows           |
| clearKey           | `(key: RowKey) => void`                                                                                                     | 清除指定 key              |
| clearAll           | `() => void`                                                                                                                | 清除所有 key              |
| selectKey          | `(key: RowKey) => void`                                                                                                     | 选中指定 key              |

:::details 示例

```tsx
import { RTable } from '@/components'

import { useCheckedRowKeys } from '@/components'

import type { DataTableColumns } from 'naive-ui'

interface Demo {
  age: number
  address: string
  key: string
}

const Demo = () => {
  const columns: DataTableColumns<Demo> = [
    {
      type: 'selection',
    },
    {
      title: 'Age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      key: 'address',
    },
  ]
  const data = []
  const [
    checkedRowKeys,
    { checkedRowKeysBind, getKeys, getRows, clearKey, clearAll, selectKey },
  ] = useCheckedRowKeys<Demo>(data, columns, {
    rowKey: 'key',
  })

  return (
    <RTable
      onUpdateCheckedRowKeys={checkedRowKeysBind}
      v-model:checkedRowKeys={checkedRowKeys.value}
    />
  )
}
```

:::
