import { norm } from './norm'
import { components } from './components'
import { refer } from './refer'
import { hooks } from './hooks'
import { rayTemplateDocs } from './ray-template-docs'
import { directives } from './directives'

import type { Sidebar } from './types'

const sidebar: Sidebar = {
  // 规范
  '/': norm,
  // 二开组件与公共组件
  '/docs/components/': components,
  // 环境配置
  '/docs/refer/': refer,
  // hooks
  '/docs/hooks/': hooks,
  // template docs
  '/ray-template-docs/': rayTemplateDocs,
  // directives 指令
  '/docs/directives/': directives,
}

export { sidebar }
