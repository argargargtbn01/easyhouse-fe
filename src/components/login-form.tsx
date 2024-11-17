'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { ChevronDown, Apple } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function Component() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberPassword, setRememberPassword] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password,
      })
      const data = response.data
      // Store the token in localStorage or a secure cookie
      localStorage.setItem('access_token', data.access_token)

      // Redirect to the dashboard or home page
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Email hoặc mật khẩu không đúng.')
    }
  }

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/img-login-page.jpg')" }}
    >
      <Card className="w-full max-w-md p-6">
        <CardContent>

          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#FFB800]">
              iz<span className="text-[#00A5AF]">house</span>
            </h1>
          </div>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Email</label>
              <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
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
                  onCheckedChange={(checked) =>
                    setRememberPassword(checked as boolean)
                  }
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Lưu mật khẩu
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm text-[#00A5AF] hover:underline"
              >
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
              Bạn chưa có tài khoản?{' '}
              <Link href="/register" className="text-[#00A5AF] hover:underline">
                Đăng ký
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
