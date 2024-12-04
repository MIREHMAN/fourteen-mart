import  HotSalesCarousel  from '@/app/components/HotProductsCard/HotSalesCarousel'

const hotProducts = [
  {
    id: 1,
    rating: 4.5,
    image: "/headphone.png",
    title: "Wireless Noise-Cancelling Headphones",
    price: 12999
  },
  {
    id: 2,
    rating: 4.2,
    image: "/watch1.jpg",
    title: "Smart Fitness Tracker Watch",
    price: 8999
  },
  {
    id: 3,
    rating: 4.8,
    image: "/LED.png",
    title: "4K Ultra HD Smart TV - 55 inch",
    price: 54999
  },
  {
    id: 4,
    rating: 4.3,
    image: "/headphone.png",
    title: "Portable Bluetooth Speaker",
    price: 3999
  },
  {
    id: 5,
    rating: 4.6,
    image: "/LED.png",
    title: "High-Performance Gaming Laptop",
    price: 89999
  }
]

export default function Home() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Hot Sales</h1>
      <HotSalesCarousel products={hotProducts} />
    </main>
  )
}

