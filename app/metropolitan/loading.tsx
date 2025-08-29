export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="h-10 bg-gray-200 rounded w-96 mx-auto mb-4 animate-pulse"></div>
          <div className="w-24 h-1 bg-gray-200 mx-auto animate-pulse"></div>
        </div>

        <div className="space-y-16">
          {/* Document Links Loading */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <div className="h-8 bg-gray-200 rounded w-80 mb-8 animate-pulse"></div>
            <div className="space-y-3">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded flex-1 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Maps Loading */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <div className="h-8 bg-gray-200 rounded w-96 mx-auto mb-8 animate-pulse"></div>
            <div className="w-full h-96 bg-gray-200 rounded animate-pulse"></div>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <div className="h-8 bg-gray-200 rounded w-80 mx-auto mb-8 animate-pulse"></div>
            <div className="w-full h-96 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Text Content Loading */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <div className="space-y-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
