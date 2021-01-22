import React from 'react'
import { Link } from 'gatsby'
import Image from '../Image'

const DisplayMedium = ({ imageSrc, title, subtitle, link }) => {
  return (
    <div className="displayMedium">
      <Link to={`/${link}`}>
        <div>
          <Image src={imageSrc} alt={title} />
        </div>
        <div>
          <p>{title}</p>
          <p>{subtitle}</p>
        </div>
      </Link>
    </div>
  )
}

export default DisplayMedium;