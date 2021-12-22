import React, { useState } from 'react';
import userService from '../services/users';
import { Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const addNewUser = (event) => {
    event.preventDefault();

    const user = { username: username, password: password };

    console.log(user);
    userService.register(user);
  };

  return (
    <div className="flex">
      <section className="hidden lg:flex w-533px">
        <div className="flex-row min-h-screen text-white bg-blue-bluebanner">
          <div className="px-20 py-10 ">
            <Link to="/">
              <span className="font-semibold text-black md:text-4xl font-birthstone">
                Royal Meals
              </span>
            </Link>
          </div>
          <div>
            <h1 className="px-20 pr-20 text-3xl font-bold text-blue-900 ">
              Discover the world's top Food Recipes.
            </h1>
          </div>
          <div>
            <img
              className="mt-32"
              src="https://cdn.dribbble.com/users/1673573/screenshots/16926202/media/d625bc3d5499e0d1f37ed4d8fa3446d9.png"
              alt="kitchen art"
            />
          </div>
        </div>
      </section>
      <section className="flex-row flex-1">
        <nav className="justify-end px-7 py-7">
          <p className="text-right">
            Already a member?{' '}
            <Link to="/login" className="text-blue-600 pointer">
              sign in
            </Link>
          </p>
        </nav>
        <div className="flex justify-center">
          <div>
            <div>
              <h1 className="text-2xl font-bold">Sign Up to Royalmeals</h1>
            </div>
            <form
              className="flex flex-col gap-4"
              onSubmit={addNewUser}
              encType="multipart/form-data"
            >
              <div className="mt-9">
                <label className="block mb-2 font-bold ">Username</label>
                <input
                  onChange={(event) => setUsername(event.target.value)}
                  value={username}
                  name="username"
                  className="block px-4 py-3 mb-3 text-gray-700 transition duration-100 ease-in bg-gray-100 border rounded-lg appearance-none hover:bg-white focus:outline-none hover:border-red-300 focus:border-red-300 w-96 "
                  type="text"
                />
              </div>

              <div>
                <label className="block mb-2 font-bold ">Email</label>
                <input
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                  name="email"
                  className="block px-4 py-3 mb-3 text-gray-700 transition duration-100 ease-in bg-gray-100 border rounded-lg appearance-none hover:bg-white focus:outline-none hover:border-red-300 focus:border-red-300 w-96 "
                  type="text"
                />
              </div>
              <div>
                <label className="block mb-2 font-bold ">Password</label>
                <input
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                  name="password"
                  className="block px-4 py-3 mb-3 text-gray-700 transition duration-100 ease-in bg-gray-100 border rounded-lg appearance-none hover:bg-white focus:outline-none hover:border-red-300 focus:border-red-300 w-96 "
                  type="password"
                  placeholder="6+ characters"
                />
              </div>

              <input
                className="w-48 px-2 py-2 text-white bg-red-600 border-2 rounded-lg cursor-pointer"
                type="submit"
                value="Create Account"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
