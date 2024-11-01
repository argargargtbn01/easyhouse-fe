"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown, Apple } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberPassword, setRememberPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="min-h-screen flex items-center justify-center bg-gray-50 bg-cover bg-center" style={{backgroundImage: "url('/images/img-login-page.jpg')"}}>
      <Card className="w-full max-w-md p-6">
        <CardContent>
          <div className="flex justify-end mb-6">
            <Button variant="ghost" size="sm" className="text-sm">
              VIE <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#FFB800]">iz<span className="text-[#00A5AF]">house</span></h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Tên đăng nhập</label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="example123"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Mật khẩu</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberPassword}
                  onCheckedChange={(checked) => setRememberPassword(checked as boolean)}
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Lưu mật khẩu
                </label>
              </div>
              <Link href="/forgot-password" className="text-sm text-[#00A5AF] hover:underline">
                Quên mật khẩu?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#00A5AF] hover:bg-[#008C95] text-white"
            >
              Đăng nhập
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
                  src="/placeholder.svg?height=24&width=24"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="h-5 w-5"
                />
              </Button>
              <Button variant="outline" className="w-full">
                <Image
                  src="/placeholder.svg?height=24&width=24"
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
              Bạn chưa có tài khoản?{" "}
              <Link href="/signup" className="text-[#00A5AF] hover:underline">
                Đăng ký
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}