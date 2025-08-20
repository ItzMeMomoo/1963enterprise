"use client"
import { useLanguage } from "../contexts/LanguageContext"
import { Globe } from "lucide-react"

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage()

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 hover:text-blue-600 transition-all duration-300 shadow-sm">
        <Globe size={16} />
        <span className="text-sm font-medium">{language === "id" ? "ID" : "EN"}</span>
        <svg
          className="w-3 h-3 ml-1 transition-transform duration-200 group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[200px]">
        <button
          onClick={() => changeLanguage("id")}
          className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3 ${
            language === "id" ? "bg-blue-50 text-blue-600" : "text-gray-700"
          }`}
        >
          <span className="text-lg">🇮🇩</span>
          <div>
            <div className="font-medium">Bahasa Indonesia</div>
            <div className="text-xs text-gray-500">Indonesian</div>
          </div>
          {language === "id" && (
            <svg className="w-4 h-4 ml-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>

        <button
          onClick={() => changeLanguage("en")}
          className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3 ${
            language === "en" ? "bg-blue-50 text-blue-600" : "text-gray-700"
          }`}
        >
          <span className="text-lg">🇺🇸</span>
          <div>
            <div className="font-medium">English</div>
            <div className="text-xs text-gray-500">English</div>
          </div>
          {language === "en" && (
            <svg className="w-4 h-4 ml-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

export default LanguageSwitcher
