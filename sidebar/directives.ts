import type { SidebarItemOptions } from './types'

const directives: SidebarItemOptions = [
  {
    text: '自定义指令',
    base: '/docs/directives/',
    items: [
      {
        text: 'v-copy',
        link: 'copy',
      },
      {
        text: 'v-debounce',
        link: 'debounce',
      },
      {
        text: 'v-throttle',
        link: 'throttle',
      },
      {
        text: 'v-ripple',
        link: 'ripple',
      },
      {
        text: 'v-ellipsis',
        link: 'ellipsis',
      },
    ],
  },
]

export { directives }
