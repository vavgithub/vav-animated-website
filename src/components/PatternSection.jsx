import React, { useLayoutEffect, useRef } from 'react'
import pixelPattern from '../assets/Pixelpattern.svg';
import gsap from 'gsap';

function PatternSection() {
  const containerRef = useRef();
  const dotRef = useRef();
  const bgImgRef = useRef();

  useLayoutEffect(()=>{
    const ctx = gsap.context(()=>{
      let patterTimeline = gsap.timeline({
        scrollTrigger : {
          trigger : containerRef.current,
          start: "top bottom",
          end: "top top",
          scrub:true,
          markers: true
        }
      });


      patterTimeline
      .fromTo(dotRef.current,{zIndex:0},{zIndex : 50})
      .fromTo(dotRef.current,{
        y : '-75vh',
        skewX : 0
      },{
        y : 0,
        skewX : '-20deg',
        scale: 2,
        duration : 2
      },"+=0")
      .fromTo(bgImgRef.current,{
        skewX : 0
      },{
        skewX : '-20deg',
        duration : 2
      },"-=2")
    },containerRef.current)

    return ()=> ctx.revert()
  })

  return (
      <div ref={containerRef} className="min-h-screen relative flex flex-col items-center justify-center max-w-screen" style={{overflowX:"clip"}}>
        {/* Background Container */}
        <div className="background-container overflow-hidden w-full h-full" >
          {/* SVG */}
          <img ref={bgImgRef} src={pixelPattern} alt="" className='object-cover  scale-[1.5] background-svg' />
        </div>
        <div ref={dotRef} className='absolute bg-black w-[72px] h-[72px] '> 
        </div>
    </div>
  )
}

export default PatternSection
