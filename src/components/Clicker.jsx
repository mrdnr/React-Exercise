function MouseClicker() {
  function handleClicker(e) {
    console.log(e.target.src);
  }
  
  return (
    <>
      <button name="one"> 
        Click Me
        <img
          src="https://www.view-page-source.com/i/view-source-cloud.webp"
          width={50}
          height={50}
          onClick={handleClicker}
        />
      </button>
      
    </>
  );
}

export default MouseClicker;
