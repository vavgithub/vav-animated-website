import { useRef } from 'react';
import './App.css'
import './assets/fonts/customFonts.css';
import IntroSection from './sections/IntroSection';
import SmoothScrollWrapper from './utilities/SmoothScrollWrapper';
import scroller from './assets/Scrollbar.svg'

function App() {
    const projectSectionRef = useRef();
    const scrollerRef = useRef();

  return (
    <SmoothScrollWrapper>
      {/* Scroller */}
      <div ref={scrollerRef} className='opacity-0 fixed top-0 left-0 min-w-full w-screen min-h-screen max-h-screen z-[50] '>
          <div className='w-full max-h-screen translate-x-[93.5%] translate-y-[20%]'>
                <img src={scroller} alt="scroller.svg" className='max-h-[70vh] object-cover' />
          </div>
      </div>
      <div className=''>
      <IntroSection scrollerRef={scrollerRef} projectSectionRef={projectSectionRef}  />
      </div>
    </SmoothScrollWrapper>
  )
}

export default App
