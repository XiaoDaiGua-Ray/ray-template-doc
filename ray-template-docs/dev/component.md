# 组件

## 按需引入

> 开箱即用的按需引入功能，无需做任何的配置。但是，当你在导入某个 `ui` 组件的时候，你应该是按照解构的方法进行导入，而不是 `import UIComponents from ui`。因为这样做，会导致按需引入不生效。其实不仅仅是 `ui` 组件，在你引入某个大型的库时，应该也是解构导入。

## 已封装组件

除了 `RouterView` 组件，所有已封装组件都是基于 `naive ui`。组件都是以 `RayXXX` 格式命名，并且存放于 `src/components` 下。具体不赘述，可以在线预览查看组件效果。

## RayChart

基于 `echarts5.x` 封装。组件会自动管理 `echarts` 的注册、注销，让你仅需要关注 `options` 的管理。并且支持使用 `use` 进行自行拓展 `echarts` 提供的组件进行注册。

## RayIcon

让你能够在项目中使用 `svg icon`。但是需要在使用前，在 `src/icons` 中提前引入 `svg`。

## RayTable

基于 `naive ui table` 组件封装，拓展了一些方法。

## RayIframe

让你便捷使用、管理 `iframe`。

## RayCollapseGrid

基于 `naive ui grid` 组件封装。能够进行折叠一些内容。但是该组件有一定的局限性，那就是仅支持结合 `naive grid item` 组件使用才能够实现布局效果。

## RayTransitionComponent

带有过渡动画的 `RouterView`。

## 组件开发

> 项目提供了 `tsx` `vue template` 两种开发方式。按照自己喜好开发即可。

- ### tsx component

```tsx
import { NButton } from 'naive-ui'

const DemoComponent = defineComponent({
  name: 'DemoComponent',
  setup() {
    const count = ref(0)

    const handleCount = () => count.value++

    return {
      count,
      handleCount,
    }
  },
  render() {
    return <NButton onClick={this.handleCount.bind(this)}>{this.count}</NButton>
  },
})

export default DemoComponent
```

- ### template component

> 这个大家应该很熟悉，就不做过多的赘述。

## 组件注册

> 如果有需要全局注册的组件，可以通过 `use` 方法注册。但是并不推荐全局注册组件，不论是 `ui component` 或者是 `custom component`。应该是自己手动在页面显式的导入并且使用。
