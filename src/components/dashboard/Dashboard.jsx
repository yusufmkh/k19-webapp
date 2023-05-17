import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Dashboard = () => {

  const links = [
    {
      url: '/dashboard',
      name: 'My Application'
    },
    {
      url: '/dashboard/visa',
      name: 'Visa Information'
    },
    {
      url: '/',
      name: 'Log Out'
    }
  ]

  const studentName = "Student"
  return (
    <div className='container dashboard-container'>
      <div className='row dashboard'>
        <div className='col-3 sidebar'>
          <div className="sidebar-main">
            <div className='sidebar__welcome'
              style={{
                padding: '10px',
                margin: '10px auto'
              }}
            >
              Welcome, {studentName}!
            </div>
            <div className='list-group'>
              {
                links.map(link => (
                  <Link className='list-group-item' to={link.url}>
                    <span className='glyphicon glyphicon-briefcase'></span> <span>{link.name}</span>
                  </Link>
                ))
              }
            </div>
          </div>
          <div className="copyright">
            &copy; 2023 Student Application Web App by Yusuf Muysinkhanov.
          </div>
        </div>
        <div className="col-9 main">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard 