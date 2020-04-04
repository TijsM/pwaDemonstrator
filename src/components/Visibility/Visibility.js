import React, { useState } from "react";

const Visibility = () => {
  const [focus, setFocus] = useState(document.hasFocus());
  const [hidden, setHidden] = useState(document.hidden);

  setInterval(() => {
    setFocus(document.hasFocus());
    setHidden(document.hidden);
  }, 1000);

  hidden
    ? console.log("%cthe page was hidden", "color: red")
    : console.log("%cthe page is vissible", "color: green");

  return (
    <div>
      <h1>Focus and Visibility</h1>
      <div className="headerCaption">
        focus detects if the user is using the webpage <br />
        Visibility detects if the app is in use (minimized or not) (so you will
        probably never see the ✅ here 😉), but take a look in the log files
        after minimizing.
      </div>
      <div>
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

      <div>
        hidden:
        {hidden ? (
          <span role="img" aria-label="check">
            ✅
          </span>
        ) : (
          <span role="img" aria-label="cross">
            ❌
          </span>
        )}
      </div>
    </div>
  );
};

export default Visibility;
