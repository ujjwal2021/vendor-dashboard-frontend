import React, { useState } from 'react'
import "./singleOperatingDay.css"

const SingleOperatingDay = () => {
    const [active, setActive] = useState(true)

    const handleClick = ()=> {
        setActive(prev => !prev)
    }
  return (
    <div className={`single-operating-day-wrapper ${active ? "active": "inactive"}`} onClick={handleClick}>
        <div className='date'>
            22 feb, 2023
        </div>
        <div className='day'>Sunday</div>
    </div>
  )
}

export default SingleOperatingDay