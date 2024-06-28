import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { BiTask } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import "./Menu.css";

export default function Menu(id) {


    const location = useLocation();
    return (
        <div className="Menu">
            <div className="profil">
                <img src="./profile.jpg" alt="" />
                <h3 className="nom"> jean</h3>
                <p className="meil">jean@gmail.com</p>
            </div>
            <div className="Nav-menu">
                <ul>
                    <li >
                        <Link to="/" className={location.pathname === "/" ? 'active':'notactive'}>
                            <RiDashboardHorizontalFill size={24}  className="icons" />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/task"  className={location.pathname === "/task" ? 'active':'notactive'} >
                            <BiTask size={24} className="icons"/>
                            Mes taches
                        </Link>
                       
                    </li>
                    {/* <li>
                        <Link to="/category"  className={location.pathname === "/category" ? 'active':'notactive'}>
                            <BsListTask size={24}  className="icons" />
                            Categorie
                        </Link>

                    </li> */}
                    <li>
                        <Link to="/setting"  className={location.pathname === "/setting" ? 'active':'notactive'}>
                            <IoMdSettings size={24}  className="icons" />
                            Paramètres
                        </Link>
                    </li>
                </ul>
                <div className="logout">
                    <LuLogOut size={24} color="white" />
                    <p>Deconnexion</p>
                </div>
            </div>
        </div>
    );
}
