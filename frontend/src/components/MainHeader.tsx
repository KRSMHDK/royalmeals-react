import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popover from '@mui/material/Popover';

const MainHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: React.BaseSyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const Menu = [
    { name: 'Recipe Index', link: '/recipeindex' },
    { name: 'Course', link: '/course' },
    { name: 'Method', link: '/' },
    { name: 'Cut', link: '/' },
    { name: 'Cuisine', link: '/' },
    { name: 'Type', link: '/' },
    { name: 'Flavor', link: '/' },
  ];

  return (
    <div>
      <div className="container flex w-full max-w-screen-lg px-5 py-2 mx-auto bg-black lg:text-left lg:bg-white ">
        <div className="text-white lg:hidden">
          <button
            type="button"
            onClick={handleClick}
            className="mobile-menu-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="flex-row flex-1 lg:flex">
          <div className="mx-auto w-fit ">
            <Link to="/">
              <span className="mx-5 text-4xl font-semibold text-white border-b-4 border-black whitespace-nowrap lg:text-black lg:text-6xl font-birthstone">
                Royal Meals
              </span>
            </Link>
          </div>

          <nav className="items-start hidden md:tracking-normal lg:tracking-wider lg:flex whitespace-nowrap ">
            <ul className="mx-5 font-extrabold text-white md:text-black py-7">
              {Menu.map((item) => (
                <li
                  key={item.name}
                  className="mr-5 uppercase cursor-pointer md:inline hover:text-yellow-600"
                >
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <nav className="items-start w-screen tracking-normal bg-yellow-500 lg:hidden whitespace-nowrap mobile-menu">
          <ul className="font-extrabold text-black ">
            {Menu.map((item) => (
              <li
                key={item.name}
                className="px-5 py-4 border-b-2 border-black hover:text-yellow-600"
              >
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Popover>
    </div>
  );
};

export default MainHeader;
