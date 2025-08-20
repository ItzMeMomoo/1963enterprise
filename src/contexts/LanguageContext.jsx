"use client"

import { createContext, useContext, useState, useEffect } from "react"

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("id") // Default to Indonesian

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("preferred-language")
    if (savedLanguage && (savedLanguage === "id" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage)
    localStorage.setItem("preferred-language", newLanguage)
  }

  const value = {
    language,
    changeLanguage,
    isIndonesian: language === "id",
    isEnglish: language === "en",
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
