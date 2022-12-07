import { FC, useContext } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CiDark } from "react-icons/ci";
import { AiOutlineSend } from "react-icons/ai";
import { MdOutlineLightMode } from "react-icons/md";
import ThemeContext from "./context/ThemeContext";

import { darkModeBgAndText } from "./tailwindClasses";

const Header: FC = () => {
  const { darkMode, toggleDark } = useContext(ThemeContext);

  return (
    <header className={`px-10 ${darkModeBgAndText}`}>
      <nav className="py-4 md:py-10 container mx-auto flex flex-wrap flex-row justify-between">
        <a className="flex text-2xl items-center gap-1" href="/">
          <AiOutlineSend className="duration-300 rotate-45 hover:rotate-0 cursor-pointer" />
          <span>Omise</span>
        </a>
        {darkMode ? (
          <MdOutlineLightMode
            onClick={toggleDark}
            className="text-3xl cursor-pointer text-white"
          />
        ) : (
          <CiDark onClick={toggleDark} className="text-3xl cursor-pointer" />
        )}
      </nav>
    </header>
  );
};

export default Header;
