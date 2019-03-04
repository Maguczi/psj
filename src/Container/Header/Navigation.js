import React from 'react'
import { Link } from 'react-router-dom'

const navigation = props => {
  console.log('Container %c"navigation"', 'color: #8EDAFF', 'loaded');

  return (
    <nav>
      <ul>
        {props.routes.map((route, i) => {
          return (
            <li key={i}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default navigation
