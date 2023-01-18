import { useState, useEffect } from "react";
import { ReactComponent as Moon } from "../assets/moon-outline.svg";

function Navigation() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const switchThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="bg-white dark:bg-el-dark-blue shadow-xs shadow-text-very-dark-blue">
      <nav className="one-row px-6 py-8 text-base font-bold">
        <h1 className="font-sans">Where in the world?</h1>
        <button
          onClick={switchThemeHandler}
          type="button"
          className="one-row gap-2 font-light"
        >
          <Moon aria-hidden="true" focusable="false" />
          Dark Mode
        </button>
      </nav>
    </header>
  );
}

export default Navigation;
