import React, { FC } from "react";
import "./Header.scss";

import iconSearch from "../../images/icon_search.png";

import { store } from "../../redux/store";
import { loadPosts } from "../../redux/actions/posts";

export interface IHeader {
  className?: string;
  logo: string;
}

const searchPost = (e: any) => {
  store.dispatch(loadPosts(0, e.target.value));
};

const Header: FC<IHeader> = ({ className, logo }) => {
  return (
    <header className={className}>
      <div className="Header__content">
        <img src={logo} className="Header__logo" alt="logo" />
        <div className="Header__searchbox">
          <img
            src={iconSearch}
            className="Header__searchbox--icon"
            alt="You're looking for something?"
          ></img>
          <input
            onChange={searchPost}
            className="Header__searchbox--input"
            type="text"
            placeholder="You're looking for something?"
          ></input>
        </div>
      </div>
    </header>
  );
};
export default Header;
