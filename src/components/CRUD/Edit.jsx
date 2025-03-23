import { useEffect, useState } from "react";
import { useParams, useNavigate,Link } from "react-router-dom";
import axios from "axios";
import './Edit.css'

const Edit = () => {
  const { id } = useParams(); 
  console.log("User ID:", id);


  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((response) => {
        console.log("Fetched User:", response.data); 
        setUser(response.data);
      })
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]);
  
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/users/${id}`, user);
      navigate("/"); 
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className=" edit-container">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
      <input
  type="text"
  name="name"
  placeholder="Enter Name"
  value={user.name || ""} 
  onChange={handleChange}
  required
/>

<input
  type="email"
  name="email"
  placeholder="Enter Email"
  value={user.email || ""} 
  onChange={handleChange}
  required
/>

        <button type="submit" className="btn btn-success btn-sm">
          Update User
        </button>
      </form>
      <div style={{marginTop:"4px"}}>
   <Link to="/">   <button type="submit" class="btn btn-dark btn-sm "> &larr; Back</button></Link>
      </div>
    </div>
  );
};

export default Edit;
