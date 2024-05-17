# useSiderBar

新增一个，删除一个，更新一个。

## 返回值

| 名称               | 类型                             | 说明                             |
| ------------------ | -------------------------------- | -------------------------------- |
| close              | `(target: CloseMenuTag) => void` | 关闭指定标签项                   |
| closeAll           | `() => void`                     | 关闭所有标签项                   |
| closeLeft          | `(target: CloseMenuTag) => void` | 关闭左边所有标签项               |
| closeRight         | `(target: CloseMenuTag) => void` | 关闭右边所有标签项               |
| closeRight         | `(target: CloseMenuTag) => void` | 关闭除了当前指定的所有标签项     |
| getCurrentTagIndex | `() => number`                   | 获取当前激活标签项的索引位置     |
| checkCloseLeft     | `(target: CloseMenuTag) => void` | 判断左侧是否还有能被关闭的标签项 |
| checkCloseRight    | `(target: CloseMenuTag) => void` | 判断右侧是否还有能被关闭的标签项 |

## CloseMenuTag

:::details code

```ts
type CloseMenuTag = Key | MenuTagOptions
```

:::

## 基础使用

```ts
import { useSiderBar } from '@/hooks'

const {
  close,
  closeAll,
  closeRight,
  closeLeft,
  closeOther,
  getCurrentTagIndex,
  checkCloseRight,
  checkCloseLeft,
} = useSiderBar()
```

### close

```ts
close('key') // 关闭指定标签项
```

### closeAll

```ts
closeAll() // 关闭所有标签项
```

### checkCloseLeft, closeLeft

```ts
checkCloseLeft('key') // 判断左侧是否还有能被关闭的标签项
closeLeft('key') // 关闭左边所有标签项
```

### checkCloseRight, closeRight

```ts
checkCloseRight('key') // 判断右侧是否还有能被关闭的标签项
closeRight('key') // 关闭右边所有标签项
```
