import React, { FC } from 'react';
import './Header.scss';

import iconSearch from '../../images/icon_search.png';

export interface IHeader {
    className?: string;
    logo: string;
}

const Header: FC<IHeader> = ({
    className,
    logo
  }) => {
    //<img src={searchbox} className="App-searchbox" alt="search"></img>
    return (
      <header className="Header">
        <div className="Header__content">
          <img src={logo} className="Header__logo" alt="logo" />
          <div className="Header__searchbox">
            <img src={iconSearch} className="Header__searchbox--icon" alt="You're looking for something?"></img>
            <input className="Header__searchbox--input" type="text" placeholder="You're looking for something?"></input>
          </div>
        </div>
      </header>
    );
  }
export default Header;