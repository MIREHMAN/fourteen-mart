"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCart } from "@/contexts/CartContext";
import Link from "next/link";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const { cart } = useCart();
  const [isSingleProduct, setIsSingleProduct] = useState(false);

  useEffect(() => {
    setIsSingleProduct(cart.length === 1);
  }, [cart]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Order placed");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-2"
            >
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>RS. {(item.price * item.quantity).toLocaleString()}</span>
            </div>
          ))}
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>
                RS.{" "}
                {cart
                  .reduce((sum, item) => sum + item.price * item.quantity, 0)
                  .toLocaleString()}
              </span>
            </div>
          </div>
        </div>
        {isSingleProduct && (
          <p className="mb-4 text-sm text-muted-foreground">
            You&apos;re checking out with a single product. Complete your
            purchase below.
          </p>
        )}
        <div>
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" required />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" required />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" required />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" required />
            </div>
            <div>
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input id="postalCode" required />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="country">Country</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="credit_card" id="credit_card" />
              <Label htmlFor="credit_card">Credit Card</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paypal" id="paypal" />
              <Label htmlFor="paypal">PayPal</Label>
            </div>
          </RadioGroup>
          {paymentMethod === "credit_card" && (
            <div className="mt-4 space-y-4">
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expirationDate">Expiration Date</Label>
                  <Input id="expirationDate" placeholder="MM/YY" required />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" required />
                </div>
              </div>
            </div>
          )}
        </div>

        <Button type="submit" className="w-full">
          <Link href={"/order-confirmation"}>Place Order</Link>
        </Button>
      </form>
    </div>
  );
}
