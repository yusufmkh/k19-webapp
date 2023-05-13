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
      url: '/dashboard/support',
      name: 'Support Chat'
    },
    {
      url: '/',
      name: 'Log Out'
    }
  ]

  const studentName = "Yusuf"
  return (
    <div className='container' style={{ margin: '0' }}>
      <div className='row dashboard'>
        <div className='col-3 sidebar'>
          <div className='sidebar__welcome'
            style={{
              padding: '10px',
              margin: '10px auto'
            }}
          >
            Welcome, {studentName}!
          </div>
          <div className='list-group' style={{ padding: '0', margin: '0' }}>
            {
              links.map(link => (
                <Link className='list-group-item' style={{ margin: '0' }} to={link.url}>
                  <span className='glyphicon glyphicon-briefcase'></span> <span>{link.name}</span>
                </Link>
              ))
            }
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