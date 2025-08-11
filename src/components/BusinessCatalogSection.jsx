import { ArrowRight, Star, Clock, MapPin, Users } from 'lucide-react'

const BusinessCatalogSection = ({ onBusinessSelect }) => {
  const businessUnits = [
    {
      id: 1,
      name: "Daily Us",
      category: "RETAIL DAN PRODUK",
      description:
        "Tempat persinggahan kebutuhan mahasiswa dengan berbagai produk yang tepat saji seperti kopi dan lain lain",
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
  ]

  const getButtonStyles = (color) => {
    const styles = {
      purple:
        "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-purple-200",
      orange:
        "bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 shadow-orange-200",
      blue: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-blue-200",
      green: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-green-200",
    }
    return styles[color] || styles.orange
  }

  const getCategoryBadgeColor = (color) => {
    const styles = {
      purple: "bg-purple-50 text-purple-700 border-purple-200",
      orange: "bg-orange-50 text-orange-700 border-orange-200",
      blue: "bg-blue-50 text-blue-700 border-blue-200",
      green: "bg-green-50 text-green-700 border-green-200",
    }
    return styles[color] || styles.orange
  }

  return (
    <section
      className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 py-16 overflow-hidden"
      id="unit-bisnis"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-orange-200/30 to-yellow-200/30 rounded-full blur-lg animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-md animate-bounce delay-500"></div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%236366f1' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-black text-gray-800 mb-6 leading-tight">
            Katalog{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Unit Bisnis
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Temukan berbagai kategori unit bisnis unggulan 1963 Enterprise yang telah terbukti memberikan nilai terbaik
            bagi komunitas kampus
          </p>
        </div>

        {/* Enhanced Business Units Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {businessUnits.map((unit, index) => (
            <div
              key={unit.id}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] overflow-hidden border border-white/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Enhanced Image Container */}
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

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Enhanced Content */}
              <div className="p-6 space-y-5">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {unit.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 font-medium">{unit.description}</p>

                {/* Enhanced Tags */}
                <div className="flex flex-wrap gap-2">
                  {unit.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100/80 backdrop-blur-sm text-gray-600 px-3 py-1.5 rounded-xl text-xs font-semibold border border-gray-200/50 hover:bg-gray-200/80 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enhanced Info Row */}
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

                {/* Enhanced Visit Button */}
                <button
                  onClick={() => onBusinessSelect && onBusinessSelect(unit.id)}
                  className={`w-full ${getButtonStyles(
                    unit.buttonColor,
                  )} text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 group/btn`}
                >
                  <span className="text-base">Kunjungi</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action Section */}
        <div className="relative">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 lg:p-16 text-center border border-white/50 relative overflow-hidden">
            

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-black text-gray-800 mb-6 leading-tight">
                Ingin Melihat Semua Unit Bisnis?
              </h3>
              <p className="text-gray-600 mb-10 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
                Jelajahi katalog lengkap dengan 15+ unit bisnis unggulan yang siap melayani kebutuhan Anda dengan
                layanan terbaik dan inovasi terdepan
              </p>

              {/* Enhanced CTA Button */}
              <div className="relative group inline-block">
                {/* Glowing Background */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
                
                <button 
                  onClick={() => onBusinessSelect && onBusinessSelect(null)}
                  className="relative bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 hover:from-yellow-500 hover:via-orange-500 hover:to-orange-600 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl inline-flex items-center space-x-4 text-lg group overflow-hidden"
                >
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <span className="relative">Lihat Unit Bisnis Lengkap</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300 relative" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessCatalogSection
