import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Star,
  MapPin,
  Users,
  Clock,
  Wifi,
  Car,
  Utensils,
  Camera,
  Shield,
  Heart,
  Share2,
  CheckCircle,
  X,
} from "lucide-react";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

const getProduct = (id: string) => {
  return {
    id: Number.parseInt(id),
    title: "Bali Adventure Experience - Cultural Immersion & Nature",
    destination: "Bali, Indonesia",
    type: "Adventure",
    duration: "7 days",
    price: 1299,
    originalPrice: 1599,
    rating: 4.8,
    reviewCount: 234,
    groupSize: "4-12",
    difficulty: "Moderate",
    images: [
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbali&psig=AOvVaw12HS1XDw66S76KTYfg3zJ9&ust=1749117740218000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDby7_B140DFQAAAAAdAAAAABAE",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbali&psig=AOvVaw12HS1XDw66S76KTYfg3zJ9&ust=1749117740218000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDby7_B140DFQAAAAAdAAAAABAE",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbali&psig=AOvVaw12HS1XDw66S76KTYfg3zJ9&ust=1749117740218000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDby7_B140DFQAAAAAdAAAAABAE",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbali&psig=AOvVaw12HS1XDw66S76KTYfg3zJ9&ust=1749117740218000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDby7_B140DFQAAAAAdAAAAABAE",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbali&psig=AOvVaw12HS1XDw66S76KTYfg3zJ9&ust=1749117740218000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDby7_B140DFQAAAAAdAAAAABAE",
    ],
    description:
      "Immerse yourself in the rich culture and stunning landscapes of Bali. This 7-day adventure combines cultural experiences with outdoor activities, taking you through ancient temples, lush rice terraces, pristine beaches, and volcanic landscapes.",
    highlights: [
      "Visit ancient temples including Tanah Lot and Uluwatu",
      "Explore the famous Jatiluwih rice terraces",
      "Sunrise hike to Mount Batur volcano",
      "Traditional cooking class with local family",
      "Snorkeling in crystal clear waters",
      "Traditional Balinese massage and spa treatment",
      "Visit local art villages and markets",
      "Sunset dinner on the beach",
    ],
    included: [
      "6 nights accommodation in boutique hotels",
      "All meals as specified in itinerary",
      "Private transportation with English-speaking driver",
      "Professional local guide",
      "All entrance fees and activities",
      "Airport transfers",
      "Travel insurance",
      "24/7 support",
    ],
    notIncluded: [
      "International flights",
      "Visa fees",
      "Personal expenses",
      "Tips and gratuities",
      "Alcoholic beverages",
      "Optional activities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Denpasar",
        description:
          "Airport pickup and transfer to hotel in Ubud. Welcome dinner with traditional Balinese cuisine.",
        activities: [
          "Airport transfer",
          "Hotel check-in",
          "Welcome dinner",
          "Briefing session",
        ],
      },
      {
        day: 2,
        title: "Ubud Cultural Tour",
        description:
          "Explore the cultural heart of Bali with visits to temples, art villages, and rice terraces.",
        activities: [
          "Tegallalang Rice Terraces",
          "Tirta Empul Temple",
          "Traditional art villages",
          "Ubud Monkey Forest",
        ],
      },
      {
        day: 3,
        title: "Mount Batur Sunrise Hike",
        description:
          "Early morning hike to catch the sunrise from Mount Batur volcano, followed by hot springs relaxation.",
        activities: [
          "Pre-dawn departure",
          "Mount Batur hike",
          "Sunrise viewing",
          "Hot springs",
          "Coffee plantation visit",
        ],
      },
      {
        day: 4,
        title: "Cooking Class & Beach Transfer",
        description:
          "Learn to cook traditional Balinese dishes, then transfer to beach area for relaxation.",
        activities: [
          "Traditional cooking class",
          "Local market visit",
          "Transfer to beach area",
          "Beach relaxation",
        ],
      },
      {
        day: 5,
        title: "Water Activities & Temples",
        description:
          "Snorkeling adventure and visit to iconic seaside temples.",
        activities: [
          "Snorkeling trip",
          "Tanah Lot Temple",
          "Uluwatu Temple",
          "Kecak fire dance",
        ],
      },
      {
        day: 6,
        title: "Spa & Local Markets",
        description:
          "Relaxing spa treatment and exploration of local markets for souvenirs.",
        activities: [
          "Traditional Balinese massage",
          "Local market shopping",
          "Art gallery visits",
          "Farewell dinner",
        ],
      },
      {
        day: 7,
        title: "Departure",
        description: "Final breakfast and airport transfer for departure.",
        activities: [
          "Hotel check-out",
          "Last-minute shopping",
          "Airport transfer",
          "Departure",
        ],
      },
    ],
    amenities: [
      { icon: Wifi, name: "Free WiFi" },
      { icon: Car, name: "Transportation" },
      { icon: Utensils, name: "Meals Included" },
      { icon: Camera, name: "Photo Opportunities" },
      { icon: Shield, name: "Travel Insurance" },
      { icon: Users, name: "Small Groups" },
    ],
    reviews: [
      {
        id: 1,
        name: "Sarah Johnson",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "Absolutely incredible experience! The guide was knowledgeable and the activities were perfectly balanced between adventure and culture.",
          avatar: "tourguide.jpg"
      },
      {
        id: 2,
        name: "Mike Chen",
        rating: 5,
        date: "1 month ago",
        comment:
          "Best trip I've ever taken. The sunrise hike was breathtaking and the cooking class was so much fun. Highly recommend!",
        avatar: "tourguide.jpg"
      },
      {
        id: 3,
        name: "Emma Wilson",
        rating: 4,
        date: "2 months ago",
        comment:
          "Great organization and beautiful locations. The only minor issue was the weather on day 3, but that's beyond anyone's control.",
          // avatar: "/placeholder.svg?height=40&width=40&text=EW",
          avatar: "tourguide.jpg"
      },
    ],
  };
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <NavBar />

      {/* Breadcrumb */}
      <div className="px-4 py-4 border-b border-skyblue-100">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/products"
            className="inline-flex items-center text-skyblue-600 hover:text-skyblue-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Images */}
      <section className="px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="relative">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.title}
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="bg-white/90 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="bg-white/90 hover:bg-white"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.slice(1).map((image, index) => (
                  <Image
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${product.title} ${index + 2}`}
                    width={200}
                    height={150}
                    className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80"
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="outline"
                    className="bg-skyblue-50 text-skyblue-700 border-skyblue-200"
                  >
                    {product.type}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 border-green-200"
                  >
                    {product.difficulty}
                  </Badge>
                </div>
                <h1 className="text-3xl font-bold text-skyblue-900 mb-4">
                  {product.title}
                </h1>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-gray-500">
                      ({product.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    {product.destination}
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{product.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-skyblue-600" />
                    <span className="text-sm">{product.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-skyblue-600" />
                    <span className="text-sm">{product.groupSize} people</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-skyblue-700">
                      ${product.price}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <Badge className="bg-red-500 text-white">
                    Save ${product.originalPrice - product.price}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-skyblue-600 hover:bg-skyblue-700 text-white text-lg py-6">
                    Book Now - ${product.price}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-skyblue-300 text-skyblue-700 hover:bg-skyblue-50"
                  >
                    Add to Wishlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="px-4 py-6 bg-skyblue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-skyblue-900 mb-6">
            What's Included
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {product.amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 bg-white rounded-lg"
              >
                <amenity.icon className="h-8 w-8 text-skyblue-600 mb-2" />
                <span className="text-sm font-medium text-skyblue-900">
                  {amenity.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="highlights" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="highlights">Highlights</TabsTrigger>
              <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
              <TabsTrigger value="included">What's Included</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="highlights" className="space-y-4">
              <h3 className="text-xl font-bold text-skyblue-900 mb-4">
                Trip Highlights
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {product.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="itinerary" className="space-y-6">
              <h3 className="text-xl font-bold text-skyblue-900 mb-4">
                Daily Itinerary
              </h3>
              {product.itinerary.map((day) => (
                <Card key={day.day} className="border-skyblue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-skyblue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {day.day}
                      </div>
                      {day.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{day.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {day.activities.map((activity, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="bg-skyblue-50 text-skyblue-700 border-skyblue-200"
                        >
                          {activity}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="included" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-green-700 mb-4">
                    ✓ Included
                  </h3>
                  <div className="space-y-3">
                    {product.included.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-red-700 mb-4">
                    ✗ Not Included
                  </h3>
                  <div className="space-y-3">
                    {product.notIncluded.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-skyblue-900">
                  Customer Reviews
                </h3>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{product.rating}</span>
                  <span className="text-gray-500">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                {product.reviews.map((review) => (
                  <Card key={review.id} className="border-skyblue-200">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Image
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-skyblue-900">
                              {review.name}
                            </h4>
                            <span className="text-sm text-gray-500">
                              {review.date}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 mb-3">
                            {Array.from({ length: 5 }, (_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
