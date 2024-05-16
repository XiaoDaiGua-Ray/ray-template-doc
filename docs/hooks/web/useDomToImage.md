# useDomToImage

元素转为图片。

## 返回值

| 名称   | 类型                                                                           | 说明     |
| ------ | ------------------------------------------------------------------------------ | -------- |
| create | `(imageType?: UseDomToImageOptions['imageType']) => Promise<DomToImageResult>` | 创建方法 |

## UseDomToImageOptions

:::details code

```ts
interface UseDomToImageOptions<T extends TargetType = Element>
  extends ReDomToImageOptions {
  /**
   *
   *
   * 指定图片类型，允许传递 imageType 参数，用于指定图片类型
   *
   * @default jpeg
   */
  imageType?: ImageType
  /**
   *
   *
   * 在 dom 转换为图片之前执行
   *
   * @param element current dom
   *
   * @default undefined
   */
  beforeCreate?: (element: T | null | undefined) => void
  /**
   *
   * @param element current dom
   * @param result dom to image result
   *
   * 在 dom 转换为图片之后执行
   *
   * @default undefined
   */
  created?: (result: DomToImageResult, element: T) => void
  /**
   *
   * @param error dom to image error
   *
   * 在 dom 转换为图片失败时执行
   *
   * @default undefined
   */
  createdError?: (error?: Error) => void
  /**
   *
   * @param element current dom
   *
   * 无论 dom 转换为图片成功或失败，都会执行
   *
   * @default undefined
   */
  finally?: () => void
}
```

:::

## 基础使用

### create 创建图片

```tsx
import { NButton } from 'naive-ui'

import { ref } from 'vue'
import { useDomToImage } from '@/hooks'

const Demo = defineComponent({
  setup() {
    const elementRef = ref<HTMLElement>()
    const { create } = useDomToImage(elementRef, {
      // UseDomToImageOptions
    })

    return {
      create,
      elementRef,
    }
  },
  render() {
    const { create } = this

    return (
      <div ref="elementRef">
        <NButton onClick={() => create()}>create</NButton>
      </div>
    )
  },
})
```
