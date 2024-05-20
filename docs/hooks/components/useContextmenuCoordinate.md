# useContextmenuCoordinate

与 `NDropdown` 结合使用，实现右键菜单。

## 返回值

| 名称       | 类型                       | 说明                 |
| ---------- | -------------------------- | -------------------- |
| x          | `Readonly<Ref<number>>`    | 当前右键 x 坐标      |
| y          | `Readonly<Ref<number>>`    | 当前右键 y 坐标      |
| show       | `Readonly<Ref<boolean>>`   | 右键菜单显示状态     |
| stop       | `() => void`               | 停止监听右键事件     |
| updateShow | `(value: boolean) => void` | 更新右键菜单显示状态 |

## 基础使用

```tsx
import { NFlex, NCard, NDropdown } from 'naive-ui'

import { useContextmenuCoordinate } from '@/hooks'

const Demo = defineComponent({
  name: 'ContextMenuDemo',
  setup() {
    const demoOneRef = ref<HTMLElement>()
    const demoOneShow = ref(false)
    const options = ref([
      {
        label: '杰·盖茨比',
        key: 'jay gatsby',
      },
      {
        label: '黛西·布坎南',
        key: 'daisy buchanan',
      },
      {
        type: 'divider',
        key: 'd1',
      },
      {
        label: '尼克·卡拉威',
        key: 'nick caraway',
      },
    ])

    const { x, y, show, updateShow } = useContextmenuCoordinate(demoOneRef)

    const clickOutside = (e: MouseEvent) => {
      e.preventDefault()

      updateShow(false)
    }

    return {
      demoOneRef,
      demoOneShow,
      x,
      y,
      show,
      options,
      clickOutside,
      updateShow,
    }
  },
  render() {
    const { x, y, show } = this
    const { clickOutside, updateShow } = this

    return (
      <NFlex vertical>
        <NCard title="useContextmenuCoordinate + NDropdown 实现右键菜单">
          <NFlex vertical>
            <h3>默认点击元素外部会关闭菜单。</h3>
            <div
              ref="demoOneRef"
              style="width: 100%; height: 200px; background-color: rgba(0, 128, 0, 0.5)"
            >
              右击
            </div>
          </NFlex>
        </NCard>
        <NDropdown
          show={show}
          x={x}
          y={y}
          options={this.options}
          trigger="manual"
          placement="bottom-start"
          onSelect={(value, option) => {
            window.$message.info(`选中了 ${option.label}`)

            updateShow(false)
          }}
          onClickoutside={clickOutside.bind(this)}
        />
      </NFlex>
    )
  },
})
```
