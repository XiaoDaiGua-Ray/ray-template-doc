# CSS 规范

在项目中，尽量采用 [`BEM`](https://getbem.com/) 命名规范，以减少样式的耦合度。

## BEM 命名方式

`BEM` 是 `Block`, `Element`, `Modifier` 的缩写，是一种命名规范。

- `Block`: 代表了更高级别的抽象或组件。
- `Element`: 代表 `Block` 的后代，用于形成一个完整的 `Block`。
- `Modifier`: 代表 `Block` 或 `Element` 的不同状态或版本。

假设现有一个按钮，有如下需求:

- 按钮的背景颜色为 `#f00`
- 按钮的文字颜色为 `#fff`
- 按钮的文字大小为 `16px`
- 按钮有禁用状态
- 按钮有 `hover`, `active` 状态

实现示例

- Bad ❌

```html
<button class="btn disabled active">
  <span class="text">按钮</span>
</button>
```

- Good ✅

```html
<button class="btn btn--disabled btn--active">
  <span class="btn__text">按钮</span>
</button>
```

## 命名

### 非必要禁止使用 id

在命名的时候，尽量避免在最顶层命名空间中使用 `id` 选择器，因为 `id` 选择器的优先级比较高，会导致样式的耦合度增加。

- Bad ❌

```html
<div id="demo"></div>
```

```css
#demo {
  color: red;
}
```

- Good ✅

```html
<div class="demo"></div>
```

```css
.demo {
  color: red;
}
```

### 顶层容器命名禁止使用通用、常见词

在命名的时候，尽量避免使用通用、常见词，以减少样式的耦合度。特别是在最顶层的容器中。

- Bad ❌

```html
<div class="container">
  <div class="box"></div>
</div>
```

```css
.container {
  color: red;
}

.box {
  color: red;
}
```

- Good ✅

```html
<div class="demo-container">
  <div class="demo-container__box"></div>
</div>
```

```css
.demo-container {
  color: red;
}

.demo-container .demo-container__box {
  color: red;
}
```

## 禁止滥用 `!important`

开发过程中，`!important` 虽然可以解决一些问题，但是滥用会导致样式的耦合度增加，增加维护成本。

我们应该尽量避免使用，去选择使用 `class` 进行样式覆盖。

```html
<div class="demo"></div>
```

```css
.demo {
  color: red;
}
```

- Bad ❌

```css
.demo {
  color: blue !important;
}
```

- Good ✅

```html
<div class="demo demo-blue"></div>
```

```css
.demo.demo-blue {
  color: blue;
}
```

## 布局采用 `flex`, `grid` 优先

在布局的时候，尽量采用 `flex`, `grid` 布局。

避免使用 `position`, `float` 等布局方式，会导致维护的成本，并且在多端、多尺寸环境下样式兼容效果不佳。

### 左右布局

```html
<div class="demo">
  <div class="demo-left"></div>
  <div class="demo-right"></div>
</div>
```

- Bad ❌

```css
.demo {
  position: relative;
}

.demo-left {
  position: absolute;
  left: 0;
}

.demo-right {
  position: absolute;
  right: 0;
}
```

- Good ✅

```css
.demo {
  display: flex;
  justify-content: space-between;
}
```

### 子元素自适应尺寸

```html
<div class="demo">
  <div class="demo-child-1"></div>
  <div class="demo-child-1"></div>
  <div class="demo-child-2"></div>
</div>
```

- Bad ❌

```scss
.demo {
  width: 100%;

  .demo-child-1 {
    width: 25%;
  }

  .demo-child-2 {
    width: 50%;
  }
}
```

- Good ✅

- 使用 `flex`

```scss
.demo {
  width: 100%;
  display: flex;

  .demo-child-1 {
    flex: 1;
  }

  .demo-child-2 {
    flex: 2;
  }
}
```

- 使用 `grid`

```scss
.demo {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
```

## 宽高设定

开发的时候，应该尽量避免固定的尺寸直接设定，因为会带来维护的成本。并且，不利于多端、多尺寸的适配。

假设现在有一个以下需求的元素:

- 内边距为 `8px`
- 宽高尺寸为 `100px`
- 边框为 `1px`

```html
<div class="demo"></div>
```

- Bad ❌

```scss
.demo {
  width: 83px;
  height: 83px;
  padding: 8px;
  border: 1px solid red;
}
```

- Good ✅

```scss
.demo {
  padding: 8px;
  border: 1px solid red;
  max-width: 100px;
  max-height: 100px;
}
```
