"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, Settings, Users, FileText, DollarSign, ChevronRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function PropertyDetailPage() {
  const [propertyName, setPropertyName] = useState("Chung cư Cầu Giấy")
  const [city, setCity] = useState("Hà Nội")
  const [district, setDistrict] = useState("Cầu Giấy")
  const [ward, setWard] = useState("long Bien")
  const [streetAddress, setStreetAddress] = useState("52 Ngoc Lam")

  const rooms = [
    { number: "Phòng 101", tenant: "Nguyễn Minh Quang", price: "2.500.000 VNĐ", status: 'occupied' },
    { number: "Phòng 102", tenant: "[Chưa có thông tin]", price: "[Chưa niêm yết]", status: 'pending' },
    { number: "Phòng 103", tenant: "[Còn trống]", price: "[Chưa niêm yết]", status: 'vacant' },
    { number: "Phòng 104", tenant: "Nguyễn Minh Quang", price: "2.500.000 VNĐ", status: 'occupied' },
    { number: "Phòng 201", tenant: "Nguyễn Minh Quang", price: "2.500.000 VNĐ", status: 'occupied' },
    { number: "Phòng 202", tenant: "[Chưa có thông tin]", price: "[Chưa niêm yết]", status: 'pending' },
    { number: "Phòng 203", tenant: "[Còn trống]", price: "[Chưa niêm yết]", status: 'vacant' },
    { number: "Phòng 204", tenant: "Nguyễn Minh Quang", price: "2.500.000 VNĐ", status: 'occupied' },
    { number: "Phòng 301", tenant: "[Chưa có thông tin]", price: "[Chưa niêm yết]", status: 'pending' },
    { number: "Phòng 302", tenant: "[Còn trống]", price: "[Chưa niêm yết]", status: 'vacant' },
    { number: "Phòng 303", tenant: "[Còn trống]", price: "[Chưa niêm yết]", status: 'vacant' },
    { number: "Phòng 304", tenant: "[Còn trống]", price: "[Chưa niêm yết]", status: 'vacant' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-gray-900">Trang chủ</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/landlord" className="hover:text-gray-900">Kênh chủ nhà</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/manage" className="hover:text-gray-900">Quản lý nhà</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-[#00A5AF]">Chung cư Cầu Giấy</span>
        </nav>

        {/* Navigation Tabs */}
        <div className="flex justify-center bg-white rounded-lg shadow-sm py-3 px-4 mb-8">
          <div className="flex gap-6">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00A5AF] text-white">
              <Home className="h-5 w-5" />
              <span className="font-normal">Quản lý nhà</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-50">
              <Settings className="h-5 w-5" />
              <span className="font-normal">Quản lý dịch vụ</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-50">
              <Users className="h-5 w-5" />
              <span className="font-normal">Quản lý khách thuê</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-50">
              <FileText className="h-5 w-5" />
              <span className="font-normal">Danh sách hóa đơn</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-50">
              <DollarSign className="h-5 w-5" />
              <span className="font-normal">Phiếu thu - chi</span>
            </button>
          </div>
        </div>

        {/* Property Details */}
        <div className="bg-white rounded-lg shadow-sm mb-12">
          <div className="max-w-[800px] mx-auto px-8 py-6">
            <h2 className="text-xl font-medium mb-8">Chi tiết nhà:</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2">
                  Tên nhà<span className="text-red-500">*</span>
                </label>
                <Input
                  value={propertyName}
                  onChange={(e) => setPropertyName(e.target.value)}
                  className="rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">
                  Địa chỉ<span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-4 mb-2">
                  <Input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Hà Nội"
                    className="rounded-md"
                  />
                  <Input
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    placeholder="Cầu Giấy"
                    className="rounded-md"
                  />
                  <Input
                    value={ward}
                    onChange={(e) => setWard(e.target.value)}
                    placeholder="Yên Hòa"
                    className="rounded-md"
                  />
                </div>
                <Input
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  className="rounded-md"
                />
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-8">
              <Button variant="secondary" className="bg-gray-400 text-white hover:bg-gray-500 px-8">
                Xóa
              </Button>
              <Button className="bg-[#00A5AF] text-white hover:bg-[#00A5AF]/90 px-8">
                Sửa
              </Button>
            </div>
          </div>
        </div>

        {/* Room List */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-medium">Danh sách phòng:</h2>
            <div className="flex items-center gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[200px] bg-[#B4ECE3] border-0 text-[#00A5AF] font-medium">
                  <SelectValue placeholder="Tất cả trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả trạng thái</SelectItem>
                  <SelectItem value="occupied">Đã cho thuê</SelectItem>
                  <SelectItem value="vacant">Còn trống</SelectItem>
                  <SelectItem value="pending">Đang xử lý</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-[#F5A623] text-white hover:bg-[#F5A623]/90 gap-2 font-medium">
                <Plus className="h-5 w-5" />
                Thêm phòng
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {rooms.map((room, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${
                  room.status === 'occupied' || room.status === 'pending'
                    ? 'bg-[#00A5AF] text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Home className="h-5 w-5" />
                    <span className="font-medium text-lg">{room.number}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4" />
                    <span>{room.tenant}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-4 w-4" />
                    <span>{room.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}