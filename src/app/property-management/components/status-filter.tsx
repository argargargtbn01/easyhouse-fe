"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function StatusFilter() {
  return (
    <Select defaultValue="all">
      <SelectTrigger className="w-[200px] bg-[#B4ECE3] border-0 text-[#00A5AF]">
        <SelectValue placeholder="Tất cả trạng thái" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Tất cả trạng thái</SelectItem>
        <SelectItem value="available">Còn trống</SelectItem>
        <SelectItem value="rented">Đã cho thuê</SelectItem>
      </SelectContent>
    </Select>
  )
}