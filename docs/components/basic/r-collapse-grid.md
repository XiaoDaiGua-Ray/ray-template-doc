# RCollapseGrid 折叠面板

把一堆过滤条件组件收起来，让界面看着舒服一点。

:::tip
业务开发时，建议使用 [BCollapse](/docs/components/business/b-collapse.html) 组件。
:::

## 基础使用

:::details code

```tsx
import { NCollapseGrid, RForm } from '@/components'
import { NInput, NFormItemGi, NButton ，NFlex} from 'naive-ui'

const Demo = () => {
  return (
    <RForm labelPlacement="left" showFeedback={false}>
      <NCollapseGrid cols={3} collapsedRows={1}>
        {{
          default: () => (
            <>
              <NFormItemGi>
                <NInput />
              </NFormItemGi>
            </>
          ),
          action: () => (
            <NFlex>
              <NButton>查询</NButton>
              <NButton>添加</NButton>
            </NFlex>
          ),
        }}
      </NCollapseGrid>
    </RForm>
  )
}
```

:::

## props

| 名称               | 类型                      | 默认值             | 说明                     |
| ------------------ | ------------------------- | ------------------ | ------------------------ |
| open               | `boolean`                 | `false`            | 是否展开折叠             |
| collapseToggleText | `CollapseToggleText`      | `['展开', '收起']` | 自定义展开与收起按钮文案 |
| bordered           | `boolean`                 | `true`             | 显示边框                 |
| onUpdateValue      | `(bool: boolean) => void` | `undefined`        | open 状态更新的回调函数  |

其余的配置项，与 [NGrid Props](https://www.naiveui.com/zh-CN/dark/components/grid#Grid-Props) 完全一致。

## slots

| 名称    | 参数 | 说明                   |
| ------- | ---- | ---------------------- |
| default | `()` | 默认内容               |
| action  | `()` | 功能插槽，放置操作按钮 |
