import React, { useState } from "react";

const Visibility = () => {
  const [focus, setFocus] = useState(document.hasFocus());

  setInterval(() => {
    setFocus(document.hasFocus());
  }, 300);

  return (
    <div>
      <h1>Focus and Visibility</h1>
      <div className="headerCaption">
        focus detects if the user is using the webpage <br />
        Visibility detects if the app is in use (minimized or not)
      </div>
      focus:
      {focus ? (
        <span role="img" aria-label="check">
          ✅
        </span>
      ) : (
        <span role="img" aria-label="cross">
          ❌
        </span>
      )}
    </div>
  );
};

export default Visibility;
