import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main className='jumbotron' style={{ background: "white", textAlign: "center" }}>
        <h1>
          Apply to Study at London South Bank University
        </h1>
        <Link className="btn btn-primary btn-lg" to="/dashboard">Student Dashboard</Link>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Home