import React from 'react';
import { Button } from '../';
import { navigate } from "gatsby"

const Center = ({ price, title, link }) => {
  function navigateTo() {
    navigate(link)
  }

  return (
    <div>
      <p className="center">{title}</p>
      <p>FROM <span>${price}</span></p>
      <Button
        onClick={navigateTo}
        title="Shop Now"
      />
    </div>
  )
}

export default Center