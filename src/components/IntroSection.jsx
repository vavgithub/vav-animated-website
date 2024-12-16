import React, { useEffect, useRef } from 'react';
import pixelBg from '../assets/Pixelbackground.svg';
import Cloud1 from '../svg/intro/Cloud1';
import Cloud2 from '../svg/intro/Cloud2';
import Cloud3 from '../svg/intro/Cloud3';
import Key from '../svg/intro/Key';
import KeyShadow from '../svg/intro/KeyShadow';
import gsap, { Linear } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExpoScaleEase } from 'gsap/EasePack';

gsap.registerPlugin(ScrollTrigger);

function IntroSection() {
  const containerRef = useRef();
  const contentRef = useRef();
  const keyRef = useRef();
  const keyShadowRef = useRef();
  const text1Ref = useRef();
  const text2Ref = useRef();
  const dotRef = useRef();
  const bgRef = useRef();
    
  useEffect(() => {
    let ctx = gsap.context(() => {
      let introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: contentRef.current, // Set to contentRef for scroll-based trigger
          start: "top 80%", // Start when the top of contentRef aligns with the top of the viewport
          end: "bottom bottom", // End when the center of contentRef aligns with the center of the viewport
          scrub: true, // Smooth scrubbing
        }
      });

      const dotRect = dotRef.current.getBoundingClientRect()
      // Animation for the key and key shadow (from infinity to position)
      introTimeline
        .fromTo(text1Ref.current,{
          width:"0%",
        },{
          width:"100%",
          duration : 2
        })
        .fromTo(text2Ref.current,{
          width:"0%",
        },{
          width:"100%",
          duration : 2
        })
        .fromTo(keyRef.current, {
          y: "-250vh", // Start from top infinity
        }, {
          y: "295%",    // End at the current position
          duration: 2, // Adjust speed if necessary
        },"+=0")
        .fromTo(keyShadowRef.current, {
          y: "100vh", // Start from top infinity
          opacity : 0,
          scale : 0
        }, {
          y: "370%",    // End at the current position
          opacity : 1,
          scale : 1.25,
          duration: 2, // Adjust speed if necessary
        },"-=2")
        .to(bgRef.current, {
          scale : 5,
          transformOrigin:`${dotRect.left + 115}px ${dotRect.top}px`,
          ease: "expoScale(1, 5, power2.inOut)"  
        })
        .to(contentRef.current, {   
          zIndex : -10,
        },"-=0.5")
        .to(dotRef.current,{
          display: "none",
        })

    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-[300vh] relative min-w-screen max-w-screen " style={{overflow:"clip"}}>
      <div ref={bgRef} className="sticky top-0 w-full overflow-hidden min-h-[100vh] bg-[#d3d6db] z-10 ease-linear">
          <p ref={text1Ref} className="absolute top-10 left-[22%] bg-black bg-clip-text text-transparent  text-ultra-150 pl-10 font-neue-bit whitespace-nowrap overflow-hidden">

            Unlock brilliance,
          </p>
          <div ref={text2Ref} className="absolute flex top-36 left-[22%] text-ultra-150 font-neue-bit whitespace-nowrap pb-6 overflow-hidden ">
            one pixel at a time<p ref={dotRef} >.</p>
          </div>
        <div  className="w-full max-w-screen h-full max-h-[100vh] z-20 overflow-hidden">
          <img src={pixelBg} alt="" className="object-cover background-svg" />
        </div>
        <div className="absolute bottom-[4rem] left-[4rem]">
          <p className="text-4xl font-neue-bit">Made in Dubai</p>
        </div>
        <div className="absolute -z-10 top-[30%] left-[23%] w-[150px] h-[50px]   drop-shadow-lg mix-blend-hard-light">
          <Cloud1 />
        </div>
        <div className="absolute -z-10 top-0 left-0 w-[800px] h-[250px] -translate-x-[8%] translate-y-[80%] drop-shadow-lg mix-blend-hard-light">
          <Cloud2 />
        </div>
        <div className="absolute -z-10 top-[17%] right-0 w-[900px] h-[320px]   drop-shadow-lg mix-blend-hard-light">
          <Cloud3 />
        </div>

      </div>

      <div
        ref={contentRef}
        className="max-w-full min-h-[200vh]  relative flex flex-col items-center justify-center z-10"
      >   
        <div
          ref={keyRef}
          className="absolute top-0 left-0 w-[900px] h-[300px] translate-x-[38%] scale-[1.35] z-40"
        >
          <Key />
        </div>
        <div
          ref={keyShadowRef}
          className="absolute top-0 left-0 w-[900px] h-[320px] translate-x-[32%]  z-30"
        >
          <KeyShadow />
        </div>

      </div>
  </div>
  );
}

export default IntroSection;
