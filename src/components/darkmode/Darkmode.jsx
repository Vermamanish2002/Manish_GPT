import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import "./Darkmode.css";
const Darkmode = () => {
  const [mode, setMode] = useState("darkmode");
  function toggle() {
    if (mode === "darkmode") {
      setMode("lightmode");
    } else {
      setMode("darkmode");
    }
  }
  useEffect(() => {
    document.body.className = mode;
  }, [mode]);
  return (
    <div>
      {" "}
      <button
        title={mode === "darkmode" ? "light-mode" : "Dark-mode"}
        className="darkmode-btn"
        onClick={() => {
          toggle();
        }}
      >
        {mode === "lightmode" ? <FaMoon /> : <MdOutlineWbSunny />}
      </button>
    </div>
  );
};

export default Darkmode;
