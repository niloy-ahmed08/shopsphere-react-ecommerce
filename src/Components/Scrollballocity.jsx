import React from 'react'
import ScrollVelocity from './ScrollVelocity/ScrollVelocity'
import gucci from '../assets/gucci.png'

const Scrollballocity = () => {
  return (
    <div className=' py-2  bg-black'>
      <ScrollVelocity
         texts={[
    <div className="flex items-center gap-10 mt-2">
      <img src={gucci} alt="Gucci" className="h-10 w-auto shrink-0" />
      <img src={gucci} alt="Gucci" className="h-10 w-auto shrink-0" />
      <img src={gucci} alt="Gucci" className="h-10 w-auto shrink-0" />
      <img src={gucci} alt="Gucci" className="h-10 w-auto shrink-0" />
    </div>
  ]}
  velocity={100}
  skewWithVelocity={0}
  scaleWithVelocity={0}
  draggable
  className="custom-scroll-text"
  numCopies={6}
  damping={50}
  stiffness={400}
  separator=""
  fadeEdges={false}
  outlineAlternate={false}
  gap={40}
  pauseOnHover={false}
/>
    </div>
  )
}

export default Scrollballocity
