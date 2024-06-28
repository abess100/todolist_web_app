import React, { useEffect, useState } from 'react'
import { GoPaste } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import './AddTask.css'
import Add from '../AjouterTache/Add';
import axios from 'axios';

export default function AddTask() {

  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className='AddTask'>
        <div className="add">
            <GoPaste />
            <p>To-Do</p>
        </div>
        <button className="addButton" onClick={() => setIsOpen(true)}>
            <FaPlus/>
            <p>Ajouter une tâche</p>
        </button>
        {isOpen && <Add props={isOpen} setIsOpen={setIsOpen}/>}
      
    </div>
  )
}
