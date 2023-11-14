import React from 'react'

function ResetPassword() {
  return (
    <div className='auth-wrapper'>
        <h1>Waste Management App</h1>
        <form className="auth-form">
            <h2>Reset Password</h2>
            <p className='enter-email'>Just enter the email address you registered with, and continue</p>
            <label>Email</label>
            <input 
                type="text" 
                placeholder='Enter Email'
            />
            <a href="/reset-password" className='signin-btn'>Send Link</a>
            <div>
                <a href="/">Go to login</a>
            </div>
        </form>
    </div>
  )
}

export default ResetPassword