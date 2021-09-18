import React, { Component } from 'react'
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-dark">
             <Link to="/" className="navbar-brand">
                <img src={logo} alt="logo"/> 
                 </Link> 
                 <div className="collapse navbar-collapse show ml-sm-5">
                     <ul className="navbar-nav">
                       <li className="navbar-item mr-2"> 
                        <Link to="/" className="nav-link text-white">Home </Link>
                        </li>
                         <li className="navbar-item"> 
                        <Link to="/recipes" className="nav-link text-white">Recipes </Link>
                        </li> 
                        {/* <li className="navbar-item"> 
                        <Link to="" className="navbar-link"></Link>
                        </li> */}
                     </ul>
                 </div>
            </nav>
        )
    }
}
