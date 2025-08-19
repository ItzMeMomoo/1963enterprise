"use client"
import { useLanguage } from "../contexts/LanguageContext"
import { Globe } from "lucide-react"

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage()

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
        <Globe size={16} />
        <span className="text-sm font-medium">{language === "id" ? "ID" : "EN"}</span>
      </button>

      <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
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
        </button>
      </div>
    </div>
  )
}

export default LanguageSwitcher
