import React from 'react'
import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <>
        <div className="navbar">
          <ul className="nav-links">
            <NavLink to="/" className="nav-link">
              <button className="nav-button">Home</button>
            </NavLink>                    
            <NavLink to="/CreateEmployee" className="nav-link">
              <button className="nav-button">Create Employee</button>
            </NavLink>
            <NavLink to="/Employeelist" className="nav-link">
              <button className="nav-button">Employee List</button>
            </NavLink>
          </ul>
        </div>
    </>
  )
}

export default Navbar