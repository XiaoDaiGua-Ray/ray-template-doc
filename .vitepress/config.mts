import { defineConfig } from 'vitepress'
import { sidebar } from '../sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/ray-template-doc',
  title: 'Ray Template',
  description: 'Ray something blog',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/logo.svg',
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Ray',
    },
    nav: [
      {
        text: '规范',
        link: '/docs/norm/import.md',
      },
      {
        text: '组件',
        link: '/docs/components/basic/description.md',
      },
      {
        text: 'hooks',
        link: '/docs/hooks/description.md',
      },
      {
        text: '参考',
        items: [
          {
            text: '环境配置',
            link: '/docs/refer/env-configuration.md',
          },
          {
            text: '查看命令',
            link: '/docs/refer/setup.md',
          },
        ],
      },
    ],
    sidebar,
    outline: {
      label: '页面导航',
      level: 'deep',
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/XiaoDaiGua-Ray',
      },
    ],
  },
  lang: 'zh-CN',
  lastUpdated: true,
  locales: {
    root: {
      label: '简体中文',
    },
    'zh-CN': {
      label: '简体中文',
    },
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
  },
})
