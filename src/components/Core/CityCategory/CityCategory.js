import React from 'react'
import "./citycategory.css"

const CityCategory = () => {
  return (
    <div className='city-category-container'>
        <div className='font-semibold h5 dark-500'>
            Karnataka
        </div>
        <div className='city-list p-y-m'>
            <div className='primary-500 font-semibold'>Bangalore</div>
            <div className='primary-500 font-semibold'>Bellore</div>
            <div className='primary-500 font-semibold'>Mysuru</div>
        </div>
    </div>
  )
}

export default CityCategory