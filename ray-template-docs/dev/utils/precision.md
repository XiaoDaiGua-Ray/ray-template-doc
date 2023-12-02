# 基础运算工具包

:::tip
模板提供解决精度问题的基础运算方法。并且支持高度的自定义。基于 [currency.js](https://currency.js.org/#subtract) 封装。默认保留 `8` 位小数并且四舍五入。
:::

## isCurrency

判断是否是 currency 对象。

```ts
import { isCurrency } from '@/utils/precision'
import currency from 'currency.js'

isCurrency(0.1) // false
isCurrency(currency(0.1)) // true
```

## format

格式化 currency 对象。

```ts
import { format } from '@/utils/precision'

format(0.1) // 0.1
```

## add

加法运算。支持多个参数。

```ts
import { add, format } from '@/utils/precision'

format(add(0.1, 0.2)) // 0.3
format(add(0.1, 0.2, 0.3)) // 0.6
```

## subtract

减法运算。支持多个参数。

```ts
import { subtract, format } from '@/utils/precision'

format(subtract(0.3, 0.2)) // 0.1
format(subtract(0.3, 0.2, 0.1)) // 0
```

## multiply

乘法运算。支持多个参数。

```ts
import { multiply, format } from '@/utils/precision'

format(multiply(0.1, 0.2)) // 0.02
format(multiply(0.1, 0.2, 0.3)) // 0.006
```

## divide

除法运算。支持多个参数。

```ts
import { divide, format } from '@/utils/precision'

format(divide(0.3, 0.2)) // 1.5
format(divide(0.3, 0.2, 0.1)) // 15
```

## distribute

分配运算。将一个值按照比例分配给多个值。

```ts
import { distribute } from '@/utils/precision'

format(distribute(0, 1)) // [0]
format(distribute(1, 1)) // [1]
format(distribute(1, 2)) // [0.5, 0.5]
format(distribute(12, 3)) // [4, 4, 4]
```
