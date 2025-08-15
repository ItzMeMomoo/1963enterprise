"use client"

import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Search,
  X,
  Building2,
  Utensils,
  Home,
  Car,
  Leaf,
  Coffee,
  ExternalLink,
  MessageCircle,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

const ContactPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("Semua")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [selectedLocations, setSelectedLocations] = useState({})
  const [showLocationModal, setShowLocationModal] = useState(false)
  const [selectedUnitForLocation, setSelectedUnitForLocation] = useState(null)
  const searchRef = useRef(null)

  const handleLocationClick = (unit) => {
    if (unit.locations && unit.locations.length > 1) {
      setSelectedUnitForLocation(unit)
      setShowLocationModal(true)
    } else {
      // Single location - open Google Maps directly
      const location = unit.locations ? unit.locations[0].location : unit.location
      const encodedLocation = encodeURIComponent(location)
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodedLocation}`, "_blank")
    }
  }

  const handleLocationSelect = (unitName, locationName) => {
    setSelectedLocations((prev) => ({
      ...prev,
      [unitName]: locationName,
    }))
  }

  const openLocationInMaps = (location) => {
    const encodedLocation = encodeURIComponent(location)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedLocation}`, "_blank")
    setShowLocationModal(false)
  }

  const getCurrentLocationData = (unit) => {
    if (unit.locations) {
      const selectedLocation = selectedLocations[unit.name] || unit.locations[0].name
      return unit.locations.find((loc) => loc.name === selectedLocation) || unit.locations[0]
    }
    return unit
  }

  const categories = [
    { name: "Semua", icon: Building2, color: "blue", count: 16 },
    { name: "Retail", icon: Building2, color: "purple", count: 3 },
    { name: "Kuliner", icon: Utensils, color: "orange", count: 5 },
    { name: "Akomodasi", icon: Home, color: "blue", count: 3 },
    { name: "Layanan Harian", icon: Car, color: "red", count: 2 },
    { name: "Agribisnis", icon: Leaf, color: "green", count: 2 },
    { name: "Kantin", icon: Coffee, color: "pink", count: 1 },
  ]

  const contactData = [
    {
      category: "Retail & Produk",
      icon: Building2,
      color: "purple",
      gradient: "from-purple-500 via-purple-600 to-indigo-600",
      bgGradient: "from-purple-50 via-purple-25 to-indigo-50",
      shadowColor: "shadow-purple-200",
      units: [
        {
          name: "Botani Mart",
          logo: "/logo/botani mart.png",
          phone: "+628128050505059",
          email: "botanimart@ipb.ac.id",
          location: "Jl. Raya Dramaga, Babakan, Kec. Dramaga, Kabupaten Bogor, Jawa Barat 16680",
          instagram: "@botanimartipb",
          hours: "08:00 - 17:00",
          rating: 4.6,
          description: "Toko pertanian modern dengan berbagai kebutuhan pertanian",
        },
        {
          name: "Daily Us",
          logo: "/logo/Daily Us.png",
          locations: [
            {
              name: "DailyUs Bara",
              phone: "+6281234567890",
              email: "dailyus@ipb.ac.id",
              location: "Samping Pintu Masuk Bara",
              instagram: "@dailyusby63",
              hours: "07:00 - 22:00",
            },
            {
              name: "DailyUs Astri",
              phone: "+6281234567890",
              email: "dailyus@ipb.ac.id",
              location: "Dekat Asrama Putri IPB",
              instagram: "@dailyusby63",
              hours: "08:00 - 21:00",
            },
            {
              name: "DailyUs Astra",
              phone: "+6281234567890",
              email: "dailyus@ipb.ac.id",
              location: "Dekat Asrama Putra IPB",
              instagram: "@dailyusby63",
              hours: "08:00 - 21:00",
            },
          ],

          rating: 4.8,
          description: "Convenience store untuk kebutuhan sehari-hari mahasiswa",
        },
        {
          name: "IPB Merchandise Store",
          logo: "/logo/IMS.png",
          locations: [
            {
              name: "IPB Merchandise Bara",
              phone: "+6281388489123",
              email: "merchandise@ipb.ac.id",
              location: "Samping Pintu Masuk Bara",
              instagram: "@ipbmerch.1963",
              hours: "08:00 - 17:00",
            },
            {
              name: "IPB Merchandise LSI",
              phone: "+6281388489124",
              email: "merchandise@ipb.ac.id",
              location: "LSI IPB - Perpustakaan",
              instagram: "@ipbmerch.1963",
              hours: "08:00 - 16:00",
            },
          ],
          rating: 4.7,
          description: "Toko resmi merchandise IPB dengan desain eksklusif",
        },
      ],
    },
    {
      category: "Kuliner & Kafe",
      icon: Utensils,
      color: "orange",
      gradient: "from-orange-400 via-orange-500 to-red-500",
      bgGradient: "from-orange-50 via-orange-25 to-red-50",
      shadowColor: "shadow-orange-200",
      units: [
        {
          name: "BreadCast",
          logo: "/logo/breadcast.png",
          locations: [
            {
              name: "BreadCast Center",
              phone: "+6281377043310",
              email: "breadcast@ipb.ac.id",
              location: "Depan Perpustakaan IPB",
              instagram: "@breadcast.bakery",
              hours: "06:00 - 20:00",
            },
            {
              name: "BreadCast LSI",
              phone: "+6281377043310",
              email: "breadcast@ipb.ac.id",
              location: "LSI IPB",
              instagram: "@breadcast.bakery",
              hours: "06:00 - 20:00",
            },
          ],
          rating: 4.7,
          description: "Bakery dengan roti segar dan kue lokal tanpa pengawet",
        },
        {
          name: "Namtiga Coffee",
          logo: "/logo/namtiga.png",
          phone: "+6281378404742",
          email: "coffee63@ipb.ac.id",
          location: "Samping Pintu Masuk Bara",
          instagram: "@namtigacoffee",
          hours: "08:00 - 21:00",
          rating: 4.9,
          description: "Coffee house premium dengan menu lengkap dan suasana nyaman",
        },
        {
          name: "Resto Taman Koleksi",
          logo: "/logo/TAKOL.png",
          phone: "+6281361403322",
          email: "tamankoleksi@ipb.ac.id",
          location: "Jln. Padjajaran - IPB Baranangsiang",
          instagram: "@takolipb",
          hours: "10:00 - 22:00",
          rating: 4.5,
          description: "Restoran dengan layanan meeting room dan catering",
        },
        {
          name: "Namtiga Coffee Lite",
          logo: "/logo/namtiga-lite.png",
          phone: "+6281359338754",
          email: "namtiga@ipb.ac.id",
          location: "Gedung Rektorat Andi Hakim Nasution",
          instagram: "@namtigacoffee",
          hours: "07:00 - 21:00",
          rating: 4.6,
          description: "Kopi nusantara dengan berbagai varian dan pastry",
        },
        {
          name: "Kantong by Chef 63",
          logo: "/logo/kantong.png",
          phone: "+6281234567891",
          email: "chef63@ipb.ac.id",
          location: "Dekat Asrama Putri IPB",
          instagram: "@kantongbychef63",
          hours: "06:00 - 20:00",
          rating: 4.4,
          description: "Kantin dengan makanan terjangkau dan cita rasa berkesan",
        },
      ],
    },
    {
      category: "Layanan Harian & Kebersihan",
      icon: Car,
      color: "red",
      gradient: "from-red-500 via-red-600 to-pink-600",
      bgGradient: "from-red-50 via-red-25 to-pink-50",
      shadowColor: "shadow-red-200",
      units: [
        {
          name: "CARe Wash",
          logo: "/logo/carewash.png",
          phone: "+6281234567892",
          email: "carewash@ipb.ac.id",
          location: "IPB Dramaga",
          instagram: "@carewash63",
          hours: "08:00 - 17:00",
          rating: 4.5,
          description: "Layanan cuci kendaraan dengan sistem modern",
        },
        {
          name: "Daily Wash 63",
          logo: "/logo/dailywash63.png",
          phone: "+6281234567893",
          email: "dailywash@ipb.ac.id",
          location: "IPB Dramaga",
          instagram: "@dailywash63",
          hours: "07:00 - 21:00",
          rating: 4.2,
          description: "Laundry harian dengan tarif mahasiswa",
        },
      ],
    },
    {
      category: "Agribisnis & Teaching Factory",
      icon: Leaf,
      color: "green",
      gradient: "from-green-500 via-green-600 to-emerald-600",
      bgGradient: "from-green-50 via-green-25 to-emerald-50",
      shadowColor: "shadow-green-200",
      units: [
        {
          name: "Think Fresh",
          logo: "/logo/thinkfresh.png",
          phone: "+6281566783767",
          email: "thinkfresh@ipb.ac.id",
          location: "Agribusiness and Technology Park IPB",
          instagram: "@thinkfreshpb",
          hours: "08:00 - 17:00",
          rating: 4.8,
          description: "Sayuran organik dan non-organik segar dari kebun",
        },
      ],
    },
    {
      category: "Akomodasi & Penginapan",
      icon: Home,
      color: "blue",
      gradient: "from-blue-500 via-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 via-blue-25 to-cyan-50",
      shadowColor: "shadow-blue-200",
      units: [
        {
          name: "Gedung Alumni IPB",
          logo: "/logo/himpunanalumni.png",
          phone: "081164048",
          email: "alumni@ipb.ac.id",
          location: "Jl. Raya Padjajaran - Samping Botani Square",
          instagram: "@alumni_ipb",
          hours: "08:00 - 22:00",
          rating: 4.5,
          description: "Gedung serbaguna untuk acara dan gathering",
        },
        {
          name: "Asrama Internasional",
          logo: "/logo/dormitory.png",
          phone: "+6281312381377",
          email: "asrama@ipb.ac.id",
          location: "IPB Dramaga - Jalan Tanjung",
          instagram: "@penginapan_ipb",
          hours: "24 Jam",
          rating: 4.6,
          description: "Penginapan untuk mahasiswa asing dan tamu kampus",
        },
        {
          name: "Wisma Landhuis",
          logo: "/logo/landlord.png",
          phone: "+6281312381377",
          email: "landhuis@ipb.ac.id",
          location: "IPB Dramaga - Seberang Asrama Internasional",
          instagram: "@penginapan_ipb",
          hours: "24 Jam",
          rating: 4.3,
          description: "Wisma dengan fasilitas lengkap dan ruang rapat",
        },
      ],
    },
  ]

  // Search functionality
  const searchUnits = (query) => {
    if (!query.trim()) return contactData

    const searchTerm = query.toLowerCase().trim()
    return contactData
      .map((category) => ({
        ...category,
        units: category.units.filter(
          (unit) =>
            unit.name.toLowerCase().includes(searchTerm) ||
            (unit.location && unit.location.toLowerCase().includes(searchTerm)) ||
            (unit.instagram && unit.instagram.toLowerCase().includes(searchTerm)) ||
            unit.description.toLowerCase().includes(searchTerm) ||
            (unit.locations &&
              unit.locations.some(
                (loc) =>
                  loc.location.toLowerCase().includes(searchTerm) || loc.instagram.toLowerCase().includes(searchTerm),
              )),
        ),
      }))
      .filter((category) => category.units.length > 0)
  }

  // Filter by category
  const filteredData =
    activeCategory === "Semua"
      ? searchUnits(searchQuery)
      : searchUnits(searchQuery).filter((category) =>
          category.category.toLowerCase().includes(activeCategory.toLowerCase()),
        )

  const clearSearch = () => {
    setSearchQuery("")
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

  // Get total units count
  const getTotalUnits = () => {
    return filteredData.reduce((total, category) => total + category.units.length, 0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-60 h-60 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-xl animate-pulse delay-300"></div>
      </div>

      {/* Enhanced Hero Section */}
      <div className="relative pt-20 pb-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>

          {/* Animated Floating Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/10 rounded-full blur-lg animate-pulse delay-300"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-yellow-300/20 rounded-full blur-md animate-ping"></div>

          {/* Enhanced Curved Bottom */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              className="relative block w-full h-24"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="fill-white/95"
              ></path>
            </svg>
          </div>

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "60px 60px",
              }}
            ></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {/* Enhanced Title Section */}
          <div className="mb-16">
            <div className="inline-flex items-center justify-center w-20 h-1.5 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full mb-8 shadow-lg"></div>

            <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
              Kontak{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent">
                Unit Bisnis
              </span>
            </h1>

            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium mb-10">
              Temukan informasi kontak lengkap untuk semua unit bisnis 1963 Enterprise dengan mudah dan cepat
            </p>

            {/* Decorative Elements */}
            <div className="flex justify-center items-center space-x-6 mb-12">
              <div className="w-3 h-3 bg-yellow-300 rounded-full animate-pulse shadow-lg"></div>
              <div className="w-4 h-4 bg-white/60 rounded-full animate-pulse delay-100 shadow-lg"></div>
              <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse delay-200 shadow-lg"></div>
            </div>
          </div>

          {/* Enhanced Search and Filter Section */}
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/50 relative overflow-hidden max-w-5xl mx-auto">
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

            <div className="relative flex flex-col lg:flex-row gap-8 items-start lg:items-center">
              {/* Enhanced Search Bar */}
              <div className="w-full lg:w-96 flex-shrink-0" ref={searchRef}>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                    <Search className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Cari unit bisnis, lokasi, atau Instagram..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-12 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none bg-white text-gray-700 placeholder-gray-400 font-medium transition-all duration-300 shadow-sm focus:shadow-lg text-sm hover:border-gray-300"
                  />
                  {searchQuery && (
                    <button
                      onClick={clearSearch}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 shadow-sm"
                    >
                      <X className="w-4 h-4 text-gray-500" />
                    </button>
                  )}
                </div>
              </div>

              {/* Enhanced Divider */}
              <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

              {/* Enhanced Category Filters */}
              <div className="flex-1 w-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Building2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-bold text-gray-700">Filter Kategori</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => {
                    const IconComponent = category.icon
                    return (
                      <button
                        key={category.name}
                        onClick={() => setActiveCategory(category.name)}
                        className={`flex items-center space-x-2 px-4 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md border ${
                          activeCategory === category.name
                            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-200 border-blue-300"
                            : "bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-blue-200"
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span>{category.name}</span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            activeCategory === category.name ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {category.count}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Enhanced Search Results Info */}
            {searchQuery && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full shadow-sm"></div>
                  <p className="text-gray-600 font-semibold">
                    Menampilkan <span className="text-blue-600 font-bold">{getTotalUnits()}</span> hasil untuk "
                    {searchQuery}"{activeCategory !== "Semua" && ` dalam kategori "${activeCategory}"`}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Contact Categories */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="space-y-12">
          {filteredData.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.category}
                className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Enhanced Category Header */}
                <div className={`bg-gradient-to-r ${category.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 right-8 w-6 h-6 bg-white/10 rounded-full animate-bounce"></div>
                  <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-white/10 rounded-full animate-ping"></div>

                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl border border-white/30">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-black mb-2">{category.category}</h2>
                        <p className="text-white/90 font-semibold text-lg">{category.units.length} Unit Tersedia</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Units Grid */}
                <div className={`bg-gradient-to-br ${category.bgGradient} p-8`}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.units.map((unit, unitIndex) => {
                      const currentLocationData = getCurrentLocationData(unit)
                      const hasMultipleLocations = unit.locations && unit.locations.length > 1

                      return (
                        <div
                          key={unit.name}
                          className={`bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-white/50 group ${category.shadowColor} hover:${category.shadowColor}/50`}
                          style={{ animationDelay: `${categoryIndex * 0.1 + unitIndex * 0.05}s` }}
                          onMouseEnter={() => setHoveredCard(`${category.category}-${unitIndex}`)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          {/* Unit Header */}
                          <div className="text-center mb-6">
                            <div className="flex justify-center mb-4">
                              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                <img
                                  src={unit.logo || "/placeholder.svg"}
                                  alt={`Logo ${unit.name}`}
                                  className="w-12 h-12 object-contain"
                                  onError={(e) => {
                                    // Fallback to placeholder if logo not found
                                    e.target.src = `/placeholder.svg?height=48&width=48&text=${encodeURIComponent(unit.name + " Logo")}`
                                  }}
                                />
                              </div>
                            </div>

                            <h3 className="text-xl font-black text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                              {unit.name}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">{unit.description}</p>

                            {hasMultipleLocations && (
                              <div className="mb-4">
                                <div className="flex items-center justify-center space-x-2 mb-3">
                                  <MapPin className="w-4 h-4 text-blue-500" />
                                  <span className="text-sm font-bold text-blue-600">
                                    {unit.locations.length} Lokasi Tersedia
                                  </span>
                                </div>

                                {/* Location Selector Tabs */}
                                <div className="flex flex-wrap justify-center gap-2">
                                  {unit.locations.map((location, locIndex) => (
                                    <button
                                      key={location.name}
                                      onClick={() => handleLocationSelect(unit.name, location.name)}
                                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 transform hover:scale-105 ${
                                        (selectedLocations[unit.name] || unit.locations[0].name) === location.name
                                          ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                      }`}
                                    >
                                      {location.name}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Rating and Hours */}
                            <div className="flex items-center justify-center space-x-4 mb-4">
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <span className="text-sm font-bold text-gray-700">{unit.rating}</span>
                              </div>
                              <div className="w-px h-4 bg-gray-300"></div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4 text-gray-500" />
                                <span className="text-xs font-semibold text-gray-600">{currentLocationData.hours}</span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            {/* Enhanced Phone */}
                            <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100 hover:border-green-200 transition-all duration-300 group/phone">
                              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/phone:scale-110 transition-transform duration-300">
                                <Phone className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-bold text-green-700 mb-1">Telepon</p>
                                <a
                                  href={`tel:${currentLocationData.phone}`}
                                  className="text-sm font-bold text-gray-800 hover:text-green-600 transition-colors duration-300 flex items-center space-x-1 group/link"
                                >
                                  <span className="truncate">{currentLocationData.phone || "-"}</span>
                                  {currentLocationData.phone && currentLocationData.phone !== "-" && (
                                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                                  )}
                                </a>
                              </div>
                            </div>

                            {/* Enhanced Email */}
                            <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 hover:border-blue-200 transition-all duration-300 group/email">
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/email:scale-110 transition-transform duration-300">
                                <Mail className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-bold text-blue-700 mb-1">Email</p>
                                <a
                                  href={`mailto:${currentLocationData.email}`}
                                  className="text-sm font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-1 group/link"
                                >
                                  <span className="truncate">{currentLocationData.email || "-"}</span>
                                  {currentLocationData.email && currentLocationData.email !== "-" && (
                                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                                  )}
                                </a>
                              </div>
                            </div>

                            {/* Enhanced Location */}
                            <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-100 hover:border-orange-200 transition-all duration-300 group/location">
                              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/location:scale-110 transition-transform duration-300 mt-0">
                                <MapPin className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-bold text-orange-700 mb-1">Lokasi</p>
                                <p className="text-sm font-bold text-gray-800 leading-tight">
                                  {currentLocationData.location}
                                </p>
                              </div>
                            </div>

                            {/* Enhanced Instagram */}
                            <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border border-pink-100 hover:border-pink-200 transition-all duration-300 group/instagram">
                              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/instagram:scale-110 transition-transform duration-300">
                                <Instagram className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-bold text-pink-700 mb-1">Instagram</p>
                                <a
                                  href={`https://instagram.com/${currentLocationData.instagram?.replace("@", "")}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm font-bold text-gray-800 hover:text-pink-600 transition-colors duration-300 flex items-center space-x-1 group/link"
                                >
                                  <span className="truncate">{currentLocationData.instagram || "-"}</span>
                                  {currentLocationData.instagram && currentLocationData.instagram !== "-" && (
                                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                                  )}
                                </a>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-3">
                              {/* WhatsApp Button */}
                              {currentLocationData.phone && currentLocationData.phone !== "-" && (
                                <a
                                  href={`https://wa.me/${currentLocationData.phone.replace(/[^0-9]/g, "")}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 px-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 group/whatsapp"
                                >
                                  <MessageCircle className="w-5 h-5 group-hover/whatsapp:scale-110 transition-transform duration-300" />
                                  <span>Chat WhatsApp</span>
                                  <ArrowRight className="w-4 h-4 group-hover/whatsapp:translate-x-1 transition-transform duration-300" />
                                </a>
                              )}

                              <button
                                onClick={() => handleLocationClick(unit)}
                                className={`w-full bg-gradient-to-r ${category.gradient} hover:opacity-90 text-white font-bold py-3 px-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 group/location`}
                              >
                                <MapPin className="w-5 h-5 group-hover/location:scale-110 transition-transform duration-300" />
                                <span>Lihat Lokasi</span>
                                <ArrowRight className="w-4 h-4 group-hover/location:translate-x-1 transition-transform duration-300" />
                              </button>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* No Results */}
        {filteredData.length === 0 && (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Search className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-4">Tidak ada hasil ditemukan</h3>
            <p className="text-gray-500 mb-6 text-lg">
              Tidak ditemukan unit bisnis untuk "{searchQuery}"
              {activeCategory !== "Semua" && ` dalam kategori "${activeCategory}"`}
            </p>
            <button
              onClick={() => {
                setSearchQuery("")
                setActiveCategory("Semua")
              }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>

      {showLocationModal && selectedUnitForLocation && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            {/* Modal Header */}
            <div
              className={`bg-gradient-to-r ${selectedUnitForLocation.locations ? contactData.find((cat) => cat.units.some((u) => u.name === selectedUnitForLocation.name))?.gradient || "from-blue-500 to-blue-600" : "from-blue-500 to-blue-600"} p-6 text-white relative`}
            >
              <button
                onClick={() => setShowLocationModal(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{selectedUnitForLocation.name}</h3>
                  <p className="text-white/90">Pilih lokasi yang ingin dikunjungi</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 max-h-96 overflow-y-auto">
              <div className="grid gap-4">
                {selectedUnitForLocation.locations?.map((location, index) => (
                  <button
                    key={location.name}
                    onClick={() => openLocationInMaps(location.location)}
                    className="text-left p-4 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                          {location.name}
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">{location.location}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{location.hours}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Phone className="w-3 h-3" />
                            <span>{location.phone}</span>
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Footer Contact Section */}
      <div className="bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 text-white py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-300/10 rounded-full blur-lg animate-ping"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mb-8 shadow-lg"></div>
            <h2 className="text-5xl font-black text-white mb-6">Kantor Pusat</h2>
            <h3 className="text-3xl font-bold text-blue-200 mb-8">Badan Investasi dan Bisnis IPB</h3>
            <p className="text-blue-100 text-xl max-w-4xl mx-auto leading-relaxed">
              Pusat koordinasi dan informasi untuk semua unit bisnis 1963 Enterprise dengan layanan terpadu dan
              profesional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Enhanced Phone */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 text-center border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Telepon Utama</h4>
              <a
                href="tel:+6225186226420"
                className="text-blue-200 text-xl font-semibold hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2 group/link"
              >
                <span>+62 251 8622642</span>
                <ExternalLink className="w-5 h-5 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            {/* Enhanced Email */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 text-center border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Email Resmi</h4>
              <a
                href="mailto:bisnis@apps.ipb.ac.id"
                className="text-blue-200 text-xl font-semibold hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2 group/link"
              >
                <span>bisnis@apps.ipb.ac.id</span>
                <ExternalLink className="w-5 h-5 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            {/* Enhanced Address */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 text-center border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Alamat Kantor</h4>
              <p className="text-blue-200 text-xl font-semibold leading-relaxed">
                Jl. Raya Dramaga Kampus IPB
                <br />
                Dramaga Bogor 16680
                <br />
                West Java, Indonesia
              </p>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold text-white mb-4">Butuh Bantuan Lebih Lanjut?</h4>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6285186226420"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 group"
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <span>Chat WhatsApp</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="mailto:bisnis@apps.ipb.ac.id"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 group"
                >
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <span>Kirim Email</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
