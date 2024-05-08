// Header.jsx 
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { darkMode } from '../../context/context';
import translations from '../translate/translations'; 
import image from '../../images/logo.png'
import './style.css'

export default function Header() {
  const { state: { darkmode, language }, ChangeMode, ChangeLanguage } = useContext(darkMode);

  function setDarkMode(){
    if(!darkmode){
     document.body.classList.add("darkmode")
    }else{
     document.body.classList.remove("darkmode")
    }
    ChangeMode();
  }

  function handleLanguageChange(event) {
      ChangeLanguage(event.target.value);
  }

  const t = translations[language];

  return (
      <header>
          <div className="container header-container">
          <Link to="/" className='logo'><img src={image} alt="logo" /></Link>
              <nav>
                  <ul className='header-list'>
                      <li><NavLink to="/">{t.home}</NavLink></li>
                      <li><NavLink to="/contacts">{t.contact}</NavLink></li>
                  </ul>
              </nav>
              <select onChange={handleLanguageChange} value={language} className='select-style'>
                <option value="uz">Uzb</option>
                <option value="ru">Ru</option>
                <option value="eng">Eng</option>
              </select>
              <button className='btn' onClick={setDarkMode}>{darkmode ? t.lightMode : t.darkMode}</button>
          </div>
      </header>
  );
}
