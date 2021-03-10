import React from 'react'
import { Link } from 'gatsby'
import { DENOMINATION } from '../../providers/inventoryProvider'
import Image from './Image'

const ListItem = ({ link, title, imageSrc, price }) => (
  <div className="listItem">
    <Link to={`/${link}`}>
      <div>
        <div>
          <Image alt={title} src={imageSrc} />
        </div>
      </div>
    </Link>
    <div>
      <p>{title}</p>
      <p>{`${DENOMINATION}${price}`}</p>
    </div>
  </div>
)

export default ListItem