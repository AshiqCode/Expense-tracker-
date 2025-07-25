import { useState } from "react";
import "./App.css";
import Expenses from "./Expenses";

function App() {
  const [showPopUp, setshowPopUp] = useState(false);

  return (
    <div className="App">
      <Expenses setshowPopUp={setshowPopUp} showPopUp={showPopUp} />
    </div>
  );
}

export default App;
