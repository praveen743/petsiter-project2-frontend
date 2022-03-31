import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router';


function Login({setuser,settoken}) {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                console.log(values);
                let data = await axios.post("http://localhost:3003/login", values)
                 window.localStorage.setItem("my_token", data.data.token)
                console.log(data.data);
                if (data.data.message == "login") {
                    console.log(data.data.user.email);
                     setuser(data.data.user.email);
                     navigate("/dashboard");
                }else{
                    alert("UserID or Password Incorrect :( ")
                }

            } catch (error) {
                console.log(error)
            }
        }
    })
    return (
        <div id='logncont'>
            <h2 className='mt-5'>LOGIN</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-lg-4 text-right align-self-center'><label><b>Email ID:</b></label></div>
                        <div className='col-lg-4'><input type="email" className='form-control'
                            onChange={formik.handleChange} value={formik.values.email} name='email'></input></div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-4 text-right align-self-center'><label><b>Password:</b></label></div>
                        <div className='col-lg-4'><input type="password" className='form-control'
                            onChange={formik.handleChange} value={formik.values.password} name='password'></input></div>
                    </div>
                    <div className='col-lg-12 mt-3 text-centrt'><input type="submit" 
                    className='btn ' id='paybtn' value="Login"></input></div>
                </div>
            </form>
        </div>
    )
}

export default Login
