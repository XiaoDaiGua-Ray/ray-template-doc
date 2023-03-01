# 数据表格 Ray Table

> Ray Table 可以让你简单生成一个可操作、可展示的表格，不需要或者让你少写一点样式，通过预留插槽使用或者 `props` 的配置，即可实现一个带有操作功能的表格。结合 [可折叠操作栏](/articles/component/collapse-grid.html) 组件，让你快速实现 curd 页面。

## 基础功能

该表格完全继承于 [Naive UI Data Table](https://www.naiveui.com/zh-CN/dark/components/data-table) 组件。其基础功能与之完全一致。

## 功能

> 相关拓展 `api` 可以 [点击查看](https://github.com/XiaoDaiGua-Ray/xiaodaigua-ray.github.io/blob/main/src/components/RayTable/src/props.ts) 该文件的注释和说明。

```ts
import RayTable from '@/components/RayTable/index'
```

## 导出为 excel（操作栏自带方法）

> 点击操作栏导出按钮即可

## 打印表格（操作栏自带方法）

> 点击操作栏导出按钮即可

## 动态操作表头（动态锁定列、动态设置列排序、动态设置列宽度）

::: info api
将 columns 设置为 v-model:columns 即可。
:::

```tsx
<RayTable
  title="带有拓展功能的表格"
  data={this.tableData}
  v-model:columns={this.actionColumns} // [!code focus]
/>
```

## 右键菜单

### rightClickMenu

- 类型：`DropdownMixedOption[]`
- 默认值： `[]`
- 说明：如果配置列表长度为零，不会渲染

### showMenu

- 类型：`boolean`
- 默认值： `true`
- 说明：如果设置为 `false` 则不会渲染

```tsx
<RayTable
  title="右键菜单表格"
  data={this.tableData}
  columns={this.baseColumns}
  rightClickMenu={this.tableMenuOptions} // [!code focus]
  onMenuSelect={this.handleMenuSelect.bind(this)} // [!code focus]
/>
```

::: info api
默认开启右键菜单，仅需要设置 rightClickMenu 即可。
onMenuSelect 为选中菜单回调方法。
:::

## 表格标题

### title

- 类型：`string | VNodeChild`
- 默认值：`''`

## 启用操作栏

### action

- 类型：`boolean`
- 默认值：`true`
- 说明：如果禁用该属性，则会自动隐藏操作栏

## 自定义操作栏提示、图标

### exportTooltip

- 类型：`string`
- 默认值：`是否导出为Excel表格?`

### exportPositiveText

- 类型：`string`
- 默认值：`确认`

### exportNegativeText

- 类型：`string`
- 默认值：`取消`

### exportExcelIcon

- 类型：`string`
- 默认值：`export_excel`

::: info
打印表格方法配置与之差不多，这里不做赘述。
:::

## 表格头部区域间隔

### tableHeaderSpace

- 类型：`string`
- 默认值：`10px`

## 导出表格类型

### exportType

- 类型：`string`
- 默认值：`xlsx`

## 导出表格类型

### printType

- 类型：`PrintConfiguration.PrintTypes`
- 默认值：`html`

## 表格边框

### bordered

- 类型：`boolean`
- 默认值：`true`

## 表格底部内容区域

```tsx
<RayTable
  title="基础使用"
  data={this.tableData}
  columns={this.baseColumns}
  action={false}
  pagination={{
    pageSize: 10,
  }}
>
  {{
    tableFooter: () => '表格的底部内容区域，有时候你可能会用上', // [!code focus]
  }}
</RayTable>
```
