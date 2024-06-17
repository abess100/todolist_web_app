import React, { useState } from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Menu from '../../Component/Menu/Menu'
import image from '../../assets/page.jpg'
import { MdDelete } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import './TaskDetail.css'
import Add from '../../Component/AjouterTache/Add';
import { useParams } from 'react-router-dom';


export default function TaskDetail() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='TaskDetail'>
      <Navbar />
      <div className="conteneur">
        <Menu  />
        <div className="conteneur-Taskdetail">
          <div className='Taskdetail-head'>
            <div className="imgTask">
              <img src={image} alt="" />
            </div>
            <div className="taskText">
              <h1>Task Detail</h1>
              <p>priorité : <span> xxx</span></p>
              <p>Status : <span> xxx</span></p>
              <p> créer le : xxx</p>
            </div>
          </div>
          <div className="detailTask">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iusto ab excepturi inventore voluptatibus eum alias, maiores voluptas totam perspiciatis eius libero est rerum sunt! Voluptatum hic nostrum optio corrupti?
              Necessitatibus consequuntur cupiditate modi corrupti ratione, a et adipisci dolore itaque delectus fugit fugiat tenetur doloremque magni! Quos, sapiente nulla odio sed, fugiat impedit placeat reiciendis ipsam quo dolore illo.
              Vitae provident commodi hic non ut sed, adipisci tempore nesciunt repudiandae aperiam accusamus, eum facere. Doloremque consectetur aliquam harum, modi hic illo officiis excepturi unde ab incidunt dolorum quos veritatis.
              Totam animi earum voluptatum possimus ipsa beatae sit? Voluptas illum quos repudiandae tenetur temporibus fuga eaque nostrum voluptatem doloribus velit rerum deleniti maxime reprehenderit, dignissimos similique perspiciatis consequuntur deserunt fugiat!
              Quibusdam labore perferendis saepe exercitationem itaque reiciendis eveniet nostrum fuga blanditiis, qui quasi ad harum minus adipisci, unde praesentium esse. Temporibus quam perferendis inventore sequi quod? Amet aperiam neque iure.</p>
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
                  {isOpen && <Add props={isOpen} setIsOpen={setIsOpen}/>}
              </div>
            </div>
        </div>
      </div>

    </div>
  )
}
