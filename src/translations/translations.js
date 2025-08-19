"use client"

import { useLanguage } from "../contexts/LanguageContext"

export const translations = {
  id: {
    // Navigation
    nav: {
      home: "Home",
      about: "Tentang Kami",
      business: "Unit Bisnis",
      news: "Berita",
      career: "Karir",
      contact: "Kontak",
    },

    // Hero Section
    hero: {
      title: "Discover the Future of Campus-Driven Business",
      subtitle: "1963 ENTERPRISE",
      description:
        "Dari agribisnis hingga gaya hidup, 1963 Enterprise mengelola unit-unit bisnis kampus yang adaptif, inovatif, dan berdaya saing",
      cta: "Temukan Unit Bisnis Kami",
    },

    // About Section
    about: {
      title: "Tentang 1963 Enterprise",
      description:
        "Sebagai bagian integral dari IPB University, 1963 Enterprise berkomitmen untuk mengembangkan ekosistem bisnis yang berkelanjutan dan inovatif. Kami mengelola berbagai unit bisnis yang tidak hanya menghasilkan keuntungan, tetapi juga memberikan nilai edukatif bagi mahasiswa dan masyarakat.",
      cta: "Jelajahi Unit Bisnis",
      stats: {
        business: "Unit Bisnis Aktif",
        partners: "Mitra Bisnis",
        products: "Produk & Layanan",
      },
    },

    // Business Catalog
    businessCatalog: {
      title: "Unit Bisnis Kami",
      subtitle: "Jelajahi berbagai unit bisnis yang dikelola oleh 1963 Enterprise",
      categories: {
        all: "Semua Kategori",
        retail: "Retail & Produk",
        culinary: "Kuliner & Kafe",
        accommodation: "Akomodasi Penginapan & Sewa Gedung",
        services: "Layanan Harian & Kebersihan",
        agribusiness: "Agribisnis & Teaching Factory",
        canteen: "Kantin Area Kampus",
      },
      viewDetails: "Lihat Detail",
    },

    // Contact Page
    contact: {
      title: "Hubungi Kami",
      subtitle: "Temukan informasi kontak lengkap untuk setiap unit bisnis kami",
      phone: "Telepon",
      email: "Email",
      instagram: "Instagram",
      whatsapp: "Hubungi Sekarang",
      location: "Lihat Lokasi",
    },

    // Career Page
    career: {
      title: "Karir",
      subtitle: "Bergabunglah dengan tim 1963 Enterprise dan kembangkan karir Anda bersama kami",
      search: "Cari lowongan...",
      filter: "Filter berdasarkan unit bisnis",
      allUnits: "Semua Unit Bisnis",
      applyNow: "Lamar Sekarang",
      whyJoin: "Mengapa Bergabung dengan Kami?",
      benefits: {
        growth: "Pengembangan Karir",
        growthDesc: "Kesempatan untuk berkembang dalam lingkungan yang dinamis",
        environment: "Lingkungan Kerja",
        environmentDesc: "Suasana kerja yang kolaboratif dan inovatif",
        benefits: "Benefit Menarik",
        benefitsDesc: "Paket kompensasi dan tunjangan yang kompetitif",
      },
    },

    // Business Unit Page
    businessUnit: {
      backToCatalog: "Kembali ke Katalog Unit Bisnis",
      operatingHours: "Jam Operasional",
      priceRange: "Kisaran Harga",
      locationInfo: "Informasi Lokasi & Operasional",
      selectLocation: "Pilih Lokasi",
      branches: "Cabang",
      activeLocation: "Lokasi Aktif",
      facilities: "Fasilitas",
      gallery: "Galeri Foto",
      products: "Produk & Layanan",
      viewAllProducts: "Lihat Semua Produk",
      orderVia: "Pesan via",
      availableAtLocation: "Tersedia di Lokasi",
      contactNow: "Hubungi Sekarang",
      viewLocation: "Lihat Lokasi",
    },

    // Website Stats
    stats: {
      title: "Statistik Website",
      todayVisits: "Kunjungan Hari Ini",
      totalVisits: "Total Kunjungan",
      activeUsers: "Pengguna Aktif",
      liveData: "Data Live",
    },

    // Common
    common: {
      loading: "Memuat...",
      error: "Terjadi kesalahan",
      close: "Tutup",
      save: "Simpan",
      cancel: "Batal",
      confirm: "Konfirmasi",
      search: "Cari...",
      filter: "Filter",
      viewAll: "Lihat Semua",
      readMore: "Baca Selengkapnya",
    },
  },

  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About Us",
      business: "Business Units",
      news: "News",
      career: "Career",
      contact: "Contact",
    },

    // Hero Section
    hero: {
      title: "Discover the Future of Campus-Driven Business",
      subtitle: "1963 ENTERPRISE",
      description:
        "From agribusiness to lifestyle, 1963 Enterprise manages adaptive, innovative, and competitive campus business units",
      cta: "Discover Our Business Units",
    },

    // About Section
    about: {
      title: "About 1963 Enterprise",
      description:
        "As an integral part of IPB University, 1963 Enterprise is committed to developing a sustainable and innovative business ecosystem. We manage various business units that not only generate profits but also provide educational value for students and the community.",
      cta: "Explore Business Units",
      stats: {
        business: "Active Business Units",
        partners: "Business Partners",
        products: "Products & Services",
      },
    },

    // Business Catalog
    businessCatalog: {
      title: "Our Business Units",
      subtitle: "Explore various business units managed by 1963 Enterprise",
      categories: {
        all: "All Categories",
        retail: "Retail & Products",
        culinary: "Culinary & Cafe",
        accommodation: "Accommodation & Building Rental",
        services: "Daily Services & Cleaning",
        agribusiness: "Agribusiness & Teaching Factory",
        canteen: "Campus Area Canteen",
      },
      viewDetails: "View Details",
    },

    // Contact Page
    contact: {
      title: "Contact Us",
      subtitle: "Find complete contact information for each of our business units",
      phone: "Phone",
      email: "Email",
      instagram: "Instagram",
      whatsapp: "Contact Now",
      location: "View Location",
    },

    // Career Page
    career: {
      title: "Career",
      subtitle: "Join the 1963 Enterprise team and develop your career with us",
      search: "Search jobs...",
      filter: "Filter by business unit",
      allUnits: "All Business Units",
      applyNow: "Apply Now",
      whyJoin: "Why Join Us?",
      benefits: {
        growth: "Career Development",
        growthDesc: "Opportunities to grow in a dynamic environment",
        environment: "Work Environment",
        environmentDesc: "Collaborative and innovative work atmosphere",
        benefits: "Attractive Benefits",
        benefitsDesc: "Competitive compensation and benefits package",
      },
    },

    // Business Unit Page
    businessUnit: {
      backToCatalog: "Back to Business Unit Catalog",
      operatingHours: "Operating Hours",
      priceRange: "Price Range",
      locationInfo: "Location & Operational Information",
      selectLocation: "Select Location",
      branches: "Branches",
      activeLocation: "Active Location",
      facilities: "Facilities",
      gallery: "Photo Gallery",
      products: "Products & Services",
      viewAllProducts: "View All Products",
      orderVia: "Order via",
      availableAtLocation: "Available at Location",
      contactNow: "Contact Now",
      viewLocation: "View Location",
    },

    // Website Stats
    stats: {
      title: "Website Statistics",
      todayVisits: "Today's Visits",
      totalVisits: "Total Visits",
      activeUsers: "Active Users",
      liveData: "Live Data",
    },

    // Common
    common: {
      loading: "Loading...",
      error: "An error occurred",
      close: "Close",
      save: "Save",
      cancel: "Cancel",
      confirm: "Confirm",
      search: "Search...",
      filter: "Filter",
      viewAll: "View All",
      readMore: "Read More",
    },
  },
}

export const useTranslation = () => {
  const { language } = useLanguage()

  const t = (key) => {
    const keys = key.split(".")
    let value = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return { t }
}
