import React from 'react'
import "./imageUpload.css"
import Img from "../../../assets/placeholder.jpg"

const ImageUpload = () => {
  return (
    <div className='image-upload-wrapper'>
        <div className='upload-image'>
            <img src={Img} alt="placeholder img"/>
        </div>
        <div className='m-y-l h5 image-upload-text'>Drop your image here or <span className='primary-500'>Browse</span></div>
        <input type="file"/>

    </div>
  )
}

export default ImageUpload