import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FormattedMessage } from 'react-intl';

function CombinedNavbar({ changeLocale }) {
  const { selectedLanguage, handleLanguageChange } = useLanguage();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const changeLanguage = (lang) => {
    handleLanguageChange(lang);
    changeLocale(lang); 
    

  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          BUSTRANS
          <i className='fab fa-typo3' />
        </Link>
        <div className='lang'>
          <button to='/'
            className={selectedLanguage === 'EN' ? 'lang-links' : 'lang-links-click'}
            onClick={() => changeLanguage('UA')}
          >
            UA
          </button>
          <h1>|</h1>
          <button to='/'
            className={selectedLanguage === 'UA' ? 'lang-links' : 'lang-links-click'}
            onClick={() => changeLanguage('EN')}
          >
            ENG
          </button>
        </div>
        <div className='menu-icon' onClick={() => setClick(!click)}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <FormattedMessage id='service' />
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              <FormattedMessage id='about_us' />
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/vacations' className='nav-links' onClick={closeMobileMenu}>
              <FormattedMessage id='vacantion' />
            </Link>
          </li>
          <li>
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
              <FormattedMessage id='call' />
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'><FormattedMessage id='call' /></Button>}
      </div>
    </nav>
  );
}

export default CombinedNavbar;
