import React, { forwardRef } from 'react'

const LEVELS = {
    0 : 'max-w-[6vw]',
    1 : 'max-w-[8vw]',
    2 : 'max-w-[10vw]',
    3 : 'max-w-[14vw]',
    4 : 'max-w-[18vw]',
    5 : 'max-w-[22vw]',
}

export const ThreeDFrame = forwardRef(({src,isVideo,extraClasses,LEVEL,imageWidth,imageClasses},ref) => {
  return (
    <div ref={ref} className={LEVELS[LEVEL] + '  absolute ' + extraClasses}>
      {
        isVideo ? 
        <div>
            <video autoPlay={true} muted={true} loop={true} playsInline={true} src={src}></video>
        </div>
        :
        <div className={imageWidth ? imageWidth : LEVELS[LEVEL] + " " + imageClasses}>
            <img src={src} alt="" className='object-cover w-full' />
        </div>
      }
    </div>
  )
})

function Frame({src,isVideo,extraClasses,LEVEL,imageWidth,imageClasses},ref) {
  return (
    <div ref={ref} className={LEVELS[LEVEL] + ' p-2 bg-[#eeecec] rounded-sm absolute ' + extraClasses}>
      {
        isVideo ? 
        <div>
          <video autoPlay={true} muted={true} loop={true} playsInline={true} src={src} />
        </div>
        :
        <div className={imageWidth ? imageWidth : LEVELS[LEVEL] + " " + imageClasses}>
            <img src={src} alt="" className='object-cover w-full' />
        </div>
      }
    </div>
  )
}

export default forwardRef(Frame)