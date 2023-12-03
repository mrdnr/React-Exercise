import { useState } from "react";


function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log(formData.get("username"));
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
    console.log(name);

    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  return (
    <div className="max-w-md mx-auto mt-10 border rounded-md p-8 bg-red-500">
      <form onSubmit={handleSubmit}>
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="username"
        >
          Username:
        </label>
        <input
          className="w-full border border-gray-300 rounded-md p-2"
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
        />

        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="password"
        >
          Password:
        </label>
        <input
          className="w-full border border-gray-300 rounded-md p-2"
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />

        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="remember"
        >
          Remember Me:
        </label>
        <input
          className="mr-2 mt-1"
          type="checkbox"
          name="remember"
          checked={data.remember}
          onChange={handleChange}
        />

        <button
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-75"
          disabled={data.username === "" || data.password === ""}
          type="submit"
        >
          Submit
        </button>
        <button
          className="inline-block ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleReset}
        >
          Reset
        </button>
      </form>
    </div>
  );
}

export default Login;
