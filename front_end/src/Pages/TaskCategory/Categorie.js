import React from "react";

import Navbar from "../../Component/Navbar/Navbar";
import Menu from "../../Component/Menu/Menu";
import "./Categorie.css";
import HeadTaskCategory from "../../Component/HeadTaskCatego/HeadTaskCategory";
import TableTacheCategory from "../../Component/TableStatutCategory/TableTacheCategory";

export default function Categorie() {
  return (
    <div className="">
      <Navbar />

      <div className="conteneur">
        <Menu />
        <div className="conteneur-text">
            <h2>Catégories de tâche</h2>
            <button className="buttonCat">Ajouter une Catégorie</button>
            <div className="tableStatus">
              <HeadTaskCategory status={"Status de tâche"} button={"Ajouter un status"}/>
              <TableTacheCategory/>
               <br />
               <hr />
               <HeadTaskCategory status={'Propriété de tâche'} button={'Ajouter une propriété'}/>
              <TableTacheCategory/>
            </div>

        </div>
      </div>
    </div>
  );
}
