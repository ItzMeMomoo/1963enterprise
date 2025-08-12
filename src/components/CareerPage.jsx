"use client"

import { Briefcase, MapPin, Clock, DollarSign, Users, Calendar, Mail, Phone, Send, Star, Award, TrendingUp, Heart, Coffee, Zap, Target, Search, Filter, X, ExternalLink, ArrowRight, Building2, GraduationCap, CheckCircle, AlertCircle, Globe } from 'lucide-react'
import { useState, useEffect, useRef } from "react"

const CareerPage = () => {
  const [activeFilter, setActiveFilter] = useState("Semua")
  const [searchQuery, setSearchQuery] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedJob, setSelectedJob] = useState(null)
  const searchRef = useRef(null)

  const jobCategories = [
    { name: "Semua", count: 15, color: "blue" },
    { name: "Retail & Produk", count: 4, color: "purple" },
    { name: "Kuliner & Kafe", count: 6, color: "orange" },
    { name: "Akomodasi", count: 2, color: "blue" },
    { name: "Agribisnis", count: 2, color: "green" },
    { name: "Manajemen", count: 1, color: "red" }
  ]

  const jobListings = [
    {
      id: 1,
      title: "Barista Senior",
      company: "Namtiga Coffee",
      category: "Kuliner & Kafe",
      location: "IPB Dramaga",
      type: "Full Time",
      salary: "Rp 3.500.000 - Rp 4.500.000",
      experience: "2-3 tahun",
      education: "SMA/SMK",
      posted: "2024-01-15",
      deadline: "2024-02-15",
      description: "Kami mencari barista berpengalaman yang passionate dengan dunia kopi dan memiliki kemampuan latte art yang baik. Kandidat ideal memiliki pengetahuan mendalam tentang berbagai jenis kopi dan teknik brewing.",
      requirements: [
        "Pengalaman minimal 2 tahun sebagai barista",
        "Menguasai teknik latte art dan brewing",
        "Memiliki pengetahuan tentang berbagai jenis kopi",
        "Kemampuan komunikasi yang baik",
        "Dapat bekerja dalam tim dan shift",
        "Berpenampilan menarik dan ramah"
      ],
      responsibilities: [
        "Menyiapkan berbagai jenis minuman kopi dan non-kopi",
        "Melakukan latte art untuk presentasi minuman",
        "Memberikan rekomendasi menu kepada pelanggan",
        "Menjaga kebersihan area kerja dan peralatan",
        "Melakukan stock opname bahan baku",
        "Memberikan pelayanan terbaik kepada pelanggan"
      ],
      benefits: [
        "Gaji kompetitif sesuai pengalaman",
        "Tunjangan kesehatan",
        "Pelatihan berkala",
        "Bonus kinerja",
        "Lingkungan kerja yang nyaman",
        "Kesempatan pengembangan karir"
      ],
      contactEmail: "recruitment@namtigacoffee.com",
      contactPhone: "+6281378404742",
      urgent: true,
      featured: true
    },
    {
      id: 2,
      title: "Sales Associate",
      company: "Daily Us",
      category: "Retail & Produk",
      location: "IPB Dramaga",
      type: "Full Time",
      salary: "Rp 3.000.000 - Rp 3.800.000",
      experience: "1-2 tahun",
      education: "SMA/SMK",
      posted: "2024-01-12",
      deadline: "2024-02-12",
      description: "Bergabunglah dengan tim Daily Us sebagai Sales Associate! Kami mencari individu yang energik dan customer-oriented untuk memberikan pengalaman berbelanja terbaik bagi mahasiswa dan komunitas kampus.",
      requirements: [
        "Pengalaman retail minimal 1 tahun",
        "Kemampuan komunikasi yang excellent",
        "Familiar dengan sistem POS dan pembayaran digital",
        "Dapat bekerja shift dan weekend",
        "Berpenampilan rapi dan profesional",
        "Memiliki inisiatif tinggi"
      ],
      responsibilities: [
        "Melayani pelanggan dengan ramah dan profesional",
        "Mengelola transaksi penjualan dan pembayaran",
        "Menjaga display produk tetap menarik",
        "Melakukan stock opname harian",
        "Memberikan informasi produk kepada pelanggan",
        "Mencapai target penjualan yang ditetapkan"
      ],
      benefits: [
        "Gaji pokok + komisi penjualan",
        "BPJS Kesehatan dan Ketenagakerjaan",
        "Diskon produk untuk karyawan",
        "Training product knowledge",
        "Bonus pencapaian target",
        "Jenjang karir yang jelas"
      ],
      contactEmail: "hr@dailyus.ipb.ac.id",
      contactPhone: "+6281234567890",
      urgent: false,
      featured: true
    },
    {
      id: 3,
      title: "Chef de Partie",
      company: "Resto Taman Koleksi",
      category: "Kuliner & Kafe",
      location: "IPB Baranangsiang",
      type: "Full Time",
      salary: "Rp 4.000.000 - Rp 5.500.000",
      experience: "3-5 tahun",
      education: "D3 Culinary/Setara",
      posted: "2024-01-10",
      deadline: "2024-02-10",
      description: "Kesempatan emas untuk chef berpengalaman bergabung dengan Resto Taman Koleksi! Kami mencari Chef de Partie yang kreatif dan berpengalaman dalam masakan fusion Indonesia-Western.",
      requirements: [
        "Pengalaman minimal 3 tahun di kitchen profesional",
        "Menguasai teknik memasak Indonesia dan Western",
        "Memiliki kreativitas dalam pengembangan menu",
        "Kemampuan leadership dan training junior chef",
        "Memahami food safety dan HACCP",
        "Dapat bekerja under pressure"
      ],
      responsibilities: [
        "Memimpin section kitchen tertentu",
        "Mengembangkan dan standardisasi resep",
        "Melakukan quality control makanan",
        "Melatih dan supervisi junior chef",
        "Mengelola inventory bahan makanan",
        "Memastikan standar kebersihan kitchen"
      ],
      benefits: [
        "Gaji kompetitif sesuai pengalaman",
        "Tunjangan kesehatan keluarga",
        "Meal allowance",
        "Pelatihan culinary skill",
        "Bonus performance",
        "Career development program"
      ],
      contactEmail: "chef@tamankoleksi.ipb.ac.id",
      contactPhone: "+6281361403322",
      urgent: true,
      featured: true
    },
    {
      id: 4,
      title: "Marketing Specialist",
      company: "Botani Mart",
      category: "Retail & Produk",
      location: "IPB Dramaga",
      type: "Full Time",
      salary: "Rp 4.500.000 - Rp 6.000.000",
      experience: "2-4 tahun",
      education: "S1 Marketing/Komunikasi",
      posted: "2024-01-08",
      deadline: "2024-02-08",
      description: "Botani Mart sedang mencari Marketing Specialist yang kreatif dan berpengalaman dalam digital marketing untuk mengembangkan brand awareness dan meningkatkan penjualan produk pertanian modern.",
      requirements: [
        "S1 Marketing, Komunikasi, atau bidang terkait",
        "Pengalaman 2-4 tahun di digital marketing",
        "Menguasai social media marketing dan content creation",
        "Familiar dengan Google Ads, Facebook Ads",
        "Kemampuan analisis data marketing",
        "Kreatif dan up-to-date dengan tren marketing"
      ],
      responsibilities: [
        "Mengembangkan strategi marketing digital",
        "Mengelola social media dan content marketing",
        "Melakukan campaign advertising online",
        "Analisis performance marketing dan ROI",
        "Koordinasi dengan tim sales untuk lead generation",
        "Membuat laporan marketing bulanan"
      ],
      benefits: [
        "Gaji kompetitif + bonus performance",
        "Tunjangan kesehatan dan transportasi",
        "Laptop dan tools marketing",
        "Training digital marketing terbaru",
        "Flexible working arrangement",
        "Career advancement opportunities"
      ],
      contactEmail: "marketing@botanimart.ipb.ac.id",
      contactPhone: "+6281280505059",
      urgent: false,
      featured: false
    },
    {
      id: 5,
      title: "Housekeeping Supervisor",
      company: "Wisma Landhuis",
      category: "Akomodasi",
      location: "IPB Dramaga",
      type: "Full Time",
      salary: "Rp 3.800.000 - Rp 4.800.000",
      experience: "2-3 tahun",
      education: "SMA/D3 Perhotelan",
      posted: "2024-01-05",
      deadline: "2024-02-05",
      description: "Wisma Landhuis mencari Housekeeping Supervisor yang berpengalaman untuk memastikan standar kebersihan dan kenyamanan tamu terjaga dengan baik. Kandidat ideal memiliki pengalaman di industri hospitality.",
      requirements: [
        "Pengalaman minimal 2 tahun di housekeeping hotel/wisma",
        "Memiliki leadership dan supervisory skills",
        "Memahami standar kebersihan hospitality",
        "Kemampuan komunikasi yang baik",
        "Dapat bekerja shift dan weekend",
        "Detail oriented dan teliti"
      ],
      responsibilities: [
        "Supervisi tim housekeeping harian",
        "Memastikan standar kebersihan kamar dan area umum",
        "Melakukan quality check room sebelum check-in",
        "Mengelola inventory supplies housekeeping",
        "Training dan evaluasi staff housekeeping",
        "Koordinasi dengan front office untuk room status"
      ],
      benefits: [
        "Gaji pokok + tunjangan supervisor",
        "BPJS Kesehatan dan Ketenagakerjaan",
        "Meal allowance",
        "Seragam dan perlengkapan kerja",
        "Training hospitality skills",
        "Bonus kinerja tahunan"
      ],
      contactEmail: "hr@landhuis.ipb.ac.id",
      contactPhone: "+6281312381377",
      urgent: false,
      featured: false
    },
    {
      id: 6,
      title: "Agricultural Technician",
      company: "Think Fresh",
      category: "Agribisnis",
      location: "Teaching Factory IPB",
      type: "Full Time",
      salary: "Rp 4.200.000 - Rp 5.200.000",
      experience: "1-3 tahun",
      education: "D3/S1 Pertanian",
      posted: "2024-01-03",
      deadline: "2024-02-03",
      description: "Think Fresh sedang mencari Agricultural Technician yang passionate dengan teknologi pertanian modern. Bergabunglah dengan kami untuk mengembangkan sistem pertanian berkelanjutan dan inovatif.",
      requirements: [
        "D3/S1 Pertanian, Agronomi, atau bidang terkait",
        "Pengalaman di bidang pertanian modern/hidroponik",
        "Memahami teknologi greenhouse dan smart farming",
        "Kemampuan analisis kualitas tanaman dan hasil panen",
        "Dapat bekerja di lapangan dan laboratorium",
        "Memiliki passion di bidang sustainable agriculture"
      ],
      responsibilities: [
        "Monitoring dan maintenance sistem hidroponik",
        "Melakukan quality control produk sayuran",
        "Analisis nutrisi dan kesehatan tanaman",
        "Dokumentasi proses produksi dan hasil panen",
        "Riset dan pengembangan teknik budidaya baru",
        "Training petani mitra tentang teknik modern"
      ],
      benefits: [
        "Gaji kompetitif sesuai kualifikasi",
        "Tunjangan kesehatan dan transportasi",
        "Pelatihan teknologi pertanian terbaru",
        "Research allowance",
        "Bonus produktivitas",
        "Kesempatan melanjutkan studi"
      ],
      contactEmail: "recruitment@thinkfresh.ipb.ac.id",
      contactPhone: "+6281566783767",
      urgent: true,
      featured: false
    },
    {
      id: 7,
      title: "Baker",
      company: "BreadCast",
      category: "Kuliner & Kafe",
      location: "IPB Dramaga",
      type: "Full Time",
      salary: "Rp 3.200.000 - Rp 4.200.000",
      experience: "1-2 tahun",
      education: "SMA/SMK/D3 Culinary",
      posted: "2024-01-01",
      deadline: "2024-02-01",
      description: "BreadCast mencari Baker yang passionate dengan dunia bakery dan memiliki kemampuan membuat roti artisan berkualitas tinggi. Kami mengutamakan kualitas dan inovasi dalam setiap produk.",
      requirements: [
        "Pengalaman minimal 1 tahun di bakery",
        "Menguasai teknik pembuatan roti dan pastry",
        "Memahami fermentasi dan proofing",
        "Kreatif dalam pengembangan produk baru",
        "Dapat bekerja early shift (dini hari)",
        "Memiliki stamina yang baik"
      ],
      responsibilities: [
        "Memproduksi berbagai jenis roti dan pastry",
        "Memastikan kualitas dan konsistensi produk",
        "Mengembangkan resep dan produk baru",
        "Menjaga kebersihan area produksi",
        "Mengelola bahan baku dan inventory",
        "Melakukan quality control produk jadi"
      ],
      benefits: [
        "Gaji pokok + bonus produksi",
        "Tunjangan kesehatan",
        "Meal allowance",
        "Pelatihan baking skills",
        "Produk gratis untuk karyawan",
        "Lingkungan kerja yang supportive"
      ],
      contactEmail: "baker@breadcast.ipb.ac.id",
      contactPhone: "+6281377043310",
      urgent: false,
      featured: false
    },
    {
      id: 8,
      title: "Store Manager",
      company: "IPB Merchandise Store",
      category: "Retail & Produk",
      location: "IPB Dramaga",
      type: "Full Time",
      salary: "Rp 5.000.000 - Rp 6.500.000",
      experience: "3-5 tahun",
      education: "S1 Management/Bisnis",
      posted: "2023-12-28",
      deadline: "2024-01-28",
      description: "IPB Merchandise Store sedang mencari Store Manager yang berpengalaman untuk memimpin operasional toko dan mengembangkan bisnis merchandise IPB. Kandidat ideal memiliki pengalaman retail management.",
      requirements: [
        "S1 Management, Bisnis, atau bidang terkait",
        "Pengalaman minimal 3 tahun sebagai store/retail manager",
        "Leadership skills dan kemampuan mengelola tim",
        "Memahami retail operations dan inventory management",
        "Kemampuan analisis sales dan business development",
        "Excellent communication dan customer service skills"
      ],
      responsibilities: [
        "Mengelola operasional toko sehari-hari",
        "Memimpin dan mengembangkan tim sales",
        "Menganalisis sales performance dan membuat strategi",
        "Mengelola inventory dan procurement",
        "Memastikan customer satisfaction",
        "Membuat laporan bisnis bulanan"
      ],
      benefits: [
        "Gaji kompetitif + bonus management",
        "Tunjangan kesehatan keluarga",
        "Company car allowance",
        "Management training program",
        "Profit sharing",
        "Career development ke level regional"
      ],
      contactEmail: "manager@ipbmerch.ac.id",
      contactPhone: "+6281388489123",
      urgent: false,
      featured: false
    },
    {
      id: 9,
      title: "Cashier",
      company: "Kantong",
      category: "Kuliner & Kafe",
      location: "IPB Dramaga",
      type: "Part Time",
      salary: "Rp 2.500.000 - Rp 3.000.000",
      experience: "0-1 tahun",
      education: "SMA/SMK",
      posted: "2023-12-25",
      deadline: "2024-01-25",
      description: "Kantong sedang mencari Cashier part-time yang ramah dan teliti untuk melayani mahasiswa dan komunitas kampus. Posisi ini cocok untuk mahasiswa yang ingin bekerja sambil kuliah.",
      requirements: [
        "Minimal SMA/SMK",
        "Kemampuan berhitung yang baik",
        "Ramah dan sabar dalam melayani pelanggan",
        "Dapat bekerja part-time dan flexible schedule",
        "Jujur dan dapat dipercaya",
        "Familiar dengan sistem kasir digital"
      ],
      responsibilities: [
        "Melayani transaksi pembayaran pelanggan",
        "Mengelola cash register dan pembayaran digital",
        "Memberikan informasi menu kepada pelanggan",
        "Menjaga kebersihan area kasir",
        "Melakukan closing kasir harian",
        "Membantu operasional kantin lainnya"
      ],
      benefits: [
        "Gaji part-time yang kompetitif",
        "Flexible working hours",
        "Meal allowance",
        "Cocok untuk mahasiswa",
        "Lingkungan kerja yang friendly",
        "Pengalaman kerja yang valuable"
      ],
      contactEmail: "kantong@ipb.ac.id",
      contactPhone: "+6281234567891",
      urgent: false,
      featured: false
    },
    {
      id: 10,
      title: "Maintenance Staff",
      company: "CARe Wash",
      category: "Layanan",
      location: "IPB Dramaga",
      type: "Full Time",
      salary: "Rp 3.000.000 - Rp 3.800.000",
      experience: "1-2 tahun",
      education: "SMA/SMK Teknik",
      posted: "2023-12-20",
      deadline: "2024-01-20",
      description: "CARe Wash membutuhkan Maintenance Staff yang handal untuk merawat dan memperbaiki peralatan cuci kendaraan. Kandidat ideal memiliki background teknik dan pengalaman maintenance equipment.",
      requirements: [
        "SMA/SMK jurusan Teknik",
        "Pengalaman maintenance equipment minimal 1 tahun",
        "Memahami sistem mekanik dan elektrik dasar",
        "Dapat melakukan troubleshooting peralatan",
        "Rajin, teliti, dan bertanggung jawab",
        "Dapat bekerja di lingkungan outdoor"
      ],
      responsibilities: [
        "Maintenance rutin peralatan cuci kendaraan",
        "Melakukan perbaikan equipment yang rusak",
        "Monitoring kondisi mesin dan peralatan",
        "Mengelola spare parts dan tools",
        "Membuat laporan maintenance harian",
        "Memastikan safety standard terpenuhi"
      ],
      benefits: [
        "Gaji pokok + tunjangan teknik",
        "BPJS Kesehatan dan Ketenagakerjaan",
        "Pelatihan teknik equipment",
        "Tools dan safety equipment",
        "Bonus kinerja",
        "Jenjang karir ke supervisor"
      ],
      contactEmail: "maintenance@carewash63.ipb.ac.id",
      contactPhone: "+6281234567892",
      urgent: false,
      featured: false
    },
    {
      id: 11,
      title: "Front Office Staff",
      company: "Asrama Internasional",
      category: "Akomodasi",
      location: "IPB Dramaga",
      type: "Full Time",
      salary: "Rp 3.500.000 - Rp 4.300.000",
      experience: "1-2 tahun",
      education: "D3/S1 Perhotelan/Bahasa",
      posted: "2023-12-15",
      deadline: "2024-01-15",
      description: "Asrama Internasional IPB mencari Front Office Staff yang dapat berkomunikasi dalam bahasa Inggris untuk melayani mahasiswa internasional dan tamu asing. Pengalaman hospitality menjadi nilai plus.",
      requirements: [
        "D3/S1 Perhotelan, Bahasa Inggris, atau bidang terkait",
        "Kemampuan bahasa Inggris aktif (speaking & writing)",
        "Pengalaman front office hotel/guest house minimal 1 tahun",
        "Customer service oriented",
        "Familiar dengan sistem PMS hotel",
        "Berpenampilan profesional dan ramah"
      ],
      responsibilities: [
        "Melayani check-in dan check-out tamu",
        "Memberikan informasi fasilitas dan layanan",
        "Menangani reservasi dan booking",
        "Koordinasi dengan housekeeping dan maintenance",
        "Menangani complaint dan request tamu",
        "Membuat laporan occupancy harian"
      ],
      benefits: [
        "Gaji kompetitif + service charge",
        "Tunjangan bahasa asing",
        "BPJS Kesehatan dan Ketenagakerjaan",
        "Training hospitality dan bahasa",
        "Meal allowance",
        "International working environment"
      ],
      contactEmail: "frontoffice@asrama.ipb.ac.id",
      contactPhone: "+6281312381377",
      urgent: false,
      featured: false
    },
    {
      id: 12,
      title: "Laundry Operator",
      company: "Daily Wash 63",
      category: "Layanan",
      location: "IPB Dramaga",
      type: "Full Time",
      salary: "Rp 2.800.000 - Rp 3.500.000",
      experience: "0-1 tahun",
      education: "SMA/SMK",
      posted: "2023-12-10",
      deadline: "2024-01-10",
      description: "Daily Wash 63 membutuhkan Laundry Operator yang teliti dan bertanggung jawab untuk menangani proses pencucian pakaian mahasiswa. Training akan diberikan untuk kandidat yang tepat.",
      requirements: [
        "Minimal SMA/SMK",
        "Teliti dan bertanggung jawab",
        "Dapat bekerja dengan mesin laundry",
        "Fisik sehat dan kuat",
        "Jujur dan dapat dipercaya",
        "Dapat bekerja shift"
      ],
      responsibilities: [
        "Mengoperasikan mesin cuci dan pengering",
        "Melakukan sorting pakaian berdasarkan jenis",
        "Mengelola proses pencucian sesuai SOP",
        "Melakukan quality check hasil cucian",
        "Menjaga kebersihan area laundry",
        "Mengelola inventory deterjen dan supplies"
      ],
      benefits: [
        "Gaji pokok + bonus produktivitas",
        "BPJS Kesehatan",
        "Training operasional mesin",
        "Seragam kerja",
        "Lingkungan kerja yang nyaman",
        "Kesempatan pengembangan skill"
      ],
      contactEmail: "operator@dailywash63.ipb.ac.id",
      contactPhone: "+6281234567893",
      urgent: false,
      featured: false
    },
    {
      id: 13,
      title: "Waiter/Waitress",
      company: "Botani Kopi Nusantara",
      category: "Kuliner & Kafe",
      location: "Student Service Center IPB",
      type: "Part Time",
      salary: "Rp 2.200.000 - Rp 2.800.000",
      experience: "0-1 tahun",
      education: "SMA/SMK",
      posted: "2023-12-05",
      deadline: "2024-01-05",
      description: "Botani Kopi Nusantara mencari Waiter/Waitress part-time yang energik dan ramah untuk melayani mahasiswa dan dosen. Posisi ini cocok untuk mahasiswa yang ingin pengalaman kerja di F&B.",
      requirements: [
        "Minimal SMA/SMK",
        "Ramah, energik, dan customer oriented",
        "Dapat berkomunikasi dengan baik",
        "Berpenampilan rapi dan menarik",
        "Dapat bekerja part-time dan weekend",
        "Familiar dengan menu kopi dan makanan"
      ],
      responsibilities: [
        "Menyambut dan melayani pelanggan",
        "Mengambil order dan memberikan rekomendasi menu",
        "Menyajikan makanan dan minuman",
        "Menjaga kebersihan meja dan area dining",
        "Menangani pembayaran pelanggan",
        "Membantu persiapan dan closing cafe"
      ],
      benefits: [
        "Gaji part-time + tips",
        "Flexible schedule untuk mahasiswa",
        "Free meals during shift",
        "Training F&B service",
        "Friendly working environment",
        "Networking dengan komunitas kampus"
      ],
      contactEmail: "service@botanikopi.ipb.ac.id",
      contactPhone: "+6281359338754",
      urgent: false,
      featured: false
    },
    {
      id: 14,
      title: "Quality Control Specialist",
      company: "Think Fresh",
      category: "Agribisnis",
      location: "Teaching Factory IPB",
      type: "Full Time",
      salary: "Rp 4.800.000 - Rp 6.000.000",
      experience: "2-4 tahun",
      education: "S1 Teknologi Pangan/Pertanian",
      posted: "2023-12-01",
      deadline: "2024-01-01",
      description: "Think Fresh membutuhkan Quality Control Specialist untuk memastikan kualitas produk sayuran organik dan non-organik sesuai standar. Kandidat ideal memiliki background teknologi pangan atau pertanian.",
      requirements: [
        "S1 Teknologi Pangan, Pertanian, atau bidang terkait",
        "Pengalaman QC di industri makanan/pertanian minimal 2 tahun",
        "Memahami standar keamanan pangan dan HACCP",
        "Kemampuan analisis laboratorium",
        "Detail oriented dan analytical thinking",
        "Familiar dengan regulasi keamanan pangan"
      ],
      responsibilities: [
        "Melakukan quality control produk sayuran",
        "Analisis mikrobiologi dan kimia produk",
        "Memastikan compliance terhadap food safety standard",
        "Membuat dokumentasi QC dan laporan",
        "Training tim produksi tentang quality standard",
        "Koordinasi dengan supplier untuk raw material quality"
      ],
      benefits: [
        "Gaji kompetitif sesuai pengalaman",
        "Tunjangan kesehatan dan transportasi",
        "Laboratory allowance",
        "Training quality management system",
        "Bonus achievement",
        "Professional development program"
      ],
      contactEmail: "qc@thinkfresh.ipb.ac.id",
      contactPhone: "+6281566783767",
      urgent: true,
      featured: false
    },
    {
      id: 15,
      title: "Business Development Manager",
      company: "1963 Enterprise",
      category: "Manajemen",
      location: "IPB Dramaga",
      type: "Full Time",
      salary: "Rp 8.000.000 - Rp 12.000.000",
      experience: "5-7 tahun",
      education: "S1/S2 Business/Management",
      posted: "2023-11-28",
      deadline: "2023-12-28",
      description: "1963 Enterprise sedang mencari Business Development Manager untuk memimpin ekspansi dan pengembangan unit bisnis baru. Posisi strategis ini membutuhkan leader berpengalaman dengan track record yang solid.",
      requirements: [
        "S1/S2 Business, Management, atau bidang terkait",
        "Pengalaman minimal 5 tahun di business development",
        "Proven track record dalam business expansion",
        "Strong leadership dan strategic thinking",
        "Excellent presentation dan negotiation skills",
        "Network yang luas di industri F&B dan retail"
      ],
      responsibilities: [
        "Mengembangkan strategi ekspansi bisnis",
        "Identifikasi peluang bisnis baru",
        "Mengelola partnership dan kerjasama strategis",
        "Melakukan market research dan competitor analysis",
        "Memimpin tim business development",
        "Membuat business plan dan financial projection"
      ],
      benefits: [
        "Gaji executive level + bonus performance",
        "Tunjangan kesehatan keluarga premium",
        "Company car dan driver",
        "Executive training program",
        "Stock option program",
        "International business trip opportunities"
      ],
      contactEmail: "recruitment@1963enterprise.com",
      contactPhone: "+62251-8622642",
      urgent: true,
      featured: true
    }
  ]

  // Search and filter functionality
  const searchJobs = (query) => {
    if (!query.trim()) return jobListings

    const searchTerm = query.toLowerCase().trim()
    return jobListings.filter(job =>
      job.title.toLowerCase().includes(searchTerm) ||
      job.company.toLowerCase().includes(searchTerm) ||
      job.category.toLowerCase().includes(searchTerm) ||
      job.location.toLowerCase().includes(searchTerm)
    )
  }

  const filteredJobs = activeFilter === "Semua" 
    ? searchJobs(searchQuery)
    : searchJobs(searchQuery).filter(job => job.category === activeFilter)

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

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    })
  }

  const getDaysRemaining = (deadline) => {
    const today = new Date()
    const deadlineDate = new Date(deadline)
    const diffTime = deadlineDate - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const getJobTypeColor = (type) => {
    return type === "Full Time" ? "bg-green-50 text-green-700 border-green-200" : "bg-blue-50 text-blue-700 border-blue-200"
  }

  const getCategoryColor = (category) => {
    const colors = {
      "Retail & Produk": "from-purple-500 to-purple-600",
      "Kuliner & Kafe": "from-orange-500 to-orange-600",
      "Akomodasi": "from-blue-500 to-blue-600",
      "Agribisnis": "from-green-500 to-green-600",
      "Manajemen": "from-red-500 to-red-600",
      "Layanan": "from-cyan-500 to-cyan-600"
    }
    return colors[category] || "from-gray-500 to-gray-600"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-60 h-60 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-xl animate-pulse delay-300"></div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-20 pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
          
          {/* Animated Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300/20 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-purple-300/20 rounded-full blur-lg animate-pulse delay-300"></div>

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
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {/* Title Section */}
          <div className="mb-16">
            <div className="inline-flex items-center justify-center w-20 h-1.5 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full mb-8 shadow-lg"></div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
              Karir di{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent">
                1963 Enterprise
              </span>
            </h1>

            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium mb-10">
              Bergabunglah dengan tim dinamis kami dan kembangkan karir Anda di berbagai unit bisnis 1963 Enterprise. 
              Temukan peluang yang sesuai dengan passion dan keahlian Anda!
            </p>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        {filteredJobs.length > 0 ? (
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <div
                key={job.id}
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-white/50 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Job Info */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div className="flex flex-wrap items-start gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-black text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                              {job.title}
                            </h3>
                            {job.urgent && (
                              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold border border-red-200 animate-pulse">
                                URGENT
                              </span>
                            )}
                            {job.featured && (
                              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold border border-yellow-200 flex items-center space-x-1">
                                <Star className="w-3 h-3 fill-current" />
                                <span>FEATURED</span>
                              </span>
                            )}
                          </div>
                          <p className="text-lg font-semibold text-blue-600 mb-2">{job.company}</p>
                          <p className="text-gray-600 leading-relaxed">{job.description}</p>
                        </div>
                      </div>

                      {/* Job Details */}
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-xl border border-purple-100">
                          <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs text-purple-700 font-semibold">Lokasi</p>
                            <p className="font-bold text-gray-800 text-sm">{job.location}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl border border-green-100">
                          <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <DollarSign className="w-5 h-5 text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs text-green-700 font-semibold">Gaji</p>
                            <p className="font-bold text-gray-800 text-sm">{job.salary}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-xl border border-orange-100">
                          <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Clock className="w-5 h-5 text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs text-orange-700 font-semibold">Tipe</p>
                            <p className="font-bold text-gray-800 text-sm">{job.type}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                          <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-5 h-5 text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs text-blue-700 font-semibold">Pengalaman</p>
                            <p className="font-bold text-gray-800 text-sm">{job.experience}</p>
                          </div>
                        </div>
                      </div>

                      {/* Tags and Deadline */}
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center space-x-2">
                          <span className={`${getJobTypeColor(job.type)} px-3 py-1 rounded-full text-xs font-bold border`}>
                            {job.type}
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">
                            {job.category}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>Deadline: {formatDate(job.deadline)}</span>
                          <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
                            getDaysRemaining(job.deadline) <= 7 
                              ? "bg-red-100 text-red-700" 
                              : "bg-green-100 text-green-700"
                          }`}>
                            {getDaysRemaining(job.deadline)} hari lagi
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => setSelectedJob(job)}
                        className={`bg-gradient-to-r ${getCategoryColor(job.category)} text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3 group/btn`}
                      >
                        <span>Lihat Detail</span>
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Search className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-4">Tidak ada lowongan ditemukan</h3>
            <p className="text-gray-500 mb-6 text-lg">
              {searchQuery 
                ? `Tidak ditemukan lowongan untuk "${searchQuery}"${activeFilter !== "Semua" ? ` dalam kategori "${activeFilter}"` : ""}`
                : `Tidak ditemukan lowongan untuk kategori "${activeFilter}"`
              }
            </p>
            <button
              onClick={() => {
                setSearchQuery("")
                setActiveFilter("Semua")
              }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full">
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${getCategoryColor(selectedJob.category)} p-8 text-white relative`}>
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-3xl font-black">{selectedJob.title}</h2>
                    {selectedJob.urgent && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                        URGENT
                      </span>
                    )}
                  </div>
                  <p className="text-xl font-semibold text-white/90 mb-2">{selectedJob.company}</p>
                  <p className="text-white/80 leading-relaxed">{selectedJob.description}</p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-semibold">Lokasi</span>
                  </div>
                  <p className="font-bold text-sm">{selectedJob.location}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-xs font-semibold">Gaji</span>
                  </div>
                  <p className="font-bold text-sm">{selectedJob.salary}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-semibold">Tipe</span>
                  </div>
                  <p className="font-bold text-sm">{selectedJob.type}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-xs font-semibold">Pendidikan</span>
                  </div>
                  <p className="font-bold text-sm">{selectedJob.education}</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              {/* Requirements */}
              <div>
                <h3 className="text-2xl font-black text-gray-800 mb-4 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span>Persyaratan</span>
                </h3>
                <div className="space-y-3">
                  {selectedJob.requirements.map((req, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-red-50 rounded-xl border border-red-100">
                      <div className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-2xl font-black text-gray-800 mb-4 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <span>Tanggung Jawab</span>
                </h3>
                <div className="space-y-3">
                  {selectedJob.responsibilities.map((resp, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-black text-gray-800 mb-4 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <span>Benefit & Fasilitas</span>
                </h3>
                <div className="space-y-3">
                  {selectedJob.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-xl border border-green-100">
                      <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Info */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-orange-200">
                <h3 className="text-2xl font-black text-gray-800 mb-4 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                  <span>Cara Melamar</span>
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-gray-700 font-medium mb-4">
                      Untuk melamar posisi ini, silakan kirimkan CV dan surat lamaran Anda melalui:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                        <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs text-blue-700 font-semibold">Email</p>
                          <a 
                            href={`mailto:${selectedJob.contactEmail}?subject=Lamaran Kerja - ${selectedJob.title}&body=Yth. HRD ${selectedJob.company},%0D%0A%0D%0ASaya tertarik untuk melamar posisi ${selectedJob.title} yang diiklankan. Terlampir CV dan surat lamaran saya.%0D%0A%0D%0ATerima kasih.`}
                            className="font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-1 group/link text-sm"
                          >
                            <span className="truncate">{selectedJob.contactEmail}</span>
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                          </a>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl border border-green-100">
                        <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs text-green-700 font-semibold">Telepon</p>
                          <a 
                            href={`tel:${selectedJob.contactPhone}`}
                            className="font-bold text-gray-800 hover:text-green-600 transition-colors duration-300 flex items-center space-x-1 group/link text-sm"
                          >
                            <span className="truncate">{selectedJob.contactPhone}</span>
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Important Notes */}
                    <div className="mt-4 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-yellow-800">
                          <p className="font-semibold mb-2">Catatan Penting:</p>
                          <ul className="space-y-1 text-xs">
                            <li>• Sertakan CV terbaru dalam format PDF</li>
                            <li>• Cantumkan posisi yang dilamar di subject email</li>
                            <li>• Deadline lamaran: <strong>{formatDate(selectedJob.deadline)}</strong></li>
                            <li>• Hanya kandidat terpilih yang akan dihubungi</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`mailto:${selectedJob.contactEmail}?subject=Lamaran Kerja - ${selectedJob.title}&body=Yth. HRD ${selectedJob.company},%0D%0A%0D%0ASaya tertarik untuk melamar posisi ${selectedJob.title} yang diiklankan. Terlampir CV dan surat lamaran saya.%0D%0A%0D%0ATerima kasih.`}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Kirim Email Lamaran</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <a
                  href={`https://wa.me/${selectedJob.contactPhone.replace(/[^0-9]/g, '')}?text=Halo, saya tertarik dengan lowongan ${selectedJob.title} di ${selectedJob.company}. Bisakah saya mendapatkan informasi lebih lanjut?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Hubungi via WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CareerPage