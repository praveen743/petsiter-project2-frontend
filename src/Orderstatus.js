import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { Navigate, useNavigate } from 'react-router-dom';

function Orderstatus({ order }) {

  const [orderstatus, setorderstatus] = useState([]);
  useEffect(async () => {
    fetch()
  }, [])

  async function fetch() {
    var orderdata = await axios.get(`http://localhost:3003/accept/${order}`);
    console.log(order);
    console.log(orderdata.data)
    setorderstatus(orderdata.data);
  }

  let end = async (id) => {
    try {
      await axios.delete(`http://localhost:3003/order${id}`)
      fetch()
    } catch (error) {
      console.log(error)
    }
  }

  let del = async (id) => {
    try {
      await axios.delete(`http://localhost:3003/accept/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>order status</div>
      {
        orderstatus.map((obj) => {
          return <div className='container '>
            <div class="card text-white bg-success mb-3 d-flex flex-wrap"
              style={{ width: "18rem" }}>

              <div class="card-header text-white bg-success mr-3"
                style={{ textTransform: "uppercase" }}><b>{`Assigned To - ${obj.name}`}</b>
                <input type="button" onClick={() => del(obj._id)} className='btn btn-danger btn-circle font-weight-bold ml-5'
                  value="X"></input>
              </div>
              <div class="card-body">

                <p class="card-text"><b>{`Whatsapp Number - ${obj.number}`}</b></p>

                <div className='col-lg-12 mt-3 text-center'>
                  <input type="button" onClick={() => end(obj.id)} className='btn btn-light font-weight-bold'
                    value="Accept"></input>
                </div>
              </div>
            </div>
          </div>

        })
      }
    </>
  )
}

export default Orderstatus