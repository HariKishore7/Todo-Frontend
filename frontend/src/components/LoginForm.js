import React, { useState } from "react";
import "../App.css";

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <div className="welcome">Welcome back</div>
      <input
      className="ipfield"
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
      className="ipfield"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      {props.error ? <div className="error">{props.error}</div> : null}
      <button className="signupbtn" onClick={() => props.signupHandler(username, password)}>Sign Up</button>
      <button className="loginbtn" onClick={() => props.loginHandler(username, password)}>Log In</button>
    </div>
  );
}
