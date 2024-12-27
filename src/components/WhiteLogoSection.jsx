import React, { useRef } from 'react'
import vavCube from '../assets/vavcube.svg';

function WhiteLogoSection({containerRef}) {
    const vavCubeRef = useRef();
    
  return (
    <div
      ref={containerRef}
      className="opacity-0 sticky top-0 left-0 aspect-video min-w-full max-w-screen bg-white"
    >
    <div ref={vavCubeRef} className='absolute top-0 left-0 w-[calc(100%/11)] scale-[2.4] aspect-square translate-x-[45vw] translate-y-[40vh]'>
        <img src={vavCube} alt="vav_cube.svg" className='object-cover w-full' />
    </div>
    </div>
  )
}

export default WhiteLogoSection
