import Image from 'next/image'
import Link from 'next/link'

export default function OrderConfirmation() {
  return (
    <div className="container mx-auto py-12 px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="mb-8">Your order has been received and is being processed.</p>
      <Image src={'/thankyou.gif'} width={400} height={400} alt='thank-you-for-order' className='mx-auto mb-4'/>
      <Link href="/" className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mt-2">
        Continue Shopping
      </Link>
    </div>
  )
}

