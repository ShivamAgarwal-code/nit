"use client"

import { useState } from "react"
import { Header } from "@/components/header"

export default function ChairmanMessagePage() {
  const [language, setLanguage] = useState<"en" | "mr">("en")

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border">
          {/* Header */}
          <div className="border-b border-gray-200 p-6">
            <h1 className="text-2xl font-bold text-orange-500 text-center">
              {language === "en" ? "Chairman's Message" : "अध्यक्षांचा संदेश"}
            </h1>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            <p className="text-gray-700 leading-relaxed">{language === "en" ? "Dear Citizens," : "प्रिय नागरिकांनो,"}</p>

            <p className="text-gray-700 leading-relaxed text-justify">
              {language === "en"
                ? "Welcome to the website of Nagpur Improvement Trust. This site is designed to provide accurate and easy to use information on various services and programs of NIT. We hope that this website shall be useful and helpful to you."
                : "नागपूर सुधार न्यासाच्या वेबसाइटवर आपले स्वागत आहे. ही साइट NIT च्या विविध सेवा आणि कार्यक्रमांबद्दल अचूक आणि वापरण्यास सोपी माहिती प्रदान करण्यासाठी डिझाइन केली आहे. आम्हाला आशा आहे की ही वेबसाइट तुमच्यासाठी उपयुक्त आणि सहाय्यक असेल."}
            </p>

            <p className="text-gray-700 leading-relaxed text-justify">
              {language === "en"
                ? "The citizens who have chosen Nagpur as their home, have already appreciated the role NIT has played in planned development of the city since 1936. In addition to planned development, NIT provides many important services including regularization of un-authorized layouts, construction of roads, laying of storm water drains, water pipelines and sewers, beautification of lakes and gardens to name a few. As a result of a long-time philosophy of innovation, NIT leads the way in providing services in the most efficient ways possible. Continued innovation, including technology investments, process reengineering, and the use of private contractors rather than public payrolls, makes our services the least expensive possible."
                : "ज्या नागरिकांनी नागपूरला त्यांचे घर म्हणून निवडले आहे, त्यांनी 1936 पासून शहराच्या नियोजित विकासात NIT ने बजावलेल्या भूमिकेचे आधीच कौतुक केले आहे. नियोजित विकासाव्यतिरिक्त, NIT अनेक महत्त्वाच्या सेवा प्रदान करते ज्यात अनधिकृत लेआउटचे नियमितीकरण, रस्त्यांचे बांधकाम, वादळी पाण्याचे नाले, पाण्याच्या पाइपलाइन आणि गटारे टाकणे, तलाव आणि बागांचे सुशोभीकरण यासह काही नावे घेता येतील. नवकल्पनाच्या दीर्घकालीन तत्त्वज्ञानाचा परिणाम म्हणून, NIT शक्य तितक्या कार्यक्षम मार्गांनी सेवा प्रदान करण्यात आघाडीवर आहे."}
            </p>

            <p className="text-gray-700 leading-relaxed text-justify">
              {language === "en"
                ? "Unlike many cities, Nagpur has over 300 years of rich history since its inception. The historic downtown and adjoining heritage neighborhood, with its many historic sites displaying architecture of the 20th century and ultra modern hi-tech dwellings provides a unique blend to the city. Excellent road network, parks, forest reserves, recreation facilities, water reservoirs, abundant protected open spaces, youth sport groups, fine schools, and the products and services provided by a growing business community are just some of the things that make Nagpur the best place to live."
                : "अनेक शहरांच्या विपरीत, नागपूरचा स्थापनेपासून 300 वर्षांहून अधिक समृद्ध इतिहास आहे. ऐतिहासिक डाउनटाउन आणि लगतचा वारसा परिसर, 20व्या शतकातील वास्तुकला आणि अत्याधुनिक हाय-टेक निवासस्थाने दर्शविणारी अनेक ऐतिहासिक स्थळे शहराला एक अनोखे मिश्रण प्रदान करतात."}
            </p>

            <p className="text-gray-700 leading-relaxed text-justify">
              {language === "en"
                ? "The residents of Nagpur can be rest assured that the NIT Board, staff, and myself are proactive in taking steps to maintain and improve the quality of life for our residents. Positive accomplishments are realized by the combined efforts of dedicated support of NIT Board, citizen's advisory committees, community organizations, residents, and employees. You can be assured that together we can continue to work to make our community a special place. We are happy to have you as a part of the community."
                : "नागपूरचे रहिवासी खात्री बाळगू शकतात की NIT बोर्ड, कर्मचारी आणि मी आमच्या रहिवाशांच्या जीवनमानाची देखभाल आणि सुधारणा करण्यासाठी सक्रिय पावले उचलत आहोत. NIT बोर्ड, नागरिक सल्लागार समित्या, समुदायिक संस्था, रहिवासी आणि कर्मचारी यांच्या समर्पित समर्थनाच्या एकत्रित प्रयत्नांमुळे सकारात्मक उपलब्धी साध्य होतात."}
            </p>

            {/* Signature */}
            <div className="text-right mt-8 pt-6">
              <p className="text-gray-800 font-semibold">
                {language === "en" ? "Shri. Sanjay Meena" : "श्री. संजय मीणा"}
              </p>
              <p className="text-gray-600">{language === "en" ? "Chairman" : "अध्यक्ष"}</p>
              <p className="text-gray-600">{language === "en" ? "Nagpur Improvement Trust" : "नागपूर सुधार न्यास"}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
