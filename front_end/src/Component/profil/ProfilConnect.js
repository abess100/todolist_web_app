import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './profilConnect.css'
import { UidContext } from '../../Context/AppContext'


export default function ProfilConnect() {
  const uid =useContext(UidContext)

  return (
    <div className='profilContainer'>
        <Link to="/profil">
                <div className="profil">
                    <img src="./profile.jpg" alt="" />
                    <h3 className="nom"> jean</h3>
                    <p className="meil">jean@gmail.com</p>
                </div>
          </Link>
    </div>
  )
}
