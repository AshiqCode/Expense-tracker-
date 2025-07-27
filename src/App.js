import { useState } from "react";
import "./App.css";
import Expenses from "./Expenses";
import CurrentPopUP from "./CurrentPopUP";

function App() {
  const handleUserData = (e) => {
    setshowUserData(true);
    setcurrentData({
      Subject: e.Subject,
      Merchant: e.Merchant,
      Date: e.Date,
      Total: e.Total,
      Category: e.Category,
      Description: e.Description,
      Employee: e.Employee,
      id: e.id,
    });
  };
  const [showPopUp, setshowPopUp] = useState(false);
  const [showUserData, setshowUserData] = useState(false);
  const [currentData, setcurrentData] = useState([]);

  return (
    <div className="App">
      <Expenses
        setshowPopUp={setshowPopUp}
        showPopUp={showPopUp}
        handleUserData={handleUserData}
      />
      <CurrentPopUP
        showUserData={showUserData}
        setshowUserData={setshowUserData}
        currentData={currentData}
      />
    </div>
  );
}

export default App;
