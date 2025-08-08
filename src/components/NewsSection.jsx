"use client"

import { Calendar, Clock, MapPin, Users, ArrowRight, Filter, Eye, Heart, Share2, Tag, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const NewsSection = ({ onNewsSelect }) => {
  const [activeFilter, setActiveFilter] = useState("Semua")
  const [currentPage, setCurrentPage] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const itemsPerPage = 6

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1)
  }, [activeFilter])

  const categories = [
    { name: "Semua", count: 12, color: "blue" },
    { name: "Kesehatan", count: 3, color: "green" },
    { name: "Pelatihan", count: 4, color: "purple" },
    { name: "Event Bisnis", count: 2, color: "orange" },
    { name: "Kemitraan", count: 2, color: "pink" },
    { name: "Inovasi", count: 1, color: "cyan" }
  ]

  const newsData = [
    {
      id: 1,
      title: "Screening Kesehatan Pegawai Badan Investasi dan Bisnis IPB",
      excerpt: "Kegiatan pemeriksaan kesehatan rutin untuk seluruh pegawai sebagai bentuk perhatian terhadap kesejahteraan karyawan dan produktivitas kerja yang optimal.",
      category: "Kesehatan",
      date: "2024-01-15",
      time: "08:00 - 16:00",
      location: "Gedung Badan Investasi dan Bisnis IPB",
      image: "/placeholder.svg?height=300&width=500&text=Screening+Kesehatan",
      tags: ["Kesehatan", "Pegawai", "Rutin"],
      featured: true
    },
    {
      id: 2,
      title: "Workshop Digital Marketing untuk Unit Bisnis",
      excerpt: "Pelatihan intensif tentang strategi pemasaran digital modern untuk meningkatkan visibilitas dan penjualan unit-unit bisnis 1963 Enterprise.",
      category: "Pelatihan",
      date: "2024-01-12",
      location: "Ruang Seminar Gedung Alumni IPB",
      image: "/placeholder.svg?height=300&width=500&text=Digital+Marketing+Workshop",
      tags: ["Digital Marketing", "Pelatihan", "Bisnis"],
      featured: false
    },
    {
      id: 3,
      title: "Launching Menu Baru The 63 Coffee House",
      excerpt: "Peresmian menu seasonal terbaru dengan konsep fusion Indonesia-Western yang menggabungkan cita rasa lokal dengan teknik modern.",
      category: "Event Bisnis",
      date: "2024-01-10",
      location: "The 63 Coffee House, Kampus IPB",
      image: "/placeholder.svg?height=300&width=500&text=Menu+Baru+Coffee+House",
      tags: ["Menu Baru", "Coffee House", "Kuliner"],
      featured: true
    },
    {
      id: 4,
      title: "Kemitraan Strategis dengan Startup Agritech",
      excerpt: "Penandatanganan MoU dengan startup teknologi pertanian untuk mengembangkan inovasi di bidang agribisnis dan smart farming.",
      category: "Kemitraan",
      date: "2024-01-08",
      location: "Ruang Rapat Utama IPB",
      image: "/placeholder.svg?height=300&width=500&text=Kemitraan+Agritech",
      tags: ["Kemitraan", "Agritech", "Inovasi"],
      featured: false
    },
    {
      id: 5,
      title: "Pelatihan Manajemen Keuangan UMKM",
      excerpt: "Program pemberdayaan untuk pelaku UMKM di sekitar kampus dalam mengelola keuangan bisnis dengan sistem yang terstruktur dan modern.",
      category: "Pelatihan",
      date: "2024-01-05",
      location: "Aula Gedung Student Center",
      image: "/placeholder.svg?height=300&width=500&text=Pelatihan+Keuangan+UMKM",
      tags: ["UMKM", "Keuangan", "Pemberdayaan"],
      featured: false
    },
    {
      id: 6,
      title: "Implementasi Sistem IoT di Think Fresh",
      excerpt: "Penerapan teknologi Internet of Things untuk monitoring otomatis kondisi tanaman dan optimalisasi hasil panen di unit agribisnis Think Fresh.",
      category: "Inovasi",
      date: "2024-01-03",
      location: "Think Fresh Greenhouse, IPB",
      image: "/placeholder.svg?height=300&width=500&text=IoT+Think+Fresh",
      tags: ["IoT", "Smart Farming", "Teknologi"],
      featured: true
    },
    {
      id: 7,
      title: "Health Talk: Gizi Seimbang untuk Produktivitas",
      excerpt: "Seminar kesehatan tentang pentingnya nutrisi seimbang dalam meningkatkan produktivitas kerja dan kualitas hidup sehari-hari.",
      category: "Kesehatan",
      date: "2023-12-28",
      location: "Auditorium Gedung Alumni IPB",
      image: "/placeholder.svg?height=300&width=500&text=Health+Talk+Gizi",
      tags: ["Gizi", "Produktivitas", "Seminar"],
      featured: false
    },
    {
      id: 8,
      title: "Soft Skills Training untuk Tim Customer Service",
      excerpt: "Program peningkatan kemampuan komunikasi dan pelayanan pelanggan untuk tim customer service seluruh unit bisnis 1963 Enterprise.",
      category: "Pelatihan",
      date: "2023-12-25",
      location: "Training Room Gedung Rektorat",
      image: "/placeholder.svg?height=300&width=500&text=Soft+Skills+Training",
      tags: ["Soft Skills", "Customer Service", "Komunikasi"],
      featured: false
    },
    {
      id: 9,
      title: "Evaluasi Kinerja Unit Bisnis Q4 2023",
      excerpt: "Rapat evaluasi kinerja seluruh unit bisnis untuk kuartal keempat tahun 2023 dan perencanaan strategi untuk tahun 2024.",
      category: "Event Bisnis",
      date: "2023-12-20",
      location: "Ruang Rapat Besar IPB",
      image: "/placeholder.svg?height=300&width=500&text=Evaluasi+Kinerja+Q4",
      tags: ["Evaluasi", "Kinerja", "Strategi"],
      featured: false
    },
    {
      id: 10,
      title: "Program Vaksinasi COVID-19 Booster",
      excerpt: "Kegiatan vaksinasi booster COVID-19 untuk seluruh pegawai dan mahasiswa sebagai upaya menjaga kesehatan komunitas kampus.",
      category: "Kesehatan",
      date: "2023-12-15",
      location: "Poliklinik IPB",
      image: "/placeholder.svg?height=300&width=500&text=Vaksinasi+Booster",
      tags: ["Vaksinasi", "COVID-19", "Kesehatan"],
      featured: false
    },
    {
      id: 11,
      title: "Workshop Pengembangan Produk Inovatif",
      excerpt: "Pelatihan pengembangan produk dengan pendekatan design thinking untuk menciptakan inovasi yang sesuai dengan kebutuhan pasar.",
      category: "Pelatihan",
      date: "2023-12-10",
      location: "Innovation Lab IPB",
      image: "/placeholder.svg?height=300&width=500&text=Workshop+Produk+Inovatif",
      tags: ["Inovasi", "Design Thinking", "Produk"],
      featured: false
    },
    {
      id: 12,
      title: "Kemitraan dengan Koperasi Petani Lokal",
      excerpt: "Penandatanganan kerjasama dengan koperasi petani lokal untuk supply chain produk segar Think Fresh dan pemberdayaan petani.",
      category: "Kemitraan",
      date: "2023-12-05",
      location: "Kantor Koperasi Dramaga",
      image: "/placeholder.svg?height=300&width=500&text=Kemitraan+Petani",
      tags: ["Koperasi", "Petani", "Supply Chain"],
      featured: false
    }
  ]

  // Filter functionality
  const filteredNews = newsData.filter(news => {
    return activeFilter === "Semua" || news.category === activeFilter
  })

  // Pagination calculations
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const displayedNews = filteredNews.slice(startIndex, endIndex)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      locale: 'id-ID'
    }
    return date.toLocaleDateString('id-ID', options)
  }

  const getCategoryColor = (category) => {
    const colors = {
      "Kesehatan": "from-green-500 to-emerald-500",
      "Pelatihan": "from-purple-500 to-violet-500", 
      "Event Bisnis": "from-orange-500 to-red-500",
      "Kemitraan": "from-pink-500 to-rose-500",
      "Inovasi": "from-cyan-500 to-blue-500"
    }
    return colors[category] || "from-gray-500 to-gray-600"
  }

  const getCategoryBadgeColor = (category) => {
    const colors = {
      "Kesehatan": "bg-green-50 text-green-700 border-green-200",
      "Pelatihan": "bg-purple-50 text-purple-700 border-purple-200",
      "Event Bisnis": "bg-orange-50 text-orange-700 border-orange-200", 
      "Kemitraan": "bg-pink-50 text-pink-700 border-pink-200",
      "Inovasi": "bg-cyan-50 text-cyan-700 border-cyan-200"
    }
    return colors[category] || "bg-gray-50 text-gray-700 border-gray-200"
  }

  // Pagination component
  const Pagination = () => {
    const getPageNumbers = () => {
      const pages = []
      const maxVisiblePages = 5
      
      if (totalPages <= maxVisiblePages) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        if (currentPage <= 3) {
          for (let i = 1; i <= 4; i++) {
            pages.push(i)
          }
          pages.push('...')
          pages.push(totalPages)
        } else if (currentPage >= totalPages - 2) {
          pages.push(1)
          pages.push('...')
          for (let i = totalPages - 3; i <= totalPages; i++) {
            pages.push(i)
          }
        } else {
          pages.push(1)
          pages.push('...')
          for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pages.push(i)
          }
          pages.push('...')
          pages.push(totalPages)
        }
      }
      
      return pages
    }

    if (totalPages <= 1) return null

    return (
      <div className="flex items-center justify-center space-x-2">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:shadow-md border border-gray-200"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Prev</span>
        </button>

        {/* Page Numbers */}
        <div className="flex items-center space-x-1">
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === 'number' && setCurrentPage(page)}
              disabled={page === '...'}
              className={`w-10 h-10 rounded-xl font-bold text-sm transition-all duration-300 ${
                page === currentPage
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-200"
                  : page === '...'
                  ? "text-gray-400 cursor-default"
                  : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:shadow-md border border-gray-200"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
            currentPage === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:shadow-md border border-gray-200"
          }`}
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    )
  }

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 py-20 overflow-hidden"
      id="berita-kegiatan"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-60 h-60 bg-gradient-to-br from-orange-200/20 to-pink-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
            <span className="mx-4 text-gray-700 font-bold text-lg">Berita & Kegiatan</span>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="text-gray-800">Update</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Terkini
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ikuti perkembangan terbaru kegiatan, acara, dan inovasi dari 1963 Enterprise 
            yang terus berkomitmen memberikan yang terbaik
          </p>
        </div>

        {/* Filter Section */}
        <div className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-white/50 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center shadow-md">
              <Filter className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-bold text-gray-700">Filter Kategori</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveFilter(category.name)}
                className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md flex items-center space-x-2 ${
                  activeFilter === category.name
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md shadow-blue-200"
                    : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-blue-200"
                }`}
              >
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeFilter === category.name 
                    ? "bg-white/20 text-white" 
                    : "bg-gray-100 text-gray-500"
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {displayedNews.length > 0 ? (
            <>
              {/* News Grid - 6 items per page */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {displayedNews.map((news, index) => (
                  <div
                    key={news.id}
                    className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-white/50 cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => onNewsSelect && onNewsSelect(news.id)}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className={`${getCategoryBadgeColor(news.category)} backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold border shadow-sm`}>
                          {news.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight line-clamp-2">
                        {news.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {news.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(news.date)}</span>
                        </div>
                      </div>

                      {/* Button */}
                      <button className={`w-full bg-gradient-to-r ${getCategoryColor(news.category)} text-white font-bold py-2.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group/btn text-sm`}>
                        <span>Baca Selengkapnya</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center">
                <Pagination />
              </div>
            </>
          ) : (
            /* No Results */
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Filter className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-600 mb-4">Tidak ada hasil ditemukan</h3>
              <p className="text-gray-500 mb-6 text-lg">
                Tidak ditemukan berita untuk kategori "{activeFilter}"
              </p>
              <button
                onClick={() => setActiveFilter("Semua")}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default NewsSection
