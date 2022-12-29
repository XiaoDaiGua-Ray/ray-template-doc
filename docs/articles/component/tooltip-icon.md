# 数据表格 Ray Table

## 基础功能

该表格完全继承于 [Naive UI Tooltip](https://www.naiveui.com/zh-CN/dark/components/tooltip) 组件。其基础功能与之完全一致。

## 拓展功能

::: tip
该组件可以让你利用 svg 图标实现带提示框的操作按钮。例如，顶部操作栏、提示图标等。
:::

```tsx
import RayTooltipIcon from '@/components/RayTooltipIcon/index'

defineComponent({
  render() {
    return (
      <RayTooltipIcon
        iconName={name}
        tooltipText={this.t(tooltip)}
        onClick={this.handleIconClick.bind(this)}
      />
    )
  },
})
```
