/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import { SiteContext, ContextProviderComponent } from '../context/mainContext'
import { titleIfy, slugify } from '../../utils/helpers'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify';
import { colors } from '../theme'
import CartLink from '../components/CartLink'

toast.configure({
  progressStyle: {
    background: colors.primary,
  }
})

const logo = require('../images/logo.png');

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <ContextProviderComponent>
        <SiteContext.Consumer>
          {
            context => {
              console.log('baselayout rerendering...')
              let { navItems: { navInfo: { data: links } } } = context

              links = links.map(link => ({
                name: titleIfy(link),
                link: slugify(link)
              }));
              links.unshift({
                name: 'Home',
                link: '/'
              })

              return (
                <div className="mainWrapper">
                  <nav>
                    <Link to="/">
                      <img className="logoImage" alt="Logo" src={logo} />
                    </Link>
                    <div className="linksContainer">
                      {
                        links.map((l, i) => (
                          <Link to={l.link} key={i}>
                            <p key={i} className="">{l.name}</p>
                          </Link>
                        ))
                      }
                    </div>
                    <CartLink></CartLink>
                  </nav>
                  <div className="">
                    <main className="">{children}</main>
                  </div>
                  <footer className="">
                    <div className="">
                      <span className="">Copyright © 2020 JAMstack Ecommerce. All rights reserved.</span>
                      <div className="">
                        <Link to="/admin">
                          <p className="">Admins</p>
                        </Link>
                      </div>
                    </div>
                  </footer>
                </div>
              )
            }
          }
        </SiteContext.Consumer>
      </ContextProviderComponent>
    )
  }
}

export default Layout
