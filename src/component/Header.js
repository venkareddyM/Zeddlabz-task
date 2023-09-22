import React, { useState } from 'react';
import './Header.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  // const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="header">
      <div className="icon-link">
          <img src='Vector 24.png' alt='vector'/>
        </div>
      <div className="nav-links">
        <h4>laptops</h4>
        <h4>desktop pcs</h4>
        <h4>networking devices</h4>
        <h4>printers and scanners</h4>
        <h4>pc parts</h4>
        <h4>All other parts</h4>
      </div>
      <div>
        {/* <button className='button'>Our Deals</button> */}
        <img src='Frame 33.png'  style={{display:'flex'}}/>
      </div>

      {/* <div>
      <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

      </div> */}


      <div className="right">
        <div className="icon-link">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="icon-link">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <div className="icon-link">
         <img src='Ellipse 8.jpg' alt='elipse'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
