

function MouseClicker() {

    function handleClicker(e){
        return console.log(e.target.name);
    }

    return (
		<>
			<button name="one" onClick={handleClicker}>Click Me
                <img src="https://www.view-page-source.com/i/view-source-cloud.webp" width={50} height={50} onClick={(e) => console.log(e.target.src)}/>
            </button>
            {/* Only change CurrentTarget to target */}
		</>
	);
}

export default MouseClicker;