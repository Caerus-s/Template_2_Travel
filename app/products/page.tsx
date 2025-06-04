"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  MapPin,
  Calendar,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
  Menu,
  ShoppingBag,
  Bell,
  User,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import RealtimeTimestamp from "@/components/time"
import { set } from "date-fns"
import { useState } from "react"
import Footer from "@/components/footer"
import NavBar from "@/components/navbar"

// Generate 80 dummy travel products
const generateProducts = () => {
  const destinations = [
    "Bali, Indonesia",
    "Tokyo, Japan",
    "Paris, France",
    "Santorini, Greece",
    "Maldives",
    "Iceland",
    "Morocco",
    "Thailand",
    "Peru",
    "Norway",
    "New Zealand",
    "Costa Rica",
    "Egypt",
    "Turkey",
    "Vietnam",
    "Portugal",
    "Croatia",
    "Sri Lanka",
    "Nepal",
    "Jordan",
  ]

  const types = ["Adventure", "Relaxation", "Cultural", "Wildlife", "Luxury", "Budget", "Family", "Solo"]
  const durations = ["3 days", "5 days", "7 days", "10 days", "14 days"]

  return Array.from({ length: 80 }, (_, i) => ({
    id: i + 1,
    title: `${destinations[i % destinations.length]} ${types[i % types.length]} Experience`,
    destination: destinations[i % destinations.length],
    type: types[i % types.length],
    duration: durations[i % durations.length],
    price: Math.floor(Math.random() * 2000) + 500,
    originalPrice: Math.floor(Math.random() * 2000) + 1000,
    rating: (Math.random() * 2 + 3).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    // image: `/placeholder.svg?height=300&width=400&text=${encodeURIComponent(destinations[i % destinations.length])}`,
    image: 'bali.jpg',
    featured: i % 10 === 0,
    discount: i % 5 === 0 ? Math.floor(Math.random() * 30) + 10 : null,
    groupSize: `${Math.floor(Math.random() * 8) + 2}-${Math.floor(Math.random() * 12) + 10}`,
    includes: ["Accommodation", "Meals", "Transportation", "Guide"],
  }))
}

const products = generateProducts()

export default function ProductsPage() {
  // Pagination logic
  const [currentPage, setcurrentPage] = useState(1) // In a real app, this would come from URL params or state
  const itemsPerPage = 20
  const totalPages = Math.ceil(products.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <NavBar/>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-skyblue-600 to-skyblue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Amazing Travel Experiences</h1>
          <p className="text-xl mb-8 opacity-90">Curated adventures from around the world</p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-4 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Input placeholder="Where to?" className="pl-10 border-skyblue-200 focus:border-skyblue-500" />
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-skyblue-500" />
              </div>
              <div className="relative">
                <Input placeholder="When?" className="pl-10 border-skyblue-200 focus:border-skyblue-500" />
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-skyblue-500" />
              </div>
              <div className="relative">
                <Input placeholder="Travelers" className="pl-10 border-skyblue-200 focus:border-skyblue-500" />
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-skyblue-500" />
              </div>
              <Button className="bg-skyblue-600 hover:bg-skyblue-700 text-white">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-6 px-4 border-b border-skyblue-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" className="border-skyblue-300 text-skyblue-700">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <div className="text-sm text-gray-600">
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, products.length)} of {products.length}{" "}
                experiences
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Select defaultValue="popular">
                <SelectTrigger className="w-48 border-skyblue-200">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-shadow duration-300 border-skyblue-100"
              >
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {product.featured && (
                    <Badge className="absolute top-2 left-2 bg-yellow-500 text-yellow-900">Featured</Badge>
                  )}
                  {product.discount && (
                    <Badge className="absolute top-2 right-2 bg-red-500 text-white">-{product.discount}%</Badge>
                  )}
                  <div className="absolute bottom-2 right-2">
                    <Badge variant="outline" className="bg-white/90 text-skyblue-800 border-skyblue-200">
                      {product.duration}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>

                  <h3 className="font-semibold text-skyblue-900 mb-2 line-clamp-2 group-hover:text-skyblue-700">
                    {product.title}
                  </h3>

                  <div className="flex items-center gap-1 mb-2 text-sm text-gray-600">
                    <MapPin className="h-3 w-3" />
                    {product.destination}
                  </div>

                  <div className="flex items-center gap-1 mb-3 text-sm text-gray-600">
                    <Users className="h-3 w-3" />
                    {product.groupSize} people
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-skyblue-700">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <Badge variant="outline" className="text-xs bg-skyblue-50 text-skyblue-700 border-skyblue-200">
                      {product.type}
                    </Badge>
                  </div>

                  <Link href={`/products/${product.id}`}>
                    <Button className="w-full mt-4 bg-skyblue-600 hover:bg-skyblue-700 text-white">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="py-8 px-4 border-t border-skyblue-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === 1}
              className="border-skyblue-300 text-skyblue-700 disabled:opacity-50"
              onClick={() => setcurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? "default" : "outline"}
                size="icon"
                className={
                  page === currentPage
                    ? "bg-skyblue-600 text-white"
                    : "border-skyblue-300 text-skyblue-700 hover:bg-skyblue-50"
                }
                onClick={() => setcurrentPage(page)}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === totalPages}
              className="border-skyblue-300 text-skyblue-700 disabled:opacity-50"
              onClick={() => setcurrentPage((prev) => Math.min(prev + 1, totalPages))}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="text-center mt-4 text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
