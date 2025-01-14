import React, { useEffect, useRef } from 'react'
import vavCube from '../../assets/vavcube.svg';
import gsap from 'gsap';
import GradientLogo from '../../svg/GradientLogo';
import TextLogoShadow from '../../svg/TextLogoShadow';
import TextLogo from '../../svg/TextLogo';

function WhiteLogoSection({containerRef, projectSectionRef , brandingRef,scrollerRef}) {
    const vavCubeRef = useRef();
    const vavTextRef = useRef();
    const vavCubeShadowRef = useRef();
    const vavTextShadowRef = useRef();                 
    const combinedRef = useRef();

    useEffect(()=>{
      let ctx;
      if(containerRef.current && projectSectionRef.current && brandingRef.current && scrollerRef.current){
        
        ctx = gsap.context(()=>{
          let logoTimeline = gsap.timeline({
            scrollTrigger : {
              trigger : vavTextRef.current,
              start: "top bottom",
              end: "end top",
              scrub:true,
              // markers: true,
            }
          });

          logoTimeline
          .to(vavCubeRef.current,{
            x : "-120%",
            zIndex : 50,
            duration : 0.4
          })
          .fromTo(vavTextRef.current,{
            x : "-100%",
            duration : 0.4
          },{
            x: "0",
            duration : 0.4
          },"-=0.4")
          .to(vavTextRef.current,{
            opacity : 1,
            zIndex : 50,
            duration : 0.1
          },"-=0.4")
          .to(combinedRef.current, {
            x: "82vw",
            y : "0vh",
            position : "fixed",
            zIndex : 50,
            scale: 0.2,
            duration : 1
          })
          .to(vavCubeShadowRef.current,{
            top:"30px",
            left :"-30px",
            duration : 0.5
          },"-=1")
          .to(vavTextShadowRef.current,{
            top:"20px",
            left :"-20px",
            duration : 0.5
          },"-=1")
          .to(vavCubeShadowRef.current,{
            top:"0",
            left :"0",
            duration : 0.5
          },"-=0.5")
          .to(vavTextShadowRef.current,{
            top:"0",
            left :"0",
            duration : 0.5
          },"-=0.5")
          .to(brandingRef.current,{
            opacity : 1,
            duration : 0.1
          },"-=1.4")
          .to(scrollerRef.current,{
            opacity : 1,
            duration : 0.1
          },"-=1.4")
          .to(containerRef.current,{
            display: "none",
            duration : 0.1
          },"-=0.3")
          .to(projectSectionRef.current,{
            opacity : 1,
            zIndex : 20,
            duration : 0.5
          },"-=0.5");
          
        },containerRef.current)
      }

    },[containerRef.current,projectSectionRef.current,brandingRef.current,scrollerRef.current])
    
  return (
    <div
      ref={containerRef}
      className="opacity-0 sticky top-0 left-0 aspect-video max-h-screen min-w-full max-w-screen bg-white"
    >
    {/* Can be Loader */}
    <div ref={combinedRef} className='absolute top-0 left-0 flex justify-center items-center translate-x-[45vw]  translate-y-[40vh]'>
      <div ref={vavCubeRef} className=' w-[calc(100vw/11)]  scale-[2.4] aspect-square ' >
            <img src={vavCube} alt="vav_cube.svg" className='object-cover w-full' />
          <div ref={vavCubeShadowRef} className='absolute top-0 -left-0 w-[calc(100vw/11)]  aspect-square -z-10'>
            <GradientLogo/>
          </div>
      </div>
      <div className='w-[calc(100vw/10)] pl-[0.51rem] scale-[2.8]   translate-y-[4%]' style={{overflowX: "clip"}}>
        <div ref={vavTextRef} className='opacity-0 relative w-[calc(100vw/11)] '>
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
