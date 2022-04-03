import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './my.css';

function Register() {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            Username: '',
            email: '',
            phonenumber: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                 
                var message = await axios.post("https://petsitter-project2-backend.herokuapp.com/register", values);
                
                if(message.data.message === "registered"){
                    alert(message.data.message);
                    navigate("/Login");
                }else{
                    alert(message.data.message);
                }
            } catch (error) {
                console.log(error)
            }
        }
    })
    return (
        
        <div id='regibdy'>
            <h2 className='mt-5'>REGISTER</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-lg-4 text-right align-self-center'><label><b>Username:</b></label></div>
                        <div className='col-lg-4'><input type="text" className='form-control' required
                            onChange={formik.handleChange} value={formik.values.Username} name='Username'></input></div>
                    </div>
 
                    <div className='row mt-5'>
                        <div className='col-lg-4 text-right align-self-center'><label><b>Email:</b></label></div>
                        <div className='col-lg-4'><input type="email" className='form-control' required
                            onChange={formik.handleChange} value={formik.values.email} name='email'></input></div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-4 text-right align-self-center'><label><b>Phonenumber:</b></label></div>
                        <div className='col-lg-4'><input type="text" className='form-control' required
                            onChange={formik.handleChange} value={formik.values.phonenumber} name='phonenumber'></input></div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-4 text-right align-self-center'><label><b>Password:</b></label></div>
                        <div className='col-lg-4'><input type="password" className='form-control' required
                            onChange={formik.handleChange} value={formik.values.password} name='password'></input></div>
                    </div>
                    <div className='row mt-3'>
                         <div className='col-lg-6 mt-2 text-right'><input type="submit" 
                         className='btn btn-lg' id='paybtn'value="Register"></input></div>
                    <Link to="/login"  className='col-lg-6 mt-2 text-left'><input type="submit" 
                    className='btn   btn-lg' id='paybtn' value="Login"></input></Link>
                    </div>
                   
                </div>
            </form>

        </div>
    )
}

export default Register
