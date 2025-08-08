"use client"

import { Calendar, Clock, MapPin, ArrowLeft, Share2, Heart, Eye, Tag, ChevronLeft, ChevronRight, User, MessageCircle, Facebook, Twitter, ArrowRight, Bookmark, Star } from 'lucide-react'
import { useState, useEffect } from 'react'

const NewsDetailPage = ({ selectedNewsId, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const [readingProgress, setReadingProgress] = useState(0)

  // Sample news data
  const newsData = [
    {
      id: 1,
      title: "Screening Kesehatan Pegawai Badan Investasi dan Bisnis IPB",
      excerpt: "Kegiatan pemeriksaan kesehatan rutin untuk seluruh pegawai sebagai bentuk perhatian terhadap kesejahteraan karyawan dan produktivitas kerja yang optimal.",
      fullContent: `
        <p>Badan Investasi dan Bisnis IPB kembali mengadakan program screening kesehatan rutin untuk seluruh pegawai sebagai bentuk komitmen dalam menjaga kesejahteraan dan produktivitas karyawan. Kegiatan yang dilaksanakan pada tanggal 15 Januari 2024 ini merupakan bagian dari program kesehatan berkelanjutan yang telah menjadi agenda rutin tahunan.</p>

        <p>Program screening kesehatan kali ini meliputi pemeriksaan kesehatan umum, tes darah lengkap, pemeriksaan tekanan darah, gula darah, kolesterol, serta konsultasi dengan dokter spesialis. Seluruh pegawai dari berbagai unit bisnis 1963 Enterprise turut berpartisipasi dalam kegiatan ini.</p>

        <h3>Tujuan Program Screening Kesehatan</h3>
        <p>Dr. Sarah Wijaya, koordinator program kesehatan, menjelaskan bahwa tujuan utama dari program ini adalah untuk melakukan deteksi dini terhadap berbagai penyakit yang mungkin diderita pegawai, sehingga dapat dilakukan penanganan yang tepat dan cepat.</p>

        <blockquote>"Kesehatan pegawai adalah aset berharga bagi organisasi. Dengan pegawai yang sehat, produktivitas kerja akan meningkat dan lingkungan kerja menjadi lebih kondusif," ujar Dr. Sarah.</blockquote>

        <h3>Hasil dan Tindak Lanjut</h3>
        <p>Dari hasil screening yang dilakukan, sebagian besar pegawai memiliki kondisi kesehatan yang baik. Namun, beberapa pegawai yang memerlukan perhatian khusus akan mendapatkan rujukan untuk pemeriksaan lebih lanjut dan konsultasi dengan dokter spesialis.</p>

        <p>Program ini juga dilengkapi dengan edukasi kesehatan mengenai pola hidup sehat, pentingnya olahraga rutin, dan manajemen stres di tempat kerja. Setiap peserta mendapatkan booklet panduan hidup sehat yang dapat diterapkan dalam kehidupan sehari-hari.</p>

        <p>Ke depannya, Badan Investasi dan Bisnis IPB berencana untuk mengadakan program kesehatan serupa secara berkala, serta menambahkan program wellness lainnya seperti senam pagi bersama dan konseling kesehatan mental.</p>
      `,
      category: "Kesehatan",
      date: "2024-01-15",
      time: "08:00 - 11:00",
      location: "Kantong IPB",
      author: "Tim Redaksi 1963 Enterprise",
      images: [
        "/placeholder.svg?height=400&width=800&text=Screening+Kesehatan+1",
        "/placeholder.svg?height=400&width=800&text=Screening+Kesehatan+2", 
        "/placeholder.svg?height=400&width=800&text=Screening+Kesehatan+3"
      ],
      tags: ["Kesehatan", "Pegawai", "Rutin", "Wellness", "Produktivitas"],
      views: 234,
      likes: 18,
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Workshop Digital Marketing untuk Unit Bisnis",
      excerpt: "Pelatihan intensif tentang strategi pemasaran digital modern untuk meningkatkan visibilitas dan penjualan unit-unit bisnis 1963 Enterprise.",
      fullContent: `
        <p>1963 Enterprise mengadakan workshop digital marketing yang diikuti oleh perwakilan dari seluruh unit bisnis. Workshop yang berlangsung selama satu hari penuh ini bertujuan untuk meningkatkan kemampuan tim marketing dalam memanfaatkan platform digital untuk mempromosikan produk dan layanan.</p>

        <p>Materi workshop meliputi strategi social media marketing, content creation, SEO optimization, dan digital advertising. Para peserta juga mendapatkan hands-on training menggunakan berbagai tools digital marketing terkini.</p>

        <h3>Narasumber Expert</h3>
        <p>Workshop ini menghadirkan narasumber dari praktisi digital marketing berpengalaman, termasuk CEO dari agensi digital terkemuka dan influencer marketing specialist. Mereka berbagi pengalaman dan best practices dalam menjalankan kampanye digital yang efektif.</p>

        <blockquote>"Digital marketing bukan hanya tentang posting di social media, tapi tentang membangun strategi yang komprehensif untuk mencapai target audience yang tepat," kata salah satu narasumber.</blockquote>

        <h3>Hasil dan Implementasi</h3>
        <p>Setiap unit bisnis diminta untuk menyusun rencana digital marketing strategy yang akan diimplementasikan dalam 3 bulan ke depan. Tim akan mendapatkan mentoring berkelanjutan untuk memastikan implementasi berjalan dengan baik.</p>

        <p>Workshop ini diharapkan dapat meningkatkan brand awareness dan penjualan online dari seluruh unit bisnis 1963 Enterprise, serta memperkuat posisi sebagai pioneer dalam pemanfaatan teknologi digital di lingkungan kampus.</p>
      `,
      category: "Pelatihan",
      date: "2024-01-12",
      time: "09:00 - 17:00",
      location: "Ruang Seminar Gedung Alumni IPB",
      author: "Tim Marketing 1963 Enterprise",
      images: [
        "/placeholder.svg?height=400&width=800&text=Digital+Marketing+Workshop+1",
        "/placeholder.svg?height=400&width=800&text=Digital+Marketing+Workshop+2"
      ],
      tags: ["Digital Marketing", "Pelatihan", "Bisnis", "Social Media", "SEO"],
      views: 189,
      likes: 25,
      readTime: "7 min read",
      featured: false
    }
  ]

  const selectedNews = newsData.find(news => news.id === selectedNewsId)
  const relatedNews = newsData.filter(news => 
    news.id !== selectedNewsId && 
    (news.category === selectedNews?.category || news.featured)
  ).slice(0, 3)

  useEffect(() => {
    if (selectedNews) {
      setLikeCount(selectedNews.likes)
    }
  }, [selectedNews])

  // Reading progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const article = document.querySelector('.article-content')
      if (article) {
        const scrollTop = window.scrollY
        const docHeight = article.offsetHeight
        const winHeight = window.innerHeight
        const scrollPercent = scrollTop / (docHeight - winHeight)
        const scrollPercentRounded = Math.round(scrollPercent * 100)
        setReadingProgress(Math.min(100, Math.max(0, scrollPercentRounded)))
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!selectedNews) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin mx-auto mb-4 flex items-center justify-center">
            <div className="w-10 h-10 bg-white rounded-full"></div>
          </div>
          <p className="text-gray-600 font-semibold">Memuat detail berita...</p>
        </div>
      </div>
    )
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    })
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

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedNews.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedNews.images.length - 1 : prev - 1
    )
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1)
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  const handleShare = (platform) => {
    const url = window.location.href
    const text = selectedNews.title
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
    }
    
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-20 pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300/20 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-purple-300/20 rounded-full blur-xl animate-pulse delay-300"></div>
        </div>

        {/* Curved Bottom */}
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
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          {/* Article Header */}
          <div className="text-center text-white mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full"></div>
              <div className="mx-3 w-2 h-2 bg-white/30 rounded-full"></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-orange-300 to-pink-300 rounded-full"></div>
            </div>
            
            {/* Category Badge */}
            <div className="mb-4">
              <span className={`${getCategoryBadgeColor(selectedNews.category)} backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold border shadow-sm inline-flex items-center space-x-1`}>
                <Star className="w-3 h-3" />
                <span>{selectedNews.category}</span>
              </span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-black mb-4 leading-tight max-w-4xl mx-auto">
              {selectedNews.title}
            </h1>
            
            <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed mb-6">
              {selectedNews.excerpt}
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-blue-200 bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-4 border border-white/20 max-w-3xl mx-auto">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span className="text-sm font-medium">{selectedNews.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">{formatDate(selectedNews.date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span className="text-sm font-medium">{selectedNews.views} views</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">{selectedNews.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative -mt-16 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Article Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Featured Image Gallery */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-white/50">
                <div className="relative mb-6 rounded-2xl overflow-hidden group">
                  <img
                    src={selectedNews.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${selectedNews.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {selectedNews.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {currentImageIndex + 1} / {selectedNews.images.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Image Thumbnails */}
                {selectedNews.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-3">
                    {selectedNews.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative rounded-xl overflow-hidden transition-all duration-300 group ${
                          currentImageIndex === index ? "ring-3 ring-blue-400 scale-105" : "hover:scale-105"
                        }`}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${selectedNews.title} - Thumbnail ${index + 1}`}
                          className="w-full h-16 object-cover"
                        />
                        <div className={`absolute inset-0 transition-opacity duration-300 ${
                          currentImageIndex === index ? "bg-blue-400/20" : "bg-black/20 opacity-0 group-hover:opacity-100"
                        }`}></div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Article Content */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50 article-content">
                <div 
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: selectedNews.fullContent }}
                />

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
                    <Tag className="w-5 h-5" />
                    <span>Tags</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedNews.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Social Actions */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-white/50">
                <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Bagikan Artikel</h3>
                
                {/* Share Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </button>
                  
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Twitter className="w-4 h-4" />
                    <span>Twitter</span>
                  </button>
                  
                  <button
                    onClick={() => handleShare('whatsapp')}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Event Details - Fixed icon containers */}
              {selectedNews.time && (
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-white/50">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Detail Kegiatan</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-blue-600 font-semibold">Waktu</p>
                        <p className="font-bold text-gray-800">{selectedNews.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-xl border border-orange-200">
                      <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-orange-600 font-semibold">Lokasi</p>
                        <p className="font-bold text-gray-800 leading-tight">{selectedNews.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related News */}
          {relatedNews.length > 0 && (
            <div className="mt-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-black text-gray-800 mb-4">Berita Terkait</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Artikel menarik lainnya yang mungkin Anda sukai
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedNews.map((news, index) => (
                  <div
                    key={news.id}
                    className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-white/50 cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={news.images?.[0] || "/placeholder.svg"}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`${getCategoryBadgeColor(news.category)} backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold border shadow-sm`}>
                          {news.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight line-clamp-2">
                        {news.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {news.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(news.date)}</span>
                        </div>
                      </div>

                      <button className={`w-full bg-gradient-to-r ${getCategoryColor(news.category)} text-white font-bold py-2.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group/btn text-sm`}>
                        <span>Baca</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NewsDetailPage
