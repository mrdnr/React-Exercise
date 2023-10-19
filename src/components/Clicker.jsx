

function MouseClicker() {

    function handleClicker(e){
        return console.log(e.target.name);
    }

    return (
		<>
			<button name="one" onClick={handleClicker}>Click Me</button>
		</>
	);
}

export default MouseClicker;