import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faLocationDot  } from '@fortawesome/free-solid-svg-icons';

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
      <a className="curriculum-link" href="/Curriculum informático.pdf" download>
          <div className='curriculum-link-container'>
            <span style={{fontWeight: "550"}}>Descargar CV</span>
          </div>
        </a>
        <div className='user-name-wrapper'>
          <span><h3>Antonio Luque Lao <FontAwesomeIcon style={{ color: "white" }} icon={faCircleCheck} /></h3></span>
          <span>@antonioelele</span>
        </div>

        <span className='user-description'><p style={{ color: "white" }}>Full Stack Developer / js / ts / React / css / Node.js / Express.js / MongoDB / Mongoose / Testing / Java / Python / Django / PostgreSQL</p></span>

        <div className='nav-contact'>
          <a href="https://github.com/AntonioLuqueLao" target="_blank" rel="noopener noreferrer"><span><img src='/github-logo.png' alt='/github-logo.png'/>Github</span></a>
          <a  href="mailto:antonioluquelao@gmail.com?Subject=Oferta%20de%empleo" target="_blank" rel="noopener noreferrer"><span><img src='/gmail-new-icon5198.jpg' alt='/gmail-new-icon5198.jpg'/>Enviar e-mail</span></a>
          <a href="https://www.linkedin.com/in/antonio-luque-lao-3b5b11221/" target="_blank" rel="noopener noreferrer"><span><img src='/logo-linkdin.webp' alt='/logo-linkdin.webp'/>linkedin</span></a>
        </div>

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
