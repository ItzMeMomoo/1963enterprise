"use client"

import { Home, FileText, Building2, Mail, Newspaper, Menu, X } from 'lucide-react'
import { useState, useEffect } from "react"

const Header = ({ currentPage, setCurrentPage, setSelectedBusinessId, setSelectedNewsId }) => {
const [isScrolled, setIsScrolled] = useState(false)
const [scrollY, setScrollY] = useState(0)
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY
    setScrollY(currentScrollY)
    setIsScrolled(currentScrollY > 50)
  }
  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
}, [])

const scrollToSection = (sectionId) => {
  if (currentPage !== "home") {
    setCurrentPage("home")
    setSelectedBusinessId && setSelectedBusinessId(null)
    setSelectedNewsId && setSelectedNewsId(null)
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  } else {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  setIsMobileMenuOpen(false)
}

const handleUnitBisnisClick = () => {
  setCurrentPage("business-detail")
  setSelectedBusinessId && setSelectedBusinessId(null)
  setSelectedNewsId && setSelectedNewsId(null)
  setIsMobileMenuOpen(false)
}

const handleContactClick = () => {
  setCurrentPage("contact")
  setSelectedBusinessId && setSelectedBusinessId(null)
  setSelectedNewsId && setSelectedNewsId(null)
  setIsMobileMenuOpen(false)
}

const navigationItems = [
  {
    name: "Home",
    icon: Home,
    onClick: () => scrollToSection("hero"),
  },
  {
    name: "Tentang Kami",
    icon: FileText,
    onClick: () => scrollToSection("tentang"),
  },
  {
    name: "Unit Bisnis",
    icon: Building2,
    onClick: handleUnitBisnisClick,
  },
  {
    name: "Berita",
    icon: Newspaper,
    onClick: () => scrollToSection("berita-kegiatan"),
  },
]

// Different header styles based on page and scroll
const getHeaderStyles = () => {
  if (currentPage === "home") {
    return isScrolled ? "header-scrolled" : ""
  } else {
    if (scrollY < 100) {
      return "header-business-integrated"
    } else {
      return "header-business-floating"
    }
  }
}

const getHeaderContainer = () => {
  if (currentPage === "home") {
    return "pt-4 px-4"
  } else {
    if (scrollY < 100) {
      return "pt-0 px-0" // Full width, no padding
    } else {
      return "pt-4 px-4" // Padding when floating
    }
  }
}

return (
  <>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getHeaderContainer()}`}>
      {/* Main Header Container */}
      <div className={currentPage === "home" ? "max-w-7xl mx-auto" : scrollY < 100 ? "w-full" : "max-w-7xl mx-auto"}>
        <div className={`modern-header-container transition-all duration-500 ${getHeaderStyles()}`}>
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => {
              setCurrentPage("home")
              setSelectedBusinessId && setSelectedBusinessId(null)
              setSelectedNewsId && setSelectedNewsId(null)
            }}>
              <div className="logo-container">
                <img src="/1963logo.png" alt="1963 Enterprise Logo" className="h-10 w-auto" />
              </div>
              <div className="logo-text">
                <div className="text-2xl font-black text-blue-600 leading-tight">1963</div>
                <div className="text-sm font-semibold text-gray-600 leading-tight tracking-wide">enterprise</div>
              </div>
            </div>

            {/* Right Side - Navigation + Contact Button */}
            <div className="flex items-center space-x-3">
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-1">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon
                  const isActive =
                    (currentPage === "home" && item.name === "Home") ||
                    (currentPage === "business-detail" && item.name === "Unit Bisnis") ||
                    (currentPage === "business-unit" && item.name === "Unit Bisnis") ||
                    (currentPage === "news-detail" && item.name === "Berita")

                  return (
                    <button
                      key={item.name}
                      onClick={item.onClick}
                      className={`nav-item group flex items-center space-x-2 px-4 py-3 rounded-2xl font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:bg-blue-50/80 backdrop-blur-sm ${
                        isActive ? "bg-blue-50 text-blue-600" : ""
                      }`}
                    >
                      <div className="nav-icon-container">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-sm">{item.name}</span>
                    </button>
                  )
                })}
              </nav>

              {/* Contact Button */}
              <button
                onClick={handleContactClick}
                className="contact-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-2xl font-bold flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group ml-2"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">Kontak</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden mobile-menu-btn p-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-300"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && (
      <div className="fixed inset-0 z-40 lg:hidden">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Mobile Menu */}
        <div className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="p-6 space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon
              const isActive =
                (currentPage === "home" && item.name === "Home") ||
                (currentPage === "business-detail" && item.name === "Unit Bisnis") ||
                (currentPage === "business-unit" && item.name === "Unit Bisnis") ||
                (currentPage === "news-detail" && item.name === "Berita")

              return (
                <button
                  key={item.name}
                  onClick={item.onClick}
                  className={`w-full flex items-center space-x-4 px-4 py-4 rounded-2xl font-semibold transition-all duration-300 group ${
                    isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/80"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      isActive ? "bg-blue-100" : "bg-blue-100 group-hover:bg-blue-200"
                    }`}
                  >
                    <IconComponent className="w-5 h-5 text-blue-600" />
                  </div>
                  <span>{item.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    )}
  </>
)
}

export default Header
