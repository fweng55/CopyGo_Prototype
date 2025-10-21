export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8">

        {/* 主標題 */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          CopyGo.ai
        </h1>

        {/* 副標題 */}
        <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-8 font-light">
          <span className="text-blue-600 font-semibold">Smarter Copy</span>
          <span className="mx-2 text-gray-400">—</span>
          <span className="text-purple-600 font-semibold">Faster Reach</span>
        </div>

        {/* 裝飾性元素 */}
        <div className="flex justify-center space-x-2 mb-12">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>

        {/* 特色標語 */}
        <div className="max-w-2xl mx-auto">
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-500 leading-relaxed font-light">
            智能文案、一鍵發布
          </p>
        </div>
      </div>
    </div>
  )
}

