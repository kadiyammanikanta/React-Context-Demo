import React from "react";
import UserContext from "./usercontext";

function UserProvider({children}){
  const user = { name: 'manikanta', age: '30' }
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>

}
export default UserProvider;