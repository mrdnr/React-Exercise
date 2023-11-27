import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
    setFormData({
      username: "",
      password: "",
      remember: "",
    });
  }

  function handleReset() {
    setFormData({
      username: "",
      password: "",
      remember: "",
    });
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    console.log(name);

    setFormData({
      ...formData,
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
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="remember">Don't Forget Me:</label>
        <input
          type="checkbox"
          name="remember"
          checked={formData.remember}
          onChange={handleChange}
        />
      </div>
      <button
        disabled={formData.username === "" || formData.password === ""}
        type="submit"
      >
        Submit
      </button>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}

export default Login;
