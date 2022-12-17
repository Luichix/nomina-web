import React, { useRef, useEffect } from 'react'
import Typed from 'typed.js'

const Instruction = ({
  texts,
  typeSpeed = 250,
  backSpeed = 40,
  fadeOut = false,
  fadeOutDelay = 500,
}) => {
  const typeTarget = useRef(null)

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: texts,
      typeSpeed: typeSpeed,
      backSpeed: backSpeed,
      backDelay: 800,
      fadeOut: fadeOut,
      fadeOutDelay: fadeOutDelay,
      loop: true,
      loopCount: Infinity,
    })

    return () => {
      typed.destroy()
    }
  }, [texts])

  return <span ref={typeTarget} />
}
export default Instruction
