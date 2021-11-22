import Link from "next/link";
import React from "react";
import { HiSun, HiMoon } from "react-icons/hi";
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
    <header className="flex justify-between p-8 sm:px-10 lg:px-20 bg-light-primary  dark:bg-primary drop-shadow">
      <Link href="/" passHref>
        <p className="font-bold md:text-xl cursor-pointer">Where in The World?</p>
      </Link>
      <button onClick={handleClick} className="flex items-center font-semibold">
        {isDark ? (
          <>
            <HiSun className="mr-2 text-lg flex-shrink-0" />
            Light
          </>
        ) : (
          <>
            <HiMoon className="mr-2 text-lg flex-shrink-0" />
            Dark
          </>
        )}
      </button>
    </header>
  );
}
