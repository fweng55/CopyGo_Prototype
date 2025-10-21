'use client'

import { useState } from 'react'

interface Channel {
  id: string
  name: string
  type: string
  icon: string
  color: string
  isActive: boolean
  description: string
}

const channels: Channel[] = [
  {
    id: 'edm',
    name: 'Email',
    type: 'EDM',
    icon: 'email',
    color: 'purple',
    isActive: true,
    description: '專業的電子郵件行銷，適合正式商務溝通'
  },
  {
    id: 'line',
    name: 'LINE OA',
    type: 'Messaging',
    icon: 'line',
    color: 'green',
    isActive: true,
    description: 'LINE 官方帳號推播，觸及廣大用戶群'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    type: 'Social',
    icon: 'facebook',
    color: 'blue',
    isActive: false,
    description: 'Facebook 粉絲專頁發文，社群互動與分享'
  }
]

export default function FeatureFour() {
  const [channelStates, setChannelStates] = useState<Channel[]>(channels)
  const [isScheduling, setIsScheduling] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [scheduledChannels, setScheduledChannels] = useState<string[]>([])
  const [scheduledTime, setScheduledTime] = useState('')
  const [scheduledDate, setScheduledDate] = useState('')

  const activeChannelsCount = channelStates.filter(channel => channel.isActive).length

  const handleChannelToggle = (channelId: string) => {
    setChannelStates(prev => 
      prev.map(channel => 
        channel.id === channelId 
          ? { ...channel, isActive: !channel.isActive }
          : channel
      )
    )
  }

  const handleSchedule = async () => {
    const activeChannels = channelStates.filter(channel => channel.isActive)
    
    if (activeChannels.length === 0) {
      alert('請至少選擇一個頻道進行排程')
      return
    }

    if (!scheduledDate || !scheduledTime) {
      alert('請選擇排程發布時間')
      return
    }

    setIsScheduling(true)
    
    // 模擬排程過程
    setTimeout(() => {
      setScheduledChannels(activeChannels.map(ch => ch.name))
      setShowSuccessPopup(true)
      setIsScheduling(false)
    }, 2000)
  }

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false)
    setScheduledChannels([])
  }

  const getChannelColorClasses = (color: string, isActive: boolean) => {
    const colorMap = {
      purple: isActive ? 'bg-purple-100 text-purple-700 border-purple-200' : 'bg-gray-100 text-gray-500 border-gray-200',
      green: isActive ? 'bg-green-100 text-green-700 border-green-200' : 'bg-gray-100 text-gray-500 border-gray-200',
      blue: isActive ? 'bg-blue-100 text-blue-700 border-blue-200' : 'bg-gray-100 text-gray-500 border-gray-200'
    }
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-500 border-gray-200'
  }

  // 獲取當前時間和日期
  const getCurrentDateTime = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    
    return {
      date: `${year}-${month}-${day}`,
      time: `${hours}:${minutes}`
    }
  }

  const { date: currentDate, time: currentTime } = getCurrentDateTime()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* 頁面標題 */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">排程發布</h1>
          <p className="text-gray-600">選擇頻道並設定發布時間，系統將在指定時間自動發布內容</p>
        </div>

        {/* 頻道選擇區域 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">選擇發布頻道</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {channelStates.map((channel) => (
              <label
                key={channel.id}
                className={`border-2 rounded-xl p-4 transition-all duration-200 hover:shadow-md cursor-pointer ${
                  channel.isActive 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={channel.isActive}
                      onChange={() => handleChannelToggle(channel.id)}
                      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                  </div>
                  
                  <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                    {channel.icon === 'email' && (
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" rx="4" fill={channel.isActive ? "#8B5CF6" : "#9CA3AF"}/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="white" fill="none"/>
                      </svg>
                    )}
                    {channel.icon === 'line' && (
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" rx="4" fill={channel.isActive ? "#00C300" : "#9CA3AF"}/>
                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" fill="white"/>
                      </svg>
                    )}
                    {channel.icon === 'facebook' && (
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" rx="4" fill={channel.isActive ? "#1877F2" : "#9CA3AF"}/>
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="white"/>
                      </svg>
                    )}
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-gray-900">{channel.name}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getChannelColorClasses(channel.color, channel.isActive)}`}>
                        {channel.type}
                      </span>
                    </div>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* 時間選擇區域 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">設定發布時間</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">發布日期</label>
              <input
                type="date"
                value={scheduledDate}
                onChange={(e) => setScheduledDate(e.target.value)}
                min={currentDate}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">發布時間</label>
              <input
                type="time"
                value={scheduledTime}
                onChange={(e) => setScheduledTime(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-blue-800">
                系統將在指定時間自動發布內容到選中的頻道
              </p>
            </div>
          </div>
        </div>

        {/* 排程按鈕區域 */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">排程發布</h3>
            <p className="text-sm text-gray-600 mb-4">
              {activeChannelsCount > 0 
                ? `將排程發布到 ${activeChannelsCount} 個選中的頻道`
                : '請至少選擇一個頻道進行排程'
              }
            </p>
            <button
              onClick={handleSchedule}
              disabled={isScheduling || activeChannelsCount === 0}
              className={`px-8 py-4 rounded-lg font-medium text-white transition-all duration-200 ${
                isScheduling || activeChannelsCount === 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transform hover:scale-105'
              }`}
            >
              {isScheduling ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  排程發布
                </div>
              ) : (
                '排程發布'
              )}
            </button>
          </div>
        </div>

        {/* 成功排程 Popup */}
        {showSuccessPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-scale-in">
              <div className="text-center">
                {/* 成功圖標 */}
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                {/* 標題 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">排程成功！</h3>
                <p className="text-gray-600 mb-4">
                  已成功排程發布到 <span className="font-semibold text-orange-600">{scheduledChannels.length}</span> 個頻道
                </p>
                
                {/* 排程時間顯示 */}
                <div className="bg-orange-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-orange-800 font-medium">
                      {scheduledDate} {scheduledTime}
                    </span>
                  </div>
                </div>
                
                {/* 頻道列表 */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="space-y-2">
                    {scheduledChannels.map((channelName, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">{channelName}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* 關閉按鈕 */}
                <button
                  onClick={closeSuccessPopup}
                  className="w-full bg-orange-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  完成
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
