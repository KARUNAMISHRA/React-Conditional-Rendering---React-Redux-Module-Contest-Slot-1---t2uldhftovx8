// import "@/styles/globals.css";
// import React, { useEffect, useState } from "react";
// export const AuthContext = React.createContext();

// export default function App({ Component, pageProps }) {

//   const contextValue = {

//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       <Component {...pageProps} />
//     </AuthContext.Provider>
//   );
// }

import "@/styles/globals.css";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function App({ Component, pageProps }) {
  const [btn1State, setBtn1State] = useState(true);
  const [btn2State, setBtn2State] = useState(true);

  const toggleBtn1State = () => {
    setBtn1State(!btn1State);
  };

  const toggleBtn2State = () => {
    setBtn2State(!btn2State);
  };

  const contextValue = {
    btn1State,
    btn2State,
    toggleBtn1State,
    toggleBtn2State,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
