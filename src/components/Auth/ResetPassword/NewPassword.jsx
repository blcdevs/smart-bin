import React from 'react'

function NewPassword() {
  return (
    <div className='auth-wrapper'>
        <h1>Waste Management App</h1>
        <form className="auth-form">
            <h2>Change Password</h2>
            <label>New Password</label>
            <input 
                type="password" 
                placeholder='Enter New Password'
            />
            <label>Confirm Password</label>
            <input 
                type="password" 
                placeholder='Confirm Password'
            />
            <a href="/confirmation" className='signin-btn'>Confirm</a>
            <div>
            </div>
        </form>
    </div>
  )
}

export default NewPassword