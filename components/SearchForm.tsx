import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { update } from "../features/searchSlice";
import Loader from "./Loader";

export default function SearchForm() {
  const dispatch = useDispatch();
  const timeout = useRef<ReturnType<typeof setTimeout> | null>();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newInput = e.currentTarget.value;
    setIsLoading(true);
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      dispatch(update(newInput));
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      <div className="flex items-center dark:bg-primary h-16 rounded-lg">
        <FaSearch className="text-onPrimary mx-8 flex-shrink-0" />
        <input
          onChange={handleChange}
          className="w-full bg-transparent dark:text-onPrimary focus-within:text-background focus:outline-none"
          type="text"
          autoComplete="off"
          name="search"
          id="search"
          placeholder="Search for a country..."
        />
        {isLoading ? (
          <div className="p-2">
            <Loader />
          </div>
        ) : null}
      </div>
    </>
  );
}
