import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

const header = props => {
  return (
    <header>
      <Link to="/">LOGO</Link>
      <br />
      <Navigation routes={props.routes} />
    </header>
  )
}

export default header
