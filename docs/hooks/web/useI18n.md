# useI18n

允许你在 `setup` 环境外使用。

:::tip
结合 `i18n Ally` 插件，可以让你开发多语言项目更加方便。
:::

## 返回值

| 名称   | 类型                                   | 说明     |
| ------ | -------------------------------------- | -------- |
| t      | `(key: string, ...args: any[]) => any` | 翻译函数 |
| locale | `(lang: string) => void`               | 切换语言 |

其余的方法与 [vue-i18n useI18n](https://vue-i18n.intlify.dev/api/composition.html#usei18n) 一致。

## 基础使用

:::details code

```tsx
import { NFlex, NText, NButton } from 'naive-ui'

import { useI18n } from '@/hooks'

const changeDemo = () => {
  const { t, locale } = useI18n()

  const change = (key: string) => {
    key === 'en-US' ? locale('en-US') : locale('zh-CN')
  }

  change('en-US')
}
```

:::

## 在组件中使用

:::details code

```tsx
import { NFlex, NText, NButton } from 'naive-ui'

import { useI18n } from '@/hooks'

const changeDemo = () => {
  const { t, locale } = useI18n()

  const change = (key: string) => {
    key === 'en-US' ? locale('en-US') : locale('zh-CN')
  }

  return (
    <NFlex>
      <NText>{t('hello')}</NText>
      <NFlex>
        <NButton onClick={change.bind(this, 'en-US')}>{t('en-US')}</NButton>
        <NButton onClick={change.bind(this, 'zh-CN')}>{t('zh-CN')}</NButton>
      </NFlex>
    </NFlex>
  )
}
```

:::
