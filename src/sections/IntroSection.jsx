import PatternSection from '../components/Intro/PatternSection';
import StarfieldSection from '../components/Intro/StarfieldSection';
import WhiteLogoSection from '../components/Intro/WhiteLogoSection';
import React, { useEffect, useRef } from 'react';
import pixelBg from '../assets/Pixelbackground.svg';
import Cloud1 from '../svg/intro/Cloud1';
import Cloud2 from '../svg/intro/Cloud2';
import Cloud3 from '../svg/intro/Cloud3';
import Key from '../svg/intro/Key';
import KeyShadow from '../svg/intro/KeyShadow';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectSection from './ProjectSection';
import VavBranding from './VavBranding';

gsap.registerPlugin(ScrollTrigger);

function IntroSection({scrollerRef,projectSectionRef}) {
  const containerRef = useRef();
  const contentRef = useRef();
  const keyRef = useRef();
  const keyShadowRef = useRef();
  const text1Ref = useRef();
  const text2Ref = useRef();
  const dotRef = useRef();
  const bgRef = useRef();
  const bgImageRef = useRef();

  //Maintains all references here
  const patternContainer = useRef();
  const starfieldContainer = useRef();
  const whiteLogoContainer = useRef();
  const brandingRef = useRef();

  useEffect(() => {
    let ctx;
  
    const calculateBoundingBox = () => {
      const dotRect = dotRef.current?.getBoundingClientRect();
  
      if (dotRef.current && dotRect) {
        ctx = gsap.context(() => {
          let introTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: contentRef.current, // Set to contentRef for scroll-based trigger
              start: "top 80%", // Start when the top of contentRef aligns with the top of the viewport
              end: "bottom bottom", // End when the center of contentRef aligns with the center of the viewport
              scrub: true, // Smooth scrubbing
            },
          });
  
          let transformValueX = dotRect.left;
          let transformValueY = dotRect.top;
  
          introTimeline
            .fromTo(
              text1Ref.current,
              {
                width: "0%",
              },
              {
                width: "100%",
                duration: 1,
              }
            )
            .fromTo(
              text2Ref.current,
              {
                width: "0%",
              },
              {
                width: "100%",
                duration: 1,
              }
            )
            .fromTo(
              keyRef.current,
              {
                y: `-200vh`, // Start from top infinity
              },
              {
                y: `320%`, // End at the current position
                duration: 2, // Adjust speed if necessary
              },
              "+=0"
            )
            .fromTo(
              keyShadowRef.current,
              {
                y: `100vh`, // Start from top infinity
                opacity: 0,
                scale: 0,
              },
              {
                y: `325%`, // End at the current position
                opacity: 1,
                scale: 1.25,
                duration: 2, // Adjust speed if necessary
              },
              "-=2"
            )
            .to(bgRef.current, {
              scale: 12.5,
              transformOrigin: `${transformValueX + 0.035 * transformValueX}px ${
                transformValueY + 0.55 * transformValueY
              }px`,
              ease: "expoScale(1, 12.5, power2.inOut)",
            })
            .to(
              contentRef.current,
              {
                zIndex: -10,
                display: "none",
                duration: 0.15,
              },
              "-=0.5"
            )
            .to(
              bgRef.current,
              {
                zIndex: -50,
                duration: 0.15,
              },
              "-=0.15"
            )
            .to(
              text2Ref.current,
              {
                opacity: 0,
                duration: 0.15,
              },
              "-=0.15"
            )
            .to(
              patternContainer.current,
              {
                opacity: 1,
              },
              "-=0.4"
            );
        }, containerRef.current);
      }
    };
  
    //To get the references updated
    requestAnimationFrame(calculateBoundingBox);
  
    return () => ctx && ctx.revert();
  }, []);
  

  return (
    <div ref={containerRef} className="min-h-[1400vh] relative min-w-screen max-w-screen " style={{overflow:"clip"}}>
      <div ref={bgRef} style={{willChange : "transform"}}
        className="sticky top-0 w-full max-h-[100vh] overflow-hidden aspect-video bg-[#d3d6db] z-10 ease-linear">
        <p ref={text1Ref}
          className="absolute top-10 left-[25%] bg-black bg-clip-text text-transparent text-ultra-90 xl:text-ultra-150 pl-[2%] font-neue-bit whitespace-nowrap overflow-hidden">

          Unlock brilliance,
        </p>
        <div ref={text2Ref}
          className="absolute flex top-[6.5rem] xl:top-36 left-[25%] text-ultra-90 xl:text-ultra-150 font-neue-bit whitespace-nowrap pb-6 overflow-hidden ">
          one pixel at a time<p ref={dotRef}>.</p>
        </div>
        <div ref={bgImageRef} className="absolute top-0 left-0 w-full max-w-screen aspect-video overflow-hidden">
          <img src={pixelBg} alt="" className="object-cover background-svg h-full" />
        </div>
        <div className="absolute bottom-[4rem] left-[4rem]">
          <p className="text-4xl font-neue-bit">Made in Dubai</p>
        </div>
        <div className="absolute -z-10 top-[30%] left-[23%] w-[150px] h-[50px]   drop-shadow-lg mix-blend-hard-light">
          <Cloud1 />
        </div>
        <div
          className="absolute -z-10 top-0 left-0 w-[800px] h-[250px] -translate-x-[8%] translate-y-[80%] drop-shadow-lg mix-blend-hard-light">
          <Cloud2 />
        </div>
        <div className="absolute -z-10 top-[17%] right-0 w-[900px] h-[320px]   drop-shadow-lg mix-blend-hard-light">
          <Cloud3 />
        </div>

      </div>

      <div ref={contentRef} className="max-w-full min-h-[200vh]  relative flex flex-col items-center justify-center z-10">
        <div ref={keyRef} className="absolute top-0 left-0 w-[56%] h-[18%] translate-x-[40%]  scale-[1.25] z-40">
          <Key />
        </div>
        <div ref={keyShadowRef} className="absolute top-0 left-0 w-[56%] h-[19%] translate-x-[40%]  z-30">
          <KeyShadow />
        </div>

      </div>
      <PatternSection containerRef={patternContainer} nextContainer={starfieldContainer} />
      <StarfieldSection containerRef={starfieldContainer} nextContainer={whiteLogoContainer} />
      <WhiteLogoSection containerRef={whiteLogoContainer} projectSectionRef={projectSectionRef} brandingRef={brandingRef} scrollerRef={scrollerRef}  />
      <VavBranding combinedRef={brandingRef} />
      <ProjectSection containerRef={projectSectionRef} />
    </div>
  );
}

export default IntroSection;
