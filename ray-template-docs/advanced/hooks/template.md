# 模板专属 hooks

:::warning
以下部分方法仅限于 `Layout` 中使用。如果需要在其他的页面使用，请确保已经完成了整个 `AppMenu` 的初始化。
:::

## useAppNavigation

### navigationTo

区别于 `vue-router` 的导航方式。使用 `useAppNavigation` 可以便捷的进行指定菜单索引、`fullPath` 地址、菜单具体项进行导航。

```ts
import { useAppNavigation } from '@/hooks/template'

const { navigationTo } = useAppNavigation()

navigationTo(1) // 导航到第二个菜单
navigationTo('fullPath') // 导航到指定的 fullPath 地址
navigationTo({ AppMenuOption }) // 导航到第二个菜单的第三个子菜单
```

## useAppRoot

### getRootRoute, getRootPath, getRootName

获取模 Root Route 信息。模板维护 `RootRoute` 以实现全局统一的重定向或者其他边界情况处理的需求。

```ts
import { useAppRoot } from '@/hooks/template'

const { getRootRoute, getRootPath, getRootName } = useAppRoot()

getRootRoute() // 获取 Root Route
getRootPath() // 获取 Root Path
getRootName() // 获取 Root Name
```

### setRootRoute

更新模板维护的 `RootRoute` 信息。

```ts
import { useAppRoot } from '@/hooks/template'

const { setRootRoute } = useAppRoot()

setRootRoute({ path: '/new-root-path' }) // 更新 Root Route
setRootRoute({ name: 'new-root-name' }) // 更新 Root Route
setRootRoute({ path: '/new-root-path', name: 'new-root-name' }) // 更新 Root Route
```

## useMaximize

### isLayoutContentMaximized

获取当前 `Layout` 的内容区域是否处于最大化状态。

```ts
import { useMaximize } from '@/hooks/template'

const { isLayoutContentMaximized } = useMaximize()

true // 当前 Layout 的内容区域处于最大化状态
false // 当前 Layout 的内容区域处于正常尺寸状态
```

### maximize

将当前 `Layout` 的内容区域最大化。

```ts
import { useMaximize } from '@/hooks/template'

const { maximize } = useMaximize()

maximize(true) // 将当前 Layout 的内容区域最大化
maximize(false) // 将当前 Layout 的内容区域恢复正常尺寸
maximize(true, MaximizeOptions) // 将当前 Layout 的内容区域最大化，并且可以传递额外的配置项
```

## useSiderBar

所有的关闭方法，都支持传递：标签页的 `key`、索引、具体标签项。

### getCurrentTagIndex

获取当前激活的标签页索引。

```ts
const { getCurrentTagIndex } = useSiderBar()

getCurrentTagIndex()
```

### close

关闭当前标签页。

```ts
const { close } = useSiderBar()

close(1) // 关闭索引位置为 `1` 的标签页
close('/echart') // 关闭 key 为 `/echart` 的标签页
close({ MenuTagOptions }) // 关闭具体标签页项
```

### closeAll

关闭所有标签页。然后导航至 root path 页面。

```ts
const { closeAll } = useSiderBar()

closeAll()
```

### closeRight

关闭指定索引位置的右侧所有标签页。

```ts
const { closeRight } = useSiderBar()

closeRight(1) // 关闭索引位置为 `1` 的右侧所有标签页
closeRight('/echart') // 关闭 key 为 `/echart` 的右侧所有标签页
closeRight({ MenuTagOptions }) // 关闭具体的右侧所有标签页
```

### closeLeft

关闭指定索引位置的左侧所有标签页。

```ts
const { closeLeft } = useSiderBar()

closeRight(1) // 关闭索引位置为 `1` 的左侧所有标签页
closeRight('/echart') // 关闭 key 为 `/echart` 的左侧所有标签页
closeRight({ MenuTagOptions }) // 关闭具体的左侧所有标签页
```

### closeOther

关闭除了当前索引标签的所有标签页.

```ts
const { closeOther } = useSiderBar()

closeRight(1) // 关闭索引位置为 `1` 以外的所有标签页
closeRight('/echart') // 关闭 key 为 `/echart` 以外的所有标签页
closeRight({ MenuTagOptions }) // 关闭具体以外的所有标签页
```

### checkCloseRight

校验指定标签右侧是否有可关闭的标签。

- true: 可关闭
- false: 不可关闭

```ts
const { checkCloseRight } = useSiderBar()

checkCloseRight(1) // 索引位置为 `1` 的右侧是否还有可以被关闭的标签
checkCloseRight('/echart') // key 为 `/echart` 的右侧是否还有可以被关闭的标签
checkCloseRight({ MenuTagOptions }) //具体标签项的右侧是否还有可以被关闭的标签
```

