# 基础方法包

## getAppEnvironment

获取当前环境。

```ts
import { getAppEnvironment } from '@/utils'

const { BASE_URL } = getAppEnvironment() // 获取 BASE_URL
const { MODE } = getAppEnvironment() // 获取 MODE，也就是当前所有的环境变量
const { your config } = getAppEnvironment() // 获取你自定义的配置项
```

## arrayBufferToBase64Image

将 ArrayBuffer 转换为 base64 图片。

```ts
import { arrayBufferToBase64Image } from '@/utils'

const base64 = arrayBufferToBase64Image(arrayBuffer)
```

## downloadBase64File

下载 base64 文件。

```ts
import { downloadBase64File } from '@/utils'

downloadBase64File(base64, '文件名')
```

## isValueType

校验当前值的类型。支持判断所有数据准确类型。但是，由于一些原因，必须手动传递类型，否则会出现 `ts` 在进行判断的时候提示你该判断不准确的问题。

```ts
import { isValueType } from '@/utils'

isValueType<string>('123', 'string') // true
isValueType<number>('123', 'number') // false
isValueType<number>(123, 'number') // true
isValueType<symbol>(Symbol('123'), 'symbol') // true
isValueType<object>({}, 'object') // true
```

## uuid

生成 uuid。

```ts
import { uuid } from '@/utils'

uuid() // 生成 uuid
```

## downloadAnyFile

下载任意文件。

```ts
import { downloadAnyFile } from '@/utils'

downloadAnyFile(blob, '文件名')
downloadAnyFile(arrayBuffer, '文件名')
downloadAnyFile(base64, '文件名')
```

## print

打印。

```ts
import { print } from '@/utils'

print(refDom, { printJs Options })
```

## omit

删除对象中的某些属性。

```ts
import { omit } from '@/utils'

omit({ a: 1, b: 2, c: 3 }, ['a', 'b']) // { c: 3 }
omit({ a: 1, b: 2, c: 3 }, 'a') // { b: 2, c: 3 }
```

## pick

获取对象中的某些属性。

```ts
import { pick } from '@/utils'

pick({ a: 1, b: 2, c: 3 }, ['a', 'b']) // { a: 1, b: 2 }
pick({ a: 1, b: 2, c: 3 }, 'a') // { a: 1 }
```

## isPromise

判断是否是 Promise 对象。

```ts
import { isPromise } from '@/utils'

isPromise(Promise.resolve()) // true
isPromise({}) // false
```

## callWithErrorHandling

捕获错误的函数调用。

```ts
import { callWithErrorHandling } from '@/utils'

const demo1 = callWithErrorHandling(
  () => {
    throw new Error('error')
  },
  (error) => {
    console.log('error')
  },
) // undefined

const demo2 = callWithErrorHandling(
  () => {
    return 'demo2'
  },
  (error) => {
    console.log('error')
  },
  ['demo2'],
) // 'demo2'
```

## callWithAsyncErrorHandling

捕获异步错误的函数调用。

```ts
import { callWithAsyncErrorHandling } from '@/utils'

const demo1 = callWithAsyncErrorHandling(
  () => {
    return Promise.reject('error')
  },
  (error) => {
    console.log('error')
  },
) // undefined

const demo2 = callWithAsyncErrorHandling(
  () => {
    return Promise.resolve('demo2')
  },
  (error) => {
    console.log('error')
  },
  ['demo2'],
) // 'demo2'
```
