# 全局常用 hooks

## useDayjs

```ts
import { useDayjs } from '@/hooks/web/index'
```

### 国际化

切换语言包

```ts
const { locale } = useDayjs()

locale('zh-cn') // 切换为中文简体
locale('en') // 切换为英文
```

### 校验是否为 dayjs 对象

```ts
const { isDayjs } = useDayjs()

isDayjs('2022-11-11') // false
isDayjs('1239123789') // false
```

### 格式化

```ts
const { format } = useDayjs()

dayjs().format() // '2020-04-02T08:02:17-05:00'
dayjs('2019-01-25').format('DD/MM/YYYY') // '25/01/2019'
```

### 当天开始、结束时间

```ts
const { getStartAndEndOfDay } = useDayjs()

const { today, startOfDay, endOfDay, formatToday, formatStartOfDay } =
  getStartAndEndOfDay()
```

### 比较时间差

```ts
const { daysDiff } = useDayjs()

daysDiff('2022-01-11', '2022-01-12') // 1
daysDiff('2021-01-11', '2022-01-12') // 366
daysDiff('2023-01-11', '2022-01-12') // -364
```

### 判断一个日期是否在一个时间范围内

```ts
const { isDateInRange } = useDayjs()

isDateInRange('2023-01-16', { start: '2023-01-15', end: '2023-01-20' }) // true
isDateInRange('2023-01-15', { start: '2023-01-15', end: '2023-01-20' }) //false
isDateInRange('2023-01-20', { start: '2023-01-15', end: '2023-01-20' }) //false
```

## useDevice

### 是否为平板或者更小尺寸

> `isTabletOrSmaller` 为 `true` 则表示当前设备尺寸为平板或者更小

```ts
const { width, height, isTabletOrSmaller } = useDevice()
```

## useI18n

:::tip
重写 `vue-i18n` 的 `useI18n` 方法。允许在任何环境中使用，也就意味着可以脱离 `setup` 环境约束使用。该方法的使用逻辑、参数都与官方的保持一致，这里不在赘述。
:::

## useVueRouter

:::tip
允许在非 `setup` 环境使用 `router`。但是在使用的时候会有 `HMR` 报错的问题，可能会有点影响体验，不太推荐使用。
:::
