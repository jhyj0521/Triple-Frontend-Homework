import { useEffect, useRef, useState } from 'react'

import { easeInExpo } from '../utils/timing'

interface Props {
  start?: number
  end: number
  duration?: number
}

const useCountUp = ({ start = 0, end, duration = 2000 }: Props) => {
  const [count, setCount] = useState(start)
  const [time, setTime] = useState(0)

  const requestRef = useRef(0)

  const animate = () => {
    if (time <= duration) {
      setTime(() => time + 1000 / 80)
      setCount(Math.round(easeInExpo(time / 1000, start, end, duration / 1000)))
    }
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(requestRef.current)
  })

  return { count }
}

export default useCountUp
