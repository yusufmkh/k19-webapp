import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">K19 Web App</Link>
        </div>
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">Login</Link>
          <Link className="nav-item nav-link" to="/">Register</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar