import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

function Update() {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(()=> {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[]);

    const handleUpdate = (e) => {
         e.preventDefault(); 
        axios.put(`https://64a51dbc00c3559aa9bf169e.mockapi.io/crud-operation/${id}`,
        {name:name, email:email})

        .then (()=>{
            navigate("/read");
        });
    }
   

  return (
    <>
    <form>
        <h5>UPDATE DATA</h5>
        
        <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} /> 
  </div>
  
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
  </div>
  
  <div className='mt-2'>
        <button type="submit" className="btn btn-primary mx-2" onClick = {(handleUpdate)} >Update</button>
        <Link to="/read">
        <button type="submit" className="btn btn-secondary mx-2">Back</button>
        </Link>
        </div>
  
</form>
    </>
  );
};

export default Update