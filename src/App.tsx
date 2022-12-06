import { CiDark } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineLightMode } from "react-icons/md";
import { useState } from "react";

import { darkModeBgAndText } from "./tailwindClasses";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const switchThemeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <header className={`px-10 ${darkModeBgAndText}`}>
        <nav className={"py-10 flex justify-between"}>
          <h1 className="text-2xl">Omise</h1>
          <ul className="flex items-center">
            <li>
              <a href="#home">
                <AiOutlineHome />
              </a>
            </li>
            <li>
              {darkMode ? (
                <MdOutlineLightMode
                  onClick={switchThemeMode}
                  className="text-3xl cursor-pointer text-white"
                />
              ) : (
                <CiDark
                  onClick={switchThemeMode}
                  className="text-3xl cursor-pointer"
                />
              )}
            </li>
          </ul>
        </nav>
      </header>
      <main className={`${darkModeBgAndText}`}></main>
    </div>
  );
}

export default App;
