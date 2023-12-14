# 缓存

## hasStorage

判断缓存中是否存在某个值。

```ts
import { hasStorage } from '@/utils'

hasStorage('key', 'sessionStorage') // true
hasStorage('key', 'localStorage') // true
```

## setStorage

设置缓存。

```ts
import { setStorage } from '@/utils'

setStorage('key', 'value', 'sessionStorage')
setStorage('key', 'value', 'localStorage')
```

## getStorage

获取缓存。

```ts
import { getStorage } from '@/utils'

getStorage('key', 'sessionStorage')
getStorage('key', 'localStorage')
getStorage('key', 'sessionStorage', 'value') // 如果缓存中不存在，则返回默认值
```

## removeStorage

删除缓存。

```ts
import { removeStorage } from '@/utils'

removeStorage('key', 'sessionStorage')
removeStorage('key', 'localStorage')
removeStorage('all') // 删除所有缓存
removeStorage('all-sessionStorage') // 删除所有 sessionStorage 缓存
removeStorage('all-localStorage') // 删除所有 localStorage 缓存
```
