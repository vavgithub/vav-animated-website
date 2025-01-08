import React, { useEffect, useRef } from 'react'
import dottedPattern from '../assets/DottedPattern.svg'
import tesseract from '../assets/Tesseract.png'
import gsap from 'gsap';

function ProjectSection({containerRef}) {
  const contentRef = useRef();
  const tesseractRef = useRef();
  const firstLineRef = useRef();
  const secondLineRef = useRef();
  const thirdLineRef = useRef();

  const firstLineShadowRef = useRef();
  const secondLineShadowRef = useRef();
  const thirdLineShadowRef = useRef();

  useEffect(() => {
    let ctx;
    if(containerRef.current){
      ctx = gsap.context(()=>{
        let sectionTimeline = gsap.timeline({
          scrollTrigger : {
            trigger : contentRef.current,
            start: "20% bottom",
            end: "end top",
            scrub:1,
            markers: true,
          }
        });

        sectionTimeline
        .fromTo(tesseractRef.current,{
          scale : 0,
          opacity : 0 
        },{
          scale : 1 , 
          opacity : 1
        })
        .fromTo(firstLineShadowRef.current,{
          width : 0
        },{
          width : "100%"
        })
        .fromTo(firstLineRef.current,{
          width : 0
        },{
          width : "100%"
        },"-=0.3")
        .fromTo(secondLineShadowRef.current,{
          width : 0
        },{
          width : "100%"
        })
        .fromTo(secondLineRef.current,{
          width : "30%"
        },{
          width : "100%"
        },"-=0.3")
        .fromTo(thirdLineShadowRef.current,{
          width : 0
        },{
          width : "100%"
        })
        .fromTo(thirdLineRef.current,{
          width : 0
        },{
          width : "100%"
        },"-=0.3")
      },containerRef.current)
    }
    return () => ctx.revert(); // Cleanup on unmount or dependency change
}, [containerRef?.current]); 

  return (
    <div ref={containerRef} className='sticky opacity-0 top-0 left-0 min-w-screen max-w-screen aspect-video bg-white'>
      <div className='w-full h-full max-h-screen overflow-hidden'>
          <img src={dottedPattern} alt="" className='w-full object-cover' />
      </div>
      <div ref={contentRef} className='absolute top-0 left-0'>
          <div ref={tesseractRef} className='min-h-screen max-h-screen w-screen flex justify-center items-center'>
            <img src={tesseract} alt="" className='h-[100vh] object-cover' />
          </div>
          <div className='absolute top-0 left-0 min-w-[40vw] translate-x-[75%] translate-y-[60%] flex flex-col gap-10'>
            <div className='relative min-h-[105px]'>
              <h1 ref={firstLineRef} className='text-ultra-90 xl:text-ultra-150 font-goia whitespace-nowrap overflow-x-clip'>A new </h1>
              <h1 ref={firstLineShadowRef} className='absolute top-0 left-0 text-ultra-90 xl:text-ultra-150 font-goia whitespace-nowrap -z-10 overflow-x-clip bg-mesh-gradient bg-clip-text text-transparent bg-cover '>A new </h1>
            </div>
            <div className='relative min-h-[105px]'>
              <h1 ref={secondLineRef} className='text-ultra-90 xl:text-ultra-150 font-editorial-italic pl-[22rem] whitespace-nowrap overflow-x-clip '>design</h1>
              <h1 ref={secondLineShadowRef} className='absolute top-0 left-0 text-ultra-90 xl:text-ultra-150 font-editorial-italic pl-[22rem] -z-10 whitespace-nowrap overflow-x-clip bg-mesh-gradient bg-clip-text text-transparent bg-cover'>design</h1>
            </div>
            <div className='relative min-h-[105px]'>
              <h1 ref={thirdLineRef} className='text-ultra-90 xl:text-ultra-150 font-goia pl-12 whitespace-nowrap overflow-x-clip'>dimension</h1>
              <h1 ref={thirdLineShadowRef} className='absolute top-0 left-0 text-ultra-90 xl:text-ultra-150 font-goia pl-12 whitespace-nowrap -z-10 overflow-x-clip bg-mesh-gradient bg-clip-text text-transparent bg-cover'>dimension</h1>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProjectSection
