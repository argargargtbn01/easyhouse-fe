import { PropertyCard } from "./property-card"

const MOCK_PROPERTIES = Array(9).fill({
  imageUrl: "/images/img-login-page.jpg",
  price: "5.500.000 VNĐ",
  title: "Cho thuê phòng trọ giá rẻ tại Hà Nội đường Hoàng Quốc Việt, gần trường ĐH",
})

export function PropertyGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-6">Gợi ý cho bạn</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_PROPERTIES.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </div>
  )
}