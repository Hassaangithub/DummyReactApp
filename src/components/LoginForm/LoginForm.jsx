import router from "next/router";
import React from "react";
import styles from "./LoginFormStyles";
import { useRouter } from "next/router";

function LoginForm() {
  const router = useRouter();
  return (
    <div className="loginBody">
      <div className="container">
        <div className="containerForms">
          <div className="containerInfo">
            <div className="infoItem">
              <div className="table">
                <div className="tableCell">
                  <p>Have an account?</p>
                  <button className="infoBtn">Log in</button>
                </div>
              </div>
            </div>
            <div className="infoItem">
              <div className="table">
                <div className="tableCell">
                  <p>Don&apos;t have an account?</p>
                  <button className="infoBtn">Sign up</button>
                </div>
              </div>
            </div>
          </div>
          <div className="containerForm">
            <div className="form-item log-in">
              <div className="table">
                <div className="tableCell">
                  <input
                    className="input"
                    name="Username"
                    placeholder="Username"
                    type="text"
                  />
                  <input
                    className="input"
                    name="Password"
                    placeholder="Password"
                    type="Password"
                  />
                  <button
                    className="btn"
                    onClick={() => router.push("/first-page")}
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
            <div className="form-item sign-up">
              <div className="table">
                <div className="tableCell">
                  <input
                    className="input"
                    name="email"
                    placeholder="Email"
                    type="text"
                  />
                  <input
                    className="input"
                    name="fullName"
                    placeholder="Full Name"
                    type="text"
                  />
                  <input
                    className="input"
                    name="Username"
                    placeholder="Username"
                    type="text"
                  />
                  <input
                    name="Password"
                    placeholder="Password"
                    type="Password"
                    className="input"
                  />
                  <button className="btn">Sign up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
}

export default LoginForm;
