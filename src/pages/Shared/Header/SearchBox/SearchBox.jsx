import React from "react";
import { CiSearch } from "react-icons/ci";
const SearchBox = () => {
  //
  const handleSearch = (event) => {
    event.preventDefault();
    console.log(event.target.search.value);
  };
  return (
    <form className="ml-10 flex items-center" onSubmit={handleSearch}>
      <input
        type="text"
        className="bg-D-gry p-3 text-gray-500 w-[620px] outline-none"
        name="search"
        placeholder="Search in Daraz"
      />
      <button type="submit" className="p-3 bg-D-primary text-white ">
        <CiSearch size={24} />
      </button>
    </form>
  );
};

export default SearchBox;
