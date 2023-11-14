import React, { useState } from 'react'
import { binCards, bars, data } from '../../components/Dashboard/DashboardData'
import { filterKeys } from '../../components/WasteBinComp/WasteBinCompData'
import '../../components/Dashboard/Dashboard.css'
import BarChartNoPadding from '../../components/Charts/BarChartNoPadding'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import '../../../src/components/WasteBinComp/WasteBinComp.css'

function Dashboard({
    filteredItems,
    searchKey,
    setSearchKey,
    activeFilterKey,
    setActiveFilterKey
}) {
    const [seeMore, setSeeMore] = useState(false)
    const getFilterKey = (value) => {
        if(value.toLowerCase() === 'all'){
            return setSearchKey('')
        }
        else{
            return setSearchKey(value.toLowerCase())
        }
    }
  return (
    <div className='dashboard-wrapper'>
        <div className="nav-wrapper">
            <NavBar />
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="dashboard-cont">
        <Header />
            
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

                <BarChartNoPadding/>

            </div>
            
            <div className="table">
                <div className="table-top">
                    <h3>Waste Bin Status</h3>
                    <div className="filter-container">
                    <div className="filter-div">
                        {filterKeys.slice(0, 5).map((data, index)=>(
                            <p 
                                className="filterKey"
                                key={index}
                                id={index === activeFilterKey && "activeFilterKey"}
                                onClick={()=>{
                                    getFilterKey(data.filterKey)
                                    setActiveFilterKey(index)
                                }}
                            >{data.filterKey}</p>
                        ))}
                    </div>
                    <select name="" id="select-div">
                        <option value="location" id='first-opt'>Select Location</option>
                        {filterKeys.slice(5, filterKeys.length).map((data, index)=>(
                            <option 
                                value={data.filterKey} 
                                key={index}
                                onClick={()=>{
                                    setSearchKey(data.filterKey.toLowerCase())
                                }}
                            >{data.filterKey}</option>
                        ))}
                    </select>
                    </div>
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
                {seeMore ?
                    <>
                        {filteredItems.slice(0, 20).map((data)=>{
                    return (
                        <>
                        <div className="table-head" key={data.id}>
                            <div className="table-row table-head">
                                <p>{data.id}</p>
                                <p className={data.level.toLowerCase() === 'full' ? 'red' : 'blue'}>{data.level}</p>
                                <p className={data.stability.toLowerCase() === 'fallen' ?'red' : 'blue'}>{data.stability}</p>
                                <p>{data.user}</p>
                                <p>{data.location}</p>
                                <p className='blue'>{data.date}</p>
                            </div>
                        </div>
                            <hr />
                        </>

                    )
                })}

                    </>
                    :
                    <>
                        {filteredItems.slice(0, 10).map((data)=>{
                    return (
                        <>
                        <div className="table-head" key={data.id}>
                            <div className="table-row table-head">
                                <p>{data.id}</p>
                                <p className={data.level.toLowerCase() === 'full' ? 'red' : 'blue'}>{data.level}</p>
                                <p className={data.stability.toLowerCase() === 'fallen' ?'red' : 'blue'}>{data.stability}</p>
                                <p>{data.user}</p>
                                <p>{data.location}</p>
                                <p className='blue'>{data.date}</p>
                            </div>
                        </div>
                            <hr />
                        </>

                    )
                })}

                    </>
                }
                    <div className="download">
                    <button>Download Report</button>
                    <p onClick={()=>setSeeMore(!seeMore)} style={{cursor: 'pointer'}}>{seeMore ? 'See less' : 'See more'}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard