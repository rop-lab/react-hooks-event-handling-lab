import React from "react";

function Keypad() {
  // Event handler function for input change event
  const handleChange = (event) => {
    console.log("Entering password...");
  };

  return (
    <div>
      {/* Render an input field with type set to "password" and attach onChange event handler */}
      <input type="password" onChange={handleChange} />
    </div>
  );
}

export default Keypad;
