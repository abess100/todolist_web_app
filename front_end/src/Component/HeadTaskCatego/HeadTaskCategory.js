import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import "./HeadTaskCategory.css";
import TableButton from "../TableBoutton/TableButton";

export default function HeadTaskCategory({ status, button,but,priority,setOpenP}) {
  

  const [OpenPop, setOpenPop] = useState(false);
 

  return (
    <>
    {priority && (
      <div className="HeadTaskCategory">
        <h3>{priority}</h3>
        <button onClick={() =>( setOpenPop(true))}> <IoMdAdd size={16} color="#F24E1E" onClick={() => setOpenP(false)} /> {button}{but} </button>
        {OpenPop && <TableButton OpenPop={OpenPop} setOpenPop={setOpenPop} />}
      </div>
    )}
      {status && (
        <div className="HeadTaskCategory">
          <h3>{status}</h3>
          <button onClick={() =>( setOpenPop(true))} > <IoMdAdd size={16} color="#F24E1E" onClick={() => setOpenPop(false)}/> {button}{but} </button>
          {OpenPop && <TableButton OpenPop={OpenPop} setOpenPop={setOpenPop} />}
        </div>
      )}

      
    </>
  );
}
