import React from 'react'
import "./detailcard.css"
import Illustration from "../../../assets/BusIllustration.png"
import { FaInfo, FaInfoCircle } from 'react-icons/fa'
import Button from "../../UI/Button/Button"

const DetailCard = () => {
  return (
    <div className='detail-card-container primary-container container primary-bg p-y-l'>
        <div className='detail-card-left light-900 font-regular font-46'>
            <div className=' h1'>Omar Travels</div>
            <div className="p-y-xs">travels.omar@gmail.com</div>
            <div className="p-y-xs">+91 810000000</div>
            <div className='warning-text p-y-xs font-para'><FaInfoCircle/> these infos are visible to passengers for customer support</div>
            <div className='m-y-m'>
                <Button color='light'>Change Details</Button>
            </div>

        </div>
        <div className='detail-card-right'>
            <img src={Illustration} alt="illustration"/>
        </div>
    </div>
  )
}

export default DetailCard