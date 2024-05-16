import type { SidebarItemOptions } from './types'

const norm: SidebarItemOptions = [
  {
    text: '规范',
    base: '/docs/norm/',
    items: [
      {
        text: '导入规范',
        link: 'import',
      },
      {
        text: '导出规范',
        link: 'export',
      },
      {
        text: '格式规范',
        link: 'format',
      },
      {
        text: '注释规范',
        link: 'annotation',
      },
      {
        text: '命名规范',
        link: 'name',
      },
      {
        text: 'CSS 规范',
        link: 'css',
      },
      {
        text: '请求规范',
        link: 'api',
      },
      {
        text: 'vue hook 开发规范',
        link: 'hook',
      },
    ],
  },
]

export { norm }
