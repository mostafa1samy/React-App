import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import authentiction from './authentiction';
import objectData from './tokenuser';


class Navbar extends Component {
    state = {  } 
    render() { 
let {first_name}=objectData
console.log(authentiction.isAuthed())

      
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className='container'>
              <Link className="navbar-brand" to="/"></Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
   data-bs-target="#navbarSupportedContent">
    <span className="navbar-toggler-icon"></span>
  </button>
 
  {authentiction.isAuthed   ? (<div style={{color:'blue'}}>{first_name}</div>):null}
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      
      <li className="nav-item">
        <NavLink activeClassName="black" className="nav-link" to="/home">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="black" className="nav-link" to="/movie">Movie</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="black" className="nav-link" to="/about">About</NavLink>
      </li>
     
     
    </ul>
   
    <ul className="navbar-nav ms-auto">
      
      <li className="nav-item">
        <NavLink activeClassName="black" className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="black" className="nav-link" to="/register">Register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  className="nav-link bg-info" to="/out">Logout</NavLink>
      </li>
      
      
    </ul>
    
   
  </div>
              </div>
 
</nav>
        );
    }
}
 
export default Navbar;