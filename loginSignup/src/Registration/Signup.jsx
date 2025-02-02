import React, { useState } from "react";
import { supabase } from "../Client";

function Signup({ change }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    else {
      alert("Successgully registered");
      change();
    }
  };
  return (
    <div>
      <form onSubmit={handleSignUp}>
        <div className="form-container">
          <div className="title-container">
            <h2 className="title-name">Signup</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <div className="input-container">
              <input type="email" placeholder="email" value = {email} onChange={(e) => setEmail(e.target.value)} />
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" value={password} onChange ={(e) => setPassword(e.target.value)} />

              <button type="submit">Sign Up</button>
              <p onClick={change}>Already have an account</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
