import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import GlobalModal from '../modal/modal'
import { nanoid } from 'nanoid'
const About = () => {
  const [open, setOpen] = useState(false)
  const [update, setUpdate] = useState({})
  const [cars, setCars] = useState([
    {id:nanoid(), name: "Bentley", price: 175000, color: "black", year: 2023},
    {id:nanoid(), name: "Rolls Royse", price: 600000, color: "black", year: 2024},
    {id:nanoid(), name: "Gelik G63", price: 300000, color: "white", year: 2020},

  ])

  const editModal = (item) =>{
    setUpdate(item)
    setOpen(true)
  }

  const toggle = () =>{
    setOpen(false)
    setUpdate({})
  }

  const handleDelete = (id) => {
    const updatedCars = cars.filter(car => car.id !== id)
    setCars(updatedCars)
  }

  return (
    <div className='container'>
      <GlobalModal open={open} toggle={toggle} update={update} cars={cars} setCars={setCars}/>
      <div className="row mt-3">
        <div className="col-md-3 offset-2">
          <button className='btn btn-success' onClick={()=>setOpen(true)}>Open modal</button>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-md-8 offset-2">
            <table className='table table-bordered table-hover table-striped'>
              <thead>
                <tr>
                <th>T/R</th>
                <th>Name</th>
                <th>Price</th>
                <th>Color</th>
                <th>Year</th>
                <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  cars.map((item, index)=>{
                    return <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.color}</td>
                        <td>{item.year}</td>
                        <td>
                        <NavLink to={`/single/${item.id}`} className='btn btn-primary'>
                            view
                        </NavLink>

                          <button className='btn btn-warning mx-2' onClick={()=>editModal(item)}>edit</button>
                          <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}>delete</button>
                        </td>
                    </tr>
                  })
                }
              </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default About