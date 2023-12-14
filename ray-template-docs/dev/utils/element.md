# Element 相关工具方法

## addClass

给元素添加 class。允许按照 `空格` 分割添加多个 class。

```ts
import { addClass } from '@/utils'

addClass(document.body, 'class')
addClass(refDom, 'class')
addClass(dom, 'class other-class other-class-2')
```

## removeClass

给元素删除 class。允许按照 `空格` 分割删除多个 class。

```ts
import { removeClass } from '@/utils'

removeClass(document.body, 'class')
removeClass(refDom, 'class')
removeClass(refDom, 'class other-class other-class-2')
```

## hasClass

判断元素是否存在某个 class。允许按照 `空格` 分割判断多个 class。

```ts
import { hasClass } from '@/utils'

hasClass(document.body, 'class') // true
hasClass(refDom, 'class') // true
hasClass(refDom, 'class other-class other-class-2') // true
```

## addStyle

给元素添加 style。允许按照 `;` 分割添加多个 style。

```ts
import { addStyle } from '@/utils'

addStyle(document.body, 'color: red')
addStyle(refDom, 'color: red')
addStyle(dom, 'color: red; font-size: 16px')
addStyle(dom, { color: 'red', fontSize: '16px' })
```

## removeStyle

删除元素某个或者多个 style。

:::tip
但是要注意浏览器样式表的兼容性。例如 `z-index` 与 `zIndex`。
:::

```ts
import { removeStyle } from '@/utils'

removeStyle(document.body, 'color')
removeStyle(refDom, 'color')
removeStyle(dom, ['color', 'font-size'])
```

## colorToRgba

将颜色转换为 rgba 格式。

```ts
import { colorToRgba } from '@/utils'

colorToRgba('#fff') // rgba(255, 255, 255, 1)
colorToRgba('#ffffff') // rgba(255, 255, 255, 1)
colorToRgba('rgb(255, 255, 255)') // rgba(255, 255, 255, 1)
colorToRgba('#fff', 0.5) // rgba(255, 255, 255, 0.5)
```

## queryElements

查询元素。允许按照 `attr`、`class`、`id`、`tag` 进行查询。

```ts
import { queryElements } from '@/utils'

queryElements('.demo') // 获取所有 class 为 demo 的元素
queryElements('#demo') // 获取所有 id 为 demo 的元素
queryElements('attr:type=button') // 获取所有 attr 中 type 为 button 的元素
queryElements('attr:type') // 获取所有存在 attr 中 type 的元素
```

## completeSize

不全尺寸。

```ts
import { completeSize } from '@/utils'

completeSize(100) // 100px
completeSize('100') // 100px
completeSize('100%') // 100%
completeSize('100vh') // 100vh
completeSize('100vw') // 100vw
```
