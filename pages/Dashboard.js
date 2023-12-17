// import { useContext, useEffect } from "react";
// import { AuthContext } from "./_app";


// function Dashboard() {
//   const { } = useContext(AuthContext);

//   return (
//     <div id="dashboardPage">
//       <button id="btn1" >Button 1</button>
//       <button id="btn2" >Button 2</button>
//       <div className="msg">Both are true</div>
//       <div className="msg">One on them is false</div>
//       <div className="msg">Both are false</div>

//     </div>
//   );
// }
// export default Dashboard;


import { useContext, useState } from "react";
import { AuthContext } from "./_app";

function Dashboard() {
  const { } = useContext(AuthContext);

  const [btn1State, setBtn1State] = useState(true);
  const [btn2State, setBtn2State] = useState(true);

  const handleBtn1Click = () => {
    setBtn1State(!btn1State);
  };

  const handleBtn2Click = () => {
    setBtn2State(!btn2State);
  };

  return (
    <div id="dashboardPage">
      <button id="btn1" onClick={handleBtn1Click}>
        Button 1
      </button>
      <button id="btn2" onClick={handleBtn2Click}>
        Button 2
      </button>
      <div className="esg">
        {btn1State && btn2State && <div>Both are true</div>}
        {!btn1State && btn2State && <div>One of them is false</div>}
        {btn1State && !btn2State && <div>One of them is false</div>}
        {!btn1State && !btn2State && <div>Both are false</div>}
      </div>
    </div>
  );
}

export default Dashboard;
