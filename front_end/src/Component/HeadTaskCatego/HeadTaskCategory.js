import React from 'react'
import { IoMdAdd } from "react-icons/io";
import './HeadTaskCategory.css'


export default function HeadTaskCategory({status,button}) {
  return (
    <div className='HeadTaskCategory'>
        <h3>{status}</h3>
        <button><IoMdAdd size={16} color='#F24E1E'/> {button}</button>
      
    </div>
  )
}
