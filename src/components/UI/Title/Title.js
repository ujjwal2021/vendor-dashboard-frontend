import React from 'react'

const Title = ({size="h3",weight="regular", children}) => {
  return (
    <div className={`title ${size} primary-500 font-${weight}`}>{children}</div>
  )
}

export default Title