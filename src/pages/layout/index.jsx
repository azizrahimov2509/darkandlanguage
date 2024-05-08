import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../components/header';
import { darkMode } from '../../context/context';
import translations from '../../components/translate/translations';

function Layout() {
  const { state: { language } } = useContext(darkMode);
  const t = translations[language];

  return (
    <>
      <Header />

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer>
        <div className="container container-footer">
          <h3>{t.contacts}:</h3>
          <Link href="https://t.me/Rahimov552" target="_blank" rel="noopener noreferrer"><p>Telegram</p></Link>
          <Link href="https://www.linkedin.com/in/aziz-rahimov" target="_blank" rel="noopener noreferrer"><p>Linkedin</p></Link>
          <Link href="mailto:rahimov2509@gmail.com"><p>Gmail</p></Link>
        </div>
      </footer>
    </>
  )
}

export default Layout;
