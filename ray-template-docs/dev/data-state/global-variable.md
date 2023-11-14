# 全局响应式变量

:::tip
有时候，你只是想简单的使用全局响应式变量，并且希望脱离 `pinia`，那么你可以考虑一下这个。
:::

## 初始化

> 目前仅仅是手动去对应的 `state` 写入变量，其实这并不是很合理。后续该写法将会弃用。

## 设置变量

```ts
import { setVariable } from '@/global-variable/index'

setVariable('key', 'value', 'callback')
```

## 获取变量

该方法获取变量，可能会丢失响应式。

```ts
import { getVariable } from '@/global-variable/index'

const variable = getVariable('key', 'default value')
```

## 获取响应式变量

该方法可以保证获取到的变量始终是响应式的。

```ts
import { getVariableToRefs } from '@/global-variable/index'

const variable = getVariableToRefs('key')
```
