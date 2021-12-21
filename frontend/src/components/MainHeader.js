import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../pages/Context';
import userService from '../services/users';

function MainHeader() {
  const ctx = useContext(myContext);
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
      {ctx ? (
        <span className="font-bold text-right ">
          {ctx.isAdmin ? (
            <Link to="/admin">
              <p className="inline-block px-2 py-2 text-lg font-extrabold text-black bg-yellow-300 border-2 border-black cursor-pointer font-nunito">
                Admin page
              </p>
            </Link>
          ) : null}

          <Link
            onClick={() => {
              userService.logout();
            }}
            to="/logout"
          >
            <p className="inline-block px-2 py-2 text-lg font-extrabold text-black bg-yellow-300 border-2 border-black cursor-pointer font-nunito">
              Logout
            </p>
          </Link>
        </span>
      ) : (
        <span className="font-bold text-right ">
          <p className="inline-block px-2 py-2 text-lg font-extrabold text-black bg-yellow-300 border-2 border-black cursor-pointer font-nunito">
            Sign in
          </p>
          <Link to="/register">
            <p className="inline-block px-2 py-2 text-lg font-extrabold text-black bg-yellow-300 border-2 border-black cursor-pointer font-nunito">
              Register
            </p>
          </Link>
          <Link to="/login">
            <p className="inline-block px-2 py-2 text-lg font-extrabold text-black bg-yellow-300 border-2 border-black cursor-pointer font-nunito">
              Login
            </p>
          </Link>
        </span>
      )}
    </div>
  );
}

export default MainHeader;
