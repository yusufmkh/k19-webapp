import React, { useEffect, useState } from 'react'

const Application = () => {
  const [editState, setEditState] = useState(false)
  const [data, setData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    dob: '20/12/2001',
    email: 'johndoe@test.com',
    phone: '+17594247043',
    applicantCountry: 'Korea',
    intakeYear: '2024',
    degreeType: 'Undergraduate',
    course: 'BSc (Hons) Computer Science'
  });

  useEffect(() => {
    let lData = localStorage.getItem('data') && JSON.parse(localStorage.getItem('data'))
    lData && setData(lData)
  }, [])

  function handleEditClick() {
    setEditState(!editState)
  }

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    localStorage.setItem('data', JSON.stringify(data))
    handleEditClick()
  }

  return (
    <>
      {editState ? (
        <div className="card">
          <div className='card-header' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}><span className='bold'>Edit Application</span></div>
          <div className="card-body">
            <form method="post" onSubmit={handleSubmit}>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="item"><label>First name: <input name="firstName" value={data.firstName} onChange={e => handleChange(e)} /></label></div>
                    <div className="item"><label>Last name: <input name="lastName" value={data.lastName} onChange={e => handleChange(e)} /></label></div>
                    <div className="item"><label>Date of birth: <input name="dob" value={data.dob} onChange={e => handleChange(e)} /></label></div>
                    <div className="item"><label>Contact Number: <input name="phone" value={data.phone} onChange={e => handleChange(e)} /></label></div>
                    <div className="item"><label>Country: <input name="applicatCountry" value={data.applicantCountry} onChange={e => handleChange(e)} /></label></div>
                  </div>
                  <div className="col">
                    <div className="item"><label>Email: <input name="email" value={data.email} onChange={e => handleChange(e)} /></label></div>
                    <div className="item"><label>Course: <input name="course" value={data.course} onChange={e => handleChange(e)} /></label></div>
                    <div className="item"><label>Intake Year: <input name="intakeYear" value={data.intakeYear} onChange={e => handleChange(e)} /></label></div>
                    <div className="item"><label>Degree: <input name="degreeType" value={data.degreeType} onChange={e => handleChange(e)} /></label></div>
                  </div>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className='card-header' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}><span className='bold'>My Application</span><button type='button' className='btn btn-primary' onClick={handleEditClick}>Edit information</button></div>
          <div className="card-body">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="item">First name: <span className='bold'>{data.firstName}</span></div>
                  <div className="item">Last name: <span className='bold'>{data.lastName}</span></div>
                  <div className="item">Date of birth: <span className='bold'>{data.dob}</span></div>
                  <div className="item">Contact Number: <span className='bold'>{data.phone}</span></div>
                  <div className="item">Country: <span className='bold'>{data.applicantCountry}</span></div>
                </div>
                <div className="col">
                  <div className="item">Email: <span className='bold'>{data.email}</span></div>
                  <div className="item">Course: <span className='bold'>{data.course}</span></div>
                  <div className="item">Intake Year: <span className='bold'>{data.intakeYear}</span></div>
                  <div className="item">Degree: <span className='bold'>{data.degreeType}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Application
