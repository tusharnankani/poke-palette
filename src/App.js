import React from "react";
import { useState, useEffect, useRef } from "react";
import "./App.css";

const KEY_CODE = {
  CTRL: "17",
  CTRL_K: "1775",
  ESC: "27",
};

function App() {
  let globalString = "";
  const homeRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);

  const resetGlobalString = () => {
    globalString = "";
  };

  /**
   * handleKeyDown function
   * To detect keydown events and identify `CTRL K` or `Esc`
   */
  const handleKeyDown = (event) => {
    let keyCode = event.keyCode || event.which;
    globalString += keyCode;

    // detect CTRL + K;
    if (globalString.slice(-4) === KEY_CODE.CTRL_K) {
      // to override CTRL + K of the browser;
      event.preventDefault();

      // change state here;
      console.log("YAYY");
      setOpenModal((prevState) => !prevState);

      resetGlobalString();
    } else {
      let lastTwoKeys = globalString.slice(-2);
      if (lastTwoKeys !== KEY_CODE.CTRL && lastTwoKeys !== KEY_CODE.ESC) {
        resetGlobalString();
      }
    }
  };

  /**
   * Function to gain focus when component loses focus;
   * Such that Ctrl K is successfully activated;
   */
  const focusHomeComponent = () => {
    homeRef.current.focus();
  };

  useEffect(() => {
    // Function to focus when the component renders;
    focusHomeComponent();
  }, []);

  return (
    <div
      className="home"
      onKeyDown={handleKeyDown}
      ref={homeRef}
      onBlur={focusHomeComponent}
      tabIndex="0"
    >
      Press CTRL K to get started.
    </div>
  );
}

export default App;
