import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidenav() {
  return (
    <div>
        
      <ul type="none">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/habits">Habits</Link>
        </li>
        <li>
          <Link to="/archive">Archive</Link>
        </li>
      </ul>
    </div>
  )
}
