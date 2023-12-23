import React, { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { navData } from '../NavBar/NavBarData'

function Header({mobileView, setMobileView}) {
  const [activeLink, setActiveLink] = useState(0)

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
        <div className="dashboard-header" id='mobile-view'>
            <h1 className='mobile-h1'>Waste Management App</h1>
            <div className="header-right">
                <img src="./images/bell.svg" alt="bell" className='bell' />
                <img src="./images/menu.svg" alt="menu" className='menu' onClick={()=>setMobileView(true)}/>
        </div>
            </div>
            {/* <div className="nav-con">
                {navData.map((link, index)=>(
                    <NavLink 
                        to={link.path} 
                        className={index === activeLink ? "nav-link activeNav" : "nav-link"}
                        onClick={()=>setActiveLink(index)}
                        id={index === navData.length-1 && 'logout'}
                    >
                        {index === activeLink ?
                            <img src={link.activeIcon} alt="link-icon" /> :
                            <img src={link.inactiveIcon} alt="link-icon" />
                        }
                        {link.link}
                    </NavLink>
                ))}
            </div> */}
    </div>
  )
}

export default Header