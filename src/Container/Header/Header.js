import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

const header = props => {
  console.log('Container %c"header"', 'color: #8EDAFF', 'loaded');

  return (
    <header>
      <Link to="/">LOGO</Link>
      <br />
      <Navigation routes={props.routes} />
    </header>
  )
}

export default header
