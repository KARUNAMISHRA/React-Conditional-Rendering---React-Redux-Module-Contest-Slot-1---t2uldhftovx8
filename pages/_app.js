import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
export const AuthContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [btn1, setbtn1] = useState(true);
  const [btn2, setbtn2] = useState(true);

  const contextValue = {
    btn1:btn1,
    btn1:btn2,
    sebtn1:setbtn1,
    setbtn2:setbtn2,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
