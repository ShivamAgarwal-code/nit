import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function LandmarkJudgmentPage() {
  const judgments = [
    {
      id: 1,
      title:
        "Maharashtra Rashtra Bhasha Sabha (Wockhart Hospital) decision by Hon. High Court, Nagpur, Court Order No. 47/ 2013",
      url: "/documents/court-order-47-2013.pdf",
    },
    {
      id: 2,
      title: "Judgment No. 1 Dated 04/02/2016",
      url: "/documents/judgment-1-04-02-2016.pdf",
    },
    {
      id: 3,
      title: "Judgment No. 2 Dated 26/09/2002",
      url: "/documents/judgment-2-26-09-2002.pdf",
    },
    {
      id: 4,
      title: "Judgment No. 3 Dated 18/03/1997",
      url: "/documents/judgment-3-18-03-1997.pdf",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Landmark Judgments</h1>

          {/* Judgments List */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <div className="space-y-6">
              {judgments.map((judgment) => (
                <div key={judgment.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                  <Link
                    href={judgment.url}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 text-lg leading-relaxed block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {judgment.title}
                  </Link>
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                <strong>Note:</strong> These landmark judgments are important legal decisions that have shaped the
                operations and policies of the Nagpur Improvement Trust. Click on any judgment to view the complete
                document.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
