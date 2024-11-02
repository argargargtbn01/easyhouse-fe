"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function FilterBar() {
  return (
    <div className="w-full bg-[#00A5AF] py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 text-sm">
          <Select>
            <SelectTrigger className="w-[140px] bg-white">
              <SelectValue placeholder="Nhà/Phòng trọ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nha">Nhà</SelectItem>
              <SelectItem value="phongtro">Phòng trọ</SelectItem>
              <SelectItem value="canho">Căn hộ</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[140px] bg-white">
              <SelectValue placeholder="Hà Nội" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hanoi">Hà Nội</SelectItem>
              <SelectItem value="hochiminh">Hồ Chí Minh</SelectItem>
              <SelectItem value="danang">Đà Nẵng</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[140px] bg-white">
              <SelectValue placeholder="Quận Cầu Giấy" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="caugiay">Cầu Giấy</SelectItem>
              <SelectItem value="dongda">Đống Đa</SelectItem>
              <SelectItem value="hoankiem">Hoàn Kiếm</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[140px] bg-white">
              <SelectValue placeholder="Phường Trung Hòa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="trunghoa">Trung Hòa</SelectItem>
              <SelectItem value="yenhoa">Yên Hòa</SelectItem>
              <SelectItem value="dichvong">Dịch Vọng</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[140px] bg-white">
              <SelectValue placeholder="Từ 1-2 triệu đồng" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-2">1-2 triệu</SelectItem>
              <SelectItem value="2-3">2-3 triệu</SelectItem>
              <SelectItem value="3-5">3-5 triệu</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[140px] bg-white">
              <SelectValue placeholder="Từ 20 - 30m²" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="20-30">20-30m²</SelectItem>
              <SelectItem value="30-40">30-40m²</SelectItem>
              <SelectItem value="40-50">40-50m²</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}