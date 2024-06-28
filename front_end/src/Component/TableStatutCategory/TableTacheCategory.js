import React, { useEffect, useState } from 'react'
import './Table.css'
import TableButton from '../TableBoutton/TableButton'
import axios from 'axios';

export default function TableTacheCategory({status, priority}) {
    const [open, setOpen] = useState(false);

    const updateStatus = (id,Name) => {
        axios.put("http://localhost:1000/status/"+id,{
          name: Name,
        }).then((res) => {
          window.location.reload();
        }).catch((err) => {
          console.log(err);
        })
    }
    const updateProp = (id,Name) => {
        axios.put("http://localhost:1000/priority/"+id,{
          name: Name,
        })
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        })
    }

    
   
  return (
    <div>
      {status && status.map((status,index) => 
      <table key={index}>
        <thead>
          <tr>
            <th>SN</th>
            <th>Status de tâche</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{index+1}</td>
            <td>{status.name}</td>
            <td className='Button'>
              <button onClick={() => setOpen(true)}>Modifier</button>
              {open && <TableButton  Open={open} setOpen={setOpen}  name={status.name} id={status._id} update={updateStatus}/>}
              <button>Effacer</button>
            </td>
          </tr>
         
        </tbody>
      </table>
    )}
      {priority && priority.map((priority,index) => 
      <table key={index}>
        <thead>
          <tr>
            <th>SN</th>
            <th>Status de tâche</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{index+1}</td>
            <td>{priority.name}</td>
            <td className='Button'>
              <button onClick={() => setOpen(true)}>Modifier</button>
              {open && <TableButton  Open={open} setOpen={setOpen} name={priority.name} id={priority._id} update={updateProp}/>}
              <button>Effacer</button>
            </td>
          </tr>
         
        </tbody>
      </table>
    )}

    
    </div>
  )
}

