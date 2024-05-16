# useDayjs

常用的日期方法。

## 返回值

| 名称                | 类型                                                                      | 说明                                                                                         |
| ------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| locale              | `(key: LocalKey) => void`                                                 | 国际化切换                                                                                   |
| getStartAndEndOfDay | `(formatOption?: FormatOption) => Readonly<StartAndEndOfDay>`             | 获取当前日期的开始和结束时间                                                                 |
| format              | `format: (date: dayjs.ConfigType, formatOption?: FormatOption) => string` | 格式化日期                                                                                   |
| isDayjs             | `isDayjs: (d: unknown) => boolean`                                        | 判断是否为 dayjs 实例                                                                        |
| daysDiff            | `daysDiff: (date1: dayjs.ConfigType, date2: dayjs.ConfigType) => number`  | 计算两天日期天数差异                                                                         |
| isDateInRange       | `(date: dayjs.ConfigType, range: DateRange) => boolean`                   | 判断一个时间是否在 start date 与 end date 之间，如果刚还是等于开始、结束时间，也会返回 false |

## 基础使用

### locale 国际化切换

```ts
local('zh-CN')
local('en-US')
```

### getStartAndEndOfDay 获取当前日期的开始和结束时间

```ts
const {
  today,
  startOfDay,
  endOfDay,
  formatToday,
  formatStartOfDay,
  formatEndOfDay,
} = getStartAndEndOfDay()
```

### format 格式化日期

```ts
dayjs('2021-01-01').format('YYYY-MM-DD') // 2021-01-01
dayjs('2021-01-01').format('YYYY-MM-DD HH:mm:ss') // 2021-01-01 00:00:00
dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss') // 当前时间
```

### isDayjs 判断是否为 dayjs 实例

```ts
isDayjs('2022-11-11') // false
isDayjs('1699687245973') // false
isDayjs(dayjs()) // true
```

### daysDiff 计算两天日期天数差异

```ts
daysDiff('2022-01-11', '2022-01-12') // 1
daysDiff('2023-01-11', '2022-01-12') // -364
```

### isDateInRange 判断一个时间是否在 start date 与 end date 之间

```ts
isDateInRange('2023-01-16', { start: '2023-01-15', end: '2023-01-20' }) // true
isDateInRange('2023-01-20', { start: '2023-01-15', end: '2023-01-20' }) // false
```
