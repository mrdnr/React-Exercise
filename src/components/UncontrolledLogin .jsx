import { useState } from "react";
import "./App.css";

function Login() {
	const [data, setData] = useState({
		username: "",
		password: "",
		remember: "",
	});

	function handleSubmit(e) {
		e.preventDefault();

		
		const formData = new FormData(e.target)

		console.log(formData.get('username'));
		setData({
			username: "",
			password: "",
			remember: "",
		});
	}
	//---------------------------------------------------------------------//
	// Advantages
    // - Ease of Use: The FormData API provides a convenient and straightforward way to capture form data. It automatically collects data from form elements.
    // - Support for File Uploads: If your form includes file inputs, FormData can handle file uploads seamlessly.
    // - Compatible with HTML Form Controls: The API is designed to work well with standard HTML form controls, making it easy to integrate with existing forms.
    // - Dynamic Handling: As new form fields are added or removed, the FormData API adapts dynamically.
	// Disadvantages
	// Limited to Forms: The FormData API is specifically designed for forms and might not be as versatile for handling other types of data.
	// Not Supported in All Environments: While widely supported in modern browsers, if your application needs to run in older browsers or environments without proper support, alternative methods might be required.
	
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
			>
				Submit
			</button>
			<button onClick={handleReset}>Reset</button>
		</form>
	);
}

const App = () => {
	return (
		<div id="app">
			<Login />
		</div>
	);
};

export default App;