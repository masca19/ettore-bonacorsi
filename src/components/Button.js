import React from 'react';

export default function Button({ title, onClick }) {

  let classNames = ""

  return (
    <button onClick={onClick} className={classNames}>
      <div>
        {title}
      </div>
    </button>
  )
}