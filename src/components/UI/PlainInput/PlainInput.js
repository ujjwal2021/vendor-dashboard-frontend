import React from 'react'
import "./plainInput.css"

const PlainInput = ({placeholder, size="",type="text", value, onchange}) => {
  if(type==="number"){
    <div className='plain-input-form-control'>
        <input type="number" placeholder={placeholder} className={`plain-input ${size} p-x-s h6 `} value={value} onChange={onchange} min="0"/>
    </div>
  }
  return (
    <div className='plain-input-form-control'>
        <input type={type} placeholder={placeholder} className={`plain-input ${size} p-x-s h6 `} value={value} onChange={onchange}/>
    </div>
  )
}

export default PlainInput