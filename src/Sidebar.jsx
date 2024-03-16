// src/components/Sidebar.js
import React from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons library
import './Sidebar.css';

const Sidebar = () => {

  const location = useLocation();
  return (
    <div className="sidebar">

<img className='profileimg' alt="" src={require('./ragaviprofile.jpg')} />

      <nav>
        <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">
              <FaHome />
              <span className="sidebar-text">Home</span>
            </Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''} >
            <Link to="/about">
              <FaUser />
              <span className="sidebar-text">About</span>
            </Link>
          </li>
          <li className={location.pathname === '/skills' ? 'active' : ''}>
            <Link to="/skills">
              <FaBriefcase />
              <span className="sidebar-text">Skills</span>
            </Link>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''} >
            <Link to="/contact">
              <FaEnvelope />
              <span className="sidebar-text">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
     <hr></hr>


    </div>
  );
};

export default Sidebar;
