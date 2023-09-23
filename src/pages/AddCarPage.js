import React, {useState} from 'react';
import {connect} from 'react-redux';

import Form from '../components/form/Form';
import InputContainer from '../components/input/InputContainer';
import FormButton from '../components/formButton/FormButton';
import { addNewCar } from '../redux/actions/carActions';

function AddCarPage({ addNewCar, history}) {
  const [newCar, setNewCar] = useState({
    brand: '',
    model: '',
    price: '',
    year: '',
    imageUrl: '',
    description: ''
  })

  function handleChange(e) {
    e.preventDefault();
    const {name, value} = e.target
    setNewCar(prevState => {
      return {
        ...prevState, 
        [name]: value
      }
    })
    console.log(newCar);
  }

  function handleSubmit(){
    try {
      addNewCar(newCar);
      setNewCar({
        brand: '',
        model: '',
        price: '',
        year: '',
        imageUrl: '',
        description: ''
      })
      history.push('/pages/cars/new-car')
    } catch (err) {
      console.log('Frontend Posting Error: ',err)
    }
  }
  return (
    <div className='auth'>
      
      <Form handleSubmit={handleSubmit}>
      <h1>Add New Car To Collections</h1>
        <InputContainer type='text' name={'brand'} value={newCar.brand} onChange={handleChange} />
        <InputContainer type='text' name={'model'} value={newCar.model} onChange={handleChange} />
        <InputContainer type='text' name={'price'} value={newCar.price} onChange={handleChange} />
        <InputContainer type='text' name={'year'} value={newCar.year} onChange={handleChange} />
        <InputContainer type='text' name={'imageUrl'} value={newCar.imageUrl} onChange={handleChange} />
        <label>Description</label>
        <textarea name='description' value={newCar.description} onChange={handleChange}></textarea>
        <FormButton text='Add New Car' />

      </Form>

    </div>
  )
}

const mapDispatchToProps = {
  addNewCar
}

export default {
  component: connect(null, mapDispatchToProps)(AddCarPage)
}