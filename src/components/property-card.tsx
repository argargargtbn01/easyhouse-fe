import Image from "next/image"
import { Heart } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface PropertyCardProps {
  imageUrl: string
  price: string
  title: string
  isFavorite?: boolean
}

export function PropertyCard({ imageUrl, price, title, isFavorite = false }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white/80 hover:bg-white">
          <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </button>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg text-[#00A5AF]">{price}</h3>
        <p className="text-sm text-gray-600 mt-1">{title}</p>
      </CardContent>
    </Card>
  )
}