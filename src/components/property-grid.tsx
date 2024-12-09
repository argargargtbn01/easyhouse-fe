'use client'
import { useEffect, useState } from "react";
import { PropertyCard } from "./property-card";
import axios from "axios";
// const MOCK_PROPERTIES = Array(9).fill({
//   imageUrl: "/images/img-login-page.jpg",
//   price: "5.500.000 VNĐ",
//   title: "Cho thuê phòng trọ giá rẻ tại Hà Nội đường Hoàng Quốc Việt, gần trường ĐH",
// })

interface House {
  id: number;
  type: number;
  name: string;
  address: string;
  status: number;
  area: number;
  description: string;
  image: string;
  price: number;
  numOfRooms: number;
  numOfRoomsRented: number;
  numOfRoomsPosted: number;
  isPosted: number;
  createdTime: string;
  owner: {
    id: number;
    email: string;
  };
  rooms: any[];
}

export function PropertyGrid() {
  const [properties, setProperties] = useState<House[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get<House[]>(
          "http://localhost:3000/house"
        );
        setProperties(response.data);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch properties. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);
  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-red-500">{error}</div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-6">Gợi ý cho bạn</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            imageUrl={'/images/img-login-page.jpg'}
            // /images/img-login-page.jpg
            price={`${property.price.toLocaleString("vi-VN")} VNĐ`}
            title={property.name}
            address={property.address}
            area={property.area}
            numOfRooms={property.numOfRooms}
          />
        ))}
      </div>
    </div>
  );
}
