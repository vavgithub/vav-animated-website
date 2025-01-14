import React from 'react'

const LEVELS = {
    1 : 'max-w-[10rem]',
    2 : 'max-w-[15rem]',
    3 : 'max-w-[20rem]',
    4 : 'max-w-[25rem]',
    5 : 'max-w-[30rem]',
}

function Frame({src,isVideo,extraClasses,LEVEL}) {
  return (
    <div className={LEVELS[LEVEL] + ' p-2 bg-[#eeecec] rounded-sm absolute ' + extraClasses}>
      {
        isVideo ? 
        <div>
            <video src={src}></video>
        </div>
        :
        <div className={LEVELS[LEVEL]}>
            <img src={src} alt="" className='object-cover w-full' />
        </div>
      }
    </div>
  )
}

export default Frame