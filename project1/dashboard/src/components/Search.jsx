import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
  return (
    <div className="relative w-80">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search Dashboard...."
        className="rounded-2xl py-1.5 px-1.5 w-full border border-gray-300 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default Search;
