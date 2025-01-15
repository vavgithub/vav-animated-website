import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Frame, { ThreeDFrame } from './Frame';
import beautiful from '../../assets/projects/Beautiful.png'
import hogSmash from '../../assets/projects/HogSmash.png'
import indicorBlue from '../../assets/projects/IndicorBlue.png'
import hogSmash2 from '../../assets/projects/HogSmash2.png'
import mercuryBlue from '../../assets/projects/MercuryBlue.png'
import mercury2 from '../../assets/projects/Mercury2.png'
import ava1 from '../../assets/projects/AVA1.png'
import haulerHub1 from '../../assets/projects/HaulerHub1.png'
import haulerHub2 from '../../assets/projects/HaulerHub2.png'
import indicorHome from '../../assets/projects/IndicorHome.png'
import rovixWomen from '../../assets/projects/RovixWomen.jpg'
import vstream from '../../assets/projects/Vstream.png'
import vstream2 from '../../assets/projects/vstream2.png'
import rovixProducts from '../../assets/projects/RovixProducts.png'
import aiAssistant from '../../assets/projects/AiAssistant.jpg'
import avaWeb3 from '../../assets/projects/avaWeb3.png'
import graph from '../../assets/projects/Graph.png'
import mapView from '../../assets/projects/MapView.png'
import sony from '../../assets/projects/Sony.png'

import ideation3d from '../../assets/projects/Ideation3d.png'
import hhb3d from '../../assets/projects/HHB3d.png'
import hhb3d2 from '../../assets/projects/HHB3d2.png'
import weight3d from '../../assets/projects/3dWeight.png'

import foundation1 from '../../assets/projects/videos/Foundation1.mp4'
import haulerHub from '../../assets/projects/videos/HaulerHub.mp4'
import indicor from '../../assets/projects/videos/Indicor.mp4'
import techIND from '../../assets/projects/videos/TechnologyIND.mp4'


