import React from 'react';
import PropTypes from 'prop-types';
import './Header.component.css';

const Header = (props) => {
  const { handleHeaderClick } = props;
  return (
    <header role="button" onClick={handleHeaderClick} onKeyDown={handleHeaderClick} tabIndex={0}>
      <div className="headerLine">
        <hr />
      </div>
      <div className="headerTitle">
        <div className="circle">
        BS
        </div>
        <div className="headerCaption">
        The Book Shelf
        </div>
      </div>
      <div className="headerLine">
        <hr />
      </div>
    </header>
  );
};

Header.propTypes = {
  handleHeaderClick: PropTypes.func.isRequired,
};

export default Header;
