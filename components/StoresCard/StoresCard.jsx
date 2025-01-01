import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AiFillPhone, AiFillMail, AiFillStar } from 'react-icons/ai'
import { FiMapPin, FiMessageSquare, FiShoppingBag } from 'react-icons/fi'

export default function StoreCard({ store }) {
  return (
    <Card className="w-full max-w-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={store.coverImageUrl}
          alt={`${store.name} cover`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="relative w-20 h-20 mr-4">
            <Image
              src={store.profileImageUrl}
              alt={`${store.name} profile`}
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-white"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{store.name}</h2>
            <Badge variant="secondary" className="mt-1">
              {store.category}
            </Badge>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-6 line-clamp-2">{store.shortDescription}</p>
        <div className="grid grid-cols-3 gap-4 p-4 border rounded-lg mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <AiFillStar className="text-yellow-400 mr-1" />
              <span className="font-semibold">{store.rating}</span>
            </div>
            <p className="text-xs text-gray-500">Rating</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <FiMessageSquare className="text-blue-500 mr-1" />
              <span className="font-semibold">{store.reviews}</span>
            </div>
            <p className="text-xs text-gray-500">Reviews</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <FiShoppingBag className="text-green-500 mr-1" />
              <span className="font-semibold">{store.products}</span>
            </div>
            <p className="text-xs text-gray-500">Products</p>
          </div>
        </div>
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm">
            <FiMapPin className="mr-2 text-gray-400" />
            <span className="text-gray-700">{store.address}</span>
          </div>
          <div className="flex items-center text-sm">
            <AiFillPhone className="mr-2 text-gray-400" />
            <span className="text-gray-700">{store.phone}</span>
          </div>
          <div className="flex items-center text-sm">
            <AiFillMail className="mr-2 text-gray-400" />
            <span className="text-gray-700">{store.email}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-gray-700 hover:bg-gray-800 transition-colors duration-300">
          Visit Store
        </Button>
      </CardFooter>
    </Card>
  )
}

