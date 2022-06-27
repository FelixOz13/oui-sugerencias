import React, { useState } from 'react';

import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false)
    
  
    const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);
  
 

  
  return (
    <>
      <nav className='navbar'>
        
         
        <img className="headerlogo" alt="" src="assets/ouilogo.jpg" />
        <h2  className="feedback-q-s">Quejas y Sugerencias</h2>

              <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times':'fas fa-bars'}/>
        </div>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
            <a rel="noreferrer" href="https://oui-restaurant.netlify.app/" className='btn3' onClick=
              {closeMobileMenu}>
              Inicio
            </a>
          </li>
         
           <li className='nav-item'>
            <a rel="noreferrer" href="https://oui-restaurant.netlify.app/menu" className='btn3' onClick=
              {closeMobileMenu}>
              Menu
            </a>
          </li>
         
           <li className='nav-item'>
            <a rel="noreferrer" href="https://oui-restaurant.netlify.app/sugerencias" className='btn3' onClick=
              {closeMobileMenu}>
              Sugerencias
            </a>
            </li>
            <li className='nav-item'>
            <a rel="noreferrer" href="https://oui-restaurant.netlify.app/reservaciones" className='btn3' onClick=
              {closeMobileMenu}>
              Reservaciones
            </a>
          </li>
          <li className='nav-item'>
            <a rel="noreferrer" href="https://oui-restaurant.netlify.app/empleo" className='btn3' onClick=
              {closeMobileMenu}>
              Empleo
            </a>
          </li>
          <li className='nav-item'>
            <a rel="noreferrer" href="https://oui-restaurant.netlify.app/acerca" className='btn3' onClick=
              {closeMobileMenu}>
              Acerca
            </a>
          </li>
          
         
        </ul>
       
      </nav>
    </>
  );
}
export default Navbar;