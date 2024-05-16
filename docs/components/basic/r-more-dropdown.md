# RMoreDropdown 带图标的下拉菜单

一个有图标的下拉菜单，当你想触发一些操作的时候，可能有用。

## 基础使用

:::details code

```tsx
import { RMoreDropdown } from '@/components'

const Demo = () => {
  const options = [
    {
      label: '滨海湾金沙，新加坡',
      key: 'marina bay sands',
      disabled: true,
    },
    {
      label: '布朗酒店，伦敦',
      key: "brown's hotel, london",
    },
    {
      label: '亚特兰蒂斯巴哈马，拿骚',
      key: 'atlantis nahamas, nassau',
    },
    {
      label: '比佛利山庄酒店，洛杉矶',
      key: 'the beverly hills hotel, los angeles',
    },
  ]

  return <RMoreDropdown options={options} icon />
}
```

:::

## props

| 名称     | 类型     | 默认值    | 说明     |
| -------- | -------- | --------- | -------- |
| icon     | `string` | `more`    | 图标名称 |
| iconSize | `number` | `14`      | 图标大小 |
| cursor   | `string` | `pointer` | 鼠标样式 |

其余属性继承自 [NDropdown Props](https://www.naiveui.com/zh-CN/dark/components/dropdown#API)。
