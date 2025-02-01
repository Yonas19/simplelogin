import React from "react";

function Login({change}) {
  return (
    <div>
      <form>
        <div className="form-container">
          <div className="title-container">
            <h2 className="title-name">Login</h2>
            <div className="input-container">
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
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
