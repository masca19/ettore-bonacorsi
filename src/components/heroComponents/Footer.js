import React from 'react';

const Footer = ({ designer }) => {
  return (
    <div className="footer">
      <p>Design by</p>
      <p>{designer}</p>
    </div>
  )
}

export default Footer