import React from 'react'
import './Add.css'
import HeadTaskCategory from '../HeadTaskCatego/HeadTaskCategory'
import { HiX } from "react-icons/hi";


export default function Add({setIsOpen}) {
    return (
        <div className='AddTaskPop'>
        <div className="popUp">

      
            <HeadTaskCategory status={"Ajouter une tâche"} button={<HiX size={16} color='#F24E1E' cursor={'pointer'} onClick={() => setIsOpen(false)} />} />
            <div className="bodyAdd">
                <form action="" className='form'>
                    <label htmlFor="title">Titre</label> 
                    <br />
                    <input type="text" id="title" /> 
                    <br />
                    <label htmlFor="title">Date</label> 
                    <br />
                    <input type="date" name="date" id="Date" />
                    <br />
                    <label htmlFor="title">Priorité</label>
                    <br />
                    <select name="choix" id="choix">
                        <option value="option1">important</option>
                        <option value="option1">importants</option>
                        <option value="option1">importantd</option>
                        <option value="option1">importantccccccd</option>
                    </select>
                    
                    <div className="descript">
                        <textarea name="" id="" placeholder='Décrire votre tâche ici' rows={12} ></textarea>
                       
                            <input type="file" id="photo" name="photo"/>
                     </div>

                    <input type="submit" value="Ajouter" />
                </form>


            </div>
            </div>
        </div>
    )
}
