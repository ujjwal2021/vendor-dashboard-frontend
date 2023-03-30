import React from 'react'
import Title from "../../../components/UI/Title/Title"
import PlainInput from "../../../components/UI/PlainInput/PlainInput"
import ImageUpload from '../../../components/UI/ImageUpload/ImageUpload'
import Button from '../../../components/UI/Button/Button'
import SelectComponent from "../../../components/UI/Select/SelectComponent"
import "./addBus.css"

const AddBus = () => {
  return (
    <div className='outer-cover add-bus-outer-container'>
      <div className='add-buss-top'>
        <Title>Add Bus</Title>
      </div>
      <div className='separator'></div>
      <div className='add-bus-main'>
        <form className='add-bus-form dark-500'>
          <div className='form-control'>
            <div className='form-left'>Reg No</div>
            <div className='form-right'>
              <PlainInput placeholder="Enter the registration number"/>
            </div>
          </div>
          <div className='form-control'>
            <div className='form-left'>Bus type</div>
            <div className='form-right'>
              <SelectComponent placeholder='Select Bus type'/>
            </div>
          </div>
          <div className='form-control'>
            <div className='form-left'>Depo Name</div>
            <div className='form-right'>
              <PlainInput placeholder="Enter the Depo Name"/>
            </div>
          </div>
          <div className='form-control image-upload-control'>
            <div className='form-left'>Photo of the bus with Registration Plate</div>
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

export default AddBus