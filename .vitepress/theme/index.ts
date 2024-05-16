import DefaultTheme from 'vitepress/theme'

import type { App } from 'vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App<Element> }) {},
}
