# 导出规范

导出也需要有点规范才行。

## 导出变量与类型

### 导出非类型

直接导出即可。

```ts
const DEMO_VALUE = 1

const sum = (a: number, b: number) => a + b

export { sum, DEMO_VALUE }
```

### 导出类型

禁止写在一起，并且需要与非类型导出空一行。

- Bad ❌

```ts
type Demo = () => void

const demo: Demo = () => {}

export { Demo, a }
```

- Good ✅

```ts
type Demo = () => void

const demo: Demo = () => {}

export { demo }

export type { Demo }
```
