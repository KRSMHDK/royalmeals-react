import React from 'react';
import { Link } from 'react-router-dom';

function MainHeader() {
  return (
    <div className="container grid w-full grid-cols-2 px-20 py-5 mx-auto">
      <div>
        <Link to="/">
          <img
            className="md:inline"
            src="https://res.cloudinary.com/dtr2bqecp/image/upload/e_shadow:40/v1633749014/recipeimages/ieyo6glypfacipor7w77.png"
            alt="logo"
          />
          <span className="font-semibold md:text-6xl font-birthstone">
            Royal Meals
          </span>
        </Link>
      </div>

      <span className="font-bold text-right ">
        <p className="inline-block px-2 py-2 text-lg font-extrabold text-black bg-yellow-300 border-2 border-black cursor-pointer font-nunito">
          Sign in
        </p>
        <Link to="/register">
          <p className="inline-block px-2 py-2 text-lg font-extrabold text-black bg-yellow-300 border-2 border-black cursor-pointer font-nunito">
            Register
          </p>
        </Link>
      </span>
    </div>
  );
}

export default MainHeader;
