"use client"

import { useState, useEffect } from "react"
import { Eye, TrendingUp, Users } from "lucide-react"

const WebsiteStatsSection = () => {
  const [stats, setStats] = useState({
    dailyVisitors: 0,
    totalVisits: 0,
    activeUsers: 0,
  })

  const finalStats = {
    dailyVisitors: 247,
    totalVisits: 28456,
    activeUsers: 89,
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setStats({
        dailyVisitors: Math.floor(finalStats.dailyVisitors * progress),
        totalVisits: Math.floor(finalStats.totalVisits * progress),
        activeUsers: Math.floor(finalStats.activeUsers * progress),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setStats(finalStats)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  const statsData = [
    {
      icon: Eye,
      label: "Kunjungan Hari Ini",
      value: stats.dailyVisitors,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      label: "Total Kunjungan",
      value: stats.totalVisits.toLocaleString(),
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      label: "Pengguna Aktif",
      value: stats.activeUsers,
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Website Analytics</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Statistik real-time pengunjung dan engagement website 1963 Enterprise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Live indicator */}
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Live Data</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebsiteStatsSection
