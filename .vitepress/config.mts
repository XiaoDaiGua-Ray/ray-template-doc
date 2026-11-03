import { defineConfig } from "vitepress";
import { writeLegacyRedirects } from "./legacy.mts";
import { sidebar } from "./sidebar.mts";
import { demo, repository } from "./source.mts";

const base = "/ray-template-doc/";

export default defineConfig({
  base,
  title: "Ray Template",
  titleTemplate: ":title · Ray Template 文档",
  description: "Ray Template 的上手指南、迁移清单、组件与工程参考。",
  lang: "zh-CN",
  srcExclude: ["README.md", "AGENTS.md"],
  head: [
    [
      "link",
      { rel: "icon", type: "image/svg+xml", href: base + "ray-mark.svg" },
    ],
  ],
  buildEnd: writeLegacyRedirects,
  themeConfig: {
    logo: { src: "/ray-mark.svg", alt: "" },
    siteTitle: "Ray Template",
    nav: [
      { text: "指南", link: "/guide/start", activeMatch: "^/guide/" },
      { text: "迁移", link: "/migration" },
      {
        text: "API 参考",
        link: "/reference/",
        activeMatch: "^/reference/",
      },
      { text: "在线演示", link: demo },
    ],
    sidebar,
    outline: { label: "本页目录", level: [2, 3] },
    search: {
      provider: "local",
      options: {
        translations: {
          button: { buttonText: "搜索文档", buttonAriaLabel: "搜索文档" },
          modal: {
            noResultsText: "未找到相关内容",
            resetButtonTitle: "清除搜索",
            footer: {
              selectText: "打开",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
    skipToContentLabel: "跳转到正文",
    docFooter: { prev: "上一页", next: "下一页" },
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "文档目录",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色",
    darkModeSwitchTitle: "切换到深色",
    socialLinks: [{ icon: "github", link: repository }],
    footer: {
      copyright: "© 2022–至今 Ray · MIT License",
    },
  },
  markdown: {
    container: {
      tipLabel: "提示",
      warningLabel: "注意",
      dangerLabel: "危险",
      infoLabel: "说明",
      detailsLabel: "查看详情",
    },
  },
});
