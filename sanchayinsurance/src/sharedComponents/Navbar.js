import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import logo from '../assets/logo.png'


const Navbar = ({ setActiveComponent }) => {
  const handleNavClick = (component) => {
    setActiveComponent(component);
  };

  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const Hamburger = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="24"
      viewBox="0 0 52 24"
    >
      <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
        <rect
          id="Rectangle_3"
          data-name="Rectangle 3"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 47)"
          fill="#574c4c"
        />
        <rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 67)"
          fill="#574c4c"
        />
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="52"
          height="4"
          rx="2"
          transform="translate(294 57)"
          fill="#574c4c"
        />
      </g>
    </svg>
  );
  return (
    <nav className="navbar fixed-top" >
      <div className="container">
        <div className="logo">
          <h2 className='text-light'>Sanchay Insurance</h2>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Button variant="light" onClick={() => handleNavClick('homedashboard')}>Home</Button>
            </li>
            <li>
              <Button variant="light" onClick={() => handleNavClick('about')}>About</Button>
            </li>
            <li>
              <Button variant="light" onClick={() => handleNavClick('login')}>Login</Button>
            </li>
            <li>
              <Button variant="light" onClick={() => handleNavClick('register')}>Register</Button>
            </li>
            <li>
              <Button variant="light" onClick={() => handleNavClick('insuranceplans')}>Insurance Plans</Button>
            </li>
            <li>
              <Button variant="light" onClick={() => handleNavClick('contactus')}>Contact-us</Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  )
}

export default Navbar