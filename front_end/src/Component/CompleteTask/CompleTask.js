import React from "react";
import { BsClipboardCheck } from "react-icons/bs";
import CartToto from "../Cart_todo/CartToto";
import './CompletTask.css';


export default function CompleTask() {
  
  return (
    <div className="CompleTask ">
      <div className="headStatus">
        <BsClipboardCheck size={17} />
        <p>Task Status</p>
      </div>
      <CartToto />
    </div>
  );
}
