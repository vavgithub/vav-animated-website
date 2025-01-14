import { useEffect, useRef, useState } from 'react';
import './App.css'
import './assets/fonts/customFonts.css';
import IntroSection from './sections/IntroSection';
import SmoothScrollWrapper from './utilities/SmoothScrollWrapper';
import scroller from './assets/Scrollbar.svg'
import navigationStar from './assets/NavigationStar.svg'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP,ScrollTrigger);

function App() {
    const projectSectionRef = useRef();
    const scrollerRef = useRef();
    const scrollableAreaRef = useRef();
    const starRef = useRef();

    useEffect(() => {
            const ctx = gsap.context(() => {
                // Create ScrollTrigger animation
                gsap.to(starRef.current, {
                    scrollTrigger: {
                        trigger: scrollableAreaRef.current, // Element that triggers the ScrollTrigger
                        start: "35% top", // Start when the top of the scroller meets the top of the viewport
                        end: "bottom bottom", // End when the bottom of the scroller leaves the bottom of the viewport
                        scrub: true, // Smooth scrubbing
                        // markers : true
                    },
                    y: "78vh", // Move the star down vertically
                    rotation: 1800, // Rotate the star for 5 sections (360 * 5)
                    ease: "power1.inOut", // Easing function
                }); 
            }, [scrollerRef, starRef]);

            return () => ctx.revert(); // Cleanup on unmount or dependency change
    }, []); 


  return (
    <SmoothScrollWrapper>
      {/* Scroller */}
      <div ref={scrollerRef} className='opacity-0 fixed top-0 left-0 min-w-full w-screen min-h-screen max-h-full z-[150] '>
          <div className='w-full max-h-screen translate-x-[93.5%] translate-y-[20%]'>
                <img src={scroller} alt="scroller.svg" className='max-h-[70vh] object-cover' />
          </div>
          <div ref={starRef} className='absolute top-0 left-0 w-[5vh] translate-x-[93.15vw] translate-y-[14.5vh] aspect-square'>
            <img src={navigationStar} alt="star.svg" className='w-full object-cover' />
          </div>
      </div>
      <div ref={scrollableAreaRef} className=''>
        <IntroSection scrollerRef={scrollerRef} projectSectionRef={projectSectionRef} />
      </div>
    </SmoothScrollWrapper>
  )
}

export default App
