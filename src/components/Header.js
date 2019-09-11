import React from 'react';
const logo = "https://assetcdn.kulina.id/preliminary/kulina-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img
          src={logo}
          className="header__logo"
          alt="logo"
        />
        <i className="fa fa-align-justify"></i>
      </div>
    </header>
  )
}

export default Header;
