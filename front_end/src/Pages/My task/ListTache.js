import React, { useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Menu from "../../Component/Menu/Menu";
import "./ListTache.css";
import CartToto from "../../Component/Cart_todo/CartToto";
import { MdDelete } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import Add from "../../Component/AjouterTache/Add";

export default function ListTache() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Navbar />
      <div className="conteneur">
        <Menu />
        <div className="conteneur-dashboard ListTasks">
          <div className="to-do">
            <CartToto />
            <CartToto />
          </div>
          <div className="addTask">
            <div className="TitleTask">
              <div className="image">
                <img src="./page.jpg" alt="" />
              </div>
              <div className="element">
                <h3>Titre de la tâche</h3>
                <p>
                  Priority: <span>xxx</span>
                </p>
                <p>
                  Status: <span>xxx</span>
                </p>
                <p>Date de création</p>
              </div>
            </div>
            <div className="body">
              <p>
                <strong>Objectif:</strong>
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
              <p>
                <strong>Description de la tâche:</strong>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perspiciatis blanditiis similique omnis eligendi quam saepe
                veritatis, voluptas doloribus, quidem, aliquam repellendus
                labore delectus earum rem distinctio molestiae odit facere
                explicabo! Ut odio accusantium sequi molestias quos expedita
                eveniet commodi recusandae exercitationem, minus nostrum illum
                qui, possimus nisi error dignissimos cupiditate deleniti id
                vitae inventore. Repellat eius provident nam dicta eum!
              </p>
            </div>
            <div className="button">
              <div className="button0"></div>
              <div className="button0">
                <div className="button1">
                  {/* button de suppression */}
                  <MdDelete color="white" />
                </div>
                <div className="button1" onClick={() => setIsOpen(true)}>
                  {/* button de modification */}
                  <LiaEditSolid color="white" size={14} texta />
                </div>
                {isOpen && <Add props={isOpen} setIsOpen={setIsOpen} />}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

