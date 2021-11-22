import React, { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { filter } from "../features/filterSlice";

export default function Filter() {
  const regions = ["", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleSelect = (region: string) => {
    dispatch(filter(region));
    setIsOpen(false);
    setSelectedRegion(region);
  };

  const handleSelectorClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const options = regions.map((region) => {
    return (
      <button
        onClick={() => handleSelect(region)}
        key={region}
        className="h-12 px-8 py-2 bg-light-primary dark:bg-primary w-full text-left"
      >
        {region ? region : "None"}
      </button>
    );
  });

  return (
    <div className="w-64 relative">
      <button
        onClick={handleSelectorClick}
        className="h-16 px-8 py-4 bg-light-primary dark:bg-primary rounded-lg flex items-center justify-between w-full"
      >
        {selectedRegion ? selectedRegion : 'Filter by Region'} <AiOutlineCaretDown />
      </button>
      {isOpen ? (
        <div className="mt-2 bg-light-primary dark:bg-primary rounded-lg overflow-hidden absolute z-10 w-full">
          {options}
        </div>
      ) : null}
    </div>
  );
}
