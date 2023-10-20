import React ,{ useState } from "react";
import InteractiveWelcome  from './components/Welcome'
import "./App.css";


const App = () => {

	const [nameInput, setNameInput] = useState('')
	function handleChange(e) {
		setNameInput(e.target.value)
	}

	return (
		<div className="app">
			<InteractiveWelcome  value={nameInput} onChange={handleChange}/>
		</div>
	);
};

export default App;