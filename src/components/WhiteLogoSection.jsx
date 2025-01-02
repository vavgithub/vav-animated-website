import React, { useEffect, useRef } from 'react'
import vavCube from '../assets/vavcube.svg';
import gsap from 'gsap';
import TextLogo from '../svg/textLogo';
import TextLogoShadow from '../svg/TextLogoShadow';
import GradientLogo from '../svg/GradientLogo';

function WhiteLogoSection({containerRef}) {
    const vavCubeRef = useRef();
    const vavCubeShadowRef = useRef();
    const vavTextRef = useRef();
    const vavTextShadowRef = useRef();                 
    const combinedRef = useRef();

    useEffect(()=>{
      let ctx;
      if(containerRef.current){
        const containerRect = containerRef.current.getBoundingClientRect()
        console.log("CCC",containerRect);
        
        ctx = gsap.context(()=>{
          let logoTimeline = gsap.timeline({
            scrollTrigger : {
              trigger : vavTextRef.current,
              start: "top bottom",
              end: "end top",
              scrub:1,
              markers: true,
            }
          });

          logoTimeline
          .to(vavCubeRef.current,{
            x : "-120%",
            duration : 0.4
          })
          .fromTo(vavTextRef.current,{
            x : "-100%",
            duration : 0.4
          },{
            x: "0",
            duration : 0.4
          },"-=0.4")
          .to(combinedRef.current, {
            x: "82.5vw",
            y : "-1vh",
            scale: 0.2,
            duration : 1
          })
          // .to(vavCubeShadowRef.current,{
          //   top:"30px",
          //   left :"-30px",
          //   duration : 0.5
          // },"-=1")
          // .to(vavTextShadowRef.current,{
          //   top:"30px",
          //   left :"-30px",
          //   duration : 0.5
          // },"-=1")
          // .to(vavCubeShadowRef.current,{
          //   top:"0",
          //   left :"0",
          //   duration : 0.5
          // },"-=0.5")
          
        },containerRef.current)
      }

    },[containerRef.current])
    
  return (
    <div
      ref={containerRef}
      className="opacity-0 sticky top-0 left-0 aspect-video min-w-full max-w-screen bg-white"
    >
    {/* Can be Loader */}
    <div ref={combinedRef} className='absolute top-0 left-0 flex justify-center items-center translate-x-[45vw]  translate-y-[40vh]'>
      <div ref={vavCubeRef} className=' w-[calc(100vw/11)]  scale-[2.4] aspect-square ' >
            <img src={vavCube} alt="vav_cube.svg" className='object-cover w-full' />
          <div ref={vavCubeShadowRef} className='absolute top-0 -left-0 w-[calc(100vw/11)]  aspect-square -z-10'>
            <GradientLogo/>
          </div>
      </div>
      <div className='w-[calc(100vw/10)]  scale-[2.8] overflow-x-hidden  translate-y-[4%]'>
        <div ref={vavTextRef} className='relative w-[calc(100vw/11)] '>
          <div ref={vavTextShadowRef} className='absolute top-0 left-0 w-[calc(100vw/11)] '>
            <TextLogoShadow/>
          </div>
          <TextLogo/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WhiteLogoSection
