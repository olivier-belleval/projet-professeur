import React from 'react';
import './style.scss';
import Login from '../../containers/Login';
import image_book from 'src/assets/images/opened_book.png';

const HomePage = () => {
return (
  <div className="homepage">
  Bienvenue sur une sublime PA
    <button type="button"> connexion</button>
    <Login />
    <img src ={image_book} className="homepage-image"/>
  </div>
)};

export default HomePage;
