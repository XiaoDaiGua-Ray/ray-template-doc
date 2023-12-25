# TS Types

该包存放了全局的类型定义与一些常用的工具类型。按照名称一一对应每个模块包。这里就不做过多的赘述，下面详细介绍一下工具类型的使用。

## ConditionalKeys

从类型中挑选匹配的属性名

```ts
import type { ConditionalKeys } from '@/types'

interface Foo {
  a: string
  b: number
  c: boolean
}

type FooKeys = ConditionalKeys<Foo, string> // 'a'

type FooKeys2 = ConditionalKeys<Foo, string | number> // 'a' | 'b'
```

## ConditionalPick

从类型中挑选匹配的属性

```ts
import type { ConditionalPick } from '@/types'

interface Foo {
  a: string
  b: number
  c: boolean
}

type FooKeys = ConditionalPick<Foo, string> // { a: string }

type FooKeys2 = ConditionalPick<Foo, string | number> // { a: string, b: number }
```

## ConditionalExclude

从类型中排除匹配的类型

```ts
import type { ConditionalExclude } from '@/types'

interface Foo {
  a: string
  b: number
  c: boolean
}

type FooKeys = ConditionalExclude<Foo, string> // { b: number, c: boolean }

type FooKeys2 = ConditionalExclude<Foo, string | number> // { c: boolean }
```

## Recordable

任意类型的对象

```ts
import type { Recordable } from '@/types'

const foo: Recordable = {
  a: 1,
  b: '2',
  c: true,
  d: {
    e: 1,
  },
}

const bar: Recordable<number> = {
  a: 1,
  b: 2,
  c: 3,
}
```

## ValueOf

获取对象的值类型

```ts
import type { ValueOf } from '@/types'

interface Foo {
  a: string
  b: number
  c: boolean
}

type FooValue = ValueOf<Foo> // string | number | boolean
```

## Mutable

移除类型的只读属性

```ts
import type { Mutable } from '@/types'

interface Foo {
  readonly a: string
  readonly b: number
  readonly c: boolean
}

type FooValue = Mutable<Foo> // { a: string, b: number, c: boolean }
```

## DeepMutable

递归移除类型的只读

```ts
import type { DeepMutable } from '@/types'

interface Foo {
  readonly a: string
  readonly b: number
  readonly c: boolean
  readonly d: {
    readonly e: string
    readonly f: number
    readonly g: boolean
  }
}

type FooValue = DeepMutable<Foo> // { a: string, b: number, c: boolean, d: { e: string, f: number, g: boolean } }
```

## ReturnPromiseType

获取函数返回值的 Promise 类型

```ts
import type { ReturnPromiseType } from '@/types'

async function foo() {
  return 1
}

type FooValue = ReturnPromiseType<typeof foo> // number
```
