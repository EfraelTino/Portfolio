import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useTranslation } from "react-i18next";
export default function NavBar() {
  const [theme, setTeheme] = useState("dark");
  const [t, i18n] = useTranslation("global");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleTheme = () => {
    setTeheme(theme === "dark" ? "light" : "dark");
  };
  const [activeLanguage, setActiveLanguage] = useState("en");

  const changeLanguage = (language) => {
    setActiveLanguage(language);
    i18n.changeLanguage(language);
  };
  return (
    <div className="dark:bg-zinc-900 sticky top-0 z-10">
      <div className="mx-auto w-11/12 md:max-w-4xl   bg-white dark:bg-zinc-900">
        <header className="-full bottom-0 flex justify-between items-center py-1 px-5 z-20 bg-white dark:bg-zinc-900 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg">
          <div>
            <h2 className="text-zinc-900 font-black text-3xl dark:text-slate-100">
              Efrael
            </h2>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            <button
              className={`text-zinc-900 ${
                activeLanguage === "es" ? "dark:text-amber-400 underline font-black" : "text-slate-400 dark:text-slate-100 font-normal"
              }`}
              onClick={() => changeLanguage("es")}
            >
              ES
            </button>
            <button
              className={`text-zinc-900 ${
                activeLanguage === "en" ? "dark:text-amber-400 underline font-black" : "text-slate-400 dark:text-slate-100 font-normal"
              }`}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
            <button
              className="py-4 px-2 sm:py-5 flex items-center gap-4 outline-none "
              onClick={handleTheme}
            >
              {theme === "light" ? (
                <div className="i-fa-pro:sun text-2xl dark:hidden text-zinc-900">
                  <FaMoon />
                </div>
              ) : (
                <div className="i-fa-pro:moon text-2xl hidden dark:block text-amber-300">
                  <FaSun />
                </div>
              )}
            </button>
          </div>
        </header>
      </div>
    </div>
  );
}
