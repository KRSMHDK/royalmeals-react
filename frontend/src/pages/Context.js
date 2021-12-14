import React, { createContext, useEffect, useState } from 'react';
import userService from '../services/users';

export const myContext = createContext({});

export default function Context(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    userService.getUser().then((data) => setUser(data));
  }, []);
  return <myContext.Provider value={user}>{props.children}</myContext.Provider>;
}
