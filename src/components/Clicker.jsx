

function MouseClicker() {

    function handleClicker(e){
        return console.log(e.target.name);
    }

    return (
		<>
			<button name="one" onClick={handleClicker}>Click Me
                <img src="https://www.view-page-source.com/i/view-source-cloud.webp" width={50} height={50} onClick={(e) => console.log(e.target.src)}/>
            </button>
            {/* The onclick event in the img tag shows its own target. */}
		</>
	);
}

export default MouseClicker;