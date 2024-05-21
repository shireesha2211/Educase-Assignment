import {Component} from 'react'
// import Cookies from 'js-cookies'

import {RiNewspaperLine} from 'react-icons/ri'
import {FaRegEyeSlash, FaFacebook, FaGoogle} from 'react-icons/fa'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showError: false,
    showLogo: true,
    showPassword: false,
    showSignUp: false,
  }

  onClickLogo = () => {
    this.setState({showLogo: false})
  }

  renderLogo = () => (
    <div className="container">
      <button className="app" type="button" onClick={this.onClickLogo}>
        Ka
        <RiNewspaperLine className="icon" />
        ar
      </button>
    </div>
  )

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  loginUser = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://newsapi.org/login'

    const options = {
      methods: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    console.log(data)

    if (response.ok) {
      const jwtToken = data.jwt_token
      const {history} = this.props
      //  Cookies.set('jwt_token', jwtToken, {
      //  expires: 30,
      //    path: '/',
      //  })
      history.replace('/')
    } else {
      const error = data.error_msg
      this.setState({showError: true, errorMsg: error})
    }
  }

  onClickSignUp = () => {
    this.setState(prevState => ({showSignUp: !prevState.showSignUp}))
  }

  renderLogin = () => {
    const {username, password, showPassword, showSignUp} = this.state
    return (
      <div className="loginContainer">
        {showSignUp ? (
          <h1 className="heading sub-heading">Hello!</h1>
        ) : (
          <h1 className="heading">
            Hello <br />
            <span className="sub-heading">Again!</span>
          </h1>
        )}
        <p className="para">
          {showSignUp
            ? 'Signup to get Started'
            : "Welcome back you've been missed"}
        </p>
        <form className="form-element" onSubmit={this.loginUser}>
          <label htmlFor="username" className="label-element">
            Username<span className="star">*</span>
          </label>
          <input
            type="text"
            id="username"
            value={username}
            className="input-element border"
            onChange={this.onChangeUsername}
          />
          <label htmlFor="password" className="label-element">
            Password<span className="star">*</span>
          </label>
          <div className="password-element">
            <input
              type={showPassword ? 'input' : 'password'}
              id="password"
              className="input-element no-border"
              value={password}
              onChange={this.onChangePassword}
            />
            <button
              type="button"
              className="button"
              onClick={this.onClickShowPassword}
            >
              <FaRegEyeSlash className="see-icon" />
            </button>
          </div>
          <div className="check-box-card">
            <div>
              <input type="checkbox" id="checkbox" className="checkbox" />
              <label htmlFor="checkbox" className="label-element">
                Remember me
              </label>
            </div>
            <p className="forgot-password">Forgot the password?</p>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <p className="or">or continue with</p>
        <div className="other-apps">
          <button type="button" className="app-button">
            <FaFacebook className="app-icon" />
            Facebook
          </button>
          <button type="button" className="app-button">
            <FaGoogle className="app-icon" /> Google
          </button>
        </div>
        <p className="sign-up">
          {!showSignUp ? "don't have an account?" : 'Already have an account?'}
          <button
            type="button"
            className="sign-up-button"
            onClick={this.onClickSignUp}
          >
            {!showSignUp ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    )
  }

  render() {
    const {showLogo} = this.state
    return <>{showLogo ? this.renderLogo() : this.renderLogin()}</>
  }
}

export default Login
