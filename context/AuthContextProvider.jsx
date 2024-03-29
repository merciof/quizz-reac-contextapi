import React from "react";
import AuthContext from "./AuthContext.js";

function AuthContextProvider({ children }) {
  const [value, setValue] = React.useState(null);

  return (
    <AuthContext.Provider value={{ value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
