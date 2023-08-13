# mock 数据

:::danger 注意
千万不要在 `src` 文件中引入使用 `mock` 中的方法或者文件，同理也不要在 `mock` 中引入 `src` 的相关方法或者文件。
:::

Mock.js是一个前端开发中常用的模拟数据生成工具。它可以帮助开发者在前端环境中快速生成随机数据，用于模拟后端接口的返回数据，以便进行开发和测试。Mock.js的主要作用如下：

- 模拟后端接口：在前端开发中，通常需要与后端进行接口对接。然而，当后端接口尚未开发完成或者无法访问时，前端开发者可以使用Mock.js生成模拟数据，以便进行前端页面的开发和调试。Mock.js可以根据指定的数据模板，生成符合要求的随机数据，包括字符串、数字、布尔值、数组、对象等
- 快速生成测试数据：在进行单元测试或集成测试时，通常需要一些测试数据来验证代码的正确性和稳定性。Mock.js可以根据指定的数据规则，生成大量的随机数据，用于测试不同情况下的代码逻辑
- 前后端分离开发：在前后端分离的开发模式中，前端开发者可以使用Mock.js快速生成模拟数据，进行前端开发和调试，而无需等待后端接口的完成。这样可以提高开发效率，并且减少前后端的耦合度

:::tip
但是，以个人的经验来讲。mock 数据会增加自己的一定工作量，如果是简单的数据，不如自己手写几个简单数据来的快。
:::

## vite-plugin-mock-dev-server

模板采用 [vite-plugin-mock-dev-server](https://vite-plugin-mock-dev-server.netlify.app/) 作为 mock 服务插件。会自动搜集 `vite.server.proxy` 的配置，并且拦截请求。

## 手动添加

所有入口文件都存放于根目录 mock 文件夹中。其中 `shared` 文件存放公共内容、工具包，不存放 mock 文件。下面演示如何手动添加：

- 创建文件

```sh{3}
.
├── mock
├──├──demo.mock.ts
```

:::warning 注意
默认采用 `ts` 作为 mock 文件后缀。并且为了区分 mock 文件和其他文件，所以默认需要在创建文件时1以：`xxx.mock.ts` 格式创建。
:::

- 编写 mock

```ts
import { defineMock } from 'vite-plugin-mock-dev-server'
import Mock from 'mockjs'
import { pagination, stringify, response } from '@mock/shared/utils'
import { array } from '@mock/shared/database'

export const getPersonList = defineMock({
  url: '/api/list',
  method: 'GET',
  delay: 500,
  body: Mock.mock({
    'list|1-10': [
      {
        'id|+1': 1,
      },
    ],
  }),
})
```

按照上述步骤后，你只需要在接口处使用 `/api/list` 就会被自动拦截并且替换为 mock 数据了。

## 目录与文件命名

微服务架构是当前后端服务采用的主流架构，后端通过 服务名+接口地址 的形式提供接口给到前端进行调用。 在这种场景下，为能够直观的与后端的微服务架构能够有清晰的映射关系，在 mock 目录下，也应该采用类型的目录结构， 划分目录进行管理。

比如，在一个 电商类的项目中， 后端提供了：

- 商品服务：提供了 商品列表、商品详情 等接口
- 搜索服务：提供了 关键字搜索、条件筛选 等接口
- 订单服务：提供了 订单列表、订单详情 等接口
- 支付服务：提供了 支付、取消支付 等接口

相对应的，我们的 mock目录，也应根据 服务名 来划分目录：

```sh
./mock
├── goods
├── search
├── order
└── payment
```

对于单服务下的接口，推荐采用 一个接口一个文件的形式进行管理：

```sh
├── goods
│   ├── list.mock.ts
│   └── detail.mock.ts
├── search
│   ├── keywords.mock.ts
│   └── filters.mock.ts
├── order
│   ├── list.mock.ts
│   └── detail.mock.ts
└── payment
    ├── payment.mock.ts
    └── cancel.mock.ts
```

这样做的好处，能够直接通过 目录名和文件名，快速找到对应的接口，方便新建、修改 配置内容。

## 构建独立部署的mock服务

该插件提供了在构建时提供一个小型的 mock 服务器，但是需要并不能内联到客户端代码中。所以会在 dist 下生成一个 `mockServer` 文件，只需要进入该文件，执行 `npm i` 安装依赖后，执行 `npm server` 即可启动 mock 服务。

## 共享内容

在开发过程中，不可避免会有一些共享的返回数据格式和一些工具方法，该项目中统一存放于 `mock/shared` 包中。

```sh
./mock
└── shared
    ├── database  # 数据
    └── utils # 工具函数
```
