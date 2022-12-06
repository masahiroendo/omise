import { useContext } from "react";

import { darkModeBgAndText } from "./tailwindClasses";
import Header from "./Header";
import ThemeContext from "./assets/context/themeContext";

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header />
      <main className={`${darkModeBgAndText}`}></main>
    </div>
  );
}

export default App;
