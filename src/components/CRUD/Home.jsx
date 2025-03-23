import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Home.css'
import {Link} from 'react-router'

const Home = () => {

    const [data,setData] = useState([])


useEffect(()=>{
    axios.get('http://localhost:5000/users')
    .then((response)=>{
console.log(response.data)
setData(response.data)
    })
},[])


// const handleDelete = (id) => {
//     const filteredUsers = data.filter(user => user.id !== id);
//     setData(filteredUsers);
//     console.log("chalre ki nahi")
// };

const handleDelete =  (id) => {
 
     axios.delete(`http://localhost:5000/users/${id}`);
    setData(data.filter((user) => user.id !== id)); 
 
};


return (
<div className="main-container">
      <div className="header">
        <h3>User's CRUD</h3>
        <button className="btn btn-success">
          <Link to="/create" style={{ textDecoration: "none", color: "white" }}>
            Create User
          </Link>
        </button>
      </div>

      <table className="table table-striped">
        <thead >
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((user, i) => (
              <tr key={user.id}>
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to= {`/edit/${user.id}`} className="btn btn-secondary me-2">
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No Users Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
);
}

export default Home;
