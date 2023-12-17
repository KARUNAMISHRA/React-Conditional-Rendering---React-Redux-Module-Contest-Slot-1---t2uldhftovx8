import { useContext, useEffect } from "react";
import { AuthContext } from "./_app";


function Dashboard() {
  const { button1, button2 } = useContext(AuthContext);
  

  return (
    <div id="dashboardPage">
      <button id="btn1" onClick={()=>{
        button1.setBtn1(n=>!n)
      }}>Button 1</button>
      <button id="btn2" onClick={()=>{
        button2.setBtn2(n=>!n)
      }}>Button 2</button>
      {button1.btn1 && button2.btn2 && <div className="msg">Both are true</div>}
      {((!button1.btn1 && button2.btn2) ||  (button1.btn1 && !button2.btn2)) &&<div className="msg">One on them is false</div>}
      {(!button1.btn1 && !button2.btn2) &&<div className="msg">Both are false</div>}

    </div>
  );
}
export default Dashboard;
