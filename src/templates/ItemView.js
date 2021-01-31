import React, { useState } from 'react'
import Popup from 'reactjs-popup'

import { SiteContext, ContextProviderComponent } from '../context/mainContext'
import Button from '../components/Button'
import Image from '../components/Image'
import QuantityPicker from '../components/QuantityPicker'

const ItemView = (props) => {
  const [numberOfitems, updateNumberOfItems] = useState(1)
  const item = props.pageContext.content
  const { price, image, name, description } = item
  const { context: { addToCart } } = props

  function addItemToCart(item) {
    item["quantity"] = numberOfitems
    addToCart(item)
  }

  function increment() {
    updateNumberOfItems(numberOfitems + 1)
  }

  function decrement() {
    if (numberOfitems === 1) return
    updateNumberOfItems(numberOfitems - 1)
  }

  return (
    <>
      <div>
        <div>
          <div>
            <Popup modal trigger={<img src={image} alt="Inventory item" />}>
              <Image src={image} alt="Inventory item" />
            </Popup>
          </div>
        </div>
        <div>
          <h1>{name}</h1>
          <h2>${price}</h2>
          <p>{description}</p>
          <div>
            <QuantityPicker
              increment={increment}
              decrement={decrement}
              numberOfitems={numberOfitems}
            />
          </div>
          <Button
            title="Add to Cart"
            onClick={() => addItemToCart(item)}
          />
        </div>
      </div>
    </>
  )
}


function ItemViewWithContext(props) {
  return (
    <ContextProviderComponent>
      <SiteContext.Consumer>
        {
          context => <ItemView {...props} context={context} />
        }
      </SiteContext.Consumer>
    </ContextProviderComponent>
  )
}


export default ItemViewWithContext
