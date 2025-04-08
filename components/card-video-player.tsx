"use client"
import React, { useRef, useState } from 'react'
import { Card } from './ui/card'
import { Button } from "@/components/ui/button"
import { Play, Pause } from 'lucide-react'

const CardVideoPlayer = ({ source, title, description }: { source: string, title?: string, description?: string }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (!videoRef.current) return

    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <Card className="overflow-hidden border-skyblue-200 relative">
      <div className="relative h-48 sm:h-64">
        <video
          ref={videoRef}
          src={source}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute bottom-4 left-4">
        <div className="text-white font-medium">{title}</div>
        <div className="text-white/80 text-sm">{description}</div>
      </div>

      <div className="absolute bottom-4 right-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-skyblue-500/50 border-0 text-white hover:bg-skyblue-600/70"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
      </div>
    </Card>
  )
}

export default CardVideoPlayer
