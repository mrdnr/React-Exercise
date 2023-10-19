

function MouseClicker() {

    function handleClicker(e){
        return console.log(e.target.name);
    }

    return (
		<>
			<button name="one" onClick={handleClicker}>Click Me
                <img width={10} height={10}/>
            </button>
		</>
	);
}

export default MouseClicker;