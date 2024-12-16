import gsap from 'gsap'
import { ReactLenis } from '@studio-freight/react-lenis'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function SmoothScrollWrapper({ children }) {

  return (
    <ReactLenis root options={{ autoRaf: true , lerp : 0.05}} >
      {children}
    </ReactLenis>
  )
}

export default SmoothScrollWrapper