function TunnelingSection({ containerRef }) {
  const squares = useRef(Array(8).fill().map(() => React.createRef()));

  const letterRef = useRef();
  const framesRef = useRef();

  useEffect(() => {

    // Create GSAP context
    let ctx = gsap.context(() => {
      // Create the timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          markers: true
        }
      });
      squares.current[5].current.style.overflow = "hidden"
      // Animate each square
      // squares.current.forEach((squareRef, i) => {
      //   const initialScale = (i + 1) * 2;
      //   const initialRotation = i * 10;
      //   const initialOpacity = i < 4 ? 0 : 1

      //   tl.fromTo(squareRef.current, {
      //     zIndex : 190 - (i * 10),
      //     scale : (i + 1)  * 2,
      //     rotate: `${(i + 1) * 10}deg`,
      //     opacity:  i < 4 ? 0 : 1
      //   },{
      //     scale: initialScale * 10,
      //     lazy : true,
      //     force3d:true,
      //     rotation: initialRotation - 360,
      //     opacity: initialOpacity === 0 ? 1 : 0,
      //     duration: 2,
      //     ease: 'none'
      //   }, 0);
      // });

      squares.current.forEach((squareRef,i) =>{

        tl.fromTo(squareRef.current, {
          zIndex : 190 - (i * 10),
          scale : (i  * 0.02) + i,
          rotation: (i + 1) * 10,
          opacity:  i < 4 ? 0 : 1
        },{
          scale : (i  * 28) + i,
          rotation: ((i + 1) * 10) - 360,
          opacity: i < 4 ? 1 : 0,
          delay : 0.75 ,
          duration : 2
        },0)

      })

      squares.current.forEach((squareRef, i) => {

        tl.to(squareRef.current, {
          background : "transparent",
          duration: 0.01,
        }, 0);
      });

      tl
      .fromTo(letterRef.current,{
        opacity : 0
      },{
        opacity : 1
      },"-=1.9") 
      .fromTo(framesRef.current,{
        y : "+100vh"
      },{
        y : "0",
        duration : 1,
        // ease : "back.inOut(1)"
      },"-=1.8") 

    }, containerRef); // Scope to our component
    // Cleanup
    return () => ctx.revert();
  }, [containerRef]);

  return (
      <div 
        ref={containerRef} 
        className='sticky opacity-0 top-0 left-0 min-w-screen max-w-screen aspect-video  overflow-x-clip ' style={{zIndex:100}}
      >
        <div style={{willChange : "transform"}} className="h-screen w-full flex justify-center items-center">
          {squares.current.map((squareRef, index) => (
            <div
              key={index}
              ref={squareRef}
              className="absolute border border-black"
              style={{
                width: "5rem",
                height: "5rem",
                background : "white",
              }}
            />
          ))}
          <div ref={letterRef} className='opacity-0 flex flex-col gap-4 xl:gap-10'>
            <h1 className='text-ultra-90 xl:text-ultra-120 min-[1600px]:text-ultra-150 font-goia whitespace-nowrap z-[3]'>
            Let's do this 
            </h1>
            <h1 className='text-center text-ultra-90 xl:text-ultra-120 min-[1600px]:text-ultra-150 font-editorial-italic whitespace-nowrap z-0'>
            together
            </h1>
          </div>
        </div>
          <div ref={framesRef} className='absolute top-0 left-0 w-screen max-w-screen min-h-screen '>
              <Frame src={beautiful} LEVEL={2} extraClasses={'top-0 left-0  translate-y-[20vh] translate-x-[60vw] -z-[1]'} />
              <Frame src={hogSmash} LEVEL={4} imageWidth={" w-[18.5vw] translate-x-[-1%]"} extraClasses={'top-0 left-0  translate-y-[14vh] translate-x-[5vw] -z-[1]'} />
              <Frame src={indicorBlue} LEVEL={4}  extraClasses={'top-0 left-0  translate-y-[92vh] translate-x-[75vw] -z-[1]'} />
              <Frame src={hogSmash2} LEVEL={3} imageWidth={" w-[16.3vw] translate-x-[-11%]"} extraClasses={'top-0 left-0  translate-y-[14vh] translate-x-[40vw] -z-[1]'} />
              <Frame src={mercuryBlue} LEVEL={3} imageWidth={"w-[16.7vw]"} extraClasses={'top-0 left-0  translate-y-[100vh] translate-x-[55vw] -z-[1]'} />
              <Frame src={indicorHome} LEVEL={3} imageClasses={"h-[20.5vh]"}  extraClasses={'top-0 left-0  translate-y-[44vh] translate-x-[20vw] -z-[1]'} />

              <Frame src={ava1} LEVEL={2} extraClasses={'top-0 left-0  translate-y-[83vh] translate-x-[45vw] -z-10'} />
              <Frame src={haulerHub1} LEVEL={2}  extraClasses={'top-0 left-0  translate-y-[70vh] translate-x-[52vw] -z-[1]'} />
              <Frame src={haulerHub2} LEVEL={4}  extraClasses={'top-0 left-0  translate-y-[69vh] translate-x-[10vw] -z-[1]'} />
              <Frame src={rovixWomen} LEVEL={3}  extraClasses={'top-0 left-0  translate-y-[95vh] translate-x-[95vw] -z-[1]'} />
              <Frame src={vstream} LEVEL={3} imageWidth={"w-[16.1vw]"} extraClasses={'top-0 left-0  translate-y-[2vh] translate-x-[55vw] -z-[1]'} />
              
              <ThreeDFrame src={ideation3d} LEVEL={1} extraClasses={'top-0 left-0  translate-y-[38vh] translate-x-[31vw] -z-[1]'} />
              <ThreeDFrame src={hhb3d} LEVEL={0} extraClasses={'top-0 left-0  translate-y-[78vh] translate-x-[30vw] -z-[1]'} />
              <ThreeDFrame src={hhb3d2} LEVEL={1} extraClasses={'top-0 left-0  translate-y-[80vh] translate-x-[63vw] -z-[1]'} />
              <ThreeDFrame src={weight3d} LEVEL={2} extraClasses={'top-0 left-0  translate-y-[88vh] translate-x-[23vw] -z-[1]'} />

              <Frame src={aiAssistant} LEVEL={3}  extraClasses={'top-0 left-0  translate-y-[60vh] translate-x-[35.5vw] z-20'} />
              <Frame src={graph} LEVEL={3}  extraClasses={'top-0 left-0  translate-y-[29vh] translate-x-[92vw] z-[1]'} />
              <Frame src={avaWeb3} LEVEL={4}  extraClasses={'top-0 left-0  translate-y-[50vh] translate-x-[52vw] z-20'} />
              <Frame src={vstream2} LEVEL={3} imageWidth={"w-[14vw]"} extraClasses={'top-0 left-0  translate-y-[47vh] translate-x-[-2vw] z-20'} />
              <Frame src={mercury2} LEVEL={3}  extraClasses={'top-0 left-0  translate-y-[66vh] translate-x-[-6vw] -z-20'} />
              <Frame src={sony} LEVEL={2}  extraClasses={'top-0 left-0  translate-y-[42vh] translate-x-[90vw] z-0'} />
              <Frame src={rovixProducts} LEVEL={3}  extraClasses={'top-0 left-0  translate-y-[60vh] translate-x-[90vw] z-20'} />
              <Frame src={mapView} LEVEL={3}  extraClasses={'top-0 left-0  translate-y-[93vh] translate-x-[30.5vw] -z-20'} />

              {/* Videos */}
              <Frame src={foundation1} isVideo LEVEL={2}  extraClasses={'top-0 left-0  translate-y-[0vh] translate-x-[29vw] -z-20 '} />
              <Frame src={techIND} isVideo LEVEL={2}  extraClasses={'top-0 left-0  translate-y-[37vh] translate-x-[42vw] -z-20 '} />
              <Frame src={haulerHub} isVideo LEVEL={2}  extraClasses={'top-0 left-0  translate-y-[115vh] translate-x-[76vw] -z-20 '} />
              <Frame src={indicor} isVideo LEVEL={3}  extraClasses={'top-0 left-0  translate-y-[65vh] translate-x-[72vw] -z-20 '} />

          </div>
      </div>
  );
}

export default TunnelingSection;