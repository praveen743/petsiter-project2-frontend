import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css'

function Myorder({setorder,setbill}) {
 const [orderarr, setorderarr] = useState([]);
  var params = useParams();
  useEffect(async () => {
    fetchUsers()
    }, [])

  let fetchUsers = async () => {
    try {
        let order = await axios.get(`http://localhost:3003/notpayed/${params.id}`,{
          headers:{
            Authorization:  window.localStorage.getItem("my_token")
          }
        });
       
        setorderarr(order.data)
        console.log(order.data)
        console.log(orderarr)
    } catch (error) {
        console.log(error)
    }
}

  let handleDelete = async (id) => {
    try {
        let result = window.confirm("Are you sure do you want to delete?")
        if (result) {
            await axios.delete(`http://localhost:3003/order${id}` )
            fetchUsers()
        }
    } catch (error) {
        console.log(error)
    }
}

let calculate = async (id) => {
  try {
      var orderinfo = await axios.get(`http://localhost:3003/myorder/${id}`,{
        headers: {
            Authorization: window.localStorage.getItem("my_token")
        },
})
console.log((orderinfo.data[0].hours)*50)
setbill((orderinfo.data[0].hours)*50 )      
} catch (error) {
      console.log(error)
  }
}

  return (
    <>
      <div className='container' id='ordcontainer'>
      {
        orderarr.map((obj) => {
          {setorder(obj._id)}
          return <div class="card text-white" id='ordercard'
              style={{ width: "18rem" }}>
              <div class="card-header text-white" id='ordercardhead'
                style={{ textTransform: "uppercase" }}><b>{obj.pettype}</b></div>
              <div class="card-body">
                <h5 class="card-title" style={{ textTransform: "uppercase" }}>
                  <b>{obj.petbreed}</b> </h5>
                <p class="card-text"><b>{`Timing: ${obj.hours} hour`}</b></p>
                <p class="card-text"><b>{`City: ${obj.city}`}</b></p>
                <p class="card-text"><b>{`Pincode: ${obj.pincode}`}</b></p>
                {console.log(obj._id)}
               <Link to={`/myorder/${obj._id}`}><button  className='btn btn-sm btn-light mr-2'><b>Edit</b></button></Link>
                <button onClick={() => handleDelete(obj._id)} className='btn btn-sm btn-light ml-2'><b>Delete</b></button>
                <Link to={`/payment/${obj._id}`}> 
                                  <button className='btn btn-sm btn-light'
                                     id='pynowbtn'    onClick={() => calculate(obj._id)}
                                    >Pay Now</button></Link> 
              </div>
            </div>
           })
      }
</div>
    </>

  )
}

export default Myorder


