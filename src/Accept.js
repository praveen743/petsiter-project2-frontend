import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Accept() {
  var navigate = useNavigate();
  var params = useParams();
  const formik = useFormik({
    initialValues: {
      id:params.id,
      name: '',
      number: ''
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        let data = await axios.post("http://localhost:3003/accept", values)
        navigate('/dashboard');
      } catch (error) {
        console.log(error)
      }
    }
  })
  return (
    <div>
      <h2>Order Acceptence Form</h2>

      <form onSubmit={formik.handleSubmit}>
        <div className='container'>
          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center'><label><b>Name:</b></label></div>
            <div className='col-lg-4'><input type="text" className='form-control'
              onChange={formik.handleChange} value={formik.values.name} name='name'></input></div>
          </div>

          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center'><label><b>Whatsapp Number:</b></label></div>
            <div className='col-lg-4'><input type="tel" pattern="[0-9]{10}"
             className='form-control'
              onChange={formik.handleChange} value={formik.values.number} name='number'></input></div>
          </div>


          <div className='col-lg-12 mt-3 text-centrt'><input type="submit" 
          className='btn btn-success' value="SUBMIT"></input></div>
        </div>
      </form>
    </div>
  )
}

export default Accept