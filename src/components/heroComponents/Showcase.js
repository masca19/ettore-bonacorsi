import React from 'react'
import Image from '../Image'

const Showcase = ({ imageSrc }) => {
  return (
    <div className="showcase">
      <Image src={imageSrc} className="w-136" alt="Showcase item" />
    </div>
  )
}

export default Showcase