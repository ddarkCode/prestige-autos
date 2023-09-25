import React, {useState} from 'react';
import axios from 'axios';
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
    imageFile: null,
    description: ''
  })

  const handleFileChange = (e) => {
    setNewCar(prevState => {
      return {
        ...prevState,
        imageFile: e.target.files[0]
      }
    })
  };

  // const handleUpload = async () => {
  //   const formData = new FormData();
  //   formData.append('imageFile', selectedFile);
  //   const response = await axios.post('/api/cars', formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   });
   
  // };


  function handleChange(e) {
    e.preventDefault();
    const {name, value} = e.target
    setNewCar(prevState => {
      return {
        ...prevState, 
        [name]: value
      }
    })
   
  }

  function handleSubmit(){
    try {
      const formData = new FormData();
      formData.append('brand',  newCar.brand);
      formData.append('model', newCar.model)
      formData.append('price', newCar.price)
      formData.append('year', newCar.year)
      formData.append('imageUrl', newCar.imageUrl)
      formData.append('description', newCar.description)
      formData.append('imageFile', newCar.imageFile)
      addNewCar(formData)
      setNewCar({
        brand: '',
        model: '',
        price: '',
        year: '',
        imageUrl: '',
        imageFile: '',
        description: ''
      })
      history.push('/pages/explore')
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
         <InputContainer type="file" accept="image/*" onChange={handleFileChange} /> 
        
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

{/* <div>
<h1>Upload and Display Image</h1>
<input type="file" accept="image/*" onChange={handleFileChange} />
<button onClick={handleUpload}>Upload</button>
{imagePath && <img src={imagePath} alt="Uploaded" />}
</div> */}