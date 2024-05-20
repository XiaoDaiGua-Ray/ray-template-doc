import type { SidebarItemOptions } from './types'

const components: SidebarItemOptions = [
  {
    text: 'useContextmenuCoordinate',
    link: 'useContextmenuCoordinate',
  },
]

const template: SidebarItemOptions = [
  {
    text: 'useAppNavigation',
    link: 'useAppNavigation',
  },
  {
    text: 'useAppRoot',
    link: 'useAppRoot',
  },
  {
    text: 'useBadge',
    link: 'useBadge',
  },
  {
    text: 'useContentScroll',
    link: 'useContentScroll',
  },
  {
    text: 'useMaximize',
    link: 'useMaximize',
  },
  {
    text: 'useSiderBar',
    link: 'useSiderBar',
  },
  {
    text: 'useSiderScroll',
    link: 'useSiderScroll',
  },
  {
    text: 'useSpinning',
    link: 'useSpinning',
  },
  {
    text: 'useTheme',
    link: 'useTheme',
  },
  {
    text: 'useWatermark',
    link: 'useWatermark',
  },
]

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
