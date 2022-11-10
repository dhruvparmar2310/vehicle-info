import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function Car () {
  const { id } = useParams()
  const data = useLocation()
  console.log('data :>> ', data.state)
  return (
    <>
      <h1>Particular Car {id}</h1>
      <div className='cars-detail'>
        <div className='img-top'>
            <img src={data.state.image} className='img-fluid' />
        </div>
        <div>
          <ul>
            <li>Company : {data.state.company}</li>
            <li>Name : {data.state.name}</li>
            <li>Color : {data.state.color}</li>
          </ul>
        </div>
      </div>
    </>
  )
}
