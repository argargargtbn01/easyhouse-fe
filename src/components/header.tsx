"use client";

import Link from "next/link";
import Image from "next/image";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

interface HeaderProps {
  isAuthenticated?: boolean;
}

export function Header({ isAuthenticated = true }: HeaderProps) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Xóa token khỏi localStorage
      localStorage.removeItem('access_token');

      // Chuyển hướng đến trang đăng nhập
      router.push('/login');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <header className="w-full bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-[#FFB800]">
              Easy<span className="text-[#00A5AF]">House</span>
            </span>
          </Link>

          <div className="flex-1 flex items-center justify-center gap-4 mx-4">
            <div className="w-[480px] relative">
              <Input
                type="search"
                placeholder="Nhập để tìm kiếm"
                className="w-full pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <Button
              variant="default"
              className="bg-[#00A5AF] text-white hover:bg-[#008C95]"
            >
              Kênh chủ nhà
            </Button>
          </div>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] text-white flex items-center justify-center">
                        2
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Thông báo mới</DropdownMenuItem>
                    <DropdownMenuItem>Xem tất cả</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                    >
                      <Image
                        src="/images/avatar.jpg"
                        alt="Avatar"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Tài khoản</DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>Đăng xuất</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/register"
                  className="text-sm font-extrabold text-gray-700 hover:text-gray-900 font-sans"
                >
                  Đăng ký
                </Link>

                <span className="text-gray-300">|</span>
                <Link
                  href="/login"
                  className="text-sm font-extrabold text-gray-700 hover:text-gray-900 font-sans"
                >
                  Đăng nhập
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
