import React, {useContext} from "react";
import UserContext from "./usercontext";

export default function UserProfile(){
    const user=useContext(UserContext);
    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.age}</p>
        </div>
    );


}
