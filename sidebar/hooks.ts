import type { SidebarItemOptions } from './types'

const components: SidebarItemOptions = []

const template: SidebarItemOptions = []

const web: SidebarItemOptions = [
  {
    text: 'useDayjs',
    link: 'useDayjs',
  },
  {
    text: 'useDevice',
    link: 'useDevice',
  },
  {
    text: 'useDomToImage',
    link: 'useDomToImage',
  },
  {
    text: 'useElementFullscreen',
    link: 'useElementFullscreen',
  },
  {
    text: 'useI18n',
    link: 'useI18n',
  },
  {
    text: 'usePagination',
    link: 'usePagination',
  },
  {
    text: 'usePrint',
    link: 'usePrint',
  },
  {
    text: 'useVueRouter',
    link: 'useVueRouter',
  },
]

const hooks: SidebarItemOptions = [
  {
    text: 'hooks',
    base: '/docs/hooks/',
    items: [
      {
        text: '什么是 hooks',
        link: 'description',
      },
      {
        text: 'components',
        base: '/docs/hooks/components/',
        items: components,
      },
      {
        text: 'template',
        base: '/docs/hooks/template/',
        items: template,
      },
      {
        text: 'web',
        base: '/docs/hooks/web/',
        items: web,
      },
    ],
  },
]

export { hooks }
