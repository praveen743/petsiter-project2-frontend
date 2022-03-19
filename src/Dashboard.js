import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <>

            <h1>Dashboard</h1>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-6'>
                   <Link to="/estimate" className='btn btn-lg btn-success btn-block'>need a caretaker</Link>
                    </div>
                    <div className='col-6'>
                    <Link to="/staff" className='btn btn-lg btn-success  btn-block'>be a caretaker</Link>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Dashboard