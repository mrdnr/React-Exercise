

function MouseClicker() {

    function handleClicker(e){
        return console.log(e.currentTarget.name);
    }

    return (
		<>
			<button name="one" onClick={handleClicker}>Click One</button>
            <button name="two" onClick={handleClicker}>Click Two</button>
            <button name="three" onClick={handleClicker}>Click Three</button>
		</>
	);
}

export default MouseClicker;