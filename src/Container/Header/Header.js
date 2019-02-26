import React from 'react'
import Navigation from './Navigation'

const header = props => {
  return (
    <header>
      LOGO
      <br />
      <Navigation routes={props.routes} />
    </header>
  )
}

export default header
