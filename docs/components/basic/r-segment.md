# RSegment 分段器

一段一段的，看起来好像薯条。

:::info 已知问题
当你设置 `width` 为 `fitContent` 的时候，分段器的宽度会根据内容自动调整。但是，当配置项中含有 `disabled` 项，会导致过渡效果有丢失的情况。
:::

## props

| 名称    | 类型                | 默认值       | 说明                 |
| ------- | ------------------- | ------------ | -------------------- |
| options | `RSegmentOptions[]` | `[]`         | 分段器内容的 options |
| width   | `RSegmentWidth`     | `fitContent` | 分段器的宽度         |

其余属性继承自 [NTabs](https://www.naiveui.com/zh-CN/dark/components/tabs#API) 的所有属性。

## slots

| 名称    | 参数 | 说明           |
| ------- | ---- | -------------- |
| default | `()` | 分段器默认内容 |
| prefix  | `()` | 分段器前缀插槽 |
| suffix  | `()` | 分段器后缀插槽 |

## RSegmentOptions

```ts
interface RSegmentOptions {
  /**
   *
   * @description
   * 分段器内容。
   */
  label: string | VNode | (() => VNodeChild)
  /**
   *
   * @description
   * 分段器的 key 值。
   */
  key: string | number
  /**
   *
   * @description
   * 渲染模式。
   *
   * @see https://www.naiveui.com/zh-CN/dark/components/tabs#TabPane-Props
   */
  displayDirective?: TabPaneProps['displayDirective']
  /**
   *
   * @description
   * 是否禁用。
   */
  disabled?: boolean
  /**
   *
   * @description
   * 自定义渲染内容。
   */
  slots?: {
    default?: () => VNode | string | number
  }
  /**
   *
   * @description
   * popover 弹出提示。
   */
  popover?: string | RSegmentPopover
  /**
   *
   * @description
   * 自定义图标。
   */
  icon?: VNode
}
```
