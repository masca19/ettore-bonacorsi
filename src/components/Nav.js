import React from 'react'

import { titleIfy, slugify } from '../../utils/helpers'
import { FaShoppingCart, FaCircle } from 'react-icons/fa';
import { Link } from "gatsby"

import { SiteContext, ContextProviderComponent } from '../context/mainContext'

class Nav extends React.Component {
  render() {
    let { numberOfItemsInCart, navItems: { navInfo: { data: links } } } = this.props.context

    links = links.map(link => {
      const newLink = {}
      newLink.link = slugify(link)
      newLink.name = titleIfy(link)
      return newLink
    })
    links.unshift({ name: 'Home', link: '/' })
    return (
      <>
        <div className="nav">
          {
            links.map((l, i) => (
              <Link to={l.link} key={i}>
                <p key={i}>{l.name}</p>
              </Link>
            ))
          }
        </div>
        <div>
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
          {
            numberOfItemsInCart > Number(0) && (
              <div>
                <FaCircle />
              </div>
            )
          }
        </div>
      </>
    )
  }
}

function NavWithContext(props) {
  return (
    <ContextProviderComponent>
      <SiteContext.Consumer>
        {
          context => <Nav {...props} context={context} />
        }
      </SiteContext.Consumer>
    </ContextProviderComponent>
  )
}

export default NavWithContext
