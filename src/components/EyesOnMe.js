import React from "react";

function EyesOnMe() {
  // Event handler function for when the button receives focus
  const handleFocus = () => {
    console.log("Good!");
  };

  // Event handler function for when the button loses focus
  const handleBlur = () => {
    console.log("Hey! Eyes on me!");
  };

  return (
    <button onFocus={handleFocus} onBlur={handleBlur}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
