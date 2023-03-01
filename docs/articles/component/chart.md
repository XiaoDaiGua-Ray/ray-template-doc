# 可视化图表 Ray Chart

## 介绍

该组件基于 [echart](https://echarts.apache.org) 实现。能够跟随主题自动切换（默认不启用该功能）；单独设置主题（不受当前页面主题影响）；便捷配置无障碍访问等。如果该组件没有获取到父元素的宽高，该组件则会自动生成 `200 * 200` 的可视化图表（元素宽高，就会自动以 `200px` 补充，避免警告带来的强迫症<手动滑稽>）。

::: tip
考虑包体积问题，只预设了一些常用的图表。如果需要拓展，仅需要从 `echarts` 中导入对应组件，然后使用 `use` 方法注册即可。但是由于官方并没有提供 `use` 方法类型，所以只是在代码层面进行了一些错误处理。
:::

> 相关拓展 `api` 可以 [点击查看](https://github.com/XiaoDaiGua-Ray/xiaodaigua-ray.github.io/blob/main/src/components/RayChart/index.tsx) 该文件的注释和说明。

```tsx
import RayChart from '@/components/RayChart/index'
```

## 随着主题自动切换

### autoChangeTheme

- 类型：`boolean`
- 默认值： `false`

```tsx
defineComponent({
  render() {
    return <RayChart autoChangeTheme />
  },
})
```

::: warning 提示
该功能开启后（默认不启用），会自动跟随当前主题色切换，但是会导致当前内容区域图表重新渲染，如果一次性重新渲染图表数量太多可能会出现性能问题。
:::

## 动态显示贴花（无障碍）

### showAria

- 类型：`boolean`
- 默认值： `false`

```tsx
defineComponent({
  render() {
    return <RayChart showAria />
  },
})
```

## 图表自动跟随浏览器尺寸变化

### autoResize

- 类型：`boolean`
- 默认值： `true`

```tsx
defineComponent({
  render() {
    return <RayChart autoResize />
  },
})
```

## 动态拓展

### use

- 类型：`(EChartsExtensionInstaller | EChartsExtension)[]`
- 默认值： `[]`

```tsx
import { TreemapChart } from 'echarts/charts'
import { TooltipComponent } from 'echarts/components'

defineComponent({
  render() {
    return <RayChart use={[TreemapChart, TooltipComponent]} />
  },
})
```

## 固定主题

### theme

- 类型：`string`
- 默认值： `''`

```tsx
defineComponent({
  render() {
    return <RayChart theme="dark" />
  },
})
```

## 渲染回调

### success

- 类型：`Function`
- 默认值： `undefined`
- 返回值：`echarts.ECharts`

### error

- 类型：`Function`
- 默认值： `undefined`
- 返回值：`undefined`

```tsx
<RayChart
  options={this.basePieOptions}
  success={() => console.log('渲染成功回调方法')}
  error={() => console.log('渲染失败回调方法')}
/>
```

## 配置图表

### options

- 类型：`object`
- 默认值： `{}`

<!-- ## 渲染器

### canvasRender

- 类型：`boolean`
- 默认值： `true`
- 说明：`true` 为 `canvas` 渲染器，`false` 为 `svg` 渲染器 -->

## 图表尺寸

### width

- 类型：`string`
- 默认值： `100%`

### height

- 类型：`string`
- 默认值： `100%`

### watchOptions

- 类型：`boolean`
- 默认值： `true`

## 获取当前图表实例

```tsx
<RayChart ref="baseChartRef" options={this.baseOptions} />
```

::: tip
可以访问 [echartsInstance](https://echarts.apache.org/zh/api.html#echartsInstance) 所有方法。例如：[showLoading](https://echarts.apache.org/zh/api.html#echartsInstance.showLoading)，[clear](https://echarts.apache.org/zh/api.html#echartsInstance.clear) 等。
:::

## 示例

```tsx
import RayChart from '@/components/RayChart/index'

const baseOptions = {
  legend: {},
  tooltip: {},
  xAxis: {
    type: 'category',
    data: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: '日期',
      data: [ 120, 200, 150, 80, 70, 110, 130 ],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
}

<RayChart options={this.baseOptions} />
```
