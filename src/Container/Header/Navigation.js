import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/tacos">Tacos</Link>
        </li>
        <li>
          <Link to="/sandwiches">Sandwiches</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
