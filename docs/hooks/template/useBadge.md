# useBadge

让你的菜单出现一些让人强迫症的小标记。

## 返回值

| 名称   | 类型                                                           | 描述     |
| ------ | -------------------------------------------------------------- | -------- |
| hidden | `(target: BadgeKey) => void`                                   | 隐藏标记 |
| show   | `(target: BadgeKey) => void`                                   | 显示标记 |
| update | `(target: BadgeKey, extraOption: AppMenuExtraOptions) => void` | 更新标记 |

## BadgeKey

:::details code

```ts
type BadgeKey = string | AppMenuOption
```

:::

## AppMenuExtraOptions

:::details code

```ts
interface AppMenuExtraOptions {
  /**
   *
   * @description
   * 标签标题。
   */
  label?: string | number
  /**
   *
   * @description
   * 标签图标。
   */
  icon?: VNode
  /**
   *
   * @description
   * 标签渲染类型。
   */
  type?: TagProps['type']
  /**
   *
   * @description
   * 是否显示。
   */
  show?: boolean
  /**
   *
   * @description
   * 标签标题，带有 i18n 国际化切换效果。
   */
  i18nLabel?: string
}
```

:::

## 基础使用

```ts
import { useAppNavigation } from '@/hooks'

const baseRoute1 = 'dashboard'
const baseRoute2 = 0
const baseRoute3 = {
  // AppMenuOption
  fullPath: 'dashboard',
}

const { show, hidden, update } = useBadge()

show(baseRoute1) // 显示 dashboard 标记
hidden(baseRoute2) // 隐藏 dashboard 标记
update(baseRoute3, {
  show: true,
  label: 'look!',
}) // 显示，并且更新标记文本
```
