
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Element } from '../../types'

const H5PCours = () => {
  const location=useLocation()
  const element=location.state as Element
  return (
    <div>
      <h1>{element.contents[0].ContentName}</h1>
    </div>
  )
}

export default H5PCours
