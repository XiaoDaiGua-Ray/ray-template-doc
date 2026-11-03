import { useData, withBase } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { defineComponent, h } from "vue";
import { revision } from "../source.mts";
import "./ray.css";

export default {
  extends: DefaultTheme,
  Layout: defineComponent({
    setup() {
      const { page } = useData();

      return () =>
        h(DefaultTheme.Layout, null, {
          "doc-before": () => {
            const path = page.value.relativePath;
            const section = path.startsWith("guide/")
              ? "开发指南"
              : path.startsWith("reference/")
                ? "参考"
                : "版本迁移";

            return h("div", { class: "ray-doc-meta" }, [
              h("span", section),
              path !== "reference/source.md"
                ? h("a", { href: withBase("/reference/source.html") }, [
                    "源码 ",
                    h("code", revision.slice(0, 7)),
                  ])
                : null,
            ]);
          },
        });
    },
  }),
};
