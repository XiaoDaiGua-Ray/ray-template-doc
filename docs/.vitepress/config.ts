import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/ray-template-doc/',
  title: 'Ray Template Doc',
  description: 'Ray Template Doc',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/icons/ray.svg' }]],
  themeConfig: {
    siteTitle: 'Ray Template',
    logo: '/icons/ray.svg',
    outlineTitle: 'Ray Template 文档',
    nav: [
      {
        text: '在线预览',
        link: 'https://xiaodaigua-ray.github.io/#/',
      },
      {
        text: '友情链接',
        items: [
          { text: '云之家', link: 'https://yunkuangao.me/' },
          { text: 'JS学习笔记', link: 'https://note.youdao.com/s/ObWEe2BB' },
          { text: '前端面试总结', link: 'https://note.youdao.com/s/IC8xKPdB' },
        ],
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/XiaoDaiGua-Ray/xiaodaigua-ray.github.io',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Ray',
    },
    sidebar: [
      {
        items: [
          {
            text: '介绍',
            link: '/articles/essentials/index.md',
          },
        ],
      },
      {
        text: '起步',
        items: [
          {
            text: '注意事项',
            link: '/articles/preparation/index.md',
          },
          {
            text: '安装项目',
            link: '/articles/setup/index.md',
          },
        ],
      },
      {
        text: '上手开发',
        items: [
          {
            text: '文件结构',
            link: '/articles/develop/file.md',
          },
          {
            text: '布局',
            link: '/articles/develop/layout.md',
          },
          {
            text: '新增 view 页面',
            link: '/articles/develop/add-view.md',
          },
          {
            text: '样式',
            link: '/articles/develop/style.md',
          },
          {
            text: '请求',
            link: '/articles/develop/request.md',
          },
          {
            text: '状态管理器',
            link: '/articles/develop/store.md',
          },
          {
            text: '构建发布',
            link: '/articles/develop/build.md',
          },
          {
            text: '国际化',
            link: '/articles/develop/i18n.md',
          },
        ],
      },
      {
        text: '组件',
        items: [
          {
            text: '可视化图（echart）',
            link: '/articles/component/chart.md',
          },
          {
            text: '数据表格',
            link: '/articles/component/table.md',
          },
          {
            text: '可折叠操作栏',
            link: '/articles/component/collapse-grid.md',
          },
          {
            text: 'svg 图标',
            link: '/articles/component/icon.md',
          },
          {
            text: '提示框图表',
            link: '/articles/component/tooltip-icon.md',
          },
          {
            text: '过渡效果路由',
            link: '/articles/component/transition-component.md',
          },
        ],
      },
      {
        text: '进阶',
        items: [
          {
            text: 'CDN',
            link: '/articles/advanced/cdn.md',
          },
          {
            text: 'ESLint',
            link: '/articles/advanced/eslint.md',
          },
          {
            text: '依赖检查',
            link: '/articles/advanced/depcheck.md',
          },
          {
            text: '插件检查',
            link: '/articles/advanced/inspect.md',
          },
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: true,
  },
})