### checkCloseLeft

校验指定标签左侧是否有可关闭的标签。

- true: 可关闭
- false: 不可关闭

```ts
const { checkCloseLeft } = useSiderBar()

checkCloseLeft(1) // 索引位置为 `1` 的左侧是否还有可以被关闭的标签
checkCloseLeft('/echart') // key 为 `/echart` 的左侧是否还有可以被关闭的标签
checkCloseLeft({ MenuTagOptions }) //具体标签项的左侧是否还有可以被关闭的标签
```

## useSpinning

### reload

重新加载当前页面。并且触发加载动画。

```ts
import { useSpinning } from '@/hooks/template'

const { reload } = useSpinning()

reload(800) // 重新加载当前页面，延迟 800ms
```

### openSpin, closeSpin

打开或者关闭内容区域加载动画。不会刷新当前页面。

```ts
import { useSpinning } from '@/hooks/template'

const { openSpin, closeSpin } = useSpinning()

openSpin() // 打开内容区域加载动画
closeSpin() // 关闭内容区域加载动画
```

## useTheme

### getAppTheme

获取当前应用的主题。并且主题名称会自动获取当前语言环境下的名称。

```ts
import { useTheme } from '@/hooks/template'

const { getAppTheme } = useTheme()

getAppTheme() // 获取当前应用的主题: { theme: true | false, themeLabel: '主题名称' }
```

### changeDarkTheme

切换至暗黑主题。

```ts
import { useTheme } from '@/hooks/template'

const { changeDarkTheme } = useTheme()

changeDarkTheme() // 切换至暗黑主题
```

### changeLightTheme

切换至明亮主题。

```ts
import { useTheme } from '@/hooks/template'

const { changeLightTheme } = useTheme()

changeLightTheme() // 切换至明亮主题
```

### toggleTheme

切换至暗黑主题或者明亮主题。

```ts
import { useTheme } from '@/hooks/template'

const { toggleTheme } = useTheme()

toggleTheme() // 切换至暗黑主题或者明亮主题
```

## useWatermark

### setWatermarkContent

设置水印内容。

```ts
import { useWatermark } from '@/hooks/template'

const { setWatermarkContent } = useWatermark()

setWatermarkContent('水印内容') // 设置水印内容
```

### showWatermark

显示水印。

```ts
import { useWatermark } from '@/hooks/template'

const { showWatermark } = useWatermark()

showWatermark() // 显示水印
```

### hiddenWatermark

隐藏水印。

```ts
import { useWatermark } from '@/hooks/template'

const { hiddenWatermark } = useWatermark()

hiddenWatermark() // 隐藏水印
```

### toggleWatermark

切换水印显示状态。

```ts
import { useWatermark } from '@/hooks/template'

const { toggleWatermark } = useWatermark()

toggleWatermark() // 切换水印显示状态
```

## useBadge

```ts
export interface AppMenuExtraOptions {
  label?: string | number // 不会随着语言环境变化的内容
  icon?: VNode // 图标
  type?: TagProps['type'] // 样式风格，默认为 `primary`
  show?: boolean // 是否显示，默认为 `true`
  i18nLabel?: string // 会随着语言环境变化的内容
}
```

菜单项标记。

### hidden

隐藏菜单项标记。方法会自动忽略尾随 `/`，但是不会忽略中间与开头的 `/`。

```ts
import { useBadge } from '@/hooks/template'

const { hidden } = useBadge()

hidden('/dashboard') // 隐藏 key 为 `/dashboard` 的菜单项标记
hidden({ ...AppMenuOption }) // 隐藏具体的菜单项标记
```

### show

显示菜单项标记。方法会自动忽略尾随 `/`，但是不会忽略中间与开头的 `/`。

```ts
import { useBadge } from '@/hooks/template'

const { show } = useBadge()

show('/dashboard') // 显示 key 为 `/dashboard` 的菜单项标记
show({ ...AppMenuOption }) // 显示具体的菜单项标记
```

### update

更新菜单项标记。方法会自动忽略尾随 `/`，但是不会忽略中间与开头的 `/`。

```ts
import { useBadge } from '@/hooks/template'

const { update } = useBadge()

update('/dashboard', {
  ...AppMenuExtraOptions,
}) // 更新 key 为 `/dashboard` 的菜单项标记为 `10`
update(
  { ...AppMenuOption },
  {
    ...AppMenuExtraOptions,
  },
) // 更新具体的菜单项标记为 `10`
```
