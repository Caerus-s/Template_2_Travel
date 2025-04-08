"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const heroSlides = [
  {
    id: 1,
    image: '/bow_lake_park.jpg',
    title: 'Bow Lake, Canada',
    description: 'Discover breathtaking destinations and unforgettable experiences',
  },
  {
    id: 2,
    image: '/lake_louise_alberta.jpg',
    title: 'Lake Louise Alberta, Canada',
    description: 'Personalized itineraries tailored to your preferences',
  },
  {
    id: 3,
    image: '/pin_su_road.jpg',
    title: 'Pin Su Road, Thailand',
    description: "Off-the-beaten-path destinations you won't find elsewhere",
  },
]

export default function HeroCarousel() {
  const [api, setApi] = useState<any>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!api) return
    setSelectedIndex(api.selectedScrollSnap())
  }, [api])

  useEffect(() => {
    if (!api) return

    // Set up the onSelect event handler
    api.on("select", onSelect)

    // Set up the auto-scroll interval
    const interval = setInterval(() => {
      api.scrollNext()
    }, 3000) // Auto-scroll every 3 seconds

    // Clean up
    return () => {
      clearInterval(interval)
      api.off("select", onSelect)
    }
  }, [api, onSelect])

  return (
    <div className="relative">
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[350px] sm:h-[400px] md:h-[500px] w-full">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* <div className="absolute inset-0 bg-gradient-to-r from-skyblue-900/70 to-skyblue-700/30"></div> */}
                <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-8 md:p-24">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-md leading-tight mb-4 sm:mb-6 md:mb-8">
                    {slide.title}
                  </h2>
                  <div className="flex items-center gap-2">
                    <Button className="rounded-full bg-skyblue-500 hover:bg-skyblue-600 text-white text-xs sm:text-sm px-3 sm:px-4">
                      Learn more
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-white/20 border-0 text-white hover:bg-white/30 h-8 w-8 sm:h-9 sm:w-9"
                    >
                      <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 right-4 sm:right-8 md:right-12 bg-white p-3 sm:p-4 rounded-lg shadow-lg max-w-[180px] sm:max-w-xs">
                <h3 className="font-medium text-xs sm:text-sm mb-1">Explore our curated list of</h3>
                <p className="font-medium text-xs sm:text-sm mb-0 sm:mb-2">must-visit destinations around the globe.</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10 rounded-full bg-white/80 hover:bg-white h-8 w-8 sm:h-10 sm:w-10" />
        <CarouselNext className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10 rounded-full bg-white/80 hover:bg-white h-8 w-8 sm:h-10 sm:w-10" />
      </Carousel>

      {/* Dot Pagination */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-colors duration-300 ${
              index === selectedIndex ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        <Badge variant="outline" className="bg-skyblue-500 text-white border-0 text-xs">
          #PART1
        </Badge>
        <Badge variant="outline" className="bg-white/80 text-skyblue-800 border-0 text-xs">
          #PRESENT1
        </Badge>
        <Badge variant="outline" className="bg-white/50 text-skyblue-800 border-0 text-xs hidden sm:inline-flex">
          01
        </Badge>
      </div> */}
    </div>
  )
}
