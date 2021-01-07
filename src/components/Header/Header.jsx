import React from 'react';
import { Link } from 'react-router-dom';

import logo from './../../images/logo.png';

function Header({ isAuth, login, logout }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <a href="#" className="header__logo">
            <img src={logo} alt="logo" />
          </a>
          <div className="login">
            {isAuth ? (
              <div>
                <span>{login}</span> - <button onClick={logout}>Log out</button>
              </div>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
