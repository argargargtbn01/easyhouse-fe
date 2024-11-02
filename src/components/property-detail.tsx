"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"

export function PropertyDetail() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    "/images/img-login-page.jpg",
    "/images/img-login-page.jpg",
    "/images/img-login-page.jpg",
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <Link href="/dashboard" className="flex items-center gap-1">
          <Home className="h-4 w-4" />
          Trang chủ
        </Link>
        <span>/</span>
        <Link href="/cho-thue">Cho thuê bất động sản</Link>
      </div>

      {/* Image Carousel */}
      <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
        <Image
          src={images[currentImage]}
          alt="Property image"
          fill
          className="object-cover"
        />
        <button
          onClick={() => setCurrentImage(prev => (prev > 0 ? prev - 1 : images.length - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => setCurrentImage(prev => (prev < images.length - 1 ? prev + 1 : 0))}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-2 w-2 rounded-full ${
                currentImage === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Property Details */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                Cho thuê phòng trọ giá rẻ nhất Hà Nội 30m²
              </h1>
              <p className="text-gray-600">31 Ngõ 8 Nguyễn Văn Trỗi, P Mỗ Lao, Hà Đông, Hà Nội</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-[#00A5AF]">1.500.000 VNĐ</div>
              <div className="text-sm text-gray-600">30m²</div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Mô tả chi tiết</h2>
            <div className="space-y-2 text-gray-600">
              <p>PHÒNG CAO CẤP FULL NỘI THẤT 45M2 NGAY ETOWN CỘNG HÒA</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Phòng sạch sẽ, không mất điện nước</li>
                <li>Có thang máy, máy giặt chung và sân phơi</li>
                <li>Điện: 3.5k/kWh, Nước 50k/1 người</li>
                <li>Tòa nhà mới đẹp, được trang bị đủ nội thất</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Button variant="outline" className="flex-1">
              Lưu tin
            </Button>
            <Button className="flex-1 bg-[#00A5AF] hover:bg-[#008C95]">
              Đăng ký thuê
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}