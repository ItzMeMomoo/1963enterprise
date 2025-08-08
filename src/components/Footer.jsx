import { Facebook, MessageCircle, Youtube, Instagram, MapPin, Mail, Phone, ArrowRight } from 'lucide-react'

const Footer = () => {
  const businessCategories = [
    { name: "Retail", href: "#retail" },
    { name: "Kuliner", href: "#kuliner" },
    { name: "Akomodasi", href: "#akomodasi" },
    { name: "Agribisnis", href: "#agribisnis" },
    { name: "Layanan Umum", href: "#layanan" },
    { name: "Teaching Factory", href: "#teaching-factory" },
  ]

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:bg-blue-500",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "#",
      color: "hover:bg-green-500",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "#",
      color: "hover:bg-red-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:bg-pink-500",
    },
  ]

  return (
    <footer
      id="footer"
      className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 text-white overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        
        {/* Gradient Overlays for Depth */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-300/8 to-transparent rounded-full blur-2xl"></div>
      </div>

      {/* Main Footer Content - Reduced padding */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-white/20">
                <img src="/1963logo.png" alt="1963 Enterprise Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-3xl font-black text-white tracking-tight">1963</div>
                <div className="text-lg font-semibold text-blue-200 tracking-wider">Enterprise</div>
              </div>
            </div>

            {/* Enhanced Brand Description - Reduced text sizes */}
            <div className="space-y-3">
              <p className="text-blue-100 leading-relaxed text-base font-medium">
                Unit bisnis kampus yang adaptif, inovatif, dan berdaya saing tinggi untuk kemajuan komunitas IPB
                University.
              </p>
              <p className="text-blue-200 text-sm leading-relaxed">
                Mengelola berbagai lini bisnis dari agribisnis hingga gaya hidup dengan semangat
                techno-socio-entrepreneurship.
              </p>
            </div>

            {/* Enhanced Social Media Section - Reduced sizes */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center space-x-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full"></div>
                <span>Ikuti Kami</span>
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${social.color} group hover:border-white/40`}

                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Unit Bisnis Section - Reduced sizes */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full shadow-lg"></div>
              <span>Unit Bisnis</span>
            </h3>
            <div className="space-y-3">
              {businessCategories.map((category, index) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="group flex items-center space-x-3 text-blue-100 hover:text-white transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-1.5 h-1.5 bg-blue-300 rounded-full group-hover:bg-white transition-colors duration-300 group-hover:scale-125"></div>
                  <span className="font-semibold text-sm">{category.name}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ml-auto" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section - Reduced sizes */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-green-500 rounded-full shadow-lg"></div>
              <span>Kontak</span>
            </h3>
            <div className="space-y-4">
              {/* Address - Reduced sizes */}
              <div className="group p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-1 text-base">Alamat</h4>
                    <p className="text-blue-100 leading-relaxed text-sm">
                      Jl. Raya Dramaga Kampus IPB
                      <br />
                      Dramaga Bogor 16680 West Java,
                      <br />
                      Indonesia
                    </p>
                  </div>
                </div>
              </div>

              {/* Email - Reduced sizes */}
              <div className="group p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-1 text-base">Email</h4>
                    <a
                      href="mailto:bisnis@apps.ipb.ac.id"
                      className="text-blue-100 hover:text-white transition-colors duration-300 font-medium text-sm"
                    >
                      bisnis@apps.ipb.ac.id
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone - Reduced sizes */}
              <div className="group p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-1 text-base">Telepon</h4>
                    <a
                      href="tel:+622518622642"
                      className="text-blue-100 hover:text-white transition-colors duration-300 font-medium text-sm"
                    >
                      +62 251 8622642
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Bar - Reduced padding */}
      <div className="relative border-t border-white/20 bg-blue-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
            <div className="text-blue-200 font-medium text-sm">
              {/* Added text-sm */}© Badan Investasi dan Bisnis IPB University. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements - Reduced sizes */}
      <div className="absolute top-16 right-16 w-3 h-3 bg-yellow-400/60 rounded-full animate-pulse"></div>
      <div className="absolute bottom-24 left-12 w-2 h-2 bg-orange-400/40 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-white/30 rounded-full animate-ping"></div>
    </footer>
  )
}

export default Footer
