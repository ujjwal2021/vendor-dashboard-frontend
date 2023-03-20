import React, { useState } from 'react'

const SelectOption = ({setSelectValue, option, value, setIsActive, selectValue}) => {
    // const [optionActive, setOptionActive] = useState(selectValue===value)
    const handleClick = () => {
        setSelectValue(value)
        setIsActive(false)
        // setOptionActive(selectValue===value)
    }
  return (
    <div className={`select-option p-m`} onClick={handleClick}>{option}</div>
  )
}

export default SelectOption