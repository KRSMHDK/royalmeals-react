import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../context/Context';
import userService from '../services/users';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function MainHeader() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ctx = useContext(myContext);
  return (
    <div className="container grid w-full grid-cols-3 py-5 mx-auto px-36">
      <nav>
        <ul className="items-center font-extrabold font-nunito py-7">
          <li className="inline mr-5 align-middle ">
            <Link to="/"> HOME </Link>
          </li>

          <li className="inline mr-5 align-middle">
            <Link to="/addrecipe"> RECIPES </Link>
          </li>

          <li className="inline align-middle">ABOUT</li>
        </ul>
      </nav>
      <div className="text-center">
        <Link to="/">
          <span className="font-semibold border-b-4 border-black md:text-6xl font-birthstone">
            Royal Meals
          </span>
        </Link>
      </div>
      <section className="text-right">
        {ctx ? (
          <span
            onClick={handleClick}
            className="px-2 py-4 font-semibold cursor-pointer"
          >
            <img
              className="inline h-10 "
              src={`https://avatars.dicebear.com/api/miniavs/:${ctx._id}.svg`}
              alt="avatar"
            />
            <span>{ctx.username}</span>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem
                onClick={() => {
                  userService.logout();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </span>
        ) : (
          <span className="font-bold">
            <Link to="/register">
              <p className="inline-block px-2 py-2 text-lg text-black cursor-pointer hover:text-yellow-500 font-nunito">
                Sign up
              </p>
            </Link>
            {'/'}
            <Link to="/login">
              <p className="inline-block px-2 py-2 text-lg text-black cursor-pointer hover:text-yellow-500 font-nunito">
                Login
              </p>
            </Link>
          </span>
        )}{' '}
      </section>
    </div>
  );
}

export default MainHeader;
