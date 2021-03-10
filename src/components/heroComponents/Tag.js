import React from 'react';

const Tag = ({ category, year }) => {
  return (
    <div className="tag">
      <p>{category}</p>
      { year && <p >{year}</p>}
    </div>
  )
}

export default Tag