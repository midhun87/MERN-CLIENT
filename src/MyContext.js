import React, { createContext, useState } from 'react';

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <MyContext.Provider value={{ addUser }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
