import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Menu from "../../Component/Menu/Menu";
import "./Dashboard.css";
import CartDah from "../../Component/CartDash/CartDah";
import Status from "../../Component/TaskStatut/Status";
import Bienvenue from "../../Component/bienvenu/Bienvenue";
import Inviter from "../../Component/InviteMembre/Inviter";
import CompleTask from "../../Component/CompleteTask/CompleTask";
import Graphik from "../../Component/Graph/Graphik";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="conteneur">
        {/* menu latéral */}
        <Menu />
        
        {/* dashboard */}
        <div className="Todo">
          <div className="head">
            <Bienvenue />
            <Inviter />
          </div>
          <div className="conteneur-dashboard">
            <div className="to-do">
              <CartDah />
            </div>
            <div className="addTask">
              <div className="statusTask">
                <Status/>
                <Graphik/>
              </div>
              <div className="TaskComplet">
                <CompleTask />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
