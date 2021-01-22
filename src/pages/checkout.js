import React, { useState } from "react"

import { SiteContext, ContextProviderComponent } from "../context/mainContext"
import { DENOMINATION } from "../../providers/inventoryProvider"
import { FaLongArrowAltLeft } from "react-icons/fa"
import { Link } from "gatsby"
import Image from "../components/Image"
import uuid from "uuid/v4"

import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_DvXwcKnVaaZUpWJIbh9cjgZr00IjIAjZAA")

function CheckoutWithContext(props) {
  return (
    <ContextProviderComponent>
      <SiteContext.Consumer>
        {context => (
          <Elements stripe={stripePromise}>
            <Checkout {...props} context={context} />
          </Elements>
        )}
      </SiteContext.Consumer>
    </ContextProviderComponent>
  )
}

const calculateShipping = () => {
  return 0
}

const Input = ({ onChange, value, name, placeholder }) => (
  <input
    onChange={onChange}
    value={value}
    className="mt-2 text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="text"
    placeholder={placeholder}
    name={name}
  />
)

const Checkout = ({ context }) => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [orderCompleted, setOrderCompleted] = useState(false)
  const [input, setInput] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    postal_code: "",
    state: "",
  })

  const stripe = useStripe()
  const elements = useElements()

  const onChange = e => {
    setErrorMessage(null)
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const { name, email, street, city, postal_code, state } = input
    const { total, clearCart } = context

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    // Validate input
    if (!street || !city || !postal_code || !state) {
      setErrorMessage("Please fill in the form!")
      return
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement)

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: { name: name },
    })

    if (error) {
      setErrorMessage(error.message)
      return
    }

    const order = {
      email,
      amount: total,
      address: state, // should this be {street, city, postal_code, state} ?
      payment_method_id: paymentMethod.id,
      receipt_email: "customer@example.com",
      id: uuid(),
    }
    console.log("order: ", order)
    // TODO call API
    setOrderCompleted(true)
    clearCart()
  }

  const { numberOfItemsInCart, cart, total } = context
  const cartEmpty = numberOfItemsInCart === Number(0)

  if (orderCompleted) {
    return (
      <div>
        <h3>Thanks! Your order has been successfully processed.</h3>
      </div>
    )
  }

  return (
    <div>
      <div>
        <div>
          <h1>Checkout</h1>
          <Link to="/cart">
            <div>
              <FaLongArrowAltLeft />
              <p>Edit Cart</p>
            </div>
          </Link>
        </div>

        {cartEmpty ? (
          <h3>No items in cart.</h3>
        ) : (
            <div>
              <div >
                {cart.map((item, index) => {
                  return (
                    <div key={index}>
                      <div>
                        <Image
                          src={item.image}
                          alt={item.name}
                        />
                        <p>
                          {item.name}
                        </p>
                        <div>
                          <p>
                            {DENOMINATION + item.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div>
                <div>
                  <div>
                    <form onSubmit={handleSubmit}>
                      {errorMessage ? <span>{errorMessage}</span> : ""}
                      <Input
                        onChange={onChange}
                        value={input.name}
                        name="name"
                        placeholder="Cardholder name"
                      />
                      <CardElement />
                      <Input
                        onChange={onChange}
                        value={input.email}
                        name="email"
                        placeholder="Email"
                      />
                      <Input
                        onChange={onChange}
                        value={input.street}
                        name="street"
                        placeholder="Street"
                      />
                      <Input
                        onChange={onChange}
                        value={input.city}
                        name="city"
                        placeholder="City"
                      />
                      <Input
                        onChange={onChange}
                        value={input.state}
                        name="state"
                        placeholder="State"
                      />
                      <Input
                        onChange={onChange}
                        value={input.postal_code}
                        name="postal_code"
                        placeholder="Postal Code"
                      />
                      <button
                        type="submit"
                        disabled={!stripe}
                        onClick={handleSubmit}
                        type="button"
                      >
                        Confirm order
                    </button>
                    </form>
                  </div>
                </div>
                <div>
                  <div>
                    <p>Subtotal</p>
                    <p>
                      {DENOMINATION + total}
                    </p>
                  </div>
                  <div>
                    <p>Shipping</p>
                    <p>
                      FREE SHIPPING
                  </p>
                  </div>
                  <div>
                    <p>Total</p>
                    <p>
                      {DENOMINATION + (total + calculateShipping())}
                    </p>
                  </div>
                  <button
                    type="submit"
                    disabled={!stripe}
                    onClick={handleSubmit}
                    type="button"
                  >
                    Confirm order
                </button>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default CheckoutWithContext
