import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../pages/Context';

import { AvatarGenerator } from 'random-avatar-generator';

const generator = new AvatarGenerator();

function MainHeader() {
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
      <section>
        {ctx ? (
          <span className="flex items-center justify-end font-bold text-right ">
            <p>
              <img
                className="h-10"
                src={generator.generateRandomAvatar(ctx._id)}
                alt="avatar"
              />
            </p>

            <p>{ctx.username}</p>
          </span>
        ) : (
          <span className="font-bold text-right ">
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
