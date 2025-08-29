"use client"

import { useState } from "react"
import { Header } from "@/components/header"

export default function HistoryPage() {
  const [language, setLanguage] = useState<"en" | "mr">("en")

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-orange-500 mb-4">{language === "en" ? "History" : "इतिहास"}</h1>
            <h2 className="text-xl font-semibold text-gray-700 mb-8">
              {language === "en"
                ? "From Stone Age.... To The Evolution Of Mega City"
                : "पाषाण युगापासून.... महानगराच्या उत्क्रांतीपर्यंत"}
            </h2>
          </div>

          {/* Historical Content */}
          <div className="bg-white rounded-lg shadow-sm border p-8 space-y-6">
            <p className="text-gray-700 leading-relaxed text-justify">
              {language === "en"
                ? "Originally a habitat of Gonds and Adivasis whose Kingdom was known as Deogarh. The Kingdom was shifted to Nagpur in the year 1702 by Bakht Buland Shah, who named this capital as Nagpur after Nag River and Nag Tribes. It was ruled later by his son Raja Chand Sultan and then by the Bhosales. Nagpur which till then had remained unnoticed on the national map got transformed into landmark city."
                : "मूळतः गोंड आणि आदिवासींचे निवासस्थान ज्यांचे राज्य देवगड म्हणून ओळखले जात होते. १७०२ मध्ये बख्त बुलंद शाहाने राज्य नागपूरला हलवले आणि नाग नदी आणि नाग जमातींच्या नावावरून या राजधानीला नागपूर नाव दिले. नंतर त्याचा मुलगा राजा चांद सुलतान आणि त्यानंतर भोसले यांनी राज्य केले. नागपूर जे तोपर्यंत राष्ट्रीय नकाशावर दुर्लक्षित राहिले होते ते एक महत्त्वाचे शहर बनले."}
            </p>

            <p className="text-gray-700 leading-relaxed text-justify">
              {language === "en"
                ? "Raghuji Raje Bhonsale II was mainly instrumental in development gardens & lakes in the city. Nagpur thus came to be known as the city of lakes & Gardens. He brought orange plants from Salkot & Aurangabad and cultivated orange plantations in Nagpur. Since then Nagpur being recognised as Orange City. He also constructed important temples which even today tell tales of yesteryears."
                : "रघुजी राजे भोसले द्वितीय यांनी शहरात बागा आणि तलावांच्या विकासात मुख्य भूमिका बजावली. त्यामुळे नागपूर तलाव आणि बागांचे शहर म्हणून ओळखले जाऊ लागले. त्यांनी सालकोट आणि औरंगाबादहून संत्र्याची झाडे आणून नागपूरात संत्र्याची लागवड केली. तेव्हापासून नागपूर संत्र्यांचे शहर म्हणून ओळखले जाते. त्यांनी महत्त्वाची मंदिरे देखील बांधली जी आजही पूर्वीच्या कथा सांगतात."}
            </p>

            <p className="text-gray-700 leading-relaxed text-justify">
              {language === "en"
                ? "The British took over the reigns by defeating the Bhonsala dynasty in the historic battle of sitabuldi in the year 1817.Nagpur remained as capital till 1956."
                : "१८१७ मध्ये सितावर्डीच्या ऐतिहासिक लढाईत भोसले राजवंशाचा पराभव करून ब्रिटिशांनी सत्ता हाती घेतली. १९५६ पर्यंत नागपूर राजधानी राहिले."}
            </p>

            <p className="text-gray-700 leading-relaxed text-justify">
              {language === "en"
                ? "Realizing the location importance of Nagpur the British Government formulated various city plans and made several amendments in the original city plan of the King, to meet their requirement. During this process, the Nagpur Improvement Trust (NIT) was establishment to undertaken development of the city."
                : "नागपूरचे स्थानिक महत्त्व लक्षात घेऊन ब्रिटिश सरकारने विविध शहरी योजना तयार केल्या आणि त्यांच्या गरजा पूर्ण करण्यासाठी राजाच्या मूळ शहरी योजनेत अनेक सुधारणा केल्या. या प्रक्रियेदरम्यान, शहराचा विकास हाती घेण्यासाठी नागपूर सुधार न्यास (NIT) ची स्थापना करण्यात आली."}
            </p>

            <p className="text-gray-700 leading-relaxed text-justify">
              {language === "en"
                ? "In the later years, in spite of many ambitions plans being made for the City's infrastructural development, the progressive trend could not be sustained over a long period and the tale of Nagpur closely resembled that of a lost glory."
                : "नंतरच्या वर्षांत, शहराच्या पायाभूत सुविधांच्या विकासासाठी अनेक महत्त्वाकांक्षी योजना आखल्या गेल्या असूनही, प्रगतीशील प्रवृत्ती दीर्घकाळ टिकवता आली नाही आणि नागपूरची कहाणी हरवलेल्या वैभवाशी साम्य दाखवत होती."}
            </p>

            <p className="text-gray-700 leading-relaxed text-justify">
              {language === "en"
                ? "However, with emerging trend of the 90's and upliftment in the recent years, Nagpur has witnessed substantial initiative and steps being taken toward development a better planned and Modernised city."
                : "तथापि, ९० च्या दशकातील उदयोन्मुख प्रवृत्ती आणि अलिकडच्या वर्षांतील उन्नतीसह, नागपूरने एक चांगले नियोजित आणि आधुनिकीकृत शहर विकसित करण्याच्या दिशेने महत्त्वपूर्ण पुढाकार आणि पावले पाहिली आहेत."}
            </p>
          </div>

          {/* Language Toggle */}
          <div className="text-center mt-8">
            <button
              onClick={() => setLanguage((prev) => (prev === "en" ? "mr" : "en"))}
              className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              {language === "en" ? "मराठीत वाचा" : "Read in English"}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
