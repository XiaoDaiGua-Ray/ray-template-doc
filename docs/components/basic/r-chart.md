# RChart 可视化图表

`RChart` 基于 [ECharts](https://echarts.apache.org/zh/index.html) 封装，提供了一系列的可视化图表组件。让你便捷的使用 `ECharts` 绘制图表。

## 基础使用

:::details code

```tsx
import { RChart } from '@/components'

const Demo = () => {
  const options = {
    legend: {},
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '日期',
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
        },
      },
      {
        name: '数量',
        data: [12, 220, 250, 180, 20, 10, 190],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
        },
      },
    ],
  }

  return <RChart options={options} />
}
```

:::

## 回调函数

:::details code

```tsx
import { RChart } from '@/components'

const Demo = () => {
  const _success = () => {}

  const _error = () => {}

  const _finally = () => {}

  return (
    <>
      <RChart onSuccess={_success} onFinally={_finally} />
      <RChart onError={_error} onFinally={_finally} />
    </>
  )
}
```

:::

## useChart

`useChart` 是一个自定义 hook，用于获取图表实例，可以通过该实例进行一些操作。

:::details code

```tsx
import { RChart } from '@/components'

import { useChart } from '@/components'

const Demo = () => {
  const [register, { getChartInstance, isDispose, dispose, render }] =
    useChart()

  const options = {
    legend: {},
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '日期',
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
        },
      },
      {
        name: '数量',
        data: [12, 220, 250, 180, 20, 10, 190],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
        },
      },
    ],
  }
}

return <RChart options={options} onRegister={register} />
```

:::

## props

| 名称                       | 类型                                                            | 默认值               | 说明                                                                                                                    |
| -------------------------- | --------------------------------------------------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| intersectionObserver       | `boolean`                                                       | `true`               | 开启 `IntersectionObserver` 监听，用于监听图表是否在可视区域内再进行渲染，该方法需要浏览器支持 IntersectionObserver API |
| intersectionObserverTarget | `MaybeComputedElementRef<MaybeElement>`                         | `undefined`          | 指定 IntersectionObserver 监听的目标元素。                                                                              |
| intersectionOptions        | `UseIntersectionObserverOptions`                                | `{ threshold: 0.1 }` | IntersectionObserver 配置项                                                                                             |
| bordered                   | `boolean`                                                       | `true`               | 是否显示边框                                                                                                            |
| downloadOptions            | `RChartDownloadOptions`                                         | `{}`                 | 下载配置项，仅在 preset 为 card 时生效                                                                                  |
| onDropdownSelect           | `(key: string \| number, option: DropdownOption) => void`       | `undefine`           | 下拉菜单选择回调函数，仅在 preset 为 card 时生效                                                                        |
| dropdownOptions            | `DropdownProps['options']`                                      | `[]`                 | 下拉菜单选项，仅在 preset 为 card 时生效                                                                                |
| preset                     | `RChartPresetType`                                              | `undefine`           | 是预设样式                                                                                                              |
| contentStyle               | `CardProps['contentStyle']`                                     | `undefined`          | 内容区域样式，仅在 preset 为 card 时生效                                                                                |
| title                      | `string \| () => VNode`                                         | `undefined`          | 标题，仅在 preset 为 card 时生效                                                                                        |
| width                      | `string \| number`                                              | `100%`               | 图表宽度，如果未捕获到实际宽度，则会默认填充宽度为 200px                                                                |
| height                     | `string \| number`                                              | `100%`               | 图表宽度，如果未捕获到实际高度，则会默认填充高度为 200px                                                                |
| autoResize                 | `boolean`                                                       | `true`               | 当容器尺寸变化时，自动更新 chart 图表                                                                                   |
| autoResizeObserverTarget   | `MaybeComputedElementRef<MaybeElement>`                         | `undefined`          | 指定 ResizeObserver 监听的目标元素                                                                                      |
| showAria                   | `boolean`                                                       | `false`              | 无障碍模式，启用贴画                                                                                                    |
| options                    | `echarts.EChartsCoreOption`                                     | `{}`                 | chart 图表配置项                                                                                                        |
| onSuccess                  | `(chartInst: Echarts) => void`                                  | `undefine`           | 图表渲染成功回调函数                                                                                                    |
| onError                    | `(error: Error) => void`                                        | `undefine`           | 图表渲染失败回调函数                                                                                                    |
| onFinally                  | `() => void`                                                    | `undefine`           | 图表渲染结束后执行的回调函数                                                                                            |
| theme                      | `ChartTheme`                                                    | `undefined`          | 手动指定 chart 图表主题，如果指定了未注册的主题，则会使用默认主题                                                       |
| autoChangeTheme            | `boolean`                                                       | `true`               | 自动切换主题，当主题变化时，自动重新渲染图表                                                                            |
| use                        | EChartsExtensionInstallRegisters[]                              | `[]`                 | 自定义注册 ECharts 扩展插件，用于注册 ECharts 扩展插件                                                                  |
| watchOptions               | `boolean`                                                       | `true`               | 主动监听 `options` 内容变化，当内容变化时重新渲染图表                                                                   |
| loading                    | `boolean`                                                       | `false`              | 显示加载状态                                                                                                            |
| loadingOptions             | `LoadingOptions`                                                | `{}`                 | 加载配置项                                                                                                              |
| watchOptionsThrottleWait   | `number`                                                        | `500`                | 监听 `options` 内容变化的节流时间间隔，单位为毫秒                                                                       |
| nextTick                   | `boolean`                                                       | `true`               | 将渲染放置下一个队列中                                                                                                  |
| setChartOptions            | `SetOptionOpts`                                                 | `{}`                 | 设置图表配置项，用于动态更新图表配置项                                                                                  |
| onRegister                 | `(chartInst: ECharts, render: VoidFC, dispose: VoidFC) => void` | `undefined`          | 注册图表实例回调函数，如果需要使用 useChart hook 方法，就必须手动注册该方法                                             |
