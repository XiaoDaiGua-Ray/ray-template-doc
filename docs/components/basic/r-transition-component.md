# RTransitionComponent 过渡动画路由组件

让你的页面切换更有意思点。

:::tip
该过渡效果组件，会在页面切换时，自动添加过渡动画。这也就意味着，多个路由切换的时候，都会添加动画，所以需要合理使用该组件。
:::

## 基础使用

```css
.demo-transform-leave-active,
.demo-transform-enter-active {
  transition: all 0.48s cubic-bezier(0.4, 0, 0.2, 1);
}

.demo-transform-enter-from {
  opacity: 0;
  transform: scale(1.2);
}

.demo-transform-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
```

```tsx
import { RTransitionComponent } from '@/components'

const Demo = () => {
  return (
    <RTransitionComponent transitionPropName={'demo-transform'}>
      hi
    </RTransitionComponent>
  )
}
```

## props

| 名称               | 类型                          | 默认值     | 说明                         |
| ------------------ | ----------------------------- | ---------- | ---------------------------- |
| transitionPropName | `string`                      | `'fade'`   | 过渡动画的属性名             |
| transitionMode     | `BaseTransitionProps['mode']` | `'out-in'` | 过渡模式                     |
| transitionAppear   | `boolean`                     | `true`     | 是否在初始渲染时执行过渡动画 |
