import { useState } from "react";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: "",
  });

  const buttonStyle = {
    backgroundColor: data.password.length < 8 ? 'red' : 'green',
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get('username'));
    setData({
      username: "",
      password: "",
      remember: "",
    });
  }

  function handleReset() {
    setData({
      username: "",
      password: "",
      remember: "",
    });
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="remember">Dont Forget Me:</label>
        <input
          type="checkbox"
          name="remember"
          checked={data.remember}
          onChange={handleChange}
        />
      </div>
      <button
        disabled={data.username === "" || data.password === ""}
        type="submit"
        style={buttonStyle}
      >
        Submit
      </button>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}

export default Login;