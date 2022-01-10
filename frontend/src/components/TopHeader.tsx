import React, { useContext, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faYoutube,
  faPinterest,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import userService from '../services/users';
import { myContext } from '../context/Context';

const TopHeader = () => {
  const socialMedia = [
    {
      name: 'facebook',
      icon: faFacebook,
    },
    {
      name: 'youtube',
      icon: faYoutube,
    },
    {
      name: 'pinterest',
      icon: faPinterest,
    },
    {
      name: 'instagram',
      icon: faInstagram,
    },
    {
      name: 'twitter',
      icon: faTwitter,
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.BaseSyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };
  const ctx = useContext(myContext);
  return (
    <div className="py-1 border-t-8 border-yellow-500 ">
      <section className="container max-w-screen-lg mx-auto text-right">
        <div className="inline ">
          {socialMedia.map((item) => (
            <FontAwesomeIcon
              className="mx-2 cursor-pointer hover:text-yellow-500"
              icon={item.icon}
              key={item.name}
            />
          ))}

          <p className="inline mx-2 text-xs cursor-pointer hover:text-yellow-500 ">
            Contact Us
          </p>
          <p className="inline text-xs cursor-pointer hover:text-yellow-500">
            Most Recent
          </p>
        </div>
        {ctx ? (
          // eslint-disable-next-line jsx-a11y/interactive-supports-focus
          <span
            onClick={handleClick}
            onKeyPress={handleClick}
            role="menu"
            className="px-2 py-4 font-semibold "
          >
            <img
              className="inline h-9 "
              src={`https://avatars.dicebear.com/api/miniavs/:${ctx.id}.svg`}
              alt="avatar"
            />

            <ClickAwayListener onClickAway={handleClickAway}>
              <span className="align-middle cursor-pointer">
                {ctx.username}
              </span>
            </ClickAwayListener>
            <Menu
              id="basic-menu"
              role="menuitem"
              tabIndex={0}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem>
                <Link to="/addrecipe">Submit A Recipe!</Link>
              </MenuItem>
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
          <span className="text-sm font-bold">
            <Link to="/register">
              <p className="inline-block px-2 cursor-pointer hover:text-yellow-500 ">
                Sign up
              </p>
            </Link>
            /
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
};

export default TopHeader;
