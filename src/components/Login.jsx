import React, { useState } from "react";

function Login({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRemember = (e) => {
    setRemember(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Since the form is used, we can prevent page refreshing with each change.
    handleLogin({ username, password, remember });
  };

  const handleReset = () =>{
    setUsername("");
    setPassword("");
    setRemember(false);
  }

  const isForm = username.trim() !== "" && password.trim() !== "";
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <input
            type="text"
            placeholder="User Name"
            id="username"
            value={username}
            onChange={handleUsername}
          />
        </label>
        <label htmlFor="Password">
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
        </label>
        <label htmlFor="remember ">
          {" "}
          Don't forget me
          <input
            type="checkbox"
            id="remember"
            checked={remember}
            onChange={handleRemember}
          />
        </label>
        <button type="submit" disabled={!isForm}>
          Login
        </button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}

export default Login;
