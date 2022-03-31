import react, { useEffect} from "react";
import axios from "axios";
import './style.css';
import './my.css';
import { Link } from "react-router-dom";
 


export default function Topbar({user}) {
 
    useEffect(async () => {
         var userid = await axios.get("http://localhost:3003/login");
         console.log(userid.data);
         }, [])
    return (
        <div  >
 
  
  <div id='nvbr'>
      <span id='tpspn'>
      <Link to='/dashboard'style={{textDecoration: 'none'}}> <button className="btn btn-md shadow-none " 
      id='tpbtn'>Home</button> </Link>
      <Link to={`/order/${user}`} style={{textDecoration: 'none'}}> <button className="btn btn-md shadow-none" id='tpbtn'>Payment</button> </Link>
      <Link to='/orderstatus' style={{textDecoration: 'none'}}> <button className="btn btn-md shadow-none" id='tpbtn'>Orders</button> </Link>
      
      { user!==null?<Link to='/login'>  <button className="btn shadow-none" 
         id='tpbtn'>Sign In</button></Link>:<Link to='/login'>  <button className="btn shadow-none" 
         id='blink_me'>Sign In</button></Link> }
      
      {/* <Link to='/login' style={{textDecoration: 'none'}}> <button className="btn btn-md shadow-none" id='tpbtn'>Sign in</button> </Link> */}
      <Link to='/' style={{textDecoration: 'none'}}> <button className="btn btn-md shadow-none" id='tpbtn'>sign up</button> </Link>
       </span>
  </div>

  

                {/* <div className="text-right text-light mr-5  ">
                    <b>{user?<button className="btn" id='profile'>{user}
                    </button>:
                   <Link to='/login'> <button className="btn" id='profile'
                    >Login</button> </Link>}</b></div> */}
                    
                         
                        
        </div>
    )
}