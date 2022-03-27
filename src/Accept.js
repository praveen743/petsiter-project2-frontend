import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './style.css';
import { useEffect } from 'react';

function Accept({user}) {
  var navigate = useNavigate();
  var params = useParams();
  useEffect(async () => {
    fetchitem()
    }, [])

  let fetchitem = async () => {
    try {
        console.log(params.id);
        let itemdetials = await axios.get(`http://localhost:3003/myorder/${params.id}`);
        console.log(itemdetials.data[0]);
      formik.setFieldValue('pettype',itemdetials.data[0].pettype)
      formik.setFieldValue('petbreed',itemdetials.data[0].petbreed)
      formik.setFieldValue('hours',itemdetials.data[0].hours)
      formik.setFieldValue('city',itemdetials.data[0].city)
      formik.setFieldValue('pincode',itemdetials.data[0].pincode)
        } catch (error) {
        console.log(error)
    }
}
  const formik = useFormik({
    initialValues: {
      username:user,
      pettype:'',
      petbreed:'',
      hours: '',
      city:'',
      pincode:'',
      status:'taken',
      payment:'done',
      assignedto:'',
      employid:'',
      whatsappnum:'',
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        let data = await axios.put(`http://localhost:3003/accept/${params.id}`, values)
        navigate('/dashboard');
      } catch (error) {
        console.log(error)
      }
    }
  })
  return (
    <div>
      <h4>Order Acceptence Form</h4>

      <form onSubmit={formik.handleSubmit}>
        <div className='container'>
          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center'><label><b>Name:</b></label></div>
            <div className='col-lg-4'><input type="text" className='form-control'
              onChange={formik.handleChange} value={formik.values.assignedto} name='assignedto'></input></div>
          </div>

          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center'><label><b>EmployeID:</b></label></div>
            <div className='col-lg-4'><input type="text" className='form-control'
              onChange={formik.handleChange} value={formik.values.employid} name='employid'></input></div>
          </div>

          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center'><label><b>Whatsapp Number:</b></label></div>
            <div className='col-lg-4'><input type="tel" pattern="[0-9]{10}"
             className='form-control'
              onChange={formik.handleChange} value={formik.values.whatsappnum} name='whatsappnum'></input></div>
          </div>


          <div className='col-lg-12 mt-3 text-center'><input type="submit" 
          className='btn' id='paybtn' value="SUBMIT"></input></div>
        </div>
      </form>
    </div>
  )
}

export default Accept