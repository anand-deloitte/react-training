import React from 'react';

export const UserContext = React.createContext();

export default function App() {
  return (
    <UserContext.Provider color="Reed">
      <User />
    </UserContext.Provider>
  )
}

function User() {
  const color = React.useContext(UserContext);  

  return <h1>{color}</h1>;
}