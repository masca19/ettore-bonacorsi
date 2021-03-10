import React from 'react'
import { SiteContext, ContextProviderComponent } from '../context/mainContext'
import { FaTimes, FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'gatsby'
import QuantityPicker from '../components/QuantityPicker'
import { slugify } from '../../utils/helpers'
import Image from '../components/Image'
const DENOMINATION = '€';

const Cart = ({ context }) => {
  const {
    numberOfItemsInCart, cart, removeFromCart, total, setItemQuantity
  } = context
  const cartEmpty = numberOfItemsInCart === Number(0)

  function increment(item) {
    item.quantity = item.quantity + 1
    setItemQuantity(item)
  }

  function decrement(item) {
    if (item.quantity === 1) return
    item.quantity = item.quantity - 1
    setItemQuantity(item)
  }

  return (
    <>
      <div>
        <div>
          <div>
            <h1>Your Cart</h1>
          </div>

          {
            cartEmpty ? (
              <h3>No items in cart.</h3>
            ) : (
                <div>
                  <div>
                    {
                      cart.map((item) => {
                        return (
                          <div key={item.id}>

                            { /* Responsive - Desktop */}
                            <div>
                              <Link to={slugify(item.name)}>
                                <Image className="w-32 m-0" src={item.image} alt={item.name} />
                              </Link>
                              <Link to={slugify(item.name)}>
                                <p>
                                  {item.name}
                                </p>
                              </Link>
                              <div>
                                <QuantityPicker
                                  numberOfitems={item.quantity}
                                  increment={() => increment(item)}
                                  decrement={() => decrement(item)}
                                />
                              </div>
                              <div >
                                <p>
                                  {DENOMINATION + item.price}
                                </p>
                              </div>
                              <button onClick={() => removeFromCart(item)}>
                                <FaTimes />
                              </button>
                            </div>

                            { /* Responsive - Mobile */}
                            <div>
                              <Link to={slugify(item.name)}>
                                <Image src={item.image} alt={item.name} />
                              </Link>
                              <div>
                                <Link to={slugify(item.name)}>
                                  <p>
                                    {item.name}
                                  </p>
                                </Link>
                                <div>
                                  <QuantityPicker
                                    hideQuantityLabel
                                    numberOfitems={item.quantity}
                                    increment={() => increment(item)}
                                    decrement={() => decrement(item)}
                                  />
                                </div>
                                <div>
                                  <p>
                                    {DENOMINATION + item.price}
                                  </p>
                                </div>
                              </div>
                              <div role="button" onClick={() => removeFromCart(item)}>
                                <FaTimes />
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
          }
          <div>
            <p>Total</p>
            <p>{DENOMINATION + total}</p>
          </div>
          {!cartEmpty && (
            <Link to="/checkout">
              <div>
                <p>Proceed to check out</p>
                <FaLongArrowAltRight />
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

function CartWithContext(props) {
  return (
    <ContextProviderComponent>
      <SiteContext.Consumer>
        {
          context => <Cart {...props} context={context} />
        }
      </SiteContext.Consumer>
    </ContextProviderComponent>
  )
}


export default CartWithContext