import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Header() {
  return (
    <header className="w-full bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#FFB800]">iz<span className="text-[#00A5AF]">house</span></span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Khu vực/Dự án" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hanoi">Hà Nội</SelectItem>
                <SelectItem value="hochiminh">Hồ Chí Minh</SelectItem>
                <SelectItem value="danang">Đà Nẵng</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Mức giá" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-2">0 - 2 Triệu</SelectItem>
                <SelectItem value="2-5">2 - 5 Triệu</SelectItem>
                <SelectItem value="5-10">5 - 10 Triệu</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Diện tích" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-30">0 - 30m²</SelectItem>
                <SelectItem value="30-50">30 - 50m²</SelectItem>
                <SelectItem value="50-100">50 - 100m²</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="default" className="bg-[#00A5AF] text-white hover:bg-[#008C95]">
              Đăng ký / Đăng nhập
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}