import React from "react";
import { FaSearch } from 'react-icons/fa';

export default function SearchForm() {
  return (
    <div className="flex items-center dark:bg-primary h-16 rounded-lg">
      <FaSearch className="text-onPrimary mx-8" />
      <input
        className="w-full bg-transparent dark:text-onPrimary focus-within:text-background focus:outline-none"
        type="text"
        autoComplete="off"
        name="search"
        id="search"
        placeholder="Search for a country..."
      />
    </div>
  );
}
