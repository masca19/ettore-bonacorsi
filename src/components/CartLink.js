import React from 'react'
import { SiteContext } from '../context/mainContext'
import { FaShoppingCart, FaCircle } from 'react-icons/fa';
import { Link } from "gatsby"
import { colors } from '../theme'
const { secondary } = colors

class CartLink extends React.Component {
  render() {
    let { context: { numberOfItemsInCart } = { numberOfItemsInCart: 0 } } = this.props
    return (
      <div>
        <div className="cartLink">
          <div>
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
            {
              numberOfItemsInCart > Number(0) && (
                <div>
                  <FaCircle color={secondary} size={12} />
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}


function CartLinkWithContext(props) {
  return (
    <SiteContext.Consumer>
      {
        context => <CartLink {...props} context={context} />
      }
    </SiteContext.Consumer>
  )
}


export default CartLinkWithContext