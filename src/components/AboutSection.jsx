"use client"

import { Briefcase, Users, Package, Award, Zap, Target, Heart, Sparkles, TrendingUp, Globe, Shield, Rocket, Play, ArrowRight } from 'lucide-react'
import { useState, useEffect, useRef, useCallback } from 'react'

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ units: 0, partners: 0, products: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  // Optimized Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
          // Start counter animations
          animateCounters()
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '50px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  // Optimized counter animation
  const animateCounters = useCallback(() => {
    const targets = { units: 15, partners: 50, products: 100 }
    const duration = 1500
    const steps = 30

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 2)

      setCounters({
        units: Math.floor(targets.units * easeOut),
        partners: Math.floor(targets.partners * easeOut),
        products: Math.floor(targets.products * easeOut)
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounters(targets)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  const features = [
    {
      icon: Target,
      title: "Visi Inovatif",
      description: "Mengembangkan ekosistem bisnis kampus yang berkelanjutan",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Nilai Kemanusiaan", 
      description: "Mengutamakan kesejahteraan komunitas kampus",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Zap,
      title: "Teknologi Terdepan",
      description: "Menerapkan inovasi dalam operasional bisnis",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Dampak Global",
      description: "Berkontribusi pada pembangunan berkelanjutan",
      gradient: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-20 overflow-hidden" 
      id="tentang"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-60 h-60 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-xl animate-pulse delay-500"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 left-1/4 w-4 h-4 bg-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-48 right-1/3 w-3 h-3 bg-orange-400/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-purple-400/20 rounded-full animate-bounce delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center justify-center mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full shadow-lg"></div>
            <span className="mx-6 text-gray-700 font-black text-xl">Tentang Kami</span>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full shadow-lg"></div>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight">
            <span className="text-gray-800">Mengenal Lebih Dekat</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              1963 Enterprise
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Wujud baru dari unit-unit bisnis yang tumbuh dan berkembang di lingkungan IPB University, 
            hadir sebagai representasi modern dari semangat inovasi dan kewirausahaan
          </p>
        </div>

        {/* Main Hero Section with Images */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Side - Enhanced Visual Section */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              {/* Main Image Container with Creative Layout */}
              <div className="relative">
                {/* Background Business Collage */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="backgroundHome.jpg"
                    alt="1963 Enterprise Business Units"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                      <h4 className="font-black text-gray-800 mb-2">Beragam Unit Bisnis</h4>
                      <p className="text-gray-600 text-sm">Dari kuliner hingga teknologi, semua dalam satu ekosistem</p>
                    </div>
                  </div>
                </div>

                {/* Floating Logo */}
                <div className="absolute -top-8 -right-8 bg-white rounded-3xl p-6 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500 border-4 border-blue-100">
                  <img
                    src="/1963enterprise.png"
                    alt="1963 Enterprise Logo"
                    className="w-24 h-24 object-contain"
                  />
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-4 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="text-2xl font-black">15+</div>
                  <div className="text-sm opacity-90">Unit Bisnis</div>
                </div>

                <div className="absolute top-1/2 -right-12 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-4 shadow-xl transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="text-2xl font-black">50+</div>
                  <div className="text-sm opacity-90">Mitra</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-3xl blur-xl"></div>
            </div>
          </div>

          {/* Right Side - Enhanced Content */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-8">
              {/* Logo Integration */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <img
                    src="/1963enterprise.png"
                    alt="1963 Enterprise"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    1963 Enterprise
                  </h3>
                  <p className="text-gray-600 font-semibold">Inovasi • Kolaborasi • Berkelanjutan</p>
                </div>
              </div>

              {/* Enhanced Story Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-black text-gray-800">Cerita Kami</h4>
                  </div>

                  <p className="text-gray-700 leading-relaxed font-medium">
                    1963 Enterprise adalah wujud baru dari unit-unit bisnis yang tumbuh dan berkembang di lingkungan IPB
                    University, hadir sebagai representasi modern dari semangat inovasi, kewirausahaan, dan kolaborasi
                    lintas sektor.
                  </p>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border-l-4 border-orange-400 relative">
                    <div className="absolute top-4 right-4 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-orange-500" />
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      Melalui 1963 Enterprise, kami mempersembahkan beragam unit bisnis yang bergerak di bidang kuliner,
                      agribisnis, ritel, hospitality, edukasi, hingga layanan publik dengan semangat 
                      <span className="font-bold text-orange-600"> techno-socio-entrepreneurship</span>.
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group/btn">
                    <Play className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
                    <span>Jelajahi Unit Bisnis</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Statistics Section */}
        <div className={`transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl overflow-hidden shadow-2xl">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "100px 100px",
                }}
              ></div>
            </div>

            <div className="relative p-12 lg:p-16">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-black text-white mb-6">
                  Dampak & Pencapaian
                </h3>
                <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                  Angka-angka yang menunjukkan komitmen kami dalam memberikan nilai terbaik bagi komunitas kampus
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Enhanced Stats Cards */}
                <div className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Briefcase className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-5xl font-black text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {counters.units}+
                    </div>
                    <div className="text-gray-600 font-bold text-lg">Unit Bisnis Aktif</div>
                    <div className="text-gray-500 text-sm mt-2">Beragam sektor industri</div>
                  </div>
                </div>

                <div className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-5xl font-black text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                      {counters.partners}+
                    </div>
                    <div className="text-gray-600 font-bold text-lg">Mitra Bisnis</div>
                    <div className="text-gray-500 text-sm mt-2">Kerjasama strategis</div>
                  </div>
                </div>

                <div className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Package className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-5xl font-black text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                      {counters.products}+
                    </div>
                    <div className="text-gray-600 font-bold text-lg">Produk & Layanan</div>
                    <div className="text-gray-500 text-sm mt-2">Solusi inovatif</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
