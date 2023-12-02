# 基础方法包

## getAppEnvironment

获取当前环境。

```ts
import { getAppEnvironment } from '@/utils/basic'

const { BASE_URL } = getAppEnvironment() // 获取 BASE_URL
const { MODE } = getAppEnvironment() // 获取 MODE，也就是当前所有的环境变量
const { your config } = getAppEnvironment() // 获取你自定义的配置项
```

## arrayBufferToBase64Image

将 ArrayBuffer 转换为 base64 图片。

```ts
import { arrayBufferToBase64Image } from '@/utils/basic'

const base64 = arrayBufferToBase64Image(arrayBuffer)
```

## downloadBase64File

下载 base64 文件。

```ts
import { downloadBase64File } from '@/utils/basic'

downloadBase64File(base64, '文件名')
```

## isValueType

校验当前值的类型。支持判断所有数据准确类型。但是，由于一些原因，必须手动传递类型，否则会出现 `ts` 在进行判断的时候提示你该判断不准确的问题。

```ts
import { isValueType } from '@/utils/basic'

isValueType<string>('123', 'string') // true
isValueType<number>('123', 'number') // false
isValueType<number>(123, 'number') // true
isValueType<symbol>(Symbol('123'), 'symbol') // true
isValueType<object>({}, 'object') // true
```

## uuid

生成 uuid。

```ts
import { uuid } from '@/utils/basic'

uuid() // 生成 uuid
```

## downloadAnyFile

下载任意文件。

```ts
import { downloadAnyFile } from '@/utils/basic'

downloadAnyFile(blob, '文件名')
downloadAnyFile(arrayBuffer, '文件名')
downloadAnyFile(base64, '文件名')
```

## print

打印。

```ts
import { print } from '@/utils/basic'

print(refDom, { printJs Options })
```

## omit

删除对象中的某些属性。

```ts
import { omit } from '@/utils/basic'

omit({ a: 1, b: 2, c: 3 }, ['a', 'b']) // { c: 3 }
omit({ a: 1, b: 2, c: 3 }, 'a') // { b: 2, c: 3 }
```
