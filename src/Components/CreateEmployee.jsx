import React, { useState } from 'react'
import Navbar from './SubCompnents/Navbar'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
const CreateEmployee = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [Address,setAddress]=useState("")
  const [Age,setAge]=useState("")
  const [mobile,setMobile]=useState("")
  const Navigate=useNavigate()


  const HandleSubmit = (e) => {
  e.preventDefault();
  const empobj = {
    Name: name,
    Email: email,
    Address: Address,
    Age: Age,
    Mobile: mobile
  };
  console.log(empobj);

  axios.post("http://localhost:7397/EmployeeData", empobj)
    .then((res) => {
      console.log(res.data); // Assuming the response contains useful data
      alert("Employee added successfully");
      // If you want to navigate after the request is complete, you should do it here.
      // Assuming you have a function called Navigate.
      Navigate("/Employeelist");
    })
    .catch((error) => {
      console.error(error);
      alert("An error occurred while adding the employee.");
    });
};


  return (
   <>
   <Navbar/>
   <div className="contact-page">
      <h2> * Create Employee *</h2>
        <form action='' onSubmit={HandleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" autoComplete='off' value={name} onChange={(e) => setName(e.target.value)}/>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"
           autoComplete='off'
           value={email} 
           onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="address">Address:</label>
          <input type="text" id="Address" name="Address"
           autoComplete='off'
           value={Address}
           onChange={(e) => setAddress(e.target.value)} />
          <label htmlFor="Age">Age</label>
          <input type="text" id="Age" name="Age"
           autoComplete='off'
           value={Age}
           onChange={(e) => setAge(e.target.value)} />
          <label htmlFor="message">Mobile</label>
         <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
          <button type="submit">Submit</button>
        </form>
    </div>
   </>
  )
}

export default CreateEmployee