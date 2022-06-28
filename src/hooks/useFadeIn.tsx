import { useEffect, useState } from 'react'

const useFadeIn = () => {
  const [showComponent, setShowComponent] = useState(false)

  useEffect(() => {
    setShowComponent(true)
  }, [])

  return [showComponent]
}

export default useFadeIn
