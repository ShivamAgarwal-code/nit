export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="h-8 bg-gray-200 rounded w-64 mx-auto animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <div className="w-32 h-40 bg-gray-200 rounded-lg mx-auto mb-4 animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3 mx-auto animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
