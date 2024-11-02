import Image from "next/image"
import { MapPin, Home } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface PropertyCardProps {
  title: string
  image: string
  status: {
    text: string
    type: 'available' | 'partial' | 'rented'
  }
  propertyType: string
  address: string
}

export function PropertyCard({ title, image, status, propertyType, address }: PropertyCardProps) {
  const getStatusColor = (type: string) => {
    switch (type) {
      case 'available':
        return 'text-green-500'
      case 'partial':
        return 'text-orange-500'
      case 'rented':
        return 'text-red-500'
      default:
        return 'text-gray-500'
    }
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span className="sr-only">More options</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className={`text-sm mb-3 ${getStatusColor(status.type)}`}>
          {status.text}
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
          <Home className="h-4 w-4" />
          <span>{propertyType}</span>
        </div>
        <div className="flex items-start gap-2 text-gray-600 text-sm">
          <MapPin className="h-4 w-4 mt-0.5" />
          <span>{address}</span>
        </div>
      </CardContent>
    </Card>
  )
}