import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
export const AuthContext = React.createContext();

export default function App({ Component, pageProps }) {

    const [btn1, setBtn1] = useState(true)
    const [btn2, setBtn2] = useState(true)
  const contextValue = {
    button1:{btn1, setBtn1},
    button2: {btn2, setBtn2}
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
