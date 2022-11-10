import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

export default function About () {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const getData = () => {
    Axios.get('https://6364ac837b209ece0f4b06db.mockapi.io/cars-detail')
      .then((res) => {
        console.log('res.data :>> ', res.data)
        setData(res.data)
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  const handleClick = (e, index, data) => {
    navigate('/cars/car-details', { state: data })

    console.log('index :>> ', index, 'getData :>> ', data, 'id:>> ', data.id)
  }
  return (
    <>
      <h1 className='about-header'>About Us | Cars</h1>
      <div className='container'>
            {data.map((data, index) => {
            //   console.log('data :>> ', data)
              return (
                  <React.Fragment key={index}>
                  <div className="card mb-3" onClick={(e) => handleClick(e, index, data)}>
                    {/* {console.log('key :>> ', index)} */}
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={data.image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{data.company} | {data.name}</h5>
                                <p className="card-description">{data.description}</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                </React.Fragment>
              )
            })}
        </div>
    </>
  )
}
