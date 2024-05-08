import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { darkMode } from '../../context/context';
import translations from '../../components/translate/translations';
import images from '../../images/rahimov.png'


function Contacts() {
  const { state: { language } } = useContext(darkMode);
  const t = translations[language];
  return (
    <div className='container container-contacts'>
    <div className="contacts">
       <h2 className='title-h2'>{t.contacts}:</h2>
       <h3>{t.apps}</h3>
      <Link to='https://t.me/Rahimov552'>Telegram</Link>
      <Link to='https://t.me/Rahimov552'>LinkedIn</Link>
      <Link to='https://github.com/azizrahimov2509'>Github</Link>
    </div>
      <div className="img">
        <img src={images} alt="image" style={{width:"299px", height:"399px"}} />
      </div>

    </div>
  )
}

export default Contacts;
