import React from 'react'
import { binCards, tableData, bars } from './DashboardData'
import { NavLink } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard-wrapper'>
        <nav>
            <h1>Waste Management System</h1>
            <div className="nav-con">
                <div className="nav-link">
                    <NavLink to='/' className="nav-link">
                        <img src="./images/dashb.svg" alt="" className='dashboard-img' />
                        Dashboard
                    </NavLink>
                </div>
                <div className="nav-link" id='link'>
                    <img src="./images/bin-status.svg" alt="" />
                    <p>Bin Status</p>
                </div>
                <div className="nav-link" id='link'>
                    <img src="./images/users.svg" alt="" />
                    <p>Users</p>
                </div>
                <div className="nav-link" id='link'>
                    <img src="./images/notification.svg" alt="" />
                    <p>Notifications</p>
                </div>
                <div className="nav-link" id='link'>
                    <img src="./images/payments.svg" alt="" />
                    <p>Payments</p>
                </div>
                <div className="nav-link" id='link'>
                    <img src="./images/settings.svg" alt="" />
                    <p>Settings</p>
                </div>
                <div className="nav-link" id='nav-link'>
                    <img src="./images/Group.svg" alt="" />
                    <p>Log Out</p>
                </div>
            </div>
        </nav>
        <div className="dashboard-cont">
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
            
            <div className="binCards">
            {binCards.map((bin => {
                return <div 
                            key={bin.id}
                            className='binCard-con'
                        >
                    <img src={bin.binImg} alt="binImg" className='binImg' />
                    <div className='binCard-text'>
                        <p>{bin.lightText}</p>
                        <h2>{bin.boldText}</h2>
                    </div>
                </div>
            }))}
            <div className='green-tag'>
                <img src="./images/Union.svg" alt="union" />
                <p className='up-text'>Add</p>
                <p className='below-text'>New User</p>
            </div>
            </div>
            <div className="bar-con">
                <div className="bar-top">
                    <div className="top-left">
                        <p>Avg. Number of Full Bins Per Area</p>
                        <h2>10,569</h2>
                    </div>
                    <div className="top-right">
                        <input 
                            type="date" 
                            placeholder='Showing Date For '
                            className='date-input'
                        />
                        <p>20/02/2023</p>
                    </div>
                </div>
                <div className="bar-div">
                    {bars.map((bar) => {
                        return (
                            <div className="bar">
                                <img src={bar.bar} alt="bar" className='bar-img' />
                                <p>{bar.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="table">
                <div className="table-top">
                    <h3>Waste Bin Status</h3>
                    <p className='green-line'></p>
                    <p>Standing</p>
                    <button>Area 1
                        <img src="./images/dropDown.svg" alt="dropDown" className='dropDown' />
                    </button>
                </div>
                <div className="table-head">
                    <p className='id'>Bin ID</p>
                    <p>Fill Level</p>
                    <p>Stability</p>
                    <p>Users</p>
                    <p>Location</p>
                    <p className='date'>Last Emptied Date</p>
                </div>
                <hr />
                {tableData.map((data)=>{
                    return (
                        <>
                        <div className="table-head" key={data.id}>
                            <div className="table-row table-head">
                                <p>{data.id}</p>
                                <p className={data.id === 2 ? 'red' : 'blue'} id={data.id === 10 && 'blue'}>{data.level}</p>
                                <p className={data.stability === 'Fallen' ?'red' : 'blue'}>{data.stability}</p>
                                <p>{data.user}</p>
                                <p>{data.location}</p>
                                <p className='blue'>{data.date}</p>
                            </div>
                        </div>
                            <hr />
                        </>

                    )
                })}
                <div className="download">
                    <button>Download Report</button>
                    <p>See more</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard