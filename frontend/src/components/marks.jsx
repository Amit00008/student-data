import React, { useEffect, useState } from 'react'

function Marks() {


    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await fetch('http://localhost:1101')
        const data = await res.json();

        if (!res.ok){
            console.error("Something went wrong");

        }
        if(res.ok){
            setData(data);
        }
    }

   
       useEffect(() => {getData();}, []);
       

  return (
    <div className='container my-2'>
        <h1 className='text-center'>Total Marks of Students</h1>

<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Marks</th>
      <th scope="col">Result</th>
      
    </tr>
  </thead>
  <tbody>
    {data.map((item, index) => (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{item.name}</td>
    <td>{item.marks == null ? "undefined" : item.marks}</td>
    <td>{typeof item.marks === 'number' && item.marks < 30 ? "Failed" : "Passed"} </td>
       
      </tr>
    ))}
    
   
  </tbody>
</table>


    </div>
  )
}

export default Marks;