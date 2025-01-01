"use client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Search, ShoppingCart, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const pages = ["Home", "Products", "Stores", "About", "Login"];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [cartItems, setCartItems] = useState(2); // Example cart items count

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              FourteenMart
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {pages.map((page) => (
                <Link
                  key={page}
                  href={
                    page.toLowerCase() === "home"
                      ? "/"
                      : `/${page.toLowerCase()}`
                  }
                  className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium"
                >
                  {page}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full bg-background text-foreground placeholder-muted-foreground rounded-md pl-10"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-3 relative">
                    <ShoppingCart className="h-6 w-6" />
                    {cartItems > 0 && (
                      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                        {cartItems}
                      </span>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <Link href="/cart" className="flex w-full">
                      View Cart
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/checkout" className="flex w-full">
                      Checkout
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-3"
              >
                {theme === "dark" ? (
                  <Sun className="h-6 w-6" />
                ) : (
                  <Moon className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                  {pages.map((page) => (
                    <Link
                      key={page}
                      href={
                        page.toLowerCase() === "home"
                          ? "/"
                          : `/${page.toLowerCase()}`
                      }
                      className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {page}
                    </Link>
                  ))}
                  <div className="relative mt-4">
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="w-full bg-background text-foreground placeholder-muted-foreground rounded-md pl-10"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <Button variant="ghost" size="icon">
                      <ShoppingCart className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                    >
                      {theme === "dark" ? (
                        <Sun className="h-6 w-6" />
                      ) : (
                        <Moon className="h-6 w-6" />
                      )}
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
