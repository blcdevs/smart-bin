import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navData } from './NavBarData'
import './NavBar.css'

function NavBar() {
    const [activeLink, setActiveLink] = useState(0)
  return (
    <div>
        <nav>
            <h1>Waste Management System</h1>
            <div className="nav-con">
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
            </div>
        </nav>
    </div>
  )
}

export default NavBar