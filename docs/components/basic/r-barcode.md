# RBarcode 条形码

条形码。

## 基础使用

:::details code

```tsx
import { RBarcode } from '@/components'

const Demo = () => {
  return <RBarcode text="123456789" />
}
```

:::

## 回调函数

:::details code

```tsx
import { RBarcode } from '@/components'

const Demo = () => {
  const _success = () => {}

  const _error = () => {}

  const _finally = () => {}

  return (
    <>
      <RBarcode text="渲染成功" onSuccess={_success} onFinally={_finally} />
      <RBarcode text="渲染失败" onError={_error} onFinally={_finally} />
    </>
  )
}
```

:::

## props

| 名称          | 类型                                                                                         | 默认值     | 说明                                                 |
| ------------- | -------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------- |
| width         | `string \| number`                                                                           | `auto`     | 条形码宽度                                           |
| height        | `string \| number`                                                                           | `auto`     | 条形码高度                                           |
| loading       | `boolean`                                                                                    | `false`    | 显示加载状态                                         |
| barcodeRender | `svg \| canvas`                                                                              | `canvas`   | 渲染模式                                             |
| text          | `string`                                                                                     | `undefine` | 条形码内容                                           |
| options       | `RBarcodeOptions`                                                                            | `{}`       | 渲染配置项                                           |
| format        | `RBarcodeFormat`                                                                             | `CODE128`  | 条形码输出格式，该配置项优先级最高                   |
| watchText     | `boolean`                                                                                    | `false`    | 主动监听 `text` 内容变化，当内容变化时重新渲染条形码 |
| onSuccess     | `(currentText: string \| undefine, format: RBarcodeFormat, option: RBarcodeOptions) => void` | `undefine` | 渲染成功回调函数                                     |
| onError       | `(error: Error) => void`                                                                     | `undefine` | 渲染失败回调函数                                     |
| onFinally     | `() => void`                                                                                 | `undefine` | 条形码渲染结束后执行的回调函数                       |
