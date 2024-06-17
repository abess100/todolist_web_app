import React from 'react'
import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { ImUser } from "react-icons/im";
import { MdEmail } from "react-icons/md";




export default function Register() {
  return (
    <div>
      <div className="Login">
      <div className="login-content">
        <div className="image-login">
          <img src="./tech.png" alt="" />
        </div>
        <div className="text-content">
          <h1>Créer un compte</h1>
          <form >
            <div className="input">
              <ImUser className="icon-input" />
              <input type="text" placeholder="Entrez votre nom" />
            </div> 
            <div className="input">
              <FaUserEdit className="icon-input" />
              <input type="text" placeholder="Entrez votre pseudo" />
            </div> 
            <div className="input">
              <MdEmail className="icon-input" />
              <input type="email" placeholder="Entrez votre Email" />
            </div> 
    
            <div className="input">
              <RiLockPasswordFill className="icon-input" />
              <input type="password" placeholder="Entrez votre mot de passe" />
            </div>
            <div className="input">
              <RiLockPasswordFill className="icon-input" />
              <input type="password" placeholder="Confirmer votre mot de passe" />
            </div>
            <div className="checkboxe">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <p>I agree to all the terms and conditions</p>
            </div>
            <input type="submit" value="Connexion" className="connexion" />
          </form>
         
          <div className="connexion_teams">
            <h4>Où enregistrez-vous avec </h4>
            <img src="./facebook.png" alt="facebook-icons" />
            <img src="./google.png" alt="google-icons" />
            <img src="./github.png" alt="git-icons" />
          </div>
          <p className="register">Vous avez déjà un compte ? <Link to="/login">Se connexion</Link></p>
        </div>
      </div>
    </div>
    </div>
  )
}
