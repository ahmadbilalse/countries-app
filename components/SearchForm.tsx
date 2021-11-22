import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { update } from "../features/searchSlice";
import Loader from "./Loader";

export default function SearchForm() {
  const dispatch = useDispatch();
  const input = useSelector((state: RootState) => state.search.input);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>();
  const [isLoading, setIsLoading] = useState(false);
  const [localInput, setLocalInput] = useState(''); 

  useEffect(() => {
    setLocalInput(input);
  }, [])

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newInput = e.currentTarget.value;
    setLocalInput(newInput);
    setIsLoading(true);
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      dispatch(update(newInput));
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      <div className="flex items-center bg-light-primary dark:bg-primary h-16 rounded-lg drop-shadow">
        <FaSearch className="text-light-onPrimary dark:text-onPrimary mx-8 flex-shrink-0" />
        <input
          onChange={handleChange}
          className="w-full bg-transparent focus-within:text-light-onPrimary dark:focus-within:text-onPrimary focus:outline-none"
          type="text"
          autoComplete="off"
          name="search"
          id="search"
          placeholder="Search for a country..."
          value={localInput}
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
