import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Read() {

  const [data, setData] = useState([]);
  const [tabledark, setTabledark] = useState('');


  function getData () {
    axios.get("https://64a51dbc00c3559aa9bf169e.mockapi.io/crud-operation")
    .then ((res) => {
      console.log(res.data);
      setData(res.data);
    })
  }
    function handleDelete (id){
        axios.delete(`https://64a51dbc00c3559aa9bf169e.mockapi.io/crud-operation/${id}`)
        .then(() =>{
          getData();
        })
    }

    const setLocalStorage = (id, name, email) =>{
      localStorage.setItem("id", id);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    }
  
  useEffect(() =>{
    getData();
  },[])
  

  return (
    <>
      <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" onClick={() =>{
    if(tabledark === "table-dark") setTabledark("");
    else setTabledark("table-dark");
  }}/>
  <label class="form-check-label">Switch Mode</label>
</div>
    <div className='d-flex justify-content-around mt-2 mb-3'>
        <h5>READ DATA</h5>
      
        <Link to="/">
        <button type="submit" className="btn btn-warning">Create Data</button>
        </Link>
        </div>
    <table className={`table ${tabledark}`}>
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Data Edit</th>
      <th scope="col">Data Delete</th>
    </tr>
  </thead>
              {
                data.map((eachData) => {
                  return(
                    <>
                    <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td><Link to="/update">
                    <button className='btn btn-success' onClick={() => setLocalStorage(eachData.id,eachData.name,eachData.email)}>Edit</button>
                    </Link></td>
                  <td><button className='btn btn-danger' onClick={()=> handleDelete(eachData.id)}>Delete</button></td>
                </tr>
              </tbody>
                    </>
                  )
                })
                }
</table>
    </>
  )
}

export default Read