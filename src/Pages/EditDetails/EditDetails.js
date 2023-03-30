import React from 'react'
import Title from "../../components/UI/Title/Title"
import PlainInput from "../../components/UI/PlainInput/PlainInput"
import "./editDetails.css"
import ImageUpload from '../../components/UI/ImageUpload/ImageUpload'
import Button from '../../components/UI/Button/Button'
import { NavLink } from 'react-router-dom'

const EditDetails = () => {
  return (
    <div className='outer-cover edit-detail-outer-container'>
      <div className='edit-details-top'>
        <Title>Vendor Details</Title>
      </div>
      <div className='separator'></div>
      <div className='edit-detail-main'>
        <form className='edit-detail-form dark-500'>
          <div className='form-control'>
            <div className='form-left'>Travel Name</div>
            <div className='form-right'>
              <PlainInput placeholder="Enter the travel name"/>
            </div>
          </div>
          <div className='form-control'>
            <div className='form-left'>Phone</div>
            <div className='form-right'>
              <PlainInput placeholder="Enter the phone number"/>
            </div>
          </div>
          <div className='form-control'>
            <div className='form-left'>Email</div>
            <div className='form-right'>
              <PlainInput placeholder="Enter the email address"/>
            </div>
          </div>
          <div className='form-control image-upload-control'>
            <div className='form-left'>Logo / Trademark</div>
            <div className='form-right'>
              <ImageUpload/>
            </div>
          </div>
          <div className='form-control group-button-container'>
              <Button type='outlined' color='error'>Cancel</Button>
              <Button type='filled' color='primary'>Save Change</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditDetails