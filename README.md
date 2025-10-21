# CopyGo.ai

一個現代化的純前端 Web 應用程式，採用 Next.js 14 和 React 18 開發。

## 技術堆疊

- **Next.js 14** - 使用 App Router 架構
- **React 18** - 最新的 React 版本
- **TypeScript** - 型別安全的開發體驗
- **Tailwind CSS** - 快速的樣式開發
- **localStorage** - 客戶端資料持久化

## 功能特色

### 功能一 - 項目列表管理
- 新增、刪除項目
- 即時統計顯示
- 資料自動保存到 localStorage
- 響應式設計

### 功能二 - 任務管理系統
- 建立任務並設定優先級（高、中、低）
- 標記任務完成狀態
- 即時統計：總任務數、已完成、待完成、完成率
- 資料持久化儲存

### 功能三 - 筆記管理
- 建立包含標題和內容的筆記
- 分類管理（工作、個人、學習、其他）
- 分類篩選功能
- 時間戳記錄
- 響應式卡片佈局

## 開始使用

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

開啟瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

### 建置生產版本

```bash
npm run build
```

### 啟動生產伺服器

```bash
npm start
```

## 專案結構

```
CopyGo Prototype/
├── app/                      # Next.js App Router 目錄
│   ├── feature-one/         # 功能一頁面
│   ├── feature-two/         # 功能二頁面
│   ├── feature-three/       # 功能三頁面
│   ├── globals.css          # 全域樣式
│   ├── layout.tsx           # 根佈局組件
│   └── page.tsx             # 首頁
├── components/              # React 組件
│   └── Sidebar.tsx          # 側邊欄導航組件
├── public/                  # 靜態資源
├── package.json             # 專案依賴
├── tsconfig.json            # TypeScript 配置
├── tailwind.config.ts       # Tailwind CSS 配置
├── postcss.config.js        # PostCSS 配置
├── next.config.js           # Next.js 配置
└── README.md               # 專案說明文件
```

## UI/UX 設計特點

- **現代化設計**：使用漸層色彩和陰影效果
- **響應式佈局**：完美支援手機、平板、桌面設備
- **卡片式設計**：清晰的視覺層次
- **流暢動畫**：淡入動畫和懸停效果
- **直覺式操作**：簡潔的用戶介面和互動設計

## 瀏覽器支援

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 授權

本專案為原型開發專案。

## 開發團隊

CopyGo.ai - 讓工作更高效的智能助手

---

最後更新：2025年10月

