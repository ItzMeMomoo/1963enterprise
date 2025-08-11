"use client"

import {
  ArrowRight,
  Star,
  Clock,
  MapPin,
  Phone,
  Mail,
  Instagram,
  ExternalLink,
  MessageCircle,
  Camera,
  ChevronLeft,
  ChevronRight,
  Navigation,
  Award,
  Zap,
  X,
} from "lucide-react"
import { useState, useEffect } from "react"

const BusinessUnit = ({ selectedBusinessId, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showImageModal, setShowImageModal] = useState(false)

  const businessUnits = [
    {
      id: 1,
      name: "Daily Us",
      category: "Retail & Produk",
      description:
        "Convenience store modern yang menyediakan berbagai kebutuhan sehari-hari mahasiswa dengan harga terjangkau. Dari makanan ringan, minuman, alat tulis, hingga kebutuhan darurat, semua tersedia 24/7 untuk mendukung aktivitas kampus Anda.",
      detailedDescription:
        "Daily Us hadir sebagai solusi lengkap kebutuhan mahasiswa dengan konsep one-stop shopping. Kami menyediakan lebih dari 500 jenis produk mulai dari makanan, minuman, alat tulis, produk kesehatan, hingga merchandise IPB. Dengan sistem kasir modern dan pembayaran digital, berbelanja menjadi lebih mudah dan cepat.",
      image: "/dailyus.jpeg",
      logo: "/dailyus-logo.png",
      gallery: [
        "/dailyus.jpeg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Retail", "Produk", "Kopi", "24/7", "Mahasiswa"],
      buttonColor: "purple",
      location: "IPB Dramaga (Samping Pintu Masuk Bara)",
      detailedLocation: "Jl. Raya Dramaga, Kampus IPB Dramaga, Bogor 16680",
      hours: "07:00-22:00",
      phone: "+6281234567890",
      email: "dailyus@ipb.ac.id",
      instagram: "@dailyusby63",
      rating: 4.8,
      reviewCount: 1247,
      priceRange: "Rp 5.000 - Rp 50.000",
      products: [
        {
          name: "Kopi Arabica Premium",
          price: "Rp 25.000",
          image: "/placeholder.svg?height=200&width=200&text=Kopi+Arabica",
          description: "Kopi arabica pilihan dengan cita rasa yang khas",
          shopLink: "https://shopee.co.id/dailyus-kopi-arabica",
          category: "Minuman",
        },
        {
          name: "Roti Tawar Gandum",
          price: "Rp 12.000",
          image: "/placeholder.svg?height=200&width=200&text=Roti+Gandum",
          description: "Roti tawar gandum segar tanpa pengawet",
          shopLink: "https://tokopedia.com/dailyus/roti-gandum",
          category: "Makanan",
        },
        {
          name: "Alat Tulis Set",
          price: "Rp 35.000",
          image: "/placeholder.svg?height=200&width=200&text=Alat+Tulis",
          description: "Set lengkap alat tulis untuk mahasiswa",
          shopLink: "https://shopee.co.id/dailyus-alat-tulis",
          category: "Alat Tulis",
        },
        {
          name: "Masker KF94",
          price: "Rp 8.000",
          image: "/placeholder.svg?height=200&width=200&text=Masker+KF94",
          description: "Masker kesehatan standar KF94",
          shopLink: "https://tokopedia.com/dailyus/masker-kf94",
          category: "Kesehatan",
        },
        {
          name: "Merchandise IPB",
          price: "Rp 45.000",
          image: "/placeholder.svg?height=200&width=200&text=Merchandise",
          description: "Kaos dan merchandise resmi IPB",
          shopLink: "https://shopee.co.id/dailyus-merchandise",
          category: "Merchandise",
        },
        {
          name: "Snack Sehat",
          price: "Rp 15.000",
          image: "/placeholder.svg?height=200&width=200&text=Snack+Sehat",
          description: "Berbagai pilihan snack sehat dan bergizi",
          shopLink: "https://tokopedia.com/dailyus/snack-sehat",
          category: "Makanan",
        },
      ],
      facilities: ["Parkir Motor", "WiFi Gratis", "AC", "CCTV", "Pembayaran Digital"],
      specialOffers: [
        "Diskon 10% untuk mahasiswa IPB",
        "Buy 2 Get 1 untuk produk tertentu",
        "Cashback 5% pembayaran digital",
      ],
    },
    {
      id: 2,
      name: "Botani Mart",
      category: "Retail & Produk",
      description:
        "Toko pertanian modern yang menjual bibit, alat berkebun, pupuk, dan berbagai kebutuhan pertanian lainnya dengan harga terjangkau untuk mendukung kegiatan pertanian dan berkebun di lingkungan kampus IPB.",
      detailedDescription:
        "Botani Mart adalah toko pertanian terlengkap di kawasan kampus yang menyediakan segala kebutuhan pertanian modern. Dari bibit unggul, alat berkebun profesional, pupuk organik, hingga sistem irigasi modern, semua tersedia untuk mendukung praktik pertanian berkelanjutan dan penelitian agrikultur.",
      image: "/placeholder-moj9a.png",
      logo: "/botanimart-logo.png",
      gallery: [
        "/agricultural-store-interior.png",
        "/placeholder-c6o26.png",
        "/placeholder-u8xhf.png",
        "/organic-fertilizer-area.png",
      ],
      tags: ["Pertanian", "Alat", "Modern", "Bibit", "Pupuk"],
      buttonColor: "purple",
      location: "Jl. Raya Dramaga",
      detailedLocation: "Jl. Raya Dramaga KM 6, Kampus IPB Dramaga, Bogor 16680",
      hours: "08:00-17:00",
      phone: "+6281280505059",
      email: "botanimart@ipb.ac.id",
      instagram: "@botanimartipb",
      rating: 4.6,
      reviewCount: 1041,
      priceRange: "Rp 5.000 - Rp 500.000",
      facilities: ["Konsultasi Gratis", "Delivery Service", "Parkir Luas", "Demo Area", "After Sales Service"],
      products: ["Bibit Tanaman", "Alat Berkebun", "Pupuk Organik", "Sistem Irigasi", "Pestisida Alami"],
      specialOffers: [
        "Konsultasi gratis untuk mahasiswa",
        "Paket starter berkebun",
        "Diskon pembelian dalam jumlah besar",
      ],
    },
    {
      id: 3,
      name: "IPB Merchandise Store",
      category: "Retail & Produk",
      description:
        "Toko resmi penjualan merchandise IPB seperti jaket, topi, kaos, dan berbagai souvenir dengan desain eksklusif dan kualitas premium untuk membanggakan almamater.",
      detailedDescription:
        "IPB Merchandise Store adalah toko resmi yang menyediakan berbagai produk merchandise berkualitas tinggi dengan desain eksklusif IPB. Dari apparel casual hingga formal, aksesoris, hingga souvenir unik, semua dibuat dengan standar kualitas tinggi untuk menunjukkan kebanggaan sebagai bagian dari keluarga besar IPB.",
      image: "/generic-merchandise-store.png",
      logo: "/ipb-merch-logo.png",
      gallery: ["/ipb-merchandise-display.png", "/ipb-apparel.png", "/ipb-accessories.png", "/ipb-souvenirs.png"],
      tags: ["Merchandise", "IPB", "Resmi", "Apparel", "Souvenir"],
      buttonColor: "purple",
      location: "IPB Dramaga (Belakang GWW)",
      detailedLocation: "Belakang Gedung Grha Widya Wisuda, Kampus IPB Dramaga, Bogor 16680",
      hours: "08:00-17:00",
      phone: "+6281388489123",
      email: "merchandise@ipb.ac.id",
      instagram: "@ipbmerch.1963",
      rating: 4.7,
      reviewCount: 567,
      priceRange: "Rp 25.000 - Rp 350.000",
      facilities: ["Custom Design", "Bulk Order", "Gift Wrapping", "Size Exchange", "Quality Guarantee"],
      products: ["T-Shirts & Polo", "Jaket & Hoodie", "Topi & Aksesoris", "Tas & Ransel", "Souvenir Unik"],
      specialOffers: ["Alumni discount 15%", "Graduation package", "Custom order untuk organisasi"],
    },
    {
      id: 4,
      name: "BreadCast",
      category: "Kuliner & Kafe",
      description:
        "Bakery artisan yang menyediakan roti segar setiap harinya tanpa pengawet, dibuat dari bahan-bahan lokal berkualitas tinggi. Kombinasi sempurna antara tradisi dan inovasi dalam setiap gigitan.",
      detailedDescription:
        "BreadCast adalah bakery artisan yang berkomitmen menghadirkan roti dan kue berkualitas tinggi tanpa pengawet buatan. Setiap produk dibuat fresh daily menggunakan bahan-bahan lokal pilihan seperti tepung organik, gula aren, dan rempah nusantara untuk menciptakan cita rasa autentik Indonesia.",
      image: "/breadcast.jpg",
      logo: "/breadcast-logo.png",
      gallery: [
        "/breadcast.jpg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Bakery", "Roti", "Sehat", "Lokal", "Tanpa Pengawet"],
      buttonColor: "orange",
      location: "IPB Dramaga (Depan LSI IPB dan Perpus IPB)",
      detailedLocation: "Jl. Agatis, Kampus IPB Dramaga, Bogor 16680",
      hours: "06:00-20:00",
      phone: "+6281377043310",
      email: "breadcast@ipb.ac.id",
      instagram: "@breadcast.bakery",
      rating: 4.7,
      reviewCount: 634,
      priceRange: "Rp 8.000 - Rp 45.000",
      facilities: ["Takeaway", "Pre-order", "Custom Cake", "Catering", "Delivery"],
      products: ["Artisan Bread", "Local Pastries", "Custom Cakes", "Healthy Snacks", "Traditional Cookies"],
      specialOffers: ["Pre-order discount 10%", "Bulk order special price", "Birthday cake package"],
    },
    {
      id: 5,
      name: "The 63 Coffee House",
      category: "Kuliner & Kafe",
      description:
        "Contemporary coffee house dengan suasana premium yang menyajikan menu lengkap dari makanan berat hingga specialty coffee. Tempat ideal untuk belajar, meeting, atau sekedar bersantai dengan atmosfer yang nyaman dan modern.",
      detailedDescription:
        "The 63 Coffee House menghadirkan pengalaman kafe premium di lingkungan kampus dengan interior modern dan suasana yang cozy. Kami menyajikan specialty coffee dari biji kopi pilihan nusantara, menu makanan western dan asian fusion, serta berbagai dessert house-made yang lezat.",
      image: "/namtiga.jpg",
      logo: "/63coffee-logo.png",
      gallery: [
        "/namtiga.jpg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Kafe", "Premium", "Coffee", "Meeting", "Study Space"],
      buttonColor: "orange",
      location: "IPB Dramaga (Jalan Baru)",
      detailedLocation: "Jl. Taman Kencana No. 3, Kampus IPB Dramaga, Bogor 16680",
      hours: "08:00-21:00",
      phone: "+6281378404742",
      email: "coffee63@ipb.ac.id",
      instagram: "@namtigacoffee",
      rating: 4.9,
      reviewCount: 892,
      priceRange: "Rp 15.000 - Rp 85.000",
      facilities: ["WiFi Gratis", "AC", "Outdoor Seating", "Private Room", "Live Music"],
      products: ["Specialty Coffee", "Western Food", "Asian Fusion", "Desserts", "Healthy Drinks"],
      specialOffers: ["Happy Hour 14:00-17:00", "Student Discount 15%", "Free WiFi unlimited"],
    },
    {
      id: 6,
      name: "Resto Taman Koleksi",
      category: "Kuliner & Kafe",
      description:
        "Kafe dan restoran yang juga menyediakan layanan meeting room, VIP room, serta pemesanan catering untuk berbagai acara dengan suasana taman yang asri dan nyaman.",
      detailedDescription:
        "Resto Taman Koleksi menghadirkan pengalaman dining yang unik dengan konsep garden restaurant. Berlokasi di area taman yang asri, kami menyajikan menu fusion Indonesia-Western dengan bahan-bahan segar dan berkualitas. Dilengkapi dengan fasilitas meeting room dan layanan catering untuk berbagai acara.",
      image: "/placeholder.svg?height=300&width=400",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Resto", "Meeting", "Catering", "Garden", "Fusion"],
      buttonColor: "orange",
      location: "Jln. Padjajaran (IPB Baranangsiang)",
      detailedLocation: "Jl. Padjajaran, IPB Baranangsiang, Bogor 16143",
      hours: "10:00-22:00",
      phone: "+6281361403322",
      email: "tamankoleksi@ipb.ac.id",
      instagram: "@takolipb",
      website: "https://tamankoleksi.ipb.ac.id",
      rating: 4.5,
      reviewCount: 445,
      priceRange: "Rp 25.000 - Rp 150.000",
      facilities: ["Meeting Room", "VIP Room", "Catering Service", "Garden Setting", "Private Parking"],
      products: ["Indonesian Cuisine", "Western Food", "Meeting Packages", "Catering Service", "Event Hosting"],
      specialOffers: ["Meeting package discount", "Catering bulk order", "Weekend family package"],
    },
    {
      id: 7,
      name: "Botani Kopi Nusantara",
      category: "Kuliner & Kafe",
      description:
        "Kafe yang menyajikan kopi di tempat Student Service Center dengan berbagai menu kopi, minuman non kopi, dan berbagai pastry dengan cita rasa nusantara yang autentik.",
      detailedDescription:
        "Botani Kopi Nusantara menghadirkan cita rasa kopi nusantara yang autentik di jantung kampus IPB. Kami bangga menyajikan kopi dari berbagai daerah di Indonesia dengan teknik brewing yang tepat, dilengkapi dengan pastry dan snack lokal yang menggugah selera.",
      image: "/placeholder.svg?height=300&width=400",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Kopi", "Nusantara", "Pastry", "Student Center", "Autentik"],
      buttonColor: "orange",
      location: "IPB Dramaga (Gedung Andi Hakim Nasution)",
      detailedLocation: "Gedung Andi Hakim Nasution, Student Service Center, Kampus IPB Dramaga, Bogor 16680",
      hours: "07:00-21:00",
      phone: "+6281359338754",
      email: "botanikopi@ipb.ac.id",
      instagram: "@botanikopiinusantara",
      website: "https://botanikopi.ipb.ac.id",
      rating: 4.6,
      reviewCount: 523,
      priceRange: "Rp 12.000 - Rp 45.000",
      facilities: ["Study Area", "WiFi", "AC", "Takeaway", "Student Discount"],
      products: ["Nusantara Coffee", "Local Pastries", "Traditional Snacks", "Non-Coffee Drinks", "Coffee Beans"],
      specialOffers: ["Student discount 20%", "Coffee loyalty card", "Traditional snack combo"],
    },
    {
      id: 8,
      name: "Chef 63",
      category: "Kuliner & Kafe",
      description:
        "Kantin area yang menyajikan berbagai pilihan makanan berat dengan harga terjangkau dan cita rasa yang berkesan di kawasan IPB dengan menu yang beragam dan bergizi.",
      detailedDescription:
        "Chef 63 adalah kantin modern yang mengutamakan kualitas makanan dengan harga terjangkau untuk komunitas kampus. Kami menyajikan menu Indonesia dan internasional yang diolah dengan higienis dan bergizi, cocok untuk mahasiswa, dosen, dan staff kampus.",
      image: "/placeholder.svg?height=300&width=400",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Kantin", "Terjangkau", "Makanan", "Bergizi", "Mahasiswa"],
      buttonColor: "orange",
      location: "IPB Dramaga (Sekitar Asrama Pusat IPB)",
      detailedLocation: "Area Asrama Pusat, Kampus IPB Dramaga, Bogor 16680",
      hours: "06:00-20:00",
      phone: "+6281234567891",
      email: "chef63@ipb.ac.id",
      instagram: "@kantongbychef63",
      website: "https://chef63.ipb.ac.id",
      rating: 4.4,
      reviewCount: 678,
      priceRange: "Rp 8.000 - Rp 25.000",
      facilities: ["Dine-in", "Takeaway", "Student Discount", "Clean Kitchen", "Halal Certified"],
      products: ["Nasi Campur", "Mie Ayam", "Gado-gado", "Soto", "Juice & Minuman"],
      specialOffers: ["Paket hemat mahasiswa", "Diskon pembelian di atas 50rb", "Menu spesial hari Jumat"],
    },
    {
      id: 9,
      name: "Wisma Landhuis",
      category: "Akomodasi Penginapan & Sewa Gedung",
      description:
        "Wisma tempat tinggal sementara dengan fasilitas lengkap dan berbagai fasilitas penunjang serta ruang rapat untuk tamu kampus dan acara resmi.",
      detailedDescription:
        "Wisma Landhuis adalah akomodasi premium untuk tamu kampus, dosen tamu, dan peserta acara resmi IPB. Dengan arsitektur klasik dan fasilitas modern, wisma ini menyediakan kenyamanan tingkat hotel dengan suasana akademis yang khas.",
      image: "/placeholder.svg?height=300&width=400",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Wisma", "Penginapan", "Meeting", "Premium", "Tamu Kampus"],
      buttonColor: "blue",
      location: "IPB Dramaga (Jalan Tanjung)",
      detailedLocation: "Jl. Tanjung, Kampus IPB Dramaga, Bogor 16680",
      hours: "24 Jam",
      phone: "+6281312381377",
      email: "landhuis@ipb.ac.id",
      instagram: "@penginapan_ipb",
      website: "https://landhuis.ipb.ac.id",
      rating: 4.3,
      reviewCount: 287,
      priceRange: "Rp 200.000 - Rp 500.000/malam",
      facilities: ["Meeting Room", "WiFi", "AC", "Restaurant", "Parking", "24/7 Service"],
      products: ["Standard Room", "Deluxe Room", "Meeting Package", "Event Hosting", "Catering Service"],
      specialOffers: ["Academic rate discount", "Long stay package", "Conference package deal"],
    },
    {
      id: 10,
      name: "Asrama Internasional",
      category: "Akomodasi Penginapan & Sewa Gedung",
      description:
        "Fasilitas penginapan modern untuk mahasiswa internasional dan tamu kampus dengan standar internasional. Dilengkapi dengan berbagai fasilitas pendukung untuk kenyamanan tinggal jangka pendek maupun panjang.",
      detailedDescription:
        "Asrama Internasional IPB menyediakan akomodasi berkualitas tinggi dengan standar internasional untuk mahasiswa asing, peneliti, dan tamu kampus. Fasilitas lengkap meliputi kamar ber-AC, WiFi kencang, dapur bersama, ruang belajar, dan area rekreasi untuk mendukung kehidupan akademik yang produktif.",
      image: "/AI.jpg",
      gallery: [
        "/AI.jpg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Asrama", "Internasional", "Penginapan", "Modern", "Fasilitas Lengkap"],
      buttonColor: "blue",
      location: "IPB Dramaga (Jalan Tanjung)",
      detailedLocation: "Jl. Tanjung Raya, Kampus IPB Dramaga, Bogor 16680",
      hours: "24 Jam",
      phone: "+6281312381377",
      email: "asrama@ipb.ac.id",
      instagram: "@penginapan_ipb",
      website: "https://asrama.ipb.ac.id",
      rating: 4.6,
      reviewCount: 423,
      priceRange: "Rp 150.000 - Rp 400.000/malam",
      facilities: ["AC", "WiFi", "Laundry", "Security 24/7", "Common Kitchen", "Study Room"],
      products: ["Single Room", "Twin Room", "Family Room", "Long-term Stay", "Short-term Stay"],
      specialOffers: ["Monthly rate discount", "Student special price", "Group booking discount"],
    },
    {
      id: 11,
      name: "Gedung Alumni IPB",
      category: "Akomodasi Penginapan & Sewa Gedung",
      description:
        "Gedung serbaguna untuk gathering, seminar, dan berbagai acara besar lainnya dengan fasilitas lengkap dan kapasitas besar untuk event kampus.",
      detailedDescription:
        "Gedung Alumni IPB adalah venue premium untuk berbagai acara besar seperti seminar internasional, konferensi, wisuda, dan gathering alumni. Dengan fasilitas audio visual terkini dan kapasitas hingga 1000 orang, gedung ini menjadi pilihan utama untuk event berkelas di IPB.",
      image: "/placeholder.svg?height=300&width=400",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Gedung", "Seminar", "Gathering", "Event", "Alumni"],
      buttonColor: "blue",
      location: "Jl. Raya Padjajaran",
      detailedLocation: "Jl. Raya Padjajaran, Bogor 16143",
      hours: "08:00-22:00",
      phone: "+62251-8622642",
      email: "alumni@ipb.ac.id",
      instagram: "@alumni_ipb",
      website: "https://alumni.ipb.ac.id",
      rating: 4.5,
      reviewCount: 198,
      priceRange: "Rp 5.000.000 - Rp 25.000.000/event",
      facilities: ["Auditorium 1000 pax", "Audio Visual", "AC", "Parking", "Catering", "Security"],
      products: ["Main Auditorium", "Meeting Rooms", "Exhibition Hall", "Catering Service", "Event Management"],
      specialOffers: ["Alumni discount 20%", "Academic event package", "Multi-day event discount"],
    },
    {
      id: 12,
      name: "Daily Wash 63",
      category: "Layanan Harian & Kebersihan",
      description:
        "Laundry harian yang menyajikan kebutuhan cuci pakaian mahasiswa dengan tarif sesuai dengan kemampuan mahasiswa dan layanan yang cepat dan bersih.",
      detailedDescription:
        "Daily Wash 63 adalah layanan laundry yang dirancang khusus untuk kebutuhan mahasiswa dengan tarif terjangkau dan kualitas pencucian yang baik. Kami menggunakan deterjen berkualitas dan mesin cuci modern untuk hasil yang bersih dan wangi.",
      image: "/placeholder.svg?height=300&width=400",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Laundry", "Harian", "Terjangkau", "Mahasiswa", "Cepat"],
      buttonColor: "red",
      location: "IPB Dramaga",
      detailedLocation: "Area Asrama, Kampus IPB Dramaga, Bogor 16680",
      hours: "07:00-21:00",
      phone: "+6281234567893",
      email: "dailywash@ipb.ac.id",
      instagram: "@dailywash63",
      website: "https://dailywash63.ipb.ac.id",
      rating: 4.2,
      reviewCount: 234,
      priceRange: "Rp 3.000 - Rp 15.000/kg",
      facilities: [
        "Express Service",
        "Pickup & Delivery",
        "Student Discount",
        "Quality Guarantee",
        "Fragrance Options",
      ],
      products: ["Cuci Kering", "Cuci Setrika", "Dry Cleaning", "Sepatu & Tas", "Express 3 Jam"],
      specialOffers: ["Paket bulanan mahasiswa", "Diskon member 15%", "Gratis pickup untuk order di atas 10kg"],
    },
    {
      id: 13,
      name: "CARe Wash",
      category: "Layanan Harian & Kebersihan",
      description:
        "Layanan cuci kendaraan profesional dengan teknologi modern dan ramah lingkungan. Melayani cuci motor dan mobil dengan hasil maksimal dan harga terjangkau untuk komunitas kampus.",
      detailedDescription:
        "CARe Wash 63 menghadirkan layanan cuci kendaraan berkualitas tinggi dengan teknologi modern dan produk ramah lingkungan. Kami melayani cuci motor, mobil, dan layanan detailing dengan tenaga ahli berpengalaman untuk menjaga kendaraan Anda tetap bersih dan terawat.",
      image: "/carewash.jpeg",
      gallery: [
        "/carewash.jpeg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Cuci Mobil", "Layanan", "Kendaraan", "Ramah Lingkungan", "Profesional"],
      buttonColor: "red",
      location: "IPB Dramaga",
      detailedLocation: "Area Parkir Utama, Kampus IPB Dramaga, Bogor 16680",
      hours: "08:00-17:00",
      phone: "+6281234567892",
      email: "carewash@ipb.ac.id",
      instagram: "@carewash63",
      website: "https://carewash63.ipb.ac.id",
      rating: 4.5,
      reviewCount: 389,
      priceRange: "Rp 10.000 - Rp 75.000",
      facilities: ["High Pressure Wash", "Vacuum Cleaner", "Wax Service", "Interior Cleaning", "Waiting Area"],
      products: ["Motor Wash", "Car Wash", "Detailing", "Wax & Polish", "Interior Cleaning"],
      specialOffers: ["Student discount 20%", "Package deals", "Membership program"],
    },
    {
      id: 14,
      name: "Think Fresh",
      category: "Agribisnis & Teaching Factory",
      description:
        "Unit agribisnis yang menghasilkan dan memasarkan sayuran organik dan non-organik segar langsung dari kebun ke konsumen. Menerapkan teknologi pertanian modern untuk hasil berkualitas tinggi.",
      detailedDescription:
        "Think Fresh adalah unit agribisnis modern yang menggabungkan teknologi pertanian terdepan dengan praktik berkelanjutan. Kami memproduksi sayuran organik dan non-organik berkualitas tinggi menggunakan sistem hidroponik, greenhouse technology, dan smart farming untuk memastikan kesegaran dan nutrisi optimal.",
      image: "/Thinkfresh.png",
      gallery: [
        "/thinkfresh.jpg",
        "/Thinkfresh.png",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Organik", "Sayuran", "Fresh", "Hidroponik", "Smart Farming"],
      buttonColor: "green",
      location: "Agribusiness and Technology Park IPB",
      detailedLocation: "Agribusiness and Technology Park, Kampus IPB Dramaga, Bogor 16680",
      hours: "08:00-17:00",
      phone: "+6281566783767",
      email: "thinkfresh@ipb.ac.id",
      instagram: "@thinkfreshpb",
      website: "https://thinkfresh.ipb.ac.id",
      rating: 4.8,
      reviewCount: 756,
      priceRange: "Rp 10.000 - Rp 75.000/kg",
      facilities: ["Greenhouse", "Cold Storage", "Packaging Center", "Quality Control", "Delivery Service"],
      products: ["Organic Vegetables", "Leafy Greens", "Herbs", "Microgreens", "Seasonal Produce"],
      specialOffers: ["Subscription box discount", "Bulk order special price", "Seasonal promotions"],
    },
    {
      id: 15,
      name: "Closed House System IPB",
      category: "Agribisnis & Teaching Factory",
      description:
        "Pemeliharaan ayam modern dengan teknologi terdepan berbasis teknologi otomatis. Juga berbagai teknologi sebagai pembelajaran dan penelitian peternakan modern.",
      detailedDescription:
        "Closed House System IPB adalah fasilitas peternakan ayam modern yang menggunakan teknologi otomatis terdepan. Sistem ini tidak hanya untuk produksi tetapi juga sebagai laboratorium pembelajaran dan penelitian untuk mahasiswa Fakultas Peternakan IPB dalam mempelajari teknologi peternakan masa depan.",
      image: "/placeholder.svg?height=300&width=400",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Ayam", "Modern", "Teknologi", "Otomatis", "Penelitian"],
      buttonColor: "green",
      location: "IPB Dramaga",
      detailedLocation: "Teaching Factory, Kampus IPB Dramaga, Bogor 16680",
      hours: "24 Jam",
      phone: "+6281234567894",
      email: "closedhouse@ipb.ac.id",
      instagram: "@closedhouse_ipb",
      website: "https://closedhouse.ipb.ac.id",
      rating: 4.4,
      reviewCount: 156,
      priceRange: "Rp 25.000 - Rp 45.000/kg",
      facilities: ["Climate Control", "Automatic Feeding", "Health Monitoring", "Research Lab", "Student Training"],
      products: ["Fresh Chicken", "Organic Eggs", "Research Data", "Training Programs", "Consultation Service"],
      specialOffers: ["Bulk order discount", "Research collaboration", "Student internship program"],
    },
    {
      id: 16,
      name: "Kantin Area Kampus",
      category: "Kantin Area Kampus",
      description:
        "Pusat layanan mahasiswa dengan berbagai pilihan makanan dan minuman yang terjangkau dan sehat dengan cita rasa yang lezat dari berbagai pedagang lokal.",
      detailedDescription:
        "Kantin Area Kampus adalah food court terbesar di IPB yang menampung puluhan pedagang lokal dengan menu beragam. Dari makanan tradisional Indonesia hingga snack modern, semua tersedia dengan harga mahasiswa dan cita rasa yang autentik.",
      image: "/placeholder.svg?height=300&width=400",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Kantin", "Terjangkau", "Mahasiswa", "Beragam", "Lokal"],
      buttonColor: "pink",
      location: "Area Kampus",
      detailedLocation: "Berbagai Lokasi, Kampus IPB Dramaga, Bogor 16680",
      hours: "06:00-21:00",
      phone: "+6281234567895",
      email: "kantin@ipb.ac.id",
      instagram: "@kantin_ipb",
      website: "https://kantin.ipb.ac.id",
      rating: 4.3,
      reviewCount: 1523,
      priceRange: "Rp 5.000 - Rp 20.000",
      facilities: ["Multiple Stalls", "Seating Area", "Clean Water", "Waste Management", "Student Friendly"],
      products: ["Nasi Gudeg", "Bakso", "Gado-gado", "Es Campur", "Jajanan Tradisional"],
      specialOffers: ["Paket hemat siang", "Diskon akhir hari", "Menu spesial Ramadan"],
    },
  ]

  // Find the selected business
  const selectedBusiness = businessUnits.find((business) => business.id === selectedBusinessId)

  const nextImage = () => {
    if (selectedBusiness) {
      setCurrentImageIndex((prev) => (prev === selectedBusiness.gallery.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (selectedBusiness) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedBusiness.gallery.length - 1 : prev - 1))
    }
  }

  // Reset image index when business changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [selectedBusinessId])

  if (!selectedBusiness) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-semibold">Memuat detail unit bisnis...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      {/* Enhanced Hero Section with Better Transition */}
      <div className="relative pt-20 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-white/10 rounded-full blur-lg animate-pulse delay-300"></div>
        </div>

        {/* Enhanced Curved Bottom Transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-32"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.9)" />
              </linearGradient>
            </defs>
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="url(#waveGradient)"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Business Header with Logo */}
          <div className="text-center text-white mb-8">
            <div className="inline-flex items-center justify-center w-16 h-1.5 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full mb-6 shadow-lg"></div>

            {/* Logo and Title Section */}
            <div className="flex flex-col items-center mb-6">
              {/* Business Logo */}
              <div className="w-24 h-24 bg-white/95 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-white/30 mb-6 group hover:scale-105 transition-transform duration-300">
                <img
                  src={selectedBusiness.logo || "/placeholder.svg?height=80&width=80&text=Logo"}
                  alt={`${selectedBusiness.name} Logo`}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h1 className="text-5xl lg:text-6xl font-black mb-4 leading-tight tracking-tight">
                {selectedBusiness.name}
              </h1>
            </div>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-medium">
              {selectedBusiness.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content with Better Spacing */}
      <div className="relative -mt-16 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Business Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Business Header Card with Logo Integration */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      {/* Small Logo in Header */}
                      <div className="w-12 h-12 bg-gray-50 rounded-2xl p-2 shadow-md border border-gray-100">
                        <img
                          src={selectedBusiness.logo || "/placeholder.svg?height=40&width=40&text=Logo"}
                          alt={`${selectedBusiness.name} Logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                          {selectedBusiness.category}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                          <span className="font-bold text-gray-700 text-lg">{selectedBusiness.rating}</span>
                          <span className="text-gray-500">({selectedBusiness.reviewCount} ulasan)</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">{selectedBusiness.detailedDescription}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedBusiness.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Quick Info */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-2xl border border-purple-100">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-purple-700 font-semibold mb-1">Jam Operasional</p>
                      <p className="font-bold text-gray-800 text-sm">{selectedBusiness.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-2xl border border-orange-100">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-orange-700 font-semibold mb-1">Lokasi</p>
                      <p className="font-bold text-gray-800 text-sm leading-tight">{selectedBusiness.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-2xl border border-green-100">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg font-bold">Rp</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-green-700 font-semibold mb-1">Kisaran Harga</p>
                      <p className="font-bold text-gray-800 text-sm">{selectedBusiness.priceRange}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products & Services - New Layout */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50">
                <h2 className="text-2xl font-black text-gray-800 mb-6 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span>Produk & Layanan</span>
                </h2>

                {/* Product Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedBusiness.products.map((product, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      {/* Product Image */}
                      <div className="relative mb-4 rounded-xl overflow-hidden bg-gray-100">
                        <img
                          src={product.image || "/placeholder.svg?height=150&width=150&text=Product"}
                          alt={product.name}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Category Badge */}
                        <div className="absolute top-2 left-2">
                          <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-lg text-xs font-semibold shadow-sm">
                            {product.category}
                          </span>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm group-hover:text-orange-600 transition-colors duration-300">
                            {product.name}
                          </h4>
                          <p className="text-gray-600 text-xs leading-relaxed mt-1">{product.description}</p>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-black text-orange-600">{product.price}</span>
                          <div className="flex items-center space-x-1 text-yellow-500">
                            <Star className="w-3 h-3 fill-current" />
                            <span className="text-xs font-semibold text-gray-600">4.8</span>
                          </div>
                        </div>

                        {/* Shop Button */}
                        <a
                          href={product.shopLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group/btn text-xs"
                        >
                          <span>Beli Sekarang</span>
                          <ExternalLink className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* View All Products Button */}
                <div className="mt-8 text-center">
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3 mx-auto group">
                    <span>Lihat Semua Produk</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Facilities */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50">
                <h2 className="text-2xl font-black text-gray-800 mb-6 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <span>Fasilitas</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedBusiness.facilities.map((facility, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-green-50 rounded-2xl border border-green-100 hover:border-green-200 transition-colors duration-300 group"
                    >
                      <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="font-semibold text-gray-700">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Offers */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl shadow-xl p-8 border border-orange-200">
                <h2 className="text-2xl font-black text-gray-800 mb-6 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span>Penawaran Khusus</span>
                </h2>
                <div className="space-y-4">
                  {selectedBusiness.specialOffers.map((offer, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-sm font-bold">%</span>
                      </div>
                      <span className="font-semibold text-gray-700">{offer}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50">
                <h2 className="text-2xl font-black text-gray-800 mb-6 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                  <span>Galeri Foto</span>
                </h2>

                {/* Main Image */}
                <div className="relative mb-6 rounded-2xl overflow-hidden group">
                  <img
                    src={selectedBusiness.gallery[currentImageIndex] || "/placeholder.svg"}
                    alt={`${selectedBusiness.name} - Image ${currentImageIndex + 1}`}
                    className="w-full h-80 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                    onClick={() => setShowImageModal(true)}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold">
                      Klik untuk memperbesar
                    </div>
                  </div>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {currentImageIndex + 1} / {selectedBusiness.gallery.length}
                  </div>
                </div>

                {/* Thumbnail Grid */}
                <div className="grid grid-cols-4 gap-4">
                  {selectedBusiness.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative rounded-xl overflow-hidden transition-all duration-300 group ${
                        currentImageIndex === index ? "ring-4 ring-orange-400 scale-105" : "hover:scale-105"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${selectedBusiness.name} - Thumbnail ${index + 1}`}
                        className="w-full h-20 object-cover"
                      />
                      <div
                        className={`absolute inset-0 transition-opacity duration-300 ${
                          currentImageIndex === index
                            ? "bg-orange-400/20"
                            : "bg-black/20 opacity-0 group-hover:opacity-100"
                        }`}
                      ></div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Compact Contact Info with Better Sticky Position */}
            <div className="space-y-6">
              {/* Compact Contact Information with Better Top Spacing */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-4 border border-white/50 sticky top-32">
                {/* Compact Logo Header */}
                <div className="text-center mb-4">
                  <h2 className="text-lg font-black text-gray-800">Informasi Kontak</h2>
                </div>

                <div className="space-y-3">
                  {/* Compact Phone */}
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl border border-green-100 hover:border-green-200 transition-colors duration-300 group">
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-green-700 mb-1">Telepon</p>
                      <a
                        href={`tel:${selectedBusiness.phone}`}
                        className="font-bold text-gray-800 hover:text-green-600 transition-colors duration-300 flex items-center space-x-1 group/link text-xs"
                      >
                        <span className="truncate">{selectedBusiness.phone}</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                      </a>
                    </div>
                  </div>

                  {/* Compact Email */}
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-200 transition-colors duration-300 group">
                    <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-blue-700 mb-1">Email</p>
                      <a
                        href={`mailto:${selectedBusiness.email}`}
                        className="font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-1 group/link text-xs"
                      >
                        <span className="truncate">{selectedBusiness.email}</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                      </a>
                    </div>
                  </div>

                  {/* Compact Instagram */}
                  <div className="flex items-center space-x-3 p-3 bg-pink-50 rounded-xl border border-pink-100 hover:border-pink-200 transition-colors duration-300 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-pink-700 mb-1">Instagram</p>
                      <a
                        href={`https://instagram.com/${selectedBusiness.instagram.replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-gray-800 hover:text-pink-600 transition-colors duration-300 flex items-center space-x-1 group/link text-xs"
                      >
                        <span className="truncate">{selectedBusiness.instagram}</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Compact Action Buttons */}
                <div className="space-y-2 mt-4">
                  <a
                    href={`https://wa.me/${selectedBusiness.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group text-sm"
                  >
                    <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>Hubungi Sekarang</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group text-sm">
                    <Navigation className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>Lihat Lokasi</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedBusiness.gallery[currentImageIndex] || "/placeholder.svg"}
              alt={`${selectedBusiness.name} - Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-2xl"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BusinessUnit
