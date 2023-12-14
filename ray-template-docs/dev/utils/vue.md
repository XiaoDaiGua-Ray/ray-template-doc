# vue3.x 相关工具方法

该包是专属 `vue3.x` 的方法，并且结合了模板的一些特性，可以更加方便的使用。

## call

可以允许在 `props` 声明的方法拥有 `ts` 类型提示。

```tsx
import { call } from '@/utils'

import type { PropType } from 'vue'
import type { MaybeArray } from '@/types/modules/utils'

export default defineComponent({
  props: {
    onClick: {
      type: [Function, Array] as PropType<MaybeArray<(e: MouseEvent) => void>>,
    },
  },
  setup(props) {
    const emitClick = (e: Event) => {
      const { onClick } = props

      if (onClick) {
        call(onClick, e)
      }
    }

    return () => <div onClick={emitClick}></div>
  },
})
```

## effectDispose

当 `effect` 卸载时，执行回调。可以基于这个方法封装一些清理方法。

```ts
import { effectDispose } from './effectDispose'

import type { WatchOptionsBase } from 'vue'
import type { AnyFC } from '@/types/modules/utils'

/**
 *
 * @param fc 副作用函数
 * @param watchOptions watchEffect 配置项
 *
 * 该方法使用 watchEffect 实现副作用函数的执行
 * 并且能够在 effect 作用域卸载时，自动停止监听
 */
export function watchEffectWithTarget<T extends AnyFC>(
  fc: T,
  watchOptions?: WatchOptionsBase,
) {
  const stop = watchEffect(fc, watchOptions)

  effectDispose(stop)
}
```

## renderNode

渲染节点。可以不用关心节点的类型，直接渲染。

```tsx
import { renderNode } from '@/utils'

const Icon = renderNode(<div></div>)
const Icon2 = renderNode(null, {
  defaultElement: <div></div>,
})
```

## unrefElement

获取 `ref dom` 或者 `dom`。

```ts
import { unrefElement } from '@/utils'

const refDom = ref(null)

const dom = unrefElement(refDom)
```

## watchEffectWithTarget

基于 `watchEffect` 实现的副作用函数，可以在副作用函数卸载时，自动停止监听。

```ts
import { watchEffectWithTarget } from '@/utils'
import { watchEffect, watch, ref } from 'vue'

const demo = ref(0)

const w1 = watch(
  () => demo,
  (newVal, oldVal) => {},
)
const w2 = watchEffect(() => {})

watchEffectWithTarget(w1)
watchEffectWithTarget(w2)
```
