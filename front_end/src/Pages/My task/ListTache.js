import React, { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Menu from "../../Component/Menu/Menu";
import "./ListTache.css";
import CartToto from "../../Component/Cart_todo/CartToto";
import { MdDelete } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import Add from "../../Component/AjouterTache/Add";
import axios from "axios";

export default function ListTache() {
  const [Task, setTask] = useState([]);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:1000/task")
      .then((res) => {
        // console.log(res.data);
        setTask(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="conteneur">
        <Menu />
        <div className="ListTasks">
          {/* <div className=""> */}
            <CartToto data={Task} />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

