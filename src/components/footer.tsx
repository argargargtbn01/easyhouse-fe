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
              <li>Về Easyhouse</li>
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
              Email: argargargtbn01@gmail.com
            </p>
            <div className="space-y-2">
              <h4 className="font-medium">Tải về ứng dụng Easyhouse (đùa thôi chưa có đâu)</h4>
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
          <p>Quang</p>
          <p>
            Địa chỉ: Ngọc Lâm, Long Biên, Hà Nội
          </p>
        </div>
      </div>
    </footer>
  );
}
