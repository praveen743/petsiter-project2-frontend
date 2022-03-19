import react, { useEffect} from "react";
import axios from "axios";
 
export default function Topbar({user}) {
 
    useEffect(async () => {
         var userid = await axios.get("http://localhost:3003/login");
         console.log(userid.data);
         }, [])
    return (
        <div className="bg-success ml-1" style={{height:'50px',}}>
             {/* <nav class="navbar  navbar-expand navbar-light bg-success topbar ml-1 mb-4 static-top shadow">  */}

                <div className="text-right text-light mr-5  ">
                    <b>{user?user.Username:'login'}</b></div>
                    
                        {/* </nav> */}
                        
                        
        </div>
    )
}