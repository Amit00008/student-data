// import React, { useEffect } from 'react'
// import { toast } from 'react-toastify'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function Alle() {

    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await fetch('http://localhost:1101')
        const data = await res.json();

        if (!res.ok){
            toast.error("Something went wrong");

        }
        if(res.ok){
            setData(data);
        }
    }

   
       useEffect(() => {getData();}, []);
       
    


const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:1101/${id}`, {
        method: 'DELETE',
    });


    if (!res.ok) {
        toast.error("Something went wrong");
    } else {
        toast.success("Item deleted successfully");
        setData(data.filter(item => item.id !== id));

        setTimeout(() => {
            getData();
        }, 1000);
    }
};

return (
    <div className='container my-2'>
        <h1>All The data</h1>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.age}</td>
                        <td>
                            <button 
                                className="btn btn-danger" 
                                onClick={()=>handleDelete(item._id)}
                            >
                                Delete
                            </button>
                            

                        </td>
                        <td>
                        <a 
                                className="btn btn-success" 
                                onClick={() => window.location.href = `/${item._id}`}
                            >
                                Edit
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
}

export default Alle
