# 命名规范

在项目中，我们需要遵循一定的命名规范，以便于代码的阅读和维护。

## 文件命名

### 组件

组件文件分包，强制使用大驼峰形式命名。

- Bad ❌

```sh
demo-component
demoComponent
```

- Bad ✅

```sh
DemoComponent
```

### class 方法

class 方法文件分包，强制使用大驼峰形式命名。

- Bad ❌

```sh
demo-method
demoMethod
```

- Bad ✅

```sh
DemoMethod
```

### hooks

hooks 文件分包，强制使用小驼峰形式命名，并且以 `use` 开头。

- Bad ❌

```sh
demo-hooks.ts
demoHooks.ts
```

- Bad ✅

```sh
useDemoHooks.ts
```

### 其他

:::warning 注意
除了以上两个，其他文件命名使用小写字母，单词之间使用`-`连接。
:::

- Bad ❌

```sh
# 方法
formatDate.ts
FormatDate.ts

# 页面
demoPage.tsx
DemoPage.tsx

# 配置
someConfig.ts
SomeConfig.ts

# 其他
someFile.ts
SomeFile.ts
someJson.json
SomeJson.json
```

- Bad ✅

```sh
# 方法
format-date.ts

# 页面
demo-page.tsx
demo-page.vue

# 配置
some-config.ts

# 其他
some-file.ts
some-json.json
```

## 变量命名

变量在项目中，除了常量，都采用小驼峰形式命名。

### 常量

常量使用大写字母，单词之间使用`_`连接。

- Bad ❌

```ts
const demo = 'demo'
const demoValue = 'demo'
```

- Bad ✅

```ts
const DEMO = 'demo'
const DEMO_VALUE = 'demo'
```

### 其他

其余变量使用小驼峰形式命名。

- Bad ❌

```ts
const demo_value = 'demo'
const 测试 = 'demo'
const a = 'demo'
```

- Good ✅

```ts
const demoValue = 'demo'
const test = 'demo'
```

### 类型

类型强制大驼峰形式命名。

- Bad ❌

```ts
type demoType = string

interface demo_interface {
  name: string
}
```

- Bad ✅

```ts
type DemoType = string

interface DemoInterface {
  name: string
}
```
