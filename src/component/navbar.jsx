import React from 'react';
import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Navbar = () => {

    const LogoImage = {
        BackgrounImage: `url(${Logo})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        padding: '20px 0',
    }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation" style={{
        borderBottom: '1px solid #ddd',
    }}>
      <div className="navbar-brand">
        <a className="navbar-item" href="/dashboard">
            <img src={Logo} alt="Logo" style={{ width: '112px', height: '28px', margin:'0.8rem'}} />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to='/dashboard' className="navbar-item">
            Home
          </Link>

          <Link to='/documentation' className="navbar-item">
            Documentation
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">
              Monitoring
            </div>

            <div className="navbar-dropdown">
            <Link to='/kategori' className="navbar-item">
                Kategori Alat
              </Link>
              <Link to='/alat-keluar' className="navbar-item">
                Alat Keluar
              </Link>
              <Link to='/alat-masuk' className="navbar-item">
                Alat Masuk
              </Link>
              <hr className="navbar-divider"/>
              <Link to='/report' className="navbar-item">
                Report
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-danger">
                Log Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;