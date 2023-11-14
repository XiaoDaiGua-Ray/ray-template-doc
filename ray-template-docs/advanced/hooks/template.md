# 模板专属 hooks

:::warning
以下所有方法仅限于 `Layout` 中使用。如果需要在其他的页面使用，请确保已经完成了整个 `AppMenu` 的初始化。
:::

## useAppMenu

### navigationTo

导航方法，独立于 `router` 的跳转方式。

```ts
const { navigationTo } = useAppMenu()

/**
 *
 * 传递菜单索引
 * 会直接导航当前菜单索引位置为 0 的地方
 *
 * 如果导航至的菜单项并非为 root 根菜单，则会递归查找第一级子菜单并且跳转
 */
navigationTo(0)

/**
 *
 * 传递菜单项
 * 会直接导航至该项
 */
navigationTo({ AppMenuOption })
```

## useMainPage

### reload

刷新当前路由，并且延迟 `1s`。

```ts
const { reload } = useMainPage()

reload(1000)
```

### maximize

最大化 `LayoutContent` 区域。

```ts
const { maximize } = useMainPage()

maximize(true) // 最大化
maximize(false) // 取消最大化
```

## useMenuTag

所有的关闭方法，都支持传递：标签页的 `key`、索引、具体标签项。

### getCurrentTagIndex

获取当前激活的标签页索引。

```ts
const { getCurrentTagIndex } = useMenuTag()

getCurrentTagIndex()
```

### close

关闭当前标签页。

```ts
const { close } = useMenuTag()

close(1) // 关闭索引位置为 `1` 的标签页
close('/echart') // 关闭 key 为 `/echart` 的标签页
close({ MenuTagOptions }) // 关闭具体标签页项
```

### closeAll

关闭所有标签页。然后导航至 root path 页面。

```ts
const { closeAll } = useMenuTag()

closeAll()
```

### closeRight

关闭指定索引位置的右侧所有标签页。

```ts
const { closeRight } = useMenuTag()

closeRight(1) // 关闭索引位置为 `1` 的右侧所有标签页
closeRight('/echart') // 关闭 key 为 `/echart` 的右侧所有标签页
closeRight({ MenuTagOptions }) // 关闭具体的右侧所有标签页
```

### closeLeft

关闭指定索引位置的左侧所有标签页。

```ts
const { closeLeft } = useMenuTag()

closeRight(1) // 关闭索引位置为 `1` 的左侧所有标签页
closeRight('/echart') // 关闭 key 为 `/echart` 的左侧所有标签页
closeRight({ MenuTagOptions }) // 关闭具体的左侧所有标签页
```

### closeOther

关闭除了当前索引标签的所有标签页.

```ts
const { closeOther } = useMenuTag()

closeRight(1) // 关闭索引位置为 `1` 以外的所有标签页
closeRight('/echart') // 关闭 key 为 `/echart` 以外的所有标签页
closeRight({ MenuTagOptions }) // 关闭具体以外的所有标签页
```

### checkCloseRight

校验指定标签右侧是否有可关闭的标签。

- true: 可关闭
- false: 不可关闭

```ts
const { checkCloseRight } = useMenuTag()

checkCloseRight(1) // 索引位置为 `1` 的右侧是否还有可以被关闭的标签
checkCloseRight('/echart') // key 为 `/echart` 的右侧是否还有可以被关闭的标签
checkCloseRight({ MenuTagOptions }) //具体标签项的右侧是否还有可以被关闭的标签
```

### checkCloseLeft

校验指定标签左侧是否有可关闭的标签。

- true: 可关闭
- false: 不可关闭

```ts
const { checkCloseLeft } = useMenuTag()

checkCloseLeft(1) // 索引位置为 `1` 的左侧是否还有可以被关闭的标签
checkCloseLeft('/echart') // key 为 `/echart` 的左侧是否还有可以被关闭的标签
checkCloseLeft({ MenuTagOptions }) //具体标签项的左侧是否还有可以被关闭的标签
```
