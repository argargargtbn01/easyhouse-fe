import Link from "next/link";
import { Home, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "./components/property-card";
import { StatusFilter } from "./components/status-filter";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const MOCK_PROPERTIES = [
  {
    id: 1,
    title: "Chung cư Cầu Giấy",
    image: "/images/img-login-page.jpg",
    status: {
      text: "8/10 phòng đã cho thuê",
      type: "partial" as const,
    },
    propertyType: "Nhà trọ",
    address: "1 Nguyễn Thị Duệ, Phường Yên Hòa, Quận Cầu Giấy, Hà Nội",
  },
  {
    id: 2,
    title: "Nhà Thanh Nhàn",
    image: "/images/img-login-page.jpg",
    status: {
      text: "Đã cho thuê",
      type: "rented" as const,
    },
    propertyType: "Nhà nguyên căn",
    address: "269 Thanh Nhàn, Quận Hai Bà Trưng, Hà Nội",
  },
  {
    id: 3,
    title: "Nhà Thanh Nhàn",
    image: "/images/img-login-page.jpg",
    status: {
      text: "Còn trống",
      type: "available" as const,
    },
    propertyType: "Nhà nguyên căn",
    address: "269 Thanh Nhàn, Quận Hai Bà Trưng, Hà Nội",
  },
];

export default function PropertyManagementPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-gray-900"
            >
              <Home className="h-4 w-4" />
              Trang chủ
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/landlord" className="hover:text-gray-900">
              Kênh chủ nhà
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">Quản lý nhà</span>
          </nav>

          {/* Filters and Actions */}
          <div className="flex items-center justify-between mb-6">
            <StatusFilter />
            <Button className="bg-[#F5A623] hover:bg-[#E69512] text-white gap-2">
              <Plus className="h-4 w-4" />
              Thêm nhà
            </Button>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_PROPERTIES.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
