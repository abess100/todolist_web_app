import React, { useEffect, useState } from "react";

import Navbar from "../../Component/Navbar/Navbar";
import Menu from "../../Component/Menu/Menu";
import "./Categorie.css";
import HeadTaskCategory from "../../Component/HeadTaskCatego/HeadTaskCategory";
import TableTacheCategory from "../../Component/TableStatutCategory/TableTacheCategory";
import axios from "axios";
import TableButton from "../../Component/TableBoutton/TableButton";
export default function Categorie() {
  const [status, setStatus] = useState([]);
  const [priority, setPriority] = useState([]);
  const [Open, setOpen] = useState(false);

  useEffect(() => {
    // fonction pour recupéper les status
    const Status = async () => {
      try {
        axios.get("http://localhost:1000/status").then((res) => {
          setStatus(res.data);
        });
      } catch (error) {
        console.log("error", error);
      }
    };

    // récupéréer les priorités
    const Priority = async () => {
      try {
        axios.get("http://localhost:1000/priority").then((res) => {
          setPriority(res.data);
        });
      } catch (error) {
        console.log("error", error);
      }
    };


    Status();
    Priority();
  }, []);

  const [OpenPop, setOpenPop] = useState(false);

  return (
    <div className="">
      <Navbar />

      <div className="conteneur">
        <Menu />
        <div className="conteneur-text">
            <h2>Catégories de tâche</h2>
            <button className="buttonCat">Ajouter une Catégorie</button>
            <div className="tableStatus">
              <HeadTaskCategory status={"Status de tâche"} but={"Ajouter un status"}  />
              <TableTacheCategory status={status}/>
               <br />
               <hr />
               <HeadTaskCategory priority={'Propriété de tâche'} button={'Ajouter une propriété'} />
              <TableTacheCategory priority={priority}/>
            </div>

        </div>
      </div>
    </div>
  );
}
