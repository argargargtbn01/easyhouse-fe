import { Home, User, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface RoomCardProps {
  number: string
  tenant?: string
  price?: string
  status: 'occupied' | 'vacant' | 'pending'
}

export function RoomCard({ number, tenant, price, status }: RoomCardProps) {
  const getBgColor = () => {
    switch (status) {
      case 'occupied':
        return 'bg-[#00A5AF] text-white'
      case 'vacant':
        return 'bg-gray-100 text-gray-600'
      case 'pending':
        return 'bg-[#00A5AF] text-white'
      default:
        return 'bg-gray-100'
    }
  }

  return (
    <Card className={`${getBgColor()} border-0`}>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Home className="h-5 w-5" />
          <span className="font-medium">{number}</span>
        </div>
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span className="text-sm">{tenant || '[Còn trống]'}</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4" />
          <span className="text-sm">{price || '[Chưa niêm yết]'}</span>
        </div>
      </CardContent>
    </Card>
  )
}