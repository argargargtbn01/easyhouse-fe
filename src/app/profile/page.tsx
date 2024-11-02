"use client"

import { useState } from "react"
import Image from "next/image"
import { Camera, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Breadcrumb } from "@/components/breadcrumb"

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    fullName: "Nguyễn Minh Quang",
    phone: "0862358983",
    birthDate: "17/09/2003",
    city: "Hà Nội",
    district: "Quận Long Biên",
    address: "52 Ngọc Lâm Long Biên Hà Nội",
    gender: "nam"
  })

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Thông tin cá nhân", href: "/profile" },
    { label: "Hồ sơ cá nhân" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[800px] mx-auto px-6 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=128&width=128"
                alt="Profile"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Camera className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <Label>
              Họ và tên<span className="text-red-500">*</span>
            </Label>
            <Input
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="mt-1"
            />
          </div>

          <div>
            <Label>
              Số điện thoại<span className="text-red-500">*</span>
            </Label>
            <Input
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-1"
            />
          </div>

          <div>
            <Label>Ngày/Tháng/Năm sinh</Label>
            <div className="relative mt-1">
              <Input
                type="text"
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 text-gray-400"
              >
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.875 6.375H13.125M4.375 1.375V3.875M10.625 1.375V3.875M2.5 2.625H12.5C12.8452 2.625 13.125 2.90482 13.125 3.25V13.25C13.125 13.5952 12.8452 13.875 12.5 13.875H2.5C2.15482 13.875 1.875 13.5952 1.875 13.25V3.25C1.875 2.90482 2.15482 2.625 2.5 2.625Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>

          <div>
            <Label>Địa chỉ thường trú</Label>
            <div className="grid grid-cols-2 gap-4 mt-1 mb-2">
              <Select value={formData.city} onValueChange={(value) => setFormData({ ...formData, city: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn thành phố" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Hà Nội">Hà Nội</SelectItem>
                  <SelectItem value="Hồ Chí Minh">Hồ Chí Minh</SelectItem>
                </SelectContent>
              </Select>

              <Select value={formData.district} onValueChange={(value) => setFormData({ ...formData, district: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn quận/huyện" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Quận Cầu Giấy">Quận Cầu Giấy</SelectItem>
                  <SelectItem value="Quận Ba Đình">Quận Ba Đình</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>

          <div>
            <Label>Giới tính</Label>
            <RadioGroup
              value={formData.gender}
              onValueChange={(value) => setFormData({ ...formData, gender: value })}
              className="flex gap-6 mt-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nam" id="nam" />
                <label htmlFor="nam">Nam</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nu" id="nu" />
                <label htmlFor="nu">Nữ</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="khac" id="khac" />
                <label htmlFor="khac">Khác</label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>Liên kết tài khoản</Label>
            <div className="space-y-2 mt-1">
              <button type="button" className="w-full flex items-center gap-2 px-4 py-2 border rounded-md text-left">
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4Z" fill="#0084FF"/>
                  <path d="M24.0011 11.9977C17.3726 11.9977 12 16.8814 12 22.7863C12 26.3577 13.7825 29.5415 16.6577 31.5128V36.4977L21.4343 33.8128C22.2524 33.9929 23.1118 34.0876 24.0011 34.0876C30.6295 34.0876 36.0021 29.2039 36.0021 23.299C36.0021 17.3941 30.6295 11.9977 24.0011 11.9977ZM26.171 27.1364L22.5962 23.299L15.5708 27.1364L23.2938 19.0243L26.9997 22.8617L33.8941 19.0243L26.171 27.1364Z" fill="white"/>
                </svg>
                Liên kết Messenger
              </button>
              <button type="button" className="w-full flex items-center gap-2 px-4 py-2 border rounded-md text-left">
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4Z" fill="#039BE5"/>
                  <path d="M33 14L29.9 34.2C29.9 34.2 29.5 35.5 28 35.5C26.5 35.5 26 34.2 26 34.2L20.5 27L16 25L12 23.5C12 23.5 11 23.1 11 22C11 20.9 12 20.5 12 20.5L31 13.5C31 13.5 32 13.1 32.5 13.5C33 13.9 33 14 33 14Z" fill="white"/>
                  <path d="M20.5 27L29.5 18.5L19.5 25L20.5 34.2L20.5 27Z" fill="#B3E5FC"/>
                  <path d="M20.5 27L16 25L29.5 18.5L20.5 27Z" fill="#CFE8FC"/>
                </svg>
                Liên kết Telegram
              </button>
            </div>
            <div className="flex items-start gap-2 mt-2 text-sm text-red-500">
              <AlertCircle className="w-4 h-4 mt-0.5" />
              <p>Vui lòng liên kết Messenger hoặc Telegram của bạn để bảo mật tài khoản.</p>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button type="submit" className="bg-[#00A5AF] text-white hover:bg-[#00A5AF]/90 px-8">
              Cập nhật
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}