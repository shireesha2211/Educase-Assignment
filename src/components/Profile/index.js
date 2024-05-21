import {Component} from 'react'
import {Link} from 'react-router-dom'

import {IoArrowBack} from 'react-icons/io5'

import './index.css'

class Profile extends Component {
  state = {
    username: '',
    email: '',
    fullname: '',
    phone: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeFullName = event => {
    this.setState({fullname: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePhone = event => {
    this.setState({phone: event.target.value})
  }

  renderProfile = () => {
    const {username, fullname, email, phone} = this.state
    return (
      <div className="profile-card" id="profileDetails">
        <div className="profile-sub-card">
          <Link to="/home">
            <button type="button" className="profile-button">
              <IoArrowBack className="arrow-icon" />
            </button>
          </Link>
          <h1 className="profile-heading">Fill your profile</h1>
        </div>
        <div className="profile-img"> </div>
        <form className="form-element">
          <label htmlFor="username" className="label-element">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            className="input-element "
            onChange={this.onChangeUsername}
          />
          <label htmlFor="fullname" className="label-element">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            value={fullname}
            className="input-element "
            onChange={this.onChangeFullname}
          />
          <label htmlFor="email" className="label-element">
            Email Address<span className="star">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            className="input-element "
            onChange={this.onChangeEmail}
          />
          <label htmlFor="phone" className="label-element">
            Phone Number<span className="star">*</span>
          </label>
          <input
            type="number"
            id="phone"
            value={phone}
            className="input-element "
            onChange={this.onChangePhone}
          />
          <button type="submit" className="submit-button">
            Next
          </button>
        </form>
      </div>
    )
  }

  render() {
    return <>{this.renderProfile()}</>
  }
}

export default Profile
