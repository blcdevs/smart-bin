import React from 'react'
import './Header.css'

function Header() {
  return (
    <div>
        <div className="dashboard-header">
            <form>
                <input 
                    type="text"
                    placeholder='Search' 
                    className='dashboard-input'
                />
            </form>
            <div className="header-right">
                <img src="./images/bell.svg" alt="bell" className='bell' />
                <img src="./images/dp.svg" alt="dp" className='dp' />
        </div>
            </div>
    </div>
  )
}

export default Header