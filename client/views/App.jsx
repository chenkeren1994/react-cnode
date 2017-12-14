/**
 * Created by seal on 12/9/17.
 */

import React from 'react'
import Routes from '../config/router'
import MainAppBar from './layout/app-bar'

export default class App extends React.Component {
  componentDidMount() {
    // do something here
  }
  render() {
    return [
      <MainAppBar key="app-bar" />,
      <Routes key="routes" />,
    ]
  }
}
