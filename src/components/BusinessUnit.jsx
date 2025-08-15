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
  Camera,
  ChevronLeft,
  ChevronRight,
  Award,
  X,
  ArrowLeft,
  Package,
  Zap,
  Building2,
  MessageCircle,
} from "lucide-react"
import { useState, useEffect } from "react"

const BusinessUnit = ({ selectedBusinessId, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showImageModal, setShowImageModal] = useState(false)
  const [showAllProductsModal, setShowAllProductsModal] = useState(false)
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(0)
  const [showLocationModal, setShowLocationModal] = useState(false)

  const businessUnits = [
    {
      id: 1,
      name: "Daily Us",
      category: "Retail & Produk",
      description:
        "Convenience store modern yang menyediakan berbagai kebutuhan sehari-hari mahasiswa dengan harga terjangkau. Dari makanan ringan, minuman, alat tulis, hingga kebutuhan darurat, semua tersedia 24/7 untuk mendukung aktivitas kampus Anda.",
      detailedDescription:
        "Daily Us hadir sebagai solusi lengkap kebutuhan mahasiswa dengan konsep one-stop shopping. Kami menyediakan lebih dari 500 jenis produk mulai dari makanan, minuman, alat tulis, produk kesehatan, hingga merchandise IPB. Dengan sistem kasir modern dan pembayaan digital, berbelanja menjadi lebih mudah dan cepat.",
      image: "/dailyus.jpeg",
      logo: "/logo/Daily Us.png",
      gallery: ["/dailyus.jpeg"],
      tags: ["Retail", "Produk", "Kopi", "24/7", "Mahasiswa"],
      buttonColor: "purple",
      locations: [
        {
          name: "Daily Us Bara",
          address: "Samping Pintu Masuk Bara",
          mapsLink: "https://maps.app.goo.gl/4TN6MSrdQVvKjLE8A",
        },
        {
          name: "Daily Us Astri",
          address: "Dekat Asrama Putri",
          mapsLink: "https://maps.app.goo.gl/tFBDG9rEjnKMZokj9",
        },
        {
          name: "Daily Us Astra",
          address: "Dekat Asrama Putra",
          mapsLink: "https://maps.app.goo.gl/vySKnCi5e1vzms5P6",
        },
      ],
      hours: "06:00-22:00",
      phone: "+6281234567890",
      email: "dailyus@ipb.ac.id",
      instagram: "@dailyusby63",
      rating: 4.8,
      reviewCount: 1247,
      priceRange: "Rp 5.000 - Rp 50.000",
      products: [
        {
          name: "Kopi Arabica Premium",
          description: "Kopi arabica pilihan dengan cita rasa yang khas",
        },
        {
          name: "Roti Tawar Gandum",
          description: "Roti tawar gandum segar tanpa pengawet",
        },
        {
          name: "Alat Tulis Set",
          description: "Set lengkap alat tulis untuk mahasiswa",
        },
        {
          name: "Masker KF94",
          description: "Masker kesehatan standar KF94",
        },
        {
          name: "Merchandise IPB",
          description: "Kaos dan merchandise resmi IPB",
        },
        {
          name: "Snack Sehat",
          description: "Berbagai pilihan snack sehat dan bergizi",
        },
        {
          name: "Minuman Energi",
          description: "Minuman energi untuk aktivitas belajar",
        },
        {
          name: "Tissue & Sanitizer",
          description: "Paket tissue dan hand sanitizer",
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
      logo: "/logo/botani mart.png",
      gallery: ["/botanimart.png", "/placeholder-c6o26.png", "/placeholder-u8xhf.png", "/organic-fertilizer-area.png"],
      tags: ["Pertanian", "Alat", "Modern", "Bibit", "Pupuk"],
      buttonColor: "purple",
      location: "Jl. Raya Dramaga",
      detailedLocation: "Jl. Raya Dramaga, Babakan, Kec. Dramaga, Kabupaten Bogor, Jawa Barat 16680",
      hours: "08:00-17:00",
      phone: "+6281280505059",
      email: "botanimart@ipb.ac.id",
      instagram: "@botanimartipb",
      rating: 4.6,
      reviewCount: 1041,
      priceRange: "Rp 5.000 - Rp 500.000",
      products: [
        {
          name: "Bibit Tomat Unggul",
          description: "Bibit tomat varietas unggul tahan penyakit",
        },
        {
          name: "Pupuk Organik Kompos",
          description: "Pupuk organik kompos berkualitas tinggi",
        },
        {
          name: "Alat Semprot Tanaman",
          description: "Sprayer manual untuk perawatan tanaman",
        },
        {
          name: "Benih Sayuran Organik",
          description: "Paket benih sayuran organik bersertifikat",
        },
        {
          name: "Pot Tanaman Plastik",
          description: "Pot tanaman plastik berbagai ukuran",
        },
        {
          name: "Sistem Irigasi Tetes",
          description: "Sistem irigasi tetes otomatis untuk greenhouse",
        },
      ],
      locations: [{mapsLink: "https://maps.app.goo.gl/72668aw7CAJPm3mx5"}],
      facilities: ["Konsultasi Gratis", "Delivery Service", "Parkir Luas", "Demo Area", "After Sales Service"],
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
      logo: "/logo/IMS.png",
      gallery: ["/ipbmerch.jpg", "/ipb-apparel.png", "/ipb-accessories.png", "/ipb-souvenirs.png"],
      tags: ["Merchandise", "IPB", "Resmi", "Apparel", "Souvenir"],
      buttonColor: "purple",
      location: "IPB Dramaga - Belakang GWW",
      detailedLocation: "Samping Pintu Masuk Bara, Kampus IPB Dramaga",
      hours: "08:00-17:00",
      phone: "+6281388489123",
      email: "merchandise@ipb.ac.id",
      instagram: "@ipbmerch.1963",
      rating: 4.7,
      reviewCount: 567,
      priceRange: "Rp 25.000 - Rp 350.000",
      products: [
        {
          name: "Kaos IPB Official",
          description: "Kaos resmi IPB dengan logo dan desain eksklusif",
        },
        {
          name: "Jaket Hoodie IPB",
          description: "Jaket hoodie premium dengan bordir logo IPB",
        },
        {
          name: "Topi Baseball IPB",
          description: "Topi baseball dengan logo IPB yang stylish",
        },
        {
          name: "Tas Ransel IPB",
          description: "Tas ransel berkualitas tinggi dengan logo IPB",
        },
        {
          name: "Mug Keramik IPB",
          description: "Mug keramik dengan desain logo IPB yang elegan",
        },
        {
          name: "Pin & Badge Set",
          description: "Set pin dan badge koleksi dengan berbagai desain",
        },
        {
          name: "Tumbler Stainless IPB",
          description: "Tumbler stainless steel dengan logo IPB yang tahan lama",
        },
        {
          name: "Polo Shirt IPB",
          description: "Polo shirt formal dengan bordir logo IPB",
        },
      ],
      locations: [
        {
          name: "IPB Merchandise Belakang GWW",
          address: "Samping Pintu Masuk Bara",
          mapsLink: "https://maps.app.goo.gl/1BbGRp8M14nkyhXw5",
        },
        {
          name: "IPB Merchandise LSI",
          address: "LSI IPB",
          mapsLink: "", // belum ada link pasti
        },
      ],
      facilities: ["Custom Design", "Bulk Order", "Gift Wrapping", "Size Exchange", "Quality Guarantee"],
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
      logo: "/logo/Breadcast.png",
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
      products: [
        {
          name: "Roti Sourdough",
          price: "Rp 35.000",
          image: "/placeholder.svg?height=200&width=200&text=Roti+Sourdough",
          description: "Roti sourdough artisan dengan fermentasi alami",
          category: "Roti",
          rating: 4.9,
        },
        {
          name: "Croissant Butter",
          price: "Rp 18.000",
          image: "/placeholder.svg?height=200&width=200&text=Croissant+Butter",
          description: "Croissant berlapis dengan butter premium",
          category: "Pastry",
          rating: 4.8,
        },
        {
          name: "Kue Lapis Legit",
          price: "Rp 45.000",
          image: "/placeholder.svg?height=200&width=200&text=Lapis+Legit",
          description: "Kue lapis legit tradisional dengan rempah pilihan",
          category: "Kue",
          rating: 4.7,
        },
        {
          name: "Roti Gandum Sehat",
          price: "Rp 25.000",
          image: "/placeholder.svg?height=200&width=200&text=Roti+Gandum",
          description: "Roti gandum utuh tanpa pengawet buatan",
          category: "Roti",
          rating: 4.6,
        },
        {
          name: "Danish Pastry",
          price: "Rp 22.000",
          image: "/placeholder.svg?height=200&width=200&text=Danish+Pastry",
          description: "Danish pastry dengan berbagai topping buah",
          category: "Pastry",
          rating: 4.5,
        },
        {
          name: "Cookies Oatmeal",
          price: "Rp 15.000",
          image: "/placeholder.svg?height=200&width=200&text=Cookies+Oatmeal",
          description: "Cookies oatmeal sehat dengan kismis",
          category: "Cookies",
          rating: 4.4,
        },
        {
          name: "Baguette Prancis",
          price: "Rp 28.000",
          image: "/placeholder.svg?height=200&width=200&text=Baguette+Prancis",
          description: "Baguette autentik dengan tekstur renyah",
          category: "Roti",
          rating: 4.8,
        },
        {
          name: "Muffin Blueberry",
          price: "Rp 20.000",
          image: "/placeholder.svg?height=200&width=200&text=Muffin+Blueberry",
          description: "Muffin lembut dengan blueberry segar",
          category: "Muffin",
          rating: 4.6,
        },
      ],
      locations: [
        {
          name: "BreadCast Center",
          address: "Depan Perpustakaan IPB",
          mapsLink: "https://maps.app.goo.gl/QkGtRHWUGA7AJwAz6",
        },
        {
          name: "BreadCast LSI",
          address: "LSI IPB",
          mapsLink: "", // belum ada di Google Maps
        },
      ],
      facilities: ["Takeaway", "Pre-order", "Custom Cake", "Catering", "Delivery"],
      specialOffers: ["Pre-order discount 10%", "Bulk order special price", "Birthday cake package"],
    },
    {
      id: 5,
      name: "Namtiga Coffee",
      category: "Kuliner & Kafe",
      description:
        "Contemporary coffee house dengan suasana premium yang menyajikan menu lengkap dari makanan berat hingga specialty coffee. Tempat ideal untuk belajar, meeting, atau sekedar bersantai dengan atmosfer yang nyaman dan modern.",
      detailedDescription:
        "Namtiga Coffee House menghadirkan pengalaman kafe premium di lingkungan kampus dengan interior modern dan suasana yang cozy. Kami menyajikan specialty coffee dari biji kopi pilihan nusantara, menu makanan western dan asian fusion, serta berbagai dessert house-made yang lezat.",
      image: "/namtiga.png",
      logo: "/logo/namtiga.png",
      gallery: [
        "/namtiga.jpg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Kafe", "Premium", "Coffee", "Meeting", "Study Space"],
      buttonColor: "orange",
      location: "IPB Dramaga - Jalan Baru",
      detailedLocation: "Samping Pintu Masuk Bara, Kampus IPB Dramaga",
      hours: "08:00-21:00",
      phone: "+6281378404742",
      email: "coffee63@ipb.ac.id",
      instagram: "@namtigacoffee",
      rating: 4.9,
      reviewCount: 892,
      priceRange: "Rp 15.000 - Rp 85.000",
      products: [
        {
          name: "Espresso Signature",
          price: "Rp 25.000",
          image: "/placeholder.svg?height=200&width=200&text=Espresso+Signature",
          description: "Espresso signature dengan biji kopi pilihan Aceh",
          category: "Coffee",
          rating: 4.9,
        },
        {
          name: "Cappuccino Premium",
          price: "Rp 32.000",
          image: "/placeholder.svg?height=200&width=200&text=Cappuccino+Premium",
          description: "Cappuccino dengan foam art dan rasa yang rich",
          category: "Coffee",
          rating: 4.8,
        },
        {
          name: "Nasi Goreng Seafood",
          price: "Rp 45.000",
          image: "/placeholder.svg?height=200&width=200&text=Nasi+Goreng+Seafood",
          description: "Nasi goreng seafood dengan udang dan cumi segar",
          category: "Main Course",
          rating: 4.7,
        },
        {
          name: "Pasta Carbonara",
          price: "Rp 42.000",
          image: "/placeholder.svg?height=200&width=200&text=Pasta+Carbonara",
          description: "Pasta carbonara creamy dengan bacon crispy",
          category: "Main Course",
          rating: 4.6,
        },
        {
          name: "Matcha Latte",
          price: "Rp 35.000",
          image: "/placeholder.svg?height=200&width=200&text=Matcha+Latte",
          description: "Matcha latte premium dengan bubuk matcha Jepang",
          category: "Non-Coffee",
          rating: 4.8,
        },
        {
          name: "Cheesecake Oreo",
          price: "Rp 28.000",
          image: "/placeholder.svg?height=200&width=200&text=Cheesecake+Oreo",
          description: "Cheesecake lembut dengan topping oreo crumble",
          category: "Dessert",
          rating: 4.7,
        },
        {
          name: "Cold Brew Coffee",
          price: "Rp 30.000",
          image: "/placeholder.svg?height=200&width=200&text=Cold+Brew",
          description: "Cold brew coffee dengan ekstraksi 12 jam",
          category: "Coffee",
          rating: 4.8,
        },
        {
          name: "Sandwich Club",
          price: "Rp 38.000",
          image: "/placeholder.svg?height=200&width=200&text=Sandwich+Club",
          description: "Club sandwich dengan ayam, bacon, dan sayuran segar",
          category: "Light Meal",
          rating: 4.5,
        },
      ],
      locations: [
        {
          name: "Namtiga Coffee",
          address: "Samping Pintu Masuk Bara, Kampus IPB Dramaga",
          mapsLink: "https://maps.app.goo.gl/x36AQiaahfC61kBc6",
        },
      ],
      facilities: ["WiFi Gratis", "AC", "Outdoor Seating", "Private Room", "Live Music"],
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
      logo: "/logo/TAKOL.png",
      gallery: [
        "/takol.jpg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Resto", "Meeting", "Catering", "Garden", "Fusion"],
      buttonColor: "orange",
      location: "Jln. Padjajaran - IPB Baranangsiang",
      detailedLocation:
        "Kampus IPB, Jl. Raya Pajajaran No.1, RT.02/RW.05, Tegallega, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16127",
      hours: "10:00-22:00",
      phone: "+6281361403322",
      email: "tamankoleksi@ipb.ac.id",
      instagram: "@takolipb",
      rating: 4.5,
      reviewCount: 445,
      priceRange: "Rp 25.000 - Rp 150.000",
      products: [
        {
          name: "Nasi Gudeg Jogja",
          price: "Rp 35.000",
          image: "/placeholder.svg?height=200&width=200&text=Nasi+Gudeg",
          description: "Nasi gudeg autentik Jogja dengan ayam dan telur",
          category: "Indonesian",
          rating: 4.8,
        },
        {
          name: "Grilled Salmon",
          price: "Rp 85.000",
          image: "/placeholder.svg?height=200&width=200&text=Grilled+Salmon",
          description: "Salmon bakar dengan saus lemon butter",
          category: "Western",
          rating: 4.7,
        },
        {
          name: "Soto Betawi",
          price: "Rp 32.000",
          image: "/placeholder.svg?height=200&width=200&text=Soto+Betawi",
          description: "Soto Betawi dengan daging sapi dan santan",
          category: "Indonesian",
          rating: 4.6,
        },
        {
          name: "Chicken Steak",
          price: "Rp 45.000",
          image: "/placeholder.svg?height=200&width=200&text=Chicken+Steak",
          description: "Chicken steak dengan black pepper sauce",
          category: "Western",
          rating: 4.5,
        },
        {
          name: "Es Teh Manis",
          price: "Rp 8.000",
          image: "/placeholder.svg?height=200&width=200&text=Es+Teh+Manis",
          description: "Es teh manis segar dengan gula aren",
          category: "Minuman",
          rating: 4.4,
        },
        {
          name: "Fruit Salad",
          price: "Rp 25.000",
          image: "/placeholder.svg?height=200&width=200&text=Fruit+Salad",
          description: "Salad buah segar dengan yogurt dressing",
          category: "Dessert",
          rating: 4.6,
        },
      ],
      locations: [
        {
          name: "Resto Taman Koleksi",
          address: "Gedung Andi Hakim Nasution Jalan Institut Pertanian",
          mapsLink: "https://maps.app.goo.gl/surtRtNaqYg6nP6N6",
        },
      ],
      facilities: ["Meeting Room", "VIP Room", "Catering Service", "Garden Setting", "Private Parking"],
      specialOffers: ["Meeting package discount", "Catering bulk order", "Weekend family package"],
    },
    {
      id: 7,
      name: "Namtiga Lite",
      category: "Kuliner & Kafe",
      description:
        "Kafe yang menyajikan kopi di tempat Student Service Center dengan berbagai menu kopi, minuman non kopi, dan berbagai pastry dengan cita rasa nusantara yang autentik.",
      detailedDescription:
        "Botani Kopi Nusantara menghadirkan cita rasa kopi nusantara yang autentik di jantung kampus IPB. Kami bangga menyajikan kopi dari berbagai daerah di Indonesia dengan teknik brewing yang tepat, dilengkapi dengan pastry dan snack lokal yang menggugah selera.",
      image: "/placeholder.svg?height=300&width=400",
      logo: "/logo/namtiga-lite.png",
      gallery: [
        "/63lite.jpg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Kopi", "Nusantara", "Pastry", "Student Center", "Autentik"],
      buttonColor: "orange",
      location: "Gedung Rektorat Andi Hakim Nasution",
      locations: [{mapsLink: "https://maps.app.goo.gl/eQfgtMWC3FHYkWdW9"}],
      detailedLocation: "Gedung Andi Hakim Nasution Jalan Institut Pertanian",
      hours: "07:00-21:00",
      phone: "+6281359338754",
      email: "coffee63@ipb.ac.id",
      instagram: "@namtigacoffee",
      rating: 4.6,
      reviewCount: 523,
      priceRange: "Rp 12.000 - Rp 45.000",
      products: [
        {
          name: "Kopi Aceh Gayo",
          price: "Rp 18.000",
          image: "/placeholder.svg?height=200&width=200&text=Kopi+Aceh+Gayo",
          description: "Kopi Aceh Gayo dengan aroma dan rasa yang khas",
          category: "Coffee",
          rating: 4.8,
        },
        {
          name: "Kopi Toraja",
          price: "Rp 20.000",
          image: "/placeholder.svg?height=200&width=200&text=Kopi+Toraja",
          description: "Kopi Toraja dengan body yang full dan earthy",
          category: "Coffee",
          rating: 4.7,
        },
        {
          name: "Pisang Goreng Crispy",
          price: "Rp 12.000",
          image: "/placeholder.svg?height=200&width=200&text=Pisang+Goreng",
          description: "Pisang goreng crispy dengan topping coklat",
          category: "Snack",
          rating: 4.6,
        },
        {
          name: "Teh Tarik",
          price: "Rp 15.000",
          image: "/placeholder.svg?height=200&width=200&text=Teh+Tarik",
          description: "Teh tarik Malaysia dengan susu kental manis",
          category: "Non-Coffee",
          rating: 4.5,
        },
        {
          name: "Klepon Modern",
          price: "Rp 10.000",
          image: "/placeholder.svg?height=200&width=200&text=Klepon+Modern",
          description: "Klepon dengan isian gula merah dan kelapa parut",
          category: "Traditional",
          rating: 4.4,
        },
        {
          name: "Es Kopi Susu",
          price: "Rp 16.000",
          image: "/placeholder.svg?height=200&width=200&text=Es+Kopi+Susu",
          description: "Es kopi susu dengan perpaduan rasa yang sempurna",
          category: "Coffee",
          rating: 4.7,
        },
      ],
      facilities: ["Study Area", "WiFi", "AC", "Takeaway", "Student Discount"],
      specialOffers: ["Student discount 20%", "Coffee loyalty card", "Traditional snack combo"],
    },
    {
      id: 8,
      name: "Kantong",
      category: "Kuliner & Kafe",
      description:
        "Kantin area yang menyajikan berbagai pilihan makanan berat dengan harga terjangkau dan cita rasa yang berkesan di kawasan IPB dengan menu yang beragam dan bergizi.",
      detailedDescription:
        "Chef 63 adalah kantin modern yang mengutamakan kualitas makanan dengan harga terjangkau untuk komunitas kampus. Kami menyajikan menu Indonesia dan internasional yang diolah dengan higienis dan bergizi, cocok untuk mahasiswa, dosen, dan staff kampus.",
      image: "/placeholder.svg?height=300&width=400",
      logo: "/logo/kantong.png",
      gallery: [
        "/kantong.jpg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Kantin", "Terjangkau", "Makanan", "Bergizi", "Mahasiswa"],
      buttonColor: "orange",
      location: "Dekat Asrama Putri IPB",
      detailedLocation: "Area Asrama Pusat, Kampus IPB Dramaga",
      hours: "06:00-20:00",
      phone: "+6281234567891",
      email: "chef63@ipb.ac.id",
      instagram: "@kantongbychef63",
      rating: 4.4,
      reviewCount: 678,
      priceRange: "Rp 8.000 - Rp 25.000",
      products: [
        {
          name: "Nasi Campur Komplit",
          price: "Rp 15.000",
          image: "/placeholder.svg?height=200&width=200&text=Nasi+Campur",
          description: "Nasi campur dengan lauk lengkap dan sayuran",
          category: "Main Course",
          rating: 4.6,
        },
        {
          name: "Mie Ayam Bakso",
          price: "Rp 12.000",
          image: "/placeholder.svg?height=200&width=200&text=Mie+Ayam+Bakso",
          description: "Mie ayam dengan bakso dan pangsit goreng",
          category: "Main Course",
          rating: 4.5,
        },
        {
          name: "Gado-gado Jakarta",
          price: "Rp 10.000",
          image: "/placeholder.svg?height=200&width=200&text=Gado+Gado",
          description: "Gado-gado dengan bumbu kacang yang gurih",
          category: "Traditional",
          rating: 4.7,
        },
        {
          name: "Soto Ayam Lamongan",
          price: "Rp 13.000",
          image: "/placeholder.svg?height=200&width=200&text=Soto+Ayam",
          description: "Soto ayam Lamongan dengan kuah yang segar",
          category: "Traditional",
          rating: 4.4,
        },
        {
          name: "Es Jeruk Peras",
          price: "Rp 5.000",
          image: "/placeholder.svg?height=200&width=200&text=Es+Jeruk",
          description: "Es jeruk peras segar tanpa pengawet",
          category: "Minuman",
          rating: 4.3,
        },
        {
          name: "Ayam Geprek",
          price: "Rp 18.000",
          image: "/placeholder.svg?height=200&width=200&text=Ayam+Geprek",
          description: "Ayam geprek dengan sambal level sesuai selera",
          category: "Main Course",
          rating: 4.8,
        },
      ],
      locations: [{mapsLink: "https://maps.app.goo.gl/JaT4ejQcB7kWeGDc7"}],
      facilities: ["Dine-in", "Takeaway", "Student Discount", "Clean Kitchen", "Halal Certified"],
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
      logo: "/logo/landlord.png",
      gallery: [
        "/landhuis.png",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Wisma", "Penginapan", "Meeting", "Premium", "Tamu Kampus"],
      buttonColor: "blue",
      location: "IPB Dramaga - Seberang Asrama Internasional",
      detailedLocation: "Jl. Tanjung, Kampus IPB Dramaga",
      hours: "24 Jam",
      phone: "+6281312381377",
      email: "landhuis@ipb.ac.id",
      instagram: "@penginapan_ipb",
      rating: 4.3,
      reviewCount: 287,
      priceRange: "Rp 200.000 - Rp 500.000/malam",
      facilities: ["Meeting Room", "WiFi", "AC", "Restaurant", "Parking", "24/7 Service"],
      products: [
        {
          name: "Standard Room",
          description: "Kamar standar dengan fasilitas lengkap",
        },
        {
          name: "Deluxe Room",
          description: "Kamar deluxe dengan pemandangan taman",
        },
        {
          name: "Meeting Package",
          description: "Paket meeting untuk 10 orang",
        },
        {
          name: "Event Hosting",
          description: "Layanan hosting event dengan catering",
        },
      ],
      locations: [{mapsLink: "https://maps.app.goo.gl/4AN31yuYW8yr67vQA"}],
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
      logo: "/logo/dormitory.png",
      gallery: [
        "/AI.jpg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Asrama", "Internasional", "Penginapan", "Modern", "Fasilitas Lengkap"],
      buttonColor: "blue",
      location: "IPB Dramaga - Jalan Tanjung",
      detailedLocation: "Jl. Tanjung, Kampus IPB Dramaga",
      hours: "24 Jam",
      phone: "+6281312381377",
      email: "asrama@ipb.ac.id",
      instagram: "@penginapan_ipb",
      rating: 4.6,
      reviewCount: 423,
      priceRange: "Rp 150.000 - Rp 400.000/malam",
      facilities: ["AC", "WiFi", "Laundry", "Security 24/7", "Common Kitchen", "Study Room"],
      products: [
        {
          name: "Single Room",
          description: "Kamar single dengan kamar mandi dalam",
        },
        {
          name: "Twin Room",
          description: "Kamar twin untuk dua orang",
        },
        {
          name: "Family Room",
          description: "Kamar keluarga dengan extra bed",
        },
        {
          name: "Long-term Stay",
          description: "Diskon khusus untuk long-term stay",
        },
      ],
      locations: [{mapsLink: "https://maps.app.goo.gl/UMt8apRRMh3bkww19"}],
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
      logo: "/logo/himpunanalumni.png",
      gallery: [
        "/gedungalumni.jpg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Gedung", "Seminar", "Gathering", "Event", "Alumni"],
      buttonColor: "blue",
      location: "Jl. Raya Padjajaran - Samping Botani Square",
      detailedLocation: "Kampus IPB, Jl. Raya Pajajaran No.1",
      hours: "08:00-22:00",
      phone: "+62251-8622642",
      email: "alumni@ipb.ac.id",
      instagram: "@alumni_ipb",
      rating: 4.5,
      reviewCount: 198,
      priceRange: "Rp 5.000.000 - Rp 25.000.000/event",
      facilities: ["Auditorium 1000 pax", "Audio Visual", "AC", "Parking", "Catering", "Security"],
      products: [
        {
          name: "Main Auditorium",
          description: "Auditorium utama dengan kapasitas 1000 orang",
        },
        {
          name: "Meeting Rooms",
          description: "Ruang meeting dengan berbagai ukuran",
        },
        {
          name: "Exhibition Hall",
          description: "Hall untuk pameran dan acara besar",
        },
        {
          name: "Catering Service",
          description: "Layanan catering untuk berbagai acara",
        },
      ],
      locations: [{mapsLink: "https://maps.app.goo.gl/g2UTrLcfqJCcU8QZ7"}],
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
      logo: "/logo/dailywash63.png",
      gallery: [
        "/dailywash.jpg",
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
      products: [
        {
          name: "Cuci Kering",
          description: "Layanan cuci kering standar",
        },
        {
          name: "Cuci Setrika",
          description: "Layanan cuci dan setrika",
        },
        {
          name: "Dry Cleaning",
          description: "Layanan dry cleaning untuk pakaian khusus",
        },
        {
          name: "Sepatu & Tas",
          description: "Layanan cuci sepatu dan tas",
        },
      ],
      locations: [{mapsLink: ""}], // belum ada di Google Maps
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
      logo: "/logo/carewash.png",
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
      rating: 4.5,
      reviewCount: 389,
      priceRange: "Rp 10.000 - Rp 75.000",
      facilities: ["High Pressure Wash", "Vacuum Cleaner", "Wax Service", "Interior Cleaning", "Waiting Area"],
      products: [
        {
          name: "Motor Wash",
          description: "Cuci motor standar",
        },
        {
          name: "Car Wash",
          description: "Cuci mobil standar",
        },
        {
          name: "Detailing",
          description: "Layanan detailing mobil",
        },
        {
          name: "Wax & Polish",
          description: "Layanan wax dan polish mobil",
        },
      ],
      locations: [{mapsLink: ""}], // belum ada di Google Maps
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
      logo: "/logo/thinkfresh.png",
      gallery: [
        "/thinkfresh.jpg",
        "/Thinkfresh.png",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tags: ["Organik", "Sayuran", "Fresh", "Hidroponik", "Smart Farming"],
      buttonColor: "green",
      location: "Agribusiness and Technology Park IPB",
      detailedLocation: "Jl. Carang Pulang No.1",
      hours: "08:00-17:00",
      phone: "+6281566783767",
      email: "thinkfresh@ipb.ac.id",
      instagram: "@thinkfreshpb",
      rating: 4.8,
      reviewCount: 756,
      priceRange: "Rp 10.000 - Rp 75.000/kg",
      facilities: ["Greenhouse", "Cold Storage", "Packaging Center", "Quality Control", "Delivery Service"],
      products: [
        {
          name: "Organic Vegetables",
          description: "Sayuran organik segar langsung dari kebun",
        },
        {
          name: "Leafy Greens",
          description: "Berbagai jenis sayuran hijau segar",
        },
        {
          name: "Herbs",
          description: "Berbagai jenis herbs segar",
        },
        {
          name: "Microgreens",
          description: "Microgreens segar dan bergizi",
        },
      ],
      locations: [{mapsLink: "https://maps.app.goo.gl/6ZMzqnFzt3T68yjJ8"}],
      specialOffers: ["Subscription box discount", "Bulk order special price", "Seasonal promotions"],
    },
    {
      id: 15,
      name: "Kantin Area Kampus",
      category: "Kantin Area Kampus",
      description:
        "Pusat layanan mahasiswa dengan berbagai pilihan makanan dan minuman yang terjangkau dan sehat dengan cita rasa yang lezat dari berbagai pedagang lokal.",
      detailedDescription:
        "Kantin Area Kampus adalah food court terbesar di IPB yang menampung puluhan pedagang lokal dengan menu beragam. Dari makanan tradisional Indonesia hingga snack modern, semua tersedia dengan harga mahasiswa dan cita rasa yang autentik.",
      image: "/placeholder.svg?height=300&width=400",
      gallery: [
        "/kantin.png",
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
      rating: 4.3,
      reviewCount: 1523,
      priceRange: "Rp 5.000 - Rp 20.000",
      products: [
        {
          name: "Nasi Gudeg Yogya",
          description: "Nasi gudeg Yogya dengan ayam dan telur",
        },
        {
          name: "Bakso Malang",
          description: "Bakso Malang dengan berbagai isian",
        },
        {
          name: "Gado-gado Betawi",
          description: "Gado-gado Betawi dengan bumbu kacang spesial",
        },
        {
          name: "Es Campur Jakarta",
          description: "Es campur Jakarta dengan berbagai topping",
        },
        {
          name: "Kerupuk Rambak",
          description: "Kerupuk rambak crispy dengan sambal kecap",
        },
        {
          name: "Tahu Gejrot",
          description: "Tahu gejrot dengan kuah asam pedas manis",
        },
      ],
      locations: [
        {
          name: "Kantin Blue Corner",
          address: "Kampus IPB Dramaga, Bogor",
          mapsLink: "", // Add your Google Maps link here
        },
        {
          name: "Kantin Yellow Corner",
          address: "Kampus IPB Dramaga, Bogor",
          mapsLink: "", // Add your Google Maps link here
        },
        {
          name: "Kantin Purple Corner",
          address: "Kampus IPB Dramaga, Bogor",
          mapsLink: "", // Add your Google Maps link here
        },
        {
          name: "Kantin Green Corner",
          address: "Kampus IPB Dramaga, Bogor",
          mapsLink: "", // Add your Google Maps link here
        },
      ],
      facilities: ["Multiple Stalls", "Seating Area", "Clean Water", "Waste Management", "Student Friendly"],
      specialOffers: ["Paket hemat siang", "Diskon akhir hari", "Menu spesial Ramadan"],
    },
  ]

  // Find the selected business
  const selectedBusiness = businessUnits.find((business) => business.id === selectedBusinessId)

  const getBusinessType = (businessName) => {
    if (businessName === "BreadCast") return "whatsapp-ordering"
    if (businessName === "IPB Merchandise Store") return "shopee-ordering"
    return "product-display" // All units now show products with images and prices
  }

  const businessType = getBusinessType(selectedBusiness.name)

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

  // Reset location index when business changes
  useEffect(() => {
    setSelectedLocationIndex(0)
  }, [selectedBusinessId])

  const currentLocation = (selectedBusiness.locations || [])[selectedLocationIndex] || {}

  const handleWhatsAppContact = () => {
    const phoneNumber = selectedBusiness.phone?.replace(/\D/g, "") || ""
    const message = `Halo, saya tertarik dengan ${selectedBusiness.name}. Bisakah Anda memberikan informasi lebih lanjut?`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleViewLocation = () => {
    if (selectedBusiness.locations && selectedBusiness.locations.length > 1) {
      setShowLocationModal(true)
    } else {
      const location = selectedBusiness.locations?.[0]
      if (location?.mapsLink) {
        window.open(location.mapsLink, "_blank")
      } else {
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location?.address || selectedBusiness.detailedLocation)}`
        window.open(mapsUrl, "_blank")
      }
    }
  }

  const openLocationInMaps = (location) => {
    if (location.mapsLink) {
      window.open(location.mapsLink, "_blank")
    } else {
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`
      window.open(mapsUrl, "_blank")
    }
    setShowLocationModal(false)
  }

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="relative pt-20 pb-12 bg-gradient-to-br from-blue-600 to-blue-700">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/backgroundHome.jpg')" }}
        ></div>

        {/* Elegant wave transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-10" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center text-white">
            {selectedBusiness.name !== "Kantin Area Kampus" && (
              <div className="w-16 h-16 bg-white/95 rounded-2xl p-3 shadow-xl mx-auto mt-6 mb-2">
                <img
                  src={selectedBusiness.logo || "/placeholder.svg?height=64&width=64&text=Logo"}
                  alt={`${selectedBusiness.name} Logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            <h1 className="text-3xl lg:text-4xl font-bold mb-3">{selectedBusiness.name}</h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">{selectedBusiness.description}</p>
          </div>
        </div>
      </div>

      <div className="relative -mt-8 z-10">
        <div className="max-w-6xl mx-auto px-6 pb-16">
          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={onBack}
              className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Katalog Unit Bisnis</span>
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {selectedBusiness.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-semibold text-gray-800">{selectedBusiness.rating}</span>
                      <span className="text-gray-500 text-sm">({selectedBusiness.reviewCount} ulasan)</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">{selectedBusiness.detailedDescription}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {(selectedBusiness.tags || []).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  Informasi Lokasi & Operasional
                </h3>

                <div className="space-y-6">
                  {/* Location Section */}
                  <div>
                    {(selectedBusiness.locations || []).length > 1 ? (
                      <div className="bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 rounded-2xl p-6 border border-orange-200 shadow-lg">
                        {/* Header dengan gradient colorful */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                              <Building2 className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-800 text-xl">Pilih Lokasi</h4>
                              <p className="text-sm text-gray-600">Tersedia di beberapa cabang</p>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                            {(selectedBusiness.locations || []).length} Cabang
                          </div>
                        </div>

                        {/* Location selector dengan design card yang lebih menarik */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-20 gap-4 mb-6">
                          {(selectedBusiness.locations || []).map((location, index) => (
                            <button
                              key={index}
                              onClick={() => setSelectedLocationIndex(index)}
                              className={`group relative p-5 rounded-xl text-left transition-all duration-300 transform hover:scale-105 min-h-[80px] flex items-center w-full ${
                                selectedLocationIndex === index
                                  ? "bg-gradient-to-br from-orange-100 to-pink-100 border-2 border-orange-400 shadow-lg"
                                  : "bg-white border-2 border-gray-200 hover:border-orange-300 hover:shadow-md"
                              }`}
                            >
                              <div className="flex items-center space-x-3 flex-1 min-w-0">
                                <div
                                  className={`w-4 h-4 rounded-full transition-all duration-300 flex-shrink-0 ${
                                    selectedLocationIndex === index
                                      ? "bg-gradient-to-r from-orange-500 to-pink-500 shadow-md"
                                      : "bg-gray-300 group-hover:bg-orange-400"
                                  }`}
                                ></div>
                                <span
                                  className={`font-semibold transition-colors duration-300 text-sm sm:text-base md:text-md leading-tight ${
                                    selectedLocationIndex === index
                                      ? "text-orange-800"
                                      : "text-gray-700 group-hover:text-orange-700"
                                  }`}
                                >
                                  {location.name}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>

                        {/* Detail card dengan design yang lebih colorful */}
                        <div className="bg-gradient-to-br from-white via-orange-50 to-pink-50 rounded-xl p-6 border-2 border-orange-200 shadow-xl">
                          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                              <Building2 className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex-1 min-w-0 w-full">
                              <h5 className="font-bold text-gray-900 mb-3 text-xl sm:text-2xl">
                                {currentLocation.name}
                              </h5>
                              <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base break-words">
                                {currentLocation.address}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 rounded-xl p-6 border-2 border-teal-200 shadow-lg">
                        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Building2 className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1 min-w-0 w-full">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-3">
                              <h5 className="font-bold text-gray-900 text-xl sm:text-2xl">
                                {selectedBusiness.location}
                              </h5>
                              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base break-words">
                              {selectedBusiness.detailedLocation}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Operating Hours & Price */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200 shadow-md">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-purple-700 font-semibold mb-1">Jam Operasional</p>
                        <p className="font-bold text-gray-800 text-lg">{selectedBusiness.hours}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 shadow-md">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white text-sm font-bold">Rp</span>
                      </div>
                      <div>
                        <p className="text-sm text-green-700 font-semibold mb-1">Kisaran Harga</p>
                        <p className="font-bold text-gray-800 text-lg">{selectedBusiness.priceRange}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products and Services Section */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                  Produk & Layanan
                </h2>

                {selectedBusiness.category === "Kuliner & Kafe" ||
                selectedBusiness.category === "Kantin Area Kampus" ? (
                  <div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {(selectedBusiness.products || []).slice(0, 6).map((product, index) => (
                        <div
                          key={index}
                          className="group bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                        >
                          {/* Product Image */}
                          <div className="relative mb-3 rounded-lg overflow-hidden bg-gray-100">
                            <img
                              src={
                                product.image ||
                                `/placeholder.svg?height=120&width=120&text=${encodeURIComponent(product.name) || "/placeholder.svg"}`
                              }
                              alt={product.name}
                              className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            {/* Category Badge */}
                            {product.category && (
                              <div className="absolute top-2 left-2">
                                <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-md text-xs font-semibold shadow-sm">
                                  {product.category}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Product Info */}
                          <div className="space-y-2">
                            <div>
                              <h4 className="font-bold text-gray-800 text-sm group-hover:text-orange-600 transition-colors duration-300">
                                {product.name}
                              </h4>
                              <p className="text-gray-600 text-xs leading-relaxed mt-1">{product.description}</p>
                            </div>

                            {/* Price */}
                            <div className="flex items-center justify-between">
                              <span className="text-base font-black text-orange-600">{product.price}</span>
                              <div className="flex items-center space-x-1 text-yellow-500">
                                <Star className="w-3 h-3 fill-current" />
                                <span className="text-xs font-semibold text-gray-600">4.8</span>
                              </div>
                            </div>

                            {/* Order Buttons */}
                            {selectedBusiness.name === "BreadCast" ? (
                              <a
                                href={`https://wa.me/6281377043310?text=Halo, saya ingin memesan ${product.name} seharga ${product.price}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group/btn text-xs"
                              >
                                <span>Pesan via WhatsApp</span>
                                <ExternalLink className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-300" />
                              </a>
                            ) : selectedBusiness.name === "IPB Merchandise Store" ? (
                              <a
                                href="https://shopee.co.id/ipbmerchstore"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group/btn text-xs"
                              >
                                <span>Pesan di Shopee</span>
                                <ExternalLink className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-300" />
                              </a>
                            ) : (
                              <div className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-2 px-3 rounded-lg text-xs text-center">
                                Tersedia di Lokasi
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 text-center">
                      <button
                        onClick={() => setShowAllProductsModal(true)}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto group"
                      >
                        <span>Lihat Semua Produk</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      {(selectedBusiness.products || []).map((product, index) => (
                        <div
                          key={index}
                          className="bg-white p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-md"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Package className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-base text-gray-800 mb-1">{product.name}</h4>
                              <p className="text-gray-600 leading-relaxed text-sm">{product.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Facilities - Only show if has content */}
              {(selectedBusiness.facilities || []).length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Award className="w-5 h-5 text-green-500 mr-2" />
                    Fasilitas
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {(selectedBusiness.facilities || []).map((facility, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl border border-green-100 hover:border-green-200 transition-colors duration-300 group"
                      >
                        <div className="w-5 h-5 bg-green-500 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <span className="font-medium text-gray-700 text-sm">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery - Only show if has content */}
              {(selectedBusiness.gallery || []).length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Camera className="w-5 h-5 text-purple-500 mr-2" />
                    Galeri Foto
                  </h2>

                  {/* Main Image */}
                  <div className="relative mb-4 rounded-xl overflow-hidden group">
                    <img
                      src={(selectedBusiness.gallery || [])[currentImageIndex] || "/placeholder.svg"}
                      alt={`${selectedBusiness.name} - Image ${currentImageIndex + 1}`}
                      className="w-full h-64 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                      onClick={() => setShowImageModal(true)}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full font-semibold text-sm">
                        Klik untuk memperbesar
                      </div>
                    </div>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {currentImageIndex + 1} / {(selectedBusiness.gallery || []).length}
                    </div>
                  </div>

                  {/* Thumbnail Grid */}
                  <div className="grid grid-cols-6 gap-2">
                    {(selectedBusiness.gallery || []).map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative rounded-lg overflow-hidden transition-all duration-300 group ${
                          currentImageIndex === index ? "ring-2 ring-orange-400 scale-105" : "hover:scale-105"
                        }`}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${selectedBusiness.name} - Thumbnail ${index + 1}`}
                          className="w-full h-16 object-cover"
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
              )}
            </div>

            {/* Right Column - Contact Info (1 column on desktop) */}
            <div className="space-y-4">
              {/* Contact Information - Sticky */}
              <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100 sticky top-24">
                <div className="text-center mb-4">
                  <h2 className="text-lg font-bold text-gray-800">Informasi Kontak</h2>
                </div>

                <div className="space-y-3">
                  {/* Phone */}
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl">
                    <Phone className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-xs text-green-700 font-semibold">Telepon</p>
                      <p className="font-semibold text-gray-800">{selectedBusiness.phone}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-xs text-blue-700 font-semibold">Email</p>
                      <p className="font-semibold text-gray-800">{selectedBusiness.email}</p>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-center space-x-3 p-3 bg-pink-50 rounded-xl">
                    <Instagram className="w-5 h-5 text-pink-600" />
                    <div>
                      <p className="text-xs text-pink-700 font-semibold">Instagram</p>
                      <p className="font-semibold text-gray-800">{selectedBusiness.instagram}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 mt-4">
                  <button
                    onClick={handleWhatsAppContact}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Hubungi Sekarang
                  </button>
                  <button
                    onClick={handleViewLocation}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <MapPin size={20} />
                    Lihat Lokasi
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
      {showAllProductsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-3xl">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-800">Semua Produk {selectedBusiness.name}</h3>
                <button
                  onClick={() => setShowAllProductsModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              {selectedBusiness.category === "Kuliner & Kafe" || selectedBusiness.category === "Kantin Area Kampus" ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedBusiness.products?.map((product, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-2xl p-4 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      {/* Product Image */}
                      <div className="relative mb-4 rounded-xl overflow-hidden bg-gray-100">
                        <img
                          src={
                            product.image ||
                            `/placeholder.svg?height=150&width=150&text=${encodeURIComponent(product.name) || "/placeholder.svg"}`
                          }
                          alt={product.name}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Category Badge */}
                        {product.category && (
                          <div className="absolute top-2 left-2">
                            <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-lg text-xs font-semibold shadow-sm">
                              {product.category}
                            </span>
                          </div>
                        )}
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

                        {/* Order Buttons */}
                        {selectedBusiness.name === "BreadCast" ? (
                          <a
                            href={`https://wa.me/6281377043310?text=Halo, saya ingin memesan ${product.name} seharga ${product.price}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-2.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group/btn text-xs"
                          >
                            <span>Pesan via WhatsApp</span>
                            <ExternalLink className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-300" />
                          </a>
                        ) : selectedBusiness.name === "IPB Merchandise Store" ? (
                          <a
                            href="https://shopee.co.id/ipbmerchstore"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group/btn text-xs"
                          >
                            <span>Pesan di Shopee</span>
                            <ExternalLink className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-300" />
                          </a>
                        ) : (
                          <div className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center">
                            Tersedia di Lokasi
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {selectedBusiness.products?.map((product, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Package className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h4>
                          <p className="text-gray-600 leading-relaxed">{product.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {showLocationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Pilih Lokasi</h3>
                <button
                  onClick={() => setShowLocationModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-3">
                {selectedBusiness.locations?.map((location, index) => (
                  <button
                    key={index}
                    onClick={() => openLocationInMaps(location)}
                    className="w-full p-4 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-xl border border-blue-200 transition-all duration-200 text-left group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                        <MapPin size={16} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{location.name}</h4>
                        <p className="text-sm text-gray-600">{location.address}</p>
                      </div>
                      <ExternalLink size={16} className="text-blue-500 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BusinessUnit
