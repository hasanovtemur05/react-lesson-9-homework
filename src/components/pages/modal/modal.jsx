import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { nanoid } from "nanoid/non-secure"

const GlobalModal = (props) => {
    const { open, toggle, cars, setCars , update} = props
    const [form, setForm] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (update.id) {
            cars.forEach((item)=>{
                if (item.id === update.id) {
                    item.name = form.name
                    item.price = form.price
                    item.color = form.color
                    item.year = form.year

                }
            })
            
        }else{
            let new_cars = [...cars ,{ ...form, id: nanoid()}]
            setCars([...new_cars])
        }
        toggle()
    }

    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h2 className='text-center'>Add Car</h2>
            </ModalHeader>
            <ModalBody>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} id='form'>
                            <input type="text" defaultValue={update?.name} placeholder='name' name='name' onChange={handleChange} className='form-control my-2' />
                            <input type="text" defaultValue={update?.price} placeholder='price' name='price' onChange={handleChange} className='form-control my-2' />
                            <input type="text" defaultValue={update?.color} placeholder='color' name='color' onChange={handleChange} className='form-control my-2' />
                            <input type="text" defaultValue={update?.year} placeholder='year' name='year' onChange={handleChange} className='form-control my-2' />
                        </form>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <button className='btn btn-success' type='submit' form='form'>Save</button>
            </ModalFooter>
        </Modal>
    )
}

export default GlobalModal
