import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Update = () => {

    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [marks, setMarks] = useState();
  const navigate = useNavigate();

const { id } = useParams();

const getSingleuser = async () => {
  const res = await fetch(`http://localhost:1101/${id}`,);
  const data = await res.json();

  if (!res.ok) {
    console.error("Something went wrong");
  }
  if (res.ok) {
    setName(data.name);
    setEmail(data.email);
    setAge(data.age);
    setMarks(data.marks);
  }
};

const handleSubmit = async (e) => {
    
    e.preventDefault();    
    const res = await fetch(`http://localhost:1101/${id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, age, marks }),
    });
  
    
  
    
    if (!res.ok) {
        toast.error("Something went wrong");
    }
    if (res.ok) {
        toast.success(" updated successfully");
        navigate("/");
    }
}


useEffect(() => {
  getSingleuser();
}, [id]);


  return (
    <div className="container my-2">

      <h1>Edit Data for {name}</h1>
    
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Age</label>
        <input
          type="number"
          className="form-control"
          aria-describedby="emailHelp"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Total Marks</label>
        <input
          type="number"
          className="form-control"
          aria-describedby="emailHelp"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
  )
}

export default Update
