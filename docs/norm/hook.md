# vue hook 开发规范

`hook` 是在项目中使用最广泛的一个功能，它可以让我们在不同的组件中重用逻辑，减少代码的重复。我们在编写 `hook` 的时候，也应该注意相关的一些规范。

## 命名

统一采用 【`use`】+【`feature`】的方式命名。并且使用小驼峰形式，返回值的命名也应该尽量简洁只管。

- Bad ❌

```ts
const click = () => {}

const mouse = () => {}
```

- Good ✅

```ts
const useClick = () => {}

const useMouse = () => {}
```

## 内存释放

在 `hook` 中，我们需要注意变量的释放，避免内存泄漏。

可以通过生命周期钩子函数进行管理，比如 `onUnmounted`, `onBeforeUnmounted`。又或者是通过工具包中的 `effectDispose` 方法进行管理。

### onBeforeUnmounted

```ts
const useDemo = () => {
  const data = ref('demo')

  const stopWatch = watch(
    () => data,
    () => {
      // ...
    },
  )

  onBeforeUnmounted(() => {
    // 释放资源
    stopWatch()
  })

  return {
    data,
  }
}
```

### effectDispose

```ts
import { effectDispose } from '@/utils'

const useDemo = () => {
  const data = ref('demo')

  const stopWatch = watch(
    () => data,
    () => {
      // ...
    },
  )

  effectDispose(stopWatch)

  return {
    data,
  }
}
```

## 注释与示例

在 `hook` 中，我们需要添加注释，说明该 `hook` 的作用，以及如何使用。

:::tip
注释与示例应该按照 `jsDoc` 的规范进行书写。
:::

```ts
import { effectDispose } from '@/utils'

/**
 *
 * @description
 * 该 hook 用于...
 * stop 用于手动停止监听更新。
 *
 * @example
 * const { data, stop } = useDemo()
 */
const useDemo = () => {
  const data = ref('demo')

  const stopWatch = watch(
    () => data,
    () => {
      // ...
    },
  )

  // 自动停止监听更新
  effectDispose(stopWatch)

  return {
    data,
    stop: stopWatch,
  }
}
```
