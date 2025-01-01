import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function OrderConfirmationPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="text-xl mb-8">Your order has been successfully placed.</p>
      <div className="bg-card text-card-foreground p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Order Details</h2>
        <p className="mb-2">Order Number: #12345</p>
        <p className="mb-2">Total Amount: RS. 2,498</p>
        <p>Estimated Delivery: 3-5 business days</p>
      </div>
      <Button asChild>
        <Link href="/">Continue Shopping</Link>
      </Button>
    </div>
  );
}
