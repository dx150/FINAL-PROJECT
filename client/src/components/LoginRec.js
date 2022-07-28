import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginRec } from "../JS/Actions/recAction";
import RegisterRec from "./RegisterRec";

function LoginRec() {
  const [email, setEmail] = useState("");
  const [password, setPasswod] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    dispatch(loginRec({ email, password }, navigate));
  };

  return (
    <div className="body">
      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img
              src="https://static1.shine.com/l/m/images/blog/job_search_portals.png"
              alt=""
            />
            <div className="text"></div>
          </div>
          <div className="back">
            <div className="text"></div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form onSubmit={submit}>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required
                      onChange={(e) => setPasswod(e.target.value)}
                      value={password}
                    />
                  </div>

                  <div className="button input-box">
                    <input type="submit" value="Sumbit" />
                  </div>
                  <div className="text sign-up-text">
                    Don't have an account?{" "}
                    <label htmlFor="flip">Sigup now</label>
                  </div>
                </div>
              </form>
            </div>

            <div className="signup-form">
              <div className="title">Signup</div>
              <RegisterRec />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRec;
