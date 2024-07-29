import React, { useState } from 'react'
import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { ImUser } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import axios from 'axios';
import { IoNavigate } from 'react-icons/io5';


export default function Register() {
  const navidate =  useNavigate()

  const  emailError = document.querySelector('.email-error')
  const  passwordError = document.querySelector('.password-error')
  const  termError = document.querySelector('.error')
  const Terms = document.getElementById('checkbox')

  const [nom , setNom] = useState('');
  const [pseudo , setPseudo] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [password2 , setPassword2] = useState('');

const handlesubmit = (e) => {
  e.preventDefault();
  const data = {
    nom: nom,
    pseudo: pseudo,
    email: email,
    password: password
  }
if(password !== password2 || !Terms.checked){
  if(password !== password2){
    passwordError.innerHTML = "Les mots de passe ne sont pas identiques"
  }
  if(!Terms.checked){
    termError.innerHTML = "Veuillez accepter les conditions"
  }
} else {
  axios.post("http://localhost:1000/user/register", {
    name: nom,
    pseudo: pseudo,
    email: email,
    password: password
  })
  .then((res) => {
     navidate('/login')
  })
  .catch((err) => {
    console.log(err)
  })
}
}
  return (
    <div>
      <div className="Login">
      <div className="login-content">
        <div className="image-login">
          <img src="./tech.png" alt="" />
        </div>
        <div className="text-content">
          <h1>Créer un compte</h1>
          <form onSubmit={handlesubmit} >
            <div className="input">
              <ImUser className="icon-input" />
              <input type="text" placeholder="Entrez votre nom" onChange={(e) => setNom(e.target.value)} />
            </div> 
            <div className="input">
              <FaUserEdit className="icon-input" />
              <input type="text" placeholder="Entrez votre pseudo" onChange={(e) => setPseudo(e.target.value)} />
            </div> 
            <div className="input">
              <MdEmail className="icon-input" />
              <input type="email" placeholder="Entrez votre Email"   onChange={(e) => setEmail(e.target.value)}/>
              <div className="email-error"></div>
            </div> 
    
            <div className="input">
              <RiLockPasswordFill className="icon-input" />
              <input type="password" placeholder="Entrez votre mot de passe" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input">
              <RiLockPasswordFill className="icon-input" />
              <input type="password" placeholder="Confirmer votre mot de passe" onChange={(e) => setPassword2(e.target.value)}  />
              <div className="password-error"></div>
            </div>
            <div className="checkboxe">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <p>Accepter les conditions d'utilisation</p>
            </div>
            <p className='error'></p>
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
