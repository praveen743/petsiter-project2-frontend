import react, { useEffect} from "react";
import axios from "axios";
import './style.css';
import { Link } from "react-router-dom";
 


export default function Topbar({user}) {
 
    useEffect(async () => {
         var userid = await axios.get("http://localhost:3003/login");
         console.log(userid.data);
         }, [])
    return (
        <div className="topbar">
             {/* <nav class="navbar  navbar-expand navbar-light bg-success topbar ml-1 mb-4 static-top shadow">  */}

                <div className="text-right text-light mr-5  ">
                    <b>{user?<button className="btn" id='profile'>{user}
                    </button>:
                   <Link to='/login'> <button className="btn" id='profile'
                    >Login</button> </Link>}</b></div>
                    
                        {/* </nav> */}
                        
                        
        </div>
    )
}