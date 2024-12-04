import  StoreCard  from '../components/StoresCard/StoresCard'

export default function Home() {
  const stores = [
    {
      name: "Fourteen Mart",
      category: "General Store",
      shortDescription: "Your one-stop shop for all your needs. We offer a wide range of products from groceries to electronics.",
      address: "123 Main St, City, State 12345",
      phone: "+1 (555) 123-4567",
      email: "info@fourteenmart.com",
      rating: 4.5,
      reviews: 120,
      products: 1000,
      profileImageUrl: "/placeholder.svg?height=80&width=80",
      coverImageUrl: "/placeholder.svg?height=192&width=384"
    },
    {
      name: "City Grocers",
      category: "Grocery",
      shortDescription: "Fresh produce and local goods. Supporting local farmers and bringing quality to your table.",
      address: "456 Elm St, Town, State 67890",
      phone: "+1 (555) 987-6543",
      email: "hello@citygrocers.com",
      rating: 4.2,
      reviews: 85,
      products: 750,
      profileImageUrl: "/placeholder.svg?height=80&width=80",
      coverImageUrl: "/placeholder.svg?height=192&width=384"
    },
    {
      name: "Tech Haven",
      category: "Electronics",
      shortDescription: "Cutting-edge electronics and gadgets. Stay ahead with the latest technology and expert advice.",
      address: "789 Oak Rd, Metropolis, State 54321",
      phone: "+1 (555) 246-8135",
      email: "support@techhaven.com",
      rating: 4.7,
      reviews: 200,
      products: 1500,
      profileImageUrl: "/placeholder.svg?height=80&width=80",
      coverImageUrl: "/placeholder.svg?height=192&width=384"
    }
  ]

  return (
    <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Registered Stores</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stores.map((store, index) => (
          <StoreCard key={index} store={store} />
        ))}
      </div>
    </main>
  )
}

