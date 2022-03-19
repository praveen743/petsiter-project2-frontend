import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({user}) {
    // console.log(user.Username);
    return (
        <div>
            <ul class="navbar-nav bg-gradient-success  sidebar sidebar-dark accordion" id="accordionSidebar">


                <div class="sidebar-brand d-flex align-items-center justify-content-center" >
                    <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-paw"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">PETSITTER</div>
                </div>


                <hr class="sidebar-divider my-0 " />

             <li class="nav-item active">
                    <Link class="nav-link" to="/dashboard">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></Link>
                </li>

                <hr class="sidebar-divider" />

                <div class="sidebar-heading">
                    Interface
                </div>

                <li class="nav-item">
                <Link class="nav-link collapsed" to={`/order/${user?user.Username:'nouser'}`} data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>My Orders</span>
                    </Link>
                    </li>

                    <li class="nav-item">
                <Link class="nav-link collapsed" to='/orderstatus' data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>Order Status</span>
                    </Link>
                    </li>
                

                <li class="nav-item">
                <Link class="nav-link collapsed" to="/login" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>Login</span>
                    </Link>
                    </li>

                <li class="nav-item">
                <Link class="nav-link collapsed" to="/" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>Register</span>
                    </Link>
                    </li>
 

                <hr class="sidebar-divider"/>

                    
                    

                    </ul>
                </div>
         
    )
}