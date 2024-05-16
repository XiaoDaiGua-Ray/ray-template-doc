# RForm 表单

尽可能让你写表单的代码优雅一点。

根据 [NForm](https://www.naiveui.com/zh-CN/dark/components/form) 封装。

## useForm

:::details code

```tsx
import { RForm } from '@/components'
import { NFormItemGi, NInput, NGrid } from 'naive-ui'

import { useForm } from '@/components'

const Demo = () => {
  const [
    register,
    { getFormInstance, validate, restoreValidation, formModel, formRules },
  ] = useForm()
  const conditionRef = ref({
    username: null,
  })

  return (
    <RForm onRegister={register} model={conditionRef}>
      <NGrid xGap={12} yGap={12}>
        <NFormItemGi label="用户名" path="username">
          <NInput />
        </NFormItemGi>
      </NGrid>
    </RForm>
  )
}
```

:::

## props

| 名称       | 类型                           | 默认值      | 说明                                                          |
| ---------- | ------------------------------ | ----------- | ------------------------------------------------------------- |
| onRegister | `(form: FormInstance) => void` | `undefined` | 注册表单实例，如果需要使用 useForm hook，就必须手动注册该方法 |

其余的 props 与 [NForm Props](https://www.naiveui.com/zh-CN/dark/components/form#Form-Props) 完全一致。
