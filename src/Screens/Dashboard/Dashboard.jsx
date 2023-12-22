import React, { useState } from 'react'
import { binCards, bars } from '../../components/Dashboard/DashboardData'
import { filterKeys } from '../../components/WasteBinComp/WasteBinCompData'
import '../../components/Dashboard/Dashboard.css'
import BarChartNoPadding from '../../components/Charts/BarChartNoPadding'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import '../../../src/components/WasteBinComp/WasteBinComp.css'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


function Dashboard({
    filteredItems,
    setSearchKey,
    activeFilterKey,
    setActiveFilterKey,
    mobileView,
    setMobileView
}) {
    const data = [
        {
          name: 'Area 1',
          amt: 27000,
        },
        {
          name: 'Area 2',
          amt: 31000,
        },
        {
          name: 'Area 3',
          amt: 21000,
        },
        {
          name: 'Area 4',
          amt: 28000,
        },
        {
          name: 'Area 5',
          amt: 34000,
        },
        {
          name: 'Area 6',
          amt: 26000,
        },
        {
          name: 'Area 7',
          amt: 32000,
        },
        {
          name: 'Area 8',
          amt: 28000,
        },
        {
          name: 'Area 9',
          amt: 33000,
        },
        {
          name: 'Area 10',
          amt: 25000,
        },
        {
          name: 'Area 11',
          amt: 16000,
        },
      ];
    
    const yAxisTicks = [10000, 20000, 30000, 40000, 50000];
    const [seeMore, setSeeMore] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const getFilterKey = (value) => {
        if(value.toLowerCase() === 'all'){
            return setSearchKey('')
        }
        else{
            return setSearchKey(value.toLowerCase())
        }
    }

    const SquareBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return (
          <rect 
            x={x} 
            y={y} 
            width={width} 
            height={height} 
            fill={fill} 
            />
        );
      };
      
      const RoundedBar = (props) => {
        const { fill, backgroundColor, x, y, width, height } = props;
      
        return (
          <g>
            <rect x={x} y={y} width={width} height={height} fill={backgroundColor} rx={10} ry={10} />
      
            <rect x={x} y={y} width={width} height={height} fill={fill} rx={10} ry={10} />
          </g>
        );
      };

  return (
    <div className='dashboard-wrapper'>
        <div className="nav-wrapper" id='desktop' >
            <NavBar 
                mobileView={mobileView}
                setMobileView={setMobileView}
            />
        </div>
        {mobileView && (
            <div id="mobile">
            <div className="nav-wrapper">
                <NavBar 
                    mobileView={mobileView}
                    setMobileView={setMobileView}
                />
            </div>
            </div>
        )}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="dashboard-cont" id='dashboard-cont'>
        <Header 
            mobileView={mobileView}
            setMobileView={setMobileView}
            setShowMenu={setShowMenu}
        />
            
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
               <div className="barchart-div">
                <div className="barchart">
                <ResponsiveContainer width='100%' height='100%'>
          <BarChart 
              data={data}
              margin={{
                top: -35,
                right: 0,
                left: -65, 
                bottom: 20,
              }}
            >
                <XAxis 
                  dataKey="name" 
                  tickLine={false}
                  tick={({ x, y, payload }) => (
                    <g transform={`translate(${x},${y})`}>
                      <text
                        x={0}
                        y={10}
                        dy={16}
                        textAnchor="middle"
                        fill="#1B1B1B"
                        fontFamily="Inter"
                        fontSize={11}
                        fontStyle="normal"
                        fontWeight={500}
                      >{payload.value}</text>
                    </g>
                  )}
                />
                <YAxis
                  ticks={yAxisTicks}
                  tickFormatter={(value) => `$${value / 10000}k`}
                  tickLine={false}
                  orientation="left"
                  yAxisId={0}
                  width={60}
                  tick={{ 
                    dy: 40,
                    fill: '#666',
                    fontFamily: 'Inter',
                    fontSize: 11,
                    fontStyle: 'normal',
                    fontWeight: 500,
                    color: '#8D8D8D', 
                }}
                display='none'
                />
                <Tooltip
                  content={({ payload, label, active }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload; 
  
                      return (
                        <div className="custom-tooltip">
                          <div className="tooltip-div">
                          <p className="tooltip-label">{label}, Transaction</p>
                          <p className="tooltip-amount">{`$${Intl.NumberFormat().format(data.amt)}`}</p>
                          </div>
                          <img src="./images/home/mark-up.svg" alt="tagImg" className='tagImg' />
                        </div>
                      );
                    }
  
                    return null;
                  }}
                />
                <Bar
                    dataKey="amt"
                    background={{ fill: '#caece8', radius: 10 }}
                    // label={{ position: 'top', fill: '#1B1B1B' }}
                    shape={<RoundedBar backgroundColor="#ECECEC" />}
                    fill="#009A40"
                 />
      </BarChart>
          </ResponsiveContainer>
                </div>
               </div>
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