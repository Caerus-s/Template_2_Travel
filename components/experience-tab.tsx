'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import DestinationCarousel from './destination-carousel'

const tabImages: Record<string, string> = {
  mountain: '/mountain.jpg',
  island: '/island.jpg',
  waterfall: '/waterfall.jpg',
}

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState('mountain')
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-10 bg-skyblue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left side */}
          <div className="relative">
            <div className="bg-skyblue-200 rounded-3xl overflow-hidden">
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
                <Image
                  src={tabImages[activeTab]}
                  alt="Scene"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Tabs */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="bg-white/80 backdrop-blur-md rounded-full px-2">
                  {['mountain', 'island', 'waterfall'].map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="text-xs sm:text-sm px-3 py-1.5 data-[state=active]:bg-skyblue-500 data-[state=active]:text-white rounded-full transition"
                    >
                      {tab.toUpperCase()}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Zoom Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsZoomed(true)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 rounded-full bg-white/80 hover:bg-white text-skyblue-600"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Badges */}
            {/* <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 flex-wrap justify-center">
              <Badge variant="outline" className="bg-skyblue-500 text-white border-0 text-xs">
                #PART1
              </Badge>
              <Badge variant="outline" className="bg-white/80 text-skyblue-800 border-0 text-xs">
                #PRESENT1
              </Badge>
              <Badge variant="outline" className="bg-white/50 text-skyblue-800 border-0 text-xs">
                01
              </Badge>
            </div> */}
          </div>

          {/* Right side */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-skyblue-900 leading-snug">
              Hassle-free
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              experience
            </h2>
            <p className="text-skyblue-700 mb-6 text-sm sm:text-base max-w-xl mx-auto md:mx-0">
              DISCOVER THE BEST PLACES TO VISIT AROUND THE WORLD
            </p>

            <DestinationCarousel />
          </div>
        </div>
      </div>
      {isZoomed && (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setIsZoomed(false)}
        >
            <div
            className="relative max-w-3xl w-full p-4"
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking the image
            >
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-xl overflow-hidden">
                <Image
                src={tabImages[activeTab]}
                alt="Zoomed Scene"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
                />
            </div>
            </div>
        </div>
        )}
    </section>
  )
}
