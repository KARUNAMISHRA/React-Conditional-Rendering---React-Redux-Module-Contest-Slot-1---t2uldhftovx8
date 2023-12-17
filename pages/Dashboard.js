import { useContext, useEffect } from "react";
import { AuthContext } from "./_app";


function Dashboard() {
  const { btn1, btn2, setbtn1, setbtn2 } = useContext(AuthContext);

  return (
    <div id="dashboardPage">
     <button id="btn1" onClick={() => {setbtn1((prev) => !prev)}}>Button 1</button>
      <button id="btn2" onClick={() => {setbtn2((prev) => !prev)}}>Button 2</button>
      {btn1 && btn2 ? <div className="msg">Both are true</div>
      : !btn1 || !btn2 ? <div className="msg">One on them is false</div>
      : <div className="msg">Both are false</div>}
    </div>
  );
}
export default Dashboard;
