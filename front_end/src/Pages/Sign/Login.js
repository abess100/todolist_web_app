import React from "react";
import { FaUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom'
import "./login.css";


export default function Login() {
  return (
    <div className="Login">
      <div className="login-content">
        <div className="image-login">
          <img src="./security.png" alt="" />
        </div>
        <div className="text-content">
          <h1>Connexion</h1>
          <form >
            <div className="input">
              <FaUser className="icon-input" />
              <input type="text" placeholder="Entrez votre nom" />
            </div> 
    
            <div className="input">
              <RiLockPasswordFill className="icon-input" />
              <input type="text" placeholder="Entrez votre mot de passe" />
            </div>
            
            <div className="checkboxe">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <p>se souvenir de moi</p>
            </div>
            <input type="submit" value="Connexion" className="connexion" />
          </form>
         
          <div className="connexion_teams">
            <h4>Où connectez-vous</h4>
            <img src="./facebook.png" alt="facebook-icons" />
            <img src="./google.png" alt="google-icons" />
            <img src="./github.png" alt="git-icons" />
          </div>
          <p className="register">Vous n'avez pas de compte ? <Link to="/register">S'inscrire</Link></p>
        </div>
      </div>
    </div>
  );
}
