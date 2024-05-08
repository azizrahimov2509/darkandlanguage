import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { darkMode } from '../../context/context';
import translations from '../../components/translate/translations';
import './style.css'
import images from '../../images/rahimov.png'

function Home() {
  const { state: { language } } = useContext(darkMode);
  const t = translations[language];

  return (
    <>
      <div className="container container-body">
        <div className="info">
          <h1 className='title'>{t.im} Rahimov Aziz, <span>{t.a} <br /> {t.frontendDeveloper}</span></h1>
          <p className="text">{t.specialistText}</p>
          <NavLink to="/contacts"><button className='btn-main'>{t.contactMe}</button></NavLink> 
        </div>
        <div className="photo">
          <img src={images} alt="Rahimov Aziz" style={{width:"299px", height:"399px"}} />
        </div>
      </div>
    </>
  )
}

export default Home
