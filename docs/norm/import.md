# 导入规范

项目使用 `eslint` 和 `prettier` 来保持代码风格的一致性。

## 导入类型

导入类型的时候，强制使用 `type` 标识该导入是一个类型。

- Bad ❌

```ts
import { Person } from '@/api/person'
```

- Good ✅

```ts
import type { Person } from '@/api/person'
```

## 导入顺序

导入的时候，约定使用以下规范:

- 每一个分组之间，使用一个空行分隔
- 导入的时候，按照以下顺序导入:

1. `css` or `scss` 文件
2. `components`
3. `utils` or `hooks`
4. `request api`
5. `types`

- Bad ❌

```ts
import { NButton } from 'naive-ui'
import { RChart } from '@/components'
import { getPersonList } from '@/api/person'
import { formatDate, downloadAnyFile } from '@/utils'
import type { Person } from '@/api/person'
import { useHookPlusRequest } from '@/axios'
import 'your css or scss file'
```

- Good ✅

```ts
// css and scss
import 'your css or scss file'

// components
import { NButton } from 'naive-ui'
import { RChart } from '@/components'

// utils and hooks
import { formatDate, downloadAnyFile } from '@/utils'
import { useHookPlusRequest } from '@/axios'

// request api
import { getPersonList } from '@/api/person'

// types
import type { Person } from '@/api/person'
import type { Recordable } from '@/types'
```

## 按需导入

在导入的时候，尽量按需导入，避免导入整个模块。

- Bad ❌

```ts
import _ from 'lodash-es'
import naive from 'naive-ui'
```

- Good ✅

```ts
import { NButton } from 'naive-ui'

import { cloneDeep } from 'lodash-es'
```
