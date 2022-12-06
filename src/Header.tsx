import { FC, useContext } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import ThemeContext from "./assets/context/themeContext";

import { darkModeBgAndText } from "./tailwindClasses";

const Header: FC = () => {
  const { darkMode, toggleDark } = useContext(ThemeContext);

  return (
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
                onClick={toggleDark}
                className="text-3xl cursor-pointer text-white"
              />
            ) : (
              <CiDark
                onClick={toggleDark}
                className="text-3xl cursor-pointer"
              />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
