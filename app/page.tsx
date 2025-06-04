import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Bell,
  ChevronLeft,
  ChevronRight,
  Globe,
  Heart,
  Menu,
  Play,
  Plus,
  Search,
  ShoppingBag,
  User,
  Video,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Import the carousel components
import HeroCarousel from "@/components/hero-carousel"
import DestinationCarousel from "@/components/destination-carousel"
import RealtimeTimestamp from "@/components/time"
import CardVideoPlayer from "@/components/card-video-player"
import ExperienceSection from "@/components/experience-tab"
import AnimatedDetailsSection from "@/components/animate-detail-section"
import NavBar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <NavBar/>

      {/* Hero Section */}
      <section>
        <HeroCarousel />
      </section>

      {/* Journey Section */}
      <section className="py-12 md:py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-skyblue-900">
              Every journey
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              is unique
            </h2>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-skyblue-300 text-skyblue-500 hover:bg-skyblue-50"
            >
              <Plus className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="relative">

              <CardVideoPlayer source="/marcolla.mp4" title="Guide/Feel" description="Mallorca, Spain"/>

              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 flex items-center gap-2">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src="/tourguide.jpg"
                    alt="User"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <div className="text-xs font-medium text-skyblue-800">Joseph Kalin</div>
                  <div className="text-xs text-muted-foreground">Guide</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center mt-8 md:mt-0">
              <div className="text-4xl md:text-5xl font-bold mb-2 md:mb-4 text-skyblue-500">81%</div>
              <div className="text-sm text-muted-foreground mb-4 md:mb-8">
                From Concept to
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Completion
              </div>

              <div className="flex gap-2 mb-4 md:mb-8">
                <Badge variant="outline" className="bg-skyblue-500 text-white border-0 text-xs">
                  #MALLORCA
                </Badge>
                <Badge variant="outline" className="bg-white text-skyblue-800 border border-skyblue-200 text-xs">
                  #SPAIN
                </Badge>
              </div>

              <div className="inline-block">
                <Badge className="bg-skyblue-100 text-skyblue-800 hover:bg-skyblue-200 rounded-full px-3 py-1 text-xs sm:px-4 sm:py-1 sm:text-sm">
                  EFFECTIVE FITNESS GUIDE
                </Badge>
              </div>

              <div className="mt-2 md:mt-4">
                <Badge className="bg-skyblue-100 text-skyblue-800 hover:bg-skyblue-200 rounded-full px-3 py-1 text-xs sm:px-4 sm:py-1 sm:text-sm">
                  ADVENTURE TRIP
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hassle-free Experience Section */}
      <ExperienceSection />

      {/* Client Testimonials */}
      <section className="py-12 md:py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-skyblue-900">
            Client about
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            our work
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Video and badge card */}
            <div className="relative">
              <Card className="overflow-hidden border-skyblue-200">
                {/* Responsive iframe wrapper */}
                <div className="aspect-[4/3] w-full">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/7An9YDUcPHo?si=u82OhwawSn1Mvbfv"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                  <div className="text-white font-medium text-sm sm:text-base">TIMMY</div>
                </div>
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <Badge variant="outline" className="bg-skyblue-500 text-white border-0 text-xs">
                    #KYOTO
                  </Badge>
                </div>
              </Card>

              {/* Floating small card */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-10 sm:-right-6">
                <Card className="p-3 sm:p-4 max-w-[140px] sm:max-w-xs border-skyblue-200">
                  <div className="font-medium text-xs sm:text-sm text-skyblue-800">EXPLORE KYOTO</div>
                </Card>
              </div>
            </div>

            {/* Testimonial and badges */}
            <div className="flex flex-col justify-center mt-8 md:mt-0">
              <div className="text-4xl md:text-6xl text-skyblue-200 mb-2 md:mb-4">"</div>
              <p className="text-base sm:text-lg md:text-xl mb-4 text-skyblue-900">
                "We explored the best of Tokyo, Kyoto, and Osaka, all without the usual travel stress.
                Truly a trip of a lifetime!"
              </p>
              <div className="text-4xl md:text-6xl text-skyblue-200 mb-2 md:mb-4">"</div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4 md:mt-8 gap-4 sm:gap-0">
                <div className="text-xs sm:text-sm text-skyblue-600">
                  From Concept to
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  Completion
                </div>

                <div className="flex gap-2">
                  <Badge variant="outline" className="bg-skyblue-500 text-white border-0 text-xs">
                    #TRAVEL
                  </Badge>
                  <Badge variant="outline" className="bg-white text-skyblue-800 border border-skyblue-200 text-xs">
                    #JAPAN
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-white/50 text-skyblue-800 border-0 text-xs hidden sm:inline-flex"
                  >
                    01
                  </Badge>
                </div>
              </div>

              <div className="mt-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-skyblue-300 text-skyblue-500 hover:bg-skyblue-50"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <AnimatedDetailsSection />

      {/* Destinations Grid */}
      <section className="py-12 md:py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            <div className="border border-skyblue-200 p-4 sm:p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-between items-center mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-skyblue-100 rounded-full flex items-center justify-center">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-skyblue-600" />
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-skyblue-300 text-skyblue-500 hover:bg-skyblue-50"
                >
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-base sm:text-lg font-medium mb-2 text-skyblue-800">
                Explore our curated list of must-visit destinations around the globe.
              </p>
              <div className="flex gap-2 mt-6 sm:mt-8">
                <Badge variant="outline" className="bg-skyblue-500 text-white border-0 text-xs">
                  #TRAVEL
                </Badge>
                <Badge variant="outline" className="bg-white text-skyblue-800 border border-skyblue-200 text-xs">
                  #WORLD
                </Badge>
              </div>
            </div>

            <div className="border border-skyblue-200 p-4 sm:p-6 rounded-lg hover:shadow-md transition-shadow duration-300 mt-6 md:mt-0">
              <div className="flex justify-between items-center mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-skyblue-100 rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-skyblue-600" />
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-skyblue-300 text-skyblue-500 hover:bg-skyblue-50"
                >
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-base sm:text-lg font-medium mb-2 text-skyblue-800">
                Whether it's the pristine beaches of Bali, the historic streets
              </p>
              <div className="flex gap-2 mt-6 sm:mt-8">
                <Badge variant="outline" className="bg-skyblue-500 text-white border-0 text-xs">
                  #LOVE
                </Badge>
                <Badge variant="outline" className="bg-white text-skyblue-800 border border-skyblue-200 text-xs">
                  #BEACH
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-skyblue-100 bg-skyblue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-skyblue-900 mb-4">caerus</h3>
              <p className="text-sm text-skyblue-600 mb-4">
                We offer travel itineraries that focus on rich experiences
              </p>
              <p className="text-sm mb-6 text-skyblue-800">ccaeruss@gmail.com</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium mb-2 text-skyblue-800">Company</div>
                <div className="text-sm font-medium mb-2 text-skyblue-800">About</div>
                <div className="text-sm font-medium mb-2 text-skyblue-800">Contact</div>
                <div className="text-sm font-medium mb-2 text-skyblue-800">Careers</div>
              </div>
              <div>
                <div className="text-sm font-medium mb-2 text-skyblue-800">Support</div>
                <div className="text-sm font-medium mb-2 text-skyblue-800">Help Center</div>
                <div className="text-sm font-medium mb-2 text-skyblue-800">Terms</div>
                <div className="text-sm font-medium mb-2 text-skyblue-800">Privacy</div>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-skyblue-600">© 2024 Caerus. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

