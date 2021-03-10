import React from 'react'
import { Link } from 'gatsby'
import { getTrimmedString } from '../../../utils/helpers'
import Image from '../Image'

const DisplaySmall = ({ link, title, subtitle, imageSrc }) => (
  <div className="displaySmall">
    <Link to={`/${link}`}>
      <div>
        <Image alt={title} src={imageSrc} />
      </div>
      <div>
        <p>{title}</p>
        <p>{getTrimmedString(subtitle, 150)}</p>
      </div>
    </Link>
  </div>
)

export default DisplaySmall