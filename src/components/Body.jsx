import React, { useState } from "react";

function Body() {
  // State to manage the input value
  const [inputValue, setInputValue] = useState("");
  
  // State to manage loading state
  const [isLoading, setIsLoading] = useState(false);

  // State to manage display state
  const [displayContent, setDisplayContent] = useState("");

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle button click
  const handleButtonClick = () => {
    // Set loading to true
    setIsLoading(true);

    // Simulate loading delay (you can replace this with actual data fetching or processing)
    setTimeout(() => {
      // Set loading to false
      setIsLoading(false);
      
      setInputValue("");
      // Set display content to input value
      setDisplayContent(inputValue);
    }, 2000); // Adjust delay as needed
  };

  return (
    <div>
      <h1>MIND READER 🧠</h1>
      <hr />
      <p>What are you thinking about?</p>
      <input
        type="text"
        placeholder=""
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick} disabled={isLoading}>
        {isLoading ? "Loading..." : "Ok"}
      </button>
      {/* Display content after loading */}
      {displayContent && !isLoading && (
        <div style={{marginTop:'100px'}}>
          <p style={{fontSize:'20px'}}>You are thinking about <span style={{color:'red', fontWeight:'600'}}>{displayContent}</span></p>
        </div>
      )}
    </div>
  );
}

export default Body;
