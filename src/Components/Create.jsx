import React, { useState } from 'react'
import './create.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function Create() {

    // using useState for stored data and useNavigate for redirect page

    const [name, setName] = useState("");            
    const [email, setEmail] = useState("");
    const history = useNavigate()
    const header = {"Access-Control-Allow-origin":"*"}

    // Axios, which is a library used to send asynchronous HTTP requests to REST endpoints.

    const handleSubmit = (e) => { 
        e.preventDefault(); 
          axios.post('https://64a51dbc00c3559aa9bf169e.mockapi.io/crud-operation',
            {name:name, email:email},
              header)
          .then(() =>{
            history("/read");
          })
         
        };
    
  return (
    <>
    <div className='d-flex justify-content-around mt-2'>
        <h5>INSERT DATA</h5>
        <Link to="/read">
        <button type="submit" className="btn btn-warning">Show Data</button>
        </Link>
        </div>
    <form>
        {/* using onchange event for target data value */}
        <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} /> 
  </div>
  {/* using onchange event for target data value */}
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick = {(handleSubmit)} >Submit</button>
</form>
    </>
  )
}

export default Create