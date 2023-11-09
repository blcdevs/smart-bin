import React from 'react'

function Confirmation() {
  return (
    <div className='auth-wrapper'>
        <h1>Waste Management App</h1>
        <form className="auth-form">
            <h2>Congratulations!</h2>
            <p className='enter-email'>Your Password has been changed, you can now proceed to login.</p>
            <a href="/" className='signin-btn'>Proceed</a>
            <div>
            </div>
        </form>
    </div>
  )
}

export default Confirmation