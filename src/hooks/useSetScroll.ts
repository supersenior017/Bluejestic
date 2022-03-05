import { useState, useEffect } from 'react'

export default () => {
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50)
    })
  }, [])
  return scroll
}
