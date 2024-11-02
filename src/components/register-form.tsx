"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Apple } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Component() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md p-6">
        <CardContent>
          <div className="flex justify-end mb-6">
            <Select defaultValue="vie">
              <SelectTrigger className="w-[80px]">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    VIE
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vie">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    VIE
                  </div>
                </SelectItem>
                <SelectItem value="eng">ENG</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#FFB800]">
              iz<span className="text-[#00A5AF]">house</span>
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Tên đăng nhập</label>
              <Input
                type="text"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                placeholder="example123"
                className="w-full"
              />
              <p className="text-xs text-gray-500">
                Bao gồm chữ cái thường và số
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Mật khẩu</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500">Tối thiểu 8 ký tự</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Nhập lại mật khẩu</label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, agreeToTerms: checked as boolean })
                }
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                Đồng ý với{" "}
                <Link href="#" className="text-[#00A5AF] hover:underline">
                  Điều khoản dịch vụ
                </Link>{" "}
                và{" "}
                <Link href="#" className="text-[#00A5AF] hover:underline">
                  Chính sách bảo mật
                </Link>
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#00A5AF] hover:bg-[#008C95] text-white"
            >
              Đăng ký
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">hoặc</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Button variant="outline" className="w-full">
                <Image
                  src="/images/facebook-icon.jpg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="h-5 w-5"
                />
              </Button>
              <Button variant="outline" className="w-full">
                <Image
                  src="/images/google-icon.jpg"
                  alt="Google"
                  width={24}
                  height={24}
                  className="h-5 w-5"
                />
              </Button>
              <Button variant="outline" className="w-full">
                <Apple className="h-5 w-5" />
              </Button>
            </div>

            <div className="text-center text-sm text-gray-600">
              Bạn đã có tài khoản?{" "}
              <Link href="/login" className="text-[#00A5AF] hover:underline">
                Đăng nhập
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
