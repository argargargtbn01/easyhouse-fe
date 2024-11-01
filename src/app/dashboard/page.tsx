import { Header } from "@/components/header";
import { PropertyGrid } from "@/components/property-grid";
import { PaginationControls } from "@/components/pagination";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <PropertyGrid />
        <div className="flex justify-center">
          <PaginationControls />
        </div>
      </main>
      <Footer />
    </div>
  );
}
