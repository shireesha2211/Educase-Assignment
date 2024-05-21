// import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'
import './App.css'

// write your code here
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
)

export default App
