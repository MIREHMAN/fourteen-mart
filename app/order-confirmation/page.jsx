import Image from 'next/image'
import Link from 'next/link'

export default function OrderConfirmation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-xl w-full mx-auto flex flex-col items-center justify-center text-center">
        <div className="space-y-8 w-full flex flex-col items-center">
          <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Thank You for Your Order!
          </h1>
          
          <p className="text-gray-600 text-lg">
            Your order has been received and is being processed.
          </p>

          <div className="relative flex justify-center">
            <Image 
              src="/thankyou.gif"
              width={400} 
              height={400}
              alt="thank-you-for-order"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          <Link 
            href="/" 
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-full font-bold text-lg shadow-lg hover:scale-105 hover:shadow-xl transform transition-all duration-300 ease-in-out"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}