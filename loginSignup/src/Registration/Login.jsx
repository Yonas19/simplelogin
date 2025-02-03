import React, { useState } from "react";
import { supabase } from "../Client";

function Login({ change }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) { setError(error.message) }
    else {
      
      alert("logged in successfully!")
      window.location.reload()
    }
  };
  const handleOAuthProvider = async () => {

    const { error} = supabase.auth.signInWithOAuth({
      provider: 'email'
    })
    if (error) setError(error.message)
  }
 
  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="form-container">
          <div className="title-container">
            <h2 className="title-name">Login</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}

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
              <button type="submit">Login</button>
              <button className='loginwgoogle' onClick={handleOAuthProvider}>Login with google</button>
              <p onClick={change}>Don't have account</p>
            </div>
          </div>
        </div>
      </form>
      
    </div>
  );
}

export default Login;
