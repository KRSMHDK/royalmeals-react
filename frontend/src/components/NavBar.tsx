import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="container px-20 mx-auto">
    <ul className="items-center h-24 font-extrabold border-t-2 border-black font-nunito py-7">
      <li className="inline mr-5 align-middle ">
        <Link to="/"> HOME </Link>
      </li>
      <li className="inline mr-5 align-middle">CATEGORIES</li>
      <li className="inline mr-5 align-middle">
        <Link to="/addrecipe"> RECIPES </Link>
      </li>
      <li className="inline mr-5 align-middle ">CONTACT</li>
      <li className="inline align-middle">ABOUT</li>
    </ul>
  </nav>
);

export default NavBar;
