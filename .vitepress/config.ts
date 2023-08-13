import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/ray-template-doc',
  title: 'Ray Template',
  description: 'Ray something blog',
  lastUpdated: true,
  lang: 'zh-CN',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/ray-template-doc/logo.svg',
      },
    ],
  ],
  locales: {
    root: {
      label: '简体中文',
    },
  },
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Ray',
    },
    logo: '/icons/ray.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '模板文档',
        link: '/ray-template-docs/guide/why.md',
      },
      {
        text: '在线预览',
        items: [
          {
            text: '预览',
            link: 'https://xiaodaigua-ray.github.io/ray-template/#/',
          },
          {
            text: '预览(加速地址)',
            link: 'https://ray-template.yunkuangao.com/#/',
          },
        ],
      },
      {
        text: '插件集合',
        items: [
          {
            text: 'vscode',
            link: '/plugin/vscode/ai/index.md',
          },
        ],
      },
      {
        text: '关于我',
        link: 'https://ray.yka.moe/',
      },
      {
        text: '友情链接',
        items: [
          {
            text: 'yun',
            link: 'https://me.yka.moe/ ',
          },
          {
            text: 'yun git',
            link: 'https://git.yka.moe/yun',
          },
        ],
      },
    ],
    sidebar: {
      '/plugin/': [
        {
          items: [
            {
              link: '/plugin/vscode/ai/index.md',
              items: [
                {
                  text: 'Ai 编程助手',
                  link: '/plugin/vscode/ai/index.md',
                },
                {
                  text: '主题',
                  link: '/plugin/vscode/theme/index.md',
                },
                {
                  text: '图标',
                  link: '/plugin/vscode/icon/index.md',
                },
                {
                  text: '效率',
                  link: '/plugin/vscode/helper/index.md',
                },
              ],
            },
          ],
        },
      ],
      '/ray-template-docs/': [
        {
          items: [
            {
              text: '指引',
              items: [
                {
                  text: '为什么选择 Ray Template',
                  link: '/ray-template-docs/guide/why.md',
                },
                {
                  text: '开始',
                  link: '/ray-template-docs/guide/setup.md',
                },
                {
                  text: '功能',
                  link: '/ray-template-docs/guide/features.md',
                },
              ],
            },
            {
              text: '快速上手',
              items: [
                {
                  text: '目录结构',
                  link: '/ray-template-docs/dev/file.md',
                },
                {
                  text: '流程',
                  link: '/ray-template-docs/dev/process.md',
                },
                {
                  text: '项目配置项',
                  link: '/ray-template-docs/dev/config.md',
                },
                {
                  text: '特殊约定',
                  link: '/ray-template-docs/dev/regulation.md',
                },
                {
                  text: '路由',
                  link: '/ray-template-docs/dev/router.md',
                },
                {
                  text: '菜单',
                  link: '/ray-template-docs/dev/menu.md',
                },
                {
                  text: '组件',
                  items: [
                    {
                      text: 'UI 组件',
                      link: '/ray-template-docs/dev/component.md',
                    },
                    {
                      text: '特殊组件',
                      link: '/ray-template-docs/dev/scomponent.md',
                    },
                  ],
                },
                {
                  text: '样式',
                  link: '/ray-template-docs/dev/style.md',
                },
                {
                  text: '状态管理器',
                  link: '/ray-template-docs/dev/pinia.md',
                },
                {
                  text: '国际化',
                  link: '/ray-template-docs/dev/i18n.md',
                },
                {
                  text: '自定义指令',
                  link: '/ray-template-docs/dev/directive.md',
                },
                {
                  text: '构建',
                  link: '/ray-template-docs/dev/build.md',
                },
                {
                  text: '请求',
                  link: '/ray-template-docs/dev/axios.md',
                },
                {
                  text: 'utils 工具包',
                  link: '/ray-template-docs/dev/utils.md',
                },
              ],
            },
            {
              text: '进阶',
              items: [
                {
                  text: 'reactivityTransform 功能（已废弃）',
                  link: '/ray-template-docs/advanced/reactivity.md',
                },
                {
                  text: '全局属性',
                  link: '/ray-template-docs/advanced/app-global-provider.md',
                },
                {
                  text: 'postcss',
                  link: '/ray-template-docs/advanced/postcss.md',
                },
                {
                  text: 'eslint（代码检查）',
                  link: '/ray-template-docs/advanced/eslint.md',
                },
                {
                  text: 'husky（git 钩子）',
                  link: '/ray-template-docs/advanced/husky.md',
                },
                {
                  text: 'mock 数据',
                  link: '/ray-template-docs/advanced/mock.md',
                },
              ],
            },
            {
              text: '常见问题',
              items: [
                {
                  text: '缓存',
                  link: '/ray-template-docs/common-problem/keep-alive.md',
                },
                {
                  text: '请求',
                  link: '/ray-template-docs/common-problem/request-cancel.md',
                },
                {
                  text: '构建',
                  link: '/ray-template-docs/common-problem/build.md',
                },
              ],
            },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/XiaoDaiGua-Ray',
      },
    ],
  },
})
