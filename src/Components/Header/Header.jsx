import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onClassChange }) => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <nav className="flexCenter h-menu">
          <Link to="/class/Class A" onClick={() => onClassChange('Class A')}>Class A</Link>
          <Link to="/class/Class B" onClick={() => onClassChange('Class B')}>Class B</Link>
          <Link to="/class/Class C" onClick={() => onClassChange('Class C')}>Class C</Link>
          <Link to="/class/Class D" onClick={() => onClassChange('Class D')}>Class D</Link>
          <Link to="/class/Class E" onClick={() => onClassChange('Class E')}>Class E</Link>

        </nav>
      </div>
    </section>
  );
};

export default Header;
