import React from 'react'
import Button from '../../../../components/UI/Button/Button'
import { NavLink } from 'react-router-dom'

const TripFare = () => {
  return (
    <div className='trip-form-wrapper'>
       <div className="trip-row btn-group-wrapper">
        <Button type="outlined" color="error">Cancel</Button>
        <Button>Save and Continue</Button>
      </div>
    </div>
  )
}

export default TripFare