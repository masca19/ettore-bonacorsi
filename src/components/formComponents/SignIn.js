import React from 'react'
class SignIn extends React.Component {
  state = {
    username: '', password: ''
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }
  render() {
    return (
      <div>
        <h3>Sign In</h3>
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
                <label htmlFor="password">
                  Password
                </label>
                <input
                  onChange={this.onChange} name="password"
               id="password" type="password" placeholder="******************" />
              </div>
              <div>
                <button onClick={() => this.props.signIn(this.state)} type="button">
                  Sign In
                </button>
                <a href="#">
                  Forgot Password?
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

export default SignIn
