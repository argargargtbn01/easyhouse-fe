import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { PropertyDetail } from "@/components/property-detail"

export default function PropertyDetailPage() {
  // In a real app, you would get this from your auth state management
  const isAuthenticated = false

  return (
    <div className="min-h-screen flex flex-col">
      <Header isAuthenticated={isAuthenticated} />
      <PropertyDetail />
      <Footer />
    </div>
  )
}