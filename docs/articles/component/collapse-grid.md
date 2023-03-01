# 折叠框 Ray Collapse Grid

## 基础功能

该表格完全基于 [Naive UI Grid](https://www.naiveui.com/zh-CN/dark/components/grid) 组件。其基础功能与之完全一致。

::: danger 警告
由于技术限制，该组件使用时需要结合 `NGridItem` 一起使用才有该效果。
:::

## 拓展功能

> 相关拓展 `api` 可以 [点击查看](https://github.com/XiaoDaiGua-Ray/xiaodaigua-ray.github.io/blob/main/src/components/RayCollapseGrid/src/props.ts) 该文件的注释和说明。

::: tip
该组件通常配合表单、数据表格一起使用放于顶部设置过滤条件。可以折叠，减少噪点。
:::

```tsx
import RayCollapseGrid from '@/components/RayCollapseGrid/index'
```

## 折叠（折叠在响应式布局下依然生效）

> 默认自带功能

### value

- 类型：`boolean`
- 默认值： `true`
- 说明：`true` 收起，`false` 展开

## 设置默认显示数量

### cols

- 类型：`number`
- 默认值： `24`

```tsx
<RayCollapseGrid cols={1} />
```

## 设置折叠显示行数

### collapsedRows

- 类型：`number`
- 默认值： `1`

```tsx
<RayCollapseGrid collapsedRows={3} />
```

## 边框

### bordered

- 类型：`boolean`
- 默认值： `true`

## 展开/收起按钮文本

### collapseToggleText

- 类型：`CollapseToggleText`
- 默认值： `['展开', '收起']`

## 回调方法

::: info
true: 收起，false: 展开
:::

```tsx
<RayCollapseGrid
  onUpdateValue={(value: boolean) => console.log('我是回调方法')}
/>
```

## 示例

```tsx
<RayCollapseGrid
  collapsedRows={this.gridCollapsedRows}
  cols={this.gridItemCount}
  onUpdateValue={(value: boolean) =>
    window.$message.info(
      `我是 RayCollapseGrid 组件${value ? '收起' : '展开'}的回调函数`,
    )
  }
>
  {{
    action: () => (
      <>
        <NButton>搜索</NButton>
        <NButton>重置</NButton>
      </>
    ),
    default: () => (
      <>
        <NGridItem>
          <NSelect />
        </NGridItem>
        <NGridItem>
          <NInput />
        </NGridItem>
        <NGridItem>
          <NDatePicker type="datetimerange" clearable />
        </NGridItem>
        <NGridItem>
          <NInput />
        </NGridItem>
        <NGridItem>
          <NInput />
        </NGridItem>
      </>
    ),
  }}
</RayCollapseGrid>
```
