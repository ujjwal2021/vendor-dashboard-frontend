import React from 'react'
import "./plainInput.css"

const PlainInput = ({placeholder,type="no-icon", icon=null, iconPos=null, size=null}) => {
  return (
    <div className='plain-input-form-control'>
        <div className={`plain-input-label ${iconPos} grey-900`}>{icon}</div>
        <input placeholder={placeholder} className={`plain-input ${size} ${type==="no-icon" ? "p-x-s": "p-x-l"} h6 `}/>
    </div>
  )
}

export default PlainInput