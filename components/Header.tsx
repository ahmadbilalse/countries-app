import Link from "next/link";
import React from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { switchTheme } from "../features/themeSlice";

export default function Header() {
  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  const handleClick = () => {
    dispatch(switchTheme());
  };

  return (
    <header className="flex items-center justify-between p-8 sm:px-10 lg:px-20 bg-light-primary  dark:bg-primary drop-shadow">
      <Link href="/" passHref>
        <p className="font-bold md:text-xl cursor-pointer">
          Where in The World?
        </p>
      </Link>
      <div className="flex items-center">
        <a
          href="https://github.com/ahmadbilalse/countries-app"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center font-semibold tracking-widest px-4 h-11"
        >
          <FaGithub className="text-xl flex-shrink-0" />
        </a>
        <button
          onClick={handleClick}
          className="flex items-center justify-center font-semibold tracking-widest px-4 sm:w-32 h-11"
        >
          {isDark ? (
            <>
              <HiSun className="text-2xl flex-shrink-0" />
              <span className="ml-2 hidden sm:block">LIGHT</span>
            </>
          ) : (
            <>
              <HiMoon className="text-2xl flex-shrink-0" />
              <span className="ml-2 hidden sm:block">DARK</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}
