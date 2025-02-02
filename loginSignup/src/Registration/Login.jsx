import React, { useState } from "react";
import { supabase } from "../Client";

function Login({ change }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.SignInWithPassword({
      email,
      password,
    });
  };
  return (
    <div>
      <form>
        <div className="form-container">
          <div className="title-container">
            <h2 className="title-name">Login</h2>
            <div className="input-container">
              <input
                type="text"
                placeholder="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button>Login</button>
              <p onClick={change}>Don't have account</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
