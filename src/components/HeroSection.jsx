const HeroSection = ({ onExploreClick }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/backgroundHome.jpg')`,
        }}
      />

      {/* Enhanced Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/85 via-blue-700/80 to-blue-800/75"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-blue-500/10"></div>

      {/* Content - with top padding to account for fixed header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                <span className="block">Discover the Future of</span>
                <span className="block">Campus-Driven Business</span>
              </h1>

              <div className="flex items-center space-x-4">
                <div className="w-1.5 h-16 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full shadow-lg"></div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider">1963 ENTERPRISE</h2>
              </div>
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/95 max-w-2xl font-medium">
              Dari agribisnis hingga gaya hidup, 1963 Enterprise mengelola unit-unit bisnis kampus yang adaptif,
              inovatif, dan berdaya saing
            </p>

            <div className="pt-6">
              {/* Enhanced CTA Button with Multiple Interactions */}
              <div className="relative group">
                {/* Glowing Background Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500 animate-pulse"></div>
                
                {/* Main Button */}
                <button 
                  onClick={onExploreClick}
                  className="relative group bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 text-white font-bold px-12 py-5 rounded-3xl text-lg sm:text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-4 shadow-xl overflow-hidden"
                >
                  {/* Animated Background Shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Button Content */}
                  <div className="relative flex items-center space-x-4">
                    {/* Animated Icon Container */}
                    <div className="relative">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-12">
                        <svg
                          className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      {/* Pulsing Ring */}
                      <div className="absolute inset-0 w-8 h-8 border-2 border-white/40 rounded-full animate-ping group-hover:animate-none"></div>
                    </div>
                    
                    {/* Text with Typing Effect */}
                    <span className="relative">
                      Temukan Unit Bisnis Kami
                      {/* Underline Animation */}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 group-hover:w-full transition-all duration-500"></div>
                    </span>
                    
                    {/* Animated Arrow */}
                    <div className="relative overflow-hidden">
                      <svg
                        className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Ripple Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-active:opacity-100 bg-white/20 transition-opacity duration-150"></div>
                </button>
                
                {/* Floating Particles */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-300 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-orange-300 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
                <div className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-red-300 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300"></div>
              </div>
            </div>
          </div>

          {/* Right Content - Logo Circle */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-full blur-2xl"></div>

              {/* Main Logo Circle */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] bg-white rounded-full flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-500 border-8 border-blue-200/50">
                <img
                  src="/1963Enterprise.png"
                  alt="1963 Enterprise Logo"
                  className="w-full h-full object-contain p-8 hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-white/40 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/4 -right-8 w-3 h-3 bg-yellow-300/60 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
