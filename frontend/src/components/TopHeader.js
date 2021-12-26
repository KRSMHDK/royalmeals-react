import React, { useContext, useState } from 'react';
import { myContext } from '../context/Context';
import userService from '../services/users';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';

function TopHeader() {
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
    <div className="border-t-8 border-yellow-500 ">
      <section className="container max-w-screen-lg mx-auto text-right">
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
          <span className="font-bold ">
            <Link to="/register">
              <p className="inline-block px-2 cursor-pointer hover:text-yellow-500 ">
                Sign up
              </p>
            </Link>
            {'/'}
            <Link to="/login">
              <p className="inline-block px-2 cursor-pointer hover:text-yellow-500">
                Login
              </p>
            </Link>
          </span>
        )}{' '}
      </section>
    </div>
  );
}

export default TopHeader;
