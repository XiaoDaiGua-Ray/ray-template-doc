# 特殊约定

## props 与 emit

在开发过程中，经常会出现许多时候需要自定义事件的情况，但是在 `vue3.3` 版本以前对于 `emit` 自定义事件的类型提示支持很差（但是事实上，在 `vue3.3` 版本后，也只是对于 `setup` 开发模式支持而已），所以在项目中约定使用 `props` 代替 `emit` 自定义事件的使用。

使用 `props` 作为自定义事件这个操作并不是特立独行，在很多出名的 `ui` 库都采用了该方式，例如 `naive ui` 就是采用的方法。下面就演示如何使用该技巧：

```tsx
import { call } from '@/utils/vue/index'
import { completeSize } from '@/utils/element'

import type { PropType } from 'vue'
import type { MaybeArray } from '@/types/modules/utils'

const MyComponent = defineComponent({
  name: 'MyComponent',
  props: {
    onClick: {
      type: [Function, Array] as PropType<MaybeArray<(e: MouseEvent) => void>>,
      default: null,
    },
    onUpdateValue: {
      type: [Function, Array] as PropType<MaybeArray<(bool: boolean) => void>>,
      default: null,
    },
    'onUpdate:value': {
      type: [Function, Array] as PropType<MaybeArray<(bool: boolean) => void>>,
      default: null,
    },
  },
  setup(props) {
    const demoValue = ref(false)

    const handleClick = (e: MouseEvent) => {
      const { onClick, onUpdateValue, 'onUpdate:value': _onUpdateValue } = props

      demoValue.value = !demoValue.value

      if (onClick) {
        call(onClick, e)
      }

      if (onUpdateValue) {
        call(onUpdateValue, demoValue.value)
      }

      if (_onUpdateValue) {
        call(_onUpdateValue, demoValue.value)
      }
    }

    return {
      handleClick,
    }
  },
  render() {
    return <button onClick={this.handleClick.bind(this)}>按钮</button>
  },
})

export default MyComponent
```

这样写，你不仅仅可以在模板中使用 `@click` `@update:value` 形式调用方法，也可以在 jsx 中使用 `onClick` `onUpdateValue` 形式调用。并且，也可以得到良好的类型提示。

## 解耦与聚合

不要为了解耦一枚的拆包，会使得心智负担成倍的增长，这显然不是一个合理的行为。不论是代码也好，还是文件分包，都应该遵从 `高聚合低耦合` 原则。

## 其他

其他的吧，也没啥好啰嗦的了，按照自己公司内部自行约定即可。
