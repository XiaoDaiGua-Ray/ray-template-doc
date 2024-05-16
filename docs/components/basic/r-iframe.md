# RIframe 内联框架元素

嵌入一点网页在当前的页面中。

## 基础使用

:::details code

```tsx
import { RIframe } from '@/components'

const Demo = () => {
  return <RIframe src="https://www.baidu.com" />
}
```

:::

## props

| 名称               | 类型                                        | 默认值      | 说明                    |
| ------------------ | ------------------------------------------- | ----------- | ----------------------- |
| src                | `string`                                    | `-`         | 网页地址，必填          |
| iframeWrapperClass | `string`                                    | `undefined` | iframe 外层容器的 class |
| frameborder        | `number`                                    | `0`         | iframe 边框             |
| width              | `string \| number`                          | `100%`      | iframe 宽度             |
| height             | `string \| number`                          | `100%`      | iframe 高度             |
| allow              | `string`                                    | `undefined` | iframe 特征策略         |
| name               | `string`                                    | `undefined` | iframe 名称             |
| title              | `string`                                    | `undefined` | iframe 标题             |
| onSuccess          | `(el: HTMLIFrameElement, e: Event) => void` | `undefined` | iframe 加载成功回调     |
| onError            | `(e: Event) => void`                        | `undefined` | iframe 加载失败回调     |
| customSpinProps    | `SpinProps`                                 | `{}`        | 自定义 NSpin props      |
| lazy               | `boolean`                                   | `false`     | 是否懒加载              |
| iframeClass        | `string`                                    | `undefined` | iframe 的 class         |
