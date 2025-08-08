"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import BusinessCatalogSection from "./components/BusinessCatalogSection"
import NewsSection from "./components/NewsSection"
import NewsDetailPage from "./components/NewsDetailPage"
import BusinessDetailPage from "./components/BusinessDetailPage"
import BusinessUnit from "./components/BusinessUnit"
import ContactPage from "./components/ContactPage"
import Footer from "./components/Footer"
import "./App.css"

function App() {
const [currentPage, setCurrentPage] = useState("home")
const [selectedBusinessId, setSelectedBusinessId] = useState(null)
const [selectedNewsId, setSelectedNewsId] = useState(null)

// Scroll to top when page changes
useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}, [currentPage])

// Handle CTA button click from hero section
const handleExploreClick = () => {
  // Smooth scroll to business catalog section first
  const catalogSection = document.getElementById('unit-bisnis')
  if (catalogSection && currentPage === "home") {
    catalogSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
    
    // After a delay, show the "Lihat Unit Bisnis Lengkap" button highlight
    setTimeout(() => {
      const ctaButton = catalogSection.querySelector('button')
      if (ctaButton) {
        ctaButton.classList.add('animate-pulse')
        setTimeout(() => {
          ctaButton.classList.remove('animate-pulse')
        }, 2000)
      }
    }, 1000)
  } else {
    // If not on home page, go to business detail page
    setCurrentPage("business-detail")
    setSelectedBusinessId(null)
  }
}

const renderPage = () => {
  switch (currentPage) {
    case "business-detail":
      return (
        <BusinessDetailPage 
          onBusinessSelect={(id) => {
            if (id) {
              setSelectedBusinessId(id)
              setCurrentPage("business-unit")
            }
          }}
        />
      )
    case "business-unit":
      return (
        <BusinessUnit 
          selectedBusinessId={selectedBusinessId} 
          onBack={() => {
            setCurrentPage("business-detail")
            setSelectedBusinessId(null)
          }}
        />
      )
    case "news-detail":
      return (
        <NewsDetailPage 
          selectedNewsId={selectedNewsId} 
          onBack={() => {
            setCurrentPage("home")
            setSelectedNewsId(null)
          }}
        />
      )
    case "contact":
      return <ContactPage />
    default:
      return (
        <>
          <HeroSection onExploreClick={handleExploreClick} />
          <AboutSection />
          <BusinessCatalogSection onBusinessSelect={(id) => {
            if (id) {
              setSelectedBusinessId(id)
              setCurrentPage("business-unit")
            } else {
              setCurrentPage("business-detail")
            }
          }} />
          <NewsSection onNewsSelect={(id) => {
            setSelectedNewsId(id)
            setCurrentPage("news-detail")
          }} />
        </>
      )
  }
}

return (
  <div className="App">
    <Header 
      currentPage={currentPage} 
      setCurrentPage={setCurrentPage}
      setSelectedBusinessId={setSelectedBusinessId}
      setSelectedNewsId={setSelectedNewsId}
    />
    {renderPage()}
    {(currentPage === "home" || currentPage === "contact" || currentPage === "business-detail" || currentPage === "business-unit" || currentPage === "news-detail") && <Footer />}
  </div>
)
}

export default App
