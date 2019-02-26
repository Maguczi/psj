import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = props => {
  return (
    <nav>
      <ul>
        {props.routes.map((route, i) => {
          return (
            <li key={i}>
              <Link to={route.path}>{route.component}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
