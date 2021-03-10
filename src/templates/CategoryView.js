import React from 'react'
import ListItem from '../components/ListItem'
import { titleIfy, slugify } from '../../utils/helpers'

const CategoryView = (props) => {
  const { pageContext: { title, content: { items = [] } } } = props
  return (
    <>
      <div>
        <div>
          <div>
            <h1>{titleIfy(title)}</h1>
          </div>

          <div>
            <div>
              {
                items.map((item, index) => {
                  return (
                    <ListItem
                      key={index}
                      link={slugify(item.name)}
                      title={item.name}
                      price={item.price}
                      imageSrc={item.image}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryView