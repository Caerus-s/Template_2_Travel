"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Plus, MapPin, Clock, Shield, CheckCircle2, ArrowRight } from "lucide-react"

const features = [
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Expert Local Guides",
    description: "Our guides know the hidden gems in every destination",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "24/7 Support",
    description: "Travel with confidence knowing we're always available",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Secure Booking",
    description: "Your payments and personal data are always protected",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "Verified Experiences",
    description: "Every experience is personally vetted by our team",
  },
]

const stats = [
  { value: 120, label: "Destinations" },
  { value: 15000, label: "Happy Travelers" },
  { value: 4.9, label: "Average Rating", suffix: "/5" },
  { value: 98, label: "Satisfaction Rate", suffix: "%" },
]

export default function AnimatedDetailsSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Auto-rotate tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % features.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-12 md:py-20 px-4 sm:px-8 bg-skyblue-50 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial="hidden" animate={controls} variants={container} className="mb-16">
          <motion.div variants={item} className="flex justify-between items-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-skyblue-900">
              We take care of
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              all the details
            </h2>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-skyblue-600 hover:text-skyblue-800 hover:bg-skyblue-100"
                onClick={() => setActiveTab((prev) => (prev - 1 + features.length) % features.length)}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-skyblue-600 hover:text-skyblue-800 hover:bg-skyblue-100"
                onClick={() => setActiveTab((prev) => (prev + 1) % features.length)}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left side - Feature tabs */}
            <motion.div variants={item} className="bg-white p-6 sm:p-8 rounded-lg border border-skyblue-100 shadow-sm">
              <div className="flex justify-between items-center mb-6 sm:mb-8">
                <div className="flex space-x-2">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                        index === activeTab ? "bg-skyblue-500" : "bg-skyblue-200 hover:bg-skyblue-300"
                      }`}
                      onClick={() => setActiveTab(index)}
                      aria-label={`View feature ${index + 1}`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-skyblue-300 text-skyblue-500 hover:bg-skyblue-50"
                >
                  <Plus className="h-5 w-5" />
                </Button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[180px]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-skyblue-100 flex items-center justify-center text-skyblue-600">
                      {features[activeTab].icon}
                    </div>
                    <h3 className="text-lg font-semibold text-skyblue-800">{features[activeTab].title}</h3>
                  </div>
                  <p className="text-base mb-6 text-skyblue-700">{features[activeTab].description}</p>

                  <motion.div
                    className="mt-auto"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button
                      variant="link"
                      className="p-0 text-skyblue-500 hover:text-skyblue-700 flex items-center gap-2"
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* <div className="flex gap-2 mt-6">
                <Badge variant="outline" className="bg-skyblue-500 text-white border-0 text-xs">
                  #PART1
                </Badge>
                <Badge variant="outline" className="bg-white text-skyblue-800 border border-skyblue-200 text-xs">
                  #PRESENT1
                </Badge>
              </div> */}
            </motion.div>

            {/* Right side - Image and stats */}
            <motion.div variants={item} className="flex flex-col">
              <div className="relative mb-6">
                <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Image
                    src="/bali.jpg"
                    alt="Travel details"
                    width={600}
                    height={400}
                    className="object-cover rounded-lg border border-skyblue-200 w-full h-auto shadow-md"
                  />
                </motion.div>
                {/* <div className="absolute bottom-4 right-4">
                  <Badge variant="outline" className="bg-skyblue-500 text-white border-0 text-xs">
                    #PART1
                  </Badge>
                  <Badge variant="outline" className="bg-white/80 text-skyblue-800 border-0 text-xs">
                    #PRESENT1
                  </Badge>
                </div> */}

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-md border border-skyblue-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <div className="text-xs font-medium text-skyblue-800">Next trip: Bali</div>
                  <div className="text-xs text-skyblue-600">Starting from $899</div>
                </motion.div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-4 rounded-lg border border-skyblue-100 shadow-sm"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    onHoverStart={() => setHoveredStat(index)}
                    onHoverEnd={() => setHoveredStat(null)}
                  >
                    <motion.div
                      className="text-xl font-bold text-skyblue-700"
                      animate={hoveredStat === index ? { scale: 1.1 } : { scale: 1 }}
                    >
                      {stat.value}
                      {stat.suffix || ""}
                    </motion.div>
                    <div className="text-xs text-skyblue-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated background element */}
        <motion.div
          className="absolute -z-10 w-64 h-64 rounded-full bg-skyblue-200/30 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "easeInOut",
          }}
          style={{ left: "10%", top: "20%" }}
        />

        <motion.div
          className="absolute -z-10 w-96 h-96 rounded-full bg-skyblue-300/20 blur-3xl"
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 25,
            ease: "easeInOut",
          }}
          style={{ right: "5%", bottom: "10%" }}
        />
      </div>
    </section>
  )
}
