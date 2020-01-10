# F2E 實作題目

進入畫面時，從 API 取得取得訂單的資訊後，因應畫面的設計， Render UI

#### API Response Data 
```
{
    orders: [
        {
            name: 'Livi優活 抽取式衛生紙(100抽x10包x10串/箱)',
            logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
            status: {
              code: 3,
              type: '已取消'
            },
            date: '107/6/12'
        },
        {
            name: 'BALMUDA The Toaster 百慕達烤麵包機-黑色',
            logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
            status: {
              code: 2,
              type: '已成立'
            },
            date: '108/7/21'
        },
        {
            name: '贈-短慧萬用鍋HD2133+三合一濾網「LG樂金」韓國原裝...',
            logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
            status: {
              code: 1,
              type: '處理中'
            },
            date: '108/6/2'
         },
         {
            name: 'Apple AirPds 2',
            logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
            status: {
              code: 4,
              type: '已送達'
            },
            date: '108/3/02'
        }
    ]
}
```
![](https://i.imgur.com/2TWknz0.png)


### 功能

- 因應畫面，依據`status`分類為`進行中` 與`已完成`
  - 進行中：status.code = 1 || 2
  - 已完成 : status.code = 3 || 4
  
- 分類排序： Sort Date By DESC


#### Stack

依據經驗搭配下面的技術(擇一)實作功能，盡可能展現程式開發能力跟程式品質，完成後提供 github repositories， 並可在本機進行測試

- React & Redux or 任何 React 的 Data Flow library
- Vue & Vuex Data Flow
- other framework
- Please provide public git repository


# 實際完成頁面

## 網頁版
![](https://i.imgur.com/48fdOxD.png)

## 模擬手機

![](https://i.imgur.com/BNvXs6s.png)
