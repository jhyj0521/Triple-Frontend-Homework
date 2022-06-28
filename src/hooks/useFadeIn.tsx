import { useEffect, useState } from 'react'

const useFadeIn = (delay: number) => {
  const [showComponent, setShowComponent] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true)
    }, delay)
  }, [])

  return [showComponent]
}

export default useFadeIn
