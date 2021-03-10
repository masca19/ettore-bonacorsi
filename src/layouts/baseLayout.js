/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import { SiteContext, ContextProviderComponent } from "../context/mainContext"
import { titleIfy, slugify } from "../../utils/helpers"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"
import { colors } from "../theme"
import CartLink from "../components/CartLink"
import Header from "../components/Header"

toast.configure({
  progressStyle: {
    background: colors.primary,
  },
})

const logo = require("../images/logo.png")

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <ContextProviderComponent>
        <SiteContext.Consumer>
          {context => {
            console.log("baselayout rerendering...")
            let {
              navItems: {
                navInfo: { data: links },
              },
            } = context

            links = links.map(link => ({
              name: titleIfy(link),
              link: slugify(link),
            }))
            links.unshift({
              name: "Home",
              link: "/",
            })

            return (
              <div>
                <nav>
                  <Link to="/">
                    <img alt="Logo" src={logo} />
                  </Link>
                  <div className="links">
                    {links.map((l, i) => (
                      <Link to={l.link} key={i}>
                        <p key={i} className="link">
                          {l.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                  <CartLink></CartLink>
                </nav>
                <Header></Header>
                <div>
                  <main>{children}</main>
                </div>
                <footer>
                  <div>
                    <span>
                      Copyright © 2020 JAMstack Ecommerce. All rights reserved.
                    </span>
                    <div>
                      <Link to="/admin">
                        <p>Admins</p>
                      </Link>
                    </div>
                  </div>
                </footer>
              </div>
            )
          }}
        </SiteContext.Consumer>
      </ContextProviderComponent>
    )
  }
}

export default Layout
