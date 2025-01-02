import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import firstCuboid from '../assets/cuboids/1.png'
import secondCuboid from '../assets/cuboids/2.png'
import thirdCuboid from '../assets/cuboids/3.png'
import fourthCuboid from '../assets/cuboids/4.png'
import fifthCuboid from '../assets/cuboids/5.png'
import sixthCuboid from '../assets/cuboids/6.png'
import seventhCuboid from '../assets/cuboids/7.png'
import eighthCuboid from '../assets/cuboids/8.png'
import ninethCuboid from '../assets/cuboids/9.png'
import tenthCuboid from '../assets/cuboids/10.png'
import eleventhCuboid from '../assets/cuboids/11.png'


function ChangingCuboids({currentContainer, nextContainer}) {
  const containerRef = useRef();
  const firstCuboidRef = useRef();
  const secondCuboidRef = useRef();
  const thirdCuboidRef = useRef();
  const fourthCuboidRef = useRef();
  const fifthCuboidRef = useRef();
  const sixthCuboidRef = useRef();
  const seventhCuboidRef = useRef();
  const eighthCuboidRef = useRef();
  const ninethCuboidRef = useRef();
  const tenthCuboidRef = useRef();
  const eleventhCuboidRef = useRef();



    useEffect(()=>{
     const ctx = gsap.context(()=>{
        let ccTimeline = gsap.timeline({
            scrollTrigger : {
              trigger : containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub:1,
              // markers: true,
            }
          });

          ccTimeline
          .to(firstCuboidRef.current,{
            opacity : 1,
            // duration : 0.1
          })
          .to(secondCuboidRef.current,{
            opacity : 1,
            // duration : 0.1
          })
          .to(thirdCuboidRef.current,{
            opacity : 1,
            // duration : 0.1
          })
          .to(fourthCuboidRef.current,{
            opacity : 1,
            // duration : 0.1
          })
          .to(fifthCuboidRef.current,{
            opacity : 1,
            // duration : 0.1
          })
          .to(sixthCuboidRef.current,{
            opacity : 1,
            // duration : 0.1
          })
          .to(seventhCuboidRef.current,{
            opacity : 1,
            // duration : 0.1
          })
          .to(eighthCuboidRef.current,{
            opacity : 1,
            // duration : 0.1
          })
          .to(ninethCuboidRef.current,{
            opacity : 1,
            // duration : 0.1
          })
          .to(tenthCuboidRef.current,{
            opacity : 1,
            // duration : 0.1
          })
          .to(eleventhCuboidRef.current,{
            opacity : 1,
            // duration : 0.1
          })
          .to(nextContainer.current,{
            opacity : 1,
            zIndex : 500,
            duration : 0.2
          })
          .to(currentContainer.current,{
            opacity : 0,
            zIndex : -500,
            duration : 0.1
          })
     })   

     return ()=> ctx && ctx.revert()
    })

  return (
    <div ref={containerRef} className='absolute top-0 left-0 w-full'>
        <div ref={firstCuboidRef} className='absolute opacity-0 w-[calc(100%/11)] aspect-square scale-[2.4]  translate-x-[45vw] translate-y-[40vh]'>
            <img src={firstCuboid} alt="vav_cube.svg" className='object-cover w-full' />
        </div>
        <div ref={secondCuboidRef} className='absolute opacity-0 w-[calc(100%/11)] aspect-square scale-[2.4]  translate-x-[45vw] translate-y-[40vh]'>
            <img src={secondCuboid} alt="vav_cube.svg" className='object-cover w-full' />
        </div>
        <div ref={thirdCuboidRef} className='absolute opacity-0 w-[calc(100%/11)] aspect-square scale-[2.4]  translate-x-[45vw] translate-y-[40vh]'>
            <img src={thirdCuboid} alt="vav_cube.svg" className='object-cover w-full' />
        </div>
        <div ref={fourthCuboidRef} className='absolute opacity-0 w-[calc(100%/11)] aspect-square scale-[2.4]  translate-x-[45vw] translate-y-[40vh]'>
            <img src={fourthCuboid} alt="vav_cube.svg" className='object-cover w-full' />
        </div>
        <div ref={fifthCuboidRef} className='absolute opacity-0 w-[calc(100%/11)] aspect-square scale-[2.4]  translate-x-[45vw] translate-y-[40vh]'>
            <img src={fifthCuboid} alt="vav_cube.svg" className='object-cover w-full' />
        </div>
        <div ref={sixthCuboidRef} className='absolute opacity-0 w-[calc(100%/11)] aspect-square scale-[2.4]  translate-x-[45vw] translate-y-[40vh]'>
            <img src={sixthCuboid} alt="vav_cube.svg" className='object-cover w-full' />
        </div>
        <div ref={seventhCuboidRef} className='absolute opacity-0 w-[calc(100%/11)] aspect-square scale-[2.4]  translate-x-[45vw] translate-y-[40vh]'>
            <img src={seventhCuboid} alt="vav_cube.svg" className='object-cover w-full' />
        </div>
        <div ref={eighthCuboidRef} className='absolute opacity-0 w-[calc(100%/11)] aspect-square scale-[2.4]  translate-x-[45vw] translate-y-[40vh]'>
            <img src={eighthCuboid} alt="vav_cube.svg" className='object-cover w-full' />
        </div>
        <div ref={ninethCuboidRef} className='absolute opacity-0 w-[calc(100%/11)] aspect-square scale-[2.4]  translate-x-[45vw] translate-y-[40vh]'>
            <img src={ninethCuboid} alt="vav_cube.svg" className='object-cover w-full' />
        </div>
        <div ref={tenthCuboidRef} className='absolute opacity-0 w-[calc(100%/11)] aspect-square scale-[2.4]  translate-x-[45vw] translate-y-[40vh]'>
            <img src={tenthCuboid} alt="vav_cube.svg" className='object-cover w-full' />
        </div>
        <div ref={eleventhCuboidRef} className='absolute opacity-0 w-[calc(100%/11)] aspect-square scale-[2.4]  translate-x-[45vw] translate-y-[40vh]'>
            <img src={eleventhCuboid} alt="vav_cube.svg" className='object-cover w-full' />
        </div>
      </div>
  )
}

export default ChangingCuboids
