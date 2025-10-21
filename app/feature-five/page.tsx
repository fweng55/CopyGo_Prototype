'use client'

import { useState } from 'react'

interface CTAStats {
  id: string
  name: string
  type: string
  clicks: number
  impressions: number
  ctr: number
  conversion: number
  revenue: number
  trend: 'up' | 'down' | 'stable'
  trendValue: number
}

interface ChannelStats {
  channel: string
  totalClicks: number
  totalImpressions: number
  avgCTR: number
  totalRevenue: number
  topCTA: string
  performance: 'excellent' | 'good' | 'average' | 'poor'
}

const ctaStats: CTAStats[] = [
  {
    id: '1',
    name: '立即搶購',
    type: 'Email',
    clicks: 1250,
    impressions: 15000,
    ctr: 8.33,
    conversion: 3.2,
    revenue: 15625,
    trend: 'up',
    trendValue: 15.2
  },
  {
    id: '2',
    name: '立即購買',
    type: 'Line',
    clicks: 890,
    impressions: 12000,
    ctr: 7.42,
    conversion: 4.5,
    revenue: 12450,
    trend: 'up',
    trendValue: 8.7
  },
  {
    id: '3',
    name: '私訊「我要優惠」',
    type: 'FB',
    clicks: 2100,
    impressions: 25000,
    ctr: 8.4,
    conversion: 5.2,
    revenue: 18900,
    trend: 'up',
    trendValue: 23.5
  },
  {
    id: '4',
    name: '回覆「要」',
    type: 'Line',
    clicks: 650,
    impressions: 8000,
    ctr: 8.13,
    conversion: 3.8,
    revenue: 8750,
    trend: 'down',
    trendValue: -5.2
  },
  {
    id: '5',
    name: '客服專線：02-1234-5678',
    type: 'Email',
    clicks: 320,
    impressions: 5000,
    ctr: 6.4,
    conversion: 2.1,
    revenue: 4200,
    trend: 'stable',
    trendValue: 0.3
  },
  {
    id: '6',
    name: '專屬優惠碼：SAVE20',
    type: 'FB',
    clicks: 1800,
    impressions: 20000,
    ctr: 9.0,
    conversion: 6.8,
    revenue: 16200,
    trend: 'up',
    trendValue: 31.8
  }
]

const channelStats: ChannelStats[] = [
  {
    channel: 'Email',
    totalClicks: 1570,
    totalImpressions: 20000,
    avgCTR: 7.85,
    totalRevenue: 19825,
    topCTA: '立即搶購',
    performance: 'excellent'
  },
  {
    channel: 'LINE OA',
    totalClicks: 1540,
    totalImpressions: 20000,
    avgCTR: 7.7,
    totalRevenue: 21200,
    topCTA: '私訊「我要優惠」',
    performance: 'excellent'
  },
  {
    channel: 'Facebook',
    totalClicks: 3900,
    totalImpressions: 45000,
    avgCTR: 8.67,
    totalRevenue: 35100,
    topCTA: '專屬優惠碼：SAVE20',
    performance: 'excellent'
  }
]

export default function FeatureFive() {
  const [selectedPeriod, setSelectedPeriod] = useState('7d')
  const [selectedChannel, setSelectedChannel] = useState('all')

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'excellent': return 'text-green-600 bg-green-100'
      case 'good': return 'text-blue-600 bg-blue-100'
      case 'average': return 'text-yellow-600 bg-yellow-100'
      case 'poor': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getPerformanceText = (performance: string) => {
    switch (performance) {
      case 'excellent': return '優秀'
      case 'good': return '良好'
      case 'average': return '一般'
      case 'poor': return '需改善'
      default: return '未知'
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗'
      case 'down': return '↘'
      case 'stable': return '→'
      default: return '→'
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600'
      case 'down': return 'text-red-600'
      case 'stable': return 'text-gray-600'
      default: return 'text-gray-600'
    }
  }

  const filteredCTAs = selectedChannel === 'all' 
    ? ctaStats 
    : ctaStats.filter(cta => cta.type.toLowerCase() === selectedChannel.toLowerCase())

  const totalClicks = filteredCTAs.reduce((sum, cta) => sum + cta.clicks, 0)
  const totalImpressions = filteredCTAs.reduce((sum, cta) => sum + cta.impressions, 0)
  const avgCTR = totalImpressions > 0 ? (totalClicks / totalImpressions * 100) : 0

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* 頁面標題 */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">數據分析</h1>
          <p className="text-gray-600">分析 CTA 和 CTR 表現，優化您的行銷策略</p>
        </div>

        {/* 篩選器 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">時間範圍</label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="7d">過去 7 天</option>
                <option value="30d">過去 30 天</option>
                <option value="90d">過去 90 天</option>
                <option value="1y">過去 1 年</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">頻道</label>
              <select
                value={selectedChannel}
                onChange={(e) => setSelectedChannel(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">全部頻道</option>
                <option value="email">Email</option>
                <option value="line">Line</option>
                <option value="fb">Facebook</option>
              </select>
            </div>
          </div>
        </div>

        {/* 總覽統計 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">總點擊數</p>
                <p className="text-2xl font-bold text-gray-900">{totalClicks.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">總曝光數</p>
                <p className="text-2xl font-bold text-gray-900">{totalImpressions.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">平均 CTR</p>
                <p className="text-2xl font-bold text-gray-900">{avgCTR.toFixed(2)}%</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">平均 CVR</p>
                <p className="text-2xl font-bold text-gray-900">
                  {filteredCTAs.length > 0 
                    ? (filteredCTAs.reduce((sum, cta) => sum + cta.conversion, 0) / filteredCTAs.length).toFixed(2)
                    : '0.00'
                  }%
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* CTA 詳細分析 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">CTA 詳細分析</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">CTA 名稱</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">頻道</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">點擊數</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">曝光數</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">CTR</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">CVR</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-700">趨勢</th>
                </tr>
              </thead>
              <tbody>
                {filteredCTAs.map((cta) => (
                  <tr key={cta.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="font-medium text-gray-900">{cta.name}</div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        cta.type === 'Email' ? 'bg-purple-100 text-purple-700' :
                        cta.type === 'Line' ? 'bg-green-100 text-green-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {cta.type}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right font-medium text-gray-900">
                      {cta.clicks.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-right text-gray-600">
                      {cta.impressions.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-right font-medium text-gray-900">
                      {cta.ctr.toFixed(2)}%
                    </td>
                    <td className="py-4 px-4 text-right font-medium text-gray-900">
                      {cta.conversion.toFixed(1)}%
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`text-sm font-medium ${getTrendColor(cta.trend)}`}>
                        {getTrendIcon(cta.trend)} {cta.trendValue > 0 ? '+' : ''}{cta.trendValue.toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 頻道表現分析 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {channelStats.map((channel) => (
            <div key={channel.channel} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{channel.channel}</h3>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getPerformanceColor(channel.performance)}`}>
                  {getPerformanceText(channel.performance)}
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">點擊數</span>
                  <span className="font-medium text-gray-900">{channel.totalClicks.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">曝光數</span>
                  <span className="font-medium text-gray-900">{channel.totalImpressions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">平均 CTR</span>
                  <span className="font-medium text-gray-900">{channel.avgCTR.toFixed(2)}%</span>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <span className="text-sm text-gray-600">最佳 CTA</span>
                  <p className="text-sm font-medium text-gray-900 mt-1">{channel.topCTA}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
