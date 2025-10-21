'use client'

import { useState } from 'react'

interface BasicInfo {
  productName: string
  targetAudience: string
  keyMessage: string
  callToAction: string
}

interface AdvancedInfo {
  brandTone: string
  productCategory: string
  specialFeatures: string
  priceRange: string
  urgency: string
}

interface GeneratedCopy {
  id: number
  type: 'EDM' | 'Messaging' | 'Social'
  title: string
  content: string
  createdAt: Date
}

export default function FeatureTwo() {
  const [basicInfo, setBasicInfo] = useState<BasicInfo>({
    productName: '',
    targetAudience: '',
    keyMessage: '',
    callToAction: ''
  })
  
  const [advancedInfo, setAdvancedInfo] = useState<AdvancedInfo>({
    brandTone: '',
    productCategory: '',
    specialFeatures: '',
    priceRange: '',
    urgency: ''
  })
  
  const [generatedCopies, setGeneratedCopies] = useState<GeneratedCopy[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [activeTab, setActiveTab] = useState<'EDM' | 'Messaging' | 'Social'>('EDM')

  // Demo 資料
  const demoCopies: GeneratedCopy[] = [
    {
      id: 1,
      type: 'EDM',
      title: '【智能手錶 Pro Max】限時優惠通知 - 專業健康監測新體驗',
      content: `親愛的客戶，

我們很高興為您介紹全新上市的智能手錶 Pro Max！這款革命性的健康監測設備專為像您這樣的專業人士精心設計。

✨ 產品特色：
• 24/7 心率監測與血氧檢測
• 50米防水設計，運動無憂
• 7天超長續航，告別充電焦慮
• AI智能語音助手，生活更便利

🎯 專屬優惠：
限時特價 NT$8,999（原價 NT$12,999）
早鳥優惠再享 9 折，僅限前 100 名！

【立即搶購】https://copygo.ai/smartwatch-promax

或回覆此郵件「我要購買」即可獲得專屬優惠碼！

此致
CopyGo.ai 團隊

P.S. 所有產品均享 2 年保固，30 天無條件退換貨保證。`,
      createdAt: new Date()
    },
    {
      id: 2,
      type: 'Messaging',
      title: '智能手錶推薦',
      content: `嗨！想推薦一個很棒的新產品給你 😊

剛看到這個智能手錶 Pro Max，功能真的很強大：
• 健康監測超準確
• 防水設計很實用
• 續航力超強，一週不用充電

而且現在有早鳥優惠，比原價便宜很多！

你最近不是說想買個運動手錶嗎？這個應該很適合你。

🔥 立即購買：https://copygo.ai/smartwatch-promax
💰 專屬優惠碼：FRIEND20（再享 8 折）

👉 要不要我直接把購買連結發給你？
或者你想先看看詳細規格再決定？

回覆「要」我就馬上發給你！`,
      createdAt: new Date()
    },
    {
      id: 3,
      type: 'Social',
      title: '🔥 智能手錶 Pro Max 震撼上市！',
      content: `🚀 全新智能手錶 Pro Max 正式登場！

✨ 革命性健康監測技術
💪 50米防水，運動無憂
🔋 7天超長續航
🤖 AI語音助手

限時早鳥優惠 🎯
原價 $12,999 → 特價 $8,999
再享 9 折優惠！

🔥 立即下單：https://copygo.ai/smartwatch-promax
💬 私訊「我要優惠」獲得專屬折扣碼
📞 客服專線：0800-123-456

#智能手錶 #健康監測 #運動科技 #早鳥優惠 #科技生活 #智能穿戴 #健康生活 #運動手錶 #科技新品 #限時優惠 #智能設備 #健康管理 #運動追蹤 #科技潮流 #智能生活`,
      createdAt: new Date()
    }
  ]

  const handleBasicInfoChange = (field: keyof BasicInfo, value: string) => {
    setBasicInfo(prev => ({ ...prev, [field]: value }))
  }

  const handleAdvancedInfoChange = (field: keyof AdvancedInfo, value: string) => {
    setAdvancedInfo(prev => ({ ...prev, [field]: value }))
  }

  const isBasicInfoValid = () => {
    return basicInfo.productName.trim() !== '' && 
           basicInfo.targetAudience.trim() !== '' && 
           basicInfo.keyMessage.trim() !== '' && 
           basicInfo.callToAction.trim() !== ''
  }

  const generateCopy = async () => {
    setIsGenerating(true)
    
    // 模擬生成過程，直接顯示 demo 資料
    setTimeout(() => {
      setGeneratedCopies(demoCopies)
      setIsGenerating(false)
    }, 2000)
  }

  // 處理 CTA 文字高亮顯示
  const formatContentWithCTA = (content: string) => {
    // 定義 CTA 關鍵詞
    const ctaKeywords = [
      '【立即搶購】',
      '立即購買：',
      '立即下單：',
      '私訊「我要優惠」',
      '回覆「要」',
      '回覆此郵件「我要購買」',
      '客服專線：',
      '專屬優惠碼：'
    ]
    
    let formattedContent = content
    
    // 為每個 CTA 關鍵詞添加紅色樣式
    ctaKeywords.forEach(keyword => {
      const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'g')
      formattedContent = formattedContent.replace(regex, '<span class="text-red-600 font-semibold">$1</span>')
    })
    
    return formattedContent
  }

  // 過濾當前選中 tab 的文案
  const getFilteredCopies = () => {
    return generatedCopies.filter(copy => copy.type === activeTab)
  }

  // 獲取 tab 的顯示文字和圖標
  const getTabInfo = (type: 'EDM' | 'Messaging' | 'Social') => {
    switch (type) {
      case 'EDM':
        return { label: 'EDM', icon: '📧', color: 'purple' }
      case 'Messaging':
        return { label: 'Messaging', icon: '💬', color: 'green' }
      case 'Social':
        return { label: 'Social', icon: '📱', color: 'pink' }
    }
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 animate-fade-in">
      <div className="max-w-5xl">
        {/* 標題區域 */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">文案生成</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* 左側：輸入表單 */}
          <div className="space-y-6">
            {/* 基本資訊 */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-2 sm:gap-0">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">基本資訊（必須）</h2>
                <span className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded-full self-start sm:ml-2">必填</span>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">產品名稱</label>
                  <input
                    type="text"
                    value={basicInfo.productName}
                    onChange={(e) => handleBasicInfoChange('productName', e.target.value)}
                    placeholder="例如：智能手錶 Pro Max"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">目標受眾</label>
                  <input
                    type="text"
                    value={basicInfo.targetAudience}
                    onChange={(e) => handleBasicInfoChange('targetAudience', e.target.value)}
                    placeholder="例如：年輕專業人士、健身愛好者"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">核心訊息</label>
                  <textarea
                    value={basicInfo.keyMessage}
                    onChange={(e) => handleBasicInfoChange('keyMessage', e.target.value)}
                    placeholder="例如：革命性的健康監測技術，讓您隨時掌握身體狀況"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">行動呼籲</label>
                  <input
                    type="text"
                    value={basicInfo.callToAction}
                    onChange={(e) => handleBasicInfoChange('callToAction', e.target.value)}
                    placeholder="例如：立即購買、了解更多、免費試用"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  />
                </div>
              </div>
            </div>

            {/* 進階資訊 */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">進階資訊（選項）</h2>
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium px-2 py-1 rounded hover:bg-blue-50"
                >
                  {showAdvanced ? '隱藏' : '展開'}
                </button>
              </div>
              
              {showAdvanced && (
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">品牌調性</label>
                    <select
                      value={advancedInfo.brandTone}
                      onChange={(e) => handleAdvancedInfoChange('brandTone', e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    >
                      <option value="">選擇品牌調性</option>
                      <option value="專業嚴謹">專業嚴謹</option>
                      <option value="親切友善">親切友善</option>
                      <option value="時尚潮流">時尚潮流</option>
                      <option value="溫馨家庭">溫馨家庭</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">產品類別</label>
                    <select
                      value={advancedInfo.productCategory}
                      onChange={(e) => handleAdvancedInfoChange('productCategory', e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    >
                      <option value="">選擇產品類別</option>
                      <option value="3C電子">3C電子</option>
                      <option value="美妝保養">美妝保養</option>
                      <option value="服飾配件">服飾配件</option>
                      <option value="居家生活">居家生活</option>
                      <option value="運動健身">運動健身</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">特殊功能</label>
                    <input
                      type="text"
                      value={advancedInfo.specialFeatures}
                      onChange={(e) => handleAdvancedInfoChange('specialFeatures', e.target.value)}
                      placeholder="例如：防水、無線充電、AI語音助手"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">價格區間</label>
                    <select
                      value={advancedInfo.priceRange}
                      onChange={(e) => handleAdvancedInfoChange('priceRange', e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    >
                      <option value="">選擇價格區間</option>
                      <option value="經濟實惠">經濟實惠</option>
                      <option value="中價位">中價位</option>
                      <option value="高檔精品">高檔精品</option>
                      <option value="奢華頂級">奢華頂級</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">緊急程度</label>
                    <select
                      value={advancedInfo.urgency}
                      onChange={(e) => handleAdvancedInfoChange('urgency', e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    >
                      <option value="">選擇緊急程度</option>
                      <option value="限時優惠">限時優惠</option>
                      <option value="限量發售">限量發售</option>
                      <option value="早鳥優惠">早鳥優惠</option>
                      <option value="新品上市">新品上市</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* 生成按鈕 */}
            <button
              onClick={generateCopy}
              disabled={isGenerating}
              className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-medium text-white transition-all text-sm sm:text-base ${
                !isGenerating
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {isGenerating ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  生成中...
                </div>
              ) : (
                '文案生成'
              )}
            </button>
          </div>

          {/* 右側：生成結果 */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">生成結果</h2>
                
                {/* Tab 導航 */}
                <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                  {(['EDM', 'Messaging', 'Social'] as const).map((type) => {
                    const tabInfo = getTabInfo(type)
                    const isActive = activeTab === type
                    const count = generatedCopies.filter(copy => copy.type === type).length
                    
                    return (
                      <button
                        key={type}
                        onClick={() => setActiveTab(type)}
                        className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                          isActive
                            ? `bg-white text-${tabInfo.color}-700 shadow-sm`
                            : `text-gray-600 hover:text-gray-900 hover:bg-gray-50`
                        }`}
                      >
                        <span className="text-base">{tabInfo.icon}</span>
                        <span>{tabInfo.label}</span>
                        {count > 0 && (
                          <span className={`px-2 py-0.5 text-xs rounded-full ${
                            isActive ? `bg-${tabInfo.color}-100 text-${tabInfo.color}-700` : 'bg-gray-200 text-gray-600'
                          }`}>
                            {count}
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                {generatedCopies.length === 0 ? (
                  <div className="text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-gray-500">尚未生成任何文案</p>
                    <p className="text-sm text-gray-400 mt-1">填寫基本資訊後點擊生成按鈕</p>
                  </div>
                ) : getFilteredCopies().length === 0 ? (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-2">{getTabInfo(activeTab).icon}</div>
                    <p className="text-gray-500">此類型尚未生成文案</p>
                    <p className="text-sm text-gray-400 mt-1">點擊其他 tab 查看已生成的文案</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {getFilteredCopies().map((copy) => (
                      <div key={copy.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                            copy.type === 'EDM' ? 'bg-purple-100 text-purple-700' :
                            copy.type === 'Messaging' ? 'bg-green-100 text-green-700' :
                            'bg-pink-100 text-pink-700'
                          }`}>
                            {copy.type}
                          </span>
                          <span className="text-xs text-gray-500">
                            {copy.createdAt.toLocaleTimeString()}
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{copy.title}</h3>
                        <div 
                          className="text-gray-700 text-sm leading-relaxed whitespace-pre-line"
                          dangerouslySetInnerHTML={{ __html: formatContentWithCTA(copy.content) }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

