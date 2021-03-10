import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <span className="containerLogo"></span>
    <div className="containerCta">
      <button className="containerCta-login">Accedi</button>
      <button className="containerCta-cartButton">
        <Link to="/cart">Cart</Link>
      </button>
    </div>
  </header>
)

export default Header
