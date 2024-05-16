import type { SidebarItemOptions } from './types'

const refer: SidebarItemOptions = [
  {
    text: '参考',
    base: '/docs/refer/',
    items: [
      {
        text: '环境依赖',
        link: 'env-configuration',
      },
      {
        text: '查看命令',
        link: 'setup',
      },
    ],
  },
]

export { refer }
