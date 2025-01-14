import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Frame from './Frame';
import beautiful from '../../assets/projects/Beautiful.png'

function TunnelingSection({ containerRef }) {
  const squares = useRef(Array(6).fill().map(() => React.createRef()));

  const letterRef = useRef();

  useEffect(() => {

    // Create GSAP context
    let ctx = gsap.context(() => {
      // Create the timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'center 90%',
          end: 'bottom bottom',
          scrub: 1,
          markers: true
        }
      });
      squares.current[5].current.style.overflow = "hidden"
      // Animate each square
      squares.current.forEach((squareRef, i) => {
        const initialScale = i * 5;
        const initialRotation = i * 10;
        const initialOpacity = i < 3 ? 0 : 1

        tl.to(squareRef.current, {
          scale: initialScale * 10,
          rotation: initialRotation - 360,
          opacity: initialOpacity === 0 ? 1 : 0,
          duration: 1.5,
          ease: 'none'
        }, 0);
      });

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
      },"-=1.4") 

    }, containerRef); // Scope to our component
    // Cleanup
    return () => ctx.revert();
  }, [containerRef]);

  return (
      <div 
        ref={containerRef} 
        className='sticky opacity-0 top-0 left-0 min-w-screen max-w-screen aspect-video  overflow-x-clip ' style={{zIndex:100}}
      >
        <div className="h-screen w-full flex justify-center items-center">
          {squares.current.map((squareRef, index) => (
            <div
              key={index}
              ref={squareRef}
              className="absolute border border-black"
              style={{
                width: "5rem",
                height: "5rem",
                background : "white",
                zIndex : 150 - (index * 10),
                scale: (index * 10),
                rotate: `${index * 10}deg`,
                opacity:  index < 3 ? 0 : 1
              }}
            />
          ))}
          <div ref={letterRef} className='opacity-0 flex flex-col gap-4 xl:gap-10'>
            <h1 className='text-ultra-90 xl:text-ultra-120 min-[1600px]:text-ultra-150 font-goia whitespace-nowrap'>
            Let's do this 
            </h1>
            <h1 className='text-center text-ultra-90 xl:text-ultra-120 min-[1600px]:text-ultra-150 font-editorial-italic whitespace-nowrap'>
            together
            </h1>
          </div>
        </div>
          <div className='absolute top-0 left-0 w-screen min-h-screen'>
            {/* <div className='relative w-full h-full'>
              <Frame src={beautiful} LEVEL={2} extraClasses={'top-5 left-24'} />
            </div> */}
          </div>
      </div>
  );
}

export default TunnelingSection;