# useTheme

一亮，一暗，就像白天和黑夜。

## 返回值

| 名称        | 类型                 | 说明             |
| ----------- | -------------------- | ---------------- |
| darkTheme   | `() => void`         | 切换主题至 dark  |
| lightTheme  | `() => void`         | 切换主题至 light |
| toggleTheme | `() => void`         | 切换主题状态     |
| toggleTheme | `() => AppThemeInfo` | 切换主题状态     |

## AppThemeInfo

:::details code

```ts
interface AppThemeInfo {
  /**
   *
   * @description
   * 当前主题状态，true 为暗色主题，false 为明色主题
   */
  theme: boolean
  /**
   *
   * @description
   * 当前主题描述，默认描述。
   */
  themeLabel: ThemeLabel
  /**
   *
   * @description
   * 当前主题描述，国际化描述，会根据当前语言环境自动切换。
   */
  themeI18nLabel: string
}
```

:::

## 基础使用

```ts
import { useTheme } from '@/hooks'

const { darkTheme, lightTheme, toggleTheme } = useTheme()

darkTheme() // 切换主题至 dark
lightTheme() // 切换主题至 light
toggleTheme() // 切换主题状态
```
