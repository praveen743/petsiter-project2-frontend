import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Estimate({ setbill,sethour }) {
    function payfun() {
       
        var hr = formik.values.hours;
        sethour(formik.values.hours);
        var price = hr * 25;
        
        setbill(price)
    }
    const formik = useFormik({
        initialValues: {
            hours: '',
        },
        onSubmit: async (values) => {
            try {
               
                let data = await axios.post("http://localhost:3003/payment", values)
                
            } catch (error) {
                console.log(error)
            }
        }

    })
    return (
        <>
            <div>Estimate</div>
            <div className='row mt-4'>
                <div className='col-lg-4 text-right align-self-center'><label><b>Number Of Hours:</b></label></div>
                <div className='col-lg-4'><input type="number" className='form-control'

                    onChange={formik.handleChange} value={formik.values.hours} name='hours'></input></div>
            </div>
        <div className='row mt-2'>
            <Link to='/payment' className='col-lg-6 mt-2 text-right'>
                <input type="submit"
                onClick={payfun} className='btn btn-success' value="PAY">
                    </input></Link>
                    </div>
        </>

    )
}

export default Estimate