import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const location = useLocation();

  return (
    <div className="nav-bar">
      <div className="cover-image-wrapper">
        <img className='cover-image' src="/programming-wallpaper.webp" alt="Cover" />
      </div>
      <div className="profile-pic-container">
        <img src="/2559829618857443200_IMG_4424.jpg" alt="Profile" className="profile-pic" />
      </div>
      <div className="user-data-container">
      <a className="curriculum-link" href="/curriculum_fullStack_LuqueLaoAntonio.pdf" download>
          <div className='curriculum-link-container'>
            <span style={{fontWeight: "550"}}>Descargar CV</span>
          </div>
        </a>
        <div className='user-name-wrapper'>
          <span><h3>Antonio Luque Lao <FontAwesomeIcon style={{ color: "white" }} icon={faCircleCheck} /></h3></span>
          <span>@antonioelele</span>
        </div>

        <span className='user-description'><p style={{ color: "white" }}>Full Stack Developer / js / ts / React / css / Node.js / Express.js / MongoDB / Mongoose / Testing / Java / Python</p></span>
        <span className='user-location'><p><FontAwesomeIcon icon={faLocationDot} /> Sevilla, España</p></span>
        <span className='user-followers'><b style={{ color: "white" }}>234234</b> Seguidores</span>
        <span className='user-following'><b style={{ color: "white" }}>234234</b> Seguidos</span>
      </div>
      <div className='nav-links-container'>
        <Link to="/">
          <div className={`nav-link-container ${location.pathname === '/' ? 'selected' : ''}`}>
            Sobre mí
          </div>
        </Link>
        <Link to="/projects">
          <div className={`nav-link-container ${location.pathname === '/projects' ? 'selected' : ''}`}>
            Proyectos
          </div>
        </Link>
        <Link to="/contact">
          <div className={`nav-link-container ${location.pathname === '/contact' ? 'selected' : ''}`}>
            Formación
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
