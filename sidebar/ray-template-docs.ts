import type { SidebarItemOptions } from './types'

const rayTemplateDocs: SidebarItemOptions = [
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
            text: '核心理念',
            link: '/ray-template-docs/guide/concept.md',
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
            text: '鉴权',
            link: '/ray-template-docs/dev/auth.md',
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
            items: [
              {
                text: 'pinia 状态管理器',
                link: '/ray-template-docs/dev/data-state/pinia.md',
              },
              {
                text: 'global variable 状态管理器',
                link: '/ray-template-docs/dev/data-state/global-variable.md',
              },
            ],
          },
          {
            text: '国际化',
            link: '/ray-template-docs/dev/i18n.md',
          },
          {
            text: '自定义指令',
            items: [
              {
                text: '创建自定义指令',
                link: '/ray-template-docs/dev/utils/directive/create-directive.md',
              },
              {
                text: '已有自定义指令',
                link: '/ray-template-docs/dev/utils/directive/directive.md',
              },
            ],
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
            items: [
              {
                text: 'basic 基础工具包',
                link: '/ray-template-docs/dev/utils/basic.md',
              },
              {
                text: 'cache 缓存',
                link: '/ray-template-docs/dev/utils/cache.md',
              },
              {
                text: 'element 工具包',
                link: '/ray-template-docs/dev/utils/element.md',
              },
              {
                text: 'dom 工具包',
                link: '/ray-template-docs/dev/utils/dom.md',
              },
              {
                text: '基础运算工具包',
                link: '/ray-template-docs/dev/utils/precision.md',
              },
              {
                text: 'vue3.x 相关工具包',
                link: '/ray-template-docs/dev/utils/vue.md',
              },
            ],
          },
        ],
      },
      {
        text: '进阶',
        items: [
          {
            text: '单元测试',
            link: '/ray-template-docs/advanced/vitest.md',
          },
          {
            text: 'commit 信息检查',
            link: '/ray-template-docs/advanced/commit.md',
          },
          {
            text: 'ts 类型',
            link: '/ray-template-docs/advanced/types.md',
          },
          {
            text: '常用 hooks',
            items: [
              {
                text: '全局 hooks',
                link: '/ray-template-docs/advanced/hooks/web.md',
              },
              {
                text: '模板专属 hooks',
                link: '/ray-template-docs/advanced/hooks/template.md',
              },
              {
                text: '模板组件、NaiveUI 组件 hooks',
                link: '/ray-template-docs/advanced/hooks/components.md',
              },
            ],
          },
          {
            text: 'CDN 加速',
            link: '/ray-template-docs/advanced/cdn.md',
          },
          {
            text: '自定义 echart 主题',
            link: '/ray-template-docs/advanced/echart-themes.md',
          },
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
            text: 'HMR 热更新问题',
            link: '/ray-template-docs/common-problem/hmr.md',
          },
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
]

export { rayTemplateDocs }
