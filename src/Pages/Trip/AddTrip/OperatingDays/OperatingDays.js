import React from 'react'
import "./operatingDays.css"
import SingleOperatingDay from "../../../../components/Core/Trip/SingleOperatingDay/SingleOperatingDay"
import Button from '../../../../components/UI/Button/Button'

const OperatingDays = () => {
  return (
    <div className='trip-form-wrapper'>
        <div className='operating-days-outer'>
            <SingleOperatingDay/>
            <SingleOperatingDay/>

            <SingleOperatingDay/>
            <SingleOperatingDay/>
            <SingleOperatingDay/>
            <SingleOperatingDay/>
            <SingleOperatingDay/>
            <SingleOperatingDay/>
            <SingleOperatingDay/>
            <SingleOperatingDay/>
            <SingleOperatingDay/>
            <SingleOperatingDay/>
            <SingleOperatingDay/>
            <SingleOperatingDay/>
            <SingleOperatingDay/>
            <SingleOperatingDay/>
            <SingleOperatingDay/>
            <SingleOperatingDay/>
            <SingleOperatingDay/>
            <SingleOperatingDay/>
            <SingleOperatingDay/>
            <SingleOperatingDay/>

        </div>
        <div className="trip-row btn-group-wrapper">
        <Button type="outlined" color="error">Cancel</Button>
        <Button>Save and finish</Button>
      </div>
    </div>
  )
}

export default OperatingDays