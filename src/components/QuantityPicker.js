import React from 'react'

export default function QuantityPicker({
  increment, decrement, numberOfitems, hideQuantityLabel
}) {
  return (
    <div className={`quantifyPicker`}>
      {
        !hideQuantityLabel && (
          <div>QUANTITY</div>
        )
      }
      <button

        onClick={increment}
      >+</button>
      <p>{numberOfitems}</p>
      <button

        onClick={decrement}>-</button>
    </div>
  )
}