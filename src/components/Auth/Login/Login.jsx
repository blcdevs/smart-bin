import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='auth-wrapper'>
        <h1>Waste Management App</h1>
        <form className="auth-form">
            <h2>Welcome Back!</h2>
            <p>New User? <a href="/signup">Create Account</a></p>
            <label>Email</label>
            <input 
                type="text" 
                placeholder='Enter Email'
            />
            <label>Password</label>
            <input 
                type="passwordd"
                placeholder='Enter Password'
            />
            <a href="/dashboard" className='signin-btn'>Sign In</a>
            <div>
                <a href="/forgot-password">Forgot Password</a>
            </div>
        </form>
    </div>
  )
}

export default Login