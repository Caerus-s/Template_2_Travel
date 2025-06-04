import React from "react";
import Link from "next/link";
import RealtimeTimestamp from "./time";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag, Bell, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NavBar = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-skyblue-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-xl font-bold text-skyblue-700">
          caerus
        </Link>
        <RealtimeTimestamp />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4">
        <Link href="/" className="text-xl font-bold text-skyblue-700">
          <Button
            variant="ghost"
            size="icon"
            className="relative text-skyblue-600 hover:text-skyblue-800 hover:bg-skyblue-50"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-yellow-400 rounded-full"></span>
          </Button>
        </Link>
        <Link href="/products" className="text-xl font-bold text-skyblue-700">
          <Button
            variant="ghost"
            size="icon"
            className="relative text-skyblue-600 hover:text-skyblue-800 hover:bg-skyblue-50"
          >
            <ShoppingBag className="h-5 w-5" />
            {/* <span className="absolute top-1 right-1 h-2 w-2 bg-yellow-400 rounded-full"></span> */}
          </Button>
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="text-skyblue-600 hover:text-skyblue-800 hover:bg-skyblue-50"
        >
          <User className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="relative text-skyblue-600 hover:text-skyblue-800 hover:bg-skyblue-50"
        >
          <ShoppingBag className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-yellow-400 rounded-full"></span>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-skyblue-600 hover:text-skyblue-800 hover:bg-skyblue-50"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-skyblue-700">caerus</h2>
              </div>
              <nav className="flex flex-col gap-4">
                <Link href="/">
                  <Button
                    variant="ghost"
                    className="justify-start text-skyblue-800 w-full"
                  >
                    Home
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    variant="ghost"
                    className="justify-start text-skyblue-800 w-full"
                  >
                    Products
                  </Button>
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default NavBar;
