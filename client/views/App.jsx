/**
 * Created by seal on 12/9/17.
 */

import { Link } from 'react-router-dom'
import React from 'react'
import Routes from '../config/router'

export default class App extends React.Component {
  componentDidMount() {
    // do something here
  }
  render() {
    return [
      <div key="banner">
        <Link to="/">首页</Link>
        <br />
        <Link to="/detail">详情页</Link>
      </div>,
      <Routes key="routes" />,
    ]
  }
}
