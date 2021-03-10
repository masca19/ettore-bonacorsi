import React from 'react'

class SignUp extends React.Component {
  state = {
    username: '', email: '', password: ''
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }
  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <div>
          <div>
            <form>
              <div>
                <label htmlFor="username">
                  Username
                </label>
                <input
                  onChange={this.onChange} name="username"
               id="username" type="text" placeholder="Username" />
              </div>
              <div>
                <label htmlFor="email">
                  Email
                </label>
                <input
                  onChange={this.onChange} name="email"
               id="email" placeholder="Email address" />
              </div>
              <div>
                <label htmlFor="password">
                  Password
                </label>
                <input
                  onChange={this.onChange} name="password"
               id="password" type="password" placeholder="******************" />
              </div>
              <div>
                <button onClick={() => this.props.signUp(this.state)} type="button">
                  Sign Up
                </button>
                <a href="#" onClick={() => this.props.toggleFormState('signIn')}>
                  Already signed up?
                </a>
              </div>
            </form>
            <p>
              &copy;2020 JAMstack ECommerce. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp