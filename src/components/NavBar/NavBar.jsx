import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navData } from './NavBarData'
import './NavBar.css'

function NavBar({mobileView, setMobileView}) {
    const [activeLink, setActiveLink] = useState(0)
  return (
    <div>
        <nav>
            <h1>Waste Management System</h1>
            <img 
                src="./images/close.svg" 
                alt="close" 
                id='closeicon' 
                onClick={()=>setMobileView(false)}
            />
            <div className="nav-con" id='desktop-nav'>
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
            <div className="nav-con" id='mobile-nav'>
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