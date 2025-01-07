import React from 'react'
import vavCube from '../assets/vavcube.svg';
import TextLogo from '../svg/textLogo';
import TextLogoShadow from '../svg/TextLogoShadow';
import GradientLogo from '../svg/GradientLogo';

function VavBranding({combinedRef}) {
  return (
    <div ref={combinedRef} className='fixed opacity-0 top-0 right-0 z-[50] min-w-screen max-w-screen min-h-screen max-h-screen'>
      <div className='flex justify-center scale-[0.5] items-center'>
        <div className=' w-[calc(100vw/11)]   aspect-square ' >
                <img src={vavCube} alt="vav_cube.svg" className='object-cover w-full' />
            <div className='absolute top-0 -left-0 w-[calc(100vw/11)]  aspect-square -z-10'>
                <GradientLogo/>
            </div>
        </div>
        <div className=' scale-[1.14]  translate-y-[3%]' style={{overflowX: "clip"}}>
            <div className='relative w-[calc(100vw/11)] '>
            <div className='absolute top-0 left-0 w-[calc(100vw/11)] '>
                <TextLogoShadow/>
            </div>
            <TextLogo/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VavBranding
