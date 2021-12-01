import React, { useState } from 'react';
import userService from '../services/users';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const addNewUser = (event) => {
    event.preventDefault();

    const user = { username: username, password: password };

    console.log(user);
    userService.register(user);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={addNewUser}
        encType="multipart/form-data"
      >
        <div>
          <label>Uername</label>
          <input
            onChange={(event) => setUsername(event.target.value)}
            value={username}
            name="username"
            className="border shadow"
            type="text"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            name="password"
            className="border shadow"
            type="text"
          />
        </div>

        <input
          className="border-2 cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default Register;
