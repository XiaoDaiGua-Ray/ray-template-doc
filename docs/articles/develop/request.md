# 请求方法

## axios 拦截器

位置 `src/axios/instance.ts`，按照业务需求，配置拦截器。

## 使用 axios

```ts
import useRequest from '@/axios/index'

export const onAxiosTest = async (city: string) => {
  return useRequest({
    method: 'get',
    url: '',
  })
}
```

## 请求跨域

> 开发过程中如果出现请求跨域问题，在 cfg.ts 中配置 server.proxy 属性代理请求即可。具体可以查看文档 [vite proxy](https://cn.vitejs.dev/config/preview-options.html#preview-proxy)

```ts
{
  server: {
    host: '0.0.0.0',
    port: 9527,
    open: false,
    https: false,
    strictPort: false,
    fs: {
      strict: false,
      allow: [],
    },
    proxy: { // [!code focus]
      '/api': { // [!code focus]
        target: 'url', // [!code focus]
        changeOrigin: true, // [!code focus]
        rewrite: (path) => path.replace(/^\/api/, ''), // [!code focus]
      }, // [!code focus]
    },
  }
}
```

:::warning 注意
后期会更改该方法使用，可能会采用 `@vueuse/useAxios` 方法进行二次封装使用。
:::
