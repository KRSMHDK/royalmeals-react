import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import userService from '../services/users';
import { UserInterface } from '../interfaces/userInterfaces';

export const myContext = createContext<Partial<UserInterface>>({});

const Context = (props: PropsWithChildren<any>) => {
  const { children } = props;
  const [user, setUser] = useState<Partial<UserInterface>>({});

  useEffect(() => {
    userService.getUser().then((data) => setUser(data));
  }, []);
  return <myContext.Provider value={user}>{children}</myContext.Provider>;
};

export default Context;
