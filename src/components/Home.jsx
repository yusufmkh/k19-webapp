import React from 'react'
import { Link } from 'react-router-dom'
import dashboardImg from '../assets/dashboardImg.png'


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
        <Link className="btn btn-primary btn-lg" to="/dashboard" style={{ margin: '20px auto' }}>Student Dashboard</Link>
        <img src={dashboardImg} alt='Dashboard' className='dashboard-photo' />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Home