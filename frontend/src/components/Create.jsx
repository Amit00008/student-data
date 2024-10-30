import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [marks, setMarks] = useState(0);
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  try {
    const res = await fetch("http://localhost:1101", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, age, marks }),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.error || "An unknown error occurred");
    } else {
      toast.success("Student added successfully");
      navigate("/");

      setName("");
      setEmail("");
      setAge(0);
    }
  } catch (error) {
    toast.error("Network error or server is down!");
  }
  };

  return (
    <div className="container my-2">
        <h1 className="text-center">Create Post</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
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
  );
}

export default Create;
