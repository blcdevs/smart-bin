import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import { filterKeys } from '../../components/WasteBinComp/WasteBinCompData'
import '../../../src/components/BinStatus/BinStatus.css'

function BinStatus({
    filteredItems,
    setSearchKey,
    activeFilterKey,
    setActiveFilterKey
}) {
    const [seeMore, setSeeMore] = useState(false)
    const [selectedBin, setSelectedBin] = useState(0)
    const [showAllBins, setShowAllBins] = useState(true)
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
          <div className="bin-header">
            {!showAllBins && 
                <img 
                    src="./images/bin-status/arr-back.svg" 
                    alt="go-back" 
                    onClick={()=>setShowAllBins(true)}
                />
            }
            <h1 className='binStat-h1'>Bin Status</h1>
          </div>
          {showAllBins ?
          <div>
          
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
                    <select 
                        name="" 
                        id="select-div"
                        onChange={(e) => {
                            setSearchKey(e.target.value.toLowerCase());
                          }}
                    >
                        <option value="location" id='first-opt'>Select Location</option>
                        {filterKeys.slice(5, filterKeys.length).map((data, index)=>(
                            <option 
                                value={data.filterKey} 
                                key={index}
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
                          {filteredItems.map((data, index)=>{
                      return (
                          <>
                          <div 
                            className="table-head" 
                            key={data.id}
                            onClick={()=>{
                                setShowAllBins(false)
                                setSelectedBin(index)
                            }}
                            >
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
                          {filteredItems.slice(0, 21).map((data, index)=>{
                      return (
                          <>
                          <div 
                            className="table-head" 
                            key={index}
                            onClick={()=>{
                                setShowAllBins(false)
                                setSelectedBin(index)
                            }}
                          >
                              <div className="table-row table-head" onClick={()=>setSelectedBin(index)}>
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
          </div>:
          <div>

              <center><h1>{filteredItems[selectedBin].id}</h1></center>
          </div>
          }
          </div>
      </div>
  )
}

export default BinStatus