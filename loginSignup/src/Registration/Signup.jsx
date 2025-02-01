import React from "react";

function Signup({ change}) {
  return (
    <div>
      <form>
        <div className="form-container">
          <div className="title-container">
            <h2 className="title-name">Signup</h2>
            <div className="input-container">
              <input type="email" placeholder="email" />
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />

              <button>Signup</button>
              <p onClick={change}>Already have an account</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
