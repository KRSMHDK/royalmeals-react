import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userService from '../services/users';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();

    const user = { username, password };

    userService.login(user);
  };

  return (
    <div className="flex">
      <section className="hidden lg:flex w-533px">
        <div className="flex-row min-h-screen text-white bg-yellow-yellowlogin">
          <div className="px-20 py-10 ">
            <Link to="/">
              <span className="font-semibold text-black md:text-4xl font-birthstone">
                Royal Meals
              </span>
            </Link>
          </div>
          <div>
            <h1 className="px-20 pr-20 text-3xl font-bold text-yellow-900 ">
              Discover the world&apos;s top Food Recipes.
            </h1>
          </div>
          <div>
            <img
              className="mt-32"
              src="https://cdn.dribbble.com/users/3320958/screenshots/15084769/media/0035044b4c0e10642b17bbdd4898955c.jpeg"
              alt="kitchen art"
            />
          </div>
        </div>
      </section>
      <section className="flex-row flex-1">
        <nav className="justify-end px-7 py-7">
          <p className="text-right">
            Not a member?{' '}
            <Link to="/register" className="text-blue-600 pointer">
              Sign up now
            </Link>
          </p>
        </nav>
        <div className="flex justify-center">
          <div>
            <div>
              <h1 className="text-2xl font-bold">Sign in to Royalmeals</h1>
            </div>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleLogin}
              encType="multipart/form-data"
            >
              <div className="mt-9">
                <label htmlFor="username" className="block mb-2 font-bold ">
                  Username
                  <input
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
                    name="username"
                    className="block px-4 py-3 mb-3 text-gray-700 transition duration-100 ease-in bg-gray-100 border rounded-lg appearance-none hover:bg-white focus:outline-none hover:border-red-300 focus:border-red-300 w-96 "
                    type="text"
                  />
                </label>
              </div>

              <div>
                <label htmlFor="password" className="block mb-2 font-bold ">
                  Password
                  <input
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    name="password"
                    className="block px-4 py-3 mb-3 text-gray-700 transition duration-100 ease-in bg-gray-100 border rounded-lg appearance-none hover:bg-white focus:outline-none hover:border-red-300 focus:border-red-300 w-96 "
                    type="password"
                  />
                </label>
              </div>

              <input
                className="w-48 px-2 py-2 text-white bg-red-600 border-2 rounded-lg cursor-pointer"
                type="submit"
                value="Login"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
