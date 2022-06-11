import React from "react";
const UserContext = React.createContext({
    "image": "",
    "username": ""
  });

UserContext.displayName = "UserContext";
export default UserContext;