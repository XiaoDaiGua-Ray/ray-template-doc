# 样式

## css 预处理器

该项目采用 [sass](https://github.com/sass/dart-sass) 开发。如果你需要使用其他预处理器，仅需要安装对应插件后，即可直接使用，无需做其余配置。

## css module

预处理器也是开箱即用，也可以配合预处理器一起使用。仅需要在创建 `.scss` 文件时，改为 `style.module.scss` 即可。

```ts
import styles from 'style.module.scss' // 在项目中导入即可当作变量使用
```

## 全局 css 结构

```
├── styles
│   ├── animate.scss     # 路由过渡动画
│   ├── base.scss        # 标签初始化样式
│   ├── mixins.scss      # 全局混入样式
│   ├── root.scss        # 全局样式变量
│   ├── setting.scss     # 全局配置变量
```
