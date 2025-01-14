import React, { useEffect, useRef } from 'react'
import pixelPattern from '../../assets/Pixelpattern.svg';
import vavCube from '../../assets/vavcube.svg';
import glowGradient from '../../assets/GradientGlow.svg';
import gsap from 'gsap';

function PatternSection({containerRef,nextContainer}) {
  const dotRef = useRef();
  const bgImgRef = useRef();
  const threeDdiv = useRef();
  const vavCubeRef = useRef();
  const glowRef = useRef();

  useEffect(()=>{
    let ctx;
    if(nextContainer.current && containerRef.current){
      ctx = gsap.context(()=>{
        let patterTimeline = gsap.timeline({
          scrollTrigger : {
            trigger : containerRef.current,
            start: "top bottom",
            end: "center top",
            scrub:true,
            // markers: true,
          }
        });
  
        const containerRect = containerRef.current.getBoundingClientRect();
  
        patterTimeline
          .to(threeDdiv.current,{x: `${4.55 * (containerRect.width/11)}`,y :`${2 * (containerRect.height/6.1)}`,borderWidth:`${(containerRect.width/11)/2}`,duration:0.01})
          .to(vavCubeRef.current,{x: `${4.4 * (containerRect.width/11)}`,y :`${1.8 * (containerRect.height/6.1)}`,duration:0.01})
        .fromTo(dotRef.current,{zIndex:0,x: `${4.56 * (containerRect.width/11)}`,duration:0.01},{zIndex : 50,duration:0.01})
        .fromTo(dotRef.current,{
          y:`${2 * (containerRect.height/6.1)}`,
          skewX : 0,
          duration : 0.1
        },{
          y : `${2 * (containerRect.height/6.1)}`,
          skewX : '-30deg',
          scale: 1,
          duration : 2
        },"+=0")
        .fromTo(bgImgRef.current,{
          skewX : 0
        },{
          skewX : '-30deg',
          duration : 2
        },"-=2")
        .to(threeDdiv.current,{
          opacity:1,
        },"+=0")
        .to(dotRef.current,{
          scale:.65,
          y :`${2.18 * (containerRect.height/6.1)}`,
          x: `${4.63 * (containerRect.width/11)}`
        })
        .to(dotRef.current,{
          scale:1,
          y :`${2 * (containerRect.height/6.1)}`,
          x: `${4.56 * (containerRect.width/11)}`
        })
        .to(vavCubeRef.current,{scale:2.4,opacity: 1,zIndex:500,duration:0.01})
        .to(glowRef.current,{x: `${4.34 * (containerRect.width/11)}`,y :`${2 * (containerRect.height/6.1)}`,duration:0.01})
        .to(vavCubeRef.current,{x: `${4 * (containerRect.width/11)}`,y :`${1 * (containerRect.height/6.1)}`,duration:2},"+=0")
        .to(glowRef.current,{opacity:0.95,duration:1},"-=2")
        .to(dotRef.current,{
          opacity:0,
          duration : 0.1
        },"-=2")
        .to(bgImgRef.current,{
          opacity:0,
          duration : 0.3
        },"-=0.3")
        .to(glowRef.current,{
          opacity:0,
          duration : 0.3
        },"-=0.3")
        .to(threeDdiv.current,{
          opacity:0,
          duration : 0.3
        },"-=0.3")
        .to(vavCubeRef.current,{
          x: "45vw",
          y: "40vh",
          filter: "invert(1)",
          duration : 1
        })
        .to(nextContainer.current,{
          opacity : 1
        },"-=1")
        .to(vavCubeRef.current,{
          opacity : 0,
          duration : 0.1,
        })
      },containerRef.current) 
    }

    return ()=> ctx && ctx.revert()
  },[nextContainer.current,containerRef.current])

  return (
      <div ref={containerRef} className="sticky opacity-0 top-0 aspect-video z-20 flex justify-center items-center min-w-full max-w-screen " style={{overflowX:"clip",willChange: 'transform'}}>
          {/* Background Container */}
          <div className="absolute top-0 left-0 background-container overflow-hidden w-full aspect-video" >
            {/* SVG */}
            <img ref={bgImgRef} src={pixelPattern} alt="" className='object-cover scale-[1.45] background-svg' style={{transformOrigin:"0 0",willChange: 'transform'}} />
          </div>
          <div ref={threeDdiv} className=' absolute opacity-0 top-0 left-0 border-l-[#cfcfcf] border-b-[#cfcfcf]  skew-x-[-30deg]' > 
          </div>
          <div ref={dotRef} className=' absolute  bg-black top-0 left-0  w-[calc(100%/11)] aspect-square ' > 
          </div>
          <div ref={vavCubeRef} className='absolute opacity-0 top-0 left-0 w-[calc(100%/11)] scale-[1.4] aspect-square '>
            <img src={vavCube} alt="vav_cube.svg" className='object-cover w-full' />
          </div>
          <div ref={glowRef} className='absolute  top-0 left-0 w-[calc(100%/11)] scale-[5] opacity-0 mix-blend-multiply aspect-square '
            style={{
              clipPath : 'polygon(0 0, 93% 0, 59% 60%, 59% 60%, 0 60%)',
              willChange: 'transform, opacity, clip-path'
            }}>
            <img src={glowGradient} alt="vav_cube.svg" className='object-cover w-full' />
          </div>
      </div>
  )
}

export default PatternSection
