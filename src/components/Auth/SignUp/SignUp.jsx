import React from 'react'
import '../Login/Login.css'

function SignUp() {
  return (
    <div className='auth-wrapper'>
        <h1>Waste Management App</h1>
        <form className="auth-form">
            <h2>Register</h2>
            <p>Already a user? <a href="/">Login</a></p>
            <label>Full Nmae</label>
            <input 
                type="text" 
                placeholder='Enter Full Name'
            />
            <label>Email</label>
            <input 
                type="email" 
                placeholder='Enter Email'
            />
            <label>Password</label>
            <input 
                type="password"
                placeholder='Enter Password'
            />
            <a href="/login" className='signin-btn'>Sign Up</a>
            <div>
            </div>
        </form>
    </div>
  )
}

export default SignUp