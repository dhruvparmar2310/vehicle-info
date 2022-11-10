import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderLayout from './HeaderLayout'

export default function Home () {
  const navigate = useNavigate()
  const handleClick = (e) => {
    navigate('/cars')
  }
  return (
    <>
    <HeaderLayout />
        <div className="container main row g-4">
            <div className="col-lg-4">
                <div className="card h-100" onClick={(e) => handleClick(e)}>
                <img src="https://www.carscoops.com/wp-content/uploads/2022/01/Ford-Mustang-Shelby-GT350-1024x555.jpg" className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Cars</h5>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card h-100">
                <img src="https://www.motorbeam.com/wp-content/uploads/2023-Kawasaki-Ninja-400.jpg" className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Bikes</h5>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}
