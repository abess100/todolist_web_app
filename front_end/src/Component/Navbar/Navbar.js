import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import "./Navbar.css";

export default function Navbar() {
    const daysOfWeek = [
        "dimanche",
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi",
    ];

    return (
        <nav className="Navbar">
            <h2>
                Dash<strong>board</strong>
            </h2>
            <div className="part2">
                <div className="research">
                    <input type="text" className="research-input" />
                    <button className="icone-reseach">
                        <CiSearch className="icon-search" />
                    </button>
                </div>
                <div className="icone">
                    <IoIosNotifications className="icone1" />
                    <SlCalender className="icone1" />
                </div>
                <div className="time">
                    <span className="time">{new Date().toLocaleDateString()}</span>
                    <span className="date">{daysOfWeek[new Date().getDay()]}</span>
                </div>
            </div>
        </nav>
    );
}
