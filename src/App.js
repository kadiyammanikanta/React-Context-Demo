import React, { useContext, createContext } from 'react';
import UserProfile from './userprofile';
import UserProvider from './userprovder';
import './App.css';



const PersonDetails = createContext();


function PersonProved({ children }) {
  const users = { name: 'subu', company: 'maruthi sugiki', address: '31-10,nambulavari meraka' }
  return <PersonDetails.Provider value={users}>{children}</PersonDetails.Provider>

}
function PersonProfile() {
  const users = useContext(PersonDetails);
  return (
    <div>
      <h2>Hello, {users.name}</h2>
      <p>Company:{users.company}</p>
    </div>
  )
}


function App() {
  return (
    <>
      <UserProvider>
        <UserProfile />
      </UserProvider>
      <PersonProved>
        <PersonProfile />
      </PersonProved>
      
    </>

  );
}

export default App;
