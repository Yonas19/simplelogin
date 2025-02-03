import React, { useEffect, useState } from "react";
import Signup from "./Registration/Signup";
import Login from "./Registration/Login";
import { supabase } from "./Client";

function App() {
  const [signedUp, setSignedUp] = useState(true);
  const [user, setUser] = useState(null)
  const Change = () => {
    setSignedUp(!signedUp);
  };
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    } 
    getUser()
  },[])
  return (
    <div style={{ marginTop: 50 }}>
      {signedUp ? <Login change={Change} /> : <Signup change={ Change} />}</div>
  );
}

export default App;
