# 样式

:::tip 注
项目采用 `sass` 作为样式预处理器。开箱即用，无需配置。
:::

## 预设 css var

- ### --ray-theme-primary-color
- ### --ray-theme-primary-fade-color

> 系统当前的主题色与降低透明度的主题色。

## css mixins

- ### flexCenter

> 弹性居中

- ### overflowEllipsis

> 文字溢出变为 `...`

- ### scrollStyle

> 修改滚动条样式

- ### useAppTheme

> 更具当前主题切换样式

```scss
.global-seach--dark {
  @include useAppTheme('dark') {
    & .global-seach__card {
      background-color: #242424;
    }
  }
}

.global-seach--light {
  @include useAppTheme('light') {
    & .global-seach__card {
      background-color: #f9f9f9;
    }
  }
}
```

:::tip 注
这样就可以使得你在明暗主题下，直接使用 css 就能写适配样式。
:::

## 路由切换动画

> `src/styles/animate.scss` 文件设置了路由切换时，内容区域的切换动画。可以根据自己的需求进行修改。

```scss
.fade-enter-active,
.fade-leave-active {
  transition: all 0.35s;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
```

## naive ui 主题调整

> [`naive ui`](https://www.naiveui.com/zh-CN/dark/docs/customize-theme) 每一个组件提供了 `themeOverrides` 属性，无需覆盖任何 css 样式，即可完成组件的风格自定义（全局样式修改，项目中仅需在 `APP_NAIVE_UI_THEME_OVERRIDES` 中自定义配置即可）。
