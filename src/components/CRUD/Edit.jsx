import { useEffect, useState } from "react";
import { useParams, useNavigate,Link } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const { id } = useParams(); // This should not be undefined
  console.log("User ID:", id); // Debugging


  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "" });

  // ✅ Fetch User Data When Page Loads
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((response) => {
        console.log("Fetched User:", response.data); // Debugging
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
      navigate("/"); // Navigate back to home page after update
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
      <input
  type="text"
  name="name"
  placeholder="Enter Name"
  value={user.name || ""} // Ensure it's never undefined
  onChange={handleChange}
  required
/>

<input
  type="email"
  name="email"
  placeholder="Enter Email"
  value={user.email || ""} // Ensure it's never undefined
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
