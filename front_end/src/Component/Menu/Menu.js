import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { BiTask } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import "./Menu.css";
import axios from "axios";
import cookie from 'js-cookie'
import ProfilConnect from "../profil/ProfilConnect";

export default function Menu() {
    const navigate = useNavigate()

    // remouve cookies when logout
    const removeCookies = (key) => {
        if(window !== 'undefined') {
            cookie.remove(key, {expires: 1});
        }
    }
    const logout = async () => {
        await axios.get("http://localhost:1000/user/logout", {withCredentials: true})
        .then(() => {
            removeCookies('token');
        })
        .catch((err) => console.log(err))
        navigate("/login")
    }

    const location = useLocation();


    return (
        
        <div className="Menu">
            <ProfilConnect />
            <div className="Nav-menu">
                <ul>
                    <li >
                        <Link to="/" className={location.pathname === "/" ? 'active':'notactive'}>
                            <RiDashboardHorizontalFill size={24}  className="icons" />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/task"  className={location.pathname === "/task"  ? 'active':'notactive'}  >
                            <BiTask size={24} className="icons"/>
                            Mes taches
                        </Link> 
                    </li>
                    <li>
                        <Link to="/setting"  className={location.pathname === "/setting"? 'active':'notactive'}>
                            <IoMdSettings size={24}  className="icons" />
                            Paramètres
                        </Link>
                    </li>
                </ul>
                <button className="logout" style={{backgroundColor: "#FF6767"}}  onClick={logout}>
                    <LuLogOut size={24} color="white" />
                    <p >Deconnexion</p>
                </button>
            </div>
        </div>
    );
}
