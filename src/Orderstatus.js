import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { Navigate, useNavigate } from 'react-router-dom';
import './style.css'

function Orderstatus({user} ) {

  const [orderstatus, setorderstatus] = useState([]);
  useEffect(async () => {
    fetch()
  }, [])

  async function fetch() {
    var orderdata = await axios.get(`http://localhost:3003/payeduser/${user}`,{
      headers:{
        Authorization:  window.localStorage.getItem("my_token")
      }
    });
     console.log(orderdata.data)
    setorderstatus(orderdata.data);
  }

   

  let handleDelete = async (id) => {
    try {
        let result = window.confirm("Are you sure do you want to delete?")
        if (result) {
            await axios.delete(`http://localhost:3003/order${id}` )
            fetch()
        }
    } catch (error) {
        console.log(error)
    }
}

  return (
    <>
              <div id='pghd'>Confirmed Orders </div>

       <div className='container ' id='ordcontainer'>
      {
        orderstatus.map((obj,index) => {
          return <div class="card text-white" id='ordercard' key={index}
              style={{ width: "18rem" }}>
 <button  onClick={() => handleDelete(obj._id)} className='btn btn-light'
      id='xbtn'  >X</button>
              <div class="card-header text-white" id='ordercardhead'
                style={{ textTransform: "uppercase" }}><b>{`Assigned To - ${obj.assignedto}`}</b>
               
              </div>
              <div class="card-body">

                <p class="card-text"><b>{`Whatsapp Number - ${obj.whatsappnum}`}</b></p>

                
              </div>
            </div>
          

        })
      }
      </div>
    </>
  )
}

export default Orderstatus