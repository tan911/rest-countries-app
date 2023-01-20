import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Moon } from "../../assets/moon-outline.svg";

function Navigation() {
  const [theme, setTheme] = useState("light");

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
    <>
      <header className="bg-white dark:bg-el-dark-blue shadow">
        <nav className="one-row px-4 py-8 text-base font-bold md:px-10 2xl:px-24">
          <h1 className="font-sans md:text-xl lg:text-2xl 2xl:text-3xl">
            Where in the world?
          </h1>
          <button
            onClick={switchThemeHandler}
            type="button"
            className="one-row gap-2 font-light md:text-lg 2xl:text-xl"
          >
            <Moon aria-hidden="true" focusable="false" />
            Dark Mode
          </button>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Navigation;
