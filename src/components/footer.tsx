import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Giới thiệu</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Về IZI</li>
              <li>Quy chế hoạt động</li>
              <li>Chính sách bảo mật</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Khám phá thêm</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Blog cho thuê nhà</li>
              <li>Cẩm nang cho thuê</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Liên hệ</h3>
            <p className="text-sm text-gray-600 mb-4">
              Email: support@izihouse@gmail.com
            </p>
            <div className="space-y-2">
              <h4 className="font-medium">Tải về ứng dụng IZIhouse</h4>
              <div className="flex gap-4">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="App Store"
                  width={120}
                  height={40}
                />
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Google Play"
                  width={120}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-sm text-gray-600 text-center">
          <p>© 2024 IZIHOUSE</p>
          <p>
            Địa chỉ: Lô E2a-7, Đường D1, Khu Công nghệ cao, P.Long Thạnh Mỹ,
            Tp.Thủ Đức, TP.HCM
          </p>
        </div>
      </div>
    </footer>
  );
}
