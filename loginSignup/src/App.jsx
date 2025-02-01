import React, { useState } from "react";
import Signup from "./Registration/Signup";
import Login from "./Registration/Login";

function App() {
  const [signedUp, setSignedUp] = useState(true);
  const Change = () => {
    setSignedUp(!signedUp);
  };
  


  return (
    <div style={{ marginTop: 50 }}>
      {signedUp ? <Login change={Change} /> : <Signup change={ Change} />}</div>
  );
}

export default App;
