# 数据表格 Ray Chart

## 介绍

该组件基于 [echart](https://echarts.apache.org) 实现。

::: tip
考虑包体积问题，只预设了一些常用的图表。如果需要拓展，仅需要从 `echarts` 中导入对应组件，然后使用 `use` 方法注册即可。但是由于官方并没有提供 `use` 方法类型，所以只是在代码层面进行了一些错误处理。
:::

## 基础功能

```tsx
import RayChart from '@/components/RayChart/index'
```

- 随着主题自动切换

```tsx
defineComponent({
  render() {
    return <RayChart autoChangeTheme />
  },
})
```

- 动态显示贴花（无障碍）

```tsx
defineComponent({
  render() {
    return <RayChart showAria />
  },
})
```

- 图表自动跟随浏览器尺寸变化

```tsx
defineComponent({
  render() {
    return <RayChart autoResize />
  },
})
```

- 动态拓展

```tsx
import { TreemapChart } from 'echarts/charts'
import { TooltipComponent } from 'echarts/components'

defineComponent({
  render() {
    return <RayChart use={[TreemapChart, TooltipComponent]} />
  },
})
```

- 固定主题

```tsx
defineComponent({
  render() {
    return <RayChart theme="dark" />
  },
})
```

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
