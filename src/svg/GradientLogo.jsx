import React from 'react'

function GradientLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1080 1080">
      <defs>
        <pattern id="gradientPattern" patternUnits="objectBoundingBox" width="1" height="1">
          <image href="/assets/Meshgradient.svg" width="1080" height="1080" preserveAspectRatio="none" />
        </pattern>
      </defs>
      <g id="Layer_1">
        <path d="M961.3,420.3l-9-15.8-90.8-159.4-9.3-16.5h-490.2l-9.4,16.5-226.7,400.6-8.8,15.6,8.8,15.8,89.6,158,9.3,16.4h492.7l9.3-16.4,227-398.6,9-15.8-1.5-.3h0ZM610,660.9l86.8,154.7-12.1,6.8-86.4-153.9H154.2v-13.9h443.4l222.7-396.9,12.1,6.8-222.4,396.4h0Z" 
          fill="url(#gradientPattern)" />
      </g>
      <g id="Layer_2">
        <polygon points="610 660.9 696.8 815.6 684.7 822.4 598.3 668.5 154.2 668.5 154.2 654.6 597.6 654.6 820.3 257.7 832.4 264.5 610 660.9 610 660.9" 
          fill="#fff" />
      </g>
    </svg>
  )
}

export default GradientLogo