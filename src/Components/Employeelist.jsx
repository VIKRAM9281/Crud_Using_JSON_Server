import React, { useEffect, useState } from 'react'
import Navbar from './SubCompnents/Navbar'
import axios from 'axios'
const Employeelist = () => {
const [data,setData]=useState([])
  
useEffect(() => {
  const handleGetData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/EmployeeData");
      const resData = response.data; // Corrected from response.JSON() to response.data
      setData(resData);
    } catch (error) {
      console.error(error);
    }
  };
  
  handleGetData();
}, []);


  const DeleteData=()=>{
    const empData=axios.delete(`http://localhost:5000/EmployeeData`)
    const Data1=empData.json()

  }

  return (
    <>
    <Navbar/>
     <div className="about-page">
      <h2>Employee list </h2>
      {data.length>=1? (<table className='custom-table' border={1}> 
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Age</th>
            <th>Mobile</th>
            <th colSpan={2}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,ind)=>{
              return(
                <tr key={ind}>
                  <td>{item.Name}</td>
                  <td>{item.Email}</td>
                  <td>{item.Address}</td>
                  <td>{item.Age}</td>
                  <td>{item.Mobile}</td>
                  <td>
                  <button>Delete</button>
                  <button>Update</button>
                  </td>
                </tr>
              )
            })
          }
         
        </tbody>
      </table>):(<div className='mt-5'>No Employee Data </div>)}
  
    </div>
      
    </>
  )
}

export default Employeelist