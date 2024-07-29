import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link,useNavigate } from 'react-router-dom'
import "./login.css";
import axios from "axios";


export default function Login() {
  const navigate =useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  axios.defaults.withCredentials = true

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:1000/user/login',
      {
        email: email,
        password: password
      },
      {
        withCredentials: true
      }
    )
    .then(res =>{
      navigate('/')
     
    })
    .catch(err => console.log(err))

  };

   

  return (
    <div className="Login">
      <div className="login-content">
        <div className="image-login">
          <img src="./security.png" alt="" />
        </div>
        <div className="text-content">
          <h1>Connexion</h1>
          <form  onSubmit={handleSubmit}>
            <div className="input">
              <FaUser className="icon-input" />
              <input type="email" 
                  placeholder="Entrez votre nom"
                  onChange={(e) => setEmail(e.target.value)}
                   />
              <p className="email error"></p>
            </div> 
    
            <div className="input">
              <RiLockPasswordFill className="icon-input" />
              <input type="password"
                 placeholder="Entrez votre mot de passe" 
                onChange={(e) => setPassword(e.target.value)}

                 />
                 <p className="password"></p>
            </div>
            
            <div className="checkboxe">
              <input type="checkbox" name="checkbox"  id="checkbox" />
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
          <p className="register">j'ai déjà un compte <Link to={'/forgetPass'}> mot de passe oublié</Link></p>
          <p className="register">Vous n'avez pas de compte ? <Link to="/register">S'inscrire</Link></p>
        </div>
      </div>
    </div>
  );
}
