"use client"

import { ArrowRight, Star, Clock, MapPin, Search, X, Filter } from 'lucide-react'
import { useState, useEffect, useRef } from "react"

const BusinessDetailPage = ({ onBusinessSelect }) => {
  const [activeFilter, setActiveFilter] = useState("Semua")
  const [searchQuery, setSearchQuery] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const searchRef = useRef(null)

  const categories = [
    "Semua",
    "Retail & Produk",
    "Kuliner & Kafe",
    "Akomodasi Penginapan & Sewa Gedung",
    "Layanan Harian & Kebersihan",
    "Agribisnis & Teaching Factory",
    "Kantin Area Kampus",
  ]

  const businessUnits = [
    {
      id: 1,
      name: "Daily Us",
      category: "Retail & Produk",
      description:
        "Convenience store modern yang menyediakan berbagai kebutuhan sehari-hari mahasiswa dengan harga terjangkau yang dapat dijangkau mahasiswa",
      image: "/dailyus.jpeg",
      tags: ["Retail", "Produk", "Kopi"],
      buttonColor: "purple",
      location: "Kampus IPB",
      hours: "07:00-22:00",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Botani Mart",
      category: "Retail & Produk",
      description:
        "Toko pertanian modern yang menjual alat buah, alat pertanian, dan berbagai kebutuhan pertanian lainnya dengan harga terjangkau",
      image: "/botanimart.jpg",
      tags: ["Pertanian", "Alat", "Modern"],
      buttonColor: "purple",
      location: "Kampus IPB",
      hours: "08:00-17:00",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Botani Merchandise IPB",
      category: "Retail & Produk",
      description:
        "Toko resmi penjualan merchandise IPB seperti jaket, topi, dan kaos dengan berbagai desain menarik dan berkualitas tinggi",
      image: "/ipbmerch.jpg",
      tags: ["Merchandise", "IPB", "Resmi"],
      buttonColor: "purple",
      location: "Kampus IPB",
      hours: "08:00-17:00",
      rating: 4.7,
    },
    {
      id: 4,
      name: "BreadCast",
      category: "Kuliner & Kafe",
      description:
        "Toko roti yang kue berbeda dengan panganan lokal tanpa pengawet, seperti singkong dan jagung. Tersedia juga minuman juga yang sehat dan bergizi",
      image: "/breadcast.jpg",
      tags: ["Bakery", "Roti", "Sehat"],
      buttonColor: "orange",
      location: "Kampus IPB",
      hours: "06:00-20:00",
      rating: 4.7,
    },
    {
      id: 5,
      name: "The 63 Coffee House",
      category: "Kuliner & Kafe",
      description:
        "Kafe tempat yang menyajikan menu lengkap dari makanan berat seperti nasi-nasi, bakmi, pasta hingga kue dan minuman coffee dan non-coffee",
      image: "/namtiga.jpg",
      tags: ["Kafe", "Premium", "Coffee"],
      buttonColor: "orange",
      location: "Kampus IPB",
      hours: "08:00-21:00",
      rating: 4.9,
    },
    {
      id: 6,
      name: "Resto Taman Koleksi",
      category: "Kuliner & Kafe",
      description:
        "Kafe dan restoran yang juga menyediakan layanan meeting room, VIP room, serta pemesanan catering untuk berbagai acara",
      image: "/takol.jpg",
      tags: ["Resto", "Meeting", "Catering"],
      buttonColor: "orange",
      location: "Taman Koleksi",
      hours: "10:00-22:00",
      rating: 4.5,
    },
    {
      id: 7,
      name: "63 Coffee Lite",
      category: "Kuliner & Kafe",
      description:
        "Kafe yang menyajikan kopi di tempat Student Service Center dengan berbagai menu kopi, minuman non kopi, dan berbagai pastry",
      image: "/63lite.jpg",
      tags: ["Kopi", "Pastry", "Makanan"],
      buttonColor: "orange",
      location: "Student Service Center",
      hours: "07:00-21:00",
      rating: 4.6,
    },
    {
      id: 8,
      name: "Kantong",
      category: "Kuliner & Kafe",
      description:
        "Kantin area yang menyajikan berbagai pilihan makanan berat dengan harga terjangkau dan cita rasa yang berkesan di kawasan IPB",
      image: "/kantong.jpg",
      tags: ["Kantin", "Terjangkau", "Makanan"],
      buttonColor: "orange",
      location: "Kawasan IPB",
      hours: "06:00-20:00",
      rating: 4.4,
    },
    {
      id: 9,
      name: "Wisma Landhuis",
      category: "Akomodasi Penginapan & Sewa Gedung",
      description: "Wisma tempat tinggal sementara akuntansi dan berbagai fasilitas penunjang dan ruang rapat",
      image: "/landhuis.png",
      tags: ["Wisma", "Penginapan", "Meeting"],
      buttonColor: "blue",
      location: "Kampus IPB",
      hours: "24 Jam",
      rating: 4.3,
    },
    {
      id: 10,
      name: "Asrama Internasional",
      category: "Akomodasi Penginapan & Sewa Gedung",
      description: "Penginapan untuk mahasiswa asing dan tamu kampus dengan fasilitas kamar lengkap dan suasana nyaman",
      image: "/AI.jpg",
      tags: ["Asrama", "Internasional", "Mahasiswa"],
      buttonColor: "blue",
      location: "Kampus IPB",
      hours: "24 Jam",
      rating: 4.6,
    },
    {
      id: 11,
      name: "Gedung Alumni IPB",
      category: "Akomodasi Penginapan & Sewa Gedung",
      description: "Gedung serbaguna untuk gathering, seminar, dan berbagai acara besar lainnya",
      image: "/gedungalumni.jpg",
      tags: ["Gedung", "Seminar", "Gathering"],
      buttonColor: "blue",
      location: "Kampus IPB",
      hours: "08:00-22:00",
      rating: 4.5,
    },
    {
      id: 12,
      name: "Daily Wash 63",
      category: "Layanan Harian & Kebersihan",
      description:
        "Laundry harian yang menyajikan kebutuhan cuci pakaian mahasiswa dengan tarif sesuai dengan kemampuan mahasiswa",
      image: "/dailywash.jpg",
      tags: ["Laundry", "Harian", "Terjangkau"],
      buttonColor: "red",
      location: "Kampus IPB",
      hours: "07:00-21:00",
      rating: 4.2,
    },
    {
      id: 13,
      name: "CARe Wash",
      category: "Layanan Harian & Kebersihan",
      description:
        "Tempat cuci kendaraan yang menyediakan layanan detailing dan pembersihan kendaraan dengan sistem modern terpadu",
      image: "/carewash.jpeg",
      tags: ["Cuci Mobil", "Detailing", "Modern"],
      buttonColor: "red",
      location: "Kampus IPB",
      hours: "08:00-17:00",
      rating: 4.5,
    },
    {
      id: 14,
      name: "Think Fresh",
      category: "Agribisnis & Teaching Factory",
      description:
        "Unit agribisnis yang menyediakan dan memasarkan sayuran organik dan non-organik ke pasar-pasar serta konsumen akhir",
      image: "/Thinkfresh.png",
      tags: ["Organik", "Sayuran", "Fresh"],
      buttonColor: "green",
      location: "Teaching Factory",
      hours: "08:00-17:00",
      rating: 4.8,
    },
    {
      id: 15,
      name: "Closed House System",
      category: "Agribisnis & Teaching Factory",
      description:
        "Pemeliharaan ayam modern dengan teknologi terdepan berbasis teknologi otomatis. Juga berbagai teknologi sebagai pembelajaran",
      image: "/closedhouse.jpg",
      tags: ["Ayam", "Modern", "Teknologi"],
      buttonColor: "green",
      location: "Teaching Factory",
      hours: "24 Jam",
      rating: 4.4,
    },
    {
      id: 16,
      name: "Kantin",
      category: "Kantin Area Kampus",
      description:
        "Pusat layanan mahasiswa dengan berbagai pilihan makanan dan minuman yang terjangkau dan sehat dengan cita rasa yang lezat",
      image: "/kantin.png",
      tags: ["Kantin", "Terjangkau", "Mahasiswa"],
      buttonColor: "pink",
      location: "Area Kampus",
      hours: "06:00-21:00",
      rating: 4.3,
    },
  ]

  // Enhanced search function - prioritizes name matches from beginning of words
  const searchBusinesses = (query) => {
    if (!query.trim()) return businessUnits

    const searchTerm = query.toLowerCase().trim()

    return businessUnits
      .filter((business) => {
        // Priority 1: Name starts with search term
        const nameStartsWith = business.name.toLowerCase().startsWith(searchTerm)

        // Priority 2: Any word in name starts with search term
        const nameWordsStartWith = business.name
          .toLowerCase()
          .split(" ")
          .some((word) => word.startsWith(searchTerm))

        // Priority 3: Category matches
        const categoryMatches = business.category.toLowerCase().includes(searchTerm)

        // Priority 4: Tags match (exact word match)
        const tagMatches = business.tags.some((tag) => tag.toLowerCase().startsWith(searchTerm))

        // Priority 5: Description contains search term (as whole words)
        const descriptionMatches = business.description.toLowerCase().includes(searchTerm)

        return nameStartsWith || nameWordsStartWith || categoryMatches || tagMatches || descriptionMatches
      })
      .sort((a, b) => {
        // Sort by relevance: name matches first, then others
        const aNameStarts = a.name.toLowerCase().startsWith(searchTerm)
        const bNameStarts = b.name.toLowerCase().startsWith(searchTerm)

        if (aNameStarts && !bNameStarts) return -1
        if (!aNameStarts && bNameStarts) return 1

        const aWordStarts = a.name
          .toLowerCase()
          .split(" ")
          .some((word) => word.startsWith(searchTerm))
        const bWordStarts = b.name
          .toLowerCase()
          .split(" ")
          .some((word) => word.startsWith(searchTerm))

        if (aWordStarts && !bWordStarts) return -1
        if (!aWordStarts && bWordStarts) return 1

        return 0
      })
  }

  // Get search suggestions
  const getSearchSuggestions = (query) => {
    if (!query.trim() || query.length < 2) return []

    const searchTerm = query.toLowerCase().trim()
    const suggestions = businessUnits
      .filter(
        (business) =>
          business.name.toLowerCase().includes(searchTerm) || business.category.toLowerCase().includes(searchTerm),
      )
      .slice(0, 5)

    return suggestions
  }

  const getButtonStyles = (color) => {
    const styles = {
      purple: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      orange: "bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600",
      blue: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      green: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      red: "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
      pink: "bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700",
    }
    return styles[color] || styles.orange
  }

  const getCategoryBadgeColor = (color) => {
    const styles = {
      purple: "bg-purple-50 text-purple-700 border-purple-200",
      orange: "bg-orange-50 text-orange-700 border-orange-200",
      blue: "bg-blue-50 text-blue-700 border-blue-200",
      green: "bg-green-50 text-green-700 border-green-200",
      red: "bg-red-50 text-red-700 border-red-200",
      pink: "bg-pink-50 text-pink-700 border-pink-200",
    }
    return styles[color] || styles.orange
  }

  // Filter businesses based on category and search query
  const searchResults = searchBusinesses(searchQuery)
  const filteredBusinesses =
    activeFilter === "Semua" ? searchResults : searchResults.filter((business) => business.category === activeFilter)

  const suggestions = getSearchSuggestions(searchQuery)

  const clearSearch = () => {
    setSearchQuery("")
    setShowSuggestions(false)
  }

  const handleSuggestionClick = (businessName) => {
    setSearchQuery(businessName)
    setShowSuggestions(false)
  }

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      {/* Enhanced Hero Section with Curved Design */}
      <div className="relative pt-20 pb-12 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100"></div>

          {/* Floating Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-orange-300/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-blue-300/20 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-purple-200/30 to-purple-300/20 rounded-full blur-lg animate-pulse delay-300"></div>

          {/* Curved Bottom */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              className="relative block w-full h-20"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="fill-white/80"
              ></path>
            </svg>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Enhanced Title Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mb-6"></div>

            <h1 className="text-5xl lg:text-6xl font-black text-gray-800 mb-6 leading-tight">
              Katalog Lengkap{" "}
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Unit Bisnis
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              Jelajahi semua unit bisnis 1963 Enterprise yang tersedia di berbagai kategori
            </p>

            {/* Decorative Elements */}
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>

          {/* Enhanced Search and Filter Section */}
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white/50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%236366f1' fillOpacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>

            <div className="relative flex flex-col lg:flex-row gap-6 items-start lg:items-center">
              {/* Compact Search Bar */}
              <div className="w-full lg:w-80 flex-shrink-0" ref={searchRef}>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Cari nama unit bisnis..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                      setShowSuggestions(e.target.value.length >= 2)
                    }}
                    onFocus={() => setShowSuggestions(searchQuery.length >= 2)}
                    className="w-full pl-10 pr-10 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 focus:outline-none bg-white text-gray-700 placeholder-gray-400 font-medium transition-all duration-300 shadow-sm focus:shadow-md text-sm"
                  />
                  {searchQuery && (
                    <button
                      onClick={clearSearch}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                      aria-label="Clear search"
                    >
                      <X className="w-3 h-3 text-gray-500" />
                    </button>
                  )}

                  {/* Compact Search Suggestions */}
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-20 max-h-48 overflow-y-auto">
                      {suggestions.map((business) => (
                        <div
                          key={business.id}
                          className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-200"
                          onClick={() => handleSuggestionClick(business.name)}
                        >
                          <div className="font-semibold text-gray-800 text-sm">{business.name}</div>
                          <div className="text-xs text-gray-500 mt-1">{business.category}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Compact Divider */}
              <div className="hidden lg:block w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

              {/* Compact Category Filters */}
              <div className="flex-1 w-full">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
                    <Filter className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-bold text-gray-700">Filter Kategori</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      className={`px-3 py-2 rounded-xl font-semibold text-xs transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md ${
                        activeFilter === category
                          ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-md shadow-orange-200"
                          : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-orange-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Compact Search Results Info */}
            {searchQuery && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
                  <p className="text-gray-600 font-semibold text-sm">
                    Menampilkan {filteredBusinesses.length} hasil untuk "{searchQuery}"
                    {activeFilter !== "Semua" && ` dalam kategori "${activeFilter}"`}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Business Units Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBusinesses.map((unit, index) => (
            <div
              key={unit.id}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] overflow-hidden border border-white/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={unit.image || "/placeholder.svg"}
                  alt={unit.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`${getCategoryBadgeColor(unit.buttonColor)} backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold border shadow-sm`}
                  >
                    {unit.category}
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-1 shadow-sm">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-bold text-gray-700">{unit.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {unit.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 font-medium">{unit.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {unit.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100/80 backdrop-blur-sm text-gray-600 px-3 py-1 rounded-lg text-xs font-semibold border border-gray-200/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Info Row */}
                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <MapPin className="w-3 h-3" />
                    <span className="font-medium">{unit.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span className="font-medium">{unit.hours}</span>
                  </div>
                </div>

                {/* Visit Button */}
                <button
                  onClick={() => onBusinessSelect && onBusinessSelect(unit.id)}
                  className={`w-full ${getButtonStyles(unit.buttonColor)} text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 group/btn`}
                >
                  <span className="text-sm">Kunjungi</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredBusinesses.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-600 mb-2">Tidak ada hasil ditemukan</h3>
            <p className="text-gray-500 mb-4">
              {searchQuery
                ? `Tidak ditemukan unit bisnis untuk "${searchQuery}"${activeFilter !== "Semua" ? ` dalam kategori "${activeFilter}"` : ""}`
                : `Tidak ditemukan unit bisnis untuk kategori "${activeFilter}"`}
            </p>
            {(searchQuery || activeFilter !== "Semua") && (
              <button
                onClick={() => {
                  setSearchQuery("")
                  setActiveFilter("Semua")
                }}
                className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Reset Filter
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default BusinessDetailPage
