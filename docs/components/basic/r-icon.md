# RIcon 图表

快捷使用 `svg` 作为图标。

## 使用流程

:::tip
如果需要让 `svg` 继承 `color` 颜色值，需要注意 `svg` 文件的 `fill` 属性是否为 `currentColor`。
:::

- 引入图标至 `src/icons` 文件夹下
- 确保文件名为 `demo.svg` 格式
- 使用 `RIcon` 组件引入图标

```tsx
import { RIcon } from '@/components'

const Demo = () => {
  return <RIcon icon="demo" />
}
```

## props

| 名称   | 类型               | 默认值         | 说明                               |
| ------ | ------------------ | -------------- | ---------------------------------- |
| color  | `string`           | `currentColor` | 图标颜色                           |
| prefix | `string`           | `icon`         | 图标前缀                           |
| name   | `string`           | `-`            | 图标名称，名称为图标的文件名，必填 |
| size   | `string \| number` | `14`           | 图标尺寸，同时设置宽高             |
| width  | `string \| number` | `0`            | 图标宽度                           |
| height | `string \| number` | `0`            | 图标高度                           |
| depth  | `number`           | `1`            | 图标颜色深度，也就是透明度         |
| cursor | `string`           | `default`      | 鼠标样式                           |
