# 数据表格 Ray Table

## 基础功能

该表格完全继承于 [Naive UI Data Table](https://www.naiveui.com/zh-CN/dark/components/data-table) 组件。其基础功能与之完全一致。

## 拓展功能

```ts
import RayTable from '@/components/RayTable/index'
```

- 导出为 excel（操作栏自带方法）
- 打印表格（操作栏自带方法）
- 动态操作表头（动态锁定列、动态设置列排序、动态设置列宽度）

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

- 右键菜单

::: info api
默认开启右键菜单，仅需要设置 rightClickMenu 即可。<br />
onMenuSelect 为选中菜单回调方法。
:::

```tsx
<RayTable
  title="右键菜单表格"
  data={this.tableData}
  columns={this.baseColumns}
  rightClickMenu={this.tableMenuOptions} // [!code focus]
  onMenuSelect={this.handleMenuSelect.bind(this)} // [!code focus]
/>
```
