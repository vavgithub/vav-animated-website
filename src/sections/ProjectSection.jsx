import React, { useEffect, useRef } from 'react'
import dottedPattern from '../assets/DottedPattern.svg'
import tesseract from '../assets/Tesseract.png'
import gsap from 'gsap';

function ProjectSection({containerRef,scrollerRef,combinedRef,tunnelRef}) {
  const contentRef = useRef();
  const tesseractRef = useRef();
  const firstLineRef = useRef();
  const secondLineRef = useRef();
  const thirdLineRef = useRef();

  const firstLineShadowRef = useRef();
  const secondLineShadowRef = useRef();
  const thirdLineShadowRef = useRef();

  const thirdLineStrokeRef = useRef();

  const strokeRef = useRef();
  const letterRef = useRef();

  const shape1Ref = useRef();
  const shape2Ref = useRef();
  const shape3Ref = useRef();
  const shape4Ref = useRef();

  useEffect(() => {
    let ctx;
    if(containerRef.current && scrollerRef.current && combinedRef.current){

      strokeRef.current.style.transformOrigin = "50% 55%";
      letterRef.current.style.transformOrigin = `46% 95%`;
      const scrollerDiv = scrollerRef.current?.querySelector('div');

      ctx = gsap.context(()=>{
        let sectionTimeline = gsap.timeline({
          scrollTrigger : {
            trigger : contentRef.current,
            start: "20% bottom",
            end: "bottom top",
            scrub:true,
            // markers: true,
            invalidateOnRefresh: true, 
          }
        });

        sectionTimeline
        .fromTo(tesseractRef.current,{
          scale : 0,
          opacity : 0 
        },{
          scale : 1 , 
          opacity : 1,
          lazy: false,
        })
        .fromTo(firstLineShadowRef.current,{
          width : 0
        },{
          width : "100%",
          lazy: false,
        })
        .fromTo(firstLineRef.current,{
          width : 0
        },{
          width : "100%",
          lazy: false,
        },"-=0.3")
        .fromTo(secondLineShadowRef.current,{
          width : 0
        },{
          width : "100%",
          lazy: false,
        })
        .fromTo(secondLineRef.current,{
          width : "30%"
        },{
          width : "100%",
          lazy: false,
        },"-=0.3")
        .fromTo(thirdLineShadowRef.current,{
          width : 0
        },{
          width : "100%",
          lazy: false,
        })
        .fromTo(thirdLineRef.current,{
          width : 0
        },{
          width : "100%",
          lazy: false,
        },"-=0.3")
        .to(thirdLineStrokeRef.current,{
          opacity : 1,
          scale:1.15,
          duration : 0.2
        })
        .to(thirdLineStrokeRef.current,{
          opacity : 0,
          duration : 0.05
        })
        .to(shape1Ref.current,{
          opacity : 1,
        },"-=0.06")
        .to(shape2Ref.current,{
          opacity : 1,
        },)
        .to(shape3Ref.current,{
          opacity : 1,
        },)
        .to(shape4Ref.current,{
          opacity : 1,
        },)
        .to(strokeRef.current,{
          scale : 45,
          lazy: true,
          duration : 2
        })
        .to(letterRef.current,{
          scale : 32,
          lazy: true,
          duration : 2
        },"-=2")
        .to(strokeRef.current,{
          opacity : 0.1,
          duration : 0.1
        },"-=0.5")
        .to(tesseractRef.current,{
          opacity : 0,
          duration : 0.1
        },"-=0.5")
        .to(contentRef.current,{
          background: "black",
          duration : 0.01
        },"-=0.5")
        .to(combinedRef.current,{
          filter: "invert(100%)",
          duration : 0.05
        },"-=0.5")
        .to(scrollerDiv,{
          filter: "invert(100%)",
          duration : 0.05
        },"-=0.5")
        .to(letterRef.current,{
          background:"black",
          color: "white",
          duration : 0.01
        },"-=0.2")
        .to(combinedRef.current,{
          filter: "invert(0%)",
          duration : 0.1
        })
        .to(scrollerDiv,{
          filter: "invert(0%)",
          duration : 0.1
        })
        .to(tunnelRef.current,{
          opacity : 1,
          duration : 0.1
        })        
        .to(containerRef.current,{
          zIndex : -500,
          lazy : true,
          delay:1
        })
        .to(tunnelRef.current,{
          background: "white",
          duration : 0.1
        },"-=2")
      },containerRef.current)
    }
    return () =>{
      console.log("UNMOUNTS")
      ctx.revert();} // Cleanup on unmount or dependency change
}, [containerRef?.current,scrollerRef,combinedRef]); 

  return (
    <div ref={containerRef}  className='sticky opacity-0 top-0 left-0 min-w-screen max-w-screen aspect-video bg-white overflow-x-clip'>
      <div className='w-full h-full max-h-screen overflow-hidden'>
          <img src={dottedPattern} alt="" className='w-full object-cover' />
      </div>
      <div ref={contentRef} className='absolute top-0 left-0 '>
          <div ref={tesseractRef} className='min-h-screen max-h-screen w-screen flex justify-center items-center'>
            <img src={tesseract} alt="" className='h-[100vh] object-cover' />
          </div>
          <div ref={letterRef} style={{willChange : "transform opacity"}} className='absolute top-5 min-[1600px]:top-0 left-0 min-w-[40vw] translate-x-[30vw] translate-y-[calc(100vh/4)] flex flex-col min-[1600px]:gap-10'>
            <div className='relative min-h-[105px]'>
              <h1 ref={firstLineRef} className='text-ultra-90 xl:text-ultra-120 min-[1600px]:text-ultra-150 font-goia whitespace-nowrap overflow-x-clip'>A new </h1>
              <h1 ref={firstLineShadowRef} className='absolute top-0 left-0 text-ultra-90 xl:text-ultra-120 min-[1600px]:text-ultra-150 font-goia whitespace-nowrap -z-10 overflow-x-clip bg-mesh-gradient bg-clip-text text-transparent bg-cover '>A new </h1>
            </div>
            <div className='relative min-h-[105px]'>
              <h1 ref={secondLineRef} className='text-ultra-90 xl:text-ultra-120 min-[1600px]:text-ultra-150 font-editorial-italic pl-[22rem] whitespace-nowrap overflow-x-clip '>design</h1>
              <h1 ref={secondLineShadowRef} className='absolute top-0 left-0 text-ultra-90 xl:text-ultra-120 min-[1600px]:text-ultra-150 font-editorial-italic pl-[22rem] -z-10 whitespace-nowrap overflow-x-clip bg-mesh-gradient bg-clip-text text-transparent bg-cover'>design</h1>
            </div>
            <div className='relative min-h-[105px]'>
              <h1 ref={thirdLineRef} className='text-ultra-90 xl:text-ultra-120 min-[1600px]:text-ultra-150 font-goia pl-12 whitespace-nowrap overflow-x-clip'>dimension</h1>
              <h1 ref={thirdLineStrokeRef}
              style={{
                WebkitTextStroke : "1px  black",
                textStroke : "1px black"
              }}
              className='absolute opacity-0 top-0 left-0 text-ultra-90 xl:text-ultra-120 min-[1600px]:text-ultra-150 font-goia pl-12 whitespace-nowrap -z-10 overflow-x-clip text-transparent'>dimension</h1>
              <h1 ref={thirdLineShadowRef} className='absolute top-0 left-0 text-ultra-90 xl:text-ultra-120 min-[1600px]:text-ultra-150 font-goia pl-12 whitespace-nowrap -z-10 overflow-x-clip bg-mesh-gradient bg-clip-text text-transparent bg-cover'>dimension</h1>
            </div>
          </div>
          <svg ref={strokeRef} style={{willChange : "opacity"}} className='absolute  top-0 left-0 min-w-screen translate-y-[3rem]' id="Layer_1" version="1.1" viewBox="0 0 1920 1080">
                <path ref={shape1Ref} style={{opacity : 0,transformOrigin: "center",willChange : "opacity"}} transform="scale(0.9)" fill="none" stroke='black'  d="M1330.4,491.4c-7.8,0-15,2.6-21,7.2-1.8-2.7-4.9-4.5-8.4-4.5h-23.2c-5.5,0-10,4.5-10,10v12.7c-10.4-15.3-27.9-25.4-47.8-25.4s-37.4,10.1-47.8,25.4v-12.7c0-3.5-1.8-6.5-4.4-8.3,4.7-4.4,7.7-10.6,7.7-17.4,0-13-11-24-24-24s-24,10.8-24,24,2.6,12.7,7,17c-3.1,1.7-5.2,5-5.2,8.8v3c-10.1-10.7-25-15.7-36.8-15.7-19.7,0-35.2,9.7-41,24.2-6.5-15-19.3-24.2-35.5-24.2s-15,2.6-21,7.2c-1.8-2.7-4.9-4.5-8.4-4.5h-23.2c-5.5,0-10,4.5-10,10v9.9c-1.4-2-2.9-3.9-4.5-5.7-10-10.9-24.1-16.9-39.9-16.9s-41,11.4-51.1,28.7c-5.5-17.7-18.8-28.7-36.6-28.7s-20.6,5.5-27.2,14.6c0,0-.1-.2-.2-.2-7.1-9.3-17.5-14.4-29.3-14.4s-14,2.3-19.5,6.5c-1.8-2.3-4.7-3.8-7.8-3.8h-23.2c-3.6,0-6.7,1.9-8.5,4.7-.7-1.2-1.7-2.2-2.9-3,4.7-4.4,7.7-10.6,7.7-17.4,0-13-11-24-24-24s-15.2,4-19.5,10c-1.5-3.7-5.1-6.3-9.3-6.3h-23.2c-5.5,0-10,4.5-10,10v28c-6.4-3.1-13.6-4.7-21.3-4.7-31.3,0-55.9,25.3-55.9,57.5s23,57.8,52.5,57.8,1.9,0,2.8,0c8.6-.4,16.4-3.3,22.8-8.4,1.6,3.5,5.1,5.9,9.1,5.9h23.2c3.4,0,6.5-1.7,8.3-4.4,1.8,2.7,4.8,4.4,8.3,4.4h23c3.6,0,6.7-1.9,8.5-4.7,1.8,2.8,4.9,4.7,8.5,4.7h23.2c5.5,0,10-4.5,10-10v-44.6c2.7-1.8,4.5-4.9,4.5-8.4,0-5.1,2.3-9.4,5.1-9.4s4,2.6,4,7.6v54.7c0,5.5,4.5,10,10,10h23c5.5,0,10-4.5,10-10v-44.4c2.8-1.8,4.7-4.9,4.7-8.5,0-5.1,2.3-9.4,4.9-9.4s4,0,4,7.6v54.7c0,5.5,4.5,10,10,10h23c5.5,0,10-4.5,10-10v-11.8c10.5,14.9,28.1,24.5,48.3,24.5s33.4-6.9,44.4-18.4v5.7c0,5.5,4.5,10,10,10h23.2c5.5,0,10-4.5,10-10v-44.6c2.7-1.8,4.5-4.9,4.5-8.4,0-5.8,3.8-9.6,7.3-9.6s4.6,0,4.6,7.8v54.7c0,5.5,4.5,10,10,10h23c5.5,0,10-4.5,10-10v-.9c8.2,8.3,21.3,13.6,36.4,13.6s28.5-5.4,36.8-14.3v1.6c0,5.5,4.5,10,10,10h23c5.5,0,10-4.5,10-10v-12.7c10.4,15.3,27.9,25.4,47.8,25.4s37.4-10.1,47.8-25.4v12.7c0,5.5,4.5,10,10,10h23.2c5.5,0,10-4.5,10-10v-44.6c2.7-1.8,4.5-4.9,4.5-8.4,0-5.8,3.8-9.6,7.3-9.6s4.6,0,4.6,7.8v54.7c0,5.5,4.5,10,10,10h23c5.5,0,10-4.5,10-10v-54.7c0-28.2-16.5-48-40.1-48ZM619.7,548.9c0,7.5-3.8,16.3-14.5,16.3s-14.8-4.2-14.8-16.1,6.5-16.6,15.9-16.6,13.7,3.6,16.4,9.3c-1.9,1.8-3.1,4.4-3.1,7.2ZM1220.1,564.7c-8.1,0-14.5-6.8-14.5-15.6s6.4-15.6,14.5-15.6,14.7,6.8,14.7,15.6-6.4,15.6-14.7,15.6Z"/>
                <path ref={shape2Ref} style={{opacity : 0,transformOrigin: "center",willChange : "opacity"}} transform="scale(1.15)" fill='none' stroke='black'  d="M1220.1,656.8c-12.7,0-25.2-2.2-36.8-6.5-6.5,2.4-13.6,3.8-21,3.8h-23c-5.2,0-10.2-.7-15-1.9-10,3-20.7,4.6-31.8,4.6s-21.5-1.6-31.5-4.6c-4.8,1.2-9.8,1.9-14.9,1.9h-23c-6.3,0-12.4-1-18.2-2.8-5.7,1.8-11.8,2.8-18.2,2.8h-23.2c-6.5,0-12.8-1.1-18.7-3-11.3,3.7-23.4,5.7-35.6,5.7s-25.6-2.2-37.4-6.5c-6.5,2.4-13.6,3.8-20.9,3.8h-23c-5.8,0-11.5-.8-16.8-2.4-5.3,1.6-11,2.4-16.8,2.4h-23c-5.8,0-11.5-.8-16.8-2.4-5.3,1.6-11,2.4-16.8,2.4h-23.2c-2.9,0-5.7-.2-8.5-.6-2.8.4-5.6.6-8.5.6h-23c-2.8,0-5.6-.2-8.3-.6-2.7.4-5.5.6-8.3.6h-23.2c-3.2,0-6.3-.3-9.4-.7-6.5,1.8-13.2,2.9-20,3.2-1.7,0-3.5.1-5.3.1-28.5,0-54.9-11.8-74.3-33.1-18.2-20-28.2-46.5-28.2-74.6s10.8-55.6,30.3-75.7c14.4-14.8,32.3-24.8,51.9-29.2,9.3-21.1,30.4-35.9,55-35.9h23.2c1.7,0,3.3,0,4.9.2,7.6-2.6,15.7-4,23.9-4,27.8,0,52.1,15.4,64.8,38.2,4.4-.7,9-1.1,13.5-1.1,10,0,19.8,1.7,28.9,4.9,8.8-3.2,18.2-4.9,27.8-4.9,14.9,0,28.8,3.6,41.1,10.2,14.4-6.7,30.4-10.2,46.6-10.2s24.2,2,35.2,5.8c6-2,12.5-3.1,19.1-3.1h23.2c2.3,0,4.5.1,6.7.4,7.3-2,14.9-3.1,22.6-3.1,13,0,25.5,2.8,36.7,7.9,10.6-4.5,22.3-7.2,34.6-7.8,12.8-22.2,36.8-37.2,64.2-37.2s51.4,15,64.2,37.2c1.5,0,2.9,0,4.4,0,12.7,0,25.2,2.2,36.8,6.5,6.5-2.4,13.6-3.8,21-3.8h23.2c2.3,0,4.5.1,6.7.4,7.3-2,14.9-3.1,22.6-3.1,51.3,0,90.1,42.1,90.1,98v54.7c0,33.1-26.9,60-60,60h-23c-6.3,0-12.4-1-18.2-2.8-5.7,1.8-11.8,2.8-18.2,2.8h-23.2c-7.4,0-14.4-1.3-21-3.8-11.6,4.2-24.1,6.5-36.8,6.5Z"/>
                <path ref={shape3Ref} style={{opacity : 0,transformOrigin: "center",willChange : "opacity"}} transform="scale(1.35)" fill='none' stroke='black'  d="M1220.1,736.8c-13,0-26-1.3-38.6-4-6.3.9-12.7,1.3-19.2,1.3h-23c-3.9,0-7.8-.2-11.7-.5-11.4,2.1-23.2,3.2-35.1,3.2s-23.4-1.1-34.8-3.2c-3.9.3-7.8.5-11.6.5h-23c-6.1,0-12.2-.4-18.2-1.2-6,.8-12.1,1.2-18.2,1.2h-23.2c-5.6,0-11.1-.3-16.7-1-12.4,2.5-25,3.7-37.7,3.7s-26.3-1.3-39.1-4c-6.4.9-12.8,1.3-19.3,1.3h-23c-5.6,0-11.3-.3-16.8-1-5.6.7-11.2,1-16.8,1h-23c-5.6,0-11.3-.3-16.8-1-5.6.7-11.2,1-16.8,1h-23.2c-2.8,0-5.6,0-8.5-.3-2.8.2-5.6.3-8.5.3h-23c-2.8,0-5.5,0-8.3-.2-2.8.2-5.5.2-8.3.2h-23.2c-1.3,0-2.6,0-4,0-7.1,1.3-14.3,2.1-21.5,2.4-3,.2-6.2.2-9.3.2-51.3,0-98.7-21.1-133.5-59.3-31.6-34.8-49-80.4-49-128.4s18.8-96.3,53-131.5c16.7-17.2,36.3-30.8,57.8-40.3,26.2-30.6,64.9-49.1,106.4-49.1h18.2c11.1-2.5,22.4-3.8,33.9-3.8,38.2,0,74.3,14.2,102.1,38.8,1.6.2,3.2.5,4.8.8,9.2-1.6,18.6-2.4,28.1-2.4,14.4,0,28.7,1.8,42.4,5.4,14.8-3.6,30-5.4,45.2-5.4s25.3,1.2,37.5,3.7c5.6-.7,11.2-1,16.9-1h22.8c9.8-1.8,19.7-2.7,29.7-2.7s21.5,1,32,3c28-25.4,64.8-40.1,103.5-40.1s75.9,14.8,103.9,40.4c1.1.2,2.2.4,3.3.7,6.3-.9,12.7-1.3,19.2-1.3h22.8c9.8-1.8,19.7-2.7,29.7-2.7,47.5,0,91.2,19.1,123.2,53.9,30.2,32.9,46.9,77,46.9,124.1v54.7c0,77.2-62.8,140-140,140h-23c-6.1,0-12.2-.4-18.2-1.2-6,.8-12.1,1.2-18.2,1.2h-23.2c-6.4,0-12.8-.4-19.2-1.3-12.7,2.7-25.6,4-38.6,4Z"/>
                <path ref={shape4Ref} style={{opacity : 0,transformOrigin: "center",willChange : "opacity"}} transform="scale(1.5)" fill='none' stroke='black'  d="M1220.1,836.8c-14.3,0-28.6-1.1-42.7-3.2-5,.3-10.1.5-15.1.5h-23c-2.1,0-4.2,0-6.3,0-13.3,1.8-26.9,2.8-40.5,2.8s-26.9-.9-40.2-2.8c-2.1,0-4.2,0-6.2,0h-23c-6,0-12.1-.2-18.2-.7-6.1.5-12.1.7-18.2.7h-23.2c-4.1,0-8.2-.1-12.3-.3-13.9,2-28,3-42,3s-28.8-1.1-43-3.2c-5.1.3-10.2.5-15.3.5h-23c-5.6,0-11.2-.2-16.8-.6-5.6.4-11.2.6-16.8.6h-23c-5.6,0-11.2-.2-16.8-.6-5.6.4-11.2.6-16.8.6h-23.2c-2.8,0-5.6,0-8.5-.1-2.8,0-5.7.1-8.5.1h-23c-2.7,0-5.5,0-8.3-.1-2.8,0-5.5.1-8.3.1h-19.9c-7.9,1.1-16,1.8-23.9,2.2-4.7.2-9.4.4-14.2.4-39.6,0-77.8-8.1-113.6-23.9-35.6-15.8-67.2-38.8-93.9-68.2-48.3-53.2-74.9-122.7-74.9-195.7s28.9-147.2,81.3-201.2c20.5-21.1,43.8-38.7,69.4-52.4,44.5-43,104.1-67.2,166.6-67.2h8.4c14.4-2.5,29-3.8,43.6-3.8,46.9,0,92.5,13,132.1,37.1,1,0,1.9,0,2.9,0,14.4,0,28.8,1.2,43,3.5,14.8-2.3,29.8-3.5,44.7-3.5s28.1,1,41.9,3c4.2-.2,8.3-.3,12.5-.3h14.8c12.5-1.8,25.1-2.7,37.7-2.7s2.3,0,3.5,0c39.6-24.1,85.1-37.1,132.1-37.1s95.8,13.9,136.4,39.8h4.8c12.5-1.8,25.1-2.7,37.7-2.7,37.5,0,73.7,7.5,107.5,22.3,33.9,14.8,63.9,36.3,89.3,63.9,47.2,51.4,73.3,119.5,73.3,191.7v54.7c0,132.3-107.7,240-240,240h-23c-6,0-12.1-.2-18.2-.7-6.1.5-12.1.7-18.2.7h-23.2c-5,0-10.1-.2-15.1-.5-14.1,2.1-28.4,3.2-42.7,3.2Z"/>
          </svg>
      </div>
    </div>
  )
}

export default ProjectSection
