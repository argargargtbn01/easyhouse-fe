'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Eye, EyeOff, Apple } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function Component() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess(false)
    if (formData.password !== formData.confirmPassword) {
      setError('Mật khẩu không khớp.')
      return
    }

    if (!formData.agreeToTerms) {
      setError('Vui lòng đồng ý với Điều khoản dịch vụ và Chính sách bảo mật.')
      return
    }

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`, {
        email: formData.email,
        password: formData.password,
      })
      setSuccess(true)
      router.push('/login')
    } catch (err: any) {
      setError(
        err.response?.data?.message || 'Đăng ký thất bại. Vui lòng thử lại.'
      )
    }
  }

  return (
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
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          {success && (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
              role="alert"
            >
              <span className="block sm:inline">Đăng ký thành công!</span>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Email</label>
              <Input
                type="text"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="example@gmail.com"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Mật khẩu</label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
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
                  type={showConfirmPassword ? 'text' : 'password'}
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
                Đồng ý với{' '}
                <Link href="#" className="text-[#00A5AF] hover:underline">
                  Điều khoản dịch vụ
                </Link>{' '}
                và{' '}
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
              Bạn đã có tài khoản?{' '}
              <Link href="/login" className="text-[#00A5AF] hover:underline">
                Đăng nhập
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
