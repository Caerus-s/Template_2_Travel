"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const destinations = [
  {
    id: 1,
    image: "/chiang_mai_thailand.jpg",
    name: "Chiang Mai, Thailand",
  },
  {
    id: 2,
    image: "/dolomites_italy.jpg",
    name: "Dolomites, Italy",
  },
  {
    id: 3,
    image: "/faroe_island.jpg",
    name: "Faroe Islands",
  },
  {
    id: 4,
    image: "/hike_sete_cidades.jpg",
    name: "Sete Cidades, Azores",
  },
  {
    id: 5,
    image: "/ischia_island.jpg",
    name: "Ischia Island, Italy",
  },
  {
    id: 6,
    image: "/pin_su_road.jpg",
    name: "Pin Su Road, Thailand",
  },
  {
    id: 7,
    image: "/tbilisi_georgia.jpg",
    name: "Tbilisi, Georgia",
  },
  {
    id: 8,
    image: "/torres_del_paine.jpg",
    name: "Torres del Paine, Chile",
  },
  {
    id: 9,
    image: "/wadi_rum_jordan.jpg",
    name: "Wadi Rum, Jordan",
  },
  {
    id: 10,
    image: "/nusa_lembongan.jpg",
    name: "Nusa Lembongan, Indonesia",
  }
]

export default function DestinationCarousel() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-medium">Popular Destinations</h3>
        {/* <Button
          variant="outline"
          size="icon"
          className="rounded-full border-skyblue-300 text-skyblue-500 hover:bg-skyblue-50 h-8 w-8 sm:h-9 sm:w-9"
        >
          <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button> */}
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {destinations.map((destination) => (
            <CarouselItem key={destination.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="rounded-lg overflow-hidden border border-skyblue-100 hover:shadow-md transition-shadow duration-300">
                <div className="relative aspect-square">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-2 bg-gradient-to-r from-skyblue-50 to-white">
                  <div className="text-xs sm:text-sm font-medium text-skyblue-800">{destination.name}</div>
                  {/* <div className="flex gap-2 mt-1 sm:mt-2">
                    <Badge variant="outline" className="bg-skyblue-500 text-white border-0 text-xs">
                      #PART1
                    </Badge>
                  </div> */}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-2 sm:mt-4">
          <CarouselPrevious className="static transform-none rounded-full bg-skyblue-100 text-skyblue-700 hover:bg-skyblue-200 hover:text-skyblue-800 h-8 w-8 sm:h-9 sm:w-9" />
          <CarouselNext className="static transform-none rounded-full bg-skyblue-100 text-skyblue-700 hover:bg-skyblue-200 hover:text-skyblue-800 h-8 w-8 sm:h-9 sm:w-9" />
        </div>
      </Carousel>
    </div>
  )
}

