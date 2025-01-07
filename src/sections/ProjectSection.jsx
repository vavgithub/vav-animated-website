import React from 'react'
import dottedPattern from '../assets/DottedPattern.svg'

function ProjectSection({containerRef}) {
  return (
    <div ref={containerRef} className='sticky opacity-0 top-0 left-0 min-w-screen max-w-screen aspect-video bg-white'>
      <div className='w-full h-full max-h-screen overflow-hidden'>
          <img src={dottedPattern} alt="" className='w-full object-cover' />
      </div>
    </div>
  )
}

export default ProjectSection
