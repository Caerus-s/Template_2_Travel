'use client'
import React, { useEffect, useState } from 'react'

const RealtimeTimestamp = () => {
  const [time, setTime] = useState('')
  const [location, setLocation] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formatted = new Intl.DateTimeFormat(undefined, {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(now)
      setTime(formatted)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000) // Update every second

    // Get location via IP
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        setLocation(data.city || data.country_name || 'Unknown')
      })
      .catch(() => {
        setLocation('Unknown')
      })

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-sm text-muted-foreground hidden sm:block">
      {time} · {location}
    </div>
  )
}

export default RealtimeTimestamp
