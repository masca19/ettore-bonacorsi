import React from 'react'

class ConfirmSignUp extends React.Component {
  state = {
    username: '', authcode: ''
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
                <label htmlFor="authcode">
                  Authentication Code
                </label>
                <input
                onChange={this.onChange} name="authcode"
               id="authcode" type="authcode" />
              </div>
              <div>
                <button onClick={() => this.props.confirmSignUp(this.state)} type="button">
                  Confirm Sign Up
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

export default ConfirmSignUp