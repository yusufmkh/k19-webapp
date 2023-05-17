import React, { useState, useEffect } from 'react'

const Visa = () => {
  const [editState, setEditState] = useState(false)
  const [visaData, setVisaData] = useState({
    embassy: 'British Embassy Seoul',
    embassyAddress: 'Sejong-daero 19-gil 24, Seoul Jung-gu',
    embassyPhone: '+82 (0)2 3210 5500',
    applicantName: 'John Doe',
    studentId: '4031525',
    applicationStatus: 'Applied',
    visaStatus: 'Waiting'
  })

  useEffect(() => {
    let lData = localStorage.getItem('visaData') && JSON.parse(localStorage.getItem('visaData'))
    lData && setVisaData(lData)
  }, [])

  function handleEditClick() {
    setEditState(!editState)
  }

  function handleChange(e) {
    setVisaData({
      ...visaData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    localStorage.setItem('visaData', JSON.stringify(visaData))
    handleEditClick()
  }

  return (
    <>
      {editState ? (
        <div className="card">
          <div className='card-header' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}><span className='bold'>Edit Visa Information</span></div>
          <div className="card-body">
            <form method="post" onSubmit={handleSubmit}>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="item"><label>Full Name: <input name="applicantName" value={visaData.applicantName} onChange={e => handleChange(e)} /></label></div>
                    <div className="item"><label>StudentID: <input name="studentId" value={visaData.studentId} onChange={e => handleChange(e)} /></label></div>
                    <div className="item"><label>Application Status: <select name="applicationStatus" value={visaData.applicationStatus} onChange={e => handleChange(e)} >
                      <option value="In Progress">In Progress</option>
                      <option value="Applied">Applied</option>
                    </select></label></div>
                    <div className="item"><label>Visa Status: <select name="visaStatus" value={visaData.visaStatus} onChange={e => handleChange(e)} >
                      <option value="Not Applied">Not Applied</option>
                      <option value="Waiting">Waiting</option>
                      <option value="Granted" >Granted</option>
                    </select></label></div>
                  </div>
                  <div className="col">
                    <div className="item"><label>Embassy: <input name="embassy" value={visaData.embassy} onChange={e => handleChange(e)} /></label></div>
                    <div className="item"><label>Address: <input name="embassyAddress" value={visaData.embassyAddress} onChange={e => handleChange(e)} /></label></div>
                    <div className="item"><label>Phone: <input name="embassyPhone" value={visaData.embassyPhone} onChange={e => handleChange(e)} /></label></div>
                  </div>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className='card-header' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}><span className='bold'>Visa Infomation</span><button type='button' className='btn btn-primary' onClick={handleEditClick}>Edit information</button></div>
          <div className="card-body">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="item">Full Name: <span className='bold'>{visaData.applicantName}</span></div>
                  <div className="item">StudentID: <span className='bold'>{visaData.studentId}</span></div>
                  <div className="item">Application Status: <span className='bold'>{visaData.applicationStatus}</span></div>
                  <div className="item">Visa Status: <span className='bold'>{visaData.visaStatus}</span></div>
                </div>
                <div className="col">
                  <div className="item">Embassy: <span className='bold'>{visaData.embassy}</span></div>
                  <div className="item">Address: <span className='bold'>{visaData.embassyAddress}</span></div>
                  <div className="item">Phone: <span className='bold'>{visaData.embassyPhone}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Visa
