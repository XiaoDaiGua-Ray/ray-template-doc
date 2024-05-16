import type { SidebarItemOptions } from './types'

const components: SidebarItemOptions = [
  {
    text: '基础组件',
    base: '/docs/components/basic/',
    items: [
      {
        text: '什么是基础组件',
        link: 'description',
      },
      {
        text: 'Vue3NextQrcode 二维码',
        link: 'qr-code',
      },
      {
        text: 'RBarcode 条形码',
        link: 'r-barcode',
      },
      {
        text: 'RChart 可视化 chart 图表',
        link: 'r-chart',
      },
      {
        text: 'RCollapseGrid 折叠面板',
        link: 'r-collapse-grid',
      },
      {
        text: 'RForm 表单',
        link: 'r-form',
      },
      {
        text: 'RIcon svg 图标',
        link: 'r-icon',
      },
      {
        text: 'RIframe 内联框架元素',
        link: 'r-iframe',
      },
      {
        text: 'RModal 模态框',
        link: 'r-modal',
      },
      {
        text: 'RMoreDropdown 下拉菜单',
        link: 'r-more-dropdown',
      },
      {
        text: 'RSegment 分段器',
        link: 'r-segment',
      },
      {
        text: 'RTable 表格',
        link: 'r-table',
      },
      {
        text: 'RTransitionComponent 动画路由',
        link: 'r-transition-component',
      },
    ],
  },
]

export { components }
