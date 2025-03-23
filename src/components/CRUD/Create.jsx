import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import './Create.css';

const Create = () => {
  const [user, setUser] = useState({name: "",email:""});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      await axios.post("http://localhost:5000/users", user);
      navigate("/"); 
    
  };

  return (
    <div className="create-container">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}style={{ display: "flex", gap: "3px" }}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <button type="submit" class="btn btn-success btn-sm ">Create User</button>
      </form>
<div style={{marginTop:"4px"}}>
   <Link to="/">   <button type="submit" class="btn btn-dark btn-sm "> &larr; Back</button></Link>
      </div>
    </div>
  );
};

export default Create;
