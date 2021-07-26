import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus, setDarkMode, darkMode }) => {
  return (
    <nav>
      <h1>
        <span className="mode">
          <FontAwesomeIcon
            icon={faLightbulb}
            onClick={() => setDarkMode(!darkMode)}
          />
        </span>
        Waves
      </h1>
      <button
        onClick={() => setLibraryStatus(!libraryStatus)}
        className={`${darkMode ? "btn-dark" : ""} `}
      >
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};
export default Nav;
