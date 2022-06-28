import { useEffect, useState, useRef } from 'react'

import { easeInExpo } from '../utils/timing'

interface Count {
  start?: number
  end: number
  duration?: number
}

const useCountUp = ({ start = 0, end, duration = 2000 }: Count) => {
  const [count, setCount] = useState(start)
  const [progressTime, setProgressTime] = useState(0)

  const requestRef = useRef(0)

  const animate = () => {
    if (progressTime <= duration) {
      setProgressTime(Math.min(duration, progressTime + 1000 / 60))
      setCount(
        Math.floor(
          easeInExpo(progressTime / 1000, start, end, duration / 1000),
        ),
      )
    }
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(requestRef.current)
  })

  return [count]
}

export default useCountUp
