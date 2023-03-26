import React from 'react'
import "./plainInput.css"

const PlainInput = ({placeholder, size=null,type="text", value, onchange}) => {
  return (
    <div className='plain-input-form-control'>
        <input type={type} placeholder={placeholder} className={`plain-input ${size} p-x-s h6 `} value={value} onChange={onchange}/>
    </div>
  )
}

export default PlainInput