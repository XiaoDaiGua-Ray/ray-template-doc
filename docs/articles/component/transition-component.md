# 数据表格 Ray Transition Component

## 介绍

该组件配合 RouterView 与 Transition 组件实现。

::: tip
如果需要替换或者设置其余过渡效果，仅需要更改 src/styles/animate.scss 文件即可。
:::

## 示例

```tsx
import RayTransitionComponent from '@/components/RayTransitionComponent/index.vue'

defineComponent({
  render() {
    return <RouterView /> // [!code --]
    return <RayTransitionComponent /> // [!code ++]
  },
})
```

::: warning 提示
该过渡组件效果并不能使其子路由切换路由携带过渡效果。
:::
